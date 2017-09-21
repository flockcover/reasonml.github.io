webpackJsonp([156],{"./node_modules/json-loader/index.js!./.cache/json/api-weak-html.json":function(e,a){e.exports={data:{file:{relativePath:"api/Weak.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar"><a class="pre" href="Sys.html" title="Sys">Previous</a>\n&#xA0;<a class="up" href="index.html" title="Index">Up</a>\n&#xA0;<a class="post" href="Ast_helper.html" title="Ast_helper">Next</a>\n</div>\n<h1>Module <a href="type_Weak.html">Weak</a></h1>\n\n<pre><span class="keyword">module</span> Weak: sig .. end</pre><div class="info module top">\nArrays of weak pointers and hash tables of weak pointers.<br>\n</div>\n<hr width="100%">\n<br>\n<h6 id="6_Lowlevelfunctions">Low-level functions</h6><br>\n\n<pre id="TYPEt"><span class="keyword">type</span> t &apos;a;\n</pre>\n<div class="info ">\nThe type of arrays of weak pointers (weak arrays).  A weak\n   pointer is a value that the garbage collector may erase whenever\n   the value is not used any more (through normal pointers) by the\n   program.  Note that finalisation functions are run after the\n   weak pointers are erased.\n<p>\n\n   A weak pointer is said to be full if it points to a value,\n   empty if the value was erased by the GC.\n</p><p>\n\n   Notes:</p><ul>\n<li>Integers are not allocated and cannot be stored in weak arrays.</li>\n<li>Weak arrays cannot be marshaled using <a href="Pervasives.html#VALoutput_value"><code class="code">Pervasives.output_value</code></a>\n     nor the functions of the <a href="Marshal.html"><code class="code">Marshal</code></a> module.</li>\n</ul>\n<br>\n</div>\n\n\n<pre id="VALcreate"><span class="keyword">let</span> create: int =&gt; t &apos;a;\n</pre><div class="info ">\n<code class="code">Weak.create n</code> returns a new weak array of length <code class="code">n</code>.\n   All the pointers are initially empty.  Raise <code class="code">Invalid_argument</code>\n   if <code class="code">n</code> is negative or greater than <a href="Sys.html#VALmax_array_length"><code class="code">Sys.max_array_length</code></a><code class="code">-1</code>.<br>\n</div>\n\n<pre id="VALlength"><span class="keyword">let</span> length: t &apos;a =&gt; int;\n</pre><div class="info ">\n<code class="code">Weak.length ar</code> returns the length (number of elements) of\n   <code class="code">ar</code>.<br>\n</div>\n\n<pre id="VALset"><span class="keyword">let</span> set: t &apos;a =&gt; int =&gt; option &apos;a =&gt; unit;\n</pre><div class="info ">\n<code class="code">Weak.set ar n (Some el)</code> sets the <code class="code">n</code>th cell of <code class="code">ar</code> to be a\n   (full) pointer to <code class="code">el</code>; <code class="code">Weak.set ar n None</code> sets the <code class="code">n</code>th\n   cell of <code class="code">ar</code> to empty.\n   Raise <code class="code">Invalid_argument &quot;Weak.set&quot;</code> if <code class="code">n</code> is not in the range\n   0 to <a href="Weak.html#VALlength"><code class="code">Weak.length</code></a><code class="code"> a - 1</code>.<br>\n</div>\n\n<pre id="VALget"><span class="keyword">let</span> get: t &apos;a =&gt; int =&gt; option &apos;a;\n</pre><div class="info ">\n<code class="code">Weak.get ar n</code> returns None if the <code class="code">n</code>th cell of <code class="code">ar</code> is\n   empty, <code class="code">Some x</code> (where <code class="code">x</code> is the value) if it is full.\n   Raise <code class="code">Invalid_argument &quot;Weak.get&quot;</code> if <code class="code">n</code> is not in the range\n   0 to <a href="Weak.html#VALlength"><code class="code">Weak.length</code></a><code class="code"> a - 1</code>.<br>\n</div>\n\n<pre id="VALget_copy"><span class="keyword">let</span> get_copy: t &apos;a =&gt; int =&gt; option &apos;a;\n</pre><div class="info ">\n<code class="code">Weak.get_copy ar n</code> returns None if the <code class="code">n</code>th cell of <code class="code">ar</code> is\n   empty, <code class="code">Some x</code> (where <code class="code">x</code> is a (shallow) copy of the value) if\n   it is full.\n   In addition to pitfalls with mutable values, the interesting\n   difference with <code class="code">get</code> is that <code class="code">get_copy</code> does not prevent\n   the incremental GC from erasing the value in its current cycle\n   (<code class="code">get</code> may delay the erasure to the next GC cycle).\n   Raise <code class="code">Invalid_argument &quot;Weak.get&quot;</code> if <code class="code">n</code> is not in the range\n   0 to <a href="Weak.html#VALlength"><code class="code">Weak.length</code></a><code class="code"> a - 1</code>.<br>\n</div>\n\n<pre id="VALcheck"><span class="keyword">let</span> check: t &apos;a =&gt; int =&gt; bool;\n</pre><div class="info ">\n<code class="code">Weak.check ar n</code> returns <code class="code">true</code> if the <code class="code">n</code>th cell of <code class="code">ar</code> is\n   full, <code class="code">false</code> if it is empty.  Note that even if <code class="code">Weak.check ar n</code>\n   returns <code class="code">true</code>, a subsequent <a href="Weak.html#VALget"><code class="code">Weak.get</code></a><code class="code"> ar n</code> can return <code class="code">None</code>.<br>\n</div>\n\n<pre id="VALfill"><span class="keyword">let</span> fill: t &apos;a =&gt; int =&gt; int =&gt; option &apos;a =&gt; unit;\n</pre><div class="info ">\n<code class="code">Weak.fill ar ofs len el</code> sets to <code class="code">el</code> all pointers of <code class="code">ar</code> from\n   <code class="code">ofs</code> to <code class="code">ofs + len - 1</code>.  Raise <code class="code">Invalid_argument &quot;Weak.fill&quot;</code>\n   if <code class="code">ofs</code> and <code class="code">len</code> do not designate a valid subarray of <code class="code">a</code>.<br>\n</div>\n\n<pre id="VALblit"><span class="keyword">let</span> blit: t &apos;a =&gt; int =&gt; t &apos;a =&gt; int =&gt; int =&gt; unit;\n</pre><div class="info ">\n<code class="code">Weak.blit ar1 off1 ar2 off2 len</code> copies <code class="code">len</code> weak pointers\n   from <code class="code">ar1</code> (starting at <code class="code">off1</code>) to <code class="code">ar2</code> (starting at <code class="code">off2</code>).\n   It works correctly even if <code class="code">ar1</code> and <code class="code">ar2</code> are the same.\n   Raise <code class="code">Invalid_argument &quot;Weak.blit&quot;</code> if <code class="code">off1</code> and <code class="code">len</code> do\n   not designate a valid subarray of <code class="code">ar1</code>, or if <code class="code">off2</code> and <code class="code">len</code>\n   do not designate a valid subarray of <code class="code">ar2</code>.<br>\n</div>\n<br>\n<h6 id="6_Weakhashtables">Weak hash tables</h6><br>\n<br>\n<h6 id="6_Weakhashtables">Weak hash tables</h6><br>\n<br>\nA weak hash table is a hashed set of values.  Each value may\n    magically disappear from the set when it is not used by the\n    rest of the program any more.  This is normally used to share\n    data structures without inducing memory leaks.\n    Weak hash tables are defined on values from a <a href="Hashtbl.HashedType.html"><code class="code">Hashtbl.HashedType</code></a>\n    module; the <code class="code">equal</code> relation and <code class="code">hash</code> function are taken from that\n    module.  We will say that <code class="code">v</code> is an instance of <code class="code">x</code> if <code class="code">equal x v</code>\n    is <code class="code">true</code>.\n<p>\n\n    The <code class="code">equal</code> relation must be able to work on a shallow copy of\n    the values and give the same result as with the values themselves.<br>\n\n</p><pre><span class="keyword">module</span> type S = sig .. end</pre><div class="info">\nThe output signature of the functor <a href="Weak.Make.html"><code class="code">Weak.Make</code></a>.\n</div>\n\n<pre><span class="keyword">module</span> Make: (H: Hashtbl.HashedType) =&gt; S with type data = H.t;\n</pre><div class="info">\nFunctor building an implementation of the weak hash table structure.\n</div>\n</div>'}}},pathContext:{relativePath:"api/Weak.html"}}}});
//# sourceMappingURL=path---api-weak-html-b7f047bc7c80187b7fa8.js.map