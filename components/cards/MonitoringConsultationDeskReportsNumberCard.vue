<template>
  <v-col
    id="MonitoringConsultationDeskReportsNumberCard"
    cols="12"
    :md="md"
    class="DataCard"
  >
    <client-only>
      <time-bar-chart
        :title="$t('MonitoringConsultationDeskReportsNumberCard.title')"
        title-id="monitoring-number-of-reports-to-covid19-consultation-desk"
        chart-id="monitoring-consultation-desk-report-chart"
        :chart-data="querentsGraph"
        :date="Data.querents.date"
        :unit="$t('件.reports')"
      >
        <template #notes>
          <ul>
            <li
              v-for="(note, i) in $t(
                'MonitoringConsultationDeskReportsNumberCard.notes'
              )"
              :key="i"
            >
              {{ note }}
            </li>
          </ul>
        </template>
      </time-bar-chart>
      <slot name="breadCrumb" />
    </client-only>
  </v-col>
</template>

<script>
import TimeBarChart from '@/components/TimeBarChart.vue'
import Data from '@/data/data.json'
import formatGraph from '@/utils/formatGraph'

export default {
  components: {
    TimeBarChart,
  },
  props: {
    md: {
      type: String,
      default: '6',
    },
  },
  data() {
    // 相談件数
    const querentsGraph = formatGraph(Data.querents.data)

    return {
      Data,
      querentsGraph,
    }
  },
}
</script>
