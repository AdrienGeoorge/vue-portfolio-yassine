<template>
  <div id="home-preview-boxes">
    <div class="boxes">
      <div class="box-style box-visual-universe">
        <div class="box-title">Mon univers visuel</div>
        <div class="box-content">
          <img src="@/assets/images/logo-box-visual-universe.svg" alt="Mon univers visuel" class="logo-boxes">
          <a href="" class="box-button">portfolio</a>
        </div>
      </div>
      <div class="box-offbeat-visual-universe"></div>
    </div>

    <div class="boxes">
      <div class="box-style box-experiences">
        <div class="box-title">Mon expérience</div>
        <div class="box-content">
          <img src="@/assets/images/logo-box-experiences.svg" alt="Mon expérience" class="logo-boxes">

          <a href="" class="box-button">cv</a>
        </div>
      </div>
      <div class="box-offbeat-experiences"></div>
    </div>
  </div>
  <img src="@/assets/images/waves.svg" alt="Waves" id="waves">
  <div id="banner">Retrouvez mes derniers travaux par ici !</div>
</template>

<style src="@/assets/home.scss" lang="scss"></style>

<script>
export default {
  name: 'Home'
}
</script>
