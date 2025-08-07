const sectionsData = [
  {
    img: "img/nature.avif",
    alt: "スウェーデンの自然",
    title: "スウェーデンってどんな国？",
    text: "スウェーデンは北ヨーロッパに位置する、豊かな自然と高い生活水準を誇る国です。治安が良く、穏やかで親切な国民性もあり、初めての海外旅行でも安心して訪れることができます。四季がはっきりしており、夏には夜でも太陽が沈まない「白夜」、冬には幻想的なオーロラが観測できる地域もあり、季節ごとに異なる魅力を楽しめます。",
    imgPosition: "left" 
  },
  {
    img: "img/cash.avif",
    alt: "カード決済",
    title: "旅行前に知っておきたい基本情報",
    text: "スウェーデンの通貨は「スウェーデン・クローナ（SEK）」ですが、実際のところ現金を使う機会は少なく、ほとんどの店舗や交通機関でクレジットカードやデビットカードによる決済が可能です。英語も非常によく通じるため、現地の人々とのコミュニケーションもスムーズに行えるでしょう。",
    imgPosition: "right" 
  },
  {
    img: "img/plug.png",
    alt: "トイレと変換プラグ",
    title: "快適に過ごすためのちょっとした注意点",
    text: "多くの公共トイレは有料であるため、小銭を携帯しておくと安心です。また、スウェーデンの電源プラグは日本と異なるC型を使用しているため、変換プラグの用意もお忘れなく。",
    link: { 
      url: "https://locotabi.jp/stockholm/guide/tp-gen-power-supply",
      text: "詳しくはこちら"
    },
    imgPosition: "left"
  },
  {
    img: "img/bus.avif",
    alt: "スウェーデンの交通機関",
    title: "便利な公共交通機関で快適に移動",
    text: "公共交通機関についても非常に整備されており、バスや電車は時間通りに運行されていることがほとんどです。都市部だけでなく地方でも移動がしやすく、効率よく観光スポットを巡ることができます。",
    imgPosition: "right"
  },
  {
    img: "img/city&nature.avif",
    alt: "自然と街の調和",
    title: "自然と都市の調和が生む癒しの時間",
    text: "スウェーデンでは、森や湖に囲まれた街並みの中で、静かで豊かな時間を過ごすことができます。自然と都市がバランスよく共存する環境は、日々の喧騒から離れてリフレッシュしたい旅行者にとって理想的です。",
    imgPosition: "left"
  },
  {
    img: "img/road.avif",
    alt: "旅の始まり",
    title: "初めての海外旅行にもぴったり",
    text: "このように、スウェーデンは一人旅にも家族旅行にも向いており、旅行初心者でも安心して訪れることができる国です。まずはこの入門ガイドをきっかけに、スウェーデンの魅力を少しずつ知ってみませんか？",
    imgPosition: "right"
  }
];

const mainContainer = document.querySelector('main');

for (const section of sectionsData) {
  const imageBlock = `<img src="${section.img}" alt="${section.alt}" class="block-img">`;
  const textBlock = `
    <div class="block-text">
      <h2>${section.title}</h2>
      <p>${section.text}</p>
      ${section.link ? `<a href="${section.link.url}">${section.link.text}</a>` : ''}
    </div>
  `;

  const blockContent = section.imgPosition === 'left' 
    ? imageBlock + textBlock 
    : textBlock + imageBlock;

  const sectionHTML = `
    <section class="section">
      <div class="block">
        ${blockContent}
      </div>
    </section>
  `;

  mainContainer.insertAdjacentHTML('beforeend', sectionHTML);
}