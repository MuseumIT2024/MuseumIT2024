const quiz = [
 {
 question: 'Q1. 漫画「ナルト」に登場した虫を使う戦闘スタイルの忍び一族の呼称は何？',
 choices: [
 'うちは一族',
 '犬塚一族',
 '油女一族',
 '日向一族'
 ],
 correct: '油女一族'
 },
 {
 question: 'Q2. アニメ「ぼっち・ざ・ろっく」で主人公が最初に友達になった人物は誰？',
 choices: [
 '山田リョウ',
 '伊地知虹夏',
 '喜多郁代',
 '日向恵恋奈'
 ],
 correct: '伊地知虹夏'
 },
  ]

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
}
 
let handlerIndex = 0;
while(handlerIndex < buttonLength) {
 button[handlerIndex].addEventListener('click', (e) => {
   clickHandler(e);
 });
 handlerIndex++;
}

const clickHandler = (e) => {
  ...
  quizIndex++;
  if (quizIndex < quizLength) {
    setupQuiz();
 } else {
  window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
 }
}
