<<<<<<< HEAD
# Product Dashboard - Modern React Application

A clean, production-ready React dashboard for browsing and filtering products from a mock API. Built with modern best practices, responsive design, and comprehensive features.

## 🌟 Features

### Core Features
- ✅ **API Integration** - Fetches data from [FakeStore API](https://fakestoreapi.com)
- ✅ **Responsive Grid Layout** - Automatic responsive grid with CSS Grid
- ✅ **Product Cards** - Beautiful cards with image, title, price, and description
- ✅ **Search Functionality** - Debounced search with 300ms delay for performance
- ✅ **Sorting Options** - Sort by name (A-Z) or price (ascending/descending)
- ✅ **Loading State** - Animated spinner while fetching data
- ✅ **Error Handling** - User-friendly error messages with retry button
- ✅ **Pagination** - Navigate through pages (12 items per page)

### Technical Features
- ✅ **Context API** - Global state management for products, search, sort, and pagination
- ✅ **Functional Components** - All components built with React Hooks (useState, useEffect, useMemo)
- ✅ **Custom Hooks** - `useProduct` hook for accessing context
- ✅ **Debounced Search** - Optimized search with 300ms debounce
- ✅ **Lazy Loading** - Images load lazily for performance
- ✅ **Error Boundaries** - Proper error handling and fallbacks
- ✅ **Accessible** - With proper ARIA labels and semantic HTML
- ✅ **Mobile Responsive** - Fully responsive on all screen sizes

## 📁 Project Structure

```
src/
├── components/
│   ├── Dashboard.jsx         # Main dashboard component
│   ├── Card.jsx             # Reusable product card component
│   ├── SearchBar.jsx        # Debounced search input
│   ├── SortBar.jsx          # Sorting and results count
│   ├── Loader.jsx           # Loading spinner
│   ├── ErrorMessage.jsx     # Error display component
│   └── Pagination.jsx       # Pagination controls
├── context/
│   └── ProductContext.jsx   # Context API for state management
├── services/
│   └── api.js               # API service with fetch methods
├── styles/
│   ├── App.css              # Global styles
│   ├── Dashboard.css        # Dashboard layout
│   ├── Card.css             # Card component styles
│   ├── SearchBar.css        # Search input styles
│   ├── SortBar.css          # Sort controls styles
│   ├── Loader.css           # Loading spinner styles
│   ├── Error.css            # Error message styles
│   └── Pagination.css       # Pagination styles
├── App.jsx                  # Root component
└── index.js                 # React entry point
public/
└── index.html               # HTML template
package.json                 # Dependencies and scripts
README.md                    # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Navigate to project directory**
   ```bash
   cd Task-1
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

The application will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

Creates an optimized production build in the `build/` directory.

## 🎯 How to Use

### Searching
- Type in the search bar to filter products by name or description
- Search is debounced (300ms delay) for optimal performance
- Click the ✕ button to clear search

### Sorting
- Use the dropdown to sort by:
  - **Name (A-Z)** - Alphabetical order
  - **Price (Low to High)** - Ascending price order
  - **Price (High to Low)** - Descending price order

### Pagination
- Navigate between pages using Previous/Next buttons
- Click page numbers to jump to a specific page
- Each page displays 12 products
- Pagination updates after searching or sorting

### Product Cards
- View product image, title, price, and description
- Category badge shows product category
- "View Details" button for product interaction

## 🏗️ Component Architecture

### Dashboard Component
Main component that orchestrates all sub-components and displays products in a responsive grid.

### Card Component
Reusable product card with:
- Product image with lazy loading and error fallback
- Category badge
- Title (truncated to 2 lines)
- Price display
- Description preview (truncated to 2 lines)
- Interactive button

### SearchBar Component
- Debounced input for performance
- Clears pagination when searching
- Clear button for easy reset

### SortBar Component
- Dropdown with multiple sort options
- Displays total number of results
- Updates pagination on sort change

### Pagination Component
- Shows current page and total pages
- Smart page number display
- Smooth scroll to top on page change
- Accessible navigation

### Context API (ProductContext)
Manages global state including:
- Products array
- Loading and error states
- Search term
- Sort preference
- Current page and pagination logic
- Filtered and sorted products
- Pagination methods

## 📱 Responsive Design

The application is fully responsive with breakpoints at:
- **1024px** - Tablet/Large screens
- **768px** - Tablet
- **480px** - Mobile

Grid adjusts from 4+ columns on desktop to 2-3 columns on tablet to 1-2 on mobile.

## 🎨 Design Features

- **Modern Gradient Design** - Purple gradient theme (#667eea to #764ba2)
- **Smooth Animations** - Fade-in effects, hover animations, transitions
- **Professional Color Palette** - Carefully chosen colors for accessibility
- **Consistent Spacing** - Grid-based spacing system
- **Hover Effects** - Cards lift on hover with shadow enlargement
- **Loading States** - Animated spinner for visual feedback
- **Error States** - Clear error messages with retry option

## 🔧 Technology Stack

- **React 18** - UI library
- **React Hooks** - State management (useState, useEffect, useMemo, useContext)
- **Context API** - Global state management
- **CSS3** - Styling with Grid, Flexbox, Animations
- **FakeStore API** - Mock data source
- **ES6+** - Modern JavaScript

## 📊 State Management

All state is managed through Context API (`ProductContext`):

```javascript
{
  products: [],              // All fetched products
  loading: false,            // Loading state
  error: null,              // Error messages
  searchTerm: '',           // Current search text
  sortBy: 'name',           // Sort criteria
  currentPage: 1,           // Current pagination page
  paginatedProducts: [],    // Filtered, sorted, and paginated products
  filteredAndSortedProducts: [], // All filtered and sorted products
  totalPages: 3,            // Total number of pages
  handleSearch,             // Search handler
  handleSort,               // Sort handler
  handlePageChange,         // Pagination handler
}
```

## 🔍 API Integration

Uses FakeStore API endpoints:
- `GET /products` - Fetch all products
- `GET /products/categories` - Fetch all categories
- `GET /products/category/{category}` - Fetch products by category

Error handling includes:
- Network error catching
- User-friendly error messages
- Retry functionality

## ⚡ Performance Optimizations

- **Debounced Search** - 300ms debounce to reduce re-renders
- **Memoized Values** - useMemo for filtered and sorted products
- **Lazy Image Loading** - Images load lazily as needed
- **Image Error Fallback** - Placeholder image for broken images
- **CSS Grid** - Efficient layout rendering
- **Production Build** - Optimized minified output

## 🧪 Best Practices Implemented

✅ Functional components with hooks  
✅ Clean separation of concerns  
✅ Reusable components  
✅ Proper error handling  
✅ Loading states and feedback  
✅ Accessible (semantic HTML, ARIA labels)  
✅ Responsive design  
✅ Performance optimizations  
✅ Clean code structure  
✅ Comments and documentation  
✅ CSS standards and organization  
✅ Consistent naming conventions  

## 🎓 Learning Outcomes

This project demonstrates:
- Advanced React patterns and hooks
- Context API for state management
- Responsive design with CSS Grid
- API integration and error handling
- Performance optimization techniques
- Component composition and reusability
- CSS animations and transitions
- Mobile-first development
- Production-ready code practices

## 📝 Customization

### Change API Source
Edit [src/services/api.js](src/services/api.js) to use a different API:

```javascript
const API_BASE_URL = 'https://your-api-url.com';
```

### Modify Grid Layout
In [src/styles/Dashboard.css](src/styles/Dashboard.css):

```css
.dashboard-grid {
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}
```

### Change Items Per Page
In [src/context/ProductContext.jsx](src/context/ProductContext.jsx):

```javascript
const ITEMS_PER_PAGE = 20; // Change from 12 to 20
```

### Customize Colors
Search for `#667eea` and `#764ba2` in CSS files and replace with your colors.

## 🐛 Troubleshooting

**Products not loading?**
- Check browser console for errors
- Verify FakeStore API is accessible
- Try the retry button

**Search not working?**
- Ensure search input is focused
- Check if products are loaded
- Clear browser cache

**Styling issues?**
- Clear browser cache
- Ensure all CSS files are in correct locations
- Check console for CSS errors

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to modify, improve, and adapt this project for your needs!

## 📞 Support

For issues or questions, please refer to the component documentation in code comments.

---

**Built with ❤️ using React | Modern & Production-Ready**
=======
# Task-1-API-Listing-Dashboard-
>>>>>>> 9791708d5e287c30fa346aee9fa2102670969f25
