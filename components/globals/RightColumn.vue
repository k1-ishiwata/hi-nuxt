<template>
  <aside class="left-column">
    <p>右側だよ</p>
    <div slot="item"
         v-for="image in banner"
         :key="image.id"
    >
      <AppImages :link="image.link"
                 :src="image.src"
                 :alt="image.alt"
                 :width="image.width"
                 :height="image.height"
      />
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
      banner: [
        // {
        //   link:'/',
        //   src: require('@/assets/images/banner/hime-channel-01.jpg'),
        //   alt: '女の子と直接会話ができる！ HIME CHANNEL',
        //   width: '190',
        //   height: '377',
        // },
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
  display: flex;
  flex-direction: column;
}
</style>
