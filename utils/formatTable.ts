import dayjs from 'dayjs'

const headers = [
  { text: '通番', value: '通番' },
  { text: '公表日', value: '公表日' },
  { text: '居住地', value: '居住地' },
  { text: '年代', value: '年代' },
  { text: '性別', value: '性別' },
  { text: '退院※', value: '退院', align: 'center' },
]

type DataType = {
  通番: string
  リリース日: string
  居住地: string | null
  年代: string | null
  性別: '男性' | '女性' | string
  退院: '◯' | null
  url: string | null
  [key: string]: any
}

type TableDataType = {
  通番: DataType['通番']
  公表日: string
  居住地: DataType['居住地']
  年代: DataType['年代']
  性別: DataType['性別'] | '不明'
  退院: DataType['退院']
}

type TableDateType = {
  headers: typeof headers
  datasets: TableDataType[]
}

/**
 * Format for DataTable component
 *
 * @param data - Raw data
 */
export default (data: DataType[]) => {
  const tableDate: TableDateType = {
    headers,
    datasets: [],
  }
  data.forEach((d) => {
    const releaseDate = dayjs(d['リリース日'])
    let tsuban = d['通番']
    if (d.url !== null) {
      tsuban = `<a href="${d.url}" target="_blank">${d['通番']}</a>`
    }
    const TableRow: TableDataType = {
      通番: tsuban ?? '不明',
      公表日: releaseDate.isValid() ? releaseDate.format('M/D') : '不明',
      居住地: d['居住地'] ?? '調査中',
      年代: d['年代'] ?? '不明',
      性別: d['性別'] ?? '不明',
      退院: d['退院'],
    }
    tableDate.datasets.push(TableRow)
  })
  tableDate.datasets.sort(
    (a, b) => dayjs(a.公表日).unix() - dayjs(b.公表日).unix()
  )
  tableDate.datasets.reverse()
  return tableDate
}
