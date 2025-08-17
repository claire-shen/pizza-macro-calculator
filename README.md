This is a Pizza Macro Calculator that will help fellow gym enthusiasts save time when ordering Pizza and calculating the macros. 

Link to final product: https://pizzamacrocalculator.netlify.app/ 

![](pizzaDemo.gif)

## 🚀 New: Node.js Backend

This project now includes a Node.js backend that provides a RESTful API for pizza nutrition calculations.

### Features Added
- **Express.js Server**: Serves the frontend and provides API endpoints
- **RESTful API**: Calculate pizza nutrition via HTTP requests
- **Data Validation**: Input validation and error handling
- **CORS Support**: Cross-origin resource sharing enabled
- **Health Check**: API health monitoring endpoint

### API Endpoints

#### `GET /api/pizza/sizes`
Returns available pizza sizes.

#### `GET /api/pizza/crusts/:size`
Returns available crust options for a specific size.

#### `POST /api/pizza/calculate`
Calculate nutrition for a custom pizza configuration.

**Request Body:**
```json
{
  "size": "Medium",
  "crust": "originalHandTossed",
  "cheeseLevel": "TRegular",
  "sauce": "pizzaSauce",
  "toppings": ["pepperoni", "mushrooms"]
}
```

### Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the server:**
   ```bash
   npm start
   ```

3. **Development mode:**
   ```bash
   npm run dev
   ```

### Frontend Integration
The existing frontend can now optionally use the API endpoints for calculations, demonstrating full-stack JavaScript development.
