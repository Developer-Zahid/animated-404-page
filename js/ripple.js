(function () {
    /*
     * Ripple Effect based on:
     * ------------------------
     * Ripple v1.0
     * Copyright 2010 John Pezzetti
     * By John Pezzetti of http://www.otherhalffull.com
     *
     */
    (function () {
        function F() {
            if (g.getContext) {
                var a, b = a = 0;
                if (document.documentElement && (document.documentElement.clientWidth || document
                        .documentElement.clientHeight)) a = document.documentElement.clientWidth, b = document
                    .documentElement.clientHeight;
                if (document.body && (document.body.clientWidth || document.body.clientHeight)) a = Math.max(a,
                    document.body.clientWidth), b = Math.max(b, document.body.clientHeight);
                a = [a, b];
                e = a[1];
                d = a[0] + 1;
                r = Math.floor(0.5 * e);
                i = e - r;
                j = i - G;
                g.setAttribute("width", d);
                g.setAttribute("height",
                    e);
                g.style.width = d + "px";
                g.style.height = e + "px";
                s = [Math.floor(0.75 * d), 0];
                c = g.getContext("2d");
                c.fillStyle = "rgba(104,168,220,.8)";
                v()
            }
        }

        function v() {
            c.fillRect(0, i, d, e - j)
        }

        function m(a, b) {
            if (!w) k.style.top = "-9999px", k.style.left = "-9999px", c.clearRect(0, j, d, e - j);
            c.clearRect(s[0], s[1] - 5, n[0], n[1]);
            a = a || Math.floor(0.6 * d);
            b = b || 0;
            b += r - 0.5 * n[1];
            c.drawImage(k, a, b, n[0], n[1]);
            s = [a, b];
            w || (v(), w = !0)
        }

        function O() {
            midPointY = Math.sin(h * 10 * P) * (o - h) * Q;
            h <= o && (f[p] = [0, midPointY], h % 9 == 0 && h % 2 == 1 && (f[z] = [-1, midPointY], z++));
            c.clearRect(0, j, d, e - j);
            m(Math.floor(0.6 * d), h < o ? Math.floor(midPointY) : 0);
            c.beginPath();
            c.moveTo(0, i);
            for (var a = [0, i],
                    b = 0; b < t; b++)
                if (f[b]) {
                    b < p && (f[b][0] = f[b][0] * R - H, f[p - b + p] = [-f[b][0], f[b][1]]);
                    var q = f[b][0] +
                        I,
                        A = f[b][1] + i;
                    c.bezierCurveTo((q - a[0]) / 2 + a[0], a[1], q - (q - a[0]) / 2, A, q, A);
                    a[0] = q;
                    a[1] = A
                }
            c.lineTo(d, i);
            c.lineTo(d, e);
            c.lineTo(0, e);
            c.closePath();
            c.fill();
            h++;
            h == o && (B = !1);
            h >= o * 2 &&
                clearInterval(C)
        }

        function D(a, b) {
            if (!J) return !1;
            b && c.clearRect(x, y, b.w, b.h);
            a = a || E[0];
            x = K[0];
            y = K[1] + a.mt;
            c.drawImage(l, Math.abs(a.l),
                Math.abs(a.t), a.w, a.h, x, y, a.w, a.h)
        }

        function S() {
            var a = -1,
                b = 0,
                c = E.length,
                d;
            clearInterval(L);
            L = setInterval(function () {
                b = ++a > c - 1 ? c * 2 - 2 - a : a;
                d = E[b];
                D(d, M);
                M = d;
                a >= c * 2 - 2 && (a = 0)
            }, 200)
        }
        var u = function (a, b, c) {
            var d = c,
                c = function (b) {
                    d.call(a, b)
                };
            return a.attachEvent ? a.attachEvent("on" + b, c) : a.addEventListener(b, c, !1)
        };
        if (!window.getComputedStyle) window.getComputedStyle = function (a) {
            return a.currentStyle
        };
        var t = 13,
            Q = 0.3,
            d = 960,
            e = 600,
            G = 30,
            r = Math.floor(0.5 * e),
            R = 1.01,
            H = 20,
            i = e - r,
            j = i - G,
            o = (t - 3) * 9,
            p = Math.floor(t / 2),
            I, g,
            c, C, B = !1,
            P = Math.PI / 180,
            f, z, h, k, s = [Math.floor(0.75 * d), 0],
            n = [236, 195],
            w, l, L, J, M, K = [75, 150],
            E = [{
                h: 58,
                w: 140,
                t: 0,
                l: 0,
                mt: 10
            }, {
                h: 72,
                w: 150,
                t: -64,
                l: 0,
                mt: 0
            }, {
                h: 61,
                w: 150,
                t: -151,
                l: 0,
                mt: 30
            }],
            N = !1;
        g = document.createElement("canvas");
        g.getContext && (N = !0, document.body.removeChild(document.getElementById("ripple")), g.setAttribute(
                "id", "ripple"), document.body.appendChild(g), k = document.getElementById("fish"), l =
            document.getElementById("gull"), l.setAttribute("src", "images/gulls-404.png"));
        N && (function () {
            try {
                if (fish.complete) m();
                else if (parseInt(getComputedStyle(k).height, 10)) setTimeout(m, 1E3);
                else throw "no fish";
            } catch (a) {
                u(k, "load", function () {
                    m()
                })
            }
            u(l, "load", function () {
                J = !0;
                l.style.top = "-9999px";
                l.style.left = "-9999px";
                D(0, 0);
                S()
            });
            u(document.getElementById("ripple-control"), "mouseover", function (a) {
                if (g.getContext && !B) clearInterval(C), p = Math.floor(t / 2), I = a.pageX,
                    z = 1, h = 0, f = [], f[0] = [H, 0], C = setInterval(O, 30), B = !0
            });
            u(window, "resize", function () {
                F();
                m();
                v();
                D()
            })
        }(), F());
        (function () {
            var a = 0,
                b = document.getElementById("cloud1"),
                c = document.getElementById("cloud2"),
                g = document.getElementById("plane"),
                e = parseInt(getComputedStyle(b).left, 10),
                f = parseInt(getComputedStyle(c).left, 10);
                q = parseInt(getComputedStyle(g).left, 10);
            setInterval(function () {
                if (++a == 2) a = 0, e += 1, b.style.left = e + "px";
                f += 1;
                c.style.left = f + "px";
                q += 8;
                g.style.left = q + "px";
                e > d + 50 && (e = -200);
                f > d + 50 && (f = -100);
                q > d + 40 && (q = -200);
            }, 50)
        })()
    })();
})();