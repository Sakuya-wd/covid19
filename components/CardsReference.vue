<template>
  <cards-lazy-row :rows="rows" />
</template>

<script lang="ts">
/* eslint-disable simple-import-sort/imports -- ブラウザでの表示順に合わせて各 card の component を import する */
import Vue from 'vue'

import CardsLazyRow from '@/components/CardsLazyRow.vue'

// 最新のお知らせ
const WhatsNewCard = () => import('@/components/cards/WhatsNewCard.vue')
// 自主公表
const SelfDisclosuresCard = () =>
  import('@/components/cards/SelfDisclosuresCard.vue')
// 受診・相談センター 受付件数
const MonitoringConsultationDeskReportsNumberCard = () =>
  import('@/components/cards/MonitoringConsultationDeskReportsNumberCard.vue')
// 一般相談 受付件数
const TelephoneAdvisoryReportsNumberCard = () =>
  import('@/components/cards/TelephoneAdvisoryReportsNumberCard.vue')

export default Vue.extend({
  components: {
    CardsLazyRow,
  },
  data() {
    return {
      rows: [
        [WhatsNewCard, SelfDisclosuresCard],
        [
          MonitoringConsultationDeskReportsNumberCard,
          TelephoneAdvisoryReportsNumberCard,
        ],
      ],
    }
  },
})
</script>
