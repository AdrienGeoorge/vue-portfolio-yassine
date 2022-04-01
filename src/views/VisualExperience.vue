<template>
  <div>
    <div id="banner">Retrouvez mes derniers travaux par ici !</div>
    <div id="recent-projects">
      <RecentProjetComponent
        link-url="https://www.behance.net/gallery/136317725/Habbox"
        :base="require('@/assets/images/works/habbox.svg')"
        :red="require('@/assets/images/works/habbox-red.svg')"
        :right="false"
      >
        <template #title>Habbox</template>
        <template #description>La charte graphique d'un jeu vidéo</template>
      </RecentProjetComponent>
      <RecentProjetComponent
        link-url="https://www.behance.net/gallery/140028441/Ubiquit"
        :base="require('@/assets/images/works/ubiquite.svg')"
        :red="require('@/assets/images/works/ubiquite-red.svg')"
        :right="true"
      >
        <template #title>Ubiquité</template>
        <template #description>Une série d’illustrations graphique</template>
      </RecentProjetComponent>
      <RecentProjetComponent
        link-url="https://www.behance.net/gallery/116211983/Charte-Graphique-Habbo-Museum"
        :base="require('@/assets/images/works/habbo-museum.svg')"
        :red="require('@/assets/images/works/habbo-museum-red.svg')"
        :right="false"
      >
        <template #title>Habbo Museum</template>
        <template #description>La charte graphique d'une page communautaire</template>
      </RecentProjetComponent>
      <RecentProjetComponent
        link-url="https://www.behance.net/gallery/140028589/Affiche"
        :base="require('@/assets/images/works/affiches.svg')"
        :red="require('@/assets/images/works/affiches-red.svg')"
        :right="true"
      >
        <template #title>Affiches</template>
        <template #description>Une série d'illustration graphique</template>
      </RecentProjetComponent>
    </div>
  </div>
</template>

<style src="@/assets/visual-experience.scss" lang="scss"></style>

<script>
import RecentProjetComponent from '@/components/RecentProjetComponent'

export default {
  components: { RecentProjetComponent }
}
</script>
