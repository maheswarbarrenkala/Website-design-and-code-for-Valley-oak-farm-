<template>
  <div class="component-1">
    <img class="icon-shopping-cart" :src="iconShoppingCart" alt="icon &#34;Shopping cart&#34;" />
    <div class="join-now">{{ joinNow }}</div>
  </div>
</template>

<script>
export default {
  name: "Component1",
  props: ["iconShoppingCart", "joinNow"],
};
</script>

<style>
.component-1 {
  align-items: flex-start;
  background-color: var(--green);
  border-radius: 15px;
  display: flex;
  gap: 10px;
  height: 51px;
  left: 1033px;
  min-width: 166px;
  padding: 10.1px 11px;
  position: absolute;
  top: 588px;
}

.icon-shopping-cart {
  align-self: flex-end;
  height: 28px;
  width: 28px;
}

.join-now {
  color: var(--white);
  font-family: var(--font-family-times_new_roman-regular);
  font-size: var(--font-size-m);
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  margin-top: 0.01px;
  min-height: 29px;
  min-width: 97px;
  text-align: center;
  white-space: nowrap;
}
</style>
