<template>
  <footer class="footer-common">
    <div class="wrapper">
      <FooterGuideList>
        <li slot="item"
            v-for="footerNavLink in footerNavLinks"
            :key="footerNavLink.name"
        >
          <a :href="footerNavLink.path">
            <IconArrow
              class="icon fill-current"
              width="12"
              height="12"
            />
            {{ footerNavLink.name }}
          </a>
        </li>
      </FooterGuideList>
      <ul class="information-list">
        <li v-for="informationLink in informationLinks"
            :key="informationLink.name"
        >
          <AppAccentButton
            :isRounded="true"
            :link="informationLink.path"
            :name="informationLink.name"
            class="fz16"
          />
        </li>
      </ul>
      <hr>
      <FooterContentsList>
        <div slot="contents"
             v-for="area in areaList"
             :key="area.id"
          >
            <AreaList>
              <li slot="index">
                <FooterAreaIndex :isColon="true">
                  <template slot="colon">
                    {{ area.region }}
                  </template>
                </FooterAreaIndex>
              </li>
              <li slot="item"
                  v-for="prefecture in area.prefecture"
                  :key="prefecture.id"
              >
                <a :href="prefecture.path">
                  {{ prefecture.name }}
                </a>
              </li>
            </AreaList>
          </div>
      </FooterContentsList>
      <hr>
      <FooterContentsList>
        <div slot="contents">
          <FooterSearchIndex>
            <template slot="title">
              風俗主要エリア
            </template>
          </FooterSearchIndex>
          <template v-for="area in areaList">
            <AreaList
              v-for="prefecture in area.prefecture"
              :key="prefecture.id"
            >
              <template v-if="area.id === 'kanto'">
                <li slot="index"
                    class="w-full"
                >
                  <FooterAreaIndex :isParentheses="true">
                    <template slot="parentheses">
                      {{ prefecture.name }}
                    </template>
                  </FooterAreaIndex>
                </li>
                <li slot="item"
                    v-for="city in prefecture.city"
                    :key="city.name"
                >
                  <a :href="city.path">
                    {{ city.name }}風俗
                  </a>
                </li>
              </template>
            </AreaList>
          </template>
        </div>
        <div slot="contents">
          <div v-for="shop in searchShop"
               :key="shop.name"
          >
            <FooterSearchIndex>
              <template slot="title">
                {{ shop.name }}
              </template>
            </FooterSearchIndex>
            <div slot="item"
                 v-for="area in areaList"
                 :key="area.id"
                 class="item"
            >
              <AreaList
                v-for="prefecture in area.prefecture"
                :key="prefecture.id"
              >
                <template v-if="area.id === 'kanto'">
                  <li slot="index">
                    <FooterAreaIndex :isParentheses="true">
                      <template slot="parentheses">
                        {{ prefecture.name }}
                      </template>
                    </FooterAreaIndex>
                  </li>
                  <li slot="item"
                      v-for="city in prefecture.city"
                      :key="city.name"
                  >
                    <a :href="city.path">
                      {{ city.name }}{{ shop.type }}
                    </a>
                  </li>
                </template>
              </AreaList>
            </div>
          </div>
        </div>
      </FooterContentsList>
    </div>
    <p class="copyright">
      Copyright© 1999-{{ nowYear }} ぴゅあらば All rights reserved.
    </p>
  </footer>
</template>

<script>
import FooterGuideList from '~/components/globals/FooterGuideList.vue'
import FooterAreaIndex from '~/components/globals/FooterAreaIndex.vue'
import FooterContentsList from '~/components/globals/FooterContentsList.vue'
import FooterSearchIndex from '~/components/globals/FooterSearchIndex.vue'
import AreaList from '~/components/globals/AreaList.vue'
import AppAccentButton from '~/components/parts/AppAccentButton.vue'
import IconArrow from '~/components/icons/IconArrow.vue'

export default {
  components: {
    FooterGuideList,
    FooterAreaIndex,
    FooterContentsList,
    FooterSearchIndex,
    AreaList,
    AppAccentButton,
    IconArrow,
  },
  data() {
    return {
      nowYear: '',
      logoAlt: '風俗情報ぴゅあらば',
      footerNavLinks: [
        { name: '風俗情報ぴゅあらばTOP', path: '/' },
        { name: '利用規約', path: '/' },
        { name: 'プライバシーポリシー', path: '/' },
        { name: 'よくある質問', path: '/' },
        { name: 'お問い合わせ', path: '/' },
        { name: 'リンク', path: '/' },
        { name: '運営者情報', path: '/' },
      ],
      informationLinks: [
        { name: '掲載お申込み', path: '/' },
        { name: '掲載についてのお問い合わせ', path: '/' },
        { name: '店舗様ログイン', path: '/' },
      ],
      searchShop: [
        { id: 'delivery-health', name: 'デリヘル店の主要エリア', type: 'デリヘル' },
        { id: 'hotel-health', name: 'ホテヘル店の主要エリア', type: 'ホテヘル' },
        { id: 'shop-health', name: '店舗型ヘルス店の主要エリア', type: 'ヘルス' },
        { id: 'soap', name: 'ソープ店の主要エリア', type: 'ソープ' },
      ],
      areaList: [
        {
          id: 'hokkaido-tohoku',
          region: '北海道・東北',
          prefecture: [
            { id: 'hokkaido', name: '北海道', path: '/' },
            { id: 'aomori', name: '青森', path: '/' },
            { id: 'akita', name: '秋田', path: '/' },
            { id: 'iwate', name: '岩手', path: '/' },
            { id: 'yamagata', name: '山形', path: '/' },
            { id: 'miyagi', name: '宮城', path: '/' },
            { id: 'hukushima', name: '福島', path: '/' },
          ]
        },
        {
          id: 'kanto',
          region: '関東',
          prefecture: [
            {
              id: 'tokyo',
              name: '東京',
              path: '/',
              city: [
                { order: 1, name: '渋谷', path: '/' },
                { order: 2, name: '恵比寿・六本木・赤坂', path: '/' },
                { order: 3, name: '新宿', path: '/' },
                { order: 4, name: '新大久保・高田馬場', path: '/' },
                { order: 5, name: '中野・高円寺', path: '/' },
                { order: 6, name: '池袋', path: '/' },
                { order: 7, name: '五反田', path: '/' },
                { order: 8, name: '品川', path: '/' },
                { order: 9, name: '新橋・銀座', path: '/' },
                { order: 10, name: '蒲田・大井町', path: '/' },
                { order: 11, name: '大塚', path: '/' },
                { order: 12, name: '吉原', path: '/' },
                { order: 13, name: '上野・御徒町', path: '/' },
                { order: 14, name: '浅草・浅草橋', path: '/' },
                { order: 15, name: '秋葉原・神田', path: '/' },
                { order: 16, name: '錦糸町', path: '/' },
                { order: 17, name: '小岩・葛西', path: '/' },
                { order: 18, name: '吉祥寺・国分寺', path: '/' },
                { order: 19, name: '府中・調布', path: '/' },
                { order: 20, name: '立川・八王子', path: '/' },
                { order: 21, name: '町田', path: '/' },
                { order: 22, name: 'その他東京都', path: '/' },
              ]
            },
            {
              id: 'saitama',
              name: '埼玉',
              path: '/',
              city: [
                { order: 1, name: '西川口・蕨', path: '/' },
                { order: 2, name: '大宮・浦和', path: '/' },
                { order: 3, name: '熊谷・東松山', path: '/' },
                { order: 4, name: '越谷・草加', path: '/' },
                { order: 5, name: '春日部・久喜', path: '/' },
                { order: 6, name: '所沢・入間', path: '/' },
                { order: 7, name: '本庄', path: '/' },
                { order: 8, name: '川越', path: '/' },
                { order: 9, name: 'その他埼玉県', path: '/' },
              ]
            },
            {
              id: 'chiba',
              name: '千葉',
              path: '/',
              city: [
                { order: 1, name: '千葉・栄町', path: '/' },
                { order: 2, name: '船橋・西船橋', path: '/' },
                { order: 3, name: '松戸・新松戸', path: '/' },
                { order: 4, name: '市川・本八幡', path: '/' },
                { order: 5, name: '津田沼・幕張', path: '/' },
                { order: 6, name: '市原・姉ヶ崎', path: '/' },
                { order: 7, name: 'その他千葉県', path: '/' },
              ]
            },
            {
              id: 'kanagawa',
              name: '神奈川',
              path: '/',
              city: [
                { order: 1, name: '横浜(関内・曙町)', path: '/' },
                { order: 2, name: '新横浜・鶴見', path: '/' },
                { order: 3, name: '上大岡', path: '/' },
                { order: 4, name: '川崎(堀之内・南町)', path: '/' },
                { order: 5, name: '相模大野・相模原', path: '/' },
                { order: 6, name: '平塚・小田原・藤沢', path: '/' },
                { order: 7, name: '横須賀', path: '/' },
                { order: 8, name: '厚木・大和', path: '/' },
                { order: 9, name: '横その他神奈川県須賀', path: '/' },
              ]
            },
            {
              id: 'ibaraki',
              name: '茨城',
              path: '/',
              city: [
                { order: 1, name: '土浦', path: '/' },
                { order: 2, name: 'つくば', path: '/' },
                { order: 3, name: '取手・牛久', path: '/' },
                { order: 4, name: '水戸', path: '/' },
                { order: 5, name: '日立・ひたちなか', path: '/' },
                { order: 6, name: 'その他茨城県', path: '/' },
              ]
            },
            {
              id: 'tochigi',
              name: '栃木',
              path: '/',
              city: [
                { order: 1, name: '宇都宮', path: '/' },
                { order: 2, name: '小山', path: '/' },
                { order: 3, name: '那須高原', path: '/' },
                { order: 4, name: '足利', path: '/' },
                { order: 5, name: 'その他栃木県', path: '/' },
              ]
            },
            {
              id: 'gunma',
              name: '群馬',
              path: '/',
              city: [
                { order: 1, name: '高崎・前橋', path: '/' },
                { order: 2, name: '伊勢崎', path: '/' },
                { order: 3, name: '太田', path: '/' },
                { order: 4, name: 'その他群馬県', path: '/' },
              ]
            },
          ]
        },
        {
          id: 'koshinetsu',
          region: '甲信越',
          prefecture: [
            { id: 'niigata', name: '新潟', path: '/' },
            { id: 'nagano', name: '長野', path: '/' },
            { id: 'yamanashi', name: '山梨', path: '/' },
          ]
        },
        {
          id: 'hokuriku',
          region: '北陸',
          prefecture: [
            { id: 'ishikawa', name: '石川', path: '/' },
            { id: 'toyama', name: '富山', path: '/' },
            { id: 'hukui', name: '福井', path: '/' },
          ]
        },
        {
          id: 'tokai',
          region: '東海',
          prefecture: [
            { id: 'aichi', name: '愛知', path: '/' },
            { id: 'gihu', name: '岐阜', path: '/' },
            { id: 'sizuoka', name: '静岡', path: '/' },
            { id: 'mie', name: '三重', path: '/' },
          ]
        },
        {
          id: 'kansai',
          region: '関西',
          prefecture: [
            { id: 'osaka', name: '大阪', path: '/' },
            { id: 'hyogo', name: '兵庫', path: '/' },
            { id: 'kyoto', name: '京都', path: '/' },
            { id: 'shiga', name: '滋賀', path: '/' },
            { id: 'nara', name: '奈良', path: '/' },
            { id: 'wakayama', name: '和歌山', path: '/' },
          ]
        },
        {
          id: 'chugoku-shikoku',
          region: '中国･四国',
          prefecture: [
            { id: 'hiroshima', name: '広島', path: '/' },
            { id: 'okayama', name: '岡山', path: '/' },
            { id: 'yamaguchi', name: '山口', path: '/' },
            { id: 'tottori', name: '鳥取', path: '/' },
            { id: 'shimane', name: '島根', path: '/' },
            { id: 'kagawa', name: '香川', path: '/' },
            { id: 'ehime', name: '愛媛', path: '/' },
            { id: 'kochi', name: '高知', path: '/' },
            { id: 'tokushima', name: '徳島', path: '/' },
          ]
        },
        {
          id: 'kyushu-okinawa',
          region: '九州･沖縄',
          prefecture: [
            { id: 'fukuoka', name: '福岡', path: '/' },
            { id: 'saga', name: '佐賀', path: '/' },
            { id: 'nagasaki', name: '長崎', path: '/' },
            { id: 'oita', name: '大分', path: '/' },
            { id: 'kumamoto', name: '熊本', path: '/' },
            { id: 'miyazaki', name: '宮崎', path: '/' },
            { id: 'kagoshima', name: '鹿児島', path: '/' },
            { id: 'okinawa', name: '沖縄', path: '/' },
          ]
        },
      ],
    }
  },
  created() {
    /**
    * 年数を取得
    */
    const date   = new Date()
    this.nowYear = date.getFullYear()
  },
}
</script>

<style scoped>
.footer-common {
  border-color: theme('colors.base');
  background-color: theme('colors.bg-gray');
  @apply relative border-solid border-t-2 border-b-2;
}

.footer-common::before {
  content: "";
  background-color: theme('colors.accent');
  @apply block h-4 top-0 right-0 left-0;
}

.footer-common .wrapper {
  width: theme('width.wrapper-common');
  @apply my-0 mx-auto py-20 px-0;
}

.footer-common .information-list {
  @apply flex items-center -ml-8 -mb-8 pt-8;
}

.footer-common .information-list li {
  @apply pl-8 pb-8;
}

.footer-common .prefecture-list {
  @apply flex flex-wrap;
}

.footer-common .information-list .fz16 {
  font-size: theme('fontSize.fz16');
  line-height: theme('lineHeight.lh16');
}

.footer-common .icon {
  color: theme('colors.accent');
  @apply mr-4;
}

.footer-common .copyright {
  font-size: theme('fontSize.fz12');
  line-height: theme('lineHeight.lh12');
  background-color: theme('colors.accent');
  @apply flex items-center justify-center text-white py-8 px-0;
}

.footer-common .w-50  {
  @apply w-1/2;
}

.footer-common .w-full  {
  @apply w-full;
}

.footer-common hr {
  border-color: theme('colors.border-horizontalrule');
  @apply my-16 border-t-2;
}
</style>
