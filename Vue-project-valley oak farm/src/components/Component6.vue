<template>
  <div class="component-6">
    <div class="overlap-group-18" :style="{ 'background-image': 'url(' + overlapGroup + ')' }">
      <div class="rectangle-34"></div>
      <p class="this-property-was-pu valign-text-middle arefruqaaink-bold-white-25px">{{ thisPropertyWasPu }}</p>
      <p class="from-neglected-land-to-new-beginnings valign-text-middle">
        <span
          ><span class="arefruqaaink-bold-yellow-35px">{{ spanText1 }}</span
          ><span class="span1">{{ spanText2 }}</span
          ><span class="arefruqaaink-bold-yellow-35px">{{ spanText3 }}</span>
        </span>
      </p>
    </div>
    <div class="overlap-group1-5" :style="{ 'background-image': 'url(' + overlapGroup1 + ')' }">
      <div class="rectangle-3-4"></div>
      <p class="the-barn-in-this-sta valign-text-middle arefruqaaink-bold-white-25px">{{ theBarnInThisSta }}</p>
    </div>
    <div class="overlap-group-17" :style="{ 'background-image': 'url(' + overlapGroup3 + ')' }">
      <div class="rectangle-3-4"></div>
      <p class="soil-tests-revealed valign-text-middle arefruqaaink-bold-white-25px">{{ soilTestsRevealed }}</p>
    </div>
    <div class="overlap-group-17" :style="{ 'background-image': 'url(' + overlapGroup4 + ')' }">
      <div class="rectangle-34-1"></div>
      <p class="over-the-years-our valign-text-middle arefruqaaink-bold-white-25px">{{ overTheYearsOur }}</p>
    </div>
    <div class="overlap-group2-5" :style="{ 'background-image': 'url(' + overlapGroup2 + ')' }">
      <div class="rectangle-34-2"></div>
      <p class="traded-sfs-rush-for valign-text-middle arefruqaaink-bold-white-25px">{{ tradedSfSRushFor }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Component6",
  props: [
    "overlapGroup",
    "thisPropertyWasPu",
    "spanText1",
    "spanText2",
    "spanText3",
    "overlapGroup1",
    "theBarnInThisSta",
    "overlapGroup3",
    "soilTestsRevealed",
    "overlapGroup4",
    "overTheYearsOur",
    "overlapGroup2",
    "tradedSfSRushFor",
  ],
};
</script>

<style>
.component-6 {
  align-items: flex-start;
  border-radius: 15px;
  display: flex;
  height: 737px;
  left: 3px;
  overflow: hidden;
  position: absolute;
  top: 106px;
  width: 1343px;
}

.overlap-group-18 {
  background-position: 50% 50%;
  background-size: cover;
  height: 737px;
  position: relative;
  width: 1343px;
}

.rectangle-34 {
  background-color: var(--quick-silver);
  border-radius: 15px;
  height: 397px;
  left: 311px;
  position: absolute;
  top: 284px;
  width: 940px;
}

.this-property-was-pu {
  height: 195px;
  left: 351px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 399px;
  width: 846px;
}

.from-neglected-land-to-new-beginnings {
  color: transparent;
  font-family: var(--font-family-aref_ruqaa_ink);
  font-size: var(--font-size-xl);
  font-weight: 700;
  height: 55px;
  left: 414px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 298px;
  width: 732px;
}

.span1 {
  color: var(--white);
}

.overlap-group1-5 {
  background-position: 50% 50%;
  background-size: cover;
  height: 737px;
  margin-left: 346px;
  position: relative;
  width: 1343px;
}

.rectangle-3-4 {
  background-color: var(--quick-silver);
  border-radius: 15px;
  height: 397px;
  left: 321px;
  position: absolute;
  top: 288px;
  width: 941px;
}

.the-barn-in-this-sta {
  height: 355px;
  left: 356px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 306px;
  width: 874px;
}

.overlap-group-17 {
  background-position: 50% 50%;
  background-size: cover;
  height: 737px;
  margin-left: 436px;
  position: relative;
  width: 1343px;
}

.soil-tests-revealed {
  height: 195px;
  left: 377px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 384px;
  width: 829px;
}

.rectangle-34-1 {
  background-color: var(--quick-silver);
  border-radius: 15px;
  height: 397px;
  left: 299px;
  position: absolute;
  top: 288px;
  width: 941px;
}

.over-the-years-our {
  height: 274px;
  left: 386px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 318px;
  width: 768px;
}

.overlap-group2-5 {
  background-position: 50% 50%;
  background-size: cover;
  height: 737px;
  margin-left: 332px;
  position: relative;
  width: 1343px;
}

.rectangle-34-2 {
  background-color: var(--quick-silver);
  border-radius: 15px;
  height: 397px;
  left: 324px;
  position: absolute;
  top: 288px;
  width: 941px;
}

.traded-sfs-rush-for {
  height: 249px;
  left: 388px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 337px;
  width: 789px;
}
</style>
