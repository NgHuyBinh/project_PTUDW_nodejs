<template>
  <Header />
  <h1 class="black-lives-matter" style="text-align:center">BBB</h1>
<div class="sect-img">
        <img src="https://cmsv2.yame.vn/uploads/cf2a10cd-7bea-4029-a56c-3c248413cdb5/Banner-sale-one-day(1053x1260).jpg?quality=80&w=700&h=0q" alt="" width="100%" height="600px">
</div>
<div class="desc">
            <div class="container">
                <div class="row">
                    <div class="col-sm-4">
                        <h3 class="text-center">Lựa chọn nón bảo hiểm phù hợp với chi phí và nhu cầu của bạn</h3>
                    </div>
                    <div class="col-sm-8">
                        <p>BBB là một trang web bán quần áo với nhiều lựa chọn phong phú cho cả nam và nữ. Tại BBB, bạn có thể tìm thấy các sản phẩm quần áo chất lượng cao với nhiều kiểu dáng và màu sắc khác nhau, từ những chiếc áo thun đơn giản cho đến những bộ đồ thể thao phức tạp. BBB cam kết cung cấp cho khách hàng những sản phẩm chất lượng với giá cả hợp lý và dịch vụ tốt nhất. Đặc biệt, BBB còn cung cấp chính sách đổi trả linh hoạt, giúp bạn yên tâm mua sắm mà không phải lo lắng về vấn đề này. Ngoài ra, trang web này còn cập nhật thường xuyên các sản phẩm mới nhất và ưu đãi giảm giá hấp dẫn để đáp ứng nhu cầu mua sắm của khách hàng.</p>
                    </div>
                </div>
            </div>
</div>
<div class="body">
            <!-- Carousel -->
            <div id="demo" class="carousel slide" data-bs-ride="carousel" style="height: 430px;z-index: 2; ">

                <!-- Indicators/dots -->
                <div class="carousel-indicators">
                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                </div>
            
                <!-- The slideshow/carousel -->
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://media.canifa.com/Simiconnector/banner_name_tablet1682901779.webp" alt="non" class="d-block w-100" style="height:450px;">
                    </div>
                    <div class="carousel-item">
                        <img src="https://media.canifa.com/Simiconnector/banner_name_tablet1682739181.webp" alt="non" class="d-block w-100" style="height:450px;">
                    </div>    
                    <div class="carousel-item ">
                        <img src="https://media.canifa.com/Simiconnector/banner_name_tablet1682329031.webp" alt="non" class="d-block w-100" style="height:450px;">
                    </div>
                
                </div>
            
                <!-- Left and right controls/icons -->
                <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                <span class="carousel-control-prev-icon"></span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                <span class="carousel-control-next-icon"></span>
                </button>
            </div>
            <section class="container" style="z-index:3;position:relative;">
                <div class="row">
                    <div class="text-center col mx-4" style=" 
                    background:white;border:5px ridge;border-radius: 15px;height: 200px">
                        <div >
                            <!-- <img src="images/free-delivery.png" alt=""> -->
                            <h5><b>FREESHIP</b></h5>
                            <p>
                                BBB vận chuyển hoàn toàn miễn phí trên mọi miền đất nước.
                            </p>
                        </div>
                        
                    </div>
                    <div class="text-center col mx-4" style="     
                    background:white;border:5px ridge;border-radius: 15px;height: 200px">
                        <div >
                            <!-- <img src="images/money.png" alt=""> -->
                            <h5><b>HOÀN TIỀN 100%</b></h5>
                            <p>
                                BBB sẽ hoàn tiền 100% cho quý khách nếu sản phẩm bị lỗi do nhà sản xuất hoặc phát hiện hàng giả, hàng nhái.
                            </p>
                        </div>
                        
                    </div>
                    <div class="text-center col mx-4" style=" 
                    background:white;border:5px ridge;border-radius: 15px;height: 200px">
                        <div >
                            <!-- <img src="images/live-chat.png" alt=""> -->
                            <h5><b>HỖ TRỢ 24/7</b></h5>
                            <p>
                                Quý khách cần thông tin có thể gọi qua số hotline: 0843152525. Cuộc gọi hoàn tiền miễn phí.
                            </p>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    <div class="container mt-4" >
        <h3 class="text-center mb-4" style="color:#b2b509;font-weight:bold;">CÁC SẢN PHẨM NỔI BẬT</h3>
        <div class="row text-center">

            <div class="col-sm-4" v-for="item in data.products" :key="item._id">
                <div >
                    <img :src="item.img[0]" style="width: 50%;height: 50%" alt=""> 
                </div>
                <h5>{{ item.name }}</h5>
                <p>{{ item.price.toLocaleString('vi', {style : 'currency', currency : 'VND'}) }}</p>
                <div>
                  <routerLink :to="/detail/item._id">
                    <button class="btn btn-info">Detail</button>
                  </routerLink>
                    
                    <button @click="addToCart" class="btn btn-success">Add to cart</button>
                </div>
            </div>

        </div>
        <div class="text-center">
          <routerLink to="/products"><a >Xem thêm</a></routerLink>
          </div>
    </div>
    
  <Footer />
</template>
<style scoped>
  a{
    text-decoration: none;
}

header .header-1{
            
    border-bottom: 1px solid grey;
    background-color: #393548;
}
header .header-1 .items{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 6.6%;
    margin-right:6.6% ;
}
header .header-1 .menu{
    display: flex;
justify-content: center;
}

header .header-1 .menu ul{
    list-style-type:none ;  
}
header .header-1 .menu ul li{
    float: left;
    font-weight: bold;
    padding: 10px 20px;
}
header div.header-1 div.menu ul > li > a{
    color:antiquewhite;
    font-weight: bold;
    font-size:1.1rem;
}
header .header-1 .menu ul li:hover > a{
    color:#7ec72f;
    transition: ease-in 0.25s;
}

.body .row .text-center:hover{
    opacity: 0.9;
    box-shadow: 0 15px 6px -4px rgba(0,0,0,0.16),0 3px 6px rgba(0,0,0,0.23);
    margin-top: -5px;
    }
    
    .desc {
        background-color: #F0F0F0;
    }
    .desc .row .col-sm-4 h3{
        font-size: 1.6rem;
        padding-top: 6%;
        font-weight: bold;
    }
    .desc .row .col-sm-8 p{
        text-align: justify;
        font-size: 1.1rem;
    }
    div.sanpham div.row div.col-sm-4 {
        display: table-cell;
    }

    /* nonbaohiem */
    .drink-menu-box {
        padding: 2%;
        background-color: white;
        border-radius: 15px;
        margin-top: 10px;
    }
    
    .drink-menu-img {
        width: 20%;
        float: left;
    }
    
    .drink-menu-desc {
        /* width: 70%; */
        float: left;
        margin-left: 8%;
    }
    
    .drink-price {
        font-size: 1.2rem;
        margin: 2% 0;
    }
    
    .drink-detail {
        max-width: 300px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 1rem;
        color: #747d8c;
    }   
    /* nonbaohiem */
    .inputGroup {
        margin-bottom: 10px;
    }
    .inputGroup select,.inputGroup input[type='text']{
        width:50%;
    }
    .inputGroup label {
        width:120px;
        font-weight: bold;
    }
    .main_contact h2,
.main_contact h3 {
    font-family: 'Nunito', sans-serif;
    text-align: center;
    margin-top: 10px;
}

.main_contact h2 {
    font-size: 25px;
}

.main_contact h3 {
    font-size: 18px;
    font-weight: normal;
}

.form_contribute {
    /* background-color: #6d7221; */
    padding: 5px;
    margin: 20px 300px;
    height: 285px;
    width: 500px;
}

.table_contribute td {
    /* background-color: #ffefd5; */
    height: 40px;
    width: 100%;

}

.table_contribute td label {
    height: 80%;
    margin-left: 30px;
    font-family: 'Nunito', sans-serif;
}

.table_contribute td input {
    font-family: 'Nunito', sans-serif;
    margin-left: 5px;
    font-size: 14px;
}

.table_contribute td select {
    height: 80%;
    width: 234px;
    margin-left: 5px;
    color: #757474ed;
}

.table_contribute td textarea {
    font-family: 'Nunito', sans-serif;
    width: 355px;
    margin-left: 5px;
    font-size: 14px;
}

.table_contribute td button {
    width: 60px;
    height: 35px;
    font-size: 15px;
    font-family: 'Nunito', sans-serif;
    background-color: #e99714;
    border-radius: 5px;
    border: 2px solid rgb(255, 255, 255, .4);
    margin-left: 140px;
}

    footer{
        background-color: #b2b509;color:#ffffff;
    }
    footer a{
        color:#ffffff;
    }
    footer a:hover{
        color:antiquewhite;
    }
</style>
<script>
import axios from "axios";
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import { reactive } from "vue";
export default {
  components: {
    Footer,
    Header,
  },
  setup() {
    const data = reactive({
      products: [],
    })
    async function getAllProductsActive(){
      try {
        const response = await axios.get('http://localhost:3000/products?active=true');//lấy api từ địa chỉ bên node đi về với req.body.active = true
        data.products = response.data;
      }catch(err){

      }
    }
    function addToCart() {
      if(localStorage.getItem("token")==null){
        alert("Vui lòng đăng nhập để đặt hàng");
        return ;
      }
    }
    getAllProductsActive();
    return {  
      data,
      addToCart
    }
  }
};
</script>
