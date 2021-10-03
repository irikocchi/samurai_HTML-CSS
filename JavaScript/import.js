// 必要なHTML要素の取得
const wrap = document.getElementById('wrap');
const start = document.getElementById('start');

const textLists = [ // 複数のテキストを格納する配列
    'Hello World','This is my App','How are you?',
    'Today is sunny','I love JavaScript!','Good morning',
    'I am Japanese','Let it be','Samurai',
    'Typing Game','Information Technology',
    'I want to be a programmer','What day is today?',
    'I want to build a web app','Nice to meet you',
    'Chrome Firefox Edge Safari','machine learning',
    'Brendan Eich','John Resig','React Vue Angular',
    'Netscape Communications','undefined null NaN',
    'Thank you very much','Google Apple Facebook Amazon',
    'ECMAScript','console.log','for while if switch',
    'var let const','Windows Mac Linux iOS Android',
    'programming'];

let checkTexts = [];

const createText = () => { // ランダムなテキストを画面に表示する
const p = document.getElementById('text');
//配列のインデックス数からランダムな数値を生成する
    const rnd = Math.floor(Math.random()*textLists.length);
//p要素の中身を空っぽにする
     p.textContent = '';
//画面に表示するテキスト情報をcheckTexts配列に格納する
checkTexts = textLists[rnd].split('').map(value =>{



        //span要素を生成する
        const span = document.createElement('span');
        //span要素に配列の一文字ずつを当てはめる
        span.textContent = value;
        //span要素をｐ要素に追加していく
        p.appendChild(span);
        //1文字ずつcheckTextsに格納していく
        return span;
    })
};

// createText関数を実行する
createText();

//スコアの初期値を設定する
let score =0;

const keyDown = e => {
    if(e.key === checkTexts[0].textContent){

// add-colorクラスを付与する
    checkTexts[0].className = 'add-color';

    // 配列から1文字を削除する
    checkTexts.shift();

    //正しい入力の時だけスコアを加算する
    score++;

    //最後まで入力したら新しいテキストを用意する
    if(!checkTexts.length)createText();
    }
}; // キーイベント＆入力判定処理

const rankCheck = score => { // ランク判定とメッセージ生成処理
//スコアの値を返す
return '${score}文字打てました！';

}; 

const gameOver = id => {
    //タイマーをストップする
    clearInterval(id);

    //スコアの値をrankCheck()に渡してダイアログで結果を表示する
    const result = confirm(rankcheck(score));

}; 

const timer = () => {// タイマー処理
    //③タイマーの初期値を設定(60秒）
    let time = 60;
    //①タイマー要素を取得する
    const count = document.getElementById('count');
    const id = setInterval(() =>{

        //カウントが0になったらタイマーを停止する→0になったらタイマーのIDをgameOver()に渡す
       // if(time <= 0)clearInterval(id);→下のコードに変更
       if(time <=0)clearInterval(id);

        //④タイマーの表示を1ずつ減らしていく
        count.textContent = time--;
        //②1秒ごとに実行する処理を書く
     },1000);
}; 


start.addEventListener('click', () => {// ゲームスタート時の処理
    //タイマー関数を追記する
    timer();
    //ランダムなテキストを表示する関数
    createText();
    //スタートボタンを非表示にする処理を追記
    start.style.display = 'none';
    //キーボードのイベント処理
    document.addEventListener('keydown',keyDown);

})