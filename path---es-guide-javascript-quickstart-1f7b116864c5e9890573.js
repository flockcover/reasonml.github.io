webpackJsonp([129],{"./node_modules/json-loader/index.js!./.cache/json/es-guide-javascript-quickstart.json":function(e,t){e.exports={data:{allFile:{edges:[{node:{relativePath:"es/guide/examples.md",childMarkdownRemark:{frontmatter:{title:"Examples",order:60}}}},{node:{relativePath:"es/guide/index.md",childMarkdownRemark:{frontmatter:{title:"La Guia de Reason",order:0}}}},{node:{relativePath:"es/guide/what-and-why.md",childMarkdownRemark:{frontmatter:{title:"Que y Por que?",order:0}}}},{node:{relativePath:"es/guide/ocaml.md",childMarkdownRemark:{frontmatter:{title:"Comparison to OCaml",order:50}}}},{node:{relativePath:"es/guide/editor-tools/extra-goodies.md",childMarkdownRemark:{frontmatter:{title:"Extras",order:30}}}},{node:{relativePath:"es/guide/editor-tools/index.md",childMarkdownRemark:{frontmatter:{title:"Configuracion del Editor",order:10}}}},{node:{relativePath:"es/guide/editor-tools/editors-plugins.md",childMarkdownRemark:{frontmatter:{title:"Plugines para Editores",order:20}}}},{node:{relativePath:"es/guide/editor-tools/global-installation.md",childMarkdownRemark:{frontmatter:{title:"Instalacion Global",order:10}}}},{node:{relativePath:"es/guide/language/boolean.md",childMarkdownRemark:{frontmatter:{title:"Boolean",order:30}}}},{node:{relativePath:"es/guide/language/destructuring.md",childMarkdownRemark:{frontmatter:{title:"Destructuring",order:130}}}},{node:{relativePath:"es/guide/language/exception.md",childMarkdownRemark:{frontmatter:{title:"Exception",order:175}}}},{node:{relativePath:"es/guide/language/function.md",childMarkdownRemark:{frontmatter:{title:"Function",order:100}}}},{node:{relativePath:"es/guide/language/external.md",childMarkdownRemark:{frontmatter:{title:"External",order:170}}}},{node:{relativePath:"es/guide/language/if-else.md",childMarkdownRemark:{frontmatter:{title:"If-Else",order:110}}}},{node:{relativePath:"es/guide/language/imperative-loops.md",childMarkdownRemark:{frontmatter:{title:"Imperative Loops",order:150}}}},{node:{relativePath:"es/guide/language/integer-and-float.md",childMarkdownRemark:{frontmatter:{title:"Integer & Float",order:40}}}},{node:{relativePath:"es/guide/language/index.md",childMarkdownRemark:{frontmatter:{title:"Introduccion al Lenguaje",order:20}}}},{node:{relativePath:"es/guide/language/jsx.md",childMarkdownRemark:{frontmatter:{title:"JSX",order:160}}}},{node:{relativePath:"es/guide/language/let-binding.md",childMarkdownRemark:{frontmatter:{title:"Let Binding",order:10}}}},{node:{relativePath:"es/guide/language/list-and-array.md",childMarkdownRemark:{frontmatter:{title:"List & Array",order:80}}}},{node:{relativePath:"es/guide/language/more-on-type.md",childMarkdownRemark:{frontmatter:{title:"More on Type",order:120}}}},{node:{relativePath:"es/guide/language/module.md",childMarkdownRemark:{frontmatter:{title:"Module",order:180}}}},{node:{relativePath:"es/guide/language/overview.md",childMarkdownRemark:{frontmatter:{title:"Resumen",order:0}}}},{node:{relativePath:"es/guide/language/pattern-matching.md",childMarkdownRemark:{frontmatter:{title:"Pattern Matching!",order:135}}}},{node:{relativePath:"es/guide/language/record.md",childMarkdownRemark:{frontmatter:{title:"Record",order:60}}}},{node:{relativePath:"es/guide/language/string-and-char.md",childMarkdownRemark:{frontmatter:{title:"String & Char",order:20}}}},{node:{relativePath:"es/guide/language/tuple.md",childMarkdownRemark:{frontmatter:{title:"Tuple",order:50}}}},{node:{relativePath:"es/guide/language/type.md",childMarkdownRemark:{frontmatter:{title:"Type!",order:15}}}},{node:{relativePath:"es/guide/language/variant.md",childMarkdownRemark:{frontmatter:{title:"Variant!",order:70}}}},{node:{relativePath:"es/guide/native/convert-from-ocaml.md",childMarkdownRemark:{frontmatter:{title:"Converting from OCaml",order:4}}}},{node:{relativePath:"es/guide/native/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}},{node:{relativePath:"es/guide/native/index.md",childMarkdownRemark:{frontmatter:{title:"Native",order:40}}}},{node:{relativePath:"es/guide/javascript/index.md",childMarkdownRemark:{frontmatter:{title:"JavaScript",order:30}}}},{node:{relativePath:"es/guide/language/mutation.md",childMarkdownRemark:{frontmatter:{title:"Mutation",order:140}}}},{node:{relativePath:"es/guide/javascript/interop.md",childMarkdownRemark:{frontmatter:{title:"Interop",order:1}}}},{node:{relativePath:"es/guide/language/object.md",childMarkdownRemark:{frontmatter:{title:"Object",order:175}}}},{node:{relativePath:"es/guide/javascript/converting.md",childMarkdownRemark:{frontmatter:{title:"Converting from JS",order:5}}}},{node:{relativePath:"es/guide/javascript/libraries.md",childMarkdownRemark:{frontmatter:{title:"Libraries",order:2}}}},{node:{relativePath:"es/guide/javascript/syntax-cheatsheet.md",childMarkdownRemark:{frontmatter:{title:"Syntax Cheatsheet",order:1}}}},{node:{relativePath:"es/guide/javascript/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Guia Rapida",order:0}}}}]},file:{relativePath:"es/guide/javascript/quickstart.md",childMarkdownRemark:{html:'<div class="gatsby-highlight">\n      <pre class="hljs lang-sh"><code>npm install -g bs-platform\nbsb -init my-first-app -theme basic-reason</code></pre>\n      </div>\n<p>Y despues iniciamos como siempre:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-sh"><code><span class="hljs-built_in">cd</span> my-first-app\nnpm run build</code></pre>\n      </div>\n<p>Tambien podes compilar en modo observacion (Esto va a mirar cambios que hayas hecho y compilar automaticamente):</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-sh"><code>npm run watch</code></pre>\n      </div>\n<p>Esto va a compilar de Reason a Javascript en la carpeta <code>lib/js/</code></p>\n<p>Alternativamente, <strong>para iniciar una app <a href="//reasonml.github.io/reason-react/gettingStarted.html">ReasonReact</a></strong>, ingresa <code>bsb -init my-react-app -theme react</code> en la consola.\nMas informacion sobre bsb &#x26; bsconfig <a href="http://bucklescript.github.io/bucklescript/Manual.html#_bucklescript_build_system_code_bsb_code">aca</a>.\n<strong>Bucklescript ya viene con soporte para Reason</strong>, por eso mismo no hay necesidad de instalar nada especifico a Reason.</p>',frontmatter:{title:"Guia Rapida"}}}},pathContext:{section:"es/guide",sectionTitle:"Guide",relativePath:"es/guide/javascript/quickstart.md",relatedFiles:"/^es\\/guide\\/.*\\.md$/"}}}});
//# sourceMappingURL=path---es-guide-javascript-quickstart-1f7b116864c5e9890573.js.map