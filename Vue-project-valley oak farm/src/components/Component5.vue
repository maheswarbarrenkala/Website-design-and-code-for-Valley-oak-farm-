<template>
  <div class="component-5">
    <img class="firefly" :src="fireflyFarmFreshFruits31877" alt="Firefly farm fresh fruits 31877" /><img
      class="firefly"
      :src="fireflyNaturalHoney31877"
      alt="Firefly Natural Honey 31877"
    /><img class="firefly" :src="fireflyEggsFromFarm12423" alt="Firefly eggs from farm 12423" /><img
      class="firefly-1"
      :src="fireflyRawMilkInGlassBottles50932"
      alt="Firefly raw milk in glass bottles 50932"
    /><img
      class="firefly"
      :src="fireflyPackagedFarmNaturalsSparklin"
      alt="Firefly Packaged farm naturals sparkling mineral water in glass bottles 47365"
    /><img
      class="firefly-1"
      :src="fireflyPackagedFarmProductsNaturals1"
      alt="Firefly Packaged farm products naturals olive oil 92405"
    /><img
      class="firefly"
      :src="fireflyPackagedFarmProductsNaturals2"
      alt="Firefly Packaged farm products naturals dried herbs 47365"
    /><img class="firefly" :src="fireflyFarmFreshVegetables94054" alt="Firefly farm fresh Vegetables 94054" />
  </div>
</template>

<script>
export default {
  name: "Component5",
  props: [
    "fireflyFarmFreshFruits31877",
    "fireflyNaturalHoney31877",
    "fireflyEggsFromFarm12423",
    "fireflyRawMilkInGlassBottles50932",
    "fireflyPackagedFarmNaturalsSparklin",
    "fireflyPackagedFarmProductsNaturals1",
    "fireflyPackagedFarmProductsNaturals2",
    "fireflyFarmFreshVegetables94054",
  ],
};
</script>

<style>
.component-5 {
  align-items: flex-start;
  border-radius: 15px;
  display: flex;
  gap: 245px;
  height: 506px;
  left: 981px;
  overflow: hidden;
  position: absolute;
  top: 134px;
  width: 324px;
}

.firefly {
  height: 504px;
  object-fit: cover;
  width: 324px;
}

.firefly-1 {
  align-self: flex-end;
  height: 504px;
  object-fit: cover;
  width: 324px;
}
</style>
