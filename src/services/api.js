const API_BASE_URL = 'https://fakestoreapi.com';

export const fetchProducts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/products`);
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw new Error('Failed to fetch products. Please try again later.');
  }
};

export const fetchProductsByCategory = async (category) => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/category/${category}`);
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products by category:', error);
    throw new Error('Failed to fetch products. Please try again later.');
  }
};

export const fetchCategories = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/categories`);
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw new Error('Failed to fetch categories. Please try again later.');
  }
};
