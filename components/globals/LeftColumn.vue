<template>
  <aside class="left-column">

    <!-- 詳細検索 -->
    <div class="side-search left-item">
      <HeadColumn :isLarge="true">
        <IconSearch
          slot="icon"
          class="icon fill-current"
          width="22"
          height="22"
        />
        <template slot="title">
          詳細検索
        </template>
      </HeadColumn>
      <form action="">
        <ul class="search-list">
          <li>
            <div class="search-title">
              <IconMap
                slot="icon"
                class="icon fill-current"
                width="18"
                height="22"
              />
              エリア
            </div>
            <div>関東</div>
            <hr>
            <div>
              <span>東京</span>,<span>新宿</span>
            </div>
          </li>
          <li>
            <div class="search-title">
              <IconStilettos
                slot="icon"
                class="icon fill-current"
                width="22"
                height="18"
              />
              業種
            </div>
            <div class="empty-item">未選択</div>
          </li>
          <li>
            <div class="search-title">
              <IconDiagram
                slot="icon"
                class="icon fill-current"
                width="22"
                height="16"
              />
              ジャンル
            </div>
            <div>
              <span>東京</span>,<span>新宿</span>
            </div>
          </li>
          <li>
            <div class="search-title">
              <IconCoupon
                slot="icon"
                class="icon fill-current"
                width="22"
                height="16"
              />
              クーポン
            </div>
            <div>
              <span>東京</span>,<span>新宿</span>
            </div>
          </li>
        </ul>
        <input type="submit" value="検索">
      </form>
    </div>

    <!-- ハピネスグループバナー -->
    <div slot="item"
         class="side-banner left-item"
    >
      <AppImages
        link="/"
        :src="require('@/assets/images/banner/happiness-group.jpg')"
        alt="ソープランドをお探しならハピネスグループ"
        width="190"
        height="555"
      />
    </div>

    <!-- HIMECHANNELバナー -->
    <div slot="item"
         class="side-banner left-item"
    >
      <AppImages
        link="/"
        :src="require('@/assets/images/banner/hime-channel-02.jpg')"
        alt="女の子にプレゼントができる！？動画投稿SNS HIME CHANNEL"
        width="190"
        height="230"
      />
    </div>

    <!-- 地方/都道府県トップ - 大手グループ風俗店 -->
    <div class="group-wrapper left-item">
      <HeadColumn :isLarge="false">
        <template slot="title">
          大手グループ風俗店
        </template>
        <p slot="lead">
          人気だから各地で展開できる、安定のグループ店をご紹介！
        </p>
      </HeadColumn>
      <ul class="group-list">
        <li v-for="group in groupList"
         　 :key="group.id"
        >
          <a :href="group.link">
            <figure>
              <p>
                <img :src="group.src" :alt="group.alt">
              </p>
              <figcaption>
                {{ group.alt }}
              </figcaption>
            </figure>
          </a>
        </li>
      </ul>
      <AppAccentButton
        class="left-colmun-button"
        link="/"
        name="もっと見る"
      />
    </div>

    <!-- 厳選風俗バナー -->
    <div slot="item"
         class="side-banner left-item"
    >
      <AppImages
        link="/"
        :src="require('@/assets/images/banner/feature.jpg')"
        alt="厳選風俗 様々なおすすめをピックアップ"
        width="190"
        height="160"
      />
    </div>

    <!-- ぴゅあらば会員登録 -->
    <div class="sign-up left-item">
      <HeadColumn>
        <template slot="title">
          ぴゅあらば会員登録
        </template>
        <p slot="lead">
          ゲストユーザー様
        </p>
      </HeadColumn>
      <p class="sign-up-text">
        <span>お気に入りをフォローして</span><br>
        お得な情報を<br>
        いち早くGET!
      </p>
      <a href="/">
        無料会員登録
      </a>
    </div>

    <!-- ぴゅあらば掲載お申し込み -->
    <a class="about-posting left-item"
       href="/"
    >
      <p class="about-posting-title fz20">
        ぴゅあらば<br>
        掲載お申し込み
      </p>
      <p class="about-posting-label">
        無料掲載プランも受付中
      </p>
    </a>

    <!-- 広告掲載について -->
    <a class="about-posting"
       href="/"
    >
      <p class="about-posting-title">
        広告掲載について<br>
        説明を聞きたい
      </p>
    </a>
  </aside>
</template>

<script>
import HeadSecondary from '~/components/parts/HeadSecondary.vue'
import AppAccentButton from '~/components/parts/AppAccentButton.vue'
import AppImages from '~/components/parts/AppImages.vue'
import HeadColumn from '~/components/parts/HeadColumn.vue'
import IconSearch from '~/components/icons/IconSearch.vue'
import IconMap from '~/components/icons/IconMap.vue'
import IconStilettos from '~/components/icons/IconStilettos.vue'
import IconDiagram from '~/components/icons/IconDiagram.vue'
import IconCoupon from '~/components/icons/IconCoupon.vue'

export default {
  components: {
    HeadSecondary,
    AppAccentButton,
    AppImages,
    HeadColumn,
    IconSearch,
    IconMap,
    IconStilettos,
    IconDiagram,
    IconCoupon,
  },
  data() {
    return {
      isLarge: false,
      bannerList: [
        {
          id: 'happiness',
          link:'/',
          src: require('@/assets/images/banner/happiness-group.jpg'),
          alt: 'ソープランドをお探しならハピネスグループ',
          width: '190',
          height: '555',
        },
        {
          id: 'hime-channel',
          link:'/',
          src: require('@/assets/images/banner/hime-channel-02.jpg'),
          alt: '女の子にプレゼントができる！？動画投稿SNS HIME CHANNEL',
          width: '190',
          height: '230',
        },
        {
          id: 'feature',
          link:'/',
          src: require('@/assets/images/banner/feature.jpg'),
          alt: '厳選風俗 様々なおすすめをピックアップ',
          width: '190',
          height: '160',
        },
      ],
      groupList: [
        {
          id: 'happiness',
          link:'/',
          src: require('@/assets/images/common/happiness-group.png'),
          alt: 'ハピネスグループ',
          width: '70',
          height: '66',
        },
        {
          id: '2',
          link:'/',
          src: require('@/assets/images/common/mxy-group.png'),
          alt: 'ミクシーグループ',
          width: '70',
          height: '60',
        },
        {
          id: 'star',
          link:'/',
          src: require('@/assets/images/common/star-group.png'),
          alt: 'スターグループ',
          width: '62',
          height: '69',
        },
        {
          id: 'cinderella',
          link:'/',
          src: require('@/assets/images/common/cinderella-group.png'),
          alt: 'シンデレラグループ',
          width: '66',
          height: '68',
        },
      ],
    }
  },
}
</script>

<style scoped>
.left-column {
  width: 190px;
}

.left-column .side-banner + .side-banner {
  @apply mt-20;
}

.left-column .left-item + .left-item {
  @apply mt-20;
}

.left-column .left-item-hidden {
  @apply hidden;
}

.left-column .group-list {
  background: theme('colors.bg-gray');
  @apply flex items-center flex-col;
}

.left-column .group-list li {
  border-bottom-color: theme('colors.border-horizontalrule');
  @apply w-full py-12 border-b-2 border-solid;
}

.left-column .group-list figure {
  @apply flex items-center flex-col;
}

.left-column .left-colmun-button {
  @apply mt-8 mx-auto;
}

.left-column .sign-up .sign-up-text {
  letter-spacing: -0.9px;
  font-size: theme('fontSize.fz30');
  line-height: theme('lineHeight.lh32');
  color: theme('colors.base');
  background: theme('colors.bg-gray');
  @apply py-24 px-4 font-bold
}

.left-column .sign-up .sign-up-text span {
  letter-spacing: -0.45px;
  font-size: theme('fontSize.fz15');
  line-height: theme('lineHeight.lh15');
}

.left-column .sign-up a {
  transition: .1s;
  background: theme('colors.yellow');
  font-size: theme('fontSize.fz15');
  line-height: theme('lineHeight.lh25');
  @apply flex items-center justify-center py-12 px-12 font-bold text-white cursor-pointer;
}

.left-column .about-posting + .about-posting {
  @apply mt-10
}

.left-column .about-posting {
  border-color: #CAE0A0;
  transition: .1s;
  background: theme('colors.green');
  @apply block border-2 border-solid text-white font-bold no-underline cursor-pointer;
}

.left-column .about-posting .about-posting-title {
  line-height: 1.4;
  text-shadow: 1px 1px rgba(0,0,0,0.1);
  letter-spacing: -0.05em;
  background: theme('colors.green');
  @apply relative py-12 px-12;
}

.left-column .about-posting .about-posting-title.fz20 {
  font-size: theme('fontSize.fz20');
}

.left-column .about-posting .about-posting-title::after {
  content: "";
  top: 50%;
  right: 12px;
  transform: translateY(-50%) rotate(45deg);
  width: 10px;
  height: 10px;
  border-top-width: 3px;
  border-right-width: 3px;
  @apply absolute border-solid border-white;
}

.left-column .about-posting .about-posting-label  {
  background-color: #FE7D00;
  letter-spacing: -0.05em;
  text-shadow: 1px 1px rgba(0,0,0,0.1);
  font-size: theme('fontSize.fz15');
  @apply py-4 px-12 text-center;
}

.left-column .side-search form {
  border-width: 4px;
  border-color: theme('colors.accent');
  @apply flex flex-col bg-white border-solid;
}

.left-column .side-search form input {
  background: #FDC130;
  font-size: theme('fontSize.fz20');
  line-height: theme('lineHeight.lh25');
  @apply flex items-center justify-center w-full py-14 px-14 font-bold text-white cursor-pointer outline-none;
}

.left-column .side-search .search-list li > div {
  font-size: theme('fontSize.fz16');
  line-height: theme('lineHeight.lh23');
  color: theme('colors.base');
  @apply py-12 px-24 ;
}

.left-column .side-search .search-list .search-title  {
  font-size: theme('fontSize.fz14');
  line-height: theme('lineHeight.lh20');
  color: theme('colors.accent');
  background: theme('colors.bg-gray');
  @apply flex items-center pt-12 px-8;
}

.left-column .side-search .search-list .search-title .icon {
  @apply mr-8;
}

.left-column .side-search .search-list .empty-item {
  color: theme('colors.text-empty');
}
</style>