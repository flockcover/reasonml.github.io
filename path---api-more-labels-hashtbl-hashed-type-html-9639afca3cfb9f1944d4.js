webpackJsonp([343],{"./node_modules/json-loader/index.js!./.cache/json/api-more-labels-hashtbl-hashed-type-html.json":function(e,a){e.exports={data:{file:{relativePath:"api/MoreLabels.Hashtbl.HashedType.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar">&#xA0;<a class="up" href="MoreLabels.Hashtbl.html" title="MoreLabels.Hashtbl">Up</a>\n&#xA0;<a class="post" href="MoreLabels.Hashtbl.SeededHashedType.html" title="MoreLabels.Hashtbl.SeededHashedType">Next</a>\n</div>\n<h1>Module type <a href="type_MoreLabels.Hashtbl.HashedType.html">MoreLabels.Hashtbl.HashedType</a></h1>\n\n<pre><span class="keyword">module</span> type HashedType = Hashtbl.HashedType;\n</pre><hr width="100%">\n\n<pre id="TYPEt"><span class="keyword">type</span> t;\n</pre>\n<div class="info ">\nThe type of the hashtable keys.<br>\n</div>\n\n\n<pre id="VALequal"><span class="keyword">let</span> equal: t =&gt; t =&gt; bool;\n</pre><div class="info ">\nThe equality predicate used to compare keys.<br>\n</div>\n\n<pre id="VALhash"><span class="keyword">let</span> hash: t =&gt; int;\n</pre><div class="info ">\nA hashing function on keys. It must be such that if two keys are\n          equal according to <code class="code">equal</code>, then they have identical hash values\n          as computed by <code class="code">hash</code>.\n          Examples: suitable (<code class="code">equal</code>, <code class="code">hash</code>) pairs for arbitrary key\n          types include<ul>\n<li>        (<code class="code">(=)</code>, <a href="Hashtbl.html#VALhash"><code class="code">Hashtbl.hash</code></a>) for comparing objects by structure\n              (provided objects do not contain floats)</li>\n<li>        (<code class="code">(fun x y -&gt; compare x y = 0)</code>, <a href="Hashtbl.html#VALhash"><code class="code">Hashtbl.hash</code></a>)\n              for comparing objects by structure\n              and handling <a href="Pervasives.html#VALnan"><code class="code">Pervasives.nan</code></a> correctly</li>\n<li>        (<code class="code">(==)</code>, <a href="Hashtbl.html#VALhash"><code class="code">Hashtbl.hash</code></a>) for comparing objects by physical\n              equality (e.g. for mutable or cyclic objects).</li>\n</ul>\n<br>\n</div>\n</div>'}}},pathContext:{relativePath:"api/MoreLabels.Hashtbl.HashedType.html"}}}});
//# sourceMappingURL=path---api-more-labels-hashtbl-hashed-type-html-9639afca3cfb9f1944d4.js.map