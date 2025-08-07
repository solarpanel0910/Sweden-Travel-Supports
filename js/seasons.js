const seasons = [
  {
    title: "春の楽しみ",
    catchphrase: "色鮮やかに目覚める、北欧の桜舞う季節",
    img: "img/spring.avif",
    desc1: "雪解けとともにスウェーデンの街や自然が色鮮やかに目覚める春。4月から5月にかけて、ストックホルムでは桜が咲き、王立公園（Kungsträdgården）はピンクのトンネルに包まれます。春の陽光はまだ優しく、気温は5〜15℃と変化しやすいため、軽めのウールジャケットや重ね着スタイルがおすすめです。",
    desc2: "春の代表的なイベントとして、4月30日の「ヴァルボリの夜（Valborg）」があります。全国各地で大きな焚き火が焚かれ、冬の終わりと春の到来を祝います。学生の街ウプサラでは特に盛大に行われ、多くの観光客も訪れます。",
    desc3: "この季節におすすめの観光スポットは、春の花が咲き誇るストックホルム旧市街や、自然と都市が調和するヨーテボリの公園群。また、スコーグスシュルコゴーデン（森の墓地）では、春の静けさと建築美が交差する風景が広がります。",
    desc4: "グルメでは、アスパラガスや春野菜を使ったスープ、新鮮なベリージャムなど、軽やかな季節の味わいが登場します。"
  },
  {
    title: "夏の楽しみ",
    catchphrase: "白夜の光に包まれて、夏の魔法を体感しよう",
    img: "img/summer.avif",
    desc1: "スウェーデンの夏は、太陽が沈まない「白夜」の幻想的な光に包まれる特別な季節です。6月から8月にかけて、平均気温は20℃前後と過ごしやすく、夜でも明るい時間が続きます。日差しは強いので、日焼け止めやサングラスは必需品です。",
    desc2: "最大のイベントは、6月の「ミッドサマー（夏至祭）」。花冠をかぶり、ポールを囲んでダンスを踊りながら、伝統料理であるニシンの酢漬けや新じゃが、イチゴケーキを楽しみます。",
    desc3: "おすすめの観光地は、ストックホルム群島を巡るフェリー旅、ヴィスビューの中世の街並みが残るゴットランド島、音楽フェス「Way Out West」が開催されるヨーテボリなど。",
    desc4: "グルメはベリーを使ったスイーツやグリル料理、冷たいビールやサイダーが人気。自然の中でのピクニックやカヤック体験もおすすめです。"
  },
  {
    title: "秋の楽しみ",
    catchphrase: "黄金に染まる森で、自然の恵みを味わう旅",
    img: "img/autumn.avif",
    desc1: "9月から10月にかけて、スウェーデンの自然は赤や黄色に染まり、美しい紅葉の風景が広がります。日中は15℃前後と穏やかですが、朝晩は冷え込み、防風ジャケットやウールコートが活躍する時期です。",
    desc2: "この季節の最大の魅力は「自然の恵みとのふれあい」。スウェーデンでは「自然享受権（Allemansrätten）」により、誰でも森でキノコ狩りやベリー摘みができます。チャンタレル（アンズタケ）やブルーベリーを手に入れて自炊やピクニックを楽しむのが秋の過ごし方。",
    desc3: "ダーラナ地方での紅葉ハイキング、湖畔のサウナと湖水浴もおすすめ。秋の味覚としては、鹿肉の煮込み、カリンのジャム、根菜スープなどが楽しめます。",
    desc4: "収穫祭やハロウィンイベントも各地で開催され、街は温かい雰囲気に包まれます。"
  },
  {
    title: "冬の楽しみ",
    catchphrase: "雪とオーロラが織りなす、幻想の北欧ウィンター",
    img: "img/winter.avif",
    desc1: "スウェーデンの冬は、真っ白な雪とクリスマスの光が織りなす幻想的な世界。12月から2月にかけて、北部では-20℃以下になる日もあり、防寒装備が必須です。",
    desc2: "北極圏に位置するキルナでは「アイスホテル」や犬ぞり体験が人気で、まるで物語の中に入り込んだような感覚に。さらに、ラップランド地方ではオーロラ観賞が可能で、3日に1度は光のカーテンが観測されると言われています。",
    desc3: "都市部では聖ルシア祭やクリスマスマーケットが開かれ、グロッグ（ホットワイン）やジンジャークッキーを楽しみながら冬の雰囲気に浸ることができます。",
    desc4: "屋内はしっかり暖房が効いており、重ね着で寒暖差に対応するのが快適な過ごし方。"
  }
];

const slider = document.querySelector('#slider');
const nextBtn = document.querySelector('#next-btn');
const prevBtn = document.querySelector('#prev-btn');

for (const season of seasons) {
  const slideHTML = `
    <div class="slide">
      <div class="hero">
        <img src="${season.img}" alt="${season.title}の風景">
        <div class="hero-text">
          <h1>${season.catchphrase}</h1>
        </div>
      </div>
      <section class="content">
        <h2>${season.title}</h2>
        <p>${season.desc1}</p>
        <p>${season.desc2}</p>
        <p>${season.desc3}</p>
        <p>${season.desc4}</p>
      </section>
    </div>
  `;
  
  slider.insertAdjacentHTML('beforeend', slideHTML);
}

const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlider();
});