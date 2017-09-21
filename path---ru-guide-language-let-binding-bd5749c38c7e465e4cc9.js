webpackJsonp([31],{"./node_modules/json-loader/index.js!./.cache/json/ru-guide-language-let-binding.json":function(e,a){e.exports={data:{allFile:{edges:[{node:{relativePath:"ru/guide/index.md",childMarkdownRemark:{frontmatter:{title:"Гайд по Reason",order:0}}}},{node:{relativePath:"ru/guide/examples.md",childMarkdownRemark:{frontmatter:{title:"Примеры",order:60}}}},{node:{relativePath:"ru/guide/ocaml.md",childMarkdownRemark:{frontmatter:{title:"Comparison to OCaml",order:50}}}},{node:{relativePath:"ru/guide/what-and-why.md",childMarkdownRemark:{frontmatter:{title:"Что и Зачем",order:0}}}},{node:{relativePath:"ru/guide/editor-tools/editors-plugins.md",childMarkdownRemark:{frontmatter:{title:"Плагины редактора",order:20}}}},{node:{relativePath:"ru/guide/editor-tools/extra-goodies.md",childMarkdownRemark:{frontmatter:{title:"Дополнительные бонусы",order:30}}}},{node:{relativePath:"ru/guide/editor-tools/global-installation.md",childMarkdownRemark:{frontmatter:{title:"Глобальная установка",order:10}}}},{node:{relativePath:"ru/guide/editor-tools/index.md",childMarkdownRemark:{frontmatter:{title:"Настройка редактора",order:10}}}},{node:{relativePath:"ru/guide/javascript/converting.md",childMarkdownRemark:{frontmatter:{title:"Перенос JS кода",order:5}}}},{node:{relativePath:"ru/guide/javascript/index.md",childMarkdownRemark:{frontmatter:{title:"JavaScript",order:30}}}},{node:{relativePath:"ru/guide/javascript/libraries.md",childMarkdownRemark:{frontmatter:{title:"Библиотеки",order:2}}}},{node:{relativePath:"ru/guide/javascript/interop.md",childMarkdownRemark:{frontmatter:{title:"Взаимодействие",order:1}}}},{node:{relativePath:"ru/guide/javascript/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Быстрый старт",order:0}}}},{node:{relativePath:"ru/guide/javascript/syntax-cheatsheet.md",childMarkdownRemark:{frontmatter:{title:"Шпаргалка по синтаксису",order:1}}}},{node:{relativePath:"ru/guide/language/boolean.md",childMarkdownRemark:{frontmatter:{title:"Булев",order:30}}}},{node:{relativePath:"ru/guide/language/exception.md",childMarkdownRemark:{frontmatter:{title:"Исключения",order:175}}}},{node:{relativePath:"ru/guide/language/destructuring.md",childMarkdownRemark:{frontmatter:{title:"Деструктурирование",order:130}}}},{node:{relativePath:"ru/guide/language/external.md",childMarkdownRemark:{frontmatter:{title:"External",order:170}}}},{node:{relativePath:"ru/guide/language/imperative-loops.md",childMarkdownRemark:{frontmatter:{title:"Императивные циклы",order:150}}}},{node:{relativePath:"ru/guide/language/if-else.md",childMarkdownRemark:{frontmatter:{title:"If-Else",order:110}}}},{node:{relativePath:"ru/guide/language/index.md",childMarkdownRemark:{frontmatter:{title:"Основы языка",order:20}}}},{node:{relativePath:"ru/guide/language/integer-and-float.md",childMarkdownRemark:{frontmatter:{title:"Числа",order:40}}}},{node:{relativePath:"ru/guide/language/let-binding.md",childMarkdownRemark:{frontmatter:{title:"Let привязка",order:10}}}},{node:{relativePath:"ru/guide/language/function.md",childMarkdownRemark:{frontmatter:{title:"Функция",order:100}}}},{node:{relativePath:"ru/guide/language/jsx.md",childMarkdownRemark:{frontmatter:{title:"JSX",order:160}}}},{node:{relativePath:"ru/guide/language/mutation.md",childMarkdownRemark:{frontmatter:{title:"Мутации",order:140}}}},{node:{relativePath:"ru/guide/language/more-on-type.md",childMarkdownRemark:{frontmatter:{title:"Больше о типах",order:120}}}},{node:{relativePath:"ru/guide/language/list-and-array.md",childMarkdownRemark:{frontmatter:{title:"Список и Массив",order:80}}}},{node:{relativePath:"ru/guide/language/module.md",childMarkdownRemark:{frontmatter:{title:"Модуль",order:180}}}},{node:{relativePath:"ru/guide/language/object.md",childMarkdownRemark:{frontmatter:{title:"Объект",order:175}}}},{node:{relativePath:"ru/guide/language/overview.md",childMarkdownRemark:{frontmatter:{title:"Обзор",order:0}}}},{node:{relativePath:"ru/guide/language/pattern-matching.md",childMarkdownRemark:{frontmatter:{title:"Паттерн-матчинг",order:135}}}},{node:{relativePath:"ru/guide/language/string-and-char.md",childMarkdownRemark:{frontmatter:{title:"Строка и символ",order:20}}}},{node:{relativePath:"ru/guide/language/record.md",childMarkdownRemark:{frontmatter:{title:"Запись",order:60}}}},{node:{relativePath:"ru/guide/language/type.md",childMarkdownRemark:{frontmatter:{title:"Тип!",order:15}}}},{node:{relativePath:"ru/guide/language/variant.md",childMarkdownRemark:{frontmatter:{title:"Вариант!",order:70}}}},{node:{relativePath:"ru/guide/language/tuple.md",childMarkdownRemark:{frontmatter:{title:"Кортеж",order:50}}}},{node:{relativePath:"ru/guide/native/convert-from-ocaml.md",childMarkdownRemark:{frontmatter:{title:"Converting from OCaml",order:4}}}},{node:{relativePath:"ru/guide/native/index.md",childMarkdownRemark:{frontmatter:{title:"Native",order:40}}}},{node:{relativePath:"ru/guide/native/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}}]},file:{relativePath:"ru/guide/language/let-binding.md",childMarkdownRemark:{html:'<p>let привязка (let binding) в других языках называется декларацией/присваиванием переменной.\n<code>let</code>дает имена значениям. Они могут быть видимы и используемы кодом ниже.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> greeting = <span class="hljs-string">"hello!"</span>;\n<span class="hljs-keyword">let</span> score = <span class="hljs-number">10</span>;\n<span class="hljs-keyword">let</span> newScore = <span class="hljs-number">10</span> + score;\n...</code></pre>\n      </div>\n<h3 id="Блочная-область-видимости"><a href="#%D0%91%D0%BB%D0%BE%D1%87%D0%BD%D0%B0%D1%8F-%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C-%D0%B2%D0%B8%D0%B4%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D0%B8" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Блочная область видимости</h3>\n<p>Область видимости переменных может быть ограничена при помощи <code>{}</code>.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">if</span> (displayGreeting) {\n  <span class="hljs-keyword">let</span> message = <span class="hljs-string">"Вам нравится эта документация?"</span>;\n  print_endline message;\n};\n<span class="hljs-comment">/* `message` не видима здесь! */</span></code></pre>\n      </div>\n<h3 id="Привязки-неизменяемы"><a href="#%D0%9F%D1%80%D0%B8%D0%B2%D1%8F%D0%B7%D0%BA%D0%B8-%D0%BD%D0%B5%D0%B8%D0%B7%D0%BC%D0%B5%D0%BD%D1%8F%D0%B5%D0%BC%D1%8B" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Привязки неизменяемы</h3>\n<p>Как только привязка начала ссылаться на значение, она не может ссылаться на что либо еще (кроме случаем, когда\nона явно содержит изменяемое значение, о котором будет сказано позже). Однако, вы можете создать новую привязку\nс тем же самым именем, которое <em>закроет</em> предыдущую привязку. И начиная с этого момента привязка будет ссылаться\nна новое значение.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> message = <span class="hljs-string">"hello"</span>;\nprint_endline message; <span class="hljs-comment">/* Выведет "hello" */</span>\n<span class="hljs-keyword">let</span> message = <span class="hljs-string">"bye"</span>;\nprint_endline message; <span class="hljs-comment">/* Выведет "bye" */</span></code></pre>\n      </div>\n<h3 id="Советы-и-трюки"><a href="#%D0%A1%D0%BE%D0%B2%D0%B5%D1%82%D1%8B-%D0%B8-%D1%82%D1%80%D1%8E%D0%BA%D0%B8" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Советы и трюки</h3>\n<p>Так как область видимости ограничена <code>{}</code>, вы можете создавать анонимные переменные:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> message = {\n  <span class="hljs-keyword">let</span> part1 = <span class="hljs-string">"hello"</span>;\n  <span class="hljs-keyword">let</span> part2 = <span class="hljs-string">"world"</span>;\n  part1 ^ <span class="hljs-string">" "</span> ^ part2\n};\n<span class="hljs-comment">/* `part1` и `part2` недоступны здесь! */</span></code></pre>\n      </div>\n<p>Это позволяет не допустить использования переменных ниже в коде.</p>\n<h3 id="Дизайн-решения"><a href="#%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D1%80%D0%B5%D1%88%D0%B5%D0%BD%D0%B8%D1%8F" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Дизайн решения</h3>\n<p>Reason использует OCaml под капотом. Let биндинг в OCaml выглядит так:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-ocaml"><code><span class="hljs-keyword">let</span> a = <span class="hljs-number">1</span> <span class="hljs-keyword">in</span>\n<span class="hljs-keyword">let</span> b = <span class="hljs-number">2</span> <span class="hljs-keyword">in</span>\na + b</code></pre>\n      </div>\n<p>Что концептуально может быть прочитано как:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-ocaml"><code><span class="hljs-keyword">let</span> a = <span class="hljs-number">1</span> <span class="hljs-keyword">in</span>\n  <span class="hljs-keyword">let</span> b = <span class="hljs-number">2</span> <span class="hljs-keyword">in</span>\n    a + b</code></pre>\n      </div>\n<p>Что может напомнить вам:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-comment">/* Reason синтаксис */</span>\n<span class="hljs-func"><span class="hljs-keyword">fun</span><span class="hljs-params"> a<span class="hljs-params"> </span></span></span>=&gt;\n  <span class="hljs-func"><span class="hljs-keyword">fun</span><span class="hljs-params"> b<span class="hljs-params"> </span></span></span>=&gt;\n    a + b;</code></pre>\n      </div>\n<p>Не смотря на то, что это разные вещи, вы можете видеть, что <code>let</code> является просто выражением! В Reason мы\nзаменили <code>in</code> на <code>;</code> для сходства с JS, но не забывайте, что внутри это выражение.</p>',frontmatter:{title:"Let привязка"}}}},pathContext:{section:"ru/guide",sectionTitle:"Guide",relativePath:"ru/guide/language/let-binding.md",relatedFiles:"/^ru\\/guide\\/.*\\.md$/"}}}});
//# sourceMappingURL=path---ru-guide-language-let-binding-bd5749c38c7e465e4cc9.js.map