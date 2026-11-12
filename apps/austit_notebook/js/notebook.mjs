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
}, te = /-\w/g, E = /* @__PURE__ */ T((e) => e.replace(te, (e) => e.slice(1).toUpperCase())), ne = /\B([A-Z])/g, re = /* @__PURE__ */ T((e) => e.replace(ne, "-$1").toLowerCase()), ie = /* @__PURE__ */ T((e) => e.charAt(0).toUpperCase() + e.slice(1)), ae = /* @__PURE__ */ T((e) => e ? `on${ie(e)}` : ""), oe = (e, t) => !Object.is(e, t), se = (e, ...t) => {
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
	let r = za(Rn), i = e.dirs ||= [];
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
	if (wa) {
		let n = wa.provides, r = wa.parent && wa.parent.provides;
		r === n && (n = wa.provides = Object.create(r)), n[e] = t;
	}
}
function Gn(e, t, n = !1) {
	let r = Ta();
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
	if (ja) {
		if (c === "sync") {
			let e = qn();
			f = e.__watcherHandles ||= [];
		} else if (!d) {
			let e = () => {};
			return e.stop = r, e.resume = r, e.pause = r, e;
		}
	}
	let p = wa;
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
	return ja && (f ? f.push(h) : d && h()), h;
}
function Zn(e, t, n) {
	let r = this.proxy, i = g(e) ? e.includes(".") ? Qn(r, e) : () => r[e] : e.bind(r, r), a;
	h(t) ? a = t : (a = t.handler, n = t);
	let o = Oa(this), s = Xn(i, a.bind(r), n);
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
	let s = a.shapeFlag & 4 ? za(a.component) : a.el, l = o ? null : s, { i: f, r: p } = e, m = n && n.r, _ = f.refs === t ? f.refs = {} : f.refs, v = f.setupState, y = /* @__PURE__ */ k(v), b = v === t ? i : (e) => !cr(_, e) && u(y, e), x = (e, t) => !(t && cr(_, t));
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
function gr(e, t, n = wa) {
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
function vr(e, t, n = wa, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			Je();
			let i = Oa(n), a = _n(t, n, e, r);
			return i(), Ye(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var yr = (e) => (t, n = wa) => {
	ja && e !== "sp" || vr(e, (...e) => t(...e), n);
}, br = yr("bm"), xr = yr("m"), Sr = yr("bu"), Cr = yr("u"), wr = yr("bum"), Tr = yr("um"), Er = yr("sp"), Dr = yr("rtg"), Or = yr("rtc");
function kr(e, t = wa) {
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
		return t !== "default" && (e.name = t), M(), aa(j, null, [ua("slot", e, r && r())], i ? -2 : 64);
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
var Fr = (e) => e ? Aa(e) ? za(e) : Fr(e.parent) : null, Ir = /* @__PURE__ */ s(/* @__PURE__ */ Object.create(null), {
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
	let { data: a, computed: o, methods: s, watch: c, provide: l, inject: u, created: f, beforeMount: p, mounted: m, beforeUpdate: g, updated: _, activated: y, deactivated: b, beforeDestroy: x, beforeUnmount: S, destroyed: C, unmounted: w, render: ee, renderTracked: T, renderTriggered: te, errorCaptured: E, serverPrefetch: ne, expose: re, inheritAttrs: ie, components: ae, directives: oe, filters: se } = t;
	if (u && Hr(u, i, null), s) for (let e in s) {
		let t = s[e];
		h(t) && (i[e] = t.bind(n));
	}
	if (a) {
		let t = a.call(n, n);
		v(t) && (e.data = /* @__PURE__ */ Vt(t));
	}
	if (Br = !0, o) for (let e in o) {
		let t = o[e], a = Va({
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
	if (ce(br, p), ce(xr, m), ce(Sr, g), ce(Cr, _), ce(mr, y), ce(hr, b), ce(kr, E), ce(Or, T), ce(Dr, te), ce(wr, S), ce(Tr, w), ce(Er, ne), d(re)) {
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
	ee && e.render === r && (e.render = ee), ie != null && (e.inheritAttrs = ie), ae && (e.components = ae), oe && (e.directives = oe), ne && sr(e);
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
			version: Ua,
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
					let u = l._ceVNode || ua(n, r);
					return u.appContext = i, s === !0 ? s = "svg" : s === !1 && (s = void 0), o && t ? t(u, a) : e(u, a, s), c = !0, l._container = a, a.__vue_app__ = l, za(u.component);
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
var ii = null, ai = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${E(t)}Modifiers`] || e[`${re(t)}Modifiers`];
function oi(e, n, ...r) {
	if (e.isUnmounted) return;
	let i = e.vnode.props || t, a = r, o = n.startsWith("update:"), s = o && ai(i, n.slice(7));
	s && (s.trim && (a = r.map((e) => g(e) ? e.trim() : e)), s.number && (a = a.map(le)));
	let c, l = i[c = ae(n)] || i[c = ae(E(n))];
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
			v = ha(u.call(t, e, d, f, m, p, h)), y = c;
		} else {
			let e = t;
			v = ha(e.length > 1 ? e(f, {
				attrs: c,
				slots: s,
				emit: l
			}) : e(f, null)), y = t.props ? c : fi(c);
		}
	} catch (t) {
		$i.length = 0, vn(t, e, 1), v = ua(Zi);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(o) && (y = pi(y, a)), b = pa(b, y, !1, !0));
	}
	return n.dirs && (b = pa(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && ir(er(b.type) && rr(b) || b, n.transition), v = b, Bn(_), v;
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
						let t = E(o);
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
		if (ee(t)) continue;
		let l = n[t], d;
		a && u(a, d = E(t)) ? !o || !o.includes(d) ? r[d] = l : (c ||= {})[d] = l : li(e.emitsOptions, t) || t in i && l === i[t] || (i[t] = l, s = !0);
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
					let o = Oa(i);
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
		let n = E(c[e]);
		Di(n) && (l[n] = t);
	}
	else if (c) for (let e in c) {
		let t = E(e);
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
	return e[0] !== "$" && !ee(e);
}
var Oi = (e) => e === "_" || e === "_ctx" || e === "$stable", ki = (e) => d(e) ? e.map(ha) : [ha(e)], Ai = (e, t, n) => {
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
		if (d = e.el = l(e.type, a, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && E(e.children, d, null, r, i, zi(e, a), s, u), _ && Un(e, null, r, "created"), te(d, e, e.scopeId, s, r), m) {
			for (let e in m) e !== "value" && !ee(e) && c(d, e, null, m[e], a, r);
			"value" in m && c(d, "value", null, m.value, a), (f = m.onVnodeBeforeMount) && ya(f, r, e);
		}
		_ && Un(e, null, r, "beforeMount");
		let v = Vi(i, g);
		v ? g.beforeEnter(d) : g && !g.persisted && (d[Ji] = !0), o(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && Ii(() => {
			try {
				f && ya(f, r, e), v && g.enter(d), _ && Un(e, null, r, "mounted");
			} finally {}
		}, i);
	}, te = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || qi(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				te(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, E = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) {
			let c = e[l] = s ? ga(e[l]) : ha(e[l]);
			v(null, c, t, n, r, i, a, o, s);
		}
	}, ne = (e, n, r, i, a, o, s) => {
		let l = n.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = n;
		u |= e.patchFlag & 16;
		let m = e.props || t, h = n.props || t, g;
		if (r && Bi(r, !1), (g = h.onVnodeBeforeUpdate) && ya(g, r, n, e), f && Un(n, e, r, "beforeUpdate"), r && Bi(r, !0), d && (!e.dynamicChildren || e.dynamicChildren.length !== d.length) && (u = 0, s = !1, d = null), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? re(e.dynamicChildren, d, l, r, i, zi(n, a), o) : s || pe(e, n, l, null, r, i, zi(n, a), o, !1), u > 0) {
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
			g && ya(g, r, n, e), f && Un(n, e, r, "updated");
		}, i);
	}, re = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s], u = c.el || Ki(c), d = u && (c.type === j || !sa(c, l) || c.shapeFlag & 198) ? m(u) : n;
			v(c, l, d, null, r, i, a, o, !0);
		}
	}, ie = (e, n, r, i, a) => {
		if (n !== r) {
			if (n !== t) for (let t in n) !ee(t) && !(t in r) && c(e, t, n[t], null, a, i);
			for (let t in r) {
				if (ee(t)) continue;
				let o = r[t], s = n[t];
				o !== s && t !== "value" && c(e, t, s, o, a, i);
			}
			"value" in r && c(e, "value", n.value, r.value, a);
		}
	}, ae = (e, t, n, r, i, a, s, c, l) => {
		let d = t.el = e ? e.el : u(""), f = t.anchor = e ? e.anchor : u(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
		h && (c = c ? c.concat(h) : h), e == null ? (o(d, n, r), o(f, n, r), E(t.children || [], n, f, i, a, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (re(e.dynamicChildren, m, n, i, a, s, c), (t.key != null || i && t === i.subTree) && Hi(e, t, !0)) : pe(e, t, n, f, i, a, s, c, l);
	}, oe = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : ce(t, n, r, i, a, o, c) : le(e, t, c);
	}, ce = (e, t, n, r, i, a, o) => {
		let s = e.component = Ca(e, r, i);
		if (pr(e) && (s.ctx.renderer = Ce), Ma(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, ue, o, a), !e.el) {
				let r = s.subTree = ua(Zi);
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
				Bi(e, !1), t ? (t.el = c.el, fe(e, t, o)) : t = c, n && se(n), (d = t.props && t.props.onVnodeBeforeUpdate) && ya(d, s, t, c), Bi(e, !0);
				let f = ui(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el || Ki(p)), xe(p), e, i, a), t.el = f.el, u === null && _i(e, f.el), r && Ii(r, i), (d = t.props && t.props.onVnodeUpdated) && Ii(() => ya(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = fr(t);
				if (Bi(e, !1), l && se(l), !m && (o = c && c.onVnodeBeforeMount) && ya(o, d, t), Bi(e, !0), s && Te) {
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
					Ii(() => ya(o, d, e), i);
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
		m & 8 ? (u & 16 && be(l, i, a), d !== l && p(n, d)) : u & 16 ? m & 16 ? he(l, d, n, r, i, a, o, s, c) : be(l, i, a, !0) : (u & 8 && p(n, ""), m & 16 && E(d, n, r, i, a, o, s, c));
	}, me = (e, t, r, i, a, o, s, c, l) => {
		e ||= n, t ||= n;
		let u = e.length, d = t.length, f = Math.min(u, d), p = 0;
		for (; p < f; p++) {
			let n = t[p] = l ? ga(t[p]) : ha(t[p]);
			v(e[p], n, r, null, a, o, s, c, l);
		}
		u > d ? be(e, a, o, !0, !1, f) : E(t, r, i, a, o, s, c, l, f);
	}, he = (e, t, r, i, a, o, s, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let n = e[u], i = t[u] = l ? ga(t[u]) : ha(t[u]);
			if (sa(n, i)) v(n, i, r, null, a, o, s, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let n = e[f], i = t[p] = l ? ga(t[p]) : ha(t[p]);
			if (sa(n, i)) v(n, i, r, null, a, o, s, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, n = e < d ? t[e].el : i;
				for (; u <= p;) v(null, t[u] = l ? ga(t[u]) : ha(t[u]), r, n, a, o, s, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) D(e[u], a, o, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? ga(t[u]) : ha(t[u]);
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
		if (g && (_ = o && o.onVnodeBeforeUnmount) && ya(_, t, e), u & 6) ye(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && Un(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, Ce, r) : l && !l.hasOnce && (a !== j || d > 0 && d & 64) ? be(l, t, n, !1, !0) : (a === j && d & 384 || !i && u & 16) && be(c, t, n), r && _e(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && Ii(() => {
			_ && ya(_, t, e), h && Un(e, null, t, "unmounted"), v && (e.el = null);
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
		}, e && t._vnode ? void 0 : e && e.component ? e.component.uid : Sa());
	}, Ce = {
		p: v,
		um: D,
		m: ge,
		r: _e,
		mt: ce,
		mc: E,
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
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = ga(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && Hi(t, a)), a.type === Xi && (a.patchFlag === -1 && (a = i[e] = ga(a)), a.el = t.el), a.type === Zi && !a.el && (a.el = t.el);
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
	return ia(ua(e, t, n, r, i, !0));
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
	return s ? (_a(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= g(n) ? 8 : 16), na > 0 && !o && ea && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && ea.push(c), c;
}
var ua = da;
function da(e, t = null, n = null, r = 0, i = null, a = !1) {
	if (e && e !== Ar || (e = Zi), oa(e)) {
		let r = pa(e, t, !0);
		return n && _a(r, n), na > 0 && !a && ea && (r.shapeFlag & 6 ? ea[ea.indexOf(e)] = r : ea.push(r)), r.patchFlag = -2, r;
	}
	if (Ba(e) && (e = e.__vccOpts), t) {
		t = fa(t);
		let { class: e, style: n } = t;
		e && !g(e) && (t.class = D(e)), v(n) && (/* @__PURE__ */ Jt(n) && !d(n) && (n = s({}, n)), t.style = fe(n));
	}
	let o = g(e) ? 1 : qi(e) ? 128 : er(e) ? 64 : v(e) ? 4 : h(e) ? 2 : 0;
	return P(e, t, n, r, i, o, a, !0);
}
function fa(e) {
	return e ? /* @__PURE__ */ Jt(e) ? s({}, e) : bi(e) ? s({}, e[Ia] || e) : e : null;
}
function pa(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? va(i || {}, t) : i, u = {
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
		ssContent: e.ssContent && pa(e.ssContent),
		ssFallback: e.ssFallback && pa(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce,
		cacheIndex: e.cacheIndex
	};
	return c && r && ir(u, c.clone(u)), u;
}
function ma(e = " ", t = 0) {
	return ua(Xi, null, e, t);
}
function F(e = "", t = !1) {
	return t ? (M(), aa(Zi, null, e)) : ua(Zi, null, e);
}
function ha(e) {
	return e == null || typeof e == "boolean" ? ua(Zi) : d(e) ? ua(j, null, e.slice()) : oa(e) ? ga(e) : ua(Xi, null, String(e));
}
function ga(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : pa(e);
}
function _a(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (d(t)) n = 16;
	else if (typeof t == "object") {
		if (r & 65) {
			let n = t.default;
			n && (n._c && (n._d = !1), _a(e, n()), n._c && (n._d = !0));
			return;
		}
		{
			n = 32;
			let r = t._;
			!r && !bi(t) ? t._ctx = Rn : r === 3 && Rn && (Rn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
		}
	} else if (h(t)) {
		if (r & 65) {
			_a(e, { default: t });
			return;
		}
		t = {
			default: t,
			_ctx: Rn
		}, n = 32;
	} else t = String(t), r & 64 ? (n = 16, t = [ma(t)]) : n = 8;
	e.children = t, e.shapeFlag |= n;
}
function va(...e) {
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
function ya(e, t, n, r = null) {
	_n(e, t, 7, [n, r]);
}
var ba = /* @__PURE__ */ ti(), xa = 0;
function Sa() {
	return xa;
}
function Ca(e, n, r) {
	let i = e.type, a = (n ? n.appContext : e.appContext) || ba, o = {
		uid: xa++,
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
var wa = null, Ta = () => wa || Rn, Ea, Da;
{
	let e = de(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	Ea = t("__VUE_INSTANCE_SETTERS__", (e) => wa = e), Da = t("__VUE_SSR_SETTERS__", (e) => ja = e);
}
var Oa = (e) => {
	let t = wa;
	return Ea(e), e.scope.on(), () => {
		e.scope.off(), Ea(t);
	};
}, ka = () => {
	wa && wa.scope.off(), Ea(null);
};
function Aa(e) {
	return e.vnode.shapeFlag & 4;
}
var ja = !1;
function Ma(e, t = !1, n = !1) {
	t && Da(t);
	let { props: r, children: i } = e.vnode, a = Aa(e);
	xi(e, r, a, t), Pi(e, i, n || t);
	let o = a ? Na(e, t) : void 0;
	return t && Da(!1), o;
}
function Na(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Rr);
	let { setup: r } = n;
	if (r) {
		Je();
		let n = e.setupContext = r.length > 1 ? Ra(e) : null, i = Oa(e), a = gn(r, e, 0, [e.props, n]), o = y(a);
		if (Ye(), i(), (o || e.sp) && !fr(e) && sr(e), o) {
			if (a.then(ka, ka), t) return a.then((n) => {
				Da(!0);
				try {
					Pa(e, n, t);
				} finally {
					Da(!1);
				}
			}).catch((t) => {
				vn(t, e, 0, void 0, !0), e.ssrRender = (e, t) => t("<!---->");
			});
			e.asyncDep = a;
		} else Pa(e, a, t);
	} else Fa(e, t);
}
function Pa(e, t, n) {
	h(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : v(t) && (e.setupState = an(t)), Fa(e, n);
}
function Fa(e, t, n) {
	let i = e.type;
	e.render ||= i.render || r;
	{
		let t = Oa(e);
		Je();
		try {
			Vr(e);
		} finally {
			Ye(), t();
		}
	}
}
var Ia = /* @__PURE__ */ Symbol(), La = { get(e, t) {
	return at(e, "get", ""), t === Ia ? e : e[t];
} };
function Ra(e) {
	return {
		attrs: new Proxy(e.attrs, La),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function za(e) {
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
function Ba(e) {
	return h(e) && "__vccOpts" in e;
}
var Va = (e, t) => /* @__PURE__ */ ln(e, t, ja);
function Ha(e, t, n) {
	try {
		ra(-1);
		let r = arguments.length;
		return r === 2 ? v(t) && !d(t) ? oa(t) ? ua(e, null, [t]) : ua(e, t) : ua(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && oa(n) && (n = [n]), ua(e, t, n));
	} finally {
		ra(1);
	}
}
var Ua = "3.5.45", Wa = void 0, Ga = typeof window < "u" && window.trustedTypes;
if (Ga) try {
	Wa = /* @__PURE__ */ Ga.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var Ka = Wa ? (e) => Wa.createHTML(e) : (e) => e, qa = "http://www.w3.org/2000/svg", Ja = "http://www.w3.org/1998/Math/MathML", Ya = typeof document < "u" ? document : null, Xa = Ya && /* @__PURE__ */ Ya.createElement("template"), Za = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? Ya.createElementNS(qa, e) : t === "mathml" ? Ya.createElementNS(Ja, e) : n ? Ya.createElement(e, { is: n }) : Ya.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => Ya.createTextNode(e),
	createComment: (e) => Ya.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => Ya.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), i !== a && (i = i.nextSibling););
		else {
			Xa.innerHTML = Ka(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = Xa.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, Qa = /* @__PURE__ */ Symbol("_vtc");
function $a(e, t, n) {
	let r = e[Qa];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var eo = /* @__PURE__ */ Symbol("_vod"), to = /* @__PURE__ */ Symbol("_vsh"), no = {
	name: "show",
	beforeMount(e, { value: t }, { transition: n }) {
		e[eo] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : ro(e, t);
	},
	mounted(e, { value: t }, { transition: n }) {
		n && t && n.enter(e);
	},
	updated(e, { value: t, oldValue: n }, { transition: r }) {
		!t != !n && (r ? t ? (r.beforeEnter(e), ro(e, !0), r.enter(e)) : r.leave(e, () => {
			ro(e, !1);
		}) : ro(e, t));
	},
	beforeUnmount(e, { value: t }) {
		ro(e, t);
	}
};
function ro(e, t) {
	e.style.display = t ? e[eo] : "none", e[to] = !t;
}
var io = /* @__PURE__ */ Symbol(""), ao = /(?:^|;)\s*display\s*:/;
function oo(e, t, n) {
	let r = e.style, i = g(n), a = !1;
	if (n && !i) {
		if (t) {
			if (g(t)) for (let e of t.split(";")) {
				let t = e.slice(0, e.indexOf(":")).trim();
				n[t] ?? co(r, t, "");
			}
			else for (let e in t) n[e] ?? co(r, e, "");
		}
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? co(r, i, "") : po(e, i, !g(t) && t ? t[i] : void 0, o) || co(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[io];
			e && (n += ";" + e), r.cssText = n, a = ao.test(n);
		}
	} else t && e.removeAttribute("style");
	eo in e && (i && t === n || (e[eo] = a ? r.display : ""), e[to] && (r.display = "none"));
}
var so = /\s*!important$/;
function co(e, t, n) {
	if (d(n)) n.forEach((n) => co(e, t, n));
	else if (n ??= "", t.startsWith("--")) so.test(n) ? e.setProperty(t, n.replace(so, ""), "important") : e.setProperty(t, n);
	else {
		let r = fo(e, t);
		so.test(n) ? e.setProperty(re(r), n.replace(so, ""), "important") : e[r] = n;
	}
}
var lo = [
	"Webkit",
	"Moz",
	"ms"
], uo = {};
function fo(e, t) {
	let n = uo[t];
	if (n) return n;
	let r = E(t);
	if (r !== "filter" && r in e) return uo[t] = r;
	r = ie(r);
	for (let n = 0; n < lo.length; n++) {
		let i = lo[n] + r;
		if (i in e) return uo[t] = i;
	}
	return t;
}
function po(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && g(r) && n === r;
}
var mo = "http://www.w3.org/1999/xlink";
function ho(e, t, n, r, i, a = _e(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(mo, t.slice(6, t.length)) : e.setAttributeNS(mo, t, n) : n == null || a && !ve(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : _(n) ? String(n) : n);
}
function go(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? Ka(n) : n);
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
function _o(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function vo(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var yo = /* @__PURE__ */ Symbol("_vei");
function bo(e, t, n, r, i = null) {
	let a = e[yo] || (e[yo] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = Co(t);
		r ? _o(e, n, a[t] = Do(r, i), s) : o && (vo(e, n, o, s), a[t] = void 0);
	}
}
var xo = /(Once|Passive|Capture)$/, So = /^on:?(?:Once|Passive|Capture)$/;
function Co(e) {
	let t, n;
	for (; (n = e.match(xo)) && !So.test(e);) t ||= {}, e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
	return [e[2] === ":" ? e.slice(3) : re(e.slice(2)), t];
}
var wo = 0, To = /* @__PURE__ */ Promise.resolve(), Eo = () => wo ||= (To.then(() => wo = 0), Date.now());
function Do(e, t) {
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
	return n.value = e, n.attached = Eo(), n;
}
var Oo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, ko = (e, t, n, r, i, s) => {
	let c = i === "svg";
	t === "class" ? $a(e, r, c) : t === "style" ? oo(e, n, r) : a(t) ? o(t) || bo(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), 1) : t[0] === "^" ? (t = t.slice(1), 0) : Ao(e, t, r, c)) ? (go(e, t, r), e.tagName.includes("-") || t !== "value" && t !== "checked" && t !== "selected" || ho(e, t, r, c, s, t !== "value")) : e._isVueCE && (jo(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !g(r))) ? go(e, E(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), ho(e, t, r, c));
};
function Ao(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && Oo(t) && h(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return Oo(t) && g(n) ? !1 : t in e;
}
function jo(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = E(t);
	return Array.isArray(n) ? n.some((e) => E(e) === r) : Object.keys(n).some((e) => E(e) === r);
}
var Mo = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return d(t) ? (e) => se(t, e) : t;
};
function No(e) {
	e.target.composing = !0;
}
function Po(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var Fo = /* @__PURE__ */ Symbol("_assign"), Io = /* @__PURE__ */ Symbol("_initialValue");
function Lo(e, t, n) {
	return t && (e = e.trim()), n && (e = le(e)), e;
}
var Ro = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e.parentNode && (e.type === "text" ? e[Io] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Io] = e.defaultValue.replace(/\r\n?/g, "\n"))), e[Fo] = Mo(i);
		let a = r || i.props && i.props.type === "number";
		_o(e, t ? "change" : "input", (t) => {
			t.target.composing || e[Fo](Lo(e.value, n, a));
		}), (n || a) && _o(e, "change", () => {
			e.value = Lo(e.value, n, a);
		}), t || (_o(e, "compositionstart", No), _o(e, "compositionend", Po), _o(e, "change", Po));
	},
	mounted(e, { value: t, modifiers: { trim: n, number: r } }) {
		let i = t ?? "", a = e[Io];
		delete e[Io], a !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== a ? e[Fo](Lo(e.value, n, r)) : e.value = i;
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[Fo] = Mo(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? le(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, zo = {
	created(e, { value: t }, n) {
		e.checked = Ce(t, n.props.value), e[Fo] = Mo(n), _o(e, "change", () => {
			e[Fo](Uo(e));
		});
	},
	beforeUpdate(e, { value: t, oldValue: n }, r) {
		e[Fo] = Mo(r), t !== n && (e.checked = Ce(t, r.props.value));
	}
}, Bo = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		e._modelValue = t, _o(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? le(Uo(e)) : Uo(e)), r = e.multiple, i = r ? p(e._modelValue) ? new Set(t) : t : t[0], a = e._pendingValue = [r, r ? d(i) ? t.slice() : t : i];
			try {
				e[Fo](i);
			} finally {
				Dn(() => {
					e._pendingValue === a && (e._pendingValue = void 0);
				});
			}
		}), e[Fo] = Mo(r);
	},
	mounted(e, { value: t, modifiers: { number: n } }) {
		Ho(e, t, n);
	},
	beforeUpdate(e, { value: t }, n) {
		e._modelValue = t, e[Fo] = Mo(n);
	},
	updated(e, { value: t, modifiers: { number: n } }) {
		let r = e._pendingValue;
		e._pendingValue = void 0, r && r[0] === e.multiple && Vo(t, r[1], r[0]) || Ho(e, t, n);
	}
};
function Vo(e, t, n) {
	if (!n || d(e)) return Ce(e, t);
	if (p(e)) {
		if (e.size !== t.length) return !1;
		for (let n of t) if (!e.has(n)) return !1;
		return !0;
	}
	return !1;
}
function Ho(e, t, n = !1) {
	let r = e.multiple, i = d(t);
	if (!r || i || p(t)) {
		for (let a = 0, o = e.options.length; a < o; a++) {
			let o = e.options[a], s = Uo(o);
			if (r) {
				if (i) {
					let e = typeof s;
					o.selected = e === "string" || e === "number" ? t.some((e) => String(e) === String(s)) : we(t, s) > -1;
				} else o.selected = t.has(s) || n && typeof s == "string" && t.has(le(s));
			} else if (Ce(Uo(o), t)) {
				e.selectedIndex !== a && (e.selectedIndex = a);
				return;
			}
		}
		!r && e.selectedIndex !== -1 && (e.selectedIndex = -1);
	}
}
function Uo(e) {
	return "_value" in e ? e._value : e.value;
}
var Wo = [
	"ctrl",
	"shift",
	"alt",
	"meta"
], Go = {
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
	exact: (e, t) => Wo.some((n) => e[`${n}Key`] && !t.includes(n))
}, Ko = (e, t) => {
	if (!e) return e;
	let n = e._withMods ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n, ...r) => {
		for (let e = 0; e < t.length; e++) {
			let r = Go[t[e]];
			if (r && r(n, t)) return;
		}
		return e(n, ...r);
	}));
}, qo = {
	esc: "escape",
	space: " ",
	up: "arrow-up",
	left: "arrow-left",
	right: "arrow-right",
	down: "arrow-down",
	delete: "backspace"
}, Jo = (e, t) => {
	let n = e._withKeys ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n) => {
		if (!("key" in n)) return;
		let r = re(n.key);
		if (t.some((e) => e === r || qo[e] === r)) return e(n);
	}));
}, Yo = /* @__PURE__ */ s({ patchProp: ko }, Za), Xo;
function Zo() {
	return Xo ||= Li(Yo);
}
var Qo = ((...e) => {
	let t = Zo().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = es(e);
		if (!r) return;
		let i = t._component;
		h(i) || i.render || i.template || (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, $o(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function $o(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function es(e) {
	return g(e) ? document.querySelector(e) : e;
}
// src/api.js
var ts = class extends Error {
	constructor(e, t) {
		super(e), this.status = t;
	}
};
function ns() {
	let e = document.getElementById("initial-state-austit_notebook-config");
	try {
		return JSON.parse(new TextDecoder().decode(Uint8Array.from(atob(e.value), (e) => e.charCodeAt(0))));
	} catch {
		return { apiBase: "/index.php/apps/austit_notebook/api" };
	}
}
var rs = ns();
async function is(e, t, n) {
	let r = {
		Accept: "application/json",
		requesttoken: document.head.dataset.requesttoken ?? ""
	}, i;
	n instanceof FormData ? i = n : n !== void 0 && (r["Content-Type"] = "application/json", i = JSON.stringify(n));
	let a = await fetch(rs.apiBase + t, {
		method: e,
		headers: r,
		body: i
	}), o = await a.json().catch(() => ({}));
	if (!a.ok) throw new ts(o.message || `Fehler ${a.status}`, a.status);
	return o;
}
var as = {
	tree: () => is("GET", "/tree"),
	createNotebook: (e) => is("POST", "/notebooks", { name: e }),
	createClassNotebook: (e, t) => is("POST", "/class-notebooks", {
		name: e,
		members: t
	}),
	getMembers: (e) => is("GET", `/class-notebooks/${e}/members`),
	setMembers: (e, t) => is("PUT", `/class-notebooks/${e}/members`, { members: t }),
	searchPrincipals: (e) => is("GET", `/principals?search=${encodeURIComponent(e)}`),
	createSection: (e, t) => is("POST", `/containers/${e}/sections`, { name: t }),
	distributePage: (e, t) => is("POST", `/pages/${e}/distribute`, { section: t }),
	createPage: (e, t) => is("POST", `/sections/${e}/pages`, { name: t }),
	rename: (e, t) => is("PATCH", `/nodes/${e}`, { name: t }),
	remove: (e) => is("DELETE", `/nodes/${e}`),
	getPage: (e) => is("GET", `/pages/${e}`),
	savePage: (e, t, n) => is("PUT", `/pages/${e}`, {
		content: t,
		etag: n
	}),
	uploadImage(e, t) {
		let n = new FormData();
		return n.append("image", t), is("POST", `/pages/${e}/images`, n);
	},
	imageUrl: (e) => `${rs.apiBase}/images/${e}`
}, ss = { class: "nb-members" }, cs = { class: "nb-field" }, ls = {
	key: 0,
	class: "nb-members__results"
}, us = { class: "nb-members__name" }, ds = ["onClick"], fs = ["onClick"], ps = {
	key: 1,
	class: "nb-muted"
}, ms = {
	key: 2,
	class: "nb-muted"
}, hs = { class: "nb-members__list" }, gs = { class: "nb-members__name" }, _s = [
	"value",
	"aria-label",
	"onChange"
], vs = ["aria-label", "onClick"], ys = {
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
						a.value = (await as.searchPrincipals(e)).results.filter((e) => !t.has(e.type + ":" + e.id));
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
		return (t, n) => (M(), N("div", ss, [
			P("label", cs, [n[1] ||= P("span", null, "Personen oder Gruppen (z. B. eine Klasse) hinzufügen", -1), Hn(P("input", {
				"onUpdate:modelValue": n[0] ||= (e) => i.value = e,
				type: "search",
				placeholder: "Name oder Gruppe suchen …",
				onInput: c
			}, null, 544), [[Ro, i.value]])]),
			a.value.length > 0 ? (M(), N("ul", ls, [(M(!0), N(j, null, jr(a.value, (e) => (M(), N("li", { key: e.type + ":" + e.id }, [
				P("span", us, [ma(Ee(e.name) + " ", 1), P("small", null, Ee(e.type === "group" ? "Gruppe" : e.id), 1)]),
				P("button", {
					type: "button",
					class: "nb-button",
					onClick: (t) => l(e, "student")
				}, "als Schüler:in", 8, ds),
				P("button", {
					type: "button",
					class: "nb-button",
					onClick: (t) => l(e, "teacher")
				}, "als Lehrkraft", 8, fs)
			]))), 128))])) : i.value.trim().length >= 2 && !o.value ? (M(), N("p", ps, "Keine Treffer.")) : F("", !0),
			n[3] ||= P("h3", { class: "nb-members__heading" }, "Mitglieder", -1),
			e.modelValue.length === 0 ? (M(), N("p", ms, "Noch keine Mitglieder. Du selbst bist automatisch Lehrkraft.")) : F("", !0),
			P("ul", hs, [(M(!0), N(j, null, jr(e.modelValue, (e) => (M(), N("li", { key: e.type + ":" + e.id }, [
				P("span", gs, [ma(Ee(e.name ?? e.id) + " ", 1), P("small", null, Ee(e.type === "group" ? "Gruppe" : e.id), 1)]),
				P("select", {
					value: e.role,
					"aria-label": "Rolle von " + (e.name ?? e.id),
					onChange: (t) => u(e, t.target.value)
				}, [...n[2] ||= [P("option", { value: "student" }, "Schüler:in", -1), P("option", { value: "teacher" }, "Lehrkraft", -1)]], 40, _s),
				P("button", {
					type: "button",
					class: "nb-icon-button",
					"aria-label": (e.name ?? e.id) + " entfernen",
					onClick: (t) => d(e)
				}, "×", 8, vs)
			]))), 128))])
		]));
	}
}, bs = { class: "nb-modal__header" }, xs = { class: "nb-modal__body" }, Ss = { class: "nb-modal__footer" }, Cs = {
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
			onMousedown: i[2] ||= Ko((e) => r.$emit("close"), ["self"])
		}, [P("div", {
			ref_key: "dialog",
			ref: n,
			class: "nb-modal__dialog",
			role: "dialog",
			"aria-modal": "true",
			"aria-labelledby": t,
			onKeydown: i[1] ||= Jo(Ko((e) => r.$emit("close"), ["stop"]), ["esc"])
		}, [
			P("header", bs, [P("h2", { id: t }, Ee(e.title), 1), P("button", {
				type: "button",
				class: "nb-icon-button",
				"aria-label": "Schließen",
				onClick: i[0] ||= (e) => r.$emit("close")
			}, "×")]),
			P("div", xs, [Nr(r.$slots, "default")]),
			P("footer", Ss, [Nr(r.$slots, "footer")])
		], 544)], 32));
	}
};
function ws() {
	return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}
function Ts(e) {
	let t = e && typeof e == "object" ? e : {};
	return {
		version: 1,
		created: Number.isFinite(t.created) ? t.created : Math.floor(Date.now() / 1e3),
		elements: Array.isArray(t.elements) ? t.elements.filter((e) => e && e.id && (e.type === "text" || e.type === "image")) : [],
		strokes: Array.isArray(t.strokes) ? t.strokes.filter((e) => e && e.id && Array.isArray(e.points) && e.points.length > 0) : []
	};
}
function Es(e) {
	return Math.round(e * 10) / 10;
}
function Ds(e, t, n, r, i, a) {
	let o = i - n, s = a - r, c = o * o + s * s, l = c === 0 ? 0 : Math.max(0, Math.min(1, ((e - n) * o + (t - r) * s) / c));
	return Math.hypot(e - (n + l * o), t - (r + l * s));
}
function Os(e, t, n, r) {
	let i = r + e.size / 2, a = e.points;
	if (a.length === 1) return Math.hypot(a[0][0] - t, a[0][1] - n) <= i;
	for (let e = 1; e < a.length; e++) if (Ds(t, n, a[e - 1][0], a[e - 1][1], a[e][0], a[e][1]) <= i) return !0;
	return !1;
}
function ks(e, t, n, r) {
	return e.filter((e) => !Os(e, t, n, r));
}
function As(e, t, n) {
	let r = !1;
	for (let i = 0, a = n.length - 1; i < n.length; a = i++) {
		let [o, s] = n[i], [c, l] = n[a];
		s > t != l > t && e < (c - o) * (t - s) / (l - s) + o && (r = !r);
	}
	return r;
}
function js(e) {
	let t = e.size / 2, n = Infinity, r = Infinity, i = -Infinity, a = -Infinity;
	for (let [t, o] of e.points) n = Math.min(n, t), r = Math.min(r, o), i = Math.max(i, t), a = Math.max(a, o);
	return {
		minX: n - t,
		minY: r - t,
		maxX: i + t,
		maxY: a + t
	};
}
function Ms(e, t = {}) {
	let n = e.type === "image" ? e.height : t[e.id] ?? 40;
	return {
		minX: e.x,
		minY: e.y,
		maxX: e.x + e.width,
		maxY: e.y + n
	};
}
function Ns(e) {
	return e.length === 0 ? null : e.reduce((e, t) => ({
		minX: Math.min(e.minX, t.minX),
		minY: Math.min(e.minY, t.minY),
		maxX: Math.max(e.maxX, t.maxX),
		maxY: Math.max(e.maxY, t.maxY)
	}));
}
function Ps(e, t, n = {}) {
	return t.length < 3 ? {
		strokeIds: [],
		elementIds: []
	} : {
		strokeIds: e.strokes.filter((e) => e.points.filter(([e, n]) => As(e, n, t)).length / e.points.length >= .5).map((e) => e.id),
		elementIds: e.elements.filter((e) => {
			let r = Ms(e, n);
			return As((r.minX + r.maxX) / 2, (r.minY + r.maxY) / 2, t);
		}).map((e) => e.id)
	};
}
function Fs(e, t, n = {}) {
	let r = new Set(t.strokeIds), i = new Set(t.elementIds);
	return Ns([...e.strokes.filter((e) => r.has(e.id)).map(js), ...e.elements.filter((e) => i.has(e.id)).map((e) => Ms(e, n))]);
}
function Is(e, t, n, r) {
	let i = new Set(t.strokeIds), a = new Set(t.elementIds);
	return {
		...e,
		strokes: e.strokes.map((e) => i.has(e.id) ? {
			...e,
			points: e.points.map(([e, t, i]) => [
				Es(e + n),
				Es(t + r),
				i
			])
		} : e),
		elements: e.elements.map((e) => a.has(e.id) ? {
			...e,
			x: Es(e.x + n),
			y: Es(e.y + r)
		} : e)
	};
}
function Ls(e, t) {
	let n = new Set(t.strokeIds), r = new Set(t.elementIds);
	return {
		...e,
		strokes: e.strokes.filter((e) => !n.has(e.id)),
		elements: e.elements.filter((e) => !r.has(e.id))
	};
}
function Rs(e) {
	return !e || !Array.isArray(e.content) || e.content.every((e) => e.type === "paragraph" && (!e.content || e.content.length === 0));
}
function zs(e) {
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
// src/components/NavItem.vue
var Bs = ["aria-label"], Vs = ["aria-current"], Hs = {
	key: 0,
	class: "nb-nav-item__badge"
}, Us = ["aria-label"], Ws = ["aria-label"], Gs = {
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
		let n = e, r = t, i = /* @__PURE__ */ A(!1), a = /* @__PURE__ */ A(!1), o = /* @__PURE__ */ A(""), s = /* @__PURE__ */ A(null);
		async function c() {
			o.value = n.node.name, i.value = !0, await Dn(), s.value?.select();
		}
		function l() {
			if (!i.value) return;
			i.value = !1;
			let e = o.value.trim();
			e !== "" && e !== n.node.name && r("rename", e);
		}
		return (t, n) => (M(), N("div", { class: D(["nb-nav-item", ["nb-nav-item--" + e.kind, { "nb-nav-item--active": e.active }]]) }, [i.value ? (M(), N("form", {
			key: 0,
			class: "nb-nav-item__form",
			onSubmit: Ko(l, ["prevent"])
		}, [Hn(P("input", {
			ref_key: "input",
			ref: s,
			"onUpdate:modelValue": n[0] ||= (e) => o.value = e,
			class: "nb-nav-item__input",
			"aria-label": "Name für " + e.node.name,
			maxlength: "120",
			onBlur: l,
			onKeydown: n[1] ||= Jo(Ko((e) => i.value = !1, ["prevent"]), ["esc"])
		}, null, 40, Bs), [[Ro, o.value]])], 32)) : a.value ? (M(), N(j, { key: 1 }, [
			n[7] ||= P("span", { class: "nb-nav-item__confirm" }, "Löschen?", -1),
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
				onDblclick: n[5] ||= (t) => e.editable && c()
			}, [ma(Ee(e.node.name) + " ", 1), e.badge ? (M(), N("span", Hs, Ee(e.badge), 1)) : F("", !0)], 40, Vs),
			Nr(t.$slots, "actions"),
			e.editable ? (M(), N("button", {
				key: 0,
				type: "button",
				class: "nb-nav-item__action",
				title: "Umbenennen",
				"aria-label": e.node.name + " umbenennen",
				onClick: c
			}, "✎", 8, Us)) : F("", !0),
			e.deletable ? (M(), N("button", {
				key: 1,
				type: "button",
				class: "nb-nav-item__action",
				title: "Löschen",
				"aria-label": e.node.name + " löschen",
				onClick: n[6] ||= (e) => a.value = !0
			}, "🗑", 8, Ws)) : F("", !0)
		], 64))], 2));
	}
}, Ks = { class: "nb-nav__list" }, qs = {
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
		return (t, n) => (M(), N("ul", Ks, [(M(!0), N(j, null, jr(e.sections, (n) => (M(), N("li", { key: n.id }, [ua(Gs, {
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
}, Js = {
	class: "nb-nav",
	"aria-label": "Notizbücher"
}, Ys = { class: "nb-nav__column" }, Xs = { class: "nb-nav__header" }, Zs = { class: "nb-nav__list" }, Qs = ["aria-label", "onClick"], $s = {
	key: 0,
	class: "nb-nav__nested"
}, ec = ["onClick"], tc = { class: "nb-nav__group-title" }, nc = {
	key: 0,
	class: "nb-nav__readonly"
}, rc = {
	key: 0,
	class: "nb-nav__empty"
}, ic = ["aria-expanded", "onClick"], ac = ["onClick"], oc = ["onClick"], sc = {
	key: 0,
	class: "nb-nav__empty"
}, cc = {
	key: 0,
	class: "nb-nav__column nb-nav__column--pages"
}, lc = { class: "nb-nav__header" }, uc = { class: "nb-nav__list" }, dc = {
	key: 0,
	class: "nb-nav__empty"
}, fc = {
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
		let n = e, r = t, i = /* @__PURE__ */ Vt(/* @__PURE__ */ new Set()), a = Va(() => n.notebooks.find((e) => e.id === n.notebookId) ?? null), o = Va(() => zs(a.value).find((e) => e.section.id === n.sectionId) ?? null);
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
		return (t, n) => (M(), N("nav", Js, [P("section", Ys, [
			P("header", Xs, [n[8] ||= P("h2", null, "Notizbücher", -1), P("button", {
				type: "button",
				class: "nb-icon-button",
				title: "Neues Notizbuch",
				"aria-label": "Neues Notizbuch",
				onClick: n[0] ||= (e) => t.$emit("create-notebook")
			}, "+")]),
			P("ul", Zs, [(M(!0), N(j, null, jr(e.notebooks, (r) => (M(), N("li", { key: r.id }, [ua(Gs, {
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
				}, "👥", 8, Qs)]),
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
			]), r.id === e.notebookId ? (M(), N("div", $s, [r.kind === "personal" ? (M(), N(j, { key: 0 }, [ua(qs, {
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
			}, "+ Abschnitt", 8, ec)], 64)) : (M(!0), N(j, { key: 1 }, jr(r.groups, (i) => (M(), N("div", {
				key: i.id,
				class: D(["nb-nav__group", "nb-nav__group--" + i.area])
			}, [P("h3", tc, [ma(Ee(i.name) + " ", 1), i.canWrite ? F("", !0) : (M(), N("span", nc, "nur lesen"))]), i.students ? (M(), N(j, { key: 0 }, [i.students.length === 0 ? (M(), N("p", rc, "Noch keine Schüler:innen. Über 👥 hinzufügen.")) : F("", !0), (M(!0), N(j, null, jr(i.students, (i) => (M(), N("div", {
				key: i.id,
				class: "nb-nav__student"
			}, [P("button", {
				type: "button",
				class: "nb-nav__student-toggle",
				"aria-expanded": s(i),
				onClick: (e) => c(i)
			}, Ee(s(i) ? "▾" : "▸") + " " + Ee(i.name), 9, ic), s(i) ? (M(), N(j, { key: 0 }, [ua(qs, {
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
			}, "+ Abschnitt", 8, ac)], 64)) : F("", !0)]))), 128))], 64)) : (M(), N(j, { key: 1 }, [ua(qs, {
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
			}, "+ Abschnitt", 8, oc)) : F("", !0)], 64))], 2))), 128))])) : F("", !0)]))), 128))]),
			e.notebooks.length === 0 ? (M(), N("p", sc, "Noch keine Notizbücher.")) : F("", !0)
		]), o.value ? (M(), N("section", cc, [
			P("header", lc, [P("h2", null, Ee(o.value.student ? o.value.student.name + " · " : "") + Ee(o.value.section.name), 1), o.value.section.canWrite ? (M(), N("button", {
				key: 0,
				type: "button",
				class: "nb-icon-button",
				title: "Neue Seite",
				"aria-label": "Neue Seite",
				onClick: n[7] ||= (e) => t.$emit("create", {
					type: "page",
					parentId: o.value.section.id
				})
			}, " + ")) : F("", !0)]),
			P("ul", uc, [(M(!0), N(j, null, jr(o.value.section.pages, (n) => (M(), N("li", { key: n.id }, [ua(Gs, {
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
			o.value.section.pages.length === 0 ? (M(), N("p", dc, "Noch keine Seiten.")) : F("", !0)
		])) : F("", !0)]));
	}
}, { PI: pc } = Math, mc = pc + 1e-4, hc = .5, gc = [1, 1];
function _c(e, t, n, r = (e) => e) {
	return e * r(.5 - t * (.5 - n));
}
var { min: vc } = Math;
function yc(e, t, n) {
	let r = vc(1, t / n);
	return vc(1, e + (vc(1, 1 - r) - e) * (r * .275));
}
function bc(e) {
	return [-e[0], -e[1]];
}
function xc(e, t) {
	return [e[0] + t[0], e[1] + t[1]];
}
function Sc(e, t, n) {
	return e[0] = t[0] + n[0], e[1] = t[1] + n[1], e;
}
function Cc(e, t) {
	return [e[0] - t[0], e[1] - t[1]];
}
function wc(e, t, n) {
	return e[0] = t[0] - n[0], e[1] = t[1] - n[1], e;
}
function Tc(e, t) {
	return [e[0] * t, e[1] * t];
}
function Ec(e, t, n) {
	return e[0] = t[0] * n, e[1] = t[1] * n, e;
}
function Dc(e, t) {
	return [e[0] / t, e[1] / t];
}
function Oc(e) {
	return [e[1], -e[0]];
}
function kc(e, t) {
	let n = t[0];
	return e[0] = t[1], e[1] = -n, e;
}
function Ac(e, t) {
	return e[0] * t[0] + e[1] * t[1];
}
function jc(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}
function Mc(e) {
	return Math.hypot(e[0], e[1]);
}
function Nc(e, t) {
	let n = e[0] - t[0], r = e[1] - t[1];
	return n * n + r * r;
}
function Pc(e) {
	return Dc(e, Mc(e));
}
function Fc(e, t) {
	return Math.hypot(e[1] - t[1], e[0] - t[0]);
}
function Ic(e, t, n) {
	let r = Math.sin(n), i = Math.cos(n), a = e[0] - t[0], o = e[1] - t[1], s = a * i - o * r, c = a * r + o * i;
	return [s + t[0], c + t[1]];
}
function Lc(e, t, n, r) {
	let i = Math.sin(r), a = Math.cos(r), o = t[0] - n[0], s = t[1] - n[1], c = o * a - s * i, l = o * i + s * a;
	return e[0] = c + n[0], e[1] = l + n[1], e;
}
function Rc(e, t, n) {
	return xc(e, Tc(Cc(t, e), n));
}
function zc(e, t, n, r) {
	let i = n[0] - t[0], a = n[1] - t[1];
	return e[0] = t[0] + i * r, e[1] = t[1] + a * r, e;
}
function Bc(e, t, n) {
	return xc(e, Tc(t, n));
}
var Vc = [0, 0], Hc = [0, 0], Uc = [0, 0];
function Wc(e, t) {
	let n = Bc(e, Pc(Oc(Cc(e, xc(e, [1, 1])))), -t), r = [], i = 1 / 13;
	for (let t = i; t <= 1; t += i) r.push(Ic(n, e, mc * 2 * t));
	return r;
}
function Gc(e, t, n) {
	let r = [], i = 1 / n;
	for (let n = i; n <= 1; n += i) r.push(Ic(t, e, mc * n));
	return r;
}
function Kc(e, t, n) {
	let r = Cc(t, n), i = Tc(r, .5), a = Tc(r, .51);
	return [
		Cc(e, i),
		Cc(e, a),
		xc(e, a),
		xc(e, i)
	];
}
function qc(e, t, n, r) {
	let i = [], a = Bc(e, t, n), o = 1 / r;
	for (let t = o; t < 1; t += o) i.push(Ic(a, e, mc * 3 * t));
	return i;
}
function Jc(e, t, n) {
	return [
		xc(e, Tc(t, n)),
		xc(e, Tc(t, n * .99)),
		Cc(e, Tc(t, n * .99)),
		Cc(e, Tc(t, n))
	];
}
function Yc(e, t, n) {
	return e === !1 || e === void 0 ? 0 : e === !0 ? Math.max(t, n) : e;
}
function Xc(e, t, n) {
	return e.slice(0, 10).reduce((e, r) => {
		let i = r.pressure;
		return t && (i = yc(e, r.distance, n)), (e + i) / 2;
	}, e[0].pressure);
}
function Zc(e, t = {}) {
	let { size: n = 16, smoothing: r = .5, thinning: i = .5, simulatePressure: a = !0, easing: o = (e) => e, start: s = {}, end: c = {}, last: l = !1 } = t, { cap: u = !0, easing: d = (e) => e * (2 - e) } = s, { cap: f = !0, easing: p = (e) => --e * e * e + 1 } = c;
	if (e.length === 0 || n <= 0) return [];
	let m = e[e.length - 1].runningLength, h = Yc(s.taper, n, m), g = Yc(c.taper, n, m), _ = (n * r) ** 2, v = [], y = [], b = Xc(e, a, n), x = _c(n, i, e[e.length - 1].pressure, o), S, C = e[0].vector, w = e[0].point, ee = w, T = w, te = ee, E = !1;
	for (let t = 0; t < e.length; t++) {
		let { pressure: r } = e[t], { point: s, vector: c, distance: l, runningLength: u } = e[t], f = t === e.length - 1;
		if (!f && m - u < 3) continue;
		i ? (a && (r = yc(b, l, n)), x = _c(n, i, r, o)) : x = n / 2, S === void 0 && (S = x);
		let ne = u < h ? d(u / h) : 1, re = m - u < g ? p((m - u) / g) : 1;
		x = Math.max(.01, x * Math.min(ne, re));
		let ie = (f ? e[t] : e[t + 1]).vector, ae = f ? 1 : Ac(c, ie), oe = Ac(c, C) < 0 && !E, se = ae !== null && ae < 0;
		if (oe || se) {
			kc(Vc, C), Ec(Vc, Vc, x);
			for (let e = 0; e <= 1; e += .07692307692307693) wc(Hc, s, Vc), Lc(Hc, Hc, s, mc * e), T = [Hc[0], Hc[1]], v.push(T), Sc(Uc, s, Vc), Lc(Uc, Uc, s, mc * -e), te = [Uc[0], Uc[1]], y.push(te);
			w = T, ee = te, se && (E = !0);
		} else E = !1, f ? (kc(Vc, c), Ec(Vc, Vc, x), v.push(Cc(s, Vc)), y.push(xc(s, Vc))) : (zc(Vc, ie, c, ae), kc(Vc, Vc), Ec(Vc, Vc, x), wc(Hc, s, Vc), T = [Hc[0], Hc[1]], (t <= 1 || Nc(w, T) > _) && (v.push(T), w = T), Sc(Uc, s, Vc), te = [Uc[0], Uc[1]], (t <= 1 || Nc(ee, te) > _) && (y.push(te), ee = te), b = r, C = c);
	}
	let ne = [e[0].point[0], e[0].point[1]], re = e.length > 1 ? [e[e.length - 1].point[0], e[e.length - 1].point[1]] : xc(e[0].point, [1, 1]), ie = [], ae = [];
	if (e.length === 1) {
		if (!(h || g) || l) return Wc(ne, S || x);
	} else {
		h || g && e.length === 1 || (u ? ie.push(...Gc(ne, y[0], 13)) : ie.push(...Kc(ne, v[0], y[0])));
		let t = Oc(bc(e[e.length - 1].vector));
		g || h && e.length === 1 ? ae.push(re) : f ? ae.push(...qc(re, t, x, 29)) : ae.push(...Jc(re, t, x));
	}
	return v.concat(ae, y.reverse(), ie);
}
var Qc = [0, 0];
function $c(e) {
	return e != null && e >= 0;
}
function el(e, t = {}) {
	let { streamline: n = .5, size: r = 16, last: i = !1 } = t;
	if (e.length === 0) return [];
	let a = .15 + (1 - n) * .85, o = Array.isArray(e[0]) ? e : e.map(({ x: e, y: t, pressure: n = hc }) => [
		e,
		t,
		n
	]);
	if (o.length === 2) {
		let e = o[1];
		o = o.slice(0, -1);
		for (let t = 1; t < 5; t++) o.push(Rc(o[0], e, t / 4));
	}
	o.length === 1 && (o = [...o, [...xc(o[0], gc), ...o[0].slice(2)]]);
	let s = [{
		point: [o[0][0], o[0][1]],
		pressure: $c(o[0][2]) ? o[0][2] : .25,
		vector: [...gc],
		distance: 0,
		runningLength: 0
	}], c = !1, l = 0, u = s[0], d = o.length - 1;
	for (let e = 1; e < o.length; e++) {
		let t = i && e === d ? [o[e][0], o[e][1]] : Rc(u.point, o[e], a);
		if (jc(u.point, t)) continue;
		let n = Fc(t, u.point);
		if (l += n, e < d && !c) {
			if (l < r) continue;
			c = !0;
		}
		wc(Qc, u.point, t), u = {
			point: t,
			pressure: $c(o[e][2]) ? o[e][2] : hc,
			vector: Pc(Qc),
			distance: n,
			runningLength: l
		}, s.push(u);
	}
	return s[0].vector = s[1]?.vector || [0, 0], s;
}
function tl(e, t = {}) {
	return Zc(el(e, t), t);
}
// src/ink.js
var nl = {
	pen: {
		thinning: .6,
		opacity: 1
	},
	highlighter: {
		thinning: 0,
		opacity: .35
	}
};
function rl(e, t = !0) {
	let n = nl[e.tool] ?? nl.pen;
	return il(tl(e.points, {
		size: e.size,
		thinning: n.thinning,
		smoothing: .5,
		streamline: .4,
		simulatePressure: e.simulatePressure ?? !1,
		last: t
	}));
}
function il(e) {
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
var al = ["src"], ol = {
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
			style: fe({
				left: e.element.x + "px",
				top: e.element.y + "px",
				width: e.element.width + "px",
				height: e.element.height + "px"
			}),
			onPointerdown: n[1] ||= Ko((e) => t.$emit("drag-start", e), ["stop", "prevent"])
		}, [P("img", {
			src: e.src,
			alt: "",
			draggable: "false"
		}, null, 8, al), P("div", {
			class: "nb-resize nb-resize--corner",
			title: "Größe ändern",
			onPointerdown: n[0] ||= Ko((e) => t.$emit("resize-start", e), ["stop", "prevent"])
		}, null, 32)], 38));
	}
}, sl = Object.defineProperty, cl = (e, t) => {
	let n = {};
	for (var r in e) sl(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || sl(n, Symbol.toStringTag, { value: "Module" }), n;
};
// node_modules/orderedmap/dist/index.js
function ll(e) {
	this.content = e;
}
ll.prototype = {
	constructor: ll,
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
		return i == -1 ? a.push(n || e, t) : (a[i + 1] = t, n && (a[i] = n)), new ll(a);
	},
	remove: function(e) {
		var t = this.find(e);
		if (t == -1) return this;
		var n = this.content.slice();
		return n.splice(t, 2), new ll(n);
	},
	addToStart: function(e, t) {
		return new ll([e, t].concat(this.remove(e).content));
	},
	addToEnd: function(e, t) {
		var n = this.remove(e).content.slice();
		return n.push(e, t), new ll(n);
	},
	addBefore: function(e, t, n) {
		var r = this.remove(t), i = r.content.slice(), a = r.find(e);
		return i.splice(a == -1 ? i.length : a, 0, t, n), new ll(i);
	},
	forEach: function(e) {
		for (var t = 0; t < this.content.length; t += 2) e(this.content[t], this.content[t + 1]);
	},
	prepend: function(e) {
		return e = ll.from(e), e.size ? new ll(e.content.concat(this.subtract(e).content)) : this;
	},
	append: function(e) {
		return e = ll.from(e), e.size ? new ll(this.subtract(e).content.concat(e.content)) : this;
	},
	subtract: function(e) {
		var t = this;
		e = ll.from(e);
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
}, ll.from = function(e) {
	if (e instanceof ll) return e;
	var t = [];
	if (e) for (var n in e) t.push(n, e[n]);
	return new ll(t);
};
// node_modules/prosemirror-model/dist/index.js
function ul(e, t, n) {
	for (let r = 0;; r++) {
		if (r == e.childCount || r == t.childCount) return e.childCount == t.childCount ? null : n;
		let i = e.child(r), a = t.child(r);
		if (i == a) n += i.nodeSize;
		else {
			if (!i.sameMarkup(a)) return n;
			if (i.isText && i.text != a.text) {
				let e = i.text, t = a.text, r = 0;
				for (; e[r] == t[r]; r++) n++;
				return r && r < e.length && r < t.length && pl(e.charCodeAt(r - 1)) && fl(e.charCodeAt(r)) && n--, n;
			}
			if (i.content.size || a.content.size) {
				let e = ul(i.content, a.content, n + 1);
				if (e != null) return e;
			}
			n += i.nodeSize;
		}
	}
}
function dl(e, t, n, r) {
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
				return i && a && i < e.length && pl(e.charCodeAt(i - 1)) && fl(e.charCodeAt(i)) && (n++, r++), {
					a: n,
					b: r
				};
			}
			if (o.content.size || s.content.size) {
				let e = dl(o.content, s.content, n - 1, r - 1);
				if (e) return e;
			}
			n -= c, r -= c;
		}
	}
}
function fl(e) {
	return e >= 56320 && e < 57344;
}
function pl(e) {
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
		return ul(this, e, t);
	}
	findDiffEnd(e, t = this.size, n = e.size) {
		return dl(this, e, t, n);
	}
	findIndex(e) {
		if (e == 0) return hl(0, e);
		if (e == this.size) return hl(this.content.length, e);
		if (e > this.size || e < 0) throw RangeError(`Position ${e} outside of fragment (${this})`);
		for (let t = 0, n = 0;; t++) {
			let r = this.child(t), i = n + r.nodeSize;
			if (i >= e) return i == e ? hl(t + 1, i) : hl(t, n);
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
var ml = {
	index: 0,
	offset: 0
};
function hl(e, t) {
	return ml.index = e, ml.offset = t, ml;
}
function gl(e, t) {
	if (e === t) return !0;
	if (!(e && typeof e == "object") || !(t && typeof t == "object")) return !1;
	let n = Array.isArray(e);
	if (Array.isArray(t) != n) return !1;
	if (n) {
		if (e.length != t.length) return !1;
		for (let n = 0; n < e.length; n++) if (!gl(e[n], t[n])) return !1;
	} else {
		for (let n in e) if (!(n in t) || !gl(e[n], t[n])) return !1;
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
		return this == e || this.type == e.type && gl(this.attrs, e.attrs);
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
var _l = class extends Error {}, R = class e {
	constructor(e, t, n) {
		this.content = e, this.openStart = t, this.openEnd = n;
	}
	get size() {
		return this.content.size - this.openStart - this.openEnd;
	}
	insertAt(t, n) {
		let r = yl(this.content, t + this.openStart, n, this.openStart + 1, this.openEnd + 1);
		return r && new e(r, this.openStart, this.openEnd);
	}
	removeBetween(t, n) {
		return new e(vl(this.content, t + this.openStart, n + this.openStart), this.openStart, this.openEnd);
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
function vl(e, t, n) {
	let { index: r, offset: i } = e.findIndex(t), a = e.maybeChild(r), { index: o, offset: s } = e.findIndex(n);
	if (i == t || a.isText) {
		if (s != n && !e.child(o).isText) throw RangeError("Removing non-flat range");
		return e.cut(0, t).append(e.cut(n));
	}
	if (r != o) throw RangeError("Removing non-flat range");
	return e.replaceChild(r, a.copy(vl(a.content, t - i - 1, n - i - 1)));
}
function yl(e, t, n, r, i, a) {
	let { index: o, offset: s } = e.findIndex(t), c = e.maybeChild(o);
	if (s == t || c.isText) return a && r <= 0 && i <= 0 && !a.canReplace(o, o, n) ? null : e.cut(0, t).append(n).append(e.cut(t));
	let l = yl(c.content, t - s - 1, n, o == 0 ? r - 1 : 0, o == e.childCount - 1 ? i - 1 : 0, c);
	return l && e.replaceChild(o, c.copy(l));
}
function bl(e, t, n) {
	if (n.openStart > e.depth) throw new _l("Inserted content deeper than insertion position");
	if (e.depth - n.openStart != t.depth - n.openEnd) throw new _l("Inconsistent open depths");
	return xl(e, t, n, 0);
}
function xl(e, t, n, r) {
	let i = e.index(r), a = e.node(r);
	if (i == t.index(r) && r < e.depth - n.openStart) {
		let o = xl(e, t, n, r + 1);
		return a.copy(a.content.replaceChild(i, o));
	}
	if (!n.content.size) return El(a, Ol(e, t, r));
	if (!n.openStart && !n.openEnd && e.depth == r && t.depth == r) {
		let r = e.parent, i = r.content;
		return El(r, i.cut(0, e.parentOffset).append(n.content).append(i.cut(t.parentOffset)));
	}
	{
		let { start: i, end: o } = kl(n, e);
		return El(a, Dl(e, i, o, t, r));
	}
}
function Sl(e, t) {
	if (!t.type.compatibleContent(e.type)) throw new _l("Cannot join " + t.type.name + " onto " + e.type.name);
}
function Cl(e, t, n) {
	let r = e.node(n);
	return Sl(r, t.node(n)), r;
}
function wl(e, t) {
	let n = t.length - 1;
	n >= 0 && e.isText && e.sameMarkup(t[n]) ? t[n] = e.withText(t[n].text + e.text) : t.push(e);
}
function Tl(e, t, n, r) {
	let i = (t || e).node(n), a = 0, o = t ? t.index(n) : i.childCount;
	e && (a = e.index(n), e.depth > n ? a++ : e.textOffset && (wl(e.nodeAfter, r), a++));
	for (let e = a; e < o; e++) wl(i.child(e), r);
	t && t.depth == n && t.textOffset && wl(t.nodeBefore, r);
}
function El(e, t) {
	if (!e.type.validContent(t)) throw new _l("Invalid content for node " + e.type.name);
	return e.copy(t);
}
function Dl(e, t, n, r, i) {
	let a = e.depth > i && Cl(e, t, i + 1), o = r.depth > i && Cl(n, r, i + 1), s = [];
	return Tl(null, e, i, s), a && o && t.index(i) == n.index(i) ? (Sl(a, o), wl(El(a, Dl(e, t, n, r, i + 1)), s)) : (a && wl(El(a, Ol(e, t, i + 1)), s), Tl(t, n, i, s), o && wl(El(o, Ol(n, r, i + 1)), s)), Tl(r, null, i, s), new I(s);
}
function Ol(e, t, n) {
	let r = [];
	return Tl(null, e, n, r), e.depth > n && wl(El(Cl(e, t, n + 1), Ol(e, t, n + 1)), r), Tl(t, null, n, r), new I(r);
}
function kl(e, t) {
	let n = t.depth - e.openStart, r = t.node(n).copy(e.content);
	for (let e = n - 1; e >= 0; e--) r = t.node(e).copy(I.from(r));
	return {
		start: r.resolveNoCache(e.openStart + n),
		end: r.resolveNoCache(r.content.size - e.openEnd - n)
	};
}
var Al = class e {
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
		for (let n = this.depth - (this.parent.inlineContent || this.pos == e.pos ? 1 : 0); n >= 0; n--) if (e.pos <= this.end(n) && (!t || t(this.node(n)))) return new Pl(this, e, n);
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
		let r = Nl.get(t);
		if (r) for (let e = 0; e < r.elts.length; e++) {
			let t = r.elts[e];
			if (t.pos == n) return t;
		}
		else Nl.set(t, r = new jl());
		let i = r.elts[r.i] = e.resolve(t, n);
		return r.i = (r.i + 1) % Ml, i;
	}
}, jl = class {
	constructor() {
		this.elts = [], this.i = 0;
	}
}, Ml = 12, Nl = /* @__PURE__ */ new WeakMap(), Pl = class {
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
}, Fl = Object.create(null), Il = class e {
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
		return this.type == e && gl(this.attrs, t || e.defaultAttrs || Fl) && L.sameSet(this.marks, n || L.none);
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
		return bl(this.resolve(e), this.resolve(t), n);
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
		return Al.resolveCached(this, e);
	}
	resolveNoCache(e) {
		return Al.resolve(this, e);
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
		return this.content.size && (e += "(" + this.content.toStringInner() + ")"), zl(this.marks, e);
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
		this.type.checkContent(this.content), Bl(this.type.attrs, this.attrs, "node", this.type.name);
		let e = L.none;
		for (let t = 0; t < this.marks.length; t++) {
			let n = this.marks[t];
			Bl(n.type.attrs, n.attrs, "mark", n.type.name), e = n.addToSet(e);
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
Il.prototype.text = void 0;
var Ll = (() => {
	let { stack: e } = /* @__PURE__ */ Error("/");
	if (!e || !/\n\s*at\s/.test(e)) return (e) => e;
	let t = Object.create(null);
	return (e) => (t[e], e);
})(), Rl = class e extends Il {
	constructor(e, t, n, r) {
		if (super(e, t, null, r), !n) throw RangeError("Empty text nodes are not allowed");
		this.text = n;
	}
	toString() {
		return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : zl(this.marks, JSON.stringify(this.text));
	}
	get textContent() {
		return this.text;
	}
	textBetween(e, t) {
		return Ll(this.text.slice(e, t));
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
		return e == 0 && t == this.text.length ? this : this.withText(Ll(this.text.slice(e, t)));
	}
	eq(e) {
		return this.sameMarkup(e) && this.text == e.text;
	}
	toJSON() {
		let e = super.toJSON();
		return e.text = this.text, e;
	}
};
function zl(e, t) {
	for (let n = e.length - 1; n >= 0; n--) t = e[n].type.name + "(" + t + ")";
	return t;
}
function Bl(e, t, n, r) {
	for (let i in t) if (!(i in e)) throw RangeError(`Unsupported attribute ${i} for ${n} of type ${r}`);
	for (let n in e) e[n].validate && e[n].validate(t[n]);
}
var Vl = class e {
	constructor(e) {
		this.validEnd = e, this.next = [], this.wrapCache = [];
	}
	static parse(t, n) {
		let r = new Hl(t, n);
		if (r.next == null) return e.empty;
		let i = Ul(r);
		r.next && r.err("Unexpected trailing text");
		let a = $l(Xl(i));
		return eu(a, r), a;
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
Vl.empty = new Vl(!0);
var Hl = class {
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
function Ul(e) {
	let t = [];
	do
		t.push(Wl(e));
	while (e.eat("|"));
	return t.length == 1 ? t[0] : {
		type: "choice",
		exprs: t
	};
}
function Wl(e) {
	let t = [];
	do
		t.push(Gl(e));
	while (e.next && e.next != ")" && e.next != "|");
	return t.length == 1 ? t[0] : {
		type: "seq",
		exprs: t
	};
}
function Gl(e) {
	let t = Yl(e);
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
	else if (e.eat("{")) t = ql(e, t);
	else break;
	return t;
}
function Kl(e) {
	/\D/.test(e.next) && e.err("Expected number, got '" + e.next + "'");
	let t = Number(e.next);
	return e.pos++, t;
}
function ql(e, t) {
	let n = Kl(e), r = n;
	return e.eat(",") && (r = e.next == "}" ? -1 : Kl(e)), e.eat("}") || e.err("Unclosed braced range"), {
		type: "range",
		min: n,
		max: r,
		expr: t
	};
}
function Jl(e, t) {
	let n = e.nodeTypes, r = n[t];
	if (r) return [r];
	let i = [];
	for (let e in n) {
		let r = n[e];
		r.isInGroup(t) && i.push(r);
	}
	return i.length == 0 && e.err("No node type or group '" + t + "' found"), i;
}
function Yl(e) {
	if (e.eat("(")) {
		let t = Ul(e);
		return e.eat(")") || e.err("Missing closing paren"), t;
	}
	if (/\W/.test(e.next)) e.err("Unexpected token '" + e.next + "'");
	else {
		let t = Jl(e, e.next).map((t) => (e.inline == null ? e.inline = t.isInline : e.inline != t.isInline && e.err("Mixing inline and block content"), {
			type: "name",
			value: t
		}));
		return e.pos++, t.length == 1 ? t[0] : {
			type: "choice",
			exprs: t
		};
	}
}
function Xl(e) {
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
function Zl(e, t) {
	return t - e;
}
function Ql(e, t) {
	let n = [];
	return r(t), n.sort(Zl);
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
function $l(e) {
	let t = Object.create(null);
	return n(Ql(e, 0));
	function n(r) {
		let i = [];
		r.forEach((t) => {
			e[t].forEach(({ term: t, to: n }) => {
				if (!t) return;
				let r;
				for (let e = 0; e < i.length; e++) i[e][0] == t && (r = i[e][1]);
				Ql(e, n).forEach((e) => {
					r || i.push([t, r = []]), r.indexOf(e) == -1 && r.push(e);
				});
			});
		});
		let a = t[r.join(",")] = new Vl(r.indexOf(e.length - 1) > -1);
		for (let e = 0; e < i.length; e++) {
			let r = i[e][1].sort(Zl);
			a.next.push({
				type: i[e][0],
				next: t[r.join(",")] || n(r)
			});
		}
		return a;
	}
}
function eu(e, t) {
	for (let n = 0, r = [e]; n < r.length; n++) {
		let e = r[n], i = !e.validEnd, a = [];
		for (let t = 0; t < e.next.length; t++) {
			let { type: n, next: o } = e.next[t];
			a.push(n.name), i && !(n.isText || n.hasRequiredAttrs()) && (i = !1), r.indexOf(o) == -1 && r.push(o);
		}
		i && t.err("Only non-generatable nodes (" + a.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
	}
}
function tu(e) {
	let t = Object.create(null);
	for (let n in e) {
		let r = e[n];
		if (!r.hasDefault) return null;
		t[n] = r.default;
	}
	return t;
}
function nu(e, t) {
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
function ru(e, t) {
	let n = Object.create(null);
	if (t) for (let r in t) n[r] = new ou(e, r, t[r]);
	return n;
}
var iu = class e {
	constructor(e, t, n) {
		this.name = e, this.schema = t, this.spec = n, this.markSet = null, this.groups = n.group ? n.group.split(" ") : [], this.attrs = ru(e, n.attrs), this.defaultAttrs = tu(this.attrs), this.contentMatch = null, this.inlineContent = null, this.isBlock = !(n.inline || e == "text"), this.isText = e == "text";
	}
	get isInline() {
		return !this.isBlock;
	}
	get isTextblock() {
		return this.isBlock && this.inlineContent;
	}
	get isLeaf() {
		return this.contentMatch == Vl.empty;
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
		return !e && this.defaultAttrs ? this.defaultAttrs : nu(this.attrs, e);
	}
	create(e = null, t, n) {
		if (this.isText) throw Error("NodeType.create can't construct text nodes");
		return new Il(this, this.computeAttrs(e), I.from(t), L.setFrom(n));
	}
	createChecked(e = null, t, n) {
		return t = I.from(t), this.checkContent(t), new Il(this, this.computeAttrs(e), t, L.setFrom(n));
	}
	createAndFill(e = null, t, n) {
		if (e = this.computeAttrs(e), t = I.from(t), t.size) {
			let e = this.contentMatch.fillBefore(t);
			if (!e) return null;
			t = e.append(t);
		}
		let r = this.contentMatch.matchFragment(t), i = r && r.fillBefore(I.empty, !0);
		return i ? new Il(this, e, t.append(i), L.setFrom(n)) : null;
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
function au(e, t, n) {
	let r = n.split("|");
	return (n) => {
		let i = n === null ? "null" : typeof n;
		if (r.indexOf(i) < 0) throw RangeError(`Expected value of type ${r} for attribute ${t} on type ${e}, got ${i}`);
	};
}
var ou = class {
	constructor(e, t, n) {
		this.hasDefault = Object.prototype.hasOwnProperty.call(n, "default"), this.default = n.default, this.validate = typeof n.validate == "string" ? au(e, t, n.validate) : n.validate;
	}
	get isRequired() {
		return !this.hasDefault;
	}
}, su = class e {
	constructor(e, t, n, r) {
		this.name = e, this.rank = t, this.schema = n, this.spec = r, this.attrs = ru(e, r.attrs), this.excluded = null;
		let i = tu(this.attrs);
		this.instance = i ? new L(this, i) : null;
	}
	create(e = null) {
		return !e && this.instance ? this.instance : new L(this, nu(this.attrs, e));
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
}, cu = class {
	constructor(e) {
		this.linebreakReplacement = null, this.cached = Object.create(null);
		let t = this.spec = {};
		for (let n in e) t[n] = e[n];
		t.nodes = ll.from(e.nodes), t.marks = ll.from(e.marks || {}), this.nodes = iu.compile(this.spec.nodes, this), this.marks = su.compile(this.spec.marks, this);
		let n = Object.create(null);
		for (let e in this.nodes) {
			if (e in this.marks) throw RangeError(e + " can not be both a node and a mark");
			let t = this.nodes[e], r = t.spec.content || "", i = t.spec.marks;
			if (t.contentMatch = n[r] || (n[r] = Vl.parse(r, this.nodes)), t.inlineContent = t.contentMatch.inlineContent, t.spec.linebreakReplacement) {
				if (this.linebreakReplacement) throw RangeError("Multiple linebreak nodes defined");
				if (!t.isInline || !t.isLeaf) throw RangeError("Linebreak replacement nodes must be inline leaf nodes");
				this.linebreakReplacement = t;
			}
			t.markSet = i == "_" ? null : i ? lu(this, i.split(" ")) : i == "" || !t.inlineContent ? [] : null;
		}
		for (let e in this.marks) {
			let t = this.marks[e], n = t.spec.excludes;
			t.excluded = n == null ? [t] : n == "" ? [] : lu(this, n.split(" "));
		}
		this.nodeFromJSON = (e) => Il.fromJSON(this, e), this.markFromJSON = (e) => L.fromJSON(this, e), this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached.wrappings = Object.create(null);
	}
	node(e, t = null, n, r) {
		if (typeof e == "string") e = this.nodeType(e);
		else if (!(e instanceof iu)) throw RangeError("Invalid node type: " + e);
		else if (e.schema != this) throw RangeError("Node type from different schema used (" + e.name + ")");
		return e.createChecked(t, n, r);
	}
	text(e, t) {
		let n = this.nodes.text;
		return new Rl(n, n.defaultAttrs, e, L.setFrom(t));
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
function lu(e, t) {
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
function uu(e) {
	return e.tag != null;
}
function du(e) {
	return e.style != null;
}
var fu = class e {
	constructor(e, t) {
		this.schema = e, this.rules = t, this.tags = [], this.styles = [];
		let n = this.matchedStyles = [];
		t.forEach((e) => {
			if (uu(e)) this.tags.push(e);
			else if (du(e)) {
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
		let n = new xu(this, t, !1);
		return n.addAll(e, L.none, t.from, t.to), n.finish();
	}
	parseSlice(e, t = {}) {
		let n = new xu(this, t, !0);
		return n.addAll(e, L.none, t.from, t.to), R.maxOpen(n.finish());
	}
	matchTag(e, t, n) {
		for (let r = n ? this.tags.indexOf(n) + 1 : 0; r < this.tags.length; r++) {
			let n = this.tags[r];
			if (Cu(e, n.tag) && (n.namespace === void 0 || e.namespaceURI == n.namespace) && (!n.context || t.matchesContext(n.context))) {
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
				n(e = wu(e)), e.mark || e.ignore || e.clearMark || (e.mark = t);
			});
		}
		for (let t in e.nodes) {
			let r = e.nodes[t].spec.parseDOM;
			r && r.forEach((e) => {
				n(e = wu(e)), e.node || e.ignore || e.mark || (e.node = t);
			});
		}
		return t;
	}
	static fromSchema(t) {
		return t.cached.domParser || (t.cached.domParser = new e(t, e.schemaRules(t)));
	}
}, pu = {
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
}, mu = {
	head: !0,
	noscript: !0,
	object: !0,
	script: !0,
	style: !0,
	title: !0
}, hu = {
	ol: !0,
	ul: !0
}, gu = 1, _u = 2, vu = 4;
function yu(e, t, n) {
	return t == null ? e && e.whitespace == "pre" ? 3 : n & -5 : (t ? gu : 0) | (t === "full" ? _u : 0);
}
var bu = class {
	constructor(e, t, n, r, i, a) {
		this.type = e, this.attrs = t, this.marks = n, this.solid = r, this.options = a, this.content = [], this.activeMarks = L.none, this.match = i || (a & vu ? null : e.contentMatch);
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
		if (!(this.options & gu)) {
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
		return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : e.parentNode && !pu.hasOwnProperty(e.parentNode.nodeName.toLowerCase());
	}
}, xu = class {
	constructor(e, t, n) {
		this.parser = e, this.options = t, this.isOpen = n, this.open = 0, this.localPreserveWS = !1;
		let r = t.topNode, i, a = yu(null, t.preserveWhitespace, 0) | (n ? vu : 0);
		i = r ? new bu(r.type, r.attrs, L.none, !0, t.topMatch || r.type.contentMatch, a) : n ? new bu(null, null, L.none, !0, null, a) : new bu(e.schema.topNodeType, null, L.none, !0, null, a), this.nodes = [i], this.find = t.findPositions, this.needsBlock = !1;
	}
	get top() {
		return this.nodes[this.open];
	}
	addDOM(e, t) {
		e.nodeType == 3 ? this.addTextNode(e, t) : e.nodeType == 1 && this.addElement(e, t);
	}
	addTextNode(e, t) {
		let n = e.nodeValue, r = this.top, i = r.options & _u ? "full" : this.localPreserveWS || (r.options & gu) > 0, { schema: a } = this.parser;
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
		hu.hasOwnProperty(a) && this.parser.normalizeLists && Su(e);
		let s = this.options.ruleFromNode && this.options.ruleFromNode(e) || (o = this.parser.matchTag(e, this, n));
		out: if (s ? s.ignore : mu.hasOwnProperty(a)) this.findInside(e), this.ignoreFallback(e, t);
		else if (!s || s.skip || s.closeParent) {
			s && s.closeParent ? this.open = Math.max(0, this.open - 1) : s && s.skip.nodeType && (e = s.skip);
			let n, r = this.needsBlock;
			if (pu.hasOwnProperty(a)) i.content.length && i.content[0].isInline && this.open && (this.open--, i = this.top), n = !0, i.type || (this.needsBlock = !0);
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
			for (let i of r.concat(e.marks)) (t.type ? t.type.allowsMarkType(i.type) : Tu(i.type, e.type)) && (n = i.addToSet(n));
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
		let o = yu(e, i, a.options);
		a.options & vu && a.content.length == 0 && (o |= vu);
		let s = L.none;
		return n = n.filter((t) => !(a.type ? a.type.allowsMarkType(t.type) : Tu(t.type, e)) || (s = t.addToSet(s), !1)), this.nodes.push(new bu(e, t, s, r, null, o)), this.open++, n;
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
		else this.localPreserveWS && (this.nodes[t].options |= gu);
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
function Su(e) {
	for (let t = e.firstChild, n = null; t; t = t.nextSibling) {
		let e = t.nodeType == 1 ? t.nodeName.toLowerCase() : null;
		e && hu.hasOwnProperty(e) && n ? (n.appendChild(t), t = n) : e == "li" ? n = t : e && (n = null);
	}
}
function Cu(e, t) {
	return (e.matches || e.msMatchesSelector || e.webkitMatchesSelector || e.mozMatchesSelector).call(e, t);
}
function wu(e) {
	let t = {};
	for (let n in e) t[n] = e[n];
	return t;
}
function Tu(e, t) {
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
var Eu = class e {
	constructor(e, t) {
		this.nodes = e, this.marks = t;
	}
	serializeFragment(e, t = {}, n) {
		n ||= Ou(t).createDocumentFragment();
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
		if (e.isText) return Ou(t).createTextNode(e.text);
		let { dom: n, contentDOM: r } = Mu(Ou(t), this.nodes[e.type.name](e), null, e.attrs);
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
		return r && Mu(Ou(n), r(e, t), null, e.attrs);
	}
	static renderSpec(e, t, n = null, r) {
		return typeof t == "string" ? { dom: e.createTextNode(t) } : Mu(e, t, n, r);
	}
	static fromSchema(t) {
		return t.cached.domSerializer || (t.cached.domSerializer = new e(this.nodesFromSchema(t), this.marksFromSchema(t)));
	}
	static nodesFromSchema(e) {
		let t = Du(e.nodes);
		return t.text ||= (e) => e.text, t;
	}
	static marksFromSchema(e) {
		return Du(e.marks);
	}
};
function Du(e) {
	let t = {};
	for (let n in e) {
		let r = e[n].spec.toDOM;
		r && (t[n] = r);
	}
	return t;
}
function Ou(e) {
	return e.document || window.document;
}
var ku = /* @__PURE__ */ new WeakMap();
function Au(e) {
	let t = ku.get(e);
	return t === void 0 && ku.set(e, t = ju(e)), t;
}
function ju(e) {
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
function Mu(e, t, n, r) {
	if (t.nodeType == 1) return { dom: t };
	if (t.dom && t.dom.nodeType == 1) return t;
	let i = t[0], a;
	if (typeof i != "string") throw RangeError("Invalid array passed to renderSpec");
	if (r && (a = Au(r)) && a.indexOf(t) > -1) throw RangeError("Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.");
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
			let { dom: t, contentDOM: i } = Mu(e, a, n, r);
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
var Nu = 65535, Pu = 2 ** 16;
function Fu(e, t) {
	return e + t * Pu;
}
function Iu(e) {
	return e & Nu;
}
function Lu(e) {
	return (e - (e & Nu)) / Pu;
}
var Ru = 1, zu = 2, Bu = 4, Vu = 8, Hu = class {
	constructor(e, t, n) {
		this.pos = e, this.delInfo = t, this.recover = n;
	}
	get deleted() {
		return (this.delInfo & Vu) > 0;
	}
	get deletedBefore() {
		return (this.delInfo & 5) > 0;
	}
	get deletedAfter() {
		return (this.delInfo & 6) > 0;
	}
	get deletedAcross() {
		return (this.delInfo & Bu) > 0;
	}
}, Uu = class e {
	constructor(t, n = !1) {
		if (this.ranges = t, this.inverted = n, !t.length && e.empty) return e.empty;
	}
	recover(e) {
		let t = 0, n = Iu(e);
		if (!this.inverted) for (let e = 0; e < n; e++) t += this.ranges[e * 3 + 2] - this.ranges[e * 3 + 1];
		return this.ranges[n * 3] + t + Lu(e);
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
				let d = e == (t < 0 ? s : u) ? null : Fu(o / 3, e - s), f = 0;
				return c && (f |= e == s ? zu : e == u ? Ru : Bu, (t < 0 ? e != s : e != u) && (f |= Vu)), new Hu(a, f, d);
			}
			r += l - c;
		}
		return n ? e + r : new Hu(e + r, 0, null);
	}
	touches(e, t) {
		let n = 0, r = Iu(t), i = this.inverted ? 2 : 1, a = this.inverted ? 1 : 2;
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
Uu.empty = new Uu([]);
var Wu = class e {
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
		return n ? e : new Hu(e, r, null);
	}
}, Gu = Object.create(null), Ku = class {
	getMap() {
		return Uu.empty;
	}
	merge(e) {
		return null;
	}
	static fromJSON(e, t) {
		if (!t || !t.stepType) throw RangeError("Invalid input for Step.fromJSON");
		let n = Gu[t.stepType];
		if (!n) throw RangeError(`No step type ${t.stepType} defined`);
		return n.fromJSON(e, t);
	}
	static jsonID(e, t) {
		if (e in Gu) throw RangeError("Duplicate use of step JSON ID " + e);
		return Gu[e] = t, t.prototype.jsonID = e, t;
	}
}, qu = class e {
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
			if (t instanceof _l) return e.fail(t.message);
			throw t;
		}
	}
};
function Ju(e, t, n) {
	let r = [];
	for (let i = 0; i < e.childCount; i++) {
		let a = e.child(i);
		a.content.size && (a = a.copy(Ju(a.content, t, a))), a.isInline && (a = t(a, n, i)), r.push(a);
	}
	return I.fromArray(r);
}
var Yu = class e extends Ku {
	constructor(e, t, n) {
		super(), this.from = e, this.to = t, this.mark = n;
	}
	apply(e) {
		let t = e.slice(this.from, this.to), n = e.resolve(this.from), r = n.node(n.sharedDepth(this.to)), i = new R(Ju(t.content, (e, t) => !e.isAtom || !t.type.allowsMarkType(this.mark.type) ? e : e.mark(this.mark.addToSet(e.marks)), r), t.openStart, t.openEnd);
		return qu.fromReplace(e, this.from, this.to, i);
	}
	invert(t) {
		let n = [];
		return t.nodesBetween(this.from, this.to, (t, r) => {
			if (t.isInline && t.isAtom) {
				let i = this.mark.addToSet(t.marks);
				if (!L.sameSet(i, t.marks)) {
					let a = Math.max(this.from, r), o = Math.min(this.to, r + t.nodeSize);
					Zu(Xu, a, o, this.mark, n);
					for (let r of t.marks) r.isInSet(i) || Zu(e, a, o, r, n);
				}
			}
		}), n.length == 1 ? n[0] : new Qu(n);
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
Ku.jsonID("addMark", Yu);
var Xu = class e extends Ku {
	constructor(e, t, n) {
		super(), this.from = e, this.to = t, this.mark = n;
	}
	apply(e) {
		let t = e.slice(this.from, this.to), n = new R(Ju(t.content, (e) => e.mark(this.mark.removeFromSet(e.marks)), e), t.openStart, t.openEnd);
		return qu.fromReplace(e, this.from, this.to, n);
	}
	invert(e) {
		let t = [];
		return e.nodesBetween(this.from, this.to, (e, n) => {
			e.isInline && e.isAtom && this.mark.isInSet(e.marks) && Zu(Yu, Math.max(this.from, n), Math.min(this.to, n + e.nodeSize), this.mark, t);
		}), t.length == 1 ? t[0] : new Qu(t);
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
Ku.jsonID("removeMark", Xu);
function Zu(e, t, n, r, i) {
	let a = i.length ? i[i.length - 1] : null;
	a && a instanceof e && a.to == t && a.mark.eq(r) ? i[i.length - 1] = new e(a.from, n, r) : i.push(new e(t, n, r));
}
var Qu = class e extends Ku {
	constructor(e) {
		super(), this.steps = e;
	}
	apply(e) {
		for (let t of this.steps) {
			let n = t.apply(e);
			if (!n.doc) return n;
			e = n.doc;
		}
		return new qu(e, null);
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
		return new e(n.steps.map((e) => Ku.fromJSON(t, e)));
	}
};
Ku.jsonID("markSet", Qu);
var $u = class e extends Ku {
	constructor(e, t) {
		super(), this.pos = e, this.mark = t;
	}
	apply(e) {
		let t = e.nodeAt(this.pos);
		if (!t) return qu.fail("No node at mark step's position");
		let n = t.type.create(t.attrs, null, this.mark.addToSet(t.marks));
		return qu.fromReplace(e, this.pos, this.pos + 1, new R(I.from(n), 0, +!t.isLeaf));
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
		return new ed(this.pos, this.mark);
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
Ku.jsonID("addNodeMark", $u);
var ed = class e extends Ku {
	constructor(e, t) {
		super(), this.pos = e, this.mark = t;
	}
	apply(e) {
		let t = e.nodeAt(this.pos);
		if (!t) return qu.fail("No node at mark step's position");
		let n = t.type.create(t.attrs, null, this.mark.removeFromSet(t.marks));
		return qu.fromReplace(e, this.pos, this.pos + 1, new R(I.from(n), 0, +!t.isLeaf));
	}
	invert(e) {
		let t = e.nodeAt(this.pos);
		return !t || !this.mark.isInSet(t.marks) ? this : new $u(this.pos, this.mark);
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
Ku.jsonID("removeNodeMark", ed);
var td = class e extends Ku {
	constructor(e, t, n, r = !1) {
		super(), this.from = e, this.to = t, this.slice = n, this.structure = r;
	}
	apply(e) {
		return this.structure && rd(e, this.from, this.to) ? qu.fail("Structure replace would overwrite content") : qu.fromReplace(e, this.from, this.to, this.slice);
	}
	getMap() {
		return new Uu([
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
td.MAP_BIAS = 1, Ku.jsonID("replace", td);
var nd = class e extends Ku {
	constructor(e, t, n, r, i, a, o = !1) {
		super(), this.from = e, this.to = t, this.gapFrom = n, this.gapTo = r, this.slice = i, this.insert = a, this.structure = o;
	}
	apply(e) {
		if (this.structure && (rd(e, this.from, this.gapFrom) || rd(e, this.gapTo, this.to))) return qu.fail("Structure gap-replace would overwrite content");
		let t = e.slice(this.gapFrom, this.gapTo);
		if (t.openStart || t.openEnd) return qu.fail("Gap is not a flat range");
		let n = this.slice.insertAt(this.insert, t.content);
		return n ? qu.fromReplace(e, this.from, this.to, n) : qu.fail("Content does not fit in gap");
	}
	getMap() {
		return new Uu([
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
Ku.jsonID("replaceAround", nd);
function rd(e, t, n) {
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
function id(e, t, n, r) {
	let i = [];
	e.doc.nodesBetween(t, n, (e, a, o) => {
		if (!e.isInline) return;
		let s = e.marks;
		!r.isInSet(s) && o.type.allowsMarkType(r.type) && Zu(Yu, Math.max(a, t), Math.min(a + e.nodeSize, n), r, i);
	}), i.forEach((t) => e.step(t));
}
function ad(e, t, n, r) {
	let i = [], a = 0;
	e.doc.nodesBetween(t, n, (e, o) => {
		if (!e.isInline || !e.isAtom) return;
		a++;
		let s = null;
		if (r instanceof su) {
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
	}), i.forEach((t) => e.step(new Xu(t.from, t.to, t.style)));
}
function od(e, t, n, r = n.contentMatch, i = !0) {
	let a = e.doc.nodeAt(t), o = [], s = t + 1;
	for (let t = 0; t < a.childCount; t++) {
		let c = a.child(t), l = s + c.nodeSize, u = r.matchType(c.type);
		if (!u) o.push(new td(s, l, R.empty));
		else {
			r = u;
			for (let t = 0; t < c.marks.length; t++) n.allowsMarkType(c.marks[t].type) || e.step(new Xu(s, l, c.marks[t]));
			if (i && c.isText && n.whitespace != "pre") {
				let e, t = /\r?\n|\r/g, r;
				for (; e = t.exec(c.text);) r ||= new R(I.from(n.schema.text(" ", n.allowedMarks(c.marks))), 0, 0), o.push(new td(s + e.index, s + e.index + e[0].length, r));
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
function sd(e, t, n) {
	return (t == 0 || e.canReplace(t, e.childCount)) && (n == e.childCount || e.canReplace(0, n));
}
function cd(e) {
	let t = e.parent.content.cutByIndex(e.startIndex, e.endIndex);
	for (let n = e.depth, r = 0, i = 0;; --n) {
		let a = e.$from.node(n), o = e.$from.index(n) + r, s = e.$to.indexAfter(n) - i;
		if (n < e.depth && a.canReplace(o, s, t)) return n;
		if (n == 0 || a.type.spec.isolating || !sd(a, o, s)) break;
		o && (r = 1), s < a.childCount && (i = 1);
	}
	return null;
}
function ld(e, t, n) {
	let { $from: r, $to: i, depth: a } = t, o = r.before(a + 1), s = i.after(a + 1), c = o, l = s, u = I.empty, d = 0;
	for (let e = a, t = !1; e > n; e--) t || r.index(e) > 0 ? (t = !0, u = I.from(r.node(e).copy(u)), d++) : c--;
	let f = I.empty, p = 0;
	for (let e = a, t = !1; e > n; e--) t || i.after(e + 1) < i.end(e) ? (t = !0, f = I.from(i.node(e).copy(f)), p++) : l++;
	e.step(new nd(c, l, o, s, new R(u.append(f), d, p), u.size - d, !0));
}
function ud(e, t, n = null, r = e) {
	let i = fd(e, t), a = i && pd(r, t);
	return a ? i.map(dd).concat({
		type: t,
		attrs: n
	}).concat(a.map(dd)) : null;
}
function dd(e) {
	return {
		type: e,
		attrs: null
	};
}
function fd(e, t) {
	let { parent: n, startIndex: r, endIndex: i } = e, a = n.contentMatchAt(r).findWrapping(t);
	if (!a) return null;
	let o = a.length ? a[0] : t;
	return n.canReplaceWith(r, i, o) ? a : null;
}
function pd(e, t) {
	let { parent: n, startIndex: r, endIndex: i } = e, a = n.child(r), o = t.contentMatch.findWrapping(a.type);
	if (!o) return null;
	let s = (o.length ? o[o.length - 1] : t).contentMatch;
	for (let e = r; s && e < i; e++) s = s.matchType(n.child(e).type);
	return !s || !s.validEnd ? null : o;
}
function md(e, t, n) {
	let r = I.empty;
	for (let e = n.length - 1; e >= 0; e--) {
		if (r.size) {
			let t = n[e].type.contentMatch.matchFragment(r);
			if (!t || !t.validEnd) throw RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper");
		}
		r = I.from(n[e].type.create(n[e].attrs, r));
	}
	let i = t.start, a = t.end;
	e.step(new nd(i, a, i, a, new R(r, 0, 0), n.length, !0));
}
function hd(e, t, n, r, i) {
	if (!r.isTextblock) throw RangeError("Type given to setBlockType should be a textblock");
	let a = e.steps.length;
	e.doc.nodesBetween(t, n, (t, n) => {
		let o = typeof i == "function" ? i(t) : i;
		if (t.isTextblock && !t.hasMarkup(r, o) && vd(e.doc, e.mapping.slice(a).map(n), r)) {
			let i = null;
			if (r.schema.linebreakReplacement) {
				let e = r.whitespace == "pre", t = !!r.contentMatch.matchType(r.schema.linebreakReplacement);
				e && !t ? i = !1 : !e && t && (i = !0);
			}
			i === !1 && _d(e, t, n, a), od(e, e.mapping.slice(a).map(n, 1), r, void 0, i === null);
			let s = e.mapping.slice(a), c = s.map(n, 1), l = s.map(n + t.nodeSize, 1);
			return e.step(new nd(c, l, c + 1, l - 1, new R(I.from(r.create(o, null, t.marks)), 0, 0), 1, !0)), i === !0 && gd(e, t, n, a), !1;
		}
	});
}
function gd(e, t, n, r) {
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
function _d(e, t, n, r) {
	t.forEach((i, a) => {
		if (i.type == i.type.schema.linebreakReplacement) {
			let i = e.mapping.slice(r).map(n + 1 + a);
			e.replaceWith(i, i + 1, t.type.schema.text("\n"));
		}
	});
}
function vd(e, t, n) {
	let r = e.resolve(t), i = r.index();
	return r.parent.canReplaceWith(i, i + 1, n);
}
function yd(e, t, n, r, i) {
	let a = e.doc.nodeAt(t);
	if (!a) throw RangeError("No node at given position");
	n ||= a.type;
	let o = n.create(r, null, i || a.marks);
	if (a.isLeaf) return e.replaceWith(t, t + a.nodeSize, o);
	if (!n.validContent(a.content)) throw RangeError("Invalid content for node type " + n.name);
	e.step(new nd(t, t + a.nodeSize, t + 1, t + a.nodeSize - 1, new R(I.from(o), 0, 0), 1, !0));
}
function bd(e, t, n = 1, r) {
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
function xd(e, t, n = 1, r) {
	let i = e.doc.resolve(t), a = I.empty, o = I.empty;
	for (let e = i.depth, t = i.depth - n, s = n - 1; e > t; e--, s--) {
		a = I.from(i.node(e).copy(a));
		let t = r && r[s];
		o = I.from(t ? t.type.create(t.attrs, o) : i.node(e).copy(o));
	}
	e.step(new td(t, t, new R(a.append(o), n, n), !0));
}
function Sd(e, t) {
	let n = e.resolve(t), r = n.index();
	return wd(n.nodeBefore, n.nodeAfter) && n.parent.canReplace(r, r + 1);
}
function Cd(e, t) {
	t.content.size || e.type.compatibleContent(t.type);
	let n = e.contentMatchAt(e.childCount), { linebreakReplacement: r } = e.type.schema;
	for (let i = 0; i < t.childCount; i++) {
		let a = t.child(i), o = a.type == r ? e.type.schema.nodes.text : a.type;
		if (n = n.matchType(o), !n || !e.type.allowsMarks(a.marks)) return !1;
	}
	return n.validEnd;
}
function wd(e, t) {
	return !!(e && t && !e.isLeaf && Cd(e, t));
}
function Td(e, t, n = -1) {
	let r = e.resolve(t);
	for (let e = r.depth;; e--) {
		let i, a, o = r.index(e);
		if (e == r.depth ? (i = r.nodeBefore, a = r.nodeAfter) : n > 0 ? (i = r.node(e + 1), o++, a = r.node(e).maybeChild(o)) : (i = r.node(e).maybeChild(o - 1), a = r.node(e + 1)), i && !i.isTextblock && wd(i, a) && r.node(e).canReplace(o, o + 1)) return t;
		if (e == 0) break;
		t = n < 0 ? r.before(e) : r.after(e);
	}
}
function Ed(e, t, n) {
	let r = null, { linebreakReplacement: i } = e.doc.type.schema, a = e.doc.resolve(t - n), o = a.node().type;
	if (i && o.inlineContent) {
		let e = o.whitespace == "pre", t = !!o.contentMatch.matchType(i);
		e && !t ? r = !1 : !e && t && (r = !0);
	}
	let s = e.steps.length;
	if (r === !1) {
		let r = e.doc.resolve(t + n);
		_d(e, r.node(), r.before(), s);
	}
	o.inlineContent && od(e, t + n - 1, o, a.node().contentMatchAt(a.index()), r == null);
	let c = e.mapping.slice(s), l = c.map(t - n);
	if (e.step(new td(l, c.map(t + n, -1), R.empty, !0)), r === !0) {
		let t = e.doc.resolve(l);
		gd(e, t.node(), t.before(), e.steps.length);
	}
	return e;
}
function Dd(e, t, n) {
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
function Od(e, t, n) {
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
function kd(e, t, n = t, r = R.empty) {
	if (t == n && !r.size) return null;
	let i = e.resolve(t), a = e.resolve(n);
	return Ad(i, a, r) ? new td(t, n, r) : new jd(i, a, r).fit();
}
function Ad(e, t, n) {
	return !n.openStart && !n.openEnd && e.start() == t.start() && e.parent.canReplace(e.index(), t.index(), n.content);
}
var jd = class {
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
		return e > -1 ? new nd(n.pos, e, this.$to.pos, this.$to.end(), s, t) : s.size || n.pos != this.$to.pos ? new td(n.pos, r.pos, s) : null;
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
			n ? (r = Pd(this.unplaced.content, n - 1).firstChild, e = r.content) : e = this.unplaced.content;
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
		return zd(e, -1) <= t ? !1 : (this.unplaced.size > 1 && zd(e, 1) > n && n++, this.unplaced = new R(e, t + 1, n), !0);
	}
	dropNode() {
		let { content: e, openStart: t, openEnd: n } = this.unplaced, r = Pd(e, t);
		if (r.childCount <= 1 && t > 0) {
			let i = e.size - t <= t + r.size;
			this.unplaced = new R(Md(e, t - 1, 1), t - 1, i ? t - 1 : n);
		} else this.unplaced = new R(Md(e, t, 1), t, n);
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
			c++, (c > 1 || s == 0 || e.content.size) && (u = t, l.push(Fd(e.mark(d.allowedMarks(e.marks)), c == 1 ? s : 0, c == o.childCount ? f : -1)));
		}
		let p = c == o.childCount;
		p || (f = -1), this.placed = Nd(this.placed, t, I.from(l)), this.frontier[t].match = u, p && f < 0 && n && n.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
		for (let e = 0, t = l[l.length - 1]; t && e < f; e++) this.frontier.push({
			type: t.type,
			match: t.contentMatchAt(t.childCount)
		}), t = t.lastChild;
		this.unplaced = p ? e == 0 ? R.empty : new R(Md(a.content, e - 1, 1), e - 1, f < 0 ? a.openEnd : e - 1) : new R(Md(a.content, e, c), e, a.openEnd);
	}
	mustMoveInline() {
		if (!this.$to.parent.isTextblock) return -1;
		let e = this.frontier[this.depth], t;
		if (!e.type.isTextblock || !Id(this.$to, this.$to.depth, e.type, e.match, !1) || this.$to.depth == this.depth && (t = this.findCloseLevel(this.$to)) && t.depth == this.depth) return -1;
		let { depth: n } = this.$to, r = this.$to.after(n);
		for (; n > 1 && r == this.$to.end(--n);) ++r;
		return r;
	}
	findCloseLevel(e) {
		scan: for (let t = Math.min(this.depth, e.depth); t >= 0; t--) {
			let { match: n, type: r } = this.frontier[t], i = t < e.depth && e.end(t + 1) == e.pos + (e.depth - (t + 1)), a = Id(e, t, r, n, i);
			if (a) {
				for (let n = t - 1; n >= 0; n--) {
					let { match: t, type: r } = this.frontier[n], i = Id(e, n, r, t, !0);
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
		t.fit.childCount && (this.placed = Nd(this.placed, t.depth, t.fit)), e = t.move;
		for (let n = t.depth + 1; n <= e.depth; n++) {
			let t = e.node(n), r = t.type.contentMatch.fillBefore(t.content, !0, e.index(n));
			this.openFrontierNode(t.type, t.attrs, r);
		}
		return e;
	}
	openFrontierNode(e, t = null, n) {
		let r = this.frontier[this.depth];
		r.match = r.match.matchType(e), this.placed = Nd(this.placed, this.depth, I.from(e.create(t, n))), this.frontier.push({
			type: e,
			match: e.contentMatch
		});
	}
	closeFrontierNode() {
		let e = this.frontier.pop().match.fillBefore(I.empty, !0);
		e.childCount && (this.placed = Nd(this.placed, this.frontier.length, e));
	}
};
function Md(e, t, n) {
	return t == 0 ? e.cutByIndex(n, e.childCount) : e.replaceChild(0, e.firstChild.copy(Md(e.firstChild.content, t - 1, n)));
}
function Nd(e, t, n) {
	return t == 0 ? e.append(n) : e.replaceChild(e.childCount - 1, e.lastChild.copy(Nd(e.lastChild.content, t - 1, n)));
}
function Pd(e, t) {
	for (let n = 0; n < t; n++) e = e.firstChild.content;
	return e;
}
function Fd(e, t, n) {
	if (t <= 0) return e;
	let r = e.content;
	return t > 1 && (r = r.replaceChild(0, Fd(r.firstChild, t - 1, r.childCount == 1 ? n - 1 : 0))), t > 0 && (r = e.type.contentMatch.fillBefore(r).append(r), n <= 0 && (r = r.append(e.type.contentMatch.matchFragment(r).fillBefore(I.empty, !0)))), e.copy(r);
}
function Id(e, t, n, r, i) {
	let a = e.node(t), o = i ? e.indexAfter(t) : e.index(t);
	if (o == a.childCount && !n.compatibleContent(a.type)) return null;
	let s = r.fillBefore(a.content, !0, o);
	return s && !Ld(n, a.content, o) ? s : null;
}
function Ld(e, t, n) {
	for (let r = n; r < t.childCount; r++) if (!e.allowsMarks(t.child(r).marks)) return !0;
	return !1;
}
function Rd(e) {
	return e.spec.defining || e.spec.definingForContent;
}
function zd(e, t) {
	for (let n = 0;; n++) {
		let r = t < 0 ? e.firstChild : e.lastChild;
		if (!r || r.isAtom) return n;
		e = r.content;
	}
}
function Bd(e, t, n, r) {
	if (!r.size) return e.deleteRange(t, n);
	let i = e.doc.resolve(t), a = e.doc.resolve(n);
	if (Ad(i, a, r)) return e.step(new td(t, n, r));
	let o = Wd(i, a);
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
		let t = l[e], n = Rd(t.type);
		if (n && !t.sameMarkup(i.node(Math.abs(s) - 1))) u = e;
		else if (n || !t.type.isTextblock) break;
	}
	for (let t = r.openStart; t >= 0; t--) {
		let s = (t + u + 1) % (r.openStart + 1), d = l[s];
		if (d) for (let t = 0; t < o.length; t++) {
			let l = o[(t + c) % o.length], u = !0;
			l < 0 && (u = !1, l = -l);
			let f = i.node(l - 1), p = i.index(l - 1);
			if (f.canReplaceWith(p, p, d.type, d.marks)) return e.replace(i.before(l), u ? a.after(l) : n, new R(Vd(r.content, 0, r.openStart, s), s, r.openEnd));
		}
	}
	let d = e.steps.length;
	for (let s = o.length - 1; s >= 0 && (e.replace(t, n, r), !(e.steps.length > d)); s--) {
		let e = o[s];
		e < 0 || (t = i.before(e), n = a.after(e));
	}
}
function Vd(e, t, n, r, i) {
	if (t < n) {
		let i = e.firstChild;
		e = e.replaceChild(0, i.copy(Vd(i.content, t + 1, n, r, i)));
	}
	if (t > r) {
		let t = i.contentMatchAt(0), n = t.fillBefore(e).append(e);
		e = n.append(t.matchFragment(n).fillBefore(I.empty, !0));
	}
	return e;
}
function Hd(e, t, n, r) {
	if (!r.isInline && t == n && e.doc.resolve(t).parent.content.size) {
		let i = Dd(e.doc, t, r.type);
		i != null && (t = n = i);
	}
	e.replaceRange(t, n, new R(I.from(r), 0, 0));
}
function Ud(e, t, n) {
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
	let a = Wd(r, i);
	for (let t = 0; t < a.length; t++) {
		let n = a[t], o = t == a.length - 1;
		if (o && n == 0 || r.node(n).type.contentMatch.validEnd) return e.delete(r.start(n), i.end(n));
		if (n > 0 && (o || r.node(n - 1).canReplace(r.index(n - 1), i.indexAfter(n - 1)))) return e.delete(r.before(n), i.after(n));
	}
	for (let a = 1; a <= r.depth && a <= i.depth; a++) if (t - r.start(a) == r.depth - a && n > r.end(a) && i.end(a) - n != i.depth - a && r.start(a - 1) == i.start(a - 1) && r.node(a - 1).canReplace(r.index(a - 1), i.index(a - 1))) return e.delete(r.before(a), n);
	e.delete(t, n);
}
function Wd(e, t) {
	let n = [], r = Math.min(e.depth, t.depth);
	for (let i = r; i >= 0; i--) {
		let r = e.start(i);
		if (r < e.pos - (e.depth - i) || t.end(i) > t.pos + (t.depth - i) || e.node(i).type.spec.isolating || t.node(i).type.spec.isolating) break;
		(r == t.start(i) || i == e.depth && i == t.depth && e.parent.inlineContent && t.parent.inlineContent && i && t.start(i - 1) == r - 1) && n.push(i);
	}
	return n;
}
var Gd = class e extends Ku {
	constructor(e, t, n) {
		super(), this.pos = e, this.attr = t, this.value = n;
	}
	apply(e) {
		let t = e.nodeAt(this.pos);
		if (!t) return qu.fail("No node at attribute step's position");
		let n = Object.create(null);
		for (let e in t.attrs) n[e] = t.attrs[e];
		n[this.attr] = this.value;
		let r = t.type.create(n, null, t.marks);
		return qu.fromReplace(e, this.pos, this.pos + 1, new R(I.from(r), 0, +!t.isLeaf));
	}
	getMap() {
		return Uu.empty;
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
Ku.jsonID("attr", Gd);
var Kd = class e extends Ku {
	constructor(e, t) {
		super(), this.attr = e, this.value = t;
	}
	apply(e) {
		let t = Object.create(null);
		for (let n in e.attrs) t[n] = e.attrs[n];
		t[this.attr] = this.value;
		let n = e.type.create(t, e.content, e.marks);
		return qu.ok(n);
	}
	getMap() {
		return Uu.empty;
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
Ku.jsonID("docAttr", Kd);
var qd = class extends Error {};
qd = function e(t) {
	let n = Error.call(this, t);
	return n.__proto__ = e.prototype, n;
}, qd.prototype = Object.create(Error.prototype), qd.prototype.constructor = qd, qd.prototype.name = "TransformError";
var Jd = class {
	constructor(e) {
		this.doc = e, this.steps = [], this.docs = [], this.mapping = new Wu();
	}
	get before() {
		return this.docs.length ? this.docs[0] : this.doc;
	}
	step(e) {
		let t = this.maybeStep(e);
		if (t.failed) throw new qd(t.failed);
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
		let r = kd(this.doc, e, t, n);
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
		return Bd(this, e, t, n), this;
	}
	replaceRangeWith(e, t, n) {
		return Hd(this, e, t, n), this;
	}
	deleteRange(e, t) {
		return Ud(this, e, t), this;
	}
	lift(e, t) {
		return ld(this, e, t), this;
	}
	join(e, t = 1) {
		return Ed(this, e, t), this;
	}
	wrap(e, t) {
		return md(this, e, t), this;
	}
	setBlockType(e, t = e, n, r = null) {
		return hd(this, e, t, n, r), this;
	}
	setNodeMarkup(e, t, n = null, r) {
		return yd(this, e, t, n, r), this;
	}
	setNodeAttribute(e, t, n) {
		return this.step(new Gd(e, t, n)), this;
	}
	setDocAttribute(e, t) {
		return this.step(new Kd(e, t)), this;
	}
	addNodeMark(e, t) {
		return this.step(new $u(e, t)), this;
	}
	removeNodeMark(e, t) {
		let n = this.doc.nodeAt(e);
		if (!n) throw RangeError("No node at position " + e);
		if (t instanceof L) t.isInSet(n.marks) && this.step(new ed(e, t));
		else {
			let r = n.marks, i, a = [];
			for (; i = t.isInSet(r);) a.push(new ed(e, i)), r = i.removeFromSet(r);
			for (let e = a.length - 1; e >= 0; e--) this.step(a[e]);
		}
		return this;
	}
	split(e, t = 1, n) {
		return xd(this, e, t, n), this;
	}
	addMark(e, t, n) {
		return id(this, e, t, n), this;
	}
	removeMark(e, t, n) {
		return ad(this, e, t, n), this;
	}
	clearIncompatible(e, t, n) {
		return od(this, e, t, n), this;
	}
}, Yd = Object.create(null), z = class {
	constructor(e, t, n) {
		this.$anchor = e, this.$head = t, this.ranges = n || [new Xd(e.min(t), e.max(t))];
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
			e.replaceRange(l.map(s.pos), l.map(c.pos), o ? R.empty : t), o == 0 && af(e, i, (n ? n.isInline : r && r.isTextblock) ? -1 : 1);
		}
	}
	replaceWith(e, t) {
		let n = e.steps.length, r = this.ranges;
		for (let i = 0; i < r.length; i++) {
			let { $from: a, $to: o } = r[i], s = e.mapping.slice(n), c = s.map(a.pos), l = s.map(o.pos);
			i ? e.deleteRange(c, l) : (e.replaceRangeWith(c, l, t), af(e, n, t.isInline ? -1 : 1));
		}
	}
	static findFrom(e, t, n = !1) {
		let r = e.parent.inlineContent ? new B(e) : rf(e.node(0), e.parent, e.pos, e.index(), t, n);
		if (r) return r;
		for (let r = e.depth - 1; r >= 0; r--) {
			let i = t < 0 ? rf(e.node(0), e.node(r), e.before(r + 1), e.index(r), t, n) : rf(e.node(0), e.node(r), e.after(r + 1), e.index(r) + 1, t, n);
			if (i) return i;
		}
		return null;
	}
	static near(e, t = 1) {
		return this.findFrom(e, t) || this.findFrom(e, -t) || new tf(e.node(0));
	}
	static atStart(e) {
		return rf(e, e, 0, 0, 1) || new tf(e);
	}
	static atEnd(e) {
		return rf(e, e, e.content.size, e.childCount, -1) || new tf(e);
	}
	static fromJSON(e, t) {
		if (!t || !t.type) throw RangeError("Invalid input for Selection.fromJSON");
		let n = Yd[t.type];
		if (!n) throw RangeError(`No selection type ${t.type} defined`);
		return n.fromJSON(e, t);
	}
	static jsonID(e, t) {
		if (e in Yd) throw RangeError("Duplicate use of selection JSON ID " + e);
		return Yd[e] = t, t.prototype.jsonID = e, t;
	}
	getBookmark() {
		return B.between(this.$anchor, this.$head).getBookmark();
	}
};
z.prototype.visible = !0;
var Xd = class {
	constructor(e, t) {
		this.$from = e, this.$to = t;
	}
}, Zd = !1;
function Qd(e) {
	!Zd && !e.parent.inlineContent && (Zd = !0, console.warn("TextSelection endpoint not pointing into a node with inline content (" + e.parent.type.name + ")"));
}
var B = class e extends z {
	constructor(e, t = e) {
		Qd(e), Qd(t), super(e, t);
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
		return new $d(this.anchor, this.head);
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
var $d = class e {
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
		return new ef(this.anchor);
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
var ef = class e {
	constructor(e) {
		this.anchor = e;
	}
	map(t) {
		let { deleted: n, pos: r } = t.mapResult(this.anchor);
		return n ? new $d(r, r) : new e(r);
	}
	resolve(e) {
		let t = e.resolve(this.anchor), n = t.nodeAfter;
		return n && V.isSelectable(n) ? new V(t) : z.near(t);
	}
}, tf = class e extends z {
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
		return nf;
	}
};
z.jsonID("all", tf);
var nf = {
	map() {
		return this;
	},
	resolve(e) {
		return new tf(e);
	}
};
function rf(e, t, n, r, i, a = !1) {
	if (t.inlineContent) return B.create(e, n);
	for (let o = r - (i > 0 ? 0 : 1); i > 0 ? o < t.childCount : o >= 0; o += i) {
		let r = t.child(o);
		if (!r.isAtom) {
			let t = rf(e, r, n + i, i < 0 ? r.childCount : 0, i, a);
			if (t) return t;
		} else if (!a && V.isSelectable(r)) return V.create(e, n - (i < 0 ? r.nodeSize : 0));
		n += r.nodeSize * i;
	}
	return null;
}
function af(e, t, n) {
	let r = e.steps.length - 1;
	if (r < t) return;
	let i = e.steps[r];
	if (!(i instanceof td || i instanceof nd)) return;
	let a = e.mapping.maps[r], o;
	a.forEach((e, t, n, r) => {
		o ??= r;
	}), e.setSelection(z.near(e.doc.resolve(o), n));
}
var of = 1, sf = 2, cf = 4, lf = class extends Jd {
	constructor(e) {
		super(e.doc), this.curSelectionFor = 0, this.updated = 0, this.meta = Object.create(null), this.time = Date.now(), this.curSelection = e.selection, this.storedMarks = e.storedMarks;
	}
	get selection() {
		return this.curSelectionFor < this.steps.length && (this.curSelection = this.curSelection.map(this.doc, this.mapping.slice(this.curSelectionFor)), this.curSelectionFor = this.steps.length), this.curSelection;
	}
	setSelection(e) {
		if (e.$from.doc != this.doc) throw RangeError("Selection passed to setSelection must point at the current document");
		return this.curSelection = e, this.curSelectionFor = this.steps.length, this.updated = (this.updated | of) & -3, this.storedMarks = null, this;
	}
	get selectionSet() {
		return (this.updated & of) > 0;
	}
	setStoredMarks(e) {
		return this.storedMarks = e, this.updated |= sf, this;
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
		return (this.updated & sf) > 0;
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
		return this.updated |= cf, this;
	}
	get scrolledIntoView() {
		return (this.updated & cf) > 0;
	}
};
function uf(e, t) {
	return !t || !e ? e : e.bind(t);
}
var df = class {
	constructor(e, t, n) {
		this.name = e, this.init = uf(t.init, n), this.apply = uf(t.apply, n);
	}
}, ff = [
	new df("doc", {
		init(e) {
			return e.doc || e.schema.topNodeType.createAndFill();
		},
		apply(e) {
			return e.doc;
		}
	}),
	new df("selection", {
		init(e, t) {
			return e.selection || z.atStart(t.doc);
		},
		apply(e) {
			return e.selection;
		}
	}),
	new df("storedMarks", {
		init(e) {
			return e.storedMarks || null;
		},
		apply(e, t, n, r) {
			return r.selection.$cursor ? e.storedMarks : null;
		}
	}),
	new df("scrollToSelection", {
		init() {
			return 0;
		},
		apply(e, t) {
			return e.scrolledIntoView ? t + 1 : t;
		}
	})
], pf = class {
	constructor(e, t) {
		this.schema = e, this.plugins = [], this.pluginsByKey = Object.create(null), this.fields = ff.slice(), t && t.forEach((e) => {
			if (this.pluginsByKey[e.key]) throw RangeError("Adding different instances of a keyed plugin (" + e.key + ")");
			this.plugins.push(e), this.pluginsByKey[e.key] = e, e.spec.state && this.fields.push(new df(e.key, e.spec.state, e));
		});
	}
}, mf = class e {
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
		return new lf(this);
	}
	static create(t) {
		let n = new pf(t.doc ? t.doc.type.schema : t.schema, t.plugins), r = new e(n);
		for (let e = 0; e < n.fields.length; e++) r[n.fields[e].name] = n.fields[e].init(t, r);
		return r;
	}
	reconfigure(t) {
		let n = new pf(this.schema, t.plugins), r = n.fields, i = new e(n);
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
		let i = new pf(t.schema, t.plugins), a = new e(i);
		return i.fields.forEach((e) => {
			if (e.name == "doc") a.doc = Il.fromJSON(t.schema, n.doc);
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
function hf(e, t, n) {
	for (let r in e) {
		let i = e[r];
		i instanceof Function ? i = i.bind(t) : r == "handleDOMEvents" && (i = hf(i, t, {})), n[r] = i;
	}
	return n;
}
var H = class {
	constructor(e) {
		this.spec = e, this.props = {}, e.props && hf(e.props, this, this.props), this.key = e.key ? e.key.key : _f("plugin");
	}
	getState(e) {
		return e[this.key];
	}
}, gf = Object.create(null);
function _f(e) {
	return e in gf ? e + "$" + ++gf[e] : (gf[e] = 0, e + "$");
}
var U = class {
	constructor(e = "key") {
		this.key = _f(e);
	}
	get(e) {
		return e.config.pluginsByKey[this.key];
	}
	getState(e) {
		return e[this.key];
	}
}, vf = (e, t) => !e.selection.empty && (t && t(e.tr.deleteSelection().scrollIntoView()), !0);
function yf(e, t) {
	let { $cursor: n } = e.selection;
	return !n || (t ? !t.endOfTextblock("backward", e) : n.parentOffset > 0) ? null : n;
}
var bf = (e, t, n) => {
	let r = yf(e, n);
	if (!r) return !1;
	let i = Ef(r);
	if (!i) {
		let n = r.blockRange(), i = n && cd(n);
		return i != null && (t && t(e.tr.lift(n, i).scrollIntoView()), !0);
	}
	let a = i.nodeBefore;
	if (Wf(e, i, t, -1)) return !0;
	if (r.parent.content.size == 0 && (wf(a, "end") || V.isSelectable(a))) for (let n = r.depth;; n--) {
		let o = kd(e.doc, r.before(n), r.after(n), R.empty);
		if (o && o.slice.size < o.to - o.from) {
			if (t) {
				let n = e.tr.step(o);
				n.setSelection(wf(a, "end") ? z.findFrom(n.doc.resolve(n.mapping.map(i.pos, -1)), -1) : V.create(n.doc, i.pos - a.nodeSize)), t(n.scrollIntoView());
			}
			return !0;
		}
		if (n == 1 || r.node(n - 1).childCount > 1) break;
	}
	return a.isAtom && i.depth == r.depth - 1 ? (t && t(e.tr.delete(i.pos - a.nodeSize, i.pos).scrollIntoView()), !0) : !1;
}, xf = (e, t, n) => {
	let r = yf(e, n);
	if (!r) return !1;
	let i = Ef(r);
	return i ? Cf(e, i, t) : !1;
}, Sf = (e, t, n) => {
	let r = Df(e, n);
	if (!r) return !1;
	let i = Af(r);
	return i ? Cf(e, i, t) : !1;
};
function Cf(e, t, n) {
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
	let s = kd(e.doc, i, o, R.empty);
	if (!s || s.from != i || s instanceof td && s.slice.size >= o - i) return !1;
	if (n) {
		let t = e.tr.step(s);
		t.setSelection(B.create(t.doc, i)), n(t.scrollIntoView());
	}
	return !0;
}
function wf(e, t, n = !1) {
	for (let r = e; r; r = t == "start" ? r.firstChild : r.lastChild) {
		if (r.isTextblock) return !0;
		if (n && r.childCount != 1) return !1;
	}
	return !1;
}
var Tf = (e, t, n) => {
	let { $head: r, empty: i } = e.selection, a = r;
	if (!i) return !1;
	if (r.parent.isTextblock) {
		if (n ? !n.endOfTextblock("backward", e) : r.parentOffset > 0) return !1;
		a = Ef(r);
	}
	let o = a && a.nodeBefore;
	return !o || !V.isSelectable(o) ? !1 : (t && t(e.tr.setSelection(V.create(e.doc, a.pos - o.nodeSize)).scrollIntoView()), !0);
};
function Ef(e) {
	if (!e.parent.type.spec.isolating) for (let t = e.depth - 1; t >= 0; t--) {
		if (e.index(t) > 0) return e.doc.resolve(e.before(t + 1));
		if (e.node(t).type.spec.isolating) break;
	}
	return null;
}
function Df(e, t) {
	let { $cursor: n } = e.selection;
	return !n || (t ? !t.endOfTextblock("forward", e) : n.parentOffset < n.parent.content.size) ? null : n;
}
var Of = (e, t, n) => {
	let r = Df(e, n);
	if (!r) return !1;
	let i = Af(r);
	if (!i) return !1;
	let a = i.nodeAfter;
	if (Wf(e, i, t, 1)) return !0;
	if (r.parent.content.size == 0 && (wf(a, "start") || V.isSelectable(a))) {
		let n = kd(e.doc, r.before(), r.after(), R.empty);
		if (n && n.slice.size < n.to - n.from) {
			if (t) {
				let r = e.tr.step(n);
				r.setSelection(wf(a, "start") ? z.findFrom(r.doc.resolve(r.mapping.map(i.pos)), 1) : V.create(r.doc, r.mapping.map(i.pos))), t(r.scrollIntoView());
			}
			return !0;
		}
	}
	return a.isAtom && i.depth == r.depth - 1 ? (t && t(e.tr.delete(i.pos, i.pos + a.nodeSize).scrollIntoView()), !0) : !1;
}, kf = (e, t, n) => {
	let { $head: r, empty: i } = e.selection, a = r;
	if (!i) return !1;
	if (r.parent.isTextblock) {
		if (n ? !n.endOfTextblock("forward", e) : r.parentOffset < r.parent.content.size) return !1;
		a = Af(r);
	}
	let o = a && a.nodeAfter;
	return !o || !V.isSelectable(o) ? !1 : (t && t(e.tr.setSelection(V.create(e.doc, a.pos)).scrollIntoView()), !0);
};
function Af(e) {
	if (!e.parent.type.spec.isolating) for (let t = e.depth - 1; t >= 0; t--) {
		let n = e.node(t);
		if (e.index(t) + 1 < n.childCount) return e.doc.resolve(e.after(t + 1));
		if (n.type.spec.isolating) break;
	}
	return null;
}
var jf = (e, t) => {
	let n = e.selection, r = n instanceof V, i;
	if (r) {
		if (n.node.isTextblock || !Sd(e.doc, n.from)) return !1;
		i = n.from;
	} else if (i = Td(e.doc, n.from, -1), i == null) return !1;
	if (t) {
		let n = e.tr.join(i);
		r && n.setSelection(V.create(n.doc, i - e.doc.resolve(i).nodeBefore.nodeSize)), t(n.scrollIntoView());
	}
	return !0;
}, Mf = (e, t) => {
	let n = e.selection, r;
	if (n instanceof V) {
		if (n.node.isTextblock || !Sd(e.doc, n.to)) return !1;
		r = n.to;
	} else if (r = Td(e.doc, n.to, 1), r == null) return !1;
	return t && t(e.tr.join(r).scrollIntoView()), !0;
}, Nf = (e, t) => {
	let { $from: n, $to: r } = e.selection, i = n.blockRange(r), a = i && cd(i);
	return a != null && (t && t(e.tr.lift(i, a).scrollIntoView()), !0);
}, Pf = (e, t) => {
	let { $head: n, $anchor: r } = e.selection;
	return !n.parent.type.spec.code || !n.sameParent(r) ? !1 : (t && t(e.tr.insertText("\n").scrollIntoView()), !0);
};
function Ff(e) {
	for (let t = 0; t < e.edgeCount; t++) {
		let { type: n } = e.edge(t);
		if (n.isTextblock && !n.hasRequiredAttrs()) return n;
	}
	return null;
}
var If = (e, t) => {
	let { $head: n, $anchor: r } = e.selection;
	if (!n.parent.type.spec.code || !n.sameParent(r)) return !1;
	let i = n.node(-1), a = n.indexAfter(-1), o = Ff(i.contentMatchAt(a));
	if (!o || !i.canReplaceWith(a, a, o)) return !1;
	if (t) {
		let r = n.after(), i = e.tr.replaceWith(r, r, o.createAndFill());
		i.setSelection(z.near(i.doc.resolve(r), 1)), t(i.scrollIntoView());
	}
	return !0;
}, Lf = (e, t) => {
	let n = e.selection, { $from: r, $to: i } = n;
	if (n instanceof tf || r.parent.inlineContent || i.parent.inlineContent) return !1;
	let a = Ff(i.parent.contentMatchAt(i.indexAfter()));
	if (!a || !a.isTextblock) return !1;
	if (t) {
		let n = (!r.parentOffset && i.index() < i.parent.childCount ? r : i).pos, o = e.tr.insert(n, a.createAndFill());
		o.setSelection(B.create(o.doc, n + 1)), t(o.scrollIntoView());
	}
	return !0;
}, Rf = (e, t) => {
	let { $cursor: n } = e.selection;
	if (!n || n.parent.content.size) return !1;
	if (n.depth > 1 && n.after() != n.end(-1)) {
		let r = n.before();
		if (bd(e.doc, r)) return t && t(e.tr.split(r).scrollIntoView()), !0;
	}
	let r = n.blockRange(), i = r && cd(r);
	return i != null && (t && t(e.tr.lift(r, i).scrollIntoView()), !0);
};
function zf(e) {
	return (t, n) => {
		if (t.selection instanceof V && t.selection.node.isBlock) {
			let { $from: e } = t.selection;
			return !e.parentOffset || !bd(t.doc, e.pos) ? !1 : (n && n(t.tr.split(e.pos).scrollIntoView()), !0);
		}
		if (!t.selection.$from.depth) return !1;
		let r = t.tr;
		!t.selection.empty && (t.selection instanceof B || t.selection instanceof tf) && r.deleteSelection();
		let { $from: i } = r.selection, a = r.steps.length, o = [], s, c, l = !1, u = !1;
		for (let t = i.depth;; t--) if (i.node(t).isBlock) {
			l = i.end(t) == i.pos + (i.depth - t), u = i.start(t) == i.pos - (i.depth - t), c = Ff(i.node(t - 1).contentMatchAt(i.indexAfter(t - 1)));
			let n = e && e(i.parent, l, i);
			o.unshift(n || (l && c ? { type: c } : null)), s = t;
			break;
		} else {
			if (t == 1) return !1;
			o.unshift(null);
		}
		let d = i.pos, f = bd(r.doc, d, o.length, o);
		if (f ||= (o[0] = c ? { type: c } : null, bd(r.doc, d, o.length, o)), !f) return !1;
		if (r.split(d, o.length, o), !l && u && i.node(s).type != c) {
			let e = r.mapping.slice(a), t = e.map(i.before(s)), n = r.doc.resolve(t);
			c && i.node(s - 1).canReplaceWith(n.index(), n.index() + 1, c) && r.setNodeMarkup(e.map(i.before(s)), c);
		}
		return n && n(r.scrollIntoView()), !0;
	};
}
var Bf = zf(), Vf = (e, t) => {
	let { $from: n, to: r } = e.selection, i, a = n.sharedDepth(r);
	return a != 0 && (i = n.before(a), t && t(e.tr.setSelection(V.create(e.doc, i))), !0);
}, Hf = (e, t) => (t && t(e.tr.setSelection(new tf(e.doc))), !0);
function Uf(e, t, n) {
	let r = t.nodeBefore, i = t.nodeAfter, a = t.index();
	return !r || !i || !r.type.compatibleContent(i.type) ? !1 : !r.content.size && t.parent.canReplace(a - 1, a) ? (n && n(e.tr.delete(t.pos - r.nodeSize, t.pos).scrollIntoView()), !0) : !t.parent.canReplace(a, a + 1) || !(i.isTextblock || Sd(e.doc, t.pos)) ? !1 : (n && n(e.tr.join(t.pos).scrollIntoView()), !0);
}
function Wf(e, t, n, r) {
	let i = t.nodeBefore, a = t.nodeAfter, o, s, c = i.type.spec.isolating || a.type.spec.isolating;
	if (!c && Uf(e, t, n)) return !0;
	let l = !c && t.parent.canReplace(t.index(), t.index() + 1);
	if (l && (o = (s = i.contentMatchAt(i.childCount)).findWrapping(a.type)) && s.matchType(o[0] || a.type).validEnd) {
		if (n) {
			let r = t.pos + a.nodeSize, s = I.empty;
			for (let e = o.length - 1; e >= 0; e--) s = I.from(o[e].create(null, s));
			s = I.from(i.copy(s));
			let c = e.tr.step(new nd(t.pos - 1, r, t.pos, r, new R(s, 1, 0), o.length, !0)), l = c.doc.resolve(r + 2 * o.length);
			l.nodeAfter && l.nodeAfter.type == i.type && Sd(c.doc, l.pos) && c.join(l.pos), n(c.scrollIntoView());
		}
		return !0;
	}
	let u = a.type.spec.isolating || r > 0 && c ? null : z.findFrom(t, 1), d = u && u.$from.blockRange(u.$to), f = d && cd(d);
	if (f != null && f >= t.depth) return n && n(e.tr.lift(d, f).scrollIntoView()), !0;
	if (l && wf(a, "start", !0) && wf(i, "end")) {
		let r = i, o = [];
		for (; o.push(r), !r.isTextblock;) r = r.lastChild;
		let s = a, c = 1;
		for (; !s.isTextblock; s = s.firstChild) c++;
		if (r.canReplace(r.childCount, r.childCount, s.content)) {
			if (n) {
				let r = I.empty;
				for (let e = o.length - 1; e >= 0; e--) r = I.from(o[e].copy(r));
				n(e.tr.step(new nd(t.pos - o.length, t.pos + a.nodeSize, t.pos + c, t.pos + a.nodeSize - c, new R(r, o.length, 0), 0, !0)).scrollIntoView());
			}
			return !0;
		}
	}
	return !1;
}
function Gf(e) {
	return function(t, n) {
		let r = t.selection, i = e < 0 ? r.$from : r.$to, a = i.depth;
		for (; i.node(a).isInline;) {
			if (!a) return !1;
			a--;
		}
		return i.node(a).isTextblock ? (n && n(t.tr.setSelection(B.create(t.doc, e < 0 ? i.start(a) : i.end(a)))), !0) : !1;
	};
}
var Kf = Gf(-1), qf = Gf(1);
function Jf(e, t = null) {
	return function(n, r) {
		let { $from: i, $to: a } = n.selection, o = i.blockRange(a), s = o && ud(o, e, t);
		return s ? (r && r(n.tr.wrap(o, s).scrollIntoView()), !0) : !1;
	};
}
function Yf(e, t = null) {
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
function Xf(...e) {
	return function(t, n, r) {
		for (let i = 0; i < e.length; i++) if (e[i](t, n, r)) return !0;
		return !1;
	};
}
var Zf = Xf(vf, bf, Tf), Qf = Xf(vf, Of, kf), $f = {
	Enter: Xf(Pf, Lf, Rf, Bf),
	"Mod-Enter": If,
	Backspace: Zf,
	"Mod-Backspace": Zf,
	"Shift-Backspace": Zf,
	Delete: Qf,
	"Mod-Delete": Qf,
	"Mod-a": Hf
}, ep = {
	"Ctrl-h": $f.Backspace,
	"Alt-Backspace": $f["Mod-Backspace"],
	"Ctrl-d": $f.Delete,
	"Ctrl-Alt-Backspace": $f["Mod-Delete"],
	"Alt-Delete": $f["Mod-Delete"],
	"Alt-d": $f["Mod-Delete"],
	"Ctrl-a": Kf,
	"Ctrl-e": qf
};
for (let e in $f) ep[e] = $f[e];
typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os < "u" && os.platform && os.platform();
// node_modules/prosemirror-schema-list/dist/index.js
function tp(e, t = null) {
	return function(n, r) {
		let { $from: i, $to: a } = n.selection, o = i.blockRange(a);
		if (!o) return !1;
		let s = r ? n.tr : null;
		return np(s, o, e, t) ? (r && r(s.scrollIntoView()), !0) : !1;
	};
}
function np(e, t, n, r = null) {
	let i = !1, a = t, o = t.$from.doc;
	if (t.depth >= 2 && t.$from.node(t.depth - 1).type.compatibleContent(n) && t.startIndex == 0) {
		if (t.$from.index(t.depth - 1) == 0) return !1;
		let e = o.resolve(t.start - 2);
		a = new Pl(e, e, t.depth), t.endIndex < t.parent.childCount && (t = new Pl(t.$from, o.resolve(t.$to.end(t.depth)), t.depth)), i = !0;
	}
	let s = ud(a, n, r, t);
	return s ? (e && rp(e, t, s, i, n), !0) : !1;
}
function rp(e, t, n, r, i) {
	let a = I.empty;
	for (let e = n.length - 1; e >= 0; e--) a = I.from(n[e].type.create(n[e].attrs, a));
	e.step(new nd(t.start - (r ? 2 : 0), t.end, t.start, t.end, new R(a, 0, 0), n.length, !0));
	let o = 0;
	for (let e = 0; e < n.length; e++) n[e].type == i && (o = e + 1);
	let s = n.length - o, c = t.start + n.length - (r ? 2 : 0), l = t.parent;
	for (let n = t.startIndex, r = t.endIndex, i = !0; n < r; n++, i = !1) !i && s && bd(e.doc, c, s) && (e.split(c, s), c += 2 * s), c += l.child(n).nodeSize;
	return e;
}
function ip(e, t) {
	return e instanceof iu ? t == e : e.indexOf(t) > -1;
}
function ap(e) {
	return function(t, n) {
		let { $from: r, $to: i } = t.selection, a = r.blockRange(i, (t) => t.childCount > 0 && ip(e, t.firstChild.type));
		return a ? n ? ip(e, r.node(a.depth - 1).type) ? op(t, n, a) : sp(t, n, a) : !0 : !1;
	};
}
function op(e, t, n) {
	let r = e.tr, i = n.end, a = n.$to.end(n.depth), o = n.parent.child(n.endIndex - 1).type;
	i < a && (r.step(new nd(i - 1, a, i, a, new R(I.from(o.create(null, n.parent.copy())), 1, 0), 1, !0)), n = new Pl(r.doc.resolve(n.$from.pos), r.doc.resolve(a), n.depth));
	let s = cd(n);
	if (s == null) return !1;
	r.lift(n, s);
	let c = r.doc.resolve(r.mapping.map(i, -1) - 1);
	return Sd(r.doc, c.pos) && c.nodeBefore.type == c.nodeAfter.type && r.join(c.pos), t(r.scrollIntoView()), !0;
}
function sp(e, t, n) {
	let r = e.tr, i = n.parent;
	for (let e = n.end, t = n.endIndex - 1, a = n.startIndex; t > a; t--) e -= i.child(t).nodeSize, r.delete(e - 1, e + 1);
	let a = r.doc.resolve(n.start), o = a.nodeAfter;
	if (r.mapping.map(n.end) != n.start + a.nodeAfter.nodeSize) return !1;
	let s = n.startIndex == 0, c = n.endIndex == i.childCount, l = a.node(-1), u = a.index(-1);
	if (!l.canReplace(u + +!s, u + 1, o.content.append(c ? I.empty : I.from(i)))) return !1;
	let d = a.pos, f = d + o.nodeSize;
	return r.step(new nd(d - +!!s, f + +!!c, d + 1, f - 1, new R((s ? I.empty : I.from(i.copy(I.empty))).append(c ? I.empty : I.from(i.copy(I.empty))), +!s, +!c), +!s)), t(r.scrollIntoView()), !0;
}
function cp(e) {
	return function(t, n) {
		let { $from: r, $to: i } = t.selection, a = r.blockRange(i, (t) => t.childCount > 0 && ip(e, t.firstChild.type));
		if (!a) return !1;
		let o = a.startIndex;
		if (o == 0) return !1;
		let s = a.parent, c = s.child(o - 1);
		if (!ip(e, c.type)) return !1;
		if (n) {
			let e = c.lastChild && c.lastChild.type == s.type, r = I.from(e ? c.lastChild.lastChild.type.create() : null), i = new R(I.from(c.type.create(null, I.from(s.type.create(null, r)))), e ? 3 : 1, 0), o = a.start, l = a.end;
			n(t.tr.step(new nd(o - (e ? 3 : 1), l, o, l, i, 1, !0)).scrollIntoView());
		}
		return !0;
	};
}
// node_modules/prosemirror-view/dist/index.js
var lp = function(e) {
	for (var t = 0;; t++) if (e = e.previousSibling, !e) return t;
}, up = function(e) {
	let t = e.assignedSlot || e.parentNode;
	return t && t.nodeType == 11 ? t.host : t;
}, dp = null, fp = function(e, t, n) {
	let r = dp ||= document.createRange();
	return r.setEnd(e, n ?? e.nodeValue.length), r.setStart(e, t || 0), r;
}, pp = function() {
	dp = null;
}, mp = function(e, t, n, r) {
	return n && (gp(e, t, n, r, -1) || gp(e, t, n, r, 1));
}, hp = /^(img|br|input|textarea|hr)$/i;
function gp(e, t, n, r, i) {
	for (;;) {
		if (e == n && t == r) return !0;
		if (t == (i < 0 ? 0 : _p(e))) {
			let n = e.parentNode;
			if (!n || !W(n) || Cp(e) || hp.test(e.nodeName) || e.contentEditable == "false") return !1;
			t = lp(e) + (i < 0 ? 0 : 1), e = n;
		} else if (W(e)) {
			let n = e.childNodes[t + (i < 0 ? -1 : 0)];
			if (W(n) && n.contentEditable == "false") {
				if (n.pmViewDesc?.ignoreForSelection) t += i;
				else return !1;
			} else e = n, t = i < 0 ? _p(e) : 0;
		} else return !1;
	}
}
function _p(e) {
	return e.nodeType == 3 ? e.nodeValue.length : e.childNodes.length;
}
function W(e) {
	return e.nodeType == 1;
}
function vp(e) {
	return e.nodeType == 3;
}
function yp(e, t) {
	return t ? e.contains(W(t) ? t : t.parentNode) : !1;
}
function bp(e, t) {
	for (;;) {
		if (vp(e) && t) return e;
		if (W(e) && t > 0) {
			if (e.contentEditable == "false") return null;
			e = e.childNodes[t - 1], t = _p(e);
		} else if (e.parentNode && !Cp(e)) t = lp(e), e = e.parentNode;
		else return null;
	}
}
function xp(e, t) {
	for (;;) {
		if (vp(e) && t < e.nodeValue.length) return e;
		if (W(e) && t < e.childNodes.length) {
			if (e.contentEditable == "false") return null;
			e = e.childNodes[t], t = 0;
		} else if (e.parentNode && !Cp(e)) t = lp(e) + 1, e = e.parentNode;
		else return null;
	}
}
function Sp(e, t, n) {
	for (let r = t == 0, i = t == _p(e); r || i;) {
		if (e == n) return !0;
		let t = lp(e);
		if (e = e.parentNode, !e) return !1;
		r &&= t == 0, i &&= t == _p(e);
	}
}
function Cp(e) {
	let t;
	for (let n = e; n && !(t = n.pmViewDesc); n = n.parentNode);
	return t && t.node && t.node.isBlock && (t.dom == e || t.contentDOM == e);
}
var wp = function(e) {
	return e.focusNode && mp(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset);
};
function Tp(e, t) {
	let n = document.createEvent("Event");
	return n.initEvent("keydown", !0, !0), n.keyCode = e, n.key = n.code = t, n;
}
function Ep(e) {
	let t = e.activeElement;
	for (; t && t.shadowRoot;) t = t.shadowRoot.activeElement;
	return t;
}
function Dp(e, t, n) {
	if (e.caretPositionFromPoint) try {
		let r = e.caretPositionFromPoint(t, n);
		if (r) return {
			node: r.offsetNode,
			offset: Math.min(_p(r.offsetNode), r.offset)
		};
	} catch {}
	if (e.caretRangeFromPoint) {
		let r = e.caretRangeFromPoint(t, n);
		if (r) return {
			node: r.startContainer,
			offset: Math.min(_p(r.startContainer), r.startOffset)
		};
	}
}
var Op = typeof navigator < "u" ? navigator : null, kp = typeof document < "u" ? document : null, Ap = Op && Op.userAgent || "", jp = /Edge\/(\d+)/.exec(Ap), Mp = /MSIE \d/.exec(Ap), Np = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Ap), Pp = !!(Mp || Np || jp), Fp = Mp ? document.documentMode : Np ? +Np[1] : jp ? +jp[1] : 0, Ip = !Pp && /gecko\/(\d+)/i.test(Ap);
Ip && +(/Firefox\/(\d+)/.exec(Ap) || [0, 0])[1];
var Lp = !Pp && /Chrome\/(\d+)/.exec(Ap), Rp = !!Lp, zp = Lp ? +Lp[1] : 0, Bp = !Pp && !!Op && /Apple Computer/.test(Op.vendor), Vp = Bp && (/Mobile\/\w+/.test(Ap) || !!Op && Op.maxTouchPoints > 2), Hp = Vp || (Op ? /Mac/.test(Op.platform) : !1), Up = Op ? /Win/.test(Op.platform) : !1, Wp = /Android \d/.test(Ap), Gp = !!kp && "webkitFontSmoothing" in kp.documentElement.style, Kp = Gp ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
function qp(e) {
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
function Jp(e, t) {
	return typeof e == "number" ? e : e[t];
}
function Yp(e) {
	let t = e.getBoundingClientRect(), n = t.width / e.offsetWidth || 1, r = t.height / e.offsetHeight || 1;
	return {
		left: t.left,
		right: t.left + e.clientWidth * n,
		top: t.top,
		bottom: t.top + e.clientHeight * r
	};
}
function Xp(e, t, n) {
	if (!dm(t) && t.left == 0) return;
	let r = e.someProp("scrollThreshold") || 0, i = e.someProp("scrollMargin") || 5, a = e.dom.ownerDocument;
	for (let o = n || e.dom; o;) {
		if (!W(o)) {
			o = up(o);
			continue;
		}
		let e = o == a.body, n = e ? qp(a) : Yp(o), s = 0, c = 0;
		if (t.top < n.top + Jp(r, "top") ? c = -(n.top - t.top + Jp(i, "top")) : t.bottom > n.bottom - Jp(r, "bottom") && (c = t.bottom - t.top > n.bottom - n.top ? t.top + Jp(i, "top") - n.top : t.bottom - n.bottom + Jp(i, "bottom")), t.left < n.left + Jp(r, "left") ? s = -(n.left - t.left + Jp(i, "left")) : t.right > n.right - Jp(r, "right") && (s = t.right - n.right + Jp(i, "right")), s || c) {
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
		o = l == "absolute" ? o.offsetParent : up(o);
	}
}
function Zp(e) {
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
		stack: Qp(e.dom)
	};
}
function Qp(e) {
	let t = [], n = e.ownerDocument;
	for (let r = e; r && (t.push({
		dom: r,
		top: r.scrollTop,
		left: r.scrollLeft
	}), e != n); r = up(r));
	return t;
}
function $p({ refDOM: e, refTop: t, stack: n }) {
	let r = e ? e.getBoundingClientRect().top : 0;
	em(n, r == 0 ? 0 : r - t);
}
function em(e, t) {
	for (let n = 0; n < e.length; n++) {
		let { dom: r, top: i, left: a } = e[n];
		r.scrollTop != i + t && (r.scrollTop = i + t), r.scrollLeft != a && (r.scrollLeft = a);
	}
}
var tm = null;
function nm(e) {
	if (e.setActive) return e.setActive();
	if (tm) return e.focus(tm);
	let t = Qp(e);
	e.focus(tm == null ? { get preventScroll() {
		return tm = { preventScroll: !0 }, !0;
	} } : void 0), tm || (tm = !1, em(t, 0));
}
function rm(e, t) {
	let n, r = 2e8, i, a = 0, o = t.top, s = t.top, c, l;
	for (let u = e.firstChild, d = 0; u; u = u.nextSibling, d++) {
		let e;
		if (W(u)) e = u.getClientRects();
		else if (vp(u)) e = fp(u).getClientRects();
		else continue;
		for (let f = 0; f < e.length; f++) {
			let p = e[f];
			if (p.top <= o && p.bottom >= s) {
				o = Math.max(p.bottom, o), s = Math.min(p.top, s);
				let e = p.left > t.left ? p.left - t.left : p.right < t.left ? t.left - p.right : 0;
				if (e < r) {
					n = u, r = e, i = e && vp(n) ? {
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
	return !n && c && (n = c, i = l, r = 0), n && vp(n) ? im(n, i) : !n || r ? {
		node: e,
		offset: a
	} : rm(n, i);
}
function im(e, t) {
	let n = e.nodeValue.length, r = document.createRange(), i;
	for (let a = 0; a < n; a++) {
		r.setEnd(e, a + 1), r.setStart(e, a);
		let n = fm(r, 1);
		if (n.top != n.bottom && am(t, n)) {
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
function am(e, t) {
	return e.left >= t.left - 1 && e.left <= t.right + 1 && e.top >= t.top - 1 && e.top <= t.bottom + 1;
}
function om(e, t) {
	let n = e.parentNode;
	return n && /^li$/i.test(n.nodeName) && t.left < e.getBoundingClientRect().left ? n : e;
}
function sm(e, t, n) {
	let { node: r, offset: i } = rm(t, n), a = -1;
	if (W(r) && !r.firstChild) {
		let e = r.getBoundingClientRect();
		a = e.left != e.right && n.left > (e.left + e.right) / 2 ? 1 : -1;
	}
	return e.docView.posFromDOM(r, i, a);
}
function cm(e, t, n, r) {
	let i = -1;
	for (let n = t, a = !1; n != e.dom;) {
		let t = e.docView.nearestDesc(n, !0), o;
		if (!t) return null;
		if (W(t.dom) && (t.node.isBlock && t.parent || !t.contentDOM) && ((o = t.dom.getBoundingClientRect()).width || o.height) && (t.node.isBlock && t.parent && !/^T(R|BODY|HEAD|FOOT)$/.test(t.dom.nodeName) && (!a && o.left > r.left || o.top > r.top ? i = t.posBefore : (!a && o.right < r.left || o.bottom < r.top) && (i = t.posAfter), a = !0), !t.contentDOM && i < 0 && !t.node.isText)) return (t.node.isBlock ? r.top < (o.top + o.bottom) / 2 : r.left < (o.left + o.right) / 2) ? t.posBefore : t.posAfter;
		n = t.dom.parentNode;
	}
	return i > -1 ? i : e.docView.posFromDOM(t, n, -1);
}
function lm(e, t, n) {
	let r = e.childNodes.length;
	if (r && n.top < n.bottom) for (let i = Math.max(0, Math.min(r - 1, Math.floor(r * (t.top - n.top) / (n.bottom - n.top)) - 2)), a = i;;) {
		let n = e.childNodes[a];
		if (W(n)) {
			let e = n.getClientRects();
			for (let r = 0; r < e.length; r++) {
				let i = e[r];
				if (am(t, i)) return lm(n, t, i);
			}
		}
		if ((a = (a + 1) % r) == i) break;
	}
	return e;
}
function um(e, t) {
	let n = e.dom.ownerDocument, r, i = 0, a = Dp(n, t.left, t.top);
	a && ({node: r, offset: i} = a);
	let o = (e.root.elementFromPoint ? e.root : n).elementFromPoint(t.left, t.top), s;
	if (!o || !e.dom.contains(o)) {
		let n = e.dom.getBoundingClientRect();
		if (!am(t, n) || (o = lm(e.dom, t, n), !o)) return null;
	}
	if (Bp) for (let e = o; r && e; e = up(e)) e.draggable && (r = void 0);
	if (o = om(o, t), r) {
		if (Ip && W(r) && (i = Math.min(i, r.childNodes.length), i < r.childNodes.length)) {
			let e = r.childNodes[i], n;
			e.nodeName == "IMG" && (n = e.getBoundingClientRect()).right <= t.left && n.bottom > t.top && i++;
		}
		let n;
		Gp && i && W(r) && W(n = r.childNodes[i - 1]) && n.contentEditable == "false" && n.getBoundingClientRect().top >= t.top && i--, r == e.dom && i == r.childNodes.length - 1 && W(r.lastChild) && t.top > r.lastChild.getBoundingClientRect().bottom ? s = e.state.doc.content.size : i != 0 && W(r) && r.childNodes[i - 1].nodeName == "BR" || (s = cm(e, r, i, t));
	}
	s ??= sm(e, o, t);
	let c = e.docView.nearestDesc(o, !0);
	return {
		pos: s,
		inside: c ? c.posAtStart - c.border : -1
	};
}
function dm(e) {
	return e.top < e.bottom || e.left < e.right;
}
function fm(e, t) {
	let n = e.getClientRects();
	if (n.length) {
		let e = n[t < 0 ? 0 : n.length - 1];
		if (dm(e)) return e;
	}
	return Array.prototype.find.call(n, dm) || e.getBoundingClientRect();
}
var pm = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
function mm(e, t, n) {
	let { node: r, offset: i, atom: a } = e.docView.domFromPos(t, n < 0 ? -1 : 1), o = Gp || Ip;
	if (vp(r)) {
		if (o && (pm.test(r.nodeValue) || (n < 0 ? !i : i == r.nodeValue.length))) {
			let e = fm(fp(r, i, i), n);
			if (Ip && i && /\s/.test(r.nodeValue[i - 1]) && i < r.nodeValue.length) {
				let t = fm(fp(r, i - 1, i - 1), -1);
				if (t.top == e.top) {
					let n = fm(fp(r, i, i + 1), -1);
					if (n.top != e.top) return hm(n, n.left < t.left);
				}
			}
			return e;
		}
		{
			let e = i, t = i, a = n < 0 ? 1 : -1;
			return n < 0 && !i ? (t++, a = -1) : n >= 0 && i == r.nodeValue.length ? (e--, a = 1) : n < 0 ? e-- : t++, hm(fm(fp(r, e, t), a), a < 0);
		}
	}
	if (!e.state.doc.resolve(t - (a || 0)).parent.inlineContent) {
		if (a == null && i && (n < 0 || i == _p(r))) {
			let e = r.childNodes[i - 1];
			if (W(e)) return gm(e.getBoundingClientRect(), !1);
		}
		if (a == null && i < _p(r)) {
			let e = r.childNodes[i];
			if (W(e)) return gm(e.getBoundingClientRect(), !0);
		}
		return gm(r.getBoundingClientRect(), n >= 0);
	}
	if (a == null && i && (n < 0 || i == _p(r))) {
		let e = r.childNodes[i - 1], t = vp(e) ? fp(e, _p(e) - +!o) : W(e) && (e.nodeName != "BR" || !e.nextSibling) ? e : null;
		if (t) return hm(fm(t, 1), !1);
	}
	if (a == null && i < _p(r)) {
		let e = r.childNodes[i];
		for (; e.pmViewDesc && e.pmViewDesc.ignoreForCoords;) e = e.nextSibling;
		let t = e ? vp(e) ? fp(e, 0, +!o) : W(e) ? e : null : null;
		if (t) return hm(fm(t, -1), !0);
	}
	return hm(fm(vp(r) ? fp(r) : r, -n), n >= 0);
}
function hm(e, t) {
	if (e.width == 0) return e;
	let n = t ? e.left : e.right;
	return {
		top: e.top,
		bottom: e.bottom,
		left: n,
		right: n
	};
}
function gm(e, t) {
	if (e.height == 0) return e;
	let n = t ? e.top : e.bottom;
	return {
		top: n,
		bottom: n,
		left: e.left,
		right: e.right
	};
}
function _m(e, t, n) {
	let r = e.state, i = e.root.activeElement;
	r != t && e.updateState(t), i != e.dom && e.focus();
	try {
		return n();
	} finally {
		r != t && e.updateState(r), i != e.dom && i && i.focus();
	}
}
function vm(e, t, n) {
	let r = t.selection, i = n == "up" ? r.$from : r.$to;
	return _m(e, t, () => {
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
		let r = mm(e, i.pos, 1);
		for (let e = t.firstChild; e; e = e.nextSibling) {
			let t;
			if (W(e)) t = e.getClientRects();
			else if (vp(e)) t = fp(e, 0, e.nodeValue.length).getClientRects();
			else continue;
			for (let e = 0; e < t.length; e++) {
				let i = t[e];
				if (i.bottom > i.top + 1 && (n == "up" ? r.top - i.top > (i.bottom - r.top) * 2 : i.bottom - r.bottom > (r.bottom - i.top) * 2)) return !1;
			}
		}
		return !0;
	});
}
var ym = /[\u0590-\u08ac]/;
function bm(e, t, n) {
	let { $head: r } = t.selection;
	if (!r.parent.isTextblock) return !1;
	let i = r.parentOffset, a = !i, o = i == r.parent.content.size, s = e.domSelection();
	return s ? !ym.test(r.parent.textContent) || !s.modify ? n == "left" || n == "backward" ? a : o : _m(e, t, () => {
		let { focusNode: t, focusOffset: i, anchorNode: a, anchorOffset: o } = e.domSelectionRange(), c = s.caretBidiLevel;
		s.modify("move", n, "character");
		let l = r.depth ? e.docView.domAfterPos(r.before()) : e.dom, { focusNode: u, focusOffset: d } = e.domSelectionRange(), f = u && !yp(l, u) || t == u && i == d;
		try {
			s.collapse(a, o), t && (t != a || i != o) && s.extend && s.extend(t, i);
		} catch {}
		return c != null && (s.caretBidiLevel = c), f;
	}) : r.pos == r.start() || r.pos == r.end();
}
var xm = null, Sm = null, Cm = !1;
function wm(e, t, n) {
	return xm == t && Sm == n ? Cm : (xm = t, Sm = n, Cm = n == "up" || n == "down" ? vm(e, t, n) : bm(e, t, n));
}
var Tm = 0, Em = 1, Dm = 2, Om = 3, km = class {
	constructor(e, t, n, r) {
		this.parent = e, this.children = t, this.dom = n, this.contentDOM = r, this.dirty = Tm, n.pmViewDesc = this;
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
		if (this.contentDOM && yp(this.contentDOM, e)) {
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
		if (e == this.dom && this.contentDOM) r = t > lp(this.contentDOM);
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
				if (n && (a = i.nodeDOM) && !(W(a) ? yp(a, e) : a == e)) n = !1;
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
			if (e.size || !(e instanceof Im || e instanceof Am && e.side >= 0)) break;
		}
		if (t <= 0) {
			let e, r = !0;
			for (; e = n ? this.children[n - 1] : null, e && e.dom.parentNode != this.contentDOM; n--, r = !1);
			return e && t && r && !e.border && !e.domAtom ? e.domFromPos(e.size, t) : {
				node: this.contentDOM,
				offset: e ? lp(e.dom) + 1 : 0
			};
		}
		{
			let e, r = !0;
			for (; e = n < this.children.length ? this.children[n] : null, e && e.dom.parentNode != this.contentDOM; n++, r = !1);
			return e && r && !e.border && !e.domAtom ? e.domFromPos(0, t) : {
				node: this.contentDOM,
				offset: e ? lp(e.dom) : this.contentDOM.childNodes.length
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
						r = lp(n.dom) + 1;
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
						i = lp(n.dom);
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
		if ((Ip || Bp) && e == t) {
			let { node: e, offset: t } = o;
			if (vp(e)) {
				if (u = !!(t && e.nodeValue[t - 1] == "\n"), u && t == e.nodeValue.length) for (let t = e, n; t; t = t.parentNode) {
					if (n = t.nextSibling) {
						n.nodeName == "BR" && (o = s = {
							node: n.parentNode,
							offset: lp(n) + 1
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
		if (Ip && l.focusNode && l.focusNode != s.node && W(l.focusNode)) {
			let e = l.focusNode.childNodes[l.focusOffset];
			e && e.contentEditable == "false" && (r = !0);
		}
		if (!(r || u && Bp) && mp(o.node, o.offset, l.anchorNode, l.anchorOffset) && mp(s.node, s.offset, l.focusNode, l.focusOffset)) return;
		let d = !1;
		if ((c.extend || e == t) && !(u && Ip)) {
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
					this.dirty = e == n || t == a ? Dm : Em, e == r && t == o && (i.contentLost || i.dom.parentNode != this.contentDOM) ? i.dirty = Om : i.markDirty(e - r, t - r);
					return;
				}
				i.dirty = i.dom == i.contentDOM && i.dom.parentNode == this.contentDOM && !i.children.length ? Dm : Om;
			}
			n = a;
		}
		this.dirty = Dm;
	}
	markParentsDirty() {
		let e = 1;
		for (let t = this.parent; t; t = t.parent, e++) {
			let n = e == 1 ? Dm : Em;
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
}, Am = class extends km {
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
		return this.dirty == Tm && e.type.eq(this.widget.type);
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
}, jm = class extends km {
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
}, Mm = class e extends km {
	constructor(e, t, n, r, i) {
		super(e, [], n, r), this.mark = t, this.spec = i;
	}
	static create(t, n, r, i) {
		let a = i.nodeViews[n.type.name], o = a && a(n, i, r);
		return o && o.dom || (o = Eu.renderSpec(document, n.type.spec.toDOM(n, r), null, n.attrs)), new e(t, n, o.dom, o.contentDOM || o.dom, o);
	}
	parseRule() {
		return this.dirty & Om || this.mark.type.spec.reparseInView ? null : {
			mark: this.mark.type.name,
			attrs: this.mark.attrs,
			contentElement: this.contentDOM
		};
	}
	matchesMark(e) {
		return this.dirty != Om && this.mark.eq(e);
	}
	markDirty(e, t) {
		if (super.markDirty(e, t), this.dirty != Tm) {
			let e = this.parent;
			for (; !e.node;) e = e.parent;
			e.dirty < this.dirty && (e.dirty = this.dirty), this.dirty = Tm;
		}
	}
	slice(t, n, r) {
		let i = e.create(this.parent, this.mark, !0, r), a = this.children, o = this.size;
		n < o && (a = $m(a, n, o, r)), t > 0 && (a = $m(a, 0, t, r));
		for (let e = 0; e < a.length; e++) a[e].parent = i;
		return i.children = a, i;
	}
	ignoreMutation(e) {
		return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e);
	}
	destroy() {
		this.spec.destroy && this.spec.destroy(), super.destroy();
	}
}, Nm = class e extends km {
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
			else if (!vp(u)) throw RangeError("Text must be rendered as a DOM text node");
		} else if (!u) {
			let e = Eu.renderSpec(document, n.type.spec.toDOM(n), null, n.attrs);
			({dom: u, contentDOM: d} = e);
		}
		!d && !n.isText && u.nodeName != "BR" && (u.hasAttribute("contenteditable") || (u.contentEditable = "false"), n.type.spec.draggable && (u.draggable = !0));
		let f = u;
		return u = Wm(u, r, n), l ? c = new Lm(t, n, r, i, u, d || null, f, l) : n.isText ? new Fm(t, n, r, i, u, f) : new e(t, n, r, i, u, d || null, f);
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
		return this.dirty == Tm && e.eq(this.node) && Gm(t, this.outerDeco) && n.eq(this.innerDeco);
	}
	get size() {
		return this.node.nodeSize;
	}
	get border() {
		return +!this.node.isLeaf;
	}
	updateChildren(e, t) {
		let n = this.node.inlineContent, r = t, i = e.composing ? this.localCompositionInfo(e, t) : null, a = i && i.pos > -1 ? i : null, o = i && i.pos < 0, s = new qm(this, a && a.node, e), c = this.node.inlineContent, l = c && this.node.isBlock;
		Xm(this.node, this.innerDeco, (t, i, a) => {
			t.spec.marks ? s.syncToMarks(t.spec.marks, n, e, i) : t.type.side >= 0 && !a && s.syncToMarks(i == this.node.childCount ? L.none : this.node.child(i).marks, n, e, i), s.placeWidget(t, e, r);
		}, (t, a, u, d) => {
			s.syncToMarks(t.marks, n, e, d), l && t.isAtom && !t.isText && s.addHackNode("IMG", s.top);
			let f;
			s.findNodeMatch(t, a, u, d) || o && e.state.selection.from > r && e.state.selection.to < r + t.nodeSize && (f = s.findIndexWithChild(i.node)) > -1 && s.updateNodeAt(t, a, u, f, e) || s.updateNextNode(t, a, u, e, d, r) || s.addNode(t, a, u, e, r), r += t.nodeSize, c && (l = t.isAtom && !t.isText);
		}), s.syncToMarks([], n, e, 0), this.node.isTextblock && s.addTextblockHacks(), s.destroyRest(), (s.changed || this.dirty == Dm) && (a && this.protectLocalComposition(e, a), Rm(this.contentDOM, this.children, e), Vp && Zm(this.dom));
	}
	localCompositionInfo(e, t) {
		let { from: n, to: r } = e.state.selection;
		if (!(e.state.selection instanceof B) || n < t || r > t + this.node.content.size) return null;
		let i = e.input.compositionNode;
		if (!i || !this.dom.contains(i.parentNode)) return null;
		if (this.node.inlineContent) {
			let e = i.nodeValue, a = Qm(this.node.content, e, n - t, r - t);
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
		let a = new jm(this, i, t, r);
		e.input.compositionNodes.push(a), this.children = $m(this.children, n, n + r.length, e, a);
	}
	update(e, t, n, r) {
		return this.dirty == Om || !e.sameMarkup(this.node) ? !1 : (this.updateInner(e, t, n, r), !0);
	}
	updateInner(e, t, n, r) {
		this.updateOuterDeco(t), this.node = e, this.innerDeco = n, this.contentDOM && this.updateChildren(r, this.posAtStart), this.dirty = Tm;
	}
	updateOuterDeco(e) {
		if (Gm(e, this.outerDeco)) return;
		let t = !W(this.nodeDOM), n = this.dom;
		this.dom = Hm(this.dom, this.nodeDOM, Vm(this.outerDeco, this.node, t), Vm(e, this.node, t)), this.dom != n && (n.pmViewDesc = void 0, this.dom.pmViewDesc = this), this.outerDeco = e;
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
function Pm(e, t, n, r, i) {
	Wm(r, t, e);
	let a = new Nm(void 0, e, t, n, r, r, r);
	return a.contentDOM && a.updateChildren(i, 0), a;
}
var Fm = class e extends Nm {
	constructor(e, t, n, r, i, a) {
		super(e, t, n, r, i, null, a);
	}
	parseRule() {
		let e = this.nodeDOM.parentNode;
		for (; e && e != this.dom && !e.pmIsDeco;) e = e.parentNode;
		return { skip: e || !0 };
	}
	update(e, t, n, r) {
		return this.dirty == Om || this.dirty != Tm && !this.inParent() || !e.sameMarkup(this.node) ? !1 : (this.updateOuterDeco(t), (this.dirty != Tm || e.text != this.node.text) && e.text != this.nodeDOM.nodeValue && (this.nodeDOM.nodeValue = e.text, r.trackWrites == this.nodeDOM && (r.trackWrites = null)), this.node = e, this.dirty = Tm, !0);
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
		super.markDirty(e, t), this.dom != this.nodeDOM && (e == 0 || t == this.nodeDOM.nodeValue.length) && (this.dirty = Om);
	}
	get domAtom() {
		return !1;
	}
	isText(e) {
		return this.node.text == e;
	}
}, Im = class extends km {
	parseRule() {
		return { ignore: !0 };
	}
	matchesHack(e) {
		return this.dirty == Tm && this.dom.nodeName == e;
	}
	get domAtom() {
		return !0;
	}
	get ignoreForCoords() {
		return this.dom.nodeName == "IMG";
	}
}, Lm = class extends Nm {
	constructor(e, t, n, r, i, a, o, s) {
		super(e, t, n, r, i, a, o), this.spec = s;
	}
	update(e, t, n, r) {
		if (this.dirty == Om) return !1;
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
function Rm(e, t, n) {
	let r = e.firstChild, i = !1;
	for (let a = 0; a < t.length; a++) {
		let o = t[a], s = o.dom;
		if (s.parentNode == e) {
			for (; s != r;) r = Km(r), i = !0;
			r = r.nextSibling;
		} else i = !0, e.insertBefore(s, r);
		if (o instanceof Mm) {
			let t = r ? r.previousSibling : e.lastChild;
			Rm(o.contentDOM, o.children, n), r = t ? t.nextSibling : e.firstChild;
		}
	}
	for (; r;) r = Km(r), i = !0;
	i && n.trackWrites == e && (n.trackWrites = null);
}
var zm = function(e) {
	e && (this.nodeName = e);
};
zm.prototype = Object.create(null);
var Bm = [new zm()];
function Vm(e, t, n) {
	if (e.length == 0) return Bm;
	let r = n ? Bm[0] : new zm(), i = [r];
	for (let a = 0; a < e.length; a++) {
		let o = e[a].type.attrs;
		if (o) {
			o.nodeName && i.push(r = new zm(o.nodeName));
			for (let e in o) {
				let a = o[e];
				a != null && (n && i.length == 1 && i.push(r = new zm(t.isInline ? "span" : "div")), e == "class" ? r.class = (r.class ? r.class + " " : "") + a : e == "style" ? r.style = (r.style ? r.style + ";" : "") + a : e != "nodeName" && (r[e] = a));
			}
		}
	}
	return i;
}
function Hm(e, t, n, r) {
	if (n == Bm && r == Bm) return t;
	let i = t;
	for (let t = 0; t < r.length; t++) {
		let a = r[t], o = n[t];
		if (t) {
			let t;
			o && o.nodeName == a.nodeName && i != e && (t = i.parentNode) && t.nodeName.toLowerCase() == a.nodeName || (t = document.createElement(a.nodeName), t.pmIsDeco = !0, t.appendChild(i), o = Bm[0]), i = t;
		}
		Um(i, o || Bm[0], a);
	}
	return i;
}
function Um(e, t, n) {
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
function Wm(e, t, n) {
	return Hm(e, e, Bm, Vm(t, n, !W(e)));
}
function Gm(e, t) {
	if (e.length != t.length) return !1;
	for (let n = 0; n < e.length; n++) if (!e[n].type.eq(t[n].type)) return !1;
	return !0;
}
function Km(e) {
	let t = e.nextSibling;
	return e.parentNode.removeChild(e), t;
}
var qm = class {
	constructor(e, t, n) {
		this.lock = t, this.view = n, this.index = 0, this.stack = [], this.changed = !1, this.top = e, this.preMatch = Jm(e.node.content, e);
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
		for (; i < a;) this.destroyRest(), this.top.dirty = Tm, this.index = this.stack.pop(), this.top = this.stack.pop(), a--;
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
				t instanceof Mm && t.dirty != Om && t.mark.type == e[a].type && t.spec.update && !this.isLocked(t.dom) && t.spec.update(e[a]) && (t.mark = e[a], i = this.index, this.changed = !0);
			}
			if (i > -1) i > this.index && (this.changed = !0, this.destroyBetween(this.index, i)), this.top = this.top.children[this.index];
			else {
				let r = Mm.create(this.top, e[a], t, n);
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
		return a.dirty == Om && a.dom == a.contentDOM && (a.dirty = Dm), a.update(e, t, n, i) ? (this.destroyBetween(this.index, r), this.index++, !0) : !1;
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
			if (s instanceof Nm) {
				let c = this.preMatch.matched.get(s);
				if (c != null && c != i) return !1;
				let l = s.dom, u, d = this.isLocked(l) && !(e.isText && s.node && s.node.isText && s.nodeDOM.nodeValue == e.text && s.dirty != Om && Gm(t, s.outerDeco));
				if (!d && s.update(e, t, n, r)) return this.destroyBetween(this.index, o), s.dom != l && (this.changed = !0), this.index++, !0;
				if (!d && (u = this.recreateWrapper(s, e, t, n, r, a))) return this.destroyBetween(this.index, o), this.top.children[this.index] = u, u.contentDOM && (u.dirty = Dm, u.updateChildren(r, a + 1), u.dirty = Tm), this.changed = !0, this.index++, !0;
				break;
			}
		}
		return !1;
	}
	recreateWrapper(e, t, n, r, i, a) {
		if (e.dirty || t.isAtom || !e.children.length || !e.node.content.eq(t.content) || !Gm(n, e.outerDeco) || !r.eq(e.innerDeco)) return null;
		let o = Nm.create(this.top, t, n, r, i, a);
		if (o.contentDOM) {
			o.children = e.children, e.children = [];
			for (let e of o.children) e.parent = o;
		}
		return e.destroy(), o;
	}
	addNode(e, t, n, r, i) {
		let a = Nm.create(this.top, e, t, n, r, i);
		a.contentDOM && a.updateChildren(r, i + 1), this.top.children.splice(this.index++, 0, a), this.changed = !0;
	}
	placeWidget(e, t, n) {
		let r = this.index < this.top.children.length ? this.top.children[this.index] : null;
		if (r && r.matchesWidget(e) && (e == r.widget || !r.widget.type.toDOM.parentNode)) this.index++;
		else {
			let r = new Am(this.top, e, t, n);
			this.top.children.splice(this.index++, 0, r), this.changed = !0;
		}
	}
	addTextblockHacks() {
		let e = this.top.children[this.index - 1], t = this.top;
		for (; e instanceof Mm;) t = e, e = t.children[t.children.length - 1];
		(!e || !(e instanceof Fm) || /\n$/.test(e.node.text) || this.view.requiresGeckoHackNode && /\s$/.test(e.node.text)) && ((Bp || Rp) && e && e.dom.contentEditable == "false" && this.addHackNode("IMG", t), this.addHackNode("BR", this.top));
	}
	addHackNode(e, t) {
		if (t == this.top && this.index < t.children.length && t.children[this.index].matchesHack(e)) this.index++;
		else {
			let n = document.createElement(e);
			e == "IMG" && (n.className = "ProseMirror-separator", n.alt = ""), e == "BR" && (n.className = "ProseMirror-trailingBreak");
			let r = new Im(this.top, [], n, null);
			t == this.top ? t.children.splice(this.index++, 0, r) : t.children.push(r), this.changed = !0;
		}
	}
	isLocked(e) {
		return this.lock && (e == this.lock || W(e) && e.contains(this.lock.parentNode));
	}
};
function Jm(e, t) {
	let n = t, r = n.children.length, i = e.childCount, a = /* @__PURE__ */ new Map(), o = [];
	outer: for (; i > 0;) {
		let s;
		for (;;) if (r) {
			let e = n.children[r - 1];
			if (e instanceof Mm) n = e, r = e.children.length;
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
function Ym(e, t) {
	return e.type.side - t.type.side;
}
function Xm(e, t, n, r) {
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
				d.sort(Ym);
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
function Zm(e) {
	if (e.nodeName == "UL" || e.nodeName == "OL") {
		let t = e.style.cssText;
		e.style.cssText = t + "; list-style: square !important", window.getComputedStyle(e).listStyle, e.style.cssText = t;
	}
}
function Qm(e, t, n, r) {
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
function $m(e, t, n, r, i) {
	let a = [];
	for (let o = 0, s = 0; o < e.length; o++) {
		let c = e[o], l = s, u = s += c.size;
		l >= n || u <= t ? a.push(c) : (l < t && a.push(c.slice(0, t - l, r)), i &&= (a.push(i), void 0), u > n && a.push(c.slice(n - l, c.size, r)));
	}
	return a;
}
function eh(e, t = null) {
	let n = e.domSelectionRange(), r = e.state.doc;
	if (!n.focusNode) return null;
	let i = e.docView.nearestDesc(n.focusNode), a = i && i.size == 0, o = e.docView.posFromDOM(n.focusNode, n.focusOffset, 1);
	if (o < 0) return null;
	let s = r.resolve(o), c, l;
	if (wp(n)) {
		for (c = o; i && !i.node;) i = i.parent;
		if (i && i.node.isAtom && V.isSelectable(i.node) && i.parent && !(i.node.isInline && Sp(n.focusNode, n.focusOffset, i.dom))) {
			let e = i.posBefore;
			l = new V(o == e ? s : r.resolve(e));
		} else if (Ip && t == "key" && o > e.state.selection.to && W(n.focusNode) && n.focusOffset == n.focusNode.childNodes.length && i && i.posAtStart > e.state.selection.to) for (let e = n.focusNode;; e = e.parentNode) {
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
		l = dh(e, u, s, n);
	}
	return l;
}
function th(e) {
	return e.editable ? e.hasFocus() : ph(e) && document.activeElement && document.activeElement.contains(e.dom);
}
function nh(e, t = !1) {
	let n = e.state.selection;
	if (lh(e, n), !th(e)) return;
	let r = e.input.mouseDown;
	if (!t && Rp && r) {
		let t = e.domSelectionRange(), n = e.domObserver.currentSelection;
		if (t.anchorNode && n.anchorNode && mp(t.anchorNode, t.anchorOffset, n.anchorNode, n.anchorOffset) && r.delaySelUpdate()) {
			e.domObserver.setCurSelection();
			return;
		}
	}
	if (e.domObserver.disconnectSelection(), e.cursorWrapper) ch(e);
	else {
		let { anchor: r, head: i } = n, a, o;
		rh && !(n instanceof B) && (n.$from.parent.inlineContent || (a = ih(e, n.from)), !n.empty && !n.$from.parent.inlineContent && (o = ih(e, n.to))), e.docView.setSelection(r, i, e, t), rh && (a && oh(a), o && oh(o)), n.visible ? e.dom.classList.remove("ProseMirror-hideselection") : (e.dom.classList.add("ProseMirror-hideselection"), "onselectionchange" in document && sh(e));
	}
	e.domObserver.setCurSelection(), e.domObserver.connectSelection();
}
var rh = Bp || Rp && zp < 63;
function ih(e, t) {
	let { node: n, offset: r } = e.docView.domFromPos(t, 0), i = r < n.childNodes.length ? n.childNodes[r] : null, a = r ? n.childNodes[r - 1] : null;
	if (Bp && i && i.contentEditable == "false") return ah(i);
	if ((!i || i.contentEditable == "false") && (!a || a.contentEditable == "false")) {
		if (i) return ah(i);
		if (a) return ah(a);
	}
}
function ah(e) {
	return e.contentEditable = "true", Bp && e.draggable && (e.draggable = !1, e.wasDraggable = !0), e;
}
function oh(e) {
	e.contentEditable = "false", e.wasDraggable &&= (e.draggable = !0, null);
}
function sh(e) {
	let t = e.dom.ownerDocument;
	t.removeEventListener("selectionchange", e.input.hideSelectionGuard);
	let n = e.domSelectionRange(), r = n.anchorNode, i = n.anchorOffset;
	t.addEventListener("selectionchange", e.input.hideSelectionGuard = () => {
		(n.anchorNode != r || n.anchorOffset != i) && (t.removeEventListener("selectionchange", e.input.hideSelectionGuard), setTimeout(() => {
			(!th(e) || e.state.selection.visible) && e.dom.classList.remove("ProseMirror-hideselection");
		}, 20));
	});
}
function ch(e) {
	let t = e.domSelection();
	if (!t) return;
	let n = e.cursorWrapper.dom, r = n.nodeName == "IMG";
	r ? t.collapse(n.parentNode, lp(n) + 1) : t.collapse(n, 0), !r && !e.state.selection.visible && Pp && Fp <= 11 && (n.disabled = !0, n.disabled = !1);
}
function lh(e, t) {
	if (t instanceof V) {
		let n = e.docView.descAt(t.from);
		n != e.lastSelectedViewDesc && (uh(e), n && n.selectNode(), e.lastSelectedViewDesc = n);
	} else uh(e);
}
function uh(e) {
	e.lastSelectedViewDesc &&= (e.lastSelectedViewDesc.parent && e.lastSelectedViewDesc.deselectNode(), void 0);
}
function dh(e, t, n, r) {
	return e.someProp("createSelectionBetween", (r) => r(e, t, n)) || B.between(t, n, r);
}
function fh(e) {
	return e.editable && !e.hasFocus() ? !1 : ph(e);
}
function ph(e) {
	let t = e.domSelectionRange();
	if (!t.anchorNode) return !1;
	try {
		return yp(e.dom, t.anchorNode) && (e.editable || yp(e.dom, t.focusNode));
	} catch {
		return !1;
	}
}
function mh(e) {
	let t = e.docView.domFromPos(e.state.selection.anchor, 0), n = e.domSelectionRange();
	return mp(t.node, t.offset, n.anchorNode, n.anchorOffset);
}
function hh(e, t) {
	let { $anchor: n, $head: r } = e.selection, i = t > 0 ? n.max(r) : n.min(r), a = i.parent.inlineContent ? i.depth ? e.doc.resolve(t > 0 ? i.after() : i.before()) : null : i;
	return a && z.findFrom(a, t);
}
function gh(e, t) {
	return e.dispatch(e.state.tr.setSelection(t).scrollIntoView()), !0;
}
function _h(e, t, n) {
	let r = e.state.selection;
	if (r instanceof B) {
		if (n.indexOf("s") > -1) {
			let { $head: n } = r, i = n.textOffset ? null : t < 0 ? n.nodeBefore : n.nodeAfter;
			if (!i || i.isText || !i.isLeaf) return !1;
			let a = e.state.doc.resolve(n.pos + i.nodeSize * (t < 0 ? -1 : 1));
			return gh(e, new B(r.$anchor, a));
		}
		if (!r.empty) return !1;
		if (e.endOfTextblock(t > 0 ? "forward" : "backward")) {
			let n = hh(e.state, t);
			return n && n instanceof V ? gh(e, n) : !1;
		}
		if (!Hp || n.indexOf("m") < 0) {
			let n = r.$head, i = n.textOffset ? null : t < 0 ? n.nodeBefore : n.nodeAfter, a;
			if (!i || i.isText) return !1;
			let o = t < 0 ? n.pos - i.nodeSize : n.pos;
			return i.isAtom || (a = e.docView.descAt(o)) && !a.contentDOM ? V.isSelectable(i) ? gh(e, new V(t < 0 ? e.state.doc.resolve(n.pos - i.nodeSize) : n)) : gh(e, new B(e.state.doc.resolve(t < 0 ? o : o + i.nodeSize))) : !1;
		}
	} else if (r instanceof V && r.node.isInline) return gh(e, new B(t > 0 ? r.$to : r.$from));
	else {
		let n = hh(e.state, t);
		return n ? gh(e, n) : !1;
	}
}
function vh(e, t) {
	let n = e.pmViewDesc;
	return n ? n.size == 0 && (t < 0 || e.nextSibling || e.nodeName != "BR") : W(e) && e.contentEditable == "false";
}
function yh(e, t) {
	return t < 0 ? bh(e) : xh(e);
}
function bh(e) {
	let t = e.domSelectionRange(), n = t.focusNode, r = t.focusOffset;
	if (!n) return;
	let i, a, o = !1;
	for (Ip && W(n) && r < _p(n) && vh(n.childNodes[r], -1) && (o = !0);;) if (r > 0) {
		if (!W(n)) break;
		let e = n.childNodes[r - 1];
		if (vh(e, -1)) i = n, a = --r;
		else if (vp(e)) n = e, r = n.nodeValue.length;
		else break;
	} else if (Sh(n)) break;
	else {
		let t = n.previousSibling;
		for (; t && vh(t, -1);) i = n.parentNode, a = lp(t), t = t.previousSibling;
		if (t) n = t, r = _p(n);
		else {
			if (n = n.parentNode, n == e.dom) break;
			r = 0;
		}
	}
	o ? Th(e, n, r) : i && Th(e, i, a);
}
function xh(e) {
	let t = e.domSelectionRange(), n = t.focusNode, r = t.focusOffset;
	if (!n) return;
	let i = _p(n), a, o;
	for (;;) if (r < i) {
		if (!W(n)) break;
		let e = n.childNodes[r];
		if (vh(e, 1)) a = n, o = ++r;
		else break;
	} else if (Sh(n)) break;
	else {
		let t = n.nextSibling;
		for (; t && vh(t, 1);) a = t.parentNode, o = lp(t) + 1, t = t.nextSibling;
		if (t) n = t, r = 0, i = _p(n);
		else {
			if (n = n.parentNode, n == e.dom) break;
			r = i = 0;
		}
	}
	a && Th(e, a, o);
}
function Sh(e) {
	let t = e.pmViewDesc;
	return t && t.node && t.node.isBlock;
}
function Ch(e, t) {
	for (; e && t == e.childNodes.length && !Cp(e);) t = lp(e) + 1, e = e.parentNode;
	for (; e && t < e.childNodes.length;) {
		let n = e.childNodes[t];
		if (vp(n)) return n;
		if (W(n) && n.contentEditable == "false") break;
		e = n, t = 0;
	}
}
function wh(e, t) {
	for (; e && !t && !Cp(e);) t = lp(e), e = e.parentNode;
	for (; e && t;) {
		let n = e.childNodes[t - 1];
		if (vp(n)) return n;
		if (W(n) && n.contentEditable == "false") break;
		e = n, t = e.childNodes.length;
	}
}
function Th(e, t, n) {
	if (!vp(t)) {
		let e, r;
		(r = Ch(t, n)) ? (t = r, n = 0) : (e = wh(t, n)) && (t = e, n = e.nodeValue.length);
	}
	let r = e.domSelection(), i = e.domSelectionRange();
	if (!r) return;
	wp(i) ? r.collapse(t, n) : r.extend && (r.collapse(i.anchorNode, i.anchorOffset), r.extend(t, n)), e.domObserver.setCurSelection();
	let { state: a } = e;
	setTimeout(() => {
		e.state == a && nh(e);
	}, 50);
}
function Eh(e, t) {
	let n = e.state.doc.resolve(t);
	if (!(Rp || Up) && n.parent.inlineContent) {
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
function Dh(e, t, n) {
	let r = e.state.selection;
	if (r instanceof B && !r.empty || n.indexOf("s") > -1 || Hp && n.indexOf("m") > -1) return !1;
	let { $from: i, $to: a } = r;
	if (!i.parent.inlineContent || e.endOfTextblock(t < 0 ? "up" : "down")) {
		let n = hh(e.state, t);
		if (n && n instanceof V) return gh(e, n);
	}
	if (!i.parent.inlineContent) {
		let n = t < 0 ? i : a, o = r instanceof tf ? z.near(n, t) : z.findFrom(n, t);
		return o ? gh(e, o) : !1;
	}
	return !1;
}
function Oh(e, t) {
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
function kh(e, t, n) {
	e.domObserver.stop(), t.contentEditable = n, e.domObserver.start();
}
function Ah(e) {
	if (!Bp || e.state.selection.$head.parentOffset > 0) return !1;
	let { focusNode: t, focusOffset: n } = e.domSelectionRange();
	if (t && W(t) && n == 0 && t.firstChild && W(t.firstChild) && t.firstChild.contentEditable == "false") {
		let n = t.firstChild;
		kh(e, n, "true"), setTimeout(() => kh(e, n, "false"), 20);
	}
	return !1;
}
function jh(e) {
	let t = "";
	return e.ctrlKey && (t += "c"), e.metaKey && (t += "m"), e.altKey && (t += "a"), e.shiftKey && (t += "s"), t;
}
function Mh(e, t) {
	let n = t.keyCode, r = jh(t);
	if (n == 8 || Hp && n == 72 && r == "c") return Oh(e, -1) || yh(e, -1);
	if (n == 46 && !t.shiftKey || Hp && n == 68 && r == "c") return Oh(e, 1) || yh(e, 1);
	if (n == 13 || n == 27) return !0;
	if (n == 37 || Hp && n == 66 && r == "c") {
		let t = n == 37 ? Eh(e, e.state.selection.from) == "ltr" ? -1 : 1 : -1;
		return _h(e, t, r) || yh(e, t);
	}
	if (n == 39 || Hp && n == 70 && r == "c") {
		let t = n == 39 ? Eh(e, e.state.selection.from) == "ltr" ? 1 : -1 : 1;
		return _h(e, t, r) || yh(e, t);
	}
	return n == 38 || Hp && n == 80 && r == "c" ? Dh(e, -1, r) || yh(e, -1) : n == 40 || Hp && n == 78 && r == "c" ? Ah(e) || Dh(e, 1, r) || yh(e, 1) : !(r != (Hp ? "m" : "c") || n != 66 && n != 73 && n != 89 && n != 90);
}
function Nh(e, t) {
	e.someProp("transformCopied", (n) => {
		t = n(t, e);
	});
	let n = [], { content: r, openStart: i, openEnd: a } = t;
	for (; i > 1 && a > 1 && r.childCount == 1 && r.firstChild.childCount == 1;) {
		i--, a--;
		let e = r.firstChild;
		n.push(e.type.name, e.attrs == e.type.defaultAttrs ? null : e.attrs), r = e.content;
	}
	let o = e.someProp("clipboardSerializer") || Eu.fromSchema(e.state.schema), s = Uh(), c = s.createElement("div");
	c.appendChild(o.serializeFragment(r, { document: s }));
	let l = c.firstChild, u, d = 0;
	for (; l && W(l) && (u = Hh[l.nodeName.toLowerCase()]);) {
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
function Ph(e, t, n, r, i) {
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
			let n = i.marks(), { schema: r } = e.state, a = Eu.fromSchema(r);
			o = document.createElement("div"), t.split(/(?:\r\n?|\n)+/).forEach((e) => {
				let t = o.appendChild(document.createElement("p"));
				e && t.appendChild(a.serializeNode(r.text(e, n)));
			});
		}
	} else e.someProp("transformPastedHTML", (t) => {
		n = t(n, e);
	}), o = Kh(n), Gp && qh(o);
	let l = o && o.querySelector("[data-pm-slice]"), u = l && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(l.getAttribute("data-pm-slice") || "");
	if (u && u[3]) for (let e = +u[3]; e > 0; e--) {
		let e = o.firstChild;
		for (; e && !W(e);) e = e.nextSibling;
		if (!e) break;
		o = e;
	}
	if (s ||= (e.someProp("clipboardParser") || e.someProp("domParser") || fu.fromSchema(e.state.schema)).parseSlice(o, {
		preserveWhitespace: !!(c || u),
		context: i,
		ruleFromNode(e) {
			return e.nodeName == "BR" && !e.nextSibling && e.parentNode && !Fh.test(e.parentNode.nodeName) ? { ignore: !0 } : null;
		}
	}), u) s = Jh(Vh(s, +u[1], +u[2]), u[4]);
	else if (s = R.maxOpen(Ih(s.content, i), !0), s.openStart || s.openEnd) {
		let e = 0, t = 0;
		for (let t = s.content.firstChild; e < s.openStart && !t.type.spec.isolating; e++, t = t.firstChild);
		for (let e = s.content.lastChild; t < s.openEnd && !e.type.spec.isolating; t++, e = e.lastChild);
		s = Vh(s, e, t);
	}
	return e.someProp("transformPasted", (t) => {
		s = t(s, e, c);
	}), s;
}
var Fh = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
function Ih(e, t) {
	if (e.childCount < 2) return e;
	for (let n = t.depth; n >= 0; n--) {
		let r = t.node(n).contentMatchAt(t.index(n)), i, a = [];
		if (e.forEach((e) => {
			if (!a) return;
			let t = r.findWrapping(e.type), n;
			if (!t) return a = null;
			if (n = a.length && i.length && Rh(t, i, e, a[a.length - 1], 0)) a[a.length - 1] = n;
			else {
				a.length && (a[a.length - 1] = zh(a[a.length - 1], i.length));
				let n = Lh(e, t);
				a.push(n), r = r.matchType(n.type), i = t;
			}
		}), a) return I.from(a);
	}
	return e;
}
function Lh(e, t, n = 0) {
	for (let r = t.length - 1; r >= n; r--) e = t[r].create(null, I.from(e));
	return e;
}
function Rh(e, t, n, r, i) {
	if (i < e.length && i < t.length && e[i] == t[i]) {
		let a = Rh(e, t, n, r.lastChild, i + 1);
		if (a) return r.copy(r.content.replaceChild(r.childCount - 1, a));
		if (r.contentMatchAt(r.childCount).matchType(i == e.length - 1 ? n.type : e[i + 1])) return r.copy(r.content.append(I.from(Lh(n, e, i + 1))));
	}
}
function zh(e, t) {
	if (t == 0) return e;
	let n = e.content.replaceChild(e.childCount - 1, zh(e.lastChild, t - 1)), r = e.contentMatchAt(e.childCount).fillBefore(I.empty, !0);
	return e.copy(n.append(r));
}
function Bh(e, t, n, r, i, a) {
	let o = t < 0 ? e.firstChild : e.lastChild, s = o.content;
	return e.childCount > 1 && (a = 0), i < r - 1 && (s = Bh(s, t, n, r, i + 1, a)), i >= n && (s = t < 0 ? o.contentMatchAt(0).fillBefore(s, a <= i).append(s) : s.append(o.contentMatchAt(o.childCount).fillBefore(I.empty, !0))), e.replaceChild(t < 0 ? 0 : e.childCount - 1, o.copy(s));
}
function Vh(e, t, n) {
	return t < e.openStart && (e = new R(Bh(e.content, -1, t, e.openStart, 0, e.openEnd), t, e.openEnd)), n < e.openEnd && (e = new R(Bh(e.content, 1, n, e.openEnd, 0, 0), e.openStart, n)), e;
}
var Hh = {
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
function Uh() {
	return document.implementation.createHTMLDocument("title");
}
var Wh = null;
function Gh(e) {
	let t = window.trustedTypes;
	if (!t) return e;
	if (!Wh) {
		if (Wh = t.defaultPolicy) try {
			return Wh.createHTML(e);
		} catch {}
		Wh = t.createPolicy("ProseMirrorClipboard", { createHTML: (e) => e });
	}
	return Wh.createHTML(e);
}
function Kh(e) {
	let t = /^(\s*<meta [^>]*>)*/.exec(e);
	t && (e = e.slice(t[0].length));
	let n = Uh(), r = n.body, i = /<([a-z][^>\s]+)/i.exec(e), a;
	if ((a = i && Hh[i[1].toLowerCase()]) && (e = a.map((e) => "<" + e + ">").join("") + e + a.map((e) => "</" + e + ">").reverse().join("")), r.innerHTML = Gh(e), a) for (let e = 0; e < a.length; e++) r = r.querySelector(a[e]) || r;
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
function qh(e) {
	let t = e.querySelectorAll(Rp ? "span:not([class]):not([style])" : "span.Apple-converted-space");
	for (let n = 0; n < t.length; n++) {
		let r = t[n];
		r.childNodes.length == 1 && r.textContent == "\xA0" && r.parentNode && r.parentNode.replaceChild(e.ownerDocument.createTextNode(" "), r);
	}
}
function Jh(e, t) {
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
var Yh = {}, Xh = {}, Zh = {
	touchstart: !0,
	touchmove: !0
}, Qh = class {
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
function $h(e) {
	for (let t in Yh) {
		let n = Yh[t];
		e.dom.addEventListener(t, e.input.eventHandlers[t] = (t) => {
			ig(e, t) && !rg(e, t) && (e.editable || !(t.type in Xh)) && n(e, t);
		}, Zh[t] ? { passive: !0 } : void 0);
	}
	Bp && e.dom.addEventListener("input", () => null), ng(e);
}
function eg(e, t) {
	e.input.lastSelectionOrigin = t, e.input.lastSelectionTime = Date.now();
}
function tg(e) {
	e.input.mouseDown && e.input.mouseDown.done(), e.domObserver.stop();
	for (let t in e.input.eventHandlers) e.dom.removeEventListener(t, e.input.eventHandlers[t]);
	clearTimeout(e.input.composingTimeout), clearTimeout(e.input.lastIOSEnterFallbackTimeout);
}
function ng(e) {
	e.someProp("handleDOMEvents", (t) => {
		for (let n in t) e.input.eventHandlers[n] || e.dom.addEventListener(n, e.input.eventHandlers[n] = (t) => rg(e, t));
	});
}
function rg(e, t) {
	return e.someProp("handleDOMEvents", (n) => {
		let r = n[t.type];
		return r ? r(e, t) || t.defaultPrevented : !1;
	});
}
function ig(e, t) {
	if (!t.bubbles) return !0;
	if (t.defaultPrevented) return !1;
	for (let n = t.target; n != e.dom; n = n.parentNode) if (!n || n.nodeType == 11 || n.pmViewDesc && n.pmViewDesc.stopEvent(t)) return !1;
	return !0;
}
function ag(e, t) {
	!rg(e, t) && Yh[t.type] && (e.editable || !(t.type in Xh)) && Yh[t.type](e, t);
}
function og(e, t) {
	let { input: n } = e;
	return n.lastKeyDispatched || e.composing ? !1 : (n.lastKeyDispatched = !0, typeof t == "string" && (t = Tp(t == "Backspace" ? 8 : 13, t)), e.someProp("handleKeyDown", (n) => n(e, t)));
}
Xh.keydown = (e, t) => {
	let n = t;
	if (e.input.shiftKey = n.keyCode == 16 || n.shiftKey, !Cg(e) && (e.input.lastKeyCode = n.keyCode, e.input.lastKeyCodeTime = Date.now(), e.input.lastKeyDispatched = !1, !(Wp && Rp && n.keyCode == 13))) {
		if (n.keyCode != 229 && e.domObserver.forceFlush(), Vp && n.keyCode == 13 && !n.ctrlKey && !n.altKey && !n.metaKey) {
			let t = Date.now();
			e.input.lastIOSEnter = t, e.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
				e.input.lastIOSEnter == t && (og(e, "Enter"), e.input.lastIOSEnter = 0);
			}, 200);
		} else og(e, n) || Mh(e, n) ? n.preventDefault() : eg(e, "key");
	}
}, Xh.keyup = (e, t) => {
	t.keyCode == 16 && (e.input.shiftKey = !1);
}, Xh.keypress = (e, t) => {
	let n = t;
	if (Cg(e) || !n.charCode || n.ctrlKey && !n.altKey || Hp && n.metaKey) return;
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
function sg(e) {
	return {
		left: e.clientX,
		top: e.clientY
	};
}
function cg(e, t) {
	let n = t.x - e.clientX, r = t.y - e.clientY;
	return n * n + r * r < 100;
}
function lg(e, t, n, r, i) {
	if (r == -1) return !1;
	let a = e.state.doc.resolve(r);
	for (let r = a.depth + 1; r > 0; r--) if (e.someProp(t, (t) => r > a.depth ? t(e, n, a.nodeAfter, a.before(r), i, !0) : t(e, n, a.node(r), a.before(r), i, !1))) return !0;
	return !1;
}
function ug(e, t, n) {
	if (e.focused || e.focus(), e.state.selection.eq(t)) return;
	let r = e.state.tr.setSelection(t);
	r.setMeta("pointer", !0), e.dispatch(r);
}
function dg(e, t) {
	if (t == -1) return !1;
	let n = e.state.doc.resolve(t), r = n.nodeAfter;
	return r && r.isAtom && V.isSelectable(r) ? (ug(e, new V(n)), !0) : !1;
}
function fg(e, t) {
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
	return i != null && (ug(e, V.create(e.state.doc, i)), !0);
}
function pg(e, t, n, r, i) {
	return lg(e, "handleClickOn", t, n, r) || e.someProp("handleClick", (n) => n(e, t, r)) || (i ? fg(e, n) : dg(e, n));
}
function mg(e, t, n, r) {
	return lg(e, "handleDoubleClickOn", t, n, r) || e.someProp("handleDoubleClick", (n) => n(e, t, r));
}
function hg(e, t, n, r) {
	return lg(e, "handleTripleClickOn", t, n, r) || e.someProp("handleTripleClick", (n) => n(e, t, r)) || gg(e, n, r);
}
function gg(e, t, n) {
	if (n.button != 0) return !1;
	let r = _g(e, t, !0), i = e.state.doc;
	return r ? (ug(e, r), r instanceof B && i.eq(e.state.doc) && (e.input.mouseDown = new Sg(e, r)), !0) : !1;
}
function _g(e, t, n) {
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
function vg(e) {
	return kg(e);
}
var yg = Hp ? "metaKey" : "ctrlKey";
Yh.mousedown = (e, t) => {
	let n = t;
	e.input.shiftKey = n.shiftKey;
	let r = vg(e), i = Date.now(), a = "singleClick";
	i - e.input.lastClick.time < 500 && cg(n, e.input.lastClick) && !n[yg] && e.input.lastClick.button == n.button && (e.input.lastClick.type == "singleClick" ? a = "doubleClick" : e.input.lastClick.type == "doubleClick" && (a = "tripleClick")), e.input.lastClick = {
		time: i,
		x: n.clientX,
		y: n.clientY,
		type: a,
		button: n.button
	}, e.input.mouseDown && e.input.mouseDown.done();
	let o = e.posAtCoords(sg(n));
	o && (a == "singleClick" ? e.input.mouseDown = new xg(e, o, n, !!r) : (a == "doubleClick" ? mg : hg)(e, o.pos, o.inside, n) ? n.preventDefault() : eg(e, "pointer"));
};
var bg = class {
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
}, xg = class extends bg {
	constructor(e, t, n, r) {
		super(e), this.pos = t, this.event = n, this.flushed = r, this.delayedSelectionSync = !1, this.startDoc = e.state.doc, this.selectNode = !!n[yg], this.allowDefault = n.shiftKey;
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
			setUneditable: !!(this.target && Ip && !this.target.hasAttribute("contentEditable"))
		}), this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(), this.mightDrag.addAttr && (this.target.draggable = !0), this.mightDrag.setUneditable && setTimeout(() => {
			this.view.input.mouseDown == this && this.target.setAttribute("contentEditable", "false");
		}, 20), this.view.domObserver.start()), eg(e, "pointer");
	}
	done() {
		super.done(), this.mightDrag && this.target && (this.view.domObserver.stop(), this.mightDrag.addAttr && this.target.removeAttribute("draggable"), this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"), this.view.domObserver.start()), this.delayedSelectionSync && setTimeout(() => {
			this.view.isDestroyed || nh(this.view);
		});
	}
	up(e) {
		if (this.done(), !this.view.dom.contains(e.target)) return;
		let t = this.pos;
		this.view.state.doc != this.startDoc && (t = this.view.posAtCoords(sg(e))), this.updateAllowDefault(e), this.allowDefault || !t ? eg(this.view, "pointer") : pg(this.view, t.pos, t.inside, e, this.selectNode) ? e.preventDefault() : e.button == 0 && (this.flushed || Bp && this.mightDrag && !this.mightDrag.node.isAtom || Rp && !this.view.state.selection.visible && Math.min(Math.abs(t.pos - this.view.state.selection.from), Math.abs(t.pos - this.view.state.selection.to)) <= 2) ? (ug(this.view, z.near(this.view.state.doc.resolve(t.pos))), e.preventDefault()) : eg(this.view, "pointer");
	}
	move(e) {
		this.updateAllowDefault(e), eg(this.view, "pointer"), super.move(e);
	}
	updateAllowDefault(e) {
		!this.allowDefault && (Math.abs(this.event.x - e.clientX) > 4 || Math.abs(this.event.y - e.clientY) > 4) && (this.allowDefault = !0);
	}
	delaySelUpdate() {
		return this.allowDefault ? (this.delayedSelectionSync = !0, !0) : !1;
	}
}, Sg = class extends bg {
	constructor(e, t) {
		super(e), this.startSelection = t, this.startDoc = e.state.doc;
	}
	move(e) {
		if (e.buttons == 0 || this.view.isDestroyed || !this.view.state.doc.eq(this.startDoc)) {
			this.done();
			return;
		}
		e.preventDefault(), eg(this.view, "pointer");
		let t = this.view.posAtCoords(sg(e)), n = t && _g(this.view, t.inside, !1);
		if (!n) return;
		let { doc: r } = this.view.state, i = this.startSelection, [a, o] = n.from < i.from ? [i.to, n.from] : [i.from, n.to];
		ug(this.view, B.create(r, a, o));
	}
};
Yh.touchstart = (e) => {
	e.input.lastTouch = Date.now(), vg(e), eg(e, "pointer");
}, Yh.touchmove = (e) => {
	e.input.lastTouch = Date.now(), eg(e, "pointer");
}, Yh.contextmenu = (e) => vg(e);
function Cg(e, t) {
	return e.composing ? !0 : Bp && Math.abs(Date.now() - e.input.compositionEndedAt) < 500 ? (e.input.compositionEndedAt = -2e8, !0) : !1;
}
var wg = Wp ? 5e3 : -1;
Xh.compositionstart = Xh.compositionupdate = (e) => {
	if (!e.composing) {
		e.domObserver.flush();
		let { state: t } = e, n = t.selection.$to;
		if (t.selection instanceof B && t.selection.empty && (t.storedMarks || !n.textOffset && n.parentOffset && n.nodeBefore.marks.some((e) => e.type.spec.inclusive === !1) || Rp && Up && Tg(e))) e.markCursor = e.state.storedMarks || n.marks(), kg(e, !0), e.markCursor = null;
		else if (kg(e, !t.selection.empty), Ip && t.selection.empty && n.parentOffset && !n.textOffset && n.nodeBefore.marks.length) {
			let t = e.domSelectionRange();
			for (let n = t.focusNode, r = t.focusOffset; n && W(n) && r != 0;) {
				let t = r < 0 ? n.lastChild : n.childNodes[r - 1];
				if (!t) break;
				if (vp(t)) {
					let n = e.domSelection();
					n && n.collapse(t, t.nodeValue.length);
					break;
				}
				n = t, r = -1;
			}
		}
		e.input.composing = !0;
	}
	Eg(e, wg);
};
function Tg(e) {
	let { focusNode: t, focusOffset: n } = e.domSelectionRange();
	if (!t || !W(t) || n >= t.childNodes.length) return !1;
	let r = t.childNodes[n];
	return W(r) && r.contentEditable == "false";
}
Xh.compositionend = (e, t) => {
	e.composing && (e.input.composing = !1, e.input.compositionEndedAt = Date.now(), e.input.compositionPendingChanges = e.domObserver.pendingRecords().length ? e.input.compositionID : 0, e.input.compositionNode = null, e.input.badSafariComposition ? e.domObserver.forceFlush() : e.input.compositionPendingChanges && Promise.resolve().then(() => e.domObserver.flush()), e.input.compositionID++, Eg(e, 20));
};
function Eg(e, t) {
	clearTimeout(e.input.composingTimeout), t > -1 && (e.input.composingTimeout = setTimeout(() => kg(e), t));
}
function Dg(e) {
	for (e.composing && (e.input.composing = !1, e.input.compositionEndedAt = Date.now()); e.input.compositionNodes.length > 0;) e.input.compositionNodes.pop().markParentsDirty();
}
function Og(e) {
	let t = e.domSelectionRange();
	if (!t.focusNode) return null;
	let n = bp(t.focusNode, t.focusOffset), r = xp(t.focusNode, t.focusOffset);
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
function kg(e, t = !1) {
	if (!(Wp && e.domObserver.flushingSoon >= 0)) {
		if (e.domObserver.forceFlush(), Dg(e), t || e.docView && e.docView.dirty) {
			let n = eh(e), r = e.state.selection;
			return n && !n.eq(r) ? e.dispatch(e.state.tr.setSelection(n)) : (e.markCursor || t) && !r.$from.node(r.$from.sharedDepth(r.to)).inlineContent ? e.dispatch(e.state.tr.deleteSelection()) : e.updateState(e.state), !0;
		}
		return !1;
	}
}
function Ag(e, t) {
	if (!e.dom.parentNode) return;
	let n = e.dom.parentNode.appendChild(document.createElement("div"));
	n.appendChild(t), n.style.cssText = "position: fixed; left: -10000px; top: 10px";
	let r = getSelection(), i = document.createRange();
	i.selectNodeContents(t), e.dom.blur(), r.removeAllRanges(), r.addRange(i), setTimeout(() => {
		n.parentNode && n.parentNode.removeChild(n), e.focus();
	}, 50);
}
var jg = Pp && Fp < 15 || Vp && Kp < 604;
Yh.copy = Xh.cut = (e, t) => {
	let n = t, r = e.state.selection, i = n.type == "cut";
	if (r.empty) return;
	let a = jg ? null : n.clipboardData, { dom: o, text: s } = Nh(e, r.content());
	a ? (n.preventDefault(), a.clearData(), a.setData("text/html", o.innerHTML), a.setData("text/plain", s)) : Ag(e, o), i && e.dispatch(e.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
};
function Mg(e) {
	return e.openStart == 0 && e.openEnd == 0 && e.content.childCount == 1 ? e.content.firstChild : null;
}
function Ng(e, t) {
	if (!e.dom.parentNode) return;
	let n = e.input.shiftKey || e.state.selection.$from.parent.type.spec.code, r = e.dom.parentNode.appendChild(document.createElement(n ? "textarea" : "div"));
	n || (r.contentEditable = "true"), r.style.cssText = "position: fixed; left: -10000px; top: 10px", r.focus();
	let i = e.input.shiftKey && e.input.lastKeyCode != 45;
	setTimeout(() => {
		e.focus(), r.parentNode && r.parentNode.removeChild(r), n ? Pg(e, r.value, null, i, t) : Pg(e, r.textContent, r.innerHTML, i, t);
	}, 50);
}
function Pg(e, t, n, r, i) {
	let a = Ph(e, t, n, r, e.state.selection.$from);
	if (e.someProp("handlePaste", (t) => t(e, i, a || R.empty))) return !0;
	if (!a) return !1;
	let o = Mg(a), s = o ? e.state.tr.replaceSelectionWith(o, r) : e.state.tr.replaceSelection(a);
	return e.dispatch(s.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")), !0;
}
function Fg(e) {
	let t = e.getData("text/plain") || e.getData("Text");
	if (t) return t;
	let n = e.getData("text/uri-list");
	return n ? n.replace(/\r?\n/g, " ") : "";
}
Xh.paste = (e, t) => {
	let n = t;
	if (e.composing && !Wp) return;
	let r = jg ? null : n.clipboardData, i = e.input.shiftKey && e.input.lastKeyCode != 45;
	r && Pg(e, Fg(r), r.getData("text/html"), i, n) ? n.preventDefault() : Ng(e, n);
};
var Ig = class {
	constructor(e, t, n) {
		this.slice = e, this.move = t, this.node = n;
	}
}, Lg = Hp ? "altKey" : "ctrlKey";
function Rg(e, t) {
	let n;
	return e.someProp("dragCopies", (e) => {
		n ||= e(t);
	}), n == null ? !t[Lg] : !n;
}
Yh.dragstart = (e, t) => {
	let n = t, r = e.input.mouseDown;
	if (r && r.done(), !n.dataTransfer) return;
	let i = e.state.selection, a = i.empty ? null : e.posAtCoords(sg(n)), o;
	if (!(a && a.pos >= i.from && a.pos <= (i instanceof V ? i.to - 1 : i.to))) {
		if (r && r.mightDrag) o = V.create(e.state.doc, r.mightDrag.pos);
		else if (n.target && W(n.target)) {
			let t = e.docView.nearestDesc(n.target, !0);
			t && t.node.type.spec.draggable && t != e.docView && (o = V.create(e.state.doc, t.posBefore));
		}
	}
	let { dom: s, text: c, slice: l } = Nh(e, (o || e.state.selection).content());
	(!n.dataTransfer.files.length || !Rp || zp > 120) && n.dataTransfer.clearData(), n.dataTransfer.setData(jg ? "Text" : "text/html", s.innerHTML), n.dataTransfer.effectAllowed = "copyMove", jg || n.dataTransfer.setData("text/plain", c), e.dragging = new Ig(l, Rg(e, n), o);
}, Yh.dragend = (e) => {
	let t = e.dragging;
	window.setTimeout(() => {
		e.dragging == t && (e.dragging = null);
	}, 50);
}, Xh.dragover = Xh.dragenter = (e, t) => t.preventDefault(), Xh.drop = (e, t) => {
	try {
		zg(e, t, e.dragging);
	} finally {
		e.dragging = null;
	}
};
function zg(e, t, n) {
	if (!t.dataTransfer) return;
	let r = e.posAtCoords(sg(t));
	if (!r) return;
	let i = e.state.doc.resolve(r.pos), a = n && n.slice;
	a ? e.someProp("transformPasted", (t) => {
		a = t(a, e, !1);
	}) : a = Ph(e, Fg(t.dataTransfer), jg ? null : t.dataTransfer.getData("text/html"), !1, i);
	let o = !!(n && Rg(e, t));
	if (e.someProp("handleDrop", (n) => n(e, t, a || R.empty, o))) {
		t.preventDefault();
		return;
	}
	if (!a) return;
	t.preventDefault();
	let s = a ? Od(e.state.doc, i.pos, a) : i.pos;
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
		c.mapping.maps[c.mapping.maps.length - 1].forEach((e, n, r, i) => t = i), c.setSelection(dh(e, f, c.doc.resolve(t)));
	}
	e.focus(), e.dispatch(c.setMeta("uiEvent", "drop"));
}
Yh.focus = (e) => {
	if (e.input.lastFocus = Date.now(), !e.focused) {
		e.domObserver.stop(), e.dom.classList.add("ProseMirror-focused"), e.domObserver.start(), e.focused = !0;
		let t = e.domSelectionRange();
		if (!e.domObserver.currentSelection.eq(t)) {
			let { focusNode: n, focusOffset: r } = t;
			setTimeout(() => {
				let t = e.domSelectionRange();
				t.focusNode == n && t.focusOffset == r && e.docView && e.hasFocus() && nh(e);
			}, 20);
		}
	}
}, Yh.blur = (e, t) => {
	let n = t;
	e.focused &&= (e.domObserver.stop(), e.dom.classList.remove("ProseMirror-focused"), e.domObserver.start(), n.relatedTarget && e.dom.contains(n.relatedTarget) && e.domObserver.currentSelection.clear(), !1);
}, Yh.beforeinput = (e, t) => {
	if (Wp && t.inputType == "deleteContentBackward") {
		e.domObserver.flushSoon();
		let { domChangeCount: t } = e.input;
		setTimeout(() => {
			if (e.input.domChangeCount != t || e.domObserver.pendingRecords().length || (e.dom.blur(), e.focus(), og(e, "Backspace"))) return;
			let { $cursor: n } = e.state.selection;
			n && n.pos > 0 && e.dispatch(e.state.tr.delete(n.pos - 1, n.pos).scrollIntoView());
		}, 50);
	}
};
for (let e in Xh) Yh[e] = Xh[e];
function Bg(e, t) {
	if (e == t) return !0;
	for (let n in e) if (e[n] !== t[n]) return !1;
	for (let n in t) if (!(n in e)) return !1;
	return !0;
}
var Vg = class {
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
}, Hg = class e {
	constructor(e, t) {
		this.toDOM = e, this.spec = t || qg, this.side = this.spec.side || 0;
	}
	map(e, t, n, r) {
		let { pos: i, deleted: a } = e.mapResult(t.from + r, this.side < 0 ? -1 : 1);
		return a ? null : new Gg(i - n, i - n, this);
	}
	valid() {
		return !0;
	}
	eq(t) {
		return this == t || t instanceof e && (this.spec.key && this.spec.key == t.spec.key || this.toDOM == t.toDOM && Bg(this.spec, t.spec));
	}
	destroy(e) {
		this.spec.destroy && this.spec.destroy(e);
	}
}, Ug = class e {
	constructor(e, t) {
		this.attrs = e, this.spec = t || qg;
	}
	map(e, t, n, r) {
		let i = e.map(t.from + r, this.spec.inclusiveStart ? -1 : 1) - n, a = e.map(t.to + r, this.spec.inclusiveEnd ? 1 : -1) - n;
		return i >= a ? null : new Gg(i, a, this);
	}
	valid(e, t) {
		return t.from < t.to;
	}
	eq(t) {
		return this == t || t instanceof e && Bg(this.attrs, t.attrs) && Bg(this.spec, t.spec);
	}
	static is(t) {
		return t.type instanceof e;
	}
	destroy() {}
}, Wg = class e {
	constructor(e, t) {
		this.attrs = e, this.spec = t || qg;
	}
	map(e, t, n, r) {
		let i = e.mapResult(t.from + r, 1);
		if (i.deleted) return null;
		let a = e.mapResult(t.to + r, -1);
		return a.deleted || a.pos <= i.pos ? null : new Gg(i.pos - n, a.pos - n, this);
	}
	valid(e, t, n) {
		let r = n.nodeAt(t.from);
		return !!r && !r.isText && t.from + r.nodeSize == t.to;
	}
	eq(t) {
		return this == t || t instanceof e && Bg(this.attrs, t.attrs) && Bg(this.spec, t.spec);
	}
	destroy() {}
}, Gg = class e {
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
		return new e(t, t, new Hg(n, r));
	}
	static inline(t, n, r, i) {
		return new e(t, n, new Ug(r, i));
	}
	static node(t, n, r, i) {
		return new e(t, n, new Wg(r, i));
	}
	get spec() {
		return this.type.spec;
	}
	get inline() {
		return this.type instanceof Ug;
	}
	get widget() {
		return this.type instanceof Hg;
	}
}, Kg = [], qg = {}, G = class e {
	constructor(e, t) {
		this.local = e.length ? e : Kg, this.children = t.length ? t : Kg;
	}
	static create(e, t) {
		return t.length ? t_(t, e, 0, qg) : Jg;
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
		return this == Jg || e.maps.length == 0 ? this : this.mapInner(e, t, 0, 0, n || qg);
	}
	mapInner(t, n, r, i, a) {
		let o;
		if (this.local.length) {
			let e = new Vg(n.content);
			for (let s = 0; s < this.local.length; s++) {
				let c = this.local[s].map(t, r, i);
				c && c.type.valid(n, c, e) ? (o ||= []).push(c) : a.onRemove && a.onRemove(this.local[s].spec);
			}
		}
		return this.children.length ? Xg(this.children, o || [], t, n, r, i, a) : o ? new e(o.sort(n_), Kg) : Jg;
	}
	add(t, n) {
		return n.length ? this == Jg ? e.create(t, n) : this.addInner(t, n, 0) : this;
	}
	addInner(t, n, r) {
		let i, a = 0;
		t.forEach((e, t) => {
			let o = t + r, s;
			if (s = $g(n, e, o)) {
				for (i ||= this.children.slice(); a < i.length && i[a] < t;) a += 3;
				i[a] == t ? i[a + 2] = i[a + 2].addInner(e, s, o + 1) : i.splice(a, 0, t, t + e.nodeSize, t_(s, e, o + 1, qg)), a += 3;
			}
		});
		let o = Zg(a ? e_(n) : n, -r);
		if (o.length) {
			let e = new Vg(t.content);
			for (let n = 0; n < o.length; n++) o[n].type.valid(t, o[n], e) || o.splice(n--, 1);
		}
		return new e(o.length ? this.local.concat(o).sort(n_) : this.local, i || this.children);
	}
	remove(e) {
		return e.length == 0 || this == Jg ? this : this.removeInner(e, 0);
	}
	removeInner(t, n) {
		let r = this.children, i = this.local;
		for (let e = 0; e < r.length; e += 3) {
			let i, a = r[e] + n, o = r[e + 1] + n;
			for (let e = 0, n; e < t.length; e++) (n = t[e]) && n.from > a && n.to < o && (t[e] = null, (i ||= []).push(n));
			if (!i) continue;
			r == this.children && (r = this.children.slice());
			let s = r[e + 2].removeInner(i, a + 1);
			s == Jg ? (r.splice(e, 3), e -= 3) : r[e + 2] = s;
		}
		if (i.length) {
			for (let e = 0, r; e < t.length; e++) if (r = t[e]) for (let e = 0; e < i.length; e++) i[e].eq(r, n) && (i == this.local && (i = this.local.slice()), i.splice(e--, 1));
		}
		return r == this.children && i == this.local ? this : i.length || r.length ? new e(i, r) : Jg;
	}
	forChild(t, n) {
		if (this == Jg) return this;
		if (n.isLeaf) return e.empty;
		let r, i;
		for (let e = 0; e < this.children.length; e += 3) if (this.children[e] >= t) {
			this.children[e] == t && (r = this.children[e + 2]);
			break;
		}
		let a = t + 1, o = a + n.content.size;
		for (let e = 0; e < this.local.length; e++) {
			let t = this.local[e];
			if (t.from < o && t.to > a && t.type instanceof Ug) {
				let e = Math.max(a, t.from) - a, n = Math.min(o, t.to) - a;
				e < n && (i ||= []).push(t.copy(e, n));
			}
		}
		if (i) {
			let t = new e(i.sort(n_), Kg);
			return r ? new Yg([t, r]) : t;
		}
		return r || Jg;
	}
	eq(t) {
		if (this == t) return !0;
		if (!(t instanceof e) || this.local.length != t.local.length || this.children.length != t.children.length) return !1;
		for (let e = 0; e < this.local.length; e++) if (!this.local[e].eq(t.local[e])) return !1;
		for (let e = 0; e < this.children.length; e += 3) if (this.children[e] != t.children[e] || this.children[e + 1] != t.children[e + 1] || !this.children[e + 2].eq(t.children[e + 2])) return !1;
		return !0;
	}
	locals(e) {
		return r_(this.localsInner(e));
	}
	localsInner(e) {
		if (this == Jg) return Kg;
		if (e.inlineContent || !this.local.some(Ug.is)) return this.local;
		let t = [];
		for (let e = 0; e < this.local.length; e++) this.local[e].type instanceof Ug || t.push(this.local[e]);
		return t;
	}
	forEachSet(e) {
		e(this);
	}
};
G.empty = new G([], []), G.removeOverlap = r_;
var Jg = G.empty, Yg = class e {
	constructor(e) {
		this.members = e;
	}
	map(t, n) {
		let r = this.members.map((e) => e.map(t, n, qg));
		return e.from(r);
	}
	forChild(t, n) {
		if (n.isLeaf) return G.empty;
		let r = [];
		for (let i = 0; i < this.members.length; i++) {
			let a = this.members[i].forChild(t, n);
			a != Jg && (a instanceof e ? r = r.concat(a.members) : r.push(a));
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
		return t ? r_(n ? t : t.sort(n_)) : Kg;
	}
	static from(t) {
		switch (t.length) {
			case 0: return Jg;
			case 1: return t[0];
			default: return new e(t.every((e) => e instanceof G) ? t : t.reduce((e, t) => e.concat(t instanceof G ? t : t.members), []));
		}
	}
	forEachSet(e) {
		for (let t = 0; t < this.members.length; t++) this.members[t].forEachSet(e);
	}
};
function Xg(e, t, n, r, i, a, o) {
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
			r == Jg ? (s[t + 1] = -2, c = !0) : (s[t] = u, s[t + 1] = d, s[t + 2] = r);
		} else c = !0;
	}
	if (c) {
		let c = t_(Qg(s, e, t, n, i, a, o), r, 0, o);
		t = c.local;
		for (let e = 0; e < s.length; e += 3) s[e + 1] < 0 && (s.splice(e, 3), e -= 3);
		for (let e = 0, t = 0; e < c.children.length; e += 3) {
			let n = c.children[e];
			for (; t < s.length && s[t] < n;) t += 3;
			s.splice(t, 0, c.children[e], c.children[e + 1], c.children[e + 2]);
		}
	}
	return new G(t.sort(n_), s);
}
function Zg(e, t) {
	if (!t || !e.length) return e;
	let n = [];
	for (let r = 0; r < e.length; r++) {
		let i = e[r];
		n.push(new Gg(i.from + t, i.to + t, i.type));
	}
	return n;
}
function Qg(e, t, n, r, i, a, o) {
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
function $g(e, t, n) {
	if (t.isLeaf) return null;
	let r = n + t.nodeSize, i = null;
	for (let t = 0, a; t < e.length; t++) (a = e[t]) && a.from > n && a.to < r && ((i ||= []).push(a), e[t] = null);
	return i;
}
function e_(e) {
	let t = [];
	for (let n = 0; n < e.length; n++) e[n] != null && t.push(e[n]);
	return t;
}
function t_(e, t, n, r) {
	let i = [], a = !1;
	t.forEach((t, o) => {
		let s = $g(e, t, o + n);
		if (s) {
			a = !0;
			let e = t_(s, t, n + o + 1, r);
			e != Jg && i.push(o, o + t.nodeSize, e);
		}
	});
	let o = Zg(a ? e_(e) : e, -n).sort(n_);
	if (o.length) {
		let e = new Vg(t.content);
		for (let n = 0; n < o.length; n++) o[n].type.valid(t, o[n], e) || (r.onRemove && r.onRemove(o[n].spec), o.splice(n--, 1));
	}
	return o.length || i.length ? new G(o, i) : Jg;
}
function n_(e, t) {
	return e.from - t.from || e.to - t.to;
}
function r_(e) {
	let t = e;
	for (let n = 0; n < t.length - 1; n++) {
		let r = t[n];
		if (r.from != r.to) for (let i = n + 1; i < t.length; i++) {
			let a = t[i];
			if (a.from == r.from) a.to != r.to && (t == e && (t = e.slice()), t[i] = a.copy(a.from, r.to), i_(t, i + 1, a.copy(r.to, a.to)));
			else {
				a.from < r.to && (t == e && (t = e.slice()), t[n] = r.copy(r.from, a.from), i_(t, i, r.copy(a.from, r.to)));
				break;
			}
		}
	}
	return t;
}
function i_(e, t, n) {
	for (; t < e.length && n_(n, e[t]) > 0;) t++;
	e.splice(t, 0, n);
}
function a_(e) {
	let t = [];
	return e.someProp("decorations", (n) => {
		let r = n(e.state);
		r && r != Jg && t.push(r);
	}), e.cursorWrapper && t.push(G.create(e.state.doc, [e.cursorWrapper.deco])), Yg.from(t);
}
var o_ = {
	childList: !0,
	characterData: !0,
	characterDataOldValue: !0,
	attributes: !0,
	attributeOldValue: !0,
	subtree: !0
}, s_ = Pp && Fp <= 11, c_ = class {
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
}, l_ = class {
	constructor(e, t) {
		this.view = e, this.handleDOMChange = t, this.queue = [], this.flushingSoon = -1, this.observer = null, this.currentSelection = new c_(), this.onCharData = null, this.suppressingSelectionUpdates = !1, this.lastChangedTextNode = null, this.observer = window.MutationObserver && new window.MutationObserver((t) => {
			for (let e = 0; e < t.length; e++) this.queue.push(t[e]);
			Pp && Fp <= 11 && t.some((e) => e.type == "childList" && e.removedNodes.length || e.type == "characterData" && e.oldValue.length > e.target.nodeValue.length) ? this.flushSoon() : Bp && e.composing && t.some((e) => e.type == "childList" && e.target.nodeName == "TR") ? (e.input.badSafariComposition = !0, this.flushSoon()) : this.flush();
		}), s_ && (this.onCharData = (e) => {
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
		this.observer && (this.observer.takeRecords(), this.observer.observe(this.view.dom, o_)), this.onCharData && this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.connectSelection();
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
		if (fh(this.view)) {
			if (this.suppressingSelectionUpdates) return nh(this.view);
			if (Pp && Fp <= 11 && !this.view.state.selection.empty) {
				let e = this.view.domSelectionRange();
				if (e.focusNode && mp(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset)) return this.flushSoon();
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
		for (let n = e.focusNode; n; n = up(n)) t.add(n);
		for (let r = e.anchorNode; r; r = up(r)) if (t.has(r)) {
			n = r;
			break;
		}
		let r = n && this.view.docView.nearestDesc(n);
		if (r && r.ignoreMutation({
			type: "selection",
			target: vp(n) ? n.parentNode : n
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
		!this.suppressingSelectionUpdates && fh(e) && (n = e.domSelectionRange(), r = !this.currentSelection.eq(n) && !this.ignoreSelectionChange(n));
		let i = -1, a = -1, o = !1, s = [];
		if (e.editable) for (let e = 0; e < t.length; e++) {
			let n = this.registerMutation(t[e], s);
			n && (i = i < 0 ? n.from : Math.min(n.from, i), a = a < 0 ? n.to : Math.max(n.to, a), n.typeOver && (o = !0));
		}
		if (s.some((e) => e.nodeName == "BR") && (e.input.lastKeyCode == 8 || e.input.lastKeyCode == 46 || Rp && (e.composing || e.input.compositionEndedAt > Date.now() - 50) && t.some((e) => e.type == "childList" && e.removedNodes.length))) {
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
		} else if (Ip && s.length) {
			let t = s.filter((e) => e.nodeName == "BR");
			if (t.length == 2) {
				let [e, n] = t;
				e.parentNode && e.parentNode.parentNode == n.parentNode ? n.remove() : e.remove();
			} else {
				let { focusNode: n } = this.currentSelection;
				for (let r of t) {
					let t = r.parentNode;
					t && t.nodeName == "LI" && (!n || h_(e, n) != t) && r.remove();
				}
			}
		}
		let c = null;
		i < 0 && r && e.input.lastFocus > Date.now() - 200 && Math.max(e.input.lastTouch, e.input.lastClick.time) < Date.now() - 300 && wp(n) && (c = eh(e)) && c.eq(z.near(e.state.doc.resolve(0), 1)) ? (e.input.lastFocus = 0, nh(e), this.currentSelection.set(n), e.scrollToSelection()) : (i > -1 || r) && (i > -1 && (e.docView.markDirty(i, a), f_(e)), e.input.badSafariComposition && (e.input.badSafariComposition = !1, g_(e, s)), this.handleDOMChange(i, a, o, s), e.docView && e.docView.dirty ? e.updateState(e.state) : n && !this.currentSelection.eq(n) && nh(e), n && this.currentSelection.set(n));
	}
	registerMutation(e, t) {
		if (t.indexOf(e.target) > -1) return null;
		let n = this.view.docView.nearestDesc(e.target);
		if (e.type == "attributes" && (n == this.view.docView || e.attributeName == "contenteditable" || e.attributeName == "style" && !e.oldValue && !e.target.getAttribute("style")) || !n || n.ignoreMutation(e)) return null;
		if (e.type == "childList") {
			for (let n = 0; n < e.addedNodes.length; n++) {
				let r = e.addedNodes[n];
				t.push(r), vp(r) && (this.lastChangedTextNode = r);
			}
			if (n.contentDOM && n.contentDOM != n.dom && !n.contentDOM.contains(e.target)) return {
				from: n.posBefore,
				to: n.posAfter
			};
			let r = e.previousSibling, i = e.nextSibling;
			if (Pp && Fp <= 11 && e.addedNodes.length) for (let t = 0; t < e.addedNodes.length; t++) {
				let { previousSibling: n, nextSibling: a } = e.addedNodes[t];
				(!n || Array.prototype.indexOf.call(e.addedNodes, n) < 0) && (r = n), (!a || Array.prototype.indexOf.call(e.addedNodes, a) < 0) && (i = a);
			}
			let a = r && r.parentNode == e.target ? lp(r) + 1 : 0, o = n.localPosFromDOM(e.target, a, -1), s = i && i.parentNode == e.target ? lp(i) : e.target.childNodes.length;
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
}, u_ = /* @__PURE__ */ new WeakMap(), d_ = !1;
function f_(e) {
	if (!u_.has(e) && (u_.set(e, null), [
		"normal",
		"nowrap",
		"pre-line"
	].indexOf(getComputedStyle(e.dom).whiteSpace) !== -1)) {
		if (e.requiresGeckoHackNode = Ip, d_) return;
		console.warn("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package."), d_ = !0;
	}
}
function p_(e, t) {
	let n = t.startContainer, r = t.startOffset, i = t.endContainer, a = t.endOffset, o = e.domAtPos(e.state.selection.anchor);
	return mp(o.node, o.offset, i, a) && ([n, r, i, a] = [
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
function m_(e, t) {
	if (t.getComposedRanges) {
		let n = t.getComposedRanges(e.root)[0];
		if (n) return p_(e, n);
	}
	let n;
	function r(e) {
		e.preventDefault(), e.stopImmediatePropagation(), n = e.getTargetRanges()[0];
	}
	return e.dom.addEventListener("beforeinput", r, !0), document.execCommand("indent"), e.dom.removeEventListener("beforeinput", r, !0), n ? p_(e, n) : null;
}
function h_(e, t) {
	for (let n = t.parentNode; n && n != e.dom; n = n.parentNode) {
		let t = e.docView.nearestDesc(n, !0);
		if (t && t.node.isBlock) return n;
	}
	return null;
}
function g_(e, t) {
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
function __(e, t, n, r) {
	let { node: i, fromOffset: a, toOffset: o, from: s, to: c } = e.docView.parseRange(t, n), l = e.domSelectionRange(), u, d = l.anchorNode;
	if (d && yp(e.dom, d) && (u = [{
		node: d,
		offset: l.anchorOffset
	}], wp(l) || u.push({
		node: l.focusNode,
		offset: l.focusOffset
	})), Rp && e.input.lastKeyCode === 8) for (let e = o; e > a; e--) {
		let t = i.childNodes[e - 1], n = t.pmViewDesc;
		if (t.nodeName == "BR" && !n) {
			o = e;
			break;
		}
		if (!n || n.size) break;
	}
	let f = e.state.doc, p = e.someProp("domParser") || fu.fromSchema(e.state.schema), m = f.resolve(s), h = null, g = p.parse(i, {
		topNode: m.parent,
		topMatch: m.parent.contentMatchAt(m.index()),
		topOpen: !0,
		from: a,
		to: o,
		preserveWhitespace: m.parent.type.whitespace != "pre" || "full",
		findPositions: u,
		ruleFromNode: v_(r),
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
var v_ = (e) => (t) => {
	let n = t.pmViewDesc;
	if (n) return n.parseRule(e);
	if (t.nodeName == "BR" && t.parentNode) {
		if (Bp && /^(ul|ol)$/i.test(t.parentNode.nodeName)) {
			let e = document.createElement("div");
			return e.appendChild(document.createElement("li")), { skip: e };
		}
		if (t.parentNode.lastChild == t || Bp && /^(tr|table)$/i.test(t.parentNode.nodeName)) return { ignore: !0 };
	} else if (t.nodeName == "IMG" && t.getAttribute("mark-placeholder")) return { ignore: !0 };
	return null;
}, y_ = /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|img|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
function b_(e, t, n, r, i) {
	let a = e.input.compositionPendingChanges || (e.composing ? e.input.compositionID : 0);
	if (e.input.compositionPendingChanges = 0, t < 0) {
		let t = e.input.lastSelectionTime > Date.now() - 50 ? e.input.lastSelectionOrigin : null, n = eh(e, t);
		if (n && !e.state.selection.eq(n)) {
			if (Rp && Wp && e.input.lastKeyCode === 13 && Date.now() - 100 < e.input.lastKeyCodeTime && og(e, "Enter")) return;
			let r = e.state.tr.setSelection(n);
			t == "pointer" ? r.setMeta("pointer", !0) : t == "key" && r.scrollIntoView(), a && r.setMeta("composition", a), e.dispatch(r);
		}
		return;
	}
	let o = e.state.doc.resolve(t), s = o.sharedDepth(n);
	t = o.before(s + 1), n = e.state.doc.resolve(n).after(s + 1);
	let c = e.state.selection, l = __(e, t, n, i), u = e.state.doc, d = u.slice(l.from, l.to), f, p;
	e.input.lastKeyCode === 8 && Date.now() - 100 < e.input.lastKeyCodeTime ? (f = e.state.selection.to, p = "end") : (f = e.state.selection.from, p = "start"), e.input.lastKeyCode = null;
	let m = E_(d.content, l.doc.content, l.from, f, p);
	if (m && e.input.domChangeCount++, (Vp && e.input.lastIOSEnter > Date.now() - 225 || Wp) && i.some((e) => W(e) && !y_.test(e.nodeName)) && (!m || m.endA >= m.endB) && og(e, "Enter")) {
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
				let t = x_(e, e.state.doc, l.sel);
				if (t && !t.eq(e.state.selection)) {
					let n = e.state.tr.setSelection(t);
					a && n.setMeta("composition", a), e.dispatch(n);
				}
			}
			return;
		}
	}
	e.state.selection.from < e.state.selection.to && m.start == m.endB && e.state.selection instanceof B && (m.start > e.state.selection.from && m.start <= e.state.selection.from + 2 && e.state.selection.from >= l.from ? m.start = e.state.selection.from : m.endA < e.state.selection.to && m.endA >= e.state.selection.to - 2 && e.state.selection.to <= l.to && (m.endB += e.state.selection.to - m.endA, m.endA = e.state.selection.to)), Pp && Fp <= 11 && m.endB == m.start + 1 && m.endA == m.start && m.start > l.from && l.doc.textBetween(m.start - l.from - 1, m.start - l.from + 1) == " \xA0" && (m.start--, m.endA--, m.endB--);
	let h = l.doc.resolveNoCache(m.start - l.from), g = l.doc.resolveNoCache(m.endB - l.from), _ = u.resolve(m.start), v = h.sameParent(g) && h.parent.inlineContent && _.end() >= m.endA;
	if ((Vp && e.input.lastIOSEnter > Date.now() - 225 && (!v || i.some((e) => e.nodeName == "DIV" || e.nodeName == "P")) || !v && w_(l.doc, h.pos, g.pos)) && og(e, "Enter")) {
		e.input.lastIOSEnter = 0;
		return;
	}
	if (e.state.selection.anchor > m.start && (v ? m.endA > m.start && m.endB == m.start : C_(u, m.start, m.endA, h, g)) && og(e, "Backspace")) {
		Wp && Rp && e.domObserver.suppressSelectionUpdates();
		return;
	}
	Rp && m.endB == m.start && (e.input.lastChromeDelete = Date.now()), Wp && !v && h.start() != g.start() && g.parentOffset == 0 && h.depth == g.depth && l.sel && l.sel.anchor == l.sel.head && l.sel.head == m.endA && (m.endB -= 2, g = l.doc.resolveNoCache(m.endB - l.from), setTimeout(() => og(e, "Enter"), 20));
	let y = m.start, b = m.endA, x = (t) => {
		let n = t || e.state.tr.replace(y, b, l.doc.slice(m.start - l.from, m.endB - l.from));
		if (l.sel) {
			let t = x_(e, n.doc, l.sel);
			t && !(Rp && e.composing && t.empty && (m.start != m.endB || e.input.lastChromeDelete < Date.now() - 100) && (t.head == y || t.head == n.mapping.map(b) - 1) || Pp && t.empty && t.head == y) && n.setSelection(t);
		}
		return a && n.setMeta("composition", a), n.scrollIntoView();
	}, S;
	if (v) {
		if (h.pos == g.pos) {
			Pp && Fp <= 11 && h.parentOffset == 0 && (e.domObserver.suppressSelectionUpdates(), setTimeout(() => nh(e), 20));
			let t = x(e.state.tr.delete(y, b)), n = u.resolve(m.start).marksAcross(u.resolve(m.endA));
			n && t.ensureMarks(n), e.dispatch(t);
		} else if (m.endA == m.endB && (S = S_(h.parent.content.cut(h.parentOffset, g.parentOffset), _.parent.content.cut(_.parentOffset, m.endA - _.start())))) {
			let t = x(e.state.tr);
			S.type == "add" ? t.addMark(y, b, S.mark) : t.removeMark(y, b, S.mark), e.dispatch(t);
		} else if (h.parent.child(h.index()).isText && h.index() == g.index() - +!g.textOffset) {
			let t = h.parent.textBetween(h.parentOffset, g.parentOffset), n = () => x(e.state.tr.insertText(t, y, b));
			e.someProp("handleTextInput", (r) => r(e, y, b, t, n)) || e.dispatch(n());
		} else e.dispatch(x());
	} else e.dispatch(x());
}
function x_(e, t, n) {
	return Math.max(n.anchor, n.head) > t.content.size ? null : dh(e, t.resolve(n.anchor), t.resolve(n.head));
}
function S_(e, t) {
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
function C_(e, t, n, r, i) {
	if (n - t <= i.pos - r.pos || T_(r, !0, !1) < i.pos) return !1;
	let a = e.resolve(t);
	if (!r.parent.inlineContent) {
		let e = a.nodeAfter;
		return e != null && n == t + e.nodeSize;
	}
	if (a.parentOffset < a.parent.content.size || !a.parent.isTextblock) return !1;
	let o = e.resolve(T_(a, !0, !0));
	return !o.parent.isTextblock || o.pos > n || T_(o, !0, !1) < n ? !1 : r.parent.content.cut(r.parentOffset).eq(o.parent.content);
}
function w_(e, t, n) {
	let r = 0, i = 0;
	return e.nodesBetween(t, n, (e, a) => {
		e.isTextblock && a >= t && a < n ? r++ : (e.isText ? /\S/.test(e.text.slice(Math.max(0, t - a), Math.min(e.nodeSize, n - a))) : e.isLeaf) && i++;
	}), i == 0 && r == 1;
}
function T_(e, t, n) {
	let r = e.depth, i = t ? e.end() : e.pos;
	for (; r > 0 && (t || e.indexAfter(r) == e.node(r).childCount);) r--, i++, t = !1;
	if (n) {
		let t = e.node(r).maybeChild(e.indexAfter(r));
		for (; t && !t.isLeaf;) t = t.firstChild, i++;
	}
	return i;
}
function E_(e, t, n, r, i) {
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
var D_ = class {
	constructor(e, t) {
		this._root = null, this.focused = !1, this.trackWrites = null, this.mounted = !1, this.markCursor = null, this.cursorWrapper = null, this.lastSelectedViewDesc = void 0, this.input = new Qh(), this.prevDirectPlugins = [], this.pluginViews = [], this.requiresGeckoHackNode = !1, this.dragging = null, this._props = t, this.state = t.state, this.directPlugins = t.plugins || [], this.directPlugins.forEach(P_), this.dispatch = this.dispatch.bind(this), this.dom = e && e.mount || document.createElement("div"), e && (e.appendChild ? e.appendChild(this.dom) : typeof e == "function" ? e(this.dom) : e.mount && (this.mounted = !0)), this.editable = A_(this), k_(this), this.nodeViews = M_(this), this.docView = Pm(this.state.doc, O_(this), a_(this), this.dom, this), this.domObserver = new l_(this, (e, t, n, r) => b_(this, e, t, n, r)), this.domObserver.start(), $h(this), this.updatePluginViews();
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
		e.handleDOMEvents != this._props.handleDOMEvents && ng(this);
		let t = this._props;
		this._props = e, e.plugins && (e.plugins.forEach(P_), this.directPlugins = e.plugins), this.updateStateInner(e.state, t);
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
		e.storedMarks && this.composing && (Dg(this), i = !0), this.state = e;
		let a = n.plugins != e.plugins || this._props.plugins != t.plugins;
		if (a || this._props.plugins != t.plugins || this._props.nodeViews != t.nodeViews) {
			let e = M_(this);
			N_(e, this.nodeViews) && (this.nodeViews = e, r = !0);
		}
		(a || t.handleDOMEvents != this._props.handleDOMEvents) && ng(this), this.editable = A_(this), k_(this);
		let o = a_(this), s = O_(this), c = n.plugins != e.plugins && !n.doc.eq(e.doc) ? "reset" : e.scrollToSelection > n.scrollToSelection ? "to selection" : "preserve", l = r || !this.docView.matchesNode(e.doc, s, o);
		(l || !e.selection.eq(n.selection)) && (i = !0);
		let u = c == "preserve" && i && this.dom.style.overflowAnchor == null && Zp(this);
		if (i) {
			this.domObserver.stop();
			let t = l && (Pp || Rp) && !this.composing && !n.selection.empty && !e.selection.empty && j_(n.selection, e.selection);
			if (l) {
				let n = Rp ? this.trackWrites = this.domSelectionRange().focusNode : null;
				this.composing && (this.input.compositionNode = Og(this)), (r || !this.docView.update(e.doc, s, o, this)) && (this.docView.updateOuterDeco(s), this.docView.destroy(), this.docView = Pm(e.doc, s, o, this.dom, this)), !n || this.trackWrites && this.dom.contains(this.trackWrites) || (t = !0);
			}
			let i = this.input.mouseDown;
			t || !(i && this.domObserver.currentSelection.eq(this.domSelectionRange()) && mh(this) && i.delaySelUpdate()) ? nh(this, t) : (lh(this, e.selection), this.domObserver.setCurSelection()), this.domObserver.start();
		}
		this.updatePluginViews(n), this.dragging?.node && !n.doc.eq(e.doc) && this.updateDraggedNode(this.dragging, n), c == "reset" ? this.dom.scrollTop = 0 : c == "to selection" ? this.scrollToSelection() : u && $p(u);
	}
	scrollToSelection() {
		let e = this.domSelectionRange().focusNode;
		if (e && yp(this.dom, e) && !this.someProp("handleScrollToSelection", (e) => e(this))) {
			if (this.state.selection instanceof V) {
				let t = this.docView.domAfterPos(this.state.selection.from);
				W(t) && Xp(this, t.getBoundingClientRect(), e);
			} else Xp(this, this.coordsAtPos(this.state.selection.head, 1), e);
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
		this.dragging = new Ig(e.slice, e.move, r < 0 ? void 0 : V.create(this.state.doc, r));
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
		if (Pp) {
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
		this.domObserver.stop(), this.editable && nm(this.dom), nh(this), this.domObserver.start();
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
		return um(this, e);
	}
	coordsAtPos(e, t = 1) {
		return mm(this, e, t);
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
		return wm(this, t || this.state, e);
	}
	pasteHTML(e, t) {
		return Pg(this, "", e, !1, t || new ClipboardEvent("paste"));
	}
	pasteText(e, t) {
		return Pg(this, e, null, !0, t || new ClipboardEvent("paste"));
	}
	serializeForClipboard(e) {
		return Nh(this, e);
	}
	destroy() {
		this.docView && (tg(this), this.destroyPluginViews(), this.mounted ? (this.docView.update(this.state.doc, [], a_(this), this), this.dom.textContent = "") : this.dom.parentNode && this.dom.parentNode.removeChild(this.dom), this.docView.destroy(), this.docView = null, pp());
	}
	get isDestroyed() {
		return this.docView == null;
	}
	dispatchEvent(e) {
		return ag(this, e);
	}
	domSelectionRange() {
		let e = this.dom.isConnected !== !1 && this.domSelection();
		return e ? Bp && this.root.nodeType === 11 && Ep(this.dom.ownerDocument) == this.dom && m_(this, e) || e : {
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
D_.prototype.dispatch = function(e) {
	let t = this._props.dispatchTransaction;
	t ? t.call(this, e) : this.updateState(this.state.apply(e));
};
function O_(e) {
	let t = Object.create(null);
	return t.class = "ProseMirror", t.contenteditable = String(e.editable), e.someProp("attributes", (n) => {
		if (typeof n == "function" && (n = n(e.state)), n) for (let e in n) e == "class" ? t.class += " " + n[e] : e == "style" ? t.style = (t.style ? t.style + ";" : "") + n[e] : !t[e] && e != "contenteditable" && e != "nodeName" && (t[e] = String(n[e]));
	}), t.translate ||= "no", [Gg.node(0, e.state.doc.content.size, t)];
}
function k_(e) {
	if (e.markCursor) {
		let t = document.createElement("img");
		t.className = "ProseMirror-separator", t.setAttribute("mark-placeholder", "true"), t.setAttribute("alt", ""), e.cursorWrapper = {
			dom: t,
			deco: Gg.widget(e.state.selection.from, t, {
				raw: !0,
				marks: e.markCursor
			})
		};
	} else e.cursorWrapper = null;
}
function A_(e) {
	return !e.someProp("editable", (t) => t(e.state) === !1);
}
function j_(e, t) {
	let n = Math.min(e.$anchor.sharedDepth(e.head), t.$anchor.sharedDepth(t.head));
	return e.$anchor.start(n) != t.$anchor.start(n);
}
function M_(e) {
	let t = Object.create(null);
	function n(e) {
		for (let n in e) Object.prototype.hasOwnProperty.call(t, n) || (t[n] = e[n]);
	}
	return e.someProp("nodeViews", n), e.someProp("markViews", n), t;
}
function N_(e, t) {
	let n = 0, r = 0;
	for (let r in e) {
		if (e[r] != t[r]) return !0;
		n++;
	}
	for (let e in t) r++;
	return n != r;
}
function P_(e) {
	if (e.spec.state || e.spec.filterTransaction || e.spec.appendTransaction) throw RangeError("Plugins passed directly to the view must not have a state component");
}
for (var F_ = {
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
}, I_ = {
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
}, L_ = typeof navigator < "u" && /Mac/.test(navigator.platform), R_ = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), z_ = 0; z_ < 10; z_++) F_[48 + z_] = F_[96 + z_] = String(z_);
for (var z_ = 1; z_ <= 24; z_++) F_[z_ + 111] = "F" + z_;
for (var z_ = 65; z_ <= 90; z_++) F_[z_] = String.fromCharCode(z_ + 32), I_[z_] = String.fromCharCode(z_);
for (var B_ in F_) I_.hasOwnProperty(B_) || (I_[B_] = F_[B_]);
function V_(e) {
	var t = !(L_ && e.metaKey && e.shiftKey && !e.ctrlKey && !e.altKey || R_ && e.shiftKey && e.key && e.key.length == 1 || e.key == "Unidentified") && e.key || (e.shiftKey ? I_ : F_)[e.keyCode] || e.key || "Unidentified";
	return t == "Esc" && (t = "Escape"), t == "Del" && (t = "Delete"), t == "Left" && (t = "ArrowLeft"), t == "Up" && (t = "ArrowUp"), t == "Right" && (t = "ArrowRight"), t == "Down" && (t = "ArrowDown"), t;
}
// node_modules/prosemirror-keymap/dist/index.js
var H_ = typeof navigator < "u" && /Mac|iP(hone|[oa]d)/.test(navigator.platform), U_ = typeof navigator < "u" && /Win/.test(navigator.platform);
function W_(e) {
	let t = e.split(/-(?!$)/), n = t[t.length - 1];
	n == "Space" && (n = " ");
	let r, i, a, o;
	for (let e = 0; e < t.length - 1; e++) {
		let n = t[e];
		if (/^(cmd|meta|m)$/i.test(n)) o = !0;
		else if (/^a(lt)?$/i.test(n)) r = !0;
		else if (/^(c|ctrl|control)$/i.test(n)) i = !0;
		else if (/^s(hift)?$/i.test(n)) a = !0;
		else if (/^mod$/i.test(n)) H_ ? o = !0 : i = !0;
		else throw Error("Unrecognized modifier name: " + n);
	}
	return r && (n = "Alt-" + n), i && (n = "Ctrl-" + n), o && (n = "Meta-" + n), a && (n = "Shift-" + n), n;
}
function G_(e) {
	let t = Object.create(null);
	for (let n in e) t[W_(n)] = e[n];
	return t;
}
function K_(e, t, n = !0) {
	return t.altKey && (e = "Alt-" + e), t.ctrlKey && (e = "Ctrl-" + e), t.metaKey && (e = "Meta-" + e), n && t.shiftKey && (e = "Shift-" + e), e;
}
function q_(e) {
	return new H({ props: { handleKeyDown: J_(e) } });
}
function J_(e) {
	let t = G_(e);
	return function(e, n) {
		let r = V_(n), i, a = t[K_(r, n)];
		if (a && a(e.state, e.dispatch, e)) return !0;
		if (r.length == 1 && r != " ") {
			if (n.shiftKey) {
				let i = t[K_(r, n, !1)];
				if (i && i(e.state, e.dispatch, e)) return !0;
			}
			if ((n.altKey || n.metaKey || n.ctrlKey) && !(U_ && n.ctrlKey && n.altKey) && (i = F_[n.keyCode]) && i != r) {
				let r = t[K_(i, n)];
				if (r && r(e.state, e.dispatch, e)) return !0;
			}
		}
		return !1;
	};
}
// node_modules/rope-sequence/dist/index.js
var Y_ = 200, X_ = function() {};
X_.prototype.append = function(e) {
	return e.length ? (e = X_.from(e), !this.length && e || e.length < Y_ && this.leafAppend(e) || this.length < Y_ && e.leafPrepend(this) || this.appendInner(e)) : this;
}, X_.prototype.prepend = function(e) {
	return e.length ? X_.from(e).append(this) : this;
}, X_.prototype.appendInner = function(e) {
	return new Q_(this, e);
}, X_.prototype.slice = function(e, t) {
	return e === void 0 && (e = 0), t === void 0 && (t = this.length), e >= t ? X_.empty : this.sliceInner(Math.max(0, e), Math.min(this.length, t));
}, X_.prototype.get = function(e) {
	if (!(e < 0 || e >= this.length)) return this.getInner(e);
}, X_.prototype.forEach = function(e, t, n) {
	t === void 0 && (t = 0), n === void 0 && (n = this.length), t <= n ? this.forEachInner(e, t, n, 0) : this.forEachInvertedInner(e, t, n, 0);
}, X_.prototype.map = function(e, t, n) {
	t === void 0 && (t = 0), n === void 0 && (n = this.length);
	var r = [];
	return this.forEach(function(t, n) {
		return r.push(e(t, n));
	}, t, n), r;
}, X_.from = function(e) {
	return e instanceof X_ ? e : e && e.length ? new Z_(e) : X_.empty;
};
var Z_ = /* @__PURE__ */ function(e) {
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
		if (this.length + e.length <= Y_) return new t(this.values.concat(e.flatten()));
	}, t.prototype.leafPrepend = function(e) {
		if (this.length + e.length <= Y_) return new t(e.flatten().concat(this.values));
	}, n.length.get = function() {
		return this.values.length;
	}, n.depth.get = function() {
		return 0;
	}, Object.defineProperties(t.prototype, n), t;
}(X_);
X_.empty = new Z_([]);
var Q_ = /* @__PURE__ */ function(e) {
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
}(X_), $_ = 500, ev = class e {
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
					u.push(new nv(t.map));
					let e = t.step.map(i.slice(a)), n;
					e && o.maybeStep(e).doc && (n = o.mapping.maps[o.mapping.maps.length - 1], l.push(new nv(n, void 0, void 0, l.length + u.length))), a--, n && i.appendMap(n, a);
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
			let r = t.steps[e].invert(t.docs[e]), l = new nv(t.mapping.maps[e], r, n), u;
			(u = c && c.merge(l)) && (l = u, e ? a.pop() : s = s.slice(0, s.length - 1)), a.push(l), n &&= (o++, void 0), i || (c = l);
		}
		let l = o - r.depth;
		return l > iv && (s = tv(s, l), o -= l), new e(s.append(a), o);
	}
	remapping(e, t) {
		let n = new Wu();
		return this.items.forEach((t, r) => {
			let i = t.mirrorOffset != null && r - t.mirrorOffset >= e ? n.maps.length - t.mirrorOffset : void 0;
			n.appendMap(t.map, i);
		}, e, t), n;
	}
	addMaps(t) {
		return this.eventCount == 0 ? this : new e(this.items.append(t.map((e) => new nv(e))), this.eventCount);
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
				l && s++, r.push(new nv(i, o, l));
			} else r.push(new nv(i));
		}, i);
		let l = [];
		for (let e = n; e < o; e++) l.push(new nv(a.maps[e]));
		let u = this.items.slice(0, i).append(l).append(r), d = new e(u, s);
		return d.emptyItemCount() > $_ && (d = d.compress(this.items.length - r.length)), d;
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
					let c = new nv(o.invert(), t, s), l, u = i.length - 1;
					(l = i.length && i[u].merge(c)) ? i[u] = l : i.push(c);
				}
			} else e.map && r--;
		}, this.items.length, 0), new e(X_.from(i.reverse()), a);
	}
};
ev.empty = new ev(X_.empty, 0);
function tv(e, t) {
	let n;
	return e.forEach((e, r) => {
		if (e.selection && t-- == 0) return n = r, !1;
	}), e.slice(n);
}
var nv = class e {
	constructor(e, t, n, r) {
		this.map = e, this.step = t, this.selection = n, this.mirrorOffset = r;
	}
	merge(t) {
		if (this.step && t.step && !t.selection) {
			let n = t.step.merge(this.step);
			if (n) return new e(n.getMap().invert(), n, this.selection);
		}
	}
}, rv = class {
	constructor(e, t, n, r, i) {
		this.done = e, this.undone = t, this.prevRanges = n, this.prevTime = r, this.prevComposition = i;
	}
}, iv = 20;
function av(e, t, n, r) {
	let i = n.getMeta(mv), a;
	if (i) return i.historyState;
	n.getMeta(hv) && (e = new rv(e.done, e.undone, null, 0, -1));
	let o = n.getMeta("appendedTransaction");
	if (n.steps.length == 0) return e;
	if (o && o.getMeta(mv)) return o.getMeta(mv).redo ? new rv(e.done.addTransform(n, void 0, r, fv(t)), e.undone, sv(n.mapping.maps), e.prevTime, e.prevComposition) : new rv(e.done, e.undone.addTransform(n, void 0, r, fv(t)), null, e.prevTime, e.prevComposition);
	if (n.getMeta("addToHistory") !== !1 && !(o && o.getMeta("addToHistory") === !1)) {
		let i = n.getMeta("composition"), a = e.prevTime == 0 || !o && e.prevComposition != i && (e.prevTime < (n.time || 0) - r.newGroupDelay || !ov(n, e.prevRanges)), s = o ? cv(e.prevRanges, n.mapping) : sv(n.mapping.maps);
		return new rv(e.done.addTransform(n, a ? t.selection.getBookmark() : void 0, r, fv(t)), ev.empty, s, n.time, i ?? e.prevComposition);
	}
	return (a = n.getMeta("rebased")) ? new rv(e.done.rebased(n, a), e.undone.rebased(n, a), cv(e.prevRanges, n.mapping), e.prevTime, e.prevComposition) : new rv(e.done.addMaps(n.mapping.maps), e.undone.addMaps(n.mapping.maps), cv(e.prevRanges, n.mapping), e.prevTime, e.prevComposition);
}
function ov(e, t) {
	if (!t) return !1;
	if (!e.docChanged) return !0;
	let n = !1;
	return e.mapping.maps[0].forEach((e, r) => {
		for (let i = 0; i < t.length; i += 2) e <= t[i + 1] && r >= t[i] && (n = !0);
	}), n;
}
function sv(e) {
	let t = [];
	for (let n = e.length - 1; n >= 0 && t.length == 0; n--) e[n].forEach((e, n, r, i) => t.push(r, i));
	return t;
}
function cv(e, t) {
	if (!e) return null;
	let n = [];
	for (let r = 0; r < e.length; r += 2) {
		let i = t.map(e[r], 1), a = t.map(e[r + 1], -1);
		i <= a && n.push(i, a);
	}
	return n;
}
function lv(e, t, n) {
	let r = fv(t), i = mv.get(t).spec.config, a = (n ? e.undone : e.done).popEvent(t, r);
	if (!a) return null;
	let o = a.selection.resolve(a.transform.doc), s = (n ? e.done : e.undone).addTransform(a.transform, t.selection.getBookmark(), i, r), c = new rv(n ? s : a.remaining, n ? a.remaining : s, null, 0, -1);
	return a.transform.setSelection(o).setMeta(mv, {
		redo: n,
		historyState: c
	});
}
var uv = !1, dv = null;
function fv(e) {
	let t = e.plugins;
	if (dv != t) {
		uv = !1, dv = t;
		for (let e = 0; e < t.length; e++) if (t[e].spec.historyPreserveItems) {
			uv = !0;
			break;
		}
	}
	return uv;
}
function pv(e) {
	return e.setMeta(hv, !0);
}
var mv = new U("history"), hv = new U("closeHistory");
function gv(e = {}) {
	return e = {
		depth: e.depth || 100,
		newGroupDelay: e.newGroupDelay || 500
	}, new H({
		key: mv,
		state: {
			init() {
				return new rv(ev.empty, ev.empty, null, 0, -1);
			},
			apply(t, n, r) {
				return av(n, r, t, e);
			}
		},
		config: e,
		props: { handleDOMEvents: { beforeinput(e, t) {
			let n = t.inputType, r = n == "historyUndo" ? vv : n == "historyRedo" ? yv : null;
			return !r || !e.editable ? !1 : (t.preventDefault(), r(e.state, e.dispatch));
		} } }
	});
}
function _v(e, t) {
	return (n, r) => {
		let i = mv.getState(n);
		if (!i || (e ? i.undone : i.done).eventCount == 0) return !1;
		if (r) {
			let a = lv(i, n, e);
			a && r(t ? a.scrollIntoView() : a);
		}
		return !0;
	};
}
var vv = _v(!1, !0), yv = _v(!0, !0);
function bv(e) {
	return e.getMeta(mv) != null;
}
// node_modules/@tiptap/core/dist/index.js
function xv(e) {
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
var Sv = class e {
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
			state: xv({
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
}, Cv = () => ({ editor: e, view: t }) => (requestAnimationFrame(() => {
	if (!e.isDestroyed) {
		var n;
		t.dom.blur(), (n = window) == null || (n = n.getSelection()) == null || n.removeAllRanges();
	}
}), !0), wv = (e = !0) => ({ commands: t }) => t.setContent("", { emitUpdate: e }), Tv = () => ({ tr: e, dispatch: t }) => {
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
				let l = cd(o);
				if (t.type.isTextblock) {
					let { defaultType: t } = i.parent.contentMatchAt(i.index()), n = e.doc.nodeAt(o.start);
					t && n && !n.hasMarkup(t) && t.validContent(n.content) && e.setNodeMarkup(o.start, t);
				}
				(l || l === 0) && e.lift(o, l);
			}), e.doc.eq(t)) break;
		}
	}), !0;
}, Ev = (e) => (t) => e(t), Dv = () => ({ state: e, dispatch: t }) => Lf(e, t), Ov = (e, t) => ({ editor: n, tr: r }) => {
	let { state: i } = n, a = i.doc.slice(e.from, e.to);
	r.deleteRange(e.from, e.to);
	let o = r.mapping.map(t);
	return r.insert(o, a.content), r.setSelection(new B(r.doc.resolve(Math.max(o - 1, 0)))), !0;
}, kv = () => ({ tr: e, dispatch: t }) => {
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
function Av(e, t) {
	if (typeof e == "string") {
		if (!t.nodes[e]) throw Error(`There is no node type named '${e}'. Maybe you forgot to add the extension?`);
		return t.nodes[e];
	}
	return e;
}
var jv = (e) => ({ tr: t, state: n, dispatch: r }) => {
	let i = Av(e, n.schema), a = t.selection.$anchor;
	for (let e = a.depth; e > 0; --e) if (a.node(e).type === i) {
		if (r) {
			let n = a.before(e), r = a.after(e);
			t.delete(n, r).scrollIntoView();
		}
		return !0;
	}
	return !1;
}, Mv = (e) => ({ tr: t, dispatch: n }) => {
	let { from: r, to: i } = e;
	return n && t.delete(r, i), !0;
}, Nv = (e) => e.content ? /^text(\*|\+)/.test(e.content) : !1, Pv = (e, t, n) => {
	if (!e.parent.isInline || n === "left" && e.pos > e.start() || n === "right" && e.pos < e.end()) return e.pos;
	let r = t.nodes[e.parent.type.name].spec;
	return Nv(r) ? n === "left" ? e.start() - 1 : e.end() + 1 : e.pos;
}, Fv = (e, t, n) => ({
	from: Pv(e, n, "left"),
	to: Pv(t, n, "right")
}), Iv = () => ({ state: e, dispatch: t }) => {
	if (e.selection.empty) return !1;
	if (t) {
		let n = e.tr, { ranges: r } = e.selection, i = e.selection instanceof B ? e.selection.$from.marksAcross(e.selection.$to) : null, a = n.steps.length;
		r.forEach((t) => {
			let r = n.mapping.slice(a), { from: i, to: o } = Fv(n.doc.resolve(r.map(t.$from.pos)), n.doc.resolve(r.map(t.$to.pos)), e.schema);
			n.deleteRange(i, o);
		}), n.selection.empty || n.setSelection(B.near(n.doc.resolve(n.selection.from))), i && n.ensureMarks(i), n.scrollIntoView(), t(n);
	}
	return !0;
}, Lv = () => ({ commands: e }) => e.keyboardShortcut("Enter"), Rv = () => ({ state: e, dispatch: t }) => If(e, t);
function zv(e) {
	return Object.prototype.toString.call(e) === "[object RegExp]";
}
function Bv(e, t, n = { strict: !0 }) {
	let r = Object.keys(t);
	return !r.length || r.every((r) => n.strict ? t[r] === e[r] : zv(t[r]) ? t[r].test(e[r]) : t[r] === e[r]);
}
function Vv(e, t, n = {}) {
	return e.find((e) => e.type === t && Bv(Object.fromEntries(Object.keys(n).map((t) => [t, e.attrs[t]])), n));
}
function Hv(e, t, n = {}) {
	return !!Vv(e, t, n);
}
function Uv(e, t, n) {
	if (!e || !t) return;
	let r = e.parent.childAfter(e.parentOffset);
	if (r.node && r.node.marks.some((e) => e.type === t) || (r = e.parent.childBefore(e.parentOffset)), !r.node || !r.node.marks.some((e) => e.type === t)) return;
	if (!n) {
		let e = r.node.marks.find((e) => e.type === t);
		e && (n = e.attrs);
	}
	if (!Vv([...r.node.marks], t, n)) return;
	let i = r.index, a = e.start() + r.offset, o = i + 1, s = a + r.node.nodeSize;
	for (; i > 0 && Hv([...e.parent.child(i - 1).marks], t, n);) --i, a -= e.parent.child(i).nodeSize;
	for (; o < e.parent.childCount && Hv([...e.parent.child(o).marks], t, n);) s += e.parent.child(o).nodeSize, o += 1;
	return {
		from: a,
		to: s
	};
}
function Wv(e, t) {
	if (typeof e == "string") {
		if (!t.marks[e]) throw Error(`There is no mark type named '${e}'. Maybe you forgot to add the extension?`);
		return t.marks[e];
	}
	return e;
}
var Gv = (e, t) => ({ tr: n, state: r, dispatch: i }) => {
	let a = Wv(e, r.schema), { doc: o, selection: s } = n, { $from: c, from: l, to: u } = s;
	if (i) {
		let e = Uv(c, a, t);
		if (e && e.from <= l && e.to >= u) {
			let t = B.create(o, e.from, e.to);
			n.setSelection(t);
		}
	}
	return !0;
}, Kv = (e) => (t) => {
	let n = typeof e == "function" ? e(t) : e;
	for (let e = 0; e < n.length; e += 1) if (n[e](t)) return !0;
	return !1;
};
function qv(e) {
	return e instanceof B;
}
function Jv(e = 0, t = 0, n = 0) {
	return Math.min(Math.max(e, t), n);
}
function Yv(e, t = null) {
	if (!t) return null;
	let n = z.atStart(e), r = z.atEnd(e);
	if (t === "start" || t === !0) return n;
	if (t === "end") return r;
	let i = n.from, a = r.to;
	return t === "all" ? B.create(e, Jv(0, i, a), Jv(e.content.size, i, a)) : B.create(e, Jv(t, i, a), Jv(t, i, a));
}
function Xv() {
	return ["Android"].includes(navigator.platform) || /android/i.test(navigator.userAgent);
}
function Zv() {
	return [
		"iPad Simulator",
		"iPhone Simulator",
		"iPod Simulator",
		"iPad",
		"iPhone",
		"iPod"
	].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
function Qv() {
	return typeof navigator < "u" && /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
var $v = (e = null, t = {}) => ({ editor: n, view: r, tr: i, dispatch: a }) => {
	t = {
		scrollIntoView: !0,
		...t
	};
	let o = () => {
		(Zv() || Xv()) && r.dom.focus(), Qv() && !Zv() && !Xv() && r.dom.focus({ preventScroll: !0 }), requestAnimationFrame(() => {
			n.isDestroyed || (r.focus(), t?.scrollIntoView && n.commands.scrollIntoView());
		});
	};
	try {
		if (r.hasFocus() && e === null || e === !1) return !0;
	} catch {
		return !1;
	}
	if (a && e === null && !qv(n.state.selection)) return o(), !0;
	let s = Yv(i.doc, e) || n.state.selection, c = n.state.selection.eq(s);
	return a && (c || i.setSelection(s), c && i.storedMarks && i.setStoredMarks(i.storedMarks), o()), !0;
}, ey = (e, t) => (n) => e.every((e, r) => t(e, {
	...n,
	index: r
})), ty = (e, t) => ({ tr: n, commands: r }) => r.insertContentAt({
	from: n.selection.from,
	to: n.selection.to
}, e, t), ny = (e) => {
	let t = e.childNodes;
	for (let n = t.length - 1; n >= 0; --n) {
		let r = t[n];
		r.nodeType === 3 && r.nodeValue && /^(\n\s\s|\n)$/.test(r.nodeValue) ? e.removeChild(r) : r.nodeType === 1 && ny(r);
	}
	return e;
};
function ry(e) {
	if (typeof window > "u") throw Error("[tiptap error]: there is no window object available, so this function cannot be used");
	let t = `<body>${e}</body>`, n = new window.DOMParser().parseFromString(t, "text/html").body;
	return ny(n);
}
function iy(e) {
	return typeof e?.nodesBetween == "function";
}
function ay(e, t, n) {
	if (iy(e)) return e;
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
		return console.warn("[tiptap warn]: Invalid content.", "Passed value:", e, "Error:", r), ay("", t, n);
	}
	if (i) {
		if (n.errorOnInvalidContent) {
			let r = !1, i = "", a = new cu({
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
			if (n.slice ? fu.fromSchema(a).parseSlice(ry(e), n.parseOptions) : fu.fromSchema(a).parse(ry(e), n.parseOptions), n.errorOnInvalidContent && r) throw Error("[tiptap error]: Invalid HTML content", { cause: /* @__PURE__ */ Error(`Invalid element found: ${i}`) });
		}
		let r = fu.fromSchema(t);
		return n.slice ? r.parseSlice(ry(e), n.parseOptions).content : r.parse(ry(e), n.parseOptions);
	}
	return ay("", t, n);
}
function oy(e) {
	return !("type" in e);
}
function sy(e, t, n) {
	let r = e.steps.length - 1;
	if (r < t) return;
	let i = e.steps[r];
	if (!(i instanceof td || i instanceof nd)) return;
	let a = e.mapping.maps[r], o = 0;
	a.forEach((e, t, n, r) => {
		o === 0 && (o = r);
	}), e.setSelection(z.near(e.doc.resolve(o), n));
}
var cy = (e, t, n) => ({ tr: r, dispatch: i, editor: a }) => {
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
			ay(t, a.schema, {
				parseOptions: s,
				errorOnInvalidContent: !0
			});
		} catch (e) {
			o(e);
		}
		try {
			i = ay(t, a.schema, {
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
		}, u = !0, d = !0, f = oy(i) ? i.content : [i];
		if (f.forEach((e) => {
			e.check(), u = u ? e.isText && e.marks.length === 0 : !1, d = d ? e.isBlock : !1;
		}), c === l && d) {
			let { parent: e } = r.doc.resolve(c);
			e.isTextblock && !e.type.spec.code && !e.childCount && (--c, l += 1);
		}
		let p;
		if (u) p = Array.isArray(t) ? t.map((e) => e.text || "").join("") : iy(t) ? f.map((e) => e.text ?? "").join("") : typeof t == "object" && t && t.text ? t.text : t, r.insertText(p, c, l);
		else {
			p = I.from(f);
			let e = r.doc.resolve(c), t = e.node(), n = e.parentOffset === 0, i = t.isText || t.isTextblock, a = t.content.size > 0;
			n && i && a && d && (c = Math.max(0, c - 1)), r.replaceWith(c, l, f);
		}
		n.updateSelection && sy(r, r.steps.length - 1, -1), n.applyInputRules && r.setMeta("applyInputRules", {
			from: c,
			text: p
		}), n.applyPasteRules && r.setMeta("applyPasteRules", {
			from: c,
			text: p
		});
	}
	return !0;
};
function ly(e) {
	for (let t = 0; t < e.edgeCount; t += 1) {
		let { type: n } = e.edge(t);
		if (n.isTextblock && !n.hasRequiredAttrs()) return n;
	}
	return null;
}
var uy = (e = {}) => ({ tr: t, dispatch: n, editor: r }) => {
	let { pos: i, attrs: a, content: o, updateSelection: s = !0 } = e, c;
	c = typeof i == "number" ? t.doc.resolve(i) : i || t.selection.$from;
	let l = ly(c.parent.contentMatchAt(c.index()));
	if (!l) return !1;
	let u = Object.keys(l.spec.attrs || {}), d = a ? Object.fromEntries(Object.entries(a).filter(([e]) => u.includes(e))) : {}, f;
	if (o) {
		let e = ay(o, r.schema);
		f = l.createAndFill(d, e);
	} else f = l.createAndFill(d);
	return f ? (n && (t.insert(c.pos, f), s && sy(t, t.steps.length - 1, -1)), !0) : !1;
}, dy = () => ({ state: e, dispatch: t }) => jf(e, t), fy = () => ({ state: e, dispatch: t }) => Mf(e, t), py = () => ({ state: e, dispatch: t }) => bf(e, t), my = () => ({ state: e, dispatch: t }) => Of(e, t), hy = (e, t) => {
	let n = e.resolve(t), r = n.nodeBefore, i = n.nodeAfter;
	return !r || !i ? !1 : !r.type.spec.isolating && !i.type.spec.isolating;
}, gy = () => ({ state: e, dispatch: t, tr: n }) => {
	try {
		let r = Td(e.doc, e.selection.$from.pos, -1);
		return r == null || !hy(e.doc, r) ? !1 : (n.join(r, 2), t && t(n), !0);
	} catch {
		return !1;
	}
}, _y = () => ({ state: e, dispatch: t, tr: n }) => {
	try {
		let r = Td(e.doc, e.selection.$from.pos, 1);
		return r == null || !hy(e.doc, r) ? !1 : (n.join(r, 2), t && t(n), !0);
	} catch {
		return !1;
	}
}, vy = () => ({ state: e, dispatch: t }) => xf(e, t), yy = () => ({ state: e, dispatch: t }) => Sf(e, t);
function by() {
	return typeof navigator < "u" && /Mac/.test(navigator.platform);
}
function xy(e) {
	let t = e.split(/-(?!$)/), n = t[t.length - 1];
	n === "Space" && (n = " ");
	let r, i, a, o;
	for (let e = 0; e < t.length - 1; e += 1) {
		let n = t[e];
		if (/^(cmd|meta|m)$/i.test(n)) o = !0;
		else if (/^a(lt)?$/i.test(n)) r = !0;
		else if (/^(c|ctrl|control)$/i.test(n)) i = !0;
		else if (/^s(hift)?$/i.test(n)) a = !0;
		else if (/^mod$/i.test(n)) Zv() || by() ? o = !0 : i = !0;
		else throw Error(`Unrecognized modifier name: ${n}`);
	}
	return r && (n = `Alt-${n}`), i && (n = `Ctrl-${n}`), o && (n = `Meta-${n}`), a && (n = `Shift-${n}`), n;
}
var Sy = (e) => ({ editor: t, view: n, tr: r, dispatch: i }) => {
	let a = xy(e).split(/-(?!$)/), o = a.find((e) => ![
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
function Cy(e, t, n = {}) {
	let { from: r, to: i, empty: a } = e.selection, o = t ? Av(t, e.schema) : null, s = [];
	e.doc.nodesBetween(r, i, (e, t) => {
		if (e.isText) return;
		let n = Math.max(r, t), a = Math.min(i, t + e.nodeSize);
		s.push({
			node: e,
			from: n,
			to: a
		});
	});
	let c = i - r, l = s.filter((e) => !o || o.name === e.node.type.name).filter((e) => Bv(e.node.attrs, n, { strict: !1 }));
	return a ? !!l.length : l.reduce((e, t) => e + t.to - t.from, 0) >= c;
}
var wy = (e, t = {}) => ({ state: n, dispatch: r }) => Cy(n, Av(e, n.schema), t) ? Nf(n, r) : !1, Ty = () => ({ state: e, dispatch: t }) => Rf(e, t), Ey = (e) => ({ state: t, dispatch: n }) => ap(Av(e, t.schema))(t, n), Dy = () => ({ state: e, dispatch: t }) => Pf(e, t);
function Oy(e, t) {
	return t.nodes[e] ? "node" : t.marks[e] ? "mark" : null;
}
function ky(e, t) {
	let n = typeof t == "string" ? [t] : t;
	return Object.keys(e).reduce((t, r) => (n.includes(r) || (t[r] = e[r]), t), {});
}
var Ay = (e, t) => ({ tr: n, state: r, dispatch: i }) => {
	let a = null, o = null, s = Oy(typeof e == "string" ? e : e.name, r.schema);
	if (!s) return !1;
	s === "node" && (a = Av(e, r.schema)), s === "mark" && (o = Wv(e, r.schema));
	let c = !1;
	return n.selection.ranges.forEach((e) => {
		r.doc.nodesBetween(e.$from.pos, e.$to.pos, (e, r) => {
			a && a === e.type && (c = !0, i && n.setNodeMarkup(r, void 0, ky(e.attrs, t))), o && e.marks.length && e.marks.forEach((a) => {
				o === a.type && (c = !0, i && n.addMark(r, r + e.nodeSize, o.create(ky(a.attrs, t))));
			});
		});
	}), c;
}, jy = () => ({ tr: e, dispatch: t }) => (t && e.scrollIntoView(), !0), My = () => ({ tr: e, dispatch: t }) => {
	if (t) {
		let t = new tf(e.doc);
		e.setSelection(t);
	}
	return !0;
}, Ny = () => ({ state: e, dispatch: t }) => Tf(e, t), Py = () => ({ state: e, dispatch: t }) => kf(e, t), Fy = () => ({ state: e, dispatch: t }) => Vf(e, t), Iy = () => ({ state: e, dispatch: t }) => qf(e, t), Ly = () => ({ state: e, dispatch: t }) => Kf(e, t);
function Ry(e, t, n = {}, r = {}) {
	return ay(e, t, {
		slice: !1,
		parseOptions: n,
		errorOnInvalidContent: r.errorOnInvalidContent
	});
}
var zy = (e, { errorOnInvalidContent: t, emitUpdate: n = !0, parseOptions: r = {} } = {}) => ({ editor: i, tr: a, dispatch: o, commands: s }) => {
	let { doc: c } = a;
	if (r.preserveWhitespace !== "full") {
		let s = Ry(e, i.schema, r, { errorOnInvalidContent: t ?? i.options.enableContentCheck });
		if (o) {
			let e = oy(s) ? s.content : [s];
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
function By(e, t) {
	let n = Wv(t, e.schema), { from: r, to: i, empty: a } = e.selection, o = [];
	a ? (e.storedMarks && o.push(...e.storedMarks), o.push(...e.selection.$head.marks())) : e.doc.nodesBetween(r, i, (e) => {
		o.push(...e.marks);
	});
	let s = o.find((e) => e.type.name === n.name);
	return s ? { ...s.attrs } : {};
}
function Vy(e, t) {
	let n = new Jd(e);
	return t.forEach((e) => {
		e.steps.forEach((e) => {
			n.step(e);
		});
	}), n;
}
function Hy(e, t, n) {
	let r = [];
	return e.nodesBetween(t.from, t.to, (e, t) => {
		n(e) && r.push({
			node: e,
			pos: t
		});
	}), r;
}
function Uy(e, t) {
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
function Wy(e) {
	return (t) => Uy(t.$from, e);
}
function K(e, t, n) {
	return e.config[t] === void 0 && e.parent ? K(e.parent, t, n) : typeof e.config[t] == "function" ? e.config[t].bind({
		...n,
		parent: e.parent ? K(e.parent, t, n) : null
	}) : e.config[t];
}
function Gy(e) {
	return e.map((e) => {
		let t = K(e, "addExtensions", {
			name: e.name,
			options: e.options,
			storage: e.storage
		});
		return t ? [e, ...Gy(t())] : e;
	}).flat(10);
}
function Ky(e, t) {
	let n = Eu.fromSchema(t).serializeFragment(e), r = document.implementation.createHTMLDocument().createElement("div");
	return r.appendChild(n), r.innerHTML;
}
function qy(e, t) {
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
var Jy = {
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
}, Yy = {
	inclusive: "boolean",
	excludes: "string",
	group: "string",
	spanning: "boolean",
	code: "boolean"
};
function Xy(e, t, n) {
	return Object.fromEntries(Object.entries(t).flatMap(([t, r]) => {
		let i = e[t];
		if (i === void 0) return [];
		if (!(typeof r == "string" ? typeof i === r : typeof i == "string" && r.includes(i))) throw RangeError(`Invalid schemaSpec field '${n}.${t}'`);
		return [[t, i]];
	}));
}
function Zy(e, t, n, r) {
	return {
		...Object.fromEntries(Object.entries(t).filter(([e]) => e !== "attrs" && !Object.hasOwn(r, e))),
		...Xy(n, r, e),
		attrs: n.attrs
	};
}
function Qy(e, t, n) {
	for (let r of Object.keys(t)) if (!Object.hasOwn(e, r)) throw RangeError(`schemaSpec requires a local ${n} extension named '${r}'`);
	for (let r of Object.keys(e)) if (!Object.hasOwn(t, r)) throw RangeError(`Local ${n} extension '${r}' is not in schemaSpec`);
}
function $y(e, t) {
	Qy(e.nodes, t.nodes, "node"), Qy(e.marks, t.marks, "mark");
	let n = t.spec.nodes, r = t.spec.marks;
	return t.spec.nodes.forEach((t, r) => {
		n = n.update(t, Zy(t, e.nodes[t], r, Jy));
	}), t.spec.marks.forEach((t, n) => {
		r = r.update(t, Zy(t, e.marks[t], n, Yy));
	}), {
		topNode: t.topNodeType.name,
		nodes: n,
		marks: r
	};
}
function eb(e) {
	let t = e.filter((t, n) => e.indexOf(t) !== n);
	return Array.from(new Set(t));
}
function tb(e) {
	return {
		baseExtensions: e.filter((e) => e.type === "extension"),
		nodeExtensions: e.filter((e) => e.type === "node"),
		markExtensions: e.filter((e) => e.type === "mark")
	};
}
function nb(e) {
	let t = [], { nodeExtensions: n, markExtensions: r } = tb(e), i = [...n, ...r], a = {
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
function rb(e) {
	return typeof e == "function";
}
function q(e, t = void 0, ...n) {
	return rb(e) ? t ? e.bind(t)(...n) : e(...n) : e;
}
function ib(e = {}) {
	return Object.keys(e).length === 0 && e.constructor === Object;
}
function ab(e) {
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
function ob(e) {
	let t = [], n = ab(e || ""), r = n.length;
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
				let r = new Map([...ob(n[e]), ...ob(t)]);
				n[e] = Array.from(r.entries()).map(([e, t]) => `${e}: ${t}`).join("; ");
			} else n[e] = t;
		}), n;
	}, {});
}
function sb(e, t) {
	return t.filter((t) => t.type === e.type.name).filter((e) => e.attribute.rendered).map((t) => t.attribute.renderHTML ? t.attribute.renderHTML(e.attrs) || {} : { [t.name]: e.attrs[t.name] }).reduce((e, t) => J(e, t), {});
}
function cb(e) {
	return typeof e == "string" ? e.match(/^[+-]?(?:\d*\.)?\d+$/) ? Number(e) : e === "true" || e !== "false" && e : e;
}
function lb(e, t) {
	return "style" in e ? e : {
		...e,
		getAttrs: (n) => {
			let r = e.getAttrs ? e.getAttrs(n) : e.attrs;
			if (r === !1) return !1;
			let i = t.reduce((e, t) => {
				let r = t.attribute.parseHTML ? t.attribute.parseHTML(n) : cb(n.getAttribute(t.name));
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
function ub(e) {
	return Object.fromEntries(Object.entries(e).filter(([e, t]) => e === "attrs" && ib(t) ? !1 : t != null));
}
function db(e) {
	var t, n;
	let r = {};
	return !(e != null && (t = e.attribute) != null && t.isRequired) && "default" in (e?.attribute || {}) && (r.default = e.attribute.default), (e == null || (n = e.attribute) == null ? void 0 : n.validate) !== void 0 && (r.validate = e.attribute.validate), [e.name, r];
}
function fb(e, t, n = nb(e)) {
	let { nodeExtensions: r, markExtensions: i } = tb(e);
	return {
		topNode: r.find((e) => K(e, "topNode"))?.name,
		nodes: Object.fromEntries(r.map((r) => {
			let i = n.filter((e) => e.type === r.name), a = {
				name: r.name,
				options: r.options,
				storage: r.storage,
				editor: t
			}, o = ub({
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
				attrs: Object.fromEntries(i.map(db))
			}), s = q(K(r, "parseHTML", a));
			s && (o.parseDOM = s.map((e) => lb(e, i)));
			let c = K(r, "renderHTML", a);
			c && (o.toDOM = (e) => c({
				node: e,
				HTMLAttributes: sb(e, i)
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
			}, o = ub({
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
				attrs: Object.fromEntries(i.map(db))
			}), s = q(K(r, "parseHTML", a));
			s && (o.parseDOM = s.map((e) => lb(e, i)));
			let c = K(r, "renderHTML", a);
			return c && (o.toDOM = (e) => c({
				mark: e,
				HTMLAttributes: sb(e, i)
			})), [r.name, o];
		}))
	};
}
function pb(e, t, n) {
	if (n === void 0) return new cu(fb(e, t));
	let r = eb(e.filter((e) => e.type !== "extension").map((e) => e.name));
	if (r.length) throw RangeError(`Duplicate local schema types: ${r.join(", ")}`);
	let i = new cu(n);
	return new cu($y(fb(e, t, qy(nb(e), i)), i));
}
function mb(e) {
	return e.sort((e, t) => {
		let n = K(e, "priority") || 100, r = K(t, "priority") || 100;
		return n > r ? -1 : +(n < r);
	});
}
function hb(e) {
	let t = mb(Gy(e)), n = eb(t.map((e) => e.name));
	return n.length && console.warn(`[tiptap warn]: Duplicate extension names found: [${n.map((e) => `'${e}'`).join(", ")}]. This can lead to issues.`), t;
}
function gb(e, t, n) {
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
function _b(e, t) {
	return gb(e, {
		from: 0,
		to: e.content.size
	}, t);
}
function vb(e) {
	return Object.fromEntries(Object.entries(e.nodes).filter(([, e]) => e.spec.toText).map(([e, t]) => [e, t.spec.toText]));
}
function yb(e, t) {
	let n = Av(t, e.schema), { from: r, to: i } = e.selection, a = [];
	e.doc.nodesBetween(r, i, (e) => {
		a.push(e);
	});
	let o = a.reverse().find((e) => e.type.name === n.name);
	return o ? { ...o.attrs } : {};
}
function bb(e, t) {
	let n = Oy(typeof t == "string" ? t : t.name, e.schema);
	return n === "node" ? yb(e, t) : n === "mark" ? By(e, t) : {};
}
function xb(e, t = JSON.stringify) {
	let n = {};
	return e.filter((e) => {
		let r = t(e);
		return Object.prototype.hasOwnProperty.call(n, r) ? !1 : n[r] = !0;
	});
}
function Sb(e) {
	let t = xb(e);
	return t.length === 1 ? t : t.filter((e, n) => !t.filter((e, t) => t !== n).some((t) => e.oldRange.from >= t.oldRange.from && e.oldRange.to <= t.oldRange.to && e.newRange.from >= t.newRange.from && e.newRange.to <= t.newRange.to));
}
function Cb(e) {
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
	}), Sb(r);
}
function wb(e, t, n) {
	let r = [];
	return e === t ? n.resolve(e).marks().forEach((t) => {
		let i = Uv(n.resolve(e), t.type);
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
var Tb = (e, t, n, r = 20) => {
	let i = e.doc.resolve(n), a = r, o = null;
	for (; a > 0 && o === null;) {
		let e = i.node(a);
		e?.type.name === t ? o = e : --a;
	}
	return [o, a];
}, Eb = (e) => {
	let t = e.depth - 1;
	if (t < 0) return null;
	let n = e.index(t);
	return n === 0 ? null : e.node(t).child(n - 1);
};
function Db(e, t) {
	return t.nodes[e] || t.marks[e] || null;
}
function Ob(e, t, n) {
	return Object.fromEntries(Object.entries(n).filter(([n]) => {
		let r = e.find((e) => e.type === t && e.name === n);
		return r ? r.attribute.keepOnSplit : !1;
	}));
}
var kb = (e, t = 500) => {
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
function Ab(e, t, n = {}) {
	let { empty: r, ranges: i } = e.selection, a = t ? Wv(t, e.schema) : null;
	if (r) return !!(e.storedMarks || e.selection.$from.marks()).filter((e) => !a || a.name === e.type.name).find((e) => Bv(e.attrs, n, { strict: !1 }));
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
	let c = s.filter((e) => !a || a.name === e.mark.type.name).filter((e) => Bv(e.mark.attrs, n, { strict: !1 })).reduce((e, t) => e + t.to - t.from, 0), l = s.filter((e) => !a || e.mark.type !== a && e.mark.type.excludes(a)).reduce((e, t) => e + t.to - t.from, 0);
	return (c > 0 ? c + l : c) >= o;
}
function jb(e, t, n = {}) {
	if (!t) return Cy(e, null, n) || Ab(e, null, n);
	let r = Oy(t, e.schema);
	return r === "node" ? Cy(e, t, n) : r === "mark" && Ab(e, t, n);
}
var Mb = (e, t) => {
	let { $from: n, $to: r, $anchor: i } = e.selection;
	if (t) {
		let n = Wy((e) => e.type.name === t)(e.selection);
		if (!n) return !1;
		let r = e.doc.resolve(n.pos + 1);
		return i.pos + 1 === r.end();
	}
	return !(r.parentOffset < r.parent.nodeSize - 2 || n.pos !== r.pos);
}, Nb = (e) => {
	let { $from: t, $to: n } = e.selection;
	return !(t.parentOffset > 0 || t.pos !== n.pos);
};
function Pb(e, t) {
	return Array.isArray(t) ? t.some((t) => (typeof t == "string" ? t : t.name) === e.name) : t;
}
function Fb(e, t) {
	let { nodeExtensions: n } = tb(t), r = n.find((t) => t.name === e);
	if (!r) return !1;
	let i = q(K(r, "group", {
		name: r.name,
		options: r.options,
		storage: r.storage
	}));
	return typeof i == "string" && i.split(" ").includes("list");
}
function Ib(e, { checkChildren: t = !0, ignoreWhitespace: n = !1 } = {}) {
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
			r !== !1 && (Ib(e, {
				ignoreWhitespace: n,
				checkChildren: t
			}) || (r = !1));
		}), r;
	}
	return !1;
}
function Lb(e) {
	return e instanceof V;
}
function Rb(e) {
	if (typeof e != "object" || !e) return !1;
	let t = e;
	return typeof t.apply == "function" && typeof t.getMap == "function" && typeof t.invert == "function" && typeof t.map == "function" && typeof t.merge == "function" && typeof t.toJSON == "function";
}
function zb(e) {
	if (typeof e != "object" || !e) return !1;
	let t = e;
	if (!Rb(t)) return !1;
	let n = t.toJSON();
	return !(typeof n != "object" || !n || n.stepType !== "replace");
}
var Bb = class e {
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
function Vb(e, t) {
	let n = t.mapping.mapResult(e.position);
	return {
		position: new Bb(n.pos),
		mapResult: n
	};
}
function Hb(e) {
	return new Bb(e);
}
function Ub(e, t, n) {
	let { selection: r } = t, i = null;
	if (qv(r) && (i = r.$cursor), i) {
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
var Wb = (e, t = {}) => ({ tr: n, state: r, dispatch: i }) => {
	let { selection: a } = n, { empty: o, ranges: s } = a, c = Wv(e, r.schema);
	if (i) {
		if (o) {
			let e = By(r, c);
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
	return Ub(r, n, c);
}, Gb = (e, t) => ({ tr: n }) => (n.setMeta(e, t), !0), Kb = (e, t = {}) => ({ state: n, dispatch: r, chain: i }) => {
	let a = Av(e, n.schema), o;
	return n.selection.$anchor.sameParent(n.selection.$head) && (o = n.selection.$anchor.parent.attrs), a.isTextblock ? i().command(({ commands: e }) => Yf(a, {
		...o,
		...t
	})(n) ? !0 : e.clearNodes()).command(({ state: e }) => Yf(a, {
		...o,
		...t
	})(e, r)).run() : (console.warn("[tiptap warn]: Currently \"setNode()\" only supports text block nodes."), !1);
}, qb = (e) => ({ tr: t, dispatch: n }) => {
	if (n) {
		let { doc: n } = t, r = Jv(e, 0, n.content.size), i = V.create(n, r);
		t.setSelection(i);
	}
	return !0;
}, Jb = (e, t) => ({ tr: n, state: r, dispatch: i }) => {
	let { selection: a } = r, o, s;
	return typeof t == "number" ? (o = t, s = t) : t && "from" in t && "to" in t ? (o = t.from, s = t.to) : (o = a.from, s = a.to), i && n.doc.nodesBetween(o, s, (t, r) => {
		t.isText || n.setNodeMarkup(r, void 0, {
			...t.attrs,
			dir: e
		});
	}), !0;
}, Yb = (e) => ({ tr: t, dispatch: n }) => {
	if (n) {
		let { doc: n } = t, { from: r, to: i } = typeof e == "number" ? {
			from: e,
			to: e
		} : e, a = B.atStart(n).from, o = B.atEnd(n).to, s = Jv(r, a, o), c = Jv(i, a, o), l = B.create(n, s, c);
		t.setSelection(l);
	}
	return !0;
}, Xb = (e) => ({ state: t, dispatch: n }) => cp(Av(e, t.schema))(t, n);
function Zb(e, t) {
	let n = e.storedMarks || e.selection.$to.parentOffset && e.selection.$from.marks();
	if (n) {
		let r = n.filter((e) => t?.includes(e.type.name));
		e.tr.ensureMarks(r);
	}
}
var Qb = ({ keepMarks: e = !0 } = {}) => ({ tr: t, state: n, dispatch: r, editor: i }) => {
	let { selection: a, doc: o } = t, { $from: s, $to: c } = a, l = i.extensionManager.attributes, u = Ob(l, s.node().type.name, s.node().attrs);
	if (a instanceof V && a.node.isBlock) return !s.parentOffset || !bd(o, s.pos) ? !1 : (r && (e && Zb(n, i.extensionManager.splittableMarks), t.split(s.pos).scrollIntoView()), !0);
	if (!s.parent.isBlock) return !1;
	let d = c.parentOffset === c.parent.content.size, f = s.depth === 0 ? void 0 : ly(s.node(-1).contentMatchAt(s.indexAfter(-1))), p = d && f ? [{
		type: f,
		attrs: u
	}] : void 0, m = a instanceof B && !a.empty ? mf.create({
		doc: t.doc,
		selection: a
	}).tr.deleteSelection() : null, h = m ? m.doc : t.doc, g = m ? m.mapping.map(s.pos) : s.pos, _ = bd(h, g, 1, p);
	if (!p && !_ && bd(h, g, 1, f ? [{ type: f }] : void 0) && (_ = !0, p = f ? [{
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
		e && Zb(n, i.extensionManager.splittableMarks), t.scrollIntoView();
	}
	return _;
}, $b = (e, t = {}) => ({ tr: n, state: r, dispatch: i, editor: a }) => {
	let o = Av(e, r.schema), { $from: s, $to: c } = r.selection, l = r.selection.node;
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
				...Ob(d, s.node().type.name, s.node().attrs),
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
		...Ob(d, u.type.name, u.attrs),
		...t
	}, m = {
		...Ob(d, s.node().type.name, s.node().attrs),
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
	if (!bd(n.doc, s.pos, 2)) return !1;
	if (i) {
		let { selection: e, storedMarks: t } = r, { splittableMarks: o } = a.extensionManager, c = t || e.$to.parentOffset && e.$from.marks();
		if (n.split(s.pos, 2, v).scrollIntoView(), h && n.setNodeMarkup(g, void 0, p), !c || !i) return !0;
		let l = c.filter((e) => o.includes(e.type.name));
		n.ensureMarks(l);
	}
	return !0;
};
function ex(e, t, n) {
	if (!e.validContent(t)) return null;
	try {
		return e.create(n, t);
	} catch {
		return null;
	}
}
function tx(e, t) {
	if (e.pendingContent.length === 0) return !0;
	let n = ex(t, I.from(e.pendingContent));
	return n ? (e.items.push(n), e.pendingContent = [], !0) : !1;
}
function nx(e, t, n) {
	return n.validContent(I.from([...t.pendingContent, e])) ? (t.pendingContent.push(e), !0) : !tx(t, n) || !n.validContent(I.from(e)) ? !1 : (t.pendingContent.push(e), !0);
}
function rx(e, t, n, r) {
	let i = r(e, n);
	if (!i) return !1;
	let a = ex(n.listType, I.from(i), e.attrs);
	return a ? n.itemType.validContent(I.from([...t.pendingContent, a])) ? (t.pendingContent.push(a), !0) : tx(t, n.itemType) ? (t.items.push(...i), !0) : !1 : !1;
}
function ix(e, t, n) {
	let r = {
		items: [],
		pendingContent: []
	};
	for (let i = 0; i < e.childCount; i += 1) {
		let a = e.child(i);
		if (!(t.isListNode(a) ? rx(a, r, t, n) : nx(a, r, t.itemType))) return null;
	}
	return tx(r, t.itemType) ? r.items : null;
}
function ax(e, t) {
	let n = [];
	for (let r = 0; r < e.childCount; r += 1) {
		let i = ix(e.child(r), t, ax);
		if (!i) return null;
		n.push(...i);
	}
	return n;
}
function ox(e, t) {
	let n = null;
	return e.descendants((e, r) => e !== t || (n = r, !1)), n;
}
function sx(e) {
	return !e || e === "1" ? null : e;
}
function cx(e, t) {
	return sx(e) === sx(t);
}
var lx = (e, t) => {
	let n = Wy((e) => e.type === t)(e.selection);
	if (!n) return !0;
	let r = e.doc.resolve(Math.max(0, n.pos - 1)).before(n.depth);
	if (r === void 0) return !0;
	let i = e.doc.nodeAt(r);
	return !(n.node.type === i?.type && Sd(e.doc, n.pos)) || !cx(n.node.attrs.type, i?.attrs.type) || e.join(n.pos), !0;
}, ux = (e, t) => {
	let n = Wy((e) => e.type === t)(e.selection);
	if (!n) return !0;
	let r = e.doc.resolve(n.start).after(n.depth);
	if (r === void 0) return !0;
	let i = e.doc.nodeAt(r);
	return !(n.node.type === i?.type && Sd(e.doc, r)) || !cx(n.node.attrs.type, i?.attrs.type) || e.join(r), !0;
};
function dx(e) {
	let t = e.doc, n = t.firstChild;
	if (!n) return null;
	let r = t.resolve(1), i = t.resolve(n.nodeSize - 1);
	return B.between(r, i);
}
var fx = (e, t, n, r = {}) => ({ editor: i, tr: a, state: o, dispatch: s, chain: c, commands: l, can: u }) => {
	let { extensions: d, splittableMarks: f } = i.extensionManager, p = Av(e, o.schema), m = Av(t, o.schema), { selection: h, storedMarks: g } = o, { $from: _, $to: v } = h, y = _.blockRange(v), b = g || h.$to.parentOffset && h.$from.marks();
	if (!y) return !1;
	let x = Wy((e) => Fb(e.type.name, d))(h), S = h.from === 0 && h.to === o.doc.content.size, C = o.doc.content.content, w = C.length === 1 ? C[0] : null, ee = S && w && Fb(w.type.name, d) ? {
		node: w,
		pos: 0,
		depth: 0
	} : null, T = x ?? ee, te = !!x && y.depth >= 1 && y.depth - x.depth <= 1, E = !!ee;
	if ((te || E) && T) {
		if (T.node.type === p) return S && E ? c().command(({ tr: e, dispatch: t }) => {
			let n = dx(e);
			return n ? (e.setSelection(n), t && t(e), !0) : !1;
		}).liftListItem(m).run() : l.liftListItem(m);
		if (Fb(T.node.type.name, d) && p.validContent(T.node.content)) return c().command(() => (a.setNodeMarkup(T.pos, p), !0)).command(() => lx(a, p)).command(() => ux(a, p)).run();
		if (Fb(T.node.type.name, d)) {
			let e = T.node.firstChild?.type;
			if (e && e !== m) {
				let e = ax(T.node, {
					listType: p,
					itemType: m,
					isListNode: (e) => Fb(e.type.name, d)
				}), t = e ? I.from(e) : null;
				return !t || !p.validContent(t) ? !1 : c().command(() => {
					let { $anchor: e, $head: n } = a.selection, i = e.parent, o = n.parent, s = e.parentOffset, c = n.parentOffset, l;
					try {
						l = p.create(r, t);
					} catch {
						return !1;
					}
					if (a.replaceWith(T.pos, T.pos + T.node.nodeSize, l), i.inlineContent && o.inlineContent) {
						let e = ox(l, i), t = ox(l, o);
						if (e !== null && t !== null) {
							let n = T.pos + e + 2 + s, r = T.pos + t + 2 + c;
							a.setSelection(B.create(a.doc, n, r));
						}
					}
					return !0;
				}).command(() => lx(a, p)).command(() => ux(a, p)).run();
			}
		}
	}
	return !n || !b || !s ? c().command(() => u().wrapInList(p, r) ? !0 : l.clearNodes()).wrapInList(p, r).command(() => lx(a, p)).command(() => ux(a, p)).run() : c().command(() => {
		let e = u().wrapInList(p, r), t = b.filter((e) => f.includes(e.type.name));
		return a.ensureMarks(t), e ? !0 : l.clearNodes();
	}).wrapInList(p, r).command(() => lx(a, p)).command(() => ux(a, p)).run();
}, px = (e, t = {}, n = {}) => ({ state: r, commands: i }) => {
	let { extendEmptyMarkRange: a = !1 } = n, o = Wv(e, r.schema);
	return Ab(r, o, t) ? i.unsetMark(o, { extendEmptyMarkRange: a }) : i.setMark(o, t);
}, mx = (e, t, n = {}) => ({ state: r, commands: i }) => {
	let a = Av(e, r.schema), o = Av(t, r.schema), s = Cy(r, a, n), c;
	return r.selection.$anchor.sameParent(r.selection.$head) && (c = r.selection.$anchor.parent.attrs), s ? i.setNode(o, c) : i.setNode(a, {
		...c,
		...n
	});
}, hx = (e, t = {}) => ({ state: n, commands: r }) => {
	let i = Av(e, n.schema);
	return Cy(n, i, t) ? r.lift(i) : r.wrapIn(i, t);
}, gx = () => ({ state: e, dispatch: t }) => {
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
}, _x = (e = {}) => ({ tr: t, dispatch: n, editor: r }) => {
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
}, vx = (e, t = {}) => ({ tr: n, state: r, dispatch: i }) => {
	let { extendEmptyMarkRange: a = !1 } = t, { selection: o } = n, s = Wv(e, r.schema), { $from: c, empty: l, ranges: u } = o;
	if (!i) return !0;
	if (l && a) {
		let { from: e, to: t } = o, r = Uv(c, s, c.marks().find((e) => e.type === s)?.attrs);
		r && (e = r.from, t = r.to), n.removeMark(e, t, s);
	} else u.forEach((e) => {
		n.removeMark(e.$from.pos, e.$to.pos, s);
	});
	return n.removeStoredMark(s), !0;
}, yx = (e) => ({ tr: t, state: n, dispatch: r }) => {
	let { selection: i } = n, a, o;
	return typeof e == "number" ? (a = e, o = e) : e && "from" in e && "to" in e ? (a = e.from, o = e.to) : (a = i.from, o = i.to), r && t.doc.nodesBetween(a, o, (e, n) => {
		if (e.isText) return;
		let r = { ...e.attrs };
		delete r.dir, t.setNodeMarkup(n, void 0, r);
	}), !0;
}, bx = (e, t = {}) => ({ tr: n, state: r, dispatch: i }) => {
	let a = null, o = null, s = Oy(typeof e == "string" ? e : e.name, r.schema);
	if (!s) return !1;
	s === "node" && (a = Av(e, r.schema)), s === "mark" && (o = Wv(e, r.schema));
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
}, xx = new U("__tiptap_decorations__"), Sx = (e) => ({ tr: t, dispatch: n }) => (n && t.setMeta(xx, {
	type: "force",
	name: e
}), !0), Cx = (e, t = {}) => ({ state: n, dispatch: r }) => Jf(Av(e, n.schema), t)(n, r), wx = (e, t = {}) => ({ state: n, dispatch: r }) => tp(Av(e, n.schema), t)(n, r), Tx = /* @__PURE__ */ cl({
	blur: () => Cv,
	clearContent: () => wv,
	clearNodes: () => Tv,
	command: () => Ev,
	createParagraphNear: () => Dv,
	cut: () => Ov,
	deleteCurrentNode: () => kv,
	deleteNode: () => jv,
	deleteRange: () => Mv,
	deleteSelection: () => Iv,
	enter: () => Lv,
	exitCode: () => Rv,
	extendMarkRange: () => Gv,
	first: () => Kv,
	focus: () => $v,
	forEach: () => ey,
	insertContent: () => ty,
	insertContentAt: () => cy,
	insertDefaultBlock: () => uy,
	joinBackward: () => py,
	joinDown: () => fy,
	joinForward: () => my,
	joinItemBackward: () => gy,
	joinItemForward: () => _y,
	joinTextblockBackward: () => vy,
	joinTextblockForward: () => yy,
	joinUp: () => dy,
	keyboardShortcut: () => Sy,
	lift: () => wy,
	liftEmptyBlock: () => Ty,
	liftListItem: () => Ey,
	newlineInCode: () => Dy,
	resetAttributes: () => Ay,
	scrollIntoView: () => jy,
	selectAll: () => My,
	selectNodeBackward: () => Ny,
	selectNodeForward: () => Py,
	selectParentNode: () => Fy,
	selectTextblockEnd: () => Iy,
	selectTextblockStart: () => Ly,
	setContent: () => zy,
	setMark: () => Wb,
	setMeta: () => Gb,
	setNode: () => Kb,
	setNodeSelection: () => qb,
	setTextDirection: () => Jb,
	setTextSelection: () => Yb,
	sinkListItem: () => Xb,
	splitBlock: () => Qb,
	splitListItem: () => $b,
	toggleList: () => fx,
	toggleMark: () => px,
	toggleNode: () => mx,
	toggleWrap: () => hx,
	undoInputRule: () => gx,
	unsetAllMarks: () => _x,
	unsetMark: () => vx,
	unsetTextDirection: () => yx,
	updateAttributes: () => bx,
	updateDecorations: () => Sx,
	wrapIn: () => Cx,
	wrapInList: () => wx
}), Ex = /* @__PURE__ */ new WeakMap();
function Dx(e, t) {
	Ex.set(e, (Ex.get(e) ?? 0) + 1);
	try {
		return t();
	} finally {
		let t = (Ex.get(e) ?? 1) - 1;
		t > 0 ? Ex.set(e, t) : Ex.delete(e);
	}
}
function Ox(e) {
	return Ex.has(e);
}
var kx = class {
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
}, Ax = typeof process < "u" && !1;
function jx(e) {
	return e.kind === "widget";
}
function Mx(e, t) {
	let n = [], r = /* @__PURE__ */ new Set();
	for (let i of e) i.kind === "widget" && jx(i) && r.add(i.key), n.push(i.toPMDecoration(t));
	return {
		decorations: n,
		widgetKeys: r
	};
}
function Nx(e, t, n) {
	let { decorations: r, widgetKeys: i } = Mx(t, n);
	return {
		set: G.create(e, r),
		widgetKeys: i
	};
}
function Px({ position: e, from: t, to: n, docSize: r }) {
	return e < t ? !1 : e < n || e === n && n === r;
}
function Fx({ decorations: e, from: t, to: n, docSize: r, extensionName: i, warnedExtensions: a }) {
	return e.filter((e) => Px({
		position: e.anchor,
		from: t,
		to: n,
		docSize: r
	}) ? !0 : (e.anchor === n || a.has(i) || (a.add(i), console.warn(`[tiptap warn]: Extension "${i}" returned a decoration outside the requested range [${t}, ${n}). It was ignored.`)), !1));
}
function Ix(e) {
	let t = e.spec?.key;
	return typeof t == "string" ? t : void 0;
}
function Lx(e) {
	let t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
	for (let r of e.find()) {
		let e = Ix(r);
		if (!e) continue;
		let i = r.spec.extensionName ?? "unknown", a = t.get(e) ?? /* @__PURE__ */ new Set();
		a.add(i), t.set(e, a), n.set(e, (n.get(e) ?? 0) + 1);
	}
	return Array.from(t, ([e, t]) => ({
		key: e,
		extensions: t
	})).filter(({ key: e }) => (n.get(e) ?? 0) > 1);
}
function Rx(e) {
	return e.jsonID === "attr";
}
function zx(e) {
	let t = !1;
	if (e.getMap().forEach(() => {
		t = !0;
	}), t || Rx(e)) return !0;
	let n = e;
	return typeof n.from == "number" && typeof n.to == "number";
}
function Bx(e, t) {
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
function Vx(e, t) {
	if (e.steps.some((e) => !zx(e))) return { type: "full" };
	let n = Cb(e).map(({ newRange: e }) => e);
	e.steps.forEach((t, r) => {
		if (!Rx(t)) return;
		let i = e.mapping.slice(r);
		n.push({
			from: i.map(t.pos, -1),
			to: i.map(t.pos + 1)
		});
	});
	let r = [];
	for (let e of n) {
		let n = Bx(t, e);
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
function Hx(e, t, n, r) {
	return e.map(t, n, { onRemove: (e) => {
		let t = e?.key;
		typeof t == "string" && r.delete(t);
	} });
}
function Ux(e, t, n) {
	let r = t.decorationSetsByExtension[e] ?? G.empty, i = new Set(t.widgetKeysByExtension[e] ?? []);
	return {
		set: Hx(r, n.mapping, n.doc, i),
		widgetKeys: i
	};
}
function Wx(e, t) {
	let n = Object.values(t).flatMap((e) => e.find());
	return G.create(e, n);
}
function Gx(e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of Object.values(e)) for (let e of n) t.add(e);
	return t;
}
function Kx(e, t) {
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
function qx(e, t, n) {
	return n ? !0 : e.update === "manual" ? !1 : e.shouldUpdate ? e.shouldUpdate(t) : t.tr.docChanged;
}
var Jx = /* @__PURE__ */ new Set(), Yx = class {
	constructor(e) {
		this.warnedWidgetKeys = /* @__PURE__ */ new Set(), this.warnedOutOfRangeExtensions = /* @__PURE__ */ new Set(), this.handleBeforeTransaction = ({ nextState: e }) => {
			let t = xx.getState(e);
			t && this.warnDuplicateWidgetKeys(t);
		}, this.editor = e.editor, this.entries = this.resolveEntries(e.entries), this.entries.forEach(({ name: e, spec: t }) => Kx(e, t)), this.plugin = this.entries.length > 0 ? this.createPlugin() : null, this.editor.on("beforeTransaction", this.handleBeforeTransaction);
	}
	destroy() {
		this.editor.off("beforeTransaction", this.handleBeforeTransaction);
	}
	liveWidgetKeys() {
		return xx.getState(this.editor.state)?.widgetKeys ?? Jx;
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
			key: xx,
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
						widgetKeys: Gx(i)
					};
					return this.warnDuplicateWidgetKeys(a), a;
				},
				apply: (n, r, i, a) => {
					let o = n.getMeta(xx), s = o?.type === "force" && !o.name, c = o?.type === "force" ? o.name : void 0, l = {}, u = {}, d = /* @__PURE__ */ new Set();
					return Dx(e, () => {
						for (let { name: o, spec: f } of t) {
							let t = s || c === o;
							if (!qx(f, {
								editor: e,
								tr: n,
								oldState: i,
								newState: a
							}, t)) {
								let e = Ux(o, r, n);
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
						widgetKeys: Gx(u)
					};
				}
			},
			props: { decorations(e) {
				return xx.getState(e)?.mergedDecorationSet ?? G.empty;
			} }
		});
	}
	applyChangedRangesRecompute(e, t, n, r, i) {
		let a = Vx(r, i.doc);
		return a.type === "full" ? this.buildFullSet(e, t, i) : this.rebuildRanges(e, t, n, r, i, a.ranges);
	}
	rebuildRanges(e, t, n, r, i, a) {
		let o = n.decorationSetsByExtension[e] ?? G.empty, s = new Set(n.widgetKeysByExtension[e] ?? []), c = Hx(o, r.mapping, r.doc, s), l = i.doc.content.size;
		for (let { from: n, to: r } of a) {
			let a = c.find(n, r).filter((e) => Px({
				position: e.from,
				from: n,
				to: r,
				docSize: l
			}));
			for (let e of a) {
				let t = Ix(e);
				t && s.delete(t);
			}
			c = c.remove(a);
			let { decorations: o, widgetKeys: u } = Mx(Fx({
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
		return Nx(n.doc, r, e);
	}
	runCreate(e, t, n) {
		try {
			return n();
		} catch (n) {
			return console.error(`[tiptap error]: Extension "${e}" threw in \`addDecorations().${t}()\`. Its decorations were dropped for this update.`, n), [];
		}
	}
	warnDuplicateWidgetKeys(e) {
		if (!Ax) return;
		if (e.widgetKeys.size === 0) {
			this.warnedWidgetKeys.clear();
			return;
		}
		let t = Lx(e.mergedDecorationSet), n = new Set(t.map(({ key: e }) => e));
		for (let { key: e, extensions: n } of t) {
			if (this.warnedWidgetKeys.has(e)) continue;
			let t = Array.from(n).map((e) => `"${e}"`).join(", ");
			console.warn(`[tiptap warn]: Duplicate widget decoration key "${e}" in extension${n.size === 1 ? "" : "s"} ${t}. Widget decoration keys must be globally unique, otherwise ProseMirror misplaces the widget DOM. Use a stable, unique key (e.g. \`comment-\${id}\`).`);
		}
		this.warnedWidgetKeys = n;
	}
	buildMergedSet(e, t) {
		let n = Object.keys(t);
		return n.length === 1 ? t[n[0]] : Wx(e, t);
	}
	mergeAfterApply({ entries: e, previous: t, tr: n, decorationSetsByExtension: r, recomputedNames: i }) {
		return e.length === 1 ? r[e[0].name] : i.size === 0 ? t.mergedDecorationSet.map(n.mapping, n.doc) : Wx(n.doc, r);
	}
};
function Xx(e, t) {
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
function Zx(e, t, n) {
	let r = document.querySelector(`style[data-tiptap-style${n ? `-${n}` : ""}]`);
	if (r !== null) return r;
	let i = document.createElement("style");
	return t && i.setAttribute("nonce", t), i.setAttribute(`data-tiptap-style${n ? `-${n}` : ""}`, ""), i.innerHTML = e, document.getElementsByTagName("head")[0].appendChild(i), i;
}
function Qx(e, t) {
	let n = e.getAttribute("style");
	if (!n) return null;
	let r = n.split(";").map((e) => e.trim()).filter(Boolean), i = t.toLowerCase();
	for (let e = r.length - 1; e >= 0; --e) {
		let t = r[e], n = t.indexOf(":");
		if (n !== -1 && t.slice(0, n).trim().toLowerCase() === i) return t.slice(n + 1).trim();
	}
	return null;
}
function $x(e) {
	return typeof e == "number";
}
function eS(e) {
	return Object.prototype.toString.call(e).slice(8, -1);
}
function tS(e) {
	return eS(e) === "Object" && e.constructor === Object && Object.getPrototypeOf(e) === Object.prototype;
}
function nS(e) {
	return typeof e == "string" && e.trim().length > 0 && !/[;{}]/.test(e);
}
function rS(e, t) {
	return e.replace(/^[ \t]*/, (e) => {
		let n = 0;
		for (let t of e) n += t === "	" ? 4 - n % 4 : 1;
		return " ".repeat(Math.max(0, n - t));
	});
}
function iS(e, t) {
	let n = `text\n${e}\n`, r = t(n)[0];
	return (r?.type === "paragraph" || r?.type === "text") && r.raw === n;
}
function aS(e, t, n) {
	let r = t.split("\n"), i = n.isParagraphContinuation ?? ((e) => iS(e, n.blockTokens)), a = 0;
	for (let e of r) {
		if (!e.trim() || !i(e)) break;
		a += 1;
	}
	return {
		mainContent: [e, ...r.slice(0, a).map((e) => e.trimStart())].join("\n"),
		nestedContent: r.slice(a).join("\n")
	};
}
function oS(e, t, n) {
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
			let e = aS(p, g.map((e) => rS(e, f + s)).join("\n"), n);
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
var sS = 4;
function cS(e) {
	let t = 0;
	for (let n of e) t = n === "	" ? t + sS - t % sS : t + 1;
	return t;
}
function lS(e, t, n, r, i) {
	if (!e || !Array.isArray(e.content)) return "";
	let a = typeof n == "function" ? n(r) : n, [o, ...s] = e.content, c = t.renderChildren([o]), l = `${a}${i?.indentMainContent ? c.split("\n").map((e, n) => n === 0 ? e : t.indent(e)).join("\n") : c}`;
	return s && s.length > 0 && s.forEach((e, n) => {
		let r = t.renderChild?.call(t, e, n + 1) ?? t.renderChildren([e]);
		if (r != null) {
			let n = (e) => {
				if (!i?.alignNestedToPrefix) return t.indent(e);
				let n = t.indent(""), r = cS(a);
				return (cS(n) >= r ? n : " ".repeat(r)) + e;
			}, o = r.split("\n").map((e) => n(e || "")).join("\n");
			l += e.type === "paragraph" ? `\n\n${o}` : `\n${o}`;
		}
	}), l;
}
function uS(e, t) {
	let n = { ...e };
	return tS(e) && tS(t) && Object.keys(t).forEach((r) => {
		tS(t[r]) && tS(e[r]) ? n[r] = uS(e[r], t[r]) : n[r] = t[r];
	}), n;
}
function dS(e, t, n = {}) {
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
var fS = class {
	constructor(e) {
		this.find = e.find, this.handler = e.handler, this.undoable = e.undoable ?? !0;
	}
}, pS = (e, t) => {
	if (zv(t)) return t.exec(e);
	let n = t(e);
	if (!n) return null;
	let r = [n.text];
	return r.index = n.index, r.input = e, r.data = n.data, n.replaceWith && (n.text.includes(n.replaceWith) || console.warn("[tiptap warn]: \"inputRuleMatch.replaceWith\" must be part of \"inputRuleMatch.text\"."), r.push(n.replaceWith)), r;
};
function mS(e) {
	let { editor: t, from: n, to: r, text: i, insertText: a } = e;
	if (!a) return {
		inputTransaction: null,
		tr: t.view.state.tr
	};
	let o = t.view.state.tr.insertText(i, n, r);
	return {
		inputTransaction: o,
		tr: mf.create({
			doc: o.doc,
			selection: o.selection,
			storedMarks: o.storedMarks
		}).tr
	};
}
function hS(e) {
	let { editor: t, from: n, to: r, text: i, rule: a, match: o, plugin: s, insertText: c } = e, { view: l } = t, { inputTransaction: u, tr: d } = mS({
		editor: t,
		from: n,
		to: r,
		text: i,
		insertText: c
	}), f = u ? n + i.length : r, p = xv({
		state: l.state,
		transaction: d
	}), m = {
		from: n - (o[0].length - i.length),
		to: f
	}, { commands: h, chain: g, can: _ } = new Sv({
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
	}) === null || !d.steps.length ? !1 : (u && (l.dispatch(u), !l.state.doc.eq(u.doc)) || (pv(d), d.setMeta("inputRule", !0), a.undoable && d.setMeta(s, {
		transform: d,
		from: n,
		to: f,
		text: i
	}), l.dispatch(d)), !0);
}
function gS(e, t, n) {
	let r = t[0].length - n.length;
	if (r <= 0) return !0;
	let i = e.parentOffset - r;
	return i >= 0 && e.parent.textBetween(i, e.parentOffset) === t[0].slice(0, r);
}
function _S(e) {
	let { editor: t, from: n, to: r, text: i, rules: a, plugin: o, insertText: s } = e, { view: c } = t;
	if (c.composing) return !1;
	let l = c.state.doc.resolve(n);
	if (l.parent.type.spec.code || (l.nodeBefore || l.nodeAfter)?.marks.find((e) => e.type.spec.code)) return !1;
	let u = kb(l) + i;
	for (let e of a) {
		let a = pS(u, e.find);
		if (a && gS(l, a, i) && hS({
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
function vS(e) {
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
					e = typeof e == "string" ? e : Ky(I.from(e), a.schema);
					let { from: i } = s, o = i + e.length;
					_S({
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
				return _S({
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
				i && _S({
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
				return a ? _S({
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
var yS = class {
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
			addOptions: () => uS(this.options, e)
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
}, bS = class e extends yS {
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
}, xS = class {
	constructor(e) {
		this.find = e.find, this.handler = e.handler;
	}
}, SS = (e, t, n) => {
	if (zv(t)) return [...e.matchAll(t)];
	let r = t(e, n);
	return r ? r.map((t) => {
		let n = [t.text];
		return n.index = t.index, n.input = e, n.data = t.data, t.replaceWith && (t.text.includes(t.replaceWith) || console.warn("[tiptap warn]: \"pasteRuleMatch.replaceWith\" must be part of \"pasteRuleMatch.text\"."), n.push(t.replaceWith)), n;
	}) : [];
};
function CS(e) {
	let { editor: t, state: n, from: r, to: i, rule: a, pasteEvent: o, dropEvent: s } = e, { commands: c, chain: l, can: u } = new Sv({
		editor: t,
		state: n
	}), d = [];
	return n.doc.nodesBetween(r, i, (e, t) => {
		var f;
		if ((f = e.type) != null && (f = f.spec) != null && f.code || !(e.isText || e.isTextblock || e.isInline)) return;
		let p = e.content?.size ?? e.nodeSize ?? 0, m = Math.max(r, t), h = Math.min(i, t + p);
		m >= h || SS(e.isText ? e.text || "" : e.textBetween(m - t, h - t, void 0, "￼"), a.find, o).forEach((e) => {
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
var wS = null, TS = (e) => {
	var t;
	let n = new ClipboardEvent("paste", { clipboardData: new DataTransfer() });
	return (t = n.clipboardData) == null || t.setData("text/html", e), n;
};
function ES(e) {
	let { editor: t, rules: n } = e, r = null, i = !1, a = !1, o = typeof ClipboardEvent < "u" ? new ClipboardEvent("paste") : null, s;
	try {
		s = typeof DragEvent < "u" ? new DragEvent("drop") : null;
	} catch {
		s = null;
	}
	let c = ({ state: e, from: n, to: r, rule: i, pasteEvt: a }) => {
		let c = e.tr, l = xv({
			state: e,
			transaction: c
		});
		if (CS({
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
		wS === t && (wS = null);
	}), n.map((e) => new H({
		view(e) {
			let n = (n) => {
				r = e.dom.parentElement?.contains(n.target) ? e.dom.parentElement : null, r && (wS = t);
			}, i = () => {
				wS &&= null;
			};
			return window.addEventListener("dragstart", n), window.addEventListener("dragend", i), { destroy() {
				window.removeEventListener("dragstart", n), window.removeEventListener("dragend", i);
			} };
		},
		props: { handleDOMEvents: {
			drop: (e, t) => {
				if (a = r === e.dom.parentElement, s = t, !a) {
					let e = wS;
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
				t = typeof t == "string" ? t : Ky(I.from(t), r.schema);
				let { from: n } = d, i = n + t.length, a = TS(t);
				return c({
					rule: e,
					state: r,
					from: n,
					to: { b: i },
					pasteEvt: a
				});
			}
			let p = n.doc.content.findDiffStart(r.doc.content), m = n.doc.content.findDiffEnd(r.doc.content);
			if ($x(p) && m && p !== m.b) return c({
				rule: e,
				state: r,
				from: p,
				to: m,
				pasteEvt: o
			});
		}
	}));
}
var DS = class {
	constructor(e, t) {
		this.splittableMarks = [], this.nonClearableMarks = [], this.decorationManager = null, this.editor = t, this.baseExtensions = e, this.extensions = hb(e), this.hasSchemaSpec = t.options.schemaSpec !== void 0, this.schema = pb(this.extensions, t, t.options.schemaSpec), this.setupExtensions();
	}
	get commands() {
		return this.extensions.reduce((e, t) => {
			let n = K(t, "addCommands", {
				name: t.name,
				options: t.options,
				storage: this.editor.extensionStorage[t.name],
				editor: this.editor,
				type: Db(t.name, this.schema)
			});
			return n ? {
				...e,
				...n()
			} : e;
		}, {});
	}
	get plugins() {
		let { editor: e } = this, t = mb([...this.extensions].reverse()).flatMap((t) => {
			let n = {
				name: t.name,
				options: t.options,
				storage: this.editor.extensionStorage[t.name],
				editor: e,
				type: Db(t.name, this.schema)
			}, r = [], i = K(t, "addKeyboardShortcuts", n), a = {};
			if (t.type === "mark" && K(t, "exitable", n) && (a.ArrowRight = () => bS.handleExit({
				editor: e,
				mark: t
			})), i) {
				let t = Object.fromEntries(Object.entries(i()).map(([t, n]) => [t, () => n({ editor: e })]));
				a = {
					...a,
					...t
				};
			}
			let o = q_(a);
			r.push(o);
			let s = K(t, "addInputRules", n);
			if (Pb(t, e.options.enableInputRules) && s) {
				let t = s();
				if (t && t.length) {
					let n = vS({
						editor: e,
						rules: t
					}), i = Array.isArray(n) ? n : [n];
					r.push(...i);
				}
			}
			let c = K(t, "addPasteRules", n);
			if (Pb(t, e.options.enablePasteRules) && c) {
				let t = c();
				if (t && t.length) {
					let n = ES({
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
				type: Db(e.name, this.schema)
			});
			r && n.push({
				name: e.name,
				addDecorations: r
			});
		}), this.decorationManager = new Yx({
			editor: t,
			entries: n
		}), this.decorationManager.plugin;
	}
	get attributes() {
		let e = nb(this.extensions);
		return this.hasSchemaSpec ? qy(e, this.schema) : e;
	}
	get nodeViews() {
		let { editor: e } = this, { nodeExtensions: t } = tb(this.extensions);
		return Object.fromEntries(t.filter((e) => !!K(e, "addNodeView")).map((t) => {
			let n = this.attributes.filter((e) => e.type === t.name), r = K(t, "addNodeView", {
				name: t.name,
				options: t.options,
				storage: this.editor.extensionStorage[t.name],
				editor: e,
				type: Av(t.name, this.schema)
			});
			if (!r) return [];
			let i = r();
			return i ? [t.name, (r, a, o, s, c) => {
				let l = sb(r, n);
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
		return mb([...this.extensions].reverse()).reduceRight((e, n) => {
			let r = {
				name: n.name,
				options: n.options,
				storage: this.editor.extensionStorage[n.name],
				editor: t,
				type: Db(n.name, this.schema)
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
		return mb([...this.extensions]).reduce((e, n) => {
			let r = {
				name: n.name,
				options: n.options,
				storage: this.editor.extensionStorage[n.name],
				editor: t,
				type: Db(n.name, this.schema)
			}, i = K(n, "transformPastedHTML", r);
			return i ? (t, n) => {
				let a = e(t, n);
				return i.call(r, a);
			} : e;
		}, e || ((e) => e));
	}
	get markViews() {
		let { editor: e } = this, { markExtensions: t } = tb(this.extensions);
		return Object.fromEntries(t.filter((e) => !!K(e, "addMarkView")).map((t) => {
			let n = this.attributes.filter((e) => e.type === t.name), r = K(t, "addMarkView", {
				name: t.name,
				options: t.options,
				storage: this.editor.extensionStorage[t.name],
				editor: e,
				type: Wv(t.name, this.schema)
			});
			return r ? [t.name, (i, a, o) => {
				let s = sb(i, n);
				return r()({
					mark: i,
					view: a,
					inline: o,
					editor: e,
					extension: t,
					HTMLAttributes: s,
					updateAttributes: (t) => {
						dS(i, e, t);
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
				type: Db(e.name, this.schema)
			};
			e.type === "mark" && ((q(K(e, "keepOnSplit", t)) ?? !0) && this.splittableMarks.push(e.name), (q(K(e, "clearable", t)) ?? !0) || this.nonClearableMarks.push(e.name));
			let n = K(e, "onBeforeCreate", t), r = K(e, "onCreate", t), i = K(e, "onUpdate", t), a = K(e, "onSelectionUpdate", t), o = K(e, "onTransaction", t), s = K(e, "onFocus", t), c = K(e, "onBlur", t), l = K(e, "onDestroy", t);
			n && this.editor.on("beforeCreate", n), r && this.editor.on("create", r), i && this.editor.on("update", i), a && this.editor.on("selectionUpdate", a), o && this.editor.on("transaction", o), s && this.editor.on("focus", s), c && this.editor.on("blur", c), l && this.editor.on("destroy", l);
		});
	}
};
DS.resolve = hb, DS.sort = mb, DS.flatten = Gy;
var Y = class e extends yS {
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
}, OS = Y.create({
	name: "clipboardTextSerializer",
	addOptions() {
		return { blockSeparator: void 0 };
	},
	addProseMirrorPlugins() {
		return [new H({
			key: new U("clipboardTextSerializer"),
			props: { clipboardTextSerializer: () => {
				let { editor: e } = this, { state: t, schema: n } = e, { doc: r, selection: i } = t, a = vb(n), { blockSeparator: o } = this.options, s = {
					...o === void 0 ? {} : { blockSeparator: o },
					textSerializers: a
				};
				return [...i.ranges].sort((e, t) => e.$from.pos - t.$from.pos).map(({ $from: e, $to: t }) => gb(r, {
					from: e.pos,
					to: t.pos
				}, s)).join(o ?? "\n\n");
			} }
		})];
	}
}), kS = Y.create({
	name: "commands",
	addCommands() {
		return { ...Tx };
	}
}), AS = Y.create({
	name: "delete",
	onUpdate({ transaction: e, appendedTransactions: t }) {
		var n;
		let r = () => {
			var n, r;
			if (((n = this.editor.options.coreExtensionOptions) == null || (n = n.delete) == null || (r = n.filterTransaction) == null ? void 0 : r.call(n, e)) ?? e.getMeta("y-sync$")) return;
			let i = Vy(e.before, [e, ...t]);
			Cb(i).forEach((t) => {
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
				if (t instanceof Xu) {
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
}), jS = Y.create({
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
}), MS = Y.create({
	name: "editable",
	addProseMirrorPlugins() {
		return [new H({
			key: new U("editable"),
			props: { editable: () => this.editor.options.editable }
		})];
	}
}), NS = new U("focusEvents"), PS = Y.create({
	name: "focusEvents",
	addProseMirrorPlugins() {
		let { editor: e } = this;
		return [new H({
			key: NS,
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
function FS(e) {
	let { empty: t, from: n, to: r } = e.selection;
	return !t && n === z.atStart(e.doc).from && r === z.atEnd(e.doc).to;
}
var IS = Y.create({
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
		return Zv() || by() ? i : r;
	},
	addProseMirrorPlugins() {
		return [new H({
			key: new U("clearDocument"),
			appendTransaction: (e, t, n) => {
				if (e.some((e) => e.getMeta("composition"))) return;
				let r = e.some((e) => e.docChanged) && !t.doc.eq(n.doc), i = e.some((e) => e.getMeta("preventClearDocument"));
				if (!r || i || !FS(t) || !Ib(n.doc)) return;
				let a = n.tr, o = xv({
					state: n,
					transaction: a
				}), { commands: s } = new Sv({
					editor: this.editor,
					state: o
				});
				if (s.clearNodes(), a.steps.length || n.storedMarks) return a.setStoredMarks(null);
			}
		})];
	}
}), LS = Y.create({
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
}), RS = Y.create({
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
}), zS = Y.create({
	name: "textDirection",
	addOptions() {
		return { direction: void 0 };
	},
	addGlobalAttributes() {
		if (!this.options.direction) return [];
		let { nodeExtensions: e } = tb(this.extensions);
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
}), BS = !1;
function VS(e) {
	if (BS) return;
	BS = !0;
	let t;
	try {
		let n = td.fromJSON(e, {
			from: 0,
			to: 0
		});
		if (!zb(n)) return;
		t = n.slice.content;
	} catch {
		return;
	}
	t instanceof I || console.warn("[tiptap warn]: prosemirror-model is loaded more than once. Wrapping and splitting nodes will fail. Deduplicate it in your lock file, or alias it to a single copy in your bundler.");
}
var HS = class e {
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
}, US = ".ProseMirror {\n  position: relative;\n}\n\n.ProseMirror {\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  white-space: break-spaces;\n  -webkit-font-variant-ligatures: none;\n  font-variant-ligatures: none;\n  font-feature-settings: \"liga\" 0; /* the above doesn't seem to work in Edge */\n}\n\n.ProseMirror [contenteditable=\"false\"] {\n  white-space: normal;\n}\n\n.ProseMirror [contenteditable=\"false\"] [contenteditable=\"true\"] {\n  white-space: pre-wrap;\n}\n\n.ProseMirror pre {\n  white-space: pre-wrap;\n}\n\nimg.ProseMirror-separator {\n  display: inline !important;\n  border: none !important;\n  margin: 0 !important;\n  width: 0 !important;\n  height: 0 !important;\n}\n\n.ProseMirror-gapcursor {\n  display: none;\n  pointer-events: none;\n  position: absolute;\n  margin: 0;\n}\n\n.ProseMirror-gapcursor:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: -2px;\n  width: 20px;\n  border-top: 1px solid black;\n  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;\n}\n\n@keyframes ProseMirror-cursor-blink {\n  to {\n    visibility: hidden;\n  }\n}\n\n.ProseMirror-hideselection *::selection {\n  background: transparent;\n}\n\n.ProseMirror-hideselection *::-moz-selection {\n  background: transparent;\n}\n\n.ProseMirror-hideselection * {\n  caret-color: transparent;\n}\n\n.ProseMirror-focused .ProseMirror-gapcursor {\n  display: block;\n}", WS = class extends kx {
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
			getUpdatedPosition: Vb,
			createMappablePosition: Hb
		}, this.setOptions(e), this.createExtensionManager(), this.createCommandManager(), this.createSchema(), this.on("beforeCreate", this.options.onBeforeCreate), this.emit("beforeCreate", { editor: this }), this.on("mount", this.options.onMount), this.on("unmount", this.options.onUnmount), this.on("contentError", this.options.onContentError), this.on("create", this.options.onCreate), this.on("update", this.options.onUpdate), this.on("selectionUpdate", this.options.onSelectionUpdate), this.on("transaction", this.options.onTransaction), this.on("focus", this.options.onFocus), this.on("blur", this.options.onBlur), this.on("destroy", this.options.onDestroy), this.on("drop", ({ event: e, slice: t, moved: n }) => this.options.onDrop(e, t, n)), this.on("paste", ({ event: e, slice: t }) => this.options.onPaste(e, t)), this.on("delete", this.options.onDelete);
		let t = this.createDoc();
		if (!this.editorState) {
			let e = Yv(t, this.options.autofocus);
			this.editorState = mf.create({
				doc: t,
				schema: this.schema,
				selection: e || void 0
			});
		}
		VS(this.schema), this.options.element && this.mount(this.options.element);
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
		return this.commandManager ? this.commandManager.chain() : Sv.createFakeChain();
	}
	can() {
		return this.commandManager ? this.commandManager.can() : Sv.createFallbackCan();
	}
	injectCSS() {
		this.options.injectCSS && typeof document < "u" && (this.css = Zx(US, this.options.injectNonce));
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
		return Ax && !this.hasWarnedStaleDecorationRead && Ox(this) && (this.hasWarnedStaleDecorationRead = !0, console.warn("[tiptap warn]: `editor.state` was read while decoration `create()` was running. It returns the pre-transaction document. Use the `state` argument passed to `create()` instead. Helpers like `editor.isActive()` read `editor.state` too, so pass `state` to their standalone versions instead of calling them on the editor.")), this.editorView && (this.editorState = this.view.state), this.editorState;
	}
	registerPlugin(e, t) {
		let n = rb(t) ? t(e, [...this.state.plugins]) : [...this.state.plugins, e], r = this.state.reconfigure({ plugins: n });
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
			MS,
			OS.configure({ blockSeparator: (e = this.options.coreExtensionOptions) == null || (e = e.clipboardTextSerializer) == null ? void 0 : e.blockSeparator }),
			kS,
			PS,
			IS,
			RS.configure({ value: (t = this.options.coreExtensionOptions) == null || (t = t.tabindex) == null ? void 0 : t.value }),
			jS,
			LS,
			AS,
			zS.configure({ direction: this.options.textDirection })
		].filter((e) => typeof this.options.enableCoreExtensions != "object" || this.options.enableCoreExtensions[e.name] !== !1) : [], ...this.options.extensions].filter((e) => [
			"extension",
			"node",
			"mark"
		].includes(e?.type));
		this.extensionManager = new DS(n, this);
	}
	createCommandManager() {
		this.commandManager = new Sv({ editor: this });
	}
	createSchema() {
		this.schema = this.extensionManager.schema;
	}
	createDoc() {
		let e;
		try {
			e = Ry(this.options.content, this.schema, this.options.parseOptions, { errorOnInvalidContent: this.options.enableContentCheck });
		} catch (e) {
			if (!(e instanceof Error) || !["[tiptap error]: Invalid JSON content", "[tiptap error]: Invalid HTML content"].includes(e.message)) throw e;
			let t = Ry(this.options.content, this.schema, this.options.parseOptions, { errorOnInvalidContent: !1 });
			return this.editorState = mf.create({
				doc: t,
				schema: this.schema,
				selection: Yv(t, this.options.autofocus) || void 0
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
		return rb(e) ? (t) => ({
			role: "textbox",
			...e(t)
		}) : {
			role: "textbox",
			...e
		};
	}
	createView(e) {
		let { editorProps: t, enableExtensionDispatchTransaction: n } = this.options, r = t.dispatchTransaction || this.dispatchTransaction.bind(this), i = n ? this.extensionManager.dispatchTransaction(r) : r, a = t.transformPastedHTML, o = this.extensionManager.transformPastedHTML(a);
		this.editorView = new D_(e, {
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
		return bb(this.state, e);
	}
	isActive(e, t) {
		let n = typeof e == "string" ? e : null, r = typeof e == "string" ? t : e;
		return jb(this.state, n, r);
	}
	getJSON() {
		return this.state.doc.toJSON();
	}
	getHTML() {
		return Ky(this.state.doc.content, this.schema);
	}
	getText(e) {
		let { blockSeparator: t = "\n\n", textSerializers: n = {} } = e || {};
		return _b(this.state.doc, {
			blockSeparator: t,
			textSerializers: {
				...vb(this.schema),
				...n
			}
		});
	}
	get isEmpty() {
		return Ib(this.state.doc);
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
		return new HS(t, this, !1, n);
	}
	get $doc() {
		return this.$pos(0);
	}
};
function GS(e) {
	return new fS({
		find: e.find,
		handler: ({ state: t, range: n, match: r }) => {
			let i = q(e.getAttributes, void 0, r);
			if (i === !1 || i === null) return null;
			let { tr: a } = t, o = r[r.length - 1], s = r[0];
			if (o) {
				let r = s.search(/\S/), c = n.from + s.indexOf(o), l = c + o.length;
				if (wb(n.from, n.to, t.doc).filter((t) => t.mark.type.excluded.find((n) => n === e.type && n !== t.mark.type)).filter((e) => e.to > c).length) return null;
				l < n.to && a.delete(l, n.to), c > n.from && a.delete(n.from + r, c);
				let u = n.from + r + o.length;
				a.addMark(n.from + r, u, e.type.create(i || {})), a.removeStoredMark(e.type);
			}
		},
		undoable: e.undoable
	});
}
function KS(e) {
	return new fS({
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
function qS(e) {
	return new fS({
		find: e.find,
		handler: ({ state: t, range: n, match: r }) => {
			let i = t.doc.resolve(n.from), a = q(e.getAttributes, void 0, r) || {};
			if (!i.node(-1).canReplaceWith(i.index(-1), i.indexAfter(-1), e.type)) return null;
			t.tr.delete(n.from, n.to).setBlockType(n.from, n.from, e.type, a);
		},
		undoable: e.undoable
	});
}
function JS(e) {
	return new fS({
		find: e.find,
		handler: ({ state: t, range: n, match: r, chain: i }) => {
			let a = q(e.getAttributes, void 0, r) || {}, o = t.tr.delete(n.from, n.to), s = o.doc.resolve(n.from).blockRange(), c = s && ud(s, e.type, a);
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
			l && l.type === e.type && Sd(o.doc, n.from - 1) && (!e.joinPredicate || e.joinPredicate(r, l)) && o.join(n.from - 1);
		},
		undoable: e.undoable
	});
}
var YS = class e extends yS {
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
function XS(e) {
	return new xS({
		find: e.find,
		handler: ({ state: t, range: n, match: r, pasteEvent: i }) => {
			let a = q(e.getAttributes, void 0, r, i);
			if (a === !1 || a === null) return null;
			let { tr: o } = t, s = r[r.length - 1], c = r[0], l = n.to;
			if (s) {
				let i = c.search(/\S/), u = n.from + c.indexOf(s), d = u + s.length;
				if (wb(n.from, n.to, t.doc).filter((t) => t.mark.type.excluded.find((n) => n === e.type && n !== t.mark.type)).filter((e) => e.to > u).length) return null;
				d < n.to && o.delete(d, n.to), u > n.from && o.delete(n.from + i, u), l = n.from + i + s.length, o.addMark(n.from + i, l, e.type.create(a || {})), r.index !== void 0 && r.input !== void 0 && r.index + r[0].length >= r.input.length || o.removeStoredMark(e.type);
			}
		}
	});
}
// node_modules/@tiptap/extension-highlight/dist/index.js
var ZS = /(?:^|\s)(==(?!\s+==)((?:[^=]+))==(?!\s+==))$/, QS = /(?:^|\s)(==(?!\s+==)((?:[^=]+))==(?!\s+==))/g, $S = bS.create({
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
			parseHTML: (e) => e.getAttribute("data-color") || Qx(e, "background-color") || e.style.backgroundColor,
			renderHTML: (e) => nS(e.color) ? {
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
		return [GS({
			find: ZS,
			type: this.type
		})];
	},
	addPasteRules() {
		return [XS({
			find: QS,
			type: this.type
		})];
	}
}), eC = "listItem", tC = "textStyle", nC = /^\s*([-+*])\s$/, rC = YS.create({
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
		return { toggleBulletList: () => ({ commands: e, chain: t }) => this.options.keepAttributes ? t().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(eC, this.editor.getAttributes(tC)).run() : e.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks) };
	},
	addKeyboardShortcuts() {
		return { "Mod-Shift-8": () => this.editor.commands.toggleBulletList() };
	},
	addInputRules() {
		let e = JS({
			find: nC,
			type: this.type
		});
		return (this.options.keepMarks || this.options.keepAttributes) && (e = JS({
			find: nC,
			type: this.type,
			keepMarks: this.options.keepMarks,
			keepAttributes: this.options.keepAttributes,
			getAttributes: () => this.editor.getAttributes(tC),
			editor: this.editor
		})), [e];
	}
}), iC = (e, t, n) => {
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
}, aC = (e, t, n, r) => {
	let i = iC(e, n, r);
	if (!i) return !1;
	let { selection: a } = e, { nestedList: o, nestedListPos: s, insertPos: c, items: l } = i, u = e.tr;
	u.delete(s, s + o.nodeSize);
	let d = u.mapping.map(c);
	return u.insert(d, I.from(l)), u.setSelection(a.map(u.doc, u.mapping)), t && t(u), !0;
}, oC = (e, t, n) => aC(e.state, e.view.dispatch, t, n), sC = (e, t) => Y.create({
	name: `${e}BranchingDeleteKeymap`,
	priority: 101,
	addKeyboardShortcuts() {
		let n = () => oC(this.editor, e, t);
		return {
			Delete: n,
			"Mod-Delete": n
		};
	}
}), cC = [
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
], lC = "abcdefghijklmnopqrstuvwxyz", uC = String.raw`\d+|[ivxlcdmIVXLCDM]+|${"[a-zA-Z]{1,2}"}`;
function dC(e) {
	let t = e, n = "";
	for (let [e, r] of cC) for (; t >= e;) n += r, t -= e;
	return n;
}
function fC(e) {
	return dC(e).toUpperCase();
}
function pC(e) {
	let t = e.toLowerCase(), n = 0, r = 0;
	for (; n < t.length;) {
		let e = !1;
		for (let [i, a] of cC) if (t.startsWith(a, n)) {
			r += i, n += a.length, e = !0;
			break;
		}
		if (!e) return 0;
	}
	return r;
}
function mC(e) {
	if (!/^[ivxlcdmIVXLCDM]+$/.test(e)) return !1;
	let t = pC(e);
	return t <= 0 ? !1 : (e === e.toLowerCase() ? dC(t) : fC(t)) === e;
}
function hC(e) {
	let t = e.toLowerCase();
	if (t.length === 1) return t.charCodeAt(0) - 97 + 1;
	if (t.length === 2) {
		let e = t.charCodeAt(0) - 97, n = t.charCodeAt(1) - 97;
		return (e + 1) * 26 + n + 1;
	}
	return 0;
}
function gC(e) {
	if (e <= 26) return lC[e - 1];
	let t = Math.floor((e - 1) / 26) - 1, n = (e - 1) % 26;
	return t < 0 ? lC[n] : lC[t] + lC[n];
}
function _C(e) {
	if (e && !/^\d+$/.test(e)) {
		if (mC(e)) return e === e.toLowerCase() ? "i" : "I";
		if (/^[a-z]{1,2}$/.test(e)) return "a";
		if (/^[A-Z]{1,2}$/.test(e)) return "A";
	}
}
function vC(e) {
	if (/^\d+$/.test(e)) return parseInt(e, 10);
	let t = _C(e);
	if (t === "i" || t === "I") return pC(e);
	if (t === "a" || t === "A") {
		let t = hC(e);
		return t > 0 ? t : 1;
	}
	let n = parseInt(e, 10);
	return Number.isNaN(n) ? 1 : n;
}
function yC(e, t) {
	if (e === "numeric") return String(t);
	switch (e) {
		case "a": return gC(t);
		case "A": return gC(t).toUpperCase();
		case "i": return dC(t);
		case "I": return fC(t);
		default: return String(t);
	}
}
function bC(e) {
	if (e.length === 0) return !1;
	let t = _C(e[0]) ?? "numeric", n = vC(e[0]);
	if (n < 1) return !1;
	for (let r = 0; r < e.length; r++) {
		let i = yC(t, n + r);
		if (e[r] !== i) return !1;
	}
	return !0;
}
function xC(e) {
	return {
		type: _C(e),
		start: vC(e)
	};
}
function SC(e) {
	let { type: t, start: n } = xC(e), r = {};
	return t && (r.type = t), n !== 1 && (r.start = n), r;
}
function CC(e, t, n = ". ") {
	let r = t + 1;
	if (!e || e === "1") return `${r}${n}`;
	switch (e) {
		case "a": return `${gC(r)}${n}`;
		case "A": return `${gC(r).toUpperCase()}${n}`;
		case "i": return `${dC(r)}${n}`;
		case "I": return `${fC(r)}${n}`;
		default: return `${r}${n}`;
	}
}
function wC(e) {
	return !e[0] || e[0].type === "paragraph" ? e : [{
		type: "paragraph",
		content: []
	}, ...e];
}
function TC(e) {
	let t = e.content?.[0];
	return t?.type === "paragraph" && !t.content?.length;
}
var EC = "&nbsp;", DC = 1, OC = (e) => (e?.level ?? DC) > DC;
function kC(e) {
	let t = e.tokens?.[0];
	return !!(e.text && e.tokens?.length === 1 && t?.type === "list" && t.ordered && t.raw === e.text);
}
function AC(e, t) {
	return t.tokenizeInline ? t.parseInline(t.tokenizeInline(e)) : t.parseInline([{
		type: "text",
		raw: e,
		text: e
	}]);
}
var jC = YS.create({
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
			if (kC(e)) return {
				type: "listItem",
				content: [{
					type: "paragraph",
					content: AC(e.text || "", t)
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
			content: wC(r)
		};
	},
	renderMarkdown: (e, t, n) => {
		let r = (e) => {
			if (e.parentType === "bulletList") return "- ";
			if (e.parentType === "orderedList") {
				var t, n;
				let r = ((t = e.meta) == null || (t = t.parentAttrs) == null ? void 0 : t.start) || 1;
				return CC((n = e.meta) == null || (n = n.parentAttrs) == null ? void 0 : n.type, r - 1 + (e.index || 0), ". ");
			}
			return "- ";
		}, i = lS(e, t, r, n, { alignNestedToPrefix: n?.parentType === "orderedList" });
		if (!TC(e) || !OC(n)) return i;
		let a = r(n);
		return `${a}${EC}${i.slice(a.length)}`;
	},
	addExtensions() {
		return [sC(this.name, [this.options.bulletListTypeName, this.options.orderedListTypeName])];
	},
	addKeyboardShortcuts() {
		return {
			Enter: () => this.editor.commands.splitListItem(this.name),
			Tab: () => this.editor.commands.sinkListItem(this.name),
			"Shift-Tab": () => this.editor.commands.liftListItem(this.name)
		};
	}
}), MC = (e, t) => {
	let { $from: n } = t.selection, r = Av(e, t.schema), i = null, a = n.depth, o = n.pos, s = null;
	for (; a > 0 && s === null;) i = n.node(a), i.type === r ? s = a : (--a, --o);
	return s === null ? null : {
		$pos: t.doc.resolve(o),
		depth: s
	};
}, NC = (e, t) => {
	let n = MC(e, t);
	if (!n) return !1;
	let [, r] = Tb(t, e, n.$pos.pos + 4);
	return r;
}, PC = (e, t, n) => {
	let { $anchor: r } = e.selection, i = Math.max(0, r.pos - 2), a = e.doc.resolve(i).node();
	return !(!a || !n.includes(a.type.name));
}, FC = (e, t, n) => {
	if (e.commands.undoInputRule()) return !0;
	if (e.state.selection.from !== e.state.selection.to) return !1;
	if (!Cy(e.state, t) && PC(e.state, t, n)) {
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
		}).command(({ state: e, dispatch: t }) => (xf(e, t), !0)).run();
	}
	if (!Cy(e.state, t) || !Nb(e.state)) return !1;
	let { $from: r } = e.state.selection, i = r.depth - 1;
	return r.node(i).type !== e.schema.nodes[t] || r.index(i) !== 0 ? !1 : e.chain().liftListItem(t).run();
}, IC = (e, t) => {
	let n = NC(e, t), r = MC(e, t);
	return !r || !n ? !1 : n > r.depth;
}, LC = (e, t) => {
	let n = NC(e, t), r = MC(e, t);
	return !r || !n ? !1 : n < r.depth;
}, RC = (e, t) => !Cy(e.state, t) || !Mb(e.state, t) || !e.state.selection.empty ? !1 : IC(t, e.state) ? e.chain().focus(e.state.selection.from + 4).lift(t).joinBackward().run() : LC(t, e.state) ? e.commands.command(({ state: e, dispatch: t }) => Sf(e, t)) : e.commands.joinItemForward(), zC = (e, t, n) => {
	let { state: r } = e, { selection: i } = r;
	if (!i.empty) return !1;
	let { $from: a } = i;
	if (a.parentOffset !== 0 || !a.parent.isTextblock || Cy(r, t)) return !1;
	let o = Eb(a);
	if (!o || !n.includes(o.type.name)) return !1;
	let s = o.lastChild;
	if (!s || s.type.name !== t) return !1;
	let c = a.parent;
	if (!s.canReplace(s.childCount, s.childCount, I.from(c))) return !1;
	let l = a.before(), u = a.after(), d = l - 2;
	return e.commands.command(({ tr: e, dispatch: t }) => (t && (e.delete(l, u).insert(d, I.from(c)), e.setSelection(B.create(e.doc, d + 1)), e.scrollIntoView()), !0));
}, BC = Y.create({
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
					e.state.schema.nodes[n] !== void 0 && RC(e, n) && (t = !0);
				}), t;
			},
			"Mod-Delete": ({ editor: e }) => {
				let t = !1;
				return this.options.listTypes.forEach(({ itemName: n }) => {
					e.state.schema.nodes[n] !== void 0 && RC(e, n) && (t = !0);
				}), t;
			},
			Backspace: ({ editor: e }) => {
				let t = !1;
				return this.options.listTypes.forEach(({ itemName: n, wrapperNames: r }) => {
					e.state.schema.nodes[n] !== void 0 && FC(e, n, r) && (t = !0);
				}), t;
			},
			"Mod-Backspace": ({ editor: e }) => {
				let t = !1;
				return this.options.listTypes.forEach(({ itemName: n, wrapperNames: r }) => {
					e.state.schema.nodes[n] !== void 0 && FC(e, n, r) && (t = !0);
				}), t;
			},
			Tab: ({ editor: e }) => {
				for (let { itemName: t, wrapperNames: n } of this.options.listTypes) if (e.state.schema.nodes[t] !== void 0 && zC(e, t, n)) return !0;
				return !1;
			}
		};
	}
}), VC = RegExp(`^(\\s*)(${uC})([.)])\\s+(.*)$`), HC = /^\s/, UC = {
	heading: /^#{1,6}(?:\s|$)/,
	bulletItem: /^[-+*]\s+/,
	codeFence: /^(?:```|~~~)/,
	blockMath: /^\$\$/,
	thematicBreak: /^(?:(?:-[ \t]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})$/
};
function WC(e) {
	return VC.test(e.trimStart());
}
function GC(e) {
	let t = e.trimStart();
	return UC.bulletItem.test(t) || WC(t) || UC.heading.test(t) || UC.thematicBreak.test(t) && !t.startsWith("-") || /^>\s?/.test(t) || UC.codeFence.test(t) || UC.blockMath.test(t);
}
function KC(e) {
	return Object.values(UC).some((t) => t.test(e));
}
function qC(e) {
	let t = [], n = [], r = !1;
	return e.forEach((e) => {
		r ? n.push(e) : e.trim() === "" || t.length > 0 && GC(e) ? (r = !0, n.push(e)) : t.push(e);
	}), {
		paragraphLines: t,
		blockLines: n
	};
}
function JC(e) {
	let t = [], n = 0, r = 0;
	for (; n < e.length;) {
		let i = e[n], a = i.match(VC);
		if (!a) break;
		let [, o, s, c, l] = a, u = o.length, d = parseInt(s, 10), f = isNaN(d) ? _C(s) : void 0, p = isNaN(d) ? vC(s) : d, m = [l], h = n + 1, g = [i], _ = !1;
		for (; h < e.length;) {
			let t = e[h];
			if (t.match(VC)) break;
			if (t.trim() === "") g.push(t), m.push(""), _ = !0, h += 1;
			else if (t.match(HC)) {
				let e = t.length - t.trimStart().length, n = u + s.length + 1;
				g.push(t), m.push(t.slice(Math.min(e, n))), h += 1;
			} else {
				if (_ || KC(t)) break;
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
var YC = RegExp(`^(${uC})([.)])\\s+(.+)$`);
function XC(e) {
	let t = e.split("\n").filter((e) => e.trim().length > 0);
	if (t.length === 0) return null;
	let n = [];
	for (let e of t) {
		let t = e.trim().match(YC);
		if (!t) return null;
		n.push({
			marker: t[1],
			content: t[3]
		});
	}
	return bC(n.map((e) => e.marker)) ? {
		type: "orderedList",
		attrs: SC(n[0].marker),
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
function ZC(e, t, n) {
	let r = [], i = 0;
	for (; i < e.length;) {
		let a = e[i];
		if (a.indent === t) {
			let { paragraphLines: o, blockLines: s } = qC(a.contentLines), c = o.join("\n").trim(), l = [];
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
				let e = ZC(f, Math.min(...f.map((e) => e.indent)), n);
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
function QC(e, t) {
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
var $C = 64;
function ew(e, t) {
	let n = [], r = 0;
	for (; n.length < t;) {
		let t = e.indexOf("\n", r);
		if (t === -1) return n.push(e.slice(r)), n;
		n.push(e.slice(r, t)), r = t + 1;
	}
	return n;
}
function tw(e) {
	let t = e.indexOf("\n"), n = t === -1 ? e : e.slice(0, t);
	if (!VC.test(n)) return [
		[],
		0,
		[]
	];
	let r = $C, i = ew(e, r), a = JC(i);
	for (; a[1] === i.length && i.length === r;) r *= 2, i = ew(e, r), a = JC(i);
	return [
		a[0],
		a[1],
		i
	];
}
var nw = "listItem", rw = "textStyle", iw = /^(\d+)\.\s$/;
function aw(e) {
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
var ow = YS.create({
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
						let e = aw(n);
						if (e) return e;
					}
					let r = e.querySelector("li");
					if (r) {
						let e = r.getAttribute("style");
						if (e) {
							let t = aw(e);
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
		let n = e.start || 1, r = e.typeMarker, i = e.items ? QC(e.items, t) : [], a = {};
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
			let [r, i, a] = tw(e);
			if (r.length === 0) return;
			let o = ZC(r, r[0].indent, n);
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
		return { toggleOrderedList: () => ({ commands: e, chain: t }) => this.options.keepAttributes ? t().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(nw, this.editor.getAttributes(rw)).run() : e.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks) };
	},
	addKeyboardShortcuts() {
		return { "Mod-Shift-7": () => this.editor.commands.toggleOrderedList() };
	},
	addProseMirrorPlugins() {
		return [new H({ props: { handlePaste: (e, t) => {
			if ((t.clipboardData?.getData("text/html"))?.trim()) return !1;
			let n = t.clipboardData?.getData("text/plain");
			if (!n) return !1;
			let r = XC(n);
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
		let e = (e, t) => (!t.attrs.type || t.attrs.type === "1") && t.childCount + t.attrs.start === +e[1], t = JS({
			find: iw,
			type: this.type,
			getAttributes: (e) => ({ start: +e[1] }),
			joinPredicate: e
		});
		return (this.options.keepMarks || this.options.keepAttributes) && (t = JS({
			find: iw,
			type: this.type,
			keepMarks: this.options.keepMarks,
			keepAttributes: this.options.keepAttributes,
			getAttributes: (e) => ({
				start: +e[1],
				...this.editor.getAttributes(rw)
			}),
			joinPredicate: e,
			editor: this.editor
		})), [t];
	}
}), sw = /^\s*(\[([( |x])?\])\s$/, cw = "position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0", lw = (e, t, n) => {
	var r;
	return (n == null || (r = n.checkboxLabel) == null ? void 0 : r.call(n, e, t)) || `Task item checkbox for ${e.textContent || "empty task item"}`;
}, uw = YS.create({
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
	renderMarkdown: (e, t) => lS(e, t, `- [${e.attrs?.checked ? "x" : " "}] `, void 0, { indentMainContent: !0 }),
	addExtensions() {
		return this.options.nested ? [sC(this.name, [this.options.taskListTypeName])] : [];
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
			o.style.cssText = cw;
			let l = (e) => {
				let t = lw(e, e.attrs.checked, this.options.a11y);
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
					let t = r.extensionManager.attributes, n = sb(e, t), a = new Set(Object.keys(n)), o = this.options.HTMLAttributes;
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
		return [JS({
			find: sw,
			type: this.type,
			getAttributes: (e) => ({ checked: e[e.length - 1] === "x" })
		})];
	}
}), dw = YS.create({
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
				let t = oS(e, {
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
			}, i = oS(e, {
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
		return this.options.bulletList !== !1 && e.push(rC.configure(this.options.bulletList)), this.options.listItem !== !1 && e.push(jC.configure(this.options.listItem)), this.options.listKeymap !== !1 && e.push(BC.configure(this.options.listKeymap)), this.options.orderedList !== !1 && e.push(ow.configure(this.options.orderedList)), this.options.taskItem !== !1 && e.push(uw.configure(this.options.taskItem)), this.options.taskList !== !1 && e.push(dw.configure(this.options.taskList)), e;
	}
});
// node_modules/prosemirror-tables/dist/index.js
var fw, pw;
if (typeof WeakMap < "u") {
	let e = /* @__PURE__ */ new WeakMap();
	fw = (t) => e.get(t), pw = (t, n) => (e.set(t, n), n);
} else {
	let e = [], t = 0;
	fw = (t) => {
		for (let n = 0; n < e.length; n += 2) if (e[n] == t) return e[n + 1];
	}, pw = (n, r) => (t == 10 && (t = 0), e[t++] = n, e[t++] = r);
}
var mw = class {
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
		return fw(e) || pw(e, hw(e));
	}
};
function hw(e) {
	if (e.type.spec.tableRole != "table") throw RangeError("Not a table node: " + e.type.name);
	let t = gw(e), n = e.childCount, r = [], i = 0, a = null, o = [];
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
	let s = new mw(t, n, r, a), c = !1;
	for (let e = 0; !c && e < o.length; e += 2) o[e] != null && o[e + 1] < n && (c = !0);
	return c && _w(s, o, e), s;
}
function gw(e) {
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
function _w(e, t, n) {
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
			r == null || c.colwidth && c.colwidth[n] == r || ((s ||= vw(c))[n] = r);
		}
		s && e.problems.unshift({
			type: "colwidth mismatch",
			pos: a,
			colwidth: s
		});
	}
}
function vw(e) {
	if (e.colwidth) return e.colwidth.slice();
	let t = [];
	for (let n = 0; n < e.colspan; n++) t.push(0);
	return t;
}
function yw(e) {
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
var bw = new U("selectingCells");
function xw(e) {
	for (let t = e.depth - 1; t > 0; t--) if (e.node(t).type.spec.tableRole == "row") return e.node(0).resolve(e.before(t + 1));
	return null;
}
function Sw(e) {
	for (let t = e.depth; t > 0; t--) {
		let n = e.node(t).type.spec.tableRole;
		if (n === "cell" || n === "header_cell") return e.node(t);
	}
	return null;
}
function Cw(e) {
	let t = e.selection.$head;
	for (let e = t.depth; e > 0; e--) if (t.node(e).type.spec.tableRole == "row") return !0;
	return !1;
}
function ww(e) {
	let t = e.selection;
	if ("$anchorCell" in t && t.$anchorCell) return t.$anchorCell.pos > t.$headCell.pos ? t.$anchorCell : t.$headCell;
	if ("node" in t && t.node && t.node.type.spec.tableRole == "cell") return t.$anchor;
	let n = xw(t.$head) || Tw(t.$head);
	if (n) return n;
	throw RangeError(`No cell found around position ${t.head}`);
}
function Tw(e) {
	for (let t = e.nodeAfter, n = e.pos; t; t = t.firstChild, n++) {
		let r = t.type.spec.tableRole;
		if (r == "cell" || r == "header_cell") return e.doc.resolve(n);
	}
	for (let t = e.nodeBefore, n = e.pos; t; t = t.lastChild, n--) {
		let r = t.type.spec.tableRole;
		if (r == "cell" || r == "header_cell") return e.doc.resolve(n - t.nodeSize);
	}
}
function Ew(e) {
	return e.parent.type.spec.tableRole == "row" && !!e.nodeAfter;
}
function Dw(e) {
	return e.node(0).resolve(e.pos + e.nodeAfter.nodeSize);
}
function Ow(e, t) {
	return e.depth == t.depth && e.pos >= t.start(-1) && e.pos <= t.end(-1);
}
function kw(e, t, n) {
	let r = e.node(-1), i = mw.get(r), a = e.start(-1), o = i.nextCell(e.pos - a, t, n);
	return o == null ? null : e.node(0).resolve(a + o);
}
function Aw(e, t, n = 1) {
	let r = {
		...e,
		colspan: e.colspan - n
	};
	return r.colwidth && (r.colwidth = r.colwidth.slice(), r.colwidth.splice(t, n), r.colwidth.some((e) => e > 0) || (r.colwidth = null)), r;
}
function jw(e, t, n = 1) {
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
function Mw(e, t, n) {
	let r = yw(t.type.schema).header_cell;
	for (let i = 0; i < e.height; i++) if (t.nodeAt(e.map[n + i * e.width]).type != r) return !1;
	return !0;
}
var X = class e extends z {
	constructor(e, t = e) {
		let n = e.node(-1), r = mw.get(n), i = e.start(-1), a = r.rectBetween(e.pos - i, t.pos - i), o = e.node(0), s = r.cellsInRect(a).filter((e) => e != t.pos - i);
		s.unshift(t.pos - i);
		let c = s.map((e) => {
			let t = n.nodeAt(e);
			if (!t) throw RangeError(`No cell with offset ${e} found`);
			let r = i + e + 1;
			return new Xd(o.resolve(r), o.resolve(r + t.content.size));
		});
		super(c[0].$from, c[0].$to, c), this.$anchorCell = e, this.$headCell = t;
	}
	map(t, n) {
		let r = t.resolve(n.map(this.$anchorCell.pos)), i = t.resolve(n.map(this.$headCell.pos));
		if (Ew(r) && Ew(i) && Ow(r, i)) {
			let t = this.$anchorCell.node(-1) != r.node(-1);
			return t && this.isRowSelection() ? e.rowSelection(r, i) : t && this.isColSelection() ? e.colSelection(r, i) : new e(r, i);
		}
		return B.between(r, i);
	}
	content() {
		let e = this.$anchorCell.node(-1), t = mw.get(e), n = this.$anchorCell.start(-1), r = t.rectBetween(this.$anchorCell.pos - n, this.$headCell.pos - n), i = {}, a = [];
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
					if (l > 0 && (e = Aw(e, 0, l)), u > 0 && (e = Aw(e, e.colspan - u, u)), s.left < r.left) {
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
		let t = this.$anchorCell.node(-1), n = mw.get(t), r = this.$anchorCell.start(-1), i = n.cellsInRect(n.rectBetween(this.$anchorCell.pos - r, this.$headCell.pos - r));
		for (let n = 0; n < i.length; n++) e(t.nodeAt(i[n]), r + i[n]);
	}
	isColSelection() {
		let e = this.$anchorCell.index(-1), t = this.$headCell.index(-1);
		if (Math.min(e, t) > 0) return !1;
		let n = e + this.$anchorCell.nodeAfter.attrs.rowspan, r = t + this.$headCell.nodeAfter.attrs.rowspan;
		return Math.max(n, r) == this.$headCell.node(-1).childCount;
	}
	static colSelection(t, n = t) {
		let r = t.node(-1), i = mw.get(r), a = t.start(-1), o = i.findCell(t.pos - a), s = i.findCell(n.pos - a), c = t.node(0);
		return o.top <= s.top ? (o.top > 0 && (t = c.resolve(a + i.map[o.left])), s.bottom < i.height && (n = c.resolve(a + i.map[i.width * (i.height - 1) + s.right - 1]))) : (s.top > 0 && (n = c.resolve(a + i.map[s.left])), o.bottom < i.height && (t = c.resolve(a + i.map[i.width * (i.height - 1) + o.right - 1]))), new e(t, n);
	}
	isRowSelection() {
		let e = this.$anchorCell.node(-1), t = mw.get(e), n = this.$anchorCell.start(-1), r = t.colCount(this.$anchorCell.pos - n), i = t.colCount(this.$headCell.pos - n);
		if (Math.min(r, i) > 0) return !1;
		let a = r + this.$anchorCell.nodeAfter.attrs.colspan, o = i + this.$headCell.nodeAfter.attrs.colspan;
		return Math.max(a, o) == t.width;
	}
	eq(t) {
		return t instanceof e && t.$anchorCell.pos == this.$anchorCell.pos && t.$headCell.pos == this.$headCell.pos;
	}
	static rowSelection(t, n = t) {
		let r = t.node(-1), i = mw.get(r), a = t.start(-1), o = i.findCell(t.pos - a), s = i.findCell(n.pos - a), c = t.node(0);
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
		return new Nw(this.$anchorCell.pos, this.$headCell.pos);
	}
};
X.prototype.visible = !1, z.jsonID("cell", X);
var Nw = class e {
	constructor(e, t) {
		this.anchor = e, this.head = t;
	}
	map(t) {
		return new e(t.map(this.anchor), t.map(this.head));
	}
	resolve(e) {
		let t = e.resolve(this.anchor), n = e.resolve(this.head);
		return t.parent.type.spec.tableRole == "row" && n.parent.type.spec.tableRole == "row" && t.index() < t.parent.childCount && n.index() < n.parent.childCount && Ow(t, n) ? new X(t, n) : z.near(n, 1);
	}
};
function Pw(e) {
	if (!(e.selection instanceof X)) return null;
	let t = [];
	return e.selection.forEachCell((e, n) => {
		t.push(Gg.node(n, n + e.nodeSize, { class: "selectedCell" }));
	}), G.create(e.doc, t);
}
function Fw({ $from: e, $to: t }) {
	if (e.pos == t.pos || e.pos < t.pos - 6) return !1;
	let n = e.pos, r = t.pos, i = e.depth;
	for (; i >= 0 && !(e.after(i + 1) < e.end(i)); i--, n++);
	for (let e = t.depth; e >= 0 && !(t.before(e + 1) > t.start(e)); e--, r--);
	return n == r && /row|table/.test(e.node(i).type.spec.tableRole);
}
function Iw({ $from: e, $to: t }) {
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
function Lw(e, t, n) {
	let r = (t || e).selection, i = (t || e).doc, a, o;
	if (r instanceof V && (o = r.node.type.spec.tableRole)) {
		if (o == "cell" || o == "header_cell") a = X.create(i, r.from);
		else if (o == "row") {
			let e = i.resolve(r.from + 1);
			a = X.rowSelection(e, e);
		} else if (!n) {
			let e = mw.get(r.node), t = r.from + 1, n = t + e.map[e.width * e.height - 1];
			a = X.create(i, t + 1, n);
		}
	} else r instanceof B && Fw(r) ? a = B.create(i, r.from) : r instanceof B && Iw(r) && (a = B.create(i, r.$from.start(), r.$from.end()));
	return a && (t ||= e.tr).setSelection(a), t;
}
var Rw = new U("fix-tables");
function zw(e, t, n, r) {
	let i = e.childCount, a = t.childCount;
	outer: for (let o = 0, s = 0; o < a; o++) {
		let a = t.child(o);
		for (let t = s, r = Math.min(i, o + 3); t < r; t++) if (e.child(t) == a) {
			s = t + 1, n += a.nodeSize;
			continue outer;
		}
		r(a, n), s < i && e.child(s).sameMarkup(a) ? zw(e.child(s), a, n + 1, r) : a.nodesBetween(0, a.content.size, r, n + 1), n += a.nodeSize;
	}
}
function Bw(e, t) {
	let n, r = (t, r) => {
		t.type.spec.tableRole == "table" && (n = Vw(e, t, r, n));
	};
	return t ? t.doc != e.doc && zw(t.doc, e.doc, 0, r) : e.doc.descendants(r), n;
}
function Vw(e, t, n, r) {
	let i = mw.get(t);
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
			r.setNodeMarkup(r.mapping.map(n + 1 + o.pos), null, Aw(i, i.colspan - o.n, o.n));
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
				let n = yw(e.schema)[t].createAndFill();
				n && a.push(n);
			}
			let d = (c == 0 || o == c - 1) && s == c ? l + 1 : i - 1;
			r.insert(r.mapping.map(d), a);
		}
		l = i;
	}
	return r.setMeta(Rw, { fixTables: !0 });
}
function Hw(e) {
	let t = e.selection, n = ww(e), r = n.node(-1), i = n.start(-1), a = mw.get(r);
	return {
		...t instanceof X ? a.rectBetween(t.$anchorCell.pos - i, t.$headCell.pos - i) : a.findCell(n.pos - i),
		tableStart: i,
		map: a,
		table: r
	};
}
function Uw(e, { map: t, tableStart: n, table: r }, i) {
	let a = i > 0 ? -1 : 0;
	Mw(t, r, i + a) && (a = i == 0 || i == t.width ? null : 0);
	for (let o = 0; o < t.height; o++) {
		let s = o * t.width + i;
		if (i > 0 && i < t.width && t.map[s - 1] == t.map[s]) {
			let a = t.map[s], c = r.nodeAt(a);
			e.setNodeMarkup(e.mapping.map(n + a), null, jw(c.attrs, i - t.colCount(a))), o += c.attrs.rowspan - 1;
		} else {
			let c = a == null ? yw(r.type.schema).cell : r.nodeAt(t.map[s + a]).type, l = t.positionAt(o, i, r);
			e.insert(e.mapping.map(n + l), c.createAndFill());
		}
	}
	return e;
}
function Ww(e, t) {
	if (!Cw(e)) return !1;
	if (t) {
		let n = Hw(e);
		t(Uw(e.tr, n, n.left));
	}
	return !0;
}
function Gw(e, t) {
	if (!Cw(e)) return !1;
	if (t) {
		let n = Hw(e);
		t(Uw(e.tr, n, n.right));
	}
	return !0;
}
function Kw(e, { map: t, table: n, tableStart: r }, i) {
	let a = e.mapping.maps.length;
	for (let o = 0; o < t.height;) {
		let s = o * t.width + i, c = t.map[s], l = n.nodeAt(c), u = l.attrs;
		if (i > 0 && t.map[s - 1] == c || i < t.width - 1 && t.map[s + 1] == c) e.setNodeMarkup(e.mapping.slice(a).map(r + c), null, Aw(u, i - t.colCount(c)));
		else {
			let t = e.mapping.slice(a).map(r + c);
			e.delete(t, t + l.nodeSize);
		}
		o += u.rowspan;
	}
}
function qw(e, t) {
	if (!Cw(e)) return !1;
	if (t) {
		let n = Hw(e), r = e.tr;
		if (n.left == 0 && n.right == n.map.width) return !1;
		for (let e = n.right - 1; Kw(r, n, e), e != n.left; e--) {
			let e = n.tableStart ? r.doc.nodeAt(n.tableStart - 1) : r.doc;
			if (!e) throw RangeError("No table found");
			n.table = e, n.map = mw.get(e);
		}
		t(r);
	}
	return !0;
}
function Jw(e, t, n) {
	let r = yw(t.type.schema).header_cell;
	for (let i = 0; i < e.width; i++) if (t.nodeAt(e.map[i + n * e.width])?.type != r) return !1;
	return !0;
}
function Yw(e, { map: t, tableStart: n, table: r }, i) {
	let a = n;
	for (let e = 0; e < i; e++) a += r.child(e).nodeSize;
	let o = [], s = i > 0 ? -1 : 0;
	Jw(t, r, i + s) && (s = i == 0 || i == t.height ? null : 0);
	for (let a = 0, c = t.width * i; a < t.width; a++, c++) if (i > 0 && i < t.height && t.map[c] == t.map[c - t.width]) {
		let i = t.map[c], o = r.nodeAt(i).attrs;
		e.setNodeMarkup(n + i, null, {
			...o,
			rowspan: o.rowspan + 1
		}), a += o.colspan - 1;
	} else {
		let e = (s == null ? yw(r.type.schema).cell : r.nodeAt(t.map[c + s * t.width])?.type)?.createAndFill();
		e && o.push(e);
	}
	return e.insert(a, yw(r.type.schema).row.create(null, o)), e;
}
function Xw(e, t) {
	if (!Cw(e)) return !1;
	if (t) {
		let n = Hw(e);
		t(Yw(e.tr, n, n.top));
	}
	return !0;
}
function Zw(e, t) {
	if (!Cw(e)) return !1;
	if (t) {
		let n = Hw(e);
		t(Yw(e.tr, n, n.bottom));
	}
	return !0;
}
function Qw(e, { map: t, table: n, tableStart: r }, i) {
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
function $w(e, t) {
	if (!Cw(e)) return !1;
	if (t) {
		let n = Hw(e), r = e.tr;
		if (n.top == 0 && n.bottom == n.map.height) return !1;
		for (let e = n.bottom - 1; Qw(r, n, e), e != n.top; e--) {
			let e = n.tableStart ? r.doc.nodeAt(n.tableStart - 1) : r.doc;
			if (!e) throw RangeError("No table found");
			n.table = e, n.map = mw.get(n.table);
		}
		t(r);
	}
	return !0;
}
function eT(e) {
	let t = e.content;
	return t.childCount == 1 && t.child(0).isTextblock && t.child(0).childCount == 0;
}
function tT({ width: e, height: t, map: n }, r) {
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
function nT(e, t) {
	let n = e.selection;
	if (!(n instanceof X) || n.$anchorCell.pos == n.$headCell.pos) return !1;
	let r = Hw(e), { map: i } = r;
	if (tT(i, r)) return !1;
	if (t) {
		let n = e.tr, a = {}, o = I.empty, s, c;
		for (let e = r.top; e < r.bottom; e++) for (let t = r.left; t < r.right; t++) {
			let l = i.map[e * i.width + t], u = r.table.nodeAt(l);
			if (!a[l] && u) {
				if (a[l] = !0, s == null) s = l, c = u;
				else {
					eT(u) || (o = o.append(u.content));
					let e = n.mapping.map(l + r.tableStart);
					n.delete(e, e + u.nodeSize);
				}
			}
		}
		if (s == null || c == null) return !0;
		if (n.setNodeMarkup(s + r.tableStart, null, {
			...jw(c.attrs, c.attrs.colspan, r.right - r.left - c.attrs.colspan),
			rowspan: r.bottom - r.top
		}), o.size > 0) {
			let e = s + 1 + c.content.size, t = eT(c) ? s + 1 : e;
			n.replaceWith(t + r.tableStart, e + r.tableStart, o);
		}
		n.setSelection(new X(n.doc.resolve(s + r.tableStart))), t(n);
	}
	return !0;
}
function rT(e, t) {
	let n = yw(e.schema);
	return iT(({ node: e }) => n[e.type.spec.tableRole])(e, t);
}
function iT(e) {
	return (t, n) => {
		let r = t.selection, i, a;
		if (r instanceof X) {
			if (r.$anchorCell.pos != r.$headCell.pos) return !1;
			i = r.$anchorCell.nodeAfter, a = r.$anchorCell.pos;
		} else {
			if (i = Sw(r.$from), !i) return !1;
			a = xw(r.$from)?.pos;
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
			let l = Hw(t), u = t.tr;
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
function aT(e, t) {
	return function(n, r) {
		if (!Cw(n)) return !1;
		let i = ww(n);
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
function oT(e) {
	return function(t, n) {
		if (!Cw(t)) return !1;
		if (n) {
			let r = yw(t.schema), i = Hw(t), a = t.tr, o = i.map.cellsInRect(e == "column" ? {
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
function sT(e, t, n) {
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
function cT(e, t) {
	return t ||= { useDeprecatedLogic: !1 }, t.useDeprecatedLogic ? oT(e) : function(t, n) {
		if (!Cw(t)) return !1;
		if (n) {
			let r = yw(t.schema), i = Hw(t), a = t.tr, o = sT("row", i, r), s = sT("column", i, r), c = (e === "column" ? o : e === "row" && s) ? 1 : 0, l = e == "column" ? {
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
cT("row", { useDeprecatedLogic: !0 }), cT("column", { useDeprecatedLogic: !0 });
var lT = cT("cell", { useDeprecatedLogic: !0 });
function uT(e, t) {
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
function dT(e) {
	return function(t, n) {
		if (!Cw(t)) return !1;
		let r = uT(ww(t), e);
		if (r == null) return !1;
		if (n) {
			let e = t.doc.resolve(r);
			n(t.tr.setSelection(B.between(e, Dw(e))).scrollIntoView());
		}
		return !0;
	};
}
function fT(e, t) {
	let n = e.selection.$anchor;
	for (let r = n.depth; r > 0; r--) if (n.node(r).type.spec.tableRole == "table") return t && t(e.tr.delete(n.before(r), n.after(r)).scrollIntoView()), !0;
	return !1;
}
function pT(e, t) {
	let n = e.selection;
	if (!(n instanceof X)) return !1;
	if (t) {
		let r = e.tr, i = yw(e.schema).cell.createAndFill().content;
		n.forEachCell((e, t) => {
			e.content.eq(i) || r.replace(r.mapping.map(t + 1), r.mapping.map(t + e.nodeSize - 1), new R(i, 0, 0));
		}), r.docChanged && t(r);
	}
	return !0;
}
function mT(e) {
	if (e.size === 0) return null;
	let { content: t, openStart: n, openEnd: r } = e;
	for (; t.childCount == 1 && (n > 0 && r > 0 || t.child(0).type.spec.tableRole == "table");) n--, r--, t = t.child(0).content;
	let i = t.child(0), a = i.type.spec.tableRole, o = i.type.schema, s = [];
	if (a == "row") for (let e = 0; e < t.childCount; e++) {
		let i = t.child(e).content, a = e ? 0 : Math.max(0, n - 1), c = e < t.childCount - 1 ? 0 : Math.max(0, r - 1);
		(a || c) && (i = gT(yw(o).row, new R(i, a, c)).content), s.push(i);
	}
	else if (a == "cell" || a == "header_cell") s.push(n || r ? gT(yw(o).row, new R(t, n, r)).content : t);
	else return null;
	return hT(o, s);
}
function hT(e, t) {
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
		let a = yw(e).cell.createAndFill(), o = [];
		for (let e = n[i]; e < r; e++) o.push(a);
		t[i] = t[i].append(I.from(o));
	}
	return {
		height: t.length,
		width: r,
		rows: t
	};
}
function gT(e, t) {
	let n = e.createAndFill();
	return new Jd(n).replace(0, n.content.size, t).doc;
}
function _T({ width: e, height: t, rows: n }, r, i) {
	if (e != r) {
		let t = [], i = [];
		for (let e = 0; e < n.length; e++) {
			let a = n[e], o = [];
			for (let n = t[e] || 0, i = 0; n < r; i++) {
				let s = a.child(i % a.childCount);
				n + s.attrs.colspan > r && (s = s.type.createChecked(Aw(s.attrs, s.attrs.colspan, n + s.attrs.colspan - r), s.content)), o.push(s), n += s.attrs.colspan;
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
function vT(e, t, n, r, i, a, o) {
	let s = e.doc.type.schema, c = yw(s), l, u;
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
function yT(e, t, n, r, i, a, o, s) {
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
function bT(e, t, n, r, i, a, o, s) {
	if (o == 0 || o == t.width) return !1;
	let c = !1;
	for (let l = i; l < a; l++) {
		let i = l * t.width + o, a = t.map[i];
		if (t.map[i - 1] == a) {
			c = !0;
			let i = n.nodeAt(a), u = t.colCount(a), d = e.mapping.slice(s).map(a + r);
			e.setNodeMarkup(d, null, Aw(i.attrs, o - u, i.attrs.colspan - (o - u))), e.insert(d + i.nodeSize, i.type.createAndFill(Aw(i.attrs, 0, o - u))), l += i.attrs.rowspan - 1;
		}
	}
	return c;
}
function xT(e, t, n, r, i) {
	let a = n ? e.doc.nodeAt(n - 1) : e.doc;
	if (!a) throw Error("No table found");
	let o = mw.get(a), { top: s, left: c } = r, l = c + i.width, u = s + i.height, d = e.tr, f = 0;
	function p() {
		if (a = n ? d.doc.nodeAt(n - 1) : d.doc, !a) throw Error("No table found");
		o = mw.get(a), f = d.mapping.maps.length;
	}
	vT(d, o, a, n, l, u, f) && p(), yT(d, o, a, n, c, l, s, f) && p(), yT(d, o, a, n, c, l, u, f) && p(), bT(d, o, a, n, s, u, c, f) && p(), bT(d, o, a, n, s, u, l, f) && p();
	for (let e = s; e < u; e++) {
		let t = o.positionAt(e, c, a), r = o.positionAt(e, l, a);
		d.replace(d.mapping.slice(f).map(t + n), d.mapping.slice(f).map(r + n), new R(i.rows[e - s], 0, 0));
	}
	p(), d.setSelection(new X(d.doc.resolve(n + o.positionAt(s, c, a)), d.doc.resolve(n + o.positionAt(u - 1, l - 1, a)))), t(d);
}
var ST = J_({
	ArrowLeft: wT("horiz", -1),
	ArrowRight: wT("horiz", 1),
	ArrowUp: wT("vert", -1),
	ArrowDown: wT("vert", 1),
	"Shift-ArrowLeft": TT("horiz", -1),
	"Shift-ArrowRight": TT("horiz", 1),
	"Shift-ArrowUp": TT("vert", -1),
	"Shift-ArrowDown": TT("vert", 1),
	Backspace: pT,
	"Mod-Backspace": pT,
	Delete: pT,
	"Mod-Delete": pT
});
function CT(e, t, n) {
	return !n.eq(e.selection) && (t && t(e.tr.setSelection(n).scrollIntoView()), !0);
}
function wT(e, t) {
	return (n, r, i) => {
		if (!i) return !1;
		let a = n.selection;
		if (a instanceof X) return CT(n, r, z.near(a.$headCell, t));
		if (e != "horiz" && !a.empty) return !1;
		let o = kT(i, e, t);
		if (o == null) return !1;
		if (e == "horiz") return CT(n, r, z.near(n.doc.resolve(a.head + t), t));
		{
			let i = n.doc.resolve(o), a = kw(i, e, t), s;
			return s = a ? z.near(a, 1) : t < 0 ? z.near(n.doc.resolve(i.before(-1)), -1) : z.near(n.doc.resolve(i.after(-1)), 1), CT(n, r, s);
		}
	};
}
function TT(e, t) {
	return (n, r, i) => {
		if (!i) return !1;
		let a = n.selection, o;
		if (a instanceof X) o = a;
		else {
			let r = kT(i, e, t);
			if (r == null) return !1;
			o = new X(n.doc.resolve(r));
		}
		let s = kw(o.$headCell, e, t);
		return s ? CT(n, r, new X(o.$anchorCell, s)) : !1;
	};
}
function ET(e, t) {
	let n = e.state.doc, r = xw(n.resolve(t));
	return r ? (e.dispatch(e.state.tr.setSelection(new X(r))), !0) : !1;
}
function DT(e, t, n) {
	if (!Cw(e.state)) return !1;
	let r = mT(n), i = e.state.selection;
	if (i instanceof X) {
		r ||= {
			width: 1,
			height: 1,
			rows: [I.from(gT(yw(e.state.schema).cell, n))]
		};
		let t = i.$anchorCell.node(-1), a = i.$anchorCell.start(-1), o = mw.get(t).rectBetween(i.$anchorCell.pos - a, i.$headCell.pos - a);
		return r = _T(r, o.right - o.left, o.bottom - o.top), xT(e.state, e.dispatch, a, o, r), !0;
	}
	if (r) {
		let t = ww(e.state), n = t.start(-1);
		return xT(e.state, e.dispatch, n, mw.get(t.node(-1)).findCell(t.pos - n), r), !0;
	}
	return !1;
}
function OT(e, t) {
	if (t.button != 0 || t.ctrlKey || t.metaKey) return;
	let n = AT(e, t.target), r;
	if (t.shiftKey && e.state.selection instanceof X) i(e.state.selection.$anchorCell, t), t.preventDefault();
	else if (t.shiftKey && n && (r = xw(e.state.selection.$anchor)) != null && jT(e, t)?.pos != r.pos) i(r, t), t.preventDefault();
	else if (!n) return;
	function i(t, n) {
		let r = jT(e, n), i = bw.getState(e.state) == null;
		if (!r || !Ow(t, r)) {
			if (i) r = t;
			else return;
		}
		let a = new X(t, r);
		if (i || !e.state.selection.eq(a)) {
			let n = e.state.tr.setSelection(a);
			i && n.setMeta(bw, t.pos), e.dispatch(n);
		}
	}
	function a() {
		e.root.removeEventListener("mouseup", a), e.root.removeEventListener("dragstart", a), e.root.removeEventListener("mousemove", o), bw.getState(e.state) != null && e.dispatch(e.state.tr.setMeta(bw, -1));
	}
	function o(r) {
		let o = r, s = bw.getState(e.state), c;
		if (s != null) c = e.state.doc.resolve(s);
		else if (AT(e, o.target) != n && (c = jT(e, t), !c)) return a();
		c && i(c, o);
	}
	e.root.addEventListener("mouseup", a), e.root.addEventListener("dragstart", a), e.root.addEventListener("mousemove", o);
}
function kT(e, t, n) {
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
function AT(e, t) {
	for (; t && t != e.dom; t = t.parentNode) if (t.nodeName == "TD" || t.nodeName == "TH") return t;
	return null;
}
function jT(e, t) {
	let n = e.posAtCoords({
		left: t.clientX,
		top: t.clientY
	});
	if (!n) return null;
	let { inside: r, pos: i } = n;
	return r >= 0 && xw(e.state.doc.resolve(r)) || xw(e.state.doc.resolve(i));
}
var MT = class {
	constructor(e, t) {
		this.node = e, this.defaultCellMinWidth = t, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), this.table.style.setProperty("--default-cell-min-width", `${t}px`), this.colgroup = this.table.appendChild(document.createElement("colgroup")), NT(e, this.colgroup, this.table, t), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
	}
	update(e) {
		return e.type == this.node.type && (this.node = e, NT(e, this.colgroup, this.table, this.defaultCellMinWidth), !0);
	}
	ignoreMutation(e) {
		return e.type == "attributes" && (e.target == this.table || this.colgroup.contains(e.target));
	}
};
function NT(e, t, n, r, i, a) {
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
var PT = new U("tableColumnResizing");
function FT({ handleWidth: e = 5, cellMinWidth: t = 25, defaultCellMinWidth: n = 100, View: r = MT, lastColumnResizable: i = !0 } = {}) {
	let a = new H({
		key: PT,
		state: {
			init(e, t) {
				var i;
				let o = (i = a.spec) == null || (i = i.props) == null ? void 0 : i.nodeViews, s = yw(t.schema).table.name;
				return r && o && (o[s] = (e, t) => new r(e, n, t)), new IT(-1, !1);
			},
			apply(e, t) {
				return t.apply(e);
			}
		},
		props: {
			attributes: (e) => {
				let t = PT.getState(e);
				return t && t.activeHandle > -1 ? { class: "resize-cursor" } : {};
			},
			handleDOMEvents: {
				mousemove: (t, n) => {
					LT(t, n, e, i);
				},
				mouseleave: (e) => {
					RT(e);
				},
				mousedown: (e, r) => {
					zT(e, r, t, n);
				}
			},
			decorations: (e) => {
				let t = PT.getState(e);
				if (t && t.activeHandle > -1) return JT(e, t.activeHandle);
			},
			nodeViews: {}
		}
	});
	return a;
}
var IT = class e {
	constructor(e, t) {
		this.activeHandle = e, this.dragging = t;
	}
	apply(t) {
		let n = this, r = t.getMeta(PT);
		if (r && r.setHandle != null) return new e(r.setHandle, !1);
		if (r && r.setDragging !== void 0) return new e(n.activeHandle, r.setDragging);
		if (n.activeHandle > -1 && t.docChanged) {
			let r = t.mapping.map(n.activeHandle, -1);
			return Ew(t.doc.resolve(r)) || (r = -1), new e(r, n.dragging);
		}
		return n;
	}
};
function LT(e, t, n, r) {
	if (!e.editable) return;
	let i = PT.getState(e.state);
	if (i && !i.dragging) {
		let a = VT(t.target), o = -1;
		if (a) {
			let { left: r, right: i } = a.getBoundingClientRect();
			t.clientX - r <= n ? o = HT(e, t, "left", n) : i - t.clientX <= n && (o = HT(e, t, "right", n));
		}
		if (o != i.activeHandle) {
			if (!r && o !== -1) {
				let t = e.state.doc.resolve(o), n = t.node(-1), r = mw.get(n), i = t.start(-1);
				if (r.colCount(t.pos - i) + t.nodeAfter.attrs.colspan - 1 == r.width - 1) return;
			}
			WT(e, o);
		}
	}
}
function RT(e) {
	if (!e.editable) return;
	let t = PT.getState(e.state);
	t && t.activeHandle > -1 && !t.dragging && WT(e, -1);
}
function zT(e, t, n, r) {
	if (!e.editable) return !1;
	let i = e.dom.ownerDocument.defaultView ?? window, a = PT.getState(e.state);
	if (!a || a.activeHandle == -1 || a.dragging) return !1;
	let o = e.state.doc.nodeAt(a.activeHandle), s = BT(e, a.activeHandle, o.attrs);
	e.dispatch(e.state.tr.setMeta(PT, { setDragging: {
		startX: t.clientX,
		startWidth: s
	} }));
	function c(t) {
		i.removeEventListener("mouseup", c), i.removeEventListener("mousemove", l);
		let r = PT.getState(e.state);
		r?.dragging && (GT(e, r.activeHandle, UT(r.dragging, t, n)), e.dispatch(e.state.tr.setMeta(PT, { setDragging: null })));
	}
	function l(t) {
		if (!t.which) return c(t);
		let i = PT.getState(e.state);
		if (i && i.dragging) {
			let a = UT(i.dragging, t, n);
			KT(e, i.activeHandle, a, r);
		}
	}
	return KT(e, a.activeHandle, s, r), i.addEventListener("mouseup", c), i.addEventListener("mousemove", l), t.preventDefault(), !0;
}
function BT(e, t, { colspan: n, colwidth: r }) {
	let i = r && r[r.length - 1];
	if (i) return i;
	let a = e.domAtPos(t), o = a.node.childNodes[a.offset].offsetWidth, s = n;
	if (r) for (let e = 0; e < n; e++) r[e] && (o -= r[e], s--);
	return o / s;
}
function VT(e) {
	for (; e && e.nodeName != "TD" && e.nodeName != "TH";) e = e.classList && e.classList.contains("ProseMirror") ? null : e.parentNode;
	return e;
}
function HT(e, t, n, r) {
	let i = n == "right" ? -r : r, a = e.posAtCoords({
		left: t.clientX + i,
		top: t.clientY
	});
	if (!a) return -1;
	let { pos: o } = a, s = xw(e.state.doc.resolve(o));
	if (!s) return -1;
	if (n == "right") return s.pos;
	let c = mw.get(s.node(-1)), l = s.start(-1), u = c.map.indexOf(s.pos - l);
	return u % c.width == 0 ? -1 : l + c.map[u - 1];
}
function UT(e, t, n) {
	let r = t.clientX - e.startX;
	return Math.max(n, e.startWidth + r);
}
function WT(e, t) {
	e.dispatch(e.state.tr.setMeta(PT, { setHandle: t }));
}
function GT(e, t, n) {
	let r = e.state.doc.resolve(t), i = r.node(-1), a = mw.get(i), o = r.start(-1), s = a.colCount(r.pos - o) + r.nodeAfter.attrs.colspan - 1, c = e.state.tr;
	for (let e = 0; e < a.height; e++) {
		let t = e * a.width + s;
		if (e && a.map[t] == a.map[t - a.width]) continue;
		let r = a.map[t], l = i.nodeAt(r).attrs, u = l.colspan == 1 ? 0 : s - a.colCount(r);
		if (l.colwidth && l.colwidth[u] == n) continue;
		let d = l.colwidth ? l.colwidth.slice() : qT(l.colspan);
		d[u] = n, c.setNodeMarkup(o + r, null, {
			...l,
			colwidth: d
		});
	}
	c.docChanged && e.dispatch(c);
}
function KT(e, t, n, r) {
	let i = e.state.doc.resolve(t), a = i.node(-1), o = i.start(-1), s = mw.get(a).colCount(i.pos - o) + i.nodeAfter.attrs.colspan - 1, c = e.domAtPos(i.start(-1)).node;
	for (; c && c.nodeName != "TABLE";) c = c.parentNode;
	c && NT(a, c.firstChild, c, r, s, n);
}
function qT(e) {
	return Array(e).fill(0);
}
function JT(e, t) {
	let n = [], r = e.doc.resolve(t), i = r.node(-1);
	if (!i) return G.empty;
	let a = mw.get(i), o = r.start(-1), s = a.colCount(r.pos - o) + r.nodeAfter.attrs.colspan - 1;
	for (let t = 0; t < a.height; t++) {
		let r = s + t * a.width;
		if ((s == a.width - 1 || a.map[r] != a.map[r + 1]) && (t == 0 || a.map[r] != a.map[r - a.width])) {
			let t = a.map[r], s = o + t + i.nodeAt(t).nodeSize - 1, c = document.createElement("div");
			c.className = "column-resize-handle", PT.getState(e)?.dragging && n.push(Gg.node(o + t, o + t + i.nodeAt(t).nodeSize, { class: "column-resize-dragging" })), n.push(Gg.widget(s, c));
		}
	}
	return G.create(e.doc, n);
}
function YT({ allowTableNodeSelection: e = !1 } = {}) {
	return new H({
		key: bw,
		state: {
			init() {
				return null;
			},
			apply(e, t) {
				let n = e.getMeta(bw);
				if (n != null) return n == -1 ? null : n;
				if (t == null || !e.docChanged) return t;
				let { deleted: r, pos: i } = e.mapping.mapResult(t);
				return r ? null : i;
			}
		},
		props: {
			decorations: Pw,
			handleDOMEvents: { mousedown: OT },
			createSelectionBetween(e) {
				return bw.getState(e.state) == null ? null : e.state.selection;
			},
			handleTripleClick: ET,
			handleKeyDown: ST,
			handlePaste: DT
		},
		appendTransaction(t, n, r) {
			return Lw(r, Bw(r, n), e);
		}
	});
}
// node_modules/@tiptap/extension-table/dist/index.js
function XT(e) {
	return e === "left" || e === "right" || e === "center" ? e : null;
}
function ZT(e) {
	let t = (e.style.textAlign || "").trim().toLowerCase(), n = (e.getAttribute("align") || "").trim().toLowerCase();
	return XT(t || n);
}
function QT(e) {
	return XT(e?.align);
}
function $T() {
	return {
		default: null,
		parseHTML: (e) => ZT(e),
		renderHTML: (e) => {
			let t = XT(e.align);
			return nS(t) ? { style: `text-align: ${t}` } : {};
		}
	};
}
function eE(e) {
	let t = e.parentElement, n = e.closest("table");
	if (!t || !n) return null;
	let r = Array.from(t.children).indexOf(e), i = n.querySelectorAll("colgroup > col")[r]?.getAttribute("width");
	return i ? [parseInt(i, 10)] : null;
}
function tE(e) {
	let t = e.getAttribute("colwidth");
	return t ? t.split(",").map((e) => parseInt(e, 10)) : eE(e);
}
var nE = /[ \t\r\n\f]+/g;
function rE(e) {
	return e.children.length > 0 ? !1 : (e.textContent ?? "").replace(nE, "") === "";
}
function iE(e) {
	let t = e.createAndFill();
	if (!t) throw Error(`[tiptap error]: "${e.name}" has no default content to backfill.`);
	return t.content;
}
function aE(e, t, n) {
	if (!(n in t)) return;
	let r = t[n];
	(r === 1 || r === "1" || r == null) && delete e[n];
}
var oE = YS.create({
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
				parseHTML: tE
			},
			align: $T()
		};
	},
	tableRole: "cell",
	isolating: !0,
	parseHTML() {
		return [{
			tag: "td",
			getAttrs: (e) => rE(e) ? {} : !1,
			getContent: (e, t) => iE(t.nodes[this.name])
		}, { tag: "td" }];
	},
	renderHTML({ HTMLAttributes: e }) {
		let t = J(this.options.HTMLAttributes, e);
		return aE(t, e, "colspan"), aE(t, e, "rowspan"), [
			"td",
			t,
			0
		];
	}
}), sE = YS.create({
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
				parseHTML: tE
			},
			align: $T()
		};
	},
	tableRole: "header_cell",
	isolating: !0,
	parseHTML() {
		return [{
			tag: "th",
			getAttrs: (e) => rE(e) ? {} : !1,
			getContent: (e, t) => iE(t.nodes[this.name])
		}, { tag: "th" }];
	},
	renderHTML({ HTMLAttributes: e }) {
		let t = J(this.options.HTMLAttributes, e);
		return aE(t, e, "colspan"), aE(t, e, "rowspan"), [
			"th",
			t,
			0
		];
	}
}), cE = YS.create({
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
function lE(e, t) {
	return t ? ["width", `${Math.max(t, e)}px`] : ["min-width", `${e}px`];
}
function uE(e, t, n, r, i, a) {
	let o = 0, s = !0, c = t.firstChild, l = e.firstChild;
	if (l !== null) for (let e = 0, n = 0; e < l.childCount; e += 1) {
		let { colspan: u, colwidth: d } = l.child(e).attrs;
		for (let e = 0; e < u; e += 1, n += 1) {
			let l = i === n ? a : d && d[e], u = l ? `${l}px` : "";
			if (o += l || r, l || (s = !1), c) {
				if (c.style.width !== u) {
					let [e, t] = lE(r, l);
					c.style.setProperty(e, t);
				}
				c = c.nextSibling;
			} else {
				let e = document.createElement("col"), [n, i] = lE(r, l);
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
var dE = class {
	constructor(e, t, n, r = {}) {
		this.node = e, this.cellMinWidth = t, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table"));
		for (let [e, t] of Object.entries(r)) t != null && (e === "style" ? this.table.style.cssText = String(t) : this.table.setAttribute(e, String(t)));
		e.attrs.style && (this.table.style.cssText = e.attrs.style), this.colgroup = this.table.appendChild(document.createElement("colgroup")), uE(e, this.colgroup, this.table, t), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
	}
	update(e) {
		return e.sameMarkup(this.node) ? (this.node = e, uE(e, this.colgroup, this.table, this.cellMinWidth), !0) : !1;
	}
	ignoreMutation(e) {
		let t = e.target, n = this.dom.contains(t), r = this.contentDOM.contains(t);
		return !(!n || r || e.type !== "attributes" && e.type !== "childList" && e.type !== "characterData");
	}
};
function fE(e, t, n, r) {
	let i = 0, a = !0, o = [], s = e.firstChild;
	if (!s) return {};
	for (let e = 0, c = 0; e < s.childCount; e += 1) {
		let { colspan: l, colwidth: u } = s.child(e).attrs;
		for (let e = 0; e < l; e += 1, c += 1) {
			let s = n === c ? r : u && u[e];
			i += s || t, s || (a = !1);
			let [l, d] = lE(t, s);
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
function pE(e, t) {
	return t ? e.createChecked(null, t) : e.createAndFill();
}
function mE(e) {
	if (e.cached.tableNodeTypes) return e.cached.tableNodeTypes;
	let t = {};
	return Object.keys(e.nodes).forEach((n) => {
		let r = e.nodes[n];
		r.spec.tableRole && (t[r.spec.tableRole] = r);
	}), e.cached.tableNodeTypes = t, t;
}
function hE(e, t, n, r, i) {
	let a = mE(e), o = [], s = [];
	for (let e = 0; e < n; e += 1) {
		let e = pE(a.cell, i);
		if (e && s.push(e), r) {
			let e = pE(a.header_cell, i);
			e && o.push(e);
		}
	}
	let c = [];
	for (let e = 0; e < t; e += 1) c.push(a.row.createChecked(null, r && e === 0 ? o : s));
	return a.table.createChecked(null, c);
}
function gE(e) {
	return e instanceof X;
}
var _E = ({ editor: e }) => {
	let { selection: t } = e.state;
	if (!gE(t)) return !1;
	let n = 0;
	return Uy(t.ranges[0].$from, (e) => e.type.name === "table")?.node.descendants((e) => {
		if (e.type.name === "table") return !1;
		["tableCell", "tableHeader"].includes(e.type.name) && (n += 1);
	}), n === t.ranges.length && (e.commands.deleteTable(), !0);
};
function vE(e, t) {
	let n = e.mapping.map(t);
	if (Uy(e.selection.$from, (e) => e.type.name === "table")?.pos === n) return;
	let r = e.doc.nodeAt(n);
	if (!r) return;
	let i = n + r.nodeSize - 1;
	e.setSelection(B.near(e.doc.resolve(i), -1));
}
function yE(e) {
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
function bE(e) {
	return e.split("\n").map((e) => !e.includes("|") || !e.includes("`") ? e : yE(e)).join("\n");
}
function xE(e) {
	return (e || "").replaceAll("", " ").replace(/\s+/g, " ").trim();
}
function SE(e, t) {
	return t ? e.split(t).join("\n") : e;
}
function CE(e) {
	return e.replace(/\\.|\|/g, (e) => e === "|" ? "\\|" : e);
}
function wE(e, t, n = {}) {
	if (!e || !e.content || e.content.length === 0) return "";
	let r = [];
	e.content.forEach((e) => {
		let i = [];
		e.content && e.content.forEach((e) => {
			let r = "";
			r = e.content && Array.isArray(e.content) && e.content.length > 1 ? e.content.map((e) => SE(t.renderChildren(e), n.cellLineSeparator)).join("\n") : SE(e.content ? t.renderChildren(e.content) : "", n.cellLineSeparator);
			let a = CE(xE(r.replace(/[ \t]*\r?\n[ \t]*/g, "<br>"))), o = e.type === "tableHeader", s = QT(e.attrs);
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
var TE = new U("preserveCellSelectionOnContextMenu");
function EE(e, t) {
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
function DE(e, t) {
	let n = !1;
	return e.forEachCell((e, r) => {
		t >= r && t < r + e.nodeSize && (n = !0);
	}), n;
}
function OE() {
	return new H({
		key: TE,
		props: { handleDOMEvents: { mousedown(e, t) {
			if (t.button !== 2) return !1;
			let { selection: n } = e.state;
			if (!gE(n) || n.ranges.length < 2) return !1;
			let r = EE(e, t);
			return r == null || !DE(n, r) ? !1 : (t.preventDefault(), !0);
		} } }
	});
}
var kE = YS.create({
	name: "table",
	addOptions() {
		return {
			HTMLAttributes: {},
			resizable: !1,
			renderWrapper: !1,
			handleWidth: 5,
			cellMinWidth: 25,
			View: dE,
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
		let { colgroup: n, tableWidth: r, tableMinWidth: i } = fE(e, this.options.cellMinWidth), a = t.style;
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
				let a = XT(r[n] ?? e.align), o = a ? { align: a } : {};
				i.push(t.createNode("tableHeader", o, [{
					type: "paragraph",
					content: t.parseInline(e.tokens)
				}]));
			}), n.push(t.createNode("tableRow", {}, i));
		}
		return e.rows && e.rows.forEach((e) => {
			let i = [];
			e.forEach((e, n) => {
				let a = XT(r[n] ?? e.align), o = a ? { align: a } : {};
				i.push(t.createNode("tableCell", o, [{
					type: "paragraph",
					content: t.parseInline(e.tokens)
				}]));
			}), n.push(t.createNode("tableRow", {}, i));
		}), t.createNode("table", void 0, n);
	},
	renderMarkdown: (e, t) => wE(e, t),
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
			let s = bE(i);
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
				let o = hE(a.schema, e, t, n);
				if (i) {
					let e = r.selection.from + 1;
					r.replaceSelectionWith(o).scrollIntoView().setSelection(B.near(r.doc.resolve(e)));
				}
				return !0;
			},
			addColumnBefore: () => ({ state: e, dispatch: t }) => Ww(e, t),
			addColumnAfter: () => ({ state: e, dispatch: t }) => Gw(e, t),
			deleteColumn: () => ({ state: e, dispatch: t }) => {
				let n = Uy(e.selection.$from, (e) => e.type.name === "table");
				return qw(e, t && ((e) => {
					n && vE(e, n.pos), t(e);
				}));
			},
			addRowBefore: () => ({ state: e, dispatch: t }) => Xw(e, t),
			addRowAfter: () => ({ state: e, dispatch: t }) => Zw(e, t),
			deleteRow: () => ({ state: e, dispatch: t }) => {
				let n = Uy(e.selection.$from, (e) => e.type.name === "table");
				return $w(e, t && ((e) => {
					n && vE(e, n.pos), t(e);
				}));
			},
			deleteTable: () => ({ state: e, dispatch: t }) => fT(e, t),
			mergeCells: () => ({ state: e, dispatch: t }) => nT(e, t),
			splitCell: () => ({ state: e, dispatch: t }) => rT(e, t),
			toggleHeaderColumn: () => ({ state: e, dispatch: t }) => cT("column")(e, t),
			toggleHeaderRow: () => ({ state: e, dispatch: t }) => cT("row")(e, t),
			toggleHeaderCell: () => ({ state: e, dispatch: t }) => lT(e, t),
			mergeOrSplit: () => ({ state: e, dispatch: t }) => nT(e, t) ? !0 : rT(e, t),
			setCellAttribute: (e, t) => ({ state: n, dispatch: r }) => aT(e, t)(n, r),
			goToNextCell: () => ({ state: e, dispatch: t }) => dT(1)(e, t),
			goToPreviousCell: () => ({ state: e, dispatch: t }) => dT(-1)(e, t),
			fixTables: () => ({ state: e, dispatch: t }) => (t && Bw(e), !0),
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
			Backspace: _E,
			"Mod-Backspace": _E,
			Delete: _E,
			"Mod-Delete": _E
		};
	},
	addProseMirrorPlugins() {
		return [
			...this.options.resizable && this.editor.isEditable ? [FT({
				handleWidth: this.options.handleWidth,
				cellMinWidth: this.options.cellMinWidth,
				defaultCellMinWidth: this.options.cellMinWidth,
				View: null,
				lastColumnResizable: this.options.lastColumnResizable
			})] : [],
			YT({ allowTableNodeSelection: this.options.allowTableNodeSelection }),
			OE()
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
}), AE = Y.create({
	name: "tableKit",
	addExtensions() {
		let e = [];
		return this.options.table !== !1 && e.push(kE.configure(this.options.table)), this.options.tableCell !== !1 && e.push(oE.configure(this.options.tableCell)), this.options.tableHeader !== !1 && e.push(sE.configure(this.options.tableHeader)), this.options.tableRow !== !1 && e.push(cE.configure(this.options.tableRow)), e;
	}
}), jE = 20, ME = (e, t = 0) => {
	let n = [];
	return !e.children.length || t > jE || Array.from(e.children).forEach((e) => {
		e.tagName === "SPAN" ? n.push(e) : e.children.length && n.push(...ME(e, t + 1));
	}), n;
}, NE = (e) => {
	if (!e.children.length) return;
	let t = ME(e);
	t && t.forEach((e) => {
		var t;
		let n = e.getAttribute("style"), r = (t = e.parentElement) == null || (t = t.closest("span")) == null ? void 0 : t.getAttribute("style");
		e.setAttribute("style", `${r};${n}`);
	});
}, PE = bS.create({
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
			getAttrs: (e) => e.hasAttribute("style") ? (this.options.mergeNestedSpanStyles && NE(e), {}) : !1
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
}), FE = Y.create({
	name: "backgroundColor",
	addOptions() {
		return { types: ["textStyle"] };
	},
	addGlobalAttributes() {
		return [{
			types: this.options.types,
			attributes: { backgroundColor: {
				default: null,
				parseHTML: (e) => (Qx(e, "background-color") ?? e.style.backgroundColor)?.replace(/['"]+/g, ""),
				renderHTML: (e) => nS(e.backgroundColor) ? { style: `background-color: ${e.backgroundColor}` } : {}
			} }
		}];
	},
	addCommands() {
		return {
			setBackgroundColor: (e) => ({ chain: t }) => t().setMark("textStyle", { backgroundColor: e }).run(),
			unsetBackgroundColor: () => ({ chain: e }) => e().setMark("textStyle", { backgroundColor: null }).removeEmptyTextStyle().run()
		};
	}
}), IE = Y.create({
	name: "color",
	addOptions() {
		return { types: ["textStyle"] };
	},
	addGlobalAttributes() {
		return [{
			types: this.options.types,
			attributes: { color: {
				default: null,
				parseHTML: (e) => (Qx(e, "color") ?? e.style.color)?.replace(/['"]+/g, ""),
				renderHTML: (e) => nS(e.color) ? { style: `color: ${e.color}` } : {}
			} }
		}];
	},
	addCommands() {
		return {
			setColor: (e) => ({ chain: t }) => t().setMark("textStyle", { color: e }).run(),
			unsetColor: () => ({ chain: e }) => e().setMark("textStyle", { color: null }).removeEmptyTextStyle().run()
		};
	}
}), LE = Y.create({
	name: "fontFamily",
	addOptions() {
		return { types: ["textStyle"] };
	},
	addGlobalAttributes() {
		return [{
			types: this.options.types,
			attributes: { fontFamily: {
				default: null,
				parseHTML: (e) => Qx(e, "font-family") ?? e.style.fontFamily,
				renderHTML: (e) => nS(e.fontFamily) ? { style: `font-family: ${e.fontFamily}` } : {}
			} }
		}];
	},
	addCommands() {
		return {
			setFontFamily: (e) => ({ chain: t }) => t().setMark("textStyle", { fontFamily: e }).run(),
			unsetFontFamily: () => ({ chain: e }) => e().setMark("textStyle", { fontFamily: null }).removeEmptyTextStyle().run()
		};
	}
}), RE = Y.create({
	name: "fontSize",
	addOptions() {
		return { types: ["textStyle"] };
	},
	addGlobalAttributes() {
		return [{
			types: this.options.types,
			attributes: { fontSize: {
				default: null,
				parseHTML: (e) => Qx(e, "font-size") ?? e.style.fontSize,
				renderHTML: (e) => nS(e.fontSize) ? { style: `font-size: ${e.fontSize}` } : {}
			} }
		}];
	},
	addCommands() {
		return {
			setFontSize: (e) => ({ chain: t }) => t().setMark("textStyle", { fontSize: e }).run(),
			unsetFontSize: () => ({ chain: e }) => e().setMark("textStyle", { fontSize: null }).removeEmptyTextStyle().run()
		};
	}
}), zE = Y.create({
	name: "lineHeight",
	addOptions() {
		return { types: ["textStyle"] };
	},
	addGlobalAttributes() {
		return [{
			types: this.options.types,
			attributes: { lineHeight: {
				default: null,
				parseHTML: (e) => Qx(e, "line-height") ?? e.style.lineHeight,
				renderHTML: (e) => nS(e.lineHeight) ? { style: `line-height: ${e.lineHeight}` } : {}
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
		return this.options.backgroundColor !== !1 && e.push(FE.configure(this.options.backgroundColor)), this.options.color !== !1 && e.push(IE.configure(this.options.color)), this.options.fontFamily !== !1 && e.push(LE.configure(this.options.fontFamily)), this.options.fontSize !== !1 && e.push(RE.configure(this.options.fontSize)), this.options.lineHeight !== !1 && e.push(zE.configure(this.options.lineHeight)), this.options.textStyle !== !1 && e.push(PE.configure(this.options.textStyle)), e;
	}
});
// node_modules/@tiptap/core/dist/jsx-runtime/jsx-runtime.js
var BE = /* @__PURE__ */ new WeakSet(), VE = /* @__PURE__ */ new WeakSet();
function HE(e) {
	let t = e;
	return BE.add(t), t;
}
function UE(e) {
	return Array.isArray(e) && BE.has(e);
}
function WE(e) {
	return e.flatMap((e) => e == null ? [] : Array.isArray(e) && VE.has(e) && !UE(e) ? WE(e) : [e]);
}
function GE(e, t) {
	if (e === "slot") return 0;
	if (e instanceof Function) {
		let n = e(t);
		return Array.isArray(n) && !UE(n) && !VE.has(n) ? HE(n) : n;
	}
	let { children: n, ...r } = t ?? {};
	if (e === "svg") throw Error("SVG elements are not supported in the JSX syntax, use the array syntax instead");
	if (Array.isArray(n)) {
		if (UE(n)) return HE([
			e,
			r,
			n
		]);
		if (n.length === 0) return HE([e, r]);
		let t = WE(n);
		return t.length === 0 ? HE([e, r]) : HE([
			e,
			r,
			...t
		]);
	}
	return HE(n == null ? [e, r] : [
		e,
		r,
		n
	]);
}
var KE = (e, t) => GE(e, t), qE = (e, t) => {
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
}, JE = /^\s*>\s$/, YE = YS.create({
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
		return /* @__PURE__ */ KE("blockquote", {
			...J(this.options.HTMLAttributes, e),
			children: /* @__PURE__ */ KE("slot", {})
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
			Backspace: () => qE(this.editor, this.type)
		};
	},
	addInputRules() {
		return [JS({
			find: JE,
			type: this.type
		})];
	}
}), XE = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))$/, ZE = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))/g, QE = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))$/, $E = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))/g, eD = bS.create({
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
		return /* @__PURE__ */ KE("strong", {
			...J(this.options.HTMLAttributes, e),
			children: /* @__PURE__ */ KE("slot", {})
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
		return [GS({
			find: XE,
			type: this.type
		}), GS({
			find: QE,
			type: this.type
		})];
	},
	addPasteRules() {
		return [XS({
			find: ZE,
			type: this.type
		}), XS({
			find: $E,
			type: this.type
		})];
	}
}), tD = (e) => {
	let t = /`([^`]+)`(?!`)$/.exec(e);
	return !t || t.index > 0 && e[t.index - 1] === "`" ? null : {
		index: t.index,
		text: t[0],
		replaceWith: t[1]
	};
}, nD = (e) => {
	let t = /`([^`]+)`(?!`)/g, n = [], r;
	for (; (r = t.exec(e)) !== null;) r.index > 0 && e[r.index - 1] === "`" || n.push({
		index: r.index,
		text: r[0],
		replaceWith: r[1]
	});
	return n;
};
function rD(e) {
	let t = new Set((e.match(/`+/g) || []).map((e) => e.length)), n = 1;
	for (; t.has(n);) n += 1;
	return n;
}
var iD = bS.create({
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
		let i = typeof (n == null || (r = n.meta) == null ? void 0 : r.markText) == "string" ? n.meta.markText : "", a = "`".repeat(rD(i)), o = i.startsWith("`") || i.endsWith("`") ? " " : "";
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
		return [GS({
			find: tD,
			type: this.type
		})];
	},
	addPasteRules() {
		return [XS({
			find: nD,
			type: this.type
		})];
	}
}), aD = 4, oD = /^```([a-z]+)?[\s\n]$/, sD = /^~~~([a-z]+)?[\s\n]$/, cD = YS.create({
	name: "codeBlock",
	addOptions() {
		return {
			languageClassPrefix: "language-",
			exitOnTripleEnter: !0,
			exitOnArrowDown: !0,
			exitOnArrowUp: !0,
			defaultLanguage: null,
			enableTabIndentation: !1,
			tabSize: aD,
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
				let t = this.options.tabSize ?? aD, { state: n } = e, { selection: r } = n, { $from: i, empty: a } = r;
				if (i.parent.type !== this.type) return !1;
				let o = " ".repeat(t);
				return a ? e.commands.insertContent(o) : e.commands.command(({ tr: e }) => {
					let { from: t, to: i } = r, a = n.doc.textBetween(t, i, "\n", "\n").split("\n").map((e) => o + e).join("\n");
					return e.replaceWith(t, i, n.schema.text(a)), !0;
				});
			},
			"Shift-Tab": ({ editor: e }) => {
				if (!this.options.enableTabIndentation) return !1;
				let t = this.options.tabSize ?? aD, { state: n } = e, { selection: r } = n, { $from: i, empty: a } = r;
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
		return [qS({
			find: oD,
			type: this.type,
			getAttributes: (e) => ({ language: e[1] })
		}), qS({
			find: sD,
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
}), lD = YS.create({
	name: "doc",
	topNode: !0,
	content: "block+",
	renderMarkdown: (e, t) => e.content ? t.renderChildren(e.content, "\n\n") : ""
}), uD = YS.create({
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
}), dD = YS.create({
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
		return this.options.levels.map((e) => qS({
			find: RegExp(`^(#{${Math.min(...this.options.levels)},${e}})\\s$`),
			type: this.type,
			getAttributes: { level: e }
		}));
	}
}), fD = YS.create({
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
			if (!Xx(t, t.schema.nodes[this.name])) return !1;
			let { selection: n } = t, { $to: r } = n, i = e();
			return Lb(n) ? i.insertContentAt(r.pos, { type: this.name }) : i.insertContent({ type: this.name }), i.command(({ state: e, tr: t, dispatch: n }) => {
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
		return [KS({
			find: /^(?:---|—-|___\s|\*\*\*\s)$/,
			type: this.type
		})];
	}
}), pD = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))$/, mD = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))/g, hD = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))$/, gD = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))/g, _D = bS.create({
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
		return [GS({
			find: pD,
			type: this.type
		}), GS({
			find: hD,
			type: this.type
		})];
	},
	addPasteRules() {
		return [XS({
			find: mD,
			type: this.type
		}), XS({
			find: gD,
			type: this.type
		})];
	}
}), vD = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2odyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos6kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rck0msd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12b0cam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2oodside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", yD = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", bD = "numeric", xD = "ascii", SD = "alpha", CD = "asciinumeric", wD = "alphanumeric", TD = "domain", ED = "emoji", DD = "scheme", OD = "slashscheme", kD = "whitespace";
function AD(e, t) {
	return e in t || (t[e] = []), t[e];
}
function jD(e, t, n) {
	t[bD] && (t[CD] = !0, t[wD] = !0), t[xD] && (t[CD] = !0, t[SD] = !0), t[CD] && (t[wD] = !0), t[SD] && (t[wD] = !0), t[wD] && (t[TD] = !0), t[ED] && (t[TD] = !0);
	for (let r in t) {
		let t = AD(r, n);
		t.indexOf(e) < 0 && t.push(e);
	}
}
function MD(e, t) {
	let n = {};
	for (let r in t) t[r].indexOf(e) >= 0 && (n[r] = !0);
	return n;
}
function ND(e = null) {
	this.j = {}, this.jr = [], this.jd = null, this.t = e;
}
ND.groups = {}, ND.prototype = {
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
		r ||= ND.groups;
		let i;
		return t && t.j ? i = t : (i = new ND(t), n && r && jD(t, n, r)), this.jr.push([e, i]), i;
	},
	ts(e, t, n, r) {
		let i = this, a = e.length;
		if (!a) return i;
		for (let t = 0; t < a - 1; t++) i = i.tt(e[t]);
		return i.tt(e[a - 1], t, n, r);
	},
	tt(e, t, n, r) {
		r ||= ND.groups;
		let i = this;
		if (t && t.j) return i.j[e] = t, t;
		let a = t, o, s = i.go(e);
		return s ? (o = new ND(), Object.assign(o.j, s.j), o.jr.push.apply(o.jr, s.jr), o.jd = s.jd, o.t = s.t) : o = new ND(), a && (r && (o.t && typeof o.t == "string" ? jD(a, Object.assign(MD(o.t, r), n), r) : n && jD(a, n, r)), o.t = a), i.j[e] = o, o;
	}
};
var Z = (e, t, n, r, i) => e.ta(t, n, r, i), PD = (e, t, n, r, i) => e.tr(t, n, r, i), FD = (e, t, n, r, i) => e.ts(t, n, r, i), Q = (e, t, n, r, i) => e.tt(t, n, r, i), ID = "WORD", LD = "UWORD", RD = "ASCIINUMERICAL", zD = "ALPHANUMERICAL", BD = "LOCALHOST", VD = "TLD", HD = "UTLD", UD = "SCHEME", WD = "SLASH_SCHEME", GD = "NUM", KD = "WS", qD = "NL", JD = "OPENBRACE", YD = "CLOSEBRACE", XD = "OPENBRACKET", ZD = "CLOSEBRACKET", QD = "OPENPAREN", $D = "CLOSEPAREN", eO = "OPENANGLEBRACKET", tO = "CLOSEANGLEBRACKET", nO = "FULLWIDTHLEFTPAREN", rO = "FULLWIDTHRIGHTPAREN", iO = "LEFTCORNERBRACKET", aO = "RIGHTCORNERBRACKET", oO = "LEFTWHITECORNERBRACKET", sO = "RIGHTWHITECORNERBRACKET", cO = "FULLWIDTHLESSTHAN", lO = "FULLWIDTHGREATERTHAN", uO = "AMPERSAND", dO = "APOSTROPHE", fO = "ASTERISK", pO = "AT", mO = "BACKSLASH", hO = "BACKTICK", gO = "CARET", _O = "COLON", vO = "COMMA", yO = "DOLLAR", bO = "DOT", xO = "EQUALS", SO = "EXCLAMATION", CO = "HYPHEN", wO = "PERCENT", TO = "PIPE", EO = "PLUS", DO = "POUND", OO = "QUERY", kO = "QUOTE", AO = "FULLWIDTHMIDDLEDOT", jO = "SEMI", MO = "SLASH", NO = "TILDE", PO = "UNDERSCORE", FO = "EMOJI", IO = "SYM", LO = /*#__PURE__*/ Object.freeze({
	__proto__: null,
	ALPHANUMERICAL: zD,
	AMPERSAND: uO,
	APOSTROPHE: dO,
	ASCIINUMERICAL: RD,
	ASTERISK: fO,
	AT: pO,
	BACKSLASH: mO,
	BACKTICK: hO,
	CARET: gO,
	CLOSEANGLEBRACKET: tO,
	CLOSEBRACE: YD,
	CLOSEBRACKET: ZD,
	CLOSEPAREN: $D,
	COLON: _O,
	COMMA: vO,
	DOLLAR: yO,
	DOT: bO,
	EMOJI: FO,
	EQUALS: xO,
	EXCLAMATION: SO,
	FULLWIDTHGREATERTHAN: lO,
	FULLWIDTHLEFTPAREN: nO,
	FULLWIDTHLESSTHAN: cO,
	FULLWIDTHMIDDLEDOT: AO,
	FULLWIDTHRIGHTPAREN: rO,
	HYPHEN: CO,
	LEFTCORNERBRACKET: iO,
	LEFTWHITECORNERBRACKET: oO,
	LOCALHOST: BD,
	NL: qD,
	NUM: GD,
	OPENANGLEBRACKET: eO,
	OPENBRACE: JD,
	OPENBRACKET: XD,
	OPENPAREN: QD,
	PERCENT: wO,
	PIPE: TO,
	PLUS: EO,
	POUND: DO,
	QUERY: OO,
	QUOTE: kO,
	RIGHTCORNERBRACKET: aO,
	RIGHTWHITECORNERBRACKET: sO,
	SCHEME: UD,
	SEMI: jO,
	SLASH: MO,
	SLASH_SCHEME: WD,
	SYM: IO,
	TILDE: NO,
	TLD: VD,
	UNDERSCORE: PO,
	UTLD: HD,
	UWORD: LD,
	WORD: ID,
	WS: KD
}), RO = /[a-z]/, zO = /[a-z]/i, BO = /[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}]|\u{FE0F}/u;
try {
	zO = /* @__PURE__ */ RegExp("\\p{L}", "u"), BO = /* @__PURE__ */ RegExp("\\p{Emoji}", "u");
} catch {}
var VO = /\d/, HO = /\s/, UO = "\r", WO = "\n", GO = "️", KO = "‍", qO = "￼", JO = null, YO = null;
function XO(e = []) {
	let t = {};
	ND.groups = t;
	let n = new ND();
	JO ??= ek(vD), YO ??= ek(yD), Q(n, "'", dO), Q(n, "{", JD), Q(n, "}", YD), Q(n, "[", XD), Q(n, "]", ZD), Q(n, "(", QD), Q(n, ")", $D), Q(n, "<", eO), Q(n, ">", tO), Q(n, "（", nO), Q(n, "）", rO), Q(n, "「", iO), Q(n, "」", aO), Q(n, "『", oO), Q(n, "』", sO), Q(n, "＜", cO), Q(n, "＞", lO), Q(n, "&", uO), Q(n, "*", fO), Q(n, "@", pO), Q(n, "`", hO), Q(n, "^", gO), Q(n, ":", _O), Q(n, ",", vO), Q(n, "$", yO), Q(n, ".", bO), Q(n, "=", xO), Q(n, "!", SO), Q(n, "-", CO), Q(n, "%", wO), Q(n, "|", TO), Q(n, "+", EO), Q(n, "#", DO), Q(n, "?", OO), Q(n, "\"", kO), Q(n, "/", MO), Q(n, ";", jO), Q(n, "~", NO), Q(n, "_", PO), Q(n, "\\", mO), Q(n, "・", AO);
	let r = PD(n, VO, GD, { [bD]: !0 });
	PD(r, VO, r);
	let i = PD(r, RO, RD, { [CD]: !0 }), a = PD(r, zO, zD, { [wD]: !0 }), o = PD(n, RO, ID, { [xD]: !0 });
	PD(o, VO, i), PD(o, RO, o), PD(i, VO, i), PD(i, RO, i);
	let s = PD(n, zO, LD, { [SD]: !0 });
	PD(s, RO), PD(s, VO, a), PD(s, zO, s), PD(a, VO, a), PD(a, RO), PD(a, zO, a);
	let c = Q(n, WO, qD, { [kD]: !0 }), l = Q(n, UO, KD, { [kD]: !0 }), u = PD(n, HO, KD, { [kD]: !0 });
	Q(n, qO, u), Q(l, WO, c), Q(l, qO, u), PD(l, HO, u), Q(u, UO), Q(u, WO), PD(u, HO, u), Q(u, qO, u);
	let d = PD(n, BO, FO, { [ED]: !0 });
	Q(d, "#"), PD(d, BO, d), Q(d, GO, d);
	let f = Q(d, KO);
	Q(f, "#"), PD(f, BO, d);
	let p = [[RO, o], [VO, i]], m = [
		[RO, null],
		[zO, s],
		[VO, a]
	];
	for (let e = 0; e < JO.length; e++) $O(n, JO[e], VD, ID, p);
	for (let e = 0; e < YO.length; e++) $O(n, YO[e], HD, LD, m);
	jD(VD, {
		tld: !0,
		ascii: !0
	}, t), jD(HD, {
		utld: !0,
		alpha: !0
	}, t), $O(n, "file", UD, ID, p), $O(n, "mailto", UD, ID, p), $O(n, "http", WD, ID, p), $O(n, "https", WD, ID, p), $O(n, "ftp", WD, ID, p), $O(n, "ftps", WD, ID, p), jD(UD, {
		scheme: !0,
		ascii: !0
	}, t), jD(WD, {
		slashscheme: !0,
		ascii: !0
	}, t), e = e.sort((e, t) => e[0] > t[0] ? 1 : -1);
	for (let t = 0; t < e.length; t++) {
		let r = e[t][0], i = e[t][1] ? { [DD]: !0 } : { [OD]: !0 };
		r.indexOf("-") >= 0 ? i[TD] = !0 : RO.test(r) ? VO.test(r) ? i[CD] = !0 : i[xD] = !0 : i[bD] = !0, FD(n, r, r, i);
	}
	return FD(n, "localhost", BD, { ascii: !0 }), n.jd = new ND(IO), {
		start: n,
		tokens: Object.assign({ groups: t }, LO)
	};
}
function ZO(e, t) {
	let n = QO(t.replace(/[A-Z]/g, (e) => e.toLowerCase())), r = n.length, i = [], a = 0, o = 0;
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
function QO(e) {
	let t = [], n = e.length, r = 0;
	for (; r < n;) {
		let i = e.charCodeAt(r), a, o = i < 55296 || i > 56319 || r + 1 === n || (a = e.charCodeAt(r + 1)) < 56320 || a > 57343 ? e[r] : e.slice(r, r + 2);
		t.push(o), r += o.length;
	}
	return t;
}
function $O(e, t, n, r, i) {
	let a, o = t.length;
	for (let n = 0; n < o - 1; n++) {
		let o = t[n];
		e.j[o] ? a = e.j[o] : (a = new ND(r), a.jr = i.slice(), e.j[o] = a), e = a;
	}
	return a = new ND(n), a.jr = i.slice(), e.j[t[o - 1]] = a, a;
}
function ek(e) {
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
var tk = {
	defaultProtocol: "http",
	events: null,
	format: rk,
	formatHref: rk,
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
function nk(e, t = null) {
	let n = Object.assign({}, tk);
	e && (n = Object.assign(n, e instanceof nk ? e.o : e));
	let r = n.ignoreTags, i = [];
	for (let e = 0; e < r.length; e++) i.push(r[e].toUpperCase());
	this.o = n, t && (this.defaultRender = t), this.ignoreTags = i, this.ignoreClasses = n.ignoreClasses.slice();
}
nk.prototype = {
	o: tk,
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
		return i && (typeof i == "object" ? (i = n.t in i ? i[n.t] : tk[e], typeof i == "function" && r && (i = i(t, n))) : typeof i == "function" && r && (i = i(t, n.t, n)), i);
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
function rk(e) {
	return e;
}
function ik(e, t) {
	this.t = "token", this.v = e, this.tk = t;
}
ik.prototype = {
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
	toObject(e = tk.defaultProtocol) {
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
function ak(e, t) {
	class n extends ik {
		constructor(t, n) {
			super(t, n), this.t = e;
		}
	}
	for (let e in t) n.prototype[e] = t[e];
	return n.t = e, n;
}
var ok = ak("email", {
	isLink: !0,
	toHref() {
		return "mailto:" + this.toString();
	}
}), sk = ak("text"), ck = ak("nl"), lk = ak("url", {
	isLink: !0,
	toHref(e = tk.defaultProtocol) {
		return this.hasProtocol() ? this.v : `${e}://${this.v}`;
	},
	hasProtocol() {
		let e = this.tk;
		return e.length >= 2 && e[0].t !== BD && e[1].t === _O;
	}
}), uk = (e) => new ND(e);
function dk({ groups: e }) {
	let t = e.domain.concat([
		uO,
		fO,
		pO,
		mO,
		hO,
		gO,
		yO,
		xO,
		CO,
		GD,
		wO,
		TO,
		EO,
		DO,
		MO,
		IO,
		NO,
		PO
	]), n = [
		dO,
		_O,
		vO,
		bO,
		SO,
		wO,
		OO,
		kO,
		jO,
		eO,
		tO,
		JD,
		YD,
		ZD,
		XD,
		QD,
		$D,
		nO,
		rO,
		iO,
		aO,
		oO,
		sO,
		cO,
		lO
	], r = [
		uO,
		dO,
		fO,
		mO,
		hO,
		gO,
		yO,
		xO,
		CO,
		JD,
		YD,
		wO,
		TO,
		EO,
		DO,
		OO,
		MO,
		IO,
		NO,
		PO
	], i = uk(), a = Q(i, NO);
	Z(a, r, a), Z(a, e.domain, a);
	let o = uk(), s = uk(), c = uk();
	Z(i, e.domain, o), Z(i, e.scheme, s), Z(i, e.slashscheme, c), Z(o, r, a), Z(o, e.domain, o);
	let l = Q(o, pO);
	Q(a, pO, l), Q(s, pO, l), Q(c, pO, l);
	let u = Q(a, bO);
	Z(u, r, a), Z(u, e.domain, a);
	let d = uk();
	Z(l, e.domain, d), Z(d, e.domain, d);
	let f = Q(d, bO);
	Z(f, e.domain, d);
	let p = uk(ok);
	Z(f, e.tld, p), Z(f, e.utld, p), Q(l, BD, p);
	let m = Q(d, CO);
	Q(m, CO, m), Z(m, e.domain, d), Z(p, e.domain, d), Q(p, bO, f), Q(p, CO, m);
	let h = Q(o, CO), g = Q(o, bO);
	Q(h, CO, h), Z(h, e.domain, o), Z(g, r, a), Z(g, e.domain, o);
	let _ = uk(lk);
	Z(g, e.tld, _), Z(g, e.utld, _), Z(_, e.domain, o), Z(_, r, a), Q(_, bO, g), Q(_, CO, h), Q(_, pO, l);
	let v = Q(_, _O), y = uk(lk);
	Z(v, e.numeric, y);
	let b = uk(lk), x = uk();
	Z(b, t, b), Z(b, n, x), Z(x, t, b), Z(x, n, x), Q(_, MO, b), Q(y, MO, b), Q(_, OO, x), Q(_, DO, b), Q(y, OO, x), Q(y, DO, b);
	let S = Q(s, _O), C = Q(Q(Q(c, _O), MO), MO);
	Z(s, e.domain, o), Q(s, bO, g), Q(s, CO, h), Z(c, e.domain, o), Q(c, bO, g), Q(c, CO, h), Z(S, e.domain, b), Q(S, MO, b), Q(S, OO, b), Z(C, e.domain, b), Z(C, t, b), Q(C, MO, b);
	let w = [
		[JD, YD],
		[XD, ZD],
		[QD, $D],
		[eO, tO],
		[nO, rO],
		[iO, aO],
		[oO, sO],
		[cO, lO]
	];
	for (let e = 0; e < w.length; e++) {
		let [r, i] = w[e], a = Q(b, r);
		Q(x, r, a);
		let o = uk(lk);
		Z(a, t, o);
		let s = uk();
		Z(a, n, s), Q(a, i, b), Z(o, t, o), Z(o, n, s), Z(s, t, o), Z(s, n, s), Q(o, i, b), Q(s, i, b);
	}
	return Q(i, BD, _), Q(i, qD, ck), {
		start: i,
		tokens: LO
	};
}
function fk(e, t, n) {
	let r = n.length, i = 0, a = [], o = [], s = [];
	for (; i < r;) {
		let c = e, l = null, u = null, d = 0, f = null, p = -1, m = [];
		for (; i < r && !(l = c.go(n[i].t));) o.push(n[i++]);
		for (; i < r && (u = l || c.go(n[i].t));) if (l = null, c = u, i++, d++, c.accepts()) p = 0, f = c, m = [];
		else if (p >= 0 && p++, m.push(c), s[i] && s[i].has(c)) break;
		for (let e = 0, t = i - m.length + 1; e < m.length; e++, t++) (s[t] || (s[t] = /* @__PURE__ */ new Set())).add(m[e]);
		if (p < 0) i -= d, i < r && (o.push(n[i]), i++);
		else {
			o.length > 0 && (a.push(pk(sk, t, o)), o = []), i -= p, d -= p;
			let e = f.t, r = n.slice(i - d, i);
			a.push(pk(e, t, r));
		}
	}
	return o.length > 0 && a.push(pk(sk, t, o)), a;
}
function pk(e, t, n) {
	let r = n[0].s, i = n[n.length - 1].e;
	return new e(t.slice(r, i), n);
}
var mk = typeof console < "u" && console && console.warn || (() => {}), hk = "until manual call of linkify.init(). Register all schemes and plugins before invoking linkify the first time.", $ = {
	scanner: null,
	parser: null,
	tokenQueue: [],
	pluginQueue: [],
	customSchemes: [],
	initialized: !1
};
function gk() {
	return ND.groups = {}, $.scanner = null, $.parser = null, $.tokenQueue = [], $.pluginQueue = [], $.customSchemes = [], $.initialized = !1, $;
}
function _k(e, t = !1) {
	if ($.initialized && mk(`linkifyjs: already initialized - will not register custom scheme "${e}" ${hk}`), !/^[0-9a-z]+(-[0-9a-z]+)*$/.test(e)) throw Error("linkifyjs: incorrect scheme format.\n1. Must only contain digits, lowercase ASCII letters or \"-\"\n2. Cannot start or end with \"-\"\n3. \"-\" cannot repeat");
	$.customSchemes.push([e, t]);
}
function vk() {
	$.scanner = XO($.customSchemes);
	for (let e = 0; e < $.tokenQueue.length; e++) $.tokenQueue[e][1]({ scanner: $.scanner });
	$.parser = dk($.scanner.tokens);
	for (let e = 0; e < $.pluginQueue.length; e++) $.pluginQueue[e][1]({
		scanner: $.scanner,
		parser: $.parser
	});
	return $.initialized = !0, $;
}
function yk(e) {
	return $.initialized || vk(), fk($.parser.start, e, ZO($.scanner.start, e));
}
yk.scan = ZO;
function bk(e, t = null, n = null) {
	if (t && typeof t == "object") {
		if (n) throw Error(`linkifyjs: Invalid link type ${t}; must be a string`);
		n = t, t = null;
	}
	let r = new nk(n), i = yk(e), a = [];
	for (let e = 0; e < i.length; e++) {
		let n = i[e];
		n.isLink && (!t || n.t === t) && r.check(n) && a.push(n.toFormattedObject(r));
	}
	return a;
}
// node_modules/@tiptap/extension-link/dist/index.js
var xk = "[\0- \xA0 ᠎ -\u2029 　]", Sk = new RegExp(xk), Ck = RegExp(`${xk}$`), wk = RegExp(`${xk}+$`), Tk = new RegExp(xk, "g");
function Ek(e, t, n) {
	let r = e.doc.resolve(t.to);
	if (!r.nodeBefore?.isText) return;
	let i = e.doc.textBetween(t.from, t.to, "￼", "￼").match(wk)?.[0];
	if (!i) return;
	let a = t.to - i.length, o = wb(a, t.to, e.doc).filter((e) => e.mark.type === n);
	if (!o.length) return;
	let { nodeAfter: s } = r;
	if (s && o.some((e) => e.mark.isInSet(s.marks))) return;
	let c = e.storedMarks;
	e.removeMark(a, t.to, n), e.setStoredMarks(c), e.selection.empty && e.selection.from === t.to && e.removeStoredMark(n);
}
function Dk(e) {
	return e.length === 1 ? e[0].isLink : e.length === 3 && e[1].isLink ? ["()", "[]"].includes(e[0].value + e[2].value) : !1;
}
function Ok(e) {
	return new H({
		key: new U("autolink"),
		appendTransaction: (t, n, r) => {
			let i = t.some((e) => e.docChanged) && !n.doc.eq(r.doc), a = t.some((e) => e.getMeta("preventAutolink"));
			if (!i || a) return;
			let { tr: o } = r, s = Vy(n.doc, [...t]);
			if (!t.some(bv)) {
				let t = [];
				s.steps.forEach((e, n) => {
					if (!(e instanceof td) || !e.slice.size) return;
					let r = s.mapping.slice(n + 1), i = r.map(e.from, 1), a = r.map(e.from + e.slice.size, -1);
					i < a && t.push({
						from: i,
						to: a
					});
				}), t.sort((e, t) => t.to - e.to), t.forEach((t) => Ek(o, t, e.type));
			}
			if (Cb(s).forEach(({ newRange: t }) => {
				let n = Hy(r.doc, t, (e) => e.isTextblock), i, a;
				if (n.length > 1) i = n[0], a = r.doc.textBetween(i.pos, i.pos + i.node.nodeSize, void 0, " ");
				else if (n.length) {
					let e = r.doc.textBetween(t.from, t.to, " ", " ");
					if (!Ck.test(e)) return;
					i = n[0], a = r.doc.textBetween(i.pos, t.to, void 0, " ");
				}
				if (i && a) {
					let t = a.split(Sk).filter(Boolean);
					if (t.length <= 0) return !1;
					let n = t[t.length - 1], s = i.pos + a.lastIndexOf(n);
					if (!n) return !1;
					let c = yk(n).map((t) => t.toObject(e.defaultProtocol));
					if (!Dk(c)) return !1;
					c.filter((e) => e.isLink).map((e) => ({
						...e,
						from: s + e.start + 1,
						to: s + e.end + 1
					})).filter((e) => !r.schema.marks.code || !r.doc.rangeHasMark(e.from, e.to, r.schema.marks.code)).filter((t) => e.validate(t.value)).filter((t) => e.shouldAutoLink(t.value)).forEach((t) => {
						wb(t.from, t.to, r.doc).some((t) => t.mark.type === e.type) || o.addMark(t.from, t.to, e.type.create({ href: t.href }));
					});
				}
			}), o.steps.length) return o;
		}
	});
}
function kk(e) {
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
				let n = bb(t.state, e.type.name), r = i.href ?? n.href, o = i.target ?? n.target;
				r && (window.open(r, o), a = !0);
			}
			return a;
		} }
	});
}
var Ak = /\[([^[\]]+)\]\(((?:[^\s()]|\([^\s()]*\))+)(?:\s+(?:(["'])(.*?)\3|“(.*?)”|‘(.*?)’))?\)$/, jk = /\[([^[\]]+)\]\(((?:[^\s()]|\([^\s()]*\))+)(?:\s+(?:(["'])(.*?)\3|“(.*?)”|‘(.*?)’))?\)/g;
function Mk(e, t) {
	let n = 0;
	for (let r = t - 1; r >= 0 && e[r] === "\\"; --r) n += 1;
	return n % 2 == 1;
}
function Nk(e, t) {
	let n = 0, r = 0;
	for (; r < t;) {
		if (e[r] !== "`" || n === 0 && Mk(e, r)) {
			r += 1;
			continue;
		}
		let i = 0;
		for (; r < t && e[r] === "`";) i += 1, r += 1;
		n === 0 ? n = i : i === n && (n = 0);
	}
	return n > 0;
}
function Pk(e, t, n) {
	let [, r, i] = t;
	return (t.index ? e[t.index - 1] : void 0) === "!" || Mk(e, t.index ?? 0) || Nk(e, t.index ?? 0) ? !1 : !!r.trim() && n(i);
}
function Fk(e) {
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
function Ik(e, t) {
	return e.index < t.index + t.text.length && t.index < e.index + e.text.length;
}
function Lk(e) {
	return {
		href: e.data?.href,
		title: e.data?.title ?? null
	};
}
function Rk(e) {
	let t = GS({
		find: (t) => {
			let n = Ak.exec(t);
			return !n || !Pk(t, n, e.isAllowedHref) ? null : Fk(n);
		},
		type: e.type,
		getAttributes: Lk
	});
	return new fS({
		find: t.find,
		handler: (e) => {
			let n = t.handler(e);
			return n !== null && e.state.tr.steps.length && e.state.tr.setMeta("preventAutolink", !0), n;
		}
	});
}
function zk(e) {
	let t = XS({
		find: (t) => {
			let n = [];
			for (let r of t.matchAll(jk)) Pk(t, r, e.isAllowedHref) && n.push(Fk(r));
			let r = (e.findPlainUrls?.call(e, t) ?? []).filter((e) => !n.some((t) => Ik(t, e)));
			return [...n, ...r];
		},
		type: e.type,
		getAttributes: Lk
	});
	return new xS({
		find: t.find,
		handler: (e) => {
			let n = t.handler(e);
			return n !== null && e.state.tr.steps.length && e.match.data?.markdown && e.state.tr.setMeta("preventAutolink", !0), n;
		}
	});
}
function Bk(e) {
	return new H({
		key: new U("handlePasteLink"),
		props: { handlePaste: (t, n, r) => {
			let { shouldAutoLink: i } = e, { state: a } = t, { selection: o } = a, { empty: s } = o;
			if (s) return !1;
			let c = "";
			r.content.forEach((e) => {
				c += e.textContent;
			});
			let l = bk(c, { defaultProtocol: e.defaultProtocol }).find((e) => e.isLink && e.value === c);
			return !c || !l || i !== void 0 && !i(l.value) ? !1 : e.editor.commands.setMark(e.type, { href: l.href });
		} }
	});
}
function Vk(e, t) {
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
	}), !e || e.replace(Tk, "").match(RegExp(`^(?:(?:${n.map((e) => e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")).join("|")}):|[^a-z]|[a-z0-9+.\\-]+(?:[^a-z+.\\-:]|$))`, "i"));
}
var Hk = bS.create({
	name: "link",
	priority: 1e3,
	keepOnSplit: !1,
	exitable: !0,
	onCreate() {
		this.options.validate && !this.options.shouldAutoLink && (this.options.shouldAutoLink = this.options.validate, console.warn("The `validate` option is deprecated. Rename to the `shouldAutoLink` option instead.")), this.options.protocols.forEach((e) => {
			typeof e == "string" ? _k(e) : _k(e.scheme, e.optionalSlashes);
		});
	},
	onDestroy() {
		gk();
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
			isAllowedUri: (e, t) => !!Vk(e, t.protocols),
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
					defaultValidate: (e) => !!Vk(e, this.options.protocols),
					protocols: this.options.protocols,
					defaultProtocol: this.options.defaultProtocol
				}) ? !1 : null;
			}
		}];
	},
	renderHTML({ HTMLAttributes: e }) {
		return this.options.isAllowedUri(e.href, {
			defaultValidate: (e) => !!Vk(e, this.options.protocols),
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
					defaultValidate: (e) => !!Vk(e, this.options.protocols),
					protocols: this.options.protocols,
					defaultProtocol: this.options.defaultProtocol
				}) ? t().setMark(this.name, e).setMeta("preventAutolink", !0).run() : !1;
			},
			toggleLink: (e) => ({ chain: t }) => {
				let { href: n } = e || {};
				return n && !this.options.isAllowedUri(n, {
					defaultValidate: (e) => !!Vk(e, this.options.protocols),
					protocols: this.options.protocols,
					defaultProtocol: this.options.defaultProtocol
				}) ? !1 : t().toggleMark(this.name, e, { extendEmptyMarkRange: !0 }).setMeta("preventAutolink", !0).run();
			},
			unsetLink: () => ({ chain: e }) => e().unsetMark(this.name, { extendEmptyMarkRange: !0 }).setMeta("preventAutolink", !0).run()
		};
	},
	addInputRules() {
		return this.options.markdownLinks ? [Rk({
			type: this.type,
			isAllowedHref: (e) => this.options.isAllowedUri(e, {
				defaultValidate: (e) => !!Vk(e, this.options.protocols),
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
				bk(e, { defaultProtocol: r }).filter((e) => e.isLink && this.options.isAllowedUri(e.value, {
					defaultValidate: (e) => !!Vk(e, n),
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
		return this.options.markdownLinks ? [zk({
			type: this.type,
			isAllowedHref: (e) => this.options.isAllowedUri(e, {
				defaultValidate: (e) => !!Vk(e, this.options.protocols),
				protocols: this.options.protocols,
				defaultProtocol: this.options.defaultProtocol
			}),
			findPlainUrls: e
		})] : [XS({
			find: e,
			type: this.type,
			getAttributes: (e) => ({ href: e.data?.href })
		})];
	},
	addProseMirrorPlugins() {
		let e = [], { protocols: t, defaultProtocol: n } = this.options;
		return this.options.autolink && e.push(Ok({
			type: this.type,
			defaultProtocol: this.options.defaultProtocol,
			validate: (e) => this.options.isAllowedUri(e, {
				defaultValidate: (e) => !!Vk(e, t),
				protocols: t,
				defaultProtocol: n
			}),
			shouldAutoLink: this.options.shouldAutoLink
		})), e.push(kk({
			type: this.type,
			editor: this.editor,
			openOnClick: this.options.openOnClick === "whenNotEditable" || this.options.openOnClick,
			enableClickSelection: this.options.enableClickSelection
		})), this.options.linkOnPaste && e.push(Bk({
			editor: this.editor,
			defaultProtocol: this.options.defaultProtocol,
			type: this.type,
			shouldAutoLink: this.options.shouldAutoLink
		})), e;
	}
}), Uk = "&nbsp;", Wk = "\xA0", Gk = YS.create({
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
		return n.length === 1 && n[0].type === "text" && (n[0].raw === Uk || n[0].text === Uk || n[0].raw === Wk || n[0].text === Wk) && r.length === 1 && r[0].type === "text" && (r[0].text === Uk || r[0].text === Wk) ? t.createNode("paragraph", void 0, []) : t.createNode("paragraph", void 0, r);
	},
	renderMarkdown: (e, t, n) => {
		if (!e) return "";
		let r = Array.isArray(e.content) ? e.content : [];
		if (r.length === 0) {
			var i, a;
			let e = Array.isArray(n == null || (i = n.previousNode) == null ? void 0 : i.content) ? n.previousNode.content : [];
			return (n == null || (a = n.previousNode) == null ? void 0 : a.type) === "paragraph" && e.length === 0 ? Uk : "";
		}
		return t.renderChildren(r);
	},
	addCommands() {
		return { setParagraph: () => ({ commands: e }) => e.setNode(this.name) };
	},
	addKeyboardShortcuts() {
		return { "Mod-Alt-0": () => this.editor.commands.setParagraph() };
	}
}), Kk = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))$/, qk = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))/g, Jk = bS.create({
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
		return [GS({
			find: Kk,
			type: this.type
		})];
	},
	addPasteRules() {
		return [XS({
			find: qk,
			type: this.type
		})];
	}
}), Yk = YS.create({
	name: "text",
	group: "inline",
	parseMarkdown: (e) => ({
		type: "text",
		text: e.text || ""
	}),
	renderMarkdown: (e) => e.text || ""
}), Xk = bS.create({
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
function Zk(e = {}) {
	return new H({ view(t) {
		return new Qk(t, e);
	} });
}
var Qk = class {
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
			let e = Od(this.editorView.state.doc, a, this.editorView.dragging.slice);
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
}, $k = class e extends z {
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
		return new eA(this.anchor);
	}
	static valid(e) {
		let t = e.parent;
		if (t.inlineContent || !nA(e) || !rA(e)) return !1;
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
$k.prototype.visible = !1, $k.findFrom = $k.findGapCursorFrom, z.jsonID("gapcursor", $k);
var eA = class e {
	constructor(e) {
		this.pos = e;
	}
	map(t) {
		return new e(t.map(this.pos));
	}
	resolve(e) {
		let t = e.resolve(this.pos);
		return $k.valid(t) ? new $k(t) : z.near(t);
	}
};
function tA(e) {
	return e.isAtom || e.spec.isolating || e.spec.createGapCursor;
}
function nA(e) {
	for (let t = e.depth; t >= 0; t--) {
		let n = e.index(t), r = e.node(t);
		if (n == 0) {
			if (r.type.spec.isolating) return !0;
		} else for (let e = r.child(n - 1);; e = e.lastChild) {
			if (e.childCount == 0 && !e.inlineContent || tA(e.type)) return !0;
			if (e.inlineContent) return !1;
		}
	}
	return !0;
}
function rA(e) {
	for (let t = e.depth; t >= 0; t--) {
		let n = e.indexAfter(t), r = e.node(t);
		if (n == r.childCount) {
			if (r.type.spec.isolating) return !0;
		} else for (let e = r.child(n);; e = e.firstChild) {
			if (e.childCount == 0 && !e.inlineContent || tA(e.type)) return !0;
			if (e.inlineContent) return !1;
		}
	}
	return !0;
}
function iA() {
	return new H({ props: {
		decorations: lA,
		createSelectionBetween(e, t, n) {
			return t.pos == n.pos && $k.valid(n) ? new $k(n) : null;
		},
		handleClick: sA,
		handleKeyDown: aA,
		handleDOMEvents: { beforeinput: cA }
	} });
}
var aA = J_({
	ArrowLeft: oA("horiz", -1),
	ArrowRight: oA("horiz", 1),
	ArrowUp: oA("vert", -1),
	ArrowDown: oA("vert", 1)
});
function oA(e, t) {
	let n = e == "vert" ? t > 0 ? "down" : "up" : t > 0 ? "right" : "left";
	return function(e, r, i) {
		let a = e.selection, o = t > 0 ? a.$to : a.$from, s = a.empty;
		if (a instanceof B) {
			if (!i.endOfTextblock(n) || o.depth == 0) return !1;
			s = !1, o = e.doc.resolve(t > 0 ? o.after() : o.before());
		}
		let c = $k.findGapCursorFrom(o, t, s);
		return c ? (r && r(e.tr.setSelection(new $k(c))), !0) : !1;
	};
}
function sA(e, t, n) {
	if (!e || !e.editable) return !1;
	let r = e.state.doc.resolve(t);
	if (!$k.valid(r)) return !1;
	let i = e.posAtCoords({
		left: n.clientX,
		top: n.clientY
	});
	return i && i.inside > -1 && V.isSelectable(e.state.doc.nodeAt(i.inside)) ? !1 : (e.dispatch(e.state.tr.setSelection(new $k(r))), !0);
}
function cA(e, t) {
	if (t.inputType != "insertCompositionText" || !(e.state.selection instanceof $k)) return !1;
	let { $from: n } = e.state.selection, r = n.parent.contentMatchAt(n.index()).findWrapping(e.state.schema.nodes.text);
	if (!r) return !1;
	let i = I.empty;
	for (let e = r.length - 1; e >= 0; e--) i = I.from(r[e].createAndFill(null, i));
	let a = e.state.tr.replace(n.pos, n.pos, new R(i, 0, 0));
	return a.setSelection(B.near(a.doc.resolve(n.pos + 1))), e.dispatch(a), !1;
}
function lA(e) {
	if (!(e.selection instanceof $k)) return null;
	let t = document.createElement("div");
	return t.className = "ProseMirror-gapcursor", G.create(e.doc, [Gg.widget(e.selection.head, t, { key: "gapcursor" })]);
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
var uA = Y.create({
	name: "dropCursor",
	addOptions() {
		return {
			color: "currentColor",
			width: 1,
			class: void 0
		};
	},
	addProseMirrorPlugins() {
		return [Zk(this.options)];
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
					a.push(Gg.node(t, t + e.nodeSize, { class: this.options.className }));
				}), G.create(e, a);
			} }
		})];
	}
});
var dA = Y.create({
	name: "gapCursor",
	addProseMirrorPlugins() {
		return [iA()];
	},
	extendNodeSchema(e) {
		return { allowGapCursor: q(K(e, "allowGapCursor", {
			name: e.name,
			options: e.options,
			storage: e.storage
		})) ?? null };
	}
}), fA = "placeholder", pA = new U("tiptap__placeholder");
function mA(e) {
	let { editor: t, placeholder: n, dataAttribute: r, pos: i, node: a, isEmptyDoc: o, hasAnchor: s, classes: { emptyNode: c, emptyEditor: l } } = e, u = [c];
	return o && u.push(l), Gg.node(i, i + a.nodeSize, {
		class: u.join(" "),
		[r]: typeof n == "function" ? n({
			editor: t,
			node: a,
			pos: i,
			hasAnchor: s
		}) : n
	});
}
function hA(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function gA({ editor: e, options: t, dataAttribute: n, doc: r, selection: i, from: a, to: o }) {
	let { anchor: s } = i, c = [], l = e.isEmpty;
	return r.nodesBetween(a, o, (r, i) => {
		let a = s >= i && s <= i + r.nodeSize, o = !r.isLeaf && Ib(r);
		return r.type.isTextblock && (a || !t.showOnlyCurrent) && o && c.push(mA({
			editor: e,
			isEmptyDoc: l,
			dataAttribute: n,
			hasAnchor: a,
			placeholder: t.placeholder,
			classes: {
				emptyEditor: t.emptyEditorClass,
				emptyNode: hA(t.emptyNodeClass, {
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
function _A({ editor: e, options: t, dataAttribute: n, doc: r, selection: i }) {
	if (!e.isEditable && t.showOnlyWhenEditable) return null;
	let { anchor: a } = i, o = [], s = e.isEmpty;
	if (t.showOnlyCurrent && !t.includeChildren) {
		let i = r.resolve(a), c = i.depth > 0 ? i.node(1) : i.nodeAfter, l = i.depth > 0 ? i.before(1) : a;
		if (c && c.type.isTextblock && Ib(c)) {
			let r = a >= l && a <= l + c.nodeSize;
			o.push(mA({
				editor: e,
				isEmptyDoc: s,
				dataAttribute: n,
				hasAnchor: r,
				placeholder: t.placeholder,
				classes: {
					emptyEditor: t.emptyEditorClass,
					emptyNode: hA(t.emptyNodeClass, {
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
	} else o.push(...gA({
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
function vA(e, t) {
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
function yA(e, t) {
	return {
		from: Math.max(0, t.from),
		to: Math.min(e.content.size, t.to)
	};
}
function bA(e, t, n) {
	let r = [];
	return e.forEach((e, i) => {
		let a = i, o = a + e.nodeSize, s = a + 1, c = o + 1;
		s < n && c > t && r.push({
			from: a,
			to: o
		});
	}), r;
}
function xA(e) {
	if (e.length === 0) return [];
	let t = [...e].sort((e, t) => e.from - t.from), n = [{ ...t[0] }];
	for (let e = 1; e < t.length; e += 1) {
		let r = n[n.length - 1], i = t[e];
		i.from <= r.to ? r.to = Math.max(r.to, i.to) : n.push({ ...i });
	}
	return n;
}
function SA(e, t) {
	let n = bA(e, t.from, t.to);
	return n.push(yA(e, vA(e, t.from))), t.to > t.from ? n.push(yA(e, vA(e, Math.min(t.to, e.content.size + 1) - 1))) : t.from < e.content.size + 1 && n.push(yA(e, vA(e, Math.min(t.from + 1, e.content.size)))), n;
}
function CA(e, t, n) {
	let r = [];
	if (e.docChanged) {
		let t = Cb(e);
		for (let e of t) r.push(...SA(n.doc, e.newRange));
	}
	return e.selectionSet && (r.push(yA(n.doc, vA(n.doc, e.mapping.map(t.selection.anchor)))), r.push(yA(n.doc, vA(n.doc, n.selection.anchor)))), xA(r);
}
function wA(e, t, n) {
	let r = Math.max(0, Math.min(e, n.content.size));
	return {
		from: r,
		to: Math.max(r, Math.min(t, n.content.size))
	};
}
function TA({ decorations: e, ranges: t, editor: n, options: r, dataAttribute: i, doc: a, selection: o }) {
	let s = e;
	for (let e of t) {
		let { from: t, to: c } = wA(e.from, e.to, a), l = s.find(t, c).filter((e) => e.from >= t && e.to <= c);
		l.length && (s = s.remove(l));
		let u = gA({
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
function EA({ editor: e, options: t, dataAttribute: n }) {
	return {
		init(r, i) {
			return _A({
				editor: e,
				options: t,
				dataAttribute: n,
				doc: i.doc,
				selection: i.selection
			}) ?? G.empty;
		},
		apply(r, i, a, o) {
			return !r.docChanged && !r.selectionSet ? i : TA({
				decorations: i.map(r.mapping, r.doc),
				ranges: CA(r, a, o),
				editor: e,
				options: t,
				dataAttribute: n,
				doc: o.doc,
				selection: o.selection
			});
		}
	};
}
function DA(e) {
	return e.replace(/\s+/g, "-").replace(/[^a-zA-Z0-9-]/g, "").replace(/^[0-9-]+/, "").replace(/^-+/, "").toLowerCase();
}
function OA({ editor: e, options: t }) {
	let n = t.dataAttribute ? `data-${DA(t.dataAttribute)}` : `data-${fA}`, r = t.showOnlyCurrent && !t.includeChildren;
	return new H({
		key: pA,
		...r ? {} : { state: EA({
			editor: e,
			options: t,
			dataAttribute: n
		}) },
		props: { decorations: r ? ({ doc: r, selection: i }) => _A({
			editor: e,
			options: t,
			dataAttribute: n,
			doc: r,
			selection: i
		}) : (n) => t.showOnlyWhenEditable && !e.isEditable ? G.empty : pA.getState(n) ?? G.empty }
	});
}
Y.create({
	name: "placeholder",
	addOptions() {
		return {
			emptyEditorClass: "is-editor-empty",
			emptyNodeClass: "is-empty",
			dataAttribute: fA,
			placeholder: "Write something …",
			showOnlyWhenEditable: !0,
			showOnlyCurrent: !0,
			includeChildren: !1
		};
	},
	addProseMirrorPlugins() {
		return [OA({
			editor: this.editor,
			options: this.options
		})];
	}
});
function kA(e, t) {
	return !e.selection.empty && !Lb(e.selection) && t.isEditable;
}
function AA(e, t) {
	return kA(e, t) && !t.isFocused && !t.view.dragging;
}
function jA() {
	var e;
	(e = window.getSelection()) == null || e.removeAllRanges();
}
function MA(e) {
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
					return AA(n, e) ? G.create(n.doc, [Gg.inline(n.selection.from, n.selection.to, { class: t.className })]) : null;
				},
				handleDOMEvents: {
					blur(t) {
						return kA(t.state, e) && jA(), !1;
					},
					focus(t) {
						return kA(t.state, e) && requestAnimationFrame(() => {
							!e.isDestroyed && t.hasFocus() && MA(t);
						}), !1;
					}
				}
			}
		})];
	}
});
function NA({ types: e, node: t }) {
	return t && Array.isArray(e) && e.includes(t.type) || t?.type === e;
}
var PA = Y.create({
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
					return !NA({
						node: r,
						types: n
					});
				},
				apply: (e, t) => {
					if (!e.docChanged || e.getMeta("__uniqueIDTransaction")) return t;
					let r = e.doc.lastChild;
					return !NA({
						node: r,
						types: n
					});
				}
			}
		})];
	}
}), FA = Y.create({
	name: "undoRedo",
	addOptions() {
		return {
			depth: 100,
			newGroupDelay: 500
		};
	},
	addCommands() {
		return {
			undo: () => ({ state: e, dispatch: t }) => vv(e, t),
			redo: () => ({ state: e, dispatch: t }) => yv(e, t)
		};
	},
	addProseMirrorPlugins() {
		return [gv(this.options)];
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
}), IA = Y.create({
	name: "starterKit",
	addExtensions() {
		let e = [];
		return this.options.bold !== !1 && e.push(eD.configure(this.options.bold)), this.options.blockquote !== !1 && e.push(YE.configure(this.options.blockquote)), this.options.bulletList !== !1 && e.push(rC.configure(this.options.bulletList)), this.options.code !== !1 && e.push(iD.configure(this.options.code)), this.options.codeBlock !== !1 && e.push(cD.configure(this.options.codeBlock)), this.options.document !== !1 && e.push(lD.configure(this.options.document)), this.options.dropcursor !== !1 && e.push(uA.configure(this.options.dropcursor)), this.options.gapcursor !== !1 && e.push(dA.configure(this.options.gapcursor)), this.options.hardBreak !== !1 && e.push(uD.configure(this.options.hardBreak)), this.options.heading !== !1 && e.push(dD.configure(this.options.heading)), this.options.undoRedo !== !1 && e.push(FA.configure(this.options.undoRedo)), this.options.horizontalRule !== !1 && e.push(fD.configure(this.options.horizontalRule)), this.options.italic !== !1 && e.push(_D.configure(this.options.italic)), this.options.listItem !== !1 && e.push(jC.configure(this.options.listItem)), this.options.listKeymap !== !1 && e.push(BC.configure(this.options?.listKeymap)), this.options.link !== !1 && e.push(Hk.configure(this.options?.link)), this.options.orderedList !== !1 && e.push(ow.configure(this.options.orderedList)), this.options.paragraph !== !1 && e.push(Gk.configure(this.options.paragraph)), this.options.strike !== !1 && e.push(Jk.configure(this.options.strike)), this.options.text !== !1 && e.push(Yk.configure(this.options.text)), this.options.underline !== !1 && e.push(Xk.configure(this.options?.underline)), this.options.trailingNode !== !1 && e.push(PA.configure(this.options?.trailingNode)), e;
	}
});
// node_modules/@tiptap/vue-3/dist/index.js
function LA(e) {
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
var RA = class extends WS {
	constructor(e = {}) {
		return super(e), this.contentComponent = null, this.appContext = null, this.reactiveState = LA(this.view.state), this.reactiveExtensionStorage = LA(this.extensionStorage), this.on("beforeTransaction", ({ nextState: e }) => {
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
}, zA = /* @__PURE__ */ or({
	name: "EditorContent",
	props: { editor: {
		default: null,
		type: Object
	} },
	setup(e) {
		let t = /* @__PURE__ */ A(), n = Ta();
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
		return Ha("div", { ref: (e) => {
			this.rootEl = e;
		} });
	}
}), BA = {
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
			if (a.value = new RA({
				content: n.element.doc ?? "",
				editable: n.editable,
				extensions: [
					IA.configure({ link: {
						openOnClick: !1,
						autolink: !0
					} }),
					dw,
					uw.configure({ nested: !0 }),
					AE.configure({ table: { resizable: !1 } }),
					$S.configure({ multicolor: !0 }),
					PE,
					IE
				],
				onUpdate: ({ editor: e }) => {
					s = e.getJSON(), r("change", s);
				},
				onFocus: ({ editor: e }) => {
					o.value = !0, r("focus", e);
				},
				onBlur: ({ editor: e }) => {
					o.value = !1, r("blur", e), Rs(e.getJSON()) && r("remove");
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
				onPointerdown: n[0] ||= Ko((e) => t.$emit("drag-start", e), ["stop", "prevent"])
			}, null, 32)) : F("", !0),
			a.value ? (M(), aa(nn(zA), {
				key: 1,
				editor: a.value,
				class: "nb-text__content"
			}, null, 8, ["editor"])) : F("", !0),
			e.editable ? (M(), N("div", {
				key: 2,
				class: "nb-resize nb-resize--x",
				title: "Breite ändern",
				onPointerdown: n[1] ||= Ko((e) => t.$emit("resize-start", e), ["stop", "prevent"])
			}, null, 32)) : F("", !0)
		], 6));
	}
}, VA = {
	key: 0,
	class: "nb-toolbar__group"
}, HA = [
	"title",
	"aria-label",
	"aria-pressed",
	"onClick"
], UA = ["innerHTML"], WA = ["innerHTML"], GA = {
	key: 1,
	class: "nb-toolbar__group"
}, KA = [
	"title",
	"aria-label",
	"onClick"
], qA = [
	"title",
	"aria-label",
	"onClick"
], JA = {
	key: 2,
	class: "nb-toolbar__group"
}, YA = [
	"title",
	"aria-label",
	"onClick"
], XA = ["innerHTML"], ZA = { class: "nb-toolbar__group nb-toolbar__group--end" }, QA = ["disabled"], $A = ["innerHTML"], ej = ["disabled"], tj = ["innerHTML"], nj = {
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
		}, s = Va(() => t.tool === "highlighter" ? a : i), c = Va(() => o[t.tool] ?? o.pen), l = [
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
			onMousedown: i[6] ||= Ko(() => {}, ["prevent"])
		}, [
			e.readOnly ? F("", !0) : (M(), N("div", VA, [(M(), N(j, null, jr(r, (n) => P("button", {
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
			}, null, 8, UA))], 10, HA)), 64)), P("button", {
				type: "button",
				class: "nb-tool",
				title: "Bild einfügen",
				"aria-label": "Bild einfügen",
				onClick: i[0] ||= (e) => t.$emit("insert-image")
			}, [(M(), N("svg", {
				viewBox: "0 0 24 24",
				"aria-hidden": "true",
				innerHTML: n.image
			}, null, 8, WA))])])),
			!e.readOnly && (e.tool === "pen" || e.tool === "highlighter") ? (M(), N("div", GA, [(M(!0), N(j, null, jr(s.value, (n) => (M(), N("button", {
				key: n,
				type: "button",
				class: D(["nb-swatch", { "nb-swatch--active": e.color === n }]),
				style: fe({ "--swatch": n }),
				title: "Farbe " + n,
				"aria-label": "Farbe " + n,
				onClick: (e) => t.$emit("update:color", n)
			}, null, 14, KA))), 128)), (M(!0), N(j, null, jr(c.value, (n) => (M(), N("button", {
				key: n.value,
				type: "button",
				class: D(["nb-tool nb-size", { "nb-tool--active": e.size === n.value }]),
				title: n.label,
				"aria-label": n.label,
				onClick: (e) => t.$emit("update:size", n.value)
			}, [P("span", { style: fe({
				width: n.dot + "px",
				height: n.dot + "px"
			}) }, null, 4)], 10, qA))), 128))])) : F("", !0),
			!e.readOnly && e.editor ? (M(), N("div", JA, [(M(), N(j, null, jr(l, (t) => P("button", {
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
			}, null, 8, XA)) : (M(), N("span", {
				key: 1,
				class: D(["nb-tool__text", t.textClass])
			}, Ee(t.text), 3))], 10, YA)), 64))])) : F("", !0),
			P("div", ZA, [
				e.readOnly ? F("", !0) : (M(), N("button", {
					key: 0,
					type: "button",
					class: "nb-tool",
					title: "Rückgängig (Strg+Z)",
					"aria-label": "Rückgängig",
					disabled: !e.canUndo,
					onClick: i[1] ||= (e) => t.$emit("undo")
				}, [(M(), N("svg", {
					viewBox: "0 0 24 24",
					"aria-hidden": "true",
					innerHTML: n.undo
				}, null, 8, $A))], 8, QA)),
				e.readOnly ? F("", !0) : (M(), N("button", {
					key: 1,
					type: "button",
					class: "nb-tool",
					title: "Wiederholen (Strg+Y)",
					"aria-label": "Wiederholen",
					disabled: !e.canRedo,
					onClick: i[2] ||= (e) => t.$emit("redo")
				}, [(M(), N("svg", {
					viewBox: "0 0 24 24",
					"aria-hidden": "true",
					innerHTML: n.redo
				}, null, 8, tj))], 8, ej)),
				P("button", {
					type: "button",
					class: "nb-tool",
					title: "Verkleinern",
					"aria-label": "Verkleinern",
					onClick: i[3] ||= (e) => t.$emit("zoom", -1)
				}, "−"),
				P("button", {
					type: "button",
					class: "nb-tool nb-zoom",
					title: "Ansicht zurücksetzen",
					"aria-label": "Ansicht zurücksetzen",
					onClick: i[4] ||= (e) => t.$emit("zoom", 0)
				}, Ee(Math.round(e.zoom * 100)) + " % ", 1),
				P("button", {
					type: "button",
					class: "nb-tool",
					title: "Vergrößern",
					"aria-label": "Vergrößern",
					onClick: i[5] ||= (e) => t.$emit("zoom", 1)
				}, "+")
			])
		], 32));
	}
}, rj = { class: "nb-page" }, ij = {
	class: "nb-ink",
	"aria-hidden": "true"
}, aj = [
	"d",
	"fill",
	"fill-opacity"
], oj = [
	"d",
	"fill",
	"fill-opacity"
], sj = ["points", "stroke-width"], cj = [
	"x",
	"y",
	"width",
	"height",
	"stroke-width"
], lj = {
	key: 0,
	class: "nb-hint"
}, uj = .25, dj = 4, fj = 24, pj = 100, mj = {
	__name: "PageCanvas",
	props: {
		pageId: {
			type: Number,
			required: !0
		},
		initialContent: {
			type: Object,
			required: !0
		},
		readOnly: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["change", "error"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ A(JSON.parse(JSON.stringify(n.initialContent))), a = /* @__PURE__ */ Vt({
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
		}), _ = /* @__PURE__ */ A([]), v = /* @__PURE__ */ A([]), y = /* @__PURE__ */ A(null), b = /* @__PURE__ */ A(null), x = /* @__PURE__ */ A(null), S = /* @__PURE__ */ new Map(), C = null, w = !1, ee = !1, T = null, te = /* @__PURE__ */ new WeakMap(), E = Va(() => s[o.value]?.color ?? s.pen.color), ne = Va(() => s[o.value]?.size ?? s.pen.size), re = Va(() => new Set(g.value.strokeIds)), ie = Va(() => new Set(g.value.elementIds)), ae = Va(() => Fs(i.value, g.value, c)), oe = Va(() => [...i.value.strokes.filter((e) => e.tool === "highlighter"), ...i.value.strokes.filter((e) => e.tool !== "highlighter")]), se = Va(() => ({
			backgroundSize: `${fj * a.zoom}px ${fj * a.zoom}px`,
			backgroundPosition: `${a.x}px ${a.y}px`
		}));
		function ce(e) {
			let t = te.get(e);
			return t === void 0 && (t = rl(e), te.set(e, t)), t;
		}
		function le(e) {
			o.value = e, e !== "lasso" && Me(), e !== "text" && f.value?.commands.blur();
		}
		function ue(e) {
			s[o.value] && (s[o.value].color = e);
		}
		function de(e) {
			s[o.value] && (s[o.value].size = e);
		}
		function pe() {
			return JSON.parse(JSON.stringify(i.value));
		}
		function me() {
			T = pe();
		}
		function he(e = !0) {
			e && T && (_.value.push(T), _.value.length > pj && _.value.shift(), v.value = [], ge()), T = null;
		}
		function ge() {
			r("change", i.value);
		}
		function _e() {
			_.value.length !== 0 && (v.value.push(pe()), i.value = _.value.pop(), Me(), ge());
		}
		function ve() {
			v.value.length !== 0 && (_.value.push(pe()), i.value = v.value.pop(), Me(), ge());
		}
		function ye(e, t) {
			let n = y.value.getBoundingClientRect();
			return [Es((e - n.left - a.x) / a.zoom), Es((t - n.top - a.y) / a.zoom)];
		}
		function be(e, t, n) {
			let r = y.value.getBoundingClientRect(), i = Math.min(dj, Math.max(uj, a.zoom * e)), o = t - r.left, s = n - r.top;
			a.x = o - (o - a.x) / a.zoom * i, a.y = s - (s - a.y) / a.zoom * i, a.zoom = i;
		}
		function xe(e) {
			let t = y.value.getBoundingClientRect();
			e === 0 ? (a.x = 48, a.y = 32, a.zoom = 1) : be(e > 0 ? 1.25 : .8, t.left + t.width / 2, t.top + t.height / 2);
		}
		function Se(e) {
			e.preventDefault(), e.ctrlKey || e.metaKey ? be(Math.exp(-e.deltaY * .01), e.clientX, e.clientY) : e.shiftKey ? a.x -= e.deltaY : (a.x -= e.deltaX, a.y -= e.deltaY);
		}
		function Ce(e) {
			try {
				y.value.setPointerCapture(e.pointerId);
			} catch {}
		}
		function we() {
			return [...S.values()].filter((e) => e.type === "touch");
		}
		function Te() {
			let [e, t] = we();
			C?.type === "stroke" && C.pointerType === "touch" && (m.value = null), C = {
				type: "pinch",
				distance: Math.hypot(e.x - t.x, e.y - t.y),
				center: [(e.x + t.x) / 2, (e.y + t.y) / 2]
			}, x.value = "pinch";
		}
		function Ee(e) {
			if (e.pointerType === "pen" && (w = !0), S.set(e.pointerId, {
				x: e.clientX,
				y: e.clientY,
				type: e.pointerType
			}), e.pointerType === "touch" && we().length === 2) {
				Te();
				return;
			}
			if (C) return;
			if (n.readOnly) {
				De(e);
				return;
			}
			if (o.value === "text" && e.button !== 1 && e.target.closest(".nb-element")) return;
			let [t, r] = ye(e.clientX, e.clientY), i = [
				"pen",
				"highlighter",
				"eraser",
				"lasso"
			].includes(o.value), c = e.pointerType === "touch" && i && !w;
			if (e.button === 1 || ee || e.pointerType === "touch" && !c) De(e);
			else {
				if (e.pointerType === "pen" && (e.buttons & 32) == 32 || o.value === "eraser") e.preventDefault(), me(), C = {
					type: "erase",
					pointerId: e.pointerId,
					radius: 8 / a.zoom,
					changed: !1
				}, O(t, r), Ce(e);
				else if (o.value === "pen" || o.value === "highlighter") {
					e.preventDefault();
					let n = s[o.value];
					m.value = {
						id: ws(),
						tool: o.value,
						color: n.color,
						size: n.size,
						points: [[
							t,
							r,
							ke(e)
						]],
						simulatePressure: e.pointerType !== "pen"
					}, C = {
						type: "stroke",
						pointerId: e.pointerId,
						pointerType: e.pointerType
					}, Ce(e);
				} else if (o.value === "lasso") {
					e.preventDefault();
					let n = ae.value;
					n && t >= n.minX && t <= n.maxX && r >= n.minY && r <= n.maxY ? (me(), C = {
						type: "move-selection",
						pointerId: e.pointerId,
						last: [t, r],
						moved: !1
					}) : (Me(), h.value = [[t, r]], C = {
						type: "lasso",
						pointerId: e.pointerId
					}), Ce(e);
				} else C = {
					type: "tap",
					pointerId: e.pointerId,
					start: [e.clientX, e.clientY],
					world: [t, r]
				}, Ce(e);
				x.value = C?.type ?? null;
			}
		}
		function De(e) {
			e.preventDefault(), C = {
				type: "pan",
				pointerId: e.pointerId,
				last: [e.clientX, e.clientY]
			}, x.value = "pan", Ce(e);
		}
		function Oe(e, t, r) {
			C || o.value !== "text" || n.readOnly || (me(), C = {
				type: r,
				pointerId: e.pointerId,
				element: t,
				start: ye(e.clientX, e.clientY),
				origin: {
					x: t.x,
					y: t.y,
					width: t.width,
					height: t.height
				},
				moved: !1
			}, x.value = r, Ce(e));
		}
		function ke(e) {
			return e.pointerType === "pen" && e.pressure > 0 ? Es(e.pressure * 100) / 100 : .5;
		}
		function Ae(e) {
			let t = S.get(e.pointerId);
			if (t && (t.x = e.clientX, t.y = e.clientY), !C) return;
			if (C.type === "pinch") {
				let e = we();
				if (e.length < 2) return;
				let [t, n] = e, r = Math.hypot(t.x - n.x, t.y - n.y), i = [(t.x + n.x) / 2, (t.y + n.y) / 2];
				a.x += i[0] - C.center[0], a.y += i[1] - C.center[1], be(r / C.distance, i[0], i[1]), C.distance = r, C.center = i;
				return;
			}
			if (e.pointerId !== C.pointerId) return;
			let [n, r] = ye(e.clientX, e.clientY);
			switch (C.type) {
				case "pan":
					a.x += e.clientX - C.last[0], a.y += e.clientY - C.last[1], C.last = [e.clientX, e.clientY];
					break;
				case "tap":
					Math.hypot(e.clientX - C.start[0], e.clientY - C.start[1]) > 6 && (C = {
						type: "pan",
						pointerId: e.pointerId,
						last: [e.clientX, e.clientY]
					}, x.value = "pan");
					break;
				case "stroke": {
					let t = e.getCoalescedEvents?.() ?? [e], n = m.value.points;
					for (let r of t.length > 0 ? t : [e]) {
						let [e, t] = ye(r.clientX, r.clientY), i = n[n.length - 1];
						Math.hypot(e - i[0], t - i[1]) >= .5 / a.zoom && n.push([
							e,
							t,
							ke(r)
						]);
					}
					break;
				}
				case "erase":
					O(n, r);
					break;
				case "lasso":
					h.value.push([n, r]);
					break;
				case "move-selection": {
					let e = n - C.last[0], t = r - C.last[1];
					i.value = Is(i.value, g.value, e, t), C.last = [n, r], C.moved = !0;
					break;
				}
				case "move-element":
					C.element.x = Es(C.origin.x + n - C.start[0]), C.element.y = Es(C.origin.y + r - C.start[1]), C.moved = !0;
					break;
				case "resize-element": {
					let e = Math.max(80, C.origin.width + n - C.start[0]);
					C.element.type === "image" && (C.element.height = Es(C.origin.height * (e / C.origin.width))), C.element.width = Es(e), C.moved = !0;
					break;
				}
			}
		}
		function je(e) {
			if (S.delete(e.pointerId), C) {
				if (C.type === "pinch") we().length < 2 && (C = null, x.value = null);
				else if (e.pointerId === C.pointerId) {
					switch (C.type) {
						case "tap":
							Ne(C.world[0], C.world[1]);
							break;
						case "stroke":
							m.value && (me(), i.value.strokes.push(m.value), m.value = null, he(!0));
							break;
						case "erase":
							he(C.changed);
							break;
						case "lasso":
							g.value = Ps(i.value, h.value, c), h.value = [];
							break;
						case "move-selection":
						case "move-element":
						case "resize-element": he(C.moved);
					}
					C = null, x.value = null;
				}
			}
		}
		function O(e, t) {
			let n = ks(i.value.strokes, e, t, C.radius);
			n.length !== i.value.strokes.length && (i.value.strokes = n, C.changed = !0);
		}
		function Me() {
			g.value = {
				strokeIds: [],
				elementIds: []
			}, h.value = [];
		}
		function Ne(e, t) {
			me();
			let n = {
				id: ws(),
				type: "text",
				x: e,
				y: Es(t - 12),
				width: 360,
				doc: null
			};
			i.value.elements.push(n), l.value = n.id, u.value = "", d = !0, he(!0);
		}
		function Pe(e, t) {
			e.doc = t, ge();
		}
		function Fe(e) {
			d = !1, u.value = "", f.value = e, e.on("transaction", Le);
		}
		function Ie(e) {
			e.off("transaction", Le), setTimeout(() => {
				f.value === e && !e.isFocused && (f.value = null);
			}, 0);
		}
		function Le() {
			p.value++;
		}
		function Re(e) {
			i.value.elements = i.value.elements.filter((t) => t.id !== e), delete c[e], l.value === e && (l.value = null), ge();
		}
		async function ze(e, t) {
			try {
				let { fileId: r } = await as.uploadImage(n.pageId, e), a = await Be(e), o = Math.min(480, a.width), s = Es(a.height * (o / a.width)), [c, l] = t ?? Ve();
				me(), i.value.elements.push({
					id: ws(),
					type: "image",
					x: Es(c - o / 2),
					y: Es(l - s / 2),
					width: o,
					height: s,
					fileId: r
				}), he(!0);
			} catch (e) {
				r("error", e.message);
			}
		}
		function Be(e) {
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
		function Ve() {
			let e = y.value.getBoundingClientRect();
			return ye(e.left + e.width / 2, e.top + e.height / 2);
		}
		function He(e) {
			let [t] = e.target.files;
			t && ze(t), e.target.value = "";
		}
		function Ue(e) {
			if (n.readOnly) return;
			let t = ye(e.clientX, e.clientY);
			for (let n of e.dataTransfer?.files ?? []) n.type.startsWith("image/") && ze(n, t);
		}
		function We(e) {
			return e.target.closest?.("input, textarea, [contenteditable=\"true\"]");
		}
		function Ge(e) {
			if (d && e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
				e.preventDefault(), u.value += e.key;
				return;
			}
			if (e.code === "Space" && !We(e)) {
				ee = !0, e.preventDefault();
				return;
			}
			if (We(e) || n.readOnly) return;
			let t = e.ctrlKey || e.metaKey;
			t && e.key.toLowerCase() === "z" && !e.shiftKey ? (e.preventDefault(), _e()) : t && (e.key.toLowerCase() === "y" || e.shiftKey && e.key.toLowerCase() === "z") ? (e.preventDefault(), ve()) : (e.key === "Delete" || e.key === "Backspace") && ae.value ? (e.preventDefault(), me(), i.value = Ls(i.value, g.value), Me(), he(!0)) : e.key === "Escape" && Me();
		}
		function Ke(e) {
			e.code === "Space" && (ee = !1);
		}
		function qe(e) {
			if (!(We(e) || n.readOnly)) for (let t of e.clipboardData?.items ?? []) t.kind === "file" && t.type.startsWith("image/") && (e.preventDefault(), ze(t.getAsFile()));
		}
		return xr(() => {
			window.addEventListener("keydown", Ge), window.addEventListener("keyup", Ke), window.addEventListener("paste", qe);
		}), wr(() => {
			window.removeEventListener("keydown", Ge), window.removeEventListener("keyup", Ke), window.removeEventListener("paste", qe);
		}), (t, n) => (M(), N("div", rj, [
			ua(nj, {
				"read-only": e.readOnly,
				tool: o.value,
				color: E.value,
				size: ne.value,
				editor: f.value,
				"editor-tick": p.value,
				"can-undo": _.value.length > 0,
				"can-redo": v.value.length > 0,
				zoom: a.zoom,
				"onUpdate:tool": le,
				"onUpdate:color": ue,
				"onUpdate:size": de,
				onInsertImage: n[0] ||= (e) => b.value.click(),
				onUndo: _e,
				onRedo: ve,
				onZoom: xe
			}, null, 8, [
				"read-only",
				"tool",
				"color",
				"size",
				"editor",
				"editor-tick",
				"can-undo",
				"can-redo",
				"zoom"
			]),
			P("div", {
				ref_key: "viewport",
				ref: y,
				class: D(["nb-canvas", ["nb-canvas--" + (e.readOnly ? "readonly" : o.value), { "nb-canvas--panning": x.value === "pan" }]]),
				style: fe(se.value),
				onPointerdown: Ee,
				onPointermove: Ae,
				onPointerup: je,
				onPointercancel: je,
				onWheel: Se,
				onDragover: n[1] ||= Ko(() => {}, ["prevent"]),
				onDrop: Ko(Ue, ["prevent"])
			}, [P("div", {
				class: "nb-world",
				style: fe({ transform: `translate(${a.x}px, ${a.y}px) scale(${a.zoom})` })
			}, [(M(!0), N(j, null, jr(i.value.elements, (t) => (M(), N(j, { key: t.id }, [t.type === "text" ? (M(), aa(BA, {
				key: 0,
				element: t,
				editable: !e.readOnly,
				autofocus: t.id === l.value,
				"initial-text": t.id === l.value ? u.value : "",
				selected: ie.value.has(t.id),
				onChange: (e) => Pe(t, e),
				onFocus: Fe,
				onBlur: Ie,
				onRemove: (e) => Re(t.id),
				onHeight: (e) => c[t.id] = e,
				onDragStart: (e) => Oe(e, t, "move-element"),
				onResizeStart: (e) => Oe(e, t, "resize-element")
			}, null, 8, [
				"element",
				"editable",
				"autofocus",
				"initial-text",
				"selected",
				"onChange",
				"onRemove",
				"onHeight",
				"onDragStart",
				"onResizeStart"
			])) : (M(), aa(ol, {
				key: 1,
				element: t,
				src: nn(as).imageUrl(t.fileId),
				selected: ie.value.has(t.id),
				onDragStart: (e) => Oe(e, t, "move-element"),
				onResizeStart: (e) => Oe(e, t, "resize-element")
			}, null, 8, [
				"element",
				"src",
				"selected",
				"onDragStart",
				"onResizeStart"
			]))], 64))), 128)), (M(), N("svg", ij, [
				(M(!0), N(j, null, jr(oe.value, (e) => (M(), N("path", {
					key: e.id,
					d: ce(e),
					fill: e.color,
					"fill-opacity": nn(nl)[e.tool]?.opacity ?? 1,
					class: D({ "nb-ink--selected": re.value.has(e.id) })
				}, null, 10, aj))), 128)),
				m.value ? (M(), N("path", {
					key: 0,
					d: nn(rl)(m.value, !1),
					fill: m.value.color,
					"fill-opacity": nn(nl)[m.value.tool].opacity
				}, null, 8, oj)) : F("", !0),
				h.value.length > 1 ? (M(), N("polyline", {
					key: 1,
					class: "nb-lasso",
					points: h.value.map((e) => e.join(",")).join(" "),
					"stroke-width": 1.5 / a.zoom
				}, null, 8, sj)) : F("", !0),
				ae.value ? (M(), N("rect", {
					key: 2,
					class: "nb-selection",
					x: ae.value.minX - 6,
					y: ae.value.minY - 6,
					width: ae.value.maxX - ae.value.minX + 12,
					height: ae.value.maxY - ae.value.minY + 12,
					"stroke-width": 1.5 / a.zoom
				}, null, 8, cj)) : F("", !0)
			]))], 4), !e.readOnly && i.value.elements.length === 0 && i.value.strokes.length === 0 ? (M(), N("p", lj, " Irgendwo klicken und schreiben, mit dem Stift zeichnen oder Bilder hineinziehen. ")) : F("", !0)], 38),
			P("input", {
				ref_key: "fileInput",
				ref: b,
				type: "file",
				accept: "image/png,image/jpeg,image/gif,image/webp",
				hidden: "",
				onChange: He
			}, null, 544)
		]));
	}
}, hj = { class: "nb-main" }, gj = { class: "nb-main__header" }, _j = [
	"title",
	"aria-label",
	"aria-expanded"
], vj = ["readonly"], yj = { class: "nb-date" }, bj = {
	key: 0,
	class: "nb-pill"
}, xj = {
	key: 2,
	class: "nb-empty"
}, Sj = { key: 1 }, Cj = {
	class: "nb-choice",
	role: "radiogroup",
	"aria-label": "Art des Notizbuchs"
}, wj = { class: "nb-field" }, Tj = ["placeholder"], Ej = ["disabled"], Dj = {
	key: 0,
	class: "nb-muted"
}, Oj = ["disabled"], kj = { class: "nb-field" }, Aj = ["value"], jj = {
	key: 0,
	class: "nb-field"
}, Mj = ["disabled"], Nj = "austit-notebook-last", Pj = 800, Fj = {
	__name: "App",
	setup(e) {
		let t = [
			"Handouts",
			"Klassennotizen",
			"Hausaufgaben",
			"Tests"
		], n = /* @__PURE__ */ A([]), r = /* @__PURE__ */ A(null), i = /* @__PURE__ */ A(null), a = /* @__PURE__ */ A(null), o = /* @__PURE__ */ A(null), s = /* @__PURE__ */ A(0), c = /* @__PURE__ */ A(""), l = /* @__PURE__ */ A(!0), u = /* @__PURE__ */ A(!1), d = /* @__PURE__ */ A(window.innerWidth > 700), f = /* @__PURE__ */ A(null), p = /* @__PURE__ */ A("idle"), m = /* @__PURE__ */ A(null), h = /* @__PURE__ */ A(null), g = /* @__PURE__ */ A(null), _ = null, v = null, y = null, b = null, x = Va(() => ({
			idle: "",
			dirty: "Nicht gespeichert …",
			saving: "Speichert …",
			saved: "Gespeichert",
			conflict: "Konflikt",
			error: "Nicht gespeichert"
		})[p.value]), S = Va(() => {
			let e = o.value?.content.created;
			return e ? (/* @__PURE__ */ new Date(e * 1e3)).toLocaleString("de-DE", {
				dateStyle: "full",
				timeStyle: "short"
			}) : "";
		});
		function C(e, t = "error") {
			f.value = {
				text: e,
				type: t
			};
		}
		function w() {
			try {
				window.localStorage.setItem(Nj, JSON.stringify({
					notebookId: r.value,
					sectionId: i.value,
					pageId: a.value
				}));
			} catch {}
		}
		function ee() {
			try {
				return JSON.parse(window.localStorage.getItem(Nj) ?? "null") ?? {};
			} catch {
				return {};
			}
		}
		async function T() {
			n.value = (await as.tree()).notebooks;
		}
		async function te({ notebookId: e = null, sectionId: t = null, pageId: s = null }) {
			await ie();
			let c = n.value.find((t) => t.id === e) ?? n.value[0] ?? null, l = zs(c).map((e) => e.section), u = l.find((e) => e.id === t) ?? l[0] ?? null, f = u?.pages.find((e) => e.id === s) ?? u?.pages[0] ?? null;
			r.value = c?.id ?? null, i.value = u?.id ?? null, ((f?.id ?? null) !== a.value || o.value === null) && await E(f?.id ?? null), w(), window.innerWidth <= 700 && f && s && (d.value = !1);
		}
		async function E(e) {
			if (a.value = e, o.value = null, p.value = "idle", e !== null) try {
				let t = await as.getPage(e);
				_ = t.etag, o.value = {
					...t,
					content: Ts(t.content)
				}, c.value = t.name, s.value++;
			} catch (e) {
				C(e.message);
			}
		}
		function ne(e) {
			o.value?.canWrite && (v = e, p.value = "dirty", clearTimeout(y), y = setTimeout(() => re(), Pj));
		}
		async function re() {
			if (clearTimeout(y), b && await b, p.value !== "dirty" || !v || a.value === null) return;
			let e = a.value, t = JSON.parse(JSON.stringify(v));
			p.value = "saving", b = as.savePage(e, t, _).then((e) => {
				_ = e.etag, p.value === "saving" && (p.value = "saved");
			}).catch((e) => {
				e instanceof ts && e.status === 409 ? (p.value = "conflict", C("Diese Seite wurde inzwischen an anderer Stelle geändert.", "warning")) : (p.value = "error", C(e.message));
			}).finally(() => {
				b = null;
			}), await b;
		}
		async function ie() {
			p.value === "dirty" ? await re() : b && await b;
		}
		async function ae() {
			f.value = null, await E(a.value);
		}
		async function oe() {
			f.value = null, _ = (await as.getPage(a.value)).etag, p.value = "dirty", await re();
		}
		async function se() {
			let e = c.value.trim();
			!o.value?.canWrite || e === "" || e === o.value.name ? c.value = o.value?.name ?? "" : await me({
				id: a.value,
				name: e
			});
		}
		async function ce({ type: e, parentId: t }) {
			try {
				if (e === "section") {
					let { id: e } = await as.createSection(t, "Neuer Abschnitt");
					await as.createPage(e, "Unbenannte Seite"), await T(), await te({
						notebookId: r.value,
						sectionId: e
					});
				} else {
					let { id: e } = await as.createPage(t, "Unbenannte Seite");
					await T(), await te({
						notebookId: r.value,
						sectionId: t,
						pageId: e
					});
				}
			} catch (e) {
				C(e.message);
			}
		}
		function le() {
			m.value = {
				kind: "personal",
				name: "",
				members: []
			};
		}
		async function ue() {
			let e = m.value;
			u.value = !0;
			try {
				let t;
				if (e.kind === "class") {
					let n = e.members.map(({ type: e, id: t, role: n }) => ({
						type: e,
						id: t,
						role: n
					}));
					t = (await as.createClassNotebook(e.name || "Klassennotizbuch", n)).id;
				} else {
					t = (await as.createNotebook(e.name || "Mein Notizbuch")).id;
					let n = await as.createSection(t, "Allgemein");
					await as.createPage(n.id, "Erste Seite");
				}
				m.value = null, await T(), await te({ notebookId: t });
			} catch (e) {
				C(e.message);
			} finally {
				u.value = !1;
			}
		}
		async function de(e) {
			h.value = {
				notebook: e,
				members: [],
				loading: !0
			};
			try {
				let { members: t } = await as.getMembers(e.id);
				h.value = {
					notebook: e,
					members: t,
					loading: !1
				};
			} catch (e) {
				h.value = null, C(e.message);
			}
		}
		async function fe() {
			u.value = !0;
			try {
				let { notebook: e, members: t } = h.value;
				await as.setMembers(e.id, t.map(({ type: e, id: t, role: n }) => ({
					type: e,
					id: t,
					role: n
				}))), h.value = null, await T(), C("Mitglieder gespeichert.", "info");
			} catch (e) {
				C(e.message);
			} finally {
				u.value = !1;
			}
		}
		async function pe() {
			let e = g.value, t = e.section || e.custom.trim();
			if (t) {
				u.value = !0;
				try {
					await ie();
					let { count: e } = await as.distributePage(a.value, t);
					g.value = null, await T(), C(e === 0 ? "Es gibt noch keine Schüler:innen in diesem Notizbuch." : `Seite an ${e} Schüler:innen verteilt (Abschnitt „${t}“).`, e === 0 ? "warning" : "info");
				} catch (e) {
					C(e.message);
				} finally {
					u.value = !1;
				}
			}
		}
		async function me({ id: e, name: t }) {
			try {
				await ie();
				let n = await as.rename(e, t);
				await T(), e === a.value && await E(n.id);
			} catch (e) {
				C(e.message);
			}
		}
		async function he({ id: e }) {
			try {
				e === a.value && (clearTimeout(y), p.value = "idle"), await as.remove(e);
				let t = [
					r.value,
					i.value,
					a.value
				].includes(e);
				await T(), t && (o.value = null, await te({
					notebookId: e === r.value ? null : r.value,
					sectionId: e === i.value || e === r.value ? null : i.value
				})), C("In den Papierkorb verschoben.", "info");
			} catch (e) {
				C(e.message);
			}
		}
		function ge(e) {
			(p.value === "dirty" || p.value === "saving") && (re(), e.preventDefault(), e.returnValue = "");
		}
		return xr(async () => {
			window.addEventListener("beforeunload", ge);
			try {
				await T(), await te(ee());
			} catch (e) {
				C(e.message);
			} finally {
				l.value = !1;
			}
		}), wr(() => {
			window.removeEventListener("beforeunload", ge);
		}), (e, _) => (M(), N("div", { class: D(["nb-app", { "nb-app--nav-hidden": !d.value }]) }, [
			Hn(ua(fc, {
				notebooks: n.value,
				"notebook-id": r.value,
				"section-id": i.value,
				"page-id": a.value,
				onSelect: te,
				onCreate: ce,
				onCreateNotebook: le,
				onRename: me,
				onRemove: he,
				onMembers: de
			}, null, 8, [
				"notebooks",
				"notebook-id",
				"section-id",
				"page-id"
			]), [[no, d.value]]),
			P("main", hj, [
				P("header", gj, [
					P("button", {
						type: "button",
						class: "nb-icon-button",
						title: d.value ? "Navigation ausblenden" : "Navigation einblenden",
						"aria-label": d.value ? "Navigation ausblenden" : "Navigation einblenden",
						"aria-expanded": d.value,
						onClick: _[0] ||= (e) => d.value = !d.value
					}, " ☰ ", 8, _j),
					a.value && o.value ? (M(), N(j, { key: 0 }, [
						Hn(P("input", {
							"onUpdate:modelValue": _[1] ||= (e) => c.value = e,
							class: "nb-title",
							"aria-label": "Seitentitel",
							maxlength: "120",
							readonly: !o.value.canWrite,
							onBlur: se,
							onKeydown: _[2] ||= Jo(Ko((e) => e.target.blur(), ["prevent"]), ["enter"])
						}, null, 40, vj), [[Ro, c.value]]),
						P("span", yj, Ee(S.value), 1),
						o.value.canWrite ? F("", !0) : (M(), N("span", bj, "Nur lesen")),
						o.value.canDistribute ? (M(), N("button", {
							key: 1,
							type: "button",
							class: "nb-button",
							onClick: _[3] ||= (e) => g.value = {
								section: "Hausaufgaben",
								custom: ""
							}
						}, " Seite verteilen ")) : F("", !0)
					], 64)) : F("", !0),
					P("span", {
						class: D(["nb-status", "nb-status--" + p.value]),
						role: "status",
						"aria-live": "polite"
					}, Ee(x.value), 3)
				]),
				f.value ? (M(), N("div", {
					key: 0,
					class: D(["nb-banner", "nb-banner--" + f.value.type]),
					role: "alert"
				}, [P("span", null, Ee(f.value.text), 1), p.value === "conflict" ? (M(), N(j, { key: 0 }, [P("button", {
					type: "button",
					class: "nb-button",
					onClick: ae
				}, "Neu laden"), P("button", {
					type: "button",
					class: "nb-button nb-button--primary",
					onClick: oe
				}, "Meine Version behalten")], 64)) : (M(), N("button", {
					key: 1,
					type: "button",
					class: "nb-icon-button",
					"aria-label": "Meldung schließen",
					onClick: _[4] ||= (e) => f.value = null
				}, "×"))], 2)) : F("", !0),
				a.value && o.value ? (M(), aa(mj, {
					key: a.value + ":" + s.value,
					"page-id": a.value,
					"initial-content": o.value.content,
					"read-only": !o.value.canWrite,
					onChange: ne,
					onError: _[5] ||= (e) => C(e)
				}, null, 8, [
					"page-id",
					"initial-content",
					"read-only"
				])) : l.value ? F("", !0) : (M(), N("div", xj, [n.value.length === 0 ? (M(), N(j, { key: 0 }, [
					_[19] ||= P("h2", null, "Willkommen bei deinen Notizbüchern", -1),
					_[20] ||= P("p", null, "Text, Bilder und Handschrift frei auf einer unbegrenzten Seite – wie auf Papier, nur ohne Rand.", -1),
					P("button", {
						type: "button",
						class: "nb-button nb-button--primary",
						onClick: le
					}, "Erstes Notizbuch anlegen")
				], 64)) : (M(), N("p", Sj, "Wähle links eine Seite aus oder lege eine neue an."))]))
			]),
			m.value ? (M(), aa(Cs, {
				key: 0,
				title: "Neues Notizbuch",
				onClose: _[11] ||= (e) => m.value = null
			}, {
				footer: Vn(() => [P("button", {
					type: "button",
					class: "nb-button",
					onClick: _[10] ||= (e) => m.value = null
				}, "Abbrechen"), P("button", {
					type: "button",
					class: "nb-button nb-button--primary",
					disabled: u.value,
					onClick: ue
				}, "Anlegen", 8, Ej)]),
				default: Vn(() => [
					P("div", Cj, [P("label", { class: D(["nb-choice__option", { "nb-choice__option--active": m.value.kind === "personal" }]) }, [
						Hn(P("input", {
							"onUpdate:modelValue": _[6] ||= (e) => m.value.kind = e,
							type: "radio",
							value: "personal"
						}, null, 512), [[zo, m.value.kind]]),
						_[21] ||= P("strong", null, "Persönliches Notizbuch", -1),
						_[22] ||= P("span", null, "Für deine eigenen Notizen. Teilen kannst du es später.", -1)
					], 2), P("label", { class: D(["nb-choice__option", { "nb-choice__option--active": m.value.kind === "class" }]) }, [
						Hn(P("input", {
							"onUpdate:modelValue": _[7] ||= (e) => m.value.kind = e,
							type: "radio",
							value: "class"
						}, null, 512), [[zo, m.value.kind]]),
						_[23] ||= P("strong", null, "Klassennotizbuch", -1),
						_[24] ||= P("span", null, "Mit Inhaltsbibliothek, Platz für Zusammenarbeit, Bereich nur für Lehrkräfte und einem eigenen Bereich für jede:n Schüler:in.", -1)
					], 2)]),
					P("label", wj, [_[25] ||= P("span", null, "Name", -1), Hn(P("input", {
						"onUpdate:modelValue": _[8] ||= (e) => m.value.name = e,
						type: "text",
						maxlength: "120",
						placeholder: m.value.kind === "class" ? "z. B. Mathe 7b" : "z. B. Projekt X"
					}, null, 8, Tj), [[Ro, m.value.name]])]),
					m.value.kind === "class" ? (M(), aa(ys, {
						key: 0,
						modelValue: m.value.members,
						"onUpdate:modelValue": _[9] ||= (e) => m.value.members = e,
						onError: C
					}, null, 8, ["modelValue"])) : F("", !0)
				]),
				_: 1
			})) : F("", !0),
			h.value ? (M(), aa(Cs, {
				key: 1,
				title: "Mitglieder von " + h.value.notebook.name,
				onClose: _[14] ||= (e) => h.value = null
			}, {
				footer: Vn(() => [P("button", {
					type: "button",
					class: "nb-button",
					onClick: _[13] ||= (e) => h.value = null
				}, "Abbrechen"), P("button", {
					type: "button",
					class: "nb-button nb-button--primary",
					disabled: u.value || h.value.loading,
					onClick: fe
				}, "Speichern", 8, Oj)]),
				default: Vn(() => [h.value.loading ? (M(), N("p", Dj, "Lädt …")) : (M(), aa(ys, {
					key: 1,
					modelValue: h.value.members,
					"onUpdate:modelValue": _[12] ||= (e) => h.value.members = e,
					onError: C
				}, null, 8, ["modelValue"]))]),
				_: 1
			}, 8, ["title"])) : F("", !0),
			g.value ? (M(), aa(Cs, {
				key: 2,
				title: "Seite verteilen",
				onClose: _[18] ||= (e) => g.value = null
			}, {
				footer: Vn(() => [P("button", {
					type: "button",
					class: "nb-button",
					onClick: _[17] ||= (e) => g.value = null
				}, "Abbrechen"), P("button", {
					type: "button",
					class: "nb-button nb-button--primary",
					disabled: u.value,
					onClick: pe
				}, "Verteilen", 8, Mj)]),
				default: Vn(() => [
					P("p", null, "Jede:r Schüler:in erhält eine eigene Kopie von „" + Ee(o.value?.name) + "“ in diesem Abschnitt:", 1),
					P("label", kj, [_[27] ||= P("span", null, "Abschnitt", -1), Hn(P("select", { "onUpdate:modelValue": _[15] ||= (e) => g.value.section = e }, [(M(), N(j, null, jr(t, (e) => P("option", {
						key: e,
						value: e
					}, Ee(e), 9, Aj)), 64)), _[26] ||= P("option", { value: "" }, "Anderer Abschnitt …", -1)], 512), [[Bo, g.value.section]])]),
					g.value.section === "" ? (M(), N("label", jj, [_[28] ||= P("span", null, "Name des Abschnitts", -1), Hn(P("input", {
						"onUpdate:modelValue": _[16] ||= (e) => g.value.custom = e,
						type: "text",
						maxlength: "120"
					}, null, 512), [[Ro, g.value.custom]])])) : F("", !0)
				]),
				_: 1
			})) : F("", !0)
		], 2));
	}
}, Ij = document.getElementById("austit-notebook");
Ij && Qo(Fj).mount(Ij);
