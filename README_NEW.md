# Product Dashboard

A simple product listing dashboard built with React. Browse, search, and filter products from an API with a clean, professional interface.

## Features

- Display products in a responsive grid layout
- Search products by name or description  
- Sort by name or price
- Pagination with 12 items per page
- Loading states and error handling
- Mobile-friendly design
- Debounced search for performance

## Tech Stack

- React 18
- React Hooks (useState, useEffect, useMemo, useContext)
- Context API for state management
- CSS Grid & Flexbox
- FakeStore API for data

## Setup

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm start
```

The app will run at `http://localhost:3000`

### Build for Production
```bash
npm run build
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Dashboard.jsx   # Main page
│   ├── Card.jsx        # Product card
│   ├── SearchBar.jsx   # Search input
│   ├── SortBar.jsx     # Sort dropdown
│   ├── Pagination.jsx  # Page controls
│   ├── Loader.jsx      # Loading spinner
│   └── ErrorMessage.jsx # Error display
├── context/
│   └── ProductContext.jsx # State management
├── services/
│   └── api.js          # API requests
├── styles/             # CSS files
├── App.jsx             # Root component
└── index.js            # Entry point
```

## How It Works

### Search
Type in the search box to filter products. Search has a 300ms debounce to optimize performance.

### Sort
Use the dropdown to sort by:
- Name (A-Z)
- Price (low to high)
- Price (high to low)

### Pagination
Navigate between pages with the Previous/Next buttons or click specific page numbers. Each page displays 12 products.

## Usage Notes

- The app fetches data from [FakeStore API](https://fakestoreapi.com)
- 12 products per page
- Search works on both product title and description
- Category badge displayed on each card
- Error messages show with a retry button
- Smooth scroll to top when navigating pages
