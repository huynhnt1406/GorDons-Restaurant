<template>
  <div class="book-container">
        <div class="select-restaurant">
            <a-select default-value="lucy" style="width: 120px" @change="handleChange">
                 <a-select-option value="jack">
                    SAVOY GRILL
                </a-select-option>
                <a-select-option value="lucy">
                    LUCKY CAT
                </a-select-option>
                <a-select-option value="Yiminghe">
                    RESTAURANT GORDON RAMSAY
                </a-select-option>
                <a-select-option value="jack">
                    HEDDON STREET KITCHEN
                </a-select-option>
                <a-select-option value="jack">
                    PÉTRUS
                </a-select-option>
                <a-select-option value="jack">
                    BREAD STREET KITCHEN - ST PAUL'S
                </a-select-option>
                <a-select-option value="lucy">
                    BREAD STREET KITCHEN - SOUTHWARK
                </a-select-option>
                <a-select-option value="Yiminghe">
                    GORDON RAMSAY BAR & GRILL - MAYFAIR
                </a-select-option>
                <a-select-option value="jack">
                    GORDON RAMSAY BAR & GRILL - PARK WALK
                </a-select-option>
                <a-select-option value="jack">
                    GORDON RAMSAY BAR & GRILL - CHELSEA
                </a-select-option>
                <a-select-option value="lucy">
                    LONDON HOUSE
                </a-select-option>
                <a-select-option value="Yiminghe">
                    LONDON HOUSE - GARDEN
                </a-select-option>
                <a-select-option value="jack">
                    THE NARROW
                </a-select-option>
                <a-select-option value="lucy">
                    STREET PIZZA - BATTERSEA
                </a-select-option>
                <a-select-option value="Yiminghe">
                    STREET PIZZA CAMDEN
                </a-select-option>
                <a-select-option value="jack">
                    STREET PIZZA - SOUTHWARK
                </a-select-option>
                <a-select-option value="lucy">
                    STREET PIZZA - ST PAUL'S
                </a-select-option>
                <a-select-option value="Yiminghe">
                    STREET BURGER - CHARGING CROSS ROAD
                </a-select-option>
                <a-select-option value="jack">
                    STREET BURGER - ST PAUL'S
                </a-select-option>
                <a-select-option value="lucy">
                    STREET BURGER - WOKING
                </a-select-option>
                <a-select-option value="Yiminghe">
                    PLANE FOOD
                </a-select-option>
                <a-select-option value="jack">
                    CHEF'S TABLE - KASAI - LUCKY CAT
                </a-select-option>
                <a-select-option value="lucy">
                    CHEF'S TABLE - KORI - LUCKY CAT
                </a-select-option>
                <a-select-option value="Yiminghe">
                    PÉTRUS KITCHEN TABLE
                </a-select-option>
                 <a-select-option value="lucy">
                    SAVOY GRILL KITCHEN TABLE
                </a-select-option>
                <a-select-option value="Yiminghe">
                    KITCHEN TABLE - HEDDON STREET KITCHEN
                </a-select-option>
                <a-select-option value="jack">
                    GORDON RAMSAY BAR & GRILL BUTCHER'S BLOCK
                </a-select-option>
                <a-select-option value="lucy">
                    STREET LOUNGE
                </a-select-option>
                <a-select-option value="Yiminghe">
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
                 <a-select-option value="jack">
                    1
                </a-select-option>
                <a-select-option value="lucy">
                    2
                </a-select-option>
                <a-select-option value="Yiminghe">
                    3
                </a-select-option>
                <a-select-option value="jack">
                    4
                </a-select-option>
                 <a-select-option value="Yiminghe">
                    5
                </a-select-option>
                <a-select-option value="jack">
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

</style>