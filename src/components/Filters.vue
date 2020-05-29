<template>
  <div class="filters" v-show="imgUrl">
    <div class="filter">
      <label for="brightness">Brightness</label>
      <input
        type="range"
        min="-100"
        max="100"
        step="1"
        value="0"
        id="brightness"
        data-filter="brightness"
        v-on:change="changeBrightness"
      />
    </div>
    <div class="filter">
      <label for="contrast">Contrast</label>
      <input
        type="range"
        min="-100"
        max="100"
        step="1"
        value="0"
        data-filter="contrast"
        v-on:change="changeContrast"
      />
    </div>
    <div class="filter">
      <label for="saturation">Saturation</label>
      <input
        type="range"
        min="-100"
        max="100"
        step="1"
        value="0"
        data-filter="saturation"
        v-on:change="changeSaturation"
      />
    </div>
    <div class="filter">
      <label for="vibrance">Vibrance</label>
      <input
        type="range"
        min="-100"
        max="100"
        step="1"
        value="0"
        data-filter="vibrance"
        v-on:change="changeVibrance"
      />
    </div>
    <div class="filter">
      <label for="exposure">Exposure</label>
      <input
        type="range"
        min="-100"
        max="100"
        step="1"
        value="0"
        data-filter="exposure"
        v-on:change="changeExposure"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["imgUrl"],
  methods: {
    changeBrightness(event) {
      const value = parseInt(event.target.value);
      console.log(event.target.value);
      this.Caman("#photo", this.imgUrl, () => {
        if (value > -10 && value < 10) {
          this.revert();
        }
        this.brightness(value - this.oldValue);
        this.oldValue = value;
        this.render();
      });
    },
    changeContrast(event) {
      const value = parseInt(event.target.value);
      console.log(event.target.value);
      this.Caman("#photo", this.imgUrl, () => {
        if (value > -10 && value < 10) {
          this.revert();
        }
        this.contrast(value - this.oldValue);
        this.oldValue = value;
        this.render();
      });
    },
    changeSaturation(event) {
      const value = parseInt(event.target.value);
      console.log(event.target.value);
      this.Caman("#photo", this.imgUrl, () => {
        if (value > -10 && value < 10) {
          this.revert();
        }
        this.saturation(value - this.oldValue);
        this.oldValue = value;
        this.render();
      });
    },
    changeVibrance(event) {
      const value = parseInt(event.target.value);
      console.log(event.target.value);
      this.Caman("#photo", this.imgUrl, () => {
        if (value > -10 && value < 10) {
          this.revert();
        }
        this.vibrance(value - this.oldValue);
        this.oldValue = value;
        this.render();
      });
    },
    changeExposure(event) {
      const value = parseInt(event.target.value);
      console.log(event.target.value);
      this.Caman("#photo", this.imgUrl, () => {
        if (value > -10 && value < 10) {
          this.revert();
        }
        this.exposure(value - this.oldValue);
        this.oldValue = value;
        this.render();
      });
    },
  },
};
</script>

<style lang="scss">
.filters {
  width: 100%;
  margin: auto;
  padding: 1rem;
  label {
    margin: auto;
    padding: 1.5rem;
  }
  filter {
    width: 200px;
  }
}
@media screen and (min-width: 768px) {
  .filters {
    width: 100%;
  }
  input {
    width: 500px;
    justify-items: center;
  }
  label {
    font-size: 30px;
  }
}
</style>
