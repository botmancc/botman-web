(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{433:function(t,a,s){t.exports=s.p+"assets/img/if_condition.c3f0a8d9.png"},434:function(t,a,s){t.exports=s.p+"assets/img/if_input_paramter_type.4238cbb7.png"},435:function(t,a,s){t.exports=s.p+"assets/img/if_input_boolean.91ca2c45.png"},436:function(t,a,s){t.exports=s.p+"assets/img/if_input_date_time.829ef323.png"},437:function(t,a,s){t.exports=s.p+"assets/img/if_input_number.5d4badf0.png"},438:function(t,a,s){t.exports=s.p+"assets/img/if_input_string.d666ed5a.png"},439:function(t,a,s){t.exports=s.p+"assets/img/if_output.16318bac.png"},612:function(t,a,s){"use strict";s.r(a);var _=s(13),i=Object(_.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"条件判断"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#条件判断"}},[t._v("#")]),t._v(" 条件判断")]),t._v(" "),a("p",[t._v("根据输入判断输出是真或假，并选择对应分支执行。支持搭配使用且和或组合条件，并且可使用变量表达式在运行时动态决策。")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:s(433),alt:"image-20240821095550022"}}),t._v(" "),a("h2",{attrs:{id:"入参"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#入参"}},[t._v("#")]),t._v(" 入参")]),t._v(" "),a("h3",{attrs:{id:"条件关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#条件关系"}},[t._v("#")]),t._v(" 条件关系")]),t._v(" "),a("p",[t._v("可以通过且、或关系组成复杂的条件组合。如果组合中同时出现且和或，其关系如下："),a("code",[t._v("CondX 且 CondY 或 CondZ...")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("且")]),t._v(" "),a("p",[t._v("当且仅当所有条件（条件1、条件2....条件N）都为真才返回真，否则为假")])]),t._v(" "),a("li",[a("p",[t._v("或")]),t._v(" "),a("p",[t._v("只要任意一个条件为真，则为真，否则全部为假则为假")])])]),t._v(" "),a("h3",{attrs:{id:"条件数值类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#条件数值类型"}},[t._v("#")]),t._v(" 条件数值类型")]),t._v(" "),a("p",[t._v("当前支持布尔值、日期和时间、数字、字符串四种类型的数值类型对比。")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:s(434),alt:"image-20240821130445673"}}),t._v(" "),a("p",[t._v("值1和值2可以时常量，也可以时变量表达式（在运行时动态获取当前值）")]),t._v(" "),a("h4",{attrs:{id:"布尔值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#布尔值"}},[t._v("#")]),t._v(" 布尔值")]),t._v(" "),a("p",[t._v("判断值1是否为真或假（值2这里无用）")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:s(435),alt:"image-20240822090429863"}}),t._v(" "),a("h4",{attrs:{id:"日期和时间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日期和时间"}},[t._v("#")]),t._v(" 日期和时间")]),t._v(" "),a("p",[t._v("比较值1和值2两者日期之间的关系，可以对比yyyy-mm-dd hh:mm:ss这样的字符串格式，也可以对比unix秒时间戳格式")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:s(436),alt:"image-20240822090601409"}}),t._v(" "),a("h4",{attrs:{id:"数字"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数字"}},[t._v("#")]),t._v(" 数字")]),t._v(" "),a("p",[t._v("对比值1和值2两个数字之间的大小关系，包括：")]),t._v(" "),a("ul",[a("li",[t._v("大于")]),t._v(" "),a("li",[t._v("大于等于")]),t._v(" "),a("li",[t._v("小于")]),t._v(" "),a("li",[t._v("小于等于")]),t._v(" "),a("li",[t._v("等于")]),t._v(" "),a("li",[t._v("不等于")])]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:s(437),alt:"image-20240822090757567"}}),t._v(" "),a("h4",{attrs:{id:"字符串"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符串"}},[t._v("#")]),t._v(" 字符串")]),t._v(" "),a("p",[t._v("对比值1和值2两个字符串之间的关系，包括：")]),t._v(" "),a("ul",[a("li",[t._v("包含")]),t._v(" "),a("li",[t._v("不包含")]),t._v(" "),a("li",[t._v("以...开始")]),t._v(" "),a("li",[t._v("不以...开始")]),t._v(" "),a("li",[t._v("以...结尾")]),t._v(" "),a("li",[t._v("不以...结尾")]),t._v(" "),a("li",[t._v("相等")]),t._v(" "),a("li",[t._v("不相等")])]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:s(438),alt:"image-20240822090900729"}}),t._v(" "),a("h2",{attrs:{id:"出参"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#出参"}},[t._v("#")]),t._v(" 出参")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[true/false]\n")])])]),a("img",{staticStyle:{zoom:"50%"},attrs:{src:s(439),alt:"image-20241007183817574"}})])}),[],!1,null,null,null);a.default=i.exports}}]);