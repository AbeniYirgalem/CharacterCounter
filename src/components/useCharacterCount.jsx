import { useReducer, useCallback } from "react";

// Reducer function for state management
const charReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TEXT":
      return action.payload.length <= state.maxLength
        ? { ...state, text: action.payload, count: action.payload.length }
        : state;
    default:
      return state;
  }
};

// Custom Hook for character counting
export const useCharacterCount = (maxLength) => {
  const [state, dispatch] = useReducer(charReducer, {
    text: "",
    count: 0,
    maxLength,
  });

  const updateText = useCallback((newText) => {
    dispatch({ type: "UPDATE_TEXT", payload: newText });
  }, []);

  return { state, updateText };
};
