/**
 * CUSTIMESH | Mesh Modulu Rev16 & Kalinlik Analizi v4.8
 */
window.cmMeshView=(()=>{const E=new WeakMap();return function(m,on){
 const mat=m&&m.material;if(!mat)return;mat.wireframe=false;let e=E.get(m);
 if(!on){if(e){m.remove(e);try{e.material.dispose();}catch(x){}E.delete(m);}
  if(mat.__po){mat.polygonOffset=mat.__po[0];mat.polygonOffsetFactor=mat.__po[1];mat.polygonOffsetUnits=mat.__po[2];delete mat.__po;mat.needsUpdate=true;}return;}
 if(e)return;
 mat.__po=[mat.polygonOffset,mat.polygonOffsetFactor,mat.polygonOffsetUnits];mat.polygonOffset=true;mat.polygonOffsetFactor=1;mat.polygonOffsetUnits=1;mat.needsUpdate=true;
 e=m.clone(false);e.userData={};e.position.set(0,0,0);e.quaternion.set(0,0,0,1);e.scale.set(1,1,1);e.updateMatrix();
 const em=mat.clone();em.vertexColors=false;em.wireframe=true;em.polygonOffset=false;em.transparent=true;em.opacity=.6;em.depthWrite=false;
 if(em.color)em.color.set(0x0f1a24);if(em.emissive)em.emissive.set(0x0f1a24);if('metalness' in em)em.metalness=0;if('roughness' in em)em.roughness=1;
 e.material=em;e.raycast=function(){};e.renderOrder=2;m.add(e);E.set(m,e);};})();

(()=>{/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Ve={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2};var Xl=0,_o=1,ql=2;var vo=1,Yl=2,_n=3,Cn=0,Ie=1,Je=2,Rn=0,si=1,xo=2,yo=3,Mo=4,Zl=5,Gn=100,Jl=101,$l=102,Kl=103,jl=104,Ql=200,tc=201,ec=202,nc=203,hr=204,ur=205,ic=206,sc=207,rc=208,ac=209,oc=210,lc=211,cc=212,hc=213,uc=214,Dr=0,Lr=1,Ur=2,ri=3,Nr=4,Fr=5,Or=6,Br=7,So=0,dc=1,fc=2,In=0,pc=1,mc=2,gc=3,zr=4,_c=5,vc=6,xc=7;var bo=300,ci=301,hi=302,kr=303,Vr=304,Ds=306,dr=1e3,Hn=1001,fr=1002,Ze=1003,yc=1004;var Ls=1005;var en=1006,Hr=1007;var Yn=1008;var an=1009,Eo=1010,To=1011,Hi=1012,Gr=1013,Zn=1014,vn=1015,Gi=1016,Wr=1017,Xr=1018,Wi=1020,wo=35902,Ao=35899,Co=1021,Ro=1022,$e=1023,Di=1026,Xi=1027,Io=1028,qr=1029,Po=1030,Yr=1031;var Zr=1033,Us=33776,Ns=33777,Fs=33778,Os=33779,Jr=35840,$r=35841,Kr=35842,jr=35843,Qr=36196,ta=37492,ea=37496,na=37808,ia=37809,sa=37810,ra=37811,aa=37812,oa=37813,la=37814,ca=37815,ha=37816,ua=37817,da=37818,fa=37819,pa=37820,ma=37821,ga=36492,_a=36494,va=36495,xa=36283,ya=36284,Ma=36285,Sa=36286;var us=2300,pr=2301,cr=2302,oo=2400,lo=2401,co=2402;var Mc=3200,Sc=3201;var Do=0,bc=1,Pn="",Ce="srgb",ai="srgb-linear",ds="linear",jt="srgb";var ii=7680;var ho=519,Ec=512,Tc=513,wc=514,Lo=515,Ac=516,Cc=517,Rc=518,Ic=519,uo=35044;var Uo="300 es",tn=2e3,fs=2001;var pn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Se=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bl=1234567,cs=Math.PI/180,Li=180/Math.PI;function qi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Se[i&255]+Se[i>>8&255]+Se[i>>16&255]+Se[i>>24&255]+"-"+Se[t&255]+Se[t>>8&255]+"-"+Se[t>>16&15|64]+Se[t>>24&255]+"-"+Se[e&63|128]+Se[e>>8&255]+"-"+Se[e>>16&255]+Se[e>>24&255]+Se[n&255]+Se[n>>8&255]+Se[n>>16&255]+Se[n>>24&255]).toLowerCase()}function Gt(i,t,e){return Math.max(t,Math.min(e,i))}function No(i,t){return(i%t+t)%t}function Uh(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Nh(i,t,e){return i!==t?(e-i)/(t-i):0}function hs(i,t,e){return(1-e)*i+e*t}function Fh(i,t,e,n){return hs(i,t,1-Math.exp(-e*n))}function Oh(i,t=1){return t-Math.abs(No(i,t*2)-t)}function Bh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function zh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function kh(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Vh(i,t){return i+Math.random()*(t-i)}function Hh(i){return i*(.5-Math.random())}function Gh(i){i!==void 0&&(bl=i);let t=bl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Wh(i){return i*cs}function Xh(i){return i*Li}function qh(i){return(i&i-1)===0&&i!==0}function Yh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Zh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Jh(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),u=a((t+n)/2),h=r((t-n)/2),f=a((t-n)/2),p=r((n-t)/2),_=a((n-t)/2);switch(s){case"XYX":i.set(o*u,c*h,c*f,o*l);break;case"YZY":i.set(c*f,o*u,c*h,o*l);break;case"ZXZ":i.set(c*h,c*f,o*u,o*l);break;case"XZX":i.set(o*u,c*_,c*p,o*l);break;case"YXY":i.set(c*p,o*u,c*_,o*l);break;case"ZYZ":i.set(c*_,c*p,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ii(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ae(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Le={DEG2RAD:cs,RAD2DEG:Li,generateUUID:qi,clamp:Gt,euclideanModulo:No,mapLinear:Uh,inverseLerp:Nh,lerp:hs,damp:Fh,pingpong:Oh,smoothstep:Bh,smootherstep:zh,randInt:kh,randFloat:Vh,randFloatSpread:Hh,seededRandom:Gh,degToRad:Wh,radToDeg:Xh,isPowerOfTwo:qh,ceilPowerOfTwo:Yh,floorPowerOfTwo:Zh,setQuaternionFromProperEuler:Jh,normalize:Ae,denormalize:Ii},Dt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Gt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Be=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3],f=r[a+0],p=r[a+1],_=r[a+2],x=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=_,t[e+3]=x;return}if(h!==x||c!==f||l!==p||u!==_){let m=1-o,d=c*f+l*p+u*_+h*x,w=d>=0?1:-1,E=1-d*d;if(E>Number.EPSILON){let R=Math.sqrt(E),A=Math.atan2(R,d*w);m=Math.sin(m*A)/R,o=Math.sin(o*A)/R}let S=o*w;if(c=c*m+f*S,l=l*m+p*S,u=u*m+_*S,h=h*m+x*S,m===1-o){let R=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=R,l*=R,u*=R,h*=R}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[a],f=r[a+1],p=r[a+2],_=r[a+3];return t[e]=o*_+u*h+c*p-l*f,t[e+1]=c*_+u*f+l*h-o*p,t[e+2]=l*_+u*p+o*f-c*h,t[e+3]=u*_-o*h-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),h=o(r/2),f=c(n/2),p=c(s/2),_=c(r/2);switch(a){case"XYZ":this._x=f*u*h+l*p*_,this._y=l*p*h-f*u*_,this._z=l*u*_+f*p*h,this._w=l*u*h-f*p*_;break;case"YXZ":this._x=f*u*h+l*p*_,this._y=l*p*h-f*u*_,this._z=l*u*_-f*p*h,this._w=l*u*h+f*p*_;break;case"ZXY":this._x=f*u*h-l*p*_,this._y=l*p*h+f*u*_,this._z=l*u*_+f*p*h,this._w=l*u*h-f*p*_;break;case"ZYX":this._x=f*u*h-l*p*_,this._y=l*p*h+f*u*_,this._z=l*u*_-f*p*h,this._w=l*u*h+f*p*_;break;case"YZX":this._x=f*u*h+l*p*_,this._y=l*p*h+f*u*_,this._z=l*u*_-f*p*h,this._w=l*u*h-f*p*_;break;case"XZY":this._x=f*u*h-l*p*_,this._y=l*p*h-f*u*_,this._z=l*u*_+f*p*h,this._w=l*u*h+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],h=e[10],f=n+o+h;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>h){let p=2*Math.sqrt(1+n-o-h);this._w=(u-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>h){let p=2*Math.sqrt(1+o-n-h);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+u)/p}else{let p=2*Math.sqrt(1+h-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Gt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(El.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(El.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),u=2*(o*e-r*s),h=2*(r*n-a*e);return this.x=e+c*l+a*h-o*u,this.y=n+c*u+o*l-r*h,this.z=s+c*h+r*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this.z=Gt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this.z=Gt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return za.copy(this).projectOnVector(t),this.sub(za)}reflect(t){return this.sub(za.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Gt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},za=new U,El=new Be,Nt=class i{constructor(t,e,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],p=n[5],_=n[8],x=s[0],m=s[3],d=s[6],w=s[1],E=s[4],S=s[7],R=s[2],A=s[5],P=s[8];return r[0]=a*x+o*w+c*R,r[3]=a*m+o*E+c*A,r[6]=a*d+o*S+c*P,r[1]=l*x+u*w+h*R,r[4]=l*m+u*E+h*A,r[7]=l*d+u*S+h*P,r[2]=f*x+p*w+_*R,r[5]=f*m+p*E+_*A,r[8]=f*d+p*S+_*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],h=u*a-o*l,f=o*c-u*r,p=l*r-a*c,_=e*h+n*f+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/_;return t[0]=h*x,t[1]=(s*l-u*n)*x,t[2]=(o*n-s*a)*x,t[3]=f*x,t[4]=(u*e-s*c)*x,t[5]=(s*r-o*e)*x,t[6]=p*x,t[7]=(n*c-l*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ka.makeScale(t,e)),this}rotate(t){return this.premultiply(ka.makeRotation(-t)),this}translate(t,e){return this.premultiply(ka.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ka=new Nt;function Fo(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ps(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Pc(){let i=ps("canvas");return i.style.display="block",i}var Tl={};function Ui(i){i in Tl||(Tl[i]=!0,console.warn(i))}function Dc(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var wl=new Nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Al=new Nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $h(){let i={enabled:!0,workingColorSpace:ai,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===jt&&(s.r=An(s.r),s.g=An(s.g),s.b=An(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===jt&&(s.r=Pi(s.r),s.g=Pi(s.g),s.b=Pi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Pn?ds:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ui("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ui("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ai]:{primaries:t,whitePoint:n,transfer:ds,toXYZ:wl,fromXYZ:Al,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ce},outputColorSpaceConfig:{drawingBufferColorSpace:Ce}},[Ce]:{primaries:t,whitePoint:n,transfer:jt,toXYZ:wl,fromXYZ:Al,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ce}}}),i}var Yt=$h();function An(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Pi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var vi,mr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{vi===void 0&&(vi=ps("canvas")),vi.width=t.width,vi.height=t.height;let s=vi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=vi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ps("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=An(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(An(e[n]/255)*255):e[n]=An(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Kh=0,Ni=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kh++}),this.uuid=qi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Va(s[a].image)):r.push(Va(s[a]))}else r=Va(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Va(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?mr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var jh=0,Ha=new U,ze=class i extends pn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Hn,s=Hn,r=en,a=Yn,o=$e,c=an,l=i.DEFAULT_ANISOTROPY,u=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jh++}),this.uuid=qi(),this.name="",this.source=new Ni(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ha).x}get height(){return this.source.getSize(Ha).y}get depth(){return this.source.getSize(Ha).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==bo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case dr:t.x=t.x-Math.floor(t.x);break;case Hn:t.x=t.x<0?0:1;break;case fr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case dr:t.y=t.y-Math.floor(t.y);break;case Hn:t.y=t.y<0?0:1;break;case fr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ze.DEFAULT_IMAGE=null;ze.DEFAULT_MAPPING=bo;ze.DEFAULT_ANISOTROPY=1;var ce=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],u=c[4],h=c[8],f=c[1],p=c[5],_=c[9],x=c[2],m=c[6],d=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(_+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(l+1)/2,S=(p+1)/2,R=(d+1)/2,A=(u+f)/4,P=(h+x)/4,F=(_+m)/4;return E>S&&E>R?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=A/n,r=P/n):S>R?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=A/s,r=F/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=P/r,s=F/r),this.set(n,s,r,e),this}let w=Math.sqrt((m-_)*(m-_)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(m-_)/w,this.y=(h-x)/w,this.z=(f-u)/w,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this.z=Gt(this.z,t.z,e.z),this.w=Gt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this.z=Gt(this.z,t,e),this.w=Gt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},gr=class extends pn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);let s={width:t,height:e,depth:n.depth},r=new ze(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ni(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},mn=class extends gr{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ms=class extends ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var _r=class extends ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var nn=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ke.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ke.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ke.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ke):Ke.fromBufferAttribute(r,a),Ke.applyMatrix4(t.matrixWorld),this.expandByPoint(Ke);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Xs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xs.copy(n.boundingBox)),Xs.applyMatrix4(t.matrixWorld),this.union(Xs)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ke),Ke.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(rs),qs.subVectors(this.max,rs),xi.subVectors(t.a,rs),yi.subVectors(t.b,rs),Mi.subVectors(t.c,rs),Nn.subVectors(yi,xi),Fn.subVectors(Mi,yi),Qn.subVectors(xi,Mi);let e=[0,-Nn.z,Nn.y,0,-Fn.z,Fn.y,0,-Qn.z,Qn.y,Nn.z,0,-Nn.x,Fn.z,0,-Fn.x,Qn.z,0,-Qn.x,-Nn.y,Nn.x,0,-Fn.y,Fn.x,0,-Qn.y,Qn.x,0];return!Ga(e,xi,yi,Mi,qs)||(e=[1,0,0,0,1,0,0,0,1],!Ga(e,xi,yi,Mi,qs))?!1:(Ys.crossVectors(Nn,Fn),e=[Ys.x,Ys.y,Ys.z],Ga(e,xi,yi,Mi,qs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ke).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ke).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Mn=[new U,new U,new U,new U,new U,new U,new U,new U],Ke=new U,Xs=new nn,xi=new U,yi=new U,Mi=new U,Nn=new U,Fn=new U,Qn=new U,rs=new U,qs=new U,Ys=new U,ti=new U;function Ga(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ti.fromArray(i,r);let o=s.x*Math.abs(ti.x)+s.y*Math.abs(ti.y)+s.z*Math.abs(ti.z),c=t.dot(ti),l=e.dot(ti),u=n.dot(ti);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var Qh=new nn,as=new U,Wa=new U,Fi=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Qh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;as.subVectors(t,this.center);let e=as.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(as,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Wa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(as.copy(t.center).add(Wa)),this.expandByPoint(as.copy(t.center).sub(Wa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Sn=new U,Xa=new U,Zs=new U,On=new U,qa=new U,Js=new U,Ya=new U,gs=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Sn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Sn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Sn.copy(this.origin).addScaledVector(this.direction,e),Sn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Xa.copy(t).add(e).multiplyScalar(.5),Zs.copy(e).sub(t).normalize(),On.copy(this.origin).sub(Xa);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Zs),o=On.dot(this.direction),c=-On.dot(Zs),l=On.lengthSq(),u=Math.abs(1-a*a),h,f,p,_;if(u>0)if(h=a*c-o,f=a*o-c,_=r*u,h>=0)if(f>=-_)if(f<=_){let x=1/u;h*=x,f*=x,p=h*(h+a*f+2*o)+f*(a*h+f+2*c)+l}else f=r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+l;else f<=-_?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-c),r),p=-h*h+f*(f+2*c)+l):f<=_?(h=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-c),r),p=-h*h+f*(f+2*c)+l);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Xa).addScaledVector(Zs,f),p}intersectSphere(t,e){Sn.subVectors(t.center,this.origin);let n=Sn.dot(this.direction),s=Sn.dot(Sn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Sn)!==null}intersectTriangle(t,e,n,s,r){qa.subVectors(e,t),Js.subVectors(n,t),Ya.crossVectors(qa,Js);let a=this.direction.dot(Ya),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;On.subVectors(this.origin,t);let c=o*this.direction.dot(Js.crossVectors(On,Js));if(c<0)return null;let l=o*this.direction.dot(qa.cross(On));if(l<0||c+l>a)return null;let u=-o*On.dot(Ya);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ue=class i{constructor(t,e,n,s,r,a,o,c,l,u,h,f,p,_,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,u,h,f,p,_,x,m)}set(t,e,n,s,r,a,o,c,l,u,h,f,p,_,x,m){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=_,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Si.setFromMatrixColumn(t,0).length(),r=1/Si.setFromMatrixColumn(t,1).length(),a=1/Si.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let f=a*u,p=a*h,_=o*u,x=o*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=p+_*l,e[5]=f-x*l,e[9]=-o*c,e[2]=x-f*l,e[6]=_+p*l,e[10]=a*c}else if(t.order==="YXZ"){let f=c*u,p=c*h,_=l*u,x=l*h;e[0]=f+x*o,e[4]=_*o-p,e[8]=a*l,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=p*o-_,e[6]=x+f*o,e[10]=a*c}else if(t.order==="ZXY"){let f=c*u,p=c*h,_=l*u,x=l*h;e[0]=f-x*o,e[4]=-a*h,e[8]=_+p*o,e[1]=p+_*o,e[5]=a*u,e[9]=x-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let f=a*u,p=a*h,_=o*u,x=o*h;e[0]=c*u,e[4]=_*l-p,e[8]=f*l+x,e[1]=c*h,e[5]=x*l+f,e[9]=p*l-_,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let f=a*c,p=a*l,_=o*c,x=o*l;e[0]=c*u,e[4]=x-f*h,e[8]=_*h+p,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=p*h+_,e[10]=f-x*h}else if(t.order==="XZY"){let f=a*c,p=a*l,_=o*c,x=o*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=f*h+x,e[5]=a*u,e[9]=p*h-_,e[2]=_*h-p,e[6]=o*u,e[10]=x*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(tu,t,eu)}lookAt(t,e,n){let s=this.elements;return Fe.subVectors(t,e),Fe.lengthSq()===0&&(Fe.z=1),Fe.normalize(),Bn.crossVectors(n,Fe),Bn.lengthSq()===0&&(Math.abs(n.z)===1?Fe.x+=1e-4:Fe.z+=1e-4,Fe.normalize(),Bn.crossVectors(n,Fe)),Bn.normalize(),$s.crossVectors(Fe,Bn),s[0]=Bn.x,s[4]=$s.x,s[8]=Fe.x,s[1]=Bn.y,s[5]=$s.y,s[9]=Fe.y,s[2]=Bn.z,s[6]=$s.z,s[10]=Fe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],p=n[13],_=n[2],x=n[6],m=n[10],d=n[14],w=n[3],E=n[7],S=n[11],R=n[15],A=s[0],P=s[4],F=s[8],M=s[12],y=s[1],C=s[5],z=s[9],H=s[13],q=s[2],Y=s[6],G=s[10],Q=s[14],k=s[3],nt=s[7],ct=s[11],St=s[15];return r[0]=a*A+o*y+c*q+l*k,r[4]=a*P+o*C+c*Y+l*nt,r[8]=a*F+o*z+c*G+l*ct,r[12]=a*M+o*H+c*Q+l*St,r[1]=u*A+h*y+f*q+p*k,r[5]=u*P+h*C+f*Y+p*nt,r[9]=u*F+h*z+f*G+p*ct,r[13]=u*M+h*H+f*Q+p*St,r[2]=_*A+x*y+m*q+d*k,r[6]=_*P+x*C+m*Y+d*nt,r[10]=_*F+x*z+m*G+d*ct,r[14]=_*M+x*H+m*Q+d*St,r[3]=w*A+E*y+S*q+R*k,r[7]=w*P+E*C+S*Y+R*nt,r[11]=w*F+E*z+S*G+R*ct,r[15]=w*M+E*H+S*Q+R*St,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],h=t[6],f=t[10],p=t[14],_=t[3],x=t[7],m=t[11],d=t[15];return _*(+r*c*h-s*l*h-r*o*f+n*l*f+s*o*p-n*c*p)+x*(+e*c*p-e*l*f+r*a*f-s*a*p+s*l*u-r*c*u)+m*(+e*l*h-e*o*p-r*a*h+n*a*p+r*o*u-n*l*u)+d*(-s*o*u-e*c*h+e*o*f+s*a*h-n*a*f+n*c*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],h=t[9],f=t[10],p=t[11],_=t[12],x=t[13],m=t[14],d=t[15],w=h*m*l-x*f*l+x*c*p-o*m*p-h*c*d+o*f*d,E=_*f*l-u*m*l-_*c*p+a*m*p+u*c*d-a*f*d,S=u*x*l-_*h*l+_*o*p-a*x*p-u*o*d+a*h*d,R=_*h*c-u*x*c-_*o*f+a*x*f+u*o*m-a*h*m,A=e*w+n*E+s*S+r*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/A;return t[0]=w*P,t[1]=(x*f*r-h*m*r-x*s*p+n*m*p+h*s*d-n*f*d)*P,t[2]=(o*m*r-x*c*r+x*s*l-n*m*l-o*s*d+n*c*d)*P,t[3]=(h*c*r-o*f*r-h*s*l+n*f*l+o*s*p-n*c*p)*P,t[4]=E*P,t[5]=(u*m*r-_*f*r+_*s*p-e*m*p-u*s*d+e*f*d)*P,t[6]=(_*c*r-a*m*r-_*s*l+e*m*l+a*s*d-e*c*d)*P,t[7]=(a*f*r-u*c*r+u*s*l-e*f*l-a*s*p+e*c*p)*P,t[8]=S*P,t[9]=(_*h*r-u*x*r-_*n*p+e*x*p+u*n*d-e*h*d)*P,t[10]=(a*x*r-_*o*r+_*n*l-e*x*l-a*n*d+e*o*d)*P,t[11]=(u*o*r-a*h*r-u*n*l+e*h*l+a*n*p-e*o*p)*P,t[12]=R*P,t[13]=(u*x*s-_*h*s+_*n*f-e*x*f-u*n*m+e*h*m)*P,t[14]=(_*o*s-a*x*s-_*n*c+e*x*c+a*n*m-e*o*m)*P,t[15]=(a*h*s-u*o*s+u*n*c-e*h*c-a*n*f+e*o*f)*P,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,u=a+a,h=o+o,f=r*l,p=r*u,_=r*h,x=a*u,m=a*h,d=o*h,w=c*l,E=c*u,S=c*h,R=n.x,A=n.y,P=n.z;return s[0]=(1-(x+d))*R,s[1]=(p+S)*R,s[2]=(_-E)*R,s[3]=0,s[4]=(p-S)*A,s[5]=(1-(f+d))*A,s[6]=(m+w)*A,s[7]=0,s[8]=(_+E)*P,s[9]=(m-w)*P,s[10]=(1-(f+x))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Si.set(s[0],s[1],s[2]).length(),a=Si.set(s[4],s[5],s[6]).length(),o=Si.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],je.copy(this);let l=1/r,u=1/a,h=1/o;return je.elements[0]*=l,je.elements[1]*=l,je.elements[2]*=l,je.elements[4]*=u,je.elements[5]*=u,je.elements[6]*=u,je.elements[8]*=h,je.elements[9]*=h,je.elements[10]*=h,e.setFromRotationMatrix(je),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=tn,c=!1){let l=this.elements,u=2*r/(e-t),h=2*r/(n-s),f=(e+t)/(e-t),p=(n+s)/(n-s),_,x;if(c)_=r/(a-r),x=a*r/(a-r);else if(o===tn)_=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===fs)_=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=tn,c=!1){let l=this.elements,u=2/(e-t),h=2/(n-s),f=-(e+t)/(e-t),p=-(n+s)/(n-s),_,x;if(c)_=1/(a-r),x=a/(a-r);else if(o===tn)_=-2/(a-r),x=-(a+r)/(a-r);else if(o===fs)_=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=_,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Si=new U,je=new ue,tu=new U(0,0,0),eu=new U(1,1,1),Bn=new U,$s=new U,Fe=new U,Cl=new ue,Rl=new Be,sn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Cl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Cl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Rl.setFromEuler(this),this.setFromQuaternion(Rl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};sn.DEFAULT_ORDER="XYZ";var Oi=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},nu=0,Il=new U,bi=new Be,bn=new ue,Ks=new U,os=new U,iu=new U,su=new Be,Pl=new U(1,0,0),Dl=new U(0,1,0),Ll=new U(0,0,1),Ul={type:"added"},ru={type:"removed"},Ei={type:"childadded",child:null},Za={type:"childremoved",child:null},Re=class i extends pn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nu++}),this.uuid=qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new U,e=new sn,n=new Be,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ue},normalMatrix:{value:new Nt}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Oi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return bi.setFromAxisAngle(t,e),this.quaternion.multiply(bi),this}rotateOnWorldAxis(t,e){return bi.setFromAxisAngle(t,e),this.quaternion.premultiply(bi),this}rotateX(t){return this.rotateOnAxis(Pl,t)}rotateY(t){return this.rotateOnAxis(Dl,t)}rotateZ(t){return this.rotateOnAxis(Ll,t)}translateOnAxis(t,e){return Il.copy(t).applyQuaternion(this.quaternion),this.position.add(Il.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Pl,t)}translateY(t){return this.translateOnAxis(Dl,t)}translateZ(t){return this.translateOnAxis(Ll,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ks.copy(t):Ks.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(os,Ks,this.up):bn.lookAt(Ks,os,this.up),this.quaternion.setFromRotationMatrix(bn),s&&(bn.extractRotation(s.matrixWorld),bi.setFromRotationMatrix(bn),this.quaternion.premultiply(bi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ul),Ei.child=t,this.dispatchEvent(Ei),Ei.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ru),Za.child=t,this.dispatchEvent(Za),Za.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ul),Ei.child=t,this.dispatchEvent(Ei),Ei.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,t,iu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,su,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),h=a(t.shapes),f=a(t.skeletons),p=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Re.DEFAULT_UP=new U(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Qe=new U,En=new U,Ja=new U,Tn=new U,Ti=new U,wi=new U,Nl=new U,$a=new U,Ka=new U,ja=new U,Qa=new ce,to=new ce,eo=new ce,Vn=class i{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Qe.subVectors(t,e),s.cross(Qe);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Qe.subVectors(s,e),En.subVectors(n,e),Ja.subVectors(t,e);let a=Qe.dot(Qe),o=Qe.dot(En),c=Qe.dot(Ja),l=En.dot(En),u=En.dot(Ja),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;let f=1/h,p=(l*c-o*u)*f,_=(a*u-o*c)*f;return r.set(1-p-_,_,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Tn)===null?!1:Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Tn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Tn.x),c.addScaledVector(a,Tn.y),c.addScaledVector(o,Tn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Qa.setScalar(0),to.setScalar(0),eo.setScalar(0),Qa.fromBufferAttribute(t,e),to.fromBufferAttribute(t,n),eo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Qa,r.x),a.addScaledVector(to,r.y),a.addScaledVector(eo,r.z),a}static isFrontFacing(t,e,n,s){return Qe.subVectors(n,e),En.subVectors(t,e),Qe.cross(En).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qe.subVectors(this.c,this.b),En.subVectors(this.a,this.b),Qe.cross(En).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Ti.subVectors(s,n),wi.subVectors(r,n),$a.subVectors(t,n);let c=Ti.dot($a),l=wi.dot($a);if(c<=0&&l<=0)return e.copy(n);Ka.subVectors(t,s);let u=Ti.dot(Ka),h=wi.dot(Ka);if(u>=0&&h<=u)return e.copy(s);let f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(Ti,a);ja.subVectors(t,r);let p=Ti.dot(ja),_=wi.dot(ja);if(_>=0&&p<=_)return e.copy(r);let x=p*l-c*_;if(x<=0&&l>=0&&_<=0)return o=l/(l-_),e.copy(n).addScaledVector(wi,o);let m=u*_-p*h;if(m<=0&&h-u>=0&&p-_>=0)return Nl.subVectors(r,s),o=(h-u)/(h-u+(p-_)),e.copy(s).addScaledVector(Nl,o);let d=1/(m+x+f);return a=x*d,o=f*d,e.copy(n).addScaledVector(Ti,a).addScaledVector(wi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Lc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zn={h:0,s:0,l:0},js={h:0,s:0,l:0};function no(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Wt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ce){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Yt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Yt.workingColorSpace){if(t=No(t,1),e=Gt(e,0,1),n=Gt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=no(a,r,t+1/3),this.g=no(a,r,t),this.b=no(a,r,t-1/3)}return Yt.colorSpaceToWorking(this,s),this}setStyle(t,e=Ce){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ce){let n=Lc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=An(t.r),this.g=An(t.g),this.b=An(t.b),this}copyLinearToSRGB(t){return this.r=Pi(t.r),this.g=Pi(t.g),this.b=Pi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ce){return Yt.workingToColorSpace(be.copy(this),t),Math.round(Gt(be.r*255,0,255))*65536+Math.round(Gt(be.g*255,0,255))*256+Math.round(Gt(be.b*255,0,255))}getHexString(t=Ce){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.workingToColorSpace(be.copy(this),e);let n=be.r,s=be.g,r=be.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Yt.workingColorSpace){return Yt.workingToColorSpace(be.copy(this),e),t.r=be.r,t.g=be.g,t.b=be.b,t}getStyle(t=Ce){Yt.workingToColorSpace(be.copy(this),t);let e=be.r,n=be.g,s=be.b;return t!==Ce?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(zn),this.setHSL(zn.h+t,zn.s+e,zn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(zn),t.getHSL(js);let n=hs(zn.h,js.h,e),s=hs(zn.s,js.s,e),r=hs(zn.l,js.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},be=new Wt;Wt.NAMES=Lc;var au=0,Wn=class extends pn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:au++}),this.uuid=qi(),this.name="",this.type="Material",this.blending=si,this.side=Cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hr,this.blendDst=ur,this.blendEquation=Gn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=ri,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ho,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ii,this.stencilZFail=ii,this.stencilZPass=ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==si&&(n.blending=this.blending),this.side!==Cn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==hr&&(n.blendSrc=this.blendSrc),this.blendDst!==ur&&(n.blendDst=this.blendDst),this.blendEquation!==Gn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ri&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ho&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ii&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ii&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ii&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},_s=class extends Wn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=So,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var fe=new U,Qs=new Dt,ou=0,Ee=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ou++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=uo,this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Qs.fromBufferAttribute(this,e),Qs.applyMatrix3(t),this.setXY(e,Qs.x,Qs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ii(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ae(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ii(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ii(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ii(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ii(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),s=Ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),s=Ae(s,this.array),r=Ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==uo&&(t.usage=this.usage),t}};var vs=class extends Ee{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var xs=class extends Ee{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var fn=class extends Ee{constructor(t,e,n){super(new Float32Array(t),e,n)}},lu=0,Ye=new ue,io=new Re,Ai=new U,Oe=new nn,ls=new nn,xe=new U,gn=class i extends pn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lu++}),this.uuid=qi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Fo(t)?xs:vs)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Nt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ye.makeRotationFromQuaternion(t),this.applyMatrix4(Ye),this}rotateX(t){return Ye.makeRotationX(t),this.applyMatrix4(Ye),this}rotateY(t){return Ye.makeRotationY(t),this.applyMatrix4(Ye),this}rotateZ(t){return Ye.makeRotationZ(t),this.applyMatrix4(Ye),this}translate(t,e,n){return Ye.makeTranslation(t,e,n),this.applyMatrix4(Ye),this}scale(t,e,n){return Ye.makeScale(t,e,n),this.applyMatrix4(Ye),this}lookAt(t){return io.lookAt(t),io.updateMatrix(),this.applyMatrix4(io.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ai).negate(),this.translate(Ai.x,Ai.y,Ai.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new fn(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Oe.setFromBufferAttribute(r),this.morphTargetsRelative?(xe.addVectors(this.boundingBox.min,Oe.min),this.boundingBox.expandByPoint(xe),xe.addVectors(this.boundingBox.max,Oe.max),this.boundingBox.expandByPoint(xe)):(this.boundingBox.expandByPoint(Oe.min),this.boundingBox.expandByPoint(Oe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let n=this.boundingSphere.center;if(Oe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ls.setFromBufferAttribute(o),this.morphTargetsRelative?(xe.addVectors(Oe.min,ls.min),Oe.expandByPoint(xe),xe.addVectors(Oe.max,ls.max),Oe.expandByPoint(xe)):(Oe.expandByPoint(ls.min),Oe.expandByPoint(ls.max))}Oe.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)xe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(xe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)xe.fromBufferAttribute(o,l),c&&(Ai.fromBufferAttribute(t,l),xe.add(Ai)),s=Math.max(s,n.distanceToSquared(xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ee(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let F=0;F<n.count;F++)o[F]=new U,c[F]=new U;let l=new U,u=new U,h=new U,f=new Dt,p=new Dt,_=new Dt,x=new U,m=new U;function d(F,M,y){l.fromBufferAttribute(n,F),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,y),f.fromBufferAttribute(r,F),p.fromBufferAttribute(r,M),_.fromBufferAttribute(r,y),u.sub(l),h.sub(l),p.sub(f),_.sub(f);let C=1/(p.x*_.y-_.x*p.y);isFinite(C)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(C),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(C),o[F].add(x),o[M].add(x),o[y].add(x),c[F].add(m),c[M].add(m),c[y].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let F=0,M=w.length;F<M;++F){let y=w[F],C=y.start,z=y.count;for(let H=C,q=C+z;H<q;H+=3)d(t.getX(H+0),t.getX(H+1),t.getX(H+2))}let E=new U,S=new U,R=new U,A=new U;function P(F){R.fromBufferAttribute(s,F),A.copy(R);let M=o[F];E.copy(M),E.sub(R.multiplyScalar(R.dot(M))).normalize(),S.crossVectors(A,M);let C=S.dot(c[F])<0?-1:1;a.setXYZW(F,E.x,E.y,E.z,C)}for(let F=0,M=w.length;F<M;++F){let y=w[F],C=y.start,z=y.count;for(let H=C,q=C+z;H<q;H+=3)P(t.getX(H+0)),P(t.getX(H+1)),P(t.getX(H+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ee(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new U,r=new U,a=new U,o=new U,c=new U,l=new U,u=new U,h=new U;if(t)for(let f=0,p=t.count;f<p;f+=3){let _=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)xe.fromBufferAttribute(t,e),xe.normalize(),t.setXYZ(e,xe.x,xe.y,xe.z)}toNonIndexed(){function t(o,c){let l=o.array,u=o.itemSize,h=o.normalized,f=new l.constructor(c.length*u),p=0,_=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?p=c[x]*o.data.stride+o.offset:p=c[x]*u;for(let d=0;d<u;d++)f[_++]=l[p++]}return new Ee(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){let f=l[u],p=t(f,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){let p=l[h];u.push(p.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(e))}let r=t.morphAttributes;for(let l in r){let u=[],h=r[l];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,u=a.length;l<u;l++){let h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fl=new ue,ei=new gs,tr=new Fi,Ol=new U,er=new U,nr=new U,ir=new U,so=new U,sr=new U,Bl=new U,rr=new U,De=class extends Re{constructor(t=new gn,e=new _s){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){sr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=o[c],h=r[c];u!==0&&(so.fromBufferAttribute(h,t),a?sr.addScaledVector(so,u):sr.addScaledVector(so.sub(e),u))}e.add(sr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),tr.copy(n.boundingSphere),tr.applyMatrix4(r),ei.copy(t.ray).recast(t.near),!(tr.containsPoint(ei.origin)===!1&&(ei.intersectSphere(tr,Ol)===null||ei.origin.distanceToSquared(Ol)>(t.far-t.near)**2))&&(Fl.copy(r).invert(),ei.copy(t.ray).applyMatrix4(Fl),!(n.boundingBox!==null&&ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ei)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=f.length;_<x;_++){let m=f[_],d=a[m.materialIndex],w=Math.max(m.start,p.start),E=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=w,R=E;S<R;S+=3){let A=o.getX(S),P=o.getX(S+1),F=o.getX(S+2);s=ar(this,d,t,n,l,u,h,A,P,F),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=_,d=x;m<d;m+=3){let w=o.getX(m),E=o.getX(m+1),S=o.getX(m+2);s=ar(this,a,t,n,l,u,h,w,E,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,x=f.length;_<x;_++){let m=f[_],d=a[m.materialIndex],w=Math.max(m.start,p.start),E=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let S=w,R=E;S<R;S+=3){let A=S,P=S+1,F=S+2;s=ar(this,d,t,n,l,u,h,A,P,F),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=_,d=x;m<d;m+=3){let w=m,E=m+1,S=m+2;s=ar(this,a,t,n,l,u,h,w,E,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function cu(i,t,e,n,s,r,a,o){let c;if(t.side===Ie?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Cn,o),c===null)return null;rr.copy(o),rr.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(rr);return l<e.near||l>e.far?null:{distance:l,point:rr.clone(),object:i}}function ar(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,er),i.getVertexPosition(c,nr),i.getVertexPosition(l,ir);let u=cu(i,t,e,n,er,nr,ir,Bl);if(u){let h=new U;Vn.getBarycoord(Bl,er,nr,ir,h),s&&(u.uv=Vn.getInterpolatedAttribute(s,o,c,l,h,new Dt)),r&&(u.uv1=Vn.getInterpolatedAttribute(r,o,c,l,h,new Dt)),a&&(u.normal=Vn.getInterpolatedAttribute(a,o,c,l,h,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:c,c:l,normal:new U,materialIndex:0};Vn.getNormal(er,nr,ir,f.normal),u.face=f,u.barycoord=h}return u}var Bi=class i extends gn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],u=[],h=[],f=0,p=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,s,a,2),_("x","z","y",1,-1,t,n,-e,s,a,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new fn(l,3)),this.setAttribute("normal",new fn(u,3)),this.setAttribute("uv",new fn(h,2));function _(x,m,d,w,E,S,R,A,P,F,M){let y=S/P,C=R/F,z=S/2,H=R/2,q=A/2,Y=P+1,G=F+1,Q=0,k=0,nt=new U;for(let ct=0;ct<G;ct++){let St=ct*C-H;for(let Ft=0;Ft<Y;Ft++){let qt=Ft*y-z;nt[x]=qt*w,nt[m]=St*E,nt[d]=q,l.push(nt.x,nt.y,nt.z),nt[x]=0,nt[m]=0,nt[d]=A>0?1:-1,u.push(nt.x,nt.y,nt.z),h.push(Ft/P),h.push(1-ct/F),Q+=1}}for(let ct=0;ct<F;ct++)for(let St=0;St<P;St++){let Ft=f+St+Y*ct,qt=f+St+Y*(ct+1),te=f+(St+1)+Y*(ct+1),Vt=f+(St+1)+Y*ct;c.push(Ft,qt,Vt),c.push(qt,te,Vt),k+=6}o.addGroup(p,k,M),p+=k,f+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ui(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Te(i){let t={};for(let e=0;e<i.length;e++){let n=ui(i[e]);for(let s in n)t[s]=n[s]}return t}function hu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Oo(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}var Uc={clone:ui,merge:Te},uu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,du=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,rn=class extends Wn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uu,this.fragmentShader=du,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ui(t.uniforms),this.uniformsGroups=hu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},ys=class extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},kn=new U,zl=new Dt,kl=new Dt,Me=class extends ys{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Li*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(cs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Li*2*Math.atan(Math.tan(cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(kn.x,kn.y).multiplyScalar(-t/kn.z),kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(kn.x,kn.y).multiplyScalar(-t/kn.z)}getViewSize(t,e){return this.getViewBounds(t,zl,kl),e.subVectors(kl,zl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(cs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ci=-90,Ri=1,vr=class extends Re{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Me(Ci,Ri,t,e);s.layers=this.layers,this.add(s);let r=new Me(Ci,Ri,t,e);r.layers=this.layers,this.add(r);let a=new Me(Ci,Ri,t,e);a.layers=this.layers,this.add(a);let o=new Me(Ci,Ri,t,e);o.layers=this.layers,this.add(o);let c=new Me(Ci,Ri,t,e);c.layers=this.layers,this.add(c);let l=new Me(Ci,Ri,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===tn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===fs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,f,p),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Ms=class extends ze{constructor(t=[],e=ci,n,s,r,a,o,c,l,u){super(t,e,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},xr=class extends mn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ms(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Bi(5,5,5),r=new rn({name:"CubemapFromEquirect",uniforms:ui(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ie,blending:Rn});r.uniforms.tEquirect.value=e;let a=new De(s,r),o=e.minFilter;return e.minFilter===Yn&&(e.minFilter=en),new vr(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},wn=class extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}},fu={type:"move"},zi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),d=this._getHandJoint(l,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,_=.005;l.inputState.pinching&&f>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(fu)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new wn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var Ss=class extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var ro=new U,pu=new U,mu=new Nt,dn=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ro.subVectors(n,e).cross(pu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(ro),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||mu.getNormalMatrix(t),s=this.coplanarPoint(ro).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ni=new Fi,gu=new Dt(.5,.5),or=new U,ki=class{constructor(t=new dn,e=new dn,n=new dn,s=new dn,r=new dn,a=new dn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=tn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],h=r[5],f=r[6],p=r[7],_=r[8],x=r[9],m=r[10],d=r[11],w=r[12],E=r[13],S=r[14],R=r[15];if(s[0].setComponents(l-a,p-u,d-_,R-w).normalize(),s[1].setComponents(l+a,p+u,d+_,R+w).normalize(),s[2].setComponents(l+o,p+h,d+x,R+E).normalize(),s[3].setComponents(l-o,p-h,d-x,R-E).normalize(),n)s[4].setComponents(c,f,m,S).normalize(),s[5].setComponents(l-c,p-f,d-m,R-S).normalize();else if(s[4].setComponents(l-c,p-f,d-m,R-S).normalize(),e===tn)s[5].setComponents(l+c,p+f,d+m,R+S).normalize();else if(e===fs)s[5].setComponents(c,f,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ni.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ni.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ni)}intersectsSprite(t){ni.center.set(0,0,0);let e=gu.distanceTo(t.center);return ni.radius=.7071067811865476+e,ni.applyMatrix4(t.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(or.x=s.normal.x>0?t.max.x:t.min.x,or.y=s.normal.y>0?t.max.y:t.min.y,or.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(or)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var bs=class extends ze{constructor(t,e,n=Zn,s,r,a,o=Ze,c=Ze,l,u=Di,h=1){if(u!==Di&&u!==Xi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:h};super(f,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ni(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Es=class extends ze{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var Ts=class i extends gn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,h=t/o,f=e/c,p=[],_=[],x=[],m=[];for(let d=0;d<u;d++){let w=d*f-a;for(let E=0;E<l;E++){let S=E*h-r;_.push(S,-w,0),x.push(0,0,1),m.push(E/o),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let w=0;w<o;w++){let E=w+l*d,S=w+l*(d+1),R=w+1+l*(d+1),A=w+1+l*d;p.push(E,S,A),p.push(S,R,A)}this.setIndex(p),this.setAttribute("position",new fn(_,3)),this.setAttribute("normal",new fn(x,3)),this.setAttribute("uv",new fn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var ws=class extends Wn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Do,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var yr=class extends Wn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Mr=class extends Wn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function lr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function _u(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var oi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Sr=class extends oi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:oo,endingEnd:oo}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case lo:r=t,o=2*e-n;break;case co:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case lo:a=t,c=2*n-e;break;case co:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,_=(n-e)/(s-e),x=_*_,m=x*_,d=-f*m+2*f*x-f*_,w=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*_+1,E=(-1-p)*m+(1.5+p)*x+.5*_,S=p*m-p*x;for(let R=0;R!==o;++R)r[R]=d*a[u+R]+w*a[l+R]+E*a[c+R]+S*a[h+R];return r}},br=class extends oi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=(n-e)/(s-e),h=1-u;for(let f=0;f!==o;++f)r[f]=a[l+f]*h+a[c+f]*u;return r}},Er=class extends oi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ke=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=lr(e,this.TimeBufferType),this.values=lr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:lr(t.times,Array),values:lr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Er(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new br(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Sr(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case us:e=this.InterpolantFactoryMethodDiscrete;break;case pr:e=this.InterpolantFactoryMethodLinear;break;case cr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return us;case this.InterpolantFactoryMethodLinear:return pr;case this.InterpolantFactoryMethodSmooth:return cr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&_u(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===cr,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],u=t[o+1];if(l!==u&&(o!==1||l!==t[0]))if(s)c=!0;else{let h=o*n,f=h-n,p=h+n;for(let _=0;_!==n;++_){let x=e[h+_];if(x!==e[f+_]||x!==e[p+_]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let h=o*n,f=a*n;for(let p=0;p!==n;++p)e[f+p]=e[h+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};ke.prototype.ValueTypeName="";ke.prototype.TimeBufferType=Float32Array;ke.prototype.ValueBufferType=Float32Array;ke.prototype.DefaultInterpolation=pr;var Xn=class extends ke{constructor(t,e,n){super(t,e,n)}};Xn.prototype.ValueTypeName="bool";Xn.prototype.ValueBufferType=Array;Xn.prototype.DefaultInterpolation=us;Xn.prototype.InterpolantFactoryMethodLinear=void 0;Xn.prototype.InterpolantFactoryMethodSmooth=void 0;var Tr=class extends ke{constructor(t,e,n,s){super(t,e,n,s)}};Tr.prototype.ValueTypeName="color";var wr=class extends ke{constructor(t,e,n,s){super(t,e,n,s)}};wr.prototype.ValueTypeName="number";var Ar=class extends oi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let u=l+o;l!==u;l+=4)Be.slerpFlat(r,0,a,l-o,a,l,c);return r}},As=class extends ke{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ar(this.times,this.values,this.getValueSize(),t)}};As.prototype.ValueTypeName="quaternion";As.prototype.InterpolantFactoryMethodSmooth=void 0;var qn=class extends ke{constructor(t,e,n){super(t,e,n)}};qn.prototype.ValueTypeName="string";qn.prototype.ValueBufferType=Array;qn.prototype.DefaultInterpolation=us;qn.prototype.InterpolantFactoryMethodLinear=void 0;qn.prototype.InterpolantFactoryMethodSmooth=void 0;var Cr=class extends ke{constructor(t,e,n,s){super(t,e,n,s)}};Cr.prototype.ValueTypeName="vector";var Rr=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){let p=l[h],_=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Nc=new Rr,Ir=class{constructor(t){this.manager=t!==void 0?t:Nc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ir.DEFAULT_MATERIAL_NAME="__DEFAULT";var Cs=class extends Re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}};var ao=new ue,Vl=new U,Hl=new U,fo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Dt(512,512),this.mapType=an,this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ki,this._frameExtents=new Dt(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Vl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Vl),Hl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Hl),e.updateMatrixWorld(),ao.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ao,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ao)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var li=class extends ys{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},po=class extends fo{constructor(){super(new li(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vi=class extends Cs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.shadow=new po}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Rs=class extends Cs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Pr=class extends Me{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Bo="\\[\\]\\.:\\/",vu=new RegExp("["+Bo+"]","g"),zo="[^"+Bo+"]",xu="[^"+Bo.replace("\\.","")+"]",yu=/((?:WC+[\/:])*)/.source.replace("WC",zo),Mu=/(WCOD+)?/.source.replace("WCOD",xu),Su=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zo),bu=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zo),Eu=new RegExp("^"+yu+Mu+Su+bu+"$"),Tu=["material","materials","bones","map"],mo=class{constructor(t,e,n){let s=n||se.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},se=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(vu,"")}static parseTrackName(t){let e=Eu.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Tu.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};se.Composite=mo;se.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};se.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};se.prototype.GetterByBindingType=[se.prototype._getValue_direct,se.prototype._getValue_array,se.prototype._getValue_arrayElement,se.prototype._getValue_toArray];se.prototype.SetterByBindingTypeAndVersioning=[[se.prototype._setValue_direct,se.prototype._setValue_direct_setNeedsUpdate,se.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[se.prototype._setValue_array,se.prototype._setValue_array_setNeedsUpdate,se.prototype._setValue_array_setMatrixWorldNeedsUpdate],[se.prototype._setValue_arrayElement,se.prototype._setValue_arrayElement_setNeedsUpdate,se.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[se.prototype._setValue_fromArray,se.prototype._setValue_fromArray_setNeedsUpdate,se.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var qg=new Float32Array(1);var Gl=new ue,Is=class{constructor(t,e,n=0,s=1/0){this.ray=new gs(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Oi,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Gl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Gl),this}intersectObject(t,e=!0,n=[]){return go(t,this,n,e),n.sort(Wl),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)go(t[s],this,n,e);return n.sort(Wl),n}};function Wl(i,t){return i.distance-t.distance}function go(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)go(r[a],t,e,!0)}}var Ps=class extends pn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function ko(i,t,e,n){let s=wu(n);switch(e){case Co:return i*t;case Io:return i*t/s.components*s.byteLength;case qr:return i*t/s.components*s.byteLength;case Po:return i*t*2/s.components*s.byteLength;case Yr:return i*t*2/s.components*s.byteLength;case Ro:return i*t*3/s.components*s.byteLength;case $e:return i*t*4/s.components*s.byteLength;case Zr:return i*t*4/s.components*s.byteLength;case Us:case Ns:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Fs:case Os:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $r:case jr:return Math.max(i,16)*Math.max(t,8)/4;case Jr:case Kr:return Math.max(i,8)*Math.max(t,8)/2;case Qr:case ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ea:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ia:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case sa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ra:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case aa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case oa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case la:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ca:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ha:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ua:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case da:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case fa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case pa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ma:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ga:case _a:case va:return Math.ceil(i/4)*Math.ceil(t/4)*16;case xa:case ya:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ma:case Sa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function wu(i){switch(i){case an:case Eo:return{byteLength:1,components:1};case Hi:case To:case Gi:return{byteLength:2,components:1};case Wr:case Xr:return{byteLength:2,components:4};case Zn:case Gr:case vn:return{byteLength:4,components:1};case wo:case Ao:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function rh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Cu(i){let t=new WeakMap;function e(o,c){let l=o.array,u=o.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){let u=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,u);else{h.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<h.length;p++){let _=h[f],x=h[p];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++f,h[f]=x)}h.length=f+1;for(let p=0,_=h.length;p<_;p++){let x=h[p];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Ru=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Iu=`#ifdef USE_ALPHAHASH
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
#endif`,Pu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Du=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Uu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nu=`#ifdef USE_AOMAP
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
#endif`,Fu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ou=`#ifdef USE_BATCHING
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
#endif`,Bu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ku=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hu=`#ifdef USE_IRIDESCENCE
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
#endif`,Gu=`#ifdef USE_BUMPMAP
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
#endif`,Wu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ju=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$u=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ku=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ju=`#define PI 3.141592653589793
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
} // validated`,Qu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,td=`vec3 transformedNormal = objectNormal;
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
#endif`,ed=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,id=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rd="gl_FragColor = linearToOutputTexel( gl_FragColor );",ad=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,od=`#ifdef USE_ENVMAP
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
#endif`,ld=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cd=`#ifdef USE_ENVMAP
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
#endif`,hd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ud=`#ifdef USE_ENVMAP
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
#endif`,dd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,md=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gd=`#ifdef USE_GRADIENTMAP
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
}`,_d=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yd=`uniform bool receiveShadow;
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
#endif`,Md=`#ifdef USE_ENVMAP
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
#endif`,Sd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ed=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Td=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wd=`PhysicalMaterial material;
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
#endif`,Ad=`struct PhysicalMaterial {
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
}`,Cd=`
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
#endif`,Rd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Id=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ld=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ud=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Od=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Bd=`#if defined( USE_POINTS_UV )
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
#endif`,zd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wd=`#ifdef USE_MORPHTARGETS
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
#endif`,Xd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Yd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$d=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kd=`#ifdef USE_NORMALMAP
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
#endif`,jd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ef=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,af=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,of=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,df=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ff=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pf=`float getShadowMask() {
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
}`,mf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gf=`#ifdef USE_SKINNING
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
#endif`,_f=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vf=`#ifdef USE_SKINNING
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
#endif`,xf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bf=`#ifdef USE_TRANSMISSION
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
#endif`,Ef=`#ifdef USE_TRANSMISSION
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
#endif`,Tf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Af=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Rf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,If=`uniform sampler2D t2D;
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
}`,Pf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Df=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Lf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nf=`#include <common>
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
}`,Ff=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Of=`#define DISTANCE
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
}`,Bf=`#define DISTANCE
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
}`,zf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vf=`uniform float scale;
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
}`,Hf=`uniform vec3 diffuse;
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
}`,Gf=`#include <common>
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
}`,Wf=`uniform vec3 diffuse;
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
}`,Xf=`#define LAMBERT
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
}`,qf=`#define LAMBERT
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
}`,Yf=`#define MATCAP
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
}`,Zf=`#define MATCAP
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
}`,Jf=`#define NORMAL
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
}`,$f=`#define NORMAL
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
}`,Kf=`#define PHONG
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
}`,jf=`#define PHONG
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
}`,Qf=`#define STANDARD
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
}`,tp=`#define STANDARD
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
}`,ep=`#define TOON
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
}`,np=`#define TOON
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
}`,ip=`uniform float size;
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
}`,sp=`uniform vec3 diffuse;
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
}`,rp=`#include <common>
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
}`,ap=`uniform vec3 color;
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
}`,op=`uniform float rotation;
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
}`,lp=`uniform vec3 diffuse;
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
}`,zt={alphahash_fragment:Ru,alphahash_pars_fragment:Iu,alphamap_fragment:Pu,alphamap_pars_fragment:Du,alphatest_fragment:Lu,alphatest_pars_fragment:Uu,aomap_fragment:Nu,aomap_pars_fragment:Fu,batching_pars_vertex:Ou,batching_vertex:Bu,begin_vertex:zu,beginnormal_vertex:ku,bsdfs:Vu,iridescence_fragment:Hu,bumpmap_pars_fragment:Gu,clipping_planes_fragment:Wu,clipping_planes_pars_fragment:Xu,clipping_planes_pars_vertex:qu,clipping_planes_vertex:Yu,color_fragment:Zu,color_pars_fragment:Ju,color_pars_vertex:$u,color_vertex:Ku,common:ju,cube_uv_reflection_fragment:Qu,defaultnormal_vertex:td,displacementmap_pars_vertex:ed,displacementmap_vertex:nd,emissivemap_fragment:id,emissivemap_pars_fragment:sd,colorspace_fragment:rd,colorspace_pars_fragment:ad,envmap_fragment:od,envmap_common_pars_fragment:ld,envmap_pars_fragment:cd,envmap_pars_vertex:hd,envmap_physical_pars_fragment:Md,envmap_vertex:ud,fog_vertex:dd,fog_pars_vertex:fd,fog_fragment:pd,fog_pars_fragment:md,gradientmap_pars_fragment:gd,lightmap_pars_fragment:_d,lights_lambert_fragment:vd,lights_lambert_pars_fragment:xd,lights_pars_begin:yd,lights_toon_fragment:Sd,lights_toon_pars_fragment:bd,lights_phong_fragment:Ed,lights_phong_pars_fragment:Td,lights_physical_fragment:wd,lights_physical_pars_fragment:Ad,lights_fragment_begin:Cd,lights_fragment_maps:Rd,lights_fragment_end:Id,logdepthbuf_fragment:Pd,logdepthbuf_pars_fragment:Dd,logdepthbuf_pars_vertex:Ld,logdepthbuf_vertex:Ud,map_fragment:Nd,map_pars_fragment:Fd,map_particle_fragment:Od,map_particle_pars_fragment:Bd,metalnessmap_fragment:zd,metalnessmap_pars_fragment:kd,morphinstance_vertex:Vd,morphcolor_vertex:Hd,morphnormal_vertex:Gd,morphtarget_pars_vertex:Wd,morphtarget_vertex:Xd,normal_fragment_begin:qd,normal_fragment_maps:Yd,normal_pars_fragment:Zd,normal_pars_vertex:Jd,normal_vertex:$d,normalmap_pars_fragment:Kd,clearcoat_normal_fragment_begin:jd,clearcoat_normal_fragment_maps:Qd,clearcoat_pars_fragment:tf,iridescence_pars_fragment:ef,opaque_fragment:nf,packing:sf,premultiplied_alpha_fragment:rf,project_vertex:af,dithering_fragment:of,dithering_pars_fragment:lf,roughnessmap_fragment:cf,roughnessmap_pars_fragment:hf,shadowmap_pars_fragment:uf,shadowmap_pars_vertex:df,shadowmap_vertex:ff,shadowmask_pars_fragment:pf,skinbase_vertex:mf,skinning_pars_vertex:gf,skinning_vertex:_f,skinnormal_vertex:vf,specularmap_fragment:xf,specularmap_pars_fragment:yf,tonemapping_fragment:Mf,tonemapping_pars_fragment:Sf,transmission_fragment:bf,transmission_pars_fragment:Ef,uv_pars_fragment:Tf,uv_pars_vertex:wf,uv_vertex:Af,worldpos_vertex:Cf,background_vert:Rf,background_frag:If,backgroundCube_vert:Pf,backgroundCube_frag:Df,cube_vert:Lf,cube_frag:Uf,depth_vert:Nf,depth_frag:Ff,distanceRGBA_vert:Of,distanceRGBA_frag:Bf,equirect_vert:zf,equirect_frag:kf,linedashed_vert:Vf,linedashed_frag:Hf,meshbasic_vert:Gf,meshbasic_frag:Wf,meshlambert_vert:Xf,meshlambert_frag:qf,meshmatcap_vert:Yf,meshmatcap_frag:Zf,meshnormal_vert:Jf,meshnormal_frag:$f,meshphong_vert:Kf,meshphong_frag:jf,meshphysical_vert:Qf,meshphysical_frag:tp,meshtoon_vert:ep,meshtoon_frag:np,points_vert:ip,points_frag:sp,shadow_vert:rp,shadow_frag:ap,sprite_vert:op,sprite_frag:lp},rt={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},xn={basic:{uniforms:Te([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:Te([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:Te([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:Te([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:Te([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:Te([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:Te([rt.points,rt.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:Te([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:Te([rt.common,rt.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:Te([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:Te([rt.sprite,rt.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:Te([rt.common,rt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:Te([rt.lights,rt.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};xn.physical={uniforms:Te([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};var ba={r:0,b:0,g:0},di=new sn,cp=new ue;function hp(i,t,e,n,s,r,a){let o=new Wt(0),c=r===!0?0:1,l,u,h=null,f=0,p=null;function _(E){let S=E.isScene===!0?E.background:null;return S&&S.isTexture&&(S=(E.backgroundBlurriness>0?e:t).get(S)),S}function x(E){let S=!1,R=_(E);R===null?d(o,c):R&&R.isColor&&(d(R,1),S=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,S){let R=_(S);R&&(R.isCubeTexture||R.mapping===Ds)?(u===void 0&&(u=new De(new Bi(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:ui(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:Ie,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,P,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),di.copy(S.backgroundRotation),di.x*=-1,di.y*=-1,di.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),u.material.uniforms.envMap.value=R,u.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(cp.makeRotationFromEuler(di)),u.material.toneMapped=Yt.getTransfer(R.colorSpace)!==jt,(h!==R||f!==R.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=R,f=R.version,p=i.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(l===void 0&&(l=new De(new Ts(2,2),new rn({name:"BackgroundMaterial",uniforms:ui(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=R,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Yt.getTransfer(R.colorSpace)!==jt,R.matrixAutoUpdate===!0&&R.updateMatrix(),l.material.uniforms.uvTransform.value.copy(R.matrix),(h!==R||f!==R.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,h=R,f=R.version,p=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function d(E,S){E.getRGB(ba,Oo(i)),n.buffers.color.setClear(ba.r,ba.g,ba.b,S,a)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,S=1){o.set(E),c=S,d(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,d(o,c)},render:x,addToRenderList:m,dispose:w}}function up(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(y,C,z,H,q){let Y=!1,G=h(H,z,C);r!==G&&(r=G,l(r.object)),Y=p(y,H,z,q),Y&&_(y,H,z,q),q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,S(y,C,z,H),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function h(y,C,z){let H=z.wireframe===!0,q=n[y.id];q===void 0&&(q={},n[y.id]=q);let Y=q[C.id];Y===void 0&&(Y={},q[C.id]=Y);let G=Y[H];return G===void 0&&(G=f(c()),Y[H]=G),G}function f(y){let C=[],z=[],H=[];for(let q=0;q<e;q++)C[q]=0,z[q]=0,H[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:z,attributeDivisors:H,object:y,attributes:{},index:null}}function p(y,C,z,H){let q=r.attributes,Y=C.attributes,G=0,Q=z.getAttributes();for(let k in Q)if(Q[k].location>=0){let ct=q[k],St=Y[k];if(St===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(St=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(St=y.instanceColor)),ct===void 0||ct.attribute!==St||St&&ct.data!==St.data)return!0;G++}return r.attributesNum!==G||r.index!==H}function _(y,C,z,H){let q={},Y=C.attributes,G=0,Q=z.getAttributes();for(let k in Q)if(Q[k].location>=0){let ct=Y[k];ct===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(ct=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(ct=y.instanceColor));let St={};St.attribute=ct,ct&&ct.data&&(St.data=ct.data),q[k]=St,G++}r.attributes=q,r.attributesNum=G,r.index=H}function x(){let y=r.newAttributes;for(let C=0,z=y.length;C<z;C++)y[C]=0}function m(y){d(y,0)}function d(y,C){let z=r.newAttributes,H=r.enabledAttributes,q=r.attributeDivisors;z[y]=1,H[y]===0&&(i.enableVertexAttribArray(y),H[y]=1),q[y]!==C&&(i.vertexAttribDivisor(y,C),q[y]=C)}function w(){let y=r.newAttributes,C=r.enabledAttributes;for(let z=0,H=C.length;z<H;z++)C[z]!==y[z]&&(i.disableVertexAttribArray(z),C[z]=0)}function E(y,C,z,H,q,Y,G){G===!0?i.vertexAttribIPointer(y,C,z,q,Y):i.vertexAttribPointer(y,C,z,H,q,Y)}function S(y,C,z,H){x();let q=H.attributes,Y=z.getAttributes(),G=C.defaultAttributeValues;for(let Q in Y){let k=Y[Q];if(k.location>=0){let nt=q[Q];if(nt===void 0&&(Q==="instanceMatrix"&&y.instanceMatrix&&(nt=y.instanceMatrix),Q==="instanceColor"&&y.instanceColor&&(nt=y.instanceColor)),nt!==void 0){let ct=nt.normalized,St=nt.itemSize,Ft=t.get(nt);if(Ft===void 0)continue;let qt=Ft.buffer,te=Ft.type,Vt=Ft.bytesPerElement,X=te===i.INT||te===i.UNSIGNED_INT||nt.gpuType===Gr;if(nt.isInterleavedBufferAttribute){let J=nt.data,ut=J.stride,Ct=nt.offset;if(J.isInstancedInterleavedBuffer){for(let xt=0;xt<k.locationSize;xt++)d(k.location+xt,J.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let xt=0;xt<k.locationSize;xt++)m(k.location+xt);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let xt=0;xt<k.locationSize;xt++)E(k.location+xt,St/k.locationSize,te,ct,ut*Vt,(Ct+St/k.locationSize*xt)*Vt,X)}else{if(nt.isInstancedBufferAttribute){for(let J=0;J<k.locationSize;J++)d(k.location+J,nt.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let J=0;J<k.locationSize;J++)m(k.location+J);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let J=0;J<k.locationSize;J++)E(k.location+J,St/k.locationSize,te,ct,St*Vt,St/k.locationSize*J*Vt,X)}}else if(G!==void 0){let ct=G[Q];if(ct!==void 0)switch(ct.length){case 2:i.vertexAttrib2fv(k.location,ct);break;case 3:i.vertexAttrib3fv(k.location,ct);break;case 4:i.vertexAttrib4fv(k.location,ct);break;default:i.vertexAttrib1fv(k.location,ct)}}}}w()}function R(){F();for(let y in n){let C=n[y];for(let z in C){let H=C[z];for(let q in H)u(H[q].object),delete H[q];delete C[z]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;let C=n[y.id];for(let z in C){let H=C[z];for(let q in H)u(H[q].object),delete H[q];delete C[z]}delete n[y.id]}function P(y){for(let C in n){let z=n[C];if(z[y.id]===void 0)continue;let H=z[y.id];for(let q in H)u(H[q].object),delete H[q];delete z[y.id]}}function F(){M(),a=!0,r!==s&&(r=s,l(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:F,resetDefaultState:M,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:m,disableUnusedAttributes:w}}function dp(i,t,e){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function a(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),e.update(u,n,h))}function o(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let p=0;for(let _=0;_<h;_++)p+=u[_];e.update(p,n,1)}function c(l,u,h,f){if(h===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<l.length;_++)a(l[_],u[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,h);let _=0;for(let x=0;x<h;x++)_+=u[x]*f[x];e.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function fp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==$e&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){let F=P===Gi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==an&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==vn&&!F)}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=_>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:w,maxVaryings:E,maxFragmentUniforms:S,vertexTextures:R,maxSamples:A}}function pp(i){let t=this,e=null,n=0,s=!1,r=!1,a=new dn,o=new Nt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let p=h.length!==0||f||n!==0||s;return s=f,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,p){let _=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,d=i.get(h);if(!s||_===null||_.length===0||r&&!m)r?u(null):l();else{let w=r?0:n,E=w*4,S=d.clippingState||null;c.value=S,S=u(_,f,E,p);for(let R=0;R!==E;++R)S[R]=e[R];d.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,p,_){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=c.value,_!==!0||m===null){let d=p+x*4,w=f.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<d)&&(m=new Float32Array(d));for(let E=0,S=p;E!==x;++E,S+=4)a.copy(h[E]).applyMatrix4(w,o),a.normal.toArray(m,S),m[S+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function mp(i){let t=new WeakMap;function e(a,o){return o===kr?a.mapping=ci:o===Vr&&(a.mapping=hi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===kr||o===Vr)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new xr(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Zi=4,Fc=[.125,.215,.35,.446,.526,.582],mi=20,Vo=new li,Oc=new Wt,Ho=null,Go=0,Wo=0,Xo=!1,pi=(1+Math.sqrt(5))/2,Yi=1/pi,Bc=[new U(-pi,Yi,0),new U(pi,Yi,0),new U(-Yi,0,pi),new U(Yi,0,pi),new U(0,pi,-Yi),new U(0,pi,Yi),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],gp=new U,wa=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=gp}=r;Ho=this._renderer.getRenderTarget(),Go=this._renderer.getActiveCubeFace(),Wo=this._renderer.getActiveMipmapLevel(),Xo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ho,Go,Wo),this._renderer.xr.enabled=Xo,t.scissorTest=!1,Ea(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ci||t.mapping===hi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ho=this._renderer.getRenderTarget(),Go=this._renderer.getActiveCubeFace(),Wo=this._renderer.getActiveMipmapLevel(),Xo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:Gi,format:$e,colorSpace:ai,depthBuffer:!1},s=zc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_p(r)),this._blurMaterial=vp(r,t,e)}return s}_compileMaterial(t){let e=new De(this._lodPlanes[0],t);this._renderer.compile(e,Vo)}_sceneToCubeUV(t,e,n,s,r){let c=new Me(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(Oc),h.toneMapping=In,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));let x=new _s({name:"PMREM.Background",side:Ie,depthWrite:!1,depthTest:!1}),m=new De(new Bi,x),d=!1,w=t.background;w?w.isColor&&(x.color.copy(w),t.background=null,d=!0):(x.color.copy(Oc),d=!0);for(let E=0;E<6;E++){let S=E%3;S===0?(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[E],r.y,r.z)):S===1?(c.up.set(0,0,l[E]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[E],r.z)):(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[E]));let R=this._cubeSize;Ea(s,S*R,E>2?R:0,R,R),h.setRenderTarget(s),d&&h.render(m,c),h.render(t,c)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=p,h.autoClear=f,t.background=w}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ci||t.mapping===hi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kc());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new De(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;Ea(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Vo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Bc[(s-r-1)%Bc.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new De(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*mi-1),x=r/_,m=isFinite(r)?1+Math.floor(u*x):mi;m>mi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${mi}`);let d=[],w=0;for(let P=0;P<mi;++P){let F=P/x,M=Math.exp(-F*F/2);d.push(M),P===0?w+=M:P<m&&(w+=2*M)}for(let P=0;P<d.length;P++)d[P]=d[P]/w;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:E}=this;f.dTheta.value=_,f.mipInt.value=E-n;let S=this._sizeLods[s],R=3*S*(s>E-Zi?s-E+Zi:0),A=4*(this._cubeSize-S);Ea(e,R,A,3*S,2*S),c.setRenderTarget(e),c.render(h,Vo)}};function _p(i){let t=[],e=[],n=[],s=i,r=i-Zi+1+Fc.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Zi?c=Fc[a-i+Zi-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,_=6,x=3,m=2,d=1,w=new Float32Array(x*_*p),E=new Float32Array(m*_*p),S=new Float32Array(d*_*p);for(let A=0;A<p;A++){let P=A%3*2/3-1,F=A>2?0:-1,M=[P,F,0,P+2/3,F,0,P+2/3,F+1,0,P,F,0,P+2/3,F+1,0,P,F+1,0];w.set(M,x*_*A),E.set(f,m*_*A);let y=[A,A,A,A,A,A];S.set(y,d*_*A)}let R=new gn;R.setAttribute("position",new Ee(w,x)),R.setAttribute("uv",new Ee(E,m)),R.setAttribute("faceIndex",new Ee(S,d)),t.push(R),s>Zi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function zc(i,t,e){let n=new mn(i,t,e);return n.texture.mapping=Ds,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ea(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function vp(i,t,e){let n=new Float32Array(mi),s=new U(0,1,0);return new rn({name:"SphericalGaussianBlur",defines:{n:mi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:el(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function kc(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:el(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Vc(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:el(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function el(){return`

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
	`}function xp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===kr||c===Vr,u=c===ci||c===hi;if(l||u){let h=t.get(o),f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new wa(i)),h=l?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{let p=o.image;return l&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new wa(i)),h=l?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let c=0,l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function yp(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ui("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Mp(i,t,e,n){let s={},r=new WeakMap;function a(h){let f=h.target;f.index!==null&&t.remove(f.index);for(let _ in f.attributes)t.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete s[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function c(h){let f=h.attributes;for(let p in f)t.update(f[p],i.ARRAY_BUFFER)}function l(h){let f=[],p=h.index,_=h.attributes.position,x=0;if(p!==null){let w=p.array;x=p.version;for(let E=0,S=w.length;E<S;E+=3){let R=w[E+0],A=w[E+1],P=w[E+2];f.push(R,A,A,P,P,R)}}else if(_!==void 0){let w=_.array;x=_.version;for(let E=0,S=w.length/3-1;E<S;E+=3){let R=E+0,A=E+1,P=E+2;f.push(R,A,A,P,P,R)}}else return;let m=new(Fo(f)?xs:vs)(f,1);m.version=x;let d=r.get(h);d&&t.remove(d),r.set(h,m)}function u(h){let f=r.get(h);if(f){let p=h.index;p!==null&&f.version<p.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function Sp(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,p){i.drawElements(n,p,r,f*a),e.update(p,n,1)}function l(f,p,_){_!==0&&(i.drawElementsInstanced(n,p,r,f*a,_),e.update(p,n,_))}function u(f,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,_);let m=0;for(let d=0;d<_;d++)m+=p[d];e.update(m,n,1)}function h(f,p,_,x){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)l(f[d]/a,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,x,0,_);let d=0;for(let w=0;w<_;w++)d+=p[w]*x[w];e.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function bp(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Ep(i,t,e){let n=new WeakMap,s=new ce;function r(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(o);if(f===void 0||f.count!==h){let M=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],E=0;p===!0&&(E=1),_===!0&&(E=2),x===!0&&(E=3);let S=o.attributes.position.count*E,R=1;S>t.maxTextureSize&&(R=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let A=new Float32Array(S*R*4*h),P=new ms(A,S,R,h);P.type=vn,P.needsUpdate=!0;let F=E*4;for(let y=0;y<h;y++){let C=m[y],z=d[y],H=w[y],q=S*R*4*y;for(let Y=0;Y<C.count;Y++){let G=Y*F;p===!0&&(s.fromBufferAttribute(C,Y),A[q+G+0]=s.x,A[q+G+1]=s.y,A[q+G+2]=s.z,A[q+G+3]=0),_===!0&&(s.fromBufferAttribute(z,Y),A[q+G+4]=s.x,A[q+G+5]=s.y,A[q+G+6]=s.z,A[q+G+7]=0),x===!0&&(s.fromBufferAttribute(H,Y),A[q+G+8]=s.x,A[q+G+9]=s.y,A[q+G+10]=s.z,A[q+G+11]=H.itemSize===4?s.w:1)}}f={count:h,texture:P,size:new Dt(S,R)},n.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let x=0;x<l.length;x++)p+=l[x];let _=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Tp(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return h}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}var ah=new ze,Hc=new bs(1,1),oh=new ms,lh=new _r,ch=new Ms,Gc=[],Wc=[],Xc=new Float32Array(16),qc=new Float32Array(9),Yc=new Float32Array(4);function $i(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Gc[s];if(r===void 0&&(r=new Float32Array(s),Gc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function me(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ge(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ca(i,t){let e=Wc[t];e===void 0&&(e=new Int32Array(t),Wc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function wp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ap(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2fv(this.addr,t),ge(e,t)}}function Cp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(me(e,t))return;i.uniform3fv(this.addr,t),ge(e,t)}}function Rp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4fv(this.addr,t),ge(e,t)}}function Ip(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;Yc.set(n),i.uniformMatrix2fv(this.addr,!1,Yc),ge(e,n)}}function Pp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;qc.set(n),i.uniformMatrix3fv(this.addr,!1,qc),ge(e,n)}}function Dp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;Xc.set(n),i.uniformMatrix4fv(this.addr,!1,Xc),ge(e,n)}}function Lp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Up(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2iv(this.addr,t),ge(e,t)}}function Np(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;i.uniform3iv(this.addr,t),ge(e,t)}}function Fp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4iv(this.addr,t),ge(e,t)}}function Op(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Bp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2uiv(this.addr,t),ge(e,t)}}function zp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;i.uniform3uiv(this.addr,t),ge(e,t)}}function kp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4uiv(this.addr,t),ge(e,t)}}function Vp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Hc.compareFunction=Lo,r=Hc):r=ah,e.setTexture2D(t||r,s)}function Hp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||lh,s)}function Gp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ch,s)}function Wp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||oh,s)}function Xp(i){switch(i){case 5126:return wp;case 35664:return Ap;case 35665:return Cp;case 35666:return Rp;case 35674:return Ip;case 35675:return Pp;case 35676:return Dp;case 5124:case 35670:return Lp;case 35667:case 35671:return Up;case 35668:case 35672:return Np;case 35669:case 35673:return Fp;case 5125:return Op;case 36294:return Bp;case 36295:return zp;case 36296:return kp;case 35678:case 36198:case 36298:case 36306:case 35682:return Vp;case 35679:case 36299:case 36307:return Hp;case 35680:case 36300:case 36308:case 36293:return Gp;case 36289:case 36303:case 36311:case 36292:return Wp}}function qp(i,t){i.uniform1fv(this.addr,t)}function Yp(i,t){let e=$i(t,this.size,2);i.uniform2fv(this.addr,e)}function Zp(i,t){let e=$i(t,this.size,3);i.uniform3fv(this.addr,e)}function Jp(i,t){let e=$i(t,this.size,4);i.uniform4fv(this.addr,e)}function $p(i,t){let e=$i(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Kp(i,t){let e=$i(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function jp(i,t){let e=$i(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Qp(i,t){i.uniform1iv(this.addr,t)}function tm(i,t){i.uniform2iv(this.addr,t)}function em(i,t){i.uniform3iv(this.addr,t)}function nm(i,t){i.uniform4iv(this.addr,t)}function im(i,t){i.uniform1uiv(this.addr,t)}function sm(i,t){i.uniform2uiv(this.addr,t)}function rm(i,t){i.uniform3uiv(this.addr,t)}function am(i,t){i.uniform4uiv(this.addr,t)}function om(i,t,e){let n=this.cache,s=t.length,r=Ca(e,s);me(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||ah,r[a])}function lm(i,t,e){let n=this.cache,s=t.length,r=Ca(e,s);me(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||lh,r[a])}function cm(i,t,e){let n=this.cache,s=t.length,r=Ca(e,s);me(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||ch,r[a])}function hm(i,t,e){let n=this.cache,s=t.length,r=Ca(e,s);me(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||oh,r[a])}function um(i){switch(i){case 5126:return qp;case 35664:return Yp;case 35665:return Zp;case 35666:return Jp;case 35674:return $p;case 35675:return Kp;case 35676:return jp;case 5124:case 35670:return Qp;case 35667:case 35671:return tm;case 35668:case 35672:return em;case 35669:case 35673:return nm;case 5125:return im;case 36294:return sm;case 36295:return rm;case 36296:return am;case 35678:case 36198:case 36298:case 36306:case 35682:return om;case 35679:case 36299:case 36307:return lm;case 35680:case 36300:case 36308:case 36293:return cm;case 36289:case 36303:case 36311:case 36292:return hm}}var Yo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Xp(e.type)}},Zo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=um(e.type)}},Jo=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},qo=/(\w+)(\])?(\[|\.)?/g;function Zc(i,t){i.seq.push(t),i.map[t.id]=t}function dm(i,t,e){let n=i.name,s=n.length;for(qo.lastIndex=0;;){let r=qo.exec(n),a=qo.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Zc(e,l===void 0?new Yo(o,i,t):new Zo(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new Jo(o),Zc(e,h)),e=h}}}var Ji=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);dm(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Jc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var fm=37297,pm=0;function mm(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var $c=new Nt;function gm(i){Yt._getMatrix($c,Yt.workingColorSpace,i);let t=`mat3( ${$c.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(i)){case ds:return[t,"LinearTransferOETF"];case jt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Kc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+mm(i.getShaderSource(t),o)}else return r}function _m(i,t){let e=gm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function vm(i,t){let e;switch(t){case pc:e="Linear";break;case mc:e="Reinhard";break;case gc:e="Cineon";break;case zr:e="ACESFilmic";break;case vc:e="AgX";break;case xc:e="Neutral";break;case _c:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ta=new U;function xm(){Yt.getLuminanceCoefficients(Ta);let i=Ta.x.toFixed(4),t=Ta.y.toFixed(4),e=Ta.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ym(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bs).join(`
`)}function Mm(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Sm(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Bs(i){return i!==""}function jc(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Qc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var bm=/^[ \t]*#include +<([\w\d./]+)>/gm;function $o(i){return i.replace(bm,Tm)}var Em=new Map;function Tm(i,t){let e=zt[t];if(e===void 0){let n=Em.get(t);if(n!==void 0)e=zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return $o(e)}var wm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function th(i){return i.replace(wm,Am)}function Am(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function eh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Cm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===vo?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Yl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===_n&&(t="SHADOWMAP_TYPE_VSM"),t}function Rm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ci:case hi:t="ENVMAP_TYPE_CUBE";break;case Ds:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Im(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case hi:t="ENVMAP_MODE_REFRACTION";break}return t}function Pm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case So:t="ENVMAP_BLENDING_MULTIPLY";break;case dc:t="ENVMAP_BLENDING_MIX";break;case fc:t="ENVMAP_BLENDING_ADD";break}return t}function Dm(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Lm(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=Cm(e),l=Rm(e),u=Im(e),h=Pm(e),f=Dm(e),p=ym(e),_=Mm(r),x=s.createProgram(),m,d,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Bs).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Bs).join(`
`),d.length>0&&(d+=`
`)):(m=[eh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bs).join(`
`),d=[eh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==In?"#define TONE_MAPPING":"",e.toneMapping!==In?zt.tonemapping_pars_fragment:"",e.toneMapping!==In?vm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,_m("linearToOutputTexel",e.outputColorSpace),xm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Bs).join(`
`)),a=$o(a),a=jc(a,e),a=Qc(a,e),o=$o(o),o=jc(o,e),o=Qc(o,e),a=th(a),o=th(o),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Uo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Uo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let E=w+m+a,S=w+d+o,R=Jc(s,s.VERTEX_SHADER,E),A=Jc(s,s.FRAGMENT_SHADER,S);s.attachShader(x,R),s.attachShader(x,A),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function P(C){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(x)||"",H=s.getShaderInfoLog(R)||"",q=s.getShaderInfoLog(A)||"",Y=z.trim(),G=H.trim(),Q=q.trim(),k=!0,nt=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,R,A);else{let ct=Kc(s,R,"vertex"),St=Kc(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+Y+`
`+ct+`
`+St)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(G===""||Q==="")&&(nt=!1);nt&&(C.diagnostics={runnable:k,programLog:Y,vertexShader:{log:G,prefix:m},fragmentShader:{log:Q,prefix:d}})}s.deleteShader(R),s.deleteShader(A),F=new Ji(s,x),M=Sm(s,x)}let F;this.getUniforms=function(){return F===void 0&&P(this),F};let M;this.getAttributes=function(){return M===void 0&&P(this),M};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(x,fm)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=pm++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=A,this}var Um=0,Ko=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new jo(t),e.set(t,n)),n}},jo=class{constructor(t){this.id=Um++,this.code=t,this.usedTimes=0}};function Nm(i,t,e,n,s,r,a){let o=new Oi,c=new Ko,l=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,y,C,z,H){let q=z.fog,Y=H.geometry,G=M.isMeshStandardMaterial?z.environment:null,Q=(M.isMeshStandardMaterial?e:t).get(M.envMap||G),k=Q&&Q.mapping===Ds?Q.image.height:null,nt=_[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let ct=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,St=ct!==void 0?ct.length:0,Ft=0;Y.morphAttributes.position!==void 0&&(Ft=1),Y.morphAttributes.normal!==void 0&&(Ft=2),Y.morphAttributes.color!==void 0&&(Ft=3);let qt,te,Vt,X;if(nt){let Kt=xn[nt];qt=Kt.vertexShader,te=Kt.fragmentShader}else qt=M.vertexShader,te=M.fragmentShader,c.update(M),Vt=c.getVertexShaderID(M),X=c.getFragmentShaderID(M);let J=i.getRenderTarget(),ut=i.state.buffers.depth.getReversed(),Ct=H.isInstancedMesh===!0,xt=H.isBatchedMesh===!0,kt=!!M.map,pe=!!M.matcap,T=!!Q,re=!!M.aoMap,Ut=!!M.lightMap,It=!!M.bumpMap,gt=!!M.normalMap,ae=!!M.displacementMap,_t=!!M.emissiveMap,Bt=!!M.metalnessMap,ve=!!M.roughnessMap,de=M.anisotropy>0,b=M.clearcoat>0,g=M.dispersion>0,N=M.iridescence>0,W=M.sheen>0,$=M.transmission>0,V=de&&!!M.anisotropyMap,bt=b&&!!M.clearcoatMap,it=b&&!!M.clearcoatNormalMap,vt=b&&!!M.clearcoatRoughnessMap,yt=N&&!!M.iridescenceMap,tt=N&&!!M.iridescenceThicknessMap,lt=W&&!!M.sheenColorMap,Rt=W&&!!M.sheenRoughnessMap,Mt=!!M.specularMap,at=!!M.specularColorMap,Ot=!!M.specularIntensityMap,I=$&&!!M.transmissionMap,et=$&&!!M.thicknessMap,st=!!M.gradientMap,dt=!!M.alphaMap,K=M.alphaTest>0,Z=!!M.alphaHash,pt=!!M.extensions,Lt=In;M.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Lt=i.toneMapping);let ne={shaderID:nt,shaderType:M.type,shaderName:M.name,vertexShader:qt,fragmentShader:te,defines:M.defines,customVertexShaderID:Vt,customFragmentShaderID:X,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:xt,batchingColor:xt&&H._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&H.instanceColor!==null,instancingMorph:Ct&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:ai,alphaToCoverage:!!M.alphaToCoverage,map:kt,matcap:pe,envMap:T,envMapMode:T&&Q.mapping,envMapCubeUVHeight:k,aoMap:re,lightMap:Ut,bumpMap:It,normalMap:gt,displacementMap:f&&ae,emissiveMap:_t,normalMapObjectSpace:gt&&M.normalMapType===bc,normalMapTangentSpace:gt&&M.normalMapType===Do,metalnessMap:Bt,roughnessMap:ve,anisotropy:de,anisotropyMap:V,clearcoat:b,clearcoatMap:bt,clearcoatNormalMap:it,clearcoatRoughnessMap:vt,dispersion:g,iridescence:N,iridescenceMap:yt,iridescenceThicknessMap:tt,sheen:W,sheenColorMap:lt,sheenRoughnessMap:Rt,specularMap:Mt,specularColorMap:at,specularIntensityMap:Ot,transmission:$,transmissionMap:I,thicknessMap:et,gradientMap:st,opaque:M.transparent===!1&&M.blending===si&&M.alphaToCoverage===!1,alphaMap:dt,alphaTest:K,alphaHash:Z,combine:M.combine,mapUv:kt&&x(M.map.channel),aoMapUv:re&&x(M.aoMap.channel),lightMapUv:Ut&&x(M.lightMap.channel),bumpMapUv:It&&x(M.bumpMap.channel),normalMapUv:gt&&x(M.normalMap.channel),displacementMapUv:ae&&x(M.displacementMap.channel),emissiveMapUv:_t&&x(M.emissiveMap.channel),metalnessMapUv:Bt&&x(M.metalnessMap.channel),roughnessMapUv:ve&&x(M.roughnessMap.channel),anisotropyMapUv:V&&x(M.anisotropyMap.channel),clearcoatMapUv:bt&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:it&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:lt&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&x(M.sheenRoughnessMap.channel),specularMapUv:Mt&&x(M.specularMap.channel),specularColorMapUv:at&&x(M.specularColorMap.channel),specularIntensityMapUv:Ot&&x(M.specularIntensityMap.channel),transmissionMapUv:I&&x(M.transmissionMap.channel),thicknessMapUv:et&&x(M.thicknessMap.channel),alphaMapUv:dt&&x(M.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(gt||de),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Y.attributes.uv&&(kt||dt),fog:!!q,useFog:M.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ut,skinning:H.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:Ft,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Lt,decodeVideoTexture:kt&&M.map.isVideoTexture===!0&&Yt.getTransfer(M.map.colorSpace)===jt,decodeVideoTextureEmissive:_t&&M.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(M.emissiveMap.colorSpace)===jt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Je,flipSided:M.side===Ie,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:pt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pt&&M.extensions.multiDraw===!0||xt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ne.vertexUv1s=l.has(1),ne.vertexUv2s=l.has(2),ne.vertexUv3s=l.has(3),l.clear(),ne}function d(M){let y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(let C in M.defines)y.push(C),y.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(w(y,M),E(y,M),y.push(i.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function w(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function E(M,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),M.push(o.mask)}function S(M){let y=_[M.type],C;if(y){let z=xn[y];C=Uc.clone(z.uniforms)}else C=M.uniforms;return C}function R(M,y){let C;for(let z=0,H=u.length;z<H;z++){let q=u[z];if(q.cacheKey===y){C=q,++C.usedTimes;break}}return C===void 0&&(C=new Lm(i,y,M,r),u.push(C)),C}function A(M){if(--M.usedTimes===0){let y=u.indexOf(M);u[y]=u[u.length-1],u.pop(),M.destroy()}}function P(M){c.remove(M)}function F(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:S,acquireProgram:R,releaseProgram:A,releaseShaderCache:P,programs:u,dispose:F}}function Fm(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Om(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function nh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ih(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h,f,p,_,x,m){let d=i[t];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:_,renderOrder:h.renderOrder,z:x,group:m},i[t]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=_,d.renderOrder=h.renderOrder,d.z=x,d.group=m),t++,d}function o(h,f,p,_,x,m){let d=a(h,f,p,_,x,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):e.push(d)}function c(h,f,p,_,x,m){let d=a(h,f,p,_,x,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function l(h,f){e.length>1&&e.sort(h||Om),n.length>1&&n.sort(f||nh),s.length>1&&s.sort(f||nh)}function u(){for(let h=t,f=i.length;h<f;h++){let p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:u,sort:l}}function Bm(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new ih,i.set(n,[a])):s>=r.length?(a=new ih,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function zm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Wt};break;case"SpotLight":e={position:new U,direction:new U,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function km(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Vm=0;function Hm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Gm(i){let t=new zm,e=km(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);let s=new U,r=new ue,a=new ue;function o(l){let u=0,h=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,_=0,x=0,m=0,d=0,w=0,E=0,S=0,R=0,A=0,P=0;l.sort(Hm);for(let M=0,y=l.length;M<y;M++){let C=l[M],z=C.color,H=C.intensity,q=C.distance,Y=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=z.r*H,h+=z.g*H,f+=z.b*H;else if(C.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(C.sh.coefficients[G],H);P++}else if(C.isDirectionalLight){let G=t.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let Q=C.shadow,k=e.get(C);k.shadowIntensity=Q.intensity,k.shadowBias=Q.bias,k.shadowNormalBias=Q.normalBias,k.shadowRadius=Q.radius,k.shadowMapSize=Q.mapSize,n.directionalShadow[p]=k,n.directionalShadowMap[p]=Y,n.directionalShadowMatrix[p]=C.shadow.matrix,w++}n.directional[p]=G,p++}else if(C.isSpotLight){let G=t.get(C);G.position.setFromMatrixPosition(C.matrixWorld),G.color.copy(z).multiplyScalar(H),G.distance=q,G.coneCos=Math.cos(C.angle),G.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),G.decay=C.decay,n.spot[x]=G;let Q=C.shadow;if(C.map&&(n.spotLightMap[R]=C.map,R++,Q.updateMatrices(C),C.castShadow&&A++),n.spotLightMatrix[x]=Q.matrix,C.castShadow){let k=e.get(C);k.shadowIntensity=Q.intensity,k.shadowBias=Q.bias,k.shadowNormalBias=Q.normalBias,k.shadowRadius=Q.radius,k.shadowMapSize=Q.mapSize,n.spotShadow[x]=k,n.spotShadowMap[x]=Y,S++}x++}else if(C.isRectAreaLight){let G=t.get(C);G.color.copy(z).multiplyScalar(H),G.halfWidth.set(C.width*.5,0,0),G.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=G,m++}else if(C.isPointLight){let G=t.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),G.distance=C.distance,G.decay=C.decay,C.castShadow){let Q=C.shadow,k=e.get(C);k.shadowIntensity=Q.intensity,k.shadowBias=Q.bias,k.shadowNormalBias=Q.normalBias,k.shadowRadius=Q.radius,k.shadowMapSize=Q.mapSize,k.shadowCameraNear=Q.camera.near,k.shadowCameraFar=Q.camera.far,n.pointShadow[_]=k,n.pointShadowMap[_]=Y,n.pointShadowMatrix[_]=C.shadow.matrix,E++}n.point[_]=G,_++}else if(C.isHemisphereLight){let G=t.get(C);G.skyColor.copy(C.color).multiplyScalar(H),G.groundColor.copy(C.groundColor).multiplyScalar(H),n.hemi[d]=G,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=rt.LTC_FLOAT_1,n.rectAreaLTC2=rt.LTC_FLOAT_2):(n.rectAreaLTC1=rt.LTC_HALF_1,n.rectAreaLTC2=rt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let F=n.hash;(F.directionalLength!==p||F.pointLength!==_||F.spotLength!==x||F.rectAreaLength!==m||F.hemiLength!==d||F.numDirectionalShadows!==w||F.numPointShadows!==E||F.numSpotShadows!==S||F.numSpotMaps!==R||F.numLightProbes!==P)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=_,n.hemi.length=d,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=S+R-A,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=P,F.directionalLength=p,F.pointLength=_,F.spotLength=x,F.rectAreaLength=m,F.hemiLength=d,F.numDirectionalShadows=w,F.numPointShadows=E,F.numSpotShadows=S,F.numSpotMaps=R,F.numLightProbes=P,n.version=Vm++)}function c(l,u){let h=0,f=0,p=0,_=0,x=0,m=u.matrixWorldInverse;for(let d=0,w=l.length;d<w;d++){let E=l[d];if(E.isDirectionalLight){let S=n.directional[h];S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),h++}else if(E.isSpotLight){let S=n.spot[p];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),p++}else if(E.isRectAreaLight){let S=n.rectArea[_];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(E.isPointLight){let S=n.point[f];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){let S=n.hemi[x];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(m),x++}}}return{setup:o,setupView:c,state:n}}function sh(i){let t=new Gm(i),e=[],n=[];function s(u){l.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function c(u){t.setupView(e,u)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Wm(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new sh(i),t.set(s,[o])):r>=a.length?(o=new sh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Xm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qm=`uniform sampler2D shadow_pass;
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
}`;function Ym(i,t,e){let n=new ki,s=new Dt,r=new Dt,a=new ce,o=new yr({depthPacking:Sc}),c=new Mr,l={},u=e.maxTextureSize,h={[Cn]:Ie,[Ie]:Cn,[Je]:Je},f=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:Xm,fragmentShader:qm}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let _=new gn;_.setAttribute("position",new Ee(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new De(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vo;let d=this.type;this.render=function(A,P,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let M=i.getRenderTarget(),y=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Rn),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let H=d!==_n&&this.type===_n,q=d===_n&&this.type!==_n;for(let Y=0,G=A.length;Y<G;Y++){let Q=A[Y],k=Q.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let nt=k.getFrameExtents();if(s.multiply(nt),r.copy(k.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/nt.x),s.x=r.x*nt.x,k.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/nt.y),s.y=r.y*nt.y,k.mapSize.y=r.y)),k.map===null||H===!0||q===!0){let St=this.type!==_n?{minFilter:Ze,magFilter:Ze}:{};k.map!==null&&k.map.dispose(),k.map=new mn(s.x,s.y,St),k.map.texture.name=Q.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();let ct=k.getViewportCount();for(let St=0;St<ct;St++){let Ft=k.getViewport(St);a.set(r.x*Ft.x,r.y*Ft.y,r.x*Ft.z,r.y*Ft.w),z.viewport(a),k.updateMatrices(Q,St),n=k.getFrustum(),S(P,F,k.camera,Q,this.type)}k.isPointLightShadow!==!0&&this.type===_n&&w(k,F),k.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(M,y,C)};function w(A,P){let F=t.update(x);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new mn(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(P,null,F,f,x,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(P,null,F,p,x,null)}function E(A,P,F,M){let y=null,C=F.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)y=C;else if(y=F.isPointLight===!0?c:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let z=y.uuid,H=P.uuid,q=l[z];q===void 0&&(q={},l[z]=q);let Y=q[H];Y===void 0&&(Y=y.clone(),q[H]=Y,P.addEventListener("dispose",R)),y=Y}if(y.visible=P.visible,y.wireframe=P.wireframe,M===_n?y.side=P.shadowSide!==null?P.shadowSide:P.side:y.side=P.shadowSide!==null?P.shadowSide:h[P.side],y.alphaMap=P.alphaMap,y.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,y.map=P.map,y.clipShadows=P.clipShadows,y.clippingPlanes=P.clippingPlanes,y.clipIntersection=P.clipIntersection,y.displacementMap=P.displacementMap,y.displacementScale=P.displacementScale,y.displacementBias=P.displacementBias,y.wireframeLinewidth=P.wireframeLinewidth,y.linewidth=P.linewidth,F.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let z=i.properties.get(y);z.light=F}return y}function S(A,P,F,M,y){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===_n)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,A.matrixWorld);let H=t.update(A),q=A.material;if(Array.isArray(q)){let Y=H.groups;for(let G=0,Q=Y.length;G<Q;G++){let k=Y[G],nt=q[k.materialIndex];if(nt&&nt.visible){let ct=E(A,nt,M,y);A.onBeforeShadow(i,A,P,F,H,ct,k),i.renderBufferDirect(F,null,H,ct,A,k),A.onAfterShadow(i,A,P,F,H,ct,k)}}}else if(q.visible){let Y=E(A,q,M,y);A.onBeforeShadow(i,A,P,F,H,Y,null),i.renderBufferDirect(F,null,H,Y,A,null),A.onAfterShadow(i,A,P,F,H,Y,null)}}let z=A.children;for(let H=0,q=z.length;H<q;H++)S(z[H],P,F,M,y)}function R(A){A.target.removeEventListener("dispose",R);for(let F in l){let M=l[F],y=A.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}var Zm={[Dr]:Lr,[Ur]:Or,[Nr]:Br,[ri]:Fr,[Lr]:Dr,[Or]:Ur,[Br]:Nr,[Fr]:ri};function Jm(i,t){function e(){let I=!1,et=new ce,st=null,dt=new ce(0,0,0,0);return{setMask:function(K){st!==K&&!I&&(i.colorMask(K,K,K,K),st=K)},setLocked:function(K){I=K},setClear:function(K,Z,pt,Lt,ne){ne===!0&&(K*=Lt,Z*=Lt,pt*=Lt),et.set(K,Z,pt,Lt),dt.equals(et)===!1&&(i.clearColor(K,Z,pt,Lt),dt.copy(et))},reset:function(){I=!1,st=null,dt.set(-1,0,0,0)}}}function n(){let I=!1,et=!1,st=null,dt=null,K=null;return{setReversed:function(Z){if(et!==Z){let pt=t.get("EXT_clip_control");Z?pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.ZERO_TO_ONE_EXT):pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.NEGATIVE_ONE_TO_ONE_EXT),et=Z;let Lt=K;K=null,this.setClear(Lt)}},getReversed:function(){return et},setTest:function(Z){Z?J(i.DEPTH_TEST):ut(i.DEPTH_TEST)},setMask:function(Z){st!==Z&&!I&&(i.depthMask(Z),st=Z)},setFunc:function(Z){if(et&&(Z=Zm[Z]),dt!==Z){switch(Z){case Dr:i.depthFunc(i.NEVER);break;case Lr:i.depthFunc(i.ALWAYS);break;case Ur:i.depthFunc(i.LESS);break;case ri:i.depthFunc(i.LEQUAL);break;case Nr:i.depthFunc(i.EQUAL);break;case Fr:i.depthFunc(i.GEQUAL);break;case Or:i.depthFunc(i.GREATER);break;case Br:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}dt=Z}},setLocked:function(Z){I=Z},setClear:function(Z){K!==Z&&(et&&(Z=1-Z),i.clearDepth(Z),K=Z)},reset:function(){I=!1,st=null,dt=null,K=null,et=!1}}}function s(){let I=!1,et=null,st=null,dt=null,K=null,Z=null,pt=null,Lt=null,ne=null;return{setTest:function(Kt){I||(Kt?J(i.STENCIL_TEST):ut(i.STENCIL_TEST))},setMask:function(Kt){et!==Kt&&!I&&(i.stencilMask(Kt),et=Kt)},setFunc:function(Kt,yn,un){(st!==Kt||dt!==yn||K!==un)&&(i.stencilFunc(Kt,yn,un),st=Kt,dt=yn,K=un)},setOp:function(Kt,yn,un){(Z!==Kt||pt!==yn||Lt!==un)&&(i.stencilOp(Kt,yn,un),Z=Kt,pt=yn,Lt=un)},setLocked:function(Kt){I=Kt},setClear:function(Kt){ne!==Kt&&(i.clearStencil(Kt),ne=Kt)},reset:function(){I=!1,et=null,st=null,dt=null,K=null,Z=null,pt=null,Lt=null,ne=null}}}let r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap,u={},h={},f=new WeakMap,p=[],_=null,x=!1,m=null,d=null,w=null,E=null,S=null,R=null,A=null,P=new Wt(0,0,0),F=0,M=!1,y=null,C=null,z=null,H=null,q=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,Q=0,k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(k)[1]),G=Q>=1):k.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),G=Q>=2);let nt=null,ct={},St=i.getParameter(i.SCISSOR_BOX),Ft=i.getParameter(i.VIEWPORT),qt=new ce().fromArray(St),te=new ce().fromArray(Ft);function Vt(I,et,st,dt){let K=new Uint8Array(4),Z=i.createTexture();i.bindTexture(I,Z),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let pt=0;pt<st;pt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(et,0,i.RGBA,1,1,dt,0,i.RGBA,i.UNSIGNED_BYTE,K):i.texImage2D(et+pt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,K);return Z}let X={};X[i.TEXTURE_2D]=Vt(i.TEXTURE_2D,i.TEXTURE_2D,1),X[i.TEXTURE_CUBE_MAP]=Vt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[i.TEXTURE_2D_ARRAY]=Vt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),X[i.TEXTURE_3D]=Vt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(i.DEPTH_TEST),a.setFunc(ri),It(!1),gt(_o),J(i.CULL_FACE),re(Rn);function J(I){u[I]!==!0&&(i.enable(I),u[I]=!0)}function ut(I){u[I]!==!1&&(i.disable(I),u[I]=!1)}function Ct(I,et){return h[I]!==et?(i.bindFramebuffer(I,et),h[I]=et,I===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=et),I===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=et),!0):!1}function xt(I,et){let st=p,dt=!1;if(I){st=f.get(et),st===void 0&&(st=[],f.set(et,st));let K=I.textures;if(st.length!==K.length||st[0]!==i.COLOR_ATTACHMENT0){for(let Z=0,pt=K.length;Z<pt;Z++)st[Z]=i.COLOR_ATTACHMENT0+Z;st.length=K.length,dt=!0}}else st[0]!==i.BACK&&(st[0]=i.BACK,dt=!0);dt&&i.drawBuffers(st)}function kt(I){return _!==I?(i.useProgram(I),_=I,!0):!1}let pe={[Gn]:i.FUNC_ADD,[Jl]:i.FUNC_SUBTRACT,[$l]:i.FUNC_REVERSE_SUBTRACT};pe[Kl]=i.MIN,pe[jl]=i.MAX;let T={[Ql]:i.ZERO,[tc]:i.ONE,[ec]:i.SRC_COLOR,[hr]:i.SRC_ALPHA,[oc]:i.SRC_ALPHA_SATURATE,[rc]:i.DST_COLOR,[ic]:i.DST_ALPHA,[nc]:i.ONE_MINUS_SRC_COLOR,[ur]:i.ONE_MINUS_SRC_ALPHA,[ac]:i.ONE_MINUS_DST_COLOR,[sc]:i.ONE_MINUS_DST_ALPHA,[lc]:i.CONSTANT_COLOR,[cc]:i.ONE_MINUS_CONSTANT_COLOR,[hc]:i.CONSTANT_ALPHA,[uc]:i.ONE_MINUS_CONSTANT_ALPHA};function re(I,et,st,dt,K,Z,pt,Lt,ne,Kt){if(I===Rn){x===!0&&(ut(i.BLEND),x=!1);return}if(x===!1&&(J(i.BLEND),x=!0),I!==Zl){if(I!==m||Kt!==M){if((d!==Gn||S!==Gn)&&(i.blendEquation(i.FUNC_ADD),d=Gn,S=Gn),Kt)switch(I){case si:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xo:i.blendFunc(i.ONE,i.ONE);break;case yo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Mo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case si:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case yo:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mo:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}w=null,E=null,R=null,A=null,P.set(0,0,0),F=0,m=I,M=Kt}return}K=K||et,Z=Z||st,pt=pt||dt,(et!==d||K!==S)&&(i.blendEquationSeparate(pe[et],pe[K]),d=et,S=K),(st!==w||dt!==E||Z!==R||pt!==A)&&(i.blendFuncSeparate(T[st],T[dt],T[Z],T[pt]),w=st,E=dt,R=Z,A=pt),(Lt.equals(P)===!1||ne!==F)&&(i.blendColor(Lt.r,Lt.g,Lt.b,ne),P.copy(Lt),F=ne),m=I,M=!1}function Ut(I,et){I.side===Je?ut(i.CULL_FACE):J(i.CULL_FACE);let st=I.side===Ie;et&&(st=!st),It(st),I.blending===si&&I.transparent===!1?re(Rn):re(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);let dt=I.stencilWrite;o.setTest(dt),dt&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),_t(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function It(I){y!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),y=I)}function gt(I){I!==Xl?(J(i.CULL_FACE),I!==C&&(I===_o?i.cullFace(i.BACK):I===ql?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ut(i.CULL_FACE),C=I}function ae(I){I!==z&&(G&&i.lineWidth(I),z=I)}function _t(I,et,st){I?(J(i.POLYGON_OFFSET_FILL),(H!==et||q!==st)&&(i.polygonOffset(et,st),H=et,q=st)):ut(i.POLYGON_OFFSET_FILL)}function Bt(I){I?J(i.SCISSOR_TEST):ut(i.SCISSOR_TEST)}function ve(I){I===void 0&&(I=i.TEXTURE0+Y-1),nt!==I&&(i.activeTexture(I),nt=I)}function de(I,et,st){st===void 0&&(nt===null?st=i.TEXTURE0+Y-1:st=nt);let dt=ct[st];dt===void 0&&(dt={type:void 0,texture:void 0},ct[st]=dt),(dt.type!==I||dt.texture!==et)&&(nt!==st&&(i.activeTexture(st),nt=st),i.bindTexture(I,et||X[I]),dt.type=I,dt.texture=et)}function b(){let I=ct[nt];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function g(){try{i.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function N(){try{i.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function W(){try{i.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{i.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function V(){try{i.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function bt(){try{i.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function it(){try{i.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function vt(){try{i.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function yt(){try{i.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function tt(){try{i.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function lt(I){qt.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),qt.copy(I))}function Rt(I){te.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),te.copy(I))}function Mt(I,et){let st=l.get(et);st===void 0&&(st=new WeakMap,l.set(et,st));let dt=st.get(I);dt===void 0&&(dt=i.getUniformBlockIndex(et,I.name),st.set(I,dt))}function at(I,et){let dt=l.get(et).get(I);c.get(et)!==dt&&(i.uniformBlockBinding(et,dt,I.__bindingPointIndex),c.set(et,dt))}function Ot(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},nt=null,ct={},h={},f=new WeakMap,p=[],_=null,x=!1,m=null,d=null,w=null,E=null,S=null,R=null,A=null,P=new Wt(0,0,0),F=0,M=!1,y=null,C=null,z=null,H=null,q=null,qt.set(0,0,i.canvas.width,i.canvas.height),te.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:J,disable:ut,bindFramebuffer:Ct,drawBuffers:xt,useProgram:kt,setBlending:re,setMaterial:Ut,setFlipSided:It,setCullFace:gt,setLineWidth:ae,setPolygonOffset:_t,setScissorTest:Bt,activeTexture:ve,bindTexture:de,unbindTexture:b,compressedTexImage2D:g,compressedTexImage3D:N,texImage2D:yt,texImage3D:tt,updateUBOMapping:Mt,uniformBlockBinding:at,texStorage2D:it,texStorage3D:vt,texSubImage2D:W,texSubImage3D:$,compressedTexSubImage2D:V,compressedTexSubImage3D:bt,scissor:lt,viewport:Rt,reset:Ot}}function $m(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Dt,u=new WeakMap,h,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,g){return p?new OffscreenCanvas(b,g):ps("canvas")}function x(b,g,N){let W=1,$=de(b);if(($.width>N||$.height>N)&&(W=N/Math.max($.width,$.height)),W<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let V=Math.floor(W*$.width),bt=Math.floor(W*$.height);h===void 0&&(h=_(V,bt));let it=g?_(V,bt):h;return it.width=V,it.height=bt,it.getContext("2d").drawImage(b,0,0,V,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+V+"x"+bt+")."),it}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),b;return b}function m(b){return b.generateMipmaps}function d(b){i.generateMipmap(b)}function w(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(b,g,N,W,$=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let V=g;if(g===i.RED&&(N===i.FLOAT&&(V=i.R32F),N===i.HALF_FLOAT&&(V=i.R16F),N===i.UNSIGNED_BYTE&&(V=i.R8)),g===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(V=i.R8UI),N===i.UNSIGNED_SHORT&&(V=i.R16UI),N===i.UNSIGNED_INT&&(V=i.R32UI),N===i.BYTE&&(V=i.R8I),N===i.SHORT&&(V=i.R16I),N===i.INT&&(V=i.R32I)),g===i.RG&&(N===i.FLOAT&&(V=i.RG32F),N===i.HALF_FLOAT&&(V=i.RG16F),N===i.UNSIGNED_BYTE&&(V=i.RG8)),g===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(V=i.RG8UI),N===i.UNSIGNED_SHORT&&(V=i.RG16UI),N===i.UNSIGNED_INT&&(V=i.RG32UI),N===i.BYTE&&(V=i.RG8I),N===i.SHORT&&(V=i.RG16I),N===i.INT&&(V=i.RG32I)),g===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(V=i.RGB8UI),N===i.UNSIGNED_SHORT&&(V=i.RGB16UI),N===i.UNSIGNED_INT&&(V=i.RGB32UI),N===i.BYTE&&(V=i.RGB8I),N===i.SHORT&&(V=i.RGB16I),N===i.INT&&(V=i.RGB32I)),g===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(V=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(V=i.RGBA16UI),N===i.UNSIGNED_INT&&(V=i.RGBA32UI),N===i.BYTE&&(V=i.RGBA8I),N===i.SHORT&&(V=i.RGBA16I),N===i.INT&&(V=i.RGBA32I)),g===i.RGB&&(N===i.UNSIGNED_INT_5_9_9_9_REV&&(V=i.RGB9_E5),N===i.UNSIGNED_INT_10F_11F_11F_REV&&(V=i.R11F_G11F_B10F)),g===i.RGBA){let bt=$?ds:Yt.getTransfer(W);N===i.FLOAT&&(V=i.RGBA32F),N===i.HALF_FLOAT&&(V=i.RGBA16F),N===i.UNSIGNED_BYTE&&(V=bt===jt?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(V=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(V=i.RGB5_A1)}return(V===i.R16F||V===i.R32F||V===i.RG16F||V===i.RG32F||V===i.RGBA16F||V===i.RGBA32F)&&t.get("EXT_color_buffer_float"),V}function S(b,g){let N;return b?g===null||g===Zn||g===Wi?N=i.DEPTH24_STENCIL8:g===vn?N=i.DEPTH32F_STENCIL8:g===Hi&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Zn||g===Wi?N=i.DEPTH_COMPONENT24:g===vn?N=i.DEPTH_COMPONENT32F:g===Hi&&(N=i.DEPTH_COMPONENT16),N}function R(b,g){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Ze&&b.minFilter!==en?Math.log2(Math.max(g.width,g.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?g.mipmaps.length:1}function A(b){let g=b.target;g.removeEventListener("dispose",A),F(g),g.isVideoTexture&&u.delete(g)}function P(b){let g=b.target;g.removeEventListener("dispose",P),y(g)}function F(b){let g=n.get(b);if(g.__webglInit===void 0)return;let N=b.source,W=f.get(N);if(W){let $=W[g.__cacheKey];$.usedTimes--,$.usedTimes===0&&M(b),Object.keys(W).length===0&&f.delete(N)}n.remove(b)}function M(b){let g=n.get(b);i.deleteTexture(g.__webglTexture);let N=b.source,W=f.get(N);delete W[g.__cacheKey],a.memory.textures--}function y(b){let g=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(g.__webglFramebuffer[W]))for(let $=0;$<g.__webglFramebuffer[W].length;$++)i.deleteFramebuffer(g.__webglFramebuffer[W][$]);else i.deleteFramebuffer(g.__webglFramebuffer[W]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[W])}else{if(Array.isArray(g.__webglFramebuffer))for(let W=0;W<g.__webglFramebuffer.length;W++)i.deleteFramebuffer(g.__webglFramebuffer[W]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let W=0;W<g.__webglColorRenderbuffer.length;W++)g.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[W]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let N=b.textures;for(let W=0,$=N.length;W<$;W++){let V=n.get(N[W]);V.__webglTexture&&(i.deleteTexture(V.__webglTexture),a.memory.textures--),n.remove(N[W])}n.remove(b)}let C=0;function z(){C=0}function H(){let b=C;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),C+=1,b}function q(b){let g=[];return g.push(b.wrapS),g.push(b.wrapT),g.push(b.wrapR||0),g.push(b.magFilter),g.push(b.minFilter),g.push(b.anisotropy),g.push(b.internalFormat),g.push(b.format),g.push(b.type),g.push(b.generateMipmaps),g.push(b.premultiplyAlpha),g.push(b.flipY),g.push(b.unpackAlignment),g.push(b.colorSpace),g.join()}function Y(b,g){let N=n.get(b);if(b.isVideoTexture&&Bt(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&N.__version!==b.version){let W=b.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(N,b,g);return}}else b.isExternalTexture&&(N.__webglTexture=b.sourceTexture?b.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+g)}function G(b,g){let N=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&N.__version!==b.version){X(N,b,g);return}e.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+g)}function Q(b,g){let N=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&N.__version!==b.version){X(N,b,g);return}e.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+g)}function k(b,g){let N=n.get(b);if(b.version>0&&N.__version!==b.version){J(N,b,g);return}e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+g)}let nt={[dr]:i.REPEAT,[Hn]:i.CLAMP_TO_EDGE,[fr]:i.MIRRORED_REPEAT},ct={[Ze]:i.NEAREST,[yc]:i.NEAREST_MIPMAP_NEAREST,[Ls]:i.NEAREST_MIPMAP_LINEAR,[en]:i.LINEAR,[Hr]:i.LINEAR_MIPMAP_NEAREST,[Yn]:i.LINEAR_MIPMAP_LINEAR},St={[Ec]:i.NEVER,[Ic]:i.ALWAYS,[Tc]:i.LESS,[Lo]:i.LEQUAL,[wc]:i.EQUAL,[Rc]:i.GEQUAL,[Ac]:i.GREATER,[Cc]:i.NOTEQUAL};function Ft(b,g){if(g.type===vn&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===en||g.magFilter===Hr||g.magFilter===Ls||g.magFilter===Yn||g.minFilter===en||g.minFilter===Hr||g.minFilter===Ls||g.minFilter===Yn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,nt[g.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,nt[g.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,nt[g.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,ct[g.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,ct[g.minFilter]),g.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,St[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Ze||g.minFilter!==Ls&&g.minFilter!==Yn||g.type===vn&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let N=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function qt(b,g){let N=!1;b.__webglInit===void 0&&(b.__webglInit=!0,g.addEventListener("dispose",A));let W=g.source,$=f.get(W);$===void 0&&($={},f.set(W,$));let V=q(g);if(V!==b.__cacheKey){$[V]===void 0&&($[V]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),$[V].usedTimes++;let bt=$[b.__cacheKey];bt!==void 0&&($[b.__cacheKey].usedTimes--,bt.usedTimes===0&&M(g)),b.__cacheKey=V,b.__webglTexture=$[V].texture}return N}function te(b,g,N){return Math.floor(Math.floor(b/N)/g)}function Vt(b,g,N,W){let V=b.updateRanges;if(V.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,N,W,g.data);else{V.sort((tt,lt)=>tt.start-lt.start);let bt=0;for(let tt=1;tt<V.length;tt++){let lt=V[bt],Rt=V[tt],Mt=lt.start+lt.count,at=te(Rt.start,g.width,4),Ot=te(lt.start,g.width,4);Rt.start<=Mt+1&&at===Ot&&te(Rt.start+Rt.count-1,g.width,4)===at?lt.count=Math.max(lt.count,Rt.start+Rt.count-lt.start):(++bt,V[bt]=Rt)}V.length=bt+1;let it=i.getParameter(i.UNPACK_ROW_LENGTH),vt=i.getParameter(i.UNPACK_SKIP_PIXELS),yt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let tt=0,lt=V.length;tt<lt;tt++){let Rt=V[tt],Mt=Math.floor(Rt.start/4),at=Math.ceil(Rt.count/4),Ot=Mt%g.width,I=Math.floor(Mt/g.width),et=at,st=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ot),i.pixelStorei(i.UNPACK_SKIP_ROWS,I),e.texSubImage2D(i.TEXTURE_2D,0,Ot,I,et,st,N,W,g.data)}b.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,it),i.pixelStorei(i.UNPACK_SKIP_PIXELS,vt),i.pixelStorei(i.UNPACK_SKIP_ROWS,yt)}}function X(b,g,N){let W=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(W=i.TEXTURE_3D);let $=qt(b,g),V=g.source;e.bindTexture(W,b.__webglTexture,i.TEXTURE0+N);let bt=n.get(V);if(V.version!==bt.__version||$===!0){e.activeTexture(i.TEXTURE0+N);let it=Yt.getPrimaries(Yt.workingColorSpace),vt=g.colorSpace===Pn?null:Yt.getPrimaries(g.colorSpace),yt=g.colorSpace===Pn||it===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let tt=x(g.image,!1,s.maxTextureSize);tt=ve(g,tt);let lt=r.convert(g.format,g.colorSpace),Rt=r.convert(g.type),Mt=E(g.internalFormat,lt,Rt,g.colorSpace,g.isVideoTexture);Ft(W,g);let at,Ot=g.mipmaps,I=g.isVideoTexture!==!0,et=bt.__version===void 0||$===!0,st=V.dataReady,dt=R(g,tt);if(g.isDepthTexture)Mt=S(g.format===Xi,g.type),et&&(I?e.texStorage2D(i.TEXTURE_2D,1,Mt,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,Mt,tt.width,tt.height,0,lt,Rt,null));else if(g.isDataTexture)if(Ot.length>0){I&&et&&e.texStorage2D(i.TEXTURE_2D,dt,Mt,Ot[0].width,Ot[0].height);for(let K=0,Z=Ot.length;K<Z;K++)at=Ot[K],I?st&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,at.width,at.height,lt,Rt,at.data):e.texImage2D(i.TEXTURE_2D,K,Mt,at.width,at.height,0,lt,Rt,at.data);g.generateMipmaps=!1}else I?(et&&e.texStorage2D(i.TEXTURE_2D,dt,Mt,tt.width,tt.height),st&&Vt(g,tt,lt,Rt)):e.texImage2D(i.TEXTURE_2D,0,Mt,tt.width,tt.height,0,lt,Rt,tt.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){I&&et&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,Mt,Ot[0].width,Ot[0].height,tt.depth);for(let K=0,Z=Ot.length;K<Z;K++)if(at=Ot[K],g.format!==$e)if(lt!==null)if(I){if(st)if(g.layerUpdates.size>0){let pt=ko(at.width,at.height,g.format,g.type);for(let Lt of g.layerUpdates){let ne=at.data.subarray(Lt*pt/at.data.BYTES_PER_ELEMENT,(Lt+1)*pt/at.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,Lt,at.width,at.height,1,lt,ne)}g.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,at.width,at.height,tt.depth,lt,at.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,Mt,at.width,at.height,tt.depth,0,at.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?st&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,at.width,at.height,tt.depth,lt,Rt,at.data):e.texImage3D(i.TEXTURE_2D_ARRAY,K,Mt,at.width,at.height,tt.depth,0,lt,Rt,at.data)}else{I&&et&&e.texStorage2D(i.TEXTURE_2D,dt,Mt,Ot[0].width,Ot[0].height);for(let K=0,Z=Ot.length;K<Z;K++)at=Ot[K],g.format!==$e?lt!==null?I?st&&e.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,at.width,at.height,lt,at.data):e.compressedTexImage2D(i.TEXTURE_2D,K,Mt,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?st&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,at.width,at.height,lt,Rt,at.data):e.texImage2D(i.TEXTURE_2D,K,Mt,at.width,at.height,0,lt,Rt,at.data)}else if(g.isDataArrayTexture)if(I){if(et&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,Mt,tt.width,tt.height,tt.depth),st)if(g.layerUpdates.size>0){let K=ko(tt.width,tt.height,g.format,g.type);for(let Z of g.layerUpdates){let pt=tt.data.subarray(Z*K/tt.data.BYTES_PER_ELEMENT,(Z+1)*K/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,tt.width,tt.height,1,lt,Rt,pt)}g.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,lt,Rt,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Mt,tt.width,tt.height,tt.depth,0,lt,Rt,tt.data);else if(g.isData3DTexture)I?(et&&e.texStorage3D(i.TEXTURE_3D,dt,Mt,tt.width,tt.height,tt.depth),st&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,lt,Rt,tt.data)):e.texImage3D(i.TEXTURE_3D,0,Mt,tt.width,tt.height,tt.depth,0,lt,Rt,tt.data);else if(g.isFramebufferTexture){if(et)if(I)e.texStorage2D(i.TEXTURE_2D,dt,Mt,tt.width,tt.height);else{let K=tt.width,Z=tt.height;for(let pt=0;pt<dt;pt++)e.texImage2D(i.TEXTURE_2D,pt,Mt,K,Z,0,lt,Rt,null),K>>=1,Z>>=1}}else if(Ot.length>0){if(I&&et){let K=de(Ot[0]);e.texStorage2D(i.TEXTURE_2D,dt,Mt,K.width,K.height)}for(let K=0,Z=Ot.length;K<Z;K++)at=Ot[K],I?st&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,lt,Rt,at):e.texImage2D(i.TEXTURE_2D,K,Mt,lt,Rt,at);g.generateMipmaps=!1}else if(I){if(et){let K=de(tt);e.texStorage2D(i.TEXTURE_2D,dt,Mt,K.width,K.height)}st&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,lt,Rt,tt)}else e.texImage2D(i.TEXTURE_2D,0,Mt,lt,Rt,tt);m(g)&&d(W),bt.__version=V.version,g.onUpdate&&g.onUpdate(g)}b.__version=g.version}function J(b,g,N){if(g.image.length!==6)return;let W=qt(b,g),$=g.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+N);let V=n.get($);if($.version!==V.__version||W===!0){e.activeTexture(i.TEXTURE0+N);let bt=Yt.getPrimaries(Yt.workingColorSpace),it=g.colorSpace===Pn?null:Yt.getPrimaries(g.colorSpace),vt=g.colorSpace===Pn||bt===it?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let yt=g.isCompressedTexture||g.image[0].isCompressedTexture,tt=g.image[0]&&g.image[0].isDataTexture,lt=[];for(let Z=0;Z<6;Z++)!yt&&!tt?lt[Z]=x(g.image[Z],!0,s.maxCubemapSize):lt[Z]=tt?g.image[Z].image:g.image[Z],lt[Z]=ve(g,lt[Z]);let Rt=lt[0],Mt=r.convert(g.format,g.colorSpace),at=r.convert(g.type),Ot=E(g.internalFormat,Mt,at,g.colorSpace),I=g.isVideoTexture!==!0,et=V.__version===void 0||W===!0,st=$.dataReady,dt=R(g,Rt);Ft(i.TEXTURE_CUBE_MAP,g);let K;if(yt){I&&et&&e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,Ot,Rt.width,Rt.height);for(let Z=0;Z<6;Z++){K=lt[Z].mipmaps;for(let pt=0;pt<K.length;pt++){let Lt=K[pt];g.format!==$e?Mt!==null?I?st&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt,0,0,Lt.width,Lt.height,Mt,Lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt,Ot,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt,0,0,Lt.width,Lt.height,Mt,at,Lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt,Ot,Lt.width,Lt.height,0,Mt,at,Lt.data)}}}else{if(K=g.mipmaps,I&&et){K.length>0&&dt++;let Z=de(lt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,Ot,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(tt){I?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,lt[Z].width,lt[Z].height,Mt,at,lt[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ot,lt[Z].width,lt[Z].height,0,Mt,at,lt[Z].data);for(let pt=0;pt<K.length;pt++){let ne=K[pt].image[Z].image;I?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt+1,0,0,ne.width,ne.height,Mt,at,ne.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt+1,Ot,ne.width,ne.height,0,Mt,at,ne.data)}}else{I?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Mt,at,lt[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ot,Mt,at,lt[Z]);for(let pt=0;pt<K.length;pt++){let Lt=K[pt];I?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt+1,0,0,Mt,at,Lt.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt+1,Ot,Mt,at,Lt.image[Z])}}}m(g)&&d(i.TEXTURE_CUBE_MAP),V.__version=$.version,g.onUpdate&&g.onUpdate(g)}b.__version=g.version}function ut(b,g,N,W,$,V){let bt=r.convert(N.format,N.colorSpace),it=r.convert(N.type),vt=E(N.internalFormat,bt,it,N.colorSpace),yt=n.get(g),tt=n.get(N);if(tt.__renderTarget=g,!yt.__hasExternalTextures){let lt=Math.max(1,g.width>>V),Rt=Math.max(1,g.height>>V);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?e.texImage3D($,V,vt,lt,Rt,g.depth,0,bt,it,null):e.texImage2D($,V,vt,lt,Rt,0,bt,it,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),_t(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,$,tt.__webglTexture,0,ae(g)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,$,tt.__webglTexture,V),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ct(b,g,N){if(i.bindRenderbuffer(i.RENDERBUFFER,b),g.depthBuffer){let W=g.depthTexture,$=W&&W.isDepthTexture?W.type:null,V=S(g.stencilBuffer,$),bt=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=ae(g);_t(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it,V,g.width,g.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,it,V,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,V,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,bt,i.RENDERBUFFER,b)}else{let W=g.textures;for(let $=0;$<W.length;$++){let V=W[$],bt=r.convert(V.format,V.colorSpace),it=r.convert(V.type),vt=E(V.internalFormat,bt,it,V.colorSpace),yt=ae(g);N&&_t(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,yt,vt,g.width,g.height):_t(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,yt,vt,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,vt,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function xt(b,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let W=n.get(g.depthTexture);W.__renderTarget=g,(!W.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Y(g.depthTexture,0);let $=W.__webglTexture,V=ae(g);if(g.depthTexture.format===Di)_t(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(g.depthTexture.format===Xi)_t(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function kt(b){let g=n.get(b),N=b.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==b.depthTexture){let W=b.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),W){let $=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,W.removeEventListener("dispose",$)};W.addEventListener("dispose",$),g.__depthDisposeCallback=$}g.__boundDepthTexture=W}if(b.depthTexture&&!g.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");let W=b.texture.mipmaps;W&&W.length>0?xt(g.__webglFramebuffer[0],b):xt(g.__webglFramebuffer,b)}else if(N){g.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[W]),g.__webglDepthbuffer[W]===void 0)g.__webglDepthbuffer[W]=i.createRenderbuffer(),Ct(g.__webglDepthbuffer[W],b,!1);else{let $=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=g.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,V),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,V)}}else{let W=b.texture.mipmaps;if(W&&W.length>0?e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Ct(g.__webglDepthbuffer,b,!1);else{let $=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,V),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,V)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(b,g,N){let W=n.get(b);g!==void 0&&ut(W.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&kt(b)}function T(b){let g=b.texture,N=n.get(b),W=n.get(g);b.addEventListener("dispose",P);let $=b.textures,V=b.isWebGLCubeRenderTarget===!0,bt=$.length>1;if(bt||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=g.version,a.memory.textures++),V){N.__webglFramebuffer=[];for(let it=0;it<6;it++)if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer[it]=[];for(let vt=0;vt<g.mipmaps.length;vt++)N.__webglFramebuffer[it][vt]=i.createFramebuffer()}else N.__webglFramebuffer[it]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer=[];for(let it=0;it<g.mipmaps.length;it++)N.__webglFramebuffer[it]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(bt)for(let it=0,vt=$.length;it<vt;it++){let yt=n.get($[it]);yt.__webglTexture===void 0&&(yt.__webglTexture=i.createTexture(),a.memory.textures++)}if(b.samples>0&&_t(b)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let it=0;it<$.length;it++){let vt=$[it];N.__webglColorRenderbuffer[it]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[it]);let yt=r.convert(vt.format,vt.colorSpace),tt=r.convert(vt.type),lt=E(vt.internalFormat,yt,tt,vt.colorSpace,b.isXRRenderTarget===!0),Rt=ae(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,lt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.RENDERBUFFER,N.__webglColorRenderbuffer[it])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),Ct(N.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(V){e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),Ft(i.TEXTURE_CUBE_MAP,g);for(let it=0;it<6;it++)if(g.mipmaps&&g.mipmaps.length>0)for(let vt=0;vt<g.mipmaps.length;vt++)ut(N.__webglFramebuffer[it][vt],b,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,vt);else ut(N.__webglFramebuffer[it],b,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);m(g)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let it=0,vt=$.length;it<vt;it++){let yt=$[it],tt=n.get(yt),lt=i.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(lt=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,tt.__webglTexture),Ft(lt,yt),ut(N.__webglFramebuffer,b,yt,i.COLOR_ATTACHMENT0+it,lt,0),m(yt)&&d(lt)}e.unbindTexture()}else{let it=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(it=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(it,W.__webglTexture),Ft(it,g),g.mipmaps&&g.mipmaps.length>0)for(let vt=0;vt<g.mipmaps.length;vt++)ut(N.__webglFramebuffer[vt],b,g,i.COLOR_ATTACHMENT0,it,vt);else ut(N.__webglFramebuffer,b,g,i.COLOR_ATTACHMENT0,it,0);m(g)&&d(it),e.unbindTexture()}b.depthBuffer&&kt(b)}function re(b){let g=b.textures;for(let N=0,W=g.length;N<W;N++){let $=g[N];if(m($)){let V=w(b),bt=n.get($).__webglTexture;e.bindTexture(V,bt),d(V),e.unbindTexture()}}}let Ut=[],It=[];function gt(b){if(b.samples>0){if(_t(b)===!1){let g=b.textures,N=b.width,W=b.height,$=i.COLOR_BUFFER_BIT,V=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=n.get(b),it=g.length>1;if(it)for(let yt=0;yt<g.length;yt++)e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer);let vt=b.texture.mipmaps;vt&&vt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let yt=0;yt<g.length;yt++){if(b.resolveDepthBuffer&&(b.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),it){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,bt.__webglColorRenderbuffer[yt]);let tt=n.get(g[yt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,tt,0)}i.blitFramebuffer(0,0,N,W,0,0,N,W,$,i.NEAREST),c===!0&&(Ut.length=0,It.length=0,Ut.push(i.COLOR_ATTACHMENT0+yt),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Ut.push(V),It.push(V),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,It)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ut))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),it)for(let yt=0;yt<g.length;yt++){e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,bt.__webglColorRenderbuffer[yt]);let tt=n.get(g[yt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,tt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){let g=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function ae(b){return Math.min(s.maxSamples,b.samples)}function _t(b){let g=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Bt(b){let g=a.render.frame;u.get(b)!==g&&(u.set(b,g),b.update())}function ve(b,g){let N=b.colorSpace,W=b.format,$=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||N!==ai&&N!==Pn&&(Yt.getTransfer(N)===jt?(W!==$e||$!==an)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),g}function de(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=z,this.setTexture2D=Y,this.setTexture2DArray=G,this.setTexture3D=Q,this.setTextureCube=k,this.rebindTextures=pe,this.setupRenderTarget=T,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=_t}function Km(i,t){function e(n,s=Pn){let r,a=Yt.getTransfer(s);if(n===an)return i.UNSIGNED_BYTE;if(n===Wr)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Xr)return i.UNSIGNED_SHORT_5_5_5_1;if(n===wo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ao)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Eo)return i.BYTE;if(n===To)return i.SHORT;if(n===Hi)return i.UNSIGNED_SHORT;if(n===Gr)return i.INT;if(n===Zn)return i.UNSIGNED_INT;if(n===vn)return i.FLOAT;if(n===Gi)return i.HALF_FLOAT;if(n===Co)return i.ALPHA;if(n===Ro)return i.RGB;if(n===$e)return i.RGBA;if(n===Di)return i.DEPTH_COMPONENT;if(n===Xi)return i.DEPTH_STENCIL;if(n===Io)return i.RED;if(n===qr)return i.RED_INTEGER;if(n===Po)return i.RG;if(n===Yr)return i.RG_INTEGER;if(n===Zr)return i.RGBA_INTEGER;if(n===Us||n===Ns||n===Fs||n===Os)if(a===jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Us)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ns)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Fs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Os)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Us)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ns)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Fs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Os)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Jr||n===$r||n===Kr||n===jr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Jr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$r)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Kr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===jr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Qr||n===ta||n===ea)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Qr||n===ta)return a===jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ea)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===na||n===ia||n===sa||n===ra||n===aa||n===oa||n===la||n===ca||n===ha||n===ua||n===da||n===fa||n===pa||n===ma)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===na)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ia)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===sa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ra)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===aa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===oa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===la)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ca)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ha)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ua)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===da)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===pa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ma)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ga||n===_a||n===va)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ga)return a===jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===_a)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===va)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xa||n===ya||n===Ma||n===Sa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===xa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ya)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ma)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Sa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Wi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var jm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qm=`
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

}`,Qo=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Es(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new rn({vertexShader:jm,fragmentShader:Qm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new De(new Ts(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},tl=class extends pn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,f=null,p=null,_=null,x=typeof XRWebGLBinding<"u",m=new Qo,d={},w=e.getContextAttributes(),E=null,S=null,R=[],A=[],P=new Dt,F=null,M=new Me;M.viewport=new ce;let y=new Me;y.viewport=new ce;let C=[M,y],z=new Pr,H=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let J=R[X];return J===void 0&&(J=new zi,R[X]=J),J.getTargetRaySpace()},this.getControllerGrip=function(X){let J=R[X];return J===void 0&&(J=new zi,R[X]=J),J.getGripSpace()},this.getHand=function(X){let J=R[X];return J===void 0&&(J=new zi,R[X]=J),J.getHandSpace()};function Y(X){let J=A.indexOf(X.inputSource);if(J===-1)return;let ut=R[J];ut!==void 0&&(ut.update(X.inputSource,X.frame,l||a),ut.dispatchEvent({type:X.type,data:X.inputSource}))}function G(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",Q);for(let X=0;X<R.length;X++){let J=A[X];J!==null&&(A[X]=null,R[X].disconnect(J))}H=null,q=null,m.reset();for(let X in d)delete d[X];t.setRenderTarget(E),p=null,f=null,h=null,s=null,S=null,Vt.stop(),n.isPresenting=!1,t.setPixelRatio(F),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",G),s.addEventListener("inputsourceschange",Q),w.xrCompatible!==!0&&await e.makeXRCompatible(),F=t.getPixelRatio(),t.getSize(P),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ut=null,Ct=null,xt=null;w.depth&&(xt=w.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ut=w.stencil?Xi:Di,Ct=w.stencil?Wi:Zn);let kt={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(kt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new mn(f.textureWidth,f.textureHeight,{format:$e,type:an,depthTexture:new bs(f.textureWidth,f.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let ut={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,ut),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new mn(p.framebufferWidth,p.framebufferHeight,{format:$e,type:an,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Vt.setContext(s),Vt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Q(X){for(let J=0;J<X.removed.length;J++){let ut=X.removed[J],Ct=A.indexOf(ut);Ct>=0&&(A[Ct]=null,R[Ct].disconnect(ut))}for(let J=0;J<X.added.length;J++){let ut=X.added[J],Ct=A.indexOf(ut);if(Ct===-1){for(let kt=0;kt<R.length;kt++)if(kt>=A.length){A.push(ut),Ct=kt;break}else if(A[kt]===null){A[kt]=ut,Ct=kt;break}if(Ct===-1)break}let xt=R[Ct];xt&&xt.connect(ut)}}let k=new U,nt=new U;function ct(X,J,ut){k.setFromMatrixPosition(J.matrixWorld),nt.setFromMatrixPosition(ut.matrixWorld);let Ct=k.distanceTo(nt),xt=J.projectionMatrix.elements,kt=ut.projectionMatrix.elements,pe=xt[14]/(xt[10]-1),T=xt[14]/(xt[10]+1),re=(xt[9]+1)/xt[5],Ut=(xt[9]-1)/xt[5],It=(xt[8]-1)/xt[0],gt=(kt[8]+1)/kt[0],ae=pe*It,_t=pe*gt,Bt=Ct/(-It+gt),ve=Bt*-It;if(J.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ve),X.translateZ(Bt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),xt[10]===-1)X.projectionMatrix.copy(J.projectionMatrix),X.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let de=pe+Bt,b=T+Bt,g=ae-ve,N=_t+(Ct-ve),W=re*T/b*de,$=Ut*T/b*de;X.projectionMatrix.makePerspective(g,N,W,$,de,b),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function St(X,J){J===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(J.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let J=X.near,ut=X.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(ut=m.depthFar)),z.near=y.near=M.near=J,z.far=y.far=M.far=ut,(H!==z.near||q!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),H=z.near,q=z.far),z.layers.mask=X.layers.mask|6,M.layers.mask=z.layers.mask&3,y.layers.mask=z.layers.mask&5;let Ct=X.parent,xt=z.cameras;St(z,Ct);for(let kt=0;kt<xt.length;kt++)St(xt[kt],Ct);xt.length===2?ct(z,M,y):z.projectionMatrix.copy(M.projectionMatrix),Ft(X,z,Ct)};function Ft(X,J,ut){ut===null?X.matrix.copy(J.matrixWorld):(X.matrix.copy(ut.matrixWorld),X.matrix.invert(),X.matrix.multiply(J.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(J.projectionMatrix),X.projectionMatrixInverse.copy(J.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Li*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(X){c=X,f!==null&&(f.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(X){return d[X]};let qt=null;function te(X,J){if(u=J.getViewerPose(l||a),_=J,u!==null){let ut=u.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let Ct=!1;ut.length!==z.cameras.length&&(z.cameras.length=0,Ct=!0);for(let T=0;T<ut.length;T++){let re=ut[T],Ut=null;if(p!==null)Ut=p.getViewport(re);else{let gt=h.getViewSubImage(f,re);Ut=gt.viewport,T===0&&(t.setRenderTargetTextures(S,gt.colorTexture,gt.depthStencilTexture),t.setRenderTarget(S))}let It=C[T];It===void 0&&(It=new Me,It.layers.enable(T),It.viewport=new ce,C[T]=It),It.matrix.fromArray(re.transform.matrix),It.matrix.decompose(It.position,It.quaternion,It.scale),It.projectionMatrix.fromArray(re.projectionMatrix),It.projectionMatrixInverse.copy(It.projectionMatrix).invert(),It.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),T===0&&(z.matrix.copy(It.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Ct===!0&&z.cameras.push(It)}let xt=s.enabledFeatures;if(xt&&xt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=n.getBinding();let T=h.getDepthInformation(ut[0]);T&&T.isValid&&T.texture&&m.init(T,s.renderState)}if(xt&&xt.includes("camera-access")&&x){t.state.unbindTexture(),h=n.getBinding();for(let T=0;T<ut.length;T++){let re=ut[T].camera;if(re){let Ut=d[re];Ut||(Ut=new Es,d[re]=Ut);let It=h.getCameraImage(re);Ut.sourceTexture=It}}}}for(let ut=0;ut<R.length;ut++){let Ct=A[ut],xt=R[ut];Ct!==null&&xt!==void 0&&xt.update(Ct,J,l||a)}qt&&qt(X,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),_=null}let Vt=new rh;Vt.setAnimationLoop(te),this.setAnimationLoop=function(X){qt=X},this.dispose=function(){}}},fi=new sn,tg=new ue;function eg(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Oo(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,w,E,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,S)):d.isMeshMatcapMaterial?(r(m,d),_(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?c(m,d,w,E):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ie&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ie&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let w=t.get(d),E=w.envMap,S=w.envMapRotation;E&&(m.envMap.value=E,fi.copy(S),fi.x*=-1,fi.y*=-1,fi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(fi.y*=-1,fi.z*=-1),m.envMapRotation.value.setFromMatrix4(tg.makeRotationFromEuler(fi)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,w,E){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*w,m.scale.value=E*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,w){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ie&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){let w=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ng(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,E){let S=E.program;n.uniformBlockBinding(w,S)}function l(w,E){let S=s[w.id];S===void 0&&(_(w),S=u(w),s[w.id]=S,w.addEventListener("dispose",m));let R=E.program;n.updateUBOMapping(w,R);let A=t.render.frame;r[w.id]!==A&&(f(w),r[w.id]=A)}function u(w){let E=h();w.__bindingPointIndex=E;let S=i.createBuffer(),R=w.__size,A=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,R,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,S),S}function h(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){let E=s[w.id],S=w.uniforms,R=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let A=0,P=S.length;A<P;A++){let F=Array.isArray(S[A])?S[A]:[S[A]];for(let M=0,y=F.length;M<y;M++){let C=F[M];if(p(C,A,M,R)===!0){let z=C.__offset,H=Array.isArray(C.value)?C.value:[C.value],q=0;for(let Y=0;Y<H.length;Y++){let G=H[Y],Q=x(G);typeof G=="number"||typeof G=="boolean"?(C.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,z+q,C.__data)):G.isMatrix3?(C.__data[0]=G.elements[0],C.__data[1]=G.elements[1],C.__data[2]=G.elements[2],C.__data[3]=0,C.__data[4]=G.elements[3],C.__data[5]=G.elements[4],C.__data[6]=G.elements[5],C.__data[7]=0,C.__data[8]=G.elements[6],C.__data[9]=G.elements[7],C.__data[10]=G.elements[8],C.__data[11]=0):(G.toArray(C.__data,q),q+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(w,E,S,R){let A=w.value,P=E+"_"+S;if(R[P]===void 0)return typeof A=="number"||typeof A=="boolean"?R[P]=A:R[P]=A.clone(),!0;{let F=R[P];if(typeof A=="number"||typeof A=="boolean"){if(F!==A)return R[P]=A,!0}else if(F.equals(A)===!1)return F.copy(A),!0}return!1}function _(w){let E=w.uniforms,S=0,R=16;for(let P=0,F=E.length;P<F;P++){let M=Array.isArray(E[P])?E[P]:[E[P]];for(let y=0,C=M.length;y<C;y++){let z=M[y],H=Array.isArray(z.value)?z.value:[z.value];for(let q=0,Y=H.length;q<Y;q++){let G=H[q],Q=x(G),k=S%R,nt=k%Q.boundary,ct=k+nt;S+=nt,ct!==0&&R-ct<Q.storage&&(S+=R-ct),z.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=S,S+=Q.storage}}}let A=S%R;return A>0&&(S+=R-A),w.__size=S,w.__cache={},this}function x(w){let E={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(E.boundary=4,E.storage=4):w.isVector2?(E.boundary=8,E.storage=8):w.isVector3||w.isColor?(E.boundary=16,E.storage=12):w.isVector4?(E.boundary=16,E.storage=16):w.isMatrix3?(E.boundary=48,E.storage=48):w.isMatrix4?(E.boundary=64,E.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),E}function m(w){let E=w.target;E.removeEventListener("dispose",m);let S=a.indexOf(E.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function d(){for(let w in s)i.deleteBuffer(s[w]);a=[],s={},r={}}return{bind:c,update:l,dispose:d}}var Aa=class{constructor(t={}){let{canvas:e=Pc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let _=new Uint32Array(4),x=new Int32Array(4),m=null,d=null,w=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=In,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,R=!1;this._outputColorSpace=Ce;let A=0,P=0,F=null,M=-1,y=null,C=new ce,z=new ce,H=null,q=new Wt(0),Y=0,G=e.width,Q=e.height,k=1,nt=null,ct=null,St=new ce(0,0,G,Q),Ft=new ce(0,0,G,Q),qt=!1,te=new ki,Vt=!1,X=!1,J=new ue,ut=new U,Ct=new ce,xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},kt=!1;function pe(){return F===null?k:1}let T=n;function re(v,D){return e.getContext(v,D)}try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",dt,!1),e.addEventListener("webglcontextcreationerror",K,!1),T===null){let D="webgl2";if(T=re(D,v),T===null)throw re(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Ut,It,gt,ae,_t,Bt,ve,de,b,g,N,W,$,V,bt,it,vt,yt,tt,lt,Rt,Mt,at,Ot;function I(){Ut=new yp(T),Ut.init(),Mt=new Km(T,Ut),It=new fp(T,Ut,t,Mt),gt=new Jm(T,Ut),It.reversedDepthBuffer&&f&&gt.buffers.depth.setReversed(!0),ae=new bp(T),_t=new Fm,Bt=new $m(T,Ut,gt,_t,It,Mt,ae),ve=new mp(S),de=new xp(S),b=new Cu(T),at=new up(T,b),g=new Mp(T,b,ae,at),N=new Tp(T,g,b,ae),tt=new Ep(T,It,Bt),it=new pp(_t),W=new Nm(S,ve,de,Ut,It,at,it),$=new eg(S,_t),V=new Bm,bt=new Wm(Ut),yt=new hp(S,ve,de,gt,N,p,c),vt=new Ym(S,N,It),Ot=new ng(T,ae,It,gt),lt=new dp(T,Ut,ae),Rt=new Sp(T,Ut,ae),ae.programs=W.programs,S.capabilities=It,S.extensions=Ut,S.properties=_t,S.renderLists=V,S.shadowMap=vt,S.state=gt,S.info=ae}I();let et=new tl(S,T);this.xr=et,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let v=Ut.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=Ut.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(v){v!==void 0&&(k=v,this.setSize(G,Q,!1))},this.getSize=function(v){return v.set(G,Q)},this.setSize=function(v,D,O=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=v,Q=D,e.width=Math.floor(v*k),e.height=Math.floor(D*k),O===!0&&(e.style.width=v+"px",e.style.height=D+"px"),this.setViewport(0,0,v,D)},this.getDrawingBufferSize=function(v){return v.set(G*k,Q*k).floor()},this.setDrawingBufferSize=function(v,D,O){G=v,Q=D,k=O,e.width=Math.floor(v*O),e.height=Math.floor(D*O),this.setViewport(0,0,v,D)},this.getCurrentViewport=function(v){return v.copy(C)},this.getViewport=function(v){return v.copy(St)},this.setViewport=function(v,D,O,B){v.isVector4?St.set(v.x,v.y,v.z,v.w):St.set(v,D,O,B),gt.viewport(C.copy(St).multiplyScalar(k).round())},this.getScissor=function(v){return v.copy(Ft)},this.setScissor=function(v,D,O,B){v.isVector4?Ft.set(v.x,v.y,v.z,v.w):Ft.set(v,D,O,B),gt.scissor(z.copy(Ft).multiplyScalar(k).round())},this.getScissorTest=function(){return qt},this.setScissorTest=function(v){gt.setScissorTest(qt=v)},this.setOpaqueSort=function(v){nt=v},this.setTransparentSort=function(v){ct=v},this.getClearColor=function(v){return v.copy(yt.getClearColor())},this.setClearColor=function(){yt.setClearColor(...arguments)},this.getClearAlpha=function(){return yt.getClearAlpha()},this.setClearAlpha=function(){yt.setClearAlpha(...arguments)},this.clear=function(v=!0,D=!0,O=!0){let B=0;if(v){let L=!1;if(F!==null){let j=F.texture.format;L=j===Zr||j===Yr||j===qr}if(L){let j=F.texture.type,ot=j===an||j===Zn||j===Hi||j===Wi||j===Wr||j===Xr,ft=yt.getClearColor(),ht=yt.getClearAlpha(),At=ft.r,Pt=ft.g,Et=ft.b;ot?(_[0]=At,_[1]=Pt,_[2]=Et,_[3]=ht,T.clearBufferuiv(T.COLOR,0,_)):(x[0]=At,x[1]=Pt,x[2]=Et,x[3]=ht,T.clearBufferiv(T.COLOR,0,x))}else B|=T.COLOR_BUFFER_BIT}D&&(B|=T.DEPTH_BUFFER_BIT),O&&(B|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",dt,!1),e.removeEventListener("webglcontextcreationerror",K,!1),yt.dispose(),V.dispose(),bt.dispose(),_t.dispose(),ve.dispose(),de.dispose(),N.dispose(),at.dispose(),Ot.dispose(),W.dispose(),et.dispose(),et.removeEventListener("sessionstart",un),et.removeEventListener("sessionend",_l),Kn.stop()};function st(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let v=ae.autoReset,D=vt.enabled,O=vt.autoUpdate,B=vt.needsUpdate,L=vt.type;I(),ae.autoReset=v,vt.enabled=D,vt.autoUpdate=O,vt.needsUpdate=B,vt.type=L}function K(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Z(v){let D=v.target;D.removeEventListener("dispose",Z),pt(D)}function pt(v){Lt(v),_t.remove(v)}function Lt(v){let D=_t.get(v).programs;D!==void 0&&(D.forEach(function(O){W.releaseProgram(O)}),v.isShaderMaterial&&W.releaseShaderCache(v))}this.renderBufferDirect=function(v,D,O,B,L,j){D===null&&(D=xt);let ot=L.isMesh&&L.matrixWorld.determinant()<0,ft=Ch(v,D,O,B,L);gt.setMaterial(B,ot);let ht=O.index,At=1;if(B.wireframe===!0){if(ht=g.getWireframeAttribute(O),ht===void 0)return;At=2}let Pt=O.drawRange,Et=O.attributes.position,Ht=Pt.start*At,Qt=(Pt.start+Pt.count)*At;j!==null&&(Ht=Math.max(Ht,j.start*At),Qt=Math.min(Qt,(j.start+j.count)*At)),ht!==null?(Ht=Math.max(Ht,0),Qt=Math.min(Qt,ht.count)):Et!=null&&(Ht=Math.max(Ht,0),Qt=Math.min(Qt,Et.count));let he=Qt-Ht;if(he<0||he===1/0)return;at.setup(L,B,ft,O,ht);let ie,ee=lt;if(ht!==null&&(ie=b.get(ht),ee=Rt,ee.setIndex(ie)),L.isMesh)B.wireframe===!0?(gt.setLineWidth(B.wireframeLinewidth*pe()),ee.setMode(T.LINES)):ee.setMode(T.TRIANGLES);else if(L.isLine){let wt=B.linewidth;wt===void 0&&(wt=1),gt.setLineWidth(wt*pe()),L.isLineSegments?ee.setMode(T.LINES):L.isLineLoop?ee.setMode(T.LINE_LOOP):ee.setMode(T.LINE_STRIP)}else L.isPoints?ee.setMode(T.POINTS):L.isSprite&&ee.setMode(T.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)Ui("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ee.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(Ut.get("WEBGL_multi_draw"))ee.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{let wt=L._multiDrawStarts,oe=L._multiDrawCounts,Zt=L._multiDrawCount,Ue=ht?b.get(ht).bytesPerElement:1,_i=_t.get(B).currentProgram.getUniforms();for(let Ne=0;Ne<Zt;Ne++)_i.setValue(T,"_gl_DrawID",Ne),ee.render(wt[Ne]/Ue,oe[Ne])}else if(L.isInstancedMesh)ee.renderInstances(Ht,he,L.count);else if(O.isInstancedBufferGeometry){let wt=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,oe=Math.min(O.instanceCount,wt);ee.renderInstances(Ht,he,oe)}else ee.render(Ht,he)};function ne(v,D,O){v.transparent===!0&&v.side===Je&&v.forceSinglePass===!1?(v.side=Ie,v.needsUpdate=!0,Ws(v,D,O),v.side=Cn,v.needsUpdate=!0,Ws(v,D,O),v.side=Je):Ws(v,D,O)}this.compile=function(v,D,O=null){O===null&&(O=v),d=bt.get(O),d.init(D),E.push(d),O.traverseVisible(function(L){L.isLight&&L.layers.test(D.layers)&&(d.pushLight(L),L.castShadow&&d.pushShadow(L))}),v!==O&&v.traverseVisible(function(L){L.isLight&&L.layers.test(D.layers)&&(d.pushLight(L),L.castShadow&&d.pushShadow(L))}),d.setupLights();let B=new Set;return v.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;let j=L.material;if(j)if(Array.isArray(j))for(let ot=0;ot<j.length;ot++){let ft=j[ot];ne(ft,O,L),B.add(ft)}else ne(j,O,L),B.add(j)}),d=E.pop(),B},this.compileAsync=function(v,D,O=null){let B=this.compile(v,D,O);return new Promise(L=>{function j(){if(B.forEach(function(ot){_t.get(ot).currentProgram.isReady()&&B.delete(ot)}),B.size===0){L(v);return}setTimeout(j,10)}Ut.get("KHR_parallel_shader_compile")!==null?j():setTimeout(j,10)})};let Kt=null;function yn(v){Kt&&Kt(v)}function un(){Kn.stop()}function _l(){Kn.start()}let Kn=new rh;Kn.setAnimationLoop(yn),typeof self<"u"&&Kn.setContext(self),this.setAnimationLoop=function(v){Kt=v,et.setAnimationLoop(v),v===null?Kn.stop():Kn.start()},et.addEventListener("sessionstart",un),et.addEventListener("sessionend",_l),this.render=function(v,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(D),D=et.getCamera()),v.isScene===!0&&v.onBeforeRender(S,v,D,F),d=bt.get(v,E.length),d.init(D),E.push(d),J.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),te.setFromProjectionMatrix(J,tn,D.reversedDepth),X=this.localClippingEnabled,Vt=it.init(this.clippingPlanes,X),m=V.get(v,w.length),m.init(),w.push(m),et.enabled===!0&&et.isPresenting===!0){let j=S.xr.getDepthSensingMesh();j!==null&&Oa(j,D,-1/0,S.sortObjects)}Oa(v,D,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(nt,ct),kt=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,kt&&yt.addToRenderList(m,v),this.info.render.frame++,Vt===!0&&it.beginShadows();let O=d.state.shadowsArray;vt.render(O,v,D),Vt===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();let B=m.opaque,L=m.transmissive;if(d.setupLights(),D.isArrayCamera){let j=D.cameras;if(L.length>0)for(let ot=0,ft=j.length;ot<ft;ot++){let ht=j[ot];xl(B,L,v,ht)}kt&&yt.render(v);for(let ot=0,ft=j.length;ot<ft;ot++){let ht=j[ot];vl(m,v,ht,ht.viewport)}}else L.length>0&&xl(B,L,v,D),kt&&yt.render(v),vl(m,v,D);F!==null&&P===0&&(Bt.updateMultisampleRenderTarget(F),Bt.updateRenderTargetMipmap(F)),v.isScene===!0&&v.onAfterRender(S,v,D),at.resetDefaultState(),M=-1,y=null,E.pop(),E.length>0?(d=E[E.length-1],Vt===!0&&it.setGlobalState(S.clippingPlanes,d.state.camera)):d=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function Oa(v,D,O,B){if(v.visible===!1)return;if(v.layers.test(D.layers)){if(v.isGroup)O=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(D);else if(v.isLight)d.pushLight(v),v.castShadow&&d.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||te.intersectsSprite(v)){B&&Ct.setFromMatrixPosition(v.matrixWorld).applyMatrix4(J);let ot=N.update(v),ft=v.material;ft.visible&&m.push(v,ot,ft,O,Ct.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||te.intersectsObject(v))){let ot=N.update(v),ft=v.material;if(B&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ct.copy(v.boundingSphere.center)):(ot.boundingSphere===null&&ot.computeBoundingSphere(),Ct.copy(ot.boundingSphere.center)),Ct.applyMatrix4(v.matrixWorld).applyMatrix4(J)),Array.isArray(ft)){let ht=ot.groups;for(let At=0,Pt=ht.length;At<Pt;At++){let Et=ht[At],Ht=ft[Et.materialIndex];Ht&&Ht.visible&&m.push(v,ot,Ht,O,Ct.z,Et)}}else ft.visible&&m.push(v,ot,ft,O,Ct.z,null)}}let j=v.children;for(let ot=0,ft=j.length;ot<ft;ot++)Oa(j[ot],D,O,B)}function vl(v,D,O,B){let L=v.opaque,j=v.transmissive,ot=v.transparent;d.setupLightsView(O),Vt===!0&&it.setGlobalState(S.clippingPlanes,O),B&&gt.viewport(C.copy(B)),L.length>0&&Gs(L,D,O),j.length>0&&Gs(j,D,O),ot.length>0&&Gs(ot,D,O),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function xl(v,D,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[B.id]===void 0&&(d.state.transmissionRenderTarget[B.id]=new mn(1,1,{generateMipmaps:!0,type:Ut.has("EXT_color_buffer_half_float")||Ut.has("EXT_color_buffer_float")?Gi:an,minFilter:Yn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));let j=d.state.transmissionRenderTarget[B.id],ot=B.viewport||C;j.setSize(ot.z*S.transmissionResolutionScale,ot.w*S.transmissionResolutionScale);let ft=S.getRenderTarget(),ht=S.getActiveCubeFace(),At=S.getActiveMipmapLevel();S.setRenderTarget(j),S.getClearColor(q),Y=S.getClearAlpha(),Y<1&&S.setClearColor(16777215,.5),S.clear(),kt&&yt.render(O);let Pt=S.toneMapping;S.toneMapping=In;let Et=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),d.setupLightsView(B),Vt===!0&&it.setGlobalState(S.clippingPlanes,B),Gs(v,O,B),Bt.updateMultisampleRenderTarget(j),Bt.updateRenderTargetMipmap(j),Ut.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let Qt=0,he=D.length;Qt<he;Qt++){let ie=D[Qt],ee=ie.object,wt=ie.geometry,oe=ie.material,Zt=ie.group;if(oe.side===Je&&ee.layers.test(B.layers)){let Ue=oe.side;oe.side=Ie,oe.needsUpdate=!0,yl(ee,O,B,wt,oe,Zt),oe.side=Ue,oe.needsUpdate=!0,Ht=!0}}Ht===!0&&(Bt.updateMultisampleRenderTarget(j),Bt.updateRenderTargetMipmap(j))}S.setRenderTarget(ft,ht,At),S.setClearColor(q,Y),Et!==void 0&&(B.viewport=Et),S.toneMapping=Pt}function Gs(v,D,O){let B=D.isScene===!0?D.overrideMaterial:null;for(let L=0,j=v.length;L<j;L++){let ot=v[L],ft=ot.object,ht=ot.geometry,At=ot.group,Pt=ot.material;Pt.allowOverride===!0&&B!==null&&(Pt=B),ft.layers.test(O.layers)&&yl(ft,D,O,ht,Pt,At)}}function yl(v,D,O,B,L,j){v.onBeforeRender(S,D,O,B,L,j),v.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),L.onBeforeRender(S,D,O,B,v,j),L.transparent===!0&&L.side===Je&&L.forceSinglePass===!1?(L.side=Ie,L.needsUpdate=!0,S.renderBufferDirect(O,D,B,L,v,j),L.side=Cn,L.needsUpdate=!0,S.renderBufferDirect(O,D,B,L,v,j),L.side=Je):S.renderBufferDirect(O,D,B,L,v,j),v.onAfterRender(S,D,O,B,L,j)}function Ws(v,D,O){D.isScene!==!0&&(D=xt);let B=_t.get(v),L=d.state.lights,j=d.state.shadowsArray,ot=L.state.version,ft=W.getParameters(v,L.state,j,D,O),ht=W.getProgramCacheKey(ft),At=B.programs;B.environment=v.isMeshStandardMaterial?D.environment:null,B.fog=D.fog,B.envMap=(v.isMeshStandardMaterial?de:ve).get(v.envMap||B.environment),B.envMapRotation=B.environment!==null&&v.envMap===null?D.environmentRotation:v.envMapRotation,At===void 0&&(v.addEventListener("dispose",Z),At=new Map,B.programs=At);let Pt=At.get(ht);if(Pt!==void 0){if(B.currentProgram===Pt&&B.lightsStateVersion===ot)return Sl(v,ft),Pt}else ft.uniforms=W.getUniforms(v),v.onBeforeCompile(ft,S),Pt=W.acquireProgram(ft,ht),At.set(ht,Pt),B.uniforms=ft.uniforms;let Et=B.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Et.clippingPlanes=it.uniform),Sl(v,ft),B.needsLights=Ih(v),B.lightsStateVersion=ot,B.needsLights&&(Et.ambientLightColor.value=L.state.ambient,Et.lightProbe.value=L.state.probe,Et.directionalLights.value=L.state.directional,Et.directionalLightShadows.value=L.state.directionalShadow,Et.spotLights.value=L.state.spot,Et.spotLightShadows.value=L.state.spotShadow,Et.rectAreaLights.value=L.state.rectArea,Et.ltc_1.value=L.state.rectAreaLTC1,Et.ltc_2.value=L.state.rectAreaLTC2,Et.pointLights.value=L.state.point,Et.pointLightShadows.value=L.state.pointShadow,Et.hemisphereLights.value=L.state.hemi,Et.directionalShadowMap.value=L.state.directionalShadowMap,Et.directionalShadowMatrix.value=L.state.directionalShadowMatrix,Et.spotShadowMap.value=L.state.spotShadowMap,Et.spotLightMatrix.value=L.state.spotLightMatrix,Et.spotLightMap.value=L.state.spotLightMap,Et.pointShadowMap.value=L.state.pointShadowMap,Et.pointShadowMatrix.value=L.state.pointShadowMatrix),B.currentProgram=Pt,B.uniformsList=null,Pt}function Ml(v){if(v.uniformsList===null){let D=v.currentProgram.getUniforms();v.uniformsList=Ji.seqWithValue(D.seq,v.uniforms)}return v.uniformsList}function Sl(v,D){let O=_t.get(v);O.outputColorSpace=D.outputColorSpace,O.batching=D.batching,O.batchingColor=D.batchingColor,O.instancing=D.instancing,O.instancingColor=D.instancingColor,O.instancingMorph=D.instancingMorph,O.skinning=D.skinning,O.morphTargets=D.morphTargets,O.morphNormals=D.morphNormals,O.morphColors=D.morphColors,O.morphTargetsCount=D.morphTargetsCount,O.numClippingPlanes=D.numClippingPlanes,O.numIntersection=D.numClipIntersection,O.vertexAlphas=D.vertexAlphas,O.vertexTangents=D.vertexTangents,O.toneMapping=D.toneMapping}function Ch(v,D,O,B,L){D.isScene!==!0&&(D=xt),Bt.resetTextureUnits();let j=D.fog,ot=B.isMeshStandardMaterial?D.environment:null,ft=F===null?S.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:ai,ht=(B.isMeshStandardMaterial?de:ve).get(B.envMap||ot),At=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Pt=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Et=!!O.morphAttributes.position,Ht=!!O.morphAttributes.normal,Qt=!!O.morphAttributes.color,he=In;B.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(he=S.toneMapping);let ie=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ee=ie!==void 0?ie.length:0,wt=_t.get(B),oe=d.state.lights;if(Vt===!0&&(X===!0||v!==y)){let we=v===y&&B.id===M;it.setState(B,v,we)}let Zt=!1;B.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==oe.state.version||wt.outputColorSpace!==ft||L.isBatchedMesh&&wt.batching===!1||!L.isBatchedMesh&&wt.batching===!0||L.isBatchedMesh&&wt.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&wt.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&wt.instancing===!1||!L.isInstancedMesh&&wt.instancing===!0||L.isSkinnedMesh&&wt.skinning===!1||!L.isSkinnedMesh&&wt.skinning===!0||L.isInstancedMesh&&wt.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&wt.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&wt.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&wt.instancingMorph===!1&&L.morphTexture!==null||wt.envMap!==ht||B.fog===!0&&wt.fog!==j||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==it.numPlanes||wt.numIntersection!==it.numIntersection)||wt.vertexAlphas!==At||wt.vertexTangents!==Pt||wt.morphTargets!==Et||wt.morphNormals!==Ht||wt.morphColors!==Qt||wt.toneMapping!==he||wt.morphTargetsCount!==ee)&&(Zt=!0):(Zt=!0,wt.__version=B.version);let Ue=wt.currentProgram;Zt===!0&&(Ue=Ws(B,D,L));let _i=!1,Ne=!1,ss=!1,le=Ue.getUniforms(),Xe=wt.uniforms;if(gt.useProgram(Ue.program)&&(_i=!0,Ne=!0,ss=!0),B.id!==M&&(M=B.id,Ne=!0),_i||y!==v){gt.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),le.setValue(T,"projectionMatrix",v.projectionMatrix),le.setValue(T,"viewMatrix",v.matrixWorldInverse);let Pe=le.map.cameraPosition;Pe!==void 0&&Pe.setValue(T,ut.setFromMatrixPosition(v.matrixWorld)),It.logarithmicDepthBuffer&&le.setValue(T,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&le.setValue(T,"isOrthographic",v.isOrthographicCamera===!0),y!==v&&(y=v,Ne=!0,ss=!0)}if(L.isSkinnedMesh){le.setOptional(T,L,"bindMatrix"),le.setOptional(T,L,"bindMatrixInverse");let we=L.skeleton;we&&(we.boneTexture===null&&we.computeBoneTexture(),le.setValue(T,"boneTexture",we.boneTexture,Bt))}L.isBatchedMesh&&(le.setOptional(T,L,"batchingTexture"),le.setValue(T,"batchingTexture",L._matricesTexture,Bt),le.setOptional(T,L,"batchingIdTexture"),le.setValue(T,"batchingIdTexture",L._indirectTexture,Bt),le.setOptional(T,L,"batchingColorTexture"),L._colorsTexture!==null&&le.setValue(T,"batchingColorTexture",L._colorsTexture,Bt));let qe=O.morphAttributes;if((qe.position!==void 0||qe.normal!==void 0||qe.color!==void 0)&&tt.update(L,O,Ue),(Ne||wt.receiveShadow!==L.receiveShadow)&&(wt.receiveShadow=L.receiveShadow,le.setValue(T,"receiveShadow",L.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Xe.envMap.value=ht,Xe.flipEnvMap.value=ht.isCubeTexture&&ht.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&D.environment!==null&&(Xe.envMapIntensity.value=D.environmentIntensity),Ne&&(le.setValue(T,"toneMappingExposure",S.toneMappingExposure),wt.needsLights&&Rh(Xe,ss),j&&B.fog===!0&&$.refreshFogUniforms(Xe,j),$.refreshMaterialUniforms(Xe,B,k,Q,d.state.transmissionRenderTarget[v.id]),Ji.upload(T,Ml(wt),Xe,Bt)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Ji.upload(T,Ml(wt),Xe,Bt),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&le.setValue(T,"center",L.center),le.setValue(T,"modelViewMatrix",L.modelViewMatrix),le.setValue(T,"normalMatrix",L.normalMatrix),le.setValue(T,"modelMatrix",L.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let we=B.uniformsGroups;for(let Pe=0,Ba=we.length;Pe<Ba;Pe++){let jn=we[Pe];Ot.update(jn,Ue),Ot.bind(jn,Ue)}}return Ue}function Rh(v,D){v.ambientLightColor.needsUpdate=D,v.lightProbe.needsUpdate=D,v.directionalLights.needsUpdate=D,v.directionalLightShadows.needsUpdate=D,v.pointLights.needsUpdate=D,v.pointLightShadows.needsUpdate=D,v.spotLights.needsUpdate=D,v.spotLightShadows.needsUpdate=D,v.rectAreaLights.needsUpdate=D,v.hemisphereLights.needsUpdate=D}function Ih(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(v,D,O){let B=_t.get(v);B.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),_t.get(v.texture).__webglTexture=D,_t.get(v.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:O,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,D){let O=_t.get(v);O.__webglFramebuffer=D,O.__useDefaultFramebuffer=D===void 0};let Ph=T.createFramebuffer();this.setRenderTarget=function(v,D=0,O=0){F=v,A=D,P=O;let B=!0,L=null,j=!1,ot=!1;if(v){let ht=_t.get(v);if(ht.__useDefaultFramebuffer!==void 0)gt.bindFramebuffer(T.FRAMEBUFFER,null),B=!1;else if(ht.__webglFramebuffer===void 0)Bt.setupRenderTarget(v);else if(ht.__hasExternalTextures)Bt.rebindTextures(v,_t.get(v.texture).__webglTexture,_t.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Et=v.depthTexture;if(ht.__boundDepthTexture!==Et){if(Et!==null&&_t.has(Et)&&(v.width!==Et.image.width||v.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Bt.setupDepthRenderbuffer(v)}}let At=v.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(ot=!0);let Pt=_t.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Pt[D])?L=Pt[D][O]:L=Pt[D],j=!0):v.samples>0&&Bt.useMultisampledRTT(v)===!1?L=_t.get(v).__webglMultisampledFramebuffer:Array.isArray(Pt)?L=Pt[O]:L=Pt,C.copy(v.viewport),z.copy(v.scissor),H=v.scissorTest}else C.copy(St).multiplyScalar(k).floor(),z.copy(Ft).multiplyScalar(k).floor(),H=qt;if(O!==0&&(L=Ph),gt.bindFramebuffer(T.FRAMEBUFFER,L)&&B&&gt.drawBuffers(v,L),gt.viewport(C),gt.scissor(z),gt.setScissorTest(H),j){let ht=_t.get(v.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+D,ht.__webglTexture,O)}else if(ot){let ht=D;for(let At=0;At<v.textures.length;At++){let Pt=_t.get(v.textures[At]);T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+At,Pt.__webglTexture,O,ht)}}else if(v!==null&&O!==0){let ht=_t.get(v.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,ht.__webglTexture,O)}M=-1},this.readRenderTargetPixels=function(v,D,O,B,L,j,ot,ft=0){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ht=_t.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ot!==void 0&&(ht=ht[ot]),ht){gt.bindFramebuffer(T.FRAMEBUFFER,ht);try{let At=v.textures[ft],Pt=At.format,Et=At.type;if(!It.textureFormatReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!It.textureTypeReadable(Et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=v.width-B&&O>=0&&O<=v.height-L&&(v.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+ft),T.readPixels(D,O,B,L,Mt.convert(Pt),Mt.convert(Et),j))}finally{let At=F!==null?_t.get(F).__webglFramebuffer:null;gt.bindFramebuffer(T.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(v,D,O,B,L,j,ot,ft=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ht=_t.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ot!==void 0&&(ht=ht[ot]),ht)if(D>=0&&D<=v.width-B&&O>=0&&O<=v.height-L){gt.bindFramebuffer(T.FRAMEBUFFER,ht);let At=v.textures[ft],Pt=At.format,Et=At.type;if(!It.textureFormatReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!It.textureTypeReadable(Et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ht=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Ht),T.bufferData(T.PIXEL_PACK_BUFFER,j.byteLength,T.STREAM_READ),v.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+ft),T.readPixels(D,O,B,L,Mt.convert(Pt),Mt.convert(Et),0);let Qt=F!==null?_t.get(F).__webglFramebuffer:null;gt.bindFramebuffer(T.FRAMEBUFFER,Qt);let he=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await Dc(T,he,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Ht),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,j),T.deleteBuffer(Ht),T.deleteSync(he),j}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,D=null,O=0){let B=Math.pow(2,-O),L=Math.floor(v.image.width*B),j=Math.floor(v.image.height*B),ot=D!==null?D.x:0,ft=D!==null?D.y:0;Bt.setTexture2D(v,0),T.copyTexSubImage2D(T.TEXTURE_2D,O,0,0,ot,ft,L,j),gt.unbindTexture()};let Dh=T.createFramebuffer(),Lh=T.createFramebuffer();this.copyTextureToTexture=function(v,D,O=null,B=null,L=0,j=null){j===null&&(L!==0?(Ui("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),j=L,L=0):j=0);let ot,ft,ht,At,Pt,Et,Ht,Qt,he,ie=v.isCompressedTexture?v.mipmaps[j]:v.image;if(O!==null)ot=O.max.x-O.min.x,ft=O.max.y-O.min.y,ht=O.isBox3?O.max.z-O.min.z:1,At=O.min.x,Pt=O.min.y,Et=O.isBox3?O.min.z:0;else{let qe=Math.pow(2,-L);ot=Math.floor(ie.width*qe),ft=Math.floor(ie.height*qe),v.isDataArrayTexture?ht=ie.depth:v.isData3DTexture?ht=Math.floor(ie.depth*qe):ht=1,At=0,Pt=0,Et=0}B!==null?(Ht=B.x,Qt=B.y,he=B.z):(Ht=0,Qt=0,he=0);let ee=Mt.convert(D.format),wt=Mt.convert(D.type),oe;D.isData3DTexture?(Bt.setTexture3D(D,0),oe=T.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Bt.setTexture2DArray(D,0),oe=T.TEXTURE_2D_ARRAY):(Bt.setTexture2D(D,0),oe=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,D.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,D.unpackAlignment);let Zt=T.getParameter(T.UNPACK_ROW_LENGTH),Ue=T.getParameter(T.UNPACK_IMAGE_HEIGHT),_i=T.getParameter(T.UNPACK_SKIP_PIXELS),Ne=T.getParameter(T.UNPACK_SKIP_ROWS),ss=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,ie.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,ie.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,At),T.pixelStorei(T.UNPACK_SKIP_ROWS,Pt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Et);let le=v.isDataArrayTexture||v.isData3DTexture,Xe=D.isDataArrayTexture||D.isData3DTexture;if(v.isDepthTexture){let qe=_t.get(v),we=_t.get(D),Pe=_t.get(qe.__renderTarget),Ba=_t.get(we.__renderTarget);gt.bindFramebuffer(T.READ_FRAMEBUFFER,Pe.__webglFramebuffer),gt.bindFramebuffer(T.DRAW_FRAMEBUFFER,Ba.__webglFramebuffer);for(let jn=0;jn<ht;jn++)le&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,_t.get(v).__webglTexture,L,Et+jn),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,_t.get(D).__webglTexture,j,he+jn)),T.blitFramebuffer(At,Pt,ot,ft,Ht,Qt,ot,ft,T.DEPTH_BUFFER_BIT,T.NEAREST);gt.bindFramebuffer(T.READ_FRAMEBUFFER,null),gt.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(L!==0||v.isRenderTargetTexture||_t.has(v)){let qe=_t.get(v),we=_t.get(D);gt.bindFramebuffer(T.READ_FRAMEBUFFER,Dh),gt.bindFramebuffer(T.DRAW_FRAMEBUFFER,Lh);for(let Pe=0;Pe<ht;Pe++)le?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,qe.__webglTexture,L,Et+Pe):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,qe.__webglTexture,L),Xe?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,we.__webglTexture,j,he+Pe):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,we.__webglTexture,j),L!==0?T.blitFramebuffer(At,Pt,ot,ft,Ht,Qt,ot,ft,T.COLOR_BUFFER_BIT,T.NEAREST):Xe?T.copyTexSubImage3D(oe,j,Ht,Qt,he+Pe,At,Pt,ot,ft):T.copyTexSubImage2D(oe,j,Ht,Qt,At,Pt,ot,ft);gt.bindFramebuffer(T.READ_FRAMEBUFFER,null),gt.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else Xe?v.isDataTexture||v.isData3DTexture?T.texSubImage3D(oe,j,Ht,Qt,he,ot,ft,ht,ee,wt,ie.data):D.isCompressedArrayTexture?T.compressedTexSubImage3D(oe,j,Ht,Qt,he,ot,ft,ht,ee,ie.data):T.texSubImage3D(oe,j,Ht,Qt,he,ot,ft,ht,ee,wt,ie):v.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,j,Ht,Qt,ot,ft,ee,wt,ie.data):v.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,j,Ht,Qt,ie.width,ie.height,ee,ie.data):T.texSubImage2D(T.TEXTURE_2D,j,Ht,Qt,ot,ft,ee,wt,ie);T.pixelStorei(T.UNPACK_ROW_LENGTH,Zt),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Ue),T.pixelStorei(T.UNPACK_SKIP_PIXELS,_i),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ne),T.pixelStorei(T.UNPACK_SKIP_IMAGES,ss),j===0&&D.generateMipmaps&&T.generateMipmap(oe),gt.unbindTexture()},this.initRenderTarget=function(v){_t.get(v).__webglFramebuffer===void 0&&Bt.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Bt.setTextureCube(v,0):v.isData3DTexture?Bt.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Bt.setTexture2DArray(v,0):Bt.setTexture2D(v,0),gt.unbindTexture()},this.resetState=function(){A=0,P=0,F=null,gt.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}};var nl={type:"change"},rl={type:"start"},al={type:"end"},hh=1e-6,Jt={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4},Ra=new Dt,Jn=new Dt,sg=new U,Ia=new U,il=new U,Ki=new Be,uh=new U,Pa=new U,sl=new U,Da=new U,La=class extends Ps{constructor(t,e=null){super(t,e),this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:Ve.ROTATE,MIDDLE:Ve.DOLLY,RIGHT:Ve.PAN},this.target=new U,this.state=Jt.NONE,this.keyState=Jt.NONE,this._lastPosition=new U,this._lastZoom=1,this._touchZoomDistanceStart=0,this._touchZoomDistanceEnd=0,this._lastAngle=0,this._eye=new U,this._movePrev=new Dt,this._moveCurr=new Dt,this._lastAxis=new U,this._zoomStart=new Dt,this._zoomEnd=new Dt,this._panStart=new Dt,this._panEnd=new Dt,this._pointers=[],this._pointerPositions={},this._onPointerMove=ag.bind(this),this._onPointerDown=rg.bind(this),this._onPointerUp=og.bind(this),this._onPointerCancel=lg.bind(this),this._onContextMenu=mg.bind(this),this._onMouseWheel=pg.bind(this),this._onKeyDown=hg.bind(this),this._onKeyUp=cg.bind(this),this._onTouchStart=gg.bind(this),this._onTouchMove=_g.bind(this),this._onTouchEnd=vg.bind(this),this._onMouseDown=ug.bind(this),this._onMouseMove=dg.bind(this),this._onMouseUp=fg.bind(this),this._target0=this.target.clone(),this._position0=this.object.position.clone(),this._up0=this.object.up.clone(),this._zoom0=this.object.zoom,e!==null&&(this.connect(e),this.handleResize()),this.update()}connect(t){super.connect(t),window.addEventListener("keydown",this._onKeyDown),window.addEventListener("keyup",this._onKeyUp),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerCancel),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.style.touchAction="none"}disconnect(){window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp),this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerCancel),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}handleResize(){let t=this.domElement.getBoundingClientRect(),e=this.domElement.ownerDocument.documentElement;this.screen.left=t.left+window.pageXOffset-e.clientLeft,this.screen.top=t.top+window.pageYOffset-e.clientTop,this.screen.width=t.width,this.screen.height=t.height}update(){this._eye.subVectors(this.object.position,this.target),this.noRotate||this._rotateCamera(),this.noZoom||this._zoomCamera(),this.noPan||this._panCamera(),this.object.position.addVectors(this.target,this._eye),this.object.isPerspectiveCamera?(this._checkDistances(),this.object.lookAt(this.target),this._lastPosition.distanceToSquared(this.object.position)>hh&&(this.dispatchEvent(nl),this._lastPosition.copy(this.object.position))):this.object.isOrthographicCamera?(this.object.lookAt(this.target),(this._lastPosition.distanceToSquared(this.object.position)>hh||this._lastZoom!==this.object.zoom)&&(this.dispatchEvent(nl),this._lastPosition.copy(this.object.position),this._lastZoom=this.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type.")}reset(){this.state=Jt.NONE,this.keyState=Jt.NONE,this.target.copy(this._target0),this.object.position.copy(this._position0),this.object.up.copy(this._up0),this.object.zoom=this._zoom0,this.object.updateProjectionMatrix(),this._eye.subVectors(this.object.position,this.target),this.object.lookAt(this.target),this.dispatchEvent(nl),this._lastPosition.copy(this.object.position),this._lastZoom=this.object.zoom}_panCamera(){if(Jn.copy(this._panEnd).sub(this._panStart),Jn.lengthSq()){if(this.object.isOrthographicCamera){let t=(this.object.right-this.object.left)/this.object.zoom/this.domElement.clientWidth,e=(this.object.top-this.object.bottom)/this.object.zoom/this.domElement.clientWidth;Jn.x*=t,Jn.y*=e}Jn.multiplyScalar(this._eye.length()*this.panSpeed),Ia.copy(this._eye).cross(this.object.up).setLength(Jn.x),Ia.add(sg.copy(this.object.up).setLength(Jn.y)),this.object.position.add(Ia),this.target.add(Ia),this.staticMoving?this._panStart.copy(this._panEnd):this._panStart.add(Jn.subVectors(this._panEnd,this._panStart).multiplyScalar(this.dynamicDampingFactor))}}_rotateCamera(){Da.set(this._moveCurr.x-this._movePrev.x,this._moveCurr.y-this._movePrev.y,0);let t=Da.length();t?(this._eye.copy(this.object.position).sub(this.target),uh.copy(this._eye).normalize(),Pa.copy(this.object.up).normalize(),sl.crossVectors(Pa,uh).normalize(),Pa.setLength(this._moveCurr.y-this._movePrev.y),sl.setLength(this._moveCurr.x-this._movePrev.x),Da.copy(Pa.add(sl)),il.crossVectors(Da,this._eye).normalize(),t*=this.rotateSpeed,Ki.setFromAxisAngle(il,t),this._eye.applyQuaternion(Ki),this.object.up.applyQuaternion(Ki),this._lastAxis.copy(il),this._lastAngle=t):!this.staticMoving&&this._lastAngle&&(this._lastAngle*=Math.sqrt(1-this.dynamicDampingFactor),this._eye.copy(this.object.position).sub(this.target),Ki.setFromAxisAngle(this._lastAxis,this._lastAngle),this._eye.applyQuaternion(Ki),this.object.up.applyQuaternion(Ki)),this._movePrev.copy(this._moveCurr)}_zoomCamera(){let t;this.state===Jt.TOUCH_ZOOM_PAN?(t=this._touchZoomDistanceStart/this._touchZoomDistanceEnd,this._touchZoomDistanceStart=this._touchZoomDistanceEnd,this.object.isPerspectiveCamera?this._eye.multiplyScalar(t):this.object.isOrthographicCamera?(this.object.zoom=Le.clamp(this.object.zoom/t,this.minZoom,this.maxZoom),this._lastZoom!==this.object.zoom&&this.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(t=1+(this._zoomEnd.y-this._zoomStart.y)*this.zoomSpeed,t!==1&&t>0&&(this.object.isPerspectiveCamera?this._eye.multiplyScalar(t):this.object.isOrthographicCamera?(this.object.zoom=Le.clamp(this.object.zoom/t,this.minZoom,this.maxZoom),this._lastZoom!==this.object.zoom&&this.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),this.staticMoving?this._zoomStart.copy(this._zoomEnd):this._zoomStart.y+=(this._zoomEnd.y-this._zoomStart.y)*this.dynamicDampingFactor)}_getMouseOnScreen(t,e){return Ra.set((t-this.screen.left)/this.screen.width,(e-this.screen.top)/this.screen.height),Ra}_getMouseOnCircle(t,e){return Ra.set((t-this.screen.width*.5-this.screen.left)/(this.screen.width*.5),(this.screen.height+2*(this.screen.top-e))/this.screen.width),Ra}_addPointer(t){this._pointers.push(t)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e].pointerId==t.pointerId){this._pointers.splice(e,1);return}}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Dt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0].pointerId?this._pointers[1]:this._pointers[0];return this._pointerPositions[e.pointerId]}_checkDistances(){(!this.noZoom||!this.noPan)&&(this._eye.lengthSq()>this.maxDistance*this.maxDistance&&(this.object.position.addVectors(this.target,this._eye.setLength(this.maxDistance)),this._zoomStart.copy(this._zoomEnd)),this._eye.lengthSq()<this.minDistance*this.minDistance&&(this.object.position.addVectors(this.target,this._eye.setLength(this.minDistance)),this._zoomStart.copy(this._zoomEnd)))}};function rg(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i))}function ag(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function og(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchEnd(i):this._onMouseUp(),this._removePointer(i),this._pointers.length===0&&(this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp)))}function lg(i){this._removePointer(i)}function cg(){this.enabled!==!1&&(this.keyState=Jt.NONE,window.addEventListener("keydown",this._onKeyDown))}function hg(i){this.enabled!==!1&&(window.removeEventListener("keydown",this._onKeyDown),this.keyState===Jt.NONE&&(i.code===this.keys[Jt.ROTATE]&&!this.noRotate?this.keyState=Jt.ROTATE:i.code===this.keys[Jt.ZOOM]&&!this.noZoom?this.keyState=Jt.ZOOM:i.code===this.keys[Jt.PAN]&&!this.noPan&&(this.keyState=Jt.PAN)))}function ug(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ve.DOLLY:this.state=Jt.ZOOM;break;case Ve.ROTATE:this.state=Jt.ROTATE;break;case Ve.PAN:this.state=Jt.PAN;break;default:this.state=Jt.NONE}let e=this.keyState!==Jt.NONE?this.keyState:this.state;e===Jt.ROTATE&&!this.noRotate?(this._moveCurr.copy(this._getMouseOnCircle(i.pageX,i.pageY)),this._movePrev.copy(this._moveCurr)):e===Jt.ZOOM&&!this.noZoom?(this._zoomStart.copy(this._getMouseOnScreen(i.pageX,i.pageY)),this._zoomEnd.copy(this._zoomStart)):e===Jt.PAN&&!this.noPan&&(this._panStart.copy(this._getMouseOnScreen(i.pageX,i.pageY)),this._panEnd.copy(this._panStart)),this.dispatchEvent(rl)}function dg(i){let t=this.keyState!==Jt.NONE?this.keyState:this.state;t===Jt.ROTATE&&!this.noRotate?(this._movePrev.copy(this._moveCurr),this._moveCurr.copy(this._getMouseOnCircle(i.pageX,i.pageY))):t===Jt.ZOOM&&!this.noZoom?this._zoomEnd.copy(this._getMouseOnScreen(i.pageX,i.pageY)):t===Jt.PAN&&!this.noPan&&this._panEnd.copy(this._getMouseOnScreen(i.pageX,i.pageY))}function fg(){this.state=Jt.NONE,this.dispatchEvent(al)}function pg(i){if(this.enabled!==!1&&this.noZoom!==!0){switch(i.preventDefault(),i.deltaMode){case 2:this._zoomStart.y-=i.deltaY*.025;break;case 1:this._zoomStart.y-=i.deltaY*.01;break;default:this._zoomStart.y-=i.deltaY*25e-5;break}this.dispatchEvent(rl),this.dispatchEvent(al)}}function mg(i){this.enabled!==!1&&i.preventDefault()}function gg(i){switch(this._trackPointer(i),this._pointers.length){case 1:this.state=Jt.TOUCH_ROTATE,this._moveCurr.copy(this._getMouseOnCircle(this._pointers[0].pageX,this._pointers[0].pageY)),this._movePrev.copy(this._moveCurr);break;default:this.state=Jt.TOUCH_ZOOM_PAN;let t=this._pointers[0].pageX-this._pointers[1].pageX,e=this._pointers[0].pageY-this._pointers[1].pageY;this._touchZoomDistanceEnd=this._touchZoomDistanceStart=Math.sqrt(t*t+e*e);let n=(this._pointers[0].pageX+this._pointers[1].pageX)/2,s=(this._pointers[0].pageY+this._pointers[1].pageY)/2;this._panStart.copy(this._getMouseOnScreen(n,s)),this._panEnd.copy(this._panStart);break}this.dispatchEvent(rl)}function _g(i){switch(this._trackPointer(i),this._pointers.length){case 1:this._movePrev.copy(this._moveCurr),this._moveCurr.copy(this._getMouseOnCircle(i.pageX,i.pageY));break;default:let t=this._getSecondPointerPosition(i),e=i.pageX-t.x,n=i.pageY-t.y;this._touchZoomDistanceEnd=Math.sqrt(e*e+n*n);let s=(i.pageX+t.x)/2,r=(i.pageY+t.y)/2;this._panEnd.copy(this._getMouseOnScreen(s,r));break}}function vg(i){switch(this._pointers.length){case 0:this.state=Jt.NONE;break;case 1:this.state=Jt.TOUCH_ROTATE,this._moveCurr.copy(this._getMouseOnCircle(i.pageX,i.pageY)),this._movePrev.copy(this._moveCurr);break;case 2:this.state=Jt.TOUCH_ZOOM_PAN;for(let t=0;t<this._pointers.length;t++)if(this._pointers[t].pointerId!==i.pointerId){let e=this._pointerPositions[this._pointers[t].pointerId];this._moveCurr.copy(this._getMouseOnCircle(e.x,e.y)),this._movePrev.copy(this._moveCurr);break}break}this.dispatchEvent(al)}var He=Uint8Array,ji=Uint16Array,xg=Int32Array,dh=new He([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),fh=new He([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),yg=new He([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),ph=function(i,t){for(var e=new ji(31),n=0;n<31;++n)e[n]=t+=1<<i[n-1];for(var s=new xg(e[30]),n=1;n<30;++n)for(var r=e[n];r<e[n+1];++r)s[r]=r-e[n]<<5|n;return{b:e,r:s}},mh=ph(dh,2),gh=mh.b,Mg=mh.r;gh[28]=258,Mg[258]=28;var _h=ph(fh,0),Sg=_h.b,Sx=_h.r,cl=new ji(32768);for($t=0;$t<32768;++$t)Dn=($t&43690)>>1|($t&21845)<<1,Dn=(Dn&52428)>>2|(Dn&13107)<<2,Dn=(Dn&61680)>>4|(Dn&3855)<<4,cl[$t]=((Dn&65280)>>8|(Dn&255)<<8)>>1;var Dn,$t,zs=(function(i,t,e){for(var n=i.length,s=0,r=new ji(t);s<n;++s)i[s]&&++r[i[s]-1];var a=new ji(t);for(s=1;s<t;++s)a[s]=a[s-1]+r[s-1]<<1;var o;if(e){o=new ji(1<<t);var c=15-t;for(s=0;s<n;++s)if(i[s])for(var l=s<<4|i[s],u=t-i[s],h=a[i[s]-1]++<<u,f=h|(1<<u)-1;h<=f;++h)o[cl[h]>>c]=l}else for(o=new ji(n),s=0;s<n;++s)i[s]&&(o[s]=cl[a[i[s]-1]++]>>15-i[s]);return o}),ks=new He(288);for($t=0;$t<144;++$t)ks[$t]=8;var $t;for($t=144;$t<256;++$t)ks[$t]=9;var $t;for($t=256;$t<280;++$t)ks[$t]=7;var $t;for($t=280;$t<288;++$t)ks[$t]=8;var $t,vh=new He(32);for($t=0;$t<32;++$t)vh[$t]=5;var $t;var bg=zs(ks,9,1);var Eg=zs(vh,5,1),ol=function(i){for(var t=i[0],e=1;e<i.length;++e)i[e]>t&&(t=i[e]);return t},on=function(i,t,e){var n=t/8|0;return(i[n]|i[n+1]<<8)>>(t&7)&e},ll=function(i,t){var e=t/8|0;return(i[e]|i[e+1]<<8|i[e+2]<<16)>>(t&7)},Tg=function(i){return(i+7)/8|0},wg=function(i,t,e){return(t==null||t<0)&&(t=0),(e==null||e>i.length)&&(e=i.length),new He(i.subarray(t,e))};var Ag=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],ln=function(i,t,e){var n=new Error(t||Ag[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,ln),!e)throw n;return n},Cg=function(i,t,e,n){var s=i.length,r=n?n.length:0;if(!s||t.f&&!t.l)return e||new He(0);var a=!e,o=a||t.i!=2,c=t.i;a&&(e=new He(s*3));var l=function(kt){var pe=e.length;if(kt>pe){var T=new He(Math.max(pe*2,kt));T.set(e),e=T}},u=t.f||0,h=t.p||0,f=t.b||0,p=t.l,_=t.d,x=t.m,m=t.n,d=s*8;do{if(!p){u=on(i,h,1);var w=on(i,h+1,3);if(h+=3,w)if(w==1)p=bg,_=Eg,x=9,m=5;else if(w==2){var A=on(i,h,31)+257,P=on(i,h+10,15)+4,F=A+on(i,h+5,31)+1;h+=14;for(var M=new He(F),y=new He(19),C=0;C<P;++C)y[yg[C]]=on(i,h+C*3,7);h+=P*3;for(var z=ol(y),H=(1<<z)-1,q=zs(y,z,1),C=0;C<F;){var Y=q[on(i,h,H)];h+=Y&15;var E=Y>>4;if(E<16)M[C++]=E;else{var G=0,Q=0;for(E==16?(Q=3+on(i,h,3),h+=2,G=M[C-1]):E==17?(Q=3+on(i,h,7),h+=3):E==18&&(Q=11+on(i,h,127),h+=7);Q--;)M[C++]=G}}var k=M.subarray(0,A),nt=M.subarray(A);x=ol(k),m=ol(nt),p=zs(k,x,1),_=zs(nt,m,1)}else ln(1);else{var E=Tg(h)+4,S=i[E-4]|i[E-3]<<8,R=E+S;if(R>s){c&&ln(0);break}o&&l(f+S),e.set(i.subarray(E,R),f),t.b=f+=S,t.p=h=R*8,t.f=u;continue}if(h>d){c&&ln(0);break}}o&&l(f+131072);for(var ct=(1<<x)-1,St=(1<<m)-1,Ft=h;;Ft=h){var G=p[ll(i,h)&ct],qt=G>>4;if(h+=G&15,h>d){c&&ln(0);break}if(G||ln(2),qt<256)e[f++]=qt;else if(qt==256){Ft=h,p=null;break}else{var te=qt-254;if(qt>264){var C=qt-257,Vt=dh[C];te=on(i,h,(1<<Vt)-1)+gh[C],h+=Vt}var X=_[ll(i,h)&St],J=X>>4;X||ln(3),h+=X&15;var nt=Sg[J];if(J>3){var Vt=fh[J];nt+=ll(i,h)&(1<<Vt)-1,h+=Vt}if(h>d){c&&ln(0);break}o&&l(f+131072);var ut=f+te;if(f<nt){var Ct=r-nt,xt=Math.min(nt,ut);for(Ct+f<0&&ln(3);f<xt;++f)e[f]=n[Ct+f]}for(;f<ut;++f)e[f]=e[f-nt]}}t.l=p,t.p=Ft,t.b=f,t.f=u,p&&(u=1,t.m=x,t.d=_,t.n=m)}while(!u);return f!=e.length&&a?wg(e,0,f):e.subarray(0,f)};var Rg=new He(0);var Ig=function(i){(i[0]!=31||i[1]!=139||i[2]!=8)&&ln(6,"invalid gzip data");var t=i[3],e=10;t&4&&(e+=(i[10]|i[11]<<8)+2);for(var n=(t>>3&1)+(t>>4&1);n>0;n-=!i[e++]);return e+(t&2)},Pg=function(i){var t=i.length;return(i[t-4]|i[t-3]<<8|i[t-2]<<16|i[t-1]<<24)>>>0};function xh(i,t){var e=Ig(i);return e+8>i.length&&ln(6,"invalid gzip data"),Cg(i.subarray(e,-8),{i:2},t&&t.out||new He(Pg(i)),t&&t.dictionary)}var Dg=typeof TextDecoder<"u"&&new TextDecoder,Lg=0;try{Dg.decode(Rg,{stream:!0}),Lg=1}catch{}const caseSourceTemplate="<!doctype html>\n"+document.documentElement.outerHTML;const initialCaseSettings=JSON.parse(document.getElementById("case-settings").textContent);var mt=i=>document.getElementById(i),Eh=new Intl.NumberFormat("tr-TR"),hl=JSON.parse(mt("mesh-data").textContent);mt("mesh-data").remove();var We=[],Ug={"mand":"#dccab0","teeth":"#f2f5fc","nerve":"#ff6377","mesh":"#43dfc4","screw":"#ffbf59"},Ng={iso:[.33,-1,.5],x:[1,0,0],nx:[-1,0,0],y:[0,-1,0],ny:[0,1,0],z:[0,0,1],nz:[0,0,-1]},Ge={x:new U(1,0,0),y:new U(0,1,0),z:new U(0,0,1)},_e,gi,Tt,Xt,ts,Un=!1,Ua=!1,ul=!1,Ln="rotate",cn=null,hn=1,Fg="iso",Og="light",yh=()=>new Promise(i=>requestAnimationFrame(i)),ml=i=>((i+180)%360+360)%360-180;function dl(i){mt("loading").hidden=!1,mt("spinner").hidden=!0,mt("loading-title").textContent="3D g\xF6r\xFCn\xFCm a\xE7\u0131lamad\u0131",mt("loading-detail").textContent=i,mt("footer-status").textContent="G\xF6r\xFCn\xFCm kullan\u0131lam\u0131yor"}function ye(){!_e||ul||(ul=!0,requestAnimationFrame(()=>{Xt?.update(),renderCase(),Un&&kg(),ul=!1}))}function Th(i=new U){let t=new La(Tt,_e.domElement);return t.target.copy(i),t.staticMoving=!0,t.rotateSpeed=2.1,t.zoomSpeed=1.05,t.panSpeed=.7,t.keys=[],t.minDistance=.02,t.maxDistance=1e5,t.minZoom=.015,t.maxZoom=1e3,t.mouseButtons.LEFT=Ln==="pan"?Ve.PAN:Ve.ROTATE,t.addEventListener("change",ye),t.addEventListener("start",()=>{Hs(null),ye()}),t.addEventListener("end",ye),t.handleResize(),t}function is(){let i=new nn;return We.filter(t=>t.visible).forEach(t=>i.union(t.geometry.boundingBox.clone().translate(ts.position))),i}function ns(){let i=Tt.position.clone().sub(Xt.target).normalize();i.lengthSq()<.1&&i.set(0,-1,0);let t=Tt.up.clone().addScaledVector(i,-Tt.up.dot(i)).normalize();return t.lengthSq()<.1&&(t=(Math.abs(i.z)<.9?Ge.z:Ge.y).clone(),t.addScaledVector(i,-t.dot(i)).normalize()),{direction:i,up:t,right:new U().crossVectors(t,i).normalize()}}function Hs(i){Fg=i,document.querySelectorAll("[data-view]").forEach(t=>t.setAttribute("aria-pressed",String(t.dataset.view===i)))}function $n(i=null){let t=is();if(t.isEmpty())return;let e=t.getCenter(new U),n=Math.max(t.getSize(new U).length(),1);if(i){let _=new U(...Ng[i]).normalize();Tt.up.copy(i==="z"||i==="nz"?Ge.y:Ge.z),Xt.target.copy(e),Tt.position.copy(e).addScaledVector(_,n*2)}let{direction:s,up:r,right:a}=ns(),o=0,c=0,l=1,u=Math.tan(Le.degToRad(35/2)),h=u*hn,f=.85,p=mt("viewport").clientHeight<650?.56:.71;for(let _ of[t.min.x,t.max.x])for(let x of[t.min.y,t.max.y])for(let m of[t.min.z,t.max.z]){let d=new U(_,x,m).sub(e);o=Math.max(o,Math.abs(d.dot(a))),c=Math.max(c,Math.abs(d.dot(r))),l=Math.max(l,d.dot(s)+Math.abs(d.dot(a))/(h*f),d.dot(s)+Math.abs(d.dot(r))/(u*p))}if(Tt.isOrthographicCamera){let _=Math.max(c/p,o/(hn*f),.5);Tt.left=-_*hn,Tt.right=_*hn,Tt.top=_,Tt.bottom=-_,Tt.zoom=1,l=n*2}Tt.up.copy(r),Tt.position.copy(e).addScaledVector(s,l),Xt.target.copy(e),Xt.minDistance=Math.max(n/4e3,.01),Xt.maxDistance=n*50,Tt.updateProjectionMatrix(),Tt.lookAt(e),Xt.update(),i&&Hs(i),ye()}function wh(){let i=We.filter(e=>e.visible);if(i.length===1&&i[0].userData.longAxis)return new U(...i[0].userData.longAxis).normalize();let t=is().getSize(new U);return t.z>=Math.max(t.x,t.y)?Ge.z.clone():t.x>=t.y?Ge.x.clone():Ge.y.clone()}function es(i){if(!Un||is().isEmpty()||!Number.isFinite(i))return;let{direction:t,up:e}=ns();Tt.up.copy(e).applyAxisAngle(t,Le.degToRad(i)).normalize(),Tt.lookAt(Xt.target),Xt.update(),Hs(null),ye()}function gl(){let{direction:i,up:t,right:e}=ns(),n=Ge.z.clone().addScaledVector(i,-Ge.z.dot(i));return n.lengthSq()<.001&&(n=Ge.y.clone().addScaledVector(i,-Ge.y.dot(i))),ml(Le.radToDeg(Math.atan2(n.dot(e),n.dot(t))))}function Mh(i){Number.isFinite(i)&&es(ml(i-gl()))}function Vs(i){if(!Un||is().isEmpty())return;let t=wh(),e=ns();Math.hypot(t.dot(e.right),t.dot(e.up))<.02&&($n("iso"),e=ns());let n=Le.radToDeg(Math.atan2(t.dot(e.right),t.dot(e.up)));es(ml((i==="horizontal"?90:0)-n)),$n()}function Bg(i,t){if(!Un||is().isEmpty())return;let e=new Be().setFromAxisAngle(Ge[i],Le.degToRad(t));Tt.position.sub(Xt.target).applyQuaternion(e).add(Xt.target),Tt.up.applyQuaternion(e).normalize(),Tt.lookAt(Xt.target),Xt.update(),Hs(null),ye()}function Qi(i){if(!(!Un||is().isEmpty())){if(Tt.isOrthographicCamera)Tt.zoom=Le.clamp(Tt.zoom/i,Xt.minZoom,Xt.maxZoom),Tt.updateProjectionMatrix();else{let t=Tt.position.clone().sub(Xt.target);t.setLength(Le.clamp(t.length()*i,Xt.minDistance,Xt.maxDistance)),Tt.position.copy(Xt.target).add(t)}Xt.update(),ye()}}function zg(i){if(!Un||i==="ortho"==!!Tt.isOrthographicCamera)return;let t=Tt,e=Xt.target.clone(),n=Xt.minDistance,s=Xt.maxDistance,r=t.position.distanceTo(e),a=t.isOrthographicCamera?(t.top-t.bottom)/2/t.zoom:r*Math.tan(Le.degToRad(t.fov/2)),o=i==="ortho"?new li(-a*hn,a*hn,a,-a,t.near,t.far):new Me(35,hn,t.near,t.far);o.position.copy(t.position),o.up.copy(t.up),o.quaternion.copy(t.quaternion),o.isPerspectiveCamera&&o.position.copy(e).addScaledVector(t.position.clone().sub(e).normalize(),a/Math.tan(Le.degToRad(35/2))),t.children.slice().forEach(c=>o.add(c)),Xt.dispose(),gi.remove(t),Tt=o,gi.add(Tt),Xt=Th(e),Xt.minDistance=n,Xt.maxDistance=s,Tt.lookAt(e),Tt.updateProjectionMatrix(),document.querySelectorAll("[data-projection]").forEach(c=>c.setAttribute("aria-pressed",String(c.dataset.projection===i))),ye()}function kg(){let i=Math.round(gl());document.activeElement!==mt("roll-number")&&(mt("roll-number").value=i),document.activeElement!==mt("roll-slider")&&(mt("roll-slider").value=i);let t=wh(),{right:e,up:n}=ns(),s=Math.abs(t.dot(e)),r=Math.abs(t.dot(n));mt("horizontal").setAttribute("aria-pressed",String(s>.02&&r<.001)),mt("vertical").setAttribute("aria-pressed",String(r>.02&&s<.001));let a=Tt.quaternion.clone().invert(),o=Array.from(document.querySelectorAll("#axis-widget [data-axis]"));o.forEach(c=>{let l=Ge[c.dataset.axis].clone().applyQuaternion(a),u=52+l.x*31,h=52-l.y*31;c.querySelector("line").setAttribute("x2",u),c.querySelector("line").setAttribute("y2",h),c.querySelector("circle").setAttribute("cx",u),c.querySelector("circle").setAttribute("cy",h),c.querySelector("text").setAttribute("x",u),c.querySelector("text").setAttribute("y",h),c.dataset.depth=l.z}),o.sort((c,l)=>Number(c.dataset.depth)-Number(l.dataset.depth)).forEach(c=>mt("axis-widget").appendChild(c))}function Ah(i){Ln=i,Xt.mouseButtons.LEFT=Ln==="pan"?Ve.PAN:Ve.ROTATE,document.querySelectorAll("[data-mode]").forEach(t=>t.setAttribute("aria-pressed",String(t.dataset.mode===Ln))),mt("viewport").dataset.mode=Ln,mt("mode-hint").textContent=Ln==="roll"?"S\xFCr\xFCkle: ekranda \xE7evir \xB7 Tekerlek: yak\u0131nla\u015F":Ln==="pan"?"S\xFCr\xFCkle: kayd\u0131r \xB7 Tekerlek: yak\u0131nla\u015F":"S\xFCr\xFCkle: serbest d\xF6nd\xFCr \xB7 Shift + s\xFCr\xFCkle: ekranda \xE7evir"}function pl(i,t){Og=i;let n=t||{dark:"#08111e",light:"#e9eff5",blue:"#203b59"}[i];mt("workspace").style.setProperty("--stage-bg",n);let s=new Wt(n);mt("workspace").dataset.contrast=s.r*.2126+s.g*.7152+s.b*.0722>.2?"light":"dark",document.querySelectorAll("[data-background]").forEach(r=>r.setAttribute("aria-pressed",String(r.dataset.background===i))),mt("background-color").value=n}function syncVisibilityBase(){let i=We.filter(t=>t.visible);We.forEach(t=>{let e=t.userData.id;mt(e+"-card").dataset.visible=String(t.visible),mt(e+"-visible").checked=t.visible,mt(e+"-opacity").disabled=!t.visible}),mt("empty").hidden=!!i.length,mt("stage-name").textContent=i.length===1?i[0].userData.name:i.length?"Birlikte g\xF6r\xFCn\xFCm":"Model se\xE7in",mt("stage-sub").textContent=i.length?`${i.length} model a\xE7\u0131k`:"",mt("model-select").value=i.length===1?i[0].userData.id:i.length===We.length?"all":"custom",mt("footer-status").textContent=`${i.length} / ${We.length} g\xF6r\xFCn\xFCr`,document.querySelectorAll("[data-needs-model]").forEach(t=>t.disabled=!i.length),ye()}function Na(){$n("iso")}function Sh(i){We.forEach(t=>t.visible=t.userData.id===i),Fa(),Na()}function bh(){We.forEach(i=>i.visible=!0),Fa()}function Vg(i){i.color=i.color||Ug[i.id]||"#79bdff";i.baseColor=i.baseColor||i.color;i.baseOpacity=i.baseOpacity??i.opacity;Ug[i.id]=i.baseColor;let t=document.createElement("article");t.id=i.id+"-card",t.className="model-card",t.style.setProperty("--model-color",i.color),t.innerHTML=`<div class="model-top"><label class="color-input" title="Model rengini de\u011Fi\u015Ftir"><input type="color" id="${i.id}-color" value="${i.color}" disabled><span class="sr-only">Model rengi</span></label><h3 title=""></h3><span class="model-sel-badge" id="${i.id}-selbadge" title="Trim ve silme i\xE7in bu modeli se\xE7">Se\xE7</span><label class="visibility" title="G\xF6ster / gizle"><input type="checkbox" id="${i.id}-visible" disabled><span class="sr-only">G\xF6ster / gizle</span></label></div><div class="model-bottom"><div class="model-actions"><button type="button" class="inspect" id="${i.id}-inspect" disabled>\u0130ncele</button><button type="button" class="model-thk" id="${i.id}-thk" aria-pressed="${Boolean(i.thicknessActive)}" title="Bu modelin et kal\u0131nl\u0131\u011F\u0131n\u0131 analiz et">Kal\u0131nl\u0131k</button><button type="button" class="model-export" id="${i.id}-export" title="Bu modeli STL olarak indir">STL \u0130ndir</button><button type="button" class="model-remove" id="${i.id}-remove" data-case-remove title="Bu modeli vakadan kald\u0131r">Kald\u0131r</button></div><div class="range-wrap"><label for="${i.id}-opacity">Saydaml\u0131k <output id="${i.id}-percent">%${Math.round((1-i.opacity)*100)}</output></label><input id="${i.id}-opacity" type="range" min="0" max="90" step="5" value="${Math.round((1-i.opacity)*100)}" disabled></div></div>`,t.querySelector("h3").textContent=i.name,t.querySelector("h3").title=i.name,t.querySelectorAll("input").forEach(e=>e.setAttribute("aria-label",i.name+" "+(e.type==="color"?"rengi":e.type==="checkbox"?"g\xF6r\xFCn\xFCrl\xFC\u011F\xFC":"saydaml\u0131\u011F\u0131"))),t.querySelector(".inspect").title="Yaln\u0131z "+i.name+" modelini g\xF6ster",mt("models").appendChild(t)}function Hg(i){let t=atob(i.data),e=new Uint8Array(t.length);for(let l=0;l<t.length;l++)e[l]=t.charCodeAt(l);let n=i.encoding==="raw"?e:xh(e),s=n.buffer.slice(n.byteOffset,n.byteOffset+n.byteLength),r=new DataView(s),a=r.getUint32(0,!0),o=r.getUint32(4,!0);if(a!==i.vertices||o!==i.triangles||s.byteLength!==8+a*12+o*12)throw new Error("Model verisi do\u011Frulanamad\u0131.");let c=new gn;return c.setAttribute("position",new Ee(new Float32Array(s,8,a*3),3)),c.setIndex(new Ee(new Uint32Array(s,8+a*12,o*3),1)),c.computeVertexNormals(),c.computeBoundingBox(),c.computeBoundingSphere(),c}function fl(){if(!_e)return;let i=Math.max(mt("viewport").clientWidth,1),t=Math.max(mt("viewport").clientHeight,1);if(_e.setSize(i,t),hn=i/t,Tt.isPerspectiveCamera)Tt.aspect=hn;else{let e=(Tt.top-Tt.bottom)/2;Tt.left=-e*hn,Tt.right=e*hn}Tt.updateProjectionMatrix(),Xt.handleResize(),ye()}function Gg(){let i=_e.domElement;i.addEventListener("pointerdown",e=>{if(Un&&(Xt.handleResize(),e.button===0&&(Ln==="roll"||e.shiftKey))){if(e.preventDefault(),e.stopImmediatePropagation(),cn)return;Xt.update(),cn={id:e.pointerId,x:e.clientX},i.setPointerCapture(e.pointerId),Hs(null)}},!0),i.addEventListener("pointermove",e=>{cn&&e.pointerId===cn.id&&(e.preventDefault(),e.stopImmediatePropagation(),es((e.clientX-cn.x)*.55),cn.x=e.clientX),ye()},!0);let t=e=>{cn&&e.pointerId===cn.id&&(e.stopImmediatePropagation(),i.hasPointerCapture(e.pointerId)&&i.releasePointerCapture(e.pointerId),cn=null),ye()};i.addEventListener("pointerup",t,!0),i.addEventListener("pointercancel",t,!0),i.addEventListener("lostpointercapture",e=>{cn?.id===e.pointerId&&(cn=null)}),i.addEventListener("wheel",ye,{passive:!0})}function Wg(){We.forEach(t=>{let e=t.userData.id;mt(e+"-visible").disabled=!1,mt(e+"-visible").addEventListener("change",n=>{t.visible=n.target.checked,Fa()}),mt(e+"-inspect").disabled=!1,mt(e+"-inspect").addEventListener("click",()=>Sh(e)),mt(e+"-opacity").addEventListener("input",n=>{let s=Number(n.target.value);t.material.opacity=1-s/100,t.material.transparent=s>0,t.material.depthWrite=s===0,t.material.needsUpdate=!0,mt(e+"-percent").textContent="%"+s,ye()}),mt(e+"-color").disabled=!1,mt(e+"-color").addEventListener("input",n=>{if(t.userData.thicknessActive){t.userData.thkBaseColor=n.target.value;t.material.color.set("#fff");}else t.material.color.set(n.target.value);t.userData.color=n.target.value,mt(e+"-card").style.setProperty("--model-color",n.target.value),ye()}),bindModelCardSelect(e),mt(e+"-export")?.addEventListener("click",()=>exportModelSTL(e)),mt(e+"-cm")?.addEventListener("click",()=>{selectCaseModel(e);cmOpenWithSurface(e);}),mt(e+"-thk")?.addEventListener("click",()=>{selectCaseModel(e);thkAnalyzeModel(e);})}),mt("show-all").addEventListener("click",bh),mt("model-select").addEventListener("change",t=>t.target.value==="all"?bh():t.target.value!=="custom"&&selectVisibleModel(t.target.value)),mt("fit").addEventListener("click",()=>$n()),mt("reset").addEventListener("click",Na),mt("horizontal").addEventListener("click",()=>Vs("horizontal")),mt("vertical").addEventListener("click",()=>Vs("vertical")),mt("roll-slider").addEventListener("input",t=>Mh(Number(t.target.value))),mt("roll-number").addEventListener("change",t=>{Mh(Number(t.target.value)),t.target.value=Math.round(gl())}),document.querySelectorAll("[data-roll]").forEach(t=>t.addEventListener("click",()=>es(Number(t.dataset.roll)))),document.querySelectorAll("[data-rotate-axis]").forEach(t=>t.addEventListener("click",()=>Bg(t.dataset.rotateAxis,Number(t.dataset.sign)*Number(mt("angle-step").value)))),document.querySelectorAll("[data-view]").forEach(t=>t.addEventListener("click",()=>$n(t.dataset.view))),document.querySelectorAll("[data-mode]").forEach(t=>t.addEventListener("click",()=>Ah(t.dataset.mode))),document.querySelectorAll("[data-projection]").forEach(t=>t.addEventListener("click",()=>zg(t.dataset.projection))),document.querySelectorAll("[data-background]").forEach(t=>t.addEventListener("click",()=>pl(t.dataset.background))),mt("background-color").addEventListener("input",t=>pl("custom",t.target.value)),mt("light-slider").addEventListener("input",t=>{_e.toneMappingExposure=1.08*Number(t.target.value)/100,mt("light-value").textContent="%"+t.target.value,ye()}),mt("zoom-in").addEventListener("click",()=>Qi(.8)),mt("zoom-out").addEventListener("click",()=>Qi(1.25)),mt("wireframe").addEventListener("click",()=>{Ua=!Ua,We.forEach(t=>window.cmMeshView(t,Ua)),mt("wireframe").setAttribute("aria-pressed",String(Ua)),ye()}),document.querySelectorAll("[data-tab]").forEach(t=>t.addEventListener("click",()=>{document.querySelectorAll("[data-tab]").forEach(e=>e.setAttribute("aria-selected",String(e===t))),document.querySelectorAll("[data-tab-panel]").forEach(e=>e.hidden=e.dataset.tabPanel!==t.dataset.tab)})),document.addEventListener("keydown",t=>{if(t.ctrlKey||t.metaKey||t.altKey||/INPUT|TEXTAREA|SELECT/.test(t.target.tagName)||!Un)return;let e=t.key.toLowerCase(),n={f:()=>$n(),r:Na,h:()=>Vs("horizontal"),v:()=>Vs("vertical"),q:()=>es(-15),e:()=>es(15),"+":()=>Qi(.8),"=":()=>Qi(.8),"-":()=>Qi(1.25)};n[e]&&(t.preventDefault(),n[e]())});let i=new Is;_e.domElement.addEventListener("dblclick",t=>{if(Ln!=="rotate"||t.shiftKey)return;let e=_e.domElement.getBoundingClientRect();gi.updateMatrixWorld(!0),i.setFromCamera(new Dt((t.clientX-e.left)/e.width*2-1,-(t.clientY-e.top)/e.height*2+1),Tt);let n=i.intersectObjects(We.filter(r=>r.visible),!1);if(!n.length)return;let s=Tt.position.clone().sub(Xt.target);Xt.target.copy(n[0].point),Tt.position.copy(n[0].point).add(s),Qi(.4)}),document.querySelectorAll("[data-ready]").forEach(t=>t.disabled=!1)}async function Xg(){hl.forEach(Vg);try{_e=new Aa({antialias:!0,alpha:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"})}catch{dl("Dosyay\u0131 indirip Chrome veya Edge\u2019de a\xE7\u0131n. WebGL ve grafik h\u0131zland\u0131rmas\u0131 etkin olmal\u0131d\u0131r.");return}_e.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),_e.setClearColor(0,0),_e.outputColorSpace=Ce,_e.toneMapping=zr,_e.toneMappingExposure=.54,_e.domElement.setAttribute("tabindex","0"),_e.domElement.setAttribute("aria-label","Serbest 3D model g\xF6r\xFCn\xFCm\xFC. Shift ile s\xFCr\xFCklemek ekran d\xFCzleminde \xE7evirir."),mt("viewport").appendChild(_e.domElement),gi=new Ss,ts=new wn,gi.add(ts),Tt=new Me(35,1,.01,15e3),Tt.up.set(0,0,1),Tt.position.set(250,-500,120),Gg(),Xt=Th();let i=new Rs(16777215,.65),t=new Vi(16777215,2.1);t.position.set(-2,3,5);let e=new Vi(13822463,.8);e.position.set(3,-1,1),Tt.add(t,t.target,e,e.target),t.target.position.set(0,0,-1),e.target.position.set(0,0,-1),gi.add(i,Tt),_e.domElement.addEventListener("webglcontextlost",n=>{n.preventDefault(),dl("Grafik ba\u011Flant\u0131s\u0131 kesildi. G\xF6r\xFCn\xFCm\xFC yeniden ba\u015Flatmak i\xE7in dosyay\u0131 tekrar a\xE7\u0131n.")}),fl(),await yh();try{for(let s=0;s<hl.length;s++){let r=hl[s];mt("loading-detail").textContent=`${s+1} / ${hl.length} \xB7 ${r.name}`,await yh();let a=new De(Hg(r),materialForRecord(r,s));a.userData=r,a.visible=r.visible!==!1,ts.add(a),We.push(a)}let n=new nn;We.forEach(s=>n.union(s.geometry.boundingBox)),ts.position.copy(n.getCenter(new U).negate()),ts.updateMatrixWorld(!0),Un=!0,Wg(),setupExtras(),setupCaseTools(),Ah("rotate"),pl("light"),Fa(),Na(),new ResizeObserver(fl).observe(mt("viewport")),window.addEventListener("resize",fl),window.addEventListener("scroll",()=>Xt.handleResize(),{passive:!0}),mt("loading").hidden=!0,restoreCaseView(),ye()}catch(n){dl("Model y\xFCklenemedi. Dosyay\u0131 yeniden indirip a\xE7\u0131n. "+n.message)}}
function setupExtras(){
  setupRenderQuality();
  const toast=document.getElementById('toast');
  let toastTimer;
  function notify(message){toast.textContent=message;toast.hidden=false;clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.hidden=true,3800);}
  mt('fullscreen').addEventListener('click',async()=>{
    try {if(document.fullscreenElement)await document.exitFullscreen();else await document.querySelector('.app').requestFullscreen();}
    catch {notify('Tam ekran bu tarayıcıda açılamadı. F11 tuşunu kullanabilirsiniz.');}
  });
  document.addEventListener('fullscreenchange',()=>{mt('fullscreen').textContent=document.fullscreenElement?'Ekranı küçült':'Tam ekran';fl();});
  mt('capture').addEventListener('click',()=>{
    try{
      const canvas=_e.domElement, out=document.createElement('canvas'), margin=74;
      out.width=canvas.width;out.height=canvas.height+margin+40;
      const ctx=out.getContext('2d');
      ctx.fillStyle=mt('background-color').value;ctx.fillRect(0,0,out.width,out.height);
      Xt.update();renderCase();ctx.drawImage(canvas,0,margin);
      ctx.fillStyle='#ffffff';ctx.fillRect(0,0,out.width,margin);
      const brand=mt('custimesh-logo');const logoWidth=Math.min(246,out.width*.38);
      ctx.drawImage(brand,20,(margin-logoWidth*88/492)/2,logoWidth,logoWidth*88/492);
      ctx.fillStyle='#244f80';ctx.font='600 15px Segoe UI, Arial';ctx.textAlign='right';
      ctx.fillText(updateCaseName(),out.width-20,margin/2+5,out.width-logoWidth-65);
      if(!mt('thk-hud').hidden){
        const hudX=18,hudY=margin+18,hudW=190,hudH=178;
        ctx.fillStyle='rgba(255,255,255,0.94)';ctx.strokeStyle='#cbd9e5';ctx.lineWidth=1;
        ctx.beginPath();ctx.roundRect(hudX,hudY,hudW,hudH,10);ctx.fill();ctx.stroke();
        ctx.fillStyle='#16314a';ctx.font='600 11px Segoe UI, Arial';ctx.textAlign='left';
        ctx.fillText((mt('thk-hud-title').textContent||'Kalınlık (mm)').slice(0,26),hudX+10,hudY+18);
        const barX=hudX+10,barY=hudY+26,barW=16,barH=120;
        const minV=Math.max(0,Number(mt('thk-min').value)||0),maxV=Math.max(minV+.001,Number(mt('thk-max').value)||2),thV=Math.max(0,Number(mt('thk-thresh').value)||0);
        const pal=mt('thk-palette').value,inv=mt('thk-invert').checked,clip=mt('thk-clip-thin').checked;
        for(let py=0;py<barH;py++){
          const t=1-py/(barH-1),rgb=thkSampleColor(t,pal,inv,false,minV+t*(maxV-minV),minV,maxV,thV,clip);
          ctx.fillStyle='rgb('+rgb.map(v=>Math.round(v*255)).join(',')+')';
          ctx.fillRect(barX,barY+py,barW,1.5);
        }
        ctx.strokeStyle='#a9bdce';ctx.strokeRect(barX,barY,barW,barH);
        ctx.fillStyle='#16314a';ctx.font='10px Segoe UI, Arial';
        ['thk-hud-max','thk-hud-q3','thk-hud-mid','thk-hud-q1','thk-hud-min'].forEach((id,idx)=>{
          ctx.fillText(mt(id).textContent,barX+barW+8,barY+8+idx*(barH-10)/4);
        });
        ctx.fillStyle='#52697f';ctx.font='9.5px Segoe UI, Arial';
        ctx.fillText(mt('thk-hud-stat-min').textContent+'  ·  '+mt('thk-hud-stat-thin').textContent,hudX+10,hudY+hudH-10);
      }
      ctx.fillStyle='#101d2d';ctx.fillRect(0,out.height-40,out.width,40);
      ctx.fillStyle='#dce8f4';ctx.font='12px Segoe UI, Arial';ctx.textAlign='left';
      ctx.fillText(We.filter(m=>m.visible).map(m=>m.userData.name).join('  /  '),20,out.height-15,out.width-40);
      out.toBlob(blob=>{
        if(!blob){notify('PNG oluşturulamadı.');return;}
        const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='CUSTIMESH_Vaka_Gorunum.png';
        document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),10000);
        notify('PNG görünümü kaydedildi.');
      },'image/png');
    }catch(e){notify('PNG kaydedilemedi: '+e.message);}
  });
  mt('reset-display').addEventListener('click',()=>{
    We.forEach(m=>{
      thkClearModel(m);
      const d=m.userData,defaultOpacity=d.baseOpacity??d.opacity,amount=Math.round((1-defaultOpacity)*100);
      d.color=Ug[d.id];d.thkBaseColor=Ug[d.id];
      m.material.color.set(Ug[d.id]);m.material.opacity=defaultOpacity;m.material.transparent=defaultOpacity<1;m.material.depthWrite=defaultOpacity===1;m.material.needsUpdate=true;
      mt(d.id+'-color').value=Ug[d.id];mt(d.id+'-card').style.setProperty('--model-color',Ug[d.id]);
      mt(d.id+'-opacity').value=amount;mt(d.id+'-percent').textContent='%'+amount;
    });
    mt('thk-hud').hidden=true;mt('thk-probe').hidden=true;thkSetControls();ye();
  });
  Object.defineProperty(window,'CUSTIMESHViewer',{value:Object.freeze({version:'4.4',state:()=>({
    ready:Un,projection:Tt.isPerspectiveCamera?'perspective':'ortho',mode:Ln,
    camera:Tt.position.toArray(),up:Tt.up.toArray(),target:Xt.target.toArray(),screenRoll:gl(),
    right:ns().right.toArray(),viewUp:ns().up.toArray(),longAxis:wh().toArray(),
    groupPosition:ts.position.toArray(),background:mt('background-color').value,
    models:We.map(m=>({id:m.userData.id,name:m.userData.name,visible:m.visible,triangles:m.geometry.index.count/3,
      vertices:m.geometry.attributes.position.count,opacity:m.material.opacity,color:thkBaseHex(m),
      wireframe:m.material.wireframe,position:m.position.toArray(),quaternion:m.quaternion.toArray(),
      bounds:[m.geometry.boundingBox.min.toArray(),m.geometry.boundingBox.max.toArray()],sourceSHA256:m.userData.sourceSHA256}))
  })})});
}

// Local case import/export. Source coordinates are never registered or transformed.
const CASE_LIMITS = Object.freeze({models:32, bytes:256*1024*1024, triangles:8000000});
let caseBusy = false;
let caseSerial = 0;
const caseYield = () => new Promise(resolve => setTimeout(resolve, 0));

function classifySTL(name, index) {
  const n=name.toLocaleLowerCase('tr-TR').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/ı/g,'i');
  if(/nerve|sinir/.test(n)) return {role:'nerve',color:'#ff6377',opacity:1};
  if(/screw|vida/.test(n)) return {role:'screw',color:'#ffbf59',opacity:1};
  if(/teeth|tooth|dis/.test(n)) return {role:'teeth',color:'#f2f5fc',opacity:1};
  if(/guide|k[ıi]lavuz/.test(n)) return {role:'guide',color:'#ab9bff',opacity:1};
  if(/mesh|implant|subper|surface/.test(n)) return {role:'mesh',color:'#43dfc4',opacity:1};
  if(/mand|maks|maxill|bone|kemik/.test(n)) return {role:'bone',color:'#dccab0',opacity:1};
  return {role:'other',color:['#79bdff','#43dfc4','#ffbf59','#e9a2ec','#cbd6e7'][index%5],opacity:1};
}

function safeCaseJSON(value) { return JSON.stringify(value).replace(/</g,'\\u003c').replace(/\u2028/g,'\\u2028').replace(/\u2029/g,'\\u2029'); }
function replaceCaseJSON(source, id, value) {
  const marker='<script id="'+id+'" type="application/json">';
  const start=source.indexOf(marker);
  if(start<0) throw new Error('HTML şablonu bulunamadı.');
  const contentStart=start+marker.length, end=source.indexOf('</'+'script>',contentStart);
  if(end<0) throw new Error('HTML şablonu eksik.');
  return source.slice(0,contentStart)+safeCaseJSON(value)+source.slice(end);
}
function buildCaseHTML(template, records, settings) {
  const marker='<script id="doctor-template" type="application/octet-stream">';
  const start=template.indexOf(marker),end=template.indexOf('</'+'script>',start+marker.length);
  if(start<0||end<0)throw new Error('Hekim görüntüleme şablonu bulunamadı.');
  const encoded=atob(template.slice(start+marker.length,end).trim()),bytes=new Uint8Array(encoded.length);
  for(let i=0;i<encoded.length;i++)bytes[i]=encoded.charCodeAt(i);
  const doctorTemplate=new TextDecoder().decode(xh(bytes));
  return replaceCaseJSON(replaceCaseJSON(doctorTemplate,'mesh-data',records),'case-settings',{...settings,version:'4.4',audience:'doctor'});
}
function bytesToBase64(bytes) {
  const parts=[];
  for(let p=0;p<bytes.length;p+=16384) parts.push(String.fromCharCode(...bytes.subarray(p,p+16384)));
  return btoa(parts.join(''));
}
function filenameForCase(name) {
  const slug=name.replace(/ı/g,'i').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-zA-Z0-9_-]+/g,'_').replace(/^_+|_+$/g,'').slice(0,70)||'Vaka';
  return 'CUSTIMESH_'+slug+'.html';
}

async function parseSTLPositions(buffer, triangleBudget=CASE_LIMITS.triangles, progress=()=>{}) {
  if(!(buffer instanceof ArrayBuffer)||buffer.byteLength<15) throw new Error('STL dosyası boş veya eksik.');
  const view=new DataView(buffer);
  const count=buffer.byteLength>=84?view.getUint32(80,true):0;
  if(count>0&&84+count*50<=buffer.byteLength) {
    if(count>triangleBudget) throw new Error('Vaka için toplam dört milyon üçgen sınırı aşılıyor.');
    const positions=new Float32Array(count*9);
    for(let face=0;face<count;face++) {
      const offset=84+face*50+12;
      for(let j=0;j<9;j++) {
        const v=view.getFloat32(offset+j*4,true);
        if(!Number.isFinite(v)) throw new Error('STL geçersiz bir koordinat içeriyor.');
        positions[face*9+j]=v;
      }
      if(face%32768===32767){progress('STL okunuyor');await caseYield();}
    }
    return positions;
  }
  let text;
  try {text=new TextDecoder('utf-8',{fatal:true}).decode(buffer);} catch {throw new Error('Binary STL dosyasının uzunluğu geçersiz.');}
  if(!/^\s*solid(?:\s|$)/i.test(text)) throw new Error('Binary veya ASCII STL okunamadı.');
  const vertices=(text.match(/^\s*vertex\s+/gmi)||[]).length;
  if(vertices===0||vertices%3!==0) throw new Error('ASCII STL üçgenleri eksik.');
  if(vertices/3>triangleBudget) throw new Error('Vaka için toplam dört milyon üçgen sınırı aşılıyor.');
  const positions=new Float32Array(vertices*3);
  const number='[+-]?(?:(?:\\d+\\.?\\d*)|(?:\\.\\d+))(?:[eE][+-]?\\d+)?';
  const vertexRE=new RegExp('^vertex\\s+('+number+')\\s+('+number+')\\s+('+number+')\\s*$','i');
  const normalRE=new RegExp('^facet\\s+normal\\s+('+number+')\\s+('+number+')\\s+('+number+')\\s*$','i');
  let inSolid=false,state=0,faceVertices=0,written=0,lineNo=0,closedSolids=0;
  for(const rawLine of text.split(/\r?\n/)) {
    const line=rawLine.trim();lineNo++;
    if(!line)continue;
    if(/^solid(?:\s|$)/i.test(line)&&!inSolid&&state===0){inSolid=true;continue;}
    if(/^endsolid(?:\s|$)/i.test(line)&&inSolid&&state===0){inSolid=false;closedSolids++;continue;}
    const normal=line.match(normalRE);
    if(normal&&inSolid&&state===0) {
      if(!normal.slice(1).every(v=>Number.isFinite(Number(v))))throw new Error('ASCII STL normal değeri geçersiz.');
      state=1;continue;
    }
    if(/^outer\s+loop$/i.test(line)&&state===1){state=2;faceVertices=0;continue;}
    const vertex=line.match(vertexRE);
    if(vertex&&state===2&&faceVertices<3) {
      for(let j=1;j<=3;j++) {
        const value=Number(vertex[j]);positions[written++]=value;
        if(!Number.isFinite(value)||!Number.isFinite(positions[written-1]))throw new Error('ASCII STL koordinatı geçersiz.');
      }
      faceVertices++;
      if(written%294912===0){progress('ASCII STL okunuyor');await caseYield();}
      continue;
    }
    if(/^endloop$/i.test(line)&&state===2&&faceVertices===3){state=3;continue;}
    if(/^endfacet$/i.test(line)&&state===3){state=0;continue;}
    throw new Error('ASCII STL yapısı geçersiz (satır '+lineNo+').');
  }
  if(inSolid||state!==0||closedSolids===0||written!==positions.length)throw new Error('ASCII STL tamamlanmamış.');
  return positions;
}

async function packSTLPositions(positions, progress=()=>{}) {
  if(!(positions instanceof Float32Array)){positions=positions?Float32Array.from(positions):new Float32Array(0);}
  if(positions.length<9)throw new Error('Üretilen geometri boş.');
  if(positions.length%9!==0)throw new Error('Geometri tamamlanmış üçgenlerden oluşmalıdır.');
  if(positions.length/9>CASE_LIMITS.triangles)throw new Error('Geometri dört milyon üçgen sınırını aşıyor.');
  const bits=new Uint32Array(positions.buffer,positions.byteOffset,positions.length);
  const allVertices=new Float32Array(positions.length),indices=new Uint32Array(positions.length/3);
  let cap=16;while(cap<indices.length*2)cap<<=1;
  const head=new Int32Array(cap).fill(-1),next=new Int32Array(indices.length).fill(-1),mask=cap-1;
  let vertexCount=0;
  for(let i=0;i<indices.length;i++) {
    const p=i*3,x=positions[p],y=positions[p+1],z=positions[p+2];
    if(!Number.isFinite(x)||!Number.isFinite(y)||!Number.isFinite(z))throw new Error('Geometri geçersiz bir koordinat içeriyor.');
    const bx=x===0?0:bits[p],by=y===0?0:bits[p+1],bz=z===0?0:bits[p+2];
    const h=(Math.imul(bx,73856093)^Math.imul(by,19349663)^Math.imul(bz,83492791))&mask;
    let u=head[h],index=-1;
    while(u>=0){const u3=u*3;if(allVertices[u3]===x&&allVertices[u3+1]===y&&allVertices[u3+2]===z){index=u;break;}u=next[u];}
    if(index<0){index=vertexCount++;const i3=index*3;allVertices[i3]=x;allVertices[i3+1]=y;allVertices[i3+2]=z;next[index]=head[h];head[h]=index;}
    indices[i]=index;
    if(i%131072===131071){progress('Geometri hazırlanıyor');await caseYield();}
  }
  const vertices=allVertices.slice(0,vertexCount*3),min=[Infinity,Infinity,Infinity],max=[-Infinity,-Infinity,-Infinity],mean=[0,0,0];
  for(let i=0;i<vertices.length;i+=3)for(let j=0;j<3;j++){const v=vertices[i+j];min[j]=Math.min(min[j],v);max[j]=Math.max(max[j],v);mean[j]+=v/vertexCount;}
  const cov=[0,0,0,0,0,0,0,0,0];
  for(let i=0;i<vertices.length;i+=3) {
    const p=[vertices[i]-mean[0],vertices[i+1]-mean[1],vertices[i+2]-mean[2]];
    for(let r=0;r<3;r++)for(let c=0;c<3;c++)cov[r*3+c]+=p[r]*p[c];
  }
  const diagonal=[cov[0],cov[4],cov[8]],axis=diagonal.indexOf(Math.max(...diagonal));
  let longAxis=[0,0,0];longAxis[axis]=1;
  for(let k=0;k<30;k++) {
    const v=[0,1,2].map(r=>cov[r*3]*longAxis[0]+cov[r*3+1]*longAxis[1]+cov[r*3+2]*longAxis[2]);
    const length=Math.hypot(...v);if(length<1e-20)break;longAxis=v.map(x=>x/length);
  }
  const main=longAxis.map(Math.abs).indexOf(Math.max(...longAxis.map(Math.abs)));
  if(longAxis[main]<0)longAxis=longAxis.map(x=>-x);
  const triangleCount=positions.length/9;
  const packed=new ArrayBuffer(8+vertices.byteLength+indices.byteLength),header=new DataView(packed);
  header.setUint32(0,vertexCount,true);header.setUint32(4,triangleCount,true);
  new Float32Array(packed,8,vertices.length).set(vertices);
  new Uint32Array(packed,8+vertices.byteLength,indices.length).set(indices);
  let bytes=new Uint8Array(packed),encoding='raw';
  if(typeof CompressionStream!=='undefined') {
    try {progress('HTML için paketleniyor');await caseYield();const stream=new Blob([bytes]).stream().pipeThrough(new CompressionStream('gzip'));bytes=new Uint8Array(await new Response(stream).arrayBuffer());encoding='gzip';}catch{/* The raw packed format remains fully offline. */}
  }
  return {data:bytesToBase64(bytes),encoding,vertices:vertexCount,triangles:triangleCount,
    longAxis,bounds:[min,max],dimensions:max.map((v,i)=>v-min[i])};
}

async function prepareSTLFile(file, index, budget, progress=()=>{}) {
  if(!/\.stl$/i.test(file.name))throw new Error('Yalnızca .stl dosyaları seçin.');
  const buffer=await file.arrayBuffer();
  const positions=await parseSTLPositions(buffer,budget,progress);
  const packed=await packSTLPositions(positions,progress),style=classifySTL(file.name,index);
  let sha='';
  if(typeof crypto!=='undefined'&&crypto.subtle) {
    try {sha=Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',buffer))).map(v=>v.toString(16).padStart(2,'0')).join('');}catch{}
  }
  let id;
  do {id='stl_'+(++caseSerial);}while(hl.some(d=>d.id===id));
  const record={id,name:file.name.slice(0,250),...style,...packed,visible:true,sourceBytes:file.size,sourceSHA256:sha,baseColor:style.color,baseOpacity:style.opacity};
  return {record,geometry:Hg(record)};
}

let selectedModelId='';
const cmUndoStack=[];
const CM_UNDO_LIMIT=256*1024*1024;
let cmUndoBytes=0;
function cmGeometryBytes(g){
  let bytes=g.index?.array.byteLength||0;
  for(const [name,attr] of Object.entries(g.attributes))if(name!=='normal')bytes+=attr.array.byteLength;
  return bytes;
}
function cmSnapshotGeometry(g){
  const copy=new gn();
  for(const [name,attr] of Object.entries(g.attributes))if(name!=='normal')copy.setAttribute(name,attr.clone());
  if(g.index)copy.setIndex(g.index.clone());
  copy.boundingBox=g.boundingBox?.clone()||null;copy.boundingSphere=g.boundingSphere?.clone()||null;
  copy.groups=g.groups.map(group=>({...group}));copy.drawRange={...g.drawRange};
  return copy;
}
function cmDisposeUndo(entry){
  for(const model of entry?.models||[]){model.geometry?.dispose();model.geometry=null;}
}
function cmDropUndo(entry){
  const index=cmUndoStack.indexOf(entry);if(index<0)return;
  cmUndoStack.splice(index,1);cmUndoBytes-=entry.bytes||0;cmDisposeUndo(entry);syncUndoButtons();
}
function cmReserveUndo(bytes){
  while(cmUndoStack.length&&(cmUndoBytes+bytes>CM_UNDO_LIMIT||cmUndoStack.length>=40))cmDropUndo(cmUndoStack[0]);
}
function syncUndoButtons(){
  const dis=caseBusy||!cmUndoStack.length;
  ['case-undo','header-undo','trim-undo-btn'].forEach(k=>{if(mt(k))mt(k).disabled=dis;});
}
function selectCaseModel(id){
  if(id&&We.some(m=>m.userData.id===id))selectedModelId=id;
  else if(!We.some(m=>m.userData.id===selectedModelId))selectedModelId=We[0]?We[0].userData.id:'';
  We.forEach(m=>{
    const cid=m.userData.id,card=mt(cid+'-card'),badge=mt(cid+'-selbadge'),sel=cid===selectedModelId;
    if(card)card.dataset.selected=String(sel);
    if(badge)badge.textContent=sel?'Seçili':'Seç';
  });
  if(typeof syncRightCommandModels==='function')syncRightCommandModels();
  if(mt('case-clear'))mt('case-clear').disabled=caseBusy||!selectedModelId||!We.length;
}
function syncCaseUI() {
  if(!mt('case-export'))return;
  document.querySelector('.count').textContent=We.length;
  mt('case-model-count').textContent=We.length+' model';
  const select=mt('model-select'),visible=We.filter(m=>m.visible);
  select.replaceChildren();
  const option=(value,text,disabled=false)=>{const o=document.createElement('option');o.value=value;o.textContent=text;o.disabled=disabled;select.appendChild(o);};
  option('all','Tümü birlikte ('+We.length+')');
  We.forEach(m=>option(m.userData.id,m.userData.name));option('custom','Özel seçim',true);
  select.value=visible.length===1?visible[0].userData.id:visible.length===We.length&&visible.length?'all':'custom';
  select.disabled=!We.length;
  mt('case-export').disabled=caseBusy||!We.length;
  mt('case-new').disabled=caseBusy;if(mt('case-add'))mt('case-add').disabled=caseBusy;
  if(mt('case-cm'))mt('case-cm').disabled=caseBusy||!We.length;
  if(mt('case-thk'))mt('case-thk').disabled=caseBusy||!We.length;
  if(window.CUSTIMESHThk)window.CUSTIMESHThk.sync();
  document.querySelectorAll('[data-open-cmd]').forEach(b=>b.disabled=caseBusy);
  mt('case-name').disabled=caseBusy;
  document.querySelectorAll('[data-case-remove]').forEach(b=>b.disabled=caseBusy);
  mt('empty').querySelector('strong').textContent=We.length?'Görünür model yok':'STL yükleyerek başlayın';
  selectCaseModel(selectedModelId);
  syncUndoButtons();
}
function Fa(){syncVisibilityBase();syncCaseUI();}
function setCaseMessage(text,error=false){mt('case-status').textContent=text;mt('case-status').dataset.error=String(error);}
function setCaseBusy(value){caseBusy=value;syncCaseUI();}
function updateCaseName(){const name=mt('case-name').value.trim()||'Yeni vaka';document.title='CUSTIMESH | '+name;return name;}

function bindModelCardSelect(id){
  const card=mt(id+'-card'),badge=mt(id+'-selbadge');
  if(badge)badge.addEventListener('click',e=>{e.stopPropagation();selectCaseModel(id);});
  if(card)card.addEventListener('click',e=>{
    if(e.target.closest('button,input,label'))return;
    selectCaseModel(id);
  });
}
function bindImportedModel(mesh) {
  const id=mesh.userData.id;
  mt(id+'-visible').disabled=false;
  mt(id+'-visible').addEventListener('change',e=>{mesh.visible=e.target.checked;Fa();});
  mt(id+'-inspect').disabled=false;mt(id+'-inspect').addEventListener('click',()=>{selectCaseModel(id);Sh(id);});
  mt(id+'-opacity').addEventListener('input',e=>{
    const value=Number(e.target.value);mesh.material.opacity=1-value/100;mesh.material.transparent=value>0;
    mesh.material.depthWrite=value===0;mesh.material.needsUpdate=true;mt(id+'-percent').textContent='%'+value;ye();
  });
  mt(id+'-color').disabled=false;mt(id+'-color').addEventListener('input',e=>{if(mesh.userData.thicknessActive){mesh.userData.thkBaseColor=e.target.value;mesh.material.color.set('#fff');}else mesh.material.color.set(e.target.value);mesh.userData.color=e.target.value;mt(id+'-card').style.setProperty('--model-color',e.target.value);ye();});
  bindRemoveModel(mesh);
  bindModelCardSelect(id);
  mt(id+'-export')?.addEventListener('click',()=>exportModelSTL(id));
  mt(id+'-cm')?.addEventListener('click',()=>{selectCaseModel(id);cmOpenWithSurface(id);});
  mt(id+'-thk')?.addEventListener('click',()=>{selectCaseModel(id);thkAnalyzeModel(id);});
}
function bindRemoveModel(mesh){mt(mesh.userData.id+'-remove').addEventListener('click',e=>{e.stopPropagation();removeCaseModel(mesh.userData.id);});}
function recenterCase() {
  const box=new nn;We.forEach(m=>box.union(m.geometry.boundingBox));
  const next=box.isEmpty()?new U():box.getCenter(new U).negate(),delta=next.clone().sub(ts.position);
  ts.position.copy(next);Tt.position.add(delta);Xt.target.add(delta);ts.updateMatrixWorld(true);Xt.update();
}
function rebuildCaseCards() {
  mt('models').replaceChildren();
  We.forEach(m=>{m.userData.color=thkBaseHex(m);m.userData.opacity=m.material.opacity;Vg(m.userData);bindImportedModel(m);});
  Fa();
}
function removeCaseModel(id) {
  if(caseBusy)return;
  const index=We.findIndex(m=>m.userData.id===id);if(index<0)return;
  const mesh=We[index],removedName=mesh.userData.name;
  if(typeof pushSceneUndo==='function')pushSceneUndo('Model silme ('+removedName+')');
  ts.remove(mesh);We.splice(index,1);hl.splice(hl.findIndex(d=>d.id===id),1);
  mesh.geometry.dispose();mesh.material.dispose();delete Ug[id];
  if(selectedModelId===id)selectedModelId=We[Math.min(index,We.length-1)]?.userData.id||'';
  rebuildCaseCards();
  if(!We.length)recenterCase();
  ye();
  setCaseMessage(removedName+' silindi (Ctrl+Z ile geri alabilirsiniz).');
}
function removeSelectedCaseModel(){
  if(caseBusy)return;
  if(!selectedModelId||!We.some(m=>m.userData.id===selectedModelId)){
    setCaseMessage('Önce soldaki modellerden silmek istediğiniz STL modelini seçin.',true);
    return;
  }
  removeCaseModel(selectedModelId);
}
function commitSTLFiles(prepared,replace) {
  const offset=replace?0:We.length;
  const oldMeshes=We.slice(),oldRecords=hl.slice(),oldColors={...Ug},oldName=mt('case-name').value;
  const oldOffset=ts.position.clone(),oldPosition=Tt.position.clone(),oldTarget=Xt.target.clone(),oldUp=Tt.up.clone();
  const newMeshes=[];
  try {
    prepared.forEach((p,i)=>{const m=new De(p.geometry,materialForRecord(p.record,offset+i));m.userData=p.record;m.visible=p.record.visible!==false;newMeshes.push(m);});
    if(replace){oldMeshes.forEach(m=>ts.remove(m));We=[];hl.length=0;Ug={};}
    newMeshes.forEach(m=>{ts.add(m);We.push(m);hl.push(m.userData);});
    if(replace){mt('case-name').value='Yeni vaka';updateCaseName();}
    if(newMeshes.length)selectedModelId=newMeshes[newMeshes.length-1].userData.id;
    recenterCase();rebuildCaseCards();replace?Na():$n();
    mt('models-tab').click();
  }catch(error){
    newMeshes.forEach(m=>{ts.remove(m);m.material.dispose();});
    We=oldMeshes;hl.splice(0,hl.length,...oldRecords);Ug=oldColors;
    oldMeshes.forEach(m=>ts.add(m));ts.position.copy(oldOffset);Tt.position.copy(oldPosition);Tt.up.copy(oldUp);Xt.target.copy(oldTarget);
    mt('case-name').value=oldName;updateCaseName();ts.updateMatrixWorld(true);Xt.update();rebuildCaseCards();
    throw error;
  }
  if(replace)oldMeshes.forEach(m=>{m.geometry.dispose();m.material.dispose();});
}
async function importSTLFiles(files,replace) {
  if(caseBusy||!files.length)return;
  const selected=Array.from(files),prepared=[];
  const existing=replace?0:We.length;
  if(selected.length+existing>CASE_LIMITS.models){setCaseMessage('Bir vakada en fazla 32 STL olabilir.',true);return;}
  if(selected.reduce((n,f)=>n+f.size,0)>CASE_LIMITS.bytes){setCaseMessage('Tek seferde en fazla 160 MB STL yükleyin.',true);return;}
  setCaseBusy(true);
  let total=replace?0:We.reduce((n,m)=>n+m.userData.triangles,0);
  try {
    for(let i=0;i<selected.length;i++) {
      const file=selected[i],prefix=(i+1)+' / '+selected.length+' · '+file.name;
      setCaseMessage(prefix+' · Açılıyor');await caseYield();
      try {const p=await prepareSTLFile(file,existing+i,CASE_LIMITS.triangles-total,phase=>setCaseMessage(prefix+' · '+phase));prepared.push(p);total+=p.record.triangles;}
      catch(e){throw new Error(file.name+': '+e.message);}
    }
    const undo=pushSceneUndo('STL yükleme');
    try{commitSTLFiles(prepared,replace);}catch(error){cmDropUndo(undo);throw error;}
    setCaseMessage(selected.length+' STL yüklendi. Vaka adını ve görünümü ayarlayıp HTML’i indirin.');
  }catch(e){prepared.forEach(p=>p.geometry.dispose());setCaseMessage(e.message+' Mevcut vaka korunuyor.',true);}
  finally {setCaseBusy(false);}
}

function serializableModel(mesh) {
  const d=mesh.userData;
  return {id:d.id,name:d.name,role:d.role||classifySTL(d.name,0).role,color:thkBaseHex(mesh),
    opacity:mesh.material.opacity,visible:mesh.visible,baseColor:d.baseColor||Ug[d.id]||d.color,baseOpacity:d.baseOpacity??d.opacity,
    vertices:d.vertices,triangles:d.triangles,longAxis:d.longAxis,bounds:d.bounds,dimensions:d.dimensions,
    sourceSHA256:d.sourceSHA256||'',sourceBytes:d.sourceBytes||0,encoding:d.encoding||'gzip',data:d.data};
}
function snapshotCaseSettings() {
  updateDepthRange();
  return {version:'4.4',name:updateCaseName(),background:mt('background-color').value,light:Number(mt('light-slider').value),wireframe:Ua,
    view:{projection:Tt.isOrthographicCamera?'ortho':'perspective',position:Tt.position.toArray(),up:Tt.up.toArray(),target:Xt.target.toArray(),
      near:Tt.near,far:Tt.far,zoom:Tt.zoom,orthoHalfHeight:Tt.isOrthographicCamera?(Tt.top-Tt.bottom)/2:0}};
}
function restoreCaseView() {
  const settings=initialCaseSettings;
  if(/^#[0-9a-f]{6}$/i.test(settings.background||''))pl({'#08111e':'dark','#e9eff5':'light','#203b59':'blue'}[settings.background]||'custom',settings.background);
  if(Number.isFinite(settings.light)){const value=Math.max(50,Math.min(160,settings.light));mt('light-slider').value=value;mt('light-value').textContent='%'+value;_e.toneMappingExposure=1.08*value/100;}
  Ua=!!settings.wireframe;We.forEach(m=>window.cmMeshView(m,Ua));mt('wireframe').setAttribute('aria-pressed',String(Ua));
  const v=settings.view,validVector=a=>Array.isArray(a)&&a.length===3&&a.every(Number.isFinite);
  if(v&&We.length&&validVector(v.position)&&validVector(v.up)&&validVector(v.target)) {
    if(v.projection==='ortho')zg('ortho');
    Tt.position.fromArray(v.position);Tt.up.fromArray(v.up).normalize();Xt.target.fromArray(v.target);
    if(Tt.isOrthographicCamera&&Number.isFinite(v.orthoHalfHeight)&&v.orthoHalfHeight>0){Tt.top=v.orthoHalfHeight;Tt.bottom=-v.orthoHalfHeight;Tt.right=v.orthoHalfHeight*hn;Tt.left=-Tt.right;}
    if(Number.isFinite(v.zoom)&&v.zoom>0)Tt.zoom=v.zoom;
    if(Number.isFinite(v.near)&&v.near>0)Tt.near=v.near;
    if(Number.isFinite(v.far)&&v.far>Tt.near)Tt.far=v.far;
    Tt.updateProjectionMatrix();Tt.lookAt(Xt.target);Xt.update();Hs(null);
  }
  ye();
}
async function exportCaseHTML() {
  if(caseBusy||!We.length)return;
  if(!We.some(m=>m.visible)){setCaseMessage('HTML’i indirmeden önce en az bir modeli görünür yapın.',true);return;}
  setCaseBusy(true);setCaseMessage('Modeller ve görünüm HTML dosyasına ekleniyor…');await caseYield();
  try {
    const settings=snapshotCaseSettings(),records=We.map(serializableModel);
    if(records.some(d=>!d.data))throw new Error('Model verisi eksik.');
    const html=buildCaseHTML(caseSourceTemplate,records,settings);
    const url=URL.createObjectURL(new Blob([html],{type:'text/html;charset=utf-8'})),a=document.createElement('a');
    a.href=url;a.download=filenameForCase(settings.name);document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),30000);
    setCaseMessage('Hekim görüntüleme dosyasının indirmesi başlatıldı. İndirilen dosyayı hekime gönderin.');
  }catch(e){setCaseMessage('HTML oluşturulamadı: '+e.message,true);}
  finally{setCaseBusy(false);}
}
function clearAllCaseModels() {
  if(caseBusy||!We.length)return;
  pushSceneUndo('Tüm modelleri temizleme');
  const oldMeshes=We.slice();
  oldMeshes.forEach(m=>{ts.remove(m);m.geometry.dispose();m.material.dispose();});
  We=[];hl.length=0;Ug={};
  recenterCase();rebuildCaseCards();$n();
  setCaseMessage('Sahnedeki tüm modeller temizlendi.');
}
function setupCaseTools() {
  mt('case-name').value=String(initialCaseSettings.name||'Yeni vaka').slice(0,80);updateCaseName();
  mt('case-name').addEventListener('input',updateCaseName);
  for(const [button,input] of [['case-new','case-new-files'],['case-add','case-add-files']]) {
    mt(button).addEventListener('click',()=>mt(input).click());
    mt(input).addEventListener('change',async e=>{const files=Array.from(e.target.files||[]);e.target.value='';await importSTLFiles(files,false);});
  }
  mt('case-clear')?.addEventListener('click',removeSelectedCaseModel);
  const ws=mt('workspace');
  if(ws){
    ws.addEventListener('dragover',e=>{e.preventDefault();});
    ws.addEventListener('drop',async e=>{
      e.preventDefault();
      const files=Array.from(e.dataTransfer?.files||[]).filter(f=>/\.stl$/i.test(f.name));
      if(files.length)await importSTLFiles(files,false);
    });
  }
  mt('case-export').addEventListener('click',exportCaseHTML);We.forEach(bindRemoveModel);syncCaseUI();
}

// Rendering adjustments only: source positions, indices and model transforms stay intact.
function selectVisibleModel(id) {
  We.forEach(mesh=>mesh.visible=mesh.userData.id===id);
  Fa();
}

function surfaceRole(record) {
  return record.role || ({mand:'bone',teeth:'teeth',nerve:'nerve',mesh:'mesh',screw:'screw'}[record.id]) || 'other';
}

function materialForRecord(record) {
  const role=surfaceRole(record),metal=role==='mesh'||role==='screw';
  const contactSurface=role==='mesh'||role==='guide'||role==='other';
  const opacity=Number.isFinite(record.opacity)?Math.max(0,Math.min(1,record.opacity)):1;
  return new ws({
    color:record.color,roughness:metal?.46:.65,metalness:metal?.25:.03,
    side:Je,flatShading:false,opacity,transparent:opacity<1,depthTest:true,depthWrite:opacity===1,
    // Pull only the rasterized contact surface slightly forward, independent of file order.
    // Keep depth testing enabled so genuinely hidden anatomy still occludes the surface.
    polygonOffset:contactSurface,polygonOffsetFactor:contactSurface?-1:0,
    polygonOffsetUnits:contactSurface?-2:0,wireframe:false
  });
}

const depthDirection=new U(),depthCorner=new U(),depthSize=new U();
function updateDepthRange() {
  if(!Tt||!ts||!We.length)return;
  const box=is();if(box.isEmpty())return;
  const span=Math.max(box.getSize(depthSize).length(),.01);
  Tt.getWorldDirection(depthDirection);
  let closest=Infinity,farthest=-Infinity;
  for(const x of [box.min.x,box.max.x])for(const y of [box.min.y,box.max.y])for(const z of [box.min.z,box.max.z]) {
    const distance=depthCorner.set(x,y,z).sub(Tt.position).dot(depthDirection);
    closest=Math.min(closest,distance);farthest=Math.max(farthest,distance);
  }
  const margin=span*.025,minNear=Math.max(span/10000,.00001);
  const near=Math.max(minNear,closest-margin),far=Math.max(near+span*.05,farthest+margin);
  if(!Number.isFinite(near)||!Number.isFinite(far))return;
  if(Math.abs(Tt.near-near)>1e-8||Math.abs(Tt.far-far)>1e-8) {
    Tt.near=near;Tt.far=far;Tt.updateProjectionMatrix();
  }
}

function renderCase() {
  updateDepthRange();
  if(Ua)We.forEach(m=>window.cmMeshView(m,true));
  _e.render(gi,Tt);
}

function setOpaqueSurfaces() {
  Ua=false;mt('wireframe').setAttribute('aria-pressed','false');We.forEach(m=>window.cmMeshView(m,false));
  We.forEach(mesh=>{
    const material=mesh.material,id=mesh.userData.id;
    material.opacity=1;material.transparent=false;material.depthWrite=true;material.wireframe=false;
    material.needsUpdate=true;
    mt(id+'-opacity').value=0;mt(id+'-percent').textContent='%0';
  });
  ye();
}

function setupRenderQuality() {
  mt('opaque-surfaces').addEventListener('click',setOpaqueSurfaces);
}

function CMCore(){
// Edge radix 2^26: exact integer keys below 2^52, including large STL indices.
  const CMK=(x,y,z)=>((x+2048)*4096+(y+2048))*4096+(z+2048);

  function cmWeld(V0,F0,eps=1e-5){
    const inv=1/eps,map=new Map(),V=[],remap=new Uint32Array(V0.length/3);
    for(let i=0,n=V0.length/3;i<n;i++){
      const x=V0[i*3],y=V0[i*3+1],z=V0[i*3+2];
      const k=`${Math.round(x*inv)},${Math.round(y*inv)},${Math.round(z*inv)}`;
      let id=map.get(k);
      if(id===undefined){id=V.length/3;map.set(k,id);V.push(x,y,z);}
      remap[i]=id;
    }
    const F=[],seen=new Set();
    for(let t=0;t<F0.length;t+=3){
      const a=remap[F0[t]],b=remap[F0[t+1]],c=remap[F0[t+2]];
      if(a===b||b===c||c===a)continue;
      const ux=V[b*3]-V[a*3],uy=V[b*3+1]-V[a*3+1],uz=V[b*3+2]-V[a*3+2];
      const vx=V[c*3]-V[a*3],vy=V[c*3+1]-V[a*3+1],vz=V[c*3+2]-V[a*3+2];
      const area2=(uy*vz-uz*vy)**2+(uz*vx-ux*vz)**2+(ux*vy-uy*vx)**2;
      if(area2<1e-18)continue;
      const s=[a,b,c].sort((x,y)=>x-y),fk=`${s[0]}_${s[1]}_${s[2]}`;
      if(seen.has(fk))continue;seen.add(fk);
      F.push(a,b,c);
    }
    return {V:Float64Array.from(V),F:Uint32Array.from(F),remap};
  }

  function cmEdgeMap(F){
    const m=new Map();
    for(let t=0;t<F.length;t+=3)for(let k=0;k<3;k++){
      const a=F[t+k],b=F[t+(k+1)%3],key=a<b?a*67108864+b:b*67108864+a;
      m.set(key,(m.get(key)||0)+1);
    }
    return m;
  }

  function cmLoops(V,F){
    const be=[];
    for(const [k,c] of cmEdgeMap(F))if(c===1)be.push(Math.floor(k/67108864),k%67108864);
    const par=new Map(),find=a=>{while(par.get(a)!==a){par.set(a,par.get(par.get(a)));a=par.get(a);}return a;};
    for(let i=0;i<be.length;i++)if(!par.has(be[i]))par.set(be[i],be[i]);
    for(let i=0;i<be.length;i+=2){const a=find(be[i]),b=find(be[i+1]);if(a!==b)par.set(a,b);}
    const g=new Map();
    for(let i=0;i<be.length;i+=2){
      const r=find(be[i]);let o=g.get(r);if(!o)g.set(r,o={edges:[],len:0});
      o.edges.push(be[i],be[i+1]);
      o.len+=Math.hypot(V[be[i]*3]-V[be[i+1]*3],V[be[i]*3+1]-V[be[i+1]*3+1],V[be[i]*3+2]-V[be[i+1]*3+2]);
    }
    return [...g.values()].sort((a,b)=>b.len-a.len);
  }

  function cmSegIndex(V,edges){
    if(!edges||!edges.length)return null;
    const segs=[];
    for(let i=0;i<edges.length;i+=2){
      const a=edges[i]*3,b=edges[i+1]*3;
      const ax=V[a],ay=V[a+1],az=V[a+2],bx=V[b],by=V[b+1],bz=V[b+2];
      const dx=bx-ax,dy=by-ay,dz=bz-az,L2=dx*dx+dy*dy+dz*dz;
      segs.push({
        ax,ay,az,dx,dy,dz,L2,
        x0:Math.min(ax,bx),y0:Math.min(ay,by),z0:Math.min(az,bz),
        x1:Math.max(ax,bx),y1:Math.max(ay,by),z1:Math.max(az,bz),
        mx:(ax+bx)*0.5,my:(ay+by)*0.5,mz:(az+bz)*0.5
      });
    }
    const idx=new Uint32Array(segs.length);for(let i=0;i<idx.length;i++)idx[i]=i;
    const nodes=[];
    function build(l,r){
      let x0=1e9,y0=1e9,z0=1e9,x1=-1e9,y1=-1e9,z1=-1e9,cx0=1e9,cy0=1e9,cz0=1e9,cx1=-1e9,cy1=-1e9,cz1=-1e9;
      for(let i=l;i<r;i++){
        const S=segs[idx[i]];
        if(S.x0<x0)x0=S.x0;if(S.y0<y0)y0=S.y0;if(S.z0<z0)z0=S.z0;
        if(S.x1>x1)x1=S.x1;if(S.y1>y1)y1=S.y1;if(S.z1>z1)z1=S.z1;
        if(S.mx<cx0)cx0=S.mx;if(S.my<cy0)cy0=S.my;if(S.mz<cz0)cz0=S.mz;
        if(S.mx>cx1)cx1=S.mx;if(S.my>cy1)cy1=S.my;if(S.mz>cz1)cz1=S.mz;
      }
      const id=nodes.length;
      if(r-l<=8){nodes.push({x0,y0,z0,x1,y1,z1,l,r,left:-1,right:-1});return id;}
      const dx=cx1-cx0,dy=cy1-cy0,dz=cz1-cz0,axis=dx>=dy&&dx>=dz?0:dy>=dz?1:2;
      const mid=(axis===0?cx0+cx1:axis===1?cy0+cy1:cz0+cz1)*0.5;
      let i=l,j=r-1;
      while(i<=j){
        const v=axis===0?segs[idx[i]].mx:axis===1?segs[idx[i]].my:segs[idx[i]].mz;
        if(v<mid)i++;else{const tmp=idx[i];idx[i]=idx[j];idx[j]=tmp;j--;}
      }
      if(i===l||i===r)i=(l+r)>>1;
      nodes.push({x0,y0,z0,x1,y1,z1,l:-1,r:-1,left:-1,right:-1});
      nodes[id].left=build(l,i);nodes[id].right=build(i,r);
      return id;
    }
    build(0,segs.length);
    return {segs,idx,nodes};
  }

  function cmSegDist(bvh,px,py,pz,maxd){
    if(!bvh)return Infinity;
    const {segs,idx,nodes}=bvh;
    let bestD2=maxd<Infinity?(maxd+1e-4)*(maxd+1e-4):Infinity;
    const stack=[0];
    while(stack.length){
      const N=nodes[stack.pop()];
      const dx=px<N.x0?N.x0-px:px>N.x1?px-N.x1:0;
      const dy=py<N.y0?N.y0-py:py>N.y1?py-N.y1:0;
      const dz=pz<N.z0?N.z0-pz:pz>N.z1?pz-N.z1:0;
      if(dx*dx+dy*dy+dz*dz>=bestD2)continue;
      if(N.l>=0){
        for(let i=N.l;i<N.r;i++){
          const S=segs[idx[i]];
          let t=S.L2>0?((px-S.ax)*S.dx+(py-S.ay)*S.dy+(pz-S.az)*S.dz)/S.L2:0;
          t=t<0?0:t>1?1:t;
          const d2=(px-S.ax-t*S.dx)**2+(py-S.ay-t*S.dy)**2+(pz-S.az-t*S.dz)**2;
          if(d2<bestD2)bestD2=d2;
        }
      }else{
        const L=nodes[N.left],R=nodes[N.right];
        const dlx=px<L.x0?L.x0-px:px>L.x1?px-L.x1:0,dly=py<L.y0?L.y0-py:py>L.y1?py-L.y1:0,dlz=pz<L.z0?L.z0-pz:pz>L.z1?pz-L.z1:0;
        const drx=px<R.x0?R.x0-px:px>R.x1?px-R.x1:0,dry=py<R.y0?R.y0-py:py>R.y1?py-R.y1:0,drz=pz<R.z0?R.z0-pz:pz>R.z1?pz-R.z1:0;
        if(dlx*dlx+dly*dly+dlz*dlz<drx*drx+dry*dry+drz*drz){stack.push(N.right,N.left);}
        else{stack.push(N.left,N.right);}
      }
    }
    return Math.sqrt(bestD2);
  }

  function cmNormals(V,F){
    const N=new Float64Array(V.length);
    for(let t=0;t<F.length;t+=3){
      const a=F[t]*3,b=F[t+1]*3,c=F[t+2]*3;
      const ux=V[b]-V[a],uy=V[b+1]-V[a+1],uz=V[b+2]-V[a+2];
      const vx=V[c]-V[a],vy=V[c+1]-V[a+1],vz=V[c+2]-V[a+2];
      const nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;
      N[a]+=nx;N[a+1]+=ny;N[a+2]+=nz;
      N[b]+=nx;N[b+1]+=ny;N[b+2]+=nz;
      N[c]+=nx;N[c+1]+=ny;N[c+2]+=nz;
    }
    for(let i=0;i<N.length;i+=3){
      const l=Math.hypot(N[i],N[i+1],N[i+2])||1;
      N[i]/=l;N[i+1]/=l;N[i+2]/=l;
    }
    return N;
  }

  function cmBuildBVH(Vb,Fb,clipBox){
    if(!Vb||!Fb||!Fb.length)return null;
    const tris=[];
    for(let t=0;t<Fb.length;t+=3){
      const a=Fb[t]*3,b=Fb[t+1]*3,c=Fb[t+2]*3;
      const ax=Vb[a],ay=Vb[a+1],az=Vb[a+2],bx=Vb[b],by=Vb[b+1],bz=Vb[b+2],cx=Vb[c],cy=Vb[c+1],cz=Vb[c+2];
      const x0=Math.min(ax,bx,cx),y0=Math.min(ay,by,cy),z0=Math.min(az,bz,cz);
      const x1=Math.max(ax,bx,cx),y1=Math.max(ay,by,cy),z1=Math.max(az,bz,cz);
      if(clipBox&&(x1<clipBox[0]||x0>clipBox[3]||y1<clipBox[1]||y0>clipBox[4]||z1<clipBox[2]||z0>clipBox[5]))continue;
      const ux=bx-ax,uy=by-ay,uz=bz-az,vx=cx-ax,vy=cy-ay,vz=cz-az;
      let nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;const nl=Math.hypot(nx,ny,nz)||1;
      tris.push({ax,ay,az,bx,by,bz,cx,cy,cz,x0,y0,z0,x1,y1,z1,mx:(ax+bx+cx)/3,my:(ay+by+cy)/3,mz:(az+bz+cz)/3,nx:nx/nl,ny:ny/nl,nz:nz/nl});
    }
    if(!tris.length)return null;
    const idx=new Uint32Array(tris.length);for(let i=0;i<idx.length;i++)idx[i]=i;
    const nodes=[];
    function build(l,r){
      let x0=1e9,y0=1e9,z0=1e9,x1=-1e9,y1=-1e9,z1=-1e9,cx0=1e9,cy0=1e9,cz0=1e9,cx1=-1e9,cy1=-1e9,cz1=-1e9;
      for(let i=l;i<r;i++){
        const T=tris[idx[i]];
        if(T.x0<x0)x0=T.x0;if(T.y0<y0)y0=T.y0;if(T.z0<z0)z0=T.z0;
        if(T.x1>x1)x1=T.x1;if(T.y1>y1)y1=T.y1;if(T.z1>z1)z1=T.z1;
        if(T.mx<cx0)cx0=T.mx;if(T.my<cy0)cy0=T.my;if(T.mz<cz0)cz0=T.mz;
        if(T.mx>cx1)cx1=T.mx;if(T.my>cy1)cy1=T.my;if(T.mz>cz1)cz1=T.mz;
      }
      const id=nodes.length;
      if(r-l<=8){nodes.push({x0,y0,z0,x1,y1,z1,l,r,left:-1,right:-1});return id;}
      const dx=cx1-cx0,dy=cy1-cy0,dz=cz1-cz0,axis=dx>=dy&&dx>=dz?0:dy>=dz?1:2;
      const mid=(axis===0?cx0+cx1:axis===1?cy0+cy1:cz0+cz1)*0.5;
      let i=l,j=r-1;
      while(i<=j){
        const v=axis===0?tris[idx[i]].mx:axis===1?tris[idx[i]].my:tris[idx[i]].mz;
        if(v<mid)i++;else{const tmp=idx[i];idx[i]=idx[j];idx[j]=tmp;j--;}
      }
      if(i===l||i===r)i=(l+r)>>1;
      nodes.push({x0,y0,z0,x1,y1,z1,l:-1,r:-1,left:-1,right:-1});
      nodes[id].left=build(l,i);nodes[id].right=build(i,r);
      return id;
    }
    build(0,tris.length);
    return {tris,idx,nodes};
  }

  function cmClosestPtTri(px,py,pz,T){
    const ax=T.ax,ay=T.ay,az=T.az,bx=T.bx,by=T.by,bz=T.bz,cx=T.cx,cy=T.cy,cz=T.cz;
    const abx=bx-ax,aby=by-ay,abz=bz-az,acx=cx-ax,acy=cy-ay,acz=cz-az,apx=px-ax,apy=py-ay,apz=pz-az;
    const d1=abx*apx+aby*apy+abz*apz,d2=acx*apx+acy*apy+acz*apz;
    if(d1<=0&&d2<=0)return [ax,ay,az];
    const bpx=px-bx,bpy=py-by,bpz=pz-bz,d3=abx*bpx+aby*bpy+abz*bpz,d4=acx*bpx+acy*bpy+acz*bpz;
    if(d3>=0&&d4<=d3)return [bx,by,bz];
    const vc=d1*d4-d3*d2;
    if(vc<=0&&d1>=0&&d3<=0){const v=d1/(d1-d3);return [ax+v*abx,ay+v*aby,az+v*abz];}
    const cpx=px-cx,cpy=py-cy,cpz=pz-cz,d5=abx*cpx+aby*cpy+abz*cpz,d6=acx*cpx+acy*cpy+acz*cpz;
    if(d6>=0&&d5<=d6)return [cx,cy,cz];
    const vb=d5*d2-d1*d6;
    if(vb<=0&&d2>=0&&d6<=0){const w=d2/(d2-d6);return [ax+w*acx,ay+w*acy,az+w*acz];}
    const va=d3*d6-d5*d4;
    if(va<=0&&(d4-d3)>=0&&(d5-d6)>=0){const w=(d4-d3)/((d4-d3)+(d5-d6));return [bx+w*(cx-bx),by+w*(cy-by),bz+w*(cz-bz)];}
    const denom=1/(va+vb+vc),v=vb*denom,w=vc*denom;
    return [ax+abx*v+acx*w,ay+aby*v+acy*w,az+abz*v+acz*w];
  }

  function cmBVHClosest(bvh,px,py,pz){
    const {tris,idx,nodes}=bvh;
    let bestD2=Infinity,bx=px,by=py,bz=pz,bnx=0,bny=0,bnz=1;
    const stack=[0];
    while(stack.length){
      const ni=stack.pop(),N=nodes[ni];
      const dx=px<N.x0?N.x0-px:px>N.x1?px-N.x1:0;
      const dy=py<N.y0?N.y0-py:py>N.y1?py-N.y1:0;
      const dz=pz<N.z0?N.z0-pz:pz>N.z1?pz-N.z1:0;
      if(dx*dx+dy*dy+dz*dz>=bestD2)continue;
      if(N.l>=0){
        for(let i=N.l;i<N.r;i++){
          const T=tris[idx[i]],[qx,qy,qz]=cmClosestPtTri(px,py,pz,T);
          const d2=(px-qx)**2+(py-qy)**2+(pz-qz)**2;
          if(d2<bestD2){bestD2=d2;bx=qx;by=qy;bz=qz;bnx=T.nx;bny=T.ny;bnz=T.nz;}
        }
      }else{
        const L=nodes[N.left],R=nodes[N.right];
        const dlx=px<L.x0?L.x0-px:px>L.x1?px-L.x1:0,dly=py<L.y0?L.y0-py:py>L.y1?py-L.y1:0,dlz=pz<L.z0?L.z0-pz:pz>L.z1?pz-L.z1:0;
        const drx=px<R.x0?R.x0-px:px>R.x1?px-R.x1:0,dry=py<R.y0?R.y0-py:py>R.y1?py-R.y1:0,drz=pz<R.z0?R.z0-pz:pz>R.z1?pz-R.z1:0;
        if(dlx*dlx+dly*dly+dlz*dlz<drx*drx+dry*dry+drz*drz){stack.push(N.right,N.left);}
        else{stack.push(N.left,N.right);}
      }
    }
    return [bx,by,bz,bestD2,bnx,bny,bnz];
  }

  // Exact linear midpoint refinement: preserves 100% of original surface geometry without PN-triangle ballooning/distortion
  function cmRefine(V0,F0,ix,reach,maxEdge,progress){
    let V=Array.from(V0),F=Array.from(F0);
    for(let pass=0;pass<10;pass++){
      if(F.length>=(ix===null?1200000:3600000))break;
      const mid=new Map(),nv=()=>V.length/3,dcache=new Map();
      const vd=i=>{if(!ix)return 0;let d=dcache.get(i);if(d===undefined){d=cmSegDist(ix,V[i*3],V[i*3+1],V[i*3+2],Infinity);dcache.set(i,d);}return d;};
      const split=(a,b)=>{
        if(a>b){const t=a;a=b;b=t;}
        const key=a*67108864+b;let m=mid.get(key);if(m!==undefined)return m;
        const ax=V[a*3],ay=V[a*3+1],az=V[a*3+2],bx=V[b*3],by=V[b*3+1],bz=V[b*3+2];
        const dx=bx-ax,dy=by-ay,dz=bz-az,L=Math.hypot(dx,dy,dz);
        m=-1;
        if(L>maxEdge&&(ix===null||Math.min(vd(a),vd(b))<=reach+L/2)){
          m=nv();
          V.push((ax+bx)*0.5,(ay+by)*0.5,(az+bz)*0.5);
        }
        mid.set(key,m);return m;
      };
      const G=[];let changed=0;
      for(let t=0;t<F.length;t+=3){
        let a=F[t],b=F[t+1],c=F[t+2];
        const m0=split(a,b),m1=split(b,c),m2=split(c,a),n=(m0>=0)+(m1>=0)+(m2>=0);
        if(n===0){G.push(a,b,c);continue;}changed++;
        if(n===3){G.push(a,m0,m2,m0,b,m1,m2,m1,c,m0,m1,m2);continue;}
        if(n===1){
          if(m1>=0){[a,b,c]=[b,c,a];G.push(a,m1,c,m1,b,c);}
          else if(m2>=0){[a,b,c]=[c,a,b];G.push(a,m2,c,m2,b,c);}
          else G.push(a,m0,c,m0,b,c);
          continue;
        }
        let p,q,r,mp,mq;
        if(m0<0){p=b;q=c;r=a;mp=m1;mq=m2;}else if(m1<0){p=c;q=a;r=b;mp=m2;mq=m0;}else{p=a;q=b;r=c;mp=m0;mq=m1;}
        G.push(mp,q,mq);
        const d1=Math.hypot(V[p*3]-V[mq*3],V[p*3+1]-V[mq*3+1],V[p*3+2]-V[mq*3+2]),
              d2=Math.hypot(V[r*3]-V[mp*3],V[r*3+1]-V[mp*3+1],V[r*3+2]-V[mp*3+2]);
        if(d1<=d2)G.push(p,mp,mq,p,mq,r);else G.push(p,mp,r,mp,mq,r);
      }
      if(G.length>4500000)break;F=G;if(progress)progress('Yüzey inceltiliyor ('+(pass+1)+')');if(!changed)break;
    }
    return {V:Float64Array.from(V),F:Uint32Array.from(F)};
  }

  // Thin-edge Bone Zero-Fit:
  // In 'edge' mode, ONLY a very thin outer edge (wTip=0.08mm contact + wFeather~0.30mm C2 quintic blend, total ~0.38mm)
  // of the outer boundary loop (loops[0]) is smoothly adhered to the bone surface (0.00 mm).
  // The entire interior surface (d >= dTotal) and all internal screw holes are 100% untouched (zero distortion).
  function cmFitToBone(V0,F,loops,bvh,o,say){
    const nv=V0.length/3,V=Float64Array.from(V0);
    const N=cmNormals(V,F);
    let surfSign=o.surfSign||1;

    if(!bvh)return {V,surfSign};

    let vote=0;
    const step=Math.max(1,Math.floor(nv/400));
    for(let i=0;i<nv;i+=step){
      const px=V[i*3],py=V[i*3+1],pz=V[i*3+2],nx=N[i*3],ny=N[i*3+1],nz=N[i*3+2];
      const [cx,cy,cz,d2]=cmBVHClosest(bvh,px,py,pz);
      if(d2>1e-4){
        vote+=(px-cx)*nx+(py-cy)*ny+(pz-cz)*nz>=0?1:-1;
      }else{
        const dPlus=cmBVHClosest(bvh,px+nx*0.15,py+ny*0.15,pz+nz*0.15)[3];
        const dMinus=cmBVHClosest(bvh,px-nx*0.15,py-ny*0.15,pz-nz*0.15)[3];
        vote+=dPlus>=dMinus?1:-1;
      }
    }
    if(vote<0)surfSign=-1;

    const fitMode=o.fitMode||'edge';
    if(fitMode==='none')return {V,surfSign};

    const adj=Array.from({length:nv},()=>[]);
    for(let t=0;t<F.length;t+=3){
      const a=F[t],b=F[t+1],c=F[t+2];
      adj[a].push(b,c);adj[b].push(a,c);adj[c].push(a,b);
    }

    if(fitMode==='full'){
      if(say)say('Tüm yüzey kemiğe sıfırlanıyor');
      const bSet=new Uint8Array(nv);
      for(const l of loops)for(const v of l.edges)bSet[v]=1;
      for(let i=0;i<nv;i++){
        const [cx,cy,cz]=cmBVHClosest(bvh,V[i*3],V[i*3+1],V[i*3+2]);
        V[i*3]=cx;V[i*3+1]=cy;V[i*3+2]=cz;
      }
      for(let it=0;it<2;it++){
        const VN=cmNormals(V,F),V2=Float64Array.from(V);
        for(let i=0;i<nv;i++){
          if(bSet[i]||!adj[i].length)continue;
          let sx=0,sy=0,sz=0;const nb=adj[i];
          for(const j of nb){sx+=V[j*3];sy+=V[j*3+1];sz+=V[j*3+2];}
          sx/=nb.length;sy/=nb.length;sz/=nb.length;
          const dx=sx-V[i*3],dy=sy-V[i*3+1],dz=sz-V[i*3+2];
          const nx=VN[i*3],ny=VN[i*3+1],nz=VN[i*3+2],dot=dx*nx+dy*ny+dz*nz;
          const px=V[i*3]+0.35*(dx-dot*nx),py=V[i*3+1]+0.35*(dy-dot*ny),pz=V[i*3+2]+0.35*(dz-dot*nz);
          const [cx,cy,cz]=cmBVHClosest(bvh,px,py,pz);
          V2[i*3]=cx;V2[i*3+1]=cy;V2[i*3+2]=cz;
        }
        V.set(V2);
      }
      return {V,surfSign};
    }

    if(say)say('Yalnızca ince dış kenar kemiğe sıfırlanıyor (iç yüzey korunuyor)');

    // Smooth vertex normals so normal-guided edge adherence never jitters or bunches triangles
    const NS=Float64Array.from(N);
    for(let it=0;it<5;it++){
      const N2=Float64Array.from(NS);
      for(let i=0;i<nv;i++){
        const nb=adj[i];if(!nb.length)continue;
        let sx=NS[i*3]*2,sy=NS[i*3+1]*2,sz=NS[i*3+2]*2;
        for(const j of nb){sx+=NS[j*3];sy+=NS[j*3+1];sz+=NS[j*3+2];}
        const l=Math.hypot(sx,sy,sz)||1;
        N2[i*3]=sx/l;N2[i*3+1]=sy/l;N2[i*3+2]=sz/l;
      }
      NS.set(N2);
    }

    // Only outer boundary loop (loops[0]) is adhered; internal holes (screw holes) stay 100% on original surface
    const lo=cmSegIndex(V,loops[0].edges);
    const wTip=0.08;
    const wFeather=Math.min(0.36,Math.max(0.20,(o.wOuter||0.6)*0.50));
    const dTotal=wTip+wFeather;
    const maxSnapDist=2.5;

    const targetD=new Float64Array(nv*3);
    const weight=new Float64Array(nv);
    const active=new Uint8Array(nv);

    for(let i=0;i<nv;i++){
      const px=V[i*3],py=V[i*3+1],pz=V[i*3+2];
      const d1=cmSegDist(lo,px,py,pz,dTotal+0.12);
      if(d1>=dTotal+0.10)continue;
      active[i]=1;
      const [cx,cy,cz,dist2]=cmBVHClosest(bvh,px,py,pz);
      const dist=Math.sqrt(dist2);
      if(dist>maxSnapDist*1.4)continue;

      const rdx=cx-px,rdy=cy-py,rdz=cz-pz;
      const nx=NS[i*3],ny=NS[i*3+1],nz=NS[i*3+2];
      // Project displacement primarily along smooth surface normal and damp tangential slide so triangles never bunch up
      const dn=rdx*nx+rdy*ny+rdz*nz;
      const tx=rdx-dn*nx,ty=rdy-dn*ny,tz=rdz-dn*nz;
      const tLen=Math.hypot(tx,ty,tz);
      const maxT=Math.min(0.15,Math.abs(dn)*0.22+0.03);
      const tScale=tLen>maxT?(maxT/tLen)*0.22:0.22;
      targetD[i*3]=dn*nx+tx*tScale;
      targetD[i*3+1]=dn*ny+ty*tScale;
      targetD[i*3+2]=dn*nz+tz*tScale;

      if(d1<dTotal){
        let w=1.0;
        if(d1>wTip){
          const u=(d1-wTip)/wFeather;
          // C2 quintic smoothstep: zero slope AND zero curvature kink at both ends
          w=1.0-u*u*u*(10-15*u+6*u*u);
        }
        if(dist>maxSnapDist){
          const ud=Math.min(1,(dist-maxSnapDist)/(maxSnapDist*0.4));
          w*=0.5*(1+Math.cos(Math.PI*ud));
        }
        weight[i]=w;
      }
    }

    // Smooth targetD across active rim neighborhood (8 passes) so bone facet steps never distort the thin edge
    for(let it=0;it<8;it++){
      const td2=Float64Array.from(targetD);
      for(let i=0;i<nv;i++){
        if(!active[i]||!adj[i].length)continue;
        let sx=targetD[i*3]*2,sy=targetD[i*3+1]*2,sz=targetD[i*3+2]*2,cnt=2;
        for(const j of adj[i]){
          if(!active[j])continue;
          sx+=targetD[j*3];sy+=targetD[j*3+1];sz+=targetD[j*3+2];cnt++;
        }
        td2[i*3]=sx/cnt;td2[i*3+1]=sy/cnt;td2[i*3+2]=sz/cnt;
      }
      targetD.set(td2);
    }

    // Apply C2-weighted displacement strictly inside d1 < dTotal (interior d1 >= dTotal is 100% untouched)
    for(let i=0;i<nv;i++){
      const w=weight[i];
      if(w<=0)continue;
      V[i*3]+=targetD[i*3]*w;
      V[i*3+1]+=targetD[i*3+1]*w;
      V[i*3+2]+=targetD[i*3+2]*w;
    }

    // Smooth outer boundary curve tangentially along loop (4 passes) so the thin contact lip is a clean ribbon
    const bAdj=Array.from({length:nv},()=>[]);
    const isOuterB=new Uint8Array(nv);
    const oe=loops[0].edges;
    for(let i=0;i<oe.length;i+=2){
      const a=oe[i],b=oe[i+1];
      bAdj[a].push(b);bAdj[b].push(a);
      isOuterB[a]=1;isOuterB[b]=1;
    }
    for(const lam of [0.35,-0.32,0.35,-0.32]){
      const V2=Float64Array.from(V);
      for(let i=0;i<nv;i++){
        if(!isOuterB[i]||bAdj[i].length!==2||weight[i]<0.5)continue;
        const [n1,n2]=bAdj[i];
        const mx=0.5*(V[n1*3]+V[n2*3])-V[i*3];
        const my=0.5*(V[n1*3+1]+V[n2*3+1])-V[i*3+1];
        const mz=0.5*(V[n1*3+2]+V[n2*3+2])-V[i*3+2];
        V2[i*3]=V[i*3]+lam*mx;
        V2[i*3+1]=V[i*3+1]+lam*my;
        V2[i*3+2]=V[i*3+2]+lam*mz;
      }
      V.set(V2);
    }

    return {V,surfSign};
  }

  function smin(a,b,k){
    if(k<=1e-6)return Math.min(a,b);
    const h=Math.max(k-Math.abs(a-b),0)/k;
    return Math.min(a,b)-h*h*k*0.25;
  }

  function cmClipSDF(V0,F0,phi){
    const V=Array.from(V0),nv0=V0.length/3;
    const S=new Float64Array(nv0);
    for(let i=0;i<nv0;i++)S[i]=Math.abs(phi[i])<1e-5?-1e-5:phi[i];
    const edgeCut=new Map();
    function getCut(a,b){
      const k=a<b?a*67108864+b:b*67108864+a;
      let id=edgeCut.get(k);if(id!==undefined)return id;
      const sa=S[a],sb=S[b];
      let t=sa/(sa-sb);
      t=Math.max(0.08,Math.min(0.92,t));
      id=V.length/3;
      V.push(V[a*3]+t*(V[b*3]-V[a*3]),V[a*3+1]+t*(V[b*3+1]-V[a*3+1]),V[a*3+2]+t*(V[b*3+2]-V[a*3+2]));
      edgeCut.set(k,id);
      return id;
    }
    const F=[];
    for(let t=0;t<F0.length;t+=3){
      const a=F0[t],b=F0[t+1],c=F0[t+2];
      const ia=S[a]<=0,ib=S[b]<=0,ic=S[c]<=0,cnt=ia+ib+ic;
      if(cnt===0)continue;
      if(cnt===3){F.push(a,b,c);continue;}
      if(cnt===1){
        let p,q,r;
        if(ia){p=a;q=b;r=c;}else if(ib){p=b;q=c;r=a;}else{p=c;q=a;r=b;}
        F.push(p,getCut(p,q),getCut(p,r));
      }else{
        let p,q,r;
        if(!ia){p=a;q=b;r=c;}else if(!ib){p=b;q=c;r=a;}else{p=c;q=a;r=b;}
        const pq=getCut(p,q),pr=getCut(p,r);
        const d1=(V[q*3]-V[pr*3])**2+(V[q*3+1]-V[pr*3+1])**2+(V[q*3+2]-V[pr*3+2])**2;
        const d2=(V[r*3]-V[pq*3])**2+(V[r*3+1]-V[pq*3+1])**2+(V[r*3+2]-V[pq*3+2])**2;
        if(d1<=d2)F.push(pq,q,pr,q,r,pr);
        else F.push(pq,q,r,pq,r,pr);
      }
    }
    return {V:Float64Array.from(V),F:Uint32Array.from(F),nv0};
  }

  function cmCleanSheet(V0,F0){
    const F=Array.from(F0),nf=F.length/3;
    if(!nf)return {V:V0,F:new Uint32Array(0)};
    const vTris=new Map();
    for(let t=0;t<nf;t++){
      for(let k=0;k<3;k++){
        const v=F[t*3+k];let l=vTris.get(v);if(!l)vTris.set(v,l=[]);l.push(t);
      }
    }
    const vis=new Uint8Array(nf),comps=[];
    for(let i=0;i<nf;i++){
      if(vis[i])continue;
      const q=[i];vis[i]=1;
      for(let h=0;h<q.length;h++){
        const t=q[h];
        for(let k=0;k<3;k++){
          const v=F[t*3+k];
          for(const nt of vTris.get(v)){if(!vis[nt]){vis[nt]=1;q.push(nt);}}
        }
      }
      comps.push(q);
    }
    comps.sort((a,b)=>b.length-a.length);
    const maxLen=comps[0].length,keep=new Uint8Array(nf);
    for(const c of comps)if(c.length>=Math.min(18,maxLen))for(const t of c)keep[t]=1;
    const Fk=[];
    for(let t=0;t<nf;t++)if(keep[t])Fk.push(F[t*3],F[t*3+1],F[t*3+2]);

    const remap=new Int32Array(V0.length/3).fill(-1),V=[];
    for(let i=0;i<Fk.length;i++){
      const v=Fk[i];
      if(remap[v]<0){
        remap[v]=V.length/3;
        V.push(V0[v*3],V0[v*3+1],V0[v*3+2]);
      }
      Fk[i]=remap[v];
    }
    return {V:Float64Array.from(V),F:Uint32Array.from(Fk)};
  }

  function cmSmoothSheet(V,F,origBoundSet){
    const nv=V.length/3;
    const em=cmEdgeMap(F);
    const bAdj=Array.from({length:nv},()=>[]);
    const isCutBound=new Uint8Array(nv);
    for(const [k,c] of em){
      if(c===1){
        const a=Math.floor(k/67108864),b=k%67108864;
        if(!origBoundSet[a]&&!origBoundSet[b]){
          bAdj[a].push(b);bAdj[b].push(a);
          isCutBound[a]=1;isCutBound[b]=1;
        }
      }
    }
    const N=cmNormals(V,F);
    for(const lam of [0.45,-0.42,0.45,-0.42,0.40,-0.38]){
      const V2=Float64Array.from(V);
      for(let i=0;i<nv;i++){
        if(!isCutBound[i]||bAdj[i].length!==2)continue;
        const [n1,n2]=bAdj[i];
        const mx=0.5*(V[n1*3]+V[n2*3])-V[i*3];
        const my=0.5*(V[n1*3+1]+V[n2*3+1])-V[i*3+1];
        const mz=0.5*(V[n1*3+2]+V[n2*3+2])-V[i*3+2];
        const nx=N[i*3],ny=N[i*3+1],nz=N[i*3+2],dot=mx*nx+my*ny+mz*nz;
        V2[i*3]=V[i*3]+lam*(mx-dot*nx);
        V2[i*3+1]=V[i*3+1]+lam*(my-dot*ny);
        V2[i*3+2]=V[i*3+2]+lam*(mz-dot*nz);
      }
      V.set(V2);
    }
    const adj=Array.from({length:nv},()=>[]);
    for(let t=0;t<F.length;t+=3){
      const a=F[t],b=F[t+1],c=F[t+2];
      adj[a].push(b,c);adj[b].push(a,c);adj[c].push(a,b);
    }
    for(let it=0;it<2;it++){
      const V2=Float64Array.from(V);
      for(let i=0;i<nv;i++){
        if(origBoundSet[i]||isCutBound[i]||!adj[i].length)continue;
        let sx=0,sy=0,sz=0;const nb=adj[i];
        for(const j of nb){sx+=V[j*3];sy+=V[j*3+1];sz+=V[j*3+2];}
        sx/=nb.length;sy/=nb.length;sz/=nb.length;
        const dx=sx-V[i*3],dy=sy-V[i*3+1],dz=sz-V[i*3+2];
        const nx=N[i*3],ny=N[i*3+1],nz=N[i*3+2],dot=dx*nx+dy*ny+dz*nz;
        V2[i*3]=V[i*3]+0.35*(dx-dot*nx);
        V2[i*3+1]=V[i*3+1]+0.35*(dy-dot*ny);
        V2[i*3+2]=V[i*3+2]+0.35*(dz-dot*nz);
      }
      V.set(V2);
    }
  }

  // Symmetric ±halfOff 3D Wrap Solidifier (-halfOff inward, +halfOff outward = 2*halfOff total thickness, e.g. -0.15 / +0.15 = 0.30 mm)
  function cmSolidifySymmetric(V,F,halfOff,surfSign,origBoundSet){
    const nv=V.length/3,nf=F.length/3;
    if(!nf)return new Float32Array(0);
    const N=cmNormals(V,F);
    const adj=Array.from({length:nv},()=>[]);
    for(let t=0;t<F.length;t+=3){
      const a=F[t],b=F[t+1],c=F[t+2];
      adj[a].push(b,c);adj[b].push(a,c);adj[c].push(a,b);
    }
    const NS=Float64Array.from(N);
    for(let it=0;it<4;it++){
      const N2=Float64Array.from(NS);
      for(let i=0;i<nv;i++){
        const nb=adj[i];if(!nb.length)continue;
        let sx=NS[i*3]*2,sy=NS[i*3+1]*2,sz=NS[i*3+2]*2;
        for(const j of nb){sx+=NS[j*3];sy+=NS[j*3+1];sz+=NS[j*3+2];}
        const l=Math.hypot(sx,sy,sz)||1;
        N2[i*3]=sx/l;N2[i*3+1]=sy/l;N2[i*3+2]=sz/l;
      }
      NS.set(N2);
    }

    const dirSet=new Set();
    for(let t=0;t<F.length;t+=3){
      for(let k=0;k<3;k++){
        const a=F[t+k],b=F[t+(k+1)%3];
        dirSet.add(a*67108864+b);
      }
    }
    const bEdges=[],isBound=new Uint8Array(nv);
    for(let t=0;t<F.length;t+=3){
      for(let k=0;k<3;k++){
        const a=F[t+k],b=F[t+(k+1)%3];
        if(!dirSet.has(b*67108864+a)){
          bEdges.push(a,b);
          isBound[a]=1;isBound[b]=1;
        }
      }
    }

    const prof=new Float64Array(nv).fill(1.0);
    for(let i=0;i<nv;i++)if(isBound[i])prof[i]=0.68;
    for(let it=0;it<3;it++){
      const p2=Float64Array.from(prof);
      for(let i=0;i<nv;i++){
        if(isBound[i]||!adj[i].length)continue;
        let s=prof[i];for(const j of adj[i])s+=prof[j];
        p2[i]=Math.min(1.0,s/(adj[i].length+1)*1.04);
      }
      prof.set(p2);
    }

    const Vbot=new Float64Array(nv*3),Vtop=new Float64Array(nv*3);
    for(let i=0;i<nv;i++){
      const pBot=(origBoundSet&&origBoundSet[i])?1.0:prof[i];
      const pTop=prof[i];
      const hBot=-halfOff*pBot*surfSign;
      const hTop=+halfOff*pTop*surfSign;
      Vbot[i*3]=V[i*3]+NS[i*3]*hBot;
      Vbot[i*3+1]=V[i*3+1]+NS[i*3+1]*hBot;
      Vbot[i*3+2]=V[i*3+2]+NS[i*3+2]*hBot;
      Vtop[i*3]=V[i*3]+NS[i*3]*hTop;
      Vtop[i*3+1]=V[i*3+1]+NS[i*3+1]*hTop;
      Vtop[i*3+2]=V[i*3+2]+NS[i*3+2]*hTop;
    }

    for(let it=0;it<3;it++){
      const Vt2=Float64Array.from(Vtop),Vb2=Float64Array.from(Vbot);
      for(let i=0;i<nv;i++){
        if(origBoundSet&&origBoundSet[i])continue;
        const nb=adj[i];if(!nb.length)continue;
        let stx=0,sty=0,stz=0,sbx=0,sby=0,sbz=0;
        for(const j of nb){
          stx+=Vtop[j*3];sty+=Vtop[j*3+1];stz+=Vtop[j*3+2];
          sbx+=Vbot[j*3];sby+=Vbot[j*3+1];sbz+=Vbot[j*3+2];
        }
        stx/=nb.length;sty/=nb.length;stz/=nb.length;
        sbx/=nb.length;sby/=nb.length;sbz/=nb.length;
        const lam=isBound[i]?0.22:0.28;
        Vt2[i*3]=(1-lam)*Vtop[i*3]+lam*stx;
        Vt2[i*3+1]=(1-lam)*Vtop[i*3+1]+lam*sty;
        Vt2[i*3+2]=(1-lam)*Vtop[i*3+2]+lam*stz;
        Vb2[i*3]=(1-lam)*Vbot[i*3]+lam*sbx;
        Vb2[i*3+1]=(1-lam)*Vbot[i*3+1]+lam*sby;
        Vb2[i*3+2]=(1-lam)*Vbot[i*3+2]+lam*sbz;
      }
      Vtop.set(Vt2);Vbot.set(Vb2);
    }

    const wallN=new Float64Array(nv*3);
    for(let i=0;i<bEdges.length;i+=2){
      const a=bEdges[i],b=bEdges[i+1];
      const tx=V[b*3]-V[a*3],ty=V[b*3+1]-V[a*3+1],tz=V[b*3+2]-V[a*3+2];
      const nx=NS[a*3]*surfSign,ny=NS[a*3+1]*surfSign,nz=NS[a*3+2]*surfSign;
      let wx=ty*nz-tz*ny,wy=tz*nx-tx*nz,wz=tx*ny-ty*nx;
      const wl=Math.hypot(wx,wy,wz)||1;wx/=wl;wy/=wl;wz/=wl;
      wallN[a*3]+=wx;wallN[a*3+1]+=wy;wallN[a*3+2]+=wz;
      wallN[b*3]+=wx;wallN[b*3+1]+=wy;wallN[b*3+2]+=wz;
    }

    const midId=new Int32Array(nv).fill(-1),Vmid=[];
    const bulge=halfOff*0.22;
    for(let i=0;i<nv;i++){
      if(!isBound[i])continue;
      midId[i]=Vmid.length/3;
      const wl=Math.hypot(wallN[i*3],wallN[i*3+1],wallN[i*3+2])||1;
      const b=origBoundSet&&origBoundSet[i]?0:bulge;
      Vmid.push(
        V[i*3]+(wallN[i*3]/wl)*b,
        V[i*3+1]+(wallN[i*3+1]/wl)*b,
        V[i*3+2]+(wallN[i*3+2]/wl)*b
      );
    }

    const totalTris=nf*2+(bEdges.length/2)*4;
    const out=new Float32Array(totalTris*9);
    let ptr=0;
    const pushTri=(ax,ay,az,bx,by,bz,cx,cy,cz)=>{
      out[ptr++]=ax;out[ptr++]=ay;out[ptr++]=az;
      out[ptr++]=bx;out[ptr++]=by;out[ptr++]=bz;
      out[ptr++]=cx;out[ptr++]=cy;out[ptr++]=cz;
    };

    for(let t=0;t<F.length;t+=3){
      const a=F[t],b=F[t+1],c=F[t+2];
      if(surfSign>0){
        pushTri(Vbot[a*3],Vbot[a*3+1],Vbot[a*3+2],Vbot[c*3],Vbot[c*3+1],Vbot[c*3+2],Vbot[b*3],Vbot[b*3+1],Vbot[b*3+2]);
        pushTri(Vtop[a*3],Vtop[a*3+1],Vtop[a*3+2],Vtop[b*3],Vtop[b*3+1],Vtop[b*3+2],Vtop[c*3],Vtop[c*3+1],Vtop[c*3+2]);
      }else{
        pushTri(Vbot[a*3],Vbot[a*3+1],Vbot[a*3+2],Vbot[b*3],Vbot[b*3+1],Vbot[b*3+2],Vbot[c*3],Vbot[c*3+1],Vbot[c*3+2]);
        pushTri(Vtop[a*3],Vtop[a*3+1],Vtop[a*3+2],Vtop[c*3],Vtop[c*3+1],Vtop[c*3+2],Vtop[b*3],Vtop[b*3+1],Vtop[b*3+2]);
      }
    }

    for(let i=0;i<bEdges.length;i+=2){
      const a=bEdges[i],b=bEdges[i+1],ma=midId[a]*3,mb=midId[b]*3;
      const ax0=Vbot[a*3],ay0=Vbot[a*3+1],az0=Vbot[a*3+2],bx0=Vbot[b*3],by0=Vbot[b*3+1],bz0=Vbot[b*3+2];
      const ax1=Vmid[ma],ay1=Vmid[ma+1],az1=Vmid[ma+2],bx1=Vmid[mb],by1=Vmid[mb+1],bz1=Vmid[mb+2];
      const ax2=Vtop[a*3],ay2=Vtop[a*3+1],az2=Vtop[a*3+2],bx2=Vtop[b*3],by2=Vtop[b*3+1],bz2=Vtop[b*3+2];
      if(surfSign>0){
        pushTri(ax0,ay0,az0,bx0,by0,bz0,bx1,by1,bz1);
        pushTri(ax0,ay0,az0,bx1,by1,bz1,ax1,ay1,az1);
        pushTri(ax1,ay1,az1,bx1,by1,bz1,bx2,by2,bz2);
        pushTri(ax1,ay1,az1,bx2,by2,bz2,ax2,ay2,az2);
      }else{
        pushTri(ax0,ay0,az0,bx1,by1,bz1,bx0,by0,bz0);
        pushTri(ax0,ay0,az0,ax1,ay1,az1,bx1,by1,bz1);
        pushTri(ax1,ay1,az1,bx2,by2,bz2,bx1,by1,bz1);
        pushTri(ax1,ay1,az1,ax2,ay2,az2,bx2,by2,bz2);
      }
    }
    return out;
  }

  function cmPrep(V0,F0,o,say){
    if(say)say('Yüzey topolojisi temizleniyor');
    let {V,F}=cmWeld(V0,F0,1e-5);
    let loops0=cmLoops(V,F);
    if(!loops0.length)throw new Error('Yüzeyin açık kenarı yok; açık bir surface STL seçin.');
    let bvh=null;
    if(o.Vb&&o.Fb&&o.Fb.length){
      if(say)say('Kemik STL uzaysal ağacı hazırlanıyor');
      let x0=1e9,y0=1e9,z0=1e9,x1=-1e9,y1=-1e9,z1=-1e9;
      for(let i=0;i<V.length;i+=3){
        if(V[i]<x0)x0=V[i];if(V[i+1]<y0)y0=V[i+1];if(V[i+2]<z0)z0=V[i+2];
        if(V[i]>x1)x1=V[i];if(V[i+1]>y1)y1=V[i+1];if(V[i+2]>z1)z1=V[i+2];
      }
      const pad=Math.max(5.0,(o.wOuter+o.wHole)*4);
      bvh=cmBuildBVH(o.Vb,o.Fb,[x0-pad,y0-pad,z0-pad,x1+pad,y1+pad,z1+pad]);
    }
    const fine=Math.max(0.03,Math.min(0.2,o.fine||o.detail||0.045));
    if(o.surfaceOnly&&(o.fitMode||'edge')==='edge'){
      // In surface-only edge-fit mode, only refine near the thin outer edge so interior triangles stay 100% original
      const reach=0.08+Math.min(0.36,Math.max(0.20,(o.wOuter||0.6)*0.50))+0.35;
      const ix=cmSegIndex(V,loops0[0].edges);
      ({V,F}=cmRefine(V,F,ix,reach,fine,say));
    }else{
      ({V,F}=cmRefine(V,F,null,Infinity,fine,say));
    }
    const loops=cmLoops(V,F);
    const fit=cmFitToBone(V,F,loops,bvh,o,say);
    const w=cmWeld(fit.V,F,1e-5);
    return {V:w.V,F:w.F,loops:cmLoops(w.V,w.F),bvh,surfSign:fit.surfSign};
  }

  const cmDef=o=>Object.assign({
    wOuter:0.6,wHole:0.4,cell:0.9,strut:0.18,offset:0.15,fine:0.045,fitMode:'edge',wBlend:0.35,surfSign:1,seed:7
  },o);

  function cmFitSurface(V,F,o,progress){
    o=cmDef({...o,surfaceOnly:true});const say=progress||(()=>{});
    const p=cmPrep(V,F,o,say);
    const out=new Float32Array(p.F.length*3);
    for(let i=0;i<p.F.length;i++){
      const v=p.F[i]*3;
      out[i*3]=p.V[v];out[i*3+1]=p.V[v+1];out[i*3+2]=p.V[v+2];
    }
    return {surface:out,triangles:p.F.length/3};
  }

  function cmBuildSolidFromPhi(V,F,phi,halfOff,surfSign,bLoopIx){
    const clipped=cmClipSDF(V,F,phi);
    const cleaned=cmCleanSheet(clipped.V,clipped.F);
    if(!cleaned.F.length)return new Float32Array(0);
    const newOrigBound=new Uint8Array(cleaned.V.length/3);
    for(let i=0,n=cleaned.V.length/3;i<n;i++){
      if(cmSegDist(bLoopIx,cleaned.V[i*3],cleaned.V[i*3+1],cleaned.V[i*3+2],0.02)<1e-3)newOrigBound[i]=1;
    }
    cmSmoothSheet(cleaned.V,cleaned.F,newOrigBound);
    const w=cmWeld(cleaned.V,cleaned.F,1e-5);
    const lockW=new Uint8Array(w.V.length/3);
    for(let i=0,n=w.V.length/3;i<n;i++){
      if(cmSegDist(bLoopIx,w.V[i*3],w.V[i*3+1],w.V[i*3+2],0.02)<1e-3)lockW[i]=1;
    }
    return cmSolidifySymmetric(w.V,w.F,halfOff,surfSign,lockW);
  }

  function cmMesh(V,F,o,progress){
    o=cmDef({...o,surfaceOnly:false});const say=progress||(()=>{});
    const p=cmPrep(V,F,o,say);
    V=p.V;F=p.F;const loops=p.loops,nv=V.length/3;

    say('Kenar bantları ve iç bölge hesaplanıyor');
    const wOuter=Math.max(0,o.wOuter),wHole=Math.max(0,o.wHole);
    const maxR=Math.max(wOuter,wHole,o.cell*2,1.0);
    const lo=wOuter>0?cmSegIndex(V,loops[0].edges):null;
    const lh=(wHole>0&&loops.length>1)?cmSegIndex(V,loops.slice(1).flatMap(l=>l.edges)):null;
    const bLoopIx=cmSegIndex(V,loops.flatMap(l=>l.edges));

    const phiRim=new Float64Array(nv);
    const cand=[],rimGuide=[];
    for(let i=0;i<nv;i++){
      const x=V[i*3],y=V[i*3+1],z=V[i*3+2];
      const d1=lo?cmSegDist(lo,x,y,z,maxR):Infinity;
      const d2=lh?cmSegDist(lh,x,y,z,maxR):Infinity;
      const pr=Math.min(wOuter>0?d1-wOuter:Infinity,lh?d2-wHole:Infinity);
      phiRim[i]=pr;
      if(pr>0){
        if(pr<=o.cell*0.44&&pr>=o.cell*0.18)rimGuide.push(i);
        else if(pr>o.cell*0.44)cand.push(i);
      }
    }

    let st=o.seed>>>0;
    const rnd=()=>{st=(st+0x6D2B79F5)>>>0;let t=st;t=Math.imul(t^t>>>15,t|1);t^=t+Math.imul(t^t>>>7,t|61);return((t^t>>>14)>>>0)/4294967296;};
    for(let i=rimGuide.length-1;i>0;i--){const j=Math.floor(rnd()*(i+1));[rimGuide[i],rimGuide[j]]=[rimGuide[j],rimGuide[i]];}
    for(let i=cand.length-1;i>0;i--){const j=Math.floor(rnd()*(i+1));[cand[i],cand[j]]=[cand[j],cand[i]];}

    say('Voronoi hücreleri yüzey üzerinde dengeleniyor');
    const R=Math.max(0.3,o.cell),grid=new Map(),seeds=[];
    const ck=(x,y,z)=>CMK(Math.floor(x/R),Math.floor(y/R),Math.floor(z/R));
    const tryAddSeed=(i,minDist)=>{
      const x=V[i*3],y=V[i*3+1],z=V[i*3+2],cx=Math.floor(x/R),cy=Math.floor(y/R),cz=Math.floor(z/R);
      for(let a=-1;a<=1;a++)for(let b=-1;b<=1;b++)for(let c=-1;c<=1;c++){
        const l=grid.get(CMK(cx+a,cy+b,cz+c));
        if(l)for(const s of l)if(Math.hypot(x-seeds[s*3],y-seeds[s*3+1],z-seeds[s*3+2])<minDist)return false;
      }
      const k=ck(x,y,z);let l=grid.get(k);if(!l)grid.set(k,l=[]);
      l.push(seeds.length/3);seeds.push(x,y,z);return true;
    };
    for(const i of rimGuide)tryAddSeed(i,R*0.84);
    for(const i of cand)tryAddSeed(i,R*0.86);
    if(seeds.length/3<4)throw new Error('İç bölge lattice için çok küçük; kenar genişliğini veya hücre aralığını küçültün.');

    const nSeeds=seeds.length/3;
    const allInterior=[...rimGuide,...cand];
    for(let iter=0;iter<6;iter++){
      grid.clear();
      for(let s=0;s<nSeeds;s++){
        const k=ck(seeds[s*3],seeds[s*3+1],seeds[s*3+2]);
        let l=grid.get(k);if(!l)grid.set(k,l=[]);l.push(s);
      }
      const sx=new Float64Array(nSeeds),sy=new Float64Array(nSeeds),sz=new Float64Array(nSeeds),sc=new Uint32Array(nSeeds);
      for(const i of allInterior){
        const x=V[i*3],y=V[i*3+1],z=V[i*3+2],cx=Math.floor(x/R),cy=Math.floor(y/R),cz=Math.floor(z/R);
        let bestS=-1,bestD2=Infinity;
        for(let rad=1;rad<=3;rad++){
          for(let a=-rad;a<=rad;a++)for(let b=-rad;b<=rad;b++)for(let c=-rad;c<=rad;c++){
            const l=grid.get(CMK(cx+a,cy+b,cz+c));if(!l)continue;
            for(const s of l){
              const d2=(x-seeds[s*3])**2+(y-seeds[s*3+1])**2+(z-seeds[s*3+2])**2;
              if(d2<bestD2){bestD2=d2;bestS=s;}
            }
          }
          if(bestS>=0&&bestD2<=(rad*R)**2)break;
        }
        if(bestS>=0){sx[bestS]+=x;sy[bestS]+=y;sz[bestS]+=z;sc[bestS]++;}
      }
      for(let s=0;s<nSeeds;s++){
        if(sc[s]>0){
          seeds[s*3]=sx[s]/sc[s];seeds[s*3+1]=sy[s]/sc[s];seeds[s*3+2]=sz[s]/sc[s];
        }
      }
      const bestV=new Int32Array(nSeeds).fill(-1),bestVD2=new Float64Array(nSeeds).fill(Infinity);
      for(const i of allInterior){
        const x=V[i*3],y=V[i*3+1],z=V[i*3+2],cx=Math.floor(x/R),cy=Math.floor(y/R),cz=Math.floor(z/R);
        for(let a=-1;a<=1;a++)for(let b=-1;b<=1;b++)for(let c=-1;c<=1;c++){
          const l=grid.get(CMK(cx+a,cy+b,cz+c));if(!l)continue;
          for(const s of l){
            const d2=(x-seeds[s*3])**2+(y-seeds[s*3+1])**2+(z-seeds[s*3+2])**2;
            if(d2<bestVD2[s]){bestVD2[s]=d2;bestV[s]=i;}
          }
        }
      }
      for(let s=0;s<nSeeds;s++){
        const vi=bestV[s];
        if(vi>=0){seeds[s*3]=V[vi*3];seeds[s*3+1]=V[vi*3+1];seeds[s*3+2]=V[vi*3+2];}
      }
    }

    grid.clear();
    for(let s=0;s<nSeeds;s++){
      const k=ck(seeds[s*3],seeds[s*3+1],seeds[s*3+2]);
      let l=grid.get(k);if(!l)grid.set(k,l=[]);l.push(s);
    }

    say('Düzgün strut bantları hesaplanıyor');
    const strutW=Math.max(0.08,o.strut);
    const halfStrut=strutW*0.5;
    const cornerFillet=strutW*0.24;
    const rimFillet=strutW*0.28;
    const phiCombined=new Float64Array(nv);
    const phiVorOnly=new Float64Array(nv);

    for(let i=0;i<nv;i++){
      const pr=phiRim[i];
      const x=V[i*3],y=V[i*3+1],z=V[i*3+2],cx=Math.floor(x/R),cy=Math.floor(y/R),cz=Math.floor(z/R);
      let s1=-1,d1_2=Infinity;
      const near=[];
      for(let rad=1;rad<=3;rad++){
        near.length=0;s1=-1;d1_2=Infinity;
        for(let a=-rad;a<=rad;a++)for(let b=-rad;b<=rad;b++)for(let c=-rad;c<=rad;c++){
          const l=grid.get(CMK(cx+a,cy+b,cz+c));if(!l)continue;
          for(const s of l){
            const d2=(x-seeds[s*3])**2+(y-seeds[s*3+1])**2+(z-seeds[s*3+2])**2;
            near.push(s,d2);
            if(d2<d1_2){d1_2=d2;s1=s;}
          }
        }
        if(near.length>=8&&d1_2<=(rad*R)**2)break;
      }
      let pVor=Infinity;
      if(s1>=0){
        const s1x=seeds[s1*3],s1y=seeds[s1*3+1],s1z=seeds[s1*3+2];
        const bisects=[];
        for(let k=0;k<near.length;k+=2){
          const sk=near[k];if(sk===s1)continue;
          const dk_2=near[k+1];
          const distSeeds=Math.hypot(seeds[sk*3]-s1x,seeds[sk*3+1]-s1y,seeds[sk*3+2]-s1z);
          if(distSeeds<1e-6)continue;
          bisects.push((dk_2-d1_2)/(2*distSeeds));
        }
        bisects.sort((a,b)=>a-b);
        let dBisect=bisects.length?bisects[0]:Infinity;
        if(bisects.length>1)dBisect=smin(dBisect,bisects[1],cornerFillet);
        pVor=dBisect-halfStrut;
      }
      phiCombined[i]=smin(pr,pVor,rimFillet);
      phiVorOnly[i]=Math.max(pVor,-pr-0.08);
    }

    const adj=Array.from({length:nv},()=>[]);
    for(let t=0;t<F.length;t+=3){
      const a=F[t],b=F[t+1],c=F[t+2];
      adj[a].push(b,c);adj[b].push(a,c);adj[c].push(a,b);
    }
    for(const arr of [phiCombined,phiVorOnly]){
      const tmp=Float64Array.from(arr);
      for(let i=0;i<nv;i++){
        const nb=adj[i];if(!nb.length)continue;
        let s=arr[i]*2;for(const j of nb)s+=arr[j];
        tmp[i]=s/(nb.length+2);
      }
      arr.set(tmp);
    }

    const halfOff=Math.max(0.02,o.offset||0.15);
    say('Yapı oluşturuluyor');
    const combined=o.onlyVoronoi?new Float32Array(0):cmBuildSolidFromPhi(V,F,phiCombined,halfOff,p.surfSign,bLoopIx);

    say('Ayrı Kenar Wrap ve Voronoi Yapı örülüyor');
    const rimOnly=o.onlyVoronoi?new Float32Array(0):cmBuildSolidFromPhi(V,F,phiRim,halfOff,p.surfSign,bLoopIx);
    const voronoiOnly=cmBuildSolidFromPhi(V,F,phiVorOnly,halfOff,p.surfSign,bLoopIx);

    return {
      combined,
      rimOnly,
      voronoiOnly,
      cells:nSeeds,
      triangles:combined.length/9
    };
  }

  const CUK=(x,y,z)=>((x+2048)*4096+(y+2048))*4096+(z+2048);
function cuEdgeMap(F){const m=new Map();for(let t=0;t<F.length;t+=3)for(let k=0;k<3;k++){const a=F[t+k],b=F[t+(k+1)%3],key=a<b?a*67108864+b:b*67108864+a;m.set(key,(m.get(key)||0)+1);}return m;}

function cuWeld(V,F){
  // Önce kesin (1e-5) birleştirme; sınır kenarları şüpheli derecede çoksa (çatlaklı/gürültülü STL) toleransı kademeli artır.
  const bnd=G=>{let n=0;for(const c of cuEdgeMap(G.F).values())if(c===1)n++;return n;};
  let best=cmWeld(V,F,1e-5),b=bnd(best);
  for(const tol of [1e-4,5e-4,2e-3]){
    if(b<=best.F.length*1.5*.004)break;
    const w=cmWeld(V,F,tol),nb=bnd(w);
    if(nb<b*.6){best=w;b=nb;}else break;
  }
  return best;
}
function cuLoops(V,F){ // sınır kenarlarını döngülere ayır (çevre uzunluğu + bağlı parça numarasıyla)
  const nv=V.length/3,cp=new Int32Array(nv);for(let i=0;i<nv;i++)cp[i]=i;
  const cf=a=>{while(cp[a]!==a){cp[a]=cp[cp[a]];a=cp[a];}return a;},un=(a,b)=>{a=cf(a);b=cf(b);if(a!==b)cp[a]=b;};
  for(let t=0;t<F.length;t+=3){un(F[t],F[t+1]);un(F[t+1],F[t+2]);}
  const be=[];for(const [k,c] of cuEdgeMap(F))if(c===1)be.push(Math.floor(k/67108864),k%67108864);
  const par=new Map(),find=a=>{while(par.get(a)!==a){par.set(a,par.get(par.get(a)));a=par.get(a);}return a;};
  for(let i=0;i<be.length;i++)if(!par.has(be[i]))par.set(be[i],be[i]);
  for(let i=0;i<be.length;i+=2){const a=find(be[i]),b=find(be[i+1]);if(a!==b)par.set(a,b);}
  const g=new Map();
  for(let i=0;i<be.length;i+=2){const r=find(be[i]);let o=g.get(r);if(!o)g.set(r,o={edges:[],len:0,comp:cf(be[i])});o.edges.push(be[i],be[i+1]);
    o.len+=Math.hypot(V[be[i]*3]-V[be[i+1]*3],V[be[i]*3+1]-V[be[i+1]*3+1],V[be[i]*3+2]-V[be[i+1]*3+2]);}
  return [...g.values()];
}
function cuClassify(loops){ // her bağlı parçada en uzun döngü = dış kenar, diğerleri = delik (silindir); gürültü döngüleri atılır
  const byc=new Map(),outer=[],holes=[];
  for(const l of loops){let a=byc.get(l.comp);if(!a)byc.set(l.comp,a=[]);a.push(l);}
  for(const a of byc.values()){a.sort((x,y)=>y.len-x.len);if(a[0].len<1)continue;outer.push(a[0]);for(const h of a.slice(1))if(h.len>=.8)holes.push(h);}
  return {outer,holes};
}

function cuSegIndex(V,edges,cell){return cmSegIndex(V,edges);}
function cuSegDist(ix,x,y,z,maxd){return cmSegDist(ix,x,y,z,maxd);}
function cuRefine(V0,F0,ix,reach,maxEdge,progress){ // yalnızca sınıra yakın uzun kenarları böl (T-birleşimi oluşmaz)
  let V=Array.from(V0),F=Array.from(F0);
  for(let pass=0;pass<22;pass++){
    if(F.length>=(ix===null?1200000:3600000))break;
    const mid=new Map(),nv=()=>V.length/3,dcache=new Map();
    const vd=i=>{let d=dcache.get(i);if(d===undefined){d=cuSegDist(ix,V[i*3],V[i*3+1],V[i*3+2],Infinity);dcache.set(i,d);}return d;};
    const split=(a,b)=>{if(a>b){const t=a;a=b;b=t;}const key=a*67108864+b;let m=mid.get(key);if(m!==undefined)return m;
      const L=Math.hypot(V[a*3]-V[b*3],V[a*3+1]-V[b*3+1],V[a*3+2]-V[b*3+2]);
      m=-1;if(L>maxEdge&&(ix===null||Math.min(vd(a),vd(b))<=reach+L/2)){m=nv();V.push((V[a*3]+V[b*3])/2,(V[a*3+1]+V[b*3+1])/2,(V[a*3+2]+V[b*3+2])/2);}
      mid.set(key,m);return m;};
    const G=[];let changed=0;
    for(let t=0;t<F.length;t+=3){let a=F[t],b=F[t+1],c=F[t+2];const m0=split(a,b),m1=split(b,c),m2=split(c,a),n=(m0>=0)+(m1>=0)+(m2>=0);
      if(n===0){G.push(a,b,c);continue;}changed++;
      if(n===3){G.push(a,m0,m2,m0,b,m1,m2,m1,c,m0,m1,m2);continue;}
      if(n===1){if(m1>=0){[a,b,c]=[b,c,a];G.push(a,m1,c,m1,b,c);}else if(m2>=0){[a,b,c]=[c,a,b];G.push(a,m2,c,m2,b,c);}else G.push(a,m0,c,m0,b,c);continue;}
      let p,q,r,mp,mq; // iki işaretli kenar: p-q ve q-r (q ortak köşe)
      if(m0<0){p=b;q=c;r=a;mp=m1;mq=m2;}else if(m1<0){p=c;q=a;r=b;mp=m2;mq=m0;}else{p=a;q=b;r=c;mp=m0;mq=m1;}
      G.push(mp,q,mq);const d1=Math.hypot(V[p*3]-V[mq*3],V[p*3+1]-V[mq*3+1],V[p*3+2]-V[mq*3+2]),d2=Math.hypot(V[r*3]-V[mp*3],V[r*3+1]-V[mp*3+1],V[r*3+2]-V[mp*3+2]);
      if(d1<=d2)G.push(p,mp,mq,p,mq,r);else G.push(p,mp,r,mp,mq,r);}
    if(G.length>4500000)break;F=G;if(progress)progress('Yüzey inceltiliyor ('+(pass+1)+')');if(!changed)break;
  }
  return {V:Float64Array.from(V),F:Uint32Array.from(F)};
}
function cuOffset(V,F,d){ // köşe normali boyunca ofset
  const n=new Float64Array(V.length);
  for(let t=0;t<F.length;t+=3){const a=F[t]*3,b=F[t+1]*3,c=F[t+2]*3,ux=V[b]-V[a],uy=V[b+1]-V[a+1],uz=V[b+2]-V[a+2],vx=V[c]-V[a],vy=V[c+1]-V[a+1],vz=V[c+2]-V[a+2];
    const nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;for(const o of[a,b,c]){n[o]+=nx;n[o+1]+=ny;n[o+2]+=nz;}}
  const out=Float64Array.from(V);
  for(let i=0;i<V.length;i+=3){const l=Math.hypot(n[i],n[i+1],n[i+2])||1;out[i]+=n[i]*d/l;out[i+1]+=n[i+1]*d/l;out[i+2]+=n[i+2]*d/l;}
  return out;
}

function cuBand(V,F,loops,w){
  // Clip a continuous distance contour, instead of dropping partly covered faces.
  const ix=cuSegIndex(V,loops.flatMap(l=>l.edges)),D=new Float64Array(V.length/3).fill(NaN);
  const cuts=new Map(),out=[];
  const value=i=>Number.isNaN(D[i])?(D[i]=cuSegDist(ix,V[i*3],V[i*3+1],V[i*3+2],Infinity)-w):D[i];
  const vertex=i=>[V[i*3],V[i*3+1],V[i*3+2]];
  const cut=(a,b,da,db)=>{
    if(a>b){[a,b]=[b,a];[da,db]=[db,da];}
    const key=a*67108864+b;let p=cuts.get(key);
    if(!p){const t=da/(da-db),a3=a*3,b3=b*3;
      p=[V[a3]+t*(V[b3]-V[a3]),V[a3+1]+t*(V[b3+1]-V[a3+1]),V[a3+2]+t*(V[b3+2]-V[a3+2])];cuts.set(key,p);}
    return p;
  };
  for(let t=0;t<F.length;t+=3){
    const ids=[F[t],F[t+1],F[t+2]],poly=[];
    for(let k=0;k<3;k++){
      const a=ids[k],b=ids[(k+1)%3],da=value(a),db=value(b),ina=da<=1e-10,inb=db<=1e-10;
      if(ina)poly.push(vertex(a));if(ina!==inb)poly.push(cut(a,b,da,db));
    }
    for(let k=1;k+1<poly.length;k++){
      const a=poly[0],b=poly[k],c=poly[k+1],ux=b[0]-a[0],uy=b[1]-a[1],uz=b[2]-a[2],vx=c[0]-a[0],vy=c[1]-a[1],vz=c[2]-a[2];
      if((uy*vz-uz*vy)**2+(uz*vx-ux*vz)**2+(ux*vy-uy*vx)**2>1e-20)out.push(...a,...b,...c);
    }
  }
  return Float32Array.from(out);
}

function cuTriDist2(px,py,pz,ax,ay,az,bx,by,bz,cx,cy,cz){
  // Allocation-free closest-point distance; this is the inner rasterization loop.
  const abx=bx-ax,aby=by-ay,abz=bz-az,acx=cx-ax,acy=cy-ay,acz=cz-az;
  const apx=px-ax,apy=py-ay,apz=pz-az,d1=abx*apx+aby*apy+abz*apz,d2=acx*apx+acy*apy+acz*apz;
  let u=0,v=0;
  if(!(d1<=0&&d2<=0)){
    const bpx=px-bx,bpy=py-by,bpz=pz-bz,d3=abx*bpx+aby*bpy+abz*bpz,d4=acx*bpx+acy*bpy+acz*bpz;
    if(d3>=0&&d4<=d3)u=1;
    else{
      const vc=d1*d4-d3*d2;
      if(vc<=0&&d1>=0&&d3<=0)u=d1/(d1-d3);
      else{
        const cpx=px-cx,cpy=py-cy,cpz=pz-cz,d5=abx*cpx+aby*cpy+abz*cpz,d6=acx*cpx+acy*cpy+acz*cpz;
        if(d6>=0&&d5<=d6)v=1;
        else{
          const vb=d5*d2-d1*d6;
          if(vb<=0&&d2>=0&&d6<=0)v=d2/(d2-d6);
          else{
            const va=d3*d6-d5*d4;
            if(va<=0&&d4-d3>=0&&d5-d6>=0){v=(d4-d3)/(d4-d3+d5-d6);u=1-v;}
            else{const den=va+vb+vc;if(Math.abs(den)<1e-30)return Math.min(apx*apx+apy*apy+apz*apz,bpx*bpx+bpy*bpy+bpz*bpz,cpx*cpx+cpy*cpy+cpz*cpz);u=vb/den;v=vc/den;}
          }
        }
      }
    }
  }
  const dx=ax+abx*u+acx*v-px,dy=ay+aby*u+acy*v-py,dz=az+abz*u+acz*v-pz;
  return dx*dx+dy*dy+dz*dz;
}

function cuWrap(P,h,off,say){
  if(!P.length)throw new Error('Wrap için yüzey bulunamadı.');
  // Sparse narrow-band blocks preserve the requested resolution on large curved
  // surfaces, without allocating or scanning the empty bounding-box interior.
  const mn=[Infinity,Infinity,Infinity],mx=[-Infinity,-Infinity,-Infinity];
  let totalArea=0;
  for(let t=0;t<P.length;t+=9){
    for(let j=0;j<9;j+=3)for(let k=0;k<3;k++){const v=P[t+j+k];if(v<mn[k])mn[k]=v;if(v>mx[k])mx[k]=v;}
    const ux=P[t+3]-P[t],uy=P[t+4]-P[t+1],uz=P[t+5]-P[t+2],vx=P[t+6]-P[t],vy=P[t+7]-P[t+1],vz=P[t+8]-P[t+2];
    totalArea+=.5*Math.hypot(uy*vz-uz*vy,uz*vx-ux*vz,ux*vy-uy*vx);
  }
  const minH=Math.sqrt(Math.max(1,totalArea)/140000);
  let H=Math.max(minH,Math.min(h,off*.85));
  const BS=12,SS=BS+1,N=SS*SS*SS,co=[0,1,SS,SS+1,SS*SS,SS*SS+1,SS*SS+SS,SS*SS+SS+1];
  for(;;){
    const offEff=Math.max(off,H*1.18),R=offEff+2*H,R2=R*R,level=offEff*offEff;
    const org=mn.map((v,k)=>v-offEff-(4+[.173205,.317837,.419643][k])*H),dims=mx.map((v,k)=>Math.ceil((v+offEff+4*H-org[k])/H)+1);
    const [nx,ny,nz]=dims,cx=nx-1,cy=ny-1,nbx=Math.ceil(cx/BS),nby=Math.ceil(cy/BS),blocks=new Map();
    const key=(x,y,z)=>x+nbx*(y+nby*z);
    let last=-1,overflow=false;
    for(let t=0;t<P.length;t+=9){
      const lo=[0,1,2].map(k=>Math.max(0,Math.ceil((Math.min(P[t+k],P[t+3+k],P[t+6+k])-R-org[k])/H)));
      const hi=dims.map((n,k)=>Math.min(n-1,Math.floor((Math.max(P[t+k],P[t+3+k],P[t+6+k])+R-org[k])/H)));
      for(let bz=Math.max(0,Math.floor((lo[2]-1)/BS));bz<=Math.floor(hi[2]/BS);bz++)
      for(let by=Math.max(0,Math.floor((lo[1]-1)/BS));by<=Math.floor(hi[1]/BS);by++)
      for(let bx=Math.max(0,Math.floor((lo[0]-1)/BS));bx<=Math.floor(hi[0]/BS);bx++){
        const x0=bx*BS,y0=by*BS,z0=bz*BS,bk=key(bx,by,bz);let b=blocks.get(bk);
        if(!b){if(blocks.size>=20000){overflow=true;break;}b={x:x0,y:y0,z:z0,f:new Float32Array(N).fill(R2)};blocks.set(bk,b);}
        const lx=Math.max(lo[0],x0),hx=Math.min(hi[0],x0+BS),ly=Math.max(lo[1],y0),hy=Math.min(hi[1],y0+BS),lz=Math.max(lo[2],z0),hz=Math.min(hi[2],z0+BS),f=b.f;
        for(let z=lz;z<=hz;z++)for(let y=ly;y<=hy;y++)for(let x=lx;x<=hx;x++){
          const i=x-x0+SS*(y-y0+SS*(z-z0));
          const d=cuTriDist2(org[0]+x*H,org[1]+y*H,org[2]+z*H,P[t],P[t+1],P[t+2],P[t+3],P[t+4],P[t+5],P[t+6],P[t+7],P[t+8]);
          if(d<f[i])f[i]=d;
        }
      }
      if(overflow)break;
      const pct=Math.floor(t/P.length*20);if(pct!==last){last=pct;if(say)say('Wrap hazırlanıyor · %'+(pct*5));}
    }
    if(overflow){H*=1.15;continue;}
    if(say)say('Wrap yüzeyi oluşturuluyor');
    const builder=cuIsoBuilder(nx,ny,org,H,offEff,nz),values=new Float64Array(8);
    for(const b of blocks.values()){
      const f=b.f;
      for(let z=0;z<Math.min(BS,nz-1-b.z);z++)for(let y=0;y<Math.min(BS,ny-1-b.y);y++)for(let x=0;x<Math.min(BS,nx-1-b.x);x++){
        const bi=x+SS*(y+SS*z);let mask=0;
        for(let k=0;k<8;k++){const d=f[bi+co[k]];values[k]=Math.sqrt(d);if(d<level)mask|=1<<k;}
        if(mask!==0&&mask!==255)builder.cell(b.x+x,b.y+y,b.z+z,values);
      }
    }
    return builder.finish();
  }
}

function cuSmooth(pos,tri,it){ // Taubin yumuşatma (hacim korunur)
  const nv=pos.length/3,adj=new Array(nv);for(let i=0;i<nv;i++)adj[i]=[];
  for(let t=0;t<tri.length;t+=3){const a=tri[t],b=tri[t+1],c=tri[t+2];adj[a].push(b,c);adj[b].push(a,c);adj[c].push(a,b);}
  let P=Float64Array.from(pos),Q=new Float64Array(P.length);
  for(let k=0;k<it*2;k++){const l=k%2?-.53:.5;
    for(let i=0;i<nv;i++){const n=adj[i],i3=i*3;if(!n.length){Q[i3]=P[i3];Q[i3+1]=P[i3+1];Q[i3+2]=P[i3+2];continue;}
      let x=0,y=0,z=0;for(const j of n){x+=P[j*3];y+=P[j*3+1];z+=P[j*3+2];}const c=n.length;
      Q[i3]=P[i3]+l*(x/c-P[i3]);Q[i3+1]=P[i3+1]+l*(y/c-P[i3+1]);Q[i3+2]=P[i3+2]+l*(z/c-P[i3+2]);}
    [P,Q]=[Q,P];}
  return P;
}
function cuNets(f,nx,ny,nz,L,o,H,sm){
  // Geometric smoothing is handled by the signed-distance surface itself;
  // independent vertex smoothing can fold thin junctions onto one another.
  return cuMarch(f,nx,ny,nz,L,o,H);
}
const cuDef=o=>Object.assign({wOuter:.6,wHole:.4,detail:.1,offset:.15,surfOffset:.15,surfMode:'auto',fine:.06,cell:.9,strut:.3,lloyd:2,smooth:2,seed:7},o);

function cuPrep(V,F,o,say,glob){
  say('Yüzey hazırlanıyor');({V,F}=cuWeld(V,F));
  if(!F.length)throw new Error('Kaynak yüzey boş veya geçersiz.');
  for(const c of cuEdgeMap(F).values())if(c>2)throw new Error('Kaynak yüzeyde üst üste binen bağlantılar var. Önce STL yüzeyini onarın.');
  const loops0=cuLoops(V,F),classified=cuClassify(loops0);
  if(!classified.outer.length)throw new Error('Açık bir yüzey STL seçin.');
  const selected=glob?loops0:(o.kind==='holes'?classified.holes:classified.outer);
  if(!selected.length)return {V,F,...classified};
  // Automatic mode preserves the source position. Triangle density is never
  // used to guess a geometric offset; cut and uncut STLs stay aligned.
  const sign=o.surfMode==='+'?1:o.surfMode==='-'?-1:0;
  const width=o.kind==='holes'?o.wHole:o.wOuter;
  const target=glob?Math.min(o.cell*.28,Math.max(o.strut*.7,.08)):Math.max(.012,Math.min(width/4,o.detail*.85));
  const reach=Math.max(o.wOuter,o.wHole)+target*2;
  const ix=glob?null:cuSegIndex(V,selected.flatMap(l=>l.edges));
  ({V,F}=cuRefine(V,F,ix,reach,target,say));
  if(sign)V=cuOffset(V,F,o.offset*sign);
  return {V,F,...cuClassify(cuLoops(V,F))};
}
/* Kenar wrap (kind:'outer') ve silindir wrap (kind:'holes'): sabit genişlikli izokurve bandı + wrap */
function cuEdge(V,F,o,say){
  o=cuDef(o);say=say||(()=>{});const p=cuPrep(V,F,o,say,false);V=p.V;F=p.F;const holes=o.kind==='holes',loops=holes?p.holes:p.outer,w=holes?o.wHole:o.wOuter;
  if(!loops.length)throw new Error(holes?'Yüzeyde delik (silindir) kenarı bulunamadı; bu yüzeyde yalnızca dış kenar var.':'Yüzeyde dış kenar bulunamadı.');
  say(w+' mm izokurve bandı seçiliyor');const band=cuBand(V,F,loops,w);if(!band.length)throw new Error('Seçilen genişlikte bant üretilemedi.');
  say('Wrap uygulanıyor');return {w,band,wrapped:cuWrap(band,o.detail,o.offset,say),loops:loops.length};
}

/* Voronoi lattice: yüzey üzerinde Lloyd ile düzenlenmiş hücreler, hücre kenarları boyunca sabit çaplı tüpler */
function cuTube(S,h,r,sm,say){
  if(!S.length)throw new Error('Tüp için kenar bulunamadı.');
  // Sparse narrow-band blocks preserve tube resolution on large curved 3D surfaces
  // without allocating the empty bounding-box volume.
  const mn=[Infinity,Infinity,Infinity],mx=[-Infinity,-Infinity,-Infinity];
  let totalLen=0;
  for(let i=0;i<S.length;i+=6){
    for(let k=0;k<3;k++){mn[k]=Math.min(mn[k],S[i+k],S[i+3+k]);mx[k]=Math.max(mx[k],S[i+k],S[i+3+k]);}
    totalLen+=Math.hypot(S[i+3]-S[i],S[i+4]-S[i+1],S[i+5]-S[i+2]);
  }
  const minH=Math.sqrt(Math.max(1,totalLen)*Math.max(r,.05)/28000);
  let H=Math.max(minH,Math.min(h,r*.82));
  const BS=12,SS=BS+1,N=SS*SS*SS,co=[0,1,SS,SS+1,SS*SS,SS*SS+1,SS*SS+SS,SS*SS+SS+1];
  for(;;){
    const rEff=Math.max(r,H*1.2),R=rEff+2*H,R2=R*R,level=rEff*rEff;
    const org=mn.map((v,k)=>v-rEff-(4+[.173205,.317837,.419643][k])*H),dims=mx.map((v,k)=>Math.ceil((v+rEff+4*H-org[k])/H)+1);
    const [nx,ny,nz]=dims,cx=nx-1,cy=ny-1,nbx=Math.ceil(cx/BS),nby=Math.ceil(cy/BS),blocks=new Map();
    const key=(x,y,z)=>x+nbx*(y+nby*z);
    let last=-1,overflow=false;
    for(let t=0;t<S.length;t+=6){
      const ax=S[t],ay=S[t+1],az=S[t+2],bx=S[t+3],by=S[t+4],bz=S[t+5],dx=bx-ax,dy=by-ay,dz=bz-az,L2=dx*dx+dy*dy+dz*dz;
      const lo=[0,1,2].map(k=>Math.max(0,Math.ceil((Math.min(S[t+k],S[t+3+k])-R-org[k])/H)));
      const hi=dims.map((n,k)=>Math.min(n-1,Math.floor((Math.max(S[t+k],S[t+3+k])+R-org[k])/H)));
      for(let bz=Math.max(0,Math.floor((lo[2]-1)/BS));bz<=Math.floor(hi[2]/BS);bz++)
      for(let by=Math.max(0,Math.floor((lo[1]-1)/BS));by<=Math.floor(hi[1]/BS);by++)
      for(let bx=Math.max(0,Math.floor((lo[0]-1)/BS));bx<=Math.floor(hi[0]/BS);bx++){
        const x0=bx*BS,y0=by*BS,z0=bz*BS,bk=key(bx,by,bz);let b=blocks.get(bk);
        if(!b){if(blocks.size>=20000){overflow=true;break;}b={x:x0,y:y0,z:z0,f:new Float32Array(N).fill(R2)};blocks.set(bk,b);}
        const lx=Math.max(lo[0],x0),hx=Math.min(hi[0],x0+BS),ly=Math.max(lo[1],y0),hy=Math.min(hi[1],y0+BS),lz=Math.max(lo[2],z0),hz=Math.min(hi[2],z0+BS),f=b.f;
        for(let z=lz;z<=hz;z++)for(let y=ly;y<=hy;y++)for(let x=lx;x<=hx;x++){
          const px=org[0]+x*H-ax,py=org[1]+y*H-ay,pz=org[2]+z*H-az;let u=L2>0?(px*dx+py*dy+pz*dz)/L2:0;u=u<0?0:u>1?1:u;
          const qx=px-u*dx,qy=py-u*dy,qz=pz-u*dz,d=qx*qx+qy*qy+qz*qz,i=x-x0+SS*(y-y0+SS*(z-z0));
          if(d<f[i])f[i]=d;
        }
      }
      if(overflow)break;
      const pct=Math.floor(t/S.length*20);if(pct!==last){last=pct;if(say)say('Tüp modeli hazırlanıyor · %'+(pct*5));}
    }
    if(overflow){H*=1.15;continue;}
    if(say)say('Tüp yüzeyi oluşturuluyor');
    const builder=cuIsoBuilder(nx,ny,org,H,rEff,nz),values=new Float64Array(8);
    for(const b of blocks.values()){
      const f=b.f;
      for(let z=0;z<Math.min(BS,nz-1-b.z);z++)for(let y=0;y<Math.min(BS,ny-1-b.y);y++)for(let x=0;x<Math.min(BS,nx-1-b.x);x++){
        const bi=x+SS*(y+SS*z);let mask=0;
        for(let k=0;k<8;k++){const d=f[bi+co[k]];values[k]=Math.sqrt(d);if(d<level)mask|=1<<k;}
        if(mask!==0&&mask!==255)builder.cell(b.x+x,b.y+y,b.z+z,values);
      }
    }
    return builder.finish();
  }
}
function cuLattice(V,F,o,say){
  o=cuDef(o);say=say||(()=>{});
  const p=cuPrep(V,F,o,say,true);V=p.V;F=p.F;const nv=V.length/3;
  say('İç bölge belirleniyor');
  const lo=p.outer.length?cuSegIndex(V,p.outer.flatMap(l=>l.edges),Math.max(o.wOuter,.5)):null,lh=p.holes.length?cuSegIndex(V,p.holes.flatMap(l=>l.edges),Math.max(o.wHole,.5)):null;
  const reg=new Uint8Array(nv),cand=[];
  for(let i=0;i<nv;i++){const x=V[i*3],y=V[i*3+1],z=V[i*3+2],d1=lo?cuSegDist(lo,x,y,z,o.wOuter):Infinity,d2=lh?cuSegDist(lh,x,y,z,o.wHole):Infinity;
    if(d1>o.wOuter-.03&&d2>o.wHole-.03){reg[i]=1;if(d1>o.wOuter&&d2>o.wHole)cand.push(i);}}
  let st=o.seed>>>0;const rnd=()=>{st=(st+0x6D2B79F5)>>>0;let t=st;t=Math.imul(t^t>>>15,t|1);t^=t+Math.imul(t^t>>>7,t|61);return((t^t>>>14)>>>0)/4294967296;};
  for(let i=cand.length-1;i>0;i--){const j=Math.floor(rnd()*(i+1));[cand[i],cand[j]]=[cand[j],cand[i]];}
  const R=o.cell;let seeds=[];
  {const grid=new Map();say('Voronoi tohumları dağıtılıyor');
   for(const i of cand){const x=V[i*3],y=V[i*3+1],z=V[i*3+2],cx=Math.floor(x/R),cy=Math.floor(y/R),cz=Math.floor(z/R);let ok=true;
     outer:for(let a=-1;a<=1;a++)for(let b=-1;b<=1;b++)for(let c=-1;c<=1;c++){const l=grid.get(CUK(cx+a,cy+b,cz+c));if(l)for(const s of l)if(Math.hypot(x-seeds[s*3],y-seeds[s*3+1],z-seeds[s*3+2])<R){ok=false;break outer;}}
     if(ok){const k=CUK(cx,cy,cz);let l=grid.get(k);if(!l)grid.set(k,l=[]);l.push(seeds.length/3);seeds.push(x,y,z);}}}
  if(seeds.length<27)throw new Error('İç bölge lattice için çok küçük (kenar bantlarının içinde yeterli yüzey yok).');
  const labelAll=()=>{const grid=new Map();for(let s=0;s<seeds.length;s+=3){const k=CUK(Math.floor(seeds[s]/R),Math.floor(seeds[s+1]/R),Math.floor(seeds[s+2]/R));let l=grid.get(k);if(!l)grid.set(k,l=[]);l.push(s/3);}
    const lab=new Int32Array(nv).fill(-1);
    for(let i=0;i<nv;i++){if(!reg[i])continue;const x=V[i*3],y=V[i*3+1],z=V[i*3+2],cx=Math.floor(x/R),cy=Math.floor(y/R),cz=Math.floor(z/R);let bd=Infinity,bs=-1;
      for(let rad=1;rad<=6;rad++){bd=Infinity;bs=-1;
        for(let a=-rad;a<=rad;a++)for(let b=-rad;b<=rad;b++)for(let c=-rad;c<=rad;c++){const l=grid.get(CUK(cx+a,cy+b,cz+c));if(l)for(const s of l){const d=Math.hypot(x-seeds[s*3],y-seeds[s*3+1],z-seeds[s*3+2]);if(d<bd){bd=d;bs=s;}}}
        if(bs>=0&&bd<=rad*R)break;}
      lab[i]=bs;}
    return lab;};
  let lab;
  for(let it=0;it<=o.lloyd;it++){
    say(it<o.lloyd?'Hücreler düzenleniyor ('+(it+1)+'/'+o.lloyd+')':'Hücre kenarları çıkarılıyor');lab=labelAll();if(it===o.lloyd)break;
    const ns=seeds.length/3,sum=new Float64Array(ns*3),cnt=new Int32Array(ns);
    for(let i=0;i<nv;i++){const s=lab[i];if(s<0)continue;sum[s*3]+=V[i*3];sum[s*3+1]+=V[i*3+1];sum[s*3+2]+=V[i*3+2];cnt[s]++;}
    const bd=new Float64Array(ns).fill(Infinity),bv=new Int32Array(ns).fill(-1);
    for(let i=0;i<nv;i++){const s=lab[i];if(s<0||!cnt[s])continue;const d=Math.hypot(V[i*3]-sum[s*3]/cnt[s],V[i*3+1]-sum[s*3+1]/cnt[s],V[i*3+2]-sum[s*3+2]/cnt[s]);if(d<bd[s]){bd[s]=d;bv[s]=i;}}
    for(let s=0;s<ns;s++)if(bv[s]>=0){seeds[s*3]=V[bv[s]*3];seeds[s*3+1]=V[bv[s]*3+1];seeds[s*3+2]=V[bv[s]*3+2];}
  }
  const segs=[],cross=(a,b)=>{const sa=lab[a]*3,sb=lab[b]*3,nx=seeds[sb]-seeds[sa],ny=seeds[sb+1]-seeds[sa+1],nz=seeds[sb+2]-seeds[sa+2],
      c=((seeds[sb]**2+seeds[sb+1]**2+seeds[sb+2]**2)-(seeds[sa]**2+seeds[sa+1]**2+seeds[sa+2]**2))/2,
      dx=V[b*3]-V[a*3],dy=V[b*3+1]-V[a*3+1],dz=V[b*3+2]-V[a*3+2],den=dx*nx+dy*ny+dz*nz;
    let t=Math.abs(den)<1e-12?.5:(c-(V[a*3]*nx+V[a*3+1]*ny+V[a*3+2]*nz))/den;t=t<0?0:t>1?1:t;return [V[a*3]+t*dx,V[a*3+1]+t*dy,V[a*3+2]+t*dz];};
  for(let t=0;t<F.length;t+=3){const a=F[t],b=F[t+1],c=F[t+2];if(!(reg[a]&&reg[b]&&reg[c]))continue;const la=lab[a],lb=lab[b],lc=lab[c];if(la===lb&&lb===lc)continue;
    const pts=[];if(la!==lb)pts.push(cross(a,b));if(lb!==lc)pts.push(cross(b,c));if(lc!==la)pts.push(cross(c,a));
    if(pts.length===2)segs.push(...pts[0],...pts[1]);
    else if(pts.length===3){const m=[0,1,2].map(k=>(pts[0][k]+pts[1][k]+pts[2][k])/3);for(const q of pts)segs.push(...q,...m);}}
  if(!segs.length)throw new Error('Hücre kenarı üretilemedi.');
  say('Lattice tüpleri oluşturuluyor');
  return {mesh:cuTube(Float32Array.from(segs),o.detail,o.strut/2,o.smooth,say),cells:seeds.length/3};
}

function cuIsoBuilder(nx,ny,org,H,L=0,nz=1){
  // One consistent tetrahedralization on the entire grid. Unlike surface nets,
  // saddle cells never identify two different surface branches as one vertex.
  const tetra=[[0,1,3,7],[0,3,2,7],[0,2,6,7],[0,6,4,7],[0,4,5,7],[0,5,1,7]],stride=[0,1,nx,nx+1,nx*ny,nx*ny+1,nx*ny+nx,nx*ny+nx+1];
  const pos=[],tri=[],cache=new Map(),deltaCode=new Map([[1,0],[nx,1],[nx*ny,2],[nx+1,3],[nx*ny+1,4],[nx*ny+nx,5],[nx*ny+nx+1,6]]);
  // STL is float32. Keep intersections a few representable steps away from
  // grid nodes so exporting cannot collapse an entire tiny triangle to a point.
  const world=Math.max(1,...org.map(Math.abs),nx*H,ny*H,nz*H),ulp=2**(Math.floor(Math.log2(world))-23),margin=Math.min(.025,Math.max(1e-6,4*ulp/H));
  function cell(x,y,z,f){
    let mask=0;for(let k=0;k<8;k++)if(f[k]<L)mask|=1<<k;
    if(mask===0||mask===255)return;
    const base=x+nx*(y+ny*z);
    const vertex=(a,b)=>{
      let ia=base+stride[a],ib=base+stride[b];if(ia>ib){[ia,ib]=[ib,ia];[a,b]=[b,a];}
      // At most seven forward grid-edge directions; no quadratic grid ID key.
      const key=ia*7+deltaCode.get(ib-ia);let id=cache.get(key);if(id!==undefined)return id;
      let t=(L-f[a])/(f[b]-f[a]);t=Math.max(margin,Math.min(1-margin,t));
      const ax=a&1,ay=(a>>1)&1,az=a>>2;
      id=pos.length/3;pos.push(org[0]+(x+ax+((b&1)-ax)*t)*H,org[1]+(y+ay+(((b>>1)&1)-ay)*t)*H,org[2]+(z+az+((b>>2)-az)*t)*H);cache.set(key,id);return id;
    };
    const face=(a,b,c,dx,dy,dz)=>{
      const ai=a*3,bi=b*3,ci=c*3,ux=pos[bi]-pos[ai],uy=pos[bi+1]-pos[ai+1],uz=pos[bi+2]-pos[ai+2],vx=pos[ci]-pos[ai],vy=pos[ci+1]-pos[ai+1],vz=pos[ci+2]-pos[ai+2];
      if((uy*vz-uz*vy)*dx+(uz*vx-ux*vz)*dy+(ux*vy-uy*vx)*dz<0)tri.push(a,c,b);else tri.push(a,b,c);
    };
    for(const tet of tetra){
      const ins=[],out=[];for(const k of tet)((mask&(1<<k))?ins:out).push(k);if(!ins.length||!out.length)continue;
      let dx=0,dy=0,dz=0;for(const k of out){dx+=(k&1)/out.length;dy+=((k>>1)&1)/out.length;dz+=(k>>2)/out.length;}for(const k of ins){dx-=(k&1)/ins.length;dy-=((k>>1)&1)/ins.length;dz-=(k>>2)/ins.length;}
      if(ins.length===1)face(vertex(ins[0],out[0]),vertex(ins[0],out[1]),vertex(ins[0],out[2]),dx,dy,dz);
      else if(out.length===1)face(vertex(out[0],ins[0]),vertex(out[0],ins[1]),vertex(out[0],ins[2]),dx,dy,dz);
      else{const a=vertex(ins[0],out[0]),b=vertex(ins[0],out[1]),c=vertex(ins[1],out[1]),d=vertex(ins[1],out[0]);face(a,b,c,dx,dy,dz);face(a,c,d,dx,dy,dz);}
    }
    if(pos.length>24000000)throw new Error('Model bu ayrıntı düzeyinde çok büyük. Ayrıntı değerini artırın.');
  }
  function finish(){
    if(!tri.length)throw new Error('Seçilen bölgede üretilecek hacim bulunamadı.');
    const out=new Float32Array(tri.length*3);for(let i=0;i<tri.length;i++){const j=tri[i]*3;out[i*3]=pos[j];out[i*3+1]=pos[j+1];out[i*3+2]=pos[j+2];}return out;
  }
  return {cell,finish};
}

function cuMarch(f,nx,ny,nz,L,org,H){
  const builder=cuIsoBuilder(nx,ny,org,H,L,nz),co=[0,1,nx,nx+1,nx*ny,nx*ny+1,nx*ny+nx,nx*ny+nx+1],values=new Float64Array(8);
  for(let z=0;z<nz-1;z++)for(let y=0;y<ny-1;y++)for(let x=0;x<nx-1;x++){
    const base=x+nx*(y+ny*z);let mask=0;for(let k=0;k<8;k++){values[k]=f[base+co[k]];if(values[k]<L)mask|=1<<k;}
    if(mask!==0&&mask!==255)builder.cell(x,y,z,values);
  }
  return builder.finish();
}
/* Boolean union: kapalı ağları voxel işaretli mesafe alanında birleştirir (min) */
function cuUnionVoxel(items,o,say){
  o=cuDef(o);say=say||(()=>{});const h=o.detail,op=o.op||'union';
  const mn=[1e9,1e9,1e9],mx=[-1e9,-1e9,-1e9];
  for(const it of items)for(let i=0;i<it.P.length;i+=3)for(let k=0;k<3;k++){mn[k]=Math.min(mn[k],it.P[i+k]);mx[k]=Math.max(mx[k],it.P[i+k]);}
  const padOf=H=>4*H,dim=H=>mn.map((v,k)=>Math.ceil((mx[k]-v+2*padOf(H))/H)+1);
  let H=Math.max(.025,h);while(dim(H).reduce((a,b)=>a*b,1)>3.2e7)H*=1.08;
  const pad=padOf(H);
  const [nx,ny,nz]=dim(H),org=mn.map((v,k)=>v-pad-[.173205,.317837,.419643][k]*H),n=nx*ny*nz,G=new Float32Array(n).fill(op==='union'?1e3:-1e3),T=new Float32Array(n),S=new Uint8Array(n),B=2*H;
  const e1=.000123*H,e2=.000317*H;
  for(const [ii,it] of items.entries()){
    say(it.name+' alana işleniyor');T.fill(1e6);S.fill(0);const P=it.P,cols=new Array(ny*nz);
    for(let t=0;t<P.length;t+=9){
      const lo=[0,1,2].map(k=>Math.max(0,Math.floor((Math.min(P[t+k],P[t+3+k],P[t+6+k])-B-org[k])/H))),hi=[nx,ny,nz].map((m,k)=>Math.min(m-1,Math.ceil((Math.max(P[t+k],P[t+3+k],P[t+6+k])+B-org[k])/H)));
      for(let z=lo[2];z<=hi[2];z++)for(let y=lo[1];y<=hi[1];y++)for(let x=lo[0];x<=hi[0];x++){
        const d=cuTriDist2(org[0]+x*H,org[1]+y*H,org[2]+z*H,P[t],P[t+1],P[t+2],P[t+3],P[t+4],P[t+5],P[t+6],P[t+7],P[t+8]),i=x+nx*(y+ny*z);if(d<T[i])T[i]=d;}
      // x yönünde ışın: (y,z) sütunlarıyla kesişim
      const ax=P[t],ay=P[t+1],az=P[t+2],bx=P[t+3],by=P[t+4],bz=P[t+5],cx=P[t+6],cy=P[t+7],cz=P[t+8];
      const nxn=(by-ay)*(cz-az)-(bz-az)*(cy-ay),nyn=(bz-az)*(cx-ax)-(bx-ax)*(cz-az),nzn=(bx-ax)*(cy-ay)-(by-ay)*(cx-ax);if(Math.abs(nxn)<1e-14)continue;
      const j0=Math.max(0,Math.ceil((Math.min(ay,by,cy)-org[1]-e1)/H)),j1=Math.min(ny-1,Math.floor((Math.max(ay,by,cy)-org[1]-e1)/H)),k0=Math.max(0,Math.ceil((Math.min(az,bz,cz)-org[2]-e2)/H)),k1=Math.min(nz-1,Math.floor((Math.max(az,bz,cz)-org[2]-e2)/H));
      for(let k=k0;k<=k1;k++)for(let j=j0;j<=j1;j++){const y=org[1]+j*H+e1,z=org[2]+k*H+e2;
        const w1=(by-ay)*(z-az)-(bz-az)*(y-ay),w2=(cy-by)*(z-bz)-(cz-bz)*(y-by),w3=(ay-cy)*(z-cz)-(az-cz)*(y-cy);
        if((w1>=0&&w2>=0&&w3>=0)||(w1<=0&&w2<=0&&w3<=0)){const x=ax-(nyn*(y-ay)+nzn*(z-az))/nxn,c=j+ny*k;(cols[c]||(cols[c]=[])).push(x);}}
    }
    for(let c=0;c<cols.length;c++){const l=cols[c];if(!l||l.length<2)continue;l.sort((a,b)=>a-b);const j=c%ny,k=(c-j)/ny;
      for(let m=0;m+1<l.length;m+=2){const i0=Math.max(0,Math.ceil((l[m]-org[0])/H)),i1=Math.min(nx-1,Math.floor((l[m+1]-org[0])/H));for(let i=i0;i<=i1;i++)S[i+nx*(j+ny*k)]=1;}}
    for(let i=0;i<n;i++){const v=T[i]<1e6?Math.min(Math.sqrt(T[i]),B):B,val=S[i]?-v:v;if(op==='union'){if(val<G[i])G[i]=val;}else if(op==='intersect'){if(val>G[i])G[i]=val;}else{const w=ii===0?val:-val;if(w>G[i])G[i]=w;}}
  }
  say('Union yüzeyi çıkarılıyor');
  return {mesh:cuMarch(G,nx,ny,nz,0,org,H)};
}

function cuExactMesh(V0,F0){
  // STL stores float32 positions. Exact float32 bit keys in a flat hash table
  // preserve thin features without string-allocation overhead on large meshes.
  const nIn=V0.length/3,f32=new Float32Array(V0.length);
  for(let i=0;i<V0.length;i++){
    const v=Math.fround(V0[i]);
    if(!Number.isFinite(v))throw new Error('STL geçersiz koordinat içeriyor.');
    f32[i]=v===0?0:v;
  }
  const u32=new Uint32Array(f32.buffer);
  let cap=16;while(cap<nIn*2)cap<<=1;
  const head=new Int32Array(cap).fill(-1),next=new Int32Array(nIn).fill(-1),mask=cap-1;
  const remap=new Uint32Array(nIn),V=new Float64Array(nIn*3);
  let nv=0;
  for(let i=0;i<nIn;i++){
    const i3=i*3,bx=u32[i3],by=u32[i3+1],bz=u32[i3+2];
    const h=(Math.imul(bx,73856093)^Math.imul(by,19349663)^Math.imul(bz,83492791))&mask;
    let u=head[h],found=-1;
    while(u>=0){
      const u3=u*3;
      if(f32[i3]===V[u3]&&f32[i3+1]===V[u3+1]&&f32[i3+2]===V[u3+2]){found=u;break;}
      u=next[u];
    }
    if(found<0){
      found=nv++;const f3=found*3;
      V[f3]=f32[i3];V[f3+1]=f32[i3+1];V[f3+2]=f32[i3+2];
      next[found]=head[h];head[h]=found;
    }
    remap[i]=found;
  }
  const nFIn=F0.length/3;
  let fCap=16;while(fCap<nFIn*2)fCap<<=1;
  const fHead=new Int32Array(fCap).fill(-1),fNext=new Int32Array(nFIn).fill(-1),fMask=fCap-1;
  const F=new Uint32Array(nFIn*3),s0=new Uint32Array(nFIn),s1=new Uint32Array(nFIn),s2=new Uint32Array(nFIn);
  let nf=0;
  for(let t=0;t<F0.length;t+=3){
    const a=remap[F0[t]],b=remap[F0[t+1]],c=remap[F0[t+2]];if(a===b||b===c||a===c)continue;
    const ax=V[a*3],ay=V[a*3+1],az=V[a*3+2],ux=V[b*3]-ax,uy=V[b*3+1]-ay,uz=V[b*3+2]-az,vx=V[c*3]-ax,vy=V[c*3+1]-ay,vz=V[c*3+2]-az;
    const nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;
    if(nx*nx+ny*ny+nz*nz<1e-28)continue;
    let x=a,y=b,z=c,tmp;if(x>y){tmp=x;x=y;y=tmp;}if(y>z){tmp=y;y=z;z=tmp;}if(x>y){tmp=x;x=y;y=tmp;}
    const fh=(Math.imul(x,73856093)^Math.imul(y,19349663)^Math.imul(z,83492791))&fMask;
    let u=fHead[fh],dup=false;
    while(u>=0){if(s0[u]===x&&s1[u]===y&&s2[u]===z){dup=true;break;}u=fNext[u];}
    if(dup)continue;
    s0[nf]=x;s1[nf]=y;s2[nf]=z;fNext[nf]=fHead[fh];fHead[fh]=nf;
    const nf3=nf*3;F[nf3]=a;F[nf3+1]=b;F[nf3+2]=c;nf++;
  }
  return {V:V.slice(0,nv*3),F:F.slice(0,nf*3),remap};
}
function cuSoupMesh(P){return cuExactMesh(P,Uint32Array.from({length:P.length/3},(_,i)=>i));}
function cuSoup(g){const out=new Float32Array(g.F.length*3);for(let i=0;i<g.F.length;i++){const k=g.F[i]*3;out[i*3]=g.V[k];out[i*3+1]=g.V[k+1];out[i*3+2]=g.V[k+2];}return out;}
function cuTopology(g,needMap=false){
  const {V,F}=g,n=V.length/3,m=F.length;
  if(!needMap){
    let cap=16;while(cap<m*2)cap<<=1;
    const head=new Int32Array(cap).fill(-1),next=new Int32Array(m).fill(-1),mask=cap-1;
    const eA=new Uint32Array(m),eB=new Uint32Array(m),eCnt=new Uint16Array(m),eBal=new Int16Array(m);
    let ne=0;
    for(let t=0;t<m;t+=3)for(let k=0;k<3;k++){
      const a=F[t+k],b=F[t+(k+1)%3],lo=a<b?a:b,hi=a<b?b:a;
      const h=(Math.imul(lo,73856093)^Math.imul(hi,19349663))&mask;
      let u=head[h],id=-1;
      while(u>=0){if(eA[u]===lo&&eB[u]===hi){id=u;break;}u=next[u];}
      if(id<0){id=ne++;eA[id]=lo;eB[id]=hi;next[id]=head[h];head[h]=id;}
      eCnt[id]++;eBal[id]+=a<b?1:-1;
    }
    let boundary=0,nonManifold=0,inconsistent=0;
    for(let i=0;i<ne;i++){const c=eCnt[i];if(c===1)boundary++;else if(c!==2)nonManifold++;else if(eBal[i]!==0)inconsistent++;}
    if(!boundary&&!nonManifold&&!inconsistent)return {edges:null,boundary:0,nonManifold:0,inconsistent:0,closed:true};
  }
  const edges=new Map();
  for(let t=0;t<F.length;t+=3)for(let k=0;k<3;k++){
    const a=F[t+k],b=F[t+(k+1)%3],key=a<b?a*n+b:b*n+a;let e=edges.get(key);
    if(!e){e={a,b,slots:[],balance:0};edges.set(key,e);}e.slots.push(t+k);e.balance+=a<b?1:-1;
  }
  let boundary=0,nonManifold=0,inconsistent=0;
  for(const e of edges.values()){if(e.slots.length===1)boundary++;else if(e.slots.length!==2)nonManifold++;else if(e.balance)inconsistent++;}
  return {edges,boundary,nonManifold,inconsistent,closed:boundary===0&&nonManifold===0};
}
function cuOrient(g,top=cuTopology(g)){
  const {V,F}=g,nf=F.length/3;
  if(top.inconsistent){
  const adj=new Int32Array(F.length).fill(-1),flip=new Int8Array(nf).fill(-1),queue=new Uint32Array(nf);
  for(const e of top.edges.values())if(e.slots.length===2){const[a,b]=e.slots;adj[a]=b;adj[b]=a;}
  for(let start=0;start<nf;start++){
    if(flip[start]!==-1)continue;let head=0,tail=0,nflip=0;queue[tail++]=start;flip[start]=0;
    while(head<tail){const f=queue[head++],base=f*3;for(let k=0;k<3;k++){
      const slot=base+k,other=adj[slot];if(other<0)continue;const otherBase=Math.floor(other/3)*3,j=other%3,next=Math.floor(other/3);
      const same=(F[slot]<F[base+(k+1)%3])===(F[other]<F[otherBase+(j+1)%3]),want=flip[f]^(same?1:0);
      if(flip[next]===-1){flip[next]=want;nflip+=want;queue[tail++]=next;}
    }}
    // Keep the dominant original orientation of each connected shell.
    if(nflip>tail/2)for(let i=0;i<tail;i++)flip[queue[i]]^=1;
  }
  for(let f=0;f<nf;f++)if(flip[f]){const t=f*3,a=F[t+1];F[t+1]=F[t+2];F[t+2]=a;}
  }
  let volume=0;const ox=V[0],oy=V[1],oz=V[2];
  for(let t=0;t<F.length;t+=3){const a=F[t]*3,b=F[t+1]*3,c=F[t+2]*3,ax=V[a]-ox,ay=V[a+1]-oy,az=V[a+2]-oz,bx=V[b]-ox,by=V[b+1]-oy,bz=V[b+2]-oz,cx=V[c]-ox,cy=V[c+1]-oy,cz=V[c+2]-oz;volume+=ax*(by*cz-bz*cy)+ay*(bz*cx-bx*cz)+az*(bx*cy-by*cx);}
  if(volume<0)for(let t=0;t<F.length;t+=3){const a=F[t+1];F[t+1]=F[t+2];F[t+2]=a;}
  return g;
}
function cuCapMicroHoles(g,limit){
  const top=cuTopology(g);if(!top.boundary)return g;
  const next=new Map(),degree=new Map();for(const e of top.edges.values())if(e.slots.length===1){const a=e.a,b=e.b;next.set(a,b);degree.set(a,(degree.get(a)||0)+1);degree.set(b,(degree.get(b)||0)+1);}
  const used=new Set(),F=Array.from(g.F),V=Array.from(g.V);
  for(const first of next.keys()){
    if(used.has(first))continue;const loop=[];let at=first;
    while(!used.has(at)&&degree.get(at)===2&&loop.length<=128){used.add(at);loop.push(at);at=next.get(at);if(at===undefined)break;}
    if(at!==first||loop.length<3||loop.length>128)continue;
    const lo=[Infinity,Infinity,Infinity],hi=lo.map(()=>-Infinity),center=[0,0,0];
    for(const v of loop)for(let k=0;k<3;k++){const x=V[v*3+k];lo[k]=Math.min(lo[k],x);hi[k]=Math.max(hi[k],x);center[k]+=x/loop.length;}
    if(Math.hypot(...hi.map((v,k)=>v-lo[k]))>limit)continue;
    // These are sub-detail defects, not anatomical holes or an open sheet.
    const m=V.length/3;V.push(...center);for(let i=0;i<loop.length;i++)F.push(m,loop[(i+1)%loop.length],loop[i]);
  }
  return cuExactMesh(Float64Array.from(V),Uint32Array.from(F));
}
function cuMeshFromKernel(m){
  const P=new Float32Array(m.triVerts.length*3),props=m.vertProperties;
  for(let i=0;i<m.triVerts.length;i++){const j=m.triVerts[i]*m.numProp;P[i*3]=props[j];P[i*3+1]=props[j+1];P[i*3+2]=props[j+2];}
  return P;
}
function cuOpenEdges(P){const t=cuTopology(cuSoupMesh(P));return t.boundary+t.nonManifold;}

function cuPrepareSolid(P,o){
  let g=cuSoupMesh(P),top=cuTopology(g);g=cuOrient(g,top);
  if(top.boundary){g=cuCapMicroHoles(g,Math.max(.02,Math.min(.2,(o.detail||.08)*2)));g=cuOrient(g);}
  return g;
}
function cuConstruct(K,g,o){
  const m=new K.Mesh({numProp:3,vertProperties:Float32Array.from(g.V),triVerts:g.F,tolerance:Math.min(1e-5,(o.detail||.08)*1e-3)});
  m.merge();return new K.Manifold(m);
}
function cuExportSolid(solid){
  if(solid.isEmpty())throw new Error('Seçilen bölgede üretilecek hacim bulunamadı.');
  const P=cuMeshFromKernel(solid.getMesh()),g=cuSoupMesh(P),top=cuTopology(g);
  // Audit the actual STL coordinates, not only the kernel's logical vertices.
  // Coincident branches can be valid internally but become non-manifold in STL.
  if(top.boundary||top.nonManifold||top.inconsistent)return null;
  return cuSoup(g);
}
function cuRepairSolid(K,items,o,say){
  const detail=Math.min(Math.abs(o.detail||.08),Math.abs(o.offset||.15)/2);
  for(const scale of [1,.75]){
    say('Yüzey bağlantıları otomatik düzeltiliyor');
    const r=cuUnionVoxel(items,{...o,detail:detail*scale},say),g=cuPrepareSolid(r.mesh,o);let solid;
    try{solid=cuConstruct(K,g,o);const out=cuExportSolid(solid);if(out)return out;}
    catch(error){if(error.name==='RangeError'||/memory/i.test(error.message))throw error;}
    finally{if(solid)solid.delete();}
  }
  throw new Error('Bu geometri onarılamadı. Kaynak STL üzerinde kesişen veya eksik yüzeyler var.');
}
async function cuFinishSolid(P,o,say){
  o=cuDef(o);say=say||(()=>{});say('STL bağlantıları doğrulanıyor');
  const K=await CU_KERNEL(),g=cuPrepareSolid(P,o);
  let solid;
  try{
    solid=cuConstruct(K,g,o);
    // Bound geometric simplification to a small fraction of the requested
    // dimensions; fewer facets also speed up later unions and ray analysis.
    const tol=o.reduce!==undefined?Math.max(0,o.reduce):Math.min(Math.abs(o.detail)*.01,Math.abs(o.offset)*.01,Math.abs(o.strut)*.005);
    if(tol>0){const simple=solid.simplify(tol);try{const out=cuExportSolid(simple);if(out)return out;}finally{simple.delete();}}
    const out=cuExportSolid(solid);if(out)return out;
  }catch(error){if(error.name==='RangeError'||/memory/i.test(error.message))throw error;}
  finally{if(solid)solid.delete();}
  // This also repairs old surface-net results already saved by earlier builds.
  return cuRepairSolid(K,[{P:cuSoup(g),name:'Model'}],o,say);
}

function cuMeasure(P){let A=0,V=0;for(let t=0;t<P.length;t+=9){const ax=P[t],ay=P[t+1],az=P[t+2],bx=P[t+3],by=P[t+4],bz=P[t+5],cx=P[t+6],cy=P[t+7],cz=P[t+8],ux=bx-ax,uy=by-ay,uz=bz-az,vx=cx-ax,vy=cy-ay,vz=cz-az;
  A+=.5*Math.hypot(uy*vz-uz*vy,uz*vx-ux*vz,ux*vy-uy*vx);V+=(ax*(by*cz-bz*cy)-ay*(bx*cz-bz*cx)+az*(bx*cy-by*cx))/6;}return {area:A,volume:V};}
async function cuBoolean(items,o,say){
  o=cuDef(o);say=say||(()=>{});const op=o.op||'union';
  if(items.length<2)throw new Error(op==='subtract'?'Fark için bir ana model (A) ve çıkarılacak en az bir model (B) gerekir.':'Birleştirmek için en az iki model seçin.');
  say('Boolean motoru hazırlanıyor');
  const K=await CU_KERNEL(),solids=[],prepared=[],tol=o.reduce!==undefined?Math.max(0,o.reduce):0;
  const emptyMsg={union:'Birleşim boş. Seçilen modelleri kontrol edin.',intersect:'Kesişim boş: seçilen modeller birbiriyle örtüşmüyor.',subtract:'Fark boş: çıkarılan modeller ana modeli tamamen kapsıyor.'}[op];
  try{
    for(const it of items){
      say(it.name+' hazırlanıyor');let g=cuOrient(cuSoupMesh(it.P));
      g=cuOrient(cuCapMicroHoles(g,Math.max(.02,Math.min(.2,o.detail*2))));
      const mg=new K.Mesh({numProp:3,vertProperties:Float32Array.from(g.V),triVerts:g.F,tolerance:Math.min(1e-5,o.detail*1e-3)});
      mg.merge();
      try{solids.push(new K.Manifold(mg));prepared.push({P:cuSoup(g),name:it.name});}
      catch(error){
        const topology=cuTopology(g);
        if(topology.boundary>0){
          let boundaryLength=0;for(const e of topology.edges.values())if(e.slots.length===1)boundaryLength+=Math.hypot(g.V[e.a*3]-g.V[e.b*3],g.V[e.a*3+1]-g.V[e.b*3+1],g.V[e.a*3+2]-g.V[e.b*3+2]);
          if(boundaryLength>Math.max(1,o.detail*48))throw new Error(it.name+': Boolean işlem için kapalı (hacimli) model gerekir; açık yüzey olamaz. “Kenar Kapat” ile açık kenarları kapatın veya “Genel Wrap” ile kalınlaştırın.');
        }
        prepared.push({P:cuSoup(g),name:it.name});
        say('Küçük bağlantı kusurları düzeltiliyor');
        const r=cuRepairSolid(K,prepared.concat(items.slice(prepared.length)),o,say);return {mesh:r,...cuMeasure(r)};
      }
    }
    say({union:'Modeller birleştiriliyor',intersect:'Kesişim hesaplanıyor',subtract:'Fark hesaplanıyor'}[op]);
    let rest=null,result;
    if(op==='union')result=K.Manifold.union(solids);
    else if(op==='intersect')result=K.Manifold.intersection(solids);
    else{rest=solids.length>2?K.Manifold.union(solids.slice(1)):null;result=K.Manifold.difference(solids[0],rest||solids[1]);}
    try{
      if(result.isEmpty())throw new Error(emptyMsg);
      let out=null;
      if(tol>0){say('Üçgen sayısı azaltılıyor');const simple=result.simplify(tol);try{if(!simple.isEmpty())out=cuExportSolid(simple);}finally{simple.delete();}}
      if(!out)out=cuExportSolid(result);
      if(!out)out=cuRepairSolid(K,[{P:cuMeshFromKernel(result.getMesh()),name:'Sonuç'}],{...o,op:'union'},say);
      const m=cuMeasure(out);if(m.volume<=0)throw new Error(emptyMsg);
      return {mesh:out,...m};
    }finally{result.delete();if(rest)rest.delete();}
  }finally{for(const solid of solids)solid.delete();}
}
function cuUnion(items,o,say){return cuBoolean(items,{...o,op:'union'},say);}
function cmThickness(V0,F0,o,say){
  if(o?.method==='sphere_legacy'){const r=cmThicknessSphereLegacy(V0,F0,o,say),t=cuTopology(cuExactMesh(V0,F0));r.boundaryEdges=t.boundary;r.nonManifoldEdges=t.nonManifold;r.algorithmVersion='4.7';return r;}
  if(!o||o.method==='sphere'||o.method==='sphere_cover')return cmThicknessSphere(V0,F0,o||{},say);
  say=say||(()=>{});say('Yüzey bağlantıları kontrol ediliyor');
  const welded=cuExactMesh(V0,F0),V=welded.V,F=welded.F,remap=welded.remap;
  const nv=V.length/3,nf=F.length/3;
  if(!nf)throw new Error('Analiz için geçerli bir STL seçin.');
  const topology=cuTopology({V,F},true),nbr=new Int32Array(F.length).fill(-1);
  for(const edge of topology.edges.values())if(edge.slots.length===2){const[a,b]=edge.slots;nbr[a]=b;nbr[b]=a;}
  const flip=new Int8Array(nf).fill(-1),component=new Int32Array(nf),queue=new Uint32Array(nf);
  let comp=0;
  for(let first=0;first<nf;first++){
    if(flip[first]!==-1)continue;
    let head=0,tail=0;queue[tail++]=first;flip[first]=0;component[first]=comp;
    while(head<tail){
      const f=queue[head++],base=f*3;
      for(let k=0;k<3;k++){
        const slot=base+k,other=nbr[slot];if(other<0)continue;const g=Math.floor(other/3),j=other%3,gb=g*3;
        const same=(F[slot]<F[base+(k+1)%3])===(F[other]<F[gb+(j+1)%3]);
        const want=flip[f]^(same?1:0);
        if(flip[g]===-1){flip[g]=want;component[g]=comp;queue[tail++]=g;}

      }
    }
    comp++;
  }
  const closedComponents=new Uint8Array(comp).fill(1);
  for(const edge of topology.edges.values())if(edge.slots.length!==2)for(const slot of edge.slots)closedComponents[component[Math.floor(slot/3)]]=0;
  for(let f=0;f<nf;f++)if(flip[f]){const t=f*3,a=F[t+1];F[t+1]=F[t+2];F[t+2]=a;}
  // A closed component has a material side. Tracing both signs can instead
  // measure the air gap between neighboring ribs of the very same component.
  // Infer its orientation from signed volume so reversed STL normals work too.
  const signedVolume=new Float64Array(comp),ox=V[0],oy=V[1],oz=V[2];
  for(let f=0;f<nf;f++){
    const t=f*3,a=F[t]*3,b=F[t+1]*3,c=F[t+2]*3,ax=V[a]-ox,ay=V[a+1]-oy,az=V[a+2]-oz,bx=V[b]-ox,by=V[b+1]-oy,bz=V[b+2]-oz,cx=V[c]-ox,cy=V[c+1]-oy,cz=V[c+2]-oz;
    signedVolume[component[f]]+=ax*(by*cz-bz*cy)+ay*(bz*cx-bx*cz)+az*(bx*cy-by*cx);
  }
  const directions=Array.from({length:comp},(_,c)=>closedComponents[c]?[signedVolume[c]<0?1:-1]:[-1,1]);
  say('Ölçüm ağacı hazırlanıyor');
  const bvh=cmBuildBVH(V,F),{tris,idx,nodes}=bvh;
  const count=new Uint32Array(nv),offsets=new Uint32Array(nv+1),incidence=new Uint32Array(F.length),weights=new Float32Array(nv);
  for(const v of F)count[v]++;
  for(let i=0;i<nv;i++)offsets[i+1]=offsets[i]+count[i];
  const cursor=offsets.slice(0,nv);
  for(let f=0;f<nf;f++){
    const t=f*3,T=tris[f],area=Math.hypot((T.bx-T.ax)*(T.cy-T.ay)-(T.by-T.ay)*(T.cx-T.ax),
      (T.by-T.ay)*(T.cz-T.az)-(T.bz-T.az)*(T.cy-T.ay),
      (T.bz-T.az)*(T.cx-T.ax)-(T.bx-T.ax)*(T.cz-T.az))/2;
    for(let k=0;k<3;k++){const v=F[t+k];incidence[cursor[v]++]=f;weights[v]+=area/3;}
  }
  const maxSearch=o.maxSearch,eps=Math.max(1e-7,Math.min(1e-4,maxSearch*1e-6)),stack=[];
  function hit(ox,oy,oz,dx,dy,dz,limit,vertex,sourceComp,snx,sny,snz){
    let best=limit,found=false;stack.length=0;stack.push(0);
    while(stack.length){
      const node=nodes[stack.pop()];let near=0,far=best,valid=true;
      for(let k=0;k<3;k++){
        const p=k===0?ox:k===1?oy:oz,d=k===0?dx:k===1?dy:dz,lo=k===0?node.x0:k===1?node.y0:node.z0,hi=k===0?node.x1:k===1?node.y1:node.z1;
        if(Math.abs(d)<1e-14){if(p<lo||p>hi){valid=false;break;}}
        else{let a=(lo-p)/d,b=(hi-p)/d;if(a>b){const t=a;a=b;b=t;}near=Math.max(near,a);far=Math.min(far,b);if(far<near){valid=false;break;}}
      }
      if(!valid||near>=best)continue;
      if(node.l<0){stack.push(node.left,node.right);continue;}
      for(let i=node.l;i<node.r;i++){
        const f=idx[i],t=f*3;if((closedComponents[sourceComp]&&component[f]!==sourceComp)||F[t]===vertex||F[t+1]===vertex||F[t+2]===vertex)continue;
        const T=tris[f];if(T.nx*snx+T.ny*sny+T.nz*snz>-.08)continue;
        const ux=T.bx-T.ax,uy=T.by-T.ay,uz=T.bz-T.az,vx=T.cx-T.ax,vy=T.cy-T.ay,vz=T.cz-T.az;
        const px=dy*vz-dz*vy,py=dz*vx-dx*vz,pz=dx*vy-dy*vx,det=ux*px+uy*py+uz*pz;
        if(Math.abs(det)<1e-16)continue;
        const tx=ox-T.ax,ty=oy-T.ay,tz=oz-T.az,inv=1/det,u=(tx*px+ty*py+tz*pz)*inv;
        if(u< -1e-8||u>1+1e-8)continue;
        const qx=ty*uz-tz*uy,qy=tz*ux-tx*uz,qz=tx*uy-ty*ux,v=(dx*qx+dy*qy+dz*qz)*inv;
        if(v< -1e-8||u+v>1+1e-8)continue;
        const d=(vx*qx+vy*qy+vz*qz)*inv;
        if(d>eps*.5&&d<best){best=d;found=true;}
      }
    }
    return found?best+eps:Infinity;
  }
  const values=new Float32Array(nv).fill(NaN),cone=o.method==='cone',rays=cone?o.coneRays:1;
  const angle=(rays>=9?30:20)*Math.PI/180,ca=Math.cos(angle),sa=Math.sin(angle);
  let last=-1;
  for(let i=0;i<nv;i++){
    let best=Infinity;const normals=[],v3=i*3,px=V[v3],py=V[v3+1],pz=V[v3+2];
    for(let j=offsets[i];j<offsets[i+1];j++){
      const face=incidence[j],T=tris[face],nx=T.nx,ny=T.ny,nz=T.nz;
      let duplicate=false;for(const n of normals)if(n[0]*nx+n[1]*ny+n[2]*nz>.999){duplicate=true;break;}if(duplicate)continue;
      normals.push([nx,ny,nz]);
      // Step into the source face before tracing. This avoids grazing the
      // boundary at corners; measurements never come from adjacent self faces.
      const tx=T.mx-px,ty=T.my-py,tz=T.mz-pz,tl=Math.hypot(tx,ty,tz),inset=tl?Math.min(.002,eps*8/tl):0;
      const bx=px+tx*inset,by=py+ty*inset,bz=pz+tz*inset;
      let ux=Math.abs(nx)<.8?1:0,uy=Math.abs(nx)<.8?0:1,uz=0,dot=ux*nx+uy*ny;
      ux-=dot*nx;uy-=dot*ny;uz-=dot*nz;const ul=Math.hypot(ux,uy,uz)||1;ux/=ul;uy/=ul;uz/=ul;
      const vx=ny*uz-nz*uy,vy=nz*ux-nx*uz,vz=nx*uy-ny*ux;
      for(let k=0;k<rays;k++){
        let dx=nx,dy=ny,dz=nz;
        if(k){const phi=2*Math.PI*(k-1)/(rays-1),c=Math.cos(phi),s=Math.sin(phi);dx=nx*ca+(ux*c+vx*s)*sa;dy=ny*ca+(uy*c+vy*s)*sa;dz=nz*ca+(uz*c+vz*s)*sa;}
        for(const sign of directions[component[face]]){
          const rx=dx*sign,ry=dy*sign,rz=dz*sign;
          const d=hit(bx+rx*eps,by+ry*eps,bz+rz*eps,rx,ry,rz,Math.min(best,maxSearch),i,component[face],nx,ny,nz);
          if(d<best)best=d;
        }
      }
    }
    if(Number.isFinite(best)&&best<=maxSearch)values[i]=best;
    const pct=Math.floor(i/nv*20);if(pct!==last){last=pct;say('Kalınlık ölçülüyor · %'+pct*5);}
  }
  let validCount=0;for(const v of values)if(Number.isFinite(v))validCount++;

  // Smoothing affects only the displayed colors. The stored measurements,
  // statistics and hover probe always use the raw ray distances.
  const display=Float32Array.from(values);
  for(let pass=0;pass<o.smoothSteps;pass++){
    const next=Float32Array.from(display);
    for(let i=0;i<nv;i++){
      if(!Number.isFinite(values[i]))continue;let sum=display[i]*2,n=2;
      for(let j=offsets[i];j<offsets[i+1];j++){const f=incidence[j]*3;for(let k=0;k<3;k++){const v=F[f+k];if(v!==i&&Number.isFinite(display[v])){sum+=display[v];n++;}}}
      next[i]=Math.max(values[i]*.9,Math.min(values[i]*1.1,sum/n));
    }
    display.set(next);
  }
  const out=new Float32Array(V0.length/3),visual=new Float32Array(out.length),area=new Float32Array(out.length),frequency=new Uint32Array(nv);
  for(const v of remap)frequency[v]++;
  for(let i=0;i<out.length;i++){const v=remap[i];out[i]=values[v];visual[i]=display[v];area[i]=weights[v]/frequency[v];}
  say('Ölçüm tamamlandı');return {values:out,display:visual,weights:area,validCount,totalCount:nv,method:o.method,boundaryEdges:topology.boundary,nonManifoldEdges:topology.nonManifold,algorithmVersion:'4.8'};
}
function cmThicknessSphere(V0,F0,o,say){
  // v4.8: a resolution-aware estimate combining face samples and vertex-normal
  // tangent balls. nTop agreement is measured externally, not assumed here.
  say=say||(()=>{});
  say('Yüzey hazırlanıyor');
  const W=cuExactMesh(V0,F0),V=W.V,F=W.F,remap=W.remap;
  const nv=V.length/3,nT=F.length/3;
  if(!nT)throw new Error('Analiz için geçerli bir STL seçin.');
  let bx0=Infinity,by0=Infinity,bz0=Infinity,bx1=-Infinity,by1=-Infinity,bz1=-Infinity;
  for(let i=0;i<nv;i++){const x=V[i*3],y=V[i*3+1],z=V[i*3+2];
    if(x<bx0)bx0=x;if(x>bx1)bx1=x;if(y<by0)by0=y;if(y>by1)by1=y;if(z<bz0)bz0=z;if(z>bz1)bz1=z;}
  const diag=Math.hypot(bx1-bx0,by1-by0,bz1-bz0)||1;
  const maxSearch=Number.isFinite(o&&o.maxSearch)&&o.maxSearch>0?o.maxSearch:diag;
  const rCap=Math.min(maxSearch,diag)/2;
  const precision=Math.max(1,Math.min(3,Number(o&&o.quality)||2));
  const quality=precision===1?1:2;
  const relativeTolerance=precision===3?1e-6:2e-5;
  const maxIterations=precision===3?96:64;
  const coverMode=false;

  /* ---------- üçgen BVH ---------- */
  const tlo=new Float64Array(nT*3),thi=new Float64Array(nT*3),tcen=new Float64Array(nT*3);
  for(let t=0;t<nT;t++){
    const a=F[t*3]*3,b=F[t*3+1]*3,c=F[t*3+2]*3;
    for(let k=0;k<3;k++){
      const p=V[a+k],q=V[b+k],r=V[c+k],lo=Math.min(p,q,r),hi=Math.max(p,q,r);
      tlo[t*3+k]=lo;thi[t*3+k]=hi;tcen[t*3+k]=(lo+hi)*.5;
    }
  }
  const idx=new Uint32Array(nT);for(let i=0;i<nT;i++)idx[i]=i;
  const cap=nT+16,nb=new Float64Array(cap*6),nl=new Int32Array(cap),nr=new Int32Array(cap),nc=new Int32Array(cap);
  function qselect(arr,key,l,r,k,axis){
    let lo=l,hi=r-1;
    while(lo<hi){
      const pv=key[arr[(lo+hi)>>1]*3+axis];let i=lo,j=hi;
      while(i<=j){
        while(key[arr[i]*3+axis]<pv)i++;
        while(key[arr[j]*3+axis]>pv)j--;
        if(i<=j){const t=arr[i];arr[i]=arr[j];arr[j]=t;i++;j--;}
      }
      if(k<=j)hi=j;else if(k>=i)lo=i;else break;
    }
  }
  let nodeCount=1;
  {
    const st=[0,0,nT];
    while(st.length){
      const r=st.pop(),l=st.pop(),id=st.pop();
      let x0=Infinity,y0=Infinity,z0=Infinity,x1=-Infinity,y1=-Infinity,z1=-Infinity,cx0=Infinity,cy0=Infinity,cz0=Infinity,cx1=-Infinity,cy1=-Infinity,cz1=-Infinity;
      for(let i=l;i<r;i++){
        const t=idx[i]*3;
        if(tlo[t]<x0)x0=tlo[t];if(tlo[t+1]<y0)y0=tlo[t+1];if(tlo[t+2]<z0)z0=tlo[t+2];
        if(thi[t]>x1)x1=thi[t];if(thi[t+1]>y1)y1=thi[t+1];if(thi[t+2]>z1)z1=thi[t+2];
        const a=tcen[t],b=tcen[t+1],c=tcen[t+2];
        if(a<cx0)cx0=a;if(a>cx1)cx1=a;if(b<cy0)cy0=b;if(b>cy1)cy1=b;if(c<cz0)cz0=c;if(c>cz1)cz1=c;
      }
      nb[id*6]=x0;nb[id*6+1]=y0;nb[id*6+2]=z0;nb[id*6+3]=x1;nb[id*6+4]=y1;nb[id*6+5]=z1;
      if(r-l<=4){nl[id]=-1;nr[id]=l;nc[id]=r-l;continue;}
      const dx=cx1-cx0,dy=cy1-cy0,dz=cz1-cz0,axis=dx>=dy&&dx>=dz?0:dy>=dz?1:2,m=(l+r)>>1;
      qselect(idx,tcen,l,r,m,axis);
      const L=nodeCount++,R=nodeCount++;nl[id]=L;nr[id]=R;
      st.push(L,l,m,R,m,r);
    }
  }
  const stack=new Int32Array(256);
  let QX=0,QY=0,QZ=0,FX=0,FY=0,FZ=0,FNX=0,FNY=0,FNZ=0,FR2=-1,RHT=-1;
  function ptTri(px,py,pz,t){
    const i=F[t*3]*3,j=F[t*3+1]*3,k=F[t*3+2]*3;
    const ax=V[i],ay=V[i+1],az=V[i+2];
    const abx=V[j]-ax,aby=V[j+1]-ay,abz=V[j+2]-az,acx=V[k]-ax,acy=V[k+1]-ay,acz=V[k+2]-az;
    const apx=px-ax,apy=py-ay,apz=pz-az;
    const d1=abx*apx+aby*apy+abz*apz,d2=acx*apx+acy*apy+acz*apz;
    let qx,qy,qz;
    if(d1<=0&&d2<=0){qx=ax;qy=ay;qz=az;}
    else{
      const bpx=px-V[j],bpy=py-V[j+1],bpz=pz-V[j+2];
      const d3=abx*bpx+aby*bpy+abz*bpz,d4=acx*bpx+acy*bpy+acz*bpz;
      if(d3>=0&&d4<=d3){qx=V[j];qy=V[j+1];qz=V[j+2];}
      else{
        const vc=d1*d4-d3*d2;
        if(vc<=0&&d1>=0&&d3<=0){const v=d1/(d1-d3);qx=ax+v*abx;qy=ay+v*aby;qz=az+v*abz;}
        else{
          const cpx=px-V[k],cpy=py-V[k+1],cpz=pz-V[k+2];
          const d5=abx*cpx+aby*cpy+abz*cpz,d6=acx*cpx+acy*cpy+acz*cpz;
          if(d6>=0&&d5<=d6){qx=V[k];qy=V[k+1];qz=V[k+2];}
          else{
            const vb=d5*d2-d1*d6;
            if(vb<=0&&d2>=0&&d6<=0){const w=d2/(d2-d6);qx=ax+w*acx;qy=ay+w*acy;qz=az+w*acz;}
            else{
              const va=d3*d6-d5*d4;
              if(va<=0&&(d4-d3)>=0&&(d5-d6)>=0){
                const w=(d4-d3)/((d4-d3)+(d5-d6));
                qx=V[j]+w*(V[k]-V[j]);qy=V[j+1]+w*(V[k+1]-V[j+1]);qz=V[j+2]+w*(V[k+2]-V[j+2]);
              }else{
                const den=1/(va+vb+vc),v=vb*den,w=vc*den;
                qx=ax+abx*v+acx*w;qy=ay+aby*v+acy*w;qz=az+abz*v+acz*w;
              }
            }
          }
        }
      }
    }
    QX=qx;QY=qy;QZ=qz;
    const dx=px-qx,dy=py-qy,dz=pz-qz;return dx*dx+dy*dy+dz*dz;
  }
  function boxD2(n,px,py,pz){
    const o6=n*6;let d=0,v;
    v=nb[o6]-px;if(v>0)d+=v*v;else{v=px-nb[o6+3];if(v>0)d+=v*v;}
    v=nb[o6+1]-py;if(v>0)d+=v*v;else{v=py-nb[o6+4];if(v>0)d+=v*v;}
    v=nb[o6+2]-pz;if(v>0)d+=v*v;else{v=pz-nb[o6+5];if(v>0)d+=v*v;}
    return d;
  }
  /* (px,py,pz) küre merkezine bound2'den DAHA yakın en yakın üçgeni döndürür (yoksa -1).
     Yalnızca p'nin 1-halka komşuluğundaki (ed2 <= FR2) düz/yumuşak faset kırılmalarını (normal <= 30°, teğetsel açı <= 14°) atlar. */
  function closestInside(px,py,pz,bound2,skipT){
    let best=bound2,bt=-1,sp=0;stack[sp++]=0;
    while(sp){
      const n=stack[--sp];
      if(boxD2(n,px,py,pz)>=best)continue;
      if(nl[n]<0){
        const s=nr[n],e=s+nc[n];
        for(let i=s;i<e;i++){
          const t=idx[i];if(t===skipT)continue;
          if(activeVertex>=0&&(F[t*3]===activeVertex||F[t*3+1]===activeVertex||F[t*3+2]===activeVertex))continue;
          const d=ptTri(px,py,pz,t);
          if(d<best){
            if(FR2>0&&TN[t*3]*FNX+TN[t*3+1]*FNY+TN[t*3+2]*FNZ>=.866){
              const ex=QX-FX,ey=QY-FY,ez=QZ-FZ,ed2=ex*ex+ey*ey+ez*ez;
              if(ed2<=FR2){
                const nd=-(ex*FNX+ey*FNY+ez*FNZ);
                if(nd*nd<=.065*ed2)continue;
              }
            }
            best=d;bt=t;
          }
        }
      }else{
        const L=nl[n],R=nr[n],dl=boxD2(L,px,py,pz),dr=boxD2(R,px,py,pz);
        if(dl<dr){stack[sp++]=R;stack[sp++]=L;}else{stack[sp++]=L;stack[sp++]=R;}
      }
    }
    if(bt>=0)ptTri(px,py,pz,bt);
    return bt;
  }
  function rayBox(n,ox,oy,oz,ix,iy,iz,tmax){
    const o6=n*6;
    let t0=0,t1=tmax,a=(nb[o6]-ox)*ix,b=(nb[o6+3]-ox)*ix;
    if(a>b){const q=a;a=b;b=q;}if(a>t0)t0=a;if(b<t1)t1=b;if(t0>t1)return false;
    a=(nb[o6+1]-oy)*iy;b=(nb[o6+4]-oy)*iy;if(a>b){const q=a;a=b;b=q;}if(a>t0)t0=a;if(b<t1)t1=b;if(t0>t1)return false;
    a=(nb[o6+2]-oz)*iz;b=(nb[o6+5]-oz)*iz;if(a>b){const q=a;a=b;b=q;}if(a>t0)t0=a;if(b<t1)t1=b;
    return t0<=t1;
  }
  function rayTri(ox,oy,oz,dx,dy,dz,t){
    const i=F[t*3]*3,j=F[t*3+1]*3,k=F[t*3+2]*3;
    const ax=V[i],ay=V[i+1],az=V[i+2],e1x=V[j]-ax,e1y=V[j+1]-ay,e1z=V[j+2]-az,e2x=V[k]-ax,e2y=V[k+1]-ay,e2z=V[k+2]-az;
    const px=dy*e2z-dz*e2y,py=dz*e2x-dx*e2z,pz=dx*e2y-dy*e2x,det=e1x*px+e1y*py+e1z*pz;
    if(det>-1e-18&&det<1e-18)return -1;
    const inv=1/det,tx=ox-ax,ty=oy-ay,tz=oz-az,u=(tx*px+ty*py+tz*pz)*inv;
    if(u<-1e-9||u>1+1e-9)return -1;
    const qx=ty*e1z-tz*e1y,qy=tz*e1x-tx*e1z,qz=tx*e1y-ty*e1x,v=(dx*qx+dy*qy+dz*qz)*inv;
    if(v<-1e-9||u+v>1+1e-9)return -1;
    return (e2x*qx+e2y*qy+e2z*qz)*inv;
  }
  function rayFirst(ox,oy,oz,dx,dy,dz,tmax,skipT){
    const ix=Math.abs(dx)>1e-300?1/dx:1e300,iy=Math.abs(dy)>1e-300?1/dy:1e300,iz=Math.abs(dz)>1e-300?1/dz:1e300;
    let best=tmax,hitT=-1,sp=0;stack[sp++]=0;const tmin=1e-7*diag;
    while(sp){
      const n=stack[--sp];if(!rayBox(n,ox,oy,oz,ix,iy,iz,best))continue;
      if(nl[n]<0){
        const s=nr[n],e=s+nc[n];
        for(let i=s;i<e;i++){
          const t=idx[i];if(t===skipT)continue;
          const h=rayTri(ox,oy,oz,dx,dy,dz,t);if(h>tmin&&h<best){best=h;hitT=t;}
        }
      }else{stack[sp++]=nl[n];stack[sp++]=nr[n];}
    }
    RHT=hitT;
    return hitT>=0?best:-1;
  }
  function rayCount(ox,oy,oz,dx,dy,dz,exceptComp,comp){
    const ix=1/dx,iy=1/dy,iz=1/dz;let cnt=0,sp=0;stack[sp++]=0;
    while(sp){
      const n=stack[--sp];if(!rayBox(n,ox,oy,oz,ix,iy,iz,1e300))continue;
      if(nl[n]<0){
        const s=nr[n],e=s+nc[n];
        for(let i=s;i<e;i++){const t=idx[i];if(comp[t]===exceptComp)continue;if(rayTri(ox,oy,oz,dx,dy,dz,t)>0)cnt++;}
      }else{stack[sp++]=nl[n];stack[sp++]=nr[n];}
    }
    return cnt;
  }

  /* ---------- bileşenler, açık kenarlar ve yön (dış/iç) ---------- */
  say('Yüzey yönleri doğrulanıyor');
  const par=new Int32Array(nv);for(let i=0;i<nv;i++)par[i]=i;
  const find=a=>{while(par[a]!==a){par[a]=par[par[a]];a=par[a];}return a;};
  for(let t=0;t<nT;t++){const a=find(F[t*3]),b=find(F[t*3+1]),c=find(F[t*3+2]);if(a!==b)par[a]=b;const d=find(b);if(d!==find(c))par[find(c)]=d;}
  const compOfRoot=new Map(),comp=new Int32Array(nT);let nComp=0;
  for(let t=0;t<nT;t++){const r=find(F[t*3]);let c=compOfRoot.get(r);if(c===undefined){c=nComp++;compOfRoot.set(r,c);}comp[t]=c;}

  let boundary=0,nonManifold=0,inconsistent=0,orientationFacesFixed=0;
  const compBoundary=new Int32Array(nComp),issueVertex=new Uint8Array(nv);
  {
    const edgeMap=new Map(),adj=new Int32Array(F.length).fill(-1);
    for(let t=0;t<nT;t++)for(let k=0;k<3;k++){
      const slot=t*3+k,a=F[slot],b=F[t*3+(k+1)%3],key=a<b?a*nv+b:b*nv+a;
      let edge=edgeMap.get(key);
      if(!edge){edge={count:0,first:slot,second:-1};edgeMap.set(key,edge);}
      edge.count++;if(edge.count===2)edge.second=slot;
    }
    for(const [key,edge] of edgeMap){
      const a=Math.floor(key/nv),b=key%nv,c=comp[Math.floor(edge.first/3)];
      if(edge.count===1){boundary++;compBoundary[c]++;issueVertex[a]=issueVertex[b]=1;}
      else if(edge.count>2){nonManifold++;compBoundary[c]++;issueVertex[a]=issueVertex[b]=1;}
      else{
        const x=edge.first,y=edge.second;adj[x]=y;adj[y]=x;
        if(F[x]===F[y])inconsistent++;
      }
    }
    if(inconsistent){
      const flips=new Int8Array(nT).fill(-1),queue=new Uint32Array(nT);
      for(let first=0;first<nT;first++){
        if(flips[first]>=0)continue;let head=0,tail=0,nflip=0;queue[tail++]=first;flips[first]=0;
        while(head<tail){const t=queue[head++];for(let k=0;k<3;k++){
          const slot=t*3+k,other=adj[slot];if(other<0)continue;
          const next=Math.floor(other/3),same=F[slot]===F[other],want=flips[t]^(same?1:0);
          if(flips[next]<0){flips[next]=want;nflip+=want;queue[tail++]=next;}
        }}
        const invert=nflip>tail/2?1:0;
        for(let i=0;i<tail;i++)if(flips[queue[i]]^invert){const q=queue[i]*3,tmp=F[q+1];F[q+1]=F[q+2];F[q+2]=tmp;orientationFacesFixed++;}
      }
    }
  }

  const vol=new Float64Array(nComp),probe=new Int32Array(nComp).fill(-1);
  for(let t=0;t<nT;t++){
    const a=F[t*3]*3,b=F[t*3+1]*3,c=F[t*3+2]*3;
    const ax=V[a]-bx0,ay=V[a+1]-by0,az=V[a+2]-bz0,bx=V[b]-bx0,by=V[b+1]-by0,bz=V[b+2]-bz0,cx=V[c]-bx0,cy=V[c+1]-by0,cz=V[c+2]-bz0;
    vol[comp[t]]+=ax*(by*cz-bz*cy)+ay*(bz*cx-bx*cz)+az*(bx*cy-by*cx);
    if(probe[comp[t]]<0)probe[comp[t]]=t;
  }
  let flipped=0;
  const dirx=.5773502691896,diry=.5773502691896+.0137,dirz=.5773502691896-.0291,dl=Math.hypot(dirx,diry,dirz);
  const flipComp=new Uint8Array(nComp);
  for(let c=0;c<nComp;c++){
    if(compBoundary[c]>0)continue; // Açık yüzeylerde referans noktalı hacim işareti keyfidir; orijinal STL normalini koru
    let parity=0;
    if(nComp>1){const t=probe[c],a=F[t*3]*3;parity=rayCount(V[a],V[a+1],V[a+2],dirx/dl,diry/dl,dirz/dl,c,comp)&1;}
    if((vol[c]<0)!==(parity===1)){flipComp[c]=1;flipped++;}
  }
  if(flipped)for(let t=0;t<nT;t++)if(flipComp[comp[t]]){const q=F[t*3+1];F[t*3+1]=F[t*3+2];F[t*3+2]=q;}

  const TN=new Float64Array(nT*3),TA=new Float64Array(nT),TH=new Float32Array(nT);
  for(let t=0;t<nT;t++){
    const a=F[t*3]*3,b=F[t*3+1]*3,c=F[t*3+2]*3;
    const ux=V[b]-V[a],uy=V[b+1]-V[a+1],uz=V[b+2]-V[a+2],vx=V[c]-V[a],vy=V[c+1]-V[a+1],vz=V[c+2]-V[a+2];
    const wx=V[c]-V[b],wy=V[c+1]-V[b+1],wz=V[c+2]-V[b+2];
    const nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx,l=Math.hypot(nx,ny,nz)||1;
    TN[t*3]=nx/l;TN[t*3+1]=ny/l;TN[t*3+2]=nz/l;TA[t]=l/2;
    TH[t]=Math.max(Math.hypot(ux,uy,uz),Math.hypot(vx,vy,vz),Math.hypot(wx,wy,wz));
  }

  /* ---------- köşe komşuluğu ve yumuşak/keskin köşe sınıflandırması ---------- */
  const off=new Uint32Array(nv+1);for(let i=0;i<F.length;i++)off[F[i]+1]++;
  for(let i=0;i<nv;i++)off[i+1]+=off[i];
  const cur=off.slice(0,nv),inc=new Uint32Array(F.length),vArea=new Float64Array(nv);
  for(let t=0;t<nT;t++)for(let k=0;k<3;k++){const v=F[t*3+k];inc[cur[v]++]=t;vArea[v]+=TA[t]/3;}
  const meanEdge=new Float64Array(nv),VN=new Float64Array(nv*3),smooth=new Uint8Array(nv);
  for(let v=0;v<nv;v++){
    let el=0,ec=0,sx=0,sy=0,sz=0;const px=V[v*3],py=V[v*3+1],pz=V[v*3+2];
    for(let q=off[v];q<off[v+1];q++){
      const t=inc[q];let k=0;while(F[t*3+k]!==v)k++;
      const a=F[t*3+(k+1)%3]*3,b=F[t*3+(k+2)%3]*3;
      const e1x=V[a]-px,e1y=V[a+1]-py,e1z=V[a+2]-pz,e2x=V[b]-px,e2y=V[b+1]-py,e2z=V[b+2]-pz;
      const l1=Math.hypot(e1x,e1y,e1z),l2=Math.hypot(e2x,e2y,e2z);el+=l1+l2;ec+=2;
      const ang=Math.acos(Math.max(-1,Math.min(1,(e1x*e2x+e1y*e2y+e1z*e2z)/((l1*l2)||1))));
      sx+=TN[t*3]*ang;sy+=TN[t*3+1]*ang;sz+=TN[t*3+2]*ang;
    }
    meanEdge[v]=ec?el/ec:0;
    const l=Math.hypot(sx,sy,sz);if(l<1e-12)continue;
    sx/=l;sy/=l;sz/=l;VN[v*3]=sx;VN[v*3+1]=sy;VN[v*3+2]=sz;
    let ok=1;for(let q=off[v];q<off[v+1];q++){const t=inc[q];if(TN[t*3]*sx+TN[t*3+1]*sy+TN[t*3+2]*sz<.82){ok=0;break;}}
    smooth[v]=ok;
  }

  /* ---------- büzülen küre (Shrinking Ball Medial Axis) ---------- */
  let activeVertex=-1,ballEvaluations=0;
  let LAST_T=-1,LAST_QX=0,LAST_QY=0,LAST_QZ=0;
  function shrink(px,py,pz,nx,ny,nz,rStart,skipT){
    let r=Math.min(rStart,rCap);
    const floor=1e-9*diag;
    LAST_T=-1;
    for(let it=0;it<maxIterations;it++){
      const tol=Math.max(relativeTolerance*r,1e-9*diag),lim=r-tol;if(lim<=floor)break;
      const t=closestInside(px+nx*r,py+ny*r,pz+nz*r,lim*lim,skipT);
      if(t<0)break;
      LAST_T=t;LAST_QX=QX;LAST_QY=QY;LAST_QZ=QZ;
      const dx=QX-px,dy=QY-py,dz=QZ-pz,nd=dx*nx+dy*ny+dz*nz,dd=dx*dx+dy*dy+dz*dz;
      const rn=nd>1e-12*diag?dd/(2*nd):r*.5;
      if(!(rn<r-tol*.5))break;
      r=Math.max(rn,floor);
    }
    return r;
  }
  function ballAt(px,py,pz,nx,ny,nz,skipT,hEx){
    ballEvaluations++;
    const h=rayFirst(px,py,pz,nx,ny,nz,Math.max(rCap*2,diag),skipT);
    const rht=RHT;
    if(h<0&&compBoundary[comp[skipT]]>0){
      FX=px;FY=py;FZ=pz;FNX=-nx;FNY=-ny;FNZ=-nz;FR2=hEx*hEx;
      const r=shrink(px,py,pz,nx,ny,nz,rCap,skipT);
      FR2=-1;
      if(LAST_T<0)return 0;
      const cx=px+nx*r,cy=py+ny*r,cz=pz+nz*r;
      const outDot=(LAST_QX-cx)*TN[LAST_T*3]+(LAST_QY-cy)*TN[LAST_T*3+1]+(LAST_QZ-cz)*TN[LAST_T*3+2];
      const nDot=TN[LAST_T*3]*FNX+TN[LAST_T*3+1]*FNY+TN[LAST_T*3+2]*FNZ;
      if(outDot<-.2*r||nDot>.35)return 0;
      return r;
    }
    const rInit=h>0?Math.min(h*.5,rCap):rCap;
    FX=px;FY=py;FZ=pz;FNX=-nx;FNY=-ny;FNZ=-nz;FR2=hEx*hEx;
    const r=shrink(px,py,pz,nx,ny,nz,rInit,skipT);
    FR2=-1;
    if(compBoundary[comp[skipT]]>0&&h>0&&rht>=0){
      const rayHitDot=nx*TN[rht*3]+ny*TN[rht*3+1]+nz*TN[rht*3+2];
      if(rayHitDot<-.35){
        if(LAST_T<0)return 0;
        const cx=px+nx*r,cy=py+ny*r,cz=pz+nz*r;
        const outDot=(LAST_QX-cx)*TN[LAST_T*3]+(LAST_QY-cy)*TN[LAST_T*3+1]+(LAST_QZ-cz)*TN[LAST_T*3+2];
        if(outDot<-.25*r)return 0;
      }
    }
    return r;
  }

  /* ---------- üçgen içi örnekleme ve nTop medial teğet küre hesabı ---------- */
  const cornerR=new Float32Array(nT*3),triR=new Float32Array(nT);
  const maxBalls=coverMode?nT*(quality===1?4:quality===2?4:9):0;
  const BX=coverMode?new Float32Array(maxBalls*4):null;
  let nb2=0,lastPct=-1;

  for(let t=0;t<nT;t++){
    if(TA[t]<=1e-16*diag*diag)continue;
    const i0=F[t*3],i1=F[t*3+1],i2=F[t*3+2];
    const a=i0*3,b=i1*3,c=i2*3;
    const nx=-TN[t*3],ny=-TN[t*3+1],nz=-TN[t*3+2];
    const ht=TH[t],hEx=1.35*ht;
    const cx=(V[a]+V[b]+V[c])/3,cy=(V[a+1]+V[b+1]+V[c+1])/3,cz=(V[a+2]+V[b+2]+V[c+2])/3;
    const rc=ballAt(cx,cy,cz,nx,ny,nz,t,hEx);
    let tr=rc>0?rc:0;
    if(coverMode&&rc>0){BX[nb2*4]=cx+nx*rc;BX[nb2*4+1]=cy+ny*rc;BX[nb2*4+2]=cz+nz*rc;BX[nb2*4+3]=rc;nb2++;}
    const vs=[i0,i1,i2];
    if(quality===1){
      for(let k=0;k<3;k++){
        if(!smooth[vs[k]]){
          const al=Math.min(.14,Math.max(.02,.015/(ht||1))),be=1-2*al;
          const u0=k===0?be:al,u1=k===1?be:al,u2=k===2?be:al;
          const px=u0*V[a]+u1*V[b]+u2*V[c],py=u0*V[a+1]+u1*V[b+1]+u2*V[c+1],pz=u0*V[a+2]+u1*V[b+2]+u2*V[c+2];
          const rk=ballAt(px,py,pz,nx,ny,nz,t,hEx);
          cornerR[t*3+k]=rk;
          if(rk>tr)tr=rk;
          if(coverMode&&rk>0){BX[nb2*4]=px+nx*rk;BX[nb2*4+1]=py+ny*rk;BX[nb2*4+2]=pz+nz*rk;BX[nb2*4+3]=rk;nb2++;}
        }else{
          cornerR[t*3+k]=rc;
        }
      }
    }else{
      for(let k=0;k<3;k++){
        const isSm=smooth[vs[k]];
        const al=isSm?.15:Math.min(.14,Math.max(.02,.015/(ht||1))),be=1-2*al;
        const u0=k===0?be:al,u1=k===1?be:al,u2=k===2?be:al;
        const px=u0*V[a]+u1*V[b]+u2*V[c],py=u0*V[a+1]+u1*V[b+1]+u2*V[c+1],pz=u0*V[a+2]+u1*V[b+2]+u2*V[c+2];
        const rk=ballAt(px,py,pz,nx,ny,nz,t,hEx);
        if(rk>tr)tr=rk;
        cornerR[t*3+k]=(!isSm&&rc>0&&rk>0)?(.9*rk+.1*rc):rk;
        if(coverMode&&rk>0){BX[nb2*4]=px+nx*rk;BX[nb2*4+1]=py+ny*rk;BX[nb2*4+2]=pz+nz*rk;BX[nb2*4+3]=rk;nb2++;}
      }
      if(quality===3){
        const extra=[[0.44,0.44,0.12],[0.44,0.12,0.44],[0.12,0.44,0.44],[0.52,0.24,0.24],[0.24,0.52,0.24]];
        let sumE=rc>0?rc:0,cntE=rc>0?1:0;
        for(const [u0,u1,u2] of extra){
          const px=u0*V[a]+u1*V[b]+u2*V[c],py=u0*V[a+1]+u1*V[b+1]+u2*V[c+1],pz=u0*V[a+2]+u1*V[b+2]+u2*V[c+2];
          const re=ballAt(px,py,pz,nx,ny,nz,t,hEx);
          if(re>0){if(re>tr)tr=re;sumE+=re;cntE++;if(coverMode){BX[nb2*4]=px+nx*re;BX[nb2*4+1]=py+ny*re;BX[nb2*4+2]=pz+nz*re;BX[nb2*4+3]=re;nb2++;}}
        }
        if(cntE>0){
          const avgE=sumE/cntE;
          for(let k=0;k<3;k++)if(smooth[vs[k]]&&cornerR[t*3+k]>0)cornerR[t*3+k]=.65*cornerR[t*3+k]+.35*avgE;
        }
      }
    }
    triR[t]=tr;
    const pct=Math.floor(t/nT*20);if(pct!==lastPct){lastPct=pct;say('İç küreler hesaplanıyor · %'+pct*5);}
  }

  const values=new Float32Array(nv).fill(NaN);
  if(coverMode&&nb2>0){
    say('Kapsayan küre haritası oluşturuluyor');
    const nBl=nb2,bidx=new Uint32Array(nBl),bcen=new Float64Array(nBl*3);
    for(let i=0;i<nBl;i++){bidx[i]=i;bcen[i*3]=BX[i*4];bcen[i*3+1]=BX[i*4+1];bcen[i*3+2]=BX[i*4+2];}
    const bcap=nBl+16,bb=new Float64Array(bcap*6),bmx=new Float32Array(bcap),bl=new Int32Array(bcap),br=new Int32Array(bcap),bc2=new Int32Array(bcap);
    let bnodes=1;
    {
      const st=[0,0,nBl];
      while(st.length){
        const r=st.pop(),l=st.pop(),id=st.pop();
        let x0=Infinity,y0=Infinity,z0=Infinity,x1=-Infinity,y1=-Infinity,z1=-Infinity,mr=0,cx0=Infinity,cy0=Infinity,cz0=Infinity,cx1=-Infinity,cy1=-Infinity,cz1=-Infinity;
        for(let i=l;i<r;i++){
          const k=bidx[i]*4,x=BX[k],y=BX[k+1],z=BX[k+2],rr=BX[k+3];
          if(x-rr<x0)x0=x-rr;if(x+rr>x1)x1=x+rr;if(y-rr<y0)y0=y-rr;if(y+rr>y1)y1=y+rr;if(z-rr<z0)z0=z-rr;if(z+rr>z1)z1=z+rr;
          if(rr>mr)mr=rr;
          if(x<cx0)cx0=x;if(x>cx1)cx1=x;if(y<cy0)cy0=y;if(y>cy1)cy1=y;if(z<cz0)cz0=z;if(z>cz1)cz1=z;
        }
        bb[id*6]=x0;bb[id*6+1]=y0;bb[id*6+2]=z0;bb[id*6+3]=x1;bb[id*6+4]=y1;bb[id*6+5]=z1;bmx[id]=mr;
        if(r-l<=8){bl[id]=-1;br[id]=l;bc2[id]=r-l;continue;}
        const dx=cx1-cx0,dy=cy1-cy0,dz=cz1-cz0,axis=dx>=dy&&dx>=dz?0:dy>=dz?1:2,m=(l+r)>>1;
        qselect(bidx,bcen,l,r,m,axis);
        const L=bnodes++,R=bnodes++;bl[id]=L;br[id]=R;st.push(L,l,m,R,m,r);
      }
    }
    function ballQuery(px,py,pz,smax,start){
      let best=start,sp=0;stack[sp++]=0;
      while(sp){
        const n=stack[--sp];
        if(bmx[n]<=best)continue;
        const o6=n*6;
        if(px<bb[o6]-smax||px>bb[o6+3]+smax||py<bb[o6+1]-smax||py>bb[o6+4]+smax||pz<bb[o6+2]-smax||pz>bb[o6+5]+smax)continue;
        if(bl[n]<0){
          const s=br[n],e=s+bc2[n];
          for(let i=s;i<e;i++){
            const k=bidx[i]*4,r=BX[k+3];if(r<=best)continue;
            const dx=px-BX[k],dy=py-BX[k+1],dz=pz-BX[k+2],lim=r+smax;
            if(dx*dx+dy*dy+dz*dz<=lim*lim*(1+1e-7))best=r;
          }
        }else{
          const L=bl[n],R=br[n];
          if(bmx[L]>bmx[R]){stack[sp++]=R;stack[sp++]=L;}else{stack[sp++]=L;stack[sp++]=R;}
        }
      }
      return best;
    }
    for(let v=0;v<nv;v++){
      const r0=ballQuery(V[v*3],V[v*3+1],V[v*3+2],1e-3*meanEdge[v]+1e-6*diag,0);
      if(r0>0)values[v]=Math.min(2*r0,maxSearch);
    }
  }else{
    say('Medial kalınlık haritası oluşturuluyor');
    let maxValence=1;for(let v=0;v<nv;v++)maxValence=Math.max(maxValence,off[v+1]-off[v]);
    const scratch=new Float64Array(maxValence);
    for(let v=0;v<nv;v++){
      let n=0;
      for(let q=off[v];q<off[v+1];q++){
        const t=inc[q];let k=0;while(F[t*3+k]!==v)k++;
        const r=cornerR[t*3+k];
        if(r>0)scratch[n++]=r;
      }
      if(!n)continue;
      if(n===1){values[v]=Math.min(2*scratch[0],maxSearch);continue;}
      const sub=scratch.subarray(0,n).sort();
      const med=sub[n>>1],capHi=med*(quality===1?1.35:2.0),capLo=med*(quality===1?0:0.85); /* q1: eski kural (az örnekte alt kırpma ortalamayı şişiriyor) */
      let sum=0;
      for(let i=0;i<n;i++)sum+=Math.max(capLo,Math.min(sub[i],capHi));
      values[v]=Math.min(2*(sum/n),maxSearch);
    }
  }

  const estimatorDifference=new Float32Array(nv).fill(NaN);
  if(quality>1){
    say('Köşe ölçümleriyle tutarlılık kontrol ediliyor');
    for(let v=0;v<nv;v++){
      if(!smooth[v]||!Number.isFinite(values[v]))continue;
      const ratio=values[v]/Math.max(meanEdge[v],1e-12),blend=Math.max(0,Math.min(1,(ratio-1)/3));
      if(blend===0)continue;
      const q=v*3,t=inc[off[v]];
      if(Math.hypot(VN[q],VN[q+1],VN[q+2])<.5)continue;
      activeVertex=v;
      const radius=ballAt(V[q],V[q+1],V[q+2],-VN[q],-VN[q+1],-VN[q+2],t,0);
      activeVertex=-1;
      if(radius>0){
        estimatorDifference[v]=Math.abs(2*radius-values[v]);
        values[v]=values[v]*(1-blend)+2*radius*blend;
      }
    }
  }
  // 0 = no measurement; 1 = measured; 2 = search-limited lower bound.
  // A search cap is not an exact wall thickness. No neighbor filling is used.
  const measurementStatus=new Uint8Array(nv),lowerBounds=new Float32Array(nv).fill(NaN);
  let validCount=0,limitCount=0;
  for(let v=0;v<nv;v++){
    if(!Number.isFinite(values[v]))continue;
    if(values[v]>=2*rCap*(1-4*relativeTolerance)){
      measurementStatus[v]=2;lowerBounds[v]=2*rCap;values[v]=NaN;limitCount++;
    }else{measurementStatus[v]=1;validCount++;}
  }

  /* ---------- çıktı: orijinal köşe sırasına geri eşle ---------- */
  const display=Float32Array.from(values);
  for(let pass=0;pass<(o&&o.smoothSteps||0);pass++){
    const next=Float32Array.from(display);
    for(let i=0;i<nv;i++){
      if(!Number.isFinite(values[i]))continue;let sum=display[i]*2,n=2;
      for(let q=off[i];q<off[i+1];q++){const f=inc[q]*3;for(let k=0;k<3;k++){const w=F[f+k];if(w!==i&&Number.isFinite(display[w])){sum+=display[w];n++;}}}
      next[i]=Math.max(values[i]*.9,Math.min(values[i]*1.1,sum/n));
    }
    display.set(next);
  }
  const outN=V0.length/3,out=new Float32Array(outN),visual=new Float32Array(outN),area=new Float32Array(outN),status=new Uint8Array(outN),bounds=new Float32Array(outN),difference=new Float32Array(outN),issues=new Uint8Array(outN),freq=new Uint32Array(nv);
  for(let i=0;i<outN;i++)freq[remap[i]]++;
  for(let i=0;i<outN;i++){const v=remap[i];out[i]=values[v];visual[i]=display[v];area[i]=vArea[v]/freq[v];status[i]=measurementStatus[v];bounds[i]=lowerBounds[v];difference[i]=estimatorDifference[v];issues[i]=issueVertex[v];}
  say('Ölçüm tamamlandı');
  return {values:out,display:visual,weights:area,status,lowerBounds:bounds,estimatorDifference:difference,topologyIssues:issues,validCount,totalCount:nv,limitCount,method:o&&o.method||'sphere',algorithmVersion:'4.8',boundaryEdges:boundary,nonManifoldEdges:nonManifold,inconsistentEdges:inconsistent,orientationFacesFixed,orientationFixed:flipped,balls:ballEvaluations};
}


function cmThicknessSphereLegacy(V0,F0,o,say){
  // Archived v4.7 estimator, for reproducible comparisons.
  say=say||(()=>{});
  say('Yüzey hazırlanıyor');
  const W=cuExactMesh(V0,F0),V=W.V,F=W.F,remap=W.remap;
  const nv=V.length/3,nT=F.length/3;
  if(!nT)throw new Error('Analiz için geçerli bir STL seçin.');
  let bx0=Infinity,by0=Infinity,bz0=Infinity,bx1=-Infinity,by1=-Infinity,bz1=-Infinity;
  for(let i=0;i<nv;i++){const x=V[i*3],y=V[i*3+1],z=V[i*3+2];
    if(x<bx0)bx0=x;if(x>bx1)bx1=x;if(y<by0)by0=y;if(y>by1)by1=y;if(z<bz0)bz0=z;if(z>bz1)bz1=z;}
  const diag=Math.hypot(bx1-bx0,by1-by0,bz1-bz0)||1;
  const maxSearch=Number.isFinite(o&&o.maxSearch)&&o.maxSearch>0?o.maxSearch:diag;
  const rCap=Math.min(maxSearch,diag)/2;
  const quality=Math.max(1,Math.min(3,Number(o&&o.quality)||2));
  const coverMode=false; /* 'sphere_cover' kaldırıldı: test edilen şekillerde köşelerin yarısını ölçemiyor / 49 mm gibi hatalı değer veriyordu */

  /* ---------- üçgen BVH ---------- */
  const tlo=new Float64Array(nT*3),thi=new Float64Array(nT*3),tcen=new Float64Array(nT*3);
  for(let t=0;t<nT;t++){
    const a=F[t*3]*3,b=F[t*3+1]*3,c=F[t*3+2]*3;
    for(let k=0;k<3;k++){
      const p=V[a+k],q=V[b+k],r=V[c+k],lo=Math.min(p,q,r),hi=Math.max(p,q,r);
      tlo[t*3+k]=lo;thi[t*3+k]=hi;tcen[t*3+k]=(lo+hi)*.5;
    }
  }
  const idx=new Uint32Array(nT);for(let i=0;i<nT;i++)idx[i]=i;
  const cap=nT+16,nb=new Float64Array(cap*6),nl=new Int32Array(cap),nr=new Int32Array(cap),nc=new Int32Array(cap);
  function qselect(arr,key,l,r,k,axis){
    let lo=l,hi=r-1;
    while(lo<hi){
      const pv=key[arr[(lo+hi)>>1]*3+axis];let i=lo,j=hi;
      while(i<=j){
        while(key[arr[i]*3+axis]<pv)i++;
        while(key[arr[j]*3+axis]>pv)j--;
        if(i<=j){const t=arr[i];arr[i]=arr[j];arr[j]=t;i++;j--;}
      }
      if(k<=j)hi=j;else if(k>=i)lo=i;else break;
    }
  }
  let nodeCount=1;
  {
    const st=[0,0,nT];
    while(st.length){
      const r=st.pop(),l=st.pop(),id=st.pop();
      let x0=Infinity,y0=Infinity,z0=Infinity,x1=-Infinity,y1=-Infinity,z1=-Infinity,cx0=Infinity,cy0=Infinity,cz0=Infinity,cx1=-Infinity,cy1=-Infinity,cz1=-Infinity;
      for(let i=l;i<r;i++){
        const t=idx[i]*3;
        if(tlo[t]<x0)x0=tlo[t];if(tlo[t+1]<y0)y0=tlo[t+1];if(tlo[t+2]<z0)z0=tlo[t+2];
        if(thi[t]>x1)x1=thi[t];if(thi[t+1]>y1)y1=thi[t+1];if(thi[t+2]>z1)z1=thi[t+2];
        const a=tcen[t],b=tcen[t+1],c=tcen[t+2];
        if(a<cx0)cx0=a;if(a>cx1)cx1=a;if(b<cy0)cy0=b;if(b>cy1)cy1=b;if(c<cz0)cz0=c;if(c>cz1)cz1=c;
      }
      nb[id*6]=x0;nb[id*6+1]=y0;nb[id*6+2]=z0;nb[id*6+3]=x1;nb[id*6+4]=y1;nb[id*6+5]=z1;
      if(r-l<=4){nl[id]=-1;nr[id]=l;nc[id]=r-l;continue;}
      const dx=cx1-cx0,dy=cy1-cy0,dz=cz1-cz0,axis=dx>=dy&&dx>=dz?0:dy>=dz?1:2,m=(l+r)>>1;
      qselect(idx,tcen,l,r,m,axis);
      const L=nodeCount++,R=nodeCount++;nl[id]=L;nr[id]=R;
      st.push(L,l,m,R,m,r);
    }
  }
  const stack=new Int32Array(256);
  let QX=0,QY=0,QZ=0,FX=0,FY=0,FZ=0,FNX=0,FNY=0,FNZ=0,FR2=-1,RHT=-1;
  function ptTri(px,py,pz,t){
    const i=F[t*3]*3,j=F[t*3+1]*3,k=F[t*3+2]*3;
    const ax=V[i],ay=V[i+1],az=V[i+2];
    const abx=V[j]-ax,aby=V[j+1]-ay,abz=V[j+2]-az,acx=V[k]-ax,acy=V[k+1]-ay,acz=V[k+2]-az;
    const apx=px-ax,apy=py-ay,apz=pz-az;
    const d1=abx*apx+aby*apy+abz*apz,d2=acx*apx+acy*apy+acz*apz;
    let qx,qy,qz;
    if(d1<=0&&d2<=0){qx=ax;qy=ay;qz=az;}
    else{
      const bpx=px-V[j],bpy=py-V[j+1],bpz=pz-V[j+2];
      const d3=abx*bpx+aby*bpy+abz*bpz,d4=acx*bpx+acy*bpy+acz*bpz;
      if(d3>=0&&d4<=d3){qx=V[j];qy=V[j+1];qz=V[j+2];}
      else{
        const vc=d1*d4-d3*d2;
        if(vc<=0&&d1>=0&&d3<=0){const v=d1/(d1-d3);qx=ax+v*abx;qy=ay+v*aby;qz=az+v*abz;}
        else{
          const cpx=px-V[k],cpy=py-V[k+1],cpz=pz-V[k+2];
          const d5=abx*cpx+aby*cpy+abz*cpz,d6=acx*cpx+acy*cpy+acz*cpz;
          if(d6>=0&&d5<=d6){qx=V[k];qy=V[k+1];qz=V[k+2];}
          else{
            const vb=d5*d2-d1*d6;
            if(vb<=0&&d2>=0&&d6<=0){const w=d2/(d2-d6);qx=ax+w*acx;qy=ay+w*acy;qz=az+w*acz;}
            else{
              const va=d3*d6-d5*d4;
              if(va<=0&&(d4-d3)>=0&&(d5-d6)>=0){
                const w=(d4-d3)/((d4-d3)+(d5-d6));
                qx=V[j]+w*(V[k]-V[j]);qy=V[j+1]+w*(V[k+1]-V[j+1]);qz=V[j+2]+w*(V[k+2]-V[j+2]);
              }else{
                const den=1/(va+vb+vc),v=vb*den,w=vc*den;
                qx=ax+abx*v+acx*w;qy=ay+aby*v+acy*w;qz=az+abz*v+acz*w;
              }
            }
          }
        }
      }
    }
    QX=qx;QY=qy;QZ=qz;
    const dx=px-qx,dy=py-qy,dz=pz-qz;return dx*dx+dy*dy+dz*dz;
  }
  function boxD2(n,px,py,pz){
    const o6=n*6;let d=0,v;
    v=nb[o6]-px;if(v>0)d+=v*v;else{v=px-nb[o6+3];if(v>0)d+=v*v;}
    v=nb[o6+1]-py;if(v>0)d+=v*v;else{v=py-nb[o6+4];if(v>0)d+=v*v;}
    v=nb[o6+2]-pz;if(v>0)d+=v*v;else{v=pz-nb[o6+5];if(v>0)d+=v*v;}
    return d;
  }
  /* (px,py,pz) küre merkezine bound2'den DAHA yakın en yakın üçgeni döndürür (yoksa -1).
     Yalnızca p'nin 1-halka komşuluğundaki (ed2 <= FR2) düz/yumuşak faset kırılmalarını (normal <= 30°, teğetsel açı <= 14°) atlar. */
  function closestInside(px,py,pz,bound2,skipT){
    let best=bound2,bt=-1,sp=0;stack[sp++]=0;
    while(sp){
      const n=stack[--sp];
      if(boxD2(n,px,py,pz)>=best)continue;
      if(nl[n]<0){
        const s=nr[n],e=s+nc[n];
        for(let i=s;i<e;i++){
          const t=idx[i];if(t===skipT)continue;
          const d=ptTri(px,py,pz,t);
          if(d<best){
            if(FR2>0&&TN[t*3]*FNX+TN[t*3+1]*FNY+TN[t*3+2]*FNZ>=.866){
              const ex=QX-FX,ey=QY-FY,ez=QZ-FZ,ed2=ex*ex+ey*ey+ez*ez;
              if(ed2<=FR2){
                const nd=-(ex*FNX+ey*FNY+ez*FNZ);
                if(nd*nd<=.065*ed2)continue;
              }
            }
            best=d;bt=t;
          }
        }
      }else{
        const L=nl[n],R=nr[n],dl=boxD2(L,px,py,pz),dr=boxD2(R,px,py,pz);
        if(dl<dr){stack[sp++]=R;stack[sp++]=L;}else{stack[sp++]=L;stack[sp++]=R;}
      }
    }
    if(bt>=0)ptTri(px,py,pz,bt);
    return bt;
  }
  function rayBox(n,ox,oy,oz,ix,iy,iz,tmax){
    const o6=n*6;
    let t0=0,t1=tmax,a=(nb[o6]-ox)*ix,b=(nb[o6+3]-ox)*ix;
    if(a>b){const q=a;a=b;b=q;}if(a>t0)t0=a;if(b<t1)t1=b;if(t0>t1)return false;
    a=(nb[o6+1]-oy)*iy;b=(nb[o6+4]-oy)*iy;if(a>b){const q=a;a=b;b=q;}if(a>t0)t0=a;if(b<t1)t1=b;if(t0>t1)return false;
    a=(nb[o6+2]-oz)*iz;b=(nb[o6+5]-oz)*iz;if(a>b){const q=a;a=b;b=q;}if(a>t0)t0=a;if(b<t1)t1=b;
    return t0<=t1;
  }
  function rayTri(ox,oy,oz,dx,dy,dz,t){
    const i=F[t*3]*3,j=F[t*3+1]*3,k=F[t*3+2]*3;
    const ax=V[i],ay=V[i+1],az=V[i+2],e1x=V[j]-ax,e1y=V[j+1]-ay,e1z=V[j+2]-az,e2x=V[k]-ax,e2y=V[k+1]-ay,e2z=V[k+2]-az;
    const px=dy*e2z-dz*e2y,py=dz*e2x-dx*e2z,pz=dx*e2y-dy*e2x,det=e1x*px+e1y*py+e1z*pz;
    if(det>-1e-18&&det<1e-18)return -1;
    const inv=1/det,tx=ox-ax,ty=oy-ay,tz=oz-az,u=(tx*px+ty*py+tz*pz)*inv;
    if(u<-1e-9||u>1+1e-9)return -1;
    const qx=ty*e1z-tz*e1y,qy=tz*e1x-tx*e1z,qz=tx*e1y-ty*e1x,v=(dx*qx+dy*qy+dz*qz)*inv;
    if(v<-1e-9||u+v>1+1e-9)return -1;
    return (e2x*qx+e2y*qy+e2z*qz)*inv;
  }
  function rayFirst(ox,oy,oz,dx,dy,dz,tmax,skipT){
    const ix=Math.abs(dx)>1e-300?1/dx:1e300,iy=Math.abs(dy)>1e-300?1/dy:1e300,iz=Math.abs(dz)>1e-300?1/dz:1e300;
    let best=tmax,hitT=-1,sp=0;stack[sp++]=0;const tmin=1e-7*diag;
    while(sp){
      const n=stack[--sp];if(!rayBox(n,ox,oy,oz,ix,iy,iz,best))continue;
      if(nl[n]<0){
        const s=nr[n],e=s+nc[n];
        for(let i=s;i<e;i++){
          const t=idx[i];if(t===skipT)continue;
          const h=rayTri(ox,oy,oz,dx,dy,dz,t);if(h>tmin&&h<best){best=h;hitT=t;}
        }
      }else{stack[sp++]=nl[n];stack[sp++]=nr[n];}
    }
    RHT=hitT;
    return hitT>=0?best:-1;
  }
  function rayCount(ox,oy,oz,dx,dy,dz,exceptComp,comp){
    const ix=1/dx,iy=1/dy,iz=1/dz;let cnt=0,sp=0;stack[sp++]=0;
    while(sp){
      const n=stack[--sp];if(!rayBox(n,ox,oy,oz,ix,iy,iz,1e300))continue;
      if(nl[n]<0){
        const s=nr[n],e=s+nc[n];
        for(let i=s;i<e;i++){const t=idx[i];if(comp[t]===exceptComp)continue;if(rayTri(ox,oy,oz,dx,dy,dz,t)>0)cnt++;}
      }else{stack[sp++]=nl[n];stack[sp++]=nr[n];}
    }
    return cnt;
  }

  /* ---------- bileşenler, açık kenarlar ve yön (dış/iç) ---------- */
  say('Yüzey yönleri doğrulanıyor');
  const par=new Int32Array(nv);for(let i=0;i<nv;i++)par[i]=i;
  const find=a=>{while(par[a]!==a){par[a]=par[par[a]];a=par[a];}return a;};
  for(let t=0;t<nT;t++){const a=find(F[t*3]),b=find(F[t*3+1]),c=find(F[t*3+2]);if(a!==b)par[a]=b;const d=find(b);if(d!==find(c))par[find(c)]=d;}
  const compOfRoot=new Map(),comp=new Int32Array(nT);let nComp=0;
  for(let t=0;t<nT;t++){const r=find(F[t*3]);let c=compOfRoot.get(r);if(c===undefined){c=nComp++;compOfRoot.set(r,c);}comp[t]=c;}

  let boundary=0;
  const compBoundary=new Int32Array(nComp);
  {
    const edgeMap=new Map();
    for(let t=0;t<nT;t++){
      const c=comp[t];
      for(let k=0;k<3;k++){
        const a=F[t*3+k],b=F[t*3+(k+1)%3],key=a<b?a*nv+b:b*nv+a;
        const prev=edgeMap.get(key);
        if(prev===undefined)edgeMap.set(key,c+1);
        else if(prev>0)edgeMap.set(key,-prev);
        else edgeMap.set(key,0);
      }
    }
    for(const v of edgeMap.values()){
      if(v>0){boundary++;compBoundary[v-1]++;}
      else if(v===0){boundary++;}
    }
  }

  const vol=new Float64Array(nComp),probe=new Int32Array(nComp).fill(-1);
  for(let t=0;t<nT;t++){
    const a=F[t*3]*3,b=F[t*3+1]*3,c=F[t*3+2]*3;
    const ax=V[a]-bx0,ay=V[a+1]-by0,az=V[a+2]-bz0,bx=V[b]-bx0,by=V[b+1]-by0,bz=V[b+2]-bz0,cx=V[c]-bx0,cy=V[c+1]-by0,cz=V[c+2]-bz0;
    vol[comp[t]]+=ax*(by*cz-bz*cy)+ay*(bz*cx-bx*cz)+az*(bx*cy-by*cx);
    if(probe[comp[t]]<0)probe[comp[t]]=t;
  }
  let flipped=0;
  const dirx=.5773502691896,diry=.5773502691896+.0137,dirz=.5773502691896-.0291,dl=Math.hypot(dirx,diry,dirz);
  const flipComp=new Uint8Array(nComp);
  for(let c=0;c<nComp;c++){
    if(compBoundary[c]>0)continue; // Açık yüzeylerde referans noktalı hacim işareti keyfidir; orijinal STL normalini koru
    let parity=0;
    if(nComp>1){const t=probe[c],a=F[t*3]*3;parity=rayCount(V[a],V[a+1],V[a+2],dirx/dl,diry/dl,dirz/dl,c,comp)&1;}
    if((vol[c]<0)!==(parity===1)){flipComp[c]=1;flipped++;}
  }
  if(flipped)for(let t=0;t<nT;t++)if(flipComp[comp[t]]){const q=F[t*3+1];F[t*3+1]=F[t*3+2];F[t*3+2]=q;}

  const TN=new Float64Array(nT*3),TA=new Float64Array(nT),TH=new Float32Array(nT);
  for(let t=0;t<nT;t++){
    const a=F[t*3]*3,b=F[t*3+1]*3,c=F[t*3+2]*3;
    const ux=V[b]-V[a],uy=V[b+1]-V[a+1],uz=V[b+2]-V[a+2],vx=V[c]-V[a],vy=V[c+1]-V[a+1],vz=V[c+2]-V[a+2];
    const wx=V[c]-V[b],wy=V[c+1]-V[b+1],wz=V[c+2]-V[b+2];
    const nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx,l=Math.hypot(nx,ny,nz)||1;
    TN[t*3]=nx/l;TN[t*3+1]=ny/l;TN[t*3+2]=nz/l;TA[t]=l/2;
    TH[t]=Math.max(Math.hypot(ux,uy,uz),Math.hypot(vx,vy,vz),Math.hypot(wx,wy,wz));
  }

  /* ---------- köşe komşuluğu ve yumuşak/keskin köşe sınıflandırması ---------- */
  const off=new Uint32Array(nv+1);for(let i=0;i<F.length;i++)off[F[i]+1]++;
  for(let i=0;i<nv;i++)off[i+1]+=off[i];
  const cur=off.slice(0,nv),inc=new Uint32Array(F.length),vArea=new Float64Array(nv);
  for(let t=0;t<nT;t++)for(let k=0;k<3;k++){const v=F[t*3+k];inc[cur[v]++]=t;vArea[v]+=TA[t]/3;}
  const meanEdge=new Float64Array(nv),VN=new Float64Array(nv*3),smooth=new Uint8Array(nv);
  for(let v=0;v<nv;v++){
    let el=0,ec=0,sx=0,sy=0,sz=0;const px=V[v*3],py=V[v*3+1],pz=V[v*3+2];
    for(let q=off[v];q<off[v+1];q++){
      const t=inc[q];let k=0;while(F[t*3+k]!==v)k++;
      const a=F[t*3+(k+1)%3]*3,b=F[t*3+(k+2)%3]*3;
      const e1x=V[a]-px,e1y=V[a+1]-py,e1z=V[a+2]-pz,e2x=V[b]-px,e2y=V[b+1]-py,e2z=V[b+2]-pz;
      const l1=Math.hypot(e1x,e1y,e1z),l2=Math.hypot(e2x,e2y,e2z);el+=l1+l2;ec+=2;
      const ang=Math.acos(Math.max(-1,Math.min(1,(e1x*e2x+e1y*e2y+e1z*e2z)/((l1*l2)||1))));
      sx+=TN[t*3]*ang;sy+=TN[t*3+1]*ang;sz+=TN[t*3+2]*ang;
    }
    meanEdge[v]=ec?el/ec:0;
    const l=Math.hypot(sx,sy,sz);if(l<1e-12)continue;
    sx/=l;sy/=l;sz/=l;VN[v*3]=sx;VN[v*3+1]=sy;VN[v*3+2]=sz;
    let ok=1;for(let q=off[v];q<off[v+1];q++){const t=inc[q];if(TN[t*3]*sx+TN[t*3+1]*sy+TN[t*3+2]*sz<.82){ok=0;break;}}
    smooth[v]=ok;
  }

  /* ---------- büzülen küre (Shrinking Ball Medial Axis) ---------- */
  let LAST_T=-1,LAST_QX=0,LAST_QY=0,LAST_QZ=0;
  function shrink(px,py,pz,nx,ny,nz,rStart,skipT){
    let r=Math.min(rStart,rCap);
    const floor=1e-9*diag;
    LAST_T=-1;
    for(let it=0;it<64;it++){
      const tol=Math.max(2e-5*r,1e-9*diag),lim=r-tol;if(lim<=floor)break;
      const t=closestInside(px+nx*r,py+ny*r,pz+nz*r,lim*lim,skipT);
      if(t<0)break;
      LAST_T=t;LAST_QX=QX;LAST_QY=QY;LAST_QZ=QZ;
      const dx=QX-px,dy=QY-py,dz=QZ-pz,nd=dx*nx+dy*ny+dz*nz,dd=dx*dx+dy*dy+dz*dz;
      const rn=nd>1e-12*diag?dd/(2*nd):r*.5;
      if(!(rn<r-tol*.5))break;
      r=Math.max(rn,floor);
    }
    return r;
  }
  function ballAt(px,py,pz,nx,ny,nz,skipT,hEx){
    const h=rayFirst(px,py,pz,nx,ny,nz,Math.max(rCap*2,diag),skipT);
    const rht=RHT;
    if(h<0&&compBoundary[comp[skipT]]>0){
      FX=px;FY=py;FZ=pz;FNX=-nx;FNY=-ny;FNZ=-nz;FR2=hEx*hEx;
      const r=shrink(px,py,pz,nx,ny,nz,rCap,skipT);
      FR2=-1;
      if(LAST_T<0)return 0;
      const cx=px+nx*r,cy=py+ny*r,cz=pz+nz*r;
      const outDot=(LAST_QX-cx)*TN[LAST_T*3]+(LAST_QY-cy)*TN[LAST_T*3+1]+(LAST_QZ-cz)*TN[LAST_T*3+2];
      const nDot=TN[LAST_T*3]*FNX+TN[LAST_T*3+1]*FNY+TN[LAST_T*3+2]*FNZ;
      if(outDot<-.2*r||nDot>.35)return 0;
      return r;
    }
    const rInit=h>0?Math.min(h*.5,rCap):rCap;
    FX=px;FY=py;FZ=pz;FNX=-nx;FNY=-ny;FNZ=-nz;FR2=hEx*hEx;
    const r=shrink(px,py,pz,nx,ny,nz,rInit,skipT);
    FR2=-1;
    if(compBoundary[comp[skipT]]>0&&h>0&&rht>=0){
      const rayHitDot=nx*TN[rht*3]+ny*TN[rht*3+1]+nz*TN[rht*3+2];
      if(rayHitDot<-.35){
        if(LAST_T<0)return 0;
        const cx=px+nx*r,cy=py+ny*r,cz=pz+nz*r;
        const outDot=(LAST_QX-cx)*TN[LAST_T*3]+(LAST_QY-cy)*TN[LAST_T*3+1]+(LAST_QZ-cz)*TN[LAST_T*3+2];
        if(outDot<-.25*r)return 0;
      }
    }
    return r;
  }

  /* ---------- üçgen içi örnekleme ve nTop medial teğet küre hesabı ---------- */
  const cornerR=new Float32Array(nT*3),triR=new Float32Array(nT);
  const maxBalls=coverMode?nT*(quality===1?4:quality===2?4:9):0;
  const BX=coverMode?new Float32Array(maxBalls*4):null;
  let nb2=0,lastPct=-1;

  for(let t=0;t<nT;t++){
    if(TA[t]<=1e-16*diag*diag)continue;
    const i0=F[t*3],i1=F[t*3+1],i2=F[t*3+2];
    const a=i0*3,b=i1*3,c=i2*3;
    const nx=-TN[t*3],ny=-TN[t*3+1],nz=-TN[t*3+2];
    const ht=TH[t],hEx=1.35*ht;
    const cx=(V[a]+V[b]+V[c])/3,cy=(V[a+1]+V[b+1]+V[c+1])/3,cz=(V[a+2]+V[b+2]+V[c+2])/3;
    const rc=ballAt(cx,cy,cz,nx,ny,nz,t,hEx);
    let tr=rc>0?rc:0;
    if(coverMode&&rc>0){BX[nb2*4]=cx+nx*rc;BX[nb2*4+1]=cy+ny*rc;BX[nb2*4+2]=cz+nz*rc;BX[nb2*4+3]=rc;nb2++;}
    const vs=[i0,i1,i2];
    if(quality===1){
      for(let k=0;k<3;k++){
        if(!smooth[vs[k]]){
          const al=Math.min(.14,Math.max(.02,.015/(ht||1))),be=1-2*al;
          const u0=k===0?be:al,u1=k===1?be:al,u2=k===2?be:al;
          const px=u0*V[a]+u1*V[b]+u2*V[c],py=u0*V[a+1]+u1*V[b+1]+u2*V[c+1],pz=u0*V[a+2]+u1*V[b+2]+u2*V[c+2];
          const rk=ballAt(px,py,pz,nx,ny,nz,t,hEx);
          cornerR[t*3+k]=rk;
          if(rk>tr)tr=rk;
          if(coverMode&&rk>0){BX[nb2*4]=px+nx*rk;BX[nb2*4+1]=py+ny*rk;BX[nb2*4+2]=pz+nz*rk;BX[nb2*4+3]=rk;nb2++;}
        }else{
          cornerR[t*3+k]=rc;
        }
      }
    }else{
      for(let k=0;k<3;k++){
        const isSm=smooth[vs[k]];
        const al=isSm?.15:Math.min(.14,Math.max(.02,.015/(ht||1))),be=1-2*al;
        const u0=k===0?be:al,u1=k===1?be:al,u2=k===2?be:al;
        const px=u0*V[a]+u1*V[b]+u2*V[c],py=u0*V[a+1]+u1*V[b+1]+u2*V[c+1],pz=u0*V[a+2]+u1*V[b+2]+u2*V[c+2];
        const rk=ballAt(px,py,pz,nx,ny,nz,t,hEx);
        if(rk>tr)tr=rk;
        cornerR[t*3+k]=(!isSm&&rc>0&&rk>0)?(.9*rk+.1*rc):rk;
        if(coverMode&&rk>0){BX[nb2*4]=px+nx*rk;BX[nb2*4+1]=py+ny*rk;BX[nb2*4+2]=pz+nz*rk;BX[nb2*4+3]=rk;nb2++;}
      }
      if(quality===3){
        const extra=[[0.44,0.44,0.12],[0.44,0.12,0.44],[0.12,0.44,0.44],[0.52,0.24,0.24],[0.24,0.52,0.24]];
        let sumE=rc>0?rc:0,cntE=rc>0?1:0;
        for(const [u0,u1,u2] of extra){
          const px=u0*V[a]+u1*V[b]+u2*V[c],py=u0*V[a+1]+u1*V[b+1]+u2*V[c+1],pz=u0*V[a+2]+u1*V[b+2]+u2*V[c+2];
          const re=ballAt(px,py,pz,nx,ny,nz,t,hEx);
          if(re>0){if(re>tr)tr=re;sumE+=re;cntE++;if(coverMode){BX[nb2*4]=px+nx*re;BX[nb2*4+1]=py+ny*re;BX[nb2*4+2]=pz+nz*re;BX[nb2*4+3]=re;nb2++;}}
        }
        if(cntE>0){
          const avgE=sumE/cntE;
          for(let k=0;k<3;k++)if(smooth[vs[k]]&&cornerR[t*3+k]>0)cornerR[t*3+k]=.65*cornerR[t*3+k]+.35*avgE;
        }
      }
    }
    triR[t]=tr;
    const pct=Math.floor(t/nT*20);if(pct!==lastPct){lastPct=pct;say('İç küreler hesaplanıyor · %'+pct*5);}
  }

  const values=new Float32Array(nv).fill(NaN);
  if(coverMode&&nb2>0){
    say('Kapsayan küre haritası oluşturuluyor');
    const nBl=nb2,bidx=new Uint32Array(nBl),bcen=new Float64Array(nBl*3);
    for(let i=0;i<nBl;i++){bidx[i]=i;bcen[i*3]=BX[i*4];bcen[i*3+1]=BX[i*4+1];bcen[i*3+2]=BX[i*4+2];}
    const bcap=nBl+16,bb=new Float64Array(bcap*6),bmx=new Float32Array(bcap),bl=new Int32Array(bcap),br=new Int32Array(bcap),bc2=new Int32Array(bcap);
    let bnodes=1;
    {
      const st=[0,0,nBl];
      while(st.length){
        const r=st.pop(),l=st.pop(),id=st.pop();
        let x0=Infinity,y0=Infinity,z0=Infinity,x1=-Infinity,y1=-Infinity,z1=-Infinity,mr=0,cx0=Infinity,cy0=Infinity,cz0=Infinity,cx1=-Infinity,cy1=-Infinity,cz1=-Infinity;
        for(let i=l;i<r;i++){
          const k=bidx[i]*4,x=BX[k],y=BX[k+1],z=BX[k+2],rr=BX[k+3];
          if(x-rr<x0)x0=x-rr;if(x+rr>x1)x1=x+rr;if(y-rr<y0)y0=y-rr;if(y+rr>y1)y1=y+rr;if(z-rr<z0)z0=z-rr;if(z+rr>z1)z1=z+rr;
          if(rr>mr)mr=rr;
          if(x<cx0)cx0=x;if(x>cx1)cx1=x;if(y<cy0)cy0=y;if(y>cy1)cy1=y;if(z<cz0)cz0=z;if(z>cz1)cz1=z;
        }
        bb[id*6]=x0;bb[id*6+1]=y0;bb[id*6+2]=z0;bb[id*6+3]=x1;bb[id*6+4]=y1;bb[id*6+5]=z1;bmx[id]=mr;
        if(r-l<=8){bl[id]=-1;br[id]=l;bc2[id]=r-l;continue;}
        const dx=cx1-cx0,dy=cy1-cy0,dz=cz1-cz0,axis=dx>=dy&&dx>=dz?0:dy>=dz?1:2,m=(l+r)>>1;
        qselect(bidx,bcen,l,r,m,axis);
        const L=bnodes++,R=bnodes++;bl[id]=L;br[id]=R;st.push(L,l,m,R,m,r);
      }
    }
    function ballQuery(px,py,pz,smax,start){
      let best=start,sp=0;stack[sp++]=0;
      while(sp){
        const n=stack[--sp];
        if(bmx[n]<=best)continue;
        const o6=n*6;
        if(px<bb[o6]-smax||px>bb[o6+3]+smax||py<bb[o6+1]-smax||py>bb[o6+4]+smax||pz<bb[o6+2]-smax||pz>bb[o6+5]+smax)continue;
        if(bl[n]<0){
          const s=br[n],e=s+bc2[n];
          for(let i=s;i<e;i++){
            const k=bidx[i]*4,r=BX[k+3];if(r<=best)continue;
            const dx=px-BX[k],dy=py-BX[k+1],dz=pz-BX[k+2],lim=r+smax;
            if(dx*dx+dy*dy+dz*dz<=lim*lim*(1+1e-7))best=r;
          }
        }else{
          const L=bl[n],R=br[n];
          if(bmx[L]>bmx[R]){stack[sp++]=R;stack[sp++]=L;}else{stack[sp++]=L;stack[sp++]=R;}
        }
      }
      return best;
    }
    for(let v=0;v<nv;v++){
      const r0=ballQuery(V[v*3],V[v*3+1],V[v*3+2],1e-3*meanEdge[v]+1e-6*diag,0);
      if(r0>0)values[v]=Math.min(2*r0,maxSearch);
    }
  }else{
    say('Medial kalınlık haritası oluşturuluyor');
    const scratch=new Float64Array(64);
    for(let v=0;v<nv;v++){
      let n=0;
      for(let q=off[v];q<off[v+1];q++){
        const t=inc[q];let k=0;while(F[t*3+k]!==v)k++;
        const r=cornerR[t*3+k];
        if(r>0&&n<64)scratch[n++]=r;
      }
      if(!n)continue;
      if(n===1){values[v]=Math.min(2*scratch[0],maxSearch);continue;}
      const sub=scratch.subarray(0,n).sort();
      const med=sub[n>>1],capHi=med*(quality===1?1.35:2.0),capLo=med*(quality===1?0:0.85); /* q1: eski kural (az örnekte alt kırpma ortalamayı şişiriyor) */
      let sum=0;
      for(let i=0;i<n;i++)sum+=Math.max(capLo,Math.min(sub[i],capHi));
      values[v]=Math.min(2*(sum/n),maxSearch);
    }
  }

  // Ölçülemeyen dejenere köşeleri komşudan doldur (en fazla 2 adım)
  for(let pass=0;pass<2;pass++){
    let changed=0;
    for(let v=0;v<nv;v++){
      if(Number.isFinite(values[v]))continue;
      let sum=0,cnt=0;
      for(let q=off[v];q<off[v+1];q++){const t=inc[q];for(let k=0;k<3;k++){const w=F[t*3+k];if(w!==v&&Number.isFinite(values[w])){sum+=values[w];cnt++;}}}
      if(cnt){values[v]=sum/cnt;changed++;}
    }
    if(!changed)break;
  }

  let validCount=0;for(let v=0;v<nv;v++)if(Number.isFinite(values[v]))validCount++;

  /* ---------- çıktı: orijinal köşe sırasına geri eşle ---------- */
  const display=Float32Array.from(values);
  for(let pass=0;pass<(o&&o.smoothSteps||0);pass++){
    const next=Float32Array.from(display);
    for(let i=0;i<nv;i++){
      if(!Number.isFinite(values[i]))continue;let sum=display[i]*2,n=2;
      for(let q=off[i];q<off[i+1];q++){const f=inc[q]*3;for(let k=0;k<3;k++){const w=F[f+k];if(w!==i&&Number.isFinite(display[w])){sum+=display[w];n++;}}}
      next[i]=Math.max(values[i]*.9,Math.min(values[i]*1.1,sum/n));
    }
    display.set(next);
  }
  const outN=V0.length/3,out=new Float32Array(outN),visual=new Float32Array(outN),area=new Float32Array(outN),freq=new Uint32Array(nv);
  for(let i=0;i<outN;i++)freq[remap[i]]++;
  for(let i=0;i<outN;i++){const v=remap[i];out[i]=values[v];visual[i]=display[v];area[i]=vArea[v]/freq[v];}
  say('Ölçüm tamamlandı');
  return {values:out,display:visual,weights:area,validCount,totalCount:nv,method:o&&o.method||'sphere',boundaryEdges:boundary,orientationFixed:flipped,balls:nb2||nT*3};
}

/* ===== Curve · Çıkarma: curve → yüzeye oturt → circular sweep / surface'den çıkar / çıkarma wrap ===== */
function cuSpline(P,closed,step){ // merkezcil Catmull-Rom
  const n=P.length/3,pt=i=>{i=closed?((i%n)+n)%n:Math.max(0,Math.min(n-1,i));return [P[i*3],P[i*3+1],P[i*3+2]];};
  const d=(a,b)=>Math.sqrt(Math.hypot(a[0]-b[0],a[1]-b[1],a[2]-b[2]))||1e-6,mix=(a,b,u)=>[a[0]+(b[0]-a[0])*u,a[1]+(b[1]-a[1])*u,a[2]+(b[2]-a[2])*u];
  const out=[],segs=closed?n:n-1;
  for(let s=0;s<segs;s++){
    const p0=pt(s-1),p1=pt(s),p2=pt(s+1),p3=pt(s+2),t1=d(p0,p1),t2=t1+d(p1,p2),t3=t2+d(p2,p3),L=Math.hypot(p2[0]-p1[0],p2[1]-p1[1],p2[2]-p1[2]),m=Math.max(2,Math.ceil(L/step));
    const last=!closed&&s===segs-1;
    for(let k=0;k<(last?m+1:m);k++){
      const t=t1+(t2-t1)*k/m,A1=mix(p0,p1,t/t1),A2=mix(p1,p2,(t-t1)/(t2-t1)),A3=mix(p2,p3,(t-t2)/(t3-t2)),B1=mix(A1,A2,t/t2),B2=mix(A2,A3,(t-t1)/(t3-t1));
      out.push(...mix(B1,B2,(t-t1)/(t2-t1)));
    }
  }
  return out;
}
function cuCurveOnSurface(V,F,pts,closed,step){ // spline örnekle, her noktayı yüzeyin en yakın noktasına oturt
  const bvh=cmBuildBVH(V,F),S=cuSpline(pts,closed,step),out=[];
  for(let i=0;i<S.length;i+=3){const q=cmBVHClosest(bvh,S[i],S[i+1],S[i+2]);
    const n=out.length;if(n&&Math.hypot(q[0]-out[n-3],q[1]-out[n-2],q[2]-out[n-1])<1e-6)continue;out.push(q[0],q[1],q[2]);}
  return Float64Array.from(out);
}
function cuClipDist(V,F,ix,r){ // yüzeyden "curve'e uzaklığı < r" bölgesini sürekli kontur boyunca çıkar
  const D=new Float64Array(V.length/3).fill(NaN),cuts=new Map(),out=[];
  const value=i=>Number.isNaN(D[i])?(D[i]=r-cuSegDist(ix,V[i*3],V[i*3+1],V[i*3+2],r+.5)):D[i];
  const vertex=i=>[V[i*3],V[i*3+1],V[i*3+2]];
  const cut=(a,b,da,db)=>{if(a>b){[a,b]=[b,a];[da,db]=[db,da];}const key=a*67108864+b;let p=cuts.get(key);
    if(!p){const t=da/(da-db),a3=a*3,b3=b*3;p=[V[a3]+t*(V[b3]-V[a3]),V[a3+1]+t*(V[b3+1]-V[a3+1]),V[a3+2]+t*(V[b3+2]-V[a3+2])];cuts.set(key,p);}return p;};
  for(let t=0;t<F.length;t+=3){
    const ids=[F[t],F[t+1],F[t+2]],poly=[];
    for(let k=0;k<3;k++){const a=ids[k],b=ids[(k+1)%3],da=value(a),db=value(b),ina=da<=1e-10,inb=db<=1e-10;if(ina)poly.push(vertex(a));if(ina!==inb)poly.push(cut(a,b,da,db));}
    for(let k=1;k+1<poly.length;k++){const a=poly[0],b=poly[k],c=poly[k+1],ux=b[0]-a[0],uy=b[1]-a[1],uz=b[2]-a[2],vx=c[0]-a[0],vy=c[1]-a[1],vz=c[2]-a[2];
      if((uy*vz-uz*vy)**2+(uz*vx-ux*vz)**2+(ux*vy-uy*vx)**2>1e-20)out.push(...a,...b,...c);}
  }
  return Float32Array.from(out);
}
function cuCurveOp(V,F,o,say){
  o=cuDef(o);say=say||(()=>{});
  if(!o.curve||o.curve.length<6)throw new Error('Önce surface üzerinde en az 2 noktalı bir curve çizin.');
  say('Yüzey hazırlanıyor');({V,F}=cuWeld(V,F));
  const r=o.cvr;if(!(r>0))throw new Error('Silindir çapı geçersiz.');
  say('Curve yüzeye oturtuluyor');
  const dense=cuCurveOnSurface(V,F,o.curve,!!o.closed,Math.max(.03,Math.min(.1,r/2))),n=dense.length/3;
  if(n<2)throw new Error('Curve çok kısa.');
  const segs=[],edges=[];for(let i=0;i+1<n;i++){segs.push(dense[i*3],dense[i*3+1],dense[i*3+2],dense[i*3+3],dense[i*3+4],dense[i*3+5]);edges.push(i,i+1);}
  if(o.closed&&n>2){segs.push(dense[n*3-3],dense[n*3-2],dense[n*3-1],dense[0],dense[1],dense[2]);edges.push(n-1,0);}
  if(o.op==='tube'){say('Circular sweep uygulanıyor');return {tube:cuTube(Float32Array.from(segs),o.detail,r,o.smooth,say)};}
  const ix=cuSegIndex(dense,edges),target=Math.max(.03,Math.min(.08,r/3)),reach=r+3*target;
  say('Çıkarılacak bölge inceltiliyor');({V,F}=cuRefine(V,F,ix,reach,target,say));
  say('Surface\'den silindir çıkarılıyor');
  const cut=cuClipDist(V,F,ix,r);
  if(cut.length<9)throw new Error('Silindir yüzeyin tamamını kaldırdı; çapı küçültün.');
  if(cut.length>=F.length*3*.999)throw new Error('Curve surface ile kesişmiyor; çapı artırın veya curve’ü yüzey üzerinde çizin.');
  if(o.op==='cut')return {cut};
  const g=cuSoupMesh(cut),tol=Math.max(.02,target*target/r),be=[];
  for(const [k,c] of cuEdgeMap(g.F))if(c===1){const a=Math.floor(k/67108864),b=k%67108864;
    const da=cuSegDist(ix,g.V[a*3],g.V[a*3+1],g.V[a*3+2],r+.1),db=cuSegDist(ix,g.V[b*3],g.V[b*3+1],g.V[b*3+2],r+.1);
    if(Math.abs(da-r)<=tol&&Math.abs(db-r)<=tol)be.push(a,b);}
  if(!be.length)throw new Error('Kesim kenarı bulunamadı.');
  if(o.cvmode==='sweep'){
    const S=[];for(let i=0;i<be.length;i+=2)S.push(g.V[be[i]*3],g.V[be[i]*3+1],g.V[be[i]*3+2],g.V[be[i+1]*3],g.V[be[i+1]*3+1],g.V[be[i+1]*3+2]);
    say('Kesim kenarına circular sweep uygulanıyor');return {wrapped:cuTube(Float32Array.from(S),o.detail,o.sweepR,o.smooth,say),edges:be.length/2};
  }
  say(o.cvw+' mm izokurve bandı seçiliyor');const band=cuBand(g.V,g.F,[{edges:be}],o.cvw);
  if(!band.length)throw new Error('Kesim kenarında bant üretilemedi.');
  say('Çıkarma wrap uygulanıyor');return {band,wrapped:cuWrap(band,o.detail,o.offset,say),edges:be.length/2};
}


/* ===== Trim: curve ile (kapalı bölge) herhangi bir modeli kes ===== */
async function cuTrim(P,o,say){
  o=cuDef(o);say=say||(()=>{});
  const pts=o.curve;if(!pts||pts.length<9)throw new Error('Trim için model üzerinde en az 3 noktalı bir curve çizin.');
  let w=o.dir&&Math.hypot(...o.dir)>1e-9?o.dir.slice():[0,0,1];const wl=Math.hypot(...w);w=w.map(x=>x/wl);
  const a=Math.abs(w[0])<.9?[1,0,0]:[0,1,0];let u=[w[1]*a[2]-w[2]*a[1],w[2]*a[0]-w[0]*a[2],w[0]*a[1]-w[1]*a[0]];const ul=Math.hypot(...u);u=u.map(x=>x/ul);
  const v=[w[1]*u[2]-w[2]*u[1],w[2]*u[0]-w[0]*u[2],w[0]*u[1]-w[1]*u[0]];
  const dot=(p,q)=>p[0]*q[0]+p[1]*q[1]+p[2]*q[2];
  const mn=[1e9,1e9,1e9],mx=[-1e9,-1e9,-1e9];for(let i=0;i<P.length;i+=3)for(let k=0;k<3;k++){mn[k]=Math.min(mn[k],P[i+k]);mx[k]=Math.max(mx[k],P[i+k]);}
  const solid=cuOpenEdges(P)===0,keepInside=o.keep==='inside';
  const toPoly=D=>{const poly=[];for(let i=0;i<D.length;i+=3){const p=[D[i],D[i+1],D[i+2]],q=[dot(p,u),dot(p,v)],n=poly.length;if(n&&Math.hypot(q[0]-poly[n-1][0],q[1]-poly[n-1][1])<1e-6)continue;poly.push(q);}
    let A=0;for(let i=0;i<poly.length;i++){const p=poly[i],q=poly[(i+1)%poly.length];A+=p[0]*q[1]-q[0]*p[1];}return {poly,area:A/2};};
  if(solid){
    say('Trim bölgesi hazırlanıyor');
    const {poly,area}=toPoly(cuSpline(pts,true,.05));if(poly.length<3||Math.abs(area)<1e-6)throw new Error('Curve bir bölge oluşturmuyor; noktaları kapalı bir alan olacak şekilde seçin.');
    if(area<0)poly.reverse();
    const K=await CU_KERNEL(),diag=Math.hypot(mx[0]-mn[0],mx[1]-mn[1],mx[2]-mn[2]),c=[(mn[0]+mx[0])/2,(mn[1]+mx[1])/2,(mn[2]+mx[2])/2],off=dot(c,w);
    const prism=K.Manifold.extrude([poly],diag*2+10,0,0,[1,1],true);
    const placed=prism.transform([u[0],u[1],u[2],0,v[0],v[1],v[2],0,w[0],w[1],w[2],0,w[0]*off,w[1]*off,w[2]*off,1]);
    let soup;try{soup=cuMeshFromKernel(placed.getMesh());}finally{prism.delete();placed.delete();}
    const r=await cuBoolean([{name:'Model',P},{name:'Trim bölgesi',P:soup}],{...o,op:keepInside?'intersect':'subtract'},say);
    return {...r,solid:true};
  }
  say('Yüzey hazırlanıyor');const g=cuSoupMesh(P);let {V,F}=cuWeld(g.V,g.F);
  say('Curve yüzeye oturtuluyor');const dense=cuCurveOnSurface(V,F,pts,true,.05),n=dense.length/3;
  const {poly}=toPoly(dense);if(poly.length<3)throw new Error('Curve çok kısa.');
  const edges=[];for(let i=0;i<n-1;i++)edges.push(i,i+1);edges.push(n-1,0);
  const ix=cuSegIndex(dense,edges);say('Kesim sınırı inceltiliyor');({V,F}=cuRefine(V,F,ix,.15,.05,say));
  let x0=1e9,y0=1e9,x1=-1e9,y1=-1e9;for(const q of poly){x0=Math.min(x0,q[0]);y0=Math.min(y0,q[1]);x1=Math.max(x1,q[0]);y1=Math.max(y1,q[1]);}
  const inside=(x,y)=>{if(x<x0||x>x1||y<y0||y>y1)return false;let c=false;for(let i=0,j=poly.length-1;i<poly.length;j=i++){const p=poly[i],q=poly[j];if((p[1]>y)!==(q[1]>y)&&x<(q[0]-p[0])*(y-p[1])/(q[1]-p[1])+p[0])c=!c;}return c;};
  say('Trim uygulanıyor');const out=[];let removed=0;
  for(let t=0;t<F.length;t+=3){
    const a3=F[t]*3,b3=F[t+1]*3,c3=F[t+2]*3,cx=(V[a3]+V[b3]+V[c3])/3,cy=(V[a3+1]+V[b3+1]+V[c3+1])/3,cz=(V[a3+2]+V[b3+2]+V[c3+2])/3;
    const ins=inside(cx*u[0]+cy*u[1]+cz*u[2],cx*v[0]+cy*v[1]+cz*v[2]);
    if(ins===keepInside)out.push(V[a3],V[a3+1],V[a3+2],V[b3],V[b3+1],V[b3+2],V[c3],V[c3+1],V[c3+2]);else removed++;
  }
  if(!out.length)throw new Error('Trim tüm modeli sildi; curve’ü ve silinecek bölgeyi kontrol edin.');
  if(!removed)throw new Error('Curve bölgesi modele denk gelmedi; hiçbir şey silinmedi.');
  const mesh=Float32Array.from(out);return {mesh,...cuMeasure(mesh),solid:false};
}


/* ===== Genel Wrap: yüzey (açık) veya standart (kapalı) model için dış zarf / kalınlaştırma ===== */
async function cuGeneralWrap(P,o,say){
  o=cuDef(o);say=say||(()=>{});
  if(!P||P.length<9)throw new Error('Wrap için model bulunamadı.');
  const off=Number.isFinite(o.offset)?o.offset:.15,gap=Math.max(0,Number(o.gap)||0),h0=Math.max(.02,o.detail||.1);
  const closed=cuOpenEdges(P)===0;
  const mode=o.mode==='envelope'||o.mode==='thicken'?o.mode:(closed?'envelope':'thicken');
  if(mode==='thicken'){
    if(!(off>0))throw new Error('Kalınlaştırma (açık yüzey) modunda ofset 0’dan büyük olmalı.');
    say('Yüzey kalınlaştırılıyor');return {wrapped:cuWrap(P,h0,off,say),mode,h:h0,closed};
  }
  const mn=[1e9,1e9,1e9],mx=[-1e9,-1e9,-1e9];
  for(let i=0;i<P.length;i+=3)for(let k=0;k<3;k++){mn[k]=Math.min(mn[k],P[i+k]);mx[k]=Math.max(mx[k],P[i+k]);}
  const padOf=h=>Math.max(0,off)+gap/2+3*h,dimOf=h=>mn.map((v,k)=>Math.ceil((mx[k]-v+2*padOf(h))/h)+1);
  let h=h0;while(dimOf(h).reduce((a,b)=>a*b,1)>2.5e7)h*=1.08;
  const [nx,ny,nz]=dimOf(h),pad=padOf(h),org=mn.map(v=>v-pad),n=nx*ny*nz,R=Math.max(Math.abs(off),gap/2,h)+2*h;
  say('Mesafe alanı hesaplanıyor');
  const D=new Float32Array(n).fill(1e6);
  for(let t=0;t<P.length;t+=9){
    const lo=[0,1,2].map(k=>Math.max(0,Math.floor((Math.min(P[t+k],P[t+3+k],P[t+6+k])-R-org[k])/h))),
          hi=[nx,ny,nz].map((m,k)=>Math.min(m-1,Math.ceil((Math.max(P[t+k],P[t+3+k],P[t+6+k])+R-org[k])/h)));
    for(let z=lo[2];z<=hi[2];z++)for(let y=lo[1];y<=hi[1];y++)for(let x=lo[0];x<=hi[0];x++){
      const i=x+nx*(y+ny*z),d=cuTriDist2(org[0]+x*h,org[1]+y*h,org[2]+z*h,P[t],P[t+1],P[t+2],P[t+3],P[t+4],P[t+5],P[t+6],P[t+7],P[t+8]);if(d<D[i])D[i]=d;}
  }
  let inside=null;
  if(closed&&gap===0){ // kapalı modelde içeri/dışarı kesin ışın sayımıyla (ofset sapması olmaz)
    say('İç bölge belirleniyor');inside=new Uint8Array(n);const cols=new Array(ny*nz),e1=.000123*h,e2=.000317*h;
    for(let t=0;t<P.length;t+=9){
      const ax=P[t],ay=P[t+1],az=P[t+2],bx=P[t+3],by=P[t+4],bz=P[t+5],cx=P[t+6],cy=P[t+7],cz=P[t+8];
      const nxn=(by-ay)*(cz-az)-(bz-az)*(cy-ay),nyn=(bz-az)*(cx-ax)-(bx-ax)*(cz-az),nzn=(bx-ax)*(cy-ay)-(by-ay)*(cx-ax);if(Math.abs(nxn)<1e-14)continue;
      const j0=Math.max(0,Math.ceil((Math.min(ay,by,cy)-org[1]-e1)/h)),j1=Math.min(ny-1,Math.floor((Math.max(ay,by,cy)-org[1]-e1)/h)),k0=Math.max(0,Math.ceil((Math.min(az,bz,cz)-org[2]-e2)/h)),k1=Math.min(nz-1,Math.floor((Math.max(az,bz,cz)-org[2]-e2)/h));
      for(let k=k0;k<=k1;k++)for(let j=j0;j<=j1;j++){const y=org[1]+j*h+e1,z=org[2]+k*h+e2,
        w1=(by-ay)*(z-az)-(bz-az)*(y-ay),w2=(cy-by)*(z-bz)-(cz-bz)*(y-by),w3=(ay-cy)*(z-cz)-(az-cz)*(y-cy);
        if((w1>=0&&w2>=0&&w3>=0)||(w1<=0&&w2<=0&&w3<=0)){const x=ax-(nyn*(y-ay)+nzn*(z-az))/nxn,c=j+ny*k;(cols[c]||(cols[c]=[])).push(x);}}
    }
    for(let c=0;c<cols.length;c++){const l=cols[c];if(!l||l.length<2)continue;l.sort((a,b)=>a-b);const j=c%ny,k=(c-j)/ny;
      for(let m=0;m+1<l.length;m+=2){const i0=Math.max(0,Math.ceil((l[m]-org[0])/h)),i1=Math.min(nx-1,Math.floor((l[m+1]-org[0])/h));for(let i=i0;i<=i1;i++)inside[i+nx*(j+ny*k)]=1;}}
    for(let i=0;i<n;i++){const d=D[i]>=1e6?1e3:Math.sqrt(D[i]);D[i]=inside[i]?-d:d;}
  }else{
  say('Dış bölge dolduruluyor');
  const wall=Math.max(gap/2,.87*h),w2=wall*wall,out=new Uint8Array(n),q=new Int32Array(n);let qh=0,qt=0;
  const push=i=>{if(!out[i]&&D[i]>w2){out[i]=1;q[qt++]=i;}},nxy=nx*ny;
  for(let y=0;y<ny;y++)for(let x=0;x<nx;x++){push(x+nx*y);push(x+nx*y+nxy*(nz-1));}
  for(let z=0;z<nz;z++){for(let x=0;x<nx;x++){push(x+nxy*z);push(x+nx*(ny-1)+nxy*z);}for(let y=0;y<ny;y++){push(nx*y+nxy*z);push(nx-1+nx*y+nxy*z);}}
  while(qh<qt){const i=q[qh++],x=i%nx,y=((i/nx)|0)%ny,z=(i/nxy)|0;
    if(x>0)push(i-1);if(x<nx-1)push(i+1);if(y>0)push(i-nx);if(y<ny-1)push(i+nx);if(z>0)push(i-nxy);if(z<nz-1)push(i+nxy);}
  for(let i=0;i<n;i++){const d=D[i]>=1e6?1e3:Math.sqrt(D[i]);D[i]=out[i]?d:-d;}
  }
  say('Wrap yüzeyi çıkarılıyor');
  const wrapped=cuNets(D,nx,ny,nz,off,org,h,0);
  if(wrapped.length<9)throw new Error('Wrap sonucu boş; ofset veya detay değerini değiştirin.');
  return {wrapped,mode,h,closed};
}


/* ===== Kenar Kapat (surface construction): açık kenarları bul / seçilenleri kapakla ===== */
function cuOrderLoop(edges){
  const adj=new Map(),add=(a,b)=>{let l=adj.get(a);if(!l)adj.set(a,l=[]);l.push(b);};
  for(let i=0;i<edges.length;i+=2){add(edges[i],edges[i+1]);add(edges[i+1],edges[i]);}
  let prev=-1,cur=edges[0];const ids=[cur],seen=new Set(ids);
  for(;;){let nx=-1;for(const q of adj.get(cur)||[])if(q!==prev&&!seen.has(q)){nx=q;break;}if(nx<0)break;ids.push(nx);seen.add(nx);prev=cur;cur=nx;}
  return ids;
}
function cuHoleLoops(P){
  const g=cuSoupMesh(P),w=cuWeld(g.V,g.F),V=w.V,F=w.F;
  const loops=cuLoops(V,F).filter(l=>l.len>1e-6).sort((a,b)=>b.len-a.len).map(l=>{const ids=cuOrderLoop(l.edges);return {len:l.len,ids,simple:ids.length===l.edges.length/2};});
  return {V,F,loops};
}
function cuScanHoles(P,o,say){
  (say||(()=>{}))('Açık kenarlar taranıyor');
  const {V,loops}=cuHoleLoops(P);
  return {open:cuOpenEdges(P),loops:loops.map(l=>{const pts=new Float32Array(l.ids.length*3);l.ids.forEach((id,i)=>{pts[i*3]=V[id*3];pts[i*3+1]=V[id*3+1];pts[i*3+2]=V[id*3+2];});return {len:l.len,n:l.ids.length,simple:l.simple,pts};})};
}
function cuEarClip(X,Y,bad){ // CCW çokgen; üçgen indekslerini ve zorlanan kulak sayısını döndürür
  const n=X.length,prev=new Int32Array(n),next=new Int32Array(n),reflex=new Uint8Array(n),tris=[];
  const cross=(a,b,c)=>(X[b]-X[a])*(Y[c]-Y[a])-(Y[b]-Y[a])*(X[c]-X[a]);
  for(let i=0;i<n;i++){prev[i]=(i+n-1)%n;next[i]=(i+1)%n;}
  const upd=i=>{reflex[i]=cross(prev[i],i,next[i])<=0?1:0;};for(let i=0;i<n;i++)upd(i);
  let remaining=n,i=0,forced=0;
  while(remaining>3){
    let found=-1,j=i;
    for(let t=0;t<remaining;t++){
      const a=prev[j],c=next[j];
      if(!reflex[j]&&!(bad&&bad(a,c))){let ok=true;for(let k=next[c];k!==a;k=next[k])if(reflex[k]&&cross(a,j,k)>=0&&cross(j,c,k)>=0&&cross(c,a,k)>=0){ok=false;break;}if(ok){found=j;break;}}
      j=next[j];
    }
    if(found<0){let bv=Infinity,k=i;for(let t=0;t<remaining;t++){const ar=Math.abs(cross(prev[k],k,next[k]));if(ar<bv){bv=ar;found=k;}k=next[k];}forced++;}
    const a=prev[found],c=next[found];tris.push(a,found,c);next[a]=c;prev[c]=a;remaining--;upd(a);upd(c);i=c;
  }
  tris.push(i,next[i],next[next[i]]);return {tris,forced};
}
function cuCapLoops(P,o,say){
  say=say||(()=>{});say('Açık kenarlar bulunuyor');
  const {V,F,loops}=cuHoleLoops(P),pick=o.pick&&o.pick.length?o.pick:loops.map((_,i)=>i);
  const dir=new Set();for(let t=0;t<F.length;t+=3)for(let k=0;k<3;k++)dir.add(F[t+k]*67108864+F[t+(k+1)%3]);
  const ex=new Set();for(let t=0;t<F.length;t+=3)for(let k=0;k<3;k++){const a=F[t+k],b=F[t+(k+1)%3];ex.add(a<b?a*67108864+b:b*67108864+a);}
  const caps=[];let capped=0,forced=0,skipped=0;
  for(const li of pick){
    const L=loops[li];if(!L||L.ids.length<3){skipped++;continue;}
    say('Kenar '+(li+1)+' kapatılıyor');
    const ids=L.ids.slice();if(dir.has(ids[0]*67108864+ids[1]))ids.reverse();
    let nx=0,ny=0,nz=0;for(let i=0;i<ids.length;i++){const a=ids[i]*3,b=ids[(i+1)%ids.length]*3;nx+=(V[a+1]-V[b+1])*(V[a+2]+V[b+2]);ny+=(V[a+2]-V[b+2])*(V[a]+V[b]);nz+=(V[a]-V[b])*(V[a+1]+V[b+1]);}
    const nl=Math.hypot(nx,ny,nz)||1;nx/=nl;ny/=nl;nz/=nl;
    const a0=Math.abs(nx)<.9?[1,0,0]:[0,1,0];let ux=ny*a0[2]-nz*a0[1],uy=nz*a0[0]-nx*a0[2],uz=nx*a0[1]-ny*a0[0];const ul=Math.hypot(ux,uy,uz);ux/=ul;uy/=ul;uz/=ul;
    const vx=ny*uz-nz*uy,vy=nz*ux-nx*uz,vz=nx*uy-ny*ux,X=new Float64Array(ids.length),Y=new Float64Array(ids.length);
    ids.forEach((id,i)=>{const p=id*3;X[i]=V[p]*ux+V[p+1]*uy+V[p+2]*uz;Y[i]=V[p]*vx+V[p+1]*vy+V[p+2]*vz;});
    const r=cuEarClip(X,Y,(p,q)=>ex.has(ids[p]<ids[q]?ids[p]*67108864+ids[q]:ids[q]*67108864+ids[p]));forced+=r.forced;for(let k=0;k<r.tris.length;k++)caps.push(ids[r.tris[k]]);capped++;
  }
  const mesh=new Float32Array((F.length+caps.length)*3),put=(arr,off)=>{for(let i=0;i<arr.length;i++){const p=arr[i]*3,q=(off+i)*3;mesh[q]=V[p];mesh[q+1]=V[p+1];mesh[q+2]=V[p+2];}};
  put(F,0);put(caps,F.length);
  return {mesh,capped,forced,skipped,total:loops.length,open:cuOpenEdges(mesh)};
}

function cmScreenProject(M,V,P,x,y,z,w,h){
  const wx=M[0]*x+M[4]*y+M[8]*z+M[12],wy=M[1]*x+M[5]*y+M[9]*z+M[13],wz=M[2]*x+M[6]*y+M[10]*z+M[14];
  const vx=V[0]*wx+V[4]*wy+V[8]*wz+V[12],vy=V[1]*wx+V[5]*wy+V[9]*wz+V[13],vz=V[2]*wx+V[6]*wy+V[10]*wz+V[14];
  const cx=P[0]*vx+P[4]*vy+P[8]*vz+P[12],cy=P[1]*vx+P[5]*vy+P[9]*vz+P[13],cw=P[3]*vx+P[7]*vy+P[11]*vz+P[15];
  return cw<=1e-9?null:[(cx/cw+1)/2*w,(1-cy/cw)/2*h,cw];
}
function cmScreenTrim(P0,I0,normPts,frame,say){
  const {W,H,M,Vw,Pj}=frame;
  say=say||(()=>{});
  if(W<4||H<4)throw new Error('Ekran boyutu geçersiz.');
  const poly=normPts.map(p=>[p[0]*W,p[1]*H]);
  const m=poly.length;
  if(m<3)throw new Error('Trim için ekrana en az 3 noktalı bir Trim Curve çizin.');
  let area2=0,px0=Infinity,py0=Infinity,px1=-Infinity,py1=-Infinity;
  for(let i=0;i<m;i++){
    const a=poly[i],b=poly[(i+1)%m];
    area2+=a[0]*b[1]-b[0]*a[1];
    if(a[0]<px0)px0=a[0];if(a[0]>px1)px1=a[0];
    if(a[1]<py0)py0=a[1];if(a[1]>py1)py1=a[1];
  }
  if(Math.abs(area2)<12)throw new Error('Çizilen Trim Curve alanı çok küçük.');
  const proj=(x,y,z)=>cmScreenProject(M,Vw,Pj,x,y,z,W,H);

  const pointInPoly=(px,py)=>{
    if(px<px0||px>px1||py<py0||py>py1)return false;
    let c=false;
    for(let i=0,j=m-1;i<m;j=i++){
      const xi=poly[i][0],yi=poly[i][1],xj=poly[j][0],yj=poly[j][1];
      if(((yi>py)!==(yj>py))&&(px<(xj-xi)*(py-yi)/(yj-yi)+xi))c=!c;
    }
    return c;
  };
  const segDist2=(px,py)=>{
    let best=Infinity;
    for(let i=0,j=m-1;i<m;j=i++){
      const ax=poly[j][0],ay=poly[j][1],dx=poly[i][0]-ax,dy=poly[i][1]-ay,L2=dx*dx+dy*dy;
      let t=L2>0?((px-ax)*dx+(py-ay)*dy)/L2:0;
      t=t<0?0:t>1?1:t;
      const d2=(px-ax-t*dx)**2+(py-ay-t*dy)**2;
      if(d2<best)best=d2;
    }
    return best;
  };
  const signedDist=(px,py)=>{
    const d=Math.sqrt(segDist2(px,py));
    return pointInPoly(px,py)?-d:d;
  };
  const segCrossT=(x1,y1,x2,y2)=>{
    const rx=x2-x1,ry=y2-y1;
    let bestT=-1;
    for(let i=0,j=m-1;i<m;j=i++){
      const cx=poly[j][0],cy=poly[j][1],sx=poly[i][0]-cx,sy=poly[i][1]-cy;
      const det=rx*sy-ry*sx;
      if(Math.abs(det)<1e-12)continue;
      const qpx=cx-x1,qpy=cy-y1;
      const t=(qpx*sy-qpy*sx)/det,u=(qpx*ry-qpy*rx)/det;
      if(t>=-1e-6&&t<=1+1e-6&&u>=-1e-6&&u<=1+1e-6){
        bestT=Math.max(1e-5,Math.min(1-1e-5,t));
        break;
      }
    }
    return bestT;
  };

  let V=Array.from(P0),F=I0?Array.from(I0):Array.from({length:P0.length/3},(_,i)=>i);

  for(let pass=0;pass<5;pass++){
    if(F.length>12000000)throw new Error('Trim sonucu çok büyük. Daha küçük bir bölge seçin.');
    say('Trim yüzeyi hazırlanıyor ('+(pass+1)+'/5)');
    const mid=new Map(),scache=new Map();
    const getS=i=>{
      let s=scache.get(i);
      if(s===undefined){s=proj(V[i*3],V[i*3+1],V[i*3+2]);scache.set(i,s);}
      return s;
    };
    const split=(a,b)=>{
      if(a>b){const t=a;a=b;b=t;}
      const key=a*67108864+b;
      let mv=mid.get(key);if(mv!==undefined)return mv;
      const sa=getS(a),sb=getS(b);
      if(!sa||!sb){mid.set(key,-1);return -1;}
      const minX=Math.min(sa[0],sb[0]),maxX=Math.max(sa[0],sb[0]),minY=Math.min(sa[1],sb[1]),maxY=Math.max(sa[1],sb[1]);
      if(maxX<px0-4||minX>px1+4||maxY<py0-4||minY>py1+4){mid.set(key,-1);return -1;}
      const L2D=Math.hypot(sb[0]-sa[0],sb[1]-sa[1]);
      mv=-1;
      if(L2D>2.4){
        const mx=(sa[0]+sb[0])*0.5,my=(sa[1]+sb[1])*0.5;
        const reach=L2D*0.6+2.5;
        if(segDist2(mx,my)<=reach*reach||segCrossT(sa[0],sa[1],sb[0],sb[1])>=0){
          mv=V.length/3;
          V.push((V[a*3]+V[b*3])*0.5,(V[a*3+1]+V[b*3+1])*0.5,(V[a*3+2]+V[b*3+2])*0.5);
        }
      }
      mid.set(key,mv);return mv;
    };
    const G=[];let changed=0;
    for(let t=0;t<F.length;t+=3){
      let a=F[t],b=F[t+1],c=F[t+2];
      const m0=split(a,b),m1=split(b,c),m2=split(c,a),n=(m0>=0)+(m1>=0)+(m2>=0);
      if(n===0){G.push(a,b,c);continue;}changed++;
      if(n===3){G.push(a,m0,m2,m0,b,m1,m2,m1,c,m0,m1,m2);continue;}
      if(n===1){
        if(m1>=0){[a,b,c]=[b,c,a];G.push(a,m1,c,m1,b,c);}
        else if(m2>=0){[a,b,c]=[c,a,b];G.push(a,m2,c,m2,b,c);}
        else G.push(a,m0,c,m0,b,c);
        continue;
      }
      let p,q,r,mp,mq;
      if(m0<0){p=b;q=c;r=a;mp=m1;mq=m2;}else if(m1<0){p=c;q=a;r=b;mp=m2;mq=m0;}else{p=a;q=b;r=c;mp=m0;mq=m1;}
      G.push(mp,q,mq);
      const d1=Math.hypot(V[p*3]-V[mq*3],V[p*3+1]-V[mq*3+1],V[p*3+2]-V[mq*3+2]),
            d2=Math.hypot(V[r*3]-V[mp*3],V[r*3+1]-V[mp*3+1],V[r*3+2]-V[mp*3+2]);
      if(d1<=d2)G.push(p,mp,mq,p,mq,r);else G.push(p,mp,r,mp,mq,r);
    }
    F=G;if(!changed)break;
  }

  const nv=V.length/3,S=new Array(nv),D=new Float64Array(nv).fill(NaN);
  for(let i=0;i<nv;i++)S[i]=proj(V[i*3],V[i*3+1],V[i*3+2]);
  const getD=i=>{
    if(!Number.isNaN(D[i]))return D[i];
    const s=S[i];
    return (D[i]=s?signedDist(s[0],s[1]):1e6);
  };
  const vert=i=>[V[i*3],V[i*3+1],V[i*3+2]];
  const cuts=new Map();
  const cutEdge=(a,b,da,db)=>{
    if(a>b){[a,b]=[b,a];[da,db]=[db,da];}
    const key=a*67108864+b;
    let p=cuts.get(key);
    if(!p){
      const sa=S[a],sb=S[b];
      let t=sa&&sb?segCrossT(sa[0],sa[1],sb[0],sb[1]):-1;
      if(t<0)t=Math.max(1e-5,Math.min(1-1e-5,da/(da-db)));
      if(sa&&sb)t=t*sa[2]/((1-t)*sb[2]+t*sa[2]); // screen t -> 3D t
      const a3=a*3,b3=b*3;
      p=[V[a3]+t*(V[b3]-V[a3]),V[a3+1]+t*(V[b3+1]-V[a3+1]),V[a3+2]+t*(V[b3+2]-V[a3+2])];
      cuts.set(key,p);
    }
    return p;
  };
  const emitPoly=(arr,poly3)=>{
    for(let k=1;k+1<poly3.length;k++){
      const a=poly3[0],b=poly3[k],c=poly3[k+1];
      const ux=b[0]-a[0],uy=b[1]-a[1],uz=b[2]-a[2],vx=c[0]-a[0],vy=c[1]-a[1],vz=c[2]-a[2];
      if((uy*vz-uz*vy)**2+(uz*vx-ux*vz)**2+(ux*vy-uy*vx)**2>1e-22)arr.push(...a,...b,...c);
    }
  };

  const innerPos=[],outerPos=[];
  for(let t=0;t<F.length;t+=3){
    const a=F[t],b=F[t+1],c=F[t+2];
    const sa=S[a],sb=S[b],sc=S[c];
    if(!sa||!sb||!sc){
      outerPos.push(...vert(a),...vert(b),...vert(c));
      continue;
    }
    const tx0=Math.min(sa[0],sb[0],sc[0]),tx1=Math.max(sa[0],sb[0],sc[0]);
    const ty0=Math.min(sa[1],sb[1],sc[1]),ty1=Math.max(sa[1],sb[1],sc[1]);
    if(tx1<px0-2||tx0>px1+2||ty1<py0-2||ty0>py1+2){
      outerPos.push(...vert(a),...vert(b),...vert(c));
      continue;
    }
    const da=getD(a),db=getD(b),dc=getD(c);
    const ina=da<=0,inb=db<=0,inc=dc<=0;
    if(ina===inb&&inb===inc){
      const target=ina?innerPos:outerPos;
      target.push(...vert(a),...vert(b),...vert(c));
      continue;
    }
    const ids=[a,b,c],ds=[da,db,dc],ins=[ina,inb,inc],inP=[],outP=[];
    for(let k=0;k<3;k++){
      const u=ids[k],v=ids[(k+1)%3],du=ds[k],dv=ds[(k+1)%3],inu=ins[k],inv=ins[(k+1)%3];
      const pu=vert(u);
      if(inu)inP.push(pu);else outP.push(pu);
      if(inu!==inv){
        const pc=cutEdge(u,v,du,dv);
        inP.push(pc);outP.push(pc);
      }
    }
    if(inP.length>=3)emitPoly(innerPos,inP);
    if(outP.length>=3)emitPoly(outerPos,outP);
  }
  return {inner:Float32Array.from(innerPos),outer:Float32Array.from(outerPos)};
}


return {cmScreenTrim,cmMesh,cmFitSurface,cuEdge,cuLattice,cuUnion,cuBoolean,cuCurveOp,cuTrim,cuGeneralWrap,cuScanHoles,cuCapLoops,cmThickness,cmThicknessSphere,cmThicknessSphereLegacy,cuFinishSolid};
}
/* ===== CUSTIMESH eklentisi: arayüz bağlantısı ===== */

const CM_SRC=CMCore.toString();
let cmSelectedSurfaceId='';


let cmWorker=null,cmWorkerPending=null,cmWorkerSerial=0,cmCancelled=false;
function cmTransferBuffers(value,out=[],seen=new Set()){
  if(ArrayBuffer.isView(value)){
    const b=value.buffer;if(!seen.has(b)){seen.add(b);out.push(b);}
  }else if(value&&typeof value==='object')for(const v of Object.values(value))cmTransferBuffers(v,out,seen);
  return out;
}
function cmWorkerCall(fn,args,onProg){
  if(cmCancelled)return Promise.reject(new DOMException('İşlem iptal edildi.','AbortError'));
  if(cmWorkerPending)return Promise.reject(new Error('Bir işlem zaten çalışıyor.'));
  return new Promise((resolve,reject)=>{
    try{
      if(!cmWorker){
        const kernelScript=mt('cm-kernel-js').textContent.trim(),kernelBinary=mt('cm-kernel-wasm').textContent.trim();
        const src='const kernelScript='+JSON.stringify(kernelScript)+';const kernelBinary='+JSON.stringify(kernelBinary)+';'+"let cmKernelPromise=null;\nasync function CU_KERNEL(){\n  if(!cmKernelPromise)cmKernelPromise=(async()=>{\n    const bytes=Uint8Array.from(atob(kernelScript),c=>c.charCodeAt(0)),url=URL.createObjectURL(new Blob([bytes],{type:'text/javascript'}));\n    try{\n      const imported=await import(url),binary=Uint8Array.from(atob(kernelBinary),c=>c.charCodeAt(0));\n      const kernel=await imported.default({wasmBinary:binary,locateFile:()=> 'data:application/wasm;base64,'+kernelBinary,print:()=>{},printErr:()=>{}});kernel.setup();return kernel;\n    }finally{URL.revokeObjectURL(url);}\n  })();\n  return cmKernelPromise;\n}\nconst CMC=("+CM_SRC+")();\nonmessage=async e=>{\n  const {id,fn,args}=e.data,say=p=>postMessage({id,p});\n  try{\n    const r=await CMC[fn](...args,say);\n    if(['cuEdge','cuLattice','cmMesh','cuCurveOp','cuGeneralWrap'].includes(fn)){\n      for(const key of ['wrapped','mesh','tube','combined','rimOnly','voronoiOnly']){\n        if(r[key]?.length>=9)r[key]=await CMC.cuFinishSolid(r[key],(fn==='cuGeneralWrap'?args[1]:args[2])||{},say);\n      }\n    }\n    const transfer=[],seen=new Set(),walk=x=>{\n      if(ArrayBuffer.isView(x)){if(!seen.has(x.buffer)){seen.add(x.buffer);transfer.push(x.buffer);}}\n      else if(x&&typeof x==='object')for(const value of Object.values(x))walk(value);\n    };\n    walk(r);postMessage({id,r},transfer);\n  }catch(error){postMessage({id,e:error.message||String(error)});}\n};\n";
        const url=URL.createObjectURL(new Blob([src],{type:'text/javascript'}));
        try{cmWorker=new Worker(url);}finally{URL.revokeObjectURL(url);}
        cmWorker.onmessage=e=>{
          const p=cmWorkerPending,d=e.data;if(!p||d.id!==p.id)return;
          if(d.p){if(p.progress)p.progress(d.p);return;}
          cmWorkerPending=null;d.e?p.reject(new Error(d.e)):p.resolve(d.r);
        };
        cmWorker.onerror=e=>{
          e.preventDefault();const p=cmWorkerPending;cmWorkerPending=null;cmWorker.terminate();cmWorker=null;
          if(p)p.reject(new Error('İşlem tamamlanamadı. Ayrıntı değerini artırıp tekrar deneyin.'));
        };
      }
      const id=++cmWorkerSerial;cmWorkerPending={id,resolve,reject,progress:onProg};
      cmWorker.postMessage({id,fn,args},cmTransferBuffers(args));
    }catch(e){cmWorkerPending=null;reject(new Error('Hesaplama başlatılamadı. Dosyayı güncel Chrome veya Edge ile açın. '+e.message));}
  });
}
function cmCancelOperation(){
  if(!caseBusy){cmClose();return;}
  if(mt('cm-cancel').disabled)return;
  cmCancelled=true;
  if(cmWorkerPending){const p=cmWorkerPending;cmWorkerPending=null;cmWorker.terminate();cmWorker=null;p.reject(new DOMException('İşlem iptal edildi.','AbortError'));}
  cmStatus('İşlem iptal edildi.');
}
function cmRunWorker(V,F,opt,onProg,fn='cmMesh'){return cmWorkerCall(fn,[V,F,opt],onProg);}
window.addEventListener('pagehide',()=>{
  if(cmWorker)cmWorker.terminate();cmWorker=null;
  const pending=cmWorkerPending;cmWorkerPending=null;
  if(pending)pending.reject(new DOMException('Sayfa kapatıldığı için işlem iptal edildi.','AbortError'));
});
function cmSTLBlob(p){
  if(!p||p.length<9||p.length%9!==0||p.length/9>CASE_LIMITS.triangles)throw new Error('STL üçgen verisi geçersiz.');
  for(let i=0;i<p.length;i++)if(!Number.isFinite(p[i])||!Number.isFinite(Math.fround(p[i])))throw new Error('STL koordinatı geçersiz.');
  const n=p.length/9,b=new ArrayBuffer(84+n*50),dv=new DataView(b);dv.setUint32(80,n,true);
  for(let t=0;t<n;t++){const o=84+t*50,q=t*9,ux=p[q+3]-p[q],uy=p[q+4]-p[q+1],uz=p[q+5]-p[q+2],vx=p[q+6]-p[q],vy=p[q+7]-p[q+1],vz=p[q+8]-p[q+2];
    let nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;const l=Math.hypot(nx,ny,nz)||1;
    [nx/l,ny/l,nz/l,...p.subarray(q,q+9)].forEach((v,i)=>dv.setFloat32(o+i*4,v,true));}
  return new Blob([b],{type:'model/stl'});
}

function cmDownload(blob,name){
  const u=URL.createObjectURL(blob),a=document.createElement('a');
  a.href=u;a.download=name.endsWith('.stl')?name:name+'.stl';
  document.body.appendChild(a);a.click();a.remove();
  setTimeout(()=>URL.revokeObjectURL(u),25000);
}

function exportModelSTL(id){
  const mesh=We.find(m=>m.userData.id===id);
  if(!mesh)return;
  const g=mesh.geometry,V=g.attributes.position.array,F=g.index?g.index.array:null;
  let pos;
  if(F){
    pos=new Float32Array(F.length*3);
    for(let i=0;i<F.length;i++){
      const v=F[i]*3;
      pos[i*3]=V[v];pos[i*3+1]=V[v+1];pos[i*3+2]=V[v+2];
    }
  }else{
    pos=new Float32Array(V);
  }
  const cleanName=(mesh.userData.name||'model').replace(/\.stl$/i,'');
  cmDownload(cmSTLBlob(pos),cleanName+'.stl');
  setCaseMessage(cleanName+'.stl indirildi.');
}

let cmSelectedBoneId='',cmLastScrollTop=0,activeRightCmd='';
const cmSavedCurves=[];
let cmActiveCurveId='',cmCurveSerial=0;
const cmCurve={pts:[],dirs:[],meshId:'',drawing:false,down:null,raf:0,fromModal:false};
const trimCurve={pts:[],drawing:false,down:null,dragIdx:-1,hoverPt:null,fromModal:false};

function cmStatus(t,err=false){
  mt('cm-status').textContent=t;mt('cm-status').dataset.error=String(err);
  const rs=mt('rc-status');
  if(rs){rs.hidden=!t;rs.textContent=t;rs.dataset.error=String(err);}
}

function pushUndoEntry(entry){
  entry.bytes=(entry.models||[]).reduce((sum,m)=>sum+cmGeometryBytes(m.geometry),0);
  cmReserveUndo(entry.bytes);cmUndoStack.push(entry);cmUndoBytes+=entry.bytes;
  syncUndoButtons();return entry;
}
function snapshotSavedCurves(){
  return cmSavedCurves.map(c=>({id:c.id,name:c.name,meshId:c.meshId,pts:c.pts.slice(),dirs:c.dirs.slice(),closed:!!c.closed}));
}
function restoreSavedCurvesSnapshot(list,activeId){
  cmSavedCurves.length=0;
  (list||[]).forEach(c=>cmSavedCurves.push({id:c.id,name:c.name,meshId:c.meshId,pts:c.pts.slice(),dirs:c.dirs.slice(),closed:!!c.closed}));
  cmActiveCurveId=activeId||'';
  const cur=cmSavedCurves.find(c=>c.id===cmActiveCurveId)||cmSavedCurves[cmSavedCurves.length-1]||null;
  if(cur){
    cmActiveCurveId=cur.id;
    cmCurve.pts=cur.pts;cmCurve.dirs=cur.dirs;cmCurve.meshId=cur.meshId;
    mt('cm-cvclosed').checked=!!cur.closed;
    if(mt('rc-cvclosed'))mt('rc-cvclosed').checked=!!cur.closed;
  }else{
    cmActiveCurveId='';
    cmCurve.pts=[];cmCurve.dirs=[];cmCurve.meshId='';
  }
  syncNamedCurvesUI();
}
function pushSurfCurveUndo(label='Surface curve noktası'){
  pushUndoEntry({type:'surf-curve',curves:snapshotSavedCurves(),activeId:cmActiveCurveId,label});
}
function pushTrimCurveUndo(label='Trim curve noktası'){
  pushUndoEntry({type:'trim-curve',pts:trimCurve.pts.map(p=>[p[0],p[1]]),label});
}
function pushSceneUndo(label='İşlem'){
  const bytes=We.reduce((sum,m)=>sum+cmGeometryBytes(m.geometry),0);
  if(bytes>CM_UNDO_LIMIT)throw new Error('Geri alma için model belleği sınırı aşıldı. Kullanılmayan modelleri kaldırın.');
  cmReserveUndo(bytes);
  return pushUndoEntry({
    type:'scene',
    caseName:mt('case-name').value,
    camera:{position:Tt.position.clone(),up:Tt.up.clone(),target:Xt.target.clone(),zoom:Tt.zoom,projection:Tt.isOrthographicCamera?'ortho':'perspective',near:Tt.near,far:Tt.far,left:Tt.left,right:Tt.right,top:Tt.top,bottom:Tt.bottom},
    label,
    selectedModelId,
    groupPos:ts.position.clone(),
    trimPts:trimCurve.pts.map(p=>[p[0],p[1]]),
    curves:snapshotSavedCurves(),
    activeCurveId:cmActiveCurveId,
    models:We.map(m=>({
      record:{...m.userData,color:thkBaseHex(m),opacity:m.material.opacity,visible:m.visible},
      geometry:cmSnapshotGeometry(m.geometry),
      baseColor:Ug[m.userData.id]||m.userData.baseColor||m.userData.color
    }))
  });
}
function setTrimHint(msg,err=false){
  if(mt('trim-status')){mt('trim-status').textContent=msg;mt('trim-status').dataset.error=String(err);}
  if(mt('cm-trinfo'))mt('cm-trinfo').textContent=msg;
}
function cmPerformUndo(){
  if(caseBusy||!cmUndoStack.length)return;
  if(cmCurve.drawing){
    for(let i=cmUndoStack.length-1;i>=0;i--){
      if(cmUndoStack[i].type==='surf-curve'){
        const e=cmUndoStack.splice(i,1)[0];
        restoreSavedCurvesSnapshot(e.curves,e.activeId);
        cmCurveInfo();cmCurveKick();syncUndoButtons();
        return;
      }
    }
    if(cmCurve.pts.length>=3){cmCurve.pts.length-=3;cmCurve.dirs.length-=3;syncNamedCurvesUI();cmCurveInfo();cmCurveKick();}
    return;
  }
  if(trimCurve.drawing){
    for(let i=cmUndoStack.length-1;i>=0;i--){
      if(cmUndoStack[i].type==='trim-curve'){
        const e=cmUndoStack.splice(i,1)[0];
        trimCurve.pts=e.pts.map(p=>[p[0],p[1]]);
        trimCurveInfo();cmCurveKick();syncUndoButtons();
        return;
      }
    }
    if(trimCurve.pts.length){trimCurve.pts.pop();trimCurveInfo();cmCurveKick();}
    return;
  }
  const entry=cmUndoStack.pop();cmUndoBytes-=entry.bytes||0;
  if(entry.type==='trim-curve'){
    trimCurve.pts=entry.pts.map(p=>[p[0],p[1]]);
    trimCurveInfo();cmCurveKick();
    setTrimHint('Geri alındı: '+entry.label);
    setCaseMessage('Geri alındı: '+entry.label);
  }else if(entry.type==='surf-curve'){
    restoreSavedCurvesSnapshot(entry.curves,entry.activeId);
    cmCurveInfo();cmCurveKick();
    setCaseMessage('Geri alındı: '+entry.label);
  }else if(entry.type==='scene'){
    We.forEach(m=>{ts.remove(m);m.geometry.dispose();m.material.dispose();});
    We=[];hl.length=0;Ug={};
    entry.models.forEach((s,i)=>{
      const rec={...s.record};
      const geometry=s.geometry;s.geometry=null;geometry.computeVertexNormals();
      const m=new De(geometry,materialForRecord(rec,i));
      m.userData=rec;m.visible=rec.visible!==false;
      ts.add(m);We.push(m);hl.push(rec);Ug[rec.id]=s.baseColor||rec.baseColor||rec.color;
    });
    ts.position.copy(entry.groupPos);ts.updateMatrixWorld(true);
    if(entry.caseName!==undefined){mt('case-name').value=entry.caseName;updateCaseName();}
    if(entry.camera){
      const c=entry.camera;if((Tt.isOrthographicCamera?'ortho':'perspective')!==c.projection)zg(c.projection);
      Tt.position.copy(c.position);Tt.up.copy(c.up);Xt.target.copy(c.target);Tt.zoom=c.zoom;
      Tt.near=c.near;Tt.far=c.far;if(Tt.isOrthographicCamera)for(const key of ['left','right','top','bottom'])Tt[key]=c[key];
      Tt.updateProjectionMatrix();Xt.update();
    }
    selectedModelId=entry.selectedModelId;
    trimCurve.pts=entry.trimPts.map(p=>[p[0],p[1]]);
    restoreSavedCurvesSnapshot(entry.curves,entry.activeCurveId);
    rebuildCaseCards();selectCaseModel(selectedModelId);
    try{cmFillUnion();cmSyncSurfaceChips();}catch(e){}
    trimCurveInfo();cmCurveInfo();cmCurveKick();ye();
    setTrimHint('Geri alındı: '+entry.label);
    setCaseMessage('Geri alındı: '+entry.label);
  }
  cmDisposeUndo(entry);syncUndoButtons();
}

/* ===== Named Surface Curves Management (4 · Curve · Çıkarma) ===== */
function syncNamedCurvesUI(){
  const cur=cmSavedCurves.find(c=>c.id===cmActiveCurveId)||null;
  ['cm-curve-sel','rc-curve-sel'].forEach(sid=>{
    const sel=mt(sid);if(!sel)return;
    sel.replaceChildren();
    if(!cmSavedCurves.length){
      const o=document.createElement('option');o.value='';o.textContent='— Kayıtlı curve yok —';sel.appendChild(o);
      sel.disabled=true;
    }else{
      sel.disabled=caseBusy;
      cmSavedCurves.forEach(c=>{
        const mName=We.find(m=>m.userData.id===c.meshId)?.userData.name.replace(/\.stl$/i,'')||'Surface';
        const o=document.createElement('option');
        o.value=c.id;
        o.textContent=c.name+' ('+(c.pts.length/3)+' nokta · '+mName+')';
        sel.appendChild(o);
      });
      if(cur)sel.value=cur.id;
    }
  });
  ['cm-curve-name','rc-curve-name'].forEach(nid=>{
    const inp=mt(nid);if(!inp)return;
    if(document.activeElement!==inp)inp.value=cur?cur.name:'';
    inp.disabled=caseBusy;
  });
  ['cm-curve-chips','rc-curve-chips'].forEach(cid=>{
    const box=mt(cid);if(!box)return;
    box.replaceChildren();
    cmSavedCurves.forEach(c=>{
      const b=document.createElement('button');
      b.type='button';b.className='cv-chip';
      b.textContent=c.name+' ('+(c.pts.length/3)+')';
      b.setAttribute('aria-pressed',String(c.id===cmActiveCurveId));
      b.addEventListener('click',()=>cmSelectNamedCurve(c.id));
      box.appendChild(b);
    });
  });
  cmCurveInfo();
}
function cmSelectNamedCurve(id){
  const c=cmSavedCurves.find(x=>x.id===id);
  if(!c){
    cmActiveCurveId='';
    cmCurve.pts=[];cmCurve.dirs=[];cmCurve.meshId='';
    syncNamedCurvesUI();cmCurveKick();
    return;
  }
  cmActiveCurveId=c.id;
  cmCurve.pts=c.pts;
  cmCurve.dirs=c.dirs;
  cmCurve.meshId=c.meshId;
  mt('cm-cvclosed').checked=!!c.closed;
  if(mt('rc-cvclosed'))mt('rc-cvclosed').checked=!!c.closed;
  if(We.some(m=>m.userData.id===c.meshId)){
    cmSelectedSurfaceId=c.meshId;
    if(mt('cm-src'))mt('cm-src').value=c.meshId;
    if(mt('rc-sweep-src'))mt('rc-sweep-src').value=c.meshId;
    cmSyncSurfaceChips();
  }
  syncNamedCurvesUI();
  cmCurveKick();
}
function cmRenameActiveCurve(newName){
  const cur=cmSavedCurves.find(c=>c.id===cmActiveCurveId);
  if(!cur)return;
  const trimmed=String(newName||'').trim();
  if(trimmed)cur.name=trimmed;
  syncNamedCurvesUI();
  cmCurveKick();
}

function cmSyncSurfaceChips(){
  const sel=mt('cm-src'),boneSel=mt('cm-bone'),chips=mt('cm-surf-chips');
  if(!sel||!chips)return;
  const cur=sel.value;
  chips.replaceChildren();
  We.forEach(m=>{
    const btn=document.createElement('button');
    btn.type='button';
    btn.className='cm-chip';
    btn.textContent=m.userData.name.replace(/\.stl$/i,'');
    btn.title=m.userData.name;
    btn.setAttribute('aria-pressed',String(m.userData.id===cur));
    btn.addEventListener('click',()=>{
      sel.value=m.userData.id;
      cmSelectedSurfaceId=m.userData.id;
      if(boneSel.value===m.userData.id){
        const altBone=We.find(x=>x.userData.id!==m.userData.id&&(/bone|kemik|mand|maks|maxill|crani|jaw|defect/i.test(x.userData.name)||x.userData.role==='bone'));
        boneSel.value=altBone?altBone.userData.id:'';
        cmSelectedBoneId=boneSel.value;
      }
      cmSyncSurfaceChips();
      syncRightCommandModels();
    });
    chips.appendChild(btn);
  });
  const chosen=We.find(m=>m.userData.id===cur);
  if(mt('cm-src-hint'))mt('cm-src-hint').textContent=chosen?chosen.userData.name.replace(/\.stl$/i,''):'Yüzey seçin';
}

function syncRightCommandModels(){
  const fillSelect=(sid,preferredId,allowEmpty=false)=>{
    const s=mt(sid);if(!s)return;
    const prev=preferredId||s.value;
    s.replaceChildren();
    if(allowEmpty){
      const o=document.createElement('option');o.value='';o.textContent='— Seçilmedi —';s.appendChild(o);
    }else if(!We.length){
      const o=document.createElement('option');o.value='';o.textContent='— Model yok —';s.appendChild(o);
    }
    We.forEach(m=>{const o=document.createElement('option');o.value=m.userData.id;o.textContent=m.userData.name;s.appendChild(o);});
    if(prev&&We.some(m=>m.userData.id===prev))s.value=prev;
    else if(!allowEmpty&&We[0])s.value=We[0].userData.id;
    s.disabled=caseBusy||!We.length;
  };
  const defSurf=We.find(m=>m.userData.id===cmSelectedSurfaceId)
    ||We.find(m=>m.userData.id===selectedModelId)
    ||We.filter(m=>/surface|yuzey|yüzey|subper|implant|plate|plak/i.test(m.userData.name)&&!/birlesik|kenar_wrap|voronoi_yapi/i.test(m.userData.name))[0]
    ||We.slice().sort((a,b)=>a.userData.triangles-b.userData.triangles)[0];
  if(defSurf&&!We.some(m=>m.userData.id===cmSelectedSurfaceId))cmSelectedSurfaceId=defSurf.userData.id;
  const defBone=We.find(m=>m.userData.id===cmSelectedBoneId&&m.userData.id!==cmSelectedSurfaceId)
    ||We.filter(m=>m.userData.id!==cmSelectedSurfaceId&&(/bone|kemik|mand|maks|maxill|crani|jaw|defect/i.test(m.userData.name)||m.userData.role==='bone')).sort((a,b)=>b.userData.triangles-a.userData.triangles)[0];
  if(defBone&&!We.some(m=>m.userData.id===cmSelectedBoneId))cmSelectedBoneId=defBone.userData.id;

  fillSelect('trim-entity',selectedModelId);
  fillSelect('rc-wrap-src',cmSelectedSurfaceId||selectedModelId);
  fillSelect('rc-fit-src',cmSelectedSurfaceId||selectedModelId);
  fillSelect('rc-fit-bone',cmSelectedBoneId,true);
  fillSelect('rc-sweep-src',cmSelectedSurfaceId||selectedModelId);
  fillSelect('rc-lat-src',cmSelectedSurfaceId||selectedModelId);
  fillSelect('rc-gw-src',selectedModelId||cmSelectedSurfaceId);
  fillSelect('rc-cap-src',selectedModelId||cmSelectedSurfaceId);
  syncNamedCurvesUI();
}

function openRightCommand(cmd){
  if(cmd&&window.CUSTIMESHThk)window.CUSTIMESHThk.closePanel();
  const panel=mt('right-cmd-panel'),ws=mt('workspace');
  if(!panel)return;
  if(!cmd||activeRightCmd===cmd&&!panel.hidden){
    activeRightCmd='';
    panel.hidden=true;
    if(ws)ws.dataset.rightOpen='false';
    document.querySelectorAll('[data-open-cmd]').forEach(b=>b.setAttribute('aria-pressed','false'));
    if(trimCurve.drawing)trimCurveStop(false);
    if(cmCurve.drawing)cmCurveStop();
    return;
  }
  activeRightCmd=cmd;
  panel.hidden=false;
  if(ws)ws.dataset.rightOpen='true';
  document.querySelectorAll('[data-open-cmd]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.openCmd===cmd)));
  document.querySelectorAll('[data-rc-pane]').forEach(p=>p.hidden=p.dataset.rcPane!==cmd);
  const titles={
    trim:['Trim','Surface'],
    wrap:['İzokurve & Wrap','Surface'],
    fit:['Kenarı Yapıştırma','Sıfır Uyum'],
    sweep:['Circular Sweep','4 · Curve'],
    lattice:['Lattice','Voronoi'],
    genwrap:['Genel Wrap','Surface / Model'],
    cap:['Kenar Kapat','Surface Construction'],
    boolean:['Boolean','Solid']
  };
  const [t1,t2]=titles[cmd]||['Komut',''];
  if(mt('rc-tab-title'))mt('rc-tab-title').textContent=t1;
  if(mt('rc-tab-sub'))mt('rc-tab-sub').textContent=t2;
  syncRightCommandModels();
  cmFillUnion();
  if(cmd==='cap')capKick();
}

function cmOpenWithSurface(id){
  if(id)cmSelectedSurfaceId=id;
  cmOpen();
}

function cmOpen(preserveScroll=false){
  if(!We.length){setCaseMessage('Önce bir STL modeli yükleyin.',true);return;}
  if(window.CUSTIMESHThk)window.CUSTIMESHThk.closePanel();
  const sel=mt('cm-src'),boneSel=mt('cm-bone');
  sel.replaceChildren();boneSel.replaceChildren();
  const noneOpt=document.createElement('option');
  noneOpt.value='';noneOpt.textContent='— Seçilmedi —';
  boneSel.appendChild(noneOpt);
  We.forEach(m=>{
    const o1=document.createElement('option');o1.value=m.userData.id;o1.textContent=m.userData.name;sel.appendChild(o1);
    const o2=document.createElement('option');o2.value=m.userData.id;o2.textContent=m.userData.name;boneSel.appendChild(o2);
  });
  const explicitSurf=We.find(m=>m.userData.id===cmSelectedSurfaceId)||We.find(m=>m.userData.id===selectedModelId);
  const pickSurf=explicitSurf
    ||We.filter(m=>/surface|yuzey|yüzey|subper|implant|plate|plak/i.test(m.userData.name)&&!/birlesik|kenar_wrap|voronoi_yapi/i.test(m.userData.name))[0]
    ||We.slice().sort((a,b)=>a.userData.triangles-b.userData.triangles)[0];
  sel.value=pickSurf.userData.id;
  cmSelectedSurfaceId=pickSurf.userData.id;
  const pickBone=We.find(m=>m.userData.id===cmSelectedBoneId&&m.userData.id!==pickSurf.userData.id)
    ||We.filter(m=>m.userData.id!==pickSurf.userData.id&&(/bone|kemik|mand|maks|maxill|crani|jaw|defect/i.test(m.userData.name)||m.userData.role==='bone')).sort((a,b)=>b.userData.triangles-a.userData.triangles)[0];
  boneSel.value=pickBone?pickBone.userData.id:'';
  cmSelectedBoneId=boneSel.value;
  cmSyncSurfaceChips();
  syncRightCommandModels();
  cmFillUnion();
  syncNamedCurvesUI();
  mt('cm-modal').hidden=false;cmStatus('');
  const card=mt('cm-modal').querySelector('.cm-card');
  if(card)card.scrollTop=preserveScroll?cmLastScrollTop:0;
  mt('cm-close').focus({preventScroll:true});
}

function cmClose(){
  if(caseBusy)return;
  const card=mt('cm-modal').querySelector('.cm-card');
  if(card)cmLastScrollTop=card.scrollTop;
  mt('cm-modal').hidden=true;
}

const cmOwn=m=>/^CUSTIMESH_/.test(m.userData.name);
function cmSoup(g){const P=g.attributes.position.array,I=g.index?g.index.array:null,n=I?I.length:P.length/3,out=new Float32Array(n*3);
  for(let i=0;i<n;i++){const v=(I?I[i]:i)*3;out[i*3]=P[v];out[i*3+1]=P[v+1];out[i*3+2]=P[v+2];}return out;}

function cmFillUnion(){
  ['cm-ulist','rc-ulist'].forEach((lid,idx)=>{
    const box=mt(lid),A=mt(idx===0?'cm-opA':'rc-opA');
    if(!box||!A)return;
    const prevChecked=new Set([...box.querySelectorAll('input:checked')].map(c=>c.value)),prevIds=new Set([...box.querySelectorAll('input')].map(c=>c.value));
    const prevA=A.value;
    box.replaceChildren();A.replaceChildren();
    We.forEach(m=>{
      const l=document.createElement('label'),c=document.createElement('input');c.type='checkbox';c.value=m.userData.id;
      c.checked=prevChecked.has(m.userData.id)||(!prevIds.has(m.userData.id)&&/^CUSTIMESH_(Kenar_Wrap|Silindir_Wrap|Lattice|GenelWrap|Kapali)/.test(m.userData.name));
      c.addEventListener('change',()=>{
        const other=mt(idx===0?'rc-ulist':'cm-ulist')?.querySelector(`input[value="${m.userData.id}"]`);
        if(other)other.checked=c.checked;
      });
      l.append(c,document.createTextNode(' '+m.userData.name));box.appendChild(l);
      const o=document.createElement('option');o.value=m.userData.id;o.textContent=m.userData.name;A.appendChild(o);
    });
    const first=box.querySelector('input:checked');
    A.value=We.some(m=>m.userData.id===prevA)?prevA:(first?first.value:(We[0]?We[0].userData.id:''));
  });
  cmOpChanged();
}
function cmOpChanged(){
  try{cmCurveInfo();}catch(e){}
  const op=mt('cm-op').value;
  if(mt('rc-op')&&mt('rc-op').value!==op)mt('rc-op').value=op;
  mt('cm-opA-wrap').hidden=op!=='subtract';
  if(mt('rc-opA-wrap'))mt('rc-opA-wrap').hidden=op!=='subtract';
  const lbl=op==='subtract'?'Çıkarılacak modeller (B)':op==='intersect'?'Kesişimi alınacak modeller':'Birleştirilecek modeller';
  mt('cm-ulabel').textContent=lbl;
  if(mt('rc-ulabel'))mt('rc-ulabel').textContent=lbl;
  const btnTxt=op==='subtract'?'Farkı Uygula (A − B)':op==='intersect'?'Kesişimi Uygula':'Birleştir (Union)';
  mt('cm-union').textContent=btnTxt;
}
function cmBusy(b){
  mt('cm-modal').querySelectorAll('input,select,.cm-chip,.cx-btn').forEach(e=>e.disabled=b);
  mt('right-cmd-panel')?.querySelectorAll('input,select,button:not(#rc-close-btn):not(#rc-operation-cancel)').forEach(e=>e.disabled=b);
  mt('cm-close').disabled=b;mt('cm-prog').hidden=!b;
  if(mt('rc-prog'))mt('rc-prog').hidden=!b;
  const cancel=mt('rc-operation-cancel');if(cancel){cancel.hidden=!b;cancel.disabled=false;}
  mt('right-cmd-panel')?.setAttribute('aria-busy',String(b));
  mt('cm-modal').setAttribute('aria-busy',String(b));
  mt('cm-cancel').disabled=false;mt('cm-cancel').textContent=b?'İptal':'Kapat';
  if(!b)syncRightCommandModels();
}
async function cmCommit(items){
  cmStatus('Modeller sahneye ekleniyor…');mt('cm-cancel').disabled=true;
  if(mt('rc-operation-cancel'))mt('rc-operation-cancel').disabled=true;
  const prepared=[];let undo=null;
  if(cmCancelled)throw new DOMException('İşlem iptal edildi.','AbortError');
  if(We.length+items.length>CASE_LIMITS.models)throw new Error('Sahnede çok fazla model var. Kullanılmayan modelleri kaldırın.');
  if(We.reduce((n,m)=>n+m.userData.triangles,0)+items.reduce((n,it)=>n+it.pos.length/9,0)>CASE_LIMITS.triangles)throw new Error('Sonuç bu vaka için çok büyük. Ayrıntı değerini artırın veya kullanılmayan modelleri kaldırın.');
  try{
    for(const it of items){
      const packed=await packSTLPositions(it.pos,()=>{});let id;do{id='stl_'+(++caseSerial);}while(hl.some(d=>d.id===id));
      const record={id,name:it.name,role:'mesh',color:it.color,opacity:1,...packed,visible:it.visible!==false,sourceBytes:0,sourceSHA256:'',baseColor:it.color,baseOpacity:1};
      prepared.push({record,geometry:Hg(record)});
    }
    undo=pushSceneUndo('Custom Mesh ('+items.map(x=>x.name).join(', ')+')');
    commitSTLFiles(prepared,false);
  }catch(error){prepared.forEach(p=>p.geometry.dispose());if(undo)cmDropUndo(undo);throw error;}
  ['cm-results','rc-results'].forEach(rid=>{
    const box=mt(rid);if(!box)return;
    box.replaceChildren();
    items.forEach(it=>{
      const row=document.createElement('div');row.className='cm-res';
      const left=document.createElement('div'),b=document.createElement('b'),s=document.createElement('span'),btn=document.createElement('button');
      b.textContent=it.name;s.textContent=it.desc||'Hazır';
      left.append(b,s);btn.textContent='STL İndir';btn.onclick=()=>cmDownload(cmSTLBlob(it.pos),it.name+'.stl');
      row.append(left,btn);box.appendChild(row);
    });
  });
  cmFillUnion();
  syncRightCommandModels();
}

/* ===== 3-matic Screen-Space Exact Mesh Trim ===== */
async function trimMeshByScreenPoly(mesh,normPts){
  const rect=_e.domElement.getBoundingClientRect();
  gi.updateMatrixWorld(true);Tt.updateMatrixWorld(true);Tt.updateProjectionMatrix();
  const g=mesh.geometry;
  return cmWorkerCall('cmScreenTrim',[
    new Float32Array(g.attributes.position.array),g.index?new Uint32Array(g.index.array):null,
    normPts.map(p=>p.slice()),
    {W:rect.width,H:rect.height,M:Array.from(mesh.matrixWorld.elements),Vw:Array.from(Tt.matrixWorldInverse.elements),Pj:Array.from(Tt.projectionMatrix.elements)}
  ],text=>{setTrimHint(text+'…');cmStatus(text+'…');});
}

async function applyScreenTrim(fromModal=false){
  if(caseBusy)return;
  if(trimCurve.pts.length<3){
    const msg='Trim için önce ekrana en az 3 noktalı bir Trim Curve çizin.';
    setTrimHint(msg,true);if(fromModal)cmStatus(msg,true);else setCaseMessage(msg,true);
    return;
  }
  const targetId=mt('trim-entity')?.value||selectedModelId;
  const mesh=We.find(m=>m.userData.id===targetId);
  if(!mesh){
    const msg='Lütfen soldaki modellerden trim yapılacak STL modelini seçin.';
    setTrimHint(msg,true);if(fromModal)cmStatus(msg,true);else setCaseMessage(msg,true);
    return;
  }
  const method=fromModal?(mt('cm-trmode')?.value||'remove_inner'):(document.querySelector('input[name="trim-method"]:checked')?.value||'remove_inner');
  cmCancelled=false;setCaseBusy(true);cmBusy(true);
  const controlsEnabled=Xt.enabled;Xt.enabled=false;
  setTrimHint('Trim uygulanıyor…');
  await caseYield();
  const staged=[];let committed=false,stagedMaterial=null;
  try{
    const {inner,outer}=await trimMeshByScreenPoly(mesh,trimCurve.pts);
    if(cmCancelled)throw new DOMException('İşlem iptal edildi.','AbortError');
    if(!inner.length)throw new Error('Çizilen Trim Curve seçili model ile kesişmedi (iç bölgede yüzey yok).');
    const both=method!=='remove_inner'&&method!=='remove_outer';
    if(!outer.length&&(method==='remove_inner'||both))throw new Error('Trim Curve modelin tamamını kapsıyor; dış bölgede yüzey kalmadı.');
    if(both&&We.length>=CASE_LIMITS.models)throw new Error('Bir vakada en fazla 32 STL olabilir.');
    const kept=method==='remove_outer'?inner:outer;
    const total=We.reduce((n,m)=>n+m.userData.triangles,0)-mesh.userData.triangles+(kept.length+(both?inner.length:0))/9;
    if(total>CASE_LIMITS.triangles)throw new Error('Trim sonucu dört milyon üçgen sınırını aşıyor.');
    const packed=await packSTLPositions(kept,()=>{});
    const record={...mesh.userData,...packed,color:thkBaseHex(mesh),opacity:mesh.material.opacity,visible:true,sourceSHA256:'',sourceBytes:0};
    const geometry=Hg(record);staged.push(geometry);
    let inMesh=null;
    if(both){
      const packedIn=await packSTLPositions(inner,()=>{});let newId;do{newId='stl_'+(++caseSerial);}while(hl.some(d=>d.id===newId));
      const inRecord={id:newId,name:mesh.userData.name.replace(/\.stl$/i,'')+'_Inner.stl',role:mesh.userData.role||'mesh',color:'#43dfc4',opacity:1,...packedIn,visible:true,sourceBytes:0,sourceSHA256:'',baseColor:'#43dfc4',baseOpacity:1};
      const inGeometry=Hg(inRecord);staged.push(inGeometry);
      stagedMaterial=materialForRecord(inRecord,We.length);inMesh=new De(inGeometry,stagedMaterial);inMesh.userData=inRecord;
    }
    if(cmCancelled)throw new DOMException('İşlem iptal edildi.','AbortError');
    pushSceneUndo('Trim ('+mesh.userData.name+')');
    const oldGeo=mesh.geometry;Object.assign(mesh.userData,record);mesh.geometry=geometry;mesh.visible=true;oldGeo.dispose();
    if(inMesh){ts.add(inMesh);We.push(inMesh);hl.push(inMesh.userData);Ug[inMesh.userData.id]=inMesh.userData.color;}
    committed=true;
    trimCurveStop(false);
    trimCurve.pts=[];
    rebuildCaseCards();
    selectCaseModel(mesh.userData.id);
    trimCurveInfo();cmCurveKick();ye();
    const okMsg=mesh.userData.name+' trimlendi (Ctrl+Z ile geri alınabilir).';
    setTrimHint(okMsg,false);setCaseMessage(okMsg,false);
    if(fromModal)cmStatus(okMsg,false);
  }catch(e){
    if(!committed){staged.forEach(g=>g.dispose());stagedMaterial?.dispose();}
    const error=e?.name!=='AbortError';setTrimHint(e.message,error);setCaseMessage(e.message,error);
    if(fromModal)cmStatus(e.message,true);
  }finally{
    Xt.enabled=controlsEnabled;setCaseBusy(false);cmBusy(false);
  }
}

async function cmGenerate(kind){
  if(caseBusy)return;
  if(kind==='trim'){await applyScreenTrim(true);return;}
  const num=id=>Number(String(mt(id).value).replace(',','.')),fmt=v=>String(+v.toFixed(3)),bad=(v,a,b)=>!Number.isFinite(v)||v<a||v>b;
  const offVal=num('cm-moff'),wrap={wOuter:num('cm-wo'),wHole:num('cm-wh'),offset:offVal,detail:num('cm-vsd'),surfMode:mt('cm-surf').value,reduce:num('cm-red')};
  const needWrap=kind==='edge'||kind==='cyl'||kind==='lat'||kind==='cvtube'||kind==='cvwrap';
  if(needWrap&&(bad(offVal,.03,1)||bad(wrap.detail,.03,1))){cmStatus('İçe/Dışa ofset 0,03–1 mm ve wrap detayı 0,03–1 mm olmalı.',true);return;}
  if(kind==='edge'&&bad(wrap.wOuter,.05,5)||kind==='cyl'&&bad(wrap.wHole,.05,5)){cmStatus('İzokurve genişliği 0,05–5 mm olmalı.',true);return;}
  if((needWrap||kind==='union')&&bad(wrap.reduce,0,.05)){cmStatus('Reduce 0–0,05 mm olmalı (0 = kapalı).',true);return;}
  cmCancelled=false;setCaseBusy(true);cmBusy(true);mt('cm-results').replaceChildren();if(mt('rc-results'))mt('rc-results').replaceChildren();cmStatus('Geometri hazırlanıyor…');await caseYield();
  try{
    const items=[];let hideIds=[];
    if(kind==='union'){
      const op=mt('cm-op').value,names={union:'Birleşim',subtract:'Fark',intersect:'Kesişim'};
      const checked=[...mt('cm-ulist').querySelectorAll('input:checked')].map(c=>We.find(m=>m.userData.id===c.value)).filter(Boolean);
      let sel;
      if(op==='subtract'){
        const A=We.find(m=>m.userData.id===mt('cm-opA').value);if(!A)throw new Error('Ana model (A) seçin.');
        const B=checked.filter(m=>m!==A);if(!B.length)throw new Error('Çıkarılacak en az bir model (B) işaretleyin.');sel=[A,...B];
      }else{sel=checked;if(sel.length<2)throw new Error('En az iki model seçin.');}
      const ud=num('cm-ud');if(bad(ud,.03,1))throw new Error('Boolean detayı 0,03–1 mm olmalı.');
      const parts=sel.map(m=>({name:m.userData.name,P:cmSoup(m.geometry)}));
      const r=await cmWorkerCall('cuBoolean',[parts,{op,detail:ud,reduce:wrap.reduce,offset:offVal}],s=>cmStatus(s+'…'));
      const tag=sel[0].userData.name.replace(/\.stl$/i,'').replace(/^CUSTIMESH_/,'').slice(0,24);
      const nm=op==='union'?'CUSTIMESH_Union_'+sel.length+'_parca':op==='subtract'?'CUSTIMESH_Fark_'+tag+'_eksi_'+(sel.length-1):'CUSTIMESH_Kesisim_'+sel.length+'_parca';
      items.push({name:nm,desc:names[op]+' · '+Eh.format(r.mesh.length/9)+' üçgen · '+r.volume.toFixed(2)+' mm³ · '+r.area.toFixed(1)+' mm²',pos:r.mesh,color:'#5b8def',visible:true});
      hideIds=sel.map(m=>m.userData.id);
    }else{
      const activeCurve=cmSavedCurves.find(c=>c.id===cmActiveCurveId)||null;
      const srcId=(kind==='cvtube'||kind==='cvcut'||kind==='cvwrap')?(activeCurve?.meshId||mt('cm-src').value):mt('cm-src').value;
      const mesh=We.find(m=>m.userData.id===srcId);if(!mesh)throw new Error('Lütfen kaynak surface seçin.');
      const boneMesh=We.find(m=>m.userData.id===mt('cm-bone').value&&m.userData.id!==mesh.userData.id);
      if(kind==='surface'&&!boneMesh)throw new Error('Yüzeyi kemiğe uydurmak için hedef kemik STL seçin.');
      const g=mesh.geometry,V=Float64Array.from(g.attributes.position.array),F=g.index?Uint32Array.from(g.index.array):Uint32Array.from({length:V.length/3},(_,i)=>i);
      const baseTag=mesh.userData.name.replace(/\.stl$/i,'').slice(0,28);
      const boneOpt=o=>{if(boneMesh){const bg=boneMesh.geometry;o.Vb=Float64Array.from(bg.attributes.position.array);o.Fb=Uint32Array.from(bg.index.array);}return o;};
      if(kind==='surface'){
        const fine=num('cm-msd');if(bad(fine,.03,.2))throw new Error('Yüzey detayı 0,03–0,2 mm olmalı.');
        const r=await cmRunWorker(V,F,boneOpt({wOuter:wrap.wOuter,wHole:wrap.wHole,offset:offVal,fine,fitMode:mt('cm-fit').value||'edge'}),s=>cmStatus(s+'…'),'cmFitSurface');
        items.push({name:'CUSTIMESH_Surface_'+baseTag,desc:'İnce kenarı kemiğe sıfır temiz yüzey',pos:r.surface,color:'#38b2ac',visible:true});
      }else if(kind==='edge'||kind==='cyl'){
        const o={...wrap,kind:kind==='cyl'?'holes':'outer'};
        const r=await cmWorkerCall('cuEdge',[V,F,o],s=>cmStatus(s+'…'),[]),nm=kind==='cyl'?'Silindir':'Kenar';
        if(mt('cm-bands').checked)items.push({name:'CUSTIMESH_'+nm+'_Izokurve_'+fmt(r.w)+'mm',desc:'İzokurve bandı · '+fmt(r.w)+' mm',pos:r.band,color:'#f0a93b',visible:false});
        items.push({name:'CUSTIMESH_'+nm+'_Wrap_'+fmt(r.w)+'mm',desc:nm+' wrap',pos:r.wrapped,color:'#1fb5a0',visible:true});
      }else if(kind==='cvtube'||kind==='cvcut'||kind==='cvwrap'){
        const curvePts=activeCurve?activeCurve.pts:cmCurve.pts;
        if(!curvePts||curvePts.length<6)throw new Error('Önce surface üzerinde en az 2 noktalı bir curve çizin veya listeden seçin.');
        const cvLabel=(activeCurve?activeCurve.name:'Curve').replace(/[^a-zA-Z0-9_-]+/g,'_');
        const d=num('cm-cvd'),cw=num('cm-cvw'),ct=num('cm-cvt');
        if(bad(d,.1,10)||(kind==='cvwrap'&&(mt('cm-cvmode').value==='wrap'?bad(cw,.05,2):bad(ct,.1,2))))throw new Error('Silindir çapı 0,1–10 mm, izokurve genişliği 0,05–2 mm, sweep çapı 0,1–2 mm olmalı.');
        const isClosed=activeCurve?!!activeCurve.closed:mt('cm-cvclosed').checked;
        const o={op:kind==='cvtube'?'tube':kind==='cvcut'?'cut':'cutwrap',curve:Float64Array.from(curvePts),closed:isClosed,cvr:d/2,cvw:cw,sweepR:ct/2,cvmode:mt('cm-cvmode').value,offset:offVal,detail:wrap.detail,reduce:wrap.reduce};
        const r=await cmWorkerCall('cuCurveOp',[V,F,o],s=>cmStatus(s+'…')),dd=fmt(d);
        if(kind==='cvtube')items.push({name:'CUSTIMESH_'+cvLabel+'_Silindir_'+dd+'mm',desc:cvLabel+' · Circular sweep Ø'+dd+' mm',pos:r.tube,color:'#d9568b',visible:true});
        else if(kind==='cvcut'){items.push({name:'CUSTIMESH_Surface_Kesim_'+cvLabel+'_'+dd+'mm',desc:'Surface − '+cvLabel+' Ø'+dd+' mm',pos:r.cut,color:'#38b2ac',visible:true});hideIds=[mesh.userData.id];}
        else{
          const sweep=o.cvmode==='sweep';
          if(!sweep&&mt('cm-bands').checked&&r.band)items.push({name:'CUSTIMESH_'+cvLabel+'_Izokurve_'+fmt(cw)+'mm',desc:cvLabel+' kesim kenarı izokurve bandı',pos:r.band,color:'#f0a93b',visible:false});
          items.push({name:sweep?'CUSTIMESH_'+cvLabel+'_Sweep_'+fmt(ct)+'mm':'CUSTIMESH_'+cvLabel+'_Wrap_'+fmt(cw)+'mm',desc:sweep?cvLabel+' kesim kenarı circular sweep · Ø'+fmt(ct)+' mm':cvLabel+' kesim kenarı wrap · '+fmt(cw)+' mm bant',pos:r.wrapped,color:'#1fb5a0',visible:true});
        }
      }else if(kind==='lat'){
        const cell=num('cm-cell'),strut=num('cm-strut'),mode=mt('cm-lmode').value;
        if(bad(cell,.3,3)||bad(strut,.04,1)||strut>=cell*.85)throw new Error('Hücre 0,3–3 mm, strut 0,04–1 mm (hücrenin %85’inden küçük) olmalı.');
        if(mode==='sheet'){
          const fine=num('cm-msd');if(bad(fine,.03,.2))throw new Error('Yüzey detayı 0,03–0,2 mm olmalı.');
          const r=await cmRunWorker(V,F,boneOpt({wOuter:wrap.wOuter,wHole:wrap.wHole,cell,strut,offset:offVal,thickness:offVal*2,onlyVoronoi:true,reduce:wrap.reduce,fine,fitMode:mt('cm-fit').value||'edge'}),s=>cmStatus(s+'…'),'cmMesh');
          const pos=r.voronoiOnly;if(!pos||pos.length<9)throw new Error('Lattice üretilemedi.');
          items.push({name:'CUSTIMESH_Lattice_Yuzey_'+fmt(cell)+'mm',desc:'Yüzey tabanlı Voronoi · '+r.cells+' hücre',pos,color:'#2f8fd8',visible:true});
        }else{
          const ld=num('cm-lsd');if(bad(ld,.03,1))throw new Error('Tüp detayı 0,03–1 mm olmalı.');
          const r=await cmWorkerCall('cuLattice',[V,F,{wOuter:wrap.wOuter,wHole:wrap.wHole,cell,strut,detail:ld,offset:offVal,surfMode:wrap.surfMode,reduce:wrap.reduce}],s=>cmStatus(s+'…'),[]);
          items.push({name:'CUSTIMESH_Lattice_'+fmt(cell)+'mm_'+r.cells+'hucre',desc:'Tüp Voronoi · '+r.cells+' hücre, Ø'+fmt(strut)+' mm',pos:r.mesh,color:'#2f8fd8',visible:true});
        }
      }
    }
    await cmCommit(items);
    if(hideIds.length&&mt('cm-hidesrc').checked)hideIds.forEach(id=>{const cb=mt(id+'-visible');if(cb&&cb.checked){cb.checked=false;cb.dispatchEvent(new Event('change'));}});
    cmStatus('Tamamlandı: '+items.length+' model sahneye eklendi.');setCaseMessage(items.map(x=>x.name).join(', ')+' eklendi.');
  }catch(e){cmStatus(e.name==='AbortError'?'İşlem iptal edildi.':'Hata: '+e.message,e.name!=='AbortError');}
  finally{setCaseBusy(false);cmBusy(false);}
}

function cmCurveInfo(){
  const cur=cmSavedCurves.find(c=>c.id===cmActiveCurveId)||null;
  const n=cur?cur.pts.length/3:cmCurve.pts.length/3;
  const cname=cur?cur.name:'Curve';
  mt('cm-cvinfo').textContent=n?cname+': '+n+' nokta'+(n<2?' (en az 2 gerekli)'+' · Kayıtlı':''):'Kayıtlı/aktif curve yok';
  if(cmCurve.drawing)mt('cm-draw-msg').textContent=n?cname+': '+n+' nokta · Tıkla: Nokta ekle · Sürükle: Ekranı döndür · Ctrl+Z: Geri al':cname+' · Surface üzerine tıklayın (ekranı serbestçe döndürebilirsiniz)';
}
function trimCurveInfo(){
  const n=trimCurve.pts.length;
  const txt=n?'Trim Curve: '+n+' nokta'+(n<3?' (en az 3 nokta gerekli)':' · Apply ile seçili modeli kesin'):'Ekrana genel Trim curve çizin, soldan model seçip Apply butonuna basın.';
  setTrimHint(txt,false);
  if(trimCurve.drawing)mt('cm-draw-msg').textContent=n?'Trim Curve (Ekran): '+n+' nokta · (Ctrl+Z: Geri al, Noktayı sürükle: Taşı)':'Genel ekrana tıklayarak Trim poligonu çizin (model seçmeniz gerekmez)';
  if(mt('trim-draw-btn')){
    mt('trim-draw-btn').classList.toggle('tm-draw-active',trimCurve.drawing);
    mt('trim-draw-btn').textContent=trimCurve.drawing?'Çizim Aktif (Bitir)':'+ Trim Curve Çiz';
  }
}
function cmCurveKick(){if(!cmCurve.raf)cmCurve.raf=requestAnimationFrame(cmCurveDraw);}
function cmProject(M,V,P,x,y,z,w,h){
  const wx=M[0]*x+M[4]*y+M[8]*z+M[12],wy=M[1]*x+M[5]*y+M[9]*z+M[13],wz=M[2]*x+M[6]*y+M[10]*z+M[14];
  const vx=V[0]*wx+V[4]*wy+V[8]*wz+V[12],vy=V[1]*wx+V[5]*wy+V[9]*wz+V[13],vz=V[2]*wx+V[6]*wy+V[10]*wz+V[14];
  const cx=P[0]*vx+P[4]*vy+P[8]*vz+P[12],cy=P[1]*vx+P[5]*vy+P[9]*vz+P[13],cw=P[3]*vx+P[7]*vy+P[11]*vz+P[15];
  return cw<=1e-9?null:[(cx/cw+1)/2*w,(1-cy/cw)/2*h];
}
function cmCurveDraw(){
  cmCurve.raf=0;let c=mt('cm-draw-canvas');
  if(!c){c=document.createElement('canvas');c.id='cm-draw-canvas';document.body.appendChild(c);}
  const rect=_e.domElement.getBoundingClientRect(),dpr=window.devicePixelRatio||1,W=Math.round(rect.width*dpr),H=Math.round(rect.height*dpr);
  Object.assign(c.style,{position:'fixed',left:rect.left+'px',top:rect.top+'px',width:rect.width+'px',height:rect.height+'px',pointerEvents:'none',zIndex:'30'});
  if(c.width!==W||c.height!==H){c.width=W;c.height=H;}
  const g=c.getContext('2d');g.setTransform(dpr,0,0,dpr,0,0);g.clearRect(0,0,rect.width,rect.height);

  // 1) Draw all Saved Named Surface Curves (active curve bright pink, inactive curves soft purple-pink, with name tag)
  const Vw=Tt.matrixWorldInverse.elements,Pj=Tt.projectionMatrix.elements;
  cmSavedCurves.forEach(cv=>{
    const mesh=We.find(m=>m.userData.id===cv.meshId),n=cv.pts.length/3;
    if(!mesh||!mesh.visible||!n)return;
    const isAct=cv.id===cmActiveCurveId;
    const M=mesh.matrixWorld.elements,pts=[];
    for(let i=0;i<n;i++)pts.push(cmProject(M,Vw,Pj,cv.pts[i*3],cv.pts[i*3+1],cv.pts[i*3+2],rect.width,rect.height));
    g.lineWidth=isAct?2.6:1.7;
    g.strokeStyle=isAct?'#e0568b':'rgba(180,80,135,0.6)';
    g.lineJoin='round';g.beginPath();let started=false;
    pts.forEach(p=>{if(!p){started=false;return;}if(!started){g.moveTo(p[0],p[1]);started=true;}else g.lineTo(p[0],p[1]);});
    if(cv.closed&&n>2&&pts[0]&&pts[n-1])g.lineTo(pts[0][0],pts[0][1]);
    g.stroke();
    pts.forEach((p,i)=>{
      if(!p)return;
      g.beginPath();g.arc(p[0],p[1],isAct?(i===0?5.5:4):3,0,6.2832);
      g.fillStyle=i===0?'#ffffff':(isAct?'#e0568b':'rgba(180,80,135,0.75)');
      g.fill();g.lineWidth=isAct?2:1.2;g.strokeStyle=isAct?'#e0568b':'rgba(140,50,100,0.7)';g.stroke();
    });
    if(pts[0]){
      const lbl=cv.name;
      g.font=(isAct?'600':'500')+' 10.5px Inter, Segoe UI, sans-serif';
      const tw=g.measureText(lbl).width+10;
      const lx=pts[0][0]+8,ly=pts[0][1]-16;
      g.fillStyle=isAct?'#e0568b':'rgba(60,30,50,0.72)';
      g.beginPath();g.roundRect?g.roundRect(lx,ly,tw,17,4):g.rect(lx,ly,tw,17);g.fill();
      g.fillStyle='#ffffff';
      g.fillText(lbl,lx+5,ly+12);
    }
  });

  // 2) Draw Separate 3-matic Screen-Space Trim Curve (red vertex dots + green border + translucent green fill)
  const tn=trimCurve.pts.length;
  if(tn){
    const tpts=trimCurve.pts.map(p=>[p[0]*rect.width,p[1]*rect.height]);
    const preview=trimCurve.drawing&&trimCurve.hoverPt&&trimCurve.dragIdx<0?[...tpts,trimCurve.hoverPt]:tpts;
    if(preview.length>=3){
      g.beginPath();
      g.moveTo(preview[0][0],preview[0][1]);
      for(let i=1;i<preview.length;i++)g.lineTo(preview[i][0],preview[i][1]);
      g.closePath();
      g.fillStyle='rgba(88, 255, 88, 0.38)';
      g.fill();
    }
    if(tpts.length>=2){
      g.beginPath();
      g.moveTo(tpts[0][0],tpts[0][1]);
      for(let i=1;i<tpts.length;i++)g.lineTo(tpts[i][0],tpts[i][1]);
      if(tpts.length>=3)g.closePath();
      g.lineWidth=2.2;
      g.lineJoin='round';
      g.strokeStyle='#38761d';
      g.stroke();
    }
    if(trimCurve.drawing&&trimCurve.hoverPt&&trimCurve.dragIdx<0&&tpts.length>=1){
      g.save();
      g.setLineDash([4,4]);
      g.beginPath();
      const last=tpts[tpts.length-1];
      g.moveTo(last[0],last[1]);
      g.lineTo(trimCurve.hoverPt[0],trimCurve.hoverPt[1]);
      if(tpts.length>=2)g.lineTo(tpts[0][0],tpts[0][1]);
      g.lineWidth=1.5;
      g.strokeStyle='#2e6b14';
      g.stroke();
      g.restore();
    }
    tpts.forEach(p=>{
      g.beginPath();
      g.arc(p[0],p[1],5.5,0,6.2832);
      g.fillStyle='#ff0d0d';
      g.fill();
      g.lineWidth=1.4;
      g.strokeStyle='#8b0000';
      g.stroke();
    });
  }

  if(cmCurve.drawing||cmSavedCurves.length||trimCurve.drawing||tn)cmCurveKick();
}

function cmCurveStart(createNew=false,fromModal=true){
  if(trimCurve.drawing)trimCurveStop(false);
  const srcId=fromModal?(mt('cm-src')?.value||cmSelectedSurfaceId):(mt('rc-sweep-src')?.value||cmSelectedSurfaceId||selectedModelId);
  const mesh=We.find(m=>m.userData.id===srcId)||We[0];
  if(!mesh){
    const msg='Önce kaynak surface STL yükleyin/seçin.';
    if(fromModal)cmStatus(msg,true);else setCaseMessage(msg,true);
    return;
  }
  cmSelectedSurfaceId=mesh.userData.id;
  if(mt('cm-src'))mt('cm-src').value=mesh.userData.id;
  if(mt('rc-sweep-src'))mt('rc-sweep-src').value=mesh.userData.id;
  pushSurfCurveUndo('Curve çizim başlangıcı');
  let cur=cmSavedCurves.find(c=>c.id===cmActiveCurveId);
  if(createNew||!cur||cur.meshId!==mesh.userData.id){
    const id='scv_'+(++cmCurveSerial);
    const defaultName='Curve '+cmCurveSerial;
    cur={id,name:defaultName,meshId:mesh.userData.id,pts:[],dirs:[],closed:mt('cm-cvclosed').checked};
    cmSavedCurves.push(cur);
    cmActiveCurveId=id;
  }
  cmCurve.pts=cur.pts;
  cmCurve.dirs=cur.dirs;
  cmCurve.meshId=cur.meshId;
  cmCurve.fromModal=!!fromModal;
  const cb=mt(mesh.userData.id+'-visible');if(cb&&!cb.checked){cb.checked=true;cb.dispatchEvent(new Event('change'));}
  if(fromModal){
    const card=mt('cm-modal').querySelector('.cm-card');
    if(card)cmLastScrollTop=card.scrollTop;
    mt('cm-modal').hidden=true;
  }
  cmCurve.drawing=true;
  mt('cm-draw-bar').dataset.drawKind='surf';
  mt('cm-draw-bar').hidden=false;
  _e.domElement.style.cursor='crosshair';
  syncNamedCurvesUI();
  cmCurveInfo();cmCurveKick();
}
function cmCurveStop(){
  const wasModal=cmCurve.fromModal;
  cmCurve.drawing=false;
  mt('cm-draw-bar').hidden=true;
  _e.domElement.style.cursor='';
  // Remove empty curve if user exited without adding any points
  const curIdx=cmSavedCurves.findIndex(c=>c.id===cmActiveCurveId);
  if(curIdx>=0&&cmSavedCurves[curIdx].pts.length===0){
    cmSavedCurves.splice(curIdx,1);
    const last=cmSavedCurves[cmSavedCurves.length-1];
    cmActiveCurveId=last?last.id:'';
    if(last){cmCurve.pts=last.pts;cmCurve.dirs=last.dirs;cmCurve.meshId=last.meshId;}
    else{cmCurve.pts=[];cmCurve.dirs=[];cmCurve.meshId='';}
  }
  syncNamedCurvesUI();
  if(wasModal)cmOpen(true);
  cmCurveInfo();cmCurveKick();
}
function cmCurveUndo(){
  cmPerformUndo();
}
function cmCurveClear(){
  const curIdx=cmSavedCurves.findIndex(c=>c.id===cmActiveCurveId);
  if(curIdx<0&&!cmCurve.pts.length)return;
  pushSurfCurveUndo('Surface curve silme');
  if(curIdx>=0){
    cmSavedCurves.splice(curIdx,1);
    const next=cmSavedCurves[Math.min(curIdx,cmSavedCurves.length-1)]||null;
    cmSelectNamedCurve(next?next.id:'');
  }else{
    cmCurve.pts=[];cmCurve.dirs=[];
  }
  syncNamedCurvesUI();cmCurveInfo();cmCurveKick();
}
function cmCurvePick(e){
  const mesh=We.find(m=>m.userData.id===cmCurve.meshId);if(!mesh)return;
  const rect=_e.domElement.getBoundingClientRect(),rc=new Is;gi.updateMatrixWorld(!0);
  rc.setFromCamera(new Dt((e.clientX-rect.left)/rect.width*2-1,-(e.clientY-rect.top)/rect.height*2+1),Tt);
  const hit=rc.intersectObjects([mesh],!1)[0];
  if(!hit){mt('cm-draw-msg').textContent='Tıklama surface üzerine denk gelmedi (ekranı sürükleyerek döndürebilirsiniz)';return;}
  pushSurfCurveUndo('Surface curve noktası');
  const p=mesh.worldToLocal(hit.point.clone());cmCurve.pts.push(p.x,p.y,p.z);
  {const d=rc.ray.direction,M=mesh.matrixWorld.elements;cmCurve.dirs.push(M[0]*d.x+M[1]*d.y+M[2]*d.z,M[4]*d.x+M[5]*d.y+M[6]*d.z,M[8]*d.x+M[9]*d.y+M[10]*d.z);}
  syncNamedCurvesUI();cmCurveInfo();cmCurveKick();
}
function cmCurveFinish(dbl){
  const P=cmCurve.pts,n=P.length/3;
  if(dbl&&n>=2&&Math.hypot(P[n*3-3]-P[n*3-6],P[n*3-2]-P[n*3-5],P[n*3-1]-P[n*3-4])<.5){P.length-=3;cmCurve.dirs.length-=3;}
  cmCurveStop();
}

/* ===== 3-matic Screen Trim Curve Handlers ===== */
function trimCurveStart(fromModal=false){
  if(cmCurve.drawing)cmCurve.drawing=false;
  trimCurve.fromModal=!!fromModal;
  trimCurve.drawing=true;
  trimCurve.dragIdx=-1;
  if(fromModal){
    const card=mt('cm-modal').querySelector('.cm-card');
    if(card)cmLastScrollTop=card.scrollTop;
    mt('cm-modal').hidden=true;
  }else if(activeRightCmd!=='trim'){
    openRightCommand('trim');
  }
  mt('cm-draw-bar').dataset.drawKind='trim';
  mt('cm-draw-bar').hidden=false;
  _e.domElement.style.cursor='crosshair';
  trimCurveInfo();cmCurveKick();
}
function trimCurveStop(reopenModal=true){
  const wasModal=trimCurve.fromModal;
  trimCurve.drawing=false;trimCurve.dragIdx=-1;trimCurve.hoverPt=null;
  mt('cm-draw-bar').hidden=true;
  _e.domElement.style.cursor='';
  if(reopenModal&&wasModal)cmOpen(true);
  trimCurveInfo();cmCurveKick();
}
function trimCurveClear(){
  if(trimCurve.pts.length)pushTrimCurveUndo('Trim curve silme');
  trimCurve.pts=[];trimCurve.hoverPt=null;trimCurve.dragIdx=-1;
  trimCurveInfo();cmCurveKick();
}
function trimCurveCancel(){
  if(trimCurve.drawing)trimCurveStop(false);
  if(trimCurve.pts.length)trimCurveClear();
  openRightCommand('');
}

window.addEventListener('pointerdown',e=>{
  if(e.target!==_e.domElement||e.button!==0||e.shiftKey||e.altKey)return;
  if(cmCurve.drawing){
    // Do NOT stopImmediatePropagation: allow OrbitControls to rotate/move the 3D screen when dragging!
    cmCurve.down={x:e.clientX,y:e.clientY};
  }else if(trimCurve.drawing){
    e.stopImmediatePropagation();
    const rect=_e.domElement.getBoundingClientRect(),px=e.clientX-rect.left,py=e.clientY-rect.top;
    let hitIdx=-1;
    for(let i=0;i<trimCurve.pts.length;i++){
      const vx=trimCurve.pts[i][0]*rect.width,vy=trimCurve.pts[i][1]*rect.height;
      if(Math.hypot(px-vx,py-vy)<=9){hitIdx=i;break;}
    }
    if(hitIdx>=0){
      pushTrimCurveUndo('Trim noktası taşıma');
      trimCurve.dragIdx=hitIdx;
      trimCurve.down=null;
    }else{
      trimCurve.dragIdx=-1;
      trimCurve.down={x:e.clientX,y:e.clientY};
    }
  }
},!0);

window.addEventListener('pointermove',e=>{
  if(!trimCurve.drawing)return;
  const rect=_e.domElement.getBoundingClientRect();
  if(rect.width<4||rect.height<4)return;
  const px=Math.max(0,Math.min(rect.width,e.clientX-rect.left)),py=Math.max(0,Math.min(rect.height,e.clientY-rect.top));
  if(trimCurve.dragIdx>=0){
    trimCurve.pts[trimCurve.dragIdx]=[px/rect.width,py/rect.height];
    cmCurveKick();
  }else if(e.target===_e.domElement){
    trimCurve.hoverPt=[px,py];
    cmCurveKick();
  }else if(trimCurve.hoverPt){
    trimCurve.hoverPt=null;
    cmCurveKick();
  }
},!0);

window.addEventListener('pointerup',e=>{
  if(cmCurve.drawing){
    const d=cmCurve.down;cmCurve.down=null;
    if(!d||e.target!==_e.domElement||e.button!==0)return;
    // If user dragged > 5px, OrbitControls rotated the view; if <= 5px, it's a point click!
    if(Math.hypot(e.clientX-d.x,e.clientY-d.y)>5)return;
    cmCurvePick(e);
  }else if(trimCurve.drawing){
    if(trimCurve.dragIdx>=0){trimCurve.dragIdx=-1;trimCurveInfo();cmCurveKick();return;}
    const d=trimCurve.down;trimCurve.down=null;
    if(!d||e.target!==_e.domElement||e.button!==0)return;
    if(Math.hypot(e.clientX-d.x,e.clientY-d.y)>8)return;
    const rect=_e.domElement.getBoundingClientRect();
    if(rect.width<4||rect.height<4)return;
    const u=Math.max(0,Math.min(1,(e.clientX-rect.left)/rect.width)),v=Math.max(0,Math.min(1,(e.clientY-rect.top)/rect.height));
    pushTrimCurveUndo('Trim curve noktası');
    trimCurve.pts.push([u,v]);
    trimCurveInfo();cmCurveKick();
  }
},!0);

window.addEventListener('dblclick',e=>{
  if(e.target!==_e.domElement)return;
  if(cmCurve.drawing){e.stopPropagation();e.preventDefault();cmCurveFinish(!0);}
  else if(trimCurve.drawing){
    e.stopPropagation();e.preventDefault();
    const P=trimCurve.pts,n=P.length,rect=_e.domElement.getBoundingClientRect();
    if(n>=2&&Math.hypot((P[n-1][0]-P[n-2][0])*rect.width,(P[n-1][1]-P[n-2][1])*rect.height)<6)P.pop();
    trimCurveStop(true);
  }
},!0);

window.addEventListener('keydown',e=>{
  const inField=/INPUT|TEXTAREA|SELECT/.test(e.target?.tagName||'');
  if((e.ctrlKey||e.metaKey)&&!e.altKey&&e.key.toLowerCase()==='z'){
    if(!inField||cmCurve.drawing||trimCurve.drawing){
      e.preventDefault();e.stopPropagation();
      cmPerformUndo();
      return;
    }
  }
  if(cmCurve.drawing){
    if(e.key==='Enter'){e.preventDefault();e.stopPropagation();cmCurveFinish(!1);}
    else if(e.key==='Escape'){e.preventDefault();e.stopPropagation();cmCurveStop();}
    else if(e.key==='Backspace'){e.preventDefault();e.stopPropagation();cmPerformUndo();}
    else if(e.key==='Delete'){e.preventDefault();e.stopPropagation();cmCurveClear();}
    return;
  }
  if(trimCurve.drawing){
    if(e.key==='Enter'){e.preventDefault();e.stopPropagation();trimCurveStop(true);}
    else if(e.key==='Escape'){e.preventDefault();e.stopPropagation();trimCurveStop(true);}
    else if(e.key==='Backspace'){e.preventDefault();e.stopPropagation();cmPerformUndo();}
    else if(e.key==='Delete'){e.preventDefault();e.stopPropagation();trimCurveClear();}
    return;
  }
  if(!inField&&mt('cm-modal').hidden&&e.key==='Delete'){
    if(trimCurve.pts.length){e.preventDefault();trimCurveClear();}
    else if(selectedModelId){e.preventDefault();removeSelectedCaseModel();}
  }
},!0);

// Modal & Right-Panel Event Listeners
mt('cm-cvnew')?.addEventListener('click',()=>cmCurveStart(true,true));
mt('cm-cvdraw').addEventListener('click',()=>cmCurveStart(false,true));
mt('cm-cvclear').addEventListener('click',cmCurveClear);
mt('rc-cv-new')?.addEventListener('click',()=>cmCurveStart(true,false));
mt('rc-cv-cont')?.addEventListener('click',()=>cmCurveStart(false,false));
mt('rc-cv-del')?.addEventListener('click',cmCurveClear);

['cm-curve-sel','rc-curve-sel'].forEach(sid=>mt(sid)?.addEventListener('change',e=>cmSelectNamedCurve(e.target.value)));
['cm-curve-name','rc-curve-name'].forEach(nid=>mt(nid)?.addEventListener('input',e=>cmRenameActiveCurve(e.target.value)));

mt('cm-draw-undo').addEventListener('click',()=>cmPerformUndo());
mt('cm-draw-clear').addEventListener('click',()=>trimCurve.drawing?trimCurveClear():cmCurveClear());
mt('cm-draw-done').addEventListener('click',()=>trimCurve.drawing?trimCurveStop(true):cmCurveFinish(!1));
mt('cm-draw-cancel').addEventListener('click',()=>trimCurve.drawing?trimCurveStop(true):cmCurveStop());

const syncClosed=val=>{
  mt('cm-cvclosed').checked=val;
  if(mt('rc-cvclosed'))mt('rc-cvclosed').checked=val;
  const cur=cmSavedCurves.find(c=>c.id===cmActiveCurveId);
  if(cur)cur.closed=val;
  cmCurveKick();
};
mt('cm-cvclosed').addEventListener('change',e=>syncClosed(e.target.checked));
mt('rc-cvclosed')?.addEventListener('change',e=>syncClosed(e.target.checked));

// Sync top-left green buttons -> right command window
document.querySelectorAll('[data-open-cmd]').forEach(btn=>{
  btn.addEventListener('click',()=>openRightCommand(btn.dataset.openCmd));
});
mt('rc-close-btn')?.addEventListener('click',()=>openRightCommand(''));
['rc-wrap-cancel','rc-fit-cancel','rc-bool-cancel','rc-lat-cancel','rc-gw-cancel','rc-cap-cancel'].forEach(id=>mt(id)?.addEventListener('click',()=>openRightCommand('')));

// Sync right command panel inputs <-> Custom Mesh modal inputs
const bindTwoWay=(idA,idB,isCheck=false)=>{
  const a=mt(idA),b=mt(idB);if(!a||!b)return;
  const ev=isCheck?'change':'input';
  a.addEventListener(ev,()=>{if(isCheck)b.checked=a.checked;else b.value=a.value;});
  b.addEventListener(ev,()=>{if(isCheck)a.checked=b.checked;else a.value=b.value;});
};
bindTwoWay('rc-wo','cm-wo');
bindTwoWay('rc-cell','cm-cell');bindTwoWay('rc-strut','cm-strut');bindTwoWay('rc-lsd','cm-lsd');bindTwoWay('rc-lmode','cm-lmode');bindTwoWay('rc-lat-red','cm-red');
bindTwoWay('rc-fit-wo','cm-wo');
bindTwoWay('rc-wh','cm-wh');
bindTwoWay('rc-moff','cm-moff');
bindTwoWay('rc-vsd','cm-vsd');
bindTwoWay('rc-surf','cm-surf');
bindTwoWay('rc-bands','cm-bands',true);
bindTwoWay('rc-fit-mode','cm-fit');
bindTwoWay('rc-fit-msd','cm-msd');
bindTwoWay('rc-cvd','cm-cvd');
bindTwoWay('rc-cvmode','cm-cvmode');
bindTwoWay('rc-cvw','cm-cvw');
bindTwoWay('rc-cvt','cm-cvt');
bindTwoWay('rc-ud','cm-ud');
bindTwoWay('rc-hidesrc','cm-hidesrc',true);

['rc-wrap-src','rc-fit-src','rc-sweep-src','rc-lat-src'].forEach(sid=>{
  mt(sid)?.addEventListener('change',e=>{
    cmSelectedSurfaceId=e.target.value;
    if(mt('cm-src'))mt('cm-src').value=e.target.value;
    syncRightCommandModels();
    cmSyncSurfaceChips();
  });
});
mt('rc-fit-bone')?.addEventListener('change',e=>{
  cmSelectedBoneId=e.target.value;
  if(mt('cm-bone'))mt('cm-bone').value=e.target.value;
});
mt('rc-op')?.addEventListener('change',e=>{
  mt('cm-op').value=e.target.value;
  cmOpChanged();
});
mt('rc-opA')?.addEventListener('change',e=>{
  mt('cm-opA').value=e.target.value;
});

// Right panel action buttons triggering cmGenerate
const runFromRight=async(kind,srcSelectId)=>{
  if(srcSelectId&&mt(srcSelectId)?.value){
    cmSelectedSurfaceId=mt(srcSelectId).value;
    if(mt('cm-src')){
      mt('cm-src'). replaceChildren();
      We.forEach(m=>{const o=document.createElement('option');o.value=m.userData.id;o.textContent=m.userData.name;mt('cm-src').appendChild(o);});
      mt('cm-src').value=cmSelectedSurfaceId;
    }
  }
  if(kind==='surface'&&mt('rc-fit-bone')){
    cmSelectedBoneId=mt('rc-fit-bone').value;
    if(mt('cm-bone')){
      mt('cm-bone').replaceChildren();
      const noneOpt=document.createElement('option');noneOpt.value='';noneOpt.textContent='— Seçilmedi —';mt('cm-bone').appendChild(noneOpt);
      We.forEach(m=>{const o=document.createElement('option');o.value=m.userData.id;o.textContent=m.userData.name;mt('cm-bone').appendChild(o);});
      mt('cm-bone').value=cmSelectedBoneId;
    }
  }
  await cmGenerate(kind);
};
mt('rc-edge-apply')?.addEventListener('click',()=>runFromRight('edge','rc-wrap-src'));
mt('rc-cyl-apply')?.addEventListener('click',()=>runFromRight('cyl','rc-wrap-src'));
mt('rc-fit-apply')?.addEventListener('click',()=>runFromRight('surface','rc-fit-src'));
mt('rc-cvtube')?.addEventListener('click',()=>runFromRight('cvtube','rc-sweep-src'));
mt('rc-cvcut')?.addEventListener('click',()=>runFromRight('cvcut','rc-sweep-src'));
mt('rc-cvwrap')?.addEventListener('click',()=>runFromRight('cvwrap','rc-sweep-src'));
mt('rc-bool-apply')?.addEventListener('click',()=>runFromRight('union'));
mt('rc-lat-apply')?.addEventListener('click',()=>runFromRight('lat','rc-lat-src'));
['rc-lat-red','rc-gw-red'].forEach(id=>mt(id)?.addEventListener('input',e=>{['rc-lat-red','rc-gw-red','cm-red','rc-red'].forEach(o=>{const el=mt(o);if(el&&el!==e.target)el.value=e.target.value;});}));
async function runGeneralWrap(){
  if(caseBusy)return;
  const src=We.find(x=>x.userData.id===mt('rc-gw-src').value);
  if(!src){cmStatus('Wrap edilecek modeli seçin.',true);return;}
  const num=id=>Number(String(mt(id).value).replace(',','.')),bad=(v,a,b)=>!Number.isFinite(v)||v<a||v>b,fmt=v=>String(+v.toFixed(3));
  const sd=num('rc-gw-sd'),off=num('rc-gw-off'),gap=num('rc-gw-gap'),red=num('rc-gw-red'),mode=mt('rc-gw-mode').value;
  if(bad(sd,.03,1)||bad(off,-1,2)||bad(gap,0,5)||bad(red,0,.05)){cmStatus('Smallest detail 0,03–1; ofset −1…2; gap 0–5; Reduce 0–0,05 mm olmalı.',true);return;}
  cmCancelled=false;setCaseBusy(true);cmBusy(true);mt('cm-results').replaceChildren();if(mt('rc-results'))mt('rc-results').replaceChildren();cmStatus('Geometri hazırlanıyor…');await caseYield();
  try{
    const r=await cmWorkerCall('cuGeneralWrap',[cmSoup(src.geometry),{detail:sd,offset:off,gap,mode,reduce:red}],s=>cmStatus(s+'…'));
    const tag=src.userData.name.replace(/^CUSTIMESH_/,'').replace(/\.stl$/i,'').slice(0,28),kind=r.mode==='envelope'?'dış zarf':'kalınlaştırma';
    const note=r.h>sd*1.001?' · detay '+fmt(r.h)+' mm’ye çıkarıldı':'';
    await cmCommit([{name:'CUSTIMESH_GenelWrap_'+tag+'_'+fmt(off)+'mm',desc:'Genel wrap · '+kind+' · ofset '+fmt(off)+' mm'+note,pos:r.wrapped,color:'#1fb5a0',visible:true}]);
    if(mt('rc-gw-hide').checked){const cb=mt(src.userData.id+'-visible');if(cb&&cb.checked){cb.checked=false;cb.dispatchEvent(new Event('change'));}}
    cmStatus('Tamamlandı: Genel wrap ('+kind+')'+note+'.');setCaseMessage('CUSTIMESH_GenelWrap_'+tag+' eklendi.');
  }catch(e){cmStatus((e&&e.name==='AbortError'?'İşlem iptal edildi: ':'Hata: ')+(e&&e.message||e),!(e&&e.name==='AbortError'));}
  finally{setCaseBusy(false);cmBusy(false);}
}
mt('rc-gw-apply')?.addEventListener('click',runGeneralWrap);
/* ===== Kenar Kapat: açık kenarları göster / seç / kapat ===== */
const capState={meshId:'',geometryId:'',loops:[],raf:0,down:null};
function capKick(){if(!capState.raf)capState.raf=requestAnimationFrame(capDraw);}
function capRenderList(){
  const box=mt('rc-cap-list');box.replaceChildren();
  capState.loops.forEach((L,i)=>{const l=document.createElement('label'),c=document.createElement('input');c.type='checkbox';c.checked=L.sel;c.addEventListener('change',()=>{L.sel=c.checked;capKick();});
    l.append(c,document.createTextNode('Kenar '+(i+1)+' · '+L.len.toFixed(1)+' mm · '+L.n+' nokta'+(L.simple?'':' · karmaşık')));box.appendChild(l);});
}
function capDraw(){
  capState.raf=0;let c=mt('cm-cap-canvas');
  if(!c){c=document.createElement('canvas');c.id='cm-cap-canvas';document.body.appendChild(c);}
  const rect=_e.domElement.getBoundingClientRect(),dpr=window.devicePixelRatio||1,W=Math.round(rect.width*dpr),H=Math.round(rect.height*dpr);
  Object.assign(c.style,{position:'fixed',left:rect.left+'px',top:rect.top+'px',width:rect.width+'px',height:rect.height+'px',pointerEvents:'none',zIndex:'39'});
  if(c.width!==W||c.height!==H){c.width=W;c.height=H;}
  const g=c.getContext('2d');g.setTransform(dpr,0,0,dpr,0,0);g.clearRect(0,0,rect.width,rect.height);
  const mesh=We.find(m=>m.userData.id===capState.meshId);
  if(activeRightCmd!=='cap'||!mesh||capState.geometryId!==mesh.geometry.uuid||!capState.loops.length)return;
  const M=mesh.matrixWorld.elements,Vw=Tt.matrixWorldInverse.elements,Pj=Tt.projectionMatrix.elements;
  capState.loops.forEach((L,i)=>{
    const step=Math.max(1,Math.floor(L.n/1500));let started=false,first=null;g.beginPath();
    for(let k=0;k<L.n;k+=step){const p=cmProject(M,Vw,Pj,L.pts[k*3],L.pts[k*3+1],L.pts[k*3+2],rect.width,rect.height);if(!p){started=false;continue;}if(!first)first=p;if(!started){g.moveTo(p[0],p[1]);started=true;}else g.lineTo(p[0],p[1]);}
    g.lineJoin='round';g.lineWidth=L.sel?3.5:2;g.strokeStyle=L.sel?'#e0568b':'#7d8a99';g.setLineDash(L.sel?[]:[6,4]);g.stroke();g.setLineDash([]);
    if(first){g.beginPath();g.arc(first[0],first[1],9,0,6.2832);g.fillStyle=L.sel?'#e0568b':'#7d8a99';g.fill();g.fillStyle='#fff';g.font='bold 10px sans-serif';g.textAlign='center';g.textBaseline='middle';g.fillText(String(i+1),first[0],first[1]);}
  });
  capKick();
}
function capPick(e){
  const mesh=We.find(m=>m.userData.id===capState.meshId);if(!mesh||capState.geometryId!==mesh.geometry.uuid||!capState.loops.length)return;
  const rect=_e.domElement.getBoundingClientRect(),M=mesh.matrixWorld.elements,Vw=Tt.matrixWorldInverse.elements,Pj=Tt.projectionMatrix.elements,mx=e.clientX-rect.left,my=e.clientY-rect.top;
  let best=-1,bd=14;
  capState.loops.forEach((L,i)=>{const step=Math.max(1,Math.floor(L.n/600));for(let k=0;k<L.n;k+=step){const p=cmProject(M,Vw,Pj,L.pts[k*3],L.pts[k*3+1],L.pts[k*3+2],rect.width,rect.height);if(!p)continue;const d=Math.hypot(p[0]-mx,p[1]-my);if(d<bd){bd=d;best=i;}}});
  if(best>=0){capState.loops[best].sel=!capState.loops[best].sel;capRenderList();capKick();}
}
window.addEventListener('pointerdown',e=>{if(activeRightCmd==='cap'&&e.target===_e.domElement&&e.button===0)capState.down={x:e.clientX,y:e.clientY};},!0);
window.addEventListener('pointerup',e=>{const d=capState.down;capState.down=null;if(!d||activeRightCmd!=='cap'||e.target!==_e.domElement||e.button!==0)return;if(Math.hypot(e.clientX-d.x,e.clientY-d.y)>5)return;capPick(e);},!0);
async function capScan(){
  if(caseBusy)return;
  const src=We.find(x=>x.userData.id===mt('rc-cap-src').value);if(!src){cmStatus('Model seçin.',true);return;}
  cmCancelled=false;setCaseBusy(true);cmBusy(true);cmStatus('Açık kenarlar taranıyor…');await caseYield();
  try{
    const r=await cmWorkerCall('cuScanHoles',[cmSoup(src.geometry),{}],s=>cmStatus(s+'…'));
    capState.meshId=src.userData.id;capState.geometryId=src.geometry.uuid;capState.loops=r.loops.map(l=>({...l,sel:true}));capRenderList();capKick();
    cmStatus(r.loops.length?r.loops.length+' açık kenar bulundu. Viewport’ta tıklayarak seçimi değiştirebilirsiniz.':'Açık kenar yok: model zaten kapalı.');
  }catch(e){cmStatus(e?.name==='AbortError'?'İşlem iptal edildi.':'Hata: '+(e&&e.message||e),e?.name!=='AbortError');}
  finally{setCaseBusy(false);cmBusy(false);}
}
async function capApply(){
  if(caseBusy)return;
  const src=We.find(x=>x.userData.id===mt('rc-cap-src').value);if(!src){cmStatus('Model seçin.',true);return;}
  if(capState.meshId!==src.userData.id||capState.geometryId!==src.geometry.uuid||!capState.loops.length){cmStatus('Önce “Kenarları Bul” ile açık kenarları tarayın.',true);return;}
  const pick=capState.loops.map((l,i)=>l.sel?i:-1).filter(i=>i>=0);
  if(!pick.length){cmStatus('Kapatılacak en az bir kenar seçin.',true);return;}
  cmCancelled=false;setCaseBusy(true);cmBusy(true);if(mt('rc-results'))mt('rc-results').replaceChildren();cmStatus('Kenarlar kapatılıyor…');await caseYield();
  try{
    const r=await cmWorkerCall('cuCapLoops',[cmSoup(src.geometry),{pick}],s=>cmStatus(s+'…'));
    const tag=src.userData.name.replace(/^CUSTIMESH_/,'').replace(/\.stl$/i,'').slice(0,30);
    const warn=(r.forced?' · bazı kapaklar düzlemsel değil, kendini kesebilir':'')+(r.skipped?' · '+r.skipped+' kenar atlandı':'');
    await cmCommit([{name:'CUSTIMESH_Kapali_'+tag,desc:r.capped+'/'+r.total+' kenar kapatıldı'+(r.open?' · '+r.open+' açık kenar kaldı':' · kapalı model (Boolean için hazır)')+warn,pos:r.mesh,color:'#7aa5e8',visible:true}]);
    if(mt('rc-cap-hide').checked){const cb=mt(src.userData.id+'-visible');if(cb&&cb.checked){cb.checked=false;cb.dispatchEvent(new Event('change'));}}
    capState.loops=[];capRenderList();
    cmStatus('Tamamlandı: '+r.capped+' kenar kapatıldı'+(r.open?'; '+r.open+' açık kenar kaldı (kapatılmayan kenarlar var).':'; model kapalı.'));
  }catch(e){cmStatus(e?.name==='AbortError'?'İşlem iptal edildi.':'Hata: '+(e&&e.message||e),e?.name!=='AbortError');}
  finally{setCaseBusy(false);cmBusy(false);}
}
mt('rc-cap-scan')?.addEventListener('click',capScan);mt('rc-cap-apply')?.addEventListener('click',capApply);
mt('rc-cap-all')?.addEventListener('click',()=>{capState.loops.forEach(l=>l.sel=true);capRenderList();capKick();});
mt('rc-cap-none')?.addEventListener('click',()=>{capState.loops.forEach(l=>l.sel=false);capRenderList();capKick();});



mt('trim-draw-btn')?.addEventListener('click',()=>trimCurve.drawing?trimCurveStop(false):trimCurveStart(false));
mt('trim-clear-btn')?.addEventListener('click',trimCurveClear);
mt('trim-undo-btn')?.addEventListener('click',()=>cmPerformUndo());
mt('trim-apply')?.addEventListener('click',()=>applyScreenTrim(false));
mt('trim-cancel')?.addEventListener('click',()=>caseBusy?cmCancelOperation():trimCurveCancel());
mt('trim-entity')?.addEventListener('change',e=>selectCaseModel(e.target.value));
mt('cm-trdraw')?.addEventListener('click',()=>trimCurveStart(true));
mt('cm-trclear')?.addEventListener('click',trimCurveClear);
mt('case-undo')?.addEventListener('click',()=>cmPerformUndo());
mt('header-undo')?.addEventListener('click',()=>cmPerformUndo());

mt('case-cm').addEventListener('click',()=>cmOpen(true));
mt('cm-close').addEventListener('click',cmClose);
mt('cm-cancel').addEventListener('click',cmCancelOperation);
mt('rc-operation-cancel')?.addEventListener('click',cmCancelOperation);
mt('cm-src').addEventListener('change',e=>{cmSelectedSurfaceId=e.target.value;cmSyncSurfaceChips();syncRightCommandModels();});
mt('cm-bone').addEventListener('change',e=>{cmSelectedBoneId=e.target.value;syncRightCommandModels();});
mt('cm-op').addEventListener('change',cmOpChanged);
[['cm-run','surface'],['cm-edge','edge'],['cm-cyl','cyl'],['cm-lat','lat'],['cm-union','union'],['cm-cvtube','cvtube'],['cm-cvcut','cvcut'],['cm-cvwrap','cvwrap'],['cm-trim','trim']].forEach(([i,k])=>mt(i).addEventListener('click',()=>cmGenerate(k)));
mt('cm-modal').addEventListener('mousedown',e=>{if(e.target===mt('cm-modal'))cmClose();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!mt('cm-modal').hidden)cmClose();});

/* ===== Kalınlık analizi ===== */
const THK_PALETTES = {
  ntop: [
    [0.00, [48, 18, 59]],
    [0.10, [68, 93, 212]],
    [0.20, [61, 153, 254]],
    [0.30, [26, 204, 218]],
    [0.40, [39, 237, 162]],
    [0.50, [126, 254, 83]],
    [0.60, [212, 229, 52]],
    [0.70, [252, 185, 54]],
    [0.80, [252, 125, 32]],
    [0.90, [228, 68, 10]],
    [1.00, [154, 14, 0]]
  ],
  meshmixer: [
    [0.00, [215, 25, 28]],
    [0.35, [253, 174, 97]],
    [0.70, [255, 255, 191]],
    [1.00, [44, 123, 182]]
  ],
  viridis: [
    [0.00, [68, 1, 84]],
    [0.25, [59, 82, 139]],
    [0.50, [33, 145, 140]],
    [0.75, [94, 201, 98]],
    [1.00, [253, 231, 37]]
  ],
  thermal: [
    [0.00, [20, 11, 52]],
    [0.33, [187, 55, 84]],
    [0.66, [249, 142, 9]],
    [1.00, [252, 255, 164]]
  ],
  safety: [
    [0.00, [220, 38, 38]],
    [0.48, [239, 68, 68]],
    [0.50, [250, 204, 21]],
    [0.55, [34, 197, 94]],
    [1.00, [16, 185, 129]]
  ]
};

let thkActiveModelId = '';

function thkSampleColor(t, paletteName, invert, useIso, rawVal, minVal, maxVal, threshVal, clipThin) {
  if (clipThin) {
    if (rawVal <= threshVal) {
      const u = threshVal > minVal ? Math.max(0, Math.min(1, (rawVal - minVal) / (threshVal - minVal))) : 0;
      return [0.92, 0.12 + 0.45 * u, 0.12];
    }
    return [0.85, 0.89, 0.93];
  }
  let u = Math.max(0, Math.min(1, t));
  if (invert) u = 1 - u;
  let stops = THK_PALETTES[paletteName] || THK_PALETTES.ntop;
  if (paletteName === 'safety') {
    const ratio = maxVal > minVal ? Math.max(0.05, Math.min(0.95, (threshVal - minVal) / (maxVal - minVal))) : 0.5;
    const r = invert ? 1 - ratio : ratio;
    stops = [
      [0.00, [220, 38, 38]],
      [Math.max(0, r - 0.02), [239, 68, 68]],
      [r, [250, 204, 21]],
      [Math.min(1, r + 0.04), [34, 197, 94]],
      [1.00, [21, 128, 61]]
    ];
  }
  let rgb = stops[stops.length - 1][1];
  for (let i = 0; i < stops.length - 1; i++) {
    const [p0, c0] = stops[i], [p1, c1] = stops[i + 1];
    if (u >= p0 && u <= p1) {
      const f = p1 > p0 ? (u - p0) / (p1 - p0) : 0;
      rgb = [
        c0[0] + (c1[0] - c0[0]) * f,
        c0[1] + (c1[1] - c0[1]) * f,
        c0[2] + (c1[2] - c0[2]) * f
      ];
      break;
    }
  }
  let rOut = rgb[0] / 255, gOut = rgb[1] / 255, bOut = rgb[2] / 255;
  if (useIso) {
    const bands = 10;
    const phase = (t * bands) - Math.floor(t * bands);
    if (phase < 0.06 || phase > 0.94) {
      rOut *= 0.55; gOut *= 0.55; bOut *= 0.55;
    }
  }
  return [rOut, gOut, bOut];
}

function thkGradientCSS(paletteName, invert, direction = 'to right') {
  const stops = THK_PALETTES[paletteName] || THK_PALETTES.ntop;
  const parts = stops.map(([p, c]) => {
    const pos = Math.round((invert ? 1 - p : p) * 100);
    return { pos, str: `rgb(${c[0]},${c[1]},${c[2]}) ${pos}%` };
  }).sort((a, b) => a.pos - b.pos).map(x => x.str);
  return `linear-gradient(${direction}, ${parts.join(', ')})`;
}

let thkRunning=false;
const thkStatus=(text,error=false)=>{mt('thk-status').textContent=text;mt('thk-status').dataset.error=String(error);};
const thkSelected=()=>We.find(m=>m.userData.id===(mt('thk-model').value||thkActiveModelId));
function thkSetControls(){
  const mesh=thkSelected();
  for(const id of ['thk-model','thk-method','thk-cone','thk-quality','thk-smooth','thk-search-max'])mt(id).disabled=caseBusy||!We.length;
  if(mt('thk-method').value!=='cone')mt('thk-cone').disabled=true;
  if(!['sphere','sphere_cover','sphere_legacy'].includes(mt('thk-method').value))mt('thk-quality').disabled=true;
  mt('thk-run').disabled=caseBusy||!mesh;
  mt('thk-clear').disabled=caseBusy||!We.some(m=>m.userData.thicknessActive);
  mt('thk-auto-range').disabled=caseBusy||!mesh?.userData.thicknessValues;
  if(mt('thk-export-csv'))mt('thk-export-csv').disabled=caseBusy||!mesh?.userData.thicknessValues;
  mt('thk-cancel').hidden=!thkRunning;
  mt('thk-progress').hidden=!thkRunning;
  mt('thk-panel').setAttribute('aria-busy',String(thkRunning));
}
function thkResetStats(){for(const id of ['thk-st-min','thk-st-avg','thk-st-max','thk-st-thin','thk-stat-name'])mt(id).textContent='—';}
function thkUpdateScaleUI(minVal,maxVal,threshold,palette,invert,vMin,thinPct,modelName){
  mt('thk-min-lbl').textContent=minVal.toFixed(2)+' mm';mt('thk-max-lbl').textContent=maxVal.toFixed(2)+' mm';mt('thk-thresh-lbl').textContent=threshold.toFixed(2)+' mm';
  const span=Math.max(1e-6,maxVal-minVal),mid=(minVal+maxVal)/2,stops=[];
  for(let i=0;i<=40;i++){
    const t=i/40,rgb=thkSampleColor(t,palette,invert,false,minVal+t*span,minVal,maxVal,threshold,mt('thk-clip-thin').checked);
    stops.push('rgb('+rgb.map(v=>Math.round(v*255)).join(',')+') '+(t*100)+'%');
  }
  mt('thk-grad-preview').style.background='linear-gradient(to right,'+stops.join(',')+')';
  mt('thk-hud-bar').style.background='linear-gradient(to top,'+stops.join(',')+')';
  for(const [id,v] of [['thk-tick-min',minVal],['thk-tick-mid',mid],['thk-tick-max',maxVal],['thk-hud-min',minVal],['thk-hud-q1',minVal+span*.25],['thk-hud-mid',mid],['thk-hud-q3',minVal+span*.75],['thk-hud-max',maxVal]])mt(id).textContent=v.toFixed(2)+' mm';
  mt('thk-hud-thresh').style.bottom=Math.max(0,Math.min(100,(threshold-minVal)/span*100))+'%';
  mt('thk-hud-stat-min').textContent=Number.isFinite(vMin)?'Min: '+vMin.toFixed(2)+' mm':'Ölçüm yok';
  mt('thk-hud-stat-thin').textContent='<'+threshold.toFixed(2)+': %'+(thinPct||0).toFixed(1);
  mt('thk-hud-title').textContent=modelName?modelName.replace(/\.stl$/i,''):'Kalınlık (mm)';
}
function thkSyncCardButtons(){
  We.forEach(m=>{const b=mt(m.userData.id+'-thk');if(b)b.setAttribute('aria-pressed',String(!!m.userData.thicknessActive));});
}
function thkApplyColorsToMesh(mesh){
  if(!mesh?.userData.thicknessValues)return;
  const d=mesh.userData,values=d.thicknessValues,display=d.thicknessDisplay||values,weights=d.thicknessWeights,g=mesh.geometry,nv=values.length;
  let attr=g.getAttribute('color');if(!attr||attr.count!==nv){attr=new Ee(new Float32Array(nv*3),3);g.setAttribute('color',attr);}
  const min=Math.max(0,Number(mt('thk-min').value)||0),max=Math.max(min+.001,Number(mt('thk-max').value)||2),threshold=Math.max(0,Number(mt('thk-thresh').value)||0);
  const palette=mt('thk-palette').value,invert=mt('thk-invert').checked,iso=mt('thk-iso').checked,clip=mt('thk-clip-thin').checked;
  let vMin=Infinity,vMax=-Infinity,sum=0,area=0,thin=0,total=0;
  const linear=v=>v<=.04045?v/12.92:Math.pow((v+.055)/1.055,2.4);
  const boost=1.12;
  for(let i=0;i<nv;i++){
    const v=values[i],w=weights?weights[i]:1;total+=w;let rgb=[.65,.68,.72];
    if(Number.isFinite(v)){
      vMin=Math.min(vMin,v);vMax=Math.max(vMax,v);sum+=v*w;area+=w;if(v<threshold)thin+=w;
      const shown=v<threshold?v:display[i];rgb=thkSampleColor((shown-min)/(max-min),palette,invert,iso,v,min,max,threshold,clip);
    }
    attr.array[i*3]=Math.min(1,linear(rgb[0])*boost);attr.array[i*3+1]=Math.min(1,linear(rgb[1])*boost);attr.array[i*3+2]=Math.min(1,linear(rgb[2])*boost);
  }
  attr.needsUpdate=true;
  if(!d.thicknessActive){
    d.thkBaseColor=mt(d.id+'-color')?.value||d.color;
    d.thkMaterial={metalness:mesh.material.metalness,roughness:mesh.material.roughness,toneMapped:mesh.material.toneMapped};
  }
  mesh.material.color.set('#ffffff');mesh.material.vertexColors=true;mesh.material.metalness=0;mesh.material.roughness=.82;mesh.material.toneMapped=false;mesh.material.needsUpdate=true;d.thicknessActive=true;
  d.thkValidMin=vMin;
  mt('thk-stat-name').textContent=d.name;
  mt('thk-st-min').textContent=Number.isFinite(vMin)?(vMin>0&&vMin<.001?'<0.001':vMin<.1?vMin.toFixed(3):vMin.toFixed(2))+' mm':'—';
  mt('thk-st-avg').textContent=area?(sum/area).toFixed(2)+' mm':'—';
  mt('thk-st-max').textContent=Number.isFinite(vMax)?vMax.toFixed(2)+' mm':'—';
  mt('thk-st-thin').textContent=area?'%'+(100*thin/area).toFixed(1):'—';
  thkUpdateScaleUI(min,max,threshold,palette,invert,vMin,area?100*thin/area:0,d.name);
  mt('thk-hud').hidden=!(mesh.visible&&Number.isFinite(vMin));
  thkSyncCardButtons();thkSetControls();ye();
}
function thkClearModel(mesh){
  if(!mesh?.userData.thicknessActive)return;
  const d=mesh.userData;mesh.material.vertexColors=false;
  mesh.material.color.set(mt(d.id+'-color')?.value||d.thkBaseColor||d.color);
  if(d.thkMaterial)Object.assign(mesh.material,d.thkMaterial);
  mesh.material.needsUpdate=true;d.thicknessActive=false;
  const btn=mt(d.id+'-thk');if(btn)btn.setAttribute('aria-pressed','false');
}
function thkClearAll(){We.forEach(thkClearModel);mt('thk-hud').hidden=true;mt('thk-probe').hidden=true;thkStatus('Renk haritası kapatıldı.');thkSyncCardButtons();thkSetControls();ye();}
function thkSyncModelSelect(){
  const sel=mt('thk-model'),prev=sel.value||thkActiveModelId,ids=We.map(m=>m.userData.id),existing=Array.from(sel.options,o=>o.value).filter(Boolean);
  if(!We.length){
    sel.replaceChildren();const o=document.createElement('option');o.value='';o.textContent='— Önce STL yükleyin —';sel.appendChild(o);
    sel.value='';thkActiveModelId='';mt('thk-model-hint').textContent='Model yok';
    thkResetStats();mt('thk-hud').hidden=true;mt('thk-probe').hidden=true;thkSetControls();return;
  }
  if(ids.join('|')!==existing.join('|')){
    sel.replaceChildren();for(const m of We){const o=document.createElement('option');o.value=m.userData.id;o.textContent=m.userData.name;sel.appendChild(o);}
  }
  const mesh=We.find(m=>m.userData.id===prev)||We.find(m=>/^CUSTIMESH_.*(?:Wrap|Union|Lattice)/i.test(m.userData.name))||We[0];
  sel.value=mesh?.userData.id||'';thkActiveModelId=mesh?.userData.id||'';
  mt('thk-model-hint').textContent=mesh?mesh.userData.name.replace(/\.stl$/i,''):'Model yok';
  thkSetControls();
}
function thkAutoSetRange(apply=true){
  const mesh=thkSelected();if(!mesh?.userData.thicknessValues)return;
  const sorted=Array.from(mesh.userData.thicknessValues).filter(Number.isFinite).sort((a,b)=>a-b);if(!sorted.length)return;
  let lo=sorted[0],hi=sorted[sorted.length-1];
  if(hi-lo<.02){const pad=Math.max(.01,hi*.05);lo=Math.max(0,lo-pad);hi+=pad;}
  const rMax=String(Math.max(3,+(hi*1.3).toFixed(3),+(Number(mt('thk-thresh').value)*1.1).toFixed(3)));
  for(const id of ['thk-min-range','thk-max-range','thk-thresh-range'])mt(id).max=rMax;
  for(const [base,v] of [['min',lo],['max',hi]]){mt('thk-'+base).value=v.toFixed(3);mt('thk-'+base+'-range').value=String(v);}
  if(apply)thkApplyColorsToMesh(mesh);
}
async function thkRunAnalysis(targetId){
  if(caseBusy||!We.length)return;
  const mesh=We.find(m=>m.userData.id===(targetId||mt('thk-model').value));if(!mesh)return;
  const opts={method:mt('thk-method').value,coneRays:Number(mt('thk-cone').value),quality:Number(mt('thk-quality').value),smoothSteps:Number(mt('thk-smooth').value),maxSearch:Number(mt('thk-search-max').value)};
  if(!['sphere','sphere_cover','sphere_legacy','ray','cone'].includes(opts.method)||![1,2,3].includes(opts.quality)||![1,5,9].includes(opts.coneRays)||![0,2,5].includes(opts.smoothSteps)||!Number.isFinite(opts.maxSearch)||opts.maxSearch<.5||opts.maxSearch>100){thkStatus('Maksimum arama mesafesi 0,5–100 mm olmalı.',true);return;}
  thkActiveModelId=mesh.userData.id;mt('thk-model').value=thkActiveModelId;
  We.forEach(thkClearModel);thkResetStats();mt('thk-hud').hidden=true;mt('thk-probe').hidden=true;
  thkRunning=true;cmCancelled=false;setCaseBusy(true);thkSetControls();thkStatus('Geometri hazırlanıyor…');await caseYield();
  try{
    const g=mesh.geometry,V=Float64Array.from(g.attributes.position.array),F=g.index?Uint32Array.from(g.index.array):Uint32Array.from({length:V.length/3},(_,i)=>i);
    const r=await cmWorkerCall('cmThickness',[V,F,opts],s=>thkStatus(s+'…'));
    if(cmCancelled||!We.includes(mesh))throw new DOMException('İşlem iptal edildi.','AbortError');
    mesh.userData.thicknessValues=r.values;mesh.userData.thicknessDisplay=r.display;mesh.userData.thicknessWeights=r.weights;
    mesh.userData.thicknessOptions=opts;mesh.userData.thicknessResult=r;thkAutoSetRange(false);
    mesh.visible=true;thkApplyColorsToMesh(mesh);Fa();
    let covered=0,total=0;for(let i=0;i<r.values.length;i++){total+=r.weights[i];if(Number.isFinite(r.values[i]))covered+=r.weights[i];}
    thkStatus(covered>0?'Analiz tamamlandı. Ölçülen alan: %'+(total?100*covered/total:0).toFixed(1)+(covered<total*.999?' · Ölçülemeyen alanlar gri gösteriliyor.':'.')+(r.boundaryEdges>0?' · '+r.boundaryEdges+' açık kenar.':'')+(r.nonManifoldEdges>0?' · '+r.nonManifoldEdges+' kenarda ikiden fazla yüz var; bu bölgelerde ölçüm belirsizdir.':'')+(r.limitCount>0?' · '+r.limitCount+' köşe arama sınırına ulaştı; bunlar kesin ölçüm olarak sayılmadı.':'')+(r.orientationFacesFixed>0?' · '+r.orientationFacesFixed+' yüzün yönü düzeltildi.':'')+(opts.method==='sphere_legacy'?' · Önceki v4.7 yöntemi: komşudan doldurulan değerler içerebilir.':'')+(r.orientationFixed>0?' · '+r.orientationFixed+' parçanın normal yönü otomatik düzeltildi.':''):'Bu bölgede karşı yüzey bulunamadı. Arama mesafesini veya seçilen modeli kontrol edin.');
  }catch(e){thkStatus(e.name==='AbortError'?'İşlem iptal edildi.':e.message,e.name!=='AbortError');}
  finally{thkRunning=false;setCaseBusy(false);thkSetControls();ye();}
}
function thkCancel(){
  if(!thkRunning)return;cmCancelled=true;
  if(cmWorkerPending){const p=cmWorkerPending;cmWorkerPending=null;cmWorker.terminate();cmWorker=null;p.reject(new DOMException('İşlem iptal edildi.','AbortError'));}
}
function thkAnalyzeModel(id){if(caseBusy)return;thkOpenPanel();if(id){mt('thk-model').value=id;thkActiveModelId=id;}thkRunAnalysis(id);}

function thkExportCSV(){
  const mesh=thkSelected();if(!mesh?.userData.thicknessValues||caseBusy)return;
  const d=mesh.userData,V=mesh.geometry.attributes.position.array,values=d.thicknessValues,r=d.thicknessResult||{};
  const method=d.thicknessOptions?.method||'unknown',version=r.algorithmVersion||(method==='sphere_legacy'?'4.7':'4.8');
  const rows=['x_mm,y_mm,z_mm,thickness_mm,status,lower_bound_mm,estimator_difference_mm,topology_issue,method,algorithm_version'];
  for(let i=0;i<values.length;i++){
    const value=values[i],limited=r.status?.[i]===2,status=limited?'search_limit':Number.isFinite(value)?'measured':'unmeasured';
    const lower=r.lowerBounds?.[i],difference=r.estimatorDifference?.[i];
    rows.push([V[i*3],V[i*3+1],V[i*3+2],Number.isFinite(value)?value:'',status,Number.isFinite(lower)?lower:'',Number.isFinite(difference)?difference:'',r.topologyIssues?.[i]||0,method,version].join(','));
  }
  const blob=new Blob([rows.join('\r\n')],{type:'text/csv;charset=utf-8'}),url=URL.createObjectURL(blob),a=document.createElement('a');
  a.href=url;a.download=(d.name||'CUSTIMESH').replace(/\.stl$/i,'').replace(/[^a-zA-Z0-9_-]/g,'_')+'_kalinlik_mm.csv';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),15000);
  thkStatus('Ham ölçümler CSV olarak indirildi. Koordinatlar ve kalınlık mm; ölçülemeyen değerler boş bırakıldı.');
}

function setupThicknessModule(){
  mt('thk-export-csv')?.addEventListener('click',thkExportCSV);
  let frame=false;
  const refresh=()=>{
    if(frame)return;frame=true;requestAnimationFrame(()=>{frame=false;const mesh=thkSelected();
      if(mesh?.userData.thicknessActive)thkApplyColorsToMesh(mesh);
      else{const lo=Math.max(0,Number(mt('thk-min').value)||0),hi=Math.max(lo+.001,Number(mt('thk-max').value)||2);thkUpdateScaleUI(lo,hi,Math.max(0,Number(mt('thk-thresh').value)||0),mt('thk-palette').value,mt('thk-invert').checked,NaN,0,'');}
    });
  };
  const syncBounds=(key,commitText)=>{
    const num=mt('thk-'+key),range=mt('thk-'+key+'-range');
    let v=Number(String(num.value).replace(',','.'));
    if(!Number.isFinite(v)||v<0)v=key==='max'?2:(key==='min'?.1:.3);
    if(v>Number(range.max))range.max=String(+(v*1.2).toFixed(3));
    if(commitText)num.value=String(+v.toFixed(3));
    range.value=String(v);
    const minVal=Number(mt('thk-min').value)||0,maxVal=Number(mt('thk-max').value)||0;
    if(maxVal<=minVal){
      if(key==='max'&&commitText){const nextMin=Math.max(0,+(v-.01).toFixed(3));mt('thk-min').value=String(nextMin);mt('thk-min-range').value=String(nextMin);}
      else if(key==='min'&&commitText){const nextMax=+(v+.01).toFixed(3);mt('thk-max').value=String(nextMax);if(nextMax>Number(mt('thk-max-range').max))mt('thk-max-range').max=String(+(nextMax*1.2).toFixed(3));mt('thk-max-range').value=String(nextMax);}
    }
    refresh();
  };
  for(const key of ['min','max','thresh']){
    const num=mt('thk-'+key),range=mt('thk-'+key+'-range');
    num.addEventListener('input',()=>{
      const raw=num.value.trim();if(!raw||raw.endsWith('.')||raw.endsWith(','))return;
      const v=Number(raw.replace(',','.'));if(!Number.isFinite(v)||v<0)return;
      if(v>Number(range.max))range.max=String(+(v*1.2).toFixed(3));
      range.value=String(v);refresh();
    });
    num.addEventListener('change',()=>syncBounds(key,true));
    range.addEventListener('input',()=>{
      const v=Number(range.value);if(!Number.isFinite(v)||v<0)return;
      num.value=String(+v.toFixed(3));
      syncBounds(key,true);
    });
  }
  for(const id of ['thk-palette','thk-invert','thk-iso','thk-clip-thin'])mt(id).addEventListener('change',refresh);
  for(const id of ['thk-method','thk-cone','thk-quality','thk-smooth','thk-search-max'])mt(id).addEventListener('change',()=>{
    thkSetControls();if(thkSelected()?.userData.thicknessValues)thkStatus('Ayarlar değişti. Güncellemek için Kalınlık Hesapla düğmesine basın.');
  });
  mt('thk-model').addEventListener('change',()=>{
    We.forEach(thkClearModel);thkActiveModelId=mt('thk-model').value;thkResetStats();mt('thk-hud').hidden=true;mt('thk-probe').hidden=true;
    const mesh=thkSelected();if(mesh?.userData.thicknessValues){thkAutoSetRange(false);thkApplyColorsToMesh(mesh);thkStatus('Kayıtlı analiz gösteriliyor.');}else thkStatus('');
    thkSyncCardButtons();thkSetControls();ye();
  });
  mt('thk-run').addEventListener('click',()=>thkRunAnalysis());mt('thk-cancel').addEventListener('click',thkCancel);
  mt('thk-clear').addEventListener('click',thkClearAll);mt('thk-auto-range').addEventListener('click',()=>thkAutoSetRange());
  mt('thk-hud-close').addEventListener('click',()=>{mt('thk-hud').hidden=true;});
  mt('thk-probe-toggle').addEventListener('change',()=>{if(!mt('thk-probe-toggle').checked)mt('thk-probe').hidden=true;});
  mt('case-thk').addEventListener('click',()=>thkTogglePanel());mt('thk-close-btn').addEventListener('click',()=>thkClosePanel());
  const probe=mt('thk-probe'),ray=new Is();let queued=false,last=null,lastTime=0;
  mt('viewport').addEventListener('pointermove',e=>{
    last={x:e.clientX,y:e.clientY,buttons:e.buttons};if(queued||performance.now()-lastTime<45)return;queued=true;
    requestAnimationFrame(()=>{
      queued=false;lastTime=performance.now();const e=last;
      if(!e||!Un||!_e||!mt('thk-probe-toggle').checked||e.buttons||!We.some(m=>m.visible&&m.userData.thicknessActive)){probe.hidden=true;return;}
      const rect=_e.domElement.getBoundingClientRect();gi.updateMatrixWorld(true);ray.setFromCamera(new Dt((e.x-rect.left)/rect.width*2-1,-((e.y-rect.top)/rect.height)*2+1),Tt);
      const h=ray.intersectObjects(We.filter(m=>m.visible),false)[0];
      if(!h?.face||!h.object.userData.thicknessActive){probe.hidden=true;return;}
      const vals=h.object.userData.thicknessValues,bc=h.barycoord||{x:1/3,y:1/3,z:1/3};
      const samples=[[vals[h.face.a],bc.x],[vals[h.face.b],bc.y],[vals[h.face.c],bc.z]].filter(p=>Number.isFinite(p[0]));
      let val=NaN;
      if(samples.length){
        const wSum=samples.reduce((s,p)=>s+Math.max(p[1],1e-4),0);
        val=samples.reduce((s,p)=>s+p[0]*Math.max(p[1],1e-4),0)/wSum;
      }
      if(Number.isFinite(val)){
        const minV=Math.max(0,Number(mt('thk-min').value)||0),maxV=Math.max(minV+.001,Number(mt('thk-max').value)||2),thV=Math.max(0,Number(mt('thk-thresh').value)||0);
        const rgb=thkSampleColor((val-minV)/(maxV-minV),mt('thk-palette').value,mt('thk-invert').checked,false,val,minV,maxV,thV,mt('thk-clip-thin').checked);
        const dot=document.createElement('i');dot.style.background='rgb('+rgb.map(v=>Math.round(v*255)).join(',')+')';
        probe.replaceChildren(dot,document.createTextNode(val.toFixed(3)+' mm'));
      }else{
        probe.textContent='Ölçülemedi';
      }
      const ws=mt('workspace').getBoundingClientRect();probe.style.left=Math.max(8,Math.min(ws.width-125,e.x-ws.left))+'px';probe.style.top=Math.max(30,e.y-ws.top)+'px';probe.hidden=false;
    });
  });
  mt('viewport').addEventListener('pointerleave',()=>{last=null;probe.hidden=true;});
  refresh();thkSyncModelSelect();
}
setupThicknessModule();
/* ===== Kalınlık paneli: açma/kapama, senkronizasyon, hata toleransı ===== */
function thkBaseHex(m){const d=m.userData;return d.thicknessActive?(d.thkBaseColor||d.color||'#ffffff'):'#'+m.material.color.getHexString();}
function thkPanelOpen(){return !mt('thk-side-panel').hidden;}
function thkOpenPanel(){
  if(!We.length){setCaseMessage('Önce bir STL modeli yükleyin.',true);return;}
  if(typeof openRightCommand==='function'){
    const rc=mt('right-cmd-panel');if(rc&&!rc.hidden)openRightCommand('');
  }
  if(!mt('cm-modal').hidden&&!caseBusy)cmClose();
  mt('thk-side-panel').hidden=false;mt('workspace').dataset.thkOpen='true';
  mt('case-thk').setAttribute('aria-pressed','true');
  thkSyncModelSelect();const mesh=thkSelected();
  if(mesh?.userData.thicknessValues&&!mesh.userData.thicknessActive){We.filter(m=>m!==mesh).forEach(thkClearModel);thkApplyColorsToMesh(mesh);}
  thkSetControls();fl();requestAnimationFrame(()=>{fl();ye();});
}
function thkClosePanel(){
  const p=mt('thk-side-panel');if(!p||p.hidden)return;
  if(thkRunning)thkCancel();
  p.hidden=true;mt('workspace').dataset.thkOpen='false';mt('case-thk').setAttribute('aria-pressed','false');
  fl();requestAnimationFrame(()=>{fl();ye();});
}
function thkTogglePanel(){if(thkPanelOpen())thkClosePanel();else thkOpenPanel();}
function thkForceClear(m){
  const d=m.userData;
  m.material.vertexColors=false;m.material.color.set(d.thkBaseColor||d.color||'#ffffff');
  if(d.thkMaterial)Object.assign(m.material,d.thkMaterial);
  m.material.needsUpdate=true;
  d.thicknessActive=false;d.thicknessValues=undefined;d.thicknessDisplay=undefined;d.thicknessWeights=undefined;d.thicknessResult=undefined;d.thicknessOptions=undefined;
}
let thkSyncing=false;
function thkSync(){
  if(thkSyncing)return;thkSyncing=true;
  try{
    const prevId=thkActiveModelId;
    for(const m of We){
      const d=m.userData,n=m.geometry.attributes.position.count;
      if(d.thicknessValues&&d.thicknessValues.length!==n)thkForceClear(m);                 // geometri değişti (Trim vb.)
      else if(d.thicknessActive&&d.thicknessValues&&!m.material.vertexColors)thkApplyColorsToMesh(m); // Geri Al sonrası yeniden uygula
      else if(d.thicknessActive&&!d.thicknessValues)thkForceClear(m);
    }
    if(prevId&&!We.some(m=>m.userData.id===prevId))thkResetStats();
    thkSyncModelSelect();
    const act=We.find(m=>m.userData.thicknessActive);
    if(act){mt('thk-hud').hidden=!(act.visible&&Number.isFinite(act.userData.thkValidMin));if(!act.visible)mt('thk-probe').hidden=true;}
    else{mt('thk-hud').hidden=true;mt('thk-probe').hidden=true;}
    if(!We.length){thkStatus('');if(thkPanelOpen())thkClosePanel();}
    thkSyncCardButtons();thkSetControls();
  }finally{thkSyncing=false;}
}
window.CUSTIMESHThk=Object.freeze({version:'4.8',sync:thkSync,openPanel:thkOpenPanel,closePanel:thkClosePanel,
  run:thkRunAnalysis,clear:thkClearAll,cancel:thkCancel,autoRange:thkAutoSetRange});
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'&&thkPanelOpen()&&mt('cm-modal').hidden&&mt('thk-side-panel').contains(document.activeElement)){e.preventDefault();thkClosePanel();}
});
thkSync();

Xg();})();
