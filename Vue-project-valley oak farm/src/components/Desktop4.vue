<template>
  <div class="container-center-horizontal">
    <div class="desktop-4 screen">
      <img class="rectangle-50" :src="rectangle501" alt="Rectangle 50" />
      <header class="header-5">
        <div class="overlap-group13">
          <div class="rectangle-3-5"></div>
          <div class="group-2-4">
            <img class="logo2-1-5" :src="logo21" alt="logo2 1" />
            <h1 class="title-4 arefruqaaink-normal-white-40px">{{ title }}</h1>
            <div class="frame-1-4">
              <home :place="home1Props.place" />
              <home :place="home2Props.place" :className="home2Props.className" />
              <home :place="home3Props.place" :className="home3Props.className" />
              <home :place="home4Props.place" :className="home4Props.className" />
              <img class="icon-shopping-basket-5" :src="iconShoppingBasket" alt="icon &#34;shopping basket&#34;" /><img
                class="icon-user-circle-5"
                :src="iconUserCircle"
                alt="icon &#34;User Circle&#34;"
              />
            </div>
          </div>
        </div>
      </header>
      <div class="group-61-1">
        <div class="overlap-group12">
          <div class="rectangle-26"></div>
          <div class="shop-farm-fresh-products arefruqaa-normal-black-30px">{{ shopFarmFreshProducts }}</div>
        </div>
      </div>
      <div class="group-79">
        <div class="group-container-3">
          <div class="group-70">
            <div class="overlap-group1-9">
              <div class="search-products valign-text-middle">{{ searchProducts }}</div>
            </div>
            <div class="overlap-group-28">
              <div class="rectangle-42"></div>
              <img class="logo-leaf-new-1-2" :src="logoLeafNew12" alt="logo-leaf-new (1) 2" /><img
                class="logo-leaf-new-1-1"
                :src="logoLeafNew11"
                alt="logo-leaf-new (1) 1"
              />
            </div>
            <a href="#rectangle-48"><img class="group-65" :src="group65" alt="Group 65" /></a
            ><a href="#rectangle-48"><img class="group-66" :src="group66" alt="Group 66" /></a
            ><a href="#rectangle-48"><img class="group-68" :src="group681" alt="Group 68" /></a
            ><a href="#rectangle-48"><img class="group-67" :src="group67" alt="Group 67" /></a
            ><img class="slider" :src="slider" alt="Slider" />
          </div>
          <a href="#rectangle-48"><img class="group-68-1" :src="group682" alt="Group 68" /></a>
        </div>
      </div>
      <div class="overlap-group15">
        <div class="overlap-group10">
          <div class="flex-row-8">
            <div class="flex-col-10">
              <div class="fruits-vegetables valign-text-bottom arefruqaa-normal-black-35px">
                <span
                  ><span class="span-4 arefruqaa-normal-black-35px">{{ spanText1 }}</span
                  ><span class="arefruqaa-normal-black-35px">{{ spanText2 }}</span
                  ><span class="span-4 arefruqaa-normal-black-35px">{{ spanText3 }}</span>
                </span>
              </div>
              <div class="overlap-group3-6">
                <img
                  class="firefly-farm-fresh-fruits-31877-1"
                  :src="fireflyFarmFreshFruits318771"
                  alt="Firefly farm fresh fruits 31877 1"
                /><img
                  class="line"
                  src="https://cdn.animaapp.com/projects/675a8a2dad9974c27f56a200/releases/675a8a77084266cadf63f333/img/line-3.svg"
                  alt="Line 2"
                />
                <div class="fruits arefruqaa-normal-black-24px">{{ fruits }}</div>
                <div class="lb-per-basket arefruqaa-normal-black-12px">{{ lbPerBasket1 }}</div>
              </div>
              <div class="overlap-group4-3">
                <div class="add-to-basket arial-regular-normal-white-24px">{{ addToBasket1 }}</div>
              </div>
            </div>
            <div class="group-75">
              <div class="overlap-group-21">
                <img
                  class="firefly-farm-fresh-vegetables-94054-1"
                  :src="fireflyFarmFreshVegetables940541"
                  alt="Firefly farm fresh Vegetables 94054 1"
                /><img
                  class="line"
                  src="https://cdn.animaapp.com/projects/675a8a2dad9974c27f56a200/releases/675a8a77084266cadf63f333/img/line-3.svg"
                  alt="Line 3"
                />
                <div class="vegetables arefruqaa-normal-black-24px">{{ vegetables }}</div>
                <div class="lb-per-basket arefruqaa-normal-black-12px">{{ lbPerBasket2 }}</div>
              </div>
              <div class="overlap-group-22">
                <div class="add-to-basket arial-regular-normal-white-24px">{{ addToBasket2 }}</div>
              </div>
            </div>
            <div class="group-76-1">
              <div class="overlap-group-23">
                <img class="red-chillies-1" :src="redChillies1" alt="red-chillies 1" /><img
                  class="line"
                  src="https://cdn.animaapp.com/projects/675a8a2dad9974c27f56a200/releases/675a8a77084266cadf63f333/img/line-3.svg"
                  alt="Line 4"
                />
                <div class="red-chilies arefruqaa-normal-black-24px">{{ redChilies }}</div>
                <div class="lb-per-basket arefruqaa-normal-black-12px">{{ lbPerBasket3 }}</div>
              </div>
              <div class="overlap-group-22">
                <div class="add-to-basket arial-regular-normal-white-24px">{{ addToBasket3 }}</div>
              </div>
            </div>
          </div>
          <div class="free-shipping-1 arefruqaa-normal-black-18px">
            <span class="arefruqaa-normal-black-18px">{{ spanText4 }}</span
            ><span class="arefruqaa-normal-black-15px">{{ spanText5 }}</span>
          </div>
        </div>
        <div class="overlap-group9-2">
          <div class="flex-col-11">
            <div class="herbs valign-text-bottom arefruqaa-normal-black-35px">{{ herbs }}</div>
            <div class="overlap-group-24">
              <div class="group-7">
                <div class="overlap-group-21">
                  <img
                    class="line-2"
                    src="https://cdn.animaapp.com/projects/675a8a2dad9974c27f56a200/releases/675a8a77084266cadf63f333/img/line-3.svg"
                    alt="Line 2"
                  />
                  <div class="dried-herbs-1 arefruqaa-normal-black-24px">{{ driedHerbs }}</div>
                  <div class="oz-per-basket arefruqaa-normal-black-12px">{{ ozPerBasket1 }}</div>
                </div>
                <div class="overlap-group-25">
                  <div class="add-to-basket arial-regular-normal-white-24px">{{ addToBasket4 }}</div>
                </div>
              </div>
              <img
                class="firefly-packaged-far"
                :src="fireflyPackagedFarmProductsNaturals1"
                alt="Firefly Packaged farm products naturals dried herbs 47365 1"
              />
            </div>
          </div>
          <div class="overlap-group3-7">
            <div class="group-7">
              <div class="overlap-group2-8">
                <img
                  class="line-2"
                  src="https://cdn.animaapp.com/projects/675a8a2dad9974c27f56a200/releases/675a8a77084266cadf63f333/img/line-3.svg"
                  alt="Line 3"
                />
                <div class="assorted-tea arefruqaa-normal-black-24px">{{ assortedTea }}</div>
                <div class="oz-per-basket arefruqaa-normal-black-12px">{{ ozPerBasket2 }}</div>
              </div>
              <div class="overlap-group-22">
                <div class="add-to-basket arial-regular-normal-white-24px">{{ addToBasket5 }}</div>
              </div>
            </div>
            <img class="assorted-teas-1" :src="assortedTeas1" alt="assorted-teas 1" />
          </div>
          <div class="free-shipping-2 arefruqaa-normal-black-18px">
            <span class="arefruqaa-normal-black-18px">{{ spanText6 }}</span
            ><span class="arefruqaa-normal-black-15px">{{ spanText7 }}</span>
          </div>
        </div>
        <div class="overlap-group7-4">
          <div class="flex-col-12">
            <div class="dairy-poultry valign-text-bottom arefruqaa-normal-black-35px">
              <span
                ><span class="span-4 arefruqaa-normal-black-35px">{{ spanText8 }}</span
                ><span class="arefruqaa-normal-black-35px">{{ spanText9 }}</span
                ><span class="span-4 arefruqaa-normal-black-35px">{{ spanText10 }}</span>
              </span>
            </div>
            <div class="overlap-group-24">
              <div class="group-7">
                <div class="overlap-group-21">
                  <img
                    class="line-2"
                    src="https://cdn.animaapp.com/projects/675a8a2dad9974c27f56a200/releases/675a8a77084266cadf63f333/img/line-3.svg"
                    alt="Line 2"
                  />
                  <div class="raw-milk-1 arefruqaa-normal-black-24px">{{ rawMilk }}</div>
                  <div class="oz-per-basket arefruqaa-normal-black-12px">{{ ozPerBasket3 }}</div>
                </div>
                <div class="overlap-group-25">
                  <div class="add-to-basket arial-regular-normal-white-24px">{{ addToBasket6 }}</div>
                </div>
              </div>
              <img
                class="firefly-raw-milk-in-3"
                :src="fireflyRawMilkInGlassBottles509322"
                alt="Firefly raw milk in glass bottles 50932 2"
              />
            </div>
          </div>
          <div class="overlap-group4-4">
            <div class="group-7">
              <div class="overlap-group2-9">
                <img
                  class="line-2"
                  src="https://cdn.animaapp.com/projects/675a8a2dad9974c27f56a200/releases/675a8a77084266cadf63f333/img/line-3.svg"
                  alt="Line 3"
                />
                <div class="eggs-1 arefruqaa-normal-black-24px">{{ eggs }}</div>
                <div class="per-basket arefruqaa-normal-black-12px">{{ perBasket1 }}</div>
              </div>
              <div class="overlap-group-22">
                <div class="add-to-basket arial-regular-normal-white-24px">{{ addToBasket7 }}</div>
              </div>
            </div>
            <img class="rectangle" :src="rectangle491" alt="Rectangle 49" />
          </div>
          <div class="free-shipping-3 arefruqaa-normal-black-15px">{{ freeShipping1 }}</div>
        </div>
        <div class="overlap-group-26">
          <div class="packaged-items valign-text-bottom arefruqaa-normal-black-35px">{{ packagedItems }}</div>
          <div class="flex-row-7">
            <div class="group-76">
              <div class="overlap-group3-8">
                <img
                  class="firefly-packaged-far-1"
                  :src="fireflyPackagedFarmProductsNaturals2"
                  alt="Firefly Packaged farm products naturals fruit rolls 47365 1"
                /><img
                  class="line"
                  src="https://cdn.animaapp.com/projects/675a8a2dad9974c27f56a200/releases/675a8a77084266cadf63f333/img/line-3.svg"
                  alt="Line 4"
                />
                <div class="fruit-cake arefruqaa-normal-black-24px">{{ fruitCake }}</div>
                <div class="per-basket-1 arefruqaa-normal-black-12px">{{ perBasket2 }}</div>
              </div>
              <div class="overlap-group-22">
                <div class="add-to-basket-1 arial-regular-normal-white-24px">{{ addToBasket8 }}</div>
              </div>
            </div>
            <div class="overlap-group-27">
              <div class="group-7">
                <div class="overlap-group-21">
                  <img
                    class="line-2"
                    src="https://cdn.animaapp.com/projects/675a8a2dad9974c27f56a200/releases/675a8a77084266cadf63f333/img/line-3.svg"
                    alt="Line 3"
                  />
                  <div class="color arefruqaa-normal-black-24px">{{ color }}</div>
                  <div class="lb-per-basket arefruqaa-normal-black-12px">{{ lbPerBasket4 }}</div>
                </div>
                <div class="overlap-group-22">
                  <div class="add-to-basket arial-regular-normal-white-24px">{{ addToBasket9 }}</div>
                </div>
              </div>
              <img class="rectangle" :src="rectangle492" alt="Rectangle 49" />
            </div>
            <div class="flex-col-9">
              <div class="overlap-group-27">
                <div class="group-7">
                  <div class="overlap-group1-8">
                    <img
                      class="line-3"
                      src="https://cdn.animaapp.com/projects/675a8a2dad9974c27f56a200/releases/675a8a77084266cadf63f333/img/line-3.svg"
                      alt="Line 3"
                    />
                    <div class="pulses arefruqaa-normal-black-24px">{{ pulses }}</div>
                    <div class="x-per-basket arefruqaa-normal-black-12px">{{ lbPerBasket5 }}</div>
                  </div>
                  <div class="overlap-group-22">
                    <div class="add-to-basket-1 arial-regular-normal-white-24px">{{ addToBasket10 }}</div>
                  </div>
                </div>
                <img class="rectangle" :src="rectangle502" alt="Rectangle 50" />
              </div>
              <div class="free-shipping arefruqaa-normal-black-15px">{{ freeShipping2 }}</div>
            </div>
          </div>
        </div>
        <div class="overlap-group-26">
          <div class="others valign-text-bottom arefruqaa-normal-black-35px">{{ others }}</div>
          <div class="flex-row-7">
            <div class="group-76">
              <div class="overlap-group-23">
                <img
                  class="firefly-packaged-far-2"
                  :src="fireflyPackagedFarmProductsNaturals3"
                  alt="Firefly Packaged farm products naturals fruit rolls 47365 1"
                /><img
                  class="line"
                  src="https://cdn.animaapp.com/projects/675a8a2dad9974c27f56a200/releases/675a8a77084266cadf63f333/img/line-3.svg"
                  alt="Line 4"
                />
                <div class="honey-1 arefruqaa-normal-black-24px">{{ honey }}</div>
                <div class="oz-per-basket-1 arefruqaa-normal-black-12px">{{ ozPerBasket4 }}</div>
              </div>
              <div class="overlap-group-22">
                <div class="add-to-basket-1 arial-regular-normal-white-24px">{{ addToBasket11 }}</div>
              </div>
            </div>
            <div class="overlap-group-27">
              <div class="group-7">
                <div class="overlap-group2-8">
                  <img
                    class="line-2"
                    src="https://cdn.animaapp.com/projects/675a8a2dad9974c27f56a200/releases/675a8a77084266cadf63f333/img/line-3.svg"
                    alt="Line 3"
                  />
                  <div class="virgin-olive-oil arefruqaa-normal-black-24px">{{ virginOliveOil }}</div>
                  <div class="oz-per-basket arefruqaa-normal-black-12px">{{ ozPerBasket5 }}</div>
                </div>
                <div class="overlap-group-22">
                  <div class="add-to-basket arial-regular-normal-white-24px">{{ addToBasket12 }}</div>
                </div>
              </div>
              <img class="rectangle-49-1" :src="rectangle493" alt="Rectangle 49" />
            </div>
            <div class="flex-col-9">
              <div class="overlap-group-27">
                <div class="group-7">
                  <div class="overlap-group1-8">
                    <img
                      class="line-3"
                      src="https://cdn.animaapp.com/projects/675a8a2dad9974c27f56a200/releases/675a8a77084266cadf63f333/img/line-3.svg"
                      alt="Line 3"
                    />
                    <div class="mineral-water arefruqaa-normal-black-24px">{{ mineralWater }}</div>
                    <div class="x-per-basket arefruqaa-normal-black-12px">{{ ozPerBasket6 }}</div>
                  </div>
                  <div class="overlap-group-22">
                    <div class="add-to-basket-1 arial-regular-normal-white-24px">{{ addToBasket13 }}</div>
                  </div>
                </div>
                <img class="rectangle-50-1" :src="rectangle503" alt="Rectangle 50" />
              </div>
              <div class="free-shipping arefruqaa-normal-black-15px">{{ freeShipping3 }}</div>
            </div>
          </div>
        </div>
        <component2 :orderHere="component2Props.orderHere" :className="component2Props.className" />
      </div>
      <div class="overlap-group16" :style="{ 'background-image': 'url(' + overlapGroup16 + ')' }">
        <p class="address-5 arial-regular-normal-dove-gray-25px">{{ address }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Home from "./Home";
import Component2 from "./Component2";
export default {
  name: "Desktop4",
  components: {
    Home,
    Component2,
  },
  props: [
    "rectangle501",
    "logo21",
    "title",
    "iconShoppingBasket",
    "iconUserCircle",
    "shopFarmFreshProducts",
    "searchProducts",
    "logoLeafNew12",
    "logoLeafNew11",
    "group65",
    "group66",
    "group681",
    "group67",
    "slider",
    "group682",
    "spanText1",
    "spanText2",
    "spanText3",
    "fireflyFarmFreshFruits318771",
    "fruits",
    "lbPerBasket1",
    "addToBasket1",
    "fireflyFarmFreshVegetables940541",
    "vegetables",
    "lbPerBasket2",
    "addToBasket2",
    "redChillies1",
    "redChilies",
    "lbPerBasket3",
    "addToBasket3",
    "spanText4",
    "spanText5",
    "herbs",
    "driedHerbs",
    "ozPerBasket1",
    "addToBasket4",
    "fireflyPackagedFarmProductsNaturals1",
    "assortedTea",
    "ozPerBasket2",
    "addToBasket5",
    "assortedTeas1",
    "spanText6",
    "spanText7",
    "spanText8",
    "spanText9",
    "spanText10",
    "rawMilk",
    "ozPerBasket3",
    "addToBasket6",
    "fireflyRawMilkInGlassBottles509322",
    "eggs",
    "perBasket1",
    "addToBasket7",
    "rectangle491",
    "freeShipping1",
    "packagedItems",
    "fireflyPackagedFarmProductsNaturals2",
    "fruitCake",
    "perBasket2",
    "addToBasket8",
    "color",
    "lbPerBasket4",
    "addToBasket9",
    "rectangle492",
    "pulses",
    "lbPerBasket5",
    "addToBasket10",
    "rectangle502",
    "freeShipping2",
    "others",
    "fireflyPackagedFarmProductsNaturals3",
    "honey",
    "ozPerBasket4",
    "addToBasket11",
    "virginOliveOil",
    "ozPerBasket5",
    "addToBasket12",
    "rectangle493",
    "mineralWater",
    "ozPerBasket6",
    "addToBasket13",
    "rectangle503",
    "freeShipping3",
    "overlapGroup16",
    "address",
    "home1Props",
    "home2Props",
    "home3Props",
    "home4Props",
    "component2Props",
  ],
};
</script>

<style>
.desktop-4 {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  height: 4386px;
  overflow: hidden;
  width: 1440px;
}

.rectangle-50 {
  height: 245px;
  margin-left: -20139px;
  margin-top: -5102px;
  width: 236px;
  z-index: 2;
}

.header-5 {
  align-items: flex-start;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  height: 92px;
  justify-content: flex-start;
  left: 0;
  min-width: 1440px;
  position: fixed;
  top: 0;
  width: auto;
  z-index: 5;
}

.overlap-group13 {
  height: 92px;
  position: relative;
  width: 1440px;
}

.rectangle-3-5 {
  background-color: var(--white);
  height: 88px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1440px;
}

.group-2-4 {
  align-items: center;
  display: flex;
  height: 92px;
  left: 0;
  min-width: 1437px;
  position: absolute;
  top: 0;
}

.logo2-1-5 {
  height: 92px;
  object-fit: cover;
  width: 126px;
}

.title-4 {
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
  width: 379px;
}

.frame-1-4 {
  align-items: center;
  display: inline-flex;
  gap: 25px;
  height: 39px;
  margin-bottom: 2.88px;
  margin-left: 344px;
  padding: 0px 25px;
  position: relative;
}

.icon-shopping-basket-5 {
  height: 29.09px;
  position: relative;
  width: 37.75px;
}

.icon-user-circle-5 {
  height: 29.09px;
  position: relative;
  width: 32.02px;
}

.group-61-1 {
  align-items: flex-start;
  display: flex;
  height: 144px;
  left: 0;
  min-width: 1442px;
  position: fixed;
  top: 88px;
  z-index: 4;
}

.overlap-group12 {
  background-color: var(--white);
  height: 144px;
  position: relative;
  width: 1440px;
}

.rectangle-26 {
  background: linear-gradient(180deg, rgba(222.26, 218.56, 218.56, 0) 34.45%, rgb(182.86, 255, 176.59) 100%);
  height: 65px;
  left: 0;
  position: absolute;
  top: 4px;
  width: 1440px;
}

.shop-farm-fresh-products {
  left: 31px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 9px;
  width: 361px;
}

.group-79 {
  align-items: flex-start;
  display: flex;
  height: 48px;
  left: 31px;
  min-width: 1373px;
  position: fixed;
  top: 171px;
  z-index: 6;
}

.group-container-3 {
  height: 48px;
  position: relative;
  width: 1375px;
}

.group-70 {
  align-items: flex-end;
  display: flex;
  height: 48px;
  left: 0;
  min-width: 1375px;
  position: absolute;
  top: 0;
}

.overlap-group1-9 {
  align-items: flex-start;
  align-self: flex-start;
  background-color: var(--white);
  border: 1px solid;
  border-color: #0000004c;
  border-radius: 15px 0px 0px 15px;
  display: flex;
  height: 45px;
  min-width: 370px;
  padding: 2px 17px;
}

.search-products {
  color: var(--stack);
  font-family: var(--font-family-aref_ruqaa);
  font-size: var(--font-size-s);
  font-weight: 400;
  height: 30px;
  letter-spacing: 0;
  line-height: normal;
  width: 174px;
}

.overlap-group-28 {
  align-self: flex-start;
  height: 48px;
  margin-left: 27px;
  position: relative;
  width: 44px;
}

.rectangle-42 {
  background-color: var(--japanese-laurel);
  border-radius: 0px 15px 15px 0px;
  height: 45px;
  left: 0;
  position: absolute;
  top: 0;
  width: 44px;
}

.logo-leaf-new-1-2 {
  height: 35px;
  left: 7px;
  object-fit: cover;
  position: absolute;
  top: 6px;
  width: 20px;
}

.logo-leaf-new-1-1 {
  height: 35px;
  left: 9px;
  object-fit: cover;
  position: absolute;
  top: 13px;
  width: 33px;
}

.group-65 {
  cursor: pointer;
  height: 40px;
  margin-bottom: 1.89px;
  margin-left: 39px;
  width: 224px;
}

.group-66 {
  cursor: pointer;
  height: 40px;
  margin-bottom: 1.89px;
  margin-left: 14px;
  width: 87px;
}

.group-68 {
  cursor: pointer;
  height: 40px;
  margin-bottom: 1.89px;
  margin-left: 14px;
  width: 168px;
}

.group-67 {
  cursor: pointer;
  height: 40px;
  margin-bottom: 1.89px;
  margin-left: 14px;
  width: 191px;
}

.slider {
  align-self: center;
  height: 40px;
  margin-bottom: 3.89px;
  margin-left: 141px;
  width: 40px;
}

.group-68-1 {
  cursor: pointer;
  height: 40px;
  left: 1206px;
  position: absolute;
  top: 6px;
  width: 109px;
}

.overlap-group15 {
  align-items: center;
  background-color: #f4f6ffdb;
  display: flex;
  flex-direction: column;
  gap: 70px;
  margin-top: 5089px;
  min-height: 3881px;
  padding: 62px 31px;
  position: relative;
  width: 1440px;
  z-index: 1;
}

.overlap-group10 {
  align-items: flex-end;
  align-self: flex-start;
  background-color: var(--white-3);
  border: 1px solid;
  border-color: var(--black-4);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 26px;
  min-height: 664px;
  padding: 7px 12px;
  width: 1376px;
}

.flex-row-8 {
  align-items: flex-end;
  align-self: center;
  display: flex;
  height: 584px;
  margin-right: 21px;
  margin-top: 22px;
  min-width: 1167px;
}

.flex-col-10 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 584px;
  width: 294px;
}

.fruits-vegetables {
  height: 55px;
  letter-spacing: 0;
  line-height: normal;
  min-width: 294px;
}

.span-4 {
  text-decoration: underline;
}

.overlap-group3-6 {
  align-items: center;
  background-color: var(--white);
  border: 1px solid;
  border-color: var(--black-2);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  margin-left: 3px;
  margin-top: 47px;
  min-height: 378px;
  padding: 12px 11px;
  width: 291px;
}

.firefly-farm-fresh-fruits-31877-1,
.firefly-farm-fresh-vegetables-94054-1,
.red-chillies-1,
.firefly-packaged-far-1,
.firefly-packaged-far-2 {
  height: 255px;
  margin-right: 1px;
  margin-top: 17px;
  object-fit: cover;
  width: 236px;
}

.line {
  height: 1px;
  margin-right: 1px;
  margin-top: 14px;
  object-fit: cover;
  width: 236px;
}

.fruits {
  letter-spacing: 0;
  line-height: normal;
  margin-right: 3px;
  margin-top: 10px;
  min-height: 38px;
  min-width: 62px;
  text-align: center;
}

.lb-per-basket {
  align-self: flex-end;
  letter-spacing: 0;
  line-height: normal;
  min-height: 19px;
  min-width: 80px;
  text-align: center;
}

.overlap-group4-3 {
  align-items: center;
  background-color: var(--japanese-laurel);
  border-radius: 15px;
  display: flex;
  height: 54px;
  margin-left: 6px;
  margin-top: 50px;
  min-width: 176px;
  padding: 0 10px;
}

.add-to-basket {
  letter-spacing: 0;
  line-height: normal;
  min-height: 28px;
  min-width: 155px;
  text-align: center;
  white-space: nowrap;
}

.group-75 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-left: 144px;
  min-height: 482px;
  width: 295px;
}

.overlap-group-21 {
  align-items: center;
  background-color: var(--white);
  border: 1px solid;
  border-color: var(--black-2);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  margin-right: 4px;
  min-height: 378px;
  padding: 12px 9px;
  width: 291px;
}

.vegetables {
  letter-spacing: 0;
  line-height: normal;
  margin-right: 1px;
  margin-top: 10px;
  min-height: 38px;
  min-width: 114px;
  text-align: center;
}

.overlap-group-22 {
  align-items: center;
  background-color: var(--japanese-laurel);
  border-radius: 15px;
  display: flex;
  height: 54px;
  margin-right: 3px;
  min-width: 176px;
  padding: 0 10px;
}

.group-76-1 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-left: 139px;
  min-height: 482px;
  width: 295px;
}

.overlap-group-23 {
  align-items: center;
  background-color: var(--white);
  border: 1px solid;
  border-color: var(--black-2);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  margin-right: 4px;
  min-height: 378px;
  padding: 12px 11px;
  width: 291px;
}

.red-chilies {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 8px;
  margin-top: 10px;
  min-height: 38px;
  min-width: 119px;
  text-align: center;
}

.free-shipping-1 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 28px;
  min-width: 108px;
  text-align: center;
}

.overlap-group9-2 {
  align-items: center;
  align-self: flex-start;
  background-color: var(--white-3);
  border: 1px solid;
  border-color: var(--black-4);
  border-radius: 10px;
  display: flex;
  height: 664px;
  justify-content: flex-end;
  min-width: 1376px;
  padding: 8px 12px;
}

.flex-col-11 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 47px;
  margin-bottom: 22px;
  min-height: 584px;
  width: 298px;
}

.herbs {
  height: 55px;
  letter-spacing: 0;
  line-height: normal;
  text-decoration: underline;
}

.overlap-group-24 {
  height: 482px;
  margin-left: 3px;
  position: relative;
  width: 295px;
}

.group-7 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 50px;
  left: 0;
  min-height: 482px;
  position: absolute;
  top: 0;
  width: 295px;
}

.line-2 {
  height: 1px;
  margin-right: 1px;
  margin-top: 286px;
  object-fit: cover;
  width: 236px;
}

.dried-herbs-1 {
  letter-spacing: 0;
  line-height: normal;
  margin-right: 3px;
  margin-top: 10px;
  min-height: 38px;
  min-width: 128px;
  text-align: center;
}

.oz-per-basket {
  align-self: flex-end;
  letter-spacing: 0;
  line-height: normal;
  min-height: 19px;
  min-width: 83px;
  text-align: center;
}

.overlap-group-25 {
  align-items: center;
  background-color: var(--japanese-laurel);
  border-radius: 15px;
  display: flex;
  height: 54px;
  margin-right: 1px;
  min-width: 176px;
  padding: 0 10px;
}

.firefly-packaged-far {
  height: 255px;
  left: 29px;
  object-fit: cover;
  position: absolute;
  top: 30px;
  width: 236px;
}

.overlap-group3-7 {
  height: 482px;
  margin-left: 140px;
  margin-top: 80px;
  position: relative;
  width: 295px;
}

.overlap-group2-8 {
  align-items: center;
  background-color: var(--white);
  border: 1px solid;
  border-color: var(--black-2);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  margin-right: 4px;
  min-height: 378px;
  padding: 12px 7px;
  width: 291px;
}

.assorted-tea {
  letter-spacing: 0;
  line-height: normal;
  margin-right: 1px;
  margin-top: 10px;
  min-height: 38px;
  min-width: 138px;
  text-align: center;
}

.assorted-teas-1 {
  height: 255px;
  left: 28px;
  object-fit: cover;
  position: absolute;
  top: 30px;
  width: 236px;
}

.free-shipping-2 {
  align-self: flex-end;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 429px;
  min-height: 28px;
  min-width: 108px;
  text-align: center;
}

.overlap-group7-4 {
  align-items: flex-end;
  background-color: var(--white-3);
  border: 1px solid;
  border-color: var(--black-4);
  border-radius: 10px;
  display: flex;
  height: 664px;
  justify-content: flex-end;
  min-width: 1376px;
  padding: 13px;
}

.flex-col-12 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 47px;
  margin-bottom: 22px;
  min-height: 584px;
  width: 298px;
}

.dairy-poultry {
  height: 55px;
  letter-spacing: 0;
  line-height: normal;
}

.raw-milk-1 {
  letter-spacing: 0;
  line-height: normal;
  margin-right: 3px;
  margin-top: 10px;
  min-height: 38px;
  min-width: 104px;
  text-align: center;
}

.firefly-raw-milk-in-3 {
  height: 255px;
  left: 27px;
  object-fit: cover;
  position: absolute;
  top: 30px;
  width: 236px;
}

.overlap-group4-4 {
  height: 482px;
  margin-bottom: 38px;
  margin-left: 140px;
  position: relative;
  width: 295px;
}

.overlap-group2-9 {
  align-items: center;
  background-color: var(--white);
  border: 1px solid;
  border-color: var(--black-2);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  margin-right: 4px;
  min-height: 378px;
  padding: 12px 19px;
  width: 291px;
}

.eggs-1 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: 10px;
  min-height: 38px;
  min-width: 47px;
  text-align: center;
}

.per-basket {
  align-self: flex-end;
  letter-spacing: 0;
  line-height: normal;
  min-height: 19px;
  min-width: 60px;
  text-align: center;
}

.rectangle {
  height: 255px;
  left: 28px;
  object-fit: cover;
  position: absolute;
  top: 30px;
  width: 235px;
}

.free-shipping-3 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 430px;
  min-height: 23px;
  min-width: 106px;
  text-align: center;
}

.overlap-group-26 {
  align-items: flex-start;
  background-color: var(--white-3);
  border: 1px solid;
  border-color: var(--black-4);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 48px;
  min-height: 664px;
  padding: 12px;
  width: 1376px;
}

.packaged-items,
.others {
  height: 55px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 81px;
  margin-top: 16px;
  text-decoration: underline;
}

.flex-row-7 {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  gap: 143px;
  height: 521px;
  min-width: 1270px;
}

.group-76 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 50px;
  min-height: 482px;
  width: 295px;
}

.overlap-group3-8 {
  align-items: center;
  background-color: var(--white);
  border: 1px solid;
  border-color: var(--black-2);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  margin-right: 4px;
  min-height: 378px;
  padding: 12px 23px;
  width: 291px;
}

.fruit-cake,
.honey-1 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 8px;
  margin-top: 10px;
  min-height: 38px;
  text-align: center;
  width: 113px;
}

.per-basket-1 {
  align-self: flex-end;
  letter-spacing: 0;
  line-height: normal;
  min-height: 19px;
  text-align: center;
  width: 56px;
}

.add-to-basket-1 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 28px;
  text-align: center;
  white-space: nowrap;
  width: 155px;
}

.overlap-group-27 {
  height: 482px;
  position: relative;
  width: 295px;
}

.color {
  letter-spacing: 0;
  line-height: normal;
  margin-right: 2px;
  margin-top: 10px;
  min-height: 38px;
  min-width: 73px;
  text-align: center;
}

.flex-col-9 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-height: 521px;
  width: 394px;
}

.overlap-group1-8 {
  align-items: flex-end;
  background-color: var(--white);
  border: 1px solid;
  border-color: var(--black-2);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  margin-right: 4px;
  min-height: 378px;
  padding: 12px 13px;
  width: 291px;
}

.line-3 {
  height: 1px;
  margin-right: 15px;
  margin-top: 286px;
  object-fit: cover;
  width: 236px;
}

.pulses {
  align-self: center;
  letter-spacing: 0;
  line-height: normal;
  margin-right: 2px;
  margin-top: 10px;
  min-height: 38px;
  text-align: center;
  width: 75px;
}

.x-per-basket {
  letter-spacing: 0;
  line-height: normal;
  min-height: 19px;
  text-align: center;
  width: 90px;
}

.free-shipping {
  align-self: flex-end;
  letter-spacing: 0;
  line-height: normal;
  min-height: 23px;
  min-width: 106px;
  text-align: center;
}

.oz-per-basket-1 {
  align-self: flex-end;
  letter-spacing: 0;
  line-height: normal;
  min-height: 19px;
  text-align: center;
  width: 84px;
}

.virgin-olive-oil {
  letter-spacing: 0;
  line-height: normal;
  margin-right: 3px;
  margin-top: 10px;
  min-height: 38px;
  min-width: 174px;
  text-align: center;
}

.rectangle-49-1 {
  height: 255px;
  left: 29px;
  position: absolute;
  top: 30px;
  width: 235px;
}

.mineral-water {
  letter-spacing: 0;
  line-height: normal;
  margin-right: 15px;
  margin-top: 10px;
  min-height: 38px;
  text-align: center;
  width: 227px;
}

.rectangle-50-1 {
  height: 255px;
  left: 28px;
  position: absolute;
  top: 30px;
  width: 235px;
}

.overlap-group16 {
  align-items: flex-start;
  background-size: 100% 100%;
  display: flex;
  height: 273px;
  justify-content: flex-end;
  min-width: 1440px;
  padding: 99px 67px;
  z-index: 3;
}

.address-5 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 58px;
  text-align: center;
  width: 329px;
}
</style>
