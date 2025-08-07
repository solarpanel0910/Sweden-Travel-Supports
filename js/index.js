let slides = document.querySelectorAll('.slide');
let current = 0;

function showNextSlide() {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
}

setInterval(showNextSlide, 4000); // 4秒ごとに切り替え

const grid = document.querySelector('.news-grid');

const news = [
  {
    img: 'news1.avif',
    tag: '食文化',
    title: 'ワイナリー解禁！南スウェーデンで味わう地産ワイン',
    date: '2025年7月20日',
    link: 'news1.html',
    alt: '南スウェーデンのワイン',
  },
  {
    img: 'news2.avif',
    tag: '社会',
    title: 'アルコール規制緩和、観光地で現地販売OKに！',
    date: '2025年7月18日',
    link: 'news2.html',
    alt: 'アルコール規制緩和',
  },
  {
    img: 'news3.avif',
    tag: '健康・癒し',
    title: '冷水浴×サウナで整う！癒し旅が静かなブーム',
    date: '2025年7月15日',
    link: 'news3.html',
    alt: '冷水浴×サウナ',
  },
  {
    img: 'news4.avif',
    tag: '自然',
    title: '22島を巡る絶景トレイル、ストックホルム沖に誕生！',
    date: '2025年7月10日',
    link: 'news4.html',
    alt: '絶景トレイル',
  },
  {
    img: 'news5.avif',
    tag: 'デザイン',
    title: '世界初！「World of Volvo」新体験型ミュージアム開業',
    date: '2025年7月5日',
    link: 'news5.html',
    alt: 'Volvoミュージアム',
  }
];

for (let i = 0; i < news.length; i++) {
  const item = news[i];
  const content = `
    <div class="news-card card">
      <a href="${item.link}">
        <img src="img/${item.img}" alt="${item.alt}">
        <div class="news-content">
          <span class="news-tag">${item.tag}</span>
          <h3>${item.title}</h3>
          <p class="news-date">${item.date}</p>
          続きを読む
        </div>
      </a>
    </div>
  `;
  grid.insertAdjacentHTML('beforeend', content);
}
