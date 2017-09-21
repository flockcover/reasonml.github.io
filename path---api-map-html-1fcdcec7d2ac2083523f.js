webpackJsonp([348],{"./node_modules/json-loader/index.js!./.cache/json/api-map-html.json":function(e,a){e.exports={data:{file:{relativePath:"api/Map.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar"><a class="pre" href="ListLabels.html" title="ListLabels">Previous</a>\n&#xA0;<a class="up" href="index.html" title="Index">Up</a>\n&#xA0;<a class="post" href="Marshal.html" title="Marshal">Next</a>\n</div>\n<h1>Module <a href="type_Map.html">Map</a></h1>\n\n<pre><span class="keyword">module</span> Map: sig .. end</pre><div class="info module top">\nAssociation tables over ordered types.\n<p>\n\n   This module implements applicative association tables, also known as\n   finite maps or dictionaries, given a total ordering function\n   over the keys.\n   All operations over maps are purely applicative (no side-effects).\n   The implementation uses balanced binary trees, and therefore searching\n   and insertion take time logarithmic in the size of the map.\n</p><p>\n\n   For instance:\n   </p><pre class="codepre">     module IntPairs =\n       struct\n         type t = int * int\n         let compare (x0,y0) (x1,y1) =\n           match Pervasives.compare x0 x1 with\n               0 -&gt; Pervasives.compare y0 y1\n             | c -&gt; c\n       end\n\n     module PairsMap = Map.Make(IntPairs)\n\n     let m = PairsMap.(empty |&gt; add (0,1) &quot;hello&quot; |&gt; add (1,0) &quot;world&quot;)\n   </pre>\n<p>\n\n   This creates a new module <code class="code">PairsMap</code>, with a new type <code class="code">&apos;a PairsMap.t</code>\n   of maps from <code class="code">int * int</code> to <code class="code">&apos;a</code>. In this example, <code class="code">m</code> contains <code class="code">string</code>\n   values so its type is <code class="code">string PairsMap.t</code>.<br>\n</p></div>\n<hr width="100%">\n\n<pre><span class="keyword">module</span> type OrderedType = sig .. end</pre><div class="info">\nInput signature of the functor <a href="Map.Make.html"><code class="code">Map.Make</code></a>.\n</div>\n\n<pre><span class="keyword">module</span> type S = sig .. end</pre><div class="info">\nOutput signature of the functor <a href="Map.Make.html"><code class="code">Map.Make</code></a>.\n</div>\n\n<pre><span class="keyword">module</span> Make: (Ord: OrderedType) =&gt; S with type key = Ord.t;\n</pre><div class="info">\nFunctor building an implementation of the map structure\n   given a totally ordered type.\n</div>\n</div>'}}},pathContext:{relativePath:"api/Map.html"}}}});
//# sourceMappingURL=path---api-map-html-1fcdcec7d2ac2083523f.js.map