webpackJsonp([224],{"./node_modules/json-loader/index.js!./.cache/json/api-type-location-html.json":function(x,A){x.exports={data:{file:{relativePath:"api/type_Location.html",childRawHtml:{content:'<div class="ocamldoc"><pre>sig\n\n&#xA0;&#xA0;type&#xA0;t&#xA0;=&#xA0;{\n&#xA0;&#xA0;&#xA0;&#xA0;loc_start&#xA0;:&#xA0;Lexing.position;\n&#xA0;&#xA0;&#xA0;&#xA0;loc_end&#xA0;:&#xA0;Lexing.position;\n&#xA0;&#xA0;&#xA0;&#xA0;loc_ghost&#xA0;:&#xA0;bool;\n&#xA0;&#xA0;}\n&#xA0;&#xA0;val&#xA0;none&#xA0;:&#xA0;Location.t\n&#xA0;&#xA0;val&#xA0;in_file&#xA0;:&#xA0;string&#xA0;-&gt;&#xA0;Location.t\n&#xA0;&#xA0;val&#xA0;init&#xA0;:&#xA0;Lexing.lexbuf&#xA0;-&gt;&#xA0;string&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;val&#xA0;curr&#xA0;:&#xA0;Lexing.lexbuf&#xA0;-&gt;&#xA0;Location.t\n&#xA0;&#xA0;val&#xA0;symbol_rloc&#xA0;:&#xA0;unit&#xA0;-&gt;&#xA0;Location.t\n&#xA0;&#xA0;val&#xA0;symbol_gloc&#xA0;:&#xA0;unit&#xA0;-&gt;&#xA0;Location.t\n&#xA0;&#xA0;val&#xA0;rhs_loc&#xA0;:&#xA0;int&#xA0;-&gt;&#xA0;Location.t\n&#xA0;&#xA0;val&#xA0;input_name&#xA0;:&#xA0;string&#xA0;Pervasives.ref\n&#xA0;&#xA0;val&#xA0;input_lexbuf&#xA0;:&#xA0;Lexing.lexbuf&#xA0;option&#xA0;Pervasives.ref\n&#xA0;&#xA0;val&#xA0;get_pos_info&#xA0;:&#xA0;Lexing.position&#xA0;-&gt;&#xA0;string&#xA0;*&#xA0;int&#xA0;*&#xA0;int\n&#xA0;&#xA0;val&#xA0;print_loc&#xA0;:&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Location.t&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;val&#xA0;print_error&#xA0;:&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Location.t&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;val&#xA0;print_error_cur_file&#xA0;:&#xA0;Format.formatter&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;val&#xA0;print_warning&#xA0;:&#xA0;Location.t&#xA0;-&gt;&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Warnings.t&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;val&#xA0;formatter_for_warnings&#xA0;:&#xA0;Format.formatter&#xA0;Pervasives.ref\n&#xA0;&#xA0;val&#xA0;prerr_warning&#xA0;:&#xA0;Location.t&#xA0;-&gt;&#xA0;Warnings.t&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;val&#xA0;echo_eof&#xA0;:&#xA0;unit&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;val&#xA0;reset&#xA0;:&#xA0;unit&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;val&#xA0;warning_printer&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;(Location.t&#xA0;-&gt;&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Warnings.t&#xA0;-&gt;&#xA0;unit)&#xA0;Pervasives.ref\n&#xA0;&#xA0;val&#xA0;default_warning_printer&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;Location.t&#xA0;-&gt;&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Warnings.t&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;val&#xA0;highlight_locations&#xA0;:&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Location.t&#xA0;list&#xA0;-&gt;&#xA0;bool\n&#xA0;&#xA0;type&#xA0;&apos;a&#xA0;loc&#xA0;=&#xA0;{&#xA0;txt&#xA0;:&#xA0;&apos;a;&#xA0;loc&#xA0;:&#xA0;Location.t;&#xA0;}\n&#xA0;&#xA0;val&#xA0;mknoloc&#xA0;:&#xA0;&apos;a&#xA0;-&gt;&#xA0;&apos;a&#xA0;Location.loc\n&#xA0;&#xA0;val&#xA0;mkloc&#xA0;:&#xA0;&apos;a&#xA0;-&gt;&#xA0;Location.t&#xA0;-&gt;&#xA0;&apos;a&#xA0;Location.loc\n&#xA0;&#xA0;val&#xA0;print&#xA0;:&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Location.t&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;val&#xA0;print_filename&#xA0;:&#xA0;Format.formatter&#xA0;-&gt;&#xA0;string&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;val&#xA0;absolute_path&#xA0;:&#xA0;string&#xA0;-&gt;&#xA0;string\n&#xA0;&#xA0;val&#xA0;show_filename&#xA0;:&#xA0;string&#xA0;-&gt;&#xA0;string\n&#xA0;&#xA0;val&#xA0;absname&#xA0;:&#xA0;bool&#xA0;Pervasives.ref\n&#xA0;&#xA0;type&#xA0;error&#xA0;=&#xA0;{\n&#xA0;&#xA0;&#xA0;&#xA0;loc&#xA0;:&#xA0;Location.t;\n&#xA0;&#xA0;&#xA0;&#xA0;msg&#xA0;:&#xA0;string;\n&#xA0;&#xA0;&#xA0;&#xA0;sub&#xA0;:&#xA0;Location.error&#xA0;list;\n&#xA0;&#xA0;&#xA0;&#xA0;if_highlight&#xA0;:&#xA0;string;\n&#xA0;&#xA0;}\n&#xA0;&#xA0;exception&#xA0;Error&#xA0;of&#xA0;Location.error\n&#xA0;&#xA0;val&#xA0;error&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;?loc:Location.t&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;?sub:Location.error&#xA0;list&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;?if_highlight:string&#xA0;-&gt;&#xA0;string&#xA0;-&gt;&#xA0;Location.error\n&#xA0;&#xA0;val&#xA0;errorf&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;?loc:Location.t&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;?sub:Location.error&#xA0;list&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;?if_highlight:string&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;(&apos;a,&#xA0;unit,&#xA0;string,&#xA0;Location.error)&#xA0;Pervasives.format4&#xA0;-&gt;&#xA0;&apos;a\n&#xA0;&#xA0;val&#xA0;raise_errorf&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;?loc:Location.t&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;?sub:Location.error&#xA0;list&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;?if_highlight:string&#xA0;-&gt;&#xA0;(&apos;a,&#xA0;unit,&#xA0;string,&#xA0;&apos;b)&#xA0;Pervasives.format4&#xA0;-&gt;&#xA0;&apos;a\n&#xA0;&#xA0;val&#xA0;error_of_printer&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;Location.t&#xA0;-&gt;&#xA0;(Format.formatter&#xA0;-&gt;&#xA0;&apos;a&#xA0;-&gt;&#xA0;unit)&#xA0;-&gt;&#xA0;&apos;a&#xA0;-&gt;&#xA0;Location.error\n&#xA0;&#xA0;val&#xA0;error_of_printer_file&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;(Format.formatter&#xA0;-&gt;&#xA0;&apos;a&#xA0;-&gt;&#xA0;unit)&#xA0;-&gt;&#xA0;&apos;a&#xA0;-&gt;&#xA0;Location.error\n&#xA0;&#xA0;val&#xA0;error_of_exn&#xA0;:&#xA0;exn&#xA0;-&gt;&#xA0;Location.error&#xA0;option\n&#xA0;&#xA0;val&#xA0;register_error_of_exn&#xA0;:&#xA0;(exn&#xA0;-&gt;&#xA0;Location.error&#xA0;option)&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;val&#xA0;report_error&#xA0;:&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Location.error&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;val&#xA0;error_reporter&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;(Format.formatter&#xA0;-&gt;&#xA0;Location.error&#xA0;-&gt;&#xA0;unit)&#xA0;Pervasives.ref\n&#xA0;&#xA0;val&#xA0;default_error_reporter&#xA0;:&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Location.error&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;val&#xA0;report_exception&#xA0;:&#xA0;Format.formatter&#xA0;-&gt;&#xA0;exn&#xA0;-&gt;&#xA0;unit\nend</pre></div>'}}},pathContext:{relativePath:"api/type_Location.html"}}}});
//# sourceMappingURL=path---api-type-location-html-0f722e4f11cee0ae64da.js.map