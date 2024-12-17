<template>
  <div class="container-center-horizontal">
    <div class="map-pin screen">
      <div class="overlap-group-12">
        <img
          class="vector-2"
          src="https://cdn.animaapp.com/projects/675a8a2dad9974c27f56a200/releases/675a8a77084266cadf63f333/img/vector-4.svg"
          alt="Vector"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MapPin",
};
</script>

<style>
.map-pin {
  align-items: flex-start;
  display: flex;
  padding: 0 2px;
  width: 24px;
}

.overlap-group-12 {
  align-items: flex-start;
  background-image: url(https://cdn.animaapp.com/projects/675a8a2dad9974c27f56a200/releases/675a8a77084266cadf63f333/img/vector-3.svg);
  background-size: 100% 100%;
  display: flex;
  height: 24px;
  min-width: 20px;
  padding: 6px;
}

.vector-2 {
  height: 8px;
  width: 8px;
}
</style>
