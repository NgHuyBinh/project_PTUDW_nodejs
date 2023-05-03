<template>
    <div class="container my-5">
      <div class="row">
        <div class="col-md-6">
          <img src="./assets/images/intro-image.jpg" alt="Intro Image" class="img-fluid rounded">
        </div>
        <div class="col-md-6">
          <h1 class="display-4 text-primary mb-4">BBB - Your One-Stop Shop for All Your Needs</h1>
          <p class="lead">Chào mừng đến với shop "BBB" - nơi bạn có thể tìm thấy những sản phẩm thời trang chất lượng và đẳng cấp.</p>
          <p>Tại BBB, chúng tôi cung cấp đa dạng các sản phẩm thời trang như áo, quần, váy, giày dép và phụ kiện với nhiều mẫu mã và kiểu dáng đa dạng, phù hợp với nhiều lứa tuổi và phong cách khác nhau.</p>
          <p>Với đội ngũ nhân viên tận tâm và chuyên nghiệp, chúng tôi cam kết mang đến cho khách hàng những trải nghiệm mua sắm tuyệt vời nhất. Bên cạnh đó, chúng tôi cũng luôn đảm bảo chất lượng sản phẩm và dịch vụ tốt nhất để đáp ứng mọi nhu cầu của khách hàng.</p>
          <p>Hãy ghé thăm trang web của chúng tôi để cập nhật những sản phẩm mới nhất và đừng ngại liên hệ với chúng tôi nếu bạn cần bất kỳ hỗ trợ nào. Chúc bạn có trải nghiệm mua sắm thật thoải mái và thú vị tại BBB!</p>
          <router-link to="/products" class="btn btn-primary btn-lg mt-4">Shop Now</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
    .display-4 {
      font-size: 2.5rem;
      font-weight: 600;
    }
    .lead {
      font-size: 1.25rem;
      line-height: 1.8;
    }
  </style>
  