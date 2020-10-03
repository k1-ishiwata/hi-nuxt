<template>
  <div class="main-wrapper">
    <!-- {地方}エリアの風俗店を探す -->
    <section>
      <HeadSecondary :isButton="true">
        <IconMap
          slot="icon"
          class="icon fill-current"
          width="20"
          height="24"
        />
        <template slot="title">
          {関東}エリアの風俗店を探す
        </template>
        <AppAccentButton
          slot="item"
          link="/"
          name="詳細検索"
        />
        <p slot="lead">
          各エリアの風俗情報をご紹介。お店や女の子検索もここから
        </p>
      </HeadSecondary>
      <ul class="top-search-prefecture">
        <li v-for="prefecture in searchPrefecture"
            :key="prefecture.id"
        >
          <AppImages
            :link="prefecture.link"
            :src="prefecture.src"
            :alt="prefecture.alt"
            :width="prefecture.width"
            :height="prefecture.height"
          />
        </li>
      </ul>
    </section>

    <!-- {地方}の風俗ランキング -->
    <section>
      <HeadSecondary :isButton="true">
        <IconCrown
          slot="icon"
          class="icon fill-current"
          width="22"
          height="18"
        />
        <template slot="title">
          {関東}の風俗ランキング
        </template>
        <AppAccentButton
          slot="item"
          link="/"
          name="もっと見る"
        />
        <p slot="lead">
          あなたのお気に入りのお店や女の子の順位をチェック！
        </p>
      </HeadSecondary>
      <AppTabs :isTitle="true">
        <li slot="item"
            v-for="item in navList"
            :key="item.id"
        >
          <AppTabItem
            v-bind="item"
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
          <!-- 女の子 -->
          <RankingList>
            <li slot="item">
              <a href="">
                <AppRankingLabel>
                  <template slot="rank">1</template>
                </AppRankingLabel>
                <AppCard :isInformation="true" :isRanking="true" :isGold="true" :isGirl="true">
                  <img slot="image"
                       src="@/assets/images/dummy/girl-01.jpg"
                       alt=""
                  >
                  <template slot="name">LOI</template>
                  <template slot="age">22</template>
                  <template slot="area">新宿</template>
                  <template slot="business">デリヘル</template>
                </AppCard>
              </a>
            </li>
            <li slot="item">
              <a href="">
                <AppCard :isInformation="true" :isRanking="true" :isGirl="true">
                  <img slot="image"
                       src="@/assets/images/dummy/girl-02.jpg"
                       alt=""
                  >
                  <template slot="name">LOI</template>
                  <template slot="age">22</template>
                  <template slot="area">新宿</template>
                  <template slot="business">デリヘル</template>
                </AppCard>
              </a>
            </li>
            <li slot="item">
              <a href="">
                <AppCard :isInformation="true" :isRanking="true" :isGirl="true">
                  <img slot="image"
                       src="@/assets/images/dummy/girl-03.jpg"
                       alt=""
                  >
                  <template slot="name">LOI</template>
                  <template slot="age">22</template>
                  <template slot="area">新宿</template>
                  <template slot="business">デリヘル</template>
                </AppCard>
              </a>
            </li>
            <li slot="item">
              <a href="">
                <AppCard :isInformation="true" :isRanking="true" :isGirl="true">
                  <img slot="image"
                       src="@/assets/images/dummy/girl-04.jpg"
                       alt=""
                  >
                  <template slot="name">LOI</template>
                  <template slot="age">22</template>
                  <template slot="area">新宿</template>
                  <template slot="business">デリヘル</template>
                </AppCard>
              </a>
            </li>
            <li slot="item">
              <a href="">
                <AppCard :isInformation="true" :isRanking="true" :isGirl="true">
                  <img slot="image"
                       src="@/assets/images/dummy/girl-05.jpg"
                       alt=""
                  >
                  <template slot="name">LOI</template>
                  <template slot="age">22</template>
                  <template slot="area">新宿</template>
                  <template slot="business">デリヘル</template>
                </AppCard>
              </a>
            </li>
          </RankingList>
          <AppMoreButton link="/">
            <span slot="name">
              女の子ランキングをもっと見る
            </span>
          </AppMoreButton>
        </div>
        <div slot="contents"
             v-else-if="currentId === 'upmovie'"
        >
          生動画
        </div>
      </AppTabContents>
    </section>

    <!-- {地方}の風俗体験動画 -->
    <section>
      <HeadSecondary :isButton="true">
        <IconMovie
          slot="icon"
          class="icon fill-current"
          width="22"
          height="16"
        />
        <template slot="title">
          {関東}の風俗体験動画
        </template>
         <AppAccentButton
          slot="item"
          link="/"
          name="もっと見る"
        />
        <p slot="lead">
          風俗店が投稿した動画をチェック！
        </p>
      </HeadSecondary>
      <ContentsCards :isTopMovie="true">
        <li slot="item">
          <a href="">
            <AppCard :isTopMovie="true" :isMovie="true">
              <img slot="image"
                   src="@/assets/images/dummy/experience-movie-01.jpg"
                   alt=""
                   width="430"
                   height="242"
              >
              <template slot="time">99:99</template>
            </AppCard>
          </a>
          <div class="experience-movie-information">
            <p class="name">
              ウフフな40。ムフフな50。。（横浜ハレ系）
            </p>
            <p class="shop">
              <span class="area">関内</span>
              /
              <span class="business">ファッションヘルス,SM･M性感</span>
            </p>
            <ul>
              <li>
                <AppHashtag　link="/"　name="巨乳" />
              </li>
              <li>
                <AppHashtag　link="/"　name="3P" />
              </li>
              <li>
                <AppHashtag　link="/"　name="フェラ" />
              </li>
              <li>
                <AppHashtag　link="/"　name="ギャル" />
              </li>
            </ul>
          </div>
        </li>
        <li slot="item">
            <a href="">
              <AppCard :isTopMovie="true" :isMovie="false">
                <img slot="image"
                     src="@/assets/images/dummy/experience-movie-02.jpg"
                     alt=""
                     width="157"
                     height="88"
                >
                <template slot="time">99:99</template>
              </AppCard>
            </a>
        </li>
        <li slot="item">
            <a href="">
              <AppCard :isTopMovie="true" :isMovie="false">
                <img slot="image"
                     src="@/assets/images/dummy/experience-movie-03.jpg"
                     alt=""
                     width="157"
                     height="88"
                >
                <template slot="time">99:99</template>
              </AppCard>
            </a>
        </li>
        <li slot="item">
            <a href="">
              <AppCard :isTopMovie="true" :isMovie="false">
                <img slot="image"
                     src="@/assets/images/dummy/experience-movie-04.jpg"
                     alt=""
                     width="157"
                     height="88"
                >
                <template slot="time">99:99</template>
              </AppCard>
            </a>
        </li>
        <li slot="item">
            <a href="">
              <AppCard :isTopMovie="true" :isMovie="false">
                <img slot="image"
                     src="@/assets/images/dummy/experience-movie-05.jpg"
                     alt=""
                     width="157"
                     height="88"
                >
                <template slot="time">99:99</template>
              </AppCard>
            </a>
        </li>
      </ContentsCards>
    </section>

    <!-- {地方}の風俗体験マンガ -->
    <section>
      <HeadSecondary :isButton="true">
        <IconBook slot="icon"
                class="icon fill-current"
                width="24"
                height="19"
        />
        <template slot="title">
          {関東}の風俗体験マンガ
        </template>
        <AppAccentButton
          slot="item"
          link="/"
          name="もっと見る"
        />
        <p slot="lead">
          様々な業種の体験プレイを元にマンガでご紹介！
        </p>
      </HeadSecondary>
      <ContentsCards>
        <li slot="item">
          <a href="/">
            <AppCard :isInformation="true" :isPprimary="true">
              <img slot="image"
                   src="@/assets/images/dummy/comic-01.jpg"
                   alt=""
                   width="324"
                   height="243"
              >
              <template slot="name">店舗名が入るよ店舗名が入るよ店舗名が入るよ店舗名が入るよ</template>
              <template slot="area">秋葉原</template>
              <template slot="business">デリヘル,エステ･M性感</template>
            </AppCard>
          </a>
        </li>
        <li slot="item">
          <a href="/">
            <AppCard :isInformation="true" :isPprimary="true">
              <img slot="image"
                   src="@/assets/images/dummy/comic-02.jpg"
                   alt=""
                   width="324"
                   height="243"
              >
              <template slot="name">店舗名が入るよ</template>
              <template slot="area">秋葉原</template>
              <template slot="business">デリヘル,エステ･M性感</template>
            </AppCard>
          </a>
        </li>
        <li slot="item">
          <a href="/">
            <AppCard :isInformation="true" :isPprimary="true">
              <img slot="image"
                   src="@/assets/images/dummy/comic-03.jpg"
                   alt=""
                   width="324"
                   height="243"
              >
              <template slot="name">店舗名が入るよ</template>
              <template slot="area">秋葉原</template>
              <template slot="business">デリヘル,エステ･M性感</template>
            </AppCard>
          </a>
        </li>
        <li slot="item">
          <a href="/">
            <AppCard :isInformation="true" :isPprimary="true">
              <img slot="image"
                   src="@/assets/images/dummy/comic-04.jpg"
                   alt=""
                   width="324"
                   height="243"
              >
              <template slot="name">店舗名が入るよ</template>
              <template slot="area">秋葉原</template>
              <template slot="business">デリヘル,エステ･M性感</template>
            </AppCard>
          </a>
        </li>
      </ContentsCards>
    </section>

    <!-- 地方トップスペシャル -->
    <section class="special-banner">
      <AppImages
        :isSpecial="true"
        src="https://placehold.jp/750x360.png"
        alt=""
        width="680"
        height="326"
      />
    </section>

    <!-- 風俗店の新着口コミ -->
    <section>
      <HeadSecondary :isButton="true">
        <IconComment
          slot="icon"
          class="icon fill-current"
          width="24"
          height="21"
        />
        <template slot="title">
          風俗店の新着口コミ
        </template>
        <AppAccentButton
          slot="item"
          link="/"
          name="詳細検索"
        />
        <p slot="lead">
          お店に行ったユーザーのリアルな口コミ情報をご紹介！
        </p>
      </HeadSecondary>
      <ul>
        <li v-for="item in reviewsItem"
            :key="item.id"
        >
          <ReviewsItem
            v-if="item.isGirl === false"
            :isPost="true"
            :datetime="item.datetime"
            :date="item.date"
            :title="item.title"
            :reviews="item.reviews"
            :reviewer="item.reviewer"
            :rating="item.rating"
            :number="item.number"
            :name="item.name"
            :area="item.area"
            :bussines="item.bussines"
            :src="item.src"
            :alt="item.alt"
          >

            <p slot="rating" class="rating">
            <!-- <IconStar 
            class="icon fill-current"
            width="24"
            height="24"/> -->
          
          <IconStar
          
            v-for="i in 5"
            :key="i"
            :class="3 <= item.rating ? 'text-star-orange' : 'text-star-yellow'"
            class="icon fill-current"
            width="24"
            height="24"/>


          

          </p>
          

          
         
          </ReviewsItem>
          <ReviewsItem
            v-else
            :isGirl="true"
            :isPost="true"
            :datetime="item.datetime"
            :date="item.date"
            :title="item.title"
            :reviews="item.reviews"
            :reviewer="item.reviewer"
            :number="item.number"
            :name="item.name"
            :age="item.age"
            :shop="item.shop"
            :area="item.area"
            :bussines="item.bussines"
            :src="item.src"
            :alt="item.alt"
          />
        </li>
      </ul>
    </section>

    <!-- 他の地方の風俗店を探す -->
    <section>
      <HeadSecondary :isButton="false">
        <IconMap slot="icon"
                class="icon fill-current"
                width="20"
                height="24"
        />
        <template slot="title">
          他の地方の風俗店を探す
        </template>
      </HeadSecondary>
      <ButtonList :isMargin="true">
        <li v-for="region in regionLinks"
            :key="region.id"
            :link="region.id"
            slot="item"
        >
          <AppAccentButton
            v-if="region.id === 'kanto'"
            :isActive="true"
            :name="region.name"
          />
          <AppAccentButton
            v-else
            :name="region.name"
          />
      </li>
    </ButtonList>
    </section>
  </div>
</template>

<script>
import ButtonList from '~/components/modules/ButtonList.vue'
import ContentsCards from '~/components/modules/ContentsCards.vue'
import ReviewsItem from '~/components/modules/ReviewsItem.vue'
import RankingList from '~/components/modules/RankingList.vue'
import AppButton from '~/components/parts/AppButton.vue'
import AppAccentButton from '~/components/parts/AppAccentButton.vue'
import AppTabs from '~/components/parts/AppTabs.vue'
import AppImages from '~/components/parts/AppImages.vue'
import AppTabItem from '~/components/parts/AppTabItem.vue'
import AppTabContents from '~/components/parts/AppTabContents.vue'
import AppRankingLabel from '~/components/parts/AppRankingLabel.vue'
import AppCheckBox from '~/components/parts/AppCheckBox.vue'
import HeadSecondary from '~/components/parts/HeadSecondary.vue'
import AppMoreButton from '~/components/parts/AppMoreButton.vue'
import AppCard from '~/components/parts/AppCard.vue'
import AppHashtag from '~/components/parts/AppHashtag.vue'

import IconMap from '~/components/icons/IconMap.vue'
import IconCrown from '~/components/icons/IconCrown.vue'
import IconMovie from '~/components/icons/IconMovie.vue'
import IconBook from '~/components/icons/IconBook.vue'
import IconComment from '~/components/icons/IconComment.vue'
import IconStar from '~/components/icons/IconStar.vue'
import IconStarHalf from '~/components/icons/IconStarHalf.vue'
// import IconStarDisabled from '~/components/icons/IconStarDisabled.vue'

export default {
  components: {
    ButtonList,
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
    IconMovie,
    IconBook,
    IconComment,
    AppRankingLabel,
    AppCard,
    ReviewsItem,
    AppMoreButton,
    RankingList,
    ContentsCards,
    AppHashtag,
    IconStar,
    IconStarHalf,

  },
  data() {
    return {
      currentId: 'shop',
      regionLinks: [
        { id: 'hokkaido-tohoku', name: '北海道･東北', path: '/' },
        { id: 'kanto', name: '関東', path: '/' },
        { id: 'hokuriku', name: '北陸', path: '/' },
        { id: 'koshinetsu', name: '甲信越', path: '/' },
        { id: 'tokai', name: '東海', path: '/' },
        { id: 'kansai', name: '関西', path: '/' },
        { id: 'chugoku-shikoku', name: '中国･四国', path: '/' },
        { id: 'kyushu-okinawa', name: '九州･沖縄', path: '/' },
      ],
      reviewsItem: [
        {
          id: '1',
          datetime: '2020-09-24',
          date: '09/24',
          title: 'とても分かりやすく、初めてでもグッド!!',
          reviews: 'ふらりと立ち寄るには少々もったいないと感じるお店でした。次はちゃんと調べて、お邪魔しようかと...',
          reviewer: 'yuki0123',
          number: '3',
          rating: '3.5',
          name: 'ファンタジー',
          shop: '',
          area: '池袋',
          bussines: 'ファッションヘルス,イメクラ･コスプレ',
          src: require('@/assets/images/dummy/review-01.jpg'),
          alt: '',
          path: '/',
          isGirl: false,
        },
        {
          id: '2',
          datetime: '2020-09-24',
          date: '09/24',
          title: 'ポイント稼ぎも兼ねて投稿してみました。',
          reviews: 'ふらりと立ち寄るには少々もったいないと感じるお店でした。次はちゃんと調べて、お邪魔しようかと...',
          reviewer: 'まさよし',
          number: '3',
          rating: '5',
          name: '完全密室 無抵抗',
          shop: '',
          area: '池袋',
          bussines: 'ファッションヘルス,イメクラ･コスプレ',
          src: require('@/assets/images/dummy/review-02.jpg'),
          alt: '',
          path: '/',
          isGirl: false,
        },
        {
          id: '3',
          datetime: '2020-09-24',
          date: '09/24',
          title: '女の子も可愛く、コスパもよく最高でした♥',
          reviews: 'ふらりと立ち寄るには少々もったいないと感じるお店でした。次はちゃんと調べて、お邪魔しようかと...',
          reviewer: 'yuki0123',
          number: '3',
          rating: '4',
          name: 'りこ',
          age: '19',
          shop: '横浜人妻デリヘル RE:PRESIDENT-プレジデント-',
          area: '池袋',
          bussines: 'ファッションヘルス,イメクラ･コスプレ',
          src: require('@/assets/images/dummy/review-03.jpg'),
          alt: '',
          path: '/',
          isGirl: true,
        },
      ],
      navList: [
        { id: 'shop', label: 'お店', content: 'コンテンツ1' },
        { id: 'reviews', label: '口コミ', content: 'コンテンツ2' },
        { id: 'girl', label: '女の子', content: 'コンテンツ3' },
        { id: 'upmovie', label: '生動画', content: 'コンテンツ4' },
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
  methods: {
    mouseOverAction(){
        this.hoverFlag = true
    },
    mouseLeaveAction(){
        this.hoverFlag = false
    },
  },
}
</script>

<style scoped>
.main-wrapper section + section {
  @apply mt-20;
}

.main-wrapper .special-banner {
  width: 680px;
  height: 326px;
}

.main-wrapper .top-search-prefecture {
  @apply flex items-center flex-no-wrap m-px;
}

.main-wrapper .top-search-prefecture > li + li {
  border-left-color: #E5E5E5;
  @apply border-l border-solid;
}

.main-wrapper .experience-movie-information {
  width: 234px;
  padding: 12px;
  @apply absolute top-0 right-0;
}

.main-wrapper .experience-movie-information {
  top: 50%;
  width: 234px;
  transform: translateY(-50%);
  @apply absolute right-0 pt-12 px-12;
}

.main-wrapper .experience-movie-information .name {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  font-size: theme('fontSize.fz18');
  line-height: theme('lineHeight.lh18');
  color: theme('colors.base');
  @apply font-bold overflow-hidden;
}

.main-wrapper .experience-movie-information .shop {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  font-size: theme('fontSize.fz14');
  line-height: theme('lineHeight.lh14');
  color: theme('colors.base');
  @apply mt-12 overflow-hidden;
}

.main-wrapper .experience-movie-information ul {
  @apply flex flex-wrap items-center mt-20 -mr-4 -mb-4;
}

.main-wrapper .experience-movie-information ul > li {
  @apply pr-4 pb-4;
}
</style>