<template>
    <div class="countdown-size">
        <div class="countdown">
            <a-row :gutter="16">
                <a-col  style="margin-top: 32px;">
                <a-statistic-countdown  :value="deadline" format="D ngày H giờ  m  phút  s giây " />
                </a-col>
            </a-row>
            <h1>COUNTDOWN TO 17 MAY!</h1>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      deadline: "20 May 2021"
    };
  },
  methods: {
    onFinish() {
      console.log('finished!');
    },
  },
};
</script>
<style >
.countdown{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.countdown h1{
    margin-top: 10vh;
    color:black;
}
.countdown-size{
    background-image: linear-gradient(gray, white);
    box-shadow: 0 1px 1px rgba(0,0,0,.5);
    max-width: 1150px;
    margin-left: auto;
    margin-right: auto;
    height: 280px;
}
</style>