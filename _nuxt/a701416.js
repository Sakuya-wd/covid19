(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{364:function(t,e,n){var content=n(446);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("20a64fca",content,!0,{sourceMap:!1})},404:function(t,e,n){"use strict";n.r(e);n(83);var o=n(0).a.extend({props:{"検査実施人数":{type:Number,required:!0},"陽性者数":{type:Number,required:!0},"入院中":{type:Number,required:!0},"軽症中等症":{type:Number,required:!0},"不明":{type:Number,required:!0},"宿泊療養":{type:Number,required:!0},"自宅療養":{type:Number,required:!0},"入院療養等調整中":{type:Number,required:!0},"重症":{type:Number,required:!0},"死亡":{type:Number,required:!0},"退院":{type:Number,required:!0}},methods:{perTestPositive:function(a){return Math.round(a/this.陽性者数*100*10)/10}}}),r=n(445),l=n(9);var component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{class:t.$style.container},[n("li",{class:[t.$style.box,t.$style.parent]},[n("div",{class:t.$style.content},[n("span",[t._v(" "+t._s(t.$t("Common.陽性者数"))+" ("+t._s(t.$t("Common.累計"))+") ")]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.陽性者数.toLocaleString()))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("Common.人")))])])]),t._v(" "),n("ul",{class:t.$style.group},[n("li",{class:[t.$style.box,t.$style.parent]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("Common.入院")))]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.入院中.toLocaleString()))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("Common.人")))])])]),t._v(" "),n("ul",{class:t.$style.group},[n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("Common.重症")))]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.重症.toLocaleString()))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("Common.人")))])])])])])]),t._v(" "),n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("Common.宿泊療養")))]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.宿泊療養.toLocaleString()))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("Common.人")))])])])]),t._v(" "),n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("ConfirmedCasesDetailsCard.legends[0]")))]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.自宅療養.toLocaleString()))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("Common.人")))])])])]),t._v(" "),n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("ConfirmedCasesDetailsCard.legends[1]")))]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.入院療養等調整中.toLocaleString()))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("Common.人")))])])])]),t._v(" "),n("li",{class:t.$style.box},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("ConfirmedCasesDetailsCard.legends[2]")))]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.退院.toLocaleString()))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("Common.人")))])])])]),t._v(" "),n("li",{class:t.$style.box},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("ConfirmedCasesDetailsCard.legends[3]")))]),t._v(" "),n("span",[n("span",{class:t.$style.perTestPositive},[t._v("\n              ("+t._s(t.perTestPositive(this.死亡))+t._s(t.$t("Common.%"))+")\n            ")]),t._v(" "),n("strong",[t._v(t._s(t.死亡.toLocaleString()))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("Common.人")))])])])])])])])}),[],!1,(function(t){this.$style=r.default.locals||r.default}),null,null);e.default=component.exports},445:function(t,e,n){"use strict";var o=n(364),r=n.n(o);n.d(e,"default",(function(){return r.a}))},446:function(t,e,n){(e=n(19)(!1)).push([t.i,'.container_1VuG7{width:100%;color:#008830;line-height:1.35;padding-left:0!important}.container_1VuG7,.container_1VuG7 *{box-sizing:border-box}.container_1VuG7 ul{padding-left:0}.group_MrdNH{flex:0 0 auto;padding-left:3px!important;border-top:3px solid #008830;border-left:3px solid #008830}.content_TJIht{padding:5px 10px;display:flex;justify-content:space-between;align-items:center;width:100%;border:3px solid #008830}.content_TJIht>span{display:block;font-size:1.4rem}.content_TJIht>span:first-child{text-align:left;margin-top:1px;flex-shrink:2}.content_TJIht>span:last-child{margin-left:10px;text-align:right;flex-shrink:1}.content_TJIht>span:not(:last-child){word-wrap:break-word}.content_TJIht strong{font-size:1.6rem}.content_TJIht span.perTestPositive_1mvFJ{margin-right:.5rem}.content_TJIht span.unit_1E2ZH{font-size:1.4rem}.box_1NKW3{display:block;margin-top:3px}.box_1NKW3.parent_2wZWB{border-top:3px solid #008830;border-left:3px solid #008830;position:relative;padding-left:29px}.box_1NKW3.parent_2wZWB:after{content:"";display:block;position:absolute;left:-1px;bottom:0;width:30px;border-bottom:3px solid #008830}.box_1NKW3.parent_2wZWB>.content_TJIht{margin-left:-29px;width:calc(100% + 29px);border-top:none;border-left:none;border-bottom:none}@media screen and (max-width:1263px){.group_MrdNH{padding-left:.238vw!important;border-top:.238vw solid #008830;border-left:.238vw solid #008830}.content_TJIht{padding:.396vw .792vw;border:.238vw solid #008830}.content_TJIht>span{font-size:1.4rem}.content_TJIht>span:first-child{margin-top:.08vw}.content_TJIht>span:last-child{margin-left:10px}.content_TJIht strong{font-size:1.6rem}.content_TJIht span.unit_1E2ZH{font-size:1.4rem}.box_1NKW3{margin-top:.238vw}.box_1NKW3.parent_2wZWB{border-top:.238vw solid #008830;border-left:.238vw solid #008830;padding-left:2.296vw}.box_1NKW3.parent_2wZWB:after{width:2.534vw;border-bottom:.238vw solid #008830}.box_1NKW3.parent_2wZWB>.content_TJIht{margin-left:-2.296vw;width:calc(100% + 2.296vw)}}@media screen and (max-width:959px){.group_MrdNH{padding-left:.313vw!important;border-top:.313vw solid #008830;border-left:.313vw solid #008830}.content_TJIht{padding:.521vw 1.042vw;border:.313vw solid #008830}.content_TJIht>span{font-size:1.4rem}.content_TJIht>span:first-child{margin-top:.105vw}.content_TJIht>span:last-child{margin-left:10px}.content_TJIht strong{font-size:1.6rem}.content_TJIht span.unit_1E2ZH{font-size:1.4rem}.box_1NKW3{margin-top:.313vw}.box_1NKW3.parent_2wZWB{border-top:.313vw solid #008830;border-left:.313vw solid #008830;padding-left:3.02vw}.box_1NKW3.parent_2wZWB:after{width:3.334vw;border-bottom:.313vw solid #008830}.box_1NKW3.parent_2wZWB>.content_TJIht{margin-left:-3.02vw;width:calc(100% + 3.02vw)}}@media screen and (max-width:600px){.group_MrdNH{padding-left:.5vw!important;border-top:.5vw solid #008830;border-left:.5vw solid #008830}.content_TJIht{padding:.834vw 1.667vw;border:.5vw solid #008830}.content_TJIht>span{font-size:1.4rem}.content_TJIht>span:first-child{margin-top:.167vw}.content_TJIht>span:last-child{margin-left:10px}.content_TJIht strong{font-size:1.6rem}.content_TJIht span.unit_1E2ZH{font-size:1.4rem}.box_1NKW3{margin-top:.5vw}.box_1NKW3.parent_2wZWB{border-top:.5vw solid #008830;border-left:.5vw solid #008830;padding-left:4.834vw}.box_1NKW3.parent_2wZWB:after{width:5.334vw;border-bottom:.5vw solid #008830}.box_1NKW3.parent_2wZWB>.content_TJIht{margin-left:-4.834vw;width:calc(100% + 4.834vw)}}',""]),e.locals={container:"container_1VuG7",group:"group_MrdNH",content:"content_TJIht",perTestPositive:"perTestPositive_1mvFJ",unit:"unit_1E2ZH",box:"box_1NKW3",parent:"parent_2wZWB"},t.exports=e},483:function(t,e,n){"use strict";n.r(e);var o=n(12),r=n.n(o),l=n(404),d=n(333),_=n(334),c=n(164);n(60),n(62);function v(data,t){var e;return function n(data){e||(data.attr===t?e=data.value:data.children&&data.children.forEach((function(t){e||n(t)})))}(data),e||0}var m={components:{DataView:d.default,DataViewDataSetPanel:_.default,ConfirmedCasesDetailsTable:l.default},props:{md:{type:String,default:"6"}},data:function(){var t=function(data){return{"検査実施人数":v(data,"検査実施人数"),"陽性者数":v(data,"陽性患者数"),"入院中":v(data,"入院中"),"軽症中等症":v(data,"軽症・中等症"),"重症":v(data,"重症"),"不明":v(data,"不明"),"宿泊療養":v(data,"宿泊療養"),"自宅療養":v(data,"自宅療養"),"入院療養等調整中":v(data,"入院・療養等調整中"),"死亡":v(data,"死亡"),"退院":v(data,"退院")}}(c.main_summary),e=r()(c.main_summary.children[0].date).format("YYYY/MM/DD HH:mm");return{Data:c,confirmedCases:t,updatedAt:e}}},f=n(9),w=n(32),h=n.n(w),x=n(599),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"DataCard",attrs:{id:"ConfirmedCasesDetailsCard",cols:"12",md:t.md}},[n("client-only",[n("data-view",{attrs:{title:t.$t("ConfirmedCasesDetailsCard.title"),"title-id":"details-of-confirmed-cases",date:t.updatedAt},scopedSlots:t._u([{key:"dataSetPanel",fn:function(){return[n("data-view-data-set-panel",{attrs:{title:t.$t("ConfirmedCasesDetailsCard.title")}})]},proxy:!0}])},[n("confirmed-cases-details-table",t._b({attrs:{"aria-label":t.$t("ConfirmedCasesDetailsCard.title")}},"confirmed-cases-details-table",t.confirmedCases,!1))],1),t._v(" "),t._t("breadCrumb")],2)],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{ConfirmedCasesDetailsTable:n(404).default,DataViewDataSetPanel:n(334).default,DataView:n(333).default}),h()(component,{VCol:x.a})}}]);