(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{351:function(t,e,n){var content=n(379);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("4778035a",content,!0,{sourceMap:!1})},359:function(t,e,n){"use strict";n.r(e);var r=n(0).a.extend({props:{iconPath:{type:String,required:!1,default:""}}}),o=(n(378),n(9)),l=n(32),c=n.n(l),d=n(322),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("h2",{staticClass:"pageTitle"},[this.iconPath?e("v-icon",{staticClass:"mr-2",attrs:{size:"40"}},[this._v("\n      "+this._s(this.iconPath)+"\n    ")]):this._e(),this._v(" "),this._t("pageHeader")],2)])}),[],!1,null,"c07f27fc",null);e.default=component.exports;c()(component,{VIcon:d.a})},378:function(t,e,n){"use strict";n(351)},379:function(t,e,n){(e=n(19)(!1)).push([t.i,".header[data-v-c07f27fc]{display:flex;align-items:flex-end;flex-wrap:wrap}.pageTitle[data-v-c07f27fc]{font-size:3rem;color:#4d4d4d;display:flex;align-items:center;line-height:1.35;font-weight:400;margin:0 .5em 0 0}@media screen and (max-width:600px){.pageTitle[data-v-c07f27fc]{font-size:2rem}}",""]),t.exports=e},469:function(t,e,n){var content=n(503);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("00e7d62b",content,!0,{sourceMap:!1})},501:function(t){t.exports=JSON.parse('{"alertItems":[{"date":"2021-01-20T00:00:00+09:00","icon":"📄","url":{"ja":"http://www.city.morioka.iwate.jp/kenkou/kenko/1031971/1032075/1033980.html","en":""},"text":{"ja":"「理容 いこい」(盛岡市西青山)を1月6日(水)〜1月17日(日)に利用した方は盛岡市保健所(019-603-8308)に連絡を","en":"Please contact Morioka City Public Health Center (019-603-8308) if you used \\"理容 いこい (Barber Ikoi)\\" (Nishi Aoyama, Morioka City) from January 6 (Wed.) to January 17 (Sun.)."}},{"date":"2021-01-24T00:00:00+09:00","icon":"📄","url":{"ja":"https://www.pref.iwate.jp/kurashikankyou/iryou/covid19/1035392.html","en":null},"text":{"ja":"【緊急事態宣言】栃木県、埼玉県、千葉県、東京都、神奈川県、岐阜県、愛知県、京都府、大阪府、兵庫県、福岡県 との不要不急の往来は自粛、【感染が拡大している地域】北海道（札幌市）、福島県、群馬県、茨城県、静岡県、三重県、長崎県、熊本県、宮崎県、沖縄県 は慎重に判断","en":null}}]}')},502:function(t,e,n){"use strict";n(469)},503:function(t,e,n){(e=n(19)(!1)).push([t.i,".MainPage .Header[data-v-376c5cca]{display:flex;flex-wrap:wrap;align-items:flex-end}@media screen and (max-width:600px){.MainPage .Header[data-v-376c5cca]{flex-direction:column;align-items:baseline}}.MainPage .UpdatedAt[data-v-376c5cca]{font-size:1.4rem;color:#707070;margin-bottom:.2rem}.MainPage .Annotation[data-v-376c5cca]{font-size:1.2rem;color:#707070}@media screen and (min-width:601px){.MainPage .Annotation[data-v-376c5cca]{margin:0 0 0 auto}}",""]),t.exports=e},588:function(t,e,n){"use strict";n.r(e);n(35);var r=n(36),o=n(12),l=n.n(o),c=n(0),d=n(359),f=n(501),m=n(164),h=n(123),v=c.a.extend({components:{PageHeader:d.default},data:function(){var t=this,e=m.lastUpdate,n=f.alertItems.sort((function(a,b){return l()(a.date).isBefore(l()(b.date))?1:-1})).map((function(e){var n,r,o=t.$i18n.locale;return{text:null!==(n=e.text[o])&&void 0!==n?n:e.text.ja,url:null!==(r=e.url[o])&&void 0!==r?r:e.url.ja}}));return{headerItem:{iconPath:r.b,title:this.$t("Common.岩手の最新感染動向")},lastUpdate:e,alertItems:n}},head:function(){return{title:this.$t("Common.岩手の最新感染動向")}},computed:{updatedAt:function(){return Object(h.c)(this.$data.lastUpdate)},formattedDateForDisplay:function(){return"".concat(this.$d(new Date(this.$data.lastUpdate),"dateTime")," JST")}}}),x=(n(502),n(9)),component=Object(x.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"MainPage"},[n("div",{staticClass:"Header mb-3"},[n("page-header",{attrs:{"icon-path":t.headerItem.iconPath},scopedSlots:t._u([{key:"pageHeader",fn:function(){return[t._v("\n        "+t._s(t.headerItem.title)+"\n      ")]},proxy:!0}])}),t._v(" "),n("div",{staticClass:"UpdatedAt"},[n("span",[t._v(t._s(t.$t("SiteTopUpper.最終更新")))]),t._v(" "),n("time",{attrs:{datetime:t.updatedAt}},[t._v(t._s(t.formattedDateForDisplay))])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!["ja"].includes(t.$i18n.locale),expression:"!['ja'].includes($i18n.locale)"}],staticClass:"Annotation"},[n("span",[t._v(t._s(t.$t("SiteTopUpper.注釈")))])])],1),t._v(" "),n("lazy-static-info",{staticClass:"mb-4",attrs:{url:t.localePath("/flow"),text:t.$t("SiteTopUpper.電話相談をどうぞ"),"btn-text":t.$t("SiteTopUpper.相談の手順を見る")}}),t._v(" "),t._l(t.alertItems,(function(t,i){return n("lazy-static-info",{key:i,staticClass:"mb-4",attrs:{url:t.url,text:t.text}})}))],2)}),[],!1,null,"376c5cca",null);e.default=component.exports;installComponents(component,{PageHeader:n(359).default,LazyStaticInfo:function(){return n.e(14).then(n.bind(null,608)).then((function(t){return t.default||t}))}})},612:function(t,e,n){"use strict";n.r(e);var r=n(9),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("site-top-upper"),this._v(" "),e("lazy-cards-tab")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SiteTopUpper:n(588).default,LazyCardsTab:function(){return Promise.all([n.e(3),n.e(22),n.e(13)]).then(n.bind(null,607)).then((function(t){return t.default||t}))}})}}]);