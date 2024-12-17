<template>
  <div :class="[`home`, className || ``]">
    <div class="place arefruqaaink-normal-black-25px">{{ place }}</div>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: ["place", "className"],
};
</script>

<style>
.home {
  height: 38.79px;
  position: relative;
  width: 83.9px;
}

.place {
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: -1px;
  width: 84px;
}

.home.home-1,
.home.home-15,
.home.home-22,
.home.home-29,
.home.home-36 {
  width: 75.51px;
}

.home.home-1 .place,
.home.home-15 .place,
.home.home-22 .place,
.home.home-29 .place,
.home.home-36 .place {
  width: 76px;
}

.home.home-3,
.home.home-17,
.home.home-24,
.home.home-31,
.home.home-38 {
  width: 60.83px;
}

.home.home-3 .place,
.home.home-17 .place,
.home.home-24 .place,
.home.home-31 .place,
.home.home-38 .place {
  width: 61px;
}

.home.home-5,
.home.home-19,
.home.home-26,
.home.home-33,
.home.home-40 {
  height: 38px;
  width: 119px;
}

.home.home-5 .place,
.home.home-19 .place,
.home.home-26 .place,
.home.home-33 .place,
.home.home-40 .place {
  width: 119px;
}

.home.home-7 {
  align-items: flex-start;
  display: flex;
  height: 39px;
  min-width: 84px;
  position: unset;
  width: unset;
}

.home.home-7 .place {
  left: unset;
  margin-top: -1px;
  min-height: 39px;
  position: unset;
  top: unset;
}

.home.home-8 {
  align-items: flex-start;
  display: flex;
  height: 39px;
  min-width: 76px;
  position: unset;
  width: unset;
}

.home.home-8 .place {
  left: unset;
  margin-top: -1px;
  min-height: 39px;
  position: unset;
  top: unset;
  width: 76px;
}

.home.home-10 {
  align-items: flex-start;
  display: flex;
  height: 39px;
  min-width: 61px;
  position: unset;
  width: unset;
}

.home.home-10 .place {
  left: unset;
  margin-top: -1px;
  min-height: 39px;
  position: unset;
  top: unset;
  width: 61px;
}

.home.home-12 {
  align-items: flex-start;
  display: flex;
  height: 38px;
  min-width: 119px;
  position: unset;
  width: unset;
}

.home.home-12 .place {
  left: unset;
  margin-top: -1px;
  min-height: 38px;
  position: unset;
  top: unset;
  width: 119px;
}
</style>
