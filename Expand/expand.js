(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Generated by CoffeeScript 1.9.3
var Generator, amusement, animals, cat, events, f, freqgo, generator, hasDom, i, j, len, len1, q, questions, recs, schools, search, shops, specialplace, sports, time, ul;

hasDom = require('has-dom');

Generator = require('re_expand');

generator = new Generator();

schools = "(幼稚園|小学生|中学生|高校生)";

time = "(昔|子供のころ|" + schools + "のころ)";

freqgo = "(よく行ってた|行ったことがある|たまに行った)";

shops = "(本屋|床屋|散髪屋|レストラン|食堂|スーパー|市場|八百屋|魚屋|肉屋|店)";

recs = "(旅行|BBQ|バーベキュー)";

sports = "(野球|サッカー|ハイキング|サーフィン|散歩)";

events = "(コンサート|合宿|遠足|花見)";

cat = "(ネコ|猫)";

animals = "(犬|" + cat + "|ウサギ|ネズミ|ハムスター)";

amusement = "(遊園地|動物園)";

specialplace = "(海岸|山頂|神社|砂場)";

questions = [time + "(足|額|手|腕)を怪我した(場所|町)", "子供のころ体のどこを怪我したか", schools + "のころ学校でよく暴れてた奴", schools + "のころ一番嫌いだった奴", schools + "のころ成績が(良かった|悪かった)奴", schools + "のころ(図画|書道|ピアノ|リコーダー)が上手かった奴", "(退学|留年)した奴", "ボロいアパートに住んでた友達は", "昔よく遊んだ友達", "(ソフトボール|野球|ブラバン)の顧問の専門は", "教室からいなくなるのは", "押入れに変なものを隠してたのは", "妙に部屋が綺麗だったのは", "金持ち農家は", "やりたかったけどできなかった(楽器|スポーツ)", "謝りたい人は", "" + time + sports + "したところ", "(算数|英語)の(最高|最低)得点は", "走り幅跳びで飛んだ距離は", "どうしても解けなかった問題", "昔からの志望校は", "ベストを出したのは", schools + "のころ好きだった人", "昔好きだった相手", "昔振られた相手", "密かにつきあってたのは", "片思いの相手は", "嬉し恥ずかしかったのは", "あまずっぱい思い出はどこで", "昔" + events + "に行ったところ", amusement + "の思い出", "車が故障して困った場所", "ひどかったホテルは", "旅行先で迷ったのは", "(電車|バス)を乗り間違えたのは", "旅行で盗まれたもの", "ベッドを壊したホテルは", "紙がなかったホテルは", "車がエンコしたのは", "よくみんなで食べにいった(食堂|レストラン)は", "レストランでよく食べてたものは", "最初に美味しいと思った(ワイン|モルトウィスキー|ビール|料理)", schools + "のころの旅行先での(失敗|病気|怪我)", "" + time + freqgo + shops, time + "住んでたところの近くの(店|遊び場所)", time + "住んでた家", "" + time + recs + "したところ", schools + "のとき学校から見えた景色", "(会社|オフィス|アパート)の(1F|2F|3F)にあるもの", time + "の住所", time + "の電話番号", "市場の入口にあった店は", "背負い投げをくらったのは", "ホームランだと思ったのにキャッチした奴は", "役満を振込んだのは", "役満振り込んだ瞬間に逃げ出したのは", "小四喜を振込んだ相手", "昔(嘘をついた|酷いことをしてしまった|持ち物を盗んだ|イジメた|ズルをした)相手", "部活で壊した部品は", "警察につかまったのは", "隣家の柿を盗んだのは", "横入りしたのは", time + "(喧嘩|柔道|テニス|バドミントン|相撲|かるた|トランプ|テスト)で負けた相手", "いつもイジメられてた相手は", "昔粗相をした場所", "昔恥ずかしいところを見られた相手", "(失敗した|ヘマをした)試験", "迷子になった" + amusement, "(飲み会|宴会)で吐いた場所", "(自転車|財布|バイク)を盗まれた場所", "面接でヘマしたのは", "他人を知人と間違えたのは", "カンニングした教科", "食べたトマトを吐きかけてしまった相手", "(カエル|ウンコ|ミミズ)を踏んでしまった場所", "(駐車|スピード)違反でつかまったのは", "滑って死にそうな目にあった山は", "パンクしたのはどこ", "車のドアをぶつけたのは", "(テレビ|箪笥)の裏に隠したのは", "秘密の虫とり場は", "人非人といえば", "悪口ばかり言ってる奴は", "実は(嫌いな|苦手な)人", schools + "のころ嫌いだった先生", "昔嫌いだった先生", "かわいがってもらった先生", "電池に関して嘘を教えた先生", "酷い(上司|先輩)とは", "(最高|最低)の(先輩|後輩)", "本当は友達じゃないのは", "不愉快な同僚は", "恩知らずといえば", "下宿の床を焦がした奴は", "夜中に大声を出して迷惑だったのは", "とんでもなかった隣人", "苦労して買ってきた土産を捨てられて腹がたったのは", "うっかり喧嘩しそうになったのは", "ボートで助けてもらったのは", "ボイコットしたのは", "ありえない兄弟関係は", "ギターがうるさかったのは", "くだらないプレゼントをくれたのは", "昔嫌いだった食べ物", "(2014|2015)忘年会の場所", schools + "のときよく食べたのは", animals + "に関する思い出", cat + "にひっかかれた場所", "犬にかまれた場所", "ヘビが出た場所", "はじめて買った(バイク|ギター|CD)", "はじめて持ったガラケー", "はじめて買ってもらったおもちゃ", "はじめて登った山は", "はじめてキャンプしたのは", "はじめて海外に行ったのは", "はじめて飛行機に乗ったのは", "初めて一人で新幹線に乗ったのは", "初めて買った車は", "橋の下にいるのは", "行くなと言われてた場所は", specialplace + "で叫んでいた奴", "拾って驚いたもの", "(サークル|部活)の部屋で(キス|エッチ)をしていたのは", "CDを借りパク(した|された)のは", "酒屋のおじさんのバックホームの返球は", "カッターで指を切り落としたのは", "空に放り上げたのは", "(海|川)に捨てたのは", specialplace + "(にいたのは|で拾ったのは)", "定期を届けた女の子の印象に残った部分は", "小さい頃、2段ベッドにやってきたのは", "落とした財布が戻って(きた|こなかった)のは", "おみやげを投げ捨てたのは", "万引きを疑われたことがある店は", "ぞうきん入れとは何か", "ブタマンジュジュとは", "滅多打ちであった とは", "茶番が好評だったのは", "展開が好きなアーティスト", "印象的な建物", "よく見る夢は"];

for (i = 0, len = questions.length; i < len; i++) {
  q = questions[i];
  generator.add(q);
}

if (hasDom()) {
  ul = null;
  f = function(s, cmd) {
    return ul.append($('<li>').text(s));
  };
  search = function() {
    var qstr;
    if (ul) {
      ul.remove();
    }
    ul = $('<ul>');
    $('body').append(ul);
    qstr = $('#q').val();
    return generator.filter(" " + qstr + " ", f, 0);
  };
  $(function() {
    search();
    return $('#q').on('keyup', search);
  });
} else {
  f = function(a) {
    return console.log(a);
  };
  for (j = 0, len1 = questions.length; j < len1; j++) {
    q = questions[j];
    generator.add(q);
  }
  generator.filter(" ", f);
}

},{"has-dom":3,"re_expand":4}],2:[function(require,module,exports){
(function() {
  var Asearch;

  Asearch = (function() {
    var INITPAT, INITSTATE, MAXCHAR;

    INITPAT = 0x80000000;

    MAXCHAR = 0x100;

    INITSTATE = [INITPAT, 0, 0, 0];

    Asearch.prototype.isupper = function(c) {
      return (c >= 0x41) && (c <= 0x5a);
    };

    Asearch.prototype.islower = function(c) {
      return (c >= 0x61) && (c <= 0x7a);
    };

    Asearch.prototype.tolower = function(c) {
      if (this.isupper(c)) {
        return c + 0x20;
      } else {
        return c;
      }
    };

    Asearch.prototype.toupper = function(c) {
      if (this.islower(c)) {
        return c - 0x20;
      } else {
        return c;
      }
    };

    function Asearch(source) {
      var c, mask, _i, _j, _len, _ref;
      this.source = source;
      this.shiftpat = [];
      this.epsilon = 0;
      this.acceptpat = 0;
      mask = INITPAT;
      for (c = _i = 0; 0 <= MAXCHAR ? _i < MAXCHAR : _i > MAXCHAR; c = 0 <= MAXCHAR ? ++_i : --_i) {
        this.shiftpat[c] = 0;
      }
      _ref = this.unpack(this.source);
      for (_j = 0, _len = _ref.length; _j < _len; _j++) {
        c = _ref[_j];
        if (c === 0x20) {
          this.epsilon |= mask;
        } else {
          this.shiftpat[c] |= mask;
          this.shiftpat[this.toupper(c)] |= mask;
          this.shiftpat[this.tolower(c)] |= mask;
          mask >>>= 1;
        }
      }
      this.acceptpat = mask;
      return this;
    }

    Asearch.prototype.state = function(state, str) {
      var c, i0, i1, i2, i3, mask, _i, _len, _ref;
      if (state == null) {
        state = INITSTATE;
      }
      if (str == null) {
        str = '';
      }
      i0 = state[0];
      i1 = state[1];
      i2 = state[2];
      i3 = state[3];
      _ref = this.unpack(str);
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        c = _ref[_i];
        mask = this.shiftpat[c];
        i3 = (i3 & this.epsilon) | ((i3 & mask) >>> 1) | (i2 >>> 1) | i2;
        i2 = (i2 & this.epsilon) | ((i2 & mask) >>> 1) | (i1 >>> 1) | i1;
        i1 = (i1 & this.epsilon) | ((i1 & mask) >>> 1) | (i0 >>> 1) | i0;
        i0 = (i0 & this.epsilon) | ((i0 & mask) >>> 1);
        i1 |= i0 >>> 1;
        i2 |= i1 >>> 1;
        i3 |= i2 >>> 1;
      }
      return [i0, i1, i2, i3];
    };

    Asearch.prototype.match = function(str, ambig) {
      var s;
      if (ambig == null) {
        ambig = 0;
      }
      s = this.state(INITSTATE, str);
      if (!(ambig < INITSTATE.length)) {
        ambig = INITSTATE.length - 1;
      }
      return (s[ambig] & this.acceptpat) !== 0;
    };

    Asearch.prototype.unpack = function(str) {
      var bytes, c, code, _i, _len, _ref;
      bytes = [];
      _ref = str.split('');
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        c = _ref[_i];
        code = c.charCodeAt(0);
        if (code > 0xFF) {
          bytes.push((code & 0xFF00) >>> 8);
        }
        bytes.push(code & 0xFF);
      }
      return bytes;
    };

    return Asearch;

  })();

  if ((typeof module !== "undefined" && module !== null) && (module.exports != null)) {
    module.exports = Asearch;
  } else if (typeof window !== "undefined" && window !== null) {
    window.Asearch = Asearch;
  }

}).call(this);

},{}],3:[function(require,module,exports){
'use strict';
module.exports = function () {
	return typeof window !== 'undefined'
		&& typeof document !== 'undefined'
		&& typeof document.createElement === 'function';
};

},{}],4:[function(require,module,exports){
// Generated by CoffeeScript 1.9.3
var Asearch, GenNode, Generator, Node, RegExp, Scanner;

Scanner = require('./scanner');

RegExp = require('./regexp');

Node = require('./node');

Asearch = require('asearch');

GenNode = (function() {
  function GenNode(id, state, s1, substrings, accept) {
    this.id = id;
    this.state = state != null ? state : [];
    this.s = s1 != null ? s1 : "";
    this.substrings = substrings != null ? substrings : [];
    this.accept = accept != null ? accept : false;
  }

  return GenNode;

})();

Generator = (function() {
  function Generator(s, command) {
    if (s == null) {
      s = '';
    }
    if (command == null) {
      command = '';
    }
    this.s = [s];
    this.commands = [command];
    this.par = 0;
  }

  Generator.prototype.add = function(pat, command) {
    if (this.s[0] === '') {
      this.s = [pat];
    } else {
      this.s.push(pat);
    }
    if (this.commands[0] === '') {
      return this.commands = [command];
    } else {
      return this.commands.push(command);
    }
  };

  Generator.prototype["delete"] = function() {
    this.s.pop;
    return this.commands.pop;
  };

  Generator.prototype.filter = function(pat, func, maxambig) {
    var acceptno, ambig, command, endnode, entry, func_listed, i, j, k, l, len, len1, len2, length, list, listed, lists, m, match, n, newlist, newstate, o, patstr, patterns, q, ref, ref1, ref2, ref3, ref4, res, s, srcnode, ss, sslen, startnode, trans;
    if (func == null) {
      func = null;
    }
    this.maxambig = maxambig != null ? maxambig : 2;
    res = [[], [], []];
    patterns = pat.split('').map(function(p) {
      return p.toLowerCase();
    });
    this.asearch = new Asearch(pat);
    this.regexp = new RegExp();
    this.scanner = new Scanner(this.s.join('|'));
    ref = this.regexp.regexp(this.scanner, true), startnode = ref[0], endnode = ref[1];
    lists = [];
    listed = [{}, {}, {}];
    func_listed = {};
    list = [];
    list[0] = new GenNode(startnode.id, this.asearch.state());
    lists[0] = list;
    for (length = j = 0; j <= 10000; length = ++j) {
      list = lists[length];
      newlist = [];
      for (k = 0, len = list.length; k < len; k++) {
        entry = list[k];
        srcnode = Node.node(entry.id);
        if (list.length * srcnode.trans.length < 100000) {
          ref1 = srcnode.trans;
          for (l = 0, len1 = ref1.length; l < len1; l++) {
            trans = ref1[l];
            ss = entry.substrings.slice(0);
            ref2 = srcnode.pars;
            for (n = 0, len2 = ref2.length; n < len2; n++) {
              i = ref2[n];
              if (typeof ss[i - 1] === "undefined") {
                ss[i - 1] = '';
              }
              ss[i - 1] = ss[i - 1] + trans.arg();
            }
            newstate = this.asearch.state(entry.state, trans.str());
            s = entry.s + trans.str();
            acceptno = trans.dest.accept;
            newlist.push(new GenNode(trans.dest.id, newstate, s, ss, acceptno));
            if (acceptno !== null) {
              for (ambig = o = 0, ref3 = this.maxambig; 0 <= ref3 ? o <= ref3 : o >= ref3; ambig = 0 <= ref3 ? ++o : --o) {
                if ((func && !func_listed[s]) || (!func && !listed[ambig][s])) {
                  if ((newstate[ambig] & this.asearch.acceptpat) !== 0) {
                    listed[ambig][s] = true;
                    func_listed[s] = true;
                    sslen = ss.length;
                    match = [];
                    if (sslen > 0) {
                      patstr = [];
                      for (i = q = 0, ref4 = sslen; 0 <= ref4 ? q < ref4 : q > ref4; i = 0 <= ref4 ? ++q : --q) {
                        patstr.push('(.*)');
                      }
                      patstr = patstr.join("\t");
                      match = ss.join("\t").match(patstr);
                    }
                    command = this.commands[acceptno];
                    if (!command) {
                      command = '';
                    }
                    while (m = command.match(/^(.*)(\$(\d+))(.*)$/)) {
                      command = "" + m[1] + match[m[3]] + m[4];
                    }
                    if (func) {
                      func(s, command);
                    } else {
                      res[ambig].push([s, command]);
                    }
                  }
                }
              }
            }
          }
        }
      }
      if (newlist.length === 0) {
        break;
      }
      lists.push(newlist);
      if (res[0].length > 100) {
        break;
      }
    }
    return [res[0], res[1], res[2]];
  };

  return Generator;

})();

String.prototype.expand = function(filterpat, func, ambig) {
  var g, j, len, m, matched, r, strings;
  if (filterpat == null) {
    filterpat = " ";
  }
  if (func == null) {
    func = null;
  }
  if (ambig == null) {
    ambig = 0;
  }
  g = new Generator();
  g.add(this, '');
  strings = [];
  if (func) {
    return g.filter(filterpat, func);
  } else {
    m = g.filter(filterpat);
    matched = m[0].length > 0 ? m[0] : m[1].length > 0 ? m[1] : m[2];
    for (j = 0, len = matched.length; j < len; j++) {
      r = matched[j];
      strings.push(r[0]);
    }
    return strings;
  }
};

module.exports = Generator;

},{"./node":5,"./regexp":6,"./scanner":7,"asearch":2}],5:[function(require,module,exports){
// Generated by CoffeeScript 1.9.3
var Node, Trans;

Trans = (function() {
  function Trans(pat1, dest1) {
    this.pat = pat1;
    this.dest = dest1;
  }

  Trans.prototype.str = function() {
    return this.pat.split(/\t/)[0];
  };

  Trans.prototype.arg = function() {
    var m;
    m = this.pat.match(/^(.*)\t(.*)$/);
    if (m) {
      return m[2];
    } else {
      return this.pat;
    }
  };

  return Trans;

})();

Node = (function() {
  Node.id = 1;

  Node.nodes = {};

  function Node() {
    this.id = Node.id;
    this.accept = null;
    this.trans = [];
    Node.nodes[Node.id++] = this;
    this.pars = [];
  }

  Node.prototype.addTrans = function(pat, dest) {
    var t;
    t = new Trans(pat, dest);
    return this.trans.push(t);
  };

  Node.node = function(id) {
    return Node.nodes[id];
  };

  return Node;

})();

module.exports = Node;

},{}],6:[function(require,module,exports){
// Generated by CoffeeScript 1.9.3
var Node, RegExp, Scanner;

Node = require('./node');

Scanner = require('./scanner');

RegExp = (function() {
  function RegExp() {}

  RegExp.prototype.regexp = function(s, toplevel) {
    var endnode, n1, n2, ref, ref1, startnode;
    if (toplevel == null) {
      toplevel = false;
    }
    startnode = new Node();
    endnode = new Node();
    if (toplevel) {
      this.pars = [];
      this.parno = 0;
      this.ruleid = 0;
    }
    startnode.pars = this.pars;
    endnode.pars = this.pars;
    ref = this.regcat(s), n1 = ref[0], n2 = ref[1];
    startnode.addTrans('', n1);
    if (toplevel) {
      n2.accept = this.ruleid;
    }
    n2.addTrans('', endnode);
    while (s.gettoken() === '|' && s.nexttoken() !== '') {
      if (toplevel) {
        this.pars = [];
        this.parno = 0;
        this.ruleid += 1;
      }
      ref1 = this.regcat(s), n1 = ref1[0], n2 = ref1[1];
      startnode.addTrans('', n1);
      if (toplevel) {
        n2.accept = this.ruleid;
      }
      n2.addTrans('', endnode);
    }
    s.ungettoken();
    return [startnode, endnode];
  };

  RegExp.prototype.regcat = function(s) {
    var endnode, n1, n2, ref, ref1, startnode;
    ref = this.regfactor(s), startnode = ref[0], endnode = ref[1];
    while (!s.gettoken().match(/^[\)\]\|]$/) && s.nexttoken() !== '') {
      s.ungettoken();
      ref1 = this.regfactor(s), n1 = ref1[0], n2 = ref1[1];
      endnode.addTrans('', n1);
      endnode = n2;
    }
    s.ungettoken();
    return [startnode, endnode];
  };

  RegExp.prototype.regfactor = function(s) {
    var endnode, n, ref, startnode, t;
    ref = this.regterm(s), startnode = ref[0], endnode = ref[1];
    t = s.gettoken();
    if (t.match(/^[\?]$/)) {
      startnode.addTrans('', endnode);
    } else if (t.match(/^[\+]$/)) {
      endnode.addTrans('', startnode);
    } else if (t.match(/^[\*]$/)) {
      n = new Node();
      startnode.addTrans('', endnode);
      endnode.addTrans('', n);
      n.addTrans('', startnode);
    } else {
      s.ungettoken();
    }
    return [startnode, endnode];
  };

  RegExp.prototype.regterm = function(s) {
    var endnode, n1, n2, ref, startnode, t;
    t = s.gettoken();
    if (t === '(') {
      this.parno += 1;
      this.pars.push(this.parno);
      ref = this.regexp(s), n1 = ref[0], n2 = ref[1];
      n1.pars = this.pars.slice(0);
      t = s.gettoken();
      if (t === ')') {
        this.pars.pop();
        n2.pars = this.pars.slice(0);
        return [n1, n2];
      } else {
        console.log('missing )');
        return null;
      }
    } else {
      startnode = new Node();
      startnode.pars = this.pars.slice(0);
      endnode = new Node();
      endnode.pars = this.pars.slice(0);
      startnode.addTrans(t, endnode);
      return [startnode, endnode];
    }
  };

  return RegExp;

})();

module.exports = RegExp;

},{"./node":5,"./scanner":7}],7:[function(require,module,exports){
// Generated by CoffeeScript 1.9.3
var Scanner;

Scanner = (function() {
  function Scanner(s) {
    this.s = s;
    this.a = s.split('');
    this.p = 0;
    this.t = '';
    this.u = '';
  }

  Scanner.prototype.gettoken = function() {
    if (this.u !== '') {
      this.t = this.u;
      this.u = '';
      return this.t;
    }
    if (this.p >= this.a.length) {
      this.t = '';
      return '';
    }
    this.t = this.a[this.p];
    if (this.t.match(/^[\(\|\)\*\+\?\[\]]$/)) {
      this.p += 1;
      return this.t;
    } else if (this.t === '\\') {
      this.t = this.a[++this.p];
      if (this.t === 'n') {
        this.t = "\n";
      }
      if (this.t === 't') {
        this.t = "\t";
      }
      this.p += 1;
      return this.t;
    } else {
      this.p += 1;
      while (this.p < this.a.length && !this.a[this.p].match(/^[\(\|\)\*\+\?\[\]\\]$/)) {
        this.t += this.a[this.p++];
      }
      return this.t;
    }
  };

  Scanner.prototype.ungettoken = function() {
    if (this.u === '') {
      return this.u = this.t;
    } else {
      return console.log("Can't ungettoken()");
    }
  };

  Scanner.prototype.nexttoken = function() {
    return this.t;
  };

  return Scanner;

})();

module.exports = Scanner;

},{}]},{},[1]);
