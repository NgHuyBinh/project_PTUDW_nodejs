<template>
    <Header />
  

    <div class="container mt-4" >
        <h3 class="text-center mb-4" style="color:#b2b509;font-weight:bold;">CHI TIẾT SẢN PHẨM</h3>
        <div class="row text-center">

            <div class="col-sm-12" >
                <div >
                    <img :src="data.product.img[0]" style="width: 50%;height: 50%" alt=""> 
                    <img :src="data.product.img[1]" style="width: 50%;height: 50%" alt=""> 
                </div>
                <h5>{{ data.product.name }}</h5>
                <p>{{ data.product.price.toLocaleString('vi', {style : 'currency', currency : 'VND'}) }}</p>
                <p>{{ data.product.desc }}</p>
                <div>
                    
                    <button @click="addToCart(data.product)" class="btn btn-success">Add to cart</button>
                </div>
            </div>

        </div>
       
    </div>
    
  <Footer />
  </template>
  <script>
import { reactive } from 'vue';
import axios from "axios";
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import {  useRoute } from 'vue-router';

  export default {
    components: {
    Footer,
    Header,
  },
    setup() {
      const route = useRoute();
      const data = reactive({
        product: {},
      })
      async function getProductById(){
        try {
          const response = await axios.get("http://localhost:3000/products/"+route.params.id);
          data.product = response.data;
        }catch(err){

        }
      }
      getProductById();
      function addToCart(product) {
      product.soluong = 1;
      //Chưa đăng nhập không cho add to cart
      if (localStorage.getItem("token") == null) {
        alert("Vui lòng đăng nhập trước khi thêm vào giỏ");
        return;
      }

      //Kiểm tra : Sự tồn tại của localStorage
      if (localStorage.getItem("cart") == null) {
        //Nếu localStorage chưa tồn tại
        //thêm product vào data.cart
        for (var i = 0; i < data.cart.length; i++) {
          if (product._id == data.cart[i]._id) {
            isChecked.value = true;
            break;
          }
          isChecked.value = false;
        }
        if (isChecked.value == true) {
          //Nếu product đã có trong cart thì không cho thêm vào ( xuất hiện thông báo)
          alert("Bạn đã thêm sản phẩm này vào giỏ hàng rồi");
        } else {
          //Nếu product chưa có trong cart thì cho thêm vào

          data.cart.push(product);
        }
      } else {
        //Nếu localStorage tồn tại rồi
        //Lấy dữ liệu từ localStorage hiện tại gán cho data.cart
        data.cart = JSON.parse(localStorage.getItem("cart"));
        //thêm product vào data.cart
        for (var i = 0; i < data.cart.length; i++) {
          if (product._id == data.cart[i]._id) {
            isChecked.value = true;
            break;
          }
          isChecked.value = false;
        }
        if (isChecked.value == true) {
          //Nếu product đã có trong cart thì không cho thêm vào ( xuất hiện thông báo)
          alert("Bạn đã thêm sản phẩm này vào giỏ hàng rồi");
        } else {
          //Nếu product chưa có trong cart thì cho thêm vào

          data.cart.push(product);
        }
      }
      localStorage.setItem("cart", JSON.stringify(data.cart));
    }
      return {
        addToCart,
        data,
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
  