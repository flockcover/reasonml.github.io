webpackJsonp([114],{"./node_modules/json-loader/index.js!./.cache/json/es-guide-language-more-on-type.json":function(e,a){e.exports={data:{allFile:{edges:[{node:{relativePath:"es/guide/examples.md",childMarkdownRemark:{frontmatter:{title:"Examples",order:60}}}},{node:{relativePath:"es/guide/index.md",childMarkdownRemark:{frontmatter:{title:"La Guia de Reason",order:0}}}},{node:{relativePath:"es/guide/what-and-why.md",childMarkdownRemark:{frontmatter:{title:"Que y Por que?",order:0}}}},{node:{relativePath:"es/guide/ocaml.md",childMarkdownRemark:{frontmatter:{title:"Comparison to OCaml",order:50}}}},{node:{relativePath:"es/guide/editor-tools/extra-goodies.md",childMarkdownRemark:{frontmatter:{title:"Extras",order:30}}}},{node:{relativePath:"es/guide/editor-tools/index.md",childMarkdownRemark:{frontmatter:{title:"Configuracion del Editor",order:10}}}},{node:{relativePath:"es/guide/editor-tools/editors-plugins.md",childMarkdownRemark:{frontmatter:{title:"Plugines para Editores",order:20}}}},{node:{relativePath:"es/guide/editor-tools/global-installation.md",childMarkdownRemark:{frontmatter:{title:"Instalacion Global",order:10}}}},{node:{relativePath:"es/guide/language/boolean.md",childMarkdownRemark:{frontmatter:{title:"Boolean",order:30}}}},{node:{relativePath:"es/guide/language/destructuring.md",childMarkdownRemark:{frontmatter:{title:"Destructuring",order:130}}}},{node:{relativePath:"es/guide/language/exception.md",childMarkdownRemark:{frontmatter:{title:"Exception",order:175}}}},{node:{relativePath:"es/guide/language/function.md",childMarkdownRemark:{frontmatter:{title:"Function",order:100}}}},{node:{relativePath:"es/guide/language/external.md",childMarkdownRemark:{frontmatter:{title:"External",order:170}}}},{node:{relativePath:"es/guide/language/if-else.md",childMarkdownRemark:{frontmatter:{title:"If-Else",order:110}}}},{node:{relativePath:"es/guide/language/imperative-loops.md",childMarkdownRemark:{frontmatter:{title:"Imperative Loops",order:150}}}},{node:{relativePath:"es/guide/language/integer-and-float.md",childMarkdownRemark:{frontmatter:{title:"Integer & Float",order:40}}}},{node:{relativePath:"es/guide/language/index.md",childMarkdownRemark:{frontmatter:{title:"Introduccion al Lenguaje",order:20}}}},{node:{relativePath:"es/guide/language/jsx.md",childMarkdownRemark:{frontmatter:{title:"JSX",order:160}}}},{node:{relativePath:"es/guide/language/let-binding.md",childMarkdownRemark:{frontmatter:{title:"Let Binding",order:10}}}},{node:{relativePath:"es/guide/language/list-and-array.md",childMarkdownRemark:{frontmatter:{title:"List & Array",order:80}}}},{node:{relativePath:"es/guide/language/more-on-type.md",childMarkdownRemark:{frontmatter:{title:"More on Type",order:120}}}},{node:{relativePath:"es/guide/language/module.md",childMarkdownRemark:{frontmatter:{title:"Module",order:180}}}},{node:{relativePath:"es/guide/language/overview.md",childMarkdownRemark:{frontmatter:{title:"Resumen",order:0}}}},{node:{relativePath:"es/guide/language/pattern-matching.md",childMarkdownRemark:{frontmatter:{title:"Pattern Matching!",order:135}}}},{node:{relativePath:"es/guide/language/record.md",childMarkdownRemark:{frontmatter:{title:"Record",order:60}}}},{node:{relativePath:"es/guide/language/string-and-char.md",childMarkdownRemark:{frontmatter:{title:"String & Char",order:20}}}},{node:{relativePath:"es/guide/language/tuple.md",childMarkdownRemark:{frontmatter:{title:"Tuple",order:50}}}},{node:{relativePath:"es/guide/language/type.md",childMarkdownRemark:{frontmatter:{title:"Type!",order:15}}}},{node:{relativePath:"es/guide/language/variant.md",childMarkdownRemark:{frontmatter:{title:"Variant!",order:70}}}},{node:{relativePath:"es/guide/native/convert-from-ocaml.md",childMarkdownRemark:{frontmatter:{title:"Converting from OCaml",order:4}}}},{node:{relativePath:"es/guide/native/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}},{node:{relativePath:"es/guide/native/index.md",childMarkdownRemark:{frontmatter:{title:"Native",order:40}}}},{node:{relativePath:"es/guide/javascript/index.md",childMarkdownRemark:{frontmatter:{title:"JavaScript",order:30}}}},{node:{relativePath:"es/guide/language/mutation.md",childMarkdownRemark:{frontmatter:{title:"Mutation",order:140}}}},{node:{relativePath:"es/guide/javascript/interop.md",childMarkdownRemark:{frontmatter:{title:"Interop",order:1}}}},{node:{relativePath:"es/guide/language/object.md",childMarkdownRemark:{frontmatter:{title:"Object",order:175}}}},{node:{relativePath:"es/guide/javascript/converting.md",childMarkdownRemark:{frontmatter:{title:"Converting from JS",order:5}}}},{node:{relativePath:"es/guide/javascript/libraries.md",childMarkdownRemark:{frontmatter:{title:"Libraries",order:2}}}},{node:{relativePath:"es/guide/javascript/syntax-cheatsheet.md",childMarkdownRemark:{frontmatter:{title:"Syntax Cheatsheet",order:1}}}},{node:{relativePath:"es/guide/javascript/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Guia Rapida",order:0}}}}]},file:{relativePath:"es/guide/language/more-on-type.md",childMarkdownRemark:{html:'<h3 id="type-argument"><a href="#type-argument" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Type Argument!</h3>\n<p>Types can accept parameters, akin to generics in other languages. It\'s as if a type is a function that takes in arguments and returns a new type! The parameters <strong>need</strong> to start with <code>\'</code>.</p>\n<p>The use-case of a parameterized type is to kill duplications. Before:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-comment">/* this is a tuple of 3 items, explained next */</span>\n<span class="hljs-keyword">type</span> intCoordinates = (int, int, int);\n<span class="hljs-keyword">type</span> floatCoordinates = (float, float, float);\n\n<span class="hljs-keyword">let</span> buddy: intCoordinates = (<span class="hljs-number">10</span>, <span class="hljs-number">20</span>, <span class="hljs-number">20</span>);</code></pre>\n      </div>\n<p>After:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> coordinates \'a = (\'a, \'a, \'a);\n\n<span class="hljs-comment">/* apply the coordinates "type function" and return the type (int, int, int) */</span>\n<span class="hljs-keyword">type</span> intCoordinatesAlias = coordinates int;\n<span class="hljs-keyword">let</span> buddy: intCoordinatesAlias = (<span class="hljs-number">10</span>, <span class="hljs-number">20</span>, <span class="hljs-number">20</span>);\n\n<span class="hljs-comment">/* or, more commonly, write it inline */</span>\n<span class="hljs-keyword">let</span> buddy: coordinates float = (<span class="hljs-number">10.5</span>, <span class="hljs-number">20.5</span>, <span class="hljs-number">20.5</span>);</code></pre>\n      </div>\n<p>In practice, types are inferred for you. So the more concise version of the above example would be nothing but:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> buddy = (<span class="hljs-number">10</span>, <span class="hljs-number">20</span>, <span class="hljs-number">20</span>);</code></pre>\n      </div>\n<p>The type system infers that it\'s a <code>(int, int, int)</code>. Nothing else needed to be written down.</p>\n<p>Type arguments appear everywhere.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-comment">/* inferred as `list string` */</span>\n<span class="hljs-keyword">let</span> greetings = [<span class="hljs-string">"hello"</span>, <span class="hljs-string">"world"</span>, <span class="hljs-string">"how are you"</span>];</code></pre>\n      </div>\n<p>If types didn\'t accept parameters (aka, if we didn\'t have "type functions"), the standard library will need to define the types <code>listOfString</code>, <code>listOfInt</code>, <code>listOfTuplesOfInt</code>, etc.</p>\n<p>Types can receive more arguments, and be composable.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> result \'a \'b =\n| <span class="hljs-type">Ok</span> \'a\n| <span class="hljs-type">Error</span> \'b;\n\n<span class="hljs-keyword">type</span> myPayload = {data: string};\n\n<span class="hljs-keyword">type</span> myPayloadResults \'errorType = list (result myPayload \'errorType);\n\n<span class="hljs-keyword">let</span> payloadResults: myPayloadResults string = [\n  <span class="hljs-type">Ok</span> {data: <span class="hljs-string">"hi"</span>},\n  <span class="hljs-type">Ok</span> {data: <span class="hljs-string">"bye"</span>},\n  <span class="hljs-type">Error</span> <span class="hljs-string">"Something wrong happened!"</span>\n];</code></pre>\n      </div>\n<h3 id="mutually-recursive-types"><a href="#mutually-recursive-types" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Mutually Recursive Types</h3>\n<p>Just like functions, types can be mutually recursive through <code>and</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> student = {taughtBy: teacher}\nand teacher = {students: list student};</code></pre>\n      </div>\n<p><strong>Note</strong> that there\'s no semicolon ending the first line and no <code>type</code> on the second line.</p>',frontmatter:{title:"More on Type"}}}},pathContext:{section:"es/guide",sectionTitle:"Guide",relativePath:"es/guide/language/more-on-type.md",relatedFiles:"/^es\\/guide\\/.*\\.md$/"}}}});
//# sourceMappingURL=path---es-guide-language-more-on-type-b241a4c542dc661c3fb7.js.map