<template>
  <div>
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

    <div id="recent-projects">
      <a href="https://www.behance.net/gallery/136317725/Habbox" target="_blank" class="project-item">
        <img :src="Habbox.hover ? Habbox.red : Habbox.base"
             @mouseover="Habbox.hover = true"
             @mouseleave="Habbox.hover = false"
             alt="Habbox" class="project-logo">
        <div class="project-texts">
          <div class="work-title">Habbox</div>
          <div class="work-subtitle">La charte graphique d'un jeu vidéo</div>
        </div>
      </a>
      <a href="https://www.behance.net/gallery/140028441/Ubiquit" target="_blank" class="project-item">
        <div class="project-texts right">
          <div class="work-title">Ubiquité</div>
          <div class="work-subtitle">Une série d’illustrations graphique</div>
        </div>
        <img :src="Ubiquite.hover ? Ubiquite.red : Ubiquite.base"
             @mouseover="Ubiquite.hover = true"
             @mouseleave="Ubiquite.hover = false"
             alt="Ubiquité" class="project-logo right">
      </a>
      <a href="https://www.behance.net/gallery/116211983/Charte-Graphique-Habbo-Museum" target="_blank"
         class="project-item">
        <img :src="HabboMuseum.hover ? HabboMuseum.red : HabboMuseum.base"
             @mouseover="HabboMuseum.hover = true"
             @mouseleave="HabboMuseum.hover = false"
             alt="Habbo Museum" class="project-logo">
        <div class="project-texts">
          <div class="work-title">Habbo Museum</div>
          <div class="work-subtitle">La charte graphique d'une page communautaire</div>
        </div>
      </a>
      <a href="https://www.behance.net/gallery/140028589/Affiche" target="_blank" class="project-item">
        <div class="project-texts right">
          <div class="work-title">Affiches</div>
          <div class="work-subtitle">Une série d'illustration graphique</div>
        </div>
        <img :src="Affiches.hover ? Affiches.red : Affiches.base"
             @mouseover="Affiches.hover = true"
             @mouseleave="Affiches.hover = false"
             alt="Affiches" class="project-logo right">
      </a>
    </div>
  </div>
</template>

<style src="@/assets/home.scss" lang="scss"></style>

<script>
export default {
  data () {
    return {
      Habbox: {
        hover: false,
        base: require('@/assets/images/works/habbox.svg'),
        red: require('@/assets/images/works/habbox-red.svg')
      },
      Ubiquite: {
        hover: false,
        base: require('@/assets/images/works/ubiquite.svg'),
        red: require('@/assets/images/works/ubiquite-red.svg')
      },
      HabboMuseum: {
        hover: false,
        base: require('@/assets/images/works/habbo-museum.svg'),
        red: require('@/assets/images/works/habbo-museum-red.svg')
      },
      Affiches: {
        hover: false,
        base: require('@/assets/images/works/affiches.svg'),
        red: require('@/assets/images/works/affiches-red.svg')
      }
    }
  }
}
</script>
