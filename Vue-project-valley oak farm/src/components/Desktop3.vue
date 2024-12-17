<template>
  <div class="container-center-horizontal">
    <div class="desktop-3 screen">
      <header class="header-1">
        <div class="overlap-group7-1">
          <div class="rectangle-3"></div>
          <div class="group-2">
            <img class="logo2-1-1" :src="logo21" alt="logo2 1" />
            <h1 class="title-1 arefruqaaink-normal-white-40px">{{ title }}</h1>
            <div class="group-1">
              <home :place="home1Props.place" :className="home1Props.className" />
              <home :place="home2Props.place" :className="home2Props.className" />
              <home :place="home3Props.place" :className="home3Props.className" />
              <home :place="home4Props.place" :className="home4Props.className" />
              <img class="icon-shopping-basket-1" :src="iconShoppingBasket" alt="icon &#34;shopping basket&#34;" /><img
                class="icon-user-circle-1"
                :src="iconUserCircle"
                alt="icon &#34;User Circle&#34;"
              />
            </div>
          </div>
        </div>
      </header>
      <div class="group-61">
        <div class="overlap-group6-1">
          <div class="contact-us arefruqaaink-normal-black-30px">{{ contactUs }}</div>
        </div>
      </div>
      <div class="group-container-2">
        <div class="overlap-group2-2">
          <div class="overlap-group-13" :style="{ 'background-image': 'url(' + overlapGroup + ')' }">
            <div class="get-in-touch">{{ getInTouch }}</div>
          </div>
          <div class="overlap-group-container-3">
            <div class="overlap-group5">
              <div class="alfiya arefruqaaink-normal-black-35px">{{ alfiya }}</div>
              <img class="user-alt-1_svgrepocom" :src="userAlt1_SvgrepoCom" alt="user-alt-1_svgrepo.com" />
            </div>
            <div class="address-container">
              <p class="address-1 arefruqaaink-normal-black-25px">{{ address }}</p>
              <div class="mailing-address arefruqaaink-normal-black-35px">{{ mailingAddress }}</div>
            </div>
          </div>
          <div class="overlap-group3-2">
            <div class="location arefruqaaink-normal-black-35px">{{ location }}</div>
            <img class="group-63" :src="group63" alt="Group 63" />
          </div>
          <component2 :orderHere="component21Props.orderHere" :className="component21Props.className" />
          <div class="rectangle-56"></div>
        </div>
        <div class="group-91">
          <div class="group-36-1">
            <div class="submit-your-requesthere valign-text-middle" v-html="submitYourRequesthere"></div>
            <p class="share-your-happiness valign-text-middle" v-html="shareYourHappiness"></p>
          </div>
          <div class="flex-col-3">
            <div class="group-35-1">
              <div class="overlap-group-14">
                <div class="your-name-1 valign-text-middle timesnewroman-regular-normal-black-30px">{{ yourName }}</div>
              </div>
              <div class="overlap-group2-3">
                <div class="phone-number-1 valign-text-middle timesnewroman-regular-normal-stack-30px">
                  {{ phoneNumber }}
                </div>
              </div>
              <div class="overlap-group1-2">
                <div class="email-id-1 valign-text-middle timesnewroman-regular-normal-stack-30px">{{ emailId }}</div>
              </div>
              <div class="overlap-group3-3">
                <div class="comments-1 valign-text-middle timesnewroman-regular-normal-stack-30px">{{ comments }}</div>
              </div>
            </div>
            <component2 :orderHere="component22Props.orderHere" :className="component22Props.className" />
          </div>
        </div>
      </div>
      <img class="group-59" :src="group59" alt="Group 59" />
    </div>
  </div>
</template>

<script>
import Home from "./Home";
import Component2 from "./Component2";
export default {
  name: "Desktop3",
  components: {
    Home,
    Component2,
  },
  props: [
    "logo21",
    "title",
    "iconShoppingBasket",
    "iconUserCircle",
    "contactUs",
    "overlapGroup",
    "getInTouch",
    "alfiya",
    "userAlt1_SvgrepoCom",
    "address",
    "mailingAddress",
    "location",
    "group63",
    "submitYourRequesthere",
    "shareYourHappiness",
    "yourName",
    "phoneNumber",
    "emailId",
    "comments",
    "group59",
    "home1Props",
    "home2Props",
    "home3Props",
    "home4Props",
    "component21Props",
    "component22Props",
  ],
};
</script>

<style>
.desktop-3 {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  height: 2391px;
  overflow: hidden;
  width: 1440px;
}

.header-1 {
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
  z-index: 4;
}

.overlap-group7-1 {
  height: 96px;
  position: relative;
  width: 1440px;
}

.rectangle-3 {
  background-color: var(--white);
  height: 92px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1440px;
}

.group-2 {
  align-items: center;
  display: flex;
  height: 96px;
  left: 0;
  min-width: 1412px;
  position: absolute;
  top: 0;
}

.logo2-1-1 {
  height: 96px;
  object-fit: cover;
  width: 126px;
}

.title-1 {
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

.group-1 {
  align-items: center;
  display: flex;
  gap: 25px;
  height: 39px;
  margin-bottom: 3px;
  margin-left: 369px;
  min-width: 534px;
  position: relative;
}

.icon-shopping-basket-1 {
  height: 29px;
  margin-top: 0;
  width: 38px;
}

.icon-user-circle-1 {
  height: 29px;
  margin-top: 0;
  width: 32px;
}

.group-61 {
  align-items: flex-start;
  display: flex;
  height: 72px;
  left: 0;
  min-width: 1442px;
  position: fixed;
  top: 96px;
  z-index: 3;
}

.overlap-group6-1 {
  align-items: flex-start;
  background: linear-gradient(180deg, rgba(222.26, 218.56, 218.56, 0) 34.45%, rgb(182.86, 255, 176.59) 100%);
  display: flex;
  height: 72px;
  min-width: 1440px;
  padding: 10px 55px;
}

.contact-us {
  letter-spacing: 0;
  line-height: normal;
  min-height: 47px;
}

.group-container-2 {
  height: 1950px;
  margin-left: -3px;
  margin-top: 168px;
  position: relative;
  width: 1451px;
  z-index: 1;
}

.overlap-group2-2 {
  align-items: center;
  background-color: #c7d0ff30;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  left: 0;
  min-height: 1950px;
  padding: 32px 52px;
  position: absolute;
  top: 0;
  width: 1443px;
}

.overlap-group-13 {
  align-items: flex-start;
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  height: 200px;
  justify-content: flex-end;
  margin-left: 2.02px;
  min-width: 393px;
  padding: 45.6px 46px;
}

.get-in-touch {
  color: var(--white);
  font-family: var(--font-family-aref_ruqaa_ink);
  font-size: var(--font-size-xxl);
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  min-height: 67px;
  width: 235px;
}

.overlap-group-container-3 {
  align-items: flex-start;
  display: flex;
  gap: 157px;
  margin-left: 6px;
  margin-top: 34px;
  min-width: 1197px;
}

.overlap-group5 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 20px;
  box-shadow: 0px 4px 4px #00000040, 0px 5px 4px #00000040;
  display: flex;
  flex-direction: column;
  gap: 37px;
  min-height: 315px;
  padding: 26.5px 82px;
  width: 520px;
}

.alfiya {
  letter-spacing: 0;
  line-height: normal;
  min-height: 58px;
  text-align: center;
  width: 348px;
}

.user-alt-1_svgrepocom {
  align-self: center;
  height: 116px;
  margin-right: 7.5px;
  width: 90px;
}

.address-container {
  background-color: var(--white);
  border-radius: 20px;
  box-shadow: 0px 4px 4px #00000040, 0px 5px 4px #00000040;
  height: 315px;
  position: relative;
  width: 520px;
}

.address-1 {
  left: 128px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 85px;
  width: 272px;
}

.mailing-address {
  left: 134px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-decoration: underline;
  top: 27px;
  width: 258px;
}

.overlap-group3-2 {
  background-color: var(--white);
  border-radius: 20px;
  box-shadow: 0px 4px 4px #00000040, 0px 5px 4px #00000040;
  height: 315px;
  margin-left: 3px;
  margin-top: 141px;
  position: relative;
  width: 520px;
}

.location {
  left: 191px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-decoration: underline;
  top: 29px;
  width: 137px;
}

.group-63 {
  height: 159px;
  left: 196px;
  position: absolute;
  top: 86px;
  width: 121px;
}

.rectangle-56 {
  align-self: flex-end;
  background-color: #03b9002b;
  border-radius: 20px;
  height: 610px;
  margin-top: 58px;
  width: 1336px;
}

.group-91 {
  align-items: flex-start;
  display: flex;
  gap: 101px;
  height: 463px;
  left: 174px;
  min-width: 1187px;
  position: absolute;
  top: 1294px;
}

.group-36-1 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 31px;
  margin-top: 5.25px;
  min-height: 232px;
  width: 565px;
}

.submit-your-requesthere {
  color: var(--black);
  font-family: var(--font-family-aref_ruqaa);
  font-size: var(--font-size-xxl);
  font-weight: 700;
  height: 124px;
  letter-spacing: 0;
  line-height: normal;
  margin-right: 4px;
  text-align: center;
  width: 561px;
}

.share-your-happiness {
  color: var(--black-3);
  font-family: var(--font-family-aref_ruqaa);
  font-size: var(--font-size-l);
  font-weight: 400;
  height: 77px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 2px;
  text-align: center;
  width: 493px;
}

.flex-col-3 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 38px;
  min-height: 463px;
  position: relative;
  width: 529px;
}

.group-35-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 18px;
  min-height: 365px;
  width: 529px;
}

.overlap-group-14 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  justify-content: flex-end;
  min-width: 521px;
}

.your-name-1 {
  height: 49px;
  letter-spacing: 0;
  line-height: normal;
  width: 508px;
}

.overlap-group2-3 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 49px;
  margin-left: 0;
  min-width: 521px;
  padding: 7.9px 13px;
}

.phone-number-1 {
  height: 33px;
  letter-spacing: 0;
  line-height: normal;
  text-align: center;
  white-space: nowrap;
  width: 181px;
}

.overlap-group1-2 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 49px;
  margin-left: 0;
  min-width: 521px;
  padding: 7.9px 16px;
}

.email-id-1 {
  height: 33px;
  letter-spacing: 0;
  line-height: normal;
  text-align: center;
  white-space: nowrap;
  width: 111px;
}

.overlap-group3-3 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 164px;
  margin-left: 0;
  min-width: 521px;
  padding: 7.9px 16px;
}

.comments-1 {
  height: 33px;
  letter-spacing: 0;
  line-height: normal;
  text-align: center;
  white-space: nowrap;
  width: 131px;
}

.group-59 {
  height: 273px;
  width: 1440px;
  z-index: 2;
}
</style>
