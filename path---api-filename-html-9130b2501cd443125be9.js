webpackJsonp([379],{"./node_modules/json-loader/index.js!./.cache/json/api-filename-html.json":function(e,n){e.exports={data:{file:{relativePath:"api/Filename.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar"><a class="pre" href="Digest.html" title="Digest">Previous</a>\n&#xA0;<a class="up" href="index.html" title="Index">Up</a>\n&#xA0;<a class="post" href="Format.html" title="Format">Next</a>\n</div>\n<h1>Module <a href="type_Filename.html">Filename</a></h1>\n\n<pre><span class="keyword">module</span> Filename: sig .. end</pre><div class="info module top">\nOperations on file names.<br>\n</div>\n<hr width="100%">\n\n<pre id="VALcurrent_dir_name"><span class="keyword">let</span> current_dir_name: string;\n</pre><div class="info ">\nThe conventional name for the current directory (e.g. <code class="code">.</code> in Unix).<br>\n</div>\n\n<pre id="VALparent_dir_name"><span class="keyword">let</span> parent_dir_name: string;\n</pre><div class="info ">\nThe conventional name for the parent of the current directory\n   (e.g. <code class="code">..</code> in Unix).<br>\n</div>\n\n<pre id="VALdir_sep"><span class="keyword">let</span> dir_sep: string;\n</pre><div class="info ">\nThe directory separator (e.g. <code class="code">/</code> in Unix).<br>\n<b>Since</b> 3.11.2<br>\n</div>\n\n<pre id="VALconcat"><span class="keyword">let</span> concat: string =&gt; string =&gt; string;\n</pre><div class="info ">\n<code class="code">concat dir file</code> returns a file name that designates file\n   <code class="code">file</code> in directory <code class="code">dir</code>.<br>\n</div>\n\n<pre id="VALis_relative"><span class="keyword">let</span> is_relative: string =&gt; bool;\n</pre><div class="info ">\nReturn <code class="code">true</code> if the file name is relative to the current\n   directory, <code class="code">false</code> if it is absolute (i.e. in Unix, starts\n   with <code class="code">/</code>).<br>\n</div>\n\n<pre id="VALis_implicit"><span class="keyword">let</span> is_implicit: string =&gt; bool;\n</pre><div class="info ">\nReturn <code class="code">true</code> if the file name is relative and does not start\n   with an explicit reference to the current directory (<code class="code">./</code> or\n   <code class="code">../</code> in Unix), <code class="code">false</code> if it starts with an explicit reference\n   to the root directory or the current directory.<br>\n</div>\n\n<pre id="VALcheck_suffix"><span class="keyword">let</span> check_suffix: string =&gt; string =&gt; bool;\n</pre><div class="info ">\n<code class="code">check_suffix name suff</code> returns <code class="code">true</code> if the filename <code class="code">name</code>\n   ends with the suffix <code class="code">suff</code>.<br>\n</div>\n\n<pre id="VALchop_suffix"><span class="keyword">let</span> chop_suffix: string =&gt; string =&gt; string;\n</pre><div class="info ">\n<code class="code">chop_suffix name suff</code> removes the suffix <code class="code">suff</code> from\n   the filename <code class="code">name</code>. The behavior is undefined if <code class="code">name</code> does not\n   end with the suffix <code class="code">suff</code>.<br>\n</div>\n\n<pre id="VALchop_extension"><span class="keyword">let</span> chop_extension: string =&gt; string;\n</pre><div class="info ">\nReturn the given file name without its extension. The extension\n   is the shortest suffix starting with a period and not including\n   a directory separator, <code class="code">.xyz</code> for instance.\n<p>\n\n   Raise <code class="code">Invalid_argument</code> if the given name does not contain\n   an extension.<br>\n</p></div>\n\n<pre id="VALbasename"><span class="keyword">let</span> basename: string =&gt; string;\n</pre><div class="info ">\nSplit a file name into directory name / base file name.\n   If <code class="code">name</code> is a valid file name, then <code class="code">concat (dirname name) (basename name)</code>\n   returns a file name which is equivalent to <code class="code">name</code>. Moreover,\n   after setting the current directory to <code class="code">dirname name</code> (with <a href="Sys.html#VALchdir"><code class="code">Sys.chdir</code></a>),\n   references to <code class="code">basename name</code> (which is a relative file name)\n   designate the same file as <code class="code">name</code> before the call to <a href="Sys.html#VALchdir"><code class="code">Sys.chdir</code></a>.\n<p>\n\n   This function conforms to the specification of POSIX.1-2008 for the\n   <code class="code">basename</code> utility.<br>\n</p></div>\n\n<pre id="VALdirname"><span class="keyword">let</span> dirname: string =&gt; string;\n</pre><div class="info ">\nSee <a href="Filename.html#VALbasename"><code class="code">Filename.basename</code></a>.\n   This function conforms to the specification of POSIX.1-2008 for the\n   <code class="code">dirname</code> utility.<br>\n</div>\n\n<pre id="VALtemp_file"><span class="keyword">let</span> temp_file: temp_dir::string? =&gt; string =&gt; string =&gt; string;\n</pre><div class="info ">\n<code class="code">temp_file prefix suffix</code> returns the name of a\n   fresh temporary file in the temporary directory.\n   The base name of the temporary file is formed by concatenating\n   <code class="code">prefix</code>, then a suitably chosen integer number, then <code class="code">suffix</code>.\n   The optional argument <code class="code">temp_dir</code> indicates the temporary directory\n   to use, defaulting to the current result of <a href="Filename.html#VALget_temp_dir_name"><code class="code">Filename.get_temp_dir_name</code></a>.\n   The temporary file is created empty, with permissions <code class="code">0o600</code>\n   (readable and writable only by the file owner).  The file is\n   guaranteed to be different from any other file that existed when\n   <code class="code">temp_file</code> was called.\n   Raise <code class="code">Sys_error</code> if the file could not be created.<br>\n<b>Before 3.11.2 </b> no ?temp_dir optional argument<br>\n</div>\n\n<pre id="VALopen_temp_file"><span class="keyword">let</span> open_temp_file:\n  mode::list Pervasives.open_flag? =&gt;\n  temp_dir::string? =&gt;\n  string =&gt;\n  string =&gt;\n  (string, Pervasives.out_channel);\n</pre><div class="info ">\nSame as <a href="Filename.html#VALtemp_file"><code class="code">Filename.temp_file</code></a>, but returns both the name of a fresh\n   temporary file, and an output channel opened (atomically) on\n   this file.  This function is more secure than <code class="code">temp_file</code>: there\n   is no risk that the temporary file will be modified (e.g. replaced\n   by a symbolic link) before the program opens it.  The optional argument\n   <code class="code">mode</code> is a list of additional flags to control the opening of the file.\n   It can contain one or several of <code class="code">Open_append</code>, <code class="code">Open_binary</code>,\n   and <code class="code">Open_text</code>.  The default is <code class="code">[Open_text]</code> (open in text mode).\n   Raise <code class="code">Sys_error</code> if the file could not be opened.<br>\n<b>Before 3.11.2 </b> no ?temp_dir optional argument<br>\n</div>\n\n<pre id="VALget_temp_dir_name"><span class="keyword">let</span> get_temp_dir_name: unit =&gt; string;\n</pre><div class="info ">\nThe name of the temporary directory:\n    Under Unix, the value of the <code class="code">TMPDIR</code> environment variable, or &quot;/tmp&quot;\n    if the variable is not set.\n    Under Windows, the value of the <code class="code">TEMP</code> environment variable, or &quot;.&quot;\n    if the variable is not set.\n    The temporary directory can be changed with <a href="Filename.html#VALset_temp_dir_name"><code class="code">Filename.set_temp_dir_name</code></a>.<br>\n<b>Since</b> 4.00.0<br>\n</div>\n\n<pre id="VALset_temp_dir_name"><span class="keyword">let</span> set_temp_dir_name: string =&gt; unit;\n</pre><div class="info ">\nChange the temporary directory returned by <a href="Filename.html#VALget_temp_dir_name"><code class="code">Filename.get_temp_dir_name</code></a>\n    and used by <a href="Filename.html#VALtemp_file"><code class="code">Filename.temp_file</code></a> and <a href="Filename.html#VALopen_temp_file"><code class="code">Filename.open_temp_file</code></a>.<br>\n<b>Since</b> 4.00.0<br>\n</div>\n\n<pre id="VALtemp_dir_name"><span class="keyword">let</span> temp_dir_name: string;\n</pre><div class="info ">\n<span class="warning">Deprecated.</span>You should use <a href="Filename.html#VALget_temp_dir_name"><code class="code">Filename.get_temp_dir_name</code></a> instead.<br>\nThe name of the initial temporary directory:\n    Under Unix, the value of the <code class="code">TMPDIR</code> environment variable, or &quot;/tmp&quot;\n    if the variable is not set.\n    Under Windows, the value of the <code class="code">TEMP</code> environment variable, or &quot;.&quot;\n    if the variable is not set.<br>\n<b>Since</b> 3.09.1<br>\n</div>\n\n<pre id="VALquote"><span class="keyword">let</span> quote: string =&gt; string;\n</pre><div class="info ">\nReturn a quoted version of a file name, suitable for use as\n    one argument in a command line, escaping all meta-characters.\n    Warning: under Windows, the output is only suitable for use\n    with programs that follow the standard Windows quoting\n    conventions.<br>\n</div>\n</div>'}}},pathContext:{relativePath:"api/Filename.html"}}}});
//# sourceMappingURL=path---api-filename-html-9130b2501cd443125be9.js.map