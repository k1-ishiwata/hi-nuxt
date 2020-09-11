<template>
  <div class="wrapper">

    <!-- <BreadcrumbList /> -->

    <!-- <TopBanner>
      <div slot="item"
            v-for="images in banner"
            :key="images.link"
      >
        <AppBanner :link="images.link"
                    :src="images.src"
                    :alt="images.alt"
                    :width="images.width"
                    :height="images.height"
        />
      </div>
    </TopBanner> -->

    <ButtonList>
      <li v-for="link in link"
          :key="link.id"
          :link="link.id"
          slot="item"
      >
        <AppButton>
          <span slot="name">
            ふつーのボタン
          </span>
        </AppButton>
      </li>
    </ButtonList>

    <ButtonList>
      <li v-for="link in link"
          :key="link.id"
          :link="link.id"
          slot="item"
      >
        <AppAccentButton>
          <span slot="name">
            いろつきのボタン
          </span>
        </AppAccentButton>
      </li>
    </ButtonList>

    <CheckBoxList>
      <li v-for="item in checkboxItem"
          :key="item.id"
          slot="item"
      >
        <AppCheckBox v-if="item.isChecked === true"
                      :id="item.id"
                      :name="item.name"
                      :isChecked="true"
        >
          <span slot="checkbox">
            {{ item.item }}
          </span>
        </AppCheckBox>
        <AppCheckBox v-else
                      :id="item.id"
                      :name="item.name"
        >
          <span slot="checkbox">
            {{ item.item }}
          </span>
        </AppCheckBox>
      </li>
    </CheckBoxList>

    <section>
      <HeadSecondary :isButton="true">
        <IconMap slot="icon"
                class="icon fill-current"
                width="20"
                height="24"
        />
        <template slot="title">
          {地方}エリアの風俗店を探す
        </template>
        <AppAccentButton slot="item"
                         link="/"
        >
          <span slot="name">
            詳細検索
          </span>
        </AppAccentButton>
        <p slot="lead">
          各エリアの風俗情報をご紹介。お店や女の子検索もここから
        </p>
      </HeadSecondary>
      <ul class="top-search-prefecture">
        <li v-for="prefecture in searchPrefecture"
            :key="prefecture.id"
        >
          <AppImages :link="prefecture.link"
                     :src="prefecture.src"
                     :alt="prefecture.alt"
                     :width="prefecture.width"
                     :height="prefecture.height"
          />
        </li>
      </ul>
    </section>

    <section>
      <HeadSecondary :isButton="true">
        <IconCrown slot="icon"
                class="icon fill-current"
                width="22"
                height="18"
        />
        <template slot="title">
          {地方}の風俗ランキング
        </template>
        <AppAccentButton slot="item"
                         link="/ranking"
        >
          <span slot="name">
            もっと見る
          </span>
        </AppAccentButton>
        <p slot="lead">
          あなたのお気に入りのお店や女の子の順位をチェック！
        </p>
      </HeadSecondary>
      <AppTabs :isTitle="true">
        <li slot="item"
            v-for="item in list"
            :key="item.id"
        >
          <AppTabItem v-bind="item"
                      v-model="currentId"
          >
            <span slot="label">
              {{ item.label }}
            </span>
          </AppTabItem>
        </li>
        <template slot="title">
          総合ランキング
        </template>
      </AppTabs>
      <AppTabContents :currentKey="currentId">
        <div slot="contents"
             v-if="currentId === 'shop'"
        >
          お店
        </div>
        <div slot="contents"
             v-else-if="currentId === 'reviews'"
        >
          口コミ
        </div>
        <div slot="contents"
             v-else-if="currentId === 'girl'"
        >
          女の子
        </div>
        <div slot="contents"
             v-else-if="currentId === 'upmovie'"
        >
          生動画
        </div>
      </AppTabContents>
    </section>

  </div>
</template>

<script>
import { mapActions } from 'vuex'
import BreadcrumbList from '~/components/modules/BreadcrumbList.vue'
import CheckBoxList from '~/components/modules/CheckBoxList.vue'
import ButtonList from '~/components/modules/ButtonList.vue'
import AppButton from '~/components/parts/AppButton.vue'
import AppAccentButton from '~/components/parts/AppAccentButton.vue'
import AppTabs from '~/components/parts/AppTabs.vue'
import AppImages from '~/components/parts/AppImages.vue'


import AppCheckBox from '~/components/parts/AppCheckBox.vue'

import HeadSecondary from '~/components/parts/HeadSecondary.vue'
import AppTabItem from '~/components/parts/AppTabItem.vue'
import AppTabContents from '~/components/parts/AppTabContents.vue'


import IconMap from '~/components/icons/IconMap.vue'
import IconCrown from '~/components/icons/IconCrown.vue'




export default {
  components: {
    CheckBoxList,
    ButtonList,
    BreadcrumbList,
    AppButton,
    AppAccentButton,
    AppCheckBox,
    HeadSecondary,
    AppTabs,
    IconMap,
    AppTabItem,
    AppTabContents,
    AppImages,
    IconCrown,
  },
  data() {
    return {
      currentId: 'shop',
      list: [
        { id: 'shop', label: 'お店', content: 'コンテンツ1' },
        { id: 'reviews', label: '口コミ', content: 'コンテンツ2' },
        { id: 'girl', label: '女の子', content: 'コンテンツ3' },
        { id: 'upmovie', label: '生動画', content: 'コンテンツ4' },
      ],
      isButton: false,
      isTitle: false,
      // isChecked: false,
  
      link: [
        { id: '11111111'},
        { id: '2222222'},
      ],
      checkboxItem: [
        { id: 'aaa', name: 'aaa' , item: 'aaa', isChecked: true },
        { id: 'bbb', name: 'bbb' , item: 'bbb', },
      ],
      banner: [
        {
          link:'/',
          src: 'https://placehold.jp/640x160.png',
          alt: 'aaa',
          width: '640',
          height: '160',
        },
        {
          link:'/',
          src: 'https://placehold.jp/24/cc9999/993333/640x160.png',
          alt: 'bbb',
          width: '640',
          height: '160',
        },
      ],
      searchPrefecture: [
        {
          id: '1',
          name: 'tokyo',
          link:'/',
          src: require('@/assets/images/common/tokyo.jpg'),
          alt: '東京TOKYO',
          width: '96',
          height: '297',
        },
        {
          id: '2',
          name: 'kanagawa',
          link:'/',
          src: require('@/assets/images/common/kanagawa.jpg'),
          alt: '神奈川KANAGAWA',
          width: '96',
          height: '297',
        },
        {
          id: '3',
          name: 'saitama',
          link:'/',
          src: require('@/assets/images/common/saitama.jpg'),
          alt: '埼玉SAITAMA',
          width: '96',
          height: '297',
        },
        {
          id: '4',
          name: 'chiba',
          link:'/',
          src: require('@/assets/images/common/chiba.jpg'),
          alt: '千葉CHIBA',
          width: '96',
          height: '297',
        },
        {
          id: '5',
          name: 'ibaraki',
          link:'/',
          src: require('@/assets/images/common/ibaraki.jpg'),
          alt: '茨城IBARAKI',
          width: '96',
          height: '297',
        },
        {
          id: '6',
          name: 'tochigi',
          link:'/',
          src: require('@/assets/images/common/tochigi.jpg'),
          alt: '栃木TOCHIGI',
          width: '96',
          height: '297',
        },
        {
          id: '7',
          name: 'gunma',
          link:'/',
          src: require('@/assets/images/common/gunma.jpg'),
          alt: '群馬GUNMA',
          width: '96',
          height: '297',
        },
      ],
    }
  },
  computed: {
    current() {
      return this.list.find(el => el.id === this.currentId) || {}
    },
    currentPage() {
      return [
        {
          path: '',
          id: 'kanto',
          name: this.$route.path,
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

<style scoped>
section + section {
  margin-top: 20px;
}

.top-search-prefecture {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  margin: 1px;
}

.top-search-prefecture > li + li {
  border-left: 1px solid #E5E5E5;
}
</style>