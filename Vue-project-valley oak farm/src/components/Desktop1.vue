<template>
  <div class="container-center-horizontal">
    <div class="desktop-1 screen">
      <header class="header">
        <img class="logo2-1" :src="logo21" alt="logo2 1" />
        <div class="valley-oak-farm arefruqaaink-normal-white-40px">{{ valleyOakFarm }}</div>
        <div class="frame-1">
          <home :place="home1Props.place" />
          <home :place="home2Props.place" :className="home2Props.className" />
          <home :place="home3Props.place" :className="home3Props.className" />
          <home :place="home4Props.place" :className="home4Props.className" />
          <img class="icon-shopping-basket" :src="iconShoppingBasket" alt="icon &#34;shopping basket&#34;" /><img
            class="icon-user-circle"
            :src="iconUserCircle"
            alt="icon &#34;User Circle&#34;"
          />
        </div>
      </header>
      <div class="landing-page">
        <div class="overlap-group1">
          <div class="overlap-group-4" :style="{ 'background-image': 'url(' + overlapGroup1 + ')' }">
            <div class="rectangle-2"></div>
            <h1 class="title">{{ title }}</h1>
            <div class="surname">{{ surname }}</div>
            <p class="valley-oak-farms-vo" v-html="valleyOakFarmsVo"></p>
          </div>
          <component1 :iconShoppingCart="component1Props.iconShoppingCart" :joinNow="component1Props.joinNow" />
        </div>
      </div>
      <img class="text" :src="text" alt="Text" />
      <div class="group-container">
        <div class="overlap-group2">
          <img class="rectangle-8" :src="rectangle8" alt="Rectangle 8" />
          <p class="valley-oak-farms-current-offerings valign-text-middle arefruqaa-bold-white-45px">
            {{ valleyOakFarmsCurrentOfferings }}
          </p>
        </div>
        <div class="group-20">
          <div class="overlap-group-container">
            <div class="overlap-group">
              <div class="rectangle-10"></div>
              <img
                class="firefly-raw-milk-in-2"
                :src="fireflyRawMilkInGlassBottles5093211"
                alt="Firefly raw milk in glass bottles 50932 1"
              />
              <div class="raw-milk valign-text-middle timesnewroman-regular-normal-black-25px">{{ rawMilk }}</div>
            </div>
            <div class="overlap-group">
              <div class="overlap-group-1">
                <div class="rectangle-10"></div>
                <img
                  class="firefly-raw-milk-in"
                  :src="fireflyRawMilkInGlassBottles5093212"
                  alt="Firefly raw milk in glass bottles 50932 1"
                />
                <div class="fresh-fruits valign-text-middle timesnewroman-regular-normal-black-25px">
                  {{ freshFruits }}
                </div>
              </div>
              <div class="per-basket-lb valign-text-middle timesnewroman-regular-normal-black-12px">
                <span
                  ><span class="timesnewroman-regular-normal-black-12px">{{ spanText1 }}</span
                  ><span class="timesnewroman-regular-normal-black-12px">{{ spanText2 }}</span>
                </span>
              </div>
            </div>
          </div>
          <div class="flex-col">
            <div class="overlap-group">
              <div class="rectangle-10"></div>
              <img
                class="firefly-raw-milk-in"
                :src="fireflyRawMilkInGlassBottles5093213"
                alt="Firefly raw milk in glass bottles 50932 1"
              />
              <div class="eggs valign-text-middle timesnewroman-regular-normal-black-25px">{{ eggs }}</div>
            </div>
            <div class="overlap-group-2">
              <div class="overlap-group-1">
                <div class="rectangle-10"></div>
                <img
                  class="firefly-raw-milk-in"
                  :src="fireflyRawMilkInGlassBottles5093214"
                  alt="Firefly raw milk in glass bottles 50932 1"
                />
                <div class="fresh-vegetables valign-text-middle timesnewroman-regular-normal-black-25px">
                  {{ freshVegetables }}
                </div>
              </div>
              <div class="per-basket-lb-1 valign-text-middle timesnewroman-regular-normal-black-12px">
                <span
                  ><span class="timesnewroman-regular-normal-black-12px">{{ spanText3 }}</span
                  ><span class="timesnewroman-regular-normal-black-12px">{{ spanText4 }}</span>
                </span>
              </div>
            </div>
            <component2 :orderHere="component21Props.orderHere" />
          </div>
          <div class="flex-col-1">
            <div class="overlap-group">
              <div class="rectangle-10"></div>
              <img
                class="firefly-raw-milk-in"
                :src="fireflyRawMilkInGlassBottles5093215"
                alt="Firefly raw milk in glass bottles 50932 1"
              />
              <div class="honey valign-text-middle timesnewroman-regular-normal-black-25px">{{ honey }}</div>
            </div>
            <div class="overlap-group-2">
              <div class="overlap-group-1">
                <div class="rectangle-10"></div>
                <img
                  class="firefly-raw-milk-in"
                  :src="fireflyRawMilkInGlassBottles5093216"
                  alt="Firefly raw milk in glass bottles 50932 1"
                />
                <div class="organic-legume valign-text-middle timesnewroman-regular-normal-black-25px">
                  {{ organicLegume }}
                </div>
              </div>
              <div class="per-basket-lb-2 valign-text-middle timesnewroman-regular-normal-black-12px">
                <span
                  ><span class="timesnewroman-regular-normal-black-12px">{{ spanText5 }}</span
                  ><span class="timesnewroman-regular-normal-black-12px">{{ spanText6 }}</span>
                </span>
              </div>
            </div>
            <div class="more">{{ more }}</div>
          </div>
        </div>
      </div>
      <div class="let-us-know">
        <div class="overlap-group-5" :style="{ 'background-image': 'url(' + overlapGroup2 + ')' }">
          <p class="always-ask-if-your-f">{{ alwaysAskIfYourF }}</p>
          <p class="try-on-a-one-times-b arefruqaa-normal-white-28px">{{ tryOnAOneTimesB }}</p>
          <component3 :letUsKnow="component3Props.letUsKnow" />
        </div>
      </div>
      <div class="group-26">
        <div class="overlap-group7" :style="{ 'background-image': 'url(' + overlapGroup7 + ')' }">
          <div class="packaged-products-and-goods valign-text-middle arefruqaa-bold-white-45px">
            {{ packagedProductsAndGoods }}
          </div>
          <div class="overlap-group-container-1">
            <div class="overlap-group-3">
              <div class="rectangle-10-1"></div>
              <img
                class="firefly-raw-milk-in-1"
                :src="fireflyRawMilkInGlassBottles5093217"
                alt="Firefly raw milk in glass bottles 50932 1"
              />
              <div class="sparkling-mineral-water valign-text-middle timesnewroman-regular-normal-black-25px">
                {{ sparklingMineralWater }}
              </div>
            </div>
            <div class="overlap-group-3">
              <div class="rectangle-10-1"></div>
              <img
                class="firefly-raw-milk-in-1"
                :src="fireflyRawMilkInGlassBottles5093218"
                alt="Firefly raw milk in glass bottles 50932 1"
              />
              <div class="name valign-text-middle timesnewroman-regular-normal-black-25px">{{ name }}</div>
            </div>
            <div class="overlap-group-3">
              <div class="rectangle-10-1"></div>
              <img
                class="firefly-raw-milk-in-1"
                :src="fireflyRawMilkInGlassBottles5093219"
                alt="Firefly raw milk in glass bottles 50932 1"
              />
              <div class="jam-jelly valign-text-middle timesnewroman-regular-normal-black-25px">{{ jamJelly }}</div>
            </div>
          </div>
          <div class="overlap-group-container-2">
            <div class="overlap-group-3">
              <div class="rectangle-10-1"></div>
              <img
                class="firefly-raw-milk-in-1"
                :src="fireflyRawMilkInGlassBottles50932110"
                alt="Firefly raw milk in glass bottles 50932 1"
              />
              <div class="dried-herbs valign-text-middle timesnewroman-regular-normal-black-25px">{{ driedHerbs }}</div>
            </div>
            <div class="overlap-group-3">
              <div class="rectangle-10-1"></div>
              <img
                class="firefly-raw-milk-in-1"
                :src="fireflyRawMilkInGlassBottles50932111"
                alt="Firefly raw milk in glass bottles 50932 1"
              />
              <div class="fruit-rolls valign-text-middle timesnewroman-regular-normal-black-25px">{{ fruitRolls }}</div>
            </div>
          </div>
          <component2 :orderHere="component22Props.orderHere" :className="component22Props.className" />
        </div>
      </div>
      <div class="overlap-group8" :style="{ 'background-image': 'url(' + overlapGroup8 + ')' }">
        <component4 v-bind="component4Props" />
        <div class="overlap-group11">
          <div class="group-container-1">
            <div class="group-36">
              <p class="book-an-appointment-for-a-farm-tour valign-text-middle">{{ bookAnAppointmentForAFarmTour }}</p>
              <p class="fresh-air-friendly valign-text-middle">{{ freshAirFriendly }}</p>
            </div>
            <div class="group-35">
              <div class="overlap-group-6">
                <div class="your-name valign-text-middle timesnewroman-regular-normal-black-30px">{{ yourName }}</div>
              </div>
              <div class="overlap-group3">
                <div class="phone-number valign-text-middle timesnewroman-regular-normal-stack-30px">
                  {{ phoneNumber }}
                </div>
              </div>
              <div class="overlap-group1-1">
                <div class="email-id valign-text-middle timesnewroman-regular-normal-stack-30px">{{ emailId }}</div>
              </div>
              <div class="overlap-group2-1">
                <div class="comments valign-text-middle timesnewroman-regular-normal-stack-30px">{{ comments }}</div>
              </div>
            </div>
          </div>
          <component2 :orderHere="component23Props.orderHere" :className="component23Props.className" />
        </div>
      </div>
      <div class="overlap-group9" :style="{ 'background-image': 'url(' + overlapGroup9 + ')' }">
        <p class="address arial-regular-normal-dove-gray-25px">{{ address }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Home from "./Home";
import Component1 from "./Component1";
import Component2 from "./Component2";
import Component3 from "./Component3";
import Component4 from "./Component4";
export default {
  name: "Desktop1",
  components: {
    Home,
    Component1,
    Component2,
    Component3,
    Component4,
  },
  props: [
    "logo21",
    "valleyOakFarm",
    "iconShoppingBasket",
    "iconUserCircle",
    "overlapGroup1",
    "title",
    "surname",
    "valleyOakFarmsVo",
    "text",
    "rectangle8",
    "valleyOakFarmsCurrentOfferings",
    "fireflyRawMilkInGlassBottles5093211",
    "rawMilk",
    "fireflyRawMilkInGlassBottles5093212",
    "freshFruits",
    "spanText1",
    "spanText2",
    "fireflyRawMilkInGlassBottles5093213",
    "eggs",
    "fireflyRawMilkInGlassBottles5093214",
    "freshVegetables",
    "spanText3",
    "spanText4",
    "fireflyRawMilkInGlassBottles5093215",
    "honey",
    "fireflyRawMilkInGlassBottles5093216",
    "organicLegume",
    "spanText5",
    "spanText6",
    "more",
    "overlapGroup2",
    "alwaysAskIfYourF",
    "tryOnAOneTimesB",
    "overlapGroup7",
    "packagedProductsAndGoods",
    "fireflyRawMilkInGlassBottles5093217",
    "sparklingMineralWater",
    "fireflyRawMilkInGlassBottles5093218",
    "name",
    "fireflyRawMilkInGlassBottles5093219",
    "jamJelly",
    "fireflyRawMilkInGlassBottles50932110",
    "driedHerbs",
    "fireflyRawMilkInGlassBottles50932111",
    "fruitRolls",
    "overlapGroup8",
    "bookAnAppointmentForAFarmTour",
    "freshAirFriendly",
    "yourName",
    "phoneNumber",
    "emailId",
    "comments",
    "overlapGroup9",
    "address",
    "home1Props",
    "home2Props",
    "home3Props",
    "home4Props",
    "component1Props",
    "component21Props",
    "component3Props",
    "component22Props",
    "component4Props",
    "component23Props",
  ],
};
</script>

<style>
.desktop-1 {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  height: 5798px;
  overflow: hidden;
  width: 1440px;
}

.header {
  align-items: center;
  background-color: var(--white);
  display: flex;
  flex-direction: row;
  height: 92px;
  justify-content: flex-start;
  left: 0;
  min-width: 1440px;
  position: fixed;
  top: 0;
  width: auto;
  z-index: 8;
}

.logo2-1 {
  height: 92px;
  object-fit: cover;
  width: 127px;
}

.valley-oak-farm {
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent;
  background: linear-gradient(180deg, rgb(2.69, 134.3, 0) 0%, rgb(3.7, 185.3, 0) 50.2%, rgb(4.72, 236.3, 0) 100%);
  background-clip: text;
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 13.01px;
  margin-left: 2px;
  min-height: 49px;
  text-fill-color: transparent;
  width: 380px;
}

.frame-1 {
  align-items: center;
  display: flex;
  gap: 25px;
  height: 39px;
  margin-bottom: 2.88px;
  margin-left: 346px;
  padding: 0px 25px;
  position: relative;
  width: 586px;
}

.icon-shopping-basket {
  height: 29.09px;
  position: relative;
  width: 37.75px;
}

.icon-user-circle {
  height: 29.09px;
  position: relative;
  width: 32.02px;
}

.landing-page {
  align-items: flex-start;
  display: flex;
  margin-top: 92px;
  min-width: 1440px;
  z-index: 2;
}

.overlap-group1 {
  height: 709px;
  position: relative;
  width: 1440px;
}

.overlap-group-4 {
  background-position: 50% 50%;
  background-size: cover;
  height: 709px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1440px;
}

.rectangle-2 {
  background: linear-gradient(180deg, rgba(178.55, 254.15, 171.97, 0.2) 4.59%, rgba(255, 255, 255, 0.2) 100%);
  box-shadow: 0px 4px 4px #00000040;
  height: 709px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1440px;
}

.title {
  color: var(--rose-of-sharon);
  font-family: var(--font-family-beau_rivage);
  font-size: 80px;
  font-weight: 400;
  left: 870px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 37px;
  width: 530px;
}

.surname {
  color: var(--rose-of-sharon);
  font-family: var(--font-family-aref_ruqaa_ink);
  font-size: var(--font-size-xl);
  font-weight: 400;
  left: 963px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-decoration: underline;
  top: 145px;
  width: 344px;
}

.valley-oak-farms-vo {
  color: var(--white);
  font-family: var(--font-family-aref_ruqaa_ink);
  font-size: 26px;
  font-weight: 400;
  left: 872px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 232px;
  width: 487px;
}

.text {
  height: 400px;
  width: 1440px;
  z-index: 1;
}

.group-container {
  height: 1162px;
  position: relative;
  width: 1442px;
  z-index: 3;
}

.overlap-group2 {
  height: 1163px;
  left: 0;
  position: absolute;
  top: -1px;
  width: 1440px;
}

.rectangle-8 {
  height: 1162px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 1px;
  width: 1440px;
}

.valley-oak-farms-current-offerings {
  -webkit-text-stroke: 1px var(--black);
  height: 111px;
  left: 260px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 0;
  width: 918px;
}

.group-20 {
  align-items: flex-start;
  display: flex;
  height: 964px;
  left: 65px;
  min-width: 1364px;
  position: absolute;
  top: 189px;
}

.overlap-group-container {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 82px;
  min-height: 786px;
  width: 329px;
}

.overlap-group {
  border-radius: 15px;
  height: 352px;
  position: relative;
  width: 329px;
}

.rectangle-10 {
  background-color: var(--quill-gray);
  border: 1px solid;
  border-color: transparent;
  border-radius: 15px;
  height: 317px;
  left: 23px;
  position: absolute;
  top: 19px;
  width: 283px;
}

.firefly-raw-milk-in-2 {
  height: 237px;
  left: 35px;
  object-fit: cover;
  position: absolute;
  top: 39px;
  width: 258px;
}

.raw-milk {
  -webkit-text-stroke: 1px transparent;
  height: 31px;
  left: 113px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 291px;
  width: 101px;
}

.overlap-group-1 {
  border-radius: 15px;
  height: 352px;
  left: 0;
  position: absolute;
  top: 0;
  width: 329px;
}

.firefly-raw-milk-in {
  height: 239px;
  left: 35px;
  object-fit: cover;
  position: absolute;
  top: 37px;
  width: 258px;
}

.fresh-fruits {
  -webkit-text-stroke: 1px transparent;
  height: 29px;
  left: 103px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 285px;
  white-space: nowrap;
}

.per-basket-lb {
  -webkit-text-stroke: 1px transparent;
  height: 14px;
  left: 224px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 320px;
  white-space: nowrap;
}

.flex-col {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: 161px;
  min-height: 912px;
  position: relative;
  width: 329px;
}

.eggs {
  -webkit-text-stroke: 1px transparent;
  height: 29px;
  left: 138px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 291px;
  white-space: nowrap;
}

.overlap-group-2 {
  border-radius: 15px;
  height: 352px;
  margin-top: 82px;
  position: relative;
  width: 329px;
}

.fresh-vegetables,
.organic-legume {
  -webkit-text-stroke: 1px transparent;
  height: 29px;
  left: 79px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 285px;
  white-space: nowrap;
}

.per-basket-lb-1 {
  -webkit-text-stroke: 1px transparent;
  height: 14px;
  left: 228px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 320px;
  white-space: nowrap;
}

.flex-col-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-left: 162px;
  min-height: 964px;
  width: 381px;
}

.honey {
  -webkit-text-stroke: 1px transparent;
  height: 29px;
  left: 130px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 291px;
  white-space: nowrap;
}

.per-basket-lb-2 {
  -webkit-text-stroke: 1px transparent;
  height: 14px;
  left: 227px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 320px;
  white-space: nowrap;
}

.more {
  align-self: flex-end;
  color: #5772ff;
  font-family: var(--font-family-arial-regular);
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  margin-top: 155px;
  min-height: 23px;
  min-width: 68px;
  text-align: center;
  white-space: nowrap;
}

.let-us-know {
  align-items: flex-start;
  display: flex;
  height: 602px;
  min-width: 1440px;
  opacity: 0.95;
  z-index: 4;
}

.overlap-group-5 {
  align-items: center;
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  min-height: 602px;
  padding: 23px 239.7px;
  position: relative;
  width: 1440px;
}

.always-ask-if-your-f {
  -webkit-text-stroke: 1px var(--black);
  color: var(--white);
  font-family: var(--font-family-aref_ruqaa);
  font-size: var(--font-size-xxxl);
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  margin-right: 1.62px;
  min-height: 64px;
  text-align: center;
  width: 948px;
}

.try-on-a-one-times-b {
  -webkit-text-stroke: 1px #bfb9b9;
  align-self: flex-start;
  letter-spacing: 0;
  line-height: normal;
  margin-top: 176px;
  min-height: 90px;
  text-align: center;
  width: 956px;
}

.group-26 {
  align-items: flex-start;
  display: flex;
  height: 1159px;
  min-width: 1442px;
  z-index: 6;
}

.overlap-group7 {
  align-items: center;
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  min-height: 1159px;
  padding: 18px 64px;
  position: relative;
  width: 1440px;
}

.packaged-products-and-goods {
  -webkit-text-stroke: 1px var(--black);
  height: 70px;
  letter-spacing: 0;
  line-height: normal;
  margin-right: 1px;
  min-width: 661px;
  text-align: center;
}

.overlap-group-container-1 {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  gap: 162px;
  margin-top: 105px;
  min-width: 1311px;
}

.overlap-group-3 {
  border-radius: 15px;
  height: 350px;
  position: relative;
  width: 329px;
}

.rectangle-10-1 {
  background-color: var(--bon-jour);
  border: 1px solid;
  border-radius: 15px;
  height: 316px;
  left: 23px;
  position: absolute;
  top: 19px;
  width: 283px;
}

.firefly-raw-milk-in-1 {
  height: 236px;
  left: 35px;
  object-fit: cover;
  position: absolute;
  top: 39px;
  width: 258px;
}

.sparkling-mineral-water,
.name,
.jam-jelly,
.dried-herbs,
.fruit-rolls {
  -webkit-text-stroke: 1px var(--bon-jour);
  height: 31px;
  left: 35px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 290px;
  width: 257px;
}

.overlap-group-container-2 {
  align-items: flex-start;
  display: flex;
  gap: 176px;
  margin-left: 24px;
  margin-top: 105px;
  min-width: 834px;
}

.overlap-group8 {
  align-items: center;
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  gap: 108px;
  min-height: 1401px;
  padding: 65px 0;
  position: relative;
  width: 1440px;
  z-index: 5;
}

.overlap-group11 {
  align-items: flex-end;
  background-color: var(--quick-silver);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  gap: 61px;
  min-height: 584px;
  padding: 34px 89px;
  position: relative;
  width: 1384px;
}

.group-container-1 {
  align-items: center;
  display: flex;
  gap: 101px;
  height: 371px;
  margin-top: 23px;
  min-width: 1195px;
}

.group-36 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 29px;
  min-height: 233px;
  width: 565px;
}

.book-an-appointment-for-a-farm-tour {
  color: var(--yellow);
  font-family: var(--font-family-aref_ruqaa);
  font-size: var(--font-size-xxl);
  font-weight: 700;
  height: 126px;
  letter-spacing: 0;
  line-height: normal;
  margin-right: 4px;
  text-align: center;
  width: 561px;
}

.fresh-air-friendly {
  color: var(--white);
  font-family: var(--font-family-aref_ruqaa);
  font-size: var(--font-size-m);
  font-weight: 400;
  height: 78px;
  letter-spacing: 0;
  line-height: normal;
  margin-right: 14px;
  text-align: center;
  width: 493px;
}

.group-35 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 18px;
  min-height: 371px;
  width: 529px;
}

.overlap-group-6 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  justify-content: flex-end;
  min-width: 521px;
}

.your-name {
  height: 50px;
  letter-spacing: 0;
  line-height: normal;
  width: 508px;
}

.overlap-group3 {
  align-items: center;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 50px;
  min-width: 521px;
  padding: 0 13px;
}

.phone-number {
  height: 34px;
  letter-spacing: 0;
  line-height: normal;
  min-width: 181px;
  text-align: center;
  white-space: nowrap;
}

.overlap-group1-1 {
  align-items: center;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 50px;
  min-width: 521px;
  padding: 0 16px;
}

.email-id {
  height: 34px;
  letter-spacing: 0;
  line-height: normal;
  min-width: 111px;
  text-align: center;
  white-space: nowrap;
}

.overlap-group2-1 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 167px;
  min-width: 521px;
  padding: 8px 16px;
}

.comments {
  height: 34px;
  letter-spacing: 0;
  line-height: normal;
  min-width: 131px;
  text-align: center;
  white-space: nowrap;
}

.overlap-group9 {
  align-items: flex-start;
  background-size: 100% 100%;
  display: flex;
  height: 273px;
  justify-content: flex-end;
  min-width: 1440px;
  padding: 99px 77px;
  z-index: 7;
}

.address {
  letter-spacing: 0;
  line-height: normal;
  min-height: 58px;
  text-align: center;
  width: 298px;
}
</style>
