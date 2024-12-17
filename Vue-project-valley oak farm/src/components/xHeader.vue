<template>
  <header :class="[`header-2`, className || ``]">
    <div class="overlap-group8-1">
      <div class="rectangle-3-1"></div>
      <div class="group-2-1">
        <img
          class="logo2-1-2"
          src="https://cdn.animaapp.com/projects/675a8a2dad9974c27f56a200/releases/675a8a77084266cadf63f333/img/logo2-1.png"
          alt="logo2 1"
        />
        <div class="valley-oak-farm-3 arefruqaaink-normal-white-40px">Valley Oak Farm</div>
        <div class="frame-1-1">
          <home :place="home1Props.place" />
          <home :place="home2Props.place" :className="home2Props.className" />
          <home :place="home3Props.place" :className="home3Props.className" />
          <home :place="home4Props.place" :className="home4Props.className" />
          <img
            class="icon-shopping-basket-2"
            src="https://cdn.animaapp.com/projects/675a8a2dad9974c27f56a200/releases/675a8a77084266cadf63f333/img/---icon--shopping-basket--1@2x.png"
            alt="icon &#34;shopping basket&#34;"
          />
          <img
            class="icon-user-circle-2"
            src="https://cdn.animaapp.com/projects/675a8a2dad9974c27f56a200/releases/675a8a77084266cadf63f333/img/---icon--user-circle--1@2x.png"
            alt="icon &#34;User Circle&#34;"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Home from "./Home";
export default {
  name: "xHeader",
  components: {
    Home,
  },
  props: ["className", "home1Props", "home2Props", "home3Props", "home4Props"],
};
</script>

<style>
.header-2 {
  align-items: flex-start;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  height: 96px;
  justify-content: flex-start;
  left: 0;
  min-width: 1440px;
  position: fixed;
  top: 0;
  width: auto;
  z-index: 8;
}

.overlap-group8-1 {
  height: 96px;
  position: relative;
  width: 1440px;
}

.rectangle-3-1 {
  background-color: var(--white);
  height: 92px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1440px;
}

.group-2-1 {
  align-items: center;
  display: flex;
  height: 96px;
  left: 0;
  min-width: 1437px;
  position: absolute;
  top: 0;
}

.logo2-1-2 {
  height: 96px;
  object-fit: cover;
  width: 126px;
}

.valley-oak-farm-3 {
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent;
  background: linear-gradient(180deg, rgb(2.69, 134.3, 0) 0%, rgb(3.7, 185.3, 0) 50.2%, rgb(4.72, 236.3, 0) 100%);
  background-clip: text;
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 13.58px;
  margin-left: 2px;
  min-height: 51px;
  text-fill-color: transparent;
  width: 379px;
}

.frame-1-1 {
  align-items: center;
  display: inline-flex;
  gap: 25px;
  height: 41px;
  margin-bottom: 3px;
  margin-left: 344px;
  padding: 0px 25px;
  position: relative;
}

.icon-shopping-basket-2 {
  height: 29.09px;
  position: relative;
  width: 37.75px;
}

.icon-user-circle-2 {
  height: 29.09px;
  position: relative;
  width: 32.02px;
}

.header-2.header-3,
.header-2.header-4 {
  z-index: 4;
}
</style>
