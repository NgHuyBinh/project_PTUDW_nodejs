<template>
  <div class="container">
        <div class="forms-container">
            <div class="signin-signup">
                <form method="POST" @submit.prevent="submit" class="sign-in-form">
                    <h2 class="title">Đăng ký</h2>
                    <div class="input-field">
                        <i class="fas fa-user">

                        </i>
                        <input type="text" placeholder="Name" name="name" v-model="HoTen">
                    </div>
                    <div class="input-field">
                        <i class="fas fa-lock">

                        </i>
                        <input type="text" placeholder="Email" name="email" v-model="Email">
                    </div>
                    <div class="input-field">
                        <i class="fas fa-lock">

                        </i>
                        <input type="password" placeholder="Password" name="password" v-model="MatKhau">
                    </div>
                    <div class="input-field">
                        <i class="fas fa-lock">

                        </i>
                        <input type="text" placeholder="Phone" name="phone" v-model="SDT">
                    </div>
                    <div v-if="!isChecked" class="text-danger">{{ message }}</div>
                    <div v-else class="text-success">{{ message }}</div>
                    <input type="submit" class="btn solid" name="dangnhap" value="Đăng ký">
                    
                </form>
                <div style="color:black" class="text-center">
                 Đăng nhập <routerLink to="/login">tại đây</routerLink>
                </div>
            </div>
            
        </div>
        
    </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const Email = ref("");
    const MatKhau = ref("");
    const HoTen = ref("");
    const SDT = ref("");
    const message = ref("");
    const isChecked = ref(true);
    async function submit() {
      try {
        const response = await axios.post(
          "http://localhost:3000/users/register",
          {
            email: Email.value,
            password: MatKhau.value,
            name: HoTen.value,
            phone: SDT.value,
          }
        );
        if (response.data.message == "Tồn tại rồi bạn ơi") {
          message.value = "Email tồn tại rồi!";
          isChecked.value = false;
        } else {
          message.value = "Đăng ký thành công!";
          isChecked.value = true;
        }
      } catch (e) {}
    }
    return {
      isChecked,
      message,
      submit,
      HoTen,
      SDT,
      Email,
      MatKhau,
    };
  },
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body,
input{
    font-family: 'Poppins',sans-serif;
}

.container{
    position: relative;
    width:100%;
    background-color: #fff;
    min-height: 100vh;
    overflow: hidden;
    z-index: 6;
}
.forms-container{
    position:absolute;
    width: 100%;
    height:100%;
    top: 0;
    left: 0;
}
.container::before{
    content: '';
    position: absolute;
    height: 2000px;
    width: 2000px;
    top: -10%;
    right: 48%;
    background-image: linear-gradient(-45deg, #e2ba48 0%, #B8860B 100%);
    transform: translateY(-50%);
    border-radius: 50%;
    z-index: 6;
    transition: 1.8s ease-in-out;
}
form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 5rem;
    padding: 0 5rem;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
}
.title{
    font-size: 2.2rem;
    color: #444;
    margin-bottom: 10px;
}
.input-field{
    max-width: 380px;
    width: 100%;
    height:55px;
    background-color: #f0f0f0;
    margin: 10px 0;
    border-radius: 55px;
    display: grid;
    grid-template-columns: 15% 85%;
    padding: 0 0.4rem;
    position: relative;
}
.input-field i{
    text-align: center;
    line-height: 55px;
    color:#acacac;
    font-size: 1.5rem;
}
.input-field input{
    background:none;
    outline: none;
    border:none;
    line-height: 1;
    font-weight: 600;
    font-size: 1.2rem;
    color:#333;
}

.input-field input:placeholder-shown{
    color:#aaa;
    font-weight: 500;

}
.btn{
    width: 150px;
    height: 49px;
    outline: none;
    border: none;
    border-radius: 48px;
    background-color: #e2ba48;
    color:white;
    text-transform: uppercase;
    font-weight: 600;
    margin: 10px 0;
    transition: all 0.5s;
}
.btn:hover{
    background-color: #B8860B;
}
.social-text{
    padding: 0.7rem 0;
}
.social-media{
    display: flex;
    justify-content: center;
}
.social-icon{
    height: 46px;
    width: 46px;
    border: 1px solid #333;
    margin: 0 0.45rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #333;
    font-size: 1.3rem;
    border-radius: 50%;
    transition: all 0.5s;
}
.social-icon:hover{
    color: #e2ba48;
    border-color: #B8860B;
}
.signin-signup{
    position: absolute;
    top: 50%;
    left: 75%;
    transform: translate(-50%, -50%);
    display: gird;
    grid-template-columns: 1fr;
    z-index: 8;
}

.signup-signup{
    position: relative;

}

form.sign-in-form{
    z-index:2;
}
form.sign-up-form{
    z-index: 1;
    opacity: 0;
    margin-right: 40%;
}
.image{
    /* margin-top: 20%; */
    width: 100%;
    /* height: 50%; */
    transition: 1.1s 0.4s ease-in-out;
}
.panels-container{
    position: absolute;
    width:100%;
    height: 100%;
    top: 0;
    left: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}
.panel{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    z-index:7;
}
.left-panel{
    padding: 3rem 17% 2rem 12%;
}
.right-panel{
    padding: 3rem 12% 2rem 17%;
    
}
.panel .content{
    color: #fff;
    transition: .9s .6s ease-in-out;
}
.panel h3{
    font-weight: 600;
    line-height: 1;
    font-size: 1.5rem;
}
.panel p{
    font-size: 0.95rem;
    padding: 0.7rem 0;
}
.btn.transparent{
    margin: 0;
    background: none;
    border: 2px solid #fff;
    width: 130px;
    height: 41px;
    font-weight: 600;
    font-size: 0.8rem;
}
.right-panel .content,.right-panel .image{
    transform: translateX(800px);
}

.hide {
    display: none;
}

.show {
    display: flex;
}

/* Animation */
.container.sign-up-mode::before{
    transform: translate(100% , -50%);
    right: 52%;
}
.container.sign-up-mode .left-panel .image,
.container.sign-up-mode .left-panel .content{
    transform: translate(-800px);
}

.container.sign-up-mode .right-panel .image,
.container.sign-up-mode .right-panel .content{
    transform: translateX(0%);
}
.container.sign-up-mode .left-panel{
    pointer-events: none;
}
.container.sign-up-mode .right-panel{
    pointer-events: all;
}
.container.sign-up-mode .signin-signup{
    left:25%;
}
.container.sign-up-mode form.sign-in-form{
    z-index: 1;
    opacity: 0;
}
.container.sign-up-mode form.sign-up-form{
    z-index: 2;
    opacity: 1;
}</style>
