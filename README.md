# next-autocomplete-filter
A reusable and highly efficient country autocomplete filter component built using React, TypeScript, and Next.js. This component provides fast and responsive search functionality, optimized for performance with features like debouncing, caching, and minimized re-renders.

## Features

- 🔍 **Autocomplete**: Provides a real-time country search with an intuitive interface.
- 💾 **Debouncing**: Limits excessive API calls by debouncing user input.
- 📊 **Caching**: Caches previous search results to improve user experience by reducing load times.
- ⚡ **Optimized Rendering**: Avoids unnecessary re-renders using React memoization and the `useReducer` hook for state management.
- 🚀 **Next.js Integration**: Uses Next.js' `useRouter` and `useSearchParams` for managing query parameters seamlessly.

## Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/react-country-autocomplete-filter.git
```

## Install dependencies:
```bash
npm install
npm run dev
```

## Usage
You can integrate this component into any React application. Here’s an example of how to use it:

```typescript
import { Filter } from './components/Filter';

function App() {
  return (
    <div className="App">
      <Filter />
    </div>
  );
}

export default App;
```

## Customization
* You can customize the appearance and behavior of the FilterInput component.
* Modify debounce delay, API endpoints, or error handling according to your needs.

## Components
### Filter
The main component that manages the state of the autocomplete feature and renders the input and results list.

### FilterInput
A reusable input field with debounced onChange functionality and query param updates via Next.js router.

### FilterList
Renders the list of countries based on the search results.

### FilterItem
Displays individual country items with the search term highlighted.

## Contributions
Feel free to submit issues or pull requests. Contributions to improve performance or add new features are always welcome.
