self.webpackChunk(["common"],{54:function(e,t,m){!function(e){"use strict";function t(e,t){if(!e.hasOwnProperty(t))throw new Error("Undefined state "+t+" in simple mode")}function m(e,t){if(!e)return/(?:)/;var m="";return e instanceof RegExp?(e.ignoreCase&&(m="i"),e=e.source):e=String(e),new RegExp((!1===t?"":"^")+"(?:"+e+")",m)}function n(e,n){(e.next||e.push)&&t(n,e.next||e.push),this.regex=m(e.regex),this.token=function(e){if(!e)return null;if(e.apply)return e;if("string"==typeof e)return e.replace(/\./g," ");for(var t=[],m=0;m<e.length;m++)t.push(e[m]&&e[m].replace(/\./g," "));return t}(e.token),this.data=e}function a(e,t){return function(m,n){if(n.pending){var a=n.pending.shift();return 0==n.pending.length&&(n.pending=null),m.pos+=a.text.length,a.token}if(n.local){if(n.local.end&&m.match(n.local.end)){var i=n.local.endToken||null;return n.local=n.localState=null,i}var s;return i=n.local.mode.token(m,n.localState),n.local.endScan&&(s=n.local.endScan.exec(m.current()))&&(m.pos=m.start+s.index),i}for(var r=e[n.state],l=0;l<r.length;l++){var x=r[l],c=(!x.data.sol||m.sol())&&m.match(x.regex);if(c){x.data.next?n.state=x.data.next:x.data.push?((n.stack||(n.stack=[])).push(n.state),n.state=x.data.push):x.data.pop&&n.stack&&n.stack.length&&(n.state=n.stack.pop()),x.data.mode&&o(t,n,x.data.mode,x.token),x.data.indent&&n.indent.push(m.indentation()+t.indentUnit),x.data.dedent&&n.indent.pop();var d=x.token;if(d&&d.apply&&(d=d(c)),c.length>2&&x.token&&"string"!=typeof x.token){n.pending=[];for(var p=2;p<c.length;p++)c[p]&&n.pending.push({text:c[p],token:x.token[p-1]});return m.backUp(c[0].length-(c[1]?c[1].length:0)),d[0]}return d&&d.join?d[0]:d}}return m.next(),null}}function i(e,t){if(e===t)return!0;if(!e||"object"!=typeof e||!t||"object"!=typeof t)return!1;var m=0;for(var n in e)if(e.hasOwnProperty(n)){if(!t.hasOwnProperty(n)||!i(e[n],t[n]))return!1;m++}for(var n in t)t.hasOwnProperty(n)&&m--;return 0==m}function o(t,n,a,o){var s;if(a.persistent)for(var r=n.persistentStates;r&&!s;r=r.next)(a.spec?i(a.spec,r.spec):a.mode==r.mode)&&(s=r);var l=s?s.mode:a.mode||e.getMode(t,a.spec),x=s?s.state:e.startState(l);a.persistent&&!s&&(n.persistentStates={mode:l,spec:a.spec,state:x,next:n.persistentStates}),n.localState=x,n.local={mode:l,end:a.end&&m(a.end),endScan:a.end&&!1!==a.forceEnd&&m(a.end,!1),endToken:o&&o.join?o[o.length-1]:o}}function s(t,m){return function(n,a,i){if(n.local&&n.local.mode.indent)return n.local.mode.indent(n.localState,a,i);if(null==n.indent||n.local||m.dontIndentStates&&function(e,t){for(var m=0;m<t.length;m++)if(t[m]===e)return!0}(n.state,m.dontIndentStates)>-1)return e.Pass;var o=n.indent.length-1,s=t[n.state];e:for(;;){for(var r=0;r<s.length;r++){var l=s[r];if(l.data.dedent&&!1!==l.data.dedentIfLineStart){var x=l.regex.exec(a);if(x&&x[0]){o--,(l.next||l.push)&&(s=t[l.next||l.push]),a=a.slice(x[0].length);continue e}}}break}return o<0?0:n.indent[o]}}e.defineSimpleMode=function(t,m){e.defineMode(t,(function(t){return e.simpleMode(t,m)}))},e.simpleMode=function(m,i){t(i,"start");var o={},r=i.meta||{},l=!1;for(var x in i)if(x!=r&&i.hasOwnProperty(x))for(var c=o[x]=[],d=i[x],p=0;p<d.length;p++){var u=d[p];c.push(new n(u,i)),(u.indent||u.dedent)&&(l=!0)}var f={startState:function(){return{state:"start",pending:null,local:null,localState:null,indent:l?[]:null}},copyState:function(t){var m={state:t.state,pending:t.pending,local:t.local,localState:null,indent:t.indent&&t.indent.slice(0)};t.localState&&(m.localState=e.copyState(t.local.mode,t.localState)),t.stack&&(m.stack=t.stack.slice(0));for(var n=t.persistentStates;n;n=n.next)m.persistentStates={mode:n.mode,spec:n.spec,state:n.state==t.localState?m.localState:e.copyState(n.mode,n.state),next:m.persistentStates};return m},token:a(o,m),innerMode:function(e){return e.local&&{mode:e.local.mode,state:e.localState}},indent:s(o,r)};if(r)for(var v in r)r.hasOwnProperty(v)&&(f[v]=r[v]);return f}}(m(0))},55:function(e,t,m){!function(e){"use strict";e.multiplexingMode=function(t){var m=Array.prototype.slice.call(arguments,1);function n(e,t,m,n){if("string"==typeof t){var a=e.indexOf(t,m);return n&&a>-1?a+t.length:a}var i=t.exec(m?e.slice(m):e);return i?i.index+m+(n?i[0].length:0):-1}return{startState:function(){return{outer:e.startState(t),innerActive:null,inner:null}},copyState:function(m){return{outer:e.copyState(t,m.outer),innerActive:m.innerActive,inner:m.innerActive&&e.copyState(m.innerActive.mode,m.inner)}},token:function(a,i){if(i.innerActive){var o=i.innerActive;if(l=a.string,!o.close&&a.sol())return i.innerActive=i.inner=null,this.token(a,i);if((c=o.close?n(l,o.close,a.pos,o.parseDelimiters):-1)==a.pos&&!o.parseDelimiters)return a.match(o.close),i.innerActive=i.inner=null,o.delimStyle&&o.delimStyle+" "+o.delimStyle+"-close";c>-1&&(a.string=l.slice(0,c));var s=o.mode.token(a,i.inner);return c>-1&&(a.string=l),c==a.pos&&o.parseDelimiters&&(i.innerActive=i.inner=null),o.innerStyle&&(s=s?s+" "+o.innerStyle:o.innerStyle),s}for(var r=1/0,l=a.string,x=0;x<m.length;++x){var c,d=m[x];if((c=n(l,d.open,a.pos))==a.pos){d.parseDelimiters||a.match(d.open),i.innerActive=d;var p=0;if(t.indent){var u=t.indent(i.outer,"","");u!==e.Pass&&(p=u)}return i.inner=e.startState(d.mode,p),d.delimStyle&&d.delimStyle+" "+d.delimStyle+"-open"}-1!=c&&c<r&&(r=c)}r!=1/0&&(a.string=l.slice(0,r));var f=t.token(a,i.outer);return r!=1/0&&(a.string=l),f},indent:function(m,n,a){var i=m.innerActive?m.innerActive.mode:t;return i.indent?i.indent(m.innerActive?m.inner:m.outer,n,a):e.Pass},blankLine:function(n){var a=n.innerActive?n.innerActive.mode:t;if(a.blankLine&&a.blankLine(n.innerActive?n.inner:n.outer),n.innerActive)"\n"===n.innerActive.close&&(n.innerActive=n.inner=null);else for(var i=0;i<m.length;++i){var o=m[i];"\n"===o.open&&(n.innerActive=o,n.inner=e.startState(o.mode,a.indent?a.indent(n.outer,"",""):0))}},electricChars:t.electricChars,innerMode:function(e){return e.inner?{state:e.inner,mode:e.innerActive.mode}:{state:e.outer,mode:t}}}}}(m(0))},56:function(e,t,m){!function(e){"use strict";e.overlayMode=function(t,m,n){return{startState:function(){return{base:e.startState(t),overlay:e.startState(m),basePos:0,baseCur:null,overlayPos:0,overlayCur:null,streamSeen:null}},copyState:function(n){return{base:e.copyState(t,n.base),overlay:e.copyState(m,n.overlay),basePos:n.basePos,baseCur:null,overlayPos:n.overlayPos,overlayCur:null}},token:function(e,a){return(e!=a.streamSeen||Math.min(a.basePos,a.overlayPos)<e.start)&&(a.streamSeen=e,a.basePos=a.overlayPos=e.start),e.start==a.basePos&&(a.baseCur=t.token(e,a.base),a.basePos=e.pos),e.start==a.overlayPos&&(e.pos=e.start,a.overlayCur=m.token(e,a.overlay),a.overlayPos=e.pos),e.pos=Math.min(a.basePos,a.overlayPos),null==a.overlayCur?a.baseCur:null!=a.baseCur&&a.overlay.combineTokens||n&&null==a.overlay.combineTokens?a.baseCur+" "+a.overlayCur:a.overlayCur},indent:t.indent&&function(e,m,n){return t.indent(e.base,m,n)},electricChars:t.electricChars,innerMode:function(e){return{state:e.base,mode:t}},blankLine:function(e){var a,i;return t.blankLine&&(a=t.blankLine(e.base)),m.blankLine&&(i=m.blankLine(e.overlay)),null==i?a:n&&null!=a?a+" "+i:i}}}}(m(0))},59:function(e,t,m){!function(e){"use strict";e.modeInfo=[{name:"APL",mime:"text/apl",mode:"apl",ext:["dyalog","apl"]},{name:"PGP",mimes:["application/pgp","application/pgp-encrypted","application/pgp-keys","application/pgp-signature"],mode:"asciiarmor",ext:["asc","pgp","sig"]},{name:"ASN.1",mime:"text/x-ttcn-asn",mode:"asn.1",ext:["asn","asn1"]},{name:"Asterisk",mime:"text/x-asterisk",mode:"asterisk",file:/^extensions\.conf$/i},{name:"Brainfuck",mime:"text/x-brainfuck",mode:"brainfuck",ext:["b","bf"]},{name:"C",mime:"text/x-csrc",mode:"clike",ext:["c","h","ino"]},{name:"C++",mime:"text/x-c++src",mode:"clike",ext:["cpp","c++","cc","cxx","hpp","h++","hh","hxx"],alias:["cpp"]},{name:"Cobol",mime:"text/x-cobol",mode:"cobol",ext:["cob","cpy"]},{name:"C#",mime:"text/x-csharp",mode:"clike",ext:["cs"],alias:["csharp","cs"]},{name:"Clojure",mime:"text/x-clojure",mode:"clojure",ext:["clj","cljc","cljx"]},{name:"ClojureScript",mime:"text/x-clojurescript",mode:"clojure",ext:["cljs"]},{name:"Closure Stylesheets (GSS)",mime:"text/x-gss",mode:"css",ext:["gss"]},{name:"CMake",mime:"text/x-cmake",mode:"cmake",ext:["cmake","cmake.in"],file:/^CMakeLists.txt$/},{name:"CoffeeScript",mimes:["application/vnd.coffeescript","text/coffeescript","text/x-coffeescript"],mode:"coffeescript",ext:["coffee"],alias:["coffee","coffee-script"]},{name:"Common Lisp",mime:"text/x-common-lisp",mode:"commonlisp",ext:["cl","lisp","el"],alias:["lisp"]},{name:"Cypher",mime:"application/x-cypher-query",mode:"cypher",ext:["cyp","cypher"]},{name:"Cython",mime:"text/x-cython",mode:"python",ext:["pyx","pxd","pxi"]},{name:"Crystal",mime:"text/x-crystal",mode:"crystal",ext:["cr"]},{name:"CSS",mime:"text/css",mode:"css",ext:["css"]},{name:"CQL",mime:"text/x-cassandra",mode:"sql",ext:["cql"]},{name:"D",mime:"text/x-d",mode:"d",ext:["d"]},{name:"Dart",mimes:["application/dart","text/x-dart"],mode:"dart",ext:["dart"]},{name:"diff",mime:"text/x-diff",mode:"diff",ext:["diff","patch"]},{name:"Django",mime:"text/x-django",mode:"django"},{name:"Dockerfile",mime:"text/x-dockerfile",mode:"dockerfile",file:/^Dockerfile$/},{name:"DTD",mime:"application/xml-dtd",mode:"dtd",ext:["dtd"]},{name:"Dylan",mime:"text/x-dylan",mode:"dylan",ext:["dylan","dyl","intr"]},{name:"EBNF",mime:"text/x-ebnf",mode:"ebnf"},{name:"ECL",mime:"text/x-ecl",mode:"ecl",ext:["ecl"]},{name:"edn",mime:"application/edn",mode:"clojure",ext:["edn"]},{name:"Eiffel",mime:"text/x-eiffel",mode:"eiffel",ext:["e"]},{name:"Elm",mime:"text/x-elm",mode:"elm",ext:["elm"]},{name:"Embedded Javascript",mime:"application/x-ejs",mode:"htmlembedded",ext:["ejs"]},{name:"Embedded Ruby",mime:"application/x-erb",mode:"htmlembedded",ext:["erb"]},{name:"Erlang",mime:"text/x-erlang",mode:"erlang",ext:["erl"]},{name:"Esper",mime:"text/x-esper",mode:"sql"},{name:"Factor",mime:"text/x-factor",mode:"factor",ext:["factor"]},{name:"FCL",mime:"text/x-fcl",mode:"fcl"},{name:"Forth",mime:"text/x-forth",mode:"forth",ext:["forth","fth","4th"]},{name:"Fortran",mime:"text/x-fortran",mode:"fortran",ext:["f","for","f77","f90","f95"]},{name:"F#",mime:"text/x-fsharp",mode:"mllike",ext:["fs"],alias:["fsharp"]},{name:"Gas",mime:"text/x-gas",mode:"gas",ext:["s"]},{name:"Gherkin",mime:"text/x-feature",mode:"gherkin",ext:["feature"]},{name:"GitHub Flavored Markdown",mime:"text/x-gfm",mode:"gfm",file:/^(readme|contributing|history).md$/i},{name:"Go",mime:"text/x-go",mode:"go",ext:["go"]},{name:"Groovy",mime:"text/x-groovy",mode:"groovy",ext:["groovy","gradle"],file:/^Jenkinsfile$/},{name:"HAML",mime:"text/x-haml",mode:"haml",ext:["haml"]},{name:"Haskell",mime:"text/x-haskell",mode:"haskell",ext:["hs"]},{name:"Haskell (Literate)",mime:"text/x-literate-haskell",mode:"haskell-literate",ext:["lhs"]},{name:"Haxe",mime:"text/x-haxe",mode:"haxe",ext:["hx"]},{name:"HXML",mime:"text/x-hxml",mode:"haxe",ext:["hxml"]},{name:"ASP.NET",mime:"application/x-aspx",mode:"htmlembedded",ext:["aspx"],alias:["asp","aspx"]},{name:"HTML",mime:"text/html",mode:"htmlmixed",ext:["html","htm","handlebars","hbs"],alias:["xhtml"]},{name:"HTTP",mime:"message/http",mode:"http"},{name:"IDL",mime:"text/x-idl",mode:"idl",ext:["pro"]},{name:"Pug",mime:"text/x-pug",mode:"pug",ext:["jade","pug"],alias:["jade"]},{name:"Java",mime:"text/x-java",mode:"clike",ext:["java"]},{name:"Java Server Pages",mime:"application/x-jsp",mode:"htmlembedded",ext:["jsp"],alias:["jsp"]},{name:"JavaScript",mimes:["text/javascript","text/ecmascript","application/javascript","application/x-javascript","application/ecmascript"],mode:"javascript",ext:["js"],alias:["ecmascript","js","node"]},{name:"JSON",mimes:["application/json","application/x-json"],mode:"javascript",ext:["json","map"],alias:["json5"]},{name:"JSON-LD",mime:"application/ld+json",mode:"javascript",ext:["jsonld"],alias:["jsonld"]},{name:"JSX",mime:"text/jsx",mode:"jsx",ext:["jsx"]},{name:"Jinja2",mime:"text/jinja2",mode:"jinja2",ext:["j2","jinja","jinja2"]},{name:"Julia",mime:"text/x-julia",mode:"julia",ext:["jl"]},{name:"Kotlin",mime:"text/x-kotlin",mode:"clike",ext:["kt"]},{name:"LESS",mime:"text/x-less",mode:"css",ext:["less"]},{name:"LiveScript",mime:"text/x-livescript",mode:"livescript",ext:["ls"],alias:["ls"]},{name:"Lua",mime:"text/x-lua",mode:"lua",ext:["lua"]},{name:"Markdown",mime:"text/x-markdown",mode:"markdown",ext:["markdown","md","mkd"]},{name:"mIRC",mime:"text/mirc",mode:"mirc"},{name:"MariaDB SQL",mime:"text/x-mariadb",mode:"sql"},{name:"Mathematica",mime:"text/x-mathematica",mode:"mathematica",ext:["m","nb","wl","wls"]},{name:"Modelica",mime:"text/x-modelica",mode:"modelica",ext:["mo"]},{name:"MUMPS",mime:"text/x-mumps",mode:"mumps",ext:["mps"]},{name:"MS SQL",mime:"text/x-mssql",mode:"sql"},{name:"mbox",mime:"application/mbox",mode:"mbox",ext:["mbox"]},{name:"MySQL",mime:"text/x-mysql",mode:"sql"},{name:"Nginx",mime:"text/x-nginx-conf",mode:"nginx",file:/nginx.*\.conf$/i},{name:"NSIS",mime:"text/x-nsis",mode:"nsis",ext:["nsh","nsi"]},{name:"NTriples",mimes:["application/n-triples","application/n-quads","text/n-triples"],mode:"ntriples",ext:["nt","nq"]},{name:"Objective-C",mime:"text/x-objectivec",mode:"clike",ext:["m"],alias:["objective-c","objc"]},{name:"Objective-C++",mime:"text/x-objectivec++",mode:"clike",ext:["mm"],alias:["objective-c++","objc++"]},{name:"OCaml",mime:"text/x-ocaml",mode:"mllike",ext:["ml","mli","mll","mly"]},{name:"Octave",mime:"text/x-octave",mode:"octave",ext:["m"]},{name:"Oz",mime:"text/x-oz",mode:"oz",ext:["oz"]},{name:"Pascal",mime:"text/x-pascal",mode:"pascal",ext:["p","pas"]},{name:"PEG.js",mime:"null",mode:"pegjs",ext:["jsonld"]},{name:"Perl",mime:"text/x-perl",mode:"perl",ext:["pl","pm"]},{name:"PHP",mimes:["text/x-php","application/x-httpd-php","application/x-httpd-php-open"],mode:"php",ext:["php","php3","php4","php5","php7","phtml"]},{name:"Pig",mime:"text/x-pig",mode:"pig",ext:["pig"]},{name:"Plain Text",mime:"text/plain",mode:"null",ext:["txt","text","conf","def","list","log"]},{name:"PLSQL",mime:"text/x-plsql",mode:"sql",ext:["pls"]},{name:"PostgreSQL",mime:"text/x-pgsql",mode:"sql"},{name:"PowerShell",mime:"application/x-powershell",mode:"powershell",ext:["ps1","psd1","psm1"]},{name:"Properties files",mime:"text/x-properties",mode:"properties",ext:["properties","ini","in"],alias:["ini","properties"]},{name:"ProtoBuf",mime:"text/x-protobuf",mode:"protobuf",ext:["proto"]},{name:"Python",mime:"text/x-python",mode:"python",ext:["BUILD","bzl","py","pyw"],file:/^(BUCK|BUILD)$/},{name:"Puppet",mime:"text/x-puppet",mode:"puppet",ext:["pp"]},{name:"Q",mime:"text/x-q",mode:"q",ext:["q"]},{name:"R",mime:"text/x-rsrc",mode:"r",ext:["r","R"],alias:["rscript"]},{name:"reStructuredText",mime:"text/x-rst",mode:"rst",ext:["rst"],alias:["rst"]},{name:"RPM Changes",mime:"text/x-rpm-changes",mode:"rpm"},{name:"RPM Spec",mime:"text/x-rpm-spec",mode:"rpm",ext:["spec"]},{name:"Ruby",mime:"text/x-ruby",mode:"ruby",ext:["rb"],alias:["jruby","macruby","rake","rb","rbx"]},{name:"Rust",mime:"text/x-rustsrc",mode:"rust",ext:["rs"]},{name:"SAS",mime:"text/x-sas",mode:"sas",ext:["sas"]},{name:"Sass",mime:"text/x-sass",mode:"sass",ext:["sass"]},{name:"Scala",mime:"text/x-scala",mode:"clike",ext:["scala"]},{name:"Scheme",mime:"text/x-scheme",mode:"scheme",ext:["scm","ss"]},{name:"SCSS",mime:"text/x-scss",mode:"css",ext:["scss"]},{name:"Shell",mimes:["text/x-sh","application/x-sh"],mode:"shell",ext:["sh","ksh","bash"],alias:["bash","sh","zsh"],file:/^PKGBUILD$/},{name:"Sieve",mime:"application/sieve",mode:"sieve",ext:["siv","sieve"]},{name:"Slim",mimes:["text/x-slim","application/x-slim"],mode:"slim",ext:["slim"]},{name:"Smalltalk",mime:"text/x-stsrc",mode:"smalltalk",ext:["st"]},{name:"Smarty",mime:"text/x-smarty",mode:"smarty",ext:["tpl"]},{name:"Solr",mime:"text/x-solr",mode:"solr"},{name:"SML",mime:"text/x-sml",mode:"mllike",ext:["sml","sig","fun","smackspec"]},{name:"Soy",mime:"text/x-soy",mode:"soy",ext:["soy"],alias:["closure template"]},{name:"SPARQL",mime:"application/sparql-query",mode:"sparql",ext:["rq","sparql"],alias:["sparul"]},{name:"Spreadsheet",mime:"text/x-spreadsheet",mode:"spreadsheet",alias:["excel","formula"]},{name:"SQL",mime:"text/x-sql",mode:"sql",ext:["sql"]},{name:"SQLite",mime:"text/x-sqlite",mode:"sql"},{name:"Squirrel",mime:"text/x-squirrel",mode:"clike",ext:["nut"]},{name:"Stylus",mime:"text/x-styl",mode:"stylus",ext:["styl"]},{name:"Swift",mime:"text/x-swift",mode:"swift",ext:["swift"]},{name:"sTeX",mime:"text/x-stex",mode:"stex"},{name:"LaTeX",mime:"text/x-latex",mode:"stex",ext:["text","ltx","tex"],alias:["tex"]},{name:"SystemVerilog",mime:"text/x-systemverilog",mode:"verilog",ext:["v","sv","svh"]},{name:"Tcl",mime:"text/x-tcl",mode:"tcl",ext:["tcl"]},{name:"Textile",mime:"text/x-textile",mode:"textile",ext:["textile"]},{name:"TiddlyWiki ",mime:"text/x-tiddlywiki",mode:"tiddlywiki"},{name:"Tiki wiki",mime:"text/tiki",mode:"tiki"},{name:"TOML",mime:"text/x-toml",mode:"toml",ext:["toml"]},{name:"Tornado",mime:"text/x-tornado",mode:"tornado"},{name:"troff",mime:"text/troff",mode:"troff",ext:["1","2","3","4","5","6","7","8","9"]},{name:"TTCN",mime:"text/x-ttcn",mode:"ttcn",ext:["ttcn","ttcn3","ttcnpp"]},{name:"TTCN_CFG",mime:"text/x-ttcn-cfg",mode:"ttcn-cfg",ext:["cfg"]},{name:"Turtle",mime:"text/turtle",mode:"turtle",ext:["ttl"]},{name:"TypeScript",mime:"application/typescript",mode:"javascript",ext:["ts"],alias:["ts"]},{name:"TypeScript-JSX",mime:"text/typescript-jsx",mode:"jsx",ext:["tsx"],alias:["tsx"]},{name:"Twig",mime:"text/x-twig",mode:"twig"},{name:"Web IDL",mime:"text/x-webidl",mode:"webidl",ext:["webidl"]},{name:"VB.NET",mime:"text/x-vb",mode:"vb",ext:["vb"]},{name:"VBScript",mime:"text/vbscript",mode:"vbscript",ext:["vbs"]},{name:"Velocity",mime:"text/velocity",mode:"velocity",ext:["vtl"]},{name:"Verilog",mime:"text/x-verilog",mode:"verilog",ext:["v"]},{name:"VHDL",mime:"text/x-vhdl",mode:"vhdl",ext:["vhd","vhdl"]},{name:"Vue.js Component",mimes:["script/x-vue","text/x-vue"],mode:"vue",ext:["vue"]},{name:"XML",mimes:["application/xml","text/xml"],mode:"xml",ext:["xml","xsl","xsd","svg"],alias:["rss","wsdl","xsd"]},{name:"XQuery",mime:"application/xquery",mode:"xquery",ext:["xy","xquery"]},{name:"Yacas",mime:"text/x-yacas",mode:"yacas",ext:["ys"]},{name:"YAML",mimes:["text/x-yaml","text/yaml"],mode:"yaml",ext:["yaml","yml"],alias:["yml"]},{name:"Z80",mime:"text/x-z80",mode:"z80",ext:["z80"]},{name:"mscgen",mime:"text/x-mscgen",mode:"mscgen",ext:["mscgen","mscin","msc"]},{name:"xu",mime:"text/x-xu",mode:"mscgen",ext:["xu"]},{name:"msgenny",mime:"text/x-msgenny",mode:"mscgen",ext:["msgenny"]}];for(var t=0;t<e.modeInfo.length;t++){var m=e.modeInfo[t];m.mimes&&(m.mime=m.mimes[0])}e.findModeByMIME=function(t){t=t.toLowerCase();for(var m=0;m<e.modeInfo.length;m++){var n=e.modeInfo[m];if(n.mime==t)return n;if(n.mimes)for(var a=0;a<n.mimes.length;a++)if(n.mimes[a]==t)return n}return/\+xml$/.test(t)?e.findModeByMIME("application/xml"):/\+json$/.test(t)?e.findModeByMIME("application/json"):void 0},e.findModeByExtension=function(t){for(var m=0;m<e.modeInfo.length;m++){var n=e.modeInfo[m];if(n.ext)for(var a=0;a<n.ext.length;a++)if(n.ext[a]==t)return n}},e.findModeByFileName=function(t){for(var m=0;m<e.modeInfo.length;m++){var n=e.modeInfo[m];if(n.file&&n.file.test(t))return n}var a=t.lastIndexOf("."),i=a>-1&&t.substring(a+1,t.length);if(i)return e.findModeByExtension(i)},e.findModeByName=function(t){t=t.toLowerCase();for(var m=0;m<e.modeInfo.length;m++){var n=e.modeInfo[m];if(n.name.toLowerCase()==t)return n;if(n.alias)for(var a=0;a<n.alias.length;a++)if(n.alias[a].toLowerCase()==t)return n}}}(m(0))}});
//# sourceMappingURL=common.js.map