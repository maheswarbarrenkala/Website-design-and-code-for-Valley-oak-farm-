<template>
  <div class="container-center-horizontal">
    <div class="map screen">
      <div class="vector-container">
        <img
          class="vector"
          src="https://cdn.animaapp.com/projects/675a8a2dad9974c27f56a200/releases/675a8a77084266cadf63f333/img/vector-1.svg"
          alt="Vector"
        />
        <img
          class="vector-1"
          src="https://cdn.animaapp.com/projects/675a8a2dad9974c27f56a200/releases/675a8a77084266cadf63f333/img/vector-1.svg"
          alt="Vector"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "xMap",
};
</script>

<style>
.map {
  align-items: flex-start;
  display: flex;
  height: 24px;
  width: 24px;
}

.vector-container {
  align-items: flex-start;
  background-image: url(https://cdn.animaapp.com/projects/675a8a2dad9974c27f56a200/releases/675a8a77084266cadf63f333/img/vector.svg);
  background-size: 100% 100%;
  display: flex;
  gap: 6px;
  height: 22px;
  margin-top: 1px;
  min-width: 24px;
  padding: 0 7px;
}

.vector {
  height: 18px;
  width: 2px;
}

.vector-1 {
  align-self: flex-end;
  height: 18px;
  width: 2px;
}
</style>
