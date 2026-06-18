var Pu=Object.defineProperty;var Iu=(s,t,e)=>t in s?Pu(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var A=(s,t,e)=>Iu(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sl="170",Du=0,kl=1,Nu=2,Th=1,Uu=2,On=3,zn=0,ke=1,Ce=2,si=0,ts=1,Ki=2,zl=3,Hl=4,Ou=5,wi=100,Fu=101,Bu=102,ku=103,zu=104,Hu=200,Gu=201,Vu=202,Wu=203,ra=204,oa=205,Xu=206,Yu=207,ju=208,qu=209,$u=210,Ku=211,Zu=212,Ju=213,Qu=214,aa=0,la=1,ca=2,os=3,ha=4,ua=5,da=6,fa=7,Eh=0,td=1,ed=2,ri=0,nd=1,id=2,sd=3,rd=4,od=5,ad=6,ld=7,Gl="attached",cd="detached",Ah=300,as=301,ls=302,pa=303,ma=304,ro=306,oi=1e3,gn=1001,Zr=1002,ze=1003,Rh=1004,Us=1005,Ne=1006,Vr=1007,xn=1008,Hn=1009,Ch=1010,Lh=1011,js=1012,rl=1013,Ti=1014,cn=1015,nr=1016,ol=1017,al=1018,cs=1020,Ph=35902,Ih=1021,Dh=1022,Je=1023,Nh=1024,Uh=1025,es=1026,hs=1027,ll=1028,cl=1029,Oh=1030,hl=1031,ul=1033,Wr=33776,Xr=33777,Yr=33778,jr=33779,ga=35840,xa=35841,_a=35842,va=35843,ya=36196,Ma=37492,wa=37496,Sa=37808,ba=37809,Ta=37810,Ea=37811,Aa=37812,Ra=37813,Ca=37814,La=37815,Pa=37816,Ia=37817,Da=37818,Na=37819,Ua=37820,Oa=37821,qr=36492,Fa=36494,Ba=36495,Fh=36283,ka=36284,za=36285,Ha=36286,qs=2300,$s=2301,mo=2302,Vl=2400,Wl=2401,Xl=2402,hd=2500,ud=0,Bh=1,Ga=2,dd=3200,fd=3201,kh=0,pd=1,ti="",me="srgb",Ue="srgb-linear",oo="linear",ae="srgb",Li=7680,Yl=519,md=512,gd=513,xd=514,zh=515,_d=516,vd=517,yd=518,Md=519,Va=35044,jl="300 es",Bn=2e3,Jr=2001;class gs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ql=1234567;const zs=Math.PI/180,us=180/Math.PI;function tn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ie[s&255]+Ie[s>>8&255]+Ie[s>>16&255]+Ie[s>>24&255]+"-"+Ie[t&255]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[e&63|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[n&255]+Ie[n>>8&255]+Ie[n>>16&255]+Ie[n>>24&255]).toLowerCase()}function Te(s,t,e){return Math.max(t,Math.min(e,s))}function dl(s,t){return(s%t+t)%t}function wd(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Sd(s,t,e){return s!==t?(e-s)/(t-s):0}function Hs(s,t,e){return(1-e)*s+e*t}function bd(s,t,e,n){return Hs(s,t,1-Math.exp(-e*n))}function Td(s,t=1){return t-Math.abs(dl(s,t*2)-t)}function Ed(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Ad(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Rd(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Cd(s,t){return s+Math.random()*(t-s)}function Ld(s){return s*(.5-Math.random())}function Pd(s){s!==void 0&&(ql=s);let t=ql+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Id(s){return s*zs}function Dd(s){return s*us}function Nd(s){return(s&s-1)===0&&s!==0}function Ud(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Od(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Fd(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ln(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function re(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const $r={DEG2RAD:zs,RAD2DEG:us,generateUUID:tn,clamp:Te,euclideanModulo:dl,mapLinear:wd,inverseLerp:Sd,lerp:Hs,damp:bd,pingpong:Td,smoothstep:Ed,smootherstep:Ad,randInt:Rd,randFloat:Cd,randFloatSpread:Ld,seededRandom:Pd,degToRad:Id,radToDeg:Dd,isPowerOfTwo:Nd,ceilPowerOfTwo:Ud,floorPowerOfTwo:Od,setQuaternionFromProperEuler:Fd,normalize:re,denormalize:ln};class Z{constructor(t=0,e=0){Z.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wt{constructor(t,e,n,i,r,o,a,l,c){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=i[0],m=i[3],p=i[6],M=i[1],v=i[4],_=i[7],L=i[2],R=i[5],T=i[8];return r[0]=o*x+a*M+l*L,r[3]=o*m+a*v+l*R,r[6]=o*p+a*_+l*T,r[1]=c*x+h*M+u*L,r[4]=c*m+h*v+u*R,r[7]=c*p+h*_+u*T,r[2]=d*x+f*M+g*L,r[5]=d*m+f*v+g*R,r[8]=d*p+f*_+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=e*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=u*x,t[1]=(i*c-h*n)*x,t[2]=(a*n-i*o)*x,t[3]=d*x,t[4]=(h*e-i*l)*x,t[5]=(i*r-a*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(go.makeScale(t,e)),this}rotate(t){return this.premultiply(go.makeRotation(-t)),this}translate(t,e){return this.premultiply(go.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const go=new Wt;function Hh(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ks(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Bd(){const s=Ks("canvas");return s.style.display="block",s}const $l={};function Os(s){s in $l||($l[s]=!0,console.warn(s))}function kd(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function zd(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Hd(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Zt={enabled:!0,workingColorSpace:Ue,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ae&&(s.r=kn(s.r),s.g=kn(s.g),s.b=kn(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ae&&(s.r=ns(s.r),s.g=ns(s.g),s.b=ns(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ti?oo:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function kn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ns(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Kl=[.64,.33,.3,.6,.15,.06],Zl=[.2126,.7152,.0722],Jl=[.3127,.329],Ql=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tc=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Zt.define({[Ue]:{primaries:Kl,whitePoint:Jl,transfer:oo,toXYZ:Ql,fromXYZ:tc,luminanceCoefficients:Zl,workingColorSpaceConfig:{unpackColorSpace:me},outputColorSpaceConfig:{drawingBufferColorSpace:me}},[me]:{primaries:Kl,whitePoint:Jl,transfer:ae,toXYZ:Ql,fromXYZ:tc,luminanceCoefficients:Zl,outputColorSpaceConfig:{drawingBufferColorSpace:me}}});let Pi;class Gd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Pi===void 0&&(Pi=Ks("canvas")),Pi.width=t.width,Pi.height=t.height;const n=Pi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Pi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ks("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=kn(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(kn(e[n]/255)*255):e[n]=kn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Vd=0;class Gh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=tn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(xo(i[o].image)):r.push(xo(i[o]))}else r=xo(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function xo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Gd.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wd=0;class Me extends gs{constructor(t=Me.DEFAULT_IMAGE,e=Me.DEFAULT_MAPPING,n=gn,i=gn,r=Ne,o=xn,a=Je,l=Hn,c=Me.DEFAULT_ANISOTROPY,h=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=tn(),this.name="",this.source=new Gh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Z(0,0),this.repeat=new Z(1,1),this.center=new Z(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ah)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case oi:t.x=t.x-Math.floor(t.x);break;case gn:t.x=t.x<0?0:1;break;case Zr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case oi:t.y=t.y-Math.floor(t.y);break;case gn:t.y=t.y<0?0:1;break;case Zr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Me.DEFAULT_IMAGE=null;Me.DEFAULT_MAPPING=Ah;Me.DEFAULT_ANISOTROPY=1;class ee{constructor(t=0,e=0,n=0,i=1){ee.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,_=(f+1)/2,L=(p+1)/2,R=(h+d)/4,T=(u+x)/4,D=(g+m)/4;return v>_&&v>L?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=R/n,r=T/n):_>L?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=R/i,r=D/i):L<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(L),n=T/r,i=D/r),this.set(n,i,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-x)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xd extends gs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ee(0,0,t,e),this.scissorTest=!1,this.viewport=new ee(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ne,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Me(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Gh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ai extends Xd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Vh extends Me{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ze,this.minFilter=ze,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Yd extends Me{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ze,this.minFilter=ze,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ui{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==d||c!==f||h!==g){let m=1-a;const p=l*d+c*f+h*g+u*x,M=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const L=Math.sqrt(v),R=Math.atan2(L,p*M);m=Math.sin(m*R)/L,a=Math.sin(a*R)/L}const _=a*M;if(l=l*m+d*_,c=c*m+f*_,h=h*m+g*_,u=u*m+x*_,m===1-a){const L=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=L,c*=L,h*=L,u*=L}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ec.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ec.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return _o.copy(this).projectOnVector(t),this.sub(_o)}reflect(t){return this.sub(_o.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _o=new P,ec=new ui;class dn{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,rn):rn.fromBufferAttribute(r,o),rn.applyMatrix4(t.matrixWorld),this.expandByPoint(rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),lr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),lr.copy(n.boundingBox)),lr.applyMatrix4(t.matrixWorld),this.union(lr)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,rn),rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ws),cr.subVectors(this.max,ws),Ii.subVectors(t.a,ws),Di.subVectors(t.b,ws),Ni.subVectors(t.c,ws),Yn.subVectors(Di,Ii),jn.subVectors(Ni,Di),fi.subVectors(Ii,Ni);let e=[0,-Yn.z,Yn.y,0,-jn.z,jn.y,0,-fi.z,fi.y,Yn.z,0,-Yn.x,jn.z,0,-jn.x,fi.z,0,-fi.x,-Yn.y,Yn.x,0,-jn.y,jn.x,0,-fi.y,fi.x,0];return!vo(e,Ii,Di,Ni,cr)||(e=[1,0,0,0,1,0,0,0,1],!vo(e,Ii,Di,Ni,cr))?!1:(hr.crossVectors(Yn,jn),e=[hr.x,hr.y,hr.z],vo(e,Ii,Di,Ni,cr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Cn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Cn=[new P,new P,new P,new P,new P,new P,new P,new P],rn=new P,lr=new dn,Ii=new P,Di=new P,Ni=new P,Yn=new P,jn=new P,fi=new P,ws=new P,cr=new P,hr=new P,pi=new P;function vo(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){pi.fromArray(s,r);const a=i.x*Math.abs(pi.x)+i.y*Math.abs(pi.y)+i.z*Math.abs(pi.z),l=t.dot(pi),c=e.dot(pi),h=n.dot(pi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const jd=new dn,Ss=new P,yo=new P;class Mn{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):jd.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ss.subVectors(t,this.center);const e=Ss.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ss,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(yo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ss.copy(t.center).add(yo)),this.expandByPoint(Ss.copy(t.center).sub(yo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ln=new P,Mo=new P,ur=new P,qn=new P,wo=new P,dr=new P,So=new P;class ir{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ln.copy(this.origin).addScaledVector(this.direction,e),Ln.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Mo.copy(t).add(e).multiplyScalar(.5),ur.copy(e).sub(t).normalize(),qn.copy(this.origin).sub(Mo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(ur),a=qn.dot(this.direction),l=-qn.dot(ur),c=qn.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Mo).addScaledVector(ur,d),f}intersectSphere(t,e){Ln.subVectors(t.center,this.origin);const n=Ln.dot(this.direction),i=Ln.dot(Ln)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Ln)!==null}intersectTriangle(t,e,n,i,r){wo.subVectors(e,t),dr.subVectors(n,t),So.crossVectors(wo,dr);let o=this.direction.dot(So),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;qn.subVectors(this.origin,t);const l=a*this.direction.dot(dr.crossVectors(qn,dr));if(l<0)return null;const c=a*this.direction.dot(wo.cross(qn));if(c<0||l+c>o)return null;const h=-a*qn.dot(So);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class It{constructor(t,e,n,i,r,o,a,l,c,h,u,d,f,g,x,m){It.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,d,f,g,x,m)}set(t,e,n,i,r,o,a,l,c,h,u,d,f,g,x,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new It().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Ui.setFromMatrixColumn(t,0).length(),r=1/Ui.setFromMatrixColumn(t,1).length(),o=1/Ui.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d+x*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d-x*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-x*u}else if(t.order==="XZY"){const d=o*l,f=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(qd,t,$d)}lookAt(t,e,n){const i=this.elements;return Xe.subVectors(t,e),Xe.lengthSq()===0&&(Xe.z=1),Xe.normalize(),$n.crossVectors(n,Xe),$n.lengthSq()===0&&(Math.abs(n.z)===1?Xe.x+=1e-4:Xe.z+=1e-4,Xe.normalize(),$n.crossVectors(n,Xe)),$n.normalize(),fr.crossVectors(Xe,$n),i[0]=$n.x,i[4]=fr.x,i[8]=Xe.x,i[1]=$n.y,i[5]=fr.y,i[9]=Xe.y,i[2]=$n.z,i[6]=fr.z,i[10]=Xe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],M=n[3],v=n[7],_=n[11],L=n[15],R=i[0],T=i[4],D=i[8],b=i[12],w=i[1],I=i[5],W=i[9],B=i[13],V=i[2],G=i[6],Y=i[10],J=i[14],k=i[3],nt=i[7],ut=i[11],dt=i[15];return r[0]=o*R+a*w+l*V+c*k,r[4]=o*T+a*I+l*G+c*nt,r[8]=o*D+a*W+l*Y+c*ut,r[12]=o*b+a*B+l*J+c*dt,r[1]=h*R+u*w+d*V+f*k,r[5]=h*T+u*I+d*G+f*nt,r[9]=h*D+u*W+d*Y+f*ut,r[13]=h*b+u*B+d*J+f*dt,r[2]=g*R+x*w+m*V+p*k,r[6]=g*T+x*I+m*G+p*nt,r[10]=g*D+x*W+m*Y+p*ut,r[14]=g*b+x*B+m*J+p*dt,r[3]=M*R+v*w+_*V+L*k,r[7]=M*T+v*I+_*G+L*nt,r[11]=M*D+v*W+_*Y+L*ut,r[15]=M*b+v*B+_*J+L*dt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*l*u-i*c*u-r*a*d+n*c*d+i*a*f-n*l*f)+x*(+e*l*f-e*c*d+r*o*d-i*o*f+i*c*h-r*l*h)+m*(+e*c*u-e*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+p*(-i*a*h-e*l*u+e*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],M=u*m*c-x*d*c+x*l*f-a*m*f-u*l*p+a*d*p,v=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,_=h*x*c-g*u*c+g*a*f-o*x*f-h*a*p+o*u*p,L=g*u*l-h*x*l-g*a*d+o*x*d+h*a*m-o*u*m,R=e*M+n*v+i*_+r*L;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/R;return t[0]=M*T,t[1]=(x*d*r-u*m*r-x*i*f+n*m*f+u*i*p-n*d*p)*T,t[2]=(a*m*r-x*l*r+x*i*c-n*m*c-a*i*p+n*l*p)*T,t[3]=(u*l*r-a*d*r-u*i*c+n*d*c+a*i*f-n*l*f)*T,t[4]=v*T,t[5]=(h*m*r-g*d*r+g*i*f-e*m*f-h*i*p+e*d*p)*T,t[6]=(g*l*r-o*m*r-g*i*c+e*m*c+o*i*p-e*l*p)*T,t[7]=(o*d*r-h*l*r+h*i*c-e*d*c-o*i*f+e*l*f)*T,t[8]=_*T,t[9]=(g*u*r-h*x*r-g*n*f+e*x*f+h*n*p-e*u*p)*T,t[10]=(o*x*r-g*a*r+g*n*c-e*x*c-o*n*p+e*a*p)*T,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*f-e*a*f)*T,t[12]=L*T,t[13]=(h*x*i-g*u*i+g*n*d-e*x*d-h*n*m+e*u*m)*T,t[14]=(g*a*i-o*x*i-g*n*l+e*x*l+o*n*m-e*a*m)*T,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*d+e*a*d)*T,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,x=o*h,m=o*u,p=a*u,M=l*c,v=l*h,_=l*u,L=n.x,R=n.y,T=n.z;return i[0]=(1-(x+p))*L,i[1]=(f+_)*L,i[2]=(g-v)*L,i[3]=0,i[4]=(f-_)*R,i[5]=(1-(d+p))*R,i[6]=(m+M)*R,i[7]=0,i[8]=(g+v)*T,i[9]=(m-M)*T,i[10]=(1-(d+x))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Ui.set(i[0],i[1],i[2]).length();const o=Ui.set(i[4],i[5],i[6]).length(),a=Ui.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],on.copy(this);const c=1/r,h=1/o,u=1/a;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=h,on.elements[5]*=h,on.elements[6]*=h,on.elements[8]*=u,on.elements[9]*=u,on.elements[10]*=u,e.setFromRotationMatrix(on),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=Bn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let f,g;if(a===Bn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Jr)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Bn){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-r),d=(e+t)*c,f=(n+i)*h;let g,x;if(a===Bn)g=(o+r)*u,x=-2*u;else if(a===Jr)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ui=new P,on=new It,qd=new P(0,0,0),$d=new P(1,1,1),$n=new P,fr=new P,Xe=new P,nc=new It,ic=new ui;class en{constructor(t=0,e=0,n=0,i=en.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Te(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Te(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return nc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(nc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ic.setFromEuler(this),this.setFromQuaternion(ic,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}en.DEFAULT_ORDER="XYZ";class fl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Kd=0;const sc=new P,Oi=new ui,Pn=new It,pr=new P,bs=new P,Zd=new P,Jd=new ui,rc=new P(1,0,0),oc=new P(0,1,0),ac=new P(0,0,1),lc={type:"added"},Qd={type:"removed"},Fi={type:"childadded",child:null},bo={type:"childremoved",child:null};class ge extends gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=tn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ge.DEFAULT_UP.clone();const t=new P,e=new en,n=new ui,i=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new It},normalMatrix:{value:new Wt}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.premultiply(Oi),this}rotateX(t){return this.rotateOnAxis(rc,t)}rotateY(t){return this.rotateOnAxis(oc,t)}rotateZ(t){return this.rotateOnAxis(ac,t)}translateOnAxis(t,e){return sc.copy(t).applyQuaternion(this.quaternion),this.position.add(sc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(rc,t)}translateY(t){return this.translateOnAxis(oc,t)}translateZ(t){return this.translateOnAxis(ac,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?pr.copy(t):pr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(bs,pr,this.up):Pn.lookAt(pr,bs,this.up),this.quaternion.setFromRotationMatrix(Pn),i&&(Pn.extractRotation(i.matrixWorld),Oi.setFromRotationMatrix(Pn),this.quaternion.premultiply(Oi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(lc),Fi.child=t,this.dispatchEvent(Fi),Fi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Qd),bo.child=t,this.dispatchEvent(bo),bo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Pn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Pn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(lc),Fi.child=t,this.dispatchEvent(Fi),Fi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,t,Zd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,Jd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ge.DEFAULT_UP=new P(0,1,0);ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new P,In=new P,To=new P,Dn=new P,Bi=new P,ki=new P,cc=new P,Eo=new P,Ao=new P,Ro=new P,Co=new ee,Lo=new ee,Po=new ee;class Ze{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),an.subVectors(t,e),i.cross(an);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){an.subVectors(i,e),In.subVectors(n,e),To.subVectors(t,e);const o=an.dot(an),a=an.dot(In),l=an.dot(To),c=In.dot(In),h=In.dot(To),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,Dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Dn.x),l.addScaledVector(o,Dn.y),l.addScaledVector(a,Dn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return Co.setScalar(0),Lo.setScalar(0),Po.setScalar(0),Co.fromBufferAttribute(t,e),Lo.fromBufferAttribute(t,n),Po.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Co,r.x),o.addScaledVector(Lo,r.y),o.addScaledVector(Po,r.z),o}static isFrontFacing(t,e,n,i){return an.subVectors(n,e),In.subVectors(t,e),an.cross(In).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return an.subVectors(this.c,this.b),In.subVectors(this.a,this.b),an.cross(In).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ze.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ze.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return Ze.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Ze.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ze.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;Bi.subVectors(i,n),ki.subVectors(r,n),Eo.subVectors(t,n);const l=Bi.dot(Eo),c=ki.dot(Eo);if(l<=0&&c<=0)return e.copy(n);Ao.subVectors(t,i);const h=Bi.dot(Ao),u=ki.dot(Ao);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Bi,o);Ro.subVectors(t,r);const f=Bi.dot(Ro),g=ki.dot(Ro);if(g>=0&&f<=g)return e.copy(r);const x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(ki,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return cc.subVectors(r,i),a=(u-h)/(u-h+(f-g)),e.copy(i).addScaledVector(cc,a);const p=1/(m+x+d);return o=x*p,a=d*p,e.copy(n).addScaledVector(Bi,o).addScaledVector(ki,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Wh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kn={h:0,s:0,l:0},mr={h:0,s:0,l:0};function Io(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Mt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=me){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Zt.workingColorSpace){if(t=dl(t,1),e=Te(e,0,1),n=Te(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Io(o,r,t+1/3),this.g=Io(o,r,t),this.b=Io(o,r,t-1/3)}return Zt.toWorkingColorSpace(this,i),this}setStyle(t,e=me){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=me){const n=Wh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=kn(t.r),this.g=kn(t.g),this.b=kn(t.b),this}copyLinearToSRGB(t){return this.r=ns(t.r),this.g=ns(t.g),this.b=ns(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=me){return Zt.fromWorkingColorSpace(De.copy(this),t),Math.round(Te(De.r*255,0,255))*65536+Math.round(Te(De.g*255,0,255))*256+Math.round(Te(De.b*255,0,255))}getHexString(t=me){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(De.copy(this),e);const n=De.r,i=De.g,r=De.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(De.copy(this),e),t.r=De.r,t.g=De.g,t.b=De.b,t}getStyle(t=me){Zt.fromWorkingColorSpace(De.copy(this),t);const e=De.r,n=De.g,i=De.b;return t!==me?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Kn),this.setHSL(Kn.h+t,Kn.s+e,Kn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Kn),t.getHSL(mr);const n=Hs(Kn.h,mr.h,e),i=Hs(Kn.s,mr.s,e),r=Hs(Kn.l,mr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const De=new Mt;Mt.NAMES=Wh;let tf=0;class hn extends gs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=tn(),this.name="",this.blending=ts,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ra,this.blendDst=oa,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Li,this.stencilZFail=Li,this.stencilZPass=Li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ts&&(n.blending=this.blending),this.side!==zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ra&&(n.blendSrc=this.blendSrc),this.blendDst!==oa&&(n.blendDst=this.blendDst),this.blendEquation!==wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==os&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Li&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Li&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Li&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class le extends hn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=Eh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ye=new P,gr=new Z;class Le{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Va,this.updateRanges=[],this.gpuType=cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)gr.fromBufferAttribute(this,e),gr.applyMatrix3(t),this.setXY(e,gr.x,gr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ln(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=re(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ln(e,this.array)),e}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ln(e,this.array)),e}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ln(e,this.array)),e}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ln(e,this.array)),e}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array),r=re(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Va&&(t.usage=this.usage),t}}class Xh extends Le{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class pl extends Le{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ae extends Le{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ef=0;const qe=new It,Do=new ge,zi=new P,Ye=new dn,Ts=new dn,be=new P;class ve extends gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=tn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hh(t)?pl:Xh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Wt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return qe.makeRotationFromQuaternion(t),this.applyMatrix4(qe),this}rotateX(t){return qe.makeRotationX(t),this.applyMatrix4(qe),this}rotateY(t){return qe.makeRotationY(t),this.applyMatrix4(qe),this}rotateZ(t){return qe.makeRotationZ(t),this.applyMatrix4(qe),this}translate(t,e,n){return qe.makeTranslation(t,e,n),this.applyMatrix4(qe),this}scale(t,e,n){return qe.makeScale(t,e,n),this.applyMatrix4(qe),this}lookAt(t){return Do.lookAt(t),Do.updateMatrix(),this.applyMatrix4(Do.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zi).negate(),this.translate(zi.x,zi.y,zi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ae(n,3))}else{for(let n=0,i=e.count;n<i;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Ye.setFromBufferAttribute(r),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,Ye.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,Ye.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint(Ye.min),this.boundingBox.expandByPoint(Ye.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(Ye.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ts.setFromBufferAttribute(a),this.morphTargetsRelative?(be.addVectors(Ye.min,Ts.min),Ye.expandByPoint(be),be.addVectors(Ye.max,Ts.max),Ye.expandByPoint(be)):(Ye.expandByPoint(Ts.min),Ye.expandByPoint(Ts.max))}Ye.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)be.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(be));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)be.fromBufferAttribute(a,c),l&&(zi.fromBufferAttribute(t,c),be.add(zi)),i=Math.max(i,n.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Le(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<n.count;D++)a[D]=new P,l[D]=new P;const c=new P,h=new P,u=new P,d=new Z,f=new Z,g=new Z,x=new P,m=new P;function p(D,b,w){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,w),d.fromBufferAttribute(r,D),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,w),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(I),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(I),a[D].add(x),a[b].add(x),a[w].add(x),l[D].add(m),l[b].add(m),l[w].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let D=0,b=M.length;D<b;++D){const w=M[D],I=w.start,W=w.count;for(let B=I,V=I+W;B<V;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const v=new P,_=new P,L=new P,R=new P;function T(D){L.fromBufferAttribute(i,D),R.copy(L);const b=a[D];v.copy(b),v.sub(L.multiplyScalar(L.dot(b))).normalize(),_.crossVectors(R,b);const I=_.dot(l[D])<0?-1:1;o.setXYZW(D,v.x,v.y,v.z,I)}for(let D=0,b=M.length;D<b;++D){const w=M[D],I=w.start,W=w.count;for(let B=I,V=I+W;B<V;B+=3)T(t.getX(B+0)),T(t.getX(B+1)),T(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Le(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,u=new P;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)be.fromBufferAttribute(t,e),be.normalize(),t.setXYZ(e,be.x,be.y,be.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Le(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ve,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hc=new It,mi=new ir,xr=new Mn,uc=new P,_r=new P,vr=new P,yr=new P,No=new P,Mr=new P,dc=new P,wr=new P;class Ht extends ge{constructor(t=new ve,e=new le){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Mr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(No.fromBufferAttribute(u,t),o?Mr.addScaledVector(No,h):Mr.addScaledVector(No.sub(e),h))}e.add(Mr)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xr.copy(n.boundingSphere),xr.applyMatrix4(r),mi.copy(t.ray).recast(t.near),!(xr.containsPoint(mi.origin)===!1&&(mi.intersectSphere(xr,uc)===null||mi.origin.distanceToSquared(uc)>(t.far-t.near)**2))&&(hc.copy(r).invert(),mi.copy(t.ray).applyMatrix4(hc),!(n.boundingBox!==null&&mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,mi)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=M,L=v;_<L;_+=3){const R=a.getX(_),T=a.getX(_+1),D=a.getX(_+2);i=Sr(this,p,t,n,c,h,u,R,T,D),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const M=a.getX(m),v=a.getX(m+1),_=a.getX(m+2);i=Sr(this,o,t,n,c,h,u,M,v,_),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=M,L=v;_<L;_+=3){const R=_,T=_+1,D=_+2;i=Sr(this,p,t,n,c,h,u,R,T,D),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const M=m,v=m+1,_=m+2;i=Sr(this,o,t,n,c,h,u,M,v,_),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function nf(s,t,e,n,i,r,o,a){let l;if(t.side===ke?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===zn,a),l===null)return null;wr.copy(a),wr.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(wr);return c<e.near||c>e.far?null:{distance:c,point:wr.clone(),object:s}}function Sr(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,_r),s.getVertexPosition(l,vr),s.getVertexPosition(c,yr);const h=nf(s,t,e,n,_r,vr,yr,dc);if(h){const u=new P;Ze.getBarycoord(dc,_r,vr,yr,u),i&&(h.uv=Ze.getInterpolatedAttribute(i,a,l,c,u,new Z)),r&&(h.uv1=Ze.getInterpolatedAttribute(r,a,l,c,u,new Z)),o&&(h.normal=Ze.getInterpolatedAttribute(o,a,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new P,materialIndex:0};Ze.getNormal(_r,vr,yr,d.normal),h.face=d,h.barycoord=u}return h}class un extends ve{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ae(c,3)),this.setAttribute("normal",new Ae(h,3)),this.setAttribute("uv",new Ae(u,2));function g(x,m,p,M,v,_,L,R,T,D,b){const w=_/T,I=L/D,W=_/2,B=L/2,V=R/2,G=T+1,Y=D+1;let J=0,k=0;const nt=new P;for(let ut=0;ut<Y;ut++){const dt=ut*I-B;for(let Nt=0;Nt<G;Nt++){const $t=Nt*w-W;nt[x]=$t*M,nt[m]=dt*v,nt[p]=V,c.push(nt.x,nt.y,nt.z),nt[x]=0,nt[m]=0,nt[p]=R>0?1:-1,h.push(nt.x,nt.y,nt.z),u.push(Nt/T),u.push(1-ut/D),J+=1}}for(let ut=0;ut<D;ut++)for(let dt=0;dt<T;dt++){const Nt=d+dt+G*ut,$t=d+dt+G*(ut+1),q=d+(dt+1)+G*(ut+1),rt=d+(dt+1)+G*ut;l.push(Nt,$t,rt),l.push($t,q,rt),k+=6}a.addGroup(f,k,b),f+=k,d+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new un(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ds(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Fe(s){const t={};for(let e=0;e<s.length;e++){const n=ds(s[e]);for(const i in n)t[i]=n[i]}return t}function sf(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Yh(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const rf={clone:ds,merge:Fe};var of=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,af=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class li extends hn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=of,this.fragmentShader=af,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ds(t.uniforms),this.uniformsGroups=sf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class jh extends ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=Bn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zn=new P,fc=new Z,pc=new Z;class Be extends jh{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=us*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(zs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return us*2*Math.atan(Math.tan(zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Zn.x,Zn.y).multiplyScalar(-t/Zn.z),Zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zn.x,Zn.y).multiplyScalar(-t/Zn.z)}getViewSize(t,e){return this.getViewBounds(t,fc,pc),e.subVectors(pc,fc)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(zs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Hi=-90,Gi=1;class lf extends ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Be(Hi,Gi,t,e);i.layers=this.layers,this.add(i);const r=new Be(Hi,Gi,t,e);r.layers=this.layers,this.add(r);const o=new Be(Hi,Gi,t,e);o.layers=this.layers,this.add(o);const a=new Be(Hi,Gi,t,e);a.layers=this.layers,this.add(a);const l=new Be(Hi,Gi,t,e);l.layers=this.layers,this.add(l);const c=new Be(Hi,Gi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Bn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Jr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class qh extends Me{constructor(t,e,n,i,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:as,super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class cf extends ai{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new qh(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ne}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new un(5,5,5),r=new li({name:"CubemapFromEquirect",uniforms:ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ke,blending:si});r.uniforms.tEquirect.value=e;const o=new Ht(i,r),a=e.minFilter;return e.minFilter===xn&&(e.minFilter=Ne),new lf(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const Uo=new P,hf=new P,uf=new Wt;class Qn{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Uo.subVectors(n,e).cross(hf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Uo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||uf.getNormalMatrix(t),i=this.coplanarPoint(Uo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gi=new Mn,br=new P;class ml{constructor(t=new Qn,e=new Qn,n=new Qn,i=new Qn,r=new Qn,o=new Qn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Bn){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],x=i[10],m=i[11],p=i[12],M=i[13],v=i[14],_=i[15];if(n[0].setComponents(l-r,d-c,m-f,_-p).normalize(),n[1].setComponents(l+r,d+c,m+f,_+p).normalize(),n[2].setComponents(l+o,d+h,m+g,_+M).normalize(),n[3].setComponents(l-o,d-h,m-g,_-M).normalize(),n[4].setComponents(l-a,d-u,m-x,_-v).normalize(),e===Bn)n[5].setComponents(l+a,d+u,m+x,_+v).normalize();else if(e===Jr)n[5].setComponents(a,u,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(t){return gi.center.set(0,0,0),gi.radius=.7071067811865476,gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(br.x=i.normal.x>0?t.max.x:t.min.x,br.y=i.normal.y>0?t.max.y:t.min.y,br.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(br)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $h(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function df(s){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const x=u[f];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}class Ve extends ve{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){const M=p*d-o;for(let v=0;v<c;v++){const _=v*u-r;g.push(_,-M,0),x.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const v=M+c*p,_=M+c*(p+1),L=M+1+c*(p+1),R=M+1+c*p;f.push(v,_,R),f.push(_,L,R)}this.setIndex(f),this.setAttribute("position",new Ae(g,3)),this.setAttribute("normal",new Ae(x,3)),this.setAttribute("uv",new Ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ve(t.width,t.height,t.widthSegments,t.heightSegments)}}var ff=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,mf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_f=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,wf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ef=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Af=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,If=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Df=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Uf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Of=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ff=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Bf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,kf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Yf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,qf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$f=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Kf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ep=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,np=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ip=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,rp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,op=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ap=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,up=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,dp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,pp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_p=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,wp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ep=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ap=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Cp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Pp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ip=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Np=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Up=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Op=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Gp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,$p=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Kp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Zp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Jp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,tm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,em=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,nm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,im=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,om=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,am=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,um=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_m=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,vm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ym=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Mm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Em=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Am=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Pm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Im=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Dm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Nm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Um=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Om=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Fm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,km=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Hm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Yt={alphahash_fragment:ff,alphahash_pars_fragment:pf,alphamap_fragment:mf,alphamap_pars_fragment:gf,alphatest_fragment:xf,alphatest_pars_fragment:_f,aomap_fragment:vf,aomap_pars_fragment:yf,batching_pars_vertex:Mf,batching_vertex:wf,begin_vertex:Sf,beginnormal_vertex:bf,bsdfs:Tf,iridescence_fragment:Ef,bumpmap_pars_fragment:Af,clipping_planes_fragment:Rf,clipping_planes_pars_fragment:Cf,clipping_planes_pars_vertex:Lf,clipping_planes_vertex:Pf,color_fragment:If,color_pars_fragment:Df,color_pars_vertex:Nf,color_vertex:Uf,common:Of,cube_uv_reflection_fragment:Ff,defaultnormal_vertex:Bf,displacementmap_pars_vertex:kf,displacementmap_vertex:zf,emissivemap_fragment:Hf,emissivemap_pars_fragment:Gf,colorspace_fragment:Vf,colorspace_pars_fragment:Wf,envmap_fragment:Xf,envmap_common_pars_fragment:Yf,envmap_pars_fragment:jf,envmap_pars_vertex:qf,envmap_physical_pars_fragment:rp,envmap_vertex:$f,fog_vertex:Kf,fog_pars_vertex:Zf,fog_fragment:Jf,fog_pars_fragment:Qf,gradientmap_pars_fragment:tp,lightmap_pars_fragment:ep,lights_lambert_fragment:np,lights_lambert_pars_fragment:ip,lights_pars_begin:sp,lights_toon_fragment:op,lights_toon_pars_fragment:ap,lights_phong_fragment:lp,lights_phong_pars_fragment:cp,lights_physical_fragment:hp,lights_physical_pars_fragment:up,lights_fragment_begin:dp,lights_fragment_maps:fp,lights_fragment_end:pp,logdepthbuf_fragment:mp,logdepthbuf_pars_fragment:gp,logdepthbuf_pars_vertex:xp,logdepthbuf_vertex:_p,map_fragment:vp,map_pars_fragment:yp,map_particle_fragment:Mp,map_particle_pars_fragment:wp,metalnessmap_fragment:Sp,metalnessmap_pars_fragment:bp,morphinstance_vertex:Tp,morphcolor_vertex:Ep,morphnormal_vertex:Ap,morphtarget_pars_vertex:Rp,morphtarget_vertex:Cp,normal_fragment_begin:Lp,normal_fragment_maps:Pp,normal_pars_fragment:Ip,normal_pars_vertex:Dp,normal_vertex:Np,normalmap_pars_fragment:Up,clearcoat_normal_fragment_begin:Op,clearcoat_normal_fragment_maps:Fp,clearcoat_pars_fragment:Bp,iridescence_pars_fragment:kp,opaque_fragment:zp,packing:Hp,premultiplied_alpha_fragment:Gp,project_vertex:Vp,dithering_fragment:Wp,dithering_pars_fragment:Xp,roughnessmap_fragment:Yp,roughnessmap_pars_fragment:jp,shadowmap_pars_fragment:qp,shadowmap_pars_vertex:$p,shadowmap_vertex:Kp,shadowmask_pars_fragment:Zp,skinbase_vertex:Jp,skinning_pars_vertex:Qp,skinning_vertex:tm,skinnormal_vertex:em,specularmap_fragment:nm,specularmap_pars_fragment:im,tonemapping_fragment:sm,tonemapping_pars_fragment:rm,transmission_fragment:om,transmission_pars_fragment:am,uv_pars_fragment:lm,uv_pars_vertex:cm,uv_vertex:hm,worldpos_vertex:um,background_vert:dm,background_frag:fm,backgroundCube_vert:pm,backgroundCube_frag:mm,cube_vert:gm,cube_frag:xm,depth_vert:_m,depth_frag:vm,distanceRGBA_vert:ym,distanceRGBA_frag:Mm,equirect_vert:wm,equirect_frag:Sm,linedashed_vert:bm,linedashed_frag:Tm,meshbasic_vert:Em,meshbasic_frag:Am,meshlambert_vert:Rm,meshlambert_frag:Cm,meshmatcap_vert:Lm,meshmatcap_frag:Pm,meshnormal_vert:Im,meshnormal_frag:Dm,meshphong_vert:Nm,meshphong_frag:Um,meshphysical_vert:Om,meshphysical_frag:Fm,meshtoon_vert:Bm,meshtoon_frag:km,points_vert:zm,points_frag:Hm,shadow_vert:Gm,shadow_frag:Vm,sprite_vert:Wm,sprite_frag:Xm},ht={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new Z(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new Z(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},mn={basic:{uniforms:Fe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:Fe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Mt(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:Fe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:Fe([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:Fe([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new Mt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:Fe([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:Fe([ht.points,ht.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:Fe([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:Fe([ht.common,ht.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:Fe([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:Fe([ht.sprite,ht.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:Fe([ht.common,ht.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:Fe([ht.lights,ht.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};mn.physical={uniforms:Fe([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new Z(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new Z},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new Z},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const Tr={r:0,b:0,g:0},xi=new en,Ym=new It;function jm(s,t,e,n,i,r,o){const a=new Mt(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?e:t).get(v)),v}function x(M){let v=!1;const _=g(M);_===null?p(a,l):_&&_.isColor&&(p(_,1),v=!0);const L=s.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(M,v){const _=g(v);_&&(_.isCubeTexture||_.mapping===ro)?(h===void 0&&(h=new Ht(new un(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:ds(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:ke,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,R,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),xi.copy(v.backgroundRotation),xi.x*=-1,xi.y*=-1,xi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ym.makeRotationFromEuler(xi)),h.material.toneMapped=Zt.getTransfer(_.colorSpace)!==ae,(u!==_||d!==_.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=s.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Ht(new Ve(2,2),new li({name:"BackgroundMaterial",uniforms:ds(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Zt.getTransfer(_.colorSpace)!==ae,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,f=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,v){M.getRGB(Tr,Yh(s)),n.buffers.color.setClear(Tr.r,Tr.g,Tr.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(M,v=1){a.set(M),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:x,addToRenderList:m}}function qm(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(w,I,W,B,V){let G=!1;const Y=u(B,W,I);r!==Y&&(r=Y,c(r.object)),G=f(w,B,W,V),G&&g(w,B,W,V),V!==null&&t.update(V,s.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,_(w,I,W,B),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return s.createVertexArray()}function c(w){return s.bindVertexArray(w)}function h(w){return s.deleteVertexArray(w)}function u(w,I,W){const B=W.wireframe===!0;let V=n[w.id];V===void 0&&(V={},n[w.id]=V);let G=V[I.id];G===void 0&&(G={},V[I.id]=G);let Y=G[B];return Y===void 0&&(Y=d(l()),G[B]=Y),Y}function d(w){const I=[],W=[],B=[];for(let V=0;V<e;V++)I[V]=0,W[V]=0,B[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:W,attributeDivisors:B,object:w,attributes:{},index:null}}function f(w,I,W,B){const V=r.attributes,G=I.attributes;let Y=0;const J=W.getAttributes();for(const k in J)if(J[k].location>=0){const ut=V[k];let dt=G[k];if(dt===void 0&&(k==="instanceMatrix"&&w.instanceMatrix&&(dt=w.instanceMatrix),k==="instanceColor"&&w.instanceColor&&(dt=w.instanceColor)),ut===void 0||ut.attribute!==dt||dt&&ut.data!==dt.data)return!0;Y++}return r.attributesNum!==Y||r.index!==B}function g(w,I,W,B){const V={},G=I.attributes;let Y=0;const J=W.getAttributes();for(const k in J)if(J[k].location>=0){let ut=G[k];ut===void 0&&(k==="instanceMatrix"&&w.instanceMatrix&&(ut=w.instanceMatrix),k==="instanceColor"&&w.instanceColor&&(ut=w.instanceColor));const dt={};dt.attribute=ut,ut&&ut.data&&(dt.data=ut.data),V[k]=dt,Y++}r.attributes=V,r.attributesNum=Y,r.index=B}function x(){const w=r.newAttributes;for(let I=0,W=w.length;I<W;I++)w[I]=0}function m(w){p(w,0)}function p(w,I){const W=r.newAttributes,B=r.enabledAttributes,V=r.attributeDivisors;W[w]=1,B[w]===0&&(s.enableVertexAttribArray(w),B[w]=1),V[w]!==I&&(s.vertexAttribDivisor(w,I),V[w]=I)}function M(){const w=r.newAttributes,I=r.enabledAttributes;for(let W=0,B=I.length;W<B;W++)I[W]!==w[W]&&(s.disableVertexAttribArray(W),I[W]=0)}function v(w,I,W,B,V,G,Y){Y===!0?s.vertexAttribIPointer(w,I,W,V,G):s.vertexAttribPointer(w,I,W,B,V,G)}function _(w,I,W,B){x();const V=B.attributes,G=W.getAttributes(),Y=I.defaultAttributeValues;for(const J in G){const k=G[J];if(k.location>=0){let nt=V[J];if(nt===void 0&&(J==="instanceMatrix"&&w.instanceMatrix&&(nt=w.instanceMatrix),J==="instanceColor"&&w.instanceColor&&(nt=w.instanceColor)),nt!==void 0){const ut=nt.normalized,dt=nt.itemSize,Nt=t.get(nt);if(Nt===void 0)continue;const $t=Nt.buffer,q=Nt.type,rt=Nt.bytesPerElement,xt=q===s.INT||q===s.UNSIGNED_INT||nt.gpuType===rl;if(nt.isInterleavedBufferAttribute){const lt=nt.data,Pt=lt.stride,Bt=nt.offset;if(lt.isInstancedInterleavedBuffer){for(let Dt=0;Dt<k.locationSize;Dt++)p(k.location+Dt,lt.meshPerAttribute);w.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Dt=0;Dt<k.locationSize;Dt++)m(k.location+Dt);s.bindBuffer(s.ARRAY_BUFFER,$t);for(let Dt=0;Dt<k.locationSize;Dt++)v(k.location+Dt,dt/k.locationSize,q,ut,Pt*rt,(Bt+dt/k.locationSize*Dt)*rt,xt)}else{if(nt.isInstancedBufferAttribute){for(let lt=0;lt<k.locationSize;lt++)p(k.location+lt,nt.meshPerAttribute);w.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let lt=0;lt<k.locationSize;lt++)m(k.location+lt);s.bindBuffer(s.ARRAY_BUFFER,$t);for(let lt=0;lt<k.locationSize;lt++)v(k.location+lt,dt/k.locationSize,q,ut,dt*rt,dt/k.locationSize*lt*rt,xt)}}else if(Y!==void 0){const ut=Y[J];if(ut!==void 0)switch(ut.length){case 2:s.vertexAttrib2fv(k.location,ut);break;case 3:s.vertexAttrib3fv(k.location,ut);break;case 4:s.vertexAttrib4fv(k.location,ut);break;default:s.vertexAttrib1fv(k.location,ut)}}}}M()}function L(){D();for(const w in n){const I=n[w];for(const W in I){const B=I[W];for(const V in B)h(B[V].object),delete B[V];delete I[W]}delete n[w]}}function R(w){if(n[w.id]===void 0)return;const I=n[w.id];for(const W in I){const B=I[W];for(const V in B)h(B[V].object),delete B[V];delete I[W]}delete n[w.id]}function T(w){for(const I in n){const W=n[I];if(W[w.id]===void 0)continue;const B=W[w.id];for(const V in B)h(B[V].object),delete B[V];delete W[w.id]}}function D(){b(),o=!0,r!==i&&(r=i,c(r.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:D,resetDefaultState:b,dispose:L,releaseStatesOfGeometry:R,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function $m(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Km(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==Je&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const D=T===nr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Hn&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==cn&&!D)}function l(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,R=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:L,maxSamples:R}}function Zm(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new Qn,a=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const M=r?0:n,v=M*4;let _=p.clippingState||null;l.value=_,_=h(g,d,v,f);for(let L=0;L!==v;++L)_[L]=e[L];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const p=f+x*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,_=f;v!==x;++v,_+=4)o.copy(u[v]).applyMatrix4(M,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Jm(s){let t=new WeakMap;function e(o,a){return a===pa?o.mapping=as:a===ma&&(o.mapping=ls),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===pa||a===ma)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new cf(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class ao extends jh{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Zi=4,mc=[.125,.215,.35,.446,.526,.582],Si=20,Oo=new ao,gc=new Mt;let Fo=null,Bo=0,ko=0,zo=!1;const yi=(1+Math.sqrt(5))/2,Vi=1/yi,xc=[new P(-yi,Vi,0),new P(yi,Vi,0),new P(-Vi,0,yi),new P(Vi,0,yi),new P(0,yi,-Vi),new P(0,yi,Vi),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class _c{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Fo=this._renderer.getRenderTarget(),Bo=this._renderer.getActiveCubeFace(),ko=this._renderer.getActiveMipmapLevel(),zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Fo,Bo,ko),this._renderer.xr.enabled=zo,t.scissorTest=!1,Er(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===as||t.mapping===ls?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fo=this._renderer.getRenderTarget(),Bo=this._renderer.getActiveCubeFace(),ko=this._renderer.getActiveMipmapLevel(),zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ne,minFilter:Ne,generateMipmaps:!1,type:nr,format:Je,colorSpace:Ue,depthBuffer:!1},i=vc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qm(r)),this._blurMaterial=tg(r,t,e)}return i}_compileMaterial(t){const e=new Ht(this._lodPlanes[0],t);this._renderer.compile(e,Oo)}_sceneToCubeUV(t,e,n,i){const a=new Be(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(gc),h.toneMapping=ri,h.autoClear=!1;const f=new le({name:"PMREM.Background",side:ke,depthWrite:!1,depthTest:!1}),g=new Ht(new un,f);let x=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,x=!0):(f.color.copy(gc),x=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):M===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const v=this._cubeSize;Er(i,M*v,p>2?v:0,v,v),h.setRenderTarget(i),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===as||t.mapping===ls;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yc());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Ht(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Er(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Oo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=xc[(i-r-1)%xc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ht(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Si-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Si;m>Si&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Si}`);const p=[];let M=0;for(let T=0;T<Si;++T){const D=T/x,b=Math.exp(-D*D/2);p.push(b),T===0?M+=b:T<m&&(M+=2*b)}for(let T=0;T<p.length;T++)p[T]=p[T]/M;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const _=this._sizeLods[i],L=3*_*(i>v-Zi?i-v+Zi:0),R=4*(this._cubeSize-_);Er(e,L,R,3*_,2*_),l.setRenderTarget(e),l.render(u,Oo)}}function Qm(s){const t=[],e=[],n=[];let i=s;const r=s-Zi+1+mc.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-Zi?l=mc[o-s+Zi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,M=new Float32Array(x*g*f),v=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let R=0;R<f;R++){const T=R%3*2/3-1,D=R>2?0:-1,b=[T,D,0,T+2/3,D,0,T+2/3,D+1,0,T,D,0,T+2/3,D+1,0,T,D+1,0];M.set(b,x*g*R),v.set(d,m*g*R);const w=[R,R,R,R,R,R];_.set(w,p*g*R)}const L=new ve;L.setAttribute("position",new Le(M,x)),L.setAttribute("uv",new Le(v,m)),L.setAttribute("faceIndex",new Le(_,p)),t.push(L),i>Zi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function vc(s,t,e){const n=new ai(s,t,e);return n.texture.mapping=ro,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Er(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function tg(s,t,e){const n=new Float32Array(Si),i=new P(0,1,0);return new li({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function yc(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Mc(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function gl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function eg(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===pa||l===ma,h=l===as||l===ls;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new _c(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new _c(s)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function ng(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Os("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function ig(s,t,e,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],s.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const x=f[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],s.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let x=0;if(f!==null){const M=f.array;x=f.version;for(let v=0,_=M.length;v<_;v+=3){const L=M[v+0],R=M[v+1],T=M[v+2];d.push(L,R,R,T,T,L)}}else if(g!==void 0){const M=g.array;x=g.version;for(let v=0,_=M.length/3-1;v<_;v+=3){const L=v+0,R=v+1,T=v+2;d.push(L,R,R,T,T,L)}}else return;const m=new(Hh(d)?pl:Xh)(d,1);m.version=x;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function sg(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let p=0;for(let M=0;M<g;M++)p+=f[M]*x[M];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function rg(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function og(s,t,e){const n=new WeakMap,i=new ee;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let w=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",w)};var f=w;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),x===!0&&(_=2),m===!0&&(_=3);let L=a.attributes.position.count*_,R=1;L>t.maxTextureSize&&(R=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const T=new Float32Array(L*R*4*u),D=new Vh(T,L,R,u);D.type=cn,D.needsUpdate=!0;const b=_*4;for(let I=0;I<u;I++){const W=p[I],B=M[I],V=v[I],G=L*R*4*I;for(let Y=0;Y<W.count;Y++){const J=Y*b;g===!0&&(i.fromBufferAttribute(W,Y),T[G+J+0]=i.x,T[G+J+1]=i.y,T[G+J+2]=i.z,T[G+J+3]=0),x===!0&&(i.fromBufferAttribute(B,Y),T[G+J+4]=i.x,T[G+J+5]=i.y,T[G+J+6]=i.z,T[G+J+7]=0),m===!0&&(i.fromBufferAttribute(V,Y),T[G+J+8]=i.x,T[G+J+9]=i.y,T[G+J+10]=i.z,T[G+J+11]=V.itemSize===4?i.w:1)}}d={count:u,texture:D,size:new Z(L,R)},n.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",x),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function ag(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Kh extends Me{constructor(t,e,n,i,r,o,a,l,c,h=es){if(h!==es&&h!==hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===es&&(n=Ti),n===void 0&&h===hs&&(n=cs),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ze,this.minFilter=l!==void 0?l:ze,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Zh=new Me,wc=new Kh(1,1),Jh=new Vh,Qh=new Yd,tu=new qh,Sc=[],bc=[],Tc=new Float32Array(16),Ec=new Float32Array(9),Ac=new Float32Array(4);function xs(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Sc[i];if(r===void 0&&(r=new Float32Array(i),Sc[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function we(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Se(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function lo(s,t){let e=bc[t];e===void 0&&(e=new Int32Array(t),bc[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function lg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function cg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;s.uniform2fv(this.addr,t),Se(e,t)}}function hg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(we(e,t))return;s.uniform3fv(this.addr,t),Se(e,t)}}function ug(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;s.uniform4fv(this.addr,t),Se(e,t)}}function dg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Se(e,t)}else{if(we(e,n))return;Ac.set(n),s.uniformMatrix2fv(this.addr,!1,Ac),Se(e,n)}}function fg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Se(e,t)}else{if(we(e,n))return;Ec.set(n),s.uniformMatrix3fv(this.addr,!1,Ec),Se(e,n)}}function pg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Se(e,t)}else{if(we(e,n))return;Tc.set(n),s.uniformMatrix4fv(this.addr,!1,Tc),Se(e,n)}}function mg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function gg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;s.uniform2iv(this.addr,t),Se(e,t)}}function xg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;s.uniform3iv(this.addr,t),Se(e,t)}}function _g(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;s.uniform4iv(this.addr,t),Se(e,t)}}function vg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function yg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;s.uniform2uiv(this.addr,t),Se(e,t)}}function Mg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;s.uniform3uiv(this.addr,t),Se(e,t)}}function wg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;s.uniform4uiv(this.addr,t),Se(e,t)}}function Sg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(wc.compareFunction=zh,r=wc):r=Zh,e.setTexture2D(t||r,i)}function bg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Qh,i)}function Tg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||tu,i)}function Eg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Jh,i)}function Ag(s){switch(s){case 5126:return lg;case 35664:return cg;case 35665:return hg;case 35666:return ug;case 35674:return dg;case 35675:return fg;case 35676:return pg;case 5124:case 35670:return mg;case 35667:case 35671:return gg;case 35668:case 35672:return xg;case 35669:case 35673:return _g;case 5125:return vg;case 36294:return yg;case 36295:return Mg;case 36296:return wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Sg;case 35679:case 36299:case 36307:return bg;case 35680:case 36300:case 36308:case 36293:return Tg;case 36289:case 36303:case 36311:case 36292:return Eg}}function Rg(s,t){s.uniform1fv(this.addr,t)}function Cg(s,t){const e=xs(t,this.size,2);s.uniform2fv(this.addr,e)}function Lg(s,t){const e=xs(t,this.size,3);s.uniform3fv(this.addr,e)}function Pg(s,t){const e=xs(t,this.size,4);s.uniform4fv(this.addr,e)}function Ig(s,t){const e=xs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Dg(s,t){const e=xs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Ng(s,t){const e=xs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Ug(s,t){s.uniform1iv(this.addr,t)}function Og(s,t){s.uniform2iv(this.addr,t)}function Fg(s,t){s.uniform3iv(this.addr,t)}function Bg(s,t){s.uniform4iv(this.addr,t)}function kg(s,t){s.uniform1uiv(this.addr,t)}function zg(s,t){s.uniform2uiv(this.addr,t)}function Hg(s,t){s.uniform3uiv(this.addr,t)}function Gg(s,t){s.uniform4uiv(this.addr,t)}function Vg(s,t,e){const n=this.cache,i=t.length,r=lo(e,i);we(n,r)||(s.uniform1iv(this.addr,r),Se(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Zh,r[o])}function Wg(s,t,e){const n=this.cache,i=t.length,r=lo(e,i);we(n,r)||(s.uniform1iv(this.addr,r),Se(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Qh,r[o])}function Xg(s,t,e){const n=this.cache,i=t.length,r=lo(e,i);we(n,r)||(s.uniform1iv(this.addr,r),Se(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||tu,r[o])}function Yg(s,t,e){const n=this.cache,i=t.length,r=lo(e,i);we(n,r)||(s.uniform1iv(this.addr,r),Se(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Jh,r[o])}function jg(s){switch(s){case 5126:return Rg;case 35664:return Cg;case 35665:return Lg;case 35666:return Pg;case 35674:return Ig;case 35675:return Dg;case 35676:return Ng;case 5124:case 35670:return Ug;case 35667:case 35671:return Og;case 35668:case 35672:return Fg;case 35669:case 35673:return Bg;case 5125:return kg;case 36294:return zg;case 36295:return Hg;case 36296:return Gg;case 35678:case 36198:case 36298:case 36306:case 35682:return Vg;case 35679:case 36299:case 36307:return Wg;case 35680:case 36300:case 36308:case 36293:return Xg;case 36289:case 36303:case 36311:case 36292:return Yg}}class qg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ag(e.type)}}class $g{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=jg(e.type)}}class Kg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const Ho=/(\w+)(\])?(\[|\.)?/g;function Rc(s,t){s.seq.push(t),s.map[t.id]=t}function Zg(s,t,e){const n=s.name,i=n.length;for(Ho.lastIndex=0;;){const r=Ho.exec(n),o=Ho.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Rc(e,c===void 0?new qg(a,s,t):new $g(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Kg(a),Rc(e,u)),e=u}}}class Kr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);Zg(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Cc(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Jg=37297;let Qg=0;function t0(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Lc=new Wt;function e0(s){Zt._getMatrix(Lc,Zt.workingColorSpace,s);const t=`mat3( ${Lc.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(s)){case oo:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Pc(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+t0(s.getShaderSource(t),o)}else return i}function n0(s,t){const e=e0(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function i0(s,t){let e;switch(t){case nd:e="Linear";break;case id:e="Reinhard";break;case sd:e="Cineon";break;case rd:e="ACESFilmic";break;case ad:e="AgX";break;case ld:e="Neutral";break;case od:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ar=new P;function s0(){Zt.getLuminanceCoefficients(Ar);const s=Ar.x.toFixed(4),t=Ar.y.toFixed(4),e=Ar.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function r0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fs).join(`
`)}function o0(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function a0(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Fs(s){return s!==""}function Ic(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Dc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const l0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wa(s){return s.replace(l0,h0)}const c0=new Map;function h0(s,t){let e=Yt[t];if(e===void 0){const n=c0.get(t);if(n!==void 0)e=Yt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Wa(e)}const u0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nc(s){return s.replace(u0,d0)}function d0(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Uc(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function f0(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Th?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Uu?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===On&&(t="SHADOWMAP_TYPE_VSM"),t}function p0(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case as:case ls:t="ENVMAP_TYPE_CUBE";break;case ro:t="ENVMAP_TYPE_CUBE_UV";break}return t}function m0(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ls:t="ENVMAP_MODE_REFRACTION";break}return t}function g0(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Eh:t="ENVMAP_BLENDING_MULTIPLY";break;case td:t="ENVMAP_BLENDING_MIX";break;case ed:t="ENVMAP_BLENDING_ADD";break}return t}function x0(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function _0(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=f0(e),c=p0(e),h=m0(e),u=g0(e),d=x0(e),f=r0(e),g=o0(r),x=i.createProgram();let m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Fs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Fs).join(`
`),p.length>0&&(p+=`
`)):(m=[Uc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fs).join(`
`),p=[Uc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ri?"#define TONE_MAPPING":"",e.toneMapping!==ri?Yt.tonemapping_pars_fragment:"",e.toneMapping!==ri?i0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,n0("linearToOutputTexel",e.outputColorSpace),s0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Fs).join(`
`)),o=Wa(o),o=Ic(o,e),o=Dc(o,e),a=Wa(a),a=Ic(a,e),a=Dc(a,e),o=Nc(o),a=Nc(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=M+m+o,_=M+p+a,L=Cc(i,i.VERTEX_SHADER,v),R=Cc(i,i.FRAGMENT_SHADER,_);i.attachShader(x,L),i.attachShader(x,R),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function T(I){if(s.debug.checkShaderErrors){const W=i.getProgramInfoLog(x).trim(),B=i.getShaderInfoLog(L).trim(),V=i.getShaderInfoLog(R).trim();let G=!0,Y=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(G=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,L,R);else{const J=Pc(i,L,"vertex"),k=Pc(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+W+`
`+J+`
`+k)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(B===""||V==="")&&(Y=!1);Y&&(I.diagnostics={runnable:G,programLog:W,vertexShader:{log:B,prefix:m},fragmentShader:{log:V,prefix:p}})}i.deleteShader(L),i.deleteShader(R),D=new Kr(i,x),b=a0(i,x)}let D;this.getUniforms=function(){return D===void 0&&T(this),D};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=i.getProgramParameter(x,Jg)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Qg++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=L,this.fragmentShader=R,this}let v0=0;class y0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new M0(t),e.set(t,n)),n}}class M0{constructor(t){this.id=v0++,this.code=t,this.usedTimes=0}}function w0(s,t,e,n,i,r,o){const a=new fl,l=new y0,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,w,I,W,B){const V=W.fog,G=B.geometry,Y=b.isMeshStandardMaterial?W.environment:null,J=(b.isMeshStandardMaterial?e:t).get(b.envMap||Y),k=J&&J.mapping===ro?J.image.height:null,nt=g[b.type];b.precision!==null&&(f=i.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const ut=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,dt=ut!==void 0?ut.length:0;let Nt=0;G.morphAttributes.position!==void 0&&(Nt=1),G.morphAttributes.normal!==void 0&&(Nt=2),G.morphAttributes.color!==void 0&&(Nt=3);let $t,q,rt,xt;if(nt){const se=mn[nt];$t=se.vertexShader,q=se.fragmentShader}else $t=b.vertexShader,q=b.fragmentShader,l.update(b),rt=l.getVertexShaderID(b),xt=l.getFragmentShaderID(b);const lt=s.getRenderTarget(),Pt=s.state.buffers.depth.getReversed(),Bt=B.isInstancedMesh===!0,Dt=B.isBatchedMesh===!0,jt=!!b.map,tt=!!b.matcap,ot=!!J,C=!!b.aoMap,Ct=!!b.lightMap,it=!!b.bumpMap,wt=!!b.normalMap,ct=!!b.displacementMap,Ut=!!b.emissiveMap,vt=!!b.metalnessMap,E=!!b.roughnessMap,y=b.anisotropy>0,F=b.clearcoat>0,$=b.dispersion>0,et=b.iridescence>0,K=b.sheen>0,Tt=b.transmission>0,ft=y&&!!b.anisotropyMap,yt=F&&!!b.clearcoatMap,Kt=F&&!!b.clearcoatNormalMap,st=F&&!!b.clearcoatRoughnessMap,St=et&&!!b.iridescenceMap,Ot=et&&!!b.iridescenceThicknessMap,kt=K&&!!b.sheenColorMap,bt=K&&!!b.sheenRoughnessMap,Jt=!!b.specularMap,Xt=!!b.specularColorMap,ce=!!b.specularIntensityMap,N=Tt&&!!b.transmissionMap,pt=Tt&&!!b.thicknessMap,j=!!b.gradientMap,Q=!!b.alphaMap,_t=b.alphaTest>0,mt=!!b.alphaHash,Gt=!!b.extensions;let _e=ri;b.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(_e=s.toneMapping);const Pe={shaderID:nt,shaderType:b.type,shaderName:b.name,vertexShader:$t,fragmentShader:q,defines:b.defines,customVertexShaderID:rt,customFragmentShaderID:xt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Dt,batchingColor:Dt&&B._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&B.instanceColor!==null,instancingMorph:Bt&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:lt===null?s.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Ue,alphaToCoverage:!!b.alphaToCoverage,map:jt,matcap:tt,envMap:ot,envMapMode:ot&&J.mapping,envMapCubeUVHeight:k,aoMap:C,lightMap:Ct,bumpMap:it,normalMap:wt,displacementMap:d&&ct,emissiveMap:Ut,normalMapObjectSpace:wt&&b.normalMapType===pd,normalMapTangentSpace:wt&&b.normalMapType===kh,metalnessMap:vt,roughnessMap:E,anisotropy:y,anisotropyMap:ft,clearcoat:F,clearcoatMap:yt,clearcoatNormalMap:Kt,clearcoatRoughnessMap:st,dispersion:$,iridescence:et,iridescenceMap:St,iridescenceThicknessMap:Ot,sheen:K,sheenColorMap:kt,sheenRoughnessMap:bt,specularMap:Jt,specularColorMap:Xt,specularIntensityMap:ce,transmission:Tt,transmissionMap:N,thicknessMap:pt,gradientMap:j,opaque:b.transparent===!1&&b.blending===ts&&b.alphaToCoverage===!1,alphaMap:Q,alphaTest:_t,alphaHash:mt,combine:b.combine,mapUv:jt&&x(b.map.channel),aoMapUv:C&&x(b.aoMap.channel),lightMapUv:Ct&&x(b.lightMap.channel),bumpMapUv:it&&x(b.bumpMap.channel),normalMapUv:wt&&x(b.normalMap.channel),displacementMapUv:ct&&x(b.displacementMap.channel),emissiveMapUv:Ut&&x(b.emissiveMap.channel),metalnessMapUv:vt&&x(b.metalnessMap.channel),roughnessMapUv:E&&x(b.roughnessMap.channel),anisotropyMapUv:ft&&x(b.anisotropyMap.channel),clearcoatMapUv:yt&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:Kt&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:bt&&x(b.sheenRoughnessMap.channel),specularMapUv:Jt&&x(b.specularMap.channel),specularColorMapUv:Xt&&x(b.specularColorMap.channel),specularIntensityMapUv:ce&&x(b.specularIntensityMap.channel),transmissionMapUv:N&&x(b.transmissionMap.channel),thicknessMapUv:pt&&x(b.thicknessMap.channel),alphaMapUv:Q&&x(b.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(wt||y),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!G.attributes.uv&&(jt||Q),fog:!!V,useFog:b.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Pt,skinning:B.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:Nt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:_e,decodeVideoTexture:jt&&b.map.isVideoTexture===!0&&Zt.getTransfer(b.map.colorSpace)===ae,decodeVideoTextureEmissive:Ut&&b.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(b.emissiveMap.colorSpace)===ae,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ce,flipSided:b.side===ke,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Gt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&b.extensions.multiDraw===!0||Dt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Pe.vertexUv1s=c.has(1),Pe.vertexUv2s=c.has(2),Pe.vertexUv3s=c.has(3),c.clear(),Pe}function p(b){const w=[];if(b.shaderID?w.push(b.shaderID):(w.push(b.customVertexShaderID),w.push(b.customFragmentShaderID)),b.defines!==void 0)for(const I in b.defines)w.push(I),w.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(M(w,b),v(w,b),w.push(s.outputColorSpace)),w.push(b.customProgramCacheKey),w.join()}function M(b,w){b.push(w.precision),b.push(w.outputColorSpace),b.push(w.envMapMode),b.push(w.envMapCubeUVHeight),b.push(w.mapUv),b.push(w.alphaMapUv),b.push(w.lightMapUv),b.push(w.aoMapUv),b.push(w.bumpMapUv),b.push(w.normalMapUv),b.push(w.displacementMapUv),b.push(w.emissiveMapUv),b.push(w.metalnessMapUv),b.push(w.roughnessMapUv),b.push(w.anisotropyMapUv),b.push(w.clearcoatMapUv),b.push(w.clearcoatNormalMapUv),b.push(w.clearcoatRoughnessMapUv),b.push(w.iridescenceMapUv),b.push(w.iridescenceThicknessMapUv),b.push(w.sheenColorMapUv),b.push(w.sheenRoughnessMapUv),b.push(w.specularMapUv),b.push(w.specularColorMapUv),b.push(w.specularIntensityMapUv),b.push(w.transmissionMapUv),b.push(w.thicknessMapUv),b.push(w.combine),b.push(w.fogExp2),b.push(w.sizeAttenuation),b.push(w.morphTargetsCount),b.push(w.morphAttributeCount),b.push(w.numDirLights),b.push(w.numPointLights),b.push(w.numSpotLights),b.push(w.numSpotLightMaps),b.push(w.numHemiLights),b.push(w.numRectAreaLights),b.push(w.numDirLightShadows),b.push(w.numPointLightShadows),b.push(w.numSpotLightShadows),b.push(w.numSpotLightShadowsWithMaps),b.push(w.numLightProbes),b.push(w.shadowMapType),b.push(w.toneMapping),b.push(w.numClippingPlanes),b.push(w.numClipIntersection),b.push(w.depthPacking)}function v(b,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),b.push(a.mask)}function _(b){const w=g[b.type];let I;if(w){const W=mn[w];I=rf.clone(W.uniforms)}else I=b.uniforms;return I}function L(b,w){let I;for(let W=0,B=h.length;W<B;W++){const V=h[W];if(V.cacheKey===w){I=V,++I.usedTimes;break}}return I===void 0&&(I=new _0(s,w,b,r),h.push(I)),I}function R(b){if(--b.usedTimes===0){const w=h.indexOf(b);h[w]=h[h.length-1],h.pop(),b.destroy()}}function T(b){l.remove(b)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:L,releaseProgram:R,releaseShaderCache:T,programs:h,dispose:D}}function S0(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function b0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Oc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Fc(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,g,x,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function a(u,d,f,g,x,m){const p=o(u,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(u,d,f,g,x,m){const p=o(u,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||b0),n.length>1&&n.sort(d||Oc),i.length>1&&i.sort(d||Oc)}function h(){for(let u=t,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function T0(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new Fc,s.set(n,[o])):i>=r.length?(o=new Fc,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function E0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Mt};break;case"SpotLight":e={position:new P,direction:new P,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":e={color:new Mt,position:new P,halfWidth:new P,halfHeight:new P};break}return s[t.id]=e,e}}}function A0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let R0=0;function C0(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function L0(s){const t=new E0,e=A0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const i=new P,r=new It,o=new It;function a(c){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,M=0,v=0,_=0,L=0,R=0,T=0;c.sort(C0);for(let b=0,w=c.length;b<w;b++){const I=c[b],W=I.color,B=I.intensity,V=I.distance,G=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=W.r*B,u+=W.g*B,d+=W.b*B;else if(I.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(I.sh.coefficients[Y],B);T++}else if(I.isDirectionalLight){const Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const J=I.shadow,k=e.get(I);k.shadowIntensity=J.intensity,k.shadowBias=J.bias,k.shadowNormalBias=J.normalBias,k.shadowRadius=J.radius,k.shadowMapSize=J.mapSize,n.directionalShadow[f]=k,n.directionalShadowMap[f]=G,n.directionalShadowMatrix[f]=I.shadow.matrix,M++}n.directional[f]=Y,f++}else if(I.isSpotLight){const Y=t.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(W).multiplyScalar(B),Y.distance=V,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,n.spot[x]=Y;const J=I.shadow;if(I.map&&(n.spotLightMap[L]=I.map,L++,J.updateMatrices(I),I.castShadow&&R++),n.spotLightMatrix[x]=J.matrix,I.castShadow){const k=e.get(I);k.shadowIntensity=J.intensity,k.shadowBias=J.bias,k.shadowNormalBias=J.normalBias,k.shadowRadius=J.radius,k.shadowMapSize=J.mapSize,n.spotShadow[x]=k,n.spotShadowMap[x]=G,_++}x++}else if(I.isRectAreaLight){const Y=t.get(I);Y.color.copy(W).multiplyScalar(B),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=Y,m++}else if(I.isPointLight){const Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){const J=I.shadow,k=e.get(I);k.shadowIntensity=J.intensity,k.shadowBias=J.bias,k.shadowNormalBias=J.normalBias,k.shadowRadius=J.radius,k.shadowMapSize=J.mapSize,k.shadowCameraNear=J.camera.near,k.shadowCameraFar=J.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=G,n.pointShadowMatrix[g]=I.shadow.matrix,v++}n.point[g]=Y,g++}else if(I.isHemisphereLight){const Y=t.get(I);Y.skyColor.copy(I.color).multiplyScalar(B),Y.groundColor.copy(I.groundColor).multiplyScalar(B),n.hemi[p]=Y,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const D=n.hash;(D.directionalLength!==f||D.pointLength!==g||D.spotLength!==x||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==M||D.numPointShadows!==v||D.numSpotShadows!==_||D.numSpotMaps!==L||D.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=_+L-R,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=T,D.directionalLength=f,D.pointLength=g,D.spotLength=x,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=M,D.numPointShadows=v,D.numSpotShadows=_,D.numSpotMaps=L,D.numLightProbes=T,n.version=R0++)}function l(c,h){let u=0,d=0,f=0,g=0,x=0;const m=h.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const v=c[p];if(v.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),u++}else if(v.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),f++}else if(v.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const _=n.point[d];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const _=n.hemi[x];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function Bc(s){const t=new L0(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function P0(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new Bc(s),t.set(i,[a])):r>=o.length?(a=new Bc(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class I0 extends hn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=dd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class D0 extends hn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const N0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,U0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function O0(s,t,e){let n=new ml;const i=new Z,r=new Z,o=new ee,a=new I0({depthPacking:fd}),l=new D0,c={},h=e.maxTextureSize,u={[zn]:ke,[ke]:zn,[Ce]:Ce},d=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Z},radius:{value:4}},vertexShader:N0,fragmentShader:U0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new ve;g.setAttribute("position",new Le(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ht(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Th;let p=this.type;this.render=function(R,T,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const b=s.getRenderTarget(),w=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),W=s.state;W.setBlending(si),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const B=p!==On&&this.type===On,V=p===On&&this.type!==On;for(let G=0,Y=R.length;G<Y;G++){const J=R[G],k=J.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const nt=k.getFrameExtents();if(i.multiply(nt),r.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/nt.x),i.x=r.x*nt.x,k.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/nt.y),i.y=r.y*nt.y,k.mapSize.y=r.y)),k.map===null||B===!0||V===!0){const dt=this.type!==On?{minFilter:ze,magFilter:ze}:{};k.map!==null&&k.map.dispose(),k.map=new ai(i.x,i.y,dt),k.map.texture.name=J.name+".shadowMap",k.camera.updateProjectionMatrix()}s.setRenderTarget(k.map),s.clear();const ut=k.getViewportCount();for(let dt=0;dt<ut;dt++){const Nt=k.getViewport(dt);o.set(r.x*Nt.x,r.y*Nt.y,r.x*Nt.z,r.y*Nt.w),W.viewport(o),k.updateMatrices(J,dt),n=k.getFrustum(),_(T,D,k.camera,J,this.type)}k.isPointLightShadow!==!0&&this.type===On&&M(k,D),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(b,w,I)};function M(R,T){const D=t.update(x);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ai(i.x,i.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(T,null,D,d,x,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(T,null,D,f,x,null)}function v(R,T,D,b){let w=null;const I=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(I!==void 0)w=I;else if(w=D.isPointLight===!0?l:a,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const W=w.uuid,B=T.uuid;let V=c[W];V===void 0&&(V={},c[W]=V);let G=V[B];G===void 0&&(G=w.clone(),V[B]=G,T.addEventListener("dispose",L)),w=G}if(w.visible=T.visible,w.wireframe=T.wireframe,b===On?w.side=T.shadowSide!==null?T.shadowSide:T.side:w.side=T.shadowSide!==null?T.shadowSide:u[T.side],w.alphaMap=T.alphaMap,w.alphaTest=T.alphaTest,w.map=T.map,w.clipShadows=T.clipShadows,w.clippingPlanes=T.clippingPlanes,w.clipIntersection=T.clipIntersection,w.displacementMap=T.displacementMap,w.displacementScale=T.displacementScale,w.displacementBias=T.displacementBias,w.wireframeLinewidth=T.wireframeLinewidth,w.linewidth=T.linewidth,D.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const W=s.properties.get(w);W.light=D}return w}function _(R,T,D,b,w){if(R.visible===!1)return;if(R.layers.test(T.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&w===On)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);const B=t.update(R),V=R.material;if(Array.isArray(V)){const G=B.groups;for(let Y=0,J=G.length;Y<J;Y++){const k=G[Y],nt=V[k.materialIndex];if(nt&&nt.visible){const ut=v(R,nt,b,w);R.onBeforeShadow(s,R,T,D,B,ut,k),s.renderBufferDirect(D,null,B,ut,R,k),R.onAfterShadow(s,R,T,D,B,ut,k)}}}else if(V.visible){const G=v(R,V,b,w);R.onBeforeShadow(s,R,T,D,B,G,null),s.renderBufferDirect(D,null,B,G,R,null),R.onAfterShadow(s,R,T,D,B,G,null)}}const W=R.children;for(let B=0,V=W.length;B<V;B++)_(W[B],T,D,b,w)}function L(R){R.target.removeEventListener("dispose",L);for(const D in c){const b=c[D],w=R.target.uuid;w in b&&(b[w].dispose(),delete b[w])}}}const F0={[aa]:la,[ca]:da,[ha]:fa,[os]:ua,[la]:aa,[da]:ca,[fa]:ha,[ua]:os};function B0(s,t){function e(){let N=!1;const pt=new ee;let j=null;const Q=new ee(0,0,0,0);return{setMask:function(_t){j!==_t&&!N&&(s.colorMask(_t,_t,_t,_t),j=_t)},setLocked:function(_t){N=_t},setClear:function(_t,mt,Gt,_e,Pe){Pe===!0&&(_t*=_e,mt*=_e,Gt*=_e),pt.set(_t,mt,Gt,_e),Q.equals(pt)===!1&&(s.clearColor(_t,mt,Gt,_e),Q.copy(pt))},reset:function(){N=!1,j=null,Q.set(-1,0,0,0)}}}function n(){let N=!1,pt=!1,j=null,Q=null,_t=null;return{setReversed:function(mt){if(pt!==mt){const Gt=t.get("EXT_clip_control");pt?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT);const _e=_t;_t=null,this.setClear(_e)}pt=mt},getReversed:function(){return pt},setTest:function(mt){mt?lt(s.DEPTH_TEST):Pt(s.DEPTH_TEST)},setMask:function(mt){j!==mt&&!N&&(s.depthMask(mt),j=mt)},setFunc:function(mt){if(pt&&(mt=F0[mt]),Q!==mt){switch(mt){case aa:s.depthFunc(s.NEVER);break;case la:s.depthFunc(s.ALWAYS);break;case ca:s.depthFunc(s.LESS);break;case os:s.depthFunc(s.LEQUAL);break;case ha:s.depthFunc(s.EQUAL);break;case ua:s.depthFunc(s.GEQUAL);break;case da:s.depthFunc(s.GREATER);break;case fa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Q=mt}},setLocked:function(mt){N=mt},setClear:function(mt){_t!==mt&&(pt&&(mt=1-mt),s.clearDepth(mt),_t=mt)},reset:function(){N=!1,j=null,Q=null,_t=null,pt=!1}}}function i(){let N=!1,pt=null,j=null,Q=null,_t=null,mt=null,Gt=null,_e=null,Pe=null;return{setTest:function(se){N||(se?lt(s.STENCIL_TEST):Pt(s.STENCIL_TEST))},setMask:function(se){pt!==se&&!N&&(s.stencilMask(se),pt=se)},setFunc:function(se,nn,An){(j!==se||Q!==nn||_t!==An)&&(s.stencilFunc(se,nn,An),j=se,Q=nn,_t=An)},setOp:function(se,nn,An){(mt!==se||Gt!==nn||_e!==An)&&(s.stencilOp(se,nn,An),mt=se,Gt=nn,_e=An)},setLocked:function(se){N=se},setClear:function(se){Pe!==se&&(s.clearStencil(se),Pe=se)},reset:function(){N=!1,pt=null,j=null,Q=null,_t=null,mt=null,Gt=null,_e=null,Pe=null}}}const r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,M=null,v=null,_=null,L=null,R=null,T=new Mt(0,0,0),D=0,b=!1,w=null,I=null,W=null,B=null,V=null;const G=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,J=0;const k=s.getParameter(s.VERSION);k.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(k)[1]),Y=J>=1):k.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),Y=J>=2);let nt=null,ut={};const dt=s.getParameter(s.SCISSOR_BOX),Nt=s.getParameter(s.VIEWPORT),$t=new ee().fromArray(dt),q=new ee().fromArray(Nt);function rt(N,pt,j,Q){const _t=new Uint8Array(4),mt=s.createTexture();s.bindTexture(N,mt),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Gt=0;Gt<j;Gt++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(pt,0,s.RGBA,1,1,Q,0,s.RGBA,s.UNSIGNED_BYTE,_t):s.texImage2D(pt+Gt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,_t);return mt}const xt={};xt[s.TEXTURE_2D]=rt(s.TEXTURE_2D,s.TEXTURE_2D,1),xt[s.TEXTURE_CUBE_MAP]=rt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[s.TEXTURE_2D_ARRAY]=rt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),xt[s.TEXTURE_3D]=rt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),lt(s.DEPTH_TEST),o.setFunc(os),it(!1),wt(kl),lt(s.CULL_FACE),C(si);function lt(N){h[N]!==!0&&(s.enable(N),h[N]=!0)}function Pt(N){h[N]!==!1&&(s.disable(N),h[N]=!1)}function Bt(N,pt){return u[N]!==pt?(s.bindFramebuffer(N,pt),u[N]=pt,N===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=pt),N===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=pt),!0):!1}function Dt(N,pt){let j=f,Q=!1;if(N){j=d.get(pt),j===void 0&&(j=[],d.set(pt,j));const _t=N.textures;if(j.length!==_t.length||j[0]!==s.COLOR_ATTACHMENT0){for(let mt=0,Gt=_t.length;mt<Gt;mt++)j[mt]=s.COLOR_ATTACHMENT0+mt;j.length=_t.length,Q=!0}}else j[0]!==s.BACK&&(j[0]=s.BACK,Q=!0);Q&&s.drawBuffers(j)}function jt(N){return g!==N?(s.useProgram(N),g=N,!0):!1}const tt={[wi]:s.FUNC_ADD,[Fu]:s.FUNC_SUBTRACT,[Bu]:s.FUNC_REVERSE_SUBTRACT};tt[ku]=s.MIN,tt[zu]=s.MAX;const ot={[Hu]:s.ZERO,[Gu]:s.ONE,[Vu]:s.SRC_COLOR,[ra]:s.SRC_ALPHA,[$u]:s.SRC_ALPHA_SATURATE,[ju]:s.DST_COLOR,[Xu]:s.DST_ALPHA,[Wu]:s.ONE_MINUS_SRC_COLOR,[oa]:s.ONE_MINUS_SRC_ALPHA,[qu]:s.ONE_MINUS_DST_COLOR,[Yu]:s.ONE_MINUS_DST_ALPHA,[Ku]:s.CONSTANT_COLOR,[Zu]:s.ONE_MINUS_CONSTANT_COLOR,[Ju]:s.CONSTANT_ALPHA,[Qu]:s.ONE_MINUS_CONSTANT_ALPHA};function C(N,pt,j,Q,_t,mt,Gt,_e,Pe,se){if(N===si){x===!0&&(Pt(s.BLEND),x=!1);return}if(x===!1&&(lt(s.BLEND),x=!0),N!==Ou){if(N!==m||se!==b){if((p!==wi||_!==wi)&&(s.blendEquation(s.FUNC_ADD),p=wi,_=wi),se)switch(N){case ts:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ki:s.blendFunc(s.ONE,s.ONE);break;case zl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Hl:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case ts:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ki:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case zl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Hl:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}M=null,v=null,L=null,R=null,T.set(0,0,0),D=0,m=N,b=se}return}_t=_t||pt,mt=mt||j,Gt=Gt||Q,(pt!==p||_t!==_)&&(s.blendEquationSeparate(tt[pt],tt[_t]),p=pt,_=_t),(j!==M||Q!==v||mt!==L||Gt!==R)&&(s.blendFuncSeparate(ot[j],ot[Q],ot[mt],ot[Gt]),M=j,v=Q,L=mt,R=Gt),(_e.equals(T)===!1||Pe!==D)&&(s.blendColor(_e.r,_e.g,_e.b,Pe),T.copy(_e),D=Pe),m=N,b=!1}function Ct(N,pt){N.side===Ce?Pt(s.CULL_FACE):lt(s.CULL_FACE);let j=N.side===ke;pt&&(j=!j),it(j),N.blending===ts&&N.transparent===!1?C(si):C(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const Q=N.stencilWrite;a.setTest(Q),Q&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ut(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?lt(s.SAMPLE_ALPHA_TO_COVERAGE):Pt(s.SAMPLE_ALPHA_TO_COVERAGE)}function it(N){w!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),w=N)}function wt(N){N!==Du?(lt(s.CULL_FACE),N!==I&&(N===kl?s.cullFace(s.BACK):N===Nu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Pt(s.CULL_FACE),I=N}function ct(N){N!==W&&(Y&&s.lineWidth(N),W=N)}function Ut(N,pt,j){N?(lt(s.POLYGON_OFFSET_FILL),(B!==pt||V!==j)&&(s.polygonOffset(pt,j),B=pt,V=j)):Pt(s.POLYGON_OFFSET_FILL)}function vt(N){N?lt(s.SCISSOR_TEST):Pt(s.SCISSOR_TEST)}function E(N){N===void 0&&(N=s.TEXTURE0+G-1),nt!==N&&(s.activeTexture(N),nt=N)}function y(N,pt,j){j===void 0&&(nt===null?j=s.TEXTURE0+G-1:j=nt);let Q=ut[j];Q===void 0&&(Q={type:void 0,texture:void 0},ut[j]=Q),(Q.type!==N||Q.texture!==pt)&&(nt!==j&&(s.activeTexture(j),nt=j),s.bindTexture(N,pt||xt[N]),Q.type=N,Q.texture=pt)}function F(){const N=ut[nt];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function $(){try{s.compressedTexImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function et(){try{s.compressedTexImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function K(){try{s.texSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Tt(){try{s.texSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ft(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function yt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Kt(){try{s.texStorage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function st(){try{s.texStorage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function St(){try{s.texImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ot(){try{s.texImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function kt(N){$t.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),$t.copy(N))}function bt(N){q.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),q.copy(N))}function Jt(N,pt){let j=c.get(pt);j===void 0&&(j=new WeakMap,c.set(pt,j));let Q=j.get(N);Q===void 0&&(Q=s.getUniformBlockIndex(pt,N.name),j.set(N,Q))}function Xt(N,pt){const Q=c.get(pt).get(N);l.get(pt)!==Q&&(s.uniformBlockBinding(pt,Q,N.__bindingPointIndex),l.set(pt,Q))}function ce(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},nt=null,ut={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,M=null,v=null,_=null,L=null,R=null,T=new Mt(0,0,0),D=0,b=!1,w=null,I=null,W=null,B=null,V=null,$t.set(0,0,s.canvas.width,s.canvas.height),q.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:lt,disable:Pt,bindFramebuffer:Bt,drawBuffers:Dt,useProgram:jt,setBlending:C,setMaterial:Ct,setFlipSided:it,setCullFace:wt,setLineWidth:ct,setPolygonOffset:Ut,setScissorTest:vt,activeTexture:E,bindTexture:y,unbindTexture:F,compressedTexImage2D:$,compressedTexImage3D:et,texImage2D:St,texImage3D:Ot,updateUBOMapping:Jt,uniformBlockBinding:Xt,texStorage2D:Kt,texStorage3D:st,texSubImage2D:K,texSubImage3D:Tt,compressedTexSubImage2D:ft,compressedTexSubImage3D:yt,scissor:kt,viewport:bt,reset:ce}}function kc(s,t,e,n){const i=k0(n);switch(e){case Ih:return s*t;case Nh:return s*t;case Uh:return s*t*2;case ll:return s*t/i.components*i.byteLength;case cl:return s*t/i.components*i.byteLength;case Oh:return s*t*2/i.components*i.byteLength;case hl:return s*t*2/i.components*i.byteLength;case Dh:return s*t*3/i.components*i.byteLength;case Je:return s*t*4/i.components*i.byteLength;case ul:return s*t*4/i.components*i.byteLength;case Wr:case Xr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Yr:case jr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case xa:case va:return Math.max(s,16)*Math.max(t,8)/4;case ga:case _a:return Math.max(s,8)*Math.max(t,8)/2;case ya:case Ma:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case wa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Sa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ba:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Ta:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ea:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Aa:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Ra:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ca:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case La:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Pa:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Ia:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Da:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Na:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Ua:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Oa:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case qr:case Fa:case Ba:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Fh:case ka:return Math.ceil(s/4)*Math.ceil(t/4)*8;case za:case Ha:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function k0(s){switch(s){case Hn:case Ch:return{byteLength:1,components:1};case js:case Lh:case nr:return{byteLength:2,components:1};case ol:case al:return{byteLength:2,components:4};case Ti:case rl:case cn:return{byteLength:4,components:1};case Ph:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function z0(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Z,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,y){return f?new OffscreenCanvas(E,y):Ks("canvas")}function x(E,y,F){let $=1;const et=vt(E);if((et.width>F||et.height>F)&&($=F/Math.max(et.width,et.height)),$<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const K=Math.floor($*et.width),Tt=Math.floor($*et.height);u===void 0&&(u=g(K,Tt));const ft=y?g(K,Tt):u;return ft.width=K,ft.height=Tt,ft.getContext("2d").drawImage(E,0,0,K,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+K+"x"+Tt+")."),ft}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){s.generateMipmap(E)}function M(E){return E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?s.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(E,y,F,$,et=!1){if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let K=y;if(y===s.RED&&(F===s.FLOAT&&(K=s.R32F),F===s.HALF_FLOAT&&(K=s.R16F),F===s.UNSIGNED_BYTE&&(K=s.R8)),y===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&(K=s.R8UI),F===s.UNSIGNED_SHORT&&(K=s.R16UI),F===s.UNSIGNED_INT&&(K=s.R32UI),F===s.BYTE&&(K=s.R8I),F===s.SHORT&&(K=s.R16I),F===s.INT&&(K=s.R32I)),y===s.RG&&(F===s.FLOAT&&(K=s.RG32F),F===s.HALF_FLOAT&&(K=s.RG16F),F===s.UNSIGNED_BYTE&&(K=s.RG8)),y===s.RG_INTEGER&&(F===s.UNSIGNED_BYTE&&(K=s.RG8UI),F===s.UNSIGNED_SHORT&&(K=s.RG16UI),F===s.UNSIGNED_INT&&(K=s.RG32UI),F===s.BYTE&&(K=s.RG8I),F===s.SHORT&&(K=s.RG16I),F===s.INT&&(K=s.RG32I)),y===s.RGB_INTEGER&&(F===s.UNSIGNED_BYTE&&(K=s.RGB8UI),F===s.UNSIGNED_SHORT&&(K=s.RGB16UI),F===s.UNSIGNED_INT&&(K=s.RGB32UI),F===s.BYTE&&(K=s.RGB8I),F===s.SHORT&&(K=s.RGB16I),F===s.INT&&(K=s.RGB32I)),y===s.RGBA_INTEGER&&(F===s.UNSIGNED_BYTE&&(K=s.RGBA8UI),F===s.UNSIGNED_SHORT&&(K=s.RGBA16UI),F===s.UNSIGNED_INT&&(K=s.RGBA32UI),F===s.BYTE&&(K=s.RGBA8I),F===s.SHORT&&(K=s.RGBA16I),F===s.INT&&(K=s.RGBA32I)),y===s.RGB&&F===s.UNSIGNED_INT_5_9_9_9_REV&&(K=s.RGB9_E5),y===s.RGBA){const Tt=et?oo:Zt.getTransfer($);F===s.FLOAT&&(K=s.RGBA32F),F===s.HALF_FLOAT&&(K=s.RGBA16F),F===s.UNSIGNED_BYTE&&(K=Tt===ae?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT_4_4_4_4&&(K=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&(K=s.RGB5_A1)}return(K===s.R16F||K===s.R32F||K===s.RG16F||K===s.RG32F||K===s.RGBA16F||K===s.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function _(E,y){let F;return E?y===null||y===Ti||y===cs?F=s.DEPTH24_STENCIL8:y===cn?F=s.DEPTH32F_STENCIL8:y===js&&(F=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ti||y===cs?F=s.DEPTH_COMPONENT24:y===cn?F=s.DEPTH_COMPONENT32F:y===js&&(F=s.DEPTH_COMPONENT16),F}function L(E,y){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==ze&&E.minFilter!==Ne?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function R(E){const y=E.target;y.removeEventListener("dispose",R),D(y),y.isVideoTexture&&h.delete(y)}function T(E){const y=E.target;y.removeEventListener("dispose",T),w(y)}function D(E){const y=n.get(E);if(y.__webglInit===void 0)return;const F=E.source,$=d.get(F);if($){const et=$[y.__cacheKey];et.usedTimes--,et.usedTimes===0&&b(E),Object.keys($).length===0&&d.delete(F)}n.remove(E)}function b(E){const y=n.get(E);s.deleteTexture(y.__webglTexture);const F=E.source,$=d.get(F);delete $[y.__cacheKey],o.memory.textures--}function w(E){const y=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(y.__webglFramebuffer[$]))for(let et=0;et<y.__webglFramebuffer[$].length;et++)s.deleteFramebuffer(y.__webglFramebuffer[$][et]);else s.deleteFramebuffer(y.__webglFramebuffer[$]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[$])}else{if(Array.isArray(y.__webglFramebuffer))for(let $=0;$<y.__webglFramebuffer.length;$++)s.deleteFramebuffer(y.__webglFramebuffer[$]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let $=0;$<y.__webglColorRenderbuffer.length;$++)y.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[$]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const F=E.textures;for(let $=0,et=F.length;$<et;$++){const K=n.get(F[$]);K.__webglTexture&&(s.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(F[$])}n.remove(E)}let I=0;function W(){I=0}function B(){const E=I;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),I+=1,E}function V(E){const y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.colorSpace),y.join()}function G(E,y){const F=n.get(E);if(E.isVideoTexture&&ct(E),E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){const $=E.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(F,E,y);return}}e.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+y)}function Y(E,y){const F=n.get(E);if(E.version>0&&F.__version!==E.version){q(F,E,y);return}e.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+y)}function J(E,y){const F=n.get(E);if(E.version>0&&F.__version!==E.version){q(F,E,y);return}e.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+y)}function k(E,y){const F=n.get(E);if(E.version>0&&F.__version!==E.version){rt(F,E,y);return}e.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+y)}const nt={[oi]:s.REPEAT,[gn]:s.CLAMP_TO_EDGE,[Zr]:s.MIRRORED_REPEAT},ut={[ze]:s.NEAREST,[Rh]:s.NEAREST_MIPMAP_NEAREST,[Us]:s.NEAREST_MIPMAP_LINEAR,[Ne]:s.LINEAR,[Vr]:s.LINEAR_MIPMAP_NEAREST,[xn]:s.LINEAR_MIPMAP_LINEAR},dt={[md]:s.NEVER,[Md]:s.ALWAYS,[gd]:s.LESS,[zh]:s.LEQUAL,[xd]:s.EQUAL,[yd]:s.GEQUAL,[_d]:s.GREATER,[vd]:s.NOTEQUAL};function Nt(E,y){if(y.type===cn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Ne||y.magFilter===Vr||y.magFilter===Us||y.magFilter===xn||y.minFilter===Ne||y.minFilter===Vr||y.minFilter===Us||y.minFilter===xn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(E,s.TEXTURE_WRAP_S,nt[y.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,nt[y.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,nt[y.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,ut[y.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,ut[y.minFilter]),y.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,dt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===ze||y.minFilter!==Us&&y.minFilter!==xn||y.type===cn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");s.texParameterf(E,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function $t(E,y){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",R));const $=y.source;let et=d.get($);et===void 0&&(et={},d.set($,et));const K=V(y);if(K!==E.__cacheKey){et[K]===void 0&&(et[K]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,F=!0),et[K].usedTimes++;const Tt=et[E.__cacheKey];Tt!==void 0&&(et[E.__cacheKey].usedTimes--,Tt.usedTimes===0&&b(y)),E.__cacheKey=K,E.__webglTexture=et[K].texture}return F}function q(E,y,F){let $=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&($=s.TEXTURE_3D);const et=$t(E,y),K=y.source;e.bindTexture($,E.__webglTexture,s.TEXTURE0+F);const Tt=n.get(K);if(K.version!==Tt.__version||et===!0){e.activeTexture(s.TEXTURE0+F);const ft=Zt.getPrimaries(Zt.workingColorSpace),yt=y.colorSpace===ti?null:Zt.getPrimaries(y.colorSpace),Kt=y.colorSpace===ti||ft===yt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let st=x(y.image,!1,i.maxTextureSize);st=Ut(y,st);const St=r.convert(y.format,y.colorSpace),Ot=r.convert(y.type);let kt=v(y.internalFormat,St,Ot,y.colorSpace,y.isVideoTexture);Nt($,y);let bt;const Jt=y.mipmaps,Xt=y.isVideoTexture!==!0,ce=Tt.__version===void 0||et===!0,N=K.dataReady,pt=L(y,st);if(y.isDepthTexture)kt=_(y.format===hs,y.type),ce&&(Xt?e.texStorage2D(s.TEXTURE_2D,1,kt,st.width,st.height):e.texImage2D(s.TEXTURE_2D,0,kt,st.width,st.height,0,St,Ot,null));else if(y.isDataTexture)if(Jt.length>0){Xt&&ce&&e.texStorage2D(s.TEXTURE_2D,pt,kt,Jt[0].width,Jt[0].height);for(let j=0,Q=Jt.length;j<Q;j++)bt=Jt[j],Xt?N&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,bt.width,bt.height,St,Ot,bt.data):e.texImage2D(s.TEXTURE_2D,j,kt,bt.width,bt.height,0,St,Ot,bt.data);y.generateMipmaps=!1}else Xt?(ce&&e.texStorage2D(s.TEXTURE_2D,pt,kt,st.width,st.height),N&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,st.width,st.height,St,Ot,st.data)):e.texImage2D(s.TEXTURE_2D,0,kt,st.width,st.height,0,St,Ot,st.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Xt&&ce&&e.texStorage3D(s.TEXTURE_2D_ARRAY,pt,kt,Jt[0].width,Jt[0].height,st.depth);for(let j=0,Q=Jt.length;j<Q;j++)if(bt=Jt[j],y.format!==Je)if(St!==null)if(Xt){if(N)if(y.layerUpdates.size>0){const _t=kc(bt.width,bt.height,y.format,y.type);for(const mt of y.layerUpdates){const Gt=bt.data.subarray(mt*_t/bt.data.BYTES_PER_ELEMENT,(mt+1)*_t/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,mt,bt.width,bt.height,1,St,Gt)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,bt.width,bt.height,st.depth,St,bt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,j,kt,bt.width,bt.height,st.depth,0,bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?N&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,bt.width,bt.height,st.depth,St,Ot,bt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,j,kt,bt.width,bt.height,st.depth,0,St,Ot,bt.data)}else{Xt&&ce&&e.texStorage2D(s.TEXTURE_2D,pt,kt,Jt[0].width,Jt[0].height);for(let j=0,Q=Jt.length;j<Q;j++)bt=Jt[j],y.format!==Je?St!==null?Xt?N&&e.compressedTexSubImage2D(s.TEXTURE_2D,j,0,0,bt.width,bt.height,St,bt.data):e.compressedTexImage2D(s.TEXTURE_2D,j,kt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?N&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,bt.width,bt.height,St,Ot,bt.data):e.texImage2D(s.TEXTURE_2D,j,kt,bt.width,bt.height,0,St,Ot,bt.data)}else if(y.isDataArrayTexture)if(Xt){if(ce&&e.texStorage3D(s.TEXTURE_2D_ARRAY,pt,kt,st.width,st.height,st.depth),N)if(y.layerUpdates.size>0){const j=kc(st.width,st.height,y.format,y.type);for(const Q of y.layerUpdates){const _t=st.data.subarray(Q*j/st.data.BYTES_PER_ELEMENT,(Q+1)*j/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Q,st.width,st.height,1,St,Ot,_t)}y.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,St,Ot,st.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,kt,st.width,st.height,st.depth,0,St,Ot,st.data);else if(y.isData3DTexture)Xt?(ce&&e.texStorage3D(s.TEXTURE_3D,pt,kt,st.width,st.height,st.depth),N&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,St,Ot,st.data)):e.texImage3D(s.TEXTURE_3D,0,kt,st.width,st.height,st.depth,0,St,Ot,st.data);else if(y.isFramebufferTexture){if(ce)if(Xt)e.texStorage2D(s.TEXTURE_2D,pt,kt,st.width,st.height);else{let j=st.width,Q=st.height;for(let _t=0;_t<pt;_t++)e.texImage2D(s.TEXTURE_2D,_t,kt,j,Q,0,St,Ot,null),j>>=1,Q>>=1}}else if(Jt.length>0){if(Xt&&ce){const j=vt(Jt[0]);e.texStorage2D(s.TEXTURE_2D,pt,kt,j.width,j.height)}for(let j=0,Q=Jt.length;j<Q;j++)bt=Jt[j],Xt?N&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,St,Ot,bt):e.texImage2D(s.TEXTURE_2D,j,kt,St,Ot,bt);y.generateMipmaps=!1}else if(Xt){if(ce){const j=vt(st);e.texStorage2D(s.TEXTURE_2D,pt,kt,j.width,j.height)}N&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,St,Ot,st)}else e.texImage2D(s.TEXTURE_2D,0,kt,St,Ot,st);m(y)&&p($),Tt.__version=K.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function rt(E,y,F){if(y.image.length!==6)return;const $=$t(E,y),et=y.source;e.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+F);const K=n.get(et);if(et.version!==K.__version||$===!0){e.activeTexture(s.TEXTURE0+F);const Tt=Zt.getPrimaries(Zt.workingColorSpace),ft=y.colorSpace===ti?null:Zt.getPrimaries(y.colorSpace),yt=y.colorSpace===ti||Tt===ft?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const Kt=y.isCompressedTexture||y.image[0].isCompressedTexture,st=y.image[0]&&y.image[0].isDataTexture,St=[];for(let Q=0;Q<6;Q++)!Kt&&!st?St[Q]=x(y.image[Q],!0,i.maxCubemapSize):St[Q]=st?y.image[Q].image:y.image[Q],St[Q]=Ut(y,St[Q]);const Ot=St[0],kt=r.convert(y.format,y.colorSpace),bt=r.convert(y.type),Jt=v(y.internalFormat,kt,bt,y.colorSpace),Xt=y.isVideoTexture!==!0,ce=K.__version===void 0||$===!0,N=et.dataReady;let pt=L(y,Ot);Nt(s.TEXTURE_CUBE_MAP,y);let j;if(Kt){Xt&&ce&&e.texStorage2D(s.TEXTURE_CUBE_MAP,pt,Jt,Ot.width,Ot.height);for(let Q=0;Q<6;Q++){j=St[Q].mipmaps;for(let _t=0;_t<j.length;_t++){const mt=j[_t];y.format!==Je?kt!==null?Xt?N&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t,0,0,mt.width,mt.height,kt,mt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t,Jt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t,0,0,mt.width,mt.height,kt,bt,mt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t,Jt,mt.width,mt.height,0,kt,bt,mt.data)}}}else{if(j=y.mipmaps,Xt&&ce){j.length>0&&pt++;const Q=vt(St[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,pt,Jt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(st){Xt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,St[Q].width,St[Q].height,kt,bt,St[Q].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Jt,St[Q].width,St[Q].height,0,kt,bt,St[Q].data);for(let _t=0;_t<j.length;_t++){const Gt=j[_t].image[Q].image;Xt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t+1,0,0,Gt.width,Gt.height,kt,bt,Gt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t+1,Jt,Gt.width,Gt.height,0,kt,bt,Gt.data)}}else{Xt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,kt,bt,St[Q]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Jt,kt,bt,St[Q]);for(let _t=0;_t<j.length;_t++){const mt=j[_t];Xt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t+1,0,0,kt,bt,mt.image[Q]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t+1,Jt,kt,bt,mt.image[Q])}}}m(y)&&p(s.TEXTURE_CUBE_MAP),K.__version=et.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function xt(E,y,F,$,et,K){const Tt=r.convert(F.format,F.colorSpace),ft=r.convert(F.type),yt=v(F.internalFormat,Tt,ft,F.colorSpace),Kt=n.get(y),st=n.get(F);if(st.__renderTarget=y,!Kt.__hasExternalTextures){const St=Math.max(1,y.width>>K),Ot=Math.max(1,y.height>>K);et===s.TEXTURE_3D||et===s.TEXTURE_2D_ARRAY?e.texImage3D(et,K,yt,St,Ot,y.depth,0,Tt,ft,null):e.texImage2D(et,K,yt,St,Ot,0,Tt,ft,null)}e.bindFramebuffer(s.FRAMEBUFFER,E),wt(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,et,st.__webglTexture,0,it(y)):(et===s.TEXTURE_2D||et>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,et,st.__webglTexture,K),e.bindFramebuffer(s.FRAMEBUFFER,null)}function lt(E,y,F){if(s.bindRenderbuffer(s.RENDERBUFFER,E),y.depthBuffer){const $=y.depthTexture,et=$&&$.isDepthTexture?$.type:null,K=_(y.stencilBuffer,et),Tt=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ft=it(y);wt(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ft,K,y.width,y.height):F?s.renderbufferStorageMultisample(s.RENDERBUFFER,ft,K,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,K,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Tt,s.RENDERBUFFER,E)}else{const $=y.textures;for(let et=0;et<$.length;et++){const K=$[et],Tt=r.convert(K.format,K.colorSpace),ft=r.convert(K.type),yt=v(K.internalFormat,Tt,ft,K.colorSpace),Kt=it(y);F&&wt(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Kt,yt,y.width,y.height):wt(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Kt,yt,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,yt,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Pt(E,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(y.depthTexture);$.__renderTarget=y,(!$.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),G(y.depthTexture,0);const et=$.__webglTexture,K=it(y);if(y.depthTexture.format===es)wt(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0);else if(y.depthTexture.format===hs)wt(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Bt(E){const y=n.get(E),F=E.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==E.depthTexture){const $=E.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),$){const et=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,$.removeEventListener("dispose",et)};$.addEventListener("dispose",et),y.__depthDisposeCallback=et}y.__boundDepthTexture=$}if(E.depthTexture&&!y.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Pt(y.__webglFramebuffer,E)}else if(F){y.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[$]),y.__webglDepthbuffer[$]===void 0)y.__webglDepthbuffer[$]=s.createRenderbuffer(),lt(y.__webglDepthbuffer[$],E,!1);else{const et=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=y.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,K),s.framebufferRenderbuffer(s.FRAMEBUFFER,et,s.RENDERBUFFER,K)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),lt(y.__webglDepthbuffer,E,!1);else{const $=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,et=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,et),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,et)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Dt(E,y,F){const $=n.get(E);y!==void 0&&xt($.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&Bt(E)}function jt(E){const y=E.texture,F=n.get(E),$=n.get(y);E.addEventListener("dispose",T);const et=E.textures,K=E.isWebGLCubeRenderTarget===!0,Tt=et.length>1;if(Tt||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=y.version,o.memory.textures++),K){F.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer[ft]=[];for(let yt=0;yt<y.mipmaps.length;yt++)F.__webglFramebuffer[ft][yt]=s.createFramebuffer()}else F.__webglFramebuffer[ft]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer=[];for(let ft=0;ft<y.mipmaps.length;ft++)F.__webglFramebuffer[ft]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(Tt)for(let ft=0,yt=et.length;ft<yt;ft++){const Kt=n.get(et[ft]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=s.createTexture(),o.memory.textures++)}if(E.samples>0&&wt(E)===!1){F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ft=0;ft<et.length;ft++){const yt=et[ft];F.__webglColorRenderbuffer[ft]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[ft]);const Kt=r.convert(yt.format,yt.colorSpace),st=r.convert(yt.type),St=v(yt.internalFormat,Kt,st,yt.colorSpace,E.isXRRenderTarget===!0),Ot=it(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ot,St,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,F.__webglColorRenderbuffer[ft])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),lt(F.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(K){e.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),Nt(s.TEXTURE_CUBE_MAP,y);for(let ft=0;ft<6;ft++)if(y.mipmaps&&y.mipmaps.length>0)for(let yt=0;yt<y.mipmaps.length;yt++)xt(F.__webglFramebuffer[ft][yt],E,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,yt);else xt(F.__webglFramebuffer[ft],E,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);m(y)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let ft=0,yt=et.length;ft<yt;ft++){const Kt=et[ft],st=n.get(Kt);e.bindTexture(s.TEXTURE_2D,st.__webglTexture),Nt(s.TEXTURE_2D,Kt),xt(F.__webglFramebuffer,E,Kt,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,0),m(Kt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let ft=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ft=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ft,$.__webglTexture),Nt(ft,y),y.mipmaps&&y.mipmaps.length>0)for(let yt=0;yt<y.mipmaps.length;yt++)xt(F.__webglFramebuffer[yt],E,y,s.COLOR_ATTACHMENT0,ft,yt);else xt(F.__webglFramebuffer,E,y,s.COLOR_ATTACHMENT0,ft,0);m(y)&&p(ft),e.unbindTexture()}E.depthBuffer&&Bt(E)}function tt(E){const y=E.textures;for(let F=0,$=y.length;F<$;F++){const et=y[F];if(m(et)){const K=M(E),Tt=n.get(et).__webglTexture;e.bindTexture(K,Tt),p(K),e.unbindTexture()}}}const ot=[],C=[];function Ct(E){if(E.samples>0){if(wt(E)===!1){const y=E.textures,F=E.width,$=E.height;let et=s.COLOR_BUFFER_BIT;const K=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Tt=n.get(E),ft=y.length>1;if(ft)for(let yt=0;yt<y.length;yt++)e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let yt=0;yt<y.length;yt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(et|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(et|=s.STENCIL_BUFFER_BIT)),ft){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Tt.__webglColorRenderbuffer[yt]);const Kt=n.get(y[yt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Kt,0)}s.blitFramebuffer(0,0,F,$,0,0,F,$,et,s.NEAREST),l===!0&&(ot.length=0,C.length=0,ot.push(s.COLOR_ATTACHMENT0+yt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(ot.push(K),C.push(K),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,C)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ot))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ft)for(let yt=0;yt<y.length;yt++){e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.RENDERBUFFER,Tt.__webglColorRenderbuffer[yt]);const Kt=n.get(y[yt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.TEXTURE_2D,Kt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const y=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function it(E){return Math.min(i.maxSamples,E.samples)}function wt(E){const y=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ct(E){const y=o.render.frame;h.get(E)!==y&&(h.set(E,y),E.update())}function Ut(E,y){const F=E.colorSpace,$=E.format,et=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||F!==Ue&&F!==ti&&(Zt.getTransfer(F)===ae?($!==Je||et!==Hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),y}function vt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=W,this.setTexture2D=G,this.setTexture2DArray=Y,this.setTexture3D=J,this.setTextureCube=k,this.rebindTextures=Dt,this.setupRenderTarget=jt,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=wt}function H0(s,t){function e(n,i=ti){let r;const o=Zt.getTransfer(i);if(n===Hn)return s.UNSIGNED_BYTE;if(n===ol)return s.UNSIGNED_SHORT_4_4_4_4;if(n===al)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Ph)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Ch)return s.BYTE;if(n===Lh)return s.SHORT;if(n===js)return s.UNSIGNED_SHORT;if(n===rl)return s.INT;if(n===Ti)return s.UNSIGNED_INT;if(n===cn)return s.FLOAT;if(n===nr)return s.HALF_FLOAT;if(n===Ih)return s.ALPHA;if(n===Dh)return s.RGB;if(n===Je)return s.RGBA;if(n===Nh)return s.LUMINANCE;if(n===Uh)return s.LUMINANCE_ALPHA;if(n===es)return s.DEPTH_COMPONENT;if(n===hs)return s.DEPTH_STENCIL;if(n===ll)return s.RED;if(n===cl)return s.RED_INTEGER;if(n===Oh)return s.RG;if(n===hl)return s.RG_INTEGER;if(n===ul)return s.RGBA_INTEGER;if(n===Wr||n===Xr||n===Yr||n===jr)if(o===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Wr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Wr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Yr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===jr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ga||n===xa||n===_a||n===va)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ga)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_a)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===va)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ya||n===Ma||n===wa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ya||n===Ma)return o===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===wa)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Sa||n===ba||n===Ta||n===Ea||n===Aa||n===Ra||n===Ca||n===La||n===Pa||n===Ia||n===Da||n===Na||n===Ua||n===Oa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Sa)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ba)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ta)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ea)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Aa)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ra)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ca)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===La)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Pa)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ia)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Da)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Na)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ua)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Oa)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===qr||n===Fa||n===Ba)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===qr)return o===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ba)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Fh||n===ka||n===za||n===Ha)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===qr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ka)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===za)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ha)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===cs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class G0 extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ee extends ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const V0={type:"move"};class Go{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ee,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ee,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ee,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(V0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ee;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const W0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,X0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Y0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Me,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new li({vertexShader:W0,fragmentShader:X0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ht(new Ve(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class j0 extends gs{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const x=new Y0,m=e.getContextAttributes();let p=null,M=null;const v=[],_=[],L=new Z;let R=null;const T=new Be;T.viewport=new ee;const D=new Be;D.viewport=new ee;const b=[T,D],w=new G0;let I=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let rt=v[q];return rt===void 0&&(rt=new Go,v[q]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(q){let rt=v[q];return rt===void 0&&(rt=new Go,v[q]=rt),rt.getGripSpace()},this.getHand=function(q){let rt=v[q];return rt===void 0&&(rt=new Go,v[q]=rt),rt.getHandSpace()};function B(q){const rt=_.indexOf(q.inputSource);if(rt===-1)return;const xt=v[rt];xt!==void 0&&(xt.update(q.inputSource,q.frame,c||o),xt.dispatchEvent({type:q.type,data:q.inputSource}))}function V(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",G);for(let q=0;q<v.length;q++){const rt=_[q];rt!==null&&(_[q]=null,v[q].disconnect(rt))}I=null,W=null,x.reset(),t.setRenderTarget(p),f=null,d=null,u=null,i=null,M=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",V),i.addEventListener("inputsourceschange",G),m.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(L),i.renderState.layers===void 0){const rt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,rt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new ai(f.framebufferWidth,f.framebufferHeight,{format:Je,type:Hn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let rt=null,xt=null,lt=null;m.depth&&(lt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=m.stencil?hs:es,xt=m.stencil?cs:Ti);const Pt={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(Pt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new ai(d.textureWidth,d.textureHeight,{format:Je,type:Hn,depthTexture:new Kh(d.textureWidth,d.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),$t.setContext(i),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function G(q){for(let rt=0;rt<q.removed.length;rt++){const xt=q.removed[rt],lt=_.indexOf(xt);lt>=0&&(_[lt]=null,v[lt].disconnect(xt))}for(let rt=0;rt<q.added.length;rt++){const xt=q.added[rt];let lt=_.indexOf(xt);if(lt===-1){for(let Bt=0;Bt<v.length;Bt++)if(Bt>=_.length){_.push(xt),lt=Bt;break}else if(_[Bt]===null){_[Bt]=xt,lt=Bt;break}if(lt===-1)break}const Pt=v[lt];Pt&&Pt.connect(xt)}}const Y=new P,J=new P;function k(q,rt,xt){Y.setFromMatrixPosition(rt.matrixWorld),J.setFromMatrixPosition(xt.matrixWorld);const lt=Y.distanceTo(J),Pt=rt.projectionMatrix.elements,Bt=xt.projectionMatrix.elements,Dt=Pt[14]/(Pt[10]-1),jt=Pt[14]/(Pt[10]+1),tt=(Pt[9]+1)/Pt[5],ot=(Pt[9]-1)/Pt[5],C=(Pt[8]-1)/Pt[0],Ct=(Bt[8]+1)/Bt[0],it=Dt*C,wt=Dt*Ct,ct=lt/(-C+Ct),Ut=ct*-C;if(rt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ut),q.translateZ(ct),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Pt[10]===-1)q.projectionMatrix.copy(rt.projectionMatrix),q.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{const vt=Dt+ct,E=jt+ct,y=it-Ut,F=wt+(lt-Ut),$=tt*jt/E*vt,et=ot*jt/E*vt;q.projectionMatrix.makePerspective(y,F,$,et,vt,E),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function nt(q,rt){rt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(rt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let rt=q.near,xt=q.far;x.texture!==null&&(x.depthNear>0&&(rt=x.depthNear),x.depthFar>0&&(xt=x.depthFar)),w.near=D.near=T.near=rt,w.far=D.far=T.far=xt,(I!==w.near||W!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),I=w.near,W=w.far),T.layers.mask=q.layers.mask|2,D.layers.mask=q.layers.mask|4,w.layers.mask=T.layers.mask|D.layers.mask;const lt=q.parent,Pt=w.cameras;nt(w,lt);for(let Bt=0;Bt<Pt.length;Bt++)nt(Pt[Bt],lt);Pt.length===2?k(w,T,D):w.projectionMatrix.copy(T.projectionMatrix),ut(q,w,lt)};function ut(q,rt,xt){xt===null?q.matrix.copy(rt.matrixWorld):(q.matrix.copy(xt.matrixWorld),q.matrix.invert(),q.matrix.multiply(rt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(rt.projectionMatrix),q.projectionMatrixInverse.copy(rt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=us*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(w)};let dt=null;function Nt(q,rt){if(h=rt.getViewerPose(c||o),g=rt,h!==null){const xt=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let lt=!1;xt.length!==w.cameras.length&&(w.cameras.length=0,lt=!0);for(let Bt=0;Bt<xt.length;Bt++){const Dt=xt[Bt];let jt=null;if(f!==null)jt=f.getViewport(Dt);else{const ot=u.getViewSubImage(d,Dt);jt=ot.viewport,Bt===0&&(t.setRenderTargetTextures(M,ot.colorTexture,d.ignoreDepthValues?void 0:ot.depthStencilTexture),t.setRenderTarget(M))}let tt=b[Bt];tt===void 0&&(tt=new Be,tt.layers.enable(Bt),tt.viewport=new ee,b[Bt]=tt),tt.matrix.fromArray(Dt.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(Dt.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(jt.x,jt.y,jt.width,jt.height),Bt===0&&(w.matrix.copy(tt.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),lt===!0&&w.cameras.push(tt)}const Pt=i.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")){const Bt=u.getDepthInformation(xt[0]);Bt&&Bt.isValid&&Bt.texture&&x.init(t,Bt,i.renderState)}}for(let xt=0;xt<v.length;xt++){const lt=_[xt],Pt=v[xt];lt!==null&&Pt!==void 0&&Pt.update(lt,rt,c||o)}dt&&dt(q,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),g=null}const $t=new $h;$t.setAnimationLoop(Nt),this.setAnimationLoop=function(q){dt=q},this.dispose=function(){}}}const _i=new en,q0=new It;function $0(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Yh(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,v,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ke&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ke&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=t.get(p),v=M.envMap,_=M.envMapRotation;v&&(m.envMap.value=v,_i.copy(_),_i.x*=-1,_i.y*=-1,_i.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),m.envMapRotation.value.setFromMatrix4(q0.makeRotationFromEuler(_i)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ke&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function K0(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,v){const _=v.program;n.uniformBlockBinding(M,_)}function c(M,v){let _=i[M.id];_===void 0&&(g(M),_=h(M),i[M.id]=_,M.addEventListener("dispose",m));const L=v.program;n.updateUBOMapping(M,L);const R=t.render.frame;r[M.id]!==R&&(d(M),r[M.id]=R)}function h(M){const v=u();M.__bindingPointIndex=v;const _=s.createBuffer(),L=M.__size,R=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,L,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,_),_}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const v=i[M.id],_=M.uniforms,L=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let R=0,T=_.length;R<T;R++){const D=Array.isArray(_[R])?_[R]:[_[R]];for(let b=0,w=D.length;b<w;b++){const I=D[b];if(f(I,R,b,L)===!0){const W=I.__offset,B=Array.isArray(I.value)?I.value:[I.value];let V=0;for(let G=0;G<B.length;G++){const Y=B[G],J=x(Y);typeof Y=="number"||typeof Y=="boolean"?(I.__data[0]=Y,s.bufferSubData(s.UNIFORM_BUFFER,W+V,I.__data)):Y.isMatrix3?(I.__data[0]=Y.elements[0],I.__data[1]=Y.elements[1],I.__data[2]=Y.elements[2],I.__data[3]=0,I.__data[4]=Y.elements[3],I.__data[5]=Y.elements[4],I.__data[6]=Y.elements[5],I.__data[7]=0,I.__data[8]=Y.elements[6],I.__data[9]=Y.elements[7],I.__data[10]=Y.elements[8],I.__data[11]=0):(Y.toArray(I.__data,V),V+=J.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,W,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(M,v,_,L){const R=M.value,T=v+"_"+_;if(L[T]===void 0)return typeof R=="number"||typeof R=="boolean"?L[T]=R:L[T]=R.clone(),!0;{const D=L[T];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return L[T]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function g(M){const v=M.uniforms;let _=0;const L=16;for(let T=0,D=v.length;T<D;T++){const b=Array.isArray(v[T])?v[T]:[v[T]];for(let w=0,I=b.length;w<I;w++){const W=b[w],B=Array.isArray(W.value)?W.value:[W.value];for(let V=0,G=B.length;V<G;V++){const Y=B[V],J=x(Y),k=_%L,nt=k%J.boundary,ut=k+nt;_+=nt,ut!==0&&L-ut<J.storage&&(_+=L-ut),W.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=_,_+=J.storage}}}const R=_%L;return R>0&&(_+=L-R),M.__size=_,M.__cache={},this}function x(M){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function m(M){const v=M.target;v.removeEventListener("dispose",m);const _=o.indexOf(v.__bindingPointIndex);o.splice(_,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function p(){for(const M in i)s.deleteBuffer(i[M]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}class Z0{constructor(t={}){const{canvas:e=Bd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const M=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=me,this.toneMapping=ri,this.toneMappingExposure=1;const _=this;let L=!1,R=0,T=0,D=null,b=-1,w=null;const I=new ee,W=new ee;let B=null;const V=new Mt(0);let G=0,Y=e.width,J=e.height,k=1,nt=null,ut=null;const dt=new ee(0,0,Y,J),Nt=new ee(0,0,Y,J);let $t=!1;const q=new ml;let rt=!1,xt=!1;const lt=new It,Pt=new It,Bt=new P,Dt=new ee,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function ot(){return D===null?k:1}let C=n;function Ct(S,U){return e.getContext(S,U)}try{const S={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${sl}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",_t,!1),e.addEventListener("webglcontextcreationerror",mt,!1),C===null){const U="webgl2";if(C=Ct(U,S),C===null)throw Ct(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let it,wt,ct,Ut,vt,E,y,F,$,et,K,Tt,ft,yt,Kt,st,St,Ot,kt,bt,Jt,Xt,ce,N;function pt(){it=new ng(C),it.init(),Xt=new H0(C,it),wt=new Km(C,it,t,Xt),ct=new B0(C,it),wt.reverseDepthBuffer&&d&&ct.buffers.depth.setReversed(!0),Ut=new rg(C),vt=new S0,E=new z0(C,it,ct,vt,wt,Xt,Ut),y=new Jm(_),F=new eg(_),$=new df(C),ce=new qm(C,$),et=new ig(C,$,Ut,ce),K=new ag(C,et,$,Ut),kt=new og(C,wt,E),st=new Zm(vt),Tt=new w0(_,y,F,it,wt,ce,st),ft=new $0(_,vt),yt=new T0,Kt=new P0(it),Ot=new jm(_,y,F,ct,K,f,l),St=new O0(_,K,wt),N=new K0(C,Ut,wt,ct),bt=new $m(C,it,Ut),Jt=new sg(C,it,Ut),Ut.programs=Tt.programs,_.capabilities=wt,_.extensions=it,_.properties=vt,_.renderLists=yt,_.shadowMap=St,_.state=ct,_.info=Ut}pt();const j=new j0(_,C);this.xr=j,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const S=it.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=it.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(S){S!==void 0&&(k=S,this.setSize(Y,J,!1))},this.getSize=function(S){return S.set(Y,J)},this.setSize=function(S,U,z=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=S,J=U,e.width=Math.floor(S*k),e.height=Math.floor(U*k),z===!0&&(e.style.width=S+"px",e.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(Y*k,J*k).floor()},this.setDrawingBufferSize=function(S,U,z){Y=S,J=U,k=z,e.width=Math.floor(S*z),e.height=Math.floor(U*z),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(I)},this.getViewport=function(S){return S.copy(dt)},this.setViewport=function(S,U,z,H){S.isVector4?dt.set(S.x,S.y,S.z,S.w):dt.set(S,U,z,H),ct.viewport(I.copy(dt).multiplyScalar(k).round())},this.getScissor=function(S){return S.copy(Nt)},this.setScissor=function(S,U,z,H){S.isVector4?Nt.set(S.x,S.y,S.z,S.w):Nt.set(S,U,z,H),ct.scissor(W.copy(Nt).multiplyScalar(k).round())},this.getScissorTest=function(){return $t},this.setScissorTest=function(S){ct.setScissorTest($t=S)},this.setOpaqueSort=function(S){nt=S},this.setTransparentSort=function(S){ut=S},this.getClearColor=function(S){return S.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor.apply(Ot,arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha.apply(Ot,arguments)},this.clear=function(S=!0,U=!0,z=!0){let H=0;if(S){let O=!1;if(D!==null){const at=D.texture.format;O=at===ul||at===hl||at===cl}if(O){const at=D.texture.type,gt=at===Hn||at===Ti||at===js||at===cs||at===ol||at===al,Et=Ot.getClearColor(),At=Ot.getClearAlpha(),zt=Et.r,Vt=Et.g,Rt=Et.b;gt?(g[0]=zt,g[1]=Vt,g[2]=Rt,g[3]=At,C.clearBufferuiv(C.COLOR,0,g)):(x[0]=zt,x[1]=Vt,x[2]=Rt,x[3]=At,C.clearBufferiv(C.COLOR,0,x))}else H|=C.COLOR_BUFFER_BIT}U&&(H|=C.DEPTH_BUFFER_BIT),z&&(H|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),yt.dispose(),Kt.dispose(),vt.dispose(),y.dispose(),F.dispose(),K.dispose(),ce.dispose(),N.dispose(),Tt.dispose(),j.dispose(),j.removeEventListener("sessionstart",Pl),j.removeEventListener("sessionend",Il),di.stop()};function Q(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function _t(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const S=Ut.autoReset,U=St.enabled,z=St.autoUpdate,H=St.needsUpdate,O=St.type;pt(),Ut.autoReset=S,St.enabled=U,St.autoUpdate=z,St.needsUpdate=H,St.type=O}function mt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Gt(S){const U=S.target;U.removeEventListener("dispose",Gt),_e(U)}function _e(S){Pe(S),vt.remove(S)}function Pe(S){const U=vt.get(S).programs;U!==void 0&&(U.forEach(function(z){Tt.releaseProgram(z)}),S.isShaderMaterial&&Tt.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,z,H,O,at){U===null&&(U=jt);const gt=O.isMesh&&O.matrixWorld.determinant()<0,Et=Ru(S,U,z,H,O);ct.setMaterial(H,gt);let At=z.index,zt=1;if(H.wireframe===!0){if(At=et.getWireframeAttribute(z),At===void 0)return;zt=2}const Vt=z.drawRange,Rt=z.attributes.position;let Qt=Vt.start*zt,he=(Vt.start+Vt.count)*zt;at!==null&&(Qt=Math.max(Qt,at.start*zt),he=Math.min(he,(at.start+at.count)*zt)),At!==null?(Qt=Math.max(Qt,0),he=Math.min(he,At.count)):Rt!=null&&(Qt=Math.max(Qt,0),he=Math.min(he,Rt.count));const ue=he-Qt;if(ue<0||ue===1/0)return;ce.setup(O,H,Et,z,At);let Ge,ne=bt;if(At!==null&&(Ge=$.get(At),ne=Jt,ne.setIndex(Ge)),O.isMesh)H.wireframe===!0?(ct.setLineWidth(H.wireframeLinewidth*ot()),ne.setMode(C.LINES)):ne.setMode(C.TRIANGLES);else if(O.isLine){let Lt=H.linewidth;Lt===void 0&&(Lt=1),ct.setLineWidth(Lt*ot()),O.isLineSegments?ne.setMode(C.LINES):O.isLineLoop?ne.setMode(C.LINE_LOOP):ne.setMode(C.LINE_STRIP)}else O.isPoints?ne.setMode(C.POINTS):O.isSprite&&ne.setMode(C.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)ne.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))ne.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Lt=O._multiDrawStarts,Rn=O._multiDrawCounts,ie=O._multiDrawCount,sn=At?$.get(At).bytesPerElement:1,Ci=vt.get(H).currentProgram.getUniforms();for(let We=0;We<ie;We++)Ci.setValue(C,"_gl_DrawID",We),ne.render(Lt[We]/sn,Rn[We])}else if(O.isInstancedMesh)ne.renderInstances(Qt,ue,O.count);else if(z.isInstancedBufferGeometry){const Lt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Rn=Math.min(z.instanceCount,Lt);ne.renderInstances(Qt,ue,Rn)}else ne.render(Qt,ue)};function se(S,U,z){S.transparent===!0&&S.side===Ce&&S.forceSinglePass===!1?(S.side=ke,S.needsUpdate=!0,ar(S,U,z),S.side=zn,S.needsUpdate=!0,ar(S,U,z),S.side=Ce):ar(S,U,z)}this.compile=function(S,U,z=null){z===null&&(z=S),p=Kt.get(z),p.init(U),v.push(p),z.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),S!==z&&S.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const H=new Set;return S.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const at=O.material;if(at)if(Array.isArray(at))for(let gt=0;gt<at.length;gt++){const Et=at[gt];se(Et,z,O),H.add(Et)}else se(at,z,O),H.add(at)}),v.pop(),p=null,H},this.compileAsync=function(S,U,z=null){const H=this.compile(S,U,z);return new Promise(O=>{function at(){if(H.forEach(function(gt){vt.get(gt).currentProgram.isReady()&&H.delete(gt)}),H.size===0){O(S);return}setTimeout(at,10)}it.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let nn=null;function An(S){nn&&nn(S)}function Pl(){di.stop()}function Il(){di.start()}const di=new $h;di.setAnimationLoop(An),typeof self<"u"&&di.setContext(self),this.setAnimationLoop=function(S){nn=S,j.setAnimationLoop(S),S===null?di.stop():di.start()},j.addEventListener("sessionstart",Pl),j.addEventListener("sessionend",Il),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(U),U=j.getCamera()),S.isScene===!0&&S.onBeforeRender(_,S,U,D),p=Kt.get(S,v.length),p.init(U),v.push(p),Pt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),q.setFromProjectionMatrix(Pt),xt=this.localClippingEnabled,rt=st.init(this.clippingPlanes,xt),m=yt.get(S,M.length),m.init(),M.push(m),j.enabled===!0&&j.isPresenting===!0){const at=_.xr.getDepthSensingMesh();at!==null&&po(at,U,-1/0,_.sortObjects)}po(S,U,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(nt,ut),tt=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,tt&&Ot.addToRenderList(m,S),this.info.render.frame++,rt===!0&&st.beginShadows();const z=p.state.shadowsArray;St.render(z,S,U),rt===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,O=m.transmissive;if(p.setupLights(),U.isArrayCamera){const at=U.cameras;if(O.length>0)for(let gt=0,Et=at.length;gt<Et;gt++){const At=at[gt];Nl(H,O,S,At)}tt&&Ot.render(S);for(let gt=0,Et=at.length;gt<Et;gt++){const At=at[gt];Dl(m,S,At,At.viewport)}}else O.length>0&&Nl(H,O,S,U),tt&&Ot.render(S),Dl(m,S,U);D!==null&&(E.updateMultisampleRenderTarget(D),E.updateRenderTargetMipmap(D)),S.isScene===!0&&S.onAfterRender(_,S,U),ce.resetDefaultState(),b=-1,w=null,v.pop(),v.length>0?(p=v[v.length-1],rt===!0&&st.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function po(S,U,z,H){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)z=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||q.intersectsSprite(S)){H&&Dt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Pt);const gt=K.update(S),Et=S.material;Et.visible&&m.push(S,gt,Et,z,Dt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||q.intersectsObject(S))){const gt=K.update(S),Et=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Dt.copy(S.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),Dt.copy(gt.boundingSphere.center)),Dt.applyMatrix4(S.matrixWorld).applyMatrix4(Pt)),Array.isArray(Et)){const At=gt.groups;for(let zt=0,Vt=At.length;zt<Vt;zt++){const Rt=At[zt],Qt=Et[Rt.materialIndex];Qt&&Qt.visible&&m.push(S,gt,Qt,z,Dt.z,Rt)}}else Et.visible&&m.push(S,gt,Et,z,Dt.z,null)}}const at=S.children;for(let gt=0,Et=at.length;gt<Et;gt++)po(at[gt],U,z,H)}function Dl(S,U,z,H){const O=S.opaque,at=S.transmissive,gt=S.transparent;p.setupLightsView(z),rt===!0&&st.setGlobalState(_.clippingPlanes,z),H&&ct.viewport(I.copy(H)),O.length>0&&or(O,U,z),at.length>0&&or(at,U,z),gt.length>0&&or(gt,U,z),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function Nl(S,U,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new ai(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float")?nr:Hn,minFilter:xn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));const at=p.state.transmissionRenderTarget[H.id],gt=H.viewport||I;at.setSize(gt.z,gt.w);const Et=_.getRenderTarget();_.setRenderTarget(at),_.getClearColor(V),G=_.getClearAlpha(),G<1&&_.setClearColor(16777215,.5),_.clear(),tt&&Ot.render(z);const At=_.toneMapping;_.toneMapping=ri;const zt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),rt===!0&&st.setGlobalState(_.clippingPlanes,H),or(S,z,H),E.updateMultisampleRenderTarget(at),E.updateRenderTargetMipmap(at),it.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let Rt=0,Qt=U.length;Rt<Qt;Rt++){const he=U[Rt],ue=he.object,Ge=he.geometry,ne=he.material,Lt=he.group;if(ne.side===Ce&&ue.layers.test(H.layers)){const Rn=ne.side;ne.side=ke,ne.needsUpdate=!0,Ul(ue,z,H,Ge,ne,Lt),ne.side=Rn,ne.needsUpdate=!0,Vt=!0}}Vt===!0&&(E.updateMultisampleRenderTarget(at),E.updateRenderTargetMipmap(at))}_.setRenderTarget(Et),_.setClearColor(V,G),zt!==void 0&&(H.viewport=zt),_.toneMapping=At}function or(S,U,z){const H=U.isScene===!0?U.overrideMaterial:null;for(let O=0,at=S.length;O<at;O++){const gt=S[O],Et=gt.object,At=gt.geometry,zt=H===null?gt.material:H,Vt=gt.group;Et.layers.test(z.layers)&&Ul(Et,U,z,At,zt,Vt)}}function Ul(S,U,z,H,O,at){S.onBeforeRender(_,U,z,H,O,at),S.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),O.onBeforeRender(_,U,z,H,S,at),O.transparent===!0&&O.side===Ce&&O.forceSinglePass===!1?(O.side=ke,O.needsUpdate=!0,_.renderBufferDirect(z,U,H,O,S,at),O.side=zn,O.needsUpdate=!0,_.renderBufferDirect(z,U,H,O,S,at),O.side=Ce):_.renderBufferDirect(z,U,H,O,S,at),S.onAfterRender(_,U,z,H,O,at)}function ar(S,U,z){U.isScene!==!0&&(U=jt);const H=vt.get(S),O=p.state.lights,at=p.state.shadowsArray,gt=O.state.version,Et=Tt.getParameters(S,O.state,at,U,z),At=Tt.getProgramCacheKey(Et);let zt=H.programs;H.environment=S.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(S.isMeshStandardMaterial?F:y).get(S.envMap||H.environment),H.envMapRotation=H.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,zt===void 0&&(S.addEventListener("dispose",Gt),zt=new Map,H.programs=zt);let Vt=zt.get(At);if(Vt!==void 0){if(H.currentProgram===Vt&&H.lightsStateVersion===gt)return Fl(S,Et),Vt}else Et.uniforms=Tt.getUniforms(S),S.onBeforeCompile(Et,_),Vt=Tt.acquireProgram(Et,At),zt.set(At,Vt),H.uniforms=Et.uniforms;const Rt=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Rt.clippingPlanes=st.uniform),Fl(S,Et),H.needsLights=Lu(S),H.lightsStateVersion=gt,H.needsLights&&(Rt.ambientLightColor.value=O.state.ambient,Rt.lightProbe.value=O.state.probe,Rt.directionalLights.value=O.state.directional,Rt.directionalLightShadows.value=O.state.directionalShadow,Rt.spotLights.value=O.state.spot,Rt.spotLightShadows.value=O.state.spotShadow,Rt.rectAreaLights.value=O.state.rectArea,Rt.ltc_1.value=O.state.rectAreaLTC1,Rt.ltc_2.value=O.state.rectAreaLTC2,Rt.pointLights.value=O.state.point,Rt.pointLightShadows.value=O.state.pointShadow,Rt.hemisphereLights.value=O.state.hemi,Rt.directionalShadowMap.value=O.state.directionalShadowMap,Rt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Rt.spotShadowMap.value=O.state.spotShadowMap,Rt.spotLightMatrix.value=O.state.spotLightMatrix,Rt.spotLightMap.value=O.state.spotLightMap,Rt.pointShadowMap.value=O.state.pointShadowMap,Rt.pointShadowMatrix.value=O.state.pointShadowMatrix),H.currentProgram=Vt,H.uniformsList=null,Vt}function Ol(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=Kr.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function Fl(S,U){const z=vt.get(S);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function Ru(S,U,z,H,O){U.isScene!==!0&&(U=jt),E.resetTextureUnits();const at=U.fog,gt=H.isMeshStandardMaterial?U.environment:null,Et=D===null?_.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Ue,At=(H.isMeshStandardMaterial?F:y).get(H.envMap||gt),zt=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Vt=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Rt=!!z.morphAttributes.position,Qt=!!z.morphAttributes.normal,he=!!z.morphAttributes.color;let ue=ri;H.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(ue=_.toneMapping);const Ge=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ne=Ge!==void 0?Ge.length:0,Lt=vt.get(H),Rn=p.state.lights;if(rt===!0&&(xt===!0||S!==w)){const je=S===w&&H.id===b;st.setState(H,S,je)}let ie=!1;H.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==Rn.state.version||Lt.outputColorSpace!==Et||O.isBatchedMesh&&Lt.batching===!1||!O.isBatchedMesh&&Lt.batching===!0||O.isBatchedMesh&&Lt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Lt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Lt.instancing===!1||!O.isInstancedMesh&&Lt.instancing===!0||O.isSkinnedMesh&&Lt.skinning===!1||!O.isSkinnedMesh&&Lt.skinning===!0||O.isInstancedMesh&&Lt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Lt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Lt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Lt.instancingMorph===!1&&O.morphTexture!==null||Lt.envMap!==At||H.fog===!0&&Lt.fog!==at||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==st.numPlanes||Lt.numIntersection!==st.numIntersection)||Lt.vertexAlphas!==zt||Lt.vertexTangents!==Vt||Lt.morphTargets!==Rt||Lt.morphNormals!==Qt||Lt.morphColors!==he||Lt.toneMapping!==ue||Lt.morphTargetsCount!==ne)&&(ie=!0):(ie=!0,Lt.__version=H.version);let sn=Lt.currentProgram;ie===!0&&(sn=ar(H,U,O));let Ci=!1,We=!1,ys=!1;const de=sn.getUniforms(),fn=Lt.uniforms;if(ct.useProgram(sn.program)&&(Ci=!0,We=!0,ys=!0),H.id!==b&&(b=H.id,We=!0),Ci||w!==S){ct.buffers.depth.getReversed()?(lt.copy(S.projectionMatrix),zd(lt),Hd(lt),de.setValue(C,"projectionMatrix",lt)):de.setValue(C,"projectionMatrix",S.projectionMatrix),de.setValue(C,"viewMatrix",S.matrixWorldInverse);const Wn=de.map.cameraPosition;Wn!==void 0&&Wn.setValue(C,Bt.setFromMatrixPosition(S.matrixWorld)),wt.logarithmicDepthBuffer&&de.setValue(C,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&de.setValue(C,"isOrthographic",S.isOrthographicCamera===!0),w!==S&&(w=S,We=!0,ys=!0)}if(O.isSkinnedMesh){de.setOptional(C,O,"bindMatrix"),de.setOptional(C,O,"bindMatrixInverse");const je=O.skeleton;je&&(je.boneTexture===null&&je.computeBoneTexture(),de.setValue(C,"boneTexture",je.boneTexture,E))}O.isBatchedMesh&&(de.setOptional(C,O,"batchingTexture"),de.setValue(C,"batchingTexture",O._matricesTexture,E),de.setOptional(C,O,"batchingIdTexture"),de.setValue(C,"batchingIdTexture",O._indirectTexture,E),de.setOptional(C,O,"batchingColorTexture"),O._colorsTexture!==null&&de.setValue(C,"batchingColorTexture",O._colorsTexture,E));const Ms=z.morphAttributes;if((Ms.position!==void 0||Ms.normal!==void 0||Ms.color!==void 0)&&kt.update(O,z,sn),(We||Lt.receiveShadow!==O.receiveShadow)&&(Lt.receiveShadow=O.receiveShadow,de.setValue(C,"receiveShadow",O.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(fn.envMap.value=At,fn.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(fn.envMapIntensity.value=U.environmentIntensity),We&&(de.setValue(C,"toneMappingExposure",_.toneMappingExposure),Lt.needsLights&&Cu(fn,ys),at&&H.fog===!0&&ft.refreshFogUniforms(fn,at),ft.refreshMaterialUniforms(fn,H,k,J,p.state.transmissionRenderTarget[S.id]),Kr.upload(C,Ol(Lt),fn,E)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Kr.upload(C,Ol(Lt),fn,E),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&de.setValue(C,"center",O.center),de.setValue(C,"modelViewMatrix",O.modelViewMatrix),de.setValue(C,"normalMatrix",O.normalMatrix),de.setValue(C,"modelMatrix",O.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const je=H.uniformsGroups;for(let Wn=0,Xn=je.length;Wn<Xn;Wn++){const Bl=je[Wn];N.update(Bl,sn),N.bind(Bl,sn)}}return sn}function Cu(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function Lu(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(S,U,z){vt.get(S.texture).__webglTexture=U,vt.get(S.depthTexture).__webglTexture=z;const H=vt.get(S);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=z===void 0,H.__autoAllocateDepthBuffer||it.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,U){const z=vt.get(S);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,z=0){D=S,R=U,T=z;let H=!0,O=null,at=!1,gt=!1;if(S){const At=vt.get(S);if(At.__useDefaultFramebuffer!==void 0)ct.bindFramebuffer(C.FRAMEBUFFER,null),H=!1;else if(At.__webglFramebuffer===void 0)E.setupRenderTarget(S);else if(At.__hasExternalTextures)E.rebindTextures(S,vt.get(S.texture).__webglTexture,vt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Rt=S.depthTexture;if(At.__boundDepthTexture!==Rt){if(Rt!==null&&vt.has(Rt)&&(S.width!==Rt.image.width||S.height!==Rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(S)}}const zt=S.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(gt=!0);const Vt=vt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Vt[U])?O=Vt[U][z]:O=Vt[U],at=!0):S.samples>0&&E.useMultisampledRTT(S)===!1?O=vt.get(S).__webglMultisampledFramebuffer:Array.isArray(Vt)?O=Vt[z]:O=Vt,I.copy(S.viewport),W.copy(S.scissor),B=S.scissorTest}else I.copy(dt).multiplyScalar(k).floor(),W.copy(Nt).multiplyScalar(k).floor(),B=$t;if(ct.bindFramebuffer(C.FRAMEBUFFER,O)&&H&&ct.drawBuffers(S,O),ct.viewport(I),ct.scissor(W),ct.setScissorTest(B),at){const At=vt.get(S.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+U,At.__webglTexture,z)}else if(gt){const At=vt.get(S.texture),zt=U||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,At.__webglTexture,z||0,zt)}b=-1},this.readRenderTargetPixels=function(S,U,z,H,O,at,gt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=vt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&gt!==void 0&&(Et=Et[gt]),Et){ct.bindFramebuffer(C.FRAMEBUFFER,Et);try{const At=S.texture,zt=At.format,Vt=At.type;if(!wt.textureFormatReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!wt.textureTypeReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-H&&z>=0&&z<=S.height-O&&C.readPixels(U,z,H,O,Xt.convert(zt),Xt.convert(Vt),at)}finally{const At=D!==null?vt.get(D).__webglFramebuffer:null;ct.bindFramebuffer(C.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(S,U,z,H,O,at,gt){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=vt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&gt!==void 0&&(Et=Et[gt]),Et){const At=S.texture,zt=At.format,Vt=At.type;if(!wt.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!wt.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=S.width-H&&z>=0&&z<=S.height-O){ct.bindFramebuffer(C.FRAMEBUFFER,Et);const Rt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Rt),C.bufferData(C.PIXEL_PACK_BUFFER,at.byteLength,C.STREAM_READ),C.readPixels(U,z,H,O,Xt.convert(zt),Xt.convert(Vt),0);const Qt=D!==null?vt.get(D).__webglFramebuffer:null;ct.bindFramebuffer(C.FRAMEBUFFER,Qt);const he=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await kd(C,he,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Rt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,at),C.deleteBuffer(Rt),C.deleteSync(he),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,U=null,z=0){S.isTexture!==!0&&(Os("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,S=arguments[1]);const H=Math.pow(2,-z),O=Math.floor(S.image.width*H),at=Math.floor(S.image.height*H),gt=U!==null?U.x:0,Et=U!==null?U.y:0;E.setTexture2D(S,0),C.copyTexSubImage2D(C.TEXTURE_2D,z,0,0,gt,Et,O,at),ct.unbindTexture()},this.copyTextureToTexture=function(S,U,z=null,H=null,O=0){S.isTexture!==!0&&(Os("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,S=arguments[1],U=arguments[2],O=arguments[3]||0,z=null);let at,gt,Et,At,zt,Vt,Rt,Qt,he;const ue=S.isCompressedTexture?S.mipmaps[O]:S.image;z!==null?(at=z.max.x-z.min.x,gt=z.max.y-z.min.y,Et=z.isBox3?z.max.z-z.min.z:1,At=z.min.x,zt=z.min.y,Vt=z.isBox3?z.min.z:0):(at=ue.width,gt=ue.height,Et=ue.depth||1,At=0,zt=0,Vt=0),H!==null?(Rt=H.x,Qt=H.y,he=H.z):(Rt=0,Qt=0,he=0);const Ge=Xt.convert(U.format),ne=Xt.convert(U.type);let Lt;U.isData3DTexture?(E.setTexture3D(U,0),Lt=C.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(E.setTexture2DArray(U,0),Lt=C.TEXTURE_2D_ARRAY):(E.setTexture2D(U,0),Lt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,U.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,U.unpackAlignment);const Rn=C.getParameter(C.UNPACK_ROW_LENGTH),ie=C.getParameter(C.UNPACK_IMAGE_HEIGHT),sn=C.getParameter(C.UNPACK_SKIP_PIXELS),Ci=C.getParameter(C.UNPACK_SKIP_ROWS),We=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,ue.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ue.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,At),C.pixelStorei(C.UNPACK_SKIP_ROWS,zt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Vt);const ys=S.isDataArrayTexture||S.isData3DTexture,de=U.isDataArrayTexture||U.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const fn=vt.get(S),Ms=vt.get(U),je=vt.get(fn.__renderTarget),Wn=vt.get(Ms.__renderTarget);ct.bindFramebuffer(C.READ_FRAMEBUFFER,je.__webglFramebuffer),ct.bindFramebuffer(C.DRAW_FRAMEBUFFER,Wn.__webglFramebuffer);for(let Xn=0;Xn<Et;Xn++)ys&&C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,vt.get(S).__webglTexture,O,Vt+Xn),S.isDepthTexture?(de&&C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,vt.get(U).__webglTexture,O,he+Xn),C.blitFramebuffer(At,zt,at,gt,Rt,Qt,at,gt,C.DEPTH_BUFFER_BIT,C.NEAREST)):de?C.copyTexSubImage3D(Lt,O,Rt,Qt,he+Xn,At,zt,at,gt):C.copyTexSubImage2D(Lt,O,Rt,Qt,he+Xn,At,zt,at,gt);ct.bindFramebuffer(C.READ_FRAMEBUFFER,null),ct.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else de?S.isDataTexture||S.isData3DTexture?C.texSubImage3D(Lt,O,Rt,Qt,he,at,gt,Et,Ge,ne,ue.data):U.isCompressedArrayTexture?C.compressedTexSubImage3D(Lt,O,Rt,Qt,he,at,gt,Et,Ge,ue.data):C.texSubImage3D(Lt,O,Rt,Qt,he,at,gt,Et,Ge,ne,ue):S.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,O,Rt,Qt,at,gt,Ge,ne,ue.data):S.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,O,Rt,Qt,ue.width,ue.height,Ge,ue.data):C.texSubImage2D(C.TEXTURE_2D,O,Rt,Qt,at,gt,Ge,ne,ue);C.pixelStorei(C.UNPACK_ROW_LENGTH,Rn),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ie),C.pixelStorei(C.UNPACK_SKIP_PIXELS,sn),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ci),C.pixelStorei(C.UNPACK_SKIP_IMAGES,We),O===0&&U.generateMipmaps&&C.generateMipmap(Lt),ct.unbindTexture()},this.copyTextureToTexture3D=function(S,U,z=null,H=null,O=0){return S.isTexture!==!0&&(Os("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,H=arguments[1]||null,S=arguments[2],U=arguments[3],O=arguments[4]||0),Os('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,U,z,H,O)},this.initRenderTarget=function(S){vt.get(S).__webglFramebuffer===void 0&&E.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?E.setTextureCube(S,0):S.isData3DTexture?E.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?E.setTexture2DArray(S,0):E.setTexture2D(S,0),ct.unbindTexture()},this.resetState=function(){R=0,T=0,D=null,ct.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}}class eu extends ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new en,this.environmentIntensity=1,this.environmentRotation=new en,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class nu{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Va,this.updateRanges=[],this.version=0,this.uuid=tn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=tn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=tn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Oe=new P;class Zs{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=ln(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=re(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ln(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ln(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ln(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ln(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array),r=re(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Le(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Zs(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Xa extends hn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Mt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Wi;const Es=new P,Xi=new P,Yi=new P,ji=new Z,As=new Z,iu=new It,Rr=new P,Rs=new P,Cr=new P,zc=new Z,Vo=new Z,Hc=new Z;class Gc extends ge{constructor(t=new Xa){if(super(),this.isSprite=!0,this.type="Sprite",Wi===void 0){Wi=new ve;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new nu(e,5);Wi.setIndex([0,1,2,0,2,3]),Wi.setAttribute("position",new Zs(n,3,0,!1)),Wi.setAttribute("uv",new Zs(n,2,3,!1))}this.geometry=Wi,this.material=t,this.center=new Z(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xi.setFromMatrixScale(this.matrixWorld),iu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Yi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xi.multiplyScalar(-Yi.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;Lr(Rr.set(-.5,-.5,0),Yi,o,Xi,i,r),Lr(Rs.set(.5,-.5,0),Yi,o,Xi,i,r),Lr(Cr.set(.5,.5,0),Yi,o,Xi,i,r),zc.set(0,0),Vo.set(1,0),Hc.set(1,1);let a=t.ray.intersectTriangle(Rr,Rs,Cr,!1,Es);if(a===null&&(Lr(Rs.set(-.5,.5,0),Yi,o,Xi,i,r),Vo.set(0,1),a=t.ray.intersectTriangle(Rr,Cr,Rs,!1,Es),a===null))return;const l=t.ray.origin.distanceTo(Es);l<t.near||l>t.far||e.push({distance:l,point:Es.clone(),uv:Ze.getInterpolation(Es,Rr,Rs,Cr,zc,Vo,Hc,new Z),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Lr(s,t,e,n,i,r){ji.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(As.x=r*ji.x-i*ji.y,As.y=i*ji.x+r*ji.y):As.copy(ji),s.copy(t),s.x+=As.x,s.y+=As.y,s.applyMatrix4(iu)}const Vc=new P,Wc=new ee,Xc=new ee,J0=new P,Yc=new It,Pr=new P,Wo=new Mn,jc=new It,Xo=new ir;class Q0 extends Ht{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Gl,this.bindMatrix=new It,this.bindMatrixInverse=new It,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new dn),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Pr),this.boundingBox.expandByPoint(Pr)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Mn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Pr),this.boundingSphere.expandByPoint(Pr)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wo.copy(this.boundingSphere),Wo.applyMatrix4(i),t.ray.intersectsSphere(Wo)!==!1&&(jc.copy(i).invert(),Xo.copy(t.ray).applyMatrix4(jc),!(this.boundingBox!==null&&Xo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Xo)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new ee,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Gl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===cd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;Wc.fromBufferAttribute(i.attributes.skinIndex,t),Xc.fromBufferAttribute(i.attributes.skinWeight,t),Vc.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const o=Xc.getComponent(r);if(o!==0){const a=Wc.getComponent(r);Yc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(J0.copy(Vc).applyMatrix4(Yc),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class su extends ge{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ru extends Me{constructor(t=null,e=1,n=1,i,r,o,a,l,c=ze,h=ze,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const qc=new It,tx=new It;class xl{constructor(t=[],e=[]){this.uuid=tn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new It)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new It;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const a=t[r]?t[r].matrixWorld:tx;qc.multiplyMatrices(a,e[r]),qc.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new xl(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new ru(e,t,t,Je,cn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const r=t.bones[n];let o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new su),this.bones.push(o),this.boneInverses.push(new It().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){const o=e[i];t.bones.push(o.uuid);const a=n[i];t.boneInverses.push(a.toArray())}return t}}class Ya extends Le{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const qi=new It,$c=new It,Ir=[],Kc=new dn,ex=new It,Cs=new Ht,Ls=new Mn;class nx extends Ht{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ya(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,ex)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new dn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qi),Kc.copy(t.boundingBox).applyMatrix4(qi),this.boundingBox.union(Kc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qi),Ls.copy(t.boundingSphere).applyMatrix4(qi),this.boundingSphere.union(Ls)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Cs.geometry=this.geometry,Cs.material=this.material,Cs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ls.copy(this.boundingSphere),Ls.applyMatrix4(n),t.ray.intersectsSphere(Ls)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,qi),$c.multiplyMatrices(n,qi),Cs.matrixWorld=$c,Cs.raycast(t,Ir);for(let o=0,a=Ir.length;o<a;o++){const l=Ir[o];l.instanceId=r,l.object=this,e.push(l)}Ir.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ya(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ru(new Float32Array(i*this.count),i,this.count,ll,cn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class _l extends hn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Qr=new P,to=new P,Zc=new It,Ps=new ir,Dr=new Mn,Yo=new P,Jc=new P;class co extends ge{constructor(t=new ve,e=new _l){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Qr.fromBufferAttribute(e,i-1),to.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Qr.distanceTo(to);t.setAttribute("lineDistance",new Ae(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere),Dr.applyMatrix4(i),Dr.radius+=r,t.ray.intersectsSphere(Dr)===!1)return;Zc.copy(i).invert(),Ps.copy(t.ray).applyMatrix4(Zc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=c){const p=h.getX(x),M=h.getX(x+1),v=Nr(this,t,Ps,l,p,M);v&&e.push(v)}if(this.isLineLoop){const x=h.getX(g-1),m=h.getX(f),p=Nr(this,t,Ps,l,x,m);p&&e.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=c){const p=Nr(this,t,Ps,l,x,x+1);p&&e.push(p)}if(this.isLineLoop){const x=Nr(this,t,Ps,l,g-1,f);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Nr(s,t,e,n,i,r){const o=s.geometry.attributes.position;if(Qr.fromBufferAttribute(o,i),to.fromBufferAttribute(o,r),e.distanceSqToSegment(Qr,to,Yo,Jc)>n)return;Yo.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Yo);if(!(l<t.near||l>t.far))return{distance:l,point:Jc.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const Qc=new P,th=new P;class ix extends co{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Qc.fromBufferAttribute(e,i),th.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Qc.distanceTo(th);t.setAttribute("lineDistance",new Ae(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class sx extends co{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class ou extends hn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const eh=new It,ja=new ir,Ur=new Mn,Or=new P;class rx extends ge{constructor(t=new ve,e=new ou){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere),Ur.applyMatrix4(i),Ur.radius+=r,t.ray.intersectsSphere(Ur)===!1)return;eh.copy(i).invert(),ja.copy(t.ray).applyMatrix4(eh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,x=f;g<x;g++){const m=c.getX(g);Or.fromBufferAttribute(u,m),nh(Or,m,l,i,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,x=f;g<x;g++)Or.fromBufferAttribute(u,g),nh(Or,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function nh(s,t,e,n,i,r,o){const a=ja.distanceSqToPoint(s);if(a<e){const l=new P;ja.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class ox extends Me{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class wn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new Z:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new P,i=[],r=[],o=[],a=new P,l=new It;for(let f=0;f<=t;f++){const g=f/t;i[f]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Te(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(Te(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class vl extends wn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Z){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class ax extends vl{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function yl(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const Fr=new P,jo=new yl,qo=new yl,$o=new yl;class lx extends wn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new P){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(Fr.subVectors(i[0],i[1]).add(i[0]),c=Fr);const u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Fr.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Fr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),jo.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,m),qo.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,m),$o.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(jo.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),qo.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),$o.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(jo.calc(l),qo.calc(l),$o.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new P().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ih(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function cx(s,t){const e=1-s;return e*e*t}function hx(s,t){return 2*(1-s)*s*t}function ux(s,t){return s*s*t}function Gs(s,t,e,n){return cx(s,t)+hx(s,e)+ux(s,n)}function dx(s,t){const e=1-s;return e*e*e*t}function fx(s,t){const e=1-s;return 3*e*e*s*t}function px(s,t){return 3*(1-s)*s*s*t}function mx(s,t){return s*s*s*t}function Vs(s,t,e,n,i){return dx(s,t)+fx(s,e)+px(s,n)+mx(s,i)}class au extends wn{constructor(t=new Z,e=new Z,n=new Z,i=new Z){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Z){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Vs(t,i.x,r.x,o.x,a.x),Vs(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class gx extends wn{constructor(t=new P,e=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new P){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Vs(t,i.x,r.x,o.x,a.x),Vs(t,i.y,r.y,o.y,a.y),Vs(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class lu extends wn{constructor(t=new Z,e=new Z){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Z){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Z){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xx extends wn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class cu extends wn{constructor(t=new Z,e=new Z,n=new Z){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Z){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Gs(t,i.x,r.x,o.x),Gs(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _x extends wn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Gs(t,i.x,r.x,o.x),Gs(t,i.y,r.y,o.y),Gs(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hu extends wn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Z){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(ih(a,l.x,c.x,h.x,u.x),ih(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new Z().fromArray(i))}return this}}var qa=Object.freeze({__proto__:null,ArcCurve:ax,CatmullRomCurve3:lx,CubicBezierCurve:au,CubicBezierCurve3:gx,EllipseCurve:vl,LineCurve:lu,LineCurve3:xx,QuadraticBezierCurve:cu,QuadraticBezierCurve3:_x,SplineCurve:hu});class vx extends wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new qa[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new qa[i.type]().fromJSON(i))}return this}}class sh extends vx{constructor(t){super(),this.type="Path",this.currentPoint=new Z,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new lu(this.currentPoint.clone(),new Z(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new cu(this.currentPoint.clone(),new Z(t,e),new Z(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new au(this.currentPoint.clone(),new Z(t,e),new Z(n,i),new Z(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new hu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){const c=new vl(t,e,n,i,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ei extends ve{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new P,h=new Z;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ae(o,3)),this.setAttribute("normal",new Ae(a,3)),this.setAttribute("uv",new Ae(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ei(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ho extends sh{constructor(t){super(t),this.uuid=tn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new sh().fromJSON(i))}return this}}const yx={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=uu(s,0,i,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,f;if(n&&(r=Tx(s,t,r,e)),s.length>80*e){a=c=s[0],l=h=s[1];for(let g=e;g<i;g+=e)u=s[g],d=s[g+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return Js(r,o,e,a,l,f,0),o}};function uu(s,t,e,n,i){let r,o;if(i===Ox(s,t,e,n)>0)for(r=t;r<e;r+=n)o=rh(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=rh(r,s[r],s[r+1],o);return o&&uo(o,o.next)&&(tr(o),o=o.next),o}function Ei(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(uo(e,e.next)||xe(e.prev,e,e.next)===0)){if(tr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Js(s,t,e,n,i,r,o){if(!s)return;!o&&r&&Lx(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?wx(s,n,i,r):Mx(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),tr(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=Sx(Ei(s),t,e),Js(s,t,e,n,i,r,2)):o===2&&bx(s,t,e,n,i,r):Js(Ei(s),t,e,n,i,r,1);break}}}function Mx(s){const t=s.prev,e=s,n=s.next;if(xe(t,e,n)>=0)return!1;const i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=i>r?i>o?i:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Ji(i,a,r,l,o,c,g.x,g.y)&&xe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function wx(s,t,e,n){const i=s.prev,r=s,o=s.next;if(xe(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,h=i.y,u=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,x=a>l?a>c?a:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,p=$a(f,g,t,e,n),M=$a(x,m,t,e,n);let v=s.prevZ,_=s.nextZ;for(;v&&v.z>=p&&_&&_.z<=M;){if(v.x>=f&&v.x<=x&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&Ji(a,h,l,u,c,d,v.x,v.y)&&xe(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==i&&_!==o&&Ji(a,h,l,u,c,d,_.x,_.y)&&xe(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=x&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&Ji(a,h,l,u,c,d,v.x,v.y)&&xe(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=M;){if(_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==i&&_!==o&&Ji(a,h,l,u,c,d,_.x,_.y)&&xe(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Sx(s,t,e){let n=s;do{const i=n.prev,r=n.next.next;!uo(i,r)&&du(i,n,n.next,r)&&Qs(i,r)&&Qs(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),tr(n),tr(n.next),n=s=r),n=n.next}while(n!==s);return Ei(n)}function bx(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Dx(o,a)){let l=fu(o,a);o=Ei(o,o.next),l=Ei(l,l.next),Js(o,t,e,n,i,r,0),Js(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Tx(s,t,e,n){const i=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=uu(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Ix(c));for(i.sort(Ex),r=0;r<i.length;r++)e=Ax(i[r],e);return e}function Ex(s,t){return s.x-t.x}function Ax(s,t){const e=Rx(s,t);if(!e)return t;const n=fu(e,s);return Ei(n,n.next),Ei(e,e.next)}function Rx(s,t){let e=t,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===r))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,l=i.x,c=i.y;let h=1/0,u;e=i;do r>=e.x&&e.x>=l&&r!==e.x&&Ji(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Qs(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&Cx(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function Cx(s,t){return xe(s.prev,s,t.prev)<0&&xe(t.next,s,s.next)<0}function Lx(s,t,e,n){let i=s;do i.z===0&&(i.z=$a(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Px(i)}function Px(s){let t,e,n,i,r,o,a,l,c=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,c*=2}while(o>1);return s}function $a(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Ix(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Ji(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function Dx(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Nx(s,t)&&(Qs(s,t)&&Qs(t,s)&&Ux(s,t)&&(xe(s.prev,s,t.prev)||xe(s,t.prev,t))||uo(s,t)&&xe(s.prev,s,s.next)>0&&xe(t.prev,t,t.next)>0)}function xe(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function uo(s,t){return s.x===t.x&&s.y===t.y}function du(s,t,e,n){const i=kr(xe(s,t,e)),r=kr(xe(s,t,n)),o=kr(xe(e,n,s)),a=kr(xe(e,n,t));return!!(i!==r&&o!==a||i===0&&Br(s,e,t)||r===0&&Br(s,n,t)||o===0&&Br(e,s,n)||a===0&&Br(e,t,n))}function Br(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function kr(s){return s>0?1:s<0?-1:0}function Nx(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&du(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Qs(s,t){return xe(s.prev,s,s.next)<0?xe(s,t,s.next)>=0&&xe(s,s.prev,t)>=0:xe(s,t,s.prev)<0||xe(s,s.next,t)<0}function Ux(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function fu(s,t){const e=new Ka(s.i,s.x,s.y),n=new Ka(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function rh(s,t,e,n){const i=new Ka(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function tr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Ka(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ox(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class Ws{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return Ws.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];oh(t),ah(n,t);let o=t.length;e.forEach(oh);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,ah(n,e[l]);const a=yx.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function oh(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function ah(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class sr extends ve{constructor(t=new ho([new Z(.5,.5),new Z(-.5,.5),new Z(-.5,-.5),new Z(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new Ae(i,3)),this.setAttribute("uv",new Ae(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Fx;let v,_=!1,L,R,T,D;p&&(v=p.getSpacedPoints(h),_=!0,d=!1,L=p.computeFrenetFrames(h,!1),R=new P,T=new P,D=new P),d||(m=0,f=0,g=0,x=0);const b=a.extractPoints(c);let w=b.shape;const I=b.holes;if(!Ws.isClockWise(w)){w=w.reverse();for(let tt=0,ot=I.length;tt<ot;tt++){const C=I[tt];Ws.isClockWise(C)&&(I[tt]=C.reverse())}}const B=Ws.triangulateShape(w,I),V=w;for(let tt=0,ot=I.length;tt<ot;tt++){const C=I[tt];w=w.concat(C)}function G(tt,ot,C){return ot||console.error("THREE.ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(ot,C)}const Y=w.length,J=B.length;function k(tt,ot,C){let Ct,it,wt;const ct=tt.x-ot.x,Ut=tt.y-ot.y,vt=C.x-tt.x,E=C.y-tt.y,y=ct*ct+Ut*Ut,F=ct*E-Ut*vt;if(Math.abs(F)>Number.EPSILON){const $=Math.sqrt(y),et=Math.sqrt(vt*vt+E*E),K=ot.x-Ut/$,Tt=ot.y+ct/$,ft=C.x-E/et,yt=C.y+vt/et,Kt=((ft-K)*E-(yt-Tt)*vt)/(ct*E-Ut*vt);Ct=K+ct*Kt-tt.x,it=Tt+Ut*Kt-tt.y;const st=Ct*Ct+it*it;if(st<=2)return new Z(Ct,it);wt=Math.sqrt(st/2)}else{let $=!1;ct>Number.EPSILON?vt>Number.EPSILON&&($=!0):ct<-Number.EPSILON?vt<-Number.EPSILON&&($=!0):Math.sign(Ut)===Math.sign(E)&&($=!0),$?(Ct=-Ut,it=ct,wt=Math.sqrt(y)):(Ct=ct,it=Ut,wt=Math.sqrt(y/2))}return new Z(Ct/wt,it/wt)}const nt=[];for(let tt=0,ot=V.length,C=ot-1,Ct=tt+1;tt<ot;tt++,C++,Ct++)C===ot&&(C=0),Ct===ot&&(Ct=0),nt[tt]=k(V[tt],V[C],V[Ct]);const ut=[];let dt,Nt=nt.concat();for(let tt=0,ot=I.length;tt<ot;tt++){const C=I[tt];dt=[];for(let Ct=0,it=C.length,wt=it-1,ct=Ct+1;Ct<it;Ct++,wt++,ct++)wt===it&&(wt=0),ct===it&&(ct=0),dt[Ct]=k(C[Ct],C[wt],C[ct]);ut.push(dt),Nt=Nt.concat(dt)}for(let tt=0;tt<m;tt++){const ot=tt/m,C=f*Math.cos(ot*Math.PI/2),Ct=g*Math.sin(ot*Math.PI/2)+x;for(let it=0,wt=V.length;it<wt;it++){const ct=G(V[it],nt[it],Ct);lt(ct.x,ct.y,-C)}for(let it=0,wt=I.length;it<wt;it++){const ct=I[it];dt=ut[it];for(let Ut=0,vt=ct.length;Ut<vt;Ut++){const E=G(ct[Ut],dt[Ut],Ct);lt(E.x,E.y,-C)}}}const $t=g+x;for(let tt=0;tt<Y;tt++){const ot=d?G(w[tt],Nt[tt],$t):w[tt];_?(T.copy(L.normals[0]).multiplyScalar(ot.x),R.copy(L.binormals[0]).multiplyScalar(ot.y),D.copy(v[0]).add(T).add(R),lt(D.x,D.y,D.z)):lt(ot.x,ot.y,0)}for(let tt=1;tt<=h;tt++)for(let ot=0;ot<Y;ot++){const C=d?G(w[ot],Nt[ot],$t):w[ot];_?(T.copy(L.normals[tt]).multiplyScalar(C.x),R.copy(L.binormals[tt]).multiplyScalar(C.y),D.copy(v[tt]).add(T).add(R),lt(D.x,D.y,D.z)):lt(C.x,C.y,u/h*tt)}for(let tt=m-1;tt>=0;tt--){const ot=tt/m,C=f*Math.cos(ot*Math.PI/2),Ct=g*Math.sin(ot*Math.PI/2)+x;for(let it=0,wt=V.length;it<wt;it++){const ct=G(V[it],nt[it],Ct);lt(ct.x,ct.y,u+C)}for(let it=0,wt=I.length;it<wt;it++){const ct=I[it];dt=ut[it];for(let Ut=0,vt=ct.length;Ut<vt;Ut++){const E=G(ct[Ut],dt[Ut],Ct);_?lt(E.x,E.y+v[h-1].y,v[h-1].x+C):lt(E.x,E.y,u+C)}}}q(),rt();function q(){const tt=i.length/3;if(d){let ot=0,C=Y*ot;for(let Ct=0;Ct<J;Ct++){const it=B[Ct];Pt(it[2]+C,it[1]+C,it[0]+C)}ot=h+m*2,C=Y*ot;for(let Ct=0;Ct<J;Ct++){const it=B[Ct];Pt(it[0]+C,it[1]+C,it[2]+C)}}else{for(let ot=0;ot<J;ot++){const C=B[ot];Pt(C[2],C[1],C[0])}for(let ot=0;ot<J;ot++){const C=B[ot];Pt(C[0]+Y*h,C[1]+Y*h,C[2]+Y*h)}}n.addGroup(tt,i.length/3-tt,0)}function rt(){const tt=i.length/3;let ot=0;xt(V,ot),ot+=V.length;for(let C=0,Ct=I.length;C<Ct;C++){const it=I[C];xt(it,ot),ot+=it.length}n.addGroup(tt,i.length/3-tt,1)}function xt(tt,ot){let C=tt.length;for(;--C>=0;){const Ct=C;let it=C-1;it<0&&(it=tt.length-1);for(let wt=0,ct=h+m*2;wt<ct;wt++){const Ut=Y*wt,vt=Y*(wt+1),E=ot+Ct+Ut,y=ot+it+Ut,F=ot+it+vt,$=ot+Ct+vt;Bt(E,y,F,$)}}}function lt(tt,ot,C){l.push(tt),l.push(ot),l.push(C)}function Pt(tt,ot,C){Dt(tt),Dt(ot),Dt(C);const Ct=i.length/3,it=M.generateTopUV(n,i,Ct-3,Ct-2,Ct-1);jt(it[0]),jt(it[1]),jt(it[2])}function Bt(tt,ot,C,Ct){Dt(tt),Dt(ot),Dt(Ct),Dt(ot),Dt(C),Dt(Ct);const it=i.length/3,wt=M.generateSideWallUV(n,i,it-6,it-3,it-2,it-1);jt(wt[0]),jt(wt[1]),jt(wt[3]),jt(wt[1]),jt(wt[2]),jt(wt[3])}function Dt(tt){i.push(l[tt*3+0]),i.push(l[tt*3+1]),i.push(l[tt*3+2])}function jt(tt){r.push(tt.x),r.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Bx(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new qa[i.type]().fromJSON(i)),new sr(n,t.options)}}const Fx={generateTopUV:function(s,t,e,n,i){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new Z(r,o),new Z(a,l),new Z(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],f=t[i*3+1],g=t[i*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Z(o,1-l),new Z(c,1-u),new Z(d,1-g),new Z(x,1-p)]:[new Z(a,1-l),new Z(h,1-u),new Z(f,1-g),new Z(m,1-p)]}};function Bx(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Ml extends ve{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let u=t;const d=(e-t)/i,f=new P,g=new Z;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){const p=r+m/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<i;x++){const m=x*(n+1);for(let p=0;p<n;p++){const M=p+m,v=M,_=M+n+1,L=M+n+2,R=M+1;a.push(v,_,R),a.push(_,L,R)}}this.setIndex(a),this.setAttribute("position",new Ae(l,3)),this.setAttribute("normal",new Ae(c,3)),this.setAttribute("uv",new Ae(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ml(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class vn extends hn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kh,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Sn extends vn{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Z(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Te(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Mt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Mt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Mt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class kx extends _l{static get type(){return"LineDashedMaterial"}constructor(t){super(),this.isLineDashedMaterial=!0,this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}function zr(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function zx(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Hx(s){function t(i,r){return s[i]-s[r]}const e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function lh(s,t,e){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=e[r]*t;for(let l=0;l!==t;++l)i[o++]=s[a+l]}return i}function pu(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push.apply(e,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=s[i++];while(r!==void 0)}class rr{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Gx extends rr{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vl,endingEnd:Vl}}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Wl:r=t,a=2*e-n;break;case Xl:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Wl:o=t,l=2*n-e;break;case Xl:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}const c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,M=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,v=(-1-f)*m+(1.5+f)*x+.5*g,_=f*m-f*x;for(let L=0;L!==a;++L)r[L]=p*o[h+L]+M*o[c+L]+v*o[l+L]+_*o[u+L];return r}}class Vx extends rr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}}class Wx extends rr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class bn{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=zr(e,this.TimeBufferType),this.values=zr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:zr(t.times,Array),values:zr(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Wx(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Vx(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Gx(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case qs:e=this.InterpolantFactoryMethodDiscrete;break;case $s:e=this.InterpolantFactoryMethodLinear;break;case mo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qs;case this.InterpolantFactoryMethodLinear:return $s;case this.InterpolantFactoryMethodSmooth:return mo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&zx(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===mo,r=t.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{const u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const x=e[u+g];if(x!==e[d+g]||x!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}bn.prototype.TimeBufferType=Float32Array;bn.prototype.ValueBufferType=Float32Array;bn.prototype.DefaultInterpolation=$s;class _s extends bn{constructor(t,e,n){super(t,e,n)}}_s.prototype.ValueTypeName="bool";_s.prototype.ValueBufferType=Array;_s.prototype.DefaultInterpolation=qs;_s.prototype.InterpolantFactoryMethodLinear=void 0;_s.prototype.InterpolantFactoryMethodSmooth=void 0;class mu extends bn{}mu.prototype.ValueTypeName="color";class fs extends bn{}fs.prototype.ValueTypeName="number";class Xx extends rr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e);let c=t*a;for(let h=c+a;c!==h;c+=4)ui.slerpFlat(r,0,o,c-a,o,c,l);return r}}class ps extends bn{InterpolantFactoryMethodLinear(t){return new Xx(this.times,this.values,this.getValueSize(),t)}}ps.prototype.ValueTypeName="quaternion";ps.prototype.InterpolantFactoryMethodSmooth=void 0;class vs extends bn{constructor(t,e,n){super(t,e,n)}}vs.prototype.ValueTypeName="string";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=qs;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;class ms extends bn{}ms.prototype.ValueTypeName="vector";class Yx{constructor(t="",e=-1,n=[],i=hd){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=tn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(qx(n[o]).scale(i));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,o=n.length;r!==o;++r)e.push(bn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const r=e.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=Hx(l);l=lh(l,1,h),c=lh(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new fs(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){const c=t[a],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,x){if(f.length!==0){const m=[],p=[];pu(f,m,p,g),m.length!==0&&x.push(new u(d,m,p))}},i=[],r=t.name||"default",o=t.fps||30,a=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)f[d[g].morphTargets[x]]=-1;for(const x in f){const m=[],p=[];for(let M=0;M!==d[g].morphTargets.length;++M){const v=d[g];m.push(v.time),p.push(v.morphTarget===x?1:0)}i.push(new fs(".morphTargetInfluence["+x+"]",m,p))}l=f.length*o}else{const f=".bones["+e[u].name+"]";n(ms,f+".position",d,"pos",i),n(ps,f+".quaternion",d,"rot",i),n(ms,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function jx(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return fs;case"vector":case"vector2":case"vector3":case"vector4":return ms;case"color":return mu;case"quaternion":return ps;case"bool":case"boolean":return _s;case"string":return vs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function qx(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=jx(s.type);if(s.times===void 0){const e=[],n=[];pu(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}const ni={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class $x{constructor(t,e,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const Kx=new $x;class Ai{constructor(t){this.manager=t!==void 0?t:Kx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Ai.DEFAULT_MATERIAL_NAME="__DEFAULT";const Nn={};class Zx extends Error{constructor(t,e){super(t),this.response=e}}class eo extends Ai{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=ni.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(Nn[t]!==void 0){Nn[t].push({onLoad:e,onProgress:n,onError:i});return}Nn[t]=[],Nn[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Nn[t],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let x=0;const m=new ReadableStream({start(p){M();function M(){u.read().then(({done:v,value:_})=>{if(v)p.close();else{x+=_.byteLength;const L=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let R=0,T=h.length;R<T;R++){const D=h[R];D.onProgress&&D.onProgress(L)}p.enqueue(_),M()}},v=>{p.error(v)})}}});return new Response(m)}else throw new Zx(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{ni.add(t,c);const h=Nn[t];delete Nn[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Nn[t];if(h===void 0)throw this.manager.itemError(t),c;delete Nn[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Jx extends Ai{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=ni.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=Ks("img");function l(){h(),ni.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(u){h(),i&&i(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class ci extends Ai{constructor(t){super(t)}load(t,e,n,i){const r=new Me,o=new Jx(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class fo extends ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Mt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Ko=new It,ch=new P,hh=new P;class wl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Z(512,512),this.map=null,this.mapPass=null,this.matrix=new It,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ml,this._frameExtents=new Z(1,1),this._viewportCount=1,this._viewports=[new ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ch.setFromMatrixPosition(t.matrixWorld),e.position.copy(ch),hh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(hh),e.updateMatrixWorld(),Ko.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ko),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ko)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Qx extends wl{constructor(){super(new Be(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=us*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class t_ extends fo{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Qx}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const uh=new It,Is=new P,Zo=new P;class e_ extends wl{constructor(){super(new Be(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Z(4,2),this._viewportCount=6,this._viewports=[new ee(2,1,1,1),new ee(0,1,1,1),new ee(3,1,1,1),new ee(1,1,1,1),new ee(3,0,1,1),new ee(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Is.setFromMatrixPosition(t.matrixWorld),n.position.copy(Is),Zo.copy(n.position),Zo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Zo),n.updateMatrixWorld(),i.makeTranslation(-Is.x,-Is.y,-Is.z),uh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uh)}}class gu extends fo{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new e_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class n_ extends wl{constructor(){super(new ao(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xu extends fo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.shadow=new n_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class i_ extends fo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Xs{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class s_ extends Ai{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=ni.get(t);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(c=>{e&&e(c),r.manager.itemEnd(t)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(t,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ni.add(t,c),e&&e(c),r.manager.itemEnd(t),c}).catch(function(c){i&&i(c),ni.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});ni.add(t,l),r.manager.itemStart(t)}}const Sl="\\[\\]\\.:\\/",r_=new RegExp("["+Sl+"]","g"),bl="[^"+Sl+"]",o_="[^"+Sl.replace("\\.","")+"]",a_=/((?:WC+[\/:])*)/.source.replace("WC",bl),l_=/(WCOD+)?/.source.replace("WCOD",o_),c_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bl),h_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bl),u_=new RegExp("^"+a_+l_+c_+h_+"$"),d_=["material","materials","bones","map"];class f_{constructor(t,e,n){const i=n||oe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class oe{constructor(t,e,n){this.path=e,this.parsedPath=n||oe.parseTrackName(e),this.node=oe.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new oe.Composite(t,e,n):new oe(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(r_,"")}static parseTrackName(t){const e=u_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);d_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===e||a.uuid===e)return a;const l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=oe.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const o=t[i];if(o===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}oe.Composite=f_;oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};oe.prototype.GetterByBindingType=[oe.prototype._getValue_direct,oe.prototype._getValue_array,oe.prototype._getValue_arrayElement,oe.prototype._getValue_toArray];oe.prototype.SetterByBindingTypeAndVersioning=[[oe.prototype._setValue_direct,oe.prototype._setValue_direct_setNeedsUpdate,oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_array,oe.prototype._setValue_array_setNeedsUpdate,oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_arrayElement,oe.prototype._setValue_arrayElement_setNeedsUpdate,oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_fromArray,oe.prototype._setValue_fromArray_setNeedsUpdate,oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const dh=new It;class p_{constructor(t,e,n=0,i=1/0){this.ray=new ir(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new fl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return dh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(dh),this}intersectObject(t,e=!0,n=[]){return Za(t,this,n,e),n.sort(fh),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Za(t[i],this,n,e);return n.sort(fh),n}}function fh(s,t){return s.distance-t.distance}function Za(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)Za(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sl);function m_(){const s=document.createElement("canvas");s.width=1024,s.height=768;const t=s.getContext("2d");if(!t)throw new Error("无法创建墙面纹理。");const e=t.createLinearGradient(0,0,0,s.height);e.addColorStop(0,"#f0e6ce"),e.addColorStop(1,"#ddd1b7"),t.fillStyle=e,t.fillRect(0,0,s.width,s.height);for(let i=0;i<2400;i+=1){const r=Math.random()*s.width,o=Math.random()*s.height,a=Math.random()*.08,l=Math.random()*2.4+.4;t.fillStyle=`rgba(90, 68, 43, ${a.toFixed(3)})`,t.fillRect(r,o,l,l)}t.strokeStyle="rgba(113, 86, 58, 0.15)",t.lineWidth=12,t.strokeRect(12,12,s.width-24,s.height-24);const n=new ox(s);return n.needsUpdate=!0,n}class g_{constructor(t){A(this,"renderer");A(this,"scene",new eu);A(this,"camera",new Be(42,1,.1,100));A(this,"wallBounds",{minX:-8,maxX:8,minY:.8,maxY:13,z:0});A(this,"wallMesh");A(this,"wallFrame");A(this,"sill");A(this,"wallPlane",new Qn(new P(0,0,1),0));A(this,"leftMask");A(this,"rightMask");A(this,"raycaster",new p_);A(this,"pointer",new Z);A(this,"handleResize",()=>{const t=this.container.clientWidth,e=this.container.clientHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e),this.leftMask.style.display!=="none"&&this.updateMaskPositions()});this.container=t,this.renderer=new Z0({antialias:!0,alpha:!0}),this.renderer.setClearColor(0,0),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!1,this.renderer.outputColorSpace=me,this.renderer.sortObjects=!0,this.container.append(this.renderer.domElement),this.camera.position.set(0,7.5,24),this.camera.lookAt(0,6.8,3),this.scene.add(new i_(16248802,1.5));const e=new xu(16774111,2.5);e.position.set(0,1.5,18),e.target.position.set(0,7,0),e.castShadow=!1,this.scene.add(e),this.scene.add(e.target);const n=new gu(14470584,18,35,2);n.position.set(-6,2,8),this.scene.add(n);const i=new vn({map:m_(),roughness:.95,metalness:0});this.wallMesh=new Ht(new Ve(this.wallBounds.maxX-this.wallBounds.minX,this.wallBounds.maxY-this.wallBounds.minY),i),this.wallMesh.position.set(0,(this.wallBounds.minY+this.wallBounds.maxY)/2,this.wallBounds.z),this.wallMesh.receiveShadow=!0,this.scene.add(this.wallMesh),this.wallFrame=new Ht(new un(16.6,9.6,.36),new vn({color:new Mt("#7f6a54"),roughness:.8,metalness:.04})),this.wallFrame.position.set(0,5.3,-.22),this.scene.add(this.wallFrame),this.sill=new Ht(new un(17.8,.85,4.2),new vn({color:new Mt("#d0c3b2"),roughness:.94})),this.sill.position.set(0,.05,1.15),this.scene.add(this.sill);const r={position:"absolute",top:"0",height:"100%",background:"transparent",display:"block",zIndex:"3",pointerEvents:"none"};this.leftMask=document.createElement("div"),Object.assign(this.leftMask.style,{...r,left:"0",width:"0"}),this.container.append(this.leftMask),this.rightMask=document.createElement("div"),Object.assign(this.rightMask.style,{...r,right:"0",width:"0"}),this.container.append(this.rightMask),this.handleResize(),window.addEventListener("resize",this.handleResize)}worldToScreen(t){const e=t.clone().project(this.camera),n=(e.x*.5+.5)*this.container.clientWidth,i=(-e.y*.5+.5)*this.container.clientHeight,r=e.z>-1&&e.z<1;return{x:n,y:i,visible:r}}intersectWall(t,e){const n=this.renderer.domElement.getBoundingClientRect();this.pointer.x=(t-n.left)/n.width*2-1,this.pointer.y=-((e-n.top)/n.height)*2+1,this.raycaster.setFromCamera(this.pointer,this.camera);const i=new P;return this.raycaster.ray.intersectPlane(this.wallPlane,i)?i:null}raycastObjects(t,e,n){const i=this.renderer.domElement.getBoundingClientRect();return this.pointer.x=(t-i.left)/i.width*2-1,this.pointer.y=-((e-i.top)/i.height)*2+1,this.raycaster.setFromCamera(this.pointer,this.camera),this.raycaster.intersectObjects(n,!0)}removeWallBackground(){this.scene.remove(this.wallMesh,this.wallFrame,this.sill)}setClipping(t){}updateMaskPositions(){const t=this.worldToScreen(new P(this.wallBounds.minX,5,this.wallBounds.z)),e=this.worldToScreen(new P(this.wallBounds.maxX,5,this.wallBounds.z)),n=this.container.clientWidth,i=Math.max(0,t.x),r=Math.max(0,n-e.x);this.leftMask.style.width=`${i}px`,this.rightMask.style.width=`${r}px`;const o=i,a=n-r;this.renderer.domElement.style.clipPath=`inset(0 ${n-a}px 0 ${o}px)`}render(){this.renderer.render(this.scene,this.camera)}}class x_{constructor(){A(this,"_lang","zh");A(this,"listeners",[])}get current(){return this._lang}setLang(t){if(this._lang!==t){this._lang=t;for(const e of this.listeners)e(t)}}onChange(t){this.listeners.push(t)}t(t,e){return this._lang==="zh"?t:e??t}}const fe=new x_;class __{constructor(t,e,n){this.bounds=t,this.width=e,this.height=n}index(t){return t.row*this.width+t.col}isInside(t){return t.col>=0&&t.col<this.width&&t.row>=0&&t.row<this.height}worldToCell(t,e){if(t<this.bounds.minX||t>this.bounds.maxX||e<this.bounds.minY||e>this.bounds.maxY)return null;const n=(t-this.bounds.minX)/(this.bounds.maxX-this.bounds.minX),i=(e-this.bounds.minY)/(this.bounds.maxY-this.bounds.minY),r=Math.min(this.width-1,Math.max(0,Math.floor(n*this.width))),o=Math.min(this.height-1,Math.max(0,Math.floor(i*this.height)));return{col:r,row:o}}cellToWorld(t){const e=this.bounds.minX+(t.col+.5)/this.width*(this.bounds.maxX-this.bounds.minX),n=this.bounds.minY+(t.row+.5)/this.height*(this.bounds.maxY-this.bounds.minY);return{x:e,y:n}}rectToCells(t){const e=this.worldToCell(t.x-t.width/2,t.y-t.height/2)??{col:0,row:0},n=this.worldToCell(t.x+t.width/2,t.y+t.height/2)??{col:this.width-1,row:this.height-1};return{minCol:Math.min(e.col,n.col),maxCol:Math.max(e.col,n.col),minRow:Math.min(e.row,n.row),maxRow:Math.max(e.row,n.row)}}}class v_{constructor(t,e){A(this,"width",512);A(this,"height",256);A(this,"mapper");A(this,"scene",new eu);A(this,"camera");A(this,"renderTarget");A(this,"readBuffer",new Uint8Array(this.width*this.height*4));A(this,"platformMask",new Uint8Array(this.width*this.height));A(this,"shadowMask",new Uint8Array(this.width*this.height));A(this,"walkableMask",new Uint8Array(this.width*this.height));A(this,"wallMask",new Uint8Array(this.width*this.height));A(this,"lastExpandInfo","");this.renderer=t,this.mapper=new __(e,this.width,this.height),this.camera=new ao(e.minX,e.maxX,e.maxY,e.minY,.01,20),this.camera.position.set(0,(e.minY+e.maxY)/2,10),this.camera.lookAt(0,(e.minY+e.maxY)/2,e.z),this.renderTarget=new ai(this.width,this.height,{depthBuffer:!1,stencilBuffer:!1,magFilter:Ne,minFilter:Ne}),this.renderTarget.texture.generateMipmaps=!1}dispose(){this.renderTarget.dispose(),this.renderTarget.texture.dispose()}get texture(){return this.renderTarget.texture}get mask(){return this.walkableMask}getPlatformMask(){return this.platformMask}getShadowMask(){return this.shadowMask}addObject(t){this.scene.add(t.shadowMaskMesh)}buildPlatformMask(t){this.platformMask.fill(0);for(const e of t){const n=this.mapper.rectToCells(e.data);for(let i=n.minRow;i<=n.maxRow;i+=1)for(let r=n.minCol;r<=n.maxCol;r+=1)this.platformMask[i*this.width+r]=1}this.mergeMasks()}refreshVisual(){const t=this.renderer.getRenderTarget();this.renderer.setRenderTarget(this.renderTarget),this.renderer.setClearColor(0,1),this.renderer.clear(),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(t),this.renderer.setClearColor(0,0)}captureMask(){this.refreshVisual(),this.renderer.readRenderTargetPixels(this.renderTarget,0,0,this.width,this.height,this.readBuffer);for(let t=0;t<this.height;t+=1){const e=this.height-1-t;for(let n=0;n<this.width;n+=1)this.shadowMask[t*this.width+n]=this.readBuffer[(e*this.width+n)*4]>24?1:0}this.expandToLowerRows(this.shadowMask,0),this.mergeMasks()}expandToLowerRows(t,e){let n=this.height,i=0;for(let a=0;a<this.height;a+=1)for(let l=0;l<this.width;l+=1)t[a*this.width+l]===1&&(n=Math.min(n,a),i=Math.max(i,a));for(let a=0;a<e;a+=1){const l=new Uint8Array(t.length);l.set(t);for(let c=0;c<this.height-1;c+=1)for(let h=0;h<this.width;h+=1)l[c*this.width+h]===0&&l[(c+1)*this.width+h]===1&&(t[c*this.width+h]=1)}let r=this.height,o=0;for(let a=0;a<this.height;a+=1)for(let l=0;l<this.width;l+=1)t[a*this.width+l]===1&&(r=Math.min(r,a),o=Math.max(o,a));this.lastExpandInfo=`pre:${n}-${i} post:${r}-${o}`}fillBridgeGap(t){let e;if(t&&t.length>0&&Array.isArray(t[0])){let n=this.height,i=0;for(let a=0;a<this.height;a+=1)for(let l=0;l<this.width;l+=1)this.platformMask[a*this.width+l]===1&&(n=Math.min(n,a),i=Math.max(i,a));if(n>=this.height)return;const r=this.mapper.bounds.minY+n/this.height*(this.mapper.bounds.maxY-this.mapper.bounds.minY),o=this.mapper.bounds.minY+(i+1)/this.height*(this.mapper.bounds.maxY-this.mapper.bounds.minY);e=t.map(([a,l])=>({xMin:a,xMax:l,yMin:r,yMax:o}))}else if(t)e=t;else return;for(const n of e){const i=this.mapper.worldToCell(n.xMin,this.mapper.bounds.minY+.01),r=this.mapper.worldToCell(n.xMax,this.mapper.bounds.minY+.01),o=this.mapper.worldToCell(n.xMin,n.yMin),a=this.mapper.worldToCell(n.xMin,n.yMax),l=(i==null?void 0:i.col)??0,c=(r==null?void 0:r.col)??this.width-1,h=(o==null?void 0:o.row)??0,u=(a==null?void 0:a.row)??this.height-1,d=Math.min(h,u),f=Math.max(h,u);for(let g=l;g<=c;g+=1){let x=!1;for(let m=d;m<=f;m+=1)if(this.platformMask[m*this.width+g]===1){x=!0;break}if(!x)for(let m=d;m<=f;m+=1){const p=m*this.width+g;this.wallMask[p]!==1&&(this.walkableMask[p]=1)}}}}clearBridgeGap(){this.mergeMasks()}setWalls(t){this.wallMask.fill(0);for(const e of t){const n=this.mapper.rectToCells(e);for(let i=n.minRow;i<=n.maxRow;i+=1)for(let r=n.minCol;r<=n.maxCol;r+=1)this.wallMask[i*this.width+r]=1}this.mergeMasks()}mergeMasks(){for(let t=0;t<this.walkableMask.length;t+=1)this.wallMask[t]===1?this.walkableMask[t]=0:this.walkableMask[t]=this.platformMask[t]}}const X=s=>{const t="/luminal/";return s.startsWith("/")?t+s.slice(1):t+s};class y_{constructor(){A(this,"audioContext",null);A(this,"audioBuffers",new Map);A(this,"masterVolume",1);A(this,"unlocked",!1)}unlock(){if(!this.unlocked)try{this.audioContext||(this.audioContext=new(window.AudioContext||window.webkitAudioContext)),this.audioContext.resume(),this.unlocked=!0,console.log("[SfxManager] Audio context unlocked")}catch(t){console.error("[SfxManager] Failed to create AudioContext:",t)}}async preload(t){if(!this.audioContext){const e=window.AudioContext||window.webkitAudioContext;this.audioContext=new e,console.log("[SfxManager] AudioContext created for preloading")}for(const e of t)if(!this.audioBuffers.has(e))try{const i=await(await fetch(`${X("/sound/")}${e}.m4a`)).arrayBuffer(),r=await this.audioContext.decodeAudioData(i);this.audioBuffers.set(e,r),console.log(`[SfxManager] Loaded: ${e}`)}catch(n){console.error(`[SfxManager] Failed to load ${e}:`,n)}}play(t,e){if(!this.audioContext){console.warn("[SfxManager] AudioContext not available");return}this.audioContext.state==="suspended"&&this.unlocked&&this.audioContext.resume();const n=this.audioBuffers.get(t);if(!n){console.warn(`[SfxManager] Sound not loaded: ${t}`);return}const i=this.audioContext.createGain();i.gain.value=(e??this.masterVolume)*this.masterVolume,i.connect(this.audioContext.destination);const r=this.audioContext.createBufferSource();r.buffer=n,r.connect(i),r.start(0),r.onended=()=>{r.disconnect(),i.disconnect()}}setMasterVolume(t){this.masterVolume=Math.max(0,Math.min(1,t))}getMasterVolume(){return this.masterVolume}}const _n=new y_,pn=class pn{constructor(t){A(this,"group",new Ee);A(this,"innerMesh");A(this,"outerMesh");A(this,"innerMat");A(this,"outerMat");A(this,"elapsed",0);A(this,"activated",!1);A(this,"activatedCallback",null);A(this,"deactivatedCallback",null);A(this,"touchedThisFrame",!1);A(this,"wasInsideMap",new WeakMap);A(this,"toggleState","A");A(this,"toggleCallbacks",[]);A(this,"toggleHalfLeft",null);A(this,"toggleHalfRight",null);A(this,"toggleHalfLeftMat",null);A(this,"toggleHalfRightMat",null);A(this,"toggleImageA",null);A(this,"toggleImageB",null);A(this,"toggleImageAMat",null);A(this,"toggleImageBMat",null);this.data=t;const e=t.visualRadius??.18;if(this.outerMat=new le({color:pn.IDLE_COLOR,transparent:!0,opacity:.35,depthTest:!1}),this.outerMesh=new Ht(new ei(e*2.2,32),this.outerMat),this.outerMesh.renderOrder=4,this.group.add(this.outerMesh),this.innerMat=new le({color:pn.IDLE_COLOR,transparent:!0,opacity:.95,depthTest:!1}),this.innerMesh=new Ht(new ei(e,32),this.innerMat),this.innerMesh.renderOrder=5,this.group.add(this.innerMesh),this.group.position.set(t.x,t.y,.2),t.mode==="toggle")if(this.innerMesh.visible=!1,this.outerMesh.visible=!1,this.toggleState=t.initialToggleState??"A",t.imageA||t.imageB){const n=t.imageWidth??.8,i=t.imageHeight??.5;t.imageA&&(this.toggleImageAMat=new Xa({transparent:!0,depthTest:!1,opacity:.95}),new ci().load(t.imageA,r=>{this.toggleImageAMat&&(this.toggleImageAMat.map=r,this.toggleImageAMat.needsUpdate=!0)}),this.toggleImageA=new Gc(this.toggleImageAMat),this.toggleImageA.scale.set(n,i,1),this.toggleImageA.position.set(0,0,.02),this.toggleImageA.renderOrder=0,this.group.add(this.toggleImageA)),t.imageB&&(this.toggleImageBMat=new Xa({transparent:!0,depthTest:!1,opacity:.95}),new ci().load(t.imageB,r=>{this.toggleImageBMat&&(this.toggleImageBMat.map=r,this.toggleImageBMat.needsUpdate=!0)}),this.toggleImageB=new Gc(this.toggleImageBMat),this.toggleImageB.scale.set(n,i,1),this.toggleImageB.position.set(0,0,.02),this.toggleImageB.renderOrder=0,this.group.add(this.toggleImageB)),this.applyToggleVisual()}else{const n=t.visualRadius??.18,i=n*1.8,r=n*1.1,o=new Mt("#ffd83a"),a=new Mt("#665a30");this.toggleHalfLeftMat=new le({color:a,transparent:!0,opacity:.95,depthTest:!1}),this.toggleHalfLeft=new Ht(new Ve(i,r),this.toggleHalfLeftMat),this.toggleHalfLeft.position.set(-i/2,0,.02),this.toggleHalfLeft.renderOrder=6,this.group.add(this.toggleHalfLeft),this.toggleHalfRightMat=new le({color:o,transparent:!0,opacity:.95,depthTest:!1}),this.toggleHalfRight=new Ht(new Ve(i,r),this.toggleHalfRightMat),this.toggleHalfRight.position.set(i/2,0,.02),this.toggleHalfRight.renderOrder=6,this.group.add(this.toggleHalfRight),this.applyToggleVisual()}}applyToggleVisual(){if(this.toggleImageA||this.toggleImageB){this.toggleState==="A"?(this.toggleImageA&&(this.toggleImageA.visible=!0),this.toggleImageB&&(this.toggleImageB.visible=!1)):(this.toggleImageA&&(this.toggleImageA.visible=!1),this.toggleImageB&&(this.toggleImageB.visible=!0));return}if(!this.toggleHalfLeftMat||!this.toggleHalfRightMat)return;const t=new Mt("#ffd83a"),e=new Mt("#665a30");this.toggleState==="A"?(this.toggleHalfRightMat.color.copy(t),this.toggleHalfLeftMat.color.copy(e)):(this.toggleHalfLeftMat.color.copy(t),this.toggleHalfRightMat.color.copy(e))}onToggle(t){this.toggleCallbacks.push(t)}get currentToggleState(){return this.toggleState}onActivated(t){this.activatedCallback=t}onDeactivated(t){this.deactivatedCallback=t}checkTrigger(t,e,n){const i=t-this.data.x,r=e-this.data.y;let o;if(this.data.triggerHalfWidth!==void 0||this.data.triggerHalfHeight!==void 0){const l=this.data.triggerHalfWidth??this.data.triggerRadius??.5,c=this.data.triggerHalfHeight??this.data.triggerRadius??.5;o=Math.abs(i)<=l&&Math.abs(r)<=c}else{const l=this.data.triggerRadius??.5;o=Math.hypot(i,r)<=l}const a=this.data.mode??"once";if(a==="once")o&&!this.activated&&this.setActivated(!0);else if(a==="continuous")o&&(this.touchedThisFrame=!0);else if(a==="toggle"&&n){const l=this.wasInsideMap.get(n)??!1;if(o&&!l){this.toggleState=this.toggleState==="A"?"B":"A",this.applyToggleVisual();for(const c of this.toggleCallbacks)c(this.toggleState);_n.play("switch")}this.wasInsideMap.set(n,o)}}setActivated(t){var n,i;if(this.activated===t)return;this.activated=t,_n.play("switch");const e=t?pn.ACTIVE_COLOR:pn.IDLE_COLOR;this.innerMat.color.copy(e),this.outerMat.color.copy(e),t?(this.innerMat.opacity=1,this.outerMat.opacity=.45,(n=this.activatedCallback)==null||n.call(this)):(i=this.deactivatedCallback)==null||i.call(this)}reset(){this.activated=!1,this.touchedThisFrame=!1,this.innerMat.color.copy(pn.IDLE_COLOR),this.outerMat.color.copy(pn.IDLE_COLOR),this.elapsed=0,this.data.mode==="toggle"&&(this.toggleState=this.data.initialToggleState??"A",this.applyToggleVisual(),this.wasInsideMap=new WeakMap)}get isActivated(){return this.activated}update(t){if(this.elapsed+=t,(this.data.mode??"once")==="continuous"&&(this.setActivated(this.touchedThisFrame),this.touchedThisFrame=!1),this.data.mode==="toggle"){if(this.toggleImageAMat||this.toggleImageBMat){this.toggleImageAMat&&(this.toggleImageAMat.opacity=1),this.toggleImageBMat&&(this.toggleImageBMat.opacity=1);return}const n=.85+(Math.sin(this.elapsed*3)+1)/2*.15;this.toggleState==="A"?(this.toggleHalfRightMat&&(this.toggleHalfRightMat.opacity=n),this.toggleHalfLeftMat&&(this.toggleHalfLeftMat.opacity=.6)):(this.toggleHalfLeftMat&&(this.toggleHalfLeftMat.opacity=n),this.toggleHalfRightMat&&(this.toggleHalfRightMat.opacity=.6));return}if(this.activated){const e=(Math.sin(this.elapsed*3)+1)/2;this.innerMat.opacity=.9+e*.1,this.outerMat.opacity=.35+e*.15;const n=1+e*.05;this.outerMesh.scale.set(n,n,1)}else{const e=(Math.sin(this.elapsed*4)+1)/2;this.innerMat.opacity=.75+e*.25,this.outerMat.opacity=.25+e*.25;const n=1+e*.1;this.outerMesh.scale.set(n,n,1)}}dispose(){var t,e,n,i,r,o,a,l;this.innerMesh.geometry.dispose(),this.outerMesh.geometry.dispose(),this.innerMat.dispose(),this.outerMat.dispose(),this.toggleHalfLeft&&(this.toggleHalfLeft.geometry.dispose(),(t=this.toggleHalfLeftMat)==null||t.dispose()),this.toggleHalfRight&&(this.toggleHalfRight.geometry.dispose(),(e=this.toggleHalfRightMat)==null||e.dispose()),this.toggleImageA&&((i=(n=this.toggleImageAMat)==null?void 0:n.map)==null||i.dispose(),(r=this.toggleImageAMat)==null||r.dispose()),this.toggleImageB&&((a=(o=this.toggleImageBMat)==null?void 0:o.map)==null||a.dispose(),(l=this.toggleImageBMat)==null||l.dispose())}};A(pn,"IDLE_COLOR",new Mt("#ff9933")),A(pn,"ACTIVE_COLOR",new Mt("#42d966"));let no=pn;class M_{constructor(t={}){A(this,"mesh");A(this,"time",0);A(this,"baseY");A(this,"amplitude");A(this,"bobDir");const e=t.size??.18;this.baseY=t.baseY??.6,this.amplitude=t.amplitude??.06,this.bobDir=t.pointDown?-1:1;const n=t.color??16777215,i=t.z??.35,r=t.xOffset??0,o=new Ve(e,e),a=new le({color:n,transparent:!0,opacity:.92,depthWrite:!1,side:Ce});this.mesh=new Ht(o,a),this.mesh.rotation.z=t.pointDown?-Math.PI/4:Math.PI/4,this.mesh.position.set(r,this.baseY,i),this.mesh.visible=!1,this.mesh.renderOrder=10}setVisible(t){this.mesh.visible=t,t&&(this.time=0)}get visible(){return this.mesh.visible}update(t){if(!this.mesh.visible)return;this.time+=t;const e=Math.sin(this.time*3.2)*this.amplitude*this.bobDir;this.mesh.position.y=this.baseY+e;const n=this.mesh.material;n.opacity=.7+Math.sin(this.time*3.2)*.22}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose()}}const w_={url:X("/textures/walker_sheet.webp"),frameCount:5,frameW:128,frameH:256},Jo=8;class Bs{constructor(t,e,n){A(this,"group",new Ee);A(this,"sprite");A(this,"spriteMat");A(this,"path",[]);A(this,"completionCallback",null);A(this,"elapsed",0);A(this,"speed");A(this,"speedBoost",1);A(this,"height");A(this,"spriteBaseY");A(this,"yOffset");A(this,"position2D",new Z);A(this,"frameCount");A(this,"fallTimer",-1);A(this,"FALL_DURATION",3);A(this,"fallStartY",0);A(this,"fallCallback",null);A(this,"frameElapsed",0);A(this,"currentFrame",0);A(this,"indicator");this.position2D.copy(t);const i=e??w_;this.frameCount=i.frameCount,this.height=i.height??1,this.spriteBaseY=this.height/2,this.yOffset=i.yOffset??.08,this.speed=(n==null?void 0:n.speed)??4,this.spriteMat=new le({transparent:!0,depthWrite:!1,side:Ce}),new ci().load(i.url,o=>{o.repeat.set(1/i.frameCount,1),o.offset.set(0,0),this.spriteMat.map=o,this.spriteMat.needsUpdate=!0});const r=i.frameW/i.frameH;this.sprite=new Ht(new Ve(this.height*r,this.height),this.spriteMat),this.sprite.position.set(0,this.height/2,0),this.group.add(this.sprite),(n==null?void 0:n.initialFacing)==="left"&&(this.sprite.scale.x=-1),n!=null&&n.noIndicator?this.indicator=null:(this.indicator=new M_({baseY:this.height+.22,size:.28,z:.1,color:0,xOffset:i.indicatorXOffset??0}),this.group.add(this.indicator.mesh)),this.group.position.set(t.x,t.y+this.yOffset,.24)}dispose(){var t;this.sprite.geometry.dispose(),this.spriteMat.map&&this.spriteMat.map.dispose(),this.spriteMat.dispose(),(t=this.indicator)==null||t.dispose()}get position(){return this.position2D.clone()}get isFalling(){return this.fallTimer>=0}showIndicator(){var t;(t=this.indicator)==null||t.setVisible(!0)}hideIndicator(){var t;(t=this.indicator)==null||t.setVisible(!1)}setPosition(t){this.position2D.copy(t),this.path.length=0,this.fallTimer=-1,this.spriteMat.opacity=1,this.group.position.set(t.x,t.y+this.yOffset,.24),this.setFrame(0)}setPath(t,e){if(t.length>0&&this.path.length>0&&!e&&this.completionCallback===null){const n=t[t.length-1],i=this.path[this.path.length-1];if(Math.abs(n.x-i.x)<.02&&Math.abs(n.y-i.y)<.02)return}this.path.length=0;for(const n of t)this.path.push(n.clone());this.completionCallback=e??null}isWalking(){return this.path.length>0}setFacing(t){t>0?this.sprite.scale.x=1:t<0&&(this.sprite.scale.x=-1)}setOpacity(t){this.spriteMat.opacity=Math.max(0,Math.min(1,t)),this.sprite.visible=this.spriteMat.opacity>.01}getOpacity(){return this.spriteMat.opacity}swapSheet(t){new ci().load(t.url,n=>{n.repeat.set(1/t.frameCount,1),n.offset.set(0,0),this.spriteMat.map=n,this.spriteMat.needsUpdate=!0});const e=t.height??this.height;if(Math.abs(e-this.height)>.01){const n=t.frameW/t.frameH;this.sprite.geometry.dispose(),this.sprite.geometry=new Ve(e*n,e),this.sprite.position.y=e/2,this.spriteBaseY=e/2,this.height=e}this.frameCount=t.frameCount}setExtraScale(t,e=0){const n=this.sprite.scale.x>=0?1:-1;this.sprite.scale.set(n*t,t,1),this.spriteBaseY=this.height*t/2+e,this.sprite.position.y=this.spriteBaseY}fall(t){this.isFalling||(this.path.length=0,this.completionCallback=null,this.fallStartY=this.position2D.y,this.fallTimer=0,this.fallCallback=t??null)}setFrame(t){this.currentFrame=t,this.spriteMat.map&&(this.spriteMat.map.offset.x=t/this.frameCount,this.spriteMat.map.needsUpdate=!0)}update(t){var e,n;if(this.elapsed+=t,this.isFalling){this.fallTimer+=t;const i=Math.min(this.fallTimer/this.FALL_DURATION,1),r=this.fallStartY-10*i*i;if(this.group.position.set(this.position2D.x,r+this.yOffset,.24),this.spriteMat.opacity=Math.max(0,1-i*1.5),(e=this.indicator)==null||e.setVisible(!1),i>=1){this.fallTimer=-1,this.spriteMat.opacity=1;const o=this.fallCallback;this.fallCallback=null,o==null||o()}return}if(this.path.length>0){const i=this.path[0],r=i.clone().sub(this.position2D),o=r.length(),a=this.speed*this.speedBoost;if(o<=a*t){if(this.position2D.copy(i),this.path.shift(),this.path.length===0&&this.completionCallback){const c=this.completionCallback;this.completionCallback=null,c()}}else r.normalize().multiplyScalar(a*t),this.position2D.add(r);const l=Math.sign(r.x||1);this.sprite.scale.x=l>=0?1:-1}if(this.isWalking()){this.frameElapsed+=t,this.frameElapsed>=1/Jo&&(this.frameElapsed-=1/Jo,this.setFrame((this.currentFrame+1)%this.frameCount));const i=Math.abs(Math.sin(this.elapsed*Jo))*.04;this.sprite.position.y=this.spriteBaseY+i,this.sprite.position.x=0,this.sprite.rotation.z=0}else{this.setFrame(0),this.frameElapsed=0;const i=Math.sin(this.elapsed*2.4)*.02;this.sprite.position.y=this.spriteBaseY+i,this.sprite.position.x=0,this.sprite.rotation.z=0}this.group.position.set(this.position2D.x,this.position2D.y+this.yOffset,.24),(n=this.indicator)==null||n.update(t)}}class ph{constructor(t){A(this,"walker");A(this,"group");A(this,"mode","wander");A(this,"wanderRange");A(this,"wanderY");A(this,"wanderTarget");A(this,"wanderPause",0);this.data=t,this.walker=new Bs(new Z(t.start.x,t.start.y),t.sheet,{noIndicator:!0,speed:t.followSpeed??2,initialFacing:t.initialFacing??"right"}),this.group=this.walker.group,this.wanderY=t.start.y,this.wanderRange=t.wanderRange??{minX:t.start.x-.5,maxX:t.start.x+.5},this.wanderTarget=this.pickWanderTarget()}startFollowing(t){this.mode="follow"}followPath(t){if(this.mode!=="follow"||t.length===0)return;const e=this.shortenPathByEnd(t.map(n=>n.clone()),this.data.followDistance??.6);e.length!==0&&this.walker.setPath(e)}shortenPathByEnd(t,e){if(t.length<=1||e<=0)return t;let n=e,i=t.length-1;for(;i>0&&n>0;){const r=t[i-1],o=t[i],a=Math.hypot(o.x-r.x,o.y-r.y);if(a>=n){const l=(a-n)/a,c=new Z(r.x+l*(o.x-r.x),r.y+l*(o.y-r.y));return[...t.slice(0,i),c]}n-=a,i-=1}return[t[0].clone()]}stopAutoBehavior(){this.walker.setPath([])}resetToWander(){this.mode="wander",this.wanderTarget=this.pickWanderTarget(),this.wanderPause=0,this.walker.setPath([]),this.walker.setPosition(new Z(this.data.start.x,this.data.start.y))}pickWanderTarget(){const{minX:t,maxX:e}=this.wanderRange;return t+Math.random()*(e-t)}update(t){if(this.mode==="wander"&&!this.walker.isWalking()&&(this.wanderPause-=t,this.wanderPause<=0)){const e=this.walker.position.x;let n=this.pickWanderTarget(),i=0;for(;Math.abs(n-e)<.3&&i<5;)n=this.pickWanderTarget(),i+=1;this.wanderTarget=n,this.walker.setPath([new Z(this.wanderTarget,this.wanderY)]),this.wanderPause=.6+Math.random()*.8}this.walker.update(t)}}class S_{constructor(t){A(this,"group",new Ee);A(this,"glow");A(this,"halo");A(this,"haloMaterial");A(this,"spriteMat");A(this,"elapsed",0);this.data=t;const e=t.displayHeight??1.8;if(t.textureUrl){this.spriteMat=new le({transparent:!0,depthWrite:!1,side:Ce}),new ci().load(t.textureUrl,i=>{i.colorSpace=me,this.spriteMat.map=i,this.spriteMat.needsUpdate=!0});const n=new Ht(new Ve(e,e),this.spriteMat);n.position.z=.12,n.renderOrder=-1,this.group.add(n)}else{const n=new Ht(new un(.95,1.5,.18),new vn({color:new Mt("#8a5c1f"),emissive:new Mt("#4d2e08"),roughness:.45,metalness:.2})),i=new Ht(new Ve(.62,1.16),new le({color:new Mt("#f4c760"),transparent:!0,opacity:.9}));i.position.z=.11,this.group.add(n,i)}this.glow=new Ht(new ve,new le),this.haloMaterial=new le,this.halo=new Ht(new ve,this.haloMaterial),this.group.position.set(t.x,t.y+e/2,.16)}getWalkTarget(){return new Z(this.data.x,this.data.y)}get rightEdgeX(){const t=(this.data.displayHeight??1.8)/2;return this.data.x+t}isClickedOn(t){const e=(this.data.displayHeight??1.8)/2,n=this.data.y+(this.data.displayHeight??1.8);return t.x>=this.data.x-e&&t.x<=this.data.x+e&&t.y>=this.data.y-.3&&t.y<=n+.3}isReached(t){if(!this.group.visible)return!1;const e=this.getWalkTarget(),n=(this.data.displayHeight??1.8)/2,i=Math.abs(t.x-e.x),r=Math.abs(t.y-e.y);return i<.55&&r<n}setHidden(t){this.group.visible=!t}get isVisible(){return this.group.visible}update(t,e){this.elapsed+=t;const n=1+Math.sin(this.elapsed*3.1)*.05;this.glow.scale.setScalar(e?1.18+Math.sin(this.elapsed*12)*.06:n),this.haloMaterial.opacity=e?.45:.12+Math.sin(this.elapsed*2.5)*.03,this.spriteMat&&(this.spriteMat.opacity=e?1:.88+Math.sin(this.elapsed*2.5)*.08)}dispose(){this.group.traverse(t=>{const e=t;if(e.geometry&&e.geometry.dispose(),e.material){const n=Array.isArray(e.material)?e.material:[e.material];for(const i of n)i.map&&i.map.dispose(),i.dispose()}})}}function b_(s,t,e){const n=-s/2,i=-t/2,r=new ho;return r.moveTo(n+e,i),r.lineTo(n+s-e,i),r.quadraticCurveTo(n+s,i,n+s,i+e),r.lineTo(n+s,i+t-e),r.quadraticCurveTo(n+s,i+t,n+s-e,i+t),r.lineTo(n+e,i+t),r.quadraticCurveTo(n,i+t,n,i+t-e),r.lineTo(n,i+e),r.quadraticCurveTo(n,i,n+e,i),r}class Qo{constructor(t){A(this,"mesh");this.data=t;const e=new sr(b_(t.width,t.height,.14),{depth:.35,bevelEnabled:!0,bevelSegments:2,bevelThickness:.08,bevelSize:.08,curveSegments:8});e.center();const n=new vn({color:new Mt(t.color??"#625048"),roughness:.88,metalness:.06,depthTest:!1,transparent:!0,opacity:t.opacity??1});this.mesh=new Ht(e,n),this.mesh.position.set(t.x,t.y,.18),this.mesh.castShadow=!1,this.mesh.receiveShadow=!0,this.mesh.renderOrder=0}}const ta=new WeakMap;class T_ extends Ai{constructor(t){super(t),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(t){return this.decoderPath=t,this}setDecoderConfig(t){return this.decoderConfig=t,this}setWorkerLimit(t){return this.workerLimit=t,this}load(t,e,n,i){const r=new eo(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(t,o=>{this.parse(o,e,i)},n,i)}parse(t,e,n=()=>{}){this.decodeDracoFile(t,e,null,null,me,n).catch(n)}decodeDracoFile(t,e,n,i,r=Ue,o=()=>{}){const a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(t,a).then(e).catch(o)}decodeGeometry(t,e){const n=JSON.stringify(e);if(ta.has(t)){const l=ta.get(t);if(l.key===n)return l.promise;if(t.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const r=this.workerNextTaskID++,o=t.byteLength,a=this._getWorker(r,o).then(l=>(i=l,new Promise((c,h)=>{i._callbacks[r]={resolve:c,reject:h},i.postMessage({type:"decode",id:r,taskConfig:e,buffer:t},[t])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{i&&r&&this._releaseTask(i,r)}),ta.set(t,{key:n,promise:a}),a}_createGeometry(t){const e=new ve;t.index&&e.setIndex(new Le(t.index.array,1));for(let n=0;n<t.attributes.length;n++){const i=t.attributes[n],r=i.name,o=i.array,a=i.itemSize,l=new Le(o,a);r==="color"&&(this._assignVertexColorSpace(l,i.vertexColorSpace),l.normalized=!(o instanceof Float32Array)),e.setAttribute(r,l)}return e}_assignVertexColorSpace(t,e){if(e!==me)return;const n=new Mt;for(let i=0,r=t.count;i<r;i++)n.fromBufferAttribute(t,i),Zt.toWorkingColorSpace(n,me),t.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(t,e){const n=new eo(this.manager);return n.setPath(this.decoderPath),n.setResponseType(e),n.setWithCredentials(this.withCredentials),new Promise((i,r)=>{n.load(t,i,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const t=typeof WebAssembly!="object"||this.decoderConfig.type==="js",e=[];return t?e.push(this._loadLibrary("draco_decoder.js","text")):(e.push(this._loadLibrary("draco_wasm_wrapper.js","text")),e.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(e).then(n=>{const i=n[0];t||(this.decoderConfig.wasmBinary=n[1]);const r=E_.toString(),o=["/* draco decoder */",i,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(t,e){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(r){const o=r.data;switch(o.type){case"decode":i._callbacks[o.id].resolve(o);break;case"error":i._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[t]=e,n._taskLoad+=e,n})}_releaseTask(t,e){t._taskLoad-=t._taskCosts[e],delete t._callbacks[e],delete t._taskCosts[e]}debug(){console.log("Task load: ",this.workerPool.map(t=>t._taskLoad))}dispose(){for(let t=0;t<this.workerPool.length;++t)this.workerPool[t].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function E_(){let s,t;onmessage=function(o){const a=o.data;switch(a.type){case"init":s=a.decoderConfig,t=new Promise(function(h){s.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(s)});break;case"decode":const l=a.buffer,c=a.taskConfig;t.then(h=>{const u=h.draco,d=new u.Decoder;try{const f=e(u,d,new Int8Array(l),c),g=f.attributes.map(x=>x.array.buffer);f.index&&g.push(f.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:f},g)}catch(f){console.error(f),self.postMessage({type:"error",id:a.id,error:f.message})}finally{u.destroy(d)}});break}};function e(o,a,l,c){const h=c.attributeIDs,u=c.attributeTypes;let d,f;const g=a.GetEncodedGeometryType(l);if(g===o.TRIANGULAR_MESH)d=new o.Mesh,f=a.DecodeArrayToMesh(l,l.byteLength,d);else if(g===o.POINT_CLOUD)d=new o.PointCloud,f=a.DecodeArrayToPointCloud(l,l.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const x={index:null,attributes:[]};for(const m in h){const p=self[u[m]];let M,v;if(c.useUniqueIDs)v=h[m],M=a.GetAttributeByUniqueId(d,v);else{if(v=a.GetAttributeId(d,o[h[m]]),v===-1)continue;M=a.GetAttribute(d,v)}const _=i(o,a,d,m,p,M);m==="color"&&(_.vertexColorSpace=c.vertexColorSpace),x.attributes.push(_)}return g===o.TRIANGULAR_MESH&&(x.index=n(o,a,d)),o.destroy(d),x}function n(o,a,l){const h=l.num_faces()*3,u=h*4,d=o._malloc(u);a.GetTrianglesUInt32Array(l,u,d);const f=new Uint32Array(o.HEAPF32.buffer,d,h).slice();return o._free(d),{array:f,itemSize:1}}function i(o,a,l,c,h,u){const d=u.num_components(),g=l.num_points()*d,x=g*h.BYTES_PER_ELEMENT,m=r(o,h),p=o._malloc(x);a.GetAttributeDataArrayForAllPoints(l,u,m,x,p);const M=new h(o.HEAPF32.buffer,p,g).slice();return o._free(p),{name:c,array:M,itemSize:d}}function r(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}function mh(s,t){if(t===ud)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(t===Ga||t===Bh){let e=s.getIndex();if(e===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),e=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=e.count-2,i=[];if(t===Ga)for(let o=1;o<=n;o++)i.push(e.getX(0)),i.push(e.getX(o)),i.push(e.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(e.getX(o)),i.push(e.getX(o+1)),i.push(e.getX(o+2))):(i.push(e.getX(o+2)),i.push(e.getX(o+1)),i.push(e.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),s}class A_ extends Ai{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new I_(e)}),this.register(function(e){return new D_(e)}),this.register(function(e){return new G_(e)}),this.register(function(e){return new V_(e)}),this.register(function(e){return new W_(e)}),this.register(function(e){return new U_(e)}),this.register(function(e){return new O_(e)}),this.register(function(e){return new F_(e)}),this.register(function(e){return new B_(e)}),this.register(function(e){return new P_(e)}),this.register(function(e){return new k_(e)}),this.register(function(e){return new N_(e)}),this.register(function(e){return new H_(e)}),this.register(function(e){return new z_(e)}),this.register(function(e){return new C_(e)}),this.register(function(e){return new X_(e)}),this.register(function(e){return new Y_(e)})}load(t,e,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Xs.extractUrlBase(t);o=Xs.resolveURL(c,this.path)}else o=Xs.extractUrlBase(t);this.manager.itemStart(t);const a=function(c){i?i(c):console.error(c),r.manager.itemError(t),r.manager.itemEnd(t)},l=new eo(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(c){try{r.parse(c,o,function(h){e(h),r.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===_u){try{o[qt.KHR_BINARY_GLTF]=new j_(t)}catch(u){i&&i(u);return}r=JSON.parse(o[qt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new ov(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case qt.KHR_MATERIALS_UNLIT:o[u]=new L_;break;case qt.KHR_DRACO_MESH_COMPRESSION:o[u]=new q_(r,this.dracoLoader);break;case qt.KHR_TEXTURE_TRANSFORM:o[u]=new $_;break;case qt.KHR_MESH_QUANTIZATION:o[u]=new K_;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(t,e){const n=this;return new Promise(function(i,r){n.parse(t,e,i,r)})}}function R_(){let s={};return{get:function(t){return s[t]},add:function(t,e){s[t]=e},remove:function(t){delete s[t]},removeAll:function(){s={}}}}const qt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class C_{constructor(t){this.parser=t,this.name=qt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){const r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let i=e.cache.get(n);if(i)return i;const r=e.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t];let c;const h=new Mt(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Ue);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new xu(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new gu(h),c.distance=u;break;case"spot":c=new t_(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Fn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=e.createUniqueName(l.name||"light_"+t),i=Promise.resolve(c),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,r=n.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(e.cache,a,l)})}}class L_{constructor(){this.name=qt.KHR_MATERIALS_UNLIT}getMaterialType(){return le}extendParams(t,e,n){const i=[];t.color=new Mt(1,1,1),t.opacity=1;const r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],Ue),t.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",r.baseColorTexture,me))}return Promise.all(i)}}class P_{constructor(t){this.parser=t,this.name=qt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}}class I_{constructor(t){this.parser=t,this.name=qt.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(e.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(e,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new Z(a,a)}return Promise.all(r)}}class D_{constructor(t){this.parser=t,this.name=qt.KHR_MATERIALS_DISPERSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return e.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class N_{constructor(t){this.parser=t,this.name=qt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(e.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(e.iridescenceIOR=o.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class U_{constructor(t){this.parser=t,this.name=qt.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];e.sheenColor=new Mt(0,0,0),e.sheenRoughness=0,e.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],Ue)}return o.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(e,"sheenColorMap",o.sheenColorTexture,me)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class O_{constructor(t){this.parser=t,this.name=qt.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(e.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(e,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class F_{constructor(t){this.parser=t,this.name=qt.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];e.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(e,"thicknessMap",o.thicknessTexture)),e.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return e.attenuationColor=new Mt().setRGB(a[0],a[1],a[2],Ue),Promise.all(r)}}class B_{constructor(t){this.parser=t,this.name=qt.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class k_{constructor(t){this.parser=t,this.name=qt.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];e.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(e,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return e.specularColor=new Mt().setRGB(a[0],a[1],a[2],Ue),o.specularColorTexture!==void 0&&r.push(n.assignTexture(e,"specularColorMap",o.specularColorTexture,me)),Promise.all(r)}}class z_{constructor(t){this.parser=t,this.name=qt.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return e.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(e,"bumpMap",o.bumpTexture)),Promise.all(r)}}class H_{constructor(t){this.parser=t,this.name=qt.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(e.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(e.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(e,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class G_{constructor(t){this.parser=t,this.name=qt.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,o)}}class V_{constructor(t){this.parser=t,this.name=qt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(t,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class W_{constructor(t){this.parser=t,this.name=qt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(t,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class X_{constructor(t){this.name=qt.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class Y_{constructor(t){this.name=qt.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=e.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Ke.TRIANGLES&&c.mode!==Ke.TRIANGLE_STRIP&&c.mode!==Ke.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const g of u){const x=new It,m=new P,p=new ui,M=new P(1,1,1),v=new nx(g.geometry,g.material,d);for(let _=0;_<d;_++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,_),l.SCALE&&M.fromBufferAttribute(l.SCALE,_),v.setMatrixAt(_,x.compose(m,p,M));for(const _ in l)if(_==="_COLOR_0"){const L=l[_];v.instanceColor=new Ya(L.array,L.itemSize,L.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,l[_]);ge.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),f.push(v)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const _u="glTF",Ds=12,gh={JSON:1313821514,BIN:5130562};class j_{constructor(t){this.name=qt.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,Ds),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==_u)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ds,r=new DataView(t,Ds);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===gh.JSON){const c=new Uint8Array(t,Ds+o,a);this.content=n.decode(c)}else if(l===gh.BIN){const c=Ds+o;this.body=t.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class q_{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=qt.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,i=this.dracoLoader,r=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=Ja[h]||h.toLowerCase();a[u]=o[h]}for(const h in t.attributes){const u=Ja[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[t.attributes[h]],f=is[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const x=f.attributes[g],m=l[g];m!==void 0&&(x.normalized=m)}u(f)},a,c,Ue,d)})})}}class $_{constructor(){this.name=qt.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class K_{constructor(){this.name=qt.KHR_MESH_QUANTIZATION}}class vu extends rr{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i*3+i;for(let o=0;o!==i;o++)e[o]=n[r+o];return e}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-e,u=(n-e)/h,d=u*u,f=d*u,g=t*c,x=g-c,m=-2*f+3*d,p=f-d,M=1-m,v=p-d+u;for(let _=0;_!==a;_++){const L=o[x+_+a],R=o[x+_+l]*h,T=o[g+_+a],D=o[g+_]*h;r[_]=M*L+v*R+m*T+p*D}return r}}const Z_=new ui;class J_ extends vu{interpolate_(t,e,n,i){const r=super.interpolate_(t,e,n,i);return Z_.fromArray(r).normalize().toArray(r),r}}const Ke={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},is={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},xh={9728:ze,9729:Ne,9984:Rh,9985:Vr,9986:Us,9987:xn},_h={33071:gn,33648:Zr,10497:oi},ea={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ja={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Jn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Q_={CUBICSPLINE:void 0,LINEAR:$s,STEP:qs},na={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function tv(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new vn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:zn})),s.DefaultMaterial}function vi(s,t,e){for(const n in e.extensions)s[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function Fn(s,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(s.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function ev(s,t,e){let n=!1,i=!1,r=!1;for(let c=0,h=t.length;c<h;c++){const u=t[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,h=t.length;c<h;c++){const u=t[c];if(n){const d=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function nv(s,t){if(s.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)s.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(s.morphTargetInfluences.length===e.length){s.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)s.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function iv(s){let t;const e=s.extensions&&s.extensions[qt.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+ia(e.attributes):t=s.indices+":"+ia(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)t+=":"+ia(s.targets[n]);return t}function ia(s){let t="";const e=Object.keys(s).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+s[e[n]]+";";return t}function Qa(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function sv(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const rv=new It;class ov{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new R_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new ci(this.options.manager):this.textureLoader=new s_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new eo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return vi(r,a,i),Fn(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=e.length;i<r;i++){const o=e[i].joints;for(let a=0,l=o.length;a<l;a++)t[o[a]].isBone=!0}for(let i=0,r=t.length;i<r;i++){const o=t[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())r(h,a.children[c])};return r(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const i=t(e[n]);if(i)return i}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let i=0;i<e.length;i++){const r=t(e[i]);r&&n.push(r)}return n}getDependency(t,e){const n=t+":"+e;let i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(r,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[qt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(Xs.resolveURL(e.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const i=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(t){const e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){const o=ea[i.type],a=is[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Le(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=ea[i.type],c=is[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let x,m;if(f&&f!==u){const p=Math.floor(d/f),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let v=e.cache.get(M);v||(x=new c(a,p*f,i.count*f/h),v=new nu(x,f/h),e.cache.add(M,v)),m=new Zs(v,l,d%f/h,g)}else a===null?x=new c(i.count*l):x=new c(a,d,i.count*l),m=new Le(x,l,g);if(i.sparse!==void 0){const p=ea.SCALAR,M=is[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,L=new M(o[1],v,i.sparse.count*p),R=new c(o[2],_,i.sparse.count*l);a!==null&&(m=new Le(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let T=0,D=L.length;T<D;T++){const b=L[T];if(m.setX(b,R[T*l]),l>=2&&m.setY(b,R[T*l+1]),l>=3&&m.setZ(b,R[T*l+2]),l>=4&&m.setW(b,R[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(t){const e=this.json,n=this.options,r=e.textures[t].source,o=e.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(t,r,a)}loadTextureImage(t,e,n){const i=this,r=this.json,o=r.textures[t],a=r.images[e],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=xh[d.magFilter]||Ne,h.minFilter=xh[d.minFilter]||xn,h.wrapS=_h[d.wrapS]||oi,h.wrapT=_h[d.wrapT]||oi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==ze&&h.minFilter!==Ne,i.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(t,e){const n=this,i=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());const o=i.images[t],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;e.isImageBitmapLoader===!0&&(g=function(x){const m=new Me(x);m.needsUpdate=!0,d(m)}),e.load(Xs.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),Fn(u,o),u.userData.mimeType=o.mimeType||sv(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[t]=h,h}assignTexture(t,e,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[qt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[qt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[qt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),t[e]=o,o})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const i=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new ou,hn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(t.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new _l,hn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}t.material=n}getMaterialType(){return vn}loadMaterial(t){const e=this,n=this.json,i=this.extensions,r=n.materials[t];let o;const a={},l=r.extensions||{},c=[];if(l[qt.KHR_MATERIALS_UNLIT]){const u=i[qt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,e))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new Mt(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Ue),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(e.assignTexture(a,"map",u.baseColorTexture,me)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(e.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(e.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,a)})))}r.doubleSided===!0&&(a.side=Ce);const h=r.alphaMode||na.OPAQUE;if(h===na.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===na.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==le&&(c.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Z(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==le&&(c.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==le){const u=r.emissiveFactor;a.emissive=new Mt().setRGB(u[0],u[1],u[2],Ue)}return r.emissiveTexture!==void 0&&o!==le&&c.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,me)),Promise.all(c).then(function(){const u=new o(a);return r.name&&(u.name=r.name),Fn(u,r),e.associations.set(u,{materials:t}),r.extensions&&vi(i,u,r),u})}createUniqueName(t){const e=oe.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[qt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(l){return vh(l,a,e)})}const o=[];for(let a=0,l=t.length;a<l;a++){const c=t[a],h=iv(c),u=i[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[qt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=vh(new ve,c,e),i[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(t){const e=this,n=this.json,i=this.extensions,r=n.meshes[t],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?tv(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(e.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const x=h[f],m=o[f];let p;const M=c[f];if(m.mode===Ke.TRIANGLES||m.mode===Ke.TRIANGLE_STRIP||m.mode===Ke.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Q0(x,M):new Ht(x,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Ke.TRIANGLE_STRIP?p.geometry=mh(p.geometry,Bh):m.mode===Ke.TRIANGLE_FAN&&(p.geometry=mh(p.geometry,Ga));else if(m.mode===Ke.LINES)p=new ix(x,M);else if(m.mode===Ke.LINE_STRIP)p=new co(x,M);else if(m.mode===Ke.LINE_LOOP)p=new sx(x,M);else if(m.mode===Ke.POINTS)p=new rx(x,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&nv(p,r),p.name=e.createUniqueName(r.name||"mesh_"+t),Fn(p,r),m.extensions&&vi(i,p,m),e.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)e.associations.set(u[f],{meshes:t,primitives:f});if(u.length===1)return r.extensions&&vi(i,u[0],r),u[0];const d=new Ee;r.extensions&&vi(i,d,r),e.associations.set(d,{meshes:t});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(t){let e;const n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new Be($r.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new ao(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),Fn(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let i=0,r=e.joints.length;i<r;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const d=new It;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[c])}return new xl(a,l)})}loadAnimation(t){const e=this.json,n=this,i=e.animations[t],r=i.name?i.name:"animation_"+t,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],g=i.samplers[f.sampler],x=f.target,m=x.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,M=i.parameters!==void 0?i.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",M)),c.push(g),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],x=u[3],m=u[4],p=[];for(let M=0,v=d.length;M<v;M++){const _=d[M],L=f[M],R=g[M],T=x[M],D=m[M];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();const b=n._createAnimationTracks(_,L,R,T,D);if(b)for(let w=0;w<b.length;w++)p.push(b[w])}return new Yx(r,void 0,p)})}createNodeMesh(t){const e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(t){const e=this.json,n=this,i=e.nodes[t],r=n._loadNodeShallow(t),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,rv)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(t){const e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const r=e.nodes[t],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(t)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(t)}).forEach(function(c){a.push(c)}),this.nodeCache[t]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new su:c.length>1?h=new Ee:c.length===1?h=c[0]:h=new ge,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Fn(h,r),r.extensions&&vi(n,h,r),r.matrix!==void 0){const u=new It;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],i=this,r=new Ee;n.name&&(r.name=i.createUniqueName(n.name)),Fn(r,n),n.extensions&&vi(e,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof hn||d instanceof Me)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(r),r})}_createAnimationTracks(t,e,n,i,r){const o=[],a=t.name?t.name:t.uuid,l=[];Jn[r.path]===Jn.weights?t.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(Jn[r.path]){case Jn.weights:c=fs;break;case Jn.rotation:c=ps;break;case Jn.position:case Jn.scale:c=ms;break;default:switch(n.itemSize){case 1:c=fs;break;case 2:case 3:default:c=ms;break}break}const h=i.interpolation!==void 0?Q_[i.interpolation]:$s,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+Jn[r.path],e.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=Qa(e.constructor),i=new Float32Array(e.length);for(let r=0,o=e.length;r<o;r++)i[r]=e[r]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const i=this instanceof ps?J_:vu;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function av(s,t,e){const n=t.attributes,i=new dn;if(n.POSITION!==void 0){const a=e.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),a.normalized){const h=Qa(is[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=t.targets;if(r!==void 0){const a=new P,l=new P;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=e.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const x=Qa(is[d.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Mn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function vh(s,t,e){const n=t.attributes,i=[];function r(o,a){return e.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=Ja[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(t.indices!==void 0&&!s.index){const o=e.getDependency("accessor",t.indices).then(function(a){s.setIndex(a)});i.push(o)}return Zt.workingColorSpace!==Ue&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Zt.workingColorSpace}" not supported.`),Fn(s,t),av(s,t,e),Promise.all(i).then(function(){return t.targets!==void 0?ev(s,t.targets,e):s})}const yu=new A_,Mu=new T_;Mu.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.6/");yu.setDRACOLoader(Mu);function lv(s,t,e){const n=s/2,i=t/2,r=n*.35,o=i*.35,a=i-o,l=new ho;return l.moveTo(-n,-i),l.lineTo(n,-i),l.lineTo(n,-i+a*1.6),l.quadraticCurveTo(n*.6,-i+a*1.85,r,-i+a*2),l.lineTo(r,i),l.lineTo(-r,i),l.lineTo(-r,-i+a*2),l.quadraticCurveTo(-n*.6,-i+a*1.85,-n,-i+a*1.6),l.lineTo(-n,-i),new sr(l,{depth:e,bevelEnabled:!1,curveSegments:4})}function yh(s,t,e){const n=new ho;n.moveTo(-s/2,-t/2),n.lineTo(s/2,-t/2),n.lineTo(0,t/2),n.closePath();const i=new sr(n,{depth:e,bevelEnabled:!1,curveSegments:1});return i.translate(0,0,-e/2),i}function cv(s){let t=0,e=0;for(const c of s)t+=c.positions.length,e+=c.indices.length;const n=new Float32Array(t),i=new Uint32Array(e);let r=0,o=0,a=0;for(const c of s){for(let h=0;h<c.positions.length;h++)n[r++]=c.positions[h];for(let h=0;h<c.indices.length;h++)i[o++]=c.indices[h]+a;a+=c.positions.length/3}const l=new ve;return l.setAttribute("position",new Ae(n,3)),l.setIndex(new pl(i,1)),l.computeVertexNormals(),l}class hv{constructor(t){A(this,"group",new Ee);A(this,"railLine");A(this,"shadowMaskMesh");A(this,"shadowVisualMesh");A(this,"shadowVisualMaterial");A(this,"pickables",[]);A(this,"lastProjMinY",0);A(this,"lastProjMaxY",0);A(this,"lastProjMinX",0);A(this,"lastProjMaxX",0);A(this,"lastProjectedTriangles",[]);A(this,"parts",[]);A(this,"projectionParts",[]);A(this,"glbLocalMatrices",[]);A(this,"onGlbReady");A(this,"projectionGroup",new Ee);A(this,"material",new vn({color:new Mt("#f1eadb"),roughness:.52,metalness:.02,depthTest:!1,transparent:!0,opacity:1}));A(this,"currentT",0);A(this,"initialRotation",new en);A(this,"ySteps",0);A(this,"xSteps",0);A(this,"initialTSteps",0);A(this,"outlineMeshes",[]);A(this,"outlineRoot",null);A(this,"outlineTime",0);A(this,"isSelected",!1);A(this,"isConnected",!1);A(this,"connectedTime",0);A(this,"outlineMat",new le({color:new Mt("#ffffff"),side:ke,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1}));A(this,"glbWrapper",null);A(this,"glbBaseAutoScale",1);A(this,"runtimeModelScale");A(this,"runtimeProjScale");A(this,"currentYOffset",0);this.data=t,this.group.name=t.id,this.group.position.set(0,t.railY,t.railZ),this.initialRotation.set(t.initialRotationX,t.initialRotationY,t.initialRotationZ??0,"XYZ"),this.runtimeModelScale=t.modelScale??.3,this.runtimeProjScale=t.projectionScale??this.runtimeModelScale;const e=.25,n=.8,i=t.shape??"box",r=4.5*e,o=1.2*e,a=1.2*e,l=4.5*n,c=1.2*n,h=1.2*n,u=(v,_,L)=>i==="triangle"?yh(v,_,L):i==="bottle"?lv(v,_*2.5,L):new un(v,_,L),d=(v,_,L)=>i==="triangle"?yh(v,_,L):i==="bottle"?new un(v*.4,_,L*2.5):new un(v,_,L),f=u(r,o,a),g=d(l,c,h),x=new Ht(f,this.material);x.position.set(0,0,0),x.castShadow=!1,x.receiveShadow=!1,x.renderOrder=3,x.userData.shadowObject=this,this.parts.push(x),this.group.add(x),this.pickables.push(x);const m=new Ht(g);m.position.set(0,0,0),m.visible=!1,this.projectionParts.push(m),this.projectionGroup.add(m);const p=new ve().setFromPoints([new P(t.railMinX,t.railY,t.railZ),new P(t.railMaxX,t.railY,t.railZ)]),M=new kx({color:new Mt("#7c6be7"),transparent:!0,opacity:.68,dashSize:.32,gapSize:.18});this.railLine=new co(p,M),this.railLine.computeLineDistances(),this.shadowMaskMesh=new Ht(new ve,new le({color:16777215,side:Ce,depthTest:!1,depthWrite:!1})),this.shadowVisualMesh=new Ht(new ve,new le({color:new Mt("#1a1a1a"),transparent:!0,opacity:.25,side:Ce,depthWrite:!1,depthTest:!1})),this.shadowVisualMesh.renderOrder=1,this.shadowVisualMaterial=this.shadowVisualMesh.material,this.reset(),t.modelUrl&&yu.load(t.modelUrl,v=>{for(const G of this.parts)this.group.remove(G);this.parts.length=0,this.pickables.length=0;const _=v.scene.clone(!0),L=new Ee;L.add(_),_.updateMatrixWorld(!0);const R=t.wrapperExtraRotation,T=new en(0+((R==null?void 0:R.x)??0),-Math.PI+((R==null?void 0:R.y)??0),Math.PI/2+((R==null?void 0:R.z)??0),"XYZ"),D=new It().makeRotationFromEuler(T);_.traverse(G=>{G instanceof Ht&&G.geometry&&(G.geometry=G.geometry.clone(),G.geometry.applyMatrix4(D))}),_.rotation.set(0,0,0),_.updateMatrixWorld(!0);const w=new dn().setFromObject(_).getSize(new P);this.glbBaseAutoScale=1/Math.min(w.x,w.y,w.z);const I=this.runtimeModelScale*this.glbBaseAutoScale;L.scale.setScalar(I),L.rotation.set(0,0,0),L.updateMatrixWorld(!0);const B=new dn().setFromObject(L).getCenter(new P);L.position.sub(B),this.glbWrapper=L;const V=G=>{var J;_.traverse(k=>{if(k instanceof Ht){k.userData.shadowObject=this,k.renderOrder=3;const nt=G?new vn({map:G,roughness:.75,metalness:0,depthTest:!1,transparent:!0,opacity:1}):k.material.clone();nt.depthTest=!1,nt.transparent=!0,nt.opacity=1,k.material=nt,this.pickables.push(k)}}),this.group.add(L),this.outlineMeshes.length=0,this.outlineRoot=new Ee;const Y=this.outlineRoot;if(Y.visible=!1,Y.renderOrder=2,Y.scale.copy(L.scale),Y.position.copy(L.position),_.traverse(k=>{if(k instanceof Ht&&k.geometry){k.updateWorldMatrix(!0,!1);const nt=new Ht(k.geometry,this.outlineMat);nt.renderOrder=2,nt.matrix.copy(k.matrixWorld),nt.matrix.premultiply(new It().copy(_.matrixWorld).invert()),nt.matrixAutoUpdate=!1,nt.scale.multiplyScalar(1.06),Y.add(nt),this.outlineMeshes.push(nt)}}),this.group.add(Y),this.isSelected&&(Y.visible=!0,this.outlineTime=0),t.useGlbProjection){for(const dt of this.projectionParts)this.projectionGroup.remove(dt);this.projectionParts.length=0,this.glbLocalMatrices.length=0,this.group.updateMatrixWorld(!0);const k=new It().copy(this.group.matrixWorld).invert(),nt=this.runtimeProjScale/this.runtimeModelScale,ut=new It().makeScale(nt,nt,nt);_.traverse(dt=>{if(dt instanceof Ht&&dt.geometry){dt.updateWorldMatrix(!0,!1);const Nt=new It().copy(k).multiply(dt.matrixWorld);Nt.premultiply(ut),this.projectionParts.push(dt),this.glbLocalMatrices.push(Nt)}})}(J=this.onGlbReady)==null||J.call(this)};t.textureUrl?new ci().load(t.textureUrl,G=>{G.colorSpace=me,G.wrapS=oi,G.wrapT=oi,G.repeat.set(t.textureRepeat??1,t.textureRepeat??1),V(G)},void 0,()=>V(null)):V(null)},void 0,v=>{console.error("[GLB] 加载失败",v)})}get normalizedT(){return this.currentT}get currentPose(){return{initialT:this.currentT,initialRotationX:this.group.rotation.x,initialRotationY:this.group.rotation.y,initialRotationZ:this.group.rotation.z,railYOffset:this.currentYOffset,modelScale:this.runtimeModelScale,projectionScale:this.runtimeProjScale}}setModelScale(t){this.runtimeModelScale=t,this.glbWrapper&&(this.glbWrapper.scale.setScalar(t*this.glbBaseAutoScale),this._rebakeProjectionMatrices())}setProjScale(t){this.runtimeProjScale=t,this._rebakeProjectionMatrices()}_rebakeProjectionMatrices(){if(!this.glbWrapper||!this.data.useGlbProjection||this.projectionParts.length===0)return;this.glbWrapper.updateMatrixWorld(!0),this.group.updateMatrixWorld(!0);const t=new It().copy(this.group.matrixWorld).invert(),e=this.runtimeProjScale/this.runtimeModelScale,n=new It().makeScale(e,e,e);for(let i=0;i<this.projectionParts.length;i++){const r=this.projectionParts[i];r.updateWorldMatrix(!0,!1);const o=new It().copy(t).multiply(r.matrixWorld);o.premultiply(n),this.glbLocalMatrices[i]=o}}get anchorWorldPosition(){return this.group.localToWorld(new P(0,.4,0))}setShadowConnected(t){this.isConnected=t,t?(this.shadowVisualMaterial.color.set("#66a09c"),this.shadowVisualMaterial.opacity=.5):(this.shadowVisualMaterial.color.set("#1a1a1a"),this.shadowVisualMaterial.opacity=.25)}hideOutline(){this.outlineRoot&&(this.outlineRoot.visible=!1)}setHidden(t){this.group.visible=!t,this.shadowMaskMesh.visible=!t,this.shadowVisualMesh.visible=!t}setSelected(t){this.isSelected=t,this.outlineRoot&&(this.outlineRoot.visible=t),t&&(this.outlineTime=0)}update(t){var e;if((e=this.outlineRoot)!=null&&e.visible){this.outlineTime+=t;const n=.25+Math.sin(this.outlineTime*3)*.1;this.outlineMat.opacity=n}this.isConnected&&(this.shadowVisualMaterial.color.set("#66a09c"),this.shadowVisualMaterial.opacity=.5)}rotate(t,e,n=0){this.group.rotation.x+=t,this.group.rotation.y-=e,this.group.rotation.z+=n}canMove(t){const e=this.data.moveLimit;if(!e)return!0;switch(t){case"up":return this.ySteps<e.up;case"down":return this.ySteps>-e.down;case"left":return this.xSteps>-e.left;case"right":return this.xSteps<e.right}}setRailT(t,e){const n=this.currentT;this.currentT=$r.clamp(t,0,1),this.group.position.x=$r.lerp(this.data.railMinX,this.data.railMaxX,this.currentT),this.group.position.y=this.data.railY+this.currentYOffset,this.group.position.z=this.data.railZ,e&&this.currentT!==n&&(e==="left"?this.xSteps-=1:this.xSteps+=1)}setYOffset(t){this.currentYOffset=t,this.group.position.y=this.data.railY+this.currentYOffset}moveY(t){const e=t>0?"up":"down";this.canMove(e)&&(this.currentYOffset=$r.clamp(this.currentYOffset+t*2,-6,6),this.group.position.y=this.data.railY+this.currentYOffset,e==="up"?this.ySteps+=1:this.ySteps-=1)}reset(){this.group.rotation.copy(this.initialRotation),this.currentYOffset=this.data.initialYOffset??0,this.ySteps=0,this.xSteps=0,this.setRailT(this.data.initialT)}getYRangeAtX(t){let e=null,n=null;for(const i of this.lastProjectedTriangles){const r=Math.min(i.x1,i.x2,i.x3),o=Math.max(i.x1,i.x2,i.x3);if(t<r||t>o)continue;const a=[[i.x1,i.y1,i.x2,i.y2],[i.x2,i.y2,i.x3,i.y3],[i.x3,i.y3,i.x1,i.y1]];for(const[l,c,h,u]of a)if(l<=t&&h>=t||h<=t&&l>=t){let d;if(Math.abs(h-l)<1e-9)d=Math.max(c,u);else{const f=(t-l)/(h-l);d=c+f*(u-c)}(e===null||d<e)&&(e=d),(n===null||d>n)&&(n=d)}}return e===null||n===null?null:{minY:e,maxY:n}}computeWorldMatrix(t){const e=[];let n=t;for(;n!==null;)n.updateMatrix(),e.unshift(n.matrix.clone()),n=n.parent;const i=new It;for(const r of e)i.multiply(r);return i}updateShadowProjection(t,e){const n=[],i=this.data.shadowYScale??1,r=this.group.position.y;if(i!==1){const f=this.data.railY+this.currentYOffset*i;this.group.position.y=f}const o=this.data.shadowXScale??1,a=this.group.position.x;if(o!==1){const f=(this.data.railMinX+this.data.railMaxX)/2,g=a-f;this.group.position.x=f+g*o}const l=this.data.useGlbProjection&&this.glbLocalMatrices.length>0,c=l?this.computeWorldMatrix(this.group):(this.projectionGroup.position.copy(this.group.position),this.projectionGroup.rotation.copy(this.group.rotation),this.projectionGroup.scale.copy(this.group.scale),this.projectionGroup.updateMatrix(),this.projectionGroup.matrix.clone());for(let f=0;f<this.projectionParts.length;f++){const g=this.projectionParts[f];let x;if(l){const _=this.glbLocalMatrices[f];if(!_)continue;x=new It().copy(c).multiply(_)}else g.updateMatrix(),x=new It().copy(c).multiply(g.matrix);const m=g.geometry.getAttribute("position"),p=g.geometry.getIndex(),M=[];for(let _=0;_<m.count;_+=1){const L=new P().fromBufferAttribute(m,_).applyMatrix4(x),R=(e-L.z)/t.z,T=L.clone().addScaledVector(t,R);M.push(T.x,T.y,e+.002)}const v=p?Array.from(p.array):[...Array(m.count).keys()];n.push({positions:M,indices:v})}const h=[],u=[];this.lastProjectedTriangles=[];for(const f of n){for(let g=0;g<f.positions.length;g+=3)h.push(f.positions[g]),u.push(f.positions[g+1]);for(let g=0;g<f.indices.length;g+=3){const x=f.indices[g],m=f.indices[g+1],p=f.indices[g+2];this.lastProjectedTriangles.push({x1:f.positions[x*3],y1:f.positions[x*3+1],x2:f.positions[m*3],y2:f.positions[m*3+1],x3:f.positions[p*3],y3:f.positions[p*3+1]})}}if(h.length>0){let f=h[0],g=h[0],x=u[0],m=u[0];for(let p=1;p<h.length;p++)h[p]<f&&(f=h[p]),h[p]>g&&(g=h[p]),u[p]<x&&(x=u[p]),u[p]>m&&(m=u[p]);this.lastProjMinX=f,this.lastProjMaxX=g,this.lastProjMinY=x,this.lastProjMaxY=m}else this.lastProjMinX=0,this.lastProjMaxX=0,this.lastProjMinY=0,this.lastProjMaxY=0;const d=cv(n);this.shadowMaskMesh.geometry.dispose(),this.shadowMaskMesh.geometry=d,this.shadowVisualMesh.geometry.dispose(),this.shadowVisualMesh.geometry=d.clone(),this.shadowVisualMesh.position.z=.25,i!==1&&(this.group.position.y=r),o!==1&&(this.group.position.x=a)}}let Un=null;function uv(){return Un||(Un=new ci().load(X("/textures/wall.webp")),Un.wrapS=gn,Un.wrapT=gn,Un.colorSpace=me,Un.minFilter=xn,Un.magFilter=Ne,Un.anisotropy=4),Un}class dv{constructor(t){A(this,"mesh");A(this,"cracks");A(this,"removed",!1);this.data=t;const e=new Ve(t.width,t.height),n=new le({map:uv(),transparent:!0,opacity:.95,depthTest:!1,alphaTest:.02,side:Ce});this.mesh=new Ht(e,n),this.mesh.position.set(t.x,t.y,.18),this.mesh.renderOrder=4,this.cracks=new Ee}get isRemoved(){return this.removed}explode(t){if(this.removed){t==null||t();return}this.removed=!0,_n.play("wall");const e=[],n=(h,u)=>{h.materials.forEach((d,f)=>{var x;const g=((x=h.baseOpacities)==null?void 0:x[f])??1;d.opacity=u*g})};for(let h=0;h<40;h+=1){const u=.2+Math.random()*.3,d=new Mt("#c5a188"),f=.05+Math.random()*.1,g=d.clone().offsetHSL(0,0,f*.5),x=d.clone().offsetHSL(0,0,f),m=new le({color:g,transparent:!0,opacity:.5,depthTest:!1}),p=new Ht(new ei(u,24),m),M=new le({color:x,transparent:!0,opacity:.2,depthTest:!1,blending:Ki}),v=new Ht(new ei(u*1.4,24),M),_=new Ee;_.add(p),_.add(v),_.position.set(this.data.x+(Math.random()-.5)*this.data.width*.8,this.data.y+(Math.random()-.5)*this.data.height*.8,.21),_.renderOrder=5;const L=Math.random()*Math.PI*2,R=4+Math.random()*7;e.push({mesh:_,vx:Math.cos(L)*R,vy:Math.sin(L)*R+1.5,rotSpeed:(Math.random()-.5)*6,lifeFactor:1+Math.random()*.5,materials:[m,M],baseOpacities:[.5,.2]}),this.cracks.add(_)}for(let h=0;h<15;h+=1){const u=.2+Math.random()*.2,d=.09+Math.random()*.05,f=new Mt().setHSL(d,.9,.65),g=new le({color:f,transparent:!0,opacity:.7,depthTest:!1,blending:Ki}),x=new Ht(new ei(u,16),g);x.position.set(this.data.x+(Math.random()-.5)*this.data.width*.5,this.data.y+(Math.random()-.5)*this.data.height*.5,.22),x.renderOrder=6;const m=Math.random()*Math.PI*2,p=4+Math.random()*6;e.push({mesh:x,vx:Math.cos(m)*p,vy:Math.sin(m)*p,rotSpeed:0,lifeFactor:1.5+Math.random()*.5,isGlow:!0,materials:[g],baseOpacities:[.7]}),this.cracks.add(x)}const i=new Ht(new Ml(.1,.3,32),new le({color:new Mt("#fff5d6"),transparent:!0,opacity:.6,depthTest:!1,side:Ce,blending:Ki}));i.position.set(this.data.x,this.data.y,.23),i.renderOrder=7,this.cracks.add(i);const r=new Ht(new ei(Math.max(this.data.width,this.data.height)*.7,32),new le({color:new Mt("#ffffff"),transparent:!0,opacity:.5,depthTest:!1,blending:Ki}));r.position.set(this.data.x,this.data.y,.24),r.renderOrder=8,this.cracks.add(r);const o=performance.now(),a=1500,l=this.mesh.scale.clone(),c=()=>{var p,M;const u=(performance.now()-o)/a;if(u>=1){this.mesh.visible=!1;for(const v of e){for(const _ of v.materials)_.dispose();if(v.mesh instanceof Ee)for(const _ of v.mesh.children)(p=_.geometry)==null||p.dispose();else(M=v.mesh.geometry)==null||M.dispose();this.cracks.remove(v.mesh)}i.geometry.dispose(),i.material.dispose(),this.cracks.remove(i),r.geometry.dispose(),r.material.dispose(),this.cracks.remove(r),t==null||t();return}const d=1/60;if(u<.2){const v=(1-u/.2)*.1;this.mesh.position.x=this.data.x+(Math.random()-.5)*v,this.mesh.position.y=this.data.y+(Math.random()-.5)*v}else{const v=Math.max(0,1-(u-.2)/.5);this.mesh.scale.set(l.x*v,l.y*v,1),this.mesh.material.opacity=.95*v}for(const v of e){v.mesh.position.x+=v.vx*d,v.mesh.position.y+=v.vy*d,v.vy-=8*d,v.vx*=.99,v.vy*=.99,v.mesh.rotation.z+=v.rotSpeed*d;const _=Math.max(0,1-u*v.lifeFactor);if(n(v,_),v.isGlow){const L=Math.max(.1,1-u*1.2);v.mesh.scale.set(L,L,1)}}const f=Math.min(1,u/.6),g=1+f*8;i.scale.set(g,g,1),i.material.opacity=Math.max(0,1-f);const x=Math.min(1,u/.15),m=1+x*1.5;r.scale.set(m,m,1),r.material.opacity=Math.max(0,1-x),requestAnimationFrame(c)};requestAnimationFrame(c)}}const fv=[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]];function ks(s,t){return s.row*t+s.col}function io(s,t,e){const n=ks(e,t);return n>=0&&n<s.length&&s[n]===1}function Ns(s,t,e,n,i=16){if(io(s,t,n))return n;for(let r=1;r<=i;r+=1)for(let o=-r;o<=r;o+=1)for(let a=-r;a<=r;a+=1){if(Math.abs(a)!==r&&Math.abs(o)!==r)continue;const l={col:n.col+a,row:n.row+o};if(!(l.col<0||l.col>=t||l.row<0||l.row>=e)&&io(s,t,l))return l}return null}function tl(s,t,e,n){let i=e.col,r=e.row;const o=n.col,a=n.row,l=Math.abs(o-i),c=Math.abs(a-r),h=i<o?1:-1,u=r<a?1:-1;let d=l-c;for(;;){if(s[r*t+i]!==1)return!1;if(i===o&&r===a)return!0;const f=2*d;f>-c&&(d-=c,i+=h),f<l&&(d+=l,r+=u)}}function pv(s,t,e){if(s.length<=2)return s;const n=[s[0]];let i=0;for(;i<s.length-1;){let r=s.length-1;for(;r>i+1&&!tl(t,e,s[i],s[r]);)r-=1;n.push(s[r]),i=r}return n}function mv(s){if(s.length<=2)return s;const t=[s[0]];let e=null;for(let n=1;n<s.length;n+=1){const i=s[n],r=s[n-1],o=[i.col-r.col,i.row-r.row];e&&o[0]===e[0]&&o[1]===e[1]?t[t.length-1]=i:(t.push(i),e=o)}return t}function sa(s,t,e,n,i){if(!io(s,t,n)||!io(s,t,i))return null;const r=[n],o=new Uint8Array(t*e),a=new Int32Array(t*e);for(a.fill(-1),o[ks(n,t)]=1;r.length>0;){const l=r.shift();if(!l)break;if(l.col===i.col&&l.row===i.row){const c=[];let h=ks(i,t);for(;h!==-1;)c.push({col:h%t,row:Math.floor(h/t)}),h=a[h];return mv(c.reverse())}for(const[c,h]of fv){const u={col:l.col+c,row:l.row+h};if(u.col<0||u.col>=t||u.row<0||u.row>=e)continue;const d=ks(u,t);o[d]===1||s[d]!==1||(o[d]=1,a[d]=ks(l,t),r.push(u))}}return null}const $e=class $e{constructor(t,e,n,i){A(this,"rootGroup",new Ee);A(this,"shadowDirection");A(this,"shadowMask");A(this,"platforms",[]);A(this,"shadowObjects",[]);A(this,"gate");A(this,"walker");A(this,"companion",null);A(this,"extraGroups",[]);A(this,"activeGroupIndex",0);A(this,"partyMerged",!1);A(this,"passSfxPlayed",!1);A(this,"partyOffsets",[]);A(this,"button",null);A(this,"buttons",[]);A(this,"hiddenPlatforms",[]);A(this,"hiddenGroups",[]);A(this,"walls",[]);A(this,"wallInstances",[]);A(this,"onWallRemoved");A(this,"hiddenRevealProgress",0);A(this,"hiddenRevealDirection","show");A(this,"hiddenPlatformsCommitted",!1);A(this,"hintMesh");A(this,"selectedIndex",-1);A(this,"paused",!1);A(this,"completed",!1);A(this,"shadowDirty",!0);A(this,"hintTimer",0);A(this,"walkerFalling",!1);A(this,"onWalkerFell");A(this,"onRestart");A(this,"onTutorialUnlock");A(this,"onBridgeConnected");A(this,"onWalkerSelected");A(this,"onLevelComplete");A(this,"onWalkerStartMove");A(this,"onWalkerArrived");A(this,"tutorialStepsLeft");A(this,"tutorialRotateStepsLeft");A(this,"walkerMoveLocked");A(this,"walkerSelected",!1);A(this,"currentHint",null);A(this,"onAutoFinish");A(this,"bridgeConnected",!1);this.sceneManager=t,this.hud=e,this.config=n,this.onComplete=i,this.rootGroup.name=`${n.name}-root`,this.sceneManager.scene.add(this.rootGroup),this.shadowMask=new v_(t.renderer,t.wallBounds),this.tutorialStepsLeft=n.tutorialUpSteps??0,this.tutorialRotateStepsLeft=n.tutorialRotateSteps??0,this.walkerMoveLocked=n.lockWalkerUntilBridge??!1;const r=n.shadowDirection??{x:0,y:.3,z:-20};this.shadowDirection=new P(r.x,r.y,r.z).normalize();for(const l of n.platforms){const c=new Qo(l);this.platforms.push(c),this.rootGroup.add(c.mesh)}this.shadowMask.buildPlatformMask(this.platforms),this.gate=new S_(n.gate),this.rootGroup.add(this.gate.group);for(const l of n.objects){const c=new hv(l);c.onGlbReady=()=>this.refreshShadows(),this.shadowObjects.push(c),this.rootGroup.add(c.shadowVisualMesh,c.group),this.shadowMask.addObject(c),l.initiallyHidden&&c.setHidden(!0)}if(this.walker=new Bs(new Z(n.walkerStart.x,n.walkerStart.y),n.walkerSheet,n.walkerSpeed!==void 0?{speed:n.walkerSpeed}:void 0),this.rootGroup.add(this.walker.group),n.companion&&(this.companion=new ph(n.companion),this.rootGroup.add(this.companion.group),n.companion.startInFollow&&this.startCompanionFollowing()),n.extraCharacterGroups)for(const l of n.extraCharacterGroups){const c=new Bs(new Z(l.start.x,l.start.y),l.sheet,{initialFacing:l.initialFacing??"right",speed:n.extraWalkerSpeed});this.rootGroup.add(c.group);let h=null;l.companion&&(h=new ph(l.companion),this.rootGroup.add(h.group),l.companion.startInFollow&&h.startFollowing(()=>({pos:c.position,isWalking:c.isWalking()}))),this.extraGroups.push({walker:c,companion:h})}if(n.hiddenPlatforms)for(const l of n.hiddenPlatforms){const c=new Qo({...l,opacity:.8,color:"#7e865b"});c.mesh.visible=!1,this.hiddenPlatforms.push(c),this.rootGroup.add(c.mesh)}let o=!1;if(n.hiddenPlatformGroups){for(const l of n.hiddenPlatformGroups){const c=[];for(const u of l.platforms){const d=new Qo({...u,opacity:.8,color:"#7e865b"});d.mesh.visible=!!l.initiallyRevealed,l.initiallyRevealed||(d.mesh.scale.x=0),c.push(d),this.rootGroup.add(d.mesh)}const h={cfg:l,platforms:c,progress:l.initiallyRevealed?c.length+1:0,direction:l.initiallyRevealed?"show":"hide",committed:!1};if(this.hiddenGroups.push(h),l.initiallyRevealed){h.committed=!0;for(const u of c)this.platforms.push(u);o=!0}}o&&this.shadowMask.buildPlatformMask(this.platforms)}if(n.button&&(this.button=new no(n.button),this.rootGroup.add(this.button.group),this.button.onActivated(()=>{this.hiddenRevealProgress=0;for(const l of this.hiddenPlatforms)l.mesh.visible=!0,l.mesh.scale.x=0,l.mesh.position.x=l.data.x-l.data.width/2})),n.buttons)for(const l of n.buttons){const c=new no(l);this.rootGroup.add(c.group),this.buttons.push(c);const h=()=>{this.buttons.every(u=>u.isActivated)&&!this.gate.isVisible&&(this.gate.setHidden(!1),this.autoMoveAllWalkersToGate())};c.onActivated(h)}if(n.gateInitialHidden&&this.gate.setHidden(!0),n.walls){for(const l of n.walls){const c=new dv(l);this.wallInstances.push(c),this.walls.push({...l,removed:!1}),this.rootGroup.add(c.mesh,c.cracks)}this.shadowMask.setWalls(this.getBfsWallRects())}if(n.wallRemoveButtonIndex!==void 0){const l=n.wallRemoveButtonIndex,c=this.buttons[l];c&&this.wallInstances.length>0&&c.onActivated(()=>{var h;for(let u=0;u<this.wallInstances.length;u+=1){const d=this.wallInstances[u],f=this.walls[u];f&&!f.removed&&(f.removed=!0,d.explode(()=>{}))}this.shadowMask.setWalls(this.getBfsWallRects()),this.refreshShadows(),this.selectLeftmostObject(),(h=this.onWallRemoved)==null||h.call(this)})}if(n.revealObjectsButtonIndex!==void 0){const l=this.buttons[n.revealObjectsButtonIndex];l&&l.onActivated(()=>{let c=-1;for(let h=0;h<this.shadowObjects.length;h+=1){const u=this.shadowObjects[h];u.data.initiallyHidden&&(u.setHidden(!1),c===-1&&(c=h))}c>=0&&(this.refreshShadows(),this.setSelectedObject(c))})}for(const l of this.hiddenGroups)if(l.cfg.triggerLeverIndex!==void 0){const c=this.buttons[l.cfg.triggerLeverIndex];if(c){c.onToggle(u=>{const d=u===(l.cfg.triggerLeverState??"A");this.startHiddenGroupTransition(l,d)});const h=c.currentToggleState===(l.cfg.triggerLeverState??"A");!l.cfg.initiallyRevealed&&h?this.startHiddenGroupTransition(l,!0):l.cfg.initiallyRevealed&&!h&&this.startHiddenGroupTransition(l,!1)}}else if(l.cfg.triggerButtonIndex!==void 0){const c=this.buttons[l.cfg.triggerButtonIndex];c&&(c.onActivated(()=>this.startHiddenGroupTransition(l,!0)),c.onDeactivated(()=>this.startHiddenGroupTransition(l,!1)))}if(n.hiddenPlatformButtonIndex!==void 0&&this.hiddenPlatforms.length>0){const l=n.hiddenPlatformButtonIndex,c=this.buttons[l];c&&(c.onActivated(()=>{this.hiddenPlatformsCommitted=!1,this.hiddenRevealDirection="show",this.hiddenRevealProgress=0;for(const h of this.hiddenPlatforms)h.mesh.visible=!0,h.mesh.scale.x=0,h.mesh.position.x=h.data.x-h.data.width/2}),c.onDeactivated(()=>{this.hiddenPlatformsCommitted=!1;for(const u of this.hiddenPlatforms){const d=this.platforms.indexOf(u);d>=0&&this.platforms.splice(d,1)}this.shadowMask.buildPlatformMask(this.platforms),this.checkBridgeConnected(),this.hiddenRevealDirection="hide";const h=this.hiddenPlatforms.length;this.hiddenRevealProgress=h+1}))}this.hintMesh=new Ht(new Ve(n.hintArea.width,n.hintArea.height),new le({color:new Mt("#fff0ab"),transparent:!0,opacity:0,depthWrite:!1})),this.hintMesh.position.set(n.hintArea.x,n.hintArea.y,.12),this.rootGroup.add(this.hintMesh),this.refreshShadows();const a=this.walls.some(l=>!l.removed);if(this.shadowObjects.length>0&&!a){const l=this.shadowObjects.reduce((c,h,u,d)=>h.group.position.x<d[c].group.position.x?u:c,0);this.setSelectedObject(l)}n.partyMergedFromStart&&n.allowPartyMerge&&this.extraGroups.length>0&&this.mergeParty()}get currentGroupIndex(){return this.activeGroupIndex}get isWalkerMoveLocked(){return this.walkerMoveLocked}get isWalkerSelected(){return this.walkerSelected}get walkerWorldPosition(){return this.activeWalker.position}get companionInstance(){return this.companion}get mainWalker(){return this.walker}get mainCompanion(){return this.companion}getExtraWalker(t){var e;return((e=this.extraGroups[t])==null?void 0:e.walker)??null}getExtraCompanion(t){var e;return((e=this.extraGroups[t])==null?void 0:e.companion)??null}get extraGroupCount(){return this.extraGroups.length}setHintText(t,e){return this.currentHint={zh:t,en:e},fe.current==="zh"?t:e??t}refreshHintText(){if(!this.currentHint)return null;const{zh:t,en:e}=this.currentHint;return fe.current==="zh"?t:e??t}triggerAutoFinish(){this._autoFinishTriggered||(this._autoFinishTriggered=!0,setTimeout(()=>{var t;this.autoMoveAllWalkersToGate(),(t=this.onAutoFinish)==null||t.call(this)},0))}startCompanionFollowing(){var t;(t=this.companion)==null||t.startFollowing(()=>({pos:this.walker.position,isWalking:this.walker.isWalking()}))}get gateWorldPosition(){return{x:this.config.gate.x,y:this.config.gate.y}}get activeWalker(){var t;return this.activeGroupIndex===0?this.walker:((t=this.extraGroups[this.activeGroupIndex-1])==null?void 0:t.walker)??this.walker}get activeCompanion(){var t;return this.activeGroupIndex===0?this.companion:((t=this.extraGroups[this.activeGroupIndex-1])==null?void 0:t.companion)??null}get allWalkers(){return[this.walker,...this.extraGroups.map(t=>t.walker)]}getClickedGroupIndex(t,e){if(this.extraGroups.length===0)return-1;const n=this.allWalkers;let i=-1,r=1/0;for(let o=0;o<n.length;o+=1){const a=n[o].position,l=1,c=Math.max(.9,n[o].height/2+.85),h=Math.abs(t-a.x),u=Math.abs(e-a.y);if(h>l||u>c)continue;const d=Math.hypot(h,u);d<r&&(r=d,i=o)}if(i>=0)return this.partyMerged?0:i;if(this.partyMerged)return-1;for(let o=0;o<n.length;o+=1){if(o===this.activeGroupIndex)continue;const a=this.getGroupResponseArea(o);if(a&&t>=a.minX&&t<=a.maxX&&e>=a.minY&&e<=a.maxY)return o}return-1}trySwitchGroupByClick(t,e){const n=this.getClickedGroupIndex(t,e);return n<0?!1:(n!==this.activeGroupIndex&&this.switchToGroup(n),!0)}getGroupResponseArea(t){var h;const e=this.allWalkers[t];if(!e)return null;const n=t===0?this.companion:((h=this.extraGroups[t-1])==null?void 0:h.companion)??null,i=[{x:e.position.x,y:e.position.y,height:e.height}];n&&i.push({x:n.walker.position.x,y:n.walker.position.y,height:n.walker.height});const r=1,o=Math.min(...i.map(u=>u.x))-r,a=Math.max(...i.map(u=>u.x))+r,l=i.reduce((u,d)=>u.height>=d.height?u:d,i[0]),c=Math.max(.9,l.height/2+.85);return{minX:o,maxX:a,minY:l.y-c,maxY:l.y+c}}switchToGroup(t){if(!(t<0||t>this.extraGroups.length)){this.activeGroupIndex=t;for(const e of this.allWalkers)e.hideIndicator();this.walkerSelected&&this.activeWalker.showIndicator()}}get groupCount(){return 1+this.extraGroups.length}selectWalker(){var t;this.walkerSelected=!0,this.shadowObjects.forEach(e=>e.setSelected(!1)),this.selectedIndex=-1,this.activeWalker.showIndicator(),(t=this.onWalkerSelected)==null||t.call(this),_n.play("click",.8)}deselectWalker(){this.walkerSelected=!1;for(const t of this.allWalkers)t.hideIndicator()}get platformTopY(){return Math.min(...this.config.platforms.map(t=>t.y+t.height/2))}get pickables(){return this.shadowObjects.flatMap(t=>t.pickables)}get selectedObject(){return this.selectedIndex>=0?this.shadowObjects[this.selectedIndex]:null}get selectedAnchor(){return this.selectedObject?this.selectedObject.anchorWorldPosition:null}setSelectedObject(t){if(this.shadowObjects.forEach(e=>e.setSelected(!1)),t===null||t<0||t>=this.shadowObjects.length){this.selectedIndex=-1;return}this.selectedIndex=t,this.shadowObjects[this.selectedIndex].setSelected(!0),this.deselectWalker()}selectLeftmostObject(){if(this.shadowObjects.length===0)return;const t=this.shadowObjects.map((i,r)=>({obj:i,idx:r})).filter(({obj:i})=>i.group.visible);if(t.length===0||this.walls.some(i=>!i.removed))return;this.deselectWalker();const n=t.reduce((i,r)=>r.obj.group.position.x<i.obj.group.position.x?r:i,t[0]);this.setSelectedObject(n.idx)}autoSelectForAction(t){if(!this.config.autoSelectByAction)return;const e=this.shadowObjects.findIndex(n=>t==="rotate"?!n.data.disableRotate:!n.data.disableMove);e>=0&&e!==this.selectedIndex&&this.setSelectedObject(e)}cycleSelection(){if(this.shadowObjects.length===0)return;const t=this.selectedIndex<0?0:(this.selectedIndex+1)%this.shadowObjects.length;this.setSelectedObject(t)}selectObjectFromMesh(t){const e=t.userData.shadowObject;if(!e)return;const n=this.shadowObjects.indexOf(e);n>=0&&(this.setSelectedObject(n),_n.play("click",.8))}getWalkerOnShadow(){if(!this.bridgeConnected)return null;const t=this.getPlatformGaps();for(const e of this.allWalkers){const n=e.position.x;for(const i of t)if(n>i.leftX&&n<i.rightX)return e}return null}interceptIfWalkerOnShadow(){var e;const t=this.getWalkerOnShadow();return t&&!this.walkerFalling?(this.walkerFalling=!0,(e=this.onWalkerFell)==null||e.call(this),t.fall(()=>{this.walkerFalling=!1,this.restart()}),!0):!1}rotateSelected(t,e,n=0){var i;this.paused||this.completed||!this.selectedObject||this.interceptIfWalkerOnShadow()||(this.selectedObject.rotate(t,e,n),this.refreshShadows(),n>0&&this.tutorialRotateStepsLeft>0&&(this.tutorialRotateStepsLeft-=1,this.tutorialRotateStepsLeft===0&&((i=this.onTutorialUnlock)==null||i.call(this))))}setSelectedRail(t,e){this.paused||this.completed||!this.selectedObject||e&&!this.selectedObject.canMove(e)||this.interceptIfWalkerOnShadow()||(this.selectedObject.setRailT(t,e),this.refreshShadows())}moveSelectedY(t){var n;if(this.paused||this.completed||!this.selectedObject)return;const e=t>0?"up":"down";this.selectedObject.canMove(e)&&(this.interceptIfWalkerOnShadow()||(this.selectedObject.moveY(t),this.refreshShadows(),e==="up"&&this.tutorialStepsLeft>0&&(this.tutorialStepsLeft-=1,this.tutorialStepsLeft===0&&((n=this.onTutorialUnlock)==null||n.call(this)))))}resetSelectedObject(){this.selectedObject&&(this.selectedObject.reset(),this.refreshShadows())}setSelectedInitialT(t){this.selectedObject&&(this.selectedObject.setRailT(Math.max(0,Math.min(1,t))),this.refreshShadows())}setSelectedRotation(t,e,n){this.selectedObject&&(this.selectedObject.group.rotation.set(t,e,n),this.refreshShadows())}setSelectedYOffset(t){this.selectedObject&&(this.selectedObject.setYOffset(t),this.refreshShadows())}setSelectedModelScale(t){this.selectedObject&&(this.selectedObject.setModelScale(t),this.refreshShadows())}setSelectedProjScale(t){this.selectedObject&&(this.selectedObject.setProjScale(t),this.refreshShadows())}setShadowDirectionY(t){const e=this.config.shadowDirection??{x:0,z:-20};this.shadowDirection=new P(e.x,t,e.z).normalize(),this.config.shadowDirection?this.config.shadowDirection.y=t:this.config.shadowDirection={x:e.x,y:t,z:e.z},this.refreshShadows()}getShadowDirectionRawY(){var t;return((t=this.config.shadowDirection)==null?void 0:t.y)??.3}finalizeAdjustment(){this.refreshShadows()}attemptMove(t){var R;if(this.paused||this.completed||this.walkerMoveLocked)return!1;const e=this.activeWalker,n=new Z(t.x,t.y),i=this.gate.isClickedOn(n)?new P(this.config.gate.x,e.position.y,t.z):t,r=this.snapToNearestSurface(i.x,i.y),o=new P(i.x,r,i.z),a=this.shadowMask.mapper.worldToCell(e.position.x,e.position.y);let l=a;a&&this.shadowMask.mask[a.row*this.shadowMask.width+a.col]!==1&&(l=Ns(this.shadowMask.mask,this.shadowMask.width,this.shadowMask.height,a,20));const c=this.shadowMask.mapper.worldToCell(o.x,o.y);if(!l)return console.log("[path-fail] startCell snap fail",e.position.x,e.position.y,a),this.hud.showToast(fe.t("无法到达(start)","Cannot reach (start)")),!1;if(!c)return this.hud.showToast(fe.t("无法到达(target)","Cannot reach (target)")),!1;const h=Ns(this.shadowMask.mask,this.shadowMask.width,this.shadowMask.height,c,10);if(!h)return this.hud.showToast(fe.t("无法到达(nearest)","Cannot reach (nearest)")),!1;let u=null;const d=this.shadowMask.mask,f=this.shadowMask.width;if(Math.abs(l.row-h.row)<=2){const T={col:l.col,row:l.row},D={col:h.col,row:l.row};tl(d,f,T,D)&&(u=[T,D])}if(!u&&tl(d,f,l,h)&&(u=[l,h]),!u){const T=sa(this.shadowMask.mask,this.shadowMask.width,this.shadowMask.height,l,h);if(!T)return this.hud.showToast(fe.t("无法到达","Cannot reach")),!1;u=pv(T,this.shadowMask.mask,this.shadowMask.width)}this.platforms.map(T=>({leftX:T.data.x-T.data.width/2,rightX:T.data.x+T.data.width/2,topY:T.data.y+T.data.height/2}));const g=this.getPlatformGaps(),x=g.map(T=>this.isGapBridged(T)),m=T=>{for(const D of this.shadowObjects){const b=D.getYRangeAtX(T);if(b!==null)return b.maxY}return null},p=this.platforms.map(T=>({leftX:T.data.x-T.data.width/2,rightX:T.data.x+T.data.width/2,bottomY:T.data.y-T.data.height/2,topY:T.data.y+T.data.height/2})),M=u.map(T=>{const D=this.shadowMask.mapper.cellToWorld(T),b=new Z(D.x,D.y),w=.06,I=p.filter(W=>b.x>=W.leftX&&b.x<=W.rightX&&b.y>=W.bottomY-w&&b.y<=W.topY+w);if(I.length>0){let W=I[0],B=Math.abs(W.topY-b.y);for(let V=1;V<I.length;V+=1){const G=Math.abs(I[V].topY-b.y);G<B&&(W=I[V],B=G)}return b.y=W.topY,b}for(let W=0;W<g.length;W+=1){if(!x[W])continue;const B=g[W];if(b.x>B.leftX&&b.x<B.rightX){const V=m(b.x);return V!==null&&(b.y=V),b}}return b}),v=.05,_=[];for(let T=0;T<M.length;T+=1){const D=M[T];if(_.push(D),T<M.length-1){const b=M[T+1],w=Math.min(D.x,b.x),I=Math.max(D.x,b.x),W=b.x>=D.x,B=[];for(let V=0;V<g.length;V+=1){if(!x[V])continue;const G=g[V],Y=Math.min(G.leftPlatTop,G.rightPlatTop),J=Math.max(G.leftPlatTop,G.rightPlatTop),k=Math.min(D.y,b.y),nt=Math.max(D.y,b.y),ut=.6;if(nt<Y-ut||k>J+ut)continue;const dt=Math.max(w,G.leftX),Nt=Math.min(I,G.rightX);if(dt<Nt){const $t=[];let q=dt+v/2;for(;q<Nt;){const xt=m(q);xt!==null&&$t.push({x:q,y:xt}),q+=v}const rt=5;for(let xt=0;xt<$t.length;xt+=1){const lt=Math.max(0,xt-Math.floor(rt/2)),Pt=Math.min($t.length-1,xt+Math.floor(rt/2));let Bt=0;for(let jt=lt;jt<=Pt;jt+=1)Bt+=$t[jt].y;const Dt=Bt/(Pt-lt+1);B.push(new Z($t[xt].x,Dt))}}}B.sort((V,G)=>W?V.x-G.x:G.x-V.x),_.push(...B)}}const L=this.clipPathByWallBuffer(_);if(this.partyMerged)for(const T of this.partyOffsets){const D=T.getWalker();if(!D)continue;const b=D instanceof Bs?D:D.walker;b.setPath(L.map(w=>w.clone()),()=>{this.gate.isReached(b.position)&&this.tryCompleteLevel()})}else{const T=this.activeCompanion;T&&T.followPath(L.map(D=>D.clone()))}return e.setPath(L,()=>{var T;this.gate.isReached(e.position)?this.tryCompleteLevel():(T=this.onWalkerArrived)==null||T.call(this,e.position)}),(R=this.onWalkerStartMove)==null||R.call(this),!0}snapToNearestSurface(t,e){const n=[];for(const a of this.platforms){const l=a.data,c=l.x-l.width/2,h=l.x+l.width/2,u=l.y+l.height/2,d=l.y-l.height/2;t>=c&&t<=h&&n.push({topY:u,bottomY:d,inside:e>=d&&e<=u})}const i=n.filter(a=>a.inside);if(i.length>0){let a=i[0].topY;for(const l of i)l.topY>a&&(a=l.topY);return a}const r=n.filter(a=>a.topY<=e);if(r.length>0){let a=r[0].topY;for(const l of r)l.topY>a&&(a=l.topY);return a}if(n.length>0){let a=n[0].topY;for(const l of n)l.topY<a&&(a=l.topY);return a}let o=1/0;for(const a of this.config.platforms){const l=a.y+a.height/2;l<o&&(o=l)}return o===1/0?e:o}showHint(){this.hud.showHintMessage(),this.hintTimer=1.2}togglePause(){if(this.completed){this.restart();return}if(!this.paused){this.paused=!0,this.hud.setPaused(!0);return}this.restart()}pause(){this.paused=!0}resume(){this.paused=!1,this.hud.setPaused(!1)}setVisible(t){this.walker.group.visible=t}dispose(){var t,e;this.sceneManager.scene.remove(this.rootGroup);for(const n of[this.rootGroup,...Array.from(this.shadowObjects).map(i=>i.group)])$e.traverseDispose(n);for(const n of this.shadowObjects)n.shadowMaskMesh.removeFromParent(),n.shadowMaskMesh.geometry.dispose(),n.shadowMaskMesh.material.dispose(),n.shadowVisualMesh.geometry.dispose(),n.shadowVisualMesh.material.dispose(),(t=n.shadowVisualMesh.material.map)==null||t.dispose();this.shadowMask.dispose(),this.walker.dispose(),this.companion&&this.companion.walker.dispose();for(const n of this.extraGroups)n.walker.dispose(),(e=n.companion)==null||e.walker.dispose();this.gate.dispose();for(const n of this.platforms)n.mesh.geometry.dispose(),n.mesh.material.dispose();for(const n of this.hiddenPlatforms)n.mesh.geometry.dispose(),n.mesh.material.dispose();this.hintMesh.geometry.dispose(),this.hintMesh.material.dispose()}static traverseDispose(t){for(const n of t.children)$e.traverseDispose(n),t.remove(n);const e=t;if(e.geometry&&e.geometry.dispose(),e.material){const n=Array.isArray(e.material)?e.material:[e.material];for(const i of n)i.map&&i.map.dispose(),i.normalMap&&i.normalMap.dispose(),i.roughnessMap&&i.roughnessMap.dispose(),i.metalnessMap&&i.metalnessMap.dispose(),i.emissiveMap&&i.emissiveMap.dispose(),i.dispose()}}restart(){var t;this.completed=!1,this.paused=!1,this.walkerFalling=!1,this.walkerMoveLocked=this.config.lockWalkerUntilBridge??!1,this.walkerSelected=!1,(t=this.onRestart)==null||t.call(this),this.hud.setPaused(!1),this.hud.hideComplete(),this.setVisible(!0);for(const e of this.shadowObjects)e.reset();this.walker.setPosition(new Z(this.config.walkerStart.x,this.config.walkerStart.y)),this.selectLeftmostObject(),this.refreshShadows()}update(t){var n,i,r,o,a;if(!this.paused){this.walker.update(t),(n=this.companion)==null||n.update(t);for(const g of this.extraGroups)g.walker.update(t),(i=g.companion)==null||i.update(t);if(this.partyMerged&&this.partyOffsets.length>0){let m=this.activeWalker.position.x,p=this.activeWalker.position.y;this.activeWalker.speedBoost=1;for(const M of this.partyOffsets){const v=M.getWalker();if(!v)continue;const _=v instanceof Bs?v:v.walker,L=Math.hypot(_.position.x-m,_.position.y-p);let R=1;L>3?R=3:L>1.5&&(R=2),_.speedBoost=R,m=_.position.x,p=_.position.y}}if(!this.passSfxPlayed&&this.gate.isVisible){const g=this.config.gate.x,x=this.allWalkers;for(const m of x)if(Math.abs(m.position.x-g)<1.5){this.passSfxPlayed=!0,_n.play("pass");break}}this.gate.update(t,this.completed),(r=this.button)==null||r.update(t);for(const g of this.buttons)g.update(t);for(const g of this.shadowObjects)g.update(t);if(this.config.allowPartyMerge&&!this.partyMerged&&this.extraGroups.length>0){const g=this.config.partyMergeCondition??"wall-removed";let x=!1;if(g==="wall-removed"){if(x=this.walls.length===0||this.walls.every(p=>p.removed),x&&this.config.partyMergePlatformY!==void 0){const p=this.config.partyMergePlatformY,M=.5,v=Math.abs(this.walker.position.y-p)<M,_=this.extraGroups.every(L=>Math.abs(L.walker.position.y-p)<M);x=x&&v&&_}}else if(g==="bridge-connected-same-platform"){const m=this.config.partyMergePlatformY??0,p=.5,M=this.walker.position,v=Math.abs(M.y-m)<p,_=this.extraGroups.every(R=>Math.abs(R.walker.position.y-m)<p),L=this.walls.length===0||this.walls.every(R=>R.removed);x=this.bridgeConnected&&L&&v&&_}if(x)if(this.config.partyMergeChase){const m=this.walker.position;let p=!0;for(const M of this.extraGroups){if(Math.hypot(m.x-M.walker.position.x,m.y-M.walker.position.y)<$e.MERGE_THRESHOLD)continue;p=!1;const _=m.x,L=M.walker.position.y;if(M.walker.setPath([new Z(_,L)]),M.companion&&M.companion.followPath([new Z(_-.5,L)]),this.config.partyMergeBidirectional&&!this.isWalkerMoveLocked&&!this.walker.isWalking()){const R=M.walker.position.x;this.walker.setPath([new Z(R,M.walker.position.y)]),this.companion&&this.companion.followPath([new Z(R-.5,M.walker.position.y)])}}p&&this.mergeParty()}else{const m=this.walker.position;for(const p of this.extraGroups)if(Math.hypot(m.x-p.walker.position.x,m.y-p.walker.position.y)<$e.MERGE_THRESHOLD){this.mergeParty();break}}}if(this.partyMerged&&this.updatePartyFollowing(),this.config.extraGroupsFacePartyMain&&!this.partyMerged){const g=this.walker.position.x;for(const x of this.extraGroups){if(!x.walker.isWalking()){const m=Math.sign(g-x.walker.position.x);m!==0&&x.walker.setFacing(m)}if(x.companion&&!x.companion.walker.isWalking()){const m=Math.sign(g-x.companion.walker.position.x);m!==0&&x.companion.walker.setFacing(m)}}}const l=[];l.push({x:this.walker.position.x,y:this.walker.position.y,ref:this.walker});for(const g of this.extraGroups)l.push({x:g.walker.position.x,y:g.walker.position.y,ref:g.walker});if(this.button&&!this.button.isActivated)for(const g of l)this.button.checkTrigger(g.x,g.y,g.ref);for(const g of this.buttons)for(const x of l)g.checkTrigger(x.x,x.y,x.ref);const c=this.hiddenPlatforms.length,h=c+1,u=((o=this.button)==null?void 0:o.isActivated)||this.config.hiddenPlatformButtonIndex!==void 0&&((a=this.buttons[this.config.hiddenPlatformButtonIndex])==null?void 0:a.isActivated),d=u&&this.hiddenRevealDirection==="show"&&!this.hiddenPlatformsCommitted&&this.hiddenRevealProgress<h,f=!u&&this.hiddenRevealDirection==="hide"&&this.hiddenRevealProgress>0&&c>0;if(d||f){const g=this.config.hiddenPlatformRevealDuration??1,x=t/g*h;d?this.hiddenRevealProgress=Math.min(h,this.hiddenRevealProgress+x):this.hiddenRevealProgress=Math.max(0,this.hiddenRevealProgress-x);const m=[...this.hiddenPlatforms].map((p,M)=>({plat:p,idx:M,sortKey:p.data.x})).sort((p,M)=>p.sortKey-M.sortKey);for(let p=0;p<m.length;p+=1){const M=m[p].plat,v=Math.max(0,Math.min(1,this.hiddenRevealProgress-p));M.mesh.scale.x=v;const _=(1-v)*M.data.width/2;M.mesh.position.x=M.data.x-_,f&&v===0&&(M.mesh.visible=!1)}d&&this.hiddenRevealProgress>=h&&this.commitHiddenPlatforms()}for(const g of this.hiddenGroups){const x=g.platforms.length,m=x+1,p=g.direction==="show"&&!g.committed&&g.progress<m,M=g.direction==="hide"&&g.progress>0&&x>0;if(p||M){const v=g.cfg.revealDuration??this.config.hiddenPlatformRevealDuration??1,_=t/v*m;p?g.progress=Math.min(m,g.progress+_):g.progress=Math.max(0,g.progress-_);const L=[...g.platforms].map((R,T)=>({plat:R,idx:T,sortKey:R.data.x})).sort((R,T)=>R.sortKey-T.sortKey);for(let R=0;R<L.length;R+=1){const T=L[R].plat,D=Math.max(0,Math.min(1,g.progress-R));T.mesh.scale.x=D;const b=(1-D)*T.data.width/2;T.mesh.position.x=T.data.x-b,M&&D===0&&(T.mesh.visible=!1)}if(p&&g.progress>=m&&!g.committed){g.committed=!0;for(const R of g.platforms)this.platforms.push(R);this.shadowMask.buildPlatformMask(this.platforms),this.shadowMask.captureMask(),this.checkBridgeConnected()}}}}this.shadowDirty&&(this.shadowMask.refreshVisual(),this.shadowDirty=!1),this.hintTimer>0&&(this.hintTimer=Math.max(0,this.hintTimer-t));const e=this.hintMesh.material;e instanceof le&&(e.opacity=this.hintTimer>0?.28+Math.sin(performance.now()*.012)*.1:0)}refreshShadows(){for(const t of this.shadowObjects)t.updateShadowProjection(this.shadowDirection,this.sceneManager.wallBounds.z);this.shadowMask.captureMask(),this.shadowDirty=!1,this.checkBridgeConnected()}getPlatformGaps(){const e=new Set(this.config.bridgeIgnorePlatformIds??[]),i=[...this.platforms.map(a=>a.data).filter(a=>!e.has(a.id))].sort((a,l)=>a.y+a.height/2-(l.y+l.height/2)),r=[];for(const a of i){const l=a.y+a.height/2,c=r[r.length-1];if(c){const h=c[c.length-1].y+c[c.length-1].height/2;if(Math.abs(h-l)<3){c.push(a);continue}}r.push([a])}const o=[];for(const a of r){const l=[...a].sort((h,u)=>h.x-h.width/2-(u.x-u.width/2)),c=[];for(const h of l){const u=h.x-h.width/2,d=h.x+h.width/2,f=h.y+h.height/2,g=c[c.length-1];g&&u<=g.rightX+.01&&Math.abs(g.topY-f)<3?(g.rightX=Math.max(g.rightX,d),g.topY=Math.max(g.topY,f)):c.push({leftX:u,rightX:d,topY:f})}for(let h=0;h<c.length-1;h+=1){const u=c[h],d=c[h+1];d.leftX-u.rightX<=0||o.push({leftX:u.rightX,rightX:d.leftX,leftPlatTop:u.topY,rightPlatTop:d.topY})}}return o}isGapBridged(t,e){var c;const n=this.config.bridgeTolerance??.05,i=20,r=t.rightX-t.leftX,o=e?[e]:this.shadowObjects,a=!e&&(()=>{const h=window;return h.__gapLogFrame===void 0&&(h.__gapLogFrame=0),h.__gapLogFrame=(h.__gapLogFrame+1)%60,h.__gapLogFrame===0})();a&&console.log(`[gap] leftX=${t.leftX.toFixed(2)} rightX=${t.rightX.toFixed(2)} leftTop=${t.leftPlatTop.toFixed(3)} rightTop=${t.rightPlatTop.toFixed(3)} tol=${n}`);let l=0;for(let h=0;h<i;h+=1){const u=t.leftX+(h+.5)/i*r,d=(u-t.leftX)/r,f=t.leftPlatTop+d*(t.rightPlatTop-t.leftPlatTop);if(this.isXBlockedByWall(u,f))continue;let g=!1;for(const x of o){const m=x.getYRangeAtX(u);if(m===null)continue;if(m.maxY>=f-n&&m.minY<=f+.6){g=!0;break}}if(g)l+=1;else if(a){const x=(c=o[0])==null?void 0:c.getYRangeAtX(u);console.log(`[miss] s${h} x=${u.toFixed(2)} refY=${f.toFixed(2)} range=${x?`[${x.minY.toFixed(2)},${x.maxY.toFixed(2)}]`:"null"}`)}}return a&&console.log(`[result] ${l}/${i}`),l>=i}findPathForFollower(t,e){const n=this.shadowMask.mask,i=this.shadowMask.mapper,r=i.worldToCell(t.x,t.y),o=i.worldToCell(e.x,e.y);if(!r||!o)return this.clipPathByWallBuffer([e.clone()]);const a=Ns(n,this.shadowMask.width,this.shadowMask.height,r,80),l=Ns(n,this.shadowMask.width,this.shadowMask.height,o,80);if(!a||!l)return this.clipPathByWallBuffer([e.clone()]);const c=sa(n,this.shadowMask.width,this.shadowMask.height,a,l);if(!c||c.length===0)return this.clipPathByWallBuffer([e.clone()]);const h=this.platforms.map(x=>({leftX:x.data.x-x.data.width/2,rightX:x.data.x+x.data.width/2,bottomY:x.data.y-x.data.height/2,topY:x.data.y+x.data.height/2})),u=this.getPlatformGaps(),d=u.map(x=>this.isGapBridged(x)),f=x=>{for(const m of this.shadowObjects){const p=m.getYRangeAtX(x);if(p!==null)return p.maxY}return null},g=[];for(let x=1;x<c.length;x+=1){const m=c[x],p=i.cellToWorld(m),M=new Z(p.x,p.y),v=h.filter(L=>M.x>=L.leftX&&M.x<=L.rightX);let _=!1;if(v.length>0){let L=v[0],R=Math.abs(L.topY-M.y);for(let T=1;T<v.length;T+=1){const D=Math.abs(v[T].topY-M.y);D<R&&(L=v[T],R=D)}R<.5&&(M.y=L.topY,_=!0)}if(!_)for(let L=0;L<u.length;L+=1){if(!d[L])continue;const R=u[L];if(M.x>=R.leftX&&M.x<=R.rightX){const T=f(M.x);if(T!==null)M.y=T;else{const D=(M.x-R.leftX)/(R.rightX-R.leftX);M.y=R.leftPlatTop+D*(R.rightPlatTop-R.leftPlatTop)}break}}g.push(M)}return this.clipPathByWallBuffer(g)}isPathBlockedByWall(t,e){if(this.walls.length===0)return null;const n=$e.WALL_SAFE_BUFFER;for(const i of this.walls){if(i.removed)continue;const r=i.x-i.width/2,o=i.x+i.width/2,a=t.x<r,l=t.x>o,c=e.x<r,h=e.x>o;if(!(a&&h||l&&c||t.x>=r&&t.x<=o||e.x>=r&&e.x<=o))continue;const d=g=>g>=i.y-i.height/2&&g<=i.y+i.height/2;if(!d(t.y)&&!d(e.y))continue;return{blocked:!0,stopAtX:t.x<i.x?r-n:o+n}}return null}shortenPathEnd(t,e){if(t.length<=1||e<=0)return t.map(r=>r.clone());let n=e,i=t.length-1;for(;i>0&&n>0;){const r=t[i-1],o=t[i],a=Math.hypot(o.x-r.x,o.y-r.y);if(a>=n){const l=(a-n)/a,c=new Z(r.x+l*(o.x-r.x),r.y+l*(o.y-r.y));return[...t.slice(0,i).map(h=>h.clone()),c]}n-=a,i-=1}return[t[0].clone()]}clipPathByWallBuffer(t){if(this.walls.length===0)return t;const e=$e.WALL_SAFE_BUFFER;return t.map(n=>{let i=n.x;for(const r of this.walls){if(r.removed||n.y<r.y-r.height/2||n.y>r.y+r.height/2)continue;const o=r.x-r.width/2-e,a=r.x+r.width/2+e;if(i>o&&i<a){const l=i-o,c=a-i;i=l<c?o:a}}return new Z(i,n.y)})}getBfsWallRects(){return this.walls.filter(t=>!t.removed).map(t=>({x:t.x,y:t.y,width:t.width+$e.BFS_WALL_PADDING_X,height:t.height}))}isXBlockedByWall(t,e){for(const n of this.walls)if(!n.removed&&!(t<n.x-n.width/2||t>n.x+n.width/2)&&!(e<n.y-n.height/2||e>n.y+n.height/2))return!0;return!1}isObjectConnected(t){return this.getPlatformGaps().some(n=>this.isGapBridged(n,t))}checkBridgeConnected(){const t=this.getPlatformGaps(),e=t.map(o=>this.isGapBridged(o)),n=.05,i=t.filter((o,a)=>e[a]).map(o=>({xMin:o.leftX,xMax:o.rightX,yMin:Math.min(o.leftPlatTop,o.rightPlatTop)-n,yMax:Math.max(o.leftPlatTop,o.rightPlatTop)+n})),r=i.length>0;this.setBridgeHighlight(r,i)}get isBridgeConnected(){return this.bridgeConnected}getDebugInfo(){const t=this.selectedObject,e=this.sceneManager.camera,n=this.config.shadowDirection??{y:.3,z:-20},i={camera:`y=${e.position.y.toFixed(2)} z=${e.position.z.toFixed(2)}`,"light cfg y":`${n.y.toFixed(3)} (z=${n.z})`,"light dir":`(${this.shadowDirection.x.toFixed(3)}, ${this.shadowDirection.y.toFixed(3)}, ${this.shadowDirection.z.toFixed(3)})`,bridge:this.bridgeConnected?"CONNECTED":"disconnected",walker:`(${this.walker.position.x.toFixed(2)}, ${this.walker.position.y.toFixed(2)})`,state:this.completed?"COMPLETE":this.paused?"PAUSED":"PLAYING"};if(t){const p=t.group.position;i["object y"]=`${p.y.toFixed(3)} (z=${p.z.toFixed(1)})`,i["object rot"]=`(${t.group.rotation.x.toFixed(2)}, ${t.group.rotation.y.toFixed(2)})`,i["rail T"]=t.normalizedT.toFixed(3);const M=this.shadowDirection.y/this.shadowDirection.z,v=p.y+M*(this.sceneManager.wallBounds.z-p.z);i["shadow Y"]=`${v.toFixed(3)}`,i["proj Y"]=`${t.lastProjMinY.toFixed(3)} ~ ${t.lastProjMaxY.toFixed(3)}`}const r=this.config.platforms[0].y+this.config.platforms[0].height/2;if(i["platform top"]=r.toFixed(3),t){const p=t.group.position,M=this.shadowDirection.y/this.shadowDirection.z,v=p.y+M*(this.sceneManager.wallBounds.z-p.z);i["shadow - plat"]=(v-r).toFixed(3)}const o=this.shadowMask.mask,a=this.shadowMask.width,l=this.shadowMask.height;let c=l,h=0,u=l,d=0;const f=this.shadowMask.getPlatformMask(),g=this.shadowMask.getShadowMask();for(let p=0;p<l;p+=1)for(let M=0;M<a;M+=1)f[p*a+M]===1&&(u=Math.min(u,p),d=Math.max(d,p)),g[p*a+M]===1&&(c=Math.min(c,p),h=Math.max(h,p));let x=l,m=0;for(let p=0;p<l;p+=1)for(let M=0;M<a;M+=1)o[p*a+M]===1&&f[p*a+M]===0&&(x=Math.min(x,p),m=Math.max(m,p));return i["plat rows"]=`${u}-${d}`,i["shadow(raw)"]=`${c}-${h}`,i["shadow(walk)"]=`${x}-${m}`,i.gap=c>d?`${c-d} rows gap`:h<u?`${u-h} rows gap`:"OVERLAP",i.expand=this.shadowMask.lastExpandInfo,i.walkable=`${Array.from(o).filter(p=>p===1).length} cells`,i}commitHiddenPlatforms(){this.hiddenPlatformsCommitted=!0;for(const t of this.hiddenPlatforms)this.platforms.push(t);this.shadowMask.buildPlatformMask(this.platforms),this.shadowMask.captureMask(),this.checkBridgeConnected()}startHiddenGroupTransition(t,e){if(e){if(t.committed)return;t.direction="show";for(const n of t.platforms)n.mesh.visible=!0,(!Number.isFinite(n.mesh.scale.x)||n.mesh.scale.x===0)&&(n.mesh.scale.x=0,n.mesh.position.x=n.data.x-n.data.width/2)}else{if(t.committed){t.committed=!1;for(const n of t.platforms){const i=this.platforms.indexOf(n);i>=0&&this.platforms.splice(i,1)}this.shadowMask.buildPlatformMask(this.platforms),this.shadowMask.captureMask(),this.checkBridgeConnected(),t.progress=t.platforms.length+1}else t.progress>0;t.direction="hide"}}mergeParty(){var a,l;if(this.partyMerged)return;this.partyMerged=!0,(a=this.companion)==null||a.stopAutoBehavior();for(const c of this.extraGroups)(l=c.companion)==null||l.stopAutoBehavior();for(const c of this.extraGroups)c.walker.setPath([]);const t=this.config.partyOrder??["extra-walker-0","main-walker","extra-companion-0","main-companion"],e=c=>{var d,f;if(c==="main-walker")return this.walker;if(c==="main-companion")return this.companion;const h=c.match(/^extra-walker-(\d+)$/);if(h)return((d=this.extraGroups[parseInt(h[1],10)])==null?void 0:d.walker)??null;const u=c.match(/^extra-companion-(\d+)$/);return u?((f=this.extraGroups[parseInt(u[1],10)])==null?void 0:f.companion)??null:null},n=t.indexOf("main-walker");if(n<0){console.warn("[mergeParty] partyOrder 不含 main-walker，无法合并");return}const i=1;this.partyOffsets=[];for(let c=0;c<t.length;c+=1){if(c===n)continue;const h=e(t[c]);if(!h)continue;const u=(c-n)*i;this.partyOffsets.push({getWalker:()=>h,offset:u})}const r=this.config.gate.x,o=[this.walker];this.companion&&o.push(this.companion.walker);for(const c of this.extraGroups)o.push(c.walker),c.companion&&o.push(c.companion.walker);for(const c of o){const h=Math.sign(r-c.position.x);h!==0&&c.setFacing(h)}}updatePartyFollowing(){}autoMoveAllWalkersToGate(){var l,c,h;const t=new Z(this.config.gate.x,this.config.gate.y),e=this.platforms.map(u=>({leftX:u.data.x-u.data.width/2,rightX:u.data.x+u.data.width/2,topY:u.data.y+u.data.height/2})),n=this.getPlatformGaps(),i=n.map(u=>this.isGapBridged(u)),r=u=>{for(const d of this.shadowObjects){const f=d.getYRangeAtX(u);if(f!==null)return f.maxY}return null},o=u=>{const d=this.shadowMask.mapper.worldToCell(u.position.x,u.position.y),f=this.shadowMask.mapper.worldToCell(t.x,t.y);if(!d||!f)return null;const g=Ns(this.shadowMask.mask,this.shadowMask.width,this.shadowMask.height,f,80);if(!g)return null;const x=sa(this.shadowMask.mask,this.shadowMask.width,this.shadowMask.height,d,g);if(!x)return null;const m=x.map(v=>{const _=this.shadowMask.mapper.cellToWorld(v),L=new Z(_.x,_.y);for(const R of e)if(L.x>=R.leftX&&L.x<=R.rightX)return L.y=R.topY,L;for(let R=0;R<n.length;R+=1){if(!i[R])continue;const T=n[R];if(L.x>T.leftX&&L.x<T.rightX){const D=r(L.x);return D!==null&&(L.y=D),L}}return L}),p=.05,M=[];for(let v=0;v<m.length;v+=1){const _=m[v];if(M.push(_),v<m.length-1){const L=m[v+1],R=Math.min(_.x,L.x),T=Math.max(_.x,L.x),D=L.x>=_.x,b=[];for(let w=0;w<n.length;w+=1){if(!i[w])continue;const I=n[w],W=Math.max(R,I.leftX),B=Math.min(T,I.rightX);if(W<B){let V=W+p/2;for(;V<B;){const G=r(V);G!==null&&b.push(new Z(V,G)),V+=p}}}b.sort((w,I)=>D?w.x-I.x:I.x-w.x),M.push(...b)}}return M},a=[this.walker];this.companion&&a.push(this.companion.walker);for(const u of this.extraGroups)a.push(u.walker),u.companion&&a.push(u.companion.walker);if(this.partyMerged){(l=this.companion)==null||l.stopAutoBehavior();for(const u of this.extraGroups)(c=u.companion)==null||c.stopAutoBehavior()}for(const u of a){const d=o(u);d&&u.setPath(d,()=>{this.gate.isReached(u.position)&&!this.completed&&this.tryCompleteLevel()})}(h=this.onWalkerStartMove)==null||h.call(this)}setBridgeHighlight(t,e=[]){var i;const n=this.bridgeConnected;if(this.bridgeConnected=t,t){if(this.shadowMask.clearBridgeGap(),this.shadowMask.fillBridgeGap(e),this.walkerMoveLocked=!1,!n){_n.play("connected",2);for(const r of this.shadowObjects)r.hideOutline();(i=this.onBridgeConnected)==null||i.call(this),this.config.autoFinishOnBridge&&this.triggerAutoFinish()}}else this.shadowMask.clearBridgeGap();for(const r of this.shadowObjects)r.setShadowConnected(t&&this.isObjectConnected(r))}tryCompleteLevel(){this.completed||this.config.requireAllWalkersAtGate&&!this.allWalkers.every(e=>this.gate.isReached(e.position))||this.completeLevel()}completeLevel(){var t,e;this.completed||(this.completed=!0,(t=this.onLevelComplete)==null||t.call(this),(e=this.onComplete)==null||e.call(this))}};A($e,"MERGE_THRESHOLD",1),A($e,"BFS_WALL_PADDING_X",.4),A($e,"WALL_SAFE_BUFFER",.6);let el=$e;class gv{constructor(t,e,n){A(this,"currentIndex",0);A(this,"currentLevel");A(this,"nextLevel",null);A(this,"transitionState","idle");A(this,"transitionTimer",0);A(this,"overlayFader",null);A(this,"deferredTransition",!1);A(this,"onLevelCreated");A(this,"onLevelActivated");A(this,"SETTLE_DELAY",.2);A(this,"FADE_DURATION",.5);A(this,"SLIDE_DURATION",1.2);A(this,"SLIDE_DISTANCE",20);if(this.sceneManager=t,this.hud=e,this.chapter=n,n.levels.length===0)throw new Error("ChapterManager 至少需要一个关卡");this.currentLevel=this.createLevel(this.currentIndex)}get activeLevel(){return this.currentLevel}get isTransitioning(){return this.transitionState!=="idle"}get levelCount(){return this.chapter.levels.length}get currentLevelIndex(){return this.currentIndex}getLevelName(t){var e;return((e=this.chapter.levels[t])==null?void 0:e.name)??`Level ${t}`}jumpToLevel(t){var e,n,i;t<0||t>=this.chapter.levels.length||this.transitionState!=="idle"||(this.currentLevel.dispose(),(e=this.nextLevel)==null||e.dispose(),this.nextLevel=null,this.currentIndex=t,this.currentLevel=this.createLevel(t),this.transitionState="idle",this.transitionTimer=0,this.hud.hideComplete(),this.hud.setPaused(!1),(n=this.overlayFader)==null||n.fadeIn(.3),(i=this.onLevelActivated)==null||i.call(this,this.currentIndex))}setOverlayFader(t){this.overlayFader=t}update(t){if(this.currentLevel.update(t),!!this.nextLevel){if(this.transitionState==="settling"){this.transitionTimer+=t,this.transitionTimer>=this.SETTLE_DELAY&&(this.transitionState="sliding",this.transitionTimer=0);return}if(this.transitionState==="sliding"){this.transitionTimer+=t;const e=Math.min(1,this.transitionTimer/this.SLIDE_DURATION);this.currentLevel.rootGroup.position.x=-this.SLIDE_DISTANCE*e,this.nextLevel.rootGroup.position.x=this.SLIDE_DISTANCE*(1-e),e>=1&&this.finishTransition()}}}createLevel(t){var n;const e=new el(this.sceneManager,this.hud,this.chapter.levels[t],()=>this.handleLevelComplete());return(n=this.onLevelCreated)==null||n.call(this,e),e}handleLevelComplete(){var t;if(this.deferredTransition){this.deferredTransition=!1,this.currentLevel.setSelectedObject(null),this.nextLevel=this.createLevel(this.currentIndex+1),this.nextLevel.rootGroup.position.x=this.SLIDE_DISTANCE,this.nextLevel.setVisible(!1),this.transitionState="idle",this.transitionTimer=0;return}if(this.currentLevel.setVisible(!1),this.currentIndex>=this.chapter.levels.length-1){this.hud.showComplete();return}this.currentLevel.setSelectedObject(null),this.nextLevel=this.createLevel(this.currentIndex+1),this.nextLevel.rootGroup.position.x=this.SLIDE_DISTANCE,this.nextLevel.setVisible(!1),this.transitionState="settling",this.transitionTimer=0,this.sceneManager.setClipping(!0),(t=this.overlayFader)==null||t.fadeOut(this.FADE_DURATION)}deferTransitionToNextLevel(){this.deferredTransition=!0}completeDeferredTransition(){var n;const t=this.nextLevel;if(!t)return;this.currentLevel.dispose(),t.rootGroup.position.x=0,t.setVisible(!0),t.finalizeAdjustment(),this.currentIndex+=1,this.currentLevel=t,this.nextLevel=null,this.transitionState="idle",this.transitionTimer=0,(n=this.onLevelActivated)==null||n.call(this,this.currentIndex)}finishTransition(){var n,i;const t=this.currentLevel,e=this.nextLevel;e&&(t.dispose(),e.rootGroup.position.x=0,e.setVisible(!0),e.finalizeAdjustment(),this.sceneManager.setClipping(!1),this.currentIndex+=1,this.currentLevel=e,this.nextLevel=null,this.transitionState="idle",this.transitionTimer=0,(n=this.onLevelActivated)==null||n.call(this,this.currentIndex),(i=this.overlayFader)==null||i.fadeIn(this.FADE_DURATION))}}const xv={name:"章节 1 - 关卡 2",platforms:[{id:"left-platform",x:-4.65,y:10.25,width:6.1,height:.35},{id:"right-platform",x:4.65,y:10.25,width:6.1,height:.35}],gate:{x:6.35,y:9.95,textureUrl:X("/textures/gate_new.webp"),displayHeight:2.6},walkerStart:{x:-6.45,y:10.425},objects:[{id:"bottle",railMinX:-1.5,railMaxX:1.5,railY:6.3,railZ:16,initialT:.47,initialRotationX:0,initialRotationY:0,initialRotationZ:.6108,initialYOffset:1.36,wrapperExtraRotation:{y:Math.PI/2,z:-Math.PI/2},moveLimit:{up:8,down:8,left:5,right:5},modelUrl:X("/models/1_2.glb"),modelScale:.59,projectionScale:1.97,useGlbProjection:!0}],shadowDirection:{x:0,y:2.9,z:-20},lockWalkerUntilBridge:!0,tutorialRotateSteps:4,hintArea:{x:0,y:10.35,width:3.25,height:1.05},hintText:"旋转奶瓶，让影子跨过那道空隙",hintTextEn:"Turn the bottle, and let its shadow bridge the gap",walkerSheet:{url:X("/textures/baby_sheet.webp"),frameCount:4,frameW:256,frameH:192,height:1.067,yOffset:.015,indicatorXOffset:.4}},_v={name:"章节 2 - 关卡 1",platforms:[{id:"left-platform",x:-5.2,y:7.25,width:5,height:.35},{id:"right-platform",x:5.2,y:9.25,width:5,height:.35}],gate:{x:6.35,y:8.95,textureUrl:X("/textures/gate_new.webp"),displayHeight:3.12},walkerStart:{x:-6.45,y:7.425},objects:[{id:"bear",railMinX:-3,railMaxX:3,railY:6.3,railZ:16,initialT:.59,initialRotationX:0,initialRotationY:0,initialRotationZ:0,initialYOffset:.76,wrapperExtraRotation:{y:Math.PI/2,z:-Math.PI/2},moveLimit:{up:9,down:8,left:5,right:5},modelUrl:X("/models/bear.glb"),modelScale:.83,projectionScale:3.6,useGlbProjection:!0}],shadowDirection:{x:0,y:.65,z:-20},bridgeTolerance:.1,noGuide:!0,hintArea:{x:0,y:10.35,width:3.25,height:1.05},hintText:"换个角度，影子会找到路",hintTextEn:"Try another angle. The shadow will find a way.",persistentHint:!0,walkerSheet:{url:X("/textures/boy_sheet.webp"),frameCount:5,frameW:800,frameH:1600,height:1.8,yOffset:0}},vv={name:"章节 3 - 关卡 1",platforms:[{id:"left-platform",x:-6.5,y:8.25,width:2,height:.35},{id:"middle-platform",x:-.5,y:10.25,width:3,height:.35},{id:"right-platform",x:5.9,y:10.25,width:3.2,height:.35}],gate:{x:6.5,y:9.95,textureUrl:X("/textures/gate_new.webp"),displayHeight:3.12},walkerStart:{x:-6.95,y:8.425},objects:[{id:"suitcase",railMinX:-5,railMaxX:5,railY:6.3,railZ:16,initialT:.386,initialRotationX:0,initialRotationY:0,initialRotationZ:6.2832,initialYOffset:.46,wrapperExtraRotation:{y:Math.PI/2,z:-Math.PI/2},moveLimit:{up:18,down:8,left:2,right:10},modelUrl:X("/models/suitcase.glb"),modelScale:.49,projectionScale:2.04,useGlbProjection:!0,shadowXScale:3,shadowYScale:2}],shadowDirection:{x:0,y:-.65,z:-20},bridgeTolerance:.2,noGuide:!0,multiBridge:!0,transitHintText:"再次移动行李箱，铺出下一段路",transitHintTextEn:"Move the suitcase again to make the next path",hintArea:{x:0,y:10.35,width:3.25,height:1.05},hintText:"路还很长，先让影子抵达下一站",hintTextEn:"The road is long. Let the shadow reach the next stop first.",walkerSheet:{url:X("/textures/young_sheet.webp"),frameCount:2,frameW:1200,frameH:2e3,height:2.3,yOffset:0}},yv={name:"章节 3 - 关卡 2",platforms:[{id:"left-platform",x:-6.5,y:10.35,width:2.5,height:.35},{id:"middle-platform",x:-.5,y:9.7,width:2.5,height:.35},{id:"right-platform",x:6.5,y:8.25,width:2.5,height:.35}],gate:{x:6.5,y:7.95,textureUrl:X("/textures/gate_new.webp"),displayHeight:3.12},walkerStart:{x:-6.95,y:10.525},companion:{start:{x:-.5,y:9.875},sheet:{url:X("/textures/dog_sheet.webp"),frameCount:2,frameW:1600,frameH:1200,height:.9,yOffset:0},wanderRange:{minX:-1.5,maxX:.5},followDistance:.55,followSpeed:2},objects:[{id:"train",railMinX:-5,railMaxX:5,railY:6.3,railZ:16,initialT:.384,initialRotationX:0,initialRotationY:0,initialRotationZ:0,initialYOffset:.68,wrapperExtraRotation:{y:Math.PI/2,z:-Math.PI/2},moveLimit:{up:15,down:8,left:2,right:10},modelUrl:X("/models/train.glb"),modelScale:.41,projectionScale:1.5,useGlbProjection:!0,shadowXScale:3,shadowYScale:2}],shadowDirection:{x:0,y:-.55,z:-20},bridgeTolerance:.2,noGuide:!0,multiBridge:!0,hintArea:{x:0,y:10.35,width:3.25,height:1.05},hintText:"前行的路上，总有伙伴与你相随",hintTextEn:"On the road ahead, a faithful companion walks beside you",transitHintText:"继续铺路，带着伙伴一起向前",transitHintTextEn:"Keep making the path, and bring your companion with you",walkerSheet:{url:X("/textures/young_sheet.webp"),frameCount:2,frameW:1200,frameH:2e3,height:2.3,yOffset:0}},Mv={name:"章节 4 - 关卡 1",platforms:[{id:"left-platform",x:-6.25,y:7.25,width:3,height:.35},{id:"middle-platform",x:1,y:6.75,width:4,height:.35},{id:"right-platform",x:6.5,y:12.25,width:2.5,height:.35}],hiddenPlatforms:[{id:"hidden-1",x:3.09375,y:7.27,width:.1875,height:.74},{id:"hidden-2",x:3.28125,y:7.71,width:.1875,height:.74},{id:"hidden-3",x:3.46875,y:8.15,width:.1875,height:.74},{id:"hidden-4",x:3.65625,y:8.59,width:.1875,height:.74},{id:"hidden-5",x:3.84375,y:9.03,width:.1875,height:.74},{id:"hidden-6",x:4.03125,y:9.47,width:.1875,height:.74},{id:"hidden-7",x:4.21875,y:9.91,width:.1875,height:.74},{id:"hidden-8",x:4.40625,y:10.35,width:.1875,height:.74},{id:"hidden-9",x:4.59375,y:10.79,width:.1875,height:.74},{id:"hidden-10",x:4.78125,y:11.23,width:.1875,height:.74},{id:"hidden-11",x:4.96875,y:11.67,width:.1875,height:.74},{id:"hidden-12",x:5.15625,y:12.05,width:.1875,height:.74}],hiddenPlatformRevealDuration:.8,button:{x:1,y:6.93,triggerRadius:.6,visualRadius:.22},gate:{x:6.5,y:11.95,textureUrl:X("/textures/gate_new.webp"),displayHeight:3.12},walkerStart:{x:-6.95,y:7.425},companion:{start:{x:-6,y:7.425},sheet:{url:X("/textures/dog_sheet.webp"),frameCount:2,frameW:1600,frameH:1200,height:.9,yOffset:0},followDistance:.55,followSpeed:2.5,startInFollow:!0,initialFacing:"right"},objects:[{id:"magnifier",railMinX:-4,railMaxX:3,railY:6.3,railZ:16,initialT:.4314,initialRotationX:0,initialRotationY:-.5,initialRotationZ:0,initialYOffset:.3,wrapperExtraRotation:{y:Math.PI/2,z:-Math.PI/2},moveLimit:{up:12,down:8,left:4,right:4},modelUrl:X("/models/glass.glb"),modelScale:.2,projectionScale:.72,useGlbProjection:!0,shadowXScale:3,shadowYScale:2}],shadowDirection:{x:0,y:-1.35,z:-20},bridgeTolerance:.15,noGuide:!0,multiBridge:!0,hintArea:{x:0,y:7.35,width:3.25,height:1.05},hintText:"看似遥远，也会有微光在路上等你",hintTextEn:"It may seem far away, but a soft light waits along the way",transitHintText:"",transitHintTextEn:"",persistentHint:!0,walkerSheet:{url:X("/textures/young_sheet.webp"),frameCount:2,frameW:1200,frameH:2e3,height:2.3,yOffset:0}},wv={name:"章节 4 - 关卡 2",platforms:[{id:"left-platform",x:-6.5,y:10.95,width:2.5,height:.35},{id:"middle-platform",x:0,y:9.75,width:5,height:.35},{id:"right-platform",x:6.5,y:7.25,width:2.5,height:.35}],gate:{x:0,y:9.45,textureUrl:X("/textures/gate_new.webp"),displayHeight:3.12},gateInitialHidden:!0,buttons:[{x:-2,y:9.93,triggerHalfWidth:1.2,triggerHalfHeight:.5,visualRadius:.2,mode:"continuous"},{x:2,y:9.93,triggerHalfWidth:1.2,triggerHalfHeight:.5,visualRadius:.2,mode:"continuous"}],walkerStart:{x:-6.5,y:11.125},walkerSheet:{url:X("/textures/young_sheet.webp"),frameCount:2,frameW:1200,frameH:2e3,height:2.3,yOffset:0},companion:{start:{x:-6,y:11.125},sheet:{url:X("/textures/dog_sheet.webp"),frameCount:2,frameW:1600,frameH:1200,height:.9,yOffset:0},followDistance:.55,followSpeed:2.5,startInFollow:!0,initialFacing:"right"},extraCharacterGroups:[{start:{x:6.5,y:7.425},sheet:{url:X("/textures/wife_sheet.webp"),frameCount:2,frameW:1200,frameH:2100,height:2.3,yOffset:0},initialFacing:"left",companion:{start:{x:6,y:7.425},sheet:{url:X("/textures/cat_sheet.webp"),frameCount:2,frameW:2e3,frameH:1400,height:.9,yOffset:0},followDistance:.55,followSpeed:2.5,startInFollow:!0,initialFacing:"left"}}],objects:[{id:"telescope",railMinX:-5,railMaxX:-2,railY:6.3,railZ:8,initialT:.48,initialRotationX:0,initialRotationY:1.9199,initialRotationZ:.5236,initialYOffset:1.82,wrapperExtraRotation:{y:Math.PI/2,z:-Math.PI/2},moveLimit:{up:22,down:8,left:4,right:4},modelUrl:X("/models/telescope.glb"),modelScale:.87,projectionScale:1.5,useGlbProjection:!0,shadowXScale:3,shadowYScale:2,disableMove:!0},{id:"balloon",railMinX:2,railMaxX:5,railY:6.3,railZ:4,initialT:.6,initialRotationX:0,initialRotationY:0,initialRotationZ:.41,initialYOffset:.28,wrapperExtraRotation:{y:Math.PI/2,z:-Math.PI/2},moveLimit:{up:12,down:8,left:4,right:4},modelUrl:X("/models/balloon.glb"),modelScale:1.82,projectionScale:3.66,useGlbProjection:!0,shadowXScale:3,shadowYScale:2,disableRotate:!0}],shadowDirection:{x:0,y:-.05,z:-20},bridgeTolerance:.2,noGuide:!0,multiBridge:!0,autoSelectByAction:!0,walkerSpeed:7.5,extraWalkerSpeed:7.5,hintArea:{x:0,y:9.85,width:3.25,height:1.05},hintText:"切换角色，让两处机关同时亮起",hintTextEn:"Switch characters, and light both buttons together",transitHintText:"",transitHintTextEn:"",persistentHint:!0},Sv={name:"章节 5 - 关卡 1",platforms:[{id:"left-bottom",x:-3.5,y:7.25,width:8,height:.35},{id:"left-top",x:-6.5,y:10.25,width:2,height:.35},{id:"right-platform",x:6.5,y:8.75,width:2.5,height:.35}],hiddenPlatforms:[{id:"ramp-1",x:-6.5,y:7.95,width:.8,height:1.4},{id:"ramp-2",x:-6.5,y:8.85,width:.8,height:1.4},{id:"ramp-3",x:-6.5,y:9.75,width:.8,height:1.4}],hiddenPlatformRevealDuration:.3,hiddenPlatformButtonIndex:0,walls:[{x:2,y:7.15,width:6,height:10.7}],wallRemoveButtonIndex:1,buttons:[{x:-2,y:7.43,triggerHalfWidth:1.5,triggerHalfHeight:.5,visualRadius:.2,mode:"continuous"},{x:-6.5,y:10.43,triggerHalfWidth:.8,triggerHalfHeight:.5,visualRadius:.2,mode:"once"}],gate:{x:6.5,y:8.5,textureUrl:X("/textures/gate_new.webp"),displayHeight:4.125},walkerStart:{x:-6,y:7.425},walkerSheet:{url:X("/textures/adult_sheet.webp"),frameCount:2,frameW:1100,frameH:2e3,height:2.3,yOffset:0},companion:{start:{x:-5.5,y:7.425},sheet:{url:X("/textures/dog_sheet.webp"),frameCount:2,frameW:1600,frameH:1200,height:.9,yOffset:0},followDistance:.55,followSpeed:2.5,startInFollow:!0,initialFacing:"right"},extraCharacterGroups:[{start:{x:-5.2,y:7.425},sheet:{url:X("/textures/wife_sheet.webp"),frameCount:2,frameW:1200,frameH:2100,height:2.3,yOffset:0},initialFacing:"right",companion:{start:{x:-4.7,y:7.425},sheet:{url:X("/textures/cat_sheet.webp"),frameCount:2,frameW:2e3,frameH:1400,height:.9,yOffset:0},followDistance:.55,followSpeed:2.5,startInFollow:!0,initialFacing:"right"}}],objects:[{id:"cake",railMinX:-1,railMaxX:4,railY:6.3,railZ:8,initialT:.51,initialRotationX:.27,initialRotationY:0,initialRotationZ:.8727,initialYOffset:.08,wrapperExtraRotation:{y:Math.PI/2,z:-Math.PI/2},moveLimit:{up:12,down:8,left:6,right:6},modelUrl:X("/models/cake.glb"),modelScale:1.75,projectionScale:3.72,useGlbProjection:!0,shadowXScale:3,shadowYScale:2}],shadowDirection:{x:0,y:1.35,z:-20},bridgeTolerance:.2,bridgeIgnorePlatformIds:["left-top","ramp-1","ramp-2","ramp-3"],noGuide:!0,multiBridge:!0,requireAllWalkersAtGate:!0,allowPartyMerge:!0,partyOrder:["extra-walker-0","main-walker","extra-companion-0","main-companion"],partyMergePlatformY:7.425,partyMergeChase:!0,partyMergeBidirectional:!0,hintArea:{x:0,y:7.35,width:3.25,height:1.05},hintText:"每个人都是光的一部分，少了谁，这条路都不完整",hintTextEn:"Each of us carries a part of the light. Without one, the path is incomplete.",transitHintText:"",transitHintTextEn:"",persistentHint:!0},bv={name:"章节 5 - 关卡 2",platforms:[{id:"bottom",x:0,y:6.25,width:16,height:.35},{id:"left-top",x:-6.5,y:10.25,width:3,height:.35},{id:"middle-top",x:0,y:10.25,width:3,height:.35},{id:"right-top",x:6.5,y:10.25,width:3,height:.35}],walls:[{x:-3,y:6.5,width:3.5,height:4}],gate:{x:6.5,y:5.825,textureUrl:X("/textures/gate_new.webp"),displayHeight:4.125},buttons:[{x:.2,y:7,triggerHalfWidth:1,triggerHalfHeight:.6,visualRadius:.18,mode:"toggle",initialToggleState:"A",imageA:X("/ui/righton.webp"),imageB:X("/ui/lefton.webp"),imageWidth:2.8,imageHeight:1.2},{x:6.5,y:10.6,triggerHalfWidth:1.2,triggerHalfHeight:.5,visualRadius:.2,mode:"once"},{x:0,y:10.6,triggerHalfWidth:1.2,triggerHalfHeight:.5,visualRadius:.2,mode:"once"}],revealObjectsButtonIndex:1,wallRemoveButtonIndex:2,hiddenPlatformGroups:[{platforms:[{id:"p1-step-1",x:2.5,y:6.725,width:.9,height:.6},{id:"p1-step-2",x:2.77,y:7.106,width:.9,height:.6},{id:"p1-step-3",x:3.05,y:7.488,width:.9,height:.6},{id:"p1-step-4",x:3.32,y:7.869,width:.9,height:.6},{id:"p1-step-5",x:3.6,y:8.25,width:.9,height:.6},{id:"p1-step-6",x:3.87,y:8.631,width:.9,height:.6},{id:"p1-step-7",x:4.15,y:9.013,width:.9,height:.6},{id:"p1-step-8",x:4.42,y:9.394,width:.9,height:.6},{id:"p1-step-9",x:4.7,y:9.775,width:.9,height:.6}],triggerLeverIndex:0,triggerLeverState:"A",initiallyRevealed:!0,revealDuration:.4},{platforms:[{id:"p2-step-1",x:-6.5,y:6.725,width:.6,height:.6},{id:"p2-step-2",x:-6.5,y:7.106,width:.6,height:.6},{id:"p2-step-3",x:-6.5,y:7.488,width:.6,height:.6},{id:"p2-step-4",x:-6.5,y:7.869,width:.6,height:.6},{id:"p2-step-5",x:-6.5,y:8.25,width:.6,height:.6},{id:"p2-step-6",x:-6.5,y:8.631,width:.6,height:.6},{id:"p2-step-7",x:-6.5,y:9.013,width:.6,height:.6},{id:"p2-step-8",x:-6.5,y:9.394,width:.6,height:.6},{id:"p2-step-9",x:-6.5,y:9.775,width:.6,height:.6}],triggerLeverIndex:0,triggerLeverState:"B",initiallyRevealed:!1,revealDuration:.4}],walkerStart:{x:-6,y:10.425},walkerSheet:{url:X("/textures/wife_sheet.webp"),frameCount:2,frameW:1200,frameH:2100,height:2.3,yOffset:0},companion:{start:{x:-7,y:10.425},sheet:{url:X("/textures/young_sheet.webp"),frameCount:2,frameW:1200,frameH:2e3,height:2.3,yOffset:0},followDistance:.8,followSpeed:4.2,startInFollow:!0,initialFacing:"right"},extraCharacterGroups:[{start:{x:5.5,y:6.425},sheet:{url:X("/textures/cat_sheet.webp"),frameCount:2,frameW:2e3,frameH:1400,height:.9,yOffset:0,indicatorXOffset:-.4},initialFacing:"left",companion:{start:{x:4.5,y:6.425},sheet:{url:X("/textures/dog_sheet.webp"),frameCount:2,frameW:1600,frameH:1200,height:.9,yOffset:0},followDistance:.7,followSpeed:4.2,startInFollow:!0,initialFacing:"left"}}],extraGroupsFacePartyMain:!0,objects:[{id:"hourglass",railMinX:-4.5,railMaxX:-2,railY:10.425,railZ:1,initialT:.5,initialRotationX:0,initialRotationY:0,initialRotationZ:0,initialYOffset:-.3,wrapperExtraRotation:{y:Math.PI/2,z:-Math.PI/2},moveLimit:{up:10,down:6,left:4,right:4},modelUrl:X("/models/plant.glb"),modelScale:1.8,projectionScale:2.96,useGlbProjection:!0,shadowXScale:3,shadowYScale:2,initiallyHidden:!0}],shadowDirection:{x:0,y:3,z:-20},bridgeTolerance:.2,bridgeIgnorePlatformIds:["p2-step-1","p2-step-2","p2-step-3","p2-step-4","p2-step-5","p2-step-6","p2-step-7","p2-step-8","p2-step-9"],noGuide:!0,multiBridge:!0,requireAllWalkersAtGate:!0,allowPartyMerge:!0,partyMergeCondition:"bridge-connected-same-platform",partyMergePlatformY:6.425,partyMergeChase:!0,partyOrder:["main-walker","main-companion","extra-walker-0","extra-companion-0"],hintArea:{x:0,y:11.5,width:4,height:1},hintText:"前路未知，但心里有光，就不会真正迷路",hintTextEn:"The road ahead is unknown. But with light within, you are never truly lost.",persistentHint:!0},Tv={name:"章节 6 - 关卡 1",platforms:[{id:"left",x:-5.95,y:6.25,width:4.1,height:.35},{id:"right",x:3.45,y:6.25,width:9.1,height:.35}],gate:{x:6.25,y:6,textureUrl:X("/textures/gate_new.webp"),displayHeight:3.5},walkerStart:{x:-6.5,y:6.425},walkerSheet:{url:X("/textures/wife_sheet.webp"),frameCount:2,frameW:1200,frameH:2100,height:2.3,yOffset:0},companion:{start:{x:-7.3,y:6.425},sheet:{url:X("/textures/young_sheet.webp"),frameCount:2,frameW:1200,frameH:2e3,height:2.3,yOffset:0},followDistance:.8,followSpeed:1.8,startInFollow:!0,initialFacing:"right"},extraCharacterGroups:[{start:{x:-5.7,y:6.425},sheet:{url:X("/textures/dog_sheet.webp"),frameCount:2,frameW:1600,frameH:1200,height:.9,yOffset:0},initialFacing:"right",companion:{start:{x:-4.8,y:6.425},sheet:{url:X("/textures/cat_sheet.webp"),frameCount:2,frameW:2e3,frameH:1400,height:.9,yOffset:0,indicatorXOffset:-.4},followDistance:.7,followSpeed:1.2,startInFollow:!0,initialFacing:"right"}}],objects:[{id:"watch",railMinX:-3.5,railMaxX:-1.5,railY:6,railZ:1,initialT:.47,initialRotationX:0,initialRotationY:2.2689,initialRotationZ:0,initialYOffset:-.36,wrapperExtraRotation:{y:Math.PI/2,z:-Math.PI/2},moveLimit:{up:10,down:6,left:4,right:4},modelUrl:X("/models/watch.glb"),modelScale:1.9,projectionScale:2.97,useGlbProjection:!0,shadowXScale:3,shadowYScale:2}],shadowDirection:{x:0,y:-3.05,z:-20},bridgeTolerance:.2,noGuide:!0,multiBridge:!0,hintArea:{x:0,y:9.5,width:4,height:1},hintText:"让影子，轻轻填上时光的缝隙",hintTextEn:"Let the shadow gently fill the cracks of time",persistentHint:!0,walkerSpeed:2,extraWalkerSpeed:1.2,allowPartyMerge:!0,partyMergedFromStart:!0,partyOrder:["main-walker","main-companion","extra-walker-0","extra-companion-0"],requireAllWalkersAtGate:!0,autoFinishOnBridge:!0},wu={name:"章节 1 - 关卡 1",platforms:[{id:"left-platform",x:-4.65,y:10.25,width:6.1,height:.35},{id:"right-platform",x:4.65,y:10.25,width:6.1,height:.35}],gate:{x:6.35,y:9.95,textureUrl:X("/textures/gate_new.webp"),displayHeight:2.6},walkerStart:{x:-6.45,y:10.425},objects:[{id:"tutorial-block",railMinX:-3,railMaxX:3,railY:6.3,railZ:16,initialT:.5,initialRotationX:-2.85,initialRotationY:1.6,initialRotationZ:-.06,initialYOffset:.75,wrapperExtraRotation:{y:Math.PI/2,z:-Math.PI/2},moveLimit:{up:8,down:8,left:0,right:0},modelUrl:X("/models/1_1_trapezoid.glb"),modelScale:.65,projectionScale:2.49,useGlbProjection:!0,shadowYScale:5}],shadowDirection:{x:0,y:-2.25,z:-20},hideRotationPanel:!0,tutorialUpSteps:2,lockWalkerUntilBridge:!0,bridgeHintText:"光路已铺就，点选人物前行",bridgeHintTextEn:"The light-path is set. Click a character to walk",walkerSelectedHintText:"点选门扉，引导角色前往终点",walkerSelectedHintTextEn:"Click the gate — guide them to the end",hintArea:{x:0,y:10.35,width:3.25,height:1.05},hintText:"向上移动积木，让影子铺出第一道光路",hintTextEn:"Lift the block upward, and let its shadow form the first path of light",walkerSheet:{url:X("/textures/baby_sheet.webp"),frameCount:4,frameW:256,frameH:192,height:1.067,yOffset:.015,indicatorXOffset:.4}};class Ev{constructor(t){A(this,"root");A(this,"toast");A(this,"centerMessage");A(this,"subMessage");A(this,"pausePanel");A(this,"levelLabel");A(this,"bgmButton");A(this,"langButton");A(this,"toastTimer",0);A(this,"bgmMuted",!1);A(this,"onBgmToggle");A(this,"onLangToggle");A(this,"resumeAction");this.root=document.createElement("div"),this.root.style.position="absolute",this.root.style.inset="0",this.root.style.pointerEvents="none",t.append(this.root);const e=document.createElement("div");e.style.position="absolute",e.style.top="24px",e.style.left="24px",e.style.padding="12px 16px",e.style.borderRadius="14px",e.style.background="rgba(255,255,255,0.46)",e.style.backdropFilter="blur(14px)",e.style.boxShadow="0 10px 30px rgba(85,64,40,0.12)",e.innerHTML='<strong style="display:block;font-size:18px;text-align:center;">光语 · Luminal</strong>',this.levelLabel=document.createElement("div"),Object.assign(this.levelLabel.style,{display:"block",marginTop:"4px",fontSize:"13px",color:"rgba(85, 64, 40, 0.78)",letterSpacing:"0.12em",fontWeight:"500",textAlign:"center"}),e.append(this.levelLabel),this.root.append(e),this.bgmButton=document.createElement("button"),Object.assign(this.bgmButton.style,{position:"absolute",top:"115px",left:"24px",padding:"5px 14px",border:"none",borderRadius:"8px",background:"#063654",backdropFilter:"blur(10px)",color:"#ffffff",fontSize:"12px",fontWeight:"500",cursor:"pointer",transition:"background 0.2s",pointerEvents:"auto",boxShadow:"0 4px 14px rgba(85,64,40,0.10)",letterSpacing:"0.04em"}),this.bgmButton.textContent=fe.current==="zh"?"🔊 音乐：开":"🔊 Music: On",this.bgmButton.addEventListener("click",()=>this.toggleBgm()),this.bgmButton.addEventListener("pointerenter",()=>{this.bgmButton.style.background="#0a4a6e"}),this.bgmButton.addEventListener("pointerleave",()=>{this.bgmButton.style.background="#063654"}),this.root.append(this.bgmButton),this.langButton=document.createElement("button"),Object.assign(this.langButton.style,{position:"absolute",top:"152px",left:"24px",padding:"5px 14px",border:"none",borderRadius:"8px",background:"#063654",backdropFilter:"blur(10px)",color:"#ffffff",fontSize:"12px",fontWeight:"500",cursor:"pointer",transition:"background 0.2s",pointerEvents:"auto",boxShadow:"0 4px 14px rgba(85,64,40,0.10)",letterSpacing:"0.04em"}),this.langButton.textContent="🌐 中 / EN",this.langButton.dataset.lang="zh",this.langButton.addEventListener("click",()=>this.toggleLang()),this.langButton.addEventListener("pointerenter",()=>{this.langButton.style.background="#0a4a6e"}),this.langButton.addEventListener("pointerleave",()=>{this.langButton.style.background="#063654"}),this.root.append(this.langButton),this.toast=document.createElement("div"),this.toast.style.position="absolute",this.toast.style.left="50%",this.toast.style.bottom="34px",this.toast.style.transform="translateX(-50%)",this.toast.style.padding="10px 18px",this.toast.style.borderRadius="999px",this.toast.style.background="rgba(34,29,24,0.82)",this.toast.style.color="#fff4e6",this.toast.style.fontSize="15px",this.toast.style.opacity="0",this.toast.style.transition="opacity 0.2s ease",this.root.append(this.toast),this.centerMessage=document.createElement("div"),this.centerMessage.style.position="absolute",this.centerMessage.style.top="50%",this.centerMessage.style.left="50%",this.centerMessage.style.transform="translate(-50%, -50%)",this.centerMessage.style.fontSize="56px",this.centerMessage.style.letterSpacing="0.08em",this.centerMessage.style.color="#fff9ee",this.centerMessage.style.textShadow="0 0 28px rgba(255, 214, 128, 0.65)",this.centerMessage.style.opacity="0",this.centerMessage.style.transition="opacity 0.4s ease",this.root.append(this.centerMessage),this.subMessage=document.createElement("div"),this.subMessage.style.position="absolute",this.subMessage.style.top="calc(50% + 44px)",this.subMessage.style.left="50%",this.subMessage.style.transform="translateX(-50%)",this.subMessage.style.color="#6f5a45",this.subMessage.style.fontSize="15px",this.subMessage.style.opacity="0",this.subMessage.style.transition="opacity 0.4s ease",this.root.append(this.subMessage),this.pausePanel=document.createElement("div"),this.pausePanel.style.position="absolute",this.pausePanel.style.inset="0",this.pausePanel.style.display="none",this.pausePanel.style.alignItems="center",this.pausePanel.style.justifyContent="center",this.pausePanel.style.background="rgba(40, 31, 22, 0.28)",this.renderPausePanel(),this.root.append(this.pausePanel)}setLevelLabel(t){this.levelLabel.textContent=t}setBgmCallback(t){this.onBgmToggle=t}setLangCallback(t){this.onLangToggle=t}toggleBgm(){var t;this.bgmMuted=!this.bgmMuted,this.bgmButton.textContent=this.bgmMuted?fe.current==="zh"?"🔇 音乐：关":"🔇 Music: Off":fe.current==="zh"?"🔊 音乐：开":"🔊 Music: On",(t=this.onBgmToggle)==null||t.call(this,this.bgmMuted)}refreshLocalizedText(){this.bgmButton.textContent=this.bgmMuted?fe.current==="zh"?"🔇 音乐：关":"🔇 Music: Off":fe.current==="zh"?"🔊 音乐：开":"🔊 Music: On",this.pausePanel.style.display==="flex"&&this.renderPausePanel()}toggleLang(){var e,n;(e=this.langButton.textContent)==null||e.includes("中 / EN");const t=this.langButton.dataset.lang==="zh"?"en":"zh";this.langButton.dataset.lang=t,this.langButton.textContent=t==="zh"?"🌐 中 / EN":"🌐 EN / 中",(n=this.onLangToggle)==null||n.call(this,t)}setPaused(t){this.pausePanel.style.display=t?"flex":"none",t&&this.renderPausePanel()}refreshPausedText(){this.pausePanel.style.display==="flex"&&this.renderPausePanel()}renderPausePanel(){if(this.pausePanel.querySelector('button[data-action="resume"]'),this.pausePanel.innerHTML=`
      <div style="pointer-events:auto; min-width:300px; padding:28px 30px; border-radius:24px; background:rgba(255,248,238,0.92); box-shadow:0 20px 50px rgba(64,43,21,0.16); text-align:center;">
        <div style="font-size:28px; margin-bottom:8px;">${fe.t("已暂停","Paused")}</div>
        <div style="font-size:14px; color:#6e6054; margin-bottom:18px;">${fe.t("按 Esc 重新开始，或继续旅程","Press Esc to restart, or continue the journey")}</div>
        <button data-action="resume" style="border:none; background:#6f60f4; color:#fff; padding:10px 18px; border-radius:999px; cursor:pointer; font-size:14px;">${fe.t("继续","Continue")}</button>
      </div>
    `,this.resumeAction){const t=this.pausePanel.querySelector('button[data-action="resume"]');t==null||t.addEventListener("click",this.resumeAction)}}bindResume(t){this.resumeAction=t;const e=this.pausePanel.querySelector('button[data-action="resume"]');e==null||e.addEventListener("click",t)}showToast(t,e=1500){this.toast.textContent=t,this.toast.style.opacity="1",window.clearTimeout(this.toastTimer),this.toastTimer=window.setTimeout(()=>{this.toast.style.opacity="0"},e)}showHintMessage(){this.showToast(fe.t("提示：让影子填上中间的空隙","Hint: let the shadow fill the gap in the middle"))}showComplete(){this.centerMessage.textContent=fe.t("光路已启","The path of light is open"),this.centerMessage.style.opacity="1",this.subMessage.textContent=fe.t("旅人已抵达","The traveler has arrived"),this.subMessage.style.opacity="1"}hideComplete(){this.centerMessage.style.opacity="0",this.subMessage.style.opacity="0"}}class Av{constructor(t,e,n,i,r=()=>!0){A(this,"pointerDown",{x:0,y:0});this.sceneManager=t,this.getLevel=e,this.overlayRoots=n,this.zoneOverlay=i,this.isEnabled=r;const o=this.sceneManager.renderer.domElement;o.addEventListener("pointerdown",a=>{this.pointerDown={x:a.clientX,y:a.clientY}}),o.addEventListener("click",a=>{if(!this.isEnabled()||Math.hypot(a.clientX-this.pointerDown.x,a.clientY-this.pointerDown.y)>6)return;const c=this.getLevel(),h=this.sceneManager.raycastObjects(a.clientX,a.clientY,c.pickables);if(h.length>0){c.selectObjectFromMesh(h[0].object);return}const u=this.sceneManager.intersectWall(a.clientX,a.clientY);if(u){if(u.y>=c.platformTopY){if(c.isWalkerMoveLocked)return;if(c.isWalkerSelected){const d=c.getClickedGroupIndex(u.x,u.y);if(d>=0&&d!==c.currentGroupIndex){c.switchToGroup(d),c.selectWalker();return}c.attemptMove(u)}else{const d=c.getClickedGroupIndex(u.x,u.y);if(d>=0){d!==c.currentGroupIndex&&c.switchToGroup(d),c.selectWalker();return}(!c.selectedObject||c.isBridgeConnected)&&c.selectWalker()}return}c.selectedObject||c.selectLeftmostObject()}}),window.addEventListener("keydown",a=>{if(!this.isEnabled()||this.isTypingIntoOverlay(a.target))return;const l=this.getLevel();a.code==="Tab"&&(a.preventDefault(),l.cycleSelection()),a.code==="KeyR"&&l.resetSelectedObject(),a.code==="KeyH"&&l.showHint(),a.code==="Escape"&&l.togglePause()})}isTypingIntoOverlay(t){return t instanceof HTMLElement?this.overlayRoots.some(e=>e.contains(t)):!1}}class Rv{constructor(t){A(this,"root");this.root=document.createElement("div"),Object.assign(this.root.style,{position:"absolute",inset:"0",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"#0a0a0a",zIndex:"99",pointerEvents:"none",opacity:"0",cursor:"pointer",userSelect:"none"}),t.append(this.root)}show(t,e,n={}){const i=n.hideArrow??!1,r=n.disableClick??!1;this.root.innerHTML="";let o=!1;if(!document.getElementById("narrative-style")){const c=document.createElement("style");c.id="narrative-style",c.textContent=`
        @keyframes luminal-fadein {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes tri-pulse {
          0%, 100% { opacity: 0.15; transform: translateX(0); }
          50%       { opacity: 0.9;  transform: translateX(4px); }
        }
      `,document.head.append(c)}const a=document.createElement("div");Object.assign(a.style,{display:"flex",flexDirection:"column",alignItems:"center",gap:"20px",padding:"0 40px",maxWidth:"800px",textAlign:"center",marginBottom:"80px"});const l=1.2;if(t.forEach((c,h)=>{const u=document.createElement("div");Object.assign(u.style,{display:"flex",flexDirection:"column",alignItems:"center",gap:"6px",opacity:"0",animation:`luminal-fadein 0.8s ease ${h*l}s both`});const d=document.createElement("div");d.textContent=c.zh,Object.assign(d.style,{fontSize:"26px",fontWeight:"500",color:"rgba(255, 248, 235, 0.92)",letterSpacing:"0.08em",lineHeight:"1.6"});const f=document.createElement("div");f.textContent=c.en,Object.assign(f.style,{fontSize:"15px",fontWeight:"300",color:"rgba(255, 248, 235, 0.5)",letterSpacing:"0.18em",lineHeight:"1.5",fontStyle:"italic"}),u.append(d,f),a.append(u)}),this.root.append(a),!i){const c=(t.length-1)*l+.8+.6,h=document.createElement("div");Object.assign(h.style,{position:"absolute",bottom:"52px",display:"flex",alignItems:"center",gap:"6px",opacity:"0",animation:`luminal-fadein 0.8s ease ${c}s both`}),[0,1,2].forEach(u=>{const d=document.createElement("div");d.textContent="▶",Object.assign(d.style,{fontSize:"12px",color:"rgba(255, 248, 235, 0.9)",animation:`tri-pulse 2.0s ease-in-out ${u*.35}s infinite`}),h.append(d)}),this.root.append(h)}if(this.root.style.transition="none",this.root.style.opacity="1",this.root.style.pointerEvents=r?"none":"auto",!r){const c=()=>{o||(o=!0,this.root.removeEventListener("pointerdown",c),this.root.style.transition="opacity 0.5s ease",this.root.style.opacity="0",this.root.style.pointerEvents="none",setTimeout(()=>e==null?void 0:e(),500))};this.root.addEventListener("pointerdown",c)}}}const Hr=Math.PI/180*10,Gr=.03;class Cv{constructor(t,e){A(this,"root");A(this,"panel");A(this,"activeObject",null);A(this,"holdTimer",0);A(this,"moveBtns",null);A(this,"movePad",null);A(this,"rotateBtns",null);A(this,"rotationPad",null);A(this,"tutorialArrow",null);A(this,"tutorialLocked",!1);A(this,"rotateTutorialLocked",!1);A(this,"gameStarted",!1);A(this,"panelForceHidden",!1);A(this,"arrowTime",0);A(this,"moveBg","rgba(124, 107, 231, 0.82)");A(this,"centerLabels",[]);A(this,"moveAccent","#7c6be7");A(this,"disabledBg","rgba(180, 180, 180, 0.45)");this.callbacks=e,this.root=document.createElement("div"),this.root.style.position="absolute",this.root.style.inset="0",this.root.style.pointerEvents="none",t.append(this.root),this.panel=document.createElement("div"),Object.assign(this.panel.style,{position:"absolute",bottom:"24px",left:"50%",transform:"translateX(-50%)",display:"none",pointerEvents:"auto",alignItems:"center",gap:"23px",padding:"13px 23px",borderRadius:"16px",background:"rgba(255, 248, 241, 0.95)",backdropFilter:"blur(12px)",boxShadow:"0 8px 32px rgba(84, 61, 35, 0.18)",border:"1px solid rgba(111, 96, 244, 0.2)"}),this.root.append(this.panel);const{pad:n,btns:i}=this.buildCrosspadWithRefs("转动","Rotate","#6f60f4","rgba(111, 96, 244, 0.88)",{up:()=>this.callbacks.onRotateZ(Hr),down:()=>this.callbacks.onRotateZ(-Hr),left:()=>this.callbacks.onRotateY(Hr),right:()=>this.callbacks.onRotateY(-Hr)},{up:X("/textures/ui/rotate_up.webp"),down:X("/textures/ui/rotate_down.webp"),left:X("/textures/ui/rotate_left.webp"),right:X("/textures/ui/rotate_right.webp")});this.rotateBtns=i,this.rotationPad=n,this.panel.append(this.rotationPad);const{pad:r,btns:o}=this.buildCrosspadWithRefs("移动","Move",this.moveAccent,this.moveBg,{up:()=>this.callbacks.onRailChangeY(Gr),down:()=>this.callbacks.onRailChangeY(-Gr),left:()=>{this.activeObject&&this.callbacks.onRailChange(Math.max(0,this.activeObject.normalizedT-Gr),"left")},right:()=>{this.activeObject&&this.callbacks.onRailChange(Math.min(1,this.activeObject.normalizedT+Gr),"right")}});if(this.moveBtns=o,this.movePad=r,this.panel.append(r),this.tutorialArrow=document.createElement("div"),Object.assign(this.tutorialArrow.style,{position:"fixed",fontSize:"56px",color:"#f5c842",textShadow:"0 0 8px #f5c84299",pointerEvents:"none",display:"none",zIndex:"9999",animation:"tutorialPulse 0.8s ease-in-out infinite alternate"}),this.tutorialArrow.textContent="▼",document.body.append(this.tutorialArrow),!document.getElementById("tutorial-arrow-style")){const a=document.createElement("style");a.id="tutorial-arrow-style",a.textContent=`
        @keyframes tutorialPulse {
          from { opacity: 1; }
          to   { opacity: 0.55; }
        }
      `,document.head.append(a)}document.addEventListener("pointerup",()=>this.stopHold())}buildCrosspad(t,e,n,i,r,o){return this.buildCrosspadWithRefs(t,e,n,i,r,o).pad}buildCrosspadWithRefs(t,e,n,i,r,o){const a=document.createElement("div");Object.assign(a.style,{position:"relative",width:"105px",height:"105px",flexShrink:"0"});const l=document.createElement("div");Object.assign(l.style,{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",width:"35px",height:"35px",borderRadius:"7px",background:"rgba(255, 255, 255, 0.92)",border:`2px solid ${n}40`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"11px",color:n,fontWeight:"600",pointerEvents:"none",userSelect:"none"}),l.textContent=t,a.append(l),this.centerLabels.push({element:l,zh:t,en:e});const c=g=>{const x=document.createElement("button"),m=g.startsWith("/")||g.startsWith("http"),p=g==="↻"||g==="↺";if(m){const M=document.createElement("img");M.src=g,M.draggable=!1,Object.assign(M.style,{width:"100%",height:"100%",objectFit:"contain",pointerEvents:"none",userSelect:"none"}),x.append(M)}else x.textContent=g;return Object.assign(x.style,{position:"absolute",width:"32px",height:"32px",border:"none",borderRadius:"7px",background:i,color:"#fff",boxShadow:"0 3px 8px rgba(73, 55, 173, 0.25)",cursor:"pointer",fontSize:p?"17px":"13px",padding:m?"4px":"0",display:"flex",alignItems:"center",justifyContent:"center",transition:"background 0.12s, transform 0.1s",userSelect:"none"}),x.addEventListener("pointerenter",()=>{x.disabled||(x.style.background=n,x.style.transform+=" scale(1.08)")}),x.addEventListener("pointerleave",()=>{x.disabled||(x.style.background=i,x.style.transform=x.style.transform.replace(" scale(1.08)",""))}),x.addEventListener("pointerdown",M=>M.stopPropagation()),x.addEventListener("click",M=>M.stopPropagation()),x},h=c((o==null?void 0:o.up)??"▲");Object.assign(h.style,{left:"50%",top:"0",transform:"translateX(-50%)"}),this.attachHold(h,r.up);const u=c((o==null?void 0:o.down)??"▼");Object.assign(u.style,{left:"50%",bottom:"0",transform:"translateX(-50%)"}),this.attachHold(u,r.down);const d=c((o==null?void 0:o.left)??"◀");Object.assign(d.style,{left:"0",top:"50%",transform:"translateY(-50%)"}),this.attachHold(d,r.left);const f=c((o==null?void 0:o.right)??"▶");return Object.assign(f.style,{right:"0",top:"50%",transform:"translateY(-50%)"}),this.attachHold(f,r.right),a.append(h,u,d,f),{pad:a,btns:{up:h,down:u,left:d,right:f}}}attachHold(t,e){t.addEventListener("pointerdown",n=>{n.stopPropagation(),!t.disabled&&(e(),_n.play("click",.2),this.callbacks.onBeginAdjust(),this.stopHold(),this.holdTimer=window.setInterval(()=>{t.disabled||e()},100))}),t.addEventListener("pointerup",()=>{this.stopHold(),this.callbacks.onEndAdjust()}),t.addEventListener("pointerleave",()=>{this.stopHold()})}stopHold(){this.holdTimer&&(window.clearInterval(this.holdTimer),this.holdTimer=0)}setMoveButtonDisabled(t,e){t.disabled=e,t.style.background=e?this.disabledBg:this.moveBg,t.style.cursor=e?"not-allowed":"pointer",t.style.opacity=e?"0.5":"1"}setObject(t){if(this.activeObject=t,this.panel.style.display=t&&!this.panelForceHidden?"flex":"none",t)if(this.tutorialLocked&&this.gameStarted)this.moveBtns&&(this.setMoveButtonDisabled(this.moveBtns.down,!0),this.setMoveButtonDisabled(this.moveBtns.left,!0),this.setMoveButtonDisabled(this.moveBtns.right,!0)),this.tutorialArrow&&(this.tutorialArrow.style.display="block",this._updateArrowPosition());else if(this.rotateTutorialLocked&&this.gameStarted)this.moveBtns&&(this.setMoveButtonDisabled(this.moveBtns.up,!0),this.setMoveButtonDisabled(this.moveBtns.down,!0),this.setMoveButtonDisabled(this.moveBtns.left,!0),this.setMoveButtonDisabled(this.moveBtns.right,!0)),this.rotateBtns&&(this.setMoveButtonDisabled(this.rotateBtns.down,!0),this.setMoveButtonDisabled(this.rotateBtns.left,!0),this.setMoveButtonDisabled(this.rotateBtns.right,!0)),this.tutorialArrow&&(this.tutorialArrow.style.display="block",this._updateArrowPosition());else{if(this.moveBtns){const e=!!t.data.disableMove;this.setMoveButtonDisabled(this.moveBtns.up,e),this.setMoveButtonDisabled(this.moveBtns.down,e),this.setMoveButtonDisabled(this.moveBtns.left,e),this.setMoveButtonDisabled(this.moveBtns.right,e)}if(this.rotateBtns){const e=!!t.data.disableRotate;this.setMoveButtonDisabled(this.rotateBtns.up,e),this.setMoveButtonDisabled(this.rotateBtns.down,e),this.setMoveButtonDisabled(this.rotateBtns.left,e),this.setMoveButtonDisabled(this.rotateBtns.right,e)}}else if(this.tutorialArrow&&(this.tutorialArrow.style.display="none"),this.moveBtns)for(const e of Object.values(this.moveBtns))this.setMoveButtonDisabled(e,!1)}updateScreenPosition(t,e=0){var n;(this.tutorialLocked||this.rotateTutorialLocked)&&((n=this.tutorialArrow)==null?void 0:n.style.display)!=="none"&&this._updateArrowPosition(e)}notifyGameStarted(){this.gameStarted=!0,(this.tutorialLocked||this.rotateTutorialLocked)&&this.activeObject&&this.tutorialArrow&&(this.tutorialArrow.style.display="block",this._updateArrowPosition())}setRotationVisible(t){this.rotationPad&&(this.rotationPad.style.display=t?"":"none")}setMoveVisible(t){this.movePad&&(this.movePad.style.display=t?"":"none")}refreshLabels(){for(const t of this.centerLabels)t.element.textContent=fe.t(t.zh,t.en)}hideArrow(){this.tutorialArrow&&(this.tutorialArrow.style.display="none")}pointArrowAt(t,e,n=0,i=-110,r=0){if(!this.tutorialArrow)return;this.tutorialArrow.style.display="block",this.arrowTime+=r;const o=Math.sin(this.arrowTime*4)*7;Object.assign(this.tutorialArrow.style,{left:`${t+n}px`,top:`${e+i+o}px`,transform:"translateX(-50%)"})}setTutorialMode(t){this.tutorialLocked=t,this.moveBtns&&(t?(this.setMoveButtonDisabled(this.moveBtns.down,!0),this.setMoveButtonDisabled(this.moveBtns.left,!0),this.setMoveButtonDisabled(this.moveBtns.right,!0),this.moveBtns.up.style.boxShadow="0 0 12px 4px #f5c84266"):(this.tutorialArrow&&(this.tutorialArrow.style.display="none"),this.moveBtns.up.style.boxShadow="0 3px 8px rgba(73, 55, 173, 0.25)",this.activeObject&&(this.setMoveButtonDisabled(this.moveBtns.down,!this.activeObject.canMove("down")),this.setMoveButtonDisabled(this.moveBtns.left,!this.activeObject.canMove("left")),this.setMoveButtonDisabled(this.moveBtns.right,!this.activeObject.canMove("right")))))}_updateArrowPosition(t=0){var r,o;if(!this.tutorialArrow)return;this.arrowTime+=t;const e=Math.sin(this.arrowTime*4)*7,n=this.rotateTutorialLocked?(r=this.rotateBtns)==null?void 0:r.up:(o=this.moveBtns)==null?void 0:o.up;if(!n)return;const i=n.getBoundingClientRect();Object.assign(this.tutorialArrow.style,{left:`${i.left+i.width/2}px`,top:`${i.top-70+e}px`,transform:"translateX(-50%)"})}setRotateTutorialMode(t){this.rotateTutorialLocked=t,!(!this.moveBtns||!this.rotateBtns)&&(t?(this.setMoveButtonDisabled(this.moveBtns.up,!0),this.setMoveButtonDisabled(this.moveBtns.down,!0),this.setMoveButtonDisabled(this.moveBtns.left,!0),this.setMoveButtonDisabled(this.moveBtns.right,!0),this.setMoveButtonDisabled(this.rotateBtns.down,!0),this.setMoveButtonDisabled(this.rotateBtns.left,!0),this.setMoveButtonDisabled(this.rotateBtns.right,!0),this.rotateBtns.up.style.boxShadow="0 0 12px 4px #f5c84266",this.tutorialArrow&&this.gameStarted&&this.activeObject&&(this.tutorialArrow.style.display="block",this._updateArrowPosition())):(this.tutorialArrow&&(this.tutorialArrow.style.display="none"),this.rotateBtns.up.style.boxShadow="0 3px 8px rgba(73, 55, 173, 0.25)",this.setMoveButtonDisabled(this.rotateBtns.down,!1),this.setMoveButtonDisabled(this.rotateBtns.left,!1),this.setMoveButtonDisabled(this.rotateBtns.right,!1)))}syncSlider(){if(!this.activeObject||!this.moveBtns)return;const t=this.activeObject;this.rotateTutorialLocked||(t.data.disableMove?(this.setMoveButtonDisabled(this.moveBtns.up,!0),this.setMoveButtonDisabled(this.moveBtns.down,!0),this.setMoveButtonDisabled(this.moveBtns.left,!0),this.setMoveButtonDisabled(this.moveBtns.right,!0)):(this.setMoveButtonDisabled(this.moveBtns.up,!t.canMove("up")),this.setMoveButtonDisabled(this.moveBtns.down,!t.canMove("down")),this.setMoveButtonDisabled(this.moveBtns.left,!t.canMove("left")),this.setMoveButtonDisabled(this.moveBtns.right,!t.canMove("right")))),this.tutorialLocked&&(this.setMoveButtonDisabled(this.moveBtns.up,!t.canMove("up")),this.setMoveButtonDisabled(this.moveBtns.down,!0),this.setMoveButtonDisabled(this.moveBtns.left,!0),this.setMoveButtonDisabled(this.moveBtns.right,!0))}}class Lv{constructor(){A(this,"audios",new Map);A(this,"currentId",null);A(this,"targetVolume",1);A(this,"masterVolume",.5);A(this,"fadeTimer",null);A(this,"unlocked",!1);A(this,"pendingId",null);A(this,"muted",!1)}preload(t,e){for(const n of t){if(this.audios.has(n))continue;const i=new Audio(e(n));i.loop=!0,i.preload="auto",i.volume=0,this.audios.set(n,i)}}preloadBlob(t,e){if(this.audios.has(t))return;const n=new Audio(URL.createObjectURL(e));n.loop=!0,n.preload="auto",n.volume=0,this.audios.set(t,n)}unlock(){if(!this.unlocked&&(this.unlocked=!0,this.pendingId!==null)){const t=this.pendingId;this.pendingId=null;const e=this.audios.get(t);e&&(e.currentTime=0,e.play().catch(n=>{console.warn(`[BgmManager] play ${t} failed after unlock:`,n)}),this.fadeTo(this.targetVolume*this.masterVolume,.8,e))}}crossfadeTo(t,e=1){if(this.currentId===t){this.muted||this.fadeTo(this.targetVolume*this.masterVolume,e);return}const n=this.currentId;this.currentId=t;const i=this.audios.get(t);if(!i){console.warn(`[BgmManager] no audio for ${t}`);return}if(this.muted){i.volume=0,i.currentTime=0;const o=n?this.audios.get(n)??null:null;o&&(o.volume=0,o.pause());return}i.volume=0,i.currentTime=0,i.play().then(()=>{this.unlocked=!0}).catch(()=>{this.pendingId=t});const r=n?this.audios.get(n)??null:null;this.startFade(r,i,this.targetVolume*this.masterVolume,e)}setVolumeMultiplier(t,e=.6){if(this.targetVolume=t,this.muted)return;const n=this.currentId?this.audios.get(this.currentId)??null:null;this.fadeTo(t*this.masterVolume,e,n)}fadeOut(t=1){const e=this.currentId?this.audios.get(this.currentId)??null:null;e&&(this.startFade(e,null,0,t),setTimeout(()=>{this.currentId=null},t*1e3))}fadeTo(t,e,n){const i=n??(this.currentId?this.audios.get(this.currentId)??null:null);i&&this.startFade(null,i,t,e)}startFade(t,e,n,i){this.fadeTimer!==null&&(clearInterval(this.fadeTimer),this.fadeTimer=null);const r=(t==null?void 0:t.volume)??0,o=(e==null?void 0:e.volume)??0,a=performance.now(),l=Math.max(.05,i)*1e3;this.fadeTimer=window.setInterval(()=>{const c=(performance.now()-a)/l,h=Math.min(1,c);t&&(t.volume=Math.max(0,r*(1-h))),e&&(e.volume=o+(n-o)*h),h>=1&&(this.fadeTimer!==null&&(clearInterval(this.fadeTimer),this.fadeTimer=null),t&&t!==e&&(t.pause(),t.currentTime=0,t.volume=0))},16)}stopAll(){this.fadeTimer!==null&&(clearInterval(this.fadeTimer),this.fadeTimer=null);for(const t of this.audios.values())t.pause(),t.volume=0,t.currentTime=0;this.currentId=null}setMuted(t){if(this.muted=t,t){const e=this.currentId?this.audios.get(this.currentId)??null:null;e&&this.fadeTo(0,.3,e)}else{const e=this.currentId?this.audios.get(this.currentId)??null:null;e&&this.fadeTo(this.targetVolume*this.masterVolume,.3,e)}}}class Pv{constructor(t){A(this,"root");A(this,"onStartCallback",null);A(this,"loadingContainer");A(this,"progressBar");A(this,"percentText");A(this,"hintContainer");A(this,"isReady",!1);A(this,"isDismissed",!1);if(!document.getElementById("luminal-style")){const c=document.createElement("style");c.id="luminal-style",c.textContent=`
        @import url('https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&display=swap');

        @keyframes luminal-pulse {
          0%   { opacity: 0.6; }
          40%  { opacity: 0.85; }
          60%  { opacity: 0.85; }
          100% { opacity: 0.6; }
        }
        @keyframes luminal-fadein {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `,document.head.append(c)}this.root=document.createElement("div"),Object.assign(this.root.style,{position:"absolute",inset:"0",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"#0a0a0a",zIndex:"100",cursor:"default",userSelect:"none"});const e=document.createElement("div");e.textContent="光语",Object.assign(e.style,{fontFamily:'"Ma Shan Zheng", cursive',fontSize:"88px",fontWeight:"400",color:"rgba(255, 248, 235, 0.92)",letterSpacing:"0.1em",lineHeight:"1",textShadow:"0 2px 40px rgba(255,248,235,0.08)",animation:"luminal-fadein 1.2s ease both"});const n=document.createElement("div");n.textContent="Luminal",Object.assign(n.style,{fontFamily:'Georgia, "Times New Roman", serif',fontSize:"36px",fontWeight:"400",fontStyle:"italic",color:"rgba(255, 248, 235, 0.45)",letterSpacing:"0.18em",lineHeight:"1",marginTop:"10px",animation:"luminal-fadein 1.2s ease 0.2s both"});const i=document.createElement("div");Object.assign(i.style,{width:"40px",height:"1px",background:"rgba(255, 248, 235, 0.2)",margin:"40px 0 32px",animation:"luminal-fadein 1.0s ease 0.5s both"}),this.root.append(e,n,i);const r=document.createElement("div");Object.assign(r.style,{display:"flex",flexDirection:"column",alignItems:"center",gap:"12px",width:"200px",animation:"luminal-fadein 1.0s ease 0.7s both",marginTop:"32px"});const o=document.createElement("div");Object.assign(o.style,{width:"100%",height:"2px",background:"rgba(255,248,235,0.1)",borderRadius:"1px",overflow:"hidden"}),this.progressBar=document.createElement("div"),Object.assign(this.progressBar.style,{width:"0%",height:"100%",background:"rgba(255,248,235,0.6)",transition:"width 0.3s ease",borderRadius:"1px"}),o.append(this.progressBar),this.percentText=document.createElement("div"),Object.assign(this.percentText.style,{fontSize:"13px",fontWeight:"300",color:"rgba(255,248,235,0.4)",letterSpacing:"0.15em",fontFamily:'Georgia, "Times New Roman", serif',fontStyle:"italic"}),this.percentText.textContent="loading...",r.append(o,this.percentText),this.loadingContainer=r,this.hintContainer=document.createElement("div"),Object.assign(this.hintContainer.style,{display:"none",flexDirection:"column",alignItems:"center",gap:"6px",marginTop:"32px",cursor:"pointer"});const a=document.createElement("div");a.textContent="开始旅程",Object.assign(a.style,{fontSize:"16px",fontWeight:"400",color:"rgba(255, 248, 235, 0.6)",letterSpacing:"0.3em"});const l=document.createElement("div");l.textContent="Start Your Journey",Object.assign(l.style,{fontSize:"12px",fontWeight:"300",color:"rgba(255, 248, 235, 0.3)",letterSpacing:"0.15em",fontStyle:"italic"}),this.hintContainer.append(a,l),this.root.append(r,this.hintContainer),this.root.addEventListener("pointerdown",()=>{!this.isReady||this.isDismissed||this.dismiss(()=>{var c;return(c=this.onStartCallback)==null?void 0:c.call(this)})}),t.append(this.root)}updateProgress(t,e){this.progressBar.style.width=`${Math.min(100,t*100)}%`,this.percentText.textContent=e}ready(){this.isReady=!0,this.loadingContainer.style.display="none",this.hintContainer.style.display="flex",this.hintContainer.style.animation="luminal-fadein 1.0s ease both, luminal-pulse 3.9s ease-in-out 1.8s infinite",this.root.style.cursor="pointer"}onStart(t){this.onStartCallback=t}dismiss(t){this.isDismissed||(this.isDismissed=!0,this.root.style.transition="opacity 0.8s ease",this.root.style.opacity="0",this.root.style.pointerEvents="none",setTimeout(()=>{this.root.remove(),t()},800))}}class Iv{constructor(t){A(this,"container");A(this,"video",null);A(this,"onComplete");this.container=document.createElement("div"),this.container.style.position="absolute",this.container.style.inset="0",this.container.style.backgroundColor="#000",this.container.style.display="none",this.container.style.zIndex="10",t.appendChild(this.container)}show(t,e,n=0){this.onComplete=e,console.log(`[VideoScreen] show called with: ${t}, fadeIn: ${n}ms`);let i=!1;const r=()=>{var a;i||(i=!0,(a=this.onComplete)==null||a.call(this))};this.container.innerHTML="",this.video=document.createElement("video"),this.video.src=t,this.video.style.width="100%",this.video.style.height="100%",this.video.style.objectFit="contain",this.video.style.display="block",this.video.muted=!0,this.video.playsInline=!0,this.video.webkitPlaysinline=!0,this.video.controls=!1,n>0?(this.video.style.opacity="0",this.video.style.transition=`opacity ${n}ms ease-out`):this.video.style.opacity="1",this.video.addEventListener("ended",()=>{this.video.style.transition="opacity 500ms ease-in",this.video.style.opacity="0",setTimeout(()=>{this.video&&(this.video.pause(),this.video.src="",this.video.remove(),this.video=null),setTimeout(()=>{r()},400)},500)}),this.video.addEventListener("error",a=>{console.error("[VideoScreen] video error:",a),this.hide(),r()}),this.container.appendChild(this.video),this.container.style.display="block";const o=this.video.play();console.log("[VideoScreen] play promise:",o),o&&o.then(()=>{n>0&&this.video&&(this.video.style.opacity="1")}).catch(a=>{console.error("[VideoScreen] play rejected:",a),setTimeout(()=>{var l;(l=this.video)==null||l.play().catch(c=>{console.error("[VideoScreen] retry also failed:",c),this.hide(),r()})},100)})}hide(){this.video&&(this.video.pause(),this.video.src="",this.video=null),this.container.style.display="none",this.container.innerHTML=""}}const Qi=class Qi{constructor(t,e,n,i){A(this,"zone");A(this,"hintLabel");A(this,"warningLabel");A(this,"warningTimer",0);A(this,"zoneRect",{left:0,top:0,width:0,height:0});A(this,"platLeft");A(this,"platRight");A(this,"platTop");A(this,"platBottom");A(this,"wallZ");A(this,"fadeTimer",0);A(this,"hintHidden",!1);this.sceneManager=t,this.parent=n;let r=1/0,o=-1/0,a=1/0,l=-1/0;for(const c of e.platforms)r=Math.min(r,c.x-c.width/2),o=Math.max(o,c.x+c.width/2),a=Math.min(a,c.y-c.height/2),l=Math.max(l,c.y+c.height/2);this.platLeft=r,this.platRight=o,this.platTop=l,this.platBottom=a,this.wallZ=t.wallBounds.z,this.zone=this.createZoneDiv(),n.append(this.zone),this.hintLabel=document.createElement("div"),this.hintLabel.textContent=e.hintText??fe.t("向上移动积木，让影子铺出第一道光路","Lift the block upward, and let its shadow form the first path of light"),Object.assign(this.hintLabel.style,{position:"absolute",fontSize:"24px",fontWeight:"600",color:"#7c6be7",background:"rgba(255,253,245,0.82)",backdropFilter:"blur(8px)",padding:"9px 22px",borderRadius:"999px",pointerEvents:"none",userSelect:"none",zIndex:"2",whiteSpace:"nowrap",transform:"translateX(-50%)"}),n.append(this.hintLabel),this.warningLabel=document.createElement("div"),this.warningLabel.textContent=fe.t("角色正站在影子上，移动物品会让道路消散","A character is standing on a shadow. Moving the object will make the path fade."),Object.assign(this.warningLabel.style,{position:"absolute",fontSize:"13px",fontWeight:"600",color:"#c0392b",background:"rgba(255, 240, 238, 0.92)",backdropFilter:"blur(8px)",padding:"5px 14px",borderRadius:"999px",pointerEvents:"none",userSelect:"none",zIndex:"3",whiteSpace:"nowrap",transform:"translateX(-50%)",opacity:"0",transition:"opacity 0.3s ease"}),n.append(this.warningLabel),this.updateLayout()}createZoneDiv(){const t=document.createElement("div");return Object.assign(t.style,{position:"absolute",border:"none",borderRadius:"14px",background:"rgba(255, 255, 255, 0.28)",pointerEvents:"none",transition:"none",opacity:"1",zIndex:"1"}),t}fadeOut(t){this.setZoneOpacity(0,t)}fadeIn(t){this.hintHidden=!1,this.hintLabel.isConnected||this.parent.append(this.hintLabel),this.hintLabel.style.transition="none",this.hintLabel.style.visibility="visible",this.hintLabel.style.opacity="1",console.log("[ZoneOverlay] fadeIn",{hintHidden:this.hintHidden,opacity:this.hintLabel.style.opacity,isConnected:this.hintLabel.isConnected}),this.zone.style.transition="none",this.zone.style.opacity="0",window.clearTimeout(this.fadeTimer),this.zone.offsetHeight,this.setZoneOpacity(1,t)}setZoneOpacity(t,e){const n=`opacity ${e}s linear`;this.zone.style.transition=n,this.hintLabel.style.transition=n,window.clearTimeout(this.fadeTimer),requestAnimationFrame(()=>{this.zone.style.opacity=`${t}`,this.hintHidden||(this.hintLabel.style.opacity=`${t}`)}),this.fadeTimer=window.setTimeout(()=>{this.zone.style.transition="none",this.hintLabel.style.transition="none"},e*1e3)}worldToScreen(t,e){const n=new P(t,e,this.wallZ),i=this.sceneManager.worldToScreen(n);return{sx:i.x,sy:i.y}}updateLayout(){const t=this.worldToScreen(this.platLeft,this.platTop),e=this.worldToScreen(this.platRight,this.platBottom),n=e.sy-Qi.EXTEND_UP,i=e.sy+Qi.EXTEND_DOWN,r=t.sx,o=e.sx;this.zoneRect={left:r,top:n,width:o-r,height:i-n},Object.assign(this.zone.style,{left:`${this.zoneRect.left}px`,top:`${this.zoneRect.top}px`,width:`${this.zoneRect.width}px`,height:`${this.zoneRect.height}px`});const a=this.zoneRect.left+this.zoneRect.width/2,l=`${this.zoneRect.top-36}px`;this.hintHidden||Object.assign(this.hintLabel.style,{left:`${a}px`,top:l}),Object.assign(this.warningLabel.style,{left:`${a}px`,top:l})}setHintText(t){this.hintLabel.textContent=t,this.hintHidden||(this.hintLabel.style.opacity="1")}hideHint(){this.hintHidden=!0,this.hintLabel.remove()}isHintVisible(){return!this.hintHidden&&this.hintLabel.isConnected}resetHint(t){this.warningTimer&&(window.clearTimeout(this.warningTimer),this.warningTimer=0),this.warningLabel.style.opacity="0",this.warningLabel.style.transition="none",t&&(this.hintLabel.textContent=t),this.hintHidden=!1,this.hintLabel.isConnected||this.parent.append(this.hintLabel),this.hintLabel.style.transition="none",this.hintLabel.style.visibility="visible",this.hintLabel.style.opacity="1",console.log("[ZoneOverlay] resetHint",{text:t,isConnected:this.hintLabel.isConnected,opacity:this.hintLabel.style.opacity,visibility:this.hintLabel.style.visibility})}showWarning(){this.warningLabel.textContent=fe.t("角色正站在影子上，移动物品会让道路消散","A character is standing on a shadow. Moving the object will make the path fade."),window.clearTimeout(this.warningTimer),this.hintLabel.style.opacity="0",this.warningLabel.style.transition="opacity 0.2s ease",this.warningLabel.style.opacity="1",this.warningTimer=window.setTimeout(()=>{this.hideWarning()},2500)}hideWarning(){this.warningTimer&&window.clearTimeout(this.warningTimer),this.warningLabel.style.transition="opacity 0.4s ease",this.warningLabel.style.opacity="0",this.hintHidden||(this.hintLabel.style.transition="opacity 0.4s ease",this.hintLabel.style.opacity="1"),this.warningTimer=window.setTimeout(()=>{this.hintHidden||(this.hintLabel.style.transition="none"),this.warningLabel.style.transition="none"},400)}refreshWarningText(){this.warningLabel.textContent=fe.t("角色正站在影子上，移动物品会让道路消散","A character is standing on a shadow. Moving the object will make the path fade.")}};A(Qi,"EXTEND_UP",150),A(Qi,"EXTEND_DOWN",420);let nl=Qi;class Dv{constructor(t,e=10){A(this,"urls");A(this,"concurrency");A(this,"completedCount",0);A(this,"completedBytes",0);this.urls=[...new Set(t)].filter(Boolean),this.concurrency=e}async preload(t){const e=this.urls.length;let n=e*5e5,i=0,r=0;t({loaded:0,total:n,fraction:0});let o=0;const a=Array.from({length:this.concurrency},async()=>{for(;;){const l=o++;if(l>=this.urls.length)break;const c=this.urls[l];try{const h=await fetch(c),u=parseInt(h.headers.get("content-length")??"0",10);u>0&&(i+=u,r++,r>=Math.min(e/2,10)&&(n=Math.round(i/r*e))),this.completedCount++;let d=0;if(h.body){const g=h.body.getReader();for(;;){const{done:x,value:m}=await g.read();if(x)break;d+=m.length}}else d=(await h.arrayBuffer()).byteLength;this.completedBytes+=d;const f=Math.min(e>0?this.completedCount/e:1,.99);t({loaded:this.completedBytes,total:Math.max(n,this.completedBytes),fraction:f})}catch(h){console.warn("[ResourcePreloader] failed:",c,h),this.completedCount++;const u=Math.min(this.completedCount/e,.99);t({loaded:this.completedBytes,total:n,fraction:u})}}});await Promise.all(a),t({loaded:this.completedBytes,total:this.completedBytes,fraction:1})}}const Vn=document.querySelector("#app");if(!Vn)throw new Error("未找到应用挂载点 #app");Vn.style.position="relative";Vn.style.width="100%";Vn.style.height="100%";const Tn=document.createElement("div");Tn.style.position="absolute";Tn.style.inset="0";Tn.style.pointerEvents="none";Tn.style.zIndex="0";Vn.append(Tn);const Ys=document.createElement("div");Object.assign(Ys.style,{position:"absolute",inset:"0",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",transition:"opacity 0.5s ease",opacity:"0"});Tn.append(Ys);const Nv=[X("/chapter1_bg.jpg"),X("/chapter1_bg.jpg"),X("/chapter2_bg.jpg"),X("/chapter3_bg.jpg"),X("/chapter3_bg.jpg"),X("/chapter5_bg.jpg"),X("/chapter5_bg.jpg"),X("/chapter4_bg.jpg"),X("/chapter4_bg.jpg"),X("/chapter6_bg.jpg")],Tl=["1-1","1-2","2-1","3-1","3-2","4-1","4-2","5-1","5-2","6-1"],Uv=["第一章","第二章","第三章","第四章","第五章","第六章"];function Su(s){const t=Tl[s]??`L${s+1}`,e=parseInt(t.split("-")[0],10);return`${Uv[e-1]??`第${e}章`} ${t}`}function bu(s){const t=Nv[s];t?(Ys.style.backgroundImage=`url('${t}')`,Ys.style.opacity="1"):Ys.style.opacity="0"}const yn=document.createElement("div");yn.style.position="absolute";yn.style.inset="0";yn.style.zIndex="1";Vn.append(yn);const En=document.createElement("div");En.style.position="absolute";En.style.inset="0";En.style.pointerEvents="none";En.style.zIndex="2";Vn.append(En);const ii=new g_(yn),Gn=new Ev(En),Ft=new gv(ii,Gn,{levels:[wu,xv,_v,vv,yv,Mv,wv,Sv,bv,Tv]}),te=new Cv(En,{onRotateX:s=>Ft.activeLevel.rotateSelected(s,0,0),onRotateY:s=>{Ft.activeLevel.autoSelectForAction("rotate"),Ft.activeLevel.rotateSelected(0,s,0)},onRotateZ:s=>{Ft.activeLevel.autoSelectForAction("rotate"),Ft.activeLevel.rotateSelected(0,0,s)},onRailChange:(s,t)=>{Ft.activeLevel.autoSelectForAction("move"),Ft.activeLevel.setSelectedRail(s,t)},onRailChangeY:s=>{Ft.activeLevel.autoSelectForAction("move"),Ft.activeLevel.moveSelectedY(s)},onBeginAdjust:()=>{},onEndAdjust:()=>Ft.activeLevel.finalizeAdjustment()}),Re=new nl(ii,wu,Tn,te.panel);Ft.setOverlayFader(Re);Gn.bindResume(()=>Ft.activeLevel.resume());Gn.setBgmCallback(s=>Qe.setMuted(s));let Mi=!1,$i=!1;function Ov(s){var a,l;const t=s.mainWalker,e=(a=s.mainCompanion)==null?void 0:a.walker,n=s.getExtraWalker(0),i=(l=s.getExtraCompanion(0))==null?void 0:l.walker;if(!t||!e||!n||!i){console.warn("[6-1] 缺少角色，无法播放序列");return}const r={url:X("/textures/old_sheet.webp"),frameCount:2,frameW:1200,frameH:2e3,height:2.3,yOffset:0},o=(c,h)=>{const u=performance.now(),d=c.getOpacity(),f=()=>{const g=performance.now()-u,x=Math.min(1,g/h);c.setOpacity(d*(1-x)),x<1&&requestAnimationFrame(f)};f()};setTimeout(()=>{e.swapSheet({...r}),e.setExtraScale(.9)},5e3),setTimeout(()=>{t.swapSheet({...r}),t.setExtraScale(.7,.1)},7e3),setTimeout(()=>o(n,1e3),4e3),setTimeout(()=>o(i,1e3),6e3),setTimeout(()=>o(e,1e3),7e3)}const Tu=s=>{s.onWalkerFell=()=>Re.showWarning(),s.onRestart=()=>{Re.hideWarning(),Mi=!1,$i=!1},s.setHintText(s.config.hintText??"向上移动积木，让影子铺出第一道光路",s.config.hintTextEn??"Lift the block upward, and let its shadow form the first path of light"),te.setRotationVisible(!s.config.hideRotationPanel),te.setMoveVisible(!0);const t=(s.config.tutorialUpSteps??0)>0;te.setTutorialMode(t);const e=(s.config.tutorialRotateSteps??0)>0;te.setRotateTutorialMode(e),s.onTutorialUnlock=()=>{te.setTutorialMode(!1),te.setRotateTutorialMode(!1)},Mi=!1,$i=!1,te.hideArrow();const n=()=>{const i={1:sy,2:ry,4:oy,6:ay,8:ly,9:cy},r={1:X("/video/chapter1end2.mp4"),2:X("/video/chapter2end.mp4"),4:X("/video/chapter3end.mp4"),6:X("/video/chapter4end.mp4"),8:X("/video/chapter5end.mp4"),9:X("/video/chapter6end.mp4")},o={1:"BGM-02",2:"BGM-03",4:"BGM-04",6:"BGM-05",8:"BGM-06",9:"BGM-06"},a=i[Ft.currentLevelIndex];if(!a)return;const l=r[Ft.currentLevelIndex];er.root.parentElement&&er.root.remove(),Ft.deferTransitionToNextLevel(),pe.style.transition="opacity 0.5s ease-out",pe.style.opacity="1",pe.style.pointerEvents="auto",pe.style.background="#000",Qe.setVolumeMultiplier(.3,.6);const c=()=>{Ft.completeDeferredTransition(),pe.style.transition="opacity 0.4s ease",pe.style.opacity="0",pe.style.pointerEvents="none",pe.style.background="transparent",Qe.setVolumeMultiplier(1,.8)},h=()=>{if(Ft.currentLevelIndex===9){il.show(a,void 0,{hideArrow:!0,disableClick:!0});return}il.show(a,c)};setTimeout(()=>{if(l){const u=o[Ft.currentLevelIndex];u&&(Qe.setVolumeMultiplier(.3,.6),Qe.crossfadeTo(u,3)),Eu.show(l,h,3e3)}else h()},800)};if(s.config.noGuide){const i=()=>{s.config.persistentHint||Re.hideHint()};if(s.onBridgeConnected=()=>{s.config.autoFinishOnBridge?(te.setMoveVisible(!1),te.setRotationVisible(!1)):s.config.multiBridge||te.setMoveVisible(!1),i()},s.onWalkerSelected=()=>{},s.onWalkerStartMove=()=>{te.hideArrow(),i()},s.onLevelComplete=()=>{te.hideArrow(),i(),n()},s.config.multiBridge&&s.config.platforms.length>=3){const r=s.config.platforms;s.onWalkerArrived=o=>{for(let a=1;a<r.length-1;a+=1){const l=r[a];if(o.x>=l.x-l.width/2&&o.x<=l.x+l.width/2){if(s.config.transitHintText){const c=s.setHintText(s.config.transitHintText??"再次移动行李箱，铺出下一段路",s.config.transitHintTextEn??"Move the suitcase again to make the next path");Re.resetHint(c)}s.startCompanionFollowing();break}}}}s.config.wallRemovedHintText&&(s.onWallRemoved=()=>{Re.resetHint(s.setHintText(s.config.wallRemovedHintText,s.config.wallRemovedHintTextEn))})}else s.onBridgeConnected=()=>{te.setMoveVisible(!1);const i=s.setHintText(s.config.bridgeHintText??"光路已铺就，点选人物前行",s.config.bridgeHintTextEn??"The light-path is set. Click a character to walk");Re.setHintText(i),Mi=!0},s.onWalkerSelected=()=>{Mi=!1,$i=!0;const i=s.setHintText(s.config.walkerSelectedHintText??"点选门扉，引导角色前往终点",s.config.walkerSelectedHintTextEn??"Click the gate — guide them to the end");Re.setHintText(i)},s.onWalkerStartMove=()=>{$i=!1,Mi=!1,te.hideArrow(),Re.hideHint()},s.onLevelComplete=()=>{$i=!1,Mi=!1,te.hideArrow(),Re.hideHint(),n()};s.onAutoFinish=()=>{Ov(s)}};Tu(Ft.activeLevel);fe.onChange(()=>{const t=Ft.activeLevel.refreshHintText();t!==null&&Re.isHintVisible()&&Re.setHintText(t),Gn.refreshPausedText(),Gn.refreshLocalizedText(),te.refreshLabels(),Re.refreshWarningText()});Gn.setLangCallback(s=>fe.setLang(s));const Qe=new Lv;fetch(`${X("/bgm/")}BGM-00.m4a`).then(s=>s.blob()).then(s=>{Qe.preloadBlob("BGM-00",s),Qe.crossfadeTo("BGM-00",0),console.log("[Main] BGM-00 ready, waiting for user interaction")}).catch(s=>console.warn("[Main] BGM-00 preload failed:",s));Qe.preload(["BGM-00","BGM-01","BGM-02","BGM-03","BGM-04","BGM-05","BGM-06"],s=>`${X("/bgm/")}${s}.m4a`);_n.preload(["wall","pass","connected","switch","click"]).then(()=>{console.log("[Main] SFX preloaded")});const ss=()=>{Qe.unlock(),_n.unlock(),window.removeEventListener("pointerdown",ss),window.removeEventListener("pointermove",ss),window.removeEventListener("keydown",ss)};window.addEventListener("pointerdown",ss);window.addEventListener("pointermove",ss);window.addEventListener("keydown",ss);Qe.crossfadeTo("BGM-00",0);function Fv(s){const t=Tl[s]??"1-1";return`BGM-0${parseInt(t.split("-")[0],10)}`}Ft.onLevelCreated=Tu;Ft.onLevelActivated=s=>{const t=Ft.activeLevel,e=t.setHintText(t.config.hintText??"向上移动积木，让影子铺出第一道光路",t.config.hintTextEn??"Lift the block upward, and let its shadow form the first path of light");console.log("[onLevelActivated]",{index:s,displayHint:e,noGuide:t.config.noGuide}),Re.resetHint(e),bu(s),Gn.setLevelLabel(Su(s)),Qe.crossfadeTo(Fv(s),1.2)};bu(0);Gn.setLevelLabel(Su(0));ii.removeWallBackground();new Av(ii,()=>Ft.activeLevel,[te.root,Gn.root],Re,()=>!Ft.isTransitioning);const hi=document.createElement("div");Object.assign(hi.style,{position:"absolute",top:"24px",right:"24px",padding:"12px 16px",borderRadius:"10px",background:"rgba(0, 0, 0, 0.75)",color:"#00ff88",fontFamily:"monospace",fontSize:"12px",lineHeight:"1.7",pointerEvents:"auto",display:"none",zIndex:"9999",minWidth:"200px",whiteSpace:"pre",maxHeight:"calc(100vh - 48px)",overflowY:"auto",overflowX:"hidden"});const El=document.createElement("div");El.style.pointerEvents="none";hi.append(El);const Al=document.createElement("div");Object.assign(Al.style,{marginTop:"10px",paddingTop:"8px",borderTop:"1px solid rgba(0, 255, 136, 0.3)",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"6px"});for(let s=0;s<Ft.levelCount;s+=1){const t=document.createElement("button");t.textContent=Tl[s]??`L${s+1}`,Object.assign(t.style,{background:"rgba(0, 255, 136, 0.15)",border:"1px solid rgba(0, 255, 136, 0.4)",borderRadius:"4px",color:"#00ff88",fontFamily:"monospace",fontSize:"11px",padding:"4px 8px",cursor:"pointer",pointerEvents:"auto",textAlign:"center"}),t.addEventListener("click",e=>{e.stopPropagation(),so||(so=!0,pe.style.transition="none",pe.style.opacity="0",pe.style.pointerEvents="none",yn.style.transition="none",yn.style.opacity="1",Tn.style.opacity="1",En.style.opacity="1",Ft.activeLevel.resume(),te.notifyGameStarted()),Ft.jumpToLevel(s)}),Al.append(t)}hi.append(Al);const He=document.createElement("div");Object.assign(He.style,{marginTop:"10px",paddingTop:"8px",borderTop:"1px solid rgba(0, 255, 136, 0.3)"});const Rl=document.createElement("div");Rl.textContent="── 位置模拟器 ──";Object.assign(Rl.style,{color:"#88ddff",fontSize:"11px",marginBottom:"6px",letterSpacing:"0.5px"});He.append(Rl);const Ri=(s,t,e)=>{const n=document.createElement("div");Object.assign(n.style,{display:"flex",alignItems:"center",gap:"6px",marginBottom:"4px",pointerEvents:"auto"});const i=document.createElement("span");i.textContent=s,Object.assign(i.style,{color:"#88ddff",fontSize:"11px",minWidth:"72px"}),n.append(i);const r=document.createElement("input");return r.type="number",r.step=String(t),r.value="0",Object.assign(r.style,{flex:"1",background:"rgba(0,0,0,0.4)",border:"1px solid rgba(136,221,255,0.3)",borderRadius:"3px",color:"#c8f0ff",fontFamily:"monospace",fontSize:"11px",padding:"2px 5px",width:"0"}),r.addEventListener("change",o=>{o.stopPropagation(),e(parseFloat(r.value)||0)}),r.addEventListener("click",o=>o.stopPropagation()),r.addEventListener("mousedown",o=>o.stopPropagation()),r.addEventListener("keydown",o=>o.stopPropagation()),n.append(r),{row:n,input:r}},{row:Bv,input:rs}=Ri("id",1,()=>{});rs.type="text";rs.readOnly=!0;rs.style.color="#aaa";He.append(Bv);const{row:kv,input:zv}=Ri("initialT",.001,s=>Ft.activeLevel.setSelectedInitialT(s));He.append(kv);const{row:Hv,input:Gv}=Ri("initialX",.01,s=>{const t=Ft.activeLevel.selectedObject;if(!t)return;const e=t.data.railMaxX-t.data.railMinX;if(e===0)return;const n=(s-t.data.railMinX)/e;Ft.activeLevel.setSelectedInitialT(Math.max(0,Math.min(1,n)))});He.append(Hv);const{row:Vv,input:Wv}=Ri("rotX",.01,s=>{const t=Ft.activeLevel.selectedObject;t&&Ft.activeLevel.setSelectedRotation(s,t.group.rotation.y,t.group.rotation.z)});He.append(Vv);const{row:Xv,input:Yv}=Ri("rotY",.01,s=>{const t=Ft.activeLevel.selectedObject;t&&Ft.activeLevel.setSelectedRotation(t.group.rotation.x,s,t.group.rotation.z)});He.append(Xv);const{row:jv,input:qv}=Ri("rotZ",.01,s=>{const t=Ft.activeLevel.selectedObject;t&&Ft.activeLevel.setSelectedRotation(t.group.rotation.x,t.group.rotation.y,s)});He.append(jv);const{row:$v,input:Kv}=Ri("yOffset",.01,s=>Ft.activeLevel.setSelectedYOffset(s));He.append($v);const Cl=document.createElement("pre");Object.assign(Cl.style,{margin:"0",fontSize:"10px",color:"#f88",whiteSpace:"pre",pointerEvents:"none"});He.append(Cl);const Ll=(s,t,e,n,i,r)=>{const o=document.createElement("div");Object.assign(o.style,{display:"flex",alignItems:"center",gap:"6px",marginBottom:"5px",pointerEvents:"auto"});const a=document.createElement("span");a.textContent=s,Object.assign(a.style,{color:"#88ddff",fontSize:"11px",minWidth:"80px"}),o.append(a);const l=document.createElement("input");l.type="range",l.min=String(t),l.max=String(e),l.step=String(n),l.value=String(i),Object.assign(l.style,{flex:"1",cursor:"pointer",accentColor:"#88ddff"}),o.append(l);const c=document.createElement("span");return c.textContent=i.toFixed(3),Object.assign(c.style,{color:"#c8f0ff",fontSize:"11px",minWidth:"42px",textAlign:"right"}),o.append(c),l.addEventListener("input",h=>{h.stopPropagation();const u=parseFloat(l.value);c.textContent=u.toFixed(3),r(u)}),l.addEventListener("click",h=>h.stopPropagation()),l.addEventListener("mousedown",h=>h.stopPropagation()),{row:o,slider:l,valueLabel:c}},{row:Zv,slider:Mh,valueLabel:Jv}=Ll("modelScale",.05,3,.01,.6,s=>Ft.activeLevel.setSelectedModelScale(s));He.append(Zv);const{row:Qv,slider:wh,valueLabel:ty}=Ll("projScale",.05,6,.01,1.2,s=>Ft.activeLevel.setSelectedProjScale(s));He.append(Qv);const{row:ey,slider:Sh,valueLabel:ny}=Ll("lightDir Y",-5,5,.05,.3,s=>Ft.activeLevel.setShadowDirectionY(s));He.append(ey);const bi=document.createElement("button");bi.textContent="复制为初始位置配置";Object.assign(bi.style,{background:"rgba(136, 221, 255, 0.15)",border:"1px solid rgba(136, 221, 255, 0.5)",borderRadius:"4px",color:"#88ddff",fontFamily:"monospace",fontSize:"11px",padding:"5px 10px",cursor:"pointer",pointerEvents:"auto",width:"100%",marginTop:"4px"});bi.addEventListener("click",s=>{s.stopPropagation();const t=Ft.activeLevel.selectedObject;if(!t)return;const e=t.currentPose,n=a=>parseFloat(a.toFixed(4)),i=Ft.activeLevel.getShadowDirectionRawY(),o=[`      initialT: ${n(e.initialT)},`,`      initialRotationX: ${n(e.initialRotationX)},`,`      initialRotationY: ${n(e.initialRotationY)},`,`      initialRotationZ: ${n(e.initialRotationZ)},`,`      modelScale: ${n(e.modelScale)},`,`      projectionScale: ${n(e.projectionScale)},`,...e.railYOffset!==0?[`      // railY offset: ${n(e.railYOffset)} (在 railY 基础上增减)`]:[],`      // shadowDirection y: ${parseFloat(i.toFixed(3))}`].join(`
`);navigator.clipboard.writeText(o).then(()=>{bi.textContent="✓ 已复制！",setTimeout(()=>{bi.textContent="复制为初始位置配置"},1800)}).catch(()=>{bi.textContent="见下方输出",Cl.textContent+=`
--- 复制内容 ---
${o}
`})});He.append(bi);hi.append(He);Vn.append(hi);window.addEventListener("keydown",s=>{s.code==="KeyD"&&(hi.style.display=hi.style.display==="none"?"block":"none")});window.addEventListener("resize",()=>Re.updateLayout());const pe=document.createElement("div");Object.assign(pe.style,{position:"absolute",inset:"0",zIndex:"50",pointerEvents:"auto",background:"transparent"});Vn.append(pe);const il=new Rv(pe),Eu=new Iv(pe),iy=[{zh:"你睁开眼，第一眼看见的是光。",en:"When you opened your eyes, the first thing you saw was light."}],sy=[{zh:"你学会了走路。",en:"You learned to walk."},{zh:"影子，也开始学着陪伴。",en:"And your shadow learned to stay beside you."}],ry=[{zh:"有一天，你忽然想知道：光，究竟从哪里来？",en:"One day, you began to wonder: where does light truly come from?"},{zh:"也是那一天，路上多了一个同行者。",en:"That same day, someone began walking beside you."}],oy=[{zh:"你背起行囊，走进更大的世界。",en:"You shouldered your luggage and stepped into a wider world."},{zh:"光在远方，你在此处，中间是一段漫长却美丽的路。",en:"Light was far ahead. You stood here. Between them lay a long, beautiful road."}],ay=[{zh:"你曾以为，拥有就会害怕失去。",en:"You once thought having meant fearing loss."},{zh:"后来才懂，最暖的光，不是照向远方，而是照亮回家的路。",en:"Only later did you learn: the warmest light is not the one that shines far away, but the one that lights the way home."}],ly=[{zh:"原来路再远，只要有人同行，就不算长。",en:"It turned out no road is too long, as long as someone walks with you."},{zh:"后来，我们成了彼此的灯。",en:"In time, we became each other's light."},{zh:"可光越往前，影子也被拉得越长。",en:"But as the light moved on, the shadows grew longer."}],cy=[{zh:"你来时，世界把一束光交到你手里。",en:"When you arrived, the world placed a beam of light in your hands."},{zh:"你离开时，把它还给了每一个你爱过的人。",en:"When you left, you gave it back to everyone you ever loved."},{zh:"光不会消失，它只是换了地方，继续温柔地照着。",en:"Light never disappears. It simply moves somewhere else, and keeps shining softly."},{zh:"",en:""},{zh:"",en:""},{zh:"",en:""},{zh:"谢谢你，陪他走完这一生。",en:"Thank you for walking this life with him."}];yn.style.opacity="0";yn.style.transition="opacity 0.6s ease";Tn.style.opacity="0";En.style.opacity="0";let so=!1;function hy(){if(so)return;so=!0,Qe.crossfadeTo("BGM-01",1),pe.style.transition="opacity 0.5s ease-out",pe.style.opacity="1",pe.style.pointerEvents="auto",pe.style.background="#000";const s=()=>{console.log("[StartGame] entering game"),pe.style.transition="opacity 0.4s ease",pe.style.opacity="0",pe.style.pointerEvents="none",pe.style.background="transparent",yn.style.opacity="1",Tn.style.opacity="1",En.style.opacity="1",Ft.activeLevel.resume(),te.notifyGameStarted()},t=()=>{il.show(iy,s)};setTimeout(()=>{Eu.show(X("/video/chapter1start.mp4"),t,5e3)},800)}const er=new Pv(pe);er.onStart(hy);const uy=[X("/textures/baby_sheet.webp"),X("/textures/boy_sheet.webp"),X("/textures/young_sheet.webp"),X("/textures/adult_sheet.webp"),X("/textures/wife_sheet.webp"),X("/textures/old_sheet.webp"),X("/textures/dog_sheet.webp"),X("/textures/cat_sheet.webp"),X("/textures/walker_sheet.webp"),X("/textures/wall.webp"),X("/textures/gate_new.webp"),X("/textures/ui/rotate_up.webp"),X("/textures/ui/rotate_down.webp"),X("/textures/ui/rotate_left.webp"),X("/textures/ui/rotate_right.webp"),X("/ui/righton.webp"),X("/ui/lefton.webp"),X("/chapter1_bg.jpg"),X("/chapter2_bg.jpg"),X("/chapter3_bg.jpg"),X("/chapter4_bg.jpg"),X("/chapter5_bg.jpg"),X("/chapter6_bg.jpg"),X("/models/1_1_trapezoid.glb"),X("/models/1_2.glb"),X("/models/bear.glb"),X("/models/suitcase.glb"),X("/models/train.glb"),X("/models/glass.glb"),X("/models/balloon.glb"),X("/models/telescope.glb"),X("/models/4_2_2.glb"),X("/models/cake.glb"),X("/models/plant.glb"),X("/models/watch.glb"),X("/models/candle.glb"),X("/bgm/BGM-00.m4a"),X("/bgm/BGM-01.m4a"),X("/bgm/BGM-02.m4a"),X("/bgm/BGM-03.m4a"),X("/bgm/BGM-04.m4a"),X("/bgm/BGM-05.m4a"),X("/bgm/BGM-06.m4a"),X("/sound/wall.m4a"),X("/sound/pass.m4a"),X("/sound/connected.m4a"),X("/sound/switch.m4a"),X("/sound/click.m4a"),X("/video/chapter1start.mp4"),X("/video/chapter1end2.mp4"),X("/video/chapter2end.mp4"),X("/video/chapter3end.mp4"),X("/video/chapter4end.mp4"),X("/video/chapter5end.mp4"),X("/video/chapter6end.mp4")],dy=new Dv(uy);dy.preload(s=>{const t=Math.floor(s.fraction*100);er.updateProgress(s.fraction,`${t}%`)}).then(()=>{er.ready()});let bh=performance.now();function Au(s){const t=Math.min(.033,(s-bh)/1e3);bh=s,Ft.update(t);const e=Ft.activeLevel,n=Ft.isTransitioning?null:e.selectedObject;te.setObject(n),e.config.autoFinishOnBridge&&e.isBridgeConnected?(te.setMoveVisible(!1),te.setRotationVisible(!1)):e.config.autoSelectByAction?(te.setMoveVisible(!0),te.setRotationVisible(!e.config.hideRotationPanel)):n&&(te.setMoveVisible(!n.data.disableMove),te.setRotationVisible(!n.data.disableRotate&&!e.config.hideRotationPanel)),te.syncSlider(),Re.updateLayout();const i=Ft.isTransitioning?null:e.selectedAnchor;if(i&&te.updateScreenPosition(ii.worldToScreen(i),t),Mi){const r=e.walkerWorldPosition,o=ii.worldToScreen(new P(r.x,r.y+.5,.24));te.pointArrowAt(o.x,o.y,10,-110,t)}if($i){const r=e.gateWorldPosition,o=ii.worldToScreen(new P(r.x,r.y,.16));te.pointArrowAt(o.x,o.y,0,-180,t)}if(hi.style.display!=="none"){const r=e.getDebugInfo();El.textContent=Object.entries(r).map(([c,h])=>`${c}: ${h}`).join(`
`);const o=e.selectedObject,a=(c,h)=>{document.activeElement!==c&&(c.value=parseFloat(h.toFixed(4)).toString())};if(o){const c=o.currentPose;document.activeElement!==rs&&(rs.value=o.data.id),a(zv,c.initialT);const h=o.data.railMinX+c.initialT*(o.data.railMaxX-o.data.railMinX);a(Gv,h),a(Wv,c.initialRotationX),a(Yv,c.initialRotationY),a(qv,c.initialRotationZ),a(Kv,c.railYOffset),parseFloat(Mh.value)!==c.modelScale&&(Mh.value=String(c.modelScale),Jv.textContent=c.modelScale.toFixed(3)),parseFloat(wh.value)!==c.projectionScale&&(wh.value=String(c.projectionScale),ty.textContent=c.projectionScale.toFixed(3))}else rs.value="（无选中物体）";const l=e.getShadowDirectionRawY();Math.abs(parseFloat(Sh.value)-l)>.001&&(Sh.value=String(l),ny.textContent=l.toFixed(3))}ii.render(),requestAnimationFrame(Au)}requestAnimationFrame(Au);
