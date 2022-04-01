<template>
  <a :href="linkUrl" target="_blank" class="project-item">
    <img :src="hover ? red : base"
         @mouseover="hover = true"
         @mouseleave="hover = false"
         alt="Mon projet" :class="[right && rightClass, projectLogoClass]">
    <div :class="[right && rightClass, projectTextsClass]">
      <div class="work-title">
        <slot name="title"></slot>
      </div>
      <div class="work-subtitle">
        <slot name="description"></slot>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: ['linkUrl', 'base', 'red', 'right'],
  data () {
    return {
      hover: false,
      rightClass: 'right',
      projectTextsClass: 'project-texts',
      projectLogoClass: 'project-logo'
    }
  }
}
</script>
