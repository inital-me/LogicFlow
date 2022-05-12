(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{456:function(e,t,_){"use strict";_.r(t);var r=_(29),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"从1-0升级到1-1"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#从1-0升级到1-1"}},[e._v("#")]),e._v(" 从1.0升级到1.1")]),e._v(" "),_("h3",{attrs:{id:"breaking-changes"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#breaking-changes"}},[e._v("#")]),e._v(" Breaking Changes")]),e._v(" "),_("ul",[_("li",[e._v("1.1版本对插件进行规范，现在要求所有的插件必须使用class的方式实现。然后插件的方法可以通过"),_("code",[e._v("lf.extension.插件名称.插件方法")]),e._v("来调用。原来的"),_("code",[e._v("lf.插件方法")]),e._v("仍然可用，后续版本将废弃。")]),e._v(" "),_("li",[_("code",[e._v("MiniMap")]),e._v(" api不兼容更新。"),_("code",[e._v("MiniMap.show()")]),e._v(" -> "),_("code",[e._v("lf.extension.miniMap.show()")]),e._v("; "),_("code",[e._v("MiniMap.hide()")]),e._v(" -> "),_("code",[e._v("lf.extension.miniMap.hide()")])])]),e._v(" "),_("h3",{attrs:{id:"_1-1-15"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-15"}},[e._v("#")]),e._v(" 1.1.15")]),e._v(" "),_("blockquote",[_("p",[e._v("发版时间：2022/05/07")])]),e._v(" "),_("ul",[_("li",[e._v("features\n"),_("ul",[_("li",[e._v("边和节点在选中的时候增加class "),_("code",[e._v("lf-xx-selected")]),e._v("，用于支持css自定义边选中样式。")]),e._v(" "),_("li",[e._v("fitView api增强，支持控制两边留白距离。"),_("a",{attrs:{href:"https://github.com/didi/LogicFlow/issues/585",target:"_blank",rel:"noopener noreferrer"}},[e._v("#585"),_("OutboundLink")],1)]),e._v(" "),_("li",[_("a",{attrs:{href:"https://github.com/daxlea",target:"_blank",rel:"noopener noreferrer"}},[e._v("daxlex"),_("OutboundLink")],1),e._v("给边添加了默认动画效果"),_("a",{attrs:{href:"https://github.com/didi/LogicFlow/pull/606",target:"_blank",rel:"noopener noreferrer"}},[e._v("#606"),_("OutboundLink")],1)])])]),e._v(" "),_("li",[e._v("bugfix\n"),_("ul",[_("li",[e._v("修复了边上的文本设置背景色后，不支持设置padding的问题。"),_("a",{attrs:{href:"https://github.com/didi/LogicFlow/issues/592",target:"_blank",rel:"noopener noreferrer"}},[e._v("#592"),_("OutboundLink")],1)])])])]),e._v(" "),_("h3",{attrs:{id:"_1-1-14"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-14"}},[e._v("#")]),e._v(" 1.1.14")]),e._v(" "),_("blockquote",[_("p",[e._v("发版时间：2022/04/22")])]),e._v(" "),_("ul",[_("li",[e._v("bugfix\n"),_("ul",[_("li",[e._v("编辑节点或者边文字的时候会触发键盘事件"),_("a",{attrs:{href:"https://github.com/didi/LogicFlow/issues/587",target:"_blank",rel:"noopener noreferrer"}},[e._v("#587"),_("OutboundLink")],1)])])])]),e._v(" "),_("h3",{attrs:{id:"_1-1-13"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-13"}},[e._v("#")]),e._v(" 1.1.13")]),e._v(" "),_("blockquote",[_("p",[e._v("发版时间：2022/04/16")])]),e._v(" "),_("ul",[_("li",[_("p",[e._v("features")]),e._v(" "),_("ul",[_("li",[_("code",[e._v("snapshot")]),e._v("插件增加"),_("code",[e._v("customCssRules")]),e._v("属性和"),_("code",[e._v("useGlobalRules")]),e._v("属性。")])])]),e._v(" "),_("li",[_("p",[e._v("bugfix")]),e._v(" "),_("ul",[_("li",[e._v("修复了节点拖动的时候不容易对齐的问题"),_("a",{attrs:{href:"https://github.com/didi/LogicFlow/issues/555",target:"_blank",rel:"noopener noreferrer"}},[e._v("#555"),_("OutboundLink")],1)])])])]),e._v(" "),_("h3",{attrs:{id:"_1-1-12"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-12"}},[e._v("#")]),e._v(" 1.1.12")]),e._v(" "),_("blockquote",[_("p",[e._v("发版时间: 2022/04/13")])]),e._v(" "),_("ul",[_("li",[_("p",[e._v("features")]),e._v(" "),_("ul",[_("li",[e._v("新增设置元素编辑、不可编辑状态API。"),_("RouterLink",{attrs:{to:"/api/graphModelApi.html#setelementstate"}},[e._v("setElementState")])],1),e._v(" "),_("li",[e._v("新增API "),_("RouterLink",{attrs:{to:"/api/logicFlowApi.html#renderrawdata"}},[e._v("lf.renderRawData")])],1)])]),e._v(" "),_("li",[_("p",[e._v("bugfix")]),e._v(" "),_("ul",[_("li",[e._v("修复了画布宽高传入参数值为0时，节点无法移动的问题。")]),e._v(" "),_("li",[e._v("修复了连线偶尔不消失的问题. "),_("a",{attrs:{href:"https://github.com/didi/LogicFlow/issues/568",target:"_blank",rel:"noopener noreferrer"}},[e._v("#568"),_("OutboundLink")],1)])])])]),e._v(" "),_("h3",{attrs:{id:"_1-1-11"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-11"}},[e._v("#")]),e._v(" 1.1.11")]),e._v(" "),_("blockquote",[_("p",[e._v("发版时间: 2022/03/29")])]),e._v(" "),_("ul",[_("li",[e._v("bugfix\n"),_("ul",[_("li",[e._v("修复了拖拽节点，节点文案同步移动不正确的问题 "),_("a",{attrs:{href:"https://github.com/didi/LogicFlow/issues/548",target:"_blank",rel:"noopener noreferrer"}},[e._v("#548"),_("OutboundLink")],1)])])])]),e._v(" "),_("h3",{attrs:{id:"_1-1-9"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-9"}},[e._v("#")]),e._v(" 1.1.9")]),e._v(" "),_("blockquote",[_("p",[e._v("发版时间: 2022/03/26")])]),e._v(" "),_("ul",[_("li",[_("p",[e._v("features")]),e._v(" "),_("ul",[_("li",[e._v("优化了鼠标移动到画布边缘滚动效果，现在支持持续滚动了。")]),e._v(" "),_("li",[e._v("优化节点拖动效果，拖动节点时，鼠标位置不是节点中心点，而是保持相对位置。")])])]),e._v(" "),_("li",[_("p",[e._v("bugfix")]),e._v(" "),_("ul",[_("li",[e._v("修复了分组内部的子节点之间的连线在分组收起时未被隐藏的问题。")])])])]),e._v(" "),_("h3",{attrs:{id:"_1-1-8"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-8"}},[e._v("#")]),e._v(" 1.1.8")]),e._v(" "),_("blockquote",[_("p",[e._v("发版时间: 2022/03/25")])]),e._v(" "),_("ul",[_("li",[_("p",[e._v("features")]),e._v(" "),_("ul",[_("li",[_("RouterLink",{attrs:{to:"/guide/extension/extension-node-resize.html"}},[e._v("节点缩放")]),e._v("插件支持设置放大缩小的最大最小值和调整灵敏度。")],1),e._v(" "),_("li",[e._v("新增"),_("RouterLink",{attrs:{to:"/api/logicFlowApi.html#fitview"}},[e._v("lf.fitView")]),e._v("方法 "),_("a",{attrs:{href:"https://github.com/lixianyu-icon",target:"_blank",rel:"noopener noreferrer"}},[e._v("@lixianyu-icon"),_("OutboundLink")],1),e._v("。")],1),e._v(" "),_("li",[e._v("新增在连线时，鼠标移动到画布边缘画布自动滚动。"),_("a",{attrs:{href:"https://github.com/didi/LogicFlow/issues/534",target:"_blank",rel:"noopener noreferrer"}},[e._v("#534"),_("OutboundLink")],1)]),e._v(" "),_("li",[e._v("优化了移动节点到画布边缘的交互，现在移动节点到画布边缘会自动扩展画布大小。")]),e._v(" "),_("li",[e._v("优化了移动节点的交互，现在如果节点不允许移动出分组范围后，鼠标再次回到分组内部时，节点会出现在鼠标位置。")])])]),e._v(" "),_("li",[_("p",[e._v("bugfix")]),e._v(" "),_("ul",[_("li",[e._v("修复了"),_("code",[e._v("group")]),e._v("插件在多个"),_("code",[e._v("group")]),e._v("节点一起被折叠报错的问题。")]),e._v(" "),_("li",[e._v("修复了内部元素阻止事件冒泡导致外部无法触发的问题，"),_("a",{attrs:{href:"https://github.com/didi/LogicFlow/issues/529",target:"_blank",rel:"noopener noreferrer"}},[e._v("#529"),_("OutboundLink")],1),e._v("、"),_("a",{attrs:{href:"https://github.com/didi/LogicFlow/issues/338",target:"_blank",rel:"noopener noreferrer"}},[e._v("#338"),_("OutboundLink")],1),e._v("。")]),e._v(" "),_("li",[e._v("修复了分组折叠后使用history返回上一步，显示错误的问题 "),_("a",{attrs:{href:"https://github.com/didi/LogicFlow/issues/537",target:"_blank",rel:"noopener noreferrer"}},[e._v("#537"),_("OutboundLink")],1)])])])]),e._v(" "),_("h3",{attrs:{id:"_1-1-8以下"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-8以下"}},[e._v("#")]),e._v(" 1.1.8以下")]),e._v(" "),_("ul",[_("li",[_("p",[e._v("features")]),e._v(" "),_("ul",[_("li",[e._v("新增"),_("code",[e._v("lf.getModelById")]),e._v("和"),_("code",[e._v("lf.getDataById")])]),e._v(" "),_("li",[e._v("新增事件"),_("code",[e._v("graph:rendered")])]),e._v(" "),_("li",[_("code",[e._v("nodeModel")]),e._v("新增属性"),_("code",[e._v("autoToFront")]),e._v(", 控制节点选中时是否自动置顶，默认为true.")]),e._v(" "),_("li",[_("code",[e._v("nodeModel")]),e._v("和"),_("code",[e._v("edgeModel")]),e._v("新增属性"),_("code",[e._v("visible")]),e._v(", 控制节点是否显示，默认为true.")]),e._v(" "),_("li",[_("code",[e._v("nodeModel")]),e._v("的"),_("code",[e._v("getAnchorStyle")]),e._v("方法增加参数"),_("code",[e._v("anchorInfo")]),e._v(", 用于自定义锚点时，对一个节点上的锚点显示不同效果进行自定义。 "),_("code",[e._v("v1.1.3")])]),e._v(" "),_("li",[e._v("自定义锚点支持设置"),_("code",[e._v("edgeAddable")]),e._v("属性，用于控制是否可以在此锚点手动创建连线。")]),e._v(" "),_("li",[e._v("新增锚点事件"),_("code",[e._v("anchor:dragstart")]),e._v("和"),_("code",[e._v("anchor:drop")]),e._v(",用于在连线时对可连接节点进行高亮处理。 "),_("code",[e._v("v1.1.5")])]),e._v(" "),_("li",[_("code",[e._v("NodeResize")]),e._v("插件用法修改，不在全局设置"),_("code",[e._v("矩形")]),e._v("、"),_("code",[e._v("圆形")]),e._v("、"),_("code",[e._v("多边形")]),e._v("可缩放，而且按需引入自定义。")])])]),e._v(" "),_("li",[_("p",[e._v("bugfix")]),e._v(" "),_("ul",[_("li",[e._v("修复了"),_("a",{attrs:{href:"https://github.com/didi/LogicFlow/issues/481",target:"_blank",rel:"noopener noreferrer"}},[e._v("#481"),_("OutboundLink")],1),e._v("首次导出后，删除远处存在的节点再进行导出，图片导出出现空白。")]),e._v(" "),_("li",[e._v("修复了多边形在移动边的时候，偶尔边无法移动且报错的问题。")]),e._v(" "),_("li",[e._v("修复了"),_("a",{attrs:{href:"https://github.com/didi/LogicFlow/issues/479",target:"_blank",rel:"noopener noreferrer"}},[e._v("#479"),_("OutboundLink")],1),e._v("不传入宽高时，宽度和高度不会随着窗口缩放再次适应。")]),e._v(" "),_("li",[e._v("修复了"),_("a",{attrs:{href:"https://github.com/didi/LogicFlow/issues/488",target:"_blank",rel:"noopener noreferrer"}},[e._v("#488"),_("OutboundLink")],1),e._v(" 换行后永远多一个换行符的问题。"),_("code",[e._v("v1.1.1")]),e._v("。")]),e._v(" "),_("li",[e._v("修复了"),_("a",{attrs:{href:"https://github.com/didi/LogicFlow/issues/336",target:"_blank",rel:"noopener noreferrer"}},[e._v("#336"),_("OutboundLink")],1),e._v(" 在某些中文输入下，文字内部不显示的问题。 "),_("code",[e._v("v1.1.3")])]),e._v(" "),_("li",[e._v("修复了"),_("a",{attrs:{href:"https://github.com/didi/LogicFlow/issues/514",target:"_blank",rel:"noopener noreferrer"}},[e._v("#514"),_("OutboundLink")],1),e._v(" 在修改连线起点和终点时不触发节点校验规则的问题。 "),_("code",[e._v("v1.1.5")])])])]),e._v(" "),_("li",[_("p",[e._v("docs")]),e._v(" "),_("ul",[_("li",[e._v("新增"),_("RouterLink",{attrs:{to:"/guide/extension/component-group.html"}},[e._v("group插件")])],1),e._v(" "),_("li",[e._v("新增"),_("RouterLink",{attrs:{to:"/guide/extension/component-custom.html"}},[e._v("自定义插件教程")])],1)])])])])}),[],!1,null,null,null);t.default=o.exports}}]);