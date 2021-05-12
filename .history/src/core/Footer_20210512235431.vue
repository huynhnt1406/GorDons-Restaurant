<template>
  <div class="footer-container">
      <div class="footer-header">
          <div class="headers-left">
              <a-icon type="instagram" />
              <a-icon type="facebook" />
              <a-icon type="twitter" />
          </div>
          <div class="headers-right">
              <button>NEWSLETTER SIGN UP <a-icon type="arrow-right" /></button>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.footer-container{
     max-width: 1150px;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 60px;
}
.footer-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:20px;
}
.headers-right button{
    height: 50px;
}
</style>