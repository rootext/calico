(function dartProgram(){function copyProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
b[r]=a[r]}}function mixinPropertiesHard(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
if(!b.hasOwnProperty(r))b[r]=a[r]}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var t=function(){}
t.prototype={p:{}}
var s=new t()
if(!(s.__proto__&&s.__proto__.p===t.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var r=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(r))return true}}catch(q){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var t=0;t<a.length;t++){var s=a[t]
var r=Object.keys(s)
for(var q=0;q<r.length;q++){var p=r[q]
var o=s[p]
if(typeof o=="function")o.name=p}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var t=Object.create(b.prototype)
copyProperties(a.prototype,t)
a.prototype=t}}function inheritMany(a,b){for(var t=0;t<b.length;t++)inherit(b[t],a)}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazyOld(a,b,c,d){var t=a
a[b]=t
a[c]=function(){a[c]=function(){A.dO(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t)a[b]=d()
a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t){var s=d()
if(a[b]!==t)A.dP(b)
a[b]=s}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t)convertToFastObject(a[t])}var y=0
function instanceTearOffGetter(a,b){var t=null
return a?function(c){if(t===null)t=A.bG(b)
return new t(c,this)}:function(){if(t===null)t=A.bG(b)
return new t(this,null)}}function staticTearOffGetter(a){var t=null
return function(){if(t===null)t=A.bG(a).prototype
return t}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number")h+=x
return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var t=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var s=staticTearOffGetter(t)
a[b]=s}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var t=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var s=instanceTearOffGetter(c,t)
a[b]=s}function setOrUpdateInterceptorsByTag(a){var t=v.interceptorsByTag
if(!t){v.interceptorsByTag=a
return}copyProperties(a,t)}function setOrUpdateLeafTags(a){var t=v.leafTags
if(!t){v.leafTags=a
return}copyProperties(a,t)}function updateTypes(a){var t=v.types
var s=t.length
t.push.apply(t,a)
return s}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var t=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},s=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:t(0,0,null,["$0"],0),_instance_1u:t(0,1,null,["$1"],0),_instance_2u:t(0,2,null,["$2"],0),_instance_0i:t(1,0,null,["$0"],0),_instance_1i:t(1,1,null,["$1"],0),_instance_2i:t(1,2,null,["$2"],0),_static_0:s(0,null,["$0"],0),_static_1:s(1,null,["$1"],0),_static_2:s(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,lazyOld:lazyOld,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var A={bt:function bt(){},
ck(a,b,c){return a},
c2(a,b,c,d){A.aw(b,"start")
A.aw(c,"end")
if(b>c)A.W(A.b4(b,0,c,"start",null))
return new A.L(a,b,c,d.i("L<0>"))},
as:function as(a){this.a=a},
Z:function Z(){},
w:function w(){},
L:function L(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
Q:function Q(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
a_:function a_(a,b,c){this.a=a
this.b=b
this.$ti=c},
cr(a){var t,s=v.mangledGlobalNames[a]
if(s!=null)return s
t="minified:"+a
return t},
ee(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return u.p.b(a)},
m(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.aK(a)
return t},
av(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
b3(a){return A.cL(a)},
cL(a){var t,s,r,q
if(a instanceof A.l)return A.u(A.ac(a),null)
if(J.V(a)===B.J||u.o.b(a)){t=B.d(a)
s=t!=="Object"&&t!==""
if(s)return t
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string")s=q!=="Object"&&q!==""
else s=!1
if(s)return q}}return A.u(A.ac(a),null)},
q(a,b){if(a==null)J.aJ(a)
throw A.c(A.aH(a,b))},
aH(a,b){var t,s="index",r=null
if(!A.ch(b))return new A.N(!0,b,s,r)
t=A.bE(J.aJ(a))
if(b<0||b>=t)return A.br(b,a,s,r,t)
return new A.a2(r,r,!0,b,s,"Value not in range")},
c(a){var t,s
if(a==null)a=new A.b1()
t=new Error()
t.dartException=a
s=A.dQ
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:s})
t.name=""}else t.toString=s
return t},
dQ(){return J.aK(this.dartException)},
W(a){throw A.c(a)},
cq(a){throw A.c(A.aP(a))},
dK(a){if(a==null||typeof a!="object")return J.bN(a)
else return A.av(a)},
cD(a1){var t,s,r,q,p,o,n,m,l,k,j=a1.co,i=a1.iS,h=a1.iI,g=a1.nDA,f=a1.aI,e=a1.fs,d=a1.cs,c=e[0],b=d[0],a=j[c],a0=a1.fT
a0.toString
t=i?Object.create(new A.b6().constructor.prototype):Object.create(new A.X(null,null).constructor.prototype)
t.$initialize=t.constructor
if(i)s=function static_tear_off(){this.$initialize()}
else s=function tear_off(a2,a3){this.$initialize(a2,a3)}
t.constructor=s
s.prototype=t
t.$_name=c
t.$_target=a
r=!i
if(r)q=A.bU(c,a,h,g)
else{t.$static_name=c
q=a}t.$S=A.cz(a0,i,h)
t[b]=q
for(p=q,o=1;o<e.length;++o){n=e[o]
if(typeof n=="string"){m=j[n]
l=n
n=m}else l=""
k=d[o]
if(k!=null){if(r)n=A.bU(l,n,h,g)
t[k]=n}if(o===f)p=n}t.$C=p
t.$R=a1.rC
t.$D=a1.dV
return s},
cz(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.c("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.cx)}throw A.c("Error in functionType of tearoff")},
cA(a,b,c,d){var t=A.bT
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
bU(a,b,c,d){var t,s
if(c)return A.cC(a,b,d)
t=b.length
s=A.cA(t,d,a,b)
return s},
cB(a,b,c,d){var t=A.bT,s=A.cy
switch(b?-1:a){case 0:throw A.c(new A.b5("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,t)
default:return function(e,f,g){return function(){var r=[g(this)]
Array.prototype.push.apply(r,arguments)
return e.apply(f(this),r)}}(d,s,t)}},
cC(a,b,c){var t,s,r,q=$.bR
q==null?$.bR=A.bQ("interceptor"):q
t=$.bS
t==null?$.bS=A.bQ("receiver"):t
s=b.length
r=A.cB(s,c,a,b)
return r},
bG(a){return A.cD(a)},
cx(a,b){return A.bf(v.typeUniverse,A.ac(a.a),b)},
bT(a){return a.a},
cy(a){return a.b},
bQ(a){var t,s,r,q=new A.X("receiver","interceptor"),p=J.cG(Object.getOwnPropertyNames(q),u.O)
for(t=p.length,s=0;s<t;++s){r=p[s]
if(q[r]===a)return r}throw A.c(A.bP("Field name "+a+" not found."))},
dO(a){throw A.c(new A.aT(a))},
dB(a){return v.getIsolateTag(a)},
ec(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
dH(a){var t,s,r,q,p,o=A.aF($.cm.$1(a)),n=$.bi[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.bo[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=A.d9($.cj.$2(a,o))
if(r!=null){n=$.bi[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.bo[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=A.bp(t)
$.bi[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.bo[o]=t
return t}if(q==="-"){p=A.bp(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return A.co(a,t)
if(q==="*")throw A.c(A.c3(o))
if(v.leafTags[o]===true){p=A.bp(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return A.co(a,t)},
co(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.bK(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
bp(a){return J.bK(a,!1,null,!!a.$ibu)},
dJ(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return A.bp(t)
else return J.bK(t,c,null,null)},
dE(){if(!0===$.bJ)return
$.bJ=!0
A.dF()},
dF(){var t,s,r,q,p,o,n,m
$.bi=Object.create(null)
$.bo=Object.create(null)
A.dD()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.cp.$1(p)
if(o!=null){n=A.dJ(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
dD(){var t,s,r,q,p,o,n=B.i()
n=A.U(B.j,A.U(B.k,A.U(B.e,A.U(B.e,A.U(B.l,A.U(B.m,A.U(B.n(B.d),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.cm=new A.bk(q)
$.cj=new A.bl(p)
$.cp=new A.bm(o)},
U(a,b){return a(b)||b},
cJ(a,b,c,d,e,f){var t=b?"m":"",s=c?"":"i",r=d?"u":"",q=e?"s":"",p=f?"g":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,t+s+r+q+p)
if(o instanceof RegExp)return o
throw A.c(new A.aY("Illegal RegExp pattern ("+String(o)+")",a))},
dy(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
dL(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
bq(a,b,c){var t=A.dN(a,b,c)
return t},
dN(a,b,c){var t,s,r,q
if(b===""){if(a==="")return c
t=a.length
s=""+c
for(r=0;r<t;++r)s=s+a[r]+c
return s.charCodeAt(0)==0?s:s}q=a.indexOf(b,0)
if(q<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.dL(b),"g"),A.dy(c))},
O:function O(){},
aN:function aN(){},
b8:function b8(){},
b6:function b6(){},
X:function X(a,b){this.a=a
this.b=b},
b5:function b5(a){this.a=a},
bk:function bk(a){this.a=a},
bl:function bl(a){this.a=a},
bm:function bm(a){this.a=a},
ar:function ar(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
c_(a,b){var t=b.c
return t==null?b.c=A.bC(a,b.z,!0):t},
bZ(a,b){var t=b.c
return t==null?b.c=A.a8(a,"bV",[b.z]):t},
c0(a){var t=a.y
if(t===6||t===7||t===8)return A.c0(a.z)
return t===11||t===12},
cP(a){return a.cy},
bH(a){return A.bD(v.typeUniverse,a,!1)},
I(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.y
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.z
s=A.I(a,t,c,a0)
if(s===t)return b
return A.ca(a,s,!0)
case 7:t=b.z
s=A.I(a,t,c,a0)
if(s===t)return b
return A.bC(a,s,!0)
case 8:t=b.z
s=A.I(a,t,c,a0)
if(s===t)return b
return A.c9(a,s,!0)
case 9:r=b.Q
q=A.ab(a,r,c,a0)
if(q===r)return b
return A.a8(a,b.z,q)
case 10:p=b.z
o=A.I(a,p,c,a0)
n=b.Q
m=A.ab(a,n,c,a0)
if(o===p&&m===n)return b
return A.bA(a,o,m)
case 11:l=b.z
k=A.I(a,l,c,a0)
j=b.Q
i=A.dt(a,j,c,a0)
if(k===l&&i===j)return b
return A.c8(a,k,i)
case 12:h=b.Q
a0+=h.length
g=A.ab(a,h,c,a0)
p=b.z
o=A.I(a,p,c,a0)
if(g===h&&o===p)return b
return A.bB(a,o,g,!0)
case 13:f=b.z
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw A.c(A.aM("Attempted to substitute unexpected RTI kind "+d))}},
ab(a,b,c,d){var t,s,r,q,p=b.length,o=A.bg(p)
for(t=!1,s=0;s<p;++s){r=b[s]
q=A.I(a,r,c,d)
if(q!==r)t=!0
o[s]=q}return t?o:b},
du(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=A.bg(n)
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=A.I(a,p,c,d)
if(o!==p)t=!0
m.splice(s,3,r,q,o)}return t?m:b},
dt(a,b,c,d){var t,s=b.a,r=A.ab(a,s,c,d),q=b.b,p=A.ab(a,q,c,d),o=b.c,n=A.du(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new A.az()
t.a=r
t.b=p
t.c=n
return t},
i(a,b){a[v.arrayRti]=b
return a},
dw(a){var t=a.$S
if(t!=null){if(typeof t=="number")return A.dC(t)
return a.$S()}return null},
cn(a,b){var t
if(A.c0(b))if(a instanceof A.O){t=A.dw(a)
if(t!=null)return t}return A.ac(a)},
ac(a){var t
if(a instanceof A.l){t=a.$ti
return t!=null?t:A.bF(a)}if(Array.isArray(a))return A.H(a)
return A.bF(J.V(a))},
H(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
M(a){var t=a.$ti
return t!=null?t:A.bF(a)},
bF(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return A.dh(a,t)},
dh(a,b){var t=a instanceof A.O?a.__proto__.__proto__.constructor:b,s=A.d5(v.typeUniverse,t.name)
b.$ccache=s
return s},
dC(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=A.bD(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
dg(a){var t,s,r,q,p=this
if(p===u.K)return A.T(p,a,A.dl)
if(!A.D(p))if(!(p===u._))t=!1
else t=!0
else t=!0
if(t)return A.T(p,a,A.dp)
t=p.y
s=t===6?p.z:p
if(s===u.S)r=A.ch
else if(s===u.i||s===u.H)r=A.dk
else if(s===u.N)r=A.dm
else r=s===u.y?A.cf:null
if(r!=null)return A.T(p,a,r)
if(s.y===9){q=s.z
if(s.Q.every(A.dG)){p.r="$i"+q
if(q==="B")return A.T(p,a,A.dj)
return A.T(p,a,A.dn)}}else if(t===7)return A.T(p,a,A.de)
return A.T(p,a,A.dc)},
T(a,b,c){a.b=c
return a.b(b)},
df(a){var t,s=this,r=A.db
if(!A.D(s))if(!(s===u._))t=!1
else t=!0
else t=!0
if(t)r=A.da
else if(s===u.K)r=A.d8
else{t=A.ad(s)
if(t)r=A.dd}s.a=r
return s.a(a)},
bh(a){var t,s=a.y
if(!A.D(a))if(!(a===u._))if(!(a===u.A))if(s!==7)t=s===8&&A.bh(a.z)||a===u.P||a===u.T
else t=!0
else t=!0
else t=!0
else t=!0
return t},
dc(a){var t=this
if(a==null)return A.bh(t)
return A.h(v.typeUniverse,A.cn(a,t),null,t,null)},
de(a){if(a==null)return!0
return this.z.b(a)},
dn(a){var t,s=this
if(a==null)return A.bh(s)
t=s.r
if(a instanceof A.l)return!!a[t]
return!!J.V(a)[t]},
dj(a){var t,s=this
if(a==null)return A.bh(s)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
t=s.r
if(a instanceof A.l)return!!a[t]
return!!J.V(a)[t]},
db(a){var t,s=this
if(a==null){t=A.ad(s)
if(t)return a}else if(s.b(a))return a
A.cd(a,s)},
dd(a){var t=this
if(a==null)return a
else if(t.b(a))return a
A.cd(a,t)},
cd(a,b){throw A.c(A.cW(A.c4(a,A.cn(a,b),A.u(b,null))))},
c4(a,b,c){var t=A.aX(a),s=A.u(b==null?A.ac(a):b,null)
return t+": type '"+s+"' is not a subtype of type '"+c+"'"},
cW(a){return new A.aB("TypeError: "+a)},
o(a,b){return new A.aB("TypeError: "+A.c4(a,null,b))},
dl(a){return a!=null},
d8(a){if(a!=null)return a
throw A.c(A.o(a,"Object"))},
dp(a){return!0},
da(a){return a},
cf(a){return!0===a||!1===a},
d7(a){if(!0===a)return!0
if(!1===a)return!1
throw A.c(A.o(a,"bool"))},
e2(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.c(A.o(a,"bool"))},
e1(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.c(A.o(a,"bool?"))},
e3(a){if(typeof a=="number")return a
throw A.c(A.o(a,"double"))},
e5(a){if(typeof a=="number")return a
if(a==null)return a
throw A.c(A.o(a,"double"))},
e4(a){if(typeof a=="number")return a
if(a==null)return a
throw A.c(A.o(a,"double?"))},
ch(a){return typeof a=="number"&&Math.floor(a)===a},
bE(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.c(A.o(a,"int"))},
e7(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.c(A.o(a,"int"))},
e6(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.c(A.o(a,"int?"))},
dk(a){return typeof a=="number"},
e8(a){if(typeof a=="number")return a
throw A.c(A.o(a,"num"))},
ea(a){if(typeof a=="number")return a
if(a==null)return a
throw A.c(A.o(a,"num"))},
e9(a){if(typeof a=="number")return a
if(a==null)return a
throw A.c(A.o(a,"num?"))},
dm(a){return typeof a=="string"},
aF(a){if(typeof a=="string")return a
throw A.c(A.o(a,"String"))},
eb(a){if(typeof a=="string")return a
if(a==null)return a
throw A.c(A.o(a,"String"))},
d9(a){if(typeof a=="string")return a
if(a==null)return a
throw A.c(A.o(a,"String?"))},
ds(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=s+A.u(a[r],b)
return t},
ce(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=", "
if(a5!=null){t=a5.length
if(a4==null){a4=A.i([],u.s)
s=null}else s=a4.length
r=a4.length
for(q=t;q>0;--q)B.a.k(a4,"T"+(r+q))
for(p=u.O,o=u._,n="<",m="",q=0;q<t;++q,m=a2){n+=m
l=a4.length
k=l-1-q
if(!(k>=0))return A.q(a4,k)
n=B.b.T(n,a4[k])
j=a5[q]
i=j.y
if(!(i===2||i===3||i===4||i===5||j===p))if(!(j===o))l=!1
else l=!0
else l=!0
if(!l)n+=" extends "+A.u(j,a4)}n+=">"}else{n=""
s=null}p=a3.z
h=a3.Q
g=h.a
f=g.length
e=h.b
d=e.length
c=h.c
b=c.length
a=A.u(p,a4)
for(a0="",a1="",q=0;q<f;++q,a1=a2)a0+=a1+A.u(g[q],a4)
if(d>0){a0+=a1+"["
for(a1="",q=0;q<d;++q,a1=a2)a0+=a1+A.u(e[q],a4)
a0+="]"}if(b>0){a0+=a1+"{"
for(a1="",q=0;q<b;q+=3,a1=a2){a0+=a1
if(c[q+1])a0+="required "
a0+=A.u(c[q+2],a4)+" "+c[q]}a0+="}"}if(s!=null){a4.toString
a4.length=s}return n+"("+a0+") => "+a},
u(a,b){var t,s,r,q,p,o,n,m=a.y
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){t=A.u(a.z,b)
return t}if(m===7){s=a.z
t=A.u(s,b)
r=s.y
return(r===11||r===12?"("+t+")":t)+"?"}if(m===8)return"FutureOr<"+A.u(a.z,b)+">"
if(m===9){q=A.dv(a.z)
p=a.Q
return p.length>0?q+("<"+A.ds(p,b)+">"):q}if(m===11)return A.ce(a,b,null)
if(m===12)return A.ce(a.z,b,a.Q)
if(m===13){o=a.z
n=b.length
o=n-1-o
if(!(o>=0&&o<n))return A.q(b,o)
return b[o]}return"?"},
dv(a){var t,s=v.mangledGlobalNames[a]
if(s!=null)return s
t="minified:"+a
return t},
d6(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
d5(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return A.bD(a,b,!1)
else if(typeof n=="number"){t=n
s=A.a9(a,5,"#")
r=A.bg(t)
for(q=0;q<t;++q)r[q]=s
p=A.a8(a,b,r)
o[b]=p
return p}else return n},
d3(a,b){return A.cb(a.tR,b)},
d2(a,b){return A.cb(a.eT,b)},
bD(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=A.c7(A.c5(a,null,b,c))
s.set(b,t)
return t},
bf(a,b,c){var t,s,r=b.ch
if(r==null)r=b.ch=new Map()
t=r.get(c)
if(t!=null)return t
s=A.c7(A.c5(a,b,c,!0))
r.set(c,s)
return s},
d4(a,b,c){var t,s,r,q=b.cx
if(q==null)q=b.cx=new Map()
t=c.cy
s=q.get(t)
if(s!=null)return s
r=A.bA(a,b,c.y===10?c.Q:[c])
q.set(t,r)
return r},
G(a,b){b.a=A.df
b.b=A.dg
return b},
a9(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new A.y(null,null)
t.y=b
t.cy=c
s=A.G(a,t)
a.eC.set(c,s)
return s},
ca(a,b,c){var t,s=b.cy+"*",r=a.eC.get(s)
if(r!=null)return r
t=A.d0(a,b,s,c)
a.eC.set(s,t)
return t},
d0(a,b,c,d){var t,s,r
if(d){t=b.y
if(!A.D(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new A.y(null,null)
r.y=6
r.z=b
r.cy=c
return A.G(a,r)},
bC(a,b,c){var t,s=b.cy+"?",r=a.eC.get(s)
if(r!=null)return r
t=A.d_(a,b,s,c)
a.eC.set(s,t)
return t},
d_(a,b,c,d){var t,s,r,q
if(d){t=b.y
if(!A.D(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&A.ad(b.z)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1||b===u.A)return u.P
else if(t===6){r=b.z
if(r.y===8&&A.ad(r.z))return r
else return A.c_(a,b)}}q=new A.y(null,null)
q.y=7
q.z=b
q.cy=c
return A.G(a,q)},
c9(a,b,c){var t,s=b.cy+"/",r=a.eC.get(s)
if(r!=null)return r
t=A.cY(a,b,s,c)
a.eC.set(s,t)
return t},
cY(a,b,c,d){var t,s,r
if(d){t=b.y
if(!A.D(b))if(!(b===u._))s=!1
else s=!0
else s=!0
if(s||b===u.K)return b
else if(t===1)return A.a8(a,"bV",[b])
else if(b===u.P||b===u.T)return u.V}r=new A.y(null,null)
r.y=8
r.z=b
r.cy=c
return A.G(a,r)},
d1(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new A.y(null,null)
t.y=13
t.z=b
t.cy=r
s=A.G(a,t)
a.eC.set(r,s)
return s},
aC(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].cy
return t},
cX(a){var t,s,r,q,p,o,n=a.length
for(t="",s="",r=0;r<n;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
o=a[r+2].cy
t+=s+q+p+o}return t},
a8(a,b,c){var t,s,r,q=b
if(c.length>0)q+="<"+A.aC(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new A.y(null,null)
s.y=9
s.z=b
s.Q=c
if(c.length>0)s.c=c[0]
s.cy=q
r=A.G(a,s)
a.eC.set(q,r)
return r},
bA(a,b,c){var t,s,r,q,p,o
if(b.y===10){t=b.z
s=b.Q.concat(c)}else{s=c
t=b}r=t.cy+(";<"+A.aC(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new A.y(null,null)
p.y=10
p.z=t
p.Q=s
p.cy=r
o=A.G(a,p)
a.eC.set(r,o)
return o},
c8(a,b,c){var t,s,r,q,p,o=b.cy,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+A.aC(n)
if(k>0){t=m>0?",":""
s=A.aC(l)
h+=t+"["+s+"]"}if(i>0){t=m>0?",":""
s=A.cX(j)
h+=t+"{"+s+"}"}r=o+(h+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.y(null,null)
p.y=11
p.z=b
p.Q=c
p.cy=r
s=A.G(a,p)
a.eC.set(r,s)
return s},
bB(a,b,c,d){var t,s=b.cy+("<"+A.aC(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=A.cZ(a,b,c,s,d)
a.eC.set(s,t)
return t},
cZ(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=A.bg(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.y===1){s[q]=p;++r}}if(r>0){o=A.I(a,b,s,0)
n=A.ab(a,c,s,0)
return A.bB(a,o,n,c!==n)}}m=new A.y(null,null)
m.y=12
m.z=b
m.Q=c
m.cy=d
return A.G(a,m)},
c5(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
c7(a){var t,s,r,q,p,o,n,m,l,k,j,i=a.r,h=a.s
for(t=i.length,s=0;s<t;){r=i.charCodeAt(s)
if(r>=48&&r<=57)s=A.cS(s+1,r,i,h)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36)s=A.c6(a,s,i,h,!1)
else if(r===46)s=A.c6(a,s,i,h,!0)
else{++s
switch(r){case 44:break
case 58:h.push(!1)
break
case 33:h.push(!0)
break
case 59:h.push(A.F(a.u,a.e,h.pop()))
break
case 94:h.push(A.d1(a.u,h.pop()))
break
case 35:h.push(A.a9(a.u,5,"#"))
break
case 64:h.push(A.a9(a.u,2,"@"))
break
case 126:h.push(A.a9(a.u,3,"~"))
break
case 60:h.push(a.p)
a.p=h.length
break
case 62:q=a.u
p=h.splice(a.p)
A.bz(a.u,a.e,p)
a.p=h.pop()
o=h.pop()
if(typeof o=="string")h.push(A.a8(q,o,p))
else{n=A.F(q,a.e,o)
switch(n.y){case 11:h.push(A.bB(q,n,p,a.n))
break
default:h.push(A.bA(q,n,p))
break}}break
case 38:A.cT(a,h)
break
case 42:q=a.u
h.push(A.ca(q,A.F(q,a.e,h.pop()),a.n))
break
case 63:q=a.u
h.push(A.bC(q,A.F(q,a.e,h.pop()),a.n))
break
case 47:q=a.u
h.push(A.c9(q,A.F(q,a.e,h.pop()),a.n))
break
case 40:h.push(a.p)
a.p=h.length
break
case 41:q=a.u
m=new A.az()
l=q.sEA
k=q.sEA
o=h.pop()
if(typeof o=="number")switch(o){case-1:l=h.pop()
break
case-2:k=h.pop()
break
default:h.push(o)
break}else h.push(o)
p=h.splice(a.p)
A.bz(a.u,a.e,p)
a.p=h.pop()
m.a=p
m.b=l
m.c=k
h.push(A.c8(q,A.F(q,a.e,h.pop()),m))
break
case 91:h.push(a.p)
a.p=h.length
break
case 93:p=h.splice(a.p)
A.bz(a.u,a.e,p)
a.p=h.pop()
h.push(p)
h.push(-1)
break
case 123:h.push(a.p)
a.p=h.length
break
case 125:p=h.splice(a.p)
A.cV(a.u,a.e,p)
a.p=h.pop()
h.push(p)
h.push(-2)
break
default:throw"Bad character "+r}}}j=h.pop()
return A.F(a.u,a.e,j)},
cS(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
c6(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.y===10)p=p.z
o=A.d6(t,p.z)[q]
if(o==null)A.W('No "'+q+'" in "'+A.cP(p)+'"')
d.push(A.bf(t,p,o))}else d.push(q)
return n},
cT(a,b){var t=b.pop()
if(0===t){b.push(A.a9(a.u,1,"0&"))
return}if(1===t){b.push(A.a9(a.u,4,"1&"))
return}throw A.c(A.aM("Unexpected extended operation "+A.m(t)))},
F(a,b,c){if(typeof c=="string")return A.a8(a,c,a.sEA)
else if(typeof c=="number")return A.cU(a,b,c)
else return c},
bz(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=A.F(a,b,c[t])},
cV(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=A.F(a,b,c[t])},
cU(a,b,c){var t,s,r=b.y
if(r===10){if(c===0)return b.z
t=b.Q
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.z
r=b.y}else if(c===0)return b
if(r!==9)throw A.c(A.aM("Indexed base must be an interface type"))
t=b.Q
if(c<=t.length)return t[c-1]
throw A.c(A.aM("Bad index "+c+" for "+b.h(0)))},
h(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
if(b===d)return!0
if(!A.D(d))if(!(d===u._))t=!1
else t=!0
else t=!0
if(t)return!0
s=b.y
if(s===4)return!0
if(A.D(b))return!1
if(b.y!==1)t=!1
else t=!0
if(t)return!0
r=s===13
if(r)if(A.h(a,c[b.z],c,d,e))return!0
q=d.y
t=b===u.P||b===u.T
if(t){if(q===8)return A.h(a,b,c,d.z,e)
return d===u.P||d===u.T||q===7||q===6}if(d===u.K){if(s===8)return A.h(a,b.z,c,d,e)
if(s===6)return A.h(a,b.z,c,d,e)
return s!==7}if(s===6)return A.h(a,b.z,c,d,e)
if(q===6){t=A.c_(a,d)
return A.h(a,b,c,t,e)}if(s===8){if(!A.h(a,b.z,c,d,e))return!1
return A.h(a,A.bZ(a,b),c,d,e)}if(s===7){t=A.h(a,u.P,c,d,e)
return t&&A.h(a,b.z,c,d,e)}if(q===8){if(A.h(a,b,c,d.z,e))return!0
return A.h(a,b,c,A.bZ(a,d),e)}if(q===7){t=A.h(a,b,c,u.P,e)
return t||A.h(a,b,c,d.z,e)}if(r)return!1
t=s!==11
if((!t||s===12)&&d===u.Z)return!0
if(q===12){if(b===u.g)return!0
if(s!==12)return!1
p=b.Q
o=d.Q
n=p.length
if(n!==o.length)return!1
c=c==null?p:p.concat(c)
e=e==null?o:o.concat(e)
for(m=0;m<n;++m){l=p[m]
k=o[m]
if(!A.h(a,l,c,k,e)||!A.h(a,k,e,l,c))return!1}return A.cg(a,b.z,c,d.z,e)}if(q===11){if(b===u.g)return!0
if(t)return!1
return A.cg(a,b,c,d,e)}if(s===9){if(q!==9)return!1
return A.di(a,b,c,d,e)}return!1},
cg(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(!A.h(a2,a3.z,a4,a5.z,a6))return!1
t=a3.Q
s=a5.Q
r=t.a
q=s.a
p=r.length
o=q.length
if(p>o)return!1
n=o-p
m=t.b
l=s.b
k=m.length
j=l.length
if(p+k<o+j)return!1
for(i=0;i<p;++i){h=r[i]
if(!A.h(a2,q[i],a6,h,a4))return!1}for(i=0;i<n;++i){h=m[i]
if(!A.h(a2,q[p+i],a6,h,a4))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!A.h(a2,l[i],a6,h,a4))return!1}g=t.c
f=s.c
e=g.length
d=f.length
for(c=0,b=0;b<d;b+=3){a=f[b]
for(;!0;){if(c>=e)return!1
a0=g[c]
c+=3
if(a<a0)return!1
a1=g[c-2]
if(a0<a){if(a1)return!1
continue}h=f[b+1]
if(a1&&!h)return!1
h=g[c-1]
if(!A.h(a2,f[b+2],a6,h,a4))return!1
break}}for(;c<e;){if(g[c+1])return!1
c+=3}return!0},
di(a,b,c,d,e){var t,s,r,q,p,o,n,m=b.z,l=d.z
for(;m!==l;){t=a.tR[m]
if(t==null)return!1
if(typeof t=="string"){m=t
continue}s=t[l]
if(s==null)return!1
r=s.length
q=r>0?new Array(r):v.typeUniverse.sEA
for(p=0;p<r;++p)q[p]=A.bf(a,b,s[p])
return A.cc(a,q,null,c,d.Q,e)}o=b.Q
n=d.Q
return A.cc(a,o,null,c,n,e)},
cc(a,b,c,d,e,f){var t,s,r,q=b.length
for(t=0;t<q;++t){s=b[t]
r=e[t]
if(!A.h(a,s,d,r,f))return!1}return!0},
ad(a){var t,s=a.y
if(!(a===u.P||a===u.T))if(!A.D(a))if(s!==7)if(!(s===6&&A.ad(a.z)))t=s===8&&A.ad(a.z)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
dG(a){var t
if(!A.D(a))if(!(a===u._))t=!1
else t=!0
else t=!0
return t},
D(a){var t=a.y
return t===2||t===3||t===4||t===5||a===u.O},
cb(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
bg(a){return a>0?new Array(a):v.typeUniverse.sEA},
y:function y(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
az:function az(){this.c=this.b=this.a=null},
bc:function bc(){},
aB:function aB(a){this.a=a},
bY(a){return new A.a4(a.i("a4<0>"))},
by(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
cR(a,b,c){var t=new A.S(a,b,c.i("S<0>"))
t.c=a.e
return t},
cF(a,b,c){var t,s
if(A.ci(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=A.i([],u.s)
B.a.k($.C,a)
try{A.dq(a,t)}finally{if(0>=$.C.length)return A.q($.C,-1)
$.C.pop()}s=A.c1(b,u.U.a(t),", ")+c
return s.charCodeAt(0)==0?s:s},
bs(a,b,c){var t,s
if(A.ci(a))return b+"..."+c
t=new A.b7(b)
B.a.k($.C,a)
try{s=t
s.a=A.c1(s.a,a,", ")}finally{if(0>=$.C.length)return A.q($.C,-1)
$.C.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
ci(a){var t,s
for(t=$.C.length,s=0;s<t;++s)if(a===$.C[s])return!0
return!1},
dq(a,b){var t,s,r,q,p,o,n,m=a.gp(a),l=0,k=0
while(!0){if(!(l<80||k<3))break
if(!m.l())return
t=A.m(m.gm())
B.a.k(b,t)
l+=t.length+2;++k}if(!m.l()){if(k<=5)return
if(0>=b.length)return A.q(b,-1)
s=b.pop()
if(0>=b.length)return A.q(b,-1)
r=b.pop()}else{q=m.gm();++k
if(!m.l()){if(k<=4){B.a.k(b,A.m(q))
return}s=A.m(q)
if(0>=b.length)return A.q(b,-1)
r=b.pop()
l+=s.length+2}else{p=m.gm();++k
for(;m.l();q=p,p=o){o=m.gm();++k
if(k>100){while(!0){if(!(l>75&&k>3))break
if(0>=b.length)return A.q(b,-1)
l-=b.pop().length+2;--k}B.a.k(b,"...")
return}}r=A.m(q)
s=A.m(p)
l+=s.length+r.length+4}}if(k>b.length+2){l+=5
n="..."}else n=null
while(!0){if(!(l>80&&b.length>3))break
if(0>=b.length)return A.q(b,-1)
l-=b.pop().length+2
if(n==null){l+=5
n="..."}}if(n!=null)B.a.k(b,n)
B.a.k(b,r)
B.a.k(b,s)},
a4:function a4(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
aA:function aA(a){this.a=a
this.c=this.b=null},
S:function S(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
at:function at(){},
p:function p(){},
a3:function a3(){},
a6:function a6(){},
a7:function a7(){},
aa:function aa(){},
cE(a){if(a instanceof A.O)return a.h(0)
return"Instance of '"+A.b3(a)+"'"},
cK(a,b,c,d){var t,s=J.bW(a,d)
if(a!==0&&b!=null)for(t=0;t<s.length;++t)s[t]=b
return s},
cO(a){return new A.ar(a,A.cJ(a,!1,!0,!1,!1,!1))},
c1(a,b,c){var t=J.cv(b)
if(!t.l())return a
if(c.length===0){do a+=A.m(t.gm())
while(t.l())}else{a+=A.m(t.gm())
for(;t.l();)a=a+c+A.m(t.gm())}return a},
aX(a){if(typeof a=="number"||A.cf(a)||a==null)return J.aK(a)
if(typeof a=="string")return JSON.stringify(a)
return A.cE(a)},
aM(a){return new A.aL(a)},
bP(a){return new A.N(!1,null,null,a)},
cw(a,b,c){return new A.N(!0,a,b,c)},
cM(a){var t=null
return new A.a2(t,t,!1,t,t,a)},
b4(a,b,c,d,e){return new A.a2(b,c,!0,a,d,"Invalid value")},
cN(a,b,c){if(0>a||a>c)throw A.c(A.b4(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.c(A.b4(b,a,c,"end",null))
return b}return c},
aw(a,b){return a},
br(a,b,c,d,e){var t=A.bE(e==null?J.aJ(b):e)
return new A.b_(t,!0,a,c,"Index out of range")},
bx(a){return new A.ba(a)},
c3(a){return new A.b9(a)},
aP(a){return new A.aO(a)},
bb:function bb(){},
aW:function aW(){},
aL:function aL(a){this.a=a},
b1:function b1(){},
N:function N(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a2:function a2(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
b_:function b_(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
ba:function ba(a){this.a=a},
b9:function b9(a){this.a=a},
aO:function aO(a){this.a=a},
aT:function aT(a){this.a=a},
aY:function aY(a,b){this.a=a
this.b=b},
f:function f(){},
a0:function a0(){},
l:function l(){},
b7:function b7(a){this.a=a},
cQ(a,b){var t,s,r=a.classList
r.toString
for(t=b.length,s=0;s<b.length;b.length===t||(0,A.cq)(b),++s)r.add(b[s])},
a:function a(){},
af:function af(){},
ag:function ag(){},
z:function z(){},
aU:function aU(){},
aV:function aV(){},
t:function t(){},
aj:function aj(){},
al:function al(){},
e:function e(){},
ax:function ax(){},
a5:function a5(){},
ay:function ay(a){this.a=a},
P:function P(){},
ak:function ak(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
aD:function aD(){},
aE:function aE(){},
Y:function Y(){},
aR:function aR(a){this.a=a},
aQ:function aQ(a,b){this.a=a
this.b=b},
aS:function aS(){},
bd:function bd(){},
ai:function ai(a){this.a=a},
b:function b(){},
dI(){A.dM($.cu())},
dM(a){var t,s,r,q,p,o,n,m,l,k,j,i,h
for(t=u.s,s=u.X,r=0;q=a.a,r<q.length;++r){p=q[r]
o="#cat"+r
q=document.querySelector(o)
q.toString
n="Cats."+p.b
n=s.a(A.i(["cat",A.bq(n,"Cats.","")],t))
m=J.aI(q)
m.u(0)
m.t(0,n)}for(r=0;q=a.b,r<q.length;++r){l=q[r]
o="#patt"+r
q=document.querySelector(o)
q.toString
n="Patterns."+l.b
n=s.a(A.i(["tile","patt",A.bq(n,"Patterns.","")],t))
m=J.aI(q)
m.u(0)
m.t(0,n)}for(r=0;q=a.c,r<q.length;++r){k=q[r]
o="#player"+r
q=o+"color"
n=document
q=n.querySelector(q)
q.toString
j="Colors."+A.dr(k.a,"color").b
j=s.a(A.i(["tile","color",A.bq(j,"Colors.","")],t))
m=J.aI(q)
m.u(0)
m.t(0,j)
for(i=0;q=k.b,i<q.length;++i){h=q[i]
q=n.querySelector(o+"goal"+i)
q.toString
j="Goals."+h.b
j=s.a(A.i(["tile","goal",A.bq(j,"Goals.","")],t))
m=J.aI(q)
m.u(0)
m.t(0,j)}}},
bw(a,b){var t=B.f.R(a.length)
if(!(t>=0&&t<a.length))return A.q(a,t)
return a[t]},
bv(a,b){var t,s,r,q,p=A.i(a.slice(0),A.H(a)),o=A.i([],b.i("j<0>"))
for(t=a.length,s=0;s<t;++s){r=B.f.R(p.length)
if(!(r>=0&&r<p.length))return A.q(p,r)
q=p[r]
B.a.a9(p,q)
B.a.k(o,q)}return o},
n:function n(a){this.b=a},
x:function x(a){this.b=a},
E:function E(a){this.b=a},
v:function v(a){this.b=a},
a1:function a1(a,b){this.a=a
this.b=b},
aZ:function aZ(a,b,c){this.a=a
this.b=b
this.c=c},
dP(a){return A.W(new A.as("Field '"+a+"' has been assigned during initialization."))},
dr(a,b){if(a===$)throw A.c(new A.as("Field '"+b+"' has not been initialized."))
return a}},J={
bK(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bj(a){var t,s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.bJ==null){A.dE()
o=a[v.dispatchPropertyName]}if(o!=null){t=o.p
if(!1===t)return o.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return o.i
if(o.e===s)throw A.c(A.c3("Return interceptor for "+A.m(t(a,o))))}r=a.constructor
if(r==null)q=null
else{p=$.be
if(p==null)p=$.be=v.getIsolateTag("_$dart_js")
q=r[p]}if(q!=null)return q
q=A.dH(a)
if(q!=null)return q
if(typeof a=="function")return B.K
t=Object.getPrototypeOf(a)
if(t==null)return B.h
if(t===Object.prototype)return B.h
if(typeof r=="function"){p=$.be
if(p==null)p=$.be=v.getIsolateTag("_$dart_js")
Object.defineProperty(r,p,{value:B.c,enumerable:false,writable:true,configurable:true})
return B.c}return B.c},
bW(a,b){if(a<0)throw A.c(A.bP("Length must be a non-negative integer: "+a))
return A.i(new Array(a),b.i("j<0>"))},
cG(a,b){a.fixed$length=Array
return a},
bX(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
cH(a,b){var t,s
for(t=a.length;b<t;){s=B.b.I(a,b)
if(s!==32&&s!==13&&!J.bX(s))break;++b}return b},
cI(a,b){var t,s
for(;b>0;b=t){t=b-1
s=B.b.P(a,t)
if(s!==32&&s!==13&&!J.bX(s))break}return b},
V(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.an.prototype
return J.ap.prototype}if(typeof a=="string")return J.J.prototype
if(a==null)return J.ao.prototype
if(typeof a=="boolean")return J.am.prototype
if(a.constructor==Array)return J.j.prototype
if(typeof a!="object"){if(typeof a=="function")return J.A.prototype
return a}if(a instanceof A.l)return a
return J.bj(a)},
cl(a){if(typeof a=="string")return J.J.prototype
if(a==null)return a
if(a.constructor==Array)return J.j.prototype
if(typeof a!="object"){if(typeof a=="function")return J.A.prototype
return a}if(a instanceof A.l)return a
return J.bj(a)},
bI(a){if(a==null)return a
if(a.constructor==Array)return J.j.prototype
if(typeof a!="object"){if(typeof a=="function")return J.A.prototype
return a}if(a instanceof A.l)return a
return J.bj(a)},
dz(a){if(typeof a=="string")return J.J.prototype
if(a==null)return a
if(!(a instanceof A.l))return J.R.prototype
return a},
dA(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.A.prototype
return a}if(a instanceof A.l)return a
return J.bj(a)},
bL(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.V(a).w(a,b)},
bM(a,b){return J.bI(a).q(a,b)},
aI(a){return J.dA(a).gO(a)},
bN(a){return J.V(a).gn(a)},
cv(a){return J.bI(a).gp(a)},
aJ(a){return J.cl(a).gj(a)},
aK(a){return J.V(a).h(a)},
bO(a){return J.dz(a).aa(a)},
k:function k(){},
am:function am(){},
ao:function ao(){},
K:function K(){},
au:function au(){},
R:function R(){},
A:function A(){},
j:function j(a){this.$ti=a},
b0:function b0(a){this.$ti=a},
ah:function ah(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aq:function aq(){},
an:function an(){},
ap:function ap(){},
J:function J(){}},B={}
var w=[A,J,B]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
A.bt.prototype={}
J.k.prototype={
w(a,b){return a===b},
gn(a){return A.av(a)},
h(a){return"Instance of '"+A.b3(a)+"'"}}
J.am.prototype={
h(a){return String(a)},
gn(a){return a?519018:218159},
$iaG:1}
J.ao.prototype={
w(a,b){return null==b},
h(a){return"null"},
gn(a){return 0}}
J.K.prototype={
gn(a){return 0},
h(a){return String(a)}}
J.au.prototype={}
J.R.prototype={}
J.A.prototype={
h(a){var t=a[$.ct()]
if(t==null)return this.Y(a)
return"JavaScript function for "+J.aK(t)}}
J.j.prototype={
k(a,b){A.H(a).c.a(b)
if(!!a.fixed$length)A.W(A.bx("add"))
a.push(b)},
a9(a,b){var t
if(!!a.fixed$length)A.W(A.bx("remove"))
for(t=0;t<a.length;++t)if(J.bL(a[t],b)){a.splice(t,1)
return!0}return!1},
q(a,b){if(!(b>=0&&b<a.length))return A.q(a,b)
return a[b]},
h(a){return A.bs(a,"[","]")},
gp(a){return new J.ah(a,a.length,A.H(a).i("ah<1>"))},
gn(a){return A.av(a)},
gj(a){return a.length},
V(a,b,c){var t
A.H(a).c.a(c)
if(!!a.immutable$list)A.W(A.bx("indexed set"))
t=a.length
if(b>=t)throw A.c(A.aH(a,b))
a[b]=c},
$if:1,
$iB:1}
J.b0.prototype={}
J.ah.prototype={
gm(){return this.$ti.c.a(this.d)},
l(){var t,s=this,r=s.a,q=r.length
if(s.b!==q)throw A.c(A.cq(r))
t=s.c
if(t>=q){s.sK(null)
return!1}s.sK(r[t]);++s.c
return!0},
sK(a){this.d=this.$ti.i("1?").a(a)}}
J.aq.prototype={
h(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gn(a){var t,s,r,q,p=a|0
if(a===p)return p&536870911
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259&536870911},
$iae:1}
J.an.prototype={$ibn:1}
J.ap.prototype={}
J.J.prototype={
P(a,b){if(b<0)throw A.c(A.aH(a,b))
if(b>=a.length)A.W(A.aH(a,b))
return a.charCodeAt(b)},
I(a,b){if(b>=a.length)throw A.c(A.aH(a,b))
return a.charCodeAt(b)},
T(a,b){return a+b},
W(a,b,c){return a.substring(b,A.cN(b,c,a.length))},
aa(a){var t,s,r,q=a.trim(),p=q.length
if(p===0)return q
if(this.I(q,0)===133){t=J.cH(q,1)
if(t===p)return""}else t=0
s=p-1
r=this.P(q,s)===133?J.cI(q,s):p
if(t===0&&r===p)return q
return q.substring(t,r)},
h(a){return a},
gn(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=s+a.charCodeAt(r)&536870911
s=s+((s&524287)<<10)&536870911
s^=s>>6}s=s+((s&67108863)<<3)&536870911
s^=s>>11
return s+((s&16383)<<15)&536870911},
gj(a){return a.length},
$ib2:1,
$id:1}
A.as.prototype={
h(a){var t="LateInitializationError: "+this.a
return t}}
A.Z.prototype={}
A.w.prototype={
gp(a){var t=this
return new A.Q(t,t.gj(t),A.M(t).i("Q<w.E>"))}}
A.L.prototype={
a_(a,b,c,d){var t,s=this.b
A.aw(s,"start")
t=this.c
A.aw(t,"end")
if(s>t)throw A.c(A.b4(s,0,t,"start",null))},
ga2(){var t=this.a.length,s=this.c
if(s>t)return t
return s},
ga4(){var t=this.a.length,s=this.b
if(s>t)return t
return s},
gj(a){var t,s=this.a.length,r=this.b
if(r>=s)return 0
t=this.c
if(t>=s)return s-r
return t-r},
q(a,b){var t=this,s=t.ga4()+b,r=t.ga2()
if(s>=r)throw A.c(A.br(b,t,"index",null,null))
return J.bM(t.a,s)},
F(a){var t,s,r,q,p=this,o=p.b,n=p.a,m=n.length,l=p.c
if(l<m)m=l
t=m-o
if(t<=0){n=J.bW(0,p.$ti.c)
return n}s=J.bI(n)
r=A.cK(t,s.q(n,o),!0,p.$ti.c)
for(q=1;q<t;++q){B.a.V(r,q,s.q(n,o+q))
if(n.length<m)throw A.c(A.aP(p))}return r}}
A.Q.prototype={
gm(){return this.$ti.c.a(this.d)},
l(){var t,s=this,r=s.a,q=J.cl(r),p=q.gj(r)
if(s.b!==p)throw A.c(A.aP(r))
t=s.c
if(t>=p){s.sG(null)
return!1}s.sG(q.q(r,t));++s.c
return!0},
sG(a){this.d=this.$ti.i("1?").a(a)}}
A.a_.prototype={
gj(a){return J.aJ(this.a)},
q(a,b){return this.b.$1(J.bM(this.a,b))}}
A.O.prototype={
h(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+A.cr(s==null?"unknown":s)+"'"},
gab(){return this},
$C:"$1",
$R:1,
$D:null}
A.aN.prototype={$C:"$2",$R:2}
A.b8.prototype={}
A.b6.prototype={
h(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+A.cr(t)+"'"}}
A.X.prototype={
w(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.X))return!1
return this.$_target===b.$_target&&this.a===b.a},
gn(a){return(A.dK(this.a)^A.av(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.b3(u.K.a(this.a))+"'")}}
A.b5.prototype={
h(a){return"RuntimeError: "+this.a}}
A.bk.prototype={
$1(a){return this.a(a)},
$S:1}
A.bl.prototype={
$2(a,b){return this.a(a,b)},
$S:2}
A.bm.prototype={
$1(a){return this.a(A.aF(a))},
$S:3}
A.ar.prototype={
h(a){return"RegExp/"+this.a+"/"+this.b.flags},
$ib2:1}
A.y.prototype={
i(a){return A.bf(v.typeUniverse,this,a)},
ac(a){return A.d4(v.typeUniverse,this,a)}}
A.az.prototype={}
A.bc.prototype={
h(a){return this.a}}
A.aB.prototype={}
A.a4.prototype={
gp(a){var t=this,s=new A.S(t,t.r,A.M(t).i("S<1>"))
s.c=t.e
return s},
gj(a){return this.a},
k(a,b){var t,s,r=this
A.M(r).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){t=r.b
return r.H(t==null?r.b=A.by():t,b)}else if(typeof b=="number"&&(b&1073741823)===b){s=r.c
return r.H(s==null?r.c=A.by():s,b)}else return r.a0(b)},
a0(a){var t,s,r,q=this
A.M(q).c.a(a)
t=q.d
if(t==null)t=q.d=A.by()
s=q.a1(a)
r=t[s]
if(r==null)t[s]=[q.C(a)]
else{if(q.a3(r,a)>=0)return!1
r.push(q.C(a))}return!0},
H(a,b){A.M(this).c.a(b)
if(u.M.a(a[b])!=null)return!1
a[b]=this.C(b)
return!0},
M(){this.r=this.r+1&1073741823},
C(a){var t,s=this,r=new A.aA(A.M(s).c.a(a))
if(s.e==null)s.e=s.f=r
else{t=s.f
t.toString
r.c=t
s.f=t.b=r}++s.a
s.M()
return r},
a1(a){return J.bN(a)&1073741823},
a3(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.bL(a[s].a,b))return s
return-1}}
A.aA.prototype={}
A.S.prototype={
gm(){return this.$ti.c.a(this.d)},
l(){var t=this,s=t.c,r=t.a
if(t.b!==r.r)throw A.c(A.aP(r))
else if(s==null){t.sJ(null)
return!1}else{t.sJ(t.$ti.i("1?").a(s.a))
t.c=s.b
return!0}},
sJ(a){this.d=this.$ti.i("1?").a(a)}}
A.at.prototype={
h(a){return A.bs(a,"[","]")}}
A.p.prototype={
t(a,b){var t,s
A.M(this).i("f<p.E>").a(b)
for(t=b.$ti,s=new A.Q(b,b.gj(b),t.i("Q<w.E>")),t=t.i("w.E");s.l();)this.k(0,t.a(s.d))},
h(a){return A.bs(this,"{","}")},
D(a,b){var t,s,r=this.gp(this)
if(!r.l())return""
t=r.$ti.c
if(b===""){s=""
do s+=A.m(t.a(r.d))
while(r.l())
t=s}else{s=""+A.m(t.a(r.d))
for(;r.l();)s=s+b+A.m(t.a(r.d))
t=s}return t.charCodeAt(0)==0?t:t}}
A.a3.prototype={$if:1,$ir:1}
A.a6.prototype={$if:1,$ir:1}
A.a7.prototype={}
A.aa.prototype={}
A.bb.prototype={}
A.aW.prototype={}
A.aL.prototype={
h(a){var t=this.a
if(t!=null)return"Assertion failed: "+A.aX(t)
return"Assertion failed"}}
A.b1.prototype={
h(a){return"Throw of null."}}
A.N.prototype={
gB(){return"Invalid argument"+(!this.a?"(s)":"")},
gA(){return""},
h(a){var t,s,r=this,q=r.c,p=q==null?"":" ("+q+")",o=r.d,n=o==null?"":": "+o,m=r.gB()+p+n
if(!r.a)return m
t=r.gA()
s=A.aX(r.b)
return m+t+": "+s}}
A.a2.prototype={
gB(){return"RangeError"},
gA(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+A.m(r):""
else if(r==null)t=": Not greater than or equal to "+A.m(s)
else if(r>s)t=": Not in inclusive range "+A.m(s)+".."+A.m(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+A.m(s)
return t}}
A.b_.prototype={
gB(){return"RangeError"},
gA(){if(A.bE(this.b)<0)return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+t},
gj(a){return this.f}}
A.ba.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.b9.prototype={
h(a){var t="UnimplementedError: "+this.a
return t}}
A.aO.prototype={
h(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.aX(t)+"."}}
A.aT.prototype={
h(a){var t="Reading static variable '"+this.a+"' during its initialization"
return t}}
A.aY.prototype={
h(a){var t=this.a,s=""!==t?"FormatException: "+t:"FormatException",r=this.b
if(r.length>78)r=B.b.W(r,0,75)+"..."
return s+"\n"+r}}
A.f.prototype={
gj(a){var t,s=this.gp(this)
for(t=0;s.l();)++t
return t},
q(a,b){var t,s,r
A.aw(b,"index")
for(t=this.gp(this),s=0;t.l();){r=t.gm()
if(b===s)return r;++s}throw A.c(A.br(b,this,"index",null,s))},
h(a){return A.cF(this,"(",")")}}
A.a0.prototype={
gn(a){return A.l.prototype.gn.call(this,this)},
h(a){return"null"}}
A.l.prototype={$il:1,
w(a,b){return this===b},
gn(a){return A.av(this)},
h(a){return"Instance of '"+A.b3(this)+"'"},
toString(){return this.h(this)}}
A.b7.prototype={
gj(a){return this.a.length},
h(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
A.a.prototype={}
A.af.prototype={
h(a){var t=String(a)
t.toString
return t}}
A.ag.prototype={
h(a){var t=String(a)
t.toString
return t}}
A.z.prototype={
gj(a){return a.length}}
A.aU.prototype={
h(a){var t=String(a)
t.toString
return t}}
A.aV.prototype={
gj(a){var t=a.length
t.toString
return t}}
A.t.prototype={
gO(a){return new A.ay(a)},
h(a){var t=a.localName
t.toString
return t},
$it:1}
A.aj.prototype={}
A.al.prototype={
gj(a){return a.length}}
A.e.prototype={
h(a){var t=a.nodeValue
return t==null?this.X(a):t},
$ie:1}
A.ax.prototype={
gj(a){return a.length}}
A.a5.prototype={
gj(a){var t=a.length
t.toString
return t},
q(a,b){if(!(b>=0&&b<a.length))return A.q(a,b)
return a[b]},
$ibu:1,
$if:1,
$iB:1}
A.ay.prototype={
v(){var t,s,r,q,p=A.bY(u.N)
for(t=this.a.className.split(" "),s=t.length,r=0;r<s;++r){q=J.bO(t[r])
if(q.length!==0)p.k(0,q)}return p},
S(a){this.a.className=u.C.a(a).D(0," ")},
gj(a){var t=this.a.classList.length
t.toString
return t},
u(a){this.a.className=""},
k(a,b){var t,s
A.aF(b)
t=this.a.classList
s=t.contains(b)
s.toString
t.add(b)
return!s},
t(a,b){A.cQ(this.a,u.X.a(b))}}
A.P.prototype={
gp(a){return new A.ak(a,a.length,A.ac(a).i("ak<P.E>"))}}
A.ak.prototype={
l(){var t=this,s=t.c+1,r=t.b
if(s<r){r=t.a
if(!(s>=0&&s<r.length))return A.q(r,s)
t.sL(r[s])
t.c=s
return!0}t.sL(null)
t.c=r
return!1},
gm(){return this.$ti.c.a(this.d)},
sL(a){this.d=this.$ti.i("1?").a(a)}}
A.aD.prototype={}
A.aE.prototype={}
A.Y.prototype={
N(a){var t
A.aF(a)
t=$.cs().b
if(t.test(a))return a
throw A.c(A.cw(a,"value","Not a valid class token"))},
h(a){return this.v().D(0," ")},
gp(a){var t=this.v()
return A.cR(t,t.r,A.M(t).c)},
gj(a){return this.v().a},
k(a,b){var t
A.aF(b)
this.N(b)
t=this.E(new A.aR(b))
return A.d7(t==null?!1:t)},
t(a,b){this.E(new A.aQ(this,u.X.a(b)))},
u(a){this.E(new A.aS())},
E(a){var t,s
u.m.a(a)
t=this.v()
s=a.$1(t)
this.S(t)
return s}}
A.aR.prototype={
$1(a){return u.C.a(a).k(0,this.a)},
$S:5}
A.aQ.prototype={
$1(a){var t=this.b,s=A.H(t)
return u.C.a(a).t(0,new A.a_(t,s.i("d(1)").a(this.a.ga5()),s.i("a_<1,d>")))},
$S:0}
A.aS.prototype={
$1(a){u.C.a(a)
if(a.a>0){a.b=a.c=a.d=a.e=a.f=null
a.a=0
a.M()}return null},
$S:0}
A.bd.prototype={
R(a){if(a<=0||a>4294967296)throw A.c(A.cM("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0}}
A.ai.prototype={
v(){var t,s,r,q,p=this.a.getAttribute("class"),o=A.bY(u.N)
if(p==null)return o
for(t=p.split(" "),s=t.length,r=0;r<s;++r){q=J.bO(t[r])
if(q.length!==0)o.k(0,q)}return o},
S(a){this.a.setAttribute("class",a.D(0," "))}}
A.b.prototype={
gO(a){return new A.ai(a)}}
A.n.prototype={
h(a){return"Cats."+this.b}}
A.x.prototype={
h(a){return"Patterns."+this.b}}
A.E.prototype={
h(a){return"Colors."+this.b}}
A.v.prototype={
h(a){return"Goals."+this.b}}
A.a1.prototype={
sU(a){this.b=u.k.a(a)}}
A.aZ.prototype={
Z(a){var t,s,r,q,p,o,n,m=u.Q,l=u.r
this.sa6(A.i([A.bw(A.i([B.o,B.p,B.u,B.v],m),l),A.bw(A.i([B.q,B.r,B.w,B.x],m),l),A.bw(A.i([B.t,B.y],m),l)],m))
m=A.bv(B.N,u.L)
l=u.S
this.sa7(A.c2(m,0,A.ck(6,"count",l),A.H(m).c).F(0))
m=A.bv(B.M,u.W)
t=A.c2(m,0,A.ck(a,"count",l),A.H(m).c).F(0)
s=A.i(new Array(a),u.a)
for(m=u.f,l=u.R,r=0;r<a;++r){if(!(r<t.length))return A.q(t,r)
q=new A.a1(t[r],A.i([],m))
p=A.bv(B.L,l)
o=A.H(p)
n=new A.L(p,0,4,o.i("L<1>"))
n.a_(p,0,4,o.c)
q.sU(n.F(0))
s[r]=q}this.sa8(s)},
sa6(a){this.a=u.z.a(a)},
sa7(a){this.b=u.B.a(a)},
sa8(a){this.c=u.J.a(a)}};(function aliases(){var t=J.k.prototype
t.X=t.h
t=J.K.prototype
t.Y=t.h})();(function installTearOffs(){var t=hunkHelpers._instance_1u
t(A.Y.prototype,"ga5","N",4)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(A.l,null)
r(A.l,[A.bt,J.k,J.ah,A.aW,A.f,A.Q,A.O,A.ar,A.y,A.az,A.aa,A.aA,A.S,A.at,A.p,A.a7,A.bb,A.aY,A.a0,A.b7,A.P,A.ak,A.bd,A.a1,A.aZ])
r(J.k,[J.am,J.ao,J.K,J.j,J.aq,J.J,A.aj,A.aU,A.aV,A.aD])
r(J.K,[J.au,J.R,J.A])
s(J.b0,J.j)
r(J.aq,[J.an,J.ap])
r(A.aW,[A.as,A.b5,A.bc,A.aL,A.b1,A.N,A.ba,A.b9,A.aO,A.aT])
s(A.Z,A.f)
s(A.w,A.Z)
r(A.w,[A.L,A.a_])
r(A.O,[A.aN,A.b8,A.bk,A.bm,A.aR,A.aQ,A.aS])
r(A.b8,[A.b6,A.X])
s(A.bl,A.aN)
s(A.aB,A.bc)
s(A.a6,A.aa)
s(A.a4,A.a6)
s(A.a3,A.a7)
r(A.N,[A.a2,A.b_])
s(A.e,A.aj)
r(A.e,[A.t,A.z])
r(A.t,[A.a,A.b])
r(A.a,[A.af,A.ag,A.al,A.ax])
s(A.aE,A.aD)
s(A.a5,A.aE)
s(A.Y,A.a3)
r(A.Y,[A.ay,A.ai])
r(A.bb,[A.n,A.x,A.E,A.v])
t(A.a7,A.p)
t(A.aa,A.p)
t(A.aD,A.at)
t(A.aE,A.P)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{bn:"int",dx:"double",ae:"num",d:"String",aG:"bool",a0:"Null",B:"List"},mangledNames:{},types:["~(r<d>)","@(@)","@(@,d)","@(d)","d(d)","aG(r<d>)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.d3(v.typeUniverse,JSON.parse('{"au":"K","R":"K","A":"K","dR":"b","dY":"b","dS":"a","e_":"a","dZ":"e","dW":"e","dT":"z","e0":"z","am":{"aG":[]},"j":{"B":["1"],"f":["1"]},"b0":{"j":["1"],"B":["1"],"f":["1"]},"aq":{"ae":[]},"an":{"bn":[],"ae":[]},"ap":{"ae":[]},"J":{"d":[],"b2":[]},"Z":{"f":["1"]},"w":{"f":["1"]},"L":{"w":["1"],"f":["1"],"w.E":"1"},"a_":{"w":["2"],"f":["2"],"w.E":"2"},"ar":{"b2":[]},"a4":{"p":["1"],"r":["1"],"f":["1"],"p.E":"1"},"a3":{"p":["1"],"r":["1"],"f":["1"]},"a6":{"p":["1"],"r":["1"],"f":["1"]},"bn":{"ae":[]},"r":{"f":["1"]},"d":{"b2":[]},"a":{"t":[],"e":[]},"af":{"t":[],"e":[]},"ag":{"t":[],"e":[]},"z":{"e":[]},"t":{"e":[]},"al":{"t":[],"e":[]},"ax":{"t":[],"e":[]},"a5":{"at":["e"],"P":["e"],"B":["e"],"bu":["e"],"f":["e"],"P.E":"e"},"ay":{"p":["d"],"r":["d"],"f":["d"],"p.E":"d"},"Y":{"p":["d"],"r":["d"],"f":["d"]},"ai":{"p":["d"],"r":["d"],"f":["d"],"p.E":"d"},"b":{"t":[],"e":[]}}'))
A.d2(v.typeUniverse,JSON.parse('{"Z":1,"a3":1,"a6":1,"a7":1,"aa":1}'))
var u=(function rtii(){var t=A.bH
return{r:t("n"),W:t("E"),Z:t("dX"),R:t("v"),X:t("f<d>"),U:t("f<@>"),Q:t("j<n>"),f:t("j<v>"),c:t("j<x>"),a:t("j<a1>"),s:t("j<d>"),b:t("j<@>"),T:t("ao"),g:t("A"),p:t("bu<@>"),z:t("B<n>"),k:t("B<v>"),B:t("B<x>"),J:t("B<a1>"),P:t("a0"),K:t("l"),L:t("x"),C:t("r<d>"),N:t("d"),o:t("R"),y:t("aG"),i:t("dx"),m:t("@(r<d>)"),S:t("bn"),A:t("0&*"),_:t("l*"),V:t("bV<a0>?"),O:t("l?"),M:t("aA?"),H:t("ae")}})();(function constants(){var t=hunkHelpers.makeConstList
B.J=J.k.prototype
B.a=J.j.prototype
B.b=J.J.prototype
B.K=J.A.prototype
B.h=J.au.prototype
B.c=J.R.prototype
B.d=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.i=function() {
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
B.n=function(getTagFallback) {
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
B.j=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.k=function(hooks) {
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
B.m=function(hooks) {
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
B.l=function(hooks) {
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
B.e=function(hooks) { return hooks; }

B.f=new A.bd()
B.o=new A.n("cat1")
B.p=new A.n("cat2")
B.q=new A.n("cat3")
B.r=new A.n("cat4")
B.t=new A.n("cat5")
B.u=new A.n("cat6")
B.v=new A.n("cat7")
B.w=new A.n("cat8")
B.x=new A.n("cat9")
B.y=new A.n("cat10")
B.D=new A.v("goal1")
B.E=new A.v("goal2")
B.F=new A.v("goal3")
B.G=new A.v("goal4")
B.H=new A.v("goal5")
B.I=new A.v("goal6")
B.L=A.i(t([B.D,B.E,B.F,B.G,B.H,B.I]),u.f)
B.z=new A.E("col1")
B.A=new A.E("col2")
B.B=new A.E("col3")
B.C=new A.E("col4")
B.M=A.i(t([B.z,B.A,B.B,B.C]),A.bH("j<E>"))
B.O=new A.x("patt1")
B.P=new A.x("patt2")
B.Q=new A.x("patt3")
B.R=new A.x("patt4")
B.S=new A.x("patt5")
B.T=new A.x("patt6")
B.N=A.i(t([B.O,B.P,B.Q,B.R,B.S,B.T]),u.c)})();(function staticFields(){$.be=null
$.bS=null
$.bR=null
$.cm=null
$.cj=null
$.cp=null
$.bi=null
$.bo=null
$.bJ=null
$.C=A.i([],A.bH("j<l>"))})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal,s=hunkHelpers.lazy
t($,"dV","ct",()=>A.dB("_$dart_dartClosure"))
t($,"dU","cs",()=>A.cO("^\\S+$"))
s($,"ed","cu",()=>{var r=new A.aZ(A.i([],u.Q),A.i([],u.c),A.i([],u.a))
r.Z(2)
return r})})();(function nativeSupport(){!function(){var t=function(a){var n={}
n[a]=1
return Object.keys(hunkHelpers.convertToFastObject(n))[0]}
v.getIsolateTag=function(a){return t("___dart_"+a+v.isolateTag)}
var s="___dart_isolate_tags_"
var r=Object[s]||(Object[s]=Object.create(null))
var q="_ZxYxX"
for(var p=0;;p++){var o=t(q+"_"+p+"_")
if(!(o in r)){r[o]=1
v.isolateTag=o
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({ApplicationCacheErrorEvent:J.k,DOMError:J.k,ErrorEvent:J.k,Event:J.k,InputEvent:J.k,SubmitEvent:J.k,MediaError:J.k,NavigatorUserMediaError:J.k,OverconstrainedError:J.k,PositionError:J.k,GeolocationPositionError:J.k,SensorErrorEvent:J.k,SpeechRecognitionError:J.k,HTMLAudioElement:A.a,HTMLBRElement:A.a,HTMLBaseElement:A.a,HTMLBodyElement:A.a,HTMLButtonElement:A.a,HTMLCanvasElement:A.a,HTMLContentElement:A.a,HTMLDListElement:A.a,HTMLDataElement:A.a,HTMLDataListElement:A.a,HTMLDetailsElement:A.a,HTMLDialogElement:A.a,HTMLDivElement:A.a,HTMLEmbedElement:A.a,HTMLFieldSetElement:A.a,HTMLHRElement:A.a,HTMLHeadElement:A.a,HTMLHeadingElement:A.a,HTMLHtmlElement:A.a,HTMLIFrameElement:A.a,HTMLImageElement:A.a,HTMLInputElement:A.a,HTMLLIElement:A.a,HTMLLabelElement:A.a,HTMLLegendElement:A.a,HTMLLinkElement:A.a,HTMLMapElement:A.a,HTMLMediaElement:A.a,HTMLMenuElement:A.a,HTMLMetaElement:A.a,HTMLMeterElement:A.a,HTMLModElement:A.a,HTMLOListElement:A.a,HTMLObjectElement:A.a,HTMLOptGroupElement:A.a,HTMLOptionElement:A.a,HTMLOutputElement:A.a,HTMLParagraphElement:A.a,HTMLParamElement:A.a,HTMLPictureElement:A.a,HTMLPreElement:A.a,HTMLProgressElement:A.a,HTMLQuoteElement:A.a,HTMLScriptElement:A.a,HTMLShadowElement:A.a,HTMLSlotElement:A.a,HTMLSourceElement:A.a,HTMLSpanElement:A.a,HTMLStyleElement:A.a,HTMLTableCaptionElement:A.a,HTMLTableCellElement:A.a,HTMLTableDataCellElement:A.a,HTMLTableHeaderCellElement:A.a,HTMLTableColElement:A.a,HTMLTableElement:A.a,HTMLTableRowElement:A.a,HTMLTableSectionElement:A.a,HTMLTemplateElement:A.a,HTMLTextAreaElement:A.a,HTMLTimeElement:A.a,HTMLTitleElement:A.a,HTMLTrackElement:A.a,HTMLUListElement:A.a,HTMLUnknownElement:A.a,HTMLVideoElement:A.a,HTMLDirectoryElement:A.a,HTMLFontElement:A.a,HTMLFrameElement:A.a,HTMLFrameSetElement:A.a,HTMLMarqueeElement:A.a,HTMLElement:A.a,HTMLAnchorElement:A.af,HTMLAreaElement:A.ag,CDATASection:A.z,CharacterData:A.z,Comment:A.z,ProcessingInstruction:A.z,Text:A.z,DOMException:A.aU,DOMTokenList:A.aV,Element:A.t,EventTarget:A.aj,HTMLFormElement:A.al,Document:A.e,DocumentFragment:A.e,HTMLDocument:A.e,ShadowRoot:A.e,XMLDocument:A.e,Attr:A.e,DocumentType:A.e,Node:A.e,HTMLSelectElement:A.ax,NamedNodeMap:A.a5,MozNamedAttrMap:A.a5,SVGAElement:A.b,SVGAnimateElement:A.b,SVGAnimateMotionElement:A.b,SVGAnimateTransformElement:A.b,SVGAnimationElement:A.b,SVGCircleElement:A.b,SVGClipPathElement:A.b,SVGDefsElement:A.b,SVGDescElement:A.b,SVGDiscardElement:A.b,SVGEllipseElement:A.b,SVGFEBlendElement:A.b,SVGFEColorMatrixElement:A.b,SVGFEComponentTransferElement:A.b,SVGFECompositeElement:A.b,SVGFEConvolveMatrixElement:A.b,SVGFEDiffuseLightingElement:A.b,SVGFEDisplacementMapElement:A.b,SVGFEDistantLightElement:A.b,SVGFEFloodElement:A.b,SVGFEFuncAElement:A.b,SVGFEFuncBElement:A.b,SVGFEFuncGElement:A.b,SVGFEFuncRElement:A.b,SVGFEGaussianBlurElement:A.b,SVGFEImageElement:A.b,SVGFEMergeElement:A.b,SVGFEMergeNodeElement:A.b,SVGFEMorphologyElement:A.b,SVGFEOffsetElement:A.b,SVGFEPointLightElement:A.b,SVGFESpecularLightingElement:A.b,SVGFESpotLightElement:A.b,SVGFETileElement:A.b,SVGFETurbulenceElement:A.b,SVGFilterElement:A.b,SVGForeignObjectElement:A.b,SVGGElement:A.b,SVGGeometryElement:A.b,SVGGraphicsElement:A.b,SVGImageElement:A.b,SVGLineElement:A.b,SVGLinearGradientElement:A.b,SVGMarkerElement:A.b,SVGMaskElement:A.b,SVGMetadataElement:A.b,SVGPathElement:A.b,SVGPatternElement:A.b,SVGPolygonElement:A.b,SVGPolylineElement:A.b,SVGRadialGradientElement:A.b,SVGRectElement:A.b,SVGScriptElement:A.b,SVGSetElement:A.b,SVGStopElement:A.b,SVGStyleElement:A.b,SVGElement:A.b,SVGSVGElement:A.b,SVGSwitchElement:A.b,SVGSymbolElement:A.b,SVGTSpanElement:A.b,SVGTextContentElement:A.b,SVGTextElement:A.b,SVGTextPathElement:A.b,SVGTextPositioningElement:A.b,SVGTitleElement:A.b,SVGUseElement:A.b,SVGViewElement:A.b,SVGGradientElement:A.b,SVGComponentTransferFunctionElement:A.b,SVGFEDropShadowElement:A.b,SVGMPathElement:A.b})
hunkHelpers.setOrUpdateLeafTags({ApplicationCacheErrorEvent:true,DOMError:true,ErrorEvent:true,Event:true,InputEvent:true,SubmitEvent:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,SensorErrorEvent:true,SpeechRecognitionError:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,DOMException:true,DOMTokenList:true,Element:false,EventTarget:false,HTMLFormElement:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,HTMLSelectElement:true,NamedNodeMap:true,MozNamedAttrMap:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true})})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var t=A.dI
if(typeof dartMainRunner==="function")dartMainRunner(t,[])
else t([])})})()
//# sourceMappingURL=main.dart.js.map
