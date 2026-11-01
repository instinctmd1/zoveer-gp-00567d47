const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./sports-BuUclnpG.js","./three.core-B4Qru9N-.js","./artkit-0M2eg8yK.js","./rolldown-runtime-DK3Fl9T5.js","./vehicles-B9ikMsyH.js","./liveries-Bl9NNR1c.js","./world-IYvO_bMy.js"])))=>i.map(i=>d[i]);
import{i as e,n as t,r as n,t as r}from"./liveries-Bl9NNR1c.js";import{$ as i,An as a,Bn as o,C as s,Cn as c,Ct as l,D as u,E as d,En as f,F as p,Fn as m,G as h,Gn as g,Hn as _,In as v,J as y,Jn as b,K as x,Kn as S,L as C,Ln as w,M as T,Mn as E,N as ee,Nn as D,O,On as k,P as A,Pn as j,Q as M,R as N,Rn as P,S as F,T as I,Tn as L,Un as R,V as z,Vn as B,Wn as V,X as H,Xn as U,Y as te,Yn as ne,Z as re,Zn as ie,_ as ae,_t as oe,a as se,an as ce,at as le,b as ue,bn as de,c as fe,ct as pe,d as me,en as he,et as ge,f as W,fn as _e,ft as ve,g as ye,gt as be,h as xe,hn as Se,ht as Ce,i as we,in as Te,it as Ee,j as De,jn as Oe,k as ke,lt as Ae,mn as je,mt as Me,n as Ne,nn as Pe,nt as Fe,on as G,ot as Ie,p as Le,pn as Re,pt as ze,q as K,qn as Be,r as Ve,rt as q,s as J,sn as He,st as Ue,tn as We,tt as Y,ut as Ge,v as Ke,vn as qe,w as Je,wn as Ye,wt as Xe,x as Ze,xn as Qe,y as $e,yn as et,yt as tt,z as nt,zn as rt}from"./three.core-B4Qru9N-.js";import{t as it}from"./index-ChRVrBbg.js";function at(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function ot(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var X={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},Z={common:{diffuse:{value:new W(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new i},alphaMap:{value:null},alphaMapTransform:{value:new i},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new i}},envmap:{envMap:{value:null},envMapRotation:{value:new i},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new i}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new i}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new i},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new i},normalScale:{value:new j(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new i},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new i}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new i}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new i}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new W(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new W(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new i},alphaTest:{value:0},uvTransform:{value:new i}},sprite:{diffuse:{value:new W(16777215)},opacity:{value:1},center:{value:new j(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new i},alphaMap:{value:null},alphaMapTransform:{value:new i},alphaTest:{value:0}}},st={basic:{uniforms:b([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.fog]),vertexShader:X.meshbasic_vert,fragmentShader:X.meshbasic_frag},lambert:{uniforms:b([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,Z.lights,{emissive:{value:new W(0)},envMapIntensity:{value:1}}]),vertexShader:X.meshlambert_vert,fragmentShader:X.meshlambert_frag},phong:{uniforms:b([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,Z.lights,{emissive:{value:new W(0)},specular:{value:new W(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:X.meshphong_vert,fragmentShader:X.meshphong_frag},standard:{uniforms:b([Z.common,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.roughnessmap,Z.metalnessmap,Z.fog,Z.lights,{emissive:{value:new W(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:X.meshphysical_vert,fragmentShader:X.meshphysical_frag},toon:{uniforms:b([Z.common,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.gradientmap,Z.fog,Z.lights,{emissive:{value:new W(0)}}]),vertexShader:X.meshtoon_vert,fragmentShader:X.meshtoon_frag},matcap:{uniforms:b([Z.common,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,{matcap:{value:null}}]),vertexShader:X.meshmatcap_vert,fragmentShader:X.meshmatcap_frag},points:{uniforms:b([Z.points,Z.fog]),vertexShader:X.points_vert,fragmentShader:X.points_frag},dashed:{uniforms:b([Z.common,Z.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:X.linedashed_vert,fragmentShader:X.linedashed_frag},depth:{uniforms:b([Z.common,Z.displacementmap]),vertexShader:X.depth_vert,fragmentShader:X.depth_frag},normal:{uniforms:b([Z.common,Z.bumpmap,Z.normalmap,Z.displacementmap,{opacity:{value:1}}]),vertexShader:X.meshnormal_vert,fragmentShader:X.meshnormal_frag},sprite:{uniforms:b([Z.sprite,Z.fog]),vertexShader:X.sprite_vert,fragmentShader:X.sprite_frag},background:{uniforms:{uvTransform:{value:new i},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:X.background_vert,fragmentShader:X.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new i}},vertexShader:X.backgroundCube_vert,fragmentShader:X.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:X.cube_vert,fragmentShader:X.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:X.equirect_vert,fragmentShader:X.equirect_frag},distance:{uniforms:b([Z.common,Z.displacementmap,{referencePosition:{value:new m},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:X.distance_vert,fragmentShader:X.distance_frag},shadow:{uniforms:b([Z.lights,Z.fog,{color:{value:new W(0)},opacity:{value:1}}]),vertexShader:X.shadow_vert,fragmentShader:X.shadow_frag}};st.physical={uniforms:b([st.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new i},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new i},clearcoatNormalScale:{value:new j(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new i},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new i},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new i},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new i},sheen:{value:0},sheenColor:{value:new W(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new i},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new i},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new i},transmissionSamplerSize:{value:new j},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new i},attenuationDistance:{value:0},attenuationColor:{value:new W(0)},specularColor:{value:new W(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new i},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new i},anisotropyVector:{value:new j},anisotropyMap:{value:null},anisotropyMapTransform:{value:new i}}]),vertexShader:X.meshphysical_vert,fragmentShader:X.meshphysical_frag};var ct={r:0,b:0,g:0},lt=new ge,ut=new i;ut.set(-1,0,0,0,1,0,0,0,1);function dt(e,t,n,r,i,a){let s=new W(0),c=i===!0?0:1,l,u,d=null,f=0,p=null;function m(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function h(t){let r=!1,i=m(t);i===null?_(s,c):i&&i.isColor&&(_(i,1),r=!0);let o=e.xr.getEnvironmentBlendMode();o===`additive`?n.buffers.color.setClear(0,0,0,1,a):o===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function g(t,n){let i=m(n);i&&i.isCubeTexture?(u===void 0&&(u=new Y(new Ve(1,1,1),new Se({name:`BackgroundCubeMaterial`,uniforms:o(st.backgroundCube.uniforms),vertexShader:st.backgroundCube.vertexShader,fragmentShader:st.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute(`normal`),u.geometry.deleteAttribute(`uv`),u.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=i,u.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(lt.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(ut),u.material.toneMapped=Le.getTransfer(i.colorSpace)!==Re,(d!==i||f!==i.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,d=i,f=i.version,p=e.toneMapping),u.layers.enableAll(),t.unshift(u,u.geometry,u.material,0,0,null)):i&&i.isTexture&&(l===void 0&&(l=new Y(new Ce(2,2),new Se({name:`BackgroundMaterial`,uniforms:o(st.background.uniforms),vertexShader:st.background.vertexShader,fragmentShader:st.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=i,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.toneMapped=Le.getTransfer(i.colorSpace)!==Re,i.matrixAutoUpdate===!0&&i.updateMatrix(),l.material.uniforms.uvTransform.value.copy(i.matrix),(d!==i||f!==i.version||p!==e.toneMapping)&&(l.material.needsUpdate=!0,d=i,f=i.version,p=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null))}function _(t,r){t.getRGB(ct,S(e)),n.buffers.color.setClear(ct.r,ct.g,ct.b,r,a)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(e,t=1){s.set(e),c=t,_(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(e){c=e,_(s,c)},render:h,addToRenderList:g,dispose:v}}function ft(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function pt(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function mt(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(U(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&U(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&U(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function ht(e){let t=this,n=null,r=0,a=!1,o=!1,s=new Me,c=new i,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||a;return a=t,r=e.length,n},this.beginShadows=function(){o=!0,d(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(e,t){n=d(e,t,0)},this.setState=function(t,i,s){let c=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!a||c===null||c.length===0||o&&!p)o?d(null):u();else{let e=o?0:r,t=e*4,a=m.clippingState||null;l.value=a,a=d(c,i,t,s);for(let e=0;e!==t;++e)a[e]=n[e];m.clippingState=a,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function d(e,n,r,i){let a=e===null?0:e.length,o=null;if(a!==0){if(o=l.value,i!==!0||o===null){let t=r+a*4,i=n.matrixWorldInverse;c.getNormalMatrix(i),(o===null||o.length<t)&&(o=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)s.copy(e[t]).applyMatrix4(i,c),s.normal.toArray(o,n),o[n+3]=s.constant}l.value=o,l.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,o}}var gt=class extends P{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ae(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ve(5,5,5),i=new Se({name:`CubemapFromEquirect`,uniforms:o(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Y(r,i),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=K),new xe(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},_t=256,vt=3,yt=20,bt=256,xt=16,St=3,Ct=new m,wt=new W,Tt=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new xe(1,10,null),this._boxMesh=new Y(new Ve(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Ct}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(wt));let h=new xe(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mt(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jt(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(_t,V(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?_t:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Et(e,!1,!1),n=Math.log2(e)-vt;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Et(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mt()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=jt()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Ot(),this._integrationMaterial=kt());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/xt);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-St)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(bt*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=At());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function Et(e,t,n){return new gt(e,{minFilter:y,generateMipmaps:t,type:N,colorSpace:H,depthBuffer:n})}function Dt(e,t,n){return new Se({name:e,uniforms:t,vertexShader:X.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function Ot(){return Dt(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${bt}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function kt(){return Dt(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:xt}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function At(){return Dt(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${yt}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function jt(){return Dt(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Mt(){return Dt(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Nt(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new gt(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Tt(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Tt(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Pt(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&ie(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Ft(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){l(e.target)}function l(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function u(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function d(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function f(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?Ye:c)(Math.ceil(o/3)*6,1),l=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];l[n++]=r,l[n++]=i,l[n++]=i,l[n++]=a,l[n++]=a,l[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;l[t++]=n,l[t++]=r,l[t++]=r,l[t++]=i,l[t++]=i,l[t++]=n}}s.version=i;let u=a.get(e);u&&t.remove(u),a.set(e,s)}function p(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&f(e)}else f(e);return a.get(e)}function m(){for(let e in i){let t=i[e].deref();t!==void 0&&l(t)}}return{get:u,update:d,getWireframeAttribute:p,dispose:m}}function It(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Lt(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:R(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Rt(e,t,n){let r=new WeakMap,i=new v;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new ue(h,p,m,u);g.type=T,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new j(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function zt(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Bt={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Vt(e,t,n,r,i,a){let o=new P(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),c=null,l=null,u=null,d=new se;d.setAttribute(`position`,new De([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute(`uv`,new De([0,2,0,0,2,0],2));let f=new Pe({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Y(d,f),m=new ve(-1,1,1,-1,0,1),h=null,g=null,_=!1,v,y=null,b=[],x=!1;this.setSize=function(e,t){o.setSize(e,t),c!==null&&c.setSize(e,t),l!==null&&l.setSize(e,t);for(let n=0;n<b.length;n++){let r=b[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){b=e,x=b.length>0&&b[0].isRenderPass===!0;let t=o.width,n=o.height;b.length>0&&c===null&&(c=new P(t,n,{type:N,depthBuffer:!1,stencilBuffer:!1}),l=new P(t,n,{type:N,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&b.some(e=>e.needsDepthTexture===!0);r!==(o.depthTexture!==null)&&(r===!0&&u===null&&(u=new Je(t,n),a===!0&&(u.format=s,u.type=k)),o.dispose(),o.depthTexture=r?u:null,o.resolveDepthBuffer=r,o.storeMultisampledDepthBuffer=r);for(let e=0;e<b.length;e++){let i=b[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(u)}},this.begin=function(e,t){if(_||e.toneMapping===0&&b.length===0)return!1;if(y=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return x===!1&&e.setRenderTarget(o),v=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return x},this.end=function(e,t){e.toneMapping=v,_=!0;let n=o,r=c;for(let i=0;i<b.length;i++){let a=b[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===c?l:c))}if(h!==e.outputColorSpace||g!==e.toneMapping){h=e.outputColorSpace,g=e.toneMapping,f.defines={},Le.getTransfer(h)===`srgb`&&(f.defines.SRGB_TRANSFER=``);let t=Bt[g];t&&(f.defines[t]=``),f.needsUpdate=!0}f.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(y),e.render(p,m),y=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),c!==null&&c.dispose(),l!==null&&l.dispose(),d.dispose(),f.dispose()}}var Ht=new et,Ut=new Je(1,1),Wt=new ye(1),Gt=new ue,Kt=new $e,qt=new ae,Jt=[],Yt=[],Xt=new Float32Array(16),Zt=new Float32Array(9),Qt=new Float32Array(4);function $t(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Jt[i];if(a===void 0&&(a=new Float32Array(i),Jt[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function en(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function tn(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function nn(e,t){let n=Yt[t];n===void 0&&(n=new Int32Array(t),Yt[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function rn(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function an(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(en(n,t))return;e.uniform2fv(this.addr,t),tn(n,t)}}function on(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(en(n,t))return;e.uniform3fv(this.addr,t),tn(n,t)}}function sn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(en(n,t))return;e.uniform4fv(this.addr,t),tn(n,t)}}function cn(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(en(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),tn(n,t)}else{if(en(n,r))return;Qt.set(r),e.uniformMatrix2fv(this.addr,!1,Qt),tn(n,r)}}function ln(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(en(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),tn(n,t)}else{if(en(n,r))return;Zt.set(r),e.uniformMatrix3fv(this.addr,!1,Zt),tn(n,r)}}function un(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(en(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),tn(n,t)}else{if(en(n,r))return;Xt.set(r),e.uniformMatrix4fv(this.addr,!1,Xt),tn(n,r)}}function dn(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function fn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(en(n,t))return;e.uniform2iv(this.addr,t),tn(n,t)}}function pn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(en(n,t))return;e.uniform3iv(this.addr,t),tn(n,t)}}function mn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(en(n,t))return;e.uniform4iv(this.addr,t),tn(n,t)}}function hn(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function gn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(en(n,t))return;e.uniform2uiv(this.addr,t),tn(n,t)}}function _n(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(en(n,t))return;e.uniform3uiv(this.addr,t),tn(n,t)}}function vn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(en(n,t))return;e.uniform4uiv(this.addr,t),tn(n,t)}}function yn(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function bn(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?yn(Ut):Ht,n.setTexture2D(t||a,i)}function xn(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Kt,i)}function Sn(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?yn(Wt):qt,n.setTextureCube(t||a,i)}function Cn(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Gt,i)}function wn(e){switch(e){case 5126:return rn;case 35664:return an;case 35665:return on;case 35666:return sn;case 35674:return cn;case 35675:return ln;case 35676:return un;case 5124:case 35670:return dn;case 35667:case 35671:return fn;case 35668:case 35672:return pn;case 35669:case 35673:return mn;case 5125:return hn;case 36294:return gn;case 36295:return _n;case 36296:return vn;case 35678:case 36198:case 36298:case 36306:case 35682:return bn;case 35679:case 36299:case 36307:return xn;case 35680:case 36300:case 36308:case 36293:return Sn;case 36289:case 36303:case 36311:case 36292:return Cn}}function Tn(e,t){e.uniform1fv(this.addr,t)}function En(e,t){let n=$t(t,this.size,2);e.uniform2fv(this.addr,n)}function Dn(e,t){let n=$t(t,this.size,3);e.uniform3fv(this.addr,n)}function On(e,t){let n=$t(t,this.size,4);e.uniform4fv(this.addr,n)}function kn(e,t){let n=$t(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function An(e,t){let n=$t(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function jn(e,t){let n=$t(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Mn(e,t){e.uniform1iv(this.addr,t)}function Nn(e,t){e.uniform2iv(this.addr,t)}function Pn(e,t){e.uniform3iv(this.addr,t)}function Fn(e,t){e.uniform4iv(this.addr,t)}function In(e,t){e.uniform1uiv(this.addr,t)}function Ln(e,t){e.uniform2uiv(this.addr,t)}function Rn(e,t){e.uniform3uiv(this.addr,t)}function zn(e,t){e.uniform4uiv(this.addr,t)}function Bn(e,t,n){let r=this.cache,i=t.length,a=nn(n,i);en(r,a)||(e.uniform1iv(this.addr,a),tn(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?yn(Ut):Ht;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Vn(e,t,n){let r=this.cache,i=t.length,a=nn(n,i);en(r,a)||(e.uniform1iv(this.addr,a),tn(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Kt,a[e])}function Hn(e,t,n){let r=this.cache,i=t.length,a=nn(n,i);en(r,a)||(e.uniform1iv(this.addr,a),tn(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?yn(Wt):qt;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function Un(e,t,n){let r=this.cache,i=t.length,a=nn(n,i);en(r,a)||(e.uniform1iv(this.addr,a),tn(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Gt,a[e])}function Wn(e){switch(e){case 5126:return Tn;case 35664:return En;case 35665:return Dn;case 35666:return On;case 35674:return kn;case 35675:return An;case 35676:return jn;case 5124:case 35670:return Mn;case 35667:case 35671:return Nn;case 35668:case 35672:return Pn;case 35669:case 35673:return Fn;case 5125:return In;case 36294:return Ln;case 36295:return Rn;case 36296:return zn;case 35678:case 36198:case 36298:case 36306:case 35682:return Bn;case 35679:case 36299:case 36307:return Vn;case 35680:case 36300:case 36308:case 36293:return Hn;case 36289:case 36303:case 36311:case 36292:return Un}}var Gn=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=wn(t.type)}},Kn=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Wn(t.type)}},qn=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Jn=/(\w+)(\])?(\[|\.)?/g;function Yn(e,t){e.seq.push(t),e.map[t.id]=t}function Xn(e,t,n){let r=e.name,i=r.length;for(Jn.lastIndex=0;;){let a=Jn.exec(r),o=Jn.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Yn(n,l===void 0?new Gn(s,e,t):new Kn(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new qn(s),Yn(n,e)),n=e}}}var Zn=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Xn(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Qn(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var $n=37297,er=0;function tr(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var nr=new i;function rr(e){Le._getMatrix(nr,Le.workingColorSpace,e);let t=`mat3( ${nr.elements.map(e=>e.toFixed(4))} )`;switch(Le.getTransfer(e)){case re:return[t,`LinearTransferOETF`];case Re:return[t,`sRGBTransferOETF`];default:return U(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function ir(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+tr(e.getShaderSource(t),r)}return i}function ar(e,t){let n=rr(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var or={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function sr(e,t){let n=or[t];return n===void 0?(U(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var cr=new m;function lr(){return Le.getLuminanceCoefficients(cr),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${cr.x.toFixed(4)}, ${cr.y.toFixed(4)}, ${cr.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function ur(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(pr).join(`
`)}function dr(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function fr(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function pr(e){return e!==``}function mr(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function hr(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var gr=/^[ \t]*#include +<([\w\d./]+)>/gm;function _r(e){return e.replace(gr,vr)}function vr(e,t){let n=X[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return _r(n)}var yr=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function br(e){return e.replace(yr,xr)}function xr(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Sr(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Cr={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function wr(e){return Cr[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Tr={302:`ENVMAP_MODE_REFRACTION`};function Er(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Tr[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Dr={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Or(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Dr[e.combine]||`ENVMAP_BLENDING_NONE`}function kr(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=wr(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=Er(n),d=Or(n),f=ur(n),p=dr(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(pr).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(pr).join(`
`),g.length>0&&(g+=`
`)):(h=[Sr(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(pr).join(`
`),g=[Sr(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:X.tonemapping_pars_fragment,n.toneMapping===0?``:sr(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,X.colorspace_pars_fragment,ar(`linearToOutputTexel`,n.outputColorSpace),lr(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(pr).join(`
`)),o=_r(o),o=mr(o,n),o=hr(o,n),s=_r(s),s=mr(s,n),s=hr(s,n),o=br(o),s=br(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=Qn(i,i.VERTEX_SHADER,v),x=Qn(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function S(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(x)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,x);else{let e=ir(i,b,`vertex`),n=ir(i,x,`fragment`);R(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):U(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(x),C=new Zn(i,m),w=fr(i,m)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,$n)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=er++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}var Ar=0,jr=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Mr(e),t.set(e,n)),n}},Mr=class{constructor(e){this.id=Ar++,this.code=e,this.usedTimes=0}};function Nr(e){return e===1030||e===37490||e===36285}function Pr(e,t,n,r,i,a){let o=new x,s=new jr,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(e){return c.add(e),e===0?`uv`:`uv${e}`}function m(i,o,l,u,m,h){let g=u.fog,_=m.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=f[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&U(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,ee,D,O;if(x){let e=st[x];E=e.vertexShader,ee=e.fragmentShader}else{E=i.vertexShader,ee=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),D=e.id,O=t.id}let k=e.getRenderTarget(),A=e.state.buffers.depth.getReversed(),j=m.isInstancedMesh===!0,M=m.isBatchedMesh===!0,N=!!i.map,P=!!i.matcap,F=!!b,I=F&&b.isPMREMTexture===!0,L=!!i.aoMap,R=!!i.lightMap,z=!!i.bumpMap&&i.wireframe===!1,B=!!i.normalMap,V=!!i.displacementMap,H=!!i.emissiveMap,te=!!i.metalnessMap,ne=!!i.roughnessMap,re=i.anisotropy>0,ie=i.clearcoat>0,ae=i.diffuseRoughness>0,oe=i.dispersion>0,se=i.retroreflectivity>0,ce=i.iridescence>0,le=i.sheen>0,ue=i.transmission>0,de=re&&!!i.anisotropyMap,fe=ie&&!!i.clearcoatMap,pe=ie&&!!i.clearcoatNormalMap,me=ie&&!!i.clearcoatRoughnessMap,he=ae&&!!i.diffuseRoughnessMap,ge=ce&&!!i.iridescenceMap,W=ce&&!!i.iridescenceThicknessMap,_e=le&&!!i.sheenColorMap,ve=le&&!!i.sheenRoughnessMap,ye=!!i.specularMap,be=!!i.specularColorMap,xe=!!i.specularIntensityMap,Se=ue&&!!i.transmissionMap,Ce=ue&&!!i.thicknessMap,we=!!i.gradientMap,Te=!!i.alphaMap,Ee=i.alphaTest>0,De=!!i.alphaHash,Oe=!!i.extensions,ke=0;i.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(ke=e.toneMapping);let Ae=I?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,je={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:ee,defines:i.defines,customVertexShaderID:D,customFragmentShaderID:O,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:M,batchingColor:M&&m._colorsTexture!==null,instancing:j,instancingColor:j&&m.instanceColor!==null,instancingMorph:j&&m.morphTexture!==null,outputColorSpace:k===null?e.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Le.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:N,matcap:P,envMap:F,envMapMode:F&&b.mapping,envMapPMREM:I,envMapMaxLod:I?Ae.length-1:null,envMapSize:I?Ae[0].width:null,aoMap:L,lightMap:R,bumpMap:z,normalMap:B,displacementMap:V,emissiveMap:H,normalMapObjectSpace:B&&i.normalMapType===1,normalMapTangentSpace:B&&i.normalMapType===0,packedNormalMap:B&&i.normalMapType===0&&Nr(i.normalMap.format),metalnessMap:te,roughnessMap:ne,anisotropy:re,anisotropyMap:de,clearcoat:ie,clearcoatMap:fe,clearcoatNormalMap:pe,clearcoatRoughnessMap:me,diffuseRoughness:ae,diffuseRoughnessMap:he,dispersion:oe,retroreflection:se,iridescence:ce,iridescenceMap:ge,iridescenceThicknessMap:W,sheen:le,sheenColorMap:_e,sheenRoughnessMap:ve,specularMap:ye,specularColorMap:be,specularIntensityMap:xe,transmission:ue,transmissionMap:Se,thicknessMap:Ce,gradientMap:we,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Te,alphaTest:Ee,alphaHash:De,combine:i.combine,mapUv:N&&p(i.map.channel),aoMapUv:L&&p(i.aoMap.channel),lightMapUv:R&&p(i.lightMap.channel),bumpMapUv:z&&p(i.bumpMap.channel),normalMapUv:B&&p(i.normalMap.channel),displacementMapUv:V&&p(i.displacementMap.channel),emissiveMapUv:H&&p(i.emissiveMap.channel),metalnessMapUv:te&&p(i.metalnessMap.channel),roughnessMapUv:ne&&p(i.roughnessMap.channel),anisotropyMapUv:de&&p(i.anisotropyMap.channel),clearcoatMapUv:fe&&p(i.clearcoatMap.channel),clearcoatNormalMapUv:pe&&p(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&p(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:he&&p(i.diffuseRoughnessMap.channel),iridescenceMapUv:ge&&p(i.iridescenceMap.channel),iridescenceThicknessMapUv:W&&p(i.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&p(i.sheenColorMap.channel),sheenRoughnessMapUv:ve&&p(i.sheenRoughnessMap.channel),specularMapUv:ye&&p(i.specularMap.channel),specularColorMapUv:be&&p(i.specularColorMap.channel),specularIntensityMapUv:xe&&p(i.specularIntensityMap.channel),transmissionMapUv:Se&&p(i.transmissionMap.channel),thicknessMapUv:Ce&&p(i.thicknessMap.channel),alphaMapUv:Te&&p(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(B||re),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(N||Te),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&B===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:A,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:ke,decodeVideoTexture:N&&i.map.isVideoTexture===!0&&Le.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:H&&i.emissiveMap.isVideoTexture===!0&&Le.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Oe&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Oe&&i.extensions.multiDraw===!0||M)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return je.vertexUv1s=c.has(1),je.vertexUv2s=c.has(2),je.vertexUv3s=c.has(3),c.clear(),je}function h(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(g(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function g(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function v(e){let t=f[e.type],n;if(t){let e=st[t];n=L.clone(e.uniforms)}else n=e.uniforms;return n}function y(t,n){let r=u.get(n);return r===void 0?(r=new kr(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function b(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:S,programs:l,dispose:C}}function Fr(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Ir(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Lr(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Rr(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Ir),r.length>1&&r.sort(t||Lr),i.length>1&&i.sort(t||Lr)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function zr(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Rr,e.set(t,[i])):n>=r.length?(i=new Rr,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Br(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new m,color:new W};break;case`SpotLight`:n={position:new m,direction:new m,color:new W,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new m,color:new W,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new m,skyColor:new W,groundColor:new W};break;case`RectAreaLight`:n={color:new W,position:new m,halfWidth:new m,halfHeight:new m}}return e[t.id]=n,n}}}function Vr(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Hr=0;function Ur(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Wr(e){let t=new Br,n=Vr(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new m);let i=new m,a=new ge,o=new ge;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Ur);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Z.LTC_FLOAT_1,r.rectAreaLTC2=Z.LTC_FLOAT_2):(r.rectAreaLTC1=Z.LTC_HALF_1,r.rectAreaLTC2=Z.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Hr++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Gr(e){let t=new Wr(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function Kr(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Gr(e),t.set(n,[a])):r>=i.length?(a=new Gr(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var qr=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jr=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Yr=[new m(1,0,0),new m(-1,0,0),new m(0,1,0),new m(0,-1,0),new m(0,0,1),new m(0,0,-1)],Xr=[new m(0,-1,0),new m(0,-1,0),new m(0,0,1),new m(0,0,-1),new m(0,-1,0),new m(0,-1,0)],Zr=new ge,Qr=new m,$r=new m;function ei(e,t,n){let r=new A,i=new j,o=new j,s=new v,c=new q,l=new Ee,u={},d=n.maxTextureSize,f={0:1,1:0,2:2},p=new Se({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new j},radius:{value:4}},vertexShader:qr,fragmentShader:Jr}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let h=new se;h.setAttribute(`position`,new we(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Y(h,p),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let y=this.type;this.render=function(t,n,c){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||t.length===0)return;this.type===2&&(U(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let l=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.state;p.setBlending(0),p.buffers.depth.getReversed()===!0?p.buffers.color.setClear(0,0,0,0):p.buffers.color.setClear(1,1,1,1),p.buffers.depth.setTest(!0),p.setScissorTest(!1);let m=y!==this.type;m&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let l=0,u=t.length;l<u;l++){let u=t[l],f=u.shadow;if(f===void 0){U(`WebGLShadowMap:`,u,`has no shadow.`);continue}if(f.autoUpdate===!1&&f.needsUpdate===!1)continue;i.copy(f.mapSize);let h=f.getFrameExtents();i.multiply(h),o.copy(f.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(o.x=Math.floor(d/h.x),i.x=o.x*h.x,f.mapSize.x=o.x),i.y>d&&(o.y=Math.floor(d/h.y),i.y=o.y*h.y,f.mapSize.y=o.y));let g=e.state.buffers.depth.getReversed();if(f.camera._reversedDepth=g,f.map===null||m===!0){if(f.map!==null&&(f.map.depthTexture!==null&&(f.map.depthTexture.dispose(),f.map.depthTexture=null),f.map.dispose()),this.type===3){if(u.isPointLight){U(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}f.map=new P(i.x,i.y,{format:he,type:N,minFilter:K,magFilter:K,generateMipmaps:!1}),f.map.texture.name=u.name+`.shadowMap`,f.map.depthTexture=new Je(i.x,i.y,T),f.map.depthTexture.name=u.name+`.shadowMapDepth`,f.map.depthTexture.format=F,f.map.depthTexture.compareFunction=null,f.map.depthTexture.minFilter=pe,f.map.depthTexture.magFilter=pe}else u.isPointLight?(f.map=new gt(i.x),f.map.depthTexture=new ye(i.x,a)):(f.map=new P(i.x,i.y),f.map.depthTexture=new Je(i.x,i.y,a)),f.map.depthTexture.name=u.name+`.shadowMap`,f.map.depthTexture.format=F,this.type===1?(f.map.depthTexture.compareFunction=g?518:515,f.map.depthTexture.minFilter=K,f.map.depthTexture.magFilter=K):(f.map.depthTexture.compareFunction=null,f.map.depthTexture.minFilter=pe,f.map.depthTexture.magFilter=pe);f.camera.updateProjectionMatrix()}f.map.isWebGLCubeRenderTarget!==!0&&(f.map.width!==i.x||f.map.height!==i.y)&&f.map.setSize(i.x,i.y);let _=f.map.isWebGLCubeRenderTarget?6:f.getViewportCount();u.isPointLight!==!0&&f.updateMatrices(u,c);let v=f.camera.layers.mask&4294967294?f.camera.layers:c.layers;for(let t=0;t<_;t++){let i=f.getCamera(t);if(u.isPointLight){let e=f.camera,n=f.matrix,r=u.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Qr.setFromMatrixPosition(u.matrixWorld),e.position.copy(Qr),$r.copy(e.position),$r.add(Yr[t]),e.up.copy(Xr[t]),e.lookAt($r),e.updateMatrixWorld(),n.makeTranslation(-Qr.x,-Qr.y,-Qr.z),Zr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),f._frustum.setFromProjectionMatrix(Zr,e.coordinateSystem,e.reversedDepth)}if(f.map.isWebGLCubeRenderTarget)e.setRenderTarget(f.map,t),e.clear();else{t===0&&(e.setRenderTarget(f.map),e.clear());let n=f.getViewport(t);s.set(o.x*n.x,o.y*n.y,o.x*n.z,o.y*n.w),p.viewport(s)}r=f.getFrustum(t),S(n,c,i,u,v,this.type)}f.isPointLightShadow!==!0&&this.type===3&&b(f,c),f.needsUpdate=!1}y=this.type,_.needsUpdate=!1,e.setRenderTarget(l,u,f)};function b(n,r){let a=t.update(g);p.defines.VSM_SAMPLES!==n.blurSamples&&(p.defines.VSM_SAMPLES=n.blurSamples,m.defines.VSM_SAMPLES=n.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),n.mapPass===null?n.mapPass=new P(i.x,i.y,{format:he,type:N}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),p.uniforms.shadow_pass.value=n.map.depthTexture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,p,g,null),m.uniforms.shadow_pass.value=n.mapPass.texture,m.uniforms.resolution.value.set(n.map.width,n.map.height),m.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,m,g,null)}function x(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?l:c,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=u[e];r===void 0&&(r={},u[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,C)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?f[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function S(n,i,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),s=n.material;if(Array.isArray(s)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=x(n,d,o,c);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(s.visible){let t=x(n,s,o,c);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)S(l[e],i,a,o,s,c)}function C(e){e.target.removeEventListener(`dispose`,C);for(let t in u){let n=u[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function ti(e,t){function n(){let t=!1,n=new v,r=null,i=new v(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?ne(e.DEPTH_TEST):re(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=G[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?ne(e.STENCIL_TEST):re(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,y=null,b=null,x=null,S=null,C=null,w=null,T=new W(0,0,0),E=0,ee=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,P=0,F=e.getParameter(e.VERSION);F.indexOf(`WebGL`)===-1?F.indexOf(`OpenGL ES`)!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),N=P>=2):(P=parseFloat(/^WebGL (\d)/.exec(F)[1]),N=P>=1);let I=null,L={},z=e.getParameter(e.SCISSOR_BOX),B=e.getParameter(e.VIEWPORT),V=new v().fromArray(z),H=new v().fromArray(B);function U(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let te={};te[e.TEXTURE_2D]=U(e.TEXTURE_2D,e.TEXTURE_2D,1),te[e.TEXTURE_CUBE_MAP]=U(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[e.TEXTURE_2D_ARRAY]=U(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),te[e.TEXTURE_3D]=U(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),ne(e.DEPTH_TEST),o.setFunc(3),de(!1),fe(1),ne(e.CULL_FACE),le(0);function ne(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function re(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function ie(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function ae(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function oe(t){return h!==t&&(e.useProgram(t),h=t,!0)}let se={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};se[103]=e.MIN,se[104]=e.MAX;let ce={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function le(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(re(e.BLEND),g=!1);else if(g===!1&&(ne(e.BLEND),g=!0),t!==5){if(t!==_||u!==ee){if((y!==100||S!==100)&&(e.blendEquation(e.FUNC_ADD),y=100,S=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:R(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:R(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:R(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:R(`WebGLState: Invalid blending: `,t)}b=null,x=null,C=null,w=null,T.set(0,0,0),E=0,_=t,ee=u}}else a||=n,o||=r,s||=i,(n!==y||a!==S)&&(e.blendEquationSeparate(se[n],se[a]),y=n,S=a),(r!==b||i!==x||o!==C||s!==w)&&(e.blendFuncSeparate(ce[r],ce[i],ce[o],ce[s]),b=r,x=i,C=o,w=s),(c.equals(T)===!1||l!==E)&&(e.blendColor(c.r,c.g,c.b,l),T.copy(c),E=l),_=t,ee=!1}function ue(t,n){t.side===2?re(e.CULL_FACE):ne(e.CULL_FACE);let r=t.side===1;n&&(r=!r),de(r),t.blending===1&&t.transparent===!1?le(0):le(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),me(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?ne(e.SAMPLE_ALPHA_TO_COVERAGE):re(e.SAMPLE_ALPHA_TO_COVERAGE)}function de(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function fe(t){t===0?re(e.CULL_FACE):(ne(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function pe(t){t!==k&&(N&&e.lineWidth(t),k=t)}function me(t,n,r){t?(ne(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):re(e.POLYGON_OFFSET_FILL)}function he(t){t?ne(e.SCISSOR_TEST):re(e.SCISSOR_TEST)}function ge(t){t===void 0&&(t=e.TEXTURE0+M-1),I!==t&&(e.activeTexture(t),I=t)}function _e(t,n,r){r===void 0&&(r=I===null?e.TEXTURE0+M-1:I);let i=L[r];i===void 0&&(i={type:void 0,texture:void 0},L[r]=i),(i.type!==t||i.texture!==n)&&(I!==r&&(e.activeTexture(r),I=r),e.bindTexture(t,n||te[t]),i.type=t,i.texture=n)}function ve(){let t=L[I];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function ye(){try{e.compressedTexImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function be(){try{e.compressedTexImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function xe(){try{e.texSubImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Se(){try{e.texSubImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Ce(){try{e.compressedTexSubImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function we(){try{e.compressedTexSubImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Te(){try{e.texStorage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Ee(){try{e.texStorage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function De(){try{e.texImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Oe(){try{e.texImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function ke(t){return d[t]===void 0?e.getParameter(t):d[t]}function Ae(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function je(t){V.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),V.copy(t))}function Me(t){H.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),H.copy(t))}function Ne(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function Pe(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function Fe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},I=null,L={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,y=null,b=null,x=null,S=null,C=null,w=null,T=new W(0,0,0),E=0,ee=!1,D=null,O=null,k=null,A=null,j=null,V.set(0,0,e.canvas.width,e.canvas.height),H.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:ne,disable:re,bindFramebuffer:ie,drawBuffers:ae,useProgram:oe,setBlending:le,setMaterial:ue,setFlipSided:de,setCullFace:fe,setLineWidth:pe,setPolygonOffset:me,setScissorTest:he,activeTexture:ge,bindTexture:_e,unbindTexture:ve,compressedTexImage2D:ye,compressedTexImage3D:be,texImage2D:De,texImage3D:Oe,pixelStorei:Ae,getParameter:ke,updateUBOMapping:Ne,uniformBlockBinding:Pe,texStorage2D:Te,texStorage3D:Ee,texSubImage2D:xe,texSubImage3D:Se,compressedTexSubImage2D:Ce,compressedTexSubImage3D:we,scissor:je,viewport:Me,reset:Fe}}function ni(e,t,n,r,i,a,o){let c=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,l=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),u=new j,d=new WeakMap,f=new Set,p,m=new WeakMap,h=new Set,v=new FinalizationRegistry(e=>h.delete(e)),b=!1;try{b=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function x(e,t){return b?new OffscreenCanvas(e,t):_(`canvas`)}function S(e,t,n){let r=1,i=Fe(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);p===void 0&&(p=x(n,a));let o=t?x(n,a):p;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),U(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&U(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function C(e){return e.generateMipmaps}function w(t){e.generateMipmap(t)}function T(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function E(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];U(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||U(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?re:Le.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function ee(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,U(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function D(e,t){return C(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function O(e){let t=new WeakRef(e);r.get(e).__ref=t,h.add(t),v.register(e,t,t)}function k(e){let t=r.get(e).__ref;t!==void 0&&(h.delete(t),v.unregister(t))}function A(e){N(e.target)}function M(e){P(e.target)}function N(e){e.removeEventListener(`dispose`,A),k(e),I(e),e.isVideoTexture&&d.delete(e),e.isHTMLTexture&&f.delete(e)}function P(e){e.removeEventListener(`dispose`,M),k(e),z(e)}function F(){for(let e of h){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?P(t):N(t))}h.clear(),f.clear()}function I(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=m.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&L(e),Object.keys(i).length===0&&m.delete(n)}r.remove(e)}function L(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=m.get(i);delete a[n.__cacheKey],o.memory.textures--}function z(t){let n=r.get(t);n.__depthDisposeCallback&&n.__depthDisposeCallback();let i=t.depthTexture;if(i&&i.renderTarget===t&&N(i),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let a=t.textures;for(let t=0,n=a.length;t<n;t++){let n=r.get(a[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(a[t])}r.remove(t)}let B=0;function V(){B=0}function H(){return B}function ne(e){B=e}function ie(){let e=B;return e>=i.maxTextures&&U(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),B+=1,e}function ae(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function oe(t,i){let a=r.get(t);if(t.isVideoTexture&&Ne(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)U(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)U(`WebGLRenderer: Texture marked for update but image is incomplete`);else{ye(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function se(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?ye(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function le(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?ye(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function ue(t,i){let a=r.get(t);t.version>0&&a.__version!==t.version?be(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let de={[ce]:e.REPEAT,[me]:e.CLAMP_TO_EDGE,[Ue]:e.MIRRORED_REPEAT},fe={[pe]:e.NEAREST,[Ge]:e.NEAREST_MIPMAP_NEAREST,[Ae]:e.NEAREST_MIPMAP_LINEAR,[K]:e.LINEAR,[te]:e.LINEAR_MIPMAP_NEAREST,[y]:e.LINEAR_MIPMAP_LINEAR},he={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function ge(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&U(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,de[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,de[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,de[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,fe[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,fe[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,he[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function W(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,A),O(n));let i=n.source,a=m.get(i);a===void 0&&(a={},m.set(i,a));let s=ae(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&L(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function _e(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ve(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=_e(n.start,r.width,4),c=_e(t.start,r.width,4);n.start<=i+1&&a===c&&_e(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function ye(t,o,c){let l=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(l=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(l=e.TEXTURE_3D);let u=W(t,o),d=o.source;n.bindTexture(l,t.__webglTexture,e.TEXTURE0+c);let p=r.get(d);if(d.version!==p.__version||u===!0){if(n.activeTexture(e.TEXTURE0+c),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=Le.getPrimaries(Le.workingColorSpace),r=o.colorSpace===``?null:Le.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=S(o.image,!1,i.maxTextureSize);t=Pe(o,t);let r=a.convert(o.format,o.colorSpace),m=a.convert(o.type),h=E(o.internalFormat,r,m,o.normalized,o.colorSpace,o.isVideoTexture);ge(l,o);let _,v=o.mipmaps,y=o.isVideoTexture!==!0,b=p.__version===void 0||u===!0,x=d.dataReady,T=D(o,t);if(o.isDepthTexture)h=ee(o.format===s,o.type),b&&(y?n.texStorage2D(e.TEXTURE_2D,1,h,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,h,t.width,t.height,0,r,m,null));else if(o.isDataTexture){if(v.length>0){y&&b&&n.texStorage2D(e.TEXTURE_2D,T,h,v[0].width,v[0].height);for(let t=0,i=v.length;t<i;t++)_=v[t],y?x&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,_.width,_.height,r,m,_.data):n.texImage2D(e.TEXTURE_2D,t,h,_.width,_.height,0,r,m,_.data);o.generateMipmaps=!1}else y?(b&&n.texStorage2D(e.TEXTURE_2D,T,h,t.width,t.height),x&&ve(o,t,r,m)):n.texImage2D(e.TEXTURE_2D,0,h,t.width,t.height,0,r,m,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){y&&b&&n.texStorage3D(e.TEXTURE_2D_ARRAY,T,h,v[0].width,v[0].height,t.depth);for(let i=0,a=v.length;i<a;i++)if(_=v[i],o.format!==1023){if(r!==null){if(y){if(x){if(o.layerUpdates.size>0){let t=g(_.width,_.height,o.format,o.type);for(let a of o.layerUpdates){let o=_.data.subarray(a*t/_.data.BYTES_PER_ELEMENT,(a+1)*t/_.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,_.width,_.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,_.width,_.height,t.depth,r,_.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,h,_.width,_.height,t.depth,0,_.data,0,0)}else U(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else y?x&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,_.width,_.height,t.depth,r,m,_.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,h,_.width,_.height,t.depth,0,r,m,_.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{y&&b&&n.texStorage2D(e.TEXTURE_2D,T,h,v[0].width,v[0].height);for(let t=0,i=v.length;t<i;t++)_=v[t],o.format===1023?y?x&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,_.width,_.height,r,m,_.data):n.texImage2D(e.TEXTURE_2D,t,h,_.width,_.height,0,r,m,_.data):r===null?U(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):y?x&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,_.width,_.height,r,_.data):n.compressedTexImage2D(e.TEXTURE_2D,t,h,_.width,_.height,0,_.data)}}else if(o.isDataArrayTexture){if(y){if(b&&n.texStorage3D(e.TEXTURE_2D_ARRAY,T,h,t.width,t.height,t.depth),x){if(o.layerUpdates.size>0){let i=g(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,m,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,m,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,h,t.width,t.height,t.depth,0,r,m,t.data)}else if(o.isData3DTexture)y?(b&&n.texStorage3D(e.TEXTURE_3D,T,h,t.width,t.height,t.depth),x&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,m,t.data)):n.texImage3D(e.TEXTURE_3D,0,h,t.width,t.height,t.depth,0,r,m,t.data);else if(o.isFramebufferTexture){if(b){if(y)n.texStorage2D(e.TEXTURE_2D,T,h,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<T;t++)n.texImage2D(e.TEXTURE_2D,t,h,i,a,0,r,m,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),f.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of f)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(v.length>0){if(y&&b){let t=Fe(v[0]);n.texStorage2D(e.TEXTURE_2D,T,h,t.width,t.height)}for(let t=0,i=v.length;t<i;t++)_=v[t],y?x&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,m,_):n.texImage2D(e.TEXTURE_2D,t,h,r,m,_);o.generateMipmaps=!1}else if(y){if(b){let r=Fe(t);n.texStorage2D(e.TEXTURE_2D,T,h,r.width,r.height)}x&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,m,t)}else n.texImage2D(e.TEXTURE_2D,0,h,r,m,t);C(o)&&o.mipmapsAutoUpdate===!0&&w(l),p.__version=d.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function be(t,o,c){if(o.image.length!==6)return;let l=W(t,o),u=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+c);let d=r.get(u);if(u.version!==d.__version||l===!0){n.activeTexture(e.TEXTURE0+c);let t=Le.getPrimaries(Le.workingColorSpace),r=o.colorSpace===``?null:Le.getPrimaries(o.colorSpace),f=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,f);let p=o.isCompressedTexture||o.image[0].isCompressedTexture,m=o.image[0]&&o.image[0].isDataTexture,h=[];for(let e=0;e<6;e++)!p&&!m?h[e]=S(o.image[e],!0,i.maxCubemapSize):h[e]=m?o.image[e].image:o.image[e],h[e]=Pe(o,h[e]);let g=h[0],_=a.convert(o.format,o.colorSpace),v=a.convert(o.type),y=E(o.internalFormat,_,v,o.normalized,o.colorSpace),b=o.isVideoTexture!==!0,x=d.__version===void 0||l===!0,T=u.dataReady,O=D(o,g);ge(e.TEXTURE_CUBE_MAP,o);let k;if(o.isDepthTexture){if(y=ee(o.format===s,o.type),x){if(b)n.texStorage2D(e.TEXTURE_CUBE_MAP,1,y,g.width,g.height);else for(let t=0;t<6;t++)n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,y,g.width,g.height,0,_,v,null)}}else if(p){b&&x&&n.texStorage2D(e.TEXTURE_CUBE_MAP,O,y,g.width,g.height);for(let t=0;t<6;t++){k=h[t].mipmaps;for(let r=0;r<k.length;r++){let i=k[r];o.format===1023?b?T&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,_,v,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,y,i.width,i.height,0,_,v,i.data):_===null?U(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):b?T&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,_,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,y,i.width,i.height,0,i.data)}}}else{if(k=o.mipmaps,b&&x){k.length>0&&O++;let t=Fe(h[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,O,y,t.width,t.height)}for(let t=0;t<6;t++)if(m){b?T&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,h[t].width,h[t].height,_,v,h[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,y,h[t].width,h[t].height,0,_,v,h[t].data);for(let r=0;r<k.length;r++){let i=k[r].image[t].image;b?T&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,_,v,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,y,i.width,i.height,0,_,v,i.data)}}else{b?T&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,_,v,h[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,y,_,v,h[t]);for(let r=0;r<k.length;r++){let i=k[r];b?T&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,_,v,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,y,_,v,i.image[t])}}}C(o)&&o.mipmapsAutoUpdate===!0&&w(e.TEXTURE_CUBE_MAP),d.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function xe(t,i,o,s,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=E(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),Me(i)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,s,l,h.__webglTexture,0,je(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,s,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Se(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=ee(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Me(n)?c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,je(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,je(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],s=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=E(o.internalFormat,s,l,o.normalized,o.colorSpace);Me(n)?c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,je(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,je(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ce(t,i,a){let o=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let s=r.get(i.depthTexture);s.__renderTarget=i;let l=o?i.depthTexture.image[0]:i.depthTexture.image;s.__webglTexture&&l.width===i.width&&l.height===i.height||(l.width=i.width,l.height=i.height,i.depthTexture.needsUpdate=!0),o?ue(i.depthTexture,0):oe(i.depthTexture,0);let u=s.__webglTexture,d=je(i),f=o?e.TEXTURE_CUBE_MAP_POSITIVE_X+a:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)Me(i)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)Me(i)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function we(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)Ce(i.__webglFramebuffer[e],t,e);else t.texture.mipmaps.length>0?Ce(i.__webglFramebuffer[0],t,0):Ce(i.__webglFramebuffer,t,0)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),Se(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else if(t.texture.mipmaps.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),Se(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Te(t,n,i){let a=r.get(t);n!==void 0&&xe(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&we(t)}function Ee(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,M),O(t);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&Me(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=E(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=je(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),Se(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),ge(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)xe(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else xe(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);C(i)?w(e.TEXTURE_CUBE_MAP):i.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),ge(c,a),xe(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),C(a)&&w(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),ge(r,i),i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)xe(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else xe(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);C(i)?w(r):i.mipmaps.length>0&&e.texParameteri(r,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}t.depthBuffer&&we(t)}function De(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(C(a)&&a.mipmapsAutoUpdate===!0){let t=T(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),w(t),n.unbindTexture()}}}let Oe=[];function ke(t){if(t.samples>0){if(Me(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,c=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer),t.texture.mipmaps.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),l===!0&&(Oe.length=0,Oe.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&Oe.push(c),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Oe))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&l){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function je(e){return Math.min(i.maxSamples,e.samples)}function Me(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function Ne(e){let t=o.render.frame;d.get(e)!==t&&(d.set(e,t),e.update())}function Pe(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Le.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&U(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):R(`WebGLTextures: Unsupported texture color space:`,n)),t}function Fe(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(u.width=e.naturalWidth||e.width,u.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(u.width=e.displayWidth,u.height=e.displayHeight):(u.width=e.width,u.height=e.height),u}this.allocateTextureUnit=ie,this.resetTextureUnits=V,this.getTextureUnits=H,this.setTextureUnits=ne,this.setTexture2D=oe,this.setTexture2DArray=se,this.setTexture3D=le,this.setTextureCube=ue,this.rebindTextures=Te,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Me,this.dispose=F}function ri(e,t){function n(n,r=``){let i,a=Le.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var ii=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ai=`
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

}`,oi=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ke(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Se({vertexShader:ii,fragmentShader:ai,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Y(new Ce(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},si=class extends O{constructor(e,t){super();let n=this,r=null,i=1,o=null,c=`local-floor`,u=1,d=null,p=null,m=null,h=null,g=null,_=null,y=typeof XRWebGLBinding<`u`,b=new oi,x={},S=t.getContextAttributes(),C=null,w=null,T=[],E=[],ee=new j,D=null,O=null,A=new ze;A.viewport=new v;let M=new ze;M.viewport=new v;let N=[A,M],I=new Ne,L=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=T[e];return t===void 0&&(t=new rt,T[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=T[e];return t===void 0&&(t=new rt,T[e]=t),t.getGripSpace()},this.getHand=function(e){let t=T[e];return t===void 0&&(t=new rt,T[e]=t),t.getHandSpace()};function z(e){let t=E.indexOf(e.inputSource);if(t===-1)return;let n=T[t];n!==void 0&&(n.update(e.inputSource,e.frame,d||o),n.dispatchEvent({type:e.type,data:e.inputSource}))}function B(){r.removeEventListener(`select`,z),r.removeEventListener(`selectstart`,z),r.removeEventListener(`selectend`,z),r.removeEventListener(`squeeze`,z),r.removeEventListener(`squeezestart`,z),r.removeEventListener(`squeezeend`,z),r.removeEventListener(`end`,B),r.removeEventListener(`inputsourceschange`,V);for(let e=0;e<T.length;e++){let t=E[e];t!==null&&(E[e]=null,T[e].disconnect(t))}L=null,R=null,b.reset();for(let e in x)delete x[e];if(e.setRenderTarget(C),g=null,h=null,m=null,r=null,w=null,ie.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(ee.width,ee.height,!1),O!==null){let e=O.camera;e.fov=O.fov,e.zoom=O.zoom,e.updateProjectionMatrix(),O=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&U(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){c=e,n.isPresenting===!0&&U(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return d||o},this.setReferenceSpace=function(e){d=e},this.getBaseLayer=function(){return h===null?g:h},this.getBinding=function(){return m===null&&y&&(m=new XRWebGLBinding(r,t)),m},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(p){if(r=p,r!==null){if(C=e.getRenderTarget(),r.addEventListener(`select`,z),r.addEventListener(`selectstart`,z),r.addEventListener(`selectend`,z),r.addEventListener(`squeeze`,z),r.addEventListener(`squeezestart`,z),r.addEventListener(`squeezeend`,z),r.addEventListener(`end`,B),r.addEventListener(`inputsourceschange`,V),S.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(ee),y&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,o=null,c=null;S.depth&&(c=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=S.stencil?s:F,o=S.stencil?k:a);let u={colorFormat:t.RGBA8,depthFormat:c,scaleFactor:i};m=this.getBinding(),h=m.createProjectionLayer(u),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),w=new P(h.textureWidth,h.textureHeight,{format:l,type:f,depthTexture:new Je(h.textureWidth,h.textureHeight,o,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let n={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:i};g=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),w=new P(g.framebufferWidth,g.framebufferHeight,{format:l,type:f,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(u),d=null,o=await r.requestReferenceSpace(c),ie.setContext(r),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function V(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=E.indexOf(n);r>=0&&(E[r]=null,T[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=E.indexOf(n);if(r===-1){for(let e=0;e<T.length;e++)if(e>=E.length){E.push(n),r=e;break}else if(E[e]===null){E[e]=n,r=e;break}if(r===-1)break}let i=T[r];i&&i.connect(n)}}function H(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;b.texture!==null&&(b.depthNear>0&&(t=b.depthNear),b.depthFar>0&&(n=b.depthFar)),I.near=M.near=A.near=t,I.far=M.far=A.far=n,(L!==I.near||R!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),L=I.near,R=I.far),I.layers.mask=e.layers.mask|6,A.layers.mask=I.layers.mask&-5,M.layers.mask=I.layers.mask&-3;let i=e.parent,a=I.cameras;H(I,i);for(let e=0;e<a.length;e++)H(a[e],i);I.projectionMatrix.copy(A.projectionMatrix),I.projectionMatrixInverse.copy(A.projectionMatrixInverse),O===null&&e.isPerspectiveCamera&&(O={camera:e,fov:e.fov,zoom:e.zoom}),te(e,I,i)};function te(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=tt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(h!==null||g!==null)return u},this.setFoveation=function(e){u=e,h!==null&&(h.fixedFoveation=e),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=e)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(I)},this.getCameraTexture=function(e){return x[e]};let ne=null;function re(t,i){if(p=i.getViewerPose(d||o),_=i,p!==null){let t=p.views;g!==null&&(e.setRenderTargetFramebuffer(w,g.framebuffer),e.setRenderTarget(w));let i=!1;t.length!==I.cameras.length&&(I.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(g!==null)a=g.getViewport(r);else{let t=m.getViewSubImage(h,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(w,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(w))}let o=N[n];o===void 0&&(o=new ze,o.layers.enable(n),o.viewport=new v,N[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(I.matrix.copy(o.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),i===!0&&I.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&y){m=n.getBinding();let e=m.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&b.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&y){e.state.unbindTexture(),m=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=x[n];e||(e=new ke,x[n]=e);let t=m.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<T.length;e++){let t=E[e],n=T[e];t!==null&&n!==void 0&&n.update(t,i,d||o)}ne&&ne(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),_=null}let ie=new at;ie.setAnimationLoop(re),this.setAnimationLoop=function(e){ne=e},this.dispose=function(){}}},ci=new ge,li=new i;li.set(-1,0,0,0,1,0,0,0,1);function ui(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,S(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(ci.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(li),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function di(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?U(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):U(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var fi=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),pi=null;function mi(){return pi===null&&(pi=new Ze(fi,16,16,he,N),pi.name=`DFG_LUT`,pi.minFilter=K,pi.magFilter=K,pi.wrapS=me,pi.wrapT=me,pi.generateMipmaps=!1,pi.needsUpdate=!0),pi}var hi=class{constructor(e={}){let{canvas:t=B(),context:n=null,depth:r=!0,stencil:i=!1,alpha:o=!1,antialias:s=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u=`default`,failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:g=f}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);_=n.getContextAttributes().alpha}else _=o;let b=g,x=new Set([Xe,We,Te]),S=new Set([f,a,D,k,Oe,E]),C=new Uint32Array(4),T=new Int32Array(4),ee={textures:[],min:[],max:[],resolution:[]},O=null,j=null,M=[],F=[],I=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,z=!1,V=null,H=null,te=null,re=null;this._outputColorSpace=_e;let ie=0,ae=0,oe=null,se=-1,ce=null,le=new v,ue=new v,de=null,fe=new W(0),pe=0,me=t.width,he=t.height,ve=1,ye=null,be=null,xe=new v(0,0,me,he),Se=new v(0,0,me,he),Ce=!1,we=new A,Ee=new p,De=!1,ke=!1,Ae=new ge,je=new m,Me=new v,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pe=!1;function Fe(){return oe===null?ve:1}let G=n;function Ie(e,n){return t.getContext(e,n)}let Re,ze,K,Ve,q,J,He,Ue,Y,Ge,Ke,qe,Je,Ye,Ze,Qe,$e,et,tt,nt,rt,it,X;try{let e={alpha:!0,depth:r,stencil:i,antialias:s,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,ct,!1),t.addEventListener(`webglcontextrestored`,lt,!1),t.addEventListener(`webglcontextcreationerror`,ut,!1),G===null){let t=`webgl2`;if(G=Ie(t,e),G===null)throw Ie(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}Z()}catch(e){throw t.removeEventListener(`webglcontextlost`,ct,!1),t.removeEventListener(`webglcontextrestored`,lt,!1),t.removeEventListener(`webglcontextcreationerror`,ut,!1),R(`WebGLRenderer: `+e.message),e}function Z(){Re=new Pt(G),Re.init(),rt=new ri(G,Re),ze=new mt(G,Re,e,rt),K=new ti(G,Re),ze.reversedDepthBuffer&&h&&K.buffers.depth.setReversed(!0),H=G.createFramebuffer(),te=G.createFramebuffer(),re=G.createFramebuffer(),Ve=new Lt(G),q=new Fr,J=new ni(G,Re,K,q,ze,rt,Ve),He=new Nt(L),Ue=new ot(G),it=new ft(G,Ue),Y=new Ft(G,Ue,Ve,it),Ge=new zt(G,Y,Ue,it,Ve),et=new Rt(G,ze,J),Ze=new ht(q),Ke=new Pr(L,He,Re,ze,it,Ze),qe=new ui(L,q),Je=new zr,Ye=new Kr(Re),$e=new dt(L,He,K,Ge,_,c),Qe=new ei(L,Ge,ze),X=new di(G,Ve,ze,K),tt=new pt(G,Re,Ve),nt=new It(G,Re,Ve),Ve.programs=Ke.programs,L.capabilities=ze,L.extensions=Re,L.properties=q,L.renderLists=Je,L.shadowMap=Qe,L.state=K,L.info=Ve}b!==1009&&(I=new Vt(b,t.width,t.height,s,r,i));let st=new si(L,G);this.xr=st,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let e=Re.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Re.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(e){e!==void 0&&(ve=e,this.setSize(me,he,!1))},this.getSize=function(e){return e.set(me,he)},this.setSize=function(e,n,r=!0){st.isPresenting?U(`WebGLRenderer: Can't change size while VR device is presenting.`):(me=e,he=n,t.width=Math.floor(e*ve),t.height=Math.floor(n*ve),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(me*ve,he*ve).floor()},this.setDrawingBufferSize=function(e,n,r){me=e,he=n,ve=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(b===1009)R(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){U(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}I.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(le)},this.getViewport=function(e){return e.copy(xe)},this.setViewport=function(e,t,n,r){e.isVector4?xe.set(e.x,e.y,e.z,e.w):xe.set(e,t,n,r),K.viewport(le.copy(xe).multiplyScalar(Fe()).round())},this.getScissor=function(e){return e.copy(Se)},this.setScissor=function(e,t,n,r){e.isVector4?Se.set(e.x,e.y,e.z,e.w):Se.set(e,t,n,r),K.scissor(ue.copy(Se).multiplyScalar(Fe()).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(e){K.setScissorTest(Ce=e)},this.setOpaqueSort=function(e){ye=e},this.setTransparentSort=function(e){be=e},this.getClearColor=function(e){return e.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor(...arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(oe!==null){let t=oe.texture.format;e=x.has(t)}if(e){let e=oe.texture.type,t=S.has(e),n=$e.getClearColor(),r=$e.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(C[0]=i,C[1]=a,C[2]=o,C[3]=r,G.clearBufferuiv(G.COLOR,0,C)):(T[0]=i,T[1]=a,T[2]=o,T[3]=r,G.clearBufferiv(G.COLOR,0,T))}else r|=G.COLOR_BUFFER_BIT}t&&(r|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&G.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),V=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,ct,!1),t.removeEventListener(`webglcontextrestored`,lt,!1),t.removeEventListener(`webglcontextcreationerror`,ut,!1),$e.dispose(),Je.dispose(),Ye.dispose(),J.dispose(),q.dispose(),He.dispose(),Ge.dispose(),Y.dispose(),it.dispose(),X.dispose(),Ke.dispose(),st.dispose(),st.removeEventListener(`sessionstart`,St),st.removeEventListener(`sessionend`,Ct),wt.stop()};function ct(e){e.preventDefault(),Be(`WebGLRenderer: Context Lost.`),z=!0}function lt(){Be(`WebGLRenderer: Context Restored.`),z=!1;let e=Ve.autoReset,t=Qe.enabled,n=Qe.autoUpdate,r=Qe.needsUpdate,i=Qe.type;Z(),Ve.autoReset=e,Qe.enabled=t,Qe.autoUpdate=n,Qe.needsUpdate=r,Qe.type=i}function ut(e){R(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function gt(e){let t=e.target;t.removeEventListener(`dispose`,gt),_t(t)}function _t(e){vt(e),q.remove(e)}function vt(e){let t=q.get(e).programs;t!==void 0&&(t.forEach(function(e){Ke.releaseProgram(e)}),e.isShaderMaterial&&Ke.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ne);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Ut(e,t,n,r,i);K.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Y.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;it.setup(i,r,s,n,c);let h,g=tt;if(c!==null&&(h=Ue.get(c),g=nt,g.setIndex(h)),i.isMesh)r.wireframe===!0?(K.setLineWidth(r.wireframeLinewidth*Fe()),g.setMode(G.LINES)):g.setMode(G.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),K.setLineWidth(e*Fe()),i.isLineSegments?g.setMode(G.LINES):i.isLineLoop?g.setMode(G.LINE_LOOP):g.setMode(G.LINE_STRIP)}else i.isPoints?g.setMode(G.POINTS):i.isSprite&&g.setMode(G.TRIANGLES);if(i.isBatchedMesh){if(Re.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ue.get(c).bytesPerElement:1,o=q.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(G,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function yt(e,t,n,r){V!==null&&e.isNodeMaterial&&V.setObject(r,e),De===!0&&Ze.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,jt(e,t,r),e.side=0,e.needsUpdate=!0,jt(e,t,r),e.side=2):jt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),V!==null&&V.renderStart(e,t,n),j=Ye.get(n),j.init(t),F.push(j),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(j.pushLight(e),e.castShadow&&j.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(j.pushLight(e),e.castShadow&&j.pushShadow(e))}),j.setupLights(),V!==null&&V.updateLights(j.state.lightsArray),ke=this.localClippingEnabled,De=Ze.init(this.clippingPlanes,ke),De===!0&&Ze.setGlobalState(this.clippingPlanes,t),V!==null&&Qe.render(j.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];yt(o,n,t,e),r.add(o)}else yt(i,n,t,e),r.add(i)}}),j=F.pop(),V!==null&&V.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=q.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Re.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let bt=null;function xt(e){bt&&bt(e)}function St(){wt.stop()}function Ct(){wt.start()}let wt=new at;wt.setAnimationLoop(xt),typeof self<`u`&&wt.setContext(self),this.setAnimationLoop=function(e){bt=e,st.setAnimationLoop(e),e===null?wt.stop():wt.start()},st.addEventListener(`sessionstart`,St),st.addEventListener(`sessionend`,Ct),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){R(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(z===!0)return;V!==null&&V.renderStart(e,t);let n=st.enabled===!0&&st.isPresenting===!0,r=I!==null&&(oe===null||n)&&I.begin(L,oe);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(t),t=st.getCamera()),e.isScene===!0&&e.onBeforeRender(L,e,t,oe),j=Ye.get(e,F.length),j.init(t),j.state.textureUnits=J.getTextureUnits(),F.push(j),Ae.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?Ee.setFromArrayCamera(t):we.setFromProjectionMatrix(Ae,w,t.reversedDepth),ke=this.localClippingEnabled,De=Ze.init(this.clippingPlanes,ke),O=Je.get(e,M.length),O.init(),M.push(O),this.info.render.frame++,st.enabled===!0&&st.isPresenting===!0){let e=L.xr.getDepthSensingMesh();e!==null&&Tt(e,t,-1/0,L.sortObjects)}Tt(e,t,0,L.sortObjects),O.finish(),V!==null&&V.updateLights(j.state.lightsArray),L.sortObjects===!0&&O.sort(ye,be),Pe=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,Pe&&$e.addToRenderList(O,e),this.info.autoReset===!0&&this.info.reset(),De===!0&&Ze.beginShadows();let i=j.state.shadowsArray;if(Qe.render(i,e,t),De===!0&&Ze.endShadows(),(r&&I.hasRenderPass())===!1){let n=O.opaque,r=O.transmissive;if(j.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];Dt(n,r,e,a)}Pe&&$e.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];Et(O,e,n,n.viewport)}}else r.length>0&&Dt(n,r,e,t),Pe&&$e.render(e),Et(O,e,t)}oe!==null&&ae===0&&(J.updateMultisampleRenderTarget(oe),J.updateRenderTargetMipmap(oe)),r&&I.end(L),e.isScene===!0&&e.onAfterRender(L,e,t),it.resetDefaultState(),se=-1,ce=null,F.pop(),F.length>0?(j=F[F.length-1],J.setTextureUnits(j.state.textureUnits),De===!0&&Ze.setGlobalState(L.clippingPlanes,j.state.camera)):j=null,M.pop(),O=M.length>0?M[M.length-1]:null,V!==null&&V.renderEnd()};function Tt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)j.pushLight(e),e.castShadow&&j.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?Ee:we;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&Me.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Ae);let i=Ge.update(e),a=e.material;a.visible&&O.push(e,i,a,n,Me.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?Ee:we;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=Ge.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Me.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Me.copy(e.boundingSphere.center)),Me.applyMatrix4(e.matrixWorld).applyMatrix4(Ae)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&O.push(e,i,c,n,Me.z,s,t)}}else a.visible&&O.push(e,i,a,n,Me.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)Tt(i[e],t,n,r)}function Et(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;j.setupLightsView(n),De===!0&&Ze.setGlobalState(L.clippingPlanes,n),r&&K.viewport(le.copy(r)),i.length>0&&Ot(i,t,n),a.length>0&&Ot(a,t,n),o.length>0&&Ot(o,t,n),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function Dt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(j.state.transmissionRenderTarget[r.id]===void 0){let e=Re.has(`EXT_color_buffer_half_float`)||Re.has(`EXT_color_buffer_float`);j.state.transmissionRenderTarget[r.id]=new P(1,1,{generateMipmaps:!0,type:e?N:f,minFilter:y,samples:Math.max(4,ze.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Le.workingColorSpace})}let a=j.state.transmissionRenderTarget[r.id],o=r.viewport||le;a.setSize(o.z*L.transmissionResolutionScale,o.w*L.transmissionResolutionScale);let s=L.getRenderTarget(),c=L.getActiveCubeFace(),l=L.getActiveMipmapLevel();L.setRenderTarget(a),L.getClearColor(fe),pe=L.getClearAlpha(),pe<1&&L.setClearColor(16777215,.5),L.clear(),Pe&&$e.render(n);let u=L.toneMapping;L.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),j.setupLightsView(r),De===!0&&Ze.setGlobalState(L.clippingPlanes,r),Ot(e,n,r),J.updateMultisampleRenderTarget(a),J.updateRenderTargetMipmap(a),Re.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,kt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(J.updateMultisampleRenderTarget(a),J.updateRenderTargetMipmap(a))}L.setRenderTarget(s,c,l),L.setClearColor(fe,pe),d!==void 0&&(r.viewport=d),L.toneMapping=u}function Ot(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&kt(o,t,n,s,l,c)}}function kt(e,t,n,r,i,a){V!==null&&i.isNodeMaterial&&V.setObject(e,i),e.onBeforeRender(L,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(L,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,L.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,L.renderBufferDirect(n,t,r,i,e,a),i.side=2):L.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(L,t,n,r,i,a)}function At(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function jt(e,t,n){t.isScene!==!0&&(t=Ne);let r=q.get(e),i=j.state.lights,a=j.state.shadowsArray,o=i.state.version,s=Ke.getParameters(e,i.state,a,t,n,j.state.lightProbeGridArray),c=Ke.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=He.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,gt),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Ht(e,s),d}else s.uniforms=Ke.getUniforms(e),V!==null&&e.isNodeMaterial&&V.build(e,n,s),e.onBeforeCompile(s,L),d=Ke.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ze.uniform),Ht(e,s),r.needsLights=Gt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=At(j.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function Mt(e,t,n,r,i){let a=q.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=jt(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function Bt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Zn.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Ht(e,t){let n=q.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Ut(e,t,n,r,i){t.isScene!==!0&&(t=Ne),J.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=oe===null?L.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Le.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=He.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(h=L.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=q.get(r),y=j.state.lights;if(De===!0&&(ke===!0||e!==ce)){let t=e===ce&&r.id===se;Ze.setState(r,e,t)}let b=!1,x=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ze.numPlanes||v.numIntersection!==Ze.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===At(j.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(x=!0):b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;(b===!0||x===!0)&&(S=x===!0?Mt(r,t,i,s,h):jt(r,t,i),V&&r.isNodeMaterial&&V.onUpdateProgram(r,S,v));let C=!1,w=!1,T=!1,E=S.getUniforms(),D=v.uniforms;if(K.useProgram(S.program)&&(C=!0,w=!0,T=!0),r.id!==se&&(se=r.id,w=!0),C||ce!==e){K.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),E.setValue(G,`projectionMatrix`,e.projectionMatrix),E.setValue(G,`viewMatrix`,e.matrixWorldInverse);let t=E.map.cameraPosition;t!==void 0&&t.setValue(G,je.setFromMatrixPosition(e.matrixWorld)),ze.logarithmicDepthBuffer&&E.setValue(G,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&E.setValue(G,`isOrthographic`,e.isOrthographicCamera===!0),ce!==e&&(ce=e,w=!0,T=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&E.setValue(G,`sunShadowMap`,y.state.sunShadowMap,J),y.state.directionalShadowMap.length>0&&E.setValue(G,`directionalShadowMap`,y.state.directionalShadowMap,J),y.state.spotShadowMap.length>0&&E.setValue(G,`spotShadowMap`,y.state.spotShadowMap,J),y.state.pointShadowMap.length>0&&E.setValue(G,`pointShadowMap`,y.state.pointShadowMap,J)),i.isSkinnedMesh){E.setOptional(G,i,`bindMatrix`),E.setOptional(G,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),E.setValue(G,`boneTexture`,e.boneTexture,J))}i.isBatchedMesh&&(E.setOptional(G,i,`batchingTexture`),E.setValue(G,`batchingTexture`,i._matricesTexture,J),E.setOptional(G,i,`batchingIdTexture`),E.setValue(G,`batchingIdTexture`,i._indirectTexture,J),E.setOptional(G,i,`batchingColorTexture`),i._colorsTexture!==null&&E.setValue(G,`batchingColorTexture`,i._colorsTexture,J));let O=n.morphAttributes;if((O.position!==void 0||O.normal!==void 0||O.color!==void 0)&&et.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,E.setValue(G,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(D.envMapIntensity.value=t.environmentIntensity),D.dfgLUT!==void 0&&(D.dfgLUT.value=mi()),w){if(E.setValue(G,`toneMappingExposure`,L.toneMappingExposure),v.needsLights&&Wt(D,T),a&&r.fog===!0&&qe.refreshFogUniforms(D,a),qe.refreshMaterialUniforms(D,r,ve,he,j.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=ee,t=0;for(let n of j.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;D.probesSH.value=e.textures,D.probesMin.value=e.min,D.probesMax.value=e.max,D.probesResolution.value=e.resolution}Zn.upload(G,Bt(v),D,J)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Zn.upload(G,Bt(v),D,J),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&E.setValue(G,`center`,i.center),E.setValue(G,`modelViewMatrix`,i.modelViewMatrix),E.setValue(G,`normalMatrix`,i.normalMatrix),E.setValue(G,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];X.update(n,S),X.bind(n,S)}}return S}function Wt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Gt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ie},this.getActiveMipmapLevel=function(){return ae},this.getRenderTarget=function(){return oe},this.setRenderTargetTextures=function(e,t,n){let r=q.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),q.get(e.texture).__webglTexture=t,q.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=q.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){oe=e,ie=t,ae=n;let r=null,i=!1,a=!1;if(e){let o=q.get(e);if(o.__useDefaultFramebuffer!==void 0){K.bindFramebuffer(G.FRAMEBUFFER,o.__webglFramebuffer),le.copy(e.viewport),ue.copy(e.scissor),de=e.scissorTest,K.viewport(le),K.scissor(ue),K.setScissorTest(de),se=-1;return}if(o.__webglFramebuffer===void 0)J.setupRenderTarget(e);else if(o.__hasExternalTextures)J.rebindTextures(e,q.get(e.texture).__webglTexture,q.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&q.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);J.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=q.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&J.useMultisampledRTT(e)===!1?q.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,le.copy(e.viewport),ue.copy(e.scissor),de=e.scissorTest}else le.copy(xe).multiplyScalar(ve).floor(),ue.copy(Se).multiplyScalar(ve).floor(),de=Ce;if(n!==0&&(r=H),K.bindFramebuffer(G.FRAMEBUFFER,r)&&K.drawBuffers(e,r),K.viewport(le),K.scissor(ue),K.setScissorTest(de),i){let r=q.get(e.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=q.get(e.textures[t]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=q.get(e.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,t.__webglTexture,n)}se=-1};function Kt(e){let t=q.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=ze.textureFormatReadable(e.format),t.__typeReadable=ze.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=q.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){K.bindFramebuffer(G.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+s);let u=Kt(o);if(u.__formatReadable===!1){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&G.readPixels(t,n,r,i,rt.convert(c),rt.convert(l),a)}finally{let e=oe===null?null:q.get(oe).__webglFramebuffer;K.bindFramebuffer(G.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=q.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){K.bindFramebuffer(G.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+s);let d=Kt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,f),G.bufferData(G.PIXEL_PACK_BUFFER,a.byteLength,G.STREAM_READ),G.readPixels(t,n,r,i,rt.convert(l),rt.convert(u),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);let p=oe===null?null:q.get(oe).__webglFramebuffer;K.bindFramebuffer(G.FRAMEBUFFER,p);let m=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await ne(G,m,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,f),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,a),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(f),G.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;J.setTexture2D(e,0),G.copyTexSubImage2D(G.TEXTURE_2D,n,0,0,o,s,i,a),K.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=rt.convert(t.format),_=rt.convert(t.type),v;t.isData3DTexture?(J.setTexture3D(t,0),v=G.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(J.setTexture2DArray(t,0),v=G.TEXTURE_2D_ARRAY):(J.setTexture2D(t,0),v=G.TEXTURE_2D),K.activeTexture(G.TEXTURE0),K.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,t.flipY),K.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),K.pixelStorei(G.UNPACK_ALIGNMENT,t.unpackAlignment);let y=K.getParameter(G.UNPACK_ROW_LENGTH),b=K.getParameter(G.UNPACK_IMAGE_HEIGHT),x=K.getParameter(G.UNPACK_SKIP_PIXELS),S=K.getParameter(G.UNPACK_SKIP_ROWS),C=K.getParameter(G.UNPACK_SKIP_IMAGES);K.pixelStorei(G.UNPACK_ROW_LENGTH,h.width),K.pixelStorei(G.UNPACK_IMAGE_HEIGHT,h.height),K.pixelStorei(G.UNPACK_SKIP_PIXELS,l),K.pixelStorei(G.UNPACK_SKIP_ROWS,u),K.pixelStorei(G.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=q.get(e),r=q.get(t),h=q.get(n.__renderTarget),g=q.get(r.__renderTarget);K.bindFramebuffer(G.READ_FRAMEBUFFER,h.__webglFramebuffer),K.bindFramebuffer(G.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,q.get(e).__webglTexture,i,d+n),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,q.get(t).__webglTexture,a,m+n)),G.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,G.DEPTH_BUFFER_BIT,G.NEAREST);K.bindFramebuffer(G.READ_FRAMEBUFFER,null),K.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||q.has(e)){let n=q.get(e),r=q.get(t);K.bindFramebuffer(G.READ_FRAMEBUFFER,te),K.bindFramebuffer(G.DRAW_FRAMEBUFFER,re);for(let e=0;e<c;e++)w?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,n.__webglTexture,i),T?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,r.__webglTexture,a),i===0?T?G.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):G.copyTexSubImage2D(v,a,f,p,l,u,o,s):G.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,G.COLOR_BUFFER_BIT,G.NEAREST);K.bindFramebuffer(G.READ_FRAMEBUFFER,null),K.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?G.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?G.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):G.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):G.texSubImage2D(G.TEXTURE_2D,a,f,p,o,s,g,_,h);K.pixelStorei(G.UNPACK_ROW_LENGTH,y),K.pixelStorei(G.UNPACK_IMAGE_HEIGHT,b),K.pixelStorei(G.UNPACK_SKIP_PIXELS,x),K.pixelStorei(G.UNPACK_SKIP_ROWS,S),K.pixelStorei(G.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&G.generateMipmap(v),K.unbindTexture()},this.initRenderTarget=function(e){q.get(e).__webglFramebuffer===void 0&&J.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?J.setTextureCube(e,0):e.isData3DTexture?J.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?J.setTexture2DArray(e,0):J.setTexture2D(e,0),K.unbindTexture()},this.resetState=function(){ie=0,ae=0,oe=null,K.reset(),it.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return w}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Le._getDrawingBufferColorSpace(e),t.unpackColorSpace=Le._getUnpackColorSpace()}},gi=`zoveer-gp.v1`,_i=`zoveer-gp.ghosts.v1`,vi=e=>JSON.parse(JSON.stringify(e)),yi={profile:{name:`ZOVEER`,livery:`bull`,number:11},settings:{assistSteer:!0,assistBrake:!1,racingLine:!0,autoShift:!0,volMaster:.9,volMusic:.6,voice:!0,quality:`auto`,camera:`chase`,steerRange:.5,deadzone:.04},progress:{stars:{},finaleUnlocked:!1,finaleSeen:!1,lanterns:[],trophies:{},laps:0,aura:0,sixSeven:!1},records:{},ghosts:{},calib:{}};function bi(){try{let e=localStorage.getItem(gi),t=vi(yi);try{t.ghosts=JSON.parse(localStorage.getItem(_i)||`{}`)}catch{}if(!e)return t;let n=JSON.parse(e);for(let e of Object.keys(t))e!==`ghosts`&&n[e]&&typeof n[e]==`object`&&(t[e]=Array.isArray(t[e])?n[e]:{...t[e],...n[e]});return t}catch{return vi(yi)}}var Q={data:bi(),save(){try{let{ghosts:e,...t}=this.data;localStorage.setItem(gi,JSON.stringify(t))}catch{}},saveGhosts(){try{localStorage.setItem(_i,JSON.stringify(this.data.ghosts))}catch{}},addRecord(e,t,n=10){let r=this.data.records[e]||=[];return r.push(t),r.sort((e,t)=>e.time-t.time),r.length=Math.min(r.length,n),this.save(),r.indexOf(t)},best(e){let t=this.data.records[e];return t&&t.length?t[0].time:null}},xi={bangkok:{id:`bangkok`,kind:`f1`,name:`Bangkok Night Street Circuit`,short:`BANGKOK`,halfWidth:8,runoff:3,laps:3,startS:100,targets:[{s:250,type:`hoop`,side:-1},{s:420,type:`goal`,side:1},{s:560,type:`hoop`,side:-1},{s:1300,type:`hoop`,side:1},{s:1480,type:`goal`,side:-1},{s:1650,type:`hoop`,side:1}],lanterns:[[170,3],[330,-4],[505,4.5],[760,0],[980,-3],[1190,5],[1390,0],[1570,-5],[1900,2],[2150,-3],[2380,4]],points:[[-200,0],[0,0],[250,0],[440,0],[520,22],[552,84],[528,150],[540,222],[598,282],[596,352],[530,398],[420,412],[250,404],[80,410],[-70,420],[-158,398],[-196,342],[-168,292],[-212,240],[-196,184],[-252,134],[-330,112],[-386,64],[-372,14],[-312,-2]],zones:{riverside:[0,.17],oldTown:[.17,.42],skytrain:[.42,.62],chinatown:[.62,.86],finalSweep:[.86,1]}},rooftop:{id:`rooftop`,kind:`kart`,name:`Sky Kart Rooftop`,short:`ROOFTOP`,halfWidth:4.5,runoff:1.2,laps:3,startS:12,targets:[{s:52,type:`hoop`,side:1},{s:345,type:`goal`,side:1}],lanterns:[],points:[[-40,-32],[10,-32],[44,-28],[58,-12],[52,6],[30,8],[14,0],[0,6],[-2,20],[14,30],[44,30],[58,40],[50,56],[20,58],[-20,56],[-46,46],[-52,28],[-43,12],[-50,-4],[-58,-22]],zones:{}}},Si=9.81;function Ci(e,t,n,r,i){let a=(e,t)=>Math.hypot(t[0]-e[0],t[1]-e[1])**.5||1e-4,o=0+a(e,t),s=o+a(t,n),c=s+a(n,r),l=o+(s-o)*i,u=(e,t,n,r)=>{let i=(l-n)/(r-n);return[e[0]+(t[0]-e[0])*i,e[1]+(t[1]-e[1])*i]},d=u(e,t,0,o),f=u(t,n,o,s),p=u(n,r,s,c);return u(u(d,f,0,s),u(f,p,o,c),o,s)}function wi(e,t=40){let n=e.length,r=[];for(let i=0;i<n;i++){let a=e[(i-1+n)%n],o=e[i],s=e[(i+1)%n],c=e[(i+2)%n];for(let e=0;e<t;e++)r.push(Ci(a,o,s,c,e/t))}return r}function Ti(e,t){let n=e.length,r=[0];for(let t=1;t<=n;t++){let i=e[t-1],a=e[t%n];r.push(r[t-1]+Math.hypot(a[0]-i[0],a[1]-i[1]))}let i=r[n],a=Math.round(i/t),o=i/a,s=[],c=0;for(let t=0;t<a;t++){let i=t*o;for(;r[c+1]<i;)c++;let a=e[c],l=e[(c+1)%n],u=(i-r[c])/(r[c+1]-r[c]||1);s.push([a[0]+(l[0]-a[0])*u,a[1]+(l[1]-a[1])*u])}return{pts:s,length:i,step:o}}function Ei(e,t){return(e%t+t)%t}function Di(e,t){let n=e-t;for(;n>Math.PI;)n-=2*Math.PI;for(;n<-Math.PI;)n+=2*Math.PI;return n}function Oi(e,t,n=3){let r=e.length,i=new Float32Array(r);for(let a=0;a<r;a++){let o=e[Ei(a-n,r)],s=e[a],c=e[Ei(a+n,r)],l=Math.atan2(s[0]-o[0],s[1]-o[1]),u=Math.atan2(c[0]-s[0],c[1]-s[1]);i[a]=Di(u,l)/(n*t)}return i}function ki(e,t=2){let{pts:n,length:r,step:i}=Ti(wi(e.points),t),a=n.length,o=Array(a);for(let e=0;e<a;e++){let t=n[Ei(e-1,a)],r=n[Ei(e+1,a)],s=r[0]-t[0],c=r[1]-t[1],l=Math.hypot(s,c)||1;s/=l,c/=l,o[e]={i:e,s:e*i,x:n[e][0],z:n[e][1],tx:s,tz:c,nx:c,nz:-s,heading:Math.atan2(s,c),k:0}}let s=Oi(n,i,4);for(let e=0;e<a;e++)o[e].k=s[e];let c={def:e,id:e.id,kind:e.kind,name:e.name,halfWidth:e.halfWidth,runoff:e.runoff,wallOffset:e.halfWidth+e.runoff,length:r,step:i,samples:o,n:a};return c.line=Ai(c),c}function Ai(e,t=1.6){let{samples:n,n:r,halfWidth:i}=e,a=i-t,o=new Float32Array(r),s=Math.max(2,Math.round(6/e.step));for(let e=0;e<1400;e++)for(let e=0;e<r;e++){let t=n[Ei(e-s,r)],i=n[Ei(e+s,r)],c=n[e],l=t.x+t.nx*o[Ei(e-s,r)],u=t.z+t.nz*o[Ei(e-s,r)],d=i.x+i.nx*o[Ei(e+s,r)],f=i.z+i.nz*o[Ei(e+s,r)],p=(l+d)/2-c.x,m=(u+f)/2-c.z,h=p*c.nx+m*c.nz;o[e]+=(Math.max(-a,Math.min(a,h))-o[e])*.5}let c=n.map((e,t)=>[e.x+e.nx*o[t],e.z+e.nz*o[t]]);return{offset:o,k:Oi(c,e.step,5),pts:c}}function ji(e,t){let{n,step:r}=e,i=e.line.k,a=new Float32Array(n);for(let e=0;e<n;e++){let n=Math.abs(i[e])+1e-6-t.mu*t.downforce;a[e]=n<=0?t.vmax:Math.min(t.vmax,Math.sqrt(t.mu*Si/n))}for(let e=0;e<3;e++){for(let e=2*n;e>0;e--){let o=Ei(e,n),s=Ei(e+1,n),c=a[s]*a[s]*Math.abs(i[o]),l=t.brake*(Si+t.downforce*a[s]*a[s]),u=Math.sqrt(Math.max(0,l*l-c*c*.25));a[o]=Math.min(a[o],Math.sqrt(a[s]*a[s]+2*u*r))}for(let e=0;e<2*n;e++){let i=Ei(e,n),o=Ei(e+1,n);a[o]=Math.min(a[o],Math.sqrt(a[i]*a[i]+2*t.accel(a[i])*r))}}return a}function Mi(e,t,n,r=-1,i=40){let{samples:a,n:o}=e,s=-1,c=1/0;if(r>=0)for(let e=-i;e<=i;e++){let i=a[Ei(r+e,o)],l=(i.x-t)**2+(i.z-n)**2;l<c&&(c=l,s=i.i)}if(s<0||c>900)for(let e=0;e<o;e++){let r=a[e],i=(r.x-t)**2+(r.z-n)**2;i<c&&(c=i,s=e)}let l=a[s],u=(t-l.x)*l.tx+(n-l.z)*l.tz,d=(t-l.x)*l.nx+(n-l.z)*l.nz,f=l.s+u;return f<0&&(f+=e.length),f>=e.length&&(f-=e.length),{i:s,s:f,d}}function Ni(e,t){let{samples:n,n:r,step:i}=e;t=(t%e.length+e.length)%e.length;let a=t/i,o=Math.floor(a)%r,s=(o+1)%r,c=a-Math.floor(a),l=n[o],u=n[s],d=l.tx+(u.tx-l.tx)*c,f=l.tz+(u.tz-l.tz)*c,p=Math.hypot(d,f)||1;return d/=p,f/=p,{s:t,i:o,x:l.x+(u.x-l.x)*c,z:l.z+(u.z-l.z)*c,tx:d,tz:f,nx:f,nz:-d,heading:Math.atan2(d,f),k:l.k+(u.k-l.k)*c,line:e.line.offset[o]+(e.line.offset[s]-e.line.offset[o])*c}}function Pi(e,t){return(t%e.length+e.length)%e.length}function Fi(e,t,n){let r=n-t,i=e.length;return r>i/2&&(r-=i),r<=-i/2&&(r+=i),r}function Ii(e,t){let n=document.createElement(`canvas`);return n.width=e,n.height=t,[n,n.getContext(`2d`)]}function Li(e,t,n,r,i,a=1){let o=e.createImageData(t,n),s=a*9301+49297,c=()=>(s=(s*9301+49297)%233280)/233280;for(let e=0;e<t*n;e++){let t=r+(c()-.5)*i+(c()<.02?30:0);o.data[e*4]=o.data[e*4+1]=o.data[e*4+2]=Math.max(0,Math.min(255,t)),o.data[e*4+3]=255}e.putImageData(o,0,0)}function Ri(e,t){let n=1024,[r,i]=Ii(512,n);Li(i,512,n,t?70:62,34);for(let e=0;e<60;e++)i.fillStyle=`rgba(${Math.random()<.5?`0,0,0`:`255,255,255`},${.03+Math.random()*.04})`,i.beginPath(),i.ellipse(Math.random()*512,Math.random()*n,20+Math.random()*90,20+Math.random()*160,Math.random()*3,0,Math.PI*2),i.fill();let a=e.wallOffset*2,o=t=>(t+e.wallOffset)/a*512;i.fillStyle=`rgba(40,46,60,0.35)`,i.fillRect(0,0,o(-e.halfWidth),n),i.fillRect(o(e.halfWidth),0,512-o(e.halfWidth),n),i.fillStyle=`rgba(235,235,230,0.92)`;let s=.24/a*512;i.fillRect(o(-e.halfWidth)-s/2,0,s,n),i.fillRect(o(e.halfWidth)-s/2,0,s,n);let c=new J(r);c.colorSpace=_e,c.wrapS=me,c.wrapT=ce,c.anisotropy=8;let[l,u]=Ii(256,256);Li(u,256,256,128,120,7);let d=u.getImageData(0,0,256,256).data,f=u.createImageData(256,256),p=(e,t)=>d[((t+256)%256*256+(e+256)%256)*4]/255;for(let e=0;e<256;e++)for(let t=0;t<256;t++){let n=(p(t+1,e)-p(t-1,e))*1.2,r=(p(t,e+1)-p(t,e-1))*1.2,i=Math.hypot(n,r,1),a=(e*256+t)*4;f.data[a]=(-n/i*.5+.5)*255,f.data[a+1]=(-r/i*.5+.5)*255,f.data[a+2]=(1/i*.5+.5)*255,f.data[a+3]=255}u.putImageData(f,0,0);let m=new J(l);return m.wrapS=m.wrapT=ce,m.repeat.set(6,6),{map:c,normalMap:m}}function zi(e){let t=e?[`ZOVEER KART CLUB`,`#11`,`SIUUU`,`RACING IS LIFE`,`NOICE.`,`OBRA`,`HAPPY 11TH ZOVEER`,`SKY KART BANGKOK`]:[`ZOVEER GP`,`สุขสันต์วันเกิด`,`SIUUU`,`RACING IS LIFE`,`#11`,`OBRA`,`HAPPY 11TH ZOVEER`,`THE GRIND NEVER STOPS`,`NOICE.`,`BANGKOK GRAND PRIX`,`ZOVEER RACING`,`BINGPOT!`],n=[[`#14224f`,`#ffc61a`],[`#d81e2c`,`#ffffff`],[`#0d0d12`,`#ffc61a`],[`#f2f2f2`,`#14224f`],[`#ffc61a`,`#14224f`],[`#14224f`,`#ffffff`]],[r,i]=Ii(512*t.length,64);t.forEach((e,t)=>{let[r,a]=n[t%n.length];i.fillStyle=r,i.fillRect(t*512,0,512,64),i.fillStyle=`rgba(255,255,255,0.08)`,i.fillRect(t*512,0,512,6),i.fillStyle=`rgba(0,0,0,0.25)`,i.fillRect(t*512,56,512,8),i.fillStyle=a;let o=/[฀-๿]/.test(e);i.font=`${o?`700 34px "Noto Sans Thai", "Leelawadee UI", Tahoma`:`italic 900 36px "Arial Black", Arial`}, sans-serif`,i.textAlign=`center`,i.textBaseline=`middle`,i.fillText(e,t*512+256,34,472)});let a=new J(r);return a.colorSpace=_e,a.wrapS=ce,a.anisotropy=8,{tex:a,count:t.length}}function Bi(){let[e,t]=Ii(128,128);t.clearRect(0,0,128,128),t.strokeStyle=`rgba(190,200,210,1)`,t.lineWidth=3;for(let e=-128;e<256;e+=16)t.beginPath(),t.moveTo(e,0),t.lineTo(e+128,128),t.stroke(),t.beginPath(),t.moveTo(e+128,0),t.lineTo(e,128),t.stroke();t.fillStyle=`rgba(120,128,136,1)`,t.fillRect(0,0,128,6);let n=new J(e);return n.wrapS=n.wrapT=ce,n.colorSpace=_e,n}function Vi(){let[e,t]=Ii(64,128);t.fillStyle=`#e8e8e8`,t.fillRect(0,0,64,64),t.fillStyle=`#c8102e`,t.fillRect(0,64,64,64),t.fillStyle=`rgba(0,0,0,0.25)`,t.fillRect(0,0,6,128);let n=new J(e);return n.wrapS=n.wrapT=ce,n.colorSpace=_e,n}function Hi(e,t,n){return e.some(e=>e.side===n&&t>e.s0&&t<e.s1)}function Ui(e,t,n={}){let r=new C;r.name=`trackMesh`;let i=e.kind===`kart`,{samples:a,n:o}=e,s=e.halfWidth,c=e.wallOffset,l=n.gaps||[],u=[-c,-s-.6,-s,-s*.6,-s*.3,0,s*.3,s*.6,s,s+.6,c],d=u.length,f=new Float32Array((o+1)*d*3),p=new Float32Array((o+1)*d*2),m=new Float32Array((o+1)*d*3);for(let t=0;t<=o;t++){let n=a[t%o],r=t*e.step,s=i?.85+.15*Math.cos(2*Math.PI*r/24):.58+.42*(.5+.5*Math.cos(2*Math.PI*r/36))**1.5,l=e.line.offset[t%o];for(let e=0;e<d;e++){let i=u[e],a=t*d+e;f[a*3]=n.x+n.nx*i,f[a*3+1]=0,f[a*3+2]=n.z+n.nz*i,p[a*2]=(i+c)/(2*c),p[a*2+1]=r/16;let o=s*(1-.28*Math.exp(-(((i-l)/1.6)**2)));m[a*3]=o*.98,m[a*3+1]=o,m[a*3+2]=o*1.04}}let h=[];for(let e=0;e<o;e++)for(let t=0;t<d-1;t++){let n=e*d+t,r=n+1,i=n+d,a=i+1;h.push(n,i,r,r,i,a)}let g=new se;g.setAttribute(`position`,new we(f,3)),g.setAttribute(`uv`,new we(p,2)),g.setAttribute(`color`,new we(m,3)),g.setIndex(h),g.computeVertexNormals();let{map:_,normalMap:v}=Ri(e,i),y=new Y(g,new Ie({map:_,normalMap:v,normalScale:new j(.6,.6),vertexColors:!0,roughness:i?.75:.62,metalness:0,envMapIntensity:.6}));if(y.receiveShadow=!0,y.name=`road`,r.add(y),!i){let e=new Y(new Ce(4e3,4e3),new Ie({color:1382172,roughness:.95}));e.rotation.x=-Math.PI/2,e.position.y=-.03,e.receiveShadow=!1,r.add(e)}let b=Vi(),x=[],S=[],w=[];for(let t of[1,-1]){let n=[],r=()=>{if(n.length<4){n=[];return}let r=x.length/3;for(let r of n){let n=a[r%o];for(let[i,a,o]of[[s-.15,.005,0],[s+.9,.07,.6],[s+1.25,.005,1]])x.push(n.x+n.nx*i*t,a,n.z+n.nz*i*t),S.push(o,r*e.step/2)}for(let e=0;e<n.length-1;e++)for(let n=0;n<2;n++){let i=r+e*3+n,a=i+1,o=i+3,s=o+1;t>0?w.push(i,o,a,a,o,s):w.push(i,a,o,a,s,o)}n=[]};for(let c=0;c<=o+1;c++){let l=a[c%o].k,u=e.line.offset[c%o],d=Math.abs(l)>(i?1/40:1/260),f=Math.abs(u)>s-3.2&&Math.sign(u)===t;d&&f?n.push(c):r()}r()}if(x.length){let e=new se;e.setAttribute(`position`,new De(x,3)),e.setAttribute(`uv`,new De(S,2)),e.setIndex(w),e.computeVertexNormals();let t=new Y(e,new Ie({map:b,roughness:.55,polygonOffset:!0,polygonOffsetFactor:-2}));t.receiveShadow=!0,r.add(t)}let T=i?.9:1.15,E=i?1.6:2.6,ee=i?6:9,{tex:D,count:O}=zi(i),k=[],A=[],M=[],N=[],P=[],F=[],I=[],L=[];for(let t of[1,-1]){let n=null;for(let r=0;r<=o;r++){let i=a[r%o],s=r*e.step;if(Hi(l,s,t)){n=null;continue}let u={ix:i.x+i.nx*c*t,iz:i.z+i.nz*c*t,ox:i.x+i.nx*(c+.45)*t,oz:i.z+i.nz*(c+.45)*t,u:(t>0?s:-s)/(ee*O)};if(n){let r=k.length/3;k.push(n.ix,0,n.iz,n.ix,T,n.iz,u.ix,0,u.iz,u.ix,T,u.iz),A.push(n.u,0,n.u,1,u.u,0,u.u,1),t>0?M.push(r,r+2,r+1,r+1,r+2,r+3):M.push(r,r+1,r+2,r+1,r+3,r+2);let i=N.length/3;N.push(n.ix,T,n.iz,n.ox,T,n.oz,u.ix,T,u.iz,u.ox,T,u.oz),t>0?P.push(i,i+2,i+1,i+1,i+2,i+3):P.push(i,i+1,i+2,i+1,i+3,i+2);let a=F.length/3,o=n.ix+(n.ox-n.ix)*.5,c=n.iz+(n.oz-n.iz)*.5,l=u.ix+(u.ox-u.ix)*.5,d=u.iz+(u.oz-u.iz)*.5;F.push(o,T,c,o,T+E,c,l,T,d,l,T+E,d),I.push(s/1.2-e.step/1.2,0,s/1.2-e.step/1.2,E/1.2,s/1.2,0,s/1.2,E/1.2),L.push(a,a+2,a+1,a+1,a+2,a+3)}n=u}}let R=(e,t,n)=>{let r=new se;return r.setAttribute(`position`,new De(e,3)),t&&r.setAttribute(`uv`,new De(t,2)),r.setIndex(n),r.computeVertexNormals(),r},B=new Ie({map:D,roughness:.6,emissive:16777215,emissiveMap:D,emissiveIntensity:.18});r.add(new Y(R(k,A,M),B)),r.add(new Y(R(N,null,P),new Ie({color:9080726,roughness:.85})));let V=new Y(R(F,I,L),new Ie({map:Bi(),alphaTest:.45,side:2,metalness:.6,roughness:.5}));r.add(V);let H=new Ke(.05,.05,E,6);H.translate(0,T+E/2,0);let U=Math.max(1,Math.round(4/e.step)),te=[];for(let t of[1,-1])for(let n=0;n<o;n+=U){if(Hi(l,n*e.step,t))continue;let r=a[n];te.push([r.x+r.nx*(c+.22)*t,r.z+r.nz*(c+.22)*t])}let ne=new z(H,new Ie({color:10134445,metalness:.7,roughness:.4}),te.length),re=new ge;te.forEach(([e,t],n)=>ne.setMatrixAt(n,re.makeTranslation(e,0,t))),r.add(ne);let ie=e.def.startS||0,ae=(t,n,i,a,o,s=0)=>{let[c,l]=Ii(256,Math.round(256*n/t));i(l,c.width,c.height);let u=new J(c);u.colorSpace=_e;let d=new Y(new Ce(t,n),new Ie({map:u,transparent:!0,roughness:.7,polygonOffset:!0,polygonOffsetFactor:-4,depthWrite:!1})),f=Ni(e,a);return d.rotation.order=`YXZ`,d.rotation.set(-Math.PI/2,f.heading+s,0),d.position.set(f.x+f.nx*o,.012,f.z+f.nz*o),d.receiveShadow=!0,r.add(d),d};ae(s*2,1.4,(e,t,n)=>{let r=n/2;for(let n=0;n<t/r;n++)for(let t=0;t<2;t++)e.fillStyle=(n+t)%2?`#111`:`#f4f4f4`,e.fillRect(n*r,t*r,r,r)},ie,0);let oe=i?4.5:8,ce=i?1.6:3.2,le=[];for(let e=0;e<8;e++){let t=ie-6-e*oe,n=e%2==0?ce:-ce;le.push({s:t,d:n}),ae(i?2.2:3.4,i?1.4:2.2,(t,n,r)=>{t.strokeStyle=`#f2f2f2`,t.lineWidth=10,t.beginPath(),t.moveTo(8,r-8),t.lineTo(8,8),t.lineTo(n-8,8),t.lineTo(n-8,r-8),t.stroke(),t.fillStyle=`rgba(242,242,242,0.9)`,t.font=`900 ${Math.round(r*.45)}px Arial`,t.textAlign=`center`,t.fillText(String(e+1),n/2,r*.75)},t,n,Math.PI)}let ue=[],de=[],fe=[],pe=Math.round(60/e.step);for(let n=0;n<=o;n++){let r=a[n%o],i=e.line.offset[n%o],s=t[n%o],c=t[(n+Math.round(pe/3))%o],l=c<s-2.5,u=!l&&c<s-.6,d=l?[1,.12,.12]:u?[1,.8,.1]:[.1,1,.45];for(let e of[-.3,.3])ue.push(r.x+r.nx*(i+e),.02,r.z+r.nz*(i+e)),de.push(...d);if(n<o){let e=n*2;fe.push(e,e+2,e+1,e+1,e+2,e+3)}}let me=new se;me.setAttribute(`position`,new De(ue,3)),me.setAttribute(`color`,new De(de,3)),me.setIndex(fe);let he=new Y(me,new Fe({vertexColors:!0,transparent:!0,opacity:.24,depthWrite:!1,side:2,polygonOffset:!0,polygonOffsetFactor:-3}));return he.name=`racingLine`,r.add(he),{group:r,racingLine:he,grid:le,startS:ie}}var Wi={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},Gi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},Ki=new ve(-1,1,1,-1,0,1),qi=new class extends se{constructor(){super(),this.setAttribute(`position`,new De([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new De([0,2,0,0,2,0],2))}},Ji=class{constructor(e){this._mesh=new Y(qi,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Ki)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},Yi=class extends Gi{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Se?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=L.clone(e.uniforms),this.material=new Se({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ji(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Xi=class extends Gi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},Zi=class extends Gi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},Qi=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new j);this._width=n.width,this._height=n.height,t=new P(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:N}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Yi(Wi),this.copyPass.material.blending=0,this.timer=new de}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}Xi!==void 0&&(r instanceof Xi?n=!0:r instanceof Zi&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new j);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},$i=class extends Gi{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new W}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},ea={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new W(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},ta=class e extends Gi{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new j(256,256):new j(e.x,e.y),this.clearColor=new W(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new P(i,a,{type:N,depthBuffer:!1}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new P(i,a,{type:N,depthBuffer:!1});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new P(i,a,{type:N,depthBuffer:!1});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=ea;this.highPassUniforms=L.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Se({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[6,10,14,18,22];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new j(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new m(1,1,1),new m(1,1,1),new m(1,1,1),new m(1,1,1),new m(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=L.clone(Wi.uniforms),this.blendMaterial=new Se({uniforms:this.copyUniforms,vertexShader:Wi.vertexShader,fragmentShader:Wi.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new W,this._oldClearAlpha=1,this._basic=new Fe,this._fsQuad=new Ji(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new j(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let r=[],i=[];for(let n=1;n<e;n+=2){let a=t[n],o=n+1<e?t[n+1]:0,s=a+o;r.push((n*a+(n+1)*o)/s),i.push(s)}return new Se({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new j(.5,.5)},direction:{value:new j(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:i}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Se({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};ta.BlurDirectionX=new j(1,0),ta.BlurDirectionY=new j(0,1);var na={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},ra=class extends Gi{constructor(){super(),this.isOutputPass=!0,this.uniforms=L.clone(na.uniforms),this.material=new Pe({name:na.name,uniforms:this.uniforms,vertexShader:na.vertexShader,fragmentShader:na.fragmentShader}),this._fsQuad=new Ji(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Le.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};function ia(e){let t=new je,n=new Y(new qe(50,32,16),new Se({side:1,uniforms:{},vertexShader:`varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,fragmentShader:`varying vec3 vP; void main(){ float h = normalize(vP).y; vec3 top = vec3(0.02,0.03,0.07); vec3 hor = vec3(0.22,0.14,0.16); vec3 gnd = vec3(0.03,0.03,0.035); vec3 c = h > 0.0 ? mix(hor, top, pow(h, 0.5)) : mix(hor*0.5, gnd, pow(-h,0.4)); gl_FragColor = vec4(c,1.0); }`}));t.add(n);let r=(e,n,r,i,a,o,s)=>{let c=new Y(new Ce(e,n),new Fe({color:new W(r).multiplyScalar(i),side:2}));c.position.set(a,o,s),c.lookAt(0,0,0),t.add(c)};for(let e=0;e<6;e++)r(30,2.2,16773590,6,Math.cos(e)*18,22+e%2*3,Math.sin(e*1.7)*18);let i=[16723322,58879,16757504,8146431,16726832,65436];for(let e=0;e<40;e++){let t=e/40*Math.PI*2+Math.random()*.2,n=30+Math.random()*12;r(2+Math.random()*6,.6+Math.random()*3,i[e%i.length],1.5+Math.random()*3,Math.cos(t)*n,2+Math.random()*14,Math.sin(t)*n)}let a=new Tt(e),o=a.fromScene(t,.02).texture;return a.dispose(),o}function aa(e,t){let n=new hi({antialias:!1,powerPreference:`high-performance`,stencil:!1});n.outputColorSpace=_e,n.toneMapping=4,n.toneMappingExposure=1,n.shadowMap.enabled=!0,n.shadowMap.type=1,e.appendChild(n.domElement),Object.assign(n.domElement.style,{position:`fixed`,inset:`0`,width:`100%`,height:`100%`,display:`block`});let r=ia(n),i=1,a,o,s,c;function l(){let e=t();return e===`auto`?/Mobi|Android|iPhone|iPad|SMART-TV|Tizen|Web0S|CrKey/i.test(navigator.userAgent)||(navigator.hardwareConcurrency||4)<=4?`low`:`high`:e}function u(){let e=l(),t=Math.min(window.devicePixelRatio||1,e===`high`?1.5:1),r=innerWidth,u=innerHeight;n.setPixelRatio(t*i),n.setSize(r,u,!1),a?.dispose(),c?.dispose(),c=new P(Math.floor(r*t*i),Math.floor(u*t*i),{type:N,samples:e===`high`?4:0}),a=new Qi(n,c),a.setPixelRatio(t*i),a.setSize(r,u),s=new $i(null,null),a.addPass(s),o=new ta(new j(r/2,u/2),.7,.55,.85),o.enabled=e!==`off`,a.addPass(o),a.addPass(new ra),n.shadowMap.enabled=e===`high`}u(),addEventListener(`resize`,u);let d=0,f=0;function p(e){if(d+=e,f++,d<2)return;let t=d/f;d=0,f=0,t>1/45&&i>.6?(i=Math.max(.6,i-.1),u()):t<1/58&&i<1&&(i=Math.min(1,i+.05),u())}function m(e,t,r){if(s.scene=e,s.camera=t,a.render(),r&&r.active){let t=innerWidth,i=innerHeight,a=Math.round(Math.min(t*.3,520)),o=Math.round(a*.5625),s=t-a-Math.round(t*.03),c=Math.round(i*.2);r.camera.aspect=a/o,r.camera.updateProjectionMatrix(),n.setScissorTest(!0),n.setScissor(s,c,a,o),n.setViewport(s,c,a,o),n.autoClear=!0,n.render(e,r.camera),n.setScissorTest(!1),n.setViewport(0,0,t,i),r.rect={x:s,y:i-c-o,w:a,h:o}}}return{renderer:n,env:r,render:m,adapt:p,rebuild:u,quality:l,get bloom(){return o},screenshot(e,t){return m(e,t),n.domElement.toDataURL(`image/png`)}}}function oa(e){let t=new nt(3820154,1709072,.6);e.add(t);let n=new I(16773340,2.2);n.position.set(30,60,20),n.castShadow=!0,n.shadow.mapSize.set(2048,2048);let r=n.shadow.camera;return r.left=-22,r.right=22,r.top=22,r.bottom=-22,r.near=1,r.far=160,n.shadow.bias=-4e-4,n.shadow.normalBias=.03,e.add(n,n.target),{hemi:t,sun:n,follow(e,t){n.position.set(e+25,60,t+18),n.target.position.set(e,0,t)}}}var sa=new m,ca=new m,la=new m;function ua(e){let t={mode:`chase`,yaw:0,pos:new m(0,5,-10),look:new m,shake:0,orbitA:0,fovKick:0,photo:{a:.6,e:.25,r:8}};function n(n,r,i,a){let o=a?3.6:7.2,s=a?1.45:2.35,c=n.h-t.yaw;for(;c>Math.PI;)c-=2*Math.PI;for(;c<-Math.PI;)c+=2*Math.PI;t.yaw+=c*Math.min(1,i*(a?7:5.5));let l=Math.sin(t.yaw),u=Math.cos(t.yaw);sa.set(n.x-l*o,s,n.z-u*o),t.pos.lerp(sa,Math.min(1,i*14)),e.position.copy(t.pos),ca.set(n.x+Math.sin(n.h)*(a?2.5:5),a?.55:.95,n.z+Math.cos(n.h)*(a?2.5:5)),e.lookAt(ca)}function r(t,n,r){let i=t?.cameraMounts?.[n];i?(i.getWorldPosition(e.position),i.getWorldQuaternion(e.quaternion)):(t.root.localToWorld(e.position.copy(r)),t.root.getWorldQuaternion(e.quaternion),e.rotateY(Math.PI))}return{state:t,camera:e,set mode(e){t.mode=e},get mode(){return t.mode},snapTo(e){t.yaw=e.h,t.pos.set(e.x-Math.sin(e.h)*7,2.3,e.z-Math.cos(e.h)*7)},bump(e){t.shake=Math.min(1.2,t.shake+e)},race(i,a,o,s){let c=i.type===`kart`;t.mode===`tcam`?r(a,`tcam`,la.set(0,c?1.15:1.22,c?-.35:-.55)):t.mode===`cockpit`?r(a,`cockpit`,la.set(0,c?1:.86,c?-.25:-.45)):n(i,a,o,c);let l=Math.min(1,i.speed/(c?26:90));t.fovKick+=((s.boost?7:0)-t.fovKick)*Math.min(1,o*4);let u=(t.mode===`chase`?58:66)+l*(c?10:15)+t.fovKick;Math.abs(e.fov-u)>.01&&(e.fov=u,e.updateProjectionMatrix()),t.shake=Math.max(0,t.shake-o*2.5);let d=.012*l*l+t.shake*.06+(i.onKerb?.018:0);if(d>.001){let t=performance.now()/1e3;e.position.x+=Math.sin(t*53)*d,e.position.y+=Math.sin(t*71+1)*d}},orbit(n,r,{radius:i=7.5,height:a=1.6,speed:o=.12,lookY:s=.7,angle:c}={}){t.orbitA=c??t.orbitA+r*o,e.position.set(n.x+Math.sin(t.orbitA)*i,n.y+a,n.z+Math.cos(t.orbitA)*i),e.lookAt(n.x,n.y+s,n.z),e.fov!==40&&(e.fov=40,e.updateProjectionMatrix())},photoOrbit(n,r,i){let a=t.photo;a.a-=r.steer*i*1.6,a.r=Math.max(3,Math.min(30,a.r+(r.brake-r.throttle)*i*8)),e.position.set(n.x+Math.sin(a.a)*a.r*Math.cos(a.e),n.y+.5+Math.sin(a.e)*a.r,n.z+Math.cos(a.a)*a.r*Math.cos(a.e)),e.lookAt(n.x,n.y+.6,n.z),e.fov!==45&&(e.fov=45,e.updateProjectionMatrix())}}}var da=/wheel|g29|g920|g923|driving force|thrustmaster|t300|t248|t150|t-gt|tmx|fanatec|046d|044f|c24f|c266|c267|c262/i,fa=/wheel|g29|g920|g923|driving force|thrustmaster|t300|t248|t150|t-gt|tmx|fanatec|c24f|c266|c267|c262/i,pa={steerAxis:0,steerCenter:0,steerLeft:-1,steerRight:1,throttleAxis:2,throttleRest:1,throttleFull:-1,brakeAxis:5,brakeRest:1,brakeFull:-1,shootBtns:[0,4],boostBtns:[1,5],cameraBtns:[3],pauseBtns:[9],backBtns:[2,8],confirmBtns:[0],preset:!0},ma={left:[`ArrowLeft`,`KeyA`],right:[`ArrowRight`,`KeyD`],up:[`ArrowUp`,`KeyW`],down:[`ArrowDown`,`KeyS`],shoot:[`Space`],boost:[`ShiftLeft`,`ShiftRight`],camera:[`KeyC`],pause:[`Escape`],photo:[`KeyP`],reset:[`KeyR`],gearUp:[`KeyE`],gearDown:[`KeyQ`],confirm:[`Enter`,`NumpadEnter`],back:[`Backspace`]};function ha(e){let t=new Set,n=new Set,r=null,i=!1,a=!0,o=new Map,s=new Map,c=[],l=`keyboard`,u=null,d={steer:0,throttle:0,brake:0,shoot:!1,analogSteer:!1,kind:`keyboard`,pressed:new Set},f=e=>ma[e].some(e=>t.has(e));addEventListener(`keydown`,n=>{if(!n.repeat){t.add(n.code),l=`keyboard`;for(let[e,t]of Object.entries(ma))t.includes(n.code)&&d.pressed.add(e);if(a){let t={ArrowUp:`up`,ArrowDown:`down`,ArrowLeft:`left`,ArrowRight:`right`,Enter:`confirm`,NumpadEnter:`confirm`,Escape:`back`,Backspace:`back`,KeyQ:`tabLeft`,KeyE:`tabRight`}[n.code];t&&(e.emit(`nav`,{dir:t}),n.preventDefault())}[`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,`Space`].includes(n.code)&&n.preventDefault()}}),addEventListener(`keyup`,e=>t.delete(e.code)),addEventListener(`blur`,()=>{t.clear(),n.clear()});let p=new Map;addEventListener(`pointerdown`,e=>{let t=e.target.closest?.(`[data-touch]`);if(!t)return;let r=t.dataset.touch;n.add(r),p.set(e.pointerId,r),l=`touch`,[`boost`,`camera`,`pause`,`photo`].includes(r)&&d.pressed.add(r),e.preventDefault()});let m=e=>{let t=p.get(e.pointerId);t&&(n.delete(t),p.delete(e.pointerId))};addEventListener(`pointerup`,m),addEventListener(`pointercancel`,m);function h(e){if(e.beta==null)return;let t=screen.orientation&&screen.orientation.angle||window.orientation||0,n;n=t===90?e.beta:t===-90||t===270?-e.beta:e.gamma,r=Math.max(-1,Math.min(1,n/28))}async function g(){if(!i&&`DeviceOrientationEvent`in window&&matchMedia(`(pointer: coarse)`).matches)try{if(typeof DeviceOrientationEvent.requestPermission==`function`&&await DeviceOrientationEvent.requestPermission()!==`granted`)return;addEventListener(`deviceorientation`,h),i=!0}catch{}}function _(e){return e.mapping===`standard`&&!fa.test(e.id)?`gamepad`:da.test(e.id)||e.axes.length>=3&&e.buttons.length>=12?`wheel`:`gamepad`}function v(e,t){let n=e.id.toLowerCase();return/c24f|g29/.test(n)?`Logitech G29`:/c266|c267|c26e|g923/.test(n)?`Logitech G923`:/g920|c262/.test(n)?`Logitech G920`:/044f|thrustmaster|t300|t248|t150/.test(n)?`Thrustmaster wheel`:/054c|dualsense|0ce6/.test(n)?`PlayStation DualSense`:/09cc|05c4|dualshock|wireless controller/.test(n)?`PlayStation DualShock 4`:/xbox|xinput|045e/.test(n)?`Xbox controller`:t===`wheel`?`Racing wheel`:e.id.replace(/\(.*?\)/g,``).trim().slice(0,32)||`Controller`}function y(t){let n=[{index:-1,id:`keyboard`,kind:`keyboard`,label:`Keyboard`}];matchMedia(`(pointer: coarse)`).matches&&n.push({index:-2,id:`touch`,kind:`touch`,label:i?`Touch + tilt`:`Touch`});for(let e of t)if(e){let t=_(e);n.push({index:e.index,id:e.id,kind:t,label:v(e,t),calibrated:t===`wheel`?!!Q.data.calib[e.id]:void 0})}let r=n.map(e=>e.id+e.calibrated).join(`|`);if(r!==c.sig){let t=n.find(e=>e.kind===`wheel`&&!c.some?.(t=>t.id===e.id));c=n,c.sig=r,e.emit(`input:devices`,{list:n,active:l}),t&&!t.calibrated&&e.emit(`game:toast`,{text:`${t.label} connected`,sub:`Settings → Calibrate wheel for a perfect setup`,kind:`info`})}}function b(e){return Q.data.calib[e.id]||pa}let x=(e,t,n)=>{let r=(e-t)/(n-t||1);return Math.max(0,Math.min(1,r))},S=new Map,C=new Map;function w(e,t){S.has(e.index)||(S.set(e.index,[...e.axes]),C.set(e.index,new Set));let n=C.get(e.index);return!n.has(t)&&Math.abs((e.axes[t]??0)-S.get(e.index)[t])>.25&&n.add(t),n.has(t)}function T(e,t,n){let r=Q.data.settings,i=e.axes[t.steerAxis]??0,a=i>=t.steerCenter?(i-t.steerCenter)/(t.steerRight-t.steerCenter||1):-(i-t.steerCenter)/(t.steerLeft-t.steerCenter||-1);a/=Math.max(.15,r.steerRange);let o=r.deadzone;a=Math.abs(a)<o?0:Math.sign(a)*(Math.abs(a)-o)/(1-o),n.steer=Math.max(-1,Math.min(1,a));let s=x(e.axes[t.throttleAxis]??t.throttleRest,t.throttleRest,t.throttleFull),c=x(e.axes[t.brakeAxis]??t.brakeRest,t.brakeRest,t.brakeFull);e.axes[t.throttleAxis]===0&&Math.abs(t.throttleRest)===1&&(s=0),e.axes[t.brakeAxis]===0&&Math.abs(t.brakeRest)===1&&(c=0),t.preset&&(w(e,t.throttleAxis)||(s=0),w(e,t.brakeAxis)||(c=0)),n.throttle=s<.03?0:s,n.brake=c<.03?0:c}function E(e){let t=e.axes[9];return t==null||t>1.05?null:Math.abs(t+1)<.15?`up`:Math.abs(t+.43)<.15?`right`:Math.abs(t-.14)<.15?`down`:Math.abs(t-.71)<.15?`left`:null}function ee(){let t=navigator.getGamepads?[...navigator.getGamepads()]:[];y(t);let i=d.pressed,c=0,p=0,m=0,h=!1,g=!1;f(`left`)&&--c,f(`right`)&&(c+=1),f(`up`)&&(p=1),f(`down`)&&(m=1),f(`shoot`)&&(h=!0),(n.size||r!=null)&&(n.has(`steerLeft`)&&--c,n.has(`steerRight`)&&(c+=1),r!=null&&!n.has(`steerLeft`)&&!n.has(`steerRight`)&&(c=r,g=!0),n.has(`gas`)&&(p=1),n.has(`brake`)&&(m=1),n.has(`shoot`)&&(h=!0));for(let n of t){if(!n)continue;let t=_(n),r=o.get(n.index)||[],d=n.buttons.map(e=>e.pressed||e.value>.5),f=e=>d[e]&&!r[e],v=d.some((e,t)=>e&&!r[t]);if(u&&u.index===n.index)N(n,d,r),o.set(n.index,d);else{if(t===`wheel`){let t=b(n),r={};if(T(n,t,r),(Math.abs(r.steer)>.02||r.throttle>0||r.brake>0||v)&&(l=`wheel`),l===`wheel`&&(c=r.steer,p=Math.max(p,r.throttle),m=Math.max(m,r.brake),g=!0),t.shootBtns.some(e=>d[e])&&(h=!0),t.boostBtns.some(f)&&i.add(`boost`),t.cameraBtns.some(f)&&i.add(`camera`),t.pauseBtns.some(f)&&i.add(`pause`),a){let i=E(n),a=s.get(n.index+`:hat`);i&&i!==a&&e.emit(`nav`,{dir:i}),s.set(n.index+`:hat`,i);let o=r.steer<-.5?`left`:r.steer>.5?`right`:null,c=s.get(n.index+`:steer`);o&&o!==c&&e.emit(`nav`,{dir:o}),s.set(n.index+`:steer`,o),t.confirmBtns.some(f)&&e.emit(`nav`,{dir:`confirm`}),t.backBtns.some(f)&&e.emit(`nav`,{dir:`back`}),t.pauseBtns.some(f)&&e.emit(`nav`,{dir:`pause`}),f(12)&&e.emit(`nav`,{dir:`up`}),f(13)&&e.emit(`nav`,{dir:`down`}),f(14)&&e.emit(`nav`,{dir:`left`}),f(15)&&e.emit(`nav`,{dir:`right`})}}else{let t=n.axes[0]||0,r=n.buttons[7]?n.buttons[7].value:0,o=n.buttons[6]?n.buttons[6].value:0;if((Math.abs(t)>.15||r>.05||o>.05||v)&&(l=`gamepad`),l===`gamepad`){let e=Math.max(0,(Math.abs(t)-.12)/.88),n=Math.sign(t)*e**1.6;Math.abs(n)>Math.abs(c)&&(c=n,g=!0),p=Math.max(p,r>.04?r:0),m=Math.max(m,o>.04?o:0)}if(d[0]&&(h=!0),f(2)&&i.add(`boost`),f(3)&&i.add(`camera`),f(9)&&i.add(`pause`),f(8)&&i.add(`photo`),f(5)&&i.add(`gearUp`),f(4)&&i.add(`gearDown`),a){let r=n.axes[1]||0,i=r<-.6?`up`:r>.6?`down`:t<-.6?`left`:t>.6?`right`:null,a=s.get(n.index);i&&i!==a&&e.emit(`nav`,{dir:i}),s.set(n.index,i);for(let[t,n]of Object.entries({12:`up`,13:`down`,14:`left`,15:`right`,0:`confirm`,1:`back`,9:`pause`,4:`tabLeft`,5:`tabRight`}))f(+t)&&e.emit(`nav`,{dir:n})}}o.set(n.index,d)}}return d.steer=Math.max(-1,Math.min(1,c)),d.throttle=p,d.brake=m,d.shoot=h,d.analogSteer=g,d.kind=l,d}function D(){d.pressed.clear()}function O(e,t,n){if(l===`gamepad`){for(let r of navigator.getGamepads?navigator.getGamepads():[])if(r&&r.vibrationActuator&&_(r)===`gamepad`)try{r.vibrationActuator.playEffect(`dual-rumble`,{duration:n,strongMagnitude:e,weakMagnitude:t})?.catch?.(()=>{})}catch{}}}let k=[[`center`,`Let go of the wheel and pedals`],[`left`,`Turn the wheel LEFT as far as you normally steer`],[`right`,`Now turn it RIGHT as far as you normally steer`],[`throttle`,`Press the THROTTLE pedal all the way`],[`brake`,`Press the BRAKE pedal all the way`],[`shoot`,`Press the button you want for SHOOT (paddle recommended)`],[`boost`,`Press the button you want for SIU BOOST`]];function A(){let t=navigator.getGamepads?[...navigator.getGamepads()].filter(Boolean):[],n=t.find(e=>_(e)===`wheel`)||t[0];n?(u={index:n.index,id:n.id,step:0,base:[...n.axes],hold:0,map:{...pa,preset:!1},used:new Set,extreme:null,axis:-1,t0:performance.now()},j()):e.emit(`input:calib`,{step:`none`,prompt:`No wheel found. Plug it in, press a button on it, then try again.`,progress:0})}function j(t){if(!u)return;let[n,r]=k[u.step]||[`done`,`All set! Your wheel is calibrated.`];e.emit(`input:calib`,{step:n,prompt:r,progress:u.step/k.length,detected:t})}function M(){u.step++,u.hold=0,u.axis=-1,u.extreme=null,u.t0=performance.now(),u.step>=k.length?(Q.data.calib[u.id]=u.map,Q.save(),e.emit(`input:calib`,{step:`done`,prompt:`All set! Your wheel is calibrated.`,progress:1}),u=null,c.sig=``):j()}function N(e,t,n){let[r]=k[u.step],i=u.map,a=performance.now(),o=Math.min(.1,(a-(u.lastT||a))/1e3);if(u.lastT=a,r===`center`){let t=e.axes.some((e,t)=>Math.abs(e-u.base[t])>.02);u.base=[...e.axes],u.hold=t?0:u.hold+o,u.hold>1.2&&(i.steerCenter=e.axes[0]??0,M())}else if(r===`left`||r===`right`||r===`throttle`||r===`brake`){let t=-1,n=.35;if(e.axes.forEach((e,a)=>{if(a===9||u.used.has(a)&&(r!==`right`||a!==i.steerAxis))return;let o=Math.abs(e-u.base[a]);o>n&&(n=o,t=a)}),r===`right`){let n=e.axes[i.steerAxis]-i.steerCenter,r=Math.sign(i.steerLeft-i.steerCenter)||-1;t=Math.sign(n)===-r&&Math.abs(n)>.2?i.steerAxis:-1}if(t<0){u.hold=0;return}let a=e.axes[t];u.axis!==t&&(u.axis=t,u.extreme=a,u.hold=0),Math.abs(a-u.base[t])>=Math.abs(u.extreme-u.base[t])-.01&&(u.extreme=a),u.hold+=o,j(`axis ${t}`),u.hold>.7&&((r===`throttle`||r===`brake`)&&Math.abs(u.base[t])<.01&&Math.abs(u.extreme)>.9&&(u.base[t]=-Math.sign(u.extreme)),r===`left`&&(i.steerAxis=t,i.steerLeft=u.extreme,u.used.add(t)),r===`right`&&(i.steerRight=u.extreme),r===`throttle`&&(i.throttleAxis=t,i.throttleRest=u.base[t],i.throttleFull=u.extreme,u.used.add(t)),r===`brake`&&(i.brakeAxis=t,i.brakeRest=u.base[t],i.brakeFull=u.extreme,u.used.add(t)),M(),u&&(u.base=[...e.axes].map((e,t)=>t===i.throttleAxis?i.throttleRest:t===i.brakeAxis?i.brakeRest:t===i.steerAxis?i.steerCenter:e)))}else if(r===`shoot`||r===`boost`){let e=t.findIndex((e,t)=>e&&!n[t]);if(e<0)return;if(r===`shoot`)i.shootBtns=[e],i.confirmBtns=[e];else if(e!==i.shootBtns[0])i.boostBtns=[e];else return;M()}}return e.on(`ui:calibrate`,({action:t})=>{t===`start`?A():t===`cancel`?(u=null,e.emit(`input:calib`,{step:`cancelled`,prompt:``,progress:0})):t===`next`&&u&&M()}),{controls:d,update:ee,endFrame:D,rumble:O,enableTilt:g,setNavEnabled(e){a=e},get kind(){return l},get devices(){return c}}}var ga=e=>440*2**((e-69)/12),$={C4:60,D4:62,E4:64,F4:65,G4:67,A4:69,B4:71,C5:72,D5:74,E5:76,F5:77,G5:79,A3:57,F3:53,C3:48,G3:55,A2:45,F2:41,C2:36,G2:43,E4b:63};function _a(e){let t=null,n,r,i,a,o,s={},c=null,l=null,u=null;function d(){if(t)return t.state===`suspended`&&t.resume(),!0;let e=window.AudioContext||window.webkitAudioContext;if(!e)return!1;t=new e,n=t.createGain();let s=t.createDynamicsCompressor();s.threshold.value=-14,s.ratio.value=4,n.connect(s).connect(t.destination),r=t.createGain(),r.connect(n),i=t.createGain(),i.connect(n),a=t.createGain(),a.connect(n),o=t.createBuffer(1,t.sampleRate*2,t.sampleRate);let c=o.getChannelData(0);for(let e=0;e<c.length;e++)c[e]=Math.random()*2-1;return f(),!0}function f(){if(!t)return;let r=e.data.settings;n.gain.value=r.volMaster,i.gain.value=r.volMusic*.55}let p=()=>t.currentTime;function m(e=!0){let n=t.createBufferSource();return n.buffer=o,n.loop=e,n}function h(e,t,n,r,i){e.gain.setValueAtTime(1e-4,t),e.gain.exponentialRampToValueAtTime(r,t+n),e.gain.exponentialRampToValueAtTime(1e-4,t+n+i)}function g(e){let n=t.createGain();n.gain.value=0;let r=t.createBiquadFilter();r.type=`lowpass`,r.Q.value=1.4;let i=t.createBiquadFilter();i.type=`peaking`,i.frequency.value=2400,i.gain.value=6,i.Q.value=1.2;let o=t.createWaveShaper(),s=new Float32Array(1024);for(let e=0;e<1024;e++){let t=e/512-1;s[e]=Math.tanh(t*2.4)}o.curve=s;let c=t.createGain();c.gain.value=.5;let l=t.createOscillator();l.type=`sawtooth`;let u=t.createOscillator();u.type=`square`;let d=t.createOscillator();d.type=`sawtooth`;let f=t.createGain();f.gain.value=e===`kart`?.7:.45;let h=t.createGain();h.gain.value=e===`kart`?.1:.22,l.connect(c),u.connect(f).connect(c),d.connect(h).connect(c),c.connect(o).connect(r).connect(i).connect(n);let g=m(),_=t.createBiquadFilter();_.type=`bandpass`,_.frequency.value=1900,_.Q.value=.9;let y=t.createGain();y.gain.value=0,g.connect(_).connect(y).connect(n);let b=t.createOscillator();b.type=`sine`;let x=t.createGain();x.gain.value=0,b.connect(x).connect(n);let S=t.createStereoPanner();n.connect(S).connect(a),[l,u,d,g,b].forEach(e=>e.start());let C=e===`kart`?38:118,w=e===`kart`?175:520;return{set(t,i,a=1,o=0,s=1){let c=p(),f=(C+(w-C)*t)*s;l.frequency.setTargetAtTime(f,c,.02),u.frequency.setTargetAtTime(f*.5,c,.02),d.frequency.setTargetAtTime(f*2.01,c,.02),b.frequency.setTargetAtTime((2600+3600*t)*s,c,.05),r.frequency.setTargetAtTime(700+5200*(.35+.65*i)*t,c,.03),n.gain.setTargetAtTime(a*(.08+.2*i+.06*t),c,.03),y.gain.setTargetAtTime(a*.05*i,c,.05),x.gain.setTargetAtTime(a*(e===`kart`?0:.012+.012*t),c,.05),S.pan.setTargetAtTime(o,c,.05)},shift(){let e=p();n.gain.cancelScheduledValues(e),n.gain.setValueAtTime(n.gain.value,e),n.gain.linearRampToValueAtTime(n.gain.value*.25,e+.03),n.gain.linearRampToValueAtTime(n.gain.value,e+.09),v(.06,2500,`highpass`,.08,.002,.05)},stop(){[l,u,d,g,b].forEach(e=>{try{e.stop()}catch{}}),n.disconnect()}}}function _(e,n,i){let a=m(),o=t.createBiquadFilter();o.type=e,o.frequency.value=n,o.Q.value=i;let s=t.createGain();return s.gain.value=0,a.connect(o).connect(s).connect(r),a.start(),{n:a,f:o,g:s}}function v(e,n,i=`bandpass`,a=.3,o=.005,s=e,c=1,l){let u=p(),d=m(!1),f=t.createBiquadFilter();f.type=i,f.frequency.setValueAtTime(n,u),f.Q.value=c,l&&f.frequency.exponentialRampToValueAtTime(l,u+e);let g=t.createGain();h(g,u,o,a,s),d.connect(f).connect(g).connect(r),d.start(u),d.stop(u+o+s+.05)}function y(e,n,i=`sine`,a=.2,o=.005,s,c=0,l=r){let u=p()+c,d=t.createOscillator();d.type=i,d.frequency.setValueAtTime(e,u),s&&d.frequency.exponentialRampToValueAtTime(s,u+n);let f=t.createGain();h(f,u,o,a,n),d.connect(f).connect(l),d.start(u),d.stop(u+o+n+.05)}function b(e){if(!d())return;x(),s.player=g(e),s.rivals=[g(e),g(e)],s.wind=_(`lowpass`,500,.7),s.squeal=_(`bandpass`,1150,7),s.scrape=_(`bandpass`,2600,1.5),s.crowd=_(`bandpass`,850,.6);let n=t.createOscillator();n.type=`square`,n.frequency.value=26;let i=t.createBiquadFilter();i.type=`lowpass`,i.frequency.value=180;let a=t.createGain();a.gain.value=0,n.connect(i).connect(a).connect(r),n.start(),s.kerb={o:n,g:a}}function x(){if(t){s.player?.stop(),s.rivals?.forEach(e=>e.stop());for(let e of[`wind`,`squeal`,`scrape`,`crowd`]){try{s[e]?.n.stop()}catch{}s[e]?.g.disconnect()}if(s.kerb){try{s.kerb.o.stop()}catch{}s.kerb.g.disconnect()}for(let e of Object.keys(s))delete s[e]}}function S(e,n,r=.3){if(!t||!s.player)return;let i=p();s.player.set(e.rpm,e.throttle,1,0,1+e.boost*.04),n.slice(0,2).forEach((e,t)=>{let n=Math.max(0,1-e.dist/90)**2*.8;s.rivals[t].set(e.rpm,.8,n,e.pan,343/Math.max(200,343-e.closing))});for(let e=n.length;e<2;e++)s.rivals[e].set(.3,0,0);let a=Math.min(1,e.speed/90);s.wind.g.gain.setTargetAtTime(.11*a*a,i,.1),s.wind.f.frequency.setTargetAtTime(300+a*1400,i,.1),s.squeal.g.gain.setTargetAtTime(Math.min(.12,e.slip*.03),i,.05),s.scrape.g.gain.setTargetAtTime(Math.min(.35,e.scrape*.05),i,.03),s.kerb.g.gain.setTargetAtTime(e.onKerb?.18*Math.min(1,e.speed/30):0,i,.02),s.kerb.o.frequency.setTargetAtTime(14+e.speed*.6,i,.05),s.crowd.g.gain.setTargetAtTime(.03+r*.2,i,.3)}let C=(e=>Object.fromEntries(Object.entries(e).map(([e,n])=>[e,(...e)=>t?n(...e):void 0])))({swish(){v(.32,5200,`bandpass`,.35,.01,.3,1.2,1400)},rim(){[520,1340,2460,3900].forEach((e,t)=>y(e,.7-t*.12,`sine`,.12/(t+1)))},board(){y(130,.15,`sine`,.35,.002,65),v(.08,900,`lowpass`,.15)},kick(){y(160,.14,`sine`,.5,.002,48),v(.03,3e3,`highpass`,.2,.001,.03)},net(){v(.45,700,`lowpass`,.2,.02,.43)},lantern(){[$.C5,$.E5,$.G5,$.C5+12].forEach((e,t)=>{y(ga(e+12),.9,`sine`,.14,.004,null,t*.09),y(ga(e+24),.5,`sine`,.04,.004,null,t*.09)})},boost(){v(.9,600,`bandpass`,.35,.05,.85,1.5,4200),y(180,.8,`sawtooth`,.08,.05,900)},beep(e){y(e?1320:880,.16,`square`,.08)},pop(){v(.12,1800,`bandpass`,.4,.002,.1)},firework(){v(1.6,220,`lowpass`,.5,.005,1.5);for(let e=0;e<14;e++)setTimeout(()=>t&&v(.03,4e3+Math.random()*3e3,`highpass`,.08,.001,.03),300+Math.random()*1200)},aura(){y(1800,.35,`sine`,.08,.005,3600),y(2700,.3,`sine`,.05,.005,5400,.06)},sixseven(){y(ga($.F4),.18,`square`,.1),y(ga($.G4),.3,`square`,.1,.005,null,.2)},cheer(e=1){if(!s.crowd){v(1.8,900,`bandpass`,.25*e,.15,1.6,.5);return}let t=s.crowd.g.gain,n=p();t.cancelScheduledValues(n),t.setValueAtTime(t.value,n),t.linearRampToValueAtTime(.3*e,n+.25),t.linearRampToValueAtTime(.05,n+2.8)},hit(e){v(.25,400,`lowpass`,Math.min(.6,.15+e*.03),.002,.24)},shift(){s.player?.shift()},click(){v(.05,2e3,`bandpass`,.15,.002,.04,2)},uiMove(){y(1500,.05,`sine`,.05)},uiSelect(){y(900,.08,`triangle`,.08),y(1350,.1,`triangle`,.06,.005,null,.05)}});function w(){c&&clearInterval(c),c=null,l=null}function T(){if(!d()||l===`menu`)return;w(),l=`menu`;let e=60/104,n=e*4,r=[[$.A3,$.C4,$.E4],[$.F3,$.A3,$.C4],[$.C4,$.E4,$.G4],[$.G3,$.B4-12,$.D4]],a=[$.A2,$.F2,$.C3,$.G2],o=p()+.1,s=0;if(!u){u=t.createDelay(),u.delayTime.value=e*.75;let n=t.createGain();n.gain.value=.3;let r=t.createBiquadFilter();r.type=`lowpass`,r.frequency.value=2400,u.connect(n).connect(r).connect(u),r.connect(i)}let f=u;c=setInterval(()=>{if(t)for(;o<p()+.2;){let c=s%16,l=Math.floor(s/16)%4,u=r[l];if(c===0&&u.forEach(e=>[-6,6].forEach(r=>{let a=t.createOscillator();a.type=`sawtooth`,a.frequency.value=ga(e),a.detune.value=r;let s=t.createBiquadFilter();s.type=`lowpass`,s.frequency.value=1100;let c=t.createGain();c.gain.setValueAtTime(1e-4,o),c.gain.exponentialRampToValueAtTime(.022,o+.4),c.gain.exponentialRampToValueAtTime(1e-4,o+n),a.connect(s).connect(c).connect(i),a.start(o),a.stop(o+n+.1)})),c%2==0){let n=t.createOscillator();n.type=`sawtooth`,n.frequency.value=ga(a[l]);let r=t.createBiquadFilter();r.type=`lowpass`,r.frequency.value=380;let s=t.createGain();s.gain.setValueAtTime(1e-4,o),s.gain.exponentialRampToValueAtTime(.09,o+.01),s.gain.exponentialRampToValueAtTime(1e-4,o+e*.45),n.connect(r).connect(s).connect(i),n.start(o),n.stop(o+e*.5)}{let n=u[s*3%3]+12+s%2*(c>=8?12:0),r=t.createOscillator();r.type=`triangle`,r.frequency.value=ga(n);let a=t.createGain();a.gain.setValueAtTime(1e-4,o),a.gain.exponentialRampToValueAtTime(.03,o+.005),a.gain.exponentialRampToValueAtTime(1e-4,o+e*.35),r.connect(a),a.connect(i),a.connect(f),r.start(o),r.stop(o+e*.4)}if(c%8==0){let e=t.createOscillator();e.type=`sine`,e.frequency.setValueAtTime(140,o),e.frequency.exponentialRampToValueAtTime(42,o+.16);let n=t.createGain();n.gain.setValueAtTime(.35,o),n.gain.exponentialRampToValueAtTime(1e-4,o+.3),e.connect(n).connect(i),e.start(o),e.stop(o+.32)}if(c%4==2){let e=m(!1),n=t.createBiquadFilter();n.type=`highpass`,n.frequency.value=8e3;let r=t.createGain();r.gain.setValueAtTime(.05,o),r.gain.exponentialRampToValueAtTime(1e-4,o+.05),e.connect(n).connect(r).connect(i),e.start(o),e.stop(o+.06)}if(c===4||c===12){let e=m(!1),n=t.createBiquadFilter();n.type=`bandpass`,n.frequency.value=1800;let r=t.createGain();r.gain.setValueAtTime(.12,o),r.gain.exponentialRampToValueAtTime(1e-4,o+.16),e.connect(n).connect(r).connect(i),e.start(o),e.stop(o+.18)}o+=e/4,s++}},50)}function E(e){t&&(a.gain.setTargetAtTime(+!e,p(),.05),r.gain.setTargetAtTime(+!e,p(),.05))}function ee(e){if(!d())return;w(),l=`birthday`;let t=[[`G4`,.75],[`G4`,.25],[`A4`,1],[`G4`,1],[`C5`,1],[`B4`,2],[`G4`,.75],[`G4`,.25],[`A4`,1],[`G4`,1],[`D5`,1],[`C5`,2],[`G4`,.75],[`G4`,.25],[`G5`,1],[`E5`,1],[`C5`,1],[`B4`,1],[`A4`,2],[`F5`,.75],[`F5`,.25],[`E5`,1],[`C5`,1],[`D5`,1],[`C5`,3]],n=.52,r=.4;[[$.C4,$.E4,$.G4],[$.G3,$.B4-12,$.D4],[$.C4,$.F4,$.A4],[$.C4,$.E4,$.G4]].forEach((e,t)=>e.forEach(e=>y(ga(e),n*6.5,`triangle`,.025,.3,null,.4+t*n*6.2,i)));for(let[e,a]of t){let t=ga($[e]+12);y(t,a*n*1.6,`sine`,.16,.004,null,r,i),y(t*2.76,a*n*.6,`sine`,.03,.004,null,r,i),y(t*5.4,a*n*.3,`sine`,.012,.004,null,r,i),r+=a*n}setTimeout(()=>{l===`birthday`&&(l=null),e?.()},(r+1)*1e3)}let D=null;function O(){let e=speechSynthesis.getVoices();for(let t of[`Google UK English Male`,`Microsoft Ryan`,`Microsoft George`,`Daniel`,`Microsoft Guy`,`Google UK English Female`]){let n=e.find(e=>e.name.includes(t));if(n)return n}return e.find(e=>/en-GB/i.test(e.lang))||e.find(e=>/^en/i.test(e.lang))||null}`speechSynthesis`in window&&(speechSynthesis.onvoiceschanged=()=>{D=O()});function k(n,{pitch:r=.95,rate:i=1.06,interrupt:a=!1}={}){if(!e.data.settings.voice||!(`speechSynthesis`in window))return;if(a)speechSynthesis.cancel();else if(speechSynthesis.speaking||speechSynthesis.pending)return;D||=O();let o=new SpeechSynthesisUtterance(n);D&&(o.voice=D),o.pitch=r,o.rate=i,o.volume=Math.min(1,e.data.settings.volMaster+.1),t&&(v(.08,2200,`bandpass`,.12,.002,.07,3),o.onend=()=>t&&v(.06,2200,`bandpass`,.1,.002,.05,3)),speechSynthesis.speak(o)}return{unlock:d,applyVolumes:f,startRace:b,stopRace:x,updateRace:S,fx:C,menuMusic:T,stopMusic:w,birthdaySong:ee,speak:k,setPaused:E,get ready(){return!!t}}}var va=9.81,ya={f1:{mass:800,wheelbase:3.4,halfWidth:.95,length:5.4,maxSteer:.3,power:68e4,maxForce:17e3,drag:.9,roll:220,engineBrake:1800,mu:1.5,downforce:.0026,brakeMu:1.45,yawResp:9,vmax:93,gears:[.29,.4,.5,.6,.69,.78,.89,1],rpmIdle:.3,steerRef:30,steerMin:.11},kart:{mass:170,wheelbase:1.05,halfWidth:.7,length:1.9,maxSteer:.42,power:16e3,maxForce:2100,drag:.85,roll:40,engineBrake:260,mu:1.3,downforce:0,brakeMu:1.15,yawResp:12,vmax:27,gears:[1],rpmIdle:.25,steerRef:14,steerMin:.3}};function ba(e,t){return{type:e,spec:ya[e],track:t,x:0,z:0,h:0,vx:0,vz:0,yaw:0,steer:0,u:0,w:0,speed:0,s:0,d:0,hint:-1,gear:1,rpm:0,shiftT:0,wheelRot:0,throttle:0,brake:0,boost:0,overtake:0,aeroOpen:0,slip:0,wallHit:0,onKerb:0,wrongWay:0}}function xa(e,t,n){let r=Ni(e.track,t);e.x=r.x+r.nx*n,e.z=r.z+r.nz*n,e.h=r.heading,e.vx=e.vz=e.yaw=e.steer=e.u=e.w=0,e.gear=1,e.hint=-1;let i=Mi(e.track,e.x,e.z,-1);e.s=i.s,e.d=i.d,e.hint=i.i}function Sa(e,t,n,r={}){let i=e.spec,a=e.track,o=Math.sin(e.h),s=Math.cos(e.h),c=Math.cos(e.h),l=-Math.sin(e.h),u=e.vx*o+e.vz*s,d=e.vx*c+e.vz*l,f=Math.max(i.steerMin,1/(1+(Math.max(u,0)/i.steerRef)**(r.steer?1.35:1.1))),p=-t.steer*i.maxSteer*f,m=t.analogSteer?12:3.2;e.steer+=Math.max(-m*n,Math.min(m*n,p-e.steer));let h=1,g=Math.abs(e.d)>a.halfWidth-.4;g&&(h=Math.abs(e.d)>a.halfWidth+1.4?.82:.93);let _=i.mu*h*(va+i.downforce*u*u),v=t.brake,y=t.throttle;if(r.brake&&r.profile&&u>8){let t=Math.round(Math.max(20,u*.9)/a.step),n=r.profile,i=1/0;for(let r=2;r<=t;r+=2)i=Math.min(i,n[(e.hint+r)%a.n]*.93+Math.sqrt(52*r*a.step));u>i&&(v=Math.max(v,Math.min(1,(u-i)/6)),y=Math.min(y,.2))}let b=1+.32*e.boost+.16*e.overtake,x=1-.1*e.aeroOpen,S=0;if(y>0&&u>-1){let t=i.power*b*y,n=i.mu*i.mass*(va+i.downforce*u*u)*.95;S+=Math.min(i.maxForce*y*b,t/Math.max(u,4),n),e.shiftT>0&&(S*=.55)}let C=i.brakeMu*i.mass*(va+i.downforce*u*u);v>0&&u>.5?S-=v*C:v>.3&&u<=.5&&y<.1&&(S-=i.maxForce*.25*v),S-=i.drag*x*u*Math.abs(u),S-=Math.sign(u)*i.roll,y<.05&&u>1&&(S-=i.engineBrake);let w=i.vmax*(1+.1*e.boost+.05*e.overtake),T=S/i.mass;u+=T*n,u>w&&(u-=(u-w)*Math.min(1,n*2)),u<-8&&(u=-8),Math.abs(u)<.05&&y===0&&v===0&&(u=0);let E=Math.min(Math.abs(T),_*.95),ee=Math.sqrt(Math.max(_*_-E*E*.6,_*_*.2)),D=u*Math.tan(e.steer)/i.wheelbase,O=ee/Math.max(Math.abs(u),2),k=Math.max(-O*1.08,Math.min(O*1.08,D));e.yaw+=(k-e.yaw)*(1-Math.exp(-n*i.yawResp)),e.h+=e.yaw*n;let A=Math.sin(e.h),j=Math.cos(e.h),M=Math.cos(e.h),N=-Math.sin(e.h),P=o*u+c*d,F=s*u+l*d;u=P*A+F*j,d=P*M+F*N;let I=ee*n*1.6;e.slip=Math.max(0,Math.abs(d)-I),d=Math.abs(d)<=I?0:d-Math.sign(d)*I,e.vx=A*u+M*d,e.vz=j*u+N*d,e.x+=e.vx*n,e.z+=e.vz*n;let L=Mi(a,e.x,e.z,e.hint);e.hint=L.i,e.s=L.s,e.d=L.d;let R=a.wallOffset-i.halfWidth;if(e.wallHit=0,Math.abs(L.d)>R){let t=a.samples[L.i],r=Math.sign(L.d),i=Math.abs(L.d)-R;e.x-=t.nx*r*i,e.z-=t.nz*r*i;let o=e.vx*t.nx+e.vz*t.nz;if(o*r>0){let n=Math.abs(o);e.vx-=t.nx*o*1.2,e.vz-=t.nz*o*1.2;let r=Math.min(.5,.04+n*.02);e.vx*=1-r,e.vz*=1-r,e.wallHit=n}else e.vx*=1-.6*n,e.vz*=1-.6*n,e.wallHit=.5;let s=Math.sign(e.vx*t.tx+e.vz*t.tz)||1,c=Math.atan2(t.tx*s,t.tz*s)-e.h;for(;c>Math.PI;)c-=2*Math.PI;for(;c<-Math.PI;)c+=2*Math.PI;Math.abs(c)<1.2&&(e.h+=c*Math.min(1,n*6)),e.d=r*R}e.onKerb=g&&Math.abs(e.d)<a.halfWidth+1.4?1:0,e.u=e.vx*Math.sin(e.h)+e.vz*Math.cos(e.h),e.w=e.vx*Math.cos(e.h)-e.vz*Math.sin(e.h),e.speed=Math.hypot(e.vx,e.vz),e.throttle=y,e.brake=v;let z=a.samples[e.hint];e.wrongWay=Math.sin(e.h)*z.tx+Math.cos(e.h)*z.tz<-.3?e.wrongWay+n:0;let B=i.gears,V=i.vmax*B[e.gear-1],H=Math.max(0,e.u)/V;e.shiftT>0&&(e.shiftT-=n),r.autoShift!==!1&&(H>.97&&e.gear<B.length?(e.gear++,e.shiftT=.06,e.justShifted=1):e.gear>1&&e.u<i.vmax*B[e.gear-2]*.72&&(e.gear--,e.justShifted=-1)),H=Math.max(0,e.u)/(i.vmax*B[e.gear-1]);let U=y>.1&&e.u<3?.35*y:0,te=Math.min(1,i.rpmIdle+(1-i.rpmIdle)*Math.max(H,U));return e.rpm+=(te-e.rpm)*Math.min(1,n*18),e.wheelRot+=e.u*n,e}function Ca(e,t){let n=e.spec.gears.length,r=Math.max(1,Math.min(n,e.gear+t));r!==e.gear&&(e.gear=r,e.shiftT=.05,e.justShifted=t)}function wa(e,t,n,r){return{track:e,profile:t,spec:n,s:r.s,d:r.d,v:0,dDot:0,lap:r.lap??0,skill:r.skill,name:r.name,code:r.code,x:0,z:0,h:0,speed:0,u:0,steer:0,wheelRot:0,rpm:.3,gear:1,boost:0,aeroOpen:0,targetD:r.d,wobble:Math.random()*10,finished:!1,finishTime:0,bestLap:1/0,lapStart:0}}var Ta=(e,t,n)=>e[Math.floor(Pi(t,n)/t.step)%t.n];function Ea(e,t,n){let r=e.track,i=e.spec;if(!n.go){Da(e);return}let a=Math.max(30,e.v*1.4),o=1/0;for(let t=0;t<=a;t+=6){let i=Ta(e.profile,r,e.s+t)*e.skill*n.band,a=Math.sqrt(i*i+64*t);o=Math.min(o,a)}o=Math.min(o,i.vmax*e.skill*n.band);let s=1/0,c=0,l=0;for(let t of n.cars){if(t===e)continue;let n=Fi(r,e.s,t.s);n>0&&n<28&&Math.abs(t.d-e.d)<2.6&&n<s&&(s=n,c=t.v,l=t.d)}let u=Ta(r.line.offset,r,e.s),d=u;if(s<28){let e=r.halfWidth-1.6,t=l+3.4,n=l-3.4;d=Math.abs(t)<=e&&(Math.abs(n)>e||Math.abs(t-u)<Math.abs(n-u))?t:n,d=Math.max(-e,Math.min(e,d)),s<12&&(o=Math.min(o,c+(s-6)*.6))}e.targetD=d;let f=e.v<o?Math.min(i.vmax>40?14:5,(o-e.v)*3):Math.max(-38,(o-e.v)*6);e.v=Math.max(0,e.v+f*t),e.boost>0&&(e.v+=6*t);let p=e.targetD+Math.sin((n.time+e.wobble)*.6)*.25,m=Math.max(-4,Math.min(4,(p-e.d)*2));e.dDot+=(m-e.dDot)*Math.min(1,t*4),e.d+=e.dDot*t;let h=r.halfWidth+r.runoff-i.halfWidth-.2;e.d=Math.max(-h,Math.min(h,e.d));let g=e.s;e.s=Pi(r,e.s+e.v*t),e.s<g-r.length/2&&e.lap++,Da(e)}function Da(e){let t=Ni(e.track,e.s);e.x=t.x+t.nx*e.d,e.z=t.z+t.nz*e.d,e.h=t.heading+Math.atan2(e.dDot,Math.max(e.v,4)),e.speed=e.v,e.u=e.v,e.steer=Math.max(-.3,Math.min(.3,t.k*3.4+e.dDot*.02)),e.wheelRot+=e.v*(1/60);let n=e.spec.gears,r=1;for(;r<n.length&&e.v>e.spec.vmax*n[r-1]*.97;)r++;e.gear=r,e.rpm=Math.min(1,.3+.7*e.v/(e.spec.vmax*n[r-1])),e.aeroOpen+=(+(Math.abs(t.k)<.002&&e.v>45)-e.aeroOpen)*.1}function Oa(e,t,n,r,i){let a=wa(e,t,n,{s:i-150,d:0,skill:r,name:`ghost`,code:`GHO`}),o=[],s=1/60,c={go:!0,cars:[a],band:1,time:0},l=0,u=!1,d=a.s;for(let t=0;t<24e3;t++){Ea(a,s,c),c.time+=s;let n=Fi(e,d,i)>0&&Fi(e,a.s,i)<=0;if(d=a.s,n){if(u)return{time:l,frames:o};u=!0,l=0}u&&(t%3==0&&o.push([+a.x.toFixed(2),+a.z.toFixed(2),+a.h.toFixed(3)]),l+=s)}return null}var ka=new m(0,-9.81,0),Aa=new m,ja=new m,Ma={green:[.7,.88],yellow:[.52,.97]},Na=.8;function Pa(){let e=new C,t=new Y(new Ke(.12,.12,4.8),new Ie({color:3357252}));t.position.set(0,2.4,-1.6);let n=new Y(new Ve(3.6,2.4,.08),new Ie({color:16777215,transparent:!0,opacity:.5}));n.position.set(0,5.2,-1.1);let r=new Y(new Qe(.9,.04,8,32),new Ie({color:16734746,emissive:4198400}));return r.rotation.x=Math.PI/2,r.position.set(0,4.6,0),e.add(t,n,r),{root:e,rimCenter:new m(0,4.6,0),rimRadius:.9,backboard:{center:new m(0,5.2,-1.06),normal:new m(0,0,1),width:3.6,height:2.4},swish(){}}}function Fa(){let e=new C,t=new Ie({color:16777215}),n=3.2;for(let r of[-9/2,9/2]){let i=new Y(new Ke(.08,.08,n),t);i.position.set(r,n/2,0),e.add(i)}let r=new Y(new Ke(.08,.08,9),t);return r.rotation.z=Math.PI/2,r.position.y=n,e.add(r),{root:e,width:9,height:n,depth:2.5,celebrate(){}}}function Ia(){let e=new C,t=new Y(new fe(.3,1.2),new Ie({color:2280550}));return t.position.y=.9,e.add(t),{root:e,setPose({x:t=0,dive:n=0}){e.position.x=t,e.rotation.z=-n*1.2,e.position.y=Math.abs(n)*.4}}}function La({scene:e,track:t,sports:n,kart:r,onEvent:i}){let a=new C;a.name=`targets`,e.add(a);let o=r?.62:1,s=r?.3:.42,c=r?.26:.36,l=[];for(let e of t.def.targets||[]){let r=Ni(t,e.s),i=e.side,s=new m(-r.nx*i,0,-r.nz*i),c={def:e,type:e.type,s:e.s,side:i,inward:s,attempted:-1,made:0};if(e.type===`hoop`){let e=n?.createHoop?n.createHoop({color:`#ff5a1a`}):Pa();e.root.scale.setScalar(o);let l=e.backboard.normal;e.root.rotation.y=Math.atan2(s.x,s.z)-Math.atan2(l.x,l.z),e.root.updateMatrixWorld(!0);let u=e.rimCenter.clone().multiplyScalar(o).applyAxisAngle(new m(0,1,0),e.root.rotation.y),d=new m(r.x+r.nx*i*(t.wallOffset-.9*o),0,r.z+r.nz*i*(t.wallOffset-.9*o));e.root.position.set(d.x-u.x,0,d.z-u.z),a.add(e.root),e.root.updateMatrixWorld(!0),c.art=e,c.rim=e.root.localToWorld(e.rimCenter.clone()),c.rimR=e.rimRadius*o,c.board={center:e.root.localToWorld(e.backboard.center.clone()),normal:e.backboard.normal.clone().applyAxisAngle(new m(0,1,0),e.root.rotation.y).normalize(),w:e.backboard.width*o,h:e.backboard.height*o},c.aim=c.rim.clone()}else{let e=n?.createGoal?n.createGoal({kit:`#14224f`}):Fa();e.root.scale.setScalar(o);let l=M.degToRad(40),u=s.clone().multiplyScalar(Math.cos(l)).addScaledVector(new m(r.tx,0,r.tz),-Math.sin(l)).normalize();e.root.rotation.y=Math.atan2(u.x,u.z);let d=e.depth*o*.5+1.2;e.root.position.set(r.x+r.nx*i*(t.wallOffset+d),0,r.z+r.nz*i*(t.wallOffset+d)),a.add(e.root),c.art=e,c.width=e.width*o,c.height=e.height*o,c.depth=e.depth*o,c.mouth=e.root.position.clone(),c.inward=u,c.across=new m(1,0,0).applyAxisAngle(new m(0,1,0),e.root.rotation.y);let f=n?.createKeeper?n.createKeeper({kit:`#1db954`}):Ia();f.root.scale.setScalar(o);let p=new C;p.position.copy(c.mouth).addScaledVector(u,.9*o),p.rotation.y=e.root.rotation.y,p.add(f.root),a.add(p),c.keeper={art:f,x:0,vx:0,dive:0,diveT:0,react:0,aimX:0,holder:p},c.aim=c.mouth.clone().setY(c.height*.5)}l.push(c)}let u=l.filter(e=>e.type===`goal`).map(e=>({s0:e.s-e.width/2-2,s1:e.s+e.width/2+2,side:e.side})),d=[],f=e=>{let t=e===`hoop`?s:c,r;return r=e===`hoop`&&n?.createBasketball?n.createBasketball(t):e===`goal`&&n?.createFootball?n.createFootball(t):new Y(new qe(t,20,14),new Ie({color:e===`hoop`?14706202:16777215,roughness:.6})),r.castShadow=!0,r.visible=!1,a.add(r),{mesh:r,r:t,type:e,active:!1,p:new m,v:new m,life:0}};for(let e=0;e<4;e++)d.push(f(`hoop`),f(`goal`));let p={phase:`idle`,power:0,target:null},h={active:!1,camera:new ze(42,16/9,.1,600),t:0},g=0;function _(e){let n=null,i=1/0,a=r?[6,42]:[22,125];for(let r of l){let o=Fi(t,e.s,r.s);o>=a[0]&&o<260&&o<i&&r.attempted!==e.lapKey&&(n=r,i=o)}return n?{t:n,ds:i,inRange:i>=a[0]&&i<=a[1]}:null}function v(e,t,n){let a=d.find(t=>!t.active&&t.type===e.type);if(!a)return;let s=Math.sin(t.h),c=Math.cos(t.h);a.p.set(t.x+s*1.2,r?1:1.35,t.z+c*1.2);let l=new m,u,f=a.p.distanceTo(e.type===`hoop`?e.rim:e.mouth);if(e.type===`hoop`){u=r?.8+f/60:.9+f/120,l.copy(e.rim),l.y+=2*o;let t=0;if(n!==`perfect`){let r=Math.random()*Math.PI*2,i=n===`good`?e.rimR*(.45+Math.random()*.4):e.rimR*(1.3+Math.random()*1.2);l.x+=Math.cos(r)*i,l.z+=Math.sin(r)*i,t=n===`good`?.6:1.2}let i=(r?4:7)+f*.06,s=Aa.copy(l).sub(a.p).setY(0).normalize();a.script={p0:a.p.clone(),a:l.clone(),tau:u,t:0,c1:a.p.clone().addScaledVector(s,f*.35).add(ja.set(0,i,0)),c2:l.clone().add(ja.set(0,i*.8,0)),vEnd:s.clone().multiplyScalar(t).setY(-7.5*o)}}else{u=r?M.clamp(f/18,.5,1):M.clamp(f/48,.6,1.2);let t=e.keeper,i=t.x>0?-1:1,a,s;if(n===`perfect`)a=i*(e.width/2-.7*o),s=e.height-.55*o;else if(n===`good`)a=(Math.random()-.5)*(e.width-2.5*o),s=(.6+Math.random()*1.6)*o;else{let t=Math.random()<.6;a=t?i*(e.width/2+.8+Math.random()*2):(Math.random()-.5)*e.width,s=t?1:e.height+.8+Math.random()}l.copy(e.mouth).addScaledVector(e.across,a).setY(s),t.aimX=a,t.react=n===`perfect`?.42:n===`good`?Math.random()<.5?.12:.5:.2,t.arrive=u,t.t=0}if(e.type===`goal`&&(a.script=null,a.v.copy(l).sub(a.p).addScaledVector(ka,-.5*u*u).divideScalar(u)),a.active=!0,a.life=4,a.target=e,a.quality=n,a.rimTouched=a.boardTouched=a.scored=a.saved=a.reported=!1,a.prevDepth=void 0,a.prevY=a.p.y,a.mesh.visible=!0,a.mesh.position.copy(a.p),e.attempted=t.lapKey,i(`shot`,{type:e.type,quality:n}),h.active=!0,h.t=2.2,e.type===`hoop`){let t=new m().crossVectors(e.board.normal,new m(0,1,0));h.camera.position.copy(e.rim).addScaledVector(e.board.normal,5.5*o).addScaledVector(t,2.5*o).add(Aa.set(0,-1.2*o,0)),h.look=e.rim.clone()}else h.camera.position.copy(e.mouth).addScaledVector(e.inward,-(e.depth+3.5*o)).setY(2.6*o),h.look=e.mouth.clone().addScaledVector(e.inward,6).setY(1.2*o);h.camera.lookAt(h.look)}let y=(e,t,n,r,i,a)=>{let o=1-i;return a.copy(e).multiplyScalar(o*o*o).addScaledVector(t,3*o*o*i).addScaledVector(n,3*o*i*i).addScaledVector(r,i*i*i)};function b(e,t){let n=e.target;if(e.life-=t,e.script){let n=e.script;n.t+=t;let r=Math.min(1,n.t/n.tau),i=ja.copy(e.p);y(n.p0,n.c1,n.c2,n.a,r,e.p),e.v.copy(e.p).sub(i).divideScalar(Math.max(t,1e-4)),r>=1&&(e.script=null,e.v.copy(n.vEnd)),e.prevY=e.p.y,e.mesh.position.copy(e.p),e.mesh.rotation.x+=t*6}else{if(e.v.addScaledVector(ka,t),e.p.addScaledVector(e.v,t),n.type===`hoop`){for(let t=0;t<24;t++){let r=t/24*Math.PI*2;Aa.set(n.rim.x+Math.cos(r)*n.rimR,n.rim.y,n.rim.z+Math.sin(r)*n.rimR),ja.copy(e.p).sub(Aa);let a=ja.length(),o=e.r+.035;if(a<o&&a>1e-4){ja.divideScalar(a);let t=e.v.dot(ja);t<0&&(e.v.addScaledVector(ja,-1.55*t),e.v.multiplyScalar(.9)),e.p.copy(Aa).addScaledVector(ja,o),e.rimTouched||i(`rim`,{type:`hoop`}),e.rimTouched=!0}}let t=Aa.copy(e.p).sub(n.board.center),r=t.dot(n.board.normal);if(Math.abs(r)<e.r){let a=new m().crossVectors(n.board.normal,new m(0,1,0));if(Math.abs(t.dot(a))<n.board.w/2&&Math.abs(t.y)<n.board.h/2){let t=e.v.dot(n.board.normal);t*Math.sign(r||1)<0&&(e.v.addScaledVector(n.board.normal,-1.5*t),i(`board`,{}),e.boardTouched=!0),e.p.addScaledVector(n.board.normal,(e.r-Math.abs(r))*Math.sign(r||1))}}!e.scored&&e.prevY>n.rim.y&&e.p.y<=n.rim.y&&Math.hypot(e.p.x-n.rim.x,e.p.z-n.rim.z)<n.rimR-e.r*.25&&(e.scored=!0,e.v.multiplyScalar(.35),e.v.x*=.3,e.v.z*=.3,n.art.swish?.(0),n.swishT=0,i(`score`,{type:`hoop`,swish:!e.rimTouched&&!e.boardTouched,perfect:e.quality===`perfect`,pos:n.rim.clone()}))}else{let t=n.keeper,r=Aa.copy(e.p).sub(n.mouth),a=r.dot(n.inward),s=r.dot(n.across);if(!e.scored&&!e.saved&&a<1*o&&a>-.3){let r=t.dive?2.1*o:.9*o;Math.abs(s-t.x)<r&&e.p.y<(t.dive?2.3:2.1)*o&&t.t>t.react&&(e.saved=!0,e.v.addScaledVector(n.inward,-2*e.v.dot(n.inward)).multiplyScalar(.45),e.v.y+=3,i(`save`,{pos:e.p.clone()}))}if(!e.scored&&!e.saved&&!e.reported&&a<0&&e.prevDepth>=0){let t=e.prevDepth/(e.prevDepth-a),r=e.prevX+(s-e.prevX)*t,o=e.prevYg+(e.p.y-e.prevYg)*t;Math.abs(r)<n.width/2-e.r*.5&&o<n.height-e.r*.5?(e.scored=!0,n.art.celebrate?.(),i(`score`,{type:`goal`,perfect:e.quality===`perfect`,pos:e.p.clone()})):(e.reported=!0,i(`miss`,{type:`goal`}))}e.prevX=s,e.prevYg=e.p.y,e.scored&&a<-n.depth*.8&&e.v.multiplyScalar(.1),e.prevDepth=a}e.p.y<e.r&&(e.p.y=e.r,e.v.y=Math.abs(e.v.y)*.55,e.v.x*=.8,e.v.z*=.8),e.prevY=e.p.y,e.mesh.position.copy(e.p),e.mesh.rotation.x+=e.v.length()*t*.8,e.mesh.rotation.z+=e.v.length()*t*.3,e.life<=0&&(e.active=!1,e.mesh.visible=!1,e.scored||e.saved||e.reported||i(`miss`,{type:n.type}))}}function x(e){for(let t of l){if(t.type!==`goal`)continue;let n=t.keeper;if(n.t=(n.t??0)+e,n.t>(n.react??0)&&n.arrive){let t=n.aimX-n.x;n.x+=Math.sign(t)*Math.min(Math.abs(t),e*5.5*o),Math.abs(t)>1.2*o&&n.t>n.react+.1&&(n.dive=Math.sign(t)),n.t>n.arrive+1.5&&(n.arrive=0,n.dive=0,n.aimX=0)}else n.arrive||(n.x+=(Math.sin(performance.now()/700+t.s)*(t.width/2-1.5*o)*.4-n.x)*Math.min(1,e*2));n.art.setPose({x:n.x/o,dive:n.dive,t:n.t})}}return{group:a,gaps:u,targets:l,shot:p,pip:h,reset(){for(let e of l)e.attempted=-1;for(let e of d)e.active=!1,e.mesh.visible=!1;p.phase=`idle`,p.power=0,p.held=!0,h.active=!1},update(e,n,r,a,o=!0){g-=e;let s=o?_(n):null;if(p.target=s,p.phase===`charging`){if(p.power+=e/Na,!r.shoot||p.power>=1.06){let e=p.power,r=e>=Ma.green[0]&&e<=Ma.green[1]?`perfect`:e>=Ma.yellow[0]&&e<=Ma.yellow[1]?`good`:`miss`;p.lockT&&Fi(t,n.s,p.lockT.s)>-6&&v(p.lockT,n,r),p.phase=`released`,p.result=r,p.releasedT=.6}}else p.phase===`released`?(p.releasedT-=e,p.releasedT<=0&&(p.phase=`idle`)):r.shoot&&!p.held&&(s&&s.inRange?(p.phase=`charging`,p.power=0,p.lockT=s.t,p.kind=s.t.type):s&&g<=0&&(i(`toofar`,{ds:s.ds}),g=1.2));p.held=r.shoot;for(let t of d)t.active&&b(t,e);x(e);for(let t of l)t.type===`hoop`&&t.swishT!=null&&(t.swishT+=e,t.art.swish?.(t.swishT),t.swishT>1.5&&(t.swishT=null));h.active&&(h.t-=e,h.t<=0&&(h.active=!1));let c=null;return s&&(Aa.copy(s.t.type===`hoop`?s.t.rim:s.t.aim).project(a),Aa.z<1&&(c={x:(Aa.x*.5+.5)*innerWidth,y:(-Aa.y*.5+.5)*innerHeight})),{next:s,screen:c}},dispose(){e.remove(a)}}}function Ra(){let e=[];for(let t=0;t<=12;t++){let n=t/12;e.push(new j(.28+.2*Math.sin(n*Math.PI*.9)+n*.08,n*1.1))}return e.push(new j(.05,1.12)),new h(e,20)}function za(e,t,n){let r=new C;r.name=`lanterns`,e.add(r);let i=t.def.lanterns||[],a=Ra(),o=i.map(([e,i],o)=>{let s=Ni(t,e),c=new Ie({color:16757575,emissive:16747039,emissiveIntensity:2.2,roughness:.8,side:2,transparent:!0,opacity:.95}),l=new Y(a,c),u=new Y(new qe(.12,10,8),new Fe({color:16770992}));u.position.y=.15;let d=new C;d.add(l,u),d.scale.setScalar(1.6);let f=s.x+s.nx*i,p=s.z+s.nz*i;d.position.set(f,2.6,p),r.add(d);let m=n.includes(o);return d.visible=!m,{i:o,x:f,z:p,holder:d,mat:c,got:m,rising:0,phase:o*1.7}});return{group:r,items:o,total:11,update(e,t,n,r){for(let i of o)i.rising>0?(i.rising+=e,i.holder.position.y+=e*(2+i.rising*4),i.mat.opacity=Math.max(0,.95-i.rising/3),i.rising>3&&(i.holder.visible=!1,i.rising=0)):i.got||(i.holder.position.y=2.6+Math.sin(t*1.4+i.phase)*.25,i.holder.rotation.y+=e*.4,i.mat.emissiveIntensity=2+Math.sin(t*6+i.phase)*.4,n&&Math.hypot(n.x-i.x,n.z-i.z)<3.4&&(i.got=!0,i.rising=.001,r(i)))},dispose(){e.remove(r)}}}var Ba=`
attribute float size; attribute float alpha; attribute vec3 pcol;
varying float vA; varying vec3 vC;
void main(){ vA = alpha; vC = pcol; vec4 mv = modelViewMatrix * vec4(position,1.0);
  gl_PointSize = size * (300.0 / -mv.z); gl_Position = projectionMatrix * mv; }`,Va=`
varying float vA; varying vec3 vC;
void main(){ vec2 p = gl_PointCoord - 0.5; float d = length(p); if (d > 0.5) discard;
  float a = smoothstep(0.5, 0.0, d); gl_FragColor = vec4(vC * (1.0 + a * 2.0), a * vA); }`,Ha=new W;function Ua(e,t,n=!1){let r=new se,i=new Float32Array(e*3),a=new Float32Array(e*3),o=new Float32Array(e),s=new Float32Array(e);r.setAttribute(`position`,new we(i,3).setUsage(d)),r.setAttribute(`pcol`,new we(a,3).setUsage(d)),r.setAttribute(`size`,new we(o,1).setUsage(d)),r.setAttribute(`alpha`,new we(s,1).setUsage(d));let c=new Se({vertexShader:Ba,fragmentShader:Va,transparent:!0,depthWrite:n,blending:t}),l=new be(r,c);l.frustumCulled=!1;let u=[];return{points:l,parts:u,max:e,spawn(t){u.length<e&&u.push(t)},update(e){let t=0;for(let n=0;n<u.length;n++){let r=u[n];if(r.life-=e,r.life<=0)continue;r.vy-=(r.g??9.8)*e;let c=r.drag??0;if(c){let t=Math.exp(-c*e);r.vx*=t,r.vy*=t,r.vz*=t}r.x+=r.vx*e,r.y+=r.vy*e,r.z+=r.vz*e,r.y<.02&&r.bounce&&(r.y=.02,r.vy*=-.3,r.vx*=.6,r.vz*=.6),u[t++]=r;let l=t-1,d=r.life/r.max;i[l*3]=r.x,i[l*3+1]=r.y,i[l*3+2]=r.z;let f=r.fade?Ha.copy(r.color).lerp(r.fade,1-d):r.color;a[l*3]=f.r,a[l*3+1]=f.g,a[l*3+2]=f.b,o[l]=r.size*(r.grow?1+(1-d)*r.grow:1),s[l]=Math.min(1,d*2)*(r.a??1)}u.length=t,r.setDrawRange(0,t);for(let e of[`position`,`pcol`,`size`,`alpha`])r.attributes[e].needsUpdate=!0}}}function Wa(e){let t=Ua(3e3,2),n=Ua(400,1);n.points.material.fragmentShader=`varying float vA; varying vec3 vC; void main(){ vec2 p = gl_PointCoord - 0.5; float d = length(p); if (d > 0.5) discard; gl_FragColor = vec4(vC, smoothstep(0.5,0.1,d) * vA * 0.35); }`,n.points.renderOrder=2,e.add(t.points,n.points);let r=new Ce(.09,.05),i=new Fe({side:2,toneMapped:!1}),a=new z(r,i,500);a.instanceMatrix.setUsage(d),a.count=0,a.frustumCulled=!1,e.add(a);let o=[],s=[`#ffc61a`,`#d81e2c`,`#ffffff`,`#3fd0ff`,`#7b3ff2`,`#ff7a00`,`#f5b8cb`].map(e=>new W(e)),c=new ge,l=new oe,f=new u,p=new m(1,1,1),h=new m,g=e=>new W(e);return{sparks(e,n,r,i,a,o=14){for(let s=0;s<o;s++)t.spawn({x:e,y:n,z:r,vx:i*.6+(Math.random()-.5)*8,vy:Math.random()*4,vz:a*.6+(Math.random()-.5)*8,life:.25+Math.random()*.35,max:.6,size:.12+Math.random()*.1,color:g(16765562),fade:g(16730640),bounce:!0,g:12})},skidSparks(e,n,r,i){for(let a=0;a<3;a++)t.spawn({x:e,y:.05,z:n,vx:r*.8+(Math.random()-.5)*3,vy:Math.random()*1.5,vz:i*.8+(Math.random()-.5)*3,life:.15+Math.random()*.2,max:.35,size:.08,color:g(16773296),fade:g(16738816),bounce:!0,g:6})},smoke(e,t,r,i,a=1){n.spawn({x:e,y:.3,z:t,vx:r*.3+(Math.random()-.5),vy:.6+Math.random()*.6,vz:i*.3+(Math.random()-.5),life:1.2+Math.random(),max:2.2,size:1.2*a,grow:3,color:g(13225172),g:-.2,drag:1.4})},flame(e,n,r,i,a,o=6982911){for(let s=0;s<2;s++)t.spawn({x:e,y:n,z:r,vx:-i*(6+Math.random()*4)+(Math.random()-.5),vy:Math.random()-.3,vz:-a*(6+Math.random()*4)+(Math.random()-.5),life:.12+Math.random()*.1,max:.22,size:.35+Math.random()*.2,color:g(16777215),fade:g(o),g:0})},sparkle(e,n,r,i=16765562,a=30,o=4){for(let s=0;s<a;s++){let a=Math.random()*Math.PI*2,s=Math.random()*Math.PI-Math.PI/2,c=o*(.5+Math.random()*.5);t.spawn({x:e,y:n,z:r,vx:Math.cos(a)*Math.cos(s)*c,vy:Math.sin(s)*c+1,vz:Math.sin(a)*Math.cos(s)*c,life:.6+Math.random()*.6,max:1.2,size:.15+Math.random()*.15,color:g(i),g:2,drag:1.5})}},firework(e,n,r,i=Math.random()){let a=new W().setHSL(i,1,.6),o=new W().setHSL((i+.1)%1,1,.7),s=18+Math.random()*8;for(let i=0;i<160;i++){let c=Math.random()*2-1,l=Math.random()*Math.PI*2,u=Math.sqrt(1-c*c);t.spawn({x:e,y:n,z:r,vx:u*Math.cos(l)*s,vy:c*s,vz:u*Math.sin(l)*s,life:1.6+Math.random()*.8,max:2.4,size:1.6+Math.random(),color:i%3?a:o,fade:g(16747069),g:4,drag:1.1})}},confetti(e,t,n,r=160,i=6){for(let a=0;a<r&&o.length<500;a++)o.push({x:e+(Math.random()-.5)*i,y:t+Math.random()*2,z:n+(Math.random()-.5)*i,vx:(Math.random()-.5)*6,vy:4+Math.random()*6,vz:(Math.random()-.5)*6,rx:Math.random()*6,ry:Math.random()*6,sx:(Math.random()-.5)*14,sy:(Math.random()-.5)*14,life:3+Math.random()*2,color:s[a%s.length]})},update(e){t.update(e),n.update(e);let r=0;for(let t of o)t.life-=e,t.life<=0||(t.vy-=6*e,t.vx*=Math.exp(-1.5*e),t.vz*=Math.exp(-1.5*e),t.vy=Math.max(t.vy,-2.2),t.x+=t.vx*e,t.y+=t.vy*e,t.z+=t.vz*e,t.rx+=t.sx*e,t.ry+=t.sy*e,t.y<.01&&(t.y=.01,t.vy=0,t.vx=t.vz=0,t.sx=t.sy=0),l.setFromEuler(f.set(t.rx,t.ry,0)),a.setMatrixAt(r,c.compose(h.set(t.x,t.y,t.z),l,p)),a.setColorAt(r,t.color),o[r++]=t);o.length=r,a.count=r,a.instanceMatrix.needsUpdate=!0,a.instanceColor&&(a.instanceColor.needsUpdate=!0)},clear(){t.parts.length=0,n.parts.length=0,o.length=0},attach(e){e.add(t.points,n.points,a)}}}var Ga=2e3;function Ka(e){let t=document.createElement(`canvas`);t.width=360,t.height=180;let n=t.getContext(`2d`);n.textAlign=`center`,n.textBaseline=`middle`;let r=(e,t,r,i)=>{n.fillStyle=i,n.beginPath(),n.arc(e,t,r,0,Math.PI*2),n.fill()};if(e===`car`)n.fillStyle=`#1f4fff`,n.beginPath(),n.moveTo(20,118),n.lineTo(70,108),n.lineTo(150,100),n.lineTo(175,80),n.lineTo(205,78),n.lineTo(225,92),n.lineTo(285,96),n.lineTo(300,70),n.lineTo(338,66),n.lineTo(340,120),n.lineTo(20,126),n.closePath(),n.fill(),n.fillStyle=`#ffc61a`,n.fillRect(150,104,120,8),n.fillStyle=`#ff2d2d`,n.fillRect(14,120,46,8),n.fillRect(300,60,44,10),r(85,128,26,`#e8e8e8`),r(280,128,28,`#e8e8e8`),r(85,128,14,`#ffc61a`),r(280,128,15,`#ffc61a`);else if(e===`basketball`)r(180,90,80,`#ff7a1a`),n.strokeStyle=`#2a1408`,n.lineWidth=6,n.beginPath(),n.arc(180,90,80,0,Math.PI*2),n.stroke(),n.beginPath(),n.moveTo(100,90),n.lineTo(260,90),n.stroke(),n.beginPath(),n.moveTo(180,10),n.lineTo(180,170),n.stroke(),n.beginPath(),n.ellipse(120,90,34,76,0,-Math.PI/2,Math.PI/2),n.stroke(),n.beginPath(),n.ellipse(240,90,34,76,0,Math.PI/2,Math.PI*1.5),n.stroke();else if(e===`football`){r(180,90,80,`#ffffff`),n.fillStyle=`#2b4cff`;let e=(e,t,r)=>{n.beginPath();for(let i=0;i<5;i++){let a=-Math.PI/2+i*2*Math.PI/5;n.lineTo(e+Math.cos(a)*r,t+Math.sin(a)*r)}n.fill()};e(180,90,26),e(180,30,18),e(240,75,18),e(220,145,18),e(140,145,18),e(120,75,18)}else if(e===`cake`){n.fillStyle=`#f5b8cb`,n.fillRect(80,110,200,50),n.fillStyle=`#ffffff`,n.fillRect(110,72,140,40),n.fillStyle=`#ffc61a`,n.fillRect(80,106,200,8),n.fillRect(110,68,140,6);for(let e of[150,210])n.fillStyle=`#7fd4ff`,n.fillRect(e-5,34,10,34),r(e,26,9,`#ffb000`),r(e,24,5,`#fff3c0`)}else if(e===`thai`)n.fillStyle=`#ffd36b`,n.font=`700 52px "Noto Sans Thai", "Leelawadee UI", "Leelawadee", Tahoma, sans-serif`,n.fillText(`สุขสันต์วันเกิด`,180,90,340);else if(e===`eleven`){let e=n.createLinearGradient(0,0,360,180);e.addColorStop(0,`#ffc61a`),e.addColorStop(.5,`#ff4d6d`),e.addColorStop(1,`#3fd0ff`),n.fillStyle=e,n.font=`italic 900 150px "Arial Black", Arial, sans-serif`,n.fillText(`11`,180,96)}else{let t=n.createLinearGradient(0,0,360,0);t.addColorStop(0,`#ffc61a`),t.addColorStop(1,`#ff8a1f`),n.fillStyle=t,n.font=`italic 900 78px "Arial Black", Arial, sans-serif`,n.fillText(e,180,92,350)}let i=n.getImageData(0,0,360,180).data,a=[];for(let e=0;e<180;e+=1)for(let t=0;t<360;t+=1){let n=(e*360+t)*4;i[n+3]>140&&a.push([t/360-.5,.5-e/180,i[n]/255,i[n+1]/255,i[n+2]/255])}for(let e=a.length-1;e>0;e--){let t=Math.floor(Math.random()*(e+1));[a[e],a[t]]=[a[t],a[e]]}return a}function qa({scene:e,camera:t,fx:n,audio:r,bus:i,origin:a,look:o}){let s=new se,c=new Float32Array(Ga*3),l=new Float32Array(Ga*3),u=new Float32Array(Ga*3),d=new Float32Array(Ga*3),f=new Float32Array(Ga*3),p=new Float32Array(Ga*3);s.setAttribute(`position`,new we(c,3)),s.setAttribute(`pcol`,new we(l,3));let h=new Se({transparent:!0,depthWrite:!1,blending:2,uniforms:{uTime:{value:0}},vertexShader:`attribute vec3 pcol; varying vec3 vC; uniform float uTime;
      void main(){ vC = pcol * (0.85 + 0.15 * sin(uTime * 4.0 + position.x * 0.7)); vec4 mv = modelViewMatrix * vec4(position, 1.0);
      gl_PointSize = 520.0 / -mv.z; gl_Position = projectionMatrix * mv; }`,fragmentShader:`varying vec3 vC; void main(){ float d = length(gl_PointCoord - 0.5); if (d > 0.5) discard;
      float a = smoothstep(0.5, 0.05, d); gl_FragColor = vec4(vC * (0.55 + a * 0.9), a); }`}),g=new be(s,h);g.frustumCulled=!1;let _=o.clone(),v=a.clone().sub(_).setY(0).normalize(),y=new m(0,1,0).cross(v).normalize(),b=[`car`,`basketball`,`football`,`cake`,`ZOVEER`,`thai`,`eleven`].map(e=>({k:e,pts:Ka(e)})),x=(e,t,n)=>{let r=t*9301%100/100-.5;n[0]=_.x+y.x*e[0]*190+v.x*r*6,n[1]=_.y+e[1]*95,n[2]=_.z+y.z*e[0]*190+v.z*r*6};function S(e){u.set(c),f.set(l);let t=[0,0,0];for(let n=0;n<Ga;n++){let r=e.pts[n%e.pts.length];x(r,n,t),d[n*3]=t[0],d[n*3+1]=t[1],d[n*3+2]=t[2],p[n*3]=r[2],p[n*3+1]=r[3],p[n*3+2]=r[4]}}let C=0,w=-1,T=1,E=!1,ee=0,D=!1;function O(){e.add(g);for(let e=0;e<Ga;e++){let t=e%40-20,n=Math.floor(e/40)-17;c[e*3]=_.x+y.x*t*2.2+v.x*n*2.2,c[e*3+1]=2,c[e*3+2]=_.z+y.z*t*2.2+v.z*n*2.2,l[e*3]=.6,l[e*3+1]=.7,l[e*3+2]=1}s.attributes.position.needsUpdate=s.attributes.pcol.needsUpdate=!0,C=0,w=-1,T=1,E=!0,ee=0,D=!1,t.position.copy(a),t.lookAt(_.x,_.y*.6,_.z),t.fov=55,t.updateProjectionMatrix(),i.emit(`game:finale`,{phase:`drones`}),r.birthdaySong(),r.speak(`Zoveer, look up. This one is for you.`,{interrupt:!0})}function k(e){if(!E)return;C+=e,h.uniforms.uTime.value=C;let o=C<3?-1:Math.min(b.length-1,Math.floor((C-3)/4));if(o!==w&&(w=o,w>=0&&(S(b[w]),T=0)),w<0)for(let e=0;e<Ga;e++)c[e*3+1]=2+Math.min(1,C/3)**2*(_.y-20)*(e%7/7*.5+.5);else if(T<1){T=Math.min(1,T+e/1.8);let t=T<.5?4*T**3:1-(-2*T+2)**3/2;for(let e=0;e<Ga*3;e++)c[e]=u[e]+(d[e]-u[e])*t,l[e]=f[e]+(p[e]-f[e])*t}if(s.attributes.position.needsUpdate=s.attributes.pcol.needsUpdate=!0,t.position.lerp(A.copy(a).addScaledVector(v,-18),e*.02),t.lookAt(_.x,_.y*.62,_.z),ee-=e,C>6&&ee<=0){ee=C>26?.35:1.6;let e=(Math.random()-.5)*190*1.4;n.firework(_.x+y.x*e,_.y+10+Math.random()*40,_.z+y.z*e-v.z*30),r.fx.firework()}!D&&C>3+4*(b.length-1)+1.5&&(D=!0,i.emit(`game:finale`,{phase:`message`}))}let A=new m;return{start:O,update:k,get running(){return E},stop(){E=!1,e.remove(g),i.emit(`game:finale`,{phase:`done`})}}}var Ja=[[-6,22],[5,24],[0,26],[-9,20],[8,21]],Ya=7.32,Xa=2.44,Za=.11,Qa=9.81;function $a({scene:e,sports:t,world:n,fx:r,audio:i,bus:a,camera:o,store:s}){let c=new C;e.add(c);let l=t?.createGoal?t.createGoal({kit:`#ffffff`,scale:`real`}):null;l&&c.add(l.root);let u=t?.createKeeper?t.createKeeper({kit:`#1db954`,scale:`real`}):null,d=new C;d.position.set(0,0,.4),u&&d.add(u.root),c.add(d);let f=t?.createDefenderWall?t.createDefenderWall(4,`#d81e2c`,{scale:`real`}):null;f&&c.add(f.root);let p=t?.createFootball?t.createFootball(Za):new Y(new qe(Za,20,14),new Ie({color:16777215}));c.add(p);let h=new Y(new He(.22,.3,32),new Fe({color:16762394,transparent:!0,opacity:.9,side:2,toneMapped:!1}));h.position.z=.05,c.add(h);let g={kick:0,goals:0,phase:`aim`,aimX:0,aimY:1.6,power:0,held:!0,p:new m,v:new m,curve:0,knuckle:!1,t:0,keeperX:0,keeperDive:0,keeperT:0,react:.3,wallX:0,wallZ:0,wallJump:0,result:null,resultT:0,perfects:0};function _(){let[e,t]=Ja[g.kick];g.p.set(e,Za,t),p.position.copy(g.p),p.rotation.set(0,0,0),g.phase=`aim`,g.power=0,g.aimX=-Math.sign(e||1)*2.4,g.aimY=1.7,g.t=0,g.result=null,g.keeperX=0,g.keeperDive=0,g.wallJump=0;let n=new m(-e,0,-t).normalize(),r=g.p.clone().addScaledVector(n,9.15);g.wallX=r.x+Math.sign(e||1)*.5,g.wallZ=r.z,f&&(f.root.position.set(g.wallX,0,g.wallZ),f.root.rotation.y=Math.atan2(n.x,n.z)+Math.PI,f.root.position.y=0),a.emit(`game:freekick`,{kick:g.kick+1,of:Ja.length,goals:g.goals,phase:`aim`})}function v(e,t){let n=new m(g.curve,-9.81,0);return e.clone().sub(g.p).addScaledVector(n,-.5*t*t).divideScalar(t)}function y(){let e=g.power,t=e>=Ma.green[0]&&e<=Ma.green[1]?`perfect`:e>=Ma.yellow[0]&&e<=Ma.yellow[1]?`good`:`miss`,n=new m(g.aimX,g.aimY,0);if(t===`good`){let e=Math.random()*Math.PI*2,t=.35+Math.random()*.5;n.x+=Math.cos(e)*t,n.y+=Math.sin(e)*t*.6}t===`miss`&&(n.x+=(Math.random()<.5?-1:1)*(1.4+Math.random()*1.8),n.y+=Math.random()*1.4-.2),n.y=Math.max(Za,n.y),g.knuckle=t===`perfect`,g.curve=g.knuckle?0:Math.sign(n.x-g.wallX||1)*4.5;let r=1;for(let e=.85;e<=1.7&&(r=e,t!==`miss`);e+=.05){let e=v(n,r),t=(g.wallZ-g.p.z)/e.z;if(g.p.y+e.y*t-.5*Qa*t*t>2.75)break}g.v.copy(v(n,r)),g.T=r,g.phase=`flight`,g.t=0;let o=t===`perfect`||t===`good`&&Math.random()<.5;g.react=o?.35:.2,g.keeperAim=o?-Math.sign(n.x||1)*3:n.x,g.quality=t,t===`perfect`&&g.perfects++,i.fx.kick(),a.emit(`game:shot`,{phase:`released`,power:e,green:Ma.green,yellow:Ma.yellow,kind:`goal`,result:t}),a.emit(`game:freekick`,{kick:g.kick+1,of:Ja.length,goals:g.goals,phase:`flight`})}function b(e){if(g.phase=`result`,g.result=e,g.resultT=0,e===`goal`)g.goals++,l?.celebrate?.(g.p.clone()),i.fx.cheer(1.2),i.fx.net(),r.confetti(g.p.x,2.5,g.p.z-1,220,8),r.sparkle(g.p.x,1.5,g.p.z-1,16762394,60,6),a.emit(`game:toast`,{text:g.knuckle?`KNUCKLEBALL!`:`GOAL!`,sub:`SIUUU`,kind:`goal`}),i.speak(g.knuckle?`Knuckleball! Siuuuuu!`:`Goal! Siuuuuu!`,{pitch:1.2,rate:.9,interrupt:!0});else{i.fx.cheer(.3);let t={save:`SAVED!`,post:`OFF THE POST!`,wide:`JUST WIDE`,wall:`HIT THE WALL`}[e];a.emit(`game:toast`,{text:t,kind:e===`save`?`save`:`miss`})}a.emit(`game:freekick`,{kick:g.kick+1,of:Ja.length,goals:g.goals,phase:`result`,result:e})}function x(e,t,n){if(g.t+=e,g.phase===`aim`||g.phase===`power`)g.aimX=M.clamp(g.aimX+t.steer*e*3.2,-7.32/2-1,4.66),g.aimY=M.clamp(g.aimY+(t.throttle-t.brake)*e*1.6,.3,3.04),h.position.set(g.aimX,g.aimY,.05),h.material.opacity=.6+Math.sin(g.t*8)*.3,g.phase===`aim`&&t.shoot&&!g.held&&(g.phase=`power`,g.power=0),g.phase===`power`&&(g.power+=e/.8,a.emit(`game:shot`,{phase:`charging`,power:g.power,green:Ma.green,yellow:Ma.yellow,kind:`goal`}),(!t.shoot||g.power>=1.06)&&y());else if(g.phase===`flight`){let t=g.knuckle?Math.sin(g.t*22)*3.5+Math.sin(g.t*37)*2:0;g.v.x+=(g.curve+t)*e,g.v.y-=Qa*e;let n=g.p.z;if(g.p.addScaledVector(g.v,e),p.position.copy(g.p),p.rotation.x-=(g.knuckle?2:18)*e,p.rotation.y+=g.curve*e*2,g.t<.6&&r.sparkle(g.p.x,g.p.y,g.p.z,g.knuckle?10475775:16777215,1,.3),g.wallJump=Math.max(0,Math.sin(Math.min(g.t*4,Math.PI))*.45),f&&(f.root.position.y=g.wallJump),n>g.wallZ&&g.p.z<=g.wallZ&&Math.abs(g.p.x-g.wallX)<1.75&&g.p.y<1.9+g.wallJump&&(g.v.z=Math.abs(g.v.z)*.3,g.v.y=2,i.fx.board(),b(`wall`)),g.t>g.react){let t=g.keeperAim-g.keeperX;g.keeperX+=Math.sign(t)*Math.min(Math.abs(t),e*6),Math.abs(t)>.9&&(g.keeperDive=Math.sign(t))}if(n>.4&&g.p.z<=.4&&g.phase===`flight`){let e=g.keeperDive?1.9:.8;Math.abs(g.p.x-g.keeperX)<e&&g.p.y<2.3&&g.t>g.react+.15&&(g.v.z=Math.abs(g.v.z)*.4,g.v.x*=.5,i.fx.board(),b(`save`))}if(n>0&&g.p.z<=0&&g.phase===`flight`){let e=Math.abs(g.p.x)<Ya/2-Za,t=g.p.y<2.33,n=Math.abs(Math.abs(g.p.x)-Ya/2)<.25||Math.abs(g.p.y-Xa)<.2;e&&t?b(`goal`):n?(g.v.z*=-.5,i.fx.rim(),b(`post`)):b(`wide`)}g.t>3&&g.phase===`flight`&&b(`wide`)}else g.phase===`result`&&(g.resultT+=e,g.p.z<0&&g.result===`goal`&&(g.v.multiplyScalar(Math.exp(-6*e)),g.p.z<-1.6&&(g.v.z=Math.abs(g.v.z)*.1)),g.v.y-=Qa*e,g.p.addScaledVector(g.v,e),g.p.y<Za&&(g.p.y=Za,g.v.y*=-.4,g.v.x*=.8,g.v.z*=.8),p.position.copy(g.p),g.resultT>2.6&&(g.kick++,g.kick>=Ja.length?(g.phase=`done`,n({goals:g.goals,perfects:g.perfects})):_()));g.held=t.shoot,u?.setPose({x:g.keeperX,dive:g.keeperDive,t:g.t});let s=new m(g.p.x,0,g.p.z).normalize();if(g.phase===`aim`||g.phase===`power`||g.phase===`done`){let[e,t]=Ja[Math.min(g.kick,Ja.length-1)],n=new m(e,0,t).normalize();o.position.set(e+n.x*4.2,1.75,t+n.z*4.2),o.lookAt(g.aimX*.4,1.2,0)}else{let t=new m(g.p.x+s.x*5,1.8+g.p.y*.3,g.p.z+s.z*5+1);g.phase===`result`&&g.result===`goal`&&g.resultT>.5&&t.set(g.p.x*.5+3,1.6,-6),o.position.lerp(t,Math.min(1,e*4)),o.lookAt(g.p.x*.7,Math.max(.8,g.p.y),Math.min(g.p.z,2))}o.fov!==50&&(o.fov=50,o.updateProjectionMatrix()),h.visible=g.phase===`aim`||g.phase===`power`}return _(),{group:c,step:x,state:g,dispose(){e.remove(c),c.traverse(e=>{e.geometry?.dispose();for(let t of[].concat(e.material||[]))t.map?.dispose(),t.dispose()})}}}var eo=`2026-11-09T00:00:00+07:00`,to=[[`lights_out`,`Lights Out`,`Finish your first race`,`🏁`],[`bangkok_champ`,`Bangkok Champion`,`Win the Birthday Grand Prix`,`🏆`],[`beat_med`,`Beat Medhansh`,`Finish ahead of Medhansh or beat his ghost lap`,`😤`],[`sorry_sis`,`Sorry, Sis`,`Finish ahead of Elaika`,`😅`],[`nothing_but_net`,`Nothing But Net`,`Make a swish from the car`,`🏀`],[`siuuu`,`SIUUU`,`Score a goal from the car`,`⚽`],[`hattrick`,`Hat-trick`,`Score 3 or more free kicks in one round`,`🎩`],[`knuckleball`,`Knuckleball`,`Score a perfect knuckleball free kick`,`🌀`],[`lantern_hunter`,`Lantern Hunter`,`Find all 11 birthday lanterns`,`🏮`],[`low_cortisol`,`Low Cortisol`,`Drive a full lap without touching a wall`,`🧘`],[`grind`,`The Grind Never Stops`,`Complete 25 laps`,`💪`],[`purple_patch`,`Purple Patch`,`Set a purple sector`,`🟣`],[`six_seven`,`6-7`,`Make 7 hoops in a row`,`🤷`],[`kart_king`,`Kart King`,`Win the rooftop kart race`,`👑`],[`aura_farmer`,`Aura Farmer`,`Collect 50,000 aura`,`✨`],[`birthday_boy`,`Birthday Boy`,`Open your birthday surprise`,`🎂`],[`noice`,`Noice.`,`Make 3 swishes in one race`,`👌`],[`light_speed`,`Light Speed`,`Hit 330 km/h`,`⚡`]],no=[{id:`kart`,title:`Where it all started`,sub:`Kart Club · Sky Kart Rooftop`,mode:`kart`,track:`rooftop`},{id:`freekick`,title:`Obra Free Kicks`,sub:`Five knuckleball free kicks`,mode:`freekick`,track:`stadium`},{id:`hoopattack`,title:`Hoop Attack`,sub:`Bangkok · every hoop takes time off`,mode:`hoopattack`,track:`bangkok`},{id:`quali`,title:`Qualifying: Beat Medhansh`,sub:`Beat Medhansh's ghost lap`,mode:`timetrial`,track:`bangkok`},{id:`gp`,title:`The Birthday Grand Prix`,sub:`3 laps · 8 cars · Bangkok by night`,mode:`gp`,track:`bangkok`}],ro={intro:[`Radio check, Zoveer. Welcome to Bangkok. Lights out in a moment. Let's make this a birthday to remember.`,`Radio check. Zoveer, the car is yours. Racing is life. Let's go.`],introKart:[`Kart Club, Zoveer. This is where it all started. Send it.`],introTT:[`Clear track, Zoveer. Medhansh set a lap. Go and beat it.`,`Track is yours. Push every corner.`],go:[`Go go go!`,`Lights out! Go!`],overtake:[`Nice move!`,`Great pass, Zoveer.`,`Cool cool cool. Next one.`],passMed:[`You just passed Medhansh. Noice.`,`Medhansh is behind you now. Bingpot!`],passEla:[`That was your sister. No mercy.`,`Elaika is behind you. Sorry, sis.`],lostMed:[`Medhansh just passed you. Get him back!`,`Medhansh is ahead. You know what to do.`],lostEla:[`Elaika got you! She will never let you forget it. Push!`,`Your sister just passed you. Not today.`],swish:[`Swish! Noice.`,`Nothing but net!`,`Bingpot!`],bucket:[`Bucket!`,`Good shot.`],goal:[`Goal! Siuuuu!`,`What a goal. Siuuuu!`],boostReady:[`SIU boost is ready. Use it.`,`Boost ready, Zoveer.`],purple:[`Purple sector!`,`That sector was purple. Mega.`],fastest:[`That's your fastest lap, Zoveer!`,`Personal best. Noice.`],lastLap:[`Final lap. The grind never stops.`,`Last lap, Zoveer. Bring it home.`],win:[`P1! Zoveer, you win the Bangkok Grand Prix! Happy birthday, mate!`],podium:[`That's a podium, Zoveer. Great drive.`],finish:[`Chequered flag. Good job, Zoveer.`],wall:[`Easy on the walls. Cool cool cool.`,`Little touch there. Stay calm, low cortisol.`],lantern:[`Lantern found!`],overtakeMode:[`Overtake mode available. Hit boost.`],ghostBeat:[`You beat Medhansh's lap! Noice!`],custom:[`{text}`]};async function io(i,a){let o={},s=Object.assign({"../art/sports.js":()=>it(()=>import(`./sports-BuUclnpG.js`),__vite__mapDeps([0,1,2,3]),import.meta.url),"../art/vehicles.js":()=>it(()=>import(`./vehicles-B9ikMsyH.js`),__vite__mapDeps([4,1,5,2,3]),import.meta.url),"../art/world/index.js":()=>it(()=>import(`./world-IYvO_bMy.js`),__vite__mapDeps([6,1]),import.meta.url)}),c=(e,t)=>s[e]?s[e]().then(e=>{o[t]=e}).catch(e=>console.error(`[zoveer] ${t} art failed`,e)):null;await Promise.all([c(`../art/vehicles.js`,`vehicles`),c(`../art/sports.js`,`sports`),c(`../art/world/index.js`,`world`)]);let l=Q.data.settings,u=aa(i,()=>l.quality),d=new ze(58,innerWidth/innerHeight,.2,4e3);addEventListener(`resize`,()=>{d.aspect=innerWidth/innerHeight,d.updateProjectionMatrix()});let f=ua(d);f.mode=l.camera;let p=ha(a),h=_a(Q),g={},_={mu:1.5,downforce:.0026,vmax:93,brake:1.3,accel:e=>Math.min(13,850/Math.max(e,5))-.0011*e*e},v={mu:1.28,downforce:0,vmax:27,brake:1.05,accel:e=>Math.min(9,16e3/170/Math.max(e,4))-.005*e*e};function y(e,t){let n=new je;return n.background=new W(461332),n.fog=new ee(e,t),n.environment=u.env,n.environmentIntensity=.35,{scene:n,lights:oa(n),fx:Wa(n)}}function b(e){if(g[e])return g[e];let t=u.quality();if(e===`stadium`){let n=y(725026,.004);n.id=e;try{n.art=o.world?.buildStadium?.(n.scene,{quality:t})}catch(e){console.error(e)}if(!n.art){let e=new Y(new Ce(80,70),new Ie({color:2059050}));e.rotation.x=-Math.PI/2,e.position.z=25,n.scene.add(e)}return n.lights.sun.position.set(10,40,30),n.lights.sun.target.position.set(0,0,12),g[e]=n}let n=xi[e],r=n.kind===`kart`,i=y(725026,r?8e-4:.0012);i.id=e,i.kart=r,i.track=ki(n),i.profile=ji(i.track,r?v:_),i.targets=La({scene:i.scene,track:i.track,sports:o.sports,kart:r,onEvent:(e,t)=>se(e,t)}),i.mesh=Ui(i.track,i.profile,{gaps:i.targets.gaps}),i.scene.add(i.mesh.group),i.mesh.racingLine.visible=l.racingLine;try{i.art=r?o.world?.buildRooftop?.(i.scene,i.track,{quality:t}):o.world?.buildBangkok?.(i.scene,i.track,{quality:t})}catch(e){console.error(`[zoveer] world build failed`,e)}return i.lanterns=r?null:za(i.scene,i.track,Q.data.progress.lanterns),i.rigs=w(i,r?`kart`:`f1`),g[e]=i}function x(e,t){let n=new C,r=t?1.9:5.4,i=t?1.3:1.9,a=new Y(new Ve(i*.45,.5,r*.85),new le({color:e.primary,clearcoat:1}));a.position.y=.45,a.castShadow=!0,n.add(a);let o={};for(let[e,t,a]of[[`fl`,1,1],[`fr`,-1,1],[`rl`,1,-1],[`rr`,-1,-1]]){let s=new C;s.position.set(t*i*.42,.36,a*r*.32);let c=new Y(new Ke(.36,.36,.35,16),new Ie({color:1118481}));c.rotation.z=Math.PI/2;let l=new C;l.add(c),s.add(l),n.add(s),o[e]={spin:l,steer:a>0?s:null}}return{root:n,wheels:o,wheelRadius:{front:.36,rear:.36},steeringWheel:null,setAero(){},setBrakeGlow(){},setRainLight(){},exhaust:null,cameraMounts:{},setLivery(){},setNumber(){},dispose(){}}}function S(e,t,n,r){let i=e===`kart`?o.vehicles?.createKart:o.vehicles?.createF1Car,a=null;try{a=i?i({livery:t,number:n,name:r}):null}catch(e){console.error(`[zoveer] car build failed`,e)}return a||=x(t,e===`kart`),a.root.traverse(e=>{e.isMesh&&(e.castShadow=!0)}),a}function w(t,n){let i=Q.data.profile,a=S(n,r[i.livery]||r.bull,i.number,`ZOVEER`);return t.scene.add(a.root),{player:a,rivals:e.map(e=>{let i=S(n,r[e.livery],e.number,e.name.toUpperCase());return t.scene.add(i.root),i}),ghosts:[]}}function T(e,t,n){let r=S(e.kart?`kart`:`f1`,t,0,n);return r.root.traverse(e=>{e.isMesh&&(e.castShadow=!1,e.material=(Array.isArray(e.material)?e.material:[e.material]).map(e=>{let t=e.clone();return t.transparent=!0,t.opacity=.32,t.depthWrite=!1,t}),e.material.length===1&&(e.material=e.material[0]))}),e.scene.add(r.root),r}new m(1,0,0);function E(e,t,n){e.root.position.set(t.x,0,t.z),e.root.rotation.y=t.h;let r=e.wheelRadius?.front||.36,i=(t.wheelRot||0)/r;for(let n of[`fl`,`fr`,`rl`,`rr`]){let r=e.wheels?.[n];r&&(r.spin&&(r.spin.rotation.x=i),r.steer&&(r.steer.rotation.y=t.steer||0))}e.steeringWheel&&(e.steeringWheel.rotation.z=-(t.steer||0)*6),e.setAero?.(t.aeroOpen||0),t===k?.player?.body&&(t.brakeHeat=Math.max(0,Math.min(1,(t.brakeHeat||0)+(t.brake>.3&&t.speed>20?1.2:-.35)*n)),e.setBrakeGlow?.(t.brakeHeat),e.setRainLight?.(t.throttle<.2&&t.speed>15&&Math.floor(performance.now()/120)%2==0||t.boost>0))}let D=`boot`,O=`splash`,k=null,A=null,j=null,M=null,N=!1,P=!1,F=0,I=0,L={t:0},R={};function z(e){D=e,a.emit(`game:state`,{state:e}),p.setNavEnabled(![`countdown`,`racing`].includes(e))}function B(e,t={},n=!1){if(L.t>0&&!n)return;let r=ro[e];if(!r)return;let i=r[Math.floor(Math.random()*r.length)];for(let[e,n]of Object.entries(t))i=i.replace(`{${e}}`,n);L.t=3.5,a.emit(`game:radio`,{from:`ENGINEER`,text:i}),h.speak(i,{interrupt:n})}function V(e,t=`info`,n){a.emit(`game:toast`,{text:e,kind:t,sub:n})}function H(e){let t=to.find(t=>t[0]===e);t&&!Q.data.progress.trophies[e]&&(Q.data.progress.trophies[e]=Date.now(),Q.save(),a.emit(`game:trophy`,{id:e,title:t[1],desc:t[2],icon:t[3]}),k?.newTrophies.push({id:e,title:t[1],desc:t[2],icon:t[3]}))}function U(e,t){if(!k)return;k.aura+=e,Q.data.progress.aura+=e;let n=innerWidth/2,r=innerHeight*.45;if(t){let e=t.clone().project(d);e.z<1&&(n=(e.x*.5+.5)*innerWidth,r=(-e.y*.5+.5)*innerHeight)}a.emit(`game:aura`,{amount:e,x:n,y:r}),h.fx.aura(),Q.data.progress.aura>=5e4&&H(`aura_farmer`)}function te(){let e=Q.data.progress;return{chapters:no.map((t,n)=>({...t,stars:e.stars[t.id]||0,locked:n>0&&!(e.stars[no[n-1].id]>0)})),lanterns:{found:e.lanterns.length,total:11},finaleUnlocked:e.finaleUnlocked,trophies:to.map(([t,n,r,i])=>({id:t,title:n,desc:r,icon:i,got:!!e.trophies[t]})),aura:e.aura}}function ne(){a.emit(`game:ready`,{profile:Q.data.profile,settings:l,progress:te(),liveries:t.map(e=>r[e]),numbers:n,tracks:Object.values(xi).map(e=>({id:e.id,name:e.name,kind:e.kind})),devices:{list:p.devices,active:p.kind}}),a.emit(`game:countdown`,{target:eo,label:`Zoveer turns 11 · Bangkok time`})}function re(){A=b(`bangkok`);let e=A,t=e.mesh.grid,n={...t[0]},r=ba(`f1`,e.track);xa(r,n.s,n.d),E(e.rigs.player,r,0),e.rigs.player.root.visible=!0,e.rigs.rivals.forEach((n,r)=>{let i=ba(`f1`,e.track);xa(i,t[r+1].s,t[r+1].d),E(n,i,0),n.root.visible=!0}),e.menuCenter=new m(r.x,0,r.z),e.menuHeading=r.h,e.lights.follow(r.x,r.z)}function ie(t){let n=t.mode;if(ae(),h.stopMusic(),n===`freekick`)return oe(t);let i=n===`kart`?`rooftop`:t.track||`bangkok`;z(`loading`);let o=b(i);A=o;let s=o.kart,c=s?`kart`:`f1`,u=n===`gp`||n===`kart`,d=window.__zgpTest?.laps||(n===`hoopattack`?2:3),p=o.track,m=p.def.startS,g=ba(c,p),_=o.mesh.grid,v=u?7:0;u?xa(g,_[v].s,_[v].d):xa(g,m-150,p.line.offset[Math.round((m-150)/p.step)]||0);let y=o.rigs.player,x=Q.data.profile;y.setLivery?.(r[x.livery]||r.bull),y.setNumber?.(x.number),y.root.visible=!0;let S=[];o.rigs.rivals.forEach((t,n)=>{if(t.root.visible=u,!u)return;let i=e[n],a=wa(p,o.profile,ya[c],{s:_[n].s,d:_[n].d,skill:i.skill*.95,name:i.name,code:i.code});a.dist=Fi(p,m,_[n].s),a.rig=t,a.color=r[i.livery].primary,a.livery=i.livery,a.band=1,Da(a),E(t,a,0),S.push(a)});let C=[];if(o.rigs.ghosts.forEach(e=>{o.scene.remove(e.root),e.dispose?.()}),o.rigs.ghosts=[],!u){let e=`${i}:${n}`;R[i]||(R[i]=Oa(p,o.profile,ya[c],s?.9:.87,m));let t=R[i];if(t){let e=T(o,r.medhansh,`MEDHANSH`);o.rigs.ghosts.push(e),C.push({name:`Medhansh`,code:`MED`,color:r.medhansh.primary,frames:t.frames,time:t.time,rig:e})}let a=Q.data.ghosts[e];if(a){let e=T(o,r[x.livery]||r.bull,`BEST`);o.rigs.ghosts.push(e),C.push({name:`Your best`,code:`PB`,color:`#ffffff`,frames:a.frames,time:a.time,rig:e})}}o.targets.reset(),o.fx.clear(),k={mode:n,trackId:i,w:o,kart:s,race:u,laps:d,chapter:t.chapter,player:{body:g,rig:y,dist:u?Fi(p,m,_[v].s):-150,lap:0,lapStart:0,lapTimes:[],best:1/0,sector:0,sectorStart:0,sectorTimes:[null,null,null],sectorState:[null,null,null],finished:!1,finishTime:0,wallThisLap:!1,cleanLaps:0,topSpeed:0,frames:[],frameT:0,boost:0,boostT:0,overtakeT:0,overtakeLap:-1,autopilot:null},ais:S,ghosts:C,time:0,raceStarted:!1,lightsT:0,lightsN:0,lightsOutAt:0,hoops:{made:0,att:0},goals:{made:0,att:0},swishes:0,streak:0,aura:0,bonus:0,lanternsFound:0,newTrophies:[],order:[],resultsSent:!1,results:null},g.lapKey=0,f.snapTo(g),f.mode=l.camera,h.startRace(c);let w=p.samples.filter((e,t)=>t%3==0),ee=1/0,D=-1/0,O=1/0,j=-1/0;for(let e of p.samples)ee=Math.min(ee,e.x),D=Math.max(D,e.x),O=Math.min(O,e.z),j=Math.max(j,e.z);let M=Math.max(D-ee,j-O);k.norm=(e,t)=>[(e-ee)/M+(1-(D-ee)/M)/2,(t-O)/M+(1-(j-O)/M)/2];let N=Ni(p,m);if(a.emit(`game:trackmap`,{points:w.map(e=>k.norm(e.x,e.z)),start:k.norm(N.x,N.z),lanterns:(p.def.lanterns||[]).map(([e,t],n)=>({i:n,got:Q.data.progress.lanterns.includes(n),p:(()=>{let n=Ni(p,e);return k.norm(n.x+n.nx*t,n.z+n.nz*t)})()})).filter(e=>!e.got).map(e=>e.p)}),z(`countdown`),u){k.lightsT=0;let e=Math.ceil((Date.parse(eo)-Date.now())/864e5);!s&&e>=1&&e<=30&&Math.random()<.6?B(`custom`,{text:`Radio check, Zoveer. ${[``,`One day`,`Two days`,`Three days`,`Four days`,`Five days`,`Six days`,`Seven days`][e]||`${e} days`} until you turn eleven. Let's get a win in Bangkok first.`},!0):!s&&Date.now()>=Date.parse(eo)&&Date.now()<Date.parse(eo)+864e5?B(`custom`,{text:`Happy birthday, Zoveer! Eleven today. Lights out in a moment, let's celebrate with a win.`},!0):B(s?`introKart`:`intro`,{},!0)}else B(`introTT`,{},!0),k.raceStarted=!0,z(`racing`)}function ae(){M&&=(M.dispose(),null),j?.running&&j.stop(),`speechSynthesis`in window&&(speechSynthesis.cancel(),speechSynthesis.resume()),h.setPaused(!1),k&&=(k.w.targets?.reset(),h.stopRace(),k.w.rigs&&(k.w.rigs.ghosts.forEach(e=>{k.w.scene.remove(e.root),e.dispose?.()}),k.w.rigs.ghosts=[]),null),N=!1,P=!1}function oe(e){let t=b(`stadium`);A=t,k={mode:`freekick`,w:t,chapter:e.chapter,newTrophies:[],aura:0,player:null,ais:[]},M=$a({scene:t.scene,sports:o.sports,world:t.art,fx:t.fx,audio:h,bus:a,camera:d,store:Q}),h.startRace(`kart`),h.updateRace({rpm:0,throttle:0,speed:0,slip:0,onKerb:0,scrape:0,boost:0},[],.5),B(`goal`,{},!0),a.emit(`game:radio`,{from:`COACH`,text:`Obra Free Kicks. Five shots. Aim with steering, hold SHOOT, release in the green.`}),z(`racing`)}function se(e,t){if(!k||!k.player)return;let n=k.player;if(e===`shot`)t.type===`hoop`?k.hoops.att++:k.goals.att++,h.fx[t.type===`hoop`?`click`:`kick`](),a.emit(`game:shot`,{phase:`released`,power:k.w.targets.shot.power,green:Ma.green,yellow:Ma.yellow,kind:t.type,result:t.quality});else if(e===`score`){let e=t.type===`hoop`;e?(k.hoops.made++,k.streak++,t.swish?(k.swishes++,h.fx.swish(),V(`SWISH!`,`swish`,k.mode===`hoopattack`?`−1.0 s`:`Nothing but net`),H(`nothing_but_net`),B(`swish`),U(1e3,t.pos)):(h.fx.net(),V(`BUCKET!`,`bucket`,k.mode===`hoopattack`?`−0.5 s`:null),B(`bucket`),U(500,t.pos)),k.bonus+=t.swish?1:.5,k.swishes>=3&&H(`noice`),k.streak===7&&!Q.data.progress.sixSeven&&(Q.data.progress.sixSeven=!0,Q.save(),V(`6-7!`,`sixseven`,`7 in a row`),h.fx.sixseven(),H(`six_seven`),k.w.fx.confetti(t.pos.x,t.pos.y,t.pos.z,160))):(k.goals.made++,h.fx.net(),h.fx.cheer(1),V(`GOAL!`,`goal`,`SIUUU`),B(`goal`,{},!0),H(`siuuu`),U(1500,t.pos),k.bonus+=1,k.w.fx.confetti(t.pos.x,t.pos.y+1,t.pos.z,200,8)),k.w.fx.sparkle(t.pos.x,t.pos.y,t.pos.z,e?16747039:16777215,40,5),n.boost=Math.min(1,n.boost+(t.perfect?.5:.34)),n.boost>=1&&!n.boostAnnounced&&(n.boostAnnounced=!0,V(`SIU BOOST READY`,`boost`),B(`boostReady`)),p.rumble(.6,.9,220)}else e===`miss`?(t.type===`hoop`&&(k.streak=0),V(t.type===`hoop`?`MISS`:`WIDE`,`miss`)):e===`save`?(V(`SAVED!`,`save`,`The keeper got a glove on it`),h.fx.cheer(.4)):e===`rim`?h.fx.rim():e===`board`?h.fx.board():e===`toofar`&&V(`GET CLOSER`,`info`,`${Math.round(t.ds)} m`)}function ce(){return k.time-k.player.lapStart}function ue(e,t){let n=t,r=k,i=r.player,o=r.w,s=o.track,c=i.body;if(D===`countdown`){r.lightsT+=e;let t=Math.min(5,Math.floor(r.lightsT/.9));t!==r.lightsN&&t>0&&(r.lightsN=t,h.fx.beep(!1),a.emit(`game:lights`,{n:t,out:!1}),o.art?.startGantry?.setLights(t,!1)),!r.outAt&&r.lightsT>4.6&&(r.outAt=5+Math.random()*1.2),r.outAt&&r.lightsT>=r.outAt&&(a.emit(`game:lights`,{n:0,out:!0}),o.art?.startGantry?.setLights(0,!0),h.fx.beep(!0),r.raceStarted=!0,r.time=0,i.lapStart=0,i.sectorStart=0,B(`go`,{},!0),z(`racing`),!Q.data.progress.laps&&!r.kart&&setTimeout(()=>k===r&&B(`custom`,{text:`Tip: when a hoop is in range, hold shoot and let go in the green. Swish!`},!0),4e3))}let u=D===`racing`||D===`finished`,g={steer:l.assistSteer,brake:l.assistBrake,profile:o.profile,autoShift:l.autoShift},_={steer:n.steer,throttle:n.throttle,brake:n.brake,analogSteer:n.analogSteer};u||(_={steer:0,throttle:0,brake:1,analogSteer:!1}),(i.autopilot||window.__zgpTest?.autopilot)&&(_=ge(i,s,o.profile));let v=window.__zgpTest;if(v?.autoShoot&&u){let e=o.targets.shot;n={...n,shoot:e.phase===`charging`?e.power<(v.power??.79):!!r.target?.next?.inRange}}n.pressed.has(`boost`)&&u&&!i.finished&&(i.boost>=1?(i.boost=0,i.boostAnnounced=!1,i.boostT=3.5,V(`SIU BOOST!`,`boost`),h.fx.boost(),h.speak(`Siuuuuu!`,{pitch:1.3,rate:.8,interrupt:!0}),f.bump(.4),p.rumble(.8,.8,400)):r.overtakeAvail&&i.overtakeLap!==i.lap&&(i.overtakeLap=i.lap,i.overtakeT=3,V(`OVERTAKE MODE`,`overtake`),h.fx.boost())),n.pressed.has(`gearUp`)&&!l.autoShift&&Ca(c,1),n.pressed.has(`gearDown`)&&!l.autoShift&&Ca(c,-1),i.boostT=Math.max(0,i.boostT-e),i.overtakeT=Math.max(0,i.overtakeT-e),c.boost=+(i.boostT>0),c.overtake=+(i.overtakeT>0);let y=0;for(let e=0;e<40;e+=4)y=Math.max(y,Math.abs(s.samples[(c.hint+e)%s.n].k));let b=!o.kart&&y<1/650&&_.throttle>.85&&c.speed>35;c.aeroOpen+=(+!!b-c.aeroOpen)*Math.min(1,e*6);let x=c.s,S=Math.max(1,Math.ceil(e/(1/120))),C=0;if(u)for(let t=0;t<S;t++)Sa(c,_,e/S,g),C=Math.max(C,c.wallHit);else c.vx=c.vz=c.speed=c.u=0,c.throttle=n.throttle,c.rpm+=(.3+.62*n.throttle-c.rpm)*Math.min(1,e*10);c.justShifted&&=(h.fx.shift(),0);let w=Fi(s,x,c.s);if(u&&(i.dist+=w),i.topSpeed=Math.max(i.topSpeed,c.speed*3.6),c.speed*3.6>=330&&H(`light_speed`),C>.4){let e=Math.sin(c.h),t=Math.cos(c.h);o.fx.sparks(c.x+e*1.5,.3,c.z+t*1.5,c.vx,c.vz,Math.min(24,4+C*2)),C>3&&(h.fx.hit(C),f.bump(Math.min(.8,C*.08)),p.rumble(Math.min(1,C/15),.5,160)),!i.wallThisLap&&u&&C>2&&(i.wallThisLap=!0,C>8&&B(`wall`))}if(!o.kart&&c.speed>60&&(c.onKerb||Math.random()<.15)&&o.fx.skidSparks(c.x-Math.sin(c.h)*1.6,c.z-Math.cos(c.h)*1.6,c.vx*.9,c.vz*.9),(c.slip>1.2||c.brake>.9&&c.speed>10&&c.speed<20)&&o.fx.smoke(c.x-Math.sin(c.h)*1.7,c.z-Math.cos(c.h)*1.7,c.vx,c.vz,o.kart?.5:1),c.boost||c.overtake){let e=i.rig.exhaust?i.rig.exhaust.getWorldPosition(new m):new m(c.x-Math.sin(c.h)*2.6,.5,c.z-Math.cos(c.h)*2.6);o.fx.flame(e.x,e.y,e.z,Math.sin(c.h),Math.cos(c.h),c.boost?8077298:4182271)}if(c.onKerb&&c.speed>15&&p.rumble(.15,.4,60),c.wrongWay>2.5||u&&c.speed<1&&_.throttle>.5&&(i.stuckT=(i.stuckT||0)+e)>3){i.stuckT=0;let e=s.line.offset[c.hint];xa(c,c.s,e),V(`RESET`,`info`)}else c.speed>2&&(i.stuckT=0);if(u&&(r.time+=e),u&&!i.finished){let t=s.length;!r.race&&!i.crossedStart&&i.dist>=0&&(i.crossedStart=!0,i.lapStart=r.time,i.sectorStart=r.time,i.frames=[],i.sector=0);let n=Math.floor(i.dist/t);if(n>i.lap&&i.dist>0){let e=ce();i.lap=n,c.lapKey=n,n>=1&&ye(e)}if(i.dist>=0){let e=Math.min(2,Math.floor((i.dist%t+t)%t/(t/3)));e!==i.sector&&(e===(i.sector+1)%3&&w>0&&(e!==0&&ve(i.sector,r.time-i.sectorStart),i.sectorStart=r.time),i.sector=e)}for(i.frameT+=e;i.frameT>=.05;)i.frameT-=.05,i.frames.push([+c.x.toFixed(2),+c.z.toFixed(2),+c.h.toFixed(3)])}let T=[{s:c.s,d:c.d,v:c.speed,isPlayer:!0},...r.ais];for(let t of r.ais){let n=t.dist-i.dist;t.band+=((n>70?.93:n>25?.97:n<-90?1.04:n<-30?1.02:1)-t.band)*Math.min(1,e*.5);let a=t.s;Ea(t,e,{go:u,cars:T,band:t.band,time:r.time}),u&&(t.dist+=Fi(s,a,t.s)),!t.finished&&t.dist>=r.laps*s.length&&r.race&&(t.finished=!0,t.finishTime=r.time),E(t.rig,t,e)}if(_e(r,c,e),r.race){let e=[{code:`ZOV`,isPlayer:!0,dist:i.finished?1/0:i.dist,ft:i.finishTime},...r.ais.map(e=>({code:e.code,ai:e,dist:e.dist,ft:e.finishTime}))],t=e=>e.isPlayer?i.finished?1e9-i.finishTime:e.dist:e.ai.finished?1e9-e.ai.finishTime:e.dist;e.sort((e,n)=>t(n)-t(e));let n=e.map(e=>e.code),a=r.order.indexOf(`ZOV`),o=n.indexOf(`ZOV`);if(r.order.length&&o<a&&u&&!i.finished){let e=r.order.slice(o,a).filter(e=>e!==`ZOV`);U(250),e.includes(`MED`)?B(`passMed`,{},!0):e.includes(`ELA`)?B(`passEla`,{},!0):(V(`OVERTAKE`,`overtake`,`P${o+1}`),B(`overtake`))}if(r.order.length&&o>a&&u&&!i.finished){let e=n.slice(a,o+1).filter(e=>e!==`ZOV`);e.includes(`MED`)?B(`lostMed`,{},!0):e.includes(`ELA`)&&B(`lostEla`,{},!0)}r.order=n,r.position=o+1;let s=o>0?r.ais.find(e=>e.code===n[o-1]):null;r.overtakeAvail=D===`racing`&&r.time>4&&c.speed>20&&!!s&&(s.dist-i.dist)/c.speed<1&&i.overtakeLap!==i.lap,r.overtakeAvail&&!r.otAnnounced&&(r.otAnnounced=!0,B(`overtakeMode`))}if(!r.race&&r.raceStarted){let e=i.dist>=0?ce():0;for(let t of r.ghosts){let n=e/.05,r=Math.max(0,Math.min(t.frames.length-2,Math.floor(n))),a=t.frames[r],o=t.frames[r+1]||a,s=Math.min(1,Math.max(0,n-r));if(t.rig.root.visible=i.dist>=0&&n<t.frames.length-1,a){let e=o[2]-a[2];for(;e>Math.PI;)e-=2*Math.PI;for(;e<-Math.PI;)e+=2*Math.PI;t.rig.root.position.set(a[0]+(o[0]-a[0])*s,0,a[1]+(o[1]-a[1])*s),t.rig.root.rotation.y=a[2]+e*s}}}let ee=o.targets.update(e,c,{shoot:n.shoot&&u&&!i.finished},d,u&&r.mode!==`timetrial`&&!i.finished),O=o.targets.shot;O.phase===`charging`?a.emit(`game:shot`,{phase:`charging`,power:O.power,green:Ma.green,yellow:Ma.yellow,kind:O.kind}):O.phase===`idle`&&r.lastShotPhase!==`idle`&&a.emit(`game:shot`,{phase:`idle`}),r.lastShotPhase=O.phase,r.target=ee,o.lanterns&&o.lanterns.update(e,F,u?c:null,e=>{let t=Q.data.progress.lanterns;t.includes(e.i)||t.push(e.i),Q.save(),r.lanternsFound++,h.fx.lantern(),o.fx.sparkle(e.x,2.8,e.z,16757575,50,4),V(`LANTERN ${t.length}/11`,`lantern`,t.length===11?`You found them all!`:`Happy birthday, Zoveer`),U(t.length===11?11e3:300),B(`lantern`,{},!1),t.length===11&&H(`lantern_hunter`)}),E(i.rig,c,e),D===`countdown`&&r.race&&r.lightsT<3.2?he(r,c,r.lightsT/3.2):P||f.race(c,i.rig,e,{boost:c.boost>0}),o.lights.follow(c.x,c.z);let A=r.ais.map(e=>{let t=e.x-c.x,n=e.z-c.z,r=Math.hypot(t,n),i=(e.v*Math.sin(e.h)-c.vx)*(-t/(r||1))+(e.v*Math.cos(e.h)-c.vz)*(-n/(r||1)),a=Math.cos(c.h)*t-Math.sin(c.h)*n;return{dist:r,rpm:e.rpm,closing:i,pan:Math.max(-1,Math.min(1,-a/12))}}).sort((e,t)=>e.dist-t.dist);h.updateRace({rpm:c.rpm,throttle:c.throttle,speed:c.speed,slip:c.slip,onKerb:c.onKerb,scrape:C>.3?4:0,boost:c.boost},A,Math.max(0,1-Math.abs(Fi(s,c.s,s.def.startS))/250)*.6),!i.finished&&u&&i.dist>=r.laps*s.length&&be(),i.finished&&!r.resultsSent&&(r.finishedT=(r.finishedT||0)+e,r.finishedT>2.8&&Se())}let de=new m,fe=new m,pe=new m,me=new m;function he(e,t,n){let r=e.w.track,i=r.def.startS,a=n*n*(3-2*n),o=Ni(r,i+18),s=Ni(r,i-30);de.set(o.x+o.nx*6,5.5,o.z+o.nz*6),pe.set(s.x,.8,s.z),fe.set(t.x-Math.sin(t.h)*7.2,2.35,t.z-Math.cos(t.h)*7.2),me.set(t.x+Math.sin(t.h)*5,.95,t.z+Math.cos(t.h)*5),d.position.lerpVectors(de,fe,a),d.lookAt(pe.lerp(me,a)),d.fov!==50&&(d.fov=50,d.updateProjectionMatrix()),f.snapTo(t)}function ge(e,t,n){let r=e.body,i=Ni(t,r.s+Math.max(8,r.speed*.5)),a=i.x+i.nx*i.line,o=i.z+i.nz*i.line,s=Math.atan2(a-r.x,o-r.z)-r.h;for(;s>Math.PI;)s-=2*Math.PI;for(;s<-Math.PI;)s+=2*Math.PI;let c=n[(r.hint+6)%t.n]*.8;return{steer:Math.max(-1,Math.min(1,-s*3)),throttle:r.speed<c?.8:0,brake:r.speed>c+3?.6:0,analogSteer:!0}}function _e(e,t,n){let r=e.w.track,i=e.kart?1.9:5,a=e.kart?1.3:1.85;for(let n of e.ais){let o=Fi(r,n.s,t.s),s=t.d-n.d;if(Math.abs(o)<i&&Math.abs(s)<a){let i=a-Math.abs(s),c=Math.sign(s)||1;n.d-=c*i*.5;let l=r.samples[t.hint];if(t.x+=l.nx*c*i*.5,t.z+=l.nz*c*i*.5,Math.abs(s)<a*.7){if(o<0&&t.speed>n.v){let e=n.v*.97/Math.max(t.speed,.1);t.vx*=e,t.vz*=e,n.v+=1.2}else o>0&&n.v>t.speed&&(n.v=t.speed*.97)}(!e.contactT||e.time-e.contactT>.6)&&(e.contactT=e.time,h.fx.hit(4),f.bump(.25),p.rumble(.5,.6,140),e.w.fx.sparks((n.x+t.x)/2,.4,(n.z+t.z)/2,t.vx,t.vz,8))}}for(let t=0;t<e.ais.length;t++)for(let n=t+1;n<e.ais.length;n++){let o=e.ais[t],s=e.ais[n],c=Fi(r,o.s,s.s),l=s.d-o.d;if(Math.abs(c)<i&&Math.abs(l)<a){let e=(a-Math.abs(l))*.5,t=Math.sign(l)||1;o.d-=t*e,s.d+=t*e,c>0&&o.v>s.v?o.v=s.v*.98:c<0&&s.v>o.v&&(s.v=o.v*.98)}}}function ve(e,t){let n=k.player,r=`${k.trackId}:sector${e}`,i=Q.data.records[r]?.[0]?.time??1/0,a=n.sectorTimes[e],o=`yellow`;t<i?(o=`purple`,Q.addRecord(r,{name:`ZOVEER`,time:t,date:Date.now()},1)):(a==null||t<a)&&(o=`green`),n.sectorTimes[e]=Math.min(a??1/0,t),n.sectorState[e]=o,o===`purple`&&i!==1/0&&(V(`PURPLE SECTOR`,`purple`,`S${e+1}`),B(`purple`),H(`purple_patch`))}function ye(e){let t=k,n=t.player;ve(2,t.time-n.sectorStart),n.sector=0,n.sectorStart=t.time,n.lapTimes.push(e),n.lapStart=t.time;let r=e<n.best;n.best=Math.min(n.best,e),Q.data.progress.laps++,Q.data.progress.laps>=25&&H(`grind`),n.wallThisLap||(n.cleanLaps++,H(`low_cortisol`),U(300)),n.wallThisLap=!1;let i=`${t.trackId}:${t.mode}`,o=Q.best(`${t.trackId}:lap`);if(o==null||e<o?(Q.addRecord(`${t.trackId}:lap`,{name:Q.data.profile.name,time:e,date:Date.now()}),o!=null&&V(`NEW LAP RECORD`,`record`,xe(e))):Q.addRecord(`${t.trackId}:lap`,{name:Q.data.profile.name,time:e,date:Date.now()}),!t.race){let r=Q.data.ghosts[i];(!r||e<r.time)&&(Q.data.ghosts[i]={time:e,frames:n.frames.slice(0,4e3)},Q.saveGhosts());let a=R[t.trackId];a&&e<a.time&&!n.beatMed&&(n.beatMed=!0,B(`ghostBeat`,{},!0),H(`beat_med`))}n.frames=[];for(let e of t.w.targets.targets)e.attempted=-1;a.emit(`game:lap`,{lap:n.lap,time:e,best:n.best,isBest:r,sectors:n.sectorState.slice()}),r&&n.lapTimes.length>1&&B(`fastest`),n.lap===t.laps-1&&(B(`lastLap`,{},!0),V(`FINAL LAP`,`info`)),n.sectorState=[null,null,null]}function be(){let e=k,t=e.player;t.finished=!0,t.finishTime=e.time,t.autopilot=!0,z(`finished`),h.fx.cheer(1.2),e.w.fx.confetti(t.body.x,4,t.body.z,260,10);let n=e.race?e.order.indexOf(`ZOV`)+1:1;e.position=n,e.race?B(n===1?e.kart?`finish`:`win`:n<=3?`podium`:`finish`,{},!0):B(`finish`,{},!0),V(e.race?`P${n}`:`FINISH`,n===1?`record`:`info`,e.race?n===1?`WINNER!`:`Chequered flag`:xe(t.best))}function xe(e){if(!isFinite(e))return`--:--.---`;let t=Math.floor(e/60);return`${t}:${(e-t*60).toFixed(3).padStart(6,`0`)}`}function Se(){let e=k,i=e.player,o=e.w.track;e.resultsSent=!0,H(`lights_out`);let s=[],c=0,u=o.length;if(e.race){let t=t=>Math.max(10,t.dist/Math.max(1,e.time)),n=[{name:`Zoveer`,code:`ZOV`,color:(r[Q.data.profile.livery]||r.bull).primary,time:i.finishTime,best:i.best,isPlayer:!0}];for(let r of e.ais)n.push({name:r.name,code:r.code,color:r.color,time:r.finished?r.finishTime:e.time+(e.laps*u-r.dist)/t(r),best:r.bestLap,isPlayer:!1});n.sort((e,t)=>e.time-t.time);let a=n[0].time;s=n.map((e,t)=>({pos:t+1,name:e.name,code:e.code,color:e.color,time:xe(e.time),gap:t===0?`WINNER`:`+${(e.time-a).toFixed(3)}`,best:e.isPlayer?xe(i.best):``,isPlayer:e.isPlayer}));let o=s.find(e=>e.isPlayer).pos;c=o===1?3:o<=3?2:1;let l=s.find(e=>e.code===`MED`)?.pos,d=s.find(e=>e.code===`ELA`)?.pos;o<l&&H(`beat_med`),o<d&&H(`sorry_sis`),o===1&&e.mode===`gp`&&H(`bangkok_champ`),o===1&&e.mode===`kart`&&H(`kart_king`),o===1&&U(2e3),Q.addRecord(`${e.trackId}:${e.mode}:race`,{name:Q.data.profile.name,time:i.finishTime,date:Date.now()})}else{let t=R[e.trackId],n=i.lapTimes.reduce((e,t)=>e+t,0),a=e.mode===`hoopattack`?Math.max(0,n-e.bonus):i.best;if(s.push({pos:1,name:`Zoveer`,code:`ZOV`,color:(r[Q.data.profile.livery]||r.bull).primary,time:xe(a),gap:e.mode===`hoopattack`?`${xe(n)} − ${e.bonus.toFixed(1)} s`:`BEST LAP`,best:xe(i.best),isPlayer:!0}),t){let n=e.mode===`hoopattack`?t.time*e.laps:t.time;s.push({pos:2,name:`Medhansh (ghost)`,code:`MED`,color:r.medhansh.primary,time:xe(n),gap:``,best:xe(t.time),isPlayer:!1}),s.sort((e,t)=>(e.isPlayer?a:n)-(t.isPlayer?a:n)),s.forEach((e,t)=>{e.pos=t+1});let i=a-n;s.find(e=>!e.isPlayer).gap=i<0?`+${(-i).toFixed(3)}`:``,s.find(e=>e.isPlayer).gap||=i>0?`+${i.toFixed(3)}`:``,c=i<0?3:i<1.5?2:1,i<0&&H(`beat_med`)}else c=1;Q.addRecord(`${e.trackId}:${e.mode}`,{name:Q.data.profile.name,time:a,date:Date.now()})}let d=e.chapter||{gp:`gp`,kart:`kart`,hoopattack:`hoopattack`,timetrial:`quali`}[e.mode];d&&(e.chapter||e.mode!==`timetrial`||e.trackId===`bangkok`)&&(Q.data.progress.stars[d]=Math.max(Q.data.progress.stars[d]||0,c));let f=e.mode===`gp`;f&&(Q.data.progress.finaleUnlocked=!0),Q.save(),a.emit(`game:results`,{mode:e.mode,track:e.trackId,rows:s,stats:{hoops:e.hoops.made,hoopAtt:e.hoops.att,goals:e.goals.made,goalAtt:e.goals.att,aura:e.aura,lanterns:Q.data.progress.lanterns.length,cleanLaps:i.cleanLaps,topSpeed:Math.round(i.topSpeed),swishes:e.swishes},stars:c,records:[],newTrophies:e.newTrophies,canFinale:f,chapter:d}),a.emit(`game:ready`,{profile:Q.data.profile,settings:l,progress:te(),liveries:t.map(e=>r[e]),numbers:n,tracks:Object.values(xi).map(e=>({id:e.id,name:e.name,kind:e.kind})),devices:{list:p.devices,active:p.kind}})}function we(e){let i=k,o=e.goals>=4?3:e.goals>=3?2:+(e.goals>=1);e.goals>=3&&H(`hattrick`),e.perfects>0&&e.goals>0&&H(`knuckleball`),e.goals>0&&H(`siuuu`),Q.data.progress.stars.freekick=Math.max(Q.data.progress.stars.freekick||0,o),Q.addRecord(`stadium:freekick`,{name:Q.data.profile.name,time:-e.goals,goals:e.goals,date:Date.now()}),Q.save(),z(`finished`),a.emit(`game:results`,{mode:`freekick`,track:`stadium`,rows:[{pos:1,name:`Zoveer`,code:`ZOV`,color:`#14224f`,time:`${e.goals} / 5`,gap:e.goals>=4?`WORLD CLASS`:e.goals>=2?`SIUUU`:`Again!`,best:``,isPlayer:!0}],stats:{goals:e.goals,goalAtt:5,aura:e.goals*1500,knuckleballs:e.perfects},stars:o,records:[],newTrophies:i.newTrophies,canFinale:!1,chapter:`freekick`}),Q.data.progress.aura+=e.goals*1500,Q.save(),a.emit(`game:ready`,{profile:Q.data.profile,settings:l,progress:te(),liveries:t.map(e=>r[e]),numbers:n,tracks:Object.values(xi).map(e=>({id:e.id,name:e.name,kind:e.kind})),devices:{list:p.devices,active:p.kind}})}function Te(){ae(),A=b(`bangkok`);let e=A;e.rigs.rivals.forEach(e=>{e.root.visible=!1});let t=new m(100,8.5,16),n=new m(100,92,-200),r=ba(`f1`,e.track);xa(r,300,2),r.h=Math.PI,E(e.rigs.player,r,0),e.lights.follow(r.x,r.z),j=qa({scene:e.scene,camera:d,fx:e.fx,audio:h,bus:a,origin:t,look:n}),j.start(),Q.data.progress.finaleSeen=!0,Q.save(),H(`birthday_boy`),z(`finale`)}a.on(`ui:screen`,({name:e})=>{O=e,[`menu`,`campaign`,`garage`,`settings`,`leaderboard`,`trophies`,`howto`,`splash`].includes(e)&&(N&&e===`settings`||((k||j?.running||D!==`menu`)&&(ae(),re(),z(`menu`)),h.ready&&h.menuMusic()))}),a.on(`ui:start`,e=>{h.unlock(),ie(e)});let Ee=`racing`;a.on(`ui:pause`,()=>{k&&!N&&[`countdown`,`racing`,`finished`].includes(D)&&(Ee=D,N=!0,z(`paused`),h.setPaused(!0),`speechSynthesis`in window&&speechSynthesis.pause())}),a.on(`ui:resume`,()=>{N&&!P&&(N=!1,z(Ee),h.setPaused(!1),`speechSynthesis`in window&&speechSynthesis.resume())}),a.on(`ui:restart`,()=>{k&&ie({mode:k.mode,track:k.trackId,chapter:k.chapter})}),a.on(`ui:quit`,()=>{ae(),re(),z(`menu`),h.menuMusic()}),a.on(`ui:livery`,({id:e})=>{if(r[e]){Q.data.profile.livery=e,Q.save();for(let t of Object.values(g))t.rigs?.player.setLivery?.(r[e]);h.fx.uiSelect()}}),a.on(`ui:driver`,({name:e})=>{let t=String(e||``).toUpperCase().replace(/[^A-Z0-9 ]/g,``).trim().slice(0,12);t&&(Q.data.profile.name=t,Q.save())}),a.on(`ui:number`,({n:e})=>{Q.data.profile.number=e,Q.save();for(let t of Object.values(g))t.rigs?.player.setNumber?.(e)}),a.on(`ui:setting`,({key:e,value:t})=>{if(l[e]=t,Q.save(),(e===`volMaster`||e===`volMusic`)&&h.applyVolumes(),e===`quality`&&u.rebuild(),e===`racingLine`)for(let e of Object.values(g))e.mesh&&(e.mesh.racingLine.visible=t);e===`camera`&&(f.mode=t)}),a.on(`ui:finale`,()=>{h.unlock(),Te()}),a.on(`ui:photo`,({action:e})=>{if(e===`enter`&&k?.player&&!P&&[`countdown`,`racing`,`finished`,`paused`].includes(D))N||(Ee=D),P=!0,N=!0,z(`photo`),h.setPaused(!0),f.state.photo.a=k.player.body.h+2.4;else if(e===`exit`&&P)P=!1,N=!1,z(Ee),h.setPaused(!1);else if(e===`save`){let e=u.screenshot(A.scene,d),t=document.createElement(`a`);t.href=e,t.download=`zoveer-gp-${Date.now()}.png`,t.click(),V(`PHOTO SAVED`,`info`)}}),a.on(`ui:leaderboard`,()=>a.emit(`game:leaderboard`,{tables:Q.data.records})),a.on(`nav`,({dir:e})=>{h.ready&&(e===`confirm`?h.fx.uiSelect():[`up`,`down`,`left`,`right`].includes(e)&&h.fx.uiMove())});let De=()=>{h.unlock(),(D===`menu`||D===`boot`)&&h.menuMusic(),removeEventListener(`pointerdown`,De),removeEventListener(`keydown`,De)};addEventListener(`pointerdown`,De),addEventListener(`keydown`,De);let Oe=()=>p.enableTilt();addEventListener(`click`,Oe),addEventListener(`touchend`,Oe),addEventListener(`keydown`,e=>{e.code!==`KeyF`||e.repeat||(document.fullscreenElement?document.exitFullscreen?.():document.documentElement.requestFullscreen?.().catch(()=>{}))}),re();{let e=g.bangkok;R.bangkok=Oa(e.track,e.profile,ya.f1,.87,e.track.def.startS);let t=(Q.data.records[`bangkok:lap`]||[]).some(e=>e.name===`MEDHANSH`&&e.ghost);R.bangkok&&!t&&Q.addRecord(`bangkok:lap`,{name:`MEDHANSH`,time:R.bangkok.time,date:Date.now(),ghost:!0})}z(`menu`),ne(),a.emit(`input:devices`,{list:p.devices,active:p.kind});let ke=performance.now(),Ae=!1,Me=0,Ne=Date.parse(eo),Pe=()=>Date.now()>=Ne&&Date.now()<Ne+864e5;function Fe(e){requestAnimationFrame(Fe);let t=Math.min(.05,(e-ke)/1e3);ke=e,F+=t,L.t-=t;let n=p.update(),r=A;if(k&&k.player&&[`racing`,`countdown`,`finished`,`paused`,`photo`].includes(D)){if(n.pressed.has(`pause`)&&!P&&a.emit(N?`ui:resume`:`ui:pause`),n.pressed.has(`camera`)&&!N){let e=[`chase`,`tcam`,`cockpit`];f.mode=e[(e.indexOf(f.mode)+1)%e.length],l.camera=f.mode,Q.save()}if(n.pressed.has(`photo`)&&a.emit(`ui:photo`,{action:P?`exit`:`enter`}),n.pressed.has(`reset`)&&!N&&D===`racing`){let e=k.player.body;xa(e,e.s,r.track.line.offset[e.hint])}}else M&&n.pressed.has(`pause`)&&a.emit(N?`ui:resume`:`ui:pause`);if((j?.running||k)&&d.view?.enabled&&d.clearViewOffset(),j?.running)j.update(t),r.art?.update?.(t,F,d);else if(M&&k)N||M.step(t,n,e=>we(e)),r.art?.update?.(t,F,d);else if(k&&k.player)N?P&&f.photoOrbit(new m(k.player.body.x,0,k.player.body.z),n,t):ue(t,n),r.art?.update?.(t,F,d);else if(r){let e=O===`garage`,n=e?.2:.12;if(d.view&&d.view.offsetX===-innerWidth*n&&d.view.fullWidth===innerWidth||d.setViewOffset(innerWidth,innerHeight,-innerWidth*n,0,innerWidth,innerHeight),f.orbit(r.menuCenter,t,e?{radius:7.4,height:1.4,speed:.2,lookY:.45}:{radius:9.5,height:2.1,speed:.07,lookY:.9}),r.art?.update?.(t,F,d),r.lanterns?.update(t,F,null,()=>{}),Pe()&&(Me-=t)<=0){Me=1.4+Math.random()*1.6;let e=r.menuCenter;r.fx.firework(e.x+(Math.random()-.5)*300,60+Math.random()*50,e.z-150-Math.random()*100)}}r?.fx.update(t),I-=t,I<=0&&k&&k.player&&!k.resultsSent&&[`racing`,`countdown`,`finished`].includes(D)&&(I=.05,G());let i=k?.w?.targets?.pip,o=!!(i&&i.active&&!P);u.render(r.scene,d,o?i:null),o!==Ae&&(Ae=o,a.emit(`game:pip`,{active:o,rect:o?i.rect:null,label:k?.w?.targets?.shot?.kind===`goal`?`GOAL CAM`:`HOOP CAM`})),u.adapt(t),p.endFrame()}requestAnimationFrame(Fe);function G(){let e=k,t=e.player,n=t.body,i=e.w.track;i.length;let o=[];if(e.race){let i=Math.max(t.dist,...e.ais.map(e=>e.dist)),a=[{code:`ZOV`,name:`Zoveer`,color:(r[Q.data.profile.livery]||r.bull).primary,dist:t.dist,v:n.speed,isPlayer:!0},...e.ais.map(e=>({code:e.code,name:e.name,color:e.color,dist:e.dist,v:e.v,isPlayer:!1}))];o=e.order.map((e,t)=>{let n=a.find(t=>t.code===e),r=t===0?`LEADER`:`+${((i-n.dist)/Math.max(25,n.v)).toFixed(1)}`;return{pos:t+1,code:e,name:n.name,color:n.color,gap:r,isPlayer:n.isPlayer}})}else{o=[{pos:1,code:`ZOV`,name:`Zoveer`,color:(r[Q.data.profile.livery]||r.bull).primary,gap:Le(ce()),isPlayer:!0}];for(let t of e.ghosts)o.push({pos:o.length+1,code:t.code,name:t.name,color:t.color,gap:Le(t.time),isPlayer:!1})}let s=null,c=e.race?null:e.ghosts[0];if(c&&t.dist>=0){let e=ce(),t=Math.min(c.frames.length-1,Math.floor(e/.05)),r=c.frames[t];if(r){let e=(()=>{let e=0,t=1/0;for(let n=0;n<i.n;n+=3){let a=i.samples[n],o=(a.x-r[0])**2+(a.z-r[1])**2;o<t&&(t=o,e=a.s)}return e})();s=Fi(i,n.s,e)/Math.max(n.speed,20)}}let l=e.target,u={kind:null};l&&l.next&&!t.finished&&e.mode!==`timetrial`&&(u={kind:l.next.t.type,dist:Math.round(l.next.ds),x:l.screen?.x,y:l.screen?.y,inRange:l.next.inRange}),a.emit(`game:target`,u);let d=n.spec.gears;a.emit(`game:hud`,{mode:e.mode,speed:Math.round(n.speed*3.6),gear:n.u<-.5?`R`:n.speed<.5&&n.throttle===0?`N`:n.gear,rpm:n.rpm,rev:Math.round(Math.max(0,(n.rpm-.55)/.45)*15),throttle:n.throttle,brake:n.brake,lap:Math.min(e.laps,Math.max(1,t.lap+1)),laps:e.laps,lapTime:e.raceStarted&&(e.race||t.dist>=0)?ce():0,lastLap:t.lapTimes.length?t.lapTimes[t.lapTimes.length-1]:null,bestLap:isFinite(t.best)?t.best:null,delta:s,sector:t.sector+1,sectors:t.sectorState.slice(),position:e.position||1,cars:e.race?8:1,tower:o,boost:t.boost,boostReady:t.boost>=1,boostActive:n.boost>0,overtake:!!e.overtakeAvail,overtakeActive:n.overtake>0,aero:n.aeroOpen>.5?`STRAIGHT`:`CORNER`,hoops:e.hoops,goals:e.goals,aura:e.aura,lanterns:{found:Q.data.progress.lanterns.length,total:11},timeBonus:e.bonus,raceTime:e.time,map:{cars:[{...p(n.x,n.z),color:`#ffc61a`,isPlayer:!0},...e.ais.map(e=>({...p(e.x,e.z),color:e.color,isPlayer:!1}))]},camera:f.mode,gears:d.length});function p(t,n){let[r,i]=e.norm(t,n);return{x:r,y:i}}}function Le(e){return isFinite(e)&&e>0?xe(e).replace(/^0:/,``):`--.---`}window.__zgp={get state(){return D},get sess(){return k},store:Q,camera:d,worlds:g,startSession:ie,startFinale:Te}}export{io as startGame,Z as t};