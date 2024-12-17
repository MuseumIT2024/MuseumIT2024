
// function getScoreFromURL() {
//     const params = new URLSearchParams(window.location.search);
//     return params.get('score'); // score の値を取得
// }

// const score = getScoreFromURL();


// function getParamsFromURL() {
//     const params = new URLSearchParams(window.location.search);
//     const username = params.get('username') || "匿名";
//     const score = params.get('score') || 0;
//     return { username, score };
 
// }
// window.onload = function () {
//     const { username, score } = getParamsFromURL();
// }

let score=0;

window.onload = function () {
    const params = new URLSearchParams(window.location.search);
    console.log(params.toString()); // URLパラメータ全体を確認
    console.log("username:", params.get("username"));
    console.log("score:", params.get("score"));
  
    const username = params.get('username') || "匿名";
     score = params.get('score') || 0;


     s = (value + score*1.5)

    document.getElementById('name').textContent=username+"さんの偏差値は";

    if(s>49 && s<55){
        document.getElementById('level').textContent="一般学生レベルです";
        document.getElementById('t-text').textContent="大学には慣れてきましたか？"+username+"さん";
    }

    if(s>55 && s<59){
        document.getElementById('level').textContent="研究生レベルです";
        document.getElementById('t-text').textContent="さすが"+username+"さん"+"、研究熱心な所が出ていますね";
    }

    if(s>59 && s<62){
        document.getElementById('level').textContent="教授レベルです";
        document.getElementById('t-text').textContent=username+"教授、今日もお疲れ様です。";
    }

    if(s>62){
        document.getElementById('level').textContent="学長レベルです";
        document.getElementById('t-text').textContent=username+"学長なら、こんなクイズ朝飯前ですよね。";
    }




    document.getElementById('quizscore').textContent=s;


  

  };



value = 45

