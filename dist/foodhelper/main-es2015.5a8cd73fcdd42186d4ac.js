(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{0:function(e,t,n){e.exports=n("zUnb")},zUnb:function(e,t,n){"use strict";n.r(t);var r=function(e){return e[e.Emulated=0]="Emulated",e[e.None=2]="None",e[e.ShadowDom=3]="ShadowDom",e}({});"undefined"!=typeof window&&window,"undefined"!=typeof self&&"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&self,"undefined"!=typeof global&&global;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class s{get(e){return""}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class o{constructor({defaultEncapsulation:e=r.Emulated,useJit:t=!0,jitDevMode:n=!1,missingTranslation:s=null,preserveWhitespaces:o,strictInjectionParameters:i}={}){var l;this.defaultEncapsulation=e,this.useJit=!!t,this.jitDevMode=!!n,this.missingTranslation=s,this.preserveWhitespaces=function(e,t=!1){return null===e?t:e}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(void 0===(l=o)?null:l),this.strictInjectionParameters=!0===i
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */}}function i(e){return"function"==typeof e}let l=!1;const u={Promise:void 0,set useDeprecatedSynchronousErrorHandling(e){if(e){const e=new Error;console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n"+e.stack)}else l&&console.log("RxJS: Back to a better error behavior. Thank you. <3");l=e},get useDeprecatedSynchronousErrorHandling(){return l}};function c(e){setTimeout(()=>{throw e},0)}const a={closed:!0,next(e){},error(e){if(u.useDeprecatedSynchronousErrorHandling)throw e;c(e)},complete(){}},d=(()=>Array.isArray||(e=>e&&"number"==typeof e.length))();function h(e){return null!==e&&"object"==typeof e}const f=(()=>{function e(e){return Error.call(this),this.message=e?`${e.length} errors occurred during unsubscription:\n${e.map((e,t)=>`${t+1}) ${e.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=e,this}return e.prototype=Object.create(Error.prototype),e})();let p=(()=>{class e{constructor(e){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,e&&(this._ctorUnsubscribe=!0,this._unsubscribe=e)}unsubscribe(){let t;if(this.closed)return;let{_parentOrParents:n,_ctorUnsubscribe:r,_unsubscribe:s,_subscriptions:o}=this;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,n instanceof e)n.remove(this);else if(null!==n)for(let e=0;e<n.length;++e)n[e].remove(this);if(i(s)){r&&(this._unsubscribe=void 0);try{s.call(this)}catch(l){t=l instanceof f?_(l.errors):[l]}}if(d(o)){let e=-1,n=o.length;for(;++e<n;){const n=o[e];if(h(n))try{n.unsubscribe()}catch(l){t=t||[],l instanceof f?t=t.concat(_(l.errors)):t.push(l)}}}if(t)throw new f(t)}add(t){let n=t;if(!t)return e.EMPTY;switch(typeof t){case"function":n=new e(t);case"object":if(n===this||n.closed||"function"!=typeof n.unsubscribe)return n;if(this.closed)return n.unsubscribe(),n;if(!(n instanceof e)){const t=n;n=new e,n._subscriptions=[t]}break;default:throw new Error("unrecognized teardown "+t+" added to Subscription.")}let{_parentOrParents:r}=n;if(null===r)n._parentOrParents=this;else if(r instanceof e){if(r===this)return n;n._parentOrParents=[r,this]}else{if(-1!==r.indexOf(this))return n;r.push(this)}const s=this._subscriptions;return null===s?this._subscriptions=[n]:s.push(n),n}remove(e){const t=this._subscriptions;if(t){const n=t.indexOf(e);-1!==n&&t.splice(n,1)}}}return e.EMPTY=function(e){return e.closed=!0,e}(new e),e})();function _(e){return e.reduce((e,t)=>e.concat(t instanceof f?t.errors:t),[])}const y=(()=>"function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random())();class m extends p{constructor(e,t,n){switch(super(),this.syncErrorValue=null,this.syncErrorThrown=!1,this.syncErrorThrowable=!1,this.isStopped=!1,arguments.length){case 0:this.destination=a;break;case 1:if(!e){this.destination=a;break}if("object"==typeof e){e instanceof m?(this.syncErrorThrowable=e.syncErrorThrowable,this.destination=e,e.add(this)):(this.syncErrorThrowable=!0,this.destination=new g(this,e));break}default:this.syncErrorThrowable=!0,this.destination=new g(this,e,t,n)}}[y](){return this}static create(e,t,n){const r=new m(e,t,n);return r.syncErrorThrowable=!1,r}next(e){this.isStopped||this._next(e)}error(e){this.isStopped||(this.isStopped=!0,this._error(e))}complete(){this.isStopped||(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe())}_next(e){this.destination.next(e)}_error(e){this.destination.error(e),this.unsubscribe()}_complete(){this.destination.complete(),this.unsubscribe()}_unsubscribeAndRecycle(){const{_parentOrParents:e}=this;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=e,this}}class g extends m{constructor(e,t,n,r){let s;super(),this._parentSubscriber=e;let o=this;i(t)?s=t:t&&(s=t.next,n=t.error,r=t.complete,t!==a&&(o=Object.create(t),i(o.unsubscribe)&&this.add(o.unsubscribe.bind(o)),o.unsubscribe=this.unsubscribe.bind(this))),this._context=o,this._next=s,this._error=n,this._complete=r}next(e){if(!this.isStopped&&this._next){const{_parentSubscriber:t}=this;u.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?this.__tryOrSetError(t,this._next,e)&&this.unsubscribe():this.__tryOrUnsub(this._next,e)}}error(e){if(!this.isStopped){const{_parentSubscriber:t}=this,{useDeprecatedSynchronousErrorHandling:n}=u;if(this._error)n&&t.syncErrorThrowable?(this.__tryOrSetError(t,this._error,e),this.unsubscribe()):(this.__tryOrUnsub(this._error,e),this.unsubscribe());else if(t.syncErrorThrowable)n?(t.syncErrorValue=e,t.syncErrorThrown=!0):c(e),this.unsubscribe();else{if(this.unsubscribe(),n)throw e;c(e)}}}complete(){if(!this.isStopped){const{_parentSubscriber:e}=this;if(this._complete){const t=()=>this._complete.call(this._context);u.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?(this.__tryOrSetError(e,t),this.unsubscribe()):(this.__tryOrUnsub(t),this.unsubscribe())}else this.unsubscribe()}}__tryOrUnsub(e,t){try{e.call(this._context,t)}catch(n){if(this.unsubscribe(),u.useDeprecatedSynchronousErrorHandling)throw n;c(n)}}__tryOrSetError(e,t,n){if(!u.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{t.call(this._context,n)}catch(r){return u.useDeprecatedSynchronousErrorHandling?(e.syncErrorValue=r,e.syncErrorThrown=!0,!0):(c(r),!0)}return!1}_unsubscribe(){const{_parentSubscriber:e}=this;this._context=null,this._parentSubscriber=null,e.unsubscribe()}}const v=(()=>"function"==typeof Symbol&&Symbol.observable||"@@observable")();function b(e){return e}let w=(()=>{class e{constructor(e){this._isScalar=!1,e&&(this._subscribe=e)}lift(t){const n=new e;return n.source=this,n.operator=t,n}subscribe(e,t,n){const{operator:r}=this,s=function(e,t,n){if(e){if(e instanceof m)return e;if(e[y])return e[y]()}return e||t||n?new m(e,t,n):new m(a)}(e,t,n);if(s.add(r?r.call(s,this.source):this.source||u.useDeprecatedSynchronousErrorHandling&&!s.syncErrorThrowable?this._subscribe(s):this._trySubscribe(s)),u.useDeprecatedSynchronousErrorHandling&&s.syncErrorThrowable&&(s.syncErrorThrowable=!1,s.syncErrorThrown))throw s.syncErrorValue;return s}_trySubscribe(e){try{return this._subscribe(e)}catch(t){u.useDeprecatedSynchronousErrorHandling&&(e.syncErrorThrown=!0,e.syncErrorValue=t),function(e){for(;e;){const{closed:t,destination:n,isStopped:r}=e;if(t||r)return!1;e=n&&n instanceof m?n:null}return!0}(e)?e.error(t):console.warn(t)}}forEach(e,t){return new(t=E(t))((t,n)=>{let r;r=this.subscribe(t=>{try{e(t)}catch(s){n(s),r&&r.unsubscribe()}},n,t)})}_subscribe(e){const{source:t}=this;return t&&t.subscribe(e)}[v](){return this}pipe(...e){return 0===e.length?this:(0===(t=e).length?b:1===t.length?t[0]:function(e){return t.reduce((e,t)=>t(e),e)})(this);var t}toPromise(e){return new(e=E(e))((e,t)=>{let n;this.subscribe(e=>n=e,e=>t(e),()=>e(n))})}}return e.create=t=>new e(t),e})();function E(e){if(e||(e=u.Promise||Promise),!e)throw new Error("no Promise impl found");return e}const x=(()=>{function e(){return Error.call(this),this.message="object unsubscribed",this.name="ObjectUnsubscribedError",this}return e.prototype=Object.create(Error.prototype),e})();class C extends p{constructor(e,t){super(),this.subject=e,this.subscriber=t,this.closed=!1}unsubscribe(){if(this.closed)return;this.closed=!0;const e=this.subject,t=e.observers;if(this.subject=null,!t||0===t.length||e.isStopped||e.closed)return;const n=t.indexOf(this.subscriber);-1!==n&&t.splice(n,1)}}class k extends m{constructor(e){super(e),this.destination=e}}let T=(()=>{class e extends w{constructor(){super(),this.observers=[],this.closed=!1,this.isStopped=!1,this.hasError=!1,this.thrownError=null}[y](){return new k(this)}lift(e){const t=new S(this,this);return t.operator=e,t}next(e){if(this.closed)throw new x;if(!this.isStopped){const{observers:t}=this,n=t.length,r=t.slice();for(let s=0;s<n;s++)r[s].next(e)}}error(e){if(this.closed)throw new x;this.hasError=!0,this.thrownError=e,this.isStopped=!0;const{observers:t}=this,n=t.length,r=t.slice();for(let s=0;s<n;s++)r[s].error(e);this.observers.length=0}complete(){if(this.closed)throw new x;this.isStopped=!0;const{observers:e}=this,t=e.length,n=e.slice();for(let r=0;r<t;r++)n[r].complete();this.observers.length=0}unsubscribe(){this.isStopped=!0,this.closed=!0,this.observers=null}_trySubscribe(e){if(this.closed)throw new x;return super._trySubscribe(e)}_subscribe(e){if(this.closed)throw new x;return this.hasError?(e.error(this.thrownError),p.EMPTY):this.isStopped?(e.complete(),p.EMPTY):(this.observers.push(e),new C(this,e))}asObservable(){const e=new w;return e.source=this,e}}return e.create=(e,t)=>new S(e,t),e})();class S extends T{constructor(e,t){super(),this.destination=e,this.source=t}next(e){const{destination:t}=this;t&&t.next&&t.next(e)}error(e){const{destination:t}=this;t&&t.error&&this.destination.error(e)}complete(){const{destination:e}=this;e&&e.complete&&this.destination.complete()}_subscribe(e){const{source:t}=this;return t?this.source.subscribe(e):p.EMPTY}}class I{constructor(e,t){this.project=e,this.thisArg=t}call(e,t){return t.subscribe(new A(e,this.project,this.thisArg))}}class A extends m{constructor(e,t,n){super(e),this.project=t,this.count=0,this.thisArg=n||this}_next(e){let t;try{t=this.project.call(this.thisArg,e,this.count++)}catch(n){return void this.destination.error(n)}this.destination.next(t)}}const O=e=>t=>{for(let n=0,r=e.length;n<r&&!t.closed;n++)t.next(e[n]);t.complete()};function D(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}const j=D(),H=e=>e&&"number"==typeof e.length&&"function"!=typeof e;function P(e){return!!e&&"function"!=typeof e.subscribe&&"function"==typeof e.then}const N=e=>{if(e&&"function"==typeof e[v])return r=e,e=>{const t=r[v]();if("function"!=typeof t.subscribe)throw new TypeError("Provided object does not correctly implement Symbol.observable");return t.subscribe(e)};if(H(e))return O(e);if(P(e))return n=e,e=>(n.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,c),e);if(e&&"function"==typeof e[j])return t=e,e=>{const n=t[j]();for(;;){let t;try{t=n.next()}catch(r){return e.error(r),e}if(t.done){e.complete();break}if(e.next(t.value),e.closed)break}return"function"==typeof n.return&&e.add(()=>{n.return&&n.return()}),e};{const t=h(e)?"an invalid object":`'${e}'`;throw new TypeError(`You provided ${t} where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.`)}var t,n,r};function M(e,t){return new w(n=>{const r=new p;let s=0;return r.add(t.schedule(function(){s!==e.length?(n.next(e[s++]),n.closed||r.add(this.schedule())):n.complete()})),r})}class R extends m{constructor(e){super(),this.parent=e}_next(e){this.parent.notifyNext(e)}_error(e){this.parent.notifyError(e),this.unsubscribe()}_complete(){this.parent.notifyComplete(),this.unsubscribe()}}class F extends m{notifyNext(e){this.destination.next(e)}notifyError(e){this.destination.error(e)}notifyComplete(){this.destination.complete()}}function V(e,t,n=Number.POSITIVE_INFINITY){return"function"==typeof t?r=>r.pipe(V((n,r)=>{return(s=e(n,r),o?function(e,t){if(null!=e){if(function(e){return e&&"function"==typeof e[v]}(e))return function(e,t){return new w(n=>{const r=new p;return r.add(t.schedule(()=>{const s=e[v]();r.add(s.subscribe({next(e){r.add(t.schedule(()=>n.next(e)))},error(e){r.add(t.schedule(()=>n.error(e)))},complete(){r.add(t.schedule(()=>n.complete()))}}))})),r})}(e,t);if(P(e))return function(e,t){return new w(n=>{const r=new p;return r.add(t.schedule(()=>e.then(e=>{r.add(t.schedule(()=>{n.next(e),r.add(t.schedule(()=>n.complete()))}))},e=>{r.add(t.schedule(()=>n.error(e)))}))),r})}(e,t);if(H(e))return M(e,t);if(function(e){return e&&"function"==typeof e[j]}(e)||"string"==typeof e)return function(e,t){if(!e)throw new Error("Iterable cannot be null");return new w(n=>{const r=new p;let s;return r.add(()=>{s&&"function"==typeof s.return&&s.return()}),r.add(t.schedule(()=>{s=e[j](),r.add(t.schedule(function(){if(n.closed)return;let e,t;try{const n=s.next();e=n.value,t=n.done}catch(r){return void n.error(r)}t?n.complete():(n.next(e),this.schedule())}))})),r})}(e,t)}throw new TypeError((null!==e&&typeof e||e)+" is not observable")}(s,o):s instanceof w?s:new w(N(s))).pipe(function(e,t){return function(t){return t.lift(new I(e,undefined))}}((e,s)=>t(n,e,r,s)));var s,o},n)):("number"==typeof t&&(n=t),t=>t.lift(new L(e,n)))}class L{constructor(e,t=Number.POSITIVE_INFINITY){this.project=e,this.concurrent=t}call(e,t){return t.subscribe(new B(e,this.project,this.concurrent))}}class B extends F{constructor(e,t,n=Number.POSITIVE_INFINITY){super(e),this.project=t,this.concurrent=n,this.hasCompleted=!1,this.buffer=[],this.active=0,this.index=0}_next(e){this.active<this.concurrent?this._tryNext(e):this.buffer.push(e)}_tryNext(e){let t;const n=this.index++;try{t=this.project(e,n)}catch(r){return void this.destination.error(r)}this.active++,this._innerSub(t)}_innerSub(e){const t=new R(this),n=this.destination;n.add(t);const r=function(e,t){if(!t.closed)return e instanceof w?e.subscribe(t):N(e)(t)}(e,t);r!==t&&n.add(r)}_complete(){this.hasCompleted=!0,0===this.active&&0===this.buffer.length&&this.destination.complete(),this.unsubscribe()}notifyNext(e){this.destination.next(e)}notifyComplete(){const e=this.buffer;this.active--,e.length>0?this._next(e.shift()):0===this.active&&this.hasCompleted&&this.destination.complete()}}function Z(){return function(e){return e.lift(new z(e))}}class z{constructor(e){this.connectable=e}call(e,t){const{connectable:n}=this;n._refCount++;const r=new $(e,n),s=t.subscribe(r);return r.closed||(r.connection=n.connect()),s}}class $ extends m{constructor(e,t){super(e),this.connectable=t}_unsubscribe(){const{connectable:e}=this;if(!e)return void(this.connection=null);this.connectable=null;const t=e._refCount;if(t<=0)return void(this.connection=null);if(e._refCount=t-1,t>1)return void(this.connection=null);const{connection:n}=this,r=e._connection;this.connection=null,!r||n&&r!==n||r.unsubscribe()}}class U extends w{constructor(e,t){super(),this.source=e,this.subjectFactory=t,this._refCount=0,this._isComplete=!1}_subscribe(e){return this.getSubject().subscribe(e)}getSubject(){const e=this._subject;return e&&!e.isStopped||(this._subject=this.subjectFactory()),this._subject}connect(){let e=this._connection;return e||(this._isComplete=!1,e=this._connection=new p,e.add(this.source.subscribe(new q(this.getSubject(),this))),e.closed&&(this._connection=null,e=p.EMPTY)),e}refCount(){return Z()(this)}}const W=(()=>{const e=U.prototype;return{operator:{value:null},_refCount:{value:0,writable:!0},_subject:{value:null,writable:!0},_connection:{value:null,writable:!0},_subscribe:{value:e._subscribe},_isComplete:{value:e._isComplete,writable:!0},getSubject:{value:e.getSubject},connect:{value:e.connect},refCount:{value:e.refCount}}})();class q extends k{constructor(e,t){super(e),this.connectable=t}_error(e){this._unsubscribe(),super._error(e)}_complete(){this.connectable._isComplete=!0,this._unsubscribe(),super._complete()}_unsubscribe(){const e=this.connectable;if(e){this.connectable=null;const t=e._connection;e._refCount=0,e._subject=null,e._connection=null,t&&t.unsubscribe()}}}function G(){return new T}
/**
 * @license Angular v11.0.9
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Q(e){for(let t in e)if(e[t]===Q)return t;throw Error("Could not find renamed property on target object.")}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function J(e){if("string"==typeof e)return e;if(Array.isArray(e))return"["+e.map(J).join(", ")+"]";if(null==e)return""+e;if(e.overriddenName)return""+e.overriddenName;if(e.name)return""+e.name;const t=e.toString();if(null==t)return""+t;const n=t.indexOf("\n");return-1===n?t:t.substring(0,n)}function K(e,t){return null==e||""===e?null===t?"":t:null==t||""===t?e:e+" "+t}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Y=Q({__forward_ref__:Q});function X(e){return e.__forward_ref__=X,e.toString=function(){return J(this())},e}function ee(e){return te(e)?e():e}function te(e){return"function"==typeof e&&e.hasOwnProperty(Y)&&e.__forward_ref__===X}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function ne(e){return{token:e.token,providedIn:e.providedIn||null,factory:e.factory,value:void 0}}function re(e){return{factory:e.factory,providers:e.providers||[],imports:e.imports||[]}}function se(e){return oe(e,le)||oe(e,ce)}function oe(e,t){return e.hasOwnProperty(t)?e[t]:null}function ie(e){return e&&(e.hasOwnProperty(ue)||e.hasOwnProperty(ae))?e[ue]:null}const le=Q({\u0275prov:Q}),ue=Q({\u0275inj:Q}),ce=Q({ngInjectableDef:Q}),ae=Q({ngInjectorDef:Q});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */var de=function(e){return e[e.Default=0]="Default",e[e.Host=1]="Host",e[e.Self=2]="Self",e[e.SkipSelf=4]="SkipSelf",e[e.Optional=8]="Optional",e}({});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let he;function fe(e){const t=he;return he=e,t}function pe(e,t,n){const r=se(e);if(r&&"root"==r.providedIn)return void 0===r.value?r.value=r.factory():r.value;if(n&de.Optional)return null;if(void 0!==t)return t;throw new Error(`Injector: NOT_FOUND [${J(e)}]`)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function _e(e){return{toString:e}.toString()}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */var ye=function(e){return e[e.OnPush=0]="OnPush",e[e.Default=1]="Default",e}({}),me=function(e){return e[e.Emulated=0]="Emulated",e[e.None=2]="None",e[e.ShadowDom=3]="ShadowDom",e}({});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const ge="undefined"!=typeof globalThis&&globalThis,ve="undefined"!=typeof window&&window,be="undefined"!=typeof self&&"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&self,we="undefined"!=typeof global&&global,Ee=ge||we||ve||be,xe={},Ce=[],ke=Q({\u0275cmp:Q}),Te=Q({\u0275dir:Q}),Se=Q({\u0275pipe:Q}),Ie=Q({\u0275mod:Q}),Ae=Q({\u0275loc:Q}),Oe=Q({\u0275fac:Q}),De=Q({__NG_ELEMENT_ID__:Q});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let je=0;function He(e){return Fe(e)||function(e){return e[Te]||null}(e)}function Pe(e){return function(e){return e[Se]||null}(e)}const Ne={};function Me(e){const t={type:e.type,bootstrap:e.bootstrap||Ce,declarations:e.declarations||Ce,imports:e.imports||Ce,exports:e.exports||Ce,transitiveCompileScopes:null,schemas:e.schemas||null,id:e.id||null};return null!=e.id&&_e(()=>{Ne[e.id]=e.type}),t}function Re(e,t){if(null==e)return xe;const n={};for(const r in e)if(e.hasOwnProperty(r)){let s=e[r],o=s;Array.isArray(s)&&(o=s[1],s=s[0]),n[s]=r,t&&(t[s]=o)}return n}function Fe(e){return e[ke]||null}function Ve(e,t){const n=e[Ie]||null;if(!n&&!0===t)throw new Error(`Type ${J(e)} does not have '\u0275mod' property.`);return n}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Le(e){return Array.isArray(e)&&"object"==typeof e[1]}function Be(e){return Array.isArray(e)&&!0===e[1]}function Ze(e){return 0!=(8&e.flags)}function ze(e){return null!==e.template}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function $e(e,t){return e.hasOwnProperty(Oe)?e[Oe]:null}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Ue extends Error{constructor(e,t){super(function(e,t){return`${e?`NG0${e}: `:""}${t}`
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */}(e,t)),this.code=e}}function We(e){return"function"==typeof e?e.name||e.toString():"object"==typeof e&&null!=e&&"function"==typeof e.type?e.type.name||e.type.toString():function(e){return"string"==typeof e?e:null==e?"":String(e)}(e)}function qe(e,t){const n=t?" in "+t:"";throw new Ue("201",`No provider for ${We(e)} found${n}`)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Ge{constructor(e,t,n){this.previousValue=e,this.currentValue=t,this.firstChange=n}isFirstChange(){return this.firstChange}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Qe(){const e=Ke(this),t=null==e?void 0:e.current;if(t){const n=e.previous;if(n===xe)e.previous=t;else for(let e in t)n[e]=t[e];e.current=null,this.ngOnChanges(t)}}function Je(e,t,n,r){const s=Ke(e)||function(e,t){return e.__ngSimpleChanges__=t}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(e,{previous:xe,current:null}),o=s.current||(s.current={}),i=s.previous,l=this.declaredInputs[n],u=i[l];o[l]=new Ge(u&&u.currentValue,t,i===xe),e[r]=t}function Ke(e){return e.__ngSimpleChanges__||null}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let Ye=void 0;function Xe(e){return!!e.listen}const et={createRenderer:(e,t)=>void 0!==Ye?Ye:"undefined"!=typeof document?document:void 0};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function tt(e){for(;Array.isArray(e);)e=e[0];return e}function nt(e,t){return tt(t[e.index])}function rt(e,t){const n=t[e];return Le(n)?n:n[0]}function st(e){const t=function(e){return e.__ngContext__||null}(e);return t?Array.isArray(t)?t:t.lView:null}function ot(e){return 128==(128&e[2])}function it(e,t){return null==t?null:e[t]}function lt(e){e[18]=0}function ut(e,t){e[5]+=t;let n=e,r=e[3];for(;null!==r&&(1===t&&1===n[5]||-1===t&&0===n[5]);)r[5]+=t,n=r,r=r[3]}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const ct={lFrame:Tt(null),bindingsEnabled:!0,isInCheckNoChangesMode:!1};function at(){return ct.bindingsEnabled}function dt(){return ct.lFrame.lView}function ht(){return ct.lFrame.tView}function ft(){let e=pt();for(;null!==e&&64===e.type;)e=e.parent;return e}function pt(){return ct.lFrame.currentTNode}function _t(e,t){const n=ct.lFrame;n.currentTNode=e,n.isParent=t}function yt(){return ct.lFrame.isParent}function mt(){return ct.isInCheckNoChangesMode}function gt(e){ct.isInCheckNoChangesMode=e}function vt(e,t){const n=ct.lFrame;n.bindingIndex=n.bindingRootIndex=e,bt(t)}function bt(e){ct.lFrame.currentDirectiveIndex=e}function wt(e){ct.lFrame.currentQueryIndex=e}function Et(e){const t=e[1];return 2===t.type?t.declTNode:1===t.type?e[6]:null}function xt(e,t,n){if(n&de.SkipSelf){let r=t,s=e;for(;r=r.parent,!(null!==r||n&de.Host||(r=Et(s),null===r)||(s=s[15],10&r.type)););if(null===r)return!1;t=r,e=s}const r=ct.lFrame=kt();return r.currentTNode=t,r.lView=e,!0}function Ct(e){const t=kt(),n=e[1];ct.lFrame=t,t.currentTNode=n.firstChild,t.lView=e,t.tView=n,t.contextLView=e,t.bindingIndex=n.bindingStartIndex,t.inI18n=!1}function kt(){const e=ct.lFrame,t=null===e?null:e.child;return null===t?Tt(e):t}function Tt(e){const t={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:e,child:null,inI18n:!1};return null!==e&&(e.child=t),t}function St(){const e=ct.lFrame;return ct.lFrame=e.parent,e.currentTNode=null,e.lView=null,e}const It=St;function At(){const e=St();e.isParent=!0,e.tView=null,e.selectedIndex=-1,e.contextLView=null,e.elementDepthCount=0,e.currentDirectiveIndex=-1,e.currentNamespace=null,e.bindingRootIndex=-1,e.bindingIndex=-1,e.currentQueryIndex=0}function Ot(e){ct.lFrame.selectedIndex=e}function Dt(e,t){for(let n=t.directiveStart,r=t.directiveEnd;n<r;n++){const t=e.data[n].type.prototype,{ngAfterContentInit:r,ngAfterContentChecked:s,ngAfterViewInit:o,ngAfterViewChecked:i,ngOnDestroy:l}=t;r&&(e.contentHooks||(e.contentHooks=[])).push(-n,r),s&&((e.contentHooks||(e.contentHooks=[])).push(n,s),(e.contentCheckHooks||(e.contentCheckHooks=[])).push(n,s)),o&&(e.viewHooks||(e.viewHooks=[])).push(-n,o),i&&((e.viewHooks||(e.viewHooks=[])).push(n,i),(e.viewCheckHooks||(e.viewCheckHooks=[])).push(n,i)),null!=l&&(e.destroyHooks||(e.destroyHooks=[])).push(n,l)}}function jt(e,t,n){Nt(e,t,3,n)}function Ht(e,t,n,r){(3&e[2])===n&&Nt(e,t,n,r)}function Pt(e,t){let n=e[2];(3&n)===t&&(n&=2047,n+=1,e[2]=n)}function Nt(e,t,n,r){const s=null!=r?r:-1,o=t.length-1;let i=0;for(let l=void 0!==r?65535&e[18]:0;l<o;l++)if("number"==typeof t[l+1]){if(i=t[l],null!=r&&i>=r)break}else t[l]<0&&(e[18]+=65536),(i<s||-1==s)&&(Mt(e,n,t,l),e[18]=(4294901760&e[18])+l+2),l++}function Mt(e,t,n,r){const s=n[r]<0,o=n[r+1],i=e[s?-n[r]:n[r]];s?e[2]>>11<e[18]>>16&&(3&e[2])===t&&(e[2]+=2048,o.call(i)):o.call(i)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Rt{constructor(e,t,n){this.factory=e,this.resolving=!1,this.canSeeViewProviders=t,this.injectImpl=n}}function Ft(e,t,n){const r=Xe(e);let s=0;for(;s<n.length;){const o=n[s];if("number"==typeof o){if(0!==o)break;s++;const i=n[s++],l=n[s++],u=n[s++];r?e.setAttribute(t,l,u,i):t.setAttributeNS(i,l,u)}else{const i=o,l=n[++s];64===i.charCodeAt(0)?r&&e.setProperty(t,i,l):r?e.setAttribute(t,i,l):t.setAttribute(i,l),s++}}return s}function Vt(e,t){if(null===t||0===t.length);else if(null===e||0===e.length)e=t.slice();else{let n=-1;for(let r=0;r<t.length;r++){const s=t[r];"number"==typeof s?n=s:0===n||Lt(e,n,s,null,-1===n||2===n?t[++r]:null)}}return e}function Lt(e,t,n,r,s){let o=0,i=e.length;if(-1===t)i=-1;else for(;o<e.length;){const n=e[o++];if("number"==typeof n){if(n===t){i=-1;break}if(n>t){i=o-1;break}}}for(;o<e.length;){const t=e[o];if("number"==typeof t)break;if(t===n){if(null===r)return void(null!==s&&(e[o+1]=s));if(r===e[o+1])return void(e[o+2]=s)}o++,null!==r&&o++,null!==s&&o++}-1!==i&&(e.splice(i,0,t),o=i+1),e.splice(o++,0,n),null!==r&&e.splice(o++,0,r),null!==s&&e.splice(o++,0,s)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Bt(e){return 32767&e}function Zt(e,t){let n=e>>16,r=t;for(;n>0;)r=r[15],n--;return r}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let zt=!0;function $t(e){const t=zt;return zt=e,t}let Ut=0;function Wt(e,t){const n=Gt(e,t);if(-1!==n)return n;const r=t[1];r.firstCreatePass&&(e.injectorIndex=t.length,qt(r.data,e),qt(t,null),qt(r.blueprint,null));const s=Qt(e,t),o=e.injectorIndex;if(-1!==s){const e=Bt(s),n=Zt(s,t),r=n[1].data;for(let s=0;s<8;s++)t[o+s]=n[e+s]|r[e+s]}return t[o+8]=s,o}function qt(e,t){e.push(0,0,0,0,0,0,0,0,t)}function Gt(e,t){return-1===e.injectorIndex||e.parent&&e.parent.injectorIndex===e.injectorIndex||null===t[e.injectorIndex+8]?-1:e.injectorIndex}function Qt(e,t){if(e.parent&&-1!==e.parent.injectorIndex)return e.parent.injectorIndex;let n=0,r=null,s=t;for(;null!==s;){const e=s[1],t=e.type;if(r=2===t?e.declTNode:1===t?s[6]:null,null===r)return-1;if(n++,s=s[15],-1!==r.injectorIndex)return r.injectorIndex|n<<16}return-1}function Jt(e,t,n){!function(e,t,n){let r;"string"==typeof n?r=n.charCodeAt(0)||0:n.hasOwnProperty(De)&&(r=n[De]),null==r&&(r=n[De]=Ut++);const s=255&r,o=1<<s,i=64&s,l=32&s,u=t.data;128&s?i?l?u[e+7]|=o:u[e+6]|=o:l?u[e+5]|=o:u[e+4]|=o:i?l?u[e+3]|=o:u[e+2]|=o:l?u[e+1]|=o:u[e]|=o}(e,t,n)}function Kt(e,t,n){if(n&de.Optional)return e;qe(t,"NodeInjector")}function Yt(e,t,n,r){if(n&de.Optional&&void 0===r&&(r=null),0==(n&(de.Self|de.Host))){const s=e[9],o=fe(void 0);try{return s?s.get(t,r,n&de.Optional):pe(t,r,n&de.Optional)}finally{fe(o)}}return Kt(r,t,n)}const Xt={};function en(){return new on(ft(),dt())}function tn(e,t,n,r,s,o){const i=t[1],l=i.data[e+8],u=function(e,t,n,r,s){const o=e.providerIndexes,i=t.data,l=1048575&o,u=e.directiveStart,c=o>>20,a=s?l+c:e.directiveEnd;for(let d=r?l:l+c;d<a;d++){const e=i[d];if(d<u&&n===e||d>=u&&e.type===n)return d}if(s){const e=i[u];if(e&&ze(e)&&e.type===n)return u}return null}(l,i,n,null==r?function(e){return 2==(2&e.flags)}(l)&&zt:r!=i&&0!=(3&l.type),s&de.Host&&o===l);return null!==u?nn(t,i,u,l):Xt}function nn(e,t,n,r){let s=e[n];const o=t.data;if(s instanceof Rt){const i=s;i.resolving&&function(e,t){throw new Ue("200","Circular dependency in DI detected for "+e)}(We(o[n]));const l=$t(i.canSeeViewProviders);i.resolving=!0;const u=i.injectImpl?fe(i.injectImpl):null;xt(e,r,de.Default);try{s=e[n]=i.factory(void 0,o,e,r),t.firstCreatePass&&n>=r.directiveStart&&
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function(e,t,n){const{ngOnChanges:r,ngOnInit:s,ngDoCheck:o}=t.type.prototype;if(r){const r=((i=t).type.prototype.ngOnChanges&&(i.setInput=Je),Qe);(n.preOrderHooks||(n.preOrderHooks=[])).push(e,r),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,r)}var i;s&&(n.preOrderHooks||(n.preOrderHooks=[])).push(0-e,s),o&&((n.preOrderHooks||(n.preOrderHooks=[])).push(e,o),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,o))}(n,o[n],t)}finally{null!==u&&fe(u),$t(l),i.resolving=!1,It()}}return s}function rn(e,t,n){const r=64&e,s=32&e;let o;return o=128&e?r?s?n[t+7]:n[t+6]:s?n[t+5]:n[t+4]:r?s?n[t+3]:n[t+2]:s?n[t+1]:n[t],!!(o&1<<e)}function sn(e,t){return!(e&de.Self||e&de.Host&&t)}class on{constructor(e,t){this._tNode=e,this._lView=t}get(e,t){return function(e,t,n,r=de.Default,s){if(null!==e){const o=function(e){if("string"==typeof e)return e.charCodeAt(0)||0;const t=e.hasOwnProperty(De)?e[De]:void 0;return"number"==typeof t?t>=0?255&t:en:t}(n);if("function"==typeof o){if(!xt(t,e,r))return r&de.Host?Kt(s,n,r):Yt(t,n,r,s);try{const e=o();if(null!=e||r&de.Optional)return e;qe(n)}finally{It()}}else if("number"==typeof o){let s=null,i=Gt(e,t),l=-1,u=r&de.Host?t[16][6]:null;for((-1===i||r&de.SkipSelf)&&(l=-1===i?Qt(e,t):t[i+8],-1!==l&&sn(r,!1)?(s=t[1],i=Bt(l),t=Zt(l,t)):i=-1);-1!==i;){const e=t[1];if(rn(o,i,e.data)){const e=tn(i,t,n,s,r,u);if(e!==Xt)return e}l=t[i+8],-1!==l&&sn(r,t[1].data[i+8]===u)&&rn(o,i,t)?(s=e,i=Bt(l),t=Zt(l,t)):i=-1}}}return Yt(t,n,r,s)}(this._tNode,this._lView,e,void 0,t)}}function ln(e){const t=e;if(te(e))return()=>{const e=ln(ee(t));return e?e():null};let n=$e(t);if(null===n){const e=ie(t);n=e&&e.factory}return n||null}function un(e){return _e(()=>{const t=e.prototype.constructor,n=t[Oe]||ln(t),r=Object.prototype;let s=Object.getPrototypeOf(e.prototype).constructor;for(;s&&s!==r;){const e=s[Oe]||ln(s);if(e&&e!==n)return e;s=Object.getPrototypeOf(s)}return e=>new e})}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function cn(e,t,n){return _e(()=>{const r=function(e){return function(...t){if(e){const n=e(...t);for(const e in n)this[e]=n[e]}}}(t);function s(...e){if(this instanceof s)return r.apply(this,e),this;const t=new s(...e);return n.annotation=t,n;function n(e,n,r){const s=e.hasOwnProperty("__parameters__")?e.__parameters__:Object.defineProperty(e,"__parameters__",{value:[]}).__parameters__;for(;s.length<=r;)s.push(null);return(s[r]=s[r]||[]).push(t),e}}return n&&(s.prototype=Object.create(n.prototype)),s.prototype.ngMetadataName=e,s.annotationCls=s,s})}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class an{constructor(e,t){this._desc=e,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,"number"==typeof t?this.__NG_ELEMENT_ID__=t:void 0!==t&&(this.\u0275prov=ne({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}toString(){return"InjectionToken "+this._desc}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function dn(e,t){e.forEach(e=>Array.isArray(e)?dn(e,t):t(e))}function hn(e,t){return t>=e.length-1?e.pop():e.splice(t,1)[0]}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const fn=cn("Inject",e=>({token:e})),pn=cn("Optional"),_n=cn("Self"),yn=cn("SkipSelf"),mn=cn("Host"),gn={},vn=/\n/gm,bn=Q({provide:String,useValue:Q});let wn=void 0;function En(e){const t=wn;return wn=e,t}function xn(e,t=de.Default){if(void 0===wn)throw new Error("inject() must be called from an injection context");return null===wn?pe(e,void 0,t):wn.get(e,t&de.Optional?null:void 0,t)}function Cn(e,t=de.Default){return(he||xn)(ee(e),t)}function kn(e){const t=[];for(let n=0;n<e.length;n++){const r=ee(e[n]);if(Array.isArray(r)){if(0===r.length)throw new Error("Arguments array must have arguments.");let e=void 0,n=de.Default;for(let t=0;t<r.length;t++){const s=r[t];s instanceof pn||"Optional"===s.ngMetadataName||s===pn?n|=de.Optional:s instanceof yn||"SkipSelf"===s.ngMetadataName||s===yn?n|=de.SkipSelf:s instanceof _n||"Self"===s.ngMetadataName||s===_n?n|=de.Self:s instanceof mn||"Host"===s.ngMetadataName||s===mn?n|=de.Host:e=s instanceof fn||s===fn?s.token:s}t.push(Cn(e,n))}else t.push(Cn(r))}return t}function Tn(e){return e.ngDebugContext}function Sn(e){return e.ngOriginalError}function In(e,...t){e.error(...t)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class An{constructor(){this._console=console}handleError(e){const t=this._findOriginalError(e),n=this._findContext(e),r=function(e){return e.ngErrorLogger||In}(e);r(this._console,"ERROR",e),t&&r(this._console,"ORIGINAL ERROR",t),n&&r(this._console,"ERROR CONTEXT",n)}_findContext(e){return e?Tn(e)?Tn(e):this._findContext(Sn(e)):null}_findOriginalError(e){let t=Sn(e);for(;t&&Sn(t);)t=Sn(t);return t}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function On(e,t){e.__ngContext__=t}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Dn=(()=>("undefined"!=typeof requestAnimationFrame&&requestAnimationFrame||setTimeout).bind(Ee))();function jn(e){return e instanceof Function?e():e}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */var Hn=function(e){return e[e.Important=1]="Important",e[e.DashCase=2]="DashCase",e}({});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Pn(e,t){return(void 0)(e,t)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Nn(e){const t=e[3];return Be(t)?t[3]:t}function Mn(e){return Fn(e[13])}function Rn(e){return Fn(e[4])}function Fn(e){for(;null!==e&&!Be(e);)e=e[4];return e}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Vn(e,t,n,r,s){if(null!=r){let o,i=!1;Be(r)?o=r:Le(r)&&(i=!0,r=r[0]);const l=tt(r);0===e&&null!==n?null==s?$n(t,n,l):zn(t,n,l,s||null,!0):1===e&&null!==n?zn(t,n,l,s||null,!0):2===e?function(e,t,n){const r=function(e,t){return Xe(e)?e.parentNode(t):t.parentNode}(e,t);r&&function(e,t,n,r){Xe(e)?e.removeChild(t,n,r):t.removeChild(n)}(e,r,t,n)}(t,l,i):3===e&&t.destroyNode(l),null!=o&&function(e,t,n,r,s){const o=n[7];o!==tt(n)&&Vn(t,e,r,o,s);for(let i=10;i<n.length;i++){const s=n[i];Gn(s[1],s,e,t,r,o)}}(t,e,o,n,s)}}function Ln(e,t,n){return Xe(e)?e.createElement(t,n):null===n?e.createElement(t):e.createElementNS(n,t)}function Bn(e,t){const n=e[9],r=n.indexOf(t),s=t[3];1024&t[2]&&(t[2]&=-1025,ut(s,-1)),n.splice(r,1)}function Zn(e,t){if(!(256&t[2])){t[2]&=-129,t[2]|=256,function(e,t){let n;if(null!=e&&null!=(n=e.destroyHooks))for(let r=0;r<n.length;r+=2){const e=t[n[r]];if(!(e instanceof Rt)){const t=n[r+1];if(Array.isArray(t))for(let n=0;n<t.length;n+=2)t[n+1].call(e[t[n]]);else t.call(e)}}}(e,t),function(e,t){const n=e.cleanup,r=t[7];let s=-1;if(null!==n)for(let o=0;o<n.length-1;o+=2)if("string"==typeof n[o]){const e=n[o+1],i="function"==typeof e?e(t):tt(t[e]),l=r[s=n[o+2]],u=n[o+3];"boolean"==typeof u?i.removeEventListener(n[o],l,u):u>=0?r[s=u]():r[s=-u].unsubscribe(),o+=2}else{const e=r[s=n[o+1]];n[o].call(e)}if(null!==r){for(let e=s+1;e<r.length;e++)(0,r[e])();t[7]=null}}(e,t),1===t[1].type&&Xe(t[11])&&t[11].destroy();const n=t[17];if(null!==n&&Be(t[3])){n!==t[3]&&Bn(n,t);const r=t[19];null!==r&&r.detachView(e)}}}function zn(e,t,n,r,s){Xe(e)?e.insertBefore(t,n,r,s):t.insertBefore(n,r,s)}function $n(e,t,n){Xe(e)?e.appendChild(t,n):t.appendChild(n)}function Un(e,t,n,r,s){null!==r?zn(e,t,n,r,s):$n(e,t,n)}function Wn(e,t,n,r){const s=function(e,t,n){return function(e,t,n){let r=t;for(;null!==r&&40&r.type;)r=(t=r).parent;if(null===r)return n[0];if(2&r.flags){const t=e.data[r.directiveStart].encapsulation;if(t===me.None||t===me.Emulated)return null}return nt(r,n)}(e,t.parent,n)}(e,r,t),o=t[11],i=function(e,t,n){return function(e,t,n){return 40&e.type?nt(e,n):null}(e,0,n)}(r.parent||t[6],0,t);if(null!=s)if(Array.isArray(n))for(let l=0;l<n.length;l++)Un(o,s,n[l],i,!1);else Un(o,s,n,i,!1)}function qn(e,t,n,r,s,o,i){for(;null!=n;){const l=r[n.index],u=n.type;if(i&&0===t&&(l&&On(tt(l),r),n.flags|=4),64!=(64&n.flags))if(8&u)qn(e,t,n.child,r,s,o,!1),Vn(t,e,s,l,o);else if(32&u){const i=Pn(n,r);let u;for(;u=i();)Vn(t,e,s,u,o);Vn(t,e,s,l,o)}else 16&u?Qn(e,t,r,n,s,o):Vn(t,e,s,l,o);n=i?n.projectionNext:n.next}}function Gn(e,t,n,r,s,o){qn(n,r,e.firstChild,t,s,o,!1)}function Qn(e,t,n,r,s,o){const i=n[16],l=i[6].projection[r.projection];if(Array.isArray(l))for(let u=0;u<l.length;u++)Vn(t,e,s,l[u],o);else qn(e,t,l,i[3],s,o,!0)}function Jn(e,t,n){Xe(e)?e.setAttribute(t,"style",n):t.style.cssText=n}function Kn(e,t,n){Xe(e)?""===n?e.removeAttribute(t,"class"):e.setAttribute(t,"class",n):t.className=n}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Yn(e,t,n){let r=e.length;for(;;){const s=e.indexOf(t,n);if(-1===s)return s;if(0===s||e.charCodeAt(s-1)<=32){const n=t.length;if(s+n===r||e.charCodeAt(s+n)<=32)return s}n=s+1}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Xn(e,t,n){let r=0;for(;r<e.length;){let s=e[r++];if(n&&"class"===s){if(s=e[r],-1!==Yn(s.toLowerCase(),t,0))return!0}else if(1===s){for(;r<e.length&&"string"==typeof(s=e[r++]);)if(s.toLowerCase()===t)return!0;return!1}}return!1}function er(e){return 4===e.type&&"ng-template"!==e.value}function tr(e,t,n){return t===(4!==e.type||n?e.value:"ng-template")}function nr(e,t,n){let r=4;const s=e.attrs||[],o=function(e){for(let n=0;n<e.length;n++)if(3===(t=e[n])||4===t||6===t)return n;var t;return e.length}(s);let i=!1;for(let l=0;l<t.length;l++){const u=t[l];if("number"!=typeof u){if(!i)if(4&r){if(r=2|1&r,""!==u&&!tr(e,u,n)||""===u&&1===t.length){if(rr(r))return!1;i=!0}}else{const c=8&r?u:t[++l];if(8&r&&null!==e.attrs){if(!Xn(e.attrs,c,n)){if(rr(r))return!1;i=!0}continue}const a=sr(8&r?"class":u,s,er(e),n);if(-1===a){if(rr(r))return!1;i=!0;continue}if(""!==c){let e;e=a>o?"":s[a+1].toLowerCase();const t=8&r?e:null;if(t&&-1!==Yn(t,c,0)||2&r&&c!==e){if(rr(r))return!1;i=!0}}}}else{if(!i&&!rr(r)&&!rr(u))return!1;if(i&&rr(u))continue;i=!1,r=u|1&r}}return rr(r)||i}function rr(e){return 0==(1&e)}function sr(e,t,n,r){if(null===t)return-1;let s=0;if(r||!n){let n=!1;for(;s<t.length;){const r=t[s];if(r===e)return s;if(3===r||6===r)n=!0;else{if(1===r||2===r){let e=t[++s];for(;"string"==typeof e;)e=t[++s];continue}if(4===r)break;if(0===r){s+=4;continue}}s+=n?1:2}return-1}return function(e,t){let n=e.indexOf(4);if(n>-1)for(n++;n<e.length;){const r=e[n];if("number"==typeof r)return-1;if(r===t)return n;n++}return-1}(t,e)}function or(e,t,n=!1){for(let r=0;r<t.length;r++)if(nr(e,t[r],n))return!0;return!1}function ir(e,t){return e?":not("+t.trim()+")":t}function lr(e){let t=e[0],n=1,r=2,s="",o=!1;for(;n<e.length;){let i=e[n];if("string"==typeof i)if(2&r){const t=e[++n];s+="["+i+(t.length>0?'="'+t+'"':"")+"]"}else 8&r?s+="."+i:4&r&&(s+=" "+i);else""===s||rr(i)||(t+=ir(o,s),s=""),r=i,o=o||!rr(r);n++}return""!==s&&(t+=ir(o,s)),t}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const ur={};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function cr(e,t){const n=e.contentQueries;if(null!==n)for(let r=0;r<n.length;r+=2){const s=n[r],o=n[r+1];if(-1!==o){const n=e.data[o];wt(s),n.contentQueries(2,t[o],o)}}}function ar(e,t,n,r,s,o,i,l,u,c){const a=t.blueprint.slice();return a[0]=s,a[2]=140|r,lt(a),a[3]=a[15]=e,a[8]=n,a[10]=i||e&&e[10],a[11]=l||e&&e[11],a[12]=u||e&&e[12]||null,a[9]=c||e&&e[9]||null,a[6]=o,a[16]=2==t.type?e[16]:a,a}function dr(e,t,n,r,s){let o=e.data[t];if(null===o)o=function(e,t,n,r,s){const o=pt(),i=yt(),l=e.data[t]=function(e,t,n,r,s,o){return{type:n,index:r,insertBeforeIndex:null,injectorIndex:t?t.injectorIndex:-1,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,propertyBindings:null,flags:0,providerIndexes:0,value:s,attrs:o,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tViews:null,next:null,projectionNext:null,child:null,parent:t,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}(0,i?o:o&&o.parent,n,t,r,s);return null===e.firstChild&&(e.firstChild=l),null!==o&&(i?null==o.child&&null!==l.parent&&(o.child=l):null===o.next&&(o.next=l)),l}(e,t,n,r,s),ct.lFrame.inI18n&&(o.flags|=64);else if(64&o.type){o.type=n,o.value=r,o.attrs=s;const e=function(){const e=ct.lFrame,t=e.currentTNode;return e.isParent?t:t.parent}();o.injectorIndex=null===e?-1:e.injectorIndex}return _t(o,!0),o}function hr(e,t,n,r){if(0===n)return-1;const s=t.length;for(let o=0;o<n;o++)t.push(r),e.blueprint.push(r),e.data.push(null);return s}function fr(e,t,n){Ct(t);try{const r=e.viewQuery;null!==r&&Nr(1,r,n);const s=e.template;null!==s&&yr(e,t,s,1,n),e.firstCreatePass&&(e.firstCreatePass=!1),e.staticContentQueries&&cr(e,t),e.staticViewQueries&&Nr(2,e.viewQuery,n);const o=e.components;null!==o&&function(e,t){for(let n=0;n<t.length;n++)Dr(e,t[n])}(t,o)}catch(r){throw e.firstCreatePass&&(e.incompleteFirstPass=!0),r}finally{t[2]&=-5,At()}}function pr(e,t,n,r){const s=t[2];if(256==(256&s))return;Ct(t);const o=mt();try{lt(t),ct.lFrame.bindingIndex=e.bindingStartIndex,null!==n&&yr(e,t,n,2,r);const i=3==(3&s);if(!o)if(i){const n=e.preOrderCheckHooks;null!==n&&jt(t,n,null)}else{const n=e.preOrderHooks;null!==n&&Ht(t,n,0,null),Pt(t,0)}if(function(e){for(let t=Mn(e);null!==t;t=Rn(t)){if(!t[2])continue;const e=t[9];for(let t=0;t<e.length;t++){const n=e[t],r=n[3];0==(1024&n[2])&&ut(r,1),n[2]|=1024}}}(t),function(e){for(let t=Mn(e);null!==t;t=Rn(t))for(let e=10;e<t.length;e++){const n=t[e],r=n[1];ot(n)&&pr(r,n,r.template,n[8])}}(t),null!==e.contentQueries&&cr(e,t),!o)if(i){const n=e.contentCheckHooks;null!==n&&jt(t,n)}else{const n=e.contentHooks;null!==n&&Ht(t,n,1),Pt(t,1)}!function(e,t){const n=e.hostBindingOpCodes;if(null!==n)try{for(let e=0;e<n.length;e++){const r=n[e];if(r<0)Ot(~r);else{const s=r,o=n[++e],i=n[++e];vt(o,s),i(2,t[s])}}}finally{Ot(-1)}}(e,t);const l=e.components;null!==l&&function(e,t){for(let n=0;n<t.length;n++)Ar(e,t[n])}(t,l);const u=e.viewQuery;if(null!==u&&Nr(2,u,r),!o)if(i){const n=e.viewCheckHooks;null!==n&&jt(t,n)}else{const n=e.viewHooks;null!==n&&Ht(t,n,2),Pt(t,2)}!0===e.firstUpdatePass&&(e.firstUpdatePass=!1),o||(t[2]&=-73),1024&t[2]&&(t[2]&=-1025,ut(t[3],-1))}finally{At()}}function _r(e,t,n,r){const s=t[10],o=!mt(),i=4==(4&t[2]);try{o&&!i&&s.begin&&s.begin(),i&&fr(e,t,r),pr(e,t,n,r)}finally{o&&!i&&s.end&&s.end()}}function yr(e,t,n,r,s){const o=ct.lFrame.selectedIndex;try{Ot(-1),2&r&&t.length>20&&function(e,t,n,r){if(!r)if(3==(3&t[2])){const n=e.preOrderCheckHooks;null!==n&&jt(t,n,20)}else{const n=e.preOrderHooks;null!==n&&Ht(t,n,0,20)}Ot(20)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(e,t,0,mt()),n(r,s)}finally{Ot(o)}}function mr(e){const t=e.tView;return null===t||t.incompleteFirstPass?e.tView=gr(1,null,e.template,e.decls,e.vars,e.directiveDefs,e.pipeDefs,e.viewQuery,e.schemas,e.consts):t}function gr(e,t,n,r,s,o,i,l,u,c){const a=20+r,d=a+s,h=function(e,t){const n=[];for(let r=0;r<t;r++)n.push(r<e?null:ur);return n}(a,d),f="function"==typeof c?c():c;return h[1]={type:e,blueprint:h,template:n,queries:null,viewQuery:l,declTNode:t,data:h.slice().fill(null,a),bindingStartIndex:a,expandoStartIndex:d,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:"function"==typeof o?o():o,pipeRegistry:"function"==typeof i?i():i,firstChild:null,schemas:u,consts:f,incompleteFirstPass:!1}}function vr(e,t,n){for(let r in e)if(e.hasOwnProperty(r)){const s=e[r];(n=null===n?{}:n).hasOwnProperty(r)?n[r].push(t,s):n[r]=[t,s]}return n}function br(e,t,n,r,s,o){const i=o.hostBindings;if(i){let n=e.hostBindingOpCodes;null===n&&(n=e.hostBindingOpCodes=[]);const o=~t.index;(function(e){let t=e.length;for(;t>0;){const n=e[--t];if("number"==typeof n&&n<0)return n}return 0})(n)!=o&&n.push(o),n.push(r,s,i)}}function wr(e,t){null!==e.hostBindings&&e.hostBindings(1,t)}function Er(e,t){t.flags|=2,(e.components||(e.components=[])).push(t.index)}function xr(e,t,n){if(n){if(t.exportAs)for(let r=0;r<t.exportAs.length;r++)n[t.exportAs[r]]=e;ze(t)&&(n[""]=e)}}function Cr(e,t,n){e.flags|=1,e.directiveStart=t,e.directiveEnd=t+n,e.providerIndexes=t}function kr(e,t,n,r,s){e.data[r]=s;const o=s.factory||(s.factory=$e(s.type)),i=new Rt(o,ze(s),null);e.blueprint[r]=i,n[r]=i,br(e,t,0,r,hr(e,n,s.hostVars,ur),s)}function Tr(e,t,n){const r=nt(t,e),s=mr(n),o=e[10],i=jr(e,ar(e,s,null,n.onPush?64:16,r,t,o,o.createRenderer(r,n),null,null));e[t.index]=i}function Sr(e,t,n,r,s,o){const i=o[t];if(null!==i){const e=r.setInput;for(let t=0;t<i.length;){const s=i[t++],o=i[t++],l=i[t++];null!==e?r.setInput(n,l,s,o):n[o]=l}}}function Ir(e,t){let n=null,r=0;for(;r<t.length;){const s=t[r];if(0!==s)if(5!==s){if("number"==typeof s)break;e.hasOwnProperty(s)&&(null===n&&(n=[]),n.push(s,e[s],t[r+1])),r+=2}else r+=2;else r+=4}return n}function Ar(e,t){const n=rt(t,e);if(ot(n)){const e=n[1];80&n[2]?pr(e,n,e.template,n[8]):n[5]>0&&Or(n)}}function Or(e){for(let n=Mn(e);null!==n;n=Rn(n))for(let e=10;e<n.length;e++){const t=n[e];if(1024&t[2]){const e=t[1];pr(e,t,e.template,t[8])}else t[5]>0&&Or(t)}const t=e[1].components;if(null!==t)for(let n=0;n<t.length;n++){const r=rt(t[n],e);ot(r)&&r[5]>0&&Or(r)}}function Dr(e,t){const n=rt(t,e),r=n[1];!function(e,t){for(let n=t.length;n<e.blueprint.length;n++)t.push(e.blueprint[n])}(r,n),fr(r,n,n[8])}function jr(e,t){return e[13]?e[14][4]=t:e[13]=t,e[14]=t,t}function Hr(e,t,n){const r=t[10];r.begin&&r.begin();try{pr(e,t,e.template,n)}catch(s){throw function(e,t){const n=e[9],r=n?n.get(An,null):null;r&&r.handleError(t)}(t,s),s}finally{r.end&&r.end()}}function Pr(e){!function(e){for(let t=0;t<e.components.length;t++){const n=e.components[t],r=st(n),s=r[1];_r(s,r,s.template,n)}}(e[8])}function Nr(e,t,n){wt(0),t(e,n)}const Mr=(()=>Promise.resolve(null))();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Rr(e,t,n){let r=n?e.styles:null,s=n?e.classes:null,o=0;if(null!==t)for(let i=0;i<t.length;i++){const e=t[i];"number"==typeof e?o=e:1==o?s=K(s,e):2==o&&(r=K(r,e+": "+t[++i]+";"))}n?e.styles=r:e.stylesWithoutHost=r,n?e.classes=s:e.classesWithoutHost=s}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Fr=new an("INJECTOR",-1);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Vr{get(e,t=gn){if(t===gn){const t=new Error(`NullInjectorError: No provider for ${J(e)}!`);throw t.name="NullInjectorError",t}return t}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Lr=new an("Set Injector scope."),Br={},Zr={},zr=[];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let $r=void 0;function Ur(){return void 0===$r&&($r=new Vr),$r}function Wr(e,t=null,n=null,r){return new qr(e,n,t||Ur(),r)}class qr{constructor(e,t,n,r=null){this.parent=n,this.records=new Map,this.injectorDefTypes=new Set,this.onDestroy=new Set,this._destroyed=!1;const s=[];t&&dn(t,n=>this.processProvider(n,e,t)),dn([e],e=>this.processInjectorType(e,[],s)),this.records.set(Fr,Qr(void 0,this));const o=this.records.get(Lr);this.scope=null!=o?o.value:null,this.source=r||("object"==typeof e?null:J(e))}get destroyed(){return this._destroyed}destroy(){this.assertNotDestroyed(),this._destroyed=!0;try{this.onDestroy.forEach(e=>e.ngOnDestroy())}finally{this.records.clear(),this.onDestroy.clear(),this.injectorDefTypes.clear()}}get(e,t=gn,n=de.Default){this.assertNotDestroyed();const r=En(this);try{if(!(n&de.SkipSelf)){let t=this.records.get(e);if(void 0===t){const n=("function"==typeof(s=e)||"object"==typeof s&&s instanceof an)&&se(e);t=n&&this.injectableDefInScope(n)?Qr(Gr(e),Br):null,this.records.set(e,t)}if(null!=t)return this.hydrate(e,t)}return(n&de.Self?Ur():this.parent).get(e,t=n&de.Optional&&t===gn?null:t)}catch(o){if("NullInjectorError"===o.name){if((o.ngTempTokenPath=o.ngTempTokenPath||[]).unshift(J(e)),r)throw o;return function(e,t,n,r){const s=e.ngTempTokenPath;throw t.__source&&s.unshift(t.__source),e.message=function(e,t,n,r=null){e=e&&"\n"===e.charAt(0)&&"\u0275"==e.charAt(1)?e.substr(2):e;let s=J(t);if(Array.isArray(t))s=t.map(J).join(" -> ");else if("object"==typeof t){let e=[];for(let n in t)if(t.hasOwnProperty(n)){let r=t[n];e.push(n+":"+("string"==typeof r?JSON.stringify(r):J(r)))}s=`{${e.join(", ")}}`}return`${n}${r?"("+r+")":""}[${s}]: ${e.replace(vn,"\n  ")}`
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */}("\n"+e.message,s,n,r),e.ngTokenPath=s,e.ngTempTokenPath=null,e}(o,e,"R3InjectorError",this.source)}throw o}finally{En(r)}var s;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */}_resolveInjectorDefTypes(){this.injectorDefTypes.forEach(e=>this.get(e))}toString(){const e=[];return this.records.forEach((t,n)=>e.push(J(n))),`R3Injector[${e.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new Error("Injector has already been destroyed.")}processInjectorType(e,t,n){if(!(e=ee(e)))return!1;let r=ie(e);const s=null==r&&e.ngModule||void 0,o=void 0===s?e:s,i=-1!==n.indexOf(o);if(void 0!==s&&(r=ie(s)),null==r)return!1;if(null!=r.imports&&!i){let e;n.push(o);try{dn(r.imports,r=>{this.processInjectorType(r,t,n)&&(void 0===e&&(e=[]),e.push(r))})}finally{}if(void 0!==e)for(let t=0;t<e.length;t++){const{ngModule:n,providers:r}=e[t];dn(r,e=>this.processProvider(e,n,r||zr))}}this.injectorDefTypes.add(o),this.records.set(o,Qr(r.factory,Br));const l=r.providers;if(null!=l&&!i){const t=e;dn(l,e=>this.processProvider(e,t,l))}return void 0!==s&&void 0!==e.providers}processProvider(e,t,n){let r=Kr(e=ee(e))?e:ee(e&&e.provide);const s=function(e,t,n){return Jr(e)?Qr(void 0,e.useValue):Qr(function(e,t,n){let r=void 0;if(Kr(e)){const t=ee(e);return $e(t)||Gr(t)}if(Jr(e))r=()=>ee(e.useValue);else if((s=e)&&s.useFactory)r=()=>e.useFactory(...kn(e.deps||[]));else if(function(e){return!(!e||!e.useExisting)}(e))r=()=>Cn(ee(e.useExisting));else{const t=ee(e&&(e.useClass||e.provide));if(!function(e){return!!e.deps}(e))return $e(t)||Gr(t);r=()=>new t(...kn(e.deps))}var s;return r}(e),Br)}(e);if(Kr(e)||!0!==e.multi)this.records.get(r);else{let t=this.records.get(r);t||(t=Qr(void 0,Br,!0),t.factory=()=>kn(t.multi),this.records.set(r,t)),r=e,t.multi.push(e)}this.records.set(r,s)}hydrate(e,t){var n;return t.value===Br&&(t.value=Zr,t.value=t.factory()),"object"==typeof t.value&&t.value&&null!==(n=t.value)&&"object"==typeof n&&"function"==typeof n.ngOnDestroy&&this.onDestroy.add(t.value),t.value}injectableDefInScope(e){return!!e.providedIn&&("string"==typeof e.providedIn?"any"===e.providedIn||e.providedIn===this.scope:this.injectorDefTypes.has(e.providedIn))}}function Gr(e){const t=se(e),n=null!==t?t.factory:$e(e);if(null!==n)return n;const r=ie(e);if(null!==r)return r.factory;if(e instanceof an)throw new Error(`Token ${J(e)} is missing a \u0275prov definition.`);if(e instanceof Function)return function(e){const t=e.length;if(t>0){const n=function(e,t){const n=[];for(let r=0;r<e;r++)n.push("?");return n}(t);throw new Error(`Can't resolve all parameters for ${J(e)}: (${n.join(", ")}).`)}const n=function(e){const t=e&&(e[le]||e[ce]);if(t){const n=function(e){if(e.hasOwnProperty("name"))return e.name;const t=(""+e).match(/^function\s*([^\s(]+)/);return null===t?"":t[1]}(e);return console.warn(`DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`),t}return null}(e);return null!==n?()=>n.factory(e):()=>new e}(e);throw new Error("unreachable")}function Qr(e,t,n=!1){return{factory:e,value:t,multi:n?[]:void 0}}function Jr(e){return null!==e&&"object"==typeof e&&bn in e}function Kr(e){return"function"==typeof e}const Yr=function(e,t,n){return function(e,t=null,n=null,r){const s=Wr(e,t,n,r);return s._resolveInjectorDefTypes(),s}({name:n},t,e,n)};let Xr=(()=>{class e{static create(e,t){return Array.isArray(e)?Yr(e,t,""):Yr(e.providers,e.parent,e.name||"")}}return e.THROW_IF_NOT_FOUND=gn,e.NULL=new Vr,e.\u0275prov=ne({token:e,providedIn:"any",factory:()=>Cn(Fr)}),e.__NG_ELEMENT_ID__=-1,e})();function es(e,t){Dt(st(e)[1],ft())}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let ts=null;function ns(){if(!ts){const e=Ee.Symbol;if(e&&e.iterator)ts=e.iterator;else{const e=Object.getOwnPropertyNames(Map.prototype);for(let t=0;t<e.length;++t){const n=e[t];"entries"!==n&&"size"!==n&&Map.prototype[n]===Map.prototype.entries&&(ts=n)}}}return ts}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function rs(e){return!!ss(e)&&(Array.isArray(e)||!(e instanceof Map)&&ns()in e)}function ss(e){return null!==e&&("function"==typeof e||"object"==typeof e)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function os(e,t,n,r,s){const o=s?"class":"style";!function(e,t,n,r,s){for(let o=0;o<n.length;){const i=n[o++],l=n[o++],u=t[i],c=e.data[i];null!==c.setInput?c.setInput(u,s,r,l):u[l]=s}}(e,n,t.inputs[o],o,r)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function is(e,t,n,r){const s=dt(),o=ht(),i=20+e,l=s[11],u=s[i]=Ln(l,t,ct.lFrame.currentNamespace),c=o.firstCreatePass?function(e,t,n,r,s,o,i){const l=t.consts,u=dr(t,e,2,s,it(l,o));return function(e,t,n,r){let s=!1;if(at()){const o=function(e,t,n){const r=e.directiveRegistry;let s=null;if(r)for(let o=0;o<r.length;o++){const i=r[o];or(n,i.selectors,!1)&&(s||(s=[]),Jt(Wt(n,t),e,i.type),ze(i)?(Er(e,n),s.unshift(i)):s.push(i))}return s}(e,t,n),i=null===r?null:{"":-1};if(null!==o){s=!0,Cr(n,e.data.length,o.length);for(let e=0;e<o.length;e++){const t=o[e];t.providersResolver&&t.providersResolver(t)}let r=!1,l=!1,u=hr(e,t,o.length,null);for(let s=0;s<o.length;s++){const c=o[s];n.mergedAttrs=Vt(n.mergedAttrs,c.hostAttrs),kr(e,n,t,u,c),xr(u,c,i),null!==c.contentQueries&&(n.flags|=8),null===c.hostBindings&&null===c.hostAttrs&&0===c.hostVars||(n.flags|=128);const a=c.type.prototype;!r&&(a.ngOnChanges||a.ngOnInit||a.ngDoCheck)&&((e.preOrderHooks||(e.preOrderHooks=[])).push(n.index),r=!0),l||!a.ngOnChanges&&!a.ngDoCheck||((e.preOrderCheckHooks||(e.preOrderCheckHooks=[])).push(n.index),l=!0),u++}!function(e,t){const n=t.directiveEnd,r=e.data,s=t.attrs,o=[];let i=null,l=null;for(let u=t.directiveStart;u<n;u++){const e=r[u],n=e.inputs,c=null===s||er(t)?null:Ir(n,s);o.push(c),i=vr(n,u,i),l=vr(e.outputs,u,l)}null!==i&&(i.hasOwnProperty("class")&&(t.flags|=16),i.hasOwnProperty("style")&&(t.flags|=32)),t.initialInputs=o,t.inputs=i,t.outputs=l}(e,n)}i&&function(e,t,n){if(t){const r=e.localNames=[];for(let e=0;e<t.length;e+=2){const s=n[t[e+1]];if(null==s)throw new Ue("301",`Export of name '${t[e+1]}' not found!`);r.push(t[e],s)}}}(n,r,i)}n.mergedAttrs=Vt(n.mergedAttrs,n.attrs)}(t,n,u,it(l,i)),null!==u.attrs&&Rr(u,u.attrs,!1),null!==u.mergedAttrs&&Rr(u,u.mergedAttrs,!0),null!==t.queries&&t.queries.elementStart(t,u),u}(i,o,s,0,t,n,r):o.data[i];_t(c,!0);const a=c.mergedAttrs;null!==a&&Ft(l,u,a);const d=c.classes;null!==d&&Kn(l,u,d);const h=c.styles;null!==h&&Jn(l,u,h),64!=(64&c.flags)&&Wn(o,s,u,c),0===ct.lFrame.elementDepthCount&&On(u,s),ct.lFrame.elementDepthCount++,function(e){return 1==(1&e.flags)}(c)&&(function(e,t,n){at()&&(function(e,t,n,r){const s=n.directiveStart,o=n.directiveEnd;e.firstCreatePass||Wt(n,t),On(r,t);const i=n.initialInputs;for(let l=s;l<o;l++){const r=e.data[l],o=ze(r);o&&Tr(t,n,r);const u=nn(t,e,l,n);On(u,t),null!==i&&Sr(0,l-s,u,r,0,i),o&&(rt(n.index,t)[8]=u)}}(e,t,n,nt(n,t)),128==(128&n.flags)&&function(e,t,n){const r=n.directiveStart,s=n.directiveEnd,o=n.index,i=ct.lFrame.currentDirectiveIndex;try{Ot(o);for(let n=r;n<s;n++){const r=e.data[n],s=t[n];bt(n),null===r.hostBindings&&0===r.hostVars&&null===r.hostAttrs||wr(r,s)}}finally{Ot(-1),bt(i)}}(e,t,n))}(o,s,c),function(e,t,n){if(Ze(t)){const r=t.directiveEnd;for(let s=t.directiveStart;s<r;s++){const t=e.data[s];t.contentQueries&&t.contentQueries(1,n[s],s)}}}(o,c,s)),null!==r&&function(e,t,n=nt){const r=t.localNames;if(null!==r){let s=t.index+1;for(let o=0;o<r.length;o+=2){const i=r[o+1],l=-1===i?n(t,e):e[i];e[s++]=l}}}(s,c)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function ls(e){return!!e&&"function"==typeof e.then}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const us=void 0;var cs=["en",[["a","p"],["AM","PM"],us],[["AM","PM"],us,us],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],us,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],us,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",us,"{1} 'at' {0}",us],[".",",",";","%","+","-","E","\xd7","\u2030","\u221e","NaN",":"],["#,##0.###","#,##0%","\xa4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",function(e){let t=Math.floor(Math.abs(e)),n=e.toString().replace(/^[^.]*\.?/,"").length;return 1===t&&0===n?1:5}];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let as={};function ds(e){return e in as||(as[e]=Ee.ng&&Ee.ng.common&&Ee.ng.common.locales&&Ee.ng.common.locales[e]),as[e]}var hs=function(e){return e[e.LocaleId=0]="LocaleId",e[e.DayPeriodsFormat=1]="DayPeriodsFormat",e[e.DayPeriodsStandalone=2]="DayPeriodsStandalone",e[e.DaysFormat=3]="DaysFormat",e[e.DaysStandalone=4]="DaysStandalone",e[e.MonthsFormat=5]="MonthsFormat",e[e.MonthsStandalone=6]="MonthsStandalone",e[e.Eras=7]="Eras",e[e.FirstDayOfWeek=8]="FirstDayOfWeek",e[e.WeekendRange=9]="WeekendRange",e[e.DateFormat=10]="DateFormat",e[e.TimeFormat=11]="TimeFormat",e[e.DateTimeFormat=12]="DateTimeFormat",e[e.NumberSymbols=13]="NumberSymbols",e[e.NumberFormats=14]="NumberFormats",e[e.CurrencyCode=15]="CurrencyCode",e[e.CurrencySymbol=16]="CurrencySymbol",e[e.CurrencyName=17]="CurrencyName",e[e.Currencies=18]="Currencies",e[e.Directionality=19]="Directionality",e[e.PluralCase=20]="PluralCase",e[e.ExtraData=21]="ExtraData",e}({});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let fs="en-US";function ps(e){var t,n;n="Expected localeId to be defined",null==(t=e)&&function(e,t,n,r){throw new Error("ASSERTION ERROR: "+e+` [Expected=> null != ${t} <=Actual]`)}(n,t),"string"==typeof e&&(fs=e.toLowerCase().replace(/_/g,"-"))}class _s{}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class ys{resolveComponentFactory(e){throw function(e){const t=Error(`No component factory found for ${J(e)}. Did you add it to @NgModule.entryComponents?`);return t.ngComponent=e,t}(e)}}let ms=(()=>{class e{}return e.NULL=new ys,e})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function gs(...e){}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function vs(e,t){return new ws(nt(e,t))}const bs=function(){return vs(ft(),dt())};let ws=(()=>{class e{constructor(e){this.nativeElement=e}}return e.__NG_ELEMENT_ID__=bs,e})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Es{}let xs=(()=>{class e{}return e.\u0275prov=ne({token:e,providedIn:"root",factory:()=>null}),e})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Cs{constructor(e){this.full=e,this.major=e.split(".")[0],this.minor=e.split(".")[1],this.patch=e.split(".").slice(2).join(".")}}const ks=new Cs("11.0.9");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Ts{constructor(){}supports(e){return rs(e)}create(e){return new Is(e)}}const Ss=(e,t)=>t;class Is{constructor(e){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=e||Ss}forEachItem(e){let t;for(t=this._itHead;null!==t;t=t._next)e(t)}forEachOperation(e){let t=this._itHead,n=this._removalsHead,r=0,s=null;for(;t||n;){const o=!n||t&&t.currentIndex<js(n,r,s)?t:n,i=js(o,r,s),l=o.currentIndex;if(o===n)r--,n=n._nextRemoved;else if(t=t._next,null==o.previousIndex)r++;else{s||(s=[]);const e=i-r,t=l-r;if(e!=t){for(let n=0;n<e;n++){const r=n<s.length?s[n]:s[n]=0,o=r+n;t<=o&&o<e&&(s[n]=r+1)}s[o.previousIndex]=t-e}}i!==l&&e(o,i,l)}}forEachPreviousItem(e){let t;for(t=this._previousItHead;null!==t;t=t._nextPrevious)e(t)}forEachAddedItem(e){let t;for(t=this._additionsHead;null!==t;t=t._nextAdded)e(t)}forEachMovedItem(e){let t;for(t=this._movesHead;null!==t;t=t._nextMoved)e(t)}forEachRemovedItem(e){let t;for(t=this._removalsHead;null!==t;t=t._nextRemoved)e(t)}forEachIdentityChange(e){let t;for(t=this._identityChangesHead;null!==t;t=t._nextIdentityChange)e(t)}diff(e){if(null==e&&(e=[]),!rs(e))throw new Error(`Error trying to diff '${J(e)}'. Only arrays and iterables are allowed`);return this.check(e)?this:null}onDestroy(){}check(e){this._reset();let t,n,r,s=this._itHead,o=!1;if(Array.isArray(e)){this.length=e.length;for(let t=0;t<this.length;t++)n=e[t],r=this._trackByFn(t,n),null!==s&&Object.is(s.trackById,r)?(o&&(s=this._verifyReinsertion(s,n,r,t)),Object.is(s.item,n)||this._addIdentityChange(s,n)):(s=this._mismatch(s,n,r,t),o=!0),s=s._next}else t=0,function(e,t){if(Array.isArray(e))for(let n=0;n<e.length;n++)t(e[n]);else{const n=e[ns()]();let r;for(;!(r=n.next()).done;)t(r.value)}}(e,e=>{r=this._trackByFn(t,e),null!==s&&Object.is(s.trackById,r)?(o&&(s=this._verifyReinsertion(s,e,r,t)),Object.is(s.item,e)||this._addIdentityChange(s,e)):(s=this._mismatch(s,e,r,t),o=!0),s=s._next,t++}),this.length=t;return this._truncate(s),this.collection=e,this.isDirty}get isDirty(){return null!==this._additionsHead||null!==this._movesHead||null!==this._removalsHead||null!==this._identityChangesHead}_reset(){if(this.isDirty){let e;for(e=this._previousItHead=this._itHead;null!==e;e=e._next)e._nextPrevious=e._next;for(e=this._additionsHead;null!==e;e=e._nextAdded)e.previousIndex=e.currentIndex;for(this._additionsHead=this._additionsTail=null,e=this._movesHead;null!==e;e=e._nextMoved)e.previousIndex=e.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(e,t,n,r){let s;return null===e?s=this._itTail:(s=e._prev,this._remove(e)),null!==(e=null===this._linkedRecords?null:this._linkedRecords.get(n,r))?(Object.is(e.item,t)||this._addIdentityChange(e,t),this._moveAfter(e,s,r)):null!==(e=null===this._unlinkedRecords?null:this._unlinkedRecords.get(n,null))?(Object.is(e.item,t)||this._addIdentityChange(e,t),this._reinsertAfter(e,s,r)):e=this._addAfter(new As(t,n),s,r),e}_verifyReinsertion(e,t,n,r){let s=null===this._unlinkedRecords?null:this._unlinkedRecords.get(n,null);return null!==s?e=this._reinsertAfter(s,e._prev,r):e.currentIndex!=r&&(e.currentIndex=r,this._addToMoves(e,r)),e}_truncate(e){for(;null!==e;){const t=e._next;this._addToRemovals(this._unlink(e)),e=t}null!==this._unlinkedRecords&&this._unlinkedRecords.clear(),null!==this._additionsTail&&(this._additionsTail._nextAdded=null),null!==this._movesTail&&(this._movesTail._nextMoved=null),null!==this._itTail&&(this._itTail._next=null),null!==this._removalsTail&&(this._removalsTail._nextRemoved=null),null!==this._identityChangesTail&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(e,t,n){null!==this._unlinkedRecords&&this._unlinkedRecords.remove(e);const r=e._prevRemoved,s=e._nextRemoved;return null===r?this._removalsHead=s:r._nextRemoved=s,null===s?this._removalsTail=r:s._prevRemoved=r,this._insertAfter(e,t,n),this._addToMoves(e,n),e}_moveAfter(e,t,n){return this._unlink(e),this._insertAfter(e,t,n),this._addToMoves(e,n),e}_addAfter(e,t,n){return this._insertAfter(e,t,n),this._additionsTail=null===this._additionsTail?this._additionsHead=e:this._additionsTail._nextAdded=e,e}_insertAfter(e,t,n){const r=null===t?this._itHead:t._next;return e._next=r,e._prev=t,null===r?this._itTail=e:r._prev=e,null===t?this._itHead=e:t._next=e,null===this._linkedRecords&&(this._linkedRecords=new Ds),this._linkedRecords.put(e),e.currentIndex=n,e}_remove(e){return this._addToRemovals(this._unlink(e))}_unlink(e){null!==this._linkedRecords&&this._linkedRecords.remove(e);const t=e._prev,n=e._next;return null===t?this._itHead=n:t._next=n,null===n?this._itTail=t:n._prev=t,e}_addToMoves(e,t){return e.previousIndex===t||(this._movesTail=null===this._movesTail?this._movesHead=e:this._movesTail._nextMoved=e),e}_addToRemovals(e){return null===this._unlinkedRecords&&(this._unlinkedRecords=new Ds),this._unlinkedRecords.put(e),e.currentIndex=null,e._nextRemoved=null,null===this._removalsTail?(this._removalsTail=this._removalsHead=e,e._prevRemoved=null):(e._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=e),e}_addIdentityChange(e,t){return e.item=t,this._identityChangesTail=null===this._identityChangesTail?this._identityChangesHead=e:this._identityChangesTail._nextIdentityChange=e,e}}class As{constructor(e,t){this.item=e,this.trackById=t,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null}}class Os{constructor(){this._head=null,this._tail=null}add(e){null===this._head?(this._head=this._tail=e,e._nextDup=null,e._prevDup=null):(this._tail._nextDup=e,e._prevDup=this._tail,e._nextDup=null,this._tail=e)}get(e,t){let n;for(n=this._head;null!==n;n=n._nextDup)if((null===t||t<=n.currentIndex)&&Object.is(n.trackById,e))return n;return null}remove(e){const t=e._prevDup,n=e._nextDup;return null===t?this._head=n:t._nextDup=n,null===n?this._tail=t:n._prevDup=t,null===this._head}}class Ds{constructor(){this.map=new Map}put(e){const t=e.trackById;let n=this.map.get(t);n||(n=new Os,this.map.set(t,n)),n.add(e)}get(e,t){const n=this.map.get(e);return n?n.get(e,t):null}remove(e){const t=e.trackById;return this.map.get(t).remove(e)&&this.map.delete(t),e}get isEmpty(){return 0===this.map.size}clear(){this.map.clear()}}function js(e,t,n){const r=e.previousIndex;if(null===r)return r;let s=0;return n&&r<n.length&&(s=n[r]),r+t+s}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Hs{constructor(){}supports(e){return e instanceof Map||ss(e)}create(){return new Ps}}class Ps{constructor(){this._records=new Map,this._mapHead=null,this._appendAfter=null,this._previousMapHead=null,this._changesHead=null,this._changesTail=null,this._additionsHead=null,this._additionsTail=null,this._removalsHead=null,this._removalsTail=null}get isDirty(){return null!==this._additionsHead||null!==this._changesHead||null!==this._removalsHead}forEachItem(e){let t;for(t=this._mapHead;null!==t;t=t._next)e(t)}forEachPreviousItem(e){let t;for(t=this._previousMapHead;null!==t;t=t._nextPrevious)e(t)}forEachChangedItem(e){let t;for(t=this._changesHead;null!==t;t=t._nextChanged)e(t)}forEachAddedItem(e){let t;for(t=this._additionsHead;null!==t;t=t._nextAdded)e(t)}forEachRemovedItem(e){let t;for(t=this._removalsHead;null!==t;t=t._nextRemoved)e(t)}diff(e){if(e){if(!(e instanceof Map||ss(e)))throw new Error(`Error trying to diff '${J(e)}'. Only maps and objects are allowed`)}else e=new Map;return this.check(e)?this:null}onDestroy(){}check(e){this._reset();let t=this._mapHead;if(this._appendAfter=null,this._forEach(e,(e,n)=>{if(t&&t.key===n)this._maybeAddToChanges(t,e),this._appendAfter=t,t=t._next;else{const r=this._getOrCreateRecordForKey(n,e);t=this._insertBeforeOrAppend(t,r)}}),t){t._prev&&(t._prev._next=null),this._removalsHead=t;for(let e=t;null!==e;e=e._nextRemoved)e===this._mapHead&&(this._mapHead=null),this._records.delete(e.key),e._nextRemoved=e._next,e.previousValue=e.currentValue,e.currentValue=null,e._prev=null,e._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(e,t){if(e){const n=e._prev;return t._next=e,t._prev=n,e._prev=t,n&&(n._next=t),e===this._mapHead&&(this._mapHead=t),this._appendAfter=e,e}return this._appendAfter?(this._appendAfter._next=t,t._prev=this._appendAfter):this._mapHead=t,this._appendAfter=t,null}_getOrCreateRecordForKey(e,t){if(this._records.has(e)){const n=this._records.get(e);this._maybeAddToChanges(n,t);const r=n._prev,s=n._next;return r&&(r._next=s),s&&(s._prev=r),n._next=null,n._prev=null,n}const n=new Ns(e);return this._records.set(e,n),n.currentValue=t,this._addToAdditions(n),n}_reset(){if(this.isDirty){let e;for(this._previousMapHead=this._mapHead,e=this._previousMapHead;null!==e;e=e._next)e._nextPrevious=e._next;for(e=this._changesHead;null!==e;e=e._nextChanged)e.previousValue=e.currentValue;for(e=this._additionsHead;null!=e;e=e._nextAdded)e.previousValue=e.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(e,t){Object.is(t,e.currentValue)||(e.previousValue=e.currentValue,e.currentValue=t,this._addToChanges(e))}_addToAdditions(e){null===this._additionsHead?this._additionsHead=this._additionsTail=e:(this._additionsTail._nextAdded=e,this._additionsTail=e)}_addToChanges(e){null===this._changesHead?this._changesHead=this._changesTail=e:(this._changesTail._nextChanged=e,this._changesTail=e)}_forEach(e,t){e instanceof Map?e.forEach(t):Object.keys(e).forEach(n=>t(e[n],n))}}class Ns{constructor(e){this.key=e,this.previousValue=null,this.currentValue=null,this._nextPrevious=null,this._next=null,this._prev=null,this._nextAdded=null,this._nextRemoved=null,this._nextChanged=null}}let Ms=(()=>{class e{constructor(e){this.factories=e}static create(t,n){if(null!=n){const e=n.factories.slice();t=t.concat(e)}return new e(t)}static extend(t){return{provide:e,useFactory:n=>{if(!n)throw new Error("Cannot extend IterableDiffers without a parent injector");return e.create(t,n)},deps:[[e,new yn,new pn]]}}find(e){const t=this.factories.find(t=>t.supports(e));if(null!=t)return t;throw new Error(`Cannot find a differ supporting object '${e}' of type '${n=e,n.name||typeof n}'`);var n}}return e.\u0275prov=ne({token:e,providedIn:"root",factory:()=>new e([new Ts])}),e})(),Rs=(()=>{class e{constructor(e){this.factories=e}static create(t,n){if(n){const e=n.factories.slice();t=t.concat(e)}return new e(t)}static extend(t){return{provide:e,useFactory:n=>{if(!n)throw new Error("Cannot extend KeyValueDiffers without a parent injector");return e.create(t,n)},deps:[[e,new yn,new pn]]}}find(e){const t=this.factories.find(t=>t.supports(e));if(t)return t;throw new Error(`Cannot find a differ supporting object '${e}'`)}}return e.\u0275prov=ne({token:e,providedIn:"root",factory:()=>new e([new Hs])}),e})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Fs(e,t,n,r,s=!1){for(;null!==n;){const o=t[n.index];if(null!==o&&r.push(tt(o)),Be(o))for(let e=10;e<o.length;e++){const t=o[e],n=t[1].firstChild;null!==n&&Fs(t[1],t,n,r)}const i=n.type;if(8&i)Fs(e,t,n.child,r);else if(32&i){const e=Pn(n,t);let s;for(;s=e();)r.push(s)}else if(16&i){const e=t[16],s=e[6].projection[n.projection];if(Array.isArray(s))r.push(...s);else{const t=Nn(e);Fs(t[1],t,s,r,!0)}}n=s?n.projectionNext:n.next}return r}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Vs extends class{constructor(e,t){this._lView=e,this._cdRefInjectingView=t,this._appRef=null,this._attachedToViewContainer=!1}get rootNodes(){const e=this._lView,t=e[1];return Fs(t,e,t.firstChild,[])}get context(){return this._lView[8]}get destroyed(){return 256==(256&this._lView[2])}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){const e=this._lView[3];if(Be(e)){const t=e[8],n=t?t.indexOf(this):-1;n>-1&&(function(e,t){if(e.length<=10)return;const n=10+t,r=e[n];if(r){const o=r[17];null!==o&&o!==e&&Bn(o,r),t>0&&(e[n-1][4]=r[4]);const i=hn(e,10+t);Gn(r[1],s=r,s[11],2,null,null),s[0]=null,s[6]=null;const l=i[19];null!==l&&l.detachView(i[1]),r[3]=null,r[4]=null,r[2]&=-129}var s}(e,n),hn(t,n))}this._attachedToViewContainer=!1}!function(e,t){if(!(256&t[2])){const n=t[11];Xe(n)&&n.destroyNode&&Gn(e,t,n,3,null,null),function(e){let t=e[13];if(!t)return Zn(e[1],e);for(;t;){let n=null;if(Le(t))n=t[13];else{const e=t[10];e&&(n=e)}if(!n){for(;t&&!t[4]&&t!==e;)Le(t)&&Zn(t[1],t),t=t[3];null===t&&(t=e),Le(t)&&Zn(t[1],t),n=t&&t[4]}t=n}}(t)}}(this._lView[1],this._lView)}onDestroy(e){!function(e,t,n,r){const s=(o=t)[7]||(o[7]=[]);var o;s.push(r)}(0,this._lView,0,e)}markForCheck(){!function(e){for(;e;){e[2]|=64;const t=Nn(e);if(0!=(512&e[2])&&!t)return e;e=t}}(this._cdRefInjectingView||this._lView)}detach(){this._lView[2]&=-129}reattach(){this._lView[2]|=128}detectChanges(){Hr(this._lView[1],this._lView,this.context)}checkNoChanges(){!function(e,t,n){gt(!0);try{Hr(e,t,n)}finally{gt(!1)}}(this._lView[1],this._lView,this.context)}attachToViewContainerRef(){if(this._appRef)throw new Error("This view is already attached directly to the ApplicationRef!");this._attachedToViewContainer=!0}detachFromAppRef(){var e;this._appRef=null,Gn(this._lView[1],e=this._lView,e[11],2,null,null)}attachToAppRef(e){if(this._attachedToViewContainer)throw new Error("This view is already attached to a ViewContainer!");this._appRef=e}}{constructor(e){super(e),this._view=e}detectChanges(){Pr(this._view)}checkNoChanges(){!function(e){gt(!0);try{Pr(e)}finally{gt(!1)}}(this._view)}get context(){return null}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Ls=[new Hs],Bs=new Ms([new Ts]),Zs=new Rs(Ls);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class zs{}const $s={};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Us extends ms{constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){const t=Fe(e);return new Gs(t,this.ngModule)}}function Ws(e){const t=[];for(let n in e)e.hasOwnProperty(n)&&t.push({propName:e[n],templateName:n});return t}const qs=new an("SCHEDULER_TOKEN",{providedIn:"root",factory:()=>Dn});class Gs extends _s{constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=e.selectors.map(lr).join(","),this.ngContentSelectors=e.ngContentSelectors?e.ngContentSelectors:[],this.isBoundToModule=!!t}get inputs(){return Ws(this.componentDef.inputs)}get outputs(){return Ws(this.componentDef.outputs)}create(e,t,n,r){const s=(r=r||this.ngModule)?function(e,t){return{get:(n,r,s)=>{const o=e.get(n,$s,s);return o!==$s||r===$s?o:t.get(n,r,s)}}}(e,r.injector):e,o=s.get(Es,et),i=s.get(xs,null),l=o.createRenderer(null,this.componentDef),u=this.componentDef.selectors[0][0]||"div",c=n?function(e,t,n){if(Xe(e))return e.selectRootElement(t,n===me.ShadowDom);let r="string"==typeof t?e.querySelector(t):t;return r.textContent="",r}(l,n,this.componentDef.encapsulation):Ln(o.createRenderer(null,this.componentDef),u,function(e){const t=e.toLowerCase();return"svg"===t?"http://www.w3.org/2000/svg":"math"===t?"http://www.w3.org/1998/MathML/":null}(u)),a=this.componentDef.onPush?576:528,d={components:[],scheduler:Dn,clean:Mr,playerHandler:null,flags:0},h=gr(0,null,null,1,0,null,null,null,null,null),f=ar(null,h,d,a,null,null,o,l,i,s);let p,_;Ct(f);try{const e=function(e,t,n,r,s,o){const i=n[1];n[20]=e;const l=dr(i,20,2,"#host",null),u=l.mergedAttrs=t.hostAttrs;null!==u&&(Rr(l,u,!0),null!==e&&(Ft(s,e,u),null!==l.classes&&Kn(s,e,l.classes),null!==l.styles&&Jn(s,e,l.styles)));const c=r.createRenderer(e,t),a=ar(n,mr(t),null,t.onPush?64:16,n[20],l,r,c,null,null);return i.firstCreatePass&&(Jt(Wt(l,n),i,t.type),Er(i,l),Cr(l,n.length,1)),jr(n,a),n[20]=a}(c,this.componentDef,f,o,l);if(c)if(n)Ft(l,c,["ng-version",ks.full]);else{const{attrs:e,classes:t}=function(e){const t=[],n=[];let r=1,s=2;for(;r<e.length;){let o=e[r];if("string"==typeof o)2===s?""!==o&&t.push(o,e[++r]):8===s&&n.push(o);else{if(!rr(s))break;s=o}r++}return{attrs:t,classes:n}}(this.componentDef.selectors[0]);e&&Ft(l,c,e),t&&t.length>0&&Kn(l,c,t.join(" "))}if(_=h.data[20],void 0!==t){const e=_.projection=[];for(let n=0;n<this.ngContentSelectors.length;n++){const r=t[n];e.push(null!=r?Array.from(r):null)}}p=function(e,t,n,r,s){const o=n[1],i=function(e,t,n){const r=ft();e.firstCreatePass&&(n.providersResolver&&n.providersResolver(n),kr(e,r,t,hr(e,t,1,null),n));const s=nn(t,e,r.directiveStart,r);On(s,t);const o=nt(r,t);return o&&On(o,t),s}(o,n,t);if(r.components.push(i),e[8]=i,s&&s.forEach(e=>e(i,t)),t.contentQueries){const e=ft();t.contentQueries(1,i,e.directiveStart)}const l=ft();return!o.firstCreatePass||null===t.hostBindings&&null===t.hostAttrs||(Ot(l.index),br(n[1],l,0,l.directiveStart,l.directiveEnd,t),wr(t,i)),i}(e,this.componentDef,f,d,[es]),fr(h,f,null)}finally{At()}return new Qs(this.componentType,p,vs(_,f),f,_)}}class Qs extends
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class{}{constructor(e,t,n,r,s){super(),this.location=n,this._rootLView=r,this._tNode=s,this.instance=t,this.hostView=this.changeDetectorRef=new Vs(r),this.componentType=e}get injector(){return new on(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Js=new Map;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Ks extends zs{constructor(e,t){super(),this._parent=t,this._bootstrapComponents=[],this.injector=this,this.destroyCbs=[],this.componentFactoryResolver=new Us(this);const n=Ve(e),r=e[Ae]||null;r&&ps(r),this._bootstrapComponents=jn(n.bootstrap),this._r3Injector=Wr(e,t,[{provide:zs,useValue:this},{provide:ms,useValue:this.componentFactoryResolver}],J(e)),this._r3Injector._resolveInjectorDefTypes(),this.instance=this.get(e)}get(e,t=Xr.THROW_IF_NOT_FOUND,n=de.Default){return e===Xr||e===zs||e===Fr?this:this._r3Injector.get(e,t,n)}destroy(){const e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(e=>e()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}}class Ys extends class{}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */{constructor(e){super(),this.moduleType=e,null!==Ve(e)&&function(e){const t=new Set;!function e(n){const r=Ve(n,!0),s=r.id;null!==s&&(function(e,t,n){if(t&&t!==n)throw new Error(`Duplicate module registered for ${e} - ${J(t)} vs ${J(t.name)}`)}(s,Js.get(s),n),Js.set(s,n));const o=jn(r.imports);for(const i of o)t.has(i)||(t.add(i),e(i))}(e)}(e)}create(e){return new Ks(this.moduleType,e)}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Xs=
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class extends T{constructor(e=!1){super(),this.__isAsync=e}emit(e){super.next(e)}subscribe(e,t,n){let r,s=e=>null,o=()=>null;e&&"object"==typeof e?(r=this.__isAsync?t=>{setTimeout(()=>e.next(t))}:t=>{e.next(t)},e.error&&(s=this.__isAsync?t=>{setTimeout(()=>e.error(t))}:t=>{e.error(t)}),e.complete&&(o=this.__isAsync?()=>{setTimeout(()=>e.complete())}:()=>{e.complete()})):(r=this.__isAsync?t=>{setTimeout(()=>e(t))}:t=>{e(t)},t&&(s=this.__isAsync?e=>{setTimeout(()=>t(e))}:e=>{t(e)}),n&&(o=this.__isAsync?()=>{setTimeout(()=>n())}:()=>{n()}));const i=super.subscribe(r,s,o);return e instanceof p&&e.add(i),i}},eo=new an("Application Initializer");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let to=(()=>{class e{constructor(e){this.appInits=e,this.resolve=gs,this.reject=gs,this.initialized=!1,this.done=!1,this.donePromise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}runInitializers(){if(this.initialized)return;const e=[],t=()=>{this.done=!0,this.resolve()};if(this.appInits)for(let n=0;n<this.appInits.length;n++){const t=this.appInits[n]();ls(t)&&e.push(t)}Promise.all(e).then(()=>{t()}).catch(e=>{this.reject(e)}),0===e.length&&t(),this.initialized=!0}}return e.\u0275fac=function(t){return new(t||e)(Cn(eo,8))},e.\u0275prov=ne({token:e,factory:e.\u0275fac}),e})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const no=new an("AppId"),ro={provide:no,useFactory:function(){return`${so()}${so()}${so()}`},deps:[]};function so(){return String.fromCharCode(97+Math.floor(25*Math.random()))}const oo=new an("Platform Initializer"),io=new an("Platform ID"),lo=new an("appBootstrapListener");let uo=(()=>{class e{log(e){console.log(e)}warn(e){console.warn(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=ne({token:e,factory:e.\u0275fac}),e})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const co=new an("LocaleId"),ao=new an("DefaultCurrencyCode");var ho=function(e){return e[e.Error=0]="Error",e[e.Warning=1]="Warning",e[e.Ignore=2]="Ignore",e}({});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class fo{constructor(e,t){this.ngModuleFactory=e,this.componentFactories=t}}const po=function(e){return new Ys(e)},_o=po,yo=function(e){return Promise.resolve(po(e))},mo=function(e){const t=po(e),n=jn(Ve(e).declarations).reduce((e,t)=>{const n=Fe(t);return n&&e.push(new Gs(n)),e},[]);return new fo(t,n)},go=mo,vo=function(e){return Promise.resolve(mo(e))};let bo=(()=>{class e{constructor(){this.compileModuleSync=_o,this.compileModuleAsync=yo,this.compileModuleAndAllComponentsSync=go,this.compileModuleAndAllComponentsAsync=vo}clearCache(){}clearCacheFor(e){}getModuleId(e){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=ne({token:e,factory:e.\u0275fac}),e})();const wo=new an("compilerOptions"),Eo=(()=>Promise.resolve(0))();function xo(e){"undefined"==typeof Zone?Eo.then(()=>{e&&e.apply(null,null)}):Zone.current.scheduleMicroTask("scheduleMicrotask",e)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Co{constructor({enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:t=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new Xs(!1),this.onMicrotaskEmpty=new Xs(!1),this.onStable=new Xs(!1),this.onError=new Xs(!1),"undefined"==typeof Zone)throw new Error("In this configuration Angular requires Zone.js");Zone.assertZonePatched(),this._nesting=0,this._outer=this._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(this._inner=this._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(this._inner=this._inner.fork(Zone.longStackTraceZoneSpec)),this.shouldCoalesceEventChangeDetection=t,this.lastRequestAnimationFrameId=-1,this.nativeRequestAnimationFrame=function(){let e=Ee.requestAnimationFrame,t=Ee.cancelAnimationFrame;if("undefined"!=typeof Zone&&e&&t){const n=e[Zone.__symbol__("OriginalDelegate")];n&&(e=n);const r=t[Zone.__symbol__("OriginalDelegate")];r&&(t=r)}return{nativeRequestAnimationFrame:e,nativeCancelAnimationFrame:t}}().nativeRequestAnimationFrame,function(e){const t=!!e.shouldCoalesceEventChangeDetection&&e.nativeRequestAnimationFrame&&(()=>{!function(e){-1===e.lastRequestAnimationFrameId&&(e.lastRequestAnimationFrameId=e.nativeRequestAnimationFrame.call(Ee,()=>{e.fakeTopEventTask||(e.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{e.lastRequestAnimationFrameId=-1,So(e),To(e)},void 0,()=>{},()=>{})),e.fakeTopEventTask.invoke()}),So(e))}(e)});e._inner=e._inner.fork({name:"angular",properties:{isAngularZone:!0,maybeDelayChangeDetection:t},onInvokeTask:(n,r,s,o,i,l)=>{try{return Io(e),n.invokeTask(s,o,i,l)}finally{t&&"eventTask"===o.type&&t(),Ao(e)}},onInvoke:(t,n,r,s,o,i,l)=>{try{return Io(e),t.invoke(r,s,o,i,l)}finally{Ao(e)}},onHasTask:(t,n,r,s)=>{t.hasTask(r,s),n===r&&("microTask"==s.change?(e._hasPendingMicrotasks=s.microTask,So(e),To(e)):"macroTask"==s.change&&(e.hasPendingMacrotasks=s.macroTask))},onHandleError:(t,n,r,s)=>(t.handleError(r,s),e.runOutsideAngular(()=>e.onError.emit(s)),!1)})}(this)}static isInAngularZone(){return!0===Zone.current.get("isAngularZone")}static assertInAngularZone(){if(!Co.isInAngularZone())throw new Error("Expected to be in Angular Zone, but it is not!")}static assertNotInAngularZone(){if(Co.isInAngularZone())throw new Error("Expected to not be in Angular Zone, but it is!")}run(e,t,n){return this._inner.run(e,t,n)}runTask(e,t,n,r){const s=this._inner,o=s.scheduleEventTask("NgZoneEvent: "+r,e,ko,gs,gs);try{return s.runTask(o,t,n)}finally{s.cancelTask(o)}}runGuarded(e,t,n){return this._inner.runGuarded(e,t,n)}runOutsideAngular(e){return this._outer.run(e)}}const ko={};function To(e){if(0==e._nesting&&!e.hasPendingMicrotasks&&!e.isStable)try{e._nesting++,e.onMicrotaskEmpty.emit(null)}finally{if(e._nesting--,!e.hasPendingMicrotasks)try{e.runOutsideAngular(()=>e.onStable.emit(null))}finally{e.isStable=!0}}}function So(e){e.hasPendingMicrotasks=!!(e._hasPendingMicrotasks||e.shouldCoalesceEventChangeDetection&&-1!==e.lastRequestAnimationFrameId)}function Io(e){e._nesting++,e.isStable&&(e.isStable=!1,e.onUnstable.emit(null))}function Ao(e){e._nesting--,To(e)}class Oo{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new Xs,this.onMicrotaskEmpty=new Xs,this.onStable=new Xs,this.onError=new Xs}run(e,t,n){return e.apply(t,n)}runGuarded(e,t,n){return e.apply(t,n)}runOutsideAngular(e){return e()}runTask(e,t,n,r){return e.apply(t,n)}}let Do=(()=>{class e{constructor(e){this._ngZone=e,this._pendingCount=0,this._isZoneStable=!0,this._didWork=!1,this._callbacks=[],this.taskTrackingZone=null,this._watchAngularEvents(),e.run(()=>{this.taskTrackingZone="undefined"==typeof Zone?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){this._ngZone.onUnstable.subscribe({next:()=>{this._didWork=!0,this._isZoneStable=!1}}),this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.subscribe({next:()=>{Co.assertNotInAngularZone(),xo(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})})}increasePendingRequestCount(){return this._pendingCount+=1,this._didWork=!0,this._pendingCount}decreasePendingRequestCount(){if(this._pendingCount-=1,this._pendingCount<0)throw new Error("pending async requests below zero");return this._runCallbacksIfReady(),this._pendingCount}isStable(){return this._isZoneStable&&0===this._pendingCount&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())xo(()=>{for(;0!==this._callbacks.length;){let e=this._callbacks.pop();clearTimeout(e.timeoutId),e.doneCb(this._didWork)}this._didWork=!1});else{let e=this.getPendingTasks();this._callbacks=this._callbacks.filter(t=>!t.updateCb||!t.updateCb(e)||(clearTimeout(t.timeoutId),!1)),this._didWork=!0}}getPendingTasks(){return this.taskTrackingZone?this.taskTrackingZone.macroTasks.map(e=>({source:e.source,creationLocation:e.creationLocation,data:e.data})):[]}addCallback(e,t,n){let r=-1;t&&t>0&&(r=setTimeout(()=>{this._callbacks=this._callbacks.filter(e=>e.timeoutId!==r),e(this._didWork,this.getPendingTasks())},t)),this._callbacks.push({doneCb:e,timeoutId:r,updateCb:n})}whenStable(e,t,n){if(n&&!this.taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?');this.addCallback(e,t,n),this._runCallbacksIfReady()}getPendingRequestCount(){return this._pendingCount}findProviders(e,t,n){return[]}}return e.\u0275fac=function(t){return new(t||e)(Cn(Co))},e.\u0275prov=ne({token:e,factory:e.\u0275fac}),e})(),jo=(()=>{class e{constructor(){this._applications=new Map,No.addToWindow(this)}registerApplication(e,t){this._applications.set(e,t)}unregisterApplication(e){this._applications.delete(e)}unregisterAllApplications(){this._applications.clear()}getTestability(e){return this._applications.get(e)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(e,t=!0){return No.findTestabilityInTree(this,e,t)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=ne({token:e,factory:e.\u0275fac}),e})();class Ho{addToWindow(e){}findTestabilityInTree(e,t,n){return null}}let Po,No=new Ho,Mo=!1;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Ro(){return Mo=!0,!0}const Fo=new an("AllowMultipleToken");function Vo(e,t,n=[]){const r="Platform: "+t,s=new an(r);return(t=[])=>{let o=Lo();if(!o||o.injector.get(Fo,!1))if(e)e(n.concat(t).concat({provide:s,useValue:!0}));else{const e=n.concat(t).concat({provide:s,useValue:!0},{provide:Lr,useValue:"platform"});!function(e){if(Po&&!Po.destroyed&&!Po.injector.get(Fo,!1))throw new Error("There can be only one platform. Destroy the previous one to create a new one.");Po=e.get(Bo);const t=e.get(oo,null);t&&t.forEach(e=>e())}(Xr.create({providers:e,name:r}))}return function(e){const t=Lo();if(!t)throw new Error("No platform exists!");if(!t.injector.get(e,null))throw new Error("A platform with a different configuration has been created. Please destroy it first.");return t}(s)}}function Lo(){return Po&&!Po.destroyed?Po:null}let Bo=(()=>{class e{constructor(e){this._injector=e,this._modules=[],this._destroyListeners=[],this._destroyed=!1}bootstrapModuleFactory(e,t){const n=function(e,t){let n;return n="noop"===e?new Oo:("zone.js"===e?void 0:e)||new Co({enableLongStackTrace:Ro(),shouldCoalesceEventChangeDetection:t}),n}(t?t.ngZone:void 0,t&&t.ngZoneEventCoalescing||!1),r=[{provide:Co,useValue:n}];return n.run(()=>{const t=Xr.create({providers:r,parent:this.injector,name:e.moduleType.name}),s=e.create(t),o=s.injector.get(An,null);if(!o)throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?");return n.runOutsideAngular(()=>{const e=n.onError.subscribe({next:e=>{o.handleError(e)}});s.onDestroy(()=>{$o(this._modules,s),e.unsubscribe()})}),function(e,t,n){try{const r=n();return ls(r)?r.catch(n=>{throw t.runOutsideAngular(()=>e.handleError(n)),n}):r}catch(r){throw t.runOutsideAngular(()=>e.handleError(r)),r}}(o,n,()=>{const e=s.injector.get(to);return e.runInitializers(),e.donePromise.then(()=>(ps(s.injector.get(co,"en-US")||"en-US"),this._moduleDoBootstrap(s),s))})})}bootstrapModule(e,t=[]){const n=Zo({},t);return function(e,t,n){const r=new Ys(n);return Promise.resolve(r)}(0,0,e).then(e=>this.bootstrapModuleFactory(e,n))}_moduleDoBootstrap(e){const t=e.injector.get(zo);if(e._bootstrapComponents.length>0)e._bootstrapComponents.forEach(e=>t.bootstrap(e));else{if(!e.instance.ngDoBootstrap)throw new Error(`The module ${J(e.instance.constructor)} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.`);e.instance.ngDoBootstrap(t)}this._modules.push(e)}onDestroy(e){this._destroyListeners.push(e)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new Error("The platform has already been destroyed!");this._modules.slice().forEach(e=>e.destroy()),this._destroyListeners.forEach(e=>e()),this._destroyed=!0}get destroyed(){return this._destroyed}}return e.\u0275fac=function(t){return new(t||e)(Cn(Xr))},e.\u0275prov=ne({token:e,factory:e.\u0275fac}),e})();function Zo(e,t){return Array.isArray(t)?t.reduce(Zo,e):Object.assign(Object.assign({},e),t)}let zo=(()=>{class e{constructor(e,t,n,r,s,o){this._zone=e,this._console=t,this._injector=n,this._exceptionHandler=r,this._componentFactoryResolver=s,this._initStatus=o,this._bootstrapListeners=[],this._views=[],this._runningTick=!1,this._stable=!0,this.componentTypes=[],this.components=[],this._onMicrotaskEmptySubscription=this._zone.onMicrotaskEmpty.subscribe({next:()=>{this._zone.run(()=>{this.tick()})}});const i=new w(e=>{this._stable=this._zone.isStable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks,this._zone.runOutsideAngular(()=>{e.next(this._stable),e.complete()})}),l=new w(e=>{let t;this._zone.runOutsideAngular(()=>{t=this._zone.onStable.subscribe(()=>{Co.assertNotInAngularZone(),xo(()=>{this._stable||this._zone.hasPendingMacrotasks||this._zone.hasPendingMicrotasks||(this._stable=!0,e.next(!0))})})});const n=this._zone.onUnstable.subscribe(()=>{Co.assertInAngularZone(),this._stable&&(this._stable=!1,this._zone.runOutsideAngular(()=>{e.next(!1)}))});return()=>{t.unsubscribe(),n.unsubscribe()}});this.isStable=function(...e){let t=Number.POSITIVE_INFINITY,n=null,r=e[e.length-1];var s;return(s=r)&&"function"==typeof s.schedule?(n=e.pop(),e.length>1&&"number"==typeof e[e.length-1]&&(t=e.pop())):"number"==typeof r&&(t=e.pop()),null===n&&1===e.length&&e[0]instanceof w?e[0]:function(e=Number.POSITIVE_INFINITY){return V(b,e)}(t)(function(e,t){return t?M(e,t):new w(O(e))}(e,n))}(i,l.pipe(e=>{return Z()((t=G,function(e){let n;n="function"==typeof t?t:function(){return t};const r=Object.create(e,W);return r.source=e,r.subjectFactory=n,r})(e));var t}))}bootstrap(e,t){if(!this._initStatus.done)throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.");let n;n=e instanceof _s?e:this._componentFactoryResolver.resolveComponentFactory(e),this.componentTypes.push(n.componentType);const r=n.isBoundToModule?void 0:this._injector.get(zs),s=n.create(Xr.NULL,[],t||n.selector,r),o=s.location.nativeElement,i=s.injector.get(Do,null),l=i&&s.injector.get(jo);return i&&l&&l.registerApplication(o,i),s.onDestroy(()=>{this.detachView(s.hostView),$o(this.components,s),l&&l.unregisterApplication(o)}),this._loadComponent(s),Ro()&&this._console.log("Angular is running in development mode. Call enableProdMode() to enable production mode."),s}tick(){if(this._runningTick)throw new Error("ApplicationRef.tick is called recursively");try{this._runningTick=!0;for(let e of this._views)e.detectChanges()}catch(e){this._zone.runOutsideAngular(()=>this._exceptionHandler.handleError(e))}finally{this._runningTick=!1}}attachView(e){const t=e;this._views.push(t),t.attachToAppRef(this)}detachView(e){const t=e;$o(this._views,t),t.detachFromAppRef()}_loadComponent(e){this.attachView(e.hostView),this.tick(),this.components.push(e),this._injector.get(lo,[]).concat(this._bootstrapListeners).forEach(t=>t(e))}ngOnDestroy(){this._views.slice().forEach(e=>e.destroy()),this._onMicrotaskEmptySubscription.unsubscribe()}get viewCount(){return this._views.length}}return e.\u0275fac=function(t){return new(t||e)(Cn(Co),Cn(uo),Cn(Xr),Cn(An),Cn(ms),Cn(to))},e.\u0275prov=ne({token:e,factory:e.\u0275fac}),e})();function $o(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}const Uo=Vo(null,"core",[{provide:io,useValue:"unknown"},{provide:Bo,deps:[Xr]},{provide:jo,deps:[]},{provide:uo,deps:[]}]),Wo=[{provide:zo,useClass:zo,deps:[Co,uo,Xr,An,ms,to]},{provide:qs,deps:[Co],useFactory:function(e){let t=[];return e.onStable.subscribe(()=>{for(;t.length;)t.pop()()}),function(e){t.push(e)}}},{provide:to,useClass:to,deps:[[new pn,eo]]},{provide:bo,useClass:bo,deps:[]},ro,{provide:Ms,useFactory:
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function(){return Bs},deps:[]},{provide:Rs,useFactory:function(){return Zs},deps:[]},{provide:co,useFactory:function(e){return ps(e=e||"undefined"!=typeof $localize&&$localize.locale||"en-US"),e},deps:[[new fn(co),new pn,new yn]]},{provide:ao,useValue:"USD"}];let qo=(()=>{class e{constructor(e){}}return e.\u0275mod=Me({type:e}),e.\u0275inj=re({factory:function(t){return new(t||e)(Cn(zo))},providers:Wo}),e})(),Go=null;function Qo(){return Go}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Jo=new an("DocumentToken");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */var Ko=function(e){return e[e.Zero=0]="Zero",e[e.One=1]="One",e[e.Two=2]="Two",e[e.Few=3]="Few",e[e.Many=4]="Many",e[e.Other=5]="Other",e}({});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Yo{}let Xo=(()=>{class e extends Yo{constructor(e){super(),this.locale=e}getPluralCategory(e,t){switch(function(e){return function(e){const t=function(e){return e.toLowerCase().replace(/_/g,"-")}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(e);let n=ds(t);if(n)return n;const r=t.split("-")[0];if(n=ds(r),n)return n;if("en"===r)return cs;throw new Error(`Missing locale data for the locale "${e}".`)}(e)[hs.PluralCase]}(t||this.locale)(e)){case Ko.Zero:return"zero";case Ko.One:return"one";case Ko.Two:return"two";case Ko.Few:return"few";case Ko.Many:return"many";default:return"other"}}}return e.\u0275fac=function(t){return new(t||e)(Cn(co))},e.\u0275prov=ne({token:e,factory:e.\u0275fac}),e})(),ei=(()=>{class e{}return e.\u0275mod=Me({type:e}),e.\u0275inj=re({factory:function(t){return new(t||e)},providers:[{provide:Yo,useClass:Xo}]}),e})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class ti extends
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license Angular v11.0.9
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class extends class{}{constructor(){super()}supportsDOMEvents(){return!0}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */{static makeCurrent(){var e;e=new ti,Go||(Go=e)}getProperty(e,t){return e[t]}log(e){window.console&&window.console.log&&window.console.log(e)}logGroup(e){window.console&&window.console.group&&window.console.group(e)}logGroupEnd(){window.console&&window.console.groupEnd&&window.console.groupEnd()}onAndCancel(e,t,n){return e.addEventListener(t,n,!1),()=>{e.removeEventListener(t,n,!1)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){return e.parentNode&&e.parentNode.removeChild(e),e}getValue(e){return e.value}createElement(e,t){return(t=t||this.getDefaultDocument()).createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return"window"===t?window:"document"===t?e:"body"===t?e.body:null}getHistory(){return window.history}getLocation(){return window.location}getBaseHref(e){const t=ri||(ri=document.querySelector("base"),ri)?ri.getAttribute("href"):null;return null==t?null:(n=t,ni||(ni=document.createElement("a")),ni.setAttribute("href",n),"/"===ni.pathname.charAt(0)?ni.pathname:"/"+ni.pathname);var n;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */}resetBaseElement(){ri=null}getUserAgent(){return window.navigator.userAgent}performanceNow(){return window.performance&&window.performance.now?window.performance.now():(new Date).getTime()}supportsCookies(){return!0}getCookie(e){
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
return function(e,t){t=encodeURIComponent(t);for(const n of e.split(";")){const e=n.indexOf("="),[r,s]=-1==e?[n,""]:[n.slice(0,e),n.slice(e+1)];if(r.trim()===t)return decodeURIComponent(s)}return null}(document.cookie,e)}}let ni,ri=null;const si=new an("TRANSITION_ID"),oi=[{provide:eo,useFactory:function(e,t,n){return()=>{n.get(to).donePromise.then(()=>{const n=Qo();Array.prototype.slice.apply(t.querySelectorAll("style[ng-transition]")).filter(t=>t.getAttribute("ng-transition")===e).forEach(e=>n.remove(e))})}},deps:[si,Jo,Xr],multi:!0}];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class ii{static init(){var e;e=new ii,No=e}addToWindow(e){Ee.getAngularTestability=(t,n=!0)=>{const r=e.findTestabilityInTree(t,n);if(null==r)throw new Error("Could not find testability for element.");return r},Ee.getAllAngularTestabilities=()=>e.getAllTestabilities(),Ee.getAllAngularRootElements=()=>e.getAllRootElements(),Ee.frameworkStabilizers||(Ee.frameworkStabilizers=[]),Ee.frameworkStabilizers.push(e=>{const t=Ee.getAllAngularTestabilities();let n=t.length,r=!1;const s=function(t){r=r||t,n--,0==n&&e(r)};t.forEach(function(e){e.whenStable(s)})})}findTestabilityInTree(e,t,n){if(null==t)return null;const r=e.getTestability(t);return null!=r?r:n?Qo().isShadowRoot(t)?this.findTestabilityInTree(e,t.host,!0):this.findTestabilityInTree(e,t.parentElement,!0):null}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const li=new an("EventManagerPlugins");let ui=(()=>{class e{constructor(e,t){this._zone=t,this._eventNameToPlugin=new Map,e.forEach(e=>e.manager=this),this._plugins=e.slice().reverse()}addEventListener(e,t,n){return this._findPluginFor(t).addEventListener(e,t,n)}addGlobalEventListener(e,t,n){return this._findPluginFor(t).addGlobalEventListener(e,t,n)}getZone(){return this._zone}_findPluginFor(e){const t=this._eventNameToPlugin.get(e);if(t)return t;const n=this._plugins;for(let r=0;r<n.length;r++){const t=n[r];if(t.supports(e))return this._eventNameToPlugin.set(e,t),t}throw new Error("No event manager plugin found for event "+e)}}return e.\u0275fac=function(t){return new(t||e)(Cn(li),Cn(Co))},e.\u0275prov=ne({token:e,factory:e.\u0275fac}),e})();class ci{constructor(e){this._doc=e}addGlobalEventListener(e,t,n){const r=Qo().getGlobalEventTarget(this._doc,e);if(!r)throw new Error(`Unsupported event target ${r} for event ${t}`);return this.addEventListener(r,t,n)}}let ai=(()=>{class e{constructor(){this._stylesSet=new Set}addStyles(e){const t=new Set;e.forEach(e=>{this._stylesSet.has(e)||(this._stylesSet.add(e),t.add(e))}),this.onStylesAdded(t)}onStylesAdded(e){}getAllStyles(){return Array.from(this._stylesSet)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=ne({token:e,factory:e.\u0275fac}),e})(),di=(()=>{class e extends ai{constructor(e){super(),this._doc=e,this._hostNodes=new Set,this._styleNodes=new Set,this._hostNodes.add(e.head)}_addStylesToHost(e,t){e.forEach(e=>{const n=this._doc.createElement("style");n.textContent=e,this._styleNodes.add(t.appendChild(n))})}addHost(e){this._addStylesToHost(this._stylesSet,e),this._hostNodes.add(e)}removeHost(e){this._hostNodes.delete(e)}onStylesAdded(e){this._hostNodes.forEach(t=>this._addStylesToHost(e,t))}ngOnDestroy(){this._styleNodes.forEach(e=>Qo().remove(e))}}return e.\u0275fac=function(t){return new(t||e)(Cn(Jo))},e.\u0275prov=ne({token:e,factory:e.\u0275fac}),e})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const hi={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},fi=/%COMP%/g;function pi(e,t,n){for(let r=0;r<t.length;r++){let s=t[r];Array.isArray(s)?pi(e,s,n):(s=s.replace(fi,e),n.push(s))}return n}function _i(e){return t=>{if("__ngUnwrap__"===t)return e;!1===e(t)&&(t.preventDefault(),t.returnValue=!1)}}let yi=(()=>{class e{constructor(e,t,n){this.eventManager=e,this.sharedStylesHost=t,this.appId=n,this.rendererByCompId=new Map,this.defaultRenderer=new mi(e)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;switch(t.encapsulation){case me.Emulated:{let n=this.rendererByCompId.get(t.id);return n||(n=new gi(this.eventManager,this.sharedStylesHost,t,this.appId),this.rendererByCompId.set(t.id,n)),n.applyToHost(e),n}case 1:case me.ShadowDom:return new vi(this.eventManager,this.sharedStylesHost,e,t);default:if(!this.rendererByCompId.has(t.id)){const e=pi(t.id,t.styles,[]);this.sharedStylesHost.addStyles(e),this.rendererByCompId.set(t.id,this.defaultRenderer)}return this.defaultRenderer}}begin(){}end(){}}return e.\u0275fac=function(t){return new(t||e)(Cn(ui),Cn(di),Cn(no))},e.\u0275prov=ne({token:e,factory:e.\u0275fac}),e})();class mi{constructor(e){this.eventManager=e,this.data=Object.create(null)}destroy(){}createElement(e,t){return t?document.createElementNS(hi[t]||t,e):document.createElement(e)}createComment(e){return document.createComment(e)}createText(e){return document.createTextNode(e)}appendChild(e,t){e.appendChild(t)}insertBefore(e,t,n){e&&e.insertBefore(t,n)}removeChild(e,t){e&&e.removeChild(t)}selectRootElement(e,t){let n="string"==typeof e?document.querySelector(e):e;if(!n)throw new Error(`The selector "${e}" did not match any elements`);return t||(n.textContent=""),n}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,n,r){if(r){t=r+":"+t;const s=hi[r];s?e.setAttributeNS(s,t,n):e.setAttribute(t,n)}else e.setAttribute(t,n)}removeAttribute(e,t,n){if(n){const r=hi[n];r?e.removeAttributeNS(r,t):e.removeAttribute(`${n}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,n,r){r&(Hn.DashCase|Hn.Important)?e.style.setProperty(t,n,r&Hn.Important?"important":""):e.style[t]=n}removeStyle(e,t,n){n&Hn.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,n){e[t]=n}setValue(e,t){e.nodeValue=t}listen(e,t,n){return"string"==typeof e?this.eventManager.addGlobalEventListener(e,t,_i(n)):this.eventManager.addEventListener(e,t,_i(n))}}class gi extends mi{constructor(e,t,n,r){super(e),this.component=n;const s=pi(r+"-"+n.id,n.styles,[]);t.addStyles(s),this.contentAttr="_ngcontent-%COMP%".replace(fi,r+"-"+n.id),this.hostAttr="_nghost-%COMP%".replace(fi,r+"-"+n.id)}applyToHost(e){super.setAttribute(e,this.hostAttr,"")}createElement(e,t){const n=super.createElement(e,t);return super.setAttribute(n,this.contentAttr,""),n}}class vi extends mi{constructor(e,t,n,r){super(e),this.sharedStylesHost=t,this.hostEl=n,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const s=pi(r.id,r.styles,[]);for(let o=0;o<s.length;o++){const e=document.createElement("style");e.textContent=s[o],this.shadowRoot.appendChild(e)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,n){return super.insertBefore(this.nodeOrShadowRoot(e),t,n)}removeChild(e,t){return super.removeChild(this.nodeOrShadowRoot(e),t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}}const bi=["alt","control","meta","shift"],wi={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Ei={A:"1",B:"2",C:"3",D:"4",E:"5",F:"6",G:"7",H:"8",I:"9",J:"*",K:"+",M:"-",N:".",O:"/","`":"0","\x90":"NumLock"},xi={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey},Ci=[{provide:io,useValue:"browser"},{provide:oo,useValue:
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function(){ti.makeCurrent(),ii.init()},multi:!0},{provide:Jo,useFactory:function(){return function(e){Ye=e}(document),document},deps:[]}],ki=[[],{provide:Lr,useValue:"root"},{provide:An,useFactory:function(){return new An},deps:[]},{provide:li,useClass:(()=>{class e extends ci{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,n){return e.addEventListener(t,n,!1),()=>this.removeEventListener(e,t,n)}removeEventListener(e,t,n){return e.removeEventListener(t,n)}}return e.\u0275fac=function(t){return new(t||e)(Cn(Jo))},e.\u0275prov=ne({token:e,factory:e.\u0275fac}),e})(),multi:!0,deps:[Jo,Co,io]},{provide:li,useClass:(()=>{class e extends ci{constructor(e){super(e)}supports(t){return null!=e.parseEventName(t)}addEventListener(t,n,r){const s=e.parseEventName(n),o=e.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Qo().onAndCancel(t,s.domEventName,o))}static parseEventName(t){const n=t.toLowerCase().split("."),r=n.shift();if(0===n.length||"keydown"!==r&&"keyup"!==r)return null;const s=e._normalizeKey(n.pop());let o="";if(bi.forEach(e=>{const t=n.indexOf(e);t>-1&&(n.splice(t,1),o+=e+".")}),o+=s,0!=n.length||0===s.length)return null;const i={};return i.domEventName=r,i.fullKey=o,i}static getEventFullKey(e){let t="",n=function(e){let t=e.key;if(null==t){if(t=e.keyIdentifier,null==t)return"Unidentified";t.startsWith("U+")&&(t=String.fromCharCode(parseInt(t.substring(2),16)),3===e.location&&Ei.hasOwnProperty(t)&&(t=Ei[t]))}return wi[t]||t}(e);return n=n.toLowerCase()," "===n?n="space":"."===n&&(n="dot"),bi.forEach(r=>{r!=n&&(0,xi[r])(e)&&(t+=r+".")}),t+=n,t}static eventCallback(t,n,r){return s=>{e.getEventFullKey(s)===t&&r.runGuarded(()=>n(s))}}static _normalizeKey(e){switch(e){case"esc":return"escape";default:return e}}}return e.\u0275fac=function(t){return new(t||e)(Cn(Jo))},e.\u0275prov=ne({token:e,factory:e.\u0275fac}),e})(),multi:!0,deps:[Jo]},[],{provide:yi,useClass:yi,deps:[ui,di,no]},{provide:Es,useExisting:yi},{provide:ai,useExisting:di},{provide:di,useClass:di,deps:[Jo]},{provide:Do,useClass:Do,deps:[Co]},{provide:ui,useClass:ui,deps:[li,Co]},[]];let Ti=(()=>{class e{constructor(e){if(e)throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")}static withServerTransition(t){return{ngModule:e,providers:[{provide:no,useValue:t.appId},{provide:si,useExisting:no},oi]}}}return e.\u0275mod=Me({type:e}),e.\u0275inj=re({factory:function(t){return new(t||e)(Cn(e,12))},providers:ki,imports:[ei,qo]}),e})();"undefined"!=typeof window&&window;const Si=[{provide:bo,useFactory:()=>new bo}];function Ii(e){for(let t=e.length-1;t>=0;t--)if(void 0!==e[t])return e[t]}function Ai(e){const t=[];return e.forEach(e=>e&&t.push(...e)),t}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Oi=Vo(Uo,"coreDynamic",[{provide:wo,useValue:{},multi:!0},{provide:class{}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */,useClass:class{constructor(e){this._defaultOptions=[{useJit:!0,defaultEncapsulation:me.Emulated,missingTranslation:ho.Warning},...e]}createCompiler(e=[]){const t={useJit:Ii((n=this._defaultOptions.concat(e)).map(e=>e.useJit)),defaultEncapsulation:Ii(n.map(e=>e.defaultEncapsulation)),providers:Ai(n.map(e=>e.providers)),missingTranslation:Ii(n.map(e=>e.missingTranslation)),preserveWhitespaces:Ii(n.map(e=>e.preserveWhitespaces))};var n;return Xr.create([Si,{provide:o,useFactory:()=>new o({useJit:t.useJit,jitDevMode:Ro(),defaultEncapsulation:t.defaultEncapsulation,missingTranslation:t.missingTranslation,preserveWhitespaces:t.preserveWhitespaces}),deps:[]},t.providers]).get(bo)}},deps:[wo]}]);let Di=(()=>{class e extends s{get(e){let t,n;const r=new Promise((e,r)=>{t=e,n=r}),s=new XMLHttpRequest;return s.open("GET",e,!0),s.responseType="text",s.onload=function(){const r=s.response||s.responseText;let o=1223===s.status?204:s.status;0===o&&(o=r?200:0),200<=o&&o<=300?t(r):n("Failed to load "+e)},s.onerror=function(){n("Failed to load "+e)},s.send(),r}}return e.\u0275fac=function(t){return ji(t||e)},e.\u0275prov=ne({token:e,factory:e.\u0275fac}),e})();const ji=un(Di),Hi=Vo(Oi,"browserDynamic",[Ci,{provide:wo,useValue:{providers:[{provide:s,useClass:Di,deps:[]}]},multi:!0},{provide:io,useValue:"browser"}]);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let Pi=(()=>{class e{constructor(){this._accessors=[]}add(e,t){this._accessors.push([e,t])}remove(e){for(let t=this._accessors.length-1;t>=0;--t)if(this._accessors[t][1]===e)return void this._accessors.splice(t,1)}select(e){this._accessors.forEach(t=>{this._isSameGroup(t,e)&&t[1]!==e&&t[1].fireUncheck(e.value)})}_isSameGroup(e,t){return!!e[0].control&&e[0]._parent===t._control._parent&&e[1].name===t.name}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=ne({token:e,factory:e.\u0275fac}),e})(),Ni=(()=>{class e{}return e.\u0275mod=Me({type:e}),e.\u0275inj=re({factory:function(t){return new(t||e)}}),e})(),Mi=(()=>{class e{}return e.\u0275mod=Me({type:e}),e.\u0275inj=re({factory:function(t){return new(t||e)},providers:[Pi],imports:[Ni]}),e})(),Ri=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=(t={type:e,selectors:[["app-component"]],decls:2,vars:0,template:function(e,t){1&e&&(is(0,"h1"),
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function(e,t=""){const n=dt(),r=ht(),s=e+20,o=r.firstCreatePass?dr(r,s,1,t,null):r.data[s],i=n[s]=function(e,t){return Xe(e)?e.createText(t):e.createTextNode(t)}(n[11],t);Wn(r,n,i,o),_t(o,!1)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(1,"\u0416\u0440\u0435\u0448\u044c?"),function(){let e=ft();yt()?ct.lFrame.isParent=!1:(e=e.parent,_t(e,!1));const t=e;ct.lFrame.elementDepthCount--;const n=ht();n.firstCreatePass&&(Dt(n,e),Ze(e)&&n.queries.elementEnd(e)),null!=t.classesWithoutHost&&function(e){return 0!=(16&e.flags)}(t)&&os(n,t,dt(),t.classesWithoutHost,!0),null!=t.stylesWithoutHost&&function(e){return 0!=(32&e.flags)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(t)&&os(n,t,dt(),t.stylesWithoutHost,!1)}())},encapsulation:2},_e(()=>{const e={},n={type:t.type,providersResolver:null,decls:t.decls,vars:t.vars,factory:null,template:t.template||null,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:e,inputs:null,outputs:null,exportAs:t.exportAs||null,onPush:t.changeDetection===ye.OnPush,directiveDefs:null,pipeDefs:null,selectors:t.selectors||Ce,viewQuery:t.viewQuery||null,features:t.features||null,data:t.data||{},encapsulation:t.encapsulation||me.Emulated,id:"c",styles:t.styles||Ce,_:null,setInput:null,schemas:t.schemas||null,tView:null},r=t.directives,s=t.features,o=t.pipes;return n.id+=je++,n.inputs=Re(t.inputs,e),n.outputs=Re(t.outputs),s&&s.forEach(e=>e(n)),n.directiveDefs=r?()=>("function"==typeof r?r():r).map(He):null,n.pipeDefs=o?()=>("function"==typeof o?o():o).map(Pe):null,n})),e;var t})(),Fi=(()=>{class e{}return e.\u0275mod=Me({type:e,bootstrap:[Ri]}),e.\u0275inj=re({factory:function(t){return new(t||e)},imports:[[Ti,Mi]]}),e})();Hi().bootstrapModule(Fi)},zn8P:function(e,t){function n(e){return Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="zn8P"}},[[0,0]]]);