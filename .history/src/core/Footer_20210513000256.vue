<template>
  <div class="footer-container">
      <div class="footer-header">
          <div class="headers-left">
              <a-icon  class ="icon" type="instagram" />
              <a-icon class ="icon" type="facebook" />
              <a-icon class ="icon" type="twitter" />
          </div>
          <div class="headers-right">
              <button>NEWSLETTER SIGN UP <a-icon type="arrow-right" /></button>
          </div>
      </div>
      <div class="footer-links">
          <ul>
              <li><a href="#">Contact</a></li>
              <li style=""><a href="#">FAQs</a></li>
              <li><a href="#">Covid-19</a></li>
              <li><a href="#">Disclamer</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Cookie Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
          </ul>
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
    background: black;
}
.footer-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:20px;
}
.headers-right button{
    height: 50px;
    background: black;
    border: 2px solid gray;
    color:Gray;
}
.headers-left .icon {
    font-size: x-large;
    padding:10px;
    color:gray;
}
.footer-links ul{
    display: flex;
    list-style-type: none;
    border-top:1px solid gray;
    border-bottom:1px solid gray;
}
.footer-links {
    display: flex;
    justify-content: center;
    align-items: center;
    flex:1;
}
.footer-links ul li{
    padding:10px;
}
</style>