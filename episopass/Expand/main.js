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
