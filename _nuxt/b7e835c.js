(window.webpackJsonp=window.webpackJsonp||[]).push([[59,44,49],{461:function(e,t,n){var content=n(473);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(24).default)("4778035a",content,!0,{sourceMap:!1})},466:function(e,t,n){"use strict";n.r(t);var r=n(0).a.extend({props:{iconPath:{type:String,required:!1,default:""}}}),o=(n(472),n(10)),c=n(43),l=n.n(c),d=n(332),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("h2",{staticClass:"pageTitle"},[e.iconPath?n("v-icon",{staticClass:"mr-2",attrs:{size:"40"}},[e._v("\n      "+e._s(e.iconPath)+"\n    ")]):e._e(),e._v(" "),e._t("pageHeader")],2)])}),[],!1,null,"c07f27fc",null);t.default=component.exports;l()(component,{VIcon:d.a})},472:function(e,t,n){"use strict";n(461)},473:function(e,t,n){var r=n(23)(!1);r.push([e.i,".header[data-v-c07f27fc]{display:flex;align-items:flex-end;flex-wrap:wrap}.pageTitle[data-v-c07f27fc]{font-size:3rem;color:#4d4d4d;display:flex;align-items:center;line-height:1.35;font-weight:400;margin:0 .5em 0 0}@media screen and (max-width:600px){.pageTitle[data-v-c07f27fc]{font-size:2rem}}",""]),e.exports=r},516:function(e,t,n){var content=n(547);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(24).default)("7243dbec",content,!0,{sourceMap:!1})},545:function(e){e.exports=JSON.parse('{"alertItems":[{"date":"2021-03-01T00:00:00+09:00","icon":"📄","url":{"ja":"https://www.pref.iwate.jp/kurashikankyou/iryou/covid19/1035392.html","en":null},"text":{"ja":"岩手県が不要不急の往来自粛をお願いしている地域","en":"Areas where Iwate Prefecture asks people to refrain from unnecessary traffic."}},{"date":"2021-03-18T00:00:00+09:00","icon":"📄","url":{"ja":"https://www.pref.miyagi.jp/uploaded/attachment/840122.pdf","en":"https://www.pref.miyagi.jp/uploaded/attachment/840229.pdf"},"text":{"ja":"宮城県・仙台市が独自の緊急事態宣言","en":"Miyagi Prefecture and Sendai City declare their own state of emergency"}},{"date":"2021-03-22T00:00:00+09:00","icon":"📄","url":{"ja":"https://www.city.yamagata-yamagata.lg.jp/kakuka/somu/bousai/sogo/kikikanri/dokuzinokinkyuzitaisengen.html","en":null},"text":{"ja":"山形県・山形市が独自の緊急事態宣言","en":"Yamagata Prefecture and Yamagata City Declare Their Own State of Emergency"}},{"date":"2021-03-31T00:00:00+09:00","icon":"📄","url":{"ja":"https://stopcovid19.pref.aomori.lg.jp/","en":"https://stopcovid19.pref.aomori.lg.jp/en/"},"text":{"ja":"青森県の陽性者数が増加傾向 (施設クラスター)","en":"The number of positive cases in Aomori Prefecture is increasing."}},{"date":"2021-04-01T00:00:00+09:00","icon":"📄","url":{"ja":"/cards/monitoring-number-of-confirmed-cases","en":"/en/cards/monitoring-number-of-confirmed-cases"},"text":{"ja":"岩手県の陽性者数が増加傾向 (施設クラスター・スポーツ活動クラスター)","en":"The number of positive cases in Iwate Prefecture is increasing."}},{"date":"2021-04-02T00:00:00+09:00","icon":"📄","url":{"ja":"/cards/number-of-confirmed-cases-by-municipalities/","en":"/en/cards/number-of-confirmed-cases-by-municipalities/"},"text":{"ja":"盛岡市の直近1週間対人口10万人が15を超えた","en":null}}]}')},546:function(e,t,n){"use strict";n(516)},547:function(e,t,n){var r=n(23)(!1);r.push([e.i,".MainPage .Header[data-v-2dbcf1bb]{display:flex;flex-wrap:wrap;align-items:flex-end}@media screen and (max-width:600px){.MainPage .Header[data-v-2dbcf1bb]{flex-direction:column;align-items:baseline}}.MainPage .UpdatedAt[data-v-2dbcf1bb]{font-size:1.4rem;color:#707070;margin-bottom:.2rem}.MainPage .Annotation[data-v-2dbcf1bb]{font-size:1.2rem;color:#707070}@media screen and (min-width:601px){.MainPage .Annotation[data-v-2dbcf1bb]{margin:0 0 0 auto}}",""]),e.exports=r},584:function(e,t,n){"use strict";n.r(t);n(50);var r=n(51),o=n(14),c=n.n(o),l=n(0),d=n(466),f=n(545),m=n(169),h=n(128),v=l.a.extend({components:{PageHeader:d.default},data:function(){var e=this,t=m.lastUpdate,n=f.alertItems.sort((function(a,b){return c()(a.date).isBefore(c()(b.date))?1:-1})).map((function(t){var n,r,o=e.$i18n.locale;return{text:null!==(n=t.text[o])&&void 0!==n?n:t.text.ja,url:null!==(r=t.url[o])&&void 0!==r?r:t.url.ja}}));return{headerItem:{iconPath:r.b,title:this.$t("Common.岩手の最新感染動向")},lastUpdate:t,alertItems:n}},computed:{updatedAt:function(){return Object(h.c)(this.$data.lastUpdate)},formattedDateForDisplay:function(){return"".concat(this.$d(new Date(this.$data.lastUpdate),"dateTime")," JST")}}}),x=(n(546),n(10)),component=Object(x.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"MainPage"},[n("div",{staticClass:"Header mb-3"},[n("page-header",{attrs:{"icon-path":e.headerItem.iconPath},scopedSlots:e._u([{key:"pageHeader",fn:function(){return[e._v("\n        "+e._s(e.headerItem.title)+"\n      ")]},proxy:!0}])}),e._v(" "),n("div",{staticClass:"UpdatedAt"},[n("span",[e._v(e._s(e.$t("SiteTopUpper.最終更新")))]),e._v(" "),n("time",{attrs:{datetime:e.updatedAt}},[e._v(e._s(e.formattedDateForDisplay))])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!["ja"].includes(e.$i18n.locale),expression:"!['ja'].includes($i18n.locale)"}],staticClass:"Annotation"},[n("span",[e._v(e._s(e.$t("SiteTopUpper.注釈")))])])],1),e._v(" "),n("lazy-static-info",{staticClass:"mb-4",attrs:{url:e.localePath("/flow"),text:e.$t("SiteTopUpper.電話相談をどうぞ"),"btn-text":e.$t("SiteTopUpper.相談の手順を見る")}}),e._v(" "),e._l(e.alertItems,(function(e,i){return n("lazy-static-info",{key:i,staticClass:"mb-4",attrs:{url:e.url,text:e.text}})}))],2)}),[],!1,null,"2dbcf1bb",null);t.default=component.exports;installComponents(component,{PageHeader:n(466).default})},621:function(e,t,n){"use strict";n.r(t);var r={head:function(){return{title:this.$t("Common.岩手の最新感染動向")}}},o=n(10),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("site-top-upper"),e._v(" "),n("lazy-cards-tab")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{SiteTopUpper:n(584).default})}}]);