<template>
  <v-col id="ConfirmedCasesAttributesCard" cols="12" :md="md" class="DataCard">
    <client-only>
      <data-table
        :title="$t('ConfirmedCasesAttributesCard.title')"
        :title-id="'attributes-of-confirmed-cases'"
        :chart-data="patientsTable"
        :chart-option="{}"
        :date="Data.patients.date"
        :info="sumInfoOfPatients"
        :custom-sort="customSort"
      >
        <template #notes>
          <ul>
            <li
              v-for="note in $t('ConfirmedCasesAttributesCard.notes')"
              :key="note"
            >
              {{ note }}
            </li>
          </ul>
        </template>
      </data-table>
      <slot name="breadCrumb" />
    </client-only>
  </v-col>
</template>

<script>
import dayjs from 'dayjs'

import DataTable from '@/components/DataTable.vue'
import Data from '@/data/data.json'
import { getDayjsObject } from '@/utils/formatDate'
import formatTable from '@/utils/formatTable'

export default {
  components: {
    DataTable,
  },
  props: {
    md: {
      type: String,
      default: '6',
    },
  },
  data() {
    // 感染者数
    const patientsTable = formatTable(Data.patients.data)
    // 日付
    const lastDay = Data.patients.data[Data.patients.data.length - 1].確定日
    const date = this.$d(getDayjsObject(lastDay).toDate(), 'dateWithoutYear')

    const sumInfoOfPatients = {
      lText: `${Data.patients.data[Data.patients.data.length - 1].id}`,
      sText: this.$t('Common.{date}の累計', { date }),
      unit: this.$t('Common.人'),
    }

    // 陽性者の属性 ヘッダー翻訳
    for (const header of patientsTable.headers) {
      header.text = this.$t(header.value)
    }

    // 陽性者の属性 中身の翻訳
    for (const row of patientsTable.datasets) {
      row['陽性確定日'] = dayjs(date).isValid()
        ? this.$d(dayjs(row['陽性確定日']).toDate(), 'dateWithoutYear')
        : '不明'

      // 相対発症日・無症状・不明
      if (row['発症日'] === '無症状') {
        row['発症日'] = this.$t('ConfirmedCasesAttributesCard.table.無症状')
      } else if (row['発症日'] === '不明') {
        row['発症日'] = this.$t('ConfirmedCasesAttributesCard.table.不明')
      } else {
        const d = row['発症日'].replace('日前', '')
        row[
          '発症日'
        ] = this.$tc('ConfirmedCasesAttributesCard.table.daysbefore', d, { d })
      }

      // 居住地
      row['居住地'] = this.getTranslatedWording(row['居住地'])

      // 年代
      if (row['年代'].substr(-1, 1) === '代') {
        const age = row['年代'].substring(0, 2)
        row['年代'] = this.$t('ConfirmedCasesAttributesCard.table.{age}代', {
          age,
        })
      } else {
        row['年代'] = this.$t(
          `ConfirmedCasesAttributesCard.table.${row['年代']}`
        )
      }

      // 接触歴
      if (row['接触歴'] === '判明') {
        row['接触歴'] = ''
      } else {
        row['接触歴'] = this.$t('ConfirmedCasesAttributesCard.table.無')
      }
    }

    return {
      Data,
      patientsTable,
      sumInfoOfPatients,
    }
  },
  methods: {
    getTranslatedWording(value) {
      if (
        value === '-' ||
        value === '‐' ||
        value === '―' ||
        value === '－' ||
        value === null
      ) {
        // 翻訳しようとしている文字列が以下のいずれかだった場合、翻訳しない
        // - 全角のハイフン
        // - 半角のハイフン
        // - 全角のダッシュ
        // - 全角ハイフンマイナス
        // - null
        return value
      }

      return this.$t(value)
    },
    customSort(items, index, isDesc) {
      const lt10 = this.$t(
        'ConfirmedCasesAttributesCard.table.10歳未満'
      ).toString()
      const lt90 = this.$t(
        'ConfirmedCasesAttributesCard.table.90歳以上'
      ).toString()
      const unknown = this.$t(
        'ConfirmedCasesAttributesCard.table.不明'
      ).toString()
      const investigating = this.$t(
        'ConfirmedCasesAttributesCard.table.調査中'
      ).toString()
      items.sort((a, b) => {
        // 両者が等しい場合は 0 を返す
        if (a[index[0]] === b[index[0]]) {
          return 0
        }

        let comparison = 0

        // '10歳未満' < '10代' ... '80代' < '90歳以上' となるようにソートする
        // 「10歳未満」同士を比較する場合、と「90歳以上」同士を比較する場合、更にそうでない場合に場合分け
        if (
          index[0] === '年代' &&
          (a[index[0]] === lt10 || b[index[0]] === lt10)
        ) {
          comparison = a[index[0]] === lt10 ? -1 : 1
        } else if (
          index[0] === '年代' &&
          (a[index[0]] === lt90 || b[index[0]] === lt90)
        ) {
          comparison = a[index[0]] === lt90 ? 1 : -1
        } else {
          comparison = String(a[index[0]]) < String(b[index[0]]) ? -1 : 1
        }

        // 公表日のソートを正しくする
        if (index[0] === '陽性確定日') {
          // 2/29と3/1が正しくソートできないため、以下は使えない。
          // 公表日に年まで含む場合は以下が使用可能になり、逆に今使用しているコードが使用不可能となる。
          // comparison = new Date(a[index[0]]) < new Date(b[index[0]]) ? -1 : 1

          const aDate = a[index[0]].split('/').map((d) => {
            return parseInt(d)
          })
          const bDate = b[index[0]].split('/').map((d) => {
            return parseInt(d)
          })
          comparison = aDate[1] > bDate[1] ? 1 : -1
          if (aDate[0] > bDate[0]) {
            comparison = 1
          } else if (aDate[0] < bDate[0]) {
            comparison = -1
          }
        }

        // 「調査中」は年代に限らず、居住地にも存在するので、年代ソートの外に置いている。
        // 内容としては、「不明」の次に高い(大きい)ものとして扱う。
        // 日本語の場合、「調査中」は「不明」より低い(小さい)ものとして扱われるが、
        // 他言語の場合はそうではないため、ここで統一している。
        if (a[index[0]] === investigating || b[index[0]] === investigating) {
          comparison = a[index[0]] === investigating ? 1 : -1
        }

        // 「不明」は年代に限らず、性別にも存在するので、年代ソートの外に置いている。
        // 内容としては一番高い(大きい)ものとして扱う。
        if (a[index[0]] === unknown || b[index[0]] === unknown) {
          comparison = a[index[0]] === unknown ? 1 : -1
        }

        return isDesc[0] ? comparison * -1 : comparison
      })
      return items
    },
  },
}
</script>
