<template>
  <nav><router-link to="/">Home</router-link> |</nav>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, onMounted, getCurrentInstance } from "vue";

export default defineComponent({
  setup() {
    const app = getCurrentInstance();

    function configureApplicationColorPalette() {
      // Chama a função global que cria
      const colorPaletteModel =
        app?.appContext.config.globalProperties.$utils.colorPaletteGenerator(
          "#18EF8D"
        );

      Object.entries(colorPaletteModel).forEach(([key, value]) => {
        const number = key.replace(/\D/g, "");
        document.documentElement.style.setProperty(
          `--br-color-primary-${number}`,
          value as string
        );
      });
    }

    onMounted(() => {
      configureApplicationColorPalette();
    });
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
