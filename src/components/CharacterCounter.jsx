import React, { useMemo } from "react";
import { useCharacterCount } from "./useCharacterCount";
import "bootstrap/dist/css/bootstrap.min.css";

const CharacterCounter = ({ maxLength = 200 }) => {
  const { state, updateText } = useCharacterCount(maxLength);

  // Calculate progress percentage
  const percentage = useMemo(
    () => (state.count / state.maxLength) * 100,
    [state.count, state.maxLength]
  );

  // Determine progress bar color
  const progressBarClass = useMemo(() => {
    if (percentage >= 100) return "bg-danger";
    if (percentage >= 80) return "bg-warning";
    return "bg-success";
  }, [percentage]);

  // Determine character count text color
  const charCountClass = useMemo(() => {
    if (state.count === state.maxLength) return "text-danger";
    if (state.count >= 0.8 * state.maxLength) return "text-warning";
    return "text-success";
  }, [state.count, state.maxLength]);

  const charCountDisplay = useMemo(
    () => `${state.count} / ${state.maxLength} characters`,
    [state.count, state.maxLength]
  );

  return (
    <div className="p-4 mx-auto border rounded-lg shadow-lg" style={{ maxWidth: "500px" }}>
      <h3 className="mb-3">Character Counter</h3>
      <textarea
        className="form-control mb-2"
        rows="5"
        value={state.text}
        onChange={(e) => updateText(e.target.value)}
        placeholder="Start typing here..."
        aria-label="Character counter input"
      />
      
      <div className="progress mb-2">
        <div
          className={`progress-bar ${progressBarClass}`}
          role="progressbar"
          style={{ width: `${percentage}%` }}
          aria-valuenow={percentage}
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>

      <div className={`d-flex justify-content-between align-items-center`}>
        <div className="text-muted small">
          {state.count === state.maxLength && (
            <span className="text-danger">
              <i className="bi bi-exclamation-triangle-fill me-1"></i>
              Maximum reached!
            </span>
          )}
        </div>
        <div className={`small ${charCountClass}`}>
          {charCountDisplay}
        </div>
      </div>

      {state.count === state.maxLength && (
        <div className="alert alert-danger mt-3" role="alert">
          <i className="bi bi-exclamation-octagon-fill me-2"></i>
          You've reached the maximum character limit!
        </div>
      )}
    </div>
  );
};

export default CharacterCounter;