/* =====================================================================
   DAD'S GARDEN — PLANT DATA
   Edit this file to change any text on the site.

   en      English name
   vi      Vietnamese name
   latin   Latin name ("" shows "Latin name to come")
   spots   labels from the plan drawing (numbers or letters) where it grows
   bonsai  labels that are grown as bonsai
   note    what the family says about it
   dishes  links to Vietnamese dishes made with it: [name, url]
   img     a drawing (only for the drawn produce)
   scene   where the drawing sits in the garden drawing: x, y in % ; size in % of width
   ===================================================================== */

const PLANTS = [
  /* ---------- Drawn produce ---------- */
  {
    id: "kaffir-lime", en: "Kaffir lime", vi: "chanh số 8", latin: "Citrus hystrix",
    spots: ["20", "22"], img: "img/lime.webp", scene: { x: 37.5, y: 45, size: 9 },
    note: "Leaves have a fragrant aroma, with a slightly bitter and spicy taste. Used for cooking, especially in meat dishes.",
    dishes: [
      ["Gà nướng lá chanh · grilled chicken in kaffir lime leaves", "https://wanderingchopsticks.blogspot.com/2011/08/ga-nuong-la-chanh-vietnamese-grilled.html"],
      ["Gà nướng lá chanh · roasted chicken with lime leaves", "https://vickypham.com/blog/roasted-chicken-lemon-leaves/"]
    ]
  },
  {
    id: "red-ruby-guava", en: "Red ruby guava", vi: "cây ổi xá lị", latin: "Psidium guajava",
    spots: ["42"], img: "img/guava.webp", scene: { x: 45, y: 17, size: 8 },
    note: "My dad's favorite fruit. Colors in the fruit are as rich as the flavor. Store bought, very sweet but not crunchy.",
    dishes: [
      ["Muối ớt · chili salt for dipping fruit", "https://www.wokandkin.com/wprm_print/muoi-ot-vietnamese-chili-salt"],
      ["Vietnamese guava juice, salad and more", "https://vinpearl.com/en/vietnamese-guava-nutritional-benefits-and-delicious-recipes"]
    ]
  },
  {
    id: "chrysanthemum", en: "Chrysanthemum", vi: "hoa cúc", latin: "Chrysanthemum × morifolium",
    spots: ["D"], img: "img/chrysanthemum.webp", scene: { x: 64, y: 33, size: 5.5 },
    note: "A vibrant and fragrant flower. It looks beautiful in the garden and tastes delicate when brewed into tea. My dad dries and brews it.",
    dishes: [
      ["Trà hoa cúc · chrysanthemum tea", "https://en.wikipedia.org/wiki/Chrysanthemum_tea"],
      ["Cách làm trà hoa cúc · how to make it (Vietnamese)", "https://hellobacsi.com/song-khoe/dinh-duong/cach-lam-tra-hoa-cuc/"]
    ]
  },
  {
    id: "vietnamese-cabbage", en: "Crucifers, Vietnamese cabbage", vi: "rau cải", latin: "Brassica juncea",
    spots: ["E"], img: "img/cabbage.webp", scene: { x: 79, y: 57, size: 6 },
    note: "Grown to eat with dishes like Vietnamese crepes. Thinner in texture compared to American cabbage.",
    dishes: [
      ["Bánh xèo · Vietnamese sizzling crepes", "https://www.vickypham.com/blog/vietnamese-sizzling-crepe-pancake-banh-xeo"],
      ["Bánh xèo · Hungry Huy's family recipe", "https://www.hungryhuy.com/banh-xeo-savory-vietnamese-crepes/"]
    ]
  },
  {
    id: "piper-lolot", en: "Piper lolot", vi: "rau lá lốt", latin: "Piper sarmentosum",
    spots: ["I"], img: "img/lolot.webp", scene: { x: 93, y: 30, size: 3 },
    note: "My mom grinds and boils the leaves to drink because it helps with her joint pain. The leaves are also used to make Vietnamese grilled beef wraps (my dad's favorite dish). Grown next to the fencing for shade cover.",
    dishes: [
      ["Bò lá lốt · beef wrapped in lolot leaves", "https://runawayrice.com/appetizers/beef-wrapped-in-betel-leaves-bo-la-lot/"],
      ["Bò lá lốt · grilled lemongrass beef in lốt leaf", "https://mmbonappetit.com/bo-la-lot/"]
    ]
  },
  {
    id: "arrowroot", en: "Arrowroot", vi: "củ bình tinh", latin: "Maranta arundinacea",
    spots: ["M"], img: "img/arrowroot.webp", scene: { x: 51, y: 68, size: 5.5 },
    note: "Roots are boiled to eat. The leaves are often used to wrap foods like rice cake and Vietnamese pork pyramid dumplings. Often seen during periods of famine in Vietnam due to their ease of growth. Grown for one season, dormant in winter.",
    dishes: [
      ["Bánh giò · pork pyramid dumplings", "https://www.hungryhuy.com/banh-gio-recipe/"],
      ["Bánh giò · made with arrowroot starch", "https://www.wokandkin.com/banh-gio/"]
    ]
  },
  {
    id: "spearmint", en: "Vietnamese spearmint", vi: "rau húng nhũi", latin: "Mentha spicata",
    spots: ["R"], img: "img/spearmint.webp", scene: { x: 72, y: 70, size: 5 },
    note: "Smaller leaves compared to other mints, oval-shaped with a slight curl. Has a light, sweet taste. The mint bed also grows rau húng cây and tía tô.",
    dishes: [
      ["Gỏi cuốn · fresh spring rolls", "https://grantourismotravels.com/vietnamese-fresh-prawn-and-pork-spring-rolls-recipe"],
      ["Gỏi cuốn · fresh spring rolls with herbs", "https://healthynibblesandbits.com/fresh-vietnamese-spring-rolls"]
    ]
  },
  {
    id: "thai-basil", en: "Thai basil", vi: "lá quế", latin: "Ocimum basilicum var. thyrsiflora",
    spots: ["S"], img: "img/thai-basil.webp", scene: { x: 87, y: 48, size: 4.2 },
    note: "One of the more popular Asian herbs, often put in noodle soups, salads, and wraps.",
    dishes: [
      ["Phở bò · beef noodle soup", "https://en.wikibooks.org/wiki/Cookbook:Ph%E1%BB%9F_b%C3%B2"],
      ["Gỏi cuốn · spring rolls with Thai basil", "https://stacieflinner.com/vietnamese-spring-roll-recipe/"]
    ]
  },
  {
    id: "taro", en: "Taro", vi: "khoai môn", latin: "Colocasia esculenta",
    spots: ["T"], img: "img/taro.webp", scene: { x: 57, y: 85, size: 2.6 },
    note: "The roots are a popular element in Vietnamese cooking. Often put into desserts or used to flavor cakes.",
    dishes: [
      ["Chè khoai môn · taro pudding", "https://takestwoeggs.com/taro-pudding-che-khoai-mon/"],
      ["Canh khoai môn · taro soup", "https://www.whiskeyandbooch.com/blog/taro-soup-canh-khoai-mn-recipe"]
    ]
  },

  /* ---------- In-ground grows ---------- */
  { id: "purslane", en: "Purslane", vi: "rau sam", latin: "Portulaca oleracea", spots: ["A"],
    note: "My mom uses it to make soups." },
  { id: "winter-melon", en: "Winter melon", vi: "bí đao", latin: "Benincasa hispida", spots: ["B"],
    note: "Annually grown, used to make many various Vietnamese dishes. Produces yellow flowers.",
    dishes: [
      ["Canh bí đao tôm · winter melon soup with shrimp", "https://vickypham.com/blog/winter-melon-soup-with-shrimp-canh-bi-dao-tom/"],
      ["Canh bí đao · winter melon soup", "https://mmbonappetit.com/canh-bi-dao/"]
    ] },
  { id: "white-gourd", en: "White gourd", vi: "trái bầu sao", latin: "Lagenaria siceraria", spots: ["C"],
    note: "Annually grown, used mainly to make soups. Produces white flowers. Easier fruit bearing but shorter lifespan. Used to make white gourd drink and soups." },
  { id: "sweet-potato", en: "Sweet potato", vi: "khoai lang", latin: "Ipomoea batatas", spots: ["F"],
    note: "Grown more for the leaves, to eat and put in soup." },
  { id: "elephant-ears", en: "Elephant ears", vi: "bạc hà", latin: "Colocasia gigantea", spots: ["G"],
    note: "Stems cut and used for cooking." },
  { id: "ong-choy", en: "Ong choy, water spinach", vi: "rau muống", latin: "Ipomoea aquatica", spots: ["H"],
    note: "Used for cooking. Typically the leaf used to make garlic water spinach.",
    dishes: [
      ["Rau muống xào tỏi · garlic water spinach", "https://vickypham.com/blog/simple-water-spinach-stir-fry/"],
      ["Rau muống xào tỏi · stir-fried with garlic", "https://www.savorysweetspoon.com/rau-muong/"]
    ] },

  /* ---------- Garden beds ---------- */
  { id: "pennywort", en: "Pennywort", vi: "rau má", latin: "Centella asiatica", spots: ["J"],
    note: "Used to make a refreshing drink.",
    dishes: [
      ["Nước rau má · pennywort drink", "https://www.wokandkin.com/pennywort-drink/"],
      ["Nước rau má · pennywort juice", "https://runawayrice.com/drinks/pennywort-juice/"]
    ] },
  { id: "papaya", en: "Papaya", vi: "đu đủ", latin: "Carica papaya", spots: ["K"],
    note: "Has really proliferated in the garden because they grow easily and rapidly." },
  { id: "garlic-chives", en: "Garlic chives", vi: "hẹ", latin: "Allium tuberosum", spots: ["L"],
    note: "Often used in stir-fried dishes." },
  { id: "corn", en: "Vietnamese corn", vi: "bắp nếp Việt Nam", latin: "Zea mays", spots: ["N"],
    note: "Less sweet than American corn. The kernels are also a lot softer." },
  { id: "lemongrass", en: "Lemongrass", vi: "sả", latin: "Cymbopogon citratus", spots: ["O"], note: "" },
  { id: "green-onion", en: "Green onion", vi: "hành", latin: "Allium fistulosum", spots: ["P"], note: "" },
  { id: "rau-ram", en: "Vietnamese coriander", vi: "rau răm", latin: "Persicaria odorata", spots: ["Q"],
    note: "An herb. I always need this to eat with balut egg.",
    dishes: [
      ["Hột vịt lộn · balut, how to cook and eat", "https://www.vickypham.com/blog/fertilized-duck-eggs-hot-vit-lon"],
      ["Hột vịt lộn xào me · balut in tamarind sauce", "https://mmbonappetit.com/hot-vit-lon-xao-me/"]
    ] },

  /* ---------- Trees, shrubs and pots around the yard ---------- */
  { id: "pandan", en: "Pandan tree", vi: "cây lá dứa", latin: "Pandanus amaryllifolius", spots: ["1"],
    img: "img/pandan.webp", scene: { x: 33, y: 80, size: 7 },
    note: "Used to make cake and desserts. Given to my dad by his mother before she passed.",
    dishes: [["Bánh da lợn · steamed pandan layer cake", "https://vickypham.com/blog/vietnamese-steamed-layer-cake/"]] },
  { id: "chili", en: "Chili pepper tree", vi: "cây ớt", latin: "Capsicum frutescens", spots: ["2", "3"],
    note: "Peppers used for cooking. We have always had these trees in our backyard due to my dad's love of spiciness." },
  { id: "bald-cypress", en: "Bald cypress", vi: "bụt mọc", latin: "Taxodium distichum", spots: ["4"], bonsai: ["4"], note: "" },
  { id: "desert-rose", en: "Desert rose", vi: "sứ Thái Lan", latin: "Adenium obesum",
    spots: ["5", "6", "9", "12", "13", "16"], bonsai: ["5", "6", "9", "12", "13", "16"], note: "" },
  { id: "grass-jelly", en: "Grass jelly tree", vi: "cây sương sâm", latin: "Tiliacora triandra", spots: ["7"],
    note: "Leaves used for cooking jelly and Vietnamese desserts." },
  { id: "arabian-jasmine", en: "Arabian jasmine", vi: "hoa lài", latin: "Jasminum sambac", spots: ["8", "32", "55"],
    note: "Smells lovely. Flowers used for making tea." },
  { id: "sapodilla", en: "Sapodilla tree", vi: "cây sa pô chê", latin: "Manilkara zapota", spots: ["10", "15"],
    note: "We love to eat the fruit." },
  { id: "plumeria", en: "Plumeria", vi: "sứ đại", latin: "Plumeria rubra", spots: ["11", "14", "64", "69"],
    note: "The flowers are so pretty." },
  { id: "osmanthus", en: "Sweet osmanthus, tea olive", vi: "cây hoa mộc, hoa quế", latin: "Osmanthus fragrans",
    spots: ["17", "18", "23", "60"], note: "Small white fragrant flowers used for tea or baking cake." },
  { id: "culantro", en: "Culantro", vi: "ngò gai", latin: "Eryngium foetidum", spots: ["19", "63", "76"],
    note: "Leaves used for cooking, leaving a distinct and strong taste. Most notably put in phở.",
    dishes: [["Phở bò · beef noodle soup", "https://en.wikibooks.org/wiki/Cookbook:Ph%E1%BB%9F_b%C3%B2"]] },
  { id: "rose", en: "Rose", vi: "cây hoa hồng", latin: "Rosa spp.", spots: ["21", "27"],
    note: "My mom's favorite. She loves pretty, aromatic flowers." },
  { id: "longan", en: "Longan tree", vi: "cây long nhãn", latin: "Dimocarpus longan", spots: ["24", "52"],
    note: "My favorite fruit to eat growing up. Similar to the lychee but easier to peel, more sweet than it is tart." },
  { id: "curry-tree", en: "Curry tree", vi: "cây ca ri", latin: "Murraya koenigii", spots: ["25"],
    note: "Leaves used for cooking, especially in curries." },
  { id: "pomegranate", en: "Pomegranate tree", vi: "cây lựu", latin: "Punica granatum", spots: ["26"],
    note: "Given from our backyard neighbor as young saplings, now bent together as an ornamental plant. More decorative than for growing pomegranates." },
  { id: "lime", en: "Lime tree", vi: "cây chanh", latin: "Citrus × aurantiifolia", spots: ["28", "36", "37"], note: "" },
  { id: "golden-cassia", en: "Golden cassia", vi: "cây mai Thái", latin: "", spots: ["29", "38"],
    note: "Pretty leaf colors blooming around Lunar New Year. A cheaper alternative to the mai tree." },
  { id: "aloe", en: "Aloe vera", vi: "cây lô hội", latin: "Aloe vera", spots: ["30", "66", "67", "68"],
    note: "Used for drinks and for medicinal purposes." },
  { id: "star-jasmine", en: "Star jasmine", vi: "", latin: "Trachelospermum jasminoides", spots: ["31", "54"], note: "" },
  { id: "calamansi", en: "Calamansi tree", vi: "cây trái tắc", latin: "Citrus × microcarpa", spots: ["33"],
    note: "Small citrus fruit with a light, sour taste. I love to put it in sugar cane juice." },
  { id: "thai-guava", en: "Thai guava", vi: "cây ổi Thái", latin: "Psidium guajava", spots: ["34", "35", "44"], bonsai: ["44"],
    note: "My dad's favorite. A crunchy, sweet fruit with a touch of tanginess, grown from seed." },
  { id: "royal-poinciana", en: "Royal poinciana", vi: "cây phượng", latin: "Delonix regia", spots: ["39"],
    note: "Produces red, fiery flowers in the summer. A fast-growing tree." },
  { id: "japanese-quince", en: "Japanese quince (yellow and red)", vi: "", latin: "Chaenomeles speciosa", spots: ["40", "59"],
    note: "Produces small pretty flowers all over the tree. Often grown for Lunar New Year traditions." },
  { id: "pomelo", en: "Pomelo", vi: "bưởi da xanh", latin: "Citrus maxima", spots: ["41", "70"],
    note: "This one will take 8–10 years to fruit." },
  { id: "katuk", en: "Katuk, sweet leaf", vi: "rau ngót", latin: "Sauropus androgynus", spots: ["43"], note: "" },
  { id: "dragon-fruit", en: "Dragon fruit (white and red)", vi: "cây thanh long", latin: "Selenicereus undatus", spots: ["45", "46"],
    note: "Vibrant red fruit with a seedy texture and very sweet taste." },
  { id: "foxtail", en: "Foxtail", vi: "", latin: "", spots: ["47"],
    note: "Grown for decorative purposes only. The roots are poisonous to consume." },
  { id: "rosemary", en: "Rosemary", vi: "hương thảo", latin: "Salvia rosmarinus", spots: ["48", "49"], note: "An herb." },
  { id: "magenta-plant", en: "Magenta leaf plant", vi: "cây lá cẩm", latin: "Peristrophe bivalvis", spots: ["50"],
    note: "Used to make a dark purple food coloring.",
    dishes: [["Xôi lá cẩm · purple sticky rice", "https://vickypham.com/blog/magenta-sticky-xoi-la-cam-rice-cooker/"]] },
  { id: "pineapple", en: "Pineapple", vi: "thơm, dứa", latin: "Ananas comosus", spots: ["51"],
    note: "My sister's absolute favorite fruit. Newly planted, we have not been able to harvest a pineapple yet." },
  { id: "bougainvillea", en: "Bougainvillea (purple and red)", vi: "hoa giấy", latin: "Bougainvillea spp.", spots: ["53", "56", "75"], bonsai: ["75"],
    note: "My dad decoratively shapes the roots to wrap. The tree also produces pretty flowers." },
  { id: "snake-plant", en: "Snake plant (yellow and green)", vi: "lưỡi hổ", latin: "Dracaena trifasciata", spots: ["57", "62", "79"], note: "" },
  { id: "bay-laurel", en: "Bay laurel tree", vi: "cây nguyệt quế", latin: "", spots: ["58"], bonsai: ["58"],
    note: "Popularly grown in Vietnam to bring success and fortune. Signifies victory. My dad likes to shape it." },
  { id: "yesterday-today-tomorrow", en: "Yesterday, today, tomorrow", vi: "", latin: "Brunfelsia pauciflora", spots: ["61"],
    note: "Pretty flowers that have a rich range of colors." },
  { id: "buxom", en: "Buxom tree", vi: "cây bùm sụm", latin: "Carmona retusa", spots: ["65", "77"], bonsai: ["65"],
    note: "My dad's favorite bonsai." },
  { id: "donkeys-tail", en: "Donkey's tail", vi: "cây chuỗi ngọc", latin: "", spots: ["71", "73", "74"],
    note: "Looks like a chain of jade after blooming flowers." },
  { id: "bamboo", en: "Bamboo", vi: "cây tre", latin: "Bambusa sp.", spots: ["72"], note: "" },
  { id: "chameleon-plant", en: "Chameleon plant", vi: "diếp cá", latin: "Houttuynia cordata", spots: ["78"],
    img: "img/chameleon.webp", scene: { x: 96, y: 75, size: 8 }, note: "" }
];

/* Where each label sits on the plan drawing, in % of its width / height */
const PLAN_POINTS = {"1":[33.37,83.91],"2":[33.01,79.71],"3":[32.05,71.38],"4":[31.5,67.17],"5":[33.57,68.04],"6":[32.91,64.06],"7":[35.59,57.03],"8":[36.4,54.86],"9":[38.02,55.22],"10":[37.16,51.74],"11":[36.96,48.55],"12":[38.47,50.94],"13":[38.98,47.46],"14":[37.06,46.74],"15":[37.31,44.64],"16":[38.98,44.2],"17":[32.31,25.07],"18":[30.43,25.07],"19":[28.87,24.64],"20":[27.45,24.49],"21":[27.55,22.1],"22":[29.17,22.1],"23":[30.74,22.39],"24":[32.41,22.68],"25":[33.42,19.2],"26":[30.94,19.13],"27":[28.31,18.99],"28":[25.68,18.84],"29":[23.31,18.77],"30":[21.03,18.48],"31":[18.55,18.04],"32":[16.48,17.83],"33":[13.95,17.46],"34":[11.68,17.46],"35":[11.68,13.84],"36":[13.9,14.13],"37":[16.63,14.35],"38":[18.81,14.57],"39":[21.08,15.0],"40":[23.31,15.0],"41":[25.83,15.14],"42":[28.21,15.36],"43":[30.84,15.36],"44":[33.47,15.58],"45":[47.78,30.43],"46":[49.54,30.65],"47":[56.77,29.35],"48":[57.84,31.96],"49":[65.17,31.67],"50":[62.69,24.13],"51":[58.9,13.62],"52":[60.62,14.42],"53":[63.14,15.36],"54":[65.37,13.12],"55":[69.77,13.62],"56":[70.58,16.01],"57":[50.35,36.59],"58":[49.54,37.39],"59":[48.94,38.04],"60":[48.43,39.13],"61":[47.42,39.78],"62":[47.02,38.33],"63":[46.36,39.2],"64":[46.56,48.12],"65":[44.49,48.99],"66":[46.51,50.29],"67":[46.41,52.39],"68":[46.26,54.35],"69":[46.21,56.52],"70":[46.26,61.38],"71":[46.31,64.93],"72":[46.06,68.84],"73":[46.11,73.12],"74":[43.28,79.49],"75":[41.46,80.22],"76":[39.33,78.41],"77":[39.48,80.43],"78":[38.12,80.0],"79":[38.27,81.88],"A":[40.6,1.45],"B":[49.54,4.78],"C":[51.47,6.67],"D":[53.99,9.57],"E":[59.81,10.29],"F":[61.63,9.2],"G":[63.85,10.36],"H":[67.75,11.45],"I":[74.22,16.67],"J":[69.97,21.09],"K":[68.55,23.19],"L":[70.42,25.87],"M":[70.42,28.99],"N":[67.64,29.13],"O":[63.14,26.16],"P":[63.95,29.49],"Q":[61.58,30.65],"R":[59.91,30.65],"S":[58.8,29.35],"T":[59.25,26.81]};
