# Food Recipe App

## Overview
The Food Recipe App is a simple and interactive application for browsing products and managing a shopping cart. Users can view available products, add or remove items from their cart, and place orders. The app is designed using **React** and demonstrates the use of components, context, and hooks such as `useState`, `useEffect`, and `useContext`.

## Features
- **Home Page**: Displays a list of products fetched from a local JSON file.
- **Cart Management**: Add or remove items from the cart.
- **Order Placement**: Place an order and view a thank-you message.
- **Dynamic Header**: Displays the number of items in the cart in real-time.

---

## File Structure

```
project
├── src
│   ├── assets
│   │   ├── Products.json         # Sample product data
│   │   ├── Black Illustrated Lion Hotel Logo.png
│   ├── Styles
│   │   ├── Cart.css             # Styles for Cart Component
│   │   ├── Header.css           # Styles for Header Component
│   │   ├── Home.css             # Styles for Home Component
│   │   ├── product.css          # Styles for Product Component
│   ├── components
│   │   ├── Cart.jsx             # Cart Component
│   │   ├── Header.jsx           # Header Component
│   │   ├── Home.jsx             # Home Component
│   │   ├── Product.jsx          # Product Component
│   ├── App.jsx                  # Main App File
│   ├── index.jsx                # ReactDOM.render Entry Point
├── package.json                 # Dependencies and scripts
```

---

## Components

### 1. **Cart**
- Displays products added to the cart.
- Calculates the total price of items in the cart.
- Allows users to remove items from the cart.
- Displays a thank-you message after order placement.

### 2. **Header**
- Displays the app logo and navigation links (Home and Cart).
- Shows the number of items in the cart dynamically.

### 3. **Home**
- Displays a list of products fetched from `Products.json`.
- Each product is rendered using the `Product` component.

### 4. **Product**
- Displays individual product details (name, price, and image).
- Allows users to add or remove items from the cart.
- Truncates long product names for better UI.

---

## How to Run the App

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/hitesh-new/Food-reciepe.git
   cd Food-reciepe
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Development Server**:
   ```bash
   npm start
   ```
   Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

---

## Data Structure

### Sample Product Data (Products.json):
```json
[
  {
    "id": 1,
    "name": "Delicious Pizza",
    "price": "399",
    "image": "path/to/image1.jpg"
  },
  {
    "id": 2,
    "name": "Tasty Burger",
    "price": "199",
    "image": "path/to/image2.jpg"
  }
]
```

---

## Key Features of the Code

1. **React Context API**:
   - Used for sharing the `cart` state between `Product`, `Cart`, and `Header` components.

2. **React Hooks**:
   - `useState` for managing local state (e.g., cart, total amount, thank-you message).
   - `useEffect` for recalculating the total amount whenever the cart is updated.

3. **Reusable Components**:
   - `Product` component dynamically renders product data.

4. **Conditional Rendering**:
   - Displays `Add to Cart` or `Remove` button depending on whether the product is in the cart.
   - Shows a thank-you message (`Thanks for your purchase!!`) only after the order is placed.

---

## Future Enhancements
- Add authentication for users.
- Integrate with a backend to fetch product data dynamically.
- Add payment gateway integration.
- Enable product search and filtering functionality.

---


---

## Screenshots
Added Screenshot of the project

- Home-page:
![image](https://github.com/user-attachments/assets/307d3e3e-265f-4886-8726-e476c64fccf0)
- Cart:
![image](https://github.com/user-attachments/assets/cbacd11e-b1c4-4f6d-aefa-599c7c3806a6)

---


