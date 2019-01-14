<template>
  <div class="page-charts">
    <!-- <teedev-chart /> -->
    <teedev-svg>
      <!-- <teedev-svg-box :x="10" :y="10" :w="100" :h="100" /> -->
      <!-- <teedev-svg-line :p1="{x: 110, y: 10}" :p2="{x: 200, y: 200}" /> -->
      <!-- <teedev-svg-line
        :points="[{x: 110, y: 110}, {x: 200, y: 200}, {x: 200, y: 150}, {x: 180, y: 150}]" />
      <teedev-svg-text :x="10" :y="150" text="Testy 123" /> -->
      <!-- <teedev-svg-line :points="[{x: 0, y: 0}, {x: 100, y: 50}]" /> -->
      <!-- <teedev-svg-line :points="[{x: 0, y: 0}, {x: 100, y: 100}]" /> -->
      <Motion :value="value" tag="g">
        <teedev-svg-arc slot-scope="props" :x="150" :y="150" :r="50" :a="props.value" />
      </Motion>
      <Motion :value="value" tag="g">
        <teedev-svg-arc
          slot-scope="props" :x="150" :y="150" :r="50" :s="props.value" :a="props.value" />
      </Motion>
      <Motion :value="value" tag="g">
        <teedev-svg-arc
          slot-scope="props" :x="150" :y="150" :r="50" :s="props.value * 2" :a="props.value" />
      </Motion>
      <Motion :value="value" tag="g">
        <teedev-svg-arc
          slot-scope="props" :x="150" :y="150" :r="50" :s="props.value * 3" :a="props.value" />
      </Motion>
        <!-- <teedev-svg-arc :x="50" :y="50" :r="50" :a="120" />
        <teedev-svg-arc :x="50" :y="150" :r="50" :a="250" /> -->
    </teedev-svg>
    <teedev-button text="Click Me" @click.native="onClick"/>
  </div>
</template>

<script>
export default {
  name: 'page-charts',
  data() {
    return {
      value: 0,
    };
  },
  methods: {
    onClick() {
      if (this.value === 0) {
        this.value = 90;
      } else {
        this.value = 0;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.page-charts {
}
</style>
