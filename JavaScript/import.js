// 必要なHTML要素の取得
const wrap = document.getElementById('wrap');
const start = document.getElementById('start');

const textLists = [ // 複数のテキストを格納する配列
'Hello World',
    'This is my App',
    'How are you?'
];

const createText = () => { // ランダムなテキストを画面に表示する
const p = document.getElementById('text');

    // 配列の0番目にあるテキストを画面に表示する
    p.textContent = textLists[0];
};

// createText関数を実行する
createText();

const keyDown = e => {}; // キーイベント＆入力判定処理

const rankCheck = rank => {}; // ランク判定とメッセージ生成処理

const gameOver = id => {}; // ゲームの終了処理

const timer = () => {}; // タイマー処理


start.addEventListener('click', () => {}); // ゲームスタート時の処理