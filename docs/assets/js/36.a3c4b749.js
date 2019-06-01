(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{203:function(t,e,s){"use strict";s.r(e);var n=s(0),a=Object(n.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("for quick starting, see:")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/SAP/chevrotain/blob/master/examples/parser/content_assist/content_assist_simple.js",target:"_blank",rel:"noopener noreferrer"}},[s("strong",[t._v("Runnable example - simple")]),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/SAP/chevrotain/blob/master/examples/parser/content_assist/content_assist_complex.js",target:"_blank",rel:"noopener noreferrer"}},[s("strong",[t._v("Runnable example - complex")]),s("OutboundLink")],1)])]),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("Chevrotain provides Syntactic Content assist Capabilities.\nThese can be accessed via the "),s("a",{attrs:{href:"https://sap.github.io/chevrotain/documentation/4_6_0/classes/cstparser.html#computecontentassist",target:"_blank",rel:"noopener noreferrer"}},[s("strong",[t._v("computeContentAssist")]),s("OutboundLink")],1),t._v(" method.")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),s("p",[t._v("See the simple "),s("a",{attrs:{href:"https://github.com/SAP/chevrotain/blob/master/examples/parser/content_assist/content_assist_simple.js",target:"_blank",rel:"noopener noreferrer"}},[s("strong",[t._v("Runnable example")]),s("OutboundLink")],1),t._v("\nto understand this flow.")]),t._v(" "),t._m(7),t._v(" "),s("p",[t._v("A real world scenario would be far more complex than the simple scenario shown above, For example:")]),t._v(" "),t._m(8),t._v(" "),s("p",[t._v("These concerns are not part of the Chevrotain library, Chevrotain only deals with "),s("strong",[t._v("syntactic")]),t._v(" context assist\nand it is the responsibility of the end users to handle the "),s("strong",[t._v("semantic")]),t._v(" content assistance logic of their specific languages.\nHowever, a more complex "),s("a",{attrs:{href:"https://github.com/SAP/chevrotain/blob/master/examples/parser/content_assist/content_assist_complex.js",target:"_blank",rel:"noopener noreferrer"}},[s("strong",[t._v("Runnable example")]),s("OutboundLink")],1),t._v('\nis provided to demonstrate some of these possible "advance" flows mentioned above.')]),t._v(" "),t._m(9),t._v(" "),s("p",[t._v("This causes several important limitations:")]),t._v(" "),t._m(10),t._v(" "),s("p",[t._v("These limitations may seem daunting at first, but should not cause great problems in actual practice.\nThe following sections will discuss each limitation in details.")]),t._v(" "),t._m(11),t._v(" "),s("p",[t._v("An order of magnitude slower performance may at first sound like a horrible thing.\nLets put this in perspective for relevant use cases:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Being an order of magnitude slower also means approximately the same speed as Jison.")]),t._v(" "),s("ul",[s("li",[t._v("Tested on Chrome 68, See: "),s("a",{attrs:{href:"https://sap.github.io/chevrotain/performance/",target:"_blank",rel:"noopener noreferrer"}},[t._v("performance benchmark"),s("OutboundLink")],1),t._v(".")])])]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15)]),t._v(" "),t._m(16),t._v(" "),s("p",[t._v("No support for semantic actions and Error Recovery.")]),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),s("p",[t._v("What this means is that for input areas that are currently being edited (or even written from scratch) by the user\nsemantic actions and error recovery are less relevant anyhow. And if as described in the previous section an incremental approach\nto using the content assist will also resolve the issue in which the content assist position follows a syntax error.")]),t._v(" "),s("p",[t._v("Example:")]),t._v(" "),t._m(19),t._m(20),t._v(" "),t._m(21),t._v(" "),s("p",[t._v("Gates / Predicates behave is limiters of the available grammar. These constructs are not often used in grammars\nwhich reduces the severity of this limitation.")]),t._v(" "),t._m(22),t._v(" "),t._m(23)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"syntactic-content-assist"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#syntactic-content-assist","aria-hidden":"true"}},[this._v("#")]),this._v(" Syntactic Content Assist")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"tldr"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tldr","aria-hidden":"true"}},[this._v("#")]),this._v(" TLDR")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[this._v("#")]),this._v(" Introduction")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Note that this feature "),e("strong",[this._v("only")]),this._v(" provides syntactic suggestions (meaning next possible token types) "),e("strong",[this._v("not")]),this._v(' semantic suggestions.\nIt could be used as a building block in a semantic suggestions provider, but it cannot do this on "its own".')])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Also note that this feature is implemented as a "),e("strong",[this._v("separate")]),this._v(" interpreted backtracking parser,\ncompletely unrelated to the normal parsing flow except for using the same internal grammar representation.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"basic-flow"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#basic-flow","aria-hidden":"true"}},[this._v("#")]),this._v(" Basic Flow")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The "),e("code",[this._v("computeContentAssist")]),this._v(" method is called on a Parser instance and given as inputs the starting rule's name\nand a partial token vector, the output of this method would be the (first) possible Token Types that can appear after the\npartial token vector.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"advance-flow"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#advance-flow","aria-hidden":"true"}},[this._v("#")]),this._v(" Advance Flow")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("A Partial Identifier may lead to suggestions being offered from a table of symbols.")]),this._v(" "),e("li",[this._v("For some types of tokens suggestions may not be offered (e.g Commas).")]),this._v(" "),e("li",[this._v("Filtering on the suggested Identifier names may have to take into account the current semantic scope.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"limitations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#limitations","aria-hidden":"true"}},[this._v("#")]),this._v(" Limitations")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("p",[s("strong",[t._v("Performance")]),t._v(": The Content assist feature is about x10 times slower than the normal parsing flow.")])]),t._v(" "),s("li",[s("p",[t._v("No Embedded actions will be performed.")])]),t._v(" "),s("li",[s("p",[t._v("Error Recovery is unsupported")])]),t._v(" "),s("li",[s("p",[t._v("Gates / Predicates are unsupported.")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"performance"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#performance","aria-hidden":"true"}},[this._v("#")]),this._v(" Performance.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[e("strong",[this._v("Smaller input Size 1")]),this._v(": Content Assist is requested for an offset inside a text, this means that on average only half the text input\nwill have to be parsed. Suddenly the problem is halved...")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[e("strong",[this._v("Smaller input size 2")]),this._v(": Syntactic Content Assist is requested for a single text input(file), while standard parsing flow may need\nto handle dozens or hundreds of inputs at once.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[e("strong",[this._v("Less work")]),this._v(": The ~x10 performance difference was measured when comparing pure grammars without any semantics.\nIn a "),e("strong",[this._v("real world")]),this._v(" scenario the difference will be smaller as the regular parser will have semantics (CST creation / embedded actions).\nThoses semantics have their own runtime cost while the content assist parser will "),e("strong",[this._v("always")]),this._v(" remain a pure grammar.")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("p",[s("strong",[t._v("Smart beats fast")]),t._v(": Content Assist is normally used in a code editor. A code editor should be by definition\n"),s("strong",[t._v("incremental")]),t._v(" as it does not matter how smart the error recovery is or how fast the parser, re-parsing a whole\nfile for every single changed character will simply "),s("strong",[t._v("not scale")]),t._v(", both from a performance perspective and from the requirement\nof handling partially invalid inputs. What this means is that if a code editor is already (as it should be) incremental.\nIt could invoke the call to "),s("strong",[t._v("computeContentAssist")]),t._v(" on a subset of the input as well. This subset could easily\nbe "),s("strong",[t._v("several")]),t._v(" orders of magnitudes smaller, thus all performance concerns are resolved.")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Example: Imagine a 1,000 lines JavaScript file where a single 10 lines function is being edited and content assist\nis requested inside that small function.")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// line 1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// line 600")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// content assist requested somewhere in this function")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// line 610")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// line 1000")]),t._v("\n")])])]),s("p",[t._v("There is no need no re-parse the whole file, Instead only the text of that function should be sent\nTo "),s("strong",[t._v("computeContentAssist")]),t._v(' and the "startRule" should be "functionDeclaration". Therefore only ~10 lines\nof text will have to be re-parsed to provide syntactic content assist.\nThis is a 1/100 difference in input size which is '),s("strong",[t._v("two orders of magnitude")]),t._v(" smaller.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"semantics-fault-tolerance"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#semantics-fault-tolerance","aria-hidden":"true"}},[this._v("#")]),this._v(" Semantics & Fault tolerance")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Once again, Content assist is often used in a code Editor's context.\nsemantic actions will normally only output useful results for "),e("strong",[this._v("valid parts")]),this._v(' of the input.\nError recovery can help with invalid inputs by performing small automatic fixes to the input and more often by completely\nskipping (re-syncing) parts of the input until a "valid" section is encountered.')])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The problem is that usually the code area where content assist is requested is also currently being "),e("strong",[this._v("heavily")]),this._v(" modified by the user\nand is unlikely to able to be successfully parsed or automatically recovered(fixed), instead it will probably be skipped (re-synced) entirely.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" three "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// syntax error, missing expression")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" five "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" six "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// <-- content assist requested after the '+'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("five"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" six"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ol",[s("li",[s("p",[t._v("The first and third statements are syntactically invalid.")])]),t._v(" "),s("li",[s("p",[t._v("Error recovery is likely to re-sync to the following statements instead of resolving this with single token insertion / deletion.")])]),t._v(" "),s("li",[s("p",[t._v("Therefore the results of embedded actions on these statements will not be useful.")])]),t._v(" "),s("li",[s("p",[t._v('Content assist is request in the third statement after the "+" operator.')])]),t._v(" "),s("li",[s("p",[t._v('If we try to send the whole text to request content assist suggestions until the offset after the "+" operator\nNo suggestions will be found due to the syntax error on the first statement.')])]),t._v(" "),s("li",[s("p",[t._v('However if we only send the text of the third statement ("let six = 1 + ") content assist will work successfully.')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"gates-predicates"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gates-predicates","aria-hidden":"true"}},[this._v("#")]),this._v(" Gates / Predicates.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("But more importantly this "),e("strong",[this._v("does not mean that grammars using Gates cannot use the content assist functionality")]),this._v(".\nRather that in some "),e("strong",[this._v("pathological edge cases")]),this._v(" the suggestions may not be completely valid.\nIn that case additional post processing logic may need to be added to farther filter the suggestions.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v('In details: the content assist parser is a "backtracking" Parser,\nwhich means it will try '),e("strong",[this._v("all")]),this._v(" the paths until it finds a valid one.\nIt disregards the max token lookahead constraints of the base Chevrotain parser.\nTherefor for a grammar path that has been disabled by a Gate / Predicate to be offered as content assist suggestion:\nNot only does the fixed tokens lookahead have to match at the Gate's position.\nThe "),e("strong",[this._v("remaining input")]),this._v(" following the Gate's position must "),e("strong",[this._v("also")]),this._v(" match.\nThis is a much stronger condition (K tokens vs dozens/hundreds/infinity) thus making this issue a very minor one.")])}],!1,null,null,null);e.default=a.exports}}]);