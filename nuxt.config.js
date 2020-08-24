
export default {
  mode: 'universal',
  // target: 'server',
  /*
  ** headタグ、OGPなどサイト全体の共通設定
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** プログレスバーの設定
  */
  loading: { color: '#fff' },
  /*
  ** グローバルCSSの定義
  */
  css: [
  ],
  /*
  ** プラグインの定義
  */
  plugins: [
    { src: '~plugins/vue-dropdown-menu', mode: 'client' },
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** ビルドモジュールの定義
  */
  buildModules: [
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** モジュールの定義
  */
  modules: [
    'nuxt-purgecss',
  ],
  /*
  ** CSS圧縮の設定
  */
  purgeCSS: {
    enabled: ({ isDev, isClient }) => (!isDev && isClient),
    paths: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js'
    ],
    styleExtensions: ['.css'],
    whitelist: ['body', 'html', 'nuxt-progress'],
    extractors: [
      {
        extractor: content => content.match(/[A-z0-9-:\\/]+/g) || [],
        extensions: ['html', 'vue', 'js']
      }
    ]
  },
  /*
  ** ビルド時の設定
  */
  build: {
  }
}
