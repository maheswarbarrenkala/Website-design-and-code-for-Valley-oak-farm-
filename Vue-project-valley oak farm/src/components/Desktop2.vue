<template>
  <div class="container-center-horizontal">
    <div class="desktop-2 screen">
      <x-header
        :home1Props="xHeaderProps.home1Props"
        :home2Props="xHeaderProps.home2Props"
        :home3Props="xHeaderProps.home3Props"
        :home4Props="xHeaderProps.home4Props"
      />
      <div class="group-55">
        <div class="overlap-group7-2 arefruqaaink-normal-black-30px">
          <div class="about">{{ about }}</div>
          <div class="history">{{ history1 }}</div>
        </div>
      </div>
      <div class="group-39">
        <div class="overlap-group-15">
          <div class="flex-col-4">
            <p class="we-are-your-favorite-store arefruqaaink-normal-black-40px">{{ weAreYourFavoriteStore }}</p>
            <p class="were-valley-oak-far arefruqaaink-normal-black-25px">{{ weReValleyOakFar }}</p>
            <img class="basil-leaf-1" :src="basilLeaf1" alt="basil-leaf 1" />
          </div>
          <img
            class="line-1"
            src="https://cdn.animaapp.com/projects/675a8a2dad9974c27f56a200/releases/675a8a77084266cadf63f333/img/line-1.svg"
            alt="Line 1"
          />
          <img class="banner-01-1-1" :src="banner0111" alt="banner-01 (1) 1" />
        </div>
      </div>
      <div class="group-42">
        <div class="flex-row">
          <img class="x1" :src="x1" alt="1" />
          <div class="flex-col-5">
            <div class="overlap-group1-3">
              <h1 class="grow-with-us-vall valign-text-middle arefruqaaink-normal-white-45px">
                <span
                  ><span class="arefruqaaink-normal-rose-of-sharon-45px">{{ spanText1 }}</span
                  ><span class="arefruqaaink-normal-black-40px">{{ spanText2 }}</span
                  ><span class="arefruqaaink-normal-rose-of-sharon-45px">{{ spanText3 }}</span
                  ><span class="arefruqaaink-normal-black-40px">{{ spanText4 }}</span>
                </span>
              </h1>
            </div>
            <div class="free-img-container">
              <img class="farming04-free-img" :src="farming04FreeImg" alt="farming04-free-img" /><img
                class="farming03-free-img"
                :src="farming03FreeImg"
                alt="farming03-free-img"
              />
            </div>
          </div>
        </div>
        <div class="flex-row-1">
          <img class="image-01" :src="image01" alt="image-01" />
          <div class="overlap-group2-4">
            <p class="natural-farming-di valign-text-middle arefruqaaink-normal-white-45px">
              <span
                ><span class="arefruqaaink-normal-rose-of-sharon-45px">{{ spanText5 }}</span
                ><span class="arefruqaaink-normal-black-40px">{{ spanText6 }}</span
                ><span class="arefruqaaink-normal-rose-of-sharon-45px">{{ spanText7 }}</span
                ><span class="arefruqaaink-normal-black-40px">{{ spanText8 }}</span>
              </span>
            </p>
          </div>
          <img class="chickens-free-range" :src="chickensFreeRange" alt="chickens-free-range" />
        </div>
      </div>
      <div class="group-47">
        <div class="overlap-group3-4">
          <div class="numbers-speak-for-themselves valign-text-middle">{{ numbersSpeakForThemselves }}</div>
          <div class="overlap-group-16">
            <div class="curated-products valign-text-middle arefruqaaink-normal-black-30px">{{ curatedProducts }}</div>
            <div class="text-1 valign-text-middle arefruqaaink-bold-black-40px">{{ text1 }}</div>
          </div>
          <div class="overlap-group1-4">
            <div class="text-2 valign-text-middle arefruqaaink-bold-black-40px">{{ text2 }}</div>
            <div class="product-categories valign-text-middle arefruqaaink-normal-black-30px">
              {{ productCategories }}
            </div>
          </div>
        </div>
      </div>
      <div class="overlap-group9-1">
        <div class="overlap-group4">
          <img class="big-logo-1-1" :src="bigLogo11" alt="big logo (1) 1" />
          <div class="rectangle-31"></div>
          <group46 />
          <div class="group-43">
            <img class="organic-badge-freeimg-1" :src="organicBadgeFreeimg1" alt="organic-badge-freeimg 1" />
            <div class="certified-products valign-text-middle arefruqaaink-bold-black-40px">
              {{ certifiedProducts }}
            </div>
            <p class="we-deal-with-various valign-text-middle arefruqaaink-normal-black-35px">
              {{ weDealWithVarious }}
            </p>
          </div>
          <div class="rectangle-32"></div>
          <component5 v-bind="component5Props" />
          <group46 :className="group46Props.className" />
        </div>
        <component2 :orderHere="component2Props.orderHere" :className="component2Props.className" />
      </div>
      <div class="group-54">
        <div class="overlap-group6-2">
          <div class="rectangle-35"></div>
          <div class="history-1 valign-text-middle arefruqaaink-bold-black-40px">{{ history2 }}</div>
          <component6 v-bind="component6Props" />
        </div>
      </div>
      <img class="group-59-1" :src="group59" alt="Group 59" />
    </div>
  </div>
</template>

<script>
import xHeader from "./xHeader";
import Group46 from "./Group46";
import Component5 from "./Component5";
import Component2 from "./Component2";
import Component6 from "./Component6";
export default {
  name: "Desktop2",
  components: {
    xHeader,
    Group46,
    Component5,
    Component2,
    Component6,
  },
  props: [
    "about",
    "history1",
    "weAreYourFavoriteStore",
    "weReValleyOakFar",
    "basilLeaf1",
    "banner0111",
    "x1",
    "spanText1",
    "spanText2",
    "spanText3",
    "spanText4",
    "farming04FreeImg",
    "farming03FreeImg",
    "image01",
    "spanText5",
    "spanText6",
    "spanText7",
    "spanText8",
    "chickensFreeRange",
    "numbersSpeakForThemselves",
    "curatedProducts",
    "text1",
    "text2",
    "productCategories",
    "bigLogo11",
    "organicBadgeFreeimg1",
    "certifiedProducts",
    "weDealWithVarious",
    "history2",
    "group59",
    "xHeaderProps",
    "component5Props",
    "group46Props",
    "component2Props",
    "component6Props",
  ],
};
</script>

<style>
.desktop-2 {
  align-items: center;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  height: 4711px;
  overflow: hidden;
  position: relative;
  width: 1440px;
}

.group-55 {
  align-items: flex-start;
  display: flex;
  height: 72px;
  left: 0;
  min-width: 1444px;
  position: fixed;
  top: 92px;
  z-index: 7;
}

.overlap-group7-2 {
  align-items: flex-start;
  background: linear-gradient(180deg, rgba(222.26, 218.56, 218.56, 0) 34.45%, rgb(182.86, 255, 176.59) 100%);
  display: flex;
  gap: 50px;
  height: 72px;
  min-width: 1440px;
  padding: 12px 55px;
}

.about {
  letter-spacing: 0;
  line-height: normal;
  min-height: 47px;
  min-width: 85px;
}

.history {
  letter-spacing: 0;
  line-height: normal;
  min-height: 47px;
}

.group-39 {
  align-items: flex-start;
  display: flex;
  margin-left: 5px;
  margin-top: 207px;
  min-width: 1385px;
  z-index: 1;
}

.overlap-group-15 {
  align-items: flex-end;
  background-color: #03b9000a;
  border-radius: 5px;
  display: flex;
  height: 610px;
  justify-content: flex-end;
  min-width: 1381px;
  padding: 57px 28px;
}

.flex-col-4 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 476px;
  width: 551px;
}

.we-are-your-favorite-store {
  letter-spacing: 0;
  line-height: normal;
  margin-right: 7px;
  min-height: 63px;
  min-width: 500px;
  text-align: center;
}

.were-valley-oak-far {
  letter-spacing: 0;
  line-height: normal;
  margin-top: 21px;
  min-height: 273px;
  text-align: center;
  width: 551px;
}

.basil-leaf-1 {
  height: 90px;
  margin-right: 58px;
  margin-top: 29px;
  object-fit: cover;
  width: 209px;
}

.line-1 {
  height: 486px;
  margin-left: 70px;
  object-fit: cover;
  width: 2px;
}

.banner-01-1-1 {
  height: 486px;
  margin-left: 66px;
  object-fit: cover;
  width: 596px;
}

.group-42 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 52px;
  margin-left: 4px;
  margin-top: 53px;
  min-height: 1381px;
  width: 1326px;
  z-index: 2;
}

.flex-row {
  align-items: flex-start;
  display: flex;
  gap: 40px;
  min-width: 1322px;
}

.x1 {
  height: 829px;
  object-fit: cover;
  width: 576px;
}

.flex-col-5 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 34px;
  min-height: 829px;
  width: 706px;
}

.overlap-group1-3 {
  align-items: flex-start;
  background-color: #ebfeeb;
  display: flex;
  height: 295px;
  min-width: 706px;
  padding: 24px 40px;
}

.grow-with-us-vall {
  height: 203px;
  letter-spacing: 0;
  line-height: normal;
  text-align: center;
  width: 626px;
}

.free-img-container {
  align-items: flex-start;
  display: flex;
  gap: 40px;
  min-width: 706px;
}

.farming04-free-img,
.farming03-free-img,
.image-01 {
  height: 500px;
  object-fit: cover;
  width: 333px;
}

.flex-row-1 {
  align-items: flex-start;
  display: flex;
  min-width: 1322px;
}

.overlap-group2-4 {
  align-items: flex-end;
  background-color: #ecffec;
  display: flex;
  height: 500px;
  margin-left: 39px;
  min-width: 577px;
  padding: 15px 14px;
}

.natural-farming-di {
  height: 468px;
  letter-spacing: 0;
  line-height: normal;
  text-align: center;
  width: 546px;
}

.chickens-free-range {
  height: 500px;
  margin-left: 40px;
  object-fit: cover;
  width: 333px;
}

.group-47 {
  align-items: flex-start;
  display: flex;
  margin-right: 2px;
  margin-top: 52px;
  min-width: 1442px;
  z-index: 3;
}

.overlap-group3-4 {
  align-items: flex-start;
  background: linear-gradient(180deg, rgb(236, 255, 236) 11.88%, rgb(199.54, 208.41, 255) 100%);
  box-shadow: 0px 4px 4px #00000040, inset 0px 4px 4px #00000040;
  display: flex;
  gap: 256px;
  height: 226px;
  min-width: 1440px;
  padding: 50px 55px;
}

.numbers-speak-for-themselves {
  color: var(--black);
  font-family: var(--font-family-aref_ruqaa_ink);
  font-size: var(--font-size-xl);
  font-weight: 700;
  height: 120px;
  letter-spacing: 0;
  line-height: normal;
  text-align: center;
  width: 306px;
}

.overlap-group-16 {
  height: 107px;
  position: relative;
  width: 242px;
}

.curated-products {
  height: 47px;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 60px;
  width: 242px;
}

.text-1 {
  height: 63px;
  left: 41px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 0;
  width: 178px;
}

.overlap-group1-4 {
  height: 107px;
  position: relative;
  width: 262px;
}

.text-2 {
  height: 63px;
  left: 81px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 0;
  width: 101px;
}

.product-categories {
  height: 47px;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 60px;
  width: 262px;
}

.overlap-group9-1 {
  height: 917px;
  margin-left: 1px;
  margin-top: 52px;
  position: relative;
  width: 1345px;
  z-index: 4;
}

.overlap-group4 {
  height: 917px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1345px;
}

.big-logo-1-1 {
  height: 835px;
  left: 191px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 942px;
}

.rectangle-31 {
  background-color: #f5fcf5;
  height: 879px;
  left: 0;
  opacity: 0.7;
  position: absolute;
  top: 38px;
  width: 1345px;
}

.group-43 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 43px;
  left: 46px;
  min-height: 504px;
  position: absolute;
  top: 134px;
  width: 352px;
}

.organic-badge-freeimg-1 {
  height: 190px;
  margin-right: 4px;
  object-fit: cover;
  width: 232px;
}

.certified-products {
  height: 63px;
  letter-spacing: 0;
  line-height: normal;
  margin-right: 4px;
  min-width: 348px;
  text-align: center;
}

.we-deal-with-various {
  height: 165px;
  letter-spacing: 0;
  line-height: normal;
  margin-right: 4px;
  text-align: center;
  width: 348px;
}

.rectangle-32 {
  background-color: #d9d9d9;
  height: 504px;
  left: 981px;
  position: absolute;
  top: 134px;
  width: 324px;
}

.group-54 {
  align-items: flex-start;
  display: flex;
  margin-left: 10px;
  margin-top: 48px;
  min-width: 1348px;
  z-index: 5;
}

.overlap-group6-2 {
  height: 843px;
  position: relative;
  width: 1346px;
}

.rectangle-35 {
  background-color: #f8fdf8;
  height: 843px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1345px;
}

.history-1 {
  height: 63px;
  left: 601px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 15px;
}

.group-59-1 {
  height: 273px;
  margin-top: 49px;
  width: 1440px;
  z-index: 6;
}
</style>
