<template>
  <div class="component-3">
    <div class="let-us-know-1 arefruqaa-normal-white-28px">{{ letUsKnow }}</div>
  </div>
</template>

<script>
export default {
  name: "Component3",
  props: ["letUsKnow"],
};
</script>

<style>
.component-3 {
  align-items: flex-start;
  background-color: var(--japanese-laurel);
  border: 1px solid;
  border-color: #bfb9b9d4;
  border-radius: 25px;
  display: flex;
  height: 61px;
  justify-content: flex-end;
  margin-left: 0;
  margin-top: 72px;
  min-width: 240px;
  padding: 3.8px 36.4px;
}

.let-us-know-1 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 44px;
  min-width: 159px;
  text-align: center;
}
</style>
