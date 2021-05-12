<template>
  <div class="book-container">
        <div class="select-restaurant">
            <a-select default-value="lucy" style="width: 200px" @change="handleChange">
                 <a-select-option value="res1">
                    SAVOY GRILL
                </a-select-option>
                <a-select-option value="res2">
                    LUCKY CAT
                </a-select-option>
                <a-select-option value="res3">
                    RESTAURANT GORDON RAMSAY
                </a-select-option>
                <a-select-option value="res4">
                    HEDDON STREET KITCHEN
                </a-select-option>
                <a-select-option value="res5">
                    PÉTRUS
                </a-select-option>
                <a-select-option value="res6">
                    BREAD STREET KITCHEN - ST PAUL'S
                </a-select-option>
                <a-select-option value="res7">
                    BREAD STREET KITCHEN - SOUTHWARK
                </a-select-option>
                <a-select-option value="res8">
                    GORDON RAMSAY BAR & GRILL - MAYFAIR
                </a-select-option>
                <a-select-option value="res9">
                    GORDON RAMSAY BAR & GRILL - PARK WALK
                </a-select-option>
                <a-select-option value="res10">
                    GORDON RAMSAY BAR & GRILL - CHELSEA
                </a-select-option>
                <a-select-option value="res11">
                    LONDON HOUSE
                </a-select-option>
                <a-select-option value="res12">
                    LONDON HOUSE - GARDEN
                </a-select-option>
                <a-select-option value="res13">
                    THE NARROW
                </a-select-option>
                <a-select-option value="res14">
                    STREET PIZZA - BATTERSEA
                </a-select-option>
                <a-select-option value="res15">
                    STREET PIZZA CAMDEN
                </a-select-option>
                <a-select-option value="res16">
                    STREET PIZZA - SOUTHWARK
                </a-select-option>
                <a-select-option value="res17">
                    STREET PIZZA - ST PAUL'S
                </a-select-option>
                <a-select-option value="res18">
                    STREET BURGER - CHARGING CROSS ROAD
                </a-select-option>
                <a-select-option value="res19">
                    STREET BURGER - ST PAUL'S
                </a-select-option>
                <a-select-option value="res20">
                    STREET BURGER - WOKING
                </a-select-option>
                <a-select-option value="res21">
                    PLANE FOOD
                </a-select-option>
                <a-select-option value="res22">
                    CHEF'S TABLE - KASAI - LUCKY CAT
                </a-select-option>
                <a-select-option value="res23">
                    CHEF'S TABLE - KORI - LUCKY CAT
                </a-select-option>
                <a-select-option value="res24">
                    PÉTRUS KITCHEN TABLE
                </a-select-option>
                 <a-select-option value="res25">
                    SAVOY GRILL KITCHEN TABLE
                </a-select-option>
                <a-select-option value="res26">
                    KITCHEN TABLE - HEDDON STREET KITCHEN
                </a-select-option>
                <a-select-option value="res27">
                    GORDON RAMSAY BAR & GRILL BUTCHER'S BLOCK
                </a-select-option>
                <a-select-option value="res28">
                    STREET LOUNGE
                </a-select-option>
                <a-select-option value="res29">
                    STREET BURGER - KENSINGTON HIGH STREET
                </a-select-option>
            </a-select>
        </div>
        <div class="select-date">
            <a-date-picker @change="onChange" />
        </div>
        <div class="select-">
            <a-time-picker :default-value="moment('07:00', 'HH:mm')" format="HH:mm" />
        </div>
        <div class="party-size">
            <a-select default-value="lucy" style="width: 120px" @change="handleChange">
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
    </div>
</template>

<script>
import moment from 'moment';
export default {
    methods: {
        onChange(date, dateString) {
        console.log(date, dateString);
        },
        moment,
    },
}
</script>

<style>
.book-container{
    display: flex;
    max-width: 1150px;
    margin-left:auto;
    margin-right:auto;
}
</style>