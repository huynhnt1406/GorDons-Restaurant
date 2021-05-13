<template>
  <div class="book-container">
        <div class="select-restaurant">
            <a-select default-value="RESTAURANT" style="width: 100% " @change="handleChange">
                 <a-select-option value=" SAVOY GRILL" :style="{background:'black'}"  >
                    SAVOY GRILL
                </a-select-option>
                <a-select-option value=" LUCKY CAT">
                    LUCKY CAT
                </a-select-option>
                <a-select-option value=" RESTAURANT GORDON RAMSAY" style="height:fit-content">
                    RESTAURANT GORDON RAMSAY
                </a-select-option>
                <a-select-option value="HEDDON STREET KITCHEN">
                    HEDDON STREET KITCHEN
                </a-select-option>
                <a-select-option value="PÉTRUS">
                    PÉTRUS
                </a-select-option>
                <a-select-option value="BREAD STREET KITCHEN - ST PAUL'S">
                    BREAD STREET KITCHEN - ST PAUL'S
                </a-select-option>
                <a-select-option value="BREAD STREET KITCHEN - SOUTHWARK">
                    BREAD STREET KITCHEN - SOUTHWARK
                </a-select-option>
                <a-select-option value="GORDON RAMSAY BAR & GRILL - MAYFAIR">
                    GORDON RAMSAY BAR & GRILL - MAYFAIR
                </a-select-option>
                <a-select-option value="GORDON RAMSAY BAR & GRILL - PARK WALK">
                    GORDON RAMSAY BAR & GRILL - PARK WALK
                </a-select-option>
                <a-select-option value="GORDON RAMSAY BAR & GRILL - CHELSEA">
                    GORDON RAMSAY BAR & GRILL - CHELSEA
                </a-select-option>
                <a-select-option value="LONDON HOUSE">
                    LONDON HOUSE
                </a-select-option>
                <a-select-option value="LONDON HOUSE - GARDEN">
                    LONDON HOUSE - GARDEN
                </a-select-option>
                <a-select-option value=" THE NARROW">
                    THE NARROW
                </a-select-option>
                <a-select-option value="STREET PIZZA - BATTERSEA">
                    STREET PIZZA - BATTERSEA
                </a-select-option>
                <a-select-option value="STREET PIZZA CAMDEN">
                    STREET PIZZA CAMDEN
                </a-select-option>
                <a-select-option value=" STREET PIZZA - SOUTHWARK">
                    STREET PIZZA - SOUTHWARK
                </a-select-option>
                <a-select-option value="STREET PIZZA - ST PAUL'S">
                    STREET PIZZA - ST PAUL'S
                </a-select-option>
                <a-select-option value="STREET BURGER - CHARGING CROSS ROAD">
                    STREET BURGER - CHARGING CROSS ROAD
                </a-select-option>
                <a-select-option value="STREET BURGER - ST PAUL'S">
                    STREET BURGER - ST PAUL'S
                </a-select-option>
                <a-select-option value="STREET BURGER - WOKING">
                    STREET BURGER - WOKING
                </a-select-option>
                <a-select-option value=" PLANE FOOD" >
                    PLANE FOOD
                </a-select-option>
                <a-select-option value="CHEF'S TABLE - KASAI - LUCKY CAT">
                    CHEF'S TABLE - KASAI - LUCKY CAT
                </a-select-option>
                <a-select-option value="CHEF'S TABLE - KORI - LUCKY CAT">
                    CHEF'S TABLE - KORI - LUCKY CAT
                </a-select-option>
                <a-select-option value="PÉTRUS KITCHEN TABLE">
                    PÉTRUS KITCHEN TABLE
                </a-select-option>
                 <a-select-option value=" SAVOY GRILL KITCHEN TABLE">
                    SAVOY GRILL KITCHEN TABLE
                </a-select-option>
                <a-select-option value="KITCHEN TABLE - HEDDON STREET KITCHEN">
                    KITCHEN TABLE - HEDDON STREET KITCHEN
                </a-select-option>
                <a-select-option value="GORDON RAMSAY BAR & GRILL BUTCHER'S BLOCK">
                    GORDON RAMSAY BAR & GRILL BUTCHER'S BLOCK
                </a-select-option>
                <a-select-option value="STREET LOUNGE">
                    STREET LOUNGE
                </a-select-option>
                <a-select-option value="STREET BURGER - KENSINGTON HIGH STREET">
                    STREET BURGER - KENSINGTON HIGH STREET
                </a-select-option>
            </a-select>
        </div>
        <div class="select-date">
            <a-date-picker @change="handleDate" />
        </div>
        <div class="select-time"  >
            <a-time-picker use12-hours @change="handleTime" />
        </div>
        <div class="party-size">
            <a-select default-value="Party Size" style="width: 120px" @change="handlePerson">
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
        </div>
        <div class="book">
             <a-button @click="showModal"  type="primary">
                BOOK A TABLE
            </a-button>
        </div>
        <div class="large-gr">
            <a-button type="secondary">
                Large? Enquire here
            </a-button>
        </div>
        <a-modal class="modal" v-model="visible" @ok="handleOk">
            <div class="noti-container">
                <div class="noti-header">
                    <h2>YOUR DETAILS</h2>
                </div>
                <div class="noti-details">
                    <p> You are about to make a booking for <strong>{{group}} people</strong> at <strong>{{restaurant}}</strong> on <strong>{{date}}st {{month}} {{year}}</strong> at <strong>{{hour}}:{{minutes}}</strong></p>
                    <form action="">
                        <div class="input-field1">
                            <input type="text" placeholder="First Name">
                            <input type="text" placeholder="Last Name">
                        </div>
                        <div class="input-form2">
                            <input type="text" placeholder="Email">
                        </div>
                        <div class="input-form3">
                            <input type="text" placeholder="Phone">
                        </div>

                        <br>

                        <div class="input-form4">
                            <p>Special requests</p>
                            <textarea placeholder="Enter Text"></textarea>
                        </div>
                        <div class="form-notice">
                            <div class="form-notice1">
                                <p>Please note we are complying with all current Government guidelines and we ask that our guests do the same. Visit gordonramsayrestaurants.com/COVID-19 for our full policy. Please ensure you arrive at the time of your booking.
                                    Should card details be required to secure your booking please note that if the booking is not honoured or is cancelled with less than 48hrs notice a cancellation fee of £30 per person will be charged to the card. Please note, special terms & conditions may apply for key dates.
                                    I understand and accept the booking terms and conditions.
                                    By clicking "Confirm booking" you agree to the OpenTable Terms of Use and Privacy Policy.
                                </p>
                            </div>
                            <hr>
                            <div class="form-notice2">
                                <input type="checkbox"><p>Yes I would like to receive the lastest marketing information by email from {{restaurant}}</p>
                            </div>
                            <hr>
                            <div class="form-notice3">
                                <input type="checkbox">
                                <p>Yes I would like to receive the lastest marketing information by email from Gordon Ramsay Restaurant, <strong>about all of our restaurants</strong>  </p>
                                <br>
                                <p>For more information please see our <strong><a href="#">privacy policy</a></strong>. We will of course keep your data sage and secure and of you change your mind you can unsubscribe at any time on any marketing email we send or email us at guestrelations@gordonramsay.com</p>
                            </div>
                            <hr>
                            <div class="button-confirm">
                                <button>CONFIRM BOOKING</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </a-modal>
    </div>
</template>

<script>
import moment from 'moment';
export default {
    data(){
        return{
            date:'',
            month:'',
            year:'',
            restaurant:'',
            hour:'',
            minutes:'',
            monthName:'',
            visible: false,
            group:'',
        }
    },
    methods: {
        handleChange(value){
            this.restaurant = value
        },
        handleTime(date) {
            this.hour = date._d.getHours()
            this.minutes = date._d.getMinutes()
        },
        handleDate(date) {
            this.date = date._d.getDate() , 
            this.month = date._d.getMonth(),
            this.year = date._d.getFullYear()
        },
        moment,
        showModal() {
            this.visible = true;
        },
        handleOk() {
            this.visible = false;
        },
        handlePerson(people){
            this.group = people
        }
    },
}
</script>

<style>
.book-container{
    position:fixed;
    display: flex;
    max-width: 1150px;
    flex-wrap: wrap;
    background-color: #f5f5f3;
    justify-content: center;
    bottom: 0;
    width: 100%;
}
.select-restaurant{
    width: 32.5%;
    margin:10px 10px 10px 0px;
}
.select-date{
    width: 15%;
    margin:10px 10px 10px 0px;
}
.book{
    margin:10px 10px 10px 0px;
}
.select-time{
    margin:10px 10px 10px 0px;
}
.party-size{
    margin:10px 10px 10px 0px;
}
.large-gr{

    margin:10px 10px 10px 0px;
}
.noti-container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.input-field1 input{
    padding:5px;
    margin:5px;
    width: 245px;
}

.input-form2 input{
    width: 500px;
    padding:5px;
    margin: 5px;
}
.input-form3 input{
    width: 500px;
    padding:5px;
    margin: 5px;
}
.input-form4{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.input-form4 textarea{
    width: 500px;
    padding:5px;
    margin: 5px;
    height: 100px;
}
.form-notice{
    padding:5px;
    margin: 5px;
}
.button-confirm{
    display: flex;
    justify-content: center;
    align-items: center;
}
.button-confirm button{
    padding:15px 60px;
}
</style>