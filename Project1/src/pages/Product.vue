<template>
    <Header />

    <div class="body">

        <div class="container mt-4">
            <h3 class="text-center mb-4" style="color:#b2b509;font-weight:bold;">DANH SÁCH SẢN PHẨM</h3>
            <div class="row text-center">

                <div class="col-sm-4" v-for="item in data.products" :key="item._id">
                    <div>
                        <img :src="item.img[0]" style="width: 50%;height: 50%" alt="">
                    </div>
                    <h5>{{ item.name }}</h5>
                    <p>{{ item.price.toLocaleString('vi', { style: 'currency', currency: 'VND' }) }}</p>
                    <div>
                        <routerLink :to="{ name: 'detail', params: { id: item._id } }">
                            <button class="btn btn-info">Detail</button>
                        </routerLink>
                        <button @click="addToCart(item)" class="btn btn-success">Add to cart</button>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <Footer />
</template>
<style scoped>
a {
    text-decoration: none;
}

header .header-1 {

    border-bottom: 1px solid grey;
    background-color: #393548;
}

header .header-1 .items {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 6.6%;
    margin-right: 6.6%;
}

header .header-1 .menu {
    display: flex;
    justify-content: center;
}

header .header-1 .menu ul {
    list-style-type: none;
}

header .header-1 .menu ul li {
    float: left;
    font-weight: bold;
    padding: 10px 20px;
}

header div.header-1 div.menu ul>li>a {
    color: antiquewhite;
    font-weight: bold;
    font-size: 1.1rem;
}

header .header-1 .menu ul li:hover>a {
    color: #7ec72f;
    transition: ease-in 0.25s;
}

.body .row .text-center:hover {
    opacity: 0.9;
    box-shadow: 0 15px 6px -4px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    margin-top: -5px;
}

.desc {
    background-color: #F0F0F0;
}

.desc .row .col-sm-4 h3 {
    font-size: 1.6rem;
    padding-top: 6%;
    font-weight: bold;
}

.desc .row .col-sm-8 p {
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

.inputGroup select,
.inputGroup input[type='text'] {
    width: 50%;
}

.inputGroup label {
    width: 120px;
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

footer {
    background-color: #b2b509;
    color: #ffffff;
}

footer a {
    color: #ffffff;
}

footer a:hover {
    color: antiquewhite;
}
</style>
<script>
import axios from "axios";
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import { reactive,ref } from "vue";
export default {
    components: {
        Footer,
        Header,
    },
    setup() {
        const data = reactive({
            products: [],
            cart: [],
        })
        const isChecked = ref(false);
        async function getAllProductsActive() {
            try {
                const response = await axios.get('http://localhost:3000/products');//lấy api từ địa chỉ bên node đi về với req.body.active = true
                data.products = response.data;
            } catch (err) {

            }
        }
        getAllProductsActive();
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
};
</script>
  