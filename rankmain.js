
function getScoreFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('score'); // score の値を取得
}

const score = getScoreFromURL();
console.log(score); // 取得したスコアをコンソールに表示
document.getElementById('quizscore').textContent=score;
