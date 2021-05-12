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
      <div class="form-newletter">
          <div class="form-header">
              <h1>SIGN UP TO OUR NEWSLETTER</h1>
          </div>
          <div class="form-user">
              <div class="form-input">
                  <h3>Personal Detail</h3>
                  <div class="form-childs">
                        <a-select default-value="Party Size" style="width: 200px" @change="handleChange">
                            <a-select-option value="partysize">
                                *Party Size
                            </a-select-option>
                            <a-select-option value="1">
                                1
                            </a-select-option>
                            <a-select-option value="2">
                                2
                            </a-select-option>
                            <a-select-option value="3">
                                3
                            </a-select-option>
                            <a-select-option value="4">
                                4
                            </a-select-option>
                            <a-select-option value="5">
                                5
                            </a-select-option>
                            <a-select-option value="6">
                                6
                            </a-select-option>
                        </a-select>
                        <input/>
                        <input/>
                        <input/>
                        <input/>
                        <input/>
                  </div>
              </div>
              <div class="form-check">
                  <h3>Please contact me about:</h3>
                  <div class="form-checkinput">
                      <input type="checkbox"/><p>Yes I would like to receive the lastest marketing information by email from Gordon Ramsay Restaurants, <strong>about all of our restaurants</strong></p>
                      <p>For more information please see our <a href="#">privacy policy</a>. We will of course keep your data safe and secure and if you change your mind you can unsubscribe at any time on any marketing email we send or email us at guestrelations@gordonramsay.com</p>
                  </div>
              </div>
          </div>
          <div class="form-sign">
              <button>SIGN UP</button>
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
      <div class="footer-info">
          <h3><strong>GORDON RAMSAY RESTAURANTS</strong> <a-icon type="copyright" />Copyright 2021</h3>
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
.footer-links ul li a{
    color:gray;
    font-weight: 100;
}
.footer-info h3{
    color:Gray;
}
.footer-info {
     display: flex;
    justify-content: center;
    align-items: center;
}
.form-newletter h1{
    color:gray;
}
.form-header{
    padding:5vh;
    border-bottom: 2px solid gray;
}
.form-newletter{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.form-user{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
.form-input h3{
    color:gray;
}
.form-input{
   display:flex;
   justify-content: center;
   align-items: center;
    padding-right:20px;
   flex-direction: column;
}
.form-check h3{
    color:Gray;
}
.form-childs{
    flex-direction: column;
    display: flex;
}
.form-checkinput{
    height: fit-content;
    width: 200px;
}
.form-check h3{
    padding-bottom: 20px;
    padding-top: 20px;
}
.form-childs input{
     height: 40px;
    margin:10px;
    width: 200px;
    background-color: black;
    border: 2px solid gray;
    color:Gray;
}
.form-checkinput p {
    color:gray;
}
.form-sign button{
    padding:10px 30px;
}
.form-input h3{
    padding-top:15px;
}
</style>