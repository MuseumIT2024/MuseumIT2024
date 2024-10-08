const quiz = [
    {
        question: 'Q1. 情報ライブラリーではどのような人が本を借りれますか？',
        choices: [
            '火星人',
            '地底人',
            '散歩おじさん',
            '沖縄在住の人'
        ],
        correct: '散歩おじさん',
        hint:'情報ライブラリーは教職員、地域すべての人が利用可能です'
    },
    {
        question: 'Q2. 情報ライブラリー独自でのこだわりはなんですか？',
        choices: [

            '帯を切り取り表紙の裏にはることで帯の内容を残している',
            '帯を加工して、しおりにしている',
            '帯だけを借りれるようにしている',
            '帯を単語帳のようにまとめ、自由に閲覧できるようにしている'
        ],
        correct: '帯を切り取り表紙の裏にはることで帯の内容を残している',
        hint:'普通の本にはこのようなことはありません'
    },
    {
        question: 'Q3. 情報ライブラリーには様々な特徴のある家具がある。1つは寝転んで本が読めるような家具。2つ目は何ですか？',
        choices: [
            'バーカウンターのような家具',
            '貴族のような家具',
            '近未来な家具',
            '未来大学のような家具'

        ],
        correct: 'バーカウンターのような家具',
        hint:'この家具はリラックスしたような雰囲気です'
    },
]

"use strict";
const result = document.querySelector(".result");

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const button = document.getElementsByTagName('button');
const buttonLength = button.length;

const setupQuiz = () => {
    document.getElementById('question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength) {
        button[buttonIndex].textContent = quiz[quizIndex].choices[buttonIndex];
        buttonIndex++;
    }
    document.getElementById('hint').textContent = '';
}

setupQuiz();

const clickHandler = (e) => {
    if (quiz[quizIndex].correct === e.target.textContent) {
        window.alert("正解！");
        score++;
    } else {
        window.alert("不正解！");
    }

    quizIndex++;

    if (quizIndex < quizLength) {
        setupQuiz();
    } else {
        window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
        document.getElementById('ranking1').style.display = 'block';
    }
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
    }else{
        document.getElementById('hint').textContent ='';
    }

}

