<template>
  <div>
    <HeaderCommon />
    <div class="wrapper-common">
      <BreadcrumbList />
      <TopBanner>
        <div slot="item"
             v-for="image in banner"
             :key="image.id"
        >
          <AppImages
            :isBanner="true"
            :link="image.link"
            :src="image.src"
            :alt="image.alt"
            :width="image.width"
            :height="image.height"
          />
        </div>
      </TopBanner>
      <div class="contents">
        <LeftColumn />
        <main>
          <nuxt />
        </main>
        <RightColumn />
      </div>
    </div>
    <FooterCommon />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import BreadcrumbList from '~/components/modules/BreadcrumbList.vue'
import HeaderCommon from '~/components/globals/HeaderCommon.vue'
import FooterCommon from '~/components/globals/FooterCommon.vue'
import LeftColumn from '~/components/globals/LeftColumn.vue'
import RightColumn from '~/components/globals/RightColumn.vue'
import TopBanner from '~/components/modules/TopBanner.vue'
import AppImages from '~/components/parts/AppImages.vue'

export default {
  components: {
    HeaderCommon,
    FooterCommon,
    LeftColumn,
    RightColumn,
    TopBanner,
    AppImages,
    BreadcrumbList,
  },
  data() {
    return {
      banner: [
        {
          id: '1',
          link:'/',
          src: require('@/assets/images/banner/gold-platinum-class.jpg'),
          alt: '',
          width: '640',
          height: '160',
        },
        {
          id: '2',
          link:'/',
          src: require('@/assets/images/banner/himitsu-club-rin.jpg'),
          alt: '',
          width: '640',
          height: '160',
        },
      ],

    }
  },
  computed: {
    currentPage() {
      return [
        {
          path: '',
          id: '',
          name: '関東',
        },
      ]
    },
  },
  created() {
    this.addBreadcrumbList(this.currentPage)
  },
  methods: {
    ...mapActions(['addBreadcrumbList'])
  },
}
</script>

<style>
body {
  color: theme('colors.base');
  font-family: theme('fontFamily.default');
  word-wrap: break-word;
  @apply break-all
}

*,
*::before,
*::after {
  @apply box-border;
}

.wrapper-common {
  padding: 36px 0 120px 0;
  width: theme('width.wrapper-common');
  @apply relative flex flex-wrap mx-auto my-0;
}

.wrapper-common .contents {
  @apply relative flex flex-no-wrap mx-auto my-0;
}

.wrapper-common main {
  width: 680px;
  @apply flex flex-col my-0 mx-20;
}
</style>
