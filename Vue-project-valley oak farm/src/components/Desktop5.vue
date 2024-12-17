<template>
  <div class="container-center-horizontal">
    <div class="desktop-5 screen">
      <x-header
        :className="xHeaderProps.className"
        :home1Props="xHeaderProps.home1Props"
        :home2Props="xHeaderProps.home2Props"
        :home3Props="xHeaderProps.home3Props"
        :home4Props="xHeaderProps.home4Props"
      />
      <div class="group-84">
        <div class="overlap-group5-3">
          <div class="your-basket arefruqaa-normal-black-30px">{{ yourBasket }}</div>
          <div class="back-1 arefruqaaink-normal-black-25px">{{ back }}</div>
        </div>
      </div>
      <div class="overlap-group7-3">
        <div class="overlap-group1-7">
          <div class="overlap-group4-2">
            <p class="items-added-to-your-basket arefruqaa-normal-black-30px">{{ itemsAddedToYourBasket }}</p>
            <div class="overlap-group3-5">
              <img
                class="line-5"
                src="https://cdn.animaapp.com/projects/675a8a2dad9974c27f56a200/releases/675a8a77084266cadf63f333/img/line-5.svg"
                alt="Line 5"
              />
              <div class="surname-1">{{ surname }}</div>
            </div>
          </div>
          <div class="flex-row-4">
            <img class="rectangle-49" :src="rectangle49" alt="Rectangle 49" />
            <div class="flex-col-6">
              <div class="flex-row-5">
                <div class="flex-col-7">
                  <div class="raw-eggs">{{ rawEggs }}</div>
                  <p class="richer-taste-from-fr arefruqaa-normal-black-16px">{{ richerTasteFromFr }}</p>
                </div>
                <div class="price arefruqaa-normal-black-16px">{{ price }}</div>
              </div>
              <div class="flex-row-6 arefruqaa-normal-black-16px">
                <div class="overlap-group2-7">
                  <div class="rectangle-53"></div>
                  <div class="qty">{{ qty }}</div>
                  <div class="number">{{ number }}</div>
                  <img
                    class="vector-5"
                    src="https://cdn.animaapp.com/projects/675a8a2dad9974c27f56a200/releases/675a8a77084266cadf63f333/img/vector-7.svg"
                    alt="Vector"
                  />
                </div>
                <img
                  class="line-6"
                  src="https://cdn.animaapp.com/projects/675a8a2dad9974c27f56a200/releases/675a8a77084266cadf63f333/img/line-6.svg"
                  alt="Line 6"
                />
                <div class="delete">{{ xdelete }}</div>
                <img
                  class="line-7"
                  src="https://cdn.animaapp.com/projects/675a8a2dad9974c27f56a200/releases/675a8a77084266cadf63f333/img/line-7.svg"
                  alt="Line 7"
                />
                <div class="save-for-later">{{ saveForLater }}</div>
              </div>
            </div>
          </div>
          <div class="flex-col-8">
            <img
              class="line-8"
              src="https://cdn.animaapp.com/projects/675a8a2dad9974c27f56a200/releases/675a8a77084266cadf63f333/img/line-8.svg"
              alt="Line 8"
            />
            <div class="sub-total-600">{{ subTotal600 }}</div>
            <component2 :orderHere="component2Props.orderHere" :className="component2Props.className" />
          </div>
        </div>
      </div>
      <div class="overlap-group8-2" :style="{ 'background-image': 'url(' + overlapGroup8 + ')' }">
        <p class="address-4 arial-regular-normal-dove-gray-25px">{{ address }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import xHeader from "./xHeader";
import Component2 from "./Component2";
export default {
  name: "Desktop5",
  components: {
    xHeader,
    Component2,
  },
  props: [
    "yourBasket",
    "back",
    "itemsAddedToYourBasket",
    "surname",
    "rectangle49",
    "rawEggs",
    "richerTasteFromFr",
    "price",
    "qty",
    "number",
    "xdelete",
    "saveForLater",
    "subTotal600",
    "overlapGroup8",
    "address",
    "xHeaderProps",
    "component2Props",
  ],
};
</script>

<style>
.desktop-5 {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  height: 1139px;
  overflow: hidden;
  position: relative;
  width: 1440px;
}

.group-84 {
  align-items: flex-start;
  display: flex;
  height: 76px;
  left: 0;
  min-width: 1444px;
  position: fixed;
  top: 92px;
  z-index: 3;
}

.overlap-group5-3 {
  align-items: flex-start;
  background: linear-gradient(180deg, rgba(222.26, 218.56, 218.56, 0) 34.45%, rgb(182.86, 255, 176.59) 100%);
  display: flex;
  gap: 921px;
  height: 76px;
  min-width: 1440px;
  padding: 6.3px 31px;
}

.your-basket {
  letter-spacing: 0;
  line-height: normal;
  min-height: 50px;
  width: 361px;
}

.back-1 {
  align-self: center;
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 5.28px;
  min-height: 41px;
  width: 79px;
}

.overlap-group7-3 {
  align-items: flex-end;
  background-color: var(--zircon);
  display: flex;
  height: 698px;
  margin-top: 168px;
  min-width: 1440px;
  padding: 21px 66px;
  z-index: 1;
}

.overlap-group1-7 {
  align-items: flex-end;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  min-height: 653px;
  padding: 0 29px;
  width: 1009px;
}

.overlap-group4-2 {
  height: 58px;
  position: relative;
  width: 946px;
}

.items-added-to-your-basket {
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
  width: 375px;
}

.overlap-group3-5 {
  height: 31px;
  left: 8px;
  position: absolute;
  top: 26px;
  width: 938px;
}

.line-5 {
  height: 1px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 30px;
  width: 938px;
}

.surname-1 {
  color: var(--black);
  font-family: var(--font-family-aref_ruqaa);
  font-size: 20px;
  font-weight: 400;
  left: 894px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
  width: 44px;
}

.flex-row-4 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  gap: 23px;
  margin-left: 1px;
  margin-top: 17px;
  min-width: 926px;
}

.rectangle-49 {
  height: 259px;
  margin-top: 0;
  object-fit: cover;
  width: 235px;
}

.flex-col-6 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 113px;
  min-height: 259px;
  width: 668px;
}

.flex-row-5 {
  align-items: flex-start;
  display: flex;
  gap: 163px;
  height: 105px;
  min-width: 668px;
}

.flex-col-7 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-height: 105px;
  width: 469px;
}

.raw-eggs {
  color: var(--black);
  font-family: var(--font-family-aref_ruqaa);
  font-size: 28px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  min-height: 45px;
  width: 117px;
}

.richer-taste-from-fr {
  letter-spacing: 0;
  line-height: normal;
  min-height: 51px;
  width: 469px;
}

.price {
  letter-spacing: 0;
  line-height: normal;
  margin-top: 18.25px;
  min-height: 25px;
  width: 36px;
}

.flex-row-6 {
  align-items: center;
  display: flex;
  min-width: 286px;
}

.overlap-group2-7 {
  height: 31px;
  margin-bottom: 3.14px;
  position: relative;
  width: 88px;
}

.rectangle-53 {
  background-color: var(--white-2);
  border: 1px solid;
  border-color: var(--quick-silver);
  border-radius: 15px;
  height: 29px;
  left: 0;
  position: absolute;
  top: 2px;
  width: 88px;
}

.qty {
  left: 9px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
  width: 31px;
}

.number {
  left: 46px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 2px;
  width: 8px;
}

.vector-5 {
  height: 9px;
  left: 67px;
  position: absolute;
  top: 13px;
  width: 14px;
}

.line-6 {
  align-self: flex-end;
  height: 41px;
  margin-left: 18px;
  object-fit: cover;
  width: 1px;
}

.delete {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 5.17px;
  margin-left: 12px;
  min-height: 25px;
  width: 45px;
}

.line-7 {
  align-self: flex-start;
  height: 41px;
  margin-left: 12px;
  object-fit: cover;
  width: 1px;
}

.save-for-later {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 5.17px;
  margin-left: 12px;
  min-height: 25px;
  width: 97px;
}

.flex-col-8 {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  margin-top: 22px;
  min-height: 135px;
  position: relative;
  width: 938px;
}

.line-8 {
  height: 1px;
  object-fit: cover;
  width: 938px;
}

.sub-total-600 {
  color: var(--black);
  font-family: var(--font-family-aref_ruqaa);
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  margin-right: 2px;
  margin-top: 4px;
  min-height: 25px;
  width: 123px;
}

.overlap-group8-2 {
  align-items: flex-start;
  background-size: 100% 100%;
  display: flex;
  height: 273px;
  justify-content: flex-end;
  min-width: 1440px;
  padding: 99px 71px;
  z-index: 2;
}

.address-4 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 58px;
  text-align: center;
  width: 325px;
}
</style>
