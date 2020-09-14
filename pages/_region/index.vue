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

    <!-- ランキング -->
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
                         link="/"
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
          <!-- お店 -->
          <ul class="ranking">
            <li>
              <a href="">
                <AppRankingLabel>
                  <template slot="rank">1</template>
                </AppRankingLabel>
                <figure>
                  <p>
                    <img src="https://placehold.jp/340x454.png" alt="">
                  </p>
                  <div >
                    <p style="font-size: 24px;line-height: 24px;">wwwwwwwwwwwwwwwwwwwwwww</p>
                    <p style="font-size: 14px;line-height: 20px;">aaaaaaaaaaaaaaa</p>
                  </div>
                </figure>
              </a>
            </li>

            <li>
              <a href="">
                <figure>
                  <p>
                    <img src="https://placehold.jp/170x227.png" alt="">
                  </p>
                  <div>
                    <p>wwwwwwwwwwwwwwwwwwwwwww</p>
                    <p>aaaaaaaaaaaaaaa</p>
                  </div>
                </figure>
              </a>
            </li>

            <li>
              <a href="">
                <figure>
                  <p>
                    <img src="https://placehold.jp/170x227.png" alt="">
                  </p>
                  <div>
                    <p>wwwwwwwwwwwwwwwwwwwwwww</p>
                    <p>aaaaaaaaaaaaaaa</p>
                  </div>
                </figure>
              </a>
            </li>

            <li>
              <a href="">
                <figure>
                  <p>
                    <img src="https://placehold.jp/170x227.png" alt="">
                  </p>
                  <div>
                    <p>wwwwwwwwwwwwwwwwwwwwwww</p>
                    <p>aaaaaaaaaaaaaaa</p>
                  </div>
                </figure>
              </a>
            </li>

            <li>
              <a href="">
                <figure>
                  <p>
                    <img src="https://placehold.jp/170x227.png" alt="">
                  </p>
                  <div>
                    <p>wwwwwwwwwwwwwwwwwwwwwww</p>
                    <p>aaaaaaaaaaaaaaa</p>
                  </div>
                </figure>
              </a>
            </li>
          </ul>
          <p>
            <a class="rank-btn" href="">女の子ランキングをもっと見る</a>
          </p>







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

    <div>
      
      
    </div>

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
import AppRankingLabel from '~/components/parts/AppRankingLabel.vue'



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
    AppRankingLabel,

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


figure {
  position: relative;
  /* display: inline-block; */
      display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

figure div {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,0.75);
  display: inline-block;
  color: #fff;
  padding: 8px;
}

figure div p {
  font-size: 16px;
  line-height: 16px;
  overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

figure div p + p {
  font-size: 12px;
  line-height: 12px;
  overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.ranking {
      display: grid;
    grid-template-columns: 1fr 0.5fr 0.5fr;
    grid-template-rows: 0.5fr 0.5fr;
    background-color: white;
    width: 100%;
    height: 100%;
}

.rank {
  width: 0;
height: 0;
border-style: solid;
border-width: 70px 70px 0 0;
border-color: #8C8C8C transparent transparent transparent;
position: absolute;
top: 0;
left: 0;
display: flex;
z-index: 100;
}

.ranking li {
  position: relative;
}

.ranking li:first-child {
    grid-row-start: 1;
    grid-row-end: span 2;
    grid-column-start: 1;
    grid-column-end: span 1
}

.ranking li:nth-of-type(2) {
    grid-row-start: 1;
    grid-row-end: span 1;
    grid-column-start: 2;
    grid-column-end: span 1
}


.ranking li:nth-of-type(3) {
   grid-row-start: 1;
    grid-row-end: span 1;
    /* color: black; */
    grid-column-start: 3;
    grid-column-end: span 1;
}


.ranking li:nth-of-type(4) {
   grid-column-start: 2;
    grid-column-end: span 1;
    grid-row-start: 2;
    grid-row-end: span 1;
}

.ranking li:last-child {
   grid-column-start: 3;
    grid-column-end: span 1;
    grid-row-start: 2;
    grid-row-end: span 1;
}

.rank-btn {
  background: #333;
  border-top: 6px solid #E71212;
  font-weight: bold;
font-size: 20px;
line-height: 20px;
color: #FD306A;
display: flex;
align-items: center;
justify-content: center;
padding: 20px 20px;
transition: .1s;
cursor: pointer;
}
</style>