<template>
  <div class="fixed inset-0 flex items-center justify-center bg-black">
    <div class="bar">
      <div class="ball"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loader",
};
</script>

<style scoped>
.ball {
  position: relative;
  bottom: 50px;
  left: calc(100% - 20px);
  width: 50px;
  height: 50px;
  background: #fff;
  border-radius: 50%;
  animation: ball-move 3s ease-in-out 1s infinite alternate;
}

.ball::after {
  position: absolute;
  content: "";
  top: 25px;
  right: 5px;
  width: 5px;
  height: 5px;
  background: #000;
  border-radius: 50%;
}

.bar {
  width: 200px;
  height: 12.5px;
  background: #ffdaaf;
  border-radius: 30px;
  transform: rotate(-15deg);
  animation: up-down 3s ease-in-out 1s infinite alternate;
}

@keyframes up-down {
  from {
    transform: rotate(-15deg);
  }

  to {
    transform: rotate(15deg);
  }
}

@keyframes ball-move {
  from {
    left: calc(100% - 40px);
    transform: rotate(360deg);
  }

  to {
    left: calc(0% - 20px);
    transform: rotate(0deg);
  }
}
</style>
