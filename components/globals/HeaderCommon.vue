<template>
  <header class="header-common">

    <div style="display: flex;height: 25px;align-items: center;position:absolute;top:0;left:0;right:0;">
      <HeaderInformation>
        <span slot="shop">
          {{ shop }}
        </span>
        <span slot="girl">
          {{ girl }}
        </span>
        <span slot="reviews">
          {{ reviews }}
        </span>
      </HeaderInformation>

      <div class="header-area-list">
        <AreaList :class="{ 'region-list' : isTextChange }">
          <li slot="item" v-for="regionLink in regionLinks"
              :key="regionLink.name"
          >
            <a :href="regionLink.path">
              {{ regionLink.name }}
            </a>
          </li>
        </AreaList>
      </div>
    </div>

    <div class="wrapper">
      <ul class="header-side-menu">
        <li>
          <NoUnderEighteen />
        </li>
        <li>
          <form action="">
            <FreeWordSearch :isWidth="isWidth"
                            :placeholder="placeholder"
            />
          </form>
        </li>
        <li>
          <MembersNav />
        </li>
      </ul>

      <HeadPrimary>
        <a slot="image" class="image" href="/">
          <img src="~assets/images/logo-purelovers.png"
              alt="風俗情報ぴゅあらば"
              width="164"
              height="63"
          >
        </a>
        <template slot="title">
          【関東】の<br>
          風俗店情報
        </template>
        <p slot="lead" class="lead">
          wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
          h1リード文が入ります。h1リード文が入ります。h1リード文が入ります。h1リード文が入ります。h1リード文が入ります。h1リード文が入ります。h1リード文が入ります。h1リード文が入ります。
        </p>
      </HeadPrimary>

    </div>

    <HeaderGuideNav>
      <li slot="navItem"
          v-for="link in navLinks"
          :key="link.name"
      >
        <template v-if="link.name === 'top'">
          <a :href="link.path">
            <IconHome class="icon fill-current" width="30" height="28" />
          </a>
        </template>

        <template v-else>
          <a :href="link.path"
              v-if="!link.items"
              class="aaa"
          >
            {{ link.name }}
          </a>
          <span v-else
                class="aaa"
                @mouseover="mouseOver"
                @mouseleave="mouseLeave"
          >
              {{ link.name }}
              <IconArrow class="icon fill-current" width="10" height="13" />

              <ul :class="isOpen">
                <li 
                    v-for="item in link.items"
                    :key="item.name"
                >
                  <a :href="item.path">
                    <IconArrowAngle class="icon fill-current" width="10" height="13" />
                    <span>
                        {{ item.name }}
                    </span>
                  </a>
                </li>
              </ul>
          </span>
        </template>
      </li>
    </HeaderGuideNav>
    
  </header>
</template>

<script>
import HeaderGuideNav from '~/components/globals/HeaderGuideNav.vue'
import HeaderGuideNavDrop from '~/components/globals/HeaderGuideNavDrop.vue'
import HeaderInformation from '~/components/globals/HeaderInformation.vue'
import FreeWordSearch from '~/components/modules/FreeWordSearch.vue'
import MembersNav from '~/components/modules/MembersNav.vue'
import NoUnderEighteen from '~/components/modules/NoUnderEighteen.vue'
import HeadPrimary from '~/components/parts/HeadPrimary.vue'
import AppButton from '~/components/parts/AppButton.vue'
import AppAccentButton from '~/components/parts/AppAccentButton.vue'
import IconHome from '~/components/icons/IconHome.vue'
import IconKey from '~/components/icons/IconKey.vue'
import IconArrow from '~/components/icons/IconArrow.vue'
import IconArrowAngle from '~/components/icons/IconArrowAngle.vue'
import AreaList from '~/components/globals/AreaList.vue'

export default {
  components: {
    HeaderGuideNav,
    HeaderGuideNavDrop,
    HeaderInformation,
    FreeWordSearch,
    MembersNav,
    NoUnderEighteen,
    HeadPrimary,
    AppButton,
    IconHome,
    IconKey,
    IconArrow,
    IconArrowAngle,
    AreaList,
  },
  data() {
    return {
      isTextChange: true,
      isHead: true,
      isIcon: true,
      isWidth: true,
      isOpen: false,
      placeholder: 'フリーワード検索',
      link: '',
      shop: '123',
      girl: '123,345',
      reviews: '123,456,789',
      navLinks: [
        {
          id: 'top',
          name: 'トップ',
          path: '/',
        },
        {
          name: 'お店検索',
          path: '/',
          items: [
            {
              name: 'Service1',
              path: '/',
            },
          ],
        },
        {
          name: '女の子検索',
          path: '/',
          items: [
            {
              name: 'Service2',
              path: '/',
            },
            {
              name: 'Service3',
              path: '/',
            },
            {
              name: 'Service4',
              path: '/',
            },
            {
              name: 'Service5',
              path: '/',
            },
          ],
        },
        {
          name: 'クーポン',
          path: '/',
          items: [
            {
              name: 'Service6',
              path: '/',
            },
            {
              name: 'Service7',
              path: '/',
            },
            {
              name: 'Service8',
              path: '/',
            },
          ],
        },
        {
          name: 'ランキング',
          path: '/',
        },
        {
          name: '口コミ',
          path: '/',
        },
        {
          name: '写メ日記',
          path: '/',
        },
        {
          name: '動画･画像･マンガ',
          path: '/',
          items: [
            {
              name: 'Service9',
              path: '/',
            },
            {
              name: 'Service10',
              path: '/',
            },
          ],
        },
      ],
      activeItem: '',
      selectItem: '',
      regionLinks: [
        { id: 'hokkaido-tohoku', name: '北海道･東北', path: '/' },
        { id: 'kanto', name: '関東', path: '/' },
        { id: 'hokutiku', name: '北陸', path: '/' },
        { id: '', name: '甲信越', path: '/' },
        { id: 'hokkaido-tohoku', name: '東海', path: '/' },
        { id: 'hokkaido-tohoku', name: '関西', path: '/' },
        { id: 'hokkaido-tohoku', name: '中国･四国', path: '/' },
        { id: 'hokkaido-tohoku', name: '九州･沖縄', path: '/' },
      ],
    }
  },
  methods: {
    // mouseover: function () {
    //     this.isOpen = true;
    // },
    // mouseleave: function () {
    //     this.isOpen = false;
    // },
    mouseOver: function(){
      this.isOpen = true
    },
    mouseLeave: function(){
      this.isOpen = false;
    }
    /**
    *スライド遷移イベント
    * @parm {number} index クリックされたタブの番号
    */
    // mouseover() {
    //   this.isOpen = true
    // },
    // mouseleave() {
    //   this.isOpen = false
    // },
  },
}
</script>

<style scoped>
.isOpen {
  display: block;
}

.header-common .region-list > li > a {
  color: #fff;
}

.header-common .region-list > li > .current-page {
  color: theme('colors.accent');
}

.header-common {
  /* min-height: 190px; */
  border-top-width: 5px;
  border-color: theme('colors.base');
  @apply relative border-solid bg-white;
}

.header-common .header-area-list {
  width: 45.57%;
  height: 25px;
  /* background-color: #333333; */
  /* display: inline-block; */
  /* position: absolute; */
  /* top: 0; */
  /* right: 0; */
  padding: 0 40px;
  @apply relative;
}

.header-common .header-area-list::before {
  content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: -1.64px;
    left: 0;
    display: inline-block;
    background: #333;
    transform: perspective(0.9em) rotateX(-2deg);
    transform-origin: top right;
}

.header-common .wrapper {
  width: theme('width.wrapper-common');
  @apply relative my-0 mx-auto pt-0 py-24 px-0;
}

.header-common form {
  width: 192px;
  height: 30px;
}

.header-common .region-list {
  @apply relative flex items-center text-white z-10;
}

.header-common .region-list li {
  @apply py-4;
}

.header-common .region-list a {
  font-size: theme('fontSize.fz12');
  @apply px-4 text-white border-solid border-r-1 border-white cursor-pointer ;
}

.header-common .region-list a.active {
  color: theme('colors.accent');
}

.header-common .region-list a:hover {
  color: theme('colors.accent');
}

.header-common .region-list li:last-child > a {
  @apply border-r-0 ;
}

.header-common .header-side-menu {
  top: 50px;
  @apply absolute right-0 flex items-center -ml-8 -mb-8;
}

.header-common .header-side-menu li {
  @apply pl-8 pb-8;
}
</style>
