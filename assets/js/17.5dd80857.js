(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{517:function(t,a,e){t.exports=e.p+"assets/img/wechat_official_account_workflow.385f5763.png"},518:function(t,a,e){t.exports=e.p+"assets/img/get_wechat_official_account_config.8d4a21c5.png"},519:function(t,a,e){t.exports=e.p+"assets/img/wechat_official_account_credential.e478a9e3.png"},520:function(t,a,e){t.exports=e.p+"assets/img/wechat_official_account_resp_text.d768c3c1.png"},521:function(t,a,e){t.exports=e.p+"assets/img/wechat_official_account_resp_image.8dbc0c5f.png"},522:function(t,a,e){t.exports=e.p+"assets/img/wechat_official_account_resp_text_image.b230cc0b.png"},523:function(t,a,e){t.exports=e.p+"assets/img/wechat_official_account_resp_workflow.9ea55f16.png"},632:function(t,a,e){"use strict";e.r(a);var s=e(13),_=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"微信公众号触发器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#微信公众号触发器"}},[t._v("#")]),t._v(" 微信公众号触发器")]),t._v(" "),a("h3",{attrs:{id:"创建微信公众号工作流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建微信公众号工作流"}},[t._v("#")]),t._v(" 创建微信公众号工作流")]),t._v(" "),a("p",[t._v("如下，创建一个简单的公众流，用于响应公众号发送的消息，这里我们只是简单的回复：你好。")]),t._v(" "),a("img",{staticStyle:{zoom:"67%"},attrs:{src:e(517),alt:"image-20240921180028617"}}),t._v(" "),a("h3",{attrs:{id:"配置微信公众号开发信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置微信公众号开发信息"}},[t._v("#")]),t._v(" 配置微信公众号开发信息")]),t._v(" "),a("p",[t._v("扫码登陆"),a("a",{attrs:{href:"https://mp.weixin.qq.com/cgi-bin/home?t=home/index&lang=zh_CN",target:"_blank",rel:"noopener noreferrer"}},[t._v("微信公众号后台"),a("OutboundLink")],1),t._v("，进入【设置与开发】=》【基本配置】页面下，我们可以看到几个需要用到的信息：")]),t._v(" "),a("ul",[a("li",[t._v("AppID：开发者ID。")]),t._v(" "),a("li",[t._v("AppSecret：开发者密钥。")])]),t._v(" "),a("img",{staticStyle:{zoom:"80%"},attrs:{src:e(518),alt:"image-20240921174708278"}}),t._v(" "),a("p",[t._v("拿到上面的AppID和AppSecret后，打开Botman创建【微信公众号】类型的凭据，输入上面的AppID和AppSecret。")]),t._v(" "),a("p",[t._v("同时，该页面会自动生成"),a("strong",[t._v("Token")]),t._v("、"),a("strong",[t._v("EncodingAESKey")]),t._v("和"),a("strong",[t._v("回调地址")]),t._v("，把这两个信息配置到公众号【基本配置】下的【服务器配置】选项里的"),a("strong",[t._v("令牌(Token)、消息加解密钥(EncodingAESKey)"),a("strong",[t._v("和")]),t._v("服务器地址(URL)")]),t._v("，消息加密方式使用"),a("strong",[t._v("安全模式")]),t._v("。最后点击保存即可。")]),t._v(" "),a("img",{staticStyle:{zoom:"80%"},attrs:{src:e(519),alt:"image-20240921231925808"}}),t._v(" "),a("h3",{attrs:{id:"配置响应消息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置响应消息"}},[t._v("#")]),t._v(" 配置响应消息")]),t._v(" "),a("p",[t._v("如上图，在【高级配置】下，启用自动回复。可以设置响应的消息类型，目前支持以下几种：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Text：文本。")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:e(520),alt:"image-20240921232933831"}})]),t._v(" "),a("li",[a("p",[t._v("Image：图片。")]),t._v(" "),a("p",[t._v("点击上传小于200KB的图片。")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:e(521),alt:"image-20240921232728290"}})]),t._v(" "),a("li",[a("p",[t._v("Text+Image：图文。")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:e(522),alt:"image-20240921232826795"}})]),t._v(" "),a("li",[a("p",[t._v("Exec Workflow：下拉可以选择启用的微信公众号触发器工作流。")]),t._v(" "),a("p",[t._v("注意：由于微信官方要求，对于公众号发送的消息，必须要在5秒内响应回复，所以工作流这里在发送公众号消息之前不能做耗时的业务操作。")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:e(523),alt:"image-20240921232351556"}})])])])}),[],!1,null,null,null);a.default=_.exports}}]);