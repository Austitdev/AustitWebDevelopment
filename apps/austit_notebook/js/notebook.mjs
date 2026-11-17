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
}, l = Object.prototype.hasOwnProperty, u = (e, t) => l.call(e, t), d = Array.isArray, f = (e) => x(e) === "[object Map]", p = (e) => x(e) === "[object Set]", m = (e) => x(e) === "[object Date]", h = (e) => typeof e == "function", g = (e) => typeof e == "string", _ = (e) => typeof e == "symbol", v = (e) => typeof e == "object" && !!e, y = (e) => (v(e) || h(e)) && h(e.then) && h(e.catch), b = Object.prototype.toString, x = (e) => b.call(e), S = (e) => x(e).slice(8, -1), C = (e) => x(e) === "[object Object]", w = (e) => g(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, T = /* @__PURE__ */ e(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), E = (e) => {
	let t = /* @__PURE__ */ Object.create(null);
	return ((n) => t[n] || (t[n] = e(n)));
}, ee = /-\w/g, te = /* @__PURE__ */ E((e) => e.replace(ee, (e) => e.slice(1).toUpperCase())), ne = /\B([A-Z])/g, re = /* @__PURE__ */ E((e) => e.replace(ne, "-$1").toLowerCase()), ie = /* @__PURE__ */ E((e) => e.charAt(0).toUpperCase() + e.slice(1)), ae = /* @__PURE__ */ E((e) => e ? `on${ie(e)}` : ""), oe = (e, t) => !Object.is(e, t), se = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, ce = (e, t, n, r = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: r,
		value: n
	});
}, le = (e) => {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}, ue, de = () => ue ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
function fe(e) {
	if (d(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = g(r) ? ge(r) : fe(r);
			if (i) for (let e in i) t[e] = i[e];
		}
		return t;
	}
	if (g(e) || v(e)) return e;
}
var pe = /;(?![^(]*\))/g, me = /:([^]+)/, he = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function ge(e) {
	let t = {};
	return e.replace(he, (e) => e.startsWith("/*") ? "" : e).split(pe).forEach((e) => {
		if (e) {
			let n = e.split(me);
			n.length > 1 && (t[n[0].trim()] = n[1].trim());
		}
	}), t;
}
function D(e) {
	let t = "";
	if (g(e)) t = e;
	else if (d(e)) for (let n = 0; n < e.length; n++) {
		let r = D(e[n]);
		r && (t += r + " ");
	}
	else if (v(e)) for (let n in e) e[n] && (t += n + " ");
	return t.trim();
}
var _e = /* @__PURE__ */ e("itemscope,allowfullscreen,disablepictureinpicture,disableremoteplayback,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly");
function ve(e) {
	return !!e || e === "";
}
function ye(e, t, n) {
	if (e.length !== t.length) return !1;
	let r = !0;
	for (let i = 0; r && i < e.length; i++) r = Ce(e[i], t[i], n);
	return r;
}
function be(e, t, n) {
	if (e.size !== t.size) return !1;
	let r = Array.from(t), i = new Uint8Array(r.length);
	for (let t of e) {
		let e = -1;
		for (let a = 0; a < r.length; a++) if (!i[a] && Ce(t, r[a], n)) {
			e = a;
			break;
		}
		if (e < 0) return !1;
		i[e] = 1;
	}
	return !0;
}
function xe(e, t, n) {
	let r = f(e), i = f(t);
	if (r || i || (r = p(e), i = p(t), r || i)) return r && i ? be(e, t, n) : !1;
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (let r in e) {
		let i = e.hasOwnProperty(r), a = t.hasOwnProperty(r);
		if (i && !a || !i && a || !Ce(e[r], t[r], n)) return !1;
	}
	return String(e) === String(t);
}
function Se(e, t, n, r) {
	n ||= [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()];
	let [i, a] = n;
	if (i.has(e) || a.has(t)) return i.get(e) === t && a.get(t) === e;
	i.set(e, t), a.set(t, e);
	let o = r(e, t, n);
	return i.delete(e), a.delete(t), o;
}
function Ce(e, t, n) {
	if (e === t) return !0;
	let r = m(e), i = m(t);
	return r || i ? r && i ? e.getTime() === t.getTime() : !1 : (r = _(e), i = _(t), r || i ? e === t : (r = d(e), i = d(t), r || i ? r && i ? Se(e, t, n, ye) : !1 : (r = v(e), i = v(t), r || i ? !r || !i ? !1 : Se(e, t, n, xe) : String(e) === String(t))));
}
function we(e, t) {
	return e.findIndex((e) => Ce(e, t));
}
var Te = (e) => !!(e && e.__v_isRef === !0), Ee = (e) => g(e) ? e : e == null ? "" : d(e) || v(e) && (e.toString === b || !h(e.toString)) ? Te(e) ? Ee(e.value) : JSON.stringify(e, De, 2) : String(e), De = (e, t) => Te(t) ? De(e, t.value) : f(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[Oe(t, r) + " =>"] = n, e), {}) } : p(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => Oe(e)) } : _(t) ? Oe(t) : v(t) && !d(t) && !C(t) ? String(t) : t, Oe = (e, t = "") => _(e) ? `Symbol(${e.description ?? t})` : e, ke, Ae = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && ke && (ke.active ? (this.parent = ke, this.index = (ke.scopes || (ke.scopes = [])).push(this) - 1) : (this._active = !1, this._warnOnRun = !1));
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
			let t = ke;
			try {
				return ke = this, e();
			} finally {
				ke = t;
			}
		}
	}
	on() {
		++this._on === 1 && (this.prevScope = ke, ke = this);
	}
	off() {
		if (this._on > 0 && --this._on === 0) {
			if (ke === this) ke = this.prevScope;
			else {
				let e = ke;
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
function je() {
	return ke;
}
var O, Me = /* @__PURE__ */ new WeakSet(), Ne = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ke && (ke.active ? ke.effects.push(this) : this.flags &= -2);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, Me.has(this) && (Me.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Le(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, Xe(this), Be(this);
		let e = O, t = Ke;
		O = this, Ke = !0;
		try {
			return this.fn();
		} finally {
			Ve(this), O = e, Ke = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) We(e);
			this.deps = this.depsTail = void 0, Xe(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? Me.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		He(this) && this.run();
	}
	get dirty() {
		return He(this);
	}
}, Pe = 0, Fe, Ie;
function Le(e, t = !1) {
	e.flags |= 8, t ? (e.next = Ie, Ie = e) : (e.next = Fe, Fe = e);
}
function Re() {
	Pe++;
}
function ze() {
	if (--Pe > 0) return;
	if (Ie) {
		let e = Ie;
		for (Ie = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; Fe;) {
		let t = Fe;
		for (Fe = void 0; t;) {
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
function Be(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ve(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), We(r), Ge(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function He(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Ue(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function Ue(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ze) || (e.globalVersion = Ze, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !He(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = O, r = Ke;
	O = e, Ke = !0;
	try {
		Be(e);
		let n = e.fn(e._value);
		(t.version === 0 || oe(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		O = n, Ke = r, Ve(e), e.flags &= -3;
	}
}
function We(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) We(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function Ge(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
var Ke = !0, qe = [];
function Je() {
	qe.push(Ke), Ke = !1;
}
function Ye() {
	let e = qe.pop();
	Ke = e === void 0 || e;
}
function Xe(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = O;
		O = void 0;
		try {
			t();
		} finally {
			O = e;
		}
	}
}
var Ze = 0, Qe = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, $e = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!O || !Ke || O === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== O) t = this.activeLink = new Qe(O, this), O.deps ? (t.prevDep = O.depsTail, O.depsTail.nextDep = t, O.depsTail = t) : O.deps = O.depsTail = t, et(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = O.depsTail, t.nextDep = void 0, O.depsTail.nextDep = t, O.depsTail = t, O.deps === t && (O.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, Ze++, this.notify(e);
	}
	notify(e) {
		Re();
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			ze();
		}
	}
};
function et(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) et(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
	}
}
var tt = /* @__PURE__ */ new WeakMap(), nt = /* @__PURE__ */ Symbol(""), rt = /* @__PURE__ */ Symbol(""), it = /* @__PURE__ */ Symbol("");
function at(e, t, n) {
	if (Ke && O) {
		let t = tt.get(e);
		t || tt.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new $e()), r.map = t, r.key = n), r.track();
	}
}
function ot(e, t, n, r, i, a) {
	let o = tt.get(e);
	if (!o) {
		Ze++;
		return;
	}
	let s = (e) => {
		e && e.trigger();
	};
	if (Re(), t === "clear") o.forEach(s);
	else {
		let i = d(e), a = i && w(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === it || !_(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(it)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get(nt)), f(e) && s(o.get(rt)));
				break;
			case "delete":
				i || (s(o.get(nt)), f(e) && s(o.get(rt)));
				break;
			case "set": f(e) && s(o.get(nt));
		}
	}
	ze();
}
function st(e) {
	let t = /* @__PURE__ */ k(e);
	return t === e || (at(t, "iterate", it), /* @__PURE__ */ qt(e)) ? t : /* @__PURE__ */ Kt(e) ? /* @__PURE__ */ Gt(e) ? t.map((e) => Zt(Xt(e))) : t.map(Zt) : t.map(Xt);
}
function ct(e) {
	return at(e = /* @__PURE__ */ k(e), "iterate", it), e;
}
function lt(e, t) {
	return /* @__PURE__ */ Kt(e) ? Zt(/* @__PURE__ */ Gt(e) ? Xt(t) : t) : Xt(t);
}
var ut = {
	__proto__: null,
	[Symbol.iterator]() {
		return dt(this, Symbol.iterator, (e) => lt(this, e));
	},
	concat(...e) {
		return st(this).concat(...e.map((e) => d(e) ? st(e) : e));
	},
	entries() {
		return dt(this, "entries", (e) => (e[1] = lt(this, e[1]), e));
	},
	every(e, t) {
		return mt(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return mt(this, "filter", e, t, (e) => e.map((e) => lt(this, e)), arguments);
	},
	find(e, t) {
		return mt(this, "find", e, t, (e) => lt(this, e), arguments);
	},
	findIndex(e, t) {
		return mt(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return mt(this, "findLast", e, t, (e) => lt(this, e), arguments);
	},
	findLastIndex(e, t) {
		return mt(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return mt(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return gt(this, "includes", e);
	},
	indexOf(...e) {
		return gt(this, "indexOf", e);
	},
	join(e) {
		return st(this).join(e);
	},
	lastIndexOf(...e) {
		return gt(this, "lastIndexOf", e);
	},
	map(e, t) {
		return mt(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return _t(this, "pop");
	},
	push(...e) {
		return _t(this, "push", e);
	},
	reduce(e, ...t) {
		return ht(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return ht(this, "reduceRight", e, t);
	},
	shift() {
		return _t(this, "shift");
	},
	some(e, t) {
		return mt(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return _t(this, "splice", e);
	},
	toReversed() {
		return st(this).toReversed();
	},
	toSorted(e) {
		return st(this).toSorted(e);
	},
	toSpliced(...e) {
		return st(this).toSpliced(...e);
	},
	unshift(...e) {
		return _t(this, "unshift", e);
	},
	values() {
		return dt(this, "values", (e) => lt(this, e));
	}
};
function dt(e, t, n) {
	let r = ct(e), i = r[t], a = i.call(r);
	if (r !== e && !/* @__PURE__ */ qt(e)) {
		if (a[Symbol.toStringTag] === "Array Iterator") {
			let e = Object.create(Object.getPrototypeOf(a));
			return e.next = () => ft(a.next(), n), i !== pt[t] && Object.defineProperties(e, {
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
		a._next = a.next, a.next = () => ft(a._next(), n);
	}
	return a;
}
function ft(e, t) {
	return e.done || (e.value = t(e.value)), e;
}
var pt = Array.prototype;
function mt(e, t, n, r, i, a) {
	let o = ct(e), s = o !== e && !/* @__PURE__ */ qt(e), c = o[t];
	if (c !== pt[t]) {
		let t = c.apply(e, a);
		return s ? Xt(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, lt(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function ht(e, t, n, r) {
	let i = ct(e), a = i !== e && !/* @__PURE__ */ qt(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = lt(e, t)), n.call(this, t, lt(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? lt(e, c) : c;
}
function gt(e, t, n) {
	let r = /* @__PURE__ */ k(e);
	at(r, "iterate", it);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ Jt(n[0]) ? (n[0] = /* @__PURE__ */ k(n[0]), r[t](...n)) : i;
}
function _t(e, t, n = []) {
	Je(), Re();
	let r = (/* @__PURE__ */ k(e))[t].apply(e, n);
	return ze(), Ye(), r;
}
var vt = /* @__PURE__ */ e("__proto__,__v_isRef,__isVue"), yt = /* @__PURE__ */ new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(_));
function bt(e) {
	_(e) || (e = String(e));
	let t = /* @__PURE__ */ k(this);
	return at(t, "has", e), t.hasOwnProperty(e);
}
var xt = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? zt : Rt : i ? Lt : It).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = d(e);
		if (!r) {
			let e;
			if (a && (e = ut[t])) return e;
			if (t === "hasOwnProperty") return bt;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ Qt(e) ? e : n);
		if ((_(t) ? yt.has(t) : vt(t)) || (r || at(e, "get", t), i)) return o;
		if (/* @__PURE__ */ Qt(o)) {
			let e = a && w(t) ? o : o.value;
			return r && v(e) ? /* @__PURE__ */ Ut(e) : e;
		}
		return v(o) ? r ? /* @__PURE__ */ Ut(o) : /* @__PURE__ */ Vt(o) : o;
	}
}, St = class extends xt {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = d(e) && w(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ Kt(i);
			if (!/* @__PURE__ */ qt(n) && !/* @__PURE__ */ Kt(n) && (i = /* @__PURE__ */ k(i), n = /* @__PURE__ */ k(n)), !a && /* @__PURE__ */ Qt(i) && !/* @__PURE__ */ Qt(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : u(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ Qt(e) ? e : r);
		return e === /* @__PURE__ */ k(r) && s && (o ? oe(n, i) && ot(e, "set", t, n, i) : ot(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = u(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && ot(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return _(t) && yt.has(t) || at(e, "has", t), n;
	}
	ownKeys(e) {
		return at(e, "iterate", d(e) ? "length" : nt), Reflect.ownKeys(e);
	}
}, Ct = class extends xt {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, wt = /* @__PURE__ */ new St(), Tt = /* @__PURE__ */ new Ct(), Et = /* @__PURE__ */ new St(!0), Dt = (e) => e, Ot = (e) => Reflect.getPrototypeOf(e);
function kt(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ k(i), o = f(a), c = e === "entries" || e === Symbol.iterator && o, l = e === "keys" && o, u = i[e](...r), d = n ? Dt : t ? Zt : Xt;
		return !t && at(a, "iterate", l ? rt : nt), s(Object.create(u), { next() {
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
function At(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function jt(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ k(r), a = /* @__PURE__ */ k(n);
			e || (oe(n, a) && at(i, "get", n), at(i, "get", a));
			let { has: o } = Ot(i), s = t ? Dt : e ? Zt : Xt;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && at(/* @__PURE__ */ k(t), "iterate", nt), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ k(n), i = /* @__PURE__ */ k(t);
			return e || (oe(t, i) && at(r, "has", t), at(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ k(a), s = t ? Dt : e ? Zt : Xt;
			return !e && at(o, "iterate", nt), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return s(n, e ? {
		add: At("add"),
		set: At("set"),
		delete: At("delete"),
		clear: At("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ k(this), r = Ot(n), i = /* @__PURE__ */ k(e), a = !t && !/* @__PURE__ */ qt(e) && !/* @__PURE__ */ Kt(e) ? i : e;
			return r.has.call(n, a) || oe(e, a) && r.has.call(n, e) || oe(i, a) && r.has.call(n, i) || (n.add(a), ot(n, "add", a, a)), this;
		},
		set(e, n) {
			t || /* @__PURE__ */ qt(n) || /* @__PURE__ */ Kt(n) || (n = /* @__PURE__ */ k(n));
			let r = /* @__PURE__ */ k(this), { has: i, get: a } = Ot(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ k(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? oe(n, s) && ot(r, "set", e, n, s) : ot(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ k(this), { has: n, get: r } = Ot(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ k(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && ot(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ k(this), t = e.size !== 0, n = e.clear();
			return t && ot(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = kt(r, e, t);
	}), n;
}
function Mt(e, t) {
	let n = jt(e, t);
	return (r, i, a) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_isShallow" ? t : i === "__v_raw" ? r : Reflect.get(u(n, i) && i in r ? n : r, i, a);
}
var Nt = { get: /* @__PURE__ */ Mt(!1, !1) }, Pt = { get: /* @__PURE__ */ Mt(!1, !0) }, Ft = { get: /* @__PURE__ */ Mt(!0, !1) }, It = /* @__PURE__ */ new WeakMap(), Lt = /* @__PURE__ */ new WeakMap(), Rt = /* @__PURE__ */ new WeakMap(), zt = /* @__PURE__ */ new WeakMap();
function Bt(e) {
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
function Vt(e) {
	return /* @__PURE__ */ Kt(e) ? e : Wt(e, !1, wt, Nt, It);
}
// @__NO_SIDE_EFFECTS__
function Ht(e) {
	return Wt(e, !1, Et, Pt, Lt);
}
// @__NO_SIDE_EFFECTS__
function Ut(e) {
	return Wt(e, !0, Tt, Ft, Rt);
}
function Wt(e, t, n, r, i) {
	if (!v(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
	let a = i.get(e);
	if (a) return a;
	let o = Bt(S(e));
	if (o === 0) return e;
	let s = new Proxy(e, o === 2 ? r : n);
	return i.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function Gt(e) {
	return /* @__PURE__ */ Kt(e) ? /* @__PURE__ */ Gt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Kt(e) {
	return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function qt(e) {
	return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Jt(e) {
	return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function k(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ k(t) : e;
}
function Yt(e) {
	return !u(e, "__v_skip") && Object.isExtensible(e) && ce(e, "__v_skip", !0), e;
}
var Xt = (e) => v(e) ? /* @__PURE__ */ Vt(e) : e, Zt = (e) => v(e) ? /* @__PURE__ */ Ut(e) : e;
// @__NO_SIDE_EFFECTS__
function Qt(e) {
	return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function A(e) {
	return en(e, !1);
}
// @__NO_SIDE_EFFECTS__
function $t(e) {
	return en(e, !0);
}
function en(e, t) {
	return /* @__PURE__ */ Qt(e) ? e : new tn(e, t);
}
var tn = class {
	constructor(e, t) {
		this.dep = new $e(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ k(e), this._value = t ? e : Xt(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ qt(e) || /* @__PURE__ */ Kt(e);
		e = n ? e : /* @__PURE__ */ k(e), oe(e, t) && (this._rawValue = e, this._value = n ? e : Xt(e), this.dep.trigger());
	}
};
function nn(e) {
	return /* @__PURE__ */ Qt(e) ? e.value : e;
}
var rn = {
	get: (e, t, n) => t === "__v_raw" ? e : nn(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ Qt(i) && !/* @__PURE__ */ Qt(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function an(e) {
	return /* @__PURE__ */ Gt(e) ? e : new Proxy(e, rn);
}
var on = class {
	constructor(e) {
		this.__v_isRef = !0, this._value = void 0;
		let t = this.dep = new $e(), { get: n, set: r } = e(t.track.bind(t), t.trigger.bind(t));
		this._get = n, this._set = r;
	}
	get value() {
		return this._value = this._get();
	}
	set value(e) {
		this._set(e);
	}
};
function sn(e) {
	return new on(e);
}
var cn = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new $e(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ze - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && O !== this) return Le(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return Ue(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
};
// @__NO_SIDE_EFFECTS__
function ln(e, t, n = !1) {
	let r, i;
	return h(e) ? r = e : (r = e.get, i = e.set), new cn(r, i, n);
}
var un = {}, dn = /* @__PURE__ */ new WeakMap(), fn = void 0;
function pn(e, t = !1, n = fn) {
	if (n) {
		let t = dn.get(n);
		t || dn.set(n, t = []), t.push(e);
	}
}
function mn(e, n, i = t) {
	let { immediate: a, deep: o, once: s, scheduler: l, augmentJob: u, call: f } = i, p = (e) => o ? e : /* @__PURE__ */ qt(e) || o === !1 || o === 0 ? hn(e, 1) : hn(e), m, g, _, v, y = !1, b = !1;
	if (/* @__PURE__ */ Qt(e) ? (g = () => e.value, y = /* @__PURE__ */ qt(e)) : /* @__PURE__ */ Gt(e) ? (g = () => p(e), y = !0) : d(e) ? (b = !0, y = e.some((e) => /* @__PURE__ */ Gt(e) || /* @__PURE__ */ qt(e)), g = () => e.map((e) => {
		if (/* @__PURE__ */ Qt(e)) return e.value;
		if (/* @__PURE__ */ Gt(e)) return p(e);
		if (h(e)) return f ? f(e, 2) : e();
	})) : g = h(e) ? n ? f ? () => f(e, 2) : e : () => {
		if (_) {
			Je();
			try {
				_();
			} finally {
				Ye();
			}
		}
		let t = fn;
		fn = m;
		try {
			return f ? f(e, 3, [v]) : e(v);
		} finally {
			fn = t;
		}
	} : r, n && o) {
		let e = g, t = o === !0 ? Infinity : o;
		g = () => hn(e(), t);
	}
	let x = je(), S = () => {
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
	let C = b ? Array(e.length).fill(un) : un, w = (e) => {
		if (m.flags & 1 && (m.dirty || e)) {
			if (n) {
				let t = m.run();
				if (e || o || y || (b ? t.some((e, t) => oe(e, C[t])) : oe(t, C))) {
					let e = fn;
					Je();
					try {
						_ && _(), fn = m;
						let e = [
							t,
							C === un ? void 0 : b && C[0] === un ? [] : C,
							v
						];
						C = t, f ? f(n, 3, e) : n(...e);
					} finally {
						fn = e, Ye();
					}
				}
			} else m.run();
		}
	};
	return u && u(w), m = new Ne(g), m.scheduler = l ? () => l(w, !1) : w, v = (e) => pn(e, !1, m), _ = m.onStop = () => {
		let e = dn.get(m);
		if (e) {
			if (f) f(e, 4);
			else for (let t of e) t();
			dn.delete(m);
		}
	}, n ? a ? w(!0) : C = m.run() : l ? l(w.bind(null, !0), !0) : m.run(), S.pause = m.pause.bind(m), S.resume = m.resume.bind(m), S.stop = S, S;
}
function hn(e, t = Infinity, n) {
	if (t <= 0 || !v(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ Qt(e)) hn(e.value, t, n);
	else if (d(e)) for (let r = 0; r < e.length; r++) hn(e[r], t, n);
	else if (p(e) || f(e)) e.forEach((e) => {
		hn(e, t, n);
	});
	else if (C(e)) {
		for (let r in e) hn(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && hn(e[r], t, n);
	}
	return e;
}
// node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
function gn(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		vn(e, t, n);
	}
}
function _n(e, t, n, r) {
	if (h(e)) {
		let i = gn(e, t, n, r);
		return i && y(i) && i.catch((e) => {
			vn(e, t, n, void 0, !0);
		}), i;
	}
	if (d(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(_n(e[a], t, n, r));
		return i;
	}
}
function vn(e, n, r, i = !0, a = !1) {
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
			Je(), gn(s, null, 10, [
				e,
				i,
				o
			]), Ye();
			return;
		}
	}
	yn(e, r, o, i, c);
}
function yn(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var bn = [], xn = -1, Sn = [], Cn = null, wn = 0, Tn = /* @__PURE__ */ Promise.resolve(), En = null;
function Dn(e) {
	let t = En || Tn;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function On(e) {
	let t = xn + 1, n = bn.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = bn[r], a = In(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function kn(e) {
	if (!(e.flags & 1)) {
		let t = In(e), n = bn[bn.length - 1];
		!n || !(e.flags & 2) && t >= In(n) ? bn.push(e) : bn.splice(On(t), 0, e), e.flags |= 1, An();
	}
}
function An() {
	En ||= Tn.then(Ln);
}
function jn(e) {
	if (!d(e)) Cn && e.id === -1 ? Cn.splice(wn + 1, 0, e) : e.flags & 1 || (Sn.push(e), e.flags |= 1);
	else for (let t = 0; t < e.length; t++) Sn.push(e[t]);
	An();
}
function Mn(e, t, n, r = xn + 1) {
	for (; r < bn.length; r++) {
		let n = bn[r];
		if (n && n.flags & 2) {
			if (e && n.id !== e.uid || t !== void 0 && !(n.id >= t)) continue;
			bn.splice(r, 1), r = e ? r - 1 : xn, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
		}
	}
}
function Nn(e, t, n = 0) {
	if (Sn.length) {
		let e = Sn, r = 0;
		if (t) {
			e = [];
			for (let i = 0; i < Sn.length; i++) {
				let a = Sn[i];
				(a.i === void 0 ? t.has(a) : !a.i || a.i.uid < n) ? Sn[r++] = a : e.push(a);
			}
		}
		let i = [...new Set(e)].sort((e, t) => In(e) - In(t));
		if (Sn.length = r, Cn) {
			for (let e = 0; e < i.length; e++) Cn.push(i[e]);
			return;
		}
		for (Cn = i, wn = 0; wn < Cn.length; wn++) {
			let e = Cn[wn];
			e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
		}
		Cn = null, wn = 0;
	}
}
var Pn = !1;
function Fn(e, t) {
	if (Pn) {
		e();
		return;
	}
	let n = t === void 0 ? void 0 : new Set(Sn);
	e(), Pn = !0;
	try {
		Mn(void 0, t), Nn(void 0, n, t);
	} finally {
		Pn = !1;
	}
}
var In = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function Ln(e) {
	try {
		for (xn = 0; xn < bn.length; xn++) {
			let e = bn[xn];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), gn(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; xn < bn.length; xn++) {
			let e = bn[xn];
			e && (e.flags &= -2);
		}
		xn = -1, bn.length = 0, Nn(e), En = null, (bn.length || Sn.length) && Ln(e);
	}
}
var Rn = null, zn = null;
function Bn(e) {
	let t = Rn;
	return Rn = e, zn = e && e.type.__scopeId || null, t;
}
function Vn(e, t = Rn, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && ra(-1);
		let i = Bn(t), a = $i.length, o;
		try {
			o = e(...n);
		} finally {
			for (let e = $i.length; e > a; e--) ta();
			Bn(i), r._d && ra(1);
		}
		return o;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function Hn(e, n) {
	if (Rn === null) return e;
	let r = Ra(Rn), i = e.dirs ||= [];
	for (let e = 0; e < n.length; e++) {
		let [a, o, s, c = t] = n[e];
		a && (h(a) && (a = {
			mounted: a,
			updated: a
		}), a.deep && hn(o), i.push({
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
function Un(e, t, n, r) {
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
		u && (Je(), _n(u, n, 8, [
			e.el,
			l,
			i,
			t
		]), Ye());
	}
}
function Wn(e, t) {
	if (Ca) {
		let n = Ca.provides, r = Ca.parent && Ca.parent.provides;
		r === n && (n = Ca.provides = Object.create(r)), n[e] = t;
	}
}
function Gn(e, t, n = !1) {
	let r = wa();
	if (r || ii) {
		let i = ii ? ii._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && h(t) ? t.call(r && r.proxy) : t;
	}
}
var Kn = /* @__PURE__ */ Symbol.for("v-scx"), qn = () => Gn(Kn);
function Jn(e, t) {
	return Xn(e, null, t);
}
function Yn(e, t, n) {
	return Xn(e, t, n);
}
function Xn(e, n, i = t) {
	let { immediate: a, deep: o, flush: c, once: l } = i, u = s({}, i), d = n && a || !n && c !== "post", f;
	if (Aa) {
		if (c === "sync") {
			let e = qn();
			f = e.__watcherHandles ||= [];
		} else if (!d) {
			let e = () => {};
			return e.stop = r, e.resume = r, e.pause = r, e;
		}
	}
	let p = Ca;
	u.call = (e, t, n) => _n(e, p, t, n);
	let m = !1;
	c === "post" ? u.scheduler = (e) => {
		e.i = p, Ii(e, p && p.suspense);
	} : c !== "sync" && (m = !0, u.scheduler = (e, t) => {
		t ? e() : kn(e);
	}), u.augmentJob = (e) => {
		n && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = mn(e, n, u);
	return Aa && (f ? f.push(h) : d && h()), h;
}
function Zn(e, t, n) {
	let r = this.proxy, i = g(e) ? e.includes(".") ? Qn(r, e) : () => r[e] : e.bind(r, r), a;
	h(t) ? a = t : (a = t.handler, n = t);
	let o = Da(this), s = Xn(i, a.bind(r), n);
	return o(), s;
}
function Qn(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var $n = /* @__PURE__ */ Symbol("_vte"), er = (e) => e.__isTeleport, tr = /* @__PURE__ */ Symbol("_leaveCb");
function nr(e) {
	let t = e[0];
	if (e.length > 1) {
		for (let n of e) if (n.type !== Zi) {
			t = n;
			break;
		}
	}
	return t;
}
function rr(e) {
	if (!pr(e)) return er(e.type) && e.children ? nr(e.children) : e;
	if (e.component) return e.component.subTree;
	let { shapeFlag: t, children: n } = e;
	if (n) {
		if (t & 16) return n[0];
		if (t & 32 && h(n.default)) return n.default();
	}
}
function ir(e, t) {
	if (e.shapeFlag & 6 && e.component) {
		e.transition = t;
		let n = e.component.subTree;
		ir(er(n.type) && rr(n) || n, t);
	} else if (e.shapeFlag & 128) {
		let n = e.suspense;
		if (n) {
			let e = n.isHydrating ? n.pendingBranch : n.activeBranch;
			e && ir(e, t.clone(e));
		} else e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback);
	} else if (e.transition = t, e.type === j && d(e.children)) {
		let n = di(e.children, !1);
		n && ir(n, t);
	}
}
function ar(e) {
	if (e.component) return ar(e.component.subTree);
	if (e.type === j) {
		let t = d(e.children) && di(e.children, !1);
		return t ? ar(t) : void 0;
	}
	if (e.type !== Zi) return e;
}
// @__NO_SIDE_EFFECTS__
function or(e, t) {
	return h(e) ? /* @__PURE__ */ s({ name: e.name }, t, { setup: e }) : e;
}
function sr(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function cr(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var lr = /* @__PURE__ */ new WeakMap();
function ur(e, n, r, a, o = !1) {
	if (d(e)) {
		e.forEach((e, t) => ur(e, n && (d(n) ? n[t] : n), r, a, o));
		return;
	}
	if (fr(a) && !o) {
		a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && ur(e, n, r, a.component.subTree);
		return;
	}
	let s = a.shapeFlag & 4 ? Ra(a.component) : a.el, l = o ? null : s, { i: f, r: p } = e, m = n && n.r, _ = f.refs === t ? f.refs = {} : f.refs, v = f.setupState, y = /* @__PURE__ */ k(v), b = v === t ? i : (e) => !cr(_, e) && u(y, e), x = (e, t) => !(t && cr(_, t));
	if (m != null && m !== p) {
		if (dr(n), g(m)) _[m] = null, b(m) && (v[m] = null);
		else if (/* @__PURE__ */ Qt(m)) {
			let e = n;
			x(m, e.k) && (m.value = null), e.k && (_[e.k] = null);
		}
	}
	if (h(p)) gn(p, f, 12, [l, _]);
	else {
		let t = g(p), n = /* @__PURE__ */ Qt(p);
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
					i(), lr.delete(e);
				};
				t.id = -1, lr.set(e, t), Ii(t, r);
			} else dr(e), i();
		}
	}
}
function dr(e) {
	let t = lr.get(e);
	t && (t.flags |= 8, lr.delete(e));
}
de().requestIdleCallback, de().cancelIdleCallback;
var fr = (e) => !!e.type.__asyncLoader, pr = (e) => e.type.__isKeepAlive;
function mr(e, t) {
	gr(e, "a", t);
}
function hr(e, t) {
	gr(e, "da", t);
}
function gr(e, t, n = Ca) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if (vr(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) pr(e.parent.vnode) && _r(r, t, n, e), e = e.parent;
	}
}
function _r(e, t, n, r) {
	let i = vr(t, e, r, !0), a = vr("um", () => c(r[t], i), n);
	a.flags = 16;
}
function vr(e, t, n = Ca, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			Je();
			let i = Da(n), a = _n(t, n, e, r);
			return i(), Ye(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var yr = (e) => (t, n = Ca) => {
	Aa && e !== "sp" || vr(e, (...e) => t(...e), n);
}, br = yr("bm"), xr = yr("m"), Sr = yr("bu"), Cr = yr("u"), wr = yr("bum"), Tr = yr("um"), Er = yr("sp"), Dr = yr("rtg"), Or = yr("rtc");
function kr(e, t = Ca) {
	vr("ec", e, t);
}
var Ar = /* @__PURE__ */ Symbol.for("v-ndc");
function jr(e, t, n, r) {
	let i, a = n && n[r], o = d(e);
	if (o || g(e)) {
		let n = o && /* @__PURE__ */ Gt(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ qt(e), s = /* @__PURE__ */ Kt(e), e = ct(e)), i = Array(e.length);
		for (let n = 0, o = e.length; n < o; n++) i[n] = t(r ? s ? Zt(Xt(e[n])) : Xt(e[n]) : e[n], n, void 0, a && a[n]);
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
function Mr(e, t) {
	for (let n = 0; n < t.length; n++) {
		let r = t[n];
		if (d(r)) for (let t = 0; t < r.length; t++) e[r[t].name] = r[t].fn;
		else r && (e[r.name] = r.key ? (...e) => {
			let t = r.fn(...e);
			return t && (t.key = r.key), t;
		} : r.fn);
	}
	return e;
}
function Nr(e, t, n, r, i, a) {
	if (n ??= {}, Rn.ce || Rn.parent && fr(Rn.parent) && Rn.parent.ce) {
		let e = a != null && n.key == null ? s({}, n, { key: a }) : n, i = Object.keys(e).length > 0;
		return t !== "default" && (e.name = t), M(), aa(j, null, [F("slot", e, r && r())], i ? -2 : 64);
	}
	let o = e[t];
	o && o._c && (o._d = !1);
	let c = $i.length;
	M();
	let l;
	try {
		let i = o && Pr(o(n)), s = n.key || a || i && i.key;
		l = aa(j, { key: (s && !_(s) ? s : `_${t}`) + (!i && r ? "_fb" : "") }, i || (r ? r() : []), i && e._ === 1 ? 64 : -2);
	} catch (e) {
		for (let e = $i.length; e > c; e--) ta();
		throw e;
	} finally {
		o && o._c && (o._d = !0);
	}
	return !i && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), l;
}
function Pr(e) {
	return e.some((e) => !oa(e) || !(e.type === Zi || e.type === j && !Pr(e.children))) ? e : null;
}
var Fr = (e) => e ? ka(e) ? Ra(e) : Fr(e.parent) : null, Ir = /* @__PURE__ */ s(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => Fr(e.parent),
	$root: (e) => Fr(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => Gr(e),
	$forceUpdate: (e) => e.f ||= () => {
		kn(e.update);
	},
	$nextTick: (e) => e.n ||= Dn.bind(e.proxy),
	$watch: (e) => Zn.bind(e)
}), Lr = (e, n) => e !== t && !e.__isScriptSetup && u(e, n), Rr = {
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
			else if (Lr(i, n)) return s[n] = 1, i[n];
			else if (a !== t && u(a, n)) return s[n] = 2, a[n];
			else if (u(o, n)) return s[n] = 3, o[n];
			else if (r !== t && u(r, n)) return s[n] = 4, r[n];
			else Br && (s[n] = 0);
		}
		let d = Ir[n], f, p;
		if (d) return n === "$attrs" && at(e.attrs, "get", ""), d(e);
		if ((f = c.__cssModules) && (f = f[n])) return f;
		if (r !== t && u(r, n)) return s[n] = 4, r[n];
		if (p = l.config.globalProperties, u(p, n)) return p[n];
	},
	set({ _: e }, n, r) {
		let { data: i, setupState: a, ctx: o } = e;
		return Lr(a, n) ? (a[n] = r, !0) : i !== t && u(i, n) ? (i[n] = r, !0) : u(e.props, n) || n[0] === "$" && n.slice(1) in e ? !1 : (o[n] = r, !0);
	},
	has({ _: { data: e, setupState: n, accessCache: r, ctx: i, appContext: a, props: o, type: s } }, c) {
		let l;
		return !!(r[c] || e !== t && c[0] !== "$" && u(e, c) || Lr(n, c) || u(o, c) || u(i, c) || u(Ir, c) || u(a.config.globalProperties, c) || (l = s.__cssModules) && l[c]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? u(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function zr(e) {
	return d(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
var Br = !0;
function Vr(e) {
	let t = Gr(e), n = e.proxy, i = e.ctx;
	Br = !1, t.beforeCreate && Ur(t.beforeCreate, e, "bc");
	let { data: a, computed: o, methods: s, watch: c, provide: l, inject: u, created: f, beforeMount: p, mounted: m, beforeUpdate: g, updated: _, activated: y, deactivated: b, beforeDestroy: x, beforeUnmount: S, destroyed: C, unmounted: w, render: T, renderTracked: E, renderTriggered: ee, errorCaptured: te, serverPrefetch: ne, expose: re, inheritAttrs: ie, components: ae, directives: oe, filters: se } = t;
	if (u && Hr(u, i, null), s) for (let e in s) {
		let t = s[e];
		h(t) && (i[e] = t.bind(n));
	}
	if (a) {
		let t = a.call(n, n);
		v(t) && (e.data = /* @__PURE__ */ Vt(t));
	}
	if (Br = !0, o) for (let e in o) {
		let t = o[e], a = Ba({
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
	if (c) for (let e in c) Wr(c[e], i, n, e);
	if (l) {
		let e = h(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			Wn(t, e[t]);
		});
	}
	f && Ur(f, e, "c");
	function ce(e, t) {
		d(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (ce(br, p), ce(xr, m), ce(Sr, g), ce(Cr, _), ce(mr, y), ce(hr, b), ce(kr, te), ce(Or, E), ce(Dr, ee), ce(wr, S), ce(Tr, w), ce(Er, ne), d(re)) {
		if (re.length) {
			let t = e.exposed ||= {};
			re.forEach((e) => {
				Object.defineProperty(t, e, {
					get: () => n[e],
					set: (t) => n[e] = t,
					enumerable: !0
				});
			});
		} else e.exposed ||= {};
	}
	T && e.render === r && (e.render = T), ie != null && (e.inheritAttrs = ie), ae && (e.components = ae), oe && (e.directives = oe), ne && sr(e);
}
function Hr(e, t, n = r) {
	d(e) && (e = Xr(e));
	for (let n in e) {
		let r = e[n], i;
		i = v(r) ? "default" in r ? Gn(r.from || n, r.default, !0) : Gn(r.from || n) : Gn(r), /* @__PURE__ */ Qt(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function Ur(e, t, n) {
	_n(d(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Wr(e, t, n, r) {
	let i = r.includes(".") ? Qn(n, r) : () => n[r];
	if (g(e)) {
		let n = t[e];
		h(n) && Yn(i, n);
	} else if (h(e)) Yn(i, e.bind(n));
	else if (v(e)) {
		if (d(e)) e.forEach((e) => Wr(e, t, n, r));
		else {
			let r = h(e.handler) ? e.handler.bind(n) : t[e.handler];
			h(r) && Yn(i, r, e);
		}
	}
}
function Gr(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => Kr(c, e, o, !0)), Kr(c, t, o)), v(t) && a.set(t, c), c;
}
function Kr(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && Kr(e, a, n, !0), i && i.forEach((t) => Kr(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = qr[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var qr = {
	data: Jr,
	props: $r,
	emits: $r,
	methods: Qr,
	computed: Qr,
	beforeCreate: Zr,
	created: Zr,
	beforeMount: Zr,
	mounted: Zr,
	beforeUpdate: Zr,
	updated: Zr,
	beforeDestroy: Zr,
	beforeUnmount: Zr,
	destroyed: Zr,
	unmounted: Zr,
	activated: Zr,
	deactivated: Zr,
	errorCaptured: Zr,
	serverPrefetch: Zr,
	components: Qr,
	directives: Qr,
	watch: ei,
	provide: Jr,
	inject: Yr
};
function Jr(e, t) {
	return t ? e ? function() {
		return s(h(e) ? e.call(this, this) : e, h(t) ? t.call(this, this) : t);
	} : t : e;
}
function Yr(e, t) {
	return Qr(Xr(e), Xr(t));
}
function Xr(e) {
	if (d(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function Zr(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function Qr(e, t) {
	return e ? s(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function $r(e, t) {
	return e ? d(e) && d(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : s(/* @__PURE__ */ Object.create(null), zr(e), zr(t ?? {})) : t;
}
function ei(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = s(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = Zr(e[r], t[r]);
	return n;
}
function ti() {
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
var ni = 0;
function ri(e, t) {
	return function(n, r = null) {
		h(n) || (n = s({}, n)), r != null && !v(r) && (r = null);
		let i = ti(), a = /* @__PURE__ */ new WeakSet(), o = [], c = !1, l = i.app = {
			_uid: ni++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: Ha,
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
					let u = l._ceVNode || F(n, r);
					return u.appContext = i, s === !0 ? s = "svg" : s === !1 && (s = void 0), o && t ? t(u, a) : e(u, a, s), c = !0, l._container = a, a.__vue_app__ = l, Ra(u.component);
				}
			},
			onUnmount(e) {
				o.push(e);
			},
			unmount() {
				c && (_n(o, l._instance, 16), e(null, l._container), delete l._container.__vue_app__);
			},
			provide(e, t) {
				return i.provides[e] = t, l;
			},
			runWithContext(e) {
				let t = ii;
				ii = l;
				try {
					return e();
				} finally {
					ii = t;
				}
			}
		};
		return l;
	};
}
var ii = null, ai = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${te(t)}Modifiers`] || e[`${re(t)}Modifiers`];
function oi(e, n, ...r) {
	if (e.isUnmounted) return;
	let i = e.vnode.props || t, a = r, o = n.startsWith("update:"), s = o && ai(i, n.slice(7));
	s && (s.trim && (a = r.map((e) => g(e) ? e.trim() : e)), s.number && (a = a.map(le)));
	let c, l = i[c = ae(n)] || i[c = ae(te(n))];
	!l && o && (l = i[c = ae(re(n))]), l && _n(l, e, 6, a);
	let u = i[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, _n(u, e, 6, a);
	}
}
var si = /* @__PURE__ */ new WeakMap();
function ci(e, t, n = !1) {
	let r = n ? si : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, c = !1;
	if (!h(e)) {
		let r = (e) => {
			let n = ci(e, t, !0);
			n && (c = !0, s(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !c ? (v(e) && r.set(e, null), null) : (d(a) ? a.forEach((e) => o[e] = null) : s(o, a), v(e) && r.set(e, o), o);
}
function li(e, t) {
	return !e || !a(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), u(e, t[0].toLowerCase() + t.slice(1)) || u(e, re(t)) || u(e, t));
}
function ui(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: s, attrs: c, emit: l, render: u, renderCache: d, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, _ = Bn(e), v, y;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			v = ma(u.call(t, e, d, f, m, p, h)), y = c;
		} else {
			let e = t;
			v = ma(e.length > 1 ? e(f, {
				attrs: c,
				slots: s,
				emit: l
			}) : e(f, null)), y = t.props ? c : fi(c);
		}
	} catch (t) {
		$i.length = 0, vn(t, e, 1), v = F(Zi);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(o) && (y = pi(y, a)), b = fa(b, y, !1, !0));
	}
	return n.dirs && (b = fa(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && ir(er(b.type) && rr(b) || b, n.transition), v = b, Bn(_), v;
}
function di(e, t = !0) {
	let n;
	for (let t = 0; t < e.length; t++) {
		let r = e[t];
		if (oa(r)) {
			if (r.type !== Zi || r.children === "v-if") {
				if (n) return;
				n = r;
			}
		} else return;
	}
	return n;
}
var fi = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || a(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, pi = (e, t) => {
	let n = {};
	for (let r in e) o(r) && r.slice(9) in t || (n[r] = e[r]);
	return n;
};
function mi(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? hi(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (gi(o, r, n) && !li(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? !o || hi(r, o, l) : !!o;
	return !1;
}
function hi(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (!u(e, a) || gi(t, e, a) && !li(n, a)) return !0;
	}
	return !1;
}
function gi(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && v(r) && v(i) ? !Ce(r, i) : r !== i;
}
function _i({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var vi = {}, yi = () => Object.create(vi), bi = (e) => Object.getPrototypeOf(e) === vi;
function xi(e, t, n, r = !1) {
	let i = {}, a = yi();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), Ci(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	e.props = n ? r ? i : /* @__PURE__ */ Ht(i) : e.type.props ? i : a, e.attrs = a;
}
function Si(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ k(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (li(e.emitsOptions, o)) continue;
				let d = t[o];
				if (c) {
					if (u(a, o)) d !== a[o] && (a[o] = d, l = !0);
					else {
						let t = te(o);
						i[t] = wi(c, s, t, d, e, !1);
					}
				} else d !== a[o] && (a[o] = d, l = !0);
			}
		}
	} else {
		Ci(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) t && (u(t, a) || (r = re(a)) !== a && u(t, r)) || (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = wi(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) t && u(t, e) || (delete a[e], l = !0);
	}
	l && ot(e.attrs, "set", "");
}
function Ci(e, n, r, i) {
	let [a, o] = e.propsOptions, s = !1, c;
	if (n) for (let t in n) {
		if (T(t)) continue;
		let l = n[t], d;
		a && u(a, d = te(t)) ? !o || !o.includes(d) ? r[d] = l : (c ||= {})[d] = l : li(e.emitsOptions, t) || t in i && l === i[t] || (i[t] = l, s = !0);
	}
	if (o) {
		let n = /* @__PURE__ */ k(r), i = c || t;
		for (let t = 0; t < o.length; t++) {
			let s = o[t];
			r[s] = wi(a, n, s, i[s], e, !u(i, s));
		}
	}
	return s;
}
function wi(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = u(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && h(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = Da(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === re(n)) && (r = !0));
	}
	return r;
}
var Ti = /* @__PURE__ */ new WeakMap();
function Ei(e, r, i = !1) {
	let a = i ? Ti : r.propsCache, o = a.get(e);
	if (o) return o;
	let c = e.props, l = {}, f = [], p = !1;
	if (!h(e)) {
		let t = (e) => {
			p = !0;
			let [t, n] = Ei(e, r, !0);
			s(l, t), n && f.push(...n);
		};
		!i && r.mixins.length && r.mixins.forEach(t), e.extends && t(e.extends), e.mixins && e.mixins.forEach(t);
	}
	if (!c && !p) return v(e) && a.set(e, n), n;
	if (d(c)) for (let e = 0; e < c.length; e++) {
		let n = te(c[e]);
		Di(n) && (l[n] = t);
	}
	else if (c) for (let e in c) {
		let t = te(e);
		if (Di(t)) {
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
function Di(e) {
	return e[0] !== "$" && !T(e);
}
var Oi = (e) => e === "_" || e === "_ctx" || e === "$stable", ki = (e) => d(e) ? e.map(ma) : [ma(e)], Ai = (e, t, n) => {
	if (t._n) return t;
	let r = Vn((...e) => ki(t(...e)), n);
	return r._c = !1, r;
}, ji = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (Oi(n)) continue;
		let i = e[n];
		if (h(i)) t[n] = Ai(n, i, r);
		else if (i != null) {
			let e = ki(i);
			t[n] = () => e;
		}
	}
}, Mi = (e, t) => {
	let n = ki(t);
	e.slots.default = () => n;
}, Ni = (e, t, n) => {
	for (let r in t) (n || !Oi(r)) && (e[r] = t[r]);
}, Pi = (e, t, n) => {
	let r = e.slots = yi();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (Ni(r, t, n), n && ce(r, "_", e, !0)) : ji(t, r);
	} else t && Mi(e, t);
}, Fi = (e, n, r) => {
	let { vnode: i, slots: a } = e, o = !0, s = t;
	if (i.shapeFlag & 32) {
		let e = n._;
		e ? r && e === 1 ? o = !1 : Ni(a, n, r) : (o = !n.$stable, ji(n, a)), s = n;
	} else n && (Mi(e, n), s = { default: 1 });
	if (o) for (let e in a) !Oi(e) && s[e] == null && delete a[e];
}, Ii = Yi;
function Li(e) {
	return Ri(e);
}
function Ri(e, i) {
	let a = de();
	a.__VUE__ = !0;
	let { insert: o, remove: s, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = r, insertStaticContent: _ } = e, v = (e, t, r, i = null, a = null, o = null, s = void 0, c = null, l = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !sa(e, t) && (i = xe(e), D(e, a, o, !0), e = null), t.patchFlag === -2 && (l = !1, t.dynamicChildren = null), t.dynamicChildren && e && e.dynamicChildren && e.dynamicChildren.hasOnce && (t.dynamicChildren === n && (t.dynamicChildren = []), t.dynamicChildren.hasOnce = !0);
		let { type: u, ref: d, shapeFlag: f } = t;
		switch (u) {
			case Xi:
				y(e, t, r, i);
				break;
			case Zi:
				b(e, t, r, i);
				break;
			case Qi:
				e ?? x(t, r, i, s);
				break;
			case j:
				ae(e, t, r, i, a, o, s, c, l);
				break;
			default: f & 1 ? w(e, t, r, i, a, o, s, c, l) : f & 6 ? oe(e, t, r, i, a, o, s, c, l) : (f & 64 || f & 128) && u.process(e, t, r, i, a, o, s, c, l, Ce);
		}
		d != null && a ? ur(d, e && e.ref, o, t || e, !t) : d == null && e && e.ref != null && ur(e.ref, null, o, e, !0);
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
		if (t.type === "svg" ? o = "svg" : t.type === "math" && (o = "mathml"), e == null) E(t, n, r, i, a, o, s, c);
		else {
			let n = e.el && e.el._isVueCE ? e.el : null;
			try {
				n && n._beginPatch(), ne(e, t, i, a, o, s, c);
			} finally {
				n && n._endPatch();
			}
		}
	}, E = (e, t, n, r, i, a, s, u) => {
		let d, f, { props: m, shapeFlag: h, transition: g, dirs: _ } = e;
		if (d = e.el = l(e.type, a, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && te(e.children, d, null, r, i, zi(e, a), s, u), _ && Un(e, null, r, "created"), ee(d, e, e.scopeId, s, r), m) {
			for (let e in m) e !== "value" && !T(e) && c(d, e, null, m[e], a, r);
			"value" in m && c(d, "value", null, m.value, a), (f = m.onVnodeBeforeMount) && va(f, r, e);
		}
		_ && Un(e, null, r, "beforeMount");
		let v = Vi(i, g);
		v ? g.beforeEnter(d) : g && !g.persisted && (d[Ji] = !0), o(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && Ii(() => {
			try {
				f && va(f, r, e), v && g.enter(d), _ && Un(e, null, r, "mounted");
			} finally {}
		}, i);
	}, ee = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || qi(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				ee(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, te = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) {
			let c = e[l] = s ? ha(e[l]) : ma(e[l]);
			v(null, c, t, n, r, i, a, o, s);
		}
	}, ne = (e, n, r, i, a, o, s) => {
		let l = n.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = n;
		u |= e.patchFlag & 16;
		let m = e.props || t, h = n.props || t, g;
		if (r && Bi(r, !1), (g = h.onVnodeBeforeUpdate) && va(g, r, n, e), f && Un(n, e, r, "beforeUpdate"), r && Bi(r, !0), d && (!e.dynamicChildren || e.dynamicChildren.length !== d.length) && (u = 0, s = !1, d = null), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? re(e.dynamicChildren, d, l, r, i, zi(n, a), o) : s || pe(e, n, l, null, r, i, zi(n, a), o, !1), u > 0) {
			if (u & 16) ie(l, m, h, r, a);
			else if (u & 2 && m.class !== h.class && c(l, "class", null, h.class, a), u & 4 && c(l, "style", m.style, h.style, a), u & 8) {
				let e = n.dynamicProps;
				for (let t = 0; t < e.length; t++) {
					let n = e[t], i = m[n], o = h[n];
					(o !== i || n === "value") && c(l, n, i, o, a, r);
				}
			}
			u & 1 && e.children !== n.children && p(l, n.children);
		} else !s && d == null && ie(l, m, h, r, a);
		((g = h.onVnodeUpdated) || f) && Ii(() => {
			g && va(g, r, n, e), f && Un(n, e, r, "updated");
		}, i);
	}, re = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s], u = c.el || Ki(c), d = u && (c.type === j || !sa(c, l) || c.shapeFlag & 198) ? m(u) : n;
			v(c, l, d, null, r, i, a, o, !0);
		}
	}, ie = (e, n, r, i, a) => {
		if (n !== r) {
			if (n !== t) for (let t in n) !T(t) && !(t in r) && c(e, t, n[t], null, a, i);
			for (let t in r) {
				if (T(t)) continue;
				let o = r[t], s = n[t];
				o !== s && t !== "value" && c(e, t, s, o, a, i);
			}
			"value" in r && c(e, "value", n.value, r.value, a);
		}
	}, ae = (e, t, n, r, i, a, s, c, l) => {
		let d = t.el = e ? e.el : u(""), f = t.anchor = e ? e.anchor : u(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
		h && (c = c ? c.concat(h) : h), e == null ? (o(d, n, r), o(f, n, r), te(t.children || [], n, f, i, a, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (re(e.dynamicChildren, m, n, i, a, s, c), (t.key != null || i && t === i.subTree) && Hi(e, t, !0)) : pe(e, t, n, f, i, a, s, c, l);
	}, oe = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : ce(t, n, r, i, a, o, c) : le(e, t, c);
	}, ce = (e, t, n, r, i, a, o) => {
		let s = e.component = Sa(e, r, i);
		if (pr(e) && (s.ctx.renderer = Ce), ja(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, ue, o, a), !e.el) {
				let r = s.subTree = F(Zi);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else ue(s, e, t, n, i, a, o);
	}, le = (e, t, n) => {
		let r = t.component = e.component;
		if (mi(e, t, n)) {
			if (r.asyncDep && !r.asyncResolved) {
				t.el = e.el, t.placeholder = e.placeholder, fe(r, t, n);
				return;
			}
			r.next = t, r.update();
		} else t.el = e.el, t.placeholder = e.placeholder, r.vnode = t;
	}, ue = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = Wi(e);
					if (n) {
						t && (t.el = c.el, fe(e, t, o)), n.asyncDep.then(() => {
							let t = () => {
								e.job.flags & 8 || (i && i.pendingBranch ? Ii(t, i) : l());
							};
							t.flags = 48, Ii(t, i);
						});
						return;
					}
				}
				let u = t, d;
				Bi(e, !1), t ? (t.el = c.el, fe(e, t, o)) : t = c, n && se(n), (d = t.props && t.props.onVnodeBeforeUpdate) && va(d, s, t, c), Bi(e, !0);
				let f = ui(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el || Ki(p)), xe(p), e, i, a), t.el = f.el, u === null && _i(e, f.el), r && Ii(r, i), (d = t.props && t.props.onVnodeUpdated) && Ii(() => va(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = fr(t);
				if (Bi(e, !1), l && se(l), !m && (o = c && c.onVnodeBeforeMount) && va(o, d, t), Bi(e, !0), s && Te) {
					let t = () => {
						e.subTree = ui(e), Te(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = ui(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && Ii(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					Ii(() => va(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && fr(d.vnode) && d.vnode.shapeFlag & 256) && e.a && Ii(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new Ne(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => kn(u), Bi(e, !0), l();
	}, fe = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, Si(e, t.props, r, n), Fi(e, t.children, n), Je(), Mn(e), Ye();
	}, pe = (e, t, n, r, i, a, o, s, c = !1) => {
		let l = e && e.children, u = e ? e.shapeFlag : 0, d = t.children, { patchFlag: f, shapeFlag: m } = t;
		if (f > 0) {
			if (f & 128) {
				he(l, d, n, r, i, a, o, s, c);
				return;
			}
			if (f & 256) {
				me(l, d, n, r, i, a, o, s, c);
				return;
			}
		}
		m & 8 ? (u & 16 && be(l, i, a), d !== l && p(n, d)) : u & 16 ? m & 16 ? he(l, d, n, r, i, a, o, s, c) : be(l, i, a, !0) : (u & 8 && p(n, ""), m & 16 && te(d, n, r, i, a, o, s, c));
	}, me = (e, t, r, i, a, o, s, c, l) => {
		e ||= n, t ||= n;
		let u = e.length, d = t.length, f = Math.min(u, d), p = 0;
		for (; p < f; p++) {
			let n = t[p] = l ? ha(t[p]) : ma(t[p]);
			v(e[p], n, r, null, a, o, s, c, l);
		}
		u > d ? be(e, a, o, !0, !1, f) : te(t, r, i, a, o, s, c, l, f);
	}, he = (e, t, r, i, a, o, s, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let n = e[u], i = t[u] = l ? ha(t[u]) : ma(t[u]);
			if (sa(n, i)) v(n, i, r, null, a, o, s, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let n = e[f], i = t[p] = l ? ha(t[p]) : ma(t[p]);
			if (sa(n, i)) v(n, i, r, null, a, o, s, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, n = e < d ? t[e].el : i;
				for (; u <= p;) v(null, t[u] = l ? ha(t[u]) : ma(t[u]), r, n, a, o, s, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) D(e[u], a, o, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? ha(t[u]) : ma(t[u]);
				e.key != null && g.set(e.key, u);
			}
			let _, y = 0, b = p - h + 1, x = !1, S = 0, C = Array(b);
			for (u = 0; u < b; u++) C[u] = 0;
			for (u = m; u <= f; u++) {
				let n = e[u];
				if (y >= b) {
					D(n, a, o, !0);
					continue;
				}
				let i;
				if (n.key != null) i = g.get(n.key);
				else for (_ = h; _ <= p; _++) if (C[_ - h] === 0 && sa(n, t[_])) {
					i = _;
					break;
				}
				i === void 0 ? D(n, a, o, !0) : (C[i - h] = u + 1, i >= S ? S = i : x = !0, v(n, t[i], r, null, a, o, s, c, l), y++);
			}
			let w = x ? Ui(C) : n;
			for (_ = w.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, n = t[e], f = t[e + 1], p = e + 1 < d ? f.el || Ki(f) : i;
				C[u] === 0 ? v(null, n, r, p, a, o, s, c, l) : x && (_ < 0 || u !== w[_] ? ge(n, r, p, 2) : _--);
			}
		}
	}, ge = (e, t, n, r, i = null) => {
		let { el: a, type: c, transition: l, children: u, shapeFlag: d } = e;
		if (d & 6) ge(e.component.subTree, t, n, r);
		else if (d & 128) e.suspense.move(t, n, r);
		else if (d & 64) c.move(e, t, n, Ce);
		else if (c === j) {
			o(a, t, n);
			for (let e = 0; e < u.length; e++) ge(u[e], t, n, r);
			o(e.anchor, t, n);
		} else if (c === Qi) S(e, t, n);
		else if (r !== 2 && d & 1 && l) {
			if (r === 0) l.persisted && !a[tr] ? o(a, t, n) : (l.beforeEnter(a), o(a, t, n), Ii(() => l.enter(a), i));
			else {
				let { leave: r, delayLeave: i, afterLeave: c } = l, u = () => {
					e.ctx.isUnmounted ? s(a) : o(a, t, n);
				}, d = () => {
					let e = a._isLeaving || !!a[tr];
					a._isLeaving && a[tr](!0), l.persisted && !e ? u() : r(a, () => {
						u(), c && c();
					});
				};
				i ? i(a, u, d) : d();
			}
		} else o(a, t, n);
	}, D = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if ((d === -2 || l && l.hasOnce) && (i = !1), s != null && (Je(), ur(s, null, n, e, !0), Ye()), p == null || e.ctx && e.ctx !== t || (t.renderCache[p] = void 0), u & 256 && t.ctx.deactivate(e)) return;
		let h = u & 1 && f, g = !fr(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && va(_, t, e), u & 6) ye(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && Un(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, Ce, r) : l && !l.hasOnce && (a !== j || d > 0 && d & 64) ? be(l, t, n, !1, !0) : (a === j && d & 384 || !i && u & 16) && be(c, t, n), r && _e(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && Ii(() => {
			_ && va(_, t, e), h && Un(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, _e = (e) => {
		let { type: t, el: n, anchor: r, transition: i } = e, a = t === j;
		if (a && !i) {
			ve(n, r);
			return;
		}
		if (t === Qi) {
			C(e), i && !i.persisted && i.afterLeave && i.afterLeave();
			return;
		}
		let o = a ? ar(e) : e, c = () => {
			a ? m(n) && ve(n, r) : s(n), i && !i.persisted && i.afterLeave && i.afterLeave();
		};
		if (o && o.shapeFlag & 1 && i && !i.persisted) {
			let { leave: e, delayLeave: t } = i, n = o.el, r = () => e(n, c);
			t ? t(n, c, r) : r();
		} else c();
	}, ve = (e, t) => {
		let n;
		for (; e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, ye = (e, t, n) => {
		let { bum: r, scope: i, job: a, subTree: o, um: s, m: c, a: l } = e;
		Gi(c), Gi(l), r && se(r), i.stop(), a ? (a.flags |= 8, D(o, e, t, n)) : o && (o.transition = e.vnode.transition, D(o, e, t, n)), s && Ii(s, t);
		let u = () => {
			e.isUnmounted = !0;
		};
		u.flags = 16, Ii(u, t);
	}, be = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) D(e[o], t, n, r, i);
	}, xe = (e) => {
		if (e.shapeFlag & 6) return xe(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[$n];
		return n ? h(n) : t;
	}, Se = (e, t, n) => {
		Fn(() => {
			e == null ? t._vnode && D(t._vnode, null, null, !0) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e;
		}, e && t._vnode ? void 0 : e && e.component ? e.component.uid : xa());
	}, Ce = {
		p: v,
		um: D,
		m: ge,
		r: _e,
		mt: ce,
		mc: te,
		pc: pe,
		pbc: re,
		n: xe,
		o: e
	}, we, Te;
	return i && ([we, Te] = i(Ce)), {
		render: Se,
		hydrate: we,
		createApp: ri(Se, we)
	};
}
function zi({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Bi({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Vi(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Hi(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (d(r) && d(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = ha(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && Hi(t, a)), a.type === Xi && (a.patchFlag === -1 && (a = i[e] = ha(a)), a.el = t.el), a.type === Zi && !a.el && (a.el = t.el);
	}
}
function Ui(e) {
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
function Wi(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : Wi(t);
}
function Gi(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function Ki(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	if (t) return Ki(t.subTree);
	let n = e.suspense;
	return n && n.activeBranch ? Ki(n.activeBranch) : null;
}
var qi = (e) => e.__isSuspense, Ji = /* @__PURE__ */ Symbol("_deferredEnter");
function Yi(e, t) {
	t && t.pendingBranch ? d(e) ? t.effects.push(...e) : t.effects.push(e) : jn(e);
}
var j = /* @__PURE__ */ Symbol.for("v-fgt"), Xi = /* @__PURE__ */ Symbol.for("v-txt"), Zi = /* @__PURE__ */ Symbol.for("v-cmt"), Qi = /* @__PURE__ */ Symbol.for("v-stc"), $i = [], ea = null;
function M(e = !1) {
	$i.push(ea = e ? null : []);
}
function ta() {
	$i.pop(), ea = $i[$i.length - 1] || null;
}
var na = 1;
function ra(e, t = !1) {
	na += e, e < 0 && ea && t && (ea.hasOnce = !0);
}
function ia(e) {
	return e.dynamicChildren = na > 0 ? ea || n : null, ta(), na > 0 && ea && ea.push(e), e;
}
function N(e, t, n, r, i, a) {
	return ia(P(e, t, n, r, i, a, !0));
}
function aa(e, t, n, r, i) {
	return ia(F(e, t, n, r, i, !0));
}
function oa(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function sa(e, t) {
	return e.type === t.type && e.key === t.key;
}
var ca = ({ key: e }) => e ?? null, la = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : g(e) || /* @__PURE__ */ Qt(e) || h(e) ? {
	i: Rn,
	r: e,
	k: t,
	f: !!n
} : e);
function P(e, t = null, n = null, r = 0, i = null, a = e === j ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && ca(t),
		ref: t && la(t),
		scopeId: zn,
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
		ctx: Rn
	};
	return s ? (ga(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= g(n) ? 8 : 16), na > 0 && !o && ea && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && ea.push(c), c;
}
var F = ua;
function ua(e, t = null, n = null, r = 0, i = null, a = !1) {
	if (e && e !== Ar || (e = Zi), oa(e)) {
		let r = fa(e, t, !0);
		return n && ga(r, n), na > 0 && !a && ea && (r.shapeFlag & 6 ? ea[ea.indexOf(e)] = r : ea.push(r)), r.patchFlag = -2, r;
	}
	if (za(e) && (e = e.__vccOpts), t) {
		t = da(t);
		let { class: e, style: n } = t;
		e && !g(e) && (t.class = D(e)), v(n) && (/* @__PURE__ */ Jt(n) && !d(n) && (n = s({}, n)), t.style = fe(n));
	}
	let o = g(e) ? 1 : qi(e) ? 128 : er(e) ? 64 : v(e) ? 4 : h(e) ? 2 : 0;
	return P(e, t, n, r, i, o, a, !0);
}
function da(e) {
	return e ? /* @__PURE__ */ Jt(e) ? s({}, e) : bi(e) ? s({}, e[Fa] || e) : e : null;
}
function fa(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? _a(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && ca(l),
		ref: t && t.ref ? n && a ? d(a) ? a.concat(la(t)) : [a, la(t)] : la(t) : a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== j ? o === -1 ? 16 : o | 16 : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: c,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && fa(e.ssContent),
		ssFallback: e.ssFallback && fa(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce,
		cacheIndex: e.cacheIndex
	};
	return c && r && ir(u, c.clone(u)), u;
}
function pa(e = " ", t = 0) {
	return F(Xi, null, e, t);
}
function I(e = "", t = !1) {
	return t ? (M(), aa(Zi, null, e)) : F(Zi, null, e);
}
function ma(e) {
	return e == null || typeof e == "boolean" ? F(Zi) : d(e) ? F(j, null, e.slice()) : oa(e) ? ha(e) : F(Xi, null, String(e));
}
function ha(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : fa(e);
}
function ga(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (d(t)) n = 16;
	else if (typeof t == "object") {
		if (r & 65) {
			let n = t.default;
			n && (n._c && (n._d = !1), ga(e, n()), n._c && (n._d = !0));
			return;
		}
		{
			n = 32;
			let r = t._;
			!r && !bi(t) ? t._ctx = Rn : r === 3 && Rn && (Rn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
		}
	} else if (h(t)) {
		if (r & 65) {
			ga(e, { default: t });
			return;
		}
		t = {
			default: t,
			_ctx: Rn
		}, n = 32;
	} else t = String(t), r & 64 ? (n = 16, t = [pa(t)]) : n = 8;
	e.children = t, e.shapeFlag |= n;
}
function _a(...e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (let e in r) if (e === "class") t.class !== r.class && (t.class = D([t.class, r.class]));
		else if (e === "style") t.style = fe([t.style, r.style]);
		else if (a(e)) {
			let n = t[e], i = r[e];
			i && n !== i && !(d(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !o(e) && (t[e] = i);
		} else e !== "" && (t[e] = r[e]);
	}
	return t;
}
function va(e, t, n, r = null) {
	_n(e, t, 7, [n, r]);
}
var ya = /* @__PURE__ */ ti(), ba = 0;
function xa() {
	return ba;
}
function Sa(e, n, r) {
	let i = e.type, a = (n ? n.appContext : e.appContext) || ya, o = {
		uid: ba++,
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
		scope: new Ae(!0),
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
		propsOptions: Ei(i, a),
		emitsOptions: ci(i, a),
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
	return o.ctx = { _: o }, o.root = n ? n.root : o, o.emit = oi.bind(null, o), e.ce && e.ce(o), o;
}
var Ca = null, wa = () => Ca || Rn, Ta, Ea;
{
	let e = de(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	Ta = t("__VUE_INSTANCE_SETTERS__", (e) => Ca = e), Ea = t("__VUE_SSR_SETTERS__", (e) => Aa = e);
}
var Da = (e) => {
	let t = Ca;
	return Ta(e), e.scope.on(), () => {
		e.scope.off(), Ta(t);
	};
}, Oa = () => {
	Ca && Ca.scope.off(), Ta(null);
};
function ka(e) {
	return e.vnode.shapeFlag & 4;
}
var Aa = !1;
function ja(e, t = !1, n = !1) {
	t && Ea(t);
	let { props: r, children: i } = e.vnode, a = ka(e);
	xi(e, r, a, t), Pi(e, i, n || t);
	let o = a ? Ma(e, t) : void 0;
	return t && Ea(!1), o;
}
function Ma(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Rr);
	let { setup: r } = n;
	if (r) {
		Je();
		let n = e.setupContext = r.length > 1 ? La(e) : null, i = Da(e), a = gn(r, e, 0, [e.props, n]), o = y(a);
		if (Ye(), i(), (o || e.sp) && !fr(e) && sr(e), o) {
			if (a.then(Oa, Oa), t) return a.then((n) => {
				Ea(!0);
				try {
					Na(e, n, t);
				} finally {
					Ea(!1);
				}
			}).catch((t) => {
				vn(t, e, 0, void 0, !0), e.ssrRender = (e, t) => t("<!---->");
			});
			e.asyncDep = a;
		} else Na(e, a, t);
	} else Pa(e, t);
}
function Na(e, t, n) {
	h(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : v(t) && (e.setupState = an(t)), Pa(e, n);
}
function Pa(e, t, n) {
	let i = e.type;
	e.render ||= i.render || r;
	{
		let t = Da(e);
		Je();
		try {
			Vr(e);
		} finally {
			Ye(), t();
		}
	}
}
var Fa = /* @__PURE__ */ Symbol(), Ia = { get(e, t) {
	return at(e, "get", ""), t === Fa ? e : e[t];
} };
function La(e) {
	return {
		attrs: new Proxy(e.attrs, Ia),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function Ra(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(an(Yt(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in Ir) return Ir[n](e);
		},
		has(e, t) {
			return t in e || t in Ir;
		}
	}) : e.proxy;
}
function za(e) {
	return h(e) && "__vccOpts" in e;
}
var Ba = (e, t) => /* @__PURE__ */ ln(e, t, Aa);
function Va(e, t, n) {
	try {
		ra(-1);
		let r = arguments.length;
		return r === 2 ? v(t) && !d(t) ? oa(t) ? F(e, null, [t]) : F(e, t) : F(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && oa(n) && (n = [n]), F(e, t, n));
	} finally {
		ra(1);
	}
}
var Ha = "3.5.45", Ua = void 0, Wa = typeof window < "u" && window.trustedTypes;
if (Wa) try {
	Ua = /* @__PURE__ */ Wa.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var Ga = Ua ? (e) => Ua.createHTML(e) : (e) => e, Ka = "http://www.w3.org/2000/svg", qa = "http://www.w3.org/1998/Math/MathML", Ja = typeof document < "u" ? document : null, Ya = Ja && /* @__PURE__ */ Ja.createElement("template"), Xa = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? Ja.createElementNS(Ka, e) : t === "mathml" ? Ja.createElementNS(qa, e) : n ? Ja.createElement(e, { is: n }) : Ja.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => Ja.createTextNode(e),
	createComment: (e) => Ja.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => Ja.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), i !== a && (i = i.nextSibling););
		else {
			Ya.innerHTML = Ga(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = Ya.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, Za = /* @__PURE__ */ Symbol("_vtc");
function Qa(e, t, n) {
	let r = e[Za];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var $a = /* @__PURE__ */ Symbol("_vod"), eo = /* @__PURE__ */ Symbol("_vsh"), to = {
	name: "show",
	beforeMount(e, { value: t }, { transition: n }) {
		e[$a] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : no(e, t);
	},
	mounted(e, { value: t }, { transition: n }) {
		n && t && n.enter(e);
	},
	updated(e, { value: t, oldValue: n }, { transition: r }) {
		!t != !n && (r ? t ? (r.beforeEnter(e), no(e, !0), r.enter(e)) : r.leave(e, () => {
			no(e, !1);
		}) : no(e, t));
	},
	beforeUnmount(e, { value: t }) {
		no(e, t);
	}
};
function no(e, t) {
	e.style.display = t ? e[$a] : "none", e[eo] = !t;
}
var ro = /* @__PURE__ */ Symbol(""), io = /(?:^|;)\s*display\s*:/;
function ao(e, t, n) {
	let r = e.style, i = g(n), a = !1;
	if (n && !i) {
		if (t) {
			if (g(t)) for (let e of t.split(";")) {
				let t = e.slice(0, e.indexOf(":")).trim();
				n[t] ?? so(r, t, "");
			}
			else for (let e in t) n[e] ?? so(r, e, "");
		}
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? so(r, i, "") : fo(e, i, !g(t) && t ? t[i] : void 0, o) || so(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[ro];
			e && (n += ";" + e), r.cssText = n, a = io.test(n);
		}
	} else t && e.removeAttribute("style");
	$a in e && (i && t === n || (e[$a] = a ? r.display : ""), e[eo] && (r.display = "none"));
}
var oo = /\s*!important$/;
function so(e, t, n) {
	if (d(n)) n.forEach((n) => so(e, t, n));
	else if (n ??= "", t.startsWith("--")) oo.test(n) ? e.setProperty(t, n.replace(oo, ""), "important") : e.setProperty(t, n);
	else {
		let r = uo(e, t);
		oo.test(n) ? e.setProperty(re(r), n.replace(oo, ""), "important") : e[r] = n;
	}
}
var co = [
	"Webkit",
	"Moz",
	"ms"
], lo = {};
function uo(e, t) {
	let n = lo[t];
	if (n) return n;
	let r = te(t);
	if (r !== "filter" && r in e) return lo[t] = r;
	r = ie(r);
	for (let n = 0; n < co.length; n++) {
		let i = co[n] + r;
		if (i in e) return lo[t] = i;
	}
	return t;
}
function fo(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && g(r) && n === r;
}
var po = "http://www.w3.org/1999/xlink";
function mo(e, t, n, r, i, a = _e(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(po, t.slice(6, t.length)) : e.setAttributeNS(po, t, n) : n == null || a && !ve(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : _(n) ? String(n) : n);
}
function ho(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? Ga(n) : n);
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
		r === "boolean" ? n = ve(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
	}
	try {
		e[t] = n;
	} catch {}
	o && e.removeAttribute(i || t);
}
function go(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function _o(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var vo = /* @__PURE__ */ Symbol("_vei");
function yo(e, t, n, r, i = null) {
	let a = e[vo] || (e[vo] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = So(t);
		r ? go(e, n, a[t] = Eo(r, i), s) : o && (_o(e, n, o, s), a[t] = void 0);
	}
}
var bo = /(Once|Passive|Capture)$/, xo = /^on:?(?:Once|Passive|Capture)$/;
function So(e) {
	let t, n;
	for (; (n = e.match(bo)) && !xo.test(e);) t ||= {}, e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
	return [e[2] === ":" ? e.slice(3) : re(e.slice(2)), t];
}
var Co = 0, wo = /* @__PURE__ */ Promise.resolve(), To = () => Co ||= (wo.then(() => Co = 0), Date.now());
function Eo(e, t) {
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
				e && _n(e, t, 5, a);
			}
		} else _n(r, t, 5, [e]);
	};
	return n.value = e, n.attached = To(), n;
}
var Do = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Oo = (e, t, n, r, i, s) => {
	let c = i === "svg";
	t === "class" ? Qa(e, r, c) : t === "style" ? ao(e, n, r) : a(t) ? o(t) || yo(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), 1) : t[0] === "^" ? (t = t.slice(1), 0) : ko(e, t, r, c)) ? (ho(e, t, r), e.tagName.includes("-") || t !== "value" && t !== "checked" && t !== "selected" || mo(e, t, r, c, s, t !== "value")) : e._isVueCE && (Ao(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !g(r))) ? ho(e, te(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), mo(e, t, r, c));
};
function ko(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && Do(t) && h(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return Do(t) && g(n) ? !1 : t in e;
}
function Ao(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = te(t);
	return Array.isArray(n) ? n.some((e) => te(e) === r) : Object.keys(n).some((e) => te(e) === r);
}
var jo = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return d(t) ? (e) => se(t, e) : t;
};
function Mo(e) {
	e.target.composing = !0;
}
function No(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var Po = /* @__PURE__ */ Symbol("_assign"), Fo = /* @__PURE__ */ Symbol("_initialValue");
function Io(e, t, n) {
	return t && (e = e.trim()), n && (e = le(e)), e;
}
var Lo = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e.parentNode && (e.type === "text" ? e[Fo] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Fo] = e.defaultValue.replace(/\r\n?/g, "\n"))), e[Po] = jo(i);
		let a = r || i.props && i.props.type === "number";
		go(e, t ? "change" : "input", (t) => {
			t.target.composing || e[Po](Io(e.value, n, a));
		}), (n || a) && go(e, "change", () => {
			e.value = Io(e.value, n, a);
		}), t || (go(e, "compositionstart", Mo), go(e, "compositionend", No), go(e, "change", No));
	},
	mounted(e, { value: t, modifiers: { trim: n, number: r } }) {
		let i = t ?? "", a = e[Fo];
		delete e[Fo], a !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== a ? e[Po](Io(e.value, n, r)) : e.value = i;
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[Po] = jo(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? le(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, Ro = {
	created(e, { value: t }, n) {
		e.checked = Ce(t, n.props.value), e[Po] = jo(n), go(e, "change", () => {
			e[Po](Ho(e));
		});
	},
	beforeUpdate(e, { value: t, oldValue: n }, r) {
		e[Po] = jo(r), t !== n && (e.checked = Ce(t, r.props.value));
	}
}, zo = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		e._modelValue = t, go(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? le(Ho(e)) : Ho(e)), r = e.multiple, i = r ? p(e._modelValue) ? new Set(t) : t : t[0], a = e._pendingValue = [r, r ? d(i) ? t.slice() : t : i];
			try {
				e[Po](i);
			} finally {
				Dn(() => {
					e._pendingValue === a && (e._pendingValue = void 0);
				});
			}
		}), e[Po] = jo(r);
	},
	mounted(e, { value: t, modifiers: { number: n } }) {
		Vo(e, t, n);
	},
	beforeUpdate(e, { value: t }, n) {
		e._modelValue = t, e[Po] = jo(n);
	},
	updated(e, { value: t, modifiers: { number: n } }) {
		let r = e._pendingValue;
		e._pendingValue = void 0, r && r[0] === e.multiple && Bo(t, r[1], r[0]) || Vo(e, t, n);
	}
};
function Bo(e, t, n) {
	if (!n || d(e)) return Ce(e, t);
	if (p(e)) {
		if (e.size !== t.length) return !1;
		for (let n of t) if (!e.has(n)) return !1;
		return !0;
	}
	return !1;
}
function Vo(e, t, n = !1) {
	let r = e.multiple, i = d(t);
	if (!r || i || p(t)) {
		for (let a = 0, o = e.options.length; a < o; a++) {
			let o = e.options[a], s = Ho(o);
			if (r) {
				if (i) {
					let e = typeof s;
					o.selected = e === "string" || e === "number" ? t.some((e) => String(e) === String(s)) : we(t, s) > -1;
				} else o.selected = t.has(s) || n && typeof s == "string" && t.has(le(s));
			} else if (Ce(Ho(o), t)) {
				e.selectedIndex !== a && (e.selectedIndex = a);
				return;
			}
		}
		!r && e.selectedIndex !== -1 && (e.selectedIndex = -1);
	}
}
function Ho(e) {
	return "_value" in e ? e._value : e.value;
}
var Uo = [
	"ctrl",
	"shift",
	"alt",
	"meta"
], Wo = {
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
	exact: (e, t) => Uo.some((n) => e[`${n}Key`] && !t.includes(n))
}, Go = (e, t) => {
	if (!e) return e;
	let n = e._withMods ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n, ...r) => {
		for (let e = 0; e < t.length; e++) {
			let r = Wo[t[e]];
			if (r && r(n, t)) return;
		}
		return e(n, ...r);
	}));
}, Ko = {
	esc: "escape",
	space: " ",
	up: "arrow-up",
	left: "arrow-left",
	right: "arrow-right",
	down: "arrow-down",
	delete: "backspace"
}, qo = (e, t) => {
	let n = e._withKeys ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n) => {
		if (!("key" in n)) return;
		let r = re(n.key);
		if (t.some((e) => e === r || Ko[e] === r)) return e(n);
	}));
}, Jo = /* @__PURE__ */ s({ patchProp: Oo }, Xa), Yo;
function Xo() {
	return Yo ||= Li(Jo);
}
var Zo = ((...e) => {
	let t = Xo().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = $o(e);
		if (!r) return;
		let i = t._component;
		h(i) || i.render || i.template || (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, Qo(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function Qo(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function $o(e) {
	return g(e) ? document.querySelector(e) : e;
}
// src/api.js
var es = class extends Error {
	constructor(e, t) {
		super(e), this.status = t;
	}
};
function ts() {
	let e = document.getElementById("initial-state-austit_notebook-config");
	try {
		return JSON.parse(new TextDecoder().decode(Uint8Array.from(atob(e.value), (e) => e.charCodeAt(0))));
	} catch {
		return { apiBase: "/index.php/apps/austit_notebook/api" };
	}
}
var ns = ts();
async function rs(e, t, n) {
	let r = {
		Accept: "application/json",
		requesttoken: document.head.dataset.requesttoken ?? ""
	}, i;
	n instanceof FormData ? i = n : n !== void 0 && (r["Content-Type"] = "application/json", i = JSON.stringify(n));
	let a = await fetch(ns.apiBase + t, {
		method: e,
		headers: r,
		body: i
	}), o = await a.json().catch(() => ({}));
	if (!a.ok) throw new es(o.message || `Fehler ${a.status}`, a.status);
	return o;
}
var is = {
	tree: () => rs("GET", "/tree"),
	templates: () => rs("GET", "/templates"),
	createNotebook: (e) => rs("POST", "/notebooks", { name: e }),
	createClassNotebook: (e, t) => rs("POST", "/class-notebooks", {
		name: e,
		members: t
	}),
	getMembers: (e) => rs("GET", `/class-notebooks/${e}/members`),
	setMembers: (e, t) => rs("PUT", `/class-notebooks/${e}/members`, { members: t }),
	searchPrincipals: (e) => rs("GET", `/principals?search=${encodeURIComponent(e)}`),
	createSection: (e, t) => rs("POST", `/containers/${e}/sections`, { name: t }),
	distributePage: (e, t) => rs("POST", `/pages/${e}/distribute`, { section: t }),
	createPage: (e, t) => rs("POST", `/sections/${e}/pages`, { name: t }),
	rename: (e, t) => rs("PATCH", `/nodes/${e}`, { name: t }),
	remove: (e) => rs("DELETE", `/nodes/${e}`),
	getPage: (e) => rs("GET", `/pages/${e}`),
	savePage: (e, t, n) => rs("PUT", `/pages/${e}`, {
		content: t,
		etag: n
	}),
	syncPage: (e, t) => rs("POST", `/pages/${e}/sync`, t),
	compactPage: (e, t) => rs("POST", `/pages/${e}/sync/compact`, t),
	uploadImage(e, t) {
		let n = new FormData();
		return n.append("image", t), rs("POST", `/pages/${e}/images`, n);
	},
	imageUrl: (e) => `${ns.apiBase}/images/${e}`
}, as = () => /* @__PURE__ */ new Map(), ss = (e) => {
	let t = as();
	return e.forEach((e, n) => {
		t.set(n, e);
	}), t;
}, cs = (e, t, n) => {
	let r = e.get(t);
	return r === void 0 && e.set(t, r = n()), r;
}, ls = (e, t) => {
	let n = [];
	for (let [r, i] of e) n.push(t(i, r));
	return n;
}, us = (e, t) => {
	for (let [n, r] of e) if (t(r, n)) return !0;
	return !1;
}, ds = () => /* @__PURE__ */ new Set(), fs = (e) => e[e.length - 1], ps = (e, t) => {
	for (let n = 0; n < t.length; n++) e.push(t[n]);
}, ms = Array.from, hs = (e, t) => {
	for (let n = 0; n < e.length; n++) if (!t(e[n], n, e)) return !1;
	return !0;
}, gs = (e, t) => {
	for (let n = 0; n < e.length; n++) if (t(e[n], n, e)) return !0;
	return !1;
}, _s = (e, t) => {
	let n = Array(e);
	for (let r = 0; r < e; r++) n[r] = t(r, n);
	return n;
}, vs = Array.isArray, ys = class {
	constructor() {
		this._observers = as();
	}
	on(e, t) {
		return cs(this._observers, e, ds).add(t), t;
	}
	once(e, t) {
		let n = (...r) => {
			this.off(e, n), t(...r);
		};
		this.on(e, n);
	}
	off(e, t) {
		let n = this._observers.get(e);
		n !== void 0 && (n.delete(t), n.size === 0 && this._observers.delete(e));
	}
	emit(e, t) {
		return ms((this._observers.get(e) || as()).values()).forEach((e) => e(...t));
	}
	destroy() {
		this._observers = as();
	}
}, bs = Math.floor, xs = Math.abs, Ss = (e, t) => e < t ? e : t, Cs = (e, t) => e > t ? e : t;
Number.isNaN;
var ws = (e) => e === 0 ? 1 / e < 0 : e < 0, Ts = 2 ** 53 - 1, Es = -(2 ** 53 - 1), Ds = Number.isInteger || ((e) => typeof e == "number" && isFinite(e) && bs(e) === e);
Number.isNaN, Number.parseInt;
// node_modules/lib0/string.js
var Os = String.fromCharCode;
String.fromCodePoint, Os(65535);
var ks = (e) => e.toLowerCase(), As = /^\s*/g, js = (e) => e.replace(As, ""), Ms = /([A-Z])/g, Ns = (e, t) => js(e.replace(Ms, (e) => `${t}${ks(e)}`)), Ps = (e) => {
	let t = unescape(encodeURIComponent(e)), n = t.length, r = new Uint8Array(n);
	for (let e = 0; e < n; e++) r[e] = t.codePointAt(e);
	return r;
}, Fs = typeof TextEncoder < "u" ? new TextEncoder() : null, Is = Fs ? (e) => Fs.encode(e) : Ps, Ls = typeof TextDecoder > "u" ? null : new TextDecoder("utf-8", {
	fatal: !0,
	ignoreBOM: !0
});
/* c8 ignore start */
Ls && Ls.decode(/* @__PURE__ */ new Uint8Array()).length === 1 && 
/* c8 ignore next */
(Ls = null);
var Rs = (e, t) => _s(t, () => e).join(""), zs = class {
	constructor() {
		this.cpos = 0, this.cbuf = /* @__PURE__ */ new Uint8Array(100), this.bufs = [];
	}
}, Bs = () => new zs(), Vs = (e) => {
	let t = e.cpos;
	for (let n = 0; n < e.bufs.length; n++) t += e.bufs[n].length;
	return t;
}, Hs = (e) => {
	let t = new Uint8Array(Vs(e)), n = 0;
	for (let r = 0; r < e.bufs.length; r++) {
		let i = e.bufs[r];
		t.set(i, n), n += i.length;
	}
	return t.set(new Uint8Array(e.cbuf.buffer, 0, e.cpos), n), t;
}, Us = (e, t) => {
	let n = e.cbuf.length;
	n - e.cpos < t && (e.bufs.push(new Uint8Array(e.cbuf.buffer, 0, e.cpos)), e.cbuf = new Uint8Array(Cs(n, t) * 2), e.cpos = 0);
}, Ws = (e, t) => {
	let n = e.cbuf.length;
	e.cpos === n && (e.bufs.push(e.cbuf), e.cbuf = new Uint8Array(n * 2), e.cpos = 0), e.cbuf[e.cpos++] = t;
}, Gs = Ws, L = (e, t) => {
	for (; t > 127;) Ws(e, 128 | 127 & t), t = bs(t / 128);
	Ws(e, 127 & t);
}, Ks = (e, t) => {
	let n = ws(t);
	for (n && (t = -t), Ws(e, (t > 63 ? 128 : 0) | (n ? 64 : 0) | 63 & t), t = bs(t / 64); t > 0;) Ws(e, (t > 127 ? 128 : 0) | 127 & t), t = bs(t / 128);
}, qs = /* @__PURE__ */ new Uint8Array(3e4), Js = qs.length / 3, Ys = Fs && Fs.encodeInto ? (e, t) => {
	if (t.length < Js) {
		/* c8 ignore next */
		let n = Fs.encodeInto(t, qs).written || 0;
		L(e, n);
		for (let t = 0; t < n; t++) Ws(e, qs[t]);
	} else Zs(e, Is(t));
} : (e, t) => {
	let n = unescape(encodeURIComponent(t)), r = n.length;
	L(e, r);
	for (let t = 0; t < r; t++) Ws(e, n.codePointAt(t));
}, Xs = (e, t) => {
	let n = e.cbuf.length, r = e.cpos, i = Ss(n - r, t.length), a = t.length - i;
	e.cbuf.set(t.subarray(0, i), r), e.cpos += i, a > 0 && (e.bufs.push(e.cbuf), e.cbuf = new Uint8Array(Cs(n * 2, a)), e.cbuf.set(t.subarray(i)), e.cpos = a);
}, Zs = (e, t) => {
	L(e, t.byteLength), Xs(e, t);
}, Qs = (e, t) => {
	Us(e, t);
	let n = new DataView(e.cbuf.buffer, e.cpos, t);
	return e.cpos += t, n;
}, $s = (e, t) => Qs(e, 4).setFloat32(0, t, !1), ec = (e, t) => Qs(e, 8).setFloat64(0, t, !1), tc = (e, t) => Qs(e, 8).setBigInt64(0, t, !1), nc = /* @__PURE__ */ new DataView(/* @__PURE__ */ new ArrayBuffer(4)), rc = (e) => (nc.setFloat32(0, e), nc.getFloat32(0) === e), ic = (e, t) => {
	switch (typeof t) {
		case "string":
			Ws(e, 119), Ys(e, t);
			break;
		case "number":
			Ds(t) && xs(t) <= 2147483647 ? (Ws(e, 125), Ks(e, t)) : rc(t) ? (Ws(e, 124), $s(e, t)) : (Ws(e, 123), ec(e, t));
			break;
		case "bigint":
			Ws(e, 122), tc(e, t);
			break;
		case "object":
			if (t === null) Ws(e, 126);
			else if (vs(t)) {
				Ws(e, 117), L(e, t.length);
				for (let n = 0; n < t.length; n++) ic(e, t[n]);
			} else if (t instanceof Uint8Array) Ws(e, 116), Zs(e, t);
			else {
				Ws(e, 118);
				let n = Object.keys(t);
				L(e, n.length);
				for (let r = 0; r < n.length; r++) {
					let i = n[r];
					Ys(e, i), ic(e, t[i]);
				}
			}
			break;
		case "boolean":
			Ws(e, t ? 120 : 121);
			break;
		default: Ws(e, 127);
	}
}, ac = class extends zs {
	constructor(e) {
		super(), this.w = e, this.s = null, this.count = 0;
	}
	write(e) {
		this.s === e ? this.count++ : (this.count > 0 && L(this, this.count - 1), this.count = 1, this.w(this, e), this.s = e);
	}
}, oc = (e) => {
	e.count > 0 && (Ks(e.encoder, e.count === 1 ? e.s : -e.s), e.count > 1 && L(e.encoder, e.count - 2));
}, sc = class {
	constructor() {
		this.encoder = new zs(), this.s = 0, this.count = 0;
	}
	write(e) {
		this.s === e ? this.count++ : (oc(this), this.count = 1, this.s = e);
	}
	toUint8Array() {
		return oc(this), Hs(this.encoder);
	}
}, cc = (e) => {
	if (e.count > 0) {
		let t = e.diff * 2 + (e.count === 1 ? 0 : 1);
		Ks(e.encoder, t), e.count > 1 && L(e.encoder, e.count - 2);
	}
}, lc = class {
	constructor() {
		this.encoder = new zs(), this.s = 0, this.count = 0, this.diff = 0;
	}
	write(e) {
		this.diff === e - this.s ? (this.s = e, this.count++) : (cc(this), this.count = 1, this.diff = e - this.s, this.s = e);
	}
	toUint8Array() {
		return cc(this), Hs(this.encoder);
	}
}, uc = class {
	constructor() {
		this.sarr = [], this.s = "", this.lensE = new sc();
	}
	write(e) {
		this.s += e, this.s.length > 19 && (this.sarr.push(this.s), this.s = ""), this.lensE.write(e.length);
	}
	toUint8Array() {
		let e = new zs();
		return this.sarr.push(this.s), this.s = "", Ys(e, this.sarr.join("")), Xs(e, this.lensE.toUint8Array()), Hs(e);
	}
}, dc = (e) => Error(e), fc = () => {
	throw dc("Method unimplemented");
}, pc = () => {
	throw dc("Unexpected case");
}, mc = dc("Unexpected end of array"), hc = dc("Integer out of Range"), gc = (e, t, n) => {
	if (t < 0 || n < 0 || t + n > e.length) throw mc;
	return new Uint8Array(e.buffer, e.byteOffset + t, n);
}, _c = (e, t, n) => {
	if (t < 0 || n < 0 || t + n > e.length) throw mc;
	return new DataView(e.buffer, e.byteOffset + t, n);
}, vc = class {
	constructor(e) {
		this.arr = e, this.pos = 0;
	}
}, yc = (e) => new vc(e), bc = (e) => e.pos !== e.arr.length, xc = (e, t) => {
	let n = gc(e.arr, e.pos, t);
	return e.pos += t, n;
}, Sc = (e) => xc(e, R(e)), Cc = (e) => e.arr[e.pos++], R = (e) => {
	let t = 0, n = 1, r = e.arr.length;
	for (; e.pos < r;) {
		let r = e.arr[e.pos++];
		if (t += (r & 127) * n, n *= 128, r < 128) return t;
		/* c8 ignore start */
		if (t > Ts) throw hc;
	}
	throw mc;
}, wc = (e) => {
	let t = e.arr[e.pos++], n = t & 63, r = 64, i = (t & 64) > 0 ? -1 : 1;
	if (!(t & 128)) return i * n;
	let a = e.arr.length;
	for (; e.pos < a;) {
		if (t = e.arr[e.pos++], n += (t & 127) * r, r *= 128, t < 128) return i * n;
		/* c8 ignore start */
		if (n > Ts) throw hc;
	}
	throw mc;
}, Tc = Ls ? (e) => Ls.decode(Sc(e)) : (e) => {
	let t = R(e);
	if (t === 0) return "";
	{
		let n = String.fromCodePoint(Cc(e));
		if (--t < 100) for (; t--;) n += String.fromCodePoint(Cc(e));
		else for (; t > 0;) {
			let r = t < 1e4 ? t : 1e4, i = e.arr.subarray(e.pos, e.pos + r);
			e.pos += r, n += String.fromCodePoint.apply(null, i), t -= r;
		}
		return decodeURIComponent(escape(n));
	}
}, Ec = (e, t) => {
	let n = _c(e.arr, e.pos, t);
	return e.pos += t, n;
}, Dc = [
	(e) => void 0,
	(e) => null,
	wc,
	(e) => Ec(e, 4).getFloat32(0, !1),
	(e) => Ec(e, 8).getFloat64(0, !1),
	(e) => Ec(e, 8).getBigInt64(0, !1),
	(e) => !1,
	(e) => !0,
	Tc,
	(e) => {
		let t = R(e), n = {};
		for (let r = 0; r < t; r++) {
			let t = Tc(e);
			n[t] = Oc(e);
		}
		return n;
	},
	(e) => {
		let t = R(e), n = [];
		for (let r = 0; r < t; r++) n.push(Oc(e));
		return n;
	},
	Sc
], Oc = (e) => Dc[127 - Cc(e)](e), kc = class extends vc {
	constructor(e, t) {
		super(e), this.reader = t, this.s = null, this.count = 0;
	}
	read() {
		return this.count === 0 && (this.s = this.reader(this), this.count = bc(this) ? R(this) + 1 : -1), this.count--, this.s;
	}
}, Ac = class extends vc {
	constructor(e) {
		super(e), this.s = 0, this.count = 0;
	}
	read() {
		if (this.count === 0) {
			this.s = wc(this);
			let e = ws(this.s);
			this.count = 1, e && (this.s = -this.s, this.count = R(this) + 2);
		}
		return this.count--, this.s;
	}
}, jc = class extends vc {
	constructor(e) {
		super(e), this.s = 0, this.count = 0, this.diff = 0;
	}
	read() {
		if (this.count === 0) {
			let e = wc(this), t = e & 1;
			this.diff = bs(e / 2), this.count = 1, t && (this.count = R(this) + 2);
		}
		return this.s += this.diff, this.count--, this.s;
	}
}, Mc = class {
	constructor(e) {
		this.decoder = new Ac(e), this.str = Tc(this.decoder), this.spos = 0;
	}
	read() {
		let e = this.spos + this.decoder.read(), t = this.str.slice(this.spos, e);
		return this.spos = e, t;
	}
};
crypto.subtle;
var Nc = crypto.getRandomValues.bind(crypto), Pc = () => Nc(/* @__PURE__ */ new Uint32Array(1))[0], Fc = "10000000-1000-4000-8000-100000000000", Ic = () => Fc.replace(/[018]/g, (e) => (e ^ Pc() & 15 >> e / 4).toString(16)), Lc = Date.now, Rc = (e) => new Promise(e);
Promise.all.bind(Promise);
// node_modules/lib0/conditions.js
/* c8 ignore next */
var zc = (e) => e === void 0 ? null : e, Bc = new class {
	constructor() {
		this.map = /* @__PURE__ */ new Map();
	}
	setItem(e, t) {
		this.map.set(e, t);
	}
	getItem(e) {
		return this.map.get(e);
	}
}();
/* c8 ignore start */
try {
	typeof window < "u" && typeof localStorage < "u" && localStorage && (Bc = localStorage);
} catch {}
/* c8 ignore stop */
/* c8 ignore next */
var Vc = Bc, Hc = Symbol("Equality"), Uc = (e, t) => e === t || !!e?.[Hc]?.(t) || !1, Wc = (e) => typeof e == "object", Gc = Object.assign, Kc = Object.keys, qc = (e, t) => {
	for (let n in e) t(e[n], n);
}, Jc = (e) => Kc(e).length, Yc = (e) => {
	for (let t in e) return !1;
	return !0;
}, Xc = (e, t) => {
	for (let n in e) if (!t(e[n], n)) return !1;
	return !0;
}, Zc = (e, t) => Object.prototype.hasOwnProperty.call(e, t), Qc = (e, t) => e === t || Jc(e) === Jc(t) && Xc(e, (e, n) => (e !== void 0 || Zc(t, n)) && Uc(t[n], e)), $c = Object.freeze, el = (e) => {
	for (let t in e) {
		let n = e[t];
		(typeof n == "object" || typeof n == "function") && el(e[t]);
	}
	return $c(e);
}, tl = (e, t, n = 0) => {
	try {
		for (; n < e.length; n++) e[n](...t);
	} finally {
		n < e.length && tl(e, t, n + 1);
	}
}, nl = (e) => e, rl = (e, t) => {
	if (e === t) return !0;
	if (e == null || t == null || e.constructor !== t.constructor && (e.constructor || Object) !== (t.constructor || Object)) return !1;
	if (e[Hc] != null) return e[Hc](t);
	switch (e.constructor) {
		case ArrayBuffer: e = new Uint8Array(e), t = new Uint8Array(t);
		case Uint8Array:
			if (e.byteLength !== t.byteLength) return !1;
			for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
			break;
		case Set:
			if (e.size !== t.size) return !1;
			for (let n of e) if (!t.has(n)) return !1;
			break;
		case Map:
			if (e.size !== t.size) return !1;
			for (let n of e.keys()) if (!t.has(n) || !rl(e.get(n), t.get(n))) return !1;
			break;
		case void 0:
		case Object:
			if (Jc(e) !== Jc(t)) return !1;
			for (let n in e) if (!Zc(e, n) || !rl(e[n], t[n])) return !1;
			break;
		case Array:
			if (e.length !== t.length) return !1;
			for (let n = 0; n < e.length; n++) if (!rl(e[n], t[n])) return !1;
			break;
		default: return !1;
	}
	return !0;
}, il = (e, t) => t.includes(e), al = typeof process < "u" && process.release && /node|io\.js/.test(process.release.name) && Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]";
typeof navigator < "u" && /Mac/.test(navigator.platform);
var ol, sl = [], cl = () => {
	if (ol === void 0) {
		if (al) {
			ol = as();
			let e = process.argv, t = null;
			for (let n = 0; n < e.length; n++) {
				let r = e[n];
				r[0] === "-" ? (t !== null && ol.set(t, ""), t = r) : t === null ? sl.push(r) : (ol.set(t, r), t = null);
			}
			t !== null && ol.set(t, "");
		} else typeof location == "object" ? (ol = as(), (location.search || "?").slice(1).split("&").forEach((e) => {
			if (e.length !== 0) {
				let [t, n] = e.split("=");
				ol.set(`--${Ns(t, "-")}`, n), ol.set(`-${Ns(t, "-")}`, n);
			}
		})) : ol = as();
	}
	return ol;
}, ll = (e) => cl().has(e), ul = (e) => zc(al ? process.env[e.toUpperCase().replaceAll("-", "_")] : Vc.getItem(e)), dl = (e) => ll("--" + e) || ul(e) !== null, fl = dl("production"), pl = al && il(process.env.FORCE_COLOR, [
	"true",
	"1",
	"2"
]) || !ll("--no-colors") && !dl("no-color") && (!al || process.stdout.isTTY) && (!al || ll("--color") || ul("COLORTERM") !== null || (ul("TERM") || "").includes("color")), ml = (e) => new Uint8Array(e), hl = (e) => {
	let t = ml(e.byteLength);
	return t.set(e), t;
}, gl = class {
	constructor(e, t) {
		this.left = e, this.right = t;
	}
}, _l = (e, t) => new gl(e, t), vl = (e) => e.next() >= .5, yl = (e, t, n) => bs(e.next() * (n + 1 - t) + t), bl = (e, t, n) => bs(e.next() * (n + 1 - t) + t), xl = (e, t, n) => bl(e, t, n), Sl = (e) => Os(xl(e, 97, 122)), Cl = (e, t = 0, n = 20) => {
	let r = xl(e, t, n), i = "";
	for (let t = 0; t < r; t++) i += Sl(e);
	return i;
}, wl = (e, t) => t[xl(e, 0, t.length - 1)], Tl = Symbol("0schema"), El = class {
	constructor() {
		this._rerrs = [];
	}
	extend(e, t, n, r = null) {
		this._rerrs.push({
			path: e,
			expected: t,
			has: n,
			message: r
		});
	}
	toString() {
		let e = [];
		for (let t = this._rerrs.length - 1; t > 0; t--) {
			let n = this._rerrs[t];
			/* c8 ignore next */
			e.push(Rs(" ", (this._rerrs.length - t) * 2) + `${n.path == null ? "" : `[${n.path}] `}${n.has} doesn't match ${n.expected}. ${n.message}`);
		}
		return e.join("\n");
	}
}, Dl = (e, t) => e === t ? !0 : e == null || t == null || e.constructor !== t.constructor ? !1 : e[Hc] ? Uc(e, t) : vs(e) ? hs(e, (e) => gs(t, (t) => Dl(e, t))) : Wc(e) ? Xc(e, (e, n) => Dl(e, t[n])) : !1, Ol = class {
	static _dilutes = !1;
	extends(e) {
		let [t, n] = [this.shape, e.shape];
		return this.constructor._dilutes && ([n, t] = [t, n]), Dl(t, n);
	}
	equals(e) {
		return this.constructor === e.constructor && rl(this.shape, e.shape);
	}
	[Tl]() {
		return !0;
	}
	[Hc](e) {
		return this.equals(e);
	}
	validate(e) {
		return this.check(e);
	}
	/* c8 ignore start */
	check(e, t) {
		fc();
	}
	/* c8 ignore stop */
	get nullable() {
		return su(this, Su);
	}
	get optional() {
		return new zl(this);
	}
	cast(e) {
		return Eu(e, this), e;
	}
	expect(e) {
		return Eu(e, this), e;
	}
}, kl = class extends Ol {
	constructor(e, t) {
		super(), this.shape = e, this._c = t;
	}
	check(e, t = void 0) {
		let n = e?.constructor === this.shape && (this._c == null || this._c(e));
		return !n && t?.extend(null, this.shape.name, e?.constructor.name, e?.constructor === this.shape ? "Check failed" : "Constructor match failed"), n;
	}
}, Al = (e, t = null) => new kl(e, t);
Al(kl);
var jl = class extends Ol {
	constructor(e) {
		super(), this.shape = e;
	}
	check(e, t) {
		let n = this.shape(e);
		return !n && t?.extend(null, "custom prop", e?.constructor.name, "failed to check custom prop"), n;
	}
}, Ml = (e) => new jl(e);
Al(jl);
var Nl = class extends Ol {
	constructor(e) {
		super(), this.shape = e;
	}
	check(e, t) {
		let n = this.shape.some((t) => t === e);
		return !n && t?.extend(null, this.shape.join(" | "), e.toString()), n;
	}
}, Pl = (...e) => new Nl(e), Fl = Al(Nl), Il = RegExp.escape || ((e) => e.replace(/[().|&,$^[\]]/g, (e) => "\\" + e)), Ll = (e) => {
	if (_u.check(e)) return [Il(e)];
	if (Fl.check(e)) return e.shape.map((e) => e + "");
	if (gu.check(e)) return ["[+-]?\\d+.?\\d*"];
	if (vu.check(e)) return [".*"];
	if (cu.check(e)) return e.shape.map(Ll).flat(1);
	/* c8 ignore next 2 */
	pc();
};
Al(class extends Ol {
	constructor(e) {
		super(), this.shape = e, this._r = RegExp("^" + e.map(Ll).map((e) => `(${e.join("|")})`).join("") + "$");
	}
	check(e, t) {
		let n = this._r.exec(e) != null;
		return !n && t?.extend(null, this._r.toString(), e.toString(), "String doesn't match string template."), n;
	}
});
var Rl = Symbol("optional"), zl = class extends Ol {
	constructor(e) {
		super(), this.shape = e;
	}
	check(e, t) {
		let n = e === void 0 || this.shape.check(e);
		return !n && t?.extend(null, "undefined (optional)", "()"), n;
	}
	get [Rl]() {
		return !0;
	}
}, Bl = Al(zl), Vl = class extends Ol {
	check(e, t) {
		return t?.extend(null, "never", typeof e), !1;
	}
};
new Vl(), Al(Vl);
var Hl = class e extends Ol {
	constructor(e, t = !1) {
		super(), this.shape = e, this._isPartial = t;
	}
	static _dilutes = !0;
	get partial() {
		return new e(this.shape, !0);
	}
	check(e, t) {
		return e == null ? 
		/* c8 ignore next */
		(t?.extend(null, "object", "null"), !1) : Xc(this.shape, (n, r) => {
			let i = this._isPartial && !Zc(e, r) || n.check(e[r], t);
			return !i && t?.extend(r.toString(), n.toString(), typeof e[r], "Object property does not match"), i;
		});
	}
}, Ul = (e) => new Hl(e), Wl = Al(Hl), Gl = Ml((e) => e != null && (e.constructor === Object || e.constructor == null)), Kl = class extends Ol {
	constructor(e, t) {
		super(), this.shape = {
			keys: e,
			values: t
		};
	}
	check(e, t) {
		return e != null && Xc(e, (n, r) => {
			let i = this.shape.keys.check(r, t);
			return !i && t?.extend(r + "", "Record", typeof e, i ? "Key doesn't match schema" : "Value doesn't match value"), i && this.shape.values.check(n, t);
		});
	}
}, ql = (e, t) => new Kl(e, t), Jl = Al(Kl), Yl = class extends Ol {
	constructor(e) {
		super(), this.shape = e;
	}
	check(e, t) {
		return e != null && Xc(this.shape, (n, r) => {
			let i = n.check(e[r], t);
			return !i && t?.extend(r.toString(), "Tuple", typeof n), i;
		});
	}
}, Xl = (...e) => new Yl(e);
Al(Yl);
var Zl = class extends Ol {
	constructor(e) {
		super(), this.shape = e.length === 1 ? e[0] : new ou(e);
	}
	check(e, t) {
		let n = vs(e) && hs(e, (e) => this.shape.check(e));
		return !n && t?.extend(null, "Array", ""), n;
	}
}, Ql = (...e) => new Zl(e), $l = Al(Zl), eu = Ml((e) => vs(e)), tu = class extends Ol {
	constructor(e, t) {
		super(), this.shape = e, this._c = t;
	}
	check(e, t) {
		let n = e instanceof this.shape && (this._c == null || this._c(e));
		return !n && t?.extend(null, this.shape.name, e?.constructor.name), n;
	}
}, nu = (e, t = null) => new tu(e, t);
Al(tu);
var ru = nu(Ol), iu = Al(class extends Ol {
	constructor(e) {
		super(), this.len = e.length - 1, this.args = Xl(...e.slice(-1)), this.res = e[this.len];
	}
	check(e, t) {
		let n = e.constructor === Function && e.length <= this.len;
		return !n && t?.extend(null, "function", typeof e), n;
	}
}), au = Ml((e) => typeof e == "function");
Al(class extends Ol {
	constructor(e) {
		super(), this.shape = e;
	}
	check(e, t) {
		let n = hs(this.shape, (n) => n.check(e, t));
		return !n && t?.extend(null, "Intersectinon", typeof e), n;
	}
}, (e) => e.shape.length > 0);
var ou = class extends Ol {
	static _dilutes = !0;
	constructor(e) {
		super(), this.shape = e;
	}
	check(e, t) {
		let n = gs(this.shape, (n) => n.check(e, t));
		return t?.extend(null, "Union", typeof e), n;
	}
}, su = (...e) => e.findIndex((e) => cu.check(e)) >= 0 ? su(...e.map((e) => Tu(e)).map((e) => cu.check(e) ? e.shape : [e]).flat(1)) : e.length === 1 ? e[0] : new ou(e), cu = Al(ou), lu = () => !0, uu = Ml(lu), du = Al(jl, (e) => e.shape === lu), fu = Ml((e) => typeof e == "bigint"), pu = Ml((e) => e === fu), mu = Ml((e) => typeof e == "symbol");
Ml((e) => e === mu);
var hu = Ml((e) => typeof e == "number"), gu = Ml((e) => e === hu), _u = Ml((e) => typeof e == "string"), vu = Ml((e) => e === _u), yu = Ml((e) => typeof e == "boolean"), bu = Ml((e) => e === yu), xu = Pl(void 0);
Al(Nl, (e) => e.shape.length === 1 && e.shape[0] === void 0), Pl(void 0);
var Su = Pl(null), Cu = Al(Nl, (e) => e.shape.length === 1 && e.shape[0] === null);
Al(Uint8Array), Al(kl, (e) => e.shape === Uint8Array);
var wu = su(hu, _u, Su, xu, fu, yu, mu);
(() => {
	let e = Ql(uu), t = ql(_u, uu), n = su(hu, _u, Su, yu, e, t);
	return e.shape = n, t.shape.values = n, n;
})();
var Tu = (e) => {
	if (ru.check(e)) return e;
	if (Gl.check(e)) {
		let t = {};
		for (let n in e) t[n] = Tu(e[n]);
		return Ul(t);
	}
	if (eu.check(e)) return su(...e.map(Tu));
	if (wu.check(e)) return Pl(e);
	if (au.check(e)) return Al(e);
	/* c8 ignore next */
	pc();
}, Eu = fl ? () => {} : (e, t) => {
	let n = new El();
	if (!t.check(e, n)) throw dc(`Expected value to be of type ${t.constructor.name}.\n${n.toString()}`);
}, Du = class {
	constructor(e) {
		this.patterns = [], this.$state = e;
	}
	if(e, t) {
		return this.patterns.push({
			if: Tu(e),
			h: t
		}), this;
	}
	else(e) {
		return this.if(uu, e);
	}
	done() {
		return (e, t) => {
			for (let n = 0; n < this.patterns.length; n++) {
				let r = this.patterns[n];
				if (r.if.check(e)) return r.h(e, t);
			}
			throw dc("Unhandled pattern");
		};
	}
}, Ou = ((e) => new Du(e))(uu).if(gu, (e, t) => yl(t, Es, Ts)).if(vu, (e, t) => Cl(t)).if(bu, (e, t) => vl(t)).if(pu, (e, t) => BigInt(yl(t, Es, Ts))).if(cu, (e, t) => ku(t, wl(t, e.shape))).if(Wl, (e, t) => {
	let n = {};
	for (let r in e.shape) {
		let i = e.shape[r];
		if (Bl.check(i)) {
			if (vl(t)) continue;
			i = i.shape;
		}
		n[r] = Ou(i, t);
	}
	return n;
}).if($l, (e, t) => {
	let n = [], r = bl(t, 0, 42);
	for (let i = 0; i < r; i++) n.push(ku(t, e.shape));
	return n;
}).if(Fl, (e, t) => wl(t, e.shape)).if(Cu, (e, t) => null).if(iu, (e, t) => {
	let n = ku(t, e.res);
	return () => n;
}).if(du, (e, t) => ku(t, wl(t, [
	hu,
	_u,
	Su,
	xu,
	fu,
	yu,
	Ql(hu),
	ql(su("a", "b", "c"), hu)
]))).if(Jl, (e, t) => {
	let n = {}, r = yl(t, 0, 3);
	for (let i = 0; i < r; i++) {
		let r = ku(t, e.shape.keys);
		n[r] = ku(t, e.shape.values);
	}
	return n;
}).done(), ku = (e, t) => Ou(Tu(t), e), Au = typeof document < "u" ? document : {};
Ml((e) => e.nodeType === Fu), typeof DOMParser < "u" && new DOMParser(), Ml((e) => e.nodeType === Mu), Ml((e) => e.nodeType === Nu);
var ju = (e) => ls(e, (e, t) => `${t}:${e};`).join(""), Mu = Au.ELEMENT_NODE, Nu = Au.TEXT_NODE;
Au.CDATA_SECTION_NODE, Au.COMMENT_NODE;
var Pu = Au.DOCUMENT_NODE;
Au.DOCUMENT_TYPE_NODE;
var Fu = Au.DOCUMENT_FRAGMENT_NODE;
Ml((e) => e.nodeType === Pu);
/* c8 ignore stop */
// node_modules/lib0/symbol.js
var Iu = Symbol, Lu = Iu(), Ru = Iu(), zu = Iu(), Bu = Iu(), Vu = Iu(), Hu = Iu(), Uu = Iu(), Wu = Iu(), Gu = Iu(), Ku = (e) => {
	e.length === 1 && e[0]?.constructor === Function && (e = e[0]());
	let t = [], n = [], r = 0;
	for (; r < e.length; r++) {
		let n = e[r];
		if (n === void 0) break;
		if (n.constructor === String || n.constructor === Number) t.push(n);
		else if (n.constructor === Object) break;
	}
	for (r > 0 && n.push(t.join("")); r < e.length; r++) {
		let t = e[r];
		t instanceof Symbol || n.push(t);
	}
	return n;
};
Lc();
/* c8 ignore stop */
// node_modules/lib0/logging.js
var qu = {
	[Lu]: _l("font-weight", "bold"),
	[Ru]: _l("font-weight", "normal"),
	[zu]: _l("color", "blue"),
	[Vu]: _l("color", "green"),
	[Bu]: _l("color", "grey"),
	[Hu]: _l("color", "red"),
	[Uu]: _l("color", "purple"),
	[Wu]: _l("color", "orange"),
	[Gu]: _l("color", "black")
}, Ju = pl ? (e) => {
	e.length === 1 && e[0]?.constructor === Function && (e = e[0]());
	let t = [], n = [], r = as(), i = [], a = 0;
	for (; a < e.length; a++) {
		let i = e[a], o = qu[i];
		if (o !== void 0) r.set(o.left, o.right);
		else {
			if (i === void 0) break;
			if (i.constructor === String || i.constructor === Number) {
				let e = ju(r);
				a > 0 || e.length > 0 ? (t.push("%c" + i), n.push(e)) : t.push(i);
			} else break;
		}
	}
	for (a > 0 && (i = n, i.unshift(t.join(""))); a < e.length; a++) {
		let t = e[a];
		t instanceof Symbol || i.push(t);
	}
	return i;
} : Ku, Yu = (...e) => {
	/* c8 ignore next */
	console.log(...Ju(e)), Zu.forEach((t) => t.print(e));
}, Xu = (...e) => {
	console.warn(...Ju(e)), e.unshift(Wu), Zu.forEach((t) => t.print(e));
}, Zu = ds(), Qu = (e) => ({
	[Symbol.iterator]() {
		return this;
	},
	next: e
}), $u = (e, t) => Qu(() => {
	let n;
	do
		n = e.next();
	while (!n.done && !t(n.value));
	return n;
}), ed = (e, t) => Qu(() => {
	let { done: n, value: r } = e.next();
	return {
		done: n,
		value: n ? void 0 : t(r)
	};
}), td = class {
	constructor(e, t) {
		this.clock = e, this.len = t;
	}
}, nd = class {
	constructor() {
		this.clients = /* @__PURE__ */ new Map();
	}
}, rd = (e, t, n) => t.clients.forEach((t, r) => {
	let i = e.doc.store.clients.get(r);
	if (i != null) {
		let r = i[i.length - 1], a = r.id.clock + r.length;
		for (let r = 0, o = t[r]; r < t.length && o.clock < a; o = t[++r]) of(e, i, o.clock, o.len, n);
	}
}), id = (e, t) => {
	let n = 0, r = e.length - 1;
	for (; n <= r;) {
		let i = bs((n + r) / 2), a = e[i], o = a.clock;
		if (o <= t) {
			if (t < o + a.len) return i;
			n = i + 1;
		} else r = i - 1;
	}
	return null;
}, ad = (e, t) => {
	let n = e.clients.get(t.client);
	return n !== void 0 && id(n, t.clock) !== null;
}, od = (e) => {
	e.clients.forEach((e) => {
		e.sort((e, t) => e.clock - t.clock);
		let t, n;
		for (t = 1, n = 1; t < e.length; t++) {
			let r = e[n - 1], i = e[t];
			r.clock + r.len >= i.clock ? e[n - 1] = new td(r.clock, Cs(r.len, i.clock + i.len - r.clock)) : (n < t && (e[n] = i), n++);
		}
		e.length = n;
	});
}, sd = (e) => {
	let t = new nd();
	for (let n = 0; n < e.length; n++) e[n].clients.forEach((r, i) => {
		if (!t.clients.has(i)) {
			let a = r.slice();
			for (let t = n + 1; t < e.length; t++) ps(a, e[t].clients.get(i) || []);
			t.clients.set(i, a);
		}
	});
	return od(t), t;
}, cd = (e, t, n, r) => {
	cs(e.clients, t, () => []).push(new td(n, r));
}, ld = () => new nd(), ud = (e) => {
	let t = ld();
	return e.clients.forEach((e, n) => {
		let r = [];
		for (let t = 0; t < e.length; t++) {
			let n = e[t];
			if (n.deleted) {
				let i = n.id.clock, a = n.length;
				if (t + 1 < e.length) for (let n = e[t + 1]; t + 1 < e.length && n.deleted; n = e[++t + 1]) a += n.length;
				r.push(new td(i, a));
			}
		}
		r.length > 0 && t.clients.set(n, r);
	}), t;
}, dd = (e, t) => {
	L(e.restEncoder, t.clients.size), ms(t.clients.entries()).sort((e, t) => t[0] - e[0]).forEach(([t, n]) => {
		e.resetDsCurVal(), L(e.restEncoder, t);
		let r = n.length;
		L(e.restEncoder, r);
		for (let t = 0; t < r; t++) {
			let r = n[t];
			e.writeDsClock(r.clock), e.writeDsLen(r.len);
		}
	});
}, fd = (e) => {
	let t = new nd(), n = R(e.restDecoder);
	for (let r = 0; r < n; r++) {
		e.resetDsCurVal();
		let n = R(e.restDecoder), r = R(e.restDecoder);
		if (r > 0) {
			let i = cs(t.clients, n, () => []);
			for (let t = 0; t < r; t++) i.push(new td(e.readDsClock(), e.readDsLen()));
		}
	}
	return t;
}, pd = (e, t, n) => {
	let r = new nd(), i = R(e.restDecoder);
	for (let a = 0; a < i; a++) {
		e.resetDsCurVal();
		let i = R(e.restDecoder), a = R(e.restDecoder), o = n.clients.get(i) || [], s = Zd(n, i);
		for (let n = 0; n < a; n++) {
			let n = e.readDsClock(), a = n + e.readDsLen();
			if (n < s) {
				s < a && cd(r, i, s, a - s);
				let e = $d(o, n), c = o[e];
				for (!c.deleted && c.id.clock < n && (o.splice(e + 1, 0, xm(t, c, n - c.id.clock)), e++); e < o.length && (c = o[e++], c.id.clock < a);) c.deleted || (a < c.id.clock + c.length && o.splice(e, 0, xm(t, c, a - c.id.clock)), c.delete(t));
			} else cd(r, i, n, a - n);
		}
	}
	if (r.clients.size > 0) {
		let e = new Cd();
		return L(e.restEncoder, 0), dd(e, r), e.toUint8Array();
	}
	return null;
}, md = Pc, hd = class e extends ys {
	constructor({ guid: e = Ic(), collectionid: t = null, gc: n = !0, gcFilter: r = () => !0, meta: i = null, autoLoad: a = !1, shouldLoad: o = !0 } = {}) {
		super(), this.gc = n, this.gcFilter = r, this.clientID = md(), this.guid = e, this.collectionid = t, this.share = /* @__PURE__ */ new Map(), this.store = new Yd(), this._transaction = null, this._transactionCleanups = [], this.subdocs = /* @__PURE__ */ new Set(), this._item = null, this.shouldLoad = o, this.autoLoad = a, this.meta = i, this.isLoaded = !1, this.isSynced = !1, this.isDestroyed = !1, this.whenLoaded = Rc((e) => {
			this.on("load", () => {
				this.isLoaded = !0, e(this);
			});
		});
		let s = () => Rc((e) => {
			let t = (n) => {
				(n === void 0 || n === !0) && (this.off("sync", t), e());
			};
			this.on("sync", t);
		});
		this.on("sync", (e) => {
			e === !1 && this.isSynced && (this.whenSynced = s()), this.isSynced = e === void 0 || e === !0, this.isSynced && !this.isLoaded && this.emit("load", [this]);
		}), this.whenSynced = s();
	}
	load() {
		let e = this._item;
		e !== null && !this.shouldLoad && B(e.parent.doc, (e) => {
			e.subdocsLoaded.add(this);
		}, null, !0), this.shouldLoad = !0;
	}
	getSubdocs() {
		return this.subdocs;
	}
	getSubdocGuids() {
		return new Set(ms(this.subdocs).map((e) => e.guid));
	}
	transact(e, t = null) {
		return B(this, e, t);
	}
	get(e, t = Uf) {
		let n = cs(this.share, e, () => {
			let e = new t();
			return e._integrate(this, null), e;
		}), r = n.constructor;
		if (t !== Uf && r !== t) {
			if (r === Uf) {
				let r = new t();
				r._map = n._map, n._map.forEach((e) => {
					for (; e !== null; e = e.left) e.parent = r;
				}), r._start = n._start;
				for (let e = r._start; e !== null; e = e.right) e.parent = r;
				return r._length = n._length, this.share.set(e, r), r._integrate(this, null), r;
			}
			throw Error(`Type with the name ${e} has already been defined with a different constructor`);
		}
		return n;
	}
	getArray(e = "") {
		return this.get(e, lp);
	}
	getText(e = "") {
		return this.get(e, Ap);
	}
	getMap(e = "") {
		return this.get(e, fp);
	}
	getXmlElement(e = "") {
		return this.get(e, Fp);
	}
	getXmlFragment(e = "") {
		return this.get(e, Np);
	}
	toJSON() {
		let e = {};
		return this.share.forEach((t, n) => {
			e[n] = t.toJSON();
		}), e;
	}
	destroy() {
		this.isDestroyed = !0, ms(this.subdocs).forEach((e) => e.destroy());
		let t = this._item;
		if (t !== null) {
			this._item = null;
			let n = t.content;
			n.doc = new e({
				guid: this.guid,
				...n.opts,
				shouldLoad: !1
			}), n.doc._item = t, B(t.parent.doc, (e) => {
				let r = n.doc;
				t.deleted || e.subdocsAdded.add(r), e.subdocsRemoved.add(this);
			}, null, !0);
		}
		this.emit("destroyed", [!0]), this.emit("destroy", [this]), super.destroy();
	}
}, gd = class {
	constructor(e) {
		this.restDecoder = e;
	}
	resetDsCurVal() {}
	readDsClock() {
		return R(this.restDecoder);
	}
	readDsLen() {
		return R(this.restDecoder);
	}
}, _d = class extends gd {
	readLeftID() {
		return z(R(this.restDecoder), R(this.restDecoder));
	}
	readRightID() {
		return z(R(this.restDecoder), R(this.restDecoder));
	}
	readClient() {
		return R(this.restDecoder);
	}
	readInfo() {
		return Cc(this.restDecoder);
	}
	readString() {
		return Tc(this.restDecoder);
	}
	readParentInfo() {
		return R(this.restDecoder) === 1;
	}
	readTypeRef() {
		return R(this.restDecoder);
	}
	readLen() {
		return R(this.restDecoder);
	}
	readAny() {
		return Oc(this.restDecoder);
	}
	readBuf() {
		return hl(Sc(this.restDecoder));
	}
	readJSON() {
		return JSON.parse(Tc(this.restDecoder));
	}
	readKey() {
		return Tc(this.restDecoder);
	}
}, vd = class {
	constructor(e) {
		this.dsCurrVal = 0, this.restDecoder = e;
	}
	resetDsCurVal() {
		this.dsCurrVal = 0;
	}
	readDsClock() {
		return this.dsCurrVal += R(this.restDecoder), this.dsCurrVal;
	}
	readDsLen() {
		let e = R(this.restDecoder) + 1;
		return this.dsCurrVal += e, e;
	}
}, yd = class extends vd {
	constructor(e) {
		super(e), this.keys = [], R(e), this.keyClockDecoder = new jc(Sc(e)), this.clientDecoder = new Ac(Sc(e)), this.leftClockDecoder = new jc(Sc(e)), this.rightClockDecoder = new jc(Sc(e)), this.infoDecoder = new kc(Sc(e), Cc), this.stringDecoder = new Mc(Sc(e)), this.parentInfoDecoder = new kc(Sc(e), Cc), this.typeRefDecoder = new Ac(Sc(e)), this.lenDecoder = new Ac(Sc(e));
	}
	readLeftID() {
		return new Hd(this.clientDecoder.read(), this.leftClockDecoder.read());
	}
	readRightID() {
		return new Hd(this.clientDecoder.read(), this.rightClockDecoder.read());
	}
	readClient() {
		return this.clientDecoder.read();
	}
	readInfo() {
		return this.infoDecoder.read();
	}
	readString() {
		return this.stringDecoder.read();
	}
	readParentInfo() {
		return this.parentInfoDecoder.read() === 1;
	}
	readTypeRef() {
		return this.typeRefDecoder.read();
	}
	readLen() {
		return this.lenDecoder.read();
	}
	readAny() {
		return Oc(this.restDecoder);
	}
	readBuf() {
		return Sc(this.restDecoder);
	}
	readJSON() {
		return Oc(this.restDecoder);
	}
	readKey() {
		let e = this.keyClockDecoder.read();
		if (e < this.keys.length) return this.keys[e];
		{
			let e = this.stringDecoder.read();
			return this.keys.push(e), e;
		}
	}
}, bd = class {
	constructor() {
		this.restEncoder = Bs();
	}
	toUint8Array() {
		return Hs(this.restEncoder);
	}
	resetDsCurVal() {}
	writeDsClock(e) {
		L(this.restEncoder, e);
	}
	writeDsLen(e) {
		L(this.restEncoder, e);
	}
}, xd = class extends bd {
	writeLeftID(e) {
		L(this.restEncoder, e.client), L(this.restEncoder, e.clock);
	}
	writeRightID(e) {
		L(this.restEncoder, e.client), L(this.restEncoder, e.clock);
	}
	writeClient(e) {
		L(this.restEncoder, e);
	}
	writeInfo(e) {
		Gs(this.restEncoder, e);
	}
	writeString(e) {
		Ys(this.restEncoder, e);
	}
	writeParentInfo(e) {
		L(this.restEncoder, +!!e);
	}
	writeTypeRef(e) {
		L(this.restEncoder, e);
	}
	writeLen(e) {
		L(this.restEncoder, e);
	}
	writeAny(e) {
		ic(this.restEncoder, e);
	}
	writeBuf(e) {
		Zs(this.restEncoder, e);
	}
	writeJSON(e) {
		Ys(this.restEncoder, JSON.stringify(e));
	}
	writeKey(e) {
		Ys(this.restEncoder, e);
	}
}, Sd = class {
	constructor() {
		this.restEncoder = Bs(), this.dsCurrVal = 0;
	}
	toUint8Array() {
		return Hs(this.restEncoder);
	}
	resetDsCurVal() {
		this.dsCurrVal = 0;
	}
	writeDsClock(e) {
		let t = e - this.dsCurrVal;
		this.dsCurrVal = e, L(this.restEncoder, t);
	}
	writeDsLen(e) {
		e === 0 && pc(), L(this.restEncoder, e - 1), this.dsCurrVal += e;
	}
}, Cd = class extends Sd {
	constructor() {
		super(), this.keyMap = /* @__PURE__ */ new Map(), this.keyClock = 0, this.keyClockEncoder = new lc(), this.clientEncoder = new sc(), this.leftClockEncoder = new lc(), this.rightClockEncoder = new lc(), this.infoEncoder = new ac(Gs), this.stringEncoder = new uc(), this.parentInfoEncoder = new ac(Gs), this.typeRefEncoder = new sc(), this.lenEncoder = new sc();
	}
	toUint8Array() {
		let e = Bs();
		return L(e, 0), Zs(e, this.keyClockEncoder.toUint8Array()), Zs(e, this.clientEncoder.toUint8Array()), Zs(e, this.leftClockEncoder.toUint8Array()), Zs(e, this.rightClockEncoder.toUint8Array()), Zs(e, Hs(this.infoEncoder)), Zs(e, this.stringEncoder.toUint8Array()), Zs(e, Hs(this.parentInfoEncoder)), Zs(e, this.typeRefEncoder.toUint8Array()), Zs(e, this.lenEncoder.toUint8Array()), Xs(e, Hs(this.restEncoder)), Hs(e);
	}
	writeLeftID(e) {
		this.clientEncoder.write(e.client), this.leftClockEncoder.write(e.clock);
	}
	writeRightID(e) {
		this.clientEncoder.write(e.client), this.rightClockEncoder.write(e.clock);
	}
	writeClient(e) {
		this.clientEncoder.write(e);
	}
	writeInfo(e) {
		this.infoEncoder.write(e);
	}
	writeString(e) {
		this.stringEncoder.write(e);
	}
	writeParentInfo(e) {
		this.parentInfoEncoder.write(+!!e);
	}
	writeTypeRef(e) {
		this.typeRefEncoder.write(e);
	}
	writeLen(e) {
		this.lenEncoder.write(e);
	}
	writeAny(e) {
		ic(this.restEncoder, e);
	}
	writeBuf(e) {
		Zs(this.restEncoder, e);
	}
	writeJSON(e) {
		ic(this.restEncoder, e);
	}
	writeKey(e) {
		let t = this.keyMap.get(e);
		t === void 0 ? (this.keyClockEncoder.write(this.keyClock++), this.stringEncoder.write(e)) : this.keyClockEncoder.write(t);
	}
}, wd = (e, t, n, r) => {
	r = Cs(r, t[0].id.clock);
	let i = $d(t, r);
	L(e.restEncoder, t.length - i), e.writeClient(n), L(e.restEncoder, r);
	let a = t[i];
	a.write(e, r - a.id.clock);
	for (let n = i + 1; n < t.length; n++) t[n].write(e, 0);
}, Td = (e, t, n) => {
	let r = /* @__PURE__ */ new Map();
	n.forEach((e, n) => {
		Zd(t, n) > e && r.set(n, e);
	}), Xd(t).forEach((e, t) => {
		n.has(t) || r.set(t, 0);
	}), L(e.restEncoder, r.size), ms(r.entries()).sort((e, t) => t[0] - e[0]).forEach(([n, r]) => {
		wd(e, t.clients.get(n), n, r);
	});
}, Ed = (e, t) => {
	let n = as(), r = R(e.restDecoder);
	for (let i = 0; i < r; i++) {
		let r = R(e.restDecoder), i = Array(r), a = e.readClient(), o = R(e.restDecoder);
		n.set(a, {
			i: 0,
			refs: i
		});
		for (let n = 0; n < r; n++) {
			let r = e.readInfo();
			switch (31 & r) {
				case 0: {
					let t = e.readLen();
					i[n] = new Wp(z(a, o), t), o += t;
					break;
				}
				case 10: {
					let t = R(e.restDecoder);
					i[n] = new Om(z(a, o), t), o += t;
					break;
				}
				default: {
					let s = !(r & 192), c = new wm(z(a, o), null, (r & 128) == 128 ? e.readLeftID() : null, null, (r & 64) == 64 ? e.readRightID() : null, s ? e.readParentInfo() ? t.get(e.readString()) : e.readLeftID() : null, s && (r & 32) == 32 ? e.readString() : null, Tm(e, r));
					i[n] = c, o += c.length;
				}
			}
		}
	}
	return n;
}, Dd = (e, t, n) => {
	let r = [], i = ms(n.keys()).sort((e, t) => e - t);
	if (i.length === 0) return null;
	let a = () => {
		if (i.length === 0) return null;
		let e = n.get(i[i.length - 1]);
		for (; e.refs.length === e.i;) if (i.pop(), i.length > 0) e = n.get(i[i.length - 1]);
		else return null;
		return e;
	}, o = a();
	if (o === null) return null;
	let s = new Yd(), c = /* @__PURE__ */ new Map(), l = (e, t) => {
		let n = c.get(e);
		(n == null || n > t) && c.set(e, t);
	}, u = o.refs[o.i++], d = /* @__PURE__ */ new Map(), f = () => {
		for (let e of r) {
			let t = e.id.client, r = n.get(t);
			r ? (r.i--, s.clients.set(t, r.refs.slice(r.i)), n.delete(t), r.i = 0, r.refs = []) : s.clients.set(t, [e]), i = i.filter((e) => e !== t);
		}
		r.length = 0;
	};
	for (;;) {
		if (u.constructor !== Om) {
			let i = cs(d, u.id.client, () => Zd(t, u.id.client)) - u.id.clock;
			if (i < 0) r.push(u), l(u.id.client, u.id.clock - 1), f();
			else {
				let a = u.getMissing(e, t);
				if (a !== null) {
					r.push(u);
					let e = n.get(a) || {
						refs: [],
						i: 0
					};
					if (e.refs.length === e.i) l(a, Zd(t, a)), f();
					else {
						u = e.refs[e.i++];
						continue;
					}
				} else (i === 0 || i < u.length) && (u.integrate(e, i), d.set(u.id.client, u.id.clock + u.length));
			}
		}
		if (r.length > 0) u = r.pop();
		else if (o !== null && o.i < o.refs.length) u = o.refs[o.i++];
		else {
			if (o = a(), o === null) break;
			u = o.refs[o.i++];
		}
	}
	if (s.clients.size > 0) {
		let e = new Cd();
		return Td(e, s, /* @__PURE__ */ new Map()), L(e.restEncoder, 0), {
			missing: c,
			update: e.toUint8Array()
		};
	}
	return null;
}, Od = (e, t) => Td(e, t.doc.store, t.beforeState), kd = (e, t, n, r = new yd(e)) => B(t, (e) => {
	e.local = !1;
	let t = !1, n = e.doc, i = n.store, a = Dd(e, i, Ed(r, n)), o = i.pendingStructs;
	if (o) {
		for (let [e, n] of o.missing) if (n < Zd(i, e)) {
			t = !0;
			break;
		}
		if (a) {
			for (let [e, t] of a.missing) {
				let n = o.missing.get(e);
				(n == null || n > t) && o.missing.set(e, t);
			}
			o.update = Cf([o.update, a.update]);
		}
	} else i.pendingStructs = a;
	let s = pd(r, e, i);
	if (i.pendingDs) {
		let t = new yd(yc(i.pendingDs));
		R(t.restDecoder);
		let n = pd(t, e, i);
		i.pendingDs = s && n ? Cf([s, n]) : s || n;
	} else i.pendingDs = s;
	if (t) {
		let t = i.pendingStructs.update;
		i.pendingStructs = null, Ad(e.doc, t);
	}
}, n, !1), Ad = (e, t, n, r = yd) => {
	let i = yc(t);
	kd(i, e, n, new r(i));
}, jd = (e, t, n) => Ad(e, t, n, _d), Md = (e, t, n = /* @__PURE__ */ new Map()) => {
	Td(e, t.store, n), dd(e, ud(t.store));
}, Nd = (e, t = new Uint8Array([0]), n = new Cd()) => {
	Md(n, e, Id(t));
	let r = [n.toUint8Array()];
	if (e.store.pendingDs && r.push(e.store.pendingDs), e.store.pendingStructs && r.push(wf(e.store.pendingStructs.update, t)), r.length > 1) {
		if (n.constructor === xd) return xf(r.map((e, t) => t === 0 ? e : kf(e)));
		if (n.constructor === Cd) return Cf(r);
	}
	return r[0];
}, Pd = (e, t) => Nd(e, t, new xd()), Fd = (e) => {
	let t = /* @__PURE__ */ new Map(), n = R(e.restDecoder);
	for (let r = 0; r < n; r++) {
		let n = R(e.restDecoder), r = R(e.restDecoder);
		t.set(n, r);
	}
	return t;
}, Id = (e) => Fd(new gd(yc(e))), Ld = class {
	constructor() {
		this.l = [];
	}
}, Rd = () => new Ld(), zd = (e, t) => e.l.push(t), Bd = (e, t) => {
	let n = e.l, r = n.length;
	e.l = n.filter((e) => t !== e), r === e.l.length && console.error("[yjs] Tried to remove event handler that doesn't exist.");
}, Vd = (e, t, n) => tl(e.l, [t, n]), Hd = class {
	constructor(e, t) {
		this.client = e, this.clock = t;
	}
}, Ud = (e, t) => e === t || e !== null && t !== null && e.client === t.client && e.clock === t.clock, z = (e, t) => new Hd(e, t), Wd = (e) => {
	for (let [t, n] of e.doc.share.entries()) if (n === e) return t;
	throw pc();
}, Gd = (e, t) => {
	for (; t !== null;) {
		if (t.parent === e) return !0;
		t = t.parent._item;
	}
	return !1;
}, Kd = class {
	constructor(e, t) {
		this.ds = e, this.sv = t;
	}
};
((e, t) => new Kd(e, t))(ld(), /* @__PURE__ */ new Map());
var qd = (e, t) => t === void 0 ? !e.deleted : t.sv.has(e.id.client) && (t.sv.get(e.id.client) || 0) > e.id.clock && !ad(t.ds, e.id), Jd = (e, t) => {
	let n = cs(e.meta, Jd, ds), r = e.doc.store;
	n.has(t) || (t.sv.forEach((t, n) => {
		t < Zd(r, n) && nf(e, z(n, t));
	}), rd(e, t.ds, (e) => {}), n.add(t));
}, Yd = class {
	constructor() {
		this.clients = /* @__PURE__ */ new Map(), this.pendingStructs = null, this.pendingDs = null;
	}
}, Xd = (e) => {
	let t = /* @__PURE__ */ new Map();
	return e.clients.forEach((e, n) => {
		let r = e[e.length - 1];
		t.set(n, r.id.clock + r.length);
	}), t;
}, Zd = (e, t) => {
	let n = e.clients.get(t);
	if (n === void 0) return 0;
	let r = n[n.length - 1];
	return r.id.clock + r.length;
}, Qd = (e, t) => {
	let n = e.clients.get(t.id.client);
	if (n === void 0) n = [], e.clients.set(t.id.client, n);
	else {
		let e = n[n.length - 1];
		if (e.id.clock + e.length !== t.id.clock) throw pc();
	}
	n.push(t);
}, $d = (e, t) => {
	let n = 0, r = e.length - 1, i = e[r], a = i.id.clock;
	if (a === t) return r;
	let o = bs(t / (a + i.length - 1) * r);
	for (; n <= r;) {
		if (i = e[o], a = i.id.clock, a <= t) {
			if (t < a + i.length) return o;
			n = o + 1;
		} else r = o - 1;
		o = bs((n + r) / 2);
	}
	throw pc();
}, ef = (e, t) => {
	let n = e.clients.get(t.client);
	return n[$d(n, t.clock)];
}, tf = (e, t, n) => {
	let r = $d(t, n), i = t[r];
	return i.id.clock < n && i instanceof wm ? (t.splice(r + 1, 0, xm(e, i, n - i.id.clock)), r + 1) : r;
}, nf = (e, t) => {
	let n = e.doc.store.clients.get(t.client);
	return n[tf(e, n, t.clock)];
}, rf = (e, t, n) => {
	let r = t.clients.get(n.client), i = $d(r, n.clock), a = r[i];
	return n.clock !== a.id.clock + a.length - 1 && a.constructor !== Wp && r.splice(i + 1, 0, xm(e, a, n.clock - a.id.clock + 1)), a;
}, af = (e, t, n) => {
	let r = e.clients.get(t.id.client);
	r[$d(r, t.id.clock)] = n;
}, of = (e, t, n, r, i) => {
	if (r === 0) return;
	let a = n + r, o = tf(e, t, n), s;
	do
		s = t[o++], a < s.id.clock + s.length && tf(e, t, a), i(s);
	while (o < t.length && t[o].id.clock < a);
}, sf = class {
	constructor(e, t, n) {
		this.doc = e, this.deleteSet = new nd(), this.beforeState = Xd(e.store), this.afterState = /* @__PURE__ */ new Map(), this.changed = /* @__PURE__ */ new Map(), this.changedParentTypes = /* @__PURE__ */ new Map(), this._mergeStructs = [], this.origin = t, this.meta = /* @__PURE__ */ new Map(), this.local = n, this.subdocsAdded = /* @__PURE__ */ new Set(), this.subdocsRemoved = /* @__PURE__ */ new Set(), this.subdocsLoaded = /* @__PURE__ */ new Set(), this._needFormattingCleanup = !1;
	}
}, cf = (e, t) => t.deleteSet.clients.size === 0 && !us(t.afterState, (e, n) => t.beforeState.get(n) !== e) ? !1 : (od(t.deleteSet), Od(e, t), dd(e, t.deleteSet), !0), lf = (e, t, n) => {
	let r = t._item;
	(r === null || r.id.clock < (e.beforeState.get(r.id.client) || 0) && !r.deleted) && cs(e.changed, t, ds).add(n);
}, uf = (e, t) => {
	let n = e[t], r = e[t - 1], i = t;
	for (; i > 0 && r.deleted === n.deleted && r.constructor === n.constructor && r.mergeWith(n); n = r, r = e[--i - 1]) n instanceof wm && n.parentSub !== null && n.parent._map.get(n.parentSub) === n && n.parent._map.set(n.parentSub, r);
	let a = t - i;
	return a && e.splice(t + 1 - a, a), a;
}, df = (e, t, n) => {
	for (let [r, i] of e.clients.entries()) {
		let e = t.clients.get(r);
		for (let r = i.length - 1; r >= 0; r--) {
			let a = i[r], o = a.clock + a.len;
			for (let r = $d(e, a.clock), i = e[r]; r < e.length && i.id.clock < o; i = e[++r]) {
				let i = e[r];
				if (a.clock + a.len <= i.id.clock) break;
				i instanceof wm && i.deleted && !i.keep && n(i) && i.gc(t, !1);
			}
		}
	}
}, ff = (e, t) => {
	e.clients.forEach((e, n) => {
		let r = t.clients.get(n);
		for (let t = e.length - 1; t >= 0; t--) {
			let n = e[t], i = Ss(r.length - 1, 1 + $d(r, n.clock + n.len - 1));
			for (let e = i, t = r[e]; e > 0 && t.id.clock >= n.clock; t = r[e]) e -= 1 + uf(r, e);
		}
	});
}, pf = (e, t) => {
	if (t < e.length) {
		let n = e[t], r = n.doc, i = r.store, a = n.deleteSet, o = n._mergeStructs;
		try {
			od(a), n.afterState = Xd(n.doc.store), r.emit("beforeObserverCalls", [n, r]);
			let e = [];
			n.changed.forEach((t, r) => e.push(() => {
				r._item !== null && r._item.deleted || r._callObserver(n, t);
			})), e.push(() => {
				n.changedParentTypes.forEach((t, r) => {
					r._dEH.l.length > 0 && (r._item === null || !r._item.deleted) && e.push(() => {
						t = t.filter((e) => e.target._item === null || !e.target._item.deleted), t.forEach((e) => {
							e.currentTarget = r, e._path = null;
						}), t.sort((e, t) => e.path.length - t.path.length), Vd(r._dEH, t, n);
					});
				}), e.push(() => r.emit("afterTransaction", [n, r])), e.push(() => {
					n._needFormattingCleanup && Dp(n);
				});
			}), tl(e, []);
		} finally {
			r.gc && df(a, i, r.gcFilter), ff(a, i), n.afterState.forEach((e, t) => {
				let r = n.beforeState.get(t) || 0;
				if (r !== e) {
					let e = i.clients.get(t), n = Cs($d(e, r), 1);
					for (let t = e.length - 1; t >= n;) t -= 1 + uf(e, t);
				}
			});
			for (let e = o.length - 1; e >= 0; e--) {
				let { client: t, clock: n } = o[e].id, r = i.clients.get(t), a = $d(r, n);
				a + 1 < r.length && uf(r, a + 1) > 1 || a > 0 && uf(r, a);
			}
			if (!n.local && n.afterState.get(r.clientID) !== n.beforeState.get(r.clientID) && (Yu(Wu, Lu, "[yjs] ", Ru, Hu, "Changed the client-id because another client seems to be using it."), r.clientID = md()), r.emit("afterTransactionCleanup", [n, r]), r._observers.has("update")) {
				let e = new xd();
				cf(e, n) && r.emit("update", [
					e.toUint8Array(),
					n.origin,
					r,
					n
				]);
			}
			if (r._observers.has("updateV2")) {
				let e = new Cd();
				cf(e, n) && r.emit("updateV2", [
					e.toUint8Array(),
					n.origin,
					r,
					n
				]);
			}
			let { subdocsAdded: s, subdocsLoaded: c, subdocsRemoved: l } = n;
			(s.size > 0 || l.size > 0 || c.size > 0) && (s.forEach((e) => {
				e.clientID = r.clientID, e.collectionid ??= r.collectionid, r.subdocs.add(e);
			}), l.forEach((e) => r.subdocs.delete(e)), r.emit("subdocs", [
				{
					loaded: c,
					added: s,
					removed: l
				},
				r,
				n
			]), l.forEach((e) => e.destroy())), e.length <= t + 1 ? (r._transactionCleanups = [], r.emit("afterAllTransactions", [r, e])) : pf(e, t + 1);
		}
	}
}, B = (e, t, n = null, r = !0) => {
	let i = e._transactionCleanups, a = !1, o = null;
	e._transaction === null && (a = !0, e._transaction = new sf(e, n, r), i.push(e._transaction), i.length === 1 && e.emit("beforeAllTransactions", [e]), e.emit("beforeTransaction", [e._transaction, e]));
	try {
		o = t(e._transaction);
	} finally {
		if (a) {
			let t = e._transaction === i[0];
			e._transaction = null, t && pf(i, 0);
		}
	}
	return o;
}, mf = class {
	constructor(e, t) {
		this.insertions = t, this.deletions = e, this.meta = /* @__PURE__ */ new Map();
	}
}, hf = (e, t, n) => {
	rd(e, n.deletions, (n) => {
		n instanceof wm && t.scope.some((t) => t === e.doc || Gd(t, n)) && bm(n, !1);
	});
}, gf = (e, t, n) => {
	let r = null, i = e.doc, a = e.scope;
	B(i, (n) => {
		for (; t.length > 0 && e.currStackItem === null;) {
			let r = i.store, o = t.pop(), s = /* @__PURE__ */ new Set(), c = [], l = !1;
			rd(n, o.insertions, (e) => {
				if (e instanceof wm) {
					if (e.redone !== null) {
						let { item: t, diff: i } = ym(r, e.id);
						i > 0 && (t = nf(n, z(t.id.client, t.id.clock + i))), e = t;
					}
					!e.deleted && a.some((t) => t === n.doc || Gd(t, e)) && c.push(e);
				}
			}), rd(n, o.deletions, (e) => {
				e instanceof wm && a.some((t) => t === n.doc || Gd(t, e)) && !ad(o.insertions, e.id) && s.add(e);
			}), s.forEach((t) => {
				l = Cm(n, t, s, o.insertions, e.ignoreRemoteMapChanges, e) !== null || l;
			});
			for (let t = c.length - 1; t >= 0; t--) {
				let r = c[t];
				e.deleteFilter(r) && (r.delete(n), l = !0);
			}
			e.currStackItem = l ? o : null;
		}
		n.changed.forEach((e, t) => {
			e.has(null) && t._searchMarker && (t._searchMarker.length = 0);
		}), r = n;
	}, e);
	let o = e.currStackItem;
	if (o != null) {
		let t = r.changedParentTypes;
		e.emit("stack-item-popped", [{
			stackItem: o,
			type: n,
			changedParentTypes: t,
			origin: e
		}, e]), e.currStackItem = null;
	}
	return o;
}, _f = class extends ys {
	constructor(e, { captureTimeout: t = 500, captureTransaction: n = (e) => !0, deleteFilter: r = () => !0, trackedOrigins: i = /* @__PURE__ */ new Set([null]), ignoreRemoteMapChanges: a = !1, doc: o = vs(e) ? e[0].doc : e instanceof hd ? e : e.doc } = {}) {
		super(), this.scope = [], this.doc = o, this.addToScope(e), this.deleteFilter = r, i.add(this), this.trackedOrigins = i, this.captureTransaction = n, this.undoStack = [], this.redoStack = [], this.undoing = !1, this.redoing = !1, this.currStackItem = null, this.lastChange = 0, this.ignoreRemoteMapChanges = a, this.captureTimeout = t, this.afterTransactionHandler = (e) => {
			if (!this.captureTransaction(e) || !this.scope.some((t) => e.changedParentTypes.has(t) || t === this.doc) || !this.trackedOrigins.has(e.origin) && (!e.origin || !this.trackedOrigins.has(e.origin.constructor))) return;
			let t = this.undoing, n = this.redoing, r = t ? this.redoStack : this.undoStack;
			t ? this.stopCapturing() : n || this.clear(!1, !0);
			let i = new nd();
			e.afterState.forEach((t, n) => {
				let r = e.beforeState.get(n) || 0, a = t - r;
				a > 0 && cd(i, n, r, a);
			});
			let a = Lc(), o = !1;
			if (this.lastChange > 0 && a - this.lastChange < this.captureTimeout && r.length > 0 && !t && !n) {
				let t = r[r.length - 1];
				t.deletions = sd([t.deletions, e.deleteSet]), t.insertions = sd([t.insertions, i]);
			} else r.push(new mf(e.deleteSet, i)), o = !0;
			!t && !n && (this.lastChange = a), rd(e, e.deleteSet, (t) => {
				t instanceof wm && this.scope.some((n) => n === e.doc || Gd(n, t)) && bm(t, !0);
			});
			let s = [{
				stackItem: r[r.length - 1],
				origin: e.origin,
				type: t ? "redo" : "undo",
				changedParentTypes: e.changedParentTypes
			}, this];
			o ? this.emit("stack-item-added", s) : this.emit("stack-item-updated", s);
		}, this.destroy = this.destroy.bind(this), this.doc.on("afterTransaction", this.afterTransactionHandler), this.doc.on("destroy", this.destroy);
	}
	addToScope(e) {
		let t = new Set(this.scope);
		e = vs(e) ? e : [e], e.forEach((e) => {
			t.has(e) || (t.add(e), (e instanceof Uf ? e.doc !== this.doc : e !== this.doc) && Xu("[yjs#509] Not same Y.Doc"), this.scope.push(e));
		});
	}
	addTrackedOrigin(e) {
		this.trackedOrigins.add(e);
	}
	removeTrackedOrigin(e) {
		this.trackedOrigins.delete(e);
	}
	clear(e = !0, t = !0) {
		(e && this.canUndo() || t && this.canRedo()) && this.doc.transact((n) => {
			e && (this.undoStack.forEach((e) => hf(n, this, e)), this.undoStack = []), t && (this.redoStack.forEach((e) => hf(n, this, e)), this.redoStack = []), this.emit("stack-cleared", [{
				undoStackCleared: e,
				redoStackCleared: t
			}]);
		});
	}
	stopCapturing() {
		this.lastChange = 0;
	}
	undo() {
		this.undoing = !0;
		let e;
		try {
			e = gf(this, this.undoStack, "undo");
		} finally {
			this.undoing = !1;
		}
		return e;
	}
	redo() {
		this.redoing = !0;
		let e;
		try {
			e = gf(this, this.redoStack, "redo");
		} finally {
			this.redoing = !1;
		}
		return e;
	}
	canUndo() {
		return this.undoStack.length > 0;
	}
	canRedo() {
		return this.redoStack.length > 0;
	}
	destroy() {
		this.trackedOrigins.delete(this), this.doc.off("afterTransaction", this.afterTransactionHandler), this.doc.off("destroy", this.destroy), super.destroy();
	}
};
function* vf(e) {
	let t = R(e.restDecoder);
	for (let n = 0; n < t; n++) {
		let t = R(e.restDecoder), n = e.readClient(), r = R(e.restDecoder);
		for (let i = 0; i < t; i++) {
			let t = e.readInfo();
			if (t === 10) {
				let t = R(e.restDecoder);
				yield new Om(z(n, r), t), r += t;
			} else if (31 & t) {
				let i = !(t & 192), a = new wm(z(n, r), null, (t & 128) == 128 ? e.readLeftID() : null, null, (t & 64) == 64 ? e.readRightID() : null, i ? e.readParentInfo() ? e.readString() : e.readLeftID() : null, i && (t & 32) == 32 ? e.readString() : null, Tm(e, t));
				yield a, r += a.length;
			} else {
				let t = e.readLen();
				yield new Wp(z(n, r), t), r += t;
			}
		}
	}
}
var yf = class {
	constructor(e, t) {
		this.gen = vf(e), this.curr = null, this.done = !1, this.filterSkips = t, this.next();
	}
	next() {
		do
			this.curr = this.gen.next().value || null;
		while (this.filterSkips && this.curr !== null && this.curr.constructor === Om);
		return this.curr;
	}
}, bf = class {
	constructor(e) {
		this.currClient = 0, this.startClock = 0, this.written = 0, this.encoder = e, this.clientStructs = [];
	}
}, xf = (e) => Cf(e, _d, xd), Sf = (e, t) => {
	if (e.constructor === Wp) {
		let { client: n, clock: r } = e.id;
		return new Wp(z(n, r + t), e.length - t);
	}
	if (e.constructor === Om) {
		let { client: n, clock: r } = e.id;
		return new Om(z(n, r + t), e.length - t);
	}
	{
		let n = e, { client: r, clock: i } = n.id;
		return new wm(z(r, i + t), null, z(r, i + t - 1), null, n.rightOrigin, n.parent, n.parentSub, n.content.splice(t));
	}
}, Cf = (e, t = yd, n = Cd) => {
	if (e.length === 1) return e[0];
	let r = e.map((e) => new t(yc(e))), i = r.map((e) => new yf(e, !0)), a = null, o = new n(), s = new bf(o);
	for (; i = i.filter((e) => e.curr !== null), i.sort((e, t) => {
		if (e.curr.id.client === t.curr.id.client) {
			let n = e.curr.id.clock - t.curr.id.clock;
			return n === 0 ? e.curr.constructor === t.curr.constructor ? 0 : e.curr.constructor === Om ? 1 : -1 : n;
		}
		return t.curr.id.client - e.curr.id.client;
	}), i.length !== 0;) {
		let e = i[0], t = e.curr.id.client;
		if (a !== null) {
			let n = e.curr, r = !1;
			for (; n !== null && n.id.clock + n.length <= a.struct.id.clock + a.struct.length && n.id.client >= a.struct.id.client;) n = e.next(), r = !0;
			if (n === null || n.id.client !== t || r && n.id.clock > a.struct.id.clock + a.struct.length) continue;
			if (t !== a.struct.id.client) Ef(s, a.struct, a.offset), a = {
				struct: n,
				offset: 0
			}, e.next();
			else if (a.struct.id.clock + a.struct.length < n.id.clock) {
				if (a.struct.constructor === Om) a.struct.length = n.id.clock + n.length - a.struct.id.clock;
				else {
					Ef(s, a.struct, a.offset);
					let e = n.id.clock - a.struct.id.clock - a.struct.length;
					a = {
						struct: new Om(z(t, a.struct.id.clock + a.struct.length), e),
						offset: 0
					};
				}
			} else {
				let t = a.struct.id.clock + a.struct.length - n.id.clock;
				t > 0 && (a.struct.constructor === Om ? a.struct.length -= t : n = Sf(n, t)), a.struct.mergeWith(n) || (Ef(s, a.struct, a.offset), a = {
					struct: n,
					offset: 0
				}, e.next());
			}
		} else a = {
			struct: e.curr,
			offset: 0
		}, e.next();
		for (let n = e.curr; n !== null && n.id.client === t && n.id.clock === a.struct.id.clock + a.struct.length && n.constructor !== Om; n = e.next()) Ef(s, a.struct, a.offset), a = {
			struct: n,
			offset: 0
		};
	}
	return a !== null && (Ef(s, a.struct, a.offset), a = null), Df(s), dd(o, sd(r.map((e) => fd(e)))), o.toUint8Array();
}, wf = (e, t, n = yd, r = Cd) => {
	let i = Id(t), a = new r(), o = new bf(a), s = new n(yc(e)), c = new yf(s, !1);
	for (; c.curr;) {
		let e = c.curr, t = e.id.client, n = i.get(t) || 0;
		if (c.curr.constructor === Om) c.next();
		else if (e.id.clock + e.length > n) for (Ef(o, e, Cs(n - e.id.clock, 0)), c.next(); c.curr && c.curr.id.client === t;) Ef(o, c.curr, 0), c.next();
		else for (; c.curr && c.curr.id.client === t && c.curr.id.clock + c.curr.length <= n;) c.next();
	}
	return Df(o), dd(a, fd(s)), a.toUint8Array();
}, Tf = (e) => {
	e.written > 0 && (e.clientStructs.push({
		written: e.written,
		restEncoder: Hs(e.encoder.restEncoder)
	}), e.encoder.restEncoder = Bs(), e.written = 0);
}, Ef = (e, t, n) => {
	e.written > 0 && e.currClient !== t.id.client && Tf(e), e.written === 0 && (e.currClient = t.id.client, e.encoder.writeClient(t.id.client), L(e.encoder.restEncoder, t.id.clock + n)), t.write(e.encoder, n), e.written++;
}, Df = (e) => {
	Tf(e);
	let t = e.encoder.restEncoder;
	L(t, e.clientStructs.length);
	for (let n = 0; n < e.clientStructs.length; n++) {
		let r = e.clientStructs[n];
		L(t, r.written), Xs(t, r.restEncoder);
	}
}, Of = (e, t, n, r) => {
	let i = new n(yc(e)), a = new yf(i, !1), o = new r(), s = new bf(o);
	for (let e = a.curr; e !== null; e = a.next()) Ef(s, t(e), 0);
	return Df(s), dd(o, fd(i)), o.toUint8Array();
}, kf = (e) => Of(e, nl, yd, xd), Af = "You must not compute changes after the event-handler fired.", jf = class {
	constructor(e, t) {
		this.target = e, this.currentTarget = e, this.transaction = t, this._changes = null, this._keys = null, this._delta = null, this._path = null;
	}
	get path() {
		return this._path ||= Mf(this.currentTarget, this.target);
	}
	deletes(e) {
		return ad(this.transaction.deleteSet, e.id);
	}
	get keys() {
		if (this._keys === null) {
			if (this.transaction.doc._transactionCleanups.length === 0) throw dc(Af);
			let e = /* @__PURE__ */ new Map(), t = this.target;
			this.transaction.changed.get(t).forEach((n) => {
				if (n !== null) {
					let r = t._map.get(n), i, a;
					if (this.adds(r)) {
						let e = r.left;
						for (; e !== null && this.adds(e);) e = e.left;
						if (this.deletes(r)) {
							if (e !== null && this.deletes(e)) i = "delete", a = fs(e.content.getContent());
							else return;
						} else e !== null && this.deletes(e) ? (i = "update", a = fs(e.content.getContent())) : (i = "add", a = void 0);
					} else if (this.deletes(r)) i = "delete", a = fs(r.content.getContent());
					else return;
					e.set(n, {
						action: i,
						oldValue: a
					});
				}
			}), this._keys = e;
		}
		return this._keys;
	}
	get delta() {
		return this.changes.delta;
	}
	adds(e) {
		return e.id.clock >= (this.transaction.beforeState.get(e.id.client) || 0);
	}
	get changes() {
		let e = this._changes;
		if (e === null) {
			if (this.transaction.doc._transactionCleanups.length === 0) throw dc(Af);
			let t = this.target, n = ds(), r = ds(), i = [];
			if (e = {
				added: n,
				deleted: r,
				delta: i,
				keys: this.keys
			}, this.transaction.changed.get(t).has(null)) {
				let e = null, a = () => {
					e && i.push(e);
				};
				for (let i = t._start; i !== null; i = i.right) i.deleted ? this.deletes(i) && !this.adds(i) && ((e === null || e.delete === void 0) && (a(), e = { delete: 0 }), e.delete += i.length, r.add(i)) : this.adds(i) ? ((e === null || e.insert === void 0) && (a(), e = { insert: [] }), e.insert = e.insert.concat(i.content.getContent()), n.add(i)) : ((e === null || e.retain === void 0) && (a(), e = { retain: 0 }), e.retain += i.length);
				e !== null && e.retain === void 0 && a();
			}
			this._changes = e;
		}
		return e;
	}
}, Mf = (e, t) => {
	let n = [];
	for (; t._item !== null && t !== e;) {
		if (t._item.parentSub !== null) n.unshift(t._item.parentSub);
		else {
			let e = 0, r = t._item.parent._start;
			for (; r !== t._item && r !== null;) !r.deleted && r.countable && (e += r.length), r = r.right;
			n.unshift(e);
		}
		t = t._item.parent;
	}
	return n;
}, Nf = () => {
	Xu("Invalid access: Add Yjs type to a document before reading data.");
}, Pf = 80, Ff = 0, If = class {
	constructor(e, t) {
		e.marker = !0, this.p = e, this.index = t, this.timestamp = Ff++;
	}
}, Lf = (e) => {
	e.timestamp = Ff++;
}, Rf = (e, t, n) => {
	e.p.marker = !1, e.p = t, t.marker = !0, e.index = n, e.timestamp = Ff++;
}, zf = (e, t, n) => {
	if (e.length >= Pf) {
		let r = e.reduce((e, t) => e.timestamp < t.timestamp ? e : t);
		return Rf(r, t, n), r;
	}
	{
		let r = new If(t, n);
		return e.push(r), r;
	}
}, Bf = (e, t) => {
	if (e._start === null || t === 0 || e._searchMarker === null) return null;
	let n = e._searchMarker.length === 0 ? null : e._searchMarker.reduce((e, n) => xs(t - e.index) < xs(t - n.index) ? e : n), r = e._start, i = 0;
	for (n !== null && (r = n.p, i = n.index, Lf(n)); r.right !== null && i < t;) {
		if (!r.deleted && r.countable) {
			if (t < i + r.length) break;
			i += r.length;
		}
		r = r.right;
	}
	for (; r.left !== null && i > t;) r = r.left, !r.deleted && r.countable && (i -= r.length);
	for (; r.left !== null && r.left.id.client === r.id.client && r.left.id.clock + r.left.length === r.id.clock;) r = r.left, !r.deleted && r.countable && (i -= r.length);
	return n !== null && xs(n.index - i) < r.parent.length / Pf ? (Rf(n, r, i), n) : zf(e._searchMarker, r, i);
}, Vf = (e, t, n) => {
	for (let r = e.length - 1; r >= 0; r--) {
		let i = e[r];
		if (n > 0) {
			let t = i.p;
			for (t.marker = !1; t && (t.deleted || !t.countable);) t = t.left, t && !t.deleted && t.countable && (i.index -= t.length);
			if (t === null || t.marker === !0) {
				e.splice(r, 1);
				continue;
			}
			i.p = t, t.marker = !0;
		}
		(t < i.index || n > 0 && t === i.index) && (i.index = Cs(t, i.index + n));
	}
}, Hf = (e, t, n) => {
	let r = e, i = t.changedParentTypes;
	for (; cs(i, e, () => []).push(n), e._item !== null;) e = e._item.parent;
	Vd(r._eH, n, t);
}, Uf = class {
	constructor() {
		this._item = null, this._map = /* @__PURE__ */ new Map(), this._start = null, this.doc = null, this._length = 0, this._eH = Rd(), this._dEH = Rd(), this._searchMarker = null;
	}
	get parent() {
		return this._item ? this._item.parent : null;
	}
	_integrate(e, t) {
		this.doc = e, this._item = t;
	}
	_copy() {
		throw fc();
	}
	clone() {
		throw fc();
	}
	_write(e) {}
	get _first() {
		let e = this._start;
		for (; e !== null && e.deleted;) e = e.right;
		return e;
	}
	_callObserver(e, t) {
		!e.local && this._searchMarker && (this._searchMarker.length = 0);
	}
	observe(e) {
		zd(this._eH, e);
	}
	observeDeep(e) {
		zd(this._dEH, e);
	}
	unobserve(e) {
		Bd(this._eH, e);
	}
	unobserveDeep(e) {
		Bd(this._dEH, e);
	}
	toJSON() {}
}, Wf = (e, t, n) => {
	e.doc ?? Nf(), t < 0 && (t = e._length + t), n < 0 && (n = e._length + n);
	let r = n - t, i = [], a = e._start;
	for (; a !== null && r > 0;) {
		if (a.countable && !a.deleted) {
			let e = a.content.getContent();
			if (e.length <= t) t -= e.length;
			else {
				for (let n = t; n < e.length && r > 0; n++) i.push(e[n]), r--;
				t = 0;
			}
		}
		a = a.right;
	}
	return i;
}, Gf = (e) => {
	e.doc ?? Nf();
	let t = [], n = e._start;
	for (; n !== null;) {
		if (n.countable && !n.deleted) {
			let e = n.content.getContent();
			for (let n = 0; n < e.length; n++) t.push(e[n]);
		}
		n = n.right;
	}
	return t;
}, Kf = (e, t) => {
	let n = 0, r = e._start;
	for (e.doc ?? Nf(); r !== null;) {
		if (r.countable && !r.deleted) {
			let i = r.content.getContent();
			for (let r = 0; r < i.length; r++) t(i[r], n++, e);
		}
		r = r.right;
	}
}, qf = (e, t) => {
	let n = [];
	return Kf(e, (r, i) => {
		n.push(t(r, i, e));
	}), n;
}, Jf = (e) => {
	let t = e._start, n = null, r = 0;
	return {
		[Symbol.iterator]() {
			return this;
		},
		next: () => {
			if (n === null) {
				for (; t !== null && t.deleted;) t = t.right;
				if (t === null) return {
					done: !0,
					value: void 0
				};
				n = t.content.getContent(), r = 0, t = t.right;
			}
			let e = n[r++];
			return n.length <= r && (n = null), {
				done: !1,
				value: e
			};
		}
	};
}, Yf = (e, t) => {
	e.doc ?? Nf();
	let n = Bf(e, t), r = e._start;
	for (n !== null && (r = n.p, t -= n.index); r !== null; r = r.right) if (!r.deleted && r.countable) {
		if (t < r.length) return r.content.getContent()[t];
		t -= r.length;
	}
}, Xf = (e, t, n, r) => {
	let i = n, a = e.doc, o = a.clientID, s = a.store, c = n === null ? t._start : n.right, l = [], u = () => {
		l.length > 0 && (i = new wm(z(o, Zd(s, o)), i, i && i.lastId, c, c && c.id, t, null, new am(l)), i.integrate(e, 0), l = []);
	};
	r.forEach((n) => {
		if (n === null) l.push(n);
		else switch (n.constructor) {
			case Number:
			case Object:
			case Boolean:
			case Array:
			case String:
				l.push(n);
				break;
			default: switch (u(), n.constructor) {
				case Uint8Array:
				case ArrayBuffer:
					i = new wm(z(o, Zd(s, o)), i, i && i.lastId, c, c && c.id, t, null, new Gp(new Uint8Array(n))), i.integrate(e, 0);
					break;
				case hd:
					i = new wm(z(o, Zd(s, o)), i, i && i.lastId, c, c && c.id, t, null, new Xp(n)), i.integrate(e, 0);
					break;
				default: if (n instanceof Uf) i = new wm(z(o, Zd(s, o)), i, i && i.lastId, c, c && c.id, t, null, new _m(n)), i.integrate(e, 0);
				else throw Error("Unexpected content type in insert operation");
			}
		}
	}), u();
}, Zf = () => dc("Length exceeded!"), Qf = (e, t, n, r) => {
	if (n > t._length) throw Zf();
	if (n === 0) return t._searchMarker && Vf(t._searchMarker, n, r.length), Xf(e, t, null, r);
	let i = n, a = Bf(t, n), o = t._start;
	for (a !== null && (o = a.p, n -= a.index, n === 0 && (o = o.prev, n += o && o.countable && !o.deleted ? o.length : 0)); o !== null; o = o.right) if (!o.deleted && o.countable) {
		if (n <= o.length) {
			n < o.length && nf(e, z(o.id.client, o.id.clock + n));
			break;
		}
		n -= o.length;
	}
	return t._searchMarker && Vf(t._searchMarker, i, r.length), Xf(e, t, o, r);
}, $f = (e, t, n) => {
	let r = (t._searchMarker || []).reduce((e, t) => t.index > e.index ? t : e, {
		index: 0,
		p: t._start
	}).p;
	if (r) for (; r.right;) r = r.right;
	return Xf(e, t, r, n);
}, ep = (e, t, n, r) => {
	if (r === 0) return;
	let i = n, a = r, o = Bf(t, n), s = t._start;
	for (o !== null && (s = o.p, n -= o.index); s !== null && n > 0; s = s.right) !s.deleted && s.countable && (n < s.length && nf(e, z(s.id.client, s.id.clock + n)), n -= s.length);
	for (; r > 0 && s !== null;) s.deleted || (r < s.length && nf(e, z(s.id.client, s.id.clock + r)), s.delete(e), r -= s.length), s = s.right;
	if (r > 0) throw Zf();
	t._searchMarker && Vf(t._searchMarker, i, -a + r);
}, tp = (e, t, n) => {
	let r = t._map.get(n);
	r !== void 0 && r.delete(e);
}, np = (e, t, n, r) => {
	let i = t._map.get(n) || null, a = e.doc, o = a.clientID, s;
	if (r == null) s = new am([r]);
	else switch (r.constructor) {
		case Number:
		case Object:
		case Boolean:
		case Array:
		case String:
		case Date:
		case BigInt:
			s = new am([r]);
			break;
		case Uint8Array:
			s = new Gp(r);
			break;
		case hd:
			s = new Xp(r);
			break;
		default: if (r instanceof Uf) s = new _m(r);
		else throw Error("Unexpected content type");
	}
	new wm(z(o, Zd(a.store, o)), i, i && i.lastId, null, null, t, n, s).integrate(e, 0);
}, rp = (e, t) => {
	e.doc ?? Nf();
	let n = e._map.get(t);
	return n !== void 0 && !n.deleted ? n.content.getContent()[n.length - 1] : void 0;
}, ip = (e) => {
	let t = {};
	return e.doc ?? Nf(), e._map.forEach((e, n) => {
		e.deleted || (t[n] = e.content.getContent()[e.length - 1]);
	}), t;
}, ap = (e, t) => {
	e.doc ?? Nf();
	let n = e._map.get(t);
	return n !== void 0 && !n.deleted;
}, op = (e, t) => {
	let n = {};
	return e._map.forEach((e, r) => {
		let i = e;
		for (; i !== null && (!t.sv.has(i.id.client) || i.id.clock >= (t.sv.get(i.id.client) || 0));) i = i.left;
		i !== null && qd(i, t) && (n[r] = i.content.getContent()[i.length - 1]);
	}), n;
}, sp = (e) => (e.doc ?? Nf(), $u(e._map.entries(), (e) => !e[1].deleted)), cp = class extends jf {}, lp = class e extends Uf {
	constructor() {
		super(), this._prelimContent = [], this._searchMarker = [];
	}
	static from(t) {
		let n = new e();
		return n.push(t), n;
	}
	_integrate(e, t) {
		super._integrate(e, t), this.insert(0, this._prelimContent), this._prelimContent = null;
	}
	_copy() {
		return new e();
	}
	clone() {
		let t = new e();
		return t.insert(0, this.toArray().map((e) => e instanceof Uf ? e.clone() : e)), t;
	}
	get length() {
		return this.doc ?? Nf(), this._length;
	}
	_callObserver(e, t) {
		super._callObserver(e, t), Hf(this, e, new cp(this, e));
	}
	insert(e, t) {
		this.doc === null ? this._prelimContent.splice(e, 0, ...t) : B(this.doc, (n) => {
			Qf(n, this, e, t);
		});
	}
	push(e) {
		this.doc === null ? this._prelimContent.push(...e) : B(this.doc, (t) => {
			$f(t, this, e);
		});
	}
	unshift(e) {
		this.insert(0, e);
	}
	delete(e, t = 1) {
		this.doc === null ? this._prelimContent.splice(e, t) : B(this.doc, (n) => {
			ep(n, this, e, t);
		});
	}
	get(e) {
		return Yf(this, e);
	}
	toArray() {
		return Gf(this);
	}
	slice(e = 0, t = this.length) {
		return Wf(this, e, t);
	}
	toJSON() {
		return this.map((e) => e instanceof Uf ? e.toJSON() : e);
	}
	map(e) {
		return qf(this, e);
	}
	forEach(e) {
		Kf(this, e);
	}
	[Symbol.iterator]() {
		return Jf(this);
	}
	_write(e) {
		e.writeTypeRef(um);
	}
}, up = (e) => new lp(), dp = class extends jf {
	constructor(e, t, n) {
		super(e, t), this.keysChanged = n;
	}
}, fp = class e extends Uf {
	constructor(e) {
		super(), this._prelimContent = null, this._prelimContent = e === void 0 ? /* @__PURE__ */ new Map() : new Map(e);
	}
	_integrate(e, t) {
		super._integrate(e, t), this._prelimContent.forEach((e, t) => {
			this.set(t, e);
		}), this._prelimContent = null;
	}
	_copy() {
		return new e();
	}
	clone() {
		let t = new e();
		return this.forEach((e, n) => {
			t.set(n, e instanceof Uf ? e.clone() : e);
		}), t;
	}
	_callObserver(e, t) {
		Hf(this, e, new dp(this, e, t));
	}
	toJSON() {
		this.doc ?? Nf();
		let e = {};
		return this._map.forEach((t, n) => {
			if (!t.deleted) {
				let r = t.content.getContent()[t.length - 1];
				e[n] = r instanceof Uf ? r.toJSON() : r;
			}
		}), e;
	}
	get size() {
		return [...sp(this)].length;
	}
	keys() {
		return ed(sp(this), (e) => e[0]);
	}
	values() {
		return ed(sp(this), (e) => e[1].content.getContent()[e[1].length - 1]);
	}
	entries() {
		return ed(sp(this), (e) => [e[0], e[1].content.getContent()[e[1].length - 1]]);
	}
	forEach(e) {
		this.doc ?? Nf(), this._map.forEach((t, n) => {
			t.deleted || e(t.content.getContent()[t.length - 1], n, this);
		});
	}
	[Symbol.iterator]() {
		return this.entries();
	}
	delete(e) {
		this.doc === null ? this._prelimContent.delete(e) : B(this.doc, (t) => {
			tp(t, this, e);
		});
	}
	set(e, t) {
		return this.doc === null ? this._prelimContent.set(e, t) : B(this.doc, (n) => {
			np(n, this, e, t);
		}), t;
	}
	get(e) {
		return rp(this, e);
	}
	has(e) {
		return ap(this, e);
	}
	clear() {
		this.doc === null ? this._prelimContent.clear() : B(this.doc, (e) => {
			this.forEach(function(t, n, r) {
				tp(e, r, n);
			});
		});
	}
	_write(e) {
		e.writeTypeRef(dm);
	}
}, pp = (e) => new fp(), mp = (e, t) => e === t || typeof e == "object" && typeof t == "object" && e && t && Qc(e, t), hp = class {
	constructor(e, t, n, r) {
		this.left = e, this.right = t, this.index = n, this.currentAttributes = r;
	}
	forward() {
		switch (this.right === null && pc(), this.right.content.constructor) {
			case em:
				this.right.deleted || yp(this.currentAttributes, this.right.content);
				break;
			default: this.right.deleted || (this.index += this.right.length);
		}
		this.left = this.right, this.right = this.right.right;
	}
}, gp = (e, t, n) => {
	for (; t.right !== null && n > 0;) {
		switch (t.right.content.constructor) {
			case em:
				t.right.deleted || yp(t.currentAttributes, t.right.content);
				break;
			default: t.right.deleted || (n < t.right.length && nf(e, z(t.right.id.client, t.right.id.clock + n)), t.index += t.right.length, n -= t.right.length);
		}
		t.left = t.right, t.right = t.right.right;
	}
	return t;
}, _p = (e, t, n, r) => {
	let i = /* @__PURE__ */ new Map(), a = r ? Bf(t, n) : null;
	return a ? gp(e, new hp(a.p.left, a.p, a.index, i), n - a.index) : gp(e, new hp(null, t._start, 0, i), n);
}, vp = (e, t, n, r) => {
	for (; n.right !== null && (n.right.deleted === !0 || n.right.content.constructor === em && mp(r.get(n.right.content.key), n.right.content.value));) n.right.deleted || r.delete(n.right.content.key), n.forward();
	let i = e.doc, a = i.clientID;
	r.forEach((r, o) => {
		let s = n.left, c = n.right, l = new wm(z(a, Zd(i.store, a)), s, s && s.lastId, c, c && c.id, t, null, new em(o, r));
		l.integrate(e, 0), n.right = l, n.forward();
	});
}, yp = (e, t) => {
	let { key: n, value: r } = t;
	r === null ? e.delete(n) : e.set(n, r);
}, bp = (e, t) => {
	for (; e.right !== null && (e.right.deleted || e.right.content.constructor === em && mp(t[e.right.content.key] ?? null, e.right.content.value));) e.forward();
}, xp = (e, t, n, r) => {
	let i = e.doc, a = i.clientID, o = /* @__PURE__ */ new Map();
	for (let s in r) {
		let c = r[s], l = n.currentAttributes.get(s) ?? null;
		if (!mp(l, c)) {
			o.set(s, l);
			let { left: r, right: u } = n;
			n.right = new wm(z(a, Zd(i.store, a)), r, r && r.lastId, u, u && u.id, t, null, new em(s, c)), n.right.integrate(e, 0), n.forward();
		}
	}
	return o;
}, Sp = (e, t, n, r, i) => {
	n.currentAttributes.forEach((e, t) => {
		i[t] === void 0 && (i[t] = null);
	});
	let a = e.doc, o = a.clientID;
	bp(n, i);
	let s = xp(e, t, n, i), c = r.constructor === String ? new sm(r) : r instanceof Uf ? new _m(r) : new Qp(r), { left: l, right: u, index: d } = n;
	t._searchMarker && Vf(t._searchMarker, n.index, c.getLength()), u = new wm(z(o, Zd(a.store, o)), l, l && l.lastId, u, u && u.id, t, null, c), u.integrate(e, 0), n.right = u, n.index = d, n.forward(), vp(e, t, n, s);
}, Cp = (e, t, n, r, i) => {
	let a = e.doc, o = a.clientID;
	bp(n, i);
	let s = xp(e, t, n, i);
	iterationLoop: for (; n.right !== null && (r > 0 || s.size > 0 && (n.right.deleted || n.right.content.constructor === em));) {
		if (!n.right.deleted) switch (n.right.content.constructor) {
			case em: {
				let { key: t, value: a } = n.right.content, o = i[t];
				if (o !== void 0) {
					if (mp(o, a)) s.delete(t);
					else {
						if (r === 0) break iterationLoop;
						s.set(t, a);
					}
					n.right.delete(e);
				} else n.currentAttributes.set(t, a);
				break;
			}
			default: r < n.right.length && nf(e, z(n.right.id.client, n.right.id.clock + r)), r -= n.right.length;
		}
		n.forward();
	}
	if (r > 0) {
		let i = "";
		for (; r > 0; r--) i += "\n";
		n.right = new wm(z(o, Zd(a.store, o)), n.left, n.left && n.left.lastId, n.right, n.right && n.right.id, t, null, new sm(i)), n.right.integrate(e, 0), n.forward();
	}
	vp(e, t, n, s);
}, wp = (e, t, n, r, i) => {
	let a = t, o = as();
	for (; a && (!a.countable || a.deleted);) {
		if (!a.deleted && a.content.constructor === em) {
			let e = a.content;
			o.set(e.key, e);
		}
		a = a.right;
	}
	let s = 0, c = !1;
	for (; t !== a;) {
		if (n === t && (c = !0), !t.deleted) {
			let n = t.content;
			switch (n.constructor) {
				case em: {
					let { key: a, value: l } = n, u = r.get(a) ?? null;
					(o.get(a) !== n || u === l) && (t.delete(e), s++, !c && (i.get(a) ?? null) === l && u !== l && (u === null ? i.delete(a) : i.set(a, u))), !c && !t.deleted && yp(i, n);
					break;
				}
			}
		}
		t = t.right;
	}
	return s;
}, Tp = (e, t) => {
	for (; t && t.right && (t.right.deleted || !t.right.countable);) t = t.right;
	let n = /* @__PURE__ */ new Set();
	for (; t && (t.deleted || !t.countable);) {
		if (!t.deleted && t.content.constructor === em) {
			let r = t.content.key;
			n.has(r) ? t.delete(e) : n.add(r);
		}
		t = t.left;
	}
}, Ep = (e) => {
	let t = 0;
	return B(e.doc, (n) => {
		let r = e._start, i = e._start, a = as(), o = ss(a);
		for (; i;) {
			if (i.deleted === !1) switch (i.content.constructor) {
				case em:
					yp(o, i.content);
					break;
				default: t += wp(n, r, i, a, o), a = ss(o), r = i;
			}
			i = i.right;
		}
	}), t;
}, Dp = (e) => {
	let t = /* @__PURE__ */ new Set(), n = e.doc;
	for (let [r, i] of e.afterState.entries()) {
		let a = e.beforeState.get(r) || 0;
		i !== a && of(e, n.store.clients.get(r), a, i, (e) => {
			!e.deleted && e.content.constructor === em && e.constructor !== Wp && t.add(e.parent);
		});
	}
	B(n, (n) => {
		rd(e, e.deleteSet, (e) => {
			if (e instanceof Wp || !e.parent._hasFormatting || t.has(e.parent)) return;
			let r = e.parent;
			e.content.constructor === em ? t.add(r) : Tp(n, e);
		});
		for (let e of t) Ep(e);
	});
}, Op = (e, t, n) => {
	let r = n, i = ss(t.currentAttributes), a = t.right;
	for (; n > 0 && t.right !== null;) {
		if (t.right.deleted === !1) switch (t.right.content.constructor) {
			case _m:
			case Qp:
			case sm: n < t.right.length && nf(e, z(t.right.id.client, t.right.id.clock + n)), n -= t.right.length, t.right.delete(e);
		}
		t.forward();
	}
	a && wp(e, a, t.right, i, t.currentAttributes);
	let o = (t.left || t.right).parent;
	return o._searchMarker && Vf(o._searchMarker, t.index, -r + n), t;
}, kp = class extends jf {
	constructor(e, t, n) {
		super(e, t), this.childListChanged = !1, this.keysChanged = /* @__PURE__ */ new Set(), n.forEach((e) => {
			e === null ? this.childListChanged = !0 : this.keysChanged.add(e);
		});
	}
	get changes() {
		if (this._changes === null) {
			let e = {
				keys: this.keys,
				delta: this.delta,
				added: /* @__PURE__ */ new Set(),
				deleted: /* @__PURE__ */ new Set()
			};
			this._changes = e;
		}
		return this._changes;
	}
	get delta() {
		if (this._delta === null) {
			let e = this.target.doc, t = [];
			B(e, (e) => {
				let n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), i = this.target._start, a = null, o = {}, s = "", c = 0, l = 0, u = () => {
					if (a !== null) {
						let e = null;
						switch (a) {
							case "delete":
								l > 0 && (e = { delete: l }), l = 0;
								break;
							case "insert":
								(typeof s == "object" || s.length > 0) && (e = { insert: s }, n.size > 0 && (e.attributes = {}, n.forEach((t, n) => {
									t !== null && (e.attributes[n] = t);
								}))), s = "";
								break;
							case "retain": c > 0 && (e = { retain: c }, Yc(o) || (e.attributes = Gc({}, o))), c = 0;
						}
						e && t.push(e), a = null;
					}
				};
				for (; i !== null;) {
					switch (i.content.constructor) {
						case _m:
						case Qp:
							this.adds(i) ? this.deletes(i) || (u(), a = "insert", s = i.content.getContent()[0], u()) : this.deletes(i) ? (a !== "delete" && (u(), a = "delete"), l += 1) : i.deleted || (a !== "retain" && (u(), a = "retain"), c += 1);
							break;
						case sm:
							this.adds(i) ? this.deletes(i) || (a !== "insert" && (u(), a = "insert"), s += i.content.str) : this.deletes(i) ? (a !== "delete" && (u(), a = "delete"), l += i.length) : i.deleted || (a !== "retain" && (u(), a = "retain"), c += i.length);
							break;
						case em: {
							let { key: t, value: s } = i.content;
							if (this.adds(i)) this.deletes(i) || (mp(n.get(t) ?? null, s) ? s !== null && i.delete(e) : (a === "retain" && u(), mp(s, r.get(t) ?? null) ? delete o[t] : o[t] = s));
							else if (this.deletes(i)) {
								r.set(t, s);
								let e = n.get(t) ?? null;
								mp(e, s) || (a === "retain" && u(), o[t] = e);
							} else if (!i.deleted) {
								r.set(t, s);
								let n = o[t];
								n !== void 0 && (mp(n, s) ? n !== null && i.delete(e) : (a === "retain" && u(), s === null ? delete o[t] : o[t] = s));
							}
							i.deleted || (a === "insert" && u(), yp(n, i.content));
							break;
						}
					}
					i = i.right;
				}
				for (u(); t.length > 0;) {
					let e = t[t.length - 1];
					if (e.retain !== void 0 && e.attributes === void 0) t.pop();
					else break;
				}
			}), this._delta = t;
		}
		return this._delta;
	}
}, Ap = class e extends Uf {
	constructor(e) {
		super(), this._pending = e === void 0 ? [] : [() => this.insert(0, e)], this._searchMarker = [], this._hasFormatting = !1;
	}
	get length() {
		return this.doc ?? Nf(), this._length;
	}
	_integrate(e, t) {
		super._integrate(e, t);
		try {
			this._pending.forEach((e) => e());
		} catch (e) {
			console.error(e);
		}
		this._pending = null;
	}
	_copy() {
		return new e();
	}
	clone() {
		let t = new e();
		return t.applyDelta(this.toDelta()), t;
	}
	_callObserver(e, t) {
		super._callObserver(e, t);
		let n = new kp(this, e, t);
		Hf(this, e, n), !e.local && this._hasFormatting && (e._needFormattingCleanup = !0);
	}
	toString() {
		this.doc ?? Nf();
		let e = "", t = this._start;
		for (; t !== null;) !t.deleted && t.countable && t.content.constructor === sm && (e += t.content.str), t = t.right;
		return e;
	}
	toJSON() {
		return this.toString();
	}
	applyDelta(e, { sanitize: t = !0 } = {}) {
		this.doc === null ? this._pending.push(() => this.applyDelta(e)) : B(this.doc, (n) => {
			let r = new hp(null, this._start, 0, /* @__PURE__ */ new Map());
			for (let i = 0; i < e.length; i++) {
				let a = e[i];
				if (a.insert !== void 0) {
					let o = !t && typeof a.insert == "string" && i === e.length - 1 && r.right === null && a.insert.slice(-1) === "\n" ? a.insert.slice(0, -1) : a.insert;
					(typeof o != "string" || o.length > 0) && Sp(n, this, r, o, a.attributes || {});
				} else a.retain === void 0 ? a.delete !== void 0 && Op(n, r, a.delete) : Cp(n, this, r, a.retain, a.attributes || {});
			}
		});
	}
	toDelta(e, t, n) {
		this.doc ?? Nf();
		let r = [], i = /* @__PURE__ */ new Map(), a = this.doc, o = "", s = this._start;
		function c() {
			if (o.length > 0) {
				let e = {}, t = !1;
				i.forEach((n, r) => {
					t = !0, e[r] = n;
				});
				let n = { insert: o };
				t && (n.attributes = e), r.push(n), o = "";
			}
		}
		let l = () => {
			for (; s !== null;) {
				if (qd(s, e) || t !== void 0 && qd(s, t)) switch (s.content.constructor) {
					case sm: {
						let r = i.get("ychange");
						e !== void 0 && !qd(s, e) ? (r === void 0 || r.user !== s.id.client || r.type !== "removed") && (c(), i.set("ychange", n ? n("removed", s.id) : { type: "removed" })) : t !== void 0 && !qd(s, t) ? (r === void 0 || r.user !== s.id.client || r.type !== "added") && (c(), i.set("ychange", n ? n("added", s.id) : { type: "added" })) : r !== void 0 && (c(), i.delete("ychange")), o += s.content.str;
						break;
					}
					case _m:
					case Qp: {
						c();
						let e = { insert: s.content.getContent()[0] };
						if (i.size > 0) {
							let t = {};
							e.attributes = t, i.forEach((e, n) => {
								t[n] = e;
							});
						}
						r.push(e);
						break;
					}
					case em: qd(s, e) && (c(), yp(i, s.content));
				}
				s = s.right;
			}
			c();
		};
		return e || t ? B(a, (n) => {
			e && Jd(n, e), t && Jd(n, t), l();
		}, "cleanup") : l(), r;
	}
	insert(e, t, n) {
		if (t.length <= 0) return;
		let r = this.doc;
		r === null ? this._pending.push(() => this.insert(e, t, n)) : B(r, (r) => {
			let i = _p(r, this, e, !n);
			n || (n = {}, i.currentAttributes.forEach((e, t) => {
				n[t] = e;
			})), Sp(r, this, i, t, n);
		});
	}
	insertEmbed(e, t, n) {
		let r = this.doc;
		r === null ? this._pending.push(() => this.insertEmbed(e, t, n || {})) : B(r, (r) => {
			let i = _p(r, this, e, !n);
			Sp(r, this, i, t, n || {});
		});
	}
	delete(e, t) {
		if (t === 0) return;
		let n = this.doc;
		n === null ? this._pending.push(() => this.delete(e, t)) : B(n, (n) => {
			Op(n, _p(n, this, e, !0), t);
		});
	}
	format(e, t, n) {
		if (t === 0) return;
		let r = this.doc;
		r === null ? this._pending.push(() => this.format(e, t, n)) : B(r, (r) => {
			let i = _p(r, this, e, !1);
			i.right !== null && Cp(r, this, i, t, n);
		});
	}
	removeAttribute(e) {
		this.doc === null ? this._pending.push(() => this.removeAttribute(e)) : B(this.doc, (t) => {
			tp(t, this, e);
		});
	}
	setAttribute(e, t) {
		this.doc === null ? this._pending.push(() => this.setAttribute(e, t)) : B(this.doc, (n) => {
			np(n, this, e, t);
		});
	}
	getAttribute(e) {
		return rp(this, e);
	}
	getAttributes() {
		return ip(this);
	}
	_write(e) {
		e.writeTypeRef(fm);
	}
}, jp = (e) => new Ap(), Mp = class {
	constructor(e, t = () => !0) {
		this._filter = t, this._root = e, this._currentNode = e._start, this._firstCall = !0, e.doc ?? Nf();
	}
	[Symbol.iterator]() {
		return this;
	}
	next() {
		let e = this._currentNode, t = e && e.content && e.content.type;
		if (e !== null && (!this._firstCall || e.deleted || !this._filter(t))) do
			if (t = e.content.type, !e.deleted && (t.constructor === Fp || t.constructor === Np) && t._start !== null) e = t._start;
			else for (; e !== null;) {
				let t = e.next;
				if (t !== null) {
					e = t;
					break;
				}
				e = e.parent === this._root ? null : e.parent._item;
			}
		while (e !== null && (e.deleted || !this._filter(e.content.type)));
		return this._firstCall = !1, e === null ? {
			value: void 0,
			done: !0
		} : (this._currentNode = e, {
			value: e.content.type,
			done: !1
		});
	}
}, Np = class e extends Uf {
	constructor() {
		super(), this._prelimContent = [];
	}
	get firstChild() {
		let e = this._first;
		return e ? e.content.getContent()[0] : null;
	}
	_integrate(e, t) {
		super._integrate(e, t), this.insert(0, this._prelimContent), this._prelimContent = null;
	}
	_copy() {
		return new e();
	}
	clone() {
		let t = new e();
		return t.insert(0, this.toArray().map((e) => e instanceof Uf ? e.clone() : e)), t;
	}
	get length() {
		return this.doc ?? Nf(), this._prelimContent === null ? this._length : this._prelimContent.length;
	}
	createTreeWalker(e) {
		return new Mp(this, e);
	}
	querySelector(e) {
		e = e.toUpperCase();
		let t = new Mp(this, (t) => t.nodeName && t.nodeName.toUpperCase() === e).next();
		return t.done ? null : t.value;
	}
	querySelectorAll(e) {
		return e = e.toUpperCase(), ms(new Mp(this, (t) => t.nodeName && t.nodeName.toUpperCase() === e));
	}
	_callObserver(e, t) {
		Hf(this, e, new Lp(this, t, e));
	}
	toString() {
		return qf(this, (e) => e.toString()).join("");
	}
	toJSON() {
		return this.toString();
	}
	toDOM(e = document, t = {}, n) {
		let r = e.createDocumentFragment();
		return n !== void 0 && n._createAssociation(r, this), Kf(this, (i) => {
			r.insertBefore(i.toDOM(e, t, n), null);
		}), r;
	}
	insert(e, t) {
		this.doc === null ? this._prelimContent.splice(e, 0, ...t) : B(this.doc, (n) => {
			Qf(n, this, e, t);
		});
	}
	insertAfter(e, t) {
		if (this.doc !== null) B(this.doc, (n) => {
			let r = e && e instanceof Uf ? e._item : e;
			Xf(n, this, r, t);
		});
		else {
			let n = this._prelimContent, r = e === null ? 0 : n.findIndex((t) => t === e) + 1;
			if (r === 0 && e !== null) throw dc("Reference item not found");
			n.splice(r, 0, ...t);
		}
	}
	delete(e, t = 1) {
		this.doc === null ? this._prelimContent.splice(e, t) : B(this.doc, (n) => {
			ep(n, this, e, t);
		});
	}
	toArray() {
		return Gf(this);
	}
	push(e) {
		this.insert(this.length, e);
	}
	unshift(e) {
		this.insert(0, e);
	}
	get(e) {
		return Yf(this, e);
	}
	slice(e = 0, t = this.length) {
		return Wf(this, e, t);
	}
	forEach(e) {
		Kf(this, e);
	}
	_write(e) {
		e.writeTypeRef(mm);
	}
}, Pp = (e) => new Np(), Fp = class e extends Np {
	constructor(e = "UNDEFINED") {
		super(), this.nodeName = e, this._prelimAttrs = /* @__PURE__ */ new Map();
	}
	get nextSibling() {
		let e = this._item ? this._item.next : null;
		return e ? e.content.type : null;
	}
	get prevSibling() {
		let e = this._item ? this._item.prev : null;
		return e ? e.content.type : null;
	}
	_integrate(e, t) {
		super._integrate(e, t), this._prelimAttrs.forEach((e, t) => {
			this.setAttribute(t, e);
		}), this._prelimAttrs = null;
	}
	_copy() {
		return new e(this.nodeName);
	}
	clone() {
		let t = new e(this.nodeName);
		return qc(this.getAttributes(), (e, n) => {
			t.setAttribute(n, e);
		}), t.insert(0, this.toArray().map((e) => e instanceof Uf ? e.clone() : e)), t;
	}
	toString() {
		let e = this.getAttributes(), t = [], n = [];
		for (let t in e) n.push(t);
		n.sort();
		let r = n.length;
		for (let i = 0; i < r; i++) {
			let r = n[i];
			t.push(r + "=\"" + e[r] + "\"");
		}
		let i = this.nodeName.toLocaleLowerCase();
		return `<${i}${t.length > 0 ? " " + t.join(" ") : ""}>${super.toString()}</${i}>`;
	}
	removeAttribute(e) {
		this.doc === null ? this._prelimAttrs.delete(e) : B(this.doc, (t) => {
			tp(t, this, e);
		});
	}
	setAttribute(e, t) {
		this.doc === null ? this._prelimAttrs.set(e, t) : B(this.doc, (n) => {
			np(n, this, e, t);
		});
	}
	getAttribute(e) {
		return rp(this, e);
	}
	hasAttribute(e) {
		return ap(this, e);
	}
	getAttributes(e) {
		return e ? op(this, e) : ip(this);
	}
	toDOM(e = document, t = {}, n) {
		let r = e.createElement(this.nodeName), i = this.getAttributes();
		for (let e in i) {
			let t = i[e];
			typeof t == "string" && r.setAttribute(e, t);
		}
		return Kf(this, (i) => {
			r.appendChild(i.toDOM(e, t, n));
		}), n !== void 0 && n._createAssociation(r, this), r;
	}
	_write(e) {
		e.writeTypeRef(pm), e.writeKey(this.nodeName);
	}
}, Ip = (e) => new Fp(e.readKey()), Lp = class extends jf {
	constructor(e, t, n) {
		super(e, n), this.childListChanged = !1, this.attributesChanged = /* @__PURE__ */ new Set(), t.forEach((e) => {
			e === null ? this.childListChanged = !0 : this.attributesChanged.add(e);
		});
	}
}, Rp = class e extends fp {
	constructor(e) {
		super(), this.hookName = e;
	}
	_copy() {
		return new e(this.hookName);
	}
	clone() {
		let t = new e(this.hookName);
		return this.forEach((e, n) => {
			t.set(n, e);
		}), t;
	}
	toDOM(e = document, t = {}, n) {
		let r = t[this.hookName], i;
		return i = r === void 0 ? document.createElement(this.hookName) : r.createDom(this), i.setAttribute("data-yjs-hook", this.hookName), n !== void 0 && n._createAssociation(i, this), i;
	}
	_write(e) {
		e.writeTypeRef(hm), e.writeKey(this.hookName);
	}
}, zp = (e) => new Rp(e.readKey()), Bp = class e extends Ap {
	get nextSibling() {
		let e = this._item ? this._item.next : null;
		return e ? e.content.type : null;
	}
	get prevSibling() {
		let e = this._item ? this._item.prev : null;
		return e ? e.content.type : null;
	}
	_copy() {
		return new e();
	}
	clone() {
		let t = new e();
		return t.applyDelta(this.toDelta()), t;
	}
	toDOM(e = document, t, n) {
		let r = e.createTextNode(this.toString());
		return n !== void 0 && n._createAssociation(r, this), r;
	}
	toString() {
		return this.toDelta().map((e) => {
			let t = [];
			for (let n in e.attributes) {
				let r = [];
				for (let t in e.attributes[n]) r.push({
					key: t,
					value: e.attributes[n][t]
				});
				r.sort((e, t) => e.key < t.key ? -1 : 1), t.push({
					nodeName: n,
					attrs: r
				});
			}
			t.sort((e, t) => e.nodeName < t.nodeName ? -1 : 1);
			let n = "";
			for (let e = 0; e < t.length; e++) {
				let r = t[e];
				n += `<${r.nodeName}`;
				for (let e = 0; e < r.attrs.length; e++) {
					let t = r.attrs[e];
					n += ` ${t.key}="${t.value}"`;
				}
				n += ">";
			}
			n += e.insert;
			for (let e = t.length - 1; e >= 0; e--) n += `</${t[e].nodeName}>`;
			return n;
		}).join("");
	}
	toJSON() {
		return this.toString();
	}
	_write(e) {
		e.writeTypeRef(gm);
	}
}, Vp = (e) => new Bp(), Hp = class {
	constructor(e, t) {
		this.id = e, this.length = t;
	}
	get deleted() {
		throw fc();
	}
	mergeWith(e) {
		return !1;
	}
	write(e, t, n) {
		throw fc();
	}
	integrate(e, t) {
		throw fc();
	}
}, Up = 0, Wp = class extends Hp {
	get deleted() {
		return !0;
	}
	delete() {}
	mergeWith(e) {
		return this.constructor === e.constructor && (this.length += e.length, !0);
	}
	integrate(e, t) {
		t > 0 && (this.id.clock += t, this.length -= t), Qd(e.doc.store, this);
	}
	write(e, t) {
		e.writeInfo(Up), e.writeLen(this.length - t);
	}
	getMissing(e, t) {
		return null;
	}
}, Gp = class e {
	constructor(e) {
		this.content = e;
	}
	getLength() {
		return 1;
	}
	getContent() {
		return [this.content];
	}
	isCountable() {
		return !0;
	}
	copy() {
		return new e(this.content);
	}
	splice(e) {
		throw fc();
	}
	mergeWith(e) {
		return !1;
	}
	integrate(e, t) {}
	delete(e) {}
	gc(e) {}
	write(e, t) {
		e.writeBuf(this.content);
	}
	getRef() {
		return 3;
	}
}, Kp = (e) => new Gp(e.readBuf()), qp = class e {
	constructor(e) {
		this.len = e;
	}
	getLength() {
		return this.len;
	}
	getContent() {
		return [];
	}
	isCountable() {
		return !1;
	}
	copy() {
		return new e(this.len);
	}
	splice(t) {
		let n = new e(this.len - t);
		return this.len = t, n;
	}
	mergeWith(e) {
		return this.len += e.len, !0;
	}
	integrate(e, t) {
		cd(e.deleteSet, t.id.client, t.id.clock, this.len), t.markDeleted();
	}
	delete(e) {}
	gc(e) {}
	write(e, t) {
		e.writeLen(this.len - t);
	}
	getRef() {
		return 1;
	}
}, Jp = (e) => new qp(e.readLen()), Yp = (e, t) => new hd({
	guid: e,
	...t,
	shouldLoad: t.shouldLoad || t.autoLoad || !1
}), Xp = class e {
	constructor(e) {
		e._item && console.error("This document was already integrated as a sub-document. You should create a second instance instead with the same guid."), this.doc = e;
		let t = {};
		this.opts = t, e.gc || (t.gc = !1), e.autoLoad && (t.autoLoad = !0), e.meta !== null && (t.meta = e.meta);
	}
	getLength() {
		return 1;
	}
	getContent() {
		return [this.doc];
	}
	isCountable() {
		return !0;
	}
	copy() {
		return new e(Yp(this.doc.guid, this.opts));
	}
	splice(e) {
		throw fc();
	}
	mergeWith(e) {
		return !1;
	}
	integrate(e, t) {
		this.doc._item = t, e.subdocsAdded.add(this.doc), this.doc.shouldLoad && e.subdocsLoaded.add(this.doc);
	}
	delete(e) {
		e.subdocsAdded.has(this.doc) ? e.subdocsAdded.delete(this.doc) : e.subdocsRemoved.add(this.doc);
	}
	gc(e) {}
	write(e, t) {
		e.writeString(this.doc.guid), e.writeAny(this.opts);
	}
	getRef() {
		return 9;
	}
}, Zp = (e) => new Xp(Yp(e.readString(), e.readAny())), Qp = class e {
	constructor(e) {
		this.embed = e;
	}
	getLength() {
		return 1;
	}
	getContent() {
		return [this.embed];
	}
	isCountable() {
		return !0;
	}
	copy() {
		return new e(this.embed);
	}
	splice(e) {
		throw fc();
	}
	mergeWith(e) {
		return !1;
	}
	integrate(e, t) {}
	delete(e) {}
	gc(e) {}
	write(e, t) {
		e.writeJSON(this.embed);
	}
	getRef() {
		return 5;
	}
}, $p = (e) => new Qp(e.readJSON()), em = class e {
	constructor(e, t) {
		this.key = e, this.value = t;
	}
	getLength() {
		return 1;
	}
	getContent() {
		return [];
	}
	isCountable() {
		return !1;
	}
	copy() {
		return new e(this.key, this.value);
	}
	splice(e) {
		throw fc();
	}
	mergeWith(e) {
		return !1;
	}
	integrate(e, t) {
		let n = t.parent;
		n._searchMarker = null, n._hasFormatting = !0;
	}
	delete(e) {}
	gc(e) {}
	write(e, t) {
		e.writeKey(this.key), e.writeJSON(this.value);
	}
	getRef() {
		return 6;
	}
}, tm = (e) => new em(e.readKey(), e.readJSON()), nm = class e {
	constructor(e) {
		this.arr = e;
	}
	getLength() {
		return this.arr.length;
	}
	getContent() {
		return this.arr;
	}
	isCountable() {
		return !0;
	}
	copy() {
		return new e(this.arr);
	}
	splice(t) {
		let n = new e(this.arr.slice(t));
		return this.arr = this.arr.slice(0, t), n;
	}
	mergeWith(e) {
		return this.arr = this.arr.concat(e.arr), !0;
	}
	integrate(e, t) {}
	delete(e) {}
	gc(e) {}
	write(e, t) {
		let n = this.arr.length;
		e.writeLen(n - t);
		for (let r = t; r < n; r++) {
			let t = this.arr[r];
			e.writeString(t === void 0 ? "undefined" : JSON.stringify(t));
		}
	}
	getRef() {
		return 2;
	}
}, rm = (e) => {
	let t = e.readLen(), n = [];
	for (let r = 0; r < t; r++) {
		let t = e.readString();
		t === "undefined" ? n.push(void 0) : n.push(JSON.parse(t));
	}
	return new nm(n);
}, im = ul("node_env") === "development", am = class e {
	constructor(e) {
		this.arr = e, im && el(e);
	}
	getLength() {
		return this.arr.length;
	}
	getContent() {
		return this.arr;
	}
	isCountable() {
		return !0;
	}
	copy() {
		return new e(this.arr);
	}
	splice(t) {
		let n = new e(this.arr.slice(t));
		return this.arr = this.arr.slice(0, t), n;
	}
	mergeWith(e) {
		return this.arr = this.arr.concat(e.arr), !0;
	}
	integrate(e, t) {}
	delete(e) {}
	gc(e) {}
	write(e, t) {
		let n = this.arr.length;
		e.writeLen(n - t);
		for (let r = t; r < n; r++) {
			let t = this.arr[r];
			e.writeAny(t);
		}
	}
	getRef() {
		return 8;
	}
}, om = (e) => {
	let t = e.readLen(), n = [];
	for (let r = 0; r < t; r++) n.push(e.readAny());
	return new am(n);
}, sm = class e {
	constructor(e) {
		this.str = e;
	}
	getLength() {
		return this.str.length;
	}
	getContent() {
		return this.str.split("");
	}
	isCountable() {
		return !0;
	}
	copy() {
		return new e(this.str);
	}
	splice(t) {
		let n = new e(this.str.slice(t));
		this.str = this.str.slice(0, t);
		let r = this.str.charCodeAt(t - 1);
		return r >= 55296 && r <= 56319 && (this.str = this.str.slice(0, t - 1) + "�", n.str = "�" + n.str.slice(1)), n;
	}
	mergeWith(e) {
		return this.str += e.str, !0;
	}
	integrate(e, t) {}
	delete(e) {}
	gc(e) {}
	write(e, t) {
		e.writeString(t === 0 ? this.str : this.str.slice(t));
	}
	getRef() {
		return 4;
	}
}, cm = (e) => new sm(e.readString()), lm = [
	up,
	pp,
	jp,
	Ip,
	Pp,
	zp,
	Vp
], um = 0, dm = 1, fm = 2, pm = 3, mm = 4, hm = 5, gm = 6, _m = class e {
	constructor(e) {
		this.type = e;
	}
	getLength() {
		return 1;
	}
	getContent() {
		return [this.type];
	}
	isCountable() {
		return !0;
	}
	copy() {
		return new e(this.type._copy());
	}
	splice(e) {
		throw fc();
	}
	mergeWith(e) {
		return !1;
	}
	integrate(e, t) {
		this.type._integrate(e.doc, t);
	}
	delete(e) {
		let t = this.type._start;
		for (; t !== null;) t.deleted ? t.id.clock < (e.beforeState.get(t.id.client) || 0) && e._mergeStructs.push(t) : t.delete(e), t = t.right;
		this.type._map.forEach((t) => {
			t.deleted ? t.id.clock < (e.beforeState.get(t.id.client) || 0) && e._mergeStructs.push(t) : t.delete(e);
		}), e.changed.delete(this.type);
	}
	gc(e) {
		let t = this.type._start;
		for (; t !== null;) t.gc(e, !0), t = t.right;
		this.type._start = null, this.type._map.forEach((t) => {
			for (; t !== null;) t.gc(e, !0), t = t.left;
		}), this.type._map = /* @__PURE__ */ new Map();
	}
	write(e, t) {
		this.type._write(e);
	}
	getRef() {
		return 7;
	}
}, vm = (e) => new _m(lm[e.readTypeRef()](e)), ym = (e, t) => {
	let n = t, r = 0, i;
	do
		r > 0 && (n = z(n.client, n.clock + r)), i = ef(e, n), r = n.clock - i.id.clock, n = i.redone;
	while (n !== null && i instanceof wm);
	return {
		item: i,
		diff: r
	};
}, bm = (e, t) => {
	for (; e !== null && e.keep !== t;) e.keep = t, e = e.parent._item;
}, xm = (e, t, n) => {
	let { client: r, clock: i } = t.id, a = new wm(z(r, i + n), t, z(r, i + n - 1), t.right, t.rightOrigin, t.parent, t.parentSub, t.content.splice(n));
	return t.deleted && a.markDeleted(), t.keep && (a.keep = !0), t.redone !== null && (a.redone = z(t.redone.client, t.redone.clock + n)), t.right = a, a.right !== null && (a.right.left = a), e._mergeStructs.push(a), a.parentSub !== null && a.right === null && a.parent._map.set(a.parentSub, a), t.length = n, a;
}, Sm = (e, t) => gs(e, (e) => ad(e.deletions, t)), Cm = (e, t, n, r, i, a) => {
	let o = e.doc, s = o.store, c = o.clientID, l = t.redone;
	if (l !== null) return nf(e, l);
	let u = t.parent._item, d = null, f;
	if (u !== null && u.deleted === !0) {
		if (u.redone === null && (!n.has(u) || Cm(e, u, n, r, i, a) === null)) return null;
		for (; u.redone !== null;) u = nf(e, u.redone);
	}
	let p = u === null ? t.parent : u.content.type;
	if (t.parentSub === null) {
		for (d = t.left, f = t; d !== null;) {
			let t = d;
			for (; t !== null && t.parent._item !== u;) t = t.redone === null ? null : nf(e, t.redone);
			if (t !== null && t.parent._item === u) {
				d = t;
				break;
			}
			d = d.left;
		}
		for (; f !== null;) {
			let t = f;
			for (; t !== null && t.parent._item !== u;) t = t.redone === null ? null : nf(e, t.redone);
			if (t !== null && t.parent._item === u) {
				f = t;
				break;
			}
			f = f.right;
		}
	} else {
		if (f = null, t.right && !i) {
			for (d = t; d !== null && d.right !== null && (d.right.redone || ad(r, d.right.id) || Sm(a.undoStack, d.right.id) || Sm(a.redoStack, d.right.id));) for (d = d.right; d.redone;) d = nf(e, d.redone);
			if (d && d.right !== null) return null;
		} else d = p._map.get(t.parentSub) || null;
		d !== null && d.parent._item !== u && (d = p._map.get(t.parentSub) || null);
	}
	let m = z(c, Zd(s, c)), h = new wm(m, d, d && d.lastId, f, f && f.id, p, t.parentSub, t.content.copy());
	return t.redone = m, bm(h, !0), h.integrate(e, 0), h;
}, wm = class e extends Hp {
	constructor(e, t, n, r, i, a, o, s) {
		super(e, s.getLength()), this.origin = n, this.left = t, this.right = r, this.rightOrigin = i, this.parent = a, this.parentSub = o, this.redone = null, this.content = s, this.info = this.content.isCountable() ? 2 : 0;
	}
	set marker(e) {
		(this.info & 8) > 0 !== e && (this.info ^= 8);
	}
	get marker() {
		return (this.info & 8) > 0;
	}
	get keep() {
		return (this.info & 1) > 0;
	}
	set keep(e) {
		this.keep !== e && (this.info ^= 1);
	}
	get countable() {
		return (this.info & 2) > 0;
	}
	get deleted() {
		return (this.info & 4) > 0;
	}
	set deleted(e) {
		this.deleted !== e && (this.info ^= 4);
	}
	markDeleted() {
		this.info |= 4;
	}
	getMissing(t, n) {
		if (this.origin && this.origin.client !== this.id.client && this.origin.clock >= Zd(n, this.origin.client)) return this.origin.client;
		if (this.rightOrigin && this.rightOrigin.client !== this.id.client && this.rightOrigin.clock >= Zd(n, this.rightOrigin.client)) return this.rightOrigin.client;
		if (this.parent && this.parent.constructor === Hd && this.id.client !== this.parent.client && this.parent.clock >= Zd(n, this.parent.client)) return this.parent.client;
		if (this.origin &&= (this.left = rf(t, n, this.origin), this.left.lastId), this.rightOrigin &&= (this.right = nf(t, this.rightOrigin), this.right.id), this.left && this.left.constructor === Wp || this.right && this.right.constructor === Wp) this.parent = null;
		else if (!this.parent) this.left && this.left.constructor === e ? (this.parent = this.left.parent, this.parentSub = this.left.parentSub) : this.right && this.right.constructor === e && (this.parent = this.right.parent, this.parentSub = this.right.parentSub);
		else if (this.parent.constructor === Hd) {
			let e = ef(n, this.parent);
			this.parent = e.constructor === Wp ? null : e.content.type;
		}
		return null;
	}
	integrate(e, t) {
		if (t > 0 && (this.id.clock += t, this.left = rf(e, e.doc.store, z(this.id.client, this.id.clock - 1)), this.origin = this.left.lastId, this.content = this.content.splice(t), this.length -= t), this.parent) {
			if (!this.left && (!this.right || this.right.left !== null) || this.left && this.left.right !== this.right) {
				let t = this.left, n;
				if (t !== null) n = t.right;
				else if (this.parentSub !== null) for (n = this.parent._map.get(this.parentSub) || null; n !== null && n.left !== null;) n = n.left;
				else n = this.parent._start;
				let r = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set();
				for (; n !== null && n !== this.right;) {
					if (i.add(n), r.add(n), Ud(this.origin, n.origin)) {
						if (n.id.client < this.id.client) t = n, r.clear();
						else if (Ud(this.rightOrigin, n.rightOrigin)) break;
					} else if (n.origin !== null && i.has(ef(e.doc.store, n.origin))) r.has(ef(e.doc.store, n.origin)) || (t = n, r.clear());
					else break;
					n = n.right;
				}
				this.left = t;
			}
			if (this.left !== null) {
				let e = this.left.right;
				this.right = e, this.left.right = this;
			} else {
				let e;
				if (this.parentSub !== null) for (e = this.parent._map.get(this.parentSub) || null; e !== null && e.left !== null;) e = e.left;
				else e = this.parent._start, this.parent._start = this;
				this.right = e;
			}
			this.right === null ? this.parentSub !== null && (this.parent._map.set(this.parentSub, this), this.left !== null && this.left.delete(e)) : this.right.left = this, this.parentSub === null && this.countable && !this.deleted && (this.parent._length += this.length), Qd(e.doc.store, this), this.content.integrate(e, this), lf(e, this.parent, this.parentSub), (this.parent._item !== null && this.parent._item.deleted || this.parentSub !== null && this.right !== null) && this.delete(e);
		} else new Wp(this.id, this.length).integrate(e, 0);
	}
	get next() {
		let e = this.right;
		for (; e !== null && e.deleted;) e = e.right;
		return e;
	}
	get prev() {
		let e = this.left;
		for (; e !== null && e.deleted;) e = e.left;
		return e;
	}
	get lastId() {
		return this.length === 1 ? this.id : z(this.id.client, this.id.clock + this.length - 1);
	}
	mergeWith(e) {
		if (this.constructor === e.constructor && Ud(e.origin, this.lastId) && this.right === e && Ud(this.rightOrigin, e.rightOrigin) && this.id.client === e.id.client && this.id.clock + this.length === e.id.clock && this.deleted === e.deleted && this.redone === null && e.redone === null && this.content.constructor === e.content.constructor && this.content.mergeWith(e.content)) {
			let t = this.parent._searchMarker;
			return t && t.forEach((t) => {
				t.p === e && (t.p = this, !this.deleted && this.countable && (t.index -= this.length));
			}), e.keep && (this.keep = !0), this.right = e.right, this.right !== null && (this.right.left = this), this.length += e.length, !0;
		}
		return !1;
	}
	delete(e) {
		if (!this.deleted) {
			let t = this.parent;
			this.countable && this.parentSub === null && (t._length -= this.length), this.markDeleted(), cd(e.deleteSet, this.id.client, this.id.clock, this.length), lf(e, t, this.parentSub), this.content.delete(e);
		}
	}
	gc(e, t) {
		if (!this.deleted) throw pc();
		this.content.gc(e), t ? af(e, this, new Wp(this.id, this.length)) : this.content = new qp(this.length);
	}
	write(e, t) {
		let n = t > 0 ? z(this.id.client, this.id.clock + t - 1) : this.origin, r = this.rightOrigin, i = this.parentSub, a = this.content.getRef() & 31 | (n === null ? 0 : 128) | (r === null ? 0 : 64) | (i === null ? 0 : 32);
		if (e.writeInfo(a), n !== null && e.writeLeftID(n), r !== null && e.writeRightID(r), n === null && r === null) {
			let t = this.parent;
			if (t._item !== void 0) {
				let n = t._item;
				if (n === null) {
					let n = Wd(t);
					e.writeParentInfo(!0), e.writeString(n);
				} else e.writeParentInfo(!1), e.writeLeftID(n.id);
			} else t.constructor === String ? (e.writeParentInfo(!0), e.writeString(t)) : t.constructor === Hd ? (e.writeParentInfo(!1), e.writeLeftID(t)) : pc();
			i !== null && e.writeString(i);
		}
		this.content.write(e, t);
	}
}, Tm = (e, t) => Em[t & 31](e), Em = [
	() => {
		pc();
	},
	Jp,
	rm,
	Kp,
	cm,
	$p,
	tm,
	vm,
	om,
	Zp,
	() => {
		pc();
	}
], Dm = 10, Om = class extends Hp {
	get deleted() {
		return !0;
	}
	delete() {}
	mergeWith(e) {
		return this.constructor === e.constructor && (this.length += e.length, !0);
	}
	integrate(e, t) {
		pc();
	}
	write(e, t) {
		e.writeInfo(Dm), L(e.restEncoder, this.length - t);
	}
	getMissing(e, t) {
		return null;
	}
}, km = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : {}, Am = "__ $YJS$ __";
km[Am] === !0 && console.error("Yjs was already imported. This breaks constructor checks and will lead to issues! - https://github.com/yjs/yjs/issues/438"), km[Am] = !0;
function jm() {
	return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}
function Mm(e) {
	let t = e && typeof e == "object" ? e : {};
	return {
		version: 1,
		created: Number.isFinite(t.created) ? t.created : Math.floor(Date.now() / 1e3),
		elements: Array.isArray(t.elements) ? t.elements.filter((e) => e && e.id && (e.type === "text" || e.type === "image")) : [],
		strokes: Array.isArray(t.strokes) ? t.strokes.filter((e) => e && e.id && Array.isArray(e.points) && e.points.length > 0) : []
	};
}
function Nm(e) {
	return Math.round(e * 10) / 10;
}
function Pm(e, t, n, r, i, a) {
	let o = i - n, s = a - r, c = o * o + s * s, l = c === 0 ? 0 : Math.max(0, Math.min(1, ((e - n) * o + (t - r) * s) / c));
	return Math.hypot(e - (n + l * o), t - (r + l * s));
}
function Fm(e, t, n, r) {
	let i = r + e.size / 2, a = e.points;
	if (a.length === 1) return Math.hypot(a[0][0] - t, a[0][1] - n) <= i;
	for (let e = 1; e < a.length; e++) if (Pm(t, n, a[e - 1][0], a[e - 1][1], a[e][0], a[e][1]) <= i) return !0;
	return !1;
}
function Im(e, t, n, r) {
	return e.filter((e) => !Fm(e, t, n, r));
}
function Lm(e, t, n) {
	let r = !1;
	for (let i = 0, a = n.length - 1; i < n.length; a = i++) {
		let [o, s] = n[i], [c, l] = n[a];
		s > t != l > t && e < (c - o) * (t - s) / (l - s) + o && (r = !r);
	}
	return r;
}
function Rm(e) {
	let t = e.size / 2, n = Infinity, r = Infinity, i = -Infinity, a = -Infinity;
	for (let [t, o] of e.points) n = Math.min(n, t), r = Math.min(r, o), i = Math.max(i, t), a = Math.max(a, o);
	return {
		minX: n - t,
		minY: r - t,
		maxX: i + t,
		maxY: a + t
	};
}
function zm(e, t = {}) {
	let n = e.type === "image" ? e.height : t[e.id] ?? 40;
	return {
		minX: e.x,
		minY: e.y,
		maxX: e.x + e.width,
		maxY: e.y + n
	};
}
function Bm(e) {
	return e.length === 0 ? null : e.reduce((e, t) => ({
		minX: Math.min(e.minX, t.minX),
		minY: Math.min(e.minY, t.minY),
		maxX: Math.max(e.maxX, t.maxX),
		maxY: Math.max(e.maxY, t.maxY)
	}));
}
function Vm(e, t, n = {}) {
	return t.length < 3 ? {
		strokeIds: [],
		elementIds: []
	} : {
		strokeIds: e.strokes.filter((e) => e.points.filter(([e, n]) => Lm(e, n, t)).length / e.points.length >= .5).map((e) => e.id),
		elementIds: e.elements.filter((e) => {
			let r = zm(e, n);
			return Lm((r.minX + r.maxX) / 2, (r.minY + r.maxY) / 2, t);
		}).map((e) => e.id)
	};
}
function Hm(e, t, n = {}) {
	let r = new Set(t.strokeIds), i = new Set(t.elementIds);
	return Bm([...e.strokes.filter((e) => r.has(e.id)).map(Rm), ...e.elements.filter((e) => i.has(e.id)).map((e) => zm(e, n))]);
}
function Um(e, t, n, r) {
	let i = new Set(t.strokeIds), a = new Set(t.elementIds);
	return {
		...e,
		strokes: e.strokes.map((e) => i.has(e.id) ? {
			...e,
			points: e.points.map(([e, t, i]) => [
				Nm(e + n),
				Nm(t + r),
				i
			])
		} : e),
		elements: e.elements.map((e) => a.has(e.id) ? {
			...e,
			x: Nm(e.x + n),
			y: Nm(e.y + r)
		} : e)
	};
}
function Wm(e, t) {
	let n = new Set(t.strokeIds), r = new Set(t.elementIds);
	return {
		...e,
		strokes: e.strokes.filter((e) => !n.has(e.id)),
		elements: e.elements.filter((e) => !r.has(e.id))
	};
}
function Gm(e) {
	return !e || !Array.isArray(e.content) || e.content.every((e) => e.type === "paragraph" && (!e.content || e.content.length === 0));
}
function Km(e) {
	if (!e) return [];
	if (Array.isArray(e.sections)) return e.sections.map((e) => ({
		section: e,
		group: null,
		student: null
	}));
	let t = [];
	for (let n of e.groups ?? []) {
		for (let e of n.sections ?? []) t.push({
			section: e,
			group: n,
			student: null
		});
		for (let e of n.students ?? []) for (let r of e.sections ?? []) t.push({
			section: r,
			group: n,
			student: e
		});
	}
	return t;
}
// src/collab.js
var qm = "remote", Jm = "local", Ym = "text", Xm = 1e3, Zm = 5e3, Qm = 15e3, $m = 300, eh = 120, th = [
	"#8764b8",
	"#0f7b83",
	"#c2572b",
	"#2f7d32",
	"#c43e6b",
	"#3b6fd4"
];
function nh(e) {
	let t = 0;
	for (let n of String(e)) t = t * 31 + n.charCodeAt(0) >>> 0;
	return th[t % th.length];
}
function rh(e) {
	let t = "";
	for (let n = 0; n < e.length; n += 32768) t += String.fromCharCode(...e.subarray(n, n + 32768));
	return btoa(t);
}
function ih(e) {
	return Uint8Array.from(atob(e), (e) => e.charCodeAt(0));
}
function ah(e, t) {
	return e === t || JSON.stringify(e) === JSON.stringify(t);
}
function oh(e, t) {
	return e.z - t.z || (e.id < t.id ? -1 : 1);
}
var sh = class {
	constructor() {
		this.doc = new hd(), this.meta = this.doc.getMap("meta"), this.elements = this.doc.getMap("elements"), this.strokes = this.doc.getMap("strokes"), this.strokeCache = /* @__PURE__ */ new Map(), this.undoManager = new _f([this.elements, this.strokes], {
			trackedOrigins: /* @__PURE__ */ new Set([Jm]),
			captureTimeout: 0
		});
	}
	destroy() {
		this.undoManager.destroy(), this.doc.destroy();
	}
	seed(e) {
		this.doc.transact(() => {
			this.meta.set("created", e.created), this.write(e, null);
		}, qm), this.undoManager.clear();
	}
	write(e, t = Jm) {
		let n = () => {
			this.writeElements((/* @__PURE__ */ k(e)).elements), this.writeStrokes((/* @__PURE__ */ k(e)).strokes);
		};
		t === null ? n() : this.doc.transact(n, t);
	}
	writeElements(e) {
		let t = /* @__PURE__ */ new Set(), n = this.nextZ(this.elements, (e) => e.get("z"));
		for (let r of e) {
			let e = /* @__PURE__ */ k(r);
			t.add(e.id);
			let i = this.elements.get(e.id);
			i || (i = new fp(), this.elements.set(e.id, i), i.set("z", n++));
			for (let [t, n] of Object.entries(e)) n !== void 0 && !ah(i.get(t), /* @__PURE__ */ k(n)) && i.set(t, n === null ? null : JSON.parse(JSON.stringify(n)));
			for (let t of [...i.keys()]) t !== "z" && e[t] === void 0 && i.delete(t);
		}
		for (let e of [...this.elements.keys()]) t.has(e) || this.elements.delete(e);
	}
	writeStrokes(e) {
		let t = /* @__PURE__ */ new Set(), n = this.nextZ(this.strokes, (e) => e.z);
		for (let r of e) {
			let e = /* @__PURE__ */ k(r);
			t.add(e.id);
			let i = this.strokeCache.get(e.id);
			if (i?.stroke === e && this.strokes.get(e.id) === i.stored) continue;
			let a = {
				...JSON.parse(JSON.stringify(e)),
				z: this.strokes.get(e.id)?.z ?? n++
			};
			this.strokes.set(e.id, a), this.strokeCache.set(e.id, {
				stored: a,
				stroke: e
			});
		}
		for (let e of [...this.strokes.keys()]) t.has(e) || (this.strokes.delete(e), this.strokeCache.delete(e));
	}
	nextZ(e, t) {
		let n = 0;
		for (let r of e.values()) n = Math.max(n, t(r) ?? 0);
		return n + 1;
	}
	read(e, t = null) {
		e.version = 1, e.created = this.meta.get("created") ?? e.created ?? Math.floor(Date.now() / 1e3);
		let n = new Map((e.elements ?? []).map((e) => [e.id, e]));
		e.elements = [...this.elements.entries()].map(([e, t]) => ({
			id: e,
			z: t.get("z") ?? 0,
			entry: t
		})).sort(oh).map(({ id: e, entry: r }) => {
			let i = n.get(e) ?? { id: e };
			for (let [a, o] of r.entries()) a === "z" || a === "doc" && e === t && n.has(e) || ah(/* @__PURE__ */ k(i[a]), o) || (i[a] = typeof o != "object" || !o ? o : JSON.parse(JSON.stringify(o)));
			for (let e of Object.keys(i)) r.has(e) || delete i[e];
			return i;
		});
		let r = /* @__PURE__ */ new Set();
		e.strokes = [...this.strokes.entries()].map(([e, t]) => ({
			id: e,
			z: t.z ?? 0,
			stored: t
		})).sort(oh).map(({ id: e, stored: t }) => {
			r.add(e);
			let n = this.strokeCache.get(e);
			if (n?.stored !== t) {
				let { z: r, ...i } = t;
				n = {
					stored: t,
					stroke: JSON.parse(JSON.stringify(i))
				}, this.strokeCache.set(e, n);
			}
			return n.stroke;
		});
		for (let e of [...this.strokeCache.keys()]) r.has(e) || this.strokeCache.delete(e);
		return e;
	}
}, ch = class {
	constructor({ pageId: e, content: t, canWrite: n, api: r }) {
		this.pageId = e, this.content = t, this.canWrite = n, this.api = r, this.session = jm(), this.epoch = 0, this.seq = 0, this.pending = [], this.cursor = null, this.peers = [], this.timer = null, this.running = null, this.stopped = !1, this.onChange = () => {}, this.onPeers = () => {}, this.onHistory = () => {}, this.onReset = () => {}, this.due = 0, this.onVisibility = () => this.schedule(0), this.adopt(new sh(), (e) => e.seed(t));
	}
	adopt(e, t) {
		this.page?.destroy(), this.page = e, this.pending = [], t(e), e.undoManager.clear(), e.doc.on("update", (e, t) => {
			t !== "remote" && (this.pending.push(e), this.schedule($m));
		}), e.doc.on("afterTransaction", (t) => {
			(t.origin === "remote" || t.origin === e.undoManager) && this.onChange(t.origin === "remote" ? qm : Jm);
		});
		for (let t of [
			"stack-item-added",
			"stack-item-popped",
			"stack-cleared"
		]) e.undoManager.on(t, () => this.onHistory());
		this.onHistory();
	}
	async start() {
		document.addEventListener("visibilitychange", this.onVisibility), await this.poll();
	}
	stop() {
		this.stopped = !0, clearTimeout(this.timer), document.removeEventListener("visibilitychange", this.onVisibility), this.api.syncPage(this.pageId, {
			session: this.session,
			leave: !0
		}).catch(() => {}), this.page.destroy();
	}
	get canUndo() {
		return this.page.undoManager.undoStack.length > 0;
	}
	get canRedo() {
		return this.page.undoManager.redoStack.length > 0;
	}
	undo() {
		this.page.undoManager.undo();
	}
	redo() {
		this.page.undoManager.redo();
	}
	commit(e, t = Jm) {
		this.canWrite && this.page.write(e, t);
	}
	read(e, t = null) {
		return this.page.read(e, t);
	}
	setCursor(e) {
		this.cursor = e;
	}
	schedule(e) {
		let t = Date.now() + e;
		this.stopped || this.timer !== null && this.due <= t || (clearTimeout(this.timer), this.due = t, this.timer = setTimeout(() => {
			this.timer = null, this.poll();
		}, e));
	}
	interval() {
		return document.visibilityState === "hidden" ? Qm : this.peers.length > 0 ? Xm : Zm;
	}
	async poll() {
		return this.running ||= this.exchange().catch(() => {}).finally(() => {
			this.running = null, this.schedule(this.pending.length > 0 ? $m : this.interval());
		}), this.running;
	}
	async exchange() {
		let e = this.pending.length, t = {
			session: this.session,
			epoch: this.epoch,
			since: this.seq,
			cursor: this.cursor
		};
		this.canWrite && this.epoch !== 0 && e > 0 && (t.update = rh(xf(this.pending)));
		let n = await this.api.syncPage(this.pageId, t);
		if (!this.stopped) {
			if (n.seq === 0 && this.epoch === 0 && this.canWrite) {
				if (n = await this.api.syncPage(this.pageId, {
					...t,
					init: !0,
					update: rh(Pd(this.page.doc))
				}), this.stopped) return;
				n.rejected || (this.pending.splice(0, e), this.epoch = n.epoch);
			}
			if (n.seq > 0 && (n.rejected || n.epoch !== this.epoch)) this.adopt(new sh(), (e) => {
				for (let t of n.updates) jd(e.doc, ih(t), qm);
			}), this.epoch = n.epoch, this.onChange(qm);
			else if (n.seq > 0) {
				this.pending.splice(0, t.update ? e : 0);
				for (let e of n.updates) jd(this.page.doc, ih(e), qm);
			} else if (this.epoch !== 0) {
				this.stopped = !0, this.onReset();
				return;
			}
			this.seq = n.seq, this.peers = n.peers ?? [], this.onPeers(this.peers), this.canWrite && n.count > eh && this.pending.length === 0 && Math.random() < .3 && this.api.compactPage(this.pageId, {
				epoch: this.epoch,
				upTo: this.seq,
				state: rh(Pd(this.page.doc))
			}).catch(() => {});
		}
	}
}, lh = { class: "nb-members" }, uh = { class: "nb-field" }, dh = {
	key: 0,
	class: "nb-members__results"
}, fh = { class: "nb-members__name" }, ph = ["onClick"], mh = ["onClick"], hh = {
	key: 1,
	class: "nb-muted"
}, gh = {
	key: 2,
	class: "nb-muted"
}, _h = { class: "nb-members__list" }, vh = { class: "nb-members__name" }, yh = [
	"value",
	"aria-label",
	"onChange"
], bh = ["aria-label", "onClick"], xh = {
	__name: "MemberPicker",
	props: { modelValue: {
		type: Array,
		required: !0
	} },
	emits: ["update:modelValue", "error"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ A(""), a = /* @__PURE__ */ A([]), o = /* @__PURE__ */ A(!1), s = null;
		function c() {
			clearTimeout(s), s = setTimeout(async () => {
				let e = i.value.trim();
				if (e.length < 2) a.value = [];
				else {
					o.value = !0;
					try {
						let t = new Set(n.modelValue.map((e) => e.type + ":" + e.id));
						a.value = (await is.searchPrincipals(e)).results.filter((e) => !t.has(e.type + ":" + e.id));
					} catch (e) {
						r("error", e.message);
					} finally {
						o.value = !1;
					}
				}
			}, 250);
		}
		function l(e, t) {
			r("update:modelValue", [...n.modelValue, {
				...e,
				role: t
			}]), a.value = a.value.filter((t) => t !== e);
		}
		function u(e, t) {
			r("update:modelValue", n.modelValue.map((n) => n === e ? {
				...n,
				role: t
			} : n));
		}
		function d(e) {
			r("update:modelValue", n.modelValue.filter((t) => t !== e));
		}
		return (t, n) => (M(), N("div", lh, [
			P("label", uh, [n[1] ||= P("span", null, "Personen oder Gruppen (z. B. eine Klasse) hinzufügen", -1), Hn(P("input", {
				"onUpdate:modelValue": n[0] ||= (e) => i.value = e,
				type: "search",
				placeholder: "Name oder Gruppe suchen …",
				onInput: c
			}, null, 544), [[Lo, i.value]])]),
			a.value.length > 0 ? (M(), N("ul", dh, [(M(!0), N(j, null, jr(a.value, (e) => (M(), N("li", { key: e.type + ":" + e.id }, [
				P("span", fh, [pa(Ee(e.name) + " ", 1), P("small", null, Ee(e.type === "group" ? "Gruppe" : e.id), 1)]),
				P("button", {
					type: "button",
					class: "nb-button",
					onClick: (t) => l(e, "student")
				}, "als Schüler:in", 8, ph),
				P("button", {
					type: "button",
					class: "nb-button",
					onClick: (t) => l(e, "teacher")
				}, "als Lehrkraft", 8, mh)
			]))), 128))])) : i.value.trim().length >= 2 && !o.value ? (M(), N("p", hh, "Keine Treffer.")) : I("", !0),
			n[3] ||= P("h3", { class: "nb-members__heading" }, "Mitglieder", -1),
			e.modelValue.length === 0 ? (M(), N("p", gh, "Noch keine Mitglieder. Du selbst bist automatisch Lehrkraft.")) : I("", !0),
			P("ul", _h, [(M(!0), N(j, null, jr(e.modelValue, (e) => (M(), N("li", { key: e.type + ":" + e.id }, [
				P("span", vh, [pa(Ee(e.name ?? e.id) + " ", 1), P("small", null, Ee(e.type === "group" ? "Gruppe" : e.id), 1)]),
				P("select", {
					value: e.role,
					"aria-label": "Rolle von " + (e.name ?? e.id),
					onChange: (t) => u(e, t.target.value)
				}, [...n[2] ||= [P("option", { value: "student" }, "Schüler:in", -1), P("option", { value: "teacher" }, "Lehrkraft", -1)]], 40, yh),
				P("button", {
					type: "button",
					class: "nb-icon-button",
					"aria-label": (e.name ?? e.id) + " entfernen",
					onClick: (t) => d(e)
				}, "×", 8, bh)
			]))), 128))])
		]));
	}
}, Sh = { class: "nb-modal__header" }, Ch = { class: "nb-modal__body" }, wh = { class: "nb-modal__footer" }, Th = {
	__name: "ModalDialog",
	props: { title: {
		type: String,
		required: !0
	} },
	emits: ["close"],
	setup(e) {
		let t = "nb-modal-" + Math.random().toString(36).slice(2), n = /* @__PURE__ */ A(null);
		return xr(() => {
			n.value?.querySelector("input, select, button:not(.nb-icon-button)")?.focus();
		}), (r, i) => (M(), N("div", {
			class: "nb-modal",
			onMousedown: i[2] ||= Go((e) => r.$emit("close"), ["self"])
		}, [P("div", {
			ref_key: "dialog",
			ref: n,
			class: "nb-modal__dialog",
			role: "dialog",
			"aria-modal": "true",
			"aria-labelledby": t,
			onKeydown: i[1] ||= qo(Go((e) => r.$emit("close"), ["stop"]), ["esc"])
		}, [
			P("header", Sh, [P("h2", { id: t }, Ee(e.title), 1), P("button", {
				type: "button",
				class: "nb-icon-button",
				"aria-label": "Schließen",
				onClick: i[0] ||= (e) => r.$emit("close")
			}, "×")]),
			P("div", Ch, [Nr(r.$slots, "default")]),
			P("footer", wh, [Nr(r.$slots, "footer")])
		], 544)], 32));
	}
}, Eh = ["innerHTML"], Dh = {
	__name: "NbIcon",
	props: { name: {
		type: String,
		required: !0
	} },
	setup(e) {
		let t = {
			panel: "<rect x=\"3\" y=\"4\" width=\"18\" height=\"16\" rx=\"2\"/><path d=\"M9 4v16\"/>",
			plus: "<path d=\"M12 5v14M5 12h14\"/>",
			edit: "<path d=\"M4 20l4-1 11-11-3-3L5 16z\"/><path d=\"M14 6l3 3\"/>",
			trash: "<path d=\"M4 7h16M10 11v6M14 11v6M6 7l1 12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-12M9 7V4h6v3\"/>",
			users: "<circle cx=\"9\" cy=\"8\" r=\"4\"/><path d=\"M2 21a7 7 0 0 1 14 0M16 4a4 4 0 0 1 0 8M22 21a7 7 0 0 0-4-6.3\"/>",
			chevron: "<path d=\"m9 6 6 6-6 6\"/>",
			book: "<path d=\"M6 3h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z\"/><path d=\"M8 3v18M12 8h4\"/>"
		};
		return (n, r) => (M(), N("svg", {
			class: "nb-icon",
			viewBox: "0 0 24 24",
			"aria-hidden": "true",
			innerHTML: t[e.name]
		}, null, 8, Eh));
	}
}, Oh = ["aria-label"], kh = ["aria-current"], Ah = { class: "nb-nav-item__name" }, jh = {
	key: 1,
	class: "nb-nav-item__badge"
}, Mh = ["aria-label"], Nh = ["aria-label"], Ph = {
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
		},
		editable: {
			type: Boolean,
			default: !0
		},
		deletable: {
			type: Boolean,
			default: !0
		},
		badge: {
			type: String,
			default: null
		}
	},
	emits: [
		"select",
		"rename",
		"remove"
	],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ A(!1), a = /* @__PURE__ */ A(!1), o = /* @__PURE__ */ A(""), s = /* @__PURE__ */ A(null), c = /* @__PURE__ */ A(null);
		async function l() {
			o.value = n.node.name, i.value = !0, await Dn(), s.value?.select();
		}
		function u() {
			if (!i.value) return;
			i.value = !1;
			let e = o.value.trim();
			e !== "" && e !== n.node.name && r("rename", e);
		}
		function d(e) {
			c.value = {
				x: Math.min(e.clientX, window.innerWidth - 180),
				y: Math.min(e.clientY, window.innerHeight - 140)
			}, document.addEventListener("click", f, { once: !0 }), document.addEventListener("keydown", p);
		}
		function f() {
			c.value = null, document.removeEventListener("keydown", p);
		}
		function p(e) {
			e.key === "Escape" && f();
		}
		function m() {
			f(), r("select");
		}
		async function h() {
			f(), await l();
		}
		function g() {
			f(), a.value = !0;
		}
		return wr(f), (t, n) => (M(), N("div", {
			class: D(["nb-nav-item", ["nb-nav-item--" + e.kind, { "nb-nav-item--active": e.active }]]),
			onContextmenu: Go(d, ["prevent", "stop"])
		}, [i.value ? (M(), N("form", {
			key: 0,
			class: "nb-nav-item__form",
			onSubmit: Go(u, ["prevent"])
		}, [Hn(P("input", {
			ref_key: "input",
			ref: s,
			"onUpdate:modelValue": n[0] ||= (e) => o.value = e,
			class: "nb-nav-item__input",
			"aria-label": "Name für " + e.node.name,
			maxlength: "120",
			onBlur: u,
			onKeydown: n[1] ||= qo(Go((e) => i.value = !1, ["prevent"]), ["esc"])
		}, null, 40, Oh), [[Lo, o.value]])], 32)) : a.value ? (M(), N(j, { key: 1 }, [
			n[8] ||= P("span", { class: "nb-nav-item__confirm" }, "Löschen?", -1),
			P("button", {
				type: "button",
				class: "nb-nav-item__action nb-nav-item__action--danger",
				onClick: n[2] ||= (e) => {
					t.$emit("remove"), a.value = !1;
				}
			}, "Ja"),
			P("button", {
				type: "button",
				class: "nb-nav-item__action",
				onClick: n[3] ||= (e) => a.value = !1
			}, "Nein")
		], 64)) : (M(), N(j, { key: 2 }, [
			P("button", {
				type: "button",
				class: "nb-nav-item__label",
				"aria-current": e.active ? "true" : void 0,
				onClick: n[4] ||= (e) => t.$emit("select"),
				onDblclick: n[5] ||= (t) => e.editable && l()
			}, [
				e.kind === "notebook" ? (M(), aa(Dh, {
					key: 0,
					name: "book"
				})) : I("", !0),
				P("span", Ah, Ee(e.node.name), 1),
				e.badge ? (M(), N("span", jh, Ee(e.badge), 1)) : I("", !0)
			], 40, kh),
			Nr(t.$slots, "actions"),
			e.editable ? (M(), N("button", {
				key: 0,
				type: "button",
				class: "nb-nav-item__action",
				title: "Umbenennen",
				"aria-label": e.node.name + " umbenennen",
				onClick: l
			}, [F(Dh, { name: "edit" })], 8, Mh)) : I("", !0),
			e.deletable ? (M(), N("button", {
				key: 1,
				type: "button",
				class: "nb-nav-item__action",
				title: "Löschen",
				"aria-label": e.node.name + " löschen",
				onClick: n[6] ||= (e) => a.value = !0
			}, [F(Dh, { name: "trash" })], 8, Nh)) : I("", !0)
		], 64)), c.value ? (M(), N("div", {
			key: 3,
			class: "nb-context-menu",
			role: "menu",
			style: fe({
				left: c.value.x + "px",
				top: c.value.y + "px"
			}),
			onClick: n[7] ||= Go(() => {}, ["stop"])
		}, [
			P("button", {
				type: "button",
				role: "menuitem",
				onClick: m
			}, "Öffnen"),
			e.editable ? (M(), N("button", {
				key: 0,
				type: "button",
				role: "menuitem",
				onClick: h
			}, "Umbenennen")) : I("", !0),
			e.deletable ? (M(), N("button", {
				key: 1,
				type: "button",
				role: "menuitem",
				class: "nb-context-menu__danger",
				onClick: g
			}, "Löschen")) : I("", !0)
		], 4)) : I("", !0)], 34));
	}
}, Fh = { class: "nb-nav__list" }, Ih = {
	__name: "SectionList",
	props: {
		sections: {
			type: Array,
			required: !0
		},
		sectionId: {
			type: Number,
			default: null
		}
	},
	emits: [
		"select",
		"rename",
		"remove"
	],
	setup(e) {
		return (t, n) => (M(), N("ul", Fh, [(M(!0), N(j, null, jr(e.sections, (n) => (M(), N("li", { key: n.id }, [F(Ph, {
			node: n,
			active: n.id === e.sectionId,
			editable: n.canWrite,
			deletable: n.canWrite,
			kind: "section",
			onSelect: (e) => t.$emit("select", n),
			onRename: (e) => t.$emit("rename", {
				id: n.id,
				name: e
			}),
			onRemove: (e) => t.$emit("remove", { id: n.id })
		}, null, 8, [
			"node",
			"active",
			"editable",
			"deletable",
			"onSelect",
			"onRename",
			"onRemove"
		])]))), 128))]));
	}
}, Lh = {
	class: "nb-nav",
	"aria-label": "Notizbücher"
}, Rh = { class: "nb-nav__column" }, zh = { class: "nb-nav__header" }, Bh = { class: "nb-nav__list" }, Vh = ["aria-label", "onClick"], Hh = {
	key: 0,
	class: "nb-nav__nested"
}, Uh = ["onClick"], Wh = { class: "nb-nav__group-title" }, Gh = {
	key: 0,
	class: "nb-nav__readonly"
}, Kh = {
	key: 0,
	class: "nb-nav__empty"
}, qh = ["aria-expanded", "onClick"], Jh = ["onClick"], Yh = ["onClick"], Xh = {
	key: 0,
	class: "nb-nav__empty"
}, Zh = {
	key: 0,
	class: "nb-nav__column nb-nav__column--pages"
}, Qh = { class: "nb-nav__header" }, $h = { class: "nb-nav__list" }, eg = {
	key: 0,
	class: "nb-nav__empty"
}, tg = {
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
		"create-notebook",
		"rename",
		"remove",
		"members"
	],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ Vt(/* @__PURE__ */ new Set()), a = Ba(() => n.notebooks.find((e) => e.id === n.notebookId) ?? null), o = Ba(() => Km(a.value).find((e) => e.section.id === n.sectionId) ?? null);
		Yn(o, (e) => {
			e?.student && i.add(e.student.id);
		}, { immediate: !0 });
		function s(e) {
			return i.has(e.id);
		}
		function c(e) {
			i.has(e.id) ? i.delete(e.id) : i.add(e.id);
		}
		function l(e, t) {
			r("select", {
				notebookId: e.id,
				sectionId: t.id
			});
		}
		return (t, n) => (M(), N("nav", Lh, [P("section", Rh, [
			P("header", zh, [n[8] ||= P("h2", null, "Notizbücher", -1), P("button", {
				type: "button",
				class: "nb-icon-button",
				title: "Neues Notizbuch",
				"aria-label": "Neues Notizbuch",
				onClick: n[0] ||= (e) => t.$emit("create-notebook")
			}, [F(Dh, { name: "plus" })])]),
			P("ul", Bh, [(M(!0), N(j, null, jr(e.notebooks, (r) => (M(), N("li", { key: r.id }, [F(Ph, {
				node: r,
				active: r.id === e.notebookId,
				badge: r.kind === "class" ? "Klasse" : null,
				editable: r.canManage,
				deletable: r.canDelete,
				kind: "notebook",
				onSelect: (e) => t.$emit("select", { notebookId: r.id }),
				onRename: (e) => t.$emit("rename", {
					id: r.id,
					name: e
				}),
				onRemove: (e) => t.$emit("remove", { id: r.id })
			}, Mr({ _: 2 }, [r.kind === "class" && r.canManage ? {
				name: "actions",
				fn: Vn(() => [P("button", {
					type: "button",
					class: "nb-nav-item__action",
					title: "Mitglieder",
					"aria-label": "Mitglieder von " + r.name,
					onClick: (e) => t.$emit("members", r)
				}, [F(Dh, { name: "users" })], 8, Vh)]),
				key: "0"
			} : void 0]), 1032, [
				"node",
				"active",
				"badge",
				"editable",
				"deletable",
				"onSelect",
				"onRename",
				"onRemove"
			]), r.id === e.notebookId ? (M(), N("div", Hh, [r.kind === "personal" ? (M(), N(j, { key: 0 }, [F(Ih, {
				sections: r.sections,
				"section-id": e.sectionId,
				onSelect: (e) => l(r, e),
				onRename: n[1] ||= (e) => t.$emit("rename", e),
				onRemove: n[2] ||= (e) => t.$emit("remove", e)
			}, null, 8, [
				"sections",
				"section-id",
				"onSelect"
			]), P("button", {
				type: "button",
				class: "nb-nav__add",
				onClick: (e) => t.$emit("create", {
					type: "section",
					parentId: r.id
				})
			}, [F(Dh, { name: "plus" }), n[9] ||= pa(" Abschnitt hinzufügen", -1)], 8, Uh)], 64)) : (M(!0), N(j, { key: 1 }, jr(r.groups, (i) => (M(), N("div", {
				key: i.id,
				class: D(["nb-nav__group", "nb-nav__group--" + i.area])
			}, [P("h3", Wh, [pa(Ee(i.name) + " ", 1), i.canWrite ? I("", !0) : (M(), N("span", Gh, "nur lesen"))]), i.students ? (M(), N(j, { key: 0 }, [i.students.length === 0 ? (M(), N("p", Kh, "Noch keine Schüler:innen. Über „Mitglieder“ hinzufügen.")) : I("", !0), (M(!0), N(j, null, jr(i.students, (i) => (M(), N("div", {
				key: i.id,
				class: "nb-nav__student"
			}, [P("button", {
				type: "button",
				class: "nb-nav__student-toggle",
				"aria-expanded": s(i),
				onClick: (e) => c(i)
			}, [F(Dh, {
				name: "chevron",
				class: D({ "nb-icon--open": s(i) })
			}, null, 8, ["class"]), pa(" " + Ee(i.name), 1)], 8, qh), s(i) ? (M(), N(j, { key: 0 }, [F(Ih, {
				sections: i.sections,
				"section-id": e.sectionId,
				onSelect: (e) => l(r, e),
				onRename: n[3] ||= (e) => t.$emit("rename", e),
				onRemove: n[4] ||= (e) => t.$emit("remove", e)
			}, null, 8, [
				"sections",
				"section-id",
				"onSelect"
			]), P("button", {
				type: "button",
				class: "nb-nav__add",
				onClick: (e) => t.$emit("create", {
					type: "section",
					parentId: i.id
				})
			}, [F(Dh, { name: "plus" }), n[10] ||= pa(" Abschnitt hinzufügen", -1)], 8, Jh)], 64)) : I("", !0)]))), 128))], 64)) : (M(), N(j, { key: 1 }, [F(Ih, {
				sections: i.sections,
				"section-id": e.sectionId,
				onSelect: (e) => l(r, e),
				onRename: n[5] ||= (e) => t.$emit("rename", e),
				onRemove: n[6] ||= (e) => t.$emit("remove", e)
			}, null, 8, [
				"sections",
				"section-id",
				"onSelect"
			]), i.canWrite ? (M(), N("button", {
				key: 0,
				type: "button",
				class: "nb-nav__add",
				onClick: (e) => t.$emit("create", {
					type: "section",
					parentId: i.id
				})
			}, [F(Dh, { name: "plus" }), n[11] ||= pa(" Abschnitt hinzufügen", -1)], 8, Yh)) : I("", !0)], 64))], 2))), 128))])) : I("", !0)]))), 128))]),
			e.notebooks.length === 0 ? (M(), N("p", Xh, "Noch keine Notizbücher.")) : I("", !0)
		]), o.value ? (M(), N("section", Zh, [
			P("header", Qh, [P("h2", null, Ee(o.value.student ? o.value.student.name + " · " : "") + Ee(o.value.section.name), 1), o.value.section.canWrite ? (M(), N("button", {
				key: 0,
				type: "button",
				class: "nb-icon-button",
				title: "Neue Seite",
				"aria-label": "Neue Seite",
				onClick: n[7] ||= (e) => t.$emit("create", {
					type: "page",
					parentId: o.value.section.id
				})
			}, [F(Dh, { name: "plus" })])) : I("", !0)]),
			P("ul", $h, [(M(!0), N(j, null, jr(o.value.section.pages, (n) => (M(), N("li", { key: n.id }, [F(Ph, {
				node: n,
				active: n.id === e.pageId,
				editable: o.value.section.canWrite,
				deletable: o.value.section.canWrite,
				kind: "page",
				onSelect: (r) => t.$emit("select", {
					notebookId: e.notebookId,
					sectionId: o.value.section.id,
					pageId: n.id
				}),
				onRename: (e) => t.$emit("rename", {
					id: n.id,
					name: e
				}),
				onRemove: (e) => t.$emit("remove", { id: n.id })
			}, null, 8, [
				"node",
				"active",
				"editable",
				"deletable",
				"onSelect",
				"onRename",
				"onRemove"
			])]))), 128))]),
			o.value.section.pages.length === 0 ? (M(), N("p", eg, "Noch keine Seiten.")) : I("", !0)
		])) : I("", !0)]));
	}
}, { PI: ng } = Math, rg = ng + 1e-4, ig = .5, ag = [1, 1];
function og(e, t, n, r = (e) => e) {
	return e * r(.5 - t * (.5 - n));
}
var { min: sg } = Math;
function cg(e, t, n) {
	let r = sg(1, t / n);
	return sg(1, e + (sg(1, 1 - r) - e) * (r * .275));
}
function lg(e) {
	return [-e[0], -e[1]];
}
function ug(e, t) {
	return [e[0] + t[0], e[1] + t[1]];
}
function dg(e, t, n) {
	return e[0] = t[0] + n[0], e[1] = t[1] + n[1], e;
}
function fg(e, t) {
	return [e[0] - t[0], e[1] - t[1]];
}
function pg(e, t, n) {
	return e[0] = t[0] - n[0], e[1] = t[1] - n[1], e;
}
function mg(e, t) {
	return [e[0] * t, e[1] * t];
}
function hg(e, t, n) {
	return e[0] = t[0] * n, e[1] = t[1] * n, e;
}
function gg(e, t) {
	return [e[0] / t, e[1] / t];
}
function _g(e) {
	return [e[1], -e[0]];
}
function vg(e, t) {
	let n = t[0];
	return e[0] = t[1], e[1] = -n, e;
}
function yg(e, t) {
	return e[0] * t[0] + e[1] * t[1];
}
function bg(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}
function xg(e) {
	return Math.hypot(e[0], e[1]);
}
function Sg(e, t) {
	let n = e[0] - t[0], r = e[1] - t[1];
	return n * n + r * r;
}
function Cg(e) {
	return gg(e, xg(e));
}
function wg(e, t) {
	return Math.hypot(e[1] - t[1], e[0] - t[0]);
}
function Tg(e, t, n) {
	let r = Math.sin(n), i = Math.cos(n), a = e[0] - t[0], o = e[1] - t[1], s = a * i - o * r, c = a * r + o * i;
	return [s + t[0], c + t[1]];
}
function Eg(e, t, n, r) {
	let i = Math.sin(r), a = Math.cos(r), o = t[0] - n[0], s = t[1] - n[1], c = o * a - s * i, l = o * i + s * a;
	return e[0] = c + n[0], e[1] = l + n[1], e;
}
function Dg(e, t, n) {
	return ug(e, mg(fg(t, e), n));
}
function Og(e, t, n, r) {
	let i = n[0] - t[0], a = n[1] - t[1];
	return e[0] = t[0] + i * r, e[1] = t[1] + a * r, e;
}
function kg(e, t, n) {
	return ug(e, mg(t, n));
}
var Ag = [0, 0], jg = [0, 0], Mg = [0, 0];
function Ng(e, t) {
	let n = kg(e, Cg(_g(fg(e, ug(e, [1, 1])))), -t), r = [], i = 1 / 13;
	for (let t = i; t <= 1; t += i) r.push(Tg(n, e, rg * 2 * t));
	return r;
}
function Pg(e, t, n) {
	let r = [], i = 1 / n;
	for (let n = i; n <= 1; n += i) r.push(Tg(t, e, rg * n));
	return r;
}
function Fg(e, t, n) {
	let r = fg(t, n), i = mg(r, .5), a = mg(r, .51);
	return [
		fg(e, i),
		fg(e, a),
		ug(e, a),
		ug(e, i)
	];
}
function Ig(e, t, n, r) {
	let i = [], a = kg(e, t, n), o = 1 / r;
	for (let t = o; t < 1; t += o) i.push(Tg(a, e, rg * 3 * t));
	return i;
}
function Lg(e, t, n) {
	return [
		ug(e, mg(t, n)),
		ug(e, mg(t, n * .99)),
		fg(e, mg(t, n * .99)),
		fg(e, mg(t, n))
	];
}
function Rg(e, t, n) {
	return e === !1 || e === void 0 ? 0 : e === !0 ? Math.max(t, n) : e;
}
function zg(e, t, n) {
	return e.slice(0, 10).reduce((e, r) => {
		let i = r.pressure;
		return t && (i = cg(e, r.distance, n)), (e + i) / 2;
	}, e[0].pressure);
}
function Bg(e, t = {}) {
	let { size: n = 16, smoothing: r = .5, thinning: i = .5, simulatePressure: a = !0, easing: o = (e) => e, start: s = {}, end: c = {}, last: l = !1 } = t, { cap: u = !0, easing: d = (e) => e * (2 - e) } = s, { cap: f = !0, easing: p = (e) => --e * e * e + 1 } = c;
	if (e.length === 0 || n <= 0) return [];
	let m = e[e.length - 1].runningLength, h = Rg(s.taper, n, m), g = Rg(c.taper, n, m), _ = (n * r) ** 2, v = [], y = [], b = zg(e, a, n), x = og(n, i, e[e.length - 1].pressure, o), S, C = e[0].vector, w = e[0].point, T = w, E = w, ee = T, te = !1;
	for (let t = 0; t < e.length; t++) {
		let { pressure: r } = e[t], { point: s, vector: c, distance: l, runningLength: u } = e[t], f = t === e.length - 1;
		if (!f && m - u < 3) continue;
		i ? (a && (r = cg(b, l, n)), x = og(n, i, r, o)) : x = n / 2, S === void 0 && (S = x);
		let ne = u < h ? d(u / h) : 1, re = m - u < g ? p((m - u) / g) : 1;
		x = Math.max(.01, x * Math.min(ne, re));
		let ie = (f ? e[t] : e[t + 1]).vector, ae = f ? 1 : yg(c, ie), oe = yg(c, C) < 0 && !te, se = ae !== null && ae < 0;
		if (oe || se) {
			vg(Ag, C), hg(Ag, Ag, x);
			for (let e = 0; e <= 1; e += .07692307692307693) pg(jg, s, Ag), Eg(jg, jg, s, rg * e), E = [jg[0], jg[1]], v.push(E), dg(Mg, s, Ag), Eg(Mg, Mg, s, rg * -e), ee = [Mg[0], Mg[1]], y.push(ee);
			w = E, T = ee, se && (te = !0);
		} else te = !1, f ? (vg(Ag, c), hg(Ag, Ag, x), v.push(fg(s, Ag)), y.push(ug(s, Ag))) : (Og(Ag, ie, c, ae), vg(Ag, Ag), hg(Ag, Ag, x), pg(jg, s, Ag), E = [jg[0], jg[1]], (t <= 1 || Sg(w, E) > _) && (v.push(E), w = E), dg(Mg, s, Ag), ee = [Mg[0], Mg[1]], (t <= 1 || Sg(T, ee) > _) && (y.push(ee), T = ee), b = r, C = c);
	}
	let ne = [e[0].point[0], e[0].point[1]], re = e.length > 1 ? [e[e.length - 1].point[0], e[e.length - 1].point[1]] : ug(e[0].point, [1, 1]), ie = [], ae = [];
	if (e.length === 1) {
		if (!(h || g) || l) return Ng(ne, S || x);
	} else {
		h || g && e.length === 1 || (u ? ie.push(...Pg(ne, y[0], 13)) : ie.push(...Fg(ne, v[0], y[0])));
		let t = _g(lg(e[e.length - 1].vector));
		g || h && e.length === 1 ? ae.push(re) : f ? ae.push(...Ig(re, t, x, 29)) : ae.push(...Lg(re, t, x));
	}
	return v.concat(ae, y.reverse(), ie);
}
var Vg = [0, 0];
function Hg(e) {
	return e != null && e >= 0;
}
function Ug(e, t = {}) {
	let { streamline: n = .5, size: r = 16, last: i = !1 } = t;
	if (e.length === 0) return [];
	let a = .15 + (1 - n) * .85, o = Array.isArray(e[0]) ? e : e.map(({ x: e, y: t, pressure: n = ig }) => [
		e,
		t,
		n
	]);
	if (o.length === 2) {
		let e = o[1];
		o = o.slice(0, -1);
		for (let t = 1; t < 5; t++) o.push(Dg(o[0], e, t / 4));
	}
	o.length === 1 && (o = [...o, [...ug(o[0], ag), ...o[0].slice(2)]]);
	let s = [{
		point: [o[0][0], o[0][1]],
		pressure: Hg(o[0][2]) ? o[0][2] : .25,
		vector: [...ag],
		distance: 0,
		runningLength: 0
	}], c = !1, l = 0, u = s[0], d = o.length - 1;
	for (let e = 1; e < o.length; e++) {
		let t = i && e === d ? [o[e][0], o[e][1]] : Dg(u.point, o[e], a);
		if (bg(u.point, t)) continue;
		let n = wg(t, u.point);
		if (l += n, e < d && !c) {
			if (l < r) continue;
			c = !0;
		}
		pg(Vg, u.point, t), u = {
			point: t,
			pressure: Hg(o[e][2]) ? o[e][2] : ig,
			vector: Cg(Vg),
			distance: n,
			runningLength: l
		}, s.push(u);
	}
	return s[0].vector = s[1]?.vector || [0, 0], s;
}
function Wg(e, t = {}) {
	return Bg(Ug(e, t), t);
}
// src/ink.js
var Gg = {
	pen: {
		thinning: .6,
		opacity: 1
	},
	highlighter: {
		thinning: 0,
		opacity: .35
	}
};
function Kg(e, t = !0) {
	let n = Gg[e.tool] ?? Gg.pen;
	return qg(Wg(e.points, {
		size: e.size,
		thinning: n.thinning,
		smoothing: .5,
		streamline: .4,
		simulatePressure: e.simulatePressure ?? !1,
		last: t
	}));
}
function qg(e) {
	if (e.length === 0) return "";
	if (e.length < 3) {
		let [t, n] = e[0];
		return `M ${t} ${n} Z`;
	}
	let t = (e, t) => ((e + t) / 2).toFixed(2), n = `M${e[0][0].toFixed(2)},${e[0][1].toFixed(2)} Q${e[1][0].toFixed(2)},${e[1][1].toFixed(2)} ${t(e[1][0], e[2][0])},${t(e[1][1], e[2][1])} T`;
	for (let r = 2; r < e.length - 1; r++) n += `${t(e[r][0], e[r + 1][0])},${t(e[r][1], e[r + 1][1])} `;
	return n + "Z";
}
// src/components/ImageBlock.vue
var Jg = ["data-element-id"], Yg = ["src"], Xg = {
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
		return (t, n) => (M(), N("div", {
			class: D(["nb-element nb-image", { "nb-element--selected": e.selected }]),
			"data-element-id": e.element.id,
			style: fe({
				left: e.element.x + "px",
				top: e.element.y + "px",
				width: e.element.width + "px",
				height: e.element.height + "px"
			}),
			onPointerdown: n[1] ||= Go((e) => t.$emit("drag-start", e), ["stop", "prevent"])
		}, [P("img", {
			src: e.src,
			alt: "",
			draggable: "false"
		}, null, 8, Yg), P("div", {
			class: "nb-resize nb-resize--corner",
			title: "Größe ändern",
			onPointerdown: n[0] ||= Go((e) => t.$emit("resize-start", e), ["stop", "prevent"])
		}, null, 32)], 46, Jg));
	}
}, Zg = Object.defineProperty, Qg = (e, t) => {
	let n = {};
	for (var r in e) Zg(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || Zg(n, Symbol.toStringTag, { value: "Module" }), n;
};
// node_modules/orderedmap/dist/index.js
function $g(e) {
	this.content = e;
}
$g.prototype = {
	constructor: $g,
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
		return i == -1 ? a.push(n || e, t) : (a[i + 1] = t, n && (a[i] = n)), new $g(a);
	},
	remove: function(e) {
		var t = this.find(e);
		if (t == -1) return this;
		var n = this.content.slice();
		return n.splice(t, 2), new $g(n);
	},
	addToStart: function(e, t) {
		return new $g([e, t].concat(this.remove(e).content));
	},
	addToEnd: function(e, t) {
		var n = this.remove(e).content.slice();
		return n.push(e, t), new $g(n);
	},
	addBefore: function(e, t, n) {
		var r = this.remove(t), i = r.content.slice(), a = r.find(e);
		return i.splice(a == -1 ? i.length : a, 0, t, n), new $g(i);
	},
	forEach: function(e) {
		for (var t = 0; t < this.content.length; t += 2) e(this.content[t], this.content[t + 1]);
	},
	prepend: function(e) {
		return e = $g.from(e), e.size ? new $g(e.content.concat(this.subtract(e).content)) : this;
	},
	append: function(e) {
		return e = $g.from(e), e.size ? new $g(this.subtract(e).content.concat(e.content)) : this;
	},
	subtract: function(e) {
		var t = this;
		e = $g.from(e);
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
}, $g.from = function(e) {
	if (e instanceof $g) return e;
	var t = [];
	if (e) for (var n in e) t.push(n, e[n]);
	return new $g(t);
};
// node_modules/prosemirror-model/dist/index.js
function e_(e, t, n) {
	for (let r = 0;; r++) {
		if (r == e.childCount || r == t.childCount) return e.childCount == t.childCount ? null : n;
		let i = e.child(r), a = t.child(r);
		if (i == a) n += i.nodeSize;
		else {
			if (!i.sameMarkup(a)) return n;
			if (i.isText && i.text != a.text) {
				let e = i.text, t = a.text, r = 0;
				for (; e[r] == t[r]; r++) n++;
				return r && r < e.length && r < t.length && r_(e.charCodeAt(r - 1)) && n_(e.charCodeAt(r)) && n--, n;
			}
			if (i.content.size || a.content.size) {
				let e = e_(i.content, a.content, n + 1);
				if (e != null) return e;
			}
			n += i.nodeSize;
		}
	}
}
function t_(e, t, n, r) {
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
				return i && a && i < e.length && r_(e.charCodeAt(i - 1)) && n_(e.charCodeAt(i)) && (n++, r++), {
					a: n,
					b: r
				};
			}
			if (o.content.size || s.content.size) {
				let e = t_(o.content, s.content, n - 1, r - 1);
				if (e) return e;
			}
			n -= c, r -= c;
		}
	}
}
function n_(e) {
	return e >= 56320 && e < 57344;
}
function r_(e) {
	return e >= 55296 && e < 56320;
}
var V = class e {
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
		return e_(this, e, t);
	}
	findDiffEnd(e, t = this.size, n = e.size) {
		return t_(this, e, t, n);
	}
	findIndex(e) {
		if (e == 0) return a_(0, e);
		if (e == this.size) return a_(this.content.length, e);
		if (e > this.size || e < 0) throw RangeError(`Position ${e} outside of fragment (${this})`);
		for (let t = 0, n = 0;; t++) {
			let r = this.child(t), i = n + r.nodeSize;
			if (i >= e) return i == e ? a_(t + 1, i) : a_(t, n);
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
V.empty = new V([], 0);
var i_ = {
	index: 0,
	offset: 0
};
function a_(e, t) {
	return i_.index = e, i_.offset = t, i_;
}
function o_(e, t) {
	if (e === t) return !0;
	if (!(e && typeof e == "object") || !(t && typeof t == "object")) return !1;
	let n = Array.isArray(e);
	if (Array.isArray(t) != n) return !1;
	if (n) {
		if (e.length != t.length) return !1;
		for (let n = 0; n < e.length; n++) if (!o_(e[n], t[n])) return !1;
	} else {
		for (let n in e) if (!(n in t) || !o_(e[n], t[n])) return !1;
		for (let n in t) if (!(n in e)) return !1;
	}
	return !0;
}
var H = class e {
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
		return this == e || this.type == e.type && o_(this.attrs, e.attrs);
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
H.none = [];
var s_ = class extends Error {}, U = class e {
	constructor(e, t, n) {
		this.content = e, this.openStart = t, this.openEnd = n;
	}
	get size() {
		return this.content.size - this.openStart - this.openEnd;
	}
	insertAt(t, n) {
		let r = l_(this.content, t + this.openStart, n, this.openStart + 1, this.openEnd + 1);
		return r && new e(r, this.openStart, this.openEnd);
	}
	removeBetween(t, n) {
		return new e(c_(this.content, t + this.openStart, n + this.openStart), this.openStart, this.openEnd);
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
		return new e(V.fromJSON(t, n.content), r, i);
	}
	static maxOpen(t, n = !0) {
		let r = 0, i = 0;
		for (let e = t.firstChild; e && !e.isLeaf && (n || !e.type.spec.isolating); e = e.firstChild) r++;
		for (let e = t.lastChild; e && !e.isLeaf && (n || !e.type.spec.isolating); e = e.lastChild) i++;
		return new e(t, r, i);
	}
};
U.empty = new U(V.empty, 0, 0);
function c_(e, t, n) {
	let { index: r, offset: i } = e.findIndex(t), a = e.maybeChild(r), { index: o, offset: s } = e.findIndex(n);
	if (i == t || a.isText) {
		if (s != n && !e.child(o).isText) throw RangeError("Removing non-flat range");
		return e.cut(0, t).append(e.cut(n));
	}
	if (r != o) throw RangeError("Removing non-flat range");
	return e.replaceChild(r, a.copy(c_(a.content, t - i - 1, n - i - 1)));
}
function l_(e, t, n, r, i, a) {
	let { index: o, offset: s } = e.findIndex(t), c = e.maybeChild(o);
	if (s == t || c.isText) return a && r <= 0 && i <= 0 && !a.canReplace(o, o, n) ? null : e.cut(0, t).append(n).append(e.cut(t));
	let l = l_(c.content, t - s - 1, n, o == 0 ? r - 1 : 0, o == e.childCount - 1 ? i - 1 : 0, c);
	return l && e.replaceChild(o, c.copy(l));
}
function u_(e, t, n) {
	if (n.openStart > e.depth) throw new s_("Inserted content deeper than insertion position");
	if (e.depth - n.openStart != t.depth - n.openEnd) throw new s_("Inconsistent open depths");
	return d_(e, t, n, 0);
}
function d_(e, t, n, r) {
	let i = e.index(r), a = e.node(r);
	if (i == t.index(r) && r < e.depth - n.openStart) {
		let o = d_(e, t, n, r + 1);
		return a.copy(a.content.replaceChild(i, o));
	}
	if (!n.content.size) return g_(a, v_(e, t, r));
	if (!n.openStart && !n.openEnd && e.depth == r && t.depth == r) {
		let r = e.parent, i = r.content;
		return g_(r, i.cut(0, e.parentOffset).append(n.content).append(i.cut(t.parentOffset)));
	}
	{
		let { start: i, end: o } = y_(n, e);
		return g_(a, __(e, i, o, t, r));
	}
}
function f_(e, t) {
	if (!t.type.compatibleContent(e.type)) throw new s_("Cannot join " + t.type.name + " onto " + e.type.name);
}
function p_(e, t, n) {
	let r = e.node(n);
	return f_(r, t.node(n)), r;
}
function m_(e, t) {
	let n = t.length - 1;
	n >= 0 && e.isText && e.sameMarkup(t[n]) ? t[n] = e.withText(t[n].text + e.text) : t.push(e);
}
function h_(e, t, n, r) {
	let i = (t || e).node(n), a = 0, o = t ? t.index(n) : i.childCount;
	e && (a = e.index(n), e.depth > n ? a++ : e.textOffset && (m_(e.nodeAfter, r), a++));
	for (let e = a; e < o; e++) m_(i.child(e), r);
	t && t.depth == n && t.textOffset && m_(t.nodeBefore, r);
}
function g_(e, t) {
	if (!e.type.validContent(t)) throw new s_("Invalid content for node " + e.type.name);
	return e.copy(t);
}
function __(e, t, n, r, i) {
	let a = e.depth > i && p_(e, t, i + 1), o = r.depth > i && p_(n, r, i + 1), s = [];
	return h_(null, e, i, s), a && o && t.index(i) == n.index(i) ? (f_(a, o), m_(g_(a, __(e, t, n, r, i + 1)), s)) : (a && m_(g_(a, v_(e, t, i + 1)), s), h_(t, n, i, s), o && m_(g_(o, v_(n, r, i + 1)), s)), h_(r, null, i, s), new V(s);
}
function v_(e, t, n) {
	let r = [];
	return h_(null, e, n, r), e.depth > n && m_(g_(p_(e, t, n + 1), v_(e, t, n + 1)), r), h_(t, null, n, r), new V(r);
}
function y_(e, t) {
	let n = t.depth - e.openStart, r = t.node(n).copy(e.content);
	for (let e = n - 1; e >= 0; e--) r = t.node(e).copy(V.from(r));
	return {
		start: r.resolveNoCache(e.openStart + n),
		end: r.resolveNoCache(r.content.size - e.openEnd - n)
	};
}
var b_ = class e {
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
		if (e.content.size == 0) return H.none;
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
		for (let n = this.depth - (this.parent.inlineContent || this.pos == e.pos ? 1 : 0); n >= 0; n--) if (e.pos <= this.end(n) && (!t || t(this.node(n)))) return new w_(this, e, n);
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
		let r = C_.get(t);
		if (r) for (let e = 0; e < r.elts.length; e++) {
			let t = r.elts[e];
			if (t.pos == n) return t;
		}
		else C_.set(t, r = new x_());
		let i = r.elts[r.i] = e.resolve(t, n);
		return r.i = (r.i + 1) % S_, i;
	}
}, x_ = class {
	constructor() {
		this.elts = [], this.i = 0;
	}
}, S_ = 12, C_ = /* @__PURE__ */ new WeakMap(), w_ = class {
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
}, T_ = Object.create(null), E_ = class e {
	constructor(e, t, n, r = H.none) {
		this.type = e, this.attrs = t, this.marks = r, this.content = n || V.empty;
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
		return this.type == e && o_(this.attrs, t || e.defaultAttrs || T_) && H.sameSet(this.marks, n || H.none);
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
		if (e == t) return U.empty;
		let r = this.resolve(e), i = this.resolve(t), a = n ? 0 : r.sharedDepth(t), o = r.start(a);
		return new U(r.node(a).content.cut(r.pos - o, i.pos - o), r.depth - a, i.depth - a);
	}
	replace(e, t, n) {
		return u_(this.resolve(e), this.resolve(t), n);
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
		return b_.resolveCached(this, e);
	}
	resolveNoCache(e) {
		return b_.resolve(this, e);
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
		return this.content.size && (e += "(" + this.content.toStringInner() + ")"), k_(this.marks, e);
	}
	contentMatchAt(e) {
		let t = this.type.contentMatch.matchFragment(this.content, 0, e);
		if (!t) throw Error("Called contentMatchAt on a node with invalid content");
		return t;
	}
	canReplace(e, t, n = V.empty, r = 0, i = n.childCount) {
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
		this.type.checkContent(this.content), A_(this.type.attrs, this.attrs, "node", this.type.name);
		let e = H.none;
		for (let t = 0; t < this.marks.length; t++) {
			let n = this.marks[t];
			A_(n.type.attrs, n.attrs, "mark", n.type.name), e = n.addToSet(e);
		}
		if (!H.sameSet(e, this.marks)) throw RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map((e) => e.type.name)}`);
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
		let r = V.fromJSON(e, t.content);
		return e.nodeType(t.type).create(t.attrs, r, n);
	}
};
E_.prototype.text = void 0;
var D_ = (() => {
	let { stack: e } = /* @__PURE__ */ Error("/");
	if (!e || !/\n\s*at\s/.test(e)) return (e) => e;
	let t = Object.create(null);
	return (e) => (t[e], e);
})(), O_ = class e extends E_ {
	constructor(e, t, n, r) {
		if (super(e, t, null, r), !n) throw RangeError("Empty text nodes are not allowed");
		this.text = n;
	}
	toString() {
		return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : k_(this.marks, JSON.stringify(this.text));
	}
	get textContent() {
		return this.text;
	}
	textBetween(e, t) {
		return D_(this.text.slice(e, t));
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
		return e == 0 && t == this.text.length ? this : this.withText(D_(this.text.slice(e, t)));
	}
	eq(e) {
		return this.sameMarkup(e) && this.text == e.text;
	}
	toJSON() {
		let e = super.toJSON();
		return e.text = this.text, e;
	}
};
function k_(e, t) {
	for (let n = e.length - 1; n >= 0; n--) t = e[n].type.name + "(" + t + ")";
	return t;
}
function A_(e, t, n, r) {
	for (let i in t) if (!(i in e)) throw RangeError(`Unsupported attribute ${i} for ${n} of type ${r}`);
	for (let n in e) e[n].validate && e[n].validate(t[n]);
}
var j_ = class e {
	constructor(e) {
		this.validEnd = e, this.next = [], this.wrapCache = [];
	}
	static parse(t, n) {
		let r = new M_(t, n);
		if (r.next == null) return e.empty;
		let i = N_(r);
		r.next && r.err("Unexpected trailing text");
		let a = U_(B_(i));
		return W_(a, r), a;
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
			if (s && (!t || s.validEnd)) return V.from(o.map((e) => e.createAndFill()));
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
j_.empty = new j_(!0);
var M_ = class {
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
function N_(e) {
	let t = [];
	do
		t.push(P_(e));
	while (e.eat("|"));
	return t.length == 1 ? t[0] : {
		type: "choice",
		exprs: t
	};
}
function P_(e) {
	let t = [];
	do
		t.push(F_(e));
	while (e.next && e.next != ")" && e.next != "|");
	return t.length == 1 ? t[0] : {
		type: "seq",
		exprs: t
	};
}
function F_(e) {
	let t = z_(e);
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
	else if (e.eat("{")) t = L_(e, t);
	else break;
	return t;
}
function I_(e) {
	/\D/.test(e.next) && e.err("Expected number, got '" + e.next + "'");
	let t = Number(e.next);
	return e.pos++, t;
}
function L_(e, t) {
	let n = I_(e), r = n;
	return e.eat(",") && (r = e.next == "}" ? -1 : I_(e)), e.eat("}") || e.err("Unclosed braced range"), {
		type: "range",
		min: n,
		max: r,
		expr: t
	};
}
function R_(e, t) {
	let n = e.nodeTypes, r = n[t];
	if (r) return [r];
	let i = [];
	for (let e in n) {
		let r = n[e];
		r.isInGroup(t) && i.push(r);
	}
	return i.length == 0 && e.err("No node type or group '" + t + "' found"), i;
}
function z_(e) {
	if (e.eat("(")) {
		let t = N_(e);
		return e.eat(")") || e.err("Missing closing paren"), t;
	}
	if (/\W/.test(e.next)) e.err("Unexpected token '" + e.next + "'");
	else {
		let t = R_(e, e.next).map((t) => (e.inline == null ? e.inline = t.isInline : e.inline != t.isInline && e.err("Mixing inline and block content"), {
			type: "name",
			value: t
		}));
		return e.pos++, t.length == 1 ? t[0] : {
			type: "choice",
			exprs: t
		};
	}
}
function B_(e) {
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
function V_(e, t) {
	return t - e;
}
function H_(e, t) {
	let n = [];
	return r(t), n.sort(V_);
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
function U_(e) {
	let t = Object.create(null);
	return n(H_(e, 0));
	function n(r) {
		let i = [];
		r.forEach((t) => {
			e[t].forEach(({ term: t, to: n }) => {
				if (!t) return;
				let r;
				for (let e = 0; e < i.length; e++) i[e][0] == t && (r = i[e][1]);
				H_(e, n).forEach((e) => {
					r || i.push([t, r = []]), r.indexOf(e) == -1 && r.push(e);
				});
			});
		});
		let a = t[r.join(",")] = new j_(r.indexOf(e.length - 1) > -1);
		for (let e = 0; e < i.length; e++) {
			let r = i[e][1].sort(V_);
			a.next.push({
				type: i[e][0],
				next: t[r.join(",")] || n(r)
			});
		}
		return a;
	}
}
function W_(e, t) {
	for (let n = 0, r = [e]; n < r.length; n++) {
		let e = r[n], i = !e.validEnd, a = [];
		for (let t = 0; t < e.next.length; t++) {
			let { type: n, next: o } = e.next[t];
			a.push(n.name), i && !(n.isText || n.hasRequiredAttrs()) && (i = !1), r.indexOf(o) == -1 && r.push(o);
		}
		i && t.err("Only non-generatable nodes (" + a.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
	}
}
function G_(e) {
	let t = Object.create(null);
	for (let n in e) {
		let r = e[n];
		if (!r.hasDefault) return null;
		t[n] = r.default;
	}
	return t;
}
function K_(e, t) {
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
function q_(e, t) {
	let n = Object.create(null);
	if (t) for (let r in t) n[r] = new X_(e, r, t[r]);
	return n;
}
var J_ = class e {
	constructor(e, t, n) {
		this.name = e, this.schema = t, this.spec = n, this.markSet = null, this.groups = n.group ? n.group.split(" ") : [], this.attrs = q_(e, n.attrs), this.defaultAttrs = G_(this.attrs), this.contentMatch = null, this.inlineContent = null, this.isBlock = !(n.inline || e == "text"), this.isText = e == "text";
	}
	get isInline() {
		return !this.isBlock;
	}
	get isTextblock() {
		return this.isBlock && this.inlineContent;
	}
	get isLeaf() {
		return this.contentMatch == j_.empty;
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
		return !e && this.defaultAttrs ? this.defaultAttrs : K_(this.attrs, e);
	}
	create(e = null, t, n) {
		if (this.isText) throw Error("NodeType.create can't construct text nodes");
		return new E_(this, this.computeAttrs(e), V.from(t), H.setFrom(n));
	}
	createChecked(e = null, t, n) {
		return t = V.from(t), this.checkContent(t), new E_(this, this.computeAttrs(e), t, H.setFrom(n));
	}
	createAndFill(e = null, t, n) {
		if (e = this.computeAttrs(e), t = V.from(t), t.size) {
			let e = this.contentMatch.fillBefore(t);
			if (!e) return null;
			t = e.append(t);
		}
		let r = this.contentMatch.matchFragment(t), i = r && r.fillBefore(V.empty, !0);
		return i ? new E_(this, e, t.append(i), H.setFrom(n)) : null;
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
		return t ? t.length ? t : H.none : e;
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
function Y_(e, t, n) {
	let r = n.split("|");
	return (n) => {
		let i = n === null ? "null" : typeof n;
		if (r.indexOf(i) < 0) throw RangeError(`Expected value of type ${r} for attribute ${t} on type ${e}, got ${i}`);
	};
}
var X_ = class {
	constructor(e, t, n) {
		this.hasDefault = Object.prototype.hasOwnProperty.call(n, "default"), this.default = n.default, this.validate = typeof n.validate == "string" ? Y_(e, t, n.validate) : n.validate;
	}
	get isRequired() {
		return !this.hasDefault;
	}
}, Z_ = class e {
	constructor(e, t, n, r) {
		this.name = e, this.rank = t, this.schema = n, this.spec = r, this.attrs = q_(e, r.attrs), this.excluded = null;
		let i = G_(this.attrs);
		this.instance = i ? new H(this, i) : null;
	}
	create(e = null) {
		return !e && this.instance ? this.instance : new H(this, K_(this.attrs, e));
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
}, Q_ = class {
	constructor(e) {
		this.linebreakReplacement = null, this.cached = Object.create(null);
		let t = this.spec = {};
		for (let n in e) t[n] = e[n];
		t.nodes = $g.from(e.nodes), t.marks = $g.from(e.marks || {}), this.nodes = J_.compile(this.spec.nodes, this), this.marks = Z_.compile(this.spec.marks, this);
		let n = Object.create(null);
		for (let e in this.nodes) {
			if (e in this.marks) throw RangeError(e + " can not be both a node and a mark");
			let t = this.nodes[e], r = t.spec.content || "", i = t.spec.marks;
			if (t.contentMatch = n[r] || (n[r] = j_.parse(r, this.nodes)), t.inlineContent = t.contentMatch.inlineContent, t.spec.linebreakReplacement) {
				if (this.linebreakReplacement) throw RangeError("Multiple linebreak nodes defined");
				if (!t.isInline || !t.isLeaf) throw RangeError("Linebreak replacement nodes must be inline leaf nodes");
				this.linebreakReplacement = t;
			}
			t.markSet = i == "_" ? null : i ? $_(this, i.split(" ")) : i == "" || !t.inlineContent ? [] : null;
		}
		for (let e in this.marks) {
			let t = this.marks[e], n = t.spec.excludes;
			t.excluded = n == null ? [t] : n == "" ? [] : $_(this, n.split(" "));
		}
		this.nodeFromJSON = (e) => E_.fromJSON(this, e), this.markFromJSON = (e) => H.fromJSON(this, e), this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached.wrappings = Object.create(null);
	}
	node(e, t = null, n, r) {
		if (typeof e == "string") e = this.nodeType(e);
		else if (!(e instanceof J_)) throw RangeError("Invalid node type: " + e);
		else if (e.schema != this) throw RangeError("Node type from different schema used (" + e.name + ")");
		return e.createChecked(t, n, r);
	}
	text(e, t) {
		let n = this.nodes.text;
		return new O_(n, n.defaultAttrs, e, H.setFrom(t));
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
function $_(e, t) {
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
function ev(e) {
	return e.tag != null;
}
function tv(e) {
	return e.style != null;
}
var nv = class e {
	constructor(e, t) {
		this.schema = e, this.rules = t, this.tags = [], this.styles = [];
		let n = this.matchedStyles = [];
		t.forEach((e) => {
			if (ev(e)) this.tags.push(e);
			else if (tv(e)) {
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
		let n = new dv(this, t, !1);
		return n.addAll(e, H.none, t.from, t.to), n.finish();
	}
	parseSlice(e, t = {}) {
		let n = new dv(this, t, !0);
		return n.addAll(e, H.none, t.from, t.to), U.maxOpen(n.finish());
	}
	matchTag(e, t, n) {
		for (let r = n ? this.tags.indexOf(n) + 1 : 0; r < this.tags.length; r++) {
			let n = this.tags[r];
			if (pv(e, n.tag) && (n.namespace === void 0 || e.namespaceURI == n.namespace) && (!n.context || t.matchesContext(n.context))) {
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
				n(e = mv(e)), e.mark || e.ignore || e.clearMark || (e.mark = t);
			});
		}
		for (let t in e.nodes) {
			let r = e.nodes[t].spec.parseDOM;
			r && r.forEach((e) => {
				n(e = mv(e)), e.node || e.ignore || e.mark || (e.node = t);
			});
		}
		return t;
	}
	static fromSchema(t) {
		return t.cached.domParser || (t.cached.domParser = new e(t, e.schemaRules(t)));
	}
}, rv = {
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
}, iv = {
	head: !0,
	noscript: !0,
	object: !0,
	script: !0,
	style: !0,
	title: !0
}, av = {
	ol: !0,
	ul: !0
}, ov = 1, sv = 2, cv = 4;
function lv(e, t, n) {
	return t == null ? e && e.whitespace == "pre" ? 3 : n & -5 : (t ? ov : 0) | (t === "full" ? sv : 0);
}
var uv = class {
	constructor(e, t, n, r, i, a) {
		this.type = e, this.attrs = t, this.marks = n, this.solid = r, this.options = a, this.content = [], this.activeMarks = H.none, this.match = i || (a & cv ? null : e.contentMatch);
	}
	findWrapping(e) {
		if (!this.match) {
			if (!this.type) return [];
			let t = this.type.contentMatch.fillBefore(V.from(e));
			if (t) this.match = this.type.contentMatch.matchFragment(t);
			else {
				let t = this.type.contentMatch, n;
				return (n = t.findWrapping(e.type)) ? (this.match = t, n) : null;
			}
		}
		return this.match.findWrapping(e.type);
	}
	finish(e) {
		if (!(this.options & ov)) {
			let e = this.content[this.content.length - 1], t;
			if (e && e.isText && (t = /[ \t\r\n\u000c]+$/.exec(e.text))) {
				let n = e;
				e.text.length == t[0].length ? this.content.pop() : this.content[this.content.length - 1] = n.withText(n.text.slice(0, n.text.length - t[0].length));
			}
		}
		let t = V.from(this.content);
		return !e && this.match && (t = t.append(this.match.fillBefore(V.empty, !0))), this.type ? this.type.create(this.attrs, t, this.marks) : t;
	}
	inlineContext(e) {
		return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : e.parentNode && !rv.hasOwnProperty(e.parentNode.nodeName.toLowerCase());
	}
}, dv = class {
	constructor(e, t, n) {
		this.parser = e, this.options = t, this.isOpen = n, this.open = 0, this.localPreserveWS = !1;
		let r = t.topNode, i, a = lv(null, t.preserveWhitespace, 0) | (n ? cv : 0);
		i = r ? new uv(r.type, r.attrs, H.none, !0, t.topMatch || r.type.contentMatch, a) : n ? new uv(null, null, H.none, !0, null, a) : new uv(e.schema.topNodeType, null, H.none, !0, null, a), this.nodes = [i], this.find = t.findPositions, this.needsBlock = !1;
	}
	get top() {
		return this.nodes[this.open];
	}
	addDOM(e, t) {
		e.nodeType == 3 ? this.addTextNode(e, t) : e.nodeType == 1 && this.addElement(e, t);
	}
	addTextNode(e, t) {
		let n = e.nodeValue, r = this.top, i = r.options & sv ? "full" : this.localPreserveWS || (r.options & ov) > 0, { schema: a } = this.parser;
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
		av.hasOwnProperty(a) && this.parser.normalizeLists && fv(e);
		let s = this.options.ruleFromNode && this.options.ruleFromNode(e) || (o = this.parser.matchTag(e, this, n));
		out: if (s ? s.ignore : iv.hasOwnProperty(a)) this.findInside(e), this.ignoreFallback(e, t);
		else if (!s || s.skip || s.closeParent) {
			s && s.closeParent ? this.open = Math.max(0, this.open - 1) : s && s.skip.nodeType && (e = s.skip);
			let n, r = this.needsBlock;
			if (rv.hasOwnProperty(a)) i.content.length && i.content[0].isInline && this.open && (this.open--, i = this.top), n = !0, i.type || (this.needsBlock = !0);
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
			let n = H.none;
			for (let i of r.concat(e.marks)) (t.type ? t.type.allowsMarkType(i.type) : hv(i.type, e.type)) && (n = i.addToSet(n));
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
		let o = lv(e, i, a.options);
		a.options & cv && a.content.length == 0 && (o |= cv);
		let s = H.none;
		return n = n.filter((t) => !(a.type ? a.type.allowsMarkType(t.type) : hv(t.type, e)) || (s = t.addToSet(s), !1)), this.nodes.push(new uv(e, t, s, r, null, o)), this.open++, n;
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
		else this.localPreserveWS && (this.nodes[t].options |= ov);
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
function fv(e) {
	for (let t = e.firstChild, n = null; t; t = t.nextSibling) {
		let e = t.nodeType == 1 ? t.nodeName.toLowerCase() : null;
		e && av.hasOwnProperty(e) && n ? (n.appendChild(t), t = n) : e == "li" ? n = t : e && (n = null);
	}
}
function pv(e, t) {
	return (e.matches || e.msMatchesSelector || e.webkitMatchesSelector || e.mozMatchesSelector).call(e, t);
}
function mv(e) {
	let t = {};
	for (let n in e) t[n] = e[n];
	return t;
}
function hv(e, t) {
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
var gv = class e {
	constructor(e, t) {
		this.nodes = e, this.marks = t;
	}
	serializeFragment(e, t = {}, n) {
		n ||= vv(t).createDocumentFragment();
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
		if (e.isText) return vv(t).createTextNode(e.text);
		let { dom: n, contentDOM: r } = Sv(vv(t), this.nodes[e.type.name](e), null, e.attrs);
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
		return r && Sv(vv(n), r(e, t), null, e.attrs);
	}
	static renderSpec(e, t, n = null, r) {
		return typeof t == "string" ? { dom: e.createTextNode(t) } : Sv(e, t, n, r);
	}
	static fromSchema(t) {
		return t.cached.domSerializer || (t.cached.domSerializer = new e(this.nodesFromSchema(t), this.marksFromSchema(t)));
	}
	static nodesFromSchema(e) {
		let t = _v(e.nodes);
		return t.text ||= (e) => e.text, t;
	}
	static marksFromSchema(e) {
		return _v(e.marks);
	}
};
function _v(e) {
	let t = {};
	for (let n in e) {
		let r = e[n].spec.toDOM;
		r && (t[n] = r);
	}
	return t;
}
function vv(e) {
	return e.document || window.document;
}
var yv = /* @__PURE__ */ new WeakMap();
function bv(e) {
	let t = yv.get(e);
	return t === void 0 && yv.set(e, t = xv(e)), t;
}
function xv(e) {
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
function Sv(e, t, n, r) {
	if (t.nodeType == 1) return { dom: t };
	if (t.dom && t.dom.nodeType == 1) return t;
	let i = t[0], a;
	if (typeof i != "string") throw RangeError("Invalid array passed to renderSpec");
	if (r && (a = bv(r)) && a.indexOf(t) > -1) throw RangeError("Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.");
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
			let { dom: t, contentDOM: i } = Sv(e, a, n, r);
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
var Cv = 65535, wv = 2 ** 16;
function Tv(e, t) {
	return e + t * wv;
}
function Ev(e) {
	return e & Cv;
}
function Dv(e) {
	return (e - (e & Cv)) / wv;
}
var Ov = 1, kv = 2, Av = 4, jv = 8, Mv = class {
	constructor(e, t, n) {
		this.pos = e, this.delInfo = t, this.recover = n;
	}
	get deleted() {
		return (this.delInfo & jv) > 0;
	}
	get deletedBefore() {
		return (this.delInfo & 5) > 0;
	}
	get deletedAfter() {
		return (this.delInfo & 6) > 0;
	}
	get deletedAcross() {
		return (this.delInfo & Av) > 0;
	}
}, Nv = class e {
	constructor(t, n = !1) {
		if (this.ranges = t, this.inverted = n, !t.length && e.empty) return e.empty;
	}
	recover(e) {
		let t = 0, n = Ev(e);
		if (!this.inverted) for (let e = 0; e < n; e++) t += this.ranges[e * 3 + 2] - this.ranges[e * 3 + 1];
		return this.ranges[n * 3] + t + Dv(e);
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
				let d = e == (t < 0 ? s : u) ? null : Tv(o / 3, e - s), f = 0;
				return c && (f |= e == s ? kv : e == u ? Ov : Av, (t < 0 ? e != s : e != u) && (f |= jv)), new Mv(a, f, d);
			}
			r += l - c;
		}
		return n ? e + r : new Mv(e + r, 0, null);
	}
	touches(e, t) {
		let n = 0, r = Ev(t), i = this.inverted ? 2 : 1, a = this.inverted ? 1 : 2;
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
Nv.empty = new Nv([]);
var Pv = class e {
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
		return n ? e : new Mv(e, r, null);
	}
}, Fv = Object.create(null), Iv = class {
	getMap() {
		return Nv.empty;
	}
	merge(e) {
		return null;
	}
	static fromJSON(e, t) {
		if (!t || !t.stepType) throw RangeError("Invalid input for Step.fromJSON");
		let n = Fv[t.stepType];
		if (!n) throw RangeError(`No step type ${t.stepType} defined`);
		return n.fromJSON(e, t);
	}
	static jsonID(e, t) {
		if (e in Fv) throw RangeError("Duplicate use of step JSON ID " + e);
		return Fv[e] = t, t.prototype.jsonID = e, t;
	}
}, Lv = class e {
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
			if (t instanceof s_) return e.fail(t.message);
			throw t;
		}
	}
};
function Rv(e, t, n) {
	let r = [];
	for (let i = 0; i < e.childCount; i++) {
		let a = e.child(i);
		a.content.size && (a = a.copy(Rv(a.content, t, a))), a.isInline && (a = t(a, n, i)), r.push(a);
	}
	return V.fromArray(r);
}
var zv = class e extends Iv {
	constructor(e, t, n) {
		super(), this.from = e, this.to = t, this.mark = n;
	}
	apply(e) {
		let t = e.slice(this.from, this.to), n = e.resolve(this.from), r = n.node(n.sharedDepth(this.to)), i = new U(Rv(t.content, (e, t) => !e.isAtom || !t.type.allowsMarkType(this.mark.type) ? e : e.mark(this.mark.addToSet(e.marks)), r), t.openStart, t.openEnd);
		return Lv.fromReplace(e, this.from, this.to, i);
	}
	invert(t) {
		let n = [];
		return t.nodesBetween(this.from, this.to, (t, r) => {
			if (t.isInline && t.isAtom) {
				let i = this.mark.addToSet(t.marks);
				if (!H.sameSet(i, t.marks)) {
					let a = Math.max(this.from, r), o = Math.min(this.to, r + t.nodeSize);
					Vv(Bv, a, o, this.mark, n);
					for (let r of t.marks) r.isInSet(i) || Vv(e, a, o, r, n);
				}
			}
		}), n.length == 1 ? n[0] : new Hv(n);
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
Iv.jsonID("addMark", zv);
var Bv = class e extends Iv {
	constructor(e, t, n) {
		super(), this.from = e, this.to = t, this.mark = n;
	}
	apply(e) {
		let t = e.slice(this.from, this.to), n = new U(Rv(t.content, (e) => e.mark(this.mark.removeFromSet(e.marks)), e), t.openStart, t.openEnd);
		return Lv.fromReplace(e, this.from, this.to, n);
	}
	invert(e) {
		let t = [];
		return e.nodesBetween(this.from, this.to, (e, n) => {
			e.isInline && e.isAtom && this.mark.isInSet(e.marks) && Vv(zv, Math.max(this.from, n), Math.min(this.to, n + e.nodeSize), this.mark, t);
		}), t.length == 1 ? t[0] : new Hv(t);
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
Iv.jsonID("removeMark", Bv);
function Vv(e, t, n, r, i) {
	let a = i.length ? i[i.length - 1] : null;
	a && a instanceof e && a.to == t && a.mark.eq(r) ? i[i.length - 1] = new e(a.from, n, r) : i.push(new e(t, n, r));
}
var Hv = class e extends Iv {
	constructor(e) {
		super(), this.steps = e;
	}
	apply(e) {
		for (let t of this.steps) {
			let n = t.apply(e);
			if (!n.doc) return n;
			e = n.doc;
		}
		return new Lv(e, null);
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
		return new e(n.steps.map((e) => Iv.fromJSON(t, e)));
	}
};
Iv.jsonID("markSet", Hv);
var Uv = class e extends Iv {
	constructor(e, t) {
		super(), this.pos = e, this.mark = t;
	}
	apply(e) {
		let t = e.nodeAt(this.pos);
		if (!t) return Lv.fail("No node at mark step's position");
		let n = t.type.create(t.attrs, null, this.mark.addToSet(t.marks));
		return Lv.fromReplace(e, this.pos, this.pos + 1, new U(V.from(n), 0, +!t.isLeaf));
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
		return new Wv(this.pos, this.mark);
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
Iv.jsonID("addNodeMark", Uv);
var Wv = class e extends Iv {
	constructor(e, t) {
		super(), this.pos = e, this.mark = t;
	}
	apply(e) {
		let t = e.nodeAt(this.pos);
		if (!t) return Lv.fail("No node at mark step's position");
		let n = t.type.create(t.attrs, null, this.mark.removeFromSet(t.marks));
		return Lv.fromReplace(e, this.pos, this.pos + 1, new U(V.from(n), 0, +!t.isLeaf));
	}
	invert(e) {
		let t = e.nodeAt(this.pos);
		return !t || !this.mark.isInSet(t.marks) ? this : new Uv(this.pos, this.mark);
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
Iv.jsonID("removeNodeMark", Wv);
var Gv = class e extends Iv {
	constructor(e, t, n, r = !1) {
		super(), this.from = e, this.to = t, this.slice = n, this.structure = r;
	}
	apply(e) {
		return this.structure && qv(e, this.from, this.to) ? Lv.fail("Structure replace would overwrite content") : Lv.fromReplace(e, this.from, this.to, this.slice);
	}
	getMap() {
		return new Nv([
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
			let n = this.slice.size + t.slice.size == 0 ? U.empty : new U(this.slice.content.append(t.slice.content), this.slice.openStart, t.slice.openEnd);
			return new e(this.from, this.to + (t.to - t.from), n, this.structure);
		}
		if (t.to == this.from && !this.slice.openStart && !t.slice.openEnd) {
			let n = this.slice.size + t.slice.size == 0 ? U.empty : new U(t.slice.content.append(this.slice.content), t.slice.openStart, this.slice.openEnd);
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
		return new e(n.from, n.to, U.fromJSON(t, n.slice), !!n.structure);
	}
};
Gv.MAP_BIAS = 1, Iv.jsonID("replace", Gv);
var Kv = class e extends Iv {
	constructor(e, t, n, r, i, a, o = !1) {
		super(), this.from = e, this.to = t, this.gapFrom = n, this.gapTo = r, this.slice = i, this.insert = a, this.structure = o;
	}
	apply(e) {
		if (this.structure && (qv(e, this.from, this.gapFrom) || qv(e, this.gapTo, this.to))) return Lv.fail("Structure gap-replace would overwrite content");
		let t = e.slice(this.gapFrom, this.gapTo);
		if (t.openStart || t.openEnd) return Lv.fail("Gap is not a flat range");
		let n = this.slice.insertAt(this.insert, t.content);
		return n ? Lv.fromReplace(e, this.from, this.to, n) : Lv.fail("Content does not fit in gap");
	}
	getMap() {
		return new Nv([
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
		return new e(n.from, n.to, n.gapFrom, n.gapTo, U.fromJSON(t, n.slice), n.insert, !!n.structure);
	}
};
Iv.jsonID("replaceAround", Kv);
function qv(e, t, n) {
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
function Jv(e, t, n, r) {
	let i = [];
	e.doc.nodesBetween(t, n, (e, a, o) => {
		if (!e.isInline) return;
		let s = e.marks;
		!r.isInSet(s) && o.type.allowsMarkType(r.type) && Vv(zv, Math.max(a, t), Math.min(a + e.nodeSize, n), r, i);
	}), i.forEach((t) => e.step(t));
}
function Yv(e, t, n, r) {
	let i = [], a = 0;
	e.doc.nodesBetween(t, n, (e, o) => {
		if (!e.isInline || !e.isAtom) return;
		a++;
		let s = null;
		if (r instanceof Z_) {
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
	}), i.forEach((t) => e.step(new Bv(t.from, t.to, t.style)));
}
function Xv(e, t, n, r = n.contentMatch, i = !0) {
	let a = e.doc.nodeAt(t), o = [], s = t + 1;
	for (let t = 0; t < a.childCount; t++) {
		let c = a.child(t), l = s + c.nodeSize, u = r.matchType(c.type);
		if (!u) o.push(new Gv(s, l, U.empty));
		else {
			r = u;
			for (let t = 0; t < c.marks.length; t++) n.allowsMarkType(c.marks[t].type) || e.step(new Bv(s, l, c.marks[t]));
			if (i && c.isText && n.whitespace != "pre") {
				let e, t = /\r?\n|\r/g, r;
				for (; e = t.exec(c.text);) r ||= new U(V.from(n.schema.text(" ", n.allowedMarks(c.marks))), 0, 0), o.push(new Gv(s + e.index, s + e.index + e[0].length, r));
			}
		}
		s = l;
	}
	if (!r.validEnd) {
		let t = r.fillBefore(V.empty, !0);
		e.replace(s, s, new U(t, 0, 0));
	}
	for (let t = o.length - 1; t >= 0; t--) e.step(o[t]);
}
function Zv(e, t, n) {
	return (t == 0 || e.canReplace(t, e.childCount)) && (n == e.childCount || e.canReplace(0, n));
}
function Qv(e) {
	let t = e.parent.content.cutByIndex(e.startIndex, e.endIndex);
	for (let n = e.depth, r = 0, i = 0;; --n) {
		let a = e.$from.node(n), o = e.$from.index(n) + r, s = e.$to.indexAfter(n) - i;
		if (n < e.depth && a.canReplace(o, s, t)) return n;
		if (n == 0 || a.type.spec.isolating || !Zv(a, o, s)) break;
		o && (r = 1), s < a.childCount && (i = 1);
	}
	return null;
}
function $v(e, t, n) {
	let { $from: r, $to: i, depth: a } = t, o = r.before(a + 1), s = i.after(a + 1), c = o, l = s, u = V.empty, d = 0;
	for (let e = a, t = !1; e > n; e--) t || r.index(e) > 0 ? (t = !0, u = V.from(r.node(e).copy(u)), d++) : c--;
	let f = V.empty, p = 0;
	for (let e = a, t = !1; e > n; e--) t || i.after(e + 1) < i.end(e) ? (t = !0, f = V.from(i.node(e).copy(f)), p++) : l++;
	e.step(new Kv(c, l, o, s, new U(u.append(f), d, p), u.size - d, !0));
}
function ey(e, t, n = null, r = e) {
	let i = ny(e, t), a = i && ry(r, t);
	return a ? i.map(ty).concat({
		type: t,
		attrs: n
	}).concat(a.map(ty)) : null;
}
function ty(e) {
	return {
		type: e,
		attrs: null
	};
}
function ny(e, t) {
	let { parent: n, startIndex: r, endIndex: i } = e, a = n.contentMatchAt(r).findWrapping(t);
	if (!a) return null;
	let o = a.length ? a[0] : t;
	return n.canReplaceWith(r, i, o) ? a : null;
}
function ry(e, t) {
	let { parent: n, startIndex: r, endIndex: i } = e, a = n.child(r), o = t.contentMatch.findWrapping(a.type);
	if (!o) return null;
	let s = (o.length ? o[o.length - 1] : t).contentMatch;
	for (let e = r; s && e < i; e++) s = s.matchType(n.child(e).type);
	return !s || !s.validEnd ? null : o;
}
function iy(e, t, n) {
	let r = V.empty;
	for (let e = n.length - 1; e >= 0; e--) {
		if (r.size) {
			let t = n[e].type.contentMatch.matchFragment(r);
			if (!t || !t.validEnd) throw RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper");
		}
		r = V.from(n[e].type.create(n[e].attrs, r));
	}
	let i = t.start, a = t.end;
	e.step(new Kv(i, a, i, a, new U(r, 0, 0), n.length, !0));
}
function ay(e, t, n, r, i) {
	if (!r.isTextblock) throw RangeError("Type given to setBlockType should be a textblock");
	let a = e.steps.length;
	e.doc.nodesBetween(t, n, (t, n) => {
		let o = typeof i == "function" ? i(t) : i;
		if (t.isTextblock && !t.hasMarkup(r, o) && cy(e.doc, e.mapping.slice(a).map(n), r)) {
			let i = null;
			if (r.schema.linebreakReplacement) {
				let e = r.whitespace == "pre", t = !!r.contentMatch.matchType(r.schema.linebreakReplacement);
				e && !t ? i = !1 : !e && t && (i = !0);
			}
			i === !1 && sy(e, t, n, a), Xv(e, e.mapping.slice(a).map(n, 1), r, void 0, i === null);
			let s = e.mapping.slice(a), c = s.map(n, 1), l = s.map(n + t.nodeSize, 1);
			return e.step(new Kv(c, l, c + 1, l - 1, new U(V.from(r.create(o, null, t.marks)), 0, 0), 1, !0)), i === !0 && oy(e, t, n, a), !1;
		}
	});
}
function oy(e, t, n, r) {
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
function sy(e, t, n, r) {
	t.forEach((i, a) => {
		if (i.type == i.type.schema.linebreakReplacement) {
			let i = e.mapping.slice(r).map(n + 1 + a);
			e.replaceWith(i, i + 1, t.type.schema.text("\n"));
		}
	});
}
function cy(e, t, n) {
	let r = e.resolve(t), i = r.index();
	return r.parent.canReplaceWith(i, i + 1, n);
}
function ly(e, t, n, r, i) {
	let a = e.doc.nodeAt(t);
	if (!a) throw RangeError("No node at given position");
	n ||= a.type;
	let o = n.create(r, null, i || a.marks);
	if (a.isLeaf) return e.replaceWith(t, t + a.nodeSize, o);
	if (!n.validContent(a.content)) throw RangeError("Invalid content for node type " + n.name);
	e.step(new Kv(t, t + a.nodeSize, t + 1, t + a.nodeSize - 1, new U(V.from(o), 0, 0), 1, !0));
}
function uy(e, t, n = 1, r) {
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
function dy(e, t, n = 1, r) {
	let i = e.doc.resolve(t), a = V.empty, o = V.empty;
	for (let e = i.depth, t = i.depth - n, s = n - 1; e > t; e--, s--) {
		a = V.from(i.node(e).copy(a));
		let t = r && r[s];
		o = V.from(t ? t.type.create(t.attrs, o) : i.node(e).copy(o));
	}
	e.step(new Gv(t, t, new U(a.append(o), n, n), !0));
}
function fy(e, t) {
	let n = e.resolve(t), r = n.index();
	return my(n.nodeBefore, n.nodeAfter) && n.parent.canReplace(r, r + 1);
}
function py(e, t) {
	t.content.size || e.type.compatibleContent(t.type);
	let n = e.contentMatchAt(e.childCount), { linebreakReplacement: r } = e.type.schema;
	for (let i = 0; i < t.childCount; i++) {
		let a = t.child(i), o = a.type == r ? e.type.schema.nodes.text : a.type;
		if (n = n.matchType(o), !n || !e.type.allowsMarks(a.marks)) return !1;
	}
	return n.validEnd;
}
function my(e, t) {
	return !!(e && t && !e.isLeaf && py(e, t));
}
function hy(e, t, n = -1) {
	let r = e.resolve(t);
	for (let e = r.depth;; e--) {
		let i, a, o = r.index(e);
		if (e == r.depth ? (i = r.nodeBefore, a = r.nodeAfter) : n > 0 ? (i = r.node(e + 1), o++, a = r.node(e).maybeChild(o)) : (i = r.node(e).maybeChild(o - 1), a = r.node(e + 1)), i && !i.isTextblock && my(i, a) && r.node(e).canReplace(o, o + 1)) return t;
		if (e == 0) break;
		t = n < 0 ? r.before(e) : r.after(e);
	}
}
function gy(e, t, n) {
	let r = null, { linebreakReplacement: i } = e.doc.type.schema, a = e.doc.resolve(t - n), o = a.node().type;
	if (i && o.inlineContent) {
		let e = o.whitespace == "pre", t = !!o.contentMatch.matchType(i);
		e && !t ? r = !1 : !e && t && (r = !0);
	}
	let s = e.steps.length;
	if (r === !1) {
		let r = e.doc.resolve(t + n);
		sy(e, r.node(), r.before(), s);
	}
	o.inlineContent && Xv(e, t + n - 1, o, a.node().contentMatchAt(a.index()), r == null);
	let c = e.mapping.slice(s), l = c.map(t - n);
	if (e.step(new Gv(l, c.map(t + n, -1), U.empty, !0)), r === !0) {
		let t = e.doc.resolve(l);
		oy(e, t.node(), t.before(), e.steps.length);
	}
	return e;
}
function _y(e, t, n) {
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
function vy(e, t, n) {
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
function yy(e, t, n = t, r = U.empty) {
	if (t == n && !r.size) return null;
	let i = e.resolve(t), a = e.resolve(n);
	return by(i, a, r) ? new Gv(t, n, r) : new xy(i, a, r).fit();
}
function by(e, t, n) {
	return !n.openStart && !n.openEnd && e.start() == t.start() && e.parent.canReplace(e.index(), t.index(), n.content);
}
var xy = class {
	constructor(e, t, n) {
		this.$from = e, this.$to = t, this.unplaced = n, this.frontier = [], this.placed = V.empty;
		for (let t = 0; t <= e.depth; t++) {
			let n = e.node(t);
			this.frontier.push({
				type: n.type,
				match: n.contentMatchAt(e.indexAfter(t))
			});
		}
		for (let t = e.depth; t > 0; t--) this.placed = V.from(e.node(t).copy(this.placed));
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
		let s = new U(i, a, o);
		return e > -1 ? new Kv(n.pos, e, this.$to.pos, this.$to.end(), s, t) : s.size || n.pos != this.$to.pos ? new Gv(n.pos, r.pos, s) : null;
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
			n ? (r = wy(this.unplaced.content, n - 1).firstChild, e = r.content) : e = this.unplaced.content;
			let i = e.firstChild;
			for (let e = this.depth; e >= 0; e--) {
				let { type: a, match: o } = this.frontier[e], s, c = null;
				if (t == 1 && (i ? o.matchType(i.type) || (c = o.fillBefore(V.from(i), !1)) : r && a.compatibleContent(r.type))) return {
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
		return ky(e, -1) <= t ? !1 : (this.unplaced.size > 1 && ky(e, 1) > n && n++, this.unplaced = new U(e, t + 1, n), !0);
	}
	dropNode() {
		let { content: e, openStart: t, openEnd: n } = this.unplaced, r = wy(e, t);
		if (r.childCount <= 1 && t > 0) {
			let i = e.size - t <= t + r.size;
			this.unplaced = new U(Sy(e, t - 1, 1), t - 1, i ? t - 1 : n);
		} else this.unplaced = new U(Sy(e, t, 1), t, n);
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
			c++, (c > 1 || s == 0 || e.content.size) && (u = t, l.push(Ty(e.mark(d.allowedMarks(e.marks)), c == 1 ? s : 0, c == o.childCount ? f : -1)));
		}
		let p = c == o.childCount;
		p || (f = -1), this.placed = Cy(this.placed, t, V.from(l)), this.frontier[t].match = u, p && f < 0 && n && n.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
		for (let e = 0, t = l[l.length - 1]; t && e < f; e++) this.frontier.push({
			type: t.type,
			match: t.contentMatchAt(t.childCount)
		}), t = t.lastChild;
		this.unplaced = p ? e == 0 ? U.empty : new U(Sy(a.content, e - 1, 1), e - 1, f < 0 ? a.openEnd : e - 1) : new U(Sy(a.content, e, c), e, a.openEnd);
	}
	mustMoveInline() {
		if (!this.$to.parent.isTextblock) return -1;
		let e = this.frontier[this.depth], t;
		if (!e.type.isTextblock || !Ey(this.$to, this.$to.depth, e.type, e.match, !1) || this.$to.depth == this.depth && (t = this.findCloseLevel(this.$to)) && t.depth == this.depth) return -1;
		let { depth: n } = this.$to, r = this.$to.after(n);
		for (; n > 1 && r == this.$to.end(--n);) ++r;
		return r;
	}
	findCloseLevel(e) {
		scan: for (let t = Math.min(this.depth, e.depth); t >= 0; t--) {
			let { match: n, type: r } = this.frontier[t], i = t < e.depth && e.end(t + 1) == e.pos + (e.depth - (t + 1)), a = Ey(e, t, r, n, i);
			if (a) {
				for (let n = t - 1; n >= 0; n--) {
					let { match: t, type: r } = this.frontier[n], i = Ey(e, n, r, t, !0);
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
		t.fit.childCount && (this.placed = Cy(this.placed, t.depth, t.fit)), e = t.move;
		for (let n = t.depth + 1; n <= e.depth; n++) {
			let t = e.node(n), r = t.type.contentMatch.fillBefore(t.content, !0, e.index(n));
			this.openFrontierNode(t.type, t.attrs, r);
		}
		return e;
	}
	openFrontierNode(e, t = null, n) {
		let r = this.frontier[this.depth];
		r.match = r.match.matchType(e), this.placed = Cy(this.placed, this.depth, V.from(e.create(t, n))), this.frontier.push({
			type: e,
			match: e.contentMatch
		});
	}
	closeFrontierNode() {
		let e = this.frontier.pop().match.fillBefore(V.empty, !0);
		e.childCount && (this.placed = Cy(this.placed, this.frontier.length, e));
	}
};
function Sy(e, t, n) {
	return t == 0 ? e.cutByIndex(n, e.childCount) : e.replaceChild(0, e.firstChild.copy(Sy(e.firstChild.content, t - 1, n)));
}
function Cy(e, t, n) {
	return t == 0 ? e.append(n) : e.replaceChild(e.childCount - 1, e.lastChild.copy(Cy(e.lastChild.content, t - 1, n)));
}
function wy(e, t) {
	for (let n = 0; n < t; n++) e = e.firstChild.content;
	return e;
}
function Ty(e, t, n) {
	if (t <= 0) return e;
	let r = e.content;
	return t > 1 && (r = r.replaceChild(0, Ty(r.firstChild, t - 1, r.childCount == 1 ? n - 1 : 0))), t > 0 && (r = e.type.contentMatch.fillBefore(r).append(r), n <= 0 && (r = r.append(e.type.contentMatch.matchFragment(r).fillBefore(V.empty, !0)))), e.copy(r);
}
function Ey(e, t, n, r, i) {
	let a = e.node(t), o = i ? e.indexAfter(t) : e.index(t);
	if (o == a.childCount && !n.compatibleContent(a.type)) return null;
	let s = r.fillBefore(a.content, !0, o);
	return s && !Dy(n, a.content, o) ? s : null;
}
function Dy(e, t, n) {
	for (let r = n; r < t.childCount; r++) if (!e.allowsMarks(t.child(r).marks)) return !0;
	return !1;
}
function Oy(e) {
	return e.spec.defining || e.spec.definingForContent;
}
function ky(e, t) {
	for (let n = 0;; n++) {
		let r = t < 0 ? e.firstChild : e.lastChild;
		if (!r || r.isAtom) return n;
		e = r.content;
	}
}
function Ay(e, t, n, r) {
	if (!r.size) return e.deleteRange(t, n);
	let i = e.doc.resolve(t), a = e.doc.resolve(n);
	if (by(i, a, r)) return e.step(new Gv(t, n, r));
	let o = Py(i, a);
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
		let t = l[e], n = Oy(t.type);
		if (n && !t.sameMarkup(i.node(Math.abs(s) - 1))) u = e;
		else if (n || !t.type.isTextblock) break;
	}
	for (let t = r.openStart; t >= 0; t--) {
		let s = (t + u + 1) % (r.openStart + 1), d = l[s];
		if (d) for (let t = 0; t < o.length; t++) {
			let l = o[(t + c) % o.length], u = !0;
			l < 0 && (u = !1, l = -l);
			let f = i.node(l - 1), p = i.index(l - 1);
			if (f.canReplaceWith(p, p, d.type, d.marks)) return e.replace(i.before(l), u ? a.after(l) : n, new U(jy(r.content, 0, r.openStart, s), s, r.openEnd));
		}
	}
	let d = e.steps.length;
	for (let s = o.length - 1; s >= 0 && (e.replace(t, n, r), !(e.steps.length > d)); s--) {
		let e = o[s];
		e < 0 || (t = i.before(e), n = a.after(e));
	}
}
function jy(e, t, n, r, i) {
	if (t < n) {
		let i = e.firstChild;
		e = e.replaceChild(0, i.copy(jy(i.content, t + 1, n, r, i)));
	}
	if (t > r) {
		let t = i.contentMatchAt(0), n = t.fillBefore(e).append(e);
		e = n.append(t.matchFragment(n).fillBefore(V.empty, !0));
	}
	return e;
}
function My(e, t, n, r) {
	if (!r.isInline && t == n && e.doc.resolve(t).parent.content.size) {
		let i = _y(e.doc, t, r.type);
		i != null && (t = n = i);
	}
	e.replaceRange(t, n, new U(V.from(r), 0, 0));
}
function Ny(e, t, n) {
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
	let a = Py(r, i);
	for (let t = 0; t < a.length; t++) {
		let n = a[t], o = t == a.length - 1;
		if (o && n == 0 || r.node(n).type.contentMatch.validEnd) return e.delete(r.start(n), i.end(n));
		if (n > 0 && (o || r.node(n - 1).canReplace(r.index(n - 1), i.indexAfter(n - 1)))) return e.delete(r.before(n), i.after(n));
	}
	for (let a = 1; a <= r.depth && a <= i.depth; a++) if (t - r.start(a) == r.depth - a && n > r.end(a) && i.end(a) - n != i.depth - a && r.start(a - 1) == i.start(a - 1) && r.node(a - 1).canReplace(r.index(a - 1), i.index(a - 1))) return e.delete(r.before(a), n);
	e.delete(t, n);
}
function Py(e, t) {
	let n = [], r = Math.min(e.depth, t.depth);
	for (let i = r; i >= 0; i--) {
		let r = e.start(i);
		if (r < e.pos - (e.depth - i) || t.end(i) > t.pos + (t.depth - i) || e.node(i).type.spec.isolating || t.node(i).type.spec.isolating) break;
		(r == t.start(i) || i == e.depth && i == t.depth && e.parent.inlineContent && t.parent.inlineContent && i && t.start(i - 1) == r - 1) && n.push(i);
	}
	return n;
}
var Fy = class e extends Iv {
	constructor(e, t, n) {
		super(), this.pos = e, this.attr = t, this.value = n;
	}
	apply(e) {
		let t = e.nodeAt(this.pos);
		if (!t) return Lv.fail("No node at attribute step's position");
		let n = Object.create(null);
		for (let e in t.attrs) n[e] = t.attrs[e];
		n[this.attr] = this.value;
		let r = t.type.create(n, null, t.marks);
		return Lv.fromReplace(e, this.pos, this.pos + 1, new U(V.from(r), 0, +!t.isLeaf));
	}
	getMap() {
		return Nv.empty;
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
Iv.jsonID("attr", Fy);
var Iy = class e extends Iv {
	constructor(e, t) {
		super(), this.attr = e, this.value = t;
	}
	apply(e) {
		let t = Object.create(null);
		for (let n in e.attrs) t[n] = e.attrs[n];
		t[this.attr] = this.value;
		let n = e.type.create(t, e.content, e.marks);
		return Lv.ok(n);
	}
	getMap() {
		return Nv.empty;
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
Iv.jsonID("docAttr", Iy);
var Ly = class extends Error {};
Ly = function e(t) {
	let n = Error.call(this, t);
	return n.__proto__ = e.prototype, n;
}, Ly.prototype = Object.create(Error.prototype), Ly.prototype.constructor = Ly, Ly.prototype.name = "TransformError";
var Ry = class {
	constructor(e) {
		this.doc = e, this.steps = [], this.docs = [], this.mapping = new Pv();
	}
	get before() {
		return this.docs.length ? this.docs[0] : this.doc;
	}
	step(e) {
		let t = this.maybeStep(e);
		if (t.failed) throw new Ly(t.failed);
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
	replace(e, t = e, n = U.empty) {
		let r = yy(this.doc, e, t, n);
		return r && this.step(r), this;
	}
	replaceWith(e, t, n) {
		return this.replace(e, t, new U(V.from(n), 0, 0));
	}
	delete(e, t) {
		return this.replace(e, t, U.empty);
	}
	insert(e, t) {
		return this.replaceWith(e, e, t);
	}
	replaceRange(e, t, n) {
		return Ay(this, e, t, n), this;
	}
	replaceRangeWith(e, t, n) {
		return My(this, e, t, n), this;
	}
	deleteRange(e, t) {
		return Ny(this, e, t), this;
	}
	lift(e, t) {
		return $v(this, e, t), this;
	}
	join(e, t = 1) {
		return gy(this, e, t), this;
	}
	wrap(e, t) {
		return iy(this, e, t), this;
	}
	setBlockType(e, t = e, n, r = null) {
		return ay(this, e, t, n, r), this;
	}
	setNodeMarkup(e, t, n = null, r) {
		return ly(this, e, t, n, r), this;
	}
	setNodeAttribute(e, t, n) {
		return this.step(new Fy(e, t, n)), this;
	}
	setDocAttribute(e, t) {
		return this.step(new Iy(e, t)), this;
	}
	addNodeMark(e, t) {
		return this.step(new Uv(e, t)), this;
	}
	removeNodeMark(e, t) {
		let n = this.doc.nodeAt(e);
		if (!n) throw RangeError("No node at position " + e);
		if (t instanceof H) t.isInSet(n.marks) && this.step(new Wv(e, t));
		else {
			let r = n.marks, i, a = [];
			for (; i = t.isInSet(r);) a.push(new Wv(e, i)), r = i.removeFromSet(r);
			for (let e = a.length - 1; e >= 0; e--) this.step(a[e]);
		}
		return this;
	}
	split(e, t = 1, n) {
		return dy(this, e, t, n), this;
	}
	addMark(e, t, n) {
		return Jv(this, e, t, n), this;
	}
	removeMark(e, t, n) {
		return Yv(this, e, t, n), this;
	}
	clearIncompatible(e, t, n) {
		return Xv(this, e, t, n), this;
	}
}, zy = Object.create(null), W = class {
	constructor(e, t, n) {
		this.$anchor = e, this.$head = t, this.ranges = n || [new By(e.min(t), e.max(t))];
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
	replace(e, t = U.empty) {
		let n = t.content.lastChild, r = null;
		for (let e = 0; e < t.openEnd; e++) r = n, n = n.lastChild;
		let i = e.steps.length, a = this.ranges;
		for (let o = 0; o < a.length; o++) {
			let { $from: s, $to: c } = a[o], l = e.mapping.slice(i);
			e.replaceRange(l.map(s.pos), l.map(c.pos), o ? U.empty : t), o == 0 && Jy(e, i, (n ? n.isInline : r && r.isTextblock) ? -1 : 1);
		}
	}
	replaceWith(e, t) {
		let n = e.steps.length, r = this.ranges;
		for (let i = 0; i < r.length; i++) {
			let { $from: a, $to: o } = r[i], s = e.mapping.slice(n), c = s.map(a.pos), l = s.map(o.pos);
			i ? e.deleteRange(c, l) : (e.replaceRangeWith(c, l, t), Jy(e, n, t.isInline ? -1 : 1));
		}
	}
	static findFrom(e, t, n = !1) {
		let r = e.parent.inlineContent ? new G(e) : qy(e.node(0), e.parent, e.pos, e.index(), t, n);
		if (r) return r;
		for (let r = e.depth - 1; r >= 0; r--) {
			let i = t < 0 ? qy(e.node(0), e.node(r), e.before(r + 1), e.index(r), t, n) : qy(e.node(0), e.node(r), e.after(r + 1), e.index(r) + 1, t, n);
			if (i) return i;
		}
		return null;
	}
	static near(e, t = 1) {
		return this.findFrom(e, t) || this.findFrom(e, -t) || new Gy(e.node(0));
	}
	static atStart(e) {
		return qy(e, e, 0, 0, 1) || new Gy(e);
	}
	static atEnd(e) {
		return qy(e, e, e.content.size, e.childCount, -1) || new Gy(e);
	}
	static fromJSON(e, t) {
		if (!t || !t.type) throw RangeError("Invalid input for Selection.fromJSON");
		let n = zy[t.type];
		if (!n) throw RangeError(`No selection type ${t.type} defined`);
		return n.fromJSON(e, t);
	}
	static jsonID(e, t) {
		if (e in zy) throw RangeError("Duplicate use of selection JSON ID " + e);
		return zy[e] = t, t.prototype.jsonID = e, t;
	}
	getBookmark() {
		return G.between(this.$anchor, this.$head).getBookmark();
	}
};
W.prototype.visible = !0;
var By = class {
	constructor(e, t) {
		this.$from = e, this.$to = t;
	}
}, Vy = !1;
function Hy(e) {
	!Vy && !e.parent.inlineContent && (Vy = !0, console.warn("TextSelection endpoint not pointing into a node with inline content (" + e.parent.type.name + ")"));
}
var G = class e extends W {
	constructor(e, t = e) {
		Hy(e), Hy(t), super(e, t);
	}
	get $cursor() {
		return this.$anchor.pos == this.$head.pos ? this.$head : null;
	}
	map(t, n) {
		let r = t.resolve(n.map(this.head));
		if (!r.parent.inlineContent) return W.near(r);
		let i = t.resolve(n.map(this.anchor));
		return new e(i.parent.inlineContent ? i : r, r);
	}
	replace(e, t = U.empty) {
		if (super.replace(e, t), t == U.empty) {
			let t = this.$from.marksAcross(this.$to);
			t && e.ensureMarks(t);
		}
	}
	eq(t) {
		return t instanceof e && t.anchor == this.anchor && t.head == this.head;
	}
	getBookmark() {
		return new Uy(this.anchor, this.head);
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
			let e = W.findFrom(n, r, !0) || W.findFrom(n, -r, !0);
			if (e) n = e.$head;
			else return W.near(n, r);
		}
		return t.parent.inlineContent || (i == 0 ? t = n : (t = (W.findFrom(t, -r, !0) || W.findFrom(t, r, !0)).$anchor, t.pos < n.pos != i < 0 && (t = n))), new e(t, n);
	}
};
W.jsonID("text", G);
var Uy = class e {
	constructor(e, t) {
		this.anchor = e, this.head = t;
	}
	map(t) {
		return new e(t.map(this.anchor), t.map(this.head));
	}
	resolve(e) {
		return G.between(e.resolve(this.anchor), e.resolve(this.head));
	}
}, K = class e extends W {
	constructor(e) {
		let t = e.nodeAfter, n = e.node(0).resolve(e.pos + t.nodeSize);
		super(e, n), this.node = t;
	}
	map(t, n) {
		let { deleted: r, pos: i } = n.mapResult(this.anchor), a = t.resolve(i);
		return r ? W.near(a) : new e(a);
	}
	content() {
		return new U(V.from(this.node), 0, 0);
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
		return new Wy(this.anchor);
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
K.prototype.visible = !1, W.jsonID("node", K);
var Wy = class e {
	constructor(e) {
		this.anchor = e;
	}
	map(t) {
		let { deleted: n, pos: r } = t.mapResult(this.anchor);
		return n ? new Uy(r, r) : new e(r);
	}
	resolve(e) {
		let t = e.resolve(this.anchor), n = t.nodeAfter;
		return n && K.isSelectable(n) ? new K(t) : W.near(t);
	}
}, Gy = class e extends W {
	constructor(e) {
		super(e.resolve(0), e.resolve(e.content.size));
	}
	replace(e, t = U.empty) {
		if (t == U.empty) {
			e.delete(0, e.doc.content.size);
			let t = W.atStart(e.doc);
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
		return Ky;
	}
};
W.jsonID("all", Gy);
var Ky = {
	map() {
		return this;
	},
	resolve(e) {
		return new Gy(e);
	}
};
function qy(e, t, n, r, i, a = !1) {
	if (t.inlineContent) return G.create(e, n);
	for (let o = r - (i > 0 ? 0 : 1); i > 0 ? o < t.childCount : o >= 0; o += i) {
		let r = t.child(o);
		if (!r.isAtom) {
			let t = qy(e, r, n + i, i < 0 ? r.childCount : 0, i, a);
			if (t) return t;
		} else if (!a && K.isSelectable(r)) return K.create(e, n - (i < 0 ? r.nodeSize : 0));
		n += r.nodeSize * i;
	}
	return null;
}
function Jy(e, t, n) {
	let r = e.steps.length - 1;
	if (r < t) return;
	let i = e.steps[r];
	if (!(i instanceof Gv || i instanceof Kv)) return;
	let a = e.mapping.maps[r], o;
	a.forEach((e, t, n, r) => {
		o ??= r;
	}), e.setSelection(W.near(e.doc.resolve(o), n));
}
var Yy = 1, Xy = 2, Zy = 4, Qy = class extends Ry {
	constructor(e) {
		super(e.doc), this.curSelectionFor = 0, this.updated = 0, this.meta = Object.create(null), this.time = Date.now(), this.curSelection = e.selection, this.storedMarks = e.storedMarks;
	}
	get selection() {
		return this.curSelectionFor < this.steps.length && (this.curSelection = this.curSelection.map(this.doc, this.mapping.slice(this.curSelectionFor)), this.curSelectionFor = this.steps.length), this.curSelection;
	}
	setSelection(e) {
		if (e.$from.doc != this.doc) throw RangeError("Selection passed to setSelection must point at the current document");
		return this.curSelection = e, this.curSelectionFor = this.steps.length, this.updated = (this.updated | Yy) & -3, this.storedMarks = null, this;
	}
	get selectionSet() {
		return (this.updated & Yy) > 0;
	}
	setStoredMarks(e) {
		return this.storedMarks = e, this.updated |= Xy, this;
	}
	ensureMarks(e) {
		return H.sameSet(this.storedMarks || this.selection.$from.marks(), e) || this.setStoredMarks(e), this;
	}
	addStoredMark(e) {
		return this.ensureMarks(e.addToSet(this.storedMarks || this.selection.$head.marks()));
	}
	removeStoredMark(e) {
		return this.ensureMarks(e.removeFromSet(this.storedMarks || this.selection.$head.marks()));
	}
	get storedMarksSet() {
		return (this.updated & Xy) > 0;
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
		return t && (e = e.mark(this.storedMarks || (n.empty ? n.$from.marks() : n.$from.marksAcross(n.$to) || H.none))), n.replaceWith(this, e), this;
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
			return this.replaceRangeWith(t, n, r.text(e, i)), !this.selection.empty && this.selection.to == t + e.length && this.setSelection(W.near(this.selection.$to)), this;
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
		return this.updated |= Zy, this;
	}
	get scrolledIntoView() {
		return (this.updated & Zy) > 0;
	}
};
function $y(e, t) {
	return !t || !e ? e : e.bind(t);
}
var eb = class {
	constructor(e, t, n) {
		this.name = e, this.init = $y(t.init, n), this.apply = $y(t.apply, n);
	}
}, tb = [
	new eb("doc", {
		init(e) {
			return e.doc || e.schema.topNodeType.createAndFill();
		},
		apply(e) {
			return e.doc;
		}
	}),
	new eb("selection", {
		init(e, t) {
			return e.selection || W.atStart(t.doc);
		},
		apply(e) {
			return e.selection;
		}
	}),
	new eb("storedMarks", {
		init(e) {
			return e.storedMarks || null;
		},
		apply(e, t, n, r) {
			return r.selection.$cursor ? e.storedMarks : null;
		}
	}),
	new eb("scrollToSelection", {
		init() {
			return 0;
		},
		apply(e, t) {
			return e.scrolledIntoView ? t + 1 : t;
		}
	})
], nb = class {
	constructor(e, t) {
		this.schema = e, this.plugins = [], this.pluginsByKey = Object.create(null), this.fields = tb.slice(), t && t.forEach((e) => {
			if (this.pluginsByKey[e.key]) throw RangeError("Adding different instances of a keyed plugin (" + e.key + ")");
			this.plugins.push(e), this.pluginsByKey[e.key] = e, e.spec.state && this.fields.push(new eb(e.key, e.spec.state, e));
		});
	}
}, rb = class e {
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
		return new Qy(this);
	}
	static create(t) {
		let n = new nb(t.doc ? t.doc.type.schema : t.schema, t.plugins), r = new e(n);
		for (let e = 0; e < n.fields.length; e++) r[n.fields[e].name] = n.fields[e].init(t, r);
		return r;
	}
	reconfigure(t) {
		let n = new nb(this.schema, t.plugins), r = n.fields, i = new e(n);
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
		let i = new nb(t.schema, t.plugins), a = new e(i);
		return i.fields.forEach((e) => {
			if (e.name == "doc") a.doc = E_.fromJSON(t.schema, n.doc);
			else if (e.name == "selection") a.selection = W.fromJSON(a.doc, n.selection);
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
function ib(e, t, n) {
	for (let r in e) {
		let i = e[r];
		i instanceof Function ? i = i.bind(t) : r == "handleDOMEvents" && (i = ib(i, t, {})), n[r] = i;
	}
	return n;
}
var q = class {
	constructor(e) {
		this.spec = e, this.props = {}, e.props && ib(e.props, this, this.props), this.key = e.key ? e.key.key : ob("plugin");
	}
	getState(e) {
		return e[this.key];
	}
}, ab = Object.create(null);
function ob(e) {
	return e in ab ? e + "$" + ++ab[e] : (ab[e] = 0, e + "$");
}
var sb = class {
	constructor(e = "key") {
		this.key = ob(e);
	}
	get(e) {
		return e.config.pluginsByKey[this.key];
	}
	getState(e) {
		return e[this.key];
	}
}, cb = (e, t) => !e.selection.empty && (t && t(e.tr.deleteSelection().scrollIntoView()), !0);
function lb(e, t) {
	let { $cursor: n } = e.selection;
	return !n || (t ? !t.endOfTextblock("backward", e) : n.parentOffset > 0) ? null : n;
}
var ub = (e, t, n) => {
	let r = lb(e, n);
	if (!r) return !1;
	let i = gb(r);
	if (!i) {
		let n = r.blockRange(), i = n && Qv(n);
		return i != null && (t && t(e.tr.lift(n, i).scrollIntoView()), !0);
	}
	let a = i.nodeBefore;
	if (Pb(e, i, t, -1)) return !0;
	if (r.parent.content.size == 0 && (mb(a, "end") || K.isSelectable(a))) for (let n = r.depth;; n--) {
		let o = yy(e.doc, r.before(n), r.after(n), U.empty);
		if (o && o.slice.size < o.to - o.from) {
			if (t) {
				let n = e.tr.step(o);
				n.setSelection(mb(a, "end") ? W.findFrom(n.doc.resolve(n.mapping.map(i.pos, -1)), -1) : K.create(n.doc, i.pos - a.nodeSize)), t(n.scrollIntoView());
			}
			return !0;
		}
		if (n == 1 || r.node(n - 1).childCount > 1) break;
	}
	return a.isAtom && i.depth == r.depth - 1 ? (t && t(e.tr.delete(i.pos - a.nodeSize, i.pos).scrollIntoView()), !0) : !1;
}, db = (e, t, n) => {
	let r = lb(e, n);
	if (!r) return !1;
	let i = gb(r);
	return i ? pb(e, i, t) : !1;
}, fb = (e, t, n) => {
	let r = _b(e, n);
	if (!r) return !1;
	let i = bb(r);
	return i ? pb(e, i, t) : !1;
};
function pb(e, t, n) {
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
	let s = yy(e.doc, i, o, U.empty);
	if (!s || s.from != i || s instanceof Gv && s.slice.size >= o - i) return !1;
	if (n) {
		let t = e.tr.step(s);
		t.setSelection(G.create(t.doc, i)), n(t.scrollIntoView());
	}
	return !0;
}
function mb(e, t, n = !1) {
	for (let r = e; r; r = t == "start" ? r.firstChild : r.lastChild) {
		if (r.isTextblock) return !0;
		if (n && r.childCount != 1) return !1;
	}
	return !1;
}
var hb = (e, t, n) => {
	let { $head: r, empty: i } = e.selection, a = r;
	if (!i) return !1;
	if (r.parent.isTextblock) {
		if (n ? !n.endOfTextblock("backward", e) : r.parentOffset > 0) return !1;
		a = gb(r);
	}
	let o = a && a.nodeBefore;
	return !o || !K.isSelectable(o) ? !1 : (t && t(e.tr.setSelection(K.create(e.doc, a.pos - o.nodeSize)).scrollIntoView()), !0);
};
function gb(e) {
	if (!e.parent.type.spec.isolating) for (let t = e.depth - 1; t >= 0; t--) {
		if (e.index(t) > 0) return e.doc.resolve(e.before(t + 1));
		if (e.node(t).type.spec.isolating) break;
	}
	return null;
}
function _b(e, t) {
	let { $cursor: n } = e.selection;
	return !n || (t ? !t.endOfTextblock("forward", e) : n.parentOffset < n.parent.content.size) ? null : n;
}
var vb = (e, t, n) => {
	let r = _b(e, n);
	if (!r) return !1;
	let i = bb(r);
	if (!i) return !1;
	let a = i.nodeAfter;
	if (Pb(e, i, t, 1)) return !0;
	if (r.parent.content.size == 0 && (mb(a, "start") || K.isSelectable(a))) {
		let n = yy(e.doc, r.before(), r.after(), U.empty);
		if (n && n.slice.size < n.to - n.from) {
			if (t) {
				let r = e.tr.step(n);
				r.setSelection(mb(a, "start") ? W.findFrom(r.doc.resolve(r.mapping.map(i.pos)), 1) : K.create(r.doc, r.mapping.map(i.pos))), t(r.scrollIntoView());
			}
			return !0;
		}
	}
	return a.isAtom && i.depth == r.depth - 1 ? (t && t(e.tr.delete(i.pos, i.pos + a.nodeSize).scrollIntoView()), !0) : !1;
}, yb = (e, t, n) => {
	let { $head: r, empty: i } = e.selection, a = r;
	if (!i) return !1;
	if (r.parent.isTextblock) {
		if (n ? !n.endOfTextblock("forward", e) : r.parentOffset < r.parent.content.size) return !1;
		a = bb(r);
	}
	let o = a && a.nodeAfter;
	return !o || !K.isSelectable(o) ? !1 : (t && t(e.tr.setSelection(K.create(e.doc, a.pos)).scrollIntoView()), !0);
};
function bb(e) {
	if (!e.parent.type.spec.isolating) for (let t = e.depth - 1; t >= 0; t--) {
		let n = e.node(t);
		if (e.index(t) + 1 < n.childCount) return e.doc.resolve(e.after(t + 1));
		if (n.type.spec.isolating) break;
	}
	return null;
}
var xb = (e, t) => {
	let n = e.selection, r = n instanceof K, i;
	if (r) {
		if (n.node.isTextblock || !fy(e.doc, n.from)) return !1;
		i = n.from;
	} else if (i = hy(e.doc, n.from, -1), i == null) return !1;
	if (t) {
		let n = e.tr.join(i);
		r && n.setSelection(K.create(n.doc, i - e.doc.resolve(i).nodeBefore.nodeSize)), t(n.scrollIntoView());
	}
	return !0;
}, Sb = (e, t) => {
	let n = e.selection, r;
	if (n instanceof K) {
		if (n.node.isTextblock || !fy(e.doc, n.to)) return !1;
		r = n.to;
	} else if (r = hy(e.doc, n.to, 1), r == null) return !1;
	return t && t(e.tr.join(r).scrollIntoView()), !0;
}, Cb = (e, t) => {
	let { $from: n, $to: r } = e.selection, i = n.blockRange(r), a = i && Qv(i);
	return a != null && (t && t(e.tr.lift(i, a).scrollIntoView()), !0);
}, wb = (e, t) => {
	let { $head: n, $anchor: r } = e.selection;
	return !n.parent.type.spec.code || !n.sameParent(r) ? !1 : (t && t(e.tr.insertText("\n").scrollIntoView()), !0);
};
function Tb(e) {
	for (let t = 0; t < e.edgeCount; t++) {
		let { type: n } = e.edge(t);
		if (n.isTextblock && !n.hasRequiredAttrs()) return n;
	}
	return null;
}
var Eb = (e, t) => {
	let { $head: n, $anchor: r } = e.selection;
	if (!n.parent.type.spec.code || !n.sameParent(r)) return !1;
	let i = n.node(-1), a = n.indexAfter(-1), o = Tb(i.contentMatchAt(a));
	if (!o || !i.canReplaceWith(a, a, o)) return !1;
	if (t) {
		let r = n.after(), i = e.tr.replaceWith(r, r, o.createAndFill());
		i.setSelection(W.near(i.doc.resolve(r), 1)), t(i.scrollIntoView());
	}
	return !0;
}, Db = (e, t) => {
	let n = e.selection, { $from: r, $to: i } = n;
	if (n instanceof Gy || r.parent.inlineContent || i.parent.inlineContent) return !1;
	let a = Tb(i.parent.contentMatchAt(i.indexAfter()));
	if (!a || !a.isTextblock) return !1;
	if (t) {
		let n = (!r.parentOffset && i.index() < i.parent.childCount ? r : i).pos, o = e.tr.insert(n, a.createAndFill());
		o.setSelection(G.create(o.doc, n + 1)), t(o.scrollIntoView());
	}
	return !0;
}, Ob = (e, t) => {
	let { $cursor: n } = e.selection;
	if (!n || n.parent.content.size) return !1;
	if (n.depth > 1 && n.after() != n.end(-1)) {
		let r = n.before();
		if (uy(e.doc, r)) return t && t(e.tr.split(r).scrollIntoView()), !0;
	}
	let r = n.blockRange(), i = r && Qv(r);
	return i != null && (t && t(e.tr.lift(r, i).scrollIntoView()), !0);
};
function kb(e) {
	return (t, n) => {
		if (t.selection instanceof K && t.selection.node.isBlock) {
			let { $from: e } = t.selection;
			return !e.parentOffset || !uy(t.doc, e.pos) ? !1 : (n && n(t.tr.split(e.pos).scrollIntoView()), !0);
		}
		if (!t.selection.$from.depth) return !1;
		let r = t.tr;
		!t.selection.empty && (t.selection instanceof G || t.selection instanceof Gy) && r.deleteSelection();
		let { $from: i } = r.selection, a = r.steps.length, o = [], s, c, l = !1, u = !1;
		for (let t = i.depth;; t--) if (i.node(t).isBlock) {
			l = i.end(t) == i.pos + (i.depth - t), u = i.start(t) == i.pos - (i.depth - t), c = Tb(i.node(t - 1).contentMatchAt(i.indexAfter(t - 1)));
			let n = e && e(i.parent, l, i);
			o.unshift(n || (l && c ? { type: c } : null)), s = t;
			break;
		} else {
			if (t == 1) return !1;
			o.unshift(null);
		}
		let d = i.pos, f = uy(r.doc, d, o.length, o);
		if (f ||= (o[0] = c ? { type: c } : null, uy(r.doc, d, o.length, o)), !f) return !1;
		if (r.split(d, o.length, o), !l && u && i.node(s).type != c) {
			let e = r.mapping.slice(a), t = e.map(i.before(s)), n = r.doc.resolve(t);
			c && i.node(s - 1).canReplaceWith(n.index(), n.index() + 1, c) && r.setNodeMarkup(e.map(i.before(s)), c);
		}
		return n && n(r.scrollIntoView()), !0;
	};
}
var Ab = kb(), jb = (e, t) => {
	let { $from: n, to: r } = e.selection, i, a = n.sharedDepth(r);
	return a != 0 && (i = n.before(a), t && t(e.tr.setSelection(K.create(e.doc, i))), !0);
}, Mb = (e, t) => (t && t(e.tr.setSelection(new Gy(e.doc))), !0);
function Nb(e, t, n) {
	let r = t.nodeBefore, i = t.nodeAfter, a = t.index();
	return !r || !i || !r.type.compatibleContent(i.type) ? !1 : !r.content.size && t.parent.canReplace(a - 1, a) ? (n && n(e.tr.delete(t.pos - r.nodeSize, t.pos).scrollIntoView()), !0) : !t.parent.canReplace(a, a + 1) || !(i.isTextblock || fy(e.doc, t.pos)) ? !1 : (n && n(e.tr.join(t.pos).scrollIntoView()), !0);
}
function Pb(e, t, n, r) {
	let i = t.nodeBefore, a = t.nodeAfter, o, s, c = i.type.spec.isolating || a.type.spec.isolating;
	if (!c && Nb(e, t, n)) return !0;
	let l = !c && t.parent.canReplace(t.index(), t.index() + 1);
	if (l && (o = (s = i.contentMatchAt(i.childCount)).findWrapping(a.type)) && s.matchType(o[0] || a.type).validEnd) {
		if (n) {
			let r = t.pos + a.nodeSize, s = V.empty;
			for (let e = o.length - 1; e >= 0; e--) s = V.from(o[e].create(null, s));
			s = V.from(i.copy(s));
			let c = e.tr.step(new Kv(t.pos - 1, r, t.pos, r, new U(s, 1, 0), o.length, !0)), l = c.doc.resolve(r + 2 * o.length);
			l.nodeAfter && l.nodeAfter.type == i.type && fy(c.doc, l.pos) && c.join(l.pos), n(c.scrollIntoView());
		}
		return !0;
	}
	let u = a.type.spec.isolating || r > 0 && c ? null : W.findFrom(t, 1), d = u && u.$from.blockRange(u.$to), f = d && Qv(d);
	if (f != null && f >= t.depth) return n && n(e.tr.lift(d, f).scrollIntoView()), !0;
	if (l && mb(a, "start", !0) && mb(i, "end")) {
		let r = i, o = [];
		for (; o.push(r), !r.isTextblock;) r = r.lastChild;
		let s = a, c = 1;
		for (; !s.isTextblock; s = s.firstChild) c++;
		if (r.canReplace(r.childCount, r.childCount, s.content)) {
			if (n) {
				let r = V.empty;
				for (let e = o.length - 1; e >= 0; e--) r = V.from(o[e].copy(r));
				n(e.tr.step(new Kv(t.pos - o.length, t.pos + a.nodeSize, t.pos + c, t.pos + a.nodeSize - c, new U(r, o.length, 0), 0, !0)).scrollIntoView());
			}
			return !0;
		}
	}
	return !1;
}
function Fb(e) {
	return function(t, n) {
		let r = t.selection, i = e < 0 ? r.$from : r.$to, a = i.depth;
		for (; i.node(a).isInline;) {
			if (!a) return !1;
			a--;
		}
		return i.node(a).isTextblock ? (n && n(t.tr.setSelection(G.create(t.doc, e < 0 ? i.start(a) : i.end(a)))), !0) : !1;
	};
}
var Ib = Fb(-1), Lb = Fb(1);
function Rb(e, t = null) {
	return function(n, r) {
		let { $from: i, $to: a } = n.selection, o = i.blockRange(a), s = o && ey(o, e, t);
		return s ? (r && r(n.tr.wrap(o, s).scrollIntoView()), !0) : !1;
	};
}
function zb(e, t = null) {
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
function Bb(...e) {
	return function(t, n, r) {
		for (let i = 0; i < e.length; i++) if (e[i](t, n, r)) return !0;
		return !1;
	};
}
var Vb = Bb(cb, ub, hb), Hb = Bb(cb, vb, yb), Ub = {
	Enter: Bb(wb, Db, Ob, Ab),
	"Mod-Enter": Eb,
	Backspace: Vb,
	"Mod-Backspace": Vb,
	"Shift-Backspace": Vb,
	Delete: Hb,
	"Mod-Delete": Hb,
	"Mod-a": Mb
}, Wb = {
	"Ctrl-h": Ub.Backspace,
	"Alt-Backspace": Ub["Mod-Backspace"],
	"Ctrl-d": Ub.Delete,
	"Ctrl-Alt-Backspace": Ub["Mod-Delete"],
	"Alt-Delete": Ub["Mod-Delete"],
	"Alt-d": Ub["Mod-Delete"],
	"Ctrl-a": Ib,
	"Ctrl-e": Lb
};
for (let e in Ub) Wb[e] = Ub[e];
typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os < "u" && os.platform && os.platform();
// node_modules/prosemirror-schema-list/dist/index.js
function Gb(e, t = null) {
	return function(n, r) {
		let { $from: i, $to: a } = n.selection, o = i.blockRange(a);
		if (!o) return !1;
		let s = r ? n.tr : null;
		return Kb(s, o, e, t) ? (r && r(s.scrollIntoView()), !0) : !1;
	};
}
function Kb(e, t, n, r = null) {
	let i = !1, a = t, o = t.$from.doc;
	if (t.depth >= 2 && t.$from.node(t.depth - 1).type.compatibleContent(n) && t.startIndex == 0) {
		if (t.$from.index(t.depth - 1) == 0) return !1;
		let e = o.resolve(t.start - 2);
		a = new w_(e, e, t.depth), t.endIndex < t.parent.childCount && (t = new w_(t.$from, o.resolve(t.$to.end(t.depth)), t.depth)), i = !0;
	}
	let s = ey(a, n, r, t);
	return s ? (e && qb(e, t, s, i, n), !0) : !1;
}
function qb(e, t, n, r, i) {
	let a = V.empty;
	for (let e = n.length - 1; e >= 0; e--) a = V.from(n[e].type.create(n[e].attrs, a));
	e.step(new Kv(t.start - (r ? 2 : 0), t.end, t.start, t.end, new U(a, 0, 0), n.length, !0));
	let o = 0;
	for (let e = 0; e < n.length; e++) n[e].type == i && (o = e + 1);
	let s = n.length - o, c = t.start + n.length - (r ? 2 : 0), l = t.parent;
	for (let n = t.startIndex, r = t.endIndex, i = !0; n < r; n++, i = !1) !i && s && uy(e.doc, c, s) && (e.split(c, s), c += 2 * s), c += l.child(n).nodeSize;
	return e;
}
function Jb(e, t) {
	return e instanceof J_ ? t == e : e.indexOf(t) > -1;
}
function Yb(e) {
	return function(t, n) {
		let { $from: r, $to: i } = t.selection, a = r.blockRange(i, (t) => t.childCount > 0 && Jb(e, t.firstChild.type));
		return a ? n ? Jb(e, r.node(a.depth - 1).type) ? Xb(t, n, a) : Zb(t, n, a) : !0 : !1;
	};
}
function Xb(e, t, n) {
	let r = e.tr, i = n.end, a = n.$to.end(n.depth), o = n.parent.child(n.endIndex - 1).type;
	i < a && (r.step(new Kv(i - 1, a, i, a, new U(V.from(o.create(null, n.parent.copy())), 1, 0), 1, !0)), n = new w_(r.doc.resolve(n.$from.pos), r.doc.resolve(a), n.depth));
	let s = Qv(n);
	if (s == null) return !1;
	r.lift(n, s);
	let c = r.doc.resolve(r.mapping.map(i, -1) - 1);
	return fy(r.doc, c.pos) && c.nodeBefore.type == c.nodeAfter.type && r.join(c.pos), t(r.scrollIntoView()), !0;
}
function Zb(e, t, n) {
	let r = e.tr, i = n.parent;
	for (let e = n.end, t = n.endIndex - 1, a = n.startIndex; t > a; t--) e -= i.child(t).nodeSize, r.delete(e - 1, e + 1);
	let a = r.doc.resolve(n.start), o = a.nodeAfter;
	if (r.mapping.map(n.end) != n.start + a.nodeAfter.nodeSize) return !1;
	let s = n.startIndex == 0, c = n.endIndex == i.childCount, l = a.node(-1), u = a.index(-1);
	if (!l.canReplace(u + +!s, u + 1, o.content.append(c ? V.empty : V.from(i)))) return !1;
	let d = a.pos, f = d + o.nodeSize;
	return r.step(new Kv(d - +!!s, f + +!!c, d + 1, f - 1, new U((s ? V.empty : V.from(i.copy(V.empty))).append(c ? V.empty : V.from(i.copy(V.empty))), +!s, +!c), +!s)), t(r.scrollIntoView()), !0;
}
function Qb(e) {
	return function(t, n) {
		let { $from: r, $to: i } = t.selection, a = r.blockRange(i, (t) => t.childCount > 0 && Jb(e, t.firstChild.type));
		if (!a) return !1;
		let o = a.startIndex;
		if (o == 0) return !1;
		let s = a.parent, c = s.child(o - 1);
		if (!Jb(e, c.type)) return !1;
		if (n) {
			let e = c.lastChild && c.lastChild.type == s.type, r = V.from(e ? c.lastChild.lastChild.type.create() : null), i = new U(V.from(c.type.create(null, V.from(s.type.create(null, r)))), e ? 3 : 1, 0), o = a.start, l = a.end;
			n(t.tr.step(new Kv(o - (e ? 3 : 1), l, o, l, i, 1, !0)).scrollIntoView());
		}
		return !0;
	};
}
// node_modules/prosemirror-view/dist/index.js
var $b = function(e) {
	for (var t = 0;; t++) if (e = e.previousSibling, !e) return t;
}, ex = function(e) {
	let t = e.assignedSlot || e.parentNode;
	return t && t.nodeType == 11 ? t.host : t;
}, tx = null, nx = function(e, t, n) {
	let r = tx ||= document.createRange();
	return r.setEnd(e, n ?? e.nodeValue.length), r.setStart(e, t || 0), r;
}, rx = function() {
	tx = null;
}, ix = function(e, t, n, r) {
	return n && (ox(e, t, n, r, -1) || ox(e, t, n, r, 1));
}, ax = /^(img|br|input|textarea|hr)$/i;
function ox(e, t, n, r, i) {
	for (;;) {
		if (e == n && t == r) return !0;
		if (t == (i < 0 ? 0 : sx(e))) {
			let n = e.parentNode;
			if (!n || !J(n) || px(e) || ax.test(e.nodeName) || e.contentEditable == "false") return !1;
			t = $b(e) + (i < 0 ? 0 : 1), e = n;
		} else if (J(e)) {
			let n = e.childNodes[t + (i < 0 ? -1 : 0)];
			if (J(n) && n.contentEditable == "false") {
				if (n.pmViewDesc?.ignoreForSelection) t += i;
				else return !1;
			} else e = n, t = i < 0 ? sx(e) : 0;
		} else return !1;
	}
}
function sx(e) {
	return e.nodeType == 3 ? e.nodeValue.length : e.childNodes.length;
}
function J(e) {
	return e.nodeType == 1;
}
function cx(e) {
	return e.nodeType == 3;
}
function lx(e, t) {
	return t ? e.contains(J(t) ? t : t.parentNode) : !1;
}
function ux(e, t) {
	for (;;) {
		if (cx(e) && t) return e;
		if (J(e) && t > 0) {
			if (e.contentEditable == "false") return null;
			e = e.childNodes[t - 1], t = sx(e);
		} else if (e.parentNode && !px(e)) t = $b(e), e = e.parentNode;
		else return null;
	}
}
function dx(e, t) {
	for (;;) {
		if (cx(e) && t < e.nodeValue.length) return e;
		if (J(e) && t < e.childNodes.length) {
			if (e.contentEditable == "false") return null;
			e = e.childNodes[t], t = 0;
		} else if (e.parentNode && !px(e)) t = $b(e) + 1, e = e.parentNode;
		else return null;
	}
}
function fx(e, t, n) {
	for (let r = t == 0, i = t == sx(e); r || i;) {
		if (e == n) return !0;
		let t = $b(e);
		if (e = e.parentNode, !e) return !1;
		r &&= t == 0, i &&= t == sx(e);
	}
}
function px(e) {
	let t;
	for (let n = e; n && !(t = n.pmViewDesc); n = n.parentNode);
	return t && t.node && t.node.isBlock && (t.dom == e || t.contentDOM == e);
}
var mx = function(e) {
	return e.focusNode && ix(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset);
};
function hx(e, t) {
	let n = document.createEvent("Event");
	return n.initEvent("keydown", !0, !0), n.keyCode = e, n.key = n.code = t, n;
}
function gx(e) {
	let t = e.activeElement;
	for (; t && t.shadowRoot;) t = t.shadowRoot.activeElement;
	return t;
}
function _x(e, t, n) {
	if (e.caretPositionFromPoint) try {
		let r = e.caretPositionFromPoint(t, n);
		if (r) return {
			node: r.offsetNode,
			offset: Math.min(sx(r.offsetNode), r.offset)
		};
	} catch {}
	if (e.caretRangeFromPoint) {
		let r = e.caretRangeFromPoint(t, n);
		if (r) return {
			node: r.startContainer,
			offset: Math.min(sx(r.startContainer), r.startOffset)
		};
	}
}
var vx = typeof navigator < "u" ? navigator : null, yx = typeof document < "u" ? document : null, bx = vx && vx.userAgent || "", xx = /Edge\/(\d+)/.exec(bx), Sx = /MSIE \d/.exec(bx), Cx = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(bx), wx = !!(Sx || Cx || xx), Tx = Sx ? document.documentMode : Cx ? +Cx[1] : xx ? +xx[1] : 0, Ex = !wx && /gecko\/(\d+)/i.test(bx);
Ex && +(/Firefox\/(\d+)/.exec(bx) || [0, 0])[1];
var Dx = !wx && /Chrome\/(\d+)/.exec(bx), Ox = !!Dx, kx = Dx ? +Dx[1] : 0, Ax = !wx && !!vx && /Apple Computer/.test(vx.vendor), jx = Ax && (/Mobile\/\w+/.test(bx) || !!vx && vx.maxTouchPoints > 2), Mx = jx || (vx ? /Mac/.test(vx.platform) : !1), Nx = vx ? /Win/.test(vx.platform) : !1, Px = /Android \d/.test(bx), Fx = !!yx && "webkitFontSmoothing" in yx.documentElement.style, Ix = Fx ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
function Lx(e) {
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
function Rx(e, t) {
	return typeof e == "number" ? e : e[t];
}
function zx(e) {
	let t = e.getBoundingClientRect(), n = t.width / e.offsetWidth || 1, r = t.height / e.offsetHeight || 1;
	return {
		left: t.left,
		right: t.left + e.clientWidth * n,
		top: t.top,
		bottom: t.top + e.clientHeight * r
	};
}
function Bx(e, t, n) {
	if (!tS(t) && t.left == 0) return;
	let r = e.someProp("scrollThreshold") || 0, i = e.someProp("scrollMargin") || 5, a = e.dom.ownerDocument;
	for (let o = n || e.dom; o;) {
		if (!J(o)) {
			o = ex(o);
			continue;
		}
		let e = o == a.body, n = e ? Lx(a) : zx(o), s = 0, c = 0;
		if (t.top < n.top + Rx(r, "top") ? c = -(n.top - t.top + Rx(i, "top")) : t.bottom > n.bottom - Rx(r, "bottom") && (c = t.bottom - t.top > n.bottom - n.top ? t.top + Rx(i, "top") - n.top : t.bottom - n.bottom + Rx(i, "bottom")), t.left < n.left + Rx(r, "left") ? s = -(n.left - t.left + Rx(i, "left")) : t.right > n.right - Rx(r, "right") && (s = t.right - n.right + Rx(i, "right")), s || c) {
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
		o = l == "absolute" ? o.offsetParent : ex(o);
	}
}
function Vx(e) {
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
		stack: Hx(e.dom)
	};
}
function Hx(e) {
	let t = [], n = e.ownerDocument;
	for (let r = e; r && (t.push({
		dom: r,
		top: r.scrollTop,
		left: r.scrollLeft
	}), e != n); r = ex(r));
	return t;
}
function Ux({ refDOM: e, refTop: t, stack: n }) {
	let r = e ? e.getBoundingClientRect().top : 0;
	Wx(n, r == 0 ? 0 : r - t);
}
function Wx(e, t) {
	for (let n = 0; n < e.length; n++) {
		let { dom: r, top: i, left: a } = e[n];
		r.scrollTop != i + t && (r.scrollTop = i + t), r.scrollLeft != a && (r.scrollLeft = a);
	}
}
var Gx = null;
function Kx(e) {
	if (e.setActive) return e.setActive();
	if (Gx) return e.focus(Gx);
	let t = Hx(e);
	e.focus(Gx == null ? { get preventScroll() {
		return Gx = { preventScroll: !0 }, !0;
	} } : void 0), Gx || (Gx = !1, Wx(t, 0));
}
function qx(e, t) {
	let n, r = 2e8, i, a = 0, o = t.top, s = t.top, c, l;
	for (let u = e.firstChild, d = 0; u; u = u.nextSibling, d++) {
		let e;
		if (J(u)) e = u.getClientRects();
		else if (cx(u)) e = nx(u).getClientRects();
		else continue;
		for (let f = 0; f < e.length; f++) {
			let p = e[f];
			if (p.top <= o && p.bottom >= s) {
				o = Math.max(p.bottom, o), s = Math.min(p.top, s);
				let e = p.left > t.left ? p.left - t.left : p.right < t.left ? t.left - p.right : 0;
				if (e < r) {
					n = u, r = e, i = e && cx(n) ? {
						left: p.right < t.left ? p.right : p.left,
						top: t.top
					} : t, J(u) && e && (a = d + +(t.left >= (p.left + p.right) / 2));
					continue;
				}
			} else p.top > t.top && !c && p.left <= t.left && p.right >= t.left && (c = u, l = {
				left: Math.max(p.left, Math.min(p.right, t.left)),
				top: p.top
			});
			!n && (t.left >= p.right && t.top >= p.top || t.left >= p.left && t.top >= p.bottom) && (a = d + 1);
		}
	}
	return !n && c && (n = c, i = l, r = 0), n && cx(n) ? Jx(n, i) : !n || r ? {
		node: e,
		offset: a
	} : qx(n, i);
}
function Jx(e, t) {
	let n = e.nodeValue.length, r = document.createRange(), i;
	for (let a = 0; a < n; a++) {
		r.setEnd(e, a + 1), r.setStart(e, a);
		let n = nS(r, 1);
		if (n.top != n.bottom && Yx(t, n)) {
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
function Yx(e, t) {
	return e.left >= t.left - 1 && e.left <= t.right + 1 && e.top >= t.top - 1 && e.top <= t.bottom + 1;
}
function Xx(e, t) {
	let n = e.parentNode;
	return n && /^li$/i.test(n.nodeName) && t.left < e.getBoundingClientRect().left ? n : e;
}
function Zx(e, t, n) {
	let { node: r, offset: i } = qx(t, n), a = -1;
	if (J(r) && !r.firstChild) {
		let e = r.getBoundingClientRect();
		a = e.left != e.right && n.left > (e.left + e.right) / 2 ? 1 : -1;
	}
	return e.docView.posFromDOM(r, i, a);
}
function Qx(e, t, n, r) {
	let i = -1;
	for (let n = t, a = !1; n != e.dom;) {
		let t = e.docView.nearestDesc(n, !0), o;
		if (!t) return null;
		if (J(t.dom) && (t.node.isBlock && t.parent || !t.contentDOM) && ((o = t.dom.getBoundingClientRect()).width || o.height) && (t.node.isBlock && t.parent && !/^T(R|BODY|HEAD|FOOT)$/.test(t.dom.nodeName) && (!a && o.left > r.left || o.top > r.top ? i = t.posBefore : (!a && o.right < r.left || o.bottom < r.top) && (i = t.posAfter), a = !0), !t.contentDOM && i < 0 && !t.node.isText)) return (t.node.isBlock ? r.top < (o.top + o.bottom) / 2 : r.left < (o.left + o.right) / 2) ? t.posBefore : t.posAfter;
		n = t.dom.parentNode;
	}
	return i > -1 ? i : e.docView.posFromDOM(t, n, -1);
}
function $x(e, t, n) {
	let r = e.childNodes.length;
	if (r && n.top < n.bottom) for (let i = Math.max(0, Math.min(r - 1, Math.floor(r * (t.top - n.top) / (n.bottom - n.top)) - 2)), a = i;;) {
		let n = e.childNodes[a];
		if (J(n)) {
			let e = n.getClientRects();
			for (let r = 0; r < e.length; r++) {
				let i = e[r];
				if (Yx(t, i)) return $x(n, t, i);
			}
		}
		if ((a = (a + 1) % r) == i) break;
	}
	return e;
}
function eS(e, t) {
	let n = e.dom.ownerDocument, r, i = 0, a = _x(n, t.left, t.top);
	a && ({node: r, offset: i} = a);
	let o = (e.root.elementFromPoint ? e.root : n).elementFromPoint(t.left, t.top), s;
	if (!o || !e.dom.contains(o)) {
		let n = e.dom.getBoundingClientRect();
		if (!Yx(t, n) || (o = $x(e.dom, t, n), !o)) return null;
	}
	if (Ax) for (let e = o; r && e; e = ex(e)) e.draggable && (r = void 0);
	if (o = Xx(o, t), r) {
		if (Ex && J(r) && (i = Math.min(i, r.childNodes.length), i < r.childNodes.length)) {
			let e = r.childNodes[i], n;
			e.nodeName == "IMG" && (n = e.getBoundingClientRect()).right <= t.left && n.bottom > t.top && i++;
		}
		let n;
		Fx && i && J(r) && J(n = r.childNodes[i - 1]) && n.contentEditable == "false" && n.getBoundingClientRect().top >= t.top && i--, r == e.dom && i == r.childNodes.length - 1 && J(r.lastChild) && t.top > r.lastChild.getBoundingClientRect().bottom ? s = e.state.doc.content.size : i != 0 && J(r) && r.childNodes[i - 1].nodeName == "BR" || (s = Qx(e, r, i, t));
	}
	s ??= Zx(e, o, t);
	let c = e.docView.nearestDesc(o, !0);
	return {
		pos: s,
		inside: c ? c.posAtStart - c.border : -1
	};
}
function tS(e) {
	return e.top < e.bottom || e.left < e.right;
}
function nS(e, t) {
	let n = e.getClientRects();
	if (n.length) {
		let e = n[t < 0 ? 0 : n.length - 1];
		if (tS(e)) return e;
	}
	return Array.prototype.find.call(n, tS) || e.getBoundingClientRect();
}
var rS = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
function iS(e, t, n) {
	let { node: r, offset: i, atom: a } = e.docView.domFromPos(t, n < 0 ? -1 : 1), o = Fx || Ex;
	if (cx(r)) {
		if (o && (rS.test(r.nodeValue) || (n < 0 ? !i : i == r.nodeValue.length))) {
			let e = nS(nx(r, i, i), n);
			if (Ex && i && /\s/.test(r.nodeValue[i - 1]) && i < r.nodeValue.length) {
				let t = nS(nx(r, i - 1, i - 1), -1);
				if (t.top == e.top) {
					let n = nS(nx(r, i, i + 1), -1);
					if (n.top != e.top) return aS(n, n.left < t.left);
				}
			}
			return e;
		}
		{
			let e = i, t = i, a = n < 0 ? 1 : -1;
			return n < 0 && !i ? (t++, a = -1) : n >= 0 && i == r.nodeValue.length ? (e--, a = 1) : n < 0 ? e-- : t++, aS(nS(nx(r, e, t), a), a < 0);
		}
	}
	if (!e.state.doc.resolve(t - (a || 0)).parent.inlineContent) {
		if (a == null && i && (n < 0 || i == sx(r))) {
			let e = r.childNodes[i - 1];
			if (J(e)) return oS(e.getBoundingClientRect(), !1);
		}
		if (a == null && i < sx(r)) {
			let e = r.childNodes[i];
			if (J(e)) return oS(e.getBoundingClientRect(), !0);
		}
		return oS(r.getBoundingClientRect(), n >= 0);
	}
	if (a == null && i && (n < 0 || i == sx(r))) {
		let e = r.childNodes[i - 1], t = cx(e) ? nx(e, sx(e) - +!o) : J(e) && (e.nodeName != "BR" || !e.nextSibling) ? e : null;
		if (t) return aS(nS(t, 1), !1);
	}
	if (a == null && i < sx(r)) {
		let e = r.childNodes[i];
		for (; e.pmViewDesc && e.pmViewDesc.ignoreForCoords;) e = e.nextSibling;
		let t = e ? cx(e) ? nx(e, 0, +!o) : J(e) ? e : null : null;
		if (t) return aS(nS(t, -1), !0);
	}
	return aS(nS(cx(r) ? nx(r) : r, -n), n >= 0);
}
function aS(e, t) {
	if (e.width == 0) return e;
	let n = t ? e.left : e.right;
	return {
		top: e.top,
		bottom: e.bottom,
		left: n,
		right: n
	};
}
function oS(e, t) {
	if (e.height == 0) return e;
	let n = t ? e.top : e.bottom;
	return {
		top: n,
		bottom: n,
		left: e.left,
		right: e.right
	};
}
function sS(e, t, n) {
	let r = e.state, i = e.root.activeElement;
	r != t && e.updateState(t), i != e.dom && e.focus();
	try {
		return n();
	} finally {
		r != t && e.updateState(r), i != e.dom && i && i.focus();
	}
}
function cS(e, t, n) {
	let r = t.selection, i = n == "up" ? r.$from : r.$to;
	return sS(e, t, () => {
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
		let r = iS(e, i.pos, 1);
		for (let e = t.firstChild; e; e = e.nextSibling) {
			let t;
			if (J(e)) t = e.getClientRects();
			else if (cx(e)) t = nx(e, 0, e.nodeValue.length).getClientRects();
			else continue;
			for (let e = 0; e < t.length; e++) {
				let i = t[e];
				if (i.bottom > i.top + 1 && (n == "up" ? r.top - i.top > (i.bottom - r.top) * 2 : i.bottom - r.bottom > (r.bottom - i.top) * 2)) return !1;
			}
		}
		return !0;
	});
}
var lS = /[\u0590-\u08ac]/;
function uS(e, t, n) {
	let { $head: r } = t.selection;
	if (!r.parent.isTextblock) return !1;
	let i = r.parentOffset, a = !i, o = i == r.parent.content.size, s = e.domSelection();
	return s ? !lS.test(r.parent.textContent) || !s.modify ? n == "left" || n == "backward" ? a : o : sS(e, t, () => {
		let { focusNode: t, focusOffset: i, anchorNode: a, anchorOffset: o } = e.domSelectionRange(), c = s.caretBidiLevel;
		s.modify("move", n, "character");
		let l = r.depth ? e.docView.domAfterPos(r.before()) : e.dom, { focusNode: u, focusOffset: d } = e.domSelectionRange(), f = u && !lx(l, u) || t == u && i == d;
		try {
			s.collapse(a, o), t && (t != a || i != o) && s.extend && s.extend(t, i);
		} catch {}
		return c != null && (s.caretBidiLevel = c), f;
	}) : r.pos == r.start() || r.pos == r.end();
}
var dS = null, fS = null, pS = !1;
function mS(e, t, n) {
	return dS == t && fS == n ? pS : (dS = t, fS = n, pS = n == "up" || n == "down" ? cS(e, t, n) : uS(e, t, n));
}
var hS = 0, gS = 1, _S = 2, vS = 3, yS = class {
	constructor(e, t, n, r) {
		this.parent = e, this.children = t, this.dom = n, this.contentDOM = r, this.dirty = hS, n.pmViewDesc = this;
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
		if (this.contentDOM && lx(this.contentDOM, e)) {
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
		if (e == this.dom && this.contentDOM) r = t > $b(this.contentDOM);
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
				if (n && (a = i.nodeDOM) && !(J(a) ? lx(a, e) : a == e)) n = !1;
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
			if (e.size || !(e instanceof ES || e instanceof bS && e.side >= 0)) break;
		}
		if (t <= 0) {
			let e, r = !0;
			for (; e = n ? this.children[n - 1] : null, e && e.dom.parentNode != this.contentDOM; n--, r = !1);
			return e && t && r && !e.border && !e.domAtom ? e.domFromPos(e.size, t) : {
				node: this.contentDOM,
				offset: e ? $b(e.dom) + 1 : 0
			};
		}
		{
			let e, r = !0;
			for (; e = n < this.children.length ? this.children[n] : null, e && e.dom.parentNode != this.contentDOM; n++, r = !1);
			return e && r && !e.border && !e.domAtom ? e.domFromPos(0, t) : {
				node: this.contentDOM,
				offset: e ? $b(e.dom) : this.contentDOM.childNodes.length
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
						r = $b(n.dom) + 1;
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
						i = $b(n.dom);
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
		if (!J(t) || n == t.childNodes.length) throw RangeError("No node after pos " + e);
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
		if ((Ex || Ax) && e == t) {
			let { node: e, offset: t } = o;
			if (cx(e)) {
				if (u = !!(t && e.nodeValue[t - 1] == "\n"), u && t == e.nodeValue.length) for (let t = e, n; t; t = t.parentNode) {
					if (n = t.nextSibling) {
						n.nodeName == "BR" && (o = s = {
							node: n.parentNode,
							offset: $b(n) + 1
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
		if (Ex && l.focusNode && l.focusNode != s.node && J(l.focusNode)) {
			let e = l.focusNode.childNodes[l.focusOffset];
			e && e.contentEditable == "false" && (r = !0);
		}
		if (!(r || u && Ax) && ix(o.node, o.offset, l.anchorNode, l.anchorOffset) && ix(s.node, s.offset, l.focusNode, l.focusOffset)) return;
		let d = !1;
		if ((c.extend || e == t) && !(u && Ex)) {
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
					this.dirty = e == n || t == a ? _S : gS, e == r && t == o && (i.contentLost || i.dom.parentNode != this.contentDOM) ? i.dirty = vS : i.markDirty(e - r, t - r);
					return;
				}
				i.dirty = i.dom == i.contentDOM && i.dom.parentNode == this.contentDOM && !i.children.length ? _S : vS;
			}
			n = a;
		}
		this.dirty = _S;
	}
	markParentsDirty() {
		let e = 1;
		for (let t = this.parent; t; t = t.parent, e++) {
			let n = e == 1 ? _S : gS;
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
}, bS = class extends yS {
	constructor(e, t, n, r) {
		let i, a = t.type.toDOM;
		if (typeof a == "function" && (a = a(n, () => {
			if (!i) return r;
			if (i.parent) return i.parent.posBeforeChild(i);
		})), !t.type.spec.raw) {
			let e = J(a) ? a : document.createElement("span");
			e != a && (e.appendChild(a), a = e), e.hasAttribute("contenteditable") || (e.contentEditable = "false"), e.classList.add("ProseMirror-widget");
		}
		super(e, [], a, null), this.widget = t, this.widget = t, i = this;
	}
	matchesWidget(e) {
		return this.dirty == hS && e.type.eq(this.widget.type);
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
}, xS = class extends yS {
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
}, SS = class e extends yS {
	constructor(e, t, n, r, i) {
		super(e, [], n, r), this.mark = t, this.spec = i;
	}
	static create(t, n, r, i) {
		let a = i.nodeViews[n.type.name], o = a && a(n, i, r);
		return o && o.dom || (o = gv.renderSpec(document, n.type.spec.toDOM(n, r), null, n.attrs)), new e(t, n, o.dom, o.contentDOM || o.dom, o);
	}
	parseRule() {
		return this.dirty & vS || this.mark.type.spec.reparseInView ? null : {
			mark: this.mark.type.name,
			attrs: this.mark.attrs,
			contentElement: this.contentDOM
		};
	}
	matchesMark(e) {
		return this.dirty != vS && this.mark.eq(e);
	}
	markDirty(e, t) {
		if (super.markDirty(e, t), this.dirty != hS) {
			let e = this.parent;
			for (; !e.node;) e = e.parent;
			e.dirty < this.dirty && (e.dirty = this.dirty), this.dirty = hS;
		}
	}
	slice(t, n, r) {
		let i = e.create(this.parent, this.mark, !0, r), a = this.children, o = this.size;
		n < o && (a = US(a, n, o, r)), t > 0 && (a = US(a, 0, t, r));
		for (let e = 0; e < a.length; e++) a[e].parent = i;
		return i.children = a, i;
	}
	ignoreMutation(e) {
		return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e);
	}
	destroy() {
		this.spec.destroy && this.spec.destroy(), super.destroy();
	}
}, CS = class e extends yS {
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
			else if (!cx(u)) throw RangeError("Text must be rendered as a DOM text node");
		} else if (!u) {
			let e = gv.renderSpec(document, n.type.spec.toDOM(n), null, n.attrs);
			({dom: u, contentDOM: d} = e);
		}
		!d && !n.isText && u.nodeName != "BR" && (u.hasAttribute("contenteditable") || (u.contentEditable = "false"), n.type.spec.draggable && (u.draggable = !0));
		let f = u;
		return u = PS(u, r, n), l ? c = new DS(t, n, r, i, u, d || null, f, l) : n.isText ? new TS(t, n, r, i, u, f) : new e(t, n, r, i, u, d || null, f);
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
				let n = e && e.find((t) => J(t) && e.indexOf(t.parentNode) < 0 && this.dom.contains(t));
				n ? t.contentElement = n : t.getContent = () => V.empty;
			}
		}
		return t;
	}
	matchesNode(e, t, n) {
		return this.dirty == hS && e.eq(this.node) && FS(t, this.outerDeco) && n.eq(this.innerDeco);
	}
	get size() {
		return this.node.nodeSize;
	}
	get border() {
		return +!this.node.isLeaf;
	}
	updateChildren(e, t) {
		let n = this.node.inlineContent, r = t, i = e.composing ? this.localCompositionInfo(e, t) : null, a = i && i.pos > -1 ? i : null, o = i && i.pos < 0, s = new LS(this, a && a.node, e), c = this.node.inlineContent, l = c && this.node.isBlock;
		BS(this.node, this.innerDeco, (t, i, a) => {
			t.spec.marks ? s.syncToMarks(t.spec.marks, n, e, i) : t.type.side >= 0 && !a && s.syncToMarks(i == this.node.childCount ? H.none : this.node.child(i).marks, n, e, i), s.placeWidget(t, e, r);
		}, (t, a, u, d) => {
			s.syncToMarks(t.marks, n, e, d), l && t.isAtom && !t.isText && s.addHackNode("IMG", s.top);
			let f;
			s.findNodeMatch(t, a, u, d) || o && e.state.selection.from > r && e.state.selection.to < r + t.nodeSize && (f = s.findIndexWithChild(i.node)) > -1 && s.updateNodeAt(t, a, u, f, e) || s.updateNextNode(t, a, u, e, d, r) || s.addNode(t, a, u, e, r), r += t.nodeSize, c && (l = t.isAtom && !t.isText);
		}), s.syncToMarks([], n, e, 0), this.node.isTextblock && s.addTextblockHacks(), s.destroyRest(), (s.changed || this.dirty == _S) && (a && this.protectLocalComposition(e, a), OS(this.contentDOM, this.children, e), jx && VS(this.dom));
	}
	localCompositionInfo(e, t) {
		let { from: n, to: r } = e.state.selection;
		if (!(e.state.selection instanceof G) || n < t || r > t + this.node.content.size) return null;
		let i = e.input.compositionNode;
		if (!i || !this.dom.contains(i.parentNode)) return null;
		if (this.node.inlineContent) {
			let e = i.nodeValue, a = HS(this.node.content, e, n - t, r - t);
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
		let a = new xS(this, i, t, r);
		e.input.compositionNodes.push(a), this.children = US(this.children, n, n + r.length, e, a);
	}
	update(e, t, n, r) {
		return this.dirty == vS || !e.sameMarkup(this.node) ? !1 : (this.updateInner(e, t, n, r), !0);
	}
	updateInner(e, t, n, r) {
		this.updateOuterDeco(t), this.node = e, this.innerDeco = n, this.contentDOM && this.updateChildren(r, this.posAtStart), this.dirty = hS;
	}
	updateOuterDeco(e) {
		if (FS(e, this.outerDeco)) return;
		let t = !J(this.nodeDOM), n = this.dom;
		this.dom = MS(this.dom, this.nodeDOM, jS(this.outerDeco, this.node, t), jS(e, this.node, t)), this.dom != n && (n.pmViewDesc = void 0, this.dom.pmViewDesc = this), this.outerDeco = e;
	}
	selectNode() {
		J(this.nodeDOM) && (this.nodeDOM.classList.add("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && (this.nodeDOM.draggable = !0));
	}
	deselectNode() {
		J(this.nodeDOM) && (this.nodeDOM.classList.remove("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && this.nodeDOM.removeAttribute("draggable"));
	}
	get domAtom() {
		return this.node.isAtom;
	}
};
function wS(e, t, n, r, i) {
	PS(r, t, e);
	let a = new CS(void 0, e, t, n, r, r, r);
	return a.contentDOM && a.updateChildren(i, 0), a;
}
var TS = class e extends CS {
	constructor(e, t, n, r, i, a) {
		super(e, t, n, r, i, null, a);
	}
	parseRule() {
		let e = this.nodeDOM.parentNode;
		for (; e && e != this.dom && !e.pmIsDeco;) e = e.parentNode;
		return { skip: e || !0 };
	}
	update(e, t, n, r) {
		return this.dirty == vS || this.dirty != hS && !this.inParent() || !e.sameMarkup(this.node) ? !1 : (this.updateOuterDeco(t), (this.dirty != hS || e.text != this.node.text) && e.text != this.nodeDOM.nodeValue && (this.nodeDOM.nodeValue = e.text, r.trackWrites == this.nodeDOM && (r.trackWrites = null)), this.node = e, this.dirty = hS, !0);
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
		super.markDirty(e, t), this.dom != this.nodeDOM && (e == 0 || t == this.nodeDOM.nodeValue.length) && (this.dirty = vS);
	}
	get domAtom() {
		return !1;
	}
	isText(e) {
		return this.node.text == e;
	}
}, ES = class extends yS {
	parseRule() {
		return { ignore: !0 };
	}
	matchesHack(e) {
		return this.dirty == hS && this.dom.nodeName == e;
	}
	get domAtom() {
		return !0;
	}
	get ignoreForCoords() {
		return this.dom.nodeName == "IMG";
	}
}, DS = class extends CS {
	constructor(e, t, n, r, i, a, o, s) {
		super(e, t, n, r, i, a, o), this.spec = s;
	}
	update(e, t, n, r) {
		if (this.dirty == vS) return !1;
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
function OS(e, t, n) {
	let r = e.firstChild, i = !1;
	for (let a = 0; a < t.length; a++) {
		let o = t[a], s = o.dom;
		if (s.parentNode == e) {
			for (; s != r;) r = IS(r), i = !0;
			r = r.nextSibling;
		} else i = !0, e.insertBefore(s, r);
		if (o instanceof SS) {
			let t = r ? r.previousSibling : e.lastChild;
			OS(o.contentDOM, o.children, n), r = t ? t.nextSibling : e.firstChild;
		}
	}
	for (; r;) r = IS(r), i = !0;
	i && n.trackWrites == e && (n.trackWrites = null);
}
var kS = function(e) {
	e && (this.nodeName = e);
};
kS.prototype = Object.create(null);
var AS = [new kS()];
function jS(e, t, n) {
	if (e.length == 0) return AS;
	let r = n ? AS[0] : new kS(), i = [r];
	for (let a = 0; a < e.length; a++) {
		let o = e[a].type.attrs;
		if (o) {
			o.nodeName && i.push(r = new kS(o.nodeName));
			for (let e in o) {
				let a = o[e];
				a != null && (n && i.length == 1 && i.push(r = new kS(t.isInline ? "span" : "div")), e == "class" ? r.class = (r.class ? r.class + " " : "") + a : e == "style" ? r.style = (r.style ? r.style + ";" : "") + a : e != "nodeName" && (r[e] = a));
			}
		}
	}
	return i;
}
function MS(e, t, n, r) {
	if (n == AS && r == AS) return t;
	let i = t;
	for (let t = 0; t < r.length; t++) {
		let a = r[t], o = n[t];
		if (t) {
			let t;
			o && o.nodeName == a.nodeName && i != e && (t = i.parentNode) && t.nodeName.toLowerCase() == a.nodeName || (t = document.createElement(a.nodeName), t.pmIsDeco = !0, t.appendChild(i), o = AS[0]), i = t;
		}
		NS(i, o || AS[0], a);
	}
	return i;
}
function NS(e, t, n) {
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
function PS(e, t, n) {
	return MS(e, e, AS, jS(t, n, !J(e)));
}
function FS(e, t) {
	if (e.length != t.length) return !1;
	for (let n = 0; n < e.length; n++) if (!e[n].type.eq(t[n].type)) return !1;
	return !0;
}
function IS(e) {
	let t = e.nextSibling;
	return e.parentNode.removeChild(e), t;
}
var LS = class {
	constructor(e, t, n) {
		this.lock = t, this.view = n, this.index = 0, this.stack = [], this.changed = !1, this.top = e, this.preMatch = RS(e.node.content, e);
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
		for (; i < a;) this.destroyRest(), this.top.dirty = hS, this.index = this.stack.pop(), this.top = this.stack.pop(), a--;
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
				t instanceof SS && t.dirty != vS && t.mark.type == e[a].type && t.spec.update && !this.isLocked(t.dom) && t.spec.update(e[a]) && (t.mark = e[a], i = this.index, this.changed = !0);
			}
			if (i > -1) i > this.index && (this.changed = !0, this.destroyBetween(this.index, i)), this.top = this.top.children[this.index];
			else {
				let r = SS.create(this.top, e[a], t, n);
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
		return a.dirty == vS && a.dom == a.contentDOM && (a.dirty = _S), a.update(e, t, n, i) ? (this.destroyBetween(this.index, r), this.index++, !0) : !1;
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
			if (s instanceof CS) {
				let c = this.preMatch.matched.get(s);
				if (c != null && c != i) return !1;
				let l = s.dom, u, d = this.isLocked(l) && !(e.isText && s.node && s.node.isText && s.nodeDOM.nodeValue == e.text && s.dirty != vS && FS(t, s.outerDeco));
				if (!d && s.update(e, t, n, r)) return this.destroyBetween(this.index, o), s.dom != l && (this.changed = !0), this.index++, !0;
				if (!d && (u = this.recreateWrapper(s, e, t, n, r, a))) return this.destroyBetween(this.index, o), this.top.children[this.index] = u, u.contentDOM && (u.dirty = _S, u.updateChildren(r, a + 1), u.dirty = hS), this.changed = !0, this.index++, !0;
				break;
			}
		}
		return !1;
	}
	recreateWrapper(e, t, n, r, i, a) {
		if (e.dirty || t.isAtom || !e.children.length || !e.node.content.eq(t.content) || !FS(n, e.outerDeco) || !r.eq(e.innerDeco)) return null;
		let o = CS.create(this.top, t, n, r, i, a);
		if (o.contentDOM) {
			o.children = e.children, e.children = [];
			for (let e of o.children) e.parent = o;
		}
		return e.destroy(), o;
	}
	addNode(e, t, n, r, i) {
		let a = CS.create(this.top, e, t, n, r, i);
		a.contentDOM && a.updateChildren(r, i + 1), this.top.children.splice(this.index++, 0, a), this.changed = !0;
	}
	placeWidget(e, t, n) {
		let r = this.index < this.top.children.length ? this.top.children[this.index] : null;
		if (r && r.matchesWidget(e) && (e == r.widget || !r.widget.type.toDOM.parentNode)) this.index++;
		else {
			let r = new bS(this.top, e, t, n);
			this.top.children.splice(this.index++, 0, r), this.changed = !0;
		}
	}
	addTextblockHacks() {
		let e = this.top.children[this.index - 1], t = this.top;
		for (; e instanceof SS;) t = e, e = t.children[t.children.length - 1];
		(!e || !(e instanceof TS) || /\n$/.test(e.node.text) || this.view.requiresGeckoHackNode && /\s$/.test(e.node.text)) && ((Ax || Ox) && e && e.dom.contentEditable == "false" && this.addHackNode("IMG", t), this.addHackNode("BR", this.top));
	}
	addHackNode(e, t) {
		if (t == this.top && this.index < t.children.length && t.children[this.index].matchesHack(e)) this.index++;
		else {
			let n = document.createElement(e);
			e == "IMG" && (n.className = "ProseMirror-separator", n.alt = ""), e == "BR" && (n.className = "ProseMirror-trailingBreak");
			let r = new ES(this.top, [], n, null);
			t == this.top ? t.children.splice(this.index++, 0, r) : t.children.push(r), this.changed = !0;
		}
	}
	isLocked(e) {
		return this.lock && (e == this.lock || J(e) && e.contains(this.lock.parentNode));
	}
};
function RS(e, t) {
	let n = t, r = n.children.length, i = e.childCount, a = /* @__PURE__ */ new Map(), o = [];
	outer: for (; i > 0;) {
		let s;
		for (;;) if (r) {
			let e = n.children[r - 1];
			if (e instanceof SS) n = e, r = e.children.length;
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
function zS(e, t) {
	return e.type.side - t.type.side;
}
function BS(e, t, n, r) {
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
				d.sort(zS);
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
function VS(e) {
	if (e.nodeName == "UL" || e.nodeName == "OL") {
		let t = e.style.cssText;
		e.style.cssText = t + "; list-style: square !important", window.getComputedStyle(e).listStyle, e.style.cssText = t;
	}
}
function HS(e, t, n, r) {
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
function US(e, t, n, r, i) {
	let a = [];
	for (let o = 0, s = 0; o < e.length; o++) {
		let c = e[o], l = s, u = s += c.size;
		l >= n || u <= t ? a.push(c) : (l < t && a.push(c.slice(0, t - l, r)), i &&= (a.push(i), void 0), u > n && a.push(c.slice(n - l, c.size, r)));
	}
	return a;
}
function WS(e, t = null) {
	let n = e.domSelectionRange(), r = e.state.doc;
	if (!n.focusNode) return null;
	let i = e.docView.nearestDesc(n.focusNode), a = i && i.size == 0, o = e.docView.posFromDOM(n.focusNode, n.focusOffset, 1);
	if (o < 0) return null;
	let s = r.resolve(o), c, l;
	if (mx(n)) {
		for (c = o; i && !i.node;) i = i.parent;
		if (i && i.node.isAtom && K.isSelectable(i.node) && i.parent && !(i.node.isInline && fx(n.focusNode, n.focusOffset, i.dom))) {
			let e = i.posBefore;
			l = new K(o == e ? s : r.resolve(e));
		} else if (Ex && t == "key" && o > e.state.selection.to && J(n.focusNode) && n.focusOffset == n.focusNode.childNodes.length && i && i.posAtStart > e.state.selection.to) for (let e = n.focusNode;; e = e.parentNode) {
			if (getComputedStyle(e).overflow != "visible") {
				l = W.findFrom(r.resolve(i.posAtStart), 1);
				break;
			}
			if (e == i.dom || e.nextSibling || !e.parentNode || !J(e.parentNode)) break;
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
		l = tC(e, u, s, n);
	}
	return l;
}
function GS(e) {
	return e.editable ? e.hasFocus() : rC(e) && document.activeElement && document.activeElement.contains(e.dom);
}
function KS(e, t = !1) {
	let n = e.state.selection;
	if ($S(e, n), !GS(e)) return;
	let r = e.input.mouseDown;
	if (!t && Ox && r) {
		let t = e.domSelectionRange(), n = e.domObserver.currentSelection;
		if (t.anchorNode && n.anchorNode && ix(t.anchorNode, t.anchorOffset, n.anchorNode, n.anchorOffset) && r.delaySelUpdate()) {
			e.domObserver.setCurSelection();
			return;
		}
	}
	if (e.domObserver.disconnectSelection(), e.cursorWrapper) QS(e);
	else {
		let { anchor: r, head: i } = n, a, o;
		qS && !(n instanceof G) && (n.$from.parent.inlineContent || (a = JS(e, n.from)), !n.empty && !n.$from.parent.inlineContent && (o = JS(e, n.to))), e.docView.setSelection(r, i, e, t), qS && (a && XS(a), o && XS(o)), n.visible ? e.dom.classList.remove("ProseMirror-hideselection") : (e.dom.classList.add("ProseMirror-hideselection"), "onselectionchange" in document && ZS(e));
	}
	e.domObserver.setCurSelection(), e.domObserver.connectSelection();
}
var qS = Ax || Ox && kx < 63;
function JS(e, t) {
	let { node: n, offset: r } = e.docView.domFromPos(t, 0), i = r < n.childNodes.length ? n.childNodes[r] : null, a = r ? n.childNodes[r - 1] : null;
	if (Ax && i && i.contentEditable == "false") return YS(i);
	if ((!i || i.contentEditable == "false") && (!a || a.contentEditable == "false")) {
		if (i) return YS(i);
		if (a) return YS(a);
	}
}
function YS(e) {
	return e.contentEditable = "true", Ax && e.draggable && (e.draggable = !1, e.wasDraggable = !0), e;
}
function XS(e) {
	e.contentEditable = "false", e.wasDraggable &&= (e.draggable = !0, null);
}
function ZS(e) {
	let t = e.dom.ownerDocument;
	t.removeEventListener("selectionchange", e.input.hideSelectionGuard);
	let n = e.domSelectionRange(), r = n.anchorNode, i = n.anchorOffset;
	t.addEventListener("selectionchange", e.input.hideSelectionGuard = () => {
		(n.anchorNode != r || n.anchorOffset != i) && (t.removeEventListener("selectionchange", e.input.hideSelectionGuard), setTimeout(() => {
			(!GS(e) || e.state.selection.visible) && e.dom.classList.remove("ProseMirror-hideselection");
		}, 20));
	});
}
function QS(e) {
	let t = e.domSelection();
	if (!t) return;
	let n = e.cursorWrapper.dom, r = n.nodeName == "IMG";
	r ? t.collapse(n.parentNode, $b(n) + 1) : t.collapse(n, 0), !r && !e.state.selection.visible && wx && Tx <= 11 && (n.disabled = !0, n.disabled = !1);
}
function $S(e, t) {
	if (t instanceof K) {
		let n = e.docView.descAt(t.from);
		n != e.lastSelectedViewDesc && (eC(e), n && n.selectNode(), e.lastSelectedViewDesc = n);
	} else eC(e);
}
function eC(e) {
	e.lastSelectedViewDesc &&= (e.lastSelectedViewDesc.parent && e.lastSelectedViewDesc.deselectNode(), void 0);
}
function tC(e, t, n, r) {
	return e.someProp("createSelectionBetween", (r) => r(e, t, n)) || G.between(t, n, r);
}
function nC(e) {
	return e.editable && !e.hasFocus() ? !1 : rC(e);
}
function rC(e) {
	let t = e.domSelectionRange();
	if (!t.anchorNode) return !1;
	try {
		return lx(e.dom, t.anchorNode) && (e.editable || lx(e.dom, t.focusNode));
	} catch {
		return !1;
	}
}
function iC(e) {
	let t = e.docView.domFromPos(e.state.selection.anchor, 0), n = e.domSelectionRange();
	return ix(t.node, t.offset, n.anchorNode, n.anchorOffset);
}
function aC(e, t) {
	let { $anchor: n, $head: r } = e.selection, i = t > 0 ? n.max(r) : n.min(r), a = i.parent.inlineContent ? i.depth ? e.doc.resolve(t > 0 ? i.after() : i.before()) : null : i;
	return a && W.findFrom(a, t);
}
function oC(e, t) {
	return e.dispatch(e.state.tr.setSelection(t).scrollIntoView()), !0;
}
function sC(e, t, n) {
	let r = e.state.selection;
	if (r instanceof G) {
		if (n.indexOf("s") > -1) {
			let { $head: n } = r, i = n.textOffset ? null : t < 0 ? n.nodeBefore : n.nodeAfter;
			if (!i || i.isText || !i.isLeaf) return !1;
			let a = e.state.doc.resolve(n.pos + i.nodeSize * (t < 0 ? -1 : 1));
			return oC(e, new G(r.$anchor, a));
		}
		if (!r.empty) return !1;
		if (e.endOfTextblock(t > 0 ? "forward" : "backward")) {
			let n = aC(e.state, t);
			return n && n instanceof K ? oC(e, n) : !1;
		}
		if (!Mx || n.indexOf("m") < 0) {
			let n = r.$head, i = n.textOffset ? null : t < 0 ? n.nodeBefore : n.nodeAfter, a;
			if (!i || i.isText) return !1;
			let o = t < 0 ? n.pos - i.nodeSize : n.pos;
			return i.isAtom || (a = e.docView.descAt(o)) && !a.contentDOM ? K.isSelectable(i) ? oC(e, new K(t < 0 ? e.state.doc.resolve(n.pos - i.nodeSize) : n)) : oC(e, new G(e.state.doc.resolve(t < 0 ? o : o + i.nodeSize))) : !1;
		}
	} else if (r instanceof K && r.node.isInline) return oC(e, new G(t > 0 ? r.$to : r.$from));
	else {
		let n = aC(e.state, t);
		return n ? oC(e, n) : !1;
	}
}
function cC(e, t) {
	let n = e.pmViewDesc;
	return n ? n.size == 0 && (t < 0 || e.nextSibling || e.nodeName != "BR") : J(e) && e.contentEditable == "false";
}
function lC(e, t) {
	return t < 0 ? uC(e) : dC(e);
}
function uC(e) {
	let t = e.domSelectionRange(), n = t.focusNode, r = t.focusOffset;
	if (!n) return;
	let i, a, o = !1;
	for (Ex && J(n) && r < sx(n) && cC(n.childNodes[r], -1) && (o = !0);;) if (r > 0) {
		if (!J(n)) break;
		let e = n.childNodes[r - 1];
		if (cC(e, -1)) i = n, a = --r;
		else if (cx(e)) n = e, r = n.nodeValue.length;
		else break;
	} else if (fC(n)) break;
	else {
		let t = n.previousSibling;
		for (; t && cC(t, -1);) i = n.parentNode, a = $b(t), t = t.previousSibling;
		if (t) n = t, r = sx(n);
		else {
			if (n = n.parentNode, n == e.dom) break;
			r = 0;
		}
	}
	o ? hC(e, n, r) : i && hC(e, i, a);
}
function dC(e) {
	let t = e.domSelectionRange(), n = t.focusNode, r = t.focusOffset;
	if (!n) return;
	let i = sx(n), a, o;
	for (;;) if (r < i) {
		if (!J(n)) break;
		let e = n.childNodes[r];
		if (cC(e, 1)) a = n, o = ++r;
		else break;
	} else if (fC(n)) break;
	else {
		let t = n.nextSibling;
		for (; t && cC(t, 1);) a = t.parentNode, o = $b(t) + 1, t = t.nextSibling;
		if (t) n = t, r = 0, i = sx(n);
		else {
			if (n = n.parentNode, n == e.dom) break;
			r = i = 0;
		}
	}
	a && hC(e, a, o);
}
function fC(e) {
	let t = e.pmViewDesc;
	return t && t.node && t.node.isBlock;
}
function pC(e, t) {
	for (; e && t == e.childNodes.length && !px(e);) t = $b(e) + 1, e = e.parentNode;
	for (; e && t < e.childNodes.length;) {
		let n = e.childNodes[t];
		if (cx(n)) return n;
		if (J(n) && n.contentEditable == "false") break;
		e = n, t = 0;
	}
}
function mC(e, t) {
	for (; e && !t && !px(e);) t = $b(e), e = e.parentNode;
	for (; e && t;) {
		let n = e.childNodes[t - 1];
		if (cx(n)) return n;
		if (J(n) && n.contentEditable == "false") break;
		e = n, t = e.childNodes.length;
	}
}
function hC(e, t, n) {
	if (!cx(t)) {
		let e, r;
		(r = pC(t, n)) ? (t = r, n = 0) : (e = mC(t, n)) && (t = e, n = e.nodeValue.length);
	}
	let r = e.domSelection(), i = e.domSelectionRange();
	if (!r) return;
	mx(i) ? r.collapse(t, n) : r.extend && (r.collapse(i.anchorNode, i.anchorOffset), r.extend(t, n)), e.domObserver.setCurSelection();
	let { state: a } = e;
	setTimeout(() => {
		e.state == a && KS(e);
	}, 50);
}
function gC(e, t) {
	let n = e.state.doc.resolve(t);
	if (!(Ox || Nx) && n.parent.inlineContent) {
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
function _C(e, t, n) {
	let r = e.state.selection;
	if (r instanceof G && !r.empty || n.indexOf("s") > -1 || Mx && n.indexOf("m") > -1) return !1;
	let { $from: i, $to: a } = r;
	if (!i.parent.inlineContent || e.endOfTextblock(t < 0 ? "up" : "down")) {
		let n = aC(e.state, t);
		if (n && n instanceof K) return oC(e, n);
	}
	if (!i.parent.inlineContent) {
		let n = t < 0 ? i : a, o = r instanceof Gy ? W.near(n, t) : W.findFrom(n, t);
		return o ? oC(e, o) : !1;
	}
	return !1;
}
function vC(e, t) {
	if (!(e.state.selection instanceof G)) return !0;
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
function yC(e, t, n) {
	e.domObserver.stop(), t.contentEditable = n, e.domObserver.start();
}
function bC(e) {
	if (!Ax || e.state.selection.$head.parentOffset > 0) return !1;
	let { focusNode: t, focusOffset: n } = e.domSelectionRange();
	if (t && J(t) && n == 0 && t.firstChild && J(t.firstChild) && t.firstChild.contentEditable == "false") {
		let n = t.firstChild;
		yC(e, n, "true"), setTimeout(() => yC(e, n, "false"), 20);
	}
	return !1;
}
function xC(e) {
	let t = "";
	return e.ctrlKey && (t += "c"), e.metaKey && (t += "m"), e.altKey && (t += "a"), e.shiftKey && (t += "s"), t;
}
function SC(e, t) {
	let n = t.keyCode, r = xC(t);
	if (n == 8 || Mx && n == 72 && r == "c") return vC(e, -1) || lC(e, -1);
	if (n == 46 && !t.shiftKey || Mx && n == 68 && r == "c") return vC(e, 1) || lC(e, 1);
	if (n == 13 || n == 27) return !0;
	if (n == 37 || Mx && n == 66 && r == "c") {
		let t = n == 37 ? gC(e, e.state.selection.from) == "ltr" ? -1 : 1 : -1;
		return sC(e, t, r) || lC(e, t);
	}
	if (n == 39 || Mx && n == 70 && r == "c") {
		let t = n == 39 ? gC(e, e.state.selection.from) == "ltr" ? 1 : -1 : 1;
		return sC(e, t, r) || lC(e, t);
	}
	return n == 38 || Mx && n == 80 && r == "c" ? _C(e, -1, r) || lC(e, -1) : n == 40 || Mx && n == 78 && r == "c" ? bC(e) || _C(e, 1, r) || lC(e, 1) : !(r != (Mx ? "m" : "c") || n != 66 && n != 73 && n != 89 && n != 90);
}
function CC(e, t) {
	e.someProp("transformCopied", (n) => {
		t = n(t, e);
	});
	let n = [], { content: r, openStart: i, openEnd: a } = t;
	for (; i > 1 && a > 1 && r.childCount == 1 && r.firstChild.childCount == 1;) {
		i--, a--;
		let e = r.firstChild;
		n.push(e.type.name, e.attrs == e.type.defaultAttrs ? null : e.attrs), r = e.content;
	}
	let o = e.someProp("clipboardSerializer") || gv.fromSchema(e.state.schema), s = NC(), c = s.createElement("div");
	c.appendChild(o.serializeFragment(r, { document: s }));
	let l = c.firstChild, u, d = 0;
	for (; l && J(l) && (u = MC[l.nodeName.toLowerCase()]);) {
		for (let e = u.length - 1; e >= 0; e--) {
			let t = s.createElement(u[e]);
			for (; c.firstChild;) t.appendChild(c.firstChild);
			c.appendChild(t), d++;
		}
		l = c.firstChild;
	}
	return l && J(l) && l.setAttribute("data-pm-slice", `${i} ${a}${d ? ` -${d}` : ""} ${JSON.stringify(n)}`), {
		dom: c,
		text: e.someProp("clipboardTextSerializer", (n) => n(t, e)) || t.content.textBetween(0, t.content.size, "\n\n"),
		slice: t
	};
}
function wC(e, t, n, r, i) {
	let a = i.parent.type.spec.code, o, s;
	if (!n && !t) return null;
	let c = !!t && (r || a || !n);
	if (c) {
		if (e.someProp("transformPastedText", (n) => {
			t = n(t, a || r, e);
		}), a) return s = new U(V.from(e.state.schema.text(t.replace(/\r\n?/g, "\n"))), 0, 0), e.someProp("transformPasted", (t) => {
			s = t(s, e, !0);
		}), s;
		let n = e.someProp("clipboardTextParser", (n) => n(t, i, r, e));
		if (n) s = n;
		else {
			let n = i.marks(), { schema: r } = e.state, a = gv.fromSchema(r);
			o = document.createElement("div"), t.split(/(?:\r\n?|\n)+/).forEach((e) => {
				let t = o.appendChild(document.createElement("p"));
				e && t.appendChild(a.serializeNode(r.text(e, n)));
			});
		}
	} else e.someProp("transformPastedHTML", (t) => {
		n = t(n, e);
	}), o = IC(n), Fx && LC(o);
	let l = o && o.querySelector("[data-pm-slice]"), u = l && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(l.getAttribute("data-pm-slice") || "");
	if (u && u[3]) for (let e = +u[3]; e > 0; e--) {
		let e = o.firstChild;
		for (; e && !J(e);) e = e.nextSibling;
		if (!e) break;
		o = e;
	}
	if (s ||= (e.someProp("clipboardParser") || e.someProp("domParser") || nv.fromSchema(e.state.schema)).parseSlice(o, {
		preserveWhitespace: !!(c || u),
		context: i,
		ruleFromNode(e) {
			return e.nodeName == "BR" && !e.nextSibling && e.parentNode && !TC.test(e.parentNode.nodeName) ? { ignore: !0 } : null;
		}
	}), u) s = RC(jC(s, +u[1], +u[2]), u[4]);
	else if (s = U.maxOpen(EC(s.content, i), !0), s.openStart || s.openEnd) {
		let e = 0, t = 0;
		for (let t = s.content.firstChild; e < s.openStart && !t.type.spec.isolating; e++, t = t.firstChild);
		for (let e = s.content.lastChild; t < s.openEnd && !e.type.spec.isolating; t++, e = e.lastChild);
		s = jC(s, e, t);
	}
	return e.someProp("transformPasted", (t) => {
		s = t(s, e, c);
	}), s;
}
var TC = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
function EC(e, t) {
	if (e.childCount < 2) return e;
	for (let n = t.depth; n >= 0; n--) {
		let r = t.node(n).contentMatchAt(t.index(n)), i, a = [];
		if (e.forEach((e) => {
			if (!a) return;
			let t = r.findWrapping(e.type), n;
			if (!t) return a = null;
			if (n = a.length && i.length && OC(t, i, e, a[a.length - 1], 0)) a[a.length - 1] = n;
			else {
				a.length && (a[a.length - 1] = kC(a[a.length - 1], i.length));
				let n = DC(e, t);
				a.push(n), r = r.matchType(n.type), i = t;
			}
		}), a) return V.from(a);
	}
	return e;
}
function DC(e, t, n = 0) {
	for (let r = t.length - 1; r >= n; r--) e = t[r].create(null, V.from(e));
	return e;
}
function OC(e, t, n, r, i) {
	if (i < e.length && i < t.length && e[i] == t[i]) {
		let a = OC(e, t, n, r.lastChild, i + 1);
		if (a) return r.copy(r.content.replaceChild(r.childCount - 1, a));
		if (r.contentMatchAt(r.childCount).matchType(i == e.length - 1 ? n.type : e[i + 1])) return r.copy(r.content.append(V.from(DC(n, e, i + 1))));
	}
}
function kC(e, t) {
	if (t == 0) return e;
	let n = e.content.replaceChild(e.childCount - 1, kC(e.lastChild, t - 1)), r = e.contentMatchAt(e.childCount).fillBefore(V.empty, !0);
	return e.copy(n.append(r));
}
function AC(e, t, n, r, i, a) {
	let o = t < 0 ? e.firstChild : e.lastChild, s = o.content;
	return e.childCount > 1 && (a = 0), i < r - 1 && (s = AC(s, t, n, r, i + 1, a)), i >= n && (s = t < 0 ? o.contentMatchAt(0).fillBefore(s, a <= i).append(s) : s.append(o.contentMatchAt(o.childCount).fillBefore(V.empty, !0))), e.replaceChild(t < 0 ? 0 : e.childCount - 1, o.copy(s));
}
function jC(e, t, n) {
	return t < e.openStart && (e = new U(AC(e.content, -1, t, e.openStart, 0, e.openEnd), t, e.openEnd)), n < e.openEnd && (e = new U(AC(e.content, 1, n, e.openEnd, 0, 0), e.openStart, n)), e;
}
var MC = {
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
function NC() {
	return document.implementation.createHTMLDocument("title");
}
var PC = null;
function FC(e) {
	let t = window.trustedTypes;
	if (!t) return e;
	if (!PC) {
		if (PC = t.defaultPolicy) try {
			return PC.createHTML(e);
		} catch {}
		PC = t.createPolicy("ProseMirrorClipboard", { createHTML: (e) => e });
	}
	return PC.createHTML(e);
}
function IC(e) {
	let t = /^(\s*<meta [^>]*>)*/.exec(e);
	t && (e = e.slice(t[0].length));
	let n = NC(), r = n.body, i = /<([a-z][^>\s]+)/i.exec(e), a;
	if ((a = i && MC[i[1].toLowerCase()]) && (e = a.map((e) => "<" + e + ">").join("") + e + a.map((e) => "</" + e + ">").reverse().join("")), r.innerHTML = FC(e), a) for (let e = 0; e < a.length; e++) r = r.querySelector(a[e]) || r;
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
function LC(e) {
	let t = e.querySelectorAll(Ox ? "span:not([class]):not([style])" : "span.Apple-converted-space");
	for (let n = 0; n < t.length; n++) {
		let r = t[n];
		r.childNodes.length == 1 && r.textContent == "\xA0" && r.parentNode && r.parentNode.replaceChild(e.ownerDocument.createTextNode(" "), r);
	}
}
function RC(e, t) {
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
			i = V.from(t.create(r[e + 1], i));
		} catch {
			break;
		}
		a++, o++;
	}
	return new U(i, a, o);
}
var zC = {}, BC = {}, VC = {
	touchstart: !0,
	touchmove: !0
}, HC = class {
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
function UC(e) {
	for (let t in zC) {
		let n = zC[t];
		e.dom.addEventListener(t, e.input.eventHandlers[t] = (t) => {
			JC(e, t) && !qC(e, t) && (e.editable || !(t.type in BC)) && n(e, t);
		}, VC[t] ? { passive: !0 } : void 0);
	}
	Ax && e.dom.addEventListener("input", () => null), KC(e);
}
function WC(e, t) {
	e.input.lastSelectionOrigin = t, e.input.lastSelectionTime = Date.now();
}
function GC(e) {
	e.input.mouseDown && e.input.mouseDown.done(), e.domObserver.stop();
	for (let t in e.input.eventHandlers) e.dom.removeEventListener(t, e.input.eventHandlers[t]);
	clearTimeout(e.input.composingTimeout), clearTimeout(e.input.lastIOSEnterFallbackTimeout);
}
function KC(e) {
	e.someProp("handleDOMEvents", (t) => {
		for (let n in t) e.input.eventHandlers[n] || e.dom.addEventListener(n, e.input.eventHandlers[n] = (t) => qC(e, t));
	});
}
function qC(e, t) {
	return e.someProp("handleDOMEvents", (n) => {
		let r = n[t.type];
		return r ? r(e, t) || t.defaultPrevented : !1;
	});
}
function JC(e, t) {
	if (!t.bubbles) return !0;
	if (t.defaultPrevented) return !1;
	for (let n = t.target; n != e.dom; n = n.parentNode) if (!n || n.nodeType == 11 || n.pmViewDesc && n.pmViewDesc.stopEvent(t)) return !1;
	return !0;
}
function YC(e, t) {
	!qC(e, t) && zC[t.type] && (e.editable || !(t.type in BC)) && zC[t.type](e, t);
}
function XC(e, t) {
	let { input: n } = e;
	return n.lastKeyDispatched || e.composing ? !1 : (n.lastKeyDispatched = !0, typeof t == "string" && (t = hx(t == "Backspace" ? 8 : 13, t)), e.someProp("handleKeyDown", (n) => n(e, t)));
}
BC.keydown = (e, t) => {
	let n = t;
	if (e.input.shiftKey = n.keyCode == 16 || n.shiftKey, !pw(e) && (e.input.lastKeyCode = n.keyCode, e.input.lastKeyCodeTime = Date.now(), e.input.lastKeyDispatched = !1, !(Px && Ox && n.keyCode == 13))) {
		if (n.keyCode != 229 && e.domObserver.forceFlush(), jx && n.keyCode == 13 && !n.ctrlKey && !n.altKey && !n.metaKey) {
			let t = Date.now();
			e.input.lastIOSEnter = t, e.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
				e.input.lastIOSEnter == t && (XC(e, "Enter"), e.input.lastIOSEnter = 0);
			}, 200);
		} else XC(e, n) || SC(e, n) ? n.preventDefault() : WC(e, "key");
	}
}, BC.keyup = (e, t) => {
	t.keyCode == 16 && (e.input.shiftKey = !1);
}, BC.keypress = (e, t) => {
	let n = t;
	if (pw(e) || !n.charCode || n.ctrlKey && !n.altKey || Mx && n.metaKey) return;
	if (e.someProp("handleKeyPress", (t) => t(e, n))) {
		n.preventDefault();
		return;
	}
	let r = e.state.selection;
	if (!(r instanceof G) || !r.$from.sameParent(r.$to)) {
		let t = String.fromCharCode(n.charCode), i = () => e.state.tr.insertText(t).scrollIntoView();
		!/[\r\n]/.test(t) && !e.someProp("handleTextInput", (n) => n(e, r.$from.pos, r.$to.pos, t, i)) && e.dispatch(i()), n.preventDefault();
	}
};
function ZC(e) {
	return {
		left: e.clientX,
		top: e.clientY
	};
}
function QC(e, t) {
	let n = t.x - e.clientX, r = t.y - e.clientY;
	return n * n + r * r < 100;
}
function $C(e, t, n, r, i) {
	if (r == -1) return !1;
	let a = e.state.doc.resolve(r);
	for (let r = a.depth + 1; r > 0; r--) if (e.someProp(t, (t) => r > a.depth ? t(e, n, a.nodeAfter, a.before(r), i, !0) : t(e, n, a.node(r), a.before(r), i, !1))) return !0;
	return !1;
}
function ew(e, t, n) {
	if (e.focused || e.focus(), e.state.selection.eq(t)) return;
	let r = e.state.tr.setSelection(t);
	r.setMeta("pointer", !0), e.dispatch(r);
}
function tw(e, t) {
	if (t == -1) return !1;
	let n = e.state.doc.resolve(t), r = n.nodeAfter;
	return r && r.isAtom && K.isSelectable(r) ? (ew(e, new K(n)), !0) : !1;
}
function nw(e, t) {
	if (t == -1) return !1;
	let n = e.state.selection, r, i;
	n instanceof K && (r = n.node);
	let a = e.state.doc.resolve(t);
	for (let e = a.depth + 1; e > 0; e--) {
		let t = e > a.depth ? a.nodeAfter : a.node(e);
		if (K.isSelectable(t)) {
			i = r && n.$from.depth > 0 && e >= n.$from.depth && a.before(n.$from.depth + 1) == n.$from.pos ? a.before(n.$from.depth) : a.before(e);
			break;
		}
	}
	return i != null && (ew(e, K.create(e.state.doc, i)), !0);
}
function rw(e, t, n, r, i) {
	return $C(e, "handleClickOn", t, n, r) || e.someProp("handleClick", (n) => n(e, t, r)) || (i ? nw(e, n) : tw(e, n));
}
function iw(e, t, n, r) {
	return $C(e, "handleDoubleClickOn", t, n, r) || e.someProp("handleDoubleClick", (n) => n(e, t, r));
}
function aw(e, t, n, r) {
	return $C(e, "handleTripleClickOn", t, n, r) || e.someProp("handleTripleClick", (n) => n(e, t, r)) || ow(e, n, r);
}
function ow(e, t, n) {
	if (n.button != 0) return !1;
	let r = sw(e, t, !0), i = e.state.doc;
	return r ? (ew(e, r), r instanceof G && i.eq(e.state.doc) && (e.input.mouseDown = new fw(e, r)), !0) : !1;
}
function sw(e, t, n) {
	let r = e.state.doc;
	if (t == -1) return r.inlineContent ? G.create(r, 0, r.content.size) : null;
	let i = r.resolve(t);
	for (let e = i.depth + 1; e > 0; e--) {
		let t = e > i.depth ? i.nodeAfter : i.node(e), a = i.before(e);
		if (t.inlineContent) return G.create(r, a + 1, a + 1 + t.content.size);
		if (n && K.isSelectable(t)) return K.create(r, a);
	}
	return null;
}
function cw(e) {
	return yw(e);
}
var lw = Mx ? "metaKey" : "ctrlKey";
zC.mousedown = (e, t) => {
	let n = t;
	e.input.shiftKey = n.shiftKey;
	let r = cw(e), i = Date.now(), a = "singleClick";
	i - e.input.lastClick.time < 500 && QC(n, e.input.lastClick) && !n[lw] && e.input.lastClick.button == n.button && (e.input.lastClick.type == "singleClick" ? a = "doubleClick" : e.input.lastClick.type == "doubleClick" && (a = "tripleClick")), e.input.lastClick = {
		time: i,
		x: n.clientX,
		y: n.clientY,
		type: a,
		button: n.button
	}, e.input.mouseDown && e.input.mouseDown.done();
	let o = e.posAtCoords(ZC(n));
	o && (a == "singleClick" ? e.input.mouseDown = new dw(e, o, n, !!r) : (a == "doubleClick" ? iw : aw)(e, o.pos, o.inside, n) ? n.preventDefault() : WC(e, "pointer"));
};
var uw = class {
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
}, dw = class extends uw {
	constructor(e, t, n, r) {
		super(e), this.pos = t, this.event = n, this.flushed = r, this.delayedSelectionSync = !1, this.startDoc = e.state.doc, this.selectNode = !!n[lw], this.allowDefault = n.shiftKey;
		let i, a;
		if (t.inside > -1) i = e.state.doc.nodeAt(t.inside), a = t.inside;
		else {
			let n = e.state.doc.resolve(t.pos);
			i = n.parent, a = n.depth ? n.before() : 0;
		}
		let o = r ? null : n.target, s = o ? e.docView.nearestDesc(o, !0) : null;
		this.target = s && J(s.nodeDOM) ? s.nodeDOM : null;
		let { selection: c } = e.state;
		n.button == 0 && (i.type.spec.draggable && i.type.spec.selectable !== !1 || c instanceof K && c.from <= a && c.to > a) && (this.mightDrag = {
			node: i,
			pos: a,
			addAttr: !(!this.target || this.target.draggable),
			setUneditable: !!(this.target && Ex && !this.target.hasAttribute("contentEditable"))
		}), this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(), this.mightDrag.addAttr && (this.target.draggable = !0), this.mightDrag.setUneditable && setTimeout(() => {
			this.view.input.mouseDown == this && this.target.setAttribute("contentEditable", "false");
		}, 20), this.view.domObserver.start()), WC(e, "pointer");
	}
	done() {
		super.done(), this.mightDrag && this.target && (this.view.domObserver.stop(), this.mightDrag.addAttr && this.target.removeAttribute("draggable"), this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"), this.view.domObserver.start()), this.delayedSelectionSync && setTimeout(() => {
			this.view.isDestroyed || KS(this.view);
		});
	}
	up(e) {
		if (this.done(), !this.view.dom.contains(e.target)) return;
		let t = this.pos;
		this.view.state.doc != this.startDoc && (t = this.view.posAtCoords(ZC(e))), this.updateAllowDefault(e), this.allowDefault || !t ? WC(this.view, "pointer") : rw(this.view, t.pos, t.inside, e, this.selectNode) ? e.preventDefault() : e.button == 0 && (this.flushed || Ax && this.mightDrag && !this.mightDrag.node.isAtom || Ox && !this.view.state.selection.visible && Math.min(Math.abs(t.pos - this.view.state.selection.from), Math.abs(t.pos - this.view.state.selection.to)) <= 2) ? (ew(this.view, W.near(this.view.state.doc.resolve(t.pos))), e.preventDefault()) : WC(this.view, "pointer");
	}
	move(e) {
		this.updateAllowDefault(e), WC(this.view, "pointer"), super.move(e);
	}
	updateAllowDefault(e) {
		!this.allowDefault && (Math.abs(this.event.x - e.clientX) > 4 || Math.abs(this.event.y - e.clientY) > 4) && (this.allowDefault = !0);
	}
	delaySelUpdate() {
		return this.allowDefault ? (this.delayedSelectionSync = !0, !0) : !1;
	}
}, fw = class extends uw {
	constructor(e, t) {
		super(e), this.startSelection = t, this.startDoc = e.state.doc;
	}
	move(e) {
		if (e.buttons == 0 || this.view.isDestroyed || !this.view.state.doc.eq(this.startDoc)) {
			this.done();
			return;
		}
		e.preventDefault(), WC(this.view, "pointer");
		let t = this.view.posAtCoords(ZC(e)), n = t && sw(this.view, t.inside, !1);
		if (!n) return;
		let { doc: r } = this.view.state, i = this.startSelection, [a, o] = n.from < i.from ? [i.to, n.from] : [i.from, n.to];
		ew(this.view, G.create(r, a, o));
	}
};
zC.touchstart = (e) => {
	e.input.lastTouch = Date.now(), cw(e), WC(e, "pointer");
}, zC.touchmove = (e) => {
	e.input.lastTouch = Date.now(), WC(e, "pointer");
}, zC.contextmenu = (e) => cw(e);
function pw(e, t) {
	return e.composing ? !0 : Ax && Math.abs(Date.now() - e.input.compositionEndedAt) < 500 ? (e.input.compositionEndedAt = -2e8, !0) : !1;
}
var mw = Px ? 5e3 : -1;
BC.compositionstart = BC.compositionupdate = (e) => {
	if (!e.composing) {
		e.domObserver.flush();
		let { state: t } = e, n = t.selection.$to;
		if (t.selection instanceof G && t.selection.empty && (t.storedMarks || !n.textOffset && n.parentOffset && n.nodeBefore.marks.some((e) => e.type.spec.inclusive === !1) || Ox && Nx && hw(e))) e.markCursor = e.state.storedMarks || n.marks(), yw(e, !0), e.markCursor = null;
		else if (yw(e, !t.selection.empty), Ex && t.selection.empty && n.parentOffset && !n.textOffset && n.nodeBefore.marks.length) {
			let t = e.domSelectionRange();
			for (let n = t.focusNode, r = t.focusOffset; n && J(n) && r != 0;) {
				let t = r < 0 ? n.lastChild : n.childNodes[r - 1];
				if (!t) break;
				if (cx(t)) {
					let n = e.domSelection();
					n && n.collapse(t, t.nodeValue.length);
					break;
				}
				n = t, r = -1;
			}
		}
		e.input.composing = !0;
	}
	gw(e, mw);
};
function hw(e) {
	let { focusNode: t, focusOffset: n } = e.domSelectionRange();
	if (!t || !J(t) || n >= t.childNodes.length) return !1;
	let r = t.childNodes[n];
	return J(r) && r.contentEditable == "false";
}
BC.compositionend = (e, t) => {
	e.composing && (e.input.composing = !1, e.input.compositionEndedAt = Date.now(), e.input.compositionPendingChanges = e.domObserver.pendingRecords().length ? e.input.compositionID : 0, e.input.compositionNode = null, e.input.badSafariComposition ? e.domObserver.forceFlush() : e.input.compositionPendingChanges && Promise.resolve().then(() => e.domObserver.flush()), e.input.compositionID++, gw(e, 20));
};
function gw(e, t) {
	clearTimeout(e.input.composingTimeout), t > -1 && (e.input.composingTimeout = setTimeout(() => yw(e), t));
}
function _w(e) {
	for (e.composing && (e.input.composing = !1, e.input.compositionEndedAt = Date.now()); e.input.compositionNodes.length > 0;) e.input.compositionNodes.pop().markParentsDirty();
}
function vw(e) {
	let t = e.domSelectionRange();
	if (!t.focusNode) return null;
	let n = ux(t.focusNode, t.focusOffset), r = dx(t.focusNode, t.focusOffset);
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
function yw(e, t = !1) {
	if (!(Px && e.domObserver.flushingSoon >= 0)) {
		if (e.domObserver.forceFlush(), _w(e), t || e.docView && e.docView.dirty) {
			let n = WS(e), r = e.state.selection;
			return n && !n.eq(r) ? e.dispatch(e.state.tr.setSelection(n)) : (e.markCursor || t) && !r.$from.node(r.$from.sharedDepth(r.to)).inlineContent ? e.dispatch(e.state.tr.deleteSelection()) : e.updateState(e.state), !0;
		}
		return !1;
	}
}
function bw(e, t) {
	if (!e.dom.parentNode) return;
	let n = e.dom.parentNode.appendChild(document.createElement("div"));
	n.appendChild(t), n.style.cssText = "position: fixed; left: -10000px; top: 10px";
	let r = getSelection(), i = document.createRange();
	i.selectNodeContents(t), e.dom.blur(), r.removeAllRanges(), r.addRange(i), setTimeout(() => {
		n.parentNode && n.parentNode.removeChild(n), e.focus();
	}, 50);
}
var xw = wx && Tx < 15 || jx && Ix < 604;
zC.copy = BC.cut = (e, t) => {
	let n = t, r = e.state.selection, i = n.type == "cut";
	if (r.empty) return;
	let a = xw ? null : n.clipboardData, { dom: o, text: s } = CC(e, r.content());
	a ? (n.preventDefault(), a.clearData(), a.setData("text/html", o.innerHTML), a.setData("text/plain", s)) : bw(e, o), i && e.dispatch(e.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
};
function Sw(e) {
	return e.openStart == 0 && e.openEnd == 0 && e.content.childCount == 1 ? e.content.firstChild : null;
}
function Cw(e, t) {
	if (!e.dom.parentNode) return;
	let n = e.input.shiftKey || e.state.selection.$from.parent.type.spec.code, r = e.dom.parentNode.appendChild(document.createElement(n ? "textarea" : "div"));
	n || (r.contentEditable = "true"), r.style.cssText = "position: fixed; left: -10000px; top: 10px", r.focus();
	let i = e.input.shiftKey && e.input.lastKeyCode != 45;
	setTimeout(() => {
		e.focus(), r.parentNode && r.parentNode.removeChild(r), n ? ww(e, r.value, null, i, t) : ww(e, r.textContent, r.innerHTML, i, t);
	}, 50);
}
function ww(e, t, n, r, i) {
	let a = wC(e, t, n, r, e.state.selection.$from);
	if (e.someProp("handlePaste", (t) => t(e, i, a || U.empty))) return !0;
	if (!a) return !1;
	let o = Sw(a), s = o ? e.state.tr.replaceSelectionWith(o, r) : e.state.tr.replaceSelection(a);
	return e.dispatch(s.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")), !0;
}
function Tw(e) {
	let t = e.getData("text/plain") || e.getData("Text");
	if (t) return t;
	let n = e.getData("text/uri-list");
	return n ? n.replace(/\r?\n/g, " ") : "";
}
BC.paste = (e, t) => {
	let n = t;
	if (e.composing && !Px) return;
	let r = xw ? null : n.clipboardData, i = e.input.shiftKey && e.input.lastKeyCode != 45;
	r && ww(e, Tw(r), r.getData("text/html"), i, n) ? n.preventDefault() : Cw(e, n);
};
var Ew = class {
	constructor(e, t, n) {
		this.slice = e, this.move = t, this.node = n;
	}
}, Dw = Mx ? "altKey" : "ctrlKey";
function Ow(e, t) {
	let n;
	return e.someProp("dragCopies", (e) => {
		n ||= e(t);
	}), n == null ? !t[Dw] : !n;
}
zC.dragstart = (e, t) => {
	let n = t, r = e.input.mouseDown;
	if (r && r.done(), !n.dataTransfer) return;
	let i = e.state.selection, a = i.empty ? null : e.posAtCoords(ZC(n)), o;
	if (!(a && a.pos >= i.from && a.pos <= (i instanceof K ? i.to - 1 : i.to))) {
		if (r && r.mightDrag) o = K.create(e.state.doc, r.mightDrag.pos);
		else if (n.target && J(n.target)) {
			let t = e.docView.nearestDesc(n.target, !0);
			t && t.node.type.spec.draggable && t != e.docView && (o = K.create(e.state.doc, t.posBefore));
		}
	}
	let { dom: s, text: c, slice: l } = CC(e, (o || e.state.selection).content());
	(!n.dataTransfer.files.length || !Ox || kx > 120) && n.dataTransfer.clearData(), n.dataTransfer.setData(xw ? "Text" : "text/html", s.innerHTML), n.dataTransfer.effectAllowed = "copyMove", xw || n.dataTransfer.setData("text/plain", c), e.dragging = new Ew(l, Ow(e, n), o);
}, zC.dragend = (e) => {
	let t = e.dragging;
	window.setTimeout(() => {
		e.dragging == t && (e.dragging = null);
	}, 50);
}, BC.dragover = BC.dragenter = (e, t) => t.preventDefault(), BC.drop = (e, t) => {
	try {
		kw(e, t, e.dragging);
	} finally {
		e.dragging = null;
	}
};
function kw(e, t, n) {
	if (!t.dataTransfer) return;
	let r = e.posAtCoords(ZC(t));
	if (!r) return;
	let i = e.state.doc.resolve(r.pos), a = n && n.slice;
	a ? e.someProp("transformPasted", (t) => {
		a = t(a, e, !1);
	}) : a = wC(e, Tw(t.dataTransfer), xw ? null : t.dataTransfer.getData("text/html"), !1, i);
	let o = !!(n && Ow(e, t));
	if (e.someProp("handleDrop", (n) => n(e, t, a || U.empty, o))) {
		t.preventDefault();
		return;
	}
	if (!a) return;
	t.preventDefault();
	let s = a ? vy(e.state.doc, i.pos, a) : i.pos;
	s ??= i.pos;
	let c = e.state.tr;
	if (o) {
		let { node: e } = n;
		e ? e.replace(c) : c.deleteSelection();
	}
	let l = c.mapping.map(s), u = a.openStart == 0 && a.openEnd == 0 && a.content.childCount == 1, d = c.doc;
	if (u ? c.replaceRangeWith(l, l, a.content.firstChild) : c.replaceRange(l, l, a), c.doc.eq(d)) return;
	let f = c.doc.resolve(l);
	if (u && K.isSelectable(a.content.firstChild) && f.nodeAfter && f.nodeAfter.sameMarkup(a.content.firstChild)) c.setSelection(new K(f));
	else {
		let t = c.mapping.map(s);
		c.mapping.maps[c.mapping.maps.length - 1].forEach((e, n, r, i) => t = i), c.setSelection(tC(e, f, c.doc.resolve(t)));
	}
	e.focus(), e.dispatch(c.setMeta("uiEvent", "drop"));
}
zC.focus = (e) => {
	if (e.input.lastFocus = Date.now(), !e.focused) {
		e.domObserver.stop(), e.dom.classList.add("ProseMirror-focused"), e.domObserver.start(), e.focused = !0;
		let t = e.domSelectionRange();
		if (!e.domObserver.currentSelection.eq(t)) {
			let { focusNode: n, focusOffset: r } = t;
			setTimeout(() => {
				let t = e.domSelectionRange();
				t.focusNode == n && t.focusOffset == r && e.docView && e.hasFocus() && KS(e);
			}, 20);
		}
	}
}, zC.blur = (e, t) => {
	let n = t;
	e.focused &&= (e.domObserver.stop(), e.dom.classList.remove("ProseMirror-focused"), e.domObserver.start(), n.relatedTarget && e.dom.contains(n.relatedTarget) && e.domObserver.currentSelection.clear(), !1);
}, zC.beforeinput = (e, t) => {
	if (Px && t.inputType == "deleteContentBackward") {
		e.domObserver.flushSoon();
		let { domChangeCount: t } = e.input;
		setTimeout(() => {
			if (e.input.domChangeCount != t || e.domObserver.pendingRecords().length || (e.dom.blur(), e.focus(), XC(e, "Backspace"))) return;
			let { $cursor: n } = e.state.selection;
			n && n.pos > 0 && e.dispatch(e.state.tr.delete(n.pos - 1, n.pos).scrollIntoView());
		}, 50);
	}
};
for (let e in BC) zC[e] = BC[e];
function Aw(e, t) {
	if (e == t) return !0;
	for (let n in e) if (e[n] !== t[n]) return !1;
	for (let n in t) if (!(n in e)) return !1;
	return !0;
}
var jw = class {
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
}, Mw = class e {
	constructor(e, t) {
		this.toDOM = e, this.spec = t || Lw, this.side = this.spec.side || 0;
	}
	map(e, t, n, r) {
		let { pos: i, deleted: a } = e.mapResult(t.from + r, this.side < 0 ? -1 : 1);
		return a ? null : new Fw(i - n, i - n, this);
	}
	valid() {
		return !0;
	}
	eq(t) {
		return this == t || t instanceof e && (this.spec.key && this.spec.key == t.spec.key || this.toDOM == t.toDOM && Aw(this.spec, t.spec));
	}
	destroy(e) {
		this.spec.destroy && this.spec.destroy(e);
	}
}, Nw = class e {
	constructor(e, t) {
		this.attrs = e, this.spec = t || Lw;
	}
	map(e, t, n, r) {
		let i = e.map(t.from + r, this.spec.inclusiveStart ? -1 : 1) - n, a = e.map(t.to + r, this.spec.inclusiveEnd ? 1 : -1) - n;
		return i >= a ? null : new Fw(i, a, this);
	}
	valid(e, t) {
		return t.from < t.to;
	}
	eq(t) {
		return this == t || t instanceof e && Aw(this.attrs, t.attrs) && Aw(this.spec, t.spec);
	}
	static is(t) {
		return t.type instanceof e;
	}
	destroy() {}
}, Pw = class e {
	constructor(e, t) {
		this.attrs = e, this.spec = t || Lw;
	}
	map(e, t, n, r) {
		let i = e.mapResult(t.from + r, 1);
		if (i.deleted) return null;
		let a = e.mapResult(t.to + r, -1);
		return a.deleted || a.pos <= i.pos ? null : new Fw(i.pos - n, a.pos - n, this);
	}
	valid(e, t, n) {
		let r = n.nodeAt(t.from);
		return !!r && !r.isText && t.from + r.nodeSize == t.to;
	}
	eq(t) {
		return this == t || t instanceof e && Aw(this.attrs, t.attrs) && Aw(this.spec, t.spec);
	}
	destroy() {}
}, Fw = class e {
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
		return new e(t, t, new Mw(n, r));
	}
	static inline(t, n, r, i) {
		return new e(t, n, new Nw(r, i));
	}
	static node(t, n, r, i) {
		return new e(t, n, new Pw(r, i));
	}
	get spec() {
		return this.type.spec;
	}
	get inline() {
		return this.type instanceof Nw;
	}
	get widget() {
		return this.type instanceof Mw;
	}
}, Iw = [], Lw = {}, Rw = class e {
	constructor(e, t) {
		this.local = e.length ? e : Iw, this.children = t.length ? t : Iw;
	}
	static create(e, t) {
		return t.length ? Kw(t, e, 0, Lw) : zw;
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
		return this == zw || e.maps.length == 0 ? this : this.mapInner(e, t, 0, 0, n || Lw);
	}
	mapInner(t, n, r, i, a) {
		let o;
		if (this.local.length) {
			let e = new jw(n.content);
			for (let s = 0; s < this.local.length; s++) {
				let c = this.local[s].map(t, r, i);
				c && c.type.valid(n, c, e) ? (o ||= []).push(c) : a.onRemove && a.onRemove(this.local[s].spec);
			}
		}
		return this.children.length ? Vw(this.children, o || [], t, n, r, i, a) : o ? new e(o.sort(qw), Iw) : zw;
	}
	add(t, n) {
		return n.length ? this == zw ? e.create(t, n) : this.addInner(t, n, 0) : this;
	}
	addInner(t, n, r) {
		let i, a = 0;
		t.forEach((e, t) => {
			let o = t + r, s;
			if (s = Ww(n, e, o)) {
				for (i ||= this.children.slice(); a < i.length && i[a] < t;) a += 3;
				i[a] == t ? i[a + 2] = i[a + 2].addInner(e, s, o + 1) : i.splice(a, 0, t, t + e.nodeSize, Kw(s, e, o + 1, Lw)), a += 3;
			}
		});
		let o = Hw(a ? Gw(n) : n, -r);
		if (o.length) {
			let e = new jw(t.content);
			for (let n = 0; n < o.length; n++) o[n].type.valid(t, o[n], e) || o.splice(n--, 1);
		}
		return new e(o.length ? this.local.concat(o).sort(qw) : this.local, i || this.children);
	}
	remove(e) {
		return e.length == 0 || this == zw ? this : this.removeInner(e, 0);
	}
	removeInner(t, n) {
		let r = this.children, i = this.local;
		for (let e = 0; e < r.length; e += 3) {
			let i, a = r[e] + n, o = r[e + 1] + n;
			for (let e = 0, n; e < t.length; e++) (n = t[e]) && n.from > a && n.to < o && (t[e] = null, (i ||= []).push(n));
			if (!i) continue;
			r == this.children && (r = this.children.slice());
			let s = r[e + 2].removeInner(i, a + 1);
			s == zw ? (r.splice(e, 3), e -= 3) : r[e + 2] = s;
		}
		if (i.length) {
			for (let e = 0, r; e < t.length; e++) if (r = t[e]) for (let e = 0; e < i.length; e++) i[e].eq(r, n) && (i == this.local && (i = this.local.slice()), i.splice(e--, 1));
		}
		return r == this.children && i == this.local ? this : i.length || r.length ? new e(i, r) : zw;
	}
	forChild(t, n) {
		if (this == zw) return this;
		if (n.isLeaf) return e.empty;
		let r, i;
		for (let e = 0; e < this.children.length; e += 3) if (this.children[e] >= t) {
			this.children[e] == t && (r = this.children[e + 2]);
			break;
		}
		let a = t + 1, o = a + n.content.size;
		for (let e = 0; e < this.local.length; e++) {
			let t = this.local[e];
			if (t.from < o && t.to > a && t.type instanceof Nw) {
				let e = Math.max(a, t.from) - a, n = Math.min(o, t.to) - a;
				e < n && (i ||= []).push(t.copy(e, n));
			}
		}
		if (i) {
			let t = new e(i.sort(qw), Iw);
			return r ? new Bw([t, r]) : t;
		}
		return r || zw;
	}
	eq(t) {
		if (this == t) return !0;
		if (!(t instanceof e) || this.local.length != t.local.length || this.children.length != t.children.length) return !1;
		for (let e = 0; e < this.local.length; e++) if (!this.local[e].eq(t.local[e])) return !1;
		for (let e = 0; e < this.children.length; e += 3) if (this.children[e] != t.children[e] || this.children[e + 1] != t.children[e + 1] || !this.children[e + 2].eq(t.children[e + 2])) return !1;
		return !0;
	}
	locals(e) {
		return Jw(this.localsInner(e));
	}
	localsInner(e) {
		if (this == zw) return Iw;
		if (e.inlineContent || !this.local.some(Nw.is)) return this.local;
		let t = [];
		for (let e = 0; e < this.local.length; e++) this.local[e].type instanceof Nw || t.push(this.local[e]);
		return t;
	}
	forEachSet(e) {
		e(this);
	}
};
Rw.empty = new Rw([], []), Rw.removeOverlap = Jw;
var zw = Rw.empty, Bw = class e {
	constructor(e) {
		this.members = e;
	}
	map(t, n) {
		let r = this.members.map((e) => e.map(t, n, Lw));
		return e.from(r);
	}
	forChild(t, n) {
		if (n.isLeaf) return Rw.empty;
		let r = [];
		for (let i = 0; i < this.members.length; i++) {
			let a = this.members[i].forChild(t, n);
			a != zw && (a instanceof e ? r = r.concat(a.members) : r.push(a));
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
		return t ? Jw(n ? t : t.sort(qw)) : Iw;
	}
	static from(t) {
		switch (t.length) {
			case 0: return zw;
			case 1: return t[0];
			default: return new e(t.every((e) => e instanceof Rw) ? t : t.reduce((e, t) => e.concat(t instanceof Rw ? t : t.members), []));
		}
	}
	forEachSet(e) {
		for (let t = 0; t < this.members.length; t++) this.members[t].forEachSet(e);
	}
};
function Vw(e, t, n, r, i, a, o) {
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
			r == zw ? (s[t + 1] = -2, c = !0) : (s[t] = u, s[t + 1] = d, s[t + 2] = r);
		} else c = !0;
	}
	if (c) {
		let c = Kw(Uw(s, e, t, n, i, a, o), r, 0, o);
		t = c.local;
		for (let e = 0; e < s.length; e += 3) s[e + 1] < 0 && (s.splice(e, 3), e -= 3);
		for (let e = 0, t = 0; e < c.children.length; e += 3) {
			let n = c.children[e];
			for (; t < s.length && s[t] < n;) t += 3;
			s.splice(t, 0, c.children[e], c.children[e + 1], c.children[e + 2]);
		}
	}
	return new Rw(t.sort(qw), s);
}
function Hw(e, t) {
	if (!t || !e.length) return e;
	let n = [];
	for (let r = 0; r < e.length; r++) {
		let i = e[r];
		n.push(new Fw(i.from + t, i.to + t, i.type));
	}
	return n;
}
function Uw(e, t, n, r, i, a, o) {
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
function Ww(e, t, n) {
	if (t.isLeaf) return null;
	let r = n + t.nodeSize, i = null;
	for (let t = 0, a; t < e.length; t++) (a = e[t]) && a.from > n && a.to < r && ((i ||= []).push(a), e[t] = null);
	return i;
}
function Gw(e) {
	let t = [];
	for (let n = 0; n < e.length; n++) e[n] != null && t.push(e[n]);
	return t;
}
function Kw(e, t, n, r) {
	let i = [], a = !1;
	t.forEach((t, o) => {
		let s = Ww(e, t, o + n);
		if (s) {
			a = !0;
			let e = Kw(s, t, n + o + 1, r);
			e != zw && i.push(o, o + t.nodeSize, e);
		}
	});
	let o = Hw(a ? Gw(e) : e, -n).sort(qw);
	if (o.length) {
		let e = new jw(t.content);
		for (let n = 0; n < o.length; n++) o[n].type.valid(t, o[n], e) || (r.onRemove && r.onRemove(o[n].spec), o.splice(n--, 1));
	}
	return o.length || i.length ? new Rw(o, i) : zw;
}
function qw(e, t) {
	return e.from - t.from || e.to - t.to;
}
function Jw(e) {
	let t = e;
	for (let n = 0; n < t.length - 1; n++) {
		let r = t[n];
		if (r.from != r.to) for (let i = n + 1; i < t.length; i++) {
			let a = t[i];
			if (a.from == r.from) a.to != r.to && (t == e && (t = e.slice()), t[i] = a.copy(a.from, r.to), Yw(t, i + 1, a.copy(r.to, a.to)));
			else {
				a.from < r.to && (t == e && (t = e.slice()), t[n] = r.copy(r.from, a.from), Yw(t, i, r.copy(a.from, r.to)));
				break;
			}
		}
	}
	return t;
}
function Yw(e, t, n) {
	for (; t < e.length && qw(n, e[t]) > 0;) t++;
	e.splice(t, 0, n);
}
function Xw(e) {
	let t = [];
	return e.someProp("decorations", (n) => {
		let r = n(e.state);
		r && r != zw && t.push(r);
	}), e.cursorWrapper && t.push(Rw.create(e.state.doc, [e.cursorWrapper.deco])), Bw.from(t);
}
var Zw = {
	childList: !0,
	characterData: !0,
	characterDataOldValue: !0,
	attributes: !0,
	attributeOldValue: !0,
	subtree: !0
}, Qw = wx && Tx <= 11, $w = class {
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
}, eT = class {
	constructor(e, t) {
		this.view = e, this.handleDOMChange = t, this.queue = [], this.flushingSoon = -1, this.observer = null, this.currentSelection = new $w(), this.onCharData = null, this.suppressingSelectionUpdates = !1, this.lastChangedTextNode = null, this.observer = window.MutationObserver && new window.MutationObserver((t) => {
			for (let e = 0; e < t.length; e++) this.queue.push(t[e]);
			wx && Tx <= 11 && t.some((e) => e.type == "childList" && e.removedNodes.length || e.type == "characterData" && e.oldValue.length > e.target.nodeValue.length) ? this.flushSoon() : Ax && e.composing && t.some((e) => e.type == "childList" && e.target.nodeName == "TR") ? (e.input.badSafariComposition = !0, this.flushSoon()) : this.flush();
		}), Qw && (this.onCharData = (e) => {
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
		this.observer && (this.observer.takeRecords(), this.observer.observe(this.view.dom, Zw)), this.onCharData && this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.connectSelection();
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
		if (nC(this.view)) {
			if (this.suppressingSelectionUpdates) return KS(this.view);
			if (wx && Tx <= 11 && !this.view.state.selection.empty) {
				let e = this.view.domSelectionRange();
				if (e.focusNode && ix(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset)) return this.flushSoon();
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
		for (let n = e.focusNode; n; n = ex(n)) t.add(n);
		for (let r = e.anchorNode; r; r = ex(r)) if (t.has(r)) {
			n = r;
			break;
		}
		let r = n && this.view.docView.nearestDesc(n);
		if (r && r.ignoreMutation({
			type: "selection",
			target: cx(n) ? n.parentNode : n
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
		!this.suppressingSelectionUpdates && nC(e) && (n = e.domSelectionRange(), r = !this.currentSelection.eq(n) && !this.ignoreSelectionChange(n));
		let i = -1, a = -1, o = !1, s = [];
		if (e.editable) for (let e = 0; e < t.length; e++) {
			let n = this.registerMutation(t[e], s);
			n && (i = i < 0 ? n.from : Math.min(n.from, i), a = a < 0 ? n.to : Math.max(n.to, a), n.typeOver && (o = !0));
		}
		if (s.some((e) => e.nodeName == "BR") && (e.input.lastKeyCode == 8 || e.input.lastKeyCode == 46 || Ox && (e.composing || e.input.compositionEndedAt > Date.now() - 50) && t.some((e) => e.type == "childList" && e.removedNodes.length))) {
			for (let e of s) if (e.nodeName == "BR" && e.parentNode) {
				let t = e.nextSibling;
				for (; t && J(t);) {
					if (t.contentEditable == "false") {
						e.parentNode.removeChild(e);
						break;
					}
					t = t.firstChild;
				}
			}
		} else if (Ex && s.length) {
			let t = s.filter((e) => e.nodeName == "BR");
			if (t.length == 2) {
				let [e, n] = t;
				e.parentNode && e.parentNode.parentNode == n.parentNode ? n.remove() : e.remove();
			} else {
				let { focusNode: n } = this.currentSelection;
				for (let r of t) {
					let t = r.parentNode;
					t && t.nodeName == "LI" && (!n || oT(e, n) != t) && r.remove();
				}
			}
		}
		let c = null;
		i < 0 && r && e.input.lastFocus > Date.now() - 200 && Math.max(e.input.lastTouch, e.input.lastClick.time) < Date.now() - 300 && mx(n) && (c = WS(e)) && c.eq(W.near(e.state.doc.resolve(0), 1)) ? (e.input.lastFocus = 0, KS(e), this.currentSelection.set(n), e.scrollToSelection()) : (i > -1 || r) && (i > -1 && (e.docView.markDirty(i, a), rT(e)), e.input.badSafariComposition && (e.input.badSafariComposition = !1, sT(e, s)), this.handleDOMChange(i, a, o, s), e.docView && e.docView.dirty ? e.updateState(e.state) : n && !this.currentSelection.eq(n) && KS(e), n && this.currentSelection.set(n));
	}
	registerMutation(e, t) {
		if (t.indexOf(e.target) > -1) return null;
		let n = this.view.docView.nearestDesc(e.target);
		if (e.type == "attributes" && (n == this.view.docView || e.attributeName == "contenteditable" || e.attributeName == "style" && !e.oldValue && !e.target.getAttribute("style")) || !n || n.ignoreMutation(e)) return null;
		if (e.type == "childList") {
			for (let n = 0; n < e.addedNodes.length; n++) {
				let r = e.addedNodes[n];
				t.push(r), cx(r) && (this.lastChangedTextNode = r);
			}
			if (n.contentDOM && n.contentDOM != n.dom && !n.contentDOM.contains(e.target)) return {
				from: n.posBefore,
				to: n.posAfter
			};
			let r = e.previousSibling, i = e.nextSibling;
			if (wx && Tx <= 11 && e.addedNodes.length) for (let t = 0; t < e.addedNodes.length; t++) {
				let { previousSibling: n, nextSibling: a } = e.addedNodes[t];
				(!n || Array.prototype.indexOf.call(e.addedNodes, n) < 0) && (r = n), (!a || Array.prototype.indexOf.call(e.addedNodes, a) < 0) && (i = a);
			}
			let a = r && r.parentNode == e.target ? $b(r) + 1 : 0, o = n.localPosFromDOM(e.target, a, -1), s = i && i.parentNode == e.target ? $b(i) : e.target.childNodes.length;
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
}, tT = /* @__PURE__ */ new WeakMap(), nT = !1;
function rT(e) {
	if (!tT.has(e) && (tT.set(e, null), [
		"normal",
		"nowrap",
		"pre-line"
	].indexOf(getComputedStyle(e.dom).whiteSpace) !== -1)) {
		if (e.requiresGeckoHackNode = Ex, nT) return;
		console.warn("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package."), nT = !0;
	}
}
function iT(e, t) {
	let n = t.startContainer, r = t.startOffset, i = t.endContainer, a = t.endOffset, o = e.domAtPos(e.state.selection.anchor);
	return ix(o.node, o.offset, i, a) && ([n, r, i, a] = [
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
function aT(e, t) {
	if (t.getComposedRanges) {
		let n = t.getComposedRanges(e.root)[0];
		if (n) return iT(e, n);
	}
	let n;
	function r(e) {
		e.preventDefault(), e.stopImmediatePropagation(), n = e.getTargetRanges()[0];
	}
	return e.dom.addEventListener("beforeinput", r, !0), document.execCommand("indent"), e.dom.removeEventListener("beforeinput", r, !0), n ? iT(e, n) : null;
}
function oT(e, t) {
	for (let n = t.parentNode; n && n != e.dom; n = n.parentNode) {
		let t = e.docView.nearestDesc(n, !0);
		if (t && t.node.isBlock) return n;
	}
	return null;
}
function sT(e, t) {
	let { focusNode: n, focusOffset: r } = e.domSelectionRange();
	for (let i of t) if (i.parentNode?.nodeName == "TR") {
		let t = i.nextSibling;
		for (; t && t.nodeName != "TD" && t.nodeName != "TH";) t = t.nextSibling;
		if (t) {
			let a = t;
			for (;;) {
				let e = a.firstChild;
				if (!e || !J(e) || e.contentEditable == "false" || /^(BR|IMG)$/.test(e.nodeName)) break;
				a = e;
			}
			a.insertBefore(i, a.firstChild), n == i && e.domSelection().collapse(i, r);
		} else i.parentNode.removeChild(i);
	}
}
function cT(e, t, n, r) {
	let { node: i, fromOffset: a, toOffset: o, from: s, to: c } = e.docView.parseRange(t, n), l = e.domSelectionRange(), u, d = l.anchorNode;
	if (d && lx(e.dom, d) && (u = [{
		node: d,
		offset: l.anchorOffset
	}], mx(l) || u.push({
		node: l.focusNode,
		offset: l.focusOffset
	})), Ox && e.input.lastKeyCode === 8) for (let e = o; e > a; e--) {
		let t = i.childNodes[e - 1], n = t.pmViewDesc;
		if (t.nodeName == "BR" && !n) {
			o = e;
			break;
		}
		if (!n || n.size) break;
	}
	let f = e.state.doc, p = e.someProp("domParser") || nv.fromSchema(e.state.schema), m = f.resolve(s), h = null, g = p.parse(i, {
		topNode: m.parent,
		topMatch: m.parent.contentMatchAt(m.index()),
		topOpen: !0,
		from: a,
		to: o,
		preserveWhitespace: m.parent.type.whitespace != "pre" || "full",
		findPositions: u,
		ruleFromNode: lT(r),
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
var lT = (e) => (t) => {
	let n = t.pmViewDesc;
	if (n) return n.parseRule(e);
	if (t.nodeName == "BR" && t.parentNode) {
		if (Ax && /^(ul|ol)$/i.test(t.parentNode.nodeName)) {
			let e = document.createElement("div");
			return e.appendChild(document.createElement("li")), { skip: e };
		}
		if (t.parentNode.lastChild == t || Ax && /^(tr|table)$/i.test(t.parentNode.nodeName)) return { ignore: !0 };
	} else if (t.nodeName == "IMG" && t.getAttribute("mark-placeholder")) return { ignore: !0 };
	return null;
}, uT = /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|img|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
function dT(e, t, n, r, i) {
	let a = e.input.compositionPendingChanges || (e.composing ? e.input.compositionID : 0);
	if (e.input.compositionPendingChanges = 0, t < 0) {
		let t = e.input.lastSelectionTime > Date.now() - 50 ? e.input.lastSelectionOrigin : null, n = WS(e, t);
		if (n && !e.state.selection.eq(n)) {
			if (Ox && Px && e.input.lastKeyCode === 13 && Date.now() - 100 < e.input.lastKeyCodeTime && XC(e, "Enter")) return;
			let r = e.state.tr.setSelection(n);
			t == "pointer" ? r.setMeta("pointer", !0) : t == "key" && r.scrollIntoView(), a && r.setMeta("composition", a), e.dispatch(r);
		}
		return;
	}
	let o = e.state.doc.resolve(t), s = o.sharedDepth(n);
	t = o.before(s + 1), n = e.state.doc.resolve(n).after(s + 1);
	let c = e.state.selection, l = cT(e, t, n, i), u = e.state.doc, d = u.slice(l.from, l.to), f, p;
	e.input.lastKeyCode === 8 && Date.now() - 100 < e.input.lastKeyCodeTime ? (f = e.state.selection.to, p = "end") : (f = e.state.selection.from, p = "start"), e.input.lastKeyCode = null;
	let m = _T(d.content, l.doc.content, l.from, f, p);
	if (m && e.input.domChangeCount++, (jx && e.input.lastIOSEnter > Date.now() - 225 || Px) && i.some((e) => J(e) && !uT.test(e.nodeName)) && (!m || m.endA >= m.endB) && XC(e, "Enter")) {
		e.input.lastIOSEnter = 0;
		return;
	}
	if (!m) {
		if (r && c instanceof G && !c.empty && c.$head.sameParent(c.$anchor) && !e.composing && !(l.sel && l.sel.anchor != l.sel.head)) m = {
			start: c.from,
			endA: c.to,
			endB: c.to
		};
		else {
			if (l.sel) {
				let t = fT(e, e.state.doc, l.sel);
				if (t && !t.eq(e.state.selection)) {
					let n = e.state.tr.setSelection(t);
					a && n.setMeta("composition", a), e.dispatch(n);
				}
			}
			return;
		}
	}
	e.state.selection.from < e.state.selection.to && m.start == m.endB && e.state.selection instanceof G && (m.start > e.state.selection.from && m.start <= e.state.selection.from + 2 && e.state.selection.from >= l.from ? m.start = e.state.selection.from : m.endA < e.state.selection.to && m.endA >= e.state.selection.to - 2 && e.state.selection.to <= l.to && (m.endB += e.state.selection.to - m.endA, m.endA = e.state.selection.to)), wx && Tx <= 11 && m.endB == m.start + 1 && m.endA == m.start && m.start > l.from && l.doc.textBetween(m.start - l.from - 1, m.start - l.from + 1) == " \xA0" && (m.start--, m.endA--, m.endB--);
	let h = l.doc.resolveNoCache(m.start - l.from), g = l.doc.resolveNoCache(m.endB - l.from), _ = u.resolve(m.start), v = h.sameParent(g) && h.parent.inlineContent && _.end() >= m.endA;
	if ((jx && e.input.lastIOSEnter > Date.now() - 225 && (!v || i.some((e) => e.nodeName == "DIV" || e.nodeName == "P")) || !v && hT(l.doc, h.pos, g.pos)) && XC(e, "Enter")) {
		e.input.lastIOSEnter = 0;
		return;
	}
	if (e.state.selection.anchor > m.start && (v ? m.endA > m.start && m.endB == m.start : mT(u, m.start, m.endA, h, g)) && XC(e, "Backspace")) {
		Px && Ox && e.domObserver.suppressSelectionUpdates();
		return;
	}
	Ox && m.endB == m.start && (e.input.lastChromeDelete = Date.now()), Px && !v && h.start() != g.start() && g.parentOffset == 0 && h.depth == g.depth && l.sel && l.sel.anchor == l.sel.head && l.sel.head == m.endA && (m.endB -= 2, g = l.doc.resolveNoCache(m.endB - l.from), setTimeout(() => XC(e, "Enter"), 20));
	let y = m.start, b = m.endA, x = (t) => {
		let n = t || e.state.tr.replace(y, b, l.doc.slice(m.start - l.from, m.endB - l.from));
		if (l.sel) {
			let t = fT(e, n.doc, l.sel);
			t && !(Ox && e.composing && t.empty && (m.start != m.endB || e.input.lastChromeDelete < Date.now() - 100) && (t.head == y || t.head == n.mapping.map(b) - 1) || wx && t.empty && t.head == y) && n.setSelection(t);
		}
		return a && n.setMeta("composition", a), n.scrollIntoView();
	}, S;
	if (v) {
		if (h.pos == g.pos) {
			wx && Tx <= 11 && h.parentOffset == 0 && (e.domObserver.suppressSelectionUpdates(), setTimeout(() => KS(e), 20));
			let t = x(e.state.tr.delete(y, b)), n = u.resolve(m.start).marksAcross(u.resolve(m.endA));
			n && t.ensureMarks(n), e.dispatch(t);
		} else if (m.endA == m.endB && (S = pT(h.parent.content.cut(h.parentOffset, g.parentOffset), _.parent.content.cut(_.parentOffset, m.endA - _.start())))) {
			let t = x(e.state.tr);
			S.type == "add" ? t.addMark(y, b, S.mark) : t.removeMark(y, b, S.mark), e.dispatch(t);
		} else if (h.parent.child(h.index()).isText && h.index() == g.index() - +!g.textOffset) {
			let t = h.parent.textBetween(h.parentOffset, g.parentOffset), n = () => x(e.state.tr.insertText(t, y, b));
			e.someProp("handleTextInput", (r) => r(e, y, b, t, n)) || e.dispatch(n());
		} else e.dispatch(x());
	} else e.dispatch(x());
}
function fT(e, t, n) {
	return Math.max(n.anchor, n.head) > t.content.size ? null : tC(e, t.resolve(n.anchor), t.resolve(n.head));
}
function pT(e, t) {
	let n = e.firstChild.marks, r = t.firstChild.marks, i = n, a = r, o, s, c;
	for (let e = 0; e < r.length; e++) i = r[e].removeFromSet(i);
	for (let e = 0; e < n.length; e++) a = n[e].removeFromSet(a);
	if (i.length == 1 && a.length == 0) s = i[0], o = "add", c = (e) => e.mark(s.addToSet(e.marks));
	else if (i.length == 0 && a.length == 1) s = a[0], o = "remove", c = (e) => e.mark(s.removeFromSet(e.marks));
	else return null;
	let l = [];
	for (let e = 0; e < t.childCount; e++) l.push(c(t.child(e)));
	if (V.from(l).eq(e)) return {
		mark: s,
		type: o
	};
}
function mT(e, t, n, r, i) {
	if (n - t <= i.pos - r.pos || gT(r, !0, !1) < i.pos) return !1;
	let a = e.resolve(t);
	if (!r.parent.inlineContent) {
		let e = a.nodeAfter;
		return e != null && n == t + e.nodeSize;
	}
	if (a.parentOffset < a.parent.content.size || !a.parent.isTextblock) return !1;
	let o = e.resolve(gT(a, !0, !0));
	return !o.parent.isTextblock || o.pos > n || gT(o, !0, !1) < n ? !1 : r.parent.content.cut(r.parentOffset).eq(o.parent.content);
}
function hT(e, t, n) {
	let r = 0, i = 0;
	return e.nodesBetween(t, n, (e, a) => {
		e.isTextblock && a >= t && a < n ? r++ : (e.isText ? /\S/.test(e.text.slice(Math.max(0, t - a), Math.min(e.nodeSize, n - a))) : e.isLeaf) && i++;
	}), i == 0 && r == 1;
}
function gT(e, t, n) {
	let r = e.depth, i = t ? e.end() : e.pos;
	for (; r > 0 && (t || e.indexAfter(r) == e.node(r).childCount);) r--, i++, t = !1;
	if (n) {
		let t = e.node(r).maybeChild(e.indexAfter(r));
		for (; t && !t.isLeaf;) t = t.firstChild, i++;
	}
	return i;
}
function _T(e, t, n, r, i) {
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
var vT = class {
	constructor(e, t) {
		this._root = null, this.focused = !1, this.trackWrites = null, this.mounted = !1, this.markCursor = null, this.cursorWrapper = null, this.lastSelectedViewDesc = void 0, this.input = new HC(), this.prevDirectPlugins = [], this.pluginViews = [], this.requiresGeckoHackNode = !1, this.dragging = null, this._props = t, this.state = t.state, this.directPlugins = t.plugins || [], this.directPlugins.forEach(TT), this.dispatch = this.dispatch.bind(this), this.dom = e && e.mount || document.createElement("div"), e && (e.appendChild ? e.appendChild(this.dom) : typeof e == "function" ? e(this.dom) : e.mount && (this.mounted = !0)), this.editable = xT(this), bT(this), this.nodeViews = CT(this), this.docView = wS(this.state.doc, yT(this), Xw(this), this.dom, this), this.domObserver = new eT(this, (e, t, n, r) => dT(this, e, t, n, r)), this.domObserver.start(), UC(this), this.updatePluginViews();
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
		e.handleDOMEvents != this._props.handleDOMEvents && KC(this);
		let t = this._props;
		this._props = e, e.plugins && (e.plugins.forEach(TT), this.directPlugins = e.plugins), this.updateStateInner(e.state, t);
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
		e.storedMarks && this.composing && (_w(this), i = !0), this.state = e;
		let a = n.plugins != e.plugins || this._props.plugins != t.plugins;
		if (a || this._props.plugins != t.plugins || this._props.nodeViews != t.nodeViews) {
			let e = CT(this);
			wT(e, this.nodeViews) && (this.nodeViews = e, r = !0);
		}
		(a || t.handleDOMEvents != this._props.handleDOMEvents) && KC(this), this.editable = xT(this), bT(this);
		let o = Xw(this), s = yT(this), c = n.plugins != e.plugins && !n.doc.eq(e.doc) ? "reset" : e.scrollToSelection > n.scrollToSelection ? "to selection" : "preserve", l = r || !this.docView.matchesNode(e.doc, s, o);
		(l || !e.selection.eq(n.selection)) && (i = !0);
		let u = c == "preserve" && i && this.dom.style.overflowAnchor == null && Vx(this);
		if (i) {
			this.domObserver.stop();
			let t = l && (wx || Ox) && !this.composing && !n.selection.empty && !e.selection.empty && ST(n.selection, e.selection);
			if (l) {
				let n = Ox ? this.trackWrites = this.domSelectionRange().focusNode : null;
				this.composing && (this.input.compositionNode = vw(this)), (r || !this.docView.update(e.doc, s, o, this)) && (this.docView.updateOuterDeco(s), this.docView.destroy(), this.docView = wS(e.doc, s, o, this.dom, this)), !n || this.trackWrites && this.dom.contains(this.trackWrites) || (t = !0);
			}
			let i = this.input.mouseDown;
			t || !(i && this.domObserver.currentSelection.eq(this.domSelectionRange()) && iC(this) && i.delaySelUpdate()) ? KS(this, t) : ($S(this, e.selection), this.domObserver.setCurSelection()), this.domObserver.start();
		}
		this.updatePluginViews(n), this.dragging?.node && !n.doc.eq(e.doc) && this.updateDraggedNode(this.dragging, n), c == "reset" ? this.dom.scrollTop = 0 : c == "to selection" ? this.scrollToSelection() : u && Ux(u);
	}
	scrollToSelection() {
		let e = this.domSelectionRange().focusNode;
		if (e && lx(this.dom, e) && !this.someProp("handleScrollToSelection", (e) => e(this))) {
			if (this.state.selection instanceof K) {
				let t = this.docView.domAfterPos(this.state.selection.from);
				J(t) && Bx(this, t.getBoundingClientRect(), e);
			} else Bx(this, this.coordsAtPos(this.state.selection.head, 1), e);
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
		this.dragging = new Ew(e.slice, e.move, r < 0 ? void 0 : K.create(this.state.doc, r));
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
		if (wx) {
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
		this.domObserver.stop(), this.editable && Kx(this.dom), KS(this), this.domObserver.start();
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
		return eS(this, e);
	}
	coordsAtPos(e, t = 1) {
		return iS(this, e, t);
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
		return mS(this, t || this.state, e);
	}
	pasteHTML(e, t) {
		return ww(this, "", e, !1, t || new ClipboardEvent("paste"));
	}
	pasteText(e, t) {
		return ww(this, e, null, !0, t || new ClipboardEvent("paste"));
	}
	serializeForClipboard(e) {
		return CC(this, e);
	}
	destroy() {
		this.docView && (GC(this), this.destroyPluginViews(), this.mounted ? (this.docView.update(this.state.doc, [], Xw(this), this), this.dom.textContent = "") : this.dom.parentNode && this.dom.parentNode.removeChild(this.dom), this.docView.destroy(), this.docView = null, rx());
	}
	get isDestroyed() {
		return this.docView == null;
	}
	dispatchEvent(e) {
		return YC(this, e);
	}
	domSelectionRange() {
		let e = this.dom.isConnected !== !1 && this.domSelection();
		return e ? Ax && this.root.nodeType === 11 && gx(this.dom.ownerDocument) == this.dom && aT(this, e) || e : {
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
vT.prototype.dispatch = function(e) {
	let t = this._props.dispatchTransaction;
	t ? t.call(this, e) : this.updateState(this.state.apply(e));
};
function yT(e) {
	let t = Object.create(null);
	return t.class = "ProseMirror", t.contenteditable = String(e.editable), e.someProp("attributes", (n) => {
		if (typeof n == "function" && (n = n(e.state)), n) for (let e in n) e == "class" ? t.class += " " + n[e] : e == "style" ? t.style = (t.style ? t.style + ";" : "") + n[e] : !t[e] && e != "contenteditable" && e != "nodeName" && (t[e] = String(n[e]));
	}), t.translate ||= "no", [Fw.node(0, e.state.doc.content.size, t)];
}
function bT(e) {
	if (e.markCursor) {
		let t = document.createElement("img");
		t.className = "ProseMirror-separator", t.setAttribute("mark-placeholder", "true"), t.setAttribute("alt", ""), e.cursorWrapper = {
			dom: t,
			deco: Fw.widget(e.state.selection.from, t, {
				raw: !0,
				marks: e.markCursor
			})
		};
	} else e.cursorWrapper = null;
}
function xT(e) {
	return !e.someProp("editable", (t) => t(e.state) === !1);
}
function ST(e, t) {
	let n = Math.min(e.$anchor.sharedDepth(e.head), t.$anchor.sharedDepth(t.head));
	return e.$anchor.start(n) != t.$anchor.start(n);
}
function CT(e) {
	let t = Object.create(null);
	function n(e) {
		for (let n in e) Object.prototype.hasOwnProperty.call(t, n) || (t[n] = e[n]);
	}
	return e.someProp("nodeViews", n), e.someProp("markViews", n), t;
}
function wT(e, t) {
	let n = 0, r = 0;
	for (let r in e) {
		if (e[r] != t[r]) return !0;
		n++;
	}
	for (let e in t) r++;
	return n != r;
}
function TT(e) {
	if (e.spec.state || e.spec.filterTransaction || e.spec.appendTransaction) throw RangeError("Plugins passed directly to the view must not have a state component");
}
for (var ET = {
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
}, DT = {
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
}, OT = typeof navigator < "u" && /Mac/.test(navigator.platform), kT = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), AT = 0; AT < 10; AT++) ET[48 + AT] = ET[96 + AT] = String(AT);
for (var AT = 1; AT <= 24; AT++) ET[AT + 111] = "F" + AT;
for (var AT = 65; AT <= 90; AT++) ET[AT] = String.fromCharCode(AT + 32), DT[AT] = String.fromCharCode(AT);
for (var jT in ET) DT.hasOwnProperty(jT) || (DT[jT] = ET[jT]);
function MT(e) {
	var t = !(OT && e.metaKey && e.shiftKey && !e.ctrlKey && !e.altKey || kT && e.shiftKey && e.key && e.key.length == 1 || e.key == "Unidentified") && e.key || (e.shiftKey ? DT : ET)[e.keyCode] || e.key || "Unidentified";
	return t == "Esc" && (t = "Escape"), t == "Del" && (t = "Delete"), t == "Left" && (t = "ArrowLeft"), t == "Up" && (t = "ArrowUp"), t == "Right" && (t = "ArrowRight"), t == "Down" && (t = "ArrowDown"), t;
}
// node_modules/prosemirror-keymap/dist/index.js
var NT = typeof navigator < "u" && /Mac|iP(hone|[oa]d)/.test(navigator.platform), PT = typeof navigator < "u" && /Win/.test(navigator.platform);
function FT(e) {
	let t = e.split(/-(?!$)/), n = t[t.length - 1];
	n == "Space" && (n = " ");
	let r, i, a, o;
	for (let e = 0; e < t.length - 1; e++) {
		let n = t[e];
		if (/^(cmd|meta|m)$/i.test(n)) o = !0;
		else if (/^a(lt)?$/i.test(n)) r = !0;
		else if (/^(c|ctrl|control)$/i.test(n)) i = !0;
		else if (/^s(hift)?$/i.test(n)) a = !0;
		else if (/^mod$/i.test(n)) NT ? o = !0 : i = !0;
		else throw Error("Unrecognized modifier name: " + n);
	}
	return r && (n = "Alt-" + n), i && (n = "Ctrl-" + n), o && (n = "Meta-" + n), a && (n = "Shift-" + n), n;
}
function IT(e) {
	let t = Object.create(null);
	for (let n in e) t[FT(n)] = e[n];
	return t;
}
function LT(e, t, n = !0) {
	return t.altKey && (e = "Alt-" + e), t.ctrlKey && (e = "Ctrl-" + e), t.metaKey && (e = "Meta-" + e), n && t.shiftKey && (e = "Shift-" + e), e;
}
function RT(e) {
	return new q({ props: { handleKeyDown: zT(e) } });
}
function zT(e) {
	let t = IT(e);
	return function(e, n) {
		let r = MT(n), i, a = t[LT(r, n)];
		if (a && a(e.state, e.dispatch, e)) return !0;
		if (r.length == 1 && r != " ") {
			if (n.shiftKey) {
				let i = t[LT(r, n, !1)];
				if (i && i(e.state, e.dispatch, e)) return !0;
			}
			if ((n.altKey || n.metaKey || n.ctrlKey) && !(PT && n.ctrlKey && n.altKey) && (i = ET[n.keyCode]) && i != r) {
				let r = t[LT(i, n)];
				if (r && r(e.state, e.dispatch, e)) return !0;
			}
		}
		return !1;
	};
}
// node_modules/rope-sequence/dist/index.js
var BT = 200, VT = function() {};
VT.prototype.append = function(e) {
	return e.length ? (e = VT.from(e), !this.length && e || e.length < BT && this.leafAppend(e) || this.length < BT && e.leafPrepend(this) || this.appendInner(e)) : this;
}, VT.prototype.prepend = function(e) {
	return e.length ? VT.from(e).append(this) : this;
}, VT.prototype.appendInner = function(e) {
	return new UT(this, e);
}, VT.prototype.slice = function(e, t) {
	return e === void 0 && (e = 0), t === void 0 && (t = this.length), e >= t ? VT.empty : this.sliceInner(Math.max(0, e), Math.min(this.length, t));
}, VT.prototype.get = function(e) {
	if (!(e < 0 || e >= this.length)) return this.getInner(e);
}, VT.prototype.forEach = function(e, t, n) {
	t === void 0 && (t = 0), n === void 0 && (n = this.length), t <= n ? this.forEachInner(e, t, n, 0) : this.forEachInvertedInner(e, t, n, 0);
}, VT.prototype.map = function(e, t, n) {
	t === void 0 && (t = 0), n === void 0 && (n = this.length);
	var r = [];
	return this.forEach(function(t, n) {
		return r.push(e(t, n));
	}, t, n), r;
}, VT.from = function(e) {
	return e instanceof VT ? e : e && e.length ? new HT(e) : VT.empty;
};
var HT = /* @__PURE__ */ function(e) {
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
		if (this.length + e.length <= BT) return new t(this.values.concat(e.flatten()));
	}, t.prototype.leafPrepend = function(e) {
		if (this.length + e.length <= BT) return new t(e.flatten().concat(this.values));
	}, n.length.get = function() {
		return this.values.length;
	}, n.depth.get = function() {
		return 0;
	}, Object.defineProperties(t.prototype, n), t;
}(VT);
VT.empty = new HT([]);
var UT = /* @__PURE__ */ function(e) {
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
}(VT), WT = 500, GT = class e {
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
					u.push(new qT(t.map));
					let e = t.step.map(i.slice(a)), n;
					e && o.maybeStep(e).doc && (n = o.mapping.maps[o.mapping.maps.length - 1], l.push(new qT(n, void 0, void 0, l.length + u.length))), a--, n && i.appendMap(n, a);
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
			let r = t.steps[e].invert(t.docs[e]), l = new qT(t.mapping.maps[e], r, n), u;
			(u = c && c.merge(l)) && (l = u, e ? a.pop() : s = s.slice(0, s.length - 1)), a.push(l), n &&= (o++, void 0), i || (c = l);
		}
		let l = o - r.depth;
		return l > YT && (s = KT(s, l), o -= l), new e(s.append(a), o);
	}
	remapping(e, t) {
		let n = new Pv();
		return this.items.forEach((t, r) => {
			let i = t.mirrorOffset != null && r - t.mirrorOffset >= e ? n.maps.length - t.mirrorOffset : void 0;
			n.appendMap(t.map, i);
		}, e, t), n;
	}
	addMaps(t) {
		return this.eventCount == 0 ? this : new e(this.items.append(t.map((e) => new qT(e))), this.eventCount);
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
				l && s++, r.push(new qT(i, o, l));
			} else r.push(new qT(i));
		}, i);
		let l = [];
		for (let e = n; e < o; e++) l.push(new qT(a.maps[e]));
		let u = this.items.slice(0, i).append(l).append(r), d = new e(u, s);
		return d.emptyItemCount() > WT && (d = d.compress(this.items.length - r.length)), d;
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
					let c = new qT(o.invert(), t, s), l, u = i.length - 1;
					(l = i.length && i[u].merge(c)) ? i[u] = l : i.push(c);
				}
			} else e.map && r--;
		}, this.items.length, 0), new e(VT.from(i.reverse()), a);
	}
};
GT.empty = new GT(VT.empty, 0);
function KT(e, t) {
	let n;
	return e.forEach((e, r) => {
		if (e.selection && t-- == 0) return n = r, !1;
	}), e.slice(n);
}
var qT = class e {
	constructor(e, t, n, r) {
		this.map = e, this.step = t, this.selection = n, this.mirrorOffset = r;
	}
	merge(t) {
		if (this.step && t.step && !t.selection) {
			let n = t.step.merge(this.step);
			if (n) return new e(n.getMap().invert(), n, this.selection);
		}
	}
}, JT = class {
	constructor(e, t, n, r, i) {
		this.done = e, this.undone = t, this.prevRanges = n, this.prevTime = r, this.prevComposition = i;
	}
}, YT = 20;
function XT(e, t, n, r) {
	let i = n.getMeta(aE), a;
	if (i) return i.historyState;
	n.getMeta(oE) && (e = new JT(e.done, e.undone, null, 0, -1));
	let o = n.getMeta("appendedTransaction");
	if (n.steps.length == 0) return e;
	if (o && o.getMeta(aE)) return o.getMeta(aE).redo ? new JT(e.done.addTransform(n, void 0, r, rE(t)), e.undone, QT(n.mapping.maps), e.prevTime, e.prevComposition) : new JT(e.done, e.undone.addTransform(n, void 0, r, rE(t)), null, e.prevTime, e.prevComposition);
	if (n.getMeta("addToHistory") !== !1 && !(o && o.getMeta("addToHistory") === !1)) {
		let i = n.getMeta("composition"), a = e.prevTime == 0 || !o && e.prevComposition != i && (e.prevTime < (n.time || 0) - r.newGroupDelay || !ZT(n, e.prevRanges)), s = o ? $T(e.prevRanges, n.mapping) : QT(n.mapping.maps);
		return new JT(e.done.addTransform(n, a ? t.selection.getBookmark() : void 0, r, rE(t)), GT.empty, s, n.time, i ?? e.prevComposition);
	}
	return (a = n.getMeta("rebased")) ? new JT(e.done.rebased(n, a), e.undone.rebased(n, a), $T(e.prevRanges, n.mapping), e.prevTime, e.prevComposition) : new JT(e.done.addMaps(n.mapping.maps), e.undone.addMaps(n.mapping.maps), $T(e.prevRanges, n.mapping), e.prevTime, e.prevComposition);
}
function ZT(e, t) {
	if (!t) return !1;
	if (!e.docChanged) return !0;
	let n = !1;
	return e.mapping.maps[0].forEach((e, r) => {
		for (let i = 0; i < t.length; i += 2) e <= t[i + 1] && r >= t[i] && (n = !0);
	}), n;
}
function QT(e) {
	let t = [];
	for (let n = e.length - 1; n >= 0 && t.length == 0; n--) e[n].forEach((e, n, r, i) => t.push(r, i));
	return t;
}
function $T(e, t) {
	if (!e) return null;
	let n = [];
	for (let r = 0; r < e.length; r += 2) {
		let i = t.map(e[r], 1), a = t.map(e[r + 1], -1);
		i <= a && n.push(i, a);
	}
	return n;
}
function eE(e, t, n) {
	let r = rE(t), i = aE.get(t).spec.config, a = (n ? e.undone : e.done).popEvent(t, r);
	if (!a) return null;
	let o = a.selection.resolve(a.transform.doc), s = (n ? e.done : e.undone).addTransform(a.transform, t.selection.getBookmark(), i, r), c = new JT(n ? s : a.remaining, n ? a.remaining : s, null, 0, -1);
	return a.transform.setSelection(o).setMeta(aE, {
		redo: n,
		historyState: c
	});
}
var tE = !1, nE = null;
function rE(e) {
	let t = e.plugins;
	if (nE != t) {
		tE = !1, nE = t;
		for (let e = 0; e < t.length; e++) if (t[e].spec.historyPreserveItems) {
			tE = !0;
			break;
		}
	}
	return tE;
}
function iE(e) {
	return e.setMeta(oE, !0);
}
var aE = new sb("history"), oE = new sb("closeHistory");
function sE(e = {}) {
	return e = {
		depth: e.depth || 100,
		newGroupDelay: e.newGroupDelay || 500
	}, new q({
		key: aE,
		state: {
			init() {
				return new JT(GT.empty, GT.empty, null, 0, -1);
			},
			apply(t, n, r) {
				return XT(n, r, t, e);
			}
		},
		config: e,
		props: { handleDOMEvents: { beforeinput(e, t) {
			let n = t.inputType, r = n == "historyUndo" ? lE : n == "historyRedo" ? uE : null;
			return !r || !e.editable ? !1 : (t.preventDefault(), r(e.state, e.dispatch));
		} } }
	});
}
function cE(e, t) {
	return (n, r) => {
		let i = aE.getState(n);
		if (!i || (e ? i.undone : i.done).eventCount == 0) return !1;
		if (r) {
			let a = eE(i, n, e);
			a && r(t ? a.scrollIntoView() : a);
		}
		return !0;
	};
}
var lE = cE(!1, !0), uE = cE(!0, !0);
function dE(e) {
	return e.getMeta(aE) != null;
}
// node_modules/@tiptap/core/dist/index.js
function fE(e) {
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
var pE = class e {
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
			state: fE({
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
}, mE = () => ({ editor: e, view: t }) => (requestAnimationFrame(() => {
	if (!e.isDestroyed) {
		var n;
		t.dom.blur(), (n = window) == null || (n = n.getSelection()) == null || n.removeAllRanges();
	}
}), !0), hE = (e = !0) => ({ commands: t }) => t.setContent("", { emitUpdate: e }), gE = () => ({ tr: e, dispatch: t }) => {
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
				let l = Qv(o);
				if (t.type.isTextblock) {
					let { defaultType: t } = i.parent.contentMatchAt(i.index()), n = e.doc.nodeAt(o.start);
					t && n && !n.hasMarkup(t) && t.validContent(n.content) && e.setNodeMarkup(o.start, t);
				}
				(l || l === 0) && e.lift(o, l);
			}), e.doc.eq(t)) break;
		}
	}), !0;
}, _E = (e) => (t) => e(t), vE = () => ({ state: e, dispatch: t }) => Db(e, t), yE = (e, t) => ({ editor: n, tr: r }) => {
	let { state: i } = n, a = i.doc.slice(e.from, e.to);
	r.deleteRange(e.from, e.to);
	let o = r.mapping.map(t);
	return r.insert(o, a.content), r.setSelection(new G(r.doc.resolve(Math.max(o - 1, 0)))), !0;
}, bE = () => ({ tr: e, dispatch: t }) => {
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
function xE(e, t) {
	if (typeof e == "string") {
		if (!t.nodes[e]) throw Error(`There is no node type named '${e}'. Maybe you forgot to add the extension?`);
		return t.nodes[e];
	}
	return e;
}
var SE = (e) => ({ tr: t, state: n, dispatch: r }) => {
	let i = xE(e, n.schema), a = t.selection.$anchor;
	for (let e = a.depth; e > 0; --e) if (a.node(e).type === i) {
		if (r) {
			let n = a.before(e), r = a.after(e);
			t.delete(n, r).scrollIntoView();
		}
		return !0;
	}
	return !1;
}, CE = (e) => ({ tr: t, dispatch: n }) => {
	let { from: r, to: i } = e;
	return n && t.delete(r, i), !0;
}, wE = (e) => e.content ? /^text(\*|\+)/.test(e.content) : !1, TE = (e, t, n) => {
	if (!e.parent.isInline || n === "left" && e.pos > e.start() || n === "right" && e.pos < e.end()) return e.pos;
	let r = t.nodes[e.parent.type.name].spec;
	return wE(r) ? n === "left" ? e.start() - 1 : e.end() + 1 : e.pos;
}, EE = (e, t, n) => ({
	from: TE(e, n, "left"),
	to: TE(t, n, "right")
}), DE = () => ({ state: e, dispatch: t }) => {
	if (e.selection.empty) return !1;
	if (t) {
		let n = e.tr, { ranges: r } = e.selection, i = e.selection instanceof G ? e.selection.$from.marksAcross(e.selection.$to) : null, a = n.steps.length;
		r.forEach((t) => {
			let r = n.mapping.slice(a), { from: i, to: o } = EE(n.doc.resolve(r.map(t.$from.pos)), n.doc.resolve(r.map(t.$to.pos)), e.schema);
			n.deleteRange(i, o);
		}), n.selection.empty || n.setSelection(G.near(n.doc.resolve(n.selection.from))), i && n.ensureMarks(i), n.scrollIntoView(), t(n);
	}
	return !0;
}, OE = () => ({ commands: e }) => e.keyboardShortcut("Enter"), kE = () => ({ state: e, dispatch: t }) => Eb(e, t);
function AE(e) {
	return Object.prototype.toString.call(e) === "[object RegExp]";
}
function jE(e, t, n = { strict: !0 }) {
	let r = Object.keys(t);
	return !r.length || r.every((r) => n.strict ? t[r] === e[r] : AE(t[r]) ? t[r].test(e[r]) : t[r] === e[r]);
}
function ME(e, t, n = {}) {
	return e.find((e) => e.type === t && jE(Object.fromEntries(Object.keys(n).map((t) => [t, e.attrs[t]])), n));
}
function NE(e, t, n = {}) {
	return !!ME(e, t, n);
}
function PE(e, t, n) {
	if (!e || !t) return;
	let r = e.parent.childAfter(e.parentOffset);
	if (r.node && r.node.marks.some((e) => e.type === t) || (r = e.parent.childBefore(e.parentOffset)), !r.node || !r.node.marks.some((e) => e.type === t)) return;
	if (!n) {
		let e = r.node.marks.find((e) => e.type === t);
		e && (n = e.attrs);
	}
	if (!ME([...r.node.marks], t, n)) return;
	let i = r.index, a = e.start() + r.offset, o = i + 1, s = a + r.node.nodeSize;
	for (; i > 0 && NE([...e.parent.child(i - 1).marks], t, n);) --i, a -= e.parent.child(i).nodeSize;
	for (; o < e.parent.childCount && NE([...e.parent.child(o).marks], t, n);) s += e.parent.child(o).nodeSize, o += 1;
	return {
		from: a,
		to: s
	};
}
function FE(e, t) {
	if (typeof e == "string") {
		if (!t.marks[e]) throw Error(`There is no mark type named '${e}'. Maybe you forgot to add the extension?`);
		return t.marks[e];
	}
	return e;
}
var IE = (e, t) => ({ tr: n, state: r, dispatch: i }) => {
	let a = FE(e, r.schema), { doc: o, selection: s } = n, { $from: c, from: l, to: u } = s;
	if (i) {
		let e = PE(c, a, t);
		if (e && e.from <= l && e.to >= u) {
			let t = G.create(o, e.from, e.to);
			n.setSelection(t);
		}
	}
	return !0;
}, LE = (e) => (t) => {
	let n = typeof e == "function" ? e(t) : e;
	for (let e = 0; e < n.length; e += 1) if (n[e](t)) return !0;
	return !1;
};
function RE(e) {
	return e instanceof G;
}
function zE(e = 0, t = 0, n = 0) {
	return Math.min(Math.max(e, t), n);
}
function BE(e, t = null) {
	if (!t) return null;
	let n = W.atStart(e), r = W.atEnd(e);
	if (t === "start" || t === !0) return n;
	if (t === "end") return r;
	let i = n.from, a = r.to;
	return t === "all" ? G.create(e, zE(0, i, a), zE(e.content.size, i, a)) : G.create(e, zE(t, i, a), zE(t, i, a));
}
function VE() {
	return ["Android"].includes(navigator.platform) || /android/i.test(navigator.userAgent);
}
function HE() {
	return [
		"iPad Simulator",
		"iPhone Simulator",
		"iPod Simulator",
		"iPad",
		"iPhone",
		"iPod"
	].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
function UE() {
	return typeof navigator < "u" && /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
var WE = (e = null, t = {}) => ({ editor: n, view: r, tr: i, dispatch: a }) => {
	t = {
		scrollIntoView: !0,
		...t
	};
	let o = () => {
		(HE() || VE()) && r.dom.focus(), UE() && !HE() && !VE() && r.dom.focus({ preventScroll: !0 }), requestAnimationFrame(() => {
			n.isDestroyed || (r.focus(), t?.scrollIntoView && n.commands.scrollIntoView());
		});
	};
	try {
		if (r.hasFocus() && e === null || e === !1) return !0;
	} catch {
		return !1;
	}
	if (a && e === null && !RE(n.state.selection)) return o(), !0;
	let s = BE(i.doc, e) || n.state.selection, c = n.state.selection.eq(s);
	return a && (c || i.setSelection(s), c && i.storedMarks && i.setStoredMarks(i.storedMarks), o()), !0;
}, GE = (e, t) => (n) => e.every((e, r) => t(e, {
	...n,
	index: r
})), KE = (e, t) => ({ tr: n, commands: r }) => r.insertContentAt({
	from: n.selection.from,
	to: n.selection.to
}, e, t), qE = (e) => {
	let t = e.childNodes;
	for (let n = t.length - 1; n >= 0; --n) {
		let r = t[n];
		r.nodeType === 3 && r.nodeValue && /^(\n\s\s|\n)$/.test(r.nodeValue) ? e.removeChild(r) : r.nodeType === 1 && qE(r);
	}
	return e;
};
function JE(e) {
	if (typeof window > "u") throw Error("[tiptap error]: there is no window object available, so this function cannot be used");
	let t = `<body>${e}</body>`, n = new window.DOMParser().parseFromString(t, "text/html").body;
	return qE(n);
}
function YE(e) {
	return typeof e?.nodesBetween == "function";
}
function XE(e, t, n) {
	if (YE(e)) return e;
	let r = typeof e == "object" && !!e;
	n = {
		slice: !0,
		parseOptions: {},
		...n
	};
	let i = typeof e == "string";
	if (r) try {
		if (Array.isArray(e) && e.length > 0) return V.fromArray(e.map((e) => t.nodeFromJSON(e)));
		let r = t.nodeFromJSON(e);
		return n.errorOnInvalidContent && r.check(), r;
	} catch (r) {
		if (n.errorOnInvalidContent) throw Error("[tiptap error]: Invalid JSON content", { cause: r });
		return console.warn("[tiptap warn]: Invalid content.", "Passed value:", e, "Error:", r), XE("", t, n);
	}
	if (i) {
		if (n.errorOnInvalidContent) {
			let r = !1, i = "", a = new Q_({
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
			if (n.slice ? nv.fromSchema(a).parseSlice(JE(e), n.parseOptions) : nv.fromSchema(a).parse(JE(e), n.parseOptions), n.errorOnInvalidContent && r) throw Error("[tiptap error]: Invalid HTML content", { cause: /* @__PURE__ */ Error(`Invalid element found: ${i}`) });
		}
		let r = nv.fromSchema(t);
		return n.slice ? r.parseSlice(JE(e), n.parseOptions).content : r.parse(JE(e), n.parseOptions);
	}
	return XE("", t, n);
}
function ZE(e) {
	return !("type" in e);
}
function QE(e, t, n) {
	let r = e.steps.length - 1;
	if (r < t) return;
	let i = e.steps[r];
	if (!(i instanceof Gv || i instanceof Kv)) return;
	let a = e.mapping.maps[r], o = 0;
	a.forEach((e, t, n, r) => {
		o === 0 && (o = r);
	}), e.setSelection(W.near(e.doc.resolve(o), n));
}
var $E = (e, t, n) => ({ tr: r, dispatch: i, editor: a }) => {
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
			XE(t, a.schema, {
				parseOptions: s,
				errorOnInvalidContent: !0
			});
		} catch (e) {
			o(e);
		}
		try {
			i = XE(t, a.schema, {
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
		}, u = !0, d = !0, f = ZE(i) ? i.content : [i];
		if (f.forEach((e) => {
			e.check(), u = u ? e.isText && e.marks.length === 0 : !1, d = d ? e.isBlock : !1;
		}), c === l && d) {
			let { parent: e } = r.doc.resolve(c);
			e.isTextblock && !e.type.spec.code && !e.childCount && (--c, l += 1);
		}
		let p;
		if (u) p = Array.isArray(t) ? t.map((e) => e.text || "").join("") : YE(t) ? f.map((e) => e.text ?? "").join("") : typeof t == "object" && t && t.text ? t.text : t, r.insertText(p, c, l);
		else {
			p = V.from(f);
			let e = r.doc.resolve(c), t = e.node(), n = e.parentOffset === 0, i = t.isText || t.isTextblock, a = t.content.size > 0;
			n && i && a && d && (c = Math.max(0, c - 1)), r.replaceWith(c, l, f);
		}
		n.updateSelection && QE(r, r.steps.length - 1, -1), n.applyInputRules && r.setMeta("applyInputRules", {
			from: c,
			text: p
		}), n.applyPasteRules && r.setMeta("applyPasteRules", {
			from: c,
			text: p
		});
	}
	return !0;
};
function eD(e) {
	for (let t = 0; t < e.edgeCount; t += 1) {
		let { type: n } = e.edge(t);
		if (n.isTextblock && !n.hasRequiredAttrs()) return n;
	}
	return null;
}
var tD = (e = {}) => ({ tr: t, dispatch: n, editor: r }) => {
	let { pos: i, attrs: a, content: o, updateSelection: s = !0 } = e, c;
	c = typeof i == "number" ? t.doc.resolve(i) : i || t.selection.$from;
	let l = eD(c.parent.contentMatchAt(c.index()));
	if (!l) return !1;
	let u = Object.keys(l.spec.attrs || {}), d = a ? Object.fromEntries(Object.entries(a).filter(([e]) => u.includes(e))) : {}, f;
	if (o) {
		let e = XE(o, r.schema);
		f = l.createAndFill(d, e);
	} else f = l.createAndFill(d);
	return f ? (n && (t.insert(c.pos, f), s && QE(t, t.steps.length - 1, -1)), !0) : !1;
}, nD = () => ({ state: e, dispatch: t }) => xb(e, t), rD = () => ({ state: e, dispatch: t }) => Sb(e, t), iD = () => ({ state: e, dispatch: t }) => ub(e, t), aD = () => ({ state: e, dispatch: t }) => vb(e, t), oD = (e, t) => {
	let n = e.resolve(t), r = n.nodeBefore, i = n.nodeAfter;
	return !r || !i ? !1 : !r.type.spec.isolating && !i.type.spec.isolating;
}, sD = () => ({ state: e, dispatch: t, tr: n }) => {
	try {
		let r = hy(e.doc, e.selection.$from.pos, -1);
		return r == null || !oD(e.doc, r) ? !1 : (n.join(r, 2), t && t(n), !0);
	} catch {
		return !1;
	}
}, cD = () => ({ state: e, dispatch: t, tr: n }) => {
	try {
		let r = hy(e.doc, e.selection.$from.pos, 1);
		return r == null || !oD(e.doc, r) ? !1 : (n.join(r, 2), t && t(n), !0);
	} catch {
		return !1;
	}
}, lD = () => ({ state: e, dispatch: t }) => db(e, t), uD = () => ({ state: e, dispatch: t }) => fb(e, t);
function dD() {
	return typeof navigator < "u" && /Mac/.test(navigator.platform);
}
function fD(e) {
	let t = e.split(/-(?!$)/), n = t[t.length - 1];
	n === "Space" && (n = " ");
	let r, i, a, o;
	for (let e = 0; e < t.length - 1; e += 1) {
		let n = t[e];
		if (/^(cmd|meta|m)$/i.test(n)) o = !0;
		else if (/^a(lt)?$/i.test(n)) r = !0;
		else if (/^(c|ctrl|control)$/i.test(n)) i = !0;
		else if (/^s(hift)?$/i.test(n)) a = !0;
		else if (/^mod$/i.test(n)) HE() || dD() ? o = !0 : i = !0;
		else throw Error(`Unrecognized modifier name: ${n}`);
	}
	return r && (n = `Alt-${n}`), i && (n = `Ctrl-${n}`), o && (n = `Meta-${n}`), a && (n = `Shift-${n}`), n;
}
var pD = (e) => ({ editor: t, view: n, tr: r, dispatch: i }) => {
	let a = fD(e).split(/-(?!$)/), o = a.find((e) => ![
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
function mD(e, t, n = {}) {
	let { from: r, to: i, empty: a } = e.selection, o = t ? xE(t, e.schema) : null, s = [];
	e.doc.nodesBetween(r, i, (e, t) => {
		if (e.isText) return;
		let n = Math.max(r, t), a = Math.min(i, t + e.nodeSize);
		s.push({
			node: e,
			from: n,
			to: a
		});
	});
	let c = i - r, l = s.filter((e) => !o || o.name === e.node.type.name).filter((e) => jE(e.node.attrs, n, { strict: !1 }));
	return a ? !!l.length : l.reduce((e, t) => e + t.to - t.from, 0) >= c;
}
var hD = (e, t = {}) => ({ state: n, dispatch: r }) => mD(n, xE(e, n.schema), t) ? Cb(n, r) : !1, gD = () => ({ state: e, dispatch: t }) => Ob(e, t), _D = (e) => ({ state: t, dispatch: n }) => Yb(xE(e, t.schema))(t, n), vD = () => ({ state: e, dispatch: t }) => wb(e, t);
function yD(e, t) {
	return t.nodes[e] ? "node" : t.marks[e] ? "mark" : null;
}
function bD(e, t) {
	let n = typeof t == "string" ? [t] : t;
	return Object.keys(e).reduce((t, r) => (n.includes(r) || (t[r] = e[r]), t), {});
}
var xD = (e, t) => ({ tr: n, state: r, dispatch: i }) => {
	let a = null, o = null, s = yD(typeof e == "string" ? e : e.name, r.schema);
	if (!s) return !1;
	s === "node" && (a = xE(e, r.schema)), s === "mark" && (o = FE(e, r.schema));
	let c = !1;
	return n.selection.ranges.forEach((e) => {
		r.doc.nodesBetween(e.$from.pos, e.$to.pos, (e, r) => {
			a && a === e.type && (c = !0, i && n.setNodeMarkup(r, void 0, bD(e.attrs, t))), o && e.marks.length && e.marks.forEach((a) => {
				o === a.type && (c = !0, i && n.addMark(r, r + e.nodeSize, o.create(bD(a.attrs, t))));
			});
		});
	}), c;
}, SD = () => ({ tr: e, dispatch: t }) => (t && e.scrollIntoView(), !0), CD = () => ({ tr: e, dispatch: t }) => {
	if (t) {
		let t = new Gy(e.doc);
		e.setSelection(t);
	}
	return !0;
}, wD = () => ({ state: e, dispatch: t }) => hb(e, t), TD = () => ({ state: e, dispatch: t }) => yb(e, t), ED = () => ({ state: e, dispatch: t }) => jb(e, t), DD = () => ({ state: e, dispatch: t }) => Lb(e, t), OD = () => ({ state: e, dispatch: t }) => Ib(e, t);
function kD(e, t, n = {}, r = {}) {
	return XE(e, t, {
		slice: !1,
		parseOptions: n,
		errorOnInvalidContent: r.errorOnInvalidContent
	});
}
var AD = (e, { errorOnInvalidContent: t, emitUpdate: n = !0, parseOptions: r = {} } = {}) => ({ editor: i, tr: a, dispatch: o, commands: s }) => {
	let { doc: c } = a;
	if (r.preserveWhitespace !== "full") {
		let s = kD(e, i.schema, r, { errorOnInvalidContent: t ?? i.options.enableContentCheck });
		if (o) {
			let e = ZE(s) ? s.content : [s];
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
function jD(e, t) {
	let n = FE(t, e.schema), { from: r, to: i, empty: a } = e.selection, o = [];
	a ? (e.storedMarks && o.push(...e.storedMarks), o.push(...e.selection.$head.marks())) : e.doc.nodesBetween(r, i, (e) => {
		o.push(...e.marks);
	});
	let s = o.find((e) => e.type.name === n.name);
	return s ? { ...s.attrs } : {};
}
function MD(e, t) {
	let n = new Ry(e);
	return t.forEach((e) => {
		e.steps.forEach((e) => {
			n.step(e);
		});
	}), n;
}
function ND(e, t, n) {
	let r = [];
	return e.nodesBetween(t.from, t.to, (e, t) => {
		n(e) && r.push({
			node: e,
			pos: t
		});
	}), r;
}
function PD(e, t) {
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
function FD(e) {
	return (t) => PD(t.$from, e);
}
function Y(e, t, n) {
	return e.config[t] === void 0 && e.parent ? Y(e.parent, t, n) : typeof e.config[t] == "function" ? e.config[t].bind({
		...n,
		parent: e.parent ? Y(e.parent, t, n) : null
	}) : e.config[t];
}
function ID(e) {
	return e.map((e) => {
		let t = Y(e, "addExtensions", {
			name: e.name,
			options: e.options,
			storage: e.storage
		});
		return t ? [e, ...ID(t())] : e;
	}).flat(10);
}
function LD(e, t) {
	let n = gv.fromSchema(t).serializeFragment(e), r = document.implementation.createHTMLDocument().createElement("div");
	return r.appendChild(n), r.innerHTML;
}
function RD(e, t) {
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
var zD = {
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
}, BD = {
	inclusive: "boolean",
	excludes: "string",
	group: "string",
	spanning: "boolean",
	code: "boolean"
};
function VD(e, t, n) {
	return Object.fromEntries(Object.entries(t).flatMap(([t, r]) => {
		let i = e[t];
		if (i === void 0) return [];
		if (!(typeof r == "string" ? typeof i === r : typeof i == "string" && r.includes(i))) throw RangeError(`Invalid schemaSpec field '${n}.${t}'`);
		return [[t, i]];
	}));
}
function HD(e, t, n, r) {
	return {
		...Object.fromEntries(Object.entries(t).filter(([e]) => e !== "attrs" && !Object.hasOwn(r, e))),
		...VD(n, r, e),
		attrs: n.attrs
	};
}
function UD(e, t, n) {
	for (let r of Object.keys(t)) if (!Object.hasOwn(e, r)) throw RangeError(`schemaSpec requires a local ${n} extension named '${r}'`);
	for (let r of Object.keys(e)) if (!Object.hasOwn(t, r)) throw RangeError(`Local ${n} extension '${r}' is not in schemaSpec`);
}
function WD(e, t) {
	UD(e.nodes, t.nodes, "node"), UD(e.marks, t.marks, "mark");
	let n = t.spec.nodes, r = t.spec.marks;
	return t.spec.nodes.forEach((t, r) => {
		n = n.update(t, HD(t, e.nodes[t], r, zD));
	}), t.spec.marks.forEach((t, n) => {
		r = r.update(t, HD(t, e.marks[t], n, BD));
	}), {
		topNode: t.topNodeType.name,
		nodes: n,
		marks: r
	};
}
function GD(e) {
	let t = e.filter((t, n) => e.indexOf(t) !== n);
	return Array.from(new Set(t));
}
function KD(e) {
	return {
		baseExtensions: e.filter((e) => e.type === "extension"),
		nodeExtensions: e.filter((e) => e.type === "node"),
		markExtensions: e.filter((e) => e.type === "mark")
	};
}
function qD(e) {
	let t = [], { nodeExtensions: n, markExtensions: r } = KD(e), i = [...n, ...r], a = {
		default: null,
		validate: void 0,
		rendered: !0,
		renderHTML: null,
		parseHTML: null,
		keepOnSplit: !0,
		isRequired: !1
	}, o = n.filter((e) => e.name !== "text").map((e) => e.name), s = r.map((e) => e.name), c = [...o, ...s];
	return e.forEach((e) => {
		let n = Y(e, "addGlobalAttributes", {
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
		let n = Y(e, "addAttributes", {
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
function JD(e) {
	return typeof e == "function";
}
function X(e, t = void 0, ...n) {
	return JD(e) ? t ? e.bind(t)(...n) : e(...n) : e;
}
function YD(e = {}) {
	return Object.keys(e).length === 0 && e.constructor === Object;
}
function XD(e) {
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
function ZD(e) {
	let t = [], n = XD(e || ""), r = n.length;
	for (let e = 0; e < r; e += 1) {
		let r = n[e], i = r.indexOf(":");
		if (i === -1) continue;
		let a = r.slice(0, i).trim(), o = r.slice(i + 1).trim();
		a && o && t.push([a, o]);
	}
	return t;
}
function QD(...e) {
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
				let r = new Map([...ZD(n[e]), ...ZD(t)]);
				n[e] = Array.from(r.entries()).map(([e, t]) => `${e}: ${t}`).join("; ");
			} else n[e] = t;
		}), n;
	}, {});
}
function $D(e, t) {
	return t.filter((t) => t.type === e.type.name).filter((e) => e.attribute.rendered).map((t) => t.attribute.renderHTML ? t.attribute.renderHTML(e.attrs) || {} : { [t.name]: e.attrs[t.name] }).reduce((e, t) => QD(e, t), {});
}
function eO(e) {
	return typeof e == "string" ? e.match(/^[+-]?(?:\d*\.)?\d+$/) ? Number(e) : e === "true" || e !== "false" && e : e;
}
function tO(e, t) {
	return "style" in e ? e : {
		...e,
		getAttrs: (n) => {
			let r = e.getAttrs ? e.getAttrs(n) : e.attrs;
			if (r === !1) return !1;
			let i = t.reduce((e, t) => {
				let r = t.attribute.parseHTML ? t.attribute.parseHTML(n) : eO(n.getAttribute(t.name));
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
function nO(e) {
	return Object.fromEntries(Object.entries(e).filter(([e, t]) => e === "attrs" && YD(t) ? !1 : t != null));
}
function rO(e) {
	var t, n;
	let r = {};
	return !(e != null && (t = e.attribute) != null && t.isRequired) && "default" in (e?.attribute || {}) && (r.default = e.attribute.default), (e == null || (n = e.attribute) == null ? void 0 : n.validate) !== void 0 && (r.validate = e.attribute.validate), [e.name, r];
}
function iO(e, t, n = qD(e)) {
	let { nodeExtensions: r, markExtensions: i } = KD(e);
	return {
		topNode: r.find((e) => Y(e, "topNode"))?.name,
		nodes: Object.fromEntries(r.map((r) => {
			let i = n.filter((e) => e.type === r.name), a = {
				name: r.name,
				options: r.options,
				storage: r.storage,
				editor: t
			}, o = nO({
				...e.reduce((e, t) => {
					let n = Y(t, "extendNodeSchema", a);
					return {
						...e,
						...n ? n(r) : {}
					};
				}, {}),
				content: X(Y(r, "content", a)),
				marks: X(Y(r, "marks", a)),
				group: X(Y(r, "group", a)),
				inline: X(Y(r, "inline", a)),
				atom: X(Y(r, "atom", a)),
				selectable: X(Y(r, "selectable", a)),
				draggable: X(Y(r, "draggable", a)),
				code: X(Y(r, "code", a)),
				whitespace: X(Y(r, "whitespace", a)),
				linebreakReplacement: X(Y(r, "linebreakReplacement", a)),
				defining: X(Y(r, "defining", a)),
				isolating: X(Y(r, "isolating", a)),
				attrs: Object.fromEntries(i.map(rO))
			}), s = X(Y(r, "parseHTML", a));
			s && (o.parseDOM = s.map((e) => tO(e, i)));
			let c = Y(r, "renderHTML", a);
			c && (o.toDOM = (e) => c({
				node: e,
				HTMLAttributes: $D(e, i)
			}));
			let l = Y(r, "renderText", a);
			return l && (o.toText = l), [r.name, o];
		})),
		marks: Object.fromEntries(i.map((r) => {
			let i = n.filter((e) => e.type === r.name), a = {
				name: r.name,
				options: r.options,
				storage: r.storage,
				editor: t
			}, o = nO({
				...e.reduce((e, t) => {
					let n = Y(t, "extendMarkSchema", a);
					return {
						...e,
						...n ? n(r) : {}
					};
				}, {}),
				inclusive: X(Y(r, "inclusive", a)),
				excludes: X(Y(r, "excludes", a)),
				group: X(Y(r, "group", a)),
				spanning: X(Y(r, "spanning", a)),
				code: X(Y(r, "code", a)),
				attrs: Object.fromEntries(i.map(rO))
			}), s = X(Y(r, "parseHTML", a));
			s && (o.parseDOM = s.map((e) => tO(e, i)));
			let c = Y(r, "renderHTML", a);
			return c && (o.toDOM = (e) => c({
				mark: e,
				HTMLAttributes: $D(e, i)
			})), [r.name, o];
		}))
	};
}
function aO(e, t, n) {
	if (n === void 0) return new Q_(iO(e, t));
	let r = GD(e.filter((e) => e.type !== "extension").map((e) => e.name));
	if (r.length) throw RangeError(`Duplicate local schema types: ${r.join(", ")}`);
	let i = new Q_(n);
	return new Q_(WD(iO(e, t, RD(qD(e), i)), i));
}
function oO(e) {
	return e.sort((e, t) => {
		let n = Y(e, "priority") || 100, r = Y(t, "priority") || 100;
		return n > r ? -1 : +(n < r);
	});
}
function sO(e) {
	let t = oO(ID(e)), n = GD(t.map((e) => e.name));
	return n.length && console.warn(`[tiptap warn]: Duplicate extension names found: [${n.map((e) => `'${e}'`).join(", ")}]. This can lead to issues.`), t;
}
function cO(e, t, n) {
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
function lO(e, t) {
	return cO(e, {
		from: 0,
		to: e.content.size
	}, t);
}
function uO(e) {
	return Object.fromEntries(Object.entries(e.nodes).filter(([, e]) => e.spec.toText).map(([e, t]) => [e, t.spec.toText]));
}
function dO(e, t) {
	let n = xE(t, e.schema), { from: r, to: i } = e.selection, a = [];
	e.doc.nodesBetween(r, i, (e) => {
		a.push(e);
	});
	let o = a.reverse().find((e) => e.type.name === n.name);
	return o ? { ...o.attrs } : {};
}
function fO(e, t) {
	let n = yD(typeof t == "string" ? t : t.name, e.schema);
	return n === "node" ? dO(e, t) : n === "mark" ? jD(e, t) : {};
}
function pO(e, t = JSON.stringify) {
	let n = {};
	return e.filter((e) => {
		let r = t(e);
		return Object.prototype.hasOwnProperty.call(n, r) ? !1 : n[r] = !0;
	});
}
function mO(e) {
	let t = pO(e);
	return t.length === 1 ? t : t.filter((e, n) => !t.filter((e, t) => t !== n).some((t) => e.oldRange.from >= t.oldRange.from && e.oldRange.to <= t.oldRange.to && e.newRange.from >= t.newRange.from && e.newRange.to <= t.newRange.to));
}
function hO(e) {
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
	}), mO(r);
}
function gO(e, t, n) {
	let r = [];
	return e === t ? n.resolve(e).marks().forEach((t) => {
		let i = PE(n.resolve(e), t.type);
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
var _O = (e, t, n, r = 20) => {
	let i = e.doc.resolve(n), a = r, o = null;
	for (; a > 0 && o === null;) {
		let e = i.node(a);
		e?.type.name === t ? o = e : --a;
	}
	return [o, a];
}, vO = (e) => {
	let t = e.depth - 1;
	if (t < 0) return null;
	let n = e.index(t);
	return n === 0 ? null : e.node(t).child(n - 1);
};
function yO(e, t) {
	return t.nodes[e] || t.marks[e] || null;
}
function bO(e, t, n) {
	return Object.fromEntries(Object.entries(n).filter(([n]) => {
		let r = e.find((e) => e.type === t && e.name === n);
		return r ? r.attribute.keepOnSplit : !1;
	}));
}
var xO = (e, t = 500) => {
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
function SO(e, t, n = {}) {
	let { empty: r, ranges: i } = e.selection, a = t ? FE(t, e.schema) : null;
	if (r) return !!(e.storedMarks || e.selection.$from.marks()).filter((e) => !a || a.name === e.type.name).find((e) => jE(e.attrs, n, { strict: !1 }));
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
	let c = s.filter((e) => !a || a.name === e.mark.type.name).filter((e) => jE(e.mark.attrs, n, { strict: !1 })).reduce((e, t) => e + t.to - t.from, 0), l = s.filter((e) => !a || e.mark.type !== a && e.mark.type.excludes(a)).reduce((e, t) => e + t.to - t.from, 0);
	return (c > 0 ? c + l : c) >= o;
}
function CO(e, t, n = {}) {
	if (!t) return mD(e, null, n) || SO(e, null, n);
	let r = yD(t, e.schema);
	return r === "node" ? mD(e, t, n) : r === "mark" && SO(e, t, n);
}
var wO = (e, t) => {
	let { $from: n, $to: r, $anchor: i } = e.selection;
	if (t) {
		let n = FD((e) => e.type.name === t)(e.selection);
		if (!n) return !1;
		let r = e.doc.resolve(n.pos + 1);
		return i.pos + 1 === r.end();
	}
	return !(r.parentOffset < r.parent.nodeSize - 2 || n.pos !== r.pos);
}, TO = (e) => {
	let { $from: t, $to: n } = e.selection;
	return !(t.parentOffset > 0 || t.pos !== n.pos);
};
function EO(e, t) {
	return Array.isArray(t) ? t.some((t) => (typeof t == "string" ? t : t.name) === e.name) : t;
}
function DO(e, t) {
	let { nodeExtensions: n } = KD(t), r = n.find((t) => t.name === e);
	if (!r) return !1;
	let i = X(Y(r, "group", {
		name: r.name,
		options: r.options,
		storage: r.storage
	}));
	return typeof i == "string" && i.split(" ").includes("list");
}
function OO(e, { checkChildren: t = !0, ignoreWhitespace: n = !1 } = {}) {
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
			r !== !1 && (OO(e, {
				ignoreWhitespace: n,
				checkChildren: t
			}) || (r = !1));
		}), r;
	}
	return !1;
}
function kO(e) {
	return e instanceof K;
}
function AO(e) {
	if (typeof e != "object" || !e) return !1;
	let t = e;
	return typeof t.apply == "function" && typeof t.getMap == "function" && typeof t.invert == "function" && typeof t.map == "function" && typeof t.merge == "function" && typeof t.toJSON == "function";
}
function jO(e) {
	if (typeof e != "object" || !e) return !1;
	let t = e;
	if (!AO(t)) return !1;
	let n = t.toJSON();
	return !(typeof n != "object" || !n || n.stepType !== "replace");
}
var MO = class e {
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
function NO(e, t) {
	let n = t.mapping.mapResult(e.position);
	return {
		position: new MO(n.pos),
		mapResult: n
	};
}
function PO(e) {
	return new MO(e);
}
function FO(e, t, n) {
	let { selection: r } = t, i = null;
	if (RE(r) && (i = r.$cursor), i) {
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
var IO = (e, t = {}) => ({ tr: n, state: r, dispatch: i }) => {
	let { selection: a } = n, { empty: o, ranges: s } = a, c = FE(e, r.schema);
	if (i) {
		if (o) {
			let e = jD(r, c);
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
	return FO(r, n, c);
}, LO = (e, t) => ({ tr: n }) => (n.setMeta(e, t), !0), RO = (e, t = {}) => ({ state: n, dispatch: r, chain: i }) => {
	let a = xE(e, n.schema), o;
	return n.selection.$anchor.sameParent(n.selection.$head) && (o = n.selection.$anchor.parent.attrs), a.isTextblock ? i().command(({ commands: e }) => zb(a, {
		...o,
		...t
	})(n) ? !0 : e.clearNodes()).command(({ state: e }) => zb(a, {
		...o,
		...t
	})(e, r)).run() : (console.warn("[tiptap warn]: Currently \"setNode()\" only supports text block nodes."), !1);
}, zO = (e) => ({ tr: t, dispatch: n }) => {
	if (n) {
		let { doc: n } = t, r = zE(e, 0, n.content.size), i = K.create(n, r);
		t.setSelection(i);
	}
	return !0;
}, BO = (e, t) => ({ tr: n, state: r, dispatch: i }) => {
	let { selection: a } = r, o, s;
	return typeof t == "number" ? (o = t, s = t) : t && "from" in t && "to" in t ? (o = t.from, s = t.to) : (o = a.from, s = a.to), i && n.doc.nodesBetween(o, s, (t, r) => {
		t.isText || n.setNodeMarkup(r, void 0, {
			...t.attrs,
			dir: e
		});
	}), !0;
}, VO = (e) => ({ tr: t, dispatch: n }) => {
	if (n) {
		let { doc: n } = t, { from: r, to: i } = typeof e == "number" ? {
			from: e,
			to: e
		} : e, a = G.atStart(n).from, o = G.atEnd(n).to, s = zE(r, a, o), c = zE(i, a, o), l = G.create(n, s, c);
		t.setSelection(l);
	}
	return !0;
}, HO = (e) => ({ state: t, dispatch: n }) => Qb(xE(e, t.schema))(t, n);
function UO(e, t) {
	let n = e.storedMarks || e.selection.$to.parentOffset && e.selection.$from.marks();
	if (n) {
		let r = n.filter((e) => t?.includes(e.type.name));
		e.tr.ensureMarks(r);
	}
}
var WO = ({ keepMarks: e = !0 } = {}) => ({ tr: t, state: n, dispatch: r, editor: i }) => {
	let { selection: a, doc: o } = t, { $from: s, $to: c } = a, l = i.extensionManager.attributes, u = bO(l, s.node().type.name, s.node().attrs);
	if (a instanceof K && a.node.isBlock) return !s.parentOffset || !uy(o, s.pos) ? !1 : (r && (e && UO(n, i.extensionManager.splittableMarks), t.split(s.pos).scrollIntoView()), !0);
	if (!s.parent.isBlock) return !1;
	let d = c.parentOffset === c.parent.content.size, f = s.depth === 0 ? void 0 : eD(s.node(-1).contentMatchAt(s.indexAfter(-1))), p = d && f ? [{
		type: f,
		attrs: u
	}] : void 0, m = a instanceof G && !a.empty ? rb.create({
		doc: t.doc,
		selection: a
	}).tr.deleteSelection() : null, h = m ? m.doc : t.doc, g = m ? m.mapping.map(s.pos) : s.pos, _ = uy(h, g, 1, p);
	if (!p && !_ && uy(h, g, 1, f ? [{ type: f }] : void 0) && (_ = !0, p = f ? [{
		type: f,
		attrs: u
	}] : void 0), r) {
		if (_) {
			let e = t.steps.length;
			if (a instanceof G && t.deleteSelection(), t.split(t.mapping.slice(e).map(s.pos), 1, p), f && !d && !s.parentOffset && s.parent.type !== f) {
				let n = t.mapping.slice(e).map(s.before()), r = t.doc.resolve(n);
				s.node(-1).canReplaceWith(r.index(), r.index() + 1, f) && t.setNodeMarkup(t.mapping.slice(e).map(s.before()), f);
			}
		}
		e && UO(n, i.extensionManager.splittableMarks), t.scrollIntoView();
	}
	return _;
}, GO = (e, t = {}) => ({ tr: n, state: r, dispatch: i, editor: a }) => {
	let o = xE(e, r.schema), { $from: s, $to: c } = r.selection, l = r.selection.node;
	if (l && l.isBlock || s.depth < 2 || !s.sameParent(c)) return !1;
	let u = s.node(-1);
	if (u.type !== o) return !1;
	let d = a.extensionManager.attributes;
	if (s.parent.content.size === 0 && s.node(-1).childCount === s.indexAfter(-1)) {
		if (s.depth === 2 || s.node(-3).type !== o || s.index(-2) !== s.node(-2).childCount - 1) return !1;
		if (i) {
			let e = V.empty, r = s.index(-1) ? 1 : s.index(-2) ? 2 : 3;
			for (let t = s.depth - r; t >= s.depth - 3; --t) e = V.from(s.node(t).copy(e));
			let i = s.indexAfter(-1) < s.node(-2).childCount ? 1 : s.indexAfter(-2) < s.node(-3).childCount ? 2 : 3, a = {
				...bO(d, s.node().type.name, s.node().attrs),
				...t
			}, c = o.contentMatch.defaultType?.createAndFill(a) || void 0;
			e = e.append(V.from(o.createAndFill(null, c) || void 0));
			let l = s.before(s.depth - (r - 1));
			n.replace(l, s.after(-i), new U(e, 4 - r, 0));
			let u = -1;
			n.doc.nodesBetween(l, n.doc.content.size, (e, t) => {
				if (u > -1) return !1;
				e.isTextblock && e.content.size === 0 && (u = t + 1);
			}), u > -1 && n.setSelection(G.near(n.doc.resolve(u))), n.scrollIntoView();
		}
		return !0;
	}
	let f = c.pos === s.end() ? u.contentMatchAt(0).defaultType : null, p = {
		...bO(d, u.type.name, u.attrs),
		...t
	}, m = {
		...bO(d, s.node().type.name, s.node().attrs),
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
	if (!uy(n.doc, s.pos, 2)) return !1;
	if (i) {
		let { selection: e, storedMarks: t } = r, { splittableMarks: o } = a.extensionManager, c = t || e.$to.parentOffset && e.$from.marks();
		if (n.split(s.pos, 2, v).scrollIntoView(), h && n.setNodeMarkup(g, void 0, p), !c || !i) return !0;
		let l = c.filter((e) => o.includes(e.type.name));
		n.ensureMarks(l);
	}
	return !0;
};
function KO(e, t, n) {
	if (!e.validContent(t)) return null;
	try {
		return e.create(n, t);
	} catch {
		return null;
	}
}
function qO(e, t) {
	if (e.pendingContent.length === 0) return !0;
	let n = KO(t, V.from(e.pendingContent));
	return n ? (e.items.push(n), e.pendingContent = [], !0) : !1;
}
function JO(e, t, n) {
	return n.validContent(V.from([...t.pendingContent, e])) ? (t.pendingContent.push(e), !0) : !qO(t, n) || !n.validContent(V.from(e)) ? !1 : (t.pendingContent.push(e), !0);
}
function YO(e, t, n, r) {
	let i = r(e, n);
	if (!i) return !1;
	let a = KO(n.listType, V.from(i), e.attrs);
	return a ? n.itemType.validContent(V.from([...t.pendingContent, a])) ? (t.pendingContent.push(a), !0) : qO(t, n.itemType) ? (t.items.push(...i), !0) : !1 : !1;
}
function XO(e, t, n) {
	let r = {
		items: [],
		pendingContent: []
	};
	for (let i = 0; i < e.childCount; i += 1) {
		let a = e.child(i);
		if (!(t.isListNode(a) ? YO(a, r, t, n) : JO(a, r, t.itemType))) return null;
	}
	return qO(r, t.itemType) ? r.items : null;
}
function ZO(e, t) {
	let n = [];
	for (let r = 0; r < e.childCount; r += 1) {
		let i = XO(e.child(r), t, ZO);
		if (!i) return null;
		n.push(...i);
	}
	return n;
}
function QO(e, t) {
	let n = null;
	return e.descendants((e, r) => e !== t || (n = r, !1)), n;
}
function $O(e) {
	return !e || e === "1" ? null : e;
}
function ek(e, t) {
	return $O(e) === $O(t);
}
var tk = (e, t) => {
	let n = FD((e) => e.type === t)(e.selection);
	if (!n) return !0;
	let r = e.doc.resolve(Math.max(0, n.pos - 1)).before(n.depth);
	if (r === void 0) return !0;
	let i = e.doc.nodeAt(r);
	return !(n.node.type === i?.type && fy(e.doc, n.pos)) || !ek(n.node.attrs.type, i?.attrs.type) || e.join(n.pos), !0;
}, nk = (e, t) => {
	let n = FD((e) => e.type === t)(e.selection);
	if (!n) return !0;
	let r = e.doc.resolve(n.start).after(n.depth);
	if (r === void 0) return !0;
	let i = e.doc.nodeAt(r);
	return !(n.node.type === i?.type && fy(e.doc, r)) || !ek(n.node.attrs.type, i?.attrs.type) || e.join(r), !0;
};
function rk(e) {
	let t = e.doc, n = t.firstChild;
	if (!n) return null;
	let r = t.resolve(1), i = t.resolve(n.nodeSize - 1);
	return G.between(r, i);
}
var ik = (e, t, n, r = {}) => ({ editor: i, tr: a, state: o, dispatch: s, chain: c, commands: l, can: u }) => {
	let { extensions: d, splittableMarks: f } = i.extensionManager, p = xE(e, o.schema), m = xE(t, o.schema), { selection: h, storedMarks: g } = o, { $from: _, $to: v } = h, y = _.blockRange(v), b = g || h.$to.parentOffset && h.$from.marks();
	if (!y) return !1;
	let x = FD((e) => DO(e.type.name, d))(h), S = h.from === 0 && h.to === o.doc.content.size, C = o.doc.content.content, w = C.length === 1 ? C[0] : null, T = S && w && DO(w.type.name, d) ? {
		node: w,
		pos: 0,
		depth: 0
	} : null, E = x ?? T, ee = !!x && y.depth >= 1 && y.depth - x.depth <= 1, te = !!T;
	if ((ee || te) && E) {
		if (E.node.type === p) return S && te ? c().command(({ tr: e, dispatch: t }) => {
			let n = rk(e);
			return n ? (e.setSelection(n), t && t(e), !0) : !1;
		}).liftListItem(m).run() : l.liftListItem(m);
		if (DO(E.node.type.name, d) && p.validContent(E.node.content)) return c().command(() => (a.setNodeMarkup(E.pos, p), !0)).command(() => tk(a, p)).command(() => nk(a, p)).run();
		if (DO(E.node.type.name, d)) {
			let e = E.node.firstChild?.type;
			if (e && e !== m) {
				let e = ZO(E.node, {
					listType: p,
					itemType: m,
					isListNode: (e) => DO(e.type.name, d)
				}), t = e ? V.from(e) : null;
				return !t || !p.validContent(t) ? !1 : c().command(() => {
					let { $anchor: e, $head: n } = a.selection, i = e.parent, o = n.parent, s = e.parentOffset, c = n.parentOffset, l;
					try {
						l = p.create(r, t);
					} catch {
						return !1;
					}
					if (a.replaceWith(E.pos, E.pos + E.node.nodeSize, l), i.inlineContent && o.inlineContent) {
						let e = QO(l, i), t = QO(l, o);
						if (e !== null && t !== null) {
							let n = E.pos + e + 2 + s, r = E.pos + t + 2 + c;
							a.setSelection(G.create(a.doc, n, r));
						}
					}
					return !0;
				}).command(() => tk(a, p)).command(() => nk(a, p)).run();
			}
		}
	}
	return !n || !b || !s ? c().command(() => u().wrapInList(p, r) ? !0 : l.clearNodes()).wrapInList(p, r).command(() => tk(a, p)).command(() => nk(a, p)).run() : c().command(() => {
		let e = u().wrapInList(p, r), t = b.filter((e) => f.includes(e.type.name));
		return a.ensureMarks(t), e ? !0 : l.clearNodes();
	}).wrapInList(p, r).command(() => tk(a, p)).command(() => nk(a, p)).run();
}, ak = (e, t = {}, n = {}) => ({ state: r, commands: i }) => {
	let { extendEmptyMarkRange: a = !1 } = n, o = FE(e, r.schema);
	return SO(r, o, t) ? i.unsetMark(o, { extendEmptyMarkRange: a }) : i.setMark(o, t);
}, ok = (e, t, n = {}) => ({ state: r, commands: i }) => {
	let a = xE(e, r.schema), o = xE(t, r.schema), s = mD(r, a, n), c;
	return r.selection.$anchor.sameParent(r.selection.$head) && (c = r.selection.$anchor.parent.attrs), s ? i.setNode(o, c) : i.setNode(a, {
		...c,
		...n
	});
}, sk = (e, t = {}) => ({ state: n, commands: r }) => {
	let i = xE(e, n.schema);
	return mD(n, i, t) ? r.lift(i) : r.wrapIn(i, t);
}, ck = () => ({ state: e, dispatch: t }) => {
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
}, lk = (e = {}) => ({ tr: t, dispatch: n, editor: r }) => {
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
}, uk = (e, t = {}) => ({ tr: n, state: r, dispatch: i }) => {
	let { extendEmptyMarkRange: a = !1 } = t, { selection: o } = n, s = FE(e, r.schema), { $from: c, empty: l, ranges: u } = o;
	if (!i) return !0;
	if (l && a) {
		let { from: e, to: t } = o, r = PE(c, s, c.marks().find((e) => e.type === s)?.attrs);
		r && (e = r.from, t = r.to), n.removeMark(e, t, s);
	} else u.forEach((e) => {
		n.removeMark(e.$from.pos, e.$to.pos, s);
	});
	return n.removeStoredMark(s), !0;
}, dk = (e) => ({ tr: t, state: n, dispatch: r }) => {
	let { selection: i } = n, a, o;
	return typeof e == "number" ? (a = e, o = e) : e && "from" in e && "to" in e ? (a = e.from, o = e.to) : (a = i.from, o = i.to), r && t.doc.nodesBetween(a, o, (e, n) => {
		if (e.isText) return;
		let r = { ...e.attrs };
		delete r.dir, t.setNodeMarkup(n, void 0, r);
	}), !0;
}, fk = (e, t = {}) => ({ tr: n, state: r, dispatch: i }) => {
	let a = null, o = null, s = yD(typeof e == "string" ? e : e.name, r.schema);
	if (!s) return !1;
	s === "node" && (a = xE(e, r.schema)), s === "mark" && (o = FE(e, r.schema));
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
}, pk = new sb("__tiptap_decorations__"), mk = (e) => ({ tr: t, dispatch: n }) => (n && t.setMeta(pk, {
	type: "force",
	name: e
}), !0), hk = (e, t = {}) => ({ state: n, dispatch: r }) => Rb(xE(e, n.schema), t)(n, r), gk = (e, t = {}) => ({ state: n, dispatch: r }) => Gb(xE(e, n.schema), t)(n, r), _k = /* @__PURE__ */ Qg({
	blur: () => mE,
	clearContent: () => hE,
	clearNodes: () => gE,
	command: () => _E,
	createParagraphNear: () => vE,
	cut: () => yE,
	deleteCurrentNode: () => bE,
	deleteNode: () => SE,
	deleteRange: () => CE,
	deleteSelection: () => DE,
	enter: () => OE,
	exitCode: () => kE,
	extendMarkRange: () => IE,
	first: () => LE,
	focus: () => WE,
	forEach: () => GE,
	insertContent: () => KE,
	insertContentAt: () => $E,
	insertDefaultBlock: () => tD,
	joinBackward: () => iD,
	joinDown: () => rD,
	joinForward: () => aD,
	joinItemBackward: () => sD,
	joinItemForward: () => cD,
	joinTextblockBackward: () => lD,
	joinTextblockForward: () => uD,
	joinUp: () => nD,
	keyboardShortcut: () => pD,
	lift: () => hD,
	liftEmptyBlock: () => gD,
	liftListItem: () => _D,
	newlineInCode: () => vD,
	resetAttributes: () => xD,
	scrollIntoView: () => SD,
	selectAll: () => CD,
	selectNodeBackward: () => wD,
	selectNodeForward: () => TD,
	selectParentNode: () => ED,
	selectTextblockEnd: () => DD,
	selectTextblockStart: () => OD,
	setContent: () => AD,
	setMark: () => IO,
	setMeta: () => LO,
	setNode: () => RO,
	setNodeSelection: () => zO,
	setTextDirection: () => BO,
	setTextSelection: () => VO,
	sinkListItem: () => HO,
	splitBlock: () => WO,
	splitListItem: () => GO,
	toggleList: () => ik,
	toggleMark: () => ak,
	toggleNode: () => ok,
	toggleWrap: () => sk,
	undoInputRule: () => ck,
	unsetAllMarks: () => lk,
	unsetMark: () => uk,
	unsetTextDirection: () => dk,
	updateAttributes: () => fk,
	updateDecorations: () => mk,
	wrapIn: () => hk,
	wrapInList: () => gk
}), vk = /* @__PURE__ */ new WeakMap();
function yk(e, t) {
	vk.set(e, (vk.get(e) ?? 0) + 1);
	try {
		return t();
	} finally {
		let t = (vk.get(e) ?? 1) - 1;
		t > 0 ? vk.set(e, t) : vk.delete(e);
	}
}
function bk(e) {
	return vk.has(e);
}
var xk = class {
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
}, Sk = typeof process < "u" && !1;
function Ck(e) {
	return e.kind === "widget";
}
function wk(e, t) {
	let n = [], r = /* @__PURE__ */ new Set();
	for (let i of e) i.kind === "widget" && Ck(i) && r.add(i.key), n.push(i.toPMDecoration(t));
	return {
		decorations: n,
		widgetKeys: r
	};
}
function Tk(e, t, n) {
	let { decorations: r, widgetKeys: i } = wk(t, n);
	return {
		set: Rw.create(e, r),
		widgetKeys: i
	};
}
function Ek({ position: e, from: t, to: n, docSize: r }) {
	return e < t ? !1 : e < n || e === n && n === r;
}
function Dk({ decorations: e, from: t, to: n, docSize: r, extensionName: i, warnedExtensions: a }) {
	return e.filter((e) => Ek({
		position: e.anchor,
		from: t,
		to: n,
		docSize: r
	}) ? !0 : (e.anchor === n || a.has(i) || (a.add(i), console.warn(`[tiptap warn]: Extension "${i}" returned a decoration outside the requested range [${t}, ${n}). It was ignored.`)), !1));
}
function Ok(e) {
	let t = e.spec?.key;
	return typeof t == "string" ? t : void 0;
}
function kk(e) {
	let t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
	for (let r of e.find()) {
		let e = Ok(r);
		if (!e) continue;
		let i = r.spec.extensionName ?? "unknown", a = t.get(e) ?? /* @__PURE__ */ new Set();
		a.add(i), t.set(e, a), n.set(e, (n.get(e) ?? 0) + 1);
	}
	return Array.from(t, ([e, t]) => ({
		key: e,
		extensions: t
	})).filter(({ key: e }) => (n.get(e) ?? 0) > 1);
}
function Ak(e) {
	return e.jsonID === "attr";
}
function jk(e) {
	let t = !1;
	if (e.getMap().forEach(() => {
		t = !0;
	}), t || Ak(e)) return !0;
	let n = e;
	return typeof n.from == "number" && typeof n.to == "number";
}
function Mk(e, t) {
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
function Nk(e, t) {
	if (e.steps.some((e) => !jk(e))) return { type: "full" };
	let n = hO(e).map(({ newRange: e }) => e);
	e.steps.forEach((t, r) => {
		if (!Ak(t)) return;
		let i = e.mapping.slice(r);
		n.push({
			from: i.map(t.pos, -1),
			to: i.map(t.pos + 1)
		});
	});
	let r = [];
	for (let e of n) {
		let n = Mk(t, e);
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
function Pk(e, t, n, r) {
	return e.map(t, n, { onRemove: (e) => {
		let t = e?.key;
		typeof t == "string" && r.delete(t);
	} });
}
function Fk(e, t, n) {
	let r = t.decorationSetsByExtension[e] ?? Rw.empty, i = new Set(t.widgetKeysByExtension[e] ?? []);
	return {
		set: Pk(r, n.mapping, n.doc, i),
		widgetKeys: i
	};
}
function Ik(e, t) {
	let n = Object.values(t).flatMap((e) => e.find());
	return Rw.create(e, n);
}
function Lk(e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of Object.values(e)) for (let e of n) t.add(e);
	return t;
}
function Rk(e, t) {
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
function zk(e, t, n) {
	return n ? !0 : e.update === "manual" ? !1 : e.shouldUpdate ? e.shouldUpdate(t) : t.tr.docChanged;
}
var Bk = /* @__PURE__ */ new Set(), Vk = class {
	constructor(e) {
		this.warnedWidgetKeys = /* @__PURE__ */ new Set(), this.warnedOutOfRangeExtensions = /* @__PURE__ */ new Set(), this.handleBeforeTransaction = ({ nextState: e }) => {
			let t = pk.getState(e);
			t && this.warnDuplicateWidgetKeys(t);
		}, this.editor = e.editor, this.entries = this.resolveEntries(e.entries), this.entries.forEach(({ name: e, spec: t }) => Rk(e, t)), this.plugin = this.entries.length > 0 ? this.createPlugin() : null, this.editor.on("beforeTransaction", this.handleBeforeTransaction);
	}
	destroy() {
		this.editor.off("beforeTransaction", this.handleBeforeTransaction);
	}
	liveWidgetKeys() {
		return pk.getState(this.editor.state)?.widgetKeys ?? Bk;
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
		return new q({
			key: pk,
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
						widgetKeys: Lk(i)
					};
					return this.warnDuplicateWidgetKeys(a), a;
				},
				apply: (n, r, i, a) => {
					let o = n.getMeta(pk), s = o?.type === "force" && !o.name, c = o?.type === "force" ? o.name : void 0, l = {}, u = {}, d = /* @__PURE__ */ new Set();
					return yk(e, () => {
						for (let { name: o, spec: f } of t) {
							let t = s || c === o;
							if (!zk(f, {
								editor: e,
								tr: n,
								oldState: i,
								newState: a
							}, t)) {
								let e = Fk(o, r, n);
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
						widgetKeys: Lk(u)
					};
				}
			},
			props: { decorations(e) {
				return pk.getState(e)?.mergedDecorationSet ?? Rw.empty;
			} }
		});
	}
	applyChangedRangesRecompute(e, t, n, r, i) {
		let a = Nk(r, i.doc);
		return a.type === "full" ? this.buildFullSet(e, t, i) : this.rebuildRanges(e, t, n, r, i, a.ranges);
	}
	rebuildRanges(e, t, n, r, i, a) {
		let o = n.decorationSetsByExtension[e] ?? Rw.empty, s = new Set(n.widgetKeysByExtension[e] ?? []), c = Pk(o, r.mapping, r.doc, s), l = i.doc.content.size;
		for (let { from: n, to: r } of a) {
			let a = c.find(n, r).filter((e) => Ek({
				position: e.from,
				from: n,
				to: r,
				docSize: l
			}));
			for (let e of a) {
				let t = Ok(e);
				t && s.delete(t);
			}
			c = c.remove(a);
			let { decorations: o, widgetKeys: u } = wk(Dk({
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
		return Tk(n.doc, r, e);
	}
	runCreate(e, t, n) {
		try {
			return n();
		} catch (n) {
			return console.error(`[tiptap error]: Extension "${e}" threw in \`addDecorations().${t}()\`. Its decorations were dropped for this update.`, n), [];
		}
	}
	warnDuplicateWidgetKeys(e) {
		if (!Sk) return;
		if (e.widgetKeys.size === 0) {
			this.warnedWidgetKeys.clear();
			return;
		}
		let t = kk(e.mergedDecorationSet), n = new Set(t.map(({ key: e }) => e));
		for (let { key: e, extensions: n } of t) {
			if (this.warnedWidgetKeys.has(e)) continue;
			let t = Array.from(n).map((e) => `"${e}"`).join(", ");
			console.warn(`[tiptap warn]: Duplicate widget decoration key "${e}" in extension${n.size === 1 ? "" : "s"} ${t}. Widget decoration keys must be globally unique, otherwise ProseMirror misplaces the widget DOM. Use a stable, unique key (e.g. \`comment-\${id}\`).`);
		}
		this.warnedWidgetKeys = n;
	}
	buildMergedSet(e, t) {
		let n = Object.keys(t);
		return n.length === 1 ? t[n[0]] : Ik(e, t);
	}
	mergeAfterApply({ entries: e, previous: t, tr: n, decorationSetsByExtension: r, recomputedNames: i }) {
		return e.length === 1 ? r[e[0].name] : i.size === 0 ? t.mergedDecorationSet.map(n.mapping, n.doc) : Ik(n.doc, r);
	}
};
function Hk(e, t) {
	let { selection: n } = e, { $from: r } = n;
	if (n instanceof K) {
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
function Uk(e, t, n) {
	let r = document.querySelector(`style[data-tiptap-style${n ? `-${n}` : ""}]`);
	if (r !== null) return r;
	let i = document.createElement("style");
	return t && i.setAttribute("nonce", t), i.setAttribute(`data-tiptap-style${n ? `-${n}` : ""}`, ""), i.innerHTML = e, document.getElementsByTagName("head")[0].appendChild(i), i;
}
function Wk(e, t) {
	let n = e.getAttribute("style");
	if (!n) return null;
	let r = n.split(";").map((e) => e.trim()).filter(Boolean), i = t.toLowerCase();
	for (let e = r.length - 1; e >= 0; --e) {
		let t = r[e], n = t.indexOf(":");
		if (n !== -1 && t.slice(0, n).trim().toLowerCase() === i) return t.slice(n + 1).trim();
	}
	return null;
}
function Gk(e) {
	return typeof e == "number";
}
function Kk(e) {
	return Object.prototype.toString.call(e).slice(8, -1);
}
function qk(e) {
	return Kk(e) === "Object" && e.constructor === Object && Object.getPrototypeOf(e) === Object.prototype;
}
function Jk(e) {
	return typeof e == "string" && e.trim().length > 0 && !/[;{}]/.test(e);
}
function Yk(e, t) {
	return e.replace(/^[ \t]*/, (e) => {
		let n = 0;
		for (let t of e) n += t === "	" ? 4 - n % 4 : 1;
		return " ".repeat(Math.max(0, n - t));
	});
}
function Xk(e, t) {
	let n = `text\n${e}\n`, r = t(n)[0];
	return (r?.type === "paragraph" || r?.type === "text") && r.raw === n;
}
function Zk(e, t, n) {
	let r = t.split("\n"), i = n.isParagraphContinuation ?? ((e) => Xk(e, n.blockTokens)), a = 0;
	for (let e of r) {
		if (!e.trim() || !i(e)) break;
		a += 1;
	}
	return {
		mainContent: [e, ...r.slice(0, a).map((e) => e.trimStart())].join("\n"),
		nestedContent: r.slice(a).join("\n")
	};
}
function Qk(e, t, n) {
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
			let e = Zk(p, g.map((e) => Yk(e, f + s)).join("\n"), n);
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
var $k = 4;
function eA(e) {
	let t = 0;
	for (let n of e) t = n === "	" ? t + $k - t % $k : t + 1;
	return t;
}
function tA(e, t, n, r, i) {
	if (!e || !Array.isArray(e.content)) return "";
	let a = typeof n == "function" ? n(r) : n, [o, ...s] = e.content, c = t.renderChildren([o]), l = `${a}${i?.indentMainContent ? c.split("\n").map((e, n) => n === 0 ? e : t.indent(e)).join("\n") : c}`;
	return s && s.length > 0 && s.forEach((e, n) => {
		let r = t.renderChild?.call(t, e, n + 1) ?? t.renderChildren([e]);
		if (r != null) {
			let n = (e) => {
				if (!i?.alignNestedToPrefix) return t.indent(e);
				let n = t.indent(""), r = eA(a);
				return (eA(n) >= r ? n : " ".repeat(r)) + e;
			}, o = r.split("\n").map((e) => n(e || "")).join("\n");
			l += e.type === "paragraph" ? `\n\n${o}` : `\n${o}`;
		}
	}), l;
}
function nA(e, t) {
	let n = { ...e };
	return qk(e) && qk(t) && Object.keys(t).forEach((r) => {
		qk(t[r]) && qk(e[r]) ? n[r] = nA(e[r], t[r]) : n[r] = t[r];
	}), n;
}
function rA(e, t, n = {}) {
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
var iA = class {
	constructor(e) {
		this.find = e.find, this.handler = e.handler, this.undoable = e.undoable ?? !0;
	}
}, aA = (e, t) => {
	if (AE(t)) return t.exec(e);
	let n = t(e);
	if (!n) return null;
	let r = [n.text];
	return r.index = n.index, r.input = e, r.data = n.data, n.replaceWith && (n.text.includes(n.replaceWith) || console.warn("[tiptap warn]: \"inputRuleMatch.replaceWith\" must be part of \"inputRuleMatch.text\"."), r.push(n.replaceWith)), r;
};
function oA(e) {
	let { editor: t, from: n, to: r, text: i, insertText: a } = e;
	if (!a) return {
		inputTransaction: null,
		tr: t.view.state.tr
	};
	let o = t.view.state.tr.insertText(i, n, r);
	return {
		inputTransaction: o,
		tr: rb.create({
			doc: o.doc,
			selection: o.selection,
			storedMarks: o.storedMarks
		}).tr
	};
}
function sA(e) {
	let { editor: t, from: n, to: r, text: i, rule: a, match: o, plugin: s, insertText: c } = e, { view: l } = t, { inputTransaction: u, tr: d } = oA({
		editor: t,
		from: n,
		to: r,
		text: i,
		insertText: c
	}), f = u ? n + i.length : r, p = fE({
		state: l.state,
		transaction: d
	}), m = {
		from: n - (o[0].length - i.length),
		to: f
	}, { commands: h, chain: g, can: _ } = new pE({
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
	}) === null || !d.steps.length ? !1 : (u && (l.dispatch(u), !l.state.doc.eq(u.doc)) || (iE(d), d.setMeta("inputRule", !0), a.undoable && d.setMeta(s, {
		transform: d,
		from: n,
		to: f,
		text: i
	}), l.dispatch(d)), !0);
}
function cA(e, t, n) {
	let r = t[0].length - n.length;
	if (r <= 0) return !0;
	let i = e.parentOffset - r;
	return i >= 0 && e.parent.textBetween(i, e.parentOffset) === t[0].slice(0, r);
}
function lA(e) {
	let { editor: t, from: n, to: r, text: i, rules: a, plugin: o, insertText: s } = e, { view: c } = t;
	if (c.composing) return !1;
	let l = c.state.doc.resolve(n);
	if (l.parent.type.spec.code || (l.nodeBefore || l.nodeAfter)?.marks.find((e) => e.type.spec.code)) return !1;
	let u = xO(l) + i;
	for (let e of a) {
		let a = aA(u, e.find);
		if (a && cA(l, a, i) && sA({
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
function uA(e) {
	let { editor: t, rules: n } = e, r = new q({
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
					e = typeof e == "string" ? e : LD(V.from(e), a.schema);
					let { from: i } = s, o = i + e.length;
					lA({
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
				return lA({
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
				i && lA({
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
				return a ? lA({
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
var dA = class {
	constructor(e = {}) {
		this.type = "extendable", this.parent = null, this.child = null, this.name = "", this.config = { name: this.name }, this.config = {
			...this.config,
			...e
		}, this.name = this.config.name;
	}
	get options() {
		return { ...X(Y(this, "addOptions", { name: this.name })) };
	}
	get storage() {
		return { ...X(Y(this, "addStorage", {
			name: this.name,
			options: this.options
		})) };
	}
	configure(e = {}) {
		let t = this.extend({
			...this.config,
			addOptions: () => nA(this.options, e)
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
}, fA = class e extends dA {
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
}, pA = class {
	constructor(e) {
		this.find = e.find, this.handler = e.handler;
	}
}, mA = (e, t, n) => {
	if (AE(t)) return [...e.matchAll(t)];
	let r = t(e, n);
	return r ? r.map((t) => {
		let n = [t.text];
		return n.index = t.index, n.input = e, n.data = t.data, t.replaceWith && (t.text.includes(t.replaceWith) || console.warn("[tiptap warn]: \"pasteRuleMatch.replaceWith\" must be part of \"pasteRuleMatch.text\"."), n.push(t.replaceWith)), n;
	}) : [];
};
function hA(e) {
	let { editor: t, state: n, from: r, to: i, rule: a, pasteEvent: o, dropEvent: s } = e, { commands: c, chain: l, can: u } = new pE({
		editor: t,
		state: n
	}), d = [];
	return n.doc.nodesBetween(r, i, (e, t) => {
		var f;
		if ((f = e.type) != null && (f = f.spec) != null && f.code || !(e.isText || e.isTextblock || e.isInline)) return;
		let p = e.content?.size ?? e.nodeSize ?? 0, m = Math.max(r, t), h = Math.min(i, t + p);
		m >= h || mA(e.isText ? e.text || "" : e.textBetween(m - t, h - t, void 0, "￼"), a.find, o).forEach((e) => {
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
var gA = null, _A = (e) => {
	var t;
	let n = new ClipboardEvent("paste", { clipboardData: new DataTransfer() });
	return (t = n.clipboardData) == null || t.setData("text/html", e), n;
};
function vA(e) {
	let { editor: t, rules: n } = e, r = null, i = !1, a = !1, o = typeof ClipboardEvent < "u" ? new ClipboardEvent("paste") : null, s;
	try {
		s = typeof DragEvent < "u" ? new DragEvent("drop") : null;
	} catch {
		s = null;
	}
	let c = ({ state: e, from: n, to: r, rule: i, pasteEvt: a }) => {
		let c = e.tr, l = fE({
			state: e,
			transaction: c
		});
		if (hA({
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
		gA === t && (gA = null);
	}), n.map((e) => new q({
		view(e) {
			let n = (n) => {
				r = e.dom.parentElement?.contains(n.target) ? e.dom.parentElement : null, r && (gA = t);
			}, i = () => {
				gA &&= null;
			};
			return window.addEventListener("dragstart", n), window.addEventListener("dragend", i), { destroy() {
				window.removeEventListener("dragstart", n), window.removeEventListener("dragend", i);
			} };
		},
		props: { handleDOMEvents: {
			drop: (e, t) => {
				if (a = r === e.dom.parentElement, s = t, !a) {
					let e = gA;
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
				t = typeof t == "string" ? t : LD(V.from(t), r.schema);
				let { from: n } = d, i = n + t.length, a = _A(t);
				return c({
					rule: e,
					state: r,
					from: n,
					to: { b: i },
					pasteEvt: a
				});
			}
			let p = n.doc.content.findDiffStart(r.doc.content), m = n.doc.content.findDiffEnd(r.doc.content);
			if (Gk(p) && m && p !== m.b) return c({
				rule: e,
				state: r,
				from: p,
				to: m,
				pasteEvt: o
			});
		}
	}));
}
var yA = class {
	constructor(e, t) {
		this.splittableMarks = [], this.nonClearableMarks = [], this.decorationManager = null, this.editor = t, this.baseExtensions = e, this.extensions = sO(e), this.hasSchemaSpec = t.options.schemaSpec !== void 0, this.schema = aO(this.extensions, t, t.options.schemaSpec), this.setupExtensions();
	}
	get commands() {
		return this.extensions.reduce((e, t) => {
			let n = Y(t, "addCommands", {
				name: t.name,
				options: t.options,
				storage: this.editor.extensionStorage[t.name],
				editor: this.editor,
				type: yO(t.name, this.schema)
			});
			return n ? {
				...e,
				...n()
			} : e;
		}, {});
	}
	get plugins() {
		let { editor: e } = this, t = oO([...this.extensions].reverse()).flatMap((t) => {
			let n = {
				name: t.name,
				options: t.options,
				storage: this.editor.extensionStorage[t.name],
				editor: e,
				type: yO(t.name, this.schema)
			}, r = [], i = Y(t, "addKeyboardShortcuts", n), a = {};
			if (t.type === "mark" && Y(t, "exitable", n) && (a.ArrowRight = () => fA.handleExit({
				editor: e,
				mark: t
			})), i) {
				let t = Object.fromEntries(Object.entries(i()).map(([t, n]) => [t, () => n({ editor: e })]));
				a = {
					...a,
					...t
				};
			}
			let o = RT(a);
			r.push(o);
			let s = Y(t, "addInputRules", n);
			if (EO(t, e.options.enableInputRules) && s) {
				let t = s();
				if (t && t.length) {
					let n = uA({
						editor: e,
						rules: t
					}), i = Array.isArray(n) ? n : [n];
					r.push(...i);
				}
			}
			let c = Y(t, "addPasteRules", n);
			if (EO(t, e.options.enablePasteRules) && c) {
				let t = c();
				if (t && t.length) {
					let n = vA({
						editor: e,
						rules: t
					});
					r.push(...n);
				}
			}
			let l = Y(t, "addProseMirrorPlugins", n);
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
			let r = Y(e, "addDecorations", {
				name: e.name,
				options: e.options,
				storage: this.editor.extensionStorage[e.name],
				editor: t,
				type: yO(e.name, this.schema)
			});
			r && n.push({
				name: e.name,
				addDecorations: r
			});
		}), this.decorationManager = new Vk({
			editor: t,
			entries: n
		}), this.decorationManager.plugin;
	}
	get attributes() {
		let e = qD(this.extensions);
		return this.hasSchemaSpec ? RD(e, this.schema) : e;
	}
	get nodeViews() {
		let { editor: e } = this, { nodeExtensions: t } = KD(this.extensions);
		return Object.fromEntries(t.filter((e) => !!Y(e, "addNodeView")).map((t) => {
			let n = this.attributes.filter((e) => e.type === t.name), r = Y(t, "addNodeView", {
				name: t.name,
				options: t.options,
				storage: this.editor.extensionStorage[t.name],
				editor: e,
				type: xE(t.name, this.schema)
			});
			if (!r) return [];
			let i = r();
			return i ? [t.name, (r, a, o, s, c) => {
				let l = $D(r, n);
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
		return oO([...this.extensions].reverse()).reduceRight((e, n) => {
			let r = {
				name: n.name,
				options: n.options,
				storage: this.editor.extensionStorage[n.name],
				editor: t,
				type: yO(n.name, this.schema)
			}, i = Y(n, "dispatchTransaction", r);
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
		return oO([...this.extensions]).reduce((e, n) => {
			let r = {
				name: n.name,
				options: n.options,
				storage: this.editor.extensionStorage[n.name],
				editor: t,
				type: yO(n.name, this.schema)
			}, i = Y(n, "transformPastedHTML", r);
			return i ? (t, n) => {
				let a = e(t, n);
				return i.call(r, a);
			} : e;
		}, e || ((e) => e));
	}
	get markViews() {
		let { editor: e } = this, { markExtensions: t } = KD(this.extensions);
		return Object.fromEntries(t.filter((e) => !!Y(e, "addMarkView")).map((t) => {
			let n = this.attributes.filter((e) => e.type === t.name), r = Y(t, "addMarkView", {
				name: t.name,
				options: t.options,
				storage: this.editor.extensionStorage[t.name],
				editor: e,
				type: FE(t.name, this.schema)
			});
			return r ? [t.name, (i, a, o) => {
				let s = $D(i, n);
				return r()({
					mark: i,
					view: a,
					inline: o,
					editor: e,
					extension: t,
					HTMLAttributes: s,
					updateAttributes: (t) => {
						rA(i, e, t);
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
				type: yO(e.name, this.schema)
			};
			e.type === "mark" && ((X(Y(e, "keepOnSplit", t)) ?? !0) && this.splittableMarks.push(e.name), (X(Y(e, "clearable", t)) ?? !0) || this.nonClearableMarks.push(e.name));
			let n = Y(e, "onBeforeCreate", t), r = Y(e, "onCreate", t), i = Y(e, "onUpdate", t), a = Y(e, "onSelectionUpdate", t), o = Y(e, "onTransaction", t), s = Y(e, "onFocus", t), c = Y(e, "onBlur", t), l = Y(e, "onDestroy", t);
			n && this.editor.on("beforeCreate", n), r && this.editor.on("create", r), i && this.editor.on("update", i), a && this.editor.on("selectionUpdate", a), o && this.editor.on("transaction", o), s && this.editor.on("focus", s), c && this.editor.on("blur", c), l && this.editor.on("destroy", l);
		});
	}
};
yA.resolve = sO, yA.sort = oO, yA.flatten = ID;
var Z = class e extends dA {
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
}, bA = Z.create({
	name: "clipboardTextSerializer",
	addOptions() {
		return { blockSeparator: void 0 };
	},
	addProseMirrorPlugins() {
		return [new q({
			key: new sb("clipboardTextSerializer"),
			props: { clipboardTextSerializer: () => {
				let { editor: e } = this, { state: t, schema: n } = e, { doc: r, selection: i } = t, a = uO(n), { blockSeparator: o } = this.options, s = {
					...o === void 0 ? {} : { blockSeparator: o },
					textSerializers: a
				};
				return [...i.ranges].sort((e, t) => e.$from.pos - t.$from.pos).map(({ $from: e, $to: t }) => cO(r, {
					from: e.pos,
					to: t.pos
				}, s)).join(o ?? "\n\n");
			} }
		})];
	}
}), xA = Z.create({
	name: "commands",
	addCommands() {
		return { ..._k };
	}
}), SA = Z.create({
	name: "delete",
	onUpdate({ transaction: e, appendedTransactions: t }) {
		var n;
		let r = () => {
			var n, r;
			if (((n = this.editor.options.coreExtensionOptions) == null || (n = n.delete) == null || (r = n.filterTransaction) == null ? void 0 : r.call(n, e)) ?? e.getMeta("y-sync$")) return;
			let i = MD(e.before, [e, ...t]);
			hO(i).forEach((t) => {
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
				if (t instanceof Bv) {
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
}), CA = Z.create({
	name: "drop",
	addProseMirrorPlugins() {
		return [new q({
			key: new sb("tiptapDrop"),
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
}), wA = Z.create({
	name: "editable",
	addProseMirrorPlugins() {
		return [new q({
			key: new sb("editable"),
			props: { editable: () => this.editor.options.editable }
		})];
	}
}), TA = new sb("focusEvents"), EA = Z.create({
	name: "focusEvents",
	addProseMirrorPlugins() {
		let { editor: e } = this;
		return [new q({
			key: TA,
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
function DA(e) {
	let { empty: t, from: n, to: r } = e.selection;
	return !t && n === W.atStart(e.doc).from && r === W.atEnd(e.doc).to;
}
var OA = Z.create({
	name: "keymap",
	addKeyboardShortcuts() {
		let e = () => this.editor.commands.first(({ commands: e }) => [
			() => e.undoInputRule(),
			() => e.command(({ tr: t }) => {
				let { selection: n, doc: r } = t, { empty: i, $anchor: a } = n, { pos: o, parent: s } = a, c = a.parent.isTextblock && o > 0 ? t.doc.resolve(o - 1) : a, l = c.parent.type.spec.isolating, u = a.pos - a.parentOffset, d = l && c.parent.childCount === 1 ? u === a.pos : W.atStart(r).from === o;
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
		return HE() || dD() ? i : r;
	},
	addProseMirrorPlugins() {
		return [new q({
			key: new sb("clearDocument"),
			appendTransaction: (e, t, n) => {
				if (e.some((e) => e.getMeta("composition"))) return;
				let r = e.some((e) => e.docChanged) && !t.doc.eq(n.doc), i = e.some((e) => e.getMeta("preventClearDocument"));
				if (!r || i || !DA(t) || !OO(n.doc)) return;
				let a = n.tr, o = fE({
					state: n,
					transaction: a
				}), { commands: s } = new pE({
					editor: this.editor,
					state: o
				});
				if (s.clearNodes(), a.steps.length || n.storedMarks) return a.setStoredMarks(null);
			}
		})];
	}
}), kA = Z.create({
	name: "paste",
	addProseMirrorPlugins() {
		return [new q({
			key: new sb("tiptapPaste"),
			props: { handlePaste: (e, t, n) => {
				this.editor.emit("paste", {
					editor: this.editor,
					event: t,
					slice: n
				});
			} }
		})];
	}
}), AA = Z.create({
	name: "tabindex",
	addOptions() {
		return { value: void 0 };
	},
	addProseMirrorPlugins() {
		return [new q({
			key: new sb("tabindex"),
			props: { attributes: () => !this.editor.isEditable && this.options.value === void 0 ? {} : { tabindex: this.options.value ?? "0" } }
		})];
	}
}), jA = Z.create({
	name: "textDirection",
	addOptions() {
		return { direction: void 0 };
	},
	addGlobalAttributes() {
		if (!this.options.direction) return [];
		let { nodeExtensions: e } = KD(this.extensions);
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
		return [new q({
			key: new sb("textDirection"),
			props: { attributes: () => {
				let e = this.options.direction;
				return e ? { dir: e } : {};
			} }
		})];
	}
}), MA = !1;
function NA(e) {
	if (MA) return;
	MA = !0;
	let t;
	try {
		let n = Gv.fromJSON(e, {
			from: 0,
			to: 0
		});
		if (!jO(n)) return;
		t = n.slice.content;
	} catch {
		return;
	}
	t instanceof V || console.warn("[tiptap warn]: prosemirror-model is loaded more than once. Wrapping and splitting nodes will fail. Deduplicate it in your lock file, or alias it to a single copy in your bundler.");
}
var PA = class e {
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
}, FA = ".ProseMirror {\n  position: relative;\n}\n\n.ProseMirror {\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  white-space: break-spaces;\n  -webkit-font-variant-ligatures: none;\n  font-variant-ligatures: none;\n  font-feature-settings: \"liga\" 0; /* the above doesn't seem to work in Edge */\n}\n\n.ProseMirror [contenteditable=\"false\"] {\n  white-space: normal;\n}\n\n.ProseMirror [contenteditable=\"false\"] [contenteditable=\"true\"] {\n  white-space: pre-wrap;\n}\n\n.ProseMirror pre {\n  white-space: pre-wrap;\n}\n\nimg.ProseMirror-separator {\n  display: inline !important;\n  border: none !important;\n  margin: 0 !important;\n  width: 0 !important;\n  height: 0 !important;\n}\n\n.ProseMirror-gapcursor {\n  display: none;\n  pointer-events: none;\n  position: absolute;\n  margin: 0;\n}\n\n.ProseMirror-gapcursor:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: -2px;\n  width: 20px;\n  border-top: 1px solid black;\n  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;\n}\n\n@keyframes ProseMirror-cursor-blink {\n  to {\n    visibility: hidden;\n  }\n}\n\n.ProseMirror-hideselection *::selection {\n  background: transparent;\n}\n\n.ProseMirror-hideselection *::-moz-selection {\n  background: transparent;\n}\n\n.ProseMirror-hideselection * {\n  caret-color: transparent;\n}\n\n.ProseMirror-focused .ProseMirror-gapcursor {\n  display: block;\n}", IA = class extends xk {
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
			getUpdatedPosition: NO,
			createMappablePosition: PO
		}, this.setOptions(e), this.createExtensionManager(), this.createCommandManager(), this.createSchema(), this.on("beforeCreate", this.options.onBeforeCreate), this.emit("beforeCreate", { editor: this }), this.on("mount", this.options.onMount), this.on("unmount", this.options.onUnmount), this.on("contentError", this.options.onContentError), this.on("create", this.options.onCreate), this.on("update", this.options.onUpdate), this.on("selectionUpdate", this.options.onSelectionUpdate), this.on("transaction", this.options.onTransaction), this.on("focus", this.options.onFocus), this.on("blur", this.options.onBlur), this.on("destroy", this.options.onDestroy), this.on("drop", ({ event: e, slice: t, moved: n }) => this.options.onDrop(e, t, n)), this.on("paste", ({ event: e, slice: t }) => this.options.onPaste(e, t)), this.on("delete", this.options.onDelete);
		let t = this.createDoc();
		if (!this.editorState) {
			let e = BE(t, this.options.autofocus);
			this.editorState = rb.create({
				doc: t,
				schema: this.schema,
				selection: e || void 0
			});
		}
		NA(this.schema), this.options.element && this.mount(this.options.element);
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
		return this.commandManager ? this.commandManager.chain() : pE.createFakeChain();
	}
	can() {
		return this.commandManager ? this.commandManager.can() : pE.createFallbackCan();
	}
	injectCSS() {
		this.options.injectCSS && typeof document < "u" && (this.css = Uk(FA, this.options.injectNonce));
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
		return Sk && !this.hasWarnedStaleDecorationRead && bk(this) && (this.hasWarnedStaleDecorationRead = !0, console.warn("[tiptap warn]: `editor.state` was read while decoration `create()` was running. It returns the pre-transaction document. Use the `state` argument passed to `create()` instead. Helpers like `editor.isActive()` read `editor.state` too, so pass `state` to their standalone versions instead of calling them on the editor.")), this.editorView && (this.editorState = this.view.state), this.editorState;
	}
	registerPlugin(e, t) {
		let n = JD(t) ? t(e, [...this.state.plugins]) : [...this.state.plugins, e], r = this.state.reconfigure({ plugins: n });
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
			wA,
			bA.configure({ blockSeparator: (e = this.options.coreExtensionOptions) == null || (e = e.clipboardTextSerializer) == null ? void 0 : e.blockSeparator }),
			xA,
			EA,
			OA,
			AA.configure({ value: (t = this.options.coreExtensionOptions) == null || (t = t.tabindex) == null ? void 0 : t.value }),
			CA,
			kA,
			SA,
			jA.configure({ direction: this.options.textDirection })
		].filter((e) => typeof this.options.enableCoreExtensions != "object" || this.options.enableCoreExtensions[e.name] !== !1) : [], ...this.options.extensions].filter((e) => [
			"extension",
			"node",
			"mark"
		].includes(e?.type));
		this.extensionManager = new yA(n, this);
	}
	createCommandManager() {
		this.commandManager = new pE({ editor: this });
	}
	createSchema() {
		this.schema = this.extensionManager.schema;
	}
	createDoc() {
		let e;
		try {
			e = kD(this.options.content, this.schema, this.options.parseOptions, { errorOnInvalidContent: this.options.enableContentCheck });
		} catch (e) {
			if (!(e instanceof Error) || !["[tiptap error]: Invalid JSON content", "[tiptap error]: Invalid HTML content"].includes(e.message)) throw e;
			let t = kD(this.options.content, this.schema, this.options.parseOptions, { errorOnInvalidContent: !1 });
			return this.editorState = rb.create({
				doc: t,
				schema: this.schema,
				selection: BE(t, this.options.autofocus) || void 0
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
		return JD(e) ? (t) => ({
			role: "textbox",
			...e(t)
		}) : {
			role: "textbox",
			...e
		};
	}
	createView(e) {
		let { editorProps: t, enableExtensionDispatchTransaction: n } = this.options, r = t.dispatchTransaction || this.dispatchTransaction.bind(this), i = n ? this.extensionManager.dispatchTransaction(r) : r, a = t.transformPastedHTML, o = this.extensionManager.transformPastedHTML(a);
		this.editorView = new vT(e, {
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
		return fO(this.state, e);
	}
	isActive(e, t) {
		let n = typeof e == "string" ? e : null, r = typeof e == "string" ? t : e;
		return CO(this.state, n, r);
	}
	getJSON() {
		return this.state.doc.toJSON();
	}
	getHTML() {
		return LD(this.state.doc.content, this.schema);
	}
	getText(e) {
		let { blockSeparator: t = "\n\n", textSerializers: n = {} } = e || {};
		return lO(this.state.doc, {
			blockSeparator: t,
			textSerializers: {
				...uO(this.schema),
				...n
			}
		});
	}
	get isEmpty() {
		return OO(this.state.doc);
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
		return new PA(t, this, !1, n);
	}
	get $doc() {
		return this.$pos(0);
	}
};
function LA(e) {
	return new iA({
		find: e.find,
		handler: ({ state: t, range: n, match: r }) => {
			let i = X(e.getAttributes, void 0, r);
			if (i === !1 || i === null) return null;
			let { tr: a } = t, o = r[r.length - 1], s = r[0];
			if (o) {
				let r = s.search(/\S/), c = n.from + s.indexOf(o), l = c + o.length;
				if (gO(n.from, n.to, t.doc).filter((t) => t.mark.type.excluded.find((n) => n === e.type && n !== t.mark.type)).filter((e) => e.to > c).length) return null;
				l < n.to && a.delete(l, n.to), c > n.from && a.delete(n.from + r, c);
				let u = n.from + r + o.length;
				a.addMark(n.from + r, u, e.type.create(i || {})), a.removeStoredMark(e.type);
			}
		},
		undoable: e.undoable
	});
}
function RA(e) {
	return new iA({
		find: e.find,
		handler: ({ state: t, range: n, match: r }) => {
			let i = X(e.getAttributes, void 0, r) || {}, { tr: a } = t, o = n.from, s = n.to, c = e.type.create(i);
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
function zA(e) {
	return new iA({
		find: e.find,
		handler: ({ state: t, range: n, match: r }) => {
			let i = t.doc.resolve(n.from), a = X(e.getAttributes, void 0, r) || {};
			if (!i.node(-1).canReplaceWith(i.index(-1), i.indexAfter(-1), e.type)) return null;
			t.tr.delete(n.from, n.to).setBlockType(n.from, n.from, e.type, a);
		},
		undoable: e.undoable
	});
}
function BA(e) {
	return new iA({
		find: e.find,
		handler: ({ state: t, range: n, match: r, chain: i }) => {
			let a = X(e.getAttributes, void 0, r) || {}, o = t.tr.delete(n.from, n.to), s = o.doc.resolve(n.from).blockRange(), c = s && ey(s, e.type, a);
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
			l && l.type === e.type && fy(o.doc, n.from - 1) && (!e.joinPredicate || e.joinPredicate(r, l)) && o.join(n.from - 1);
		},
		undoable: e.undoable
	});
}
var VA = class e extends dA {
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
function HA(e) {
	return new pA({
		find: e.find,
		handler: ({ state: t, range: n, match: r, pasteEvent: i }) => {
			let a = X(e.getAttributes, void 0, r, i);
			if (a === !1 || a === null) return null;
			let { tr: o } = t, s = r[r.length - 1], c = r[0], l = n.to;
			if (s) {
				let i = c.search(/\S/), u = n.from + c.indexOf(s), d = u + s.length;
				if (gO(n.from, n.to, t.doc).filter((t) => t.mark.type.excluded.find((n) => n === e.type && n !== t.mark.type)).filter((e) => e.to > u).length) return null;
				d < n.to && o.delete(d, n.to), u > n.from && o.delete(n.from + i, u), l = n.from + i + s.length, o.addMark(n.from + i, l, e.type.create(a || {})), r.index !== void 0 && r.input !== void 0 && r.index + r[0].length >= r.input.length || o.removeStoredMark(e.type);
			}
		}
	});
}
// node_modules/@tiptap/extension-highlight/dist/index.js
var UA = /(?:^|\s)(==(?!\s+==)((?:[^=]+))==(?!\s+==))$/, WA = /(?:^|\s)(==(?!\s+==)((?:[^=]+))==(?!\s+==))/g, GA = fA.create({
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
			parseHTML: (e) => e.getAttribute("data-color") || Wk(e, "background-color") || e.style.backgroundColor,
			renderHTML: (e) => Jk(e.color) ? {
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
			QD(this.options.HTMLAttributes, e),
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
		return [LA({
			find: UA,
			type: this.type
		})];
	},
	addPasteRules() {
		return [HA({
			find: WA,
			type: this.type
		})];
	}
}), KA = "listItem", qA = "textStyle", JA = /^\s*([-+*])\s$/, YA = VA.create({
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
			QD(this.options.HTMLAttributes, e),
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
		return { toggleBulletList: () => ({ commands: e, chain: t }) => this.options.keepAttributes ? t().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(KA, this.editor.getAttributes(qA)).run() : e.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks) };
	},
	addKeyboardShortcuts() {
		return { "Mod-Shift-8": () => this.editor.commands.toggleBulletList() };
	},
	addInputRules() {
		let e = BA({
			find: JA,
			type: this.type
		});
		return (this.options.keepMarks || this.options.keepAttributes) && (e = BA({
			find: JA,
			type: this.type,
			keepMarks: this.options.keepMarks,
			keepAttributes: this.options.keepAttributes,
			getAttributes: () => this.editor.getAttributes(qA),
			editor: this.editor
		})), [e];
	}
}), XA = (e, t, n) => {
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
}, ZA = (e, t, n, r) => {
	let i = XA(e, n, r);
	if (!i) return !1;
	let { selection: a } = e, { nestedList: o, nestedListPos: s, insertPos: c, items: l } = i, u = e.tr;
	u.delete(s, s + o.nodeSize);
	let d = u.mapping.map(c);
	return u.insert(d, V.from(l)), u.setSelection(a.map(u.doc, u.mapping)), t && t(u), !0;
}, QA = (e, t, n) => ZA(e.state, e.view.dispatch, t, n), $A = (e, t) => Z.create({
	name: `${e}BranchingDeleteKeymap`,
	priority: 101,
	addKeyboardShortcuts() {
		let n = () => QA(this.editor, e, t);
		return {
			Delete: n,
			"Mod-Delete": n
		};
	}
}), ej = [
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
], tj = "abcdefghijklmnopqrstuvwxyz", nj = String.raw`\d+|[ivxlcdmIVXLCDM]+|${"[a-zA-Z]{1,2}"}`;
function rj(e) {
	let t = e, n = "";
	for (let [e, r] of ej) for (; t >= e;) n += r, t -= e;
	return n;
}
function ij(e) {
	return rj(e).toUpperCase();
}
function aj(e) {
	let t = e.toLowerCase(), n = 0, r = 0;
	for (; n < t.length;) {
		let e = !1;
		for (let [i, a] of ej) if (t.startsWith(a, n)) {
			r += i, n += a.length, e = !0;
			break;
		}
		if (!e) return 0;
	}
	return r;
}
function oj(e) {
	if (!/^[ivxlcdmIVXLCDM]+$/.test(e)) return !1;
	let t = aj(e);
	return t <= 0 ? !1 : (e === e.toLowerCase() ? rj(t) : ij(t)) === e;
}
function sj(e) {
	let t = e.toLowerCase();
	if (t.length === 1) return t.charCodeAt(0) - 97 + 1;
	if (t.length === 2) {
		let e = t.charCodeAt(0) - 97, n = t.charCodeAt(1) - 97;
		return (e + 1) * 26 + n + 1;
	}
	return 0;
}
function cj(e) {
	if (e <= 26) return tj[e - 1];
	let t = Math.floor((e - 1) / 26) - 1, n = (e - 1) % 26;
	return t < 0 ? tj[n] : tj[t] + tj[n];
}
function lj(e) {
	if (e && !/^\d+$/.test(e)) {
		if (oj(e)) return e === e.toLowerCase() ? "i" : "I";
		if (/^[a-z]{1,2}$/.test(e)) return "a";
		if (/^[A-Z]{1,2}$/.test(e)) return "A";
	}
}
function uj(e) {
	if (/^\d+$/.test(e)) return parseInt(e, 10);
	let t = lj(e);
	if (t === "i" || t === "I") return aj(e);
	if (t === "a" || t === "A") {
		let t = sj(e);
		return t > 0 ? t : 1;
	}
	let n = parseInt(e, 10);
	return Number.isNaN(n) ? 1 : n;
}
function dj(e, t) {
	if (e === "numeric") return String(t);
	switch (e) {
		case "a": return cj(t);
		case "A": return cj(t).toUpperCase();
		case "i": return rj(t);
		case "I": return ij(t);
		default: return String(t);
	}
}
function fj(e) {
	if (e.length === 0) return !1;
	let t = lj(e[0]) ?? "numeric", n = uj(e[0]);
	if (n < 1) return !1;
	for (let r = 0; r < e.length; r++) {
		let i = dj(t, n + r);
		if (e[r] !== i) return !1;
	}
	return !0;
}
function pj(e) {
	return {
		type: lj(e),
		start: uj(e)
	};
}
function mj(e) {
	let { type: t, start: n } = pj(e), r = {};
	return t && (r.type = t), n !== 1 && (r.start = n), r;
}
function hj(e, t, n = ". ") {
	let r = t + 1;
	if (!e || e === "1") return `${r}${n}`;
	switch (e) {
		case "a": return `${cj(r)}${n}`;
		case "A": return `${cj(r).toUpperCase()}${n}`;
		case "i": return `${rj(r)}${n}`;
		case "I": return `${ij(r)}${n}`;
		default: return `${r}${n}`;
	}
}
function gj(e) {
	return !e[0] || e[0].type === "paragraph" ? e : [{
		type: "paragraph",
		content: []
	}, ...e];
}
function _j(e) {
	let t = e.content?.[0];
	return t?.type === "paragraph" && !t.content?.length;
}
var vj = "&nbsp;", yj = 1, bj = (e) => (e?.level ?? yj) > yj;
function xj(e) {
	let t = e.tokens?.[0];
	return !!(e.text && e.tokens?.length === 1 && t?.type === "list" && t.ordered && t.raw === e.text);
}
function Sj(e, t) {
	return t.tokenizeInline ? t.parseInline(t.tokenizeInline(e)) : t.parseInline([{
		type: "text",
		raw: e,
		text: e
	}]);
}
var Cj = VA.create({
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
			QD(this.options.HTMLAttributes, e),
			0
		];
	},
	markdownTokenName: "list_item",
	parseMarkdown: (e, t) => {
		if (e.type !== "list_item") return [];
		let n = t.parseBlockChildren ?? t.parseChildren, r = [];
		if (e.tokens && e.tokens.length > 0) {
			if (xj(e)) return {
				type: "listItem",
				content: [{
					type: "paragraph",
					content: Sj(e.text || "", t)
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
			content: gj(r)
		};
	},
	renderMarkdown: (e, t, n) => {
		let r = (e) => {
			if (e.parentType === "bulletList") return "- ";
			if (e.parentType === "orderedList") {
				var t, n;
				let r = ((t = e.meta) == null || (t = t.parentAttrs) == null ? void 0 : t.start) || 1;
				return hj((n = e.meta) == null || (n = n.parentAttrs) == null ? void 0 : n.type, r - 1 + (e.index || 0), ". ");
			}
			return "- ";
		}, i = tA(e, t, r, n, { alignNestedToPrefix: n?.parentType === "orderedList" });
		if (!_j(e) || !bj(n)) return i;
		let a = r(n);
		return `${a}${vj}${i.slice(a.length)}`;
	},
	addExtensions() {
		return [$A(this.name, [this.options.bulletListTypeName, this.options.orderedListTypeName])];
	},
	addKeyboardShortcuts() {
		return {
			Enter: () => this.editor.commands.splitListItem(this.name),
			Tab: () => this.editor.commands.sinkListItem(this.name),
			"Shift-Tab": () => this.editor.commands.liftListItem(this.name)
		};
	}
}), wj = (e, t) => {
	let { $from: n } = t.selection, r = xE(e, t.schema), i = null, a = n.depth, o = n.pos, s = null;
	for (; a > 0 && s === null;) i = n.node(a), i.type === r ? s = a : (--a, --o);
	return s === null ? null : {
		$pos: t.doc.resolve(o),
		depth: s
	};
}, Tj = (e, t) => {
	let n = wj(e, t);
	if (!n) return !1;
	let [, r] = _O(t, e, n.$pos.pos + 4);
	return r;
}, Ej = (e, t, n) => {
	let { $anchor: r } = e.selection, i = Math.max(0, r.pos - 2), a = e.doc.resolve(i).node();
	return !(!a || !n.includes(a.type.name));
}, Dj = (e, t, n) => {
	if (e.commands.undoInputRule()) return !0;
	if (e.state.selection.from !== e.state.selection.to) return !1;
	if (!mD(e.state, t) && Ej(e.state, t, n)) {
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
			return e.delete(n.before(), n.after()).insert(t, n.parent), e.setSelection(G.create(e.doc, t + 1)), !0;
		}).command(({ state: e, dispatch: t }) => (db(e, t), !0)).run();
	}
	if (!mD(e.state, t) || !TO(e.state)) return !1;
	let { $from: r } = e.state.selection, i = r.depth - 1;
	return r.node(i).type !== e.schema.nodes[t] || r.index(i) !== 0 ? !1 : e.chain().liftListItem(t).run();
}, Oj = (e, t) => {
	let n = Tj(e, t), r = wj(e, t);
	return !r || !n ? !1 : n > r.depth;
}, kj = (e, t) => {
	let n = Tj(e, t), r = wj(e, t);
	return !r || !n ? !1 : n < r.depth;
}, Aj = (e, t) => !mD(e.state, t) || !wO(e.state, t) || !e.state.selection.empty ? !1 : Oj(t, e.state) ? e.chain().focus(e.state.selection.from + 4).lift(t).joinBackward().run() : kj(t, e.state) ? e.commands.command(({ state: e, dispatch: t }) => fb(e, t)) : e.commands.joinItemForward(), jj = (e, t, n) => {
	let { state: r } = e, { selection: i } = r;
	if (!i.empty) return !1;
	let { $from: a } = i;
	if (a.parentOffset !== 0 || !a.parent.isTextblock || mD(r, t)) return !1;
	let o = vO(a);
	if (!o || !n.includes(o.type.name)) return !1;
	let s = o.lastChild;
	if (!s || s.type.name !== t) return !1;
	let c = a.parent;
	if (!s.canReplace(s.childCount, s.childCount, V.from(c))) return !1;
	let l = a.before(), u = a.after(), d = l - 2;
	return e.commands.command(({ tr: e, dispatch: t }) => (t && (e.delete(l, u).insert(d, V.from(c)), e.setSelection(G.create(e.doc, d + 1)), e.scrollIntoView()), !0));
}, Mj = Z.create({
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
					e.state.schema.nodes[n] !== void 0 && Aj(e, n) && (t = !0);
				}), t;
			},
			"Mod-Delete": ({ editor: e }) => {
				let t = !1;
				return this.options.listTypes.forEach(({ itemName: n }) => {
					e.state.schema.nodes[n] !== void 0 && Aj(e, n) && (t = !0);
				}), t;
			},
			Backspace: ({ editor: e }) => {
				let t = !1;
				return this.options.listTypes.forEach(({ itemName: n, wrapperNames: r }) => {
					e.state.schema.nodes[n] !== void 0 && Dj(e, n, r) && (t = !0);
				}), t;
			},
			"Mod-Backspace": ({ editor: e }) => {
				let t = !1;
				return this.options.listTypes.forEach(({ itemName: n, wrapperNames: r }) => {
					e.state.schema.nodes[n] !== void 0 && Dj(e, n, r) && (t = !0);
				}), t;
			},
			Tab: ({ editor: e }) => {
				for (let { itemName: t, wrapperNames: n } of this.options.listTypes) if (e.state.schema.nodes[t] !== void 0 && jj(e, t, n)) return !0;
				return !1;
			}
		};
	}
}), Nj = RegExp(`^(\\s*)(${nj})([.)])\\s+(.*)$`), Pj = /^\s/, Fj = {
	heading: /^#{1,6}(?:\s|$)/,
	bulletItem: /^[-+*]\s+/,
	codeFence: /^(?:```|~~~)/,
	blockMath: /^\$\$/,
	thematicBreak: /^(?:(?:-[ \t]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})$/
};
function Ij(e) {
	return Nj.test(e.trimStart());
}
function Lj(e) {
	let t = e.trimStart();
	return Fj.bulletItem.test(t) || Ij(t) || Fj.heading.test(t) || Fj.thematicBreak.test(t) && !t.startsWith("-") || /^>\s?/.test(t) || Fj.codeFence.test(t) || Fj.blockMath.test(t);
}
function Rj(e) {
	return Object.values(Fj).some((t) => t.test(e));
}
function zj(e) {
	let t = [], n = [], r = !1;
	return e.forEach((e) => {
		r ? n.push(e) : e.trim() === "" || t.length > 0 && Lj(e) ? (r = !0, n.push(e)) : t.push(e);
	}), {
		paragraphLines: t,
		blockLines: n
	};
}
function Bj(e) {
	let t = [], n = 0, r = 0;
	for (; n < e.length;) {
		let i = e[n], a = i.match(Nj);
		if (!a) break;
		let [, o, s, c, l] = a, u = o.length, d = parseInt(s, 10), f = isNaN(d) ? lj(s) : void 0, p = isNaN(d) ? uj(s) : d, m = [l], h = n + 1, g = [i], _ = !1;
		for (; h < e.length;) {
			let t = e[h];
			if (t.match(Nj)) break;
			if (t.trim() === "") g.push(t), m.push(""), _ = !0, h += 1;
			else if (t.match(Pj)) {
				let e = t.length - t.trimStart().length, n = u + s.length + 1;
				g.push(t), m.push(t.slice(Math.min(e, n))), h += 1;
			} else {
				if (_ || Rj(t)) break;
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
var Vj = RegExp(`^(${nj})([.)])\\s+(.+)$`);
function Hj(e) {
	let t = e.split("\n").filter((e) => e.trim().length > 0);
	if (t.length === 0) return null;
	let n = [];
	for (let e of t) {
		let t = e.trim().match(Vj);
		if (!t) return null;
		n.push({
			marker: t[1],
			content: t[3]
		});
	}
	return fj(n.map((e) => e.marker)) ? {
		type: "orderedList",
		attrs: mj(n[0].marker),
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
function Uj(e, t, n) {
	let r = [], i = 0;
	for (; i < e.length;) {
		let a = e[i];
		if (a.indent === t) {
			let { paragraphLines: o, blockLines: s } = zj(a.contentLines), c = o.join("\n").trim(), l = [];
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
				let e = Uj(f, Math.min(...f.map((e) => e.indent)), n);
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
function Wj(e, t) {
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
var Gj = 64;
function Kj(e, t) {
	let n = [], r = 0;
	for (; n.length < t;) {
		let t = e.indexOf("\n", r);
		if (t === -1) return n.push(e.slice(r)), n;
		n.push(e.slice(r, t)), r = t + 1;
	}
	return n;
}
function qj(e) {
	let t = e.indexOf("\n"), n = t === -1 ? e : e.slice(0, t);
	if (!Nj.test(n)) return [
		[],
		0,
		[]
	];
	let r = Gj, i = Kj(e, r), a = Bj(i);
	for (; a[1] === i.length && i.length === r;) r *= 2, i = Kj(e, r), a = Bj(i);
	return [
		a[0],
		a[1],
		i
	];
}
var Jj = "listItem", Yj = "textStyle", Xj = /^(\d+)\.\s$/;
function Zj(e) {
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
var Qj = VA.create({
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
						let e = Zj(n);
						if (e) return e;
					}
					let r = e.querySelector("li");
					if (r) {
						let e = r.getAttribute("style");
						if (e) {
							let t = Zj(e);
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
		let { start: t, type: n, ...r } = e, i = QD(this.options.HTMLAttributes, r);
		return t !== 1 && (i.start = t), n && n !== "1" && (i.type = n), [
			"ol",
			i,
			0
		];
	},
	markdownTokenName: "list",
	parseMarkdown: (e, t) => {
		if (e.type !== "list" || !e.ordered) return [];
		let n = e.start || 1, r = e.typeMarker, i = e.items ? Wj(e.items, t) : [], a = {};
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
			let [r, i, a] = qj(e);
			if (r.length === 0) return;
			let o = Uj(r, r[0].indent, n);
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
		return { toggleOrderedList: () => ({ commands: e, chain: t }) => this.options.keepAttributes ? t().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(Jj, this.editor.getAttributes(Yj)).run() : e.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks) };
	},
	addKeyboardShortcuts() {
		return { "Mod-Shift-7": () => this.editor.commands.toggleOrderedList() };
	},
	addProseMirrorPlugins() {
		return [new q({ props: { handlePaste: (e, t) => {
			if ((t.clipboardData?.getData("text/html"))?.trim()) return !1;
			let n = t.clipboardData?.getData("text/plain");
			if (!n) return !1;
			let r = Hj(n);
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
		let e = (e, t) => (!t.attrs.type || t.attrs.type === "1") && t.childCount + t.attrs.start === +e[1], t = BA({
			find: Xj,
			type: this.type,
			getAttributes: (e) => ({ start: +e[1] }),
			joinPredicate: e
		});
		return (this.options.keepMarks || this.options.keepAttributes) && (t = BA({
			find: Xj,
			type: this.type,
			keepMarks: this.options.keepMarks,
			keepAttributes: this.options.keepAttributes,
			getAttributes: (e) => ({
				start: +e[1],
				...this.editor.getAttributes(Yj)
			}),
			joinPredicate: e,
			editor: this.editor
		})), [t];
	}
}), $j = /^\s*(\[([( |x])?\])\s$/, eM = "position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0", tM = (e, t, n) => {
	var r;
	return (n == null || (r = n.checkboxLabel) == null ? void 0 : r.call(n, e, t)) || `Task item checkbox for ${e.textContent || "empty task item"}`;
}, nM = VA.create({
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
			QD(this.options.HTMLAttributes, t, { "data-type": this.name }),
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
	renderMarkdown: (e, t) => tA(e, t, `- [${e.attrs?.checked ? "x" : " "}] `, void 0, { indentMainContent: !0 }),
	addExtensions() {
		return this.options.nested ? [$A(this.name, [this.options.taskListTypeName])] : [];
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
			o.style.cssText = eM;
			let l = (e) => {
				let t = tM(e, e.attrs.checked, this.options.a11y);
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
					let t = r.extensionManager.attributes, n = $D(e, t), a = new Set(Object.keys(n)), o = this.options.HTMLAttributes;
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
		return [BA({
			find: $j,
			type: this.type,
			getAttributes: (e) => ({ checked: e[e.length - 1] === "x" })
		})];
	}
}), rM = VA.create({
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
			QD(this.options.HTMLAttributes, e, { "data-type": this.name }),
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
				let t = Qk(e, {
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
			}, i = Qk(e, {
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
Z.create({
	name: "listKit",
	addExtensions() {
		let e = [];
		return this.options.bulletList !== !1 && e.push(YA.configure(this.options.bulletList)), this.options.listItem !== !1 && e.push(Cj.configure(this.options.listItem)), this.options.listKeymap !== !1 && e.push(Mj.configure(this.options.listKeymap)), this.options.orderedList !== !1 && e.push(Qj.configure(this.options.orderedList)), this.options.taskItem !== !1 && e.push(nM.configure(this.options.taskItem)), this.options.taskList !== !1 && e.push(rM.configure(this.options.taskList)), e;
	}
});
// node_modules/prosemirror-tables/dist/index.js
var iM, aM;
if (typeof WeakMap < "u") {
	let e = /* @__PURE__ */ new WeakMap();
	iM = (t) => e.get(t), aM = (t, n) => (e.set(t, n), n);
} else {
	let e = [], t = 0;
	iM = (t) => {
		for (let n = 0; n < e.length; n += 2) if (e[n] == t) return e[n + 1];
	}, aM = (n, r) => (t == 10 && (t = 0), e[t++] = n, e[t++] = r);
}
var oM = class {
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
		return iM(e) || aM(e, sM(e));
	}
};
function sM(e) {
	if (e.type.spec.tableRole != "table") throw RangeError("Not a table node: " + e.type.name);
	let t = cM(e), n = e.childCount, r = [], i = 0, a = null, o = [];
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
	let s = new oM(t, n, r, a), c = !1;
	for (let e = 0; !c && e < o.length; e += 2) o[e] != null && o[e + 1] < n && (c = !0);
	return c && lM(s, o, e), s;
}
function cM(e) {
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
function lM(e, t, n) {
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
			r == null || c.colwidth && c.colwidth[n] == r || ((s ||= uM(c))[n] = r);
		}
		s && e.problems.unshift({
			type: "colwidth mismatch",
			pos: a,
			colwidth: s
		});
	}
}
function uM(e) {
	if (e.colwidth) return e.colwidth.slice();
	let t = [];
	for (let n = 0; n < e.colspan; n++) t.push(0);
	return t;
}
function dM(e) {
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
var fM = new sb("selectingCells");
function pM(e) {
	for (let t = e.depth - 1; t > 0; t--) if (e.node(t).type.spec.tableRole == "row") return e.node(0).resolve(e.before(t + 1));
	return null;
}
function mM(e) {
	for (let t = e.depth; t > 0; t--) {
		let n = e.node(t).type.spec.tableRole;
		if (n === "cell" || n === "header_cell") return e.node(t);
	}
	return null;
}
function hM(e) {
	let t = e.selection.$head;
	for (let e = t.depth; e > 0; e--) if (t.node(e).type.spec.tableRole == "row") return !0;
	return !1;
}
function gM(e) {
	let t = e.selection;
	if ("$anchorCell" in t && t.$anchorCell) return t.$anchorCell.pos > t.$headCell.pos ? t.$anchorCell : t.$headCell;
	if ("node" in t && t.node && t.node.type.spec.tableRole == "cell") return t.$anchor;
	let n = pM(t.$head) || _M(t.$head);
	if (n) return n;
	throw RangeError(`No cell found around position ${t.head}`);
}
function _M(e) {
	for (let t = e.nodeAfter, n = e.pos; t; t = t.firstChild, n++) {
		let r = t.type.spec.tableRole;
		if (r == "cell" || r == "header_cell") return e.doc.resolve(n);
	}
	for (let t = e.nodeBefore, n = e.pos; t; t = t.lastChild, n--) {
		let r = t.type.spec.tableRole;
		if (r == "cell" || r == "header_cell") return e.doc.resolve(n - t.nodeSize);
	}
}
function vM(e) {
	return e.parent.type.spec.tableRole == "row" && !!e.nodeAfter;
}
function yM(e) {
	return e.node(0).resolve(e.pos + e.nodeAfter.nodeSize);
}
function bM(e, t) {
	return e.depth == t.depth && e.pos >= t.start(-1) && e.pos <= t.end(-1);
}
function xM(e, t, n) {
	let r = e.node(-1), i = oM.get(r), a = e.start(-1), o = i.nextCell(e.pos - a, t, n);
	return o == null ? null : e.node(0).resolve(a + o);
}
function SM(e, t, n = 1) {
	let r = {
		...e,
		colspan: e.colspan - n
	};
	return r.colwidth && (r.colwidth = r.colwidth.slice(), r.colwidth.splice(t, n), r.colwidth.some((e) => e > 0) || (r.colwidth = null)), r;
}
function CM(e, t, n = 1) {
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
function wM(e, t, n) {
	let r = dM(t.type.schema).header_cell;
	for (let i = 0; i < e.height; i++) if (t.nodeAt(e.map[n + i * e.width]).type != r) return !1;
	return !0;
}
var TM = class e extends W {
	constructor(e, t = e) {
		let n = e.node(-1), r = oM.get(n), i = e.start(-1), a = r.rectBetween(e.pos - i, t.pos - i), o = e.node(0), s = r.cellsInRect(a).filter((e) => e != t.pos - i);
		s.unshift(t.pos - i);
		let c = s.map((e) => {
			let t = n.nodeAt(e);
			if (!t) throw RangeError(`No cell with offset ${e} found`);
			let r = i + e + 1;
			return new By(o.resolve(r), o.resolve(r + t.content.size));
		});
		super(c[0].$from, c[0].$to, c), this.$anchorCell = e, this.$headCell = t;
	}
	map(t, n) {
		let r = t.resolve(n.map(this.$anchorCell.pos)), i = t.resolve(n.map(this.$headCell.pos));
		if (vM(r) && vM(i) && bM(r, i)) {
			let t = this.$anchorCell.node(-1) != r.node(-1);
			return t && this.isRowSelection() ? e.rowSelection(r, i) : t && this.isColSelection() ? e.colSelection(r, i) : new e(r, i);
		}
		return G.between(r, i);
	}
	content() {
		let e = this.$anchorCell.node(-1), t = oM.get(e), n = this.$anchorCell.start(-1), r = t.rectBetween(this.$anchorCell.pos - n, this.$headCell.pos - n), i = {}, a = [];
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
					if (l > 0 && (e = SM(e, 0, l)), u > 0 && (e = SM(e, e.colspan - u, u)), s.left < r.left) {
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
			a.push(e.child(n).copy(V.from(o)));
		}
		let o = this.isColSelection() && this.isRowSelection() ? e : a;
		return new U(V.from(o), 1, 1);
	}
	replace(e, t = U.empty) {
		let n = e.steps.length, r = this.ranges;
		for (let i = 0; i < r.length; i++) {
			let { $from: a, $to: o } = r[i], s = e.mapping.slice(n);
			e.replace(s.map(a.pos), s.map(o.pos), i ? U.empty : t);
		}
		let i = W.findFrom(e.doc.resolve(e.mapping.slice(n).map(this.to)), -1);
		i && e.setSelection(i);
	}
	replaceWith(e, t) {
		this.replace(e, new U(V.from(t), 0, 0));
	}
	forEachCell(e) {
		let t = this.$anchorCell.node(-1), n = oM.get(t), r = this.$anchorCell.start(-1), i = n.cellsInRect(n.rectBetween(this.$anchorCell.pos - r, this.$headCell.pos - r));
		for (let n = 0; n < i.length; n++) e(t.nodeAt(i[n]), r + i[n]);
	}
	isColSelection() {
		let e = this.$anchorCell.index(-1), t = this.$headCell.index(-1);
		if (Math.min(e, t) > 0) return !1;
		let n = e + this.$anchorCell.nodeAfter.attrs.rowspan, r = t + this.$headCell.nodeAfter.attrs.rowspan;
		return Math.max(n, r) == this.$headCell.node(-1).childCount;
	}
	static colSelection(t, n = t) {
		let r = t.node(-1), i = oM.get(r), a = t.start(-1), o = i.findCell(t.pos - a), s = i.findCell(n.pos - a), c = t.node(0);
		return o.top <= s.top ? (o.top > 0 && (t = c.resolve(a + i.map[o.left])), s.bottom < i.height && (n = c.resolve(a + i.map[i.width * (i.height - 1) + s.right - 1]))) : (s.top > 0 && (n = c.resolve(a + i.map[s.left])), o.bottom < i.height && (t = c.resolve(a + i.map[i.width * (i.height - 1) + o.right - 1]))), new e(t, n);
	}
	isRowSelection() {
		let e = this.$anchorCell.node(-1), t = oM.get(e), n = this.$anchorCell.start(-1), r = t.colCount(this.$anchorCell.pos - n), i = t.colCount(this.$headCell.pos - n);
		if (Math.min(r, i) > 0) return !1;
		let a = r + this.$anchorCell.nodeAfter.attrs.colspan, o = i + this.$headCell.nodeAfter.attrs.colspan;
		return Math.max(a, o) == t.width;
	}
	eq(t) {
		return t instanceof e && t.$anchorCell.pos == this.$anchorCell.pos && t.$headCell.pos == this.$headCell.pos;
	}
	static rowSelection(t, n = t) {
		let r = t.node(-1), i = oM.get(r), a = t.start(-1), o = i.findCell(t.pos - a), s = i.findCell(n.pos - a), c = t.node(0);
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
		return new EM(this.$anchorCell.pos, this.$headCell.pos);
	}
};
TM.prototype.visible = !1, W.jsonID("cell", TM);
var EM = class e {
	constructor(e, t) {
		this.anchor = e, this.head = t;
	}
	map(t) {
		return new e(t.map(this.anchor), t.map(this.head));
	}
	resolve(e) {
		let t = e.resolve(this.anchor), n = e.resolve(this.head);
		return t.parent.type.spec.tableRole == "row" && n.parent.type.spec.tableRole == "row" && t.index() < t.parent.childCount && n.index() < n.parent.childCount && bM(t, n) ? new TM(t, n) : W.near(n, 1);
	}
};
function DM(e) {
	if (!(e.selection instanceof TM)) return null;
	let t = [];
	return e.selection.forEachCell((e, n) => {
		t.push(Fw.node(n, n + e.nodeSize, { class: "selectedCell" }));
	}), Rw.create(e.doc, t);
}
function OM({ $from: e, $to: t }) {
	if (e.pos == t.pos || e.pos < t.pos - 6) return !1;
	let n = e.pos, r = t.pos, i = e.depth;
	for (; i >= 0 && !(e.after(i + 1) < e.end(i)); i--, n++);
	for (let e = t.depth; e >= 0 && !(t.before(e + 1) > t.start(e)); e--, r--);
	return n == r && /row|table/.test(e.node(i).type.spec.tableRole);
}
function kM({ $from: e, $to: t }) {
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
function AM(e, t, n) {
	let r = (t || e).selection, i = (t || e).doc, a, o;
	if (r instanceof K && (o = r.node.type.spec.tableRole)) {
		if (o == "cell" || o == "header_cell") a = TM.create(i, r.from);
		else if (o == "row") {
			let e = i.resolve(r.from + 1);
			a = TM.rowSelection(e, e);
		} else if (!n) {
			let e = oM.get(r.node), t = r.from + 1, n = t + e.map[e.width * e.height - 1];
			a = TM.create(i, t + 1, n);
		}
	} else r instanceof G && OM(r) ? a = G.create(i, r.from) : r instanceof G && kM(r) && (a = G.create(i, r.$from.start(), r.$from.end()));
	return a && (t ||= e.tr).setSelection(a), t;
}
var jM = new sb("fix-tables");
function MM(e, t, n, r) {
	let i = e.childCount, a = t.childCount;
	outer: for (let o = 0, s = 0; o < a; o++) {
		let a = t.child(o);
		for (let t = s, r = Math.min(i, o + 3); t < r; t++) if (e.child(t) == a) {
			s = t + 1, n += a.nodeSize;
			continue outer;
		}
		r(a, n), s < i && e.child(s).sameMarkup(a) ? MM(e.child(s), a, n + 1, r) : a.nodesBetween(0, a.content.size, r, n + 1), n += a.nodeSize;
	}
}
function NM(e, t) {
	let n, r = (t, r) => {
		t.type.spec.tableRole == "table" && (n = PM(e, t, r, n));
	};
	return t ? t.doc != e.doc && MM(t.doc, e.doc, 0, r) : e.doc.descendants(r), n;
}
function PM(e, t, n, r) {
	let i = oM.get(t);
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
			r.setNodeMarkup(r.mapping.map(n + 1 + o.pos), null, SM(i, i.colspan - o.n, o.n));
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
				let n = dM(e.schema)[t].createAndFill();
				n && a.push(n);
			}
			let d = (c == 0 || o == c - 1) && s == c ? l + 1 : i - 1;
			r.insert(r.mapping.map(d), a);
		}
		l = i;
	}
	return r.setMeta(jM, { fixTables: !0 });
}
function FM(e) {
	let t = e.selection, n = gM(e), r = n.node(-1), i = n.start(-1), a = oM.get(r);
	return {
		...t instanceof TM ? a.rectBetween(t.$anchorCell.pos - i, t.$headCell.pos - i) : a.findCell(n.pos - i),
		tableStart: i,
		map: a,
		table: r
	};
}
function IM(e, { map: t, tableStart: n, table: r }, i) {
	let a = i > 0 ? -1 : 0;
	wM(t, r, i + a) && (a = i == 0 || i == t.width ? null : 0);
	for (let o = 0; o < t.height; o++) {
		let s = o * t.width + i;
		if (i > 0 && i < t.width && t.map[s - 1] == t.map[s]) {
			let a = t.map[s], c = r.nodeAt(a);
			e.setNodeMarkup(e.mapping.map(n + a), null, CM(c.attrs, i - t.colCount(a))), o += c.attrs.rowspan - 1;
		} else {
			let c = a == null ? dM(r.type.schema).cell : r.nodeAt(t.map[s + a]).type, l = t.positionAt(o, i, r);
			e.insert(e.mapping.map(n + l), c.createAndFill());
		}
	}
	return e;
}
function LM(e, t) {
	if (!hM(e)) return !1;
	if (t) {
		let n = FM(e);
		t(IM(e.tr, n, n.left));
	}
	return !0;
}
function RM(e, t) {
	if (!hM(e)) return !1;
	if (t) {
		let n = FM(e);
		t(IM(e.tr, n, n.right));
	}
	return !0;
}
function zM(e, { map: t, table: n, tableStart: r }, i) {
	let a = e.mapping.maps.length;
	for (let o = 0; o < t.height;) {
		let s = o * t.width + i, c = t.map[s], l = n.nodeAt(c), u = l.attrs;
		if (i > 0 && t.map[s - 1] == c || i < t.width - 1 && t.map[s + 1] == c) e.setNodeMarkup(e.mapping.slice(a).map(r + c), null, SM(u, i - t.colCount(c)));
		else {
			let t = e.mapping.slice(a).map(r + c);
			e.delete(t, t + l.nodeSize);
		}
		o += u.rowspan;
	}
}
function BM(e, t) {
	if (!hM(e)) return !1;
	if (t) {
		let n = FM(e), r = e.tr;
		if (n.left == 0 && n.right == n.map.width) return !1;
		for (let e = n.right - 1; zM(r, n, e), e != n.left; e--) {
			let e = n.tableStart ? r.doc.nodeAt(n.tableStart - 1) : r.doc;
			if (!e) throw RangeError("No table found");
			n.table = e, n.map = oM.get(e);
		}
		t(r);
	}
	return !0;
}
function VM(e, t, n) {
	let r = dM(t.type.schema).header_cell;
	for (let i = 0; i < e.width; i++) if (t.nodeAt(e.map[i + n * e.width])?.type != r) return !1;
	return !0;
}
function HM(e, { map: t, tableStart: n, table: r }, i) {
	let a = n;
	for (let e = 0; e < i; e++) a += r.child(e).nodeSize;
	let o = [], s = i > 0 ? -1 : 0;
	VM(t, r, i + s) && (s = i == 0 || i == t.height ? null : 0);
	for (let a = 0, c = t.width * i; a < t.width; a++, c++) if (i > 0 && i < t.height && t.map[c] == t.map[c - t.width]) {
		let i = t.map[c], o = r.nodeAt(i).attrs;
		e.setNodeMarkup(n + i, null, {
			...o,
			rowspan: o.rowspan + 1
		}), a += o.colspan - 1;
	} else {
		let e = (s == null ? dM(r.type.schema).cell : r.nodeAt(t.map[c + s * t.width])?.type)?.createAndFill();
		e && o.push(e);
	}
	return e.insert(a, dM(r.type.schema).row.create(null, o)), e;
}
function UM(e, t) {
	if (!hM(e)) return !1;
	if (t) {
		let n = FM(e);
		t(HM(e.tr, n, n.top));
	}
	return !0;
}
function WM(e, t) {
	if (!hM(e)) return !1;
	if (t) {
		let n = FM(e);
		t(HM(e.tr, n, n.bottom));
	}
	return !0;
}
function GM(e, { map: t, table: n, tableStart: r }, i) {
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
function KM(e, t) {
	if (!hM(e)) return !1;
	if (t) {
		let n = FM(e), r = e.tr;
		if (n.top == 0 && n.bottom == n.map.height) return !1;
		for (let e = n.bottom - 1; GM(r, n, e), e != n.top; e--) {
			let e = n.tableStart ? r.doc.nodeAt(n.tableStart - 1) : r.doc;
			if (!e) throw RangeError("No table found");
			n.table = e, n.map = oM.get(n.table);
		}
		t(r);
	}
	return !0;
}
function qM(e) {
	let t = e.content;
	return t.childCount == 1 && t.child(0).isTextblock && t.child(0).childCount == 0;
}
function JM({ width: e, height: t, map: n }, r) {
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
function YM(e, t) {
	let n = e.selection;
	if (!(n instanceof TM) || n.$anchorCell.pos == n.$headCell.pos) return !1;
	let r = FM(e), { map: i } = r;
	if (JM(i, r)) return !1;
	if (t) {
		let n = e.tr, a = {}, o = V.empty, s, c;
		for (let e = r.top; e < r.bottom; e++) for (let t = r.left; t < r.right; t++) {
			let l = i.map[e * i.width + t], u = r.table.nodeAt(l);
			if (!a[l] && u) {
				if (a[l] = !0, s == null) s = l, c = u;
				else {
					qM(u) || (o = o.append(u.content));
					let e = n.mapping.map(l + r.tableStart);
					n.delete(e, e + u.nodeSize);
				}
			}
		}
		if (s == null || c == null) return !0;
		if (n.setNodeMarkup(s + r.tableStart, null, {
			...CM(c.attrs, c.attrs.colspan, r.right - r.left - c.attrs.colspan),
			rowspan: r.bottom - r.top
		}), o.size > 0) {
			let e = s + 1 + c.content.size, t = qM(c) ? s + 1 : e;
			n.replaceWith(t + r.tableStart, e + r.tableStart, o);
		}
		n.setSelection(new TM(n.doc.resolve(s + r.tableStart))), t(n);
	}
	return !0;
}
function XM(e, t) {
	let n = dM(e.schema);
	return ZM(({ node: e }) => n[e.type.spec.tableRole])(e, t);
}
function ZM(e) {
	return (t, n) => {
		let r = t.selection, i, a;
		if (r instanceof TM) {
			if (r.$anchorCell.pos != r.$headCell.pos) return !1;
			i = r.$anchorCell.nodeAfter, a = r.$anchorCell.pos;
		} else {
			if (i = mM(r.$from), !i) return !1;
			a = pM(r.$from)?.pos;
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
			let l = FM(t), u = t.tr;
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
			}), s[0]), r instanceof TM && u.setSelection(new TM(u.doc.resolve(r.$anchorCell.pos), d ? u.doc.resolve(d) : void 0)), n(u);
		}
		return !0;
	};
}
function QM(e, t) {
	return function(n, r) {
		if (!hM(n)) return !1;
		let i = gM(n);
		if (i.nodeAfter.attrs[e] === t) return !1;
		if (r) {
			let a = n.tr;
			n.selection instanceof TM ? n.selection.forEachCell((n, r) => {
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
function $M(e) {
	return function(t, n) {
		if (!hM(t)) return !1;
		if (n) {
			let r = dM(t.schema), i = FM(t), a = t.tr, o = i.map.cellsInRect(e == "column" ? {
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
function eN(e, t, n) {
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
function tN(e, t) {
	return t ||= { useDeprecatedLogic: !1 }, t.useDeprecatedLogic ? $M(e) : function(t, n) {
		if (!hM(t)) return !1;
		if (n) {
			let r = dM(t.schema), i = FM(t), a = t.tr, o = eN("row", i, r), s = eN("column", i, r), c = (e === "column" ? o : e === "row" && s) ? 1 : 0, l = e == "column" ? {
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
tN("row", { useDeprecatedLogic: !0 }), tN("column", { useDeprecatedLogic: !0 });
var nN = tN("cell", { useDeprecatedLogic: !0 });
function rN(e, t) {
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
function iN(e) {
	return function(t, n) {
		if (!hM(t)) return !1;
		let r = rN(gM(t), e);
		if (r == null) return !1;
		if (n) {
			let e = t.doc.resolve(r);
			n(t.tr.setSelection(G.between(e, yM(e))).scrollIntoView());
		}
		return !0;
	};
}
function aN(e, t) {
	let n = e.selection.$anchor;
	for (let r = n.depth; r > 0; r--) if (n.node(r).type.spec.tableRole == "table") return t && t(e.tr.delete(n.before(r), n.after(r)).scrollIntoView()), !0;
	return !1;
}
function oN(e, t) {
	let n = e.selection;
	if (!(n instanceof TM)) return !1;
	if (t) {
		let r = e.tr, i = dM(e.schema).cell.createAndFill().content;
		n.forEachCell((e, t) => {
			e.content.eq(i) || r.replace(r.mapping.map(t + 1), r.mapping.map(t + e.nodeSize - 1), new U(i, 0, 0));
		}), r.docChanged && t(r);
	}
	return !0;
}
function sN(e) {
	if (e.size === 0) return null;
	let { content: t, openStart: n, openEnd: r } = e;
	for (; t.childCount == 1 && (n > 0 && r > 0 || t.child(0).type.spec.tableRole == "table");) n--, r--, t = t.child(0).content;
	let i = t.child(0), a = i.type.spec.tableRole, o = i.type.schema, s = [];
	if (a == "row") for (let e = 0; e < t.childCount; e++) {
		let i = t.child(e).content, a = e ? 0 : Math.max(0, n - 1), c = e < t.childCount - 1 ? 0 : Math.max(0, r - 1);
		(a || c) && (i = lN(dM(o).row, new U(i, a, c)).content), s.push(i);
	}
	else if (a == "cell" || a == "header_cell") s.push(n || r ? lN(dM(o).row, new U(t, n, r)).content : t);
	else return null;
	return cN(o, s);
}
function cN(e, t) {
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
	for (let i = 0; i < n.length; i++) if (i >= t.length && t.push(V.empty), n[i] < r) {
		let a = dM(e).cell.createAndFill(), o = [];
		for (let e = n[i]; e < r; e++) o.push(a);
		t[i] = t[i].append(V.from(o));
	}
	return {
		height: t.length,
		width: r,
		rows: t
	};
}
function lN(e, t) {
	let n = e.createAndFill();
	return new Ry(n).replace(0, n.content.size, t).doc;
}
function uN({ width: e, height: t, rows: n }, r, i) {
	if (e != r) {
		let t = [], i = [];
		for (let e = 0; e < n.length; e++) {
			let a = n[e], o = [];
			for (let n = t[e] || 0, i = 0; n < r; i++) {
				let s = a.child(i % a.childCount);
				n + s.attrs.colspan > r && (s = s.type.createChecked(SM(s.attrs, s.attrs.colspan, n + s.attrs.colspan - r), s.content)), o.push(s), n += s.attrs.colspan;
				for (let n = 1; n < s.attrs.rowspan; n++) t[e + n] = (t[e + n] || 0) + s.attrs.colspan;
			}
			i.push(V.from(o));
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
			e.push(V.from(o));
		}
		n = e, t = i;
	}
	return {
		width: e,
		height: t,
		rows: n
	};
}
function dN(e, t, n, r, i, a, o) {
	let s = e.doc.type.schema, c = dM(s), l, u;
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
		let d = c.row.create(null, V.from(s)), f = [];
		for (let e = t.height; e < a; e++) f.push(d);
		e.insert(e.mapping.slice(o).map(r + n.nodeSize - 2), f);
	}
	return !!(l || u);
}
function fN(e, t, n, r, i, a, o, s) {
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
function pN(e, t, n, r, i, a, o, s) {
	if (o == 0 || o == t.width) return !1;
	let c = !1;
	for (let l = i; l < a; l++) {
		let i = l * t.width + o, a = t.map[i];
		if (t.map[i - 1] == a) {
			c = !0;
			let i = n.nodeAt(a), u = t.colCount(a), d = e.mapping.slice(s).map(a + r);
			e.setNodeMarkup(d, null, SM(i.attrs, o - u, i.attrs.colspan - (o - u))), e.insert(d + i.nodeSize, i.type.createAndFill(SM(i.attrs, 0, o - u))), l += i.attrs.rowspan - 1;
		}
	}
	return c;
}
function mN(e, t, n, r, i) {
	let a = n ? e.doc.nodeAt(n - 1) : e.doc;
	if (!a) throw Error("No table found");
	let o = oM.get(a), { top: s, left: c } = r, l = c + i.width, u = s + i.height, d = e.tr, f = 0;
	function p() {
		if (a = n ? d.doc.nodeAt(n - 1) : d.doc, !a) throw Error("No table found");
		o = oM.get(a), f = d.mapping.maps.length;
	}
	dN(d, o, a, n, l, u, f) && p(), fN(d, o, a, n, c, l, s, f) && p(), fN(d, o, a, n, c, l, u, f) && p(), pN(d, o, a, n, s, u, c, f) && p(), pN(d, o, a, n, s, u, l, f) && p();
	for (let e = s; e < u; e++) {
		let t = o.positionAt(e, c, a), r = o.positionAt(e, l, a);
		d.replace(d.mapping.slice(f).map(t + n), d.mapping.slice(f).map(r + n), new U(i.rows[e - s], 0, 0));
	}
	p(), d.setSelection(new TM(d.doc.resolve(n + o.positionAt(s, c, a)), d.doc.resolve(n + o.positionAt(u - 1, l - 1, a)))), t(d);
}
var hN = zT({
	ArrowLeft: _N("horiz", -1),
	ArrowRight: _N("horiz", 1),
	ArrowUp: _N("vert", -1),
	ArrowDown: _N("vert", 1),
	"Shift-ArrowLeft": vN("horiz", -1),
	"Shift-ArrowRight": vN("horiz", 1),
	"Shift-ArrowUp": vN("vert", -1),
	"Shift-ArrowDown": vN("vert", 1),
	Backspace: oN,
	"Mod-Backspace": oN,
	Delete: oN,
	"Mod-Delete": oN
});
function gN(e, t, n) {
	return !n.eq(e.selection) && (t && t(e.tr.setSelection(n).scrollIntoView()), !0);
}
function _N(e, t) {
	return (n, r, i) => {
		if (!i) return !1;
		let a = n.selection;
		if (a instanceof TM) return gN(n, r, W.near(a.$headCell, t));
		if (e != "horiz" && !a.empty) return !1;
		let o = SN(i, e, t);
		if (o == null) return !1;
		if (e == "horiz") return gN(n, r, W.near(n.doc.resolve(a.head + t), t));
		{
			let i = n.doc.resolve(o), a = xM(i, e, t), s;
			return s = a ? W.near(a, 1) : t < 0 ? W.near(n.doc.resolve(i.before(-1)), -1) : W.near(n.doc.resolve(i.after(-1)), 1), gN(n, r, s);
		}
	};
}
function vN(e, t) {
	return (n, r, i) => {
		if (!i) return !1;
		let a = n.selection, o;
		if (a instanceof TM) o = a;
		else {
			let r = SN(i, e, t);
			if (r == null) return !1;
			o = new TM(n.doc.resolve(r));
		}
		let s = xM(o.$headCell, e, t);
		return s ? gN(n, r, new TM(o.$anchorCell, s)) : !1;
	};
}
function yN(e, t) {
	let n = e.state.doc, r = pM(n.resolve(t));
	return r ? (e.dispatch(e.state.tr.setSelection(new TM(r))), !0) : !1;
}
function bN(e, t, n) {
	if (!hM(e.state)) return !1;
	let r = sN(n), i = e.state.selection;
	if (i instanceof TM) {
		r ||= {
			width: 1,
			height: 1,
			rows: [V.from(lN(dM(e.state.schema).cell, n))]
		};
		let t = i.$anchorCell.node(-1), a = i.$anchorCell.start(-1), o = oM.get(t).rectBetween(i.$anchorCell.pos - a, i.$headCell.pos - a);
		return r = uN(r, o.right - o.left, o.bottom - o.top), mN(e.state, e.dispatch, a, o, r), !0;
	}
	if (r) {
		let t = gM(e.state), n = t.start(-1);
		return mN(e.state, e.dispatch, n, oM.get(t.node(-1)).findCell(t.pos - n), r), !0;
	}
	return !1;
}
function xN(e, t) {
	if (t.button != 0 || t.ctrlKey || t.metaKey) return;
	let n = CN(e, t.target), r;
	if (t.shiftKey && e.state.selection instanceof TM) i(e.state.selection.$anchorCell, t), t.preventDefault();
	else if (t.shiftKey && n && (r = pM(e.state.selection.$anchor)) != null && wN(e, t)?.pos != r.pos) i(r, t), t.preventDefault();
	else if (!n) return;
	function i(t, n) {
		let r = wN(e, n), i = fM.getState(e.state) == null;
		if (!r || !bM(t, r)) {
			if (i) r = t;
			else return;
		}
		let a = new TM(t, r);
		if (i || !e.state.selection.eq(a)) {
			let n = e.state.tr.setSelection(a);
			i && n.setMeta(fM, t.pos), e.dispatch(n);
		}
	}
	function a() {
		e.root.removeEventListener("mouseup", a), e.root.removeEventListener("dragstart", a), e.root.removeEventListener("mousemove", o), fM.getState(e.state) != null && e.dispatch(e.state.tr.setMeta(fM, -1));
	}
	function o(r) {
		let o = r, s = fM.getState(e.state), c;
		if (s != null) c = e.state.doc.resolve(s);
		else if (CN(e, o.target) != n && (c = wN(e, t), !c)) return a();
		c && i(c, o);
	}
	e.root.addEventListener("mouseup", a), e.root.addEventListener("dragstart", a), e.root.addEventListener("mousemove", o);
}
function SN(e, t, n) {
	if (!(e.state.selection instanceof G)) return null;
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
function CN(e, t) {
	for (; t && t != e.dom; t = t.parentNode) if (t.nodeName == "TD" || t.nodeName == "TH") return t;
	return null;
}
function wN(e, t) {
	let n = e.posAtCoords({
		left: t.clientX,
		top: t.clientY
	});
	if (!n) return null;
	let { inside: r, pos: i } = n;
	return r >= 0 && pM(e.state.doc.resolve(r)) || pM(e.state.doc.resolve(i));
}
var TN = class {
	constructor(e, t) {
		this.node = e, this.defaultCellMinWidth = t, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), this.table.style.setProperty("--default-cell-min-width", `${t}px`), this.colgroup = this.table.appendChild(document.createElement("colgroup")), EN(e, this.colgroup, this.table, t), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
	}
	update(e) {
		return e.type == this.node.type && (this.node = e, EN(e, this.colgroup, this.table, this.defaultCellMinWidth), !0);
	}
	ignoreMutation(e) {
		return e.type == "attributes" && (e.target == this.table || this.colgroup.contains(e.target));
	}
};
function EN(e, t, n, r, i, a) {
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
var DN = new sb("tableColumnResizing");
function ON({ handleWidth: e = 5, cellMinWidth: t = 25, defaultCellMinWidth: n = 100, View: r = TN, lastColumnResizable: i = !0 } = {}) {
	let a = new q({
		key: DN,
		state: {
			init(e, t) {
				var i;
				let o = (i = a.spec) == null || (i = i.props) == null ? void 0 : i.nodeViews, s = dM(t.schema).table.name;
				return r && o && (o[s] = (e, t) => new r(e, n, t)), new kN(-1, !1);
			},
			apply(e, t) {
				return t.apply(e);
			}
		},
		props: {
			attributes: (e) => {
				let t = DN.getState(e);
				return t && t.activeHandle > -1 ? { class: "resize-cursor" } : {};
			},
			handleDOMEvents: {
				mousemove: (t, n) => {
					AN(t, n, e, i);
				},
				mouseleave: (e) => {
					jN(e);
				},
				mousedown: (e, r) => {
					MN(e, r, t, n);
				}
			},
			decorations: (e) => {
				let t = DN.getState(e);
				if (t && t.activeHandle > -1) return VN(e, t.activeHandle);
			},
			nodeViews: {}
		}
	});
	return a;
}
var kN = class e {
	constructor(e, t) {
		this.activeHandle = e, this.dragging = t;
	}
	apply(t) {
		let n = this, r = t.getMeta(DN);
		if (r && r.setHandle != null) return new e(r.setHandle, !1);
		if (r && r.setDragging !== void 0) return new e(n.activeHandle, r.setDragging);
		if (n.activeHandle > -1 && t.docChanged) {
			let r = t.mapping.map(n.activeHandle, -1);
			return vM(t.doc.resolve(r)) || (r = -1), new e(r, n.dragging);
		}
		return n;
	}
};
function AN(e, t, n, r) {
	if (!e.editable) return;
	let i = DN.getState(e.state);
	if (i && !i.dragging) {
		let a = PN(t.target), o = -1;
		if (a) {
			let { left: r, right: i } = a.getBoundingClientRect();
			t.clientX - r <= n ? o = FN(e, t, "left", n) : i - t.clientX <= n && (o = FN(e, t, "right", n));
		}
		if (o != i.activeHandle) {
			if (!r && o !== -1) {
				let t = e.state.doc.resolve(o), n = t.node(-1), r = oM.get(n), i = t.start(-1);
				if (r.colCount(t.pos - i) + t.nodeAfter.attrs.colspan - 1 == r.width - 1) return;
			}
			LN(e, o);
		}
	}
}
function jN(e) {
	if (!e.editable) return;
	let t = DN.getState(e.state);
	t && t.activeHandle > -1 && !t.dragging && LN(e, -1);
}
function MN(e, t, n, r) {
	if (!e.editable) return !1;
	let i = e.dom.ownerDocument.defaultView ?? window, a = DN.getState(e.state);
	if (!a || a.activeHandle == -1 || a.dragging) return !1;
	let o = e.state.doc.nodeAt(a.activeHandle), s = NN(e, a.activeHandle, o.attrs);
	e.dispatch(e.state.tr.setMeta(DN, { setDragging: {
		startX: t.clientX,
		startWidth: s
	} }));
	function c(t) {
		i.removeEventListener("mouseup", c), i.removeEventListener("mousemove", l);
		let r = DN.getState(e.state);
		r?.dragging && (RN(e, r.activeHandle, IN(r.dragging, t, n)), e.dispatch(e.state.tr.setMeta(DN, { setDragging: null })));
	}
	function l(t) {
		if (!t.which) return c(t);
		let i = DN.getState(e.state);
		if (i && i.dragging) {
			let a = IN(i.dragging, t, n);
			zN(e, i.activeHandle, a, r);
		}
	}
	return zN(e, a.activeHandle, s, r), i.addEventListener("mouseup", c), i.addEventListener("mousemove", l), t.preventDefault(), !0;
}
function NN(e, t, { colspan: n, colwidth: r }) {
	let i = r && r[r.length - 1];
	if (i) return i;
	let a = e.domAtPos(t), o = a.node.childNodes[a.offset].offsetWidth, s = n;
	if (r) for (let e = 0; e < n; e++) r[e] && (o -= r[e], s--);
	return o / s;
}
function PN(e) {
	for (; e && e.nodeName != "TD" && e.nodeName != "TH";) e = e.classList && e.classList.contains("ProseMirror") ? null : e.parentNode;
	return e;
}
function FN(e, t, n, r) {
	let i = n == "right" ? -r : r, a = e.posAtCoords({
		left: t.clientX + i,
		top: t.clientY
	});
	if (!a) return -1;
	let { pos: o } = a, s = pM(e.state.doc.resolve(o));
	if (!s) return -1;
	if (n == "right") return s.pos;
	let c = oM.get(s.node(-1)), l = s.start(-1), u = c.map.indexOf(s.pos - l);
	return u % c.width == 0 ? -1 : l + c.map[u - 1];
}
function IN(e, t, n) {
	let r = t.clientX - e.startX;
	return Math.max(n, e.startWidth + r);
}
function LN(e, t) {
	e.dispatch(e.state.tr.setMeta(DN, { setHandle: t }));
}
function RN(e, t, n) {
	let r = e.state.doc.resolve(t), i = r.node(-1), a = oM.get(i), o = r.start(-1), s = a.colCount(r.pos - o) + r.nodeAfter.attrs.colspan - 1, c = e.state.tr;
	for (let e = 0; e < a.height; e++) {
		let t = e * a.width + s;
		if (e && a.map[t] == a.map[t - a.width]) continue;
		let r = a.map[t], l = i.nodeAt(r).attrs, u = l.colspan == 1 ? 0 : s - a.colCount(r);
		if (l.colwidth && l.colwidth[u] == n) continue;
		let d = l.colwidth ? l.colwidth.slice() : BN(l.colspan);
		d[u] = n, c.setNodeMarkup(o + r, null, {
			...l,
			colwidth: d
		});
	}
	c.docChanged && e.dispatch(c);
}
function zN(e, t, n, r) {
	let i = e.state.doc.resolve(t), a = i.node(-1), o = i.start(-1), s = oM.get(a).colCount(i.pos - o) + i.nodeAfter.attrs.colspan - 1, c = e.domAtPos(i.start(-1)).node;
	for (; c && c.nodeName != "TABLE";) c = c.parentNode;
	c && EN(a, c.firstChild, c, r, s, n);
}
function BN(e) {
	return Array(e).fill(0);
}
function VN(e, t) {
	let n = [], r = e.doc.resolve(t), i = r.node(-1);
	if (!i) return Rw.empty;
	let a = oM.get(i), o = r.start(-1), s = a.colCount(r.pos - o) + r.nodeAfter.attrs.colspan - 1;
	for (let t = 0; t < a.height; t++) {
		let r = s + t * a.width;
		if ((s == a.width - 1 || a.map[r] != a.map[r + 1]) && (t == 0 || a.map[r] != a.map[r - a.width])) {
			let t = a.map[r], s = o + t + i.nodeAt(t).nodeSize - 1, c = document.createElement("div");
			c.className = "column-resize-handle", DN.getState(e)?.dragging && n.push(Fw.node(o + t, o + t + i.nodeAt(t).nodeSize, { class: "column-resize-dragging" })), n.push(Fw.widget(s, c));
		}
	}
	return Rw.create(e.doc, n);
}
function HN({ allowTableNodeSelection: e = !1 } = {}) {
	return new q({
		key: fM,
		state: {
			init() {
				return null;
			},
			apply(e, t) {
				let n = e.getMeta(fM);
				if (n != null) return n == -1 ? null : n;
				if (t == null || !e.docChanged) return t;
				let { deleted: r, pos: i } = e.mapping.mapResult(t);
				return r ? null : i;
			}
		},
		props: {
			decorations: DM,
			handleDOMEvents: { mousedown: xN },
			createSelectionBetween(e) {
				return fM.getState(e.state) == null ? null : e.state.selection;
			},
			handleTripleClick: yN,
			handleKeyDown: hN,
			handlePaste: bN
		},
		appendTransaction(t, n, r) {
			return AM(r, NM(r, n), e);
		}
	});
}
// node_modules/@tiptap/extension-table/dist/index.js
function UN(e) {
	return e === "left" || e === "right" || e === "center" ? e : null;
}
function WN(e) {
	let t = (e.style.textAlign || "").trim().toLowerCase(), n = (e.getAttribute("align") || "").trim().toLowerCase();
	return UN(t || n);
}
function GN(e) {
	return UN(e?.align);
}
function KN() {
	return {
		default: null,
		parseHTML: (e) => WN(e),
		renderHTML: (e) => {
			let t = UN(e.align);
			return Jk(t) ? { style: `text-align: ${t}` } : {};
		}
	};
}
function qN(e) {
	let t = e.parentElement, n = e.closest("table");
	if (!t || !n) return null;
	let r = Array.from(t.children).indexOf(e), i = n.querySelectorAll("colgroup > col")[r]?.getAttribute("width");
	return i ? [parseInt(i, 10)] : null;
}
function JN(e) {
	let t = e.getAttribute("colwidth");
	return t ? t.split(",").map((e) => parseInt(e, 10)) : qN(e);
}
var YN = /[ \t\r\n\f]+/g;
function XN(e) {
	return e.children.length > 0 ? !1 : (e.textContent ?? "").replace(YN, "") === "";
}
function ZN(e) {
	let t = e.createAndFill();
	if (!t) throw Error(`[tiptap error]: "${e.name}" has no default content to backfill.`);
	return t.content;
}
function QN(e, t, n) {
	if (!(n in t)) return;
	let r = t[n];
	(r === 1 || r === "1" || r == null) && delete e[n];
}
var $N = VA.create({
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
				parseHTML: JN
			},
			align: KN()
		};
	},
	tableRole: "cell",
	isolating: !0,
	parseHTML() {
		return [{
			tag: "td",
			getAttrs: (e) => XN(e) ? {} : !1,
			getContent: (e, t) => ZN(t.nodes[this.name])
		}, { tag: "td" }];
	},
	renderHTML({ HTMLAttributes: e }) {
		let t = QD(this.options.HTMLAttributes, e);
		return QN(t, e, "colspan"), QN(t, e, "rowspan"), [
			"td",
			t,
			0
		];
	}
}), eP = VA.create({
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
				parseHTML: JN
			},
			align: KN()
		};
	},
	tableRole: "header_cell",
	isolating: !0,
	parseHTML() {
		return [{
			tag: "th",
			getAttrs: (e) => XN(e) ? {} : !1,
			getContent: (e, t) => ZN(t.nodes[this.name])
		}, { tag: "th" }];
	},
	renderHTML({ HTMLAttributes: e }) {
		let t = QD(this.options.HTMLAttributes, e);
		return QN(t, e, "colspan"), QN(t, e, "rowspan"), [
			"th",
			t,
			0
		];
	}
}), tP = VA.create({
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
			QD(this.options.HTMLAttributes, e),
			0
		];
	}
});
function nP(e, t) {
	return t ? ["width", `${Math.max(t, e)}px`] : ["min-width", `${e}px`];
}
function rP(e, t, n, r, i, a) {
	let o = 0, s = !0, c = t.firstChild, l = e.firstChild;
	if (l !== null) for (let e = 0, n = 0; e < l.childCount; e += 1) {
		let { colspan: u, colwidth: d } = l.child(e).attrs;
		for (let e = 0; e < u; e += 1, n += 1) {
			let l = i === n ? a : d && d[e], u = l ? `${l}px` : "";
			if (o += l || r, l || (s = !1), c) {
				if (c.style.width !== u) {
					let [e, t] = nP(r, l);
					c.style.setProperty(e, t);
				}
				c = c.nextSibling;
			} else {
				let e = document.createElement("col"), [n, i] = nP(r, l);
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
var iP = class {
	constructor(e, t, n, r = {}) {
		this.node = e, this.cellMinWidth = t, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table"));
		for (let [e, t] of Object.entries(r)) t != null && (e === "style" ? this.table.style.cssText = String(t) : this.table.setAttribute(e, String(t)));
		e.attrs.style && (this.table.style.cssText = e.attrs.style), this.colgroup = this.table.appendChild(document.createElement("colgroup")), rP(e, this.colgroup, this.table, t), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
	}
	update(e) {
		return e.sameMarkup(this.node) ? (this.node = e, rP(e, this.colgroup, this.table, this.cellMinWidth), !0) : !1;
	}
	ignoreMutation(e) {
		let t = e.target, n = this.dom.contains(t), r = this.contentDOM.contains(t);
		return !(!n || r || e.type !== "attributes" && e.type !== "childList" && e.type !== "characterData");
	}
};
function aP(e, t, n, r) {
	let i = 0, a = !0, o = [], s = e.firstChild;
	if (!s) return {};
	for (let e = 0, c = 0; e < s.childCount; e += 1) {
		let { colspan: l, colwidth: u } = s.child(e).attrs;
		for (let e = 0; e < l; e += 1, c += 1) {
			let s = n === c ? r : u && u[e];
			i += s || t, s || (a = !1);
			let [l, d] = nP(t, s);
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
function oP(e, t) {
	return t ? e.createChecked(null, t) : e.createAndFill();
}
function sP(e) {
	if (e.cached.tableNodeTypes) return e.cached.tableNodeTypes;
	let t = {};
	return Object.keys(e.nodes).forEach((n) => {
		let r = e.nodes[n];
		r.spec.tableRole && (t[r.spec.tableRole] = r);
	}), e.cached.tableNodeTypes = t, t;
}
function cP(e, t, n, r, i) {
	let a = sP(e), o = [], s = [];
	for (let e = 0; e < n; e += 1) {
		let e = oP(a.cell, i);
		if (e && s.push(e), r) {
			let e = oP(a.header_cell, i);
			e && o.push(e);
		}
	}
	let c = [];
	for (let e = 0; e < t; e += 1) c.push(a.row.createChecked(null, r && e === 0 ? o : s));
	return a.table.createChecked(null, c);
}
function lP(e) {
	return e instanceof TM;
}
var uP = ({ editor: e }) => {
	let { selection: t } = e.state;
	if (!lP(t)) return !1;
	let n = 0;
	return PD(t.ranges[0].$from, (e) => e.type.name === "table")?.node.descendants((e) => {
		if (e.type.name === "table") return !1;
		["tableCell", "tableHeader"].includes(e.type.name) && (n += 1);
	}), n === t.ranges.length && (e.commands.deleteTable(), !0);
};
function dP(e, t) {
	let n = e.mapping.map(t);
	if (PD(e.selection.$from, (e) => e.type.name === "table")?.pos === n) return;
	let r = e.doc.nodeAt(n);
	if (!r) return;
	let i = n + r.nodeSize - 1;
	e.setSelection(G.near(e.doc.resolve(i), -1));
}
function fP(e) {
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
function pP(e) {
	return e.split("\n").map((e) => !e.includes("|") || !e.includes("`") ? e : fP(e)).join("\n");
}
function mP(e) {
	return (e || "").replaceAll("", " ").replace(/\s+/g, " ").trim();
}
function hP(e, t) {
	return t ? e.split(t).join("\n") : e;
}
function gP(e) {
	return e.replace(/\\.|\|/g, (e) => e === "|" ? "\\|" : e);
}
function _P(e, t, n = {}) {
	if (!e || !e.content || e.content.length === 0) return "";
	let r = [];
	e.content.forEach((e) => {
		let i = [];
		e.content && e.content.forEach((e) => {
			let r = "";
			r = e.content && Array.isArray(e.content) && e.content.length > 1 ? e.content.map((e) => hP(t.renderChildren(e), n.cellLineSeparator)).join("\n") : hP(e.content ? t.renderChildren(e.content) : "", n.cellLineSeparator);
			let a = gP(mP(r.replace(/[ \t]*\r?\n[ \t]*/g, "<br>"))), o = e.type === "tableHeader", s = GN(e.attrs);
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
var vP = new sb("preserveCellSelectionOnContextMenu");
function yP(e, t) {
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
function bP(e, t) {
	let n = !1;
	return e.forEachCell((e, r) => {
		t >= r && t < r + e.nodeSize && (n = !0);
	}), n;
}
function xP() {
	return new q({
		key: vP,
		props: { handleDOMEvents: { mousedown(e, t) {
			if (t.button !== 2) return !1;
			let { selection: n } = e.state;
			if (!lP(n) || n.ranges.length < 2) return !1;
			let r = yP(e, t);
			return r == null || !bP(n, r) ? !1 : (t.preventDefault(), !0);
		} } }
	});
}
var SP = VA.create({
	name: "table",
	addOptions() {
		return {
			HTMLAttributes: {},
			resizable: !1,
			renderWrapper: !1,
			handleWidth: 5,
			cellMinWidth: 25,
			View: iP,
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
		let { colgroup: n, tableWidth: r, tableMinWidth: i } = aP(e, this.options.cellMinWidth), a = t.style;
		function o() {
			return a || (r ? `width: ${r}` : `min-width: ${i}`);
		}
		let s = [
			"table",
			QD(this.options.HTMLAttributes, t, { style: o() }),
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
				let a = UN(r[n] ?? e.align), o = a ? { align: a } : {};
				i.push(t.createNode("tableHeader", o, [{
					type: "paragraph",
					content: t.parseInline(e.tokens)
				}]));
			}), n.push(t.createNode("tableRow", {}, i));
		}
		return e.rows && e.rows.forEach((e) => {
			let i = [];
			e.forEach((e, n) => {
				let a = UN(r[n] ?? e.align), o = a ? { align: a } : {};
				i.push(t.createNode("tableCell", o, [{
					type: "paragraph",
					content: t.parseInline(e.tokens)
				}]));
			}), n.push(t.createNode("tableRow", {}, i));
		}), t.createNode("table", void 0, n);
	},
	renderMarkdown: (e, t) => _P(e, t),
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
			let s = pP(i);
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
				let o = cP(a.schema, e, t, n);
				if (i) {
					let e = r.selection.from + 1;
					r.replaceSelectionWith(o).scrollIntoView().setSelection(G.near(r.doc.resolve(e)));
				}
				return !0;
			},
			addColumnBefore: () => ({ state: e, dispatch: t }) => LM(e, t),
			addColumnAfter: () => ({ state: e, dispatch: t }) => RM(e, t),
			deleteColumn: () => ({ state: e, dispatch: t }) => {
				let n = PD(e.selection.$from, (e) => e.type.name === "table");
				return BM(e, t && ((e) => {
					n && dP(e, n.pos), t(e);
				}));
			},
			addRowBefore: () => ({ state: e, dispatch: t }) => UM(e, t),
			addRowAfter: () => ({ state: e, dispatch: t }) => WM(e, t),
			deleteRow: () => ({ state: e, dispatch: t }) => {
				let n = PD(e.selection.$from, (e) => e.type.name === "table");
				return KM(e, t && ((e) => {
					n && dP(e, n.pos), t(e);
				}));
			},
			deleteTable: () => ({ state: e, dispatch: t }) => aN(e, t),
			mergeCells: () => ({ state: e, dispatch: t }) => YM(e, t),
			splitCell: () => ({ state: e, dispatch: t }) => XM(e, t),
			toggleHeaderColumn: () => ({ state: e, dispatch: t }) => tN("column")(e, t),
			toggleHeaderRow: () => ({ state: e, dispatch: t }) => tN("row")(e, t),
			toggleHeaderCell: () => ({ state: e, dispatch: t }) => nN(e, t),
			mergeOrSplit: () => ({ state: e, dispatch: t }) => YM(e, t) ? !0 : XM(e, t),
			setCellAttribute: (e, t) => ({ state: n, dispatch: r }) => QM(e, t)(n, r),
			goToNextCell: () => ({ state: e, dispatch: t }) => iN(1)(e, t),
			goToPreviousCell: () => ({ state: e, dispatch: t }) => iN(-1)(e, t),
			fixTables: () => ({ state: e, dispatch: t }) => (t && NM(e), !0),
			setCellSelection: (e) => ({ tr: t, dispatch: n }) => {
				if (n) {
					let n = TM.create(t.doc, e.anchorCell, e.headCell);
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
			Backspace: uP,
			"Mod-Backspace": uP,
			Delete: uP,
			"Mod-Delete": uP
		};
	},
	addProseMirrorPlugins() {
		return [
			...this.options.resizable && this.editor.isEditable ? [ON({
				handleWidth: this.options.handleWidth,
				cellMinWidth: this.options.cellMinWidth,
				defaultCellMinWidth: this.options.cellMinWidth,
				View: null,
				lastColumnResizable: this.options.lastColumnResizable
			})] : [],
			HN({ allowTableNodeSelection: this.options.allowTableNodeSelection }),
			xP()
		];
	},
	addNodeView() {
		let e = this.options.View;
		return e ? ({ node: t, view: n, HTMLAttributes: r }) => {
			let i = QD(this.options.HTMLAttributes, r);
			return new e(t, this.options.cellMinWidth, n, i);
		} : null;
	},
	extendNodeSchema(e) {
		return { tableRole: X(Y(e, "tableRole", {
			name: e.name,
			options: e.options,
			storage: e.storage
		})) };
	}
}), CP = Z.create({
	name: "tableKit",
	addExtensions() {
		let e = [];
		return this.options.table !== !1 && e.push(SP.configure(this.options.table)), this.options.tableCell !== !1 && e.push($N.configure(this.options.tableCell)), this.options.tableHeader !== !1 && e.push(eP.configure(this.options.tableHeader)), this.options.tableRow !== !1 && e.push(tP.configure(this.options.tableRow)), e;
	}
}), wP = 20, TP = (e, t = 0) => {
	let n = [];
	return !e.children.length || t > wP || Array.from(e.children).forEach((e) => {
		e.tagName === "SPAN" ? n.push(e) : e.children.length && n.push(...TP(e, t + 1));
	}), n;
}, EP = (e) => {
	if (!e.children.length) return;
	let t = TP(e);
	t && t.forEach((e) => {
		var t;
		let n = e.getAttribute("style"), r = (t = e.parentElement) == null || (t = t.closest("span")) == null ? void 0 : t.getAttribute("style");
		e.setAttribute("style", `${r};${n}`);
	});
}, DP = fA.create({
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
			getAttrs: (e) => e.hasAttribute("style") ? (this.options.mergeNestedSpanStyles && EP(e), {}) : !1
		}];
	},
	renderHTML({ HTMLAttributes: e }) {
		return [
			"span",
			QD(this.options.HTMLAttributes, e),
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
}), OP = Z.create({
	name: "backgroundColor",
	addOptions() {
		return { types: ["textStyle"] };
	},
	addGlobalAttributes() {
		return [{
			types: this.options.types,
			attributes: { backgroundColor: {
				default: null,
				parseHTML: (e) => (Wk(e, "background-color") ?? e.style.backgroundColor)?.replace(/['"]+/g, ""),
				renderHTML: (e) => Jk(e.backgroundColor) ? { style: `background-color: ${e.backgroundColor}` } : {}
			} }
		}];
	},
	addCommands() {
		return {
			setBackgroundColor: (e) => ({ chain: t }) => t().setMark("textStyle", { backgroundColor: e }).run(),
			unsetBackgroundColor: () => ({ chain: e }) => e().setMark("textStyle", { backgroundColor: null }).removeEmptyTextStyle().run()
		};
	}
}), kP = Z.create({
	name: "color",
	addOptions() {
		return { types: ["textStyle"] };
	},
	addGlobalAttributes() {
		return [{
			types: this.options.types,
			attributes: { color: {
				default: null,
				parseHTML: (e) => (Wk(e, "color") ?? e.style.color)?.replace(/['"]+/g, ""),
				renderHTML: (e) => Jk(e.color) ? { style: `color: ${e.color}` } : {}
			} }
		}];
	},
	addCommands() {
		return {
			setColor: (e) => ({ chain: t }) => t().setMark("textStyle", { color: e }).run(),
			unsetColor: () => ({ chain: e }) => e().setMark("textStyle", { color: null }).removeEmptyTextStyle().run()
		};
	}
}), AP = Z.create({
	name: "fontFamily",
	addOptions() {
		return { types: ["textStyle"] };
	},
	addGlobalAttributes() {
		return [{
			types: this.options.types,
			attributes: { fontFamily: {
				default: null,
				parseHTML: (e) => Wk(e, "font-family") ?? e.style.fontFamily,
				renderHTML: (e) => Jk(e.fontFamily) ? { style: `font-family: ${e.fontFamily}` } : {}
			} }
		}];
	},
	addCommands() {
		return {
			setFontFamily: (e) => ({ chain: t }) => t().setMark("textStyle", { fontFamily: e }).run(),
			unsetFontFamily: () => ({ chain: e }) => e().setMark("textStyle", { fontFamily: null }).removeEmptyTextStyle().run()
		};
	}
}), jP = Z.create({
	name: "fontSize",
	addOptions() {
		return { types: ["textStyle"] };
	},
	addGlobalAttributes() {
		return [{
			types: this.options.types,
			attributes: { fontSize: {
				default: null,
				parseHTML: (e) => Wk(e, "font-size") ?? e.style.fontSize,
				renderHTML: (e) => Jk(e.fontSize) ? { style: `font-size: ${e.fontSize}` } : {}
			} }
		}];
	},
	addCommands() {
		return {
			setFontSize: (e) => ({ chain: t }) => t().setMark("textStyle", { fontSize: e }).run(),
			unsetFontSize: () => ({ chain: e }) => e().setMark("textStyle", { fontSize: null }).removeEmptyTextStyle().run()
		};
	}
}), MP = Z.create({
	name: "lineHeight",
	addOptions() {
		return { types: ["textStyle"] };
	},
	addGlobalAttributes() {
		return [{
			types: this.options.types,
			attributes: { lineHeight: {
				default: null,
				parseHTML: (e) => Wk(e, "line-height") ?? e.style.lineHeight,
				renderHTML: (e) => Jk(e.lineHeight) ? { style: `line-height: ${e.lineHeight}` } : {}
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
Z.create({
	name: "textStyleKit",
	addExtensions() {
		let e = [];
		return this.options.backgroundColor !== !1 && e.push(OP.configure(this.options.backgroundColor)), this.options.color !== !1 && e.push(kP.configure(this.options.color)), this.options.fontFamily !== !1 && e.push(AP.configure(this.options.fontFamily)), this.options.fontSize !== !1 && e.push(jP.configure(this.options.fontSize)), this.options.lineHeight !== !1 && e.push(MP.configure(this.options.lineHeight)), this.options.textStyle !== !1 && e.push(DP.configure(this.options.textStyle)), e;
	}
});
// node_modules/@tiptap/core/dist/jsx-runtime/jsx-runtime.js
var NP = /* @__PURE__ */ new WeakSet(), PP = /* @__PURE__ */ new WeakSet();
function FP(e) {
	let t = e;
	return NP.add(t), t;
}
function IP(e) {
	return Array.isArray(e) && NP.has(e);
}
function LP(e) {
	return e.flatMap((e) => e == null ? [] : Array.isArray(e) && PP.has(e) && !IP(e) ? LP(e) : [e]);
}
function RP(e, t) {
	if (e === "slot") return 0;
	if (e instanceof Function) {
		let n = e(t);
		return Array.isArray(n) && !IP(n) && !PP.has(n) ? FP(n) : n;
	}
	let { children: n, ...r } = t ?? {};
	if (e === "svg") throw Error("SVG elements are not supported in the JSX syntax, use the array syntax instead");
	if (Array.isArray(n)) {
		if (IP(n)) return FP([
			e,
			r,
			n
		]);
		if (n.length === 0) return FP([e, r]);
		let t = LP(n);
		return t.length === 0 ? FP([e, r]) : FP([
			e,
			r,
			...t
		]);
	}
	return FP(n == null ? [e, r] : [
		e,
		r,
		n
	]);
}
var zP = (e, t) => RP(e, t), BP = (e, t) => {
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
		let n = i.parent.content, r = new U(n, 0, 0);
		return e.replace(l, i.after(), r), e.setSelection(G.create(e.doc, l + n.size)), e.scrollIntoView(), t(e), !0;
	});
}, VP = /^\s*>\s$/, HP = VA.create({
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
		return /* @__PURE__ */ zP("blockquote", {
			...QD(this.options.HTMLAttributes, e),
			children: /* @__PURE__ */ zP("slot", {})
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
			Backspace: () => BP(this.editor, this.type)
		};
	},
	addInputRules() {
		return [BA({
			find: VP,
			type: this.type
		})];
	}
}), UP = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))$/, WP = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))/g, GP = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))$/, KP = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))/g, qP = fA.create({
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
		return /* @__PURE__ */ zP("strong", {
			...QD(this.options.HTMLAttributes, e),
			children: /* @__PURE__ */ zP("slot", {})
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
		return [LA({
			find: UP,
			type: this.type
		}), LA({
			find: GP,
			type: this.type
		})];
	},
	addPasteRules() {
		return [HA({
			find: WP,
			type: this.type
		}), HA({
			find: KP,
			type: this.type
		})];
	}
}), JP = (e) => {
	let t = /`([^`]+)`(?!`)$/.exec(e);
	return !t || t.index > 0 && e[t.index - 1] === "`" ? null : {
		index: t.index,
		text: t[0],
		replaceWith: t[1]
	};
}, YP = (e) => {
	let t = /`([^`]+)`(?!`)/g, n = [], r;
	for (; (r = t.exec(e)) !== null;) r.index > 0 && e[r.index - 1] === "`" || n.push({
		index: r.index,
		text: r[0],
		replaceWith: r[1]
	});
	return n;
};
function XP(e) {
	let t = new Set((e.match(/`+/g) || []).map((e) => e.length)), n = 1;
	for (; t.has(n);) n += 1;
	return n;
}
var ZP = fA.create({
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
			QD(this.options.HTMLAttributes, e),
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
		let i = typeof (n == null || (r = n.meta) == null ? void 0 : r.markText) == "string" ? n.meta.markText : "", a = "`".repeat(XP(i)), o = i.startsWith("`") || i.endsWith("`") ? " " : "";
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
		return [LA({
			find: JP,
			type: this.type
		})];
	},
	addPasteRules() {
		return [HA({
			find: YP,
			type: this.type
		})];
	}
}), QP = 4, $P = /^```([a-z]+)?[\s\n]$/, eF = /^~~~([a-z]+)?[\s\n]$/, tF = VA.create({
	name: "codeBlock",
	addOptions() {
		return {
			languageClassPrefix: "language-",
			exitOnTripleEnter: !0,
			exitOnArrowDown: !0,
			exitOnArrowUp: !0,
			defaultLanguage: null,
			enableTabIndentation: !1,
			tabSize: QP,
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
			QD(this.options.HTMLAttributes, t),
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
				let t = this.options.tabSize ?? QP, { state: n } = e, { selection: r } = n, { $from: i, empty: a } = r;
				if (i.parent.type !== this.type) return !1;
				let o = " ".repeat(t);
				return a ? e.commands.insertContent(o) : e.commands.command(({ tr: e }) => {
					let { from: t, to: i } = r, a = n.doc.textBetween(t, i, "\n", "\n").split("\n").map((e) => o + e).join("\n");
					return e.replaceWith(t, i, n.schema.text(a)), !0;
				});
			},
			"Shift-Tab": ({ editor: e }) => {
				if (!this.options.enableTabIndentation) return !1;
				let t = this.options.tabSize ?? QP, { state: n } = e, { selection: r } = n, { $from: i, empty: a } = r;
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
					return e.delete(p, p + f), r - p <= f && e.setSelection(G.create(e.doc, p)), !0;
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
				return o === void 0 ? !1 : r.nodeAt(o) ? e.commands.command(({ tr: e }) => (e.setSelection(W.near(r.resolve(o))), !0)) : e.commands.exitCode();
			}
		};
	},
	addInputRules() {
		return [zA({
			find: $P,
			type: this.type,
			getAttributes: (e) => ({ language: e[1] })
		}), zA({
			find: eF,
			type: this.type,
			getAttributes: (e) => ({ language: e[1] })
		})];
	},
	addProseMirrorPlugins() {
		return [new q({
			key: new sb("codeBlockVSCodeHandler"),
			props: { handlePaste: (e, t) => {
				if (!t.clipboardData || this.editor.isActive(this.type.name)) return !1;
				let n = t.clipboardData.getData("text/plain"), r = t.clipboardData.getData("vscode-editor-data"), i = (r ? JSON.parse(r) : void 0)?.mode;
				if (!n || !i) return !1;
				let { tr: a, schema: o } = e.state, s = o.text(n.replace(/\r\n?/g, "\n"));
				return a.replaceSelectionWith(this.type.create({ language: i }, s)), a.selection.$from.parent.type !== this.type && a.setSelection(G.near(a.doc.resolve(Math.max(0, a.selection.from - 2)))), a.setMeta("paste", !0), e.dispatch(a), !0;
			} }
		})];
	}
}), nF = VA.create({
	name: "doc",
	topNode: !0,
	content: "block+",
	renderMarkdown: (e, t) => e.content ? t.renderChildren(e.content, "\n\n") : ""
}), rF = VA.create({
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
		return ["br", QD(this.options.HTMLAttributes, e)];
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
}), iF = VA.create({
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
			QD(this.options.HTMLAttributes, t),
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
		return this.options.levels.map((e) => zA({
			find: RegExp(`^(#{${Math.min(...this.options.levels)},${e}})\\s$`),
			type: this.type,
			getAttributes: { level: e }
		}));
	}
}), aF = VA.create({
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
		return ["hr", QD(this.options.HTMLAttributes, e)];
	},
	markdownTokenName: "hr",
	parseMarkdown: (e, t) => t.createNode("horizontalRule"),
	renderMarkdown: () => "---",
	addCommands() {
		return { setHorizontalRule: () => ({ chain: e, state: t }) => {
			if (!Hk(t, t.schema.nodes[this.name])) return !1;
			let { selection: n } = t, { $to: r } = n, i = e();
			return kO(n) ? i.insertContentAt(r.pos, { type: this.name }) : i.insertContent({ type: this.name }), i.command(({ state: e, tr: t, dispatch: n }) => {
				if (n) {
					let { $to: n } = t.selection, r = n.end();
					if (n.nodeAfter) n.nodeAfter.isTextblock ? t.setSelection(G.create(t.doc, n.pos + 1)) : n.nodeAfter.isBlock ? t.setSelection(K.create(t.doc, n.pos)) : t.setSelection(G.create(t.doc, n.pos));
					else {
						let i = (e.schema.nodes[this.options.nextNodeType] || n.parent.type.contentMatch.defaultType)?.create();
						i && (t.insert(r, i), t.setSelection(G.create(t.doc, r + 1)));
					}
					t.scrollIntoView();
				}
				return !0;
			}).run();
		} };
	},
	addInputRules() {
		return [RA({
			find: /^(?:---|—-|___\s|\*\*\*\s)$/,
			type: this.type
		})];
	}
}), oF = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))$/, sF = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))/g, cF = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))$/, lF = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))/g, uF = fA.create({
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
			QD(this.options.HTMLAttributes, e),
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
		return [LA({
			find: oF,
			type: this.type
		}), LA({
			find: cF,
			type: this.type
		})];
	},
	addPasteRules() {
		return [HA({
			find: sF,
			type: this.type
		}), HA({
			find: lF,
			type: this.type
		})];
	}
}), dF = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2odyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos6kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rck0msd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12b0cam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2oodside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", fF = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", pF = "numeric", mF = "ascii", hF = "alpha", gF = "asciinumeric", _F = "alphanumeric", vF = "domain", yF = "emoji", bF = "scheme", xF = "slashscheme", SF = "whitespace";
function CF(e, t) {
	return e in t || (t[e] = []), t[e];
}
function wF(e, t, n) {
	t[pF] && (t[gF] = !0, t[_F] = !0), t[mF] && (t[gF] = !0, t[hF] = !0), t[gF] && (t[_F] = !0), t[hF] && (t[_F] = !0), t[_F] && (t[vF] = !0), t[yF] && (t[vF] = !0);
	for (let r in t) {
		let t = CF(r, n);
		t.indexOf(e) < 0 && t.push(e);
	}
}
function TF(e, t) {
	let n = {};
	for (let r in t) t[r].indexOf(e) >= 0 && (n[r] = !0);
	return n;
}
function EF(e = null) {
	this.j = {}, this.jr = [], this.jd = null, this.t = e;
}
EF.groups = {}, EF.prototype = {
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
		r ||= EF.groups;
		let i;
		return t && t.j ? i = t : (i = new EF(t), n && r && wF(t, n, r)), this.jr.push([e, i]), i;
	},
	ts(e, t, n, r) {
		let i = this, a = e.length;
		if (!a) return i;
		for (let t = 0; t < a - 1; t++) i = i.tt(e[t]);
		return i.tt(e[a - 1], t, n, r);
	},
	tt(e, t, n, r) {
		r ||= EF.groups;
		let i = this;
		if (t && t.j) return i.j[e] = t, t;
		let a = t, o, s = i.go(e);
		return s ? (o = new EF(), Object.assign(o.j, s.j), o.jr.push.apply(o.jr, s.jr), o.jd = s.jd, o.t = s.t) : o = new EF(), a && (r && (o.t && typeof o.t == "string" ? wF(a, Object.assign(TF(o.t, r), n), r) : n && wF(a, n, r)), o.t = a), i.j[e] = o, o;
	}
};
var Q = (e, t, n, r, i) => e.ta(t, n, r, i), DF = (e, t, n, r, i) => e.tr(t, n, r, i), OF = (e, t, n, r, i) => e.ts(t, n, r, i), $ = (e, t, n, r, i) => e.tt(t, n, r, i), kF = "WORD", AF = "UWORD", jF = "ASCIINUMERICAL", MF = "ALPHANUMERICAL", NF = "LOCALHOST", PF = "TLD", FF = "UTLD", IF = "SCHEME", LF = "SLASH_SCHEME", RF = "NUM", zF = "WS", BF = "NL", VF = "OPENBRACE", HF = "CLOSEBRACE", UF = "OPENBRACKET", WF = "CLOSEBRACKET", GF = "OPENPAREN", KF = "CLOSEPAREN", qF = "OPENANGLEBRACKET", JF = "CLOSEANGLEBRACKET", YF = "FULLWIDTHLEFTPAREN", XF = "FULLWIDTHRIGHTPAREN", ZF = "LEFTCORNERBRACKET", QF = "RIGHTCORNERBRACKET", $F = "LEFTWHITECORNERBRACKET", eI = "RIGHTWHITECORNERBRACKET", tI = "FULLWIDTHLESSTHAN", nI = "FULLWIDTHGREATERTHAN", rI = "AMPERSAND", iI = "APOSTROPHE", aI = "ASTERISK", oI = "AT", sI = "BACKSLASH", cI = "BACKTICK", lI = "CARET", uI = "COLON", dI = "COMMA", fI = "DOLLAR", pI = "DOT", mI = "EQUALS", hI = "EXCLAMATION", gI = "HYPHEN", _I = "PERCENT", vI = "PIPE", yI = "PLUS", bI = "POUND", xI = "QUERY", SI = "QUOTE", CI = "FULLWIDTHMIDDLEDOT", wI = "SEMI", TI = "SLASH", EI = "TILDE", DI = "UNDERSCORE", OI = "EMOJI", kI = "SYM", AI = /*#__PURE__*/ Object.freeze({
	__proto__: null,
	ALPHANUMERICAL: MF,
	AMPERSAND: rI,
	APOSTROPHE: iI,
	ASCIINUMERICAL: jF,
	ASTERISK: aI,
	AT: oI,
	BACKSLASH: sI,
	BACKTICK: cI,
	CARET: lI,
	CLOSEANGLEBRACKET: JF,
	CLOSEBRACE: HF,
	CLOSEBRACKET: WF,
	CLOSEPAREN: KF,
	COLON: uI,
	COMMA: dI,
	DOLLAR: fI,
	DOT: pI,
	EMOJI: OI,
	EQUALS: mI,
	EXCLAMATION: hI,
	FULLWIDTHGREATERTHAN: nI,
	FULLWIDTHLEFTPAREN: YF,
	FULLWIDTHLESSTHAN: tI,
	FULLWIDTHMIDDLEDOT: CI,
	FULLWIDTHRIGHTPAREN: XF,
	HYPHEN: gI,
	LEFTCORNERBRACKET: ZF,
	LEFTWHITECORNERBRACKET: $F,
	LOCALHOST: NF,
	NL: BF,
	NUM: RF,
	OPENANGLEBRACKET: qF,
	OPENBRACE: VF,
	OPENBRACKET: UF,
	OPENPAREN: GF,
	PERCENT: _I,
	PIPE: vI,
	PLUS: yI,
	POUND: bI,
	QUERY: xI,
	QUOTE: SI,
	RIGHTCORNERBRACKET: QF,
	RIGHTWHITECORNERBRACKET: eI,
	SCHEME: IF,
	SEMI: wI,
	SLASH: TI,
	SLASH_SCHEME: LF,
	SYM: kI,
	TILDE: EI,
	TLD: PF,
	UNDERSCORE: DI,
	UTLD: FF,
	UWORD: AF,
	WORD: kF,
	WS: zF
}), jI = /[a-z]/, MI = /[a-z]/i, NI = /[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}]|\u{FE0F}/u;
try {
	MI = /* @__PURE__ */ RegExp("\\p{L}", "u"), NI = /* @__PURE__ */ RegExp("\\p{Emoji}", "u");
} catch {}
var PI = /\d/, FI = /\s/, II = "\r", LI = "\n", RI = "️", zI = "‍", BI = "￼", VI = null, HI = null;
function UI(e = []) {
	let t = {};
	EF.groups = t;
	let n = new EF();
	VI ??= qI(dF), HI ??= qI(fF), $(n, "'", iI), $(n, "{", VF), $(n, "}", HF), $(n, "[", UF), $(n, "]", WF), $(n, "(", GF), $(n, ")", KF), $(n, "<", qF), $(n, ">", JF), $(n, "（", YF), $(n, "）", XF), $(n, "「", ZF), $(n, "」", QF), $(n, "『", $F), $(n, "』", eI), $(n, "＜", tI), $(n, "＞", nI), $(n, "&", rI), $(n, "*", aI), $(n, "@", oI), $(n, "`", cI), $(n, "^", lI), $(n, ":", uI), $(n, ",", dI), $(n, "$", fI), $(n, ".", pI), $(n, "=", mI), $(n, "!", hI), $(n, "-", gI), $(n, "%", _I), $(n, "|", vI), $(n, "+", yI), $(n, "#", bI), $(n, "?", xI), $(n, "\"", SI), $(n, "/", TI), $(n, ";", wI), $(n, "~", EI), $(n, "_", DI), $(n, "\\", sI), $(n, "・", CI);
	let r = DF(n, PI, RF, { [pF]: !0 });
	DF(r, PI, r);
	let i = DF(r, jI, jF, { [gF]: !0 }), a = DF(r, MI, MF, { [_F]: !0 }), o = DF(n, jI, kF, { [mF]: !0 });
	DF(o, PI, i), DF(o, jI, o), DF(i, PI, i), DF(i, jI, i);
	let s = DF(n, MI, AF, { [hF]: !0 });
	DF(s, jI), DF(s, PI, a), DF(s, MI, s), DF(a, PI, a), DF(a, jI), DF(a, MI, a);
	let c = $(n, LI, BF, { [SF]: !0 }), l = $(n, II, zF, { [SF]: !0 }), u = DF(n, FI, zF, { [SF]: !0 });
	$(n, BI, u), $(l, LI, c), $(l, BI, u), DF(l, FI, u), $(u, II), $(u, LI), DF(u, FI, u), $(u, BI, u);
	let d = DF(n, NI, OI, { [yF]: !0 });
	$(d, "#"), DF(d, NI, d), $(d, RI, d);
	let f = $(d, zI);
	$(f, "#"), DF(f, NI, d);
	let p = [[jI, o], [PI, i]], m = [
		[jI, null],
		[MI, s],
		[PI, a]
	];
	for (let e = 0; e < VI.length; e++) KI(n, VI[e], PF, kF, p);
	for (let e = 0; e < HI.length; e++) KI(n, HI[e], FF, AF, m);
	wF(PF, {
		tld: !0,
		ascii: !0
	}, t), wF(FF, {
		utld: !0,
		alpha: !0
	}, t), KI(n, "file", IF, kF, p), KI(n, "mailto", IF, kF, p), KI(n, "http", LF, kF, p), KI(n, "https", LF, kF, p), KI(n, "ftp", LF, kF, p), KI(n, "ftps", LF, kF, p), wF(IF, {
		scheme: !0,
		ascii: !0
	}, t), wF(LF, {
		slashscheme: !0,
		ascii: !0
	}, t), e = e.sort((e, t) => e[0] > t[0] ? 1 : -1);
	for (let t = 0; t < e.length; t++) {
		let r = e[t][0], i = e[t][1] ? { [bF]: !0 } : { [xF]: !0 };
		r.indexOf("-") >= 0 ? i[vF] = !0 : jI.test(r) ? PI.test(r) ? i[gF] = !0 : i[mF] = !0 : i[pF] = !0, OF(n, r, r, i);
	}
	return OF(n, "localhost", NF, { ascii: !0 }), n.jd = new EF(kI), {
		start: n,
		tokens: Object.assign({ groups: t }, AI)
	};
}
function WI(e, t) {
	let n = GI(t.replace(/[A-Z]/g, (e) => e.toLowerCase())), r = n.length, i = [], a = 0, o = 0;
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
function GI(e) {
	let t = [], n = e.length, r = 0;
	for (; r < n;) {
		let i = e.charCodeAt(r), a, o = i < 55296 || i > 56319 || r + 1 === n || (a = e.charCodeAt(r + 1)) < 56320 || a > 57343 ? e[r] : e.slice(r, r + 2);
		t.push(o), r += o.length;
	}
	return t;
}
function KI(e, t, n, r, i) {
	let a, o = t.length;
	for (let n = 0; n < o - 1; n++) {
		let o = t[n];
		e.j[o] ? a = e.j[o] : (a = new EF(r), a.jr = i.slice(), e.j[o] = a), e = a;
	}
	return a = new EF(n), a.jr = i.slice(), e.j[t[o - 1]] = a, a;
}
function qI(e) {
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
var JI = {
	defaultProtocol: "http",
	events: null,
	format: XI,
	formatHref: XI,
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
function YI(e, t = null) {
	let n = Object.assign({}, JI);
	e && (n = Object.assign(n, e instanceof YI ? e.o : e));
	let r = n.ignoreTags, i = [];
	for (let e = 0; e < r.length; e++) i.push(r[e].toUpperCase());
	this.o = n, t && (this.defaultRender = t), this.ignoreTags = i, this.ignoreClasses = n.ignoreClasses.slice();
}
YI.prototype = {
	o: JI,
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
		return i && (typeof i == "object" ? (i = n.t in i ? i[n.t] : JI[e], typeof i == "function" && r && (i = i(t, n))) : typeof i == "function" && r && (i = i(t, n.t, n)), i);
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
function XI(e) {
	return e;
}
function ZI(e, t) {
	this.t = "token", this.v = e, this.tk = t;
}
ZI.prototype = {
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
	toObject(e = JI.defaultProtocol) {
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
function QI(e, t) {
	class n extends ZI {
		constructor(t, n) {
			super(t, n), this.t = e;
		}
	}
	for (let e in t) n.prototype[e] = t[e];
	return n.t = e, n;
}
var $I = QI("email", {
	isLink: !0,
	toHref() {
		return "mailto:" + this.toString();
	}
}), eL = QI("text"), tL = QI("nl"), nL = QI("url", {
	isLink: !0,
	toHref(e = JI.defaultProtocol) {
		return this.hasProtocol() ? this.v : `${e}://${this.v}`;
	},
	hasProtocol() {
		let e = this.tk;
		return e.length >= 2 && e[0].t !== NF && e[1].t === uI;
	}
}), rL = (e) => new EF(e);
function iL({ groups: e }) {
	let t = e.domain.concat([
		rI,
		aI,
		oI,
		sI,
		cI,
		lI,
		fI,
		mI,
		gI,
		RF,
		_I,
		vI,
		yI,
		bI,
		TI,
		kI,
		EI,
		DI
	]), n = [
		iI,
		uI,
		dI,
		pI,
		hI,
		_I,
		xI,
		SI,
		wI,
		qF,
		JF,
		VF,
		HF,
		WF,
		UF,
		GF,
		KF,
		YF,
		XF,
		ZF,
		QF,
		$F,
		eI,
		tI,
		nI
	], r = [
		rI,
		iI,
		aI,
		sI,
		cI,
		lI,
		fI,
		mI,
		gI,
		VF,
		HF,
		_I,
		vI,
		yI,
		bI,
		xI,
		TI,
		kI,
		EI,
		DI
	], i = rL(), a = $(i, EI);
	Q(a, r, a), Q(a, e.domain, a);
	let o = rL(), s = rL(), c = rL();
	Q(i, e.domain, o), Q(i, e.scheme, s), Q(i, e.slashscheme, c), Q(o, r, a), Q(o, e.domain, o);
	let l = $(o, oI);
	$(a, oI, l), $(s, oI, l), $(c, oI, l);
	let u = $(a, pI);
	Q(u, r, a), Q(u, e.domain, a);
	let d = rL();
	Q(l, e.domain, d), Q(d, e.domain, d);
	let f = $(d, pI);
	Q(f, e.domain, d);
	let p = rL($I);
	Q(f, e.tld, p), Q(f, e.utld, p), $(l, NF, p);
	let m = $(d, gI);
	$(m, gI, m), Q(m, e.domain, d), Q(p, e.domain, d), $(p, pI, f), $(p, gI, m);
	let h = $(o, gI), g = $(o, pI);
	$(h, gI, h), Q(h, e.domain, o), Q(g, r, a), Q(g, e.domain, o);
	let _ = rL(nL);
	Q(g, e.tld, _), Q(g, e.utld, _), Q(_, e.domain, o), Q(_, r, a), $(_, pI, g), $(_, gI, h), $(_, oI, l);
	let v = $(_, uI), y = rL(nL);
	Q(v, e.numeric, y);
	let b = rL(nL), x = rL();
	Q(b, t, b), Q(b, n, x), Q(x, t, b), Q(x, n, x), $(_, TI, b), $(y, TI, b), $(_, xI, x), $(_, bI, b), $(y, xI, x), $(y, bI, b);
	let S = $(s, uI), C = $($($(c, uI), TI), TI);
	Q(s, e.domain, o), $(s, pI, g), $(s, gI, h), Q(c, e.domain, o), $(c, pI, g), $(c, gI, h), Q(S, e.domain, b), $(S, TI, b), $(S, xI, b), Q(C, e.domain, b), Q(C, t, b), $(C, TI, b);
	let w = [
		[VF, HF],
		[UF, WF],
		[GF, KF],
		[qF, JF],
		[YF, XF],
		[ZF, QF],
		[$F, eI],
		[tI, nI]
	];
	for (let e = 0; e < w.length; e++) {
		let [r, i] = w[e], a = $(b, r);
		$(x, r, a);
		let o = rL(nL);
		Q(a, t, o);
		let s = rL();
		Q(a, n, s), $(a, i, b), Q(o, t, o), Q(o, n, s), Q(s, t, o), Q(s, n, s), $(o, i, b), $(s, i, b);
	}
	return $(i, NF, _), $(i, BF, tL), {
		start: i,
		tokens: AI
	};
}
function aL(e, t, n) {
	let r = n.length, i = 0, a = [], o = [], s = [];
	for (; i < r;) {
		let c = e, l = null, u = null, d = 0, f = null, p = -1, m = [];
		for (; i < r && !(l = c.go(n[i].t));) o.push(n[i++]);
		for (; i < r && (u = l || c.go(n[i].t));) if (l = null, c = u, i++, d++, c.accepts()) p = 0, f = c, m = [];
		else if (p >= 0 && p++, m.push(c), s[i] && s[i].has(c)) break;
		for (let e = 0, t = i - m.length + 1; e < m.length; e++, t++) (s[t] || (s[t] = /* @__PURE__ */ new Set())).add(m[e]);
		if (p < 0) i -= d, i < r && (o.push(n[i]), i++);
		else {
			o.length > 0 && (a.push(oL(eL, t, o)), o = []), i -= p, d -= p;
			let e = f.t, r = n.slice(i - d, i);
			a.push(oL(e, t, r));
		}
	}
	return o.length > 0 && a.push(oL(eL, t, o)), a;
}
function oL(e, t, n) {
	let r = n[0].s, i = n[n.length - 1].e;
	return new e(t.slice(r, i), n);
}
var sL = typeof console < "u" && console && console.warn || (() => {}), cL = "until manual call of linkify.init(). Register all schemes and plugins before invoking linkify the first time.", lL = {
	scanner: null,
	parser: null,
	tokenQueue: [],
	pluginQueue: [],
	customSchemes: [],
	initialized: !1
};
function uL() {
	return EF.groups = {}, lL.scanner = null, lL.parser = null, lL.tokenQueue = [], lL.pluginQueue = [], lL.customSchemes = [], lL.initialized = !1, lL;
}
function dL(e, t = !1) {
	if (lL.initialized && sL(`linkifyjs: already initialized - will not register custom scheme "${e}" ${cL}`), !/^[0-9a-z]+(-[0-9a-z]+)*$/.test(e)) throw Error("linkifyjs: incorrect scheme format.\n1. Must only contain digits, lowercase ASCII letters or \"-\"\n2. Cannot start or end with \"-\"\n3. \"-\" cannot repeat");
	lL.customSchemes.push([e, t]);
}
function fL() {
	lL.scanner = UI(lL.customSchemes);
	for (let e = 0; e < lL.tokenQueue.length; e++) lL.tokenQueue[e][1]({ scanner: lL.scanner });
	lL.parser = iL(lL.scanner.tokens);
	for (let e = 0; e < lL.pluginQueue.length; e++) lL.pluginQueue[e][1]({
		scanner: lL.scanner,
		parser: lL.parser
	});
	return lL.initialized = !0, lL;
}
function pL(e) {
	return lL.initialized || fL(), aL(lL.parser.start, e, WI(lL.scanner.start, e));
}
pL.scan = WI;
function mL(e, t = null, n = null) {
	if (t && typeof t == "object") {
		if (n) throw Error(`linkifyjs: Invalid link type ${t}; must be a string`);
		n = t, t = null;
	}
	let r = new YI(n), i = pL(e), a = [];
	for (let e = 0; e < i.length; e++) {
		let n = i[e];
		n.isLink && (!t || n.t === t) && r.check(n) && a.push(n.toFormattedObject(r));
	}
	return a;
}
// node_modules/@tiptap/extension-link/dist/index.js
var hL = "[\0- \xA0 ᠎ -\u2029 　]", gL = new RegExp(hL), _L = RegExp(`${hL}$`), vL = RegExp(`${hL}+$`), yL = new RegExp(hL, "g");
function bL(e, t, n) {
	let r = e.doc.resolve(t.to);
	if (!r.nodeBefore?.isText) return;
	let i = e.doc.textBetween(t.from, t.to, "￼", "￼").match(vL)?.[0];
	if (!i) return;
	let a = t.to - i.length, o = gO(a, t.to, e.doc).filter((e) => e.mark.type === n);
	if (!o.length) return;
	let { nodeAfter: s } = r;
	if (s && o.some((e) => e.mark.isInSet(s.marks))) return;
	let c = e.storedMarks;
	e.removeMark(a, t.to, n), e.setStoredMarks(c), e.selection.empty && e.selection.from === t.to && e.removeStoredMark(n);
}
function xL(e) {
	return e.length === 1 ? e[0].isLink : e.length === 3 && e[1].isLink ? ["()", "[]"].includes(e[0].value + e[2].value) : !1;
}
function SL(e) {
	return new q({
		key: new sb("autolink"),
		appendTransaction: (t, n, r) => {
			let i = t.some((e) => e.docChanged) && !n.doc.eq(r.doc), a = t.some((e) => e.getMeta("preventAutolink"));
			if (!i || a) return;
			let { tr: o } = r, s = MD(n.doc, [...t]);
			if (!t.some(dE)) {
				let t = [];
				s.steps.forEach((e, n) => {
					if (!(e instanceof Gv) || !e.slice.size) return;
					let r = s.mapping.slice(n + 1), i = r.map(e.from, 1), a = r.map(e.from + e.slice.size, -1);
					i < a && t.push({
						from: i,
						to: a
					});
				}), t.sort((e, t) => t.to - e.to), t.forEach((t) => bL(o, t, e.type));
			}
			if (hO(s).forEach(({ newRange: t }) => {
				let n = ND(r.doc, t, (e) => e.isTextblock), i, a;
				if (n.length > 1) i = n[0], a = r.doc.textBetween(i.pos, i.pos + i.node.nodeSize, void 0, " ");
				else if (n.length) {
					let e = r.doc.textBetween(t.from, t.to, " ", " ");
					if (!_L.test(e)) return;
					i = n[0], a = r.doc.textBetween(i.pos, t.to, void 0, " ");
				}
				if (i && a) {
					let t = a.split(gL).filter(Boolean);
					if (t.length <= 0) return !1;
					let n = t[t.length - 1], s = i.pos + a.lastIndexOf(n);
					if (!n) return !1;
					let c = pL(n).map((t) => t.toObject(e.defaultProtocol));
					if (!xL(c)) return !1;
					c.filter((e) => e.isLink).map((e) => ({
						...e,
						from: s + e.start + 1,
						to: s + e.end + 1
					})).filter((e) => !r.schema.marks.code || !r.doc.rangeHasMark(e.from, e.to, r.schema.marks.code)).filter((t) => e.validate(t.value)).filter((t) => e.shouldAutoLink(t.value)).forEach((t) => {
						gO(t.from, t.to, r.doc).some((t) => t.mark.type === e.type) || o.addMark(t.from, t.to, e.type.create({ href: t.href }));
					});
				}
			}), o.steps.length) return o;
		}
	});
}
function CL(e) {
	return new q({
		key: new sb("handleClickLink"),
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
				let n = fO(t.state, e.type.name), r = i.href ?? n.href, o = i.target ?? n.target;
				r && (window.open(r, o), a = !0);
			}
			return a;
		} }
	});
}
var wL = /\[([^[\]]+)\]\(((?:[^\s()]|\([^\s()]*\))+)(?:\s+(?:(["'])(.*?)\3|“(.*?)”|‘(.*?)’))?\)$/, TL = /\[([^[\]]+)\]\(((?:[^\s()]|\([^\s()]*\))+)(?:\s+(?:(["'])(.*?)\3|“(.*?)”|‘(.*?)’))?\)/g;
function EL(e, t) {
	let n = 0;
	for (let r = t - 1; r >= 0 && e[r] === "\\"; --r) n += 1;
	return n % 2 == 1;
}
function DL(e, t) {
	let n = 0, r = 0;
	for (; r < t;) {
		if (e[r] !== "`" || n === 0 && EL(e, r)) {
			r += 1;
			continue;
		}
		let i = 0;
		for (; r < t && e[r] === "`";) i += 1, r += 1;
		n === 0 ? n = i : i === n && (n = 0);
	}
	return n > 0;
}
function OL(e, t, n) {
	let [, r, i] = t;
	return (t.index ? e[t.index - 1] : void 0) === "!" || EL(e, t.index ?? 0) || DL(e, t.index ?? 0) ? !1 : !!r.trim() && n(i);
}
function kL(e) {
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
function AL(e, t) {
	return e.index < t.index + t.text.length && t.index < e.index + e.text.length;
}
function jL(e) {
	return {
		href: e.data?.href,
		title: e.data?.title ?? null
	};
}
function ML(e) {
	let t = LA({
		find: (t) => {
			let n = wL.exec(t);
			return !n || !OL(t, n, e.isAllowedHref) ? null : kL(n);
		},
		type: e.type,
		getAttributes: jL
	});
	return new iA({
		find: t.find,
		handler: (e) => {
			let n = t.handler(e);
			return n !== null && e.state.tr.steps.length && e.state.tr.setMeta("preventAutolink", !0), n;
		}
	});
}
function NL(e) {
	let t = HA({
		find: (t) => {
			let n = [];
			for (let r of t.matchAll(TL)) OL(t, r, e.isAllowedHref) && n.push(kL(r));
			let r = (e.findPlainUrls?.call(e, t) ?? []).filter((e) => !n.some((t) => AL(t, e)));
			return [...n, ...r];
		},
		type: e.type,
		getAttributes: jL
	});
	return new pA({
		find: t.find,
		handler: (e) => {
			let n = t.handler(e);
			return n !== null && e.state.tr.steps.length && e.match.data?.markdown && e.state.tr.setMeta("preventAutolink", !0), n;
		}
	});
}
function PL(e) {
	return new q({
		key: new sb("handlePasteLink"),
		props: { handlePaste: (t, n, r) => {
			let { shouldAutoLink: i } = e, { state: a } = t, { selection: o } = a, { empty: s } = o;
			if (s) return !1;
			let c = "";
			r.content.forEach((e) => {
				c += e.textContent;
			});
			let l = mL(c, { defaultProtocol: e.defaultProtocol }).find((e) => e.isLink && e.value === c);
			return !c || !l || i !== void 0 && !i(l.value) ? !1 : e.editor.commands.setMark(e.type, { href: l.href });
		} }
	});
}
function FL(e, t) {
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
	}), !e || e.replace(yL, "").match(RegExp(`^(?:(?:${n.map((e) => e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")).join("|")}):|[^a-z]|[a-z0-9+.\\-]+(?:[^a-z+.\\-:]|$))`, "i"));
}
var IL = fA.create({
	name: "link",
	priority: 1e3,
	keepOnSplit: !1,
	exitable: !0,
	onCreate() {
		this.options.validate && !this.options.shouldAutoLink && (this.options.shouldAutoLink = this.options.validate, console.warn("The `validate` option is deprecated. Rename to the `shouldAutoLink` option instead.")), this.options.protocols.forEach((e) => {
			typeof e == "string" ? dL(e) : dL(e.scheme, e.optionalSlashes);
		});
	},
	onDestroy() {
		uL();
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
			isAllowedUri: (e, t) => !!FL(e, t.protocols),
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
					defaultValidate: (e) => !!FL(e, this.options.protocols),
					protocols: this.options.protocols,
					defaultProtocol: this.options.defaultProtocol
				}) ? !1 : null;
			}
		}];
	},
	renderHTML({ HTMLAttributes: e }) {
		return this.options.isAllowedUri(e.href, {
			defaultValidate: (e) => !!FL(e, this.options.protocols),
			protocols: this.options.protocols,
			defaultProtocol: this.options.defaultProtocol
		}) ? [
			"a",
			QD(this.options.HTMLAttributes, e),
			0
		] : [
			"a",
			QD(this.options.HTMLAttributes, {
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
					defaultValidate: (e) => !!FL(e, this.options.protocols),
					protocols: this.options.protocols,
					defaultProtocol: this.options.defaultProtocol
				}) ? t().setMark(this.name, e).setMeta("preventAutolink", !0).run() : !1;
			},
			toggleLink: (e) => ({ chain: t }) => {
				let { href: n } = e || {};
				return n && !this.options.isAllowedUri(n, {
					defaultValidate: (e) => !!FL(e, this.options.protocols),
					protocols: this.options.protocols,
					defaultProtocol: this.options.defaultProtocol
				}) ? !1 : t().toggleMark(this.name, e, { extendEmptyMarkRange: !0 }).setMeta("preventAutolink", !0).run();
			},
			unsetLink: () => ({ chain: e }) => e().unsetMark(this.name, { extendEmptyMarkRange: !0 }).setMeta("preventAutolink", !0).run()
		};
	},
	addInputRules() {
		return this.options.markdownLinks ? [ML({
			type: this.type,
			isAllowedHref: (e) => this.options.isAllowedUri(e, {
				defaultValidate: (e) => !!FL(e, this.options.protocols),
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
				mL(e, { defaultProtocol: r }).filter((e) => e.isLink && this.options.isAllowedUri(e.value, {
					defaultValidate: (e) => !!FL(e, n),
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
		return this.options.markdownLinks ? [NL({
			type: this.type,
			isAllowedHref: (e) => this.options.isAllowedUri(e, {
				defaultValidate: (e) => !!FL(e, this.options.protocols),
				protocols: this.options.protocols,
				defaultProtocol: this.options.defaultProtocol
			}),
			findPlainUrls: e
		})] : [HA({
			find: e,
			type: this.type,
			getAttributes: (e) => ({ href: e.data?.href })
		})];
	},
	addProseMirrorPlugins() {
		let e = [], { protocols: t, defaultProtocol: n } = this.options;
		return this.options.autolink && e.push(SL({
			type: this.type,
			defaultProtocol: this.options.defaultProtocol,
			validate: (e) => this.options.isAllowedUri(e, {
				defaultValidate: (e) => !!FL(e, t),
				protocols: t,
				defaultProtocol: n
			}),
			shouldAutoLink: this.options.shouldAutoLink
		})), e.push(CL({
			type: this.type,
			editor: this.editor,
			openOnClick: this.options.openOnClick === "whenNotEditable" || this.options.openOnClick,
			enableClickSelection: this.options.enableClickSelection
		})), this.options.linkOnPaste && e.push(PL({
			editor: this.editor,
			defaultProtocol: this.options.defaultProtocol,
			type: this.type,
			shouldAutoLink: this.options.shouldAutoLink
		})), e;
	}
}), LL = "&nbsp;", RL = "\xA0", zL = VA.create({
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
			QD(this.options.HTMLAttributes, e),
			0
		];
	},
	parseMarkdown: (e, t) => {
		let n = e.tokens || [];
		if (n.length === 1 && n[0].type === "image") return t.parseChildren([n[0]]);
		let r = t.parseInline(n);
		return n.length === 1 && n[0].type === "text" && (n[0].raw === LL || n[0].text === LL || n[0].raw === RL || n[0].text === RL) && r.length === 1 && r[0].type === "text" && (r[0].text === LL || r[0].text === RL) ? t.createNode("paragraph", void 0, []) : t.createNode("paragraph", void 0, r);
	},
	renderMarkdown: (e, t, n) => {
		if (!e) return "";
		let r = Array.isArray(e.content) ? e.content : [];
		if (r.length === 0) {
			var i, a;
			let e = Array.isArray(n == null || (i = n.previousNode) == null ? void 0 : i.content) ? n.previousNode.content : [];
			return (n == null || (a = n.previousNode) == null ? void 0 : a.type) === "paragraph" && e.length === 0 ? LL : "";
		}
		return t.renderChildren(r);
	},
	addCommands() {
		return { setParagraph: () => ({ commands: e }) => e.setNode(this.name) };
	},
	addKeyboardShortcuts() {
		return { "Mod-Alt-0": () => this.editor.commands.setParagraph() };
	}
}), BL = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))$/, VL = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))/g, HL = fA.create({
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
			QD(this.options.HTMLAttributes, e),
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
		return [LA({
			find: BL,
			type: this.type
		})];
	},
	addPasteRules() {
		return [HA({
			find: VL,
			type: this.type
		})];
	}
}), UL = VA.create({
	name: "text",
	group: "inline",
	parseMarkdown: (e) => ({
		type: "text",
		text: e.text || ""
	}),
	renderMarkdown: (e) => e.text || ""
}), WL = fA.create({
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
			QD(this.options.HTMLAttributes, e),
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
function GL(e = {}) {
	return new q({ view(t) {
		return new KL(t, e);
	} });
}
var KL = class {
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
			let e = vy(this.editorView.state.doc, a, this.editorView.dragging.slice);
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
}, qL = class e extends W {
	constructor(e) {
		super(e, e);
	}
	map(t, n) {
		let r = t.resolve(n.map(this.head));
		return e.valid(r) ? new e(r) : W.near(r);
	}
	content() {
		return U.empty;
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
		return new JL(this.anchor);
	}
	static valid(e) {
		let t = e.parent;
		if (t.inlineContent || !XL(e) || !ZL(e)) return !1;
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
					if (a.isAtom && !a.isText && !K.isSelectable(a)) {
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
qL.prototype.visible = !1, qL.findFrom = qL.findGapCursorFrom, W.jsonID("gapcursor", qL);
var JL = class e {
	constructor(e) {
		this.pos = e;
	}
	map(t) {
		return new e(t.map(this.pos));
	}
	resolve(e) {
		let t = e.resolve(this.pos);
		return qL.valid(t) ? new qL(t) : W.near(t);
	}
};
function YL(e) {
	return e.isAtom || e.spec.isolating || e.spec.createGapCursor;
}
function XL(e) {
	for (let t = e.depth; t >= 0; t--) {
		let n = e.index(t), r = e.node(t);
		if (n == 0) {
			if (r.type.spec.isolating) return !0;
		} else for (let e = r.child(n - 1);; e = e.lastChild) {
			if (e.childCount == 0 && !e.inlineContent || YL(e.type)) return !0;
			if (e.inlineContent) return !1;
		}
	}
	return !0;
}
function ZL(e) {
	for (let t = e.depth; t >= 0; t--) {
		let n = e.indexAfter(t), r = e.node(t);
		if (n == r.childCount) {
			if (r.type.spec.isolating) return !0;
		} else for (let e = r.child(n);; e = e.firstChild) {
			if (e.childCount == 0 && !e.inlineContent || YL(e.type)) return !0;
			if (e.inlineContent) return !1;
		}
	}
	return !0;
}
function QL() {
	return new q({ props: {
		decorations: rR,
		createSelectionBetween(e, t, n) {
			return t.pos == n.pos && qL.valid(n) ? new qL(n) : null;
		},
		handleClick: tR,
		handleKeyDown: $L,
		handleDOMEvents: { beforeinput: nR }
	} });
}
var $L = zT({
	ArrowLeft: eR("horiz", -1),
	ArrowRight: eR("horiz", 1),
	ArrowUp: eR("vert", -1),
	ArrowDown: eR("vert", 1)
});
function eR(e, t) {
	let n = e == "vert" ? t > 0 ? "down" : "up" : t > 0 ? "right" : "left";
	return function(e, r, i) {
		let a = e.selection, o = t > 0 ? a.$to : a.$from, s = a.empty;
		if (a instanceof G) {
			if (!i.endOfTextblock(n) || o.depth == 0) return !1;
			s = !1, o = e.doc.resolve(t > 0 ? o.after() : o.before());
		}
		let c = qL.findGapCursorFrom(o, t, s);
		return c ? (r && r(e.tr.setSelection(new qL(c))), !0) : !1;
	};
}
function tR(e, t, n) {
	if (!e || !e.editable) return !1;
	let r = e.state.doc.resolve(t);
	if (!qL.valid(r)) return !1;
	let i = e.posAtCoords({
		left: n.clientX,
		top: n.clientY
	});
	return i && i.inside > -1 && K.isSelectable(e.state.doc.nodeAt(i.inside)) ? !1 : (e.dispatch(e.state.tr.setSelection(new qL(r))), !0);
}
function nR(e, t) {
	if (t.inputType != "insertCompositionText" || !(e.state.selection instanceof qL)) return !1;
	let { $from: n } = e.state.selection, r = n.parent.contentMatchAt(n.index()).findWrapping(e.state.schema.nodes.text);
	if (!r) return !1;
	let i = V.empty;
	for (let e = r.length - 1; e >= 0; e--) i = V.from(r[e].createAndFill(null, i));
	let a = e.state.tr.replace(n.pos, n.pos, new U(i, 0, 0));
	return a.setSelection(G.near(a.doc.resolve(n.pos + 1))), e.dispatch(a), !1;
}
function rR(e) {
	if (!(e.selection instanceof qL)) return null;
	let t = document.createElement("div");
	return t.className = "ProseMirror-gapcursor", Rw.create(e.doc, [Fw.widget(e.selection.head, t, { key: "gapcursor" })]);
}
Z.create({
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
		return [new q({
			key: new sb("characterCount"),
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
var iR = Z.create({
	name: "dropCursor",
	addOptions() {
		return {
			color: "currentColor",
			width: 1,
			class: void 0
		};
	},
	addProseMirrorPlugins() {
		return [GL(this.options)];
	}
});
Z.create({
	name: "focus",
	addOptions() {
		return {
			className: "has-focus",
			mode: "all"
		};
	},
	addProseMirrorPlugins() {
		return [new q({
			key: new sb("focus"),
			props: { decorations: ({ doc: e, selection: t }) => {
				let { isEditable: n, isFocused: r } = this.editor, { anchor: i } = t, a = [];
				if (!n || !r) return Rw.create(e, []);
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
					a.push(Fw.node(t, t + e.nodeSize, { class: this.options.className }));
				}), Rw.create(e, a);
			} }
		})];
	}
});
var aR = Z.create({
	name: "gapCursor",
	addProseMirrorPlugins() {
		return [QL()];
	},
	extendNodeSchema(e) {
		return { allowGapCursor: X(Y(e, "allowGapCursor", {
			name: e.name,
			options: e.options,
			storage: e.storage
		})) ?? null };
	}
}), oR = "placeholder", sR = new sb("tiptap__placeholder");
function cR(e) {
	let { editor: t, placeholder: n, dataAttribute: r, pos: i, node: a, isEmptyDoc: o, hasAnchor: s, classes: { emptyNode: c, emptyEditor: l } } = e, u = [c];
	return o && u.push(l), Fw.node(i, i + a.nodeSize, {
		class: u.join(" "),
		[r]: typeof n == "function" ? n({
			editor: t,
			node: a,
			pos: i,
			hasAnchor: s
		}) : n
	});
}
function lR(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function uR({ editor: e, options: t, dataAttribute: n, doc: r, selection: i, from: a, to: o }) {
	let { anchor: s } = i, c = [], l = e.isEmpty;
	return r.nodesBetween(a, o, (r, i) => {
		let a = s >= i && s <= i + r.nodeSize, o = !r.isLeaf && OO(r);
		return r.type.isTextblock && (a || !t.showOnlyCurrent) && o && c.push(cR({
			editor: e,
			isEmptyDoc: l,
			dataAttribute: n,
			hasAnchor: a,
			placeholder: t.placeholder,
			classes: {
				emptyEditor: t.emptyEditorClass,
				emptyNode: lR(t.emptyNodeClass, {
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
function dR({ editor: e, options: t, dataAttribute: n, doc: r, selection: i }) {
	if (!e.isEditable && t.showOnlyWhenEditable) return null;
	let { anchor: a } = i, o = [], s = e.isEmpty;
	if (t.showOnlyCurrent && !t.includeChildren) {
		let i = r.resolve(a), c = i.depth > 0 ? i.node(1) : i.nodeAfter, l = i.depth > 0 ? i.before(1) : a;
		if (c && c.type.isTextblock && OO(c)) {
			let r = a >= l && a <= l + c.nodeSize;
			o.push(cR({
				editor: e,
				isEmptyDoc: s,
				dataAttribute: n,
				hasAnchor: r,
				placeholder: t.placeholder,
				classes: {
					emptyEditor: t.emptyEditorClass,
					emptyNode: lR(t.emptyNodeClass, {
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
	} else o.push(...uR({
		editor: e,
		options: t,
		dataAttribute: n,
		doc: r,
		selection: i,
		from: 0,
		to: r.content.size
	}));
	return Rw.create(r, o);
}
function fR(e, t) {
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
function pR(e, t) {
	return {
		from: Math.max(0, t.from),
		to: Math.min(e.content.size, t.to)
	};
}
function mR(e, t, n) {
	let r = [];
	return e.forEach((e, i) => {
		let a = i, o = a + e.nodeSize, s = a + 1, c = o + 1;
		s < n && c > t && r.push({
			from: a,
			to: o
		});
	}), r;
}
function hR(e) {
	if (e.length === 0) return [];
	let t = [...e].sort((e, t) => e.from - t.from), n = [{ ...t[0] }];
	for (let e = 1; e < t.length; e += 1) {
		let r = n[n.length - 1], i = t[e];
		i.from <= r.to ? r.to = Math.max(r.to, i.to) : n.push({ ...i });
	}
	return n;
}
function gR(e, t) {
	let n = mR(e, t.from, t.to);
	return n.push(pR(e, fR(e, t.from))), t.to > t.from ? n.push(pR(e, fR(e, Math.min(t.to, e.content.size + 1) - 1))) : t.from < e.content.size + 1 && n.push(pR(e, fR(e, Math.min(t.from + 1, e.content.size)))), n;
}
function _R(e, t, n) {
	let r = [];
	if (e.docChanged) {
		let t = hO(e);
		for (let e of t) r.push(...gR(n.doc, e.newRange));
	}
	return e.selectionSet && (r.push(pR(n.doc, fR(n.doc, e.mapping.map(t.selection.anchor)))), r.push(pR(n.doc, fR(n.doc, n.selection.anchor)))), hR(r);
}
function vR(e, t, n) {
	let r = Math.max(0, Math.min(e, n.content.size));
	return {
		from: r,
		to: Math.max(r, Math.min(t, n.content.size))
	};
}
function yR({ decorations: e, ranges: t, editor: n, options: r, dataAttribute: i, doc: a, selection: o }) {
	let s = e;
	for (let e of t) {
		let { from: t, to: c } = vR(e.from, e.to, a), l = s.find(t, c).filter((e) => e.from >= t && e.to <= c);
		l.length && (s = s.remove(l));
		let u = uR({
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
function bR({ editor: e, options: t, dataAttribute: n }) {
	return {
		init(r, i) {
			return dR({
				editor: e,
				options: t,
				dataAttribute: n,
				doc: i.doc,
				selection: i.selection
			}) ?? Rw.empty;
		},
		apply(r, i, a, o) {
			return !r.docChanged && !r.selectionSet ? i : yR({
				decorations: i.map(r.mapping, r.doc),
				ranges: _R(r, a, o),
				editor: e,
				options: t,
				dataAttribute: n,
				doc: o.doc,
				selection: o.selection
			});
		}
	};
}
function xR(e) {
	return e.replace(/\s+/g, "-").replace(/[^a-zA-Z0-9-]/g, "").replace(/^[0-9-]+/, "").replace(/^-+/, "").toLowerCase();
}
function SR({ editor: e, options: t }) {
	let n = t.dataAttribute ? `data-${xR(t.dataAttribute)}` : `data-${oR}`, r = t.showOnlyCurrent && !t.includeChildren;
	return new q({
		key: sR,
		...r ? {} : { state: bR({
			editor: e,
			options: t,
			dataAttribute: n
		}) },
		props: { decorations: r ? ({ doc: r, selection: i }) => dR({
			editor: e,
			options: t,
			dataAttribute: n,
			doc: r,
			selection: i
		}) : (n) => t.showOnlyWhenEditable && !e.isEditable ? Rw.empty : sR.getState(n) ?? Rw.empty }
	});
}
Z.create({
	name: "placeholder",
	addOptions() {
		return {
			emptyEditorClass: "is-editor-empty",
			emptyNodeClass: "is-empty",
			dataAttribute: oR,
			placeholder: "Write something …",
			showOnlyWhenEditable: !0,
			showOnlyCurrent: !0,
			includeChildren: !1
		};
	},
	addProseMirrorPlugins() {
		return [SR({
			editor: this.editor,
			options: this.options
		})];
	}
});
function CR(e, t) {
	return !e.selection.empty && !kO(e.selection) && t.isEditable;
}
function wR(e, t) {
	return CR(e, t) && !t.isFocused && !t.view.dragging;
}
function TR() {
	var e;
	(e = window.getSelection()) == null || e.removeAllRanges();
}
function ER(e) {
	e.focus();
}
Z.create({
	name: "selection",
	addOptions() {
		return { className: "selection" };
	},
	addProseMirrorPlugins() {
		let { editor: e, options: t } = this;
		return [new q({
			key: new sb("selection"),
			props: {
				decorations(n) {
					return wR(n, e) ? Rw.create(n.doc, [Fw.inline(n.selection.from, n.selection.to, { class: t.className })]) : null;
				},
				handleDOMEvents: {
					blur(t) {
						return CR(t.state, e) && TR(), !1;
					},
					focus(t) {
						return CR(t.state, e) && requestAnimationFrame(() => {
							!e.isDestroyed && t.hasFocus() && ER(t);
						}), !1;
					}
				}
			}
		})];
	}
});
function DR({ types: e, node: t }) {
	return t && Array.isArray(e) && e.includes(t.type) || t?.type === e;
}
var OR = Z.create({
	name: "trailingNode",
	addOptions() {
		return {
			node: void 0,
			notAfter: []
		};
	},
	addProseMirrorPlugins() {
		let e = new sb(this.name), t = this.options.node || this.editor.schema.topNodeType.contentMatch.defaultType?.name || "paragraph", n = Object.entries(this.editor.schema.nodes).map(([, e]) => e).filter((e) => (this.options.notAfter || []).concat(t).includes(e.name));
		return [new q({
			key: e,
			appendTransaction: (n, r, i) => {
				let { doc: a, tr: o, schema: s } = i, c = e.getState(i), l = a.content.size, u = s.nodes[t];
				if (!n.some((e) => e.getMeta("skipTrailingNode")) && c) return o.insert(l, u.create());
			},
			state: {
				init: (e, t) => {
					let r = t.tr.doc.lastChild;
					return !DR({
						node: r,
						types: n
					});
				},
				apply: (e, t) => {
					if (!e.docChanged || e.getMeta("__uniqueIDTransaction")) return t;
					let r = e.doc.lastChild;
					return !DR({
						node: r,
						types: n
					});
				}
			}
		})];
	}
}), kR = Z.create({
	name: "undoRedo",
	addOptions() {
		return {
			depth: 100,
			newGroupDelay: 500
		};
	},
	addCommands() {
		return {
			undo: () => ({ state: e, dispatch: t }) => lE(e, t),
			redo: () => ({ state: e, dispatch: t }) => uE(e, t)
		};
	},
	addProseMirrorPlugins() {
		return [sE(this.options)];
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
}), AR = Z.create({
	name: "starterKit",
	addExtensions() {
		let e = [];
		return this.options.bold !== !1 && e.push(qP.configure(this.options.bold)), this.options.blockquote !== !1 && e.push(HP.configure(this.options.blockquote)), this.options.bulletList !== !1 && e.push(YA.configure(this.options.bulletList)), this.options.code !== !1 && e.push(ZP.configure(this.options.code)), this.options.codeBlock !== !1 && e.push(tF.configure(this.options.codeBlock)), this.options.document !== !1 && e.push(nF.configure(this.options.document)), this.options.dropcursor !== !1 && e.push(iR.configure(this.options.dropcursor)), this.options.gapcursor !== !1 && e.push(aR.configure(this.options.gapcursor)), this.options.hardBreak !== !1 && e.push(rF.configure(this.options.hardBreak)), this.options.heading !== !1 && e.push(iF.configure(this.options.heading)), this.options.undoRedo !== !1 && e.push(kR.configure(this.options.undoRedo)), this.options.horizontalRule !== !1 && e.push(aF.configure(this.options.horizontalRule)), this.options.italic !== !1 && e.push(uF.configure(this.options.italic)), this.options.listItem !== !1 && e.push(Cj.configure(this.options.listItem)), this.options.listKeymap !== !1 && e.push(Mj.configure(this.options?.listKeymap)), this.options.link !== !1 && e.push(IL.configure(this.options?.link)), this.options.orderedList !== !1 && e.push(Qj.configure(this.options.orderedList)), this.options.paragraph !== !1 && e.push(zL.configure(this.options.paragraph)), this.options.strike !== !1 && e.push(HL.configure(this.options.strike)), this.options.text !== !1 && e.push(UL.configure(this.options.text)), this.options.underline !== !1 && e.push(WL.configure(this.options?.underline)), this.options.trailingNode !== !1 && e.push(OR.configure(this.options?.trailingNode)), e;
	}
});
// node_modules/@tiptap/vue-3/dist/index.js
function jR(e) {
	return sn((t, n) => ({
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
var MR = class extends IA {
	constructor(e = {}) {
		return super(e), this.contentComponent = null, this.appContext = null, this.reactiveState = jR(this.view.state), this.reactiveExtensionStorage = jR(this.extensionStorage), this.on("beforeTransaction", ({ nextState: e }) => {
			this.reactiveState.value = e, this.reactiveExtensionStorage.value = this.extensionStorage;
		}), Yt(this);
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
}, NR = /* @__PURE__ */ or({
	name: "EditorContent",
	props: { editor: {
		default: null,
		type: Object
	} },
	setup(e) {
		let t = /* @__PURE__ */ A(), n = wa();
		return Jn(() => {
			let r = e.editor;
			r && r.options.element && t.value && Dn(() => {
				if (!t.value || !r.view.dom?.parentNode) return;
				let e = nn(t.value);
				t.value.append(...r.view.dom.parentNode.childNodes), r.view.updateRoot(), r.contentComponent = n.ctx._, n && (r.appContext = {
					...n.appContext,
					provides: n.provides
				}), r.setOptions({ element: e }), r.createNodeViews();
			});
		}), wr(() => {
			let t = e.editor;
			t && (t.contentComponent = null, t.appContext = null);
		}), { rootEl: t };
	},
	render() {
		return Va("div", { ref: (e) => {
			this.rootEl = e;
		} });
	}
}), PR = ["data-element-id"], FR = {
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
		editable: {
			type: Boolean,
			default: !0
		},
		initialText: {
			type: String,
			default: ""
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
		let n = e, r = t, i = /* @__PURE__ */ A(null), a = /* @__PURE__ */ $t(null), o = /* @__PURE__ */ A(!1), s = n.element.doc, c = null;
		return xr(() => {
			if (a.value = new MR({
				content: n.element.doc ?? "",
				editable: n.editable,
				extensions: [
					AR.configure({ link: {
						openOnClick: !1,
						autolink: !0
					} }),
					rM,
					nM.configure({ nested: !0 }),
					CP.configure({ table: { resizable: !1 } }),
					GA.configure({ multicolor: !0 }),
					DP,
					kP
				],
				onUpdate: ({ editor: e }) => {
					s = e.getJSON(), r("change", s);
				},
				onFocus: ({ editor: e }) => {
					o.value = !0, r("focus", e);
				},
				onBlur: ({ editor: e }) => {
					o.value = !1, r("blur", e), Gm(e.getJSON()) && r("remove");
				}
			}), n.autofocus) {
				let e = n.initialText;
				a.value.commands.focus("end"), e && a.value.commands.insertContent(e);
			}
			c = new ResizeObserver(() => {
				i.value && r("height", i.value.offsetHeight);
			}), c.observe(i.value);
		}), Yn(() => n.element.doc, (e) => {
			a.value && e !== s && (s = e, a.value.commands.setContent(e ?? "", { emitUpdate: !1 }));
		}), wr(() => {
			c?.disconnect(), a.value?.destroy();
		}), (t, n) => (M(), N("div", {
			ref_key: "root",
			ref: i,
			class: D(["nb-element nb-text", {
				"nb-element--focused": o.value,
				"nb-element--selected": e.selected
			}]),
			"data-element-id": e.element.id,
			style: fe({
				left: e.element.x + "px",
				top: e.element.y + "px",
				width: e.element.width + "px"
			})
		}, [
			e.editable ? (M(), N("div", {
				key: 0,
				class: "nb-handle",
				title: "Verschieben",
				onPointerdown: n[0] ||= Go((e) => t.$emit("drag-start", e), ["stop", "prevent"])
			}, null, 32)) : I("", !0),
			a.value ? (M(), aa(nn(NR), {
				key: 1,
				editor: a.value,
				class: "nb-text__content"
			}, null, 8, ["editor"])) : I("", !0),
			e.editable ? (M(), N("div", {
				key: 2,
				class: "nb-resize nb-resize--x",
				title: "Breite ändern",
				onPointerdown: n[1] ||= Go((e) => t.$emit("resize-start", e), ["stop", "prevent"])
			}, null, 32)) : I("", !0)
		], 14, PR));
	}
}, IR = {
	key: 0,
	class: "nb-toolbar__group"
}, LR = [
	"title",
	"aria-label",
	"aria-pressed",
	"onClick"
], RR = ["innerHTML"], zR = ["innerHTML"], BR = {
	key: 1,
	class: "nb-toolbar__group"
}, VR = [
	"title",
	"aria-label",
	"onClick"
], HR = [
	"title",
	"aria-label",
	"onClick"
], UR = {
	key: 2,
	class: "nb-toolbar__group"
}, WR = [
	"title",
	"aria-label",
	"onClick"
], GR = ["innerHTML"], KR = { class: "nb-toolbar__group nb-toolbar__group--end" }, qR = { class: "nb-template" }, JR = ["value"], YR = ["value"], XR = ["disabled"], ZR = ["innerHTML"], QR = ["disabled"], $R = ["innerHTML"], ez = {
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
		},
		readOnly: {
			type: Boolean,
			default: !1
		},
		template: {
			type: String,
			default: "grid"
		},
		templates: {
			type: Array,
			default: () => []
		}
	},
	emits: [
		"update:tool",
		"update:color",
		"update:size",
		"update:template",
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
		}, s = Ba(() => t.tool === "highlighter" ? a : i), c = Ba(() => o[t.tool] ?? o.pen), l = [
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
		return (t, i) => (M(), N("div", {
			class: "nb-toolbar",
			role: "toolbar",
			"aria-label": "Werkzeuge",
			onMousedown: i[7] ||= Go(() => {}, ["prevent"])
		}, [
			e.readOnly ? I("", !0) : (M(), N("div", IR, [(M(), N(j, null, jr(r, (n) => P("button", {
				key: n.id,
				type: "button",
				class: D(["nb-tool", { "nb-tool--active": e.tool === n.id }]),
				title: n.label,
				"aria-label": n.label,
				"aria-pressed": e.tool === n.id,
				onClick: (e) => t.$emit("update:tool", n.id)
			}, [(M(), N("svg", {
				viewBox: "0 0 24 24",
				"aria-hidden": "true",
				innerHTML: n.icon
			}, null, 8, RR))], 10, LR)), 64)), P("button", {
				type: "button",
				class: "nb-tool",
				title: "Bild einfügen",
				"aria-label": "Bild einfügen",
				onClick: i[0] ||= (e) => t.$emit("insert-image")
			}, [(M(), N("svg", {
				viewBox: "0 0 24 24",
				"aria-hidden": "true",
				innerHTML: n.image
			}, null, 8, zR))])])),
			!e.readOnly && (e.tool === "pen" || e.tool === "highlighter") ? (M(), N("div", BR, [(M(!0), N(j, null, jr(s.value, (n) => (M(), N("button", {
				key: n,
				type: "button",
				class: D(["nb-swatch", { "nb-swatch--active": e.color === n }]),
				style: fe({ "--swatch": n }),
				title: "Farbe " + n,
				"aria-label": "Farbe " + n,
				onClick: (e) => t.$emit("update:color", n)
			}, null, 14, VR))), 128)), (M(!0), N(j, null, jr(c.value, (n) => (M(), N("button", {
				key: n.value,
				type: "button",
				class: D(["nb-tool nb-size", { "nb-tool--active": e.size === n.value }]),
				title: n.label,
				"aria-label": n.label,
				onClick: (e) => t.$emit("update:size", n.value)
			}, [P("span", { style: fe({
				width: n.dot + "px",
				height: n.dot + "px"
			}) }, null, 4)], 10, HR))), 128))])) : I("", !0),
			!e.readOnly && e.editor ? (M(), N("div", UR, [(M(), N(j, null, jr(l, (t) => P("button", {
				key: t.id,
				type: "button",
				class: D(["nb-tool", { "nb-tool--active": u(t) }]),
				title: t.label,
				"aria-label": t.label,
				onClick: (n) => t.run(e.editor.chain().focus()).run()
			}, [t.icon ? (M(), N("svg", {
				key: 0,
				viewBox: "0 0 24 24",
				"aria-hidden": "true",
				innerHTML: t.icon
			}, null, 8, GR)) : (M(), N("span", {
				key: 1,
				class: D(["nb-tool__text", t.textClass])
			}, Ee(t.text), 3))], 10, WR)), 64))])) : I("", !0),
			P("div", KR, [
				P("label", qR, [i[8] ||= P("span", null, "Vorlage", -1), P("select", {
					value: e.template,
					"aria-label": "Seitenvorlage",
					onChange: i[1] ||= (e) => t.$emit("update:template", e.target.value)
				}, [(M(!0), N(j, null, jr(e.templates, (e) => (M(), N("option", {
					key: e.id,
					value: e.id
				}, Ee(e.name), 9, YR))), 128))], 40, JR)]),
				e.readOnly ? I("", !0) : (M(), N("button", {
					key: 0,
					type: "button",
					class: "nb-tool",
					title: "Rückgängig (Strg+Z)",
					"aria-label": "Rückgängig",
					disabled: !e.canUndo,
					onClick: i[2] ||= (e) => t.$emit("undo")
				}, [(M(), N("svg", {
					viewBox: "0 0 24 24",
					"aria-hidden": "true",
					innerHTML: n.undo
				}, null, 8, ZR))], 8, XR)),
				e.readOnly ? I("", !0) : (M(), N("button", {
					key: 1,
					type: "button",
					class: "nb-tool",
					title: "Wiederholen (Strg+Y)",
					"aria-label": "Wiederholen",
					disabled: !e.canRedo,
					onClick: i[3] ||= (e) => t.$emit("redo")
				}, [(M(), N("svg", {
					viewBox: "0 0 24 24",
					"aria-hidden": "true",
					innerHTML: n.redo
				}, null, 8, $R))], 8, QR)),
				P("button", {
					type: "button",
					class: "nb-tool",
					title: "Verkleinern",
					"aria-label": "Verkleinern",
					onClick: i[4] ||= (e) => t.$emit("zoom", -1)
				}, "−"),
				P("button", {
					type: "button",
					class: "nb-tool nb-zoom",
					title: "Ansicht zurücksetzen",
					"aria-label": "Ansicht zurücksetzen",
					onClick: i[5] ||= (e) => t.$emit("zoom", 0)
				}, Ee(Math.round(e.zoom * 100)) + " % ", 1),
				P("button", {
					type: "button",
					class: "nb-tool",
					title: "Vergrößern",
					"aria-label": "Vergrößern",
					onClick: i[6] ||= (e) => t.$emit("zoom", 1)
				}, "+")
			])
		], 32));
	}
}, tz = { class: "nb-page" }, nz = {
	class: "nb-ink",
	"aria-hidden": "true"
}, rz = [
	"d",
	"fill",
	"fill-opacity"
], iz = [
	"d",
	"fill",
	"fill-opacity"
], az = ["points", "stroke-width"], oz = [
	"x",
	"y",
	"width",
	"height",
	"stroke-width"
], sz = { class: "nb-peer__name" }, cz = {
	key: 0,
	class: "nb-hint"
}, lz = .25, uz = 4, dz = 24, fz = {
	__name: "PageCanvas",
	props: {
		pageId: {
			type: Number,
			required: !0
		},
		sync: {
			type: Object,
			required: !0
		},
		peers: {
			type: Array,
			default: () => []
		},
		readOnly: {
			type: Boolean,
			default: !1
		},
		templates: {
			type: Array,
			default: () => []
		}
	},
	emits: ["change", "error"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ A(n.sync.read({
			elements: [],
			strokes: []
		})), a = /* @__PURE__ */ Vt({
			x: 48,
			y: 32,
			zoom: 1
		}), o = /* @__PURE__ */ A("text"), s = /* @__PURE__ */ Vt({
			pen: {
				color: "#1f2937",
				size: 2
			},
			highlighter: {
				color: "#facc15",
				size: 14
			}
		}), c = /* @__PURE__ */ Vt({}), l = /* @__PURE__ */ A(null), u = /* @__PURE__ */ A(""), d = !1, f = /* @__PURE__ */ $t(null), p = /* @__PURE__ */ A(0), m = /* @__PURE__ */ A(null), h = /* @__PURE__ */ A([]), g = /* @__PURE__ */ A({
			strokeIds: [],
			elementIds: []
		}), _ = /* @__PURE__ */ A(n.sync.canUndo), v = /* @__PURE__ */ A(n.sync.canRedo), y = /* @__PURE__ */ A(null), b = /* @__PURE__ */ A(null), x = /* @__PURE__ */ A(null), S = /* @__PURE__ */ A(null), C = /* @__PURE__ */ A("grid"), w = /* @__PURE__ */ new Map(), T = null, E = !1, ee = !1, te = null, ne = /* @__PURE__ */ new WeakMap(), re = Ba(() => s[o.value]?.color ?? s.pen.color), ie = Ba(() => s[o.value]?.size ?? s.pen.size), ae = Ba(() => new Set(g.value.strokeIds)), oe = Ba(() => new Set(g.value.elementIds)), se = Ba(() => Hm(i.value, g.value, c)), ce = Ba(() => {
			let e = [], t = [];
			for (let n of i.value.strokes) (n.tool === "highlighter" ? e : t).push(n);
			return e.concat(t);
		}), le = Ba(() => ({
			backgroundSize: `${dz * a.zoom}px ${dz * a.zoom}px`,
			backgroundPosition: `${a.x}px ${a.y}px`
		}));
		Yn(() => n.templates, (e) => {
			e.length > 0 && !e.some((e) => e.id === C.value) && (C.value = e[0].id);
		}, { immediate: !0 });
		function ue(e) {
			let t = ne.get(e);
			return t === void 0 && (t = Kg(e), ne.set(e, t)), t;
		}
		function de(e) {
			o.value = e, e !== "lasso" && Fe(), e !== "text" && f.value?.commands.blur();
		}
		function pe(e) {
			s[o.value] && (s[o.value].color = e);
		}
		function me(e) {
			s[o.value] && (s[o.value].size = e);
		}
		function he(e = !0) {
			e && ge(Jm);
		}
		function ge(e = Ym) {
			n.sync.commit(i.value, e), r("change", i.value);
		}
		function _e(e) {
			n.sync.read(i.value, e === "remote" ? te : null), e !== "remote" && r("change", i.value);
		}
		function ve() {
			_.value = n.sync.canUndo, v.value = n.sync.canRedo;
		}
		function ye() {
			Fe(), n.sync.undo();
		}
		function be() {
			Fe(), n.sync.redo();
		}
		function xe(e, t) {
			let n = y.value.getBoundingClientRect();
			return [Nm((e - n.left - a.x) / a.zoom), Nm((t - n.top - a.y) / a.zoom)];
		}
		function Se(e, t, n) {
			let r = y.value.getBoundingClientRect(), i = Math.min(uz, Math.max(lz, a.zoom * e)), o = t - r.left, s = n - r.top;
			a.x = o - (o - a.x) / a.zoom * i, a.y = s - (s - a.y) / a.zoom * i, a.zoom = i;
		}
		function Ce(e) {
			let t = y.value.getBoundingClientRect();
			e === 0 ? (a.x = 48, a.y = 32, a.zoom = 1) : Se(e > 0 ? 1.25 : .8, t.left + t.width / 2, t.top + t.height / 2);
		}
		function we(e) {
			e.preventDefault(), e.ctrlKey || e.metaKey ? Se(Math.exp(-e.deltaY * .01), e.clientX, e.clientY) : e.shiftKey ? a.x -= e.deltaY : (a.x -= e.deltaX, a.y -= e.deltaY);
		}
		function Te(e) {
			try {
				y.value.setPointerCapture(e.pointerId);
			} catch {}
		}
		function De() {
			return [...w.values()].filter((e) => e.type === "touch");
		}
		function Oe() {
			let [e, t] = De();
			T?.type === "stroke" && T.pointerType === "touch" && (m.value = null), T = {
				type: "pinch",
				distance: Math.hypot(e.x - t.x, e.y - t.y),
				center: [(e.x + t.x) / 2, (e.y + t.y) / 2]
			}, x.value = "pinch";
		}
		function ke(e) {
			if (e.button === 2) return;
			if (e.pointerType === "pen" && (E = !0), w.set(e.pointerId, {
				x: e.clientX,
				y: e.clientY,
				type: e.pointerType
			}), e.pointerType === "touch" && De().length === 2) {
				Oe();
				return;
			}
			if (T) return;
			if (n.readOnly) {
				Ae(e);
				return;
			}
			if (o.value === "text" && e.button !== 1 && e.target.closest(".nb-element")) return;
			let [t, r] = xe(e.clientX, e.clientY), i = [
				"pen",
				"highlighter",
				"eraser",
				"lasso"
			].includes(o.value), c = e.pointerType === "touch" && i && !E;
			if (e.button === 1 || ee || e.pointerType === "touch" && !c) Ae(e);
			else {
				if (e.pointerType === "pen" && (e.buttons & 32) == 32 || o.value === "eraser") e.preventDefault(), T = {
					type: "erase",
					pointerId: e.pointerId,
					radius: 8 / a.zoom,
					changed: !1
				}, Pe(t, r), Te(e);
				else if (o.value === "pen" || o.value === "highlighter") {
					e.preventDefault();
					let n = s[o.value];
					m.value = {
						id: jm(),
						tool: o.value,
						color: n.color,
						size: n.size,
						points: [[
							t,
							r,
							O(e)
						]],
						simulatePressure: e.pointerType !== "pen"
					}, T = {
						type: "stroke",
						pointerId: e.pointerId,
						pointerType: e.pointerType
					}, Te(e);
				} else if (o.value === "lasso") {
					e.preventDefault();
					let n = se.value;
					n && t >= n.minX && t <= n.maxX && r >= n.minY && r <= n.maxY ? T = {
						type: "move-selection",
						pointerId: e.pointerId,
						last: [t, r],
						moved: !1
					} : (Fe(), h.value = [[t, r]], T = {
						type: "lasso",
						pointerId: e.pointerId
					}), Te(e);
				} else T = {
					type: "tap",
					pointerId: e.pointerId,
					start: [e.clientX, e.clientY],
					world: [t, r]
				}, Te(e);
				x.value = T?.type ?? null;
			}
		}
		function Ae(e) {
			e.preventDefault(), T = {
				type: "pan",
				pointerId: e.pointerId,
				last: [e.clientX, e.clientY]
			}, x.value = "pan", Te(e);
		}
		function je(e, t, r) {
			T || o.value !== "text" || n.readOnly || (T = {
				type: r,
				pointerId: e.pointerId,
				element: t,
				start: xe(e.clientX, e.clientY),
				origin: {
					x: t.x,
					y: t.y,
					width: t.width,
					height: t.height
				},
				moved: !1
			}, x.value = r, Te(e));
		}
		function O(e) {
			return e.pointerType === "pen" && e.pressure > 0 ? Nm(e.pressure * 100) / 100 : .5;
		}
		function Me(e) {
			n.sync.setCursor(xe(e.clientX, e.clientY));
			let t = w.get(e.pointerId);
			if (t && (t.x = e.clientX, t.y = e.clientY), !T) return;
			if (T.type === "pinch") {
				let e = De();
				if (e.length < 2) return;
				let [t, n] = e, r = Math.hypot(t.x - n.x, t.y - n.y), i = [(t.x + n.x) / 2, (t.y + n.y) / 2];
				a.x += i[0] - T.center[0], a.y += i[1] - T.center[1], Se(r / T.distance, i[0], i[1]), T.distance = r, T.center = i;
				return;
			}
			if (e.pointerId !== T.pointerId) return;
			let [r, o] = xe(e.clientX, e.clientY);
			switch (T.type) {
				case "pan":
					a.x += e.clientX - T.last[0], a.y += e.clientY - T.last[1], T.last = [e.clientX, e.clientY];
					break;
				case "tap":
					Math.hypot(e.clientX - T.start[0], e.clientY - T.start[1]) > 6 && (T = {
						type: "pan",
						pointerId: e.pointerId,
						last: [e.clientX, e.clientY]
					}, x.value = "pan");
					break;
				case "stroke": {
					let t = e.getCoalescedEvents?.() ?? [e], n = m.value.points;
					for (let r of t.length > 0 ? t : [e]) {
						let [e, t] = xe(r.clientX, r.clientY), i = n[n.length - 1];
						Math.hypot(e - i[0], t - i[1]) >= .5 / a.zoom && n.push([
							e,
							t,
							O(r)
						]);
					}
					break;
				}
				case "erase":
					Pe(r, o);
					break;
				case "lasso":
					h.value.push([r, o]);
					break;
				case "move-selection": {
					let e = r - T.last[0], t = o - T.last[1];
					i.value = Um(i.value, g.value, e, t), T.last = [r, o], T.moved = !0;
					break;
				}
				case "move-element":
					T.element.x = Nm(T.origin.x + r - T.start[0]), T.element.y = Nm(T.origin.y + o - T.start[1]), T.moved = !0;
					break;
				case "resize-element": {
					let e = Math.max(80, T.origin.width + r - T.start[0]);
					T.element.type === "image" && (T.element.height = Nm(T.origin.height * (e / T.origin.width))), T.element.width = Nm(e), T.moved = !0;
					break;
				}
			}
		}
		function Ne(e) {
			if (w.delete(e.pointerId), T) {
				if (T.type === "pinch") De().length < 2 && (T = null, x.value = null);
				else if (e.pointerId === T.pointerId) {
					switch (T.type) {
						case "tap":
							We(T.world[0], T.world[1]);
							break;
						case "stroke":
							m.value && (i.value.strokes.push(m.value), m.value = null, he(!0));
							break;
						case "erase":
							he(T.changed);
							break;
						case "lasso":
							g.value = Vm(i.value, h.value, c), h.value = [];
							break;
						case "move-selection":
						case "move-element":
						case "resize-element": he(T.moved);
					}
					T = null, x.value = null;
				}
			}
		}
		function Pe(e, t) {
			let n = Im(i.value.strokes, e, t, T.radius);
			n.length !== i.value.strokes.length && (i.value.strokes = n, T.changed = !0);
		}
		function Fe() {
			g.value = {
				strokeIds: [],
				elementIds: []
			}, h.value = [];
		}
		function Ie(e) {
			let t = e.target.closest?.(".nb-element");
			(!n.readOnly || se.value || t) && (S.value = {
				x: Math.min(e.clientX, window.innerWidth - 180),
				y: Math.min(e.clientY, window.innerHeight - 120),
				point: xe(e.clientX, e.clientY),
				elementId: t?.dataset.elementId ?? null
			}, document.addEventListener("click", Le, { once: !0 }), document.addEventListener("keydown", Re));
		}
		function Le() {
			S.value = null, document.removeEventListener("keydown", Re);
		}
		function Re(e) {
			e.key === "Escape" && Le();
		}
		function ze() {
			let e = S.value?.point;
			Le(), !n.readOnly && e && We(e[0], e[1]);
		}
		function Be() {
			Le(), n.readOnly || b.value?.click();
		}
		function Ve() {
			Le(), !n.readOnly && se.value && (o.value = "lasso");
		}
		function He() {
			Le(), se.value && (i.value = Wm(i.value, g.value), Fe(), he(!0));
		}
		function Ue() {
			let e = S.value?.elementId;
			Le(), !n.readOnly && e && Ye(e);
		}
		function We(e, t) {
			let n = {
				id: jm(),
				type: "text",
				x: e,
				y: Nm(t - 12),
				width: 360,
				doc: null
			};
			i.value.elements.push(n), l.value = n.id, u.value = "", d = !0, he(!0);
		}
		function Ge(e, t) {
			e.doc = t, ge();
		}
		function Ke(e, t) {
			te = t.id, d = !1, u.value = "", f.value = e, e.on("transaction", Je);
		}
		function qe(e) {
			e.off("transaction", Je), te = null, n.sync.read(i.value), setTimeout(() => {
				f.value === e && !e.isFocused && (f.value = null);
			}, 0);
		}
		function Je() {
			p.value++;
		}
		function Ye(e) {
			i.value.elements = i.value.elements.filter((t) => t.id !== e), delete c[e], l.value === e && (l.value = null), ge();
		}
		async function Xe(e, t) {
			try {
				let { fileId: r } = await is.uploadImage(n.pageId, e), a = await Ze(e), o = Math.min(480, a.width), s = Nm(a.height * (o / a.width)), [c, l] = t ?? Qe();
				i.value.elements.push({
					id: jm(),
					type: "image",
					x: Nm(c - o / 2),
					y: Nm(l - s / 2),
					width: o,
					height: s,
					fileId: r
				}), he(!0);
			} catch (e) {
				r("error", e.message);
			}
		}
		function Ze(e) {
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
		function Qe() {
			let e = y.value.getBoundingClientRect();
			return xe(e.left + e.width / 2, e.top + e.height / 2);
		}
		function $e(e) {
			let [t] = e.target.files;
			t && Xe(t), e.target.value = "";
		}
		function et(e) {
			if (n.readOnly) return;
			let t = xe(e.clientX, e.clientY);
			for (let n of e.dataTransfer?.files ?? []) n.type.startsWith("image/") && Xe(n, t);
		}
		function tt(e) {
			return e.target.closest?.("input, textarea, [contenteditable=\"true\"]");
		}
		function nt(e) {
			if (d && e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
				e.preventDefault(), u.value += e.key;
				return;
			}
			if (e.code === "Space" && !tt(e)) {
				ee = !0, e.preventDefault();
				return;
			}
			if (tt(e) || n.readOnly) return;
			let t = e.ctrlKey || e.metaKey;
			t && e.key.toLowerCase() === "z" && !e.shiftKey ? (e.preventDefault(), ye()) : t && (e.key.toLowerCase() === "y" || e.shiftKey && e.key.toLowerCase() === "z") ? (e.preventDefault(), be()) : (e.key === "Delete" || e.key === "Backspace") && se.value ? (e.preventDefault(), i.value = Wm(i.value, g.value), Fe(), he(!0)) : e.key === "Escape" && Fe();
		}
		function rt(e) {
			e.code === "Space" && (ee = !1);
		}
		function it(e) {
			if (!(tt(e) || n.readOnly)) for (let t of e.clipboardData?.items ?? []) t.kind === "file" && t.type.startsWith("image/") && (e.preventDefault(), Xe(t.getAsFile()));
		}
		return xr(() => {
			n.sync.onChange = _e, n.sync.onHistory = ve, window.addEventListener("keydown", nt), window.addEventListener("keyup", rt), window.addEventListener("paste", it);
		}), wr(() => {
			Le(), n.sync.onChange = () => {}, n.sync.onHistory = () => {}, window.removeEventListener("keydown", nt), window.removeEventListener("keyup", rt), window.removeEventListener("paste", it);
		}), (t, n) => (M(), N("div", tz, [
			F(ez, {
				"read-only": e.readOnly,
				templates: e.templates,
				tool: o.value,
				color: re.value,
				size: ie.value,
				editor: f.value,
				"editor-tick": p.value,
				"can-undo": _.value,
				"can-redo": v.value,
				zoom: a.zoom,
				template: C.value,
				"onUpdate:tool": de,
				"onUpdate:color": pe,
				"onUpdate:size": me,
				"onUpdate:template": n[0] ||= (e) => C.value = e,
				onInsertImage: n[1] ||= (e) => b.value.click(),
				onUndo: ye,
				onRedo: be,
				onZoom: Ce
			}, null, 8, [
				"read-only",
				"templates",
				"tool",
				"color",
				"size",
				"editor",
				"editor-tick",
				"can-undo",
				"can-redo",
				"zoom",
				"template"
			]),
			P("div", {
				ref_key: "viewport",
				ref: y,
				class: D(["nb-canvas", [
					"nb-canvas--" + (e.readOnly ? "readonly" : o.value),
					"nb-canvas--template-" + C.value,
					{ "nb-canvas--panning": x.value === "pan" }
				]]),
				style: fe(le.value),
				onPointerdown: ke,
				onPointermove: Me,
				onPointerup: Ne,
				onPointercancel: Ne,
				onPointerleave: n[2] ||= (t) => e.sync.setCursor(null),
				onWheel: we,
				onContextmenu: Go(Ie, ["prevent", "stop"]),
				onDragover: n[3] ||= Go(() => {}, ["prevent"]),
				onDrop: Go(et, ["prevent"])
			}, [P("div", {
				class: "nb-world",
				style: fe({ transform: `translate(${a.x}px, ${a.y}px) scale(${a.zoom})` })
			}, [
				(M(!0), N(j, null, jr(i.value.elements, (t) => (M(), N(j, { key: t.id }, [t.type === "text" ? (M(), aa(FR, {
					key: 0,
					element: t,
					editable: !e.readOnly,
					autofocus: t.id === l.value,
					"initial-text": t.id === l.value ? u.value : "",
					selected: oe.value.has(t.id),
					onChange: (e) => Ge(t, e),
					onFocus: (e) => Ke(e, t),
					onBlur: qe,
					onRemove: (e) => Ye(t.id),
					onHeight: (e) => c[t.id] = e,
					onDragStart: (e) => je(e, t, "move-element"),
					onResizeStart: (e) => je(e, t, "resize-element")
				}, null, 8, [
					"element",
					"editable",
					"autofocus",
					"initial-text",
					"selected",
					"onChange",
					"onFocus",
					"onRemove",
					"onHeight",
					"onDragStart",
					"onResizeStart"
				])) : (M(), aa(Xg, {
					key: 1,
					element: t,
					src: nn(is).imageUrl(t.fileId),
					selected: oe.value.has(t.id),
					onDragStart: (e) => je(e, t, "move-element"),
					onResizeStart: (e) => je(e, t, "resize-element")
				}, null, 8, [
					"element",
					"src",
					"selected",
					"onDragStart",
					"onResizeStart"
				]))], 64))), 128)),
				(M(), N("svg", nz, [
					(M(!0), N(j, null, jr(ce.value, (e) => (M(), N("path", {
						key: e.id,
						d: ue(e),
						fill: e.color,
						"fill-opacity": nn(Gg)[e.tool]?.opacity ?? 1,
						class: D({
							"nb-ink--selected": ae.value.has(e.id),
							"nb-ink--black": e.color === "#1f2937" || e.color === "#000000"
						})
					}, null, 10, rz))), 128)),
					m.value ? (M(), N("path", {
						key: 0,
						d: nn(Kg)(m.value, !1),
						fill: m.value.color,
						"fill-opacity": nn(Gg)[m.value.tool].opacity,
						class: D({ "nb-ink--black": m.value.color === "#1f2937" || m.value.color === "#000000" })
					}, null, 10, iz)) : I("", !0),
					h.value.length > 1 ? (M(), N("polyline", {
						key: 1,
						class: "nb-lasso",
						points: h.value.map((e) => e.join(",")).join(" "),
						"stroke-width": 1.5 / a.zoom
					}, null, 8, az)) : I("", !0),
					se.value ? (M(), N("rect", {
						key: 2,
						class: "nb-selection",
						x: se.value.minX - 6,
						y: se.value.minY - 6,
						width: se.value.maxX - se.value.minX + 12,
						height: se.value.maxY - se.value.minY + 12,
						"stroke-width": 1.5 / a.zoom
					}, null, 8, oz)) : I("", !0)
				])),
				(M(!0), N(j, null, jr(e.peers.filter((e) => e.cursor), (e) => (M(), N("div", {
					key: e.id,
					class: "nb-peer",
					style: fe({
						transform: `translate(${e.cursor[0]}px, ${e.cursor[1]}px) scale(${1 / a.zoom})`,
						"--nb-peer": e.color
					})
				}, [n[5] ||= P("svg", {
					class: "nb-peer__pointer",
					viewBox: "0 0 16 16",
					"aria-hidden": "true"
				}, [P("path", { d: "M2 1l11 6-5 1.5L6 14z" })], -1), P("span", sz, Ee(e.name), 1)], 4))), 128))
			], 4), !e.readOnly && i.value.elements.length === 0 && i.value.strokes.length === 0 ? (M(), N("p", cz, " Irgendwo klicken und schreiben, mit dem Stift zeichnen oder Bilder hineinziehen. ")) : I("", !0)], 38),
			S.value ? (M(), N("div", {
				key: 0,
				class: "nb-context-menu",
				role: "menu",
				style: fe({
					left: S.value.x + "px",
					top: S.value.y + "px"
				}),
				onClick: n[4] ||= Go(() => {}, ["stop"])
			}, [
				e.readOnly ? I("", !0) : (M(), N("button", {
					key: 0,
					type: "button",
					role: "menuitem",
					onClick: ze
				}, "Text einfügen")),
				e.readOnly ? I("", !0) : (M(), N("button", {
					key: 1,
					type: "button",
					role: "menuitem",
					onClick: Be
				}, "Bild einfügen")),
				se.value && !S.value.elementId && !e.readOnly ? (M(), N("button", {
					key: 2,
					type: "button",
					role: "menuitem",
					onClick: Ve
				}, "Verschieben")) : I("", !0),
				S.value.elementId && !e.readOnly ? (M(), N("button", {
					key: 3,
					type: "button",
					role: "menuitem",
					class: "nb-context-menu__danger",
					onClick: Ue
				}, "Löschen")) : I("", !0),
				se.value ? (M(), N("button", {
					key: 4,
					type: "button",
					role: "menuitem",
					class: "nb-context-menu__danger",
					onClick: He
				}, "Auswahl löschen")) : I("", !0)
			], 4)) : I("", !0),
			P("input", {
				ref_key: "fileInput",
				ref: b,
				type: "file",
				accept: "image/png,image/jpeg,image/gif,image/webp",
				hidden: "",
				onChange: $e
			}, null, 544)
		]));
	}
}, pz = { class: "nb-main" }, mz = { class: "nb-main__header" }, hz = [
	"title",
	"aria-label",
	"aria-expanded"
], gz = ["readonly"], _z = { class: "nb-date" }, vz = ["aria-label"], yz = ["title"], bz = {
	key: 0,
	class: "nb-peers__more"
}, xz = {
	key: 1,
	class: "nb-pill"
}, Sz = {
	key: 2,
	class: "nb-empty"
}, Cz = { key: 1 }, wz = {
	class: "nb-choice",
	role: "radiogroup",
	"aria-label": "Art des Notizbuchs"
}, Tz = { class: "nb-field" }, Ez = ["placeholder"], Dz = ["disabled"], Oz = {
	key: 0,
	class: "nb-muted"
}, kz = ["disabled"], Az = { class: "nb-field" }, jz = ["value"], Mz = {
	key: 0,
	class: "nb-field"
}, Nz = ["disabled"], Pz = "austit-notebook-last", Fz = 800, Iz = {
	__name: "App",
	setup(e) {
		let t = [
			"Handouts",
			"Klassennotizen",
			"Hausaufgaben",
			"Tests"
		], n = /* @__PURE__ */ A([]), r = /* @__PURE__ */ A([]), i = /* @__PURE__ */ A(null), a = /* @__PURE__ */ A(null), o = /* @__PURE__ */ A(null), s = /* @__PURE__ */ A(null), c = /* @__PURE__ */ $t(null), l = /* @__PURE__ */ A([]), u = /* @__PURE__ */ A(0), d = /* @__PURE__ */ A(""), f = /* @__PURE__ */ A(!0), p = /* @__PURE__ */ A(!1), m = /* @__PURE__ */ A(window.innerWidth > 700), h = /* @__PURE__ */ A(null), g = /* @__PURE__ */ A("idle"), _ = /* @__PURE__ */ A(null), v = /* @__PURE__ */ A(null), y = /* @__PURE__ */ A(null), b = null, x = null, S = null, C = null, w = Ba(() => ({
			idle: "",
			dirty: "Nicht gespeichert …",
			saving: "Speichert …",
			saved: "Gespeichert",
			conflict: "Konflikt",
			error: "Nicht gespeichert"
		})[g.value]), T = Ba(() => {
			let e = s.value?.content.created;
			return e ? (/* @__PURE__ */ new Date(e * 1e3)).toLocaleString("de-DE", {
				dateStyle: "full",
				timeStyle: "short"
			}) : "";
		});
		function E(e, t = "error") {
			h.value = {
				text: e,
				type: t
			};
		}
		function ee() {
			try {
				window.localStorage.setItem(Pz, JSON.stringify({
					notebookId: i.value,
					sectionId: a.value,
					pageId: o.value
				}));
			} catch {}
		}
		function te() {
			try {
				return JSON.parse(window.localStorage.getItem(Pz) ?? "null") ?? {};
			} catch {
				return {};
			}
		}
		async function ne() {
			let e = await is.tree();
			n.value = e.notebooks, r.value = e.templates ?? [];
		}
		async function re({ notebookId: e = null, sectionId: t = null, pageId: r = null }) {
			await le();
			let c = n.value.find((t) => t.id === e) ?? n.value[0] ?? null, l = Km(c).map((e) => e.section), u = l.find((e) => e.id === t) ?? l[0] ?? null, d = u?.pages.find((e) => e.id === r) ?? u?.pages[0] ?? null;
			i.value = c?.id ?? null, a.value = u?.id ?? null, ((d?.id ?? null) !== o.value || s.value === null) && await ae(d?.id ?? null), ee(), window.innerWidth <= 700 && d && r && (m.value = !1);
		}
		function ie() {
			c.value?.stop(), c.value = null, l.value = [];
		}
		async function ae(e) {
			if (o.value = e, s.value = null, g.value = "idle", ie(), e !== null) try {
				let t = await is.getPage(e), n = Mm(t.content), r = new ch({
					pageId: e,
					content: n,
					canWrite: t.canWrite,
					api: is
				});
				if (r.onPeers = (e) => {
					l.value = e.map((e) => ({
						...e,
						color: nh(e.id)
					}));
				}, r.onReset = () => {
					E("Die Seite wurde an anderer Stelle ersetzt und neu geladen.", "info"), ae(e);
				}, o.value !== e || c.value !== null) {
					r.stop();
					return;
				}
				b = t.etag, c.value = r, s.value = {
					...t,
					content: n
				}, d.value = t.name, u.value++, await r.start(), o.value !== e && r.stop();
			} catch (e) {
				E(e.message);
			}
		}
		async function oe(e, t) {
			try {
				return await is.savePage(e, t, b);
			} catch (n) {
				if (!(n instanceof es) || n.status !== 409 || !c.value?.epoch) throw n;
				return b = (await is.getPage(e)).etag, is.savePage(e, t, b);
			}
		}
		function se(e) {
			s.value?.canWrite && (x = e, g.value = "dirty", clearTimeout(S), S = setTimeout(() => ce(), Fz));
		}
		async function ce() {
			if (clearTimeout(S), C && await C, g.value !== "dirty" || !x || o.value === null) return;
			let e = o.value, t = JSON.parse(JSON.stringify(x));
			g.value = "saving", C = oe(e, t).then((e) => {
				b = e.etag, g.value === "saving" && (g.value = "saved");
			}).catch((e) => {
				e instanceof es && e.status === 409 ? (g.value = "conflict", E("Diese Seite wurde inzwischen an anderer Stelle geändert.", "warning")) : (g.value = "error", E(e.message));
			}).finally(() => {
				C = null;
			}), await C;
		}
		async function le() {
			g.value === "dirty" ? await ce() : C && await C;
		}
		async function ue() {
			h.value = null, await ae(o.value);
		}
		async function de() {
			h.value = null, b = (await is.getPage(o.value)).etag, g.value = "dirty", await ce();
		}
		async function pe() {
			let e = d.value.trim();
			!s.value?.canWrite || e === "" || e === s.value.name ? d.value = s.value?.name ?? "" : await be({
				id: o.value,
				name: e
			});
		}
		async function me({ type: e, parentId: t }) {
			try {
				if (e === "section") {
					let { id: e } = await is.createSection(t, "Neuer Abschnitt");
					await is.createPage(e, "Unbenannte Seite"), await ne(), await re({
						notebookId: i.value,
						sectionId: e
					});
				} else {
					let { id: e } = await is.createPage(t, "Unbenannte Seite");
					await ne(), await re({
						notebookId: i.value,
						sectionId: t,
						pageId: e
					});
				}
			} catch (e) {
				E(e.message);
			}
		}
		function he() {
			_.value = {
				kind: "personal",
				name: "",
				members: []
			};
		}
		async function ge() {
			let e = _.value;
			p.value = !0;
			try {
				let t;
				if (e.kind === "class") {
					let n = e.members.map(({ type: e, id: t, role: n }) => ({
						type: e,
						id: t,
						role: n
					}));
					t = (await is.createClassNotebook(e.name || "Klassennotizbuch", n)).id;
				} else {
					t = (await is.createNotebook(e.name || "Mein Notizbuch")).id;
					let n = await is.createSection(t, "Allgemein");
					await is.createPage(n.id, "Erste Seite");
				}
				_.value = null, await ne(), await re({ notebookId: t });
			} catch (e) {
				E(e.message);
			} finally {
				p.value = !1;
			}
		}
		async function _e(e) {
			v.value = {
				notebook: e,
				members: [],
				loading: !0
			};
			try {
				let { members: t } = await is.getMembers(e.id);
				v.value = {
					notebook: e,
					members: t,
					loading: !1
				};
			} catch (e) {
				v.value = null, E(e.message);
			}
		}
		async function ve() {
			p.value = !0;
			try {
				let { notebook: e, members: t } = v.value;
				await is.setMembers(e.id, t.map(({ type: e, id: t, role: n }) => ({
					type: e,
					id: t,
					role: n
				}))), v.value = null, await ne(), E("Mitglieder gespeichert.", "info");
			} catch (e) {
				E(e.message);
			} finally {
				p.value = !1;
			}
		}
		async function ye() {
			let e = y.value, t = e.section || e.custom.trim();
			if (t) {
				p.value = !0;
				try {
					await le();
					let { count: e } = await is.distributePage(o.value, t);
					y.value = null, await ne(), E(e === 0 ? "Es gibt noch keine Schüler:innen in diesem Notizbuch." : `Seite an ${e} Schüler:innen verteilt (Abschnitt „${t}“).`, e === 0 ? "warning" : "info");
				} catch (e) {
					E(e.message);
				} finally {
					p.value = !1;
				}
			}
		}
		async function be({ id: e, name: t }) {
			try {
				await le();
				let n = await is.rename(e, t);
				await ne(), e === o.value && await ae(n.id);
			} catch (e) {
				E(e.message);
			}
		}
		async function xe({ id: e }) {
			try {
				e === o.value && (clearTimeout(S), g.value = "idle"), await is.remove(e);
				let t = [
					i.value,
					a.value,
					o.value
				].includes(e);
				await ne(), t && (s.value = null, await re({
					notebookId: e === i.value ? null : i.value,
					sectionId: e === a.value || e === i.value ? null : a.value
				})), E("In den Papierkorb verschoben.", "info");
			} catch (e) {
				E(e.message);
			}
		}
		function Se(e) {
			(g.value === "dirty" || g.value === "saving") && (ce(), e.preventDefault(), e.returnValue = "");
		}
		return xr(async () => {
			window.addEventListener("beforeunload", Se);
			try {
				await ne(), await re(te());
			} catch (e) {
				E(e.message);
			} finally {
				f.value = !1;
			}
		}), wr(() => {
			ie(), window.removeEventListener("beforeunload", Se);
		}), (e, b) => (M(), N("div", { class: D(["nb-app", { "nb-app--nav-hidden": !m.value }]) }, [
			Hn(F(tg, {
				notebooks: n.value,
				"notebook-id": i.value,
				"section-id": a.value,
				"page-id": o.value,
				onSelect: re,
				onCreate: me,
				onCreateNotebook: he,
				onRename: be,
				onRemove: xe,
				onMembers: _e
			}, null, 8, [
				"notebooks",
				"notebook-id",
				"section-id",
				"page-id"
			]), [[to, m.value]]),
			P("main", pz, [
				P("header", mz, [
					P("button", {
						type: "button",
						class: "nb-icon-button",
						title: m.value ? "Navigation ausblenden" : "Navigation einblenden",
						"aria-label": m.value ? "Navigation ausblenden" : "Navigation einblenden",
						"aria-expanded": m.value,
						onClick: b[0] ||= (e) => m.value = !m.value
					}, [F(Dh, { name: "panel" })], 8, hz),
					o.value && s.value ? (M(), N(j, { key: 0 }, [
						Hn(P("input", {
							"onUpdate:modelValue": b[1] ||= (e) => d.value = e,
							class: "nb-title",
							"aria-label": "Seitentitel",
							maxlength: "120",
							readonly: !s.value.canWrite,
							onBlur: pe,
							onKeydown: b[2] ||= qo(Go((e) => e.target.blur(), ["prevent"]), ["enter"])
						}, null, 40, gz), [[Lo, d.value]]),
						P("span", _z, Ee(T.value), 1),
						l.value.length > 0 ? (M(), N("span", {
							key: 0,
							class: "nb-peers",
							"aria-label": "Ebenfalls auf dieser Seite: " + l.value.map((e) => e.name).join(", ")
						}, [(M(!0), N(j, null, jr(l.value.slice(0, 5), (e) => (M(), N("span", {
							key: e.id,
							class: "nb-peers__avatar",
							style: fe({ background: e.color }),
							title: e.name
						}, Ee(e.name.trim().charAt(0).toUpperCase()), 13, yz))), 128)), l.value.length > 5 ? (M(), N("span", bz, "+" + Ee(l.value.length - 5), 1)) : I("", !0)], 8, vz)) : I("", !0),
						s.value.canWrite ? I("", !0) : (M(), N("span", xz, "Nur lesen")),
						s.value.canDistribute ? (M(), N("button", {
							key: 2,
							type: "button",
							class: "nb-button",
							onClick: b[3] ||= (e) => y.value = {
								section: "Hausaufgaben",
								custom: ""
							}
						}, " Seite verteilen ")) : I("", !0)
					], 64)) : I("", !0),
					P("span", {
						class: D(["nb-status", "nb-status--" + g.value]),
						role: "status",
						"aria-live": "polite"
					}, Ee(w.value), 3)
				]),
				h.value ? (M(), N("div", {
					key: 0,
					class: D(["nb-banner", "nb-banner--" + h.value.type]),
					role: "alert"
				}, [P("span", null, Ee(h.value.text), 1), g.value === "conflict" ? (M(), N(j, { key: 0 }, [P("button", {
					type: "button",
					class: "nb-button",
					onClick: ue
				}, "Neu laden"), P("button", {
					type: "button",
					class: "nb-button nb-button--primary",
					onClick: de
				}, "Meine Version behalten")], 64)) : (M(), N("button", {
					key: 1,
					type: "button",
					class: "nb-icon-button",
					"aria-label": "Meldung schließen",
					onClick: b[4] ||= (e) => h.value = null
				}, "×"))], 2)) : I("", !0),
				o.value && s.value && c.value ? (M(), aa(fz, {
					key: o.value + ":" + u.value,
					"page-id": o.value,
					sync: c.value,
					peers: l.value,
					"read-only": !s.value.canWrite,
					templates: r.value,
					onChange: se,
					onError: b[5] ||= (e) => E(e)
				}, null, 8, [
					"page-id",
					"sync",
					"peers",
					"read-only",
					"templates"
				])) : f.value ? I("", !0) : (M(), N("div", Sz, [n.value.length === 0 ? (M(), N(j, { key: 0 }, [
					b[19] ||= P("h2", null, "Willkommen bei deinen Notizbüchern", -1),
					b[20] ||= P("p", null, "Text, Bilder und Handschrift frei auf einer unbegrenzten Seite – wie auf Papier, nur ohne Rand.", -1),
					P("button", {
						type: "button",
						class: "nb-button nb-button--primary",
						onClick: he
					}, "Erstes Notizbuch anlegen")
				], 64)) : (M(), N("p", Cz, "Wähle links eine Seite aus oder lege eine neue an."))]))
			]),
			_.value ? (M(), aa(Th, {
				key: 0,
				title: "Neues Notizbuch",
				onClose: b[11] ||= (e) => _.value = null
			}, {
				footer: Vn(() => [P("button", {
					type: "button",
					class: "nb-button",
					onClick: b[10] ||= (e) => _.value = null
				}, "Abbrechen"), P("button", {
					type: "button",
					class: "nb-button nb-button--primary",
					disabled: p.value,
					onClick: ge
				}, "Anlegen", 8, Dz)]),
				default: Vn(() => [
					P("div", wz, [P("label", { class: D(["nb-choice__option", { "nb-choice__option--active": _.value.kind === "personal" }]) }, [
						Hn(P("input", {
							"onUpdate:modelValue": b[6] ||= (e) => _.value.kind = e,
							type: "radio",
							value: "personal"
						}, null, 512), [[Ro, _.value.kind]]),
						b[21] ||= P("strong", null, "Persönliches Notizbuch", -1),
						b[22] ||= P("span", null, "Für deine eigenen Notizen. Teilen kannst du es später.", -1)
					], 2), P("label", { class: D(["nb-choice__option", { "nb-choice__option--active": _.value.kind === "class" }]) }, [
						Hn(P("input", {
							"onUpdate:modelValue": b[7] ||= (e) => _.value.kind = e,
							type: "radio",
							value: "class"
						}, null, 512), [[Ro, _.value.kind]]),
						b[23] ||= P("strong", null, "Klassennotizbuch", -1),
						b[24] ||= P("span", null, "Mit Inhaltsbibliothek, Platz für Zusammenarbeit, Bereich nur für Lehrkräfte und einem eigenen Bereich für jede:n Schüler:in.", -1)
					], 2)]),
					P("label", Tz, [b[25] ||= P("span", null, "Name", -1), Hn(P("input", {
						"onUpdate:modelValue": b[8] ||= (e) => _.value.name = e,
						type: "text",
						maxlength: "120",
						placeholder: _.value.kind === "class" ? "z. B. Mathe 7b" : "z. B. Projekt X"
					}, null, 8, Ez), [[Lo, _.value.name]])]),
					_.value.kind === "class" ? (M(), aa(xh, {
						key: 0,
						modelValue: _.value.members,
						"onUpdate:modelValue": b[9] ||= (e) => _.value.members = e,
						onError: E
					}, null, 8, ["modelValue"])) : I("", !0)
				]),
				_: 1
			})) : I("", !0),
			v.value ? (M(), aa(Th, {
				key: 1,
				title: "Mitglieder von " + v.value.notebook.name,
				onClose: b[14] ||= (e) => v.value = null
			}, {
				footer: Vn(() => [P("button", {
					type: "button",
					class: "nb-button",
					onClick: b[13] ||= (e) => v.value = null
				}, "Abbrechen"), P("button", {
					type: "button",
					class: "nb-button nb-button--primary",
					disabled: p.value || v.value.loading,
					onClick: ve
				}, "Speichern", 8, kz)]),
				default: Vn(() => [v.value.loading ? (M(), N("p", Oz, "Lädt …")) : (M(), aa(xh, {
					key: 1,
					modelValue: v.value.members,
					"onUpdate:modelValue": b[12] ||= (e) => v.value.members = e,
					onError: E
				}, null, 8, ["modelValue"]))]),
				_: 1
			}, 8, ["title"])) : I("", !0),
			y.value ? (M(), aa(Th, {
				key: 2,
				title: "Seite verteilen",
				onClose: b[18] ||= (e) => y.value = null
			}, {
				footer: Vn(() => [P("button", {
					type: "button",
					class: "nb-button",
					onClick: b[17] ||= (e) => y.value = null
				}, "Abbrechen"), P("button", {
					type: "button",
					class: "nb-button nb-button--primary",
					disabled: p.value,
					onClick: ye
				}, "Verteilen", 8, Nz)]),
				default: Vn(() => [
					P("p", null, "Jede:r Schüler:in erhält eine eigene Kopie von „" + Ee(s.value?.name) + "“ in diesem Abschnitt:", 1),
					P("label", Az, [b[27] ||= P("span", null, "Abschnitt", -1), Hn(P("select", { "onUpdate:modelValue": b[15] ||= (e) => y.value.section = e }, [(M(), N(j, null, jr(t, (e) => P("option", {
						key: e,
						value: e
					}, Ee(e), 9, jz)), 64)), b[26] ||= P("option", { value: "" }, "Anderer Abschnitt …", -1)], 512), [[zo, y.value.section]])]),
					y.value.section === "" ? (M(), N("label", Mz, [b[28] ||= P("span", null, "Name des Abschnitts", -1), Hn(P("input", {
						"onUpdate:modelValue": b[16] ||= (e) => y.value.custom = e,
						type: "text",
						maxlength: "120"
					}, null, 512), [[Lo, y.value.custom]])])) : I("", !0)
				]),
				_: 1
			})) : I("", !0)
		], 2));
	}
}, Lz = document.getElementById("austit-notebook");
Lz && Zo(Iz).mount(Lz);
