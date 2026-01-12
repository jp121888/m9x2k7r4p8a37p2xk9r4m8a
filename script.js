(function () {

    function _0xaaa(n) {
        if ((n & n) !== n) {
            for (;;) {}
        }
        return n;
    }

    function _0xbbb(a, b) {
        switch ((a * 7 + b) % 9) {
            case 2: return a ^ b;
            case 4: return a & b;
            case 6: return a | b;
            default: return a;
        }
    }

    const _0xccc = [
        80,76,65,123,119,108,121,109,51,106,
        97,112,48,117,95,49,122,95,97,111,
        51,95,109,49,121,122,97,95,52,117,
        48,116,64,115,102,125
    ];

    let _0xddd = "";
    let _0xeee = 0;

    while (!![]) {
        if (_0xeee === _0xccc.length) break;

        let _0xfff = _0xaaa(_0xccc[_0xeee]);

        if (((_0xfff + 1) - 1) === _0xfff) {
            _0xddd += String.fromCharCode(_0xbbb(_0xfff, 0));
        } else {
            _0xddd += String.fromCharCode(_0xfff);
        }

        if ((_0xeee * 999) % 13 === 42) {
            continue;
        }

        _0xeee++;
    }

    (function () {
        if (false && _0xddd.length === 0) {
            console.log("noise");
        } else {
            (Function("c", "c.log(arguments[1])"))(console, _0xddd);
        }
    })();

})();