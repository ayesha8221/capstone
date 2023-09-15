<template>
    <div class="container d-flex justify-content-center align-items-center">


        <div class="col-lg-6 col-md-6 mb-4 mb-md-0">
        <h5 class="text-uppercase text-align-center">Get In Touch With Us</h5>

        <form action="https://formspree.io/f/xrgwkdao"
  method="POST">
          <ul class="list-unstyled mb-0">
          <li>
            <div class="form-floating mb-3">
  <input type="name" name="name" class="form-control" id="floatingInput" placeholder="Your name" required>
  <label for="floatingInput">Full Name</label>
</div>
          </li>
          <li>
            <div class="form-floating mb-3">
  <input type="email" name="email" class="form-control" id="floatingInput" placeholder="name@example.com" required>
  <label for="floatingInput">Email address</label>
</div>
          </li>
          <li>
            <div class="form-floating">
  <textarea name="message" class="form-control" placeholder="Leave a comment here" id="floatingTextarea" required ></textarea>
  <label for="floatingTextarea" >Comments</label>
</div>
          </li>
          <li>
            <button class="submit"> Submit </button>
          </li>
        </ul>
        </form>
        
      </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

.container {
    padding:50px 0 50px 0;
}

.text-uppercase.mb-0, .text-uppercase, .text-uppercase.text-align-center {
  color: #995C23;
font-family: Inter;
font-size: 22px;
font-weight: 600;
line-height: normal;
-webkit-text-stroke: 0.2px #E4C2A2;
}

.text-center.text-lg-start {
  background: #5d2f04;
}

a {
  color: #E4C2A2;
  text-decoration: none;
}

input, textarea {
  /* width: 600px; */
  /* height: 40px; */
  background-color: rgb(255, 213, 176);
  border-radius: 10px;
  border-color:  #c08248 !important;
  cursor: pointer;
  color: #603207;
  padding-left: 20px;
  margin-bottom: 2%;
}

.icons {
  width:36px;
}

.submit {
  background-color: #462507;
  color: #E4C2A2;
text-align: center;
font-family: Inter;
font-size: 20px;
/* font-style: italic; */
line-height: normal;
-webkit-text-stroke: 0.5px #995C23;
border: solid rgb(121, 74, 13);
padding: 3px 3px 3px 3px;
}

.col-lg-2.col-md-6.mb-4.mb-md-0 {
  text-align: center;
}

li, h5, label {
  text-align: center;
}
    
</style>