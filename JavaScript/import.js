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

const keyDown = e => {
    if(e.key === checkTexts[0].textContent){
// add-colorクラスを付与する
    checkTexts[0].className = 'add-color';
    // 配列から1文字を削除する
    checkTexts.shift();
    }
}; // キーイベント＆入力判定処理

const rankCheck = rank => {}; // ランク判定とメッセージ生成処理

const gameOver = id => {}; // ゲームの終了処理

const timer = () => {}; // タイマー処理


start.addEventListener('click', () => {
    createText();
    //キーボードのイベント処理
    document.addEventListener('keydown',keyDown);

})// ゲームスタート時の処理