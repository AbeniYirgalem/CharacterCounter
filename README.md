# Character Counter

## Overview

The **Character Counter** is a React component that provides real-time character counting for a textarea input. It displays a progress bar and warns users when they approach or exceed the character limit. The component utilizes Bootstrap for styling and `useMemo` for optimized rendering.

## Features

- Live character counting.
- A dynamic progress bar indicating usage.
- Color-coded warnings when reaching limits.
- Bootstrap-styled UI for a polished look.
- Alerts when the character limit is reached.

## Installation

### Prerequisites

Ensure you have **Node.js** and **npm** or **yarn** installed.

### Steps

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/character-counter.git
   cd character-counter
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
   or
   ```sh
   yarn install
   ```
3. Start the development server:
   ```sh
   npm start
   ```
   or
   ```sh
   yarn start
   ```

## Usage

### Import the Component

```jsx
import CharacterCounter from "./CharacterCounter";
```

### Use in Your App

```jsx
function App() {
  return (
    <div className="container mt-5">
      <CharacterCounter maxLength={200} />
    </div>
  );
}

export default App;
```

## Dependencies

- React
- Bootstrap (`bootstrap/dist/css/bootstrap.min.css`)
- Bootstrap Icons (optional, for warning icons)

## Notes

If you use Bootstrap Icons, ensure you include them in `index.html`:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"
/>
```

## Contributing

Feel free to submit issues or pull requests to improve the project!

---

