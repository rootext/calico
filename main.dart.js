(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}function mixinPropertiesHard(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
if(!b.hasOwnProperty(q))b[q]=a[q]}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var s=function(){}
s.prototype={p:{}}
var r=new s()
if(!(r.__proto__&&r.__proto__.p===s.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var q=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(q))return true}}catch(p){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var s=0;s<a.length;s++){var r=a[s]
var q=Object.keys(r)
for(var p=0;p<q.length;p++){var o=q[p]
var n=r[o]
if(typeof n=="function")n.name=o}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++)inherit(b[s],a)}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazyOld(a,b,c,d){var s=a
a[b]=s
a[c]=function(){a[c]=function(){A.fu(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else r=a[b]}finally{if(r===q)a[b]=null
a[c]=function(){return this[b]}}return r}}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s)a[b]=d()
a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){var r=d()
if(a[b]!==s)A.fv(b)
a[b]=r}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.cO(b)
return new s(c,this)}:function(){if(s===null)s=A.cO(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.cO(a).prototype
return s}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number")h+=x
return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var s=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var r=staticTearOffGetter(s)
a[b]=r}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var s=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var r=instanceTearOffGetter(c,s)
a[b]=r}function setOrUpdateInterceptorsByTag(a){var s=v.interceptorsByTag
if(!s){v.interceptorsByTag=a
return}copyProperties(a,s)}function setOrUpdateLeafTags(a){var s=v.leafTags
if(!s){v.leafTags=a
return}copyProperties(a,s)}function updateTypes(a){var s=v.types
var r=s.length
s.push.apply(s,a)
return r}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var s=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},r=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,lazyOld:lazyOld,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var A={cz:function cz(){},
cN(a,b,c){return a},
da(a,b,c,d){A.b7(b,"start")
A.b7(c,"end")
if(b>c)A.ad(A.b6(b,0,c,"start",null))
return new A.a_(a,b,c,d.i("a_<0>"))},
aj:function aj(a){this.a=a},
ag:function ag(){},
B:function B(){},
a_:function a_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
a5:function a5(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ak:function ak(a,b,c){this.a=a
this.b=b
this.$ti=c},
dI(a){var s,r=v.mangledGlobalNames[a]
if(r!=null)return r
s="minified:"+a
return s},
h7(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
m(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.by(a)
return s},
b5(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
bN(a){return A.ee(a)},
ee(a){var s,r,q,p
if(a instanceof A.l)return A.y(A.aH(a),null)
if(J.ac(a)===B.L||t.G.b(a)){s=B.e(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return A.y(A.aH(a),null)},
u(a,b){if(a==null)J.bx(a)
throw A.d(A.bu(a,b))},
bu(a,b){var s,r="index",q=null
if(!A.ds(b))return new A.P(!0,b,r,q)
s=A.ce(J.bx(a))
if(b<0||b>=s)return A.cx(b,a,r,q,s)
return new A.a6(q,q,!0,b,r,"Value not in range")},
d(a){var s,r
if(a==null)a=new A.b3()
s=new Error()
s.dartException=a
r=A.fw
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
fw(){return J.by(this.dartException)},
ad(a){throw A.d(a)},
dH(a){throw A.d(A.bB(a))},
L(a){var s,r,q,p,o,n
a=A.dG(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.k([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.bR(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
bS(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
db(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
cB(a,b){var s=b==null,r=s?null:b.method
return new A.b1(a,r,s?null:b.receiver)},
aK(a){if(a==null)return new A.bL(a)
if(typeof a!=="object")return a
if("dartException" in a)return A.a2(a,a.dartException)
return A.f9(a)},
a2(a,b){if(t.R.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
f9(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.M.ai(r,16)&8191)===10)switch(q){case 438:return A.a2(a,A.cB(A.m(s)+" (Error "+q+")",e))
case 445:case 5007:p=A.m(s)+" (Error "+q+")"
return A.a2(a,new A.al(p,e))}}if(a instanceof TypeError){o=$.dL()
n=$.dM()
m=$.dN()
l=$.dO()
k=$.dR()
j=$.dS()
i=$.dQ()
$.dP()
h=$.dU()
g=$.dT()
f=o.p(s)
if(f!=null)return A.a2(a,A.cB(A.a0(s),f))
else{f=n.p(s)
if(f!=null){f.method="call"
return A.a2(a,A.cB(A.a0(s),f))}else{f=m.p(s)
if(f==null){f=l.p(s)
if(f==null){f=k.p(s)
if(f==null){f=j.p(s)
if(f==null){f=i.p(s)
if(f==null){f=l.p(s)
if(f==null){f=h.p(s)
if(f==null){f=g.p(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p){A.a0(s)
return A.a2(a,new A.al(s,f==null?e:f.method))}}}return A.a2(a,new A.bf(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.ao()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return A.a2(a,new A.P(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.ao()
return a},
aG(a){var s
if(a==null)return new A.aw(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new A.aw(a)},
fs(a){if(a==null||typeof a!="object")return J.cX(a)
else return A.b5(a)},
fn(a,b,c,d,e,f){t.Z.a(a)
switch(A.ce(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(new A.c_("Unsupported number of arguments for wrapped closure"))},
bt(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.fn)
a.$identity=s
return s},
e6(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.bb().constructor.prototype):Object.create(new A.a3(null,null).constructor.prototype)
s.$initialize=s.constructor
if(h)r=function static_tear_off(){this.$initialize()}
else r=function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.d2(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.e2(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.d2(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
e2(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.e0)}throw A.d("Error in functionType of tearoff")},
e3(a,b,c,d){var s=A.d1
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
d2(a,b,c,d){var s,r
if(c)return A.e5(a,b,d)
s=b.length
r=A.e3(s,d,a,b)
return r},
e4(a,b,c,d){var s=A.d1,r=A.e1
switch(b?-1:a){case 0:throw A.d(new A.b8("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
e5(a,b,c){var s,r,q,p=$.d_
p==null?$.d_=A.cZ("interceptor"):p
s=$.d0
s==null?$.d0=A.cZ("receiver"):s
r=b.length
q=A.e4(r,c,a,b)
return q},
cO(a){return A.e6(a)},
e0(a,b){return A.cc(v.typeUniverse,A.aH(a.a),b)},
d1(a){return a.a},
e1(a){return a.b},
cZ(a){var s,r,q,p=new A.a3("receiver","interceptor"),o=J.e9(Object.getOwnPropertyNames(p),t.O)
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw A.d(A.bz("Field name "+a+" not found.",null))},
fu(a){throw A.d(new A.aT(a))},
fi(a){return v.getIsolateTag(a)},
h6(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
fp(a){var s,r,q,p,o,n=A.a0($.dC.$1(a)),m=$.ci[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.co[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.eJ($.dy.$2(a,n))
if(q!=null){m=$.ci[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.co[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.cr(s)
$.ci[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.co[n]=s
return s}if(p==="-"){o=A.cr(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.dE(a,s)
if(p==="*")throw A.d(A.dc(n))
if(v.leafTags[n]===true){o=A.cr(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.dE(a,s)},
dE(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.cS(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
cr(a){return J.cS(a,!1,null,!!a.$icA)},
fr(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.cr(s)
else return J.cS(s,c,null,null)},
fl(){if(!0===$.cR)return
$.cR=!0
A.fm()},
fm(){var s,r,q,p,o,n,m,l
$.ci=Object.create(null)
$.co=Object.create(null)
A.fk()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.dF.$1(o)
if(n!=null){m=A.fr(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
fk(){var s,r,q,p,o,n,m=B.j()
m=A.ab(B.k,A.ab(B.l,A.ab(B.f,A.ab(B.f,A.ab(B.m,A.ab(B.n,A.ab(B.o(B.e),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.dC=new A.cl(p)
$.dy=new A.cm(o)
$.dF=new A.cn(n)},
ab(a,b){return a(b)||b},
ec(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw A.d(new A.bI("Illegal RegExp pattern ("+String(n)+")",a))},
fg(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
dG(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
cs(a,b,c){var s=A.ft(a,b,c)
return s},
ft(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
r=""+c
for(q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.dG(b),"g"),A.fg(c))},
bR:function bR(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
al:function al(a,b){this.a=a
this.b=b},
b1:function b1(a,b,c){this.a=a
this.b=b
this.c=c},
bf:function bf(a){this.a=a},
bL:function bL(a){this.a=a},
aw:function aw(a){this.a=a
this.b=null},
W:function W(){},
aQ:function aQ(){},
aR:function aR(){},
bd:function bd(){},
bb:function bb(){},
a3:function a3(a,b){this.a=a
this.b=b},
b8:function b8(a){this.a=a},
cl:function cl(a){this.a=a},
cm:function cm(a){this.a=a},
cn:function cn(a){this.a=a},
b0:function b0(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
d7(a,b){var s=b.c
return s==null?b.c=A.cJ(a,b.z,!0):s},
d6(a,b){var s=b.c
return s==null?b.c=A.ay(a,"ah",[b.z]):s},
d8(a){var s=a.y
if(s===6||s===7||s===8)return A.d8(a.z)
return s===11||s===12},
ei(a){return a.cy},
cP(a){return A.cK(v.typeUniverse,a,!1)},
V(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=A.V(a,s,a0,a1)
if(r===s)return b
return A.dk(a,r,!0)
case 7:s=b.z
r=A.V(a,s,a0,a1)
if(r===s)return b
return A.cJ(a,r,!0)
case 8:s=b.z
r=A.V(a,s,a0,a1)
if(r===s)return b
return A.dj(a,r,!0)
case 9:q=b.Q
p=A.aE(a,q,a0,a1)
if(p===q)return b
return A.ay(a,b.z,p)
case 10:o=b.z
n=A.V(a,o,a0,a1)
m=b.Q
l=A.aE(a,m,a0,a1)
if(n===o&&l===m)return b
return A.cH(a,n,l)
case 11:k=b.z
j=A.V(a,k,a0,a1)
i=b.Q
h=A.f6(a,i,a0,a1)
if(j===k&&h===i)return b
return A.di(a,j,h)
case 12:g=b.Q
a1+=g.length
f=A.aE(a,g,a0,a1)
o=b.z
n=A.V(a,o,a0,a1)
if(f===g&&n===o)return b
return A.cI(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw A.d(A.bA("Attempted to substitute unexpected RTI kind "+c))}},
aE(a,b,c,d){var s,r,q,p,o=b.length,n=A.cd(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.V(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
f7(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.cd(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.V(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
f6(a,b,c,d){var s,r=b.a,q=A.aE(a,r,c,d),p=b.b,o=A.aE(a,p,c,d),n=b.c,m=A.f7(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.bl()
s.a=q
s.b=o
s.c=m
return s},
k(a,b){a[v.arrayRti]=b
return a},
fe(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.fj(s)
return a.$S()}return null},
dD(a,b){var s
if(A.d8(b))if(a instanceof A.W){s=A.fe(a)
if(s!=null)return s}return A.aH(a)},
aH(a){var s
if(a instanceof A.l){s=a.$ti
return s!=null?s:A.cL(a)}if(Array.isArray(a))return A.U(a)
return A.cL(J.ac(a))},
U(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
a1(a){var s=a.$ti
return s!=null?s:A.cL(a)},
cL(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.eR(a,s)},
eR(a,b){var s=a instanceof A.W?a.__proto__.__proto__.constructor:b,r=A.eF(v.typeUniverse,s.name)
b.$ccache=r
return r},
fj(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.cK(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
eQ(a){var s,r,q,p,o=this
if(o===t.K)return A.a9(o,a,A.eV)
if(!A.O(o))if(!(o===t._))s=!1
else s=!0
else s=!0
if(s)return A.a9(o,a,A.eY)
s=o.y
r=s===6?o.z:o
if(r===t.S)q=A.ds
else if(r===t.i||r===t.cY)q=A.eU
else if(r===t.N)q=A.eW
else q=r===t.v?A.dq:null
if(q!=null)return A.a9(o,a,q)
if(r.y===9){p=r.z
if(r.Q.every(A.fo)){o.r="$i"+p
if(p==="J")return A.a9(o,a,A.eT)
return A.a9(o,a,A.eX)}}else if(s===7)return A.a9(o,a,A.eO)
return A.a9(o,a,A.eM)},
a9(a,b,c){a.b=c
return a.b(b)},
eP(a){var s,r=this,q=A.eL
if(!A.O(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=A.eK
else if(r===t.K)q=A.eI
else{s=A.aI(r)
if(s)q=A.eN}r.a=q
return r.a(a)},
cf(a){var s,r=a.y
if(!A.O(a))if(!(a===t._))if(!(a===t.A))if(r!==7)s=r===8&&A.cf(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
eM(a){var s=this
if(a==null)return A.cf(s)
return A.j(v.typeUniverse,A.dD(a,s),null,s,null)},
eO(a){if(a==null)return!0
return this.z.b(a)},
eX(a){var s,r=this
if(a==null)return A.cf(r)
s=r.r
if(a instanceof A.l)return!!a[s]
return!!J.ac(a)[s]},
eT(a){var s,r=this
if(a==null)return A.cf(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.r
if(a instanceof A.l)return!!a[s]
return!!J.ac(a)[s]},
eL(a){var s,r=this
if(a==null){s=A.aI(r)
if(s)return a}else if(r.b(a))return a
A.dn(a,r)},
eN(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.dn(a,s)},
dn(a,b){throw A.d(A.ev(A.de(a,A.dD(a,b),A.y(b,null))))},
de(a,b,c){var s=A.bH(a),r=A.y(b==null?A.aH(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
ev(a){return new A.ax("TypeError: "+a)},
q(a,b){return new A.ax("TypeError: "+A.de(a,null,b))},
eV(a){return a!=null},
eI(a){if(a!=null)return a
throw A.d(A.q(a,"Object"))},
eY(a){return!0},
eK(a){return a},
dq(a){return!0===a||!1===a},
eH(a){if(!0===a)return!0
if(!1===a)return!1
throw A.d(A.q(a,"bool"))},
fX(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.q(a,"bool"))},
fW(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.q(a,"bool?"))},
fY(a){if(typeof a=="number")return a
throw A.d(A.q(a,"double"))},
h_(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.q(a,"double"))},
fZ(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.q(a,"double?"))},
ds(a){return typeof a=="number"&&Math.floor(a)===a},
ce(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.d(A.q(a,"int"))},
h1(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.q(a,"int"))},
h0(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.q(a,"int?"))},
eU(a){return typeof a=="number"},
h2(a){if(typeof a=="number")return a
throw A.d(A.q(a,"num"))},
h4(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.q(a,"num"))},
h3(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.q(a,"num?"))},
eW(a){return typeof a=="string"},
a0(a){if(typeof a=="string")return a
throw A.d(A.q(a,"String"))},
h5(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.q(a,"String"))},
eJ(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.q(a,"String?"))},
f3(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.y(a[q],b)
return s},
dp(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=A.k([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)B.a.k(a5,"T"+(q+p))
for(o=t.O,n=t._,m="<",l="",p=0;p<s;++p,l=a3){m+=l
k=a5.length
j=k-1-p
if(!(j>=0))return A.u(a5,j)
m=B.c.a3(m,a5[j])
i=a6[p]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+A.y(i,a5)}m+=">"}else{m=""
r=null}o=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=A.y(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+A.y(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+A.y(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=A.y(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
y(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=A.y(a.z,b)
return s}if(l===7){r=a.z
s=A.y(r,b)
q=r.y
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+A.y(a.z,b)+">"
if(l===9){p=A.f8(a.z)
o=a.Q
return o.length>0?p+("<"+A.f3(o,b)+">"):p}if(l===11)return A.dp(a,b,null)
if(l===12)return A.dp(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.u(b,n)
return b[n]}return"?"},
f8(a){var s,r=v.mangledGlobalNames[a]
if(r!=null)return r
s="minified:"+a
return s},
eG(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
eF(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.cK(a,b,!1)
else if(typeof m=="number"){s=m
r=A.az(a,5,"#")
q=A.cd(s)
for(p=0;p<s;++p)q[p]=r
o=A.ay(a,b,q)
n[b]=o
return o}else return m},
eD(a,b){return A.dl(a.tR,b)},
eC(a,b){return A.dl(a.eT,b)},
cK(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.dh(A.df(a,null,b,c))
r.set(b,s)
return s},
cc(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=A.dh(A.df(a,b,c,!0))
q.set(c,r)
return r},
eE(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=A.cH(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
T(a,b){b.a=A.eP
b.b=A.eQ
return b},
az(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.E(null,null)
s.y=b
s.cy=c
r=A.T(a,s)
a.eC.set(c,r)
return r},
dk(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.eA(a,b,r,c)
a.eC.set(r,s)
return s},
eA(a,b,c,d){var s,r,q
if(d){s=b.y
if(!A.O(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.E(null,null)
q.y=6
q.z=b
q.cy=c
return A.T(a,q)},
cJ(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.ez(a,b,r,c)
a.eC.set(r,s)
return s},
ez(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!A.O(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.aI(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&A.aI(q.z))return q
else return A.d7(a,b)}}p=new A.E(null,null)
p.y=7
p.z=b
p.cy=c
return A.T(a,p)},
dj(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.ex(a,b,r,c)
a.eC.set(r,s)
return s},
ex(a,b,c,d){var s,r,q
if(d){s=b.y
if(!A.O(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return A.ay(a,"ah",[b])
else if(b===t.P||b===t.T)return t.bc}q=new A.E(null,null)
q.y=8
q.z=b
q.cy=c
return A.T(a,q)},
eB(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.E(null,null)
s.y=13
s.z=b
s.cy=q
r=A.T(a,s)
a.eC.set(q,r)
return r},
bq(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
ew(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
ay(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.bq(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.E(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=A.T(a,r)
a.eC.set(p,q)
return q},
cH(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+A.bq(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.E(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=A.T(a,o)
a.eC.set(q,n)
return n},
di(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.bq(m)
if(j>0){s=l>0?",":""
r=A.bq(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=A.ew(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new A.E(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=A.T(a,o)
a.eC.set(q,r)
return r},
cI(a,b,c,d){var s,r=b.cy+("<"+A.bq(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.ey(a,b,c,r,d)
a.eC.set(r,s)
return s},
ey(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.cd(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=A.V(a,b,r,0)
m=A.aE(a,c,r,0)
return A.cI(a,n,m,c!==m)}}l=new A.E(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return A.T(a,l)},
df(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
dh(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=A.eq(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=A.dg(a,r,h,g,!1)
else if(q===46)r=A.dg(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(A.S(a.u,a.e,g.pop()))
break
case 94:g.push(A.eB(a.u,g.pop()))
break
case 35:g.push(A.az(a.u,5,"#"))
break
case 64:g.push(A.az(a.u,2,"@"))
break
case 126:g.push(A.az(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
A.cG(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(A.ay(p,n,o))
else{m=A.S(p,a.e,n)
switch(m.y){case 11:g.push(A.cI(p,m,o,a.n))
break
default:g.push(A.cH(p,m,o))
break}}break
case 38:A.er(a,g)
break
case 42:p=a.u
g.push(A.dk(p,A.S(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(A.cJ(p,A.S(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(A.dj(p,A.S(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new A.bl()
k=p.sEA
j=p.sEA
n=g.pop()
if(typeof n=="number")switch(n){case-1:k=g.pop()
break
case-2:j=g.pop()
break
default:g.push(n)
break}else g.push(n)
o=g.splice(a.p)
A.cG(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(A.di(p,A.S(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
A.cG(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
A.et(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return A.S(a.u,a.e,i)},
eq(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
dg(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=A.eG(s,o.z)[p]
if(n==null)A.ad('No "'+p+'" in "'+A.ei(o)+'"')
d.push(A.cc(s,o,n))}else d.push(p)
return m},
er(a,b){var s=b.pop()
if(0===s){b.push(A.az(a.u,1,"0&"))
return}if(1===s){b.push(A.az(a.u,4,"1&"))
return}throw A.d(A.bA("Unexpected extended operation "+A.m(s)))},
S(a,b,c){if(typeof c=="string")return A.ay(a,c,a.sEA)
else if(typeof c=="number")return A.es(a,b,c)
else return c},
cG(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.S(a,b,c[s])},
et(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.S(a,b,c[s])},
es(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw A.d(A.bA("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw A.d(A.bA("Bad index "+c+" for "+b.h(0)))},
j(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!A.O(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(A.O(b))return!1
if(b.y!==1)s=!1
else s=!0
if(s)return!0
q=r===13
if(q)if(A.j(a,c[b.z],c,d,e))return!0
p=d.y
s=b===t.P||b===t.T
if(s){if(p===8)return A.j(a,b,c,d.z,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return A.j(a,b.z,c,d,e)
if(r===6)return A.j(a,b.z,c,d,e)
return r!==7}if(r===6)return A.j(a,b.z,c,d,e)
if(p===6){s=A.d7(a,d)
return A.j(a,b,c,s,e)}if(r===8){if(!A.j(a,b.z,c,d,e))return!1
return A.j(a,A.d6(a,b),c,d,e)}if(r===7){s=A.j(a,t.P,c,d,e)
return s&&A.j(a,b.z,c,d,e)}if(p===8){if(A.j(a,b,c,d.z,e))return!0
return A.j(a,b,c,A.d6(a,d),e)}if(p===7){s=A.j(a,b,c,t.P,e)
return s||A.j(a,b,c,d.z,e)}if(q)return!1
s=r!==11
if((!s||r===12)&&d===t.Z)return!0
if(p===12){if(b===t.g)return!0
if(r!==12)return!1
o=b.Q
n=d.Q
m=o.length
if(m!==n.length)return!1
c=c==null?o:o.concat(c)
e=e==null?n:n.concat(e)
for(l=0;l<m;++l){k=o[l]
j=n[l]
if(!A.j(a,k,c,j,e)||!A.j(a,j,e,k,c))return!1}return A.dr(a,b.z,c,d.z,e)}if(p===11){if(b===t.g)return!0
if(s)return!1
return A.dr(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return A.eS(a,b,c,d,e)}return!1},
dr(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.j(a3,a4.z,a5,a6.z,a7))return!1
s=a4.Q
r=a6.Q
q=s.a
p=r.a
o=q.length
n=p.length
if(o>n)return!1
m=n-o
l=s.b
k=r.b
j=l.length
i=k.length
if(o+j<n+i)return!1
for(h=0;h<o;++h){g=q[h]
if(!A.j(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.j(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.j(a3,k[h],a7,g,a5))return!1}f=s.c
e=r.c
d=f.length
c=e.length
for(b=0,a=0;a<c;a+=3){a0=e[a]
for(;!0;){if(b>=d)return!1
a1=f[b]
b+=3
if(a0<a1)return!1
a2=f[b-2]
if(a1<a0){if(a2)return!1
continue}g=e[a+1]
if(a2&&!g)return!1
g=f[b-1]
if(!A.j(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
eS(a,b,c,d,e){var s,r,q,p,o,n,m,l=b.z,k=d.z
for(;l!==k;){s=a.tR[l]
if(s==null)return!1
if(typeof s=="string"){l=s
continue}r=s[k]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.cc(a,b,r[o])
return A.dm(a,p,null,c,d.Q,e)}n=b.Q
m=d.Q
return A.dm(a,n,null,c,m,e)},
dm(a,b,c,d,e,f){var s,r,q,p=b.length
for(s=0;s<p;++s){r=b[s]
q=e[s]
if(!A.j(a,r,d,q,f))return!1}return!0},
aI(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!A.O(a))if(r!==7)if(!(r===6&&A.aI(a.z)))s=r===8&&A.aI(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
fo(a){var s
if(!A.O(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
O(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.O},
dl(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
cd(a){return a>0?new Array(a):v.typeUniverse.sEA},
E:function E(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
bl:function bl(){this.c=this.b=this.a=null},
bj:function bj(){},
ax:function ax(a){this.a=a},
ej(){var s,r,q={}
if(self.scheduleImmediate!=null)return A.fb()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(A.bt(new A.bV(q),1)).observe(s,{childList:true})
return new A.bU(q,s,r)}else if(self.setImmediate!=null)return A.fc()
return A.fd()},
ek(a){self.scheduleImmediate(A.bt(new A.bW(t.M.a(a)),0))},
el(a){self.setImmediate(A.bt(new A.bX(t.M.a(a)),0))},
em(a){t.M.a(a)
A.eu(0,a)},
eu(a,b){var s=new A.ca()
s.ab(a,b)
return s},
cu(a,b){var s=A.cN(a,"error",t.K)
return new A.ae(s,b==null?A.e_(a):b)},
e_(a){var s
if(t.R.b(a)){s=a.gD()
if(s!=null)return s}return B.p},
eo(a,b){var s,r,q
for(s=t.c;r=a.a,(r&4)!==0;)a=s.a(a.c)
if((r&24)!==0){q=b.W()
b.E(a)
A.bm(b,q)}else{q=t.F.a(b.c)
b.a=b.a&1|4
b.c=a
a.V(q)}},
bm(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=c.a=a
for(s=t.n,r=t.F,q=t.d;!0;){p={}
o=b.a
n=(o&16)===0
m=!n
if(a0==null){if(m&&(o&1)===0){l=s.a(b.c)
A.cg(l.a,l.b)}return}p.a=a0
k=a0.a
for(b=a0;k!=null;b=k,k=j){b.a=null
A.bm(c.a,b)
p.a=k
j=k.a}o=c.a
i=o.c
p.b=m
p.c=i
if(n){h=b.c
h=(h&1)!==0||(h&15)===8}else h=!0
if(h){g=b.b.b
if(m){o=o.b===g
o=!(o||o)}else o=!1
if(o){s.a(i)
A.cg(i.a,i.b)
return}f=$.o
if(f!==g)$.o=g
else f=null
b=b.c
if((b&15)===8)new A.c4(p,c,m).$0()
else if(n){if((b&1)!==0)new A.c3(p,i).$0()}else if((b&2)!==0)new A.c2(c,p).$0()
if(f!=null)$.o=f
b=p.c
if(q.b(b)){o=p.a.$ti
o=o.i("ah<2>").b(b)||!o.Q[1].b(b)}else o=!1
if(o){q.a(b)
e=p.a.b
if((b.a&24)!==0){d=r.a(e.c)
e.c=null
a0=e.C(d)
e.a=b.a&30|e.a&1
e.c=b.c
c.a=b
continue}else A.eo(b,e)
return}}e=p.a.b
d=r.a(e.c)
e.c=null
a0=e.C(d)
b=p.b
o=p.c
if(!b){e.$ti.c.a(o)
e.a=8
e.c=o}else{s.a(o)
e.a=e.a&1|16
e.c=o}c.a=e
b=e}},
f1(a,b){var s=t.Q
if(s.b(a))return s.a(a)
s=t.y
if(s.b(a))return s.a(a)
throw A.d(A.ct(a,"onError",u.c))},
f0(){var s,r
for(s=$.aa;s!=null;s=$.aa){$.aD=null
r=s.b
$.aa=r
if(r==null)$.aC=null
s.a.$0()}},
f5(){$.cM=!0
try{A.f0()}finally{$.aD=null
$.cM=!1
if($.aa!=null)$.cU().$1(A.dz())}},
dx(a){var s=new A.bh(a),r=$.aC
if(r==null){$.aa=$.aC=s
if(!$.cM)$.cU().$1(A.dz())}else $.aC=r.b=s},
f4(a){var s,r,q,p=$.aa
if(p==null){A.dx(a)
$.aD=$.aC
return}s=new A.bh(a)
r=$.aD
if(r==null){s.b=p
$.aa=$.aD=s}else{q=r.b
s.b=q
$.aD=r.b=s
if(q==null)$.aC=s}},
cg(a,b){A.f4(new A.ch(a,b))},
du(a,b,c,d,e){var s,r=$.o
if(r===c)return d.$0()
$.o=c
s=r
try{r=d.$0()
return r}finally{$.o=s}},
dv(a,b,c,d,e,f,g){var s,r=$.o
if(r===c)return d.$1(e)
$.o=c
s=r
try{r=d.$1(e)
return r}finally{$.o=s}},
f2(a,b,c,d,e,f,g,h,i){var s,r=$.o
if(r===c)return d.$2(e,f)
$.o=c
s=r
try{r=d.$2(e,f)
return r}finally{$.o=s}},
dw(a,b,c,d){t.M.a(d)
if(B.b!==c)d=c.al(d)
A.dx(d)},
bV:function bV(a){this.a=a},
bU:function bU(a,b,c){this.a=a
this.b=b
this.c=c},
bW:function bW(a){this.a=a},
bX:function bX(a){this.a=a},
ca:function ca(){},
cb:function cb(a,b){this.a=a
this.b=b},
ae:function ae(a,b){this.a=a
this.b=b},
ar:function ar(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
F:function F(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
c0:function c0(a,b){this.a=a
this.b=b},
c1:function c1(a,b){this.a=a
this.b=b},
c4:function c4(a,b,c){this.a=a
this.b=b
this.c=c},
c5:function c5(a){this.a=a},
c3:function c3(a,b){this.a=a
this.b=b},
c2:function c2(a,b){this.a=a
this.b=b},
bh:function bh(a){this.a=a
this.b=null},
ap:function ap(){},
bO:function bO(a,b){this.a=a
this.b=b},
bP:function bP(a,b){this.a=a
this.b=b},
bc:function bc(){},
aA:function aA(){},
ch:function ch(a,b){this.a=a
this.b=b},
bo:function bo(){},
c8:function c8(a,b){this.a=a
this.b=b},
c9:function c9(a,b,c){this.a=a
this.b=b
this.c=c},
d5(a){return new A.as(a.i("as<0>"))},
cF(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
ep(a,b,c){var s=new A.a8(a,b,c.i("a8<0>"))
s.c=a.e
return s},
e8(a,b,c){var s,r
if(A.dt(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.k([],t.s)
B.a.k($.N,a)
try{A.eZ(a,s)}finally{if(0>=$.N.length)return A.u($.N,-1)
$.N.pop()}r=A.d9(b,t.j.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
cy(a,b,c){var s,r
if(A.dt(a))return b+"..."+c
s=new A.bQ(b)
B.a.k($.N,a)
try{r=s
r.a=A.d9(r.a,a,", ")}finally{if(0>=$.N.length)return A.u($.N,-1)
$.N.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
dt(a){var s,r
for(s=$.N.length,r=0;r<s;++r)if(a===$.N[r])return!0
return!1},
eZ(a,b){var s,r,q,p,o,n,m,l=a.gq(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.l())return
s=A.m(l.gm())
B.a.k(b,s)
k+=s.length+2;++j}if(!l.l()){if(j<=5)return
if(0>=b.length)return A.u(b,-1)
r=b.pop()
if(0>=b.length)return A.u(b,-1)
q=b.pop()}else{p=l.gm();++j
if(!l.l()){if(j<=4){B.a.k(b,A.m(p))
return}r=A.m(p)
if(0>=b.length)return A.u(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gm();++j
for(;l.l();p=o,o=n){n=l.gm();++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return A.u(b,-1)
k-=b.pop().length+2;--j}B.a.k(b,"...")
return}}q=A.m(p)
r=A.m(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.u(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.k(b,m)
B.a.k(b,q)
B.a.k(b,r)},
as:function as(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bn:function bn(a){this.a=a
this.c=this.b=null},
a8:function a8(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
b2:function b2(){},
t:function t(){},
an:function an(){},
au:function au(){},
av:function av(){},
aB:function aB(){},
e7(a){if(a instanceof A.W)return a.h(0)
return"Instance of '"+A.bN(a)+"'"},
ed(a,b,c,d){var s,r=J.d3(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
eh(a){return new A.b0(a,A.ec(a,!1,!0,!1,!1,!1))},
d9(a,b,c){var s=J.dX(b)
if(!s.l())return a
if(c.length===0){do a+=A.m(s.gm())
while(s.l())}else{a+=A.m(s.gm())
for(;s.l();)a=a+c+A.m(s.gm())}return a},
bH(a){if(typeof a=="number"||A.dq(a)||a==null)return J.by(a)
if(typeof a=="string")return JSON.stringify(a)
return A.e7(a)},
bA(a){return new A.aO(a)},
bz(a,b){return new A.P(!1,null,b,a)},
ct(a,b,c){return new A.P(!0,a,b,c)},
ef(a){var s=null
return new A.a6(s,s,!1,s,s,a)},
b6(a,b,c,d,e){return new A.a6(b,c,!0,a,d,"Invalid value")},
eg(a,b,c){if(0>a||a>c)throw A.d(A.b6(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.d(A.b6(b,a,c,"end",null))
return b}return c},
b7(a,b){if(a<0)throw A.d(A.b6(a,0,null,b,null))
return a},
cx(a,b,c,d,e){var s=A.ce(e==null?J.bx(b):e)
return new A.aW(s,!0,a,c,"Index out of range")},
bT(a){return new A.bg(a)},
dc(a){return new A.be(a)},
bB(a){return new A.aS(a)},
bY:function bY(){},
h:function h(){},
aO:function aO(a){this.a=a},
R:function R(){},
b3:function b3(){},
P:function P(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a6:function a6(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
aW:function aW(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
bg:function bg(a){this.a=a},
be:function be(a){this.a=a},
aS:function aS(a){this.a=a},
ao:function ao(){},
aT:function aT(a){this.a=a},
c_:function c_(a){this.a=a},
bI:function bI(a,b){this.a=a
this.b=b},
i:function i(){},
C:function C(){},
l:function l(){},
bp:function bp(){},
bQ:function bQ(a){this.a=a},
en(a,b){var s,r,q=a.classList
q.toString
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.dH)(b),++r)q.add(b[r])},
cE(a,b,c,d,e){var s=A.fa(new A.bZ(c),t.B),r=s!=null
if(r&&!0){t.o.a(s)
if(r)J.dW(a,b,s,!1)}return new A.bk(a,b,s,!1,e.i("bk<0>"))},
fa(a,b){var s=$.o
if(s===B.b)return a
return s.am(a,b)},
b:function b(){},
aL:function aL(){},
aM:function aM(){},
G:function G(){},
bF:function bF(){},
bG:function bG(){},
x:function x(){},
a:function a(){},
r:function r(){},
aV:function aV(){},
v:function v(){},
f:function f(){},
b9:function b9(){},
K:function K(){},
H:function H(){},
at:function at(){},
bi:function bi(a){this.a=a},
cv:function cv(a,b){this.a=a
this.$ti=b},
aq:function aq(){},
M:function M(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bk:function bk(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
bZ:function bZ(a){this.a=a},
a4:function a4(){},
aU:function aU(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
br:function br(){},
bs:function bs(){},
af:function af(){},
bD:function bD(a){this.a=a},
bC:function bC(a,b){this.a=a
this.b=b},
bE:function bE(){},
c6:function c6(){},
aP:function aP(a){this.a=a},
c:function c(){},
fq(){var s,r,q,p
A.cT($.dV())
s=document
r=s.querySelector("#body")
r.toString
r=J.dZ(r)
q=r.$ti
p=q.i("~(1)?").a(new A.cp())
t.Y.a(null)
A.cE(r.a,r.b,p,!1,q.c)
s=s.querySelector("#body")
s.toString
s=J.dY(s)
q=s.$ti
A.cE(s.a,s.b,q.i("~(1)?").a(new A.cq()),!1,q.c)},
cT(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
for(s=t.s,r=t.X,q=0;p=a.a,q<p.length;++q){o=p[q]
n="#cat"+q
p=document.querySelector(n)
p.toString
m="Cats."+o.b
m=r.a(A.k(["cat",A.cs(m,"Cats.","")],s))
l=J.bw(p)
l.w(0)
l.u(0,m)}for(q=0;p=a.b,q<p.length;++q){k=p[q]
n="#patt"+q
p=document.querySelector(n)
p.toString
m="Patterns."+k.b
m=r.a(A.k(["tile","patt",A.cs(m,"Patterns.","")],s))
l=J.bw(p)
l.w(0)
l.u(0,m)}for(q=0;p=a.c,q<p.length;++q){j=p[q]
n="#player"+q
p=n+"color"
m=document
p=m.querySelector(p)
p.toString
i="Colors."+A.f_(j.a,"color").b
i=r.a(A.k(["tile","color",A.cs(i,"Colors.","")],s))
l=J.bw(p)
l.w(0)
l.u(0,i)
for(h=0;p=j.b,h<p.length;++h){g=p[h]
p=m.querySelector(n+"goal"+h)
p.toString
i="Goals."+g.b
i=r.a(A.k(["tile","goal",A.cs(i,"Goals.","")],s))
l=J.bw(p)
l.w(0)
l.u(0,i)}}},
cw(){var s=new A.bJ(A.k([],t.U),A.k([],t.r),A.k([],t.a))
s.a9(2)
return s},
cD(a,b){var s=B.h.a_(a.length)
if(!(s>=0&&s<a.length))return A.u(a,s)
return a[s]},
cC(a,b){var s,r,q,p,o=A.k(a.slice(0),A.U(a)),n=A.k([],b.i("n<0>"))
for(s=a.length,r=0;r<s;++r){q=B.h.a_(o.length)
if(!(q>=0&&q<o.length))return A.u(o,q)
p=o[q]
B.a.as(o,p)
B.a.k(n,p)}return n},
cp:function cp(){},
cq:function cq(){},
p:function p(a){this.b=a},
D:function D(a){this.b=a},
Q:function Q(a){this.b=a},
z:function z(a){this.b=a},
am:function am(a,b){this.a=a
this.b=b},
bJ:function bJ(a,b,c){this.a=a
this.b=b
this.c=c},
fv(a){return A.ad(new A.aj("Field '"+a+"' has been assigned during initialization."))},
f_(a,b){if(a===$)throw A.d(new A.aj("Field '"+b+"' has not been initialized."))
return a}},J={
cS(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ck(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.cR==null){A.fl()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.d(A.dc("Return interceptor for "+A.m(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.c7
if(o==null)o=$.c7=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.fp(a)
if(p!=null)return p
if(typeof a=="function")return B.N
s=Object.getPrototypeOf(a)
if(s==null)return B.i
if(s===Object.prototype)return B.i
if(typeof q=="function"){o=$.c7
if(o==null)o=$.c7=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.d,enumerable:false,writable:true,configurable:true})
return B.d}return B.d},
d3(a,b){if(a<0)throw A.d(A.bz("Length must be a non-negative integer: "+a,null))
return A.k(new Array(a),b.i("n<0>"))},
e9(a,b){a.fixed$length=Array
return a},
d4(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
ea(a,b){var s,r
for(s=a.length;b<s;){r=B.c.P(a,b)
if(r!==32&&r!==13&&!J.d4(r))break;++b}return b},
eb(a,b){var s,r
for(;b>0;b=s){s=b-1
r=B.c.Z(a,s)
if(r!==32&&r!==13&&!J.d4(r))break}return b},
ac(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ai.prototype
return J.aZ.prototype}if(typeof a=="string")return J.Y.prototype
if(a==null)return J.aY.prototype
if(typeof a=="boolean")return J.aX.prototype
if(a.constructor==Array)return J.n.prototype
if(typeof a!="object"){if(typeof a=="function")return J.I.prototype
return a}if(a instanceof A.l)return a
return J.ck(a)},
dB(a){if(typeof a=="string")return J.Y.prototype
if(a==null)return a
if(a.constructor==Array)return J.n.prototype
if(typeof a!="object"){if(typeof a=="function")return J.I.prototype
return a}if(a instanceof A.l)return a
return J.ck(a)},
cQ(a){if(a==null)return a
if(a.constructor==Array)return J.n.prototype
if(typeof a!="object"){if(typeof a=="function")return J.I.prototype
return a}if(a instanceof A.l)return a
return J.ck(a)},
fh(a){if(typeof a=="string")return J.Y.prototype
if(a==null)return a
if(!(a instanceof A.l))return J.a7.prototype
return a},
cj(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.I.prototype
return a}if(a instanceof A.l)return a
return J.ck(a)},
cV(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.ac(a).B(a,b)},
dW(a,b,c,d){return J.cj(a).ad(a,b,c,d)},
cW(a,b){return J.cQ(a).t(a,b)},
bw(a){return J.cj(a).gY(a)},
cX(a){return J.ac(a).gn(a)},
dX(a){return J.cQ(a).gq(a)},
bx(a){return J.dB(a).gj(a)},
dY(a){return J.cj(a).ga0(a)},
dZ(a){return J.cj(a).ga1(a)},
by(a){return J.ac(a).h(a)},
cY(a){return J.fh(a).az(a)},
A:function A(){},
aX:function aX(){},
aY:function aY(){},
Z:function Z(){},
b4:function b4(){},
a7:function a7(){},
I:function I(){},
n:function n(a){this.$ti=a},
bK:function bK(a){this.$ti=a},
aN:function aN(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
b_:function b_(){},
ai:function ai(){},
aZ:function aZ(){},
Y:function Y(){}},B={}
var w=[A,J,B]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
A.cz.prototype={}
J.A.prototype={
B(a,b){return a===b},
gn(a){return A.b5(a)},
h(a){return"Instance of '"+A.bN(a)+"'"}}
J.aX.prototype={
h(a){return String(a)},
gn(a){return a?519018:218159},
$iaF:1}
J.aY.prototype={
B(a,b){return null==b},
h(a){return"null"},
gn(a){return 0}}
J.Z.prototype={
gn(a){return 0},
h(a){return String(a)}}
J.b4.prototype={}
J.a7.prototype={}
J.I.prototype={
h(a){var s=a[$.dK()]
if(s==null)return this.a8(a)
return"JavaScript function for "+J.by(s)},
$iX:1}
J.n.prototype={
k(a,b){A.U(a).c.a(b)
if(!!a.fixed$length)A.ad(A.bT("add"))
a.push(b)},
as(a,b){var s
if(!!a.fixed$length)A.ad(A.bT("remove"))
for(s=0;s<a.length;++s)if(J.cV(a[s],b)){a.splice(s,1)
return!0}return!1},
t(a,b){if(!(b>=0&&b<a.length))return A.u(a,b)
return a[b]},
h(a){return A.cy(a,"[","]")},
gq(a){return new J.aN(a,a.length,A.U(a).i("aN<1>"))},
gn(a){return A.b5(a)},
gj(a){return a.length},
a5(a,b,c){var s
A.U(a).c.a(c)
if(!!a.immutable$list)A.ad(A.bT("indexed set"))
s=a.length
if(b>=s)throw A.d(A.bu(a,b))
a[b]=c},
$ii:1,
$iJ:1}
J.bK.prototype={}
J.aN.prototype={
gm(){return this.$ti.c.a(this.d)},
l(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.d(A.dH(q))
s=r.c
if(s>=p){r.sS(null)
return!1}r.sS(q[s]);++r.c
return!0},
sS(a){this.d=this.$ti.i("1?").a(a)}}
J.b_.prototype={
h(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gn(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
ai(a,b){var s
if(a>0)s=this.ah(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
ah(a,b){return b>31?0:a>>>b},
$iaJ:1}
J.ai.prototype={$ibv:1}
J.aZ.prototype={}
J.Y.prototype={
Z(a,b){if(b<0)throw A.d(A.bu(a,b))
if(b>=a.length)A.ad(A.bu(a,b))
return a.charCodeAt(b)},
P(a,b){if(b>=a.length)throw A.d(A.bu(a,b))
return a.charCodeAt(b)},
a3(a,b){return a+b},
a6(a,b,c){return a.substring(b,A.eg(b,c,a.length))},
az(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(this.P(p,0)===133){s=J.ea(p,1)
if(s===o)return""}else s=0
r=o-1
q=this.Z(p,r)===133?J.eb(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
h(a){return a},
gn(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gj(a){return a.length},
$ibM:1,
$ie:1}
A.aj.prototype={
h(a){var s="LateInitializationError: "+this.a
return s}}
A.ag.prototype={}
A.B.prototype={
gq(a){var s=this
return new A.a5(s,s.gj(s),A.a1(s).i("a5<B.E>"))}}
A.a_.prototype={
aa(a,b,c,d){var s,r=this.b
A.b7(r,"start")
s=this.c
A.b7(s,"end")
if(r>s)throw A.d(A.b6(r,0,s,"start",null))},
gaf(){var s=this.a.length,r=this.c
if(r>s)return s
return r},
gaj(){var s=this.a.length,r=this.b
if(r>s)return s
return r},
gj(a){var s,r=this.a.length,q=this.b
if(q>=r)return 0
s=this.c
if(s>=r)return r-q
return s-q},
t(a,b){var s=this,r=s.gaj()+b,q=s.gaf()
if(r>=q)throw A.d(A.cx(b,s,"index",null,null))
return J.cW(s.a,r)},
L(a){var s,r,q,p,o=this,n=o.b,m=o.a,l=m.length,k=o.c
if(k<l)l=k
s=l-n
if(s<=0){m=J.d3(0,o.$ti.c)
return m}r=J.cQ(m)
q=A.ed(s,r.t(m,n),!0,o.$ti.c)
for(p=1;p<s;++p){B.a.a5(q,p,r.t(m,n+p))
if(m.length<l)throw A.d(A.bB(o))}return q}}
A.a5.prototype={
gm(){return this.$ti.c.a(this.d)},
l(){var s,r=this,q=r.a,p=J.dB(q),o=p.gj(q)
if(r.b!==o)throw A.d(A.bB(q))
s=r.c
if(s>=o){r.sM(null)
return!1}r.sM(p.t(q,s));++r.c
return!0},
sM(a){this.d=this.$ti.i("1?").a(a)}}
A.ak.prototype={
gj(a){return J.bx(this.a)},
t(a,b){return this.b.$1(J.cW(this.a,b))}}
A.bR.prototype={
p(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
if(p==null)return null
s=Object.create(null)
r=q.b
if(r!==-1)s.arguments=p[r+1]
r=q.c
if(r!==-1)s.argumentsExpr=p[r+1]
r=q.d
if(r!==-1)s.expr=p[r+1]
r=q.e
if(r!==-1)s.method=p[r+1]
r=q.f
if(r!==-1)s.receiver=p[r+1]
return s}}
A.al.prototype={
h(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
A.b1.prototype={
h(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.bf.prototype={
h(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.bL.prototype={
h(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.aw.prototype={
h(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iba:1}
A.W.prototype={
h(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.dI(r==null?"unknown":r)+"'"},
$iX:1,
gaA(){return this},
$C:"$1",
$R:1,
$D:null}
A.aQ.prototype={$C:"$0",$R:0}
A.aR.prototype={$C:"$2",$R:2}
A.bd.prototype={}
A.bb.prototype={
h(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.dI(s)+"'"}}
A.a3.prototype={
B(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.a3))return!1
return this.$_target===b.$_target&&this.a===b.a},
gn(a){return(A.fs(this.a)^A.b5(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.bN(t.K.a(this.a))+"'")}}
A.b8.prototype={
h(a){return"RuntimeError: "+this.a}}
A.cl.prototype={
$1(a){return this.a(a)},
$S:4}
A.cm.prototype={
$2(a,b){return this.a(a,b)},
$S:5}
A.cn.prototype={
$1(a){return this.a(A.a0(a))},
$S:6}
A.b0.prototype={
h(a){return"RegExp/"+this.a+"/"+this.b.flags},
$ibM:1}
A.E.prototype={
i(a){return A.cc(v.typeUniverse,this,a)},
v(a){return A.eE(v.typeUniverse,this,a)}}
A.bl.prototype={}
A.bj.prototype={
h(a){return this.a}}
A.ax.prototype={$iR:1}
A.bV.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:7}
A.bU.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:8}
A.bW.prototype={
$0(){this.a.$0()},
$S:2}
A.bX.prototype={
$0(){this.a.$0()},
$S:2}
A.ca.prototype={
ab(a,b){if(self.setTimeout!=null)self.setTimeout(A.bt(new A.cb(this,b),0),a)
else throw A.d(A.bT("`setTimeout()` not found."))}}
A.cb.prototype={
$0(){this.b.$0()},
$S:0}
A.ae.prototype={
h(a){return A.m(this.a)},
$ih:1,
gD(){return this.b}}
A.ar.prototype={
ap(a){if((this.c&15)!==6)return!0
return this.b.b.K(t.m.a(this.d),a.a,t.v,t.K)},
ao(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.Q.b(q))p=l.au(q,m,a.b,o,n,t.l)
else p=l.K(t.y.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.w.b(A.aK(s))){if((r.c&1)!==0)throw A.d(A.bz("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.bz("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.F.prototype={
ay(a,b,c){var s,r,q,p=this.$ti
p.v(c).i("1/(2)").a(a)
s=$.o
if(s===B.b){if(b!=null&&!t.Q.b(b)&&!t.y.b(b))throw A.d(A.ct(b,"onError",u.c))}else{c.i("@<0/>").v(p.c).i("1(2)").a(a)
if(b!=null)b=A.f1(b,s)}r=new A.F(s,c.i("F<0>"))
q=b==null?1:3
this.O(new A.ar(r,q,a,b,p.i("@<1>").v(c).i("ar<1,2>")))
return r},
ax(a,b){return this.ay(a,null,b)},
E(a){this.a=a.a&30|this.a&1
this.c=a.c},
O(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.c.a(r.c)
if((s.a&24)===0){s.O(a)
return}r.E(s)}A.dw(null,null,r.b,t.M.a(new A.c0(r,a)))}},
V(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.c.a(m.c)
if((n.a&24)===0){n.V(a)
return}m.E(n)}l.a=m.C(a)
A.dw(null,null,m.b,t.M.a(new A.c1(l,m)))}},
W(){var s=t.F.a(this.c)
this.c=null
return this.C(s)},
C(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
$iah:1}
A.c0.prototype={
$0(){A.bm(this.a,this.b)},
$S:0}
A.c1.prototype={
$0(){A.bm(this.b,this.a.a)},
$S:0}
A.c4.prototype={
$0(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.at(t.I.a(q.d),t.z)}catch(p){s=A.aK(p)
r=A.aG(p)
q=m.c&&t.n.a(m.b.a.c).a===s
o=m.a
if(q)o.c=t.n.a(m.b.a.c)
else o.c=A.cu(s,r)
o.b=!0
return}if(l instanceof A.F&&(l.a&24)!==0){if((l.a&16)!==0){q=m.a
q.c=t.n.a(l.c)
q.b=!0}return}if(t.d.b(l)){n=m.b.a
q=m.a
q.c=l.ax(new A.c5(n),t.z)
q.b=!1}},
$S:0}
A.c5.prototype={
$1(a){return this.a},
$S:9}
A.c3.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.K(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.aK(l)
r=A.aG(l)
q=this.a
q.c=A.cu(s,r)
q.b=!0}},
$S:0}
A.c2.prototype={
$0(){var s,r,q,p,o,n,m=this
try{s=t.n.a(m.a.a.c)
p=m.b
if(p.a.ap(s)&&p.a.e!=null){p.c=p.a.ao(s)
p.b=!1}}catch(o){r=A.aK(o)
q=A.aG(o)
p=t.n.a(m.a.a.c)
n=m.b
if(p.a===r)n.c=p
else n.c=A.cu(r,q)
n.b=!0}},
$S:0}
A.bh.prototype={}
A.ap.prototype={
gj(a){var s,r,q=this,p={},o=new A.F($.o,t.x)
p.a=0
s=q.$ti
r=s.i("~(1)?").a(new A.bO(p,q))
t.Y.a(new A.bP(p,o))
A.cE(q.a,q.b,r,!1,s.c)
return o}}
A.bO.prototype={
$1(a){this.b.$ti.c.a(a);++this.a.a},
$S(){return this.b.$ti.i("~(1)")}}
A.bP.prototype={
$0(){var s=this.b,r=s.$ti,q=r.i("1/").a(this.a.a),p=s.W()
r.c.a(q)
s.a=8
s.c=q
A.bm(s,p)},
$S:0}
A.bc.prototype={}
A.aA.prototype={$idd:1}
A.ch.prototype={
$0(){var s=t.K.a(A.d(this.a))
s.stack=this.b.h(0)
throw s},
$S:0}
A.bo.prototype={
av(a){var s,r,q,p,o
t.M.a(a)
try{if(B.b===$.o){a.$0()
return}A.du(null,null,this,a,t.H)}catch(q){s=A.aK(q)
r=A.aG(q)
p=t.K.a(s)
o=t.l.a(r)
A.cg(p,o)}},
aw(a,b,c){var s,r,q,p,o
c.i("~(0)").a(a)
c.a(b)
try{if(B.b===$.o){a.$1(b)
return}A.dv(null,null,this,a,b,t.H,c)}catch(q){s=A.aK(q)
r=A.aG(q)
p=t.K.a(s)
o=t.l.a(r)
A.cg(p,o)}},
al(a){return new A.c8(this,t.M.a(a))},
am(a,b){return new A.c9(this,b.i("~(0)").a(a),b)},
at(a,b){b.i("0()").a(a)
if($.o===B.b)return a.$0()
return A.du(null,null,this,a,b)},
K(a,b,c,d){c.i("@<0>").v(d).i("1(2)").a(a)
d.a(b)
if($.o===B.b)return a.$1(b)
return A.dv(null,null,this,a,b,c,d)},
au(a,b,c,d,e,f){d.i("@<0>").v(e).v(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.o===B.b)return a.$2(b,c)
return A.f2(null,null,this,a,b,c,d,e,f)}}
A.c8.prototype={
$0(){return this.a.av(this.b)},
$S:0}
A.c9.prototype={
$1(a){var s=this.c
return this.a.aw(this.b,s.a(a),s)},
$S(){return this.c.i("~(0)")}}
A.as.prototype={
gq(a){var s=this,r=new A.a8(s,s.r,A.a1(s).i("a8<1>"))
r.c=s.e
return r},
gj(a){return this.a},
k(a,b){var s,r,q=this
A.a1(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.N(s==null?q.b=A.cF():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.N(r==null?q.c=A.cF():r,b)}else return q.ac(b)},
ac(a){var s,r,q,p=this
A.a1(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.cF()
r=p.ae(a)
q=s[r]
if(q==null)s[r]=[p.H(a)]
else{if(p.ag(q,a)>=0)return!1
q.push(p.H(a))}return!0},
N(a,b){A.a1(this).c.a(b)
if(t.c8.a(a[b])!=null)return!1
a[b]=this.H(b)
return!0},
U(){this.r=this.r+1&1073741823},
H(a){var s,r=this,q=new A.bn(A.a1(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.U()
return q},
ae(a){return J.cX(a)&1073741823},
ag(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.cV(a[r].a,b))return r
return-1}}
A.bn.prototype={}
A.a8.prototype={
gm(){return this.$ti.c.a(this.d)},
l(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.d(A.bB(q))
else if(r==null){s.sR(null)
return!1}else{s.sR(s.$ti.i("1?").a(r.a))
s.c=r.b
return!0}},
sR(a){this.d=this.$ti.i("1?").a(a)}}
A.b2.prototype={
h(a){return A.cy(a,"[","]")}}
A.t.prototype={
u(a,b){var s,r
A.a1(this).i("i<t.E>").a(b)
for(s=b.$ti,r=new A.a5(b,b.gj(b),s.i("a5<B.E>")),s=s.i("B.E");r.l();)this.k(0,s.a(r.d))},
h(a){return A.cy(this,"{","}")},
I(a,b){var s,r,q=this.gq(this)
if(!q.l())return""
s=q.$ti.c
if(b===""){r=""
do r+=A.m(s.a(q.d))
while(q.l())
s=r}else{r=""+A.m(s.a(q.d))
for(;q.l();)r=r+b+A.m(s.a(q.d))
s=r}return s.charCodeAt(0)==0?s:s}}
A.an.prototype={$ii:1,$iw:1}
A.au.prototype={$ii:1,$iw:1}
A.av.prototype={}
A.aB.prototype={}
A.bY.prototype={}
A.h.prototype={
gD(){return A.aG(this.$thrownJsError)}}
A.aO.prototype={
h(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.bH(s)
return"Assertion failed"}}
A.R.prototype={}
A.b3.prototype={
h(a){return"Throw of null."}}
A.P.prototype={
gG(){return"Invalid argument"+(!this.a?"(s)":"")},
gF(){return""},
h(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gG()+o+m
if(!q.a)return l
s=q.gF()
r=A.bH(q.b)
return l+s+": "+r}}
A.a6.prototype={
gG(){return"RangeError"},
gF(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.m(q):""
else if(q==null)s=": Not greater than or equal to "+A.m(r)
else if(q>r)s=": Not in inclusive range "+A.m(r)+".."+A.m(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.m(r)
return s}}
A.aW.prototype={
gG(){return"RangeError"},
gF(){if(A.ce(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gj(a){return this.f}}
A.bg.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.be.prototype={
h(a){var s="UnimplementedError: "+this.a
return s}}
A.aS.prototype={
h(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.bH(s)+"."}}
A.ao.prototype={
h(a){return"Stack Overflow"},
gD(){return null},
$ih:1}
A.aT.prototype={
h(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
A.c_.prototype={
h(a){return"Exception: "+this.a}}
A.bI.prototype={
h(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(q.length>78)q=B.c.a6(q,0,75)+"..."
return r+"\n"+q}}
A.i.prototype={
gj(a){var s,r=this.gq(this)
for(s=0;r.l();)++s
return s},
t(a,b){var s,r,q
A.b7(b,"index")
for(s=this.gq(this),r=0;s.l();){q=s.gm()
if(b===r)return q;++r}throw A.d(A.cx(b,this,"index",null,r))},
h(a){return A.e8(this,"(",")")}}
A.C.prototype={
gn(a){return A.l.prototype.gn.call(this,this)},
h(a){return"null"}}
A.l.prototype={$il:1,
B(a,b){return this===b},
gn(a){return A.b5(this)},
h(a){return"Instance of '"+A.bN(this)+"'"},
toString(){return this.h(this)}}
A.bp.prototype={
h(a){return""},
$iba:1}
A.bQ.prototype={
gj(a){return this.a.length},
h(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.b.prototype={}
A.aL.prototype={
h(a){var s=String(a)
s.toString
return s}}
A.aM.prototype={
h(a){var s=String(a)
s.toString
return s}}
A.G.prototype={
gj(a){return a.length}}
A.bF.prototype={
h(a){var s=String(a)
s.toString
return s}}
A.bG.prototype={
gj(a){var s=a.length
s.toString
return s}}
A.x.prototype={
gY(a){return new A.bi(a)},
h(a){var s=a.localName
s.toString
return s},
ga0(a){return new A.M(a,"click",!1,t.V)},
ga1(a){return new A.M(a,"touchstart",!1,t.W)},
$ix:1}
A.a.prototype={$ia:1}
A.r.prototype={
ad(a,b,c,d){return a.addEventListener(b,A.bt(t.o.a(c),1),!1)},
$ir:1}
A.aV.prototype={
gj(a){return a.length}}
A.v.prototype={$iv:1}
A.f.prototype={
h(a){var s=a.nodeValue
return s==null?this.a7(a):s},
$if:1}
A.b9.prototype={
gj(a){return a.length}}
A.K.prototype={$iK:1}
A.H.prototype={}
A.at.prototype={
gj(a){var s=a.length
s.toString
return s},
t(a,b){if(!(b>=0&&b<a.length))return A.u(a,b)
return a[b]},
$icA:1,
$ii:1,
$iJ:1}
A.bi.prototype={
A(){var s,r,q,p,o=A.d5(t.N)
for(s=this.a.className.split(" "),r=s.length,q=0;q<r;++q){p=J.cY(s[q])
if(p.length!==0)o.k(0,p)}return o},
a2(a){this.a.className=t.C.a(a).I(0," ")},
gj(a){var s=this.a.classList.length
s.toString
return s},
w(a){this.a.className=""},
k(a,b){var s,r
A.a0(b)
s=this.a.classList
r=s.contains(b)
r.toString
s.add(b)
return!r},
u(a,b){A.en(this.a,t.X.a(b))}}
A.cv.prototype={}
A.aq.prototype={}
A.M.prototype={}
A.bk.prototype={}
A.bZ.prototype={
$1(a){return this.a.$1(t.B.a(a))},
$S:10}
A.a4.prototype={
gq(a){return new A.aU(a,a.length,A.aH(a).i("aU<a4.E>"))}}
A.aU.prototype={
l(){var s=this,r=s.c+1,q=s.b
if(r<q){q=s.a
if(!(r>=0&&r<q.length))return A.u(q,r)
s.sT(q[r])
s.c=r
return!0}s.sT(null)
s.c=q
return!1},
gm(){return this.$ti.c.a(this.d)},
sT(a){this.d=this.$ti.i("1?").a(a)}}
A.br.prototype={}
A.bs.prototype={}
A.af.prototype={
X(a){var s
A.a0(a)
s=$.dJ().b
if(s.test(a))return a
throw A.d(A.ct(a,"value","Not a valid class token"))},
h(a){return this.A().I(0," ")},
gq(a){var s=this.A()
return A.ep(s,s.r,A.a1(s).c)},
gj(a){return this.A().a},
k(a,b){var s
A.a0(b)
this.X(b)
s=this.J(new A.bD(b))
return A.eH(s==null?!1:s)},
u(a,b){this.J(new A.bC(this,t.X.a(b)))},
w(a){this.J(new A.bE())},
J(a){var s,r
t.b4.a(a)
s=this.A()
r=a.$1(s)
this.a2(s)
return r}}
A.bD.prototype={
$1(a){return t.C.a(a).k(0,this.a)},
$S:12}
A.bC.prototype={
$1(a){var s=this.b,r=A.U(s)
return t.C.a(a).u(0,new A.ak(s,r.i("e(1)").a(this.a.gak()),r.i("ak<1,e>")))},
$S:3}
A.bE.prototype={
$1(a){t.C.a(a)
if(a.a>0){a.b=a.c=a.d=a.e=a.f=null
a.a=0
a.U()}return null},
$S:3}
A.c6.prototype={
a_(a){if(a<=0||a>4294967296)throw A.d(A.ef("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0}}
A.aP.prototype={
A(){var s,r,q,p,o=this.a.getAttribute("class"),n=A.d5(t.N)
if(o==null)return n
for(s=o.split(" "),r=s.length,q=0;q<r;++q){p=J.cY(s[q])
if(p.length!==0)n.k(0,p)}return n},
a2(a){this.a.setAttribute("class",a.I(0," "))}}
A.c.prototype={
gY(a){return new A.aP(a)},
ga0(a){return new A.M(a,"click",!1,t.V)},
ga1(a){return new A.M(a,"touchstart",!1,t.W)}}
A.cp.prototype={
$1(a){var s
t.u.a(a)
s=A.cw()
$.dA=s
A.cT(s)},
$S:13}
A.cq.prototype={
$1(a){var s
t.E.a(a)
s=A.cw()
$.dA=s
A.cT(s)},
$S:14}
A.p.prototype={
h(a){return"Cats."+this.b}}
A.D.prototype={
h(a){return"Patterns."+this.b}}
A.Q.prototype={
h(a){return"Colors."+this.b}}
A.z.prototype={
h(a){return"Goals."+this.b}}
A.am.prototype={
sa4(a){this.b=t.k.a(a)}}
A.bJ.prototype={
a9(a){var s,r,q,p,o,n,m,l=t.U,k=t.e
this.san(A.k([A.cD(A.k([B.q,B.r,B.w,B.x],l),k),A.cD(A.k([B.t,B.u,B.y,B.z],l),k),A.cD(A.k([B.v,B.A],l),k)],l))
l=A.cC(B.Q,t.L)
k=t.S
this.saq(A.da(l,0,A.cN(6,"count",k),A.U(l).c).L(0))
l=A.cC(B.P,t.h)
s=A.da(l,0,A.cN(a,"count",k),A.U(l).c).L(0)
r=A.k(new Array(a),t.a)
for(l=t.f,k=t.q,q=0;q<a;++q){if(!(q<s.length))return A.u(s,q)
p=new A.am(s[q],A.k([],l))
o=A.cC(B.O,k)
n=A.U(o)
m=new A.a_(o,0,4,n.i("a_<1>"))
m.aa(o,0,4,n.c)
p.sa4(m.L(0))
r[q]=p}this.sar(r)},
san(a){this.a=t.D.a(a)},
saq(a){this.b=t.t.a(a)},
sar(a){this.c=t.J.a(a)}};(function aliases(){var s=J.A.prototype
s.a7=s.h
s=J.Z.prototype
s.a8=s.h})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._instance_1u
s(A,"fb","ek",1)
s(A,"fc","el",1)
s(A,"fd","em",1)
r(A,"dz","f5",0)
q(A.af.prototype,"gak","X",11)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.l,null)
q(A.l,[A.cz,J.A,J.aN,A.h,A.i,A.a5,A.bR,A.bL,A.aw,A.W,A.b0,A.E,A.bl,A.ca,A.ae,A.ar,A.F,A.bh,A.ap,A.bc,A.aA,A.aB,A.bn,A.a8,A.b2,A.t,A.av,A.bY,A.ao,A.c_,A.bI,A.C,A.bp,A.bQ,A.cv,A.a4,A.aU,A.c6,A.am,A.bJ])
q(J.A,[J.aX,J.aY,J.Z,J.n,J.b_,J.Y,A.r,A.bF,A.bG,A.a,A.br])
q(J.Z,[J.b4,J.a7,J.I])
r(J.bK,J.n)
q(J.b_,[J.ai,J.aZ])
q(A.h,[A.aj,A.R,A.b1,A.bf,A.b8,A.bj,A.aO,A.b3,A.P,A.bg,A.be,A.aS,A.aT])
r(A.ag,A.i)
r(A.B,A.ag)
q(A.B,[A.a_,A.ak])
r(A.al,A.R)
q(A.W,[A.aQ,A.aR,A.bd,A.cl,A.cn,A.bV,A.bU,A.c5,A.bO,A.c9,A.bZ,A.bD,A.bC,A.bE,A.cp,A.cq])
q(A.bd,[A.bb,A.a3])
r(A.cm,A.aR)
r(A.ax,A.bj)
q(A.aQ,[A.bW,A.bX,A.cb,A.c0,A.c1,A.c4,A.c3,A.c2,A.bP,A.ch,A.c8])
r(A.bo,A.aA)
r(A.au,A.aB)
r(A.as,A.au)
r(A.an,A.av)
q(A.P,[A.a6,A.aW])
r(A.f,A.r)
q(A.f,[A.x,A.G])
q(A.x,[A.b,A.c])
q(A.b,[A.aL,A.aM,A.aV,A.b9])
r(A.H,A.a)
q(A.H,[A.v,A.K])
r(A.bs,A.br)
r(A.at,A.bs)
r(A.af,A.an)
q(A.af,[A.bi,A.aP])
r(A.aq,A.ap)
r(A.M,A.aq)
r(A.bk,A.bc)
q(A.bY,[A.p,A.D,A.Q,A.z])
s(A.av,A.t)
s(A.aB,A.t)
s(A.br,A.b2)
s(A.bs,A.a4)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{bv:"int",ff:"double",aJ:"num",e:"String",aF:"bool",C:"Null",J:"List"},mangledNames:{},types:["~()","~(~())","C()","~(w<e>)","@(@)","@(@,e)","@(e)","C(@)","C(~())","F<@>(@)","~(a)","e(e)","aF(w<e>)","~(K)","~(v)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.eD(v.typeUniverse,JSON.parse('{"b4":"Z","a7":"Z","I":"Z","fy":"a","fF":"a","fx":"c","fG":"c","fz":"b","fI":"b","fH":"f","fE":"f","fJ":"v","fB":"H","fA":"G","fK":"G","aX":{"aF":[]},"n":{"J":["1"],"i":["1"]},"bK":{"n":["1"],"J":["1"],"i":["1"]},"b_":{"aJ":[]},"ai":{"bv":[],"aJ":[]},"aZ":{"aJ":[]},"Y":{"e":[],"bM":[]},"aj":{"h":[]},"ag":{"i":["1"]},"B":{"i":["1"]},"a_":{"B":["1"],"i":["1"],"B.E":"1"},"ak":{"B":["2"],"i":["2"],"B.E":"2"},"al":{"R":[],"h":[]},"b1":{"h":[]},"bf":{"h":[]},"aw":{"ba":[]},"W":{"X":[]},"aQ":{"X":[]},"aR":{"X":[]},"bd":{"X":[]},"bb":{"X":[]},"a3":{"X":[]},"b8":{"h":[]},"b0":{"bM":[]},"bj":{"h":[]},"ax":{"R":[],"h":[]},"F":{"ah":["1"]},"ae":{"h":[]},"aA":{"dd":[]},"bo":{"aA":[],"dd":[]},"as":{"t":["1"],"w":["1"],"i":["1"],"t.E":"1"},"an":{"t":["1"],"w":["1"],"i":["1"]},"au":{"t":["1"],"w":["1"],"i":["1"]},"bv":{"aJ":[]},"w":{"i":["1"]},"e":{"bM":[]},"aO":{"h":[]},"R":{"h":[]},"b3":{"h":[]},"P":{"h":[]},"a6":{"h":[]},"aW":{"h":[]},"bg":{"h":[]},"be":{"h":[]},"aS":{"h":[]},"ao":{"h":[]},"aT":{"h":[]},"bp":{"ba":[]},"v":{"a":[]},"f":{"r":[]},"K":{"a":[]},"b":{"x":[],"f":[],"r":[]},"aL":{"x":[],"f":[],"r":[]},"aM":{"x":[],"f":[],"r":[]},"G":{"f":[],"r":[]},"x":{"f":[],"r":[]},"aV":{"x":[],"f":[],"r":[]},"b9":{"x":[],"f":[],"r":[]},"H":{"a":[]},"at":{"b2":["f"],"a4":["f"],"J":["f"],"cA":["f"],"i":["f"],"a4.E":"f"},"bi":{"t":["e"],"w":["e"],"i":["e"],"t.E":"e"},"aq":{"ap":["1"]},"M":{"aq":["1"],"ap":["1"]},"af":{"t":["e"],"w":["e"],"i":["e"]},"aP":{"t":["e"],"w":["e"],"i":["e"],"t.E":"e"},"c":{"x":[],"f":[],"r":[]}}'))
A.eC(v.typeUniverse,JSON.parse('{"ag":1,"bc":1,"an":1,"au":1,"av":1,"aB":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.cP
return{n:s("ae"),e:s("p"),h:s("Q"),R:s("h"),B:s("a"),Z:s("X"),d:s("ah<@>"),q:s("z"),X:s("i<e>"),j:s("i<@>"),U:s("n<p>"),f:s("n<z>"),r:s("n<D>"),a:s("n<am>"),s:s("n<e>"),b:s("n<@>"),T:s("aY"),g:s("I"),p:s("cA<@>"),D:s("J<p>"),k:s("J<z>"),t:s("J<D>"),J:s("J<am>"),E:s("v"),P:s("C"),K:s("l"),L:s("D"),C:s("w<e>"),l:s("ba"),N:s("e"),u:s("K"),w:s("R"),G:s("a7"),V:s("M<v>"),W:s("M<K>"),c:s("F<@>"),x:s("F<bv>"),v:s("aF"),m:s("aF(l)"),i:s("ff"),z:s("@"),I:s("@()"),y:s("@(l)"),Q:s("@(l,ba)"),b4:s("@(w<e>)"),S:s("bv"),A:s("0&*"),_:s("l*"),bc:s("ah<C>?"),O:s("l?"),F:s("ar<@,@>?"),c8:s("bn?"),o:s("@(a)?"),Y:s("~()?"),cY:s("aJ"),H:s("~"),M:s("~()")}})();(function constants(){var s=hunkHelpers.makeConstList
B.L=J.A.prototype
B.a=J.n.prototype
B.M=J.ai.prototype
B.c=J.Y.prototype
B.N=J.I.prototype
B.i=J.b4.prototype
B.d=J.a7.prototype
B.e=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.j=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.o=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.k=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.l=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.n=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.m=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.f=function(hooks) { return hooks; }

B.h=new A.c6()
B.b=new A.bo()
B.p=new A.bp()
B.q=new A.p("cat1")
B.r=new A.p("cat2")
B.t=new A.p("cat3")
B.u=new A.p("cat4")
B.v=new A.p("cat5")
B.w=new A.p("cat6")
B.x=new A.p("cat7")
B.y=new A.p("cat8")
B.z=new A.p("cat9")
B.A=new A.p("cat10")
B.F=new A.z("goal1")
B.G=new A.z("goal2")
B.H=new A.z("goal3")
B.I=new A.z("goal4")
B.J=new A.z("goal5")
B.K=new A.z("goal6")
B.O=A.k(s([B.F,B.G,B.H,B.I,B.J,B.K]),t.f)
B.B=new A.Q("col1")
B.C=new A.Q("col2")
B.D=new A.Q("col3")
B.E=new A.Q("col4")
B.P=A.k(s([B.B,B.C,B.D,B.E]),A.cP("n<Q>"))
B.R=new A.D("patt1")
B.S=new A.D("patt2")
B.T=new A.D("patt3")
B.U=new A.D("patt4")
B.V=new A.D("patt5")
B.W=new A.D("patt6")
B.Q=A.k(s([B.R,B.S,B.T,B.U,B.V,B.W]),t.r)})();(function staticFields(){$.c7=null
$.d0=null
$.d_=null
$.dC=null
$.dy=null
$.dF=null
$.ci=null
$.co=null
$.cR=null
$.aa=null
$.aC=null
$.aD=null
$.cM=!1
$.o=B.b
$.N=A.k([],A.cP("n<l>"))})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"fD","dK",()=>A.fi("_$dart_dartClosure"))
s($,"fL","dL",()=>A.L(A.bS({
toString:function(){return"$receiver$"}})))
s($,"fM","dM",()=>A.L(A.bS({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"fN","dN",()=>A.L(A.bS(null)))
s($,"fO","dO",()=>A.L(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"fR","dR",()=>A.L(A.bS(void 0)))
s($,"fS","dS",()=>A.L(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"fQ","dQ",()=>A.L(A.db(null)))
s($,"fP","dP",()=>A.L(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"fU","dU",()=>A.L(A.db(void 0)))
s($,"fT","dT",()=>A.L(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"fV","cU",()=>A.ej())
s($,"fC","dJ",()=>A.eh("^\\S+$"))
r($,"dA","dV",()=>A.cw())})();(function nativeSupport(){!function(){var s=function(a){var m={}
m[a]=1
return Object.keys(hunkHelpers.convertToFastObject(m))[0]}
v.getIsolateTag=function(a){return s("___dart_"+a+v.isolateTag)}
var r="___dart_isolate_tags_"
var q=Object[r]||(Object[r]=Object.create(null))
var p="_ZxYxX"
for(var o=0;;o++){var n=s(p+"_"+o+"_")
if(!(n in q)){q[n]=1
v.isolateTag=n
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.A,MediaError:J.A,NavigatorUserMediaError:J.A,OverconstrainedError:J.A,PositionError:J.A,GeolocationPositionError:J.A,HTMLAudioElement:A.b,HTMLBRElement:A.b,HTMLBaseElement:A.b,HTMLBodyElement:A.b,HTMLButtonElement:A.b,HTMLCanvasElement:A.b,HTMLContentElement:A.b,HTMLDListElement:A.b,HTMLDataElement:A.b,HTMLDataListElement:A.b,HTMLDetailsElement:A.b,HTMLDialogElement:A.b,HTMLDivElement:A.b,HTMLEmbedElement:A.b,HTMLFieldSetElement:A.b,HTMLHRElement:A.b,HTMLHeadElement:A.b,HTMLHeadingElement:A.b,HTMLHtmlElement:A.b,HTMLIFrameElement:A.b,HTMLImageElement:A.b,HTMLInputElement:A.b,HTMLLIElement:A.b,HTMLLabelElement:A.b,HTMLLegendElement:A.b,HTMLLinkElement:A.b,HTMLMapElement:A.b,HTMLMediaElement:A.b,HTMLMenuElement:A.b,HTMLMetaElement:A.b,HTMLMeterElement:A.b,HTMLModElement:A.b,HTMLOListElement:A.b,HTMLObjectElement:A.b,HTMLOptGroupElement:A.b,HTMLOptionElement:A.b,HTMLOutputElement:A.b,HTMLParagraphElement:A.b,HTMLParamElement:A.b,HTMLPictureElement:A.b,HTMLPreElement:A.b,HTMLProgressElement:A.b,HTMLQuoteElement:A.b,HTMLScriptElement:A.b,HTMLShadowElement:A.b,HTMLSlotElement:A.b,HTMLSourceElement:A.b,HTMLSpanElement:A.b,HTMLStyleElement:A.b,HTMLTableCaptionElement:A.b,HTMLTableCellElement:A.b,HTMLTableDataCellElement:A.b,HTMLTableHeaderCellElement:A.b,HTMLTableColElement:A.b,HTMLTableElement:A.b,HTMLTableRowElement:A.b,HTMLTableSectionElement:A.b,HTMLTemplateElement:A.b,HTMLTextAreaElement:A.b,HTMLTimeElement:A.b,HTMLTitleElement:A.b,HTMLTrackElement:A.b,HTMLUListElement:A.b,HTMLUnknownElement:A.b,HTMLVideoElement:A.b,HTMLDirectoryElement:A.b,HTMLFontElement:A.b,HTMLFrameElement:A.b,HTMLFrameSetElement:A.b,HTMLMarqueeElement:A.b,HTMLElement:A.b,HTMLAnchorElement:A.aL,HTMLAreaElement:A.aM,CDATASection:A.G,CharacterData:A.G,Comment:A.G,ProcessingInstruction:A.G,Text:A.G,DOMException:A.bF,DOMTokenList:A.bG,Element:A.x,AbortPaymentEvent:A.a,AnimationEvent:A.a,AnimationPlaybackEvent:A.a,ApplicationCacheErrorEvent:A.a,BackgroundFetchClickEvent:A.a,BackgroundFetchEvent:A.a,BackgroundFetchFailEvent:A.a,BackgroundFetchedEvent:A.a,BeforeInstallPromptEvent:A.a,BeforeUnloadEvent:A.a,BlobEvent:A.a,CanMakePaymentEvent:A.a,ClipboardEvent:A.a,CloseEvent:A.a,CustomEvent:A.a,DeviceMotionEvent:A.a,DeviceOrientationEvent:A.a,ErrorEvent:A.a,ExtendableEvent:A.a,ExtendableMessageEvent:A.a,FetchEvent:A.a,FontFaceSetLoadEvent:A.a,ForeignFetchEvent:A.a,GamepadEvent:A.a,HashChangeEvent:A.a,InstallEvent:A.a,MediaEncryptedEvent:A.a,MediaKeyMessageEvent:A.a,MediaQueryListEvent:A.a,MediaStreamEvent:A.a,MediaStreamTrackEvent:A.a,MessageEvent:A.a,MIDIConnectionEvent:A.a,MIDIMessageEvent:A.a,MutationEvent:A.a,NotificationEvent:A.a,PageTransitionEvent:A.a,PaymentRequestEvent:A.a,PaymentRequestUpdateEvent:A.a,PopStateEvent:A.a,PresentationConnectionAvailableEvent:A.a,PresentationConnectionCloseEvent:A.a,ProgressEvent:A.a,PromiseRejectionEvent:A.a,PushEvent:A.a,RTCDataChannelEvent:A.a,RTCDTMFToneChangeEvent:A.a,RTCPeerConnectionIceEvent:A.a,RTCTrackEvent:A.a,SecurityPolicyViolationEvent:A.a,SensorErrorEvent:A.a,SpeechRecognitionError:A.a,SpeechRecognitionEvent:A.a,SpeechSynthesisEvent:A.a,StorageEvent:A.a,SyncEvent:A.a,TrackEvent:A.a,TransitionEvent:A.a,WebKitTransitionEvent:A.a,VRDeviceEvent:A.a,VRDisplayEvent:A.a,VRSessionEvent:A.a,MojoInterfaceRequestEvent:A.a,ResourceProgressEvent:A.a,USBConnectionEvent:A.a,IDBVersionChangeEvent:A.a,AudioProcessingEvent:A.a,OfflineAudioCompletionEvent:A.a,WebGLContextEvent:A.a,Event:A.a,InputEvent:A.a,SubmitEvent:A.a,EventTarget:A.r,HTMLFormElement:A.aV,MouseEvent:A.v,DragEvent:A.v,PointerEvent:A.v,WheelEvent:A.v,Document:A.f,DocumentFragment:A.f,HTMLDocument:A.f,ShadowRoot:A.f,XMLDocument:A.f,Attr:A.f,DocumentType:A.f,Node:A.f,HTMLSelectElement:A.b9,TouchEvent:A.K,CompositionEvent:A.H,FocusEvent:A.H,KeyboardEvent:A.H,TextEvent:A.H,UIEvent:A.H,NamedNodeMap:A.at,MozNamedAttrMap:A.at,SVGAElement:A.c,SVGAnimateElement:A.c,SVGAnimateMotionElement:A.c,SVGAnimateTransformElement:A.c,SVGAnimationElement:A.c,SVGCircleElement:A.c,SVGClipPathElement:A.c,SVGDefsElement:A.c,SVGDescElement:A.c,SVGDiscardElement:A.c,SVGEllipseElement:A.c,SVGFEBlendElement:A.c,SVGFEColorMatrixElement:A.c,SVGFEComponentTransferElement:A.c,SVGFECompositeElement:A.c,SVGFEConvolveMatrixElement:A.c,SVGFEDiffuseLightingElement:A.c,SVGFEDisplacementMapElement:A.c,SVGFEDistantLightElement:A.c,SVGFEFloodElement:A.c,SVGFEFuncAElement:A.c,SVGFEFuncBElement:A.c,SVGFEFuncGElement:A.c,SVGFEFuncRElement:A.c,SVGFEGaussianBlurElement:A.c,SVGFEImageElement:A.c,SVGFEMergeElement:A.c,SVGFEMergeNodeElement:A.c,SVGFEMorphologyElement:A.c,SVGFEOffsetElement:A.c,SVGFEPointLightElement:A.c,SVGFESpecularLightingElement:A.c,SVGFESpotLightElement:A.c,SVGFETileElement:A.c,SVGFETurbulenceElement:A.c,SVGFilterElement:A.c,SVGForeignObjectElement:A.c,SVGGElement:A.c,SVGGeometryElement:A.c,SVGGraphicsElement:A.c,SVGImageElement:A.c,SVGLineElement:A.c,SVGLinearGradientElement:A.c,SVGMarkerElement:A.c,SVGMaskElement:A.c,SVGMetadataElement:A.c,SVGPathElement:A.c,SVGPatternElement:A.c,SVGPolygonElement:A.c,SVGPolylineElement:A.c,SVGRadialGradientElement:A.c,SVGRectElement:A.c,SVGScriptElement:A.c,SVGSetElement:A.c,SVGStopElement:A.c,SVGStyleElement:A.c,SVGElement:A.c,SVGSVGElement:A.c,SVGSwitchElement:A.c,SVGSymbolElement:A.c,SVGTSpanElement:A.c,SVGTextContentElement:A.c,SVGTextElement:A.c,SVGTextPathElement:A.c,SVGTextPositioningElement:A.c,SVGTitleElement:A.c,SVGUseElement:A.c,SVGViewElement:A.c,SVGGradientElement:A.c,SVGComponentTransferFunctionElement:A.c,SVGFEDropShadowElement:A.c,SVGMPathElement:A.c})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,DOMException:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,EventTarget:false,HTMLFormElement:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,HTMLSelectElement:true,TouchEvent:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,TextEvent:true,UIEvent:false,NamedNodeMap:true,MozNamedAttrMap:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true})})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=A.fq
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=main.dart.js.map
