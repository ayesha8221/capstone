<template>
    <div>
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
<style>
    
</style>