const quiz = [
    {
        question: '情報ライブラリーではどのような人が本を借りられますか？',
        choices: [
            '火星人',
            '函館在住の人',
            '宇宙人',
            '札幌在住の人'
        ],
        correct: '函館在住の人',
        hint:'情報ライブラリーは教職員、地域の人が利用可能です',
        tip:'未来大学の学生、教職員、函館市、北斗市、七飯町に在住・在勤・在学している方は、本を借りることができます'
    },
    {
        question: '情報ライブラリーにある自習スペースの机の天板は何で作られていますか？',
        choices: [
            '鉄板',
            '木',
            'プラスチック',
            '３Dプリンター'
        ],
        correct: '木',
        hint:'小学校から馴染みがある人が多いと思います。',
        tip:'机の天板は木で作られています'
    },
    {
        question: '情報ライブラリー独自のこだわりは何ですか？',
        choices: [

            '帯を切り取り表紙の裏に貼ることで、帯の内容を残している',
            '帯を加工して、しおりにしている',
            '帯だけを借りれるようにしている',
            '帯を単語帳のようにまとめ、自由に閲覧できるようにしている'
        ],
        correct: '帯を切り取り表紙の裏に貼ることで、帯の内容を残している',
        hint:'帯を捨てるということがなくなります',
        tip:'ほかにも、透明なカバーで本を覆っていたりと、情報ライブラリー独自でのこだわりもあるので実際に見てみてください'
    },
    {
        question: 'ライブラリーの奥の方に４つの大きなオブジェがあります。どんな特徴をしていますか？',
        choices: [
            '４つとも一緒',
            '２つずつ一緒',
            '１つだけ違う',
            '全て違う'
        ],
        correct: '全て違う',
        hint:'情報ライブラリーの入口とは反対側の端っこにあります',
        tip:'よーく見ると、４つとも違う形をしています'
    },
    {
        question: '情報ライブラリーには様々な特徴のある家具がある。1つは寝転んで本が読めるような家具。2つ目は何ですか？',
        choices: [
            'バーカウンターのような家具',
            '貴族のような家具',
            '近未来な家具',
            '未来大学のような家具'
        ],
        correct: 'バーカウンターのような家具',
        hint:'この家具はリラックスした雰囲気です',
        tip:'自由な空間を補強するようなものとしてこれらの家具になりました'
    },
    {
        question: '情報ライブラリーの机の上にT字型のライトがあります。このライトの工夫している点は何ですか？',
        choices: [
            '手元がとても明るく見える',
            '目線の高さに設置されている',
            '触ると暖かく、人肌を感じることができる',
            '明るさを調節できる'
        ],
        correct: '目線の高さに設置されている',
        hint:'特に、向かいに人がいるときに機能します',
        tip:'目線の高さにライトがあることで、向かいの人と目が合わないようになっています'
    },
    {
        question: '食堂は何階にありますか？',
        choices: [
            '２階',
            '１階',
            '地下２階',
            '食堂なんてものはない'
        ],
        correct: '１階',
        hint:'使ったことあるならわかると思います！',
        tip:'１階の玄関から入ると、右側に食堂があります(写真は公式サイトから)'
    },
    {
        question: '食堂の椅子の板は何でできているでしょうか？',
        choices: [
            '鉄板',
            'プラスチック',
            '木',
            '石'
        ],
        correct: '木',
        hint:'椅子の模型を見てみよう！',
        tip:'写真でわかるとおり、木で出来ています'
    },
    {
        question: '食堂の机は何個あるでしょう？',
        choices: [
            '約２５個',
            '約３５個',
            '約４５個',
            '約５５個'
        ],
        correct: '約４５個',
        hint:'模型の机を数えてみましょう！',
        tip:'多くの人が利用するため、４５個も机が用意されています。一見混んでいても意外と席がとれるんですよね。'
    },
    {
        question: '食堂では１日あたりどれほどの人が使っているでしょうか？',
        choices: [
            '約２５０人',
            '約３５０人',
            '約４５０人',
            '約１０００人'
        ],
        correct: '約３５０人',
        hint:'かなり難しい問題です。机と椅子の数から推測してみましょう！',
        tip:'「１度」ではなく「１日」というところが難しいですよね。ちなみに、大学には人が約１３００人いるらしいです。'
    },

    {
        question: '食堂の人気No1のメニューは何でしょう？',
        choices: [
            'チキン竜田丼',
            '日替わり定食',
            '味噌ラーメン',
            '食堂な'
        ],
        correct: 'チキン竜田丼',
        hint:'年を取ると厳しくなるかも・・・',
        tip:'人気No1はチキン竜田丼！定番のメニューで美味しいですよね'
    },
    {
        question: '大学の後期終了間近に食堂で行われる豪華なイベントは何でしょう？',
        choices: [
            '１０００円のコースメニューが出る',
            'ドリンクバーが導入され、色々な飲み物が飲める',
            'ビュッフェ形式になる',
            '全ての商品が無料になる'
        ],
        correct: '全ての商品が無料になる',
        hint:'みんなお腹いっぱいになれるかもしれません',
        tip:'なんと全ての商品が無料になってしまいます！今年度も行われたら是非行きたいですね'
    },
]

"use strict";
const result = document.querySelector(".result");

const params = new URLSearchParams(window.location.search);
const username = params.get("username") || "匿名";



const quizLength = quiz.length;
let quizIndex = 0;
//class score {};
var score=0;

const button = document.getElementsByTagName('button');
const buttonLength = button.length;
document.getElementById('quizno').textContent = 'Q.' + (quizIndex+1);
document.getElementById('username').textContent = username + 'さんの挑戦';

var v = document.getElementById('video');
//一時停止
v.pause();


const setupQuiz = () => {

    document.getElementById('videotext').style.display = 'none';
    document.getElementById('kotae').style.display = 'none';
    document.getElementById('answer').style.display = 'none';
    document.getElementById('answerphoto').style.display = 'none';
    document.getElementById('tip').style.display = 'none';
    document.getElementById('tip').textContent = quiz[quizIndex].tip;
    document.getElementById('quizno').textContent = 'Q.' + (quizIndex+1);
    document.getElementById('question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength) {
        button[buttonIndex].textContent = quiz[quizIndex].choices[buttonIndex];
        buttonIndex++;
    }
    document.getElementById('hint').textContent = '';
    document.getElementById('hintphoto').style.display = 'none'

    if (quizIndex == quizLength-1) {
        document.getElementById('nextbutton').textContent = '終了する'
    }

}
let moveflag = 1;
setupQuiz();

const clickHandler = (e) => {

    document.getElementById('kotae').style.display = 'block';
    document.getElementById('answer').textContent = quiz[quizIndex].correct;
    document.getElementById('answer').style.display = 'block';
    document.getElementById('answerphoto').style.display = 'block';
    document.getElementById('button').style.display = 'none'
    document.getElementById('nextbutton').style.display = 'block';
    document.getElementById('hintbutton').style.display = 'none';
    document.getElementById('hintphoto').style.display = 'none'
    document.getElementById('hint').style.display = 'none'
    document.getElementById('tip').style.display = 'block';
    if(moveflag == 1){
        if (quiz[quizIndex].correct === e.target.textContent) {
            window.alert("正解！");
            score++;
            moveflag = 0
        } else {
            window.alert("不正解！");
            moveflag = 0
        }
    }
     //document.getElementById('hintphoto').src=hintp[quizIndex];



    function showQuiz(){
        document.getElementById('video').style.display='none'
        document.getElementById('videotext').style.display='none'
        document.getElementById('card').style.display = 'block';
        document.getElementById('hintbutton').style.display = 'block';
        document.getElementById('username').style.display = 'block';
    }

    v.addEventListener("ended", (event) =>{
        showQuiz();
       });

}

let handlerIndex = 0;
while(handlerIndex < buttonLength) {
    button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}

function showHint(){
    if (document.getElementById('hint').textContent ==''){
        document.getElementById('hint').textContent = quiz[quizIndex].hint;
        document.getElementById('hint').style.display = 'block'
        document.getElementById('hintphoto').style.display = 'block';
    }else{
        document.getElementById('hint').textContent ='';
        document.getElementById('hint').style.display = 'none'
        document.getElementById('hintphoto').style.display = 'none';
    }

}

function nextQuiz(){
    moveflag = 1
    document.getElementById('button').style.display = 'block'
    quizIndex++;
    document.getElementById('nextbutton').style.display = 'none';
    document.getElementById('hintbutton').style.display = 'block';
    document.getElementById('tip').style.display = 'none';

    if (quizIndex < quizLength) {
        document.getElementById('hintphoto').src = 'hint'+(quizIndex+1)+ '.png';
        document.getElementById('answerphoto').src = 'answer'+(quizIndex+1)+ '.png';
        setupQuiz();

        if(quizIndex==6){
            window.alert('情報ライブラリーのクイズはこれで終了！');
            document.getElementById('video').style.display='block'
            document.getElementById('videotext').style.display='block'
            v.play();
            hideQuiz();
        }
    } else {
        window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
        document.getElementById('card').style.display = 'none';
        document.getElementById('card').style.height = '58vh';
        document.getElementById('card').style.height = '58svh';
        document.getElementById('hint').textContent = '';
        document.getElementById('hintbutton').style.display = 'none';
        document.getElementById('hintphoto').style.display = 'none';
        document.getElementById('rankingbutton').style.display = 'block';
        document.getElementById('answerphoto').style.display = 'none';
        //document.getElementById('quizscore').textContent = 'sasaas';

        // window.location.href = `ranking.html?score=${score}`;
        window.location.href = `ranking.html?username=${encodeURIComponent(username)}&score=${score}`;

    }

    function hideQuiz(){ 
        document.getElementById('card').style.display = 'none';

        document.getElementById('hintbutton').style.display = 'none';
        document.getElementById('hintphoto').style.display = 'none';
        document.getElementById('username').style.display='none'
     }
}

