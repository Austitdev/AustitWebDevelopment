// node_modules/@vue/shared/dist/shared.esm-bundler.js
// @__NO_SIDE_EFFECTS__
function e(e) {
	let t = /* @__PURE__ */ Object.create(null);
	for (let n of e.split(",")) t[n] = 1;
	return (e) => e in t;
}
var t = {}, n = [], r = () => {}, i = () => !1, a = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), o = (e) => e.startsWith("onUpdate:"), s = Object.assign, c = (e, t) => {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}, l = Object.prototype.hasOwnProperty, u = (e, t) => l.call(e, t), d = Array.isArray, f = (e) => x(e) === "[object Map]", p = (e) => x(e) === "[object Set]", m = (e) => x(e) === "[object Date]", h = (e) => typeof e == "function", g = (e) => typeof e == "string", _ = (e) => typeof e == "symbol", v = (e) => typeof e == "object" && !!e, y = (e) => (v(e) || h(e)) && h(e.then) && h(e.catch), b = Object.prototype.toString, x = (e) => b.call(e), S = (e) => x(e).slice(8, -1), C = (e) => x(e) === "[object Object]", w = (e) => g(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ee = /* @__PURE__ */ e(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), T = (e) => {
	let t = /* @__PURE__ */ Object.create(null);
	return ((n) => t[n] || (t[n] = e(n)));
}, te = /-\w/g, E = /* @__PURE__ */ T((e) => e.replace(te, (e) => e.slice(1).toUpperCase())), ne = /\B([A-Z])/g, D = /* @__PURE__ */ T((e) => e.replace(ne, "-$1").toLowerCase()), re = /* @__PURE__ */ T((e) => e.charAt(0).toUpperCase() + e.slice(1)), ie = /* @__PURE__ */ T((e) => e ? `on${re(e)}` : ""), ae = (e, t) => !Object.is(e, t), oe = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, se = (e, t, n, r = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: r,
		value: n
	});
}, ce = (e) => {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}, le, ue = () => le ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
function de(e) {
	if (d(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = g(r) ? he(r) : de(r);
			if (i) for (let e in i) t[e] = i[e];
		}
		return t;
	}
	if (g(e) || v(e)) return e;
}
var fe = /;(?![^(]*\))/g, pe = /:([^]+)/, me = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function he(e) {
	let t = {};
	return e.replace(me, (e) => e.startsWith("/*") ? "" : e).split(fe).forEach((e) => {
		if (e) {
			let n = e.split(pe);
			n.length > 1 && (t[n[0].trim()] = n[1].trim());
		}
	}), t;
}
function O(e) {
	let t = "";
	if (g(e)) t = e;
	else if (d(e)) for (let n = 0; n < e.length; n++) {
		let r = O(e[n]);
		r && (t += r + " ");
	}
	else if (v(e)) for (let n in e) e[n] && (t += n + " ");
	return t.trim();
}
var ge = /* @__PURE__ */ e("itemscope,allowfullscreen,disablepictureinpicture,disableremoteplayback,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly");
function _e(e) {
	return !!e || e === "";
}
function ve(e, t, n) {
	if (e.length !== t.length) return !1;
	let r = !0;
	for (let i = 0; r && i < e.length; i++) r = Se(e[i], t[i], n);
	return r;
}
function ye(e, t, n) {
	if (e.size !== t.size) return !1;
	let r = Array.from(t), i = new Uint8Array(r.length);
	for (let t of e) {
		let e = -1;
		for (let a = 0; a < r.length; a++) if (!i[a] && Se(t, r[a], n)) {
			e = a;
			break;
		}
		if (e < 0) return !1;
		i[e] = 1;
	}
	return !0;
}
function be(e, t, n) {
	let r = f(e), i = f(t);
	if (r || i || (r = p(e), i = p(t), r || i)) return r && i ? ye(e, t, n) : !1;
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (let r in e) {
		let i = e.hasOwnProperty(r), a = t.hasOwnProperty(r);
		if (i && !a || !i && a || !Se(e[r], t[r], n)) return !1;
	}
	return String(e) === String(t);
}
function xe(e, t, n, r) {
	n ||= [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()];
	let [i, a] = n;
	if (i.has(e) || a.has(t)) return i.get(e) === t && a.get(t) === e;
	i.set(e, t), a.set(t, e);
	let o = r(e, t, n);
	return i.delete(e), a.delete(t), o;
}
function Se(e, t, n) {
	if (e === t) return !0;
	let r = m(e), i = m(t);
	return r || i ? r && i ? e.getTime() === t.getTime() : !1 : (r = _(e), i = _(t), r || i ? e === t : (r = d(e), i = d(t), r || i ? r && i ? xe(e, t, n, ve) : !1 : (r = v(e), i = v(t), r || i ? !r || !i ? !1 : xe(e, t, n, be) : String(e) === String(t))));
}
var Ce = (e) => !!(e && e.__v_isRef === !0), we = (e) => g(e) ? e : e == null ? "" : d(e) || v(e) && (e.toString === b || !h(e.toString)) ? Ce(e) ? we(e.value) : JSON.stringify(e, Te, 2) : String(e), Te = (e, t) => Ce(t) ? Te(e, t.value) : f(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[Ee(t, r) + " =>"] = n, e), {}) } : p(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => Ee(e)) } : _(t) ? Ee(t) : v(t) && !d(t) && !C(t) ? String(t) : t, Ee = (e, t = "") => _(e) ? `Symbol(${e.description ?? t})` : e, De, Oe = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && De && (De.active ? (this.parent = De, this.index = (De.scopes || (De.scopes = [])).push(this) - 1) : (this._active = !1, this._warnOnRun = !1));
	}
	get active() {
		return this._active;
	}
	pause() {
		if (this._active) {
			this._isPaused = !0;
			let e, t;
			if (this.scopes) {
				let n = this.scopes.slice();
				for (e = 0, t = n.length; e < t; e++) n[e].pause();
			}
			for (e = 0, t = this.effects.length; e < t; e++) this.effects[e].pause();
		}
	}
	resume() {
		if (this._active && this._isPaused) {
			this._isPaused = !1;
			let e, t;
			if (this.scopes) {
				let n = this.scopes.slice();
				for (e = 0, t = n.length; e < t; e++) n[e].resume();
			}
			let n = this.effects.slice();
			for (e = 0, t = n.length; e < t; e++) n[e].resume();
		}
	}
	run(e) {
		if (this._active) {
			let t = De;
			try {
				return De = this, e();
			} finally {
				De = t;
			}
		}
	}
	on() {
		++this._on === 1 && (this.prevScope = De, De = this);
	}
	off() {
		if (this._on > 0 && --this._on === 0) {
			if (De === this) De = this.prevScope;
			else {
				let e = De;
				for (; e;) {
					if (e.prevScope === this) {
						e.prevScope = this.prevScope;
						break;
					}
					e = e.prevScope;
				}
			}
			this.prevScope = void 0;
		}
	}
	stop(e) {
		if (this._active) {
			this._active = !1;
			let t, n;
			for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].stop();
			for (this.effects.length = 0, t = 0, n = this.cleanups.length; t < n; t++) this.cleanups[t]();
			if (this.cleanups.length = 0, this.scopes) {
				let e = this.scopes.slice();
				for (t = 0, n = e.length; t < n; t++) e[t].stop(!0);
				this.scopes.length = 0;
			}
			if (!this.detached && this.parent && !e) {
				let e = this.parent.scopes.pop();
				e && e !== this && (this.parent.scopes[this.index] = e, e.index = this.index);
			}
			this.parent = void 0;
		}
	}
};
function ke() {
	return De;
}
var k, Ae = /* @__PURE__ */ new WeakSet(), je = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, De && (De.active ? De.effects.push(this) : this.flags &= -2);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, Ae.has(this) && (Ae.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Fe(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, Je(this), Re(this);
		let e = k, t = We;
		k = this, We = !0;
		try {
			return this.fn();
		} finally {
			ze(this), k = e, We = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) He(e);
			this.deps = this.depsTail = void 0, Je(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? Ae.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		Be(this) && this.run();
	}
	get dirty() {
		return Be(this);
	}
}, Me = 0, Ne, Pe;
function Fe(e, t = !1) {
	e.flags |= 8, t ? (e.next = Pe, Pe = e) : (e.next = Ne, Ne = e);
}
function Ie() {
	Me++;
}
function Le() {
	if (--Me > 0) return;
	if (Pe) {
		let e = Pe;
		for (Pe = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; Ne;) {
		let t = Ne;
		for (Ne = void 0; t;) {
			let n = t.next;
			if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
				t.trigger();
			} catch (t) {
				e ||= t;
			}
			t = n;
		}
	}
	if (e) throw e;
}
function Re(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function ze(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), He(r), Ue(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function Be(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Ve(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function Ve(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ye) || (e.globalVersion = Ye, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Be(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = k, r = We;
	k = e, We = !0;
	try {
		Re(e);
		let n = e.fn(e._value);
		(t.version === 0 || ae(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		k = n, We = r, ze(e), e.flags &= -3;
	}
}
function He(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) He(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function Ue(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
var We = !0, Ge = [];
function Ke() {
	Ge.push(We), We = !1;
}
function qe() {
	let e = Ge.pop();
	We = e === void 0 || e;
}
function Je(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = k;
		k = void 0;
		try {
			t();
		} finally {
			k = e;
		}
	}
}
var Ye = 0, Xe = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, Ze = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!k || !We || k === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== k) t = this.activeLink = new Xe(k, this), k.deps ? (t.prevDep = k.depsTail, k.depsTail.nextDep = t, k.depsTail = t) : k.deps = k.depsTail = t, Qe(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = k.depsTail, t.nextDep = void 0, k.depsTail.nextDep = t, k.depsTail = t, k.deps === t && (k.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, Ye++, this.notify(e);
	}
	notify(e) {
		Ie();
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			Le();
		}
	}
};
function Qe(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) Qe(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
	}
}
var $e = /* @__PURE__ */ new WeakMap(), et = /* @__PURE__ */ Symbol(""), tt = /* @__PURE__ */ Symbol(""), nt = /* @__PURE__ */ Symbol("");
function rt(e, t, n) {
	if (We && k) {
		let t = $e.get(e);
		t || $e.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new Ze()), r.map = t, r.key = n), r.track();
	}
}
function it(e, t, n, r, i, a) {
	let o = $e.get(e);
	if (!o) {
		Ye++;
		return;
	}
	let s = (e) => {
		e && e.trigger();
	};
	if (Ie(), t === "clear") o.forEach(s);
	else {
		let i = d(e), a = i && w(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === nt || !_(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(nt)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get(et)), f(e) && s(o.get(tt)));
				break;
			case "delete":
				i || (s(o.get(et)), f(e) && s(o.get(tt)));
				break;
			case "set": f(e) && s(o.get(et));
		}
	}
	Le();
}
function at(e) {
	let t = /* @__PURE__ */ A(e);
	return t === e || (rt(t, "iterate", nt), /* @__PURE__ */ Gt(e)) ? t : /* @__PURE__ */ Wt(e) ? /* @__PURE__ */ Ut(e) ? t.map((e) => Yt(Jt(e))) : t.map(Yt) : t.map(Jt);
}
function ot(e) {
	return rt(e = /* @__PURE__ */ A(e), "iterate", nt), e;
}
function st(e, t) {
	return /* @__PURE__ */ Wt(e) ? Yt(/* @__PURE__ */ Ut(e) ? Jt(t) : t) : Jt(t);
}
var ct = {
	__proto__: null,
	[Symbol.iterator]() {
		return lt(this, Symbol.iterator, (e) => st(this, e));
	},
	concat(...e) {
		return at(this).concat(...e.map((e) => d(e) ? at(e) : e));
	},
	entries() {
		return lt(this, "entries", (e) => (e[1] = st(this, e[1]), e));
	},
	every(e, t) {
		return ft(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return ft(this, "filter", e, t, (e) => e.map((e) => st(this, e)), arguments);
	},
	find(e, t) {
		return ft(this, "find", e, t, (e) => st(this, e), arguments);
	},
	findIndex(e, t) {
		return ft(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return ft(this, "findLast", e, t, (e) => st(this, e), arguments);
	},
	findLastIndex(e, t) {
		return ft(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return ft(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return mt(this, "includes", e);
	},
	indexOf(...e) {
		return mt(this, "indexOf", e);
	},
	join(e) {
		return at(this).join(e);
	},
	lastIndexOf(...e) {
		return mt(this, "lastIndexOf", e);
	},
	map(e, t) {
		return ft(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return ht(this, "pop");
	},
	push(...e) {
		return ht(this, "push", e);
	},
	reduce(e, ...t) {
		return pt(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return pt(this, "reduceRight", e, t);
	},
	shift() {
		return ht(this, "shift");
	},
	some(e, t) {
		return ft(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return ht(this, "splice", e);
	},
	toReversed() {
		return at(this).toReversed();
	},
	toSorted(e) {
		return at(this).toSorted(e);
	},
	toSpliced(...e) {
		return at(this).toSpliced(...e);
	},
	unshift(...e) {
		return ht(this, "unshift", e);
	},
	values() {
		return lt(this, "values", (e) => st(this, e));
	}
};
function lt(e, t, n) {
	let r = ot(e), i = r[t], a = i.call(r);
	if (r !== e && !/* @__PURE__ */ Gt(e)) {
		if (a[Symbol.toStringTag] === "Array Iterator") {
			let e = Object.create(Object.getPrototypeOf(a));
			return e.next = () => ut(a.next(), n), i !== dt[t] && Object.defineProperties(e, {
				return: { get() {
					let e = a.return;
					return typeof e == "function" ? e.bind(a) : e;
				} },
				throw: { get() {
					let e = a.throw;
					return typeof e == "function" ? e.bind(a) : e;
				} }
			}), e;
		}
		a._next = a.next, a.next = () => ut(a._next(), n);
	}
	return a;
}
function ut(e, t) {
	return e.done || (e.value = t(e.value)), e;
}
var dt = Array.prototype;
function ft(e, t, n, r, i, a) {
	let o = ot(e), s = o !== e && !/* @__PURE__ */ Gt(e), c = o[t];
	if (c !== dt[t]) {
		let t = c.apply(e, a);
		return s ? Jt(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, st(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function pt(e, t, n, r) {
	let i = ot(e), a = i !== e && !/* @__PURE__ */ Gt(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = st(e, t)), n.call(this, t, st(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? st(e, c) : c;
}
function mt(e, t, n) {
	let r = /* @__PURE__ */ A(e);
	rt(r, "iterate", nt);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ Kt(n[0]) ? (n[0] = /* @__PURE__ */ A(n[0]), r[t](...n)) : i;
}
function ht(e, t, n = []) {
	Ke(), Ie();
	let r = (/* @__PURE__ */ A(e))[t].apply(e, n);
	return Le(), qe(), r;
}
var gt = /* @__PURE__ */ e("__proto__,__v_isRef,__isVue"), _t = /* @__PURE__ */ new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(_));
function vt(e) {
	_(e) || (e = String(e));
	let t = /* @__PURE__ */ A(this);
	return rt(t, "has", e), t.hasOwnProperty(e);
}
var yt = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? Lt : It : i ? Ft : Pt).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = d(e);
		if (!r) {
			let e;
			if (a && (e = ct[t])) return e;
			if (t === "hasOwnProperty") return vt;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ Xt(e) ? e : n);
		if ((_(t) ? _t.has(t) : gt(t)) || (r || rt(e, "get", t), i)) return o;
		if (/* @__PURE__ */ Xt(o)) {
			let e = a && w(t) ? o : o.value;
			return r && v(e) ? /* @__PURE__ */ Vt(e) : e;
		}
		return v(o) ? r ? /* @__PURE__ */ Vt(o) : /* @__PURE__ */ zt(o) : o;
	}
}, bt = class extends yt {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = d(e) && w(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ Wt(i);
			if (!/* @__PURE__ */ Gt(n) && !/* @__PURE__ */ Wt(n) && (i = /* @__PURE__ */ A(i), n = /* @__PURE__ */ A(n)), !a && /* @__PURE__ */ Xt(i) && !/* @__PURE__ */ Xt(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : u(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ Xt(e) ? e : r);
		return e === /* @__PURE__ */ A(r) && s && (o ? ae(n, i) && it(e, "set", t, n, i) : it(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = u(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && it(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return _(t) && _t.has(t) || rt(e, "has", t), n;
	}
	ownKeys(e) {
		return rt(e, "iterate", d(e) ? "length" : et), Reflect.ownKeys(e);
	}
}, xt = class extends yt {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, St = /* @__PURE__ */ new bt(), Ct = /* @__PURE__ */ new xt(), wt = /* @__PURE__ */ new bt(!0), Tt = (e) => e, Et = (e) => Reflect.getPrototypeOf(e);
function Dt(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ A(i), o = f(a), c = e === "entries" || e === Symbol.iterator && o, l = e === "keys" && o, u = i[e](...r), d = n ? Tt : t ? Yt : Jt;
		return !t && rt(a, "iterate", l ? tt : et), s(Object.create(u), { next() {
			let { value: e, done: t } = u.next();
			return t ? {
				value: e,
				done: t
			} : {
				value: c ? [d(e[0]), d(e[1])] : d(e),
				done: t
			};
		} });
	};
}
function Ot(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function kt(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ A(r), a = /* @__PURE__ */ A(n);
			e || (ae(n, a) && rt(i, "get", n), rt(i, "get", a));
			let { has: o } = Et(i), s = t ? Tt : e ? Yt : Jt;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && rt(/* @__PURE__ */ A(t), "iterate", et), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ A(n), i = /* @__PURE__ */ A(t);
			return e || (ae(t, i) && rt(r, "has", t), rt(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ A(a), s = t ? Tt : e ? Yt : Jt;
			return !e && rt(o, "iterate", et), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return s(n, e ? {
		add: Ot("add"),
		set: Ot("set"),
		delete: Ot("delete"),
		clear: Ot("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ A(this), r = Et(n), i = /* @__PURE__ */ A(e), a = !t && !/* @__PURE__ */ Gt(e) && !/* @__PURE__ */ Wt(e) ? i : e;
			return r.has.call(n, a) || ae(e, a) && r.has.call(n, e) || ae(i, a) && r.has.call(n, i) || (n.add(a), it(n, "add", a, a)), this;
		},
		set(e, n) {
			t || /* @__PURE__ */ Gt(n) || /* @__PURE__ */ Wt(n) || (n = /* @__PURE__ */ A(n));
			let r = /* @__PURE__ */ A(this), { has: i, get: a } = Et(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ A(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? ae(n, s) && it(r, "set", e, n, s) : it(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ A(this), { has: n, get: r } = Et(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ A(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && it(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ A(this), t = e.size !== 0, n = e.clear();
			return t && it(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = Dt(r, e, t);
	}), n;
}
function At(e, t) {
	let n = kt(e, t);
	return (r, i, a) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_isShallow" ? t : i === "__v_raw" ? r : Reflect.get(u(n, i) && i in r ? n : r, i, a);
}
var jt = { get: /* @__PURE__ */ At(!1, !1) }, Mt = { get: /* @__PURE__ */ At(!1, !0) }, Nt = { get: /* @__PURE__ */ At(!0, !1) }, Pt = /* @__PURE__ */ new WeakMap(), Ft = /* @__PURE__ */ new WeakMap(), It = /* @__PURE__ */ new WeakMap(), Lt = /* @__PURE__ */ new WeakMap();
function Rt(e) {
	switch (e) {
		case "Object":
		case "Array": return 1;
		case "Map":
		case "Set":
		case "WeakMap":
		case "WeakSet": return 2;
		default: return 0;
	}
}
// @__NO_SIDE_EFFECTS__
function zt(e) {
	return /* @__PURE__ */ Wt(e) ? e : Ht(e, !1, St, jt, Pt);
}
// @__NO_SIDE_EFFECTS__
function Bt(e) {
	return Ht(e, !1, wt, Mt, Ft);
}
// @__NO_SIDE_EFFECTS__
function Vt(e) {
	return Ht(e, !0, Ct, Nt, It);
}
function Ht(e, t, n, r, i) {
	if (!v(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
	let a = i.get(e);
	if (a) return a;
	let o = Rt(S(e));
	if (o === 0) return e;
	let s = new Proxy(e, o === 2 ? r : n);
	return i.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function Ut(e) {
	return /* @__PURE__ */ Wt(e) ? /* @__PURE__ */ Ut(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Wt(e) {
	return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Gt(e) {
	return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Kt(e) {
	return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function A(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ A(t) : e;
}
function qt(e) {
	return !u(e, "__v_skip") && Object.isExtensible(e) && se(e, "__v_skip", !0), e;
}
var Jt = (e) => v(e) ? /* @__PURE__ */ zt(e) : e, Yt = (e) => v(e) ? /* @__PURE__ */ Vt(e) : e;
// @__NO_SIDE_EFFECTS__
function Xt(e) {
	return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function j(e) {
	return Qt(e, !1);
}
// @__NO_SIDE_EFFECTS__
function Zt(e) {
	return Qt(e, !0);
}
function Qt(e, t) {
	return /* @__PURE__ */ Xt(e) ? e : new $t(e, t);
}
var $t = class {
	constructor(e, t) {
		this.dep = new Ze(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ A(e), this._value = t ? e : Jt(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Gt(e) || /* @__PURE__ */ Wt(e);
		e = n ? e : /* @__PURE__ */ A(e), ae(e, t) && (this._rawValue = e, this._value = n ? e : Jt(e), this.dep.trigger());
	}
};
function en(e) {
	return /* @__PURE__ */ Xt(e) ? e.value : e;
}
var tn = {
	get: (e, t, n) => t === "__v_raw" ? e : en(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ Xt(i) && !/* @__PURE__ */ Xt(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function nn(e) {
	return /* @__PURE__ */ Ut(e) ? e : new Proxy(e, tn);
}
var rn = class {
	constructor(e) {
		this.__v_isRef = !0, this._value = void 0;
		let t = this.dep = new Ze(), { get: n, set: r } = e(t.track.bind(t), t.trigger.bind(t));
		this._get = n, this._set = r;
	}
	get value() {
		return this._value = this._get();
	}
	set value(e) {
		this._set(e);
	}
};
function an(e) {
	return new rn(e);
}
var on = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new Ze(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ye - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && k !== this) return Fe(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return Ve(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
};
// @__NO_SIDE_EFFECTS__
function sn(e, t, n = !1) {
	let r, i;
	return h(e) ? r = e : (r = e.get, i = e.set), new on(r, i, n);
}
var cn = {}, ln = /* @__PURE__ */ new WeakMap(), un = void 0;
function dn(e, t = !1, n = un) {
	if (n) {
		let t = ln.get(n);
		t || ln.set(n, t = []), t.push(e);
	}
}
function fn(e, n, i = t) {
	let { immediate: a, deep: o, once: s, scheduler: l, augmentJob: u, call: f } = i, p = (e) => o ? e : /* @__PURE__ */ Gt(e) || o === !1 || o === 0 ? pn(e, 1) : pn(e), m, g, _, v, y = !1, b = !1;
	if (/* @__PURE__ */ Xt(e) ? (g = () => e.value, y = /* @__PURE__ */ Gt(e)) : /* @__PURE__ */ Ut(e) ? (g = () => p(e), y = !0) : d(e) ? (b = !0, y = e.some((e) => /* @__PURE__ */ Ut(e) || /* @__PURE__ */ Gt(e)), g = () => e.map((e) => {
		if (/* @__PURE__ */ Xt(e)) return e.value;
		if (/* @__PURE__ */ Ut(e)) return p(e);
		if (h(e)) return f ? f(e, 2) : e();
	})) : g = h(e) ? n ? f ? () => f(e, 2) : e : () => {
		if (_) {
			Ke();
			try {
				_();
			} finally {
				qe();
			}
		}
		let t = un;
		un = m;
		try {
			return f ? f(e, 3, [v]) : e(v);
		} finally {
			un = t;
		}
	} : r, n && o) {
		let e = g, t = o === !0 ? Infinity : o;
		g = () => pn(e(), t);
	}
	let x = ke(), S = () => {
		m.stop(), x && x.active && c(x.effects, m);
	};
	if (s && n) {
		let e = n;
		n = (...t) => {
			try {
				return e(...t);
			} finally {
				S();
			}
		};
	}
	let C = b ? Array(e.length).fill(cn) : cn, w = (e) => {
		if (m.flags & 1 && (m.dirty || e)) {
			if (n) {
				let t = m.run();
				if (e || o || y || (b ? t.some((e, t) => ae(e, C[t])) : ae(t, C))) {
					let e = un;
					Ke();
					try {
						_ && _(), un = m;
						let e = [
							t,
							C === cn ? void 0 : b && C[0] === cn ? [] : C,
							v
						];
						C = t, f ? f(n, 3, e) : n(...e);
					} finally {
						un = e, qe();
					}
				}
			} else m.run();
		}
	};
	return u && u(w), m = new je(g), m.scheduler = l ? () => l(w, !1) : w, v = (e) => dn(e, !1, m), _ = m.onStop = () => {
		let e = ln.get(m);
		if (e) {
			if (f) f(e, 4);
			else for (let t of e) t();
			ln.delete(m);
		}
	}, n ? a ? w(!0) : C = m.run() : l ? l(w.bind(null, !0), !0) : m.run(), S.pause = m.pause.bind(m), S.resume = m.resume.bind(m), S.stop = S, S;
}
function pn(e, t = Infinity, n) {
	if (t <= 0 || !v(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ Xt(e)) pn(e.value, t, n);
	else if (d(e)) for (let r = 0; r < e.length; r++) pn(e[r], t, n);
	else if (p(e) || f(e)) e.forEach((e) => {
		pn(e, t, n);
	});
	else if (C(e)) {
		for (let r in e) pn(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && pn(e[r], t, n);
	}
	return e;
}
// node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
function mn(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		gn(e, t, n);
	}
}
function hn(e, t, n, r) {
	if (h(e)) {
		let i = mn(e, t, n, r);
		return i && y(i) && i.catch((e) => {
			gn(e, t, n, void 0, !0);
		}), i;
	}
	if (d(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(hn(e[a], t, n, r));
		return i;
	}
}
function gn(e, n, r, i = !0, a = !1) {
	let o = n ? n.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: c } = n && n.appContext.config || t;
	if (n) {
		let t = n.parent, i = n.proxy, o = `https://vuejs.org/error-reference/#runtime-${r}`;
		for (; t;) {
			let n = t.ec;
			if (n && !t.isUnmounted && (!a || t.scope.active)) {
				for (let t = 0; t < n.length; t++) if (n[t](e, i, o) === !1) return;
			}
			t = t.parent;
		}
		if (s) {
			Ke(), mn(s, null, 10, [
				e,
				i,
				o
			]), qe();
			return;
		}
	}
	_n(e, r, o, i, c);
}
function _n(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var vn = [], yn = -1, bn = [], xn = null, Sn = 0, Cn = /* @__PURE__ */ Promise.resolve(), wn = null;
function Tn(e) {
	let t = wn || Cn;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function En(e) {
	let t = yn + 1, n = vn.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = vn[r], a = Pn(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function Dn(e) {
	if (!(e.flags & 1)) {
		let t = Pn(e), n = vn[vn.length - 1];
		!n || !(e.flags & 2) && t >= Pn(n) ? vn.push(e) : vn.splice(En(t), 0, e), e.flags |= 1, On();
	}
}
function On() {
	wn ||= Cn.then(Fn);
}
function kn(e) {
	if (!d(e)) xn && e.id === -1 ? xn.splice(Sn + 1, 0, e) : e.flags & 1 || (bn.push(e), e.flags |= 1);
	else for (let t = 0; t < e.length; t++) bn.push(e[t]);
	On();
}
function An(e, t, n, r = yn + 1) {
	for (; r < vn.length; r++) {
		let n = vn[r];
		if (n && n.flags & 2) {
			if (e && n.id !== e.uid || t !== void 0 && !(n.id >= t)) continue;
			vn.splice(r, 1), r = e ? r - 1 : yn, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
		}
	}
}
function jn(e, t, n = 0) {
	if (bn.length) {
		let e = bn, r = 0;
		if (t) {
			e = [];
			for (let i = 0; i < bn.length; i++) {
				let a = bn[i];
				(a.i === void 0 ? t.has(a) : !a.i || a.i.uid < n) ? bn[r++] = a : e.push(a);
			}
		}
		let i = [...new Set(e)].sort((e, t) => Pn(e) - Pn(t));
		if (bn.length = r, xn) {
			for (let e = 0; e < i.length; e++) xn.push(i[e]);
			return;
		}
		for (xn = i, Sn = 0; Sn < xn.length; Sn++) {
			let e = xn[Sn];
			e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
		}
		xn = null, Sn = 0;
	}
}
var Mn = !1;
function Nn(e, t) {
	if (Mn) {
		e();
		return;
	}
	let n = t === void 0 ? void 0 : new Set(bn);
	e(), Mn = !0;
	try {
		An(void 0, t), jn(void 0, n, t);
	} finally {
		Mn = !1;
	}
}
var Pn = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function Fn(e) {
	try {
		for (yn = 0; yn < vn.length; yn++) {
			let e = vn[yn];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), mn(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; yn < vn.length; yn++) {
			let e = vn[yn];
			e && (e.flags &= -2);
		}
		yn = -1, vn.length = 0, jn(e), wn = null, (vn.length || bn.length) && Fn(e);
	}
}
var In = null, Ln = null;
function Rn(e) {
	let t = In;
	return In = e, Ln = e && e.type.__scopeId || null, t;
}
function zn(e, t = In, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && Qi(-1);
		let i = Rn(t), a = Ji.length, o;
		try {
			o = e(...n);
		} finally {
			for (let e = Ji.length; e > a; e--) Xi();
			Rn(i), r._d && Qi(1);
		}
		return o;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function Bn(e, n) {
	if (In === null) return e;
	let r = Fa(In), i = e.dirs ||= [];
	for (let e = 0; e < n.length; e++) {
		let [a, o, s, c = t] = n[e];
		a && (h(a) && (a = {
			mounted: a,
			updated: a
		}), a.deep && pn(o), i.push({
			dir: a,
			instance: r,
			value: o,
			oldValue: void 0,
			arg: s,
			modifiers: c
		}));
	}
	return e;
}
function Vn(e, t, n, r) {
	let i = e;
	if (r === "beforeMount") e._mount = e;
	else if (r === "beforeUpdate") {
		let n = t && t._mount;
		n && (n._latest = e, e._mount = n);
	} else if (r === "mounted") {
		let t = e._latest;
		e._mount = e._latest = void 0, t && (i = t, t._mount = void 0);
	}
	let a = i.dirs, o = t && t.dirs;
	for (let c = 0; c < a.length; c++) {
		let l = a[c];
		o ? l.oldValue = o[c].value : r === "mounted" && l.oldValue !== void 0 && (l = s({}, l, { oldValue: void 0 }));
		let u = l.dir[r];
		u && (Ke(), hn(u, n, 8, [
			e.el,
			l,
			i,
			t
		]), qe());
	}
}
function Hn(e, t) {
	if (ba) {
		let n = ba.provides, r = ba.parent && ba.parent.provides;
		r === n && (n = ba.provides = Object.create(r)), n[e] = t;
	}
}
function Un(e, t, n = !1) {
	let r = xa();
	if (r || $r) {
		let i = $r ? $r._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && h(t) ? t.call(r && r.proxy) : t;
	}
}
var Wn = /* @__PURE__ */ Symbol.for("v-scx"), Gn = () => Un(Wn);
function Kn(e, t) {
	return Jn(e, null, t);
}
function qn(e, t, n) {
	return Jn(e, t, n);
}
function Jn(e, n, i = t) {
	let { immediate: a, deep: o, flush: c, once: l } = i, u = s({}, i), d = n && a || !n && c !== "post", f;
	if (Da) {
		if (c === "sync") {
			let e = Gn();
			f = e.__watcherHandles ||= [];
		} else if (!d) {
			let e = () => {};
			return e.stop = r, e.resume = r, e.pause = r, e;
		}
	}
	let p = ba;
	u.call = (e, t, n) => hn(e, p, t, n);
	let m = !1;
	c === "post" ? u.scheduler = (e) => {
		e.i = p, ji(e, p && p.suspense);
	} : c !== "sync" && (m = !0, u.scheduler = (e, t) => {
		t ? e() : Dn(e);
	}), u.augmentJob = (e) => {
		n && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = fn(e, n, u);
	return Da && (f ? f.push(h) : d && h()), h;
}
function Yn(e, t, n) {
	let r = this.proxy, i = g(e) ? e.includes(".") ? Xn(r, e) : () => r[e] : e.bind(r, r), a;
	h(t) ? a = t : (a = t.handler, n = t);
	let o = wa(this), s = Jn(i, a.bind(r), n);
	return o(), s;
}
function Xn(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var Zn = /* @__PURE__ */ Symbol("_vte"), Qn = (e) => e.__isTeleport, $n = /* @__PURE__ */ Symbol("_leaveCb");
function er(e) {
	let t = e[0];
	if (e.length > 1) {
		for (let n of e) if (n.type !== Ki) {
			t = n;
			break;
		}
	}
	return t;
}
function tr(e) {
	if (!dr(e)) return Qn(e.type) && e.children ? er(e.children) : e;
	if (e.component) return e.component.subTree;
	let { shapeFlag: t, children: n } = e;
	if (n) {
		if (t & 16) return n[0];
		if (t & 32 && h(n.default)) return n.default();
	}
}
function nr(e, t) {
	if (e.shapeFlag & 6 && e.component) {
		e.transition = t;
		let n = e.component.subTree;
		nr(Qn(n.type) && tr(n) || n, t);
	} else if (e.shapeFlag & 128) {
		let n = e.suspense;
		if (n) {
			let e = n.isHydrating ? n.pendingBranch : n.activeBranch;
			e && nr(e, t.clone(e));
		} else e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback);
	} else if (e.transition = t, e.type === M && d(e.children)) {
		let n = oi(e.children, !1);
		n && nr(n, t);
	}
}
function rr(e) {
	if (e.component) return rr(e.component.subTree);
	if (e.type === M) {
		let t = d(e.children) && oi(e.children, !1);
		return t ? rr(t) : void 0;
	}
	if (e.type !== Ki) return e;
}
// @__NO_SIDE_EFFECTS__
function ir(e, t) {
	return h(e) ? /* @__PURE__ */ s({ name: e.name }, t, { setup: e }) : e;
}
function ar(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function or(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var sr = /* @__PURE__ */ new WeakMap();
function cr(e, n, r, a, o = !1) {
	if (d(e)) {
		e.forEach((e, t) => cr(e, n && (d(n) ? n[t] : n), r, a, o));
		return;
	}
	if (ur(a) && !o) {
		a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && cr(e, n, r, a.component.subTree);
		return;
	}
	let s = a.shapeFlag & 4 ? Fa(a.component) : a.el, l = o ? null : s, { i: f, r: p } = e, m = n && n.r, _ = f.refs === t ? f.refs = {} : f.refs, v = f.setupState, y = /* @__PURE__ */ A(v), b = v === t ? i : (e) => !or(_, e) && u(y, e), x = (e, t) => !(t && or(_, t));
	if (m != null && m !== p) {
		if (lr(n), g(m)) _[m] = null, b(m) && (v[m] = null);
		else if (/* @__PURE__ */ Xt(m)) {
			let e = n;
			x(m, e.k) && (m.value = null), e.k && (_[e.k] = null);
		}
	}
	if (h(p)) mn(p, f, 12, [l, _]);
	else {
		let t = g(p), n = /* @__PURE__ */ Xt(p);
		if (t || n) {
			let i = () => {
				if (e.f) {
					let n = t ? b(p) ? v[p] : _[p] : x(p) || !e.k ? p.value : _[e.k];
					if (o) d(n) && c(n, s);
					else if (d(n)) n.includes(s) || n.push(s);
					else if (t) _[p] = [s], b(p) && (v[p] = _[p]);
					else {
						let t = [s];
						x(p, e.k) && (p.value = t), e.k && (_[e.k] = t);
					}
				} else t ? (_[p] = l, b(p) && (v[p] = l)) : n && (x(p, e.k) && (p.value = l), e.k && (_[e.k] = l));
			};
			if (l) {
				let t = () => {
					i(), sr.delete(e);
				};
				t.id = -1, sr.set(e, t), ji(t, r);
			} else lr(e), i();
		}
	}
}
function lr(e) {
	let t = sr.get(e);
	t && (t.flags |= 8, sr.delete(e));
}
ue().requestIdleCallback, ue().cancelIdleCallback;
var ur = (e) => !!e.type.__asyncLoader, dr = (e) => e.type.__isKeepAlive;
function fr(e, t) {
	mr(e, "a", t);
}
function pr(e, t) {
	mr(e, "da", t);
}
function mr(e, t, n = ba) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if (gr(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) dr(e.parent.vnode) && hr(r, t, n, e), e = e.parent;
	}
}
function hr(e, t, n, r) {
	let i = gr(t, e, r, !0), a = gr("um", () => c(r[t], i), n);
	a.flags = 16;
}
function gr(e, t, n = ba, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			Ke();
			let i = wa(n), a = hn(t, n, e, r);
			return i(), qe(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var _r = (e) => (t, n = ba) => {
	Da && e !== "sp" || gr(e, (...e) => t(...e), n);
}, vr = _r("bm"), yr = _r("m"), br = _r("bu"), xr = _r("u"), Sr = _r("bum"), Cr = _r("um"), wr = _r("sp"), Tr = _r("rtg"), Er = _r("rtc");
function Dr(e, t = ba) {
	gr("ec", e, t);
}
var Or = /* @__PURE__ */ Symbol.for("v-ndc");
function kr(e, t, n, r) {
	let i, a = n && n[r], o = d(e);
	if (o || g(e)) {
		let n = o && /* @__PURE__ */ Ut(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ Gt(e), s = /* @__PURE__ */ Wt(e), e = ot(e)), i = Array(e.length);
		for (let n = 0, o = e.length; n < o; n++) i[n] = t(r ? s ? Yt(Jt(e[n])) : Jt(e[n]) : e[n], n, void 0, a && a[n]);
	} else if (typeof e == "number") {
		if (!Number.isInteger(e) || e < 0) i = [];
		else {
			i = Array(e);
			for (let n = 0; n < e; n++) i[n] = t(n + 1, n, void 0, a && a[n]);
		}
	} else if (v(e)) {
		if (e[Symbol.iterator]) i = Array.from(e, (e, n) => t(e, n, void 0, a && a[n]));
		else {
			let n = Object.keys(e);
			i = Array(n.length);
			for (let r = 0, o = n.length; r < o; r++) {
				let o = n[r];
				i[r] = t(e[o], o, r, a && a[r]);
			}
		}
	} else i = [];
	return n && (n[r] = i), i;
}
var Ar = (e) => e ? Ea(e) ? Fa(e) : Ar(e.parent) : null, jr = /* @__PURE__ */ s(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => Ar(e.parent),
	$root: (e) => Ar(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => Br(e),
	$forceUpdate: (e) => e.f ||= () => {
		Dn(e.update);
	},
	$nextTick: (e) => e.n ||= Tn.bind(e.proxy),
	$watch: (e) => Yn.bind(e)
}), Mr = (e, n) => e !== t && !e.__isScriptSetup && u(e, n), Nr = {
	get({ _: e }, n) {
		if (n === "__v_skip") return !0;
		let { ctx: r, setupState: i, data: a, props: o, accessCache: s, type: c, appContext: l } = e;
		if (n[0] !== "$") {
			let e = s[n];
			if (e !== void 0) switch (e) {
				case 1: return i[n];
				case 2: return a[n];
				case 4: return r[n];
				case 3: return o[n];
			}
			else if (Mr(i, n)) return s[n] = 1, i[n];
			else if (a !== t && u(a, n)) return s[n] = 2, a[n];
			else if (u(o, n)) return s[n] = 3, o[n];
			else if (r !== t && u(r, n)) return s[n] = 4, r[n];
			else Fr && (s[n] = 0);
		}
		let d = jr[n], f, p;
		if (d) return n === "$attrs" && rt(e.attrs, "get", ""), d(e);
		if ((f = c.__cssModules) && (f = f[n])) return f;
		if (r !== t && u(r, n)) return s[n] = 4, r[n];
		if (p = l.config.globalProperties, u(p, n)) return p[n];
	},
	set({ _: e }, n, r) {
		let { data: i, setupState: a, ctx: o } = e;
		return Mr(a, n) ? (a[n] = r, !0) : i !== t && u(i, n) ? (i[n] = r, !0) : u(e.props, n) || n[0] === "$" && n.slice(1) in e ? !1 : (o[n] = r, !0);
	},
	has({ _: { data: e, setupState: n, accessCache: r, ctx: i, appContext: a, props: o, type: s } }, c) {
		let l;
		return !!(r[c] || e !== t && c[0] !== "$" && u(e, c) || Mr(n, c) || u(o, c) || u(i, c) || u(jr, c) || u(a.config.globalProperties, c) || (l = s.__cssModules) && l[c]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? u(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function Pr(e) {
	return d(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
var Fr = !0;
function Ir(e) {
	let t = Br(e), n = e.proxy, i = e.ctx;
	Fr = !1, t.beforeCreate && Rr(t.beforeCreate, e, "bc");
	let { data: a, computed: o, methods: s, watch: c, provide: l, inject: u, created: f, beforeMount: p, mounted: m, beforeUpdate: g, updated: _, activated: y, deactivated: b, beforeDestroy: x, beforeUnmount: S, destroyed: C, unmounted: w, render: ee, renderTracked: T, renderTriggered: te, errorCaptured: E, serverPrefetch: ne, expose: D, inheritAttrs: re, components: ie, directives: ae, filters: oe } = t;
	if (u && Lr(u, i, null), s) for (let e in s) {
		let t = s[e];
		h(t) && (i[e] = t.bind(n));
	}
	if (a) {
		let t = a.call(n, n);
		v(t) && (e.data = /* @__PURE__ */ zt(t));
	}
	if (Fr = !0, o) for (let e in o) {
		let t = o[e], a = La({
			get: h(t) ? t.bind(n, n) : h(t.get) ? t.get.bind(n, n) : r,
			set: !h(t) && h(t.set) ? t.set.bind(n) : r
		});
		Object.defineProperty(i, e, {
			enumerable: !0,
			configurable: !0,
			get: () => a.value,
			set: (e) => a.value = e
		});
	}
	if (c) for (let e in c) zr(c[e], i, n, e);
	if (l) {
		let e = h(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			Hn(t, e[t]);
		});
	}
	f && Rr(f, e, "c");
	function se(e, t) {
		d(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (se(vr, p), se(yr, m), se(br, g), se(xr, _), se(fr, y), se(pr, b), se(Dr, E), se(Er, T), se(Tr, te), se(Sr, S), se(Cr, w), se(wr, ne), d(D)) {
		if (D.length) {
			let t = e.exposed ||= {};
			D.forEach((e) => {
				Object.defineProperty(t, e, {
					get: () => n[e],
					set: (t) => n[e] = t,
					enumerable: !0
				});
			});
		} else e.exposed ||= {};
	}
	ee && e.render === r && (e.render = ee), re != null && (e.inheritAttrs = re), ie && (e.components = ie), ae && (e.directives = ae), ne && ar(e);
}
function Lr(e, t, n = r) {
	d(e) && (e = Gr(e));
	for (let n in e) {
		let r = e[n], i;
		i = v(r) ? "default" in r ? Un(r.from || n, r.default, !0) : Un(r.from || n) : Un(r), /* @__PURE__ */ Xt(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function Rr(e, t, n) {
	hn(d(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function zr(e, t, n, r) {
	let i = r.includes(".") ? Xn(n, r) : () => n[r];
	if (g(e)) {
		let n = t[e];
		h(n) && qn(i, n);
	} else if (h(e)) qn(i, e.bind(n));
	else if (v(e)) {
		if (d(e)) e.forEach((e) => zr(e, t, n, r));
		else {
			let r = h(e.handler) ? e.handler.bind(n) : t[e.handler];
			h(r) && qn(i, r, e);
		}
	}
}
function Br(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => Vr(c, e, o, !0)), Vr(c, t, o)), v(t) && a.set(t, c), c;
}
function Vr(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && Vr(e, a, n, !0), i && i.forEach((t) => Vr(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = Hr[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var Hr = {
	data: Ur,
	props: Jr,
	emits: Jr,
	methods: qr,
	computed: qr,
	beforeCreate: Kr,
	created: Kr,
	beforeMount: Kr,
	mounted: Kr,
	beforeUpdate: Kr,
	updated: Kr,
	beforeDestroy: Kr,
	beforeUnmount: Kr,
	destroyed: Kr,
	unmounted: Kr,
	activated: Kr,
	deactivated: Kr,
	errorCaptured: Kr,
	serverPrefetch: Kr,
	components: qr,
	directives: qr,
	watch: Yr,
	provide: Ur,
	inject: Wr
};
function Ur(e, t) {
	return t ? e ? function() {
		return s(h(e) ? e.call(this, this) : e, h(t) ? t.call(this, this) : t);
	} : t : e;
}
function Wr(e, t) {
	return qr(Gr(e), Gr(t));
}
function Gr(e) {
	if (d(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function Kr(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function qr(e, t) {
	return e ? s(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Jr(e, t) {
	return e ? d(e) && d(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : s(/* @__PURE__ */ Object.create(null), Pr(e), Pr(t ?? {})) : t;
}
function Yr(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = s(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = Kr(e[r], t[r]);
	return n;
}
function Xr() {
	return {
		app: null,
		config: {
			isNativeTag: i,
			performance: !1,
			globalProperties: {},
			optionMergeStrategies: {},
			errorHandler: void 0,
			warnHandler: void 0,
			compilerOptions: {}
		},
		mixins: [],
		components: {},
		directives: {},
		provides: /* @__PURE__ */ Object.create(null),
		optionsCache: /* @__PURE__ */ new WeakMap(),
		propsCache: /* @__PURE__ */ new WeakMap(),
		emitsCache: /* @__PURE__ */ new WeakMap()
	};
}
var Zr = 0;
function Qr(e, t) {
	return function(n, r = null) {
		h(n) || (n = s({}, n)), r != null && !v(r) && (r = null);
		let i = Xr(), a = /* @__PURE__ */ new WeakSet(), o = [], c = !1, l = i.app = {
			_uid: Zr++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: za,
			get config() {
				return i.config;
			},
			set config(e) {},
			use(e, ...t) {
				return a.has(e) || (e && h(e.install) ? (a.add(e), e.install(l, ...t)) : h(e) && (a.add(e), e(l, ...t))), l;
			},
			mixin(e) {
				return i.mixins.includes(e) || i.mixins.push(e), l;
			},
			component(e, t) {
				return t ? (i.components[e] = t, l) : i.components[e];
			},
			directive(e, t) {
				return t ? (i.directives[e] = t, l) : i.directives[e];
			},
			mount(a, o, s) {
				if (!c) {
					let u = l._ceVNode || aa(n, r);
					return u.appContext = i, s === !0 ? s = "svg" : s === !1 && (s = void 0), o && t ? t(u, a) : e(u, a, s), c = !0, l._container = a, a.__vue_app__ = l, Fa(u.component);
				}
			},
			onUnmount(e) {
				o.push(e);
			},
			unmount() {
				c && (hn(o, l._instance, 16), e(null, l._container), delete l._container.__vue_app__);
			},
			provide(e, t) {
				return i.provides[e] = t, l;
			},
			runWithContext(e) {
				let t = $r;
				$r = l;
				try {
					return e();
				} finally {
					$r = t;
				}
			}
		};
		return l;
	};
}
var $r = null, ei = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${E(t)}Modifiers`] || e[`${D(t)}Modifiers`];
function ti(e, n, ...r) {
	if (e.isUnmounted) return;
	let i = e.vnode.props || t, a = r, o = n.startsWith("update:"), s = o && ei(i, n.slice(7));
	s && (s.trim && (a = r.map((e) => g(e) ? e.trim() : e)), s.number && (a = a.map(ce)));
	let c, l = i[c = ie(n)] || i[c = ie(E(n))];
	!l && o && (l = i[c = ie(D(n))]), l && hn(l, e, 6, a);
	let u = i[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, hn(u, e, 6, a);
	}
}
var ni = /* @__PURE__ */ new WeakMap();
function ri(e, t, n = !1) {
	let r = n ? ni : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, c = !1;
	if (!h(e)) {
		let r = (e) => {
			let n = ri(e, t, !0);
			n && (c = !0, s(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !c ? (v(e) && r.set(e, null), null) : (d(a) ? a.forEach((e) => o[e] = null) : s(o, a), v(e) && r.set(e, o), o);
}
function ii(e, t) {
	return !e || !a(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), u(e, t[0].toLowerCase() + t.slice(1)) || u(e, D(t)) || u(e, t));
}
function ai(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: s, attrs: c, emit: l, render: u, renderCache: d, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, _ = Rn(e), v, y;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			v = da(u.call(t, e, d, f, m, p, h)), y = c;
		} else {
			let e = t;
			v = da(e.length > 1 ? e(f, {
				attrs: c,
				slots: s,
				emit: l
			}) : e(f, null)), y = t.props ? c : si(c);
		}
	} catch (t) {
		Ji.length = 0, gn(t, e, 1), v = aa(Ki);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(o) && (y = ci(y, a)), b = ca(b, y, !1, !0));
	}
	return n.dirs && (b = ca(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && nr(Qn(b.type) && tr(b) || b, n.transition), v = b, Rn(_), v;
}
function oi(e, t = !0) {
	let n;
	for (let t = 0; t < e.length; t++) {
		let r = e[t];
		if (ta(r)) {
			if (r.type !== Ki || r.children === "v-if") {
				if (n) return;
				n = r;
			}
		} else return;
	}
	return n;
}
var si = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || a(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, ci = (e, t) => {
	let n = {};
	for (let r in e) o(r) && r.slice(9) in t || (n[r] = e[r]);
	return n;
};
function li(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? ui(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (di(o, r, n) && !ii(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? !o || ui(r, o, l) : !!o;
	return !1;
}
function ui(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (!u(e, a) || di(t, e, a) && !ii(n, a)) return !0;
	}
	return !1;
}
function di(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && v(r) && v(i) ? !Se(r, i) : r !== i;
}
function fi({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var pi = {}, mi = () => Object.create(pi), hi = (e) => Object.getPrototypeOf(e) === pi;
function gi(e, t, n, r = !1) {
	let i = {}, a = mi();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), vi(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	e.props = n ? r ? i : /* @__PURE__ */ Bt(i) : e.type.props ? i : a, e.attrs = a;
}
function _i(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ A(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (ii(e.emitsOptions, o)) continue;
				let d = t[o];
				if (c) {
					if (u(a, o)) d !== a[o] && (a[o] = d, l = !0);
					else {
						let t = E(o);
						i[t] = yi(c, s, t, d, e, !1);
					}
				} else d !== a[o] && (a[o] = d, l = !0);
			}
		}
	} else {
		vi(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) t && (u(t, a) || (r = D(a)) !== a && u(t, r)) || (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = yi(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) t && u(t, e) || (delete a[e], l = !0);
	}
	l && it(e.attrs, "set", "");
}
function vi(e, n, r, i) {
	let [a, o] = e.propsOptions, s = !1, c;
	if (n) for (let t in n) {
		if (ee(t)) continue;
		let l = n[t], d;
		a && u(a, d = E(t)) ? !o || !o.includes(d) ? r[d] = l : (c ||= {})[d] = l : ii(e.emitsOptions, t) || t in i && l === i[t] || (i[t] = l, s = !0);
	}
	if (o) {
		let n = /* @__PURE__ */ A(r), i = c || t;
		for (let t = 0; t < o.length; t++) {
			let s = o[t];
			r[s] = yi(a, n, s, i[s], e, !u(i, s));
		}
	}
	return s;
}
function yi(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = u(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && h(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = wa(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === D(n)) && (r = !0));
	}
	return r;
}
var bi = /* @__PURE__ */ new WeakMap();
function xi(e, r, i = !1) {
	let a = i ? bi : r.propsCache, o = a.get(e);
	if (o) return o;
	let c = e.props, l = {}, f = [], p = !1;
	if (!h(e)) {
		let t = (e) => {
			p = !0;
			let [t, n] = xi(e, r, !0);
			s(l, t), n && f.push(...n);
		};
		!i && r.mixins.length && r.mixins.forEach(t), e.extends && t(e.extends), e.mixins && e.mixins.forEach(t);
	}
	if (!c && !p) return v(e) && a.set(e, n), n;
	if (d(c)) for (let e = 0; e < c.length; e++) {
		let n = E(c[e]);
		Si(n) && (l[n] = t);
	}
	else if (c) for (let e in c) {
		let t = E(e);
		if (Si(t)) {
			let n = c[e], r = l[t] = d(n) || h(n) ? { type: n } : s({}, n), i = r.type, a = !1, o = !0;
			if (d(i)) for (let e = 0; e < i.length; ++e) {
				let t = i[e], n = h(t) && t.name;
				if (n === "Boolean") {
					a = !0;
					break;
				}
				n === "String" && (o = !1);
			}
			else a = h(i) && i.name === "Boolean";
			r[0] = a, r[1] = o, (a || u(r, "default")) && f.push(t);
		}
	}
	let m = [l, f];
	return v(e) && a.set(e, m), m;
}
function Si(e) {
	return e[0] !== "$" && !ee(e);
}
var Ci = (e) => e === "_" || e === "_ctx" || e === "$stable", wi = (e) => d(e) ? e.map(da) : [da(e)], Ti = (e, t, n) => {
	if (t._n) return t;
	let r = zn((...e) => wi(t(...e)), n);
	return r._c = !1, r;
}, Ei = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (Ci(n)) continue;
		let i = e[n];
		if (h(i)) t[n] = Ti(n, i, r);
		else if (i != null) {
			let e = wi(i);
			t[n] = () => e;
		}
	}
}, Di = (e, t) => {
	let n = wi(t);
	e.slots.default = () => n;
}, Oi = (e, t, n) => {
	for (let r in t) (n || !Ci(r)) && (e[r] = t[r]);
}, ki = (e, t, n) => {
	let r = e.slots = mi();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (Oi(r, t, n), n && se(r, "_", e, !0)) : Ei(t, r);
	} else t && Di(e, t);
}, Ai = (e, n, r) => {
	let { vnode: i, slots: a } = e, o = !0, s = t;
	if (i.shapeFlag & 32) {
		let e = n._;
		e ? r && e === 1 ? o = !1 : Oi(a, n, r) : (o = !n.$stable, Ei(n, a)), s = n;
	} else n && (Di(e, n), s = { default: 1 });
	if (o) for (let e in a) !Ci(e) && s[e] == null && delete a[e];
}, ji = Wi;
function Mi(e) {
	return Ni(e);
}
function Ni(e, i) {
	let a = ue();
	a.__VUE__ = !0;
	let { insert: o, remove: s, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = r, insertStaticContent: _ } = e, v = (e, t, r, i = null, a = null, o = null, s = void 0, c = null, l = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !na(e, t) && (i = be(e), O(e, a, o, !0), e = null), t.patchFlag === -2 && (l = !1, t.dynamicChildren = null), t.dynamicChildren && e && e.dynamicChildren && e.dynamicChildren.hasOnce && (t.dynamicChildren === n && (t.dynamicChildren = []), t.dynamicChildren.hasOnce = !0);
		let { type: u, ref: d, shapeFlag: f } = t;
		switch (u) {
			case Gi:
				y(e, t, r, i);
				break;
			case Ki:
				b(e, t, r, i);
				break;
			case qi:
				e ?? x(t, r, i, s);
				break;
			case M:
				ie(e, t, r, i, a, o, s, c, l);
				break;
			default: f & 1 ? w(e, t, r, i, a, o, s, c, l) : f & 6 ? ae(e, t, r, i, a, o, s, c, l) : (f & 64 || f & 128) && u.process(e, t, r, i, a, o, s, c, l, Se);
		}
		d != null && a ? cr(d, e && e.ref, o, t || e, !t) : d == null && e && e.ref != null && cr(e.ref, null, o, e, !0);
	}, y = (e, t, n, r) => {
		if (e == null) o(t.el = u(t.children), n, r);
		else {
			let n = t.el = e.el;
			t.children !== e.children && f(n, t.children);
		}
	}, b = (e, t, n, r) => {
		e == null ? o(t.el = d(t.children || ""), n, r) : t.el = e.el;
	}, x = (e, t, n, r) => {
		[e.el, e.anchor] = _(e.children, t, n, r, e.el, e.anchor);
	}, S = ({ el: e, anchor: t }, n, r) => {
		let i;
		for (; e && e !== t;) i = h(e), o(e, n, r), e = i;
		o(t, n, r);
	}, C = ({ el: e, anchor: t }) => {
		let n;
		for (; e && e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, w = (e, t, n, r, i, a, o, s, c) => {
		if (t.type === "svg" ? o = "svg" : t.type === "math" && (o = "mathml"), e == null) T(t, n, r, i, a, o, s, c);
		else {
			let n = e.el && e.el._isVueCE ? e.el : null;
			try {
				n && n._beginPatch(), ne(e, t, i, a, o, s, c);
			} finally {
				n && n._endPatch();
			}
		}
	}, T = (e, t, n, r, i, a, s, u) => {
		let d, f, { props: m, shapeFlag: h, transition: g, dirs: _ } = e;
		if (d = e.el = l(e.type, a, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && E(e.children, d, null, r, i, Pi(e, a), s, u), _ && Vn(e, null, r, "created"), te(d, e, e.scopeId, s, r), m) {
			for (let e in m) e !== "value" && !ee(e) && c(d, e, null, m[e], a, r);
			"value" in m && c(d, "value", null, m.value, a), (f = m.onVnodeBeforeMount) && ha(f, r, e);
		}
		_ && Vn(e, null, r, "beforeMount");
		let v = Ii(i, g);
		v ? g.beforeEnter(d) : g && !g.persisted && (d[Ui] = !0), o(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && ji(() => {
			try {
				f && ha(f, r, e), v && g.enter(d), _ && Vn(e, null, r, "mounted");
			} finally {}
		}, i);
	}, te = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || Hi(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				te(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, E = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) {
			let c = e[l] = s ? fa(e[l]) : da(e[l]);
			v(null, c, t, n, r, i, a, o, s);
		}
	}, ne = (e, n, r, i, a, o, s) => {
		let l = n.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = n;
		u |= e.patchFlag & 16;
		let m = e.props || t, h = n.props || t, g;
		if (r && Fi(r, !1), (g = h.onVnodeBeforeUpdate) && ha(g, r, n, e), f && Vn(n, e, r, "beforeUpdate"), r && Fi(r, !0), d && (!e.dynamicChildren || e.dynamicChildren.length !== d.length) && (u = 0, s = !1, d = null), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? D(e.dynamicChildren, d, l, r, i, Pi(n, a), o) : s || fe(e, n, l, null, r, i, Pi(n, a), o, !1), u > 0) {
			if (u & 16) re(l, m, h, r, a);
			else if (u & 2 && m.class !== h.class && c(l, "class", null, h.class, a), u & 4 && c(l, "style", m.style, h.style, a), u & 8) {
				let e = n.dynamicProps;
				for (let t = 0; t < e.length; t++) {
					let n = e[t], i = m[n], o = h[n];
					(o !== i || n === "value") && c(l, n, i, o, a, r);
				}
			}
			u & 1 && e.children !== n.children && p(l, n.children);
		} else !s && d == null && re(l, m, h, r, a);
		((g = h.onVnodeUpdated) || f) && ji(() => {
			g && ha(g, r, n, e), f && Vn(n, e, r, "updated");
		}, i);
	}, D = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s], u = c.el || Vi(c), d = u && (c.type === M || !na(c, l) || c.shapeFlag & 198) ? m(u) : n;
			v(c, l, d, null, r, i, a, o, !0);
		}
	}, re = (e, n, r, i, a) => {
		if (n !== r) {
			if (n !== t) for (let t in n) !ee(t) && !(t in r) && c(e, t, n[t], null, a, i);
			for (let t in r) {
				if (ee(t)) continue;
				let o = r[t], s = n[t];
				o !== s && t !== "value" && c(e, t, s, o, a, i);
			}
			"value" in r && c(e, "value", n.value, r.value, a);
		}
	}, ie = (e, t, n, r, i, a, s, c, l) => {
		let d = t.el = e ? e.el : u(""), f = t.anchor = e ? e.anchor : u(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
		h && (c = c ? c.concat(h) : h), e == null ? (o(d, n, r), o(f, n, r), E(t.children || [], n, f, i, a, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (D(e.dynamicChildren, m, n, i, a, s, c), (t.key != null || i && t === i.subTree) && Li(e, t, !0)) : fe(e, t, n, f, i, a, s, c, l);
	}, ae = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : se(t, n, r, i, a, o, c) : ce(e, t, c);
	}, se = (e, t, n, r, i, a, o) => {
		let s = e.component = ya(e, r, i);
		if (dr(e) && (s.ctx.renderer = Se), Oa(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, le, o, a), !e.el) {
				let r = s.subTree = aa(Ki);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else le(s, e, t, n, i, a, o);
	}, ce = (e, t, n) => {
		let r = t.component = e.component;
		if (li(e, t, n)) {
			if (r.asyncDep && !r.asyncResolved) {
				t.el = e.el, t.placeholder = e.placeholder, de(r, t, n);
				return;
			}
			r.next = t, r.update();
		} else t.el = e.el, t.placeholder = e.placeholder, r.vnode = t;
	}, le = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = zi(e);
					if (n) {
						t && (t.el = c.el, de(e, t, o)), n.asyncDep.then(() => {
							let t = () => {
								e.job.flags & 8 || (i && i.pendingBranch ? ji(t, i) : l());
							};
							t.flags = 48, ji(t, i);
						});
						return;
					}
				}
				let u = t, d;
				Fi(e, !1), t ? (t.el = c.el, de(e, t, o)) : t = c, n && oe(n), (d = t.props && t.props.onVnodeBeforeUpdate) && ha(d, s, t, c), Fi(e, !0);
				let f = ai(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el || Vi(p)), be(p), e, i, a), t.el = f.el, u === null && fi(e, f.el), r && ji(r, i), (d = t.props && t.props.onVnodeUpdated) && ji(() => ha(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = ur(t);
				if (Fi(e, !1), l && oe(l), !m && (o = c && c.onVnodeBeforeMount) && ha(o, d, t), Fi(e, !0), s && we) {
					let t = () => {
						e.subTree = ai(e), we(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = ai(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && ji(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					ji(() => ha(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && ur(d.vnode) && d.vnode.shapeFlag & 256) && e.a && ji(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new je(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => Dn(u), Fi(e, !0), l();
	}, de = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, _i(e, t.props, r, n), Ai(e, t.children, n), Ke(), An(e), qe();
	}, fe = (e, t, n, r, i, a, o, s, c = !1) => {
		let l = e && e.children, u = e ? e.shapeFlag : 0, d = t.children, { patchFlag: f, shapeFlag: m } = t;
		if (f > 0) {
			if (f & 128) {
				me(l, d, n, r, i, a, o, s, c);
				return;
			}
			if (f & 256) {
				pe(l, d, n, r, i, a, o, s, c);
				return;
			}
		}
		m & 8 ? (u & 16 && ye(l, i, a), d !== l && p(n, d)) : u & 16 ? m & 16 ? me(l, d, n, r, i, a, o, s, c) : ye(l, i, a, !0) : (u & 8 && p(n, ""), m & 16 && E(d, n, r, i, a, o, s, c));
	}, pe = (e, t, r, i, a, o, s, c, l) => {
		e ||= n, t ||= n;
		let u = e.length, d = t.length, f = Math.min(u, d), p = 0;
		for (; p < f; p++) {
			let n = t[p] = l ? fa(t[p]) : da(t[p]);
			v(e[p], n, r, null, a, o, s, c, l);
		}
		u > d ? ye(e, a, o, !0, !1, f) : E(t, r, i, a, o, s, c, l, f);
	}, me = (e, t, r, i, a, o, s, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let n = e[u], i = t[u] = l ? fa(t[u]) : da(t[u]);
			if (na(n, i)) v(n, i, r, null, a, o, s, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let n = e[f], i = t[p] = l ? fa(t[p]) : da(t[p]);
			if (na(n, i)) v(n, i, r, null, a, o, s, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, n = e < d ? t[e].el : i;
				for (; u <= p;) v(null, t[u] = l ? fa(t[u]) : da(t[u]), r, n, a, o, s, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) O(e[u], a, o, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? fa(t[u]) : da(t[u]);
				e.key != null && g.set(e.key, u);
			}
			let _, y = 0, b = p - h + 1, x = !1, S = 0, C = Array(b);
			for (u = 0; u < b; u++) C[u] = 0;
			for (u = m; u <= f; u++) {
				let n = e[u];
				if (y >= b) {
					O(n, a, o, !0);
					continue;
				}
				let i;
				if (n.key != null) i = g.get(n.key);
				else for (_ = h; _ <= p; _++) if (C[_ - h] === 0 && na(n, t[_])) {
					i = _;
					break;
				}
				i === void 0 ? O(n, a, o, !0) : (C[i - h] = u + 1, i >= S ? S = i : x = !0, v(n, t[i], r, null, a, o, s, c, l), y++);
			}
			let w = x ? Ri(C) : n;
			for (_ = w.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, n = t[e], f = t[e + 1], p = e + 1 < d ? f.el || Vi(f) : i;
				C[u] === 0 ? v(null, n, r, p, a, o, s, c, l) : x && (_ < 0 || u !== w[_] ? he(n, r, p, 2) : _--);
			}
		}
	}, he = (e, t, n, r, i = null) => {
		let { el: a, type: c, transition: l, children: u, shapeFlag: d } = e;
		if (d & 6) he(e.component.subTree, t, n, r);
		else if (d & 128) e.suspense.move(t, n, r);
		else if (d & 64) c.move(e, t, n, Se);
		else if (c === M) {
			o(a, t, n);
			for (let e = 0; e < u.length; e++) he(u[e], t, n, r);
			o(e.anchor, t, n);
		} else if (c === qi) S(e, t, n);
		else if (r !== 2 && d & 1 && l) {
			if (r === 0) l.persisted && !a[$n] ? o(a, t, n) : (l.beforeEnter(a), o(a, t, n), ji(() => l.enter(a), i));
			else {
				let { leave: r, delayLeave: i, afterLeave: c } = l, u = () => {
					e.ctx.isUnmounted ? s(a) : o(a, t, n);
				}, d = () => {
					let e = a._isLeaving || !!a[$n];
					a._isLeaving && a[$n](!0), l.persisted && !e ? u() : r(a, () => {
						u(), c && c();
					});
				};
				i ? i(a, u, d) : d();
			}
		} else o(a, t, n);
	}, O = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if ((d === -2 || l && l.hasOnce) && (i = !1), s != null && (Ke(), cr(s, null, n, e, !0), qe()), p == null || e.ctx && e.ctx !== t || (t.renderCache[p] = void 0), u & 256 && t.ctx.deactivate(e)) return;
		let h = u & 1 && f, g = !ur(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && ha(_, t, e), u & 6) ve(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && Vn(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, Se, r) : l && !l.hasOnce && (a !== M || d > 0 && d & 64) ? ye(l, t, n, !1, !0) : (a === M && d & 384 || !i && u & 16) && ye(c, t, n), r && ge(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && ji(() => {
			_ && ha(_, t, e), h && Vn(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, ge = (e) => {
		let { type: t, el: n, anchor: r, transition: i } = e, a = t === M;
		if (a && !i) {
			_e(n, r);
			return;
		}
		if (t === qi) {
			C(e), i && !i.persisted && i.afterLeave && i.afterLeave();
			return;
		}
		let o = a ? rr(e) : e, c = () => {
			a ? m(n) && _e(n, r) : s(n), i && !i.persisted && i.afterLeave && i.afterLeave();
		};
		if (o && o.shapeFlag & 1 && i && !i.persisted) {
			let { leave: e, delayLeave: t } = i, n = o.el, r = () => e(n, c);
			t ? t(n, c, r) : r();
		} else c();
	}, _e = (e, t) => {
		let n;
		for (; e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, ve = (e, t, n) => {
		let { bum: r, scope: i, job: a, subTree: o, um: s, m: c, a: l } = e;
		Bi(c), Bi(l), r && oe(r), i.stop(), a ? (a.flags |= 8, O(o, e, t, n)) : o && (o.transition = e.vnode.transition, O(o, e, t, n)), s && ji(s, t);
		let u = () => {
			e.isUnmounted = !0;
		};
		u.flags = 16, ji(u, t);
	}, ye = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) O(e[o], t, n, r, i);
	}, be = (e) => {
		if (e.shapeFlag & 6) return be(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[Zn];
		return n ? h(n) : t;
	}, xe = (e, t, n) => {
		Nn(() => {
			e == null ? t._vnode && O(t._vnode, null, null, !0) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e;
		}, e && t._vnode ? void 0 : e && e.component ? e.component.uid : va());
	}, Se = {
		p: v,
		um: O,
		m: he,
		r: ge,
		mt: se,
		mc: E,
		pc: fe,
		pbc: D,
		n: be,
		o: e
	}, Ce, we;
	return i && ([Ce, we] = i(Se)), {
		render: xe,
		hydrate: Ce,
		createApp: Qr(xe, Ce)
	};
}
function Pi({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Fi({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ii(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Li(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (d(r) && d(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = fa(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && Li(t, a)), a.type === Gi && (a.patchFlag === -1 && (a = i[e] = fa(a)), a.el = t.el), a.type === Ki && !a.el && (a.el = t.el);
	}
}
function Ri(e) {
	let t = e.slice(), n = [0], r, i, a, o, s, c = e.length;
	for (r = 0; r < c; r++) {
		let c = e[r];
		if (c !== 0) {
			if (i = n[n.length - 1], e[i] < c) {
				t[r] = i, n.push(r);
				continue;
			}
			for (a = 0, o = n.length - 1; a < o;) s = a + o >> 1, e[n[s]] < c ? a = s + 1 : o = s;
			c < e[n[a]] && (a > 0 && (t[r] = n[a - 1]), n[a] = r);
		}
	}
	for (a = n.length, o = n[a - 1]; a-- > 0;) n[a] = o, o = t[o];
	return n;
}
function zi(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : zi(t);
}
function Bi(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function Vi(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	if (t) return Vi(t.subTree);
	let n = e.suspense;
	return n && n.activeBranch ? Vi(n.activeBranch) : null;
}
var Hi = (e) => e.__isSuspense, Ui = /* @__PURE__ */ Symbol("_deferredEnter");
function Wi(e, t) {
	t && t.pendingBranch ? d(e) ? t.effects.push(...e) : t.effects.push(e) : kn(e);
}
var M = /* @__PURE__ */ Symbol.for("v-fgt"), Gi = /* @__PURE__ */ Symbol.for("v-txt"), Ki = /* @__PURE__ */ Symbol.for("v-cmt"), qi = /* @__PURE__ */ Symbol.for("v-stc"), Ji = [], Yi = null;
function N(e = !1) {
	Ji.push(Yi = e ? null : []);
}
function Xi() {
	Ji.pop(), Yi = Ji[Ji.length - 1] || null;
}
var Zi = 1;
function Qi(e, t = !1) {
	Zi += e, e < 0 && Yi && t && (Yi.hasOnce = !0);
}
function $i(e) {
	return e.dynamicChildren = Zi > 0 ? Yi || n : null, Xi(), Zi > 0 && Yi && Yi.push(e), e;
}
function P(e, t, n, r, i, a) {
	return $i(F(e, t, n, r, i, a, !0));
}
function ea(e, t, n, r, i) {
	return $i(aa(e, t, n, r, i, !0));
}
function ta(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function na(e, t) {
	return e.type === t.type && e.key === t.key;
}
var ra = ({ key: e }) => e ?? null, ia = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : g(e) || /* @__PURE__ */ Xt(e) || h(e) ? {
	i: In,
	r: e,
	k: t,
	f: !!n
} : e);
function F(e, t = null, n = null, r = 0, i = null, a = e === M ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && ra(t),
		ref: t && ia(t),
		scopeId: Ln,
		slotScopeIds: null,
		children: n,
		component: null,
		suspense: null,
		ssContent: null,
		ssFallback: null,
		dirs: null,
		transition: null,
		el: null,
		anchor: null,
		target: null,
		targetStart: null,
		targetAnchor: null,
		staticCount: 0,
		shapeFlag: a,
		patchFlag: r,
		dynamicProps: i,
		dynamicChildren: null,
		appContext: null,
		ctx: In
	};
	return s ? (pa(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= g(n) ? 8 : 16), Zi > 0 && !o && Yi && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && Yi.push(c), c;
}
var aa = oa;
function oa(e, t = null, n = null, r = 0, i = null, a = !1) {
	if (e && e !== Or || (e = Ki), ta(e)) {
		let r = ca(e, t, !0);
		return n && pa(r, n), Zi > 0 && !a && Yi && (r.shapeFlag & 6 ? Yi[Yi.indexOf(e)] = r : Yi.push(r)), r.patchFlag = -2, r;
	}
	if (Ia(e) && (e = e.__vccOpts), t) {
		t = sa(t);
		let { class: e, style: n } = t;
		e && !g(e) && (t.class = O(e)), v(n) && (/* @__PURE__ */ Kt(n) && !d(n) && (n = s({}, n)), t.style = de(n));
	}
	let o = g(e) ? 1 : Hi(e) ? 128 : Qn(e) ? 64 : v(e) ? 4 : h(e) ? 2 : 0;
	return F(e, t, n, r, i, o, a, !0);
}
function sa(e) {
	return e ? /* @__PURE__ */ Kt(e) ? s({}, e) : hi(e) ? s({}, e[Ma] || e) : e : null;
}
function ca(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? ma(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && ra(l),
		ref: t && t.ref ? n && a ? d(a) ? a.concat(ia(t)) : [a, ia(t)] : ia(t) : a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== M ? o === -1 ? 16 : o | 16 : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: c,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && ca(e.ssContent),
		ssFallback: e.ssFallback && ca(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce,
		cacheIndex: e.cacheIndex
	};
	return c && r && nr(u, c.clone(u)), u;
}
function la(e = " ", t = 0) {
	return aa(Gi, null, e, t);
}
function ua(e = "", t = !1) {
	return t ? (N(), ea(Ki, null, e)) : aa(Ki, null, e);
}
function da(e) {
	return e == null || typeof e == "boolean" ? aa(Ki) : d(e) ? aa(M, null, e.slice()) : ta(e) ? fa(e) : aa(Gi, null, String(e));
}
function fa(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : ca(e);
}
function pa(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (d(t)) n = 16;
	else if (typeof t == "object") {
		if (r & 65) {
			let n = t.default;
			n && (n._c && (n._d = !1), pa(e, n()), n._c && (n._d = !0));
			return;
		}
		{
			n = 32;
			let r = t._;
			!r && !hi(t) ? t._ctx = In : r === 3 && In && (In.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
		}
	} else if (h(t)) {
		if (r & 65) {
			pa(e, { default: t });
			return;
		}
		t = {
			default: t,
			_ctx: In
		}, n = 32;
	} else t = String(t), r & 64 ? (n = 16, t = [la(t)]) : n = 8;
	e.children = t, e.shapeFlag |= n;
}
function ma(...e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (let e in r) if (e === "class") t.class !== r.class && (t.class = O([t.class, r.class]));
		else if (e === "style") t.style = de([t.style, r.style]);
		else if (a(e)) {
			let n = t[e], i = r[e];
			i && n !== i && !(d(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !o(e) && (t[e] = i);
		} else e !== "" && (t[e] = r[e]);
	}
	return t;
}
function ha(e, t, n, r = null) {
	hn(e, t, 7, [n, r]);
}
var ga = /* @__PURE__ */ Xr(), _a = 0;
function va() {
	return _a;
}
function ya(e, n, r) {
	let i = e.type, a = (n ? n.appContext : e.appContext) || ga, o = {
		uid: _a++,
		vnode: e,
		type: i,
		parent: n,
		appContext: a,
		root: null,
		next: null,
		subTree: null,
		effect: null,
		update: null,
		job: null,
		scope: new Oe(!0),
		render: null,
		proxy: null,
		exposed: null,
		exposeProxy: null,
		withProxy: null,
		provides: n ? n.provides : Object.create(a.provides),
		ids: n ? n.ids : [
			"",
			0,
			0
		],
		accessCache: null,
		renderCache: [],
		components: null,
		directives: null,
		propsOptions: xi(i, a),
		emitsOptions: ri(i, a),
		emit: null,
		emitted: null,
		propsDefaults: t,
		inheritAttrs: i.inheritAttrs,
		ctx: t,
		data: t,
		props: t,
		attrs: t,
		slots: t,
		refs: t,
		setupState: t,
		setupContext: null,
		suspense: r,
		suspenseId: r ? r.pendingId : 0,
		asyncDep: null,
		asyncResolved: !1,
		isMounted: !1,
		isUnmounted: !1,
		isDeactivated: !1,
		bc: null,
		c: null,
		bm: null,
		m: null,
		bu: null,
		u: null,
		um: null,
		bum: null,
		da: null,
		a: null,
		rtg: null,
		rtc: null,
		ec: null,
		sp: null
	};
	return o.ctx = { _: o }, o.root = n ? n.root : o, o.emit = ti.bind(null, o), e.ce && e.ce(o), o;
}
var ba = null, xa = () => ba || In, Sa, Ca;
{
	let e = ue(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	Sa = t("__VUE_INSTANCE_SETTERS__", (e) => ba = e), Ca = t("__VUE_SSR_SETTERS__", (e) => Da = e);
}
var wa = (e) => {
	let t = ba;
	return Sa(e), e.scope.on(), () => {
		e.scope.off(), Sa(t);
	};
}, Ta = () => {
	ba && ba.scope.off(), Sa(null);
};
function Ea(e) {
	return e.vnode.shapeFlag & 4;
}
var Da = !1;
function Oa(e, t = !1, n = !1) {
	t && Ca(t);
	let { props: r, children: i } = e.vnode, a = Ea(e);
	gi(e, r, a, t), ki(e, i, n || t);
	let o = a ? ka(e, t) : void 0;
	return t && Ca(!1), o;
}
function ka(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Nr);
	let { setup: r } = n;
	if (r) {
		Ke();
		let n = e.setupContext = r.length > 1 ? Pa(e) : null, i = wa(e), a = mn(r, e, 0, [e.props, n]), o = y(a);
		if (qe(), i(), (o || e.sp) && !ur(e) && ar(e), o) {
			if (a.then(Ta, Ta), t) return a.then((n) => {
				Ca(!0);
				try {
					Aa(e, n, t);
				} finally {
					Ca(!1);
				}
			}).catch((t) => {
				gn(t, e, 0, void 0, !0), e.ssrRender = (e, t) => t("<!---->");
			});
			e.asyncDep = a;
		} else Aa(e, a, t);
	} else ja(e, t);
}
function Aa(e, t, n) {
	h(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : v(t) && (e.setupState = nn(t)), ja(e, n);
}
function ja(e, t, n) {
	let i = e.type;
	e.render ||= i.render || r;
	{
		let t = wa(e);
		Ke();
		try {
			Ir(e);
		} finally {
			qe(), t();
		}
	}
}
var Ma = /* @__PURE__ */ Symbol(), Na = { get(e, t) {
	return rt(e, "get", ""), t === Ma ? e : e[t];
} };
function Pa(e) {
	return {
		attrs: new Proxy(e.attrs, Na),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function Fa(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(nn(qt(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in jr) return jr[n](e);
		},
		has(e, t) {
			return t in e || t in jr;
		}
	}) : e.proxy;
}
function Ia(e) {
	return h(e) && "__vccOpts" in e;
}
var La = (e, t) => /* @__PURE__ */ sn(e, t, Da);
function Ra(e, t, n) {
	try {
		Qi(-1);
		let r = arguments.length;
		return r === 2 ? v(t) && !d(t) ? ta(t) ? aa(e, null, [t]) : aa(e, t) : aa(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && ta(n) && (n = [n]), aa(e, t, n));
	} finally {
		Qi(1);
	}
}
var za = "3.5.45", Ba = void 0, Va = typeof window < "u" && window.trustedTypes;
if (Va) try {
	Ba = /* @__PURE__ */ Va.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var Ha = Ba ? (e) => Ba.createHTML(e) : (e) => e, Ua = "http://www.w3.org/2000/svg", Wa = "http://www.w3.org/1998/Math/MathML", Ga = typeof document < "u" ? document : null, Ka = Ga && /* @__PURE__ */ Ga.createElement("template"), qa = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? Ga.createElementNS(Ua, e) : t === "mathml" ? Ga.createElementNS(Wa, e) : n ? Ga.createElement(e, { is: n }) : Ga.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => Ga.createTextNode(e),
	createComment: (e) => Ga.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => Ga.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), i !== a && (i = i.nextSibling););
		else {
			Ka.innerHTML = Ha(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = Ka.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, Ja = /* @__PURE__ */ Symbol("_vtc");
function Ya(e, t, n) {
	let r = e[Ja];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var Xa = /* @__PURE__ */ Symbol("_vod"), Za = /* @__PURE__ */ Symbol("_vsh"), Qa = {
	name: "show",
	beforeMount(e, { value: t }, { transition: n }) {
		e[Xa] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : $a(e, t);
	},
	mounted(e, { value: t }, { transition: n }) {
		n && t && n.enter(e);
	},
	updated(e, { value: t, oldValue: n }, { transition: r }) {
		!t != !n && (r ? t ? (r.beforeEnter(e), $a(e, !0), r.enter(e)) : r.leave(e, () => {
			$a(e, !1);
		}) : $a(e, t));
	},
	beforeUnmount(e, { value: t }) {
		$a(e, t);
	}
};
function $a(e, t) {
	e.style.display = t ? e[Xa] : "none", e[Za] = !t;
}
var eo = /* @__PURE__ */ Symbol(""), to = /(?:^|;)\s*display\s*:/;
function no(e, t, n) {
	let r = e.style, i = g(n), a = !1;
	if (n && !i) {
		if (t) {
			if (g(t)) for (let e of t.split(";")) {
				let t = e.slice(0, e.indexOf(":")).trim();
				n[t] ?? io(r, t, "");
			}
			else for (let e in t) n[e] ?? io(r, e, "");
		}
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? io(r, i, "") : co(e, i, !g(t) && t ? t[i] : void 0, o) || io(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[eo];
			e && (n += ";" + e), r.cssText = n, a = to.test(n);
		}
	} else t && e.removeAttribute("style");
	Xa in e && (i && t === n || (e[Xa] = a ? r.display : ""), e[Za] && (r.display = "none"));
}
var ro = /\s*!important$/;
function io(e, t, n) {
	if (d(n)) n.forEach((n) => io(e, t, n));
	else if (n ??= "", t.startsWith("--")) ro.test(n) ? e.setProperty(t, n.replace(ro, ""), "important") : e.setProperty(t, n);
	else {
		let r = so(e, t);
		ro.test(n) ? e.setProperty(D(r), n.replace(ro, ""), "important") : e[r] = n;
	}
}
var ao = [
	"Webkit",
	"Moz",
	"ms"
], oo = {};
function so(e, t) {
	let n = oo[t];
	if (n) return n;
	let r = E(t);
	if (r !== "filter" && r in e) return oo[t] = r;
	r = re(r);
	for (let n = 0; n < ao.length; n++) {
		let i = ao[n] + r;
		if (i in e) return oo[t] = i;
	}
	return t;
}
function co(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && g(r) && n === r;
}
var lo = "http://www.w3.org/1999/xlink";
function uo(e, t, n, r, i, a = ge(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(lo, t.slice(6, t.length)) : e.setAttributeNS(lo, t, n) : n == null || a && !_e(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : _(n) ? String(n) : n);
}
function fo(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? Ha(n) : n);
		return;
	}
	let a = e.tagName;
	if (t === "value" && a !== "PROGRESS" && !a.includes("-")) {
		let r = a === "OPTION" ? e.getAttribute("value") || "" : e.value, i = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
		r === i && "_value" in e || (e.value = i), n ?? e.removeAttribute(t), e._value = n;
		return;
	}
	let o = !1;
	if (n === "" || n == null) {
		let r = typeof e[t];
		r === "boolean" ? n = _e(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
	}
	try {
		e[t] = n;
	} catch {}
	o && e.removeAttribute(i || t);
}
function po(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function mo(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var ho = /* @__PURE__ */ Symbol("_vei");
function go(e, t, n, r, i = null) {
	let a = e[ho] || (e[ho] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = yo(t);
		r ? po(e, n, a[t] = Co(r, i), s) : o && (mo(e, n, o, s), a[t] = void 0);
	}
}
var _o = /(Once|Passive|Capture)$/, vo = /^on:?(?:Once|Passive|Capture)$/;
function yo(e) {
	let t, n;
	for (; (n = e.match(_o)) && !vo.test(e);) t ||= {}, e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
	return [e[2] === ":" ? e.slice(3) : D(e.slice(2)), t];
}
var bo = 0, xo = /* @__PURE__ */ Promise.resolve(), So = () => bo ||= (xo.then(() => bo = 0), Date.now());
function Co(e, t) {
	let n = (e) => {
		if (!e._vts) e._vts = Date.now();
		else if (e._vts <= n.attached) return;
		let r = n.value;
		if (d(r)) {
			let n = e.stopImmediatePropagation;
			e.stopImmediatePropagation = () => {
				n.call(e), e._stopped = !0;
			};
			let i = r.slice(), a = [e];
			for (let n = 0; n < i.length && !e._stopped; n++) {
				let e = i[n];
				e && hn(e, t, 5, a);
			}
		} else hn(r, t, 5, [e]);
	};
	return n.value = e, n.attached = So(), n;
}
var wo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, To = (e, t, n, r, i, s) => {
	let c = i === "svg";
	t === "class" ? Ya(e, r, c) : t === "style" ? no(e, n, r) : a(t) ? o(t) || go(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), 1) : t[0] === "^" ? (t = t.slice(1), 0) : Eo(e, t, r, c)) ? (fo(e, t, r), e.tagName.includes("-") || t !== "value" && t !== "checked" && t !== "selected" || uo(e, t, r, c, s, t !== "value")) : e._isVueCE && (Do(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !g(r))) ? fo(e, E(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), uo(e, t, r, c));
};
function Eo(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && wo(t) && h(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return wo(t) && g(n) ? !1 : t in e;
}
function Do(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = E(t);
	return Array.isArray(n) ? n.some((e) => E(e) === r) : Object.keys(n).some((e) => E(e) === r);
}
var Oo = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return d(t) ? (e) => oe(t, e) : t;
};
function ko(e) {
	e.target.composing = !0;
}
function Ao(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var jo = /* @__PURE__ */ Symbol("_assign"), Mo = /* @__PURE__ */ Symbol("_initialValue");
function No(e, t, n) {
	return t && (e = e.trim()), n && (e = ce(e)), e;
}
var Po = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e.parentNode && (e.type === "text" ? e[Mo] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Mo] = e.defaultValue.replace(/\r\n?/g, "\n"))), e[jo] = Oo(i);
		let a = r || i.props && i.props.type === "number";
		po(e, t ? "change" : "input", (t) => {
			t.target.composing || e[jo](No(e.value, n, a));
		}), (n || a) && po(e, "change", () => {
			e.value = No(e.value, n, a);
		}), t || (po(e, "compositionstart", ko), po(e, "compositionend", Ao), po(e, "change", Ao));
	},
	mounted(e, { value: t, modifiers: { trim: n, number: r } }) {
		let i = t ?? "", a = e[Mo];
		delete e[Mo], a !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== a ? e[jo](No(e.value, n, r)) : e.value = i;
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[jo] = Oo(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? ce(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, Fo = [
	"ctrl",
	"shift",
	"alt",
	"meta"
], Io = {
	stop: (e) => e.stopPropagation(),
	prevent: (e) => e.preventDefault(),
	self: (e) => e.target !== e.currentTarget,
	ctrl: (e) => !e.ctrlKey,
	shift: (e) => !e.shiftKey,
	alt: (e) => !e.altKey,
	meta: (e) => !e.metaKey,
	left: (e) => "button" in e && e.button !== 0,
	middle: (e) => "button" in e && e.button !== 1,
	right: (e) => "button" in e && e.button !== 2,
	exact: (e, t) => Fo.some((n) => e[`${n}Key`] && !t.includes(n))
}, Lo = (e, t) => {
	if (!e) return e;
	let n = e._withMods ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n, ...r) => {
		for (let e = 0; e < t.length; e++) {
			let r = Io[t[e]];
			if (r && r(n, t)) return;
		}
		return e(n, ...r);
	}));
}, Ro = {
	esc: "escape",
	space: " ",
	up: "arrow-up",
	left: "arrow-left",
	right: "arrow-right",
	down: "arrow-down",
	delete: "backspace"
}, zo = (e, t) => {
	let n = e._withKeys ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n) => {
		if (!("key" in n)) return;
		let r = D(n.key);
		if (t.some((e) => e === r || Ro[e] === r)) return e(n);
	}));
}, Bo = /* @__PURE__ */ s({ patchProp: To }, qa), Vo;
function Ho() {
	return Vo ||= Mi(Bo);
}
var Uo = ((...e) => {
	let t = Ho().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = Go(e);
		if (!r) return;
		let i = t._component;
		h(i) || i.render || i.template || (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, Wo(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function Wo(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function Go(e) {
	return g(e) ? document.querySelector(e) : e;
}
// src/api.js
var Ko = class extends Error {
	constructor(e, t) {
		super(e), this.status = t;
	}
};
function qo() {
	let e = document.getElementById("initial-state-austit_notebook-config");
	try {
		return JSON.parse(new TextDecoder().decode(Uint8Array.from(atob(e.value), (e) => e.charCodeAt(0))));
	} catch {
		return { apiBase: "/index.php/apps/austit_notebook/api" };
	}
}
var Jo = qo();
async function Yo(e, t, n) {
	let r = {
		Accept: "application/json",
		requesttoken: document.head.dataset.requesttoken ?? ""
	}, i;
	n instanceof FormData ? i = n : n !== void 0 && (r["Content-Type"] = "application/json", i = JSON.stringify(n));
	let a = await fetch(Jo.apiBase + t, {
		method: e,
		headers: r,
		body: i
	}), o = await a.json().catch(() => ({}));
	if (!a.ok) throw new Ko(o.message || `Fehler ${a.status}`, a.status);
	return o;
}
var Xo = {
	tree: () => Yo("GET", "/tree"),
	createNotebook: (e) => Yo("POST", "/notebooks", { name: e }),
	createSection: (e, t) => Yo("POST", `/notebooks/${e}/sections`, { name: t }),
	createPage: (e, t) => Yo("POST", `/sections/${e}/pages`, { name: t }),
	rename: (e, t) => Yo("PATCH", `/nodes/${e}`, { name: t }),
	remove: (e) => Yo("DELETE", `/nodes/${e}`),
	getPage: (e) => Yo("GET", `/pages/${e}`),
	savePage: (e, t, n) => Yo("PUT", `/pages/${e}`, {
		content: t,
		etag: n
	}),
	uploadImage(e, t) {
		let n = new FormData();
		return n.append("image", t), Yo("POST", `/pages/${e}/images`, n);
	},
	imageUrl: (e) => `${Jo.apiBase}/images/${e}`
}, Zo = ["aria-label"], Qo = ["aria-current"], $o = ["aria-label"], es = ["aria-label"], ts = {
	__name: "NavItem",
	props: {
		node: {
			type: Object,
			required: !0
		},
		kind: {
			type: String,
			required: !0
		},
		active: {
			type: Boolean,
			default: !1
		}
	},
	emits: [
		"select",
		"rename",
		"remove"
	],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ j(!1), a = /* @__PURE__ */ j(!1), o = /* @__PURE__ */ j(""), s = /* @__PURE__ */ j(null);
		async function c() {
			o.value = n.node.name, i.value = !0, await Tn(), s.value?.select();
		}
		function l() {
			if (!i.value) return;
			i.value = !1;
			let e = o.value.trim();
			e !== "" && e !== n.node.name && r("rename", e);
		}
		return (t, n) => (N(), P("div", { class: O(["nb-nav-item", ["nb-nav-item--" + e.kind, { "nb-nav-item--active": e.active }]]) }, [i.value ? (N(), P("form", {
			key: 0,
			class: "nb-nav-item__form",
			onSubmit: Lo(l, ["prevent"])
		}, [Bn(F("input", {
			ref_key: "input",
			ref: s,
			"onUpdate:modelValue": n[0] ||= (e) => o.value = e,
			class: "nb-nav-item__input",
			"aria-label": "Name für " + e.node.name,
			maxlength: "120",
			onBlur: l,
			onKeydown: n[1] ||= zo(Lo((e) => i.value = !1, ["prevent"]), ["esc"])
		}, null, 40, Zo), [[Po, o.value]])], 32)) : a.value ? (N(), P(M, { key: 1 }, [
			n[6] ||= F("span", { class: "nb-nav-item__confirm" }, "Löschen?", -1),
			F("button", {
				type: "button",
				class: "nb-nav-item__action nb-nav-item__action--danger",
				onClick: n[2] ||= (e) => {
					t.$emit("remove"), a.value = !1;
				}
			}, "Ja"),
			F("button", {
				type: "button",
				class: "nb-nav-item__action",
				onClick: n[3] ||= (e) => a.value = !1
			}, "Nein")
		], 64)) : (N(), P(M, { key: 2 }, [
			F("button", {
				type: "button",
				class: "nb-nav-item__label",
				"aria-current": e.active ? "true" : void 0,
				onClick: n[4] ||= (e) => t.$emit("select"),
				onDblclick: c
			}, we(e.node.name), 41, Qo),
			F("button", {
				type: "button",
				class: "nb-nav-item__action",
				title: "Umbenennen",
				"aria-label": e.node.name + " umbenennen",
				onClick: c
			}, "✎", 8, $o),
			F("button", {
				type: "button",
				class: "nb-nav-item__action",
				title: "Löschen",
				"aria-label": e.node.name + " löschen",
				onClick: n[5] ||= (e) => a.value = !0
			}, "🗑", 8, es)
		], 64))], 2));
	}
}, ns = {
	class: "nb-nav",
	"aria-label": "Notizbücher"
}, rs = { class: "nb-nav__column" }, is = { class: "nb-nav__header" }, as = { class: "nb-nav__list" }, ss = {
	key: 0,
	class: "nb-nav__list nb-nav__list--nested"
}, cs = ["onClick"], ls = {
	key: 0,
	class: "nb-nav__empty"
}, us = {
	key: 0,
	class: "nb-nav__column nb-nav__column--pages"
}, ds = { class: "nb-nav__header" }, fs = { class: "nb-nav__list" }, ps = {
	key: 0,
	class: "nb-nav__empty"
}, ms = {
	__name: "NotebookNav",
	props: {
		notebooks: {
			type: Array,
			required: !0
		},
		notebookId: {
			type: Number,
			default: null
		},
		sectionId: {
			type: Number,
			default: null
		},
		pageId: {
			type: Number,
			default: null
		}
	},
	emits: [
		"select",
		"create",
		"rename",
		"remove"
	],
	setup(e) {
		let t = e, n = La(() => t.notebooks.find((e) => e.id === t.notebookId)?.sections.find((e) => e.id === t.sectionId) ?? null);
		return (t, r) => (N(), P("nav", ns, [F("section", rs, [
			F("header", is, [r[2] ||= F("h2", null, "Notizbücher", -1), F("button", {
				type: "button",
				class: "nb-icon-button",
				title: "Neues Notizbuch",
				"aria-label": "Neues Notizbuch",
				onClick: r[0] ||= (e) => t.$emit("create", { type: "notebook" })
			}, "+")]),
			F("ul", as, [(N(!0), P(M, null, kr(e.notebooks, (n) => (N(), P("li", { key: n.id }, [aa(ts, {
				node: n,
				active: n.id === e.notebookId,
				kind: "notebook",
				onSelect: (e) => t.$emit("select", { notebookId: n.id }),
				onRename: (e) => t.$emit("rename", {
					id: n.id,
					name: e
				}),
				onRemove: (e) => t.$emit("remove", {
					id: n.id,
					label: "Notizbuch „" + n.name + "“"
				})
			}, null, 8, [
				"node",
				"active",
				"onSelect",
				"onRename",
				"onRemove"
			]), n.id === e.notebookId ? (N(), P("ul", ss, [(N(!0), P(M, null, kr(n.sections, (r) => (N(), P("li", { key: r.id }, [aa(ts, {
				node: r,
				active: r.id === e.sectionId,
				kind: "section",
				onSelect: (e) => t.$emit("select", {
					notebookId: n.id,
					sectionId: r.id
				}),
				onRename: (e) => t.$emit("rename", {
					id: r.id,
					name: e
				}),
				onRemove: (e) => t.$emit("remove", {
					id: r.id,
					label: "Abschnitt „" + r.name + "“"
				})
			}, null, 8, [
				"node",
				"active",
				"onSelect",
				"onRename",
				"onRemove"
			])]))), 128)), F("li", null, [F("button", {
				type: "button",
				class: "nb-nav__add",
				onClick: (e) => t.$emit("create", {
					type: "section",
					parentId: n.id
				})
			}, " + Abschnitt ", 8, cs)])])) : ua("", !0)]))), 128))]),
			e.notebooks.length === 0 ? (N(), P("p", ls, "Noch keine Notizbücher.")) : ua("", !0)
		]), n.value ? (N(), P("section", us, [
			F("header", ds, [F("h2", null, we(n.value.name), 1), F("button", {
				type: "button",
				class: "nb-icon-button",
				title: "Neue Seite",
				"aria-label": "Neue Seite",
				onClick: r[1] ||= (e) => t.$emit("create", {
					type: "page",
					parentId: n.value.id
				})
			}, "+")]),
			F("ul", fs, [(N(!0), P(M, null, kr(n.value.pages, (r) => (N(), P("li", { key: r.id }, [aa(ts, {
				node: r,
				active: r.id === e.pageId,
				kind: "page",
				onSelect: (i) => t.$emit("select", {
					notebookId: e.notebookId,
					sectionId: n.value.id,
					pageId: r.id
				}),
				onRename: (e) => t.$emit("rename", {
					id: r.id,
					name: e
				}),
				onRemove: (e) => t.$emit("remove", {
					id: r.id,
					label: "Seite „" + r.name + "“"
				})
			}, null, 8, [
				"node",
				"active",
				"onSelect",
				"onRename",
				"onRemove"
			])]))), 128))]),
			n.value.pages.length === 0 ? (N(), P("p", ps, "Noch keine Seiten.")) : ua("", !0)
		])) : ua("", !0)]));
	}
}, { PI: hs } = Math, gs = hs + 1e-4, _s = .5, vs = [1, 1];
function ys(e, t, n, r = (e) => e) {
	return e * r(.5 - t * (.5 - n));
}
var { min: bs } = Math;
function xs(e, t, n) {
	let r = bs(1, t / n);
	return bs(1, e + (bs(1, 1 - r) - e) * (r * .275));
}
function Ss(e) {
	return [-e[0], -e[1]];
}
function Cs(e, t) {
	return [e[0] + t[0], e[1] + t[1]];
}
function ws(e, t, n) {
	return e[0] = t[0] + n[0], e[1] = t[1] + n[1], e;
}
function Ts(e, t) {
	return [e[0] - t[0], e[1] - t[1]];
}
function Es(e, t, n) {
	return e[0] = t[0] - n[0], e[1] = t[1] - n[1], e;
}
function Ds(e, t) {
	return [e[0] * t, e[1] * t];
}
function Os(e, t, n) {
	return e[0] = t[0] * n, e[1] = t[1] * n, e;
}
function ks(e, t) {
	return [e[0] / t, e[1] / t];
}
function As(e) {
	return [e[1], -e[0]];
}
function js(e, t) {
	let n = t[0];
	return e[0] = t[1], e[1] = -n, e;
}
function Ms(e, t) {
	return e[0] * t[0] + e[1] * t[1];
}
function Ns(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}
function Ps(e) {
	return Math.hypot(e[0], e[1]);
}
function Fs(e, t) {
	let n = e[0] - t[0], r = e[1] - t[1];
	return n * n + r * r;
}
function Is(e) {
	return ks(e, Ps(e));
}
function Ls(e, t) {
	return Math.hypot(e[1] - t[1], e[0] - t[0]);
}
function Rs(e, t, n) {
	let r = Math.sin(n), i = Math.cos(n), a = e[0] - t[0], o = e[1] - t[1], s = a * i - o * r, c = a * r + o * i;
	return [s + t[0], c + t[1]];
}
function zs(e, t, n, r) {
	let i = Math.sin(r), a = Math.cos(r), o = t[0] - n[0], s = t[1] - n[1], c = o * a - s * i, l = o * i + s * a;
	return e[0] = c + n[0], e[1] = l + n[1], e;
}
function Bs(e, t, n) {
	return Cs(e, Ds(Ts(t, e), n));
}
function Vs(e, t, n, r) {
	let i = n[0] - t[0], a = n[1] - t[1];
	return e[0] = t[0] + i * r, e[1] = t[1] + a * r, e;
}
function Hs(e, t, n) {
	return Cs(e, Ds(t, n));
}
var Us = [0, 0], Ws = [0, 0], Gs = [0, 0];
function Ks(e, t) {
	let n = Hs(e, Is(As(Ts(e, Cs(e, [1, 1])))), -t), r = [], i = 1 / 13;
	for (let t = i; t <= 1; t += i) r.push(Rs(n, e, gs * 2 * t));
	return r;
}
function qs(e, t, n) {
	let r = [], i = 1 / n;
	for (let n = i; n <= 1; n += i) r.push(Rs(t, e, gs * n));
	return r;
}
function Js(e, t, n) {
	let r = Ts(t, n), i = Ds(r, .5), a = Ds(r, .51);
	return [
		Ts(e, i),
		Ts(e, a),
		Cs(e, a),
		Cs(e, i)
	];
}
function Ys(e, t, n, r) {
	let i = [], a = Hs(e, t, n), o = 1 / r;
	for (let t = o; t < 1; t += o) i.push(Rs(a, e, gs * 3 * t));
	return i;
}
function Xs(e, t, n) {
	return [
		Cs(e, Ds(t, n)),
		Cs(e, Ds(t, n * .99)),
		Ts(e, Ds(t, n * .99)),
		Ts(e, Ds(t, n))
	];
}
function Zs(e, t, n) {
	return e === !1 || e === void 0 ? 0 : e === !0 ? Math.max(t, n) : e;
}
function Qs(e, t, n) {
	return e.slice(0, 10).reduce((e, r) => {
		let i = r.pressure;
		return t && (i = xs(e, r.distance, n)), (e + i) / 2;
	}, e[0].pressure);
}
function $s(e, t = {}) {
	let { size: n = 16, smoothing: r = .5, thinning: i = .5, simulatePressure: a = !0, easing: o = (e) => e, start: s = {}, end: c = {}, last: l = !1 } = t, { cap: u = !0, easing: d = (e) => e * (2 - e) } = s, { cap: f = !0, easing: p = (e) => --e * e * e + 1 } = c;
	if (e.length === 0 || n <= 0) return [];
	let m = e[e.length - 1].runningLength, h = Zs(s.taper, n, m), g = Zs(c.taper, n, m), _ = (n * r) ** 2, v = [], y = [], b = Qs(e, a, n), x = ys(n, i, e[e.length - 1].pressure, o), S, C = e[0].vector, w = e[0].point, ee = w, T = w, te = ee, E = !1;
	for (let t = 0; t < e.length; t++) {
		let { pressure: r } = e[t], { point: s, vector: c, distance: l, runningLength: u } = e[t], f = t === e.length - 1;
		if (!f && m - u < 3) continue;
		i ? (a && (r = xs(b, l, n)), x = ys(n, i, r, o)) : x = n / 2, S === void 0 && (S = x);
		let ne = u < h ? d(u / h) : 1, D = m - u < g ? p((m - u) / g) : 1;
		x = Math.max(.01, x * Math.min(ne, D));
		let re = (f ? e[t] : e[t + 1]).vector, ie = f ? 1 : Ms(c, re), ae = Ms(c, C) < 0 && !E, oe = ie !== null && ie < 0;
		if (ae || oe) {
			js(Us, C), Os(Us, Us, x);
			for (let e = 0; e <= 1; e += .07692307692307693) Es(Ws, s, Us), zs(Ws, Ws, s, gs * e), T = [Ws[0], Ws[1]], v.push(T), ws(Gs, s, Us), zs(Gs, Gs, s, gs * -e), te = [Gs[0], Gs[1]], y.push(te);
			w = T, ee = te, oe && (E = !0);
		} else E = !1, f ? (js(Us, c), Os(Us, Us, x), v.push(Ts(s, Us)), y.push(Cs(s, Us))) : (Vs(Us, re, c, ie), js(Us, Us), Os(Us, Us, x), Es(Ws, s, Us), T = [Ws[0], Ws[1]], (t <= 1 || Fs(w, T) > _) && (v.push(T), w = T), ws(Gs, s, Us), te = [Gs[0], Gs[1]], (t <= 1 || Fs(ee, te) > _) && (y.push(te), ee = te), b = r, C = c);
	}
	let ne = [e[0].point[0], e[0].point[1]], D = e.length > 1 ? [e[e.length - 1].point[0], e[e.length - 1].point[1]] : Cs(e[0].point, [1, 1]), re = [], ie = [];
	if (e.length === 1) {
		if (!(h || g) || l) return Ks(ne, S || x);
	} else {
		h || g && e.length === 1 || (u ? re.push(...qs(ne, y[0], 13)) : re.push(...Js(ne, v[0], y[0])));
		let t = As(Ss(e[e.length - 1].vector));
		g || h && e.length === 1 ? ie.push(D) : f ? ie.push(...Ys(D, t, x, 29)) : ie.push(...Xs(D, t, x));
	}
	return v.concat(ie, y.reverse(), re);
}
var ec = [0, 0];
function tc(e) {
	return e != null && e >= 0;
}
function nc(e, t = {}) {
	let { streamline: n = .5, size: r = 16, last: i = !1 } = t;
	if (e.length === 0) return [];
	let a = .15 + (1 - n) * .85, o = Array.isArray(e[0]) ? e : e.map(({ x: e, y: t, pressure: n = _s }) => [
		e,
		t,
		n
	]);
	if (o.length === 2) {
		let e = o[1];
		o = o.slice(0, -1);
		for (let t = 1; t < 5; t++) o.push(Bs(o[0], e, t / 4));
	}
	o.length === 1 && (o = [...o, [...Cs(o[0], vs), ...o[0].slice(2)]]);
	let s = [{
		point: [o[0][0], o[0][1]],
		pressure: tc(o[0][2]) ? o[0][2] : .25,
		vector: [...vs],
		distance: 0,
		runningLength: 0
	}], c = !1, l = 0, u = s[0], d = o.length - 1;
	for (let e = 1; e < o.length; e++) {
		let t = i && e === d ? [o[e][0], o[e][1]] : Bs(u.point, o[e], a);
		if (Ns(u.point, t)) continue;
		let n = Ls(t, u.point);
		if (l += n, e < d && !c) {
			if (l < r) continue;
			c = !0;
		}
		Es(ec, u.point, t), u = {
			point: t,
			pressure: tc(o[e][2]) ? o[e][2] : _s,
			vector: Is(ec),
			distance: n,
			runningLength: l
		}, s.push(u);
	}
	return s[0].vector = s[1]?.vector || [0, 0], s;
}
function rc(e, t = {}) {
	return $s(nc(e, t), t);
}
// src/ink.js
var ic = {
	pen: {
		thinning: .6,
		opacity: 1
	},
	highlighter: {
		thinning: 0,
		opacity: .35
	}
};
function ac(e, t = !0) {
	let n = ic[e.tool] ?? ic.pen;
	return oc(rc(e.points, {
		size: e.size,
		thinning: n.thinning,
		smoothing: .5,
		streamline: .4,
		simulatePressure: e.simulatePressure ?? !1,
		last: t
	}));
}
function oc(e) {
	if (e.length === 0) return "";
	if (e.length < 3) {
		let [t, n] = e[0];
		return `M ${t} ${n} Z`;
	}
	let t = (e, t) => ((e + t) / 2).toFixed(2), n = `M${e[0][0].toFixed(2)},${e[0][1].toFixed(2)} Q${e[1][0].toFixed(2)},${e[1][1].toFixed(2)} ${t(e[1][0], e[2][0])},${t(e[1][1], e[2][1])} T`;
	for (let r = 2; r < e.length - 1; r++) n += `${t(e[r][0], e[r + 1][0])},${t(e[r][1], e[r + 1][1])} `;
	return n + "Z";
}
function sc() {
	return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}
function cc(e) {
	let t = e && typeof e == "object" ? e : {};
	return {
		version: 1,
		created: Number.isFinite(t.created) ? t.created : Math.floor(Date.now() / 1e3),
		elements: Array.isArray(t.elements) ? t.elements.filter((e) => e && e.id && (e.type === "text" || e.type === "image")) : [],
		strokes: Array.isArray(t.strokes) ? t.strokes.filter((e) => e && e.id && Array.isArray(e.points) && e.points.length > 0) : []
	};
}
function lc(e) {
	return Math.round(e * 10) / 10;
}
function uc(e, t, n, r, i, a) {
	let o = i - n, s = a - r, c = o * o + s * s, l = c === 0 ? 0 : Math.max(0, Math.min(1, ((e - n) * o + (t - r) * s) / c));
	return Math.hypot(e - (n + l * o), t - (r + l * s));
}
function dc(e, t, n, r) {
	let i = r + e.size / 2, a = e.points;
	if (a.length === 1) return Math.hypot(a[0][0] - t, a[0][1] - n) <= i;
	for (let e = 1; e < a.length; e++) if (uc(t, n, a[e - 1][0], a[e - 1][1], a[e][0], a[e][1]) <= i) return !0;
	return !1;
}
function fc(e, t, n, r) {
	return e.filter((e) => !dc(e, t, n, r));
}
function pc(e, t, n) {
	let r = !1;
	for (let i = 0, a = n.length - 1; i < n.length; a = i++) {
		let [o, s] = n[i], [c, l] = n[a];
		s > t != l > t && e < (c - o) * (t - s) / (l - s) + o && (r = !r);
	}
	return r;
}
function mc(e) {
	let t = e.size / 2, n = Infinity, r = Infinity, i = -Infinity, a = -Infinity;
	for (let [t, o] of e.points) n = Math.min(n, t), r = Math.min(r, o), i = Math.max(i, t), a = Math.max(a, o);
	return {
		minX: n - t,
		minY: r - t,
		maxX: i + t,
		maxY: a + t
	};
}
function hc(e, t = {}) {
	let n = e.type === "image" ? e.height : t[e.id] ?? 40;
	return {
		minX: e.x,
		minY: e.y,
		maxX: e.x + e.width,
		maxY: e.y + n
	};
}
function gc(e) {
	return e.length === 0 ? null : e.reduce((e, t) => ({
		minX: Math.min(e.minX, t.minX),
		minY: Math.min(e.minY, t.minY),
		maxX: Math.max(e.maxX, t.maxX),
		maxY: Math.max(e.maxY, t.maxY)
	}));
}
function _c(e, t, n = {}) {
	return t.length < 3 ? {
		strokeIds: [],
		elementIds: []
	} : {
		strokeIds: e.strokes.filter((e) => e.points.filter(([e, n]) => pc(e, n, t)).length / e.points.length >= .5).map((e) => e.id),
		elementIds: e.elements.filter((e) => {
			let r = hc(e, n);
			return pc((r.minX + r.maxX) / 2, (r.minY + r.maxY) / 2, t);
		}).map((e) => e.id)
	};
}
function vc(e, t, n = {}) {
	let r = new Set(t.strokeIds), i = new Set(t.elementIds);
	return gc([...e.strokes.filter((e) => r.has(e.id)).map(mc), ...e.elements.filter((e) => i.has(e.id)).map((e) => hc(e, n))]);
}
function yc(e, t, n, r) {
	let i = new Set(t.strokeIds), a = new Set(t.elementIds);
	return {
		...e,
		strokes: e.strokes.map((e) => i.has(e.id) ? {
			...e,
			points: e.points.map(([e, t, i]) => [
				lc(e + n),
				lc(t + r),
				i
			])
		} : e),
		elements: e.elements.map((e) => a.has(e.id) ? {
			...e,
			x: lc(e.x + n),
			y: lc(e.y + r)
		} : e)
	};
}
function bc(e, t) {
	let n = new Set(t.strokeIds), r = new Set(t.elementIds);
	return {
		...e,
		strokes: e.strokes.filter((e) => !n.has(e.id)),
		elements: e.elements.filter((e) => !r.has(e.id))
	};
}
function xc(e) {
	return !e || !Array.isArray(e.content) || e.content.every((e) => e.type === "paragraph" && (!e.content || e.content.length === 0));
}
// src/components/ImageBlock.vue
var Sc = ["src"], Cc = {
	__name: "ImageBlock",
	props: {
		element: {
			type: Object,
			required: !0
		},
		src: {
			type: String,
			required: !0
		},
		selected: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["drag-start", "resize-start"],
	setup(e) {
		return (t, n) => (N(), P("div", {
			class: O(["nb-element nb-image", { "nb-element--selected": e.selected }]),
			style: de({
				left: e.element.x + "px",
				top: e.element.y + "px",
				width: e.element.width + "px",
				height: e.element.height + "px"
			}),
			onPointerdown: n[1] ||= Lo((e) => t.$emit("drag-start", e), ["stop", "prevent"])
		}, [F("img", {
			src: e.src,
			alt: "",
			draggable: "false"
		}, null, 8, Sc), F("div", {
			class: "nb-resize nb-resize--corner",
			title: "Größe ändern",
			onPointerdown: n[0] ||= Lo((e) => t.$emit("resize-start", e), ["stop", "prevent"])
		}, null, 32)], 38));
	}
}, wc = Object.defineProperty, Tc = (e, t) => {
	let n = {};
	for (var r in e) wc(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || wc(n, Symbol.toStringTag, { value: "Module" }), n;
};
// node_modules/orderedmap/dist/index.js
function Ec(e) {
	this.content = e;
}
Ec.prototype = {
	constructor: Ec,
	find: function(e) {
		for (var t = 0; t < this.content.length; t += 2) if (this.content[t] === e) return t;
		return -1;
	},
	get: function(e) {
		var t = this.find(e);
		return t == -1 ? void 0 : this.content[t + 1];
	},
	update: function(e, t, n) {
		var r = n && n != e ? this.remove(n) : this, i = r.find(e), a = r.content.slice();
		return i == -1 ? a.push(n || e, t) : (a[i + 1] = t, n && (a[i] = n)), new Ec(a);
	},
	remove: function(e) {
		var t = this.find(e);
		if (t == -1) return this;
		var n = this.content.slice();
		return n.splice(t, 2), new Ec(n);
	},
	addToStart: function(e, t) {
		return new Ec([e, t].concat(this.remove(e).content));
	},
	addToEnd: function(e, t) {
		var n = this.remove(e).content.slice();
		return n.push(e, t), new Ec(n);
	},
	addBefore: function(e, t, n) {
		var r = this.remove(t), i = r.content.slice(), a = r.find(e);
		return i.splice(a == -1 ? i.length : a, 0, t, n), new Ec(i);
	},
	forEach: function(e) {
		for (var t = 0; t < this.content.length; t += 2) e(this.content[t], this.content[t + 1]);
	},
	prepend: function(e) {
		return e = Ec.from(e), e.size ? new Ec(e.content.concat(this.subtract(e).content)) : this;
	},
	append: function(e) {
		return e = Ec.from(e), e.size ? new Ec(this.subtract(e).content.concat(e.content)) : this;
	},
	subtract: function(e) {
		var t = this;
		e = Ec.from(e);
		for (var n = 0; n < e.content.length; n += 2) t = t.remove(e.content[n]);
		return t;
	},
	toObject: function() {
		var e = {};
		return this.forEach(function(t, n) {
			e[t] = n;
		}), e;
	},
	get size() {
		return this.content.length >> 1;
	}
}, Ec.from = function(e) {
	if (e instanceof Ec) return e;
	var t = [];
	if (e) for (var n in e) t.push(n, e[n]);
	return new Ec(t);
};
// node_modules/prosemirror-model/dist/index.js
function Dc(e, t, n) {
	for (let r = 0;; r++) {
		if (r == e.childCount || r == t.childCount) return e.childCount == t.childCount ? null : n;
		let i = e.child(r), a = t.child(r);
		if (i == a) n += i.nodeSize;
		else {
			if (!i.sameMarkup(a)) return n;
			if (i.isText && i.text != a.text) {
				let e = i.text, t = a.text, r = 0;
				for (; e[r] == t[r]; r++) n++;
				return r && r < e.length && r < t.length && Ac(e.charCodeAt(r - 1)) && kc(e.charCodeAt(r)) && n--, n;
			}
			if (i.content.size || a.content.size) {
				let e = Dc(i.content, a.content, n + 1);
				if (e != null) return e;
			}
			n += i.nodeSize;
		}
	}
}
function Oc(e, t, n, r) {
	for (let i = e.childCount, a = t.childCount;;) {
		if (i == 0 || a == 0) return i == a ? null : {
			a: n,
			b: r
		};
		let o = e.child(--i), s = t.child(--a), c = o.nodeSize;
		if (o == s) n -= c, r -= c;
		else {
			if (!o.sameMarkup(s)) return {
				a: n,
				b: r
			};
			if (o.isText && o.text != s.text) {
				let e = o.text, t = s.text, i = e.length, a = t.length;
				for (; i > 0 && a > 0 && e[i - 1] == t[a - 1];) i--, a--, n--, r--;
				return i && a && i < e.length && Ac(e.charCodeAt(i - 1)) && kc(e.charCodeAt(i)) && (n++, r++), {
					a: n,
					b: r
				};
			}
			if (o.content.size || s.content.size) {
				let e = Oc(o.content, s.content, n - 1, r - 1);
				if (e) return e;
			}
			n -= c, r -= c;
		}
	}
}
function kc(e) {
	return e >= 56320 && e < 57344;
}
function Ac(e) {
	return e >= 55296 && e < 56320;
}
var I = class e {
	constructor(e, t) {
		if (this.content = e, this.size = t || 0, t == null) for (let t = 0; t < e.length; t++) this.size += e[t].nodeSize;
	}
	nodesBetween(e, t, n, r = 0, i) {
		for (let a = 0, o = 0; o < t; a++) {
			let s = this.content[a], c = o + s.nodeSize;
			if (c > e && n(s, r + o, i || null, a) !== !1 && s.content.size) {
				let i = o + 1;
				s.nodesBetween(Math.max(0, e - i), Math.min(s.content.size, t - i), n, r + i);
			}
			o = c;
		}
	}
	descendants(e) {
		this.nodesBetween(0, this.size, e);
	}
	textBetween(e, t, n, r) {
		let i = "", a = !0;
		return this.nodesBetween(e, t, (o, s) => {
			let c = o.isText ? o.text.slice(Math.max(e, s) - s, t - s) : o.isLeaf ? r ? typeof r == "function" ? r(o) : r : o.type.spec.leafText ? o.type.spec.leafText(o) : "" : "";
			o.isBlock && (o.isLeaf && c || o.isTextblock) && n && (a ? a = !1 : i += n), i += c;
		}, 0), i;
	}
	append(t) {
		if (!t.size) return this;
		if (!this.size) return t;
		let n = this.lastChild, r = t.firstChild, i = this.content.slice(), a = 0;
		for (n.isText && n.sameMarkup(r) && (i[i.length - 1] = n.withText(n.text + r.text), a = 1); a < t.content.length; a++) i.push(t.content[a]);
		return new e(i, this.size + t.size);
	}
	cut(t, n = this.size) {
		if (t == 0 && n == this.size) return this;
		let r = [], i = 0;
		if (n > t) for (let e = 0, a = 0; a < n; e++) {
			let o = this.content[e], s = a + o.nodeSize;
			s > t && ((a < t || s > n) && (o = o.isText ? o.cut(Math.max(0, t - a), Math.min(o.text.length, n - a)) : o.cut(Math.max(0, t - a - 1), Math.min(o.content.size, n - a - 1))), r.push(o), i += o.nodeSize), a = s;
		}
		return new e(r, i);
	}
	cutByIndex(t, n) {
		return t == n ? e.empty : t == 0 && n == this.content.length ? this : new e(this.content.slice(t, n));
	}
	replaceChild(t, n) {
		let r = this.content[t];
		if (r == n) return this;
		let i = this.content.slice(), a = this.size + n.nodeSize - r.nodeSize;
		return i[t] = n, new e(i, a);
	}
	addToStart(t) {
		return new e([t].concat(this.content), this.size + t.nodeSize);
	}
	addToEnd(t) {
		return new e(this.content.concat(t), this.size + t.nodeSize);
	}
	eq(e) {
		if (this.content.length != e.content.length) return !1;
		for (let t = 0; t < this.content.length; t++) if (!this.content[t].eq(e.content[t])) return !1;
		return !0;
	}
	get firstChild() {
		return this.content.length ? this.content[0] : null;
	}
	get lastChild() {
		return this.content.length ? this.content[this.content.length - 1] : null;
	}
	get childCount() {
		return this.content.length;
	}
	child(e) {
		let t = this.content[e];
		if (!t) throw RangeError("Index " + e + " out of range for " + this);
		return t;
	}
	maybeChild(e) {
		return this.content[e] || null;
	}
	forEach(e) {
		for (let t = 0, n = 0; t < this.content.length; t++) {
			let r = this.content[t];
			e(r, n, t), n += r.nodeSize;
		}
	}
	findDiffStart(e, t = 0) {
		return Dc(this, e, t);
	}
	findDiffEnd(e, t = this.size, n = e.size) {
		return Oc(this, e, t, n);
	}
	findIndex(e) {
		if (e == 0) return Mc(0, e);
		if (e == this.size) return Mc(this.content.length, e);
		if (e > this.size || e < 0) throw RangeError(`Position ${e} outside of fragment (${this})`);
		for (let t = 0, n = 0;; t++) {
			let r = this.child(t), i = n + r.nodeSize;
			if (i >= e) return i == e ? Mc(t + 1, i) : Mc(t, n);
			n = i;
		}
	}
	toString() {
		return "<" + this.toStringInner() + ">";
	}
	toStringInner() {
		return this.content.join(", ");
	}
	toJSON() {
		return this.content.length ? this.content.map((e) => e.toJSON()) : null;
	}
	static fromJSON(t, n) {
		if (!n) return e.empty;
		if (!Array.isArray(n)) throw RangeError("Invalid input for Fragment.fromJSON");
		return e.fromArray(n.map(t.nodeFromJSON));
	}
	static fromArray(t) {
		if (!t.length) return e.empty;
		let n, r = 0;
		for (let e = 0; e < t.length; e++) {
			let i = t[e];
			r += i.nodeSize, e && i.isText && t[e - 1].sameMarkup(i) ? (n ||= t.slice(0, e), n[n.length - 1] = i.withText(n[n.length - 1].text + i.text)) : n && n.push(i);
		}
		return new e(n || t, r);
	}
	static from(t) {
		if (!t) return e.empty;
		if (t instanceof e) return t;
		if (Array.isArray(t)) return this.fromArray(t);
		if (t.attrs) return new e([t], t.nodeSize);
		throw RangeError("Can not convert " + t + " to a Fragment" + (t.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
	}
};
I.empty = new I([], 0);
var jc = {
	index: 0,
	offset: 0
};
function Mc(e, t) {
	return jc.index = e, jc.offset = t, jc;
}
function Nc(e, t) {
	if (e === t) return !0;
	if (!(e && typeof e == "object") || !(t && typeof t == "object")) return !1;
	let n = Array.isArray(e);
	if (Array.isArray(t) != n) return !1;
	if (n) {
		if (e.length != t.length) return !1;
		for (let n = 0; n < e.length; n++) if (!Nc(e[n], t[n])) return !1;
	} else {
		for (let n in e) if (!(n in t) || !Nc(e[n], t[n])) return !1;
		for (let n in t) if (!(n in e)) return !1;
	}
	return !0;
}
var L = class e {
	constructor(e, t) {
		this.type = e, this.attrs = t;
	}
	addToSet(e) {
		let t, n = !1;
		for (let r = 0; r < e.length; r++) {
			let i = e[r];
			if (this.eq(i)) return e;
			if (this.type.excludes(i.type)) t ||= e.slice(0, r);
			else if (i.type.excludes(this.type)) return e;
			else !n && i.type.rank > this.type.rank && (t ||= e.slice(0, r), t.push(this), n = !0), t && t.push(i);
		}
		return t ||= e.slice(), n || t.push(this), t;
	}
	removeFromSet(e) {
		for (let t = 0; t < e.length; t++) if (this.eq(e[t])) return e.slice(0, t).concat(e.slice(t + 1));
		return e;
	}
	isInSet(e) {
		for (let t = 0; t < e.length; t++) if (this.eq(e[t])) return !0;
		return !1;
	}
	eq(e) {
		return this == e || this.type == e.type && Nc(this.attrs, e.attrs);
	}
	toJSON() {
		let e = { type: this.type.name };
		for (let t in this.attrs) {
			e.attrs = this.attrs;
			break;
		}
		return e;
	}
	static fromJSON(e, t) {
		if (!t) throw RangeError("Invalid input for Mark.fromJSON");
		let n = e.marks[t.type];
		if (!n) throw RangeError(`There is no mark type ${t.type} in this schema`);
		return n.create(t.attrs);
	}
	static sameSet(e, t) {
		if (e == t) return !0;
		if (e.length != t.length) return !1;
		for (let n = 0; n < e.length; n++) if (!e[n].eq(t[n])) return !1;
		return !0;
	}
	static setFrom(t) {
		if (!t || Array.isArray(t) && t.length == 0) return e.none;
		if (t instanceof e) return [t];
		let n = t.slice();
		return n.sort((e, t) => e.type.rank - t.type.rank), n;
	}
};
L.none = [];
var Pc = class extends Error {}, R = class e {
	constructor(e, t, n) {
		this.content = e, this.openStart = t, this.openEnd = n;
	}
	get size() {
		return this.content.size - this.openStart - this.openEnd;
	}
	insertAt(t, n) {
		let r = Ic(this.content, t + this.openStart, n, this.openStart + 1, this.openEnd + 1);
		return r && new e(r, this.openStart, this.openEnd);
	}
	removeBetween(t, n) {
		return new e(Fc(this.content, t + this.openStart, n + this.openStart), this.openStart, this.openEnd);
	}
	eq(e) {
		return this.content.eq(e.content) && this.openStart == e.openStart && this.openEnd == e.openEnd;
	}
	toString() {
		return this.content + "(" + this.openStart + "," + this.openEnd + ")";
	}
	toJSON() {
		if (!this.content.size) return null;
		let e = { content: this.content.toJSON() };
		return this.openStart > 0 && (e.openStart = this.openStart), this.openEnd > 0 && (e.openEnd = this.openEnd), e;
	}
	static fromJSON(t, n) {
		if (!n) return e.empty;
		let r = n.openStart || 0, i = n.openEnd || 0;
		if (typeof r != "number" || typeof i != "number") throw RangeError("Invalid input for Slice.fromJSON");
		return new e(I.fromJSON(t, n.content), r, i);
	}
	static maxOpen(t, n = !0) {
		let r = 0, i = 0;
		for (let e = t.firstChild; e && !e.isLeaf && (n || !e.type.spec.isolating); e = e.firstChild) r++;
		for (let e = t.lastChild; e && !e.isLeaf && (n || !e.type.spec.isolating); e = e.lastChild) i++;
		return new e(t, r, i);
	}
};
R.empty = new R(I.empty, 0, 0);
function Fc(e, t, n) {
	let { index: r, offset: i } = e.findIndex(t), a = e.maybeChild(r), { index: o, offset: s } = e.findIndex(n);
	if (i == t || a.isText) {
		if (s != n && !e.child(o).isText) throw RangeError("Removing non-flat range");
		return e.cut(0, t).append(e.cut(n));
	}
	if (r != o) throw RangeError("Removing non-flat range");
	return e.replaceChild(r, a.copy(Fc(a.content, t - i - 1, n - i - 1)));
}
function Ic(e, t, n, r, i, a) {
	let { index: o, offset: s } = e.findIndex(t), c = e.maybeChild(o);
	if (s == t || c.isText) return a && r <= 0 && i <= 0 && !a.canReplace(o, o, n) ? null : e.cut(0, t).append(n).append(e.cut(t));
	let l = Ic(c.content, t - s - 1, n, o == 0 ? r - 1 : 0, o == e.childCount - 1 ? i - 1 : 0, c);
	return l && e.replaceChild(o, c.copy(l));
}
function Lc(e, t, n) {
	if (n.openStart > e.depth) throw new Pc("Inserted content deeper than insertion position");
	if (e.depth - n.openStart != t.depth - n.openEnd) throw new Pc("Inconsistent open depths");
	return Rc(e, t, n, 0);
}
function Rc(e, t, n, r) {
	let i = e.index(r), a = e.node(r);
	if (i == t.index(r) && r < e.depth - n.openStart) {
		let o = Rc(e, t, n, r + 1);
		return a.copy(a.content.replaceChild(i, o));
	}
	if (!n.content.size) return Uc(a, Gc(e, t, r));
	if (!n.openStart && !n.openEnd && e.depth == r && t.depth == r) {
		let r = e.parent, i = r.content;
		return Uc(r, i.cut(0, e.parentOffset).append(n.content).append(i.cut(t.parentOffset)));
	}
	{
		let { start: i, end: o } = Kc(n, e);
		return Uc(a, Wc(e, i, o, t, r));
	}
}
function zc(e, t) {
	if (!t.type.compatibleContent(e.type)) throw new Pc("Cannot join " + t.type.name + " onto " + e.type.name);
}
function Bc(e, t, n) {
	let r = e.node(n);
	return zc(r, t.node(n)), r;
}
function Vc(e, t) {
	let n = t.length - 1;
	n >= 0 && e.isText && e.sameMarkup(t[n]) ? t[n] = e.withText(t[n].text + e.text) : t.push(e);
}
function Hc(e, t, n, r) {
	let i = (t || e).node(n), a = 0, o = t ? t.index(n) : i.childCount;
	e && (a = e.index(n), e.depth > n ? a++ : e.textOffset && (Vc(e.nodeAfter, r), a++));
	for (let e = a; e < o; e++) Vc(i.child(e), r);
	t && t.depth == n && t.textOffset && Vc(t.nodeBefore, r);
}
function Uc(e, t) {
	if (!e.type.validContent(t)) throw new Pc("Invalid content for node " + e.type.name);
	return e.copy(t);
}
function Wc(e, t, n, r, i) {
	let a = e.depth > i && Bc(e, t, i + 1), o = r.depth > i && Bc(n, r, i + 1), s = [];
	return Hc(null, e, i, s), a && o && t.index(i) == n.index(i) ? (zc(a, o), Vc(Uc(a, Wc(e, t, n, r, i + 1)), s)) : (a && Vc(Uc(a, Gc(e, t, i + 1)), s), Hc(t, n, i, s), o && Vc(Uc(o, Gc(n, r, i + 1)), s)), Hc(r, null, i, s), new I(s);
}
function Gc(e, t, n) {
	let r = [];
	return Hc(null, e, n, r), e.depth > n && Vc(Uc(Bc(e, t, n + 1), Gc(e, t, n + 1)), r), Hc(t, null, n, r), new I(r);
}
function Kc(e, t) {
	let n = t.depth - e.openStart, r = t.node(n).copy(e.content);
	for (let e = n - 1; e >= 0; e--) r = t.node(e).copy(I.from(r));
	return {
		start: r.resolveNoCache(e.openStart + n),
		end: r.resolveNoCache(r.content.size - e.openEnd - n)
	};
}
var qc = class e {
	constructor(e, t, n) {
		this.pos = e, this.path = t, this.parentOffset = n, this.depth = t.length / 3 - 1;
	}
	resolveDepth(e) {
		return e == null ? this.depth : e < 0 ? this.depth + e : e;
	}
	get parent() {
		return this.node(this.depth);
	}
	get doc() {
		return this.node(0);
	}
	node(e) {
		return this.path[this.resolveDepth(e) * 3];
	}
	index(e) {
		return this.path[this.resolveDepth(e) * 3 + 1];
	}
	indexAfter(e) {
		return e = this.resolveDepth(e), this.index(e) + (e == this.depth && !this.textOffset ? 0 : 1);
	}
	start(e) {
		return e = this.resolveDepth(e), e == 0 ? 0 : this.path[e * 3 - 1] + 1;
	}
	end(e) {
		return e = this.resolveDepth(e), this.start(e) + this.node(e).content.size;
	}
	before(e) {
		if (e = this.resolveDepth(e), !e) throw RangeError("There is no position before the top-level node");
		return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1];
	}
	after(e) {
		if (e = this.resolveDepth(e), !e) throw RangeError("There is no position after the top-level node");
		return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1] + this.path[e * 3].nodeSize;
	}
	get textOffset() {
		return this.pos - this.path[this.path.length - 1];
	}
	get nodeAfter() {
		let e = this.parent, t = this.index(this.depth);
		if (t == e.childCount) return null;
		let n = this.pos - this.path[this.path.length - 1], r = e.child(t);
		return n ? e.child(t).cut(n) : r;
	}
	get nodeBefore() {
		let e = this.index(this.depth), t = this.pos - this.path[this.path.length - 1];
		return t ? this.parent.child(e).cut(0, t) : e == 0 ? null : this.parent.child(e - 1);
	}
	posAtIndex(e, t) {
		t = this.resolveDepth(t);
		let n = this.path[t * 3], r = t == 0 ? 0 : this.path[t * 3 - 1] + 1;
		for (let t = 0; t < e; t++) r += n.child(t).nodeSize;
		return r;
	}
	marks() {
		let e = this.parent, t = this.index();
		if (e.content.size == 0) return L.none;
		if (this.textOffset) return e.child(t).marks;
		let n = e.maybeChild(t - 1), r = e.maybeChild(t);
		if (!n) {
			let e = n;
			n = r, r = e;
		}
		let i = n.marks;
		for (var a = 0; a < i.length; a++) i[a].type.spec.inclusive !== !1 || r && i[a].isInSet(r.marks) || (i = i[a--].removeFromSet(i));
		return i;
	}
	marksAcross(e) {
		let t = this.parent.maybeChild(this.index());
		if (!t || !t.isInline) return null;
		let n = t.marks, r = e.parent.maybeChild(e.index());
		for (var i = 0; i < n.length; i++) n[i].type.spec.inclusive !== !1 || r && n[i].isInSet(r.marks) || (n = n[i--].removeFromSet(n));
		return n;
	}
	sharedDepth(e) {
		for (let t = this.depth; t > 0; t--) if (this.start(t) <= e && this.end(t) >= e) return t;
		return 0;
	}
	blockRange(e = this, t) {
		if (e.pos < this.pos) return e.blockRange(this);
		for (let n = this.depth - (this.parent.inlineContent || this.pos == e.pos ? 1 : 0); n >= 0; n--) if (e.pos <= this.end(n) && (!t || t(this.node(n)))) return new Zc(this, e, n);
		return null;
	}
	sameParent(e) {
		return this.pos - this.parentOffset == e.pos - e.parentOffset;
	}
	max(e) {
		return e.pos > this.pos ? e : this;
	}
	min(e) {
		return e.pos < this.pos ? e : this;
	}
	toString() {
		let e = "";
		for (let t = 1; t <= this.depth; t++) e += (e ? "/" : "") + this.node(t).type.name + "_" + this.index(t - 1);
		return e + ":" + this.parentOffset;
	}
	static resolve(t, n) {
		if (!(n >= 0 && n <= t.content.size)) throw RangeError("Position " + n + " out of range");
		let r = [], i = 0, a = n;
		for (let e = t;;) {
			let { index: t, offset: n } = e.content.findIndex(a), o = a - n;
			if (r.push(e, t, i + n), !o || (e = e.child(t), e.isText)) break;
			a = o - 1, i += n + 1;
		}
		return new e(n, r, a);
	}
	static resolveCached(t, n) {
		let r = Xc.get(t);
		if (r) for (let e = 0; e < r.elts.length; e++) {
			let t = r.elts[e];
			if (t.pos == n) return t;
		}
		else Xc.set(t, r = new Jc());
		let i = r.elts[r.i] = e.resolve(t, n);
		return r.i = (r.i + 1) % Yc, i;
	}
}, Jc = class {
	constructor() {
		this.elts = [], this.i = 0;
	}
}, Yc = 12, Xc = /* @__PURE__ */ new WeakMap(), Zc = class {
	constructor(e, t, n) {
		this.$from = e, this.$to = t, this.depth = n;
	}
	get start() {
		return this.$from.before(this.depth + 1);
	}
	get end() {
		return this.$to.after(this.depth + 1);
	}
	get parent() {
		return this.$from.node(this.depth);
	}
	get startIndex() {
		return this.$from.index(this.depth);
	}
	get endIndex() {
		return this.$to.indexAfter(this.depth);
	}
}, Qc = Object.create(null), $c = class e {
	constructor(e, t, n, r = L.none) {
		this.type = e, this.attrs = t, this.marks = r, this.content = n || I.empty;
	}
	get children() {
		return this.content.content;
	}
	get nodeSize() {
		return this.isLeaf ? 1 : 2 + this.content.size;
	}
	get childCount() {
		return this.content.childCount;
	}
	child(e) {
		return this.content.child(e);
	}
	maybeChild(e) {
		return this.content.maybeChild(e);
	}
	forEach(e) {
		this.content.forEach(e);
	}
	nodesBetween(e, t, n, r = 0) {
		this.content.nodesBetween(e, t, n, r, this);
	}
	descendants(e) {
		this.nodesBetween(0, this.content.size, e);
	}
	get textContent() {
		return this.isLeaf && this.type.spec.leafText ? this.type.spec.leafText(this) : this.textBetween(0, this.content.size, "");
	}
	textBetween(e, t, n, r) {
		return this.content.textBetween(e, t, n, r);
	}
	get firstChild() {
		return this.content.firstChild;
	}
	get lastChild() {
		return this.content.lastChild;
	}
	eq(e) {
		return this == e || this.sameMarkup(e) && this.content.eq(e.content);
	}
	sameMarkup(e) {
		return this.hasMarkup(e.type, e.attrs, e.marks);
	}
	hasMarkup(e, t, n) {
		return this.type == e && Nc(this.attrs, t || e.defaultAttrs || Qc) && L.sameSet(this.marks, n || L.none);
	}
	copy(t = null) {
		return t == this.content ? this : new e(this.type, this.attrs, t, this.marks);
	}
	mark(t) {
		return t == this.marks ? this : new e(this.type, this.attrs, this.content, t);
	}
	cut(e, t = this.content.size) {
		return e == 0 && t == this.content.size ? this : this.copy(this.content.cut(e, t));
	}
	slice(e, t = this.content.size, n = !1) {
		if (e == t) return R.empty;
		let r = this.resolve(e), i = this.resolve(t), a = n ? 0 : r.sharedDepth(t), o = r.start(a);
		return new R(r.node(a).content.cut(r.pos - o, i.pos - o), r.depth - a, i.depth - a);
	}
	replace(e, t, n) {
		return Lc(this.resolve(e), this.resolve(t), n);
	}
	nodeAt(e) {
		for (let t = this;;) {
			let { index: n, offset: r } = t.content.findIndex(e);
			if (t = t.maybeChild(n), !t) return null;
			if (r == e || t.isText) return t;
			e -= r + 1;
		}
	}
	childAfter(e) {
		let { index: t, offset: n } = this.content.findIndex(e);
		return {
			node: this.content.maybeChild(t),
			index: t,
			offset: n
		};
	}
	childBefore(e) {
		if (e == 0) return {
			node: null,
			index: 0,
			offset: 0
		};
		let { index: t, offset: n } = this.content.findIndex(e);
		if (n < e) return {
			node: this.content.child(t),
			index: t,
			offset: n
		};
		let r = this.content.child(t - 1);
		return {
			node: r,
			index: t - 1,
			offset: n - r.nodeSize
		};
	}
	resolve(e) {
		return qc.resolveCached(this, e);
	}
	resolveNoCache(e) {
		return qc.resolve(this, e);
	}
	rangeHasMark(e, t, n) {
		let r = !1;
		return t > e && this.nodesBetween(e, t, (e) => (n.isInSet(e.marks) && (r = !0), !r)), r;
	}
	get isBlock() {
		return this.type.isBlock;
	}
	get isTextblock() {
		return this.type.isTextblock;
	}
	get inlineContent() {
		return this.type.inlineContent;
	}
	get isInline() {
		return this.type.isInline;
	}
	get isText() {
		return this.type.isText;
	}
	get isLeaf() {
		return this.type.isLeaf;
	}
	get isAtom() {
		return this.type.isAtom;
	}
	toString() {
		if (this.type.spec.toDebugString) return this.type.spec.toDebugString(this);
		let e = this.type.name;
		return this.content.size && (e += "(" + this.content.toStringInner() + ")"), nl(this.marks, e);
	}
	contentMatchAt(e) {
		let t = this.type.contentMatch.matchFragment(this.content, 0, e);
		if (!t) throw Error("Called contentMatchAt on a node with invalid content");
		return t;
	}
	canReplace(e, t, n = I.empty, r = 0, i = n.childCount) {
		let a = this.contentMatchAt(e).matchFragment(n, r, i), o = a && a.matchFragment(this.content, t);
		if (!o || !o.validEnd) return !1;
		for (let e = r; e < i; e++) if (!this.type.allowsMarks(n.child(e).marks)) return !1;
		return !0;
	}
	canReplaceWith(e, t, n, r) {
		if (r && !this.type.allowsMarks(r)) return !1;
		let i = this.contentMatchAt(e).matchType(n), a = i && i.matchFragment(this.content, t);
		return a ? a.validEnd : !1;
	}
	canAppend(e) {
		return e.content.size ? this.canReplace(this.childCount, this.childCount, e.content) : this.type.compatibleContent(e.type);
	}
	check() {
		this.type.checkContent(this.content), rl(this.type.attrs, this.attrs, "node", this.type.name);
		let e = L.none;
		for (let t = 0; t < this.marks.length; t++) {
			let n = this.marks[t];
			rl(n.type.attrs, n.attrs, "mark", n.type.name), e = n.addToSet(e);
		}
		if (!L.sameSet(e, this.marks)) throw RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map((e) => e.type.name)}`);
		this.content.forEach((e) => e.check());
	}
	toJSON() {
		let e = { type: this.type.name };
		for (let t in this.attrs) {
			e.attrs = this.attrs;
			break;
		}
		return this.content.size && (e.content = this.content.toJSON()), this.marks.length && (e.marks = this.marks.map((e) => e.toJSON())), e;
	}
	static fromJSON(e, t) {
		if (!t) throw RangeError("Invalid input for Node.fromJSON");
		let n;
		if (t.marks) {
			if (!Array.isArray(t.marks)) throw RangeError("Invalid mark data for Node.fromJSON");
			n = t.marks.map(e.markFromJSON);
		}
		if (t.type == "text") {
			if (typeof t.text != "string") throw RangeError("Invalid text node in JSON");
			return e.text(t.text, n);
		}
		let r = I.fromJSON(e, t.content);
		return e.nodeType(t.type).create(t.attrs, r, n);
	}
};
$c.prototype.text = void 0;
var el = (() => {
	let { stack: e } = /* @__PURE__ */ Error("/");
	if (!e || !/\n\s*at\s/.test(e)) return (e) => e;
	let t = Object.create(null);
	return (e) => (t[e], e);
})(), tl = class e extends $c {
	constructor(e, t, n, r) {
		if (super(e, t, null, r), !n) throw RangeError("Empty text nodes are not allowed");
		this.text = n;
	}
	toString() {
		return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : nl(this.marks, JSON.stringify(this.text));
	}
	get textContent() {
		return this.text;
	}
	textBetween(e, t) {
		return el(this.text.slice(e, t));
	}
	get nodeSize() {
		return this.text.length;
	}
	mark(t) {
		return t == this.marks ? this : new e(this.type, this.attrs, this.text, t);
	}
	withText(t) {
		return t == this.text ? this : new e(this.type, this.attrs, t, this.marks);
	}
	cut(e = 0, t = this.text.length) {
		return e == 0 && t == this.text.length ? this : this.withText(el(this.text.slice(e, t)));
	}
	eq(e) {
		return this.sameMarkup(e) && this.text == e.text;
	}
	toJSON() {
		let e = super.toJSON();
		return e.text = this.text, e;
	}
};
function nl(e, t) {
	for (let n = e.length - 1; n >= 0; n--) t = e[n].type.name + "(" + t + ")";
	return t;
}
function rl(e, t, n, r) {
	for (let i in t) if (!(i in e)) throw RangeError(`Unsupported attribute ${i} for ${n} of type ${r}`);
	for (let n in e) e[n].validate && e[n].validate(t[n]);
}
var il = class e {
	constructor(e) {
		this.validEnd = e, this.next = [], this.wrapCache = [];
	}
	static parse(t, n) {
		let r = new al(t, n);
		if (r.next == null) return e.empty;
		let i = ol(r);
		r.next && r.err("Unexpected trailing text");
		let a = gl(pl(i));
		return _l(a, r), a;
	}
	matchType(e) {
		for (let t = 0; t < this.next.length; t++) if (this.next[t].type == e) return this.next[t].next;
		return null;
	}
	matchFragment(e, t = 0, n = e.childCount) {
		let r = this;
		for (let i = t; r && i < n; i++) r = r.matchType(e.child(i).type);
		return r;
	}
	get inlineContent() {
		return this.next.length != 0 && this.next[0].type.isInline;
	}
	get defaultType() {
		for (let e = 0; e < this.next.length; e++) {
			let { type: t } = this.next[e];
			if (!(t.isText || t.hasRequiredAttrs())) return t;
		}
		return null;
	}
	compatible(e) {
		for (let t = 0; t < this.next.length; t++) for (let n = 0; n < e.next.length; n++) if (this.next[t].type == e.next[n].type) return !0;
		return !1;
	}
	fillBefore(e, t = !1, n = 0) {
		let r = [this];
		function i(a, o) {
			let s = a.matchFragment(e, n);
			if (s && (!t || s.validEnd)) return I.from(o.map((e) => e.createAndFill()));
			for (let e = 0; e < a.next.length; e++) {
				let { type: t, next: n } = a.next[e];
				if (!(t.isText || t.hasRequiredAttrs()) && r.indexOf(n) == -1) {
					r.push(n);
					let e = i(n, o.concat(t));
					if (e) return e;
				}
			}
			return null;
		}
		return i(this, []);
	}
	findWrapping(e) {
		for (let t = 0; t < this.wrapCache.length; t += 2) if (this.wrapCache[t] == e) return this.wrapCache[t + 1];
		let t = this.computeWrapping(e);
		return this.wrapCache.push(e, t), t;
	}
	computeWrapping(e) {
		let t = Object.create(null), n = [{
			match: this,
			type: null,
			via: null
		}];
		for (; n.length;) {
			let r = n.shift(), i = r.match;
			if (i.matchType(e)) {
				let e = [];
				for (let t = r; t.type; t = t.via) e.push(t.type);
				return e.reverse();
			}
			for (let e = 0; e < i.next.length; e++) {
				let { type: a, next: o } = i.next[e];
				a.isLeaf || a.hasRequiredAttrs() || a.name in t || r.type && !o.validEnd || (n.push({
					match: a.contentMatch,
					type: a,
					via: r
				}), t[a.name] = !0);
			}
		}
		return null;
	}
	get edgeCount() {
		return this.next.length;
	}
	edge(e) {
		if (e >= this.next.length) throw RangeError(`There's no ${e}th edge in this content match`);
		return this.next[e];
	}
	toString() {
		let e = [];
		function t(n) {
			e.push(n);
			for (let r = 0; r < n.next.length; r++) e.indexOf(n.next[r].next) == -1 && t(n.next[r].next);
		}
		return t(this), e.map((t, n) => {
			let r = n + (t.validEnd ? "*" : " ") + " ";
			for (let n = 0; n < t.next.length; n++) r += (n ? ", " : "") + t.next[n].type.name + "->" + e.indexOf(t.next[n].next);
			return r;
		}).join("\n");
	}
};
il.empty = new il(!0);
var al = class {
	constructor(e, t) {
		this.string = e, this.nodeTypes = t, this.inline = null, this.pos = 0, this.tokens = e.split(/\s*(?=\b|\W|$)/), this.tokens[this.tokens.length - 1] == "" && this.tokens.pop(), this.tokens[0] == "" && this.tokens.shift();
	}
	get next() {
		return this.tokens[this.pos];
	}
	eat(e) {
		return this.next == e && (this.pos++ || !0);
	}
	err(e) {
		throw SyntaxError(e + " (in content expression '" + this.string + "')");
	}
};
function ol(e) {
	let t = [];
	do
		t.push(sl(e));
	while (e.eat("|"));
	return t.length == 1 ? t[0] : {
		type: "choice",
		exprs: t
	};
}
function sl(e) {
	let t = [];
	do
		t.push(cl(e));
	while (e.next && e.next != ")" && e.next != "|");
	return t.length == 1 ? t[0] : {
		type: "seq",
		exprs: t
	};
}
function cl(e) {
	let t = fl(e);
	for (;;) if (e.eat("+")) t = {
		type: "plus",
		expr: t
	};
	else if (e.eat("*")) t = {
		type: "star",
		expr: t
	};
	else if (e.eat("?")) t = {
		type: "opt",
		expr: t
	};
	else if (e.eat("{")) t = ul(e, t);
	else break;
	return t;
}
function ll(e) {
	/\D/.test(e.next) && e.err("Expected number, got '" + e.next + "'");
	let t = Number(e.next);
	return e.pos++, t;
}
function ul(e, t) {
	let n = ll(e), r = n;
	return e.eat(",") && (r = e.next == "}" ? -1 : ll(e)), e.eat("}") || e.err("Unclosed braced range"), {
		type: "range",
		min: n,
		max: r,
		expr: t
	};
}
function dl(e, t) {
	let n = e.nodeTypes, r = n[t];
	if (r) return [r];
	let i = [];
	for (let e in n) {
		let r = n[e];
		r.isInGroup(t) && i.push(r);
	}
	return i.length == 0 && e.err("No node type or group '" + t + "' found"), i;
}
function fl(e) {
	if (e.eat("(")) {
		let t = ol(e);
		return e.eat(")") || e.err("Missing closing paren"), t;
	}
	if (/\W/.test(e.next)) e.err("Unexpected token '" + e.next + "'");
	else {
		let t = dl(e, e.next).map((t) => (e.inline == null ? e.inline = t.isInline : e.inline != t.isInline && e.err("Mixing inline and block content"), {
			type: "name",
			value: t
		}));
		return e.pos++, t.length == 1 ? t[0] : {
			type: "choice",
			exprs: t
		};
	}
}
function pl(e) {
	let t = [[]];
	return i(a(e, 0), n()), t;
	function n() {
		return t.push([]) - 1;
	}
	function r(e, n, r) {
		let i = {
			term: r,
			to: n
		};
		return t[e].push(i), i;
	}
	function i(e, t) {
		e.forEach((e) => e.to = t);
	}
	function a(e, t) {
		if (e.type == "choice") return e.exprs.reduce((e, n) => e.concat(a(n, t)), []);
		if (e.type == "seq") for (let r = 0;; r++) {
			let o = a(e.exprs[r], t);
			if (r == e.exprs.length - 1) return o;
			i(o, t = n());
		}
		else if (e.type == "star") {
			let o = n();
			return r(t, o), i(a(e.expr, o), o), [r(o)];
		} else if (e.type == "plus") {
			let o = n();
			return i(a(e.expr, t), o), i(a(e.expr, o), o), [r(o)];
		} else if (e.type == "opt") return [r(t)].concat(a(e.expr, t));
		else if (e.type == "range") {
			let o = t;
			for (let t = 0; t < e.min; t++) {
				let t = n();
				i(a(e.expr, o), t), o = t;
			}
			if (e.max == -1) i(a(e.expr, o), o);
			else for (let t = e.min; t < e.max; t++) {
				let t = n();
				r(o, t), i(a(e.expr, o), t), o = t;
			}
			return [r(o)];
		} else if (e.type == "name") return [r(t, void 0, e.value)];
		else throw Error("Unknown expr type");
	}
}
function ml(e, t) {
	return t - e;
}
function hl(e, t) {
	let n = [];
	return r(t), n.sort(ml);
	function r(t) {
		let i = e[t];
		if (i.length == 1 && !i[0].term) return r(i[0].to);
		n.push(t);
		for (let e = 0; e < i.length; e++) {
			let { term: t, to: a } = i[e];
			!t && n.indexOf(a) == -1 && r(a);
		}
	}
}
function gl(e) {
	let t = Object.create(null);
	return n(hl(e, 0));
	function n(r) {
		let i = [];
		r.forEach((t) => {
			e[t].forEach(({ term: t, to: n }) => {
				if (!t) return;
				let r;
				for (let e = 0; e < i.length; e++) i[e][0] == t && (r = i[e][1]);
				hl(e, n).forEach((e) => {
					r || i.push([t, r = []]), r.indexOf(e) == -1 && r.push(e);
				});
			});
		});
		let a = t[r.join(",")] = new il(r.indexOf(e.length - 1) > -1);
		for (let e = 0; e < i.length; e++) {
			let r = i[e][1].sort(ml);
			a.next.push({
				type: i[e][0],
				next: t[r.join(",")] || n(r)
			});
		}
		return a;
	}
}
function _l(e, t) {
	for (let n = 0, r = [e]; n < r.length; n++) {
		let e = r[n], i = !e.validEnd, a = [];
		for (let t = 0; t < e.next.length; t++) {
			let { type: n, next: o } = e.next[t];
			a.push(n.name), i && !(n.isText || n.hasRequiredAttrs()) && (i = !1), r.indexOf(o) == -1 && r.push(o);
		}
		i && t.err("Only non-generatable nodes (" + a.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
	}
}
function vl(e) {
	let t = Object.create(null);
	for (let n in e) {
		let r = e[n];
		if (!r.hasDefault) return null;
		t[n] = r.default;
	}
	return t;
}
function yl(e, t) {
	let n = Object.create(null);
	for (let r in e) {
		let i = e[r], a = t && t[r];
		if (a === void 0) {
			if (i.hasDefault) a = i.default;
			else throw RangeError("No value supplied for attribute " + r);
		} else i.validate && i.validate(a);
		n[r] = a;
	}
	return n;
}
function bl(e, t) {
	let n = Object.create(null);
	if (t) for (let r in t) n[r] = new Cl(e, r, t[r]);
	return n;
}
var xl = class e {
	constructor(e, t, n) {
		this.name = e, this.schema = t, this.spec = n, this.markSet = null, this.groups = n.group ? n.group.split(" ") : [], this.attrs = bl(e, n.attrs), this.defaultAttrs = vl(this.attrs), this.contentMatch = null, this.inlineContent = null, this.isBlock = !(n.inline || e == "text"), this.isText = e == "text";
	}
	get isInline() {
		return !this.isBlock;
	}
	get isTextblock() {
		return this.isBlock && this.inlineContent;
	}
	get isLeaf() {
		return this.contentMatch == il.empty;
	}
	get isAtom() {
		return this.isLeaf || !!this.spec.atom;
	}
	isInGroup(e) {
		return this.groups.indexOf(e) > -1;
	}
	get whitespace() {
		return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
	}
	hasRequiredAttrs() {
		for (let e in this.attrs) if (this.attrs[e].isRequired) return !0;
		return !1;
	}
	compatibleContent(e) {
		return this == e || this.contentMatch.compatible(e.contentMatch);
	}
	computeAttrs(e) {
		return !e && this.defaultAttrs ? this.defaultAttrs : yl(this.attrs, e);
	}
	create(e = null, t, n) {
		if (this.isText) throw Error("NodeType.create can't construct text nodes");
		return new $c(this, this.computeAttrs(e), I.from(t), L.setFrom(n));
	}
	createChecked(e = null, t, n) {
		return t = I.from(t), this.checkContent(t), new $c(this, this.computeAttrs(e), t, L.setFrom(n));
	}
	createAndFill(e = null, t, n) {
		if (e = this.computeAttrs(e), t = I.from(t), t.size) {
			let e = this.contentMatch.fillBefore(t);
			if (!e) return null;
			t = e.append(t);
		}
		let r = this.contentMatch.matchFragment(t), i = r && r.fillBefore(I.empty, !0);
		return i ? new $c(this, e, t.append(i), L.setFrom(n)) : null;
	}
	validContent(e) {
		let t = this.contentMatch.matchFragment(e);
		if (!t || !t.validEnd) return !1;
		for (let t = 0; t < e.childCount; t++) if (!this.allowsMarks(e.child(t).marks)) return !1;
		return !0;
	}
	checkContent(e) {
		if (!this.validContent(e)) throw RangeError(`Invalid content for node ${this.name}: ${e.toString().slice(0, 50)}`);
	}
	checkAttrs(e) {}
	allowsMarkType(e) {
		return this.markSet == null || this.markSet.indexOf(e) > -1;
	}
	allowsMarks(e) {
		if (this.markSet == null) return !0;
		for (let t = 0; t < e.length; t++) if (!this.allowsMarkType(e[t].type)) return !1;
		return !0;
	}
	allowedMarks(e) {
		if (this.markSet == null) return e;
		let t;
		for (let n = 0; n < e.length; n++) this.allowsMarkType(e[n].type) ? t && t.push(e[n]) : t ||= e.slice(0, n);
		return t ? t.length ? t : L.none : e;
	}
	static compile(t, n) {
		let r = Object.create(null);
		t.forEach((t, i) => r[t] = new e(t, n, i));
		let i = n.spec.topNode || "doc";
		if (!r[i]) throw RangeError("Schema is missing its top node type ('" + i + "')");
		if (!r.text) throw RangeError("Every schema needs a 'text' type");
		for (let e in r.text.attrs) throw RangeError("The text node type should not have attributes");
		return r;
	}
};
function Sl(e, t, n) {
	let r = n.split("|");
	return (n) => {
		let i = n === null ? "null" : typeof n;
		if (r.indexOf(i) < 0) throw RangeError(`Expected value of type ${r} for attribute ${t} on type ${e}, got ${i}`);
	};
}
var Cl = class {
	constructor(e, t, n) {
		this.hasDefault = Object.prototype.hasOwnProperty.call(n, "default"), this.default = n.default, this.validate = typeof n.validate == "string" ? Sl(e, t, n.validate) : n.validate;
	}
	get isRequired() {
		return !this.hasDefault;
	}
}, wl = class e {
	constructor(e, t, n, r) {
		this.name = e, this.rank = t, this.schema = n, this.spec = r, this.attrs = bl(e, r.attrs), this.excluded = null;
		let i = vl(this.attrs);
		this.instance = i ? new L(this, i) : null;
	}
	create(e = null) {
		return !e && this.instance ? this.instance : new L(this, yl(this.attrs, e));
	}
	static compile(t, n) {
		let r = Object.create(null), i = 0;
		return t.forEach((t, a) => r[t] = new e(t, i++, n, a)), r;
	}
	removeFromSet(e) {
		for (var t = 0; t < e.length; t++) e[t].type == this && (e = e.slice(0, t).concat(e.slice(t + 1)), t--);
		return e;
	}
	isInSet(e) {
		for (let t = 0; t < e.length; t++) if (e[t].type == this) return e[t];
	}
	excludes(e) {
		return this.excluded.indexOf(e) > -1;
	}
}, Tl = class {
	constructor(e) {
		this.linebreakReplacement = null, this.cached = Object.create(null);
		let t = this.spec = {};
		for (let n in e) t[n] = e[n];
		t.nodes = Ec.from(e.nodes), t.marks = Ec.from(e.marks || {}), this.nodes = xl.compile(this.spec.nodes, this), this.marks = wl.compile(this.spec.marks, this);
		let n = Object.create(null);
		for (let e in this.nodes) {
			if (e in this.marks) throw RangeError(e + " can not be both a node and a mark");
			let t = this.nodes[e], r = t.spec.content || "", i = t.spec.marks;
			if (t.contentMatch = n[r] || (n[r] = il.parse(r, this.nodes)), t.inlineContent = t.contentMatch.inlineContent, t.spec.linebreakReplacement) {
				if (this.linebreakReplacement) throw RangeError("Multiple linebreak nodes defined");
				if (!t.isInline || !t.isLeaf) throw RangeError("Linebreak replacement nodes must be inline leaf nodes");
				this.linebreakReplacement = t;
			}
			t.markSet = i == "_" ? null : i ? El(this, i.split(" ")) : i == "" || !t.inlineContent ? [] : null;
		}
		for (let e in this.marks) {
			let t = this.marks[e], n = t.spec.excludes;
			t.excluded = n == null ? [t] : n == "" ? [] : El(this, n.split(" "));
		}
		this.nodeFromJSON = (e) => $c.fromJSON(this, e), this.markFromJSON = (e) => L.fromJSON(this, e), this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached.wrappings = Object.create(null);
	}
	node(e, t = null, n, r) {
		if (typeof e == "string") e = this.nodeType(e);
		else if (!(e instanceof xl)) throw RangeError("Invalid node type: " + e);
		else if (e.schema != this) throw RangeError("Node type from different schema used (" + e.name + ")");
		return e.createChecked(t, n, r);
	}
	text(e, t) {
		let n = this.nodes.text;
		return new tl(n, n.defaultAttrs, e, L.setFrom(t));
	}
	mark(e, t) {
		return typeof e == "string" && (e = this.marks[e]), e.create(t);
	}
	nodeType(e) {
		let t = this.nodes[e];
		if (!t) throw RangeError("Unknown node type: " + e);
		return t;
	}
};
function El(e, t) {
	let n = [];
	for (let r = 0; r < t.length; r++) {
		let i = t[r], a = e.marks[i], o = a;
		if (a) n.push(a);
		else for (let t in e.marks) {
			let r = e.marks[t];
			(i == "_" || r.spec.group && r.spec.group.split(" ").indexOf(i) > -1) && n.push(o = r);
		}
		if (!o) throw SyntaxError("Unknown mark type: '" + t[r] + "'");
	}
	return n;
}
function Dl(e) {
	return e.tag != null;
}
function Ol(e) {
	return e.style != null;
}
var kl = class e {
	constructor(e, t) {
		this.schema = e, this.rules = t, this.tags = [], this.styles = [];
		let n = this.matchedStyles = [];
		t.forEach((e) => {
			if (Dl(e)) this.tags.push(e);
			else if (Ol(e)) {
				let t = /[^=]*/.exec(e.style)[0];
				n.indexOf(t) < 0 && n.push(t), this.styles.push(e);
			}
		}), this.normalizeLists = !this.tags.some((t) => {
			if (!/^(ul|ol)\b/.test(t.tag) || !t.node) return !1;
			let n = e.nodes[t.node];
			return n.contentMatch.matchType(n);
		});
	}
	parse(e, t = {}) {
		let n = new Rl(this, t, !1);
		return n.addAll(e, L.none, t.from, t.to), n.finish();
	}
	parseSlice(e, t = {}) {
		let n = new Rl(this, t, !0);
		return n.addAll(e, L.none, t.from, t.to), R.maxOpen(n.finish());
	}
	matchTag(e, t, n) {
		for (let r = n ? this.tags.indexOf(n) + 1 : 0; r < this.tags.length; r++) {
			let n = this.tags[r];
			if (Bl(e, n.tag) && (n.namespace === void 0 || e.namespaceURI == n.namespace) && (!n.context || t.matchesContext(n.context))) {
				if (n.getAttrs) {
					let t = n.getAttrs(e);
					if (t === !1) continue;
					n.attrs = t || void 0;
				}
				return n;
			}
		}
	}
	matchStyle(e, t, n, r) {
		for (let i = r ? this.styles.indexOf(r) + 1 : 0; i < this.styles.length; i++) {
			let r = this.styles[i], a = r.style;
			if (!(a.indexOf(e) != 0 || r.context && !n.matchesContext(r.context) || a.length > e.length && (a.charCodeAt(e.length) != 61 || a.slice(e.length + 1) != t))) {
				if (r.getAttrs) {
					let e = r.getAttrs(t);
					if (e === !1) continue;
					r.attrs = e || void 0;
				}
				return r;
			}
		}
	}
	static schemaRules(e) {
		let t = [];
		function n(e) {
			let n = e.priority == null ? 50 : e.priority, r = 0;
			for (; r < t.length; r++) {
				let e = t[r];
				if ((e.priority == null ? 50 : e.priority) < n) break;
			}
			t.splice(r, 0, e);
		}
		for (let t in e.marks) {
			let r = e.marks[t].spec.parseDOM;
			r && r.forEach((e) => {
				n(e = Vl(e)), e.mark || e.ignore || e.clearMark || (e.mark = t);
			});
		}
		for (let t in e.nodes) {
			let r = e.nodes[t].spec.parseDOM;
			r && r.forEach((e) => {
				n(e = Vl(e)), e.node || e.ignore || e.mark || (e.node = t);
			});
		}
		return t;
	}
	static fromSchema(t) {
		return t.cached.domParser || (t.cached.domParser = new e(t, e.schemaRules(t)));
	}
}, Al = {
	address: !0,
	article: !0,
	aside: !0,
	blockquote: !0,
	body: !0,
	canvas: !0,
	dd: !0,
	div: !0,
	dl: !0,
	fieldset: !0,
	figcaption: !0,
	figure: !0,
	footer: !0,
	form: !0,
	h1: !0,
	h2: !0,
	h3: !0,
	h4: !0,
	h5: !0,
	h6: !0,
	header: !0,
	hgroup: !0,
	hr: !0,
	li: !0,
	noscript: !0,
	ol: !0,
	output: !0,
	p: !0,
	pre: !0,
	section: !0,
	table: !0,
	tfoot: !0,
	ul: !0
}, jl = {
	head: !0,
	noscript: !0,
	object: !0,
	script: !0,
	style: !0,
	title: !0
}, Ml = {
	ol: !0,
	ul: !0
}, Nl = 1, Pl = 2, Fl = 4;
function Il(e, t, n) {
	return t == null ? e && e.whitespace == "pre" ? 3 : n & -5 : (t ? Nl : 0) | (t === "full" ? Pl : 0);
}
var Ll = class {
	constructor(e, t, n, r, i, a) {
		this.type = e, this.attrs = t, this.marks = n, this.solid = r, this.options = a, this.content = [], this.activeMarks = L.none, this.match = i || (a & Fl ? null : e.contentMatch);
	}
	findWrapping(e) {
		if (!this.match) {
			if (!this.type) return [];
			let t = this.type.contentMatch.fillBefore(I.from(e));
			if (t) this.match = this.type.contentMatch.matchFragment(t);
			else {
				let t = this.type.contentMatch, n;
				return (n = t.findWrapping(e.type)) ? (this.match = t, n) : null;
			}
		}
		return this.match.findWrapping(e.type);
	}
	finish(e) {
		if (!(this.options & Nl)) {
			let e = this.content[this.content.length - 1], t;
			if (e && e.isText && (t = /[ \t\r\n\u000c]+$/.exec(e.text))) {
				let n = e;
				e.text.length == t[0].length ? this.content.pop() : this.content[this.content.length - 1] = n.withText(n.text.slice(0, n.text.length - t[0].length));
			}
		}
		let t = I.from(this.content);
		return !e && this.match && (t = t.append(this.match.fillBefore(I.empty, !0))), this.type ? this.type.create(this.attrs, t, this.marks) : t;
	}
	inlineContext(e) {
		return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : e.parentNode && !Al.hasOwnProperty(e.parentNode.nodeName.toLowerCase());
	}
}, Rl = class {
	constructor(e, t, n) {
		this.parser = e, this.options = t, this.isOpen = n, this.open = 0, this.localPreserveWS = !1;
		let r = t.topNode, i, a = Il(null, t.preserveWhitespace, 0) | (n ? Fl : 0);
		i = r ? new Ll(r.type, r.attrs, L.none, !0, t.topMatch || r.type.contentMatch, a) : n ? new Ll(null, null, L.none, !0, null, a) : new Ll(e.schema.topNodeType, null, L.none, !0, null, a), this.nodes = [i], this.find = t.findPositions, this.needsBlock = !1;
	}
	get top() {
		return this.nodes[this.open];
	}
	addDOM(e, t) {
		e.nodeType == 3 ? this.addTextNode(e, t) : e.nodeType == 1 && this.addElement(e, t);
	}
	addTextNode(e, t) {
		let n = e.nodeValue, r = this.top, i = r.options & Pl ? "full" : this.localPreserveWS || (r.options & Nl) > 0, { schema: a } = this.parser;
		if (i === "full" || r.inlineContext(e) || /[^ \t\r\n\u000c]/.test(n)) {
			if (!i) {
				if (n = n.replace(/[ \t\r\n\u000c]+/g, " "), /^[ \t\r\n\u000c]/.test(n) && this.open == this.nodes.length - 1) {
					let t = r.content[r.content.length - 1], i = e.previousSibling;
					(!t || i && i.nodeName == "BR" || t.isText && /[ \t\r\n\u000c]$/.test(t.text)) && (n = n.slice(1));
				}
			} else if (i === "full") n = n.replace(/\r\n?/g, "\n");
			else if (a.linebreakReplacement && /[\r\n]/.test(n) && this.top.findWrapping(a.linebreakReplacement.create())) {
				let e = n.split(/\r?\n|\r/);
				for (let n = 0; n < e.length; n++) n && this.insertNode(a.linebreakReplacement.create(), t, !0), e[n] && this.insertNode(a.text(e[n]), t, !/\S/.test(e[n]));
				n = "";
			} else n = n.replace(/\r?\n|\r/g, " ");
			n && this.insertNode(a.text(n), t, !/\S/.test(n)), this.findInText(e);
		} else this.findInside(e);
	}
	addElement(e, t, n) {
		let r = this.localPreserveWS, i = this.top;
		(e.tagName == "PRE" || /pre/.test(e.style && e.style.whiteSpace)) && (this.localPreserveWS = !0);
		let a = e.nodeName.toLowerCase(), o;
		Ml.hasOwnProperty(a) && this.parser.normalizeLists && zl(e);
		let s = this.options.ruleFromNode && this.options.ruleFromNode(e) || (o = this.parser.matchTag(e, this, n));
		out: if (s ? s.ignore : jl.hasOwnProperty(a)) this.findInside(e), this.ignoreFallback(e, t);
		else if (!s || s.skip || s.closeParent) {
			s && s.closeParent ? this.open = Math.max(0, this.open - 1) : s && s.skip.nodeType && (e = s.skip);
			let n, r = this.needsBlock;
			if (Al.hasOwnProperty(a)) i.content.length && i.content[0].isInline && this.open && (this.open--, i = this.top), n = !0, i.type || (this.needsBlock = !0);
			else if (!e.firstChild) {
				this.leafFallback(e, t);
				break out;
			}
			let o = s && s.skip ? t : this.readStyles(e, t);
			o && this.addAll(e, o), n && this.sync(i), this.needsBlock = r;
		} else {
			let n = this.readStyles(e, t);
			n && this.addElementByRule(e, s, n, s.consuming === !1 ? o : void 0);
		}
		this.localPreserveWS = r;
	}
	leafFallback(e, t) {
		e.nodeName == "BR" && this.top.type && this.top.type.inlineContent && this.addTextNode(e.ownerDocument.createTextNode("\n"), t);
	}
	ignoreFallback(e, t) {
		e.nodeName != "BR" || this.top.type && this.top.type.inlineContent || this.findPlace(this.parser.schema.text("-"), t, !0);
	}
	readStyles(e, t) {
		let n = e.style;
		if (n && n.length) for (let e = 0; e < this.parser.matchedStyles.length; e++) {
			let r = this.parser.matchedStyles[e], i = n.getPropertyValue(r);
			if (i) for (let e;;) {
				let n = this.parser.matchStyle(r, i, this, e);
				if (!n) break;
				if (n.ignore) return null;
				if (t = n.clearMark ? t.filter((e) => !n.clearMark(e)) : t.concat(this.parser.schema.marks[n.mark].create(n.attrs)), n.consuming === !1) e = n;
				else break;
			}
		}
		return t;
	}
	addElementByRule(e, t, n, r) {
		let i, a;
		if (t.node) {
			if (a = this.parser.schema.nodes[t.node], a.isLeaf) this.insertNode(a.create(t.attrs), n, e.nodeName == "BR") || this.leafFallback(e, n);
			else {
				let e = this.enter(a, t.attrs || null, n, t.preserveWhitespace);
				e && (i = !0, n = e);
			}
		} else {
			let e = this.parser.schema.marks[t.mark];
			n = n.concat(e.create(t.attrs));
		}
		let o = this.top;
		if (a && a.isLeaf) this.findInside(e);
		else if (r) this.addElement(e, n, r);
		else if (t.getContent) this.findInside(e), t.getContent(e, this.parser.schema).forEach((e) => this.insertNode(e, n, !1));
		else {
			let r = e;
			typeof t.contentElement == "string" ? r = e.querySelector(t.contentElement) : typeof t.contentElement == "function" ? r = t.contentElement(e) : t.contentElement && (r = t.contentElement), this.findAround(e, r, !0), this.addAll(r, n), this.findAround(e, r, !1);
		}
		i && this.sync(o) && this.open--;
	}
	addAll(e, t, n, r) {
		let i = n || 0;
		for (let a = n ? e.childNodes[n] : e.firstChild, o = r == null ? null : e.childNodes[r]; a != o; a = a.nextSibling, ++i) this.findAtPoint(e, i), this.addDOM(a, t);
		this.findAtPoint(e, i);
	}
	findPlace(e, t, n) {
		let r, i;
		for (let t = this.open, a = 0; t >= 0; t--) {
			let o = this.nodes[t], s = o.findWrapping(e);
			if (s && (!r || r.length > s.length + a) && (r = s, i = o, !s.length)) break;
			if (o.solid) {
				if (n) break;
				a += 2;
			}
		}
		if (!r) return null;
		this.sync(i);
		for (let e = 0; e < r.length; e++) t = this.enterInner(r[e], null, t, !1);
		return t;
	}
	insertNode(e, t, n) {
		if (e.isInline && this.needsBlock && !this.top.type) {
			let e = this.textblockFromContext();
			e && (t = this.enterInner(e, null, t));
		}
		let r = this.findPlace(e, t, n);
		if (r) {
			this.closeExtra();
			let t = this.top;
			t.match &&= t.match.matchType(e.type);
			let n = L.none;
			for (let i of r.concat(e.marks)) (t.type ? t.type.allowsMarkType(i.type) : Hl(i.type, e.type)) && (n = i.addToSet(n));
			return t.content.push(e.mark(n)), !0;
		}
		return !1;
	}
	enter(e, t, n, r) {
		let i = this.findPlace(e.create(t), n, !1);
		return i &&= this.enterInner(e, t, n, !0, r), i;
	}
	enterInner(e, t, n, r = !1, i) {
		this.closeExtra();
		let a = this.top;
		a.match = a.match && a.match.matchType(e);
		let o = Il(e, i, a.options);
		a.options & Fl && a.content.length == 0 && (o |= Fl);
		let s = L.none;
		return n = n.filter((t) => !(a.type ? a.type.allowsMarkType(t.type) : Hl(t.type, e)) || (s = t.addToSet(s), !1)), this.nodes.push(new Ll(e, t, s, r, null, o)), this.open++, n;
	}
	closeExtra(e = !1) {
		let t = this.nodes.length - 1;
		if (t > this.open) {
			for (; t > this.open; t--) this.nodes[t - 1].content.push(this.nodes[t].finish(e));
			this.nodes.length = this.open + 1;
		}
	}
	finish() {
		return this.open = 0, this.closeExtra(this.isOpen), this.nodes[0].finish(!!(this.isOpen || this.options.topOpen));
	}
	sync(e) {
		for (let t = this.open; t >= 0; t--) if (this.nodes[t] == e) return this.open = t, !0;
		else this.localPreserveWS && (this.nodes[t].options |= Nl);
		return !1;
	}
	get currentPos() {
		this.closeExtra();
		let e = 0;
		for (let t = this.open; t >= 0; t--) {
			let n = this.nodes[t].content;
			for (let t = n.length - 1; t >= 0; t--) e += n[t].nodeSize;
			t && e++;
		}
		return e;
	}
	findAtPoint(e, t) {
		if (this.find) for (let n = 0; n < this.find.length; n++) this.find[n].node == e && this.find[n].offset == t && (this.find[n].pos = this.currentPos);
	}
	findInside(e) {
		if (this.find) for (let t = 0; t < this.find.length; t++) this.find[t].pos == null && e.nodeType == 1 && e.contains(this.find[t].node) && (this.find[t].pos = this.currentPos);
	}
	findAround(e, t, n) {
		if (e != t && this.find) for (let r = 0; r < this.find.length; r++) this.find[r].pos == null && e.nodeType == 1 && e.contains(this.find[r].node) && t.compareDocumentPosition(this.find[r].node) & (n ? 2 : 4) && (this.find[r].pos = this.currentPos);
	}
	findInText(e) {
		if (this.find) for (let t = 0; t < this.find.length; t++) this.find[t].node == e && (this.find[t].pos = this.currentPos - (e.nodeValue.length - this.find[t].offset));
	}
	matchesContext(e) {
		if (e.indexOf("|") > -1) return e.split(/\s*\|\s*/).some(this.matchesContext, this);
		let t = e.split("/"), n = this.options.context, r = !this.isOpen && (!n || n.parent.type == this.nodes[0].type), i = -(n ? n.depth + 1 : 0) + +!r, a = (e, o) => {
			for (; e >= 0; e--) {
				let s = t[e];
				if (s == "") {
					if (e == t.length - 1 || e == 0) continue;
					for (; o >= i; o--) if (a(e - 1, o)) return !0;
					return !1;
				}
				{
					let e = o > 0 || o == 0 && r ? this.nodes[o].type : n && o >= i ? n.node(o - i).type : null;
					if (!e || e.name != s && !e.isInGroup(s)) return !1;
					o--;
				}
			}
			return !0;
		};
		return a(t.length - 1, this.open);
	}
	textblockFromContext() {
		let e = this.options.context;
		if (e) for (let t = e.depth; t >= 0; t--) {
			let n = e.node(t).contentMatchAt(e.indexAfter(t)).defaultType;
			if (n && n.isTextblock && n.defaultAttrs) return n;
		}
		for (let e in this.parser.schema.nodes) {
			let t = this.parser.schema.nodes[e];
			if (t.isTextblock && t.defaultAttrs) return t;
		}
	}
};
function zl(e) {
	for (let t = e.firstChild, n = null; t; t = t.nextSibling) {
		let e = t.nodeType == 1 ? t.nodeName.toLowerCase() : null;
		e && Ml.hasOwnProperty(e) && n ? (n.appendChild(t), t = n) : e == "li" ? n = t : e && (n = null);
	}
}
function Bl(e, t) {
	return (e.matches || e.msMatchesSelector || e.webkitMatchesSelector || e.mozMatchesSelector).call(e, t);
}
function Vl(e) {
	let t = {};
	for (let n in e) t[n] = e[n];
	return t;
}
function Hl(e, t) {
	let n = t.schema.nodes;
	for (let r in n) {
		let i = n[r];
		if (!i.allowsMarkType(e)) continue;
		let a = [], o = (e) => {
			a.push(e);
			for (let n = 0; n < e.edgeCount; n++) {
				let { type: r, next: i } = e.edge(n);
				if (r == t || a.indexOf(i) < 0 && o(i)) return !0;
			}
		};
		if (o(i.contentMatch)) return !0;
	}
}
var Ul = class e {
	constructor(e, t) {
		this.nodes = e, this.marks = t;
	}
	serializeFragment(e, t = {}, n) {
		n ||= Gl(t).createDocumentFragment();
		let r = n, i = [];
		return e.forEach((e) => {
			if (i.length || e.marks.length) {
				let n = 0, a = 0;
				for (; n < i.length && a < e.marks.length;) {
					let t = e.marks[a];
					if (!this.marks[t.type.name]) a++;
					else {
						if (!t.eq(i[n][0]) || t.type.spec.spanning === !1) break;
						n++, a++;
					}
				}
				for (; n < i.length;) r = i.pop()[1];
				for (; a < e.marks.length;) {
					let n = e.marks[a++], o = this.serializeMark(n, e.isInline, t);
					o && (i.push([n, r]), r.appendChild(o.dom), r = o.contentDOM || o.dom);
				}
			}
			r.appendChild(this.serializeNodeInner(e, t));
		}), n;
	}
	serializeNodeInner(e, t) {
		if (e.isText) return Gl(t).createTextNode(e.text);
		let { dom: n, contentDOM: r } = Yl(Gl(t), this.nodes[e.type.name](e), null, e.attrs);
		if (r) {
			if (e.isLeaf) throw RangeError("Content hole not allowed in a leaf node spec");
			this.serializeFragment(e.content, t, r);
		}
		return n;
	}
	serializeNode(e, t = {}) {
		let n = this.serializeNodeInner(e, t);
		for (let r = e.marks.length - 1; r >= 0; r--) {
			let i = this.serializeMark(e.marks[r], e.isInline, t);
			i && ((i.contentDOM || i.dom).appendChild(n), n = i.dom);
		}
		return n;
	}
	serializeMark(e, t, n = {}) {
		let r = this.marks[e.type.name];
		return r && Yl(Gl(n), r(e, t), null, e.attrs);
	}
	static renderSpec(e, t, n = null, r) {
		return typeof t == "string" ? { dom: e.createTextNode(t) } : Yl(e, t, n, r);
	}
	static fromSchema(t) {
		return t.cached.domSerializer || (t.cached.domSerializer = new e(this.nodesFromSchema(t), this.marksFromSchema(t)));
	}
	static nodesFromSchema(e) {
		let t = Wl(e.nodes);
		return t.text ||= (e) => e.text, t;
	}
	static marksFromSchema(e) {
		return Wl(e.marks);
	}
};
function Wl(e) {
	let t = {};
	for (let n in e) {
		let r = e[n].spec.toDOM;
		r && (t[n] = r);
	}
	return t;
}
function Gl(e) {
	return e.document || window.document;
}
var Kl = /* @__PURE__ */ new WeakMap();
function ql(e) {
	let t = Kl.get(e);
	return t === void 0 && Kl.set(e, t = Jl(e)), t;
}
function Jl(e) {
	let t = null;
	function n(e) {
		if (e && typeof e == "object") {
			if (Array.isArray(e)) {
				if (typeof e[0] == "string") t ||= [], t.push(e);
				else for (let t = 0; t < e.length; t++) n(e[t]);
			} else for (let t in e) n(e[t]);
		}
	}
	return n(e), t;
}
function Yl(e, t, n, r) {
	if (t.nodeType == 1) return { dom: t };
	if (t.dom && t.dom.nodeType == 1) return t;
	let i = t[0], a;
	if (typeof i != "string") throw RangeError("Invalid array passed to renderSpec");
	if (r && (a = ql(r)) && a.indexOf(t) > -1) throw RangeError("Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.");
	let o = i.indexOf(" ");
	o > 0 && (n = i.slice(0, o), i = i.slice(o + 1));
	let s, c = n ? e.createElementNS(n, i) : e.createElement(i), l = t[1], u = 1;
	if (l && typeof l == "object" && l.nodeType == null && !Array.isArray(l)) {
		u = 2;
		for (let e in l) if (l[e] != null) {
			let t = e.indexOf(" ");
			t > 0 ? c.setAttributeNS(e.slice(0, t), e.slice(t + 1), l[e]) : e == "style" && c.style ? c.style.cssText = l[e] : c.setAttribute(e, l[e]);
		}
	}
	for (let i = u; i < t.length; i++) {
		let a = t[i];
		if (a === 0) {
			if (i < t.length - 1 || i > u) throw RangeError("Content hole must be the only child of its parent node");
			return {
				dom: c,
				contentDOM: c
			};
		}
		if (typeof a == "string") c.appendChild(e.createTextNode(a));
		else {
			let { dom: t, contentDOM: i } = Yl(e, a, n, r);
			if (c.appendChild(t), i) {
				if (s) throw RangeError("Multiple content holes");
				s = i;
			}
		}
	}
	return {
		dom: c,
		contentDOM: s
	};
}
// node_modules/prosemirror-transform/dist/index.js
var Xl = 65535, Zl = 2 ** 16;
function Ql(e, t) {
	return e + t * Zl;
}
function $l(e) {
	return e & Xl;
}
function eu(e) {
	return (e - (e & Xl)) / Zl;
}
var tu = 1, nu = 2, ru = 4, iu = 8, au = class {
	constructor(e, t, n) {
		this.pos = e, this.delInfo = t, this.recover = n;
	}
	get deleted() {
		return (this.delInfo & iu) > 0;
	}
	get deletedBefore() {
		return (this.delInfo & 5) > 0;
	}
	get deletedAfter() {
		return (this.delInfo & 6) > 0;
	}
	get deletedAcross() {
		return (this.delInfo & ru) > 0;
	}
}, ou = class e {
	constructor(t, n = !1) {
		if (this.ranges = t, this.inverted = n, !t.length && e.empty) return e.empty;
	}
	recover(e) {
		let t = 0, n = $l(e);
		if (!this.inverted) for (let e = 0; e < n; e++) t += this.ranges[e * 3 + 2] - this.ranges[e * 3 + 1];
		return this.ranges[n * 3] + t + eu(e);
	}
	mapResult(e, t = 1) {
		return this._map(e, t, !1);
	}
	map(e, t = 1) {
		return this._map(e, t, !0);
	}
	_map(e, t, n) {
		let r = 0, i = this.inverted ? 2 : 1, a = this.inverted ? 1 : 2;
		for (let o = 0; o < this.ranges.length; o += 3) {
			let s = this.ranges[o] - (this.inverted ? r : 0);
			if (s > e) break;
			let c = this.ranges[o + i], l = this.ranges[o + a], u = s + c;
			if (e <= u) {
				let i = c ? e == s ? -1 : e == u ? 1 : t : t, a = s + r + (i < 0 ? 0 : l);
				if (n) return a;
				let d = e == (t < 0 ? s : u) ? null : Ql(o / 3, e - s), f = 0;
				return c && (f |= e == s ? nu : e == u ? tu : ru, (t < 0 ? e != s : e != u) && (f |= iu)), new au(a, f, d);
			}
			r += l - c;
		}
		return n ? e + r : new au(e + r, 0, null);
	}
	touches(e, t) {
		let n = 0, r = $l(t), i = this.inverted ? 2 : 1, a = this.inverted ? 1 : 2;
		for (let t = 0; t < this.ranges.length; t += 3) {
			let o = this.ranges[t] - (this.inverted ? n : 0);
			if (o > e) break;
			let s = this.ranges[t + i];
			if (e <= o + s && t == r * 3) return !0;
			n += this.ranges[t + a] - s;
		}
		return !1;
	}
	forEach(e) {
		let t = this.inverted ? 2 : 1, n = this.inverted ? 1 : 2;
		for (let r = 0, i = 0; r < this.ranges.length; r += 3) {
			let a = this.ranges[r], o = a - (this.inverted ? i : 0), s = a + (this.inverted ? 0 : i), c = this.ranges[r + t], l = this.ranges[r + n];
			e(o, o + c, s, s + l), i += l - c;
		}
	}
	invert() {
		return new e(this.ranges, !this.inverted);
	}
	toString() {
		return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
	}
	static offset(t) {
		return t == 0 ? e.empty : new e(t < 0 ? [
			0,
			-t,
			0
		] : [
			0,
			0,
			t
		]);
	}
};
ou.empty = new ou([]);
var su = class e {
	constructor(e, t, n = 0, r = e ? e.length : 0) {
		this.mirror = t, this.from = n, this.to = r, this._maps = e || [], this.ownData = !(e || t);
	}
	get maps() {
		return this._maps;
	}
	slice(t = 0, n = this.maps.length) {
		return new e(this._maps, this.mirror, t, n);
	}
	appendMap(e, t) {
		this.ownData ||= (this._maps = this._maps.slice(), this.mirror = this.mirror && this.mirror.slice(), !0), this.to = this._maps.push(e), t != null && this.setMirror(this._maps.length - 1, t);
	}
	appendMapping(e) {
		for (let t = 0, n = this._maps.length; t < e._maps.length; t++) {
			let r = e.getMirror(t);
			this.appendMap(e._maps[t], r != null && r < t ? n + r : void 0);
		}
	}
	getMirror(e) {
		if (this.mirror) {
			for (let t = 0; t < this.mirror.length; t++) if (this.mirror[t] == e) return this.mirror[t + (t % 2 ? -1 : 1)];
		}
	}
	setMirror(e, t) {
		this.mirror ||= [], this.mirror.push(e, t);
	}
	appendMappingInverted(e) {
		for (let t = e.maps.length - 1, n = this._maps.length + e._maps.length; t >= 0; t--) {
			let r = e.getMirror(t);
			this.appendMap(e._maps[t].invert(), r != null && r > t ? n - r - 1 : void 0);
		}
	}
	invert() {
		let t = new e();
		return t.appendMappingInverted(this), t;
	}
	map(e, t = 1) {
		if (this.mirror) return this._map(e, t, !0);
		for (let n = this.from; n < this.to; n++) e = this._maps[n].map(e, t);
		return e;
	}
	mapResult(e, t = 1) {
		return this._map(e, t, !1);
	}
	_map(e, t, n) {
		let r = 0;
		for (let n = this.from; n < this.to; n++) {
			let i = this._maps[n].mapResult(e, t);
			if (i.recover != null) {
				let t = this.getMirror(n);
				if (t != null && t > n && t < this.to) {
					n = t, e = this._maps[t].recover(i.recover);
					continue;
				}
			}
			r |= i.delInfo, e = i.pos;
		}
		return n ? e : new au(e, r, null);
	}
}, cu = Object.create(null), lu = class {
	getMap() {
		return ou.empty;
	}
	merge(e) {
		return null;
	}
	static fromJSON(e, t) {
		if (!t || !t.stepType) throw RangeError("Invalid input for Step.fromJSON");
		let n = cu[t.stepType];
		if (!n) throw RangeError(`No step type ${t.stepType} defined`);
		return n.fromJSON(e, t);
	}
	static jsonID(e, t) {
		if (e in cu) throw RangeError("Duplicate use of step JSON ID " + e);
		return cu[e] = t, t.prototype.jsonID = e, t;
	}
}, uu = class e {
	constructor(e, t) {
		this.doc = e, this.failed = t;
	}
	static ok(t) {
		return new e(t, null);
	}
	static fail(t) {
		return new e(null, t);
	}
	static fromReplace(t, n, r, i) {
		try {
			return e.ok(t.replace(n, r, i));
		} catch (t) {
			if (t instanceof Pc) return e.fail(t.message);
			throw t;
		}
	}
};
function du(e, t, n) {
	let r = [];
	for (let i = 0; i < e.childCount; i++) {
		let a = e.child(i);
		a.content.size && (a = a.copy(du(a.content, t, a))), a.isInline && (a = t(a, n, i)), r.push(a);
	}
	return I.fromArray(r);
}
var fu = class e extends lu {
	constructor(e, t, n) {
		super(), this.from = e, this.to = t, this.mark = n;
	}
	apply(e) {
		let t = e.slice(this.from, this.to), n = e.resolve(this.from), r = n.node(n.sharedDepth(this.to)), i = new R(du(t.content, (e, t) => !e.isAtom || !t.type.allowsMarkType(this.mark.type) ? e : e.mark(this.mark.addToSet(e.marks)), r), t.openStart, t.openEnd);
		return uu.fromReplace(e, this.from, this.to, i);
	}
	invert(t) {
		let n = [];
		return t.nodesBetween(this.from, this.to, (t, r) => {
			if (t.isInline && t.isAtom) {
				let i = this.mark.addToSet(t.marks);
				if (!L.sameSet(i, t.marks)) {
					let a = Math.max(this.from, r), o = Math.min(this.to, r + t.nodeSize);
					mu(pu, a, o, this.mark, n);
					for (let r of t.marks) r.isInSet(i) || mu(e, a, o, r, n);
				}
			}
		}), n.length == 1 ? n[0] : new hu(n);
	}
	map(t) {
		let n = t.map(this.from, 1), r = t.map(this.to, -1);
		return n >= r ? null : new e(n, r, this.mark);
	}
	merge(t) {
		return t instanceof e && t.mark.eq(this.mark) && this.from <= t.to && this.to >= t.from ? new e(Math.min(this.from, t.from), Math.max(this.to, t.to), this.mark) : null;
	}
	toJSON() {
		return {
			stepType: "addMark",
			mark: this.mark.toJSON(),
			from: this.from,
			to: this.to
		};
	}
	static fromJSON(t, n) {
		if (typeof n.from != "number" || typeof n.to != "number") throw RangeError("Invalid input for AddMarkStep.fromJSON");
		return new e(n.from, n.to, t.markFromJSON(n.mark));
	}
};
lu.jsonID("addMark", fu);
var pu = class e extends lu {
	constructor(e, t, n) {
		super(), this.from = e, this.to = t, this.mark = n;
	}
	apply(e) {
		let t = e.slice(this.from, this.to), n = new R(du(t.content, (e) => e.mark(this.mark.removeFromSet(e.marks)), e), t.openStart, t.openEnd);
		return uu.fromReplace(e, this.from, this.to, n);
	}
	invert(e) {
		let t = [];
		return e.nodesBetween(this.from, this.to, (e, n) => {
			e.isInline && e.isAtom && this.mark.isInSet(e.marks) && mu(fu, Math.max(this.from, n), Math.min(this.to, n + e.nodeSize), this.mark, t);
		}), t.length == 1 ? t[0] : new hu(t);
	}
	map(t) {
		let n = t.map(this.from, 1), r = t.map(this.to, -1);
		return n >= r ? null : new e(n, r, this.mark);
	}
	merge(t) {
		return t instanceof e && t.mark.eq(this.mark) && this.from <= t.to && this.to >= t.from ? new e(Math.min(this.from, t.from), Math.max(this.to, t.to), this.mark) : null;
	}
	toJSON() {
		return {
			stepType: "removeMark",
			mark: this.mark.toJSON(),
			from: this.from,
			to: this.to
		};
	}
	static fromJSON(t, n) {
		if (typeof n.from != "number" || typeof n.to != "number") throw RangeError("Invalid input for RemoveMarkStep.fromJSON");
		return new e(n.from, n.to, t.markFromJSON(n.mark));
	}
};
lu.jsonID("removeMark", pu);
function mu(e, t, n, r, i) {
	let a = i.length ? i[i.length - 1] : null;
	a && a instanceof e && a.to == t && a.mark.eq(r) ? i[i.length - 1] = new e(a.from, n, r) : i.push(new e(t, n, r));
}
var hu = class e extends lu {
	constructor(e) {
		super(), this.steps = e;
	}
	apply(e) {
		for (let t of this.steps) {
			let n = t.apply(e);
			if (!n.doc) return n;
			e = n.doc;
		}
		return new uu(e, null);
	}
	invert(t) {
		return new e(this.steps.map((e) => e.invert(t)));
	}
	map(t) {
		let n = [];
		for (let e of this.steps) {
			let r = e.map(t);
			r && n.push(r);
		}
		return n.length ? new e(n) : null;
	}
	toJSON() {
		return {
			stepType: "markSet",
			steps: this.steps.map((e) => e.toJSON())
		};
	}
	static fromJSON(t, n) {
		if (!Array.isArray(n.steps) || !n.steps.every((e) => e.stepType == "addMark" || e.stepType == "removeMark")) throw RangeError("Invalid JSON for MarkSetStep");
		return new e(n.steps.map((e) => lu.fromJSON(t, e)));
	}
};
lu.jsonID("markSet", hu);
var gu = class e extends lu {
	constructor(e, t) {
		super(), this.pos = e, this.mark = t;
	}
	apply(e) {
		let t = e.nodeAt(this.pos);
		if (!t) return uu.fail("No node at mark step's position");
		let n = t.type.create(t.attrs, null, this.mark.addToSet(t.marks));
		return uu.fromReplace(e, this.pos, this.pos + 1, new R(I.from(n), 0, +!t.isLeaf));
	}
	invert(t) {
		let n = t.nodeAt(this.pos);
		if (n) {
			let t = this.mark.addToSet(n.marks);
			if (t.length == n.marks.length) {
				for (let r = 0; r < n.marks.length; r++) if (!n.marks[r].isInSet(t)) return new e(this.pos, n.marks[r]);
				return new e(this.pos, this.mark);
			}
		}
		return new _u(this.pos, this.mark);
	}
	map(t) {
		let n = t.mapResult(this.pos, 1);
		return n.deletedAfter ? null : new e(n.pos, this.mark);
	}
	toJSON() {
		return {
			stepType: "addNodeMark",
			pos: this.pos,
			mark: this.mark.toJSON()
		};
	}
	static fromJSON(t, n) {
		if (typeof n.pos != "number") throw RangeError("Invalid input for AddNodeMarkStep.fromJSON");
		return new e(n.pos, t.markFromJSON(n.mark));
	}
};
lu.jsonID("addNodeMark", gu);
var _u = class e extends lu {
	constructor(e, t) {
		super(), this.pos = e, this.mark = t;
	}
	apply(e) {
		let t = e.nodeAt(this.pos);
		if (!t) return uu.fail("No node at mark step's position");
		let n = t.type.create(t.attrs, null, this.mark.removeFromSet(t.marks));
		return uu.fromReplace(e, this.pos, this.pos + 1, new R(I.from(n), 0, +!t.isLeaf));
	}
	invert(e) {
		let t = e.nodeAt(this.pos);
		return !t || !this.mark.isInSet(t.marks) ? this : new gu(this.pos, this.mark);
	}
	map(t) {
		let n = t.mapResult(this.pos, 1);
		return n.deletedAfter ? null : new e(n.pos, this.mark);
	}
	toJSON() {
		return {
			stepType: "removeNodeMark",
			pos: this.pos,
			mark: this.mark.toJSON()
		};
	}
	static fromJSON(t, n) {
		if (typeof n.pos != "number") throw RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
		return new e(n.pos, t.markFromJSON(n.mark));
	}
};
lu.jsonID("removeNodeMark", _u);
var vu = class e extends lu {
	constructor(e, t, n, r = !1) {
		super(), this.from = e, this.to = t, this.slice = n, this.structure = r;
	}
	apply(e) {
		return this.structure && bu(e, this.from, this.to) ? uu.fail("Structure replace would overwrite content") : uu.fromReplace(e, this.from, this.to, this.slice);
	}
	getMap() {
		return new ou([
			this.from,
			this.to - this.from,
			this.slice.size
		]);
	}
	invert(t) {
		return new e(this.from, this.from + this.slice.size, t.slice(this.from, this.to));
	}
	map(t) {
		let n = t.mapResult(this.to, -1), r = this.from == this.to && e.MAP_BIAS < 0 ? n : t.mapResult(this.from, 1);
		return r.deletedAcross && n.deletedAcross ? null : new e(r.pos, Math.max(r.pos, n.pos), this.slice, this.structure);
	}
	merge(t) {
		if (!(t instanceof e) || t.structure || this.structure) return null;
		if (this.from + this.slice.size == t.from && !this.slice.openEnd && !t.slice.openStart) {
			let n = this.slice.size + t.slice.size == 0 ? R.empty : new R(this.slice.content.append(t.slice.content), this.slice.openStart, t.slice.openEnd);
			return new e(this.from, this.to + (t.to - t.from), n, this.structure);
		}
		if (t.to == this.from && !this.slice.openStart && !t.slice.openEnd) {
			let n = this.slice.size + t.slice.size == 0 ? R.empty : new R(t.slice.content.append(this.slice.content), t.slice.openStart, this.slice.openEnd);
			return new e(t.from, this.to, n, this.structure);
		}
		return null;
	}
	toJSON() {
		let e = {
			stepType: "replace",
			from: this.from,
			to: this.to
		};
		return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
	}
	static fromJSON(t, n) {
		if (typeof n.from != "number" || typeof n.to != "number") throw RangeError("Invalid input for ReplaceStep.fromJSON");
		return new e(n.from, n.to, R.fromJSON(t, n.slice), !!n.structure);
	}
};
vu.MAP_BIAS = 1, lu.jsonID("replace", vu);
var yu = class e extends lu {
	constructor(e, t, n, r, i, a, o = !1) {
		super(), this.from = e, this.to = t, this.gapFrom = n, this.gapTo = r, this.slice = i, this.insert = a, this.structure = o;
	}
	apply(e) {
		if (this.structure && (bu(e, this.from, this.gapFrom) || bu(e, this.gapTo, this.to))) return uu.fail("Structure gap-replace would overwrite content");
		let t = e.slice(this.gapFrom, this.gapTo);
		if (t.openStart || t.openEnd) return uu.fail("Gap is not a flat range");
		let n = this.slice.insertAt(this.insert, t.content);
		return n ? uu.fromReplace(e, this.from, this.to, n) : uu.fail("Content does not fit in gap");
	}
	getMap() {
		return new ou([
			this.from,
			this.gapFrom - this.from,
			this.insert,
			this.gapTo,
			this.to - this.gapTo,
			this.slice.size - this.insert
		]);
	}
	invert(t) {
		let n = this.gapTo - this.gapFrom;
		return new e(this.from, this.from + this.slice.size + n, this.from + this.insert, this.from + this.insert + n, t.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
	}
	map(t) {
		let n = t.mapResult(this.from, 1), r = t.mapResult(this.to, -1), i = this.from == this.gapFrom ? n.pos : t.map(this.gapFrom, -1), a = this.to == this.gapTo ? r.pos : t.map(this.gapTo, 1);
		return n.deletedAcross && r.deletedAcross || i < n.pos || a > r.pos || i > a ? null : new e(n.pos, r.pos, i, a, this.slice, this.insert, this.structure);
	}
	toJSON() {
		let e = {
			stepType: "replaceAround",
			from: this.from,
			to: this.to,
			gapFrom: this.gapFrom,
			gapTo: this.gapTo,
			insert: this.insert
		};
		return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
	}
	static fromJSON(t, n) {
		if (typeof n.from != "number" || typeof n.to != "number" || typeof n.gapFrom != "number" || typeof n.gapTo != "number" || typeof n.insert != "number") throw RangeError("Invalid input for ReplaceAroundStep.fromJSON");
		return new e(n.from, n.to, n.gapFrom, n.gapTo, R.fromJSON(t, n.slice), n.insert, !!n.structure);
	}
};
lu.jsonID("replaceAround", yu);
function bu(e, t, n) {
	let r = e.resolve(t), i = n - t, a = r.depth;
	for (; i > 0 && a > 0 && r.indexAfter(a) == r.node(a).childCount;) a--, i--;
	if (i > 0) {
		let e = r.node(a).maybeChild(r.indexAfter(a));
		for (; i > 0;) {
			if (!e || e.isLeaf) return !0;
			e = e.firstChild, i--;
		}
	}
	return !1;
}
function xu(e, t, n, r) {
	let i = [];
	e.doc.nodesBetween(t, n, (e, a, o) => {
		if (!e.isInline) return;
		let s = e.marks;
		!r.isInSet(s) && o.type.allowsMarkType(r.type) && mu(fu, Math.max(a, t), Math.min(a + e.nodeSize, n), r, i);
	}), i.forEach((t) => e.step(t));
}
function Su(e, t, n, r) {
	let i = [], a = 0;
	e.doc.nodesBetween(t, n, (e, o) => {
		if (!e.isInline || !e.isAtom) return;
		a++;
		let s = null;
		if (r instanceof wl) {
			let t = e.marks, n;
			for (; n = r.isInSet(t);) (s ||= []).push(n), t = n.removeFromSet(t);
		} else r ? r.isInSet(e.marks) && (s = [r]) : s = e.marks;
		if (s && s.length) {
			let r = Math.min(o + e.nodeSize, n);
			for (let e = 0; e < s.length; e++) {
				let n = s[e], c;
				for (let e = 0; e < i.length; e++) {
					let t = i[e];
					t.step == a - 1 && n.eq(i[e].style) && (c = t);
				}
				c ? (c.to = r, c.step = a) : i.push({
					style: n,
					from: Math.max(o, t),
					to: r,
					step: a
				});
			}
		}
	}), i.forEach((t) => e.step(new pu(t.from, t.to, t.style)));
}
function Cu(e, t, n, r = n.contentMatch, i = !0) {
	let a = e.doc.nodeAt(t), o = [], s = t + 1;
	for (let t = 0; t < a.childCount; t++) {
		let c = a.child(t), l = s + c.nodeSize, u = r.matchType(c.type);
		if (!u) o.push(new vu(s, l, R.empty));
		else {
			r = u;
			for (let t = 0; t < c.marks.length; t++) n.allowsMarkType(c.marks[t].type) || e.step(new pu(s, l, c.marks[t]));
			if (i && c.isText && n.whitespace != "pre") {
				let e, t = /\r?\n|\r/g, r;
				for (; e = t.exec(c.text);) r ||= new R(I.from(n.schema.text(" ", n.allowedMarks(c.marks))), 0, 0), o.push(new vu(s + e.index, s + e.index + e[0].length, r));
			}
		}
		s = l;
	}
	if (!r.validEnd) {
		let t = r.fillBefore(I.empty, !0);
		e.replace(s, s, new R(t, 0, 0));
	}
	for (let t = o.length - 1; t >= 0; t--) e.step(o[t]);
}
function wu(e, t, n) {
	return (t == 0 || e.canReplace(t, e.childCount)) && (n == e.childCount || e.canReplace(0, n));
}
function Tu(e) {
	let t = e.parent.content.cutByIndex(e.startIndex, e.endIndex);
	for (let n = e.depth, r = 0, i = 0;; --n) {
		let a = e.$from.node(n), o = e.$from.index(n) + r, s = e.$to.indexAfter(n) - i;
		if (n < e.depth && a.canReplace(o, s, t)) return n;
		if (n == 0 || a.type.spec.isolating || !wu(a, o, s)) break;
		o && (r = 1), s < a.childCount && (i = 1);
	}
	return null;
}
function Eu(e, t, n) {
	let { $from: r, $to: i, depth: a } = t, o = r.before(a + 1), s = i.after(a + 1), c = o, l = s, u = I.empty, d = 0;
	for (let e = a, t = !1; e > n; e--) t || r.index(e) > 0 ? (t = !0, u = I.from(r.node(e).copy(u)), d++) : c--;
	let f = I.empty, p = 0;
	for (let e = a, t = !1; e > n; e--) t || i.after(e + 1) < i.end(e) ? (t = !0, f = I.from(i.node(e).copy(f)), p++) : l++;
	e.step(new yu(c, l, o, s, new R(u.append(f), d, p), u.size - d, !0));
}
function Du(e, t, n = null, r = e) {
	let i = ku(e, t), a = i && Au(r, t);
	return a ? i.map(Ou).concat({
		type: t,
		attrs: n
	}).concat(a.map(Ou)) : null;
}
function Ou(e) {
	return {
		type: e,
		attrs: null
	};
}
function ku(e, t) {
	let { parent: n, startIndex: r, endIndex: i } = e, a = n.contentMatchAt(r).findWrapping(t);
	if (!a) return null;
	let o = a.length ? a[0] : t;
	return n.canReplaceWith(r, i, o) ? a : null;
}
function Au(e, t) {
	let { parent: n, startIndex: r, endIndex: i } = e, a = n.child(r), o = t.contentMatch.findWrapping(a.type);
	if (!o) return null;
	let s = (o.length ? o[o.length - 1] : t).contentMatch;
	for (let e = r; s && e < i; e++) s = s.matchType(n.child(e).type);
	return !s || !s.validEnd ? null : o;
}
function ju(e, t, n) {
	let r = I.empty;
	for (let e = n.length - 1; e >= 0; e--) {
		if (r.size) {
			let t = n[e].type.contentMatch.matchFragment(r);
			if (!t || !t.validEnd) throw RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper");
		}
		r = I.from(n[e].type.create(n[e].attrs, r));
	}
	let i = t.start, a = t.end;
	e.step(new yu(i, a, i, a, new R(r, 0, 0), n.length, !0));
}
function Mu(e, t, n, r, i) {
	if (!r.isTextblock) throw RangeError("Type given to setBlockType should be a textblock");
	let a = e.steps.length;
	e.doc.nodesBetween(t, n, (t, n) => {
		let o = typeof i == "function" ? i(t) : i;
		if (t.isTextblock && !t.hasMarkup(r, o) && Fu(e.doc, e.mapping.slice(a).map(n), r)) {
			let i = null;
			if (r.schema.linebreakReplacement) {
				let e = r.whitespace == "pre", t = !!r.contentMatch.matchType(r.schema.linebreakReplacement);
				e && !t ? i = !1 : !e && t && (i = !0);
			}
			i === !1 && Pu(e, t, n, a), Cu(e, e.mapping.slice(a).map(n, 1), r, void 0, i === null);
			let s = e.mapping.slice(a), c = s.map(n, 1), l = s.map(n + t.nodeSize, 1);
			return e.step(new yu(c, l, c + 1, l - 1, new R(I.from(r.create(o, null, t.marks)), 0, 0), 1, !0)), i === !0 && Nu(e, t, n, a), !1;
		}
	});
}
function Nu(e, t, n, r) {
	t.forEach((i, a) => {
		if (i.isText) {
			let o, s = /\r?\n|\r/g;
			for (; o = s.exec(i.text);) {
				let i = e.mapping.slice(r).map(n + 1 + a + o.index);
				e.replaceWith(i, i + 1, t.type.schema.linebreakReplacement.create());
			}
		}
	});
}
function Pu(e, t, n, r) {
	t.forEach((i, a) => {
		if (i.type == i.type.schema.linebreakReplacement) {
			let i = e.mapping.slice(r).map(n + 1 + a);
			e.replaceWith(i, i + 1, t.type.schema.text("\n"));
		}
	});
}
function Fu(e, t, n) {
	let r = e.resolve(t), i = r.index();
	return r.parent.canReplaceWith(i, i + 1, n);
}
function Iu(e, t, n, r, i) {
	let a = e.doc.nodeAt(t);
	if (!a) throw RangeError("No node at given position");
	n ||= a.type;
	let o = n.create(r, null, i || a.marks);
	if (a.isLeaf) return e.replaceWith(t, t + a.nodeSize, o);
	if (!n.validContent(a.content)) throw RangeError("Invalid content for node type " + n.name);
	e.step(new yu(t, t + a.nodeSize, t + 1, t + a.nodeSize - 1, new R(I.from(o), 0, 0), 1, !0));
}
function Lu(e, t, n = 1, r) {
	let i = e.resolve(t), a = i.depth - n, o = r && r[r.length - 1] || i.parent;
	if (a < 0 || i.parent.type.spec.isolating || !i.parent.canReplace(i.index(), i.parent.childCount) || !o.type.validContent(i.parent.content.cutByIndex(i.index(), i.parent.childCount))) return !1;
	for (let e = i.depth - 1, t = n - 2; e > a; e--, t--) {
		let n = i.node(e), a = i.index(e);
		if (n.type.spec.isolating) return !1;
		let o = n.content.cutByIndex(a, n.childCount), s = r && r[t + 1];
		s && (o = o.replaceChild(0, s.type.create(s.attrs)));
		let c = r && r[t] || n;
		if (!n.canReplace(a + 1, n.childCount) || !c.type.validContent(o)) return !1;
	}
	let s = i.indexAfter(a), c = r && r[0];
	return i.node(a).canReplaceWith(s, s, c ? c.type : i.node(a + 1).type);
}
function Ru(e, t, n = 1, r) {
	let i = e.doc.resolve(t), a = I.empty, o = I.empty;
	for (let e = i.depth, t = i.depth - n, s = n - 1; e > t; e--, s--) {
		a = I.from(i.node(e).copy(a));
		let t = r && r[s];
		o = I.from(t ? t.type.create(t.attrs, o) : i.node(e).copy(o));
	}
	e.step(new vu(t, t, new R(a.append(o), n, n), !0));
}
function zu(e, t) {
	let n = e.resolve(t), r = n.index();
	return Vu(n.nodeBefore, n.nodeAfter) && n.parent.canReplace(r, r + 1);
}
function Bu(e, t) {
	t.content.size || e.type.compatibleContent(t.type);
	let n = e.contentMatchAt(e.childCount), { linebreakReplacement: r } = e.type.schema;
	for (let i = 0; i < t.childCount; i++) {
		let a = t.child(i), o = a.type == r ? e.type.schema.nodes.text : a.type;
		if (n = n.matchType(o), !n || !e.type.allowsMarks(a.marks)) return !1;
	}
	return n.validEnd;
}
function Vu(e, t) {
	return !!(e && t && !e.isLeaf && Bu(e, t));
}
function Hu(e, t, n = -1) {
	let r = e.resolve(t);
	for (let e = r.depth;; e--) {
		let i, a, o = r.index(e);
		if (e == r.depth ? (i = r.nodeBefore, a = r.nodeAfter) : n > 0 ? (i = r.node(e + 1), o++, a = r.node(e).maybeChild(o)) : (i = r.node(e).maybeChild(o - 1), a = r.node(e + 1)), i && !i.isTextblock && Vu(i, a) && r.node(e).canReplace(o, o + 1)) return t;
		if (e == 0) break;
		t = n < 0 ? r.before(e) : r.after(e);
	}
}
function Uu(e, t, n) {
	let r = null, { linebreakReplacement: i } = e.doc.type.schema, a = e.doc.resolve(t - n), o = a.node().type;
	if (i && o.inlineContent) {
		let e = o.whitespace == "pre", t = !!o.contentMatch.matchType(i);
		e && !t ? r = !1 : !e && t && (r = !0);
	}
	let s = e.steps.length;
	if (r === !1) {
		let r = e.doc.resolve(t + n);
		Pu(e, r.node(), r.before(), s);
	}
	o.inlineContent && Cu(e, t + n - 1, o, a.node().contentMatchAt(a.index()), r == null);
	let c = e.mapping.slice(s), l = c.map(t - n);
	if (e.step(new vu(l, c.map(t + n, -1), R.empty, !0)), r === !0) {
		let t = e.doc.resolve(l);
		Nu(e, t.node(), t.before(), e.steps.length);
	}
	return e;
}
function Wu(e, t, n) {
	let r = e.resolve(t);
	if (r.parent.canReplaceWith(r.index(), r.index(), n)) return t;
	if (r.parentOffset == 0) for (let e = r.depth - 1; e >= 0; e--) {
		let t = r.index(e);
		if (r.node(e).canReplaceWith(t, t, n)) return r.before(e + 1);
		if (t > 0) return null;
	}
	if (r.parentOffset == r.parent.content.size) for (let e = r.depth - 1; e >= 0; e--) {
		let t = r.indexAfter(e);
		if (r.node(e).canReplaceWith(t, t, n)) return r.after(e + 1);
		if (t < r.node(e).childCount) return null;
	}
	return null;
}
function Gu(e, t, n) {
	let r = e.resolve(t);
	if (!n.content.size) return t;
	let i = n.content;
	for (let e = 0; e < n.openStart; e++) i = i.firstChild.content;
	for (let e = 1; e <= (n.openStart == 0 && n.size ? 2 : 1); e++) for (let t = r.depth; t >= 0; t--) {
		let n = t == r.depth ? 0 : r.pos <= (r.start(t + 1) + r.end(t + 1)) / 2 ? -1 : 1, a = r.index(t) + +(n > 0), o = r.node(t), s = !1;
		if (e == 1) s = o.canReplace(a, a, i);
		else {
			let e = o.contentMatchAt(a).findWrapping(i.firstChild.type);
			s = e && o.canReplaceWith(a, a, e[0]);
		}
		if (s) return n == 0 ? r.pos : n < 0 ? r.before(t + 1) : r.after(t + 1);
	}
	return null;
}
function Ku(e, t, n = t, r = R.empty) {
	if (t == n && !r.size) return null;
	let i = e.resolve(t), a = e.resolve(n);
	return qu(i, a, r) ? new vu(t, n, r) : new Ju(i, a, r).fit();
}
function qu(e, t, n) {
	return !n.openStart && !n.openEnd && e.start() == t.start() && e.parent.canReplace(e.index(), t.index(), n.content);
}
var Ju = class {
	constructor(e, t, n) {
		this.$from = e, this.$to = t, this.unplaced = n, this.frontier = [], this.placed = I.empty;
		for (let t = 0; t <= e.depth; t++) {
			let n = e.node(t);
			this.frontier.push({
				type: n.type,
				match: n.contentMatchAt(e.indexAfter(t))
			});
		}
		for (let t = e.depth; t > 0; t--) this.placed = I.from(e.node(t).copy(this.placed));
	}
	get depth() {
		return this.frontier.length - 1;
	}
	fit() {
		for (; this.unplaced.size;) {
			let e = this.findFittable();
			e ? this.placeNodes(e) : this.openMore() || this.dropNode();
		}
		let e = this.mustMoveInline(), t = this.placed.size - this.depth - this.$from.depth, n = this.$from, r = this.close(e < 0 ? this.$to : n.doc.resolve(e));
		if (!r) return null;
		let i = this.placed, a = n.depth, o = r.depth;
		for (; a && o && i.childCount == 1;) i = i.firstChild.content, a--, o--;
		let s = new R(i, a, o);
		return e > -1 ? new yu(n.pos, e, this.$to.pos, this.$to.end(), s, t) : s.size || n.pos != this.$to.pos ? new vu(n.pos, r.pos, s) : null;
	}
	findFittable() {
		let e = this.unplaced.openStart;
		for (let t = this.unplaced.content, n = 0, r = this.unplaced.openEnd; n < e; n++) {
			let i = t.firstChild;
			if (t.childCount > 1 && (r = 0), i.type.spec.isolating && r <= n) {
				e = n;
				break;
			}
			t = i.content;
		}
		for (let t = 1; t <= 2; t++) for (let n = t == 1 ? e : this.unplaced.openStart; n >= 0; n--) {
			let e, r = null;
			n ? (r = Zu(this.unplaced.content, n - 1).firstChild, e = r.content) : e = this.unplaced.content;
			let i = e.firstChild;
			for (let e = this.depth; e >= 0; e--) {
				let { type: a, match: o } = this.frontier[e], s, c = null;
				if (t == 1 && (i ? o.matchType(i.type) || (c = o.fillBefore(I.from(i), !1)) : r && a.compatibleContent(r.type))) return {
					sliceDepth: n,
					frontierDepth: e,
					parent: r,
					inject: c
				};
				if (t == 2 && i && (s = o.findWrapping(i.type))) return {
					sliceDepth: n,
					frontierDepth: e,
					parent: r,
					wrap: s
				};
				if (r && o.matchType(r.type)) break;
			}
		}
	}
	openMore() {
		let { content: e, openStart: t, openEnd: n } = this.unplaced;
		return nd(e, -1) <= t ? !1 : (this.unplaced.size > 1 && nd(e, 1) > n && n++, this.unplaced = new R(e, t + 1, n), !0);
	}
	dropNode() {
		let { content: e, openStart: t, openEnd: n } = this.unplaced, r = Zu(e, t);
		if (r.childCount <= 1 && t > 0) {
			let i = e.size - t <= t + r.size;
			this.unplaced = new R(Yu(e, t - 1, 1), t - 1, i ? t - 1 : n);
		} else this.unplaced = new R(Yu(e, t, 1), t, n);
	}
	placeNodes({ sliceDepth: e, frontierDepth: t, parent: n, inject: r, wrap: i }) {
		for (; this.depth > t;) this.closeFrontierNode();
		if (i) for (let e = 0; e < i.length; e++) this.openFrontierNode(i[e]);
		let a = this.unplaced, o = n ? n.content : a.content, s = a.openStart - e, c = 0, l = [], { match: u, type: d } = this.frontier[t];
		if (r) {
			for (let e = 0; e < r.childCount; e++) l.push(r.child(e));
			u = u.matchFragment(r);
		}
		let f = o.size + e - (a.content.size - a.openEnd);
		for (; c < o.childCount;) {
			let e = o.child(c), t = u.matchType(e.type);
			if (!t) break;
			c++, (c > 1 || s == 0 || e.content.size) && (u = t, l.push(Qu(e.mark(d.allowedMarks(e.marks)), c == 1 ? s : 0, c == o.childCount ? f : -1)));
		}
		let p = c == o.childCount;
		p || (f = -1), this.placed = Xu(this.placed, t, I.from(l)), this.frontier[t].match = u, p && f < 0 && n && n.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
		for (let e = 0, t = l[l.length - 1]; t && e < f; e++) this.frontier.push({
			type: t.type,
			match: t.contentMatchAt(t.childCount)
		}), t = t.lastChild;
		this.unplaced = p ? e == 0 ? R.empty : new R(Yu(a.content, e - 1, 1), e - 1, f < 0 ? a.openEnd : e - 1) : new R(Yu(a.content, e, c), e, a.openEnd);
	}
	mustMoveInline() {
		if (!this.$to.parent.isTextblock) return -1;
		let e = this.frontier[this.depth], t;
		if (!e.type.isTextblock || !$u(this.$to, this.$to.depth, e.type, e.match, !1) || this.$to.depth == this.depth && (t = this.findCloseLevel(this.$to)) && t.depth == this.depth) return -1;
		let { depth: n } = this.$to, r = this.$to.after(n);
		for (; n > 1 && r == this.$to.end(--n);) ++r;
		return r;
	}
	findCloseLevel(e) {
		scan: for (let t = Math.min(this.depth, e.depth); t >= 0; t--) {
			let { match: n, type: r } = this.frontier[t], i = t < e.depth && e.end(t + 1) == e.pos + (e.depth - (t + 1)), a = $u(e, t, r, n, i);
			if (a) {
				for (let n = t - 1; n >= 0; n--) {
					let { match: t, type: r } = this.frontier[n], i = $u(e, n, r, t, !0);
					if (!i || i.childCount) continue scan;
				}
				return {
					depth: t,
					fit: a,
					move: i ? e.doc.resolve(e.after(t + 1)) : e
				};
			}
		}
	}
	close(e) {
		let t = this.findCloseLevel(e);
		if (!t) return null;
		for (; this.depth > t.depth;) this.closeFrontierNode();
		t.fit.childCount && (this.placed = Xu(this.placed, t.depth, t.fit)), e = t.move;
		for (let n = t.depth + 1; n <= e.depth; n++) {
			let t = e.node(n), r = t.type.contentMatch.fillBefore(t.content, !0, e.index(n));
			this.openFrontierNode(t.type, t.attrs, r);
		}
		return e;
	}
	openFrontierNode(e, t = null, n) {
		let r = this.frontier[this.depth];
		r.match = r.match.matchType(e), this.placed = Xu(this.placed, this.depth, I.from(e.create(t, n))), this.frontier.push({
			type: e,
			match: e.contentMatch
		});
	}
	closeFrontierNode() {
		let e = this.frontier.pop().match.fillBefore(I.empty, !0);
		e.childCount && (this.placed = Xu(this.placed, this.frontier.length, e));
	}
};
function Yu(e, t, n) {
	return t == 0 ? e.cutByIndex(n, e.childCount) : e.replaceChild(0, e.firstChild.copy(Yu(e.firstChild.content, t - 1, n)));
}
function Xu(e, t, n) {
	return t == 0 ? e.append(n) : e.replaceChild(e.childCount - 1, e.lastChild.copy(Xu(e.lastChild.content, t - 1, n)));
}
function Zu(e, t) {
	for (let n = 0; n < t; n++) e = e.firstChild.content;
	return e;
}
function Qu(e, t, n) {
	if (t <= 0) return e;
	let r = e.content;
	return t > 1 && (r = r.replaceChild(0, Qu(r.firstChild, t - 1, r.childCount == 1 ? n - 1 : 0))), t > 0 && (r = e.type.contentMatch.fillBefore(r).append(r), n <= 0 && (r = r.append(e.type.contentMatch.matchFragment(r).fillBefore(I.empty, !0)))), e.copy(r);
}
function $u(e, t, n, r, i) {
	let a = e.node(t), o = i ? e.indexAfter(t) : e.index(t);
	if (o == a.childCount && !n.compatibleContent(a.type)) return null;
	let s = r.fillBefore(a.content, !0, o);
	return s && !ed(n, a.content, o) ? s : null;
}
function ed(e, t, n) {
	for (let r = n; r < t.childCount; r++) if (!e.allowsMarks(t.child(r).marks)) return !0;
	return !1;
}
function td(e) {
	return e.spec.defining || e.spec.definingForContent;
}
function nd(e, t) {
	for (let n = 0;; n++) {
		let r = t < 0 ? e.firstChild : e.lastChild;
		if (!r || r.isAtom) return n;
		e = r.content;
	}
}
function rd(e, t, n, r) {
	if (!r.size) return e.deleteRange(t, n);
	let i = e.doc.resolve(t), a = e.doc.resolve(n);
	if (qu(i, a, r)) return e.step(new vu(t, n, r));
	let o = sd(i, a);
	o[o.length - 1] == 0 && o.pop();
	let s = -(i.depth + 1);
	o.unshift(s);
	for (let e = i.depth, t = i.pos - 1; e > 0; e--, t--) {
		let n = i.node(e).type.spec;
		if (n.defining || n.definingAsContext || n.isolating) break;
		o.indexOf(e) > -1 ? s = e : i.before(e) == t && o.splice(1, 0, -e);
	}
	let c = o.indexOf(s), l = [], u = r.openStart;
	for (let e = r.content, t = 0;; t++) {
		let n = e.firstChild;
		if (l.push(n), t == r.openStart) break;
		e = n.content;
	}
	for (let e = u - 1; e >= 0; e--) {
		let t = l[e], n = td(t.type);
		if (n && !t.sameMarkup(i.node(Math.abs(s) - 1))) u = e;
		else if (n || !t.type.isTextblock) break;
	}
	for (let t = r.openStart; t >= 0; t--) {
		let s = (t + u + 1) % (r.openStart + 1), d = l[s];
		if (d) for (let t = 0; t < o.length; t++) {
			let l = o[(t + c) % o.length], u = !0;
			l < 0 && (u = !1, l = -l);
			let f = i.node(l - 1), p = i.index(l - 1);
			if (f.canReplaceWith(p, p, d.type, d.marks)) return e.replace(i.before(l), u ? a.after(l) : n, new R(id(r.content, 0, r.openStart, s), s, r.openEnd));
		}
	}
	let d = e.steps.length;
	for (let s = o.length - 1; s >= 0 && (e.replace(t, n, r), !(e.steps.length > d)); s--) {
		let e = o[s];
		e < 0 || (t = i.before(e), n = a.after(e));
	}
}
function id(e, t, n, r, i) {
	if (t < n) {
		let i = e.firstChild;
		e = e.replaceChild(0, i.copy(id(i.content, t + 1, n, r, i)));
	}
	if (t > r) {
		let t = i.contentMatchAt(0), n = t.fillBefore(e).append(e);
		e = n.append(t.matchFragment(n).fillBefore(I.empty, !0));
	}
	return e;
}
function ad(e, t, n, r) {
	if (!r.isInline && t == n && e.doc.resolve(t).parent.content.size) {
		let i = Wu(e.doc, t, r.type);
		i != null && (t = n = i);
	}
	e.replaceRange(t, n, new R(I.from(r), 0, 0));
}
function od(e, t, n) {
	let r = e.doc.resolve(t), i = e.doc.resolve(n);
	if (r.parent.isTextblock && i.parent.isTextblock && r.start() != i.start() && r.parentOffset == 0 && i.parentOffset == 0) {
		let a = r.sharedDepth(n), o = !1;
		for (let e = r.depth; e > a; e--) r.node(e).type.spec.isolating && (o = !0);
		for (let e = i.depth; e > a; e--) i.node(e).type.spec.isolating && (o = !0);
		if (!o) {
			for (let e = r.depth; e > 0 && t == r.start(e); e--) t = r.before(e);
			for (let e = i.depth; e > 0 && n == i.start(e); e--) n = i.before(e);
			r = e.doc.resolve(t), i = e.doc.resolve(n);
		}
	}
	let a = sd(r, i);
	for (let t = 0; t < a.length; t++) {
		let n = a[t], o = t == a.length - 1;
		if (o && n == 0 || r.node(n).type.contentMatch.validEnd) return e.delete(r.start(n), i.end(n));
		if (n > 0 && (o || r.node(n - 1).canReplace(r.index(n - 1), i.indexAfter(n - 1)))) return e.delete(r.before(n), i.after(n));
	}
	for (let a = 1; a <= r.depth && a <= i.depth; a++) if (t - r.start(a) == r.depth - a && n > r.end(a) && i.end(a) - n != i.depth - a && r.start(a - 1) == i.start(a - 1) && r.node(a - 1).canReplace(r.index(a - 1), i.index(a - 1))) return e.delete(r.before(a), n);
	e.delete(t, n);
}
function sd(e, t) {
	let n = [], r = Math.min(e.depth, t.depth);
	for (let i = r; i >= 0; i--) {
		let r = e.start(i);
		if (r < e.pos - (e.depth - i) || t.end(i) > t.pos + (t.depth - i) || e.node(i).type.spec.isolating || t.node(i).type.spec.isolating) break;
		(r == t.start(i) || i == e.depth && i == t.depth && e.parent.inlineContent && t.parent.inlineContent && i && t.start(i - 1) == r - 1) && n.push(i);
	}
	return n;
}
var cd = class e extends lu {
	constructor(e, t, n) {
		super(), this.pos = e, this.attr = t, this.value = n;
	}
	apply(e) {
		let t = e.nodeAt(this.pos);
		if (!t) return uu.fail("No node at attribute step's position");
		let n = Object.create(null);
		for (let e in t.attrs) n[e] = t.attrs[e];
		n[this.attr] = this.value;
		let r = t.type.create(n, null, t.marks);
		return uu.fromReplace(e, this.pos, this.pos + 1, new R(I.from(r), 0, +!t.isLeaf));
	}
	getMap() {
		return ou.empty;
	}
	invert(t) {
		return new e(this.pos, this.attr, t.nodeAt(this.pos).attrs[this.attr]);
	}
	map(t) {
		let n = t.mapResult(this.pos, 1);
		return n.deletedAfter ? null : new e(n.pos, this.attr, this.value);
	}
	toJSON() {
		return {
			stepType: "attr",
			pos: this.pos,
			attr: this.attr,
			value: this.value
		};
	}
	static fromJSON(t, n) {
		if (typeof n.pos != "number" || typeof n.attr != "string") throw RangeError("Invalid input for AttrStep.fromJSON");
		return new e(n.pos, n.attr, n.value);
	}
};
lu.jsonID("attr", cd);
var ld = class e extends lu {
	constructor(e, t) {
		super(), this.attr = e, this.value = t;
	}
	apply(e) {
		let t = Object.create(null);
		for (let n in e.attrs) t[n] = e.attrs[n];
		t[this.attr] = this.value;
		let n = e.type.create(t, e.content, e.marks);
		return uu.ok(n);
	}
	getMap() {
		return ou.empty;
	}
	invert(t) {
		return new e(this.attr, t.attrs[this.attr]);
	}
	map(e) {
		return this;
	}
	toJSON() {
		return {
			stepType: "docAttr",
			attr: this.attr,
			value: this.value
		};
	}
	static fromJSON(t, n) {
		if (typeof n.attr != "string") throw RangeError("Invalid input for DocAttrStep.fromJSON");
		return new e(n.attr, n.value);
	}
};
lu.jsonID("docAttr", ld);
var ud = class extends Error {};
ud = function e(t) {
	let n = Error.call(this, t);
	return n.__proto__ = e.prototype, n;
}, ud.prototype = Object.create(Error.prototype), ud.prototype.constructor = ud, ud.prototype.name = "TransformError";
var dd = class {
	constructor(e) {
		this.doc = e, this.steps = [], this.docs = [], this.mapping = new su();
	}
	get before() {
		return this.docs.length ? this.docs[0] : this.doc;
	}
	step(e) {
		let t = this.maybeStep(e);
		if (t.failed) throw new ud(t.failed);
		return this;
	}
	maybeStep(e) {
		let t = e.apply(this.doc);
		return t.failed || this.addStep(e, t.doc), t;
	}
	get docChanged() {
		return this.steps.length > 0;
	}
	changedRange() {
		let e = 1e9, t = -1e9;
		for (let n = 0; n < this.mapping.maps.length; n++) {
			let r = this.mapping.maps[n];
			n && (e = r.map(e, 1), t = r.map(t, -1)), r.forEach((n, r, i, a) => {
				e = Math.min(e, i), t = Math.max(t, a);
			});
		}
		return e == 1e9 ? null : {
			from: e,
			to: t
		};
	}
	addStep(e, t) {
		this.docs.push(this.doc), this.steps.push(e), this.mapping.appendMap(e.getMap()), this.doc = t;
	}
	replace(e, t = e, n = R.empty) {
		let r = Ku(this.doc, e, t, n);
		return r && this.step(r), this;
	}
	replaceWith(e, t, n) {
		return this.replace(e, t, new R(I.from(n), 0, 0));
	}
	delete(e, t) {
		return this.replace(e, t, R.empty);
	}
	insert(e, t) {
		return this.replaceWith(e, e, t);
	}
	replaceRange(e, t, n) {
		return rd(this, e, t, n), this;
	}
	replaceRangeWith(e, t, n) {
		return ad(this, e, t, n), this;
	}
	deleteRange(e, t) {
		return od(this, e, t), this;
	}
	lift(e, t) {
		return Eu(this, e, t), this;
	}
	join(e, t = 1) {
		return Uu(this, e, t), this;
	}
	wrap(e, t) {
		return ju(this, e, t), this;
	}
	setBlockType(e, t = e, n, r = null) {
		return Mu(this, e, t, n, r), this;
	}
	setNodeMarkup(e, t, n = null, r) {
		return Iu(this, e, t, n, r), this;
	}
	setNodeAttribute(e, t, n) {
		return this.step(new cd(e, t, n)), this;
	}
	setDocAttribute(e, t) {
		return this.step(new ld(e, t)), this;
	}
	addNodeMark(e, t) {
		return this.step(new gu(e, t)), this;
	}
	removeNodeMark(e, t) {
		let n = this.doc.nodeAt(e);
		if (!n) throw RangeError("No node at position " + e);
		if (t instanceof L) t.isInSet(n.marks) && this.step(new _u(e, t));
		else {
			let r = n.marks, i, a = [];
			for (; i = t.isInSet(r);) a.push(new _u(e, i)), r = i.removeFromSet(r);
			for (let e = a.length - 1; e >= 0; e--) this.step(a[e]);
		}
		return this;
	}
	split(e, t = 1, n) {
		return Ru(this, e, t, n), this;
	}
	addMark(e, t, n) {
		return xu(this, e, t, n), this;
	}
	removeMark(e, t, n) {
		return Su(this, e, t, n), this;
	}
	clearIncompatible(e, t, n) {
		return Cu(this, e, t, n), this;
	}
}, fd = Object.create(null), z = class {
	constructor(e, t, n) {
		this.$anchor = e, this.$head = t, this.ranges = n || [new pd(e.min(t), e.max(t))];
	}
	get anchor() {
		return this.$anchor.pos;
	}
	get head() {
		return this.$head.pos;
	}
	get from() {
		return this.$from.pos;
	}
	get to() {
		return this.$to.pos;
	}
	get $from() {
		return this.ranges[0].$from;
	}
	get $to() {
		return this.ranges[0].$to;
	}
	get empty() {
		let e = this.ranges;
		for (let t = 0; t < e.length; t++) if (e[t].$from.pos != e[t].$to.pos) return !1;
		return !0;
	}
	content() {
		return this.$from.doc.slice(this.from, this.to, !0);
	}
	replace(e, t = R.empty) {
		let n = t.content.lastChild, r = null;
		for (let e = 0; e < t.openEnd; e++) r = n, n = n.lastChild;
		let i = e.steps.length, a = this.ranges;
		for (let o = 0; o < a.length; o++) {
			let { $from: s, $to: c } = a[o], l = e.mapping.slice(i);
			e.replaceRange(l.map(s.pos), l.map(c.pos), o ? R.empty : t), o == 0 && xd(e, i, (n ? n.isInline : r && r.isTextblock) ? -1 : 1);
		}
	}
	replaceWith(e, t) {
		let n = e.steps.length, r = this.ranges;
		for (let i = 0; i < r.length; i++) {
			let { $from: a, $to: o } = r[i], s = e.mapping.slice(n), c = s.map(a.pos), l = s.map(o.pos);
			i ? e.deleteRange(c, l) : (e.replaceRangeWith(c, l, t), xd(e, n, t.isInline ? -1 : 1));
		}
	}
	static findFrom(e, t, n = !1) {
		let r = e.parent.inlineContent ? new B(e) : bd(e.node(0), e.parent, e.pos, e.index(), t, n);
		if (r) return r;
		for (let r = e.depth - 1; r >= 0; r--) {
			let i = t < 0 ? bd(e.node(0), e.node(r), e.before(r + 1), e.index(r), t, n) : bd(e.node(0), e.node(r), e.after(r + 1), e.index(r) + 1, t, n);
			if (i) return i;
		}
		return null;
	}
	static near(e, t = 1) {
		return this.findFrom(e, t) || this.findFrom(e, -t) || new vd(e.node(0));
	}
	static atStart(e) {
		return bd(e, e, 0, 0, 1) || new vd(e);
	}
	static atEnd(e) {
		return bd(e, e, e.content.size, e.childCount, -1) || new vd(e);
	}
	static fromJSON(e, t) {
		if (!t || !t.type) throw RangeError("Invalid input for Selection.fromJSON");
		let n = fd[t.type];
		if (!n) throw RangeError(`No selection type ${t.type} defined`);
		return n.fromJSON(e, t);
	}
	static jsonID(e, t) {
		if (e in fd) throw RangeError("Duplicate use of selection JSON ID " + e);
		return fd[e] = t, t.prototype.jsonID = e, t;
	}
	getBookmark() {
		return B.between(this.$anchor, this.$head).getBookmark();
	}
};
z.prototype.visible = !0;
var pd = class {
	constructor(e, t) {
		this.$from = e, this.$to = t;
	}
}, md = !1;
function hd(e) {
	!md && !e.parent.inlineContent && (md = !0, console.warn("TextSelection endpoint not pointing into a node with inline content (" + e.parent.type.name + ")"));
}
var B = class e extends z {
	constructor(e, t = e) {
		hd(e), hd(t), super(e, t);
	}
	get $cursor() {
		return this.$anchor.pos == this.$head.pos ? this.$head : null;
	}
	map(t, n) {
		let r = t.resolve(n.map(this.head));
		if (!r.parent.inlineContent) return z.near(r);
		let i = t.resolve(n.map(this.anchor));
		return new e(i.parent.inlineContent ? i : r, r);
	}
	replace(e, t = R.empty) {
		if (super.replace(e, t), t == R.empty) {
			let t = this.$from.marksAcross(this.$to);
			t && e.ensureMarks(t);
		}
	}
	eq(t) {
		return t instanceof e && t.anchor == this.anchor && t.head == this.head;
	}
	getBookmark() {
		return new gd(this.anchor, this.head);
	}
	toJSON() {
		return {
			type: "text",
			anchor: this.anchor,
			head: this.head
		};
	}
	static fromJSON(t, n) {
		if (typeof n.anchor != "number" || typeof n.head != "number") throw RangeError("Invalid input for TextSelection.fromJSON");
		return new e(t.resolve(n.anchor), t.resolve(n.head));
	}
	static create(e, t, n = t) {
		let r = e.resolve(t);
		return new this(r, n == t ? r : e.resolve(n));
	}
	static between(t, n, r) {
		let i = t.pos - n.pos;
		if ((!r || i) && (r = i >= 0 ? 1 : -1), !n.parent.inlineContent) {
			let e = z.findFrom(n, r, !0) || z.findFrom(n, -r, !0);
			if (e) n = e.$head;
			else return z.near(n, r);
		}
		return t.parent.inlineContent || (i == 0 ? t = n : (t = (z.findFrom(t, -r, !0) || z.findFrom(t, r, !0)).$anchor, t.pos < n.pos != i < 0 && (t = n))), new e(t, n);
	}
};
z.jsonID("text", B);
var gd = class e {
	constructor(e, t) {
		this.anchor = e, this.head = t;
	}
	map(t) {
		return new e(t.map(this.anchor), t.map(this.head));
	}
	resolve(e) {
		return B.between(e.resolve(this.anchor), e.resolve(this.head));
	}
}, V = class e extends z {
	constructor(e) {
		let t = e.nodeAfter, n = e.node(0).resolve(e.pos + t.nodeSize);
		super(e, n), this.node = t;
	}
	map(t, n) {
		let { deleted: r, pos: i } = n.mapResult(this.anchor), a = t.resolve(i);
		return r ? z.near(a) : new e(a);
	}
	content() {
		return new R(I.from(this.node), 0, 0);
	}
	eq(t) {
		return t instanceof e && t.anchor == this.anchor;
	}
	toJSON() {
		return {
			type: "node",
			anchor: this.anchor
		};
	}
	getBookmark() {
		return new _d(this.anchor);
	}
	static fromJSON(t, n) {
		if (typeof n.anchor != "number") throw RangeError("Invalid input for NodeSelection.fromJSON");
		return new e(t.resolve(n.anchor));
	}
	static create(t, n) {
		return new e(t.resolve(n));
	}
	static isSelectable(e) {
		return !e.isText && e.type.spec.selectable !== !1;
	}
};
V.prototype.visible = !1, z.jsonID("node", V);
var _d = class e {
	constructor(e) {
		this.anchor = e;
	}
	map(t) {
		let { deleted: n, pos: r } = t.mapResult(this.anchor);
		return n ? new gd(r, r) : new e(r);
	}
	resolve(e) {
		let t = e.resolve(this.anchor), n = t.nodeAfter;
		return n && V.isSelectable(n) ? new V(t) : z.near(t);
	}
}, vd = class e extends z {
	constructor(e) {
		super(e.resolve(0), e.resolve(e.content.size));
	}
	replace(e, t = R.empty) {
		if (t == R.empty) {
			e.delete(0, e.doc.content.size);
			let t = z.atStart(e.doc);
			t.eq(e.selection) || e.setSelection(t);
		} else super.replace(e, t);
	}
	toJSON() {
		return { type: "all" };
	}
	static fromJSON(t) {
		return new e(t);
	}
	map(t) {
		return new e(t);
	}
	eq(t) {
		return t instanceof e;
	}
	getBookmark() {
		return yd;
	}
};
z.jsonID("all", vd);
var yd = {
	map() {
		return this;
	},
	resolve(e) {
		return new vd(e);
	}
};
function bd(e, t, n, r, i, a = !1) {
	if (t.inlineContent) return B.create(e, n);
	for (let o = r - (i > 0 ? 0 : 1); i > 0 ? o < t.childCount : o >= 0; o += i) {
		let r = t.child(o);
		if (!r.isAtom) {
			let t = bd(e, r, n + i, i < 0 ? r.childCount : 0, i, a);
			if (t) return t;
		} else if (!a && V.isSelectable(r)) return V.create(e, n - (i < 0 ? r.nodeSize : 0));
		n += r.nodeSize * i;
	}
	return null;
}
function xd(e, t, n) {
	let r = e.steps.length - 1;
	if (r < t) return;
	let i = e.steps[r];
	if (!(i instanceof vu || i instanceof yu)) return;
	let a = e.mapping.maps[r], o;
	a.forEach((e, t, n, r) => {
		o ??= r;
	}), e.setSelection(z.near(e.doc.resolve(o), n));
}
var Sd = 1, Cd = 2, wd = 4, Td = class extends dd {
	constructor(e) {
		super(e.doc), this.curSelectionFor = 0, this.updated = 0, this.meta = Object.create(null), this.time = Date.now(), this.curSelection = e.selection, this.storedMarks = e.storedMarks;
	}
	get selection() {
		return this.curSelectionFor < this.steps.length && (this.curSelection = this.curSelection.map(this.doc, this.mapping.slice(this.curSelectionFor)), this.curSelectionFor = this.steps.length), this.curSelection;
	}
	setSelection(e) {
		if (e.$from.doc != this.doc) throw RangeError("Selection passed to setSelection must point at the current document");
		return this.curSelection = e, this.curSelectionFor = this.steps.length, this.updated = (this.updated | Sd) & -3, this.storedMarks = null, this;
	}
	get selectionSet() {
		return (this.updated & Sd) > 0;
	}
	setStoredMarks(e) {
		return this.storedMarks = e, this.updated |= Cd, this;
	}
	ensureMarks(e) {
		return L.sameSet(this.storedMarks || this.selection.$from.marks(), e) || this.setStoredMarks(e), this;
	}
	addStoredMark(e) {
		return this.ensureMarks(e.addToSet(this.storedMarks || this.selection.$head.marks()));
	}
	removeStoredMark(e) {
		return this.ensureMarks(e.removeFromSet(this.storedMarks || this.selection.$head.marks()));
	}
	get storedMarksSet() {
		return (this.updated & Cd) > 0;
	}
	addStep(e, t) {
		super.addStep(e, t), this.updated &= -3, this.storedMarks = null;
	}
	setTime(e) {
		return this.time = e, this;
	}
	replaceSelection(e) {
		return this.selection.replace(this, e), this;
	}
	replaceSelectionWith(e, t = !0) {
		let n = this.selection;
		return t && (e = e.mark(this.storedMarks || (n.empty ? n.$from.marks() : n.$from.marksAcross(n.$to) || L.none))), n.replaceWith(this, e), this;
	}
	deleteSelection() {
		return this.selection.replace(this), this;
	}
	insertText(e, t, n) {
		let r = this.doc.type.schema;
		if (t == null) return e ? this.replaceSelectionWith(r.text(e), !0) : this.deleteSelection();
		{
			if (n ??= t, !e) return this.deleteRange(t, n);
			let i = this.storedMarks;
			if (!i) {
				let e = this.doc.resolve(t);
				i = n == t ? e.marks() : e.marksAcross(this.doc.resolve(n));
			}
			return this.replaceRangeWith(t, n, r.text(e, i)), !this.selection.empty && this.selection.to == t + e.length && this.setSelection(z.near(this.selection.$to)), this;
		}
	}
	setMeta(e, t) {
		return this.meta[typeof e == "string" ? e : e.key] = t, this;
	}
	getMeta(e) {
		return this.meta[typeof e == "string" ? e : e.key];
	}
	get isGeneric() {
		for (let e in this.meta) return !1;
		return !0;
	}
	scrollIntoView() {
		return this.updated |= wd, this;
	}
	get scrolledIntoView() {
		return (this.updated & wd) > 0;
	}
};
function Ed(e, t) {
	return !t || !e ? e : e.bind(t);
}
var Dd = class {
	constructor(e, t, n) {
		this.name = e, this.init = Ed(t.init, n), this.apply = Ed(t.apply, n);
	}
}, Od = [
	new Dd("doc", {
		init(e) {
			return e.doc || e.schema.topNodeType.createAndFill();
		},
		apply(e) {
			return e.doc;
		}
	}),
	new Dd("selection", {
		init(e, t) {
			return e.selection || z.atStart(t.doc);
		},
		apply(e) {
			return e.selection;
		}
	}),
	new Dd("storedMarks", {
		init(e) {
			return e.storedMarks || null;
		},
		apply(e, t, n, r) {
			return r.selection.$cursor ? e.storedMarks : null;
		}
	}),
	new Dd("scrollToSelection", {
		init() {
			return 0;
		},
		apply(e, t) {
			return e.scrolledIntoView ? t + 1 : t;
		}
	})
], kd = class {
	constructor(e, t) {
		this.schema = e, this.plugins = [], this.pluginsByKey = Object.create(null), this.fields = Od.slice(), t && t.forEach((e) => {
			if (this.pluginsByKey[e.key]) throw RangeError("Adding different instances of a keyed plugin (" + e.key + ")");
			this.plugins.push(e), this.pluginsByKey[e.key] = e, e.spec.state && this.fields.push(new Dd(e.key, e.spec.state, e));
		});
	}
}, Ad = class e {
	constructor(e) {
		this.config = e;
	}
	get schema() {
		return this.config.schema;
	}
	get plugins() {
		return this.config.plugins;
	}
	apply(e) {
		return this.applyTransaction(e).state;
	}
	filterTransaction(e, t = -1) {
		for (let n = 0; n < this.config.plugins.length; n++) if (n != t) {
			let t = this.config.plugins[n];
			if (t.spec.filterTransaction && !t.spec.filterTransaction.call(t, e, this)) return !1;
		}
		return !0;
	}
	applyTransaction(e) {
		if (!this.filterTransaction(e)) return {
			state: this,
			transactions: []
		};
		let t = [e], n = this.applyInner(e), r = null;
		for (;;) {
			let i = !1;
			for (let a = 0; a < this.config.plugins.length; a++) {
				let o = this.config.plugins[a];
				if (o.spec.appendTransaction) {
					let s = r ? r[a].n : 0, c = r ? r[a].state : this, l = s < t.length && o.spec.appendTransaction.call(o, s ? t.slice(s) : t, c, n);
					if (l && n.filterTransaction(l, a)) {
						if (l.setMeta("appendedTransaction", e), !r) {
							r = [];
							for (let e = 0; e < this.config.plugins.length; e++) r.push(e < a ? {
								state: n,
								n: t.length
							} : {
								state: this,
								n: 0
							});
						}
						t.push(l), n = n.applyInner(l), i = !0;
					}
					r && (r[a] = {
						state: n,
						n: t.length
					});
				}
			}
			if (!i) return {
				state: n,
				transactions: t
			};
		}
	}
	applyInner(t) {
		if (!t.before.eq(this.doc)) throw RangeError("Applying a mismatched transaction");
		let n = new e(this.config), r = this.config.fields;
		for (let e = 0; e < r.length; e++) {
			let i = r[e];
			n[i.name] = i.apply(t, this[i.name], this, n);
		}
		return n;
	}
	get tr() {
		return new Td(this);
	}
	static create(t) {
		let n = new kd(t.doc ? t.doc.type.schema : t.schema, t.plugins), r = new e(n);
		for (let e = 0; e < n.fields.length; e++) r[n.fields[e].name] = n.fields[e].init(t, r);
		return r;
	}
	reconfigure(t) {
		let n = new kd(this.schema, t.plugins), r = n.fields, i = new e(n);
		for (let e = 0; e < r.length; e++) {
			let n = r[e].name;
			i[n] = this.hasOwnProperty(n) ? this[n] : r[e].init(t, i);
		}
		return i;
	}
	toJSON(e) {
		let t = {
			doc: this.doc.toJSON(),
			selection: this.selection.toJSON()
		};
		if (this.storedMarks && (t.storedMarks = this.storedMarks.map((e) => e.toJSON())), e && typeof e == "object") for (let n in e) {
			if (n == "doc" || n == "selection") throw RangeError("The JSON fields `doc` and `selection` are reserved");
			let r = e[n], i = r.spec.state;
			i && i.toJSON && (t[n] = i.toJSON.call(r, this[r.key]));
		}
		return t;
	}
	static fromJSON(t, n, r) {
		if (!n) throw RangeError("Invalid input for EditorState.fromJSON");
		if (!t.schema) throw RangeError("Required config field 'schema' missing");
		let i = new kd(t.schema, t.plugins), a = new e(i);
		return i.fields.forEach((e) => {
			if (e.name == "doc") a.doc = $c.fromJSON(t.schema, n.doc);
			else if (e.name == "selection") a.selection = z.fromJSON(a.doc, n.selection);
			else if (e.name == "storedMarks") n.storedMarks && (a.storedMarks = n.storedMarks.map(t.schema.markFromJSON));
			else {
				if (r) for (let i in r) {
					let o = r[i], s = o.spec.state;
					if (o.key == e.name && s && s.fromJSON && Object.prototype.hasOwnProperty.call(n, i)) {
						a[e.name] = s.fromJSON.call(o, t, n[i], a);
						return;
					}
				}
				a[e.name] = e.init(t, a);
			}
		}), a;
	}
};
function jd(e, t, n) {
	for (let r in e) {
		let i = e[r];
		i instanceof Function ? i = i.bind(t) : r == "handleDOMEvents" && (i = jd(i, t, {})), n[r] = i;
	}
	return n;
}
var H = class {
	constructor(e) {
		this.spec = e, this.props = {}, e.props && jd(e.props, this, this.props), this.key = e.key ? e.key.key : Nd("plugin");
	}
	getState(e) {
		return e[this.key];
	}
}, Md = Object.create(null);
function Nd(e) {
	return e in Md ? e + "$" + ++Md[e] : (Md[e] = 0, e + "$");
}
var U = class {
	constructor(e = "key") {
		this.key = Nd(e);
	}
	get(e) {
		return e.config.pluginsByKey[this.key];
	}
	getState(e) {
		return e[this.key];
	}
}, Pd = (e, t) => !e.selection.empty && (t && t(e.tr.deleteSelection().scrollIntoView()), !0);
function Fd(e, t) {
	let { $cursor: n } = e.selection;
	return !n || (t ? !t.endOfTextblock("backward", e) : n.parentOffset > 0) ? null : n;
}
var Id = (e, t, n) => {
	let r = Fd(e, n);
	if (!r) return !1;
	let i = Hd(r);
	if (!i) {
		let n = r.blockRange(), i = n && Tu(n);
		return i != null && (t && t(e.tr.lift(n, i).scrollIntoView()), !0);
	}
	let a = i.nodeBefore;
	if (sf(e, i, t, -1)) return !0;
	if (r.parent.content.size == 0 && (Bd(a, "end") || V.isSelectable(a))) for (let n = r.depth;; n--) {
		let o = Ku(e.doc, r.before(n), r.after(n), R.empty);
		if (o && o.slice.size < o.to - o.from) {
			if (t) {
				let n = e.tr.step(o);
				n.setSelection(Bd(a, "end") ? z.findFrom(n.doc.resolve(n.mapping.map(i.pos, -1)), -1) : V.create(n.doc, i.pos - a.nodeSize)), t(n.scrollIntoView());
			}
			return !0;
		}
		if (n == 1 || r.node(n - 1).childCount > 1) break;
	}
	return a.isAtom && i.depth == r.depth - 1 ? (t && t(e.tr.delete(i.pos - a.nodeSize, i.pos).scrollIntoView()), !0) : !1;
}, Ld = (e, t, n) => {
	let r = Fd(e, n);
	if (!r) return !1;
	let i = Hd(r);
	return i ? zd(e, i, t) : !1;
}, Rd = (e, t, n) => {
	let r = Ud(e, n);
	if (!r) return !1;
	let i = Kd(r);
	return i ? zd(e, i, t) : !1;
};
function zd(e, t, n) {
	let r = t.nodeBefore, i = t.pos - 1;
	for (; !r.isTextblock; i--) {
		if (r.type.spec.isolating) return !1;
		let e = r.lastChild;
		if (!e) return !1;
		r = e;
	}
	let a = t.nodeAfter, o = t.pos + 1;
	for (; !a.isTextblock; o++) {
		if (a.type.spec.isolating) return !1;
		let e = a.firstChild;
		if (!e) return !1;
		a = e;
	}
	let s = Ku(e.doc, i, o, R.empty);
	if (!s || s.from != i || s instanceof vu && s.slice.size >= o - i) return !1;
	if (n) {
		let t = e.tr.step(s);
		t.setSelection(B.create(t.doc, i)), n(t.scrollIntoView());
	}
	return !0;
}
function Bd(e, t, n = !1) {
	for (let r = e; r; r = t == "start" ? r.firstChild : r.lastChild) {
		if (r.isTextblock) return !0;
		if (n && r.childCount != 1) return !1;
	}
	return !1;
}
var Vd = (e, t, n) => {
	let { $head: r, empty: i } = e.selection, a = r;
	if (!i) return !1;
	if (r.parent.isTextblock) {
		if (n ? !n.endOfTextblock("backward", e) : r.parentOffset > 0) return !1;
		a = Hd(r);
	}
	let o = a && a.nodeBefore;
	return !o || !V.isSelectable(o) ? !1 : (t && t(e.tr.setSelection(V.create(e.doc, a.pos - o.nodeSize)).scrollIntoView()), !0);
};
function Hd(e) {
	if (!e.parent.type.spec.isolating) for (let t = e.depth - 1; t >= 0; t--) {
		if (e.index(t) > 0) return e.doc.resolve(e.before(t + 1));
		if (e.node(t).type.spec.isolating) break;
	}
	return null;
}
function Ud(e, t) {
	let { $cursor: n } = e.selection;
	return !n || (t ? !t.endOfTextblock("forward", e) : n.parentOffset < n.parent.content.size) ? null : n;
}
var Wd = (e, t, n) => {
	let r = Ud(e, n);
	if (!r) return !1;
	let i = Kd(r);
	if (!i) return !1;
	let a = i.nodeAfter;
	if (sf(e, i, t, 1)) return !0;
	if (r.parent.content.size == 0 && (Bd(a, "start") || V.isSelectable(a))) {
		let n = Ku(e.doc, r.before(), r.after(), R.empty);
		if (n && n.slice.size < n.to - n.from) {
			if (t) {
				let r = e.tr.step(n);
				r.setSelection(Bd(a, "start") ? z.findFrom(r.doc.resolve(r.mapping.map(i.pos)), 1) : V.create(r.doc, r.mapping.map(i.pos))), t(r.scrollIntoView());
			}
			return !0;
		}
	}
	return a.isAtom && i.depth == r.depth - 1 ? (t && t(e.tr.delete(i.pos, i.pos + a.nodeSize).scrollIntoView()), !0) : !1;
}, Gd = (e, t, n) => {
	let { $head: r, empty: i } = e.selection, a = r;
	if (!i) return !1;
	if (r.parent.isTextblock) {
		if (n ? !n.endOfTextblock("forward", e) : r.parentOffset < r.parent.content.size) return !1;
		a = Kd(r);
	}
	let o = a && a.nodeAfter;
	return !o || !V.isSelectable(o) ? !1 : (t && t(e.tr.setSelection(V.create(e.doc, a.pos)).scrollIntoView()), !0);
};
function Kd(e) {
	if (!e.parent.type.spec.isolating) for (let t = e.depth - 1; t >= 0; t--) {
		let n = e.node(t);
		if (e.index(t) + 1 < n.childCount) return e.doc.resolve(e.after(t + 1));
		if (n.type.spec.isolating) break;
	}
	return null;
}
var qd = (e, t) => {
	let n = e.selection, r = n instanceof V, i;
	if (r) {
		if (n.node.isTextblock || !zu(e.doc, n.from)) return !1;
		i = n.from;
	} else if (i = Hu(e.doc, n.from, -1), i == null) return !1;
	if (t) {
		let n = e.tr.join(i);
		r && n.setSelection(V.create(n.doc, i - e.doc.resolve(i).nodeBefore.nodeSize)), t(n.scrollIntoView());
	}
	return !0;
}, Jd = (e, t) => {
	let n = e.selection, r;
	if (n instanceof V) {
		if (n.node.isTextblock || !zu(e.doc, n.to)) return !1;
		r = n.to;
	} else if (r = Hu(e.doc, n.to, 1), r == null) return !1;
	return t && t(e.tr.join(r).scrollIntoView()), !0;
}, Yd = (e, t) => {
	let { $from: n, $to: r } = e.selection, i = n.blockRange(r), a = i && Tu(i);
	return a != null && (t && t(e.tr.lift(i, a).scrollIntoView()), !0);
}, Xd = (e, t) => {
	let { $head: n, $anchor: r } = e.selection;
	return !n.parent.type.spec.code || !n.sameParent(r) ? !1 : (t && t(e.tr.insertText("\n").scrollIntoView()), !0);
};
function Zd(e) {
	for (let t = 0; t < e.edgeCount; t++) {
		let { type: n } = e.edge(t);
		if (n.isTextblock && !n.hasRequiredAttrs()) return n;
	}
	return null;
}
var Qd = (e, t) => {
	let { $head: n, $anchor: r } = e.selection;
	if (!n.parent.type.spec.code || !n.sameParent(r)) return !1;
	let i = n.node(-1), a = n.indexAfter(-1), o = Zd(i.contentMatchAt(a));
	if (!o || !i.canReplaceWith(a, a, o)) return !1;
	if (t) {
		let r = n.after(), i = e.tr.replaceWith(r, r, o.createAndFill());
		i.setSelection(z.near(i.doc.resolve(r), 1)), t(i.scrollIntoView());
	}
	return !0;
}, $d = (e, t) => {
	let n = e.selection, { $from: r, $to: i } = n;
	if (n instanceof vd || r.parent.inlineContent || i.parent.inlineContent) return !1;
	let a = Zd(i.parent.contentMatchAt(i.indexAfter()));
	if (!a || !a.isTextblock) return !1;
	if (t) {
		let n = (!r.parentOffset && i.index() < i.parent.childCount ? r : i).pos, o = e.tr.insert(n, a.createAndFill());
		o.setSelection(B.create(o.doc, n + 1)), t(o.scrollIntoView());
	}
	return !0;
}, ef = (e, t) => {
	let { $cursor: n } = e.selection;
	if (!n || n.parent.content.size) return !1;
	if (n.depth > 1 && n.after() != n.end(-1)) {
		let r = n.before();
		if (Lu(e.doc, r)) return t && t(e.tr.split(r).scrollIntoView()), !0;
	}
	let r = n.blockRange(), i = r && Tu(r);
	return i != null && (t && t(e.tr.lift(r, i).scrollIntoView()), !0);
};
function tf(e) {
	return (t, n) => {
		if (t.selection instanceof V && t.selection.node.isBlock) {
			let { $from: e } = t.selection;
			return !e.parentOffset || !Lu(t.doc, e.pos) ? !1 : (n && n(t.tr.split(e.pos).scrollIntoView()), !0);
		}
		if (!t.selection.$from.depth) return !1;
		let r = t.tr;
		!t.selection.empty && (t.selection instanceof B || t.selection instanceof vd) && r.deleteSelection();
		let { $from: i } = r.selection, a = r.steps.length, o = [], s, c, l = !1, u = !1;
		for (let t = i.depth;; t--) if (i.node(t).isBlock) {
			l = i.end(t) == i.pos + (i.depth - t), u = i.start(t) == i.pos - (i.depth - t), c = Zd(i.node(t - 1).contentMatchAt(i.indexAfter(t - 1)));
			let n = e && e(i.parent, l, i);
			o.unshift(n || (l && c ? { type: c } : null)), s = t;
			break;
		} else {
			if (t == 1) return !1;
			o.unshift(null);
		}
		let d = i.pos, f = Lu(r.doc, d, o.length, o);
		if (f ||= (o[0] = c ? { type: c } : null, Lu(r.doc, d, o.length, o)), !f) return !1;
		if (r.split(d, o.length, o), !l && u && i.node(s).type != c) {
			let e = r.mapping.slice(a), t = e.map(i.before(s)), n = r.doc.resolve(t);
			c && i.node(s - 1).canReplaceWith(n.index(), n.index() + 1, c) && r.setNodeMarkup(e.map(i.before(s)), c);
		}
		return n && n(r.scrollIntoView()), !0;
	};
}
var nf = tf(), rf = (e, t) => {
	let { $from: n, to: r } = e.selection, i, a = n.sharedDepth(r);
	return a != 0 && (i = n.before(a), t && t(e.tr.setSelection(V.create(e.doc, i))), !0);
}, af = (e, t) => (t && t(e.tr.setSelection(new vd(e.doc))), !0);
function of(e, t, n) {
	let r = t.nodeBefore, i = t.nodeAfter, a = t.index();
	return !r || !i || !r.type.compatibleContent(i.type) ? !1 : !r.content.size && t.parent.canReplace(a - 1, a) ? (n && n(e.tr.delete(t.pos - r.nodeSize, t.pos).scrollIntoView()), !0) : !t.parent.canReplace(a, a + 1) || !(i.isTextblock || zu(e.doc, t.pos)) ? !1 : (n && n(e.tr.join(t.pos).scrollIntoView()), !0);
}
function sf(e, t, n, r) {
	let i = t.nodeBefore, a = t.nodeAfter, o, s, c = i.type.spec.isolating || a.type.spec.isolating;
	if (!c && of(e, t, n)) return !0;
	let l = !c && t.parent.canReplace(t.index(), t.index() + 1);
	if (l && (o = (s = i.contentMatchAt(i.childCount)).findWrapping(a.type)) && s.matchType(o[0] || a.type).validEnd) {
		if (n) {
			let r = t.pos + a.nodeSize, s = I.empty;
			for (let e = o.length - 1; e >= 0; e--) s = I.from(o[e].create(null, s));
			s = I.from(i.copy(s));
			let c = e.tr.step(new yu(t.pos - 1, r, t.pos, r, new R(s, 1, 0), o.length, !0)), l = c.doc.resolve(r + 2 * o.length);
			l.nodeAfter && l.nodeAfter.type == i.type && zu(c.doc, l.pos) && c.join(l.pos), n(c.scrollIntoView());
		}
		return !0;
	}
	let u = a.type.spec.isolating || r > 0 && c ? null : z.findFrom(t, 1), d = u && u.$from.blockRange(u.$to), f = d && Tu(d);
	if (f != null && f >= t.depth) return n && n(e.tr.lift(d, f).scrollIntoView()), !0;
	if (l && Bd(a, "start", !0) && Bd(i, "end")) {
		let r = i, o = [];
		for (; o.push(r), !r.isTextblock;) r = r.lastChild;
		let s = a, c = 1;
		for (; !s.isTextblock; s = s.firstChild) c++;
		if (r.canReplace(r.childCount, r.childCount, s.content)) {
			if (n) {
				let r = I.empty;
				for (let e = o.length - 1; e >= 0; e--) r = I.from(o[e].copy(r));
				n(e.tr.step(new yu(t.pos - o.length, t.pos + a.nodeSize, t.pos + c, t.pos + a.nodeSize - c, new R(r, o.length, 0), 0, !0)).scrollIntoView());
			}
			return !0;
		}
	}
	return !1;
}
function cf(e) {
	return function(t, n) {
		let r = t.selection, i = e < 0 ? r.$from : r.$to, a = i.depth;
		for (; i.node(a).isInline;) {
			if (!a) return !1;
			a--;
		}
		return i.node(a).isTextblock ? (n && n(t.tr.setSelection(B.create(t.doc, e < 0 ? i.start(a) : i.end(a)))), !0) : !1;
	};
}
var lf = cf(-1), uf = cf(1);
function df(e, t = null) {
	return function(n, r) {
		let { $from: i, $to: a } = n.selection, o = i.blockRange(a), s = o && Du(o, e, t);
		return s ? (r && r(n.tr.wrap(o, s).scrollIntoView()), !0) : !1;
	};
}
function ff(e, t = null) {
	return function(n, r) {
		let i = !1;
		for (let r = 0; r < n.selection.ranges.length && !i; r++) {
			let { $from: { pos: a }, $to: { pos: o } } = n.selection.ranges[r];
			n.doc.nodesBetween(a, o, (r, a) => {
				if (i) return !1;
				if (r.isTextblock && !r.hasMarkup(e, t)) {
					if (r.type == e) i = !0;
					else {
						let t = n.doc.resolve(a), r = t.index();
						i = t.parent.canReplaceWith(r, r + 1, e);
					}
				}
			});
		}
		if (!i) return !1;
		if (r) {
			let i = n.tr;
			for (let r = 0; r < n.selection.ranges.length; r++) {
				let { $from: { pos: a }, $to: { pos: o } } = n.selection.ranges[r];
				i.setBlockType(a, o, e, t);
			}
			r(i.scrollIntoView());
		}
		return !0;
	};
}
function pf(...e) {
	return function(t, n, r) {
		for (let i = 0; i < e.length; i++) if (e[i](t, n, r)) return !0;
		return !1;
	};
}
var mf = pf(Pd, Id, Vd), hf = pf(Pd, Wd, Gd), gf = {
	Enter: pf(Xd, $d, ef, nf),
	"Mod-Enter": Qd,
	Backspace: mf,
	"Mod-Backspace": mf,
	"Shift-Backspace": mf,
	Delete: hf,
	"Mod-Delete": hf,
	"Mod-a": af
}, _f = {
	"Ctrl-h": gf.Backspace,
	"Alt-Backspace": gf["Mod-Backspace"],
	"Ctrl-d": gf.Delete,
	"Ctrl-Alt-Backspace": gf["Mod-Delete"],
	"Alt-Delete": gf["Mod-Delete"],
	"Alt-d": gf["Mod-Delete"],
	"Ctrl-a": lf,
	"Ctrl-e": uf
};
for (let e in gf) _f[e] = gf[e];
typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os < "u" && os.platform && os.platform();
// node_modules/prosemirror-schema-list/dist/index.js
function vf(e, t = null) {
	return function(n, r) {
		let { $from: i, $to: a } = n.selection, o = i.blockRange(a);
		if (!o) return !1;
		let s = r ? n.tr : null;
		return yf(s, o, e, t) ? (r && r(s.scrollIntoView()), !0) : !1;
	};
}
function yf(e, t, n, r = null) {
	let i = !1, a = t, o = t.$from.doc;
	if (t.depth >= 2 && t.$from.node(t.depth - 1).type.compatibleContent(n) && t.startIndex == 0) {
		if (t.$from.index(t.depth - 1) == 0) return !1;
		let e = o.resolve(t.start - 2);
		a = new Zc(e, e, t.depth), t.endIndex < t.parent.childCount && (t = new Zc(t.$from, o.resolve(t.$to.end(t.depth)), t.depth)), i = !0;
	}
	let s = Du(a, n, r, t);
	return s ? (e && bf(e, t, s, i, n), !0) : !1;
}
function bf(e, t, n, r, i) {
	let a = I.empty;
	for (let e = n.length - 1; e >= 0; e--) a = I.from(n[e].type.create(n[e].attrs, a));
	e.step(new yu(t.start - (r ? 2 : 0), t.end, t.start, t.end, new R(a, 0, 0), n.length, !0));
	let o = 0;
	for (let e = 0; e < n.length; e++) n[e].type == i && (o = e + 1);
	let s = n.length - o, c = t.start + n.length - (r ? 2 : 0), l = t.parent;
	for (let n = t.startIndex, r = t.endIndex, i = !0; n < r; n++, i = !1) !i && s && Lu(e.doc, c, s) && (e.split(c, s), c += 2 * s), c += l.child(n).nodeSize;
	return e;
}
function xf(e, t) {
	return e instanceof xl ? t == e : e.indexOf(t) > -1;
}
function Sf(e) {
	return function(t, n) {
		let { $from: r, $to: i } = t.selection, a = r.blockRange(i, (t) => t.childCount > 0 && xf(e, t.firstChild.type));
		return a ? n ? xf(e, r.node(a.depth - 1).type) ? Cf(t, n, a) : wf(t, n, a) : !0 : !1;
	};
}
function Cf(e, t, n) {
	let r = e.tr, i = n.end, a = n.$to.end(n.depth), o = n.parent.child(n.endIndex - 1).type;
	i < a && (r.step(new yu(i - 1, a, i, a, new R(I.from(o.create(null, n.parent.copy())), 1, 0), 1, !0)), n = new Zc(r.doc.resolve(n.$from.pos), r.doc.resolve(a), n.depth));
	let s = Tu(n);
	if (s == null) return !1;
	r.lift(n, s);
	let c = r.doc.resolve(r.mapping.map(i, -1) - 1);
	return zu(r.doc, c.pos) && c.nodeBefore.type == c.nodeAfter.type && r.join(c.pos), t(r.scrollIntoView()), !0;
}
function wf(e, t, n) {
	let r = e.tr, i = n.parent;
	for (let e = n.end, t = n.endIndex - 1, a = n.startIndex; t > a; t--) e -= i.child(t).nodeSize, r.delete(e - 1, e + 1);
	let a = r.doc.resolve(n.start), o = a.nodeAfter;
	if (r.mapping.map(n.end) != n.start + a.nodeAfter.nodeSize) return !1;
	let s = n.startIndex == 0, c = n.endIndex == i.childCount, l = a.node(-1), u = a.index(-1);
	if (!l.canReplace(u + +!s, u + 1, o.content.append(c ? I.empty : I.from(i)))) return !1;
	let d = a.pos, f = d + o.nodeSize;
	return r.step(new yu(d - +!!s, f + +!!c, d + 1, f - 1, new R((s ? I.empty : I.from(i.copy(I.empty))).append(c ? I.empty : I.from(i.copy(I.empty))), +!s, +!c), +!s)), t(r.scrollIntoView()), !0;
}
function Tf(e) {
	return function(t, n) {
		let { $from: r, $to: i } = t.selection, a = r.blockRange(i, (t) => t.childCount > 0 && xf(e, t.firstChild.type));
		if (!a) return !1;
		let o = a.startIndex;
		if (o == 0) return !1;
		let s = a.parent, c = s.child(o - 1);
		if (!xf(e, c.type)) return !1;
		if (n) {
			let e = c.lastChild && c.lastChild.type == s.type, r = I.from(e ? c.lastChild.lastChild.type.create() : null), i = new R(I.from(c.type.create(null, I.from(s.type.create(null, r)))), e ? 3 : 1, 0), o = a.start, l = a.end;
			n(t.tr.step(new yu(o - (e ? 3 : 1), l, o, l, i, 1, !0)).scrollIntoView());
		}
		return !0;
	};
}
// node_modules/prosemirror-view/dist/index.js
var Ef = function(e) {
	for (var t = 0;; t++) if (e = e.previousSibling, !e) return t;
}, Df = function(e) {
	let t = e.assignedSlot || e.parentNode;
	return t && t.nodeType == 11 ? t.host : t;
}, Of = null, kf = function(e, t, n) {
	let r = Of ||= document.createRange();
	return r.setEnd(e, n ?? e.nodeValue.length), r.setStart(e, t || 0), r;
}, Af = function() {
	Of = null;
}, jf = function(e, t, n, r) {
	return n && (Nf(e, t, n, r, -1) || Nf(e, t, n, r, 1));
}, Mf = /^(img|br|input|textarea|hr)$/i;
function Nf(e, t, n, r, i) {
	for (;;) {
		if (e == n && t == r) return !0;
		if (t == (i < 0 ? 0 : Pf(e))) {
			let n = e.parentNode;
			if (!n || !W(n) || Bf(e) || Mf.test(e.nodeName) || e.contentEditable == "false") return !1;
			t = Ef(e) + (i < 0 ? 0 : 1), e = n;
		} else if (W(e)) {
			let n = e.childNodes[t + (i < 0 ? -1 : 0)];
			if (W(n) && n.contentEditable == "false") {
				if (n.pmViewDesc?.ignoreForSelection) t += i;
				else return !1;
			} else e = n, t = i < 0 ? Pf(e) : 0;
		} else return !1;
	}
}
function Pf(e) {
	return e.nodeType == 3 ? e.nodeValue.length : e.childNodes.length;
}
function W(e) {
	return e.nodeType == 1;
}
function Ff(e) {
	return e.nodeType == 3;
}
function If(e, t) {
	return t ? e.contains(W(t) ? t : t.parentNode) : !1;
}
function Lf(e, t) {
	for (;;) {
		if (Ff(e) && t) return e;
		if (W(e) && t > 0) {
			if (e.contentEditable == "false") return null;
			e = e.childNodes[t - 1], t = Pf(e);
		} else if (e.parentNode && !Bf(e)) t = Ef(e), e = e.parentNode;
		else return null;
	}
}
function Rf(e, t) {
	for (;;) {
		if (Ff(e) && t < e.nodeValue.length) return e;
		if (W(e) && t < e.childNodes.length) {
			if (e.contentEditable == "false") return null;
			e = e.childNodes[t], t = 0;
		} else if (e.parentNode && !Bf(e)) t = Ef(e) + 1, e = e.parentNode;
		else return null;
	}
}
function zf(e, t, n) {
	for (let r = t == 0, i = t == Pf(e); r || i;) {
		if (e == n) return !0;
		let t = Ef(e);
		if (e = e.parentNode, !e) return !1;
		r &&= t == 0, i &&= t == Pf(e);
	}
}
function Bf(e) {
	let t;
	for (let n = e; n && !(t = n.pmViewDesc); n = n.parentNode);
	return t && t.node && t.node.isBlock && (t.dom == e || t.contentDOM == e);
}
var Vf = function(e) {
	return e.focusNode && jf(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset);
};
function Hf(e, t) {
	let n = document.createEvent("Event");
	return n.initEvent("keydown", !0, !0), n.keyCode = e, n.key = n.code = t, n;
}
function Uf(e) {
	let t = e.activeElement;
	for (; t && t.shadowRoot;) t = t.shadowRoot.activeElement;
	return t;
}
function Wf(e, t, n) {
	if (e.caretPositionFromPoint) try {
		let r = e.caretPositionFromPoint(t, n);
		if (r) return {
			node: r.offsetNode,
			offset: Math.min(Pf(r.offsetNode), r.offset)
		};
	} catch {}
	if (e.caretRangeFromPoint) {
		let r = e.caretRangeFromPoint(t, n);
		if (r) return {
			node: r.startContainer,
			offset: Math.min(Pf(r.startContainer), r.startOffset)
		};
	}
}
var Gf = typeof navigator < "u" ? navigator : null, Kf = typeof document < "u" ? document : null, qf = Gf && Gf.userAgent || "", Jf = /Edge\/(\d+)/.exec(qf), Yf = /MSIE \d/.exec(qf), Xf = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(qf), Zf = !!(Yf || Xf || Jf), Qf = Yf ? document.documentMode : Xf ? +Xf[1] : Jf ? +Jf[1] : 0, $f = !Zf && /gecko\/(\d+)/i.test(qf);
$f && +(/Firefox\/(\d+)/.exec(qf) || [0, 0])[1];
var ep = !Zf && /Chrome\/(\d+)/.exec(qf), tp = !!ep, np = ep ? +ep[1] : 0, rp = !Zf && !!Gf && /Apple Computer/.test(Gf.vendor), ip = rp && (/Mobile\/\w+/.test(qf) || !!Gf && Gf.maxTouchPoints > 2), ap = ip || (Gf ? /Mac/.test(Gf.platform) : !1), op = Gf ? /Win/.test(Gf.platform) : !1, sp = /Android \d/.test(qf), cp = !!Kf && "webkitFontSmoothing" in Kf.documentElement.style, lp = cp ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
function up(e) {
	let t = e.defaultView && e.defaultView.visualViewport;
	return t ? {
		left: 0,
		right: t.width,
		top: 0,
		bottom: t.height
	} : {
		left: 0,
		right: e.documentElement.clientWidth,
		top: 0,
		bottom: e.documentElement.clientHeight
	};
}
function dp(e, t) {
	return typeof e == "number" ? e : e[t];
}
function fp(e) {
	let t = e.getBoundingClientRect(), n = t.width / e.offsetWidth || 1, r = t.height / e.offsetHeight || 1;
	return {
		left: t.left,
		right: t.left + e.clientWidth * n,
		top: t.top,
		bottom: t.top + e.clientHeight * r
	};
}
function pp(e, t, n) {
	if (!Op(t) && t.left == 0) return;
	let r = e.someProp("scrollThreshold") || 0, i = e.someProp("scrollMargin") || 5, a = e.dom.ownerDocument;
	for (let o = n || e.dom; o;) {
		if (!W(o)) {
			o = Df(o);
			continue;
		}
		let e = o == a.body, n = e ? up(a) : fp(o), s = 0, c = 0;
		if (t.top < n.top + dp(r, "top") ? c = -(n.top - t.top + dp(i, "top")) : t.bottom > n.bottom - dp(r, "bottom") && (c = t.bottom - t.top > n.bottom - n.top ? t.top + dp(i, "top") - n.top : t.bottom - n.bottom + dp(i, "bottom")), t.left < n.left + dp(r, "left") ? s = -(n.left - t.left + dp(i, "left")) : t.right > n.right - dp(r, "right") && (s = t.right - n.right + dp(i, "right")), s || c) {
			if (e) a.defaultView.scrollBy(s, c);
			else {
				let e = o.scrollLeft, n = o.scrollTop;
				c && (o.scrollTop += c), s && (o.scrollLeft += s);
				let r = o.scrollLeft - e, i = o.scrollTop - n;
				t = {
					left: t.left - r,
					top: t.top - i,
					right: t.right - r,
					bottom: t.bottom - i
				};
			}
		}
		let l = e ? "fixed" : getComputedStyle(o).position;
		if (/^(fixed|sticky)$/.test(l)) break;
		o = l == "absolute" ? o.offsetParent : Df(o);
	}
}
function mp(e) {
	let t = e.dom.getBoundingClientRect(), n = Math.max(0, t.top), r, i;
	for (let a = (t.left + t.right) / 2, o = n + 1; o < Math.min(innerHeight, t.bottom); o += 5) {
		let t = e.root.elementFromPoint(a, o);
		if (!t || t == e.dom || !e.dom.contains(t)) continue;
		let s = t.getBoundingClientRect();
		if (s.top >= n - 20) {
			r = t, i = s.top;
			break;
		}
	}
	return {
		refDOM: r,
		refTop: i,
		stack: hp(e.dom)
	};
}
function hp(e) {
	let t = [], n = e.ownerDocument;
	for (let r = e; r && (t.push({
		dom: r,
		top: r.scrollTop,
		left: r.scrollLeft
	}), e != n); r = Df(r));
	return t;
}
function gp({ refDOM: e, refTop: t, stack: n }) {
	let r = e ? e.getBoundingClientRect().top : 0;
	_p(n, r == 0 ? 0 : r - t);
}
function _p(e, t) {
	for (let n = 0; n < e.length; n++) {
		let { dom: r, top: i, left: a } = e[n];
		r.scrollTop != i + t && (r.scrollTop = i + t), r.scrollLeft != a && (r.scrollLeft = a);
	}
}
var vp = null;
function yp(e) {
	if (e.setActive) return e.setActive();
	if (vp) return e.focus(vp);
	let t = hp(e);
	e.focus(vp == null ? { get preventScroll() {
		return vp = { preventScroll: !0 }, !0;
	} } : void 0), vp || (vp = !1, _p(t, 0));
}
function bp(e, t) {
	let n, r = 2e8, i, a = 0, o = t.top, s = t.top, c, l;
	for (let u = e.firstChild, d = 0; u; u = u.nextSibling, d++) {
		let e;
		if (W(u)) e = u.getClientRects();
		else if (Ff(u)) e = kf(u).getClientRects();
		else continue;
		for (let f = 0; f < e.length; f++) {
			let p = e[f];
			if (p.top <= o && p.bottom >= s) {
				o = Math.max(p.bottom, o), s = Math.min(p.top, s);
				let e = p.left > t.left ? p.left - t.left : p.right < t.left ? t.left - p.right : 0;
				if (e < r) {
					n = u, r = e, i = e && Ff(n) ? {
						left: p.right < t.left ? p.right : p.left,
						top: t.top
					} : t, W(u) && e && (a = d + +(t.left >= (p.left + p.right) / 2));
					continue;
				}
			} else p.top > t.top && !c && p.left <= t.left && p.right >= t.left && (c = u, l = {
				left: Math.max(p.left, Math.min(p.right, t.left)),
				top: p.top
			});
			!n && (t.left >= p.right && t.top >= p.top || t.left >= p.left && t.top >= p.bottom) && (a = d + 1);
		}
	}
	return !n && c && (n = c, i = l, r = 0), n && Ff(n) ? xp(n, i) : !n || r ? {
		node: e,
		offset: a
	} : bp(n, i);
}
function xp(e, t) {
	let n = e.nodeValue.length, r = document.createRange(), i;
	for (let a = 0; a < n; a++) {
		r.setEnd(e, a + 1), r.setStart(e, a);
		let n = kp(r, 1);
		if (n.top != n.bottom && Sp(t, n)) {
			i = {
				node: e,
				offset: a + +(t.left >= (n.left + n.right) / 2)
			};
			break;
		}
	}
	return r.detach(), i || {
		node: e,
		offset: 0
	};
}
function Sp(e, t) {
	return e.left >= t.left - 1 && e.left <= t.right + 1 && e.top >= t.top - 1 && e.top <= t.bottom + 1;
}
function Cp(e, t) {
	let n = e.parentNode;
	return n && /^li$/i.test(n.nodeName) && t.left < e.getBoundingClientRect().left ? n : e;
}
function wp(e, t, n) {
	let { node: r, offset: i } = bp(t, n), a = -1;
	if (W(r) && !r.firstChild) {
		let e = r.getBoundingClientRect();
		a = e.left != e.right && n.left > (e.left + e.right) / 2 ? 1 : -1;
	}
	return e.docView.posFromDOM(r, i, a);
}
function Tp(e, t, n, r) {
	let i = -1;
	for (let n = t, a = !1; n != e.dom;) {
		let t = e.docView.nearestDesc(n, !0), o;
		if (!t) return null;
		if (W(t.dom) && (t.node.isBlock && t.parent || !t.contentDOM) && ((o = t.dom.getBoundingClientRect()).width || o.height) && (t.node.isBlock && t.parent && !/^T(R|BODY|HEAD|FOOT)$/.test(t.dom.nodeName) && (!a && o.left > r.left || o.top > r.top ? i = t.posBefore : (!a && o.right < r.left || o.bottom < r.top) && (i = t.posAfter), a = !0), !t.contentDOM && i < 0 && !t.node.isText)) return (t.node.isBlock ? r.top < (o.top + o.bottom) / 2 : r.left < (o.left + o.right) / 2) ? t.posBefore : t.posAfter;
		n = t.dom.parentNode;
	}
	return i > -1 ? i : e.docView.posFromDOM(t, n, -1);
}
function Ep(e, t, n) {
	let r = e.childNodes.length;
	if (r && n.top < n.bottom) for (let i = Math.max(0, Math.min(r - 1, Math.floor(r * (t.top - n.top) / (n.bottom - n.top)) - 2)), a = i;;) {
		let n = e.childNodes[a];
		if (W(n)) {
			let e = n.getClientRects();
			for (let r = 0; r < e.length; r++) {
				let i = e[r];
				if (Sp(t, i)) return Ep(n, t, i);
			}
		}
		if ((a = (a + 1) % r) == i) break;
	}
	return e;
}
function Dp(e, t) {
	let n = e.dom.ownerDocument, r, i = 0, a = Wf(n, t.left, t.top);
	a && ({node: r, offset: i} = a);
	let o = (e.root.elementFromPoint ? e.root : n).elementFromPoint(t.left, t.top), s;
	if (!o || !e.dom.contains(o)) {
		let n = e.dom.getBoundingClientRect();
		if (!Sp(t, n) || (o = Ep(e.dom, t, n), !o)) return null;
	}
	if (rp) for (let e = o; r && e; e = Df(e)) e.draggable && (r = void 0);
	if (o = Cp(o, t), r) {
		if ($f && W(r) && (i = Math.min(i, r.childNodes.length), i < r.childNodes.length)) {
			let e = r.childNodes[i], n;
			e.nodeName == "IMG" && (n = e.getBoundingClientRect()).right <= t.left && n.bottom > t.top && i++;
		}
		let n;
		cp && i && W(r) && W(n = r.childNodes[i - 1]) && n.contentEditable == "false" && n.getBoundingClientRect().top >= t.top && i--, r == e.dom && i == r.childNodes.length - 1 && W(r.lastChild) && t.top > r.lastChild.getBoundingClientRect().bottom ? s = e.state.doc.content.size : i != 0 && W(r) && r.childNodes[i - 1].nodeName == "BR" || (s = Tp(e, r, i, t));
	}
	s ??= wp(e, o, t);
	let c = e.docView.nearestDesc(o, !0);
	return {
		pos: s,
		inside: c ? c.posAtStart - c.border : -1
	};
}
function Op(e) {
	return e.top < e.bottom || e.left < e.right;
}
function kp(e, t) {
	let n = e.getClientRects();
	if (n.length) {
		let e = n[t < 0 ? 0 : n.length - 1];
		if (Op(e)) return e;
	}
	return Array.prototype.find.call(n, Op) || e.getBoundingClientRect();
}
var Ap = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
function jp(e, t, n) {
	let { node: r, offset: i, atom: a } = e.docView.domFromPos(t, n < 0 ? -1 : 1), o = cp || $f;
	if (Ff(r)) {
		if (o && (Ap.test(r.nodeValue) || (n < 0 ? !i : i == r.nodeValue.length))) {
			let e = kp(kf(r, i, i), n);
			if ($f && i && /\s/.test(r.nodeValue[i - 1]) && i < r.nodeValue.length) {
				let t = kp(kf(r, i - 1, i - 1), -1);
				if (t.top == e.top) {
					let n = kp(kf(r, i, i + 1), -1);
					if (n.top != e.top) return Mp(n, n.left < t.left);
				}
			}
			return e;
		}
		{
			let e = i, t = i, a = n < 0 ? 1 : -1;
			return n < 0 && !i ? (t++, a = -1) : n >= 0 && i == r.nodeValue.length ? (e--, a = 1) : n < 0 ? e-- : t++, Mp(kp(kf(r, e, t), a), a < 0);
		}
	}
	if (!e.state.doc.resolve(t - (a || 0)).parent.inlineContent) {
		if (a == null && i && (n < 0 || i == Pf(r))) {
			let e = r.childNodes[i - 1];
			if (W(e)) return Np(e.getBoundingClientRect(), !1);
		}
		if (a == null && i < Pf(r)) {
			let e = r.childNodes[i];
			if (W(e)) return Np(e.getBoundingClientRect(), !0);
		}
		return Np(r.getBoundingClientRect(), n >= 0);
	}
	if (a == null && i && (n < 0 || i == Pf(r))) {
		let e = r.childNodes[i - 1], t = Ff(e) ? kf(e, Pf(e) - +!o) : W(e) && (e.nodeName != "BR" || !e.nextSibling) ? e : null;
		if (t) return Mp(kp(t, 1), !1);
	}
	if (a == null && i < Pf(r)) {
		let e = r.childNodes[i];
		for (; e.pmViewDesc && e.pmViewDesc.ignoreForCoords;) e = e.nextSibling;
		let t = e ? Ff(e) ? kf(e, 0, +!o) : W(e) ? e : null : null;
		if (t) return Mp(kp(t, -1), !0);
	}
	return Mp(kp(Ff(r) ? kf(r) : r, -n), n >= 0);
}
function Mp(e, t) {
	if (e.width == 0) return e;
	let n = t ? e.left : e.right;
	return {
		top: e.top,
		bottom: e.bottom,
		left: n,
		right: n
	};
}
function Np(e, t) {
	if (e.height == 0) return e;
	let n = t ? e.top : e.bottom;
	return {
		top: n,
		bottom: n,
		left: e.left,
		right: e.right
	};
}
function Pp(e, t, n) {
	let r = e.state, i = e.root.activeElement;
	r != t && e.updateState(t), i != e.dom && e.focus();
	try {
		return n();
	} finally {
		r != t && e.updateState(r), i != e.dom && i && i.focus();
	}
}
function Fp(e, t, n) {
	let r = t.selection, i = n == "up" ? r.$from : r.$to;
	return Pp(e, t, () => {
		let { node: t } = e.docView.domFromPos(i.pos, n == "up" ? -1 : 1);
		for (;;) {
			let n = e.docView.nearestDesc(t, !0);
			if (!n) break;
			if (n.node.isBlock) {
				t = n.contentDOM || n.dom;
				break;
			}
			t = n.dom.parentNode;
		}
		let r = jp(e, i.pos, 1);
		for (let e = t.firstChild; e; e = e.nextSibling) {
			let t;
			if (W(e)) t = e.getClientRects();
			else if (Ff(e)) t = kf(e, 0, e.nodeValue.length).getClientRects();
			else continue;
			for (let e = 0; e < t.length; e++) {
				let i = t[e];
				if (i.bottom > i.top + 1 && (n == "up" ? r.top - i.top > (i.bottom - r.top) * 2 : i.bottom - r.bottom > (r.bottom - i.top) * 2)) return !1;
			}
		}
		return !0;
	});
}
var Ip = /[\u0590-\u08ac]/;
function Lp(e, t, n) {
	let { $head: r } = t.selection;
	if (!r.parent.isTextblock) return !1;
	let i = r.parentOffset, a = !i, o = i == r.parent.content.size, s = e.domSelection();
	return s ? !Ip.test(r.parent.textContent) || !s.modify ? n == "left" || n == "backward" ? a : o : Pp(e, t, () => {
		let { focusNode: t, focusOffset: i, anchorNode: a, anchorOffset: o } = e.domSelectionRange(), c = s.caretBidiLevel;
		s.modify("move", n, "character");
		let l = r.depth ? e.docView.domAfterPos(r.before()) : e.dom, { focusNode: u, focusOffset: d } = e.domSelectionRange(), f = u && !If(l, u) || t == u && i == d;
		try {
			s.collapse(a, o), t && (t != a || i != o) && s.extend && s.extend(t, i);
		} catch {}
		return c != null && (s.caretBidiLevel = c), f;
	}) : r.pos == r.start() || r.pos == r.end();
}
var Rp = null, zp = null, Bp = !1;
function Vp(e, t, n) {
	return Rp == t && zp == n ? Bp : (Rp = t, zp = n, Bp = n == "up" || n == "down" ? Fp(e, t, n) : Lp(e, t, n));
}
var Hp = 0, Up = 1, Wp = 2, Gp = 3, Kp = class {
	constructor(e, t, n, r) {
		this.parent = e, this.children = t, this.dom = n, this.contentDOM = r, this.dirty = Hp, n.pmViewDesc = this;
	}
	matchesWidget(e) {
		return !1;
	}
	matchesMark(e) {
		return !1;
	}
	matchesNode(e, t, n) {
		return !1;
	}
	matchesHack(e) {
		return !1;
	}
	parseRule(e) {
		return null;
	}
	stopEvent(e) {
		return !1;
	}
	get size() {
		let e = 0;
		for (let t = 0; t < this.children.length; t++) e += this.children[t].size;
		return e;
	}
	get border() {
		return 0;
	}
	destroy() {
		this.parent = void 0, this.dom.pmViewDesc == this && (this.dom.pmViewDesc = void 0);
		for (let e = 0; e < this.children.length; e++) this.children[e].destroy();
	}
	posBeforeChild(e) {
		for (let t = 0, n = this.posAtStart;; t++) {
			let r = this.children[t];
			if (r == e) return n;
			n += r.size;
		}
	}
	get posBefore() {
		return this.parent.posBeforeChild(this);
	}
	get posAtStart() {
		return this.parent ? this.parent.posBeforeChild(this) + this.border : 0;
	}
	get posAfter() {
		return this.posBefore + this.size;
	}
	get posAtEnd() {
		return this.posAtStart + this.size - 2 * this.border;
	}
	localPosFromDOM(e, t, n) {
		if (this.contentDOM && If(this.contentDOM, e)) {
			if (n < 0) {
				let n, r;
				if (e == this.contentDOM) n = e.childNodes[t - 1];
				else {
					for (; e.parentNode != this.contentDOM;) e = e.parentNode;
					n = e.previousSibling;
				}
				for (; n && !((r = n.pmViewDesc) && r.parent == this);) n = n.previousSibling;
				return n ? this.posBeforeChild(r) + r.size : this.posAtStart;
			}
			{
				let n, r;
				if (e == this.contentDOM) n = e.childNodes[t];
				else {
					for (; e.parentNode != this.contentDOM;) e = e.parentNode;
					n = e.nextSibling;
				}
				for (; n && !((r = n.pmViewDesc) && r.parent == this);) n = n.nextSibling;
				return n ? this.posBeforeChild(r) : this.posAtEnd;
			}
		}
		let r;
		if (e == this.dom && this.contentDOM) r = t > Ef(this.contentDOM);
		else if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM)) {
			let n = e.compareDocumentPosition(this.contentDOM);
			r = n & 16 ? t > Array.from(e.childNodes).findIndex((e) => e.contains(this.contentDOM)) : !(n & 4);
		} else if (this.dom.firstChild) {
			if (t == 0) for (let t = e;; t = t.parentNode) {
				if (t == this.dom) {
					r = !1;
					break;
				}
				if (t.previousSibling) break;
			}
			if (r == null && t == e.childNodes.length) for (let t = e;; t = t.parentNode) {
				if (t == this.dom) {
					r = !0;
					break;
				}
				if (t.nextSibling) break;
			}
		}
		return r ?? n > 0 ? this.posAtEnd : this.posAtStart;
	}
	nearestDesc(e, t = !1) {
		for (let n = !0, r = e; r; r = r.parentNode) {
			let i = this.getDesc(r), a;
			if (i && (!t || i.node)) {
				if (n && (a = i.nodeDOM) && !(W(a) ? If(a, e) : a == e)) n = !1;
				else return i;
			}
		}
	}
	getDesc(e) {
		let t = e.pmViewDesc;
		for (let e = t; e; e = e.parent) if (e == this) return t;
	}
	posFromDOM(e, t, n) {
		for (let r = e; r; r = r.parentNode) {
			let i = this.getDesc(r);
			if (i) return i.localPosFromDOM(e, t, n);
		}
		return -1;
	}
	descAt(e) {
		for (let t = 0, n = 0; t < this.children.length; t++) {
			let r = this.children[t], i = n + r.size;
			if (n == e && i != n) {
				for (; !r.border && r.children.length;) for (let e = 0; e < r.children.length; e++) {
					let t = r.children[e];
					if (t.size) {
						r = t;
						break;
					}
				}
				return r;
			}
			if (e < i) return r.descAt(e - n - r.border);
			n = i;
		}
	}
	domFromPos(e, t) {
		if (!this.contentDOM) return {
			node: this.dom,
			offset: 0,
			atom: e + 1
		};
		let n = 0, r = 0;
		for (let t = 0; n < this.children.length; n++) {
			let i = this.children[n], a = t + i.size;
			if (a > e) {
				r = e - t;
				break;
			}
			t = a;
		}
		if (r) return this.children[n].domFromPos(r - this.children[n].border, t);
		for (; n > 0; n--) {
			let e = this.children[n - 1];
			if (e.size || !(e instanceof $p || e instanceof qp && e.side >= 0)) break;
		}
		if (t <= 0) {
			let e, r = !0;
			for (; e = n ? this.children[n - 1] : null, e && e.dom.parentNode != this.contentDOM; n--, r = !1);
			return e && t && r && !e.border && !e.domAtom ? e.domFromPos(e.size, t) : {
				node: this.contentDOM,
				offset: e ? Ef(e.dom) + 1 : 0
			};
		}
		{
			let e, r = !0;
			for (; e = n < this.children.length ? this.children[n] : null, e && e.dom.parentNode != this.contentDOM; n++, r = !1);
			return e && r && !e.border && !e.domAtom ? e.domFromPos(0, t) : {
				node: this.contentDOM,
				offset: e ? Ef(e.dom) : this.contentDOM.childNodes.length
			};
		}
	}
	parseRange(e, t, n = 0) {
		if (this.children.length == 0) return {
			node: this.contentDOM,
			from: e,
			to: t,
			fromOffset: 0,
			toOffset: this.contentDOM.childNodes.length
		};
		let r = -1, i = -1;
		for (let a = n, o = 0;; o++) {
			let n = this.children[o], s = a + n.size;
			if (r == -1 && e <= s) {
				let i = a + n.border;
				if (e >= i && t <= s - n.border && n.node && n.contentDOM && this.contentDOM.contains(n.contentDOM)) return n.parseRange(e, t, i);
				e = a;
				for (let t = o; t > 0; t--) {
					let n = this.children[t - 1];
					if (n.size && n.dom.parentNode == this.contentDOM && !n.emptyChildAt(1)) {
						r = Ef(n.dom) + 1;
						break;
					}
					e -= n.size;
				}
				r == -1 && (r = 0);
			}
			if (r > -1 && (s > t || o == this.children.length - 1)) {
				t = s;
				for (let e = o + 1; e < this.children.length; e++) {
					let n = this.children[e];
					if (n.size && n.dom.parentNode == this.contentDOM && !n.emptyChildAt(-1)) {
						i = Ef(n.dom);
						break;
					}
					t += n.size;
				}
				i == -1 && (i = this.contentDOM.childNodes.length);
				break;
			}
			a = s;
		}
		return {
			node: this.contentDOM,
			from: e,
			to: t,
			fromOffset: r,
			toOffset: i
		};
	}
	emptyChildAt(e) {
		if (this.border || !this.contentDOM || !this.children.length) return !1;
		let t = this.children[e < 0 ? 0 : this.children.length - 1];
		return t.size == 0 || t.emptyChildAt(e);
	}
	domAfterPos(e) {
		let { node: t, offset: n } = this.domFromPos(e, 0);
		if (!W(t) || n == t.childNodes.length) throw RangeError("No node after pos " + e);
		return t.childNodes[n];
	}
	setSelection(e, t, n, r = !1) {
		let i = Math.min(e, t), a = Math.max(e, t);
		for (let o = 0, s = 0; o < this.children.length; o++) {
			let c = this.children[o], l = s + c.size;
			if (i > s && a < l) return c.setSelection(e - s - c.border, t - s - c.border, n, r);
			s = l;
		}
		let o = this.domFromPos(e, e ? -1 : 1), s = t == e ? o : this.domFromPos(t, t ? -1 : 1), c = n.root.getSelection(), l = n.domSelectionRange(), u = !1;
		if (($f || rp) && e == t) {
			let { node: e, offset: t } = o;
			if (Ff(e)) {
				if (u = !!(t && e.nodeValue[t - 1] == "\n"), u && t == e.nodeValue.length) for (let t = e, n; t; t = t.parentNode) {
					if (n = t.nextSibling) {
						n.nodeName == "BR" && (o = s = {
							node: n.parentNode,
							offset: Ef(n) + 1
						});
						break;
					}
					let e = t.pmViewDesc;
					if (e && e.node && e.node.isBlock) break;
				}
			} else {
				let n = e.childNodes[t - 1];
				u = n && (n.nodeName == "BR" || n.contentEditable == "false");
			}
		}
		if ($f && l.focusNode && l.focusNode != s.node && W(l.focusNode)) {
			let e = l.focusNode.childNodes[l.focusOffset];
			e && e.contentEditable == "false" && (r = !0);
		}
		if (!(r || u && rp) && jf(o.node, o.offset, l.anchorNode, l.anchorOffset) && jf(s.node, s.offset, l.focusNode, l.focusOffset)) return;
		let d = !1;
		if ((c.extend || e == t) && !(u && $f)) {
			c.collapse(o.node, o.offset);
			try {
				e != t && c.extend(s.node, s.offset), d = !0;
			} catch {}
		}
		if (!d) {
			if (e > t) {
				let e = o;
				o = s, s = e;
			}
			let n = document.createRange();
			n.setEnd(s.node, s.offset), n.setStart(o.node, o.offset), c.removeAllRanges(), c.addRange(n);
		}
	}
	ignoreMutation(e) {
		return !this.contentDOM && e.type != "selection";
	}
	get contentLost() {
		return this.contentDOM && this.contentDOM != this.dom && !this.dom.contains(this.contentDOM);
	}
	markDirty(e, t) {
		for (let n = 0, r = 0; r < this.children.length; r++) {
			let i = this.children[r], a = n + i.size;
			if (n == a ? e <= a && t >= n : e < a && t > n) {
				let r = n + i.border, o = a - i.border;
				if (e >= r && t <= o) {
					this.dirty = e == n || t == a ? Wp : Up, e == r && t == o && (i.contentLost || i.dom.parentNode != this.contentDOM) ? i.dirty = Gp : i.markDirty(e - r, t - r);
					return;
				}
				i.dirty = i.dom == i.contentDOM && i.dom.parentNode == this.contentDOM && !i.children.length ? Wp : Gp;
			}
			n = a;
		}
		this.dirty = Wp;
	}
	markParentsDirty() {
		let e = 1;
		for (let t = this.parent; t; t = t.parent, e++) {
			let n = e == 1 ? Wp : Up;
			t.dirty < n && (t.dirty = n);
		}
	}
	get domAtom() {
		return !1;
	}
	get ignoreForCoords() {
		return !1;
	}
	get ignoreForSelection() {
		return !1;
	}
	isText(e) {
		return !1;
	}
}, qp = class extends Kp {
	constructor(e, t, n, r) {
		let i, a = t.type.toDOM;
		if (typeof a == "function" && (a = a(n, () => {
			if (!i) return r;
			if (i.parent) return i.parent.posBeforeChild(i);
		})), !t.type.spec.raw) {
			let e = W(a) ? a : document.createElement("span");
			e != a && (e.appendChild(a), a = e), e.hasAttribute("contenteditable") || (e.contentEditable = "false"), e.classList.add("ProseMirror-widget");
		}
		super(e, [], a, null), this.widget = t, this.widget = t, i = this;
	}
	matchesWidget(e) {
		return this.dirty == Hp && e.type.eq(this.widget.type);
	}
	parseRule() {
		return { ignore: !0 };
	}
	stopEvent(e) {
		let t = this.widget.spec.stopEvent;
		return t ? t(e) : !1;
	}
	ignoreMutation(e) {
		return e.type != "selection" || this.widget.spec.ignoreSelection;
	}
	destroy() {
		this.widget.type.destroy(this.dom), super.destroy();
	}
	get domAtom() {
		return !0;
	}
	get ignoreForSelection() {
		return !!this.widget.type.spec.relaxedSide;
	}
	get side() {
		return this.widget.type.side;
	}
}, Jp = class extends Kp {
	constructor(e, t, n, r) {
		super(e, [], t, null), this.textDOM = n, this.text = r;
	}
	get size() {
		return this.text.length;
	}
	localPosFromDOM(e, t) {
		return e == this.textDOM ? this.posAtStart + t : this.posAtStart + (t ? this.size : 0);
	}
	domFromPos(e) {
		return {
			node: this.textDOM,
			offset: e
		};
	}
	ignoreMutation(e) {
		return e.type === "characterData" && e.target.nodeValue == e.oldValue;
	}
}, Yp = class e extends Kp {
	constructor(e, t, n, r, i) {
		super(e, [], n, r), this.mark = t, this.spec = i;
	}
	static create(t, n, r, i) {
		let a = i.nodeViews[n.type.name], o = a && a(n, i, r);
		return o && o.dom || (o = Ul.renderSpec(document, n.type.spec.toDOM(n, r), null, n.attrs)), new e(t, n, o.dom, o.contentDOM || o.dom, o);
	}
	parseRule() {
		return this.dirty & Gp || this.mark.type.spec.reparseInView ? null : {
			mark: this.mark.type.name,
			attrs: this.mark.attrs,
			contentElement: this.contentDOM
		};
	}
	matchesMark(e) {
		return this.dirty != Gp && this.mark.eq(e);
	}
	markDirty(e, t) {
		if (super.markDirty(e, t), this.dirty != Hp) {
			let e = this.parent;
			for (; !e.node;) e = e.parent;
			e.dirty < this.dirty && (e.dirty = this.dirty), this.dirty = Hp;
		}
	}
	slice(t, n, r) {
		let i = e.create(this.parent, this.mark, !0, r), a = this.children, o = this.size;
		n < o && (a = gm(a, n, o, r)), t > 0 && (a = gm(a, 0, t, r));
		for (let e = 0; e < a.length; e++) a[e].parent = i;
		return i.children = a, i;
	}
	ignoreMutation(e) {
		return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e);
	}
	destroy() {
		this.spec.destroy && this.spec.destroy(), super.destroy();
	}
}, Xp = class e extends Kp {
	constructor(e, t, n, r, i, a, o) {
		super(e, [], i, a), this.node = t, this.outerDeco = n, this.innerDeco = r, this.nodeDOM = o;
	}
	static create(t, n, r, i, a, o) {
		let s = a.nodeViews[n.type.name], c, l = s && s(n, a, () => {
			if (!c) return o;
			if (c.parent) return c.parent.posBeforeChild(c);
		}, r, i), u = l && l.dom, d = l && l.contentDOM;
		if (n.isText) {
			if (!u) u = document.createTextNode(n.text);
			else if (!Ff(u)) throw RangeError("Text must be rendered as a DOM text node");
		} else if (!u) {
			let e = Ul.renderSpec(document, n.type.spec.toDOM(n), null, n.attrs);
			({dom: u, contentDOM: d} = e);
		}
		!d && !n.isText && u.nodeName != "BR" && (u.hasAttribute("contenteditable") || (u.contentEditable = "false"), n.type.spec.draggable && (u.draggable = !0));
		let f = u;
		return u = sm(u, r, n), l ? c = new em(t, n, r, i, u, d || null, f, l) : n.isText ? new Qp(t, n, r, i, u, f) : new e(t, n, r, i, u, d || null, f);
	}
	parseRule(e) {
		if (this.node.type.spec.reparseInView) return null;
		let t = {
			node: this.node.type.name,
			attrs: this.node.attrs
		};
		if (this.node.type.whitespace == "pre" && (t.preserveWhitespace = "full"), !this.contentDOM) t.getContent = () => this.node.content;
		else if (!this.contentLost) t.contentElement = this.contentDOM;
		else {
			for (let e = this.children.length - 1; e >= 0; e--) {
				let n = this.children[e];
				if (this.dom.contains(n.dom.parentNode)) {
					t.contentElement = n.dom.parentNode;
					break;
				}
			}
			if (!t.contentElement) {
				let n = e && e.find((t) => W(t) && e.indexOf(t.parentNode) < 0 && this.dom.contains(t));
				n ? t.contentElement = n : t.getContent = () => I.empty;
			}
		}
		return t;
	}
	matchesNode(e, t, n) {
		return this.dirty == Hp && e.eq(this.node) && cm(t, this.outerDeco) && n.eq(this.innerDeco);
	}
	get size() {
		return this.node.nodeSize;
	}
	get border() {
		return +!this.node.isLeaf;
	}
	updateChildren(e, t) {
		let n = this.node.inlineContent, r = t, i = e.composing ? this.localCompositionInfo(e, t) : null, a = i && i.pos > -1 ? i : null, o = i && i.pos < 0, s = new um(this, a && a.node, e), c = this.node.inlineContent, l = c && this.node.isBlock;
		pm(this.node, this.innerDeco, (t, i, a) => {
			t.spec.marks ? s.syncToMarks(t.spec.marks, n, e, i) : t.type.side >= 0 && !a && s.syncToMarks(i == this.node.childCount ? L.none : this.node.child(i).marks, n, e, i), s.placeWidget(t, e, r);
		}, (t, a, u, d) => {
			s.syncToMarks(t.marks, n, e, d), l && t.isAtom && !t.isText && s.addHackNode("IMG", s.top);
			let f;
			s.findNodeMatch(t, a, u, d) || o && e.state.selection.from > r && e.state.selection.to < r + t.nodeSize && (f = s.findIndexWithChild(i.node)) > -1 && s.updateNodeAt(t, a, u, f, e) || s.updateNextNode(t, a, u, e, d, r) || s.addNode(t, a, u, e, r), r += t.nodeSize, c && (l = t.isAtom && !t.isText);
		}), s.syncToMarks([], n, e, 0), this.node.isTextblock && s.addTextblockHacks(), s.destroyRest(), (s.changed || this.dirty == Wp) && (a && this.protectLocalComposition(e, a), tm(this.contentDOM, this.children, e), ip && mm(this.dom));
	}
	localCompositionInfo(e, t) {
		let { from: n, to: r } = e.state.selection;
		if (!(e.state.selection instanceof B) || n < t || r > t + this.node.content.size) return null;
		let i = e.input.compositionNode;
		if (!i || !this.dom.contains(i.parentNode)) return null;
		if (this.node.inlineContent) {
			let e = i.nodeValue, a = hm(this.node.content, e, n - t, r - t);
			return a < 0 ? null : {
				node: i,
				pos: a,
				text: e
			};
		}
		return {
			node: i,
			pos: -1,
			text: ""
		};
	}
	protectLocalComposition(e, { node: t, pos: n, text: r }) {
		if (this.getDesc(t)) return;
		let i = t;
		for (; i.parentNode != this.contentDOM; i = i.parentNode) {
			for (; i.previousSibling;) i.parentNode.removeChild(i.previousSibling);
			for (; i.nextSibling;) i.parentNode.removeChild(i.nextSibling);
			i.pmViewDesc && (i.pmViewDesc = void 0);
		}
		let a = new Jp(this, i, t, r);
		e.input.compositionNodes.push(a), this.children = gm(this.children, n, n + r.length, e, a);
	}
	update(e, t, n, r) {
		return this.dirty == Gp || !e.sameMarkup(this.node) ? !1 : (this.updateInner(e, t, n, r), !0);
	}
	updateInner(e, t, n, r) {
		this.updateOuterDeco(t), this.node = e, this.innerDeco = n, this.contentDOM && this.updateChildren(r, this.posAtStart), this.dirty = Hp;
	}
	updateOuterDeco(e) {
		if (cm(e, this.outerDeco)) return;
		let t = !W(this.nodeDOM), n = this.dom;
		this.dom = am(this.dom, this.nodeDOM, im(this.outerDeco, this.node, t), im(e, this.node, t)), this.dom != n && (n.pmViewDesc = void 0, this.dom.pmViewDesc = this), this.outerDeco = e;
	}
	selectNode() {
		W(this.nodeDOM) && (this.nodeDOM.classList.add("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && (this.nodeDOM.draggable = !0));
	}
	deselectNode() {
		W(this.nodeDOM) && (this.nodeDOM.classList.remove("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && this.nodeDOM.removeAttribute("draggable"));
	}
	get domAtom() {
		return this.node.isAtom;
	}
};
function Zp(e, t, n, r, i) {
	sm(r, t, e);
	let a = new Xp(void 0, e, t, n, r, r, r);
	return a.contentDOM && a.updateChildren(i, 0), a;
}
var Qp = class e extends Xp {
	constructor(e, t, n, r, i, a) {
		super(e, t, n, r, i, null, a);
	}
	parseRule() {
		let e = this.nodeDOM.parentNode;
		for (; e && e != this.dom && !e.pmIsDeco;) e = e.parentNode;
		return { skip: e || !0 };
	}
	update(e, t, n, r) {
		return this.dirty == Gp || this.dirty != Hp && !this.inParent() || !e.sameMarkup(this.node) ? !1 : (this.updateOuterDeco(t), (this.dirty != Hp || e.text != this.node.text) && e.text != this.nodeDOM.nodeValue && (this.nodeDOM.nodeValue = e.text, r.trackWrites == this.nodeDOM && (r.trackWrites = null)), this.node = e, this.dirty = Hp, !0);
	}
	inParent() {
		let e = this.parent.contentDOM;
		for (let t = this.nodeDOM; t; t = t.parentNode) if (t == e) return !0;
		return !1;
	}
	domFromPos(e) {
		return {
			node: this.nodeDOM,
			offset: e
		};
	}
	localPosFromDOM(e, t, n) {
		return e == this.nodeDOM ? this.posAtStart + Math.min(t, this.node.text.length) : super.localPosFromDOM(e, t, n);
	}
	ignoreMutation(e) {
		return e.type != "characterData" && e.type != "selection";
	}
	slice(t, n, r) {
		let i = this.node.cut(t, n), a = document.createTextNode(i.text);
		return new e(this.parent, i, this.outerDeco, this.innerDeco, a, a);
	}
	markDirty(e, t) {
		super.markDirty(e, t), this.dom != this.nodeDOM && (e == 0 || t == this.nodeDOM.nodeValue.length) && (this.dirty = Gp);
	}
	get domAtom() {
		return !1;
	}
	isText(e) {
		return this.node.text == e;
	}
}, $p = class extends Kp {
	parseRule() {
		return { ignore: !0 };
	}
	matchesHack(e) {
		return this.dirty == Hp && this.dom.nodeName == e;
	}
	get domAtom() {
		return !0;
	}
	get ignoreForCoords() {
		return this.dom.nodeName == "IMG";
	}
}, em = class extends Xp {
	constructor(e, t, n, r, i, a, o, s) {
		super(e, t, n, r, i, a, o), this.spec = s;
	}
	update(e, t, n, r) {
		if (this.dirty == Gp) return !1;
		if (this.spec.update && (this.node.type == e.type || this.spec.multiType)) {
			let i = this.spec.update(e, t, n);
			return i && this.updateInner(e, t, n, r), i;
		}
		return !this.contentDOM && !e.isLeaf ? !1 : super.update(e, t, n, r);
	}
	selectNode() {
		this.spec.selectNode ? this.spec.selectNode() : super.selectNode();
	}
	deselectNode() {
		this.spec.deselectNode ? this.spec.deselectNode() : super.deselectNode();
	}
	setSelection(e, t, n, r) {
		this.spec.setSelection ? this.spec.setSelection(e, t, n.root) : super.setSelection(e, t, n, r);
	}
	destroy() {
		this.spec.destroy && this.spec.destroy(), super.destroy();
	}
	stopEvent(e) {
		return this.spec.stopEvent ? this.spec.stopEvent(e) : !1;
	}
	ignoreMutation(e) {
		return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e);
	}
};
function tm(e, t, n) {
	let r = e.firstChild, i = !1;
	for (let a = 0; a < t.length; a++) {
		let o = t[a], s = o.dom;
		if (s.parentNode == e) {
			for (; s != r;) r = lm(r), i = !0;
			r = r.nextSibling;
		} else i = !0, e.insertBefore(s, r);
		if (o instanceof Yp) {
			let t = r ? r.previousSibling : e.lastChild;
			tm(o.contentDOM, o.children, n), r = t ? t.nextSibling : e.firstChild;
		}
	}
	for (; r;) r = lm(r), i = !0;
	i && n.trackWrites == e && (n.trackWrites = null);
}
var nm = function(e) {
	e && (this.nodeName = e);
};
nm.prototype = Object.create(null);
var rm = [new nm()];
function im(e, t, n) {
	if (e.length == 0) return rm;
	let r = n ? rm[0] : new nm(), i = [r];
	for (let a = 0; a < e.length; a++) {
		let o = e[a].type.attrs;
		if (o) {
			o.nodeName && i.push(r = new nm(o.nodeName));
			for (let e in o) {
				let a = o[e];
				a != null && (n && i.length == 1 && i.push(r = new nm(t.isInline ? "span" : "div")), e == "class" ? r.class = (r.class ? r.class + " " : "") + a : e == "style" ? r.style = (r.style ? r.style + ";" : "") + a : e != "nodeName" && (r[e] = a));
			}
		}
	}
	return i;
}
function am(e, t, n, r) {
	if (n == rm && r == rm) return t;
	let i = t;
	for (let t = 0; t < r.length; t++) {
		let a = r[t], o = n[t];
		if (t) {
			let t;
			o && o.nodeName == a.nodeName && i != e && (t = i.parentNode) && t.nodeName.toLowerCase() == a.nodeName || (t = document.createElement(a.nodeName), t.pmIsDeco = !0, t.appendChild(i), o = rm[0]), i = t;
		}
		om(i, o || rm[0], a);
	}
	return i;
}
function om(e, t, n) {
	for (let r in t) r != "class" && r != "style" && r != "nodeName" && !(r in n) && e.removeAttribute(r);
	for (let r in n) r != "class" && r != "style" && r != "nodeName" && n[r] != t[r] && e.setAttribute(r, n[r]);
	if (t.class != n.class) {
		let r = t.class ? t.class.split(" ").filter(Boolean) : [], i = n.class ? n.class.split(" ").filter(Boolean) : [];
		for (let t = 0; t < r.length; t++) i.indexOf(r[t]) == -1 && e.classList.remove(r[t]);
		for (let t = 0; t < i.length; t++) r.indexOf(i[t]) == -1 && e.classList.add(i[t]);
		e.classList.length == 0 && e.removeAttribute("class");
	}
	if (t.style != n.style) {
		if (t.style) {
			let n = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g, r;
			for (; r = n.exec(t.style);) e.style.removeProperty(r[1]);
		}
		n.style && (e.style.cssText += n.style);
	}
}
function sm(e, t, n) {
	return am(e, e, rm, im(t, n, !W(e)));
}
function cm(e, t) {
	if (e.length != t.length) return !1;
	for (let n = 0; n < e.length; n++) if (!e[n].type.eq(t[n].type)) return !1;
	return !0;
}
function lm(e) {
	let t = e.nextSibling;
	return e.parentNode.removeChild(e), t;
}
var um = class {
	constructor(e, t, n) {
		this.lock = t, this.view = n, this.index = 0, this.stack = [], this.changed = !1, this.top = e, this.preMatch = dm(e.node.content, e);
	}
	destroyBetween(e, t) {
		if (e != t) {
			for (let n = e; n < t; n++) this.top.children[n].destroy();
			this.top.children.splice(e, t - e), this.changed = !0;
		}
	}
	destroyRest() {
		this.destroyBetween(this.index, this.top.children.length);
	}
	syncToMarks(e, t, n, r) {
		let i = 0, a = this.stack.length >> 1, o = Math.min(a, e.length);
		for (; i < o && (i == a - 1 ? this.top : this.stack[i + 1 << 1]).matchesMark(e[i]) && e[i].type.spec.spanning !== !1;) i++;
		for (; i < a;) this.destroyRest(), this.top.dirty = Hp, this.index = this.stack.pop(), this.top = this.stack.pop(), a--;
		for (; a < e.length;) {
			this.stack.push(this.top, this.index + 1);
			let i = -1, o = this.top.children.length;
			r < this.preMatch.index && (o = Math.min(this.index + 3, o));
			for (let t = this.index; t < o; t++) {
				let n = this.top.children[t];
				if (n.matchesMark(e[a]) && !this.isLocked(n.dom)) {
					i = t;
					break;
				}
			}
			if (i < 0 && this.index < this.top.children.length) {
				let t = this.top.children[this.index];
				t instanceof Yp && t.dirty != Gp && t.mark.type == e[a].type && t.spec.update && !this.isLocked(t.dom) && t.spec.update(e[a]) && (t.mark = e[a], i = this.index, this.changed = !0);
			}
			if (i > -1) i > this.index && (this.changed = !0, this.destroyBetween(this.index, i)), this.top = this.top.children[this.index];
			else {
				let r = Yp.create(this.top, e[a], t, n);
				this.top.children.splice(this.index, 0, r), this.top = r, this.changed = !0;
			}
			this.index = 0, a++;
		}
	}
	findNodeMatch(e, t, n, r) {
		let i = -1, a;
		if (r >= this.preMatch.index && (a = this.preMatch.matches[r - this.preMatch.index]).parent == this.top && a.matchesNode(e, t, n)) i = this.top.children.indexOf(a, this.index);
		else for (let r = this.index, a = Math.min(this.top.children.length, r + 5); r < a; r++) {
			let a = this.top.children[r];
			if (a.matchesNode(e, t, n) && !this.preMatch.matched.has(a)) {
				i = r;
				break;
			}
		}
		return i < 0 ? !1 : (this.destroyBetween(this.index, i), this.index++, !0);
	}
	updateNodeAt(e, t, n, r, i) {
		let a = this.top.children[r];
		return a.dirty == Gp && a.dom == a.contentDOM && (a.dirty = Wp), a.update(e, t, n, i) ? (this.destroyBetween(this.index, r), this.index++, !0) : !1;
	}
	findIndexWithChild(e) {
		for (;;) {
			let t = e.parentNode;
			if (!t) return -1;
			if (t == this.top.contentDOM) {
				let t = e.pmViewDesc;
				if (t) {
					for (let e = this.index; e < this.top.children.length; e++) if (this.top.children[e] == t) return e;
				}
				return -1;
			}
			e = t;
		}
	}
	updateNextNode(e, t, n, r, i, a) {
		for (let o = this.index; o < this.top.children.length; o++) {
			let s = this.top.children[o];
			if (s instanceof Xp) {
				let c = this.preMatch.matched.get(s);
				if (c != null && c != i) return !1;
				let l = s.dom, u, d = this.isLocked(l) && !(e.isText && s.node && s.node.isText && s.nodeDOM.nodeValue == e.text && s.dirty != Gp && cm(t, s.outerDeco));
				if (!d && s.update(e, t, n, r)) return this.destroyBetween(this.index, o), s.dom != l && (this.changed = !0), this.index++, !0;
				if (!d && (u = this.recreateWrapper(s, e, t, n, r, a))) return this.destroyBetween(this.index, o), this.top.children[this.index] = u, u.contentDOM && (u.dirty = Wp, u.updateChildren(r, a + 1), u.dirty = Hp), this.changed = !0, this.index++, !0;
				break;
			}
		}
		return !1;
	}
	recreateWrapper(e, t, n, r, i, a) {
		if (e.dirty || t.isAtom || !e.children.length || !e.node.content.eq(t.content) || !cm(n, e.outerDeco) || !r.eq(e.innerDeco)) return null;
		let o = Xp.create(this.top, t, n, r, i, a);
		if (o.contentDOM) {
			o.children = e.children, e.children = [];
			for (let e of o.children) e.parent = o;
		}
		return e.destroy(), o;
	}
	addNode(e, t, n, r, i) {
		let a = Xp.create(this.top, e, t, n, r, i);
		a.contentDOM && a.updateChildren(r, i + 1), this.top.children.splice(this.index++, 0, a), this.changed = !0;
	}
	placeWidget(e, t, n) {
		let r = this.index < this.top.children.length ? this.top.children[this.index] : null;
		if (r && r.matchesWidget(e) && (e == r.widget || !r.widget.type.toDOM.parentNode)) this.index++;
		else {
			let r = new qp(this.top, e, t, n);
			this.top.children.splice(this.index++, 0, r), this.changed = !0;
		}
	}
	addTextblockHacks() {
		let e = this.top.children[this.index - 1], t = this.top;
		for (; e instanceof Yp;) t = e, e = t.children[t.children.length - 1];
		(!e || !(e instanceof Qp) || /\n$/.test(e.node.text) || this.view.requiresGeckoHackNode && /\s$/.test(e.node.text)) && ((rp || tp) && e && e.dom.contentEditable == "false" && this.addHackNode("IMG", t), this.addHackNode("BR", this.top));
	}
	addHackNode(e, t) {
		if (t == this.top && this.index < t.children.length && t.children[this.index].matchesHack(e)) this.index++;
		else {
			let n = document.createElement(e);
			e == "IMG" && (n.className = "ProseMirror-separator", n.alt = ""), e == "BR" && (n.className = "ProseMirror-trailingBreak");
			let r = new $p(this.top, [], n, null);
			t == this.top ? t.children.splice(this.index++, 0, r) : t.children.push(r), this.changed = !0;
		}
	}
	isLocked(e) {
		return this.lock && (e == this.lock || W(e) && e.contains(this.lock.parentNode));
	}
};
function dm(e, t) {
	let n = t, r = n.children.length, i = e.childCount, a = /* @__PURE__ */ new Map(), o = [];
	outer: for (; i > 0;) {
		let s;
		for (;;) if (r) {
			let e = n.children[r - 1];
			if (e instanceof Yp) n = e, r = e.children.length;
			else {
				s = e, r--;
				break;
			}
		} else if (n == t) break outer;
		else r = n.parent.children.indexOf(n), n = n.parent;
		let c = s.node;
		if (c) {
			if (c != e.child(i - 1)) break;
			--i, a.set(s, i), o.push(s);
		}
	}
	return {
		index: i,
		matched: a,
		matches: o.reverse()
	};
}
function fm(e, t) {
	return e.type.side - t.type.side;
}
function pm(e, t, n, r) {
	let i = t.locals(e), a = 0;
	if (i.length == 0) {
		for (let n = 0; n < e.childCount; n++) {
			let o = e.child(n);
			r(o, i, t.forChild(a, o), n), a += o.nodeSize;
		}
		return;
	}
	let o = 0, s = [], c = null;
	for (let l = 0;;) {
		let u, d;
		for (; o < i.length && i[o].to == a;) {
			let e = i[o++];
			e.widget && (u ? (d ||= [u]).push(e) : u = e);
		}
		if (u) {
			if (d) {
				d.sort(fm);
				for (let e = 0; e < d.length; e++) n(d[e], l, !!c);
			} else n(u, l, !!c);
		}
		let f, p;
		if (c) p = -1, f = c, c = null;
		else if (l < e.childCount) p = l, f = e.child(l++);
		else break;
		for (let e = 0; e < s.length; e++) s[e].to <= a && s.splice(e--, 1);
		for (; o < i.length && i[o].from <= a && i[o].to > a;) s.push(i[o++]);
		let m = a + f.nodeSize;
		if (f.isText) {
			let e = m;
			o < i.length && i[o].from < e && (e = i[o].from);
			for (let t = 0; t < s.length; t++) s[t].to < e && (e = s[t].to);
			e < m && (c = f.cut(e - a), f = f.cut(0, e - a), m = e, p = -1);
		} else for (; o < i.length && i[o].to < m;) o++;
		let h = f.isInline && !f.isLeaf ? s.filter((e) => !e.inline) : s.slice();
		r(f, h, t.forChild(a, f), p), a = m;
	}
}
function mm(e) {
	if (e.nodeName == "UL" || e.nodeName == "OL") {
		let t = e.style.cssText;
		e.style.cssText = t + "; list-style: square !important", window.getComputedStyle(e).listStyle, e.style.cssText = t;
	}
}
function hm(e, t, n, r) {
	for (let i = 0, a = 0; i < e.childCount && a <= r;) {
		let o = e.child(i++), s = a;
		if (a += o.nodeSize, !o.isText) continue;
		let c = o.text;
		for (; i < e.childCount;) {
			let t = e.child(i++);
			if (a += t.nodeSize, !t.isText) break;
			c += t.text;
		}
		if (a >= n) {
			if (a >= r && c.slice(r - t.length - s, r - s) == t) return r - t.length;
			let e = s < r ? c.lastIndexOf(t, r - s - 1) : -1;
			if (e >= 0 && e + t.length + s >= n) return s + e;
			if (n == r && c.length >= r + t.length - s && c.slice(r - s, r - s + t.length) == t) return r;
		}
	}
	return -1;
}
function gm(e, t, n, r, i) {
	let a = [];
	for (let o = 0, s = 0; o < e.length; o++) {
		let c = e[o], l = s, u = s += c.size;
		l >= n || u <= t ? a.push(c) : (l < t && a.push(c.slice(0, t - l, r)), i &&= (a.push(i), void 0), u > n && a.push(c.slice(n - l, c.size, r)));
	}
	return a;
}
function _m(e, t = null) {
	let n = e.domSelectionRange(), r = e.state.doc;
	if (!n.focusNode) return null;
	let i = e.docView.nearestDesc(n.focusNode), a = i && i.size == 0, o = e.docView.posFromDOM(n.focusNode, n.focusOffset, 1);
	if (o < 0) return null;
	let s = r.resolve(o), c, l;
	if (Vf(n)) {
		for (c = o; i && !i.node;) i = i.parent;
		if (i && i.node.isAtom && V.isSelectable(i.node) && i.parent && !(i.node.isInline && zf(n.focusNode, n.focusOffset, i.dom))) {
			let e = i.posBefore;
			l = new V(o == e ? s : r.resolve(e));
		} else if ($f && t == "key" && o > e.state.selection.to && W(n.focusNode) && n.focusOffset == n.focusNode.childNodes.length && i && i.posAtStart > e.state.selection.to) for (let e = n.focusNode;; e = e.parentNode) {
			if (getComputedStyle(e).overflow != "visible") {
				l = z.findFrom(r.resolve(i.posAtStart), 1);
				break;
			}
			if (e == i.dom || e.nextSibling || !e.parentNode || !W(e.parentNode)) break;
		}
	} else {
		if (n instanceof e.dom.ownerDocument.defaultView.Selection && n.rangeCount > 1) {
			let t = o, i = o;
			for (let r = 0; r < n.rangeCount; r++) {
				let a = n.getRangeAt(r);
				t = Math.min(t, e.docView.posFromDOM(a.startContainer, a.startOffset, 1)), i = Math.max(i, e.docView.posFromDOM(a.endContainer, a.endOffset, -1));
			}
			if (t < 0) return null;
			[c, o] = i == e.state.selection.anchor ? [i, t] : [t, i], s = r.resolve(o);
		} else c = e.docView.posFromDOM(n.anchorNode, n.anchorOffset, 1);
		if (c < 0) return null;
	}
	let u = r.resolve(c);
	if (!l) {
		let n = t == "pointer" || e.state.selection.head < s.pos && !a ? 1 : -1;
		l = Om(e, u, s, n);
	}
	return l;
}
function vm(e) {
	return e.editable ? e.hasFocus() : Am(e) && document.activeElement && document.activeElement.contains(e.dom);
}
function ym(e, t = !1) {
	let n = e.state.selection;
	if (Em(e, n), !vm(e)) return;
	let r = e.input.mouseDown;
	if (!t && tp && r) {
		let t = e.domSelectionRange(), n = e.domObserver.currentSelection;
		if (t.anchorNode && n.anchorNode && jf(t.anchorNode, t.anchorOffset, n.anchorNode, n.anchorOffset) && r.delaySelUpdate()) {
			e.domObserver.setCurSelection();
			return;
		}
	}
	if (e.domObserver.disconnectSelection(), e.cursorWrapper) Tm(e);
	else {
		let { anchor: r, head: i } = n, a, o;
		bm && !(n instanceof B) && (n.$from.parent.inlineContent || (a = xm(e, n.from)), !n.empty && !n.$from.parent.inlineContent && (o = xm(e, n.to))), e.docView.setSelection(r, i, e, t), bm && (a && Cm(a), o && Cm(o)), n.visible ? e.dom.classList.remove("ProseMirror-hideselection") : (e.dom.classList.add("ProseMirror-hideselection"), "onselectionchange" in document && wm(e));
	}
	e.domObserver.setCurSelection(), e.domObserver.connectSelection();
}
var bm = rp || tp && np < 63;
function xm(e, t) {
	let { node: n, offset: r } = e.docView.domFromPos(t, 0), i = r < n.childNodes.length ? n.childNodes[r] : null, a = r ? n.childNodes[r - 1] : null;
	if (rp && i && i.contentEditable == "false") return Sm(i);
	if ((!i || i.contentEditable == "false") && (!a || a.contentEditable == "false")) {
		if (i) return Sm(i);
		if (a) return Sm(a);
	}
}
function Sm(e) {
	return e.contentEditable = "true", rp && e.draggable && (e.draggable = !1, e.wasDraggable = !0), e;
}
function Cm(e) {
	e.contentEditable = "false", e.wasDraggable &&= (e.draggable = !0, null);
}
function wm(e) {
	let t = e.dom.ownerDocument;
	t.removeEventListener("selectionchange", e.input.hideSelectionGuard);
	let n = e.domSelectionRange(), r = n.anchorNode, i = n.anchorOffset;
	t.addEventListener("selectionchange", e.input.hideSelectionGuard = () => {
		(n.anchorNode != r || n.anchorOffset != i) && (t.removeEventListener("selectionchange", e.input.hideSelectionGuard), setTimeout(() => {
			(!vm(e) || e.state.selection.visible) && e.dom.classList.remove("ProseMirror-hideselection");
		}, 20));
	});
}
function Tm(e) {
	let t = e.domSelection();
	if (!t) return;
	let n = e.cursorWrapper.dom, r = n.nodeName == "IMG";
	r ? t.collapse(n.parentNode, Ef(n) + 1) : t.collapse(n, 0), !r && !e.state.selection.visible && Zf && Qf <= 11 && (n.disabled = !0, n.disabled = !1);
}
function Em(e, t) {
	if (t instanceof V) {
		let n = e.docView.descAt(t.from);
		n != e.lastSelectedViewDesc && (Dm(e), n && n.selectNode(), e.lastSelectedViewDesc = n);
	} else Dm(e);
}
function Dm(e) {
	e.lastSelectedViewDesc &&= (e.lastSelectedViewDesc.parent && e.lastSelectedViewDesc.deselectNode(), void 0);
}
function Om(e, t, n, r) {
	return e.someProp("createSelectionBetween", (r) => r(e, t, n)) || B.between(t, n, r);
}
function km(e) {
	return e.editable && !e.hasFocus() ? !1 : Am(e);
}
function Am(e) {
	let t = e.domSelectionRange();
	if (!t.anchorNode) return !1;
	try {
		return If(e.dom, t.anchorNode) && (e.editable || If(e.dom, t.focusNode));
	} catch {
		return !1;
	}
}
function jm(e) {
	let t = e.docView.domFromPos(e.state.selection.anchor, 0), n = e.domSelectionRange();
	return jf(t.node, t.offset, n.anchorNode, n.anchorOffset);
}
function Mm(e, t) {
	let { $anchor: n, $head: r } = e.selection, i = t > 0 ? n.max(r) : n.min(r), a = i.parent.inlineContent ? i.depth ? e.doc.resolve(t > 0 ? i.after() : i.before()) : null : i;
	return a && z.findFrom(a, t);
}
function Nm(e, t) {
	return e.dispatch(e.state.tr.setSelection(t).scrollIntoView()), !0;
}
function Pm(e, t, n) {
	let r = e.state.selection;
	if (r instanceof B) {
		if (n.indexOf("s") > -1) {
			let { $head: n } = r, i = n.textOffset ? null : t < 0 ? n.nodeBefore : n.nodeAfter;
			if (!i || i.isText || !i.isLeaf) return !1;
			let a = e.state.doc.resolve(n.pos + i.nodeSize * (t < 0 ? -1 : 1));
			return Nm(e, new B(r.$anchor, a));
		}
		if (!r.empty) return !1;
		if (e.endOfTextblock(t > 0 ? "forward" : "backward")) {
			let n = Mm(e.state, t);
			return n && n instanceof V ? Nm(e, n) : !1;
		}
		if (!ap || n.indexOf("m") < 0) {
			let n = r.$head, i = n.textOffset ? null : t < 0 ? n.nodeBefore : n.nodeAfter, a;
			if (!i || i.isText) return !1;
			let o = t < 0 ? n.pos - i.nodeSize : n.pos;
			return i.isAtom || (a = e.docView.descAt(o)) && !a.contentDOM ? V.isSelectable(i) ? Nm(e, new V(t < 0 ? e.state.doc.resolve(n.pos - i.nodeSize) : n)) : Nm(e, new B(e.state.doc.resolve(t < 0 ? o : o + i.nodeSize))) : !1;
		}
	} else if (r instanceof V && r.node.isInline) return Nm(e, new B(t > 0 ? r.$to : r.$from));
	else {
		let n = Mm(e.state, t);
		return n ? Nm(e, n) : !1;
	}
}
function Fm(e, t) {
	let n = e.pmViewDesc;
	return n ? n.size == 0 && (t < 0 || e.nextSibling || e.nodeName != "BR") : W(e) && e.contentEditable == "false";
}
function Im(e, t) {
	return t < 0 ? Lm(e) : Rm(e);
}
function Lm(e) {
	let t = e.domSelectionRange(), n = t.focusNode, r = t.focusOffset;
	if (!n) return;
	let i, a, o = !1;
	for ($f && W(n) && r < Pf(n) && Fm(n.childNodes[r], -1) && (o = !0);;) if (r > 0) {
		if (!W(n)) break;
		let e = n.childNodes[r - 1];
		if (Fm(e, -1)) i = n, a = --r;
		else if (Ff(e)) n = e, r = n.nodeValue.length;
		else break;
	} else if (zm(n)) break;
	else {
		let t = n.previousSibling;
		for (; t && Fm(t, -1);) i = n.parentNode, a = Ef(t), t = t.previousSibling;
		if (t) n = t, r = Pf(n);
		else {
			if (n = n.parentNode, n == e.dom) break;
			r = 0;
		}
	}
	o ? Hm(e, n, r) : i && Hm(e, i, a);
}
function Rm(e) {
	let t = e.domSelectionRange(), n = t.focusNode, r = t.focusOffset;
	if (!n) return;
	let i = Pf(n), a, o;
	for (;;) if (r < i) {
		if (!W(n)) break;
		let e = n.childNodes[r];
		if (Fm(e, 1)) a = n, o = ++r;
		else break;
	} else if (zm(n)) break;
	else {
		let t = n.nextSibling;
		for (; t && Fm(t, 1);) a = t.parentNode, o = Ef(t) + 1, t = t.nextSibling;
		if (t) n = t, r = 0, i = Pf(n);
		else {
			if (n = n.parentNode, n == e.dom) break;
			r = i = 0;
		}
	}
	a && Hm(e, a, o);
}
function zm(e) {
	let t = e.pmViewDesc;
	return t && t.node && t.node.isBlock;
}
function Bm(e, t) {
	for (; e && t == e.childNodes.length && !Bf(e);) t = Ef(e) + 1, e = e.parentNode;
	for (; e && t < e.childNodes.length;) {
		let n = e.childNodes[t];
		if (Ff(n)) return n;
		if (W(n) && n.contentEditable == "false") break;
		e = n, t = 0;
	}
}
function Vm(e, t) {
	for (; e && !t && !Bf(e);) t = Ef(e), e = e.parentNode;
	for (; e && t;) {
		let n = e.childNodes[t - 1];
		if (Ff(n)) return n;
		if (W(n) && n.contentEditable == "false") break;
		e = n, t = e.childNodes.length;
	}
}
function Hm(e, t, n) {
	if (!Ff(t)) {
		let e, r;
		(r = Bm(t, n)) ? (t = r, n = 0) : (e = Vm(t, n)) && (t = e, n = e.nodeValue.length);
	}
	let r = e.domSelection(), i = e.domSelectionRange();
	if (!r) return;
	Vf(i) ? r.collapse(t, n) : r.extend && (r.collapse(i.anchorNode, i.anchorOffset), r.extend(t, n)), e.domObserver.setCurSelection();
	let { state: a } = e;
	setTimeout(() => {
		e.state == a && ym(e);
	}, 50);
}
function Um(e, t) {
	let n = e.state.doc.resolve(t);
	if (!(tp || op) && n.parent.inlineContent) {
		let r = e.coordsAtPos(t);
		if (t > n.start()) {
			let n = e.coordsAtPos(t - 1), i = (n.top + n.bottom) / 2;
			if (i > r.top && i < r.bottom && Math.abs(n.left - r.left) > 1) return n.left < r.left ? "ltr" : "rtl";
		}
		if (t < n.end()) {
			let n = e.coordsAtPos(t + 1), i = (n.top + n.bottom) / 2;
			if (i > r.top && i < r.bottom && Math.abs(n.left - r.left) > 1) return n.left > r.left ? "ltr" : "rtl";
		}
	}
	let r = e.dom;
	for (let t = n.depth; t > 0; t--) if (n.node(t).isBlock) {
		r = e.nodeDOM(n.before(t)) || r;
		break;
	}
	return getComputedStyle(r).direction == "rtl" ? "rtl" : "ltr";
}
function Wm(e, t, n) {
	let r = e.state.selection;
	if (r instanceof B && !r.empty || n.indexOf("s") > -1 || ap && n.indexOf("m") > -1) return !1;
	let { $from: i, $to: a } = r;
	if (!i.parent.inlineContent || e.endOfTextblock(t < 0 ? "up" : "down")) {
		let n = Mm(e.state, t);
		if (n && n instanceof V) return Nm(e, n);
	}
	if (!i.parent.inlineContent) {
		let n = t < 0 ? i : a, o = r instanceof vd ? z.near(n, t) : z.findFrom(n, t);
		return o ? Nm(e, o) : !1;
	}
	return !1;
}
function Gm(e, t) {
	if (!(e.state.selection instanceof B)) return !0;
	let { $head: n, $anchor: r, empty: i } = e.state.selection;
	if (!n.sameParent(r)) return !0;
	if (!i) return !1;
	if (e.endOfTextblock(t > 0 ? "forward" : "backward")) return !0;
	let a = !n.textOffset && (t < 0 ? n.nodeBefore : n.nodeAfter);
	if (a && !a.isText) {
		let r = e.state.tr;
		return t < 0 ? r.delete(n.pos - a.nodeSize, n.pos) : r.delete(n.pos, n.pos + a.nodeSize), e.dispatch(r), !0;
	}
	return !1;
}
function Km(e, t, n) {
	e.domObserver.stop(), t.contentEditable = n, e.domObserver.start();
}
function qm(e) {
	if (!rp || e.state.selection.$head.parentOffset > 0) return !1;
	let { focusNode: t, focusOffset: n } = e.domSelectionRange();
	if (t && W(t) && n == 0 && t.firstChild && W(t.firstChild) && t.firstChild.contentEditable == "false") {
		let n = t.firstChild;
		Km(e, n, "true"), setTimeout(() => Km(e, n, "false"), 20);
	}
	return !1;
}
function Jm(e) {
	let t = "";
	return e.ctrlKey && (t += "c"), e.metaKey && (t += "m"), e.altKey && (t += "a"), e.shiftKey && (t += "s"), t;
}
function Ym(e, t) {
	let n = t.keyCode, r = Jm(t);
	if (n == 8 || ap && n == 72 && r == "c") return Gm(e, -1) || Im(e, -1);
	if (n == 46 && !t.shiftKey || ap && n == 68 && r == "c") return Gm(e, 1) || Im(e, 1);
	if (n == 13 || n == 27) return !0;
	if (n == 37 || ap && n == 66 && r == "c") {
		let t = n == 37 ? Um(e, e.state.selection.from) == "ltr" ? -1 : 1 : -1;
		return Pm(e, t, r) || Im(e, t);
	}
	if (n == 39 || ap && n == 70 && r == "c") {
		let t = n == 39 ? Um(e, e.state.selection.from) == "ltr" ? 1 : -1 : 1;
		return Pm(e, t, r) || Im(e, t);
	}
	return n == 38 || ap && n == 80 && r == "c" ? Wm(e, -1, r) || Im(e, -1) : n == 40 || ap && n == 78 && r == "c" ? qm(e) || Wm(e, 1, r) || Im(e, 1) : !(r != (ap ? "m" : "c") || n != 66 && n != 73 && n != 89 && n != 90);
}
function Xm(e, t) {
	e.someProp("transformCopied", (n) => {
		t = n(t, e);
	});
	let n = [], { content: r, openStart: i, openEnd: a } = t;
	for (; i > 1 && a > 1 && r.childCount == 1 && r.firstChild.childCount == 1;) {
		i--, a--;
		let e = r.firstChild;
		n.push(e.type.name, e.attrs == e.type.defaultAttrs ? null : e.attrs), r = e.content;
	}
	let o = e.someProp("clipboardSerializer") || Ul.fromSchema(e.state.schema), s = oh(), c = s.createElement("div");
	c.appendChild(o.serializeFragment(r, { document: s }));
	let l = c.firstChild, u, d = 0;
	for (; l && W(l) && (u = ah[l.nodeName.toLowerCase()]);) {
		for (let e = u.length - 1; e >= 0; e--) {
			let t = s.createElement(u[e]);
			for (; c.firstChild;) t.appendChild(c.firstChild);
			c.appendChild(t), d++;
		}
		l = c.firstChild;
	}
	return l && W(l) && l.setAttribute("data-pm-slice", `${i} ${a}${d ? ` -${d}` : ""} ${JSON.stringify(n)}`), {
		dom: c,
		text: e.someProp("clipboardTextSerializer", (n) => n(t, e)) || t.content.textBetween(0, t.content.size, "\n\n"),
		slice: t
	};
}
function Zm(e, t, n, r, i) {
	let a = i.parent.type.spec.code, o, s;
	if (!n && !t) return null;
	let c = !!t && (r || a || !n);
	if (c) {
		if (e.someProp("transformPastedText", (n) => {
			t = n(t, a || r, e);
		}), a) return s = new R(I.from(e.state.schema.text(t.replace(/\r\n?/g, "\n"))), 0, 0), e.someProp("transformPasted", (t) => {
			s = t(s, e, !0);
		}), s;
		let n = e.someProp("clipboardTextParser", (n) => n(t, i, r, e));
		if (n) s = n;
		else {
			let n = i.marks(), { schema: r } = e.state, a = Ul.fromSchema(r);
			o = document.createElement("div"), t.split(/(?:\r\n?|\n)+/).forEach((e) => {
				let t = o.appendChild(document.createElement("p"));
				e && t.appendChild(a.serializeNode(r.text(e, n)));
			});
		}
	} else e.someProp("transformPastedHTML", (t) => {
		n = t(n, e);
	}), o = lh(n), cp && uh(o);
	let l = o && o.querySelector("[data-pm-slice]"), u = l && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(l.getAttribute("data-pm-slice") || "");
	if (u && u[3]) for (let e = +u[3]; e > 0; e--) {
		let e = o.firstChild;
		for (; e && !W(e);) e = e.nextSibling;
		if (!e) break;
		o = e;
	}
	if (s ||= (e.someProp("clipboardParser") || e.someProp("domParser") || kl.fromSchema(e.state.schema)).parseSlice(o, {
		preserveWhitespace: !!(c || u),
		context: i,
		ruleFromNode(e) {
			return e.nodeName == "BR" && !e.nextSibling && e.parentNode && !Qm.test(e.parentNode.nodeName) ? { ignore: !0 } : null;
		}
	}), u) s = dh(ih(s, +u[1], +u[2]), u[4]);
	else if (s = R.maxOpen($m(s.content, i), !0), s.openStart || s.openEnd) {
		let e = 0, t = 0;
		for (let t = s.content.firstChild; e < s.openStart && !t.type.spec.isolating; e++, t = t.firstChild);
		for (let e = s.content.lastChild; t < s.openEnd && !e.type.spec.isolating; t++, e = e.lastChild);
		s = ih(s, e, t);
	}
	return e.someProp("transformPasted", (t) => {
		s = t(s, e, c);
	}), s;
}
var Qm = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
function $m(e, t) {
	if (e.childCount < 2) return e;
	for (let n = t.depth; n >= 0; n--) {
		let r = t.node(n).contentMatchAt(t.index(n)), i, a = [];
		if (e.forEach((e) => {
			if (!a) return;
			let t = r.findWrapping(e.type), n;
			if (!t) return a = null;
			if (n = a.length && i.length && th(t, i, e, a[a.length - 1], 0)) a[a.length - 1] = n;
			else {
				a.length && (a[a.length - 1] = nh(a[a.length - 1], i.length));
				let n = eh(e, t);
				a.push(n), r = r.matchType(n.type), i = t;
			}
		}), a) return I.from(a);
	}
	return e;
}
function eh(e, t, n = 0) {
	for (let r = t.length - 1; r >= n; r--) e = t[r].create(null, I.from(e));
	return e;
}
function th(e, t, n, r, i) {
	if (i < e.length && i < t.length && e[i] == t[i]) {
		let a = th(e, t, n, r.lastChild, i + 1);
		if (a) return r.copy(r.content.replaceChild(r.childCount - 1, a));
		if (r.contentMatchAt(r.childCount).matchType(i == e.length - 1 ? n.type : e[i + 1])) return r.copy(r.content.append(I.from(eh(n, e, i + 1))));
	}
}
function nh(e, t) {
	if (t == 0) return e;
	let n = e.content.replaceChild(e.childCount - 1, nh(e.lastChild, t - 1)), r = e.contentMatchAt(e.childCount).fillBefore(I.empty, !0);
	return e.copy(n.append(r));
}
function rh(e, t, n, r, i, a) {
	let o = t < 0 ? e.firstChild : e.lastChild, s = o.content;
	return e.childCount > 1 && (a = 0), i < r - 1 && (s = rh(s, t, n, r, i + 1, a)), i >= n && (s = t < 0 ? o.contentMatchAt(0).fillBefore(s, a <= i).append(s) : s.append(o.contentMatchAt(o.childCount).fillBefore(I.empty, !0))), e.replaceChild(t < 0 ? 0 : e.childCount - 1, o.copy(s));
}
function ih(e, t, n) {
	return t < e.openStart && (e = new R(rh(e.content, -1, t, e.openStart, 0, e.openEnd), t, e.openEnd)), n < e.openEnd && (e = new R(rh(e.content, 1, n, e.openEnd, 0, 0), e.openStart, n)), e;
}
var ah = {
	thead: ["table"],
	tbody: ["table"],
	tfoot: ["table"],
	caption: ["table"],
	colgroup: ["table"],
	col: ["table", "colgroup"],
	tr: ["table", "tbody"],
	td: [
		"table",
		"tbody",
		"tr"
	],
	th: [
		"table",
		"tbody",
		"tr"
	]
};
function oh() {
	return document.implementation.createHTMLDocument("title");
}
var sh = null;
function ch(e) {
	let t = window.trustedTypes;
	if (!t) return e;
	if (!sh) {
		if (sh = t.defaultPolicy) try {
			return sh.createHTML(e);
		} catch {}
		sh = t.createPolicy("ProseMirrorClipboard", { createHTML: (e) => e });
	}
	return sh.createHTML(e);
}
function lh(e) {
	let t = /^(\s*<meta [^>]*>)*/.exec(e);
	t && (e = e.slice(t[0].length));
	let n = oh(), r = n.body, i = /<([a-z][^>\s]+)/i.exec(e), a;
	if ((a = i && ah[i[1].toLowerCase()]) && (e = a.map((e) => "<" + e + ">").join("") + e + a.map((e) => "</" + e + ">").reverse().join("")), r.innerHTML = ch(e), a) for (let e = 0; e < a.length; e++) r = r.querySelector(a[e]) || r;
	for (let e = 0; e < n.styleSheets.length; e++) {
		let t = n.styleSheets[e];
		for (let e = 0; e < t.rules.length; e++) {
			let n = t.rules[e];
			if (n instanceof CSSStyleRule) {
				let e = r.querySelectorAll(n.selectorText);
				for (let t = 0; t < e.length; t++) e[t].style.cssText += n.style.cssText;
			}
		}
	}
	return r;
}
function uh(e) {
	let t = e.querySelectorAll(tp ? "span:not([class]):not([style])" : "span.Apple-converted-space");
	for (let n = 0; n < t.length; n++) {
		let r = t[n];
		r.childNodes.length == 1 && r.textContent == "\xA0" && r.parentNode && r.parentNode.replaceChild(e.ownerDocument.createTextNode(" "), r);
	}
}
function dh(e, t) {
	if (!e.size) return e;
	let n = e.content.firstChild.type.schema, r;
	try {
		r = JSON.parse(t);
	} catch {
		return e;
	}
	let { content: i, openStart: a, openEnd: o } = e;
	for (let e = r.length - 2; e >= 0; e -= 2) {
		let t = n.nodes[r[e]];
		if (!t || t.hasRequiredAttrs()) break;
		try {
			i = I.from(t.create(r[e + 1], i));
		} catch {
			break;
		}
		a++, o++;
	}
	return new R(i, a, o);
}
var fh = {}, ph = {}, mh = {
	touchstart: !0,
	touchmove: !0
}, hh = class {
	constructor() {
		this.shiftKey = !1, this.mouseDown = null, this.lastKeyCode = null, this.lastKeyCodeTime = 0, this.lastKeyDispatched = !1, this.lastClick = {
			time: 0,
			x: 0,
			y: 0,
			type: "",
			button: 0
		}, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastIOSEnter = 0, this.lastIOSEnterFallbackTimeout = -1, this.lastFocus = 0, this.lastTouch = 0, this.lastChromeDelete = 0, this.composing = !1, this.compositionNode = null, this.composingTimeout = -1, this.compositionNodes = [], this.compositionEndedAt = -2e8, this.compositionID = 1, this.badSafariComposition = !1, this.compositionPendingChanges = 0, this.domChangeCount = 0, this.eventHandlers = Object.create(null), this.hideSelectionGuard = null;
	}
};
function gh(e) {
	for (let t in fh) {
		let n = fh[t];
		e.dom.addEventListener(t, e.input.eventHandlers[t] = (t) => {
			xh(e, t) && !bh(e, t) && (e.editable || !(t.type in ph)) && n(e, t);
		}, mh[t] ? { passive: !0 } : void 0);
	}
	rp && e.dom.addEventListener("input", () => null), yh(e);
}
function _h(e, t) {
	e.input.lastSelectionOrigin = t, e.input.lastSelectionTime = Date.now();
}
function vh(e) {
	e.input.mouseDown && e.input.mouseDown.done(), e.domObserver.stop();
	for (let t in e.input.eventHandlers) e.dom.removeEventListener(t, e.input.eventHandlers[t]);
	clearTimeout(e.input.composingTimeout), clearTimeout(e.input.lastIOSEnterFallbackTimeout);
}
function yh(e) {
	e.someProp("handleDOMEvents", (t) => {
		for (let n in t) e.input.eventHandlers[n] || e.dom.addEventListener(n, e.input.eventHandlers[n] = (t) => bh(e, t));
	});
}
function bh(e, t) {
	return e.someProp("handleDOMEvents", (n) => {
		let r = n[t.type];
		return r ? r(e, t) || t.defaultPrevented : !1;
	});
}
function xh(e, t) {
	if (!t.bubbles) return !0;
	if (t.defaultPrevented) return !1;
	for (let n = t.target; n != e.dom; n = n.parentNode) if (!n || n.nodeType == 11 || n.pmViewDesc && n.pmViewDesc.stopEvent(t)) return !1;
	return !0;
}
function Sh(e, t) {
	!bh(e, t) && fh[t.type] && (e.editable || !(t.type in ph)) && fh[t.type](e, t);
}
function Ch(e, t) {
	let { input: n } = e;
	return n.lastKeyDispatched || e.composing ? !1 : (n.lastKeyDispatched = !0, typeof t == "string" && (t = Hf(t == "Backspace" ? 8 : 13, t)), e.someProp("handleKeyDown", (n) => n(e, t)));
}
ph.keydown = (e, t) => {
	let n = t;
	if (e.input.shiftKey = n.keyCode == 16 || n.shiftKey, !Bh(e) && (e.input.lastKeyCode = n.keyCode, e.input.lastKeyCodeTime = Date.now(), e.input.lastKeyDispatched = !1, !(sp && tp && n.keyCode == 13))) {
		if (n.keyCode != 229 && e.domObserver.forceFlush(), ip && n.keyCode == 13 && !n.ctrlKey && !n.altKey && !n.metaKey) {
			let t = Date.now();
			e.input.lastIOSEnter = t, e.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
				e.input.lastIOSEnter == t && (Ch(e, "Enter"), e.input.lastIOSEnter = 0);
			}, 200);
		} else Ch(e, n) || Ym(e, n) ? n.preventDefault() : _h(e, "key");
	}
}, ph.keyup = (e, t) => {
	t.keyCode == 16 && (e.input.shiftKey = !1);
}, ph.keypress = (e, t) => {
	let n = t;
	if (Bh(e) || !n.charCode || n.ctrlKey && !n.altKey || ap && n.metaKey) return;
	if (e.someProp("handleKeyPress", (t) => t(e, n))) {
		n.preventDefault();
		return;
	}
	let r = e.state.selection;
	if (!(r instanceof B) || !r.$from.sameParent(r.$to)) {
		let t = String.fromCharCode(n.charCode), i = () => e.state.tr.insertText(t).scrollIntoView();
		!/[\r\n]/.test(t) && !e.someProp("handleTextInput", (n) => n(e, r.$from.pos, r.$to.pos, t, i)) && e.dispatch(i()), n.preventDefault();
	}
};
function wh(e) {
	return {
		left: e.clientX,
		top: e.clientY
	};
}
function Th(e, t) {
	let n = t.x - e.clientX, r = t.y - e.clientY;
	return n * n + r * r < 100;
}
function Eh(e, t, n, r, i) {
	if (r == -1) return !1;
	let a = e.state.doc.resolve(r);
	for (let r = a.depth + 1; r > 0; r--) if (e.someProp(t, (t) => r > a.depth ? t(e, n, a.nodeAfter, a.before(r), i, !0) : t(e, n, a.node(r), a.before(r), i, !1))) return !0;
	return !1;
}
function Dh(e, t, n) {
	if (e.focused || e.focus(), e.state.selection.eq(t)) return;
	let r = e.state.tr.setSelection(t);
	r.setMeta("pointer", !0), e.dispatch(r);
}
function Oh(e, t) {
	if (t == -1) return !1;
	let n = e.state.doc.resolve(t), r = n.nodeAfter;
	return r && r.isAtom && V.isSelectable(r) ? (Dh(e, new V(n)), !0) : !1;
}
function kh(e, t) {
	if (t == -1) return !1;
	let n = e.state.selection, r, i;
	n instanceof V && (r = n.node);
	let a = e.state.doc.resolve(t);
	for (let e = a.depth + 1; e > 0; e--) {
		let t = e > a.depth ? a.nodeAfter : a.node(e);
		if (V.isSelectable(t)) {
			i = r && n.$from.depth > 0 && e >= n.$from.depth && a.before(n.$from.depth + 1) == n.$from.pos ? a.before(n.$from.depth) : a.before(e);
			break;
		}
	}
	return i != null && (Dh(e, V.create(e.state.doc, i)), !0);
}
function Ah(e, t, n, r, i) {
	return Eh(e, "handleClickOn", t, n, r) || e.someProp("handleClick", (n) => n(e, t, r)) || (i ? kh(e, n) : Oh(e, n));
}
function jh(e, t, n, r) {
	return Eh(e, "handleDoubleClickOn", t, n, r) || e.someProp("handleDoubleClick", (n) => n(e, t, r));
}
function Mh(e, t, n, r) {
	return Eh(e, "handleTripleClickOn", t, n, r) || e.someProp("handleTripleClick", (n) => n(e, t, r)) || Nh(e, n, r);
}
function Nh(e, t, n) {
	if (n.button != 0) return !1;
	let r = Ph(e, t, !0), i = e.state.doc;
	return r ? (Dh(e, r), r instanceof B && i.eq(e.state.doc) && (e.input.mouseDown = new zh(e, r)), !0) : !1;
}
function Ph(e, t, n) {
	let r = e.state.doc;
	if (t == -1) return r.inlineContent ? B.create(r, 0, r.content.size) : null;
	let i = r.resolve(t);
	for (let e = i.depth + 1; e > 0; e--) {
		let t = e > i.depth ? i.nodeAfter : i.node(e), a = i.before(e);
		if (t.inlineContent) return B.create(r, a + 1, a + 1 + t.content.size);
		if (n && V.isSelectable(t)) return V.create(r, a);
	}
	return null;
}
function Fh(e) {
	return Kh(e);
}
var Ih = ap ? "metaKey" : "ctrlKey";
fh.mousedown = (e, t) => {
	let n = t;
	e.input.shiftKey = n.shiftKey;
	let r = Fh(e), i = Date.now(), a = "singleClick";
	i - e.input.lastClick.time < 500 && Th(n, e.input.lastClick) && !n[Ih] && e.input.lastClick.button == n.button && (e.input.lastClick.type == "singleClick" ? a = "doubleClick" : e.input.lastClick.type == "doubleClick" && (a = "tripleClick")), e.input.lastClick = {
		time: i,
		x: n.clientX,
		y: n.clientY,
		type: a,
		button: n.button
	}, e.input.mouseDown && e.input.mouseDown.done();
	let o = e.posAtCoords(wh(n));
	o && (a == "singleClick" ? e.input.mouseDown = new Rh(e, o, n, !!r) : (a == "doubleClick" ? jh : Mh)(e, o.pos, o.inside, n) ? n.preventDefault() : _h(e, "pointer"));
};
var Lh = class {
	constructor(e) {
		this.view = e, this.mightDrag = null, e.root.addEventListener("mouseup", this.up = this.up.bind(this)), e.root.addEventListener("mousemove", this.move = this.move.bind(this));
	}
	up(e) {
		this.done();
	}
	move(e) {
		e.buttons == 0 && this.done();
	}
	done() {
		this.view.root.removeEventListener("mouseup", this.up), this.view.root.removeEventListener("mousemove", this.move), this.view.input.mouseDown == this && (this.view.input.mouseDown = null);
	}
	delaySelUpdate() {
		return !1;
	}
}, Rh = class extends Lh {
	constructor(e, t, n, r) {
		super(e), this.pos = t, this.event = n, this.flushed = r, this.delayedSelectionSync = !1, this.startDoc = e.state.doc, this.selectNode = !!n[Ih], this.allowDefault = n.shiftKey;
		let i, a;
		if (t.inside > -1) i = e.state.doc.nodeAt(t.inside), a = t.inside;
		else {
			let n = e.state.doc.resolve(t.pos);
			i = n.parent, a = n.depth ? n.before() : 0;
		}
		let o = r ? null : n.target, s = o ? e.docView.nearestDesc(o, !0) : null;
		this.target = s && W(s.nodeDOM) ? s.nodeDOM : null;
		let { selection: c } = e.state;
		n.button == 0 && (i.type.spec.draggable && i.type.spec.selectable !== !1 || c instanceof V && c.from <= a && c.to > a) && (this.mightDrag = {
			node: i,
			pos: a,
			addAttr: !(!this.target || this.target.draggable),
			setUneditable: !!(this.target && $f && !this.target.hasAttribute("contentEditable"))
		}), this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(), this.mightDrag.addAttr && (this.target.draggable = !0), this.mightDrag.setUneditable && setTimeout(() => {
			this.view.input.mouseDown == this && this.target.setAttribute("contentEditable", "false");
		}, 20), this.view.domObserver.start()), _h(e, "pointer");
	}
	done() {
		super.done(), this.mightDrag && this.target && (this.view.domObserver.stop(), this.mightDrag.addAttr && this.target.removeAttribute("draggable"), this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"), this.view.domObserver.start()), this.delayedSelectionSync && setTimeout(() => {
			this.view.isDestroyed || ym(this.view);
		});
	}
	up(e) {
		if (this.done(), !this.view.dom.contains(e.target)) return;
		let t = this.pos;
		this.view.state.doc != this.startDoc && (t = this.view.posAtCoords(wh(e))), this.updateAllowDefault(e), this.allowDefault || !t ? _h(this.view, "pointer") : Ah(this.view, t.pos, t.inside, e, this.selectNode) ? e.preventDefault() : e.button == 0 && (this.flushed || rp && this.mightDrag && !this.mightDrag.node.isAtom || tp && !this.view.state.selection.visible && Math.min(Math.abs(t.pos - this.view.state.selection.from), Math.abs(t.pos - this.view.state.selection.to)) <= 2) ? (Dh(this.view, z.near(this.view.state.doc.resolve(t.pos))), e.preventDefault()) : _h(this.view, "pointer");
	}
	move(e) {
		this.updateAllowDefault(e), _h(this.view, "pointer"), super.move(e);
	}
	updateAllowDefault(e) {
		!this.allowDefault && (Math.abs(this.event.x - e.clientX) > 4 || Math.abs(this.event.y - e.clientY) > 4) && (this.allowDefault = !0);
	}
	delaySelUpdate() {
		return this.allowDefault ? (this.delayedSelectionSync = !0, !0) : !1;
	}
}, zh = class extends Lh {
	constructor(e, t) {
		super(e), this.startSelection = t, this.startDoc = e.state.doc;
	}
	move(e) {
		if (e.buttons == 0 || this.view.isDestroyed || !this.view.state.doc.eq(this.startDoc)) {
			this.done();
			return;
		}
		e.preventDefault(), _h(this.view, "pointer");
		let t = this.view.posAtCoords(wh(e)), n = t && Ph(this.view, t.inside, !1);
		if (!n) return;
		let { doc: r } = this.view.state, i = this.startSelection, [a, o] = n.from < i.from ? [i.to, n.from] : [i.from, n.to];
		Dh(this.view, B.create(r, a, o));
	}
};
fh.touchstart = (e) => {
	e.input.lastTouch = Date.now(), Fh(e), _h(e, "pointer");
}, fh.touchmove = (e) => {
	e.input.lastTouch = Date.now(), _h(e, "pointer");
}, fh.contextmenu = (e) => Fh(e);
function Bh(e, t) {
	return e.composing ? !0 : rp && Math.abs(Date.now() - e.input.compositionEndedAt) < 500 ? (e.input.compositionEndedAt = -2e8, !0) : !1;
}
var Vh = sp ? 5e3 : -1;
ph.compositionstart = ph.compositionupdate = (e) => {
	if (!e.composing) {
		e.domObserver.flush();
		let { state: t } = e, n = t.selection.$to;
		if (t.selection instanceof B && t.selection.empty && (t.storedMarks || !n.textOffset && n.parentOffset && n.nodeBefore.marks.some((e) => e.type.spec.inclusive === !1) || tp && op && Hh(e))) e.markCursor = e.state.storedMarks || n.marks(), Kh(e, !0), e.markCursor = null;
		else if (Kh(e, !t.selection.empty), $f && t.selection.empty && n.parentOffset && !n.textOffset && n.nodeBefore.marks.length) {
			let t = e.domSelectionRange();
			for (let n = t.focusNode, r = t.focusOffset; n && W(n) && r != 0;) {
				let t = r < 0 ? n.lastChild : n.childNodes[r - 1];
				if (!t) break;
				if (Ff(t)) {
					let n = e.domSelection();
					n && n.collapse(t, t.nodeValue.length);
					break;
				}
				n = t, r = -1;
			}
		}
		e.input.composing = !0;
	}
	Uh(e, Vh);
};
function Hh(e) {
	let { focusNode: t, focusOffset: n } = e.domSelectionRange();
	if (!t || !W(t) || n >= t.childNodes.length) return !1;
	let r = t.childNodes[n];
	return W(r) && r.contentEditable == "false";
}
ph.compositionend = (e, t) => {
	e.composing && (e.input.composing = !1, e.input.compositionEndedAt = Date.now(), e.input.compositionPendingChanges = e.domObserver.pendingRecords().length ? e.input.compositionID : 0, e.input.compositionNode = null, e.input.badSafariComposition ? e.domObserver.forceFlush() : e.input.compositionPendingChanges && Promise.resolve().then(() => e.domObserver.flush()), e.input.compositionID++, Uh(e, 20));
};
function Uh(e, t) {
	clearTimeout(e.input.composingTimeout), t > -1 && (e.input.composingTimeout = setTimeout(() => Kh(e), t));
}
function Wh(e) {
	for (e.composing && (e.input.composing = !1, e.input.compositionEndedAt = Date.now()); e.input.compositionNodes.length > 0;) e.input.compositionNodes.pop().markParentsDirty();
}
function Gh(e) {
	let t = e.domSelectionRange();
	if (!t.focusNode) return null;
	let n = Lf(t.focusNode, t.focusOffset), r = Rf(t.focusNode, t.focusOffset);
	if (n && r && n != r) {
		let t = r.pmViewDesc, i = e.domObserver.lastChangedTextNode;
		if (n == i || r == i) return i;
		if (!t || !t.isText(r.nodeValue)) return r;
		if (e.input.compositionNode == r) {
			let e = n.pmViewDesc;
			if (e && e.isText(n.nodeValue)) return r;
		}
	}
	return n || r;
}
function Kh(e, t = !1) {
	if (!(sp && e.domObserver.flushingSoon >= 0)) {
		if (e.domObserver.forceFlush(), Wh(e), t || e.docView && e.docView.dirty) {
			let n = _m(e), r = e.state.selection;
			return n && !n.eq(r) ? e.dispatch(e.state.tr.setSelection(n)) : (e.markCursor || t) && !r.$from.node(r.$from.sharedDepth(r.to)).inlineContent ? e.dispatch(e.state.tr.deleteSelection()) : e.updateState(e.state), !0;
		}
		return !1;
	}
}
function qh(e, t) {
	if (!e.dom.parentNode) return;
	let n = e.dom.parentNode.appendChild(document.createElement("div"));
	n.appendChild(t), n.style.cssText = "position: fixed; left: -10000px; top: 10px";
	let r = getSelection(), i = document.createRange();
	i.selectNodeContents(t), e.dom.blur(), r.removeAllRanges(), r.addRange(i), setTimeout(() => {
		n.parentNode && n.parentNode.removeChild(n), e.focus();
	}, 50);
}
var Jh = Zf && Qf < 15 || ip && lp < 604;
fh.copy = ph.cut = (e, t) => {
	let n = t, r = e.state.selection, i = n.type == "cut";
	if (r.empty) return;
	let a = Jh ? null : n.clipboardData, { dom: o, text: s } = Xm(e, r.content());
	a ? (n.preventDefault(), a.clearData(), a.setData("text/html", o.innerHTML), a.setData("text/plain", s)) : qh(e, o), i && e.dispatch(e.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
};
function Yh(e) {
	return e.openStart == 0 && e.openEnd == 0 && e.content.childCount == 1 ? e.content.firstChild : null;
}
function Xh(e, t) {
	if (!e.dom.parentNode) return;
	let n = e.input.shiftKey || e.state.selection.$from.parent.type.spec.code, r = e.dom.parentNode.appendChild(document.createElement(n ? "textarea" : "div"));
	n || (r.contentEditable = "true"), r.style.cssText = "position: fixed; left: -10000px; top: 10px", r.focus();
	let i = e.input.shiftKey && e.input.lastKeyCode != 45;
	setTimeout(() => {
		e.focus(), r.parentNode && r.parentNode.removeChild(r), n ? Zh(e, r.value, null, i, t) : Zh(e, r.textContent, r.innerHTML, i, t);
	}, 50);
}
function Zh(e, t, n, r, i) {
	let a = Zm(e, t, n, r, e.state.selection.$from);
	if (e.someProp("handlePaste", (t) => t(e, i, a || R.empty))) return !0;
	if (!a) return !1;
	let o = Yh(a), s = o ? e.state.tr.replaceSelectionWith(o, r) : e.state.tr.replaceSelection(a);
	return e.dispatch(s.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")), !0;
}
function Qh(e) {
	let t = e.getData("text/plain") || e.getData("Text");
	if (t) return t;
	let n = e.getData("text/uri-list");
	return n ? n.replace(/\r?\n/g, " ") : "";
}
ph.paste = (e, t) => {
	let n = t;
	if (e.composing && !sp) return;
	let r = Jh ? null : n.clipboardData, i = e.input.shiftKey && e.input.lastKeyCode != 45;
	r && Zh(e, Qh(r), r.getData("text/html"), i, n) ? n.preventDefault() : Xh(e, n);
};
var $h = class {
	constructor(e, t, n) {
		this.slice = e, this.move = t, this.node = n;
	}
}, eg = ap ? "altKey" : "ctrlKey";
function tg(e, t) {
	let n;
	return e.someProp("dragCopies", (e) => {
		n ||= e(t);
	}), n == null ? !t[eg] : !n;
}
fh.dragstart = (e, t) => {
	let n = t, r = e.input.mouseDown;
	if (r && r.done(), !n.dataTransfer) return;
	let i = e.state.selection, a = i.empty ? null : e.posAtCoords(wh(n)), o;
	if (!(a && a.pos >= i.from && a.pos <= (i instanceof V ? i.to - 1 : i.to))) {
		if (r && r.mightDrag) o = V.create(e.state.doc, r.mightDrag.pos);
		else if (n.target && W(n.target)) {
			let t = e.docView.nearestDesc(n.target, !0);
			t && t.node.type.spec.draggable && t != e.docView && (o = V.create(e.state.doc, t.posBefore));
		}
	}
	let { dom: s, text: c, slice: l } = Xm(e, (o || e.state.selection).content());
	(!n.dataTransfer.files.length || !tp || np > 120) && n.dataTransfer.clearData(), n.dataTransfer.setData(Jh ? "Text" : "text/html", s.innerHTML), n.dataTransfer.effectAllowed = "copyMove", Jh || n.dataTransfer.setData("text/plain", c), e.dragging = new $h(l, tg(e, n), o);
}, fh.dragend = (e) => {
	let t = e.dragging;
	window.setTimeout(() => {
		e.dragging == t && (e.dragging = null);
	}, 50);
}, ph.dragover = ph.dragenter = (e, t) => t.preventDefault(), ph.drop = (e, t) => {
	try {
		ng(e, t, e.dragging);
	} finally {
		e.dragging = null;
	}
};
function ng(e, t, n) {
	if (!t.dataTransfer) return;
	let r = e.posAtCoords(wh(t));
	if (!r) return;
	let i = e.state.doc.resolve(r.pos), a = n && n.slice;
	a ? e.someProp("transformPasted", (t) => {
		a = t(a, e, !1);
	}) : a = Zm(e, Qh(t.dataTransfer), Jh ? null : t.dataTransfer.getData("text/html"), !1, i);
	let o = !!(n && tg(e, t));
	if (e.someProp("handleDrop", (n) => n(e, t, a || R.empty, o))) {
		t.preventDefault();
		return;
	}
	if (!a) return;
	t.preventDefault();
	let s = a ? Gu(e.state.doc, i.pos, a) : i.pos;
	s ??= i.pos;
	let c = e.state.tr;
	if (o) {
		let { node: e } = n;
		e ? e.replace(c) : c.deleteSelection();
	}
	let l = c.mapping.map(s), u = a.openStart == 0 && a.openEnd == 0 && a.content.childCount == 1, d = c.doc;
	if (u ? c.replaceRangeWith(l, l, a.content.firstChild) : c.replaceRange(l, l, a), c.doc.eq(d)) return;
	let f = c.doc.resolve(l);
	if (u && V.isSelectable(a.content.firstChild) && f.nodeAfter && f.nodeAfter.sameMarkup(a.content.firstChild)) c.setSelection(new V(f));
	else {
		let t = c.mapping.map(s);
		c.mapping.maps[c.mapping.maps.length - 1].forEach((e, n, r, i) => t = i), c.setSelection(Om(e, f, c.doc.resolve(t)));
	}
	e.focus(), e.dispatch(c.setMeta("uiEvent", "drop"));
}
fh.focus = (e) => {
	if (e.input.lastFocus = Date.now(), !e.focused) {
		e.domObserver.stop(), e.dom.classList.add("ProseMirror-focused"), e.domObserver.start(), e.focused = !0;
		let t = e.domSelectionRange();
		if (!e.domObserver.currentSelection.eq(t)) {
			let { focusNode: n, focusOffset: r } = t;
			setTimeout(() => {
				let t = e.domSelectionRange();
				t.focusNode == n && t.focusOffset == r && e.docView && e.hasFocus() && ym(e);
			}, 20);
		}
	}
}, fh.blur = (e, t) => {
	let n = t;
	e.focused &&= (e.domObserver.stop(), e.dom.classList.remove("ProseMirror-focused"), e.domObserver.start(), n.relatedTarget && e.dom.contains(n.relatedTarget) && e.domObserver.currentSelection.clear(), !1);
}, fh.beforeinput = (e, t) => {
	if (sp && t.inputType == "deleteContentBackward") {
		e.domObserver.flushSoon();
		let { domChangeCount: t } = e.input;
		setTimeout(() => {
			if (e.input.domChangeCount != t || e.domObserver.pendingRecords().length || (e.dom.blur(), e.focus(), Ch(e, "Backspace"))) return;
			let { $cursor: n } = e.state.selection;
			n && n.pos > 0 && e.dispatch(e.state.tr.delete(n.pos - 1, n.pos).scrollIntoView());
		}, 50);
	}
};
for (let e in ph) fh[e] = ph[e];
function rg(e, t) {
	if (e == t) return !0;
	for (let n in e) if (e[n] !== t[n]) return !1;
	for (let n in t) if (!(n in e)) return !1;
	return !0;
}
var ig = class {
	constructor(e) {
		this.frag = e, this.index = 0, this.off = 0;
	}
	nodeAt(e) {
		for (; this.off <= e && this.index < this.frag.childCount;) {
			let t = this.frag.child(this.index);
			if (this.off == e) return t;
			this.off += t.nodeSize, this.index++;
		}
		return null;
	}
}, ag = class e {
	constructor(e, t) {
		this.toDOM = e, this.spec = t || ug, this.side = this.spec.side || 0;
	}
	map(e, t, n, r) {
		let { pos: i, deleted: a } = e.mapResult(t.from + r, this.side < 0 ? -1 : 1);
		return a ? null : new cg(i - n, i - n, this);
	}
	valid() {
		return !0;
	}
	eq(t) {
		return this == t || t instanceof e && (this.spec.key && this.spec.key == t.spec.key || this.toDOM == t.toDOM && rg(this.spec, t.spec));
	}
	destroy(e) {
		this.spec.destroy && this.spec.destroy(e);
	}
}, og = class e {
	constructor(e, t) {
		this.attrs = e, this.spec = t || ug;
	}
	map(e, t, n, r) {
		let i = e.map(t.from + r, this.spec.inclusiveStart ? -1 : 1) - n, a = e.map(t.to + r, this.spec.inclusiveEnd ? 1 : -1) - n;
		return i >= a ? null : new cg(i, a, this);
	}
	valid(e, t) {
		return t.from < t.to;
	}
	eq(t) {
		return this == t || t instanceof e && rg(this.attrs, t.attrs) && rg(this.spec, t.spec);
	}
	static is(t) {
		return t.type instanceof e;
	}
	destroy() {}
}, sg = class e {
	constructor(e, t) {
		this.attrs = e, this.spec = t || ug;
	}
	map(e, t, n, r) {
		let i = e.mapResult(t.from + r, 1);
		if (i.deleted) return null;
		let a = e.mapResult(t.to + r, -1);
		return a.deleted || a.pos <= i.pos ? null : new cg(i.pos - n, a.pos - n, this);
	}
	valid(e, t, n) {
		let r = n.nodeAt(t.from);
		return !!r && !r.isText && t.from + r.nodeSize == t.to;
	}
	eq(t) {
		return this == t || t instanceof e && rg(this.attrs, t.attrs) && rg(this.spec, t.spec);
	}
	destroy() {}
}, cg = class e {
	constructor(e, t, n) {
		this.from = e, this.to = t, this.type = n;
	}
	copy(t, n) {
		return new e(t, n, this.type);
	}
	eq(e, t = 0) {
		return this.type.eq(e.type) && this.from + t == e.from && this.to + t == e.to;
	}
	map(e, t, n) {
		return this.type.map(e, this, t, n);
	}
	static widget(t, n, r) {
		return new e(t, t, new ag(n, r));
	}
	static inline(t, n, r, i) {
		return new e(t, n, new og(r, i));
	}
	static node(t, n, r, i) {
		return new e(t, n, new sg(r, i));
	}
	get spec() {
		return this.type.spec;
	}
	get inline() {
		return this.type instanceof og;
	}
	get widget() {
		return this.type instanceof ag;
	}
}, lg = [], ug = {}, G = class e {
	constructor(e, t) {
		this.local = e.length ? e : lg, this.children = t.length ? t : lg;
	}
	static create(e, t) {
		return t.length ? vg(t, e, 0, ug) : dg;
	}
	find(e, t, n) {
		let r = [];
		return this.findInner(e ?? 0, t ?? 1e9, r, 0, n), r;
	}
	findInner(e, t, n, r, i) {
		for (let a = 0; a < this.local.length; a++) {
			let o = this.local[a];
			o.from <= t && o.to >= e && (!i || i(o.spec)) && n.push(o.copy(o.from + r, o.to + r));
		}
		for (let a = 0; a < this.children.length; a += 3) if (this.children[a] < t && this.children[a + 1] > e) {
			let o = this.children[a] + 1;
			this.children[a + 2].findInner(e - o, t - o, n, r + o, i);
		}
	}
	map(e, t, n) {
		return this == dg || e.maps.length == 0 ? this : this.mapInner(e, t, 0, 0, n || ug);
	}
	mapInner(t, n, r, i, a) {
		let o;
		if (this.local.length) {
			let e = new ig(n.content);
			for (let s = 0; s < this.local.length; s++) {
				let c = this.local[s].map(t, r, i);
				c && c.type.valid(n, c, e) ? (o ||= []).push(c) : a.onRemove && a.onRemove(this.local[s].spec);
			}
		}
		return this.children.length ? pg(this.children, o || [], t, n, r, i, a) : o ? new e(o.sort(yg), lg) : dg;
	}
	add(t, n) {
		return n.length ? this == dg ? e.create(t, n) : this.addInner(t, n, 0) : this;
	}
	addInner(t, n, r) {
		let i, a = 0;
		t.forEach((e, t) => {
			let o = t + r, s;
			if (s = gg(n, e, o)) {
				for (i ||= this.children.slice(); a < i.length && i[a] < t;) a += 3;
				i[a] == t ? i[a + 2] = i[a + 2].addInner(e, s, o + 1) : i.splice(a, 0, t, t + e.nodeSize, vg(s, e, o + 1, ug)), a += 3;
			}
		});
		let o = mg(a ? _g(n) : n, -r);
		if (o.length) {
			let e = new ig(t.content);
			for (let n = 0; n < o.length; n++) o[n].type.valid(t, o[n], e) || o.splice(n--, 1);
		}
		return new e(o.length ? this.local.concat(o).sort(yg) : this.local, i || this.children);
	}
	remove(e) {
		return e.length == 0 || this == dg ? this : this.removeInner(e, 0);
	}
	removeInner(t, n) {
		let r = this.children, i = this.local;
		for (let e = 0; e < r.length; e += 3) {
			let i, a = r[e] + n, o = r[e + 1] + n;
			for (let e = 0, n; e < t.length; e++) (n = t[e]) && n.from > a && n.to < o && (t[e] = null, (i ||= []).push(n));
			if (!i) continue;
			r == this.children && (r = this.children.slice());
			let s = r[e + 2].removeInner(i, a + 1);
			s == dg ? (r.splice(e, 3), e -= 3) : r[e + 2] = s;
		}
		if (i.length) {
			for (let e = 0, r; e < t.length; e++) if (r = t[e]) for (let e = 0; e < i.length; e++) i[e].eq(r, n) && (i == this.local && (i = this.local.slice()), i.splice(e--, 1));
		}
		return r == this.children && i == this.local ? this : i.length || r.length ? new e(i, r) : dg;
	}
	forChild(t, n) {
		if (this == dg) return this;
		if (n.isLeaf) return e.empty;
		let r, i;
		for (let e = 0; e < this.children.length; e += 3) if (this.children[e] >= t) {
			this.children[e] == t && (r = this.children[e + 2]);
			break;
		}
		let a = t + 1, o = a + n.content.size;
		for (let e = 0; e < this.local.length; e++) {
			let t = this.local[e];
			if (t.from < o && t.to > a && t.type instanceof og) {
				let e = Math.max(a, t.from) - a, n = Math.min(o, t.to) - a;
				e < n && (i ||= []).push(t.copy(e, n));
			}
		}
		if (i) {
			let t = new e(i.sort(yg), lg);
			return r ? new fg([t, r]) : t;
		}
		return r || dg;
	}
	eq(t) {
		if (this == t) return !0;
		if (!(t instanceof e) || this.local.length != t.local.length || this.children.length != t.children.length) return !1;
		for (let e = 0; e < this.local.length; e++) if (!this.local[e].eq(t.local[e])) return !1;
		for (let e = 0; e < this.children.length; e += 3) if (this.children[e] != t.children[e] || this.children[e + 1] != t.children[e + 1] || !this.children[e + 2].eq(t.children[e + 2])) return !1;
		return !0;
	}
	locals(e) {
		return bg(this.localsInner(e));
	}
	localsInner(e) {
		if (this == dg) return lg;
		if (e.inlineContent || !this.local.some(og.is)) return this.local;
		let t = [];
		for (let e = 0; e < this.local.length; e++) this.local[e].type instanceof og || t.push(this.local[e]);
		return t;
	}
	forEachSet(e) {
		e(this);
	}
};
G.empty = new G([], []), G.removeOverlap = bg;
var dg = G.empty, fg = class e {
	constructor(e) {
		this.members = e;
	}
	map(t, n) {
		let r = this.members.map((e) => e.map(t, n, ug));
		return e.from(r);
	}
	forChild(t, n) {
		if (n.isLeaf) return G.empty;
		let r = [];
		for (let i = 0; i < this.members.length; i++) {
			let a = this.members[i].forChild(t, n);
			a != dg && (a instanceof e ? r = r.concat(a.members) : r.push(a));
		}
		return e.from(r);
	}
	eq(t) {
		if (!(t instanceof e) || t.members.length != this.members.length) return !1;
		for (let e = 0; e < this.members.length; e++) if (!this.members[e].eq(t.members[e])) return !1;
		return !0;
	}
	locals(e) {
		let t, n = !0;
		for (let r = 0; r < this.members.length; r++) {
			let i = this.members[r].localsInner(e);
			if (i.length) {
				if (!t) t = i;
				else {
					n &&= (t = t.slice(), !1);
					for (let e = 0; e < i.length; e++) t.push(i[e]);
				}
			}
		}
		return t ? bg(n ? t : t.sort(yg)) : lg;
	}
	static from(t) {
		switch (t.length) {
			case 0: return dg;
			case 1: return t[0];
			default: return new e(t.every((e) => e instanceof G) ? t : t.reduce((e, t) => e.concat(t instanceof G ? t : t.members), []));
		}
	}
	forEachSet(e) {
		for (let t = 0; t < this.members.length; t++) this.members[t].forEachSet(e);
	}
};
function pg(e, t, n, r, i, a, o) {
	let s = e.slice();
	for (let e = 0, t = a; e < n.maps.length; e++) {
		let r = 0;
		n.maps[e].forEach((e, n, i, a) => {
			let o = a - i - (n - e);
			for (let i = 0; i < s.length; i += 3) {
				let a = s[i + 1];
				if (a < 0 || e > a + t - r) continue;
				let c = s[i] + t - r;
				n >= c ? s[i + 1] = e <= c ? -2 : -1 : e >= t && o && (s[i] += o, s[i + 1] += o);
			}
			r += o;
		}), t = n.maps[e].map(t, -1);
	}
	let c = !1;
	for (let t = 0; t < s.length; t += 3) if (s[t + 1] < 0) {
		if (s[t + 1] == -2) {
			c = !0, s[t + 1] = -1;
			continue;
		}
		let l = n.map(e[t] + a), u = l - i;
		if (u < 0 || u >= r.content.size) {
			c = !0;
			continue;
		}
		let d = n.map(e[t + 1] + a, -1) - i, { index: f, offset: p } = r.content.findIndex(u), m = r.maybeChild(f);
		if (m && p == u && p + m.nodeSize == d) {
			let r = s[t + 2].mapInner(n, m, l + 1, e[t] + a + 1, o);
			r == dg ? (s[t + 1] = -2, c = !0) : (s[t] = u, s[t + 1] = d, s[t + 2] = r);
		} else c = !0;
	}
	if (c) {
		let c = vg(hg(s, e, t, n, i, a, o), r, 0, o);
		t = c.local;
		for (let e = 0; e < s.length; e += 3) s[e + 1] < 0 && (s.splice(e, 3), e -= 3);
		for (let e = 0, t = 0; e < c.children.length; e += 3) {
			let n = c.children[e];
			for (; t < s.length && s[t] < n;) t += 3;
			s.splice(t, 0, c.children[e], c.children[e + 1], c.children[e + 2]);
		}
	}
	return new G(t.sort(yg), s);
}
function mg(e, t) {
	if (!t || !e.length) return e;
	let n = [];
	for (let r = 0; r < e.length; r++) {
		let i = e[r];
		n.push(new cg(i.from + t, i.to + t, i.type));
	}
	return n;
}
function hg(e, t, n, r, i, a, o) {
	function s(e, t) {
		for (let a = 0; a < e.local.length; a++) {
			let s = e.local[a].map(r, i, t);
			s ? n.push(s) : o.onRemove && o.onRemove(e.local[a].spec);
		}
		for (let n = 0; n < e.children.length; n += 3) s(e.children[n + 2], e.children[n] + t + 1);
	}
	for (let n = 0; n < e.length; n += 3) e[n + 1] == -1 && s(e[n + 2], t[n] + a + 1);
	return n;
}
function gg(e, t, n) {
	if (t.isLeaf) return null;
	let r = n + t.nodeSize, i = null;
	for (let t = 0, a; t < e.length; t++) (a = e[t]) && a.from > n && a.to < r && ((i ||= []).push(a), e[t] = null);
	return i;
}
function _g(e) {
	let t = [];
	for (let n = 0; n < e.length; n++) e[n] != null && t.push(e[n]);
	return t;
}
function vg(e, t, n, r) {
	let i = [], a = !1;
	t.forEach((t, o) => {
		let s = gg(e, t, o + n);
		if (s) {
			a = !0;
			let e = vg(s, t, n + o + 1, r);
			e != dg && i.push(o, o + t.nodeSize, e);
		}
	});
	let o = mg(a ? _g(e) : e, -n).sort(yg);
	if (o.length) {
		let e = new ig(t.content);
		for (let n = 0; n < o.length; n++) o[n].type.valid(t, o[n], e) || (r.onRemove && r.onRemove(o[n].spec), o.splice(n--, 1));
	}
	return o.length || i.length ? new G(o, i) : dg;
}
function yg(e, t) {
	return e.from - t.from || e.to - t.to;
}
function bg(e) {
	let t = e;
	for (let n = 0; n < t.length - 1; n++) {
		let r = t[n];
		if (r.from != r.to) for (let i = n + 1; i < t.length; i++) {
			let a = t[i];
			if (a.from == r.from) a.to != r.to && (t == e && (t = e.slice()), t[i] = a.copy(a.from, r.to), xg(t, i + 1, a.copy(r.to, a.to)));
			else {
				a.from < r.to && (t == e && (t = e.slice()), t[n] = r.copy(r.from, a.from), xg(t, i, r.copy(a.from, r.to)));
				break;
			}
		}
	}
	return t;
}
function xg(e, t, n) {
	for (; t < e.length && yg(n, e[t]) > 0;) t++;
	e.splice(t, 0, n);
}
function Sg(e) {
	let t = [];
	return e.someProp("decorations", (n) => {
		let r = n(e.state);
		r && r != dg && t.push(r);
	}), e.cursorWrapper && t.push(G.create(e.state.doc, [e.cursorWrapper.deco])), fg.from(t);
}
var Cg = {
	childList: !0,
	characterData: !0,
	characterDataOldValue: !0,
	attributes: !0,
	attributeOldValue: !0,
	subtree: !0
}, wg = Zf && Qf <= 11, Tg = class {
	constructor() {
		this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
	}
	set(e) {
		this.anchorNode = e.anchorNode, this.anchorOffset = e.anchorOffset, this.focusNode = e.focusNode, this.focusOffset = e.focusOffset;
	}
	clear() {
		this.anchorNode = this.focusNode = null;
	}
	eq(e) {
		return e.anchorNode == this.anchorNode && e.anchorOffset == this.anchorOffset && e.focusNode == this.focusNode && e.focusOffset == this.focusOffset;
	}
}, Eg = class {
	constructor(e, t) {
		this.view = e, this.handleDOMChange = t, this.queue = [], this.flushingSoon = -1, this.observer = null, this.currentSelection = new Tg(), this.onCharData = null, this.suppressingSelectionUpdates = !1, this.lastChangedTextNode = null, this.observer = window.MutationObserver && new window.MutationObserver((t) => {
			for (let e = 0; e < t.length; e++) this.queue.push(t[e]);
			Zf && Qf <= 11 && t.some((e) => e.type == "childList" && e.removedNodes.length || e.type == "characterData" && e.oldValue.length > e.target.nodeValue.length) ? this.flushSoon() : rp && e.composing && t.some((e) => e.type == "childList" && e.target.nodeName == "TR") ? (e.input.badSafariComposition = !0, this.flushSoon()) : this.flush();
		}), wg && (this.onCharData = (e) => {
			this.queue.push({
				target: e.target,
				type: "characterData",
				oldValue: e.prevValue
			}), this.flushSoon();
		}), this.onSelectionChange = this.onSelectionChange.bind(this);
	}
	flushSoon() {
		this.flushingSoon < 0 && (this.flushingSoon = window.setTimeout(() => {
			this.flushingSoon = -1, this.flush();
		}, 20));
	}
	forceFlush() {
		this.flushingSoon > -1 && (window.clearTimeout(this.flushingSoon), this.flushingSoon = -1, this.flush());
	}
	start() {
		this.observer && (this.observer.takeRecords(), this.observer.observe(this.view.dom, Cg)), this.onCharData && this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.connectSelection();
	}
	stop() {
		if (this.observer) {
			let e = this.observer.takeRecords();
			if (e.length) {
				for (let t = 0; t < e.length; t++) this.queue.push(e[t]);
				window.setTimeout(() => this.flush(), 20);
			}
			this.observer.disconnect();
		}
		this.onCharData && this.view.dom.removeEventListener("DOMCharacterDataModified", this.onCharData), this.disconnectSelection();
	}
	connectSelection() {
		this.view.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange);
	}
	disconnectSelection() {
		this.view.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange);
	}
	suppressSelectionUpdates() {
		this.suppressingSelectionUpdates = !0, setTimeout(() => this.suppressingSelectionUpdates = !1, 50);
	}
	onSelectionChange() {
		if (km(this.view)) {
			if (this.suppressingSelectionUpdates) return ym(this.view);
			if (Zf && Qf <= 11 && !this.view.state.selection.empty) {
				let e = this.view.domSelectionRange();
				if (e.focusNode && jf(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset)) return this.flushSoon();
			}
			this.flush();
		}
	}
	setCurSelection() {
		this.currentSelection.set(this.view.domSelectionRange());
	}
	ignoreSelectionChange(e) {
		if (!e.focusNode) return !0;
		let t = /* @__PURE__ */ new Set(), n;
		for (let n = e.focusNode; n; n = Df(n)) t.add(n);
		for (let r = e.anchorNode; r; r = Df(r)) if (t.has(r)) {
			n = r;
			break;
		}
		let r = n && this.view.docView.nearestDesc(n);
		if (r && r.ignoreMutation({
			type: "selection",
			target: Ff(n) ? n.parentNode : n
		})) return this.setCurSelection(), !0;
	}
	pendingRecords() {
		if (this.observer) for (let e of this.observer.takeRecords()) this.queue.push(e);
		return this.queue;
	}
	flush() {
		let { view: e } = this;
		if (!e.docView || this.flushingSoon > -1) return;
		let t = this.pendingRecords();
		t.length && (this.queue = []);
		let n, r = !1;
		!this.suppressingSelectionUpdates && km(e) && (n = e.domSelectionRange(), r = !this.currentSelection.eq(n) && !this.ignoreSelectionChange(n));
		let i = -1, a = -1, o = !1, s = [];
		if (e.editable) for (let e = 0; e < t.length; e++) {
			let n = this.registerMutation(t[e], s);
			n && (i = i < 0 ? n.from : Math.min(n.from, i), a = a < 0 ? n.to : Math.max(n.to, a), n.typeOver && (o = !0));
		}
		if (s.some((e) => e.nodeName == "BR") && (e.input.lastKeyCode == 8 || e.input.lastKeyCode == 46 || tp && (e.composing || e.input.compositionEndedAt > Date.now() - 50) && t.some((e) => e.type == "childList" && e.removedNodes.length))) {
			for (let e of s) if (e.nodeName == "BR" && e.parentNode) {
				let t = e.nextSibling;
				for (; t && W(t);) {
					if (t.contentEditable == "false") {
						e.parentNode.removeChild(e);
						break;
					}
					t = t.firstChild;
				}
			}
		} else if ($f && s.length) {
			let t = s.filter((e) => e.nodeName == "BR");
			if (t.length == 2) {
				let [e, n] = t;
				e.parentNode && e.parentNode.parentNode == n.parentNode ? n.remove() : e.remove();
			} else {
				let { focusNode: n } = this.currentSelection;
				for (let r of t) {
					let t = r.parentNode;
					t && t.nodeName == "LI" && (!n || Mg(e, n) != t) && r.remove();
				}
			}
		}
		let c = null;
		i < 0 && r && e.input.lastFocus > Date.now() - 200 && Math.max(e.input.lastTouch, e.input.lastClick.time) < Date.now() - 300 && Vf(n) && (c = _m(e)) && c.eq(z.near(e.state.doc.resolve(0), 1)) ? (e.input.lastFocus = 0, ym(e), this.currentSelection.set(n), e.scrollToSelection()) : (i > -1 || r) && (i > -1 && (e.docView.markDirty(i, a), kg(e)), e.input.badSafariComposition && (e.input.badSafariComposition = !1, Ng(e, s)), this.handleDOMChange(i, a, o, s), e.docView && e.docView.dirty ? e.updateState(e.state) : n && !this.currentSelection.eq(n) && ym(e), n && this.currentSelection.set(n));
	}
	registerMutation(e, t) {
		if (t.indexOf(e.target) > -1) return null;
		let n = this.view.docView.nearestDesc(e.target);
		if (e.type == "attributes" && (n == this.view.docView || e.attributeName == "contenteditable" || e.attributeName == "style" && !e.oldValue && !e.target.getAttribute("style")) || !n || n.ignoreMutation(e)) return null;
		if (e.type == "childList") {
			for (let n = 0; n < e.addedNodes.length; n++) {
				let r = e.addedNodes[n];
				t.push(r), Ff(r) && (this.lastChangedTextNode = r);
			}
			if (n.contentDOM && n.contentDOM != n.dom && !n.contentDOM.contains(e.target)) return {
				from: n.posBefore,
				to: n.posAfter
			};
			let r = e.previousSibling, i = e.nextSibling;
			if (Zf && Qf <= 11 && e.addedNodes.length) for (let t = 0; t < e.addedNodes.length; t++) {
				let { previousSibling: n, nextSibling: a } = e.addedNodes[t];
				(!n || Array.prototype.indexOf.call(e.addedNodes, n) < 0) && (r = n), (!a || Array.prototype.indexOf.call(e.addedNodes, a) < 0) && (i = a);
			}
			let a = r && r.parentNode == e.target ? Ef(r) + 1 : 0, o = n.localPosFromDOM(e.target, a, -1), s = i && i.parentNode == e.target ? Ef(i) : e.target.childNodes.length;
			return {
				from: o,
				to: n.localPosFromDOM(e.target, s, 1)
			};
		}
		return e.type == "attributes" ? {
			from: n.posAtStart - n.border,
			to: n.posAtEnd + n.border
		} : (this.lastChangedTextNode = e.target, {
			from: n.posAtStart,
			to: n.posAtEnd,
			typeOver: e.target.nodeValue == e.oldValue
		});
	}
}, Dg = /* @__PURE__ */ new WeakMap(), Og = !1;
function kg(e) {
	if (!Dg.has(e) && (Dg.set(e, null), [
		"normal",
		"nowrap",
		"pre-line"
	].indexOf(getComputedStyle(e.dom).whiteSpace) !== -1)) {
		if (e.requiresGeckoHackNode = $f, Og) return;
		console.warn("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package."), Og = !0;
	}
}
function Ag(e, t) {
	let n = t.startContainer, r = t.startOffset, i = t.endContainer, a = t.endOffset, o = e.domAtPos(e.state.selection.anchor);
	return jf(o.node, o.offset, i, a) && ([n, r, i, a] = [
		i,
		a,
		n,
		r
	]), {
		anchorNode: n,
		anchorOffset: r,
		focusNode: i,
		focusOffset: a
	};
}
function jg(e, t) {
	if (t.getComposedRanges) {
		let n = t.getComposedRanges(e.root)[0];
		if (n) return Ag(e, n);
	}
	let n;
	function r(e) {
		e.preventDefault(), e.stopImmediatePropagation(), n = e.getTargetRanges()[0];
	}
	return e.dom.addEventListener("beforeinput", r, !0), document.execCommand("indent"), e.dom.removeEventListener("beforeinput", r, !0), n ? Ag(e, n) : null;
}
function Mg(e, t) {
	for (let n = t.parentNode; n && n != e.dom; n = n.parentNode) {
		let t = e.docView.nearestDesc(n, !0);
		if (t && t.node.isBlock) return n;
	}
	return null;
}
function Ng(e, t) {
	let { focusNode: n, focusOffset: r } = e.domSelectionRange();
	for (let i of t) if (i.parentNode?.nodeName == "TR") {
		let t = i.nextSibling;
		for (; t && t.nodeName != "TD" && t.nodeName != "TH";) t = t.nextSibling;
		if (t) {
			let a = t;
			for (;;) {
				let e = a.firstChild;
				if (!e || !W(e) || e.contentEditable == "false" || /^(BR|IMG)$/.test(e.nodeName)) break;
				a = e;
			}
			a.insertBefore(i, a.firstChild), n == i && e.domSelection().collapse(i, r);
		} else i.parentNode.removeChild(i);
	}
}
function Pg(e, t, n, r) {
	let { node: i, fromOffset: a, toOffset: o, from: s, to: c } = e.docView.parseRange(t, n), l = e.domSelectionRange(), u, d = l.anchorNode;
	if (d && If(e.dom, d) && (u = [{
		node: d,
		offset: l.anchorOffset
	}], Vf(l) || u.push({
		node: l.focusNode,
		offset: l.focusOffset
	})), tp && e.input.lastKeyCode === 8) for (let e = o; e > a; e--) {
		let t = i.childNodes[e - 1], n = t.pmViewDesc;
		if (t.nodeName == "BR" && !n) {
			o = e;
			break;
		}
		if (!n || n.size) break;
	}
	let f = e.state.doc, p = e.someProp("domParser") || kl.fromSchema(e.state.schema), m = f.resolve(s), h = null, g = p.parse(i, {
		topNode: m.parent,
		topMatch: m.parent.contentMatchAt(m.index()),
		topOpen: !0,
		from: a,
		to: o,
		preserveWhitespace: m.parent.type.whitespace != "pre" || "full",
		findPositions: u,
		ruleFromNode: Fg(r),
		context: m
	});
	if (u && u[0].pos != null) {
		let e = u[0].pos, t = u[1] && u[1].pos;
		t ??= e, h = {
			anchor: e + s,
			head: t + s
		};
	}
	return {
		doc: g,
		sel: h,
		from: s,
		to: c
	};
}
var Fg = (e) => (t) => {
	let n = t.pmViewDesc;
	if (n) return n.parseRule(e);
	if (t.nodeName == "BR" && t.parentNode) {
		if (rp && /^(ul|ol)$/i.test(t.parentNode.nodeName)) {
			let e = document.createElement("div");
			return e.appendChild(document.createElement("li")), { skip: e };
		}
		if (t.parentNode.lastChild == t || rp && /^(tr|table)$/i.test(t.parentNode.nodeName)) return { ignore: !0 };
	} else if (t.nodeName == "IMG" && t.getAttribute("mark-placeholder")) return { ignore: !0 };
	return null;
}, Ig = /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|img|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
function Lg(e, t, n, r, i) {
	let a = e.input.compositionPendingChanges || (e.composing ? e.input.compositionID : 0);
	if (e.input.compositionPendingChanges = 0, t < 0) {
		let t = e.input.lastSelectionTime > Date.now() - 50 ? e.input.lastSelectionOrigin : null, n = _m(e, t);
		if (n && !e.state.selection.eq(n)) {
			if (tp && sp && e.input.lastKeyCode === 13 && Date.now() - 100 < e.input.lastKeyCodeTime && Ch(e, "Enter")) return;
			let r = e.state.tr.setSelection(n);
			t == "pointer" ? r.setMeta("pointer", !0) : t == "key" && r.scrollIntoView(), a && r.setMeta("composition", a), e.dispatch(r);
		}
		return;
	}
	let o = e.state.doc.resolve(t), s = o.sharedDepth(n);
	t = o.before(s + 1), n = e.state.doc.resolve(n).after(s + 1);
	let c = e.state.selection, l = Pg(e, t, n, i), u = e.state.doc, d = u.slice(l.from, l.to), f, p;
	e.input.lastKeyCode === 8 && Date.now() - 100 < e.input.lastKeyCodeTime ? (f = e.state.selection.to, p = "end") : (f = e.state.selection.from, p = "start"), e.input.lastKeyCode = null;
	let m = Ug(d.content, l.doc.content, l.from, f, p);
	if (m && e.input.domChangeCount++, (ip && e.input.lastIOSEnter > Date.now() - 225 || sp) && i.some((e) => W(e) && !Ig.test(e.nodeName)) && (!m || m.endA >= m.endB) && Ch(e, "Enter")) {
		e.input.lastIOSEnter = 0;
		return;
	}
	if (!m) {
		if (r && c instanceof B && !c.empty && c.$head.sameParent(c.$anchor) && !e.composing && !(l.sel && l.sel.anchor != l.sel.head)) m = {
			start: c.from,
			endA: c.to,
			endB: c.to
		};
		else {
			if (l.sel) {
				let t = Rg(e, e.state.doc, l.sel);
				if (t && !t.eq(e.state.selection)) {
					let n = e.state.tr.setSelection(t);
					a && n.setMeta("composition", a), e.dispatch(n);
				}
			}
			return;
		}
	}
	e.state.selection.from < e.state.selection.to && m.start == m.endB && e.state.selection instanceof B && (m.start > e.state.selection.from && m.start <= e.state.selection.from + 2 && e.state.selection.from >= l.from ? m.start = e.state.selection.from : m.endA < e.state.selection.to && m.endA >= e.state.selection.to - 2 && e.state.selection.to <= l.to && (m.endB += e.state.selection.to - m.endA, m.endA = e.state.selection.to)), Zf && Qf <= 11 && m.endB == m.start + 1 && m.endA == m.start && m.start > l.from && l.doc.textBetween(m.start - l.from - 1, m.start - l.from + 1) == " \xA0" && (m.start--, m.endA--, m.endB--);
	let h = l.doc.resolveNoCache(m.start - l.from), g = l.doc.resolveNoCache(m.endB - l.from), _ = u.resolve(m.start), v = h.sameParent(g) && h.parent.inlineContent && _.end() >= m.endA;
	if ((ip && e.input.lastIOSEnter > Date.now() - 225 && (!v || i.some((e) => e.nodeName == "DIV" || e.nodeName == "P")) || !v && Vg(l.doc, h.pos, g.pos)) && Ch(e, "Enter")) {
		e.input.lastIOSEnter = 0;
		return;
	}
	if (e.state.selection.anchor > m.start && (v ? m.endA > m.start && m.endB == m.start : Bg(u, m.start, m.endA, h, g)) && Ch(e, "Backspace")) {
		sp && tp && e.domObserver.suppressSelectionUpdates();
		return;
	}
	tp && m.endB == m.start && (e.input.lastChromeDelete = Date.now()), sp && !v && h.start() != g.start() && g.parentOffset == 0 && h.depth == g.depth && l.sel && l.sel.anchor == l.sel.head && l.sel.head == m.endA && (m.endB -= 2, g = l.doc.resolveNoCache(m.endB - l.from), setTimeout(() => Ch(e, "Enter"), 20));
	let y = m.start, b = m.endA, x = (t) => {
		let n = t || e.state.tr.replace(y, b, l.doc.slice(m.start - l.from, m.endB - l.from));
		if (l.sel) {
			let t = Rg(e, n.doc, l.sel);
			t && !(tp && e.composing && t.empty && (m.start != m.endB || e.input.lastChromeDelete < Date.now() - 100) && (t.head == y || t.head == n.mapping.map(b) - 1) || Zf && t.empty && t.head == y) && n.setSelection(t);
		}
		return a && n.setMeta("composition", a), n.scrollIntoView();
	}, S;
	if (v) {
		if (h.pos == g.pos) {
			Zf && Qf <= 11 && h.parentOffset == 0 && (e.domObserver.suppressSelectionUpdates(), setTimeout(() => ym(e), 20));
			let t = x(e.state.tr.delete(y, b)), n = u.resolve(m.start).marksAcross(u.resolve(m.endA));
			n && t.ensureMarks(n), e.dispatch(t);
		} else if (m.endA == m.endB && (S = zg(h.parent.content.cut(h.parentOffset, g.parentOffset), _.parent.content.cut(_.parentOffset, m.endA - _.start())))) {
			let t = x(e.state.tr);
			S.type == "add" ? t.addMark(y, b, S.mark) : t.removeMark(y, b, S.mark), e.dispatch(t);
		} else if (h.parent.child(h.index()).isText && h.index() == g.index() - +!g.textOffset) {
			let t = h.parent.textBetween(h.parentOffset, g.parentOffset), n = () => x(e.state.tr.insertText(t, y, b));
			e.someProp("handleTextInput", (r) => r(e, y, b, t, n)) || e.dispatch(n());
		} else e.dispatch(x());
	} else e.dispatch(x());
}
function Rg(e, t, n) {
	return Math.max(n.anchor, n.head) > t.content.size ? null : Om(e, t.resolve(n.anchor), t.resolve(n.head));
}
function zg(e, t) {
	let n = e.firstChild.marks, r = t.firstChild.marks, i = n, a = r, o, s, c;
	for (let e = 0; e < r.length; e++) i = r[e].removeFromSet(i);
	for (let e = 0; e < n.length; e++) a = n[e].removeFromSet(a);
	if (i.length == 1 && a.length == 0) s = i[0], o = "add", c = (e) => e.mark(s.addToSet(e.marks));
	else if (i.length == 0 && a.length == 1) s = a[0], o = "remove", c = (e) => e.mark(s.removeFromSet(e.marks));
	else return null;
	let l = [];
	for (let e = 0; e < t.childCount; e++) l.push(c(t.child(e)));
	if (I.from(l).eq(e)) return {
		mark: s,
		type: o
	};
}
function Bg(e, t, n, r, i) {
	if (n - t <= i.pos - r.pos || Hg(r, !0, !1) < i.pos) return !1;
	let a = e.resolve(t);
	if (!r.parent.inlineContent) {
		let e = a.nodeAfter;
		return e != null && n == t + e.nodeSize;
	}
	if (a.parentOffset < a.parent.content.size || !a.parent.isTextblock) return !1;
	let o = e.resolve(Hg(a, !0, !0));
	return !o.parent.isTextblock || o.pos > n || Hg(o, !0, !1) < n ? !1 : r.parent.content.cut(r.parentOffset).eq(o.parent.content);
}
function Vg(e, t, n) {
	let r = 0, i = 0;
	return e.nodesBetween(t, n, (e, a) => {
		e.isTextblock && a >= t && a < n ? r++ : (e.isText ? /\S/.test(e.text.slice(Math.max(0, t - a), Math.min(e.nodeSize, n - a))) : e.isLeaf) && i++;
	}), i == 0 && r == 1;
}
function Hg(e, t, n) {
	let r = e.depth, i = t ? e.end() : e.pos;
	for (; r > 0 && (t || e.indexAfter(r) == e.node(r).childCount);) r--, i++, t = !1;
	if (n) {
		let t = e.node(r).maybeChild(e.indexAfter(r));
		for (; t && !t.isLeaf;) t = t.firstChild, i++;
	}
	return i;
}
function Ug(e, t, n, r, i) {
	let a = e.findDiffStart(t, n), o = n + e.size, s = n + t.size;
	if (a == null) return null;
	let { a: c, b: l } = e.findDiffEnd(t, o, s);
	if (i == "end") {
		let e = Math.max(0, a - Math.min(c, l));
		r -= c + e - a;
	}
	if (c < a && o < s) {
		let e = r <= a && r >= c ? a - r : 0;
		a -= e, l = a + (l - c), c = a;
	} else if (l < a) {
		let e = r <= a && r >= l ? a - r : 0;
		a -= e, c = a + (c - l), l = a;
	}
	return {
		start: a,
		endA: c,
		endB: l
	};
}
var Wg = class {
	constructor(e, t) {
		this._root = null, this.focused = !1, this.trackWrites = null, this.mounted = !1, this.markCursor = null, this.cursorWrapper = null, this.lastSelectedViewDesc = void 0, this.input = new hh(), this.prevDirectPlugins = [], this.pluginViews = [], this.requiresGeckoHackNode = !1, this.dragging = null, this._props = t, this.state = t.state, this.directPlugins = t.plugins || [], this.directPlugins.forEach(Zg), this.dispatch = this.dispatch.bind(this), this.dom = e && e.mount || document.createElement("div"), e && (e.appendChild ? e.appendChild(this.dom) : typeof e == "function" ? e(this.dom) : e.mount && (this.mounted = !0)), this.editable = qg(this), Kg(this), this.nodeViews = Yg(this), this.docView = Zp(this.state.doc, Gg(this), Sg(this), this.dom, this), this.domObserver = new Eg(this, (e, t, n, r) => Lg(this, e, t, n, r)), this.domObserver.start(), gh(this), this.updatePluginViews();
	}
	get composing() {
		return this.input.composing;
	}
	get props() {
		if (this._props.state != this.state) {
			let e = this._props;
			this._props = {};
			for (let t in e) this._props[t] = e[t];
			this._props.state = this.state;
		}
		return this._props;
	}
	update(e) {
		e.handleDOMEvents != this._props.handleDOMEvents && yh(this);
		let t = this._props;
		this._props = e, e.plugins && (e.plugins.forEach(Zg), this.directPlugins = e.plugins), this.updateStateInner(e.state, t);
	}
	setProps(e) {
		let t = {};
		for (let e in this._props) t[e] = this._props[e];
		t.state = this.state;
		for (let n in e) t[n] = e[n];
		this.update(t);
	}
	updateState(e) {
		this.updateStateInner(e, this._props);
	}
	updateStateInner(e, t) {
		let n = this.state, r = !1, i = !1;
		e.storedMarks && this.composing && (Wh(this), i = !0), this.state = e;
		let a = n.plugins != e.plugins || this._props.plugins != t.plugins;
		if (a || this._props.plugins != t.plugins || this._props.nodeViews != t.nodeViews) {
			let e = Yg(this);
			Xg(e, this.nodeViews) && (this.nodeViews = e, r = !0);
		}
		(a || t.handleDOMEvents != this._props.handleDOMEvents) && yh(this), this.editable = qg(this), Kg(this);
		let o = Sg(this), s = Gg(this), c = n.plugins != e.plugins && !n.doc.eq(e.doc) ? "reset" : e.scrollToSelection > n.scrollToSelection ? "to selection" : "preserve", l = r || !this.docView.matchesNode(e.doc, s, o);
		(l || !e.selection.eq(n.selection)) && (i = !0);
		let u = c == "preserve" && i && this.dom.style.overflowAnchor == null && mp(this);
		if (i) {
			this.domObserver.stop();
			let t = l && (Zf || tp) && !this.composing && !n.selection.empty && !e.selection.empty && Jg(n.selection, e.selection);
			if (l) {
				let n = tp ? this.trackWrites = this.domSelectionRange().focusNode : null;
				this.composing && (this.input.compositionNode = Gh(this)), (r || !this.docView.update(e.doc, s, o, this)) && (this.docView.updateOuterDeco(s), this.docView.destroy(), this.docView = Zp(e.doc, s, o, this.dom, this)), !n || this.trackWrites && this.dom.contains(this.trackWrites) || (t = !0);
			}
			let i = this.input.mouseDown;
			t || !(i && this.domObserver.currentSelection.eq(this.domSelectionRange()) && jm(this) && i.delaySelUpdate()) ? ym(this, t) : (Em(this, e.selection), this.domObserver.setCurSelection()), this.domObserver.start();
		}
		this.updatePluginViews(n), this.dragging?.node && !n.doc.eq(e.doc) && this.updateDraggedNode(this.dragging, n), c == "reset" ? this.dom.scrollTop = 0 : c == "to selection" ? this.scrollToSelection() : u && gp(u);
	}
	scrollToSelection() {
		let e = this.domSelectionRange().focusNode;
		if (e && If(this.dom, e) && !this.someProp("handleScrollToSelection", (e) => e(this))) {
			if (this.state.selection instanceof V) {
				let t = this.docView.domAfterPos(this.state.selection.from);
				W(t) && pp(this, t.getBoundingClientRect(), e);
			} else pp(this, this.coordsAtPos(this.state.selection.head, 1), e);
		}
	}
	destroyPluginViews() {
		let e;
		for (; e = this.pluginViews.pop();) e.destroy && e.destroy();
	}
	updatePluginViews(e) {
		if (!e || e.plugins != this.state.plugins || this.directPlugins != this.prevDirectPlugins) {
			this.prevDirectPlugins = this.directPlugins, this.destroyPluginViews();
			for (let e = 0; e < this.directPlugins.length; e++) {
				let t = this.directPlugins[e];
				t.spec.view && this.pluginViews.push(t.spec.view(this));
			}
			for (let e = 0; e < this.state.plugins.length; e++) {
				let t = this.state.plugins[e];
				t.spec.view && this.pluginViews.push(t.spec.view(this));
			}
		} else for (let t = 0; t < this.pluginViews.length; t++) {
			let n = this.pluginViews[t];
			n.update && n.update(this, e);
		}
	}
	updateDraggedNode(e, t) {
		let n = e.node, r = -1;
		if (n.from < this.state.doc.content.size && this.state.doc.nodeAt(n.from) == n.node) r = n.from;
		else {
			let e = n.from + (this.state.doc.content.size - t.doc.content.size);
			(e > 0 && e < this.state.doc.content.size && this.state.doc.nodeAt(e)) == n.node && (r = e);
		}
		this.dragging = new $h(e.slice, e.move, r < 0 ? void 0 : V.create(this.state.doc, r));
	}
	someProp(e, t) {
		let n = this._props && this._props[e], r;
		if (n != null && (r = t ? t(n) : n)) return r;
		for (let n = 0; n < this.directPlugins.length; n++) {
			let i = this.directPlugins[n].props[e];
			if (i != null && (r = t ? t(i) : i)) return r;
		}
		let i = this.state.plugins;
		if (i) for (let n = 0; n < i.length; n++) {
			let a = i[n].props[e];
			if (a != null && (r = t ? t(a) : a)) return r;
		}
	}
	hasFocus() {
		if (Zf) {
			let e = this.root.activeElement;
			if (e == this.dom) return !0;
			if (!e || !this.dom.contains(e)) return !1;
			for (; e && this.dom != e && this.dom.contains(e);) {
				if (e.contentEditable == "false") return !1;
				e = e.parentElement;
			}
			return !0;
		}
		return this.root.activeElement == this.dom;
	}
	focus() {
		this.domObserver.stop(), this.editable && yp(this.dom), ym(this), this.domObserver.start();
	}
	get root() {
		let e = this._root;
		if (e == null) {
			for (let e = this.dom.parentNode; e; e = e.parentNode) if (e.nodeType == 9 || e.nodeType == 11 && e.host) return e.getSelection || (Object.getPrototypeOf(e).getSelection = () => e.ownerDocument.getSelection()), this._root = e;
		}
		return e || document;
	}
	updateRoot() {
		this._root = null;
	}
	posAtCoords(e) {
		return Dp(this, e);
	}
	coordsAtPos(e, t = 1) {
		return jp(this, e, t);
	}
	domAtPos(e, t = 0) {
		return this.docView.domFromPos(e, t);
	}
	nodeDOM(e) {
		let t = this.docView.descAt(e);
		return t ? t.nodeDOM : null;
	}
	posAtDOM(e, t, n = -1) {
		let r = this.docView.posFromDOM(e, t, n);
		if (r == null) throw RangeError("DOM position not inside the editor");
		return r;
	}
	endOfTextblock(e, t) {
		return Vp(this, t || this.state, e);
	}
	pasteHTML(e, t) {
		return Zh(this, "", e, !1, t || new ClipboardEvent("paste"));
	}
	pasteText(e, t) {
		return Zh(this, e, null, !0, t || new ClipboardEvent("paste"));
	}
	serializeForClipboard(e) {
		return Xm(this, e);
	}
	destroy() {
		this.docView && (vh(this), this.destroyPluginViews(), this.mounted ? (this.docView.update(this.state.doc, [], Sg(this), this), this.dom.textContent = "") : this.dom.parentNode && this.dom.parentNode.removeChild(this.dom), this.docView.destroy(), this.docView = null, Af());
	}
	get isDestroyed() {
		return this.docView == null;
	}
	dispatchEvent(e) {
		return Sh(this, e);
	}
	domSelectionRange() {
		let e = this.dom.isConnected !== !1 && this.domSelection();
		return e ? rp && this.root.nodeType === 11 && Uf(this.dom.ownerDocument) == this.dom && jg(this, e) || e : {
			focusNode: null,
			focusOffset: 0,
			anchorNode: null,
			anchorOffset: 0
		};
	}
	domSelection() {
		return this.root.getSelection();
	}
};
Wg.prototype.dispatch = function(e) {
	let t = this._props.dispatchTransaction;
	t ? t.call(this, e) : this.updateState(this.state.apply(e));
};
function Gg(e) {
	let t = Object.create(null);
	return t.class = "ProseMirror", t.contenteditable = String(e.editable), e.someProp("attributes", (n) => {
		if (typeof n == "function" && (n = n(e.state)), n) for (let e in n) e == "class" ? t.class += " " + n[e] : e == "style" ? t.style = (t.style ? t.style + ";" : "") + n[e] : !t[e] && e != "contenteditable" && e != "nodeName" && (t[e] = String(n[e]));
	}), t.translate ||= "no", [cg.node(0, e.state.doc.content.size, t)];
}
function Kg(e) {
	if (e.markCursor) {
		let t = document.createElement("img");
		t.className = "ProseMirror-separator", t.setAttribute("mark-placeholder", "true"), t.setAttribute("alt", ""), e.cursorWrapper = {
			dom: t,
			deco: cg.widget(e.state.selection.from, t, {
				raw: !0,
				marks: e.markCursor
			})
		};
	} else e.cursorWrapper = null;
}
function qg(e) {
	return !e.someProp("editable", (t) => t(e.state) === !1);
}
function Jg(e, t) {
	let n = Math.min(e.$anchor.sharedDepth(e.head), t.$anchor.sharedDepth(t.head));
	return e.$anchor.start(n) != t.$anchor.start(n);
}
function Yg(e) {
	let t = Object.create(null);
	function n(e) {
		for (let n in e) Object.prototype.hasOwnProperty.call(t, n) || (t[n] = e[n]);
	}
	return e.someProp("nodeViews", n), e.someProp("markViews", n), t;
}
function Xg(e, t) {
	let n = 0, r = 0;
	for (let r in e) {
		if (e[r] != t[r]) return !0;
		n++;
	}
	for (let e in t) r++;
	return n != r;
}
function Zg(e) {
	if (e.spec.state || e.spec.filterTransaction || e.spec.appendTransaction) throw RangeError("Plugins passed directly to the view must not have a state component");
}
for (var Qg = {
	8: "Backspace",
	9: "Tab",
	10: "Enter",
	12: "NumLock",
	13: "Enter",
	16: "Shift",
	17: "Control",
	18: "Alt",
	20: "CapsLock",
	27: "Escape",
	32: " ",
	33: "PageUp",
	34: "PageDown",
	35: "End",
	36: "Home",
	37: "ArrowLeft",
	38: "ArrowUp",
	39: "ArrowRight",
	40: "ArrowDown",
	44: "PrintScreen",
	45: "Insert",
	46: "Delete",
	59: ";",
	61: "=",
	91: "Meta",
	92: "Meta",
	106: "*",
	107: "+",
	108: ",",
	109: "-",
	110: ".",
	111: "/",
	144: "NumLock",
	145: "ScrollLock",
	160: "Shift",
	161: "Shift",
	162: "Control",
	163: "Control",
	164: "Alt",
	165: "Alt",
	173: "-",
	186: ";",
	187: "=",
	188: ",",
	189: "-",
	190: ".",
	191: "/",
	192: "`",
	219: "[",
	220: "\\",
	221: "]",
	222: "'"
}, $g = {
	48: ")",
	49: "!",
	50: "@",
	51: "#",
	52: "$",
	53: "%",
	54: "^",
	55: "&",
	56: "*",
	57: "(",
	59: ":",
	61: "+",
	173: "_",
	186: ":",
	187: "+",
	188: "<",
	189: "_",
	190: ">",
	191: "?",
	192: "~",
	219: "{",
	220: "|",
	221: "}",
	222: "\""
}, e_ = typeof navigator < "u" && /Mac/.test(navigator.platform), t_ = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), n_ = 0; n_ < 10; n_++) Qg[48 + n_] = Qg[96 + n_] = String(n_);
for (var n_ = 1; n_ <= 24; n_++) Qg[n_ + 111] = "F" + n_;
for (var n_ = 65; n_ <= 90; n_++) Qg[n_] = String.fromCharCode(n_ + 32), $g[n_] = String.fromCharCode(n_);
for (var r_ in Qg) $g.hasOwnProperty(r_) || ($g[r_] = Qg[r_]);
function i_(e) {
	var t = !(e_ && e.metaKey && e.shiftKey && !e.ctrlKey && !e.altKey || t_ && e.shiftKey && e.key && e.key.length == 1 || e.key == "Unidentified") && e.key || (e.shiftKey ? $g : Qg)[e.keyCode] || e.key || "Unidentified";
	return t == "Esc" && (t = "Escape"), t == "Del" && (t = "Delete"), t == "Left" && (t = "ArrowLeft"), t == "Up" && (t = "ArrowUp"), t == "Right" && (t = "ArrowRight"), t == "Down" && (t = "ArrowDown"), t;
}
// node_modules/prosemirror-keymap/dist/index.js
var a_ = typeof navigator < "u" && /Mac|iP(hone|[oa]d)/.test(navigator.platform), o_ = typeof navigator < "u" && /Win/.test(navigator.platform);
function s_(e) {
	let t = e.split(/-(?!$)/), n = t[t.length - 1];
	n == "Space" && (n = " ");
	let r, i, a, o;
	for (let e = 0; e < t.length - 1; e++) {
		let n = t[e];
		if (/^(cmd|meta|m)$/i.test(n)) o = !0;
		else if (/^a(lt)?$/i.test(n)) r = !0;
		else if (/^(c|ctrl|control)$/i.test(n)) i = !0;
		else if (/^s(hift)?$/i.test(n)) a = !0;
		else if (/^mod$/i.test(n)) a_ ? o = !0 : i = !0;
		else throw Error("Unrecognized modifier name: " + n);
	}
	return r && (n = "Alt-" + n), i && (n = "Ctrl-" + n), o && (n = "Meta-" + n), a && (n = "Shift-" + n), n;
}
function c_(e) {
	let t = Object.create(null);
	for (let n in e) t[s_(n)] = e[n];
	return t;
}
function l_(e, t, n = !0) {
	return t.altKey && (e = "Alt-" + e), t.ctrlKey && (e = "Ctrl-" + e), t.metaKey && (e = "Meta-" + e), n && t.shiftKey && (e = "Shift-" + e), e;
}
function u_(e) {
	return new H({ props: { handleKeyDown: d_(e) } });
}
function d_(e) {
	let t = c_(e);
	return function(e, n) {
		let r = i_(n), i, a = t[l_(r, n)];
		if (a && a(e.state, e.dispatch, e)) return !0;
		if (r.length == 1 && r != " ") {
			if (n.shiftKey) {
				let i = t[l_(r, n, !1)];
				if (i && i(e.state, e.dispatch, e)) return !0;
			}
			if ((n.altKey || n.metaKey || n.ctrlKey) && !(o_ && n.ctrlKey && n.altKey) && (i = Qg[n.keyCode]) && i != r) {
				let r = t[l_(i, n)];
				if (r && r(e.state, e.dispatch, e)) return !0;
			}
		}
		return !1;
	};
}
// node_modules/rope-sequence/dist/index.js
var f_ = 200, p_ = function() {};
p_.prototype.append = function(e) {
	return e.length ? (e = p_.from(e), !this.length && e || e.length < f_ && this.leafAppend(e) || this.length < f_ && e.leafPrepend(this) || this.appendInner(e)) : this;
}, p_.prototype.prepend = function(e) {
	return e.length ? p_.from(e).append(this) : this;
}, p_.prototype.appendInner = function(e) {
	return new h_(this, e);
}, p_.prototype.slice = function(e, t) {
	return e === void 0 && (e = 0), t === void 0 && (t = this.length), e >= t ? p_.empty : this.sliceInner(Math.max(0, e), Math.min(this.length, t));
}, p_.prototype.get = function(e) {
	if (!(e < 0 || e >= this.length)) return this.getInner(e);
}, p_.prototype.forEach = function(e, t, n) {
	t === void 0 && (t = 0), n === void 0 && (n = this.length), t <= n ? this.forEachInner(e, t, n, 0) : this.forEachInvertedInner(e, t, n, 0);
}, p_.prototype.map = function(e, t, n) {
	t === void 0 && (t = 0), n === void 0 && (n = this.length);
	var r = [];
	return this.forEach(function(t, n) {
		return r.push(e(t, n));
	}, t, n), r;
}, p_.from = function(e) {
	return e instanceof p_ ? e : e && e.length ? new m_(e) : p_.empty;
};
var m_ = /* @__PURE__ */ function(e) {
	function t(t) {
		e.call(this), this.values = t;
	}
	e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
	var n = {
		length: { configurable: !0 },
		depth: { configurable: !0 }
	};
	return t.prototype.flatten = function() {
		return this.values;
	}, t.prototype.sliceInner = function(e, n) {
		return e == 0 && n == this.length ? this : new t(this.values.slice(e, n));
	}, t.prototype.getInner = function(e) {
		return this.values[e];
	}, t.prototype.forEachInner = function(e, t, n, r) {
		for (var i = t; i < n; i++) if (e(this.values[i], r + i) === !1) return !1;
	}, t.prototype.forEachInvertedInner = function(e, t, n, r) {
		for (var i = t - 1; i >= n; i--) if (e(this.values[i], r + i) === !1) return !1;
	}, t.prototype.leafAppend = function(e) {
		if (this.length + e.length <= f_) return new t(this.values.concat(e.flatten()));
	}, t.prototype.leafPrepend = function(e) {
		if (this.length + e.length <= f_) return new t(e.flatten().concat(this.values));
	}, n.length.get = function() {
		return this.values.length;
	}, n.depth.get = function() {
		return 0;
	}, Object.defineProperties(t.prototype, n), t;
}(p_);
p_.empty = new m_([]);
var h_ = /* @__PURE__ */ function(e) {
	function t(t, n) {
		e.call(this), this.left = t, this.right = n, this.length = t.length + n.length, this.depth = Math.max(t.depth, n.depth) + 1;
	}
	return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.flatten = function() {
		return this.left.flatten().concat(this.right.flatten());
	}, t.prototype.getInner = function(e) {
		return e < this.left.length ? this.left.get(e) : this.right.get(e - this.left.length);
	}, t.prototype.forEachInner = function(e, t, n, r) {
		var i = this.left.length;
		if (t < i && this.left.forEachInner(e, t, Math.min(n, i), r) === !1 || n > i && this.right.forEachInner(e, Math.max(t - i, 0), Math.min(this.length, n) - i, r + i) === !1) return !1;
	}, t.prototype.forEachInvertedInner = function(e, t, n, r) {
		var i = this.left.length;
		if (t > i && this.right.forEachInvertedInner(e, t - i, Math.max(n, i) - i, r + i) === !1 || n < i && this.left.forEachInvertedInner(e, Math.min(t, i), n, r) === !1) return !1;
	}, t.prototype.sliceInner = function(e, t) {
		if (e == 0 && t == this.length) return this;
		var n = this.left.length;
		return t <= n ? this.left.slice(e, t) : e >= n ? this.right.slice(e - n, t - n) : this.left.slice(e, n).append(this.right.slice(0, t - n));
	}, t.prototype.leafAppend = function(e) {
		var n = this.right.leafAppend(e);
		if (n) return new t(this.left, n);
	}, t.prototype.leafPrepend = function(e) {
		var n = this.left.leafPrepend(e);
		if (n) return new t(n, this.right);
	}, t.prototype.appendInner = function(e) {
		return this.left.depth >= Math.max(this.right.depth, e.depth) + 1 ? new t(this.left, new t(this.right, e)) : new t(this, e);
	}, t;
}(p_), g_ = 500, __ = class e {
	constructor(e, t) {
		this.items = e, this.eventCount = t;
	}
	popEvent(t, n) {
		if (this.eventCount == 0) return null;
		let r = this.items.length;
		for (;; r--) if (this.items.get(r - 1).selection) {
			--r;
			break;
		}
		let i, a;
		n && (i = this.remapping(r, this.items.length), a = i.maps.length);
		let o = t.tr, s, c, l = [], u = [];
		return this.items.forEach((t, n) => {
			if (!t.step) i || (i = this.remapping(r, n + 1), a = i.maps.length), a--, u.push(t);
			else {
				if (i) {
					u.push(new y_(t.map));
					let e = t.step.map(i.slice(a)), n;
					e && o.maybeStep(e).doc && (n = o.mapping.maps[o.mapping.maps.length - 1], l.push(new y_(n, void 0, void 0, l.length + u.length))), a--, n && i.appendMap(n, a);
				} else o.maybeStep(t.step);
				if (t.selection) return s = i ? t.selection.map(i.slice(a)) : t.selection, c = new e(this.items.slice(0, r).append(u.reverse().concat(l)), this.eventCount - 1), !1;
			}
		}, this.items.length, 0), {
			remaining: c,
			transform: o,
			selection: s
		};
	}
	addTransform(t, n, r, i) {
		let a = [], o = this.eventCount, s = this.items, c = !i && s.length ? s.get(s.length - 1) : null;
		for (let e = 0; e < t.steps.length; e++) {
			let r = t.steps[e].invert(t.docs[e]), l = new y_(t.mapping.maps[e], r, n), u;
			(u = c && c.merge(l)) && (l = u, e ? a.pop() : s = s.slice(0, s.length - 1)), a.push(l), n &&= (o++, void 0), i || (c = l);
		}
		let l = o - r.depth;
		return l > x_ && (s = v_(s, l), o -= l), new e(s.append(a), o);
	}
	remapping(e, t) {
		let n = new su();
		return this.items.forEach((t, r) => {
			let i = t.mirrorOffset != null && r - t.mirrorOffset >= e ? n.maps.length - t.mirrorOffset : void 0;
			n.appendMap(t.map, i);
		}, e, t), n;
	}
	addMaps(t) {
		return this.eventCount == 0 ? this : new e(this.items.append(t.map((e) => new y_(e))), this.eventCount);
	}
	rebased(t, n) {
		if (!this.eventCount) return this;
		n = Math.min(this.items.length, n);
		let r = [], i = this.items.length - n, a = t.mapping, o = t.steps.length, s = this.eventCount;
		this.items.forEach((e) => {
			e.selection && s--;
		}, i);
		let c = n;
		this.items.forEach((e) => {
			let n = a.getMirror(--c);
			if (n == null) return;
			o = Math.min(o, n);
			let i = a.maps[n];
			if (e.step) {
				let o = t.steps[n].invert(t.docs[n]), l = e.selection && e.selection.map(a.slice(c + 1, n));
				l && s++, r.push(new y_(i, o, l));
			} else r.push(new y_(i));
		}, i);
		let l = [];
		for (let e = n; e < o; e++) l.push(new y_(a.maps[e]));
		let u = this.items.slice(0, i).append(l).append(r), d = new e(u, s);
		return d.emptyItemCount() > g_ && (d = d.compress(this.items.length - r.length)), d;
	}
	emptyItemCount() {
		let e = 0;
		return this.items.forEach((t) => {
			t.step || e++;
		}), e;
	}
	compress(t = this.items.length) {
		let n = this.remapping(0, t), r = n.maps.length, i = [], a = 0;
		return this.items.forEach((e, o) => {
			if (o >= t) i.push(e), e.selection && a++;
			else if (e.step) {
				let t = e.step.map(n.slice(r)), o = t && t.getMap();
				if (r--, o && n.appendMap(o, r), t) {
					let s = e.selection && e.selection.map(n.slice(r));
					s && a++;
					let c = new y_(o.invert(), t, s), l, u = i.length - 1;
					(l = i.length && i[u].merge(c)) ? i[u] = l : i.push(c);
				}
			} else e.map && r--;
		}, this.items.length, 0), new e(p_.from(i.reverse()), a);
	}
};
__.empty = new __(p_.empty, 0);
function v_(e, t) {
	let n;
	return e.forEach((e, r) => {
		if (e.selection && t-- == 0) return n = r, !1;
	}), e.slice(n);
}
var y_ = class e {
	constructor(e, t, n, r) {
		this.map = e, this.step = t, this.selection = n, this.mirrorOffset = r;
	}
	merge(t) {
		if (this.step && t.step && !t.selection) {
			let n = t.step.merge(this.step);
			if (n) return new e(n.getMap().invert(), n, this.selection);
		}
	}
}, b_ = class {
	constructor(e, t, n, r, i) {
		this.done = e, this.undone = t, this.prevRanges = n, this.prevTime = r, this.prevComposition = i;
	}
}, x_ = 20;
function S_(e, t, n, r) {
	let i = n.getMeta(j_), a;
	if (i) return i.historyState;
	n.getMeta(M_) && (e = new b_(e.done, e.undone, null, 0, -1));
	let o = n.getMeta("appendedTransaction");
	if (n.steps.length == 0) return e;
	if (o && o.getMeta(j_)) return o.getMeta(j_).redo ? new b_(e.done.addTransform(n, void 0, r, k_(t)), e.undone, w_(n.mapping.maps), e.prevTime, e.prevComposition) : new b_(e.done, e.undone.addTransform(n, void 0, r, k_(t)), null, e.prevTime, e.prevComposition);
	if (n.getMeta("addToHistory") !== !1 && !(o && o.getMeta("addToHistory") === !1)) {
		let i = n.getMeta("composition"), a = e.prevTime == 0 || !o && e.prevComposition != i && (e.prevTime < (n.time || 0) - r.newGroupDelay || !C_(n, e.prevRanges)), s = o ? T_(e.prevRanges, n.mapping) : w_(n.mapping.maps);
		return new b_(e.done.addTransform(n, a ? t.selection.getBookmark() : void 0, r, k_(t)), __.empty, s, n.time, i ?? e.prevComposition);
	}
	return (a = n.getMeta("rebased")) ? new b_(e.done.rebased(n, a), e.undone.rebased(n, a), T_(e.prevRanges, n.mapping), e.prevTime, e.prevComposition) : new b_(e.done.addMaps(n.mapping.maps), e.undone.addMaps(n.mapping.maps), T_(e.prevRanges, n.mapping), e.prevTime, e.prevComposition);
}
function C_(e, t) {
	if (!t) return !1;
	if (!e.docChanged) return !0;
	let n = !1;
	return e.mapping.maps[0].forEach((e, r) => {
		for (let i = 0; i < t.length; i += 2) e <= t[i + 1] && r >= t[i] && (n = !0);
	}), n;
}
function w_(e) {
	let t = [];
	for (let n = e.length - 1; n >= 0 && t.length == 0; n--) e[n].forEach((e, n, r, i) => t.push(r, i));
	return t;
}
function T_(e, t) {
	if (!e) return null;
	let n = [];
	for (let r = 0; r < e.length; r += 2) {
		let i = t.map(e[r], 1), a = t.map(e[r + 1], -1);
		i <= a && n.push(i, a);
	}
	return n;
}
function E_(e, t, n) {
	let r = k_(t), i = j_.get(t).spec.config, a = (n ? e.undone : e.done).popEvent(t, r);
	if (!a) return null;
	let o = a.selection.resolve(a.transform.doc), s = (n ? e.done : e.undone).addTransform(a.transform, t.selection.getBookmark(), i, r), c = new b_(n ? s : a.remaining, n ? a.remaining : s, null, 0, -1);
	return a.transform.setSelection(o).setMeta(j_, {
		redo: n,
		historyState: c
	});
}
var D_ = !1, O_ = null;
function k_(e) {
	let t = e.plugins;
	if (O_ != t) {
		D_ = !1, O_ = t;
		for (let e = 0; e < t.length; e++) if (t[e].spec.historyPreserveItems) {
			D_ = !0;
			break;
		}
	}
	return D_;
}
function A_(e) {
	return e.setMeta(M_, !0);
}
var j_ = new U("history"), M_ = new U("closeHistory");
function N_(e = {}) {
	return e = {
		depth: e.depth || 100,
		newGroupDelay: e.newGroupDelay || 500
	}, new H({
		key: j_,
		state: {
			init() {
				return new b_(__.empty, __.empty, null, 0, -1);
			},
			apply(t, n, r) {
				return S_(n, r, t, e);
			}
		},
		config: e,
		props: { handleDOMEvents: { beforeinput(e, t) {
			let n = t.inputType, r = n == "historyUndo" ? F_ : n == "historyRedo" ? I_ : null;
			return !r || !e.editable ? !1 : (t.preventDefault(), r(e.state, e.dispatch));
		} } }
	});
}
function P_(e, t) {
	return (n, r) => {
		let i = j_.getState(n);
		if (!i || (e ? i.undone : i.done).eventCount == 0) return !1;
		if (r) {
			let a = E_(i, n, e);
			a && r(t ? a.scrollIntoView() : a);
		}
		return !0;
	};
}
var F_ = P_(!1, !0), I_ = P_(!0, !0);
function L_(e) {
	return e.getMeta(j_) != null;
}
// node_modules/@tiptap/core/dist/index.js
function R_(e) {
	let { state: t, transaction: n } = e, { selection: r } = n, { doc: i } = n, { storedMarks: a } = n;
	return {
		...t,
		apply: t.apply.bind(t),
		applyTransaction: t.applyTransaction.bind(t),
		plugins: t.plugins,
		schema: t.schema,
		reconfigure: t.reconfigure.bind(t),
		toJSON: t.toJSON.bind(t),
		get storedMarks() {
			return a;
		},
		get selection() {
			return r;
		},
		get doc() {
			return i;
		},
		get tr() {
			return r = n.selection, i = n.doc, a = n.storedMarks, n;
		}
	};
}
var z_ = class e {
	constructor(e) {
		this.editor = e.editor, this.rawCommands = this.editor.extensionManager.commands, this.customState = e.state;
	}
	get hasCustomState() {
		return !!this.customState;
	}
	get state() {
		return this.customState || this.editor.state;
	}
	get commands() {
		let { rawCommands: e, editor: t, state: n } = this, { view: r } = t, { tr: i } = n, a = this.buildProps(i);
		return Object.fromEntries(Object.entries(e).map(([e, t]) => [e, (...e) => {
			let n = t(...e)(a);
			return !i.getMeta("preventDispatch") && !this.hasCustomState && r.dispatch(i), n;
		}]));
	}
	get chain() {
		return () => this.createChain();
	}
	get can() {
		return () => this.createCan();
	}
	createChain(e, t = !0) {
		let { rawCommands: n, editor: r, state: i } = this, { view: a } = r, o = [], s = !!e, c = e || i.tr, l = () => (!s && t && !c.getMeta("preventDispatch") && !this.hasCustomState && a.dispatch(c), o.every((e) => e === !0)), u = {
			...Object.fromEntries(Object.entries(n).map(([e, n]) => [e, (...e) => {
				let r = this.buildProps(c, t), i = n(...e)(r);
				return o.push(i), u;
			}])),
			run: l
		};
		return u;
	}
	static createFakeChain() {
		let e = new Proxy({}, { get: (t, n) => {
			if (n !== "then") return n === "run" ? () => !1 : () => e;
		} });
		return e;
	}
	createCan(e) {
		let { rawCommands: t, state: n } = this, r = e || n.tr, i = this.buildProps(r, !1);
		return {
			...Object.fromEntries(Object.entries(t).map(([e, t]) => [e, (...e) => t(...e)({
				...i,
				dispatch: void 0
			})])),
			chain: () => this.createChain(r, !1)
		};
	}
	static createFallbackCan() {
		let t = e.createFakeChain();
		return new Proxy({ chain: () => t }, { get: (e, t) => {
			if (t !== "then") return t === "chain" ? e.chain : () => !1;
		} });
	}
	buildProps(e, t = !0) {
		let { rawCommands: n, editor: r, state: i } = this, { view: a } = r, o = {
			tr: e,
			editor: r,
			view: a,
			state: R_({
				state: i,
				transaction: e
			}),
			dispatch: t ? () => void 0 : void 0,
			chain: () => this.createChain(e, t),
			can: () => this.createCan(e),
			get commands() {
				return Object.fromEntries(Object.entries(n).map(([e, t]) => [e, (...e) => t(...e)(o)]));
			}
		};
		return o;
	}
}, B_ = () => ({ editor: e, view: t }) => (requestAnimationFrame(() => {
	if (!e.isDestroyed) {
		var n;
		t.dom.blur(), (n = window) == null || (n = n.getSelection()) == null || n.removeAllRanges();
	}
}), !0), V_ = (e = !0) => ({ commands: t }) => t.setContent("", { emitUpdate: e }), H_ = () => ({ tr: e, dispatch: t }) => {
	let { selection: n } = e, { ranges: r } = n;
	if (!t) return !0;
	let i = e.mapping.maps.length;
	return r.forEach(({ $from: t, $to: n }) => {
		let r = t.pos, a = n.pos, o = e.mapping.slice(i), s = 1;
		e.doc.nodesBetween(o.map(r), o.map(a), (t, n) => {
			s = Math.max(s, e.doc.resolve(n).depth + 1);
		});
		for (let t = 0; t < s; t += 1) {
			let t = e.doc, n = e.mapping.maps.length, o = e.mapping.slice(i), s = n, c = e.mapping.slice(n), l = o.map(r), u = o.map(a);
			if (t.nodesBetween(l, u, (t, r) => {
				if (t.type.isText) return;
				e.mapping.maps.length !== s && (s = e.mapping.maps.length, c = e.mapping.slice(n));
				let i = e.doc.resolve(c.map(r)), a = e.doc.resolve(c.map(r + t.nodeSize)), o = i.blockRange(a);
				if (!o) return;
				let l = Tu(o);
				if (t.type.isTextblock) {
					let { defaultType: t } = i.parent.contentMatchAt(i.index()), n = e.doc.nodeAt(o.start);
					t && n && !n.hasMarkup(t) && t.validContent(n.content) && e.setNodeMarkup(o.start, t);
				}
				(l || l === 0) && e.lift(o, l);
			}), e.doc.eq(t)) break;
		}
	}), !0;
}, U_ = (e) => (t) => e(t), W_ = () => ({ state: e, dispatch: t }) => $d(e, t), G_ = (e, t) => ({ editor: n, tr: r }) => {
	let { state: i } = n, a = i.doc.slice(e.from, e.to);
	r.deleteRange(e.from, e.to);
	let o = r.mapping.map(t);
	return r.insert(o, a.content), r.setSelection(new B(r.doc.resolve(Math.max(o - 1, 0)))), !0;
}, K_ = () => ({ tr: e, dispatch: t }) => {
	let { selection: n } = e, r = n.$anchor.node();
	if (r.content.size > 0) return !1;
	let i = e.selection.$anchor;
	for (let n = i.depth; n > 0; --n) if (i.node(n).type === r.type) {
		if (t) {
			let t = i.before(n), r = i.after(n);
			e.delete(t, r).scrollIntoView();
		}
		return !0;
	}
	return !1;
};
function q_(e, t) {
	if (typeof e == "string") {
		if (!t.nodes[e]) throw Error(`There is no node type named '${e}'. Maybe you forgot to add the extension?`);
		return t.nodes[e];
	}
	return e;
}
var J_ = (e) => ({ tr: t, state: n, dispatch: r }) => {
	let i = q_(e, n.schema), a = t.selection.$anchor;
	for (let e = a.depth; e > 0; --e) if (a.node(e).type === i) {
		if (r) {
			let n = a.before(e), r = a.after(e);
			t.delete(n, r).scrollIntoView();
		}
		return !0;
	}
	return !1;
}, Y_ = (e) => ({ tr: t, dispatch: n }) => {
	let { from: r, to: i } = e;
	return n && t.delete(r, i), !0;
}, X_ = (e) => e.content ? /^text(\*|\+)/.test(e.content) : !1, Z_ = (e, t, n) => {
	if (!e.parent.isInline || n === "left" && e.pos > e.start() || n === "right" && e.pos < e.end()) return e.pos;
	let r = t.nodes[e.parent.type.name].spec;
	return X_(r) ? n === "left" ? e.start() - 1 : e.end() + 1 : e.pos;
}, Q_ = (e, t, n) => ({
	from: Z_(e, n, "left"),
	to: Z_(t, n, "right")
}), $_ = () => ({ state: e, dispatch: t }) => {
	if (e.selection.empty) return !1;
	if (t) {
		let n = e.tr, { ranges: r } = e.selection, i = e.selection instanceof B ? e.selection.$from.marksAcross(e.selection.$to) : null, a = n.steps.length;
		r.forEach((t) => {
			let r = n.mapping.slice(a), { from: i, to: o } = Q_(n.doc.resolve(r.map(t.$from.pos)), n.doc.resolve(r.map(t.$to.pos)), e.schema);
			n.deleteRange(i, o);
		}), n.selection.empty || n.setSelection(B.near(n.doc.resolve(n.selection.from))), i && n.ensureMarks(i), n.scrollIntoView(), t(n);
	}
	return !0;
}, ev = () => ({ commands: e }) => e.keyboardShortcut("Enter"), tv = () => ({ state: e, dispatch: t }) => Qd(e, t);
function nv(e) {
	return Object.prototype.toString.call(e) === "[object RegExp]";
}
function rv(e, t, n = { strict: !0 }) {
	let r = Object.keys(t);
	return !r.length || r.every((r) => n.strict ? t[r] === e[r] : nv(t[r]) ? t[r].test(e[r]) : t[r] === e[r]);
}
function iv(e, t, n = {}) {
	return e.find((e) => e.type === t && rv(Object.fromEntries(Object.keys(n).map((t) => [t, e.attrs[t]])), n));
}
function av(e, t, n = {}) {
	return !!iv(e, t, n);
}
function ov(e, t, n) {
	if (!e || !t) return;
	let r = e.parent.childAfter(e.parentOffset);
	if (r.node && r.node.marks.some((e) => e.type === t) || (r = e.parent.childBefore(e.parentOffset)), !r.node || !r.node.marks.some((e) => e.type === t)) return;
	if (!n) {
		let e = r.node.marks.find((e) => e.type === t);
		e && (n = e.attrs);
	}
	if (!iv([...r.node.marks], t, n)) return;
	let i = r.index, a = e.start() + r.offset, o = i + 1, s = a + r.node.nodeSize;
	for (; i > 0 && av([...e.parent.child(i - 1).marks], t, n);) --i, a -= e.parent.child(i).nodeSize;
	for (; o < e.parent.childCount && av([...e.parent.child(o).marks], t, n);) s += e.parent.child(o).nodeSize, o += 1;
	return {
		from: a,
		to: s
	};
}
function sv(e, t) {
	if (typeof e == "string") {
		if (!t.marks[e]) throw Error(`There is no mark type named '${e}'. Maybe you forgot to add the extension?`);
		return t.marks[e];
	}
	return e;
}
var cv = (e, t) => ({ tr: n, state: r, dispatch: i }) => {
	let a = sv(e, r.schema), { doc: o, selection: s } = n, { $from: c, from: l, to: u } = s;
	if (i) {
		let e = ov(c, a, t);
		if (e && e.from <= l && e.to >= u) {
			let t = B.create(o, e.from, e.to);
			n.setSelection(t);
		}
	}
	return !0;
}, lv = (e) => (t) => {
	let n = typeof e == "function" ? e(t) : e;
	for (let e = 0; e < n.length; e += 1) if (n[e](t)) return !0;
	return !1;
};
function uv(e) {
	return e instanceof B;
}
function dv(e = 0, t = 0, n = 0) {
	return Math.min(Math.max(e, t), n);
}
function fv(e, t = null) {
	if (!t) return null;
	let n = z.atStart(e), r = z.atEnd(e);
	if (t === "start" || t === !0) return n;
	if (t === "end") return r;
	let i = n.from, a = r.to;
	return t === "all" ? B.create(e, dv(0, i, a), dv(e.content.size, i, a)) : B.create(e, dv(t, i, a), dv(t, i, a));
}
function pv() {
	return ["Android"].includes(navigator.platform) || /android/i.test(navigator.userAgent);
}
function mv() {
	return [
		"iPad Simulator",
		"iPhone Simulator",
		"iPod Simulator",
		"iPad",
		"iPhone",
		"iPod"
	].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
function hv() {
	return typeof navigator < "u" && /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
var gv = (e = null, t = {}) => ({ editor: n, view: r, tr: i, dispatch: a }) => {
	t = {
		scrollIntoView: !0,
		...t
	};
	let o = () => {
		(mv() || pv()) && r.dom.focus(), hv() && !mv() && !pv() && r.dom.focus({ preventScroll: !0 }), requestAnimationFrame(() => {
			n.isDestroyed || (r.focus(), t?.scrollIntoView && n.commands.scrollIntoView());
		});
	};
	try {
		if (r.hasFocus() && e === null || e === !1) return !0;
	} catch {
		return !1;
	}
	if (a && e === null && !uv(n.state.selection)) return o(), !0;
	let s = fv(i.doc, e) || n.state.selection, c = n.state.selection.eq(s);
	return a && (c || i.setSelection(s), c && i.storedMarks && i.setStoredMarks(i.storedMarks), o()), !0;
}, _v = (e, t) => (n) => e.every((e, r) => t(e, {
	...n,
	index: r
})), vv = (e, t) => ({ tr: n, commands: r }) => r.insertContentAt({
	from: n.selection.from,
	to: n.selection.to
}, e, t), yv = (e) => {
	let t = e.childNodes;
	for (let n = t.length - 1; n >= 0; --n) {
		let r = t[n];
		r.nodeType === 3 && r.nodeValue && /^(\n\s\s|\n)$/.test(r.nodeValue) ? e.removeChild(r) : r.nodeType === 1 && yv(r);
	}
	return e;
};
function bv(e) {
	if (typeof window > "u") throw Error("[tiptap error]: there is no window object available, so this function cannot be used");
	let t = `<body>${e}</body>`, n = new window.DOMParser().parseFromString(t, "text/html").body;
	return yv(n);
}
function xv(e) {
	return typeof e?.nodesBetween == "function";
}
function Sv(e, t, n) {
	if (xv(e)) return e;
	let r = typeof e == "object" && !!e;
	n = {
		slice: !0,
		parseOptions: {},
		...n
	};
	let i = typeof e == "string";
	if (r) try {
		if (Array.isArray(e) && e.length > 0) return I.fromArray(e.map((e) => t.nodeFromJSON(e)));
		let r = t.nodeFromJSON(e);
		return n.errorOnInvalidContent && r.check(), r;
	} catch (r) {
		if (n.errorOnInvalidContent) throw Error("[tiptap error]: Invalid JSON content", { cause: r });
		return console.warn("[tiptap warn]: Invalid content.", "Passed value:", e, "Error:", r), Sv("", t, n);
	}
	if (i) {
		if (n.errorOnInvalidContent) {
			let r = !1, i = "", a = new Tl({
				topNode: t.spec.topNode,
				marks: t.spec.marks,
				nodes: t.spec.nodes.append({ __tiptap__private__unknown__catch__all__node: {
					content: "inline*",
					group: "block",
					parseDOM: [{
						tag: "*",
						getAttrs: (e) => (r = !0, i = typeof e == "string" ? e : e.outerHTML, null)
					}]
				} })
			});
			if (n.slice ? kl.fromSchema(a).parseSlice(bv(e), n.parseOptions) : kl.fromSchema(a).parse(bv(e), n.parseOptions), n.errorOnInvalidContent && r) throw Error("[tiptap error]: Invalid HTML content", { cause: /* @__PURE__ */ Error(`Invalid element found: ${i}`) });
		}
		let r = kl.fromSchema(t);
		return n.slice ? r.parseSlice(bv(e), n.parseOptions).content : r.parse(bv(e), n.parseOptions);
	}
	return Sv("", t, n);
}
function Cv(e) {
	return !("type" in e);
}
function wv(e, t, n) {
	let r = e.steps.length - 1;
	if (r < t) return;
	let i = e.steps[r];
	if (!(i instanceof vu || i instanceof yu)) return;
	let a = e.mapping.maps[r], o = 0;
	a.forEach((e, t, n, r) => {
		o === 0 && (o = r);
	}), e.setSelection(z.near(e.doc.resolve(o), n));
}
var Tv = (e, t, n) => ({ tr: r, dispatch: i, editor: a }) => {
	if (i) {
		n = {
			parseOptions: a.options.parseOptions,
			updateSelection: !0,
			applyInputRules: !1,
			applyPasteRules: !1,
			...n
		};
		let i, o = (e) => {
			a.emit("contentError", {
				editor: a,
				error: e,
				disableCollaboration: () => {
					"collaboration" in a.storage && typeof a.storage.collaboration == "object" && a.storage.collaboration && (a.storage.collaboration.isDisabled = !0);
				}
			});
		}, s = {
			preserveWhitespace: "full",
			...n.parseOptions
		};
		if (!n.errorOnInvalidContent && !a.options.enableContentCheck && a.options.emitContentError) try {
			Sv(t, a.schema, {
				parseOptions: s,
				errorOnInvalidContent: !0
			});
		} catch (e) {
			o(e);
		}
		try {
			i = Sv(t, a.schema, {
				parseOptions: s,
				errorOnInvalidContent: n.errorOnInvalidContent ?? a.options.enableContentCheck
			});
		} catch (e) {
			return o(e), !1;
		}
		let { from: c, to: l } = typeof e == "number" ? {
			from: e,
			to: e
		} : {
			from: e.from,
			to: e.to
		}, u = !0, d = !0, f = Cv(i) ? i.content : [i];
		if (f.forEach((e) => {
			e.check(), u = u ? e.isText && e.marks.length === 0 : !1, d = d ? e.isBlock : !1;
		}), c === l && d) {
			let { parent: e } = r.doc.resolve(c);
			e.isTextblock && !e.type.spec.code && !e.childCount && (--c, l += 1);
		}
		let p;
		if (u) p = Array.isArray(t) ? t.map((e) => e.text || "").join("") : xv(t) ? f.map((e) => e.text ?? "").join("") : typeof t == "object" && t && t.text ? t.text : t, r.insertText(p, c, l);
		else {
			p = I.from(f);
			let e = r.doc.resolve(c), t = e.node(), n = e.parentOffset === 0, i = t.isText || t.isTextblock, a = t.content.size > 0;
			n && i && a && d && (c = Math.max(0, c - 1)), r.replaceWith(c, l, f);
		}
		n.updateSelection && wv(r, r.steps.length - 1, -1), n.applyInputRules && r.setMeta("applyInputRules", {
			from: c,
			text: p
		}), n.applyPasteRules && r.setMeta("applyPasteRules", {
			from: c,
			text: p
		});
	}
	return !0;
};
function Ev(e) {
	for (let t = 0; t < e.edgeCount; t += 1) {
		let { type: n } = e.edge(t);
		if (n.isTextblock && !n.hasRequiredAttrs()) return n;
	}
	return null;
}
var Dv = (e = {}) => ({ tr: t, dispatch: n, editor: r }) => {
	let { pos: i, attrs: a, content: o, updateSelection: s = !0 } = e, c;
	c = typeof i == "number" ? t.doc.resolve(i) : i || t.selection.$from;
	let l = Ev(c.parent.contentMatchAt(c.index()));
	if (!l) return !1;
	let u = Object.keys(l.spec.attrs || {}), d = a ? Object.fromEntries(Object.entries(a).filter(([e]) => u.includes(e))) : {}, f;
	if (o) {
		let e = Sv(o, r.schema);
		f = l.createAndFill(d, e);
	} else f = l.createAndFill(d);
	return f ? (n && (t.insert(c.pos, f), s && wv(t, t.steps.length - 1, -1)), !0) : !1;
}, Ov = () => ({ state: e, dispatch: t }) => qd(e, t), kv = () => ({ state: e, dispatch: t }) => Jd(e, t), Av = () => ({ state: e, dispatch: t }) => Id(e, t), jv = () => ({ state: e, dispatch: t }) => Wd(e, t), Mv = (e, t) => {
	let n = e.resolve(t), r = n.nodeBefore, i = n.nodeAfter;
	return !r || !i ? !1 : !r.type.spec.isolating && !i.type.spec.isolating;
}, Nv = () => ({ state: e, dispatch: t, tr: n }) => {
	try {
		let r = Hu(e.doc, e.selection.$from.pos, -1);
		return r == null || !Mv(e.doc, r) ? !1 : (n.join(r, 2), t && t(n), !0);
	} catch {
		return !1;
	}
}, Pv = () => ({ state: e, dispatch: t, tr: n }) => {
	try {
		let r = Hu(e.doc, e.selection.$from.pos, 1);
		return r == null || !Mv(e.doc, r) ? !1 : (n.join(r, 2), t && t(n), !0);
	} catch {
		return !1;
	}
}, Fv = () => ({ state: e, dispatch: t }) => Ld(e, t), Iv = () => ({ state: e, dispatch: t }) => Rd(e, t);
function Lv() {
	return typeof navigator < "u" && /Mac/.test(navigator.platform);
}
function Rv(e) {
	let t = e.split(/-(?!$)/), n = t[t.length - 1];
	n === "Space" && (n = " ");
	let r, i, a, o;
	for (let e = 0; e < t.length - 1; e += 1) {
		let n = t[e];
		if (/^(cmd|meta|m)$/i.test(n)) o = !0;
		else if (/^a(lt)?$/i.test(n)) r = !0;
		else if (/^(c|ctrl|control)$/i.test(n)) i = !0;
		else if (/^s(hift)?$/i.test(n)) a = !0;
		else if (/^mod$/i.test(n)) mv() || Lv() ? o = !0 : i = !0;
		else throw Error(`Unrecognized modifier name: ${n}`);
	}
	return r && (n = `Alt-${n}`), i && (n = `Ctrl-${n}`), o && (n = `Meta-${n}`), a && (n = `Shift-${n}`), n;
}
var zv = (e) => ({ editor: t, view: n, tr: r, dispatch: i }) => {
	let a = Rv(e).split(/-(?!$)/), o = a.find((e) => ![
		"Alt",
		"Ctrl",
		"Meta",
		"Shift"
	].includes(e)), s = new KeyboardEvent("keydown", {
		key: o === "Space" ? " " : o,
		altKey: a.includes("Alt"),
		ctrlKey: a.includes("Ctrl"),
		metaKey: a.includes("Meta"),
		shiftKey: a.includes("Shift"),
		bubbles: !0,
		cancelable: !0
	});
	return t.captureTransaction(() => {
		n.someProp("handleKeyDown", (e) => e(n, s));
	})?.steps.forEach((e) => {
		let t = e.map(r.mapping);
		t && i && r.maybeStep(t);
	}), !0;
};
function Bv(e, t, n = {}) {
	let { from: r, to: i, empty: a } = e.selection, o = t ? q_(t, e.schema) : null, s = [];
	e.doc.nodesBetween(r, i, (e, t) => {
		if (e.isText) return;
		let n = Math.max(r, t), a = Math.min(i, t + e.nodeSize);
		s.push({
			node: e,
			from: n,
			to: a
		});
	});
	let c = i - r, l = s.filter((e) => !o || o.name === e.node.type.name).filter((e) => rv(e.node.attrs, n, { strict: !1 }));
	return a ? !!l.length : l.reduce((e, t) => e + t.to - t.from, 0) >= c;
}
var Vv = (e, t = {}) => ({ state: n, dispatch: r }) => Bv(n, q_(e, n.schema), t) ? Yd(n, r) : !1, Hv = () => ({ state: e, dispatch: t }) => ef(e, t), Uv = (e) => ({ state: t, dispatch: n }) => Sf(q_(e, t.schema))(t, n), Wv = () => ({ state: e, dispatch: t }) => Xd(e, t);
function Gv(e, t) {
	return t.nodes[e] ? "node" : t.marks[e] ? "mark" : null;
}
function Kv(e, t) {
	let n = typeof t == "string" ? [t] : t;
	return Object.keys(e).reduce((t, r) => (n.includes(r) || (t[r] = e[r]), t), {});
}
var qv = (e, t) => ({ tr: n, state: r, dispatch: i }) => {
	let a = null, o = null, s = Gv(typeof e == "string" ? e : e.name, r.schema);
	if (!s) return !1;
	s === "node" && (a = q_(e, r.schema)), s === "mark" && (o = sv(e, r.schema));
	let c = !1;
	return n.selection.ranges.forEach((e) => {
		r.doc.nodesBetween(e.$from.pos, e.$to.pos, (e, r) => {
			a && a === e.type && (c = !0, i && n.setNodeMarkup(r, void 0, Kv(e.attrs, t))), o && e.marks.length && e.marks.forEach((a) => {
				o === a.type && (c = !0, i && n.addMark(r, r + e.nodeSize, o.create(Kv(a.attrs, t))));
			});
		});
	}), c;
}, Jv = () => ({ tr: e, dispatch: t }) => (t && e.scrollIntoView(), !0), Yv = () => ({ tr: e, dispatch: t }) => {
	if (t) {
		let t = new vd(e.doc);
		e.setSelection(t);
	}
	return !0;
}, Xv = () => ({ state: e, dispatch: t }) => Vd(e, t), Zv = () => ({ state: e, dispatch: t }) => Gd(e, t), Qv = () => ({ state: e, dispatch: t }) => rf(e, t), $v = () => ({ state: e, dispatch: t }) => uf(e, t), ey = () => ({ state: e, dispatch: t }) => lf(e, t);
function ty(e, t, n = {}, r = {}) {
	return Sv(e, t, {
		slice: !1,
		parseOptions: n,
		errorOnInvalidContent: r.errorOnInvalidContent
	});
}
var ny = (e, { errorOnInvalidContent: t, emitUpdate: n = !0, parseOptions: r = {} } = {}) => ({ editor: i, tr: a, dispatch: o, commands: s }) => {
	let { doc: c } = a;
	if (r.preserveWhitespace !== "full") {
		let s = ty(e, i.schema, r, { errorOnInvalidContent: t ?? i.options.enableContentCheck });
		if (o) {
			let e = Cv(s) ? s.content : [s];
			a.replaceWith(0, c.content.size, e).setMeta("preventUpdate", !n);
		}
		return !0;
	}
	return o && a.setMeta("preventUpdate", !n), s.insertContentAt({
		from: 0,
		to: c.content.size
	}, e, {
		parseOptions: r,
		errorOnInvalidContent: t ?? i.options.enableContentCheck
	});
};
function ry(e, t) {
	let n = sv(t, e.schema), { from: r, to: i, empty: a } = e.selection, o = [];
	a ? (e.storedMarks && o.push(...e.storedMarks), o.push(...e.selection.$head.marks())) : e.doc.nodesBetween(r, i, (e) => {
		o.push(...e.marks);
	});
	let s = o.find((e) => e.type.name === n.name);
	return s ? { ...s.attrs } : {};
}
function iy(e, t) {
	let n = new dd(e);
	return t.forEach((e) => {
		e.steps.forEach((e) => {
			n.step(e);
		});
	}), n;
}
function ay(e, t, n) {
	let r = [];
	return e.nodesBetween(t.from, t.to, (e, t) => {
		n(e) && r.push({
			node: e,
			pos: t
		});
	}), r;
}
function oy(e, t) {
	for (let n = e.depth; n > 0; --n) {
		let r = e.node(n);
		if (t(r)) return {
			pos: n > 0 ? e.before(n) : 0,
			start: e.start(n),
			depth: n,
			node: r
		};
	}
}
function sy(e) {
	return (t) => oy(t.$from, e);
}
function K(e, t, n) {
	return e.config[t] === void 0 && e.parent ? K(e.parent, t, n) : typeof e.config[t] == "function" ? e.config[t].bind({
		...n,
		parent: e.parent ? K(e.parent, t, n) : null
	}) : e.config[t];
}
function cy(e) {
	return e.map((e) => {
		let t = K(e, "addExtensions", {
			name: e.name,
			options: e.options,
			storage: e.storage
		});
		return t ? [e, ...cy(t())] : e;
	}).flat(10);
}
function ly(e, t) {
	let n = Ul.fromSchema(t).serializeFragment(e), r = document.implementation.createHTMLDocument().createElement("div");
	return r.appendChild(n), r.innerHTML;
}
function uy(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let t of e) {
		let e = n.get(t.type) ?? /* @__PURE__ */ new Map();
		e.set(t.name, t), n.set(t.type, e);
	}
	return [...Object.values(t.nodes), ...Object.values(t.marks)].flatMap((e) => Object.entries(e.spec.attrs ?? {}).map(([t, r]) => {
		let i = n.get(e.name)?.get(t), a = Object.hasOwn(r, "default");
		return {
			type: e.name,
			name: t,
			attribute: {
				rendered: !0,
				renderHTML: null,
				parseHTML: null,
				keepOnSplit: !0,
				...i?.attribute,
				default: r.default,
				isRequired: !a,
				validate: r.validate
			}
		};
	}));
}
var dy = {
	content: "string",
	marks: "string",
	group: "string",
	inline: "boolean",
	atom: "boolean",
	selectable: "boolean",
	draggable: "boolean",
	code: "boolean",
	whitespace: ["pre", "normal"],
	definingAsContext: "boolean",
	definingForContent: "boolean",
	defining: "boolean",
	isolating: "boolean",
	linebreakReplacement: "boolean"
}, fy = {
	inclusive: "boolean",
	excludes: "string",
	group: "string",
	spanning: "boolean",
	code: "boolean"
};
function py(e, t, n) {
	return Object.fromEntries(Object.entries(t).flatMap(([t, r]) => {
		let i = e[t];
		if (i === void 0) return [];
		if (!(typeof r == "string" ? typeof i === r : typeof i == "string" && r.includes(i))) throw RangeError(`Invalid schemaSpec field '${n}.${t}'`);
		return [[t, i]];
	}));
}
function my(e, t, n, r) {
	return {
		...Object.fromEntries(Object.entries(t).filter(([e]) => e !== "attrs" && !Object.hasOwn(r, e))),
		...py(n, r, e),
		attrs: n.attrs
	};
}
function hy(e, t, n) {
	for (let r of Object.keys(t)) if (!Object.hasOwn(e, r)) throw RangeError(`schemaSpec requires a local ${n} extension named '${r}'`);
	for (let r of Object.keys(e)) if (!Object.hasOwn(t, r)) throw RangeError(`Local ${n} extension '${r}' is not in schemaSpec`);
}
function gy(e, t) {
	hy(e.nodes, t.nodes, "node"), hy(e.marks, t.marks, "mark");
	let n = t.spec.nodes, r = t.spec.marks;
	return t.spec.nodes.forEach((t, r) => {
		n = n.update(t, my(t, e.nodes[t], r, dy));
	}), t.spec.marks.forEach((t, n) => {
		r = r.update(t, my(t, e.marks[t], n, fy));
	}), {
		topNode: t.topNodeType.name,
		nodes: n,
		marks: r
	};
}
function _y(e) {
	let t = e.filter((t, n) => e.indexOf(t) !== n);
	return Array.from(new Set(t));
}
function vy(e) {
	return {
		baseExtensions: e.filter((e) => e.type === "extension"),
		nodeExtensions: e.filter((e) => e.type === "node"),
		markExtensions: e.filter((e) => e.type === "mark")
	};
}
function yy(e) {
	let t = [], { nodeExtensions: n, markExtensions: r } = vy(e), i = [...n, ...r], a = {
		default: null,
		validate: void 0,
		rendered: !0,
		renderHTML: null,
		parseHTML: null,
		keepOnSplit: !0,
		isRequired: !1
	}, o = n.filter((e) => e.name !== "text").map((e) => e.name), s = r.map((e) => e.name), c = [...o, ...s];
	return e.forEach((e) => {
		let n = K(e, "addGlobalAttributes", {
			name: e.name,
			options: e.options,
			storage: e.storage,
			extensions: i
		});
		n && n().forEach((e) => {
			let n;
			n = Array.isArray(e.types) ? e.types : e.types === "*" ? c : e.types === "nodes" ? o : e.types === "marks" ? s : [], n.forEach((n) => {
				Object.entries(e.attributes).forEach(([e, r]) => {
					t.push({
						type: n,
						name: e,
						attribute: {
							...a,
							...r
						}
					});
				});
			});
		});
	}), i.forEach((e) => {
		let n = K(e, "addAttributes", {
			name: e.name,
			options: e.options,
			storage: e.storage
		});
		if (!n) return;
		let r = n();
		Object.entries(r).forEach(([n, r]) => {
			let i = {
				...a,
				...r
			};
			typeof i?.default == "function" && (i.default = i.default()), i?.isRequired && i?.default === void 0 && delete i.default, t.push({
				type: e.name,
				name: n,
				attribute: i
			});
		});
	}), t;
}
function by(e) {
	return typeof e == "function";
}
function q(e, t = void 0, ...n) {
	return by(e) ? t ? e.bind(t)(...n) : e(...n) : e;
}
function xy(e = {}) {
	return Object.keys(e).length === 0 && e.constructor === Object;
}
function Sy(e) {
	let t = [], n = "", r = !1, i = !1, a = 0, o = e.length;
	for (let s = 0; s < o; s += 1) {
		let o = e[s];
		if (o === "'" && !i) r = !r, n += o;
		else if (o === "\"" && !r) i = !i, n += o;
		else {
			if (!r && !i) {
				if (o === "(") {
					a += 1, n += o;
					continue;
				}
				if (o === ")" && a > 0) {
					--a, n += o;
					continue;
				}
				if (o === ";" && a === 0) {
					t.push(n), n = "";
					continue;
				}
			}
			n += o;
		}
	}
	return n && t.push(n), t;
}
function Cy(e) {
	let t = [], n = Sy(e || ""), r = n.length;
	for (let e = 0; e < r; e += 1) {
		let r = n[e], i = r.indexOf(":");
		if (i === -1) continue;
		let a = r.slice(0, i).trim(), o = r.slice(i + 1).trim();
		a && o && t.push([a, o]);
	}
	return t;
}
function J(...e) {
	return e.filter((e) => !!e).reduce((e, t) => {
		let n = { ...e };
		return Object.entries(t).forEach(([e, t]) => {
			if (e === "__proto__") Object.defineProperty(n, e, {
				configurable: !0,
				enumerable: !0,
				value: t,
				writable: !0
			});
			else if (!n[e]) n[e] = t;
			else if (e === "class") {
				let r = t ? String(t).split(" ") : [], i = n[e] ? n[e].split(" ") : [], a = r.filter((e) => !i.includes(e));
				n[e] = [...i, ...a].join(" ");
			} else if (e === "style") {
				let r = new Map([...Cy(n[e]), ...Cy(t)]);
				n[e] = Array.from(r.entries()).map(([e, t]) => `${e}: ${t}`).join("; ");
			} else n[e] = t;
		}), n;
	}, {});
}
function wy(e, t) {
	return t.filter((t) => t.type === e.type.name).filter((e) => e.attribute.rendered).map((t) => t.attribute.renderHTML ? t.attribute.renderHTML(e.attrs) || {} : { [t.name]: e.attrs[t.name] }).reduce((e, t) => J(e, t), {});
}
function Ty(e) {
	return typeof e == "string" ? e.match(/^[+-]?(?:\d*\.)?\d+$/) ? Number(e) : e === "true" || e !== "false" && e : e;
}
function Ey(e, t) {
	return "style" in e ? e : {
		...e,
		getAttrs: (n) => {
			let r = e.getAttrs ? e.getAttrs(n) : e.attrs;
			if (r === !1) return !1;
			let i = t.reduce((e, t) => {
				let r = t.attribute.parseHTML ? t.attribute.parseHTML(n) : Ty(n.getAttribute(t.name));
				return r == null ? e : {
					...e,
					[t.name]: r
				};
			}, {});
			return {
				...r,
				...i
			};
		}
	};
}
function Dy(e) {
	return Object.fromEntries(Object.entries(e).filter(([e, t]) => e === "attrs" && xy(t) ? !1 : t != null));
}
function Oy(e) {
	var t, n;
	let r = {};
	return !(e != null && (t = e.attribute) != null && t.isRequired) && "default" in (e?.attribute || {}) && (r.default = e.attribute.default), (e == null || (n = e.attribute) == null ? void 0 : n.validate) !== void 0 && (r.validate = e.attribute.validate), [e.name, r];
}
function ky(e, t, n = yy(e)) {
	let { nodeExtensions: r, markExtensions: i } = vy(e);
	return {
		topNode: r.find((e) => K(e, "topNode"))?.name,
		nodes: Object.fromEntries(r.map((r) => {
			let i = n.filter((e) => e.type === r.name), a = {
				name: r.name,
				options: r.options,
				storage: r.storage,
				editor: t
			}, o = Dy({
				...e.reduce((e, t) => {
					let n = K(t, "extendNodeSchema", a);
					return {
						...e,
						...n ? n(r) : {}
					};
				}, {}),
				content: q(K(r, "content", a)),
				marks: q(K(r, "marks", a)),
				group: q(K(r, "group", a)),
				inline: q(K(r, "inline", a)),
				atom: q(K(r, "atom", a)),
				selectable: q(K(r, "selectable", a)),
				draggable: q(K(r, "draggable", a)),
				code: q(K(r, "code", a)),
				whitespace: q(K(r, "whitespace", a)),
				linebreakReplacement: q(K(r, "linebreakReplacement", a)),
				defining: q(K(r, "defining", a)),
				isolating: q(K(r, "isolating", a)),
				attrs: Object.fromEntries(i.map(Oy))
			}), s = q(K(r, "parseHTML", a));
			s && (o.parseDOM = s.map((e) => Ey(e, i)));
			let c = K(r, "renderHTML", a);
			c && (o.toDOM = (e) => c({
				node: e,
				HTMLAttributes: wy(e, i)
			}));
			let l = K(r, "renderText", a);
			return l && (o.toText = l), [r.name, o];
		})),
		marks: Object.fromEntries(i.map((r) => {
			let i = n.filter((e) => e.type === r.name), a = {
				name: r.name,
				options: r.options,
				storage: r.storage,
				editor: t
			}, o = Dy({
				...e.reduce((e, t) => {
					let n = K(t, "extendMarkSchema", a);
					return {
						...e,
						...n ? n(r) : {}
					};
				}, {}),
				inclusive: q(K(r, "inclusive", a)),
				excludes: q(K(r, "excludes", a)),
				group: q(K(r, "group", a)),
				spanning: q(K(r, "spanning", a)),
				code: q(K(r, "code", a)),
				attrs: Object.fromEntries(i.map(Oy))
			}), s = q(K(r, "parseHTML", a));
			s && (o.parseDOM = s.map((e) => Ey(e, i)));
			let c = K(r, "renderHTML", a);
			return c && (o.toDOM = (e) => c({
				mark: e,
				HTMLAttributes: wy(e, i)
			})), [r.name, o];
		}))
	};
}
function Ay(e, t, n) {
	if (n === void 0) return new Tl(ky(e, t));
	let r = _y(e.filter((e) => e.type !== "extension").map((e) => e.name));
	if (r.length) throw RangeError(`Duplicate local schema types: ${r.join(", ")}`);
	let i = new Tl(n);
	return new Tl(gy(ky(e, t, uy(yy(e), i)), i));
}
function jy(e) {
	return e.sort((e, t) => {
		let n = K(e, "priority") || 100, r = K(t, "priority") || 100;
		return n > r ? -1 : +(n < r);
	});
}
function My(e) {
	let t = jy(cy(e)), n = _y(t.map((e) => e.name));
	return n.length && console.warn(`[tiptap warn]: Duplicate extension names found: [${n.map((e) => `'${e}'`).join(", ")}]. This can lead to issues.`), t;
}
function Ny(e, t, n) {
	let { from: r, to: i } = t, { blockSeparator: a = "\n\n", textSerializers: o = {} } = n || {}, s = "";
	return e.nodesBetween(r, i, (e, n, c, l) => {
		e.isBlock && n > r && (s += a);
		let u = o?.[e.type.name];
		if (u) return c && (s += u({
			node: e,
			pos: n,
			parent: c,
			index: l,
			range: t
		})), !1;
		if (e.isText) {
			var d;
			s += e == null || (d = e.text) == null ? void 0 : d.slice(Math.max(r, n) - n, i - n);
		}
	}), s;
}
function Py(e, t) {
	return Ny(e, {
		from: 0,
		to: e.content.size
	}, t);
}
function Fy(e) {
	return Object.fromEntries(Object.entries(e.nodes).filter(([, e]) => e.spec.toText).map(([e, t]) => [e, t.spec.toText]));
}
function Iy(e, t) {
	let n = q_(t, e.schema), { from: r, to: i } = e.selection, a = [];
	e.doc.nodesBetween(r, i, (e) => {
		a.push(e);
	});
	let o = a.reverse().find((e) => e.type.name === n.name);
	return o ? { ...o.attrs } : {};
}
function Ly(e, t) {
	let n = Gv(typeof t == "string" ? t : t.name, e.schema);
	return n === "node" ? Iy(e, t) : n === "mark" ? ry(e, t) : {};
}
function Ry(e, t = JSON.stringify) {
	let n = {};
	return e.filter((e) => {
		let r = t(e);
		return Object.prototype.hasOwnProperty.call(n, r) ? !1 : n[r] = !0;
	});
}
function zy(e) {
	let t = Ry(e);
	return t.length === 1 ? t : t.filter((e, n) => !t.filter((e, t) => t !== n).some((t) => e.oldRange.from >= t.oldRange.from && e.oldRange.to <= t.oldRange.to && e.newRange.from >= t.newRange.from && e.newRange.to <= t.newRange.to));
}
function By(e) {
	let { mapping: t, steps: n } = e, r = [], i = t.invert();
	return t.maps.forEach((e, a) => {
		let o = [];
		if (e.ranges.length) e.forEach((e, t) => {
			o.push({
				from: e,
				to: t
			});
		});
		else {
			let { from: e, to: t } = n[a];
			if (e === void 0 || t === void 0) return;
			o.push({
				from: e,
				to: t
			});
		}
		let s = t.slice(a);
		o.forEach(({ from: e, to: t }) => {
			let n = s.map(e, -1), a = s.map(t), o = i.map(n, -1), c = i.map(a);
			r.push({
				oldRange: {
					from: o,
					to: c
				},
				newRange: {
					from: n,
					to: a
				}
			});
		});
	}), zy(r);
}
function Vy(e, t, n) {
	let r = [];
	return e === t ? n.resolve(e).marks().forEach((t) => {
		let i = ov(n.resolve(e), t.type);
		i && r.push({
			mark: t,
			...i
		});
	}) : n.nodesBetween(e, t, (e, t) => {
		e && e?.nodeSize !== void 0 && r.push(...e.marks.map((n) => ({
			from: t,
			to: t + e.nodeSize,
			mark: n
		})));
	}), r;
}
var Hy = (e, t, n, r = 20) => {
	let i = e.doc.resolve(n), a = r, o = null;
	for (; a > 0 && o === null;) {
		let e = i.node(a);
		e?.type.name === t ? o = e : --a;
	}
	return [o, a];
}, Uy = (e) => {
	let t = e.depth - 1;
	if (t < 0) return null;
	let n = e.index(t);
	return n === 0 ? null : e.node(t).child(n - 1);
};
function Wy(e, t) {
	return t.nodes[e] || t.marks[e] || null;
}
function Gy(e, t, n) {
	return Object.fromEntries(Object.entries(n).filter(([n]) => {
		let r = e.find((e) => e.type === t && e.name === n);
		return r ? r.attribute.keepOnSplit : !1;
	}));
}
var Ky = (e, t = 500) => {
	let n = "", r = e.parentOffset;
	return e.parent.nodesBetween(Math.max(0, r - t), r, (e, t, i, a) => {
		var o;
		let s = (o = e.type.spec).toText?.call(o, {
			node: e,
			pos: t,
			parent: i,
			index: a
		}) || e.textContent || "%leaf%";
		n += e.isAtom && !e.isText ? s : s.slice(0, Math.max(0, r - t));
	}), n;
};
function qy(e, t, n = {}) {
	let { empty: r, ranges: i } = e.selection, a = t ? sv(t, e.schema) : null;
	if (r) return !!(e.storedMarks || e.selection.$from.marks()).filter((e) => !a || a.name === e.type.name).find((e) => rv(e.attrs, n, { strict: !1 }));
	let o = 0, s = [];
	if (i.forEach(({ $from: t, $to: n }) => {
		let r = t.pos, i = n.pos;
		e.doc.nodesBetween(r, i, (e, t) => {
			if (a && e.inlineContent && !e.type.allowsMarkType(a)) return !1;
			if (!e.isText && !e.marks.length) return;
			let n = Math.max(r, t), c = Math.min(i, t + e.nodeSize), l = c - n;
			o += l, s.push(...e.marks.map((e) => ({
				mark: e,
				from: n,
				to: c
			})));
		});
	}), o === 0) return !1;
	let c = s.filter((e) => !a || a.name === e.mark.type.name).filter((e) => rv(e.mark.attrs, n, { strict: !1 })).reduce((e, t) => e + t.to - t.from, 0), l = s.filter((e) => !a || e.mark.type !== a && e.mark.type.excludes(a)).reduce((e, t) => e + t.to - t.from, 0);
	return (c > 0 ? c + l : c) >= o;
}
function Jy(e, t, n = {}) {
	if (!t) return Bv(e, null, n) || qy(e, null, n);
	let r = Gv(t, e.schema);
	return r === "node" ? Bv(e, t, n) : r === "mark" && qy(e, t, n);
}
var Yy = (e, t) => {
	let { $from: n, $to: r, $anchor: i } = e.selection;
	if (t) {
		let n = sy((e) => e.type.name === t)(e.selection);
		if (!n) return !1;
		let r = e.doc.resolve(n.pos + 1);
		return i.pos + 1 === r.end();
	}
	return !(r.parentOffset < r.parent.nodeSize - 2 || n.pos !== r.pos);
}, Xy = (e) => {
	let { $from: t, $to: n } = e.selection;
	return !(t.parentOffset > 0 || t.pos !== n.pos);
};
function Zy(e, t) {
	return Array.isArray(t) ? t.some((t) => (typeof t == "string" ? t : t.name) === e.name) : t;
}
function Qy(e, t) {
	let { nodeExtensions: n } = vy(t), r = n.find((t) => t.name === e);
	if (!r) return !1;
	let i = q(K(r, "group", {
		name: r.name,
		options: r.options,
		storage: r.storage
	}));
	return typeof i == "string" && i.split(" ").includes("list");
}
function $y(e, { checkChildren: t = !0, ignoreWhitespace: n = !1 } = {}) {
	if (n) {
		if (e.type.name === "hardBreak") return !0;
		if (e.isText) return !/\S/.test(e.text ?? "");
	}
	if (e.isText) return !e.text;
	if (e.isAtom || e.isLeaf) return !1;
	if (e.content.childCount === 0) return !0;
	if (t) {
		let r = !0;
		return e.content.forEach((e) => {
			r !== !1 && ($y(e, {
				ignoreWhitespace: n,
				checkChildren: t
			}) || (r = !1));
		}), r;
	}
	return !1;
}
function eb(e) {
	return e instanceof V;
}
function tb(e) {
	if (typeof e != "object" || !e) return !1;
	let t = e;
	return typeof t.apply == "function" && typeof t.getMap == "function" && typeof t.invert == "function" && typeof t.map == "function" && typeof t.merge == "function" && typeof t.toJSON == "function";
}
function nb(e) {
	if (typeof e != "object" || !e) return !1;
	let t = e;
	if (!tb(t)) return !1;
	let n = t.toJSON();
	return !(typeof n != "object" || !n || n.stepType !== "replace");
}
var rb = class e {
	constructor(e) {
		this.position = e;
	}
	static fromJSON(t) {
		return new e(t.position);
	}
	toJSON() {
		return { position: this.position };
	}
};
function ib(e, t) {
	let n = t.mapping.mapResult(e.position);
	return {
		position: new rb(n.pos),
		mapResult: n
	};
}
function ab(e) {
	return new rb(e);
}
function ob(e, t, n) {
	let { selection: r } = t, i = null;
	if (uv(r) && (i = r.$cursor), i) {
		let t = e.storedMarks ?? i.marks();
		return i.parent.type.allowsMarkType(n) && (!!n.isInSet(t) || !t.some((e) => e.type.excludes(n)));
	}
	let { ranges: a } = r;
	return a.some(({ $from: t, $to: r }) => {
		let i = t.depth === 0 && e.doc.inlineContent && e.doc.type.allowsMarkType(n);
		return e.doc.nodesBetween(t.pos, r.pos, (e, t, r) => {
			if (i) return !1;
			if (e.isInline) {
				let t = !r || r.type.allowsMarkType(n), a = !!n.isInSet(e.marks) || !e.marks.some((e) => e.type.excludes(n));
				i = t && a;
			}
			return !i;
		}), i;
	});
}
var sb = (e, t = {}) => ({ tr: n, state: r, dispatch: i }) => {
	let { selection: a } = n, { empty: o, ranges: s } = a, c = sv(e, r.schema);
	if (i) {
		if (o) {
			let e = ry(r, c);
			n.addStoredMark(c.create({
				...e,
				...t
			}));
		} else s.forEach((e) => {
			let i = e.$from.pos, a = e.$to.pos;
			r.doc.nodesBetween(i, a, (e, r) => {
				let o = Math.max(r, i), s = Math.min(r + e.nodeSize, a);
				e.marks.find((e) => e.type === c) ? e.marks.forEach((e) => {
					c === e.type && n.addMark(o, s, c.create({
						...e.attrs,
						...t
					}));
				}) : n.addMark(o, s, c.create(t));
			});
		});
	}
	return ob(r, n, c);
}, cb = (e, t) => ({ tr: n }) => (n.setMeta(e, t), !0), lb = (e, t = {}) => ({ state: n, dispatch: r, chain: i }) => {
	let a = q_(e, n.schema), o;
	return n.selection.$anchor.sameParent(n.selection.$head) && (o = n.selection.$anchor.parent.attrs), a.isTextblock ? i().command(({ commands: e }) => ff(a, {
		...o,
		...t
	})(n) ? !0 : e.clearNodes()).command(({ state: e }) => ff(a, {
		...o,
		...t
	})(e, r)).run() : (console.warn("[tiptap warn]: Currently \"setNode()\" only supports text block nodes."), !1);
}, ub = (e) => ({ tr: t, dispatch: n }) => {
	if (n) {
		let { doc: n } = t, r = dv(e, 0, n.content.size), i = V.create(n, r);
		t.setSelection(i);
	}
	return !0;
}, db = (e, t) => ({ tr: n, state: r, dispatch: i }) => {
	let { selection: a } = r, o, s;
	return typeof t == "number" ? (o = t, s = t) : t && "from" in t && "to" in t ? (o = t.from, s = t.to) : (o = a.from, s = a.to), i && n.doc.nodesBetween(o, s, (t, r) => {
		t.isText || n.setNodeMarkup(r, void 0, {
			...t.attrs,
			dir: e
		});
	}), !0;
}, fb = (e) => ({ tr: t, dispatch: n }) => {
	if (n) {
		let { doc: n } = t, { from: r, to: i } = typeof e == "number" ? {
			from: e,
			to: e
		} : e, a = B.atStart(n).from, o = B.atEnd(n).to, s = dv(r, a, o), c = dv(i, a, o), l = B.create(n, s, c);
		t.setSelection(l);
	}
	return !0;
}, pb = (e) => ({ state: t, dispatch: n }) => Tf(q_(e, t.schema))(t, n);
function mb(e, t) {
	let n = e.storedMarks || e.selection.$to.parentOffset && e.selection.$from.marks();
	if (n) {
		let r = n.filter((e) => t?.includes(e.type.name));
		e.tr.ensureMarks(r);
	}
}
var hb = ({ keepMarks: e = !0 } = {}) => ({ tr: t, state: n, dispatch: r, editor: i }) => {
	let { selection: a, doc: o } = t, { $from: s, $to: c } = a, l = i.extensionManager.attributes, u = Gy(l, s.node().type.name, s.node().attrs);
	if (a instanceof V && a.node.isBlock) return !s.parentOffset || !Lu(o, s.pos) ? !1 : (r && (e && mb(n, i.extensionManager.splittableMarks), t.split(s.pos).scrollIntoView()), !0);
	if (!s.parent.isBlock) return !1;
	let d = c.parentOffset === c.parent.content.size, f = s.depth === 0 ? void 0 : Ev(s.node(-1).contentMatchAt(s.indexAfter(-1))), p = d && f ? [{
		type: f,
		attrs: u
	}] : void 0, m = a instanceof B && !a.empty ? Ad.create({
		doc: t.doc,
		selection: a
	}).tr.deleteSelection() : null, h = m ? m.doc : t.doc, g = m ? m.mapping.map(s.pos) : s.pos, _ = Lu(h, g, 1, p);
	if (!p && !_ && Lu(h, g, 1, f ? [{ type: f }] : void 0) && (_ = !0, p = f ? [{
		type: f,
		attrs: u
	}] : void 0), r) {
		if (_) {
			let e = t.steps.length;
			if (a instanceof B && t.deleteSelection(), t.split(t.mapping.slice(e).map(s.pos), 1, p), f && !d && !s.parentOffset && s.parent.type !== f) {
				let n = t.mapping.slice(e).map(s.before()), r = t.doc.resolve(n);
				s.node(-1).canReplaceWith(r.index(), r.index() + 1, f) && t.setNodeMarkup(t.mapping.slice(e).map(s.before()), f);
			}
		}
		e && mb(n, i.extensionManager.splittableMarks), t.scrollIntoView();
	}
	return _;
}, gb = (e, t = {}) => ({ tr: n, state: r, dispatch: i, editor: a }) => {
	let o = q_(e, r.schema), { $from: s, $to: c } = r.selection, l = r.selection.node;
	if (l && l.isBlock || s.depth < 2 || !s.sameParent(c)) return !1;
	let u = s.node(-1);
	if (u.type !== o) return !1;
	let d = a.extensionManager.attributes;
	if (s.parent.content.size === 0 && s.node(-1).childCount === s.indexAfter(-1)) {
		if (s.depth === 2 || s.node(-3).type !== o || s.index(-2) !== s.node(-2).childCount - 1) return !1;
		if (i) {
			let e = I.empty, r = s.index(-1) ? 1 : s.index(-2) ? 2 : 3;
			for (let t = s.depth - r; t >= s.depth - 3; --t) e = I.from(s.node(t).copy(e));
			let i = s.indexAfter(-1) < s.node(-2).childCount ? 1 : s.indexAfter(-2) < s.node(-3).childCount ? 2 : 3, a = {
				...Gy(d, s.node().type.name, s.node().attrs),
				...t
			}, c = o.contentMatch.defaultType?.createAndFill(a) || void 0;
			e = e.append(I.from(o.createAndFill(null, c) || void 0));
			let l = s.before(s.depth - (r - 1));
			n.replace(l, s.after(-i), new R(e, 4 - r, 0));
			let u = -1;
			n.doc.nodesBetween(l, n.doc.content.size, (e, t) => {
				if (u > -1) return !1;
				e.isTextblock && e.content.size === 0 && (u = t + 1);
			}), u > -1 && n.setSelection(B.near(n.doc.resolve(u))), n.scrollIntoView();
		}
		return !0;
	}
	let f = c.pos === s.end() ? u.contentMatchAt(0).defaultType : null, p = {
		...Gy(d, u.type.name, u.attrs),
		...t
	}, m = {
		...Gy(d, s.node().type.name, s.node().attrs),
		...t
	}, h = s.parentOffset === 0 && s.index(-1) === 0, g = s.before(-1);
	n.delete(s.pos, c.pos);
	let _ = h ? u.attrs : p, v = f ? [{
		type: o,
		attrs: _
	}, {
		type: f,
		attrs: m
	}] : [{
		type: o,
		attrs: _
	}];
	if (!Lu(n.doc, s.pos, 2)) return !1;
	if (i) {
		let { selection: e, storedMarks: t } = r, { splittableMarks: o } = a.extensionManager, c = t || e.$to.parentOffset && e.$from.marks();
		if (n.split(s.pos, 2, v).scrollIntoView(), h && n.setNodeMarkup(g, void 0, p), !c || !i) return !0;
		let l = c.filter((e) => o.includes(e.type.name));
		n.ensureMarks(l);
	}
	return !0;
};
function _b(e, t, n) {
	if (!e.validContent(t)) return null;
	try {
		return e.create(n, t);
	} catch {
		return null;
	}
}
function vb(e, t) {
	if (e.pendingContent.length === 0) return !0;
	let n = _b(t, I.from(e.pendingContent));
	return n ? (e.items.push(n), e.pendingContent = [], !0) : !1;
}
function yb(e, t, n) {
	return n.validContent(I.from([...t.pendingContent, e])) ? (t.pendingContent.push(e), !0) : !vb(t, n) || !n.validContent(I.from(e)) ? !1 : (t.pendingContent.push(e), !0);
}
function bb(e, t, n, r) {
	let i = r(e, n);
	if (!i) return !1;
	let a = _b(n.listType, I.from(i), e.attrs);
	return a ? n.itemType.validContent(I.from([...t.pendingContent, a])) ? (t.pendingContent.push(a), !0) : vb(t, n.itemType) ? (t.items.push(...i), !0) : !1 : !1;
}
function xb(e, t, n) {
	let r = {
		items: [],
		pendingContent: []
	};
	for (let i = 0; i < e.childCount; i += 1) {
		let a = e.child(i);
		if (!(t.isListNode(a) ? bb(a, r, t, n) : yb(a, r, t.itemType))) return null;
	}
	return vb(r, t.itemType) ? r.items : null;
}
function Sb(e, t) {
	let n = [];
	for (let r = 0; r < e.childCount; r += 1) {
		let i = xb(e.child(r), t, Sb);
		if (!i) return null;
		n.push(...i);
	}
	return n;
}
function Cb(e, t) {
	let n = null;
	return e.descendants((e, r) => e !== t || (n = r, !1)), n;
}
function wb(e) {
	return !e || e === "1" ? null : e;
}
function Tb(e, t) {
	return wb(e) === wb(t);
}
var Eb = (e, t) => {
	let n = sy((e) => e.type === t)(e.selection);
	if (!n) return !0;
	let r = e.doc.resolve(Math.max(0, n.pos - 1)).before(n.depth);
	if (r === void 0) return !0;
	let i = e.doc.nodeAt(r);
	return !(n.node.type === i?.type && zu(e.doc, n.pos)) || !Tb(n.node.attrs.type, i?.attrs.type) || e.join(n.pos), !0;
}, Db = (e, t) => {
	let n = sy((e) => e.type === t)(e.selection);
	if (!n) return !0;
	let r = e.doc.resolve(n.start).after(n.depth);
	if (r === void 0) return !0;
	let i = e.doc.nodeAt(r);
	return !(n.node.type === i?.type && zu(e.doc, r)) || !Tb(n.node.attrs.type, i?.attrs.type) || e.join(r), !0;
};
function Ob(e) {
	let t = e.doc, n = t.firstChild;
	if (!n) return null;
	let r = t.resolve(1), i = t.resolve(n.nodeSize - 1);
	return B.between(r, i);
}
var kb = (e, t, n, r = {}) => ({ editor: i, tr: a, state: o, dispatch: s, chain: c, commands: l, can: u }) => {
	let { extensions: d, splittableMarks: f } = i.extensionManager, p = q_(e, o.schema), m = q_(t, o.schema), { selection: h, storedMarks: g } = o, { $from: _, $to: v } = h, y = _.blockRange(v), b = g || h.$to.parentOffset && h.$from.marks();
	if (!y) return !1;
	let x = sy((e) => Qy(e.type.name, d))(h), S = h.from === 0 && h.to === o.doc.content.size, C = o.doc.content.content, w = C.length === 1 ? C[0] : null, ee = S && w && Qy(w.type.name, d) ? {
		node: w,
		pos: 0,
		depth: 0
	} : null, T = x ?? ee, te = !!x && y.depth >= 1 && y.depth - x.depth <= 1, E = !!ee;
	if ((te || E) && T) {
		if (T.node.type === p) return S && E ? c().command(({ tr: e, dispatch: t }) => {
			let n = Ob(e);
			return n ? (e.setSelection(n), t && t(e), !0) : !1;
		}).liftListItem(m).run() : l.liftListItem(m);
		if (Qy(T.node.type.name, d) && p.validContent(T.node.content)) return c().command(() => (a.setNodeMarkup(T.pos, p), !0)).command(() => Eb(a, p)).command(() => Db(a, p)).run();
		if (Qy(T.node.type.name, d)) {
			let e = T.node.firstChild?.type;
			if (e && e !== m) {
				let e = Sb(T.node, {
					listType: p,
					itemType: m,
					isListNode: (e) => Qy(e.type.name, d)
				}), t = e ? I.from(e) : null;
				return !t || !p.validContent(t) ? !1 : c().command(() => {
					let { $anchor: e, $head: n } = a.selection, i = e.parent, o = n.parent, s = e.parentOffset, c = n.parentOffset, l;
					try {
						l = p.create(r, t);
					} catch {
						return !1;
					}
					if (a.replaceWith(T.pos, T.pos + T.node.nodeSize, l), i.inlineContent && o.inlineContent) {
						let e = Cb(l, i), t = Cb(l, o);
						if (e !== null && t !== null) {
							let n = T.pos + e + 2 + s, r = T.pos + t + 2 + c;
							a.setSelection(B.create(a.doc, n, r));
						}
					}
					return !0;
				}).command(() => Eb(a, p)).command(() => Db(a, p)).run();
			}
		}
	}
	return !n || !b || !s ? c().command(() => u().wrapInList(p, r) ? !0 : l.clearNodes()).wrapInList(p, r).command(() => Eb(a, p)).command(() => Db(a, p)).run() : c().command(() => {
		let e = u().wrapInList(p, r), t = b.filter((e) => f.includes(e.type.name));
		return a.ensureMarks(t), e ? !0 : l.clearNodes();
	}).wrapInList(p, r).command(() => Eb(a, p)).command(() => Db(a, p)).run();
}, Ab = (e, t = {}, n = {}) => ({ state: r, commands: i }) => {
	let { extendEmptyMarkRange: a = !1 } = n, o = sv(e, r.schema);
	return qy(r, o, t) ? i.unsetMark(o, { extendEmptyMarkRange: a }) : i.setMark(o, t);
}, jb = (e, t, n = {}) => ({ state: r, commands: i }) => {
	let a = q_(e, r.schema), o = q_(t, r.schema), s = Bv(r, a, n), c;
	return r.selection.$anchor.sameParent(r.selection.$head) && (c = r.selection.$anchor.parent.attrs), s ? i.setNode(o, c) : i.setNode(a, {
		...c,
		...n
	});
}, Mb = (e, t = {}) => ({ state: n, commands: r }) => {
	let i = q_(e, n.schema);
	return Bv(n, i, t) ? r.lift(i) : r.wrapIn(i, t);
}, Nb = () => ({ state: e, dispatch: t }) => {
	let n = e.plugins;
	for (let r = 0; r < n.length; r += 1) {
		let i = n[r], a;
		if (i.spec.isInputRules && (a = i.getState(e))) {
			if (t) {
				let t = e.tr, n = a.transform;
				for (let e = n.steps.length - 1; e >= 0; --e) t.step(n.steps[e].invert(n.docs[e]));
				if (a.text) {
					let n = t.doc.resolve(a.from).marks();
					t.replaceWith(a.from, a.to, e.schema.text(a.text, n));
				} else t.delete(a.from, a.to);
			}
			return !0;
		}
	}
	return !1;
}, Pb = (e = {}) => ({ tr: t, dispatch: n, editor: r }) => {
	let { ignoreClearable: i = !1 } = e, { selection: a } = t, { empty: o, ranges: s } = a;
	if (o) return !0;
	let { nonClearableMarks: c } = r.extensionManager;
	if (n) {
		let e = Object.values(r.schema.marks).filter((e) => i || !c.includes(e.name));
		s.forEach((n) => {
			for (let r of e) t.removeMark(n.$from.pos, n.$to.pos, r);
		});
	}
	return !0;
}, Fb = (e, t = {}) => ({ tr: n, state: r, dispatch: i }) => {
	let { extendEmptyMarkRange: a = !1 } = t, { selection: o } = n, s = sv(e, r.schema), { $from: c, empty: l, ranges: u } = o;
	if (!i) return !0;
	if (l && a) {
		let { from: e, to: t } = o, r = ov(c, s, c.marks().find((e) => e.type === s)?.attrs);
		r && (e = r.from, t = r.to), n.removeMark(e, t, s);
	} else u.forEach((e) => {
		n.removeMark(e.$from.pos, e.$to.pos, s);
	});
	return n.removeStoredMark(s), !0;
}, Ib = (e) => ({ tr: t, state: n, dispatch: r }) => {
	let { selection: i } = n, a, o;
	return typeof e == "number" ? (a = e, o = e) : e && "from" in e && "to" in e ? (a = e.from, o = e.to) : (a = i.from, o = i.to), r && t.doc.nodesBetween(a, o, (e, n) => {
		if (e.isText) return;
		let r = { ...e.attrs };
		delete r.dir, t.setNodeMarkup(n, void 0, r);
	}), !0;
}, Lb = (e, t = {}) => ({ tr: n, state: r, dispatch: i }) => {
	let a = null, o = null, s = Gv(typeof e == "string" ? e : e.name, r.schema);
	if (!s) return !1;
	s === "node" && (a = q_(e, r.schema)), s === "mark" && (o = sv(e, r.schema));
	let c = !1;
	return n.selection.ranges.forEach((e) => {
		let s = e.$from.pos, l = e.$to.pos, u, d, f, p;
		n.selection.empty ? r.doc.nodesBetween(s, l, (e, t) => {
			a && a === e.type && (c = !0, f = Math.max(t, s), p = Math.min(t + e.nodeSize, l), u = t, d = e);
		}) : r.doc.nodesBetween(s, l, (e, r) => {
			r < s && a && a === e.type && (c = !0, f = Math.max(r, s), p = Math.min(r + e.nodeSize, l), u = r, d = e), r >= s && r <= l && (a && a === e.type && (c = !0, i && n.setNodeMarkup(r, void 0, {
				...e.attrs,
				...t
			})), o && e.marks.length && e.marks.forEach((a) => {
				if (o === a.type && (c = !0, i)) {
					let i = Math.max(r, s), c = Math.min(r + e.nodeSize, l);
					n.addMark(i, c, o.create({
						...a.attrs,
						...t
					}));
				}
			}));
		}), d && (u !== void 0 && i && n.setNodeMarkup(u, void 0, {
			...d.attrs,
			...t
		}), o && d.marks.length && d.marks.forEach((e) => {
			o === e.type && i && n.addMark(f, p, o.create({
				...e.attrs,
				...t
			}));
		}));
	}), c;
}, Rb = new U("__tiptap_decorations__"), zb = (e) => ({ tr: t, dispatch: n }) => (n && t.setMeta(Rb, {
	type: "force",
	name: e
}), !0), Bb = (e, t = {}) => ({ state: n, dispatch: r }) => df(q_(e, n.schema), t)(n, r), Vb = (e, t = {}) => ({ state: n, dispatch: r }) => vf(q_(e, n.schema), t)(n, r), Hb = /* @__PURE__ */ Tc({
	blur: () => B_,
	clearContent: () => V_,
	clearNodes: () => H_,
	command: () => U_,
	createParagraphNear: () => W_,
	cut: () => G_,
	deleteCurrentNode: () => K_,
	deleteNode: () => J_,
	deleteRange: () => Y_,
	deleteSelection: () => $_,
	enter: () => ev,
	exitCode: () => tv,
	extendMarkRange: () => cv,
	first: () => lv,
	focus: () => gv,
	forEach: () => _v,
	insertContent: () => vv,
	insertContentAt: () => Tv,
	insertDefaultBlock: () => Dv,
	joinBackward: () => Av,
	joinDown: () => kv,
	joinForward: () => jv,
	joinItemBackward: () => Nv,
	joinItemForward: () => Pv,
	joinTextblockBackward: () => Fv,
	joinTextblockForward: () => Iv,
	joinUp: () => Ov,
	keyboardShortcut: () => zv,
	lift: () => Vv,
	liftEmptyBlock: () => Hv,
	liftListItem: () => Uv,
	newlineInCode: () => Wv,
	resetAttributes: () => qv,
	scrollIntoView: () => Jv,
	selectAll: () => Yv,
	selectNodeBackward: () => Xv,
	selectNodeForward: () => Zv,
	selectParentNode: () => Qv,
	selectTextblockEnd: () => $v,
	selectTextblockStart: () => ey,
	setContent: () => ny,
	setMark: () => sb,
	setMeta: () => cb,
	setNode: () => lb,
	setNodeSelection: () => ub,
	setTextDirection: () => db,
	setTextSelection: () => fb,
	sinkListItem: () => pb,
	splitBlock: () => hb,
	splitListItem: () => gb,
	toggleList: () => kb,
	toggleMark: () => Ab,
	toggleNode: () => jb,
	toggleWrap: () => Mb,
	undoInputRule: () => Nb,
	unsetAllMarks: () => Pb,
	unsetMark: () => Fb,
	unsetTextDirection: () => Ib,
	updateAttributes: () => Lb,
	updateDecorations: () => zb,
	wrapIn: () => Bb,
	wrapInList: () => Vb
}), Ub = /* @__PURE__ */ new WeakMap();
function Wb(e, t) {
	Ub.set(e, (Ub.get(e) ?? 0) + 1);
	try {
		return t();
	} finally {
		let t = (Ub.get(e) ?? 1) - 1;
		t > 0 ? Ub.set(e, t) : Ub.delete(e);
	}
}
function Gb(e) {
	return Ub.has(e);
}
var Kb = class {
	constructor() {
		this.callbacks = {};
	}
	on(e, t) {
		return this.callbacks[e] || (this.callbacks[e] = []), this.callbacks[e].push(t), this;
	}
	emit(e, ...t) {
		let n = this.callbacks[e];
		return n && n.forEach((e) => e.apply(this, t)), this;
	}
	off(e, t) {
		let n = this.callbacks[e];
		return n && (t ? this.callbacks[e] = n.filter((e) => e !== t) : delete this.callbacks[e]), this;
	}
	once(e, t) {
		let n = (...r) => {
			this.off(e, n), t.apply(this, r);
		};
		return this.on(e, n);
	}
	removeAllListeners() {
		this.callbacks = {};
	}
}, qb = typeof process < "u" && !1;
function Jb(e) {
	return e.kind === "widget";
}
function Yb(e, t) {
	let n = [], r = /* @__PURE__ */ new Set();
	for (let i of e) i.kind === "widget" && Jb(i) && r.add(i.key), n.push(i.toPMDecoration(t));
	return {
		decorations: n,
		widgetKeys: r
	};
}
function Xb(e, t, n) {
	let { decorations: r, widgetKeys: i } = Yb(t, n);
	return {
		set: G.create(e, r),
		widgetKeys: i
	};
}
function Zb({ position: e, from: t, to: n, docSize: r }) {
	return e < t ? !1 : e < n || e === n && n === r;
}
function Qb({ decorations: e, from: t, to: n, docSize: r, extensionName: i, warnedExtensions: a }) {
	return e.filter((e) => Zb({
		position: e.anchor,
		from: t,
		to: n,
		docSize: r
	}) ? !0 : (e.anchor === n || a.has(i) || (a.add(i), console.warn(`[tiptap warn]: Extension "${i}" returned a decoration outside the requested range [${t}, ${n}). It was ignored.`)), !1));
}
function $b(e) {
	let t = e.spec?.key;
	return typeof t == "string" ? t : void 0;
}
function ex(e) {
	let t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
	for (let r of e.find()) {
		let e = $b(r);
		if (!e) continue;
		let i = r.spec.extensionName ?? "unknown", a = t.get(e) ?? /* @__PURE__ */ new Set();
		a.add(i), t.set(e, a), n.set(e, (n.get(e) ?? 0) + 1);
	}
	return Array.from(t, ([e, t]) => ({
		key: e,
		extensions: t
	})).filter(({ key: e }) => (n.get(e) ?? 0) > 1);
}
function tx(e) {
	return e.jsonID === "attr";
}
function nx(e) {
	let t = !1;
	if (e.getMap().forEach(() => {
		t = !0;
	}), t || tx(e)) return !0;
	let n = e;
	return typeof n.from == "number" && typeof n.to == "number";
}
function rx(e, t) {
	let n = null, r = 0, i = 0;
	for (let a = 0; a < e.childCount && !(i > t.to); a += 1) {
		let o = i + e.child(a).nodeSize;
		o >= t.from && (n === null && (n = i), r = o), i = o;
	}
	return n === null ? null : {
		from: n,
		to: r
	};
}
function ix(e, t) {
	if (e.steps.some((e) => !nx(e))) return { type: "full" };
	let n = By(e).map(({ newRange: e }) => e);
	e.steps.forEach((t, r) => {
		if (!tx(t)) return;
		let i = e.mapping.slice(r);
		n.push({
			from: i.map(t.pos, -1),
			to: i.map(t.pos + 1)
		});
	});
	let r = [];
	for (let e of n) {
		let n = rx(t, e);
		n && r.push(n);
	}
	r.sort((e, t) => e.from - t.from);
	let i = [];
	for (let e of r) {
		let t = i[i.length - 1];
		t && e.from <= t.to ? t.to = Math.max(t.to, e.to) : i.push({ ...e });
	}
	return {
		type: "ranges",
		ranges: i
	};
}
function ax(e, t, n, r) {
	return e.map(t, n, { onRemove: (e) => {
		let t = e?.key;
		typeof t == "string" && r.delete(t);
	} });
}
function ox(e, t, n) {
	let r = t.decorationSetsByExtension[e] ?? G.empty, i = new Set(t.widgetKeysByExtension[e] ?? []);
	return {
		set: ax(r, n.mapping, n.doc, i),
		widgetKeys: i
	};
}
function sx(e, t) {
	let n = Object.values(t).flatMap((e) => e.find());
	return G.create(e, n);
}
function cx(e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of Object.values(e)) for (let e of n) t.add(e);
	return t;
}
function lx(e, t) {
	switch (t.update ?? "document") {
		case "document":
			if (t.createInRange) throw Error(`[tiptap error]: Extension "${e}" provides createInRange() but does not use the "changedRanges" decoration update strategy.`);
			return;
		case "changedRanges":
			if (!t.createInRange) throw Error(`[tiptap error]: Extension "${e}" uses the "changedRanges" decoration update strategy but does not provide createInRange().`);
			return;
		case "manual":
			if (t.createInRange) throw Error(`[tiptap error]: Extension "${e}" uses the "manual" decoration update strategy, which is not compatible with createInRange(). createInRange() requires the "changedRanges" strategy.`);
			if (t.shouldUpdate) throw Error(`[tiptap error]: Extension "${e}" cannot combine the "manual" decoration update strategy with shouldUpdate().`);
			return;
		default: throw Error(`[tiptap error]: Extension "${e}" uses an unknown decoration update strategy. Expected "document", "changedRanges", or "manual".`);
	}
}
function ux(e, t, n) {
	return n ? !0 : e.update === "manual" ? !1 : e.shouldUpdate ? e.shouldUpdate(t) : t.tr.docChanged;
}
var dx = /* @__PURE__ */ new Set(), fx = class {
	constructor(e) {
		this.warnedWidgetKeys = /* @__PURE__ */ new Set(), this.warnedOutOfRangeExtensions = /* @__PURE__ */ new Set(), this.handleBeforeTransaction = ({ nextState: e }) => {
			let t = Rb.getState(e);
			t && this.warnDuplicateWidgetKeys(t);
		}, this.editor = e.editor, this.entries = this.resolveEntries(e.entries), this.entries.forEach(({ name: e, spec: t }) => lx(e, t)), this.plugin = this.entries.length > 0 ? this.createPlugin() : null, this.editor.on("beforeTransaction", this.handleBeforeTransaction);
	}
	destroy() {
		this.editor.off("beforeTransaction", this.handleBeforeTransaction);
	}
	liveWidgetKeys() {
		return Rb.getState(this.editor.state)?.widgetKeys ?? dx;
	}
	get mountedView() {
		return this.editor.isDestroyed ? null : this.editor.view;
	}
	resolveEntries(e) {
		let t = [];
		for (let { name: n, addDecorations: r } of e) {
			let e = r();
			e && t.push({
				name: n,
				spec: e
			});
		}
		return t;
	}
	createPlugin() {
		let { editor: e, entries: t } = this;
		return new H({
			key: Rb,
			state: {
				init: (e, n) => {
					let r = {}, i = {};
					for (let { name: e, spec: a } of t) {
						let { set: t, widgetKeys: o } = this.buildFullSet(e, a, n);
						r[e] = t, i[e] = o;
					}
					let a = {
						decorationSetsByExtension: r,
						widgetKeysByExtension: i,
						mergedDecorationSet: this.buildMergedSet(n.doc, r),
						widgetKeys: cx(i)
					};
					return this.warnDuplicateWidgetKeys(a), a;
				},
				apply: (n, r, i, a) => {
					let o = n.getMeta(Rb), s = o?.type === "force" && !o.name, c = o?.type === "force" ? o.name : void 0, l = {}, u = {}, d = /* @__PURE__ */ new Set();
					return Wb(e, () => {
						for (let { name: o, spec: f } of t) {
							let t = s || c === o;
							if (!ux(f, {
								editor: e,
								tr: n,
								oldState: i,
								newState: a
							}, t)) {
								let e = ox(o, r, n);
								l[o] = e.set, u[o] = e.widgetKeys;
							} else if (f.update === "changedRanges" && n.docChanged && !t) {
								let e = this.applyChangedRangesRecompute(o, f, r, n, a);
								l[o] = e.set, u[o] = e.widgetKeys, d.add(o);
							} else {
								let { set: e, widgetKeys: t } = this.buildFullSet(o, f, a);
								l[o] = e, u[o] = t, d.add(o);
							}
						}
					}), d.size === 0 && !n.docChanged ? r : {
						decorationSetsByExtension: l,
						widgetKeysByExtension: u,
						mergedDecorationSet: this.mergeAfterApply({
							entries: t,
							previous: r,
							tr: n,
							decorationSetsByExtension: l,
							recomputedNames: d
						}),
						widgetKeys: cx(u)
					};
				}
			},
			props: { decorations(e) {
				return Rb.getState(e)?.mergedDecorationSet ?? G.empty;
			} }
		});
	}
	applyChangedRangesRecompute(e, t, n, r, i) {
		let a = ix(r, i.doc);
		return a.type === "full" ? this.buildFullSet(e, t, i) : this.rebuildRanges(e, t, n, r, i, a.ranges);
	}
	rebuildRanges(e, t, n, r, i, a) {
		let o = n.decorationSetsByExtension[e] ?? G.empty, s = new Set(n.widgetKeysByExtension[e] ?? []), c = ax(o, r.mapping, r.doc, s), l = i.doc.content.size;
		for (let { from: n, to: r } of a) {
			let a = c.find(n, r).filter((e) => Zb({
				position: e.from,
				from: n,
				to: r,
				docSize: l
			}));
			for (let e of a) {
				let t = $b(e);
				t && s.delete(t);
			}
			c = c.remove(a);
			let { decorations: o, widgetKeys: u } = Yb(Qb({
				decorations: this.runCreate(e, "createInRange", () => t.createInRange({
					editor: this.editor,
					state: i,
					view: this.mountedView,
					from: n,
					to: r
				})),
				from: n,
				to: r,
				docSize: l,
				extensionName: e,
				warnedExtensions: this.warnedOutOfRangeExtensions
			}), e);
			c = c.add(i.doc, o);
			for (let e of u) s.add(e);
		}
		return {
			set: c,
			widgetKeys: s
		};
	}
	buildFullSet(e, t, n) {
		let r = this.runCreate(e, "create", () => t.create({
			editor: this.editor,
			state: n,
			view: this.mountedView
		}));
		return Xb(n.doc, r, e);
	}
	runCreate(e, t, n) {
		try {
			return n();
		} catch (n) {
			return console.error(`[tiptap error]: Extension "${e}" threw in \`addDecorations().${t}()\`. Its decorations were dropped for this update.`, n), [];
		}
	}
	warnDuplicateWidgetKeys(e) {
		if (!qb) return;
		if (e.widgetKeys.size === 0) {
			this.warnedWidgetKeys.clear();
			return;
		}
		let t = ex(e.mergedDecorationSet), n = new Set(t.map(({ key: e }) => e));
		for (let { key: e, extensions: n } of t) {
			if (this.warnedWidgetKeys.has(e)) continue;
			let t = Array.from(n).map((e) => `"${e}"`).join(", ");
			console.warn(`[tiptap warn]: Duplicate widget decoration key "${e}" in extension${n.size === 1 ? "" : "s"} ${t}. Widget decoration keys must be globally unique, otherwise ProseMirror misplaces the widget DOM. Use a stable, unique key (e.g. \`comment-\${id}\`).`);
		}
		this.warnedWidgetKeys = n;
	}
	buildMergedSet(e, t) {
		let n = Object.keys(t);
		return n.length === 1 ? t[n[0]] : sx(e, t);
	}
	mergeAfterApply({ entries: e, previous: t, tr: n, decorationSetsByExtension: r, recomputedNames: i }) {
		return e.length === 1 ? r[e[0].name] : i.size === 0 ? t.mergedDecorationSet.map(n.mapping, n.doc) : sx(n.doc, r);
	}
};
function px(e, t) {
	let { selection: n } = e, { $from: r } = n;
	if (n instanceof V) {
		let e = r.index();
		return r.parent.canReplaceWith(e, e + 1, t);
	}
	let i = r.depth;
	for (; i >= 0;) {
		let e = r.index(i);
		if (r.node(i).contentMatchAt(e).matchType(t)) return !0;
		--i;
	}
	return !1;
}
function mx(e, t, n) {
	let r = document.querySelector(`style[data-tiptap-style${n ? `-${n}` : ""}]`);
	if (r !== null) return r;
	let i = document.createElement("style");
	return t && i.setAttribute("nonce", t), i.setAttribute(`data-tiptap-style${n ? `-${n}` : ""}`, ""), i.innerHTML = e, document.getElementsByTagName("head")[0].appendChild(i), i;
}
function hx(e, t) {
	let n = e.getAttribute("style");
	if (!n) return null;
	let r = n.split(";").map((e) => e.trim()).filter(Boolean), i = t.toLowerCase();
	for (let e = r.length - 1; e >= 0; --e) {
		let t = r[e], n = t.indexOf(":");
		if (n !== -1 && t.slice(0, n).trim().toLowerCase() === i) return t.slice(n + 1).trim();
	}
	return null;
}
function gx(e) {
	return typeof e == "number";
}
function _x(e) {
	return Object.prototype.toString.call(e).slice(8, -1);
}
function vx(e) {
	return _x(e) === "Object" && e.constructor === Object && Object.getPrototypeOf(e) === Object.prototype;
}
function yx(e) {
	return typeof e == "string" && e.trim().length > 0 && !/[;{}]/.test(e);
}
function bx(e, t) {
	return e.replace(/^[ \t]*/, (e) => {
		let n = 0;
		for (let t of e) n += t === "	" ? 4 - n % 4 : 1;
		return " ".repeat(Math.max(0, n - t));
	});
}
function xx(e, t) {
	let n = `text\n${e}\n`, r = t(n)[0];
	return (r?.type === "paragraph" || r?.type === "text") && r.raw === n;
}
function Sx(e, t, n) {
	let r = t.split("\n"), i = n.isParagraphContinuation ?? ((e) => xx(e, n.blockTokens)), a = 0;
	for (let e of r) {
		if (!e.trim() || !i(e)) break;
		a += 1;
	}
	return {
		mainContent: [e, ...r.slice(0, a).map((e) => e.trimStart())].join("\n"),
		nestedContent: r.slice(a).join("\n")
	};
}
function Cx(e, t, n) {
	let r = e.split("\n"), i = [], a = "", o = 0, s = t.baseIndentSize || 2;
	for (; o < r.length;) {
		let e = r[o], u = e.match(t.itemPattern);
		if (!u) {
			if (i.length > 0) break;
			if (e.trim() === "") {
				o += 1, a = `${a}${e}\n`;
				continue;
			}
			return;
		}
		let d = t.extractItemData(u), { indentLevel: f, mainContent: p } = d;
		a = `${a}${e}\n`;
		let m = [p];
		for (o += 1; o < r.length;) {
			var c;
			let e = r[o];
			if (e.trim() === "") {
				var l;
				let t = r.slice(o + 1).findIndex((e) => e.trim() !== "");
				if (t === -1) break;
				if ((((l = r[o + 1 + t].match(/^(\s*)/)) == null || (l = l[1]) == null ? void 0 : l.length) || 0) > f) {
					m.push(e), a = `${a}${e}\n`, o += 1;
					continue;
				}
				break;
			}
			if ((((c = e.match(/^(\s*)/)) == null || (c = c[1]) == null ? void 0 : c.length) || 0) > f) m.push(e), a = `${a}${e}\n`, o += 1;
			else break;
		}
		let h, g = m.slice(1);
		if (g.length > 0) {
			let e = Sx(p, g.map((e) => bx(e, f + s)).join("\n"), n);
			d.mainContent = e.mainContent;
			let r = e.nestedContent;
			r.trim() && (h = t.customNestedParser ? t.customNestedParser(r) : n.blockTokens(r));
		}
		let _ = t.createToken(d, h);
		i.push(_);
	}
	if (i.length !== 0) return {
		items: i,
		raw: a.slice(0, e.length)
	};
}
var wx = 4;
function Tx(e) {
	let t = 0;
	for (let n of e) t = n === "	" ? t + wx - t % wx : t + 1;
	return t;
}
function Ex(e, t, n, r, i) {
	if (!e || !Array.isArray(e.content)) return "";
	let a = typeof n == "function" ? n(r) : n, [o, ...s] = e.content, c = t.renderChildren([o]), l = `${a}${i?.indentMainContent ? c.split("\n").map((e, n) => n === 0 ? e : t.indent(e)).join("\n") : c}`;
	return s && s.length > 0 && s.forEach((e, n) => {
		let r = t.renderChild?.call(t, e, n + 1) ?? t.renderChildren([e]);
		if (r != null) {
			let n = (e) => {
				if (!i?.alignNestedToPrefix) return t.indent(e);
				let n = t.indent(""), r = Tx(a);
				return (Tx(n) >= r ? n : " ".repeat(r)) + e;
			}, o = r.split("\n").map((e) => n(e || "")).join("\n");
			l += e.type === "paragraph" ? `\n\n${o}` : `\n${o}`;
		}
	}), l;
}
function Dx(e, t) {
	let n = { ...e };
	return vx(e) && vx(t) && Object.keys(t).forEach((r) => {
		vx(t[r]) && vx(e[r]) ? n[r] = Dx(e[r], t[r]) : n[r] = t[r];
	}), n;
}
function Ox(e, t, n = {}) {
	let { state: r } = t, { doc: i, tr: a } = r, o = e;
	i.descendants((t, r) => {
		let i = a.mapping.map(r), s = a.mapping.map(r) + t.nodeSize, c = null;
		if (t.marks.forEach((e) => {
			if (e !== o) return !1;
			c = e;
		}), !c) return;
		let l = !1;
		if (Object.keys(n).forEach((e) => {
			n[e] !== c.attrs[e] && (l = !0);
		}), l) {
			let t = e.type.create({
				...e.attrs,
				...n
			});
			a.removeMark(i, s, e.type), a.addMark(i, s, t);
		}
	}), a.docChanged && t.view.dispatch(a);
}
var kx = class {
	constructor(e) {
		this.find = e.find, this.handler = e.handler, this.undoable = e.undoable ?? !0;
	}
}, Ax = (e, t) => {
	if (nv(t)) return t.exec(e);
	let n = t(e);
	if (!n) return null;
	let r = [n.text];
	return r.index = n.index, r.input = e, r.data = n.data, n.replaceWith && (n.text.includes(n.replaceWith) || console.warn("[tiptap warn]: \"inputRuleMatch.replaceWith\" must be part of \"inputRuleMatch.text\"."), r.push(n.replaceWith)), r;
};
function jx(e) {
	let { editor: t, from: n, to: r, text: i, insertText: a } = e;
	if (!a) return {
		inputTransaction: null,
		tr: t.view.state.tr
	};
	let o = t.view.state.tr.insertText(i, n, r);
	return {
		inputTransaction: o,
		tr: Ad.create({
			doc: o.doc,
			selection: o.selection,
			storedMarks: o.storedMarks
		}).tr
	};
}
function Mx(e) {
	let { editor: t, from: n, to: r, text: i, rule: a, match: o, plugin: s, insertText: c } = e, { view: l } = t, { inputTransaction: u, tr: d } = jx({
		editor: t,
		from: n,
		to: r,
		text: i,
		insertText: c
	}), f = u ? n + i.length : r, p = R_({
		state: l.state,
		transaction: d
	}), m = {
		from: n - (o[0].length - i.length),
		to: f
	}, { commands: h, chain: g, can: _ } = new z_({
		editor: t,
		state: p
	});
	return a.handler({
		state: p,
		range: m,
		match: o,
		commands: h,
		chain: g,
		can: _
	}) === null || !d.steps.length ? !1 : (u && (l.dispatch(u), !l.state.doc.eq(u.doc)) || (A_(d), d.setMeta("inputRule", !0), a.undoable && d.setMeta(s, {
		transform: d,
		from: n,
		to: f,
		text: i
	}), l.dispatch(d)), !0);
}
function Nx(e, t, n) {
	let r = t[0].length - n.length;
	if (r <= 0) return !0;
	let i = e.parentOffset - r;
	return i >= 0 && e.parent.textBetween(i, e.parentOffset) === t[0].slice(0, r);
}
function Px(e) {
	let { editor: t, from: n, to: r, text: i, rules: a, plugin: o, insertText: s } = e, { view: c } = t;
	if (c.composing) return !1;
	let l = c.state.doc.resolve(n);
	if (l.parent.type.spec.code || (l.nodeBefore || l.nodeAfter)?.marks.find((e) => e.type.spec.code)) return !1;
	let u = Ky(l) + i;
	for (let e of a) {
		let a = Ax(u, e.find);
		if (a && Nx(l, a, i) && Mx({
			editor: t,
			from: n,
			to: r,
			text: i,
			rule: e,
			match: a,
			plugin: o,
			insertText: s
		})) return !0;
	}
	return !1;
}
function Fx(e) {
	let { editor: t, rules: n } = e, r = new H({
		state: {
			init() {
				return null;
			},
			apply(e, i, a) {
				let o = e.getMeta(r);
				if (o) return o;
				let s = e.getMeta("applyInputRules");
				return s && setTimeout(() => {
					let { text: e } = s;
					e = typeof e == "string" ? e : ly(I.from(e), a.schema);
					let { from: i } = s, o = i + e.length;
					Px({
						editor: t,
						from: i,
						to: o,
						text: e,
						rules: n,
						plugin: r
					});
				}), e.selectionSet || e.docChanged ? null : i;
			}
		},
		props: {
			handleTextInput(e, i, a, o) {
				return Px({
					editor: t,
					from: i,
					to: a,
					text: o,
					rules: n,
					plugin: r,
					insertText: !0
				});
			},
			handleDOMEvents: { compositionend: (e) => (setTimeout(() => {
				let { $cursor: i } = e.state.selection;
				i && Px({
					editor: t,
					from: i.pos,
					to: i.pos,
					text: "",
					rules: n,
					plugin: r
				});
			}), !1) },
			handleKeyDown(e, i) {
				if (i.key !== "Enter") return !1;
				let { $cursor: a } = e.state.selection;
				return a ? Px({
					editor: t,
					from: a.pos,
					to: a.pos,
					text: "\n",
					rules: n,
					plugin: r
				}) : !1;
			}
		},
		isInputRules: !0
	});
	return r;
}
var Ix = class {
	constructor(e = {}) {
		this.type = "extendable", this.parent = null, this.child = null, this.name = "", this.config = { name: this.name }, this.config = {
			...this.config,
			...e
		}, this.name = this.config.name;
	}
	get options() {
		return { ...q(K(this, "addOptions", { name: this.name })) };
	}
	get storage() {
		return { ...q(K(this, "addStorage", {
			name: this.name,
			options: this.options
		})) };
	}
	configure(e = {}) {
		let t = this.extend({
			...this.config,
			addOptions: () => Dx(this.options, e)
		});
		return t.name = this.name, t.parent = this.parent, this.child = null, t;
	}
	extend(e = {}) {
		let t = new this.constructor({
			...this.config,
			...e
		});
		return t.parent = this, this.child = t, t.name = "name" in e ? e.name : t.parent.name, t;
	}
}, Lx = class e extends Ix {
	constructor(...e) {
		super(...e), this.type = "mark";
	}
	static create(t = {}) {
		let n = typeof t == "function" ? t() : t;
		return new e(n);
	}
	static handleExit({ editor: e, mark: t }) {
		let { tr: n } = e.state, r = e.state.selection.$from;
		if (r.pos === r.end()) {
			let i = r.marks();
			if (!i.find((e) => e?.type.name === t.name)) return !1;
			let a = i.find((e) => e?.type.name === t.name);
			return a && n.removeStoredMark(a), n.insertText(" ", r.pos), e.view.dispatch(n), !0;
		}
		return !1;
	}
	configure(e) {
		return super.configure(e);
	}
	extend(e) {
		let t = typeof e == "function" ? e() : e;
		return super.extend(t);
	}
}, Rx = class {
	constructor(e) {
		this.find = e.find, this.handler = e.handler;
	}
}, zx = (e, t, n) => {
	if (nv(t)) return [...e.matchAll(t)];
	let r = t(e, n);
	return r ? r.map((t) => {
		let n = [t.text];
		return n.index = t.index, n.input = e, n.data = t.data, t.replaceWith && (t.text.includes(t.replaceWith) || console.warn("[tiptap warn]: \"pasteRuleMatch.replaceWith\" must be part of \"pasteRuleMatch.text\"."), n.push(t.replaceWith)), n;
	}) : [];
};
function Bx(e) {
	let { editor: t, state: n, from: r, to: i, rule: a, pasteEvent: o, dropEvent: s } = e, { commands: c, chain: l, can: u } = new z_({
		editor: t,
		state: n
	}), d = [];
	return n.doc.nodesBetween(r, i, (e, t) => {
		var f;
		if ((f = e.type) != null && (f = f.spec) != null && f.code || !(e.isText || e.isTextblock || e.isInline)) return;
		let p = e.content?.size ?? e.nodeSize ?? 0, m = Math.max(r, t), h = Math.min(i, t + p);
		m >= h || zx(e.isText ? e.text || "" : e.textBetween(m - t, h - t, void 0, "￼"), a.find, o).forEach((e) => {
			if (e.index === void 0) return;
			let t = m + e.index + 1, r = t + e[0].length, i = {
				from: n.tr.mapping.map(t),
				to: n.tr.mapping.map(r)
			}, f = a.handler({
				state: n,
				range: i,
				match: e,
				commands: c,
				chain: l,
				can: u,
				pasteEvent: o,
				dropEvent: s
			});
			d.push(f);
		});
	}), d.every((e) => e !== null);
}
var Vx = null, Hx = (e) => {
	var t;
	let n = new ClipboardEvent("paste", { clipboardData: new DataTransfer() });
	return (t = n.clipboardData) == null || t.setData("text/html", e), n;
};
function Ux(e) {
	let { editor: t, rules: n } = e, r = null, i = !1, a = !1, o = typeof ClipboardEvent < "u" ? new ClipboardEvent("paste") : null, s;
	try {
		s = typeof DragEvent < "u" ? new DragEvent("drop") : null;
	} catch {
		s = null;
	}
	let c = ({ state: e, from: n, to: r, rule: i, pasteEvt: a }) => {
		let c = e.tr, l = R_({
			state: e,
			transaction: c
		});
		if (Bx({
			editor: t,
			state: l,
			from: Math.max(n - 1, 0),
			to: r.b - 1,
			rule: i,
			pasteEvent: a,
			dropEvent: s
		}) && c.steps.length) {
			try {
				s = typeof DragEvent < "u" ? new DragEvent("drop") : null;
			} catch {
				s = null;
			}
			return o = typeof ClipboardEvent < "u" ? new ClipboardEvent("paste") : null, c;
		}
	};
	return t.on("destroy", () => {
		Vx === t && (Vx = null);
	}), n.map((e) => new H({
		view(e) {
			let n = (n) => {
				r = e.dom.parentElement?.contains(n.target) ? e.dom.parentElement : null, r && (Vx = t);
			}, i = () => {
				Vx &&= null;
			};
			return window.addEventListener("dragstart", n), window.addEventListener("dragend", i), { destroy() {
				window.removeEventListener("dragstart", n), window.removeEventListener("dragend", i);
			} };
		},
		props: { handleDOMEvents: {
			drop: (e, t) => {
				if (a = r === e.dom.parentElement, s = t, !a) {
					let e = Vx;
					e?.isEditable && setTimeout(() => {
						if (e.isDestroyed) return;
						let t = e.state.selection;
						t && e.commands.deleteRange({
							from: t.from,
							to: t.to
						});
					}, 10);
				}
				return !1;
			},
			paste: (e, t) => {
				let n = t.clipboardData?.getData("text/html");
				return o = t, i = !!n?.includes("data-pm-slice"), !1;
			}
		} },
		appendTransaction: (t, n, r) => {
			let s = t[0], l = s.getMeta("uiEvent") === "paste" && !i, u = s.getMeta("uiEvent") === "drop" && !a, d = s.getMeta("applyPasteRules"), f = !!d;
			if (!l && !u && !f) return;
			if (f) {
				let { text: t } = d;
				t = typeof t == "string" ? t : ly(I.from(t), r.schema);
				let { from: n } = d, i = n + t.length, a = Hx(t);
				return c({
					rule: e,
					state: r,
					from: n,
					to: { b: i },
					pasteEvt: a
				});
			}
			let p = n.doc.content.findDiffStart(r.doc.content), m = n.doc.content.findDiffEnd(r.doc.content);
			if (gx(p) && m && p !== m.b) return c({
				rule: e,
				state: r,
				from: p,
				to: m,
				pasteEvt: o
			});
		}
	}));
}
var Wx = class {
	constructor(e, t) {
		this.splittableMarks = [], this.nonClearableMarks = [], this.decorationManager = null, this.editor = t, this.baseExtensions = e, this.extensions = My(e), this.hasSchemaSpec = t.options.schemaSpec !== void 0, this.schema = Ay(this.extensions, t, t.options.schemaSpec), this.setupExtensions();
	}
	get commands() {
		return this.extensions.reduce((e, t) => {
			let n = K(t, "addCommands", {
				name: t.name,
				options: t.options,
				storage: this.editor.extensionStorage[t.name],
				editor: this.editor,
				type: Wy(t.name, this.schema)
			});
			return n ? {
				...e,
				...n()
			} : e;
		}, {});
	}
	get plugins() {
		let { editor: e } = this, t = jy([...this.extensions].reverse()).flatMap((t) => {
			let n = {
				name: t.name,
				options: t.options,
				storage: this.editor.extensionStorage[t.name],
				editor: e,
				type: Wy(t.name, this.schema)
			}, r = [], i = K(t, "addKeyboardShortcuts", n), a = {};
			if (t.type === "mark" && K(t, "exitable", n) && (a.ArrowRight = () => Lx.handleExit({
				editor: e,
				mark: t
			})), i) {
				let t = Object.fromEntries(Object.entries(i()).map(([t, n]) => [t, () => n({ editor: e })]));
				a = {
					...a,
					...t
				};
			}
			let o = u_(a);
			r.push(o);
			let s = K(t, "addInputRules", n);
			if (Zy(t, e.options.enableInputRules) && s) {
				let t = s();
				if (t && t.length) {
					let n = Fx({
						editor: e,
						rules: t
					}), i = Array.isArray(n) ? n : [n];
					r.push(...i);
				}
			}
			let c = K(t, "addPasteRules", n);
			if (Zy(t, e.options.enablePasteRules) && c) {
				let t = c();
				if (t && t.length) {
					let n = Ux({
						editor: e,
						rules: t
					});
					r.push(...n);
				}
			}
			let l = K(t, "addProseMirrorPlugins", n);
			if (l) {
				let e = l();
				r.push(...e);
			}
			return r;
		}), n = this.createDecorationPlugin();
		return n && t.push(n), t;
	}
	createDecorationPlugin() {
		var e;
		let { editor: t } = this;
		(e = this.decorationManager) == null || e.destroy();
		let n = [];
		return this.extensions.forEach((e) => {
			let r = K(e, "addDecorations", {
				name: e.name,
				options: e.options,
				storage: this.editor.extensionStorage[e.name],
				editor: t,
				type: Wy(e.name, this.schema)
			});
			r && n.push({
				name: e.name,
				addDecorations: r
			});
		}), this.decorationManager = new fx({
			editor: t,
			entries: n
		}), this.decorationManager.plugin;
	}
	get attributes() {
		let e = yy(this.extensions);
		return this.hasSchemaSpec ? uy(e, this.schema) : e;
	}
	get nodeViews() {
		let { editor: e } = this, { nodeExtensions: t } = vy(this.extensions);
		return Object.fromEntries(t.filter((e) => !!K(e, "addNodeView")).map((t) => {
			let n = this.attributes.filter((e) => e.type === t.name), r = K(t, "addNodeView", {
				name: t.name,
				options: t.options,
				storage: this.editor.extensionStorage[t.name],
				editor: e,
				type: q_(t.name, this.schema)
			});
			if (!r) return [];
			let i = r();
			return i ? [t.name, (r, a, o, s, c) => {
				let l = wy(r, n);
				return i({
					node: r,
					view: a,
					getPos: o,
					decorations: s,
					innerDecorations: c,
					editor: e,
					extension: t,
					HTMLAttributes: l
				});
			}] : [];
		}));
	}
	dispatchTransaction(e) {
		let { editor: t } = this;
		return jy([...this.extensions].reverse()).reduceRight((e, n) => {
			let r = {
				name: n.name,
				options: n.options,
				storage: this.editor.extensionStorage[n.name],
				editor: t,
				type: Wy(n.name, this.schema)
			}, i = K(n, "dispatchTransaction", r);
			return i ? (t) => {
				i.call(r, {
					transaction: t,
					next: e
				});
			} : e;
		}, e);
	}
	transformPastedHTML(e) {
		let { editor: t } = this;
		return jy([...this.extensions]).reduce((e, n) => {
			let r = {
				name: n.name,
				options: n.options,
				storage: this.editor.extensionStorage[n.name],
				editor: t,
				type: Wy(n.name, this.schema)
			}, i = K(n, "transformPastedHTML", r);
			return i ? (t, n) => {
				let a = e(t, n);
				return i.call(r, a);
			} : e;
		}, e || ((e) => e));
	}
	get markViews() {
		let { editor: e } = this, { markExtensions: t } = vy(this.extensions);
		return Object.fromEntries(t.filter((e) => !!K(e, "addMarkView")).map((t) => {
			let n = this.attributes.filter((e) => e.type === t.name), r = K(t, "addMarkView", {
				name: t.name,
				options: t.options,
				storage: this.editor.extensionStorage[t.name],
				editor: e,
				type: sv(t.name, this.schema)
			});
			return r ? [t.name, (i, a, o) => {
				let s = wy(i, n);
				return r()({
					mark: i,
					view: a,
					inline: o,
					editor: e,
					extension: t,
					HTMLAttributes: s,
					updateAttributes: (t) => {
						Ox(i, e, t);
					}
				});
			}] : [];
		}));
	}
	destroy() {
		var e;
		(e = this.decorationManager) == null || e.destroy(), this.extensions.forEach((e) => {
			let t = e;
			for (; t.parent;) {
				let e = t.parent;
				e.child === t && (e.child = null), t = e;
			}
		}), this.extensions = [], this.baseExtensions = [], this.decorationManager = null, this.schema = null, this.editor = null;
	}
	setupExtensions() {
		let e = this.extensions;
		this.editor.extensionStorage = Object.fromEntries(e.map((e) => [e.name, e.storage])), e.forEach((e) => {
			let t = {
				name: e.name,
				options: e.options,
				storage: this.editor.extensionStorage[e.name],
				editor: this.editor,
				type: Wy(e.name, this.schema)
			};
			e.type === "mark" && ((q(K(e, "keepOnSplit", t)) ?? !0) && this.splittableMarks.push(e.name), (q(K(e, "clearable", t)) ?? !0) || this.nonClearableMarks.push(e.name));
			let n = K(e, "onBeforeCreate", t), r = K(e, "onCreate", t), i = K(e, "onUpdate", t), a = K(e, "onSelectionUpdate", t), o = K(e, "onTransaction", t), s = K(e, "onFocus", t), c = K(e, "onBlur", t), l = K(e, "onDestroy", t);
			n && this.editor.on("beforeCreate", n), r && this.editor.on("create", r), i && this.editor.on("update", i), a && this.editor.on("selectionUpdate", a), o && this.editor.on("transaction", o), s && this.editor.on("focus", s), c && this.editor.on("blur", c), l && this.editor.on("destroy", l);
		});
	}
};
Wx.resolve = My, Wx.sort = jy, Wx.flatten = cy;
var Y = class e extends Ix {
	constructor(...e) {
		super(...e), this.type = "extension";
	}
	static create(t = {}) {
		let n = typeof t == "function" ? t() : t;
		return new e(n);
	}
	configure(e) {
		return super.configure(e);
	}
	extend(e) {
		let t = typeof e == "function" ? e() : e;
		return super.extend(t);
	}
}, Gx = Y.create({
	name: "clipboardTextSerializer",
	addOptions() {
		return { blockSeparator: void 0 };
	},
	addProseMirrorPlugins() {
		return [new H({
			key: new U("clipboardTextSerializer"),
			props: { clipboardTextSerializer: () => {
				let { editor: e } = this, { state: t, schema: n } = e, { doc: r, selection: i } = t, a = Fy(n), { blockSeparator: o } = this.options, s = {
					...o === void 0 ? {} : { blockSeparator: o },
					textSerializers: a
				};
				return [...i.ranges].sort((e, t) => e.$from.pos - t.$from.pos).map(({ $from: e, $to: t }) => Ny(r, {
					from: e.pos,
					to: t.pos
				}, s)).join(o ?? "\n\n");
			} }
		})];
	}
}), Kx = Y.create({
	name: "commands",
	addCommands() {
		return { ...Hb };
	}
}), qx = Y.create({
	name: "delete",
	onUpdate({ transaction: e, appendedTransactions: t }) {
		var n;
		let r = () => {
			var n, r;
			if (((n = this.editor.options.coreExtensionOptions) == null || (n = n.delete) == null || (r = n.filterTransaction) == null ? void 0 : r.call(n, e)) ?? e.getMeta("y-sync$")) return;
			let i = iy(e.before, [e, ...t]);
			By(i).forEach((t) => {
				i.mapping.mapResult(t.oldRange.from).deletedAfter && i.mapping.mapResult(t.oldRange.to).deletedBefore && i.before.nodesBetween(t.oldRange.from, t.oldRange.to, (n, r) => {
					let a = r + n.nodeSize - 2, o = t.oldRange.from <= r && a <= t.oldRange.to;
					this.editor.emit("delete", {
						type: "node",
						node: n,
						from: r,
						to: a,
						newFrom: i.mapping.map(r),
						newTo: i.mapping.map(a),
						deletedRange: t.oldRange,
						newRange: t.newRange,
						partial: !o,
						editor: this.editor,
						transaction: e,
						combinedTransform: i
					});
				});
			});
			let a = i.mapping;
			i.steps.forEach((t, n) => {
				if (t instanceof pu) {
					let r = a.slice(n).map(t.from, -1), o = a.slice(n).map(t.to), s = a.invert().map(r, -1), c = a.invert().map(o), l = r > 0 && i.doc.nodeAt(r - 1)?.marks.some((e) => e.eq(t.mark)), u = i.doc.nodeAt(o)?.marks.some((e) => e.eq(t.mark));
					this.editor.emit("delete", {
						type: "mark",
						mark: t.mark,
						from: t.from,
						to: t.to,
						deletedRange: {
							from: s,
							to: c
						},
						newRange: {
							from: r,
							to: o
						},
						partial: !!(u || l),
						editor: this.editor,
						transaction: e,
						combinedTransform: i
					});
				}
			});
		};
		((n = this.editor.options.coreExtensionOptions) == null || (n = n.delete) == null ? void 0 : n.async) ?? !0 ? setTimeout(r, 0) : r();
	}
}), Jx = Y.create({
	name: "drop",
	addProseMirrorPlugins() {
		return [new H({
			key: new U("tiptapDrop"),
			props: { handleDrop: (e, t, n, r) => {
				this.editor.emit("drop", {
					editor: this.editor,
					event: t,
					slice: n,
					moved: r
				});
			} }
		})];
	}
}), Yx = Y.create({
	name: "editable",
	addProseMirrorPlugins() {
		return [new H({
			key: new U("editable"),
			props: { editable: () => this.editor.options.editable }
		})];
	}
}), Xx = new U("focusEvents"), Zx = Y.create({
	name: "focusEvents",
	addProseMirrorPlugins() {
		let { editor: e } = this;
		return [new H({
			key: Xx,
			props: { handleDOMEvents: {
				focus: (t, n) => {
					e.isFocused = !0;
					let r = e.state.tr.setMeta("focus", { event: n }).setMeta("addToHistory", !1);
					return t.dispatch(r), !1;
				},
				blur: (t, n) => {
					e.isFocused = !1;
					let r = e.state.tr.setMeta("blur", { event: n }).setMeta("addToHistory", !1);
					return t.dispatch(r), !1;
				}
			} }
		})];
	}
});
function Qx(e) {
	let { empty: t, from: n, to: r } = e.selection;
	return !t && n === z.atStart(e.doc).from && r === z.atEnd(e.doc).to;
}
var $x = Y.create({
	name: "keymap",
	addKeyboardShortcuts() {
		let e = () => this.editor.commands.first(({ commands: e }) => [
			() => e.undoInputRule(),
			() => e.command(({ tr: t }) => {
				let { selection: n, doc: r } = t, { empty: i, $anchor: a } = n, { pos: o, parent: s } = a, c = a.parent.isTextblock && o > 0 ? t.doc.resolve(o - 1) : a, l = c.parent.type.spec.isolating, u = a.pos - a.parentOffset, d = l && c.parent.childCount === 1 ? u === a.pos : z.atStart(r).from === o;
				return !i || !s.type.isTextblock || s.textContent.length || !d || d && a.parent.type.name === "paragraph" ? !1 : e.clearNodes();
			}),
			() => e.deleteSelection(),
			() => e.joinBackward(),
			() => e.selectNodeBackward()
		]), t = () => this.editor.commands.first(({ commands: e }) => [
			() => e.deleteSelection(),
			() => e.deleteCurrentNode(),
			() => e.joinForward(),
			() => e.selectNodeForward()
		]), n = {
			Enter: () => this.editor.commands.first(({ commands: e }) => [
				() => e.newlineInCode(),
				() => e.createParagraphNear(),
				() => e.liftEmptyBlock(),
				() => e.splitBlock()
			]),
			"Mod-Enter": () => this.editor.commands.exitCode(),
			Backspace: e,
			"Mod-Backspace": e,
			"Shift-Backspace": e,
			Delete: t,
			"Mod-Delete": t,
			"Mod-a": () => this.editor.commands.selectAll()
		}, r = { ...n }, i = {
			...n,
			"Ctrl-h": e,
			"Alt-Backspace": e,
			"Ctrl-d": t,
			"Ctrl-Alt-Backspace": t,
			"Alt-Delete": t,
			"Alt-d": t,
			"Ctrl-a": () => this.editor.commands.selectTextblockStart(),
			"Ctrl-e": () => this.editor.commands.selectTextblockEnd()
		};
		return mv() || Lv() ? i : r;
	},
	addProseMirrorPlugins() {
		return [new H({
			key: new U("clearDocument"),
			appendTransaction: (e, t, n) => {
				if (e.some((e) => e.getMeta("composition"))) return;
				let r = e.some((e) => e.docChanged) && !t.doc.eq(n.doc), i = e.some((e) => e.getMeta("preventClearDocument"));
				if (!r || i || !Qx(t) || !$y(n.doc)) return;
				let a = n.tr, o = R_({
					state: n,
					transaction: a
				}), { commands: s } = new z_({
					editor: this.editor,
					state: o
				});
				if (s.clearNodes(), a.steps.length || n.storedMarks) return a.setStoredMarks(null);
			}
		})];
	}
}), eS = Y.create({
	name: "paste",
	addProseMirrorPlugins() {
		return [new H({
			key: new U("tiptapPaste"),
			props: { handlePaste: (e, t, n) => {
				this.editor.emit("paste", {
					editor: this.editor,
					event: t,
					slice: n
				});
			} }
		})];
	}
}), tS = Y.create({
	name: "tabindex",
	addOptions() {
		return { value: void 0 };
	},
	addProseMirrorPlugins() {
		return [new H({
			key: new U("tabindex"),
			props: { attributes: () => !this.editor.isEditable && this.options.value === void 0 ? {} : { tabindex: this.options.value ?? "0" } }
		})];
	}
}), nS = Y.create({
	name: "textDirection",
	addOptions() {
		return { direction: void 0 };
	},
	addGlobalAttributes() {
		if (!this.options.direction) return [];
		let { nodeExtensions: e } = vy(this.extensions);
		return [{
			types: e.filter((e) => e.name !== "text").map((e) => e.name),
			attributes: { dir: {
				default: this.options.direction,
				parseHTML: (e) => {
					let t = e.getAttribute("dir");
					return t && (t === "ltr" || t === "rtl" || t === "auto") ? t : this.options.direction;
				},
				renderHTML: (e) => e.dir ? { dir: e.dir } : {}
			} }
		}];
	},
	addProseMirrorPlugins() {
		return [new H({
			key: new U("textDirection"),
			props: { attributes: () => {
				let e = this.options.direction;
				return e ? { dir: e } : {};
			} }
		})];
	}
}), rS = !1;
function iS(e) {
	if (rS) return;
	rS = !0;
	let t;
	try {
		let n = vu.fromJSON(e, {
			from: 0,
			to: 0
		});
		if (!nb(n)) return;
		t = n.slice.content;
	} catch {
		return;
	}
	t instanceof I || console.warn("[tiptap warn]: prosemirror-model is loaded more than once. Wrapping and splitting nodes will fail. Deduplicate it in your lock file, or alias it to a single copy in your bundler.");
}
var aS = class e {
	get name() {
		return this.node.type.name;
	}
	constructor(e, t, n = !1, r = null) {
		this.currentNode = null, this.actualDepth = null, this.isBlock = n, this.resolvedPos = e, this.editor = t, this.currentNode = r;
	}
	get node() {
		return this.currentNode || this.resolvedPos.node();
	}
	get element() {
		return this.editor.view.domAtPos(this.pos).node;
	}
	get depth() {
		return this.actualDepth ?? this.resolvedPos.depth;
	}
	get pos() {
		return this.resolvedPos.pos;
	}
	get content() {
		return this.node.content;
	}
	set content(e) {
		let t = this.from, n = this.to;
		if (this.isBlock) {
			if (this.content.size === 0) {
				console.error(`You can’t set content on a block node. Tried to set content on ${this.name} at ${this.pos}`);
				return;
			}
			t = this.from + 1, n = this.to - 1;
		}
		this.editor.commands.insertContentAt({
			from: t,
			to: n
		}, e);
	}
	get attributes() {
		return this.node.attrs;
	}
	get textContent() {
		return this.node.textContent;
	}
	get size() {
		return this.node.nodeSize;
	}
	get from() {
		return this.isBlock ? this.pos : this.resolvedPos.start(this.resolvedPos.depth);
	}
	get range() {
		return {
			from: this.from,
			to: this.to
		};
	}
	get to() {
		return this.isBlock ? this.pos + this.size : this.resolvedPos.end(this.resolvedPos.depth) + +!this.node.isText;
	}
	get parent() {
		if (this.depth === 0) return null;
		let t = this.resolvedPos.start(this.resolvedPos.depth - 1), n = this.resolvedPos.doc.resolve(t);
		return new e(n, this.editor);
	}
	get before() {
		let t = this.resolvedPos.doc.resolve(this.from - (this.isBlock ? 1 : 2));
		return t.depth !== this.depth && (t = this.resolvedPos.doc.resolve(this.from - 3)), new e(t, this.editor);
	}
	get after() {
		let t = this.resolvedPos.doc.resolve(this.to + (this.isBlock ? 2 : 1));
		return t.depth !== this.depth && (t = this.resolvedPos.doc.resolve(this.to + 3)), new e(t, this.editor);
	}
	get children() {
		let t = [];
		return this.node.content.forEach((n, r) => {
			let i = n.isBlock && !n.isTextblock, a = n.isAtom && !n.isText, o = n.isInline, s = this.pos + r + +!a;
			if (s < 0 || s > this.resolvedPos.doc.nodeSize - 2) return;
			let c = this.resolvedPos.doc.resolve(s);
			if (!i && !o && c.depth <= this.depth) return;
			let l = new e(c, this.editor, i, i || o ? n : null);
			i && (l.actualDepth = this.depth + 1), t.push(l);
		}), t;
	}
	get firstChild() {
		return this.children[0] || null;
	}
	get lastChild() {
		let e = this.children;
		return e[e.length - 1] || null;
	}
	closest(e, t = {}) {
		let n = null, r = this.parent;
		for (; r && !n;) {
			if (r.node.type.name === e) {
				if (Object.keys(t).length > 0) {
					let e = r.node.attrs, n = Object.keys(t);
					for (let r = 0; r < n.length; r += 1) {
						let i = n[r];
						if (e[i] !== t[i]) break;
					}
				} else n = r;
			}
			r = r.parent;
		}
		return n;
	}
	querySelector(e, t = {}) {
		return this.querySelectorAll(e, t, !0)[0] || null;
	}
	querySelectorAll(e, t = {}, n = !1) {
		let r = [];
		if (!this.children || this.children.length === 0) return r;
		let i = Object.keys(t);
		return this.children.forEach((a) => {
			n && r.length > 0 || (a.node.type.name === e && i.every((e) => t[e] === a.node.attrs[e]) && r.push(a), n && r.length > 0 || (r = r.concat(a.querySelectorAll(e, t, n))));
		}), r;
	}
	setAttribute(e) {
		let { tr: t } = this.editor.state;
		t.setNodeMarkup(this.from, void 0, {
			...this.node.attrs,
			...e
		}), this.editor.view.dispatch(t);
	}
}, oS = ".ProseMirror {\n  position: relative;\n}\n\n.ProseMirror {\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  white-space: break-spaces;\n  -webkit-font-variant-ligatures: none;\n  font-variant-ligatures: none;\n  font-feature-settings: \"liga\" 0; /* the above doesn't seem to work in Edge */\n}\n\n.ProseMirror [contenteditable=\"false\"] {\n  white-space: normal;\n}\n\n.ProseMirror [contenteditable=\"false\"] [contenteditable=\"true\"] {\n  white-space: pre-wrap;\n}\n\n.ProseMirror pre {\n  white-space: pre-wrap;\n}\n\nimg.ProseMirror-separator {\n  display: inline !important;\n  border: none !important;\n  margin: 0 !important;\n  width: 0 !important;\n  height: 0 !important;\n}\n\n.ProseMirror-gapcursor {\n  display: none;\n  pointer-events: none;\n  position: absolute;\n  margin: 0;\n}\n\n.ProseMirror-gapcursor:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: -2px;\n  width: 20px;\n  border-top: 1px solid black;\n  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;\n}\n\n@keyframes ProseMirror-cursor-blink {\n  to {\n    visibility: hidden;\n  }\n}\n\n.ProseMirror-hideselection *::selection {\n  background: transparent;\n}\n\n.ProseMirror-hideselection *::-moz-selection {\n  background: transparent;\n}\n\n.ProseMirror-hideselection * {\n  caret-color: transparent;\n}\n\n.ProseMirror-focused .ProseMirror-gapcursor {\n  display: block;\n}", sS = class extends Kb {
	constructor(e = {}) {
		super(), this.css = null, this.className = "tiptap", this.editorView = null, this.isFocused = !1, this.destroyed = !1, this.isInitialized = !1, this.extensionStorage = {}, this.instanceId = Math.random().toString(36).slice(2, 9), this.hasWarnedStaleDecorationRead = !1, this.options = {
			element: typeof document < "u" ? document.createElement("div") : null,
			content: "",
			injectCSS: !0,
			injectNonce: void 0,
			extensions: [],
			autofocus: !1,
			editable: !0,
			textDirection: void 0,
			editorProps: {},
			parseOptions: {},
			coreExtensionOptions: {},
			enableInputRules: !0,
			enablePasteRules: !0,
			enableCoreExtensions: !0,
			enableContentCheck: !1,
			emitContentError: !1,
			onBeforeCreate: () => null,
			onCreate: () => null,
			onMount: () => null,
			onUnmount: () => null,
			onUpdate: () => null,
			onSelectionUpdate: () => null,
			onTransaction: () => null,
			onFocus: () => null,
			onBlur: () => null,
			onDestroy: () => null,
			onContentError: ({ error: e }) => {
				throw e;
			},
			onPaste: () => null,
			onDrop: () => null,
			onDelete: () => null,
			enableExtensionDispatchTransaction: !0
		}, this.isCapturingTransaction = !1, this.capturedTransaction = null, this.utils = {
			getUpdatedPosition: ib,
			createMappablePosition: ab
		}, this.setOptions(e), this.createExtensionManager(), this.createCommandManager(), this.createSchema(), this.on("beforeCreate", this.options.onBeforeCreate), this.emit("beforeCreate", { editor: this }), this.on("mount", this.options.onMount), this.on("unmount", this.options.onUnmount), this.on("contentError", this.options.onContentError), this.on("create", this.options.onCreate), this.on("update", this.options.onUpdate), this.on("selectionUpdate", this.options.onSelectionUpdate), this.on("transaction", this.options.onTransaction), this.on("focus", this.options.onFocus), this.on("blur", this.options.onBlur), this.on("destroy", this.options.onDestroy), this.on("drop", ({ event: e, slice: t, moved: n }) => this.options.onDrop(e, t, n)), this.on("paste", ({ event: e, slice: t }) => this.options.onPaste(e, t)), this.on("delete", this.options.onDelete);
		let t = this.createDoc();
		if (!this.editorState) {
			let e = fv(t, this.options.autofocus);
			this.editorState = Ad.create({
				doc: t,
				schema: this.schema,
				selection: e || void 0
			});
		}
		iS(this.schema), this.options.element && this.mount(this.options.element);
	}
	mount(e) {
		if (typeof document > "u") throw Error("[tiptap error]: The editor cannot be mounted because there is no 'document' defined in this environment.");
		this.createView(e), this.emit("mount", { editor: this }), this.css && !document.head.contains(this.css) && document.head.appendChild(this.css), window.setTimeout(() => {
			this.isDestroyed || (this.options.autofocus !== !1 && this.options.autofocus !== null && this.commands.focus(this.options.autofocus), this.emit("create", { editor: this }), this.isInitialized = !0);
		}, 0);
	}
	unmount() {
		if (this.editorView) {
			this.editorState = this.editorView.state;
			let e = this.editorView.dom;
			e?.editor && delete e.editor, this.editorView.destroy();
		}
		if (this.editorView = null, this.isInitialized = !1, this.css && !document.querySelectorAll(`.${this.className}`).length) try {
			typeof this.css.remove == "function" ? this.css.remove() : this.css.parentNode && this.css.parentNode.removeChild(this.css);
		} catch (e) {
			console.warn("Failed to remove CSS element:", e);
		}
		this.css = null, this.emit("unmount", { editor: this });
	}
	get storage() {
		return this.extensionStorage;
	}
	get commands() {
		return this.commandManager.commands;
	}
	chain() {
		return this.commandManager ? this.commandManager.chain() : z_.createFakeChain();
	}
	can() {
		return this.commandManager ? this.commandManager.can() : z_.createFallbackCan();
	}
	injectCSS() {
		this.options.injectCSS && typeof document < "u" && (this.css = mx(oS, this.options.injectNonce));
	}
	setOptions(e = {}) {
		this.options = {
			...this.options,
			...e
		}, this.editorView && this.state && !this.isDestroyed && (this.options.editorProps && this.view.setProps({
			...this.options.editorProps,
			attributes: this.getEditorViewAttributes()
		}), this.view.updateState(this.state));
	}
	setEditable(e, t = !0) {
		this.setOptions({ editable: e }), t && this.emit("update", {
			editor: this,
			transaction: this.state.tr,
			appendedTransactions: []
		});
	}
	get isEditable() {
		return this.options.editable && this.view && this.view.editable;
	}
	get view() {
		return this.editorView ? this.editorView : new Proxy({
			state: this.editorState,
			updateState: (e) => {
				this.editorState = e;
			},
			dispatch: (e) => {
				this.dispatchTransaction(e);
			},
			composing: !1,
			dragging: null,
			editable: !0,
			isDestroyed: !1
		}, { get: (e, t) => {
			if (this.editorView) return this.editorView[t];
			if (t === "state") return this.editorState;
			if (t in e) return Reflect.get(e, t);
			throw Error(`[tiptap error]: The editor view is not available. Cannot access view['${t}']. The editor may not be mounted yet.`);
		} });
	}
	get state() {
		return qb && !this.hasWarnedStaleDecorationRead && Gb(this) && (this.hasWarnedStaleDecorationRead = !0, console.warn("[tiptap warn]: `editor.state` was read while decoration `create()` was running. It returns the pre-transaction document. Use the `state` argument passed to `create()` instead. Helpers like `editor.isActive()` read `editor.state` too, so pass `state` to their standalone versions instead of calling them on the editor.")), this.editorView && (this.editorState = this.view.state), this.editorState;
	}
	registerPlugin(e, t) {
		let n = by(t) ? t(e, [...this.state.plugins]) : [...this.state.plugins, e], r = this.state.reconfigure({ plugins: n });
		return this.view.updateState(r), r;
	}
	unregisterPlugin(e) {
		if (this.isDestroyed) return;
		let t = this.state.plugins, n = t;
		if ([].concat(e).forEach((e) => {
			let t = typeof e == "string" ? `${e}$` : e.key;
			n = n.filter((e) => !e.key.startsWith(t));
		}), t.length === n.length) return;
		let r = this.state.reconfigure({ plugins: n });
		return this.view.updateState(r), r;
	}
	createExtensionManager() {
		var e, t;
		let n = [...this.options.enableCoreExtensions ? [
			Yx,
			Gx.configure({ blockSeparator: (e = this.options.coreExtensionOptions) == null || (e = e.clipboardTextSerializer) == null ? void 0 : e.blockSeparator }),
			Kx,
			Zx,
			$x,
			tS.configure({ value: (t = this.options.coreExtensionOptions) == null || (t = t.tabindex) == null ? void 0 : t.value }),
			Jx,
			eS,
			qx,
			nS.configure({ direction: this.options.textDirection })
		].filter((e) => typeof this.options.enableCoreExtensions != "object" || this.options.enableCoreExtensions[e.name] !== !1) : [], ...this.options.extensions].filter((e) => [
			"extension",
			"node",
			"mark"
		].includes(e?.type));
		this.extensionManager = new Wx(n, this);
	}
	createCommandManager() {
		this.commandManager = new z_({ editor: this });
	}
	createSchema() {
		this.schema = this.extensionManager.schema;
	}
	createDoc() {
		let e;
		try {
			e = ty(this.options.content, this.schema, this.options.parseOptions, { errorOnInvalidContent: this.options.enableContentCheck });
		} catch (e) {
			if (!(e instanceof Error) || !["[tiptap error]: Invalid JSON content", "[tiptap error]: Invalid HTML content"].includes(e.message)) throw e;
			let t = ty(this.options.content, this.schema, this.options.parseOptions, { errorOnInvalidContent: !1 });
			return this.editorState = Ad.create({
				doc: t,
				schema: this.schema,
				selection: fv(t, this.options.autofocus) || void 0
			}), this.emit("contentError", {
				editor: this,
				error: e,
				disableCollaboration: () => {
					"collaboration" in this.storage && typeof this.storage.collaboration == "object" && this.storage.collaboration && (this.storage.collaboration.isDisabled = !0), this.options.extensions = this.options.extensions.filter((e) => e.name !== "collaboration"), this.createExtensionManager();
				}
			}), this.editorState.doc;
		}
		return e;
	}
	getEditorViewAttributes() {
		let e = this.options.editorProps?.attributes;
		return by(e) ? (t) => ({
			role: "textbox",
			...e(t)
		}) : {
			role: "textbox",
			...e
		};
	}
	createView(e) {
		let { editorProps: t, enableExtensionDispatchTransaction: n } = this.options, r = t.dispatchTransaction || this.dispatchTransaction.bind(this), i = n ? this.extensionManager.dispatchTransaction(r) : r, a = t.transformPastedHTML, o = this.extensionManager.transformPastedHTML(a);
		this.editorView = new Wg(e, {
			...t,
			attributes: this.getEditorViewAttributes(),
			dispatchTransaction: i,
			transformPastedHTML: o,
			state: this.editorState,
			markViews: this.extensionManager.markViews,
			nodeViews: this.extensionManager.nodeViews
		});
		let s = this.state.reconfigure({ plugins: this.extensionManager.plugins });
		this.view.updateState(s), this.prependClass(), this.injectCSS();
		let c = this.view.dom;
		c.editor = this;
	}
	createNodeViews() {
		this.view.isDestroyed || this.view.setProps({
			markViews: this.extensionManager.markViews,
			nodeViews: this.extensionManager.nodeViews
		});
	}
	prependClass() {
		this.view.dom.className = `${this.className} ${this.view.dom.className}`;
	}
	captureTransaction(e) {
		this.isCapturingTransaction = !0, e(), this.isCapturingTransaction = !1;
		let t = this.capturedTransaction;
		return this.capturedTransaction = null, t;
	}
	dispatchTransaction(e) {
		if (this.view.isDestroyed) return;
		if (this.isCapturingTransaction) {
			if (!this.capturedTransaction) {
				this.capturedTransaction = e;
				return;
			}
			e.steps.forEach((e) => this.capturedTransaction?.step(e));
			return;
		}
		let { state: t, transactions: n } = this.state.applyTransaction(e), r = !this.state.selection.eq(t.selection), i = n.includes(e), a = this.state;
		if (this.emit("beforeTransaction", {
			editor: this,
			transaction: e,
			nextState: t
		}), !i) return;
		this.view.updateState(t), this.emit("transaction", {
			editor: this,
			transaction: e,
			appendedTransactions: n.slice(1)
		}), r && this.emit("selectionUpdate", {
			editor: this,
			transaction: e
		});
		let o = n.findLast((e) => e.getMeta("focus") || e.getMeta("blur")), s = o?.getMeta("focus"), c = o?.getMeta("blur");
		s && this.emit("focus", {
			editor: this,
			event: s.event,
			transaction: o
		}), c && this.emit("blur", {
			editor: this,
			event: c.event,
			transaction: o
		}), e.getMeta("preventUpdate") || !n.some((e) => e.docChanged) || a.doc.eq(t.doc) || this.emit("update", {
			editor: this,
			transaction: e,
			appendedTransactions: n.slice(1)
		});
	}
	getAttributes(e) {
		return Ly(this.state, e);
	}
	isActive(e, t) {
		let n = typeof e == "string" ? e : null, r = typeof e == "string" ? t : e;
		return Jy(this.state, n, r);
	}
	getJSON() {
		return this.state.doc.toJSON();
	}
	getHTML() {
		return ly(this.state.doc.content, this.schema);
	}
	getText(e) {
		let { blockSeparator: t = "\n\n", textSerializers: n = {} } = e || {};
		return Py(this.state.doc, {
			blockSeparator: t,
			textSerializers: {
				...Fy(this.schema),
				...n
			}
		});
	}
	get isEmpty() {
		return $y(this.state.doc);
	}
	destroy() {
		this.destroyed || (this.destroyed = !0, this.emit("destroy"), this.unmount(), this.removeAllListeners(), this.extensionManager.destroy(), this.extensionManager = null, this.schema = null, this.commandManager = null, this.extensionStorage = {});
	}
	get isDestroyed() {
		return this.editorView?.isDestroyed ?? !0;
	}
	$node(e, t) {
		return this.$doc?.querySelector(e, t) || null;
	}
	$nodes(e, t) {
		return this.$doc?.querySelectorAll(e, t) || null;
	}
	$pos(e) {
		let t = this.state.doc.resolve(e), n = e > 0 && t.nodeAfter && !t.nodeAfter.isText && t.nodeAfter.isAtom ? t.nodeAfter : null;
		return new aS(t, this, !1, n);
	}
	get $doc() {
		return this.$pos(0);
	}
};
function cS(e) {
	return new kx({
		find: e.find,
		handler: ({ state: t, range: n, match: r }) => {
			let i = q(e.getAttributes, void 0, r);
			if (i === !1 || i === null) return null;
			let { tr: a } = t, o = r[r.length - 1], s = r[0];
			if (o) {
				let r = s.search(/\S/), c = n.from + s.indexOf(o), l = c + o.length;
				if (Vy(n.from, n.to, t.doc).filter((t) => t.mark.type.excluded.find((n) => n === e.type && n !== t.mark.type)).filter((e) => e.to > c).length) return null;
				l < n.to && a.delete(l, n.to), c > n.from && a.delete(n.from + r, c);
				let u = n.from + r + o.length;
				a.addMark(n.from + r, u, e.type.create(i || {})), a.removeStoredMark(e.type);
			}
		},
		undoable: e.undoable
	});
}
function lS(e) {
	return new kx({
		find: e.find,
		handler: ({ state: t, range: n, match: r }) => {
			let i = q(e.getAttributes, void 0, r) || {}, { tr: a } = t, o = n.from, s = n.to, c = e.type.create(i);
			if (r[1]) {
				let e = o + r[0].lastIndexOf(r[1]);
				e > s ? e = s : s = e + r[1].length;
				let t = r[0][r[0].length - 1];
				a.insertText(t, o + r[0].length - 1), a.replaceWith(e, s, c);
			} else if (r[0]) {
				let t = e.type.isInline ? o : o - 1;
				a.insert(t, e.type.create(i)).delete(a.mapping.map(o), a.mapping.map(s));
			}
			a.scrollIntoView();
		},
		undoable: e.undoable
	});
}
function uS(e) {
	return new kx({
		find: e.find,
		handler: ({ state: t, range: n, match: r }) => {
			let i = t.doc.resolve(n.from), a = q(e.getAttributes, void 0, r) || {};
			if (!i.node(-1).canReplaceWith(i.index(-1), i.indexAfter(-1), e.type)) return null;
			t.tr.delete(n.from, n.to).setBlockType(n.from, n.from, e.type, a);
		},
		undoable: e.undoable
	});
}
function dS(e) {
	return new kx({
		find: e.find,
		handler: ({ state: t, range: n, match: r, chain: i }) => {
			let a = q(e.getAttributes, void 0, r) || {}, o = t.tr.delete(n.from, n.to), s = o.doc.resolve(n.from).blockRange(), c = s && Du(s, e.type, a);
			if (!c) return null;
			if (o.wrap(s, c), e.keepMarks && e.editor) {
				let { selection: n, storedMarks: r } = t, { splittableMarks: i } = e.editor.extensionManager, a = r || n.$to.parentOffset && n.$from.marks();
				if (a) {
					let e = a.filter((e) => i.includes(e.type.name));
					o.ensureMarks(e);
				}
			}
			if (e.keepAttributes) {
				let t = e.type.name === "bulletList" || e.type.name === "orderedList" ? "listItem" : "taskList";
				i().updateAttributes(t, a).run();
			}
			let l = o.doc.resolve(n.from - 1).nodeBefore;
			l && l.type === e.type && zu(o.doc, n.from - 1) && (!e.joinPredicate || e.joinPredicate(r, l)) && o.join(n.from - 1);
		},
		undoable: e.undoable
	});
}
var fS = class e extends Ix {
	constructor(...e) {
		super(...e), this.type = "node";
	}
	static create(t = {}) {
		let n = typeof t == "function" ? t() : t;
		return new e(n);
	}
	configure(e) {
		return super.configure(e);
	}
	extend(e) {
		let t = typeof e == "function" ? e() : e;
		return super.extend(t);
	}
};
function pS(e) {
	return new Rx({
		find: e.find,
		handler: ({ state: t, range: n, match: r, pasteEvent: i }) => {
			let a = q(e.getAttributes, void 0, r, i);
			if (a === !1 || a === null) return null;
			let { tr: o } = t, s = r[r.length - 1], c = r[0], l = n.to;
			if (s) {
				let i = c.search(/\S/), u = n.from + c.indexOf(s), d = u + s.length;
				if (Vy(n.from, n.to, t.doc).filter((t) => t.mark.type.excluded.find((n) => n === e.type && n !== t.mark.type)).filter((e) => e.to > u).length) return null;
				d < n.to && o.delete(d, n.to), u > n.from && o.delete(n.from + i, u), l = n.from + i + s.length, o.addMark(n.from + i, l, e.type.create(a || {})), r.index !== void 0 && r.input !== void 0 && r.index + r[0].length >= r.input.length || o.removeStoredMark(e.type);
			}
		}
	});
}
// node_modules/@tiptap/extension-highlight/dist/index.js
var mS = /(?:^|\s)(==(?!\s+==)((?:[^=]+))==(?!\s+==))$/, hS = /(?:^|\s)(==(?!\s+==)((?:[^=]+))==(?!\s+==))/g, gS = Lx.create({
	name: "highlight",
	addOptions() {
		return {
			multicolor: !1,
			HTMLAttributes: {}
		};
	},
	addAttributes() {
		return this.options.multicolor ? { color: {
			default: null,
			parseHTML: (e) => e.getAttribute("data-color") || hx(e, "background-color") || e.style.backgroundColor,
			renderHTML: (e) => yx(e.color) ? {
				"data-color": e.color,
				style: `background-color: ${e.color}; color: inherit`
			} : {}
		} } : {};
	},
	parseHTML() {
		return [{ tag: "mark" }];
	},
	renderHTML({ HTMLAttributes: e }) {
		return [
			"mark",
			J(this.options.HTMLAttributes, e),
			0
		];
	},
	renderMarkdown: (e, t) => `==${t.renderChildren(e)}==`,
	parseMarkdown: (e, t) => t.applyMark("highlight", t.parseInline(e.tokens || [])),
	markdownTokenizer: {
		name: "highlight",
		level: "inline",
		start: (e) => e.indexOf("=="),
		tokenize(e, t, n) {
			let r = /^(==)(?!\s)([^=]*[^=\s])(==)/.exec(e);
			if (r) {
				let e = r[2].trim(), t = n.inlineTokens(e);
				return {
					type: "highlight",
					raw: r[0],
					text: e,
					tokens: t
				};
			}
		}
	},
	addCommands() {
		return {
			setHighlight: (e) => ({ commands: t }) => t.setMark(this.name, e),
			toggleHighlight: (e) => ({ commands: t }) => t.toggleMark(this.name, e),
			unsetHighlight: () => ({ commands: e }) => e.unsetMark(this.name)
		};
	},
	addKeyboardShortcuts() {
		return { "Mod-Shift-h": () => this.editor.commands.toggleHighlight() };
	},
	addInputRules() {
		return [cS({
			find: mS,
			type: this.type
		})];
	},
	addPasteRules() {
		return [pS({
			find: hS,
			type: this.type
		})];
	}
}), _S = "listItem", vS = "textStyle", yS = /^\s*([-+*])\s$/, bS = fS.create({
	name: "bulletList",
	addOptions() {
		return {
			itemTypeName: "listItem",
			HTMLAttributes: {},
			keepMarks: !1,
			keepAttributes: !1
		};
	},
	group: "block list",
	content() {
		return `${this.options.itemTypeName}+`;
	},
	parseHTML() {
		return [{ tag: "ul" }];
	},
	renderHTML({ HTMLAttributes: e }) {
		return [
			"ul",
			J(this.options.HTMLAttributes, e),
			0
		];
	},
	markdownTokenName: "list",
	parseMarkdown: (e, t) => e.type !== "list" || e.ordered ? [] : {
		type: "bulletList",
		content: e.items ? t.parseChildren(e.items) : []
	},
	renderMarkdown: (e, t) => e.content ? t.renderChildren(e.content, "\n") : "",
	markdownOptions: { indentsContent: !0 },
	addCommands() {
		return { toggleBulletList: () => ({ commands: e, chain: t }) => this.options.keepAttributes ? t().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(_S, this.editor.getAttributes(vS)).run() : e.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks) };
	},
	addKeyboardShortcuts() {
		return { "Mod-Shift-8": () => this.editor.commands.toggleBulletList() };
	},
	addInputRules() {
		let e = dS({
			find: yS,
			type: this.type
		});
		return (this.options.keepMarks || this.options.keepAttributes) && (e = dS({
			find: yS,
			type: this.type,
			keepMarks: this.options.keepMarks,
			keepAttributes: this.options.keepAttributes,
			getAttributes: () => this.editor.getAttributes(vS),
			editor: this.editor
		})), [e];
	}
}), xS = (e, t, n) => {
	let { selection: r } = e;
	if (!r.empty) return null;
	let { $from: i } = r;
	if (!i.parent.isTextblock || i.parentOffset !== i.parent.content.size) return null;
	let a = -1;
	for (let e = i.depth; e > 0; --e) if (i.node(e).type.name === t) {
		a = e;
		break;
	}
	if (a < 0) return null;
	let o = i.node(a), s = i.index(a);
	if (s + 1 >= o.childCount) return null;
	let c = o.child(s + 1);
	if (!n.includes(c.type.name)) return null;
	let l = e.schema.nodes[t], u = !1;
	if (c.forEach((e) => {
		e.type === l && e.childCount > 1 && (u = !0);
	}), !u) return null;
	let d = e.doc.resolve(i.after()).nodeAfter;
	if (!d || !n.includes(d.type.name)) return null;
	let f = [];
	return d.forEach((e) => {
		f.push(e);
	}), f.length === 0 ? null : {
		listItemDepth: a,
		nestedList: d,
		nestedListPos: i.after(),
		insertPos: i.after(a),
		items: f
	};
}, SS = (e, t, n, r) => {
	let i = xS(e, n, r);
	if (!i) return !1;
	let { selection: a } = e, { nestedList: o, nestedListPos: s, insertPos: c, items: l } = i, u = e.tr;
	u.delete(s, s + o.nodeSize);
	let d = u.mapping.map(c);
	return u.insert(d, I.from(l)), u.setSelection(a.map(u.doc, u.mapping)), t && t(u), !0;
}, CS = (e, t, n) => SS(e.state, e.view.dispatch, t, n), wS = (e, t) => Y.create({
	name: `${e}BranchingDeleteKeymap`,
	priority: 101,
	addKeyboardShortcuts() {
		let n = () => CS(this.editor, e, t);
		return {
			Delete: n,
			"Mod-Delete": n
		};
	}
}), TS = [
	[1e3, "m"],
	[900, "cm"],
	[500, "d"],
	[400, "cd"],
	[100, "c"],
	[90, "xc"],
	[50, "l"],
	[40, "xl"],
	[10, "x"],
	[9, "ix"],
	[5, "v"],
	[4, "iv"],
	[1, "i"]
], ES = "abcdefghijklmnopqrstuvwxyz", DS = String.raw`\d+|[ivxlcdmIVXLCDM]+|${"[a-zA-Z]{1,2}"}`;
function OS(e) {
	let t = e, n = "";
	for (let [e, r] of TS) for (; t >= e;) n += r, t -= e;
	return n;
}
function kS(e) {
	return OS(e).toUpperCase();
}
function AS(e) {
	let t = e.toLowerCase(), n = 0, r = 0;
	for (; n < t.length;) {
		let e = !1;
		for (let [i, a] of TS) if (t.startsWith(a, n)) {
			r += i, n += a.length, e = !0;
			break;
		}
		if (!e) return 0;
	}
	return r;
}
function jS(e) {
	if (!/^[ivxlcdmIVXLCDM]+$/.test(e)) return !1;
	let t = AS(e);
	return t <= 0 ? !1 : (e === e.toLowerCase() ? OS(t) : kS(t)) === e;
}
function MS(e) {
	let t = e.toLowerCase();
	if (t.length === 1) return t.charCodeAt(0) - 97 + 1;
	if (t.length === 2) {
		let e = t.charCodeAt(0) - 97, n = t.charCodeAt(1) - 97;
		return (e + 1) * 26 + n + 1;
	}
	return 0;
}
function NS(e) {
	if (e <= 26) return ES[e - 1];
	let t = Math.floor((e - 1) / 26) - 1, n = (e - 1) % 26;
	return t < 0 ? ES[n] : ES[t] + ES[n];
}
function PS(e) {
	if (e && !/^\d+$/.test(e)) {
		if (jS(e)) return e === e.toLowerCase() ? "i" : "I";
		if (/^[a-z]{1,2}$/.test(e)) return "a";
		if (/^[A-Z]{1,2}$/.test(e)) return "A";
	}
}
function FS(e) {
	if (/^\d+$/.test(e)) return parseInt(e, 10);
	let t = PS(e);
	if (t === "i" || t === "I") return AS(e);
	if (t === "a" || t === "A") {
		let t = MS(e);
		return t > 0 ? t : 1;
	}
	let n = parseInt(e, 10);
	return Number.isNaN(n) ? 1 : n;
}
function IS(e, t) {
	if (e === "numeric") return String(t);
	switch (e) {
		case "a": return NS(t);
		case "A": return NS(t).toUpperCase();
		case "i": return OS(t);
		case "I": return kS(t);
		default: return String(t);
	}
}
function LS(e) {
	if (e.length === 0) return !1;
	let t = PS(e[0]) ?? "numeric", n = FS(e[0]);
	if (n < 1) return !1;
	for (let r = 0; r < e.length; r++) {
		let i = IS(t, n + r);
		if (e[r] !== i) return !1;
	}
	return !0;
}
function RS(e) {
	return {
		type: PS(e),
		start: FS(e)
	};
}
function zS(e) {
	let { type: t, start: n } = RS(e), r = {};
	return t && (r.type = t), n !== 1 && (r.start = n), r;
}
function BS(e, t, n = ". ") {
	let r = t + 1;
	if (!e || e === "1") return `${r}${n}`;
	switch (e) {
		case "a": return `${NS(r)}${n}`;
		case "A": return `${NS(r).toUpperCase()}${n}`;
		case "i": return `${OS(r)}${n}`;
		case "I": return `${kS(r)}${n}`;
		default: return `${r}${n}`;
	}
}
function VS(e) {
	return !e[0] || e[0].type === "paragraph" ? e : [{
		type: "paragraph",
		content: []
	}, ...e];
}
function HS(e) {
	let t = e.content?.[0];
	return t?.type === "paragraph" && !t.content?.length;
}
var US = "&nbsp;", WS = 1, GS = (e) => (e?.level ?? WS) > WS;
function KS(e) {
	let t = e.tokens?.[0];
	return !!(e.text && e.tokens?.length === 1 && t?.type === "list" && t.ordered && t.raw === e.text);
}
function qS(e, t) {
	return t.tokenizeInline ? t.parseInline(t.tokenizeInline(e)) : t.parseInline([{
		type: "text",
		raw: e,
		text: e
	}]);
}
var JS = fS.create({
	name: "listItem",
	addOptions() {
		return {
			HTMLAttributes: {},
			bulletListTypeName: "bulletList",
			orderedListTypeName: "orderedList"
		};
	},
	content: "paragraph block*",
	defining: !0,
	parseHTML() {
		return [{ tag: "li" }];
	},
	renderHTML({ HTMLAttributes: e }) {
		return [
			"li",
			J(this.options.HTMLAttributes, e),
			0
		];
	},
	markdownTokenName: "list_item",
	parseMarkdown: (e, t) => {
		if (e.type !== "list_item") return [];
		let n = t.parseBlockChildren ?? t.parseChildren, r = [];
		if (e.tokens && e.tokens.length > 0) {
			if (KS(e)) return {
				type: "listItem",
				content: [{
					type: "paragraph",
					content: qS(e.text || "", t)
				}]
			};
			let [i, ...a] = e.tokens;
			if (i.type === "heading") return {
				type: "listItem",
				content: [{
					type: "paragraph",
					content: t.parseInline(i.tokens ?? [])
				}, ...a.length > 0 ? n(a) : []]
			};
			if (e.tokens.some((e) => e.type === "paragraph")) r = n(e.tokens);
			else if (i.type === "text" && i.tokens && i.tokens.length > 0) {
				if (r = [{
					type: "paragraph",
					content: t.parseInline(i.tokens)
				}], e.tokens.length > 1) {
					let t = n(e.tokens.slice(1));
					r.push(...t);
				}
			} else r = n(e.tokens);
		}
		return r.length === 0 && (r = [{
			type: "paragraph",
			content: []
		}]), {
			type: "listItem",
			content: VS(r)
		};
	},
	renderMarkdown: (e, t, n) => {
		let r = (e) => {
			if (e.parentType === "bulletList") return "- ";
			if (e.parentType === "orderedList") {
				var t, n;
				let r = ((t = e.meta) == null || (t = t.parentAttrs) == null ? void 0 : t.start) || 1;
				return BS((n = e.meta) == null || (n = n.parentAttrs) == null ? void 0 : n.type, r - 1 + (e.index || 0), ". ");
			}
			return "- ";
		}, i = Ex(e, t, r, n, { alignNestedToPrefix: n?.parentType === "orderedList" });
		if (!HS(e) || !GS(n)) return i;
		let a = r(n);
		return `${a}${US}${i.slice(a.length)}`;
	},
	addExtensions() {
		return [wS(this.name, [this.options.bulletListTypeName, this.options.orderedListTypeName])];
	},
	addKeyboardShortcuts() {
		return {
			Enter: () => this.editor.commands.splitListItem(this.name),
			Tab: () => this.editor.commands.sinkListItem(this.name),
			"Shift-Tab": () => this.editor.commands.liftListItem(this.name)
		};
	}
}), YS = (e, t) => {
	let { $from: n } = t.selection, r = q_(e, t.schema), i = null, a = n.depth, o = n.pos, s = null;
	for (; a > 0 && s === null;) i = n.node(a), i.type === r ? s = a : (--a, --o);
	return s === null ? null : {
		$pos: t.doc.resolve(o),
		depth: s
	};
}, XS = (e, t) => {
	let n = YS(e, t);
	if (!n) return !1;
	let [, r] = Hy(t, e, n.$pos.pos + 4);
	return r;
}, ZS = (e, t, n) => {
	let { $anchor: r } = e.selection, i = Math.max(0, r.pos - 2), a = e.doc.resolve(i).node();
	return !(!a || !n.includes(a.type.name));
}, QS = (e, t, n) => {
	if (e.commands.undoInputRule()) return !0;
	if (e.state.selection.from !== e.state.selection.to) return !1;
	if (!Bv(e.state, t) && ZS(e.state, t, n)) {
		let { $anchor: n } = e.state.selection, r = e.state.doc.resolve(n.before() - 1), i = [];
		r.node().descendants((e, n) => {
			e.type.name === t && i.push({
				node: e,
				pos: n
			});
		});
		let a = i.at(-1);
		if (!a) return !1;
		let o = e.state.doc.resolve(r.start() + a.pos + 1);
		return e.chain().command(({ tr: e }) => {
			let t = o.end();
			return e.delete(n.before(), n.after()).insert(t, n.parent), e.setSelection(B.create(e.doc, t + 1)), !0;
		}).command(({ state: e, dispatch: t }) => (Ld(e, t), !0)).run();
	}
	if (!Bv(e.state, t) || !Xy(e.state)) return !1;
	let { $from: r } = e.state.selection, i = r.depth - 1;
	return r.node(i).type !== e.schema.nodes[t] || r.index(i) !== 0 ? !1 : e.chain().liftListItem(t).run();
}, $S = (e, t) => {
	let n = XS(e, t), r = YS(e, t);
	return !r || !n ? !1 : n > r.depth;
}, eC = (e, t) => {
	let n = XS(e, t), r = YS(e, t);
	return !r || !n ? !1 : n < r.depth;
}, tC = (e, t) => !Bv(e.state, t) || !Yy(e.state, t) || !e.state.selection.empty ? !1 : $S(t, e.state) ? e.chain().focus(e.state.selection.from + 4).lift(t).joinBackward().run() : eC(t, e.state) ? e.commands.command(({ state: e, dispatch: t }) => Rd(e, t)) : e.commands.joinItemForward(), nC = (e, t, n) => {
	let { state: r } = e, { selection: i } = r;
	if (!i.empty) return !1;
	let { $from: a } = i;
	if (a.parentOffset !== 0 || !a.parent.isTextblock || Bv(r, t)) return !1;
	let o = Uy(a);
	if (!o || !n.includes(o.type.name)) return !1;
	let s = o.lastChild;
	if (!s || s.type.name !== t) return !1;
	let c = a.parent;
	if (!s.canReplace(s.childCount, s.childCount, I.from(c))) return !1;
	let l = a.before(), u = a.after(), d = l - 2;
	return e.commands.command(({ tr: e, dispatch: t }) => (t && (e.delete(l, u).insert(d, I.from(c)), e.setSelection(B.create(e.doc, d + 1)), e.scrollIntoView()), !0));
}, rC = Y.create({
	name: "listKeymap",
	addOptions() {
		return { listTypes: [{
			itemName: "listItem",
			wrapperNames: ["bulletList", "orderedList"]
		}, {
			itemName: "taskItem",
			wrapperNames: ["taskList"]
		}] };
	},
	addKeyboardShortcuts() {
		return {
			Delete: ({ editor: e }) => {
				let t = !1;
				return this.options.listTypes.forEach(({ itemName: n }) => {
					e.state.schema.nodes[n] !== void 0 && tC(e, n) && (t = !0);
				}), t;
			},
			"Mod-Delete": ({ editor: e }) => {
				let t = !1;
				return this.options.listTypes.forEach(({ itemName: n }) => {
					e.state.schema.nodes[n] !== void 0 && tC(e, n) && (t = !0);
				}), t;
			},
			Backspace: ({ editor: e }) => {
				let t = !1;
				return this.options.listTypes.forEach(({ itemName: n, wrapperNames: r }) => {
					e.state.schema.nodes[n] !== void 0 && QS(e, n, r) && (t = !0);
				}), t;
			},
			"Mod-Backspace": ({ editor: e }) => {
				let t = !1;
				return this.options.listTypes.forEach(({ itemName: n, wrapperNames: r }) => {
					e.state.schema.nodes[n] !== void 0 && QS(e, n, r) && (t = !0);
				}), t;
			},
			Tab: ({ editor: e }) => {
				for (let { itemName: t, wrapperNames: n } of this.options.listTypes) if (e.state.schema.nodes[t] !== void 0 && nC(e, t, n)) return !0;
				return !1;
			}
		};
	}
}), iC = RegExp(`^(\\s*)(${DS})([.)])\\s+(.*)$`), aC = /^\s/, oC = {
	heading: /^#{1,6}(?:\s|$)/,
	bulletItem: /^[-+*]\s+/,
	codeFence: /^(?:```|~~~)/,
	blockMath: /^\$\$/,
	thematicBreak: /^(?:(?:-[ \t]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})$/
};
function sC(e) {
	return iC.test(e.trimStart());
}
function cC(e) {
	let t = e.trimStart();
	return oC.bulletItem.test(t) || sC(t) || oC.heading.test(t) || oC.thematicBreak.test(t) && !t.startsWith("-") || /^>\s?/.test(t) || oC.codeFence.test(t) || oC.blockMath.test(t);
}
function lC(e) {
	return Object.values(oC).some((t) => t.test(e));
}
function uC(e) {
	let t = [], n = [], r = !1;
	return e.forEach((e) => {
		r ? n.push(e) : e.trim() === "" || t.length > 0 && cC(e) ? (r = !0, n.push(e)) : t.push(e);
	}), {
		paragraphLines: t,
		blockLines: n
	};
}
function dC(e) {
	let t = [], n = 0, r = 0;
	for (; n < e.length;) {
		let i = e[n], a = i.match(iC);
		if (!a) break;
		let [, o, s, c, l] = a, u = o.length, d = parseInt(s, 10), f = isNaN(d) ? PS(s) : void 0, p = isNaN(d) ? FS(s) : d, m = [l], h = n + 1, g = [i], _ = !1;
		for (; h < e.length;) {
			let t = e[h];
			if (t.match(iC)) break;
			if (t.trim() === "") g.push(t), m.push(""), _ = !0, h += 1;
			else if (t.match(aC)) {
				let e = t.length - t.trimStart().length, n = u + s.length + 1;
				g.push(t), m.push(t.slice(Math.min(e, n))), h += 1;
			} else {
				if (_ || lC(t)) break;
				g.push(t), m.push(t), h += 1;
			}
		}
		t.push({
			indent: u,
			number: p,
			type: f,
			content: m.join("\n").trim(),
			contentLines: m,
			raw: g.join("\n")
		}), r = h, n = h;
	}
	return [t, r];
}
var fC = RegExp(`^(${DS})([.)])\\s+(.+)$`);
function pC(e) {
	let t = e.split("\n").filter((e) => e.trim().length > 0);
	if (t.length === 0) return null;
	let n = [];
	for (let e of t) {
		let t = e.trim().match(fC);
		if (!t) return null;
		n.push({
			marker: t[1],
			content: t[3]
		});
	}
	return LS(n.map((e) => e.marker)) ? {
		type: "orderedList",
		attrs: zS(n[0].marker),
		content: n.map((e) => ({
			type: "listItem",
			content: [{
				type: "paragraph",
				content: [{
					type: "text",
					text: e.content
				}]
			}]
		}))
	} : null;
}
function mC(e, t, n) {
	let r = [], i = 0;
	for (; i < e.length;) {
		let a = e[i];
		if (a.indent === t) {
			let { paragraphLines: o, blockLines: s } = uC(a.contentLines), c = o.join("\n").trim(), l = [];
			c && l.push({
				type: "paragraph",
				raw: c,
				tokens: n.inlineTokens(c)
			});
			let u = s.join("\n").trim();
			if (u) {
				let e = n.blockTokens(u);
				l.push(...e);
			}
			let d = i + 1, f = [];
			for (; d < e.length && e[d].indent > t;) f.push(e[d]), d += 1;
			if (f.length > 0) {
				let e = mC(f, Math.min(...f.map((e) => e.indent)), n);
				l.push({
					type: "list",
					ordered: !0,
					start: f[0].number,
					typeMarker: f[0].type,
					items: e,
					raw: f.map((e) => e.raw).join("\n")
				});
			}
			r.push({
				type: "list_item",
				raw: a.raw,
				tokens: l
			}), i = d;
		} else i += 1;
	}
	return r;
}
function hC(e, t) {
	return e.map((e) => {
		if (e.type !== "list_item") return t.parseChildren([e])[0];
		let n = [];
		return e.tokens && e.tokens.length > 0 && e.tokens.forEach((e) => {
			if (e.type === "paragraph" || e.type === "list" || e.type === "blockquote" || e.type === "code") n.push(...t.parseChildren([e]));
			else if (e.type === "text" && e.tokens) {
				let r = t.parseChildren([e]);
				n.push({
					type: "paragraph",
					content: r
				});
			} else {
				let r = t.parseChildren([e]);
				r.length > 0 && n.push(...r);
			}
		}), {
			type: "listItem",
			content: n
		};
	});
}
var gC = 64;
function _C(e, t) {
	let n = [], r = 0;
	for (; n.length < t;) {
		let t = e.indexOf("\n", r);
		if (t === -1) return n.push(e.slice(r)), n;
		n.push(e.slice(r, t)), r = t + 1;
	}
	return n;
}
function vC(e) {
	let t = e.indexOf("\n"), n = t === -1 ? e : e.slice(0, t);
	if (!iC.test(n)) return [
		[],
		0,
		[]
	];
	let r = gC, i = _C(e, r), a = dC(i);
	for (; a[1] === i.length && i.length === r;) r *= 2, i = _C(e, r), a = dC(i);
	return [
		a[0],
		a[1],
		i
	];
}
var yC = "listItem", bC = "textStyle", xC = /^(\d+)\.\s$/;
function SC(e) {
	let t = e.match(/list-style-type\s*:\s*([^;]+)/i);
	if (!t) return null;
	switch (t[1].trim().toLowerCase()) {
		case "upper-roman": return "I";
		case "lower-roman": return "i";
		case "upper-alpha":
		case "upper-latin": return "A";
		case "lower-alpha":
		case "lower-latin": return "a";
		default: return null;
	}
}
var CC = fS.create({
	name: "orderedList",
	addOptions() {
		return {
			itemTypeName: "listItem",
			HTMLAttributes: {},
			keepMarks: !1,
			keepAttributes: !1
		};
	},
	group: "block list",
	content() {
		return `${this.options.itemTypeName}+`;
	},
	addAttributes() {
		return {
			start: {
				default: 1,
				parseHTML: (e) => e.hasAttribute("start") ? parseInt(e.getAttribute("start") || "", 10) : 1
			},
			type: {
				default: null,
				parseHTML: (e) => {
					let t = e.getAttribute("type");
					if (t) return t;
					let n = e.getAttribute("style");
					if (n) {
						let e = SC(n);
						if (e) return e;
					}
					let r = e.querySelector("li");
					if (r) {
						let e = r.getAttribute("style");
						if (e) {
							let t = SC(e);
							if (t) return t;
						}
					}
					return null;
				}
			}
		};
	},
	parseHTML() {
		return [{ tag: "ol" }];
	},
	renderHTML({ HTMLAttributes: e }) {
		let { start: t, type: n, ...r } = e, i = J(this.options.HTMLAttributes, r);
		return t !== 1 && (i.start = t), n && n !== "1" && (i.type = n), [
			"ol",
			i,
			0
		];
	},
	markdownTokenName: "list",
	parseMarkdown: (e, t) => {
		if (e.type !== "list" || !e.ordered) return [];
		let n = e.start || 1, r = e.typeMarker, i = e.items ? hC(e.items, t) : [], a = {};
		return n !== 1 && (a.start = n), r && (a.type = r), Object.keys(a).length > 0 ? {
			type: "orderedList",
			attrs: a,
			content: i
		} : {
			type: "orderedList",
			content: i
		};
	},
	renderMarkdown: (e, t) => e.content ? t.renderChildren(e.content, "\n") : "",
	markdownTokenizer: {
		name: "orderedList",
		level: "block",
		start: () => -1,
		tokenize: (e, t, n) => {
			let [r, i, a] = vC(e);
			if (r.length === 0) return;
			let o = mC(r, r[0].indent, n);
			if (o.length !== 0) return {
				type: "list",
				ordered: !0,
				start: r[0]?.number || 1,
				typeMarker: r[0]?.type,
				items: o,
				raw: a.slice(0, i).join("\n")
			};
		}
	},
	markdownOptions: { indentsContent: !0 },
	addCommands() {
		return { toggleOrderedList: () => ({ commands: e, chain: t }) => this.options.keepAttributes ? t().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(yC, this.editor.getAttributes(bC)).run() : e.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks) };
	},
	addKeyboardShortcuts() {
		return { "Mod-Shift-7": () => this.editor.commands.toggleOrderedList() };
	},
	addProseMirrorPlugins() {
		return [new H({ props: { handlePaste: (e, t) => {
			if ((t.clipboardData?.getData("text/html"))?.trim()) return !1;
			let n = t.clipboardData?.getData("text/plain");
			if (!n) return !1;
			let r = pC(n);
			if (!r) return !1;
			try {
				let t = e.state.schema.nodeFromJSON(r), n = e.state.tr.replaceSelectionWith(t);
				return e.dispatch(n), !0;
			} catch {
				return !1;
			}
		} } })];
	},
	addInputRules() {
		let e = (e, t) => (!t.attrs.type || t.attrs.type === "1") && t.childCount + t.attrs.start === +e[1], t = dS({
			find: xC,
			type: this.type,
			getAttributes: (e) => ({ start: +e[1] }),
			joinPredicate: e
		});
		return (this.options.keepMarks || this.options.keepAttributes) && (t = dS({
			find: xC,
			type: this.type,
			keepMarks: this.options.keepMarks,
			keepAttributes: this.options.keepAttributes,
			getAttributes: (e) => ({
				start: +e[1],
				...this.editor.getAttributes(bC)
			}),
			joinPredicate: e,
			editor: this.editor
		})), [t];
	}
}), wC = /^\s*(\[([( |x])?\])\s$/, TC = "position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0", EC = (e, t, n) => {
	var r;
	return (n == null || (r = n.checkboxLabel) == null ? void 0 : r.call(n, e, t)) || `Task item checkbox for ${e.textContent || "empty task item"}`;
}, DC = fS.create({
	name: "taskItem",
	addOptions() {
		return {
			nested: !1,
			HTMLAttributes: {},
			taskListTypeName: "taskList",
			a11y: void 0
		};
	},
	content() {
		return this.options.nested ? "paragraph block*" : "paragraph+";
	},
	defining: !0,
	addAttributes() {
		return { checked: {
			default: !1,
			keepOnSplit: !1,
			parseHTML: (e) => {
				let t = e.getAttribute("data-checked");
				return t === "" || t === "true";
			},
			renderHTML: (e) => ({ "data-checked": e.checked })
		} };
	},
	parseHTML() {
		return [{
			tag: `li[data-type="${this.name}"]`,
			priority: 51,
			contentElement: (e) => e.querySelector("div") ?? e
		}];
	},
	renderHTML({ node: e, HTMLAttributes: t }) {
		return [
			"li",
			J(this.options.HTMLAttributes, t, { "data-type": this.name }),
			[
				"label",
				["input", {
					type: "checkbox",
					checked: e.attrs.checked ? "checked" : null
				}],
				["span"]
			],
			["div", 0]
		];
	},
	parseMarkdown: (e, t) => {
		let n = [];
		if (e.tokens && e.tokens.length > 0 ? n.push(t.createNode("paragraph", {}, t.parseInline(e.tokens))) : e.text ? n.push(t.createNode("paragraph", {}, [t.createNode("text", { text: e.text })])) : n.push(t.createNode("paragraph", {}, [])), e.nestedTokens && e.nestedTokens.length > 0) {
			let r = t.parseChildren(e.nestedTokens);
			n.push(...r);
		}
		return t.createNode("taskItem", { checked: e.checked || !1 }, n);
	},
	renderMarkdown: (e, t) => Ex(e, t, `- [${e.attrs?.checked ? "x" : " "}] `, void 0, { indentMainContent: !0 }),
	addExtensions() {
		return this.options.nested ? [wS(this.name, [this.options.taskListTypeName])] : [];
	},
	addKeyboardShortcuts() {
		let e = {
			Enter: () => this.editor.commands.splitListItem(this.name),
			"Shift-Tab": () => this.editor.commands.liftListItem(this.name)
		};
		return this.options.nested ? {
			...e,
			Tab: () => this.editor.commands.sinkListItem(this.name)
		} : e;
	},
	addNodeView() {
		return ({ node: e, HTMLAttributes: t, getPos: n, editor: r }) => {
			let i = document.createElement("li"), a = document.createElement("label"), o = document.createElement("span"), s = document.createElement("input"), c = document.createElement("div");
			o.style.cssText = TC;
			let l = (e) => {
				let t = EC(e, e.attrs.checked, this.options.a11y);
				s.setAttribute("aria-label", t), o.textContent = t;
			};
			l(e), a.contentEditable = "false", s.type = "checkbox", s.addEventListener("mousedown", (e) => e.preventDefault()), s.addEventListener("change", (t) => {
				if (!r.isEditable && !this.options.onReadOnlyChecked) {
					s.checked = !s.checked;
					return;
				}
				let { checked: i } = t.target;
				r.isEditable && typeof n == "function" && r.chain().focus(void 0, { scrollIntoView: !1 }).command(({ tr: e }) => {
					let t = n();
					if (typeof t != "number") return !1;
					let r = e.doc.nodeAt(t);
					return e.setNodeMarkup(t, void 0, {
						...r?.attrs,
						checked: i
					}), !0;
				}).run(), !r.isEditable && this.options.onReadOnlyChecked && (this.options.onReadOnlyChecked(e, i) || (s.checked = !s.checked));
			}), Object.entries(this.options.HTMLAttributes).forEach(([e, t]) => {
				i.setAttribute(e, t);
			}), i.dataset.checked = e.attrs.checked, s.checked = e.attrs.checked, a.append(s, o), i.append(a, c), Object.entries(t).forEach(([e, t]) => {
				i.setAttribute(e, t);
			});
			let u = new Set(Object.keys(t));
			return {
				dom: i,
				contentDOM: c,
				update: (e) => {
					if (e.type !== this.type) return !1;
					i.dataset.checked = e.attrs.checked, s.checked = e.attrs.checked, l(e);
					let t = r.extensionManager.attributes, n = wy(e, t), a = new Set(Object.keys(n)), o = this.options.HTMLAttributes;
					return u.forEach((e) => {
						a.has(e) || (e in o ? i.setAttribute(e, o[e]) : i.removeAttribute(e));
					}), Object.entries(n).forEach(([e, t]) => {
						t == null ? e in o ? i.setAttribute(e, o[e]) : i.removeAttribute(e) : i.setAttribute(e, t);
					}), u = a, !0;
				}
			};
		};
	},
	addInputRules() {
		return [dS({
			find: wC,
			type: this.type,
			getAttributes: (e) => ({ checked: e[e.length - 1] === "x" })
		})];
	}
}), OC = fS.create({
	name: "taskList",
	addOptions() {
		return {
			itemTypeName: "taskItem",
			HTMLAttributes: {}
		};
	},
	group: "block list",
	content() {
		return `${this.options.itemTypeName}+`;
	},
	parseHTML() {
		return [{
			tag: `ul[data-type="${this.name}"]`,
			priority: 51
		}];
	},
	renderHTML({ HTMLAttributes: e }) {
		return [
			"ul",
			J(this.options.HTMLAttributes, e, { "data-type": this.name }),
			0
		];
	},
	parseMarkdown: (e, t) => t.createNode("taskList", {}, t.parseChildren(e.items || [])),
	renderMarkdown: (e, t) => e.content ? t.renderChildren(e.content, "\n") : "",
	markdownTokenizer: {
		name: "taskList",
		level: "block",
		start(e) {
			let t = e.match(/^\s*[-+*]\s+\[([ xX])\]\s+/)?.index;
			return t === void 0 ? -1 : t;
		},
		tokenize(e, t, n) {
			let r = (e) => {
				let t = Cx(e, {
					itemPattern: /^(\s*)([-+*])\s+\[([ xX])\]\s+(.*)$/,
					extractItemData: (e) => ({
						indentLevel: e[1].length,
						mainContent: e[4],
						checked: e[3].toLowerCase() === "x"
					}),
					createToken: (e, t) => ({
						type: "taskItem",
						raw: "",
						mainContent: e.mainContent,
						indentLevel: e.indentLevel,
						checked: e.checked,
						text: e.mainContent,
						tokens: n.inlineTokens(e.mainContent),
						nestedTokens: t
					}),
					customNestedParser: r
				}, n);
				if (t) {
					let r = {
						type: "taskList",
						raw: t.raw,
						items: t.items
					}, i = e.slice(t.raw.length);
					return i.trim() ? [r, ...n.blockTokens(i)] : [r];
				}
				return n.blockTokens(e);
			}, i = Cx(e, {
				itemPattern: /^(\s*)([-+*])\s+\[([ xX])\]\s+(.*)$/,
				extractItemData: (e) => ({
					indentLevel: e[1].length,
					mainContent: e[4],
					checked: e[3].toLowerCase() === "x"
				}),
				createToken: (e, t) => ({
					type: "taskItem",
					raw: "",
					mainContent: e.mainContent,
					indentLevel: e.indentLevel,
					checked: e.checked,
					text: e.mainContent,
					tokens: n.inlineTokens(e.mainContent),
					nestedTokens: t
				}),
				customNestedParser: r
			}, n);
			if (i) return {
				type: "taskList",
				raw: i.raw,
				items: i.items
			};
		}
	},
	markdownOptions: { indentsContent: !0 },
	addCommands() {
		return { toggleTaskList: () => ({ commands: e }) => e.toggleList(this.name, this.options.itemTypeName) };
	},
	addKeyboardShortcuts() {
		return { "Mod-Shift-9": () => this.editor.commands.toggleTaskList() };
	}
});
Y.create({
	name: "listKit",
	addExtensions() {
		let e = [];
		return this.options.bulletList !== !1 && e.push(bS.configure(this.options.bulletList)), this.options.listItem !== !1 && e.push(JS.configure(this.options.listItem)), this.options.listKeymap !== !1 && e.push(rC.configure(this.options.listKeymap)), this.options.orderedList !== !1 && e.push(CC.configure(this.options.orderedList)), this.options.taskItem !== !1 && e.push(DC.configure(this.options.taskItem)), this.options.taskList !== !1 && e.push(OC.configure(this.options.taskList)), e;
	}
});
// node_modules/prosemirror-tables/dist/index.js
var kC, AC;
if (typeof WeakMap < "u") {
	let e = /* @__PURE__ */ new WeakMap();
	kC = (t) => e.get(t), AC = (t, n) => (e.set(t, n), n);
} else {
	let e = [], t = 0;
	kC = (t) => {
		for (let n = 0; n < e.length; n += 2) if (e[n] == t) return e[n + 1];
	}, AC = (n, r) => (t == 10 && (t = 0), e[t++] = n, e[t++] = r);
}
var jC = class {
	constructor(e, t, n, r) {
		this.width = e, this.height = t, this.map = n, this.problems = r;
	}
	findCell(e) {
		for (let t = 0; t < this.map.length; t++) {
			let n = this.map[t];
			if (n != e) continue;
			let r = t % this.width, i = t / this.width | 0, a = r + 1, o = i + 1;
			for (let e = 1; a < this.width && this.map[t + e] == n; e++) a++;
			for (let e = 1; o < this.height && this.map[t + this.width * e] == n; e++) o++;
			return {
				left: r,
				top: i,
				right: a,
				bottom: o
			};
		}
		throw RangeError(`No cell with offset ${e} found`);
	}
	colCount(e) {
		for (let t = 0; t < this.map.length; t++) if (this.map[t] == e) return t % this.width;
		throw RangeError(`No cell with offset ${e} found`);
	}
	nextCell(e, t, n) {
		let { left: r, right: i, top: a, bottom: o } = this.findCell(e);
		return t == "horiz" ? (n < 0 ? r == 0 : i == this.width) ? null : this.map[a * this.width + (n < 0 ? r - 1 : i)] : (n < 0 ? a == 0 : o == this.height) ? null : this.map[r + this.width * (n < 0 ? a - 1 : o)];
	}
	rectBetween(e, t) {
		let { left: n, right: r, top: i, bottom: a } = this.findCell(e), { left: o, right: s, top: c, bottom: l } = this.findCell(t);
		return {
			left: Math.min(n, o),
			top: Math.min(i, c),
			right: Math.max(r, s),
			bottom: Math.max(a, l)
		};
	}
	cellsInRect(e) {
		let t = [], n = {};
		for (let r = e.top; r < e.bottom; r++) for (let i = e.left; i < e.right; i++) {
			let a = r * this.width + i, o = this.map[a];
			n[o] || (n[o] = !0, i == e.left && i && this.map[a - 1] == o || r == e.top && r && this.map[a - this.width] == o || t.push(o));
		}
		return t;
	}
	positionAt(e, t, n) {
		for (let r = 0, i = 0;; r++) {
			let a = i + n.child(r).nodeSize;
			if (r == e) {
				let n = t + e * this.width, r = (e + 1) * this.width;
				for (; n < r && this.map[n] < i;) n++;
				return n == r ? a - 1 : this.map[n];
			}
			i = a;
		}
	}
	static get(e) {
		return kC(e) || AC(e, MC(e));
	}
};
function MC(e) {
	if (e.type.spec.tableRole != "table") throw RangeError("Not a table node: " + e.type.name);
	let t = NC(e), n = e.childCount, r = [], i = 0, a = null, o = [];
	for (let e = 0, i = t * n; e < i; e++) r[e] = 0;
	for (let s = 0, c = 0; s < n; s++) {
		let l = e.child(s);
		c++;
		for (let e = 0;; e++) {
			for (; i < r.length && r[i] != 0;) i++;
			if (e == l.childCount) break;
			let u = l.child(e), { colspan: d, rowspan: f, colwidth: p } = u.attrs;
			for (let e = 0; e < f; e++) {
				if (e + s >= n) {
					(a ||= []).push({
						type: "overlong_rowspan",
						pos: c,
						n: f - e
					});
					break;
				}
				let l = i + e * t;
				for (let e = 0; e < d; e++) {
					r[l + e] == 0 ? r[l + e] = c : (a ||= []).push({
						type: "collision",
						row: s,
						pos: c,
						n: d - e
					});
					let n = p && p[e];
					if (n) {
						let r = (l + e) % t * 2, i = o[r];
						i == null || i != n && o[r + 1] == 1 ? (o[r] = n, o[r + 1] = 1) : i == n && o[r + 1]++;
					}
				}
			}
			i += d, c += u.nodeSize;
		}
		let u = (s + 1) * t, d = 0;
		for (; i < u;) r[i++] == 0 && d++;
		d && (a ||= []).push({
			type: "missing",
			row: s,
			n: d
		}), c++;
	}
	(t === 0 || n === 0) && (a ||= []).push({ type: "zero_sized" });
	let s = new jC(t, n, r, a), c = !1;
	for (let e = 0; !c && e < o.length; e += 2) o[e] != null && o[e + 1] < n && (c = !0);
	return c && PC(s, o, e), s;
}
function NC(e) {
	let t = -1, n = !1;
	for (let r = 0; r < e.childCount; r++) {
		let i = e.child(r), a = 0;
		if (n) for (let t = 0; t < r; t++) {
			let n = e.child(t);
			for (let e = 0; e < n.childCount; e++) {
				let i = n.child(e);
				t + i.attrs.rowspan > r && (a += i.attrs.colspan);
			}
		}
		for (let e = 0; e < i.childCount; e++) {
			let t = i.child(e);
			a += t.attrs.colspan, t.attrs.rowspan > 1 && (n = !0);
		}
		t == -1 ? t = a : t != a && (t = Math.max(t, a));
	}
	return t;
}
function PC(e, t, n) {
	e.problems ||= [];
	let r = {};
	for (let i = 0; i < e.map.length; i++) {
		let a = e.map[i];
		if (r[a]) continue;
		r[a] = !0;
		let o = n.nodeAt(a);
		if (!o) throw RangeError(`No cell with offset ${a} found`);
		let s = null, c = o.attrs;
		for (let n = 0; n < c.colspan; n++) {
			let r = t[(i + n) % e.width * 2];
			r == null || c.colwidth && c.colwidth[n] == r || ((s ||= FC(c))[n] = r);
		}
		s && e.problems.unshift({
			type: "colwidth mismatch",
			pos: a,
			colwidth: s
		});
	}
}
function FC(e) {
	if (e.colwidth) return e.colwidth.slice();
	let t = [];
	for (let n = 0; n < e.colspan; n++) t.push(0);
	return t;
}
function IC(e) {
	let t = e.cached.tableNodeTypes;
	if (!t) {
		t = e.cached.tableNodeTypes = {};
		for (let n in e.nodes) {
			let r = e.nodes[n], i = r.spec.tableRole;
			i && (t[i] = r);
		}
	}
	return t;
}
var LC = new U("selectingCells");
function RC(e) {
	for (let t = e.depth - 1; t > 0; t--) if (e.node(t).type.spec.tableRole == "row") return e.node(0).resolve(e.before(t + 1));
	return null;
}
function zC(e) {
	for (let t = e.depth; t > 0; t--) {
		let n = e.node(t).type.spec.tableRole;
		if (n === "cell" || n === "header_cell") return e.node(t);
	}
	return null;
}
function BC(e) {
	let t = e.selection.$head;
	for (let e = t.depth; e > 0; e--) if (t.node(e).type.spec.tableRole == "row") return !0;
	return !1;
}
function VC(e) {
	let t = e.selection;
	if ("$anchorCell" in t && t.$anchorCell) return t.$anchorCell.pos > t.$headCell.pos ? t.$anchorCell : t.$headCell;
	if ("node" in t && t.node && t.node.type.spec.tableRole == "cell") return t.$anchor;
	let n = RC(t.$head) || HC(t.$head);
	if (n) return n;
	throw RangeError(`No cell found around position ${t.head}`);
}
function HC(e) {
	for (let t = e.nodeAfter, n = e.pos; t; t = t.firstChild, n++) {
		let r = t.type.spec.tableRole;
		if (r == "cell" || r == "header_cell") return e.doc.resolve(n);
	}
	for (let t = e.nodeBefore, n = e.pos; t; t = t.lastChild, n--) {
		let r = t.type.spec.tableRole;
		if (r == "cell" || r == "header_cell") return e.doc.resolve(n - t.nodeSize);
	}
}
function UC(e) {
	return e.parent.type.spec.tableRole == "row" && !!e.nodeAfter;
}
function WC(e) {
	return e.node(0).resolve(e.pos + e.nodeAfter.nodeSize);
}
function GC(e, t) {
	return e.depth == t.depth && e.pos >= t.start(-1) && e.pos <= t.end(-1);
}
function KC(e, t, n) {
	let r = e.node(-1), i = jC.get(r), a = e.start(-1), o = i.nextCell(e.pos - a, t, n);
	return o == null ? null : e.node(0).resolve(a + o);
}
function qC(e, t, n = 1) {
	let r = {
		...e,
		colspan: e.colspan - n
	};
	return r.colwidth && (r.colwidth = r.colwidth.slice(), r.colwidth.splice(t, n), r.colwidth.some((e) => e > 0) || (r.colwidth = null)), r;
}
function JC(e, t, n = 1) {
	let r = {
		...e,
		colspan: e.colspan + n
	};
	if (r.colwidth) {
		r.colwidth = r.colwidth.slice();
		for (let e = 0; e < n; e++) r.colwidth.splice(t, 0, 0);
	}
	return r;
}
function YC(e, t, n) {
	let r = IC(t.type.schema).header_cell;
	for (let i = 0; i < e.height; i++) if (t.nodeAt(e.map[n + i * e.width]).type != r) return !1;
	return !0;
}
var X = class e extends z {
	constructor(e, t = e) {
		let n = e.node(-1), r = jC.get(n), i = e.start(-1), a = r.rectBetween(e.pos - i, t.pos - i), o = e.node(0), s = r.cellsInRect(a).filter((e) => e != t.pos - i);
		s.unshift(t.pos - i);
		let c = s.map((e) => {
			let t = n.nodeAt(e);
			if (!t) throw RangeError(`No cell with offset ${e} found`);
			let r = i + e + 1;
			return new pd(o.resolve(r), o.resolve(r + t.content.size));
		});
		super(c[0].$from, c[0].$to, c), this.$anchorCell = e, this.$headCell = t;
	}
	map(t, n) {
		let r = t.resolve(n.map(this.$anchorCell.pos)), i = t.resolve(n.map(this.$headCell.pos));
		if (UC(r) && UC(i) && GC(r, i)) {
			let t = this.$anchorCell.node(-1) != r.node(-1);
			return t && this.isRowSelection() ? e.rowSelection(r, i) : t && this.isColSelection() ? e.colSelection(r, i) : new e(r, i);
		}
		return B.between(r, i);
	}
	content() {
		let e = this.$anchorCell.node(-1), t = jC.get(e), n = this.$anchorCell.start(-1), r = t.rectBetween(this.$anchorCell.pos - n, this.$headCell.pos - n), i = {}, a = [];
		for (let n = r.top; n < r.bottom; n++) {
			let o = [];
			for (let a = n * t.width + r.left, s = r.left; s < r.right; s++, a++) {
				let n = t.map[a];
				if (i[n]) continue;
				i[n] = !0;
				let s = t.findCell(n), c = e.nodeAt(n);
				if (!c) throw RangeError(`No cell with offset ${n} found`);
				let l = r.left - s.left, u = s.right - r.right;
				if (l > 0 || u > 0) {
					let e = c.attrs;
					if (l > 0 && (e = qC(e, 0, l)), u > 0 && (e = qC(e, e.colspan - u, u)), s.left < r.left) {
						if (c = c.type.createAndFill(e), !c) throw RangeError(`Could not create cell with attrs ${JSON.stringify(e)}`);
					} else c = c.type.create(e, c.content);
				}
				if (s.top < r.top || s.bottom > r.bottom) {
					let e = {
						...c.attrs,
						rowspan: Math.min(s.bottom, r.bottom) - Math.max(s.top, r.top)
					};
					c = s.top < r.top ? c.type.createAndFill(e) : c.type.create(e, c.content);
				}
				o.push(c);
			}
			a.push(e.child(n).copy(I.from(o)));
		}
		let o = this.isColSelection() && this.isRowSelection() ? e : a;
		return new R(I.from(o), 1, 1);
	}
	replace(e, t = R.empty) {
		let n = e.steps.length, r = this.ranges;
		for (let i = 0; i < r.length; i++) {
			let { $from: a, $to: o } = r[i], s = e.mapping.slice(n);
			e.replace(s.map(a.pos), s.map(o.pos), i ? R.empty : t);
		}
		let i = z.findFrom(e.doc.resolve(e.mapping.slice(n).map(this.to)), -1);
		i && e.setSelection(i);
	}
	replaceWith(e, t) {
		this.replace(e, new R(I.from(t), 0, 0));
	}
	forEachCell(e) {
		let t = this.$anchorCell.node(-1), n = jC.get(t), r = this.$anchorCell.start(-1), i = n.cellsInRect(n.rectBetween(this.$anchorCell.pos - r, this.$headCell.pos - r));
		for (let n = 0; n < i.length; n++) e(t.nodeAt(i[n]), r + i[n]);
	}
	isColSelection() {
		let e = this.$anchorCell.index(-1), t = this.$headCell.index(-1);
		if (Math.min(e, t) > 0) return !1;
		let n = e + this.$anchorCell.nodeAfter.attrs.rowspan, r = t + this.$headCell.nodeAfter.attrs.rowspan;
		return Math.max(n, r) == this.$headCell.node(-1).childCount;
	}
	static colSelection(t, n = t) {
		let r = t.node(-1), i = jC.get(r), a = t.start(-1), o = i.findCell(t.pos - a), s = i.findCell(n.pos - a), c = t.node(0);
		return o.top <= s.top ? (o.top > 0 && (t = c.resolve(a + i.map[o.left])), s.bottom < i.height && (n = c.resolve(a + i.map[i.width * (i.height - 1) + s.right - 1]))) : (s.top > 0 && (n = c.resolve(a + i.map[s.left])), o.bottom < i.height && (t = c.resolve(a + i.map[i.width * (i.height - 1) + o.right - 1]))), new e(t, n);
	}
	isRowSelection() {
		let e = this.$anchorCell.node(-1), t = jC.get(e), n = this.$anchorCell.start(-1), r = t.colCount(this.$anchorCell.pos - n), i = t.colCount(this.$headCell.pos - n);
		if (Math.min(r, i) > 0) return !1;
		let a = r + this.$anchorCell.nodeAfter.attrs.colspan, o = i + this.$headCell.nodeAfter.attrs.colspan;
		return Math.max(a, o) == t.width;
	}
	eq(t) {
		return t instanceof e && t.$anchorCell.pos == this.$anchorCell.pos && t.$headCell.pos == this.$headCell.pos;
	}
	static rowSelection(t, n = t) {
		let r = t.node(-1), i = jC.get(r), a = t.start(-1), o = i.findCell(t.pos - a), s = i.findCell(n.pos - a), c = t.node(0);
		return o.left <= s.left ? (o.left > 0 && (t = c.resolve(a + i.map[o.top * i.width])), s.right < i.width && (n = c.resolve(a + i.map[i.width * (s.top + 1) - 1]))) : (s.left > 0 && (n = c.resolve(a + i.map[s.top * i.width])), o.right < i.width && (t = c.resolve(a + i.map[i.width * (o.top + 1) - 1]))), new e(t, n);
	}
	toJSON() {
		return {
			type: "cell",
			anchor: this.$anchorCell.pos,
			head: this.$headCell.pos
		};
	}
	static fromJSON(t, n) {
		return new e(t.resolve(n.anchor), t.resolve(n.head));
	}
	static create(t, n, r = n) {
		return new e(t.resolve(n), t.resolve(r));
	}
	getBookmark() {
		return new XC(this.$anchorCell.pos, this.$headCell.pos);
	}
};
X.prototype.visible = !1, z.jsonID("cell", X);
var XC = class e {
	constructor(e, t) {
		this.anchor = e, this.head = t;
	}
	map(t) {
		return new e(t.map(this.anchor), t.map(this.head));
	}
	resolve(e) {
		let t = e.resolve(this.anchor), n = e.resolve(this.head);
		return t.parent.type.spec.tableRole == "row" && n.parent.type.spec.tableRole == "row" && t.index() < t.parent.childCount && n.index() < n.parent.childCount && GC(t, n) ? new X(t, n) : z.near(n, 1);
	}
};
function ZC(e) {
	if (!(e.selection instanceof X)) return null;
	let t = [];
	return e.selection.forEachCell((e, n) => {
		t.push(cg.node(n, n + e.nodeSize, { class: "selectedCell" }));
	}), G.create(e.doc, t);
}
function QC({ $from: e, $to: t }) {
	if (e.pos == t.pos || e.pos < t.pos - 6) return !1;
	let n = e.pos, r = t.pos, i = e.depth;
	for (; i >= 0 && !(e.after(i + 1) < e.end(i)); i--, n++);
	for (let e = t.depth; e >= 0 && !(t.before(e + 1) > t.start(e)); e--, r--);
	return n == r && /row|table/.test(e.node(i).type.spec.tableRole);
}
function $C({ $from: e, $to: t }) {
	let n, r;
	for (let t = e.depth; t > 0; t--) {
		let r = e.node(t);
		if (r.type.spec.tableRole === "cell" || r.type.spec.tableRole === "header_cell") {
			n = r;
			break;
		}
	}
	for (let e = t.depth; e > 0; e--) {
		let n = t.node(e);
		if (n.type.spec.tableRole === "cell" || n.type.spec.tableRole === "header_cell") {
			r = n;
			break;
		}
	}
	return n !== r && t.parentOffset === 0;
}
function ew(e, t, n) {
	let r = (t || e).selection, i = (t || e).doc, a, o;
	if (r instanceof V && (o = r.node.type.spec.tableRole)) {
		if (o == "cell" || o == "header_cell") a = X.create(i, r.from);
		else if (o == "row") {
			let e = i.resolve(r.from + 1);
			a = X.rowSelection(e, e);
		} else if (!n) {
			let e = jC.get(r.node), t = r.from + 1, n = t + e.map[e.width * e.height - 1];
			a = X.create(i, t + 1, n);
		}
	} else r instanceof B && QC(r) ? a = B.create(i, r.from) : r instanceof B && $C(r) && (a = B.create(i, r.$from.start(), r.$from.end()));
	return a && (t ||= e.tr).setSelection(a), t;
}
var tw = new U("fix-tables");
function nw(e, t, n, r) {
	let i = e.childCount, a = t.childCount;
	outer: for (let o = 0, s = 0; o < a; o++) {
		let a = t.child(o);
		for (let t = s, r = Math.min(i, o + 3); t < r; t++) if (e.child(t) == a) {
			s = t + 1, n += a.nodeSize;
			continue outer;
		}
		r(a, n), s < i && e.child(s).sameMarkup(a) ? nw(e.child(s), a, n + 1, r) : a.nodesBetween(0, a.content.size, r, n + 1), n += a.nodeSize;
	}
}
function rw(e, t) {
	let n, r = (t, r) => {
		t.type.spec.tableRole == "table" && (n = iw(e, t, r, n));
	};
	return t ? t.doc != e.doc && nw(t.doc, e.doc, 0, r) : e.doc.descendants(r), n;
}
function iw(e, t, n, r) {
	let i = jC.get(t);
	if (!i.problems) return r;
	r ||= e.tr;
	let a = [];
	for (let e = 0; e < i.height; e++) a.push(0);
	for (let e = 0; e < i.problems.length; e++) {
		let o = i.problems[e];
		if (o.type == "collision") {
			let e = t.nodeAt(o.pos);
			if (!e) continue;
			let i = e.attrs;
			for (let e = 0; e < i.rowspan; e++) a[o.row + e] += o.n;
			r.setNodeMarkup(r.mapping.map(n + 1 + o.pos), null, qC(i, i.colspan - o.n, o.n));
		} else if (o.type == "missing") a[o.row] += o.n;
		else if (o.type == "overlong_rowspan") {
			let e = t.nodeAt(o.pos);
			if (!e) continue;
			r.setNodeMarkup(r.mapping.map(n + 1 + o.pos), null, {
				...e.attrs,
				rowspan: e.attrs.rowspan - o.n
			});
		} else if (o.type == "colwidth mismatch") {
			let e = t.nodeAt(o.pos);
			if (!e) continue;
			r.setNodeMarkup(r.mapping.map(n + 1 + o.pos), null, {
				...e.attrs,
				colwidth: o.colwidth
			});
		} else if (o.type == "zero_sized") {
			let e = r.mapping.map(n);
			r.delete(e, e + t.nodeSize);
		}
	}
	let o, s;
	for (let e = 0; e < a.length; e++) a[e] && (o ??= e, s = e);
	for (let c = 0, l = n + 1; c < i.height; c++) {
		let n = t.child(c), i = l + n.nodeSize, u = a[c];
		if (u > 0) {
			let t = "cell";
			n.firstChild && (t = n.firstChild.type.spec.tableRole);
			let a = [];
			for (let n = 0; n < u; n++) {
				let n = IC(e.schema)[t].createAndFill();
				n && a.push(n);
			}
			let d = (c == 0 || o == c - 1) && s == c ? l + 1 : i - 1;
			r.insert(r.mapping.map(d), a);
		}
		l = i;
	}
	return r.setMeta(tw, { fixTables: !0 });
}
function aw(e) {
	let t = e.selection, n = VC(e), r = n.node(-1), i = n.start(-1), a = jC.get(r);
	return {
		...t instanceof X ? a.rectBetween(t.$anchorCell.pos - i, t.$headCell.pos - i) : a.findCell(n.pos - i),
		tableStart: i,
		map: a,
		table: r
	};
}
function ow(e, { map: t, tableStart: n, table: r }, i) {
	let a = i > 0 ? -1 : 0;
	YC(t, r, i + a) && (a = i == 0 || i == t.width ? null : 0);
	for (let o = 0; o < t.height; o++) {
		let s = o * t.width + i;
		if (i > 0 && i < t.width && t.map[s - 1] == t.map[s]) {
			let a = t.map[s], c = r.nodeAt(a);
			e.setNodeMarkup(e.mapping.map(n + a), null, JC(c.attrs, i - t.colCount(a))), o += c.attrs.rowspan - 1;
		} else {
			let c = a == null ? IC(r.type.schema).cell : r.nodeAt(t.map[s + a]).type, l = t.positionAt(o, i, r);
			e.insert(e.mapping.map(n + l), c.createAndFill());
		}
	}
	return e;
}
function sw(e, t) {
	if (!BC(e)) return !1;
	if (t) {
		let n = aw(e);
		t(ow(e.tr, n, n.left));
	}
	return !0;
}
function cw(e, t) {
	if (!BC(e)) return !1;
	if (t) {
		let n = aw(e);
		t(ow(e.tr, n, n.right));
	}
	return !0;
}
function lw(e, { map: t, table: n, tableStart: r }, i) {
	let a = e.mapping.maps.length;
	for (let o = 0; o < t.height;) {
		let s = o * t.width + i, c = t.map[s], l = n.nodeAt(c), u = l.attrs;
		if (i > 0 && t.map[s - 1] == c || i < t.width - 1 && t.map[s + 1] == c) e.setNodeMarkup(e.mapping.slice(a).map(r + c), null, qC(u, i - t.colCount(c)));
		else {
			let t = e.mapping.slice(a).map(r + c);
			e.delete(t, t + l.nodeSize);
		}
		o += u.rowspan;
	}
}
function uw(e, t) {
	if (!BC(e)) return !1;
	if (t) {
		let n = aw(e), r = e.tr;
		if (n.left == 0 && n.right == n.map.width) return !1;
		for (let e = n.right - 1; lw(r, n, e), e != n.left; e--) {
			let e = n.tableStart ? r.doc.nodeAt(n.tableStart - 1) : r.doc;
			if (!e) throw RangeError("No table found");
			n.table = e, n.map = jC.get(e);
		}
		t(r);
	}
	return !0;
}
function dw(e, t, n) {
	let r = IC(t.type.schema).header_cell;
	for (let i = 0; i < e.width; i++) if (t.nodeAt(e.map[i + n * e.width])?.type != r) return !1;
	return !0;
}
function fw(e, { map: t, tableStart: n, table: r }, i) {
	let a = n;
	for (let e = 0; e < i; e++) a += r.child(e).nodeSize;
	let o = [], s = i > 0 ? -1 : 0;
	dw(t, r, i + s) && (s = i == 0 || i == t.height ? null : 0);
	for (let a = 0, c = t.width * i; a < t.width; a++, c++) if (i > 0 && i < t.height && t.map[c] == t.map[c - t.width]) {
		let i = t.map[c], o = r.nodeAt(i).attrs;
		e.setNodeMarkup(n + i, null, {
			...o,
			rowspan: o.rowspan + 1
		}), a += o.colspan - 1;
	} else {
		let e = (s == null ? IC(r.type.schema).cell : r.nodeAt(t.map[c + s * t.width])?.type)?.createAndFill();
		e && o.push(e);
	}
	return e.insert(a, IC(r.type.schema).row.create(null, o)), e;
}
function pw(e, t) {
	if (!BC(e)) return !1;
	if (t) {
		let n = aw(e);
		t(fw(e.tr, n, n.top));
	}
	return !0;
}
function mw(e, t) {
	if (!BC(e)) return !1;
	if (t) {
		let n = aw(e);
		t(fw(e.tr, n, n.bottom));
	}
	return !0;
}
function hw(e, { map: t, table: n, tableStart: r }, i) {
	let a = 0;
	for (let e = 0; e < i; e++) a += n.child(e).nodeSize;
	let o = a + n.child(i).nodeSize, s = e.mapping.maps.length;
	e.delete(a + r, o + r);
	let c = /* @__PURE__ */ new Set();
	for (let a = 0, o = i * t.width; a < t.width; a++, o++) {
		let l = t.map[o];
		if (!c.has(l)) {
			if (c.add(l), i > 0 && l == t.map[o - t.width]) {
				let t = n.nodeAt(l).attrs;
				e.setNodeMarkup(e.mapping.slice(s).map(l + r), null, {
					...t,
					rowspan: t.rowspan - 1
				}), a += t.colspan - 1;
			} else if (i < t.height && l == t.map[o + t.width]) {
				let o = n.nodeAt(l), c = o.attrs, u = o.type.create({
					...c,
					rowspan: o.attrs.rowspan - 1
				}, o.content), d = t.positionAt(i + 1, a, n);
				e.insert(e.mapping.slice(s).map(r + d), u), a += c.colspan - 1;
			}
		}
	}
}
function gw(e, t) {
	if (!BC(e)) return !1;
	if (t) {
		let n = aw(e), r = e.tr;
		if (n.top == 0 && n.bottom == n.map.height) return !1;
		for (let e = n.bottom - 1; hw(r, n, e), e != n.top; e--) {
			let e = n.tableStart ? r.doc.nodeAt(n.tableStart - 1) : r.doc;
			if (!e) throw RangeError("No table found");
			n.table = e, n.map = jC.get(n.table);
		}
		t(r);
	}
	return !0;
}
function _w(e) {
	let t = e.content;
	return t.childCount == 1 && t.child(0).isTextblock && t.child(0).childCount == 0;
}
function vw({ width: e, height: t, map: n }, r) {
	let i = r.top * e + r.left, a = i, o = (r.bottom - 1) * e + r.left, s = i + (r.right - r.left - 1);
	for (let t = r.top; t < r.bottom; t++) {
		if (r.left > 0 && n[a] == n[a - 1] || r.right < e && n[s] == n[s + 1]) return !0;
		a += e, s += e;
	}
	for (let a = r.left; a < r.right; a++) {
		if (r.top > 0 && n[i] == n[i - e] || r.bottom < t && n[o] == n[o + e]) return !0;
		i++, o++;
	}
	return !1;
}
function yw(e, t) {
	let n = e.selection;
	if (!(n instanceof X) || n.$anchorCell.pos == n.$headCell.pos) return !1;
	let r = aw(e), { map: i } = r;
	if (vw(i, r)) return !1;
	if (t) {
		let n = e.tr, a = {}, o = I.empty, s, c;
		for (let e = r.top; e < r.bottom; e++) for (let t = r.left; t < r.right; t++) {
			let l = i.map[e * i.width + t], u = r.table.nodeAt(l);
			if (!a[l] && u) {
				if (a[l] = !0, s == null) s = l, c = u;
				else {
					_w(u) || (o = o.append(u.content));
					let e = n.mapping.map(l + r.tableStart);
					n.delete(e, e + u.nodeSize);
				}
			}
		}
		if (s == null || c == null) return !0;
		if (n.setNodeMarkup(s + r.tableStart, null, {
			...JC(c.attrs, c.attrs.colspan, r.right - r.left - c.attrs.colspan),
			rowspan: r.bottom - r.top
		}), o.size > 0) {
			let e = s + 1 + c.content.size, t = _w(c) ? s + 1 : e;
			n.replaceWith(t + r.tableStart, e + r.tableStart, o);
		}
		n.setSelection(new X(n.doc.resolve(s + r.tableStart))), t(n);
	}
	return !0;
}
function bw(e, t) {
	let n = IC(e.schema);
	return xw(({ node: e }) => n[e.type.spec.tableRole])(e, t);
}
function xw(e) {
	return (t, n) => {
		let r = t.selection, i, a;
		if (r instanceof X) {
			if (r.$anchorCell.pos != r.$headCell.pos) return !1;
			i = r.$anchorCell.nodeAfter, a = r.$anchorCell.pos;
		} else {
			if (i = zC(r.$from), !i) return !1;
			a = RC(r.$from)?.pos;
		}
		if (i == null || a == null || i.attrs.colspan == 1 && i.attrs.rowspan == 1) return !1;
		if (n) {
			let o = i.attrs, s = [], c = o.colwidth;
			o.rowspan > 1 && (o = {
				...o,
				rowspan: 1
			}), o.colspan > 1 && (o = {
				...o,
				colspan: 1
			});
			let l = aw(t), u = t.tr;
			for (let e = 0; e < l.right - l.left; e++) s.push(c ? {
				...o,
				colwidth: c && c[e] ? [c[e]] : null
			} : o);
			let d;
			for (let t = l.top; t < l.bottom; t++) {
				let n = l.map.positionAt(t, l.left, l.table);
				t == l.top && (n += i.nodeSize);
				for (let r = l.left, a = 0; r < l.right; r++, a++) (r != l.left || t != l.top) && u.insert(d = u.mapping.map(n + l.tableStart, 1), e({
					node: i,
					row: t,
					col: r
				}).createAndFill(s[a]));
			}
			u.setNodeMarkup(a, e({
				node: i,
				row: l.top,
				col: l.left
			}), s[0]), r instanceof X && u.setSelection(new X(u.doc.resolve(r.$anchorCell.pos), d ? u.doc.resolve(d) : void 0)), n(u);
		}
		return !0;
	};
}
function Sw(e, t) {
	return function(n, r) {
		if (!BC(n)) return !1;
		let i = VC(n);
		if (i.nodeAfter.attrs[e] === t) return !1;
		if (r) {
			let a = n.tr;
			n.selection instanceof X ? n.selection.forEachCell((n, r) => {
				n.attrs[e] !== t && a.setNodeMarkup(r, null, {
					...n.attrs,
					[e]: t
				});
			}) : a.setNodeMarkup(i.pos, null, {
				...i.nodeAfter.attrs,
				[e]: t
			}), r(a);
		}
		return !0;
	};
}
function Cw(e) {
	return function(t, n) {
		if (!BC(t)) return !1;
		if (n) {
			let r = IC(t.schema), i = aw(t), a = t.tr, o = i.map.cellsInRect(e == "column" ? {
				left: i.left,
				top: 0,
				right: i.right,
				bottom: i.map.height
			} : e == "row" ? {
				left: 0,
				top: i.top,
				right: i.map.width,
				bottom: i.bottom
			} : i), s = o.map((e) => i.table.nodeAt(e));
			for (let e = 0; e < o.length; e++) s[e].type == r.header_cell && a.setNodeMarkup(i.tableStart + o[e], r.cell, s[e].attrs);
			if (a.steps.length === 0) for (let e = 0; e < o.length; e++) a.setNodeMarkup(i.tableStart + o[e], r.header_cell, s[e].attrs);
			n(a);
		}
		return !0;
	};
}
function ww(e, t, n) {
	let r = t.map.cellsInRect({
		left: 0,
		top: 0,
		right: e == "row" ? t.map.width : 1,
		bottom: e == "column" ? t.map.height : 1
	});
	for (let e = 0; e < r.length; e++) {
		let i = t.table.nodeAt(r[e]);
		if (i && i.type !== n.header_cell) return !1;
	}
	return !0;
}
function Tw(e, t) {
	return t ||= { useDeprecatedLogic: !1 }, t.useDeprecatedLogic ? Cw(e) : function(t, n) {
		if (!BC(t)) return !1;
		if (n) {
			let r = IC(t.schema), i = aw(t), a = t.tr, o = ww("row", i, r), s = ww("column", i, r), c = (e === "column" ? o : e === "row" && s) ? 1 : 0, l = e == "column" ? {
				left: 0,
				top: c,
				right: 1,
				bottom: i.map.height
			} : e == "row" ? {
				left: c,
				top: 0,
				right: i.map.width,
				bottom: 1
			} : i, u = e == "column" ? s ? r.cell : r.header_cell : e == "row" ? o ? r.cell : r.header_cell : r.cell;
			i.map.cellsInRect(l).forEach((e) => {
				let t = e + i.tableStart, n = a.doc.nodeAt(t);
				n && a.setNodeMarkup(t, u, n.attrs);
			}), n(a);
		}
		return !0;
	};
}
Tw("row", { useDeprecatedLogic: !0 }), Tw("column", { useDeprecatedLogic: !0 });
var Ew = Tw("cell", { useDeprecatedLogic: !0 });
function Dw(e, t) {
	if (t < 0) {
		let t = e.nodeBefore;
		if (t) return e.pos - t.nodeSize;
		for (let t = e.index(-1) - 1, n = e.before(); t >= 0; t--) {
			let r = e.node(-1).child(t), i = r.lastChild;
			if (i) return n - 1 - i.nodeSize;
			n -= r.nodeSize;
		}
	} else {
		if (e.index() < e.parent.childCount - 1) return e.pos + e.nodeAfter.nodeSize;
		let t = e.node(-1);
		for (let n = e.indexAfter(-1), r = e.after(); n < t.childCount; n++) {
			let e = t.child(n);
			if (e.childCount) return r + 1;
			r += e.nodeSize;
		}
	}
	return null;
}
function Ow(e) {
	return function(t, n) {
		if (!BC(t)) return !1;
		let r = Dw(VC(t), e);
		if (r == null) return !1;
		if (n) {
			let e = t.doc.resolve(r);
			n(t.tr.setSelection(B.between(e, WC(e))).scrollIntoView());
		}
		return !0;
	};
}
function kw(e, t) {
	let n = e.selection.$anchor;
	for (let r = n.depth; r > 0; r--) if (n.node(r).type.spec.tableRole == "table") return t && t(e.tr.delete(n.before(r), n.after(r)).scrollIntoView()), !0;
	return !1;
}
function Aw(e, t) {
	let n = e.selection;
	if (!(n instanceof X)) return !1;
	if (t) {
		let r = e.tr, i = IC(e.schema).cell.createAndFill().content;
		n.forEachCell((e, t) => {
			e.content.eq(i) || r.replace(r.mapping.map(t + 1), r.mapping.map(t + e.nodeSize - 1), new R(i, 0, 0));
		}), r.docChanged && t(r);
	}
	return !0;
}
function jw(e) {
	if (e.size === 0) return null;
	let { content: t, openStart: n, openEnd: r } = e;
	for (; t.childCount == 1 && (n > 0 && r > 0 || t.child(0).type.spec.tableRole == "table");) n--, r--, t = t.child(0).content;
	let i = t.child(0), a = i.type.spec.tableRole, o = i.type.schema, s = [];
	if (a == "row") for (let e = 0; e < t.childCount; e++) {
		let i = t.child(e).content, a = e ? 0 : Math.max(0, n - 1), c = e < t.childCount - 1 ? 0 : Math.max(0, r - 1);
		(a || c) && (i = Nw(IC(o).row, new R(i, a, c)).content), s.push(i);
	}
	else if (a == "cell" || a == "header_cell") s.push(n || r ? Nw(IC(o).row, new R(t, n, r)).content : t);
	else return null;
	return Mw(o, s);
}
function Mw(e, t) {
	let n = [];
	for (let e = 0; e < t.length; e++) {
		let r = t[e];
		for (let t = r.childCount - 1; t >= 0; t--) {
			let { rowspan: i, colspan: a } = r.child(t).attrs;
			for (let t = e; t < e + i; t++) n[t] = (n[t] || 0) + a;
		}
	}
	let r = 0;
	for (let e = 0; e < n.length; e++) r = Math.max(r, n[e]);
	for (let i = 0; i < n.length; i++) if (i >= t.length && t.push(I.empty), n[i] < r) {
		let a = IC(e).cell.createAndFill(), o = [];
		for (let e = n[i]; e < r; e++) o.push(a);
		t[i] = t[i].append(I.from(o));
	}
	return {
		height: t.length,
		width: r,
		rows: t
	};
}
function Nw(e, t) {
	let n = e.createAndFill();
	return new dd(n).replace(0, n.content.size, t).doc;
}
function Pw({ width: e, height: t, rows: n }, r, i) {
	if (e != r) {
		let t = [], i = [];
		for (let e = 0; e < n.length; e++) {
			let a = n[e], o = [];
			for (let n = t[e] || 0, i = 0; n < r; i++) {
				let s = a.child(i % a.childCount);
				n + s.attrs.colspan > r && (s = s.type.createChecked(qC(s.attrs, s.attrs.colspan, n + s.attrs.colspan - r), s.content)), o.push(s), n += s.attrs.colspan;
				for (let n = 1; n < s.attrs.rowspan; n++) t[e + n] = (t[e + n] || 0) + s.attrs.colspan;
			}
			i.push(I.from(o));
		}
		n = i, e = r;
	}
	if (t != i) {
		let e = [];
		for (let r = 0, a = 0; r < i; r++, a++) {
			let o = [], s = n[a % t];
			for (let e = 0; e < s.childCount; e++) {
				let t = s.child(e);
				r + t.attrs.rowspan > i && (t = t.type.create({
					...t.attrs,
					rowspan: Math.max(1, i - t.attrs.rowspan)
				}, t.content)), o.push(t);
			}
			e.push(I.from(o));
		}
		n = e, t = i;
	}
	return {
		width: e,
		height: t,
		rows: n
	};
}
function Fw(e, t, n, r, i, a, o) {
	let s = e.doc.type.schema, c = IC(s), l, u;
	if (i > t.width) for (let a = 0, s = 0; a < t.height; a++) {
		let d = n.child(a);
		s += d.nodeSize;
		let f = [], p;
		p = d.lastChild == null || d.lastChild.type == c.cell ? l ||= c.cell.createAndFill() : u ||= c.header_cell.createAndFill();
		for (let e = t.width; e < i; e++) f.push(p);
		e.insert(e.mapping.slice(o).map(s - 1 + r), f);
	}
	if (a > t.height) {
		let s = [];
		for (let e = 0, r = (t.height - 1) * t.width; e < Math.max(t.width, i); e++) {
			let i = e >= t.width ? !1 : n.nodeAt(t.map[r + e]).type == c.header_cell;
			s.push(i ? u ||= c.header_cell.createAndFill() : l ||= c.cell.createAndFill());
		}
		let d = c.row.create(null, I.from(s)), f = [];
		for (let e = t.height; e < a; e++) f.push(d);
		e.insert(e.mapping.slice(o).map(r + n.nodeSize - 2), f);
	}
	return !!(l || u);
}
function Iw(e, t, n, r, i, a, o, s) {
	if (o == 0 || o == t.height) return !1;
	let c = !1;
	for (let l = i; l < a; l++) {
		let i = o * t.width + l, a = t.map[i];
		if (t.map[i - t.width] == a) {
			c = !0;
			let i = n.nodeAt(a), { top: u, left: d } = t.findCell(a);
			e.setNodeMarkup(e.mapping.slice(s).map(a + r), null, {
				...i.attrs,
				rowspan: o - u
			}), e.insert(e.mapping.slice(s).map(t.positionAt(o, d, n)), i.type.createAndFill({
				...i.attrs,
				rowspan: u + i.attrs.rowspan - o
			})), l += i.attrs.colspan - 1;
		}
	}
	return c;
}
function Lw(e, t, n, r, i, a, o, s) {
	if (o == 0 || o == t.width) return !1;
	let c = !1;
	for (let l = i; l < a; l++) {
		let i = l * t.width + o, a = t.map[i];
		if (t.map[i - 1] == a) {
			c = !0;
			let i = n.nodeAt(a), u = t.colCount(a), d = e.mapping.slice(s).map(a + r);
			e.setNodeMarkup(d, null, qC(i.attrs, o - u, i.attrs.colspan - (o - u))), e.insert(d + i.nodeSize, i.type.createAndFill(qC(i.attrs, 0, o - u))), l += i.attrs.rowspan - 1;
		}
	}
	return c;
}
function Rw(e, t, n, r, i) {
	let a = n ? e.doc.nodeAt(n - 1) : e.doc;
	if (!a) throw Error("No table found");
	let o = jC.get(a), { top: s, left: c } = r, l = c + i.width, u = s + i.height, d = e.tr, f = 0;
	function p() {
		if (a = n ? d.doc.nodeAt(n - 1) : d.doc, !a) throw Error("No table found");
		o = jC.get(a), f = d.mapping.maps.length;
	}
	Fw(d, o, a, n, l, u, f) && p(), Iw(d, o, a, n, c, l, s, f) && p(), Iw(d, o, a, n, c, l, u, f) && p(), Lw(d, o, a, n, s, u, c, f) && p(), Lw(d, o, a, n, s, u, l, f) && p();
	for (let e = s; e < u; e++) {
		let t = o.positionAt(e, c, a), r = o.positionAt(e, l, a);
		d.replace(d.mapping.slice(f).map(t + n), d.mapping.slice(f).map(r + n), new R(i.rows[e - s], 0, 0));
	}
	p(), d.setSelection(new X(d.doc.resolve(n + o.positionAt(s, c, a)), d.doc.resolve(n + o.positionAt(u - 1, l - 1, a)))), t(d);
}
var zw = d_({
	ArrowLeft: Vw("horiz", -1),
	ArrowRight: Vw("horiz", 1),
	ArrowUp: Vw("vert", -1),
	ArrowDown: Vw("vert", 1),
	"Shift-ArrowLeft": Hw("horiz", -1),
	"Shift-ArrowRight": Hw("horiz", 1),
	"Shift-ArrowUp": Hw("vert", -1),
	"Shift-ArrowDown": Hw("vert", 1),
	Backspace: Aw,
	"Mod-Backspace": Aw,
	Delete: Aw,
	"Mod-Delete": Aw
});
function Bw(e, t, n) {
	return !n.eq(e.selection) && (t && t(e.tr.setSelection(n).scrollIntoView()), !0);
}
function Vw(e, t) {
	return (n, r, i) => {
		if (!i) return !1;
		let a = n.selection;
		if (a instanceof X) return Bw(n, r, z.near(a.$headCell, t));
		if (e != "horiz" && !a.empty) return !1;
		let o = Kw(i, e, t);
		if (o == null) return !1;
		if (e == "horiz") return Bw(n, r, z.near(n.doc.resolve(a.head + t), t));
		{
			let i = n.doc.resolve(o), a = KC(i, e, t), s;
			return s = a ? z.near(a, 1) : t < 0 ? z.near(n.doc.resolve(i.before(-1)), -1) : z.near(n.doc.resolve(i.after(-1)), 1), Bw(n, r, s);
		}
	};
}
function Hw(e, t) {
	return (n, r, i) => {
		if (!i) return !1;
		let a = n.selection, o;
		if (a instanceof X) o = a;
		else {
			let r = Kw(i, e, t);
			if (r == null) return !1;
			o = new X(n.doc.resolve(r));
		}
		let s = KC(o.$headCell, e, t);
		return s ? Bw(n, r, new X(o.$anchorCell, s)) : !1;
	};
}
function Uw(e, t) {
	let n = e.state.doc, r = RC(n.resolve(t));
	return r ? (e.dispatch(e.state.tr.setSelection(new X(r))), !0) : !1;
}
function Ww(e, t, n) {
	if (!BC(e.state)) return !1;
	let r = jw(n), i = e.state.selection;
	if (i instanceof X) {
		r ||= {
			width: 1,
			height: 1,
			rows: [I.from(Nw(IC(e.state.schema).cell, n))]
		};
		let t = i.$anchorCell.node(-1), a = i.$anchorCell.start(-1), o = jC.get(t).rectBetween(i.$anchorCell.pos - a, i.$headCell.pos - a);
		return r = Pw(r, o.right - o.left, o.bottom - o.top), Rw(e.state, e.dispatch, a, o, r), !0;
	}
	if (r) {
		let t = VC(e.state), n = t.start(-1);
		return Rw(e.state, e.dispatch, n, jC.get(t.node(-1)).findCell(t.pos - n), r), !0;
	}
	return !1;
}
function Gw(e, t) {
	if (t.button != 0 || t.ctrlKey || t.metaKey) return;
	let n = qw(e, t.target), r;
	if (t.shiftKey && e.state.selection instanceof X) i(e.state.selection.$anchorCell, t), t.preventDefault();
	else if (t.shiftKey && n && (r = RC(e.state.selection.$anchor)) != null && Jw(e, t)?.pos != r.pos) i(r, t), t.preventDefault();
	else if (!n) return;
	function i(t, n) {
		let r = Jw(e, n), i = LC.getState(e.state) == null;
		if (!r || !GC(t, r)) {
			if (i) r = t;
			else return;
		}
		let a = new X(t, r);
		if (i || !e.state.selection.eq(a)) {
			let n = e.state.tr.setSelection(a);
			i && n.setMeta(LC, t.pos), e.dispatch(n);
		}
	}
	function a() {
		e.root.removeEventListener("mouseup", a), e.root.removeEventListener("dragstart", a), e.root.removeEventListener("mousemove", o), LC.getState(e.state) != null && e.dispatch(e.state.tr.setMeta(LC, -1));
	}
	function o(r) {
		let o = r, s = LC.getState(e.state), c;
		if (s != null) c = e.state.doc.resolve(s);
		else if (qw(e, o.target) != n && (c = Jw(e, t), !c)) return a();
		c && i(c, o);
	}
	e.root.addEventListener("mouseup", a), e.root.addEventListener("dragstart", a), e.root.addEventListener("mousemove", o);
}
function Kw(e, t, n) {
	if (!(e.state.selection instanceof B)) return null;
	let { $head: r } = e.state.selection;
	for (let i = r.depth - 1; i >= 0; i--) {
		let a = r.node(i);
		if ((n < 0 ? r.index(i) : r.indexAfter(i)) != (n < 0 ? 0 : a.childCount)) return null;
		if (a.type.spec.tableRole == "cell" || a.type.spec.tableRole == "header_cell") {
			let a = r.before(i), o = t == "vert" ? n > 0 ? "down" : "up" : n > 0 ? "right" : "left";
			return e.endOfTextblock(o) ? a : null;
		}
	}
	return null;
}
function qw(e, t) {
	for (; t && t != e.dom; t = t.parentNode) if (t.nodeName == "TD" || t.nodeName == "TH") return t;
	return null;
}
function Jw(e, t) {
	let n = e.posAtCoords({
		left: t.clientX,
		top: t.clientY
	});
	if (!n) return null;
	let { inside: r, pos: i } = n;
	return r >= 0 && RC(e.state.doc.resolve(r)) || RC(e.state.doc.resolve(i));
}
var Yw = class {
	constructor(e, t) {
		this.node = e, this.defaultCellMinWidth = t, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), this.table.style.setProperty("--default-cell-min-width", `${t}px`), this.colgroup = this.table.appendChild(document.createElement("colgroup")), Xw(e, this.colgroup, this.table, t), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
	}
	update(e) {
		return e.type == this.node.type && (this.node = e, Xw(e, this.colgroup, this.table, this.defaultCellMinWidth), !0);
	}
	ignoreMutation(e) {
		return e.type == "attributes" && (e.target == this.table || this.colgroup.contains(e.target));
	}
};
function Xw(e, t, n, r, i, a) {
	let o = 0, s = !0, c = t.firstChild, l = e.firstChild;
	if (l) {
		for (let e = 0, n = 0; e < l.childCount; e++) {
			let { colspan: u, colwidth: d } = l.child(e).attrs;
			for (let e = 0; e < u; e++, n++) {
				let l = i == n ? a : d && d[e], u = l ? l + "px" : "";
				if (o += l || r, l || (s = !1), c) c.style.width != u && (c.style.width = u), c = c.nextSibling;
				else {
					let e = document.createElement("col");
					e.style.width = u, t.appendChild(e);
				}
			}
		}
		for (; c;) {
			var u;
			let e = c.nextSibling;
			(u = c.parentNode) == null || u.removeChild(c), c = e;
		}
		s ? (n.style.width = o + "px", n.style.minWidth = "") : (n.style.width = "", n.style.minWidth = o + "px");
	}
}
var Zw = new U("tableColumnResizing");
function Qw({ handleWidth: e = 5, cellMinWidth: t = 25, defaultCellMinWidth: n = 100, View: r = Yw, lastColumnResizable: i = !0 } = {}) {
	let a = new H({
		key: Zw,
		state: {
			init(e, t) {
				var i;
				let o = (i = a.spec) == null || (i = i.props) == null ? void 0 : i.nodeViews, s = IC(t.schema).table.name;
				return r && o && (o[s] = (e, t) => new r(e, n, t)), new $w(-1, !1);
			},
			apply(e, t) {
				return t.apply(e);
			}
		},
		props: {
			attributes: (e) => {
				let t = Zw.getState(e);
				return t && t.activeHandle > -1 ? { class: "resize-cursor" } : {};
			},
			handleDOMEvents: {
				mousemove: (t, n) => {
					eT(t, n, e, i);
				},
				mouseleave: (e) => {
					tT(e);
				},
				mousedown: (e, r) => {
					nT(e, r, t, n);
				}
			},
			decorations: (e) => {
				let t = Zw.getState(e);
				if (t && t.activeHandle > -1) return dT(e, t.activeHandle);
			},
			nodeViews: {}
		}
	});
	return a;
}
var $w = class e {
	constructor(e, t) {
		this.activeHandle = e, this.dragging = t;
	}
	apply(t) {
		let n = this, r = t.getMeta(Zw);
		if (r && r.setHandle != null) return new e(r.setHandle, !1);
		if (r && r.setDragging !== void 0) return new e(n.activeHandle, r.setDragging);
		if (n.activeHandle > -1 && t.docChanged) {
			let r = t.mapping.map(n.activeHandle, -1);
			return UC(t.doc.resolve(r)) || (r = -1), new e(r, n.dragging);
		}
		return n;
	}
};
function eT(e, t, n, r) {
	if (!e.editable) return;
	let i = Zw.getState(e.state);
	if (i && !i.dragging) {
		let a = iT(t.target), o = -1;
		if (a) {
			let { left: r, right: i } = a.getBoundingClientRect();
			t.clientX - r <= n ? o = aT(e, t, "left", n) : i - t.clientX <= n && (o = aT(e, t, "right", n));
		}
		if (o != i.activeHandle) {
			if (!r && o !== -1) {
				let t = e.state.doc.resolve(o), n = t.node(-1), r = jC.get(n), i = t.start(-1);
				if (r.colCount(t.pos - i) + t.nodeAfter.attrs.colspan - 1 == r.width - 1) return;
			}
			sT(e, o);
		}
	}
}
function tT(e) {
	if (!e.editable) return;
	let t = Zw.getState(e.state);
	t && t.activeHandle > -1 && !t.dragging && sT(e, -1);
}
function nT(e, t, n, r) {
	if (!e.editable) return !1;
	let i = e.dom.ownerDocument.defaultView ?? window, a = Zw.getState(e.state);
	if (!a || a.activeHandle == -1 || a.dragging) return !1;
	let o = e.state.doc.nodeAt(a.activeHandle), s = rT(e, a.activeHandle, o.attrs);
	e.dispatch(e.state.tr.setMeta(Zw, { setDragging: {
		startX: t.clientX,
		startWidth: s
	} }));
	function c(t) {
		i.removeEventListener("mouseup", c), i.removeEventListener("mousemove", l);
		let r = Zw.getState(e.state);
		r?.dragging && (cT(e, r.activeHandle, oT(r.dragging, t, n)), e.dispatch(e.state.tr.setMeta(Zw, { setDragging: null })));
	}
	function l(t) {
		if (!t.which) return c(t);
		let i = Zw.getState(e.state);
		if (i && i.dragging) {
			let a = oT(i.dragging, t, n);
			lT(e, i.activeHandle, a, r);
		}
	}
	return lT(e, a.activeHandle, s, r), i.addEventListener("mouseup", c), i.addEventListener("mousemove", l), t.preventDefault(), !0;
}
function rT(e, t, { colspan: n, colwidth: r }) {
	let i = r && r[r.length - 1];
	if (i) return i;
	let a = e.domAtPos(t), o = a.node.childNodes[a.offset].offsetWidth, s = n;
	if (r) for (let e = 0; e < n; e++) r[e] && (o -= r[e], s--);
	return o / s;
}
function iT(e) {
	for (; e && e.nodeName != "TD" && e.nodeName != "TH";) e = e.classList && e.classList.contains("ProseMirror") ? null : e.parentNode;
	return e;
}
function aT(e, t, n, r) {
	let i = n == "right" ? -r : r, a = e.posAtCoords({
		left: t.clientX + i,
		top: t.clientY
	});
	if (!a) return -1;
	let { pos: o } = a, s = RC(e.state.doc.resolve(o));
	if (!s) return -1;
	if (n == "right") return s.pos;
	let c = jC.get(s.node(-1)), l = s.start(-1), u = c.map.indexOf(s.pos - l);
	return u % c.width == 0 ? -1 : l + c.map[u - 1];
}
function oT(e, t, n) {
	let r = t.clientX - e.startX;
	return Math.max(n, e.startWidth + r);
}
function sT(e, t) {
	e.dispatch(e.state.tr.setMeta(Zw, { setHandle: t }));
}
function cT(e, t, n) {
	let r = e.state.doc.resolve(t), i = r.node(-1), a = jC.get(i), o = r.start(-1), s = a.colCount(r.pos - o) + r.nodeAfter.attrs.colspan - 1, c = e.state.tr;
	for (let e = 0; e < a.height; e++) {
		let t = e * a.width + s;
		if (e && a.map[t] == a.map[t - a.width]) continue;
		let r = a.map[t], l = i.nodeAt(r).attrs, u = l.colspan == 1 ? 0 : s - a.colCount(r);
		if (l.colwidth && l.colwidth[u] == n) continue;
		let d = l.colwidth ? l.colwidth.slice() : uT(l.colspan);
		d[u] = n, c.setNodeMarkup(o + r, null, {
			...l,
			colwidth: d
		});
	}
	c.docChanged && e.dispatch(c);
}
function lT(e, t, n, r) {
	let i = e.state.doc.resolve(t), a = i.node(-1), o = i.start(-1), s = jC.get(a).colCount(i.pos - o) + i.nodeAfter.attrs.colspan - 1, c = e.domAtPos(i.start(-1)).node;
	for (; c && c.nodeName != "TABLE";) c = c.parentNode;
	c && Xw(a, c.firstChild, c, r, s, n);
}
function uT(e) {
	return Array(e).fill(0);
}
function dT(e, t) {
	let n = [], r = e.doc.resolve(t), i = r.node(-1);
	if (!i) return G.empty;
	let a = jC.get(i), o = r.start(-1), s = a.colCount(r.pos - o) + r.nodeAfter.attrs.colspan - 1;
	for (let t = 0; t < a.height; t++) {
		let r = s + t * a.width;
		if ((s == a.width - 1 || a.map[r] != a.map[r + 1]) && (t == 0 || a.map[r] != a.map[r - a.width])) {
			let t = a.map[r], s = o + t + i.nodeAt(t).nodeSize - 1, c = document.createElement("div");
			c.className = "column-resize-handle", Zw.getState(e)?.dragging && n.push(cg.node(o + t, o + t + i.nodeAt(t).nodeSize, { class: "column-resize-dragging" })), n.push(cg.widget(s, c));
		}
	}
	return G.create(e.doc, n);
}
function fT({ allowTableNodeSelection: e = !1 } = {}) {
	return new H({
		key: LC,
		state: {
			init() {
				return null;
			},
			apply(e, t) {
				let n = e.getMeta(LC);
				if (n != null) return n == -1 ? null : n;
				if (t == null || !e.docChanged) return t;
				let { deleted: r, pos: i } = e.mapping.mapResult(t);
				return r ? null : i;
			}
		},
		props: {
			decorations: ZC,
			handleDOMEvents: { mousedown: Gw },
			createSelectionBetween(e) {
				return LC.getState(e.state) == null ? null : e.state.selection;
			},
			handleTripleClick: Uw,
			handleKeyDown: zw,
			handlePaste: Ww
		},
		appendTransaction(t, n, r) {
			return ew(r, rw(r, n), e);
		}
	});
}
// node_modules/@tiptap/extension-table/dist/index.js
function pT(e) {
	return e === "left" || e === "right" || e === "center" ? e : null;
}
function mT(e) {
	let t = (e.style.textAlign || "").trim().toLowerCase(), n = (e.getAttribute("align") || "").trim().toLowerCase();
	return pT(t || n);
}
function hT(e) {
	return pT(e?.align);
}
function gT() {
	return {
		default: null,
		parseHTML: (e) => mT(e),
		renderHTML: (e) => {
			let t = pT(e.align);
			return yx(t) ? { style: `text-align: ${t}` } : {};
		}
	};
}
function _T(e) {
	let t = e.parentElement, n = e.closest("table");
	if (!t || !n) return null;
	let r = Array.from(t.children).indexOf(e), i = n.querySelectorAll("colgroup > col")[r]?.getAttribute("width");
	return i ? [parseInt(i, 10)] : null;
}
function vT(e) {
	let t = e.getAttribute("colwidth");
	return t ? t.split(",").map((e) => parseInt(e, 10)) : _T(e);
}
var yT = /[ \t\r\n\f]+/g;
function bT(e) {
	return e.children.length > 0 ? !1 : (e.textContent ?? "").replace(yT, "") === "";
}
function xT(e) {
	let t = e.createAndFill();
	if (!t) throw Error(`[tiptap error]: "${e.name}" has no default content to backfill.`);
	return t.content;
}
function ST(e, t, n) {
	if (!(n in t)) return;
	let r = t[n];
	(r === 1 || r === "1" || r == null) && delete e[n];
}
var CT = fS.create({
	name: "tableCell",
	addOptions() {
		return { HTMLAttributes: {} };
	},
	content: "block+",
	addAttributes() {
		return {
			colspan: { default: 1 },
			rowspan: { default: 1 },
			colwidth: {
				default: null,
				parseHTML: vT
			},
			align: gT()
		};
	},
	tableRole: "cell",
	isolating: !0,
	parseHTML() {
		return [{
			tag: "td",
			getAttrs: (e) => bT(e) ? {} : !1,
			getContent: (e, t) => xT(t.nodes[this.name])
		}, { tag: "td" }];
	},
	renderHTML({ HTMLAttributes: e }) {
		let t = J(this.options.HTMLAttributes, e);
		return ST(t, e, "colspan"), ST(t, e, "rowspan"), [
			"td",
			t,
			0
		];
	}
}), wT = fS.create({
	name: "tableHeader",
	addOptions() {
		return { HTMLAttributes: {} };
	},
	content: "block+",
	addAttributes() {
		return {
			colspan: { default: 1 },
			rowspan: { default: 1 },
			colwidth: {
				default: null,
				parseHTML: vT
			},
			align: gT()
		};
	},
	tableRole: "header_cell",
	isolating: !0,
	parseHTML() {
		return [{
			tag: "th",
			getAttrs: (e) => bT(e) ? {} : !1,
			getContent: (e, t) => xT(t.nodes[this.name])
		}, { tag: "th" }];
	},
	renderHTML({ HTMLAttributes: e }) {
		let t = J(this.options.HTMLAttributes, e);
		return ST(t, e, "colspan"), ST(t, e, "rowspan"), [
			"th",
			t,
			0
		];
	}
}), TT = fS.create({
	name: "tableRow",
	addOptions() {
		return { HTMLAttributes: {} };
	},
	content: "(tableCell | tableHeader)*",
	tableRole: "row",
	parseHTML() {
		return [{ tag: "tr" }];
	},
	renderHTML({ HTMLAttributes: e }) {
		return [
			"tr",
			J(this.options.HTMLAttributes, e),
			0
		];
	}
});
function ET(e, t) {
	return t ? ["width", `${Math.max(t, e)}px`] : ["min-width", `${e}px`];
}
function DT(e, t, n, r, i, a) {
	let o = 0, s = !0, c = t.firstChild, l = e.firstChild;
	if (l !== null) for (let e = 0, n = 0; e < l.childCount; e += 1) {
		let { colspan: u, colwidth: d } = l.child(e).attrs;
		for (let e = 0; e < u; e += 1, n += 1) {
			let l = i === n ? a : d && d[e], u = l ? `${l}px` : "";
			if (o += l || r, l || (s = !1), c) {
				if (c.style.width !== u) {
					let [e, t] = ET(r, l);
					c.style.setProperty(e, t);
				}
				c = c.nextSibling;
			} else {
				let e = document.createElement("col"), [n, i] = ET(r, l);
				e.style.setProperty(n, i), t.appendChild(e);
			}
		}
	}
	for (; c;) {
		var u;
		let e = c.nextSibling;
		(u = c.parentNode) == null || u.removeChild(c), c = e;
	}
	let d = e.attrs.style && typeof e.attrs.style == "string" && /\bwidth\s*:/i.test(e.attrs.style);
	s && !d ? (n.style.width = `${o}px`, n.style.minWidth = "") : (n.style.width = "", n.style.minWidth = `${o}px`);
}
var OT = class {
	constructor(e, t, n, r = {}) {
		this.node = e, this.cellMinWidth = t, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table"));
		for (let [e, t] of Object.entries(r)) t != null && (e === "style" ? this.table.style.cssText = String(t) : this.table.setAttribute(e, String(t)));
		e.attrs.style && (this.table.style.cssText = e.attrs.style), this.colgroup = this.table.appendChild(document.createElement("colgroup")), DT(e, this.colgroup, this.table, t), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
	}
	update(e) {
		return e.sameMarkup(this.node) ? (this.node = e, DT(e, this.colgroup, this.table, this.cellMinWidth), !0) : !1;
	}
	ignoreMutation(e) {
		let t = e.target, n = this.dom.contains(t), r = this.contentDOM.contains(t);
		return !(!n || r || e.type !== "attributes" && e.type !== "childList" && e.type !== "characterData");
	}
};
function kT(e, t, n, r) {
	let i = 0, a = !0, o = [], s = e.firstChild;
	if (!s) return {};
	for (let e = 0, c = 0; e < s.childCount; e += 1) {
		let { colspan: l, colwidth: u } = s.child(e).attrs;
		for (let e = 0; e < l; e += 1, c += 1) {
			let s = n === c ? r : u && u[e];
			i += s || t, s || (a = !1);
			let [l, d] = ET(t, s);
			o.push(["col", { style: `${l}: ${d}` }]);
		}
	}
	let c = a ? `${i}px` : "", l = a ? "" : `${i}px`;
	return {
		colgroup: [
			"colgroup",
			{},
			...o
		],
		tableWidth: c,
		tableMinWidth: l
	};
}
function AT(e, t) {
	return t ? e.createChecked(null, t) : e.createAndFill();
}
function jT(e) {
	if (e.cached.tableNodeTypes) return e.cached.tableNodeTypes;
	let t = {};
	return Object.keys(e.nodes).forEach((n) => {
		let r = e.nodes[n];
		r.spec.tableRole && (t[r.spec.tableRole] = r);
	}), e.cached.tableNodeTypes = t, t;
}
function MT(e, t, n, r, i) {
	let a = jT(e), o = [], s = [];
	for (let e = 0; e < n; e += 1) {
		let e = AT(a.cell, i);
		if (e && s.push(e), r) {
			let e = AT(a.header_cell, i);
			e && o.push(e);
		}
	}
	let c = [];
	for (let e = 0; e < t; e += 1) c.push(a.row.createChecked(null, r && e === 0 ? o : s));
	return a.table.createChecked(null, c);
}
function NT(e) {
	return e instanceof X;
}
var PT = ({ editor: e }) => {
	let { selection: t } = e.state;
	if (!NT(t)) return !1;
	let n = 0;
	return oy(t.ranges[0].$from, (e) => e.type.name === "table")?.node.descendants((e) => {
		if (e.type.name === "table") return !1;
		["tableCell", "tableHeader"].includes(e.type.name) && (n += 1);
	}), n === t.ranges.length && (e.commands.deleteTable(), !0);
};
function FT(e, t) {
	let n = e.mapping.map(t);
	if (oy(e.selection.$from, (e) => e.type.name === "table")?.pos === n) return;
	let r = e.doc.nodeAt(n);
	if (!r) return;
	let i = n + r.nodeSize - 1;
	e.setSelection(B.near(e.doc.resolve(i), -1));
}
function IT(e) {
	let t = "", n = 0;
	for (; n < e.length;) {
		if (e[n] === "\\" && n + 1 < e.length) {
			t += e[n] + e[n + 1], n += 2;
			continue;
		}
		if (e[n] !== "`") {
			t += e[n++];
			continue;
		}
		let r = 0;
		for (; n + r < e.length && e[n + r] === "`";) r += 1;
		let i = n + r, a = !1;
		for (; i < e.length;) {
			if (e[i] !== "`") {
				i += 1;
				continue;
			}
			let o = 0;
			for (; i + o < e.length && e[i + o] === "`";) o += 1;
			if (o === r) {
				let o = e.slice(n + r, i);
				t += e.slice(n, n + r) + o.replace(/\\\||\|/g, (e) => e === "|" ? "\\|" : e) + e.slice(i, i + r), n = i + r, a = !0;
				break;
			}
			i += o;
		}
		a || (t += e.slice(n, n + r), n += r);
	}
	return t;
}
function LT(e) {
	return e.split("\n").map((e) => !e.includes("|") || !e.includes("`") ? e : IT(e)).join("\n");
}
function RT(e) {
	return (e || "").replaceAll("", " ").replace(/\s+/g, " ").trim();
}
function zT(e, t) {
	return t ? e.split(t).join("\n") : e;
}
function BT(e) {
	return e.replace(/\\.|\|/g, (e) => e === "|" ? "\\|" : e);
}
function VT(e, t, n = {}) {
	if (!e || !e.content || e.content.length === 0) return "";
	let r = [];
	e.content.forEach((e) => {
		let i = [];
		e.content && e.content.forEach((e) => {
			let r = "";
			r = e.content && Array.isArray(e.content) && e.content.length > 1 ? e.content.map((e) => zT(t.renderChildren(e), n.cellLineSeparator)).join("\n") : zT(e.content ? t.renderChildren(e.content) : "", n.cellLineSeparator);
			let a = BT(RT(r.replace(/[ \t]*\r?\n[ \t]*/g, "<br>"))), o = e.type === "tableHeader", s = hT(e.attrs);
			i.push({
				text: a,
				isHeader: o,
				align: s
			});
		}), r.push(i);
	});
	let i = r.reduce((e, t) => Math.max(e, t.length), 0);
	if (i === 0) return "";
	let a = Array.from({ length: i }).fill(0);
	r.forEach((e) => {
		for (let t = 0; t < i; t += 1) {
			let n = (e[t]?.text || "").length;
			n > a[t] && (a[t] = n), a[t] < 3 && (a[t] = 3);
		}
	});
	let o = (e, t) => e + " ".repeat(Math.max(0, t - e.length)), s = r[0], c = s.some((e) => e.isHeader), l = Array.from({ length: i }).fill(null);
	r.forEach((e) => {
		for (let t = 0; t < i; t += 1) !l[t] && e[t]?.align && (l[t] = e[t].align);
	});
	let u = "\n", d = Array.from({ length: i }).map((e, t) => c && s[t] && s[t].text || "");
	return u += `| ${d.map((e, t) => o(e, a[t])).join(" | ")} |\n`, u += `| ${a.map((e, t) => {
		let n = Math.max(3, e), r = l[t];
		return r === "left" ? `:${"-".repeat(n)}` : r === "right" ? `${"-".repeat(n)}:` : r === "center" ? `:${"-".repeat(n)}:` : "-".repeat(n);
	}).join(" | ")} |\n`, (c ? r.slice(1) : r).forEach((e) => {
		u += `| ${Array.from({ length: i }).fill(0).map((t, n) => o(e[n] && e[n].text || "", a[n])).join(" | ")} |\n`;
	}), u;
}
var HT = new U("preserveCellSelectionOnContextMenu");
function UT(e, t) {
	let n = e.posAtCoords({
		left: t.clientX,
		top: t.clientY
	});
	if (n) return n.pos;
	if (!(t.target instanceof Node)) return null;
	try {
		return e.posAtDOM(t.target, 0);
	} catch {
		return null;
	}
}
function WT(e, t) {
	let n = !1;
	return e.forEachCell((e, r) => {
		t >= r && t < r + e.nodeSize && (n = !0);
	}), n;
}
function GT() {
	return new H({
		key: HT,
		props: { handleDOMEvents: { mousedown(e, t) {
			if (t.button !== 2) return !1;
			let { selection: n } = e.state;
			if (!NT(n) || n.ranges.length < 2) return !1;
			let r = UT(e, t);
			return r == null || !WT(n, r) ? !1 : (t.preventDefault(), !0);
		} } }
	});
}
var KT = fS.create({
	name: "table",
	addOptions() {
		return {
			HTMLAttributes: {},
			resizable: !1,
			renderWrapper: !1,
			handleWidth: 5,
			cellMinWidth: 25,
			View: OT,
			lastColumnResizable: !0,
			allowTableNodeSelection: !1
		};
	},
	content: "tableRow+",
	tableRole: "table",
	isolating: !0,
	group: "block",
	parseHTML() {
		return [{ tag: "table" }];
	},
	renderHTML({ node: e, HTMLAttributes: t }) {
		let { colgroup: n, tableWidth: r, tableMinWidth: i } = kT(e, this.options.cellMinWidth), a = t.style;
		function o() {
			return a || (r ? `width: ${r}` : `min-width: ${i}`);
		}
		let s = [
			"table",
			J(this.options.HTMLAttributes, t, { style: o() }),
			n,
			["tbody", 0]
		];
		return this.options.renderWrapper ? [
			"div",
			{ class: "tableWrapper" },
			s
		] : s;
	},
	parseMarkdown: (e, t) => {
		let n = [], r = Array.isArray(e.align) ? e.align : [];
		if (e.header) {
			let i = [];
			e.header.forEach((e, n) => {
				let a = pT(r[n] ?? e.align), o = a ? { align: a } : {};
				i.push(t.createNode("tableHeader", o, [{
					type: "paragraph",
					content: t.parseInline(e.tokens)
				}]));
			}), n.push(t.createNode("tableRow", {}, i));
		}
		return e.rows && e.rows.forEach((e) => {
			let i = [];
			e.forEach((e, n) => {
				let a = pT(r[n] ?? e.align), o = a ? { align: a } : {};
				i.push(t.createNode("tableCell", o, [{
					type: "paragraph",
					content: t.parseInline(e.tokens)
				}]));
			}), n.push(t.createNode("tableRow", {}, i));
		}), t.createNode("table", void 0, n);
	},
	renderMarkdown: (e, t) => VT(e, t),
	markdownTokenizer: {
		name: "table",
		level: "block",
		start: (e) => {
			let t = e.split("\n");
			if (t.length < 2) return -1;
			let n = t[1];
			return !/^[ \t|:]*-[ \t|:-]*$/.test(n) || !n.includes("|") ? -1 : t[0].includes("|") ? 0 : -1;
		},
		tokenize(e, t, n) {
			let r = e.indexOf("\n\n"), i = r >= 0 ? e.slice(0, r) : e, a = i.split("\n");
			if (a.length < 2) return;
			let o = a[1];
			if (!/^[ \t|:]*-[ \t|:-]*$/.test(o) || !o.includes("|")) return;
			let s = LT(i);
			if (s === i) return;
			let c = n.blockTokens(s)[0];
			if (c?.type !== "table" || !c.raw) return;
			let l = c.raw.split("\n").length, u = e.split("\n").slice(0, l).join("\n");
			return {
				...c,
				raw: u
			};
		}
	},
	addCommands() {
		return {
			insertTable: ({ rows: e = 3, cols: t = 3, withHeaderRow: n = !0 } = {}) => ({ tr: r, dispatch: i, editor: a }) => {
				let o = MT(a.schema, e, t, n);
				if (i) {
					let e = r.selection.from + 1;
					r.replaceSelectionWith(o).scrollIntoView().setSelection(B.near(r.doc.resolve(e)));
				}
				return !0;
			},
			addColumnBefore: () => ({ state: e, dispatch: t }) => sw(e, t),
			addColumnAfter: () => ({ state: e, dispatch: t }) => cw(e, t),
			deleteColumn: () => ({ state: e, dispatch: t }) => {
				let n = oy(e.selection.$from, (e) => e.type.name === "table");
				return uw(e, t && ((e) => {
					n && FT(e, n.pos), t(e);
				}));
			},
			addRowBefore: () => ({ state: e, dispatch: t }) => pw(e, t),
			addRowAfter: () => ({ state: e, dispatch: t }) => mw(e, t),
			deleteRow: () => ({ state: e, dispatch: t }) => {
				let n = oy(e.selection.$from, (e) => e.type.name === "table");
				return gw(e, t && ((e) => {
					n && FT(e, n.pos), t(e);
				}));
			},
			deleteTable: () => ({ state: e, dispatch: t }) => kw(e, t),
			mergeCells: () => ({ state: e, dispatch: t }) => yw(e, t),
			splitCell: () => ({ state: e, dispatch: t }) => bw(e, t),
			toggleHeaderColumn: () => ({ state: e, dispatch: t }) => Tw("column")(e, t),
			toggleHeaderRow: () => ({ state: e, dispatch: t }) => Tw("row")(e, t),
			toggleHeaderCell: () => ({ state: e, dispatch: t }) => Ew(e, t),
			mergeOrSplit: () => ({ state: e, dispatch: t }) => yw(e, t) ? !0 : bw(e, t),
			setCellAttribute: (e, t) => ({ state: n, dispatch: r }) => Sw(e, t)(n, r),
			goToNextCell: () => ({ state: e, dispatch: t }) => Ow(1)(e, t),
			goToPreviousCell: () => ({ state: e, dispatch: t }) => Ow(-1)(e, t),
			fixTables: () => ({ state: e, dispatch: t }) => (t && rw(e), !0),
			setCellSelection: (e) => ({ tr: t, dispatch: n }) => {
				if (n) {
					let n = X.create(t.doc, e.anchorCell, e.headCell);
					t.setSelection(n);
				}
				return !0;
			}
		};
	},
	addKeyboardShortcuts() {
		return {
			Tab: () => this.editor.commands.goToNextCell() ? !0 : this.editor.can().addRowAfter() ? this.editor.chain().addRowAfter().goToNextCell().run() : !1,
			"Shift-Tab": () => this.editor.commands.goToPreviousCell(),
			Backspace: PT,
			"Mod-Backspace": PT,
			Delete: PT,
			"Mod-Delete": PT
		};
	},
	addProseMirrorPlugins() {
		return [
			...this.options.resizable && this.editor.isEditable ? [Qw({
				handleWidth: this.options.handleWidth,
				cellMinWidth: this.options.cellMinWidth,
				defaultCellMinWidth: this.options.cellMinWidth,
				View: null,
				lastColumnResizable: this.options.lastColumnResizable
			})] : [],
			fT({ allowTableNodeSelection: this.options.allowTableNodeSelection }),
			GT()
		];
	},
	addNodeView() {
		let e = this.options.View;
		return e ? ({ node: t, view: n, HTMLAttributes: r }) => {
			let i = J(this.options.HTMLAttributes, r);
			return new e(t, this.options.cellMinWidth, n, i);
		} : null;
	},
	extendNodeSchema(e) {
		return { tableRole: q(K(e, "tableRole", {
			name: e.name,
			options: e.options,
			storage: e.storage
		})) };
	}
}), qT = Y.create({
	name: "tableKit",
	addExtensions() {
		let e = [];
		return this.options.table !== !1 && e.push(KT.configure(this.options.table)), this.options.tableCell !== !1 && e.push(CT.configure(this.options.tableCell)), this.options.tableHeader !== !1 && e.push(wT.configure(this.options.tableHeader)), this.options.tableRow !== !1 && e.push(TT.configure(this.options.tableRow)), e;
	}
}), JT = 20, YT = (e, t = 0) => {
	let n = [];
	return !e.children.length || t > JT || Array.from(e.children).forEach((e) => {
		e.tagName === "SPAN" ? n.push(e) : e.children.length && n.push(...YT(e, t + 1));
	}), n;
}, XT = (e) => {
	if (!e.children.length) return;
	let t = YT(e);
	t && t.forEach((e) => {
		var t;
		let n = e.getAttribute("style"), r = (t = e.parentElement) == null || (t = t.closest("span")) == null ? void 0 : t.getAttribute("style");
		e.setAttribute("style", `${r};${n}`);
	});
}, ZT = Lx.create({
	name: "textStyle",
	priority: 101,
	addOptions() {
		return {
			HTMLAttributes: {},
			mergeNestedSpanStyles: !0
		};
	},
	parseHTML() {
		return [{
			tag: "span",
			consuming: !1,
			getAttrs: (e) => e.hasAttribute("style") ? (this.options.mergeNestedSpanStyles && XT(e), {}) : !1
		}];
	},
	renderHTML({ HTMLAttributes: e }) {
		return [
			"span",
			J(this.options.HTMLAttributes, e),
			0
		];
	},
	addCommands() {
		return {
			toggleTextStyle: (e) => ({ commands: t }) => t.toggleMark(this.name, e),
			removeEmptyTextStyle: () => ({ tr: e }) => {
				let { selection: t } = e;
				return e.doc.nodesBetween(t.from, t.to, (t, n) => {
					if (!t.isInline) return !0;
					t.marks.filter((e) => e.type === this.type).some((e) => Object.values(e.attrs).some((e) => !!e)) || e.removeMark(n, n + t.nodeSize, this.type);
				}), !0;
			}
		};
	}
}), QT = Y.create({
	name: "backgroundColor",
	addOptions() {
		return { types: ["textStyle"] };
	},
	addGlobalAttributes() {
		return [{
			types: this.options.types,
			attributes: { backgroundColor: {
				default: null,
				parseHTML: (e) => (hx(e, "background-color") ?? e.style.backgroundColor)?.replace(/['"]+/g, ""),
				renderHTML: (e) => yx(e.backgroundColor) ? { style: `background-color: ${e.backgroundColor}` } : {}
			} }
		}];
	},
	addCommands() {
		return {
			setBackgroundColor: (e) => ({ chain: t }) => t().setMark("textStyle", { backgroundColor: e }).run(),
			unsetBackgroundColor: () => ({ chain: e }) => e().setMark("textStyle", { backgroundColor: null }).removeEmptyTextStyle().run()
		};
	}
}), $T = Y.create({
	name: "color",
	addOptions() {
		return { types: ["textStyle"] };
	},
	addGlobalAttributes() {
		return [{
			types: this.options.types,
			attributes: { color: {
				default: null,
				parseHTML: (e) => (hx(e, "color") ?? e.style.color)?.replace(/['"]+/g, ""),
				renderHTML: (e) => yx(e.color) ? { style: `color: ${e.color}` } : {}
			} }
		}];
	},
	addCommands() {
		return {
			setColor: (e) => ({ chain: t }) => t().setMark("textStyle", { color: e }).run(),
			unsetColor: () => ({ chain: e }) => e().setMark("textStyle", { color: null }).removeEmptyTextStyle().run()
		};
	}
}), eE = Y.create({
	name: "fontFamily",
	addOptions() {
		return { types: ["textStyle"] };
	},
	addGlobalAttributes() {
		return [{
			types: this.options.types,
			attributes: { fontFamily: {
				default: null,
				parseHTML: (e) => hx(e, "font-family") ?? e.style.fontFamily,
				renderHTML: (e) => yx(e.fontFamily) ? { style: `font-family: ${e.fontFamily}` } : {}
			} }
		}];
	},
	addCommands() {
		return {
			setFontFamily: (e) => ({ chain: t }) => t().setMark("textStyle", { fontFamily: e }).run(),
			unsetFontFamily: () => ({ chain: e }) => e().setMark("textStyle", { fontFamily: null }).removeEmptyTextStyle().run()
		};
	}
}), tE = Y.create({
	name: "fontSize",
	addOptions() {
		return { types: ["textStyle"] };
	},
	addGlobalAttributes() {
		return [{
			types: this.options.types,
			attributes: { fontSize: {
				default: null,
				parseHTML: (e) => hx(e, "font-size") ?? e.style.fontSize,
				renderHTML: (e) => yx(e.fontSize) ? { style: `font-size: ${e.fontSize}` } : {}
			} }
		}];
	},
	addCommands() {
		return {
			setFontSize: (e) => ({ chain: t }) => t().setMark("textStyle", { fontSize: e }).run(),
			unsetFontSize: () => ({ chain: e }) => e().setMark("textStyle", { fontSize: null }).removeEmptyTextStyle().run()
		};
	}
}), nE = Y.create({
	name: "lineHeight",
	addOptions() {
		return { types: ["textStyle"] };
	},
	addGlobalAttributes() {
		return [{
			types: this.options.types,
			attributes: { lineHeight: {
				default: null,
				parseHTML: (e) => hx(e, "line-height") ?? e.style.lineHeight,
				renderHTML: (e) => yx(e.lineHeight) ? { style: `line-height: ${e.lineHeight}` } : {}
			} }
		}];
	},
	addCommands() {
		return {
			setLineHeight: (e) => ({ chain: t }) => t().setMark("textStyle", { lineHeight: e }).run(),
			unsetLineHeight: () => ({ chain: e }) => e().setMark("textStyle", { lineHeight: null }).removeEmptyTextStyle().run()
		};
	}
});
Y.create({
	name: "textStyleKit",
	addExtensions() {
		let e = [];
		return this.options.backgroundColor !== !1 && e.push(QT.configure(this.options.backgroundColor)), this.options.color !== !1 && e.push($T.configure(this.options.color)), this.options.fontFamily !== !1 && e.push(eE.configure(this.options.fontFamily)), this.options.fontSize !== !1 && e.push(tE.configure(this.options.fontSize)), this.options.lineHeight !== !1 && e.push(nE.configure(this.options.lineHeight)), this.options.textStyle !== !1 && e.push(ZT.configure(this.options.textStyle)), e;
	}
});
// node_modules/@tiptap/core/dist/jsx-runtime/jsx-runtime.js
var rE = /* @__PURE__ */ new WeakSet(), iE = /* @__PURE__ */ new WeakSet();
function aE(e) {
	let t = e;
	return rE.add(t), t;
}
function oE(e) {
	return Array.isArray(e) && rE.has(e);
}
function sE(e) {
	return e.flatMap((e) => e == null ? [] : Array.isArray(e) && iE.has(e) && !oE(e) ? sE(e) : [e]);
}
function cE(e, t) {
	if (e === "slot") return 0;
	if (e instanceof Function) {
		let n = e(t);
		return Array.isArray(n) && !oE(n) && !iE.has(n) ? aE(n) : n;
	}
	let { children: n, ...r } = t ?? {};
	if (e === "svg") throw Error("SVG elements are not supported in the JSX syntax, use the array syntax instead");
	if (Array.isArray(n)) {
		if (oE(n)) return aE([
			e,
			r,
			n
		]);
		if (n.length === 0) return aE([e, r]);
		let t = sE(n);
		return t.length === 0 ? aE([e, r]) : aE([
			e,
			r,
			...t
		]);
	}
	return aE(n == null ? [e, r] : [
		e,
		r,
		n
	]);
}
var lE = (e, t) => cE(e, t), uE = (e, t) => {
	let { state: n } = e, { selection: r } = n;
	if (!r.empty) return !1;
	let { $from: i } = r;
	if (i.parentOffset !== 0) return !1;
	let a = i.depth - 1;
	if (a < 0) return !1;
	let o = i.node(a), s = i.index(a);
	if (s === 0) return !1;
	if (o.type === t) return e.commands.lift(t.name);
	let c = o.child(s - 1);
	if (c.type !== t || !c.lastChild?.isTextblock) return !1;
	let l = i.before() - 1 - 1;
	return e.commands.command(({ tr: e, dispatch: t }) => {
		if (!t) return !0;
		let n = i.parent.content, r = new R(n, 0, 0);
		return e.replace(l, i.after(), r), e.setSelection(B.create(e.doc, l + n.size)), e.scrollIntoView(), t(e), !0;
	});
}, dE = /^\s*>\s$/, fE = fS.create({
	name: "blockquote",
	addOptions() {
		return { HTMLAttributes: {} };
	},
	content: "block+",
	group: "block",
	defining: !0,
	parseHTML() {
		return [{ tag: "blockquote" }];
	},
	renderHTML({ HTMLAttributes: e }) {
		return /* @__PURE__ */ lE("blockquote", {
			...J(this.options.HTMLAttributes, e),
			children: /* @__PURE__ */ lE("slot", {})
		});
	},
	parseMarkdown: (e, t) => {
		let n = t.parseBlockChildren ?? t.parseChildren;
		return t.createNode("blockquote", void 0, n(e.tokens || []));
	},
	renderMarkdown: (e, t) => {
		if (!e.content) return "";
		let n = [];
		return e.content.forEach((e, r) => {
			let i = (t.renderChild?.call(t, e, r) ?? t.renderChildren([e])).split("\n").map((e) => e.trim() === "" ? ">" : `> ${e}`);
			n.push(i.join("\n"));
		}), n.join("\n>\n");
	},
	addCommands() {
		return {
			setBlockquote: () => ({ commands: e }) => e.wrapIn(this.name),
			toggleBlockquote: () => ({ commands: e }) => e.toggleWrap(this.name),
			unsetBlockquote: () => ({ commands: e }) => e.lift(this.name)
		};
	},
	addKeyboardShortcuts() {
		return {
			"Mod-Shift-b": () => this.editor.commands.toggleBlockquote(),
			Backspace: () => uE(this.editor, this.type)
		};
	},
	addInputRules() {
		return [dS({
			find: dE,
			type: this.type
		})];
	}
}), pE = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))$/, mE = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))/g, hE = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))$/, gE = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))/g, _E = Lx.create({
	name: "bold",
	addOptions() {
		return { HTMLAttributes: {} };
	},
	parseHTML() {
		return [
			{ tag: "strong" },
			{
				tag: "b",
				getAttrs: (e) => e.style.fontWeight !== "normal" && null
			},
			{
				style: "font-weight=400",
				clearMark: (e) => e.type.name === this.name
			},
			{
				style: "font-weight",
				getAttrs: (e) => /^(bold(er)?|[5-9]\d{2,})$/.test(e) && null
			}
		];
	},
	renderHTML({ HTMLAttributes: e }) {
		return /* @__PURE__ */ lE("strong", {
			...J(this.options.HTMLAttributes, e),
			children: /* @__PURE__ */ lE("slot", {})
		});
	},
	markdownTokenName: "strong",
	parseMarkdown: (e, t) => t.applyMark("bold", t.parseInline(e.tokens || [])),
	markdownOptions: { htmlReopen: {
		open: "<strong>",
		close: "</strong>"
	} },
	renderMarkdown: (e, t) => `**${t.renderChildren(e)}**`,
	addCommands() {
		return {
			setBold: () => ({ commands: e }) => e.setMark(this.name),
			toggleBold: () => ({ commands: e }) => e.toggleMark(this.name),
			unsetBold: () => ({ commands: e }) => e.unsetMark(this.name)
		};
	},
	addKeyboardShortcuts() {
		return {
			"Mod-b": () => this.editor.commands.toggleBold(),
			"Mod-B": () => this.editor.commands.toggleBold()
		};
	},
	addInputRules() {
		return [cS({
			find: pE,
			type: this.type
		}), cS({
			find: hE,
			type: this.type
		})];
	},
	addPasteRules() {
		return [pS({
			find: mE,
			type: this.type
		}), pS({
			find: gE,
			type: this.type
		})];
	}
}), vE = (e) => {
	let t = /`([^`]+)`(?!`)$/.exec(e);
	return !t || t.index > 0 && e[t.index - 1] === "`" ? null : {
		index: t.index,
		text: t[0],
		replaceWith: t[1]
	};
}, yE = (e) => {
	let t = /`([^`]+)`(?!`)/g, n = [], r;
	for (; (r = t.exec(e)) !== null;) r.index > 0 && e[r.index - 1] === "`" || n.push({
		index: r.index,
		text: r[0],
		replaceWith: r[1]
	});
	return n;
};
function bE(e) {
	let t = new Set((e.match(/`+/g) || []).map((e) => e.length)), n = 1;
	for (; t.has(n);) n += 1;
	return n;
}
var xE = Lx.create({
	name: "code",
	addOptions() {
		return { HTMLAttributes: {} };
	},
	excludes: "_",
	code: !0,
	exitable: !0,
	parseHTML() {
		return [{ tag: "code" }];
	},
	renderHTML({ HTMLAttributes: e }) {
		return [
			"code",
			J(this.options.HTMLAttributes, e),
			0
		];
	},
	markdownTokenName: "codespan",
	parseMarkdown: (e, t) => t.applyMark("code", [{
		type: "text",
		text: e.text || ""
	}]),
	renderMarkdown: (e, t, n) => {
		var r;
		if (!e.content) return "";
		let i = typeof (n == null || (r = n.meta) == null ? void 0 : r.markText) == "string" ? n.meta.markText : "", a = "`".repeat(bE(i)), o = i.startsWith("`") || i.endsWith("`") ? " " : "";
		return `${a}${o}${t.renderChildren(e.content)}${o}${a}`;
	},
	addCommands() {
		return {
			setCode: () => ({ commands: e }) => e.setMark(this.name),
			toggleCode: () => ({ commands: e }) => e.toggleMark(this.name),
			unsetCode: () => ({ commands: e }) => e.unsetMark(this.name)
		};
	},
	addKeyboardShortcuts() {
		return { "Mod-e": () => this.editor.commands.toggleCode() };
	},
	addInputRules() {
		return [cS({
			find: vE,
			type: this.type
		})];
	},
	addPasteRules() {
		return [pS({
			find: yE,
			type: this.type
		})];
	}
}), SE = 4, CE = /^```([a-z]+)?[\s\n]$/, wE = /^~~~([a-z]+)?[\s\n]$/, TE = fS.create({
	name: "codeBlock",
	addOptions() {
		return {
			languageClassPrefix: "language-",
			exitOnTripleEnter: !0,
			exitOnArrowDown: !0,
			exitOnArrowUp: !0,
			defaultLanguage: null,
			enableTabIndentation: !1,
			tabSize: SE,
			HTMLAttributes: {}
		};
	},
	content: "text*",
	marks: "",
	group: "block",
	code: !0,
	defining: !0,
	addAttributes() {
		return { language: {
			default: this.options.defaultLanguage,
			parseHTML: (e) => {
				let { languageClassPrefix: t } = this.options;
				return t && [...e.firstElementChild?.classList || []].filter((e) => e.startsWith(t)).map((e) => e.replace(t, ""))[0] || null;
			},
			rendered: !1
		} };
	},
	parseHTML() {
		return [{
			tag: "pre",
			preserveWhitespace: "full"
		}];
	},
	renderHTML({ node: e, HTMLAttributes: t }) {
		return [
			"pre",
			J(this.options.HTMLAttributes, t),
			[
				"code",
				{ class: e.attrs.language ? this.options.languageClassPrefix + e.attrs.language : null },
				0
			]
		];
	},
	markdownTokenName: "code",
	parseMarkdown: (e, t) => e.raw?.startsWith("```") === !1 && e.raw?.startsWith("~~~") === !1 && e.codeBlockStyle !== "indented" ? [] : t.createNode("codeBlock", { language: e.lang || null }, e.text ? [t.createTextNode(e.text)] : []),
	renderMarkdown: (e, t) => {
		let n = "", r = e.attrs?.language || "";
		return n = e.content ? [
			`\`\`\`${r}`,
			t.renderChildren(e.content),
			"```"
		].join("\n") : `\`\`\`${r}\n\n\`\`\``, n;
	},
	addCommands() {
		return {
			setCodeBlock: (e) => ({ commands: t }) => t.setNode(this.name, e),
			toggleCodeBlock: (e) => ({ commands: t }) => t.toggleNode(this.name, "paragraph", e)
		};
	},
	addKeyboardShortcuts() {
		return {
			"Mod-Alt-c": () => this.editor.commands.toggleCodeBlock(),
			Backspace: () => {
				let { empty: e, $anchor: t } = this.editor.state.selection, n = t.pos === 1;
				return !e || t.parent.type.name !== this.name ? !1 : n || !t.parent.textContent.length ? this.editor.commands.clearNodes() : !1;
			},
			Tab: ({ editor: e }) => {
				if (!this.options.enableTabIndentation) return !1;
				let t = this.options.tabSize ?? SE, { state: n } = e, { selection: r } = n, { $from: i, empty: a } = r;
				if (i.parent.type !== this.type) return !1;
				let o = " ".repeat(t);
				return a ? e.commands.insertContent(o) : e.commands.command(({ tr: e }) => {
					let { from: t, to: i } = r, a = n.doc.textBetween(t, i, "\n", "\n").split("\n").map((e) => o + e).join("\n");
					return e.replaceWith(t, i, n.schema.text(a)), !0;
				});
			},
			"Shift-Tab": ({ editor: e }) => {
				if (!this.options.enableTabIndentation) return !1;
				let t = this.options.tabSize ?? SE, { state: n } = e, { selection: r } = n, { $from: i, empty: a } = r;
				return i.parent.type === this.type ? a ? e.commands.command(({ tr: e }) => {
					let { pos: r } = i, a = i.start(), o = i.end(), s = n.doc.textBetween(a, o, "\n", "\n").split("\n"), c = 0, l = 0, u = r - a;
					for (let e = 0; e < s.length; e += 1) {
						if (l + s[e].length >= u) {
							c = e;
							break;
						}
						l += s[e].length + 1;
					}
					let d = s[c].match(/^ */)?.[0] || "", f = Math.min(d.length, t);
					if (f === 0) return !0;
					let p = a;
					for (let e = 0; e < c; e += 1) p += s[e].length + 1;
					return e.delete(p, p + f), r - p <= f && e.setSelection(B.create(e.doc, p)), !0;
				}) : e.commands.command(({ tr: e }) => {
					let { from: i, to: a } = r, o = n.doc.textBetween(i, a, "\n", "\n").split("\n").map((e) => {
						let n = e.match(/^ */)?.[0] || "", r = Math.min(n.length, t);
						return e.slice(r);
					}).join("\n");
					return e.replaceWith(i, a, n.schema.text(o)), !0;
				}) : !1;
			},
			Enter: ({ editor: e }) => {
				if (!this.options.exitOnTripleEnter) return !1;
				let { state: t } = e, { selection: n } = t, { $from: r, empty: i } = n;
				if (!i || r.parent.type !== this.type) return !1;
				let a = r.parentOffset === r.parent.nodeSize - 2, o = r.parent.textContent.endsWith("\n\n");
				return !a || !o ? !1 : e.chain().command(({ tr: e }) => (e.delete(r.pos - 2, r.pos), !0)).exitCode().run();
			},
			ArrowUp: ({ editor: e }) => {
				if (!this.options.exitOnArrowUp) return !1;
				let { state: t } = e, { selection: n } = t, { $from: r, empty: i } = n;
				if (!i || r.parent.type !== this.type || r.parentOffset !== 0) return !1;
				let a = r.before();
				return a > 0 ? !1 : e.commands.insertDefaultBlock({ pos: a });
			},
			ArrowDown: ({ editor: e }) => {
				if (!this.options.exitOnArrowDown) return !1;
				let { state: t } = e, { selection: n, doc: r } = t, { $from: i, empty: a } = n;
				if (!a || i.parent.type !== this.type || i.parentOffset !== i.parent.nodeSize - 2) return !1;
				let o = i.after();
				return o === void 0 ? !1 : r.nodeAt(o) ? e.commands.command(({ tr: e }) => (e.setSelection(z.near(r.resolve(o))), !0)) : e.commands.exitCode();
			}
		};
	},
	addInputRules() {
		return [uS({
			find: CE,
			type: this.type,
			getAttributes: (e) => ({ language: e[1] })
		}), uS({
			find: wE,
			type: this.type,
			getAttributes: (e) => ({ language: e[1] })
		})];
	},
	addProseMirrorPlugins() {
		return [new H({
			key: new U("codeBlockVSCodeHandler"),
			props: { handlePaste: (e, t) => {
				if (!t.clipboardData || this.editor.isActive(this.type.name)) return !1;
				let n = t.clipboardData.getData("text/plain"), r = t.clipboardData.getData("vscode-editor-data"), i = (r ? JSON.parse(r) : void 0)?.mode;
				if (!n || !i) return !1;
				let { tr: a, schema: o } = e.state, s = o.text(n.replace(/\r\n?/g, "\n"));
				return a.replaceSelectionWith(this.type.create({ language: i }, s)), a.selection.$from.parent.type !== this.type && a.setSelection(B.near(a.doc.resolve(Math.max(0, a.selection.from - 2)))), a.setMeta("paste", !0), e.dispatch(a), !0;
			} }
		})];
	}
}), EE = fS.create({
	name: "doc",
	topNode: !0,
	content: "block+",
	renderMarkdown: (e, t) => e.content ? t.renderChildren(e.content, "\n\n") : ""
}), DE = fS.create({
	name: "hardBreak",
	markdownTokenName: "br",
	addOptions() {
		return {
			keepMarks: !0,
			HTMLAttributes: {}
		};
	},
	inline: !0,
	group: "inline",
	selectable: !1,
	linebreakReplacement: !0,
	parseHTML() {
		return [{ tag: "br" }];
	},
	renderHTML({ HTMLAttributes: e }) {
		return ["br", J(this.options.HTMLAttributes, e)];
	},
	renderText() {
		return "\n";
	},
	renderMarkdown: () => "  \n",
	parseMarkdown: () => ({ type: "hardBreak" }),
	addCommands() {
		return { setHardBreak: () => ({ commands: e, chain: t, state: n, editor: r }) => e.first([() => e.exitCode(), () => e.command(() => {
			let { selection: e, storedMarks: i } = n;
			if (e.$from.parent.type.spec.isolating) return !1;
			let { keepMarks: a } = this.options, { splittableMarks: o } = r.extensionManager, s = i || e.$to.parentOffset && e.$from.marks();
			return t().insertContent({ type: this.name }).command(({ tr: e, dispatch: t }) => {
				if (t && s && a) {
					let t = s.filter((e) => o.includes(e.type.name));
					e.ensureMarks(t);
				}
				return !0;
			}).scrollIntoView().run();
		})]) };
	},
	addKeyboardShortcuts() {
		return {
			"Mod-Enter": () => this.editor.commands.setHardBreak(),
			"Shift-Enter": () => this.editor.commands.setHardBreak()
		};
	}
}), OE = fS.create({
	name: "heading",
	addOptions() {
		return {
			levels: [
				1,
				2,
				3,
				4,
				5,
				6
			],
			HTMLAttributes: {}
		};
	},
	content: "inline*",
	group: "block",
	defining: !0,
	addAttributes() {
		return { level: {
			default: 1,
			rendered: !1
		} };
	},
	parseHTML() {
		return this.options.levels.map((e) => ({
			tag: `h${e}`,
			attrs: { level: e }
		}));
	},
	renderHTML({ node: e, HTMLAttributes: t }) {
		return [
			`h${this.options.levels.includes(e.attrs.level) ? e.attrs.level : this.options.levels[0]}`,
			J(this.options.HTMLAttributes, t),
			0
		];
	},
	parseMarkdown(e, t) {
		let n = e.depth || 1;
		return this.options.levels.includes(n) ? t.createNode("heading", { level: n }, t.parseInline(e.tokens || [])) : t.createNode("paragraph", void 0, t.parseInline(e.tokens || []));
	},
	renderMarkdown: (e, t) => {
		let n = e.attrs?.level ? parseInt(e.attrs.level, 10) : 1, r = "#".repeat(n);
		return e.content ? `${r} ${t.renderChildren(e.content)}` : "";
	},
	addCommands() {
		return {
			setHeading: (e) => ({ commands: t }) => this.options.levels.includes(e.level) ? t.setNode(this.name, e) : !1,
			toggleHeading: (e) => ({ commands: t }) => this.options.levels.includes(e.level) ? t.toggleNode(this.name, "paragraph", e) : !1
		};
	},
	addKeyboardShortcuts() {
		return this.options.levels.reduce((e, t) => ({
			...e,
			[`Mod-Alt-${t}`]: () => this.editor.commands.toggleHeading({ level: t })
		}), {});
	},
	addInputRules() {
		return this.options.levels.map((e) => uS({
			find: RegExp(`^(#{${Math.min(...this.options.levels)},${e}})\\s$`),
			type: this.type,
			getAttributes: { level: e }
		}));
	}
}), kE = fS.create({
	name: "horizontalRule",
	addOptions() {
		return {
			HTMLAttributes: {},
			nextNodeType: "paragraph"
		};
	},
	group: "block",
	parseHTML() {
		return [{ tag: "hr" }];
	},
	renderHTML({ HTMLAttributes: e }) {
		return ["hr", J(this.options.HTMLAttributes, e)];
	},
	markdownTokenName: "hr",
	parseMarkdown: (e, t) => t.createNode("horizontalRule"),
	renderMarkdown: () => "---",
	addCommands() {
		return { setHorizontalRule: () => ({ chain: e, state: t }) => {
			if (!px(t, t.schema.nodes[this.name])) return !1;
			let { selection: n } = t, { $to: r } = n, i = e();
			return eb(n) ? i.insertContentAt(r.pos, { type: this.name }) : i.insertContent({ type: this.name }), i.command(({ state: e, tr: t, dispatch: n }) => {
				if (n) {
					let { $to: n } = t.selection, r = n.end();
					if (n.nodeAfter) n.nodeAfter.isTextblock ? t.setSelection(B.create(t.doc, n.pos + 1)) : n.nodeAfter.isBlock ? t.setSelection(V.create(t.doc, n.pos)) : t.setSelection(B.create(t.doc, n.pos));
					else {
						let i = (e.schema.nodes[this.options.nextNodeType] || n.parent.type.contentMatch.defaultType)?.create();
						i && (t.insert(r, i), t.setSelection(B.create(t.doc, r + 1)));
					}
					t.scrollIntoView();
				}
				return !0;
			}).run();
		} };
	},
	addInputRules() {
		return [lS({
			find: /^(?:---|—-|___\s|\*\*\*\s)$/,
			type: this.type
		})];
	}
}), AE = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))$/, jE = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))/g, ME = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))$/, NE = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))/g, PE = Lx.create({
	name: "italic",
	addOptions() {
		return { HTMLAttributes: {} };
	},
	parseHTML() {
		return [
			{ tag: "em" },
			{
				tag: "i",
				getAttrs: (e) => e.style.fontStyle !== "normal" && null
			},
			{
				style: "font-style=normal",
				clearMark: (e) => e.type.name === this.name
			},
			{ style: "font-style=italic" }
		];
	},
	renderHTML({ HTMLAttributes: e }) {
		return [
			"em",
			J(this.options.HTMLAttributes, e),
			0
		];
	},
	addCommands() {
		return {
			setItalic: () => ({ commands: e }) => e.setMark(this.name),
			toggleItalic: () => ({ commands: e }) => e.toggleMark(this.name),
			unsetItalic: () => ({ commands: e }) => e.unsetMark(this.name)
		};
	},
	markdownTokenName: "em",
	parseMarkdown: (e, t) => t.applyMark("italic", t.parseInline(e.tokens || [])),
	markdownOptions: { htmlReopen: {
		open: "<em>",
		close: "</em>"
	} },
	renderMarkdown: (e, t) => `*${t.renderChildren(e)}*`,
	addKeyboardShortcuts() {
		return {
			"Mod-i": () => this.editor.commands.toggleItalic(),
			"Mod-I": () => this.editor.commands.toggleItalic()
		};
	},
	addInputRules() {
		return [cS({
			find: AE,
			type: this.type
		}), cS({
			find: ME,
			type: this.type
		})];
	},
	addPasteRules() {
		return [pS({
			find: jE,
			type: this.type
		}), pS({
			find: NE,
			type: this.type
		})];
	}
}), FE = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2odyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos6kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rck0msd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12b0cam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2oodside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", IE = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", LE = "numeric", RE = "ascii", zE = "alpha", BE = "asciinumeric", VE = "alphanumeric", HE = "domain", UE = "emoji", WE = "scheme", GE = "slashscheme", KE = "whitespace";
function qE(e, t) {
	return e in t || (t[e] = []), t[e];
}
function JE(e, t, n) {
	t[LE] && (t[BE] = !0, t[VE] = !0), t[RE] && (t[BE] = !0, t[zE] = !0), t[BE] && (t[VE] = !0), t[zE] && (t[VE] = !0), t[VE] && (t[HE] = !0), t[UE] && (t[HE] = !0);
	for (let r in t) {
		let t = qE(r, n);
		t.indexOf(e) < 0 && t.push(e);
	}
}
function YE(e, t) {
	let n = {};
	for (let r in t) t[r].indexOf(e) >= 0 && (n[r] = !0);
	return n;
}
function XE(e = null) {
	this.j = {}, this.jr = [], this.jd = null, this.t = e;
}
XE.groups = {}, XE.prototype = {
	accepts() {
		return !!this.t;
	},
	go(e) {
		let t = this, n = t.j[e];
		if (n) return n;
		for (let n = 0; n < t.jr.length; n++) {
			let r = t.jr[n][0], i = t.jr[n][1];
			if (i && r.test(e)) return i;
		}
		return t.jd;
	},
	has(e, t = !1) {
		return t ? e in this.j : !!this.go(e);
	},
	ta(e, t, n, r) {
		for (let i = 0; i < e.length; i++) this.tt(e[i], t, n, r);
	},
	tr(e, t, n, r) {
		r ||= XE.groups;
		let i;
		return t && t.j ? i = t : (i = new XE(t), n && r && JE(t, n, r)), this.jr.push([e, i]), i;
	},
	ts(e, t, n, r) {
		let i = this, a = e.length;
		if (!a) return i;
		for (let t = 0; t < a - 1; t++) i = i.tt(e[t]);
		return i.tt(e[a - 1], t, n, r);
	},
	tt(e, t, n, r) {
		r ||= XE.groups;
		let i = this;
		if (t && t.j) return i.j[e] = t, t;
		let a = t, o, s = i.go(e);
		return s ? (o = new XE(), Object.assign(o.j, s.j), o.jr.push.apply(o.jr, s.jr), o.jd = s.jd, o.t = s.t) : o = new XE(), a && (r && (o.t && typeof o.t == "string" ? JE(a, Object.assign(YE(o.t, r), n), r) : n && JE(a, n, r)), o.t = a), i.j[e] = o, o;
	}
};
var Z = (e, t, n, r, i) => e.ta(t, n, r, i), ZE = (e, t, n, r, i) => e.tr(t, n, r, i), QE = (e, t, n, r, i) => e.ts(t, n, r, i), Q = (e, t, n, r, i) => e.tt(t, n, r, i), $E = "WORD", eD = "UWORD", tD = "ASCIINUMERICAL", nD = "ALPHANUMERICAL", rD = "LOCALHOST", iD = "TLD", aD = "UTLD", oD = "SCHEME", sD = "SLASH_SCHEME", cD = "NUM", lD = "WS", uD = "NL", dD = "OPENBRACE", fD = "CLOSEBRACE", pD = "OPENBRACKET", mD = "CLOSEBRACKET", hD = "OPENPAREN", gD = "CLOSEPAREN", _D = "OPENANGLEBRACKET", vD = "CLOSEANGLEBRACKET", yD = "FULLWIDTHLEFTPAREN", bD = "FULLWIDTHRIGHTPAREN", xD = "LEFTCORNERBRACKET", SD = "RIGHTCORNERBRACKET", CD = "LEFTWHITECORNERBRACKET", wD = "RIGHTWHITECORNERBRACKET", TD = "FULLWIDTHLESSTHAN", ED = "FULLWIDTHGREATERTHAN", DD = "AMPERSAND", OD = "APOSTROPHE", kD = "ASTERISK", AD = "AT", jD = "BACKSLASH", MD = "BACKTICK", ND = "CARET", PD = "COLON", FD = "COMMA", ID = "DOLLAR", LD = "DOT", RD = "EQUALS", zD = "EXCLAMATION", BD = "HYPHEN", VD = "PERCENT", HD = "PIPE", UD = "PLUS", WD = "POUND", GD = "QUERY", KD = "QUOTE", qD = "FULLWIDTHMIDDLEDOT", JD = "SEMI", YD = "SLASH", XD = "TILDE", ZD = "UNDERSCORE", QD = "EMOJI", $D = "SYM", eO = /*#__PURE__*/ Object.freeze({
	__proto__: null,
	ALPHANUMERICAL: nD,
	AMPERSAND: DD,
	APOSTROPHE: OD,
	ASCIINUMERICAL: tD,
	ASTERISK: kD,
	AT: AD,
	BACKSLASH: jD,
	BACKTICK: MD,
	CARET: ND,
	CLOSEANGLEBRACKET: vD,
	CLOSEBRACE: fD,
	CLOSEBRACKET: mD,
	CLOSEPAREN: gD,
	COLON: PD,
	COMMA: FD,
	DOLLAR: ID,
	DOT: LD,
	EMOJI: QD,
	EQUALS: RD,
	EXCLAMATION: zD,
	FULLWIDTHGREATERTHAN: ED,
	FULLWIDTHLEFTPAREN: yD,
	FULLWIDTHLESSTHAN: TD,
	FULLWIDTHMIDDLEDOT: qD,
	FULLWIDTHRIGHTPAREN: bD,
	HYPHEN: BD,
	LEFTCORNERBRACKET: xD,
	LEFTWHITECORNERBRACKET: CD,
	LOCALHOST: rD,
	NL: uD,
	NUM: cD,
	OPENANGLEBRACKET: _D,
	OPENBRACE: dD,
	OPENBRACKET: pD,
	OPENPAREN: hD,
	PERCENT: VD,
	PIPE: HD,
	PLUS: UD,
	POUND: WD,
	QUERY: GD,
	QUOTE: KD,
	RIGHTCORNERBRACKET: SD,
	RIGHTWHITECORNERBRACKET: wD,
	SCHEME: oD,
	SEMI: JD,
	SLASH: YD,
	SLASH_SCHEME: sD,
	SYM: $D,
	TILDE: XD,
	TLD: iD,
	UNDERSCORE: ZD,
	UTLD: aD,
	UWORD: eD,
	WORD: $E,
	WS: lD
}), tO = /[a-z]/, nO = /[a-z]/i, rO = /[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}]|\u{FE0F}/u;
try {
	nO = /* @__PURE__ */ RegExp("\\p{L}", "u"), rO = /* @__PURE__ */ RegExp("\\p{Emoji}", "u");
} catch {}
var iO = /\d/, aO = /\s/, oO = "\r", sO = "\n", cO = "️", lO = "‍", uO = "￼", dO = null, fO = null;
function pO(e = []) {
	let t = {};
	XE.groups = t;
	let n = new XE();
	dO ??= _O(FE), fO ??= _O(IE), Q(n, "'", OD), Q(n, "{", dD), Q(n, "}", fD), Q(n, "[", pD), Q(n, "]", mD), Q(n, "(", hD), Q(n, ")", gD), Q(n, "<", _D), Q(n, ">", vD), Q(n, "（", yD), Q(n, "）", bD), Q(n, "「", xD), Q(n, "」", SD), Q(n, "『", CD), Q(n, "』", wD), Q(n, "＜", TD), Q(n, "＞", ED), Q(n, "&", DD), Q(n, "*", kD), Q(n, "@", AD), Q(n, "`", MD), Q(n, "^", ND), Q(n, ":", PD), Q(n, ",", FD), Q(n, "$", ID), Q(n, ".", LD), Q(n, "=", RD), Q(n, "!", zD), Q(n, "-", BD), Q(n, "%", VD), Q(n, "|", HD), Q(n, "+", UD), Q(n, "#", WD), Q(n, "?", GD), Q(n, "\"", KD), Q(n, "/", YD), Q(n, ";", JD), Q(n, "~", XD), Q(n, "_", ZD), Q(n, "\\", jD), Q(n, "・", qD);
	let r = ZE(n, iO, cD, { [LE]: !0 });
	ZE(r, iO, r);
	let i = ZE(r, tO, tD, { [BE]: !0 }), a = ZE(r, nO, nD, { [VE]: !0 }), o = ZE(n, tO, $E, { [RE]: !0 });
	ZE(o, iO, i), ZE(o, tO, o), ZE(i, iO, i), ZE(i, tO, i);
	let s = ZE(n, nO, eD, { [zE]: !0 });
	ZE(s, tO), ZE(s, iO, a), ZE(s, nO, s), ZE(a, iO, a), ZE(a, tO), ZE(a, nO, a);
	let c = Q(n, sO, uD, { [KE]: !0 }), l = Q(n, oO, lD, { [KE]: !0 }), u = ZE(n, aO, lD, { [KE]: !0 });
	Q(n, uO, u), Q(l, sO, c), Q(l, uO, u), ZE(l, aO, u), Q(u, oO), Q(u, sO), ZE(u, aO, u), Q(u, uO, u);
	let d = ZE(n, rO, QD, { [UE]: !0 });
	Q(d, "#"), ZE(d, rO, d), Q(d, cO, d);
	let f = Q(d, lO);
	Q(f, "#"), ZE(f, rO, d);
	let p = [[tO, o], [iO, i]], m = [
		[tO, null],
		[nO, s],
		[iO, a]
	];
	for (let e = 0; e < dO.length; e++) gO(n, dO[e], iD, $E, p);
	for (let e = 0; e < fO.length; e++) gO(n, fO[e], aD, eD, m);
	JE(iD, {
		tld: !0,
		ascii: !0
	}, t), JE(aD, {
		utld: !0,
		alpha: !0
	}, t), gO(n, "file", oD, $E, p), gO(n, "mailto", oD, $E, p), gO(n, "http", sD, $E, p), gO(n, "https", sD, $E, p), gO(n, "ftp", sD, $E, p), gO(n, "ftps", sD, $E, p), JE(oD, {
		scheme: !0,
		ascii: !0
	}, t), JE(sD, {
		slashscheme: !0,
		ascii: !0
	}, t), e = e.sort((e, t) => e[0] > t[0] ? 1 : -1);
	for (let t = 0; t < e.length; t++) {
		let r = e[t][0], i = e[t][1] ? { [WE]: !0 } : { [GE]: !0 };
		r.indexOf("-") >= 0 ? i[HE] = !0 : tO.test(r) ? iO.test(r) ? i[BE] = !0 : i[RE] = !0 : i[LE] = !0, QE(n, r, r, i);
	}
	return QE(n, "localhost", rD, { ascii: !0 }), n.jd = new XE($D), {
		start: n,
		tokens: Object.assign({ groups: t }, eO)
	};
}
function mO(e, t) {
	let n = hO(t.replace(/[A-Z]/g, (e) => e.toLowerCase())), r = n.length, i = [], a = 0, o = 0;
	for (; o < r;) {
		let s = e, c = null, l = 0, u = null, d = -1, f = -1;
		for (; o < r && (c = s.go(n[o]));) s = c, s.accepts() ? (d = 0, f = 0, u = s) : d >= 0 && (d += n[o].length, f++), l += n[o].length, a += n[o].length, o++;
		a -= d, o -= f, l -= d, i.push({
			t: u.t,
			v: t.slice(a - l, a),
			s: a - l,
			e: a
		});
	}
	return i;
}
function hO(e) {
	let t = [], n = e.length, r = 0;
	for (; r < n;) {
		let i = e.charCodeAt(r), a, o = i < 55296 || i > 56319 || r + 1 === n || (a = e.charCodeAt(r + 1)) < 56320 || a > 57343 ? e[r] : e.slice(r, r + 2);
		t.push(o), r += o.length;
	}
	return t;
}
function gO(e, t, n, r, i) {
	let a, o = t.length;
	for (let n = 0; n < o - 1; n++) {
		let o = t[n];
		e.j[o] ? a = e.j[o] : (a = new XE(r), a.jr = i.slice(), e.j[o] = a), e = a;
	}
	return a = new XE(n), a.jr = i.slice(), e.j[t[o - 1]] = a, a;
}
function _O(e) {
	let t = [], n = [], r = 0;
	for (; r < e.length;) {
		let i = 0;
		for (; "0123456789".indexOf(e[r + i]) >= 0;) i++;
		if (i > 0) {
			t.push(n.join(""));
			for (let t = parseInt(e.substring(r, r + i), 10); t > 0; t--) n.pop();
			r += i;
		} else n.push(e[r]), r++;
	}
	return t;
}
var vO = {
	defaultProtocol: "http",
	events: null,
	format: bO,
	formatHref: bO,
	nl2br: !1,
	tagName: "a",
	target: null,
	rel: null,
	validate: !0,
	truncate: Infinity,
	className: null,
	attributes: null,
	ignoreTags: [],
	ignoreClasses: [],
	render: null
};
function yO(e, t = null) {
	let n = Object.assign({}, vO);
	e && (n = Object.assign(n, e instanceof yO ? e.o : e));
	let r = n.ignoreTags, i = [];
	for (let e = 0; e < r.length; e++) i.push(r[e].toUpperCase());
	this.o = n, t && (this.defaultRender = t), this.ignoreTags = i, this.ignoreClasses = n.ignoreClasses.slice();
}
yO.prototype = {
	o: vO,
	ignoreTags: [],
	ignoreClasses: [],
	isIgnoredClass(e) {
		if (typeof e != "string" || this.ignoreClasses.length === 0) return !1;
		let t = e.split(/\s+/);
		for (let e = 0; e < t.length; e++) if (this.ignoreClasses.indexOf(t[e]) >= 0) return !0;
		return !1;
	},
	defaultRender(e) {
		return e;
	},
	check(e) {
		return this.get("validate", e.toString(), e);
	},
	get(e, t, n) {
		let r = t != null, i = this.o[e];
		return i && (typeof i == "object" ? (i = n.t in i ? i[n.t] : vO[e], typeof i == "function" && r && (i = i(t, n))) : typeof i == "function" && r && (i = i(t, n.t, n)), i);
	},
	getObj(e, t, n) {
		let r = this.o[e];
		return typeof r == "function" && t != null && (r = r(t, n.t, n)), r;
	},
	render(e) {
		let t = e.render(this);
		return (this.get("render", null, e) || this.defaultRender)(t, e.t, e);
	}
};
function bO(e) {
	return e;
}
function xO(e, t) {
	this.t = "token", this.v = e, this.tk = t;
}
xO.prototype = {
	isLink: !1,
	toString() {
		return this.v;
	},
	toHref(e) {
		return this.toString();
	},
	toFormattedString(e) {
		let t = this.toString(), n = e.get("truncate", t, this), r = e.get("format", t, this);
		return n && r.length > n ? r.substring(0, n) + "…" : r;
	},
	toFormattedHref(e) {
		return e.get("formatHref", this.toHref(e.get("defaultProtocol")), this);
	},
	startIndex() {
		return this.tk[0].s;
	},
	endIndex() {
		return this.tk[this.tk.length - 1].e;
	},
	toObject(e = vO.defaultProtocol) {
		return {
			type: this.t,
			value: this.toString(),
			isLink: this.isLink,
			href: this.toHref(e),
			start: this.startIndex(),
			end: this.endIndex()
		};
	},
	toFormattedObject(e) {
		return {
			type: this.t,
			value: this.toFormattedString(e),
			isLink: this.isLink,
			href: this.toFormattedHref(e),
			start: this.startIndex(),
			end: this.endIndex()
		};
	},
	validate(e) {
		return e.get("validate", this.toString(), this);
	},
	render(e) {
		let t = this, n = this.toHref(e.get("defaultProtocol")), r = e.get("formatHref", n, this), i = e.get("tagName", n, t), a = this.toFormattedString(e), o = {}, s = e.get("className", n, t), c = e.get("target", n, t), l = e.get("rel", n, t), u = e.getObj("attributes", n, t), d = e.getObj("events", n, t);
		return o.href = r, s && (o.class = s), c && (o.target = c), l && (o.rel = l), u && Object.assign(o, u), {
			tagName: i,
			attributes: o,
			content: a,
			eventListeners: d
		};
	}
};
function SO(e, t) {
	class n extends xO {
		constructor(t, n) {
			super(t, n), this.t = e;
		}
	}
	for (let e in t) n.prototype[e] = t[e];
	return n.t = e, n;
}
var CO = SO("email", {
	isLink: !0,
	toHref() {
		return "mailto:" + this.toString();
	}
}), wO = SO("text"), TO = SO("nl"), EO = SO("url", {
	isLink: !0,
	toHref(e = vO.defaultProtocol) {
		return this.hasProtocol() ? this.v : `${e}://${this.v}`;
	},
	hasProtocol() {
		let e = this.tk;
		return e.length >= 2 && e[0].t !== rD && e[1].t === PD;
	}
}), DO = (e) => new XE(e);
function OO({ groups: e }) {
	let t = e.domain.concat([
		DD,
		kD,
		AD,
		jD,
		MD,
		ND,
		ID,
		RD,
		BD,
		cD,
		VD,
		HD,
		UD,
		WD,
		YD,
		$D,
		XD,
		ZD
	]), n = [
		OD,
		PD,
		FD,
		LD,
		zD,
		VD,
		GD,
		KD,
		JD,
		_D,
		vD,
		dD,
		fD,
		mD,
		pD,
		hD,
		gD,
		yD,
		bD,
		xD,
		SD,
		CD,
		wD,
		TD,
		ED
	], r = [
		DD,
		OD,
		kD,
		jD,
		MD,
		ND,
		ID,
		RD,
		BD,
		dD,
		fD,
		VD,
		HD,
		UD,
		WD,
		GD,
		YD,
		$D,
		XD,
		ZD
	], i = DO(), a = Q(i, XD);
	Z(a, r, a), Z(a, e.domain, a);
	let o = DO(), s = DO(), c = DO();
	Z(i, e.domain, o), Z(i, e.scheme, s), Z(i, e.slashscheme, c), Z(o, r, a), Z(o, e.domain, o);
	let l = Q(o, AD);
	Q(a, AD, l), Q(s, AD, l), Q(c, AD, l);
	let u = Q(a, LD);
	Z(u, r, a), Z(u, e.domain, a);
	let d = DO();
	Z(l, e.domain, d), Z(d, e.domain, d);
	let f = Q(d, LD);
	Z(f, e.domain, d);
	let p = DO(CO);
	Z(f, e.tld, p), Z(f, e.utld, p), Q(l, rD, p);
	let m = Q(d, BD);
	Q(m, BD, m), Z(m, e.domain, d), Z(p, e.domain, d), Q(p, LD, f), Q(p, BD, m);
	let h = Q(o, BD), g = Q(o, LD);
	Q(h, BD, h), Z(h, e.domain, o), Z(g, r, a), Z(g, e.domain, o);
	let _ = DO(EO);
	Z(g, e.tld, _), Z(g, e.utld, _), Z(_, e.domain, o), Z(_, r, a), Q(_, LD, g), Q(_, BD, h), Q(_, AD, l);
	let v = Q(_, PD), y = DO(EO);
	Z(v, e.numeric, y);
	let b = DO(EO), x = DO();
	Z(b, t, b), Z(b, n, x), Z(x, t, b), Z(x, n, x), Q(_, YD, b), Q(y, YD, b), Q(_, GD, x), Q(_, WD, b), Q(y, GD, x), Q(y, WD, b);
	let S = Q(s, PD), C = Q(Q(Q(c, PD), YD), YD);
	Z(s, e.domain, o), Q(s, LD, g), Q(s, BD, h), Z(c, e.domain, o), Q(c, LD, g), Q(c, BD, h), Z(S, e.domain, b), Q(S, YD, b), Q(S, GD, b), Z(C, e.domain, b), Z(C, t, b), Q(C, YD, b);
	let w = [
		[dD, fD],
		[pD, mD],
		[hD, gD],
		[_D, vD],
		[yD, bD],
		[xD, SD],
		[CD, wD],
		[TD, ED]
	];
	for (let e = 0; e < w.length; e++) {
		let [r, i] = w[e], a = Q(b, r);
		Q(x, r, a);
		let o = DO(EO);
		Z(a, t, o);
		let s = DO();
		Z(a, n, s), Q(a, i, b), Z(o, t, o), Z(o, n, s), Z(s, t, o), Z(s, n, s), Q(o, i, b), Q(s, i, b);
	}
	return Q(i, rD, _), Q(i, uD, TO), {
		start: i,
		tokens: eO
	};
}
function kO(e, t, n) {
	let r = n.length, i = 0, a = [], o = [], s = [];
	for (; i < r;) {
		let c = e, l = null, u = null, d = 0, f = null, p = -1, m = [];
		for (; i < r && !(l = c.go(n[i].t));) o.push(n[i++]);
		for (; i < r && (u = l || c.go(n[i].t));) if (l = null, c = u, i++, d++, c.accepts()) p = 0, f = c, m = [];
		else if (p >= 0 && p++, m.push(c), s[i] && s[i].has(c)) break;
		for (let e = 0, t = i - m.length + 1; e < m.length; e++, t++) (s[t] || (s[t] = /* @__PURE__ */ new Set())).add(m[e]);
		if (p < 0) i -= d, i < r && (o.push(n[i]), i++);
		else {
			o.length > 0 && (a.push(AO(wO, t, o)), o = []), i -= p, d -= p;
			let e = f.t, r = n.slice(i - d, i);
			a.push(AO(e, t, r));
		}
	}
	return o.length > 0 && a.push(AO(wO, t, o)), a;
}
function AO(e, t, n) {
	let r = n[0].s, i = n[n.length - 1].e;
	return new e(t.slice(r, i), n);
}
var jO = typeof console < "u" && console && console.warn || (() => {}), MO = "until manual call of linkify.init(). Register all schemes and plugins before invoking linkify the first time.", $ = {
	scanner: null,
	parser: null,
	tokenQueue: [],
	pluginQueue: [],
	customSchemes: [],
	initialized: !1
};
function NO() {
	return XE.groups = {}, $.scanner = null, $.parser = null, $.tokenQueue = [], $.pluginQueue = [], $.customSchemes = [], $.initialized = !1, $;
}
function PO(e, t = !1) {
	if ($.initialized && jO(`linkifyjs: already initialized - will not register custom scheme "${e}" ${MO}`), !/^[0-9a-z]+(-[0-9a-z]+)*$/.test(e)) throw Error("linkifyjs: incorrect scheme format.\n1. Must only contain digits, lowercase ASCII letters or \"-\"\n2. Cannot start or end with \"-\"\n3. \"-\" cannot repeat");
	$.customSchemes.push([e, t]);
}
function FO() {
	$.scanner = pO($.customSchemes);
	for (let e = 0; e < $.tokenQueue.length; e++) $.tokenQueue[e][1]({ scanner: $.scanner });
	$.parser = OO($.scanner.tokens);
	for (let e = 0; e < $.pluginQueue.length; e++) $.pluginQueue[e][1]({
		scanner: $.scanner,
		parser: $.parser
	});
	return $.initialized = !0, $;
}
function IO(e) {
	return $.initialized || FO(), kO($.parser.start, e, mO($.scanner.start, e));
}
IO.scan = mO;
function LO(e, t = null, n = null) {
	if (t && typeof t == "object") {
		if (n) throw Error(`linkifyjs: Invalid link type ${t}; must be a string`);
		n = t, t = null;
	}
	let r = new yO(n), i = IO(e), a = [];
	for (let e = 0; e < i.length; e++) {
		let n = i[e];
		n.isLink && (!t || n.t === t) && r.check(n) && a.push(n.toFormattedObject(r));
	}
	return a;
}
// node_modules/@tiptap/extension-link/dist/index.js
var RO = "[\0- \xA0 ᠎ -\u2029 　]", zO = new RegExp(RO), BO = RegExp(`${RO}$`), VO = RegExp(`${RO}+$`), HO = new RegExp(RO, "g");
function UO(e, t, n) {
	let r = e.doc.resolve(t.to);
	if (!r.nodeBefore?.isText) return;
	let i = e.doc.textBetween(t.from, t.to, "￼", "￼").match(VO)?.[0];
	if (!i) return;
	let a = t.to - i.length, o = Vy(a, t.to, e.doc).filter((e) => e.mark.type === n);
	if (!o.length) return;
	let { nodeAfter: s } = r;
	if (s && o.some((e) => e.mark.isInSet(s.marks))) return;
	let c = e.storedMarks;
	e.removeMark(a, t.to, n), e.setStoredMarks(c), e.selection.empty && e.selection.from === t.to && e.removeStoredMark(n);
}
function WO(e) {
	return e.length === 1 ? e[0].isLink : e.length === 3 && e[1].isLink ? ["()", "[]"].includes(e[0].value + e[2].value) : !1;
}
function GO(e) {
	return new H({
		key: new U("autolink"),
		appendTransaction: (t, n, r) => {
			let i = t.some((e) => e.docChanged) && !n.doc.eq(r.doc), a = t.some((e) => e.getMeta("preventAutolink"));
			if (!i || a) return;
			let { tr: o } = r, s = iy(n.doc, [...t]);
			if (!t.some(L_)) {
				let t = [];
				s.steps.forEach((e, n) => {
					if (!(e instanceof vu) || !e.slice.size) return;
					let r = s.mapping.slice(n + 1), i = r.map(e.from, 1), a = r.map(e.from + e.slice.size, -1);
					i < a && t.push({
						from: i,
						to: a
					});
				}), t.sort((e, t) => t.to - e.to), t.forEach((t) => UO(o, t, e.type));
			}
			if (By(s).forEach(({ newRange: t }) => {
				let n = ay(r.doc, t, (e) => e.isTextblock), i, a;
				if (n.length > 1) i = n[0], a = r.doc.textBetween(i.pos, i.pos + i.node.nodeSize, void 0, " ");
				else if (n.length) {
					let e = r.doc.textBetween(t.from, t.to, " ", " ");
					if (!BO.test(e)) return;
					i = n[0], a = r.doc.textBetween(i.pos, t.to, void 0, " ");
				}
				if (i && a) {
					let t = a.split(zO).filter(Boolean);
					if (t.length <= 0) return !1;
					let n = t[t.length - 1], s = i.pos + a.lastIndexOf(n);
					if (!n) return !1;
					let c = IO(n).map((t) => t.toObject(e.defaultProtocol));
					if (!WO(c)) return !1;
					c.filter((e) => e.isLink).map((e) => ({
						...e,
						from: s + e.start + 1,
						to: s + e.end + 1
					})).filter((e) => !r.schema.marks.code || !r.doc.rangeHasMark(e.from, e.to, r.schema.marks.code)).filter((t) => e.validate(t.value)).filter((t) => e.shouldAutoLink(t.value)).forEach((t) => {
						Vy(t.from, t.to, r.doc).some((t) => t.mark.type === e.type) || o.addMark(t.from, t.to, e.type.create({ href: t.href }));
					});
				}
			}), o.steps.length) return o;
		}
	});
}
function KO(e) {
	return new H({
		key: new U("handleClickLink"),
		props: { handleClick: (t, n, r) => {
			if (r.button !== 0 || !t.editable) return !1;
			let i = null;
			if (r.target instanceof HTMLAnchorElement) i = r.target;
			else {
				let t = r.target;
				if (!t) return !1;
				let n = e.editor.view.dom;
				i = t.closest("a"), i && !n.contains(i) && (i = null);
			}
			if (!i) return !1;
			let a = !1;
			if (e.enableClickSelection && (a = e.editor.commands.extendMarkRange(e.type.name)), e.openOnClick) {
				let n = Ly(t.state, e.type.name), r = i.href ?? n.href, o = i.target ?? n.target;
				r && (window.open(r, o), a = !0);
			}
			return a;
		} }
	});
}
var qO = /\[([^[\]]+)\]\(((?:[^\s()]|\([^\s()]*\))+)(?:\s+(?:(["'])(.*?)\3|“(.*?)”|‘(.*?)’))?\)$/, JO = /\[([^[\]]+)\]\(((?:[^\s()]|\([^\s()]*\))+)(?:\s+(?:(["'])(.*?)\3|“(.*?)”|‘(.*?)’))?\)/g;
function YO(e, t) {
	let n = 0;
	for (let r = t - 1; r >= 0 && e[r] === "\\"; --r) n += 1;
	return n % 2 == 1;
}
function XO(e, t) {
	let n = 0, r = 0;
	for (; r < t;) {
		if (e[r] !== "`" || n === 0 && YO(e, r)) {
			r += 1;
			continue;
		}
		let i = 0;
		for (; r < t && e[r] === "`";) i += 1, r += 1;
		n === 0 ? n = i : i === n && (n = 0);
	}
	return n > 0;
}
function ZO(e, t, n) {
	let [, r, i] = t;
	return (t.index ? e[t.index - 1] : void 0) === "!" || YO(e, t.index ?? 0) || XO(e, t.index ?? 0) ? !1 : !!r.trim() && n(i);
}
function QO(e) {
	let [t, n, r, , i, a, o] = e, s = i ?? a ?? o;
	return {
		index: e.index ?? 0,
		text: t,
		replaceWith: n,
		data: {
			href: r,
			title: s || null,
			markdown: !0
		}
	};
}
function $O(e, t) {
	return e.index < t.index + t.text.length && t.index < e.index + e.text.length;
}
function ek(e) {
	return {
		href: e.data?.href,
		title: e.data?.title ?? null
	};
}
function tk(e) {
	let t = cS({
		find: (t) => {
			let n = qO.exec(t);
			return !n || !ZO(t, n, e.isAllowedHref) ? null : QO(n);
		},
		type: e.type,
		getAttributes: ek
	});
	return new kx({
		find: t.find,
		handler: (e) => {
			let n = t.handler(e);
			return n !== null && e.state.tr.steps.length && e.state.tr.setMeta("preventAutolink", !0), n;
		}
	});
}
function nk(e) {
	let t = pS({
		find: (t) => {
			let n = [];
			for (let r of t.matchAll(JO)) ZO(t, r, e.isAllowedHref) && n.push(QO(r));
			let r = (e.findPlainUrls?.call(e, t) ?? []).filter((e) => !n.some((t) => $O(t, e)));
			return [...n, ...r];
		},
		type: e.type,
		getAttributes: ek
	});
	return new Rx({
		find: t.find,
		handler: (e) => {
			let n = t.handler(e);
			return n !== null && e.state.tr.steps.length && e.match.data?.markdown && e.state.tr.setMeta("preventAutolink", !0), n;
		}
	});
}
function rk(e) {
	return new H({
		key: new U("handlePasteLink"),
		props: { handlePaste: (t, n, r) => {
			let { shouldAutoLink: i } = e, { state: a } = t, { selection: o } = a, { empty: s } = o;
			if (s) return !1;
			let c = "";
			r.content.forEach((e) => {
				c += e.textContent;
			});
			let l = LO(c, { defaultProtocol: e.defaultProtocol }).find((e) => e.isLink && e.value === c);
			return !c || !l || i !== void 0 && !i(l.value) ? !1 : e.editor.commands.setMark(e.type, { href: l.href });
		} }
	});
}
function ik(e, t) {
	let n = [
		"http",
		"https",
		"ftp",
		"ftps",
		"mailto",
		"tel",
		"callto",
		"sms",
		"cid",
		"xmpp"
	];
	return t && t.forEach((e) => {
		let t = typeof e == "string" ? e : e.scheme;
		t && n.push(t);
	}), !e || e.replace(HO, "").match(RegExp(`^(?:(?:${n.map((e) => e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")).join("|")}):|[^a-z]|[a-z0-9+.\\-]+(?:[^a-z+.\\-:]|$))`, "i"));
}
var ak = Lx.create({
	name: "link",
	priority: 1e3,
	keepOnSplit: !1,
	exitable: !0,
	onCreate() {
		this.options.validate && !this.options.shouldAutoLink && (this.options.shouldAutoLink = this.options.validate, console.warn("The `validate` option is deprecated. Rename to the `shouldAutoLink` option instead.")), this.options.protocols.forEach((e) => {
			typeof e == "string" ? PO(e) : PO(e.scheme, e.optionalSlashes);
		});
	},
	onDestroy() {
		NO();
	},
	inclusive() {
		return this.options.autolink;
	},
	addOptions() {
		return {
			openOnClick: !0,
			enableClickSelection: !1,
			linkOnPaste: !0,
			markdownLinks: !1,
			autolink: !0,
			protocols: [],
			defaultProtocol: "http",
			HTMLAttributes: {
				target: "_blank",
				rel: "noopener noreferrer nofollow",
				class: null
			},
			isAllowedUri: (e, t) => !!ik(e, t.protocols),
			validate: (e) => !!e,
			shouldAutoLink: (e) => {
				let t = /^[a-z][a-z0-9+.-]*:\/\//i.test(e), n = /^[a-z][a-z0-9+.-]*:/i.test(e);
				if (t || n && !e.includes("@")) return !0;
				let r = (e.includes("@") ? e.split("@").pop() : e).split(/[/?#:]/)[0];
				return !(/^\d{1,3}(\.\d{1,3}){3}$/.test(r) || !/\./.test(r));
			}
		};
	},
	addAttributes() {
		return {
			href: {
				default: null,
				parseHTML(e) {
					return e.getAttribute("href");
				}
			},
			target: { default: this.options.HTMLAttributes.target ?? null },
			rel: { default: this.options.HTMLAttributes.rel ?? null },
			class: { default: this.options.HTMLAttributes.class ?? null },
			title: { default: null }
		};
	},
	parseHTML() {
		return [{
			tag: "a[href]",
			getAttrs: (e) => {
				let t = e.getAttribute("href");
				return !t || !this.options.isAllowedUri(t, {
					defaultValidate: (e) => !!ik(e, this.options.protocols),
					protocols: this.options.protocols,
					defaultProtocol: this.options.defaultProtocol
				}) ? !1 : null;
			}
		}];
	},
	renderHTML({ HTMLAttributes: e }) {
		return this.options.isAllowedUri(e.href, {
			defaultValidate: (e) => !!ik(e, this.options.protocols),
			protocols: this.options.protocols,
			defaultProtocol: this.options.defaultProtocol
		}) ? [
			"a",
			J(this.options.HTMLAttributes, e),
			0
		] : [
			"a",
			J(this.options.HTMLAttributes, {
				...e,
				href: ""
			}),
			0
		];
	},
	markdownTokenName: "link",
	parseMarkdown: (e, t) => t.applyMark("link", t.parseInline(e.tokens || []), {
		href: e.href,
		title: e.title || null
	}),
	renderMarkdown: (e, t) => {
		let n = e.attrs?.href ?? "", r = e.attrs?.title ?? "", i = t.renderChildren(e);
		return r ? `[${i}](${n} "${r}")` : `[${i}](${n})`;
	},
	addCommands() {
		return {
			setLink: (e) => ({ chain: t }) => {
				let { href: n } = e;
				return this.options.isAllowedUri(n, {
					defaultValidate: (e) => !!ik(e, this.options.protocols),
					protocols: this.options.protocols,
					defaultProtocol: this.options.defaultProtocol
				}) ? t().setMark(this.name, e).setMeta("preventAutolink", !0).run() : !1;
			},
			toggleLink: (e) => ({ chain: t }) => {
				let { href: n } = e || {};
				return n && !this.options.isAllowedUri(n, {
					defaultValidate: (e) => !!ik(e, this.options.protocols),
					protocols: this.options.protocols,
					defaultProtocol: this.options.defaultProtocol
				}) ? !1 : t().toggleMark(this.name, e, { extendEmptyMarkRange: !0 }).setMeta("preventAutolink", !0).run();
			},
			unsetLink: () => ({ chain: e }) => e().unsetMark(this.name, { extendEmptyMarkRange: !0 }).setMeta("preventAutolink", !0).run()
		};
	},
	addInputRules() {
		return this.options.markdownLinks ? [tk({
			type: this.type,
			isAllowedHref: (e) => this.options.isAllowedUri(e, {
				defaultValidate: (e) => !!ik(e, this.options.protocols),
				protocols: this.options.protocols,
				defaultProtocol: this.options.defaultProtocol
			})
		})] : [];
	},
	addPasteRules() {
		let e = (e) => {
			let t = [];
			if (e) {
				let { protocols: n, defaultProtocol: r } = this.options;
				LO(e, { defaultProtocol: r }).filter((e) => e.isLink && this.options.isAllowedUri(e.value, {
					defaultValidate: (e) => !!ik(e, n),
					protocols: n,
					defaultProtocol: r
				})).forEach((e) => {
					this.options.shouldAutoLink(e.value) && t.push({
						text: e.value,
						data: { href: e.href },
						index: e.start
					});
				});
			}
			return t;
		};
		return this.options.markdownLinks ? [nk({
			type: this.type,
			isAllowedHref: (e) => this.options.isAllowedUri(e, {
				defaultValidate: (e) => !!ik(e, this.options.protocols),
				protocols: this.options.protocols,
				defaultProtocol: this.options.defaultProtocol
			}),
			findPlainUrls: e
		})] : [pS({
			find: e,
			type: this.type,
			getAttributes: (e) => ({ href: e.data?.href })
		})];
	},
	addProseMirrorPlugins() {
		let e = [], { protocols: t, defaultProtocol: n } = this.options;
		return this.options.autolink && e.push(GO({
			type: this.type,
			defaultProtocol: this.options.defaultProtocol,
			validate: (e) => this.options.isAllowedUri(e, {
				defaultValidate: (e) => !!ik(e, t),
				protocols: t,
				defaultProtocol: n
			}),
			shouldAutoLink: this.options.shouldAutoLink
		})), e.push(KO({
			type: this.type,
			editor: this.editor,
			openOnClick: this.options.openOnClick === "whenNotEditable" || this.options.openOnClick,
			enableClickSelection: this.options.enableClickSelection
		})), this.options.linkOnPaste && e.push(rk({
			editor: this.editor,
			defaultProtocol: this.options.defaultProtocol,
			type: this.type,
			shouldAutoLink: this.options.shouldAutoLink
		})), e;
	}
}), ok = "&nbsp;", sk = "\xA0", ck = fS.create({
	name: "paragraph",
	priority: 1e3,
	addOptions() {
		return { HTMLAttributes: {} };
	},
	group: "block",
	content: "inline*",
	parseHTML() {
		return [{ tag: "p" }];
	},
	renderHTML({ HTMLAttributes: e }) {
		return [
			"p",
			J(this.options.HTMLAttributes, e),
			0
		];
	},
	parseMarkdown: (e, t) => {
		let n = e.tokens || [];
		if (n.length === 1 && n[0].type === "image") return t.parseChildren([n[0]]);
		let r = t.parseInline(n);
		return n.length === 1 && n[0].type === "text" && (n[0].raw === ok || n[0].text === ok || n[0].raw === sk || n[0].text === sk) && r.length === 1 && r[0].type === "text" && (r[0].text === ok || r[0].text === sk) ? t.createNode("paragraph", void 0, []) : t.createNode("paragraph", void 0, r);
	},
	renderMarkdown: (e, t, n) => {
		if (!e) return "";
		let r = Array.isArray(e.content) ? e.content : [];
		if (r.length === 0) {
			var i, a;
			let e = Array.isArray(n == null || (i = n.previousNode) == null ? void 0 : i.content) ? n.previousNode.content : [];
			return (n == null || (a = n.previousNode) == null ? void 0 : a.type) === "paragraph" && e.length === 0 ? ok : "";
		}
		return t.renderChildren(r);
	},
	addCommands() {
		return { setParagraph: () => ({ commands: e }) => e.setNode(this.name) };
	},
	addKeyboardShortcuts() {
		return { "Mod-Alt-0": () => this.editor.commands.setParagraph() };
	}
}), lk = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))$/, uk = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))/g, dk = Lx.create({
	name: "strike",
	addOptions() {
		return { HTMLAttributes: {} };
	},
	parseHTML() {
		return [
			{ tag: "s" },
			{ tag: "del" },
			{ tag: "strike" },
			{
				style: "text-decoration",
				consuming: !1,
				getAttrs: (e) => e.includes("line-through") ? {} : !1
			}
		];
	},
	renderHTML({ HTMLAttributes: e }) {
		return [
			"s",
			J(this.options.HTMLAttributes, e),
			0
		];
	},
	markdownTokenName: "del",
	parseMarkdown: (e, t) => t.applyMark("strike", t.parseInline(e.tokens || [])),
	renderMarkdown: (e, t) => `~~${t.renderChildren(e)}~~`,
	addCommands() {
		return {
			setStrike: () => ({ commands: e }) => e.setMark(this.name),
			toggleStrike: () => ({ commands: e }) => e.toggleMark(this.name),
			unsetStrike: () => ({ commands: e }) => e.unsetMark(this.name)
		};
	},
	addKeyboardShortcuts() {
		return { "Mod-Shift-s": () => this.editor.commands.toggleStrike() };
	},
	addInputRules() {
		return [cS({
			find: lk,
			type: this.type
		})];
	},
	addPasteRules() {
		return [pS({
			find: uk,
			type: this.type
		})];
	}
}), fk = fS.create({
	name: "text",
	group: "inline",
	parseMarkdown: (e) => ({
		type: "text",
		text: e.text || ""
	}),
	renderMarkdown: (e) => e.text || ""
}), pk = Lx.create({
	name: "underline",
	addOptions() {
		return { HTMLAttributes: {} };
	},
	parseHTML() {
		return [{ tag: "u" }, {
			style: "text-decoration",
			consuming: !1,
			getAttrs: (e) => e.includes("underline") ? {} : !1
		}];
	},
	renderHTML({ HTMLAttributes: e }) {
		return [
			"u",
			J(this.options.HTMLAttributes, e),
			0
		];
	},
	parseMarkdown(e, t) {
		return t.applyMark(this.name || "underline", t.parseInline(e.tokens || []));
	},
	renderMarkdown(e, t) {
		return `<u>${t.renderChildren(e)}</u>`;
	},
	markdownTokenizer: {
		name: "underline",
		level: "inline",
		start(e) {
			return e.toLowerCase().indexOf("<u>");
		},
		tokenize(e, t, n) {
			if (!/^<u>/i.test(e)) return;
			let r = /\\[\s\S]|`+|<\/u>/gi;
			r.lastIndex = 3;
			let i = r.exec(e);
			for (; i;) {
				if (i[0].startsWith("`")) {
					let t = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/.exec(e.slice(i.index));
					t && (r.lastIndex = i.index + t[0].length);
				} else if (!i[0].startsWith("\\")) {
					let t = e.slice(3, i.index);
					return t ? {
						type: "underline",
						raw: e.slice(0, r.lastIndex),
						text: t,
						tokens: n.inlineTokens(t)
					} : void 0;
				}
				i = r.exec(e);
			}
		}
	},
	addCommands() {
		return {
			setUnderline: () => ({ commands: e }) => e.setMark(this.name),
			toggleUnderline: () => ({ commands: e }) => e.toggleMark(this.name),
			unsetUnderline: () => ({ commands: e }) => e.unsetMark(this.name)
		};
	},
	addKeyboardShortcuts() {
		return {
			"Mod-u": () => this.editor.commands.toggleUnderline(),
			"Mod-U": () => this.editor.commands.toggleUnderline()
		};
	}
});
// node_modules/prosemirror-dropcursor/dist/index.js
function mk(e = {}) {
	return new H({ view(t) {
		return new hk(t, e);
	} });
}
var hk = class {
	constructor(e, t) {
		this.editorView = e, this.cursorPos = null, this.element = null, this.timeout = -1, this.lastDragEvent = null, this.width = t.width ?? 1, this.color = t.color === !1 ? void 0 : t.color || "black", this.class = t.class, this.handlers = [
			"dragover",
			"dragend",
			"drop",
			"dragleave"
		].map((t) => {
			let n = (e) => {
				this[t](e);
			};
			return e.dom.addEventListener(t, n), {
				name: t,
				handler: n
			};
		});
	}
	destroy() {
		this.setCursor(null), this.handlers.forEach(({ name: e, handler: t }) => this.editorView.dom.removeEventListener(e, t));
	}
	update(e, t) {
		if (this.cursorPos != null && t.doc != e.state.doc) {
			if (this.lastDragEvent) {
				let e = this.computeTarget(this.lastDragEvent);
				e == this.cursorPos ? this.updateOverlay() : this.setCursor(e);
			} else this.updateOverlay();
		}
	}
	setCursor(e) {
		e != this.cursorPos && (this.cursorPos = e, e == null ? (this.element.parentNode.removeChild(this.element), this.element = null) : this.updateOverlay());
	}
	updateOverlay() {
		let e = this.editorView.state.doc.resolve(this.cursorPos), t = !e.parent.inlineContent, n, r = this.editorView.dom, i = r.getBoundingClientRect(), a = i.width / r.offsetWidth, o = i.height / r.offsetHeight;
		if (t) {
			let t = e.nodeBefore, r = e.nodeAfter;
			if (t || r) {
				let e = this.editorView.nodeDOM(this.cursorPos - (t ? t.nodeSize : 0));
				if (e) {
					let i = e.getBoundingClientRect(), a = t ? i.bottom : i.top;
					t && r && (a = (a + this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top) / 2);
					let s = this.width / 2 * o;
					n = {
						left: i.left,
						right: i.right,
						top: a - s,
						bottom: a + s
					};
				}
			}
		}
		if (!n) {
			let e = this.editorView.coordsAtPos(this.cursorPos), t = this.width / 2 * a;
			n = {
				left: e.left - t,
				right: e.left + t,
				top: e.top,
				bottom: e.bottom
			};
		}
		let s = this.editorView.dom.offsetParent;
		this.element || (this.element = s.appendChild(document.createElement("div")), this.class && (this.element.className = this.class), this.element.style.cssText = "position: absolute; z-index: 50; pointer-events: none;", this.color && (this.element.style.backgroundColor = this.color)), this.element.classList.toggle("prosemirror-dropcursor-block", t), this.element.classList.toggle("prosemirror-dropcursor-inline", !t);
		let c, l;
		if (!s || s == document.body && getComputedStyle(s).position == "static") c = -pageXOffset, l = -pageYOffset;
		else {
			let e = s.getBoundingClientRect(), t = e.width / s.offsetWidth, n = e.height / s.offsetHeight;
			c = e.left - s.scrollLeft * t, l = e.top - s.scrollTop * n;
		}
		this.element.style.left = (n.left - c) / a + "px", this.element.style.top = (n.top - l) / o + "px", this.element.style.width = (n.right - n.left) / a + "px", this.element.style.height = (n.bottom - n.top) / o + "px";
	}
	scheduleRemoval(e) {
		clearTimeout(this.timeout), this.timeout = setTimeout(() => this.setCursor(null), e);
	}
	computeTarget(e) {
		let t = this.editorView.posAtCoords({
			left: e.clientX,
			top: e.clientY
		}), n = t && t.inside >= 0 && this.editorView.state.doc.nodeAt(t.inside), r = n && n.type.spec.disableDropCursor, i = typeof r == "function" ? r(this.editorView, t, e) : r;
		if (!t || i) return null;
		let a = t.pos;
		if (this.editorView.dragging && this.editorView.dragging.slice) {
			let e = Gu(this.editorView.state.doc, a, this.editorView.dragging.slice);
			e != null && (a = e);
		}
		return a;
	}
	dragover(e) {
		if (!this.editorView.editable) return;
		this.lastDragEvent = e;
		let t = this.computeTarget(e);
		t != null && (this.setCursor(t), this.scheduleRemoval(5e3));
	}
	dragend() {
		this.scheduleRemoval(20);
	}
	drop() {
		this.scheduleRemoval(20);
	}
	dragleave(e) {
		this.editorView.dom.contains(e.relatedTarget) || this.setCursor(null);
	}
}, gk = class e extends z {
	constructor(e) {
		super(e, e);
	}
	map(t, n) {
		let r = t.resolve(n.map(this.head));
		return e.valid(r) ? new e(r) : z.near(r);
	}
	content() {
		return R.empty;
	}
	eq(t) {
		return t instanceof e && t.head == this.head;
	}
	toJSON() {
		return {
			type: "gapcursor",
			pos: this.head
		};
	}
	static fromJSON(t, n) {
		if (typeof n.pos != "number") throw RangeError("Invalid input for GapCursor.fromJSON");
		return new e(t.resolve(n.pos));
	}
	getBookmark() {
		return new _k(this.anchor);
	}
	static valid(e) {
		let t = e.parent;
		if (t.inlineContent || !yk(e) || !bk(e)) return !1;
		let n = t.type.spec.allowGapCursor;
		if (n != null) return n;
		let r = t.contentMatchAt(e.index()).defaultType;
		return r && r.isTextblock;
	}
	static findGapCursorFrom(t, n, r = !1) {
		search: for (;;) {
			if (!r && e.valid(t)) return t;
			let i = t.pos, a = null;
			for (let r = t.depth;; r--) {
				let o = t.node(r);
				if (n > 0 ? t.indexAfter(r) < o.childCount : t.index(r) > 0) {
					a = o.child(n > 0 ? t.indexAfter(r) : t.index(r) - 1);
					break;
				}
				if (r == 0) return null;
				i += n;
				let s = t.doc.resolve(i);
				if (e.valid(s)) return s;
			}
			for (;;) {
				let o = n > 0 ? a.firstChild : a.lastChild;
				if (!o) {
					if (a.isAtom && !a.isText && !V.isSelectable(a)) {
						t = t.doc.resolve(i + a.nodeSize * n), r = !1;
						continue search;
					}
					break;
				}
				a = o, i += n;
				let s = t.doc.resolve(i);
				if (e.valid(s)) return s;
			}
			return null;
		}
	}
};
gk.prototype.visible = !1, gk.findFrom = gk.findGapCursorFrom, z.jsonID("gapcursor", gk);
var _k = class e {
	constructor(e) {
		this.pos = e;
	}
	map(t) {
		return new e(t.map(this.pos));
	}
	resolve(e) {
		let t = e.resolve(this.pos);
		return gk.valid(t) ? new gk(t) : z.near(t);
	}
};
function vk(e) {
	return e.isAtom || e.spec.isolating || e.spec.createGapCursor;
}
function yk(e) {
	for (let t = e.depth; t >= 0; t--) {
		let n = e.index(t), r = e.node(t);
		if (n == 0) {
			if (r.type.spec.isolating) return !0;
		} else for (let e = r.child(n - 1);; e = e.lastChild) {
			if (e.childCount == 0 && !e.inlineContent || vk(e.type)) return !0;
			if (e.inlineContent) return !1;
		}
	}
	return !0;
}
function bk(e) {
	for (let t = e.depth; t >= 0; t--) {
		let n = e.indexAfter(t), r = e.node(t);
		if (n == r.childCount) {
			if (r.type.spec.isolating) return !0;
		} else for (let e = r.child(n);; e = e.firstChild) {
			if (e.childCount == 0 && !e.inlineContent || vk(e.type)) return !0;
			if (e.inlineContent) return !1;
		}
	}
	return !0;
}
function xk() {
	return new H({ props: {
		decorations: Ek,
		createSelectionBetween(e, t, n) {
			return t.pos == n.pos && gk.valid(n) ? new gk(n) : null;
		},
		handleClick: wk,
		handleKeyDown: Sk,
		handleDOMEvents: { beforeinput: Tk }
	} });
}
var Sk = d_({
	ArrowLeft: Ck("horiz", -1),
	ArrowRight: Ck("horiz", 1),
	ArrowUp: Ck("vert", -1),
	ArrowDown: Ck("vert", 1)
});
function Ck(e, t) {
	let n = e == "vert" ? t > 0 ? "down" : "up" : t > 0 ? "right" : "left";
	return function(e, r, i) {
		let a = e.selection, o = t > 0 ? a.$to : a.$from, s = a.empty;
		if (a instanceof B) {
			if (!i.endOfTextblock(n) || o.depth == 0) return !1;
			s = !1, o = e.doc.resolve(t > 0 ? o.after() : o.before());
		}
		let c = gk.findGapCursorFrom(o, t, s);
		return c ? (r && r(e.tr.setSelection(new gk(c))), !0) : !1;
	};
}
function wk(e, t, n) {
	if (!e || !e.editable) return !1;
	let r = e.state.doc.resolve(t);
	if (!gk.valid(r)) return !1;
	let i = e.posAtCoords({
		left: n.clientX,
		top: n.clientY
	});
	return i && i.inside > -1 && V.isSelectable(e.state.doc.nodeAt(i.inside)) ? !1 : (e.dispatch(e.state.tr.setSelection(new gk(r))), !0);
}
function Tk(e, t) {
	if (t.inputType != "insertCompositionText" || !(e.state.selection instanceof gk)) return !1;
	let { $from: n } = e.state.selection, r = n.parent.contentMatchAt(n.index()).findWrapping(e.state.schema.nodes.text);
	if (!r) return !1;
	let i = I.empty;
	for (let e = r.length - 1; e >= 0; e--) i = I.from(r[e].createAndFill(null, i));
	let a = e.state.tr.replace(n.pos, n.pos, new R(i, 0, 0));
	return a.setSelection(B.near(a.doc.resolve(n.pos + 1))), e.dispatch(a), !1;
}
function Ek(e) {
	if (!(e.selection instanceof gk)) return null;
	let t = document.createElement("div");
	return t.className = "ProseMirror-gapcursor", G.create(e.doc, [cg.widget(e.selection.head, t, { key: "gapcursor" })]);
}
Y.create({
	name: "characterCount",
	addOptions() {
		return {
			limit: null,
			autoTrim: !0,
			mode: "textSize",
			textCounter: (e) => e.length,
			wordCounter: (e) => e.split(" ").filter((e) => e !== "").length
		};
	},
	addStorage() {
		return {
			characters: () => 0,
			words: () => 0
		};
	},
	onBeforeCreate() {
		this.storage.characters = (e) => {
			let t = e?.node || this.editor.state.doc;
			if ((e?.mode || this.options.mode) === "textSize") {
				let e = t.textBetween(0, t.content.size, void 0, " ");
				return this.options.textCounter(e);
			}
			return t.nodeSize;
		}, this.storage.words = (e) => {
			let t = e?.node || this.editor.state.doc, n = t.textBetween(0, t.content.size, " ", " ");
			return this.options.wordCounter(n);
		};
	},
	addProseMirrorPlugins() {
		let e = !1;
		return [new H({
			key: new U("characterCount"),
			appendTransaction: (t, n, r) => {
				if (e) return;
				let i = this.options.limit, a = this.options.autoTrim;
				if (i == null || i === 0 || a === !1) {
					e = !0;
					return;
				}
				let o = this.storage.characters({ node: r.doc });
				if (o > i) {
					let t = o - i;
					console.warn(`[CharacterCount] Initial content exceeded limit of ${i} characters. Content was automatically trimmed.`);
					let n = r.tr.deleteRange(0, t);
					return e = !0, n;
				}
				e = !0;
			},
			filterTransaction: (e, t) => {
				let n = this.options.limit;
				if (!e.docChanged || n === 0 || n == null) return !0;
				let r = this.storage.characters({ node: t.doc }), i = this.storage.characters({ node: e.doc });
				if (i <= n || r > n && i > n && i <= r) return !0;
				if (r > n && i > n && i > r || !e.getMeta("paste")) return !1;
				let a = e.selection.$head.pos, o = a - (i - n), s = a;
				return e.deleteRange(o, s), !(this.storage.characters({ node: e.doc }) > n);
			}
		})];
	}
});
var Dk = Y.create({
	name: "dropCursor",
	addOptions() {
		return {
			color: "currentColor",
			width: 1,
			class: void 0
		};
	},
	addProseMirrorPlugins() {
		return [mk(this.options)];
	}
});
Y.create({
	name: "focus",
	addOptions() {
		return {
			className: "has-focus",
			mode: "all"
		};
	},
	addProseMirrorPlugins() {
		return [new H({
			key: new U("focus"),
			props: { decorations: ({ doc: e, selection: t }) => {
				let { isEditable: n, isFocused: r } = this.editor, { anchor: i } = t, a = [];
				if (!n || !r) return G.create(e, []);
				let o = 0;
				this.options.mode === "deepest" && e.descendants((e, t) => {
					if (!e.isText) {
						if (!(i >= t && i <= t + e.nodeSize - 1)) return !1;
						o += 1;
					}
				});
				let s = 0;
				return e.descendants((e, t) => {
					if (e.isText || !(i >= t && i <= t + e.nodeSize - 1)) return !1;
					if (s += 1, this.options.mode === "deepest" && o - s > 0 || this.options.mode === "shallowest" && s > 1) return this.options.mode === "deepest";
					a.push(cg.node(t, t + e.nodeSize, { class: this.options.className }));
				}), G.create(e, a);
			} }
		})];
	}
});
var Ok = Y.create({
	name: "gapCursor",
	addProseMirrorPlugins() {
		return [xk()];
	},
	extendNodeSchema(e) {
		return { allowGapCursor: q(K(e, "allowGapCursor", {
			name: e.name,
			options: e.options,
			storage: e.storage
		})) ?? null };
	}
}), kk = "placeholder", Ak = new U("tiptap__placeholder");
function jk(e) {
	let { editor: t, placeholder: n, dataAttribute: r, pos: i, node: a, isEmptyDoc: o, hasAnchor: s, classes: { emptyNode: c, emptyEditor: l } } = e, u = [c];
	return o && u.push(l), cg.node(i, i + a.nodeSize, {
		class: u.join(" "),
		[r]: typeof n == "function" ? n({
			editor: t,
			node: a,
			pos: i,
			hasAnchor: s
		}) : n
	});
}
function Mk(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function Nk({ editor: e, options: t, dataAttribute: n, doc: r, selection: i, from: a, to: o }) {
	let { anchor: s } = i, c = [], l = e.isEmpty;
	return r.nodesBetween(a, o, (r, i) => {
		let a = s >= i && s <= i + r.nodeSize, o = !r.isLeaf && $y(r);
		return r.type.isTextblock && (a || !t.showOnlyCurrent) && o && c.push(jk({
			editor: e,
			isEmptyDoc: l,
			dataAttribute: n,
			hasAnchor: a,
			placeholder: t.placeholder,
			classes: {
				emptyEditor: t.emptyEditorClass,
				emptyNode: Mk(t.emptyNodeClass, {
					editor: e,
					node: r,
					pos: i,
					hasAnchor: a
				})
			},
			node: r,
			pos: i
		})), t.includeChildren;
	}), c;
}
function Pk({ editor: e, options: t, dataAttribute: n, doc: r, selection: i }) {
	if (!e.isEditable && t.showOnlyWhenEditable) return null;
	let { anchor: a } = i, o = [], s = e.isEmpty;
	if (t.showOnlyCurrent && !t.includeChildren) {
		let i = r.resolve(a), c = i.depth > 0 ? i.node(1) : i.nodeAfter, l = i.depth > 0 ? i.before(1) : a;
		if (c && c.type.isTextblock && $y(c)) {
			let r = a >= l && a <= l + c.nodeSize;
			o.push(jk({
				editor: e,
				isEmptyDoc: s,
				dataAttribute: n,
				hasAnchor: r,
				placeholder: t.placeholder,
				classes: {
					emptyEditor: t.emptyEditorClass,
					emptyNode: Mk(t.emptyNodeClass, {
						editor: e,
						node: c,
						pos: l,
						hasAnchor: r
					})
				},
				node: c,
				pos: l
			}));
		}
	} else o.push(...Nk({
		editor: e,
		options: t,
		dataAttribute: n,
		doc: r,
		selection: i,
		from: 0,
		to: r.content.size
	}));
	return G.create(r, o);
}
function Fk(e, t) {
	let n = e.resolve(t);
	if (n.depth === 0) {
		let e = n.nodeAfter ?? n.nodeBefore;
		if (!e) return {
			from: t,
			to: t
		};
		let r = n.nodeAfter ? t : t - e.nodeSize;
		return {
			from: r,
			to: r + e.nodeSize
		};
	}
	let r = n.before(1);
	return {
		from: r,
		to: r + n.node(1).nodeSize
	};
}
function Ik(e, t) {
	return {
		from: Math.max(0, t.from),
		to: Math.min(e.content.size, t.to)
	};
}
function Lk(e, t, n) {
	let r = [];
	return e.forEach((e, i) => {
		let a = i, o = a + e.nodeSize, s = a + 1, c = o + 1;
		s < n && c > t && r.push({
			from: a,
			to: o
		});
	}), r;
}
function Rk(e) {
	if (e.length === 0) return [];
	let t = [...e].sort((e, t) => e.from - t.from), n = [{ ...t[0] }];
	for (let e = 1; e < t.length; e += 1) {
		let r = n[n.length - 1], i = t[e];
		i.from <= r.to ? r.to = Math.max(r.to, i.to) : n.push({ ...i });
	}
	return n;
}
function zk(e, t) {
	let n = Lk(e, t.from, t.to);
	return n.push(Ik(e, Fk(e, t.from))), t.to > t.from ? n.push(Ik(e, Fk(e, Math.min(t.to, e.content.size + 1) - 1))) : t.from < e.content.size + 1 && n.push(Ik(e, Fk(e, Math.min(t.from + 1, e.content.size)))), n;
}
function Bk(e, t, n) {
	let r = [];
	if (e.docChanged) {
		let t = By(e);
		for (let e of t) r.push(...zk(n.doc, e.newRange));
	}
	return e.selectionSet && (r.push(Ik(n.doc, Fk(n.doc, e.mapping.map(t.selection.anchor)))), r.push(Ik(n.doc, Fk(n.doc, n.selection.anchor)))), Rk(r);
}
function Vk(e, t, n) {
	let r = Math.max(0, Math.min(e, n.content.size));
	return {
		from: r,
		to: Math.max(r, Math.min(t, n.content.size))
	};
}
function Hk({ decorations: e, ranges: t, editor: n, options: r, dataAttribute: i, doc: a, selection: o }) {
	let s = e;
	for (let e of t) {
		let { from: t, to: c } = Vk(e.from, e.to, a), l = s.find(t, c).filter((e) => e.from >= t && e.to <= c);
		l.length && (s = s.remove(l));
		let u = Nk({
			editor: n,
			options: r,
			dataAttribute: i,
			doc: a,
			selection: o,
			from: t,
			to: c
		});
		u.length && (s = s.add(a, u));
	}
	return s;
}
function Uk({ editor: e, options: t, dataAttribute: n }) {
	return {
		init(r, i) {
			return Pk({
				editor: e,
				options: t,
				dataAttribute: n,
				doc: i.doc,
				selection: i.selection
			}) ?? G.empty;
		},
		apply(r, i, a, o) {
			return !r.docChanged && !r.selectionSet ? i : Hk({
				decorations: i.map(r.mapping, r.doc),
				ranges: Bk(r, a, o),
				editor: e,
				options: t,
				dataAttribute: n,
				doc: o.doc,
				selection: o.selection
			});
		}
	};
}
function Wk(e) {
	return e.replace(/\s+/g, "-").replace(/[^a-zA-Z0-9-]/g, "").replace(/^[0-9-]+/, "").replace(/^-+/, "").toLowerCase();
}
function Gk({ editor: e, options: t }) {
	let n = t.dataAttribute ? `data-${Wk(t.dataAttribute)}` : `data-${kk}`, r = t.showOnlyCurrent && !t.includeChildren;
	return new H({
		key: Ak,
		...r ? {} : { state: Uk({
			editor: e,
			options: t,
			dataAttribute: n
		}) },
		props: { decorations: r ? ({ doc: r, selection: i }) => Pk({
			editor: e,
			options: t,
			dataAttribute: n,
			doc: r,
			selection: i
		}) : (n) => t.showOnlyWhenEditable && !e.isEditable ? G.empty : Ak.getState(n) ?? G.empty }
	});
}
Y.create({
	name: "placeholder",
	addOptions() {
		return {
			emptyEditorClass: "is-editor-empty",
			emptyNodeClass: "is-empty",
			dataAttribute: kk,
			placeholder: "Write something …",
			showOnlyWhenEditable: !0,
			showOnlyCurrent: !0,
			includeChildren: !1
		};
	},
	addProseMirrorPlugins() {
		return [Gk({
			editor: this.editor,
			options: this.options
		})];
	}
});
function Kk(e, t) {
	return !e.selection.empty && !eb(e.selection) && t.isEditable;
}
function qk(e, t) {
	return Kk(e, t) && !t.isFocused && !t.view.dragging;
}
function Jk() {
	var e;
	(e = window.getSelection()) == null || e.removeAllRanges();
}
function Yk(e) {
	e.focus();
}
Y.create({
	name: "selection",
	addOptions() {
		return { className: "selection" };
	},
	addProseMirrorPlugins() {
		let { editor: e, options: t } = this;
		return [new H({
			key: new U("selection"),
			props: {
				decorations(n) {
					return qk(n, e) ? G.create(n.doc, [cg.inline(n.selection.from, n.selection.to, { class: t.className })]) : null;
				},
				handleDOMEvents: {
					blur(t) {
						return Kk(t.state, e) && Jk(), !1;
					},
					focus(t) {
						return Kk(t.state, e) && requestAnimationFrame(() => {
							!e.isDestroyed && t.hasFocus() && Yk(t);
						}), !1;
					}
				}
			}
		})];
	}
});
function Xk({ types: e, node: t }) {
	return t && Array.isArray(e) && e.includes(t.type) || t?.type === e;
}
var Zk = Y.create({
	name: "trailingNode",
	addOptions() {
		return {
			node: void 0,
			notAfter: []
		};
	},
	addProseMirrorPlugins() {
		let e = new U(this.name), t = this.options.node || this.editor.schema.topNodeType.contentMatch.defaultType?.name || "paragraph", n = Object.entries(this.editor.schema.nodes).map(([, e]) => e).filter((e) => (this.options.notAfter || []).concat(t).includes(e.name));
		return [new H({
			key: e,
			appendTransaction: (n, r, i) => {
				let { doc: a, tr: o, schema: s } = i, c = e.getState(i), l = a.content.size, u = s.nodes[t];
				if (!n.some((e) => e.getMeta("skipTrailingNode")) && c) return o.insert(l, u.create());
			},
			state: {
				init: (e, t) => {
					let r = t.tr.doc.lastChild;
					return !Xk({
						node: r,
						types: n
					});
				},
				apply: (e, t) => {
					if (!e.docChanged || e.getMeta("__uniqueIDTransaction")) return t;
					let r = e.doc.lastChild;
					return !Xk({
						node: r,
						types: n
					});
				}
			}
		})];
	}
}), Qk = Y.create({
	name: "undoRedo",
	addOptions() {
		return {
			depth: 100,
			newGroupDelay: 500
		};
	},
	addCommands() {
		return {
			undo: () => ({ state: e, dispatch: t }) => F_(e, t),
			redo: () => ({ state: e, dispatch: t }) => I_(e, t)
		};
	},
	addProseMirrorPlugins() {
		return [N_(this.options)];
	},
	addKeyboardShortcuts() {
		return {
			"Mod-z": () => this.editor.commands.undo(),
			"Shift-Mod-z": () => this.editor.commands.redo(),
			"Mod-y": () => this.editor.commands.redo(),
			"Mod-я": () => this.editor.commands.undo(),
			"Shift-Mod-я": () => this.editor.commands.redo()
		};
	}
}), $k = Y.create({
	name: "starterKit",
	addExtensions() {
		let e = [];
		return this.options.bold !== !1 && e.push(_E.configure(this.options.bold)), this.options.blockquote !== !1 && e.push(fE.configure(this.options.blockquote)), this.options.bulletList !== !1 && e.push(bS.configure(this.options.bulletList)), this.options.code !== !1 && e.push(xE.configure(this.options.code)), this.options.codeBlock !== !1 && e.push(TE.configure(this.options.codeBlock)), this.options.document !== !1 && e.push(EE.configure(this.options.document)), this.options.dropcursor !== !1 && e.push(Dk.configure(this.options.dropcursor)), this.options.gapcursor !== !1 && e.push(Ok.configure(this.options.gapcursor)), this.options.hardBreak !== !1 && e.push(DE.configure(this.options.hardBreak)), this.options.heading !== !1 && e.push(OE.configure(this.options.heading)), this.options.undoRedo !== !1 && e.push(Qk.configure(this.options.undoRedo)), this.options.horizontalRule !== !1 && e.push(kE.configure(this.options.horizontalRule)), this.options.italic !== !1 && e.push(PE.configure(this.options.italic)), this.options.listItem !== !1 && e.push(JS.configure(this.options.listItem)), this.options.listKeymap !== !1 && e.push(rC.configure(this.options?.listKeymap)), this.options.link !== !1 && e.push(ak.configure(this.options?.link)), this.options.orderedList !== !1 && e.push(CC.configure(this.options.orderedList)), this.options.paragraph !== !1 && e.push(ck.configure(this.options.paragraph)), this.options.strike !== !1 && e.push(dk.configure(this.options.strike)), this.options.text !== !1 && e.push(fk.configure(this.options.text)), this.options.underline !== !1 && e.push(pk.configure(this.options?.underline)), this.options.trailingNode !== !1 && e.push(Zk.configure(this.options?.trailingNode)), e;
	}
});
// node_modules/@tiptap/vue-3/dist/index.js
function eA(e) {
	return an((t, n) => ({
		get() {
			return t(), e;
		},
		set(t) {
			e = t, requestAnimationFrame(() => {
				requestAnimationFrame(() => {
					n();
				});
			});
		}
	}));
}
var tA = class extends sS {
	constructor(e = {}) {
		return super(e), this.contentComponent = null, this.appContext = null, this.reactiveState = eA(this.view.state), this.reactiveExtensionStorage = eA(this.extensionStorage), this.on("beforeTransaction", ({ nextState: e }) => {
			this.reactiveState.value = e, this.reactiveExtensionStorage.value = this.extensionStorage;
		}), qt(this);
	}
	get state() {
		var e;
		return (e = this.reactiveState) == null || e.value, super.state;
	}
	get storage() {
		return this.reactiveExtensionStorage ? this.reactiveExtensionStorage.value : super.storage;
	}
	registerPlugin(e, t) {
		let n = super.registerPlugin(e, t);
		return this.reactiveState && (this.reactiveState.value = n), n;
	}
	unregisterPlugin(e) {
		let t = super.unregisterPlugin(e);
		return this.reactiveState && t && (this.reactiveState.value = t), t;
	}
}, nA = /* @__PURE__ */ ir({
	name: "EditorContent",
	props: { editor: {
		default: null,
		type: Object
	} },
	setup(e) {
		let t = /* @__PURE__ */ j(), n = xa();
		return Kn(() => {
			let r = e.editor;
			r && r.options.element && t.value && Tn(() => {
				if (!t.value || !r.view.dom?.parentNode) return;
				let e = en(t.value);
				t.value.append(...r.view.dom.parentNode.childNodes), r.view.updateRoot(), r.contentComponent = n.ctx._, n && (r.appContext = {
					...n.appContext,
					provides: n.provides
				}), r.setOptions({ element: e }), r.createNodeViews();
			});
		}), Sr(() => {
			let t = e.editor;
			t && (t.contentComponent = null, t.appContext = null);
		}), { rootEl: t };
	},
	render() {
		return Ra("div", { ref: (e) => {
			this.rootEl = e;
		} });
	}
}), rA = {
	__name: "TextBlock",
	props: {
		element: {
			type: Object,
			required: !0
		},
		autofocus: {
			type: Boolean,
			default: !1
		},
		selected: {
			type: Boolean,
			default: !1
		}
	},
	emits: [
		"change",
		"focus",
		"blur",
		"remove",
		"height",
		"drag-start",
		"resize-start"
	],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ j(null), a = /* @__PURE__ */ Zt(null), o = /* @__PURE__ */ j(!1), s = n.element.doc, c = null;
		return yr(() => {
			a.value = new tA({
				content: n.element.doc ?? "",
				extensions: [
					$k.configure({ link: {
						openOnClick: !1,
						autolink: !0
					} }),
					OC,
					DC.configure({ nested: !0 }),
					qT.configure({ table: { resizable: !1 } }),
					gS.configure({ multicolor: !0 }),
					ZT,
					$T
				],
				onUpdate: ({ editor: e }) => {
					s = e.getJSON(), r("change", s);
				},
				onFocus: ({ editor: e }) => {
					o.value = !0, r("focus", e);
				},
				onBlur: ({ editor: e }) => {
					o.value = !1, r("blur", e), xc(e.getJSON()) && r("remove");
				}
			}), n.autofocus && a.value.commands.focus("end"), c = new ResizeObserver(() => {
				i.value && r("height", i.value.offsetHeight);
			}), c.observe(i.value);
		}), qn(() => n.element.doc, (e) => {
			a.value && e !== s && (s = e, a.value.commands.setContent(e ?? "", { emitUpdate: !1 }));
		}), Sr(() => {
			c?.disconnect(), a.value?.destroy();
		}), (t, n) => (N(), P("div", {
			ref_key: "root",
			ref: i,
			class: O(["nb-element nb-text", {
				"nb-element--focused": o.value,
				"nb-element--selected": e.selected
			}]),
			style: de({
				left: e.element.x + "px",
				top: e.element.y + "px",
				width: e.element.width + "px"
			})
		}, [
			F("div", {
				class: "nb-handle",
				title: "Verschieben",
				onPointerdown: n[0] ||= Lo((e) => t.$emit("drag-start", e), ["stop", "prevent"])
			}, null, 32),
			a.value ? (N(), ea(en(nA), {
				key: 0,
				editor: a.value,
				class: "nb-text__content"
			}, null, 8, ["editor"])) : ua("", !0),
			F("div", {
				class: "nb-resize nb-resize--x",
				title: "Breite ändern",
				onPointerdown: n[1] ||= Lo((e) => t.$emit("resize-start", e), ["stop", "prevent"])
			}, null, 32)
		], 6));
	}
}, iA = { class: "nb-toolbar__group" }, aA = [
	"title",
	"aria-label",
	"aria-pressed",
	"onClick"
], oA = ["innerHTML"], sA = ["innerHTML"], cA = {
	key: 0,
	class: "nb-toolbar__group"
}, lA = [
	"title",
	"aria-label",
	"onClick"
], uA = [
	"title",
	"aria-label",
	"onClick"
], dA = {
	key: 1,
	class: "nb-toolbar__group"
}, fA = [
	"title",
	"aria-label",
	"onClick"
], pA = ["innerHTML"], mA = { class: "nb-toolbar__group nb-toolbar__group--end" }, hA = ["disabled"], gA = ["innerHTML"], _A = ["disabled"], vA = ["innerHTML"], yA = {
	__name: "Toolbar",
	props: {
		tool: {
			type: String,
			required: !0
		},
		color: {
			type: String,
			required: !0
		},
		size: {
			type: Number,
			required: !0
		},
		editor: {
			type: Object,
			default: null
		},
		editorTick: {
			type: Number,
			default: 0
		},
		canUndo: {
			type: Boolean,
			default: !1
		},
		canRedo: {
			type: Boolean,
			default: !1
		},
		zoom: {
			type: Number,
			default: 1
		}
	},
	emits: [
		"update:tool",
		"update:color",
		"update:size",
		"insert-image",
		"undo",
		"redo",
		"zoom"
	],
	setup(e) {
		let t = e, n = {
			text: "<path d=\"M5 6V4h14v2M12 4v16M9 20h6\"/>",
			pen: "<path d=\"M4 20l4-1 11-11-3-3L5 16z\"/><path d=\"M14 6l3 3\"/>",
			highlighter: "<path d=\"M9 11l-5 5v3h3l5-5\"/><path d=\"M9 11l6-6 4 4-6 6z\"/><path d=\"M14 20h6\"/>",
			eraser: "<path d=\"M7 20h10\"/><path d=\"M5 14l8-8a2 2 0 0 1 3 0l3 3a2 2 0 0 1 0 3l-7 7H9z\"/><path d=\"M9 10l6 6\"/>",
			lasso: "<path d=\"M12 4c5 0 8 2.5 8 5.5S16.4 15 12 15 4 12.5 4 9.5 7 4 12 4z\" stroke-dasharray=\"3 3\"/><path d=\"M7 14c-1 2 0 4 2 5\"/>",
			image: "<rect x=\"3\" y=\"4\" width=\"18\" height=\"16\" rx=\"2\"/><circle cx=\"9\" cy=\"10\" r=\"2\"/><path d=\"m21 16-5-5-9 9\"/>",
			undo: "<path d=\"M9 14 4 9l5-5\"/><path d=\"M4 9h10a6 6 0 0 1 0 12h-3\"/>",
			redo: "<path d=\"m15 14 5-5-5-5\"/><path d=\"M20 9H10a6 6 0 0 0 0 12h3\"/>",
			bullet: "<path d=\"M9 6h11M9 12h11M9 18h11\"/><circle cx=\"4.5\" cy=\"6\" r=\"1\"/><circle cx=\"4.5\" cy=\"12\" r=\"1\"/><circle cx=\"4.5\" cy=\"18\" r=\"1\"/>",
			ordered: "<path d=\"M10 6h10M10 12h10M10 18h10M4 4h1v4M4 8h2M4 14h2l-2 3h2\"/>",
			task: "<rect x=\"3\" y=\"4\" width=\"6\" height=\"6\" rx=\"1\"/><path d=\"m4.5 7 1 1 2-2M12 7h9M3 16h6M12 16h9\"/>",
			table: "<rect x=\"3\" y=\"4\" width=\"18\" height=\"16\" rx=\"1\"/><path d=\"M3 10h18M3 15h18M9 4v16M15 4v16\"/>",
			marker: "<path d=\"M4 20h16\" stroke=\"#f5d90a\" stroke-width=\"4\"/><path d=\"M8 16 14 4l4 2-6 12z\"/>"
		}, r = [
			{
				id: "text",
				label: "Schreiben und auswählen",
				icon: n.text
			},
			{
				id: "pen",
				label: "Stift",
				icon: n.pen
			},
			{
				id: "highlighter",
				label: "Textmarker",
				icon: n.highlighter
			},
			{
				id: "eraser",
				label: "Radierer",
				icon: n.eraser
			},
			{
				id: "lasso",
				label: "Lasso-Auswahl",
				icon: n.lasso
			}
		], i = [
			"#1f2937",
			"#2563eb",
			"#dc2626",
			"#16a34a",
			"#9333ea",
			"#ea580c"
		], a = [
			"#facc15",
			"#4ade80",
			"#38bdf8",
			"#f472b6",
			"#fb923c"
		], o = {
			pen: [
				{
					value: 2,
					dot: 4,
					label: "Fein"
				},
				{
					value: 4,
					dot: 7,
					label: "Mittel"
				},
				{
					value: 8,
					dot: 11,
					label: "Breit"
				}
			],
			highlighter: [{
				value: 14,
				dot: 7,
				label: "Schmal"
			}, {
				value: 22,
				dot: 11,
				label: "Breit"
			}]
		}, s = La(() => t.tool === "highlighter" ? a : i), c = La(() => o[t.tool] ?? o.pen), l = [
			{
				id: "bold",
				label: "Fett",
				text: "F",
				textClass: "is-bold",
				run: (e) => e.toggleBold()
			},
			{
				id: "italic",
				label: "Kursiv",
				text: "K",
				textClass: "is-italic",
				run: (e) => e.toggleItalic()
			},
			{
				id: "underline",
				label: "Unterstrichen",
				text: "U",
				textClass: "is-underline",
				run: (e) => e.toggleUnderline()
			},
			{
				id: "strike",
				label: "Durchgestrichen",
				text: "S",
				textClass: "is-strike",
				run: (e) => e.toggleStrike()
			},
			{
				id: "h1",
				label: "Überschrift 1",
				text: "Ü1",
				active: ["heading", { level: 1 }],
				run: (e) => e.toggleHeading({ level: 1 })
			},
			{
				id: "h2",
				label: "Überschrift 2",
				text: "Ü2",
				active: ["heading", { level: 2 }],
				run: (e) => e.toggleHeading({ level: 2 })
			},
			{
				id: "bulletList",
				label: "Aufzählung",
				icon: n.bullet,
				run: (e) => e.toggleBulletList()
			},
			{
				id: "orderedList",
				label: "Nummerierung",
				icon: n.ordered,
				run: (e) => e.toggleOrderedList()
			},
			{
				id: "taskList",
				label: "Aufgabenliste",
				icon: n.task,
				run: (e) => e.toggleTaskList()
			},
			{
				id: "highlight",
				label: "Hervorheben",
				icon: n.marker,
				run: (e) => e.toggleHighlight({ color: "#fef08a" })
			},
			{
				id: "table",
				label: "Tabelle einfügen",
				icon: n.table,
				active: ["table"],
				run: (e) => e.insertTable({
					rows: 3,
					cols: 3,
					withHeaderRow: !0
				})
			}
		];
		function u(e) {
			return t.editorTick >= 0 && t.editor.isActive(...e.active ?? [e.id]);
		}
		return (t, i) => (N(), P("div", {
			class: "nb-toolbar",
			role: "toolbar",
			"aria-label": "Werkzeuge",
			onMousedown: i[6] ||= Lo(() => {}, ["prevent"])
		}, [
			F("div", iA, [(N(), P(M, null, kr(r, (n) => F("button", {
				key: n.id,
				type: "button",
				class: O(["nb-tool", { "nb-tool--active": e.tool === n.id }]),
				title: n.label,
				"aria-label": n.label,
				"aria-pressed": e.tool === n.id,
				onClick: (e) => t.$emit("update:tool", n.id)
			}, [(N(), P("svg", {
				viewBox: "0 0 24 24",
				"aria-hidden": "true",
				innerHTML: n.icon
			}, null, 8, oA))], 10, aA)), 64)), F("button", {
				type: "button",
				class: "nb-tool",
				title: "Bild einfügen",
				"aria-label": "Bild einfügen",
				onClick: i[0] ||= (e) => t.$emit("insert-image")
			}, [(N(), P("svg", {
				viewBox: "0 0 24 24",
				"aria-hidden": "true",
				innerHTML: n.image
			}, null, 8, sA))])]),
			e.tool === "pen" || e.tool === "highlighter" ? (N(), P("div", cA, [(N(!0), P(M, null, kr(s.value, (n) => (N(), P("button", {
				key: n,
				type: "button",
				class: O(["nb-swatch", { "nb-swatch--active": e.color === n }]),
				style: de({ "--swatch": n }),
				title: "Farbe " + n,
				"aria-label": "Farbe " + n,
				onClick: (e) => t.$emit("update:color", n)
			}, null, 14, lA))), 128)), (N(!0), P(M, null, kr(c.value, (n) => (N(), P("button", {
				key: n.value,
				type: "button",
				class: O(["nb-tool nb-size", { "nb-tool--active": e.size === n.value }]),
				title: n.label,
				"aria-label": n.label,
				onClick: (e) => t.$emit("update:size", n.value)
			}, [F("span", { style: de({
				width: n.dot + "px",
				height: n.dot + "px"
			}) }, null, 4)], 10, uA))), 128))])) : ua("", !0),
			e.editor ? (N(), P("div", dA, [(N(), P(M, null, kr(l, (t) => F("button", {
				key: t.id,
				type: "button",
				class: O(["nb-tool", { "nb-tool--active": u(t) }]),
				title: t.label,
				"aria-label": t.label,
				onClick: (n) => t.run(e.editor.chain().focus()).run()
			}, [t.icon ? (N(), P("svg", {
				key: 0,
				viewBox: "0 0 24 24",
				"aria-hidden": "true",
				innerHTML: t.icon
			}, null, 8, pA)) : (N(), P("span", {
				key: 1,
				class: O(["nb-tool__text", t.textClass])
			}, we(t.text), 3))], 10, fA)), 64))])) : ua("", !0),
			F("div", mA, [
				F("button", {
					type: "button",
					class: "nb-tool",
					title: "Rückgängig (Strg+Z)",
					"aria-label": "Rückgängig",
					disabled: !e.canUndo,
					onClick: i[1] ||= (e) => t.$emit("undo")
				}, [(N(), P("svg", {
					viewBox: "0 0 24 24",
					"aria-hidden": "true",
					innerHTML: n.undo
				}, null, 8, gA))], 8, hA),
				F("button", {
					type: "button",
					class: "nb-tool",
					title: "Wiederholen (Strg+Y)",
					"aria-label": "Wiederholen",
					disabled: !e.canRedo,
					onClick: i[2] ||= (e) => t.$emit("redo")
				}, [(N(), P("svg", {
					viewBox: "0 0 24 24",
					"aria-hidden": "true",
					innerHTML: n.redo
				}, null, 8, vA))], 8, _A),
				F("button", {
					type: "button",
					class: "nb-tool",
					title: "Verkleinern",
					"aria-label": "Verkleinern",
					onClick: i[3] ||= (e) => t.$emit("zoom", -1)
				}, "−"),
				F("button", {
					type: "button",
					class: "nb-tool nb-zoom",
					title: "Ansicht zurücksetzen",
					"aria-label": "Ansicht zurücksetzen",
					onClick: i[4] ||= (e) => t.$emit("zoom", 0)
				}, we(Math.round(e.zoom * 100)) + " % ", 1),
				F("button", {
					type: "button",
					class: "nb-tool",
					title: "Vergrößern",
					"aria-label": "Vergrößern",
					onClick: i[5] ||= (e) => t.$emit("zoom", 1)
				}, "+")
			])
		], 32));
	}
}, bA = { class: "nb-page" }, xA = {
	class: "nb-ink",
	"aria-hidden": "true"
}, SA = [
	"d",
	"fill",
	"fill-opacity"
], CA = [
	"d",
	"fill",
	"fill-opacity"
], wA = ["points", "stroke-width"], TA = [
	"x",
	"y",
	"width",
	"height",
	"stroke-width"
], EA = {
	key: 0,
	class: "nb-hint"
}, DA = .25, OA = 4, kA = 24, AA = 100, jA = {
	__name: "PageCanvas",
	props: {
		pageId: {
			type: Number,
			required: !0
		},
		initialContent: {
			type: Object,
			required: !0
		}
	},
	emits: ["change", "error"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ j(JSON.parse(JSON.stringify(n.initialContent))), a = /* @__PURE__ */ zt({
			x: 48,
			y: 32,
			zoom: 1
		}), o = /* @__PURE__ */ j("text"), s = /* @__PURE__ */ zt({
			pen: {
				color: "#1f2937",
				size: 2
			},
			highlighter: {
				color: "#facc15",
				size: 14
			}
		}), c = /* @__PURE__ */ zt({}), l = /* @__PURE__ */ j(null), u = /* @__PURE__ */ Zt(null), d = /* @__PURE__ */ j(0), f = /* @__PURE__ */ j(null), p = /* @__PURE__ */ j([]), m = /* @__PURE__ */ j({
			strokeIds: [],
			elementIds: []
		}), h = /* @__PURE__ */ j([]), g = /* @__PURE__ */ j([]), _ = /* @__PURE__ */ j(null), v = /* @__PURE__ */ j(null), y = /* @__PURE__ */ j(null), b = /* @__PURE__ */ new Map(), x = null, S = !1, C = !1, w = null, ee = /* @__PURE__ */ new WeakMap(), T = La(() => s[o.value]?.color ?? s.pen.color), te = La(() => s[o.value]?.size ?? s.pen.size), E = La(() => new Set(m.value.strokeIds)), ne = La(() => new Set(m.value.elementIds)), D = La(() => vc(i.value, m.value, c)), re = La(() => [...i.value.strokes.filter((e) => e.tool === "highlighter"), ...i.value.strokes.filter((e) => e.tool !== "highlighter")]), ie = La(() => ({
			backgroundSize: `${kA * a.zoom}px ${kA * a.zoom}px`,
			backgroundPosition: `${a.x}px ${a.y}px`
		}));
		function ae(e) {
			let t = ee.get(e);
			return t === void 0 && (t = ac(e), ee.set(e, t)), t;
		}
		function oe(e) {
			o.value = e, e !== "lasso" && k(), e !== "text" && u.value?.commands.blur();
		}
		function se(e) {
			s[o.value] && (s[o.value].color = e);
		}
		function ce(e) {
			s[o.value] && (s[o.value].size = e);
		}
		function le() {
			return JSON.parse(JSON.stringify(i.value));
		}
		function ue() {
			w = le();
		}
		function fe(e = !0) {
			e && w && (h.value.push(w), h.value.length > AA && h.value.shift(), g.value = [], pe()), w = null;
		}
		function pe() {
			r("change", i.value);
		}
		function me() {
			h.value.length !== 0 && (g.value.push(le()), i.value = h.value.pop(), k(), pe());
		}
		function he() {
			g.value.length !== 0 && (h.value.push(le()), i.value = g.value.pop(), k(), pe());
		}
		function ge(e, t) {
			let n = _.value.getBoundingClientRect();
			return [lc((e - n.left - a.x) / a.zoom), lc((t - n.top - a.y) / a.zoom)];
		}
		function _e(e, t, n) {
			let r = _.value.getBoundingClientRect(), i = Math.min(OA, Math.max(DA, a.zoom * e)), o = t - r.left, s = n - r.top;
			a.x = o - (o - a.x) / a.zoom * i, a.y = s - (s - a.y) / a.zoom * i, a.zoom = i;
		}
		function ve(e) {
			let t = _.value.getBoundingClientRect();
			e === 0 ? (a.x = 48, a.y = 32, a.zoom = 1) : _e(e > 0 ? 1.25 : .8, t.left + t.width / 2, t.top + t.height / 2);
		}
		function ye(e) {
			e.preventDefault(), e.ctrlKey || e.metaKey ? _e(Math.exp(-e.deltaY * .01), e.clientX, e.clientY) : e.shiftKey ? a.x -= e.deltaY : (a.x -= e.deltaX, a.y -= e.deltaY);
		}
		function be(e) {
			try {
				_.value.setPointerCapture(e.pointerId);
			} catch {}
		}
		function xe() {
			return [...b.values()].filter((e) => e.type === "touch");
		}
		function Se() {
			let [e, t] = xe();
			x?.type === "stroke" && x.pointerType === "touch" && (f.value = null), x = {
				type: "pinch",
				distance: Math.hypot(e.x - t.x, e.y - t.y),
				center: [(e.x + t.x) / 2, (e.y + t.y) / 2]
			}, y.value = "pinch";
		}
		function Ce(e) {
			if (e.pointerType === "pen" && (S = !0), b.set(e.pointerId, {
				x: e.clientX,
				y: e.clientY,
				type: e.pointerType
			}), e.pointerType === "touch" && xe().length === 2) {
				Se();
				return;
			}
			if (x || o.value === "text" && e.button !== 1 && e.target.closest(".nb-element")) return;
			let [t, n] = ge(e.clientX, e.clientY), r = [
				"pen",
				"highlighter",
				"eraser",
				"lasso"
			].includes(o.value), i = e.pointerType === "touch" && r && !S;
			if (e.button === 1 || C || e.pointerType === "touch" && !i) we(e);
			else {
				if (e.pointerType === "pen" && (e.buttons & 32) == 32 || o.value === "eraser") e.preventDefault(), ue(), x = {
					type: "erase",
					pointerId: e.pointerId,
					radius: 8 / a.zoom,
					changed: !1
				}, ke(t, n), be(e);
				else if (o.value === "pen" || o.value === "highlighter") {
					e.preventDefault();
					let r = s[o.value];
					f.value = {
						id: sc(),
						tool: o.value,
						color: r.color,
						size: r.size,
						points: [[
							t,
							n,
							Ee(e)
						]],
						simulatePressure: e.pointerType !== "pen"
					}, x = {
						type: "stroke",
						pointerId: e.pointerId,
						pointerType: e.pointerType
					}, be(e);
				} else if (o.value === "lasso") {
					e.preventDefault();
					let r = D.value;
					r && t >= r.minX && t <= r.maxX && n >= r.minY && n <= r.maxY ? (ue(), x = {
						type: "move-selection",
						pointerId: e.pointerId,
						last: [t, n],
						moved: !1
					}) : (k(), p.value = [[t, n]], x = {
						type: "lasso",
						pointerId: e.pointerId
					}), be(e);
				} else x = {
					type: "tap",
					pointerId: e.pointerId,
					start: [e.clientX, e.clientY],
					world: [t, n]
				}, be(e);
				y.value = x?.type ?? null;
			}
		}
		function we(e) {
			e.preventDefault(), x = {
				type: "pan",
				pointerId: e.pointerId,
				last: [e.clientX, e.clientY]
			}, y.value = "pan", be(e);
		}
		function Te(e, t, n) {
			x || o.value !== "text" || (ue(), x = {
				type: n,
				pointerId: e.pointerId,
				element: t,
				start: ge(e.clientX, e.clientY),
				origin: {
					x: t.x,
					y: t.y,
					width: t.width,
					height: t.height
				},
				moved: !1
			}, y.value = n, be(e));
		}
		function Ee(e) {
			return e.pointerType === "pen" && e.pressure > 0 ? lc(e.pressure * 100) / 100 : .5;
		}
		function De(e) {
			let t = b.get(e.pointerId);
			if (t && (t.x = e.clientX, t.y = e.clientY), !x) return;
			if (x.type === "pinch") {
				let e = xe();
				if (e.length < 2) return;
				let [t, n] = e, r = Math.hypot(t.x - n.x, t.y - n.y), i = [(t.x + n.x) / 2, (t.y + n.y) / 2];
				a.x += i[0] - x.center[0], a.y += i[1] - x.center[1], _e(r / x.distance, i[0], i[1]), x.distance = r, x.center = i;
				return;
			}
			if (e.pointerId !== x.pointerId) return;
			let [n, r] = ge(e.clientX, e.clientY);
			switch (x.type) {
				case "pan":
					a.x += e.clientX - x.last[0], a.y += e.clientY - x.last[1], x.last = [e.clientX, e.clientY];
					break;
				case "tap":
					Math.hypot(e.clientX - x.start[0], e.clientY - x.start[1]) > 6 && (x = {
						type: "pan",
						pointerId: e.pointerId,
						last: [e.clientX, e.clientY]
					}, y.value = "pan");
					break;
				case "stroke": {
					let t = e.getCoalescedEvents?.() ?? [e], n = f.value.points;
					for (let r of t.length > 0 ? t : [e]) {
						let [e, t] = ge(r.clientX, r.clientY), i = n[n.length - 1];
						Math.hypot(e - i[0], t - i[1]) >= .5 / a.zoom && n.push([
							e,
							t,
							Ee(r)
						]);
					}
					break;
				}
				case "erase":
					ke(n, r);
					break;
				case "lasso":
					p.value.push([n, r]);
					break;
				case "move-selection": {
					let e = n - x.last[0], t = r - x.last[1];
					i.value = yc(i.value, m.value, e, t), x.last = [n, r], x.moved = !0;
					break;
				}
				case "move-element":
					x.element.x = lc(x.origin.x + n - x.start[0]), x.element.y = lc(x.origin.y + r - x.start[1]), x.moved = !0;
					break;
				case "resize-element": {
					let e = Math.max(80, x.origin.width + n - x.start[0]);
					x.element.type === "image" && (x.element.height = lc(x.origin.height * (e / x.origin.width))), x.element.width = lc(e), x.moved = !0;
					break;
				}
			}
		}
		function Oe(e) {
			if (b.delete(e.pointerId), x) {
				if (x.type === "pinch") xe().length < 2 && (x = null, y.value = null);
				else if (e.pointerId === x.pointerId) {
					switch (x.type) {
						case "tap":
							Ae(x.world[0], x.world[1]);
							break;
						case "stroke":
							f.value && (ue(), i.value.strokes.push(f.value), f.value = null, fe(!0));
							break;
						case "erase":
							fe(x.changed);
							break;
						case "lasso":
							m.value = _c(i.value, p.value, c), p.value = [];
							break;
						case "move-selection":
						case "move-element":
						case "resize-element": fe(x.moved);
					}
					x = null, y.value = null;
				}
			}
		}
		function ke(e, t) {
			let n = fc(i.value.strokes, e, t, x.radius);
			n.length !== i.value.strokes.length && (i.value.strokes = n, x.changed = !0);
		}
		function k() {
			m.value = {
				strokeIds: [],
				elementIds: []
			}, p.value = [];
		}
		function Ae(e, t) {
			ue();
			let n = {
				id: sc(),
				type: "text",
				x: e,
				y: lc(t - 12),
				width: 360,
				doc: null
			};
			i.value.elements.push(n), l.value = n.id, fe(!0);
		}
		function je(e, t) {
			e.doc = t, pe();
		}
		function Me(e) {
			u.value = e, e.on("transaction", Pe);
		}
		function Ne(e) {
			e.off("transaction", Pe), setTimeout(() => {
				u.value === e && !e.isFocused && (u.value = null);
			}, 0);
		}
		function Pe() {
			d.value++;
		}
		function Fe(e) {
			i.value.elements = i.value.elements.filter((t) => t.id !== e), delete c[e], l.value === e && (l.value = null), pe();
		}
		async function Ie(e, t) {
			try {
				let { fileId: r } = await Xo.uploadImage(n.pageId, e), a = await Le(e), o = Math.min(480, a.width), s = lc(a.height * (o / a.width)), [c, l] = t ?? Re();
				ue(), i.value.elements.push({
					id: sc(),
					type: "image",
					x: lc(c - o / 2),
					y: lc(l - s / 2),
					width: o,
					height: s,
					fileId: r
				}), fe(!0);
			} catch (e) {
				r("error", e.message);
			}
		}
		function Le(e) {
			return new Promise((t) => {
				let n = URL.createObjectURL(e), r = new Image();
				r.onload = () => {
					t({
						width: r.naturalWidth || 320,
						height: r.naturalHeight || 240
					}), URL.revokeObjectURL(n);
				}, r.onerror = () => {
					t({
						width: 320,
						height: 240
					}), URL.revokeObjectURL(n);
				}, r.src = n;
			});
		}
		function Re() {
			let e = _.value.getBoundingClientRect();
			return ge(e.left + e.width / 2, e.top + e.height / 2);
		}
		function ze(e) {
			let [t] = e.target.files;
			t && Ie(t), e.target.value = "";
		}
		function Be(e) {
			let t = ge(e.clientX, e.clientY);
			for (let n of e.dataTransfer?.files ?? []) n.type.startsWith("image/") && Ie(n, t);
		}
		function Ve(e) {
			return e.target.closest?.("input, textarea, [contenteditable=\"true\"]");
		}
		function He(e) {
			if (e.code === "Space" && !Ve(e)) {
				C = !0, e.preventDefault();
				return;
			}
			if (Ve(e)) return;
			let t = e.ctrlKey || e.metaKey;
			t && e.key.toLowerCase() === "z" && !e.shiftKey ? (e.preventDefault(), me()) : t && (e.key.toLowerCase() === "y" || e.shiftKey && e.key.toLowerCase() === "z") ? (e.preventDefault(), he()) : (e.key === "Delete" || e.key === "Backspace") && D.value ? (e.preventDefault(), ue(), i.value = bc(i.value, m.value), k(), fe(!0)) : e.key === "Escape" && k();
		}
		function Ue(e) {
			e.code === "Space" && (C = !1);
		}
		function We(e) {
			if (!Ve(e)) for (let t of e.clipboardData?.items ?? []) t.kind === "file" && t.type.startsWith("image/") && (e.preventDefault(), Ie(t.getAsFile()));
		}
		return yr(() => {
			window.addEventListener("keydown", He), window.addEventListener("keyup", Ue), window.addEventListener("paste", We);
		}), Sr(() => {
			window.removeEventListener("keydown", He), window.removeEventListener("keyup", Ue), window.removeEventListener("paste", We);
		}), (e, t) => (N(), P("div", bA, [
			aa(yA, {
				tool: o.value,
				color: T.value,
				size: te.value,
				editor: u.value,
				"editor-tick": d.value,
				"can-undo": h.value.length > 0,
				"can-redo": g.value.length > 0,
				zoom: a.zoom,
				"onUpdate:tool": oe,
				"onUpdate:color": se,
				"onUpdate:size": ce,
				onInsertImage: t[0] ||= (e) => v.value.click(),
				onUndo: me,
				onRedo: he,
				onZoom: ve
			}, null, 8, [
				"tool",
				"color",
				"size",
				"editor",
				"editor-tick",
				"can-undo",
				"can-redo",
				"zoom"
			]),
			F("div", {
				ref_key: "viewport",
				ref: _,
				class: O(["nb-canvas", ["nb-canvas--" + o.value, { "nb-canvas--panning": y.value === "pan" }]]),
				style: de(ie.value),
				onPointerdown: Ce,
				onPointermove: De,
				onPointerup: Oe,
				onPointercancel: Oe,
				onWheel: ye,
				onDragover: t[1] ||= Lo(() => {}, ["prevent"]),
				onDrop: Lo(Be, ["prevent"])
			}, [F("div", {
				class: "nb-world",
				style: de({ transform: `translate(${a.x}px, ${a.y}px) scale(${a.zoom})` })
			}, [(N(!0), P(M, null, kr(i.value.elements, (e) => (N(), P(M, { key: e.id }, [e.type === "text" ? (N(), ea(rA, {
				key: 0,
				element: e,
				autofocus: e.id === l.value,
				selected: ne.value.has(e.id),
				onChange: (t) => je(e, t),
				onFocus: Me,
				onBlur: Ne,
				onRemove: (t) => Fe(e.id),
				onHeight: (t) => c[e.id] = t,
				onDragStart: (t) => Te(t, e, "move-element"),
				onResizeStart: (t) => Te(t, e, "resize-element")
			}, null, 8, [
				"element",
				"autofocus",
				"selected",
				"onChange",
				"onRemove",
				"onHeight",
				"onDragStart",
				"onResizeStart"
			])) : (N(), ea(Cc, {
				key: 1,
				element: e,
				src: en(Xo).imageUrl(e.fileId),
				selected: ne.value.has(e.id),
				onDragStart: (t) => Te(t, e, "move-element"),
				onResizeStart: (t) => Te(t, e, "resize-element")
			}, null, 8, [
				"element",
				"src",
				"selected",
				"onDragStart",
				"onResizeStart"
			]))], 64))), 128)), (N(), P("svg", xA, [
				(N(!0), P(M, null, kr(re.value, (e) => (N(), P("path", {
					key: e.id,
					d: ae(e),
					fill: e.color,
					"fill-opacity": en(ic)[e.tool]?.opacity ?? 1,
					class: O({ "nb-ink--selected": E.value.has(e.id) })
				}, null, 10, SA))), 128)),
				f.value ? (N(), P("path", {
					key: 0,
					d: en(ac)(f.value, !1),
					fill: f.value.color,
					"fill-opacity": en(ic)[f.value.tool].opacity
				}, null, 8, CA)) : ua("", !0),
				p.value.length > 1 ? (N(), P("polyline", {
					key: 1,
					class: "nb-lasso",
					points: p.value.map((e) => e.join(",")).join(" "),
					"stroke-width": 1.5 / a.zoom
				}, null, 8, wA)) : ua("", !0),
				D.value ? (N(), P("rect", {
					key: 2,
					class: "nb-selection",
					x: D.value.minX - 6,
					y: D.value.minY - 6,
					width: D.value.maxX - D.value.minX + 12,
					height: D.value.maxY - D.value.minY + 12,
					"stroke-width": 1.5 / a.zoom
				}, null, 8, TA)) : ua("", !0)
			]))], 4), i.value.elements.length === 0 && i.value.strokes.length === 0 ? (N(), P("p", EA, " Irgendwo klicken und schreiben, mit dem Stift zeichnen oder Bilder hineinziehen. ")) : ua("", !0)], 38),
			F("input", {
				ref_key: "fileInput",
				ref: v,
				type: "file",
				accept: "image/png,image/jpeg,image/gif,image/webp",
				hidden: "",
				onChange: ze
			}, null, 544)
		]));
	}
}, MA = { class: "nb-main" }, NA = { class: "nb-main__header" }, PA = [
	"title",
	"aria-label",
	"aria-expanded"
], FA = { class: "nb-date" }, IA = {
	key: 2,
	class: "nb-empty"
}, LA = { key: 1 }, RA = "austit-notebook-last", zA = 800, BA = {
	__name: "App",
	setup(e) {
		let t = /* @__PURE__ */ j([]), n = /* @__PURE__ */ j(null), r = /* @__PURE__ */ j(null), i = /* @__PURE__ */ j(null), a = /* @__PURE__ */ j(null), o = /* @__PURE__ */ j(0), s = /* @__PURE__ */ j(""), c = /* @__PURE__ */ j(!0), l = /* @__PURE__ */ j(window.innerWidth > 700), u = /* @__PURE__ */ j(null), d = /* @__PURE__ */ j("idle"), f = null, p = null, m = null, h = null, g = La(() => ({
			idle: "",
			dirty: "Nicht gespeichert …",
			saving: "Speichert …",
			saved: "Gespeichert",
			conflict: "Konflikt",
			error: "Nicht gespeichert"
		})[d.value]), _ = La(() => {
			let e = a.value?.content.created;
			return e ? (/* @__PURE__ */ new Date(e * 1e3)).toLocaleString("de-DE", {
				dateStyle: "full",
				timeStyle: "short"
			}) : "";
		});
		function v(e, t = "error") {
			u.value = {
				text: e,
				type: t
			};
		}
		function y() {
			try {
				window.localStorage.setItem(RA, JSON.stringify({
					notebookId: n.value,
					sectionId: r.value,
					pageId: i.value
				}));
			} catch {}
		}
		function b() {
			try {
				return JSON.parse(window.localStorage.getItem(RA) ?? "null") ?? {};
			} catch {
				return {};
			}
		}
		async function x() {
			t.value = (await Xo.tree()).notebooks;
		}
		async function S({ notebookId: e = null, sectionId: o = null, pageId: s = null }) {
			await T();
			let c = t.value.find((t) => t.id === e) ?? t.value[0] ?? null, u = c?.sections.find((e) => e.id === o) ?? c?.sections[0] ?? null, d = u?.pages.find((e) => e.id === s) ?? u?.pages[0] ?? null;
			n.value = c?.id ?? null, r.value = u?.id ?? null, ((d?.id ?? null) !== i.value || a.value === null) && await C(d?.id ?? null), y(), window.innerWidth <= 700 && d && s && (l.value = !1);
		}
		async function C(e) {
			if (i.value = e, a.value = null, d.value = "idle", e !== null) try {
				let t = await Xo.getPage(e);
				f = t.etag, a.value = {
					...t,
					content: cc(t.content)
				}, s.value = t.name, o.value++;
			} catch (e) {
				v(e.message);
			}
		}
		function w(e) {
			p = e, d.value = "dirty", clearTimeout(m), m = setTimeout(() => ee(), zA);
		}
		async function ee() {
			if (clearTimeout(m), h && await h, d.value !== "dirty" || !p || i.value === null) return;
			let e = i.value, t = JSON.parse(JSON.stringify(p));
			d.value = "saving", h = Xo.savePage(e, t, f).then((e) => {
				f = e.etag, d.value === "saving" && (d.value = "saved");
			}).catch((e) => {
				e instanceof Ko && e.status === 409 ? (d.value = "conflict", v("Diese Seite wurde inzwischen an anderer Stelle geändert.", "warning")) : (d.value = "error", v(e.message));
			}).finally(() => {
				h = null;
			}), await h;
		}
		async function T() {
			d.value === "dirty" ? await ee() : h && await h;
		}
		async function te() {
			u.value = null, await C(i.value);
		}
		async function E() {
			u.value = null, f = (await Xo.getPage(i.value)).etag, d.value = "dirty", await ee();
		}
		async function ne() {
			let e = s.value.trim();
			!a.value || e === "" || e === a.value.name ? s.value = a.value?.name ?? "" : await ie({
				id: i.value,
				name: e
			});
		}
		async function D({ type: e, parentId: t }) {
			try {
				if (e === "notebook") {
					let { id: e } = await Xo.createNotebook("Neues Notizbuch"), t = await Xo.createSection(e, "Allgemein");
					await Xo.createPage(t.id, "Unbenannte Seite"), await x(), await S({ notebookId: e });
				} else if (e === "section") {
					let { id: e } = await Xo.createSection(t, "Neuer Abschnitt");
					await Xo.createPage(e, "Unbenannte Seite"), await x(), await S({
						notebookId: t,
						sectionId: e
					});
				} else {
					let { id: e } = await Xo.createPage(t, "Unbenannte Seite");
					await x(), await S({
						notebookId: n.value,
						sectionId: t,
						pageId: e
					});
				}
			} catch (e) {
				v(e.message);
			}
		}
		async function re() {
			try {
				let { id: e } = await Xo.createNotebook("Mein Notizbuch"), t = await Xo.createSection(e, "Allgemein");
				await Xo.createPage(t.id, "Erste Seite"), await x(), await S({ notebookId: e });
			} catch (e) {
				v(e.message);
			}
		}
		async function ie({ id: e, name: t }) {
			try {
				await T();
				let n = await Xo.rename(e, t);
				await x(), e === i.value && await C(n.id);
			} catch (e) {
				v(e.message);
			}
		}
		async function ae({ id: e }) {
			try {
				e === i.value && (clearTimeout(m), d.value = "idle"), await Xo.remove(e), await x(), [
					n.value,
					r.value,
					i.value
				].includes(e) && (a.value = null, await S({
					notebookId: e === n.value ? null : n.value,
					sectionId: e === r.value || e === n.value ? null : r.value
				})), v("In den Papierkorb verschoben.", "info");
			} catch (e) {
				v(e.message);
			}
		}
		function oe(e) {
			(d.value === "dirty" || d.value === "saving") && (ee(), e.preventDefault(), e.returnValue = "");
		}
		return yr(async () => {
			window.addEventListener("beforeunload", oe);
			try {
				await x(), await S(b());
			} catch (e) {
				v(e.message);
			} finally {
				c.value = !1;
			}
		}), Sr(() => {
			window.removeEventListener("beforeunload", oe);
		}), (e, f) => (N(), P("div", { class: O(["nb-app", { "nb-app--nav-hidden": !l.value }]) }, [Bn(aa(ms, {
			notebooks: t.value,
			"notebook-id": n.value,
			"section-id": r.value,
			"page-id": i.value,
			onSelect: S,
			onCreate: D,
			onRename: ie,
			onRemove: ae
		}, null, 8, [
			"notebooks",
			"notebook-id",
			"section-id",
			"page-id"
		]), [[Qa, l.value]]), F("main", MA, [
			F("header", NA, [
				F("button", {
					type: "button",
					class: "nb-icon-button",
					title: l.value ? "Navigation ausblenden" : "Navigation einblenden",
					"aria-label": l.value ? "Navigation ausblenden" : "Navigation einblenden",
					"aria-expanded": l.value,
					onClick: f[0] ||= (e) => l.value = !l.value
				}, " ☰ ", 8, PA),
				i.value && a.value ? (N(), P(M, { key: 0 }, [Bn(F("input", {
					"onUpdate:modelValue": f[1] ||= (e) => s.value = e,
					class: "nb-title",
					"aria-label": "Seitentitel",
					maxlength: "120",
					onBlur: ne,
					onKeydown: f[2] ||= zo(Lo((e) => e.target.blur(), ["prevent"]), ["enter"])
				}, null, 544), [[Po, s.value]]), F("span", FA, we(_.value), 1)], 64)) : ua("", !0),
				F("span", {
					class: O(["nb-status", "nb-status--" + d.value]),
					role: "status",
					"aria-live": "polite"
				}, we(g.value), 3)
			]),
			u.value ? (N(), P("div", {
				key: 0,
				class: O(["nb-banner", "nb-banner--" + u.value.type]),
				role: "alert"
			}, [F("span", null, we(u.value.text), 1), d.value === "conflict" ? (N(), P(M, { key: 0 }, [F("button", {
				type: "button",
				class: "nb-button",
				onClick: te
			}, "Neu laden"), F("button", {
				type: "button",
				class: "nb-button nb-button--primary",
				onClick: E
			}, "Meine Version behalten")], 64)) : (N(), P("button", {
				key: 1,
				type: "button",
				class: "nb-icon-button",
				"aria-label": "Meldung schließen",
				onClick: f[3] ||= (e) => u.value = null
			}, "×"))], 2)) : ua("", !0),
			i.value && a.value ? (N(), ea(jA, {
				key: i.value + ":" + o.value,
				"page-id": i.value,
				"initial-content": a.value.content,
				onChange: w,
				onError: f[4] ||= (e) => v(e)
			}, null, 8, ["page-id", "initial-content"])) : c.value ? ua("", !0) : (N(), P("div", IA, [t.value.length === 0 ? (N(), P(M, { key: 0 }, [
				f[5] ||= F("h2", null, "Willkommen bei deinen Notizbüchern", -1),
				f[6] ||= F("p", null, "Text, Bilder und Handschrift frei auf einer unbegrenzten Seite – wie auf Papier, nur ohne Rand.", -1),
				F("button", {
					type: "button",
					class: "nb-button nb-button--primary",
					onClick: re
				}, "Erstes Notizbuch anlegen")
			], 64)) : (N(), P("p", LA, "Wähle links eine Seite aus oder lege eine neue an."))]))
		])], 2));
	}
}, VA = document.getElementById("austit-notebook");
VA && Uo(BA).mount(VA);
