# GadgetHeaven✨

**Your go-to destination for the latest and greatest gadgets.**

## Live Website Link
[Visit GadgetHeaven Live](https://your-live-website-link.com)

## Requirement Document Link
[View Requirement Document](https://github.com/programming-hero-web-course-4/b10a8-gadget-heaven-ronithussain)

---

## React Fundamental Concepts Used
1. **Components**: Reusable UI components for Navbar, Footer, Cards, etc.
2. **Props**: Data passing between parent and child components.
3. **State Management**: Managing state for cart, wishlist, and categories.
4. **React Hooks**:
   - `useState` for managing dynamic states like cart and wishlist items.
   - `useEffect` for fetching and updating data.
   - `useContext` for sharing cart and wishlist data globally.
   - `useNavigate` for programmatic navigation.
5. **Routing**: Using `react-router-dom` for multiple pages and nested routes.

---

## Data Management
- **Context API**: To manage global states for cart and wishlist.
- **LocalStorage**: For persisting cart and wishlist data across sessions.

---

## Features
1. **Structured Navigation Bar**:
   - Includes logo, brand name, and routes for *Dashboard* and *Stats*.
   - Active route indication.

2. **Product Filtering & Categories**:
   - Sidebar for category-based filtering (e.g., Phones, Computers, etc.).
   - Dynamic product display based on selected categories.

3. **Add to Cart & Wishlist**:
   - Dedicated buttons for adding items to the cart or wishlist.
   - Items cannot be added twice to the wishlist.

4. **Dashboard with Sorting**:
   - Separate tabs for viewing cart and wishlist.
   - Cart items can be sorted by price (descending order).

5. **Enhanced UI/UX**:
   - Dynamic background colors for different pages using `useLocation`.
   - Purchase confirmation via modal with smooth transitions.

---

## Toast Notifications
- **Cart**: Toast displays a message like `"Item added to cart successfully! 🛒"`.
- **Wishlist**: Toast displays a message like `"Item added to wishlist ❤️!"`.
- Uses **React-Toastify** for attractive notifications.

---

Feel free to modify or expand this template with your specific links and details!
