(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{331:function(t,e,n){"use strict";n.r(e);var o=n(36),l=n(0),r=n(344),c=l.a.extend({props:{expansionPanelText:{type:String,required:!0}},data:function(){return{showDetails:!1,mdiChevronRight:o.d}},mounted:function(){this.showDetails=!0},methods:{toggleDetails:function(){r.a.$emit(r.b,{dataView:this.$parent})}}}),d=(n(338),n(8)),_=n(32),f=n.n(_),y=n(581),x=n(582),v=n(583),h=n(584),m=n(321),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return this.$slots.notes?n("div",{staticClass:"NotesExpansionPanel"},[t.showDetails?n("v-expansion-panels",{attrs:{flat:""}},[n("v-expansion-panel",[n("v-expansion-panel-header",{style:{transition:"none"},attrs:{"hide-actions":!0},on:{click:t.toggleDetails}},[n("div",{staticClass:"v-expansion-panel-header__icon grey--text text--darken-2"},[n("v-icon",{attrs:{left:"",size:"24"}},[t._v(t._s(t.mdiChevronRight))])],1),t._v(" "),n("span",{staticClass:"expansion-panel-text grey--text text--darken-2"},[t._v("\n          "+t._s(t.expansionPanelText)+"\n        ")])]),t._v(" "),n("v-expansion-panel-content",{staticClass:"grey--text text--darken-2"},[t._t("notes")],2)],1)],1):[t._t("notes")]],2):t._e()}),[],!1,null,null,null);e.default=component.exports;f()(component,{VExpansionPanel:y.a,VExpansionPanelContent:x.a,VExpansionPanelHeader:v.a,VExpansionPanels:h.a,VIcon:m.a})},334:function(t,e,n){var content=n(339);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("56069591",content,!0,{sourceMap:!1})},338:function(t,e,n){"use strict";n(334)},339:function(t,e,n){(e=n(19)(!1)).push([t.i,".v-expansion-panels{color:#4d4d4d!important}.v-expansion-panel-header{padding:5px 0}.v-expansion-panel-header__icon{margin-left:-5px!important}.v-expansion-panel-header__icon .v-icon--left{margin-right:5px}.v-expansion-panel--active .v-expansion-panel-header__icon .v-icon{transform:rotate(90deg)!important}.expansion-panel-text{font-size:1.2rem}",""]),t.exports=e},404:function(t,e,n){"use strict";n.r(e);n(59),n(72),n(61);var o=n(0),l=n(332),r=n(333),c=n(331),d=o.a.extend({components:{DataView:l.default,DataViewDataSetPanel:r.default,NotesExpansionPanel:c.default},props:{title:{type:String,default:""},titleId:{type:String,default:""},chartData:{type:Object,default:function(){}},date:{type:String,default:""},info:{type:Object,default:function(){}}},mounted:function(){var t=this.$refs.displayedTable.$el.querySelectorAll("table");Array.prototype.slice.call(t,0).forEach((function(table){table.setAttribute("tabindex","0")}))},methods:{customSort:function(t,e,n){return t.sort((function(a,b){var t;return t="label"===e[0]?a.ruby<b.ruby?-1:1:a[e[0]]<b[e[0]]?-1:1,n[0]?-1*t:t})),t}}}),_=n(8),f=n(32),y=n.n(f),x=n(589),component=Object(_.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("data-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date},scopedSlots:t._u([{key:"notes",fn:function(){return[n("notes-expansion-panel",{staticClass:"DataView-ExpansionPanel",attrs:{"expansion-panel-text":t.$t("Common.注")},scopedSlots:t._u([{key:"notes",fn:function(){return[t._t("notes")]},proxy:!0}],null,!0)})]},proxy:!0},{key:"dataSetPanel",fn:function(){return[n("data-view-data-set-panel",{attrs:{title:t.title,"l-text":t.info.lText,"s-text":t.info.sText,unit:t.info.unit}})]},proxy:!0}])},[n("v-data-table",{ref:"displayedTable",staticClass:"cardTable",attrs:{headers:t.chartData.headers,items:t.chartData.datasets,"items-per-page":-1,"hide-default-footer":!0,height:580,"fixed-header":!0,"mobile-breakpoint":0,"custom-sort":t.customSort}})],1)}),[],!1,null,null,null);e.default=component.exports;y()(component,{NotesExpansionPanel:n(331).default,DataViewDataSetPanel:n(333).default,DataView:n(332).default}),y()(component,{VDataTable:x.a})},444:function(t){t.exports=JSON.parse('{"date":"2021-01-08T15:18:27+09:00","datasets":{"date":"2021-01-08T15:18:27+09:00","data":[{"code":"032018","area":"岩手県","label":"盛岡市","ruby":"もりおかし","count":160,"count_per_population":"0.055"},{"code":"032026","area":"岩手県","label":"宮古市","ruby":"みやこし","count":27,"count_per_population":"0.053"},{"code":"032034","area":"岩手県","label":"大船渡市","ruby":"おおふなとし","count":1,"count_per_population":"0.003"},{"code":"032051","area":"岩手県","label":"花巻市","ruby":"はなまきし","count":12,"count_per_population":"0.013"},{"code":"032069","area":"岩手県","label":"北上市","ruby":"きたかみし","count":11,"count_per_population":"0.012"},{"code":"032077","area":"岩手県","label":"久慈市","ruby":"くじし","count":8,"count_per_population":"0.024"},{"code":"032085","area":"岩手県","label":"遠野市","ruby":"とおのし","count":5,"count_per_population":"0.020"},{"code":"032093","area":"岩手県","label":"一関市","ruby":"いちのせきし","count":25,"count_per_population":"0.022"},{"code":"032107","area":"岩手県","label":"陸前高田市","ruby":"りくぜんたかたし","count":0,"count_per_population":"0.000"},{"code":"032115","area":"岩手県","label":"釜石市","ruby":"かまいしし","count":7,"count_per_population":"0.021"},{"code":"032131","area":"岩手県","label":"二戸市","ruby":"にのへし","count":0,"count_per_population":"0.000"},{"code":"032140","area":"岩手県","label":"八幡平市","ruby":"はちまんたいし","count":1,"count_per_population":"0.004"},{"code":"032158","area":"岩手県","label":"奥州市","ruby":"おうしゅうし","count":6,"count_per_population":"0.005"},{"code":"032166","area":"岩手県","label":"滝沢市","ruby":"たきざわし","count":36,"count_per_population":"0.064"},{"code":"033014","area":"岩手県","label":"雫石町","ruby":"しずくいしちょう","count":75,"count_per_population":"0.478"},{"code":"033022","area":"岩手県","label":"葛巻町","ruby":"くずまきまち","count":1,"count_per_population":"0.018"},{"code":"033031","area":"岩手県","label":"岩手町","ruby":"いわてまち","count":1,"count_per_population":"0.008"},{"code":"033219","area":"岩手県","label":"紫波町","ruby":"しわちょう","count":4,"count_per_population":"0.012"},{"code":"033227","area":"岩手県","label":"矢巾町","ruby":"やはばちょう","count":8,"count_per_population":"0.029"},{"code":"033669","area":"岩手県","label":"西和賀町","ruby":"にしわがまち","count":2,"count_per_population":"0.039"},{"code":"033812","area":"岩手県","label":"金ケ崎町","ruby":"かねがさきちょう","count":0,"count_per_population":"0.000"},{"code":"034029","area":"岩手県","label":"平泉町","ruby":"ひらいずみちょう","count":0,"count_per_population":"0.000"},{"code":"034410","area":"岩手県","label":"住田町","ruby":"すみたちょう","count":1,"count_per_population":"0.020"},{"code":"034614","area":"岩手県","label":"大槌町","ruby":"おおつちちょう","count":0,"count_per_population":"0.000"},{"code":"034827","area":"岩手県","label":"山田町","ruby":"やまだまち","count":0,"count_per_population":"0.000"},{"code":"034835","area":"岩手県","label":"岩泉町","ruby":"いわいずみちょう","count":0,"count_per_population":"0.000"},{"code":"034843","area":"岩手県","label":"田野畑村","ruby":"たのはたむら","count":0,"count_per_population":"0.000"},{"code":"034851","area":"岩手県","label":"普代村","ruby":"ふだいむら","count":0,"count_per_population":"0.000"},{"code":"035017","area":"岩手県","label":"軽米町","ruby":"かるまいまち","count":1,"count_per_population":"0.012"},{"code":"035033","area":"岩手県","label":"野田村","ruby":"のだむら","count":0,"count_per_population":"0.000"},{"code":"035068","area":"岩手県","label":"九戸村","ruby":"くのへむら","count":0,"count_per_population":"0.000"},{"code":"035076","area":"岩手県","label":"洋野町","ruby":"ひろのちょう","count":9,"count_per_population":"0.061"},{"code":"035246","area":"岩手県","label":"一戸町","ruby":"いちのへまち","count":0,"count_per_population":"0.000"},{"code":"999999","area":"県外","label":"県外","ruby":"けんがい","count":6,"count_per_population":null}]}}')},482:function(t,e,n){"use strict";n.r(e);n(60),n(35);var o=n(12),l=n.n(o),r=n(444),c={components:{ConfirmedCasesByMunicipalitiesTable:n(404).default},data:function(){var t=this,e={headers:[],datasets:[]};e.headers=[{text:this.$t("市町村"),value:"label"},{text:this.$t("ふりがな"),value:"ruby"},{text:this.$t("Common.陽性者数"),value:"count",align:"end"},{text:this.$t("陽性者数/人口"),value:"count_per_population",align:"end"}],r.datasets.data.sort((function(a,b){return a.code===b.code?0:a.code>b.code?1:-1}));var n=function(t){return null===t?"":"".concat(t,"%")};e.datasets=r.datasets.data.filter((function(t){return"小計"!==t.label})).map((function(e){return{area:t.$t(e.area),ruby:t.$t(e.ruby),label:t.$t(e.label),count:e.count,count_per_population:n(e.count_per_population)}}));var o=l()(r.date).format("YYYY/MM/DD HH:mm"),c={sText:this.$t("{date}の累計",{date:this.$d(new Date(r.datasets.date),"dateWithoutYear")})};return{Data:r,date:o,municipalitiesTable:e,info:c}}},d=n(8),_=n(32),f=n.n(_),y=n(587),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"DataCard",attrs:{id:"ConfirmedCasesByMunicipalitiesCard",cols:"12",md:"6"}},[n("client-only",[n("confirmed-cases-by-municipalities-table",{attrs:{title:t.$t("陽性患者数（市町村別）"),"title-id":"number-of-confirmed-cases-by-municipalities","chart-data":t.municipalitiesTable,date:t.date,info:t.info},scopedSlots:t._u([{key:"notes",fn:function(){return[n("ul",[n("li",[t._v("\n            "+t._s(t.$t("前日までに報告された陽性者の居住地を元にした累計値"))+"\n          ")]),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("意向により居住地が公表されない場合は累計に含まれない"))+"\n          ")]),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("例えば、県外や他地域在住であるが、盛岡市の検査で陽性になった場合、盛岡市として集計される場合がある"))+"\n          ")]),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("陽性者数/人口 は市町村の人口(令和2年10月1日現在)に対する陽性者数の割合"))+"\n          ")])])]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{ConfirmedCasesByMunicipalitiesTable:n(404).default}),f()(component,{VCol:y.a})}}]);