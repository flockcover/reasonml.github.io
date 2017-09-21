webpackJsonp([393],{"./node_modules/json-loader/index.js!./.cache/json/api-bigarray-html.json":function(e,n){e.exports={data:{file:{relativePath:"api/Bigarray.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar"><a class="pre" href="Str.html" title="Str">Previous</a>\n&#xA0;<a class="up" href="index.html" title="Index">Up</a>\n&#xA0;<a class="post" href="Num.html" title="Num">Next</a>\n</div>\n<h1>Module <a href="type_Bigarray.html">Bigarray</a></h1>\n\n<pre><span class="keyword">module</span> Bigarray: sig .. end</pre><div class="info module top">\nLarge, multi-dimensional, numerical arrays.\n<p>\n\n   This module implements multi-dimensional arrays of integers and\n   floating-point numbers, thereafter referred to as &apos;big arrays&apos;.\n   The implementation allows efficient sharing of large numerical\n   arrays between OCaml code and C or Fortran numerical libraries.\n</p><p>\n\n   Concerning the naming conventions, users of this module are encouraged\n   to do <code class="code">open Bigarray;\n</code> in their source, then refer to array types and\n   operations via short dot notation, e.g. <code class="code">Array1.t</code> or <code class="code">Array2.sub</code>.\n</p><p>\n\n   Big arrays support all the OCaml ad-hoc polymorphic operations:</p><ul>\n<li>comparisons (<code class="code">=</code>, <code class="code">&lt;&gt;</code>, <code class="code">&lt;=</code>, etc, as well as <a href="Pervasives.html#VALcompare"><code class="code">Pervasives.compare</code></a>);</li>\n<li>hashing (module <code class="code">Hash</code>);</li>\n<li>and structured input-output (the functions from the\n     <a href="Marshal.html"><code class="code">Marshal</code></a> module, as well as <a href="Pervasives.html#VALoutput_value"><code class="code">Pervasives.output_value</code></a>\n     and <a href="Pervasives.html#VALinput_value"><code class="code">Pervasives.input_value</code></a>).</li>\n</ul>\n<br>\n</div>\n<hr width="100%">\n<br>\n<h6 id="6_Elementkinds">Element kinds</h6><br>\n<br>\n<h6 id="6_Elementkinds">Element kinds</h6><br>\n<br>\nBig arrays can contain elements of the following kinds:<ul>\n<li>IEEE single precision (32 bits) floating-point numbers\n   (<a href="Bigarray.html#TYPEfloat32_elt"><code class="code">Bigarray.float32_elt</code></a>),</li>\n<li>IEEE double precision (64 bits) floating-point numbers\n   (<a href="Bigarray.html#TYPEfloat64_elt"><code class="code">Bigarray.float64_elt</code></a>),</li>\n<li>IEEE single precision (2 * 32 bits) floating-point complex numbers\n   (<a href="Bigarray.html#TYPEcomplex32_elt"><code class="code">Bigarray.complex32_elt</code></a>),</li>\n<li>IEEE double precision (2 * 64 bits) floating-point complex numbers\n   (<a href="Bigarray.html#TYPEcomplex64_elt"><code class="code">Bigarray.complex64_elt</code></a>),</li>\n<li>8-bit integers (signed or unsigned)\n   (<a href="Bigarray.html#TYPEint8_signed_elt"><code class="code">Bigarray.int8_signed_elt</code></a> or <a href="Bigarray.html#TYPEint8_unsigned_elt"><code class="code">Bigarray.int8_unsigned_elt</code></a>),</li>\n<li>16-bit integers (signed or unsigned)\n   (<a href="Bigarray.html#TYPEint16_signed_elt"><code class="code">Bigarray.int16_signed_elt</code></a> or <a href="Bigarray.html#TYPEint16_unsigned_elt"><code class="code">Bigarray.int16_unsigned_elt</code></a>),</li>\n<li>OCaml integers (signed, 31 bits on 32-bit architectures,\n   63 bits on 64-bit architectures) (<a href="Bigarray.html#TYPEint_elt"><code class="code">Bigarray.int_elt</code></a>),</li>\n<li>32-bit signed integer (<a href="Bigarray.html#TYPEint32_elt"><code class="code">Bigarray.int32_elt</code></a>),</li>\n<li>64-bit signed integers (<a href="Bigarray.html#TYPEint64_elt"><code class="code">Bigarray.int64_elt</code></a>),</li>\n<li>platform-native signed integers (32 bits on 32-bit architectures,\n   64 bits on 64-bit architectures) (<a href="Bigarray.html#TYPEnativeint_elt"><code class="code">Bigarray.nativeint_elt</code></a>).</li>\n</ul>\n\n   Each element kind is represented at the type level by one of the\n   <code class="code">*_elt</code> types defined below (defined with a single constructor instead\n   of abstract types for technical injectivity reasons).<br>\n\n<pre><span class="keyword">type</span> float32_elt = </pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Float32_elt</code></td>\n\n</tr></tbody></table>\n\n\n\n<pre><span class="keyword">type</span> float64_elt = </pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Float64_elt</code></td>\n\n</tr></tbody></table>\n\n\n\n<pre><span class="keyword">type</span> int8_signed_elt = </pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Int8_signed_elt</code></td>\n\n</tr></tbody></table>\n\n\n\n<pre><span class="keyword">type</span> int8_unsigned_elt = </pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Int8_unsigned_elt</code></td>\n\n</tr></tbody></table>\n\n\n\n<pre><span class="keyword">type</span> int16_signed_elt = </pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Int16_signed_elt</code></td>\n\n</tr></tbody></table>\n\n\n\n<pre><span class="keyword">type</span> int16_unsigned_elt = </pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Int16_unsigned_elt</code></td>\n\n</tr></tbody></table>\n\n\n\n<pre><span class="keyword">type</span> int32_elt = </pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Int32_elt</code></td>\n\n</tr></tbody></table>\n\n\n\n<pre><span class="keyword">type</span> int64_elt = </pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Int64_elt</code></td>\n\n</tr></tbody></table>\n\n\n\n<pre><span class="keyword">type</span> int_elt = </pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Int_elt</code></td>\n\n</tr></tbody></table>\n\n\n\n<pre><span class="keyword">type</span> nativeint_elt = </pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Nativeint_elt</code></td>\n\n</tr></tbody></table>\n\n\n\n<pre><span class="keyword">type</span> complex32_elt = </pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Complex32_elt</code></td>\n\n</tr></tbody></table>\n\n\n\n<pre><span class="keyword">type</span> complex64_elt = </pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Complex64_elt</code></td>\n\n</tr></tbody></table>\n\n\n\n<pre><span class="keyword">type</span> (&apos;a, &apos;b) kind = </pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Float32 : (float, float32_elt) kind</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Float64 : (float, float64_elt) kind</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Int8_signed : (int, int8_signed_elt) kind</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Int8_unsigned : (int, int8_unsigned_elt) kind</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Int16_signed : (int, int16_signed_elt) kind</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Int16_unsigned : (int, int16_unsigned_elt) kind</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Int32 : (int32, int32_elt) kind</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Int64 : (int64, int64_elt) kind</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Int : (int, int_elt) kind</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Nativeint : (nativeint, nativeint_elt) kind</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Complex32 : (Complex.t, complex32_elt) kind</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Complex64 : (Complex.t, complex64_elt) kind</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Char : (char, int8_unsigned_elt) kind</code></td>\n<td class="typefieldcomment" align="left" valign="top"><code>(*</code></td><td class="typefieldcomment" align="left" valign="top"><div class="info ">\nTo each element kind is associated an OCaml type, which is\n   the type of OCaml values that can be stored in the big array\n   or read back from it.  This type is not necessarily the same\n   as the type of the array elements proper: for instance,\n   a big array whose elements are of kind <code class="code">float32_elt</code> contains\n   32-bit single precision floats, but reading or writing one of\n   its elements from OCaml uses the OCaml type <code class="code">float</code>, which is\n   64-bit double precision floats.\n<p>\n\n   The GADT type <code class="code">(&apos;a, &apos;b) kind</code> captures this association\n   of an OCaml type <code class="code">&apos;a</code> for values read or written in the big array,\n   and of an element kind <code class="code">&apos;b</code> which represents the actual contents\n   of the big array. Its constructors list all possible associations\n   of OCaml types with element kinds, and are re-exported below for\n   backward-compatibility reasons.\n</p><p>\n\n   Using a generalized algebraic datatype (GADT) here allows to write\n   well-typed polymorphic functions whose return type depend on the\n   argument type, such as:\n</p><p>\n\n</p><pre class="codepre">  let zero : type a b. (a, b) kind -&gt; a = function\n    | Float32 -&gt; 0.0 | Complex32 -&gt; Complex.zero\n    | Float64 -&gt; 0.0 | Complex64 -&gt; Complex.zero\n    | Int8_signed -&gt; 0 | Int8_unsigned -&gt; 0\n    | Int16_signed -&gt; 0 | Int16_unsigned -&gt; 0\n    | Int32 -&gt; 0l | Int64 -&gt; 0L\n    | Int -&gt; 0 | Nativeint -&gt; 0n\n    | Char -&gt; &apos;\\000&apos;\n</pre><br>\n</div>\n</td><td class="typefieldcomment" align="left" valign="bottom"><code>*)</code></td>\n</tr></tbody></table>\n\n\n\n<pre id="VALfloat32"><span class="keyword">let</span> float32: kind float float32_elt;\n</pre><div class="info ">\nSee <a href="Bigarray.html#VALchar"><code class="code">Bigarray.char</code></a>.<br>\n</div>\n\n<pre id="VALfloat64"><span class="keyword">let</span> float64: kind float float64_elt;\n</pre><div class="info ">\nSee <a href="Bigarray.html#VALchar"><code class="code">Bigarray.char</code></a>.<br>\n</div>\n\n<pre id="VALcomplex32"><span class="keyword">let</span> complex32: kind Complex.t complex32_elt;\n</pre><div class="info ">\nSee <a href="Bigarray.html#VALchar"><code class="code">Bigarray.char</code></a>.<br>\n</div>\n\n<pre id="VALcomplex64"><span class="keyword">let</span> complex64: kind Complex.t complex64_elt;\n</pre><div class="info ">\nSee <a href="Bigarray.html#VALchar"><code class="code">Bigarray.char</code></a>.<br>\n</div>\n\n<pre id="VALint8_signed"><span class="keyword">let</span> int8_signed: kind int int8_signed_elt;\n</pre><div class="info ">\nSee <a href="Bigarray.html#VALchar"><code class="code">Bigarray.char</code></a>.<br>\n</div>\n\n<pre id="VALint8_unsigned"><span class="keyword">let</span> int8_unsigned: kind int int8_unsigned_elt;\n</pre><div class="info ">\nSee <a href="Bigarray.html#VALchar"><code class="code">Bigarray.char</code></a>.<br>\n</div>\n\n<pre id="VALint16_signed"><span class="keyword">let</span> int16_signed: kind int int16_signed_elt;\n</pre><div class="info ">\nSee <a href="Bigarray.html#VALchar"><code class="code">Bigarray.char</code></a>.<br>\n</div>\n\n<pre id="VALint16_unsigned"><span class="keyword">let</span> int16_unsigned: kind int int16_unsigned_elt;\n</pre><div class="info ">\nSee <a href="Bigarray.html#VALchar"><code class="code">Bigarray.char</code></a>.<br>\n</div>\n\n<pre id="VALint"><span class="keyword">let</span> int: kind int int_elt;\n</pre><div class="info ">\nSee <a href="Bigarray.html#VALchar"><code class="code">Bigarray.char</code></a>.<br>\n</div>\n\n<pre id="VALint32"><span class="keyword">let</span> int32: kind int32 int32_elt;\n</pre><div class="info ">\nSee <a href="Bigarray.html#VALchar"><code class="code">Bigarray.char</code></a>.<br>\n</div>\n\n<pre id="VALint64"><span class="keyword">let</span> int64: kind int64 int64_elt;\n</pre><div class="info ">\nSee <a href="Bigarray.html#VALchar"><code class="code">Bigarray.char</code></a>.<br>\n</div>\n\n<pre id="VALnativeint"><span class="keyword">let</span> nativeint: kind nativeint nativeint_elt;\n</pre><div class="info ">\nSee <a href="Bigarray.html#VALchar"><code class="code">Bigarray.char</code></a>.<br>\n</div>\n\n<pre id="VALchar"><span class="keyword">let</span> char: kind char int8_unsigned_elt;\n</pre><div class="info ">\nAs shown by the types of the values above,\n   big arrays of kind <code class="code">float32_elt</code> and <code class="code">float64_elt</code> are\n   accessed using the OCaml type <code class="code">float</code>.  Big arrays of complex kinds\n   <code class="code">complex32_elt</code>, <code class="code">complex64_elt</code> are accessed with the OCaml type\n   <a href="Complex.html#TYPEt"><code class="code">Complex.t</code></a>. Big arrays of\n   integer kinds are accessed using the smallest OCaml integer\n   type large enough to represent the array elements:\n   <code class="code">int</code> for 8- and 16-bit integer bigarrays, as well as OCaml-integer\n   bigarrays; <code class="code">int32</code> for 32-bit integer bigarrays; <code class="code">int64</code>\n   for 64-bit integer bigarrays; and <code class="code">nativeint</code> for\n   platform-native integer bigarrays.  Finally, big arrays of\n   kind <code class="code">int8_unsigned_elt</code> can also be accessed as arrays of\n   characters instead of arrays of small integers, by using\n   the kind value <code class="code">char</code> instead of <code class="code">int8_unsigned</code>.<br>\n</div>\n<br>\n<h6 id="6_Arraylayouts">Array layouts</h6><br>\n\n<pre><span class="keyword">type</span> c_layout = </pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>C_layout_typ</code></td>\n<td class="typefieldcomment" align="left" valign="top"><code>(*</code></td><td class="typefieldcomment" align="left" valign="top"><div class="info ">\nSee <a href="Bigarray.html#VALfortran_layout"><code class="code">Bigarray.fortran_layout</code></a>.<br>\n</div>\n</td><td class="typefieldcomment" align="left" valign="bottom"><code>*)</code></td>\n</tr></tbody></table>\n\n\n\n<pre><span class="keyword">type</span> fortran_layout = </pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Fortran_layout_typ</code></td>\n<td class="typefieldcomment" align="left" valign="top"><code>(*</code></td><td class="typefieldcomment" align="left" valign="top"><div class="info ">\nTo facilitate interoperability with existing C and Fortran code,\n   this library supports two different memory layouts for big arrays,\n   one compatible with the C conventions,\n   the other compatible with the Fortran conventions.\n<p>\n\n   In the C-style layout, array indices start at 0, and\n   multi-dimensional arrays are laid out in row-major format.\n   That is, for a two-dimensional array, all elements of\n   row 0 are contiguous in memory, followed by all elements of\n   row 1, etc.  In other terms, the array elements at <code class="code">(x,y)</code>\n   and <code class="code">(x, y+1)</code> are adjacent in memory.\n</p><p>\n\n   In the Fortran-style layout, array indices start at 1, and\n   multi-dimensional arrays are laid out in column-major format.\n   That is, for a two-dimensional array, all elements of\n   column 0 are contiguous in memory, followed by all elements of\n   column 1, etc.  In other terms, the array elements at <code class="code">(x,y)</code>\n   and <code class="code">(x+1, y)</code> are adjacent in memory.\n</p><p>\n\n   Each layout style is identified at the type level by the\n   phantom types <a href="Bigarray.html#VALc_layout"><code class="code">Bigarray.c_layout</code></a> and <a href="Bigarray.html#VALfortran_layout"><code class="code">Bigarray.fortran_layout</code></a>\n   respectively.<br>\n</p></div>\n</td><td class="typefieldcomment" align="left" valign="bottom"><code>*)</code></td>\n</tr></tbody></table>\n\n\n<br>\n<div class="h7" id="7_Supportedlayouts">Supported layouts</div>\n<p>\n\n   The GADT type <code class="code">&apos;a layout</code> represents one of the two supported\n   memory layouts: C-style or Fortran-style. Its constructors are\n   re-exported as values below for backward-compatibility reasons.<br>\n\n</p><pre><span class="keyword">type</span> &apos;a layout = </pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>C_layout : c_layout layout</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Fortran_layout : fortran_layout layout</code></td>\n\n</tr></tbody></table>\n\n\n\n<pre id="VALc_layout"><span class="keyword">let</span> c_layout: layout c_layout;\n</pre>\n<pre id="VALfortran_layout"><span class="keyword">let</span> fortran_layout: layout fortran_layout;\n</pre><br>\n<h6 id="6_Genericarraysofarbitrarilymanydimensions">Generic arrays (of arbitrarily many dimensions)</h6><br>\n\n<pre><span class="keyword">module</span> Genarray: sig .. end</pre><br>\n<h6 id="6_Onedimensionalarrays">One-dimensional arrays</h6><br>\n\n<pre><span class="keyword">module</span> Array1: sig .. end</pre><div class="info">\nOne-dimensional arrays.\n</div>\n<br>\n<h6 id="6_Twodimensionalarrays">Two-dimensional arrays</h6><br>\n\n<pre><span class="keyword">module</span> Array2: sig .. end</pre><div class="info">\nTwo-dimensional arrays.\n</div>\n<br>\n<h6 id="6_Threedimensionalarrays">Three-dimensional arrays</h6><br>\n\n<pre><span class="keyword">module</span> Array3: sig .. end</pre><div class="info">\nThree-dimensional arrays.\n</div>\n<br>\n<h6 id="6_Coercionsbetweengenericbigarraysandfixeddimensionbigarrays">Coercions between generic big arrays and fixed-dimension big arrays</h6><br>\n\n<pre id="VALgenarray_of_array1"><span class="keyword">let</span> genarray_of_array1: Array1.t &apos;a &apos;b &apos;c =&gt; Genarray.t &apos;a &apos;b &apos;c;\n</pre><div class="info ">\nReturn the generic big array corresponding to the given one-dimensional\n   big array.<br>\n</div>\n\n<pre id="VALgenarray_of_array2"><span class="keyword">let</span> genarray_of_array2: Array2.t &apos;a &apos;b &apos;c =&gt; Genarray.t &apos;a &apos;b &apos;c;\n</pre><div class="info ">\nReturn the generic big array corresponding to the given two-dimensional\n   big array.<br>\n</div>\n\n<pre id="VALgenarray_of_array3"><span class="keyword">let</span> genarray_of_array3: Array3.t &apos;a &apos;b &apos;c =&gt; Genarray.t &apos;a &apos;b &apos;c;\n</pre><div class="info ">\nReturn the generic big array corresponding to the given three-dimensional\n   big array.<br>\n</div>\n\n<pre id="VALarray1_of_genarray"><span class="keyword">let</span> array1_of_genarray: Genarray.t &apos;a &apos;b &apos;c =&gt; Array1.t &apos;a &apos;b &apos;c;\n</pre><div class="info ">\nReturn the one-dimensional big array corresponding to the given\n   generic big array.  Raise <code class="code">Invalid_argument</code> if the generic big array\n   does not have exactly one dimension.<br>\n</div>\n\n<pre id="VALarray2_of_genarray"><span class="keyword">let</span> array2_of_genarray: Genarray.t &apos;a &apos;b &apos;c =&gt; Array2.t &apos;a &apos;b &apos;c;\n</pre><div class="info ">\nReturn the two-dimensional big array corresponding to the given\n   generic big array.  Raise <code class="code">Invalid_argument</code> if the generic big array\n   does not have exactly two dimensions.<br>\n</div>\n\n<pre id="VALarray3_of_genarray"><span class="keyword">let</span> array3_of_genarray: Genarray.t &apos;a &apos;b &apos;c =&gt; Array3.t &apos;a &apos;b &apos;c;\n</pre><div class="info ">\nReturn the three-dimensional big array corresponding to the given\n   generic big array.  Raise <code class="code">Invalid_argument</code> if the generic big array\n   does not have exactly three dimensions.<br>\n</div>\n<br>\n<h6 id="6_Reshapingbigarrays">Re-shaping big arrays</h6><br>\n\n<pre id="VALreshape"><span class="keyword">let</span> reshape: Genarray.t &apos;a &apos;b &apos;c =&gt; array int =&gt; Genarray.t &apos;a &apos;b &apos;c;\n</pre><div class="info ">\n<code class="code">reshape b [|d1;...;dN|]</code> converts the big array <code class="code">b</code> to a\n   <code class="code">N</code>-dimensional array of dimensions <code class="code">d1</code>...<code class="code">dN</code>.  The returned\n   array and the original array <code class="code">b</code> share their data\n   and have the same layout.  For instance, assuming that <code class="code">b</code>\n   is a one-dimensional array of dimension 12, <code class="code">reshape b [|3;4|]</code>\n   returns a two-dimensional array <code class="code">b&apos;</code> of dimensions 3 and 4.\n   If <code class="code">b</code> has C layout, the element <code class="code">(x,y)</code> of <code class="code">b&apos;</code> corresponds\n   to the element <code class="code">x * 3 + y</code> of <code class="code">b</code>.  If <code class="code">b</code> has Fortran layout,\n   the element <code class="code">(x,y)</code> of <code class="code">b&apos;</code> corresponds to the element\n   <code class="code">x + (y - 1) * 4</code> of <code class="code">b</code>.\n   The returned big array must have exactly the same number of\n   elements as the original big array <code class="code">b</code>.  That is, the product\n   of the dimensions of <code class="code">b</code> must be equal to <code class="code">i1 * ... * iN</code>.\n   Otherwise, <code class="code">Invalid_argument</code> is raised.<br>\n</div>\n\n<pre id="VALreshape_1"><span class="keyword">let</span> reshape_1: Genarray.t &apos;a &apos;b &apos;c =&gt; int =&gt; Array1.t &apos;a &apos;b &apos;c;\n</pre><div class="info ">\nSpecialized version of <a href="Bigarray.html#VALreshape"><code class="code">Bigarray.reshape</code></a> for reshaping to\n   one-dimensional arrays.<br>\n</div>\n\n<pre id="VALreshape_2"><span class="keyword">let</span> reshape_2: Genarray.t &apos;a &apos;b &apos;c =&gt; int =&gt; int =&gt; Array2.t &apos;a &apos;b &apos;c;\n</pre><div class="info ">\nSpecialized version of <a href="Bigarray.html#VALreshape"><code class="code">Bigarray.reshape</code></a> for reshaping to\n   two-dimensional arrays.<br>\n</div>\n\n<pre id="VALreshape_3"><span class="keyword">let</span> reshape_3: Genarray.t &apos;a &apos;b &apos;c =&gt; int =&gt; int =&gt; int =&gt; Array3.t &apos;a &apos;b &apos;c;\n</pre><div class="info ">\nSpecialized version of <a href="Bigarray.html#VALreshape"><code class="code">Bigarray.reshape</code></a> for reshaping to\n   three-dimensional arrays.<br>\n</div>\n</div>'}}},pathContext:{relativePath:"api/Bigarray.html"}}}});
//# sourceMappingURL=path---api-bigarray-html-ac6f62ae68661e814c5b.js.map