(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{413:function(t,s,a){t.exports=a.p+"assets/img/approval.2974938a.png"},414:function(t,s,a){t.exports=a.p+"assets/img/approval_list.9663198d.png"},415:function(t,s,a){t.exports=a.p+"assets/img/approval_detail.d7d5f6ed.png"},416:function(t,s,a){t.exports=a.p+"assets/img/done_approval_list.7f8d631a.png"},417:function(t,s,a){t.exports=a.p+"assets/img/approval_input_channel.afdaf0d4.png"},418:function(t,s,a){t.exports=a.p+"assets/img/approval_input_member.0d7fb58f.png"},419:function(t,s,a){t.exports=a.p+"assets/img/approval_input_timeout.ae774a7d.png"},604:function(t,s,a){"use strict";a.r(s);var r=a(13),n=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"审批"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#审批"}},[t._v("#")]),t._v(" 审批")]),t._v(" "),s("p",[t._v("支持或签、会签审批方式，同时支持在Web网页上和Telegram上审批，并且可以设置超时时间及其响应分支。")]),t._v(" "),s("p",[t._v("节点绿色输出表示审批同意，红色表示不同意，中间灰色表示超时。")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:a(413),alt:"image-20240822092149062"}}),t._v(" "),s("p",[t._v("个人待审批的数据可以在【用户任务】下的【审批】查看，支持一键批量操作。")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:a(414),alt:"image-20240822094834833"}}),t._v(" "),s("p",[t._v("点击审批详情，可以看到审批的完整内容和操作。")]),t._v(" "),s("img",{staticStyle:{zoom:"33%"},attrs:{src:a(415),alt:"image-20240822094909097"}}),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:a(416),alt:"image-20240822100506294"}}),t._v(" "),s("h2",{attrs:{id:"入参"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#入参"}},[t._v("#")]),t._v(" 入参")]),t._v(" "),s("h3",{attrs:{id:"审批渠道"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#审批渠道"}},[t._v("#")]),t._v(" 审批渠道")]),t._v(" "),s("p",[t._v("默认Web包含必选，Telegram可选，勾选Telegram则需要配置关联的机器人凭据（Token），需要到凭据那里创建。")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:a(417),alt:"image-20240822092432334"}}),t._v(" "),s("h3",{attrs:{id:"名称"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#名称"}},[t._v("#")]),t._v(" 名称")]),t._v(" "),s("p",[t._v("审批名称。")]),t._v(" "),s("h3",{attrs:{id:"内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内容"}},[t._v("#")]),t._v(" 内容")]),t._v(" "),s("p",[t._v("审批内容。")]),t._v(" "),s("h3",{attrs:{id:"成员"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#成员"}},[t._v("#")]),t._v(" 成员")]),t._v(" "),s("p",[t._v("审批成员，这里会显示账号列表下的用户，支持模糊搜索。如果启用了Telegram审批，则需要再用户列表哪里配置用户的TelegramID，否则无法发消息给Telegram用户。")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:a(418),alt:"image-20240822125407556"}}),t._v(" "),s("h3",{attrs:{id:"类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类型"}},[t._v("#")]),t._v(" 类型")]),t._v(" "),s("p",[t._v("支持两种常见审批类型：")]),t._v(" "),s("ul",[s("li",[t._v("或签：只须一个审批人处理，若该审批人同意即可进入到下一个节点，若该审批人拒绝则审批流程结束")]),t._v(" "),s("li",[t._v("会签：所有审批人都同意才会进入下一个节点，若有任意一个审批人拒绝，审批单就会不通过且审批流程结束")])]),t._v(" "),s("h3",{attrs:{id:"超时"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#超时"}},[t._v("#")]),t._v(" 超时")]),t._v(" "),s("p",[t._v("默认为0表示没有超时的限制，如果大于0，则审批时间超过指定的时间，就会结束审批流程，并流转到中间的超时分支。")]),t._v(" "),s("p",[t._v("用户可以在这里设置超时的响应动作。")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:a(419),alt:"image-20240822130147768"}}),t._v(" "),s("h2",{attrs:{id:"出参"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#出参"}},[t._v("#")]),t._v(" 出参")]),t._v(" "),s("p",[t._v("输出包含两个字段，其中：")]),t._v(" "),s("ul",[s("li",[t._v("approval：表示审批的详情，包括审批标题、内容、成员和审批结果等信息")]),t._v(" "),s("li",[t._v("operationList：表示每个审批成员提交的结果和留言等信息。")])]),t._v(" "),s("p",[t._v("如下是某个输出结果：")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"approval"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"appInstId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kjs6f044cs"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"attr"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Any"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"content"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello world"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"createAt"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2024-01-01T0xxxx"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"endAt"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2024-01-01 xxxx"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"executionUid"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2172667998xxxx"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"expireAt"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"index"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"isTimeout"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Test"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"startAt"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2024-01-01 xxxx"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("-99")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"template"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"approval"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"timeout"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updateAt"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2024-01-xxxx"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"users"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"botman"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"workflowId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"workflowUser"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"botman"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"operationList"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"approvalId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"comment"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"createAt"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2024-01-xxxx"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Test"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updateAt"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2024-01-xxxx"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"user"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"botman"')]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);