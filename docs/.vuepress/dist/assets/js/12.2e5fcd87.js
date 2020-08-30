(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{386:function(e,t,s){"use strict";s.r(t);var a=s(4),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"iis-6-notice"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#iis-6-notice"}},[e._v("#")]),e._v(" IIS 6 NOTICE")]),e._v(" "),s("p",[e._v("If you're using IIS6 you shouldn't use the supplied "),s("code",[e._v("web.config")]),e._v(" files.\nInstead your changes will need to be made on the server itself.")]),e._v(" "),s("p",[e._v("Contents:")]),e._v(" "),s("ol",[s("li",[e._v("Enabling GZip/Deflate")]),e._v(" "),s("li",[e._v("Adding/removing Headers\n2.1 Removing E-Tags\n2.2 Security Headers\n2.3 Other Headers")])]),e._v(" "),s("h2",{attrs:{id:"_1-enabling-gzip-deflate-iis6-server-2003"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-enabling-gzip-deflate-iis6-server-2003"}},[e._v("#")]),e._v(" 1. Enabling GZip/Deflate (IIS6 Server 2003)")]),e._v(" "),s("p",[e._v("In order to enable GZip you will need to enable metabase editing. This can be\ndone as per "),s("a",{attrs:{href:"http://www.microsoft.com/technet/prodtechnol/WindowsServer2003/Library/IIS/1d1e5de4-fd63-40cd-bc5d-c20521548eed.mspx?mfr=true",target:"_blank",rel:"noopener noreferrer"}},[e._v("these\ninstructions"),s("OutboundLink")],1)]),e._v(" "),s("p",[e._v("...")]),e._v(" "),s("p",[e._v("Once you have navigated to the file location ("),s("code",[e._v("C:\\WINDOWS\\SYSTEM32\\INETSRV")]),e._v(")\nmake a copy of the file "),s("code",[e._v("metabase.xml")]),e._v(" to your desktop or somewhere safe.")]),e._v(" "),s("p",[e._v('Open the file, and search for "IIsCompressionScheme".')]),e._v(" "),s("p",[e._v("Replace the IISCompressionScheme and Schemes XML with the following: (or\nalternatively you can see it here: https://gist.github.com/2136507)")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<IIsCompressionScheme   Location ="/LM/W3SVC/Filters/Compression/deflate"\n        HcCompressionDll="%windir%\\system32\\inetsrv\\gzip.dll"\n        HcCreateFlags="0"\n        HcDoDynamicCompression="TRUE"\n        HcDoOnDemandCompression="TRUE"\n        HcDoStaticCompression="TRUE"\n        HcDynamicCompressionLevel="9"\n        HcFileExtensions="htm\n            html\n            xml\n            css\n            txt\n            rdf\n            js\n            svg\n            ttf\n            otf\n            eot"\n        HcOnDemandCompLevel="10"\n        HcPriority="1"\n        HcScriptFileExtensions="asp\n            cgi\n            exe\n            dll\n            aspx\n            asmx\n            axd"\n    >\n</IIsCompressionScheme>\n<IIsCompressionScheme   Location ="/LM/W3SVC/Filters/Compression/gzip"\n        HcCompressionDll="%windir%\\system32\\inetsrv\\gzip.dll"\n        HcCreateFlags="1"\n        HcDoDynamicCompression="TRUE"\n        HcDoOnDemandCompression="TRUE"\n        HcDoStaticCompression="TRUE"\n        HcDynamicCompressionLevel="9"\n        HcFileExtensions="htm\n            html\n            xml\n            css\n            txt\n            rdf\n            js\n            svg\n            ttf\n            otf\n            eot"\n        HcOnDemandCompLevel="10"\n        HcPriority="1"\n        HcScriptFileExtensions="asp\n            cgi\n            exe\n            dll\n            aspx\n            asmx\n            axd"\n    >\n</IIsCompressionScheme>\n<IIsCompressionSchemes  Location ="/LM/W3SVC/Filters/Compression/Parameters"\n        HcCacheControlHeader="max-age=86400"\n        HcCompressionBufferSize="8192"\n        HcCompressionDirectory="C:\\IIS Temporary Compressed Files"\n        HcDoDiskSpaceLimiting="FALSE"\n        HcDoDynamicCompression="TRUE"\n        HcDoOnDemandCompression="TRUE"\n        HcDoStaticCompression="TRUE"\n        HcExpiresHeader="Wed, 01 Jan 1997 12:00:00 GMT"\n        HcFilesDeletedPerDiskFree="256"\n        HcIoBufferSize="8192"\n        HcMaxDiskSpaceUsage="99614720"\n        HcMaxQueueLength="1000"\n        HcMinFileSizeForComp="1"\n        HcNoCompressionForHttp10="FALSE"\n        HcNoCompressionForProxies="FALSE"\n        HcNoCompressionForRange="FALSE"\n        HcSendCacheHeaders="FALSE"\n    >\n</IIsCompressionSchemes>\n')])])]),s("p",[e._v("Note: Never set the compression value to "),s("code",[e._v("10")]),e._v("; though this might seem a\nsensible thing to do the CPU load increase per-request is quite large, whilst\nthe actual compression difference is negligible.")]),e._v(" "),s("h2",{attrs:{id:"_2-adding-removing-headers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-adding-removing-headers"}},[e._v("#")]),e._v(" 2. Adding/Removing Headers")]),e._v(" "),s("h3",{attrs:{id:"_2-1-removing-etags"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-removing-etags"}},[e._v("#")]),e._v(" 2.1 Removing ETags")]),e._v(" "),s("p",[e._v("Remove ETags from the Http Response by setting a blank ETag header. In IIS\nManager, right click Web Site (or any folder), click Properties, select\nHttpHeaders tab, add Custom Http Header called ETag but leave the value blank.")]),e._v(" "),s("h3",{attrs:{id:"_2-2-security-headers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-security-headers"}},[e._v("#")]),e._v(" 2.2 Security Headers")]),e._v(" "),s("p",[e._v("Using the method above you can add any header; here are a few other common ones\nthat are in the web.config of H5BP project configs.")]),e._v(" "),s("p",[e._v("For readability I'll separate the KEY from the VALUE using a COLON (e.g. KEY :\nVALUE).")]),e._v(" "),s("h4",{attrs:{id:"_2-2-1-access-control-allow-origin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-access-control-allow-origin"}},[e._v("#")]),e._v(" 2.2.1 Access-Control-Allow-Origin")]),e._v(" "),s("p",[e._v("The 'Access Control Allow Origin' HTTP header is used to control which sites\nare allowed to bypass same origin policies and send cross-origin requests.")]),e._v(" "),s("p",[e._v("Secure configuration: Either do not set this header, or return the\n'Access-Control-Allow-Origin' header restricting it to only a trusted set of\nsites. "),s("a",{attrs:{href:"http://enable-cors.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Reference"),s("OutboundLink")],1)]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Allow All -\nAccess-Control-Allow-Origin : *\n")])])]),s("h4",{attrs:{id:"_2-2-2-cache-control"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-2-cache-control"}},[e._v("#")]),e._v(" 2.2.2 Cache-Control")]),e._v(" "),s("p",[e._v("The 'Cache-Control' response header controls how pages can be cached either by\nproxies or the users browser. This response header can provide enhanced privacy\nby not caching sensitive pages in the users browser cache.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Cache-Control : no-store, no-cache\n")])])]),s("h4",{attrs:{id:"_2-2-3-strict-transport-security"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-3-strict-transport-security"}},[e._v("#")]),e._v(" 2.2.3 Strict Transport Security")]),e._v(" "),s("p",[e._v("The HTTP Strict Transport Security header is used to control if the browser is\nallowed to only access a site over a secure connection and how long to remember\nthe server response for, forcing continued usage.")]),e._v(" "),s("p",[e._v("N.B. Currently a draft standard which only Firefox and Chrome support. But is\nsupported by sites like PayPal.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Strict-Transport-Security : max-age=15768000\n")])])]),s("h4",{attrs:{id:"_2-2-4-x-frame-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-4-x-frame-options"}},[e._v("#")]),e._v(" 2.2.4 X-Frame Options")]),e._v(" "),s("p",[e._v("The X-Frame-Options header indicates whether a browser should be allowed to\nrender a page within a frame or iframe. The valid options are DENY (deny\nallowing the page to exist in a frame) or SAMEORIGIN (allow framing but only\nfrom the originating host). Without this option set the site is at a higher risk\nof click-jacking.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("X-Frame-Options : SAMEORIGIN\n")])])]),s("h4",{attrs:{id:"_2-2-5-x-xss-protection"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-5-x-xss-protection"}},[e._v("#")]),e._v(" 2.2.5 X-XSS Protection")]),e._v(" "),s("p",[e._v("The X-XSS-Protection header is used by Internet Explorer version 8+. The header\ninstructs IE to enable its inbuilt anti-cross-site scripting filter.  If\nenabled, without "),s("code",[e._v("mode=block")]),e._v(", there is an increased risk that otherwise\nnon-exploitable cross-site scripting vulnerabilities may potentially become\nexploitable")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("X-XSS-Protection:1; mode=block\n")])])]),s("h4",{attrs:{id:"_2-2-6-manual-removal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-6-manual-removal"}},[e._v("#")]),e._v(" 2.2.6 Manual Removal")]),e._v(" "),s("p",[e._v("You can manually remove X-Powered-By via the same panel you add the headers.\nA tiny bit of 'security' by obscurity.")]),e._v(" "),s("h4",{attrs:{id:"_2-2-7-content-security-policy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-7-content-security-policy"}},[e._v("#")]),e._v(" 2.2.7 Content Security Policy")]),e._v(" "),s("p",[e._v("With Content Security Policy (CSP) enabled (and a browser that supports it (http://caniuse.com/#feat=contentsecuritypolicy),\nyou can tell the browser that it can only download content from the domains you explicitly allow\nCSP can be quite difficult to configure, and cause real issues if you get it wrong\nThere is website that helps you generate a policy here http://cspisawesome.com/")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Content-Security-Policy :  default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' https://www.google-analytics.com;\n")])])]),s("h3",{attrs:{id:"_2-3-other-headers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-other-headers"}},[e._v("#")]),e._v(" 2.3 Other Headers")]),e._v(" "),s("h4",{attrs:{id:"_2-3-3-x-ua-compatible"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-3-x-ua-compatible"}},[e._v("#")]),e._v(" 2.3.3 X-UA-Compatible")]),e._v(" "),s("p",[e._v("Force the latest IE version, in various cases when it may fall back to IE7 mode\nhttp://github.com/rails/rails/commit/123eb25#commitcomment-118920")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("X-UA-Compatible : IE=Edge,chrome=1\n")])])]),s("h4",{attrs:{id:"_2-3-3-p3p-handy-when-your-using-facebook-api-connect"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-3-p3p-handy-when-your-using-facebook-api-connect"}},[e._v("#")]),e._v(" 2.3.3 P3P (handy when your using Facebook API/Connect)")]),e._v(" "),s("p",[e._v("Allow cookies to be set from iframes (for IE only)")]),e._v(" "),s("p",[e._v("Ref: http://stackoverflow.com/questions/6241626/facebook-ie-and-p3p")]),e._v(" "),s("p",[e._v("If needed, specify a path or regex in the Location directive")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("P3P : policyref=&quot;/w3c/p3p.xml&quot;, CP=&quot;IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT&quot;\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);