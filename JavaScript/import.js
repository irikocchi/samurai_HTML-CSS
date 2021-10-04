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

    const rnd = Math.floor(Math.random()*textLists.length);//配列のインデックス数からランダムな数値を生成する

     p.textContent = '';//p要素の中身を空っぽにする

checkTexts = textLists[rnd].split('').map(value =>{//画面に表示するテキスト情報をcheckTexts配列に格納する



        
        const span = document.createElement('span');//span要素を生成する
       
        span.textContent = value; //span要素に配列の一文字ずつを当てはめる
        
        p.appendChild(span);//span要素をｐ要素に追加していく
        
        return span;//1文字ずつcheckTextsに格納していく
    })
};


createText();// createText関数を実行する


let score =0;//スコアの初期値を設定する

const keyDown = e => {
    if(e.key === checkTexts[0].textContent){


    checkTexts[0].className = 'add-color';// add-colorクラスを付与する

   
    checkTexts.shift(); // 配列から1文字を削除する

    
    score++;//正しい入力の時だけスコアを加算する

    
    if(!checkTexts.length)createText();//最後まで入力したら新しいテキストを用意する
    }
}; // キーイベント＆入力判定処理

const rankCheck = score => { // ランク判定とメッセージ生成処理

return '${score}文字打てました！';//スコアの値を返す

}; 

const gameOver = id => {               //タイマーをストップする
                                 
    clearInterval(id);
    
    
    const result = confirm(rankCheck(score));  //スコアの値をrankCheck()に渡してダイアログで結果を表示する
}; 

const timer = () => {// タイマー処理
    
    let time = 2;                           //③タイマーの初期値を設定(60秒）
    
    const count = document.getElementById('count');         //①タイマー要素を取得する
    const id = setInterval(() =>{

        //カウントが0になったらタイマーを停止する→0になったらタイマーのIDをgameOver()に渡す
       // if(time <= 0)clearInterval(id);→下のコードに変更
       if(time <=0)clearInterval(id);

       
        count.textContent = time--; //④タイマーの表示を1ずつ減らしていく
        
     },1000);//②1秒ごとに実行する処理を書く
}; 


start.addEventListener('click', () => {// ゲームスタート時の処理
    
    timer();//タイマー関数を追記する
    
    createText();//ランダムなテキストを表示する関数
    
    start.style.display = 'none';//スタートボタンを非表示にする処理を追記
   
    document.addEventListener('keydown',keyDown); //キーボードのイベント処理

})