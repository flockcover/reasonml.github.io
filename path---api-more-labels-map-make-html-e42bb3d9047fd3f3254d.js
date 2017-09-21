webpackJsonp([334],{"./node_modules/json-loader/index.js!./.cache/json/api-more-labels-map-make-html.json":function(a,t){a.exports={data:{file:{relativePath:"api/MoreLabels.Map.Make.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar">&#xA0;<a class="up" href="MoreLabels.Map.html" title="MoreLabels.Map">Up</a>\n&#xA0;</div>\n<h1>Functor <a href="type_MoreLabels.Map.Make.html">MoreLabels.Map.Make</a></h1>\n\n<pre><span class="keyword">module</span> Make: (Ord: OrderedType) =&gt; S with type key = Ord.t;\n</pre><table border="0" cellpadding="3" width="100%">\n<tbody><tr>\n<td align="left" valign="top" width="1%%"><b>Parameters: </b></td>\n<td>\n<table class="paramstable">\n<tbody><tr>\n<td align="center" valign="top" width="15%">\n<code>Ord</code></td>\n<td align="center" valign="top">:</td>\n<td><code class="type">OrderedType</code>\n</td></tr></tbody></table>\n</td>\n</tr>\n</tbody></table>\n<hr width="100%">\n\n<pre id="TYPEkey"><span class="keyword">type</span> key;\n</pre>\n\n\n<pre id="TYPEt"><span class="keyword">type</span> t +&apos;a;\n</pre>\n\n\n<pre id="VALempty"><span class="keyword">let</span> empty: t &apos;a;\n</pre>\n<pre id="VALis_empty"><span class="keyword">let</span> is_empty: t &apos;a =&gt; bool;\n</pre>\n<pre id="VALmem"><span class="keyword">let</span> mem: key =&gt; t &apos;a =&gt; bool;\n</pre>\n<pre id="VALadd"><span class="keyword">let</span> add: key::key =&gt; data::&apos;a =&gt; t &apos;a =&gt; t &apos;a;\n</pre>\n<pre id="VALsingleton"><span class="keyword">let</span> singleton: key =&gt; &apos;a =&gt; t &apos;a;\n</pre>\n<pre id="VALremove"><span class="keyword">let</span> remove: key =&gt; t &apos;a =&gt; t &apos;a;\n</pre>\n<pre id="VALmerge"><span class="keyword">let</span> merge: f::(key =&gt; option &apos;a =&gt; option &apos;b =&gt; option &apos;c) =&gt; t &apos;a =&gt; t &apos;b =&gt; t &apos;c;\n</pre>\n<pre id="VALcompare"><span class="keyword">let</span> compare: cmp::(&apos;a =&gt; &apos;a =&gt; int) =&gt; t &apos;a =&gt; t &apos;a =&gt; int;\n</pre>\n<pre id="VALequal"><span class="keyword">let</span> equal: cmp::(&apos;a =&gt; &apos;a =&gt; bool) =&gt; t &apos;a =&gt; t &apos;a =&gt; bool;\n</pre>\n<pre id="VALiter"><span class="keyword">let</span> iter: f::(key::key =&gt; data::&apos;a =&gt; unit) =&gt; t &apos;a =&gt; unit;\n</pre>\n<pre id="VALfold"><span class="keyword">let</span> fold: f::(key::key =&gt; data::&apos;a =&gt; &apos;b =&gt; &apos;b) =&gt; t &apos;a =&gt; init::&apos;b =&gt; &apos;b;\n</pre>\n<pre id="VALfor_all"><span class="keyword">let</span> for_all: f::(key =&gt; &apos;a =&gt; bool) =&gt; t &apos;a =&gt; bool;\n</pre>\n<pre id="VALexists"><span class="keyword">let</span> exists: f::(key =&gt; &apos;a =&gt; bool) =&gt; t &apos;a =&gt; bool;\n</pre>\n<pre id="VALfilter"><span class="keyword">let</span> filter: f::(key =&gt; &apos;a =&gt; bool) =&gt; t &apos;a =&gt; t &apos;a;\n</pre>\n<pre id="VALpartition"><span class="keyword">let</span> partition: f::(key =&gt; &apos;a =&gt; bool) =&gt; t &apos;a =&gt; (t &apos;a, t &apos;a);\n</pre>\n<pre id="VALcardinal"><span class="keyword">let</span> cardinal: t &apos;a =&gt; int;\n</pre>\n<pre id="VALbindings"><span class="keyword">let</span> bindings: t &apos;a =&gt; list (key, &apos;a);\n</pre>\n<pre id="VALmin_binding"><span class="keyword">let</span> min_binding: t &apos;a =&gt; (key, &apos;a);\n</pre>\n<pre id="VALmax_binding"><span class="keyword">let</span> max_binding: t &apos;a =&gt; (key, &apos;a);\n</pre>\n<pre id="VALchoose"><span class="keyword">let</span> choose: t &apos;a =&gt; (key, &apos;a);\n</pre>\n<pre id="VALsplit"><span class="keyword">let</span> split: key =&gt; t &apos;a =&gt; (t &apos;a, option &apos;a, t &apos;a);\n</pre>\n<pre id="VALfind"><span class="keyword">let</span> find: key =&gt; t &apos;a =&gt; &apos;a;\n</pre>\n<pre id="VALmap"><span class="keyword">let</span> map: f::(&apos;a =&gt; &apos;b) =&gt; t &apos;a =&gt; t &apos;b;\n</pre>\n<pre id="VALmapi"><span class="keyword">let</span> mapi: f::(key =&gt; &apos;a =&gt; &apos;b) =&gt; t &apos;a =&gt; t &apos;b;\n</pre></div>'}}},pathContext:{relativePath:"api/MoreLabels.Map.Make.html"}}}});
//# sourceMappingURL=path---api-more-labels-map-make-html-e42bb3d9047fd3f3254d.js.map