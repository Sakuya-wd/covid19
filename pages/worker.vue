<template>
  <div class="Worker">
    <page-header class="mb-3" :icon-path="headerItem.iconPath">
      <template #pageHeader>
        {{ headerItem.title }}
      </template>
    </page-header>
    <static-card>
      <h3>
        <app-link
          to="https://www.pref.iwate.jp/kurashikankyou/iryou/covid19/1028772.html"
          :icon-size="24"
          >{{ $t('事業者の皆様へのお知らせ') }}
        </app-link>
      </h3>
      <p>
        {{
          $t(
            '岩手県及び国の新型コロナウイルス感染症に関する支援策の情報をまとめています。'
          )
        }}
      </p>
    </static-card>
    <static-card>
      <h3>
        <app-link
          to="https://www.pref.iwate.jp/kurashikankyou/iryou/covid19/category_guideline.html"
          :icon-size="24"
          >{{ $t('業種ごとの感染拡大予防ガイドライン') }}
        </app-link>
      </h3>
      <p>
        {{
          $t(
            '新型コロナウイルス感染拡大防止のため、業種ごとに関係団体の情報を参考としてください。'
          )
        }}
      </p>
    </static-card>
    <static-card>
      <h3>
        <app-link
          to="https://www.pref.iwate.jp/kurashikankyou/iryou/seido/1031487.html"
          :icon-size="24"
          >{{
            $t(
              '岩手県新型コロナウイルス感染症対応従事者慰労金交付事業のお知らせ'
            )
          }}
        </app-link>
      </h3>
      <p>
        {{
          $t(
            '新型コロナウイルス感染症に対する医療提供に関し、岩手県から役割を設定された医療機関等に勤務し患者と接する医療従事者や職員に対し、慰労金として最大20万円を給付します。'
          )
        }}
      </p>
    </static-card>
  </div>
</template>

<script lang="ts">
import { mdiDomain } from '@mdi/js'
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'

import AppLink from '@/components/AppLink.vue'
import PageHeader from '@/components/PageHeader.vue'
import StaticCard from '@/components/StaticCard.vue'

export default Vue.extend({
  name: 'Worker',
  components: {
    PageHeader,
    StaticCard,
    AppLink,
  },
  data() {
    return {
      headerItem: {
        iconPath: mdiDomain,
        title: this.$t('SideNavigation.a[6]') as string,
      },
    }
  },
  head(): MetaInfo {
    return {
      title: this.$t('SideNavigation.a[6]') as string,
    }
  },
})
</script>
