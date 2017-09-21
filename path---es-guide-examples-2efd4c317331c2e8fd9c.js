webpackJsonp([133],{"./node_modules/json-loader/index.js!./.cache/json/es-guide-examples.json":function(e,a){e.exports={data:{allFile:{edges:[{node:{relativePath:"es/guide/examples.md",childMarkdownRemark:{frontmatter:{title:"Examples",order:60}}}},{node:{relativePath:"es/guide/index.md",childMarkdownRemark:{frontmatter:{title:"La Guia de Reason",order:0}}}},{node:{relativePath:"es/guide/what-and-why.md",childMarkdownRemark:{frontmatter:{title:"Que y Por que?",order:0}}}},{node:{relativePath:"es/guide/ocaml.md",childMarkdownRemark:{frontmatter:{title:"Comparison to OCaml",order:50}}}},{node:{relativePath:"es/guide/editor-tools/extra-goodies.md",childMarkdownRemark:{frontmatter:{title:"Extras",order:30}}}},{node:{relativePath:"es/guide/editor-tools/index.md",childMarkdownRemark:{frontmatter:{title:"Configuracion del Editor",order:10}}}},{node:{relativePath:"es/guide/editor-tools/editors-plugins.md",childMarkdownRemark:{frontmatter:{title:"Plugines para Editores",order:20}}}},{node:{relativePath:"es/guide/editor-tools/global-installation.md",childMarkdownRemark:{frontmatter:{title:"Instalacion Global",order:10}}}},{node:{relativePath:"es/guide/language/boolean.md",childMarkdownRemark:{frontmatter:{title:"Boolean",order:30}}}},{node:{relativePath:"es/guide/language/destructuring.md",childMarkdownRemark:{frontmatter:{title:"Destructuring",order:130}}}},{node:{relativePath:"es/guide/language/exception.md",childMarkdownRemark:{frontmatter:{title:"Exception",order:175}}}},{node:{relativePath:"es/guide/language/function.md",childMarkdownRemark:{frontmatter:{title:"Function",order:100}}}},{node:{relativePath:"es/guide/language/external.md",childMarkdownRemark:{frontmatter:{title:"External",order:170}}}},{node:{relativePath:"es/guide/language/if-else.md",childMarkdownRemark:{frontmatter:{title:"If-Else",order:110}}}},{node:{relativePath:"es/guide/language/imperative-loops.md",childMarkdownRemark:{frontmatter:{title:"Imperative Loops",order:150}}}},{node:{relativePath:"es/guide/language/integer-and-float.md",childMarkdownRemark:{frontmatter:{title:"Integer & Float",order:40}}}},{node:{relativePath:"es/guide/language/index.md",childMarkdownRemark:{frontmatter:{title:"Introduccion al Lenguaje",order:20}}}},{node:{relativePath:"es/guide/language/jsx.md",childMarkdownRemark:{frontmatter:{title:"JSX",order:160}}}},{node:{relativePath:"es/guide/language/let-binding.md",childMarkdownRemark:{frontmatter:{title:"Let Binding",order:10}}}},{node:{relativePath:"es/guide/language/list-and-array.md",childMarkdownRemark:{frontmatter:{title:"List & Array",order:80}}}},{node:{relativePath:"es/guide/language/more-on-type.md",childMarkdownRemark:{frontmatter:{title:"More on Type",order:120}}}},{node:{relativePath:"es/guide/language/module.md",childMarkdownRemark:{frontmatter:{title:"Module",order:180}}}},{node:{relativePath:"es/guide/language/overview.md",childMarkdownRemark:{frontmatter:{title:"Resumen",order:0}}}},{node:{relativePath:"es/guide/language/pattern-matching.md",childMarkdownRemark:{frontmatter:{title:"Pattern Matching!",order:135}}}},{node:{relativePath:"es/guide/language/record.md",childMarkdownRemark:{frontmatter:{title:"Record",order:60}}}},{node:{relativePath:"es/guide/language/string-and-char.md",childMarkdownRemark:{frontmatter:{title:"String & Char",order:20}}}},{node:{relativePath:"es/guide/language/tuple.md",childMarkdownRemark:{frontmatter:{title:"Tuple",order:50}}}},{node:{relativePath:"es/guide/language/type.md",childMarkdownRemark:{frontmatter:{title:"Type!",order:15}}}},{node:{relativePath:"es/guide/language/variant.md",childMarkdownRemark:{frontmatter:{title:"Variant!",order:70}}}},{node:{relativePath:"es/guide/native/convert-from-ocaml.md",childMarkdownRemark:{frontmatter:{title:"Converting from OCaml",order:4}}}},{node:{relativePath:"es/guide/native/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}},{node:{relativePath:"es/guide/native/index.md",childMarkdownRemark:{frontmatter:{title:"Native",order:40}}}},{node:{relativePath:"es/guide/javascript/index.md",childMarkdownRemark:{frontmatter:{title:"JavaScript",order:30}}}},{node:{relativePath:"es/guide/language/mutation.md",childMarkdownRemark:{frontmatter:{title:"Mutation",order:140}}}},{node:{relativePath:"es/guide/javascript/interop.md",childMarkdownRemark:{frontmatter:{title:"Interop",order:1}}}},{node:{relativePath:"es/guide/language/object.md",childMarkdownRemark:{frontmatter:{title:"Object",order:175}}}},{node:{relativePath:"es/guide/javascript/converting.md",childMarkdownRemark:{frontmatter:{title:"Converting from JS",order:5}}}},{node:{relativePath:"es/guide/javascript/libraries.md",childMarkdownRemark:{frontmatter:{title:"Libraries",order:2}}}},{node:{relativePath:"es/guide/javascript/syntax-cheatsheet.md",childMarkdownRemark:{frontmatter:{title:"Syntax Cheatsheet",order:1}}}},{node:{relativePath:"es/guide/javascript/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Guia Rapida",order:0}}}}]},file:{relativePath:"es/guide/examples.md",childMarkdownRemark:{html:'<p>An example is worth a thousand words.</p>\n<p>This section is dedicated to newcomers trying to figure out general idioms &#x26; conventions in Reason and BuckleScript. If you\'re a beginner who\'s got a good idea for an example, please suggest an edit!</p>\n<h3 id="using-the-option-type"><a href="#using-the-option-type" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using the <code>option</code> type</h3>\n<p><code>option</code> is a <a href="/guide/language/variant">variant</a> that comes with the <a href="/api/index.html">standard library</a>. It obviates the need for null values in other languages.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> possiblyNullValue1 = <span class="hljs-type">None</span>;\n<span class="hljs-keyword">let</span> possiblyNullValue2 = <span class="hljs-type">Some</span> <span class="hljs-string">"Hello@"</span>;\n\n<span class="hljs-keyword">switch</span> possiblyNullValue2 {\n| <span class="hljs-type">None</span> =&gt; print_endline <span class="hljs-string">"Nothing to see here."</span>\n| <span class="hljs-type">Some</span> message =&gt; print_endline message\n};</code></pre>\n      </div>\n<h3 id="creating-a-parametrized-type"><a href="#creating-a-parametrized-type" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Creating a parametrized type</h3>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> universityStudent = {gpa: float};\n\n<span class="hljs-keyword">type</span> response \'studentType = {status: int, student: \'studentType};\n\n<span class="hljs-keyword">let</span> result: response universityStudent = fetchDataFromServer ();</code></pre>\n      </div>\n<h3 id="creating-a-js-object"><a href="#creating-a-js-object" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Creating a JS Object</h3>\n<p>Assuming you\'re <a href="/guide/javascript">compiling to JS</a>, of course.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> obj1 = {\n  <span class="hljs-string">"name"</span>: <span class="hljs-string">"John"</span>,\n  <span class="hljs-string">"age"</span>: <span class="hljs-number">30</span>\n};\n<span class="hljs-comment">/* Compiles to a JS object that looks exactly like what you\'re seeing */</span></code></pre>\n      </div>\n<p>Note that the above isn\'t a record; the keys are quoted in string. That\'s Reason syntax sugar for <a href="http://bucklescript.github.io/bucklescript/Manual.html#_create_js_objects_using_bs_obj">bs.obj</a>. The type is inferred. Next example explicitly types it.</p>\n<h3 id="typing-a-js-object"><a href="#typing-a-js-object" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Typing a JS Object</h3>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> payload = <span class="hljs-type">Js</span>.t {.\n  name: string,\n  age: int\n};\n<span class="hljs-keyword">let</span> obj1: payload = {<span class="hljs-string">"name"</span>: <span class="hljs-string">"John"</span>, <span class="hljs-string">"age"</span>: <span class="hljs-number">30</span>};</code></pre>\n      </div>\n<p>Note that <code>{. name: string, age: int}</code> is the syntax for a Reason/OCaml object type declaration (not a record!). It\'s lifted into <code>Js.t</code> so that BuckleScript sees the whole type and compiles it correctly to a regular JavaScript object. Ordinary, non-lifted OCaml objects are compiled into something else (rarely needed currently).</p>\n<h3 id="binding-to-a-js-module-with-default-export"><a href="#binding-to-a-js-module-with-default-export" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Binding to a JS Module with Default Export</h3>\n<p>Assuming the module\'s called <code>store.js</code>, and has a default export, plus a method called <code>getDate</code>.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> store = <span class="hljs-type">Js</span>.t {. getDate : (unit =&gt; float) [@bs.meth]};\nexternal store : store = <span class="hljs-string">"./store"</span> [@@bs.<span class="hljs-keyword">module</span>];\n<span class="hljs-type">Js</span>.log store;\n<span class="hljs-type">Js</span>.log (store##getDate ());</code></pre>\n      </div>',frontmatter:{title:"Examples"}}}},pathContext:{section:"es/guide",sectionTitle:"Guide",relativePath:"es/guide/examples.md",relatedFiles:"/^es\\/guide\\/.*\\.md$/"}}}});
//# sourceMappingURL=path---es-guide-examples-2efd4c317331c2e8fd9c.js.map