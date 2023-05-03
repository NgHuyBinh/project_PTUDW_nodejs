<template>
    <div class="product-detail">
      <div class="product-images">
        <img :src="product.imageUrl" alt="Product Image">
      </div>
      <div class="product-info">
        <h1 class="product-title">{{ product.title }}</h1>
        <p class="product-description">{{ product.description }}</p>
        <p class="product-price">{{ product.price }}</p>
        <button class="add-to-cart-btn" @click="addToCart(product)">Add to Cart</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        product: null
      }
    },
    mounted() {
      // Retrieve product information from API or database
      const productId = this.$route.params.id; // Get product ID from the URL parameter
      this.product = getProductById(productId);
    },
    methods: {
      addToCart(product) {
        // Add product to cart
        // ...
      },
      getProductById(id) {
        // Retrieve product information from API or database based on ID
        // ...
        return {
          id: 1,
          title: 'Product Title',
          description: 'Product description',
          price: 9.99,
          imageUrl: 'https://example.com/product-image.jpg',
          // Other product information
        };
      }
    }
  }
  </script>
  
  <style>
  .product-detail {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin: 20px;
  }
  
  .product-images {
    flex: 1 1 40%;
    margin-right: 20px;
  }
  
  .product-info {
    flex: 1 1 60%;
  }
  
  .product-title {
    font-size: 24px;
    font-weight: bold;
    margin: 0;
  }
  
  .product-description {
    font-size: 16px;
    margin: 10px 0;
  }
  
  .product-price {
    font-size: 20px;
    font-weight: bold;
    margin: 10px 0;
  }
  
  .add-to-cart-btn {
    background-color: #3498db;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    padding: 10px;
    cursor: pointer;
  }
  </style>
  