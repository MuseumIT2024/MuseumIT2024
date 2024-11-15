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
        question: '情報ライブラリー独自のこだわりはなんですか？',
        choices: [

            '帯を切り取り表紙の裏に貼ることで、帯の内容を残している',
            '帯を加工して、しおりにしている',
            '帯だけを借りれるようにしている',
            '帯を単語帳のようにまとめ、自由に閲覧できるようにしている'
        ],
        correct: '帯を切り取り表紙の裏に貼ることで、帯の内容を残している',
        hint:'帯を捨てるということがなくなります',
        tip:'帯を切り取り表紙の裏にはることで帯の内容を残している。透明なカバーで本を覆っていたり、情報ライブラリー独自でのこだわりもあるので実際に見てみてね'
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
        hint:'模型の〇番をみてみよう！',
        tip:'よく見てね、4つとも違う形をしているよ'
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
        question: '食堂は何階にありますか？',
        choices: [
            '２階',
            '１階',
            '地下２階',
            '食堂なんてものはない'
        ],
        correct: '１階',
        hint:'大学に来てたらわかりますよね',
        tip:'クイズ６の解説です'
    },
]

"use strict";
const result = document.querySelector(".result");


const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const button = document.getElementsByTagName('button');
const buttonLength = button.length;
document.getElementById('quizno').textContent = 'Q.' + (quizIndex+1);

var v = document.getElementById('video');
//一時停止
v.pause();


const setupQuiz = () => {
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
        document.getElementById('card').style.display = 'block';
        document.getElementById('hintbutton').style.display = 'block';
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

        if(quizIndex==5){
            window.alert('情報ライブラリーのクイズはこれで終了！');
            document.getElementById('video').style.display='block'
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
    }

    function hideQuiz(){ 
        document.getElementById('card').style.display = 'none';
        document.getElementById('card').style.height = '58vh';
        document.getElementById('card').style.height = '58svh';
        document.getElementById('hintbutton').style.display = 'none';
        document.getElementById('hintphoto').style.display = 'none';
     }
}
