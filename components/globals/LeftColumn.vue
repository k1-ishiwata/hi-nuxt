<template>
  <aside class="left-column">
    <p>左側だよ</p>
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
    <HeadColumn :isLarge="false">
      <!-- <IconSearch slot="icon"
                  class="icon fill-current"
                  width="22"
                  height="22"
      /> -->
      <template slot="title">
        大手グループ風俗店
      </template>
      <p slot="lead">
        人気だから各地で展開できる、安定のグループ店をご紹介！
      </p>
    </HeadColumn>
    <HeadColumn>
      <template slot="title">
        ぴゅあらば会員登録
      </template>
      <p slot="lead">
        ゲストユーザー様
      </p>
    </HeadColumn>
  </aside>
</template>

<script>
import AppImages from '~/components/parts/AppImages.vue'
import HeadColumn from '~/components/parts/HeadColumn.vue'
import IconSearch from '~/components/icons/IconSearch.vue'

export default {
  components: {
    AppImages,
    HeadColumn,
    IconSearch,
  },
  data() {
    return {
      isLarge: false,
      banner: [
        {
          id: '1',
          link:'/',
          src: require('@/assets/images/banner/happiness-group.jpg'),
          alt: 'ソープランドをお探しならハピネスグループ',
          width: '190',
          height: '555',
        },
        {
          id: '2',
          link:'/',
          src: require('@/assets/images/banner/hime-channel-02.jpg'),
          alt: '女の子にプレゼントができる！？動画投稿SNS HIME CHANNEL',
          width: '190',
          height: '230',
        },
        {
          id: '3',
          link:'/',
          src: require('@/assets/images/banner/feature.jpg'),
          alt: '厳選風俗 様々なおすすめをピックアップ',
          width: '190',
          height: '160',
        },
      ],
    }
  },
}
</script>

<style scoped>
.left-column {
  width: 190px;
  display: flex;
  flex-direction: column;
}
</style>
