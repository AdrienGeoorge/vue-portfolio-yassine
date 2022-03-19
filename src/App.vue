<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="nav">
    <RouterLink to="/" id="nav-home-button">
      <img :src="pictureHover" @mouseover="hover = true" @mouseleave="hover = false" alt="Accueil"
           class="icon-header-bob">
      <span>Yassine El Arassi</span>
    </RouterLink>
    <RouterLink to="/visual-experience">
      <img src="@/assets/images/header/icon-visual-universe.svg" alt="Expérience visuelle" class="icon-visual-universe">
    </RouterLink>
    <RouterLink to="/experiences">
      <img src="@/assets/images/header/icon-experiences.svg" alt="Mon expérience" class="icon-experiences">
    </RouterLink>
  </div>
  <RouterView v-slot="{ Component }">
    <div id="content">
      <transition name="zoom" mode="out-in">
        <component :is="Component"/>
      </transition>
    </div>
  </RouterView>
</template>

<style src="@/assets/base.scss" lang="scss"></style>

<script>
export default {
  data () {
    return {
      iconBob: require('@/assets/images/header/bob-color.svg'),
      iconBobHover: require('@/assets/images/header/bob-line.svg'),
      hover: false
    }
  },
  computed: {
    pictureHover () {
      if (this.hover === true) {
        return this.iconBobHover
      } else {
        return this.iconBob
      }
    }
  }
}
</script>
