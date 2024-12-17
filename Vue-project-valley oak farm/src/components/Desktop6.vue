<template>
  <div class="container-center-horizontal">
    <div class="desktop-6 screen">
      <x-header
        :className="xHeaderProps.className"
        :home1Props="xHeaderProps.home1Props"
        :home2Props="xHeaderProps.home2Props"
        :home3Props="xHeaderProps.home3Props"
        :home4Props="xHeaderProps.home4Props"
      />
      <div class="group-86">
        <div class="overlap-group-20">
          <p class="check-out-1-item arefruqaa-normal-black-30px">
            <span class="arefruqaa-normal-black-30px">{{ spanText1 }}</span
            ><span class="span1-1">{{ spanText2 }}</span
            ><span class="arefruqaa-normal-black-30px">{{ spanText3 }}</span>
          </p>
          <div class="back arefruqaaink-normal-black-25px">{{ back }}</div>
        </div>
      </div>
      <div class="overlap-group6-4 arefruqaa-normal-black-25px">
        <img
          class="line-9"
          src="https://cdn.animaapp.com/projects/675a8a2dad9974c27f56a200/releases/675a8a77084266cadf63f333/img/line-9.svg"
          alt="Line 9"
        />
        <div class="flex-row-2">
          <div class="shipping-address arefruqaa-normal-black-30px">{{ shippingAddress }}</div>
          <div class="overlap-group2-6">
            <div class="address-2 arefruqaa-normal-storm-dust-25px">{{ address1 }}</div>
          </div>
        </div>
        <div class="overlap-group-19">
          <div class="city arefruqaa-normal-storm-dust-25px">{{ city }}</div>
        </div>
        <div class="overlap-group-19">
          <div class="zip-code arefruqaa-normal-storm-dust-25px">{{ zipCode }}</div>
        </div>
        <div class="overlap-group-19">
          <div class="phone-number-2 arefruqaa-normal-storm-dust-25px">{{ phoneNumber }}</div>
        </div>
        <div class="group-93">
          <img
            class="line-1-1"
            src="https://cdn.animaapp.com/projects/675a8a2dad9974c27f56a200/releases/675a8a77084266cadf63f333/img/line-12.svg"
            alt="Line 11"
          />
          <div class="or arial-regular-normal-black-18px">
            <span class="arial-regular-normal-black-18px">{{ spanText4 }}</span
            ><span class="arial-regular-normal-black-18px">{{ spanText5 }}</span>
          </div>
          <img
            class="line-1-1"
            src="https://cdn.animaapp.com/projects/675a8a2dad9974c27f56a200/releases/675a8a77084266cadf63f333/img/line-12.svg"
            alt="Line 12"
          />
        </div>
        <div class="flex-row-3">
          <p class="pick-your-order-at-location arefruqaa-normal-black-30px">{{ pickYourOrderAtLocation }}</p>
          <div class="group-92">
            <img
              class="vector-3"
              src="https://cdn.animaapp.com/projects/675a8a2dad9974c27f56a200/releases/675a8a77084266cadf63f333/img/vector-6.svg"
              alt="Vector"
            />
            <div class="overlap-group1-6">
              <div class="select-time-slot-availablity arefruqaa-normal-storm-dust-25px">
                {{ selectTimeSlotAvailablity }}
              </div>
              <img
                class="vector-4"
                src="https://cdn.animaapp.com/projects/675a8a2dad9974c27f56a200/releases/675a8a77084266cadf63f333/img/vector-5.svg"
                alt="Vector"
              />
            </div>
          </div>
        </div>
        <p class="farm-address-425-ka">{{ farmAddress425Ka }}</p>
        <div class="maps-link-httpsm">{{ mapsLinkHttpsM }}</div>
        <img
          class="line-10"
          src="https://cdn.animaapp.com/projects/675a8a2dad9974c27f56a200/releases/675a8a77084266cadf63f333/img/line-10.svg"
          alt="Line 10"
        />
        <component2 :orderHere="component2Props.orderHere" :className="component2Props.className" />
      </div>
      <div class="overlap-group5-2" :style="{ 'background-image': 'url(' + overlapGroup5 + ')' }">
        <p class="address-3 arial-regular-normal-dove-gray-25px">{{ address2 }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import xHeader from "./xHeader";
import Component2 from "./Component2";
export default {
  name: "Desktop6",
  components: {
    xHeader,
    Component2,
  },
  props: [
    "spanText1",
    "spanText2",
    "spanText3",
    "back",
    "shippingAddress",
    "address1",
    "city",
    "zipCode",
    "phoneNumber",
    "spanText4",
    "spanText5",
    "pickYourOrderAtLocation",
    "selectTimeSlotAvailablity",
    "farmAddress425Ka",
    "mapsLinkHttpsM",
    "overlapGroup5",
    "address2",
    "xHeaderProps",
    "component2Props",
  ],
};
</script>

<style>
.desktop-6 {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  height: 1235px;
  overflow: hidden;
  position: relative;
  width: 1440px;
}

.group-86 {
  align-items: flex-start;
  display: flex;
  margin-top: 96px;
  min-width: 1444px;
  z-index: 1;
}

.overlap-group-20 {
  align-items: flex-start;
  background: linear-gradient(180deg, rgba(222.26, 218.56, 218.56, 0) 34.45%, rgb(182.86, 255, 176.59) 100%);
  display: flex;
  gap: 921px;
  height: 72px;
  min-width: 1440px;
  padding: 6px 31px;
}

.check-out-1-item {
  letter-spacing: 0;
  line-height: normal;
  min-height: 47px;
  width: 361px;
}

.span1-1 {
  color: var(--black);
  font-family: var(--font-family-aref_ruqaa);
  font-size: var(--font-size-l);
  font-weight: 700;
}

.back {
  align-self: center;
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 5px;
  min-height: 39px;
  min-width: 79px;
}

.overlap-group6-4 {
  align-items: flex-start;
  background-color: var(--zircon);
  display: flex;
  flex-direction: column;
  min-height: 794px;
  padding: 40.5px 18px;
  position: relative;
  width: 1440px;
  z-index: 2;
}

.line-9 {
  height: 1px;
  object-fit: cover;
  width: 900px;
}

.flex-row-2 {
  align-items: flex-start;
  display: flex;
  gap: 38px;
  height: 52px;
  margin-left: 13px;
  margin-top: 19px;
  min-width: 710px;
}

.shipping-address {
  letter-spacing: 0;
  line-height: normal;
  min-height: 47px;
  min-width: 234px;
}

.overlap-group2-6 {
  align-items: flex-start;
  align-self: flex-end;
  background-color: var(--white);
  border: 1px solid;
  border-color: var(--quick-silver);
  border-radius: 10px;
  display: flex;
  height: 47px;
  min-width: 438px;
  padding: 0 13px;
}

.address-2,
.city,
.zip-code,
.phone-number-2 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 39px;
}

.overlap-group-19 {
  align-items: flex-start;
  align-self: center;
  background-color: var(--white);
  border: 1px solid;
  border-color: var(--quick-silver);
  border-radius: 10px;
  display: flex;
  height: 47px;
  margin-right: 396px;
  margin-top: 24px;
  min-width: 438px;
  padding: 0 13px;
}

.group-93 {
  align-items: center;
  align-self: center;
  display: flex;
  gap: 10px;
  height: 21px;
  margin-right: 521px;
  margin-top: 29px;
  min-width: 129px;
}

.line-1-1 {
  height: 1px;
  object-fit: cover;
  width: 45px;
}

.or {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 17px;
  text-align: center;
  white-space: nowrap;
}

.flex-row-3 {
  align-items: flex-start;
  display: flex;
  gap: 24px;
  height: 54px;
  margin-left: 19px;
  margin-top: 20px;
  min-width: 906px;
}

.pick-your-order-at-location {
  letter-spacing: 0;
  line-height: normal;
  min-height: 47px;
  min-width: 382px;
}

.group-92 {
  align-items: center;
  align-self: flex-end;
  display: flex;
  gap: 27px;
  min-width: 500px;
}

.vector-3 {
  height: 34px;
  margin-bottom: 1px;
  margin-left: -1px;
  width: 34px;
}

.overlap-group1-6 {
  align-items: flex-start;
  background-color: var(--white);
  border: 1px solid;
  border-color: var(--quick-silver);
  border-radius: 10px;
  display: flex;
  gap: 75px;
  height: 47px;
  min-width: 438px;
  padding: 0 13px;
}

.select-time-slot-availablity {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 39px;
  min-width: 302px;
}

.vector-4 {
  align-self: center;
  height: 15px;
  margin-bottom: 0;
  width: 24px;
}

.farm-address-425-ka {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 179px;
  margin-top: 27px;
  min-height: 39px;
  min-width: 606px;
  text-align: center;
}

.maps-link-httpsm {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 153px;
  margin-top: 31px;
  min-height: 39px;
  min-width: 680px;
  text-align: center;
}

.line-10 {
  height: 1px;
  margin-top: 32px;
  object-fit: cover;
  width: 900px;
}

.overlap-group5-2 {
  align-items: flex-start;
  background-size: 100% 100%;
  display: flex;
  height: 273px;
  justify-content: flex-end;
  min-width: 1440px;
  padding: 98px 67px;
  z-index: 3;
}

.address-3 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 58px;
  text-align: center;
  width: 329px;
}
</style>
