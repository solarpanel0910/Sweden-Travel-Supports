const questions = [
  {
    text: "① 自然と都会、どちらに惹かれますか？",
    options: [
      { text: "自然", value: "nature" },
      { text: "都会", value: "city" }
    ]
  },
  {
    text: "② 寒さに対してどれくらい耐性がありますか？",
    options: [
      { text: "強い", value: "strong" },
      { text: "弱い", value: "weak" }
    ]
  },
  {
    text: "③ 食べ物はどちらが好みですか？",
    options: [
      { text: "海の幸", value: "seafood" },
      { text: "お菓子・デザート", value: "sweets" }
    ]
  },
  {
    text: "④ 静かな旅とにぎやかな旅、どちらを選びますか？",
    options: [
      { text: "静か", value: "quiet" },
      { text: "にぎやか", value: "lively" }
    ]
  },
  {
    text: "⑤ アクティブな体験と観光地巡り、どちらが好き？",
    options: [
      { text: "アクティブ", value: "activity" },
      { text: "観光", value: "sightseeing" }
    ]
  }
];

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultSection = document.getElementById("result");
const resultText = document.getElementById("result-Text");

let currentQuestion = 0;
let answers = [];

// 質問を表示
function showQuestion(index) {
  const q = questions[index];
  questionText.textContent = q.text;
  optionsContainer.innerHTML = ""; // 前の選択肢をクリア

  q.options.forEach(opt => {
    const label = document.createElement("label");
    label.style.display = "block";
    label.style.marginBottom = "10px";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "option";
    input.value = opt.value;

    label.appendChild(input);
    label.appendChild(document.createTextNode(" " + opt.text));
    optionsContainer.appendChild(label);
  });

  nextBtn.disabled = true;
}

optionsContainer.addEventListener("change", () => {
  nextBtn.disabled = false;
});

// 「次へ」ボタンの処理
nextBtn.addEventListener("click", () => {
  const selected = document.querySelector('input[name="option"]:checked');
  if (selected) {
    answers.push(selected.value);
    currentQuestion++;

    if (currentQuestion < questions.length) {
      showQuestion(currentQuestion);
    } else {
      showResult();
    }
  }
});

// 診断結果を表示
function showResult() {
  document.getElementById("questionnaire").classList.add("hidden");
  resultSection.classList.remove("hidden");

  let result = "";
  if (answers.includes("nature") && answers.includes("strong")) {
    result = "あなたにはラップランド地方での自然体験やオーロラ観賞がおすすめです！";
  } else if (answers.includes("city") && answers.includes("sweets")) {
    result = "ストックホルムの街歩きと北欧カフェ巡りがぴったりです！";
  } else {
    result = "季節や地域に合わせたバランスの良い旅ができそうです。四季の魅力を満喫しましょう！";
  }

  resultText.textContent = result;
}

showQuestion(currentQuestion);
