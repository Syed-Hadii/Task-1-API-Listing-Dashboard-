# Quick Start Guide

## 🚀 One-Minute Setup

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm start
```

The app will automatically open at `http://localhost:3000`

---

## 📋 What's Included

### ✅ All Required Features
- [x] Fetch from API (FakeStore API)
- [x] Responsive grid layout with cards
- [x] Card component with image, title, price
- [x] Search filter with debounce
- [x] Sorting (by name, price ascending, price descending)
- [x] Loading state with spinner
- [x] Error handling with retry
- [x] Functional components with hooks
- [x] Reusable Card component
- [x] Clean folder structure
- [x] Proper async/await with try/catch

### ✅ Bonus Features Included
- [x] Debounced search (300ms)
- [x] Pagination (12 items per page)
- [x] Context API for state management
- [x] Production-level code
- [x] Comprehensive comments

---

## 📁 Quick Navigation

### Main Components
- **Dashboard** - Main page layout
- **Card** - Product card component
- **SearchBar** - Search with debounce
- **SortBar** - Sort controls
- **Pagination** - Page navigation
- **Loader** - Loading spinner
- **ErrorMessage** - Error display

### Context & Services
- **ProductContext** - State management
- **api.js** - API calls

### Styling
- All styles use CSS with Grid/Flexbox
- Responsive design with mobile-first approach
- Modern gradient design

---

## 🎯 Key Features Explained

### 1. Search with Debounce
Search input updates after 300ms of inactivity to prevent excessive re-renders.

### 2. Smart Sorting
- Sort by name alphabetically
- Sort by price (low to high)
- Sort by price (high to low)

### 3. Pagination
Automatically paginate results (12 items per page) and maintain scroll position.

### 4. Error Handling
If API fails, shows friendly error message with retry button.

### 5. Loading State
Animated spinner while fetching data from API.

---

## 🛠️ Available Scripts

```bash
# Start development server
npm start

# Build for production
npm build

# Run tests
npm test
```

---

## 📖 Project Structure

```
Task-1/
├── src/
│   ├── components/       # All React components
│   ├── context/         # Context API setup
│   ├── services/        # API calls
│   ├── styles/          # CSS files
│   ├── App.jsx          # Root component
│   └── index.js         # Entry point
├── public/
│   └── index.html       # HTML template
├── package.json         # Dependencies
└── README.md            # Full documentation
```

---

## 🎨 Design Details

- **Color Scheme**: Purple gradient (#667eea → #764ba2)
- **Typography**: System fonts for fast loading
- **Spacing**: Consistent 8px/16px/24px grid
- **Animations**: Smooth transitions and hover effects
- **Responsive**: Mobile, tablet, desktop ready

---

## 🔍 Testing the App

1. **Search**: Type in the search bar to filter products
2. **Sort**: Change sort option in dropdown
3. **Paginate**: Click page numbers to navigate
4. **Hover**: Hover over cards to see animations
5. **Mobile**: Resize browser to see responsive design

---

## ⚡ Performance Tips

- Search is debounced (300ms) for optimization
- Images load lazily
- Pagination limits displayed items (12 per page)
- All filtering uses memoized values
- Production build is automatically optimized

---

## 🆘 Troubleshooting

| Issue | Solution |
|-------|----------|
| Products won't load | Check internet connection, API status |
| Search not working | Make sure input is focused, try clearing cache |
| Styles look wrong | Clear browser cache, hard refresh (Ctrl+Shift+R) |
| Port 3000 in use | `npm start -- --port 3001` |

---

## 💡 Next Steps

1. Customize colors in CSS files
2. Connect to your own API
3. Add user authentication
4. Add to cart functionality
5. Product detail pages
6. User reviews/ratings
7. Wishlist feature
8. Filters by category/rating

---

## 📚 Resources

- [React Documentation](https://react.dev)
- [FakeStore API](https://fakestoreapi.com)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [React Hooks](https://react.dev/reference/react)

---

Happy coding! 🎉
