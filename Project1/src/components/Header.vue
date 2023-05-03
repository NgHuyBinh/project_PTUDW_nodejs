<template>
  <header class="tm-site-footer text-center">
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ></button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <routerLink to="/home">
                <a class="nav-link" >Trang chủ</a>
              </routerLink>
            </li>
            <li class="nav-item">
              <routerLink to="/about">
                <a class="nav-link" >Giới thiệu</a>
              </routerLink>
            </li>
            <li class="nav-item">
              <routerLink to="/cart">
                <a class="nav-link" >Giỏ hàng</a>
              </routerLink>
            </li>
            <li class="nav-item">
              <routerLink to="/products">
                <a class="nav-link" >Sản phẩm</a>
              </routerLink>
              
            </li>
            <!-- <li class="nav-item">
              <a class="nav-link" href="contact.html">Liên hệ</a>
            </li> -->
            <li v-if="isChecked" class="nav-item">
              <a class="nav-link" @click="logout">Thoát</a>
            </li>
            <li v-else class="nav-item">
              <routerLink to="/login"> 
                <a class="nav-link" >Đăng nhập</a>
              </routerLink>
             
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>
<style scoped>
a {
  text-decoration: none;
  cursor: pointer;
}
</style>
<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router =useRouter();
    const isChecked = ref(false);//Kiểm tra trạng thái đăng nhập chưa 
    if(localStorage.getItem("token")!=null){
      isChecked.value= true;
    }else{
      isChecked.value = false;
    }
    function logout() {
      //Xóa sạch local => xóa local bên token với cart
      localStorage.clear();
      router.push('/login');
    }
    return {
      logout,
      isChecked,
    }
  }
}
</script>
