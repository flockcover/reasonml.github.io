webpackJsonp([21],{"./node_modules/json-loader/index.js!./.cache/json/ru-guide-language-tuple.json":function(e,a){e.exports={data:{allFile:{edges:[{node:{relativePath:"ru/guide/examples.md",childMarkdownRemark:{frontmatter:{title:"Примеры",order:60}}}},{node:{relativePath:"ru/guide/index.md",childMarkdownRemark:{frontmatter:{title:"Гайд по Reason",order:0}}}},{node:{relativePath:"ru/guide/ocaml.md",childMarkdownRemark:{frontmatter:{title:"Comparison to OCaml",order:50}}}},{node:{relativePath:"ru/guide/what-and-why.md",childMarkdownRemark:{frontmatter:{title:"Что и Зачем",order:0}}}},{node:{relativePath:"ru/guide/editor-tools/editors-plugins.md",childMarkdownRemark:{frontmatter:{title:"Плагины редактора",order:20}}}},{node:{relativePath:"ru/guide/editor-tools/extra-goodies.md",childMarkdownRemark:{frontmatter:{title:"Дополнительные бонусы",order:30}}}},{node:{relativePath:"ru/guide/editor-tools/index.md",childMarkdownRemark:{frontmatter:{title:"Настройка редактора",order:10}}}},{node:{relativePath:"ru/guide/editor-tools/global-installation.md",childMarkdownRemark:{frontmatter:{title:"Глобальная установка",order:10}}}},{node:{relativePath:"ru/guide/javascript/converting.md",childMarkdownRemark:{frontmatter:{title:"Перенос JS кода",order:5}}}},{node:{relativePath:"ru/guide/javascript/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Быстрый старт",order:0}}}},{node:{relativePath:"ru/guide/javascript/index.md",childMarkdownRemark:{frontmatter:{title:"JavaScript",order:30}}}},{node:{relativePath:"ru/guide/javascript/libraries.md",childMarkdownRemark:{frontmatter:{title:"Библиотеки",order:2}}}},{node:{relativePath:"ru/guide/javascript/interop.md",childMarkdownRemark:{frontmatter:{title:"Взаимодействие",order:1}}}},{node:{relativePath:"ru/guide/language/exception.md",childMarkdownRemark:{frontmatter:{title:"Исключения",order:175}}}},{node:{relativePath:"ru/guide/language/boolean.md",childMarkdownRemark:{frontmatter:{title:"Булев",order:30}}}},{node:{relativePath:"ru/guide/javascript/syntax-cheatsheet.md",childMarkdownRemark:{frontmatter:{title:"Шпаргалка по синтаксису",order:1}}}},{node:{relativePath:"ru/guide/language/destructuring.md",childMarkdownRemark:{frontmatter:{title:"Деструктурирование",order:130}}}},{node:{relativePath:"ru/guide/language/imperative-loops.md",childMarkdownRemark:{frontmatter:{title:"Императивные циклы",order:150}}}},{node:{relativePath:"ru/guide/language/if-else.md",childMarkdownRemark:{frontmatter:{title:"If-Else",order:110}}}},{node:{relativePath:"ru/guide/language/external.md",childMarkdownRemark:{frontmatter:{title:"External",order:170}}}},{node:{relativePath:"ru/guide/language/index.md",childMarkdownRemark:{frontmatter:{title:"Основы языка",order:20}}}},{node:{relativePath:"ru/guide/language/function.md",childMarkdownRemark:{frontmatter:{title:"Функция",order:100}}}},{node:{relativePath:"ru/guide/language/integer-and-float.md",childMarkdownRemark:{frontmatter:{title:"Числа",order:40}}}},{node:{relativePath:"ru/guide/language/let-binding.md",childMarkdownRemark:{frontmatter:{title:"Let привязка",order:10}}}},{node:{relativePath:"ru/guide/language/list-and-array.md",childMarkdownRemark:{frontmatter:{title:"Список и Массив",order:80}}}},{node:{relativePath:"ru/guide/language/jsx.md",childMarkdownRemark:{frontmatter:{title:"JSX",order:160}}}},{node:{relativePath:"ru/guide/language/module.md",childMarkdownRemark:{frontmatter:{title:"Модуль",order:180}}}},{node:{relativePath:"ru/guide/language/mutation.md",childMarkdownRemark:{frontmatter:{title:"Мутации",order:140}}}},{node:{relativePath:"ru/guide/language/object.md",childMarkdownRemark:{frontmatter:{title:"Объект",order:175}}}},{node:{relativePath:"ru/guide/language/overview.md",childMarkdownRemark:{frontmatter:{title:"Обзор",order:0}}}},{node:{relativePath:"ru/guide/language/more-on-type.md",childMarkdownRemark:{frontmatter:{title:"Больше о типах",order:120}}}},{node:{relativePath:"ru/guide/language/string-and-char.md",childMarkdownRemark:{frontmatter:{title:"Строка и символ",order:20}}}},{node:{relativePath:"ru/guide/language/record.md",childMarkdownRemark:{frontmatter:{title:"Запись",order:60}}}},{node:{relativePath:"ru/guide/language/pattern-matching.md",childMarkdownRemark:{frontmatter:{title:"Паттерн-матчинг",order:135}}}},{node:{relativePath:"ru/guide/language/tuple.md",childMarkdownRemark:{frontmatter:{title:"Кортеж",order:50}}}},{node:{relativePath:"ru/guide/language/type.md",childMarkdownRemark:{frontmatter:{title:"Тип!",order:15}}}},{node:{relativePath:"ru/guide/native/convert-from-ocaml.md",childMarkdownRemark:{frontmatter:{title:"Converting from OCaml",order:4}}}},{node:{relativePath:"ru/guide/language/variant.md",childMarkdownRemark:{frontmatter:{title:"Вариант!",order:70}}}},{node:{relativePath:"ru/guide/native/index.md",childMarkdownRemark:{frontmatter:{title:"Native",order:40}}}},{node:{relativePath:"ru/guide/native/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}}]},file:{relativePath:"ru/guide/language/tuple.md",childMarkdownRemark:{html:'<p>Кортежи (tuple) являются:</p>\n<ul>\n<li>немутабельными</li>\n<li>упорядоченными</li>\n<li>фиксированного размера, заданного во время создания</li>\n<li>гетерогенными (могут содержать значения разных типов)</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> ageAndName = (<span class="hljs-number">24</span>, <span class="hljs-string">"Lil\' Reason"</span>);\n<span class="hljs-keyword">let</span> my3dCoordinates = (<span class="hljs-number">20.0</span>, <span class="hljs-number">30.5</span>, <span class="hljs-number">100.0</span>);</code></pre>\n      </div>\n<p>Кортежи-типы могут быть использованы в аннотациях. Кортежи-типы визуально напоминают кортежи-значения.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> ageAndName: (int, string) = (<span class="hljs-number">24</span>, <span class="hljs-string">"Lil\' Reason"</span>);\n<span class="hljs-comment">/* псевдоним кортежа */</span>\n<span class="hljs-keyword">type</span> coord3d = (float, float, float);\n<span class="hljs-keyword">let</span> my3dCoordinates: coord3d = (<span class="hljs-number">20.0</span>, <span class="hljs-number">30.5</span>, <span class="hljs-number">100.0</span>);</code></pre>\n      </div>\n<p><strong>Важно</strong>: не бывает кортежа размера 1. Это просто значение.</p>\n<h3 id="Использование"><a href="#%D0%98%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Использование</h3>\n<p>Стандартная библиотека предоставляет функции <code>fst</code> и <code>snd</code> (<a href="/api/Pervasives.html">тут</a>, под "Pair\noperations"), удобные для того, чтобы получить элементы кортежа длинны 2. В основном вы используете\nдеструктурирование для получения значений кортежа:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> (<span class="hljs-number">_</span>, y, <span class="hljs-number">_</span>) = my3dCoordinates; <span class="hljs-comment">/* теперь у вас есть значение y */</span></code></pre>\n      </div>\n<p>Символ <code>_</code> означает, что вы игнорируете остальные элементы.</p>\n<p>Кортежи нельзя менять, вы можете создавать новые, деструктурируя старые.</p>\n<h3 id="Советы-и-трюки"><a href="#%D0%A1%D0%BE%D0%B2%D0%B5%D1%82%D1%8B-%D0%B8-%D1%82%D1%80%D1%8E%D0%BA%D0%B8" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Советы и трюки</h3>\n<p>Кортежи удобно использовать когда нужно передать или вернуть несколько значений без особых церемоний.\nНапример, чтобы вернуть несколько значений:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> getCenterCoordinates () =&gt; {\n  <span class="hljs-keyword">let</span> x = doSomeOperationsHere ();\n  <span class="hljs-keyword">let</span> y = doSomeMoreOperationsHere ();\n  (x, y)\n};</code></pre>\n      </div>\n<p>Или паттерн-матчинг для всех возможных вариантов</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">switch</span> (isWindowOpen, isDoorOpen) { <span class="hljs-comment">/* кортеж размера 2 */</span>\n| (<span class="hljs-literal">true</span>, <span class="hljs-literal">true</span>) =&gt; ...\n| (<span class="hljs-literal">true</span>, <span class="hljs-literal">false</span>) =&gt; ...\n| (<span class="hljs-literal">false</span>, <span class="hljs-literal">true</span>) =&gt; ...\n| (<span class="hljs-literal">false</span>, <span class="hljs-literal">false</span>) =&gt; ...\n}</code></pre>\n      </div>\n<p>Старайтесь использовать кортежи <strong>локально</strong>. Для структуры данных, которая живет долго и передается в\nразличные функции предпочтите <strong>запись (record)</strong>, которая имеет именованные поля.</p>\n<p>Кортежи иногда называют "типом-произведением", и <code>(string, int)</code> записывается как <code>string * int</code>\nВ некоторых местах. Идея в том, что кортеж является "декартовым произведением". Представьте себе 2х мерную\nплоскость, на X оси которой <code>string</code>, а на Y оси <code>int</code>.</p>\n<p>Комбинация кортежа и <code>switch</code> очень мощная и лаконичная и позволяет <strong>избегать целой категории ошибок</strong>.\nВместе они часто перечисляют все возможные комбинации значение. Кортеж типа <code>(bool, bool)</code> действительно\nимеет <code>2 * 2 = 4</code> возможных вариации. И система типов попросит покрыть все 4. Это отлично ложится на\nрефакторинг. Вместо того, чтобы добавлять if-else для определенных значение, вы можете просто добавлять\nеще одну ветку в <code>switch</code></p>\n<h3 id="Дизайн-решения"><a href="#%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D1%80%D0%B5%D1%88%D0%B5%D0%BD%D0%B8%D1%8F" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Дизайн решения</h3>\n<p>Существование Tuple может показаться странным для тех, кто приходит из нетипизированных языков. "Почему бы просто не использовать список / массив?"</p>\n<p>Система типов не всесильна, и не должна такой быть. Необходимы некоторые вкусовые компромиссы для того,\nчтобы держать язык простым, производительным (компиляция и работа) и простым для понимания. Reason списки\nболее гибки в плане размера. Их можно соединять, разрезать и так далее. В замен они должны быть гомогенными\n(содержать только один тип данных). И случайный доступ по индексу может быть не всегда возможным*.\nКортежи, с другой стороны, с помощью фиксированного размера, являются более быстрыми, дают системе типов\nсвободу действие для отслеживания всех элементов и гарантируют безопасный доступ. В общем вы заметите\nнесколько выдающихся компромиссов в системе типов: поля записей фиксированы, но могут быть гетерогенны,\nа поля словаря (map) могут быть гибкими, но гомогенными. И так далее.</p>\n<p>Кортеж типизирован "структурно". Это значит, что даже если вы не укажите типы явно, компилятор все равно\nвыведет их из содержимого, использования и так далее. До тех пор пока декларация и использования выведеных\nтипов совпадают, все отлично!</p>\n<p>* Дело не в том, что система типов не может принять гетерогенность динамических списков. Она на самом деле\nможет. Но использование такой функциональности ухудшает как начальное изучение, так и понимание кода.\nПросто потому, что типы могут такое сделать, не всегда полезно вносить такую сложность.</p>',frontmatter:{title:"Кортеж"}}}},pathContext:{section:"ru/guide",sectionTitle:"Guide",relativePath:"ru/guide/language/tuple.md",relatedFiles:"/^ru\\/guide\\/.*\\.md$/"}}}});
//# sourceMappingURL=path---ru-guide-language-tuple-a6097207208768757c1a.js.map