const fabiconContentHTML = `
  <link rel="icon" href="img/logo.png" type="image/png">
`
const headerContentHTML = `
  <h1>
    <a href="index.html" class="logo">
      <img src="img/logo.png" alt="ロゴ">
    </a>
  </h1>
  <h2>スウェーデン観光ガイド</h2>
  <nav>
    <a href="index.html">ホーム</a>
    <a href="first.html">初めての方</a>
    <a href="region.html">地域別</a>
    <a href="seasons.html">季節</a>
    <a href="food.html">食と文化</a>
    <a href="check.html">診断</a>
  </nav>
`;

const footerContentHTML = `
    <div class="cards">
      <a href="first.html" class="card">初めての方</a>
      <a href="region.html" class="card">地域別</a>
      <a href="seasons.html" class="card">季節</a>
      <a href="food.html" class="card">食と文化</a>
      <a href="check.html" class="card">診断</a>
      <a href="contact.html" class="card">お問い合わせ</a>
    </div>
    &copy; 2025 Sweden Travel Support. All rights reserved.
`

const fabiconElement = document.querySelector('head');
const headerElement = document.querySelector('header');
const footerElement = document.querySelector('footer');

fabiconElement.insertAdjacentHTML('beforeend', fabiconContentHTML);
headerElement.innerHTML = headerContentHTML;
footerElement.innerHTML = footerContentHTML;
console.log('test');
