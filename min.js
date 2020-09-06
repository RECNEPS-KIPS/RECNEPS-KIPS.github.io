$(function () {
    new MainManager().init();
});
var MainManager = function () {
    function a() {
        (w = aidn.window.width()), (M = aidn.window.height()), x && (x.resize(w, M), k && k.resize());
    }
    function e(a, e) {
        (e = T.length + P.length), 1 == C && (a += P.length);
        var n = Math.round((a / e) * 100) + "%";
        0 >= e && (n = "0%"), $("#scene_loading hr").css("width", n);
    }
    function n() {
        1 == ++C ? T.init(n, e) : 2 == C && t();
    }
    function t() {
        (g = 1),
            $("#scene_loading hr").css("display", "none"),
            $("#scene_loading hr").css("width", 0),
            $("#scene_loading").stop().fadeOut(200, "linear"),
            v
                ? ($("#scene_loading").stop().css("display", "none"), $("#bt_back").stop().css("display", "none"), p && $("#bt_fs").stop().css("display", "none"), $("#scene_main .set").stop().css("display", "none"))
                : $("#scene_main").stop().fadeIn(200, "linear"),
            (I = aidn.___waContext.currentTime),
            k.start(),
            P.start();
    }
    function i(a) {
        (X = !X) ? ($("#bt_backtrack a").text("背景音乐: 开启"), aidn.util.setCookie("bt", "on", 2592e3)) : ($("#bt_backtrack a").text("背景音乐: 关闭"), aidn.util.setCookie("bt", "off", 2592e3)), a && a.preventDefault();
    }
    function o() {
        if ((P.update(), 1 == g && 0 > --L && r(), v && 1 == g)) {
            var a = 1e3 * (aidn.___waContext.currentTime - I);
            if (l * s < a) {
                var e = Math.floor(a / s) + 1;
                if (((h += e - l), 0 <= (l = e) * s - a))
                    for (
                        e = Math.random(),
                        a = 1,
                        192 <= h
                            ? (h = 0)
                            : 128 <= h
                                ? (0.7 > e && (a = 2), 0.5 > e && (a = 3))
                                : 64 <= h
                                    ? (0.35 > e && (a = 2), 0.2 > e && (a = 3), 0.02 > e && (a = 0))
                                    : 32 <= h
                                        ? (0.35 > e && (a = 2), 0.24 > e && (a = 0))
                                        : 0 <= h && 0.4 > e && (a = 0),
                        e = 0;
                        e < a;
                        e++
                    )
                        (d = c[f]), 32 <= ++f && ((f = 0), aidn.util.shuffleArray(c)), k.changeId(d, 0, !0);
            }
        }
        x.render(b), window.requestAnimFrame(o);
    }
    function r() {
        v || _ || ((_ = !0), $("#bt_back").stop().fadeIn(200, "linear"), p && $("#bt_fs").stop().fadeIn(200, "linear"), $("#scene_main .set").stop().fadeIn(200, "linear"));
    }
    aidn.util.useDummyDiv(),
        (this.init = function () {
            aidn.window.addDummyDiv();
            var e = 1;
            2 <= window.devicePixelRatio && (e = 2),
                ((x = PIXI.autoDetectRenderer(w, M, { backgroundColor: 16756655, antialias: !1, resolution: e })).autoResize = !0),
                document.getElementById("view").appendChild(x.view),
                (b = new PIXI.Container()),
                k.init(),
                a(),
                $("#scene_top").fadeIn(300),
                o();
        });
    for (var l = 0, s = 6e4 / 280, d = Math.floor(32 * Math.random()), h = 0, c = [], f = 0, u = 0; 32 > u; u++) c[u] = u;
    var v = !1;
    1 == aidn.util.getQuery().auto && (v = !0), aidn.util.needExpandArea(!0);
    var p = aidn.util.enabledFullscreen();
    p &&
        ($("#bt_fs").css("display", "block"),
            $("#bt_fs").click(function (a) {
                aidn.util.fullscreen();
            })),
        $("#bt_start a").click(function (a) {
            $("#scene_top").stop().fadeOut(200, "linear"), $("#scene_loading").stop().fadeIn(200, "linear"), 2 == C ? t() : (new aidn.WebAudio().load(""), P.init(n, e)), a.preventDefault();
        }),
        $("#bt_about a").click(function (a) {
            $("#about").stop().fadeIn(200, "linear"), $("#about_cover").stop().fadeIn(200, "linear"), a.preventDefault();
        }),
        $("#bt_close,#about_cover").click(function () {
            $("#about").stop().fadeOut(200, "linear"), $("#about_cover").stop().fadeOut(200, "linear");
        }),
        $("#bt_back").click(function () {
            switch (g) {
                case 1:
                    (g = 0), k.end(), P.end(), $("#scene_top").stop().fadeIn(100, "linear"), $("#scene_loading").stop().fadeOut(100, "linear"), $("#scene_main").stop().fadeOut(100, "linear"), r();
                    break;
                default:
                    location.href = "https://github.com/HFIProgramming/mikutap";
            }
        }),
        $("#bt_backtrack a").click(i);
    u = aidn.util.checkJapanese();
    var m = aidn.util.checkMobile(),
        y = "Mikutap";
    y = u ? y + ",初音ミク10周年" : y + ",Miku10th";
    $("#bt_tw").click(function (a) {
        aidn.social.shareTw("https://aidn.jp/mikutap/", !0, document.title, "daniwell_aidn", y);
    }),
        $("#bt_fb").click(function (a) {
            aidn.social.shareFb("https://aidn.jp/mikutap/", !0);
        }),
        $("#bt_gp").click(function (a) {
            aidn.social.shareGp("https://aidn.jp/mikutap/", !0);
        });
    var w,
        M,
        I,
        x,
        b,
        C = 0,
        g = 0,
        P = new (function () {
            function a() {
                c && c();
            }
            function e(a, e) {
                f && f(a, e);
            }
            (this.init = function (t, o) {
                (f = o), (c = t);
                for (var r = [], l = 0; l < i; l++) r[l] = [l + ".mp3"];
                (n = new WebAudioManager()).load("data/track/track.json", r, a, e);
            }),
                (this.update = function () {
                    if (t) {
                        var a = 1e3 * (aidn.___waContext.currentTime - I);
                        if (v * p < a && ((v = Math.floor(a / p) + 1), 0 <= (a = v * p - a) && X))
                            for (var e = (v - 1) % u, i = s.length, r = 0; r < i; r++) {
                                var l = s[r][e];
                                0 <= l && n.play(l, a / 1e3, o[l]);
                            }
                    }
                }),
                (this.start = function () {
                    (t = !0), (v = 0);
                }),
                (this.end = function () {
                    (t = !1), (v = 0);
                });
            var n,
                t = !1,
                i = 11;
            this.length = i;
            for (var o = [], r = 0; r < i; r++) o[r] = 1.2;
            o[1] *= 0.6;
            var l,
                s = [[0, 1, 2, 1], []];
            (l = "34434434434434345665665665665656"), (l += "7887887887887878");
            var d = (l += "9119119119119191").length;
            for (r = 0; r < d; r++) {
                var h = parseInt(l.charAt(r));
                1 == h && (h = 10), (s[1][r] = h), 4 <= r && (s[0][r] = s[0][r % 4]);
            }
            var c,
                f,
                u = s[0].length,
                v = 0,
                p = 6e4 / 280;
        })(),
        T = new (function () {
            function a() {
                d && d();
            }
            function e(a, e) {
                h && h(a, e);
            }
            var n = -1,
                t = -1;
            (this.init = function (n, t) {
                (h = t), (d = n);
                for (var r = [], l = 0; l < o; l++) r[l] = [l + ".mp3"];
                (i = new WebAudioManager()).load("data/main/main.json", r, a, e);
            }),
                (this.play = function (a, e) {
                    var o = 1e3 * (aidn.___waContext.currentTime + l[a] - I),
                        s = Math.floor(o / c);
                    s == n && 0 <= t && i.stop(t), (n = s), (t = a), i.play(a, (c - (o % c)) / 1e3, r[a]);
                });
            var i,
                o = 32;
            this.length = o;
            for (var r = [], l = [], s = 0; s < o; s++) (r[s] = 1), (l[s] = 0.05);
            for (l[6] = 0.08, l[20] = 0.1, l[23] = 0.1, r[1] = 1.3, r[2] = 1.6, r[3] = 1.35, r[5] = 1.7, r[9] = 0.8, r[17] = 0.8, r[22] = 0.9, r[25] = 0.7, r[29] = 1.2, s = 0; s < o; s++) r[s] *= 1.2;
            var d,
                h,
                c = 6e4 / 280;
        })(),
        k = new (function () {
            function a(a, e) {
                for (var n = g.length, t = 0; t < n; t++) {
                    var i = g[t];
                    if (i.hitcheck(a, e)) return v != i.id && i.play(), i.id;
                }
                return !1;
            }
            function e(a) {
                r(65 <= a.keyCode ? a.keyCode - 55 : 48 <= a.keyCode ? a.keyCode - 48 : a.keyCode);
            }
            function n(a) {
                r(-1);
            }
            function t(e) {
                x = !0;
                var n = a((t = aidn.event.getPos(e)).x, t.y);
                if ((r(n), e.originalEvent && e.originalEvent.touches)) for (var t = e.originalEvent.touches.length, i = 1; i < t; i++) (n = e.originalEvent.touches[i]), (n = a(n.pageX, n.pageY)), r(n, 1);
            }
            function i(e) {
                if (x) {
                    var n;
                    r((n = a((n = aidn.event.getPos(e)).x, n.y)), 0, !0);
                }
                e.preventDefault();
            }
            function o(a) {
                x && (r(-1), (x = !1));
            }
            function r(a, e, n) {
                v != a &&
                    (1 != e && (v = a),
                        0 > v ||
                        (T.play(a % T.length, n),
                            (L = 90),
                            _ && ((_ = !1), $("#bt_back").stop().fadeOut(200, "linear"), p && $("#bt_fs").stop().fadeOut(200, "linear"), $("#scene_main .set").stop().fadeOut(200, "linear")),
                            0 >= --F && ((e = Math.floor(k.length * Math.random())), (n = e + P.length), (e = G[n].length ? G[n].pop() : new k[e](X, n)).play(), (F = 12 * Math.random() + 6)),
                            (e = a % P.length),
                            (e = 0 < G[e].length ? G[e].pop() : new P[e](X, e)).play()));
            }
            function l() {
                var a = Math.random();
                return 0.03 > a ? 4473924 : 0.18 > a ? 16777215 : R[s()];
            }
            function s() {
                for (var a = 0; 10 > a; a++) {
                    var e = Math.floor(S * Math.random());
                    if (2 < Math.abs(A - e)) break;
                }
                return e;
            }
            var d = function (a, e) {
                (this.id = a),
                    (this.setPosition = function (a, e) {
                        (r.position.x = n = a), (r.position.y = t = e);
                    }),
                    (this.setSize = function (a, e) {
                        (i = a), (o = e), r.clear(), r.beginFill(16777215), (r.alpha = 0), r.drawRect(0, 0, i, o);
                    }),
                    (this.play = function () {
                        O && TweenLite.fromTo(r, 0.5, { alpha: 0.7 }, { alpha: 0, ease: Power0.easeNon });
                    }),
                    (this.hitcheck = function (a, e) {
                        return n <= a && a < n + i && t <= e && e < t + o;
                    });
                var n = 0,
                    t = 0,
                    i = 0,
                    o = 0,
                    r = new PIXI.Graphics();
                (r.interactive = !0), e.addChild(r);
            },
                h = function (a, e) {
                    function n() {
                        var a = 1.3 * d;
                        c.clear(), c.beginFill(0), c.moveTo(0, 0);
                        var e, n;
                        if (0 == o) for (var t = 0; t < h.rotation; t += 30) (e = ((s * t + l) * Math.PI) / 180), (n = Math.cos(e) * a), (e = Math.sin(e) * a), c.lineTo(n, e);
                        else for (t = 360; h.rotation < t; t -= 30) (e = ((s * t + l) * Math.PI) / 180), (n = Math.cos(e) * a), (e = Math.sin(e) * a), c.lineTo(n, e);
                        (e = ((s * h.rotation + l) * Math.PI) / 180), (n = Math.cos(e) * a), (e = Math.sin(e) * a), c.lineTo(n, e), c.lineTo(0, 0), c.endFill();
                    }
                    function t() {
                        (o = 1), TweenLite.fromTo(h, 0.9, { rotation: 0 }, { rotation: 360, ease: Power1.easeOut, onUpdate: n, onComplete: i });
                    }
                    function i() {
                        r && r();
                    }
                    this.play = function (a, e) {
                        (o = 0),
                            (d = a),
                            (r = e),
                            (l = 360 * Math.random()),
                            (s = 1),
                            0.5 > Math.random() && (s = -1),
                            c.clear(),
                            c.beginFill(0),
                            c.moveTo(0, 0),
                            c.lineTo(1, 1),
                            c.endFill(),
                            TweenLite.fromTo(h, 0.6, { rotation: 0 }, { rotation: 360, ease: Power1.easeOut, onUpdate: n, onComplete: t });
                    };
                    var o,
                        r,
                        l,
                        s,
                        d,
                        h = { rotation: 0 },
                        c = new PIXI.Graphics();
                    a.addChild(c), (e.mask = c);
                },
                c = function (a) {
                    function e() {
                        h.clear(), 0 == i ? h.lineStyle(r, o) : h.beginFill(o);
                        for (var a = 0; a < s; a++) {
                            var e = c["p" + a].x,
                                n = c["p" + a].y;
                            0 == a ? h.moveTo(e, n) : h.lineTo(e, n);
                        }
                        (e = c.p0.x), (n = c.p0.y), h.lineTo(e, n);
                    }
                    function n() {
                        (h.visible = !1), t && t();
                    }
                    this.play = function (a, f) {
                        (i = a), (t = f), d.setChildIndex(h, d.children.length - 1), (h.visible = !0), (h.x = w / 2), (h.y = M / 2), (o = l());
                        var u = Math.min(w, M) * (0.32 * Math.random() + 0.16);
                        (s = Math.floor(5 * Math.random()) + 3), (r = 5 * Math.random() + 3), h.clear(), (h.rotation = 30 * Math.floor(6 * Math.random())), (c = {});
                        var v;
                        v = 0 == i ? 3 : 2.5;
                        for (var p = 360 / s, m = 0; m < s; m++) {
                            var y = (m * p * Math.PI) / 180,
                                I = u * Math.cos(y),
                                x = ((y = u * Math.sin(y)), I + u * (Math.random() - 0.5) * v),
                                b = y + u * (Math.random() - 0.5) * v;
                            (c["p" + m] = { x: I, y: y }), TweenLite.to(c["p" + m], 0.6, { x: x, y: b });
                        }
                        (c.progress = 0), TweenLite.to(c, 0.8, { progress: 1, onUpdate: e, onComplete: n });
                    };
                    var t,
                        i,
                        o,
                        r,
                        s,
                        d = a,
                        h = new PIXI.Graphics();
                    d.addChild(h);
                    var c = {};
                },
                f = function (a, e) {
                    function n() {
                        (s.visible = !1), 0 <= i.id && G[i.id].push(i), r && r();
                    }
                    var t = function (a) {
                        function e() {
                            t.clear(), t.lineStyle(l, s), t.moveTo(r.x, r.y), 0 == c ? t.lineTo(i.x, i.y) : t.lineTo(o.x, o.y);
                        }
                        function n() {
                            0 == c ? ((c = 1), (r = { x: i.x, y: i.y }), TweenLite.to(r, h, { x: o.x, y: o.y, ease: Power1.easeOut, onUpdate: e, onComplete: n })) : (t.clear(), (t.visible = !1));
                        }
                        this.play = function (a, f, u, v) {
                            return (
                                (t.visible = !0),
                                (c = 0),
                                (i = a),
                                (o = f),
                                (l = u),
                                (s = v),
                                (d = 0.2 * Math.random() + 0.2),
                                (h = 0.2 * Math.random() + 0.2),
                                (r = { x: i.x, y: i.y }),
                                TweenLite.to(r, d, { x: o.x, y: o.y, ease: Power1.easeOut, onUpdate: e, onComplete: n }),
                                d + h
                            );
                        };
                        var t = new PIXI.Graphics();
                        a.addChild(t);
                        var i, o, r, l, s, d, h, c;
                    };
                    this.play = function (a) {
                        (r = a), o.setChildIndex(s, o.children.length - 1), (s.visible = !0), (s.x = w / 2), (s.y = M / 2), (s.rotation = 0.5 * Math.PI * Math.floor(4 * Math.random())), (a = Math.floor(7 * Math.random() + 2));
                        var e = 0.8 * Math.min(w, M);
                        i.size = e;
                        for (var h, c = (e / a) * (0.4 * Math.random() + 0.7), f = (e / a) * (0.4 * Math.random() + 0.1), u = l(), v = 0, p = 0; p <= a; p++) {
                            var m = { x: -e / 2, y: (h = (p - 0.5 * a) * c) },
                                y = { x: e / 2, y: h };
                            v < (m = (h = d[p] ? d[p] : new t(s)).play(m, y, f, u)) && (v = m), (d[p] = h);
                        }
                        TweenLite.delayedCall(v, n);
                    };
                    var i = this,
                        o = a;
                    this.id = e;
                    var r,
                        s = new PIXI.Container(),
                        d = [];
                    (this.size = 0), (this.container = s), o.addChild(s);
                };
            (this.resize = function () {
                if (C) {
                    var a = 0,
                        e = y,
                        n = I;
                    M < w && ((e = I), (n = y));
                    for (var t = w / e, i = M / n, o = 0; o < n; o++)
                        for (var r = 0; r < e; r++) {
                            var l;
                            g[a] ? (l = g[a]) : ((l = new d(a, u)), (g[a] = l)), l.setPosition(t * r, i * o), l.setSize(t, i), a++;
                        }
                    z.resize();
                }
            }),
                (this.init = function () {
                    (C = !0),
                        (X = new PIXI.Container()),
                        b.addChild(X),
                        (u = new PIXI.Container()),
                        b.addChild(u),
                        (z = new (function (a) {
                            function e() {
                                o.clear(), o.beginFill(16777215), o.drawRect(0, 0, w, M);
                            }
                            function n() {
                                t.resize();
                            }
                            (this.resize = function () {
                                o.clear(), o.beginFill(i), o.drawRect(0, 0, w, M);
                            }),
                                (this.flash = function () {
                                    r.setChildIndex(o, r.children.length - 1);
                                    for (var a = 0; 3 > a; a += 2) TweenLite.delayedCall(0.07 * a, e), TweenLite.delayedCall(0.07 * (a + 1), n);
                                }),
                                (this.setColor = function (a, e) {
                                    (i = a), 0 <= e || (e = 0), r.setChildIndex(o, e), t.resize();
                                });
                            var t = this,
                                i = 16777215,
                                o = new PIXI.Graphics(),
                                r = a;
                            r.addChild(o);
                        })(X)).setColor(8965324, 0);
                }),
                (this.start = function () {
                    m || ($("#view").on("mousedown", t), $(window).on("mousemove", i), $(window).on("mouseup", o), $(window).on("keydown", e), $(window).on("keyup", n)),
                        (m || window.TouchEvent) && ($("#view").on("touchstart", t), $(window).on("touchmove", i), $(window).on("touchend", o)),
                        $("#view").css("cursor", "pointer");
                }),
                (this.end = function () {
                    m || ($("#view").off("mousedown", t), $(window).off("mousemove", i), $(window).off("mouseup", o), $(window).off("keydown", e), $(window).off("keyup", n)),
                        (m || window.TouchEvent) && ($("#view").off("touchstart", t), $(window).off("touchmove", i), $(window).off("touchend", o)),
                        $("#view").css("cursor", "auto");
                }),
                (this.changeId = function (a, e, n) {
                    r(a, e, n);
                });
            var u,
                v = -1,
                y = 4,
                I = 8,
                x = !1,
                C = !1,
                g = [],
                P = [
                    function (a, e) {
                        function n() {
                            (s.visible = !1), G[i.id].push(i);
                        }
                        var t = function (a) {
                            function e() {
                                n.visible = !1;
                            }
                            this.play = function (a, t, i) {
                                (n.visible = !0), n.clear();
                                var o = w * Math.random(),
                                    r = M * Math.random(),
                                    l = Math.min(w, M) * (0.03 * Math.random() + 0.02);
                                return (
                                    n.lineStyle(3 * Math.random() + 3, i),
                                    n.drawCircle(0, 0, l),
                                    (n.x = a),
                                    (n.y = t),
                                    (n.scale.x = 0),
                                    (n.scale.y = 0),
                                    (n.rotation = Math.random() * Math.PI),
                                    (a = 0.2 * Math.random() + 0.4),
                                    TweenLite.to(n, a, { x: o, y: r, rotation: Math.random() * Math.PI, ease: Power3.easeOut, onComplete: e }),
                                    TweenLite.to(n.scale, a, { x: 1, y: 1, ease: Back.easeOut.config(1.7) }),
                                    a
                                );
                            };
                            var n = new PIXI.Graphics();
                            a.addChild(n);
                        };
                        this.play = function () {
                            o.setChildIndex(s, o.children.length - 1), (s.visible = !0);
                            for (var a = 5 * Math.random() + 7, e = 0, i = w / 2, d = M / 2, h = l(), c = 0; c < a; c++) {
                                var f = (r[c] ? r[c] : new t(s)).play(i, d, h);
                                e < f && (e = f);
                            }
                            TweenLite.delayedCall(e, n);
                        };
                        var i = this,
                            o = a;
                        this.id = e;
                        var r = [],
                            s = new PIXI.Container();
                        o.addChild(s);
                    },
                    function (a, e) {
                        function n() {
                            (s.visible = !1), G[i.id].push(i);
                        }
                        var t = function (a) {
                            function e() {
                                n.visible = !1;
                            }
                            this.play = function (a, t, i) {
                                (n.visible = !0), n.clear();
                                var o = w * Math.random(),
                                    r = M * Math.random(),
                                    l = Math.min(w, M) * (0.04 * Math.random() + 0.02);
                                return (
                                    n.beginFill(i),
                                    n.drawRect(-l / 2, -l / 2, l, l),
                                    (n.x = a),
                                    (n.y = t),
                                    (n.scale.x = 0),
                                    (n.scale.y = 0),
                                    (n.rotation = Math.random() * Math.PI),
                                    (a = 0.2 * Math.random() + 0.4),
                                    TweenLite.to(n, a, { x: o, y: r, rotation: Math.random() * Math.PI, ease: Power3.easeOut, onComplete: e }),
                                    TweenLite.to(n.scale, a, { x: 1, y: 1, ease: Back.easeOut.config(1.7) }),
                                    a
                                );
                            };
                            var n = new PIXI.Graphics();
                            a.addChild(n);
                        };
                        this.play = function () {
                            o.setChildIndex(s, o.children.length - 1), (s.visible = !0);
                            for (var a = 5 * Math.random() + 7, e = 0, i = w / 2, d = M / 2, h = l(), c = 0; c < a; c++) {
                                var f = (r[c] ? r[c] : new t(s)).play(i, d, h);
                                e < f && (e = f);
                            }
                            TweenLite.delayedCall(e, n);
                        };
                        var i = this,
                            o = a;
                        this.id = e;
                        var r = [],
                            s = new PIXI.Container();
                        o.addChild(s);
                    },
                    function (a, e) {
                        function n() {
                            (s.visible = !1), G[i.id].push(i);
                        }
                        var t = function (a) {
                            function e() {
                                l.beginFill(i), l.drawCircle(0, 0, o), (l.scale.x = 0), (l.scale.y = 0), TweenLite.to(l.scale, 0.7, { x: 1, y: 1, ease: Elastic.easeOut.config(1, 0.3), onComplete: n });
                            }
                            function n() {
                                TweenLite.to(l.scale, 0.4, { x: 0, y: 0, ease: Power2.easeOut, onComplete: t, delay: 0.1 });
                            }
                            function t() {
                                (l.visible = !1), r && r();
                            }
                            this.play = function (a, n, t, s, d, h) {
                                (l.visible = !0), l.clear(), (l.x = s), (l.y = d), (i = n), (o = t), (r = h), TweenLite.delayedCall(a, e);
                            };
                            var i,
                                o,
                                r,
                                l = new PIXI.Graphics();
                            a.addChild(l);
                        };
                        this.play = function () {
                            o.setChildIndex(s, o.children.length - 1), (s.visible = !0), (s.x = w / 2), (s.y = M / 2), (s.rotation = Math.random() * Math.PI * 2);
                            for (var a = 10, e = l(), i = (Math.min(w, M) / 64) * (0.6 * Math.random() + 0.7), d = 2, h = 0; 40 > h; h++) {
                                var c,
                                    f = (25 * h * Math.PI) / 180,
                                    u = a * Math.cos(f);
                                (f = a * Math.sin(f)), (a = a + i), (d = d + 0.22);
                                c = r[h] ? r[h] : new t(s);
                                var v = null;
                                39 == h && (v = n), c.play(0.03 * h, e, d, u, f, v);
                            }
                        };
                        var i = this,
                            o = a;
                        this.id = e;
                        var r = [],
                            s = new PIXI.Container();
                        o.addChild(s);
                    },
                    function (a, e) {
                        function n() {
                            G[t.id].push(t);
                        }
                        this.play = function () {
                            i.play(0, n);
                        };
                        var t = this;
                        this.id = e;
                        var i = new c(a);
                    },
                    function (a, e) {
                        function n() {
                            G[t.id].push(t);
                        }
                        this.play = function () {
                            i.play(1, n);
                        };
                        var t = this;
                        this.id = e;
                        var i = new c(a);
                    },
                    function (a, e) {
                        function n() {
                            (o.visible = !1), G[t.id].push(t);
                        }
                        this.play = function () {
                            i.setChildIndex(o, i.children.length - 1), (o.visible = !0), (o.x = w / 2), (o.y = M / 2);
                            var a = l(),
                                e = Math.min(w, M) * (0.28 * Math.random() + 0.2),
                                t = Math.floor(5 * Math.random()) + 3;
                            r.clear(), r.lineStyle(7 * Math.random() + 4, a, 1), (r.rotation = 30 * Math.floor(6 * Math.random()));
                            a = 360 / t;
                            for (var d = 0; d <= t; d++) {
                                var h = (d * a * Math.PI) / 180,
                                    c = e * Math.cos(h);
                                h = e * Math.sin(h);
                                0 == d ? r.moveTo(c, h) : r.lineTo(c, h);
                            }
                            (t = 0.8 * Math.random() + 0.4), (a = 0.8 * Math.random() + 0.4), TweenLite.fromTo(r.scale, 0.9, { x: t, y: t }, { x: a, y: a, ease: Bounce.easeOut }), s.play(e, n);
                        };
                        var t = this,
                            i = a;
                        this.id = e;
                        var o = new PIXI.Container(),
                            r = new PIXI.Graphics();
                        i.addChild(o), o.addChild(r);
                        var s = new h(o, r);
                    },
                    function (a, e) {
                        function n() {
                            (r.visible = !1), G[i.id].push(i);
                        }
                        var t = function (a) {
                            function e() {
                                var a = Math.min(w, M),
                                    e = a * (0.08 * Math.random() + 0.05);
                                r.lineStyle(4 * Math.random() + 4, l()),
                                    r.drawRect(-e / 2, -e / 2, e, e),
                                    (r.x = i + (a / 2) * (Math.random() - 0.5)),
                                    (r.y = o + (a / 2) * (Math.random() - 0.5)),
                                    (r.scale.x = 0),
                                    (r.scale.y = 0),
                                    (r.rotation = Math.random() * Math.PI),
                                    TweenLite.to(r, 0.5, { x: i, y: o, rotation: 0, ease: Back.easeOut.config(1.7), onComplete: n }),
                                    TweenLite.to(r.scale, 0.5, { x: 1, y: 1, ease: Back.easeOut.config(1.7) });
                            }
                            function n() {
                                var a = Math.min(w, M),
                                    e = i + (a / 2) * (Math.random() - 0.5);
                                a = o + (a / 2) * (Math.random() - 0.5);
                                TweenLite.to(r, 0.5, { x: e, y: a, rotation: -Math.random() * Math.PI, ease: Back.easeIn.config(1.7), onComplete: t, delay: 0.2 }),
                                    TweenLite.to(r.scale, 0.5, { x: 0, y: 0, ease: Back.easeIn.config(1.7), delay: 0.2 });
                            }
                            function t() {
                                r.visible = !1;
                            }
                            this.play = function (a, n) {
                                n, (r.visible = !0), r.clear(), (i = w * Math.random()), (o = M * Math.random()), TweenLite.delayedCall(a, e);
                            };
                            var i,
                                o,
                                r = new PIXI.Graphics();
                            a.addChild(r);
                        };
                        this.play = function () {
                            o.setChildIndex(r, o.children.length - 1), (r.visible = !0);
                            for (var a = Math.floor(5 * Math.random() + 5), e = 0; e < a; e++) {
                                var i;
                                i = s[e] ? s[e] : new t(r);
                                var l = null;
                                e == a - 1 && (l = n), i.play(0.06 * e, l);
                            }
                        };
                        var i = this,
                            o = a;
                        this.id = e;
                        var r = new PIXI.Container();
                        o.addChild(r);
                        var s = [];
                    },
                    function (a, e) {
                        function n() {
                            (r.visible = !1), G[i.id].push(i);
                        }
                        var t = function (a) {
                            function e() {
                                var a = Math.min(w, M) * (0.05 * Math.random() + 0.014);
                                r.beginFill(l()), r.drawCircle(0, 0, a), (r.x = i), (r.y = o), (r.scale.x = 0), (r.scale.y = 0), TweenLite.to(r.scale, 0.5, { x: 1, y: 1, ease: Elastic.easeOut.config(1, 0.3), onComplete: n });
                            }
                            function n() {
                                TweenLite.to(r.scale, 0.5, { x: 0, y: 0, ease: Back.easeIn.config(1.7), onComplete: t, delay: 0.2 });
                            }
                            function t() {
                                r.visible = !1;
                            }
                            this.play = function (a, n) {
                                n, (r.visible = !0), r.clear(), (i = w * Math.random()), (o = M * Math.random()), TweenLite.delayedCall(a, e);
                            };
                            var i,
                                o,
                                r = new PIXI.Graphics();
                            a.addChild(r);
                        };
                        this.play = function () {
                            o.setChildIndex(r, o.children.length - 1), (r.visible = !0);
                            for (var a = Math.floor(5 * Math.random() + 5), e = 0; e < a; e++) {
                                var i;
                                i = s[e] ? s[e] : new t(r);
                                var l = null;
                                e == a - 1 && (l = n), i.play(0.06 * e, l);
                            }
                        };
                        var i = this,
                            o = a;
                        this.id = e;
                        var r = new PIXI.Container();
                        o.addChild(r);
                        var s = [];
                    },
                    function (a, e) {
                        function n() {
                            (o.visible = !1), G[t.id].push(t);
                        }
                        this.play = function () {
                            (o.visible = !0), i.setChildIndex(o, i.children.length - 1), (l.container.mask = r), l.play(n);
                            var a = l.size / 2;
                            (r.x = w / 2), (r.y = M / 2), r.clear(), r.beginFill(0), r.drawCircle(0, 0, a);
                            var e = (a = ((45 * Math.PI) / 180) * Math.floor(2 * Math.random())) + ((45 * Math.PI) / 180) * Math.floor(4 * Math.random() - 2),
                                t = 0.3 * Math.random() + 1,
                                s = 0.3 * -Math.random() + 1;
                            TweenLite.fromTo(l.container, 0.6, { rotation: a }, { rotation: e, ease: Power2.easeOut }),
                                TweenLite.fromTo(l.container.scale, 0.6, { x: t, y: t }, { x: s, y: s, ease: Back.easeOut.config(1.7) }),
                                TweenLite.fromTo(r.scale, 0.6, { x: t, y: t }, { x: s, y: s, ease: Back.easeOut.config(1.7) });
                        };
                        var t = this,
                            i = a;
                        this.id = e;
                        var o = new PIXI.Container();
                        i.addChild(o);
                        var r = new PIXI.Graphics();
                        o.addChild(r);
                        var l = new f(o, -1);
                    },
                    function (a, e) {
                        function n() {
                            (o.visible = !1), G[t.id].push(t);
                        }
                        this.play = function () {
                            i.setChildIndex(o, i.children.length - 1), o.clear(), (o.visible = !0), o.lineStyle(5 * Math.random() + 3, l(), 1), (o.x = w / 2), (o.y = M / 2);
                            for (var a = 0.6 * Math.min(w, M), e = Math.floor(5 * Math.random()) + 3, t = 360 / e, r = ((0.5 * Math.max(w, M)) / a) * (1.6 + 0.6 / e), s = 0; s <= e; s++) {
                                var d = (s * t * Math.PI) / 180,
                                    h = a * Math.cos(d);
                                d = a * Math.sin(d);
                                0 == s ? o.moveTo(h, d) : o.lineTo(h, d);
                            }
                            (a = 0.3 * Math.random() + 0.6),
                                TweenLite.fromTo(o.scale, a, { x: 0, y: 0 }, { x: r, y: r, onComplete: n, ease: Power2.easeOut }),
                                TweenLite.fromTo(o, a, { rotation: Math.random() * Math.PI }, { rotation: Math.random() * Math.PI, ease: Power1.easeOut });
                        };
                        var t = this,
                            i = a;
                        this.id = e;
                        var o = new PIXI.Graphics();
                        i.addChild(o);
                    },
                    function (a, e) {
                        function n() {
                            (o.visible = !1), G[t.id].push(t);
                        }
                        this.play = function () {
                            i.setChildIndex(o, i.children.length - 1), (o.visible = !0), (o.x = w / 2), (o.y = M / 2);
                            var a = l(),
                                e = Math.min(w, M) * (0.25 * Math.random() + 0.1);
                            r.clear(), r.beginFill(a), r.drawCircle(0, 0, e), s.play(e, n);
                        };
                        var t = this,
                            i = a;
                        this.id = e;
                        var o = new PIXI.Container(),
                            r = new PIXI.Graphics();
                        i.addChild(o), o.addChild(r);
                        var s = new h(o, r);
                    },
                    function (a, e) {
                        function n() {
                            (r.visible = !1), G[i.id].push(i);
                        }
                        var t = function (a) {
                            function e() {
                                TweenLite.to(i.scale, 0.4, { x: 0, y: 0, ease: Back.easeIn.config(2), onComplete: n, delay: 0.7 }),
                                    TweenLite.to(i, 0.4, { rotation: Math.random() * Math.PI * 2, ease: Back.easeIn.config(2), delay: 0.7 });
                            }
                            function n() {
                                (i.visibloe = !1), t && t();
                            }
                            (this.init = function (a, e, n, t) {
                                (_state = 0), (o = n), (l = t), (i.x = a), (i.y = e);
                            }),
                                (this.play = function (a, n) {
                                    (t = n),
                                        i.clear(),
                                        (i.visibloe = !0),
                                        i.beginFill(l),
                                        i.drawRect(0.5 * -o, 0.5 * -o, o, o),
                                        TweenLite.fromTo(i.scale, 0.3, { x: 0, y: 0 }, { x: 1, y: 1, ease: Back.easeOut.config(1.7), onComplete: e, delay: a }),
                                        TweenLite.fromTo(i, 0.7, { rotation: Math.random() * Math.PI * 2 }, { rotation: 0, ease: Elastic.easeOut.config(1, 0.3), delay: a });
                                    var s = Math.random() * Math.PI;
                                    TweenLite.fromTo(r, 1, { rotation: 0 }, { rotation: s, ease: Bounce.easeOut, delay: a });
                                });
                            var t,
                                i = new PIXI.Graphics();
                            a.addChild(i);
                            var o, l;
                        };
                        this.play = function () {
                            o.setChildIndex(r, o.children.length - 1), (r.visible = !0), (r.x = w / 2), (r.y = M / 2);
                            var a = Math.floor(8 * Math.random() + 6),
                                e = Math.min(w, M) * (0.25 * Math.random() + 0.25),
                                i = 360 / a,
                                d = e * (0.15 * Math.random() + 0.05),
                                h = l(),
                                c = (Math.PI / 2) * Math.floor(4 * Math.random()),
                                f = 1;
                            0.5 > Math.random() && (f = -1);
                            for (var u = 0; u < a; u++) {
                                var v,
                                    p = ((f * i * u + c) * Math.PI) / 180,
                                    m = e * Math.cos(p);
                                p = e * Math.sin(p);
                                v = s[u] ? s[u] : new t(r);
                                var y = null;
                                u == a - 1 && (y = n), v.init(m, p, d, h), v.play(0.05 * u, y);
                            }
                        };
                        var i = this,
                            o = a;
                        this.id = e;
                        var r = new PIXI.Container(),
                            s = [];
                        o.addChild(r);
                    },
                    function (a, e) {
                        function n() {
                            (r.visible = !1), G[i.id].push(i);
                        }
                        var t = function (a) {
                            function e() {
                                var a = 0.5 * w,
                                    e = i.x + Math.random() * a - a / 2;
                                a = i.y + Math.random() * a - a / 2;
                                TweenLite.to(i.scale, 0.3, { x: 0, y: 0, ease: Power1.easeOut, onComplete: n, delay: 0.5 }), TweenLite.to(i, 0.3, { x: e, y: a, ease: Power2.easeOut, delay: 0.5 });
                            }
                            function n() {
                                (i.visibloe = !1), t && t();
                            }
                            (this.init = function (a, e, n, t) {
                                (_state = 0), (o = n), (r = t), (i.x = a), (i.y = e);
                            }),
                                (this.play = function (a, n) {
                                    (t = n),
                                        i.clear(),
                                        (i.visibloe = !0),
                                        i.beginFill(r),
                                        i.drawCircle(0, 0, 0.5 * o),
                                        TweenLite.fromTo(i.scale, 0.3, { x: 0, y: 0 }, { x: 1, y: 1, ease: Back.easeOut.config(1.7), onComplete: e, delay: a });
                                });
                            var t,
                                i = new PIXI.Graphics();
                            a.addChild(i);
                            var o, r;
                        };
                        this.play = function () {
                            o.setChildIndex(r, o.children.length - 1), (r.visible = !0), (r.x = w / 2), (r.y = M / 2);
                            var a = Math.floor(8 * Math.random() + 6),
                                e = Math.min(w, M) * (0.2 * Math.random() + 0.25),
                                i = 360 / a,
                                d = e * (0.2 * Math.random() + 0.05),
                                h = l(),
                                c = (Math.PI / 2) * Math.floor(4 * Math.random()),
                                f = 1;
                            0.5 > Math.random() && (f = -1);
                            for (var u = 0; u < a; u++) {
                                var v,
                                    p = ((f * i * u + c) * Math.PI) / 180,
                                    m = e * Math.cos(p);
                                p = e * Math.sin(p);
                                v = s[u] ? s[u] : new t(r);
                                var y = null;
                                u == a - 1 && (y = n), v.init(m, p, d, h), v.play(0.05 * u, y);
                            }
                        };
                        var i = this,
                            o = a;
                        this.id = e;
                        var r = new PIXI.Container(),
                            s = [];
                        o.addChild(r);
                    },
                    function (a, e) {
                        function n() {
                            (o.visible = !1), G[t.id].push(t);
                        }
                        this.play = function () {
                            (o.visible = !0), i.setChildIndex(o, i.children.length - 1), (o.x = 0.2 * w + 0.6 * w * Math.random()), (o.y = 0.2 * M + 0.6 * M * Math.random());
                            var a = Math.min(w, M) * (0.7 + 0.2 * Math.random()),
                                e = (a / 10) * (0.5 + 0.8 * Math.random()),
                                t = l();
                            r.clear(),
                                r.beginFill(t),
                                r.drawRect(0, -e / 2, a, e),
                                s.clear(),
                                s.beginFill(t),
                                s.drawRect(-e / 2, 0, e, a),
                                (r.y = 0),
                                (r.x = -a / 2),
                                (s.x = 0),
                                (s.y = -a / 2),
                                (o.rotation = (45 * Math.PI) / 180),
                                (r.scale.x = 0),
                                (s.scale.y = 0),
                                (a = 0.5 > Math.random() ? (-135 * Math.PI) / 180 : (215 * Math.PI) / 180),
                                new TimelineLite()
                                    .to(r.scale, 0.4, { x: 1, ease: Power2.easeOut })
                                    .to(s.scale, 0.4, { y: 1, ease: Power2.easeOut }, 0.1)
                                    .to(o, 0.6, { rotation: a, ease: Back.easeOut.config(1.7) }, 0)
                                    .to(r.scale, 0.3, { x: 0, ease: Power2.easeOut })
                                    .to(s.scale, 0.3, { y: 0, ease: Power2.easeOut, onComplete: n }, 0.6);
                        };
                        var t = this,
                            i = a;
                        this.id = e;
                        var o = new PIXI.Container(),
                            r = new PIXI.Graphics(),
                            s = new PIXI.Graphics();
                        i.addChild(o), o.addChild(r), o.addChild(s);
                    },
                    function (a, e) {
                        function n() {
                            if ((h++, i < h))
                                switch (o) {
                                    case 0:
                                        o = 1;
                                        var a = d[0];
                                        (c.x = a.x), (c.y = a.y), (h = 0), n();
                                        break;
                                    case 1:
                                        o = 2;
                                }
                            else TweenLite.to(c, 0.1, { x: d[h].x, y: d[h].y, onComplete: n, onUpdate: t, ease: Power1.easeOut });
                        }
                        function t() {
                            switch ((f.clear(), f.lineStyle(r, s, 1), o)) {
                                case 0:
                                    f.moveTo(d[0].x, d[0].y);
                                    for (var a = 1; a < h; a++) f.lineTo(d[a].x, d[a].y);
                                    f.lineTo(c.x, c.y);
                                    break;
                                case 1:
                                    for (f.moveTo(c.x, c.y), a = h; a <= i; a++) f.lineTo(d[a].x, d[a].y);
                            }
                        }
                        (this.play = function () {
                            f.clear(),
                                (f.visible = !0),
                                0.5 > Math.random() ? ((f.x = 0), (f.y = 0), (f.rotation = 0)) : ((f.x = w), (f.y = M), (f.rotation = Math.PI)),
                                (h = o = 0),
                                (i = Math.floor(3 * Math.random()) + 3),
                                (r = 20 * Math.random() + 2),
                                (s = l());
                            var a,
                                e = 0.5 > Math.random();
                            a = e ? w / i : M / i;
                            for (var t = 0; t <= i; t++) {
                                var u;
                                e ? ((u = { x: t * a, y: M * Math.random() }), 0 == t && (u.x -= 10), t == i && (u.x += 10)) : ((u = { y: t * a, x: w * Math.random() }), 0 == t && (u.y -= 10), t == i && (u.y += 10)), (d[t] = u);
                            }
                            (e = d[0]), (c.x = e.x), (c.y = e.y), n();
                        }),
                            (this.id = e);
                        var i,
                            o,
                            r,
                            s,
                            d = [],
                            h = 0,
                            c = { x: 0, y: 0 },
                            f = new PIXI.Graphics();
                        a.addChild(f);
                    },
                    f,
                ],
                k = [
                    function (a, e) {
                        function n() {
                            h.clear(), h.beginFill(r), h.moveTo(i.pos.b1.x, i.pos.b1.y), h.lineTo(i.pos.b0.x, i.pos.b0.y);
                            for (var a = 0; i.pos["p" + a]; a++) {
                                var e = i.pos["p" + a];
                                h.lineTo(e.x, e.y);
                            }
                            h.endFill();
                        }
                        function t() {
                            D == c && z.setColor(r, d - 1), (h.visible = !1), G[i.id].push(i);
                        }
                        this.play = function () {
                            D = c;
                            var a = s();
                            (r = E[a]),
                                $("#about").css("background-color", "#" + r.toString(16)),
                                0.3 > Math.random() && z.flash(d),
                                (A = a),
                                h.clear(),
                                (h.visible = !0),
                                (d = o.children.length - 1 - Math.floor(2 * Math.random())),
                                o.setChildIndex(h, d);
                            a = 0.5 > Math.random();
                            var e = Math.floor(4 * Math.random()) + 1;
                            i.pos = {};
                            var f = 0;
                            a ? ((f = M / e), (i.pos.b0 = { x: 0, y: 0 }), (i.pos.b1 = { x: 0, y: M })) : ((f = w / e), (i.pos.b0 = { x: 0, y: 0 }), (i.pos.b1 = { x: w, y: 0 })),
                                0.5 > Math.random() ? ((h.rotation = 0), (h.x = 0), (h.y = 0)) : ((h.rotation = Math.PI), (h.x = w), (h.y = M));
                            for (var u = (l = 0); u <= e; u++) {
                                var v = { x: 0, y: 0 },
                                    p = 0;
                                0 != u && u != e && (p = (f / 4) * Math.random() - f / 8),
                                    a ? (v.y = f * u + p) : (v.x = f * u + p),
                                    (i.pos["p" + u] = v),
                                    (v = 0.4 * Math.random() + 0.3),
                                    (l = 2),
                                    TweenLite.to(i.pos["p" + u], v, a ? { x: w } : { y: M });
                            }
                            (i.progress = 0), TweenLite.to(i, l, { progress: 1, ease: Power0.easeNone, onUpdate: n, onComplete: t });
                        };
                        var i = this,
                            o = a;
                        (this.id = e), (this.progress = 0), (this.pos = {});
                        var r,
                            l,
                            d = 0,
                            h = new PIXI.Graphics();
                        o.addChild(h);
                        var c = Math.floor(aidn.util.getTime());
                    },
                ];
            aidn.util.shuffleArray(P);
            for (var X, F = 16 * Math.random(), G = [], B = 0; B < P.length + k.length; B++) G[B] = [];
            var z,
                E = [13430510, 8965324, 9099756, 961181, 1089457, 34969, 13934238, 16110792, 15488645, 16531063, 5853015, 3222317],
                R = [13430510, 8965324, 9099756, 961181, 1089457, 34969, 13934238, 16110792, 15488645, 16531063, 5853015, 3222317],
                S = E.length,
                A = 0,
                D = 0;
        })(),
        _ = !1,
        L = 0,
        O = "off",
        X = "off" == aidn.util.getCookie("bt");
    i(),
        aidn.util.webaudio
            ? ($("#ng").css("display", "none"), $(".ok").css("display", "block"), m && $("#scene_main .attention").html("轻触 &amp; 滑动!"), u || $("#scene_top .attention").text("* 把声音开大点，然后享受吧！"))
            : ($("#ng").css("display", "block"), $(".ok").css("display", "none"), u || $("#ng .atten").html("抱歉，</br>你的浏览器不支此页面")),
        (PIXI.utils._saidHello = !0),
        aidn.window.resize(a);
},
    WebAudioManager = function () {
        function a() {
            if ((l++, (r.now = l), i && i(l, e), e <= l)) t && t();
            else {
                var d = new aidn.WebAudio();
                d.load(o[n[l]], a), (s[l] = d);
            }
        }
        (this.load = function (l, s, d, h) {
            (t = d),
                (i = h),
                (n = s),
                (e = s.length),
                (r.length = e),
                $.getJSON(l, function (e) {
                    (o = e), a();
                });
        }),
            (this.play = function (a, n, t) {
                0 <= t || (t = 1), a < e && s[a].play(0, !1, null, 0, t, n);
            }),
            (this.stop = function (a) {
                a < e && s[a].stop();
            });
        var e,
            n,
            t,
            i,
            o,
            r = this,
            l = -1,
            s = [];
        this.now = this.length = 0;
    };
