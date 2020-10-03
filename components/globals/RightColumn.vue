<template>
  <aside class="right-column">
    <!-- HIMECHANNELバナー -->
    <a class="side-item"
       href="https://lp.hime-channel.com/?utm_source=purelovers&amp;utm_medium=PC_banner&amp;utm_campaign=00&amp;utm_content=1"
       target="_blank"
    >
      <video autoplay=""
             loop=""
             muted=""
             playsinline=""
        >
        <source src="//contents.purelovers.com/user/coding/common/img/common/bnr_hc_ani.mp4?t=20200602_2" 
                type="video/mp4"
        >
      </video>
    </a>

    <!-- バナー -->
    <div slot="item"
         class="side-item"
         v-for="banner in bannerList"
         :key="banner.id"
    >
      <AppImages
        :link="banner.link"
        :src="banner.src"
        :alt="banner.alt"
        :width="banner.width"
        :height="banner.height"
      />
    </div>

    <!-- ぴゅあらば無料案内所 -->
    <div class="purelover-land side-item">
      <p class="purelover-land-button">
        <a href="/">詳しくはこちら</a>
      </p>
      <p class="twitter ikebukuro-twitter">
        <a href="/">池袋店</a>
      </p>
      <p class="twitter shinjuku-twitter">
        <a href="/">新宿セントラル通り</a>
      </p>
      <p class="twitter yokohama-twitter">
        <a href="/">横浜店</a>
      </p>
    </div>
  </aside>
</template>

<script>
import AppImages from '~/components/parts/AppImages.vue'

export default {
  components: {
    AppImages,
  },
  data() {
    return {
      bannerList: [
        {
          id: '1',
          link:'/',
          src: require('@/assets/images/banner/cover-gravure.jpg'),
          alt: 'COVER GRAVURE カバーグラビア',
          width: '190',
          height: '150',
        },
        {
          id: '2',
          link:'/',
          src: require('@/assets/images/banner/experience-movie.jpg'),
          alt: '風俗体験動画',
          width: '190',
          height: '150',
        },
        {
          id: '3',
          link:'/',
          src: require('@/assets/images/banner/experience-comic.jpg'),
          alt: '風俗体験マンガ',
          width: '190',
          height: '150',
        },
        {
          id: '4',
          link:'/',
          src: require('@/assets/images/banner/up-gravure.jpg'),
          alt: 'お店蔵出しグラビア',
          width: '190',
          height: '150',
        },
        {
          id: '5',
          link:'/',
          src: require('@/assets/images/banner/purelovers-discount.jpg'),
          alt: 'ぴゅあらば赤字フェス',
          width: '190',
          height: '133',
        },
        {
          id: '6',
          link:'/',
          src: require('@/assets/images/banner/new-discount.jpg'),
          alt: '新規OPEN店が半額以下！？ 割引情報をCHECK',
          width: '190',
          height: '160',
        },
        {
          id: '7',
          link:'/',
          src: require('@/assets/images/banner/work-purelovers.jpg'),
          alt: '気になるホントのお給料大公開 ぴゅあじょ',
          width: '190',
          height: '100',
        },
      ],
    }
  },
}
</script>

<style scoped>
.right-column {
  width: 190px;
}

.right-column video {
  width: 190px;
  height: 377px;
}

.right-column .side-item + .side-item {
  @apply mt-20;
}

.right-column .purelover-land {
  width: 190px;
  height: 270px;
  background: url("~assets/images/common/purelovers-land.png") top left no-repeat;
  @apply relative;
}

.right-column .purelover-land .purelover-land-button {
  left: 50%;
  top: 120px;
  transform: translate(-50%,0);
  @apply absolute;
}

.right-column .purelover-land .purelover-land-button > a {
  width: 146px;
  height: 36px;
  text-indent: 100%;
  background: url("~assets/images/common/purelovers-land-button.png") top left no-repeat;
  @apply block overflow-hidden whitespace-no-wrap;
}

.right-column .purelover-land .twitter {
  font-size: theme('fontSize.fz12');
  line-height: theme('lineHeight.lh12');
  color: theme('colors.text-link');
  left: 60px;
  @apply absolute top-0 cursor-pointer underline;
}

.right-column .purelover-land .twitter.ikebukuro-twitter {
  top: 172px;
}

.right-column .purelover-land .twitter.shinjuku-twitter {
  top: 203px;
}

.right-column .purelover-land .twitter.yokohama-twitter {
  top: 234px;
}
</style>