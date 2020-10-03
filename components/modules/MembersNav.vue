<template>
  <ul class="members-nav">
    <li>
      <AppAccentButton
        :isIcon="true"
        :isHead="true"
        name="ログイン"
      >
        <IconKey
          slot="icon"
          class="icon fill-current"
          width="16"
          height="16"
        />
      </AppAccentButton>
    </li>
    <li>
      <AppAccentButton
        :isIcon="true"
        :isHead="true"
        name="会員登録"
      >
        <IconPen
          slot="icon"
          class="icon fill-current"
          width="16"
          height="16"
        />
      </AppAccentButton>
    </li>
  </ul>
</template>

<script>
import AppAccentButton from '~/components/parts/AppAccentButton.vue'
import IconKey from '~/components/icons/IconKey.vue'
import IconPen from '~/components/icons/IconPen.vue'

export default {
  components: {
    AppAccentButton,
    IconKey,
    IconPen,
  },
}
</script>

<style scoped>
.members-nav {
  @apply flex items-center -ml-8 -mb-8;
}

.members-nav li {
  @apply pl-8 pb-8;
}
</style>
