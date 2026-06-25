/*viết mã javacripts */
//khai báo đối tượng lữu thong tin sản phẩm
/*const product={
    name :"giống chó mỹ",
    pcire: "5 triệu",
    description:"Mô tả đặc trưng: Giống chó này tuy không đẹp nhưng được cái cắn người . Ae mua nó nhó cẩn thận . Mỗi tháng chích ngừa cho nó 3 lần",
    image:"../assets/img/anhcun.jpg",
    link:"chi-tiet.html",
    };
*/
const products = [
  {
    id: 1,
    name: "Mỳ Cay",
    price: "45ka",
    description:
      "Mô tả đặc trưng: Mỳ cay là món ăn nổi tiếng với hương vị cay nồng hấp dẫn, nước dùng đậm đà được ninh từ xương và các loại gia vị đặc biệt. Sợi mì dai ngon kết hợp cùng nhiều loại topping như thịt bò, hải sản, xúc xích, nấm và rau xanh, tạo nên hương vị thơm ngon, kích thích vị giác và phù hợp với những người yêu thích món ăn cay. 🌶️🍜",
    image: "../assets/img/mycay.jpg",
    link: "chi-tiet.html",
  },
  {
    id: 2,
    name: "Bún đậu",
    price: "95ka",
    description:
      "Mô tả đặc trưng: Bún đậu mắm tôm là món ăn dân dã nổi tiếng của Việt Nam với hương vị đậm đà và hấp dẫn. Món ăn gồm bún lá mềm, đậu hũ chiên vàng giòn bên ngoài nhưng vẫn mềm bên trong, ăn kèm chả cốm, thịt luộc, nem rán và các loại rau sống tươi ngon. Điểm nhấn đặc biệt là mắm tôm được pha vừa miệng, tạo nên hương vị đặc trưng khó quên. Sự kết hợp hài hòa giữa các nguyên liệu mang đến trải nghiệm ẩm thực thơm ngon, đậm chất truyền thống. 🍜🥢😋",
    image: "../assets/img/bundau.jpg",
    link: "chi-tiet.html",
  },
  {
    id: 3,
    name: "Bánh Khọt",
    price: "5ka 1 cái ",
    description:
      "Mô tả đặc trưng:Bánh khọt là món ăn đặc sản nổi tiếng của miền Nam Việt Nam, đặc biệt phổ biến ở Vũng Tàu. Bánh được làm từ bột gạo, đổ trong khuôn nhỏ tạo lớp vỏ vàng giòn bên ngoài và mềm thơm bên trong. Nhân bánh thường là tôm tươi, thịt hoặc hải sản, phía trên được rắc thêm hành lá và bột tôm. Khi ăn, bánh khọt được cuốn cùng rau sống, rau thơm và chấm với nước mắm chua ngọt, tạo nên hương vị hài hòa, thơm ngon và hấp dẫn. 🦐🥬🥢😋",
    image: "../assets/img/banhkot.webp",
    link: "chi-tiet.html",
  },
  {
    id: 4,
    name: "Bún chả giò",
    price: "25ka",
    description:
      "Mô tả đặc trưng:Bún chả giò là món ăn quen thuộc của ẩm thực Việt Nam, gồm bún tươi mềm kết hợp với chả giò chiên vàng giòn rụm. Món ăn thường được dùng kèm rau sống, dưa leo, giá đỗ và các loại rau thơm tươi ngon. Nước mắm chua ngọt đậm đà giúp hòa quyện các nguyên liệu, tạo nên hương vị thơm ngon, hấp dẫn và cân bằng giữa vị giòn, mềm, chua, ngọt. Đây là món ăn được nhiều người yêu thích nhờ sự thanh mát nhưng vẫn đầy đủ dinh dưỡng.",
    image: "../assets/img/bunchagio.jpg",
    link: "chi-tiet.html",
  },
  {
    id: 5,
    name: "Cua rang me",
    price: "99ka",
    description:
      "Mô tả đặc trưng: Cua rang me là món hải sản hấp dẫn với những con cua tươi chắc thịt được chế biến cùng sốt me chua ngọt đậm đà. Lớp sốt sánh mịn bám đều trên từng miếng cua, tạo nên hương vị hài hòa giữa vị chua của me, vị ngọt tự nhiên của cua và hương thơm của các loại gia vị. Món ăn có màu sắc bắt mắt, hương vị thơm ngon đặc trưng, thường được dùng kèm bánh mì hoặc ăn cùng cơm nóng, mang đến trải nghiệm ẩm thực hấp dẫn và khó quên.",
    image: "../assets/img/cuarangme.jpg",
    link: "chi-tiet.html",
  },
  {
    id: 6,
    name: "Gà rán  ",
    price: "49ka",
    description:
      "Mô tả đặc trưng: Gà rán là món ăn được chế biến từ những miếng thịt gà tươi ngon, tẩm ướp gia vị đậm đà và phủ lớp bột chiên giòn đặc biệt. Sau khi chiên vàng, lớp vỏ bên ngoài giòn rụm, thơm ngon trong khi phần thịt bên trong vẫn mềm, ngọt và giữ được độ mọng nước. Gà rán thường được ăn kèm với tương ớt, tương cà hoặc các loại sốt đặc trưng, mang đến hương vị hấp dẫn và phù hợp với nhiều lứa tuổi ",
    image: "../assets/img/garan.jpg",
    link: "chi-tiet.html",
  },
  {
    id: 7,
    name: "Nem nướng",
    price: "49ka",
    description:
      "Mô tả đặc trưng:Nem nướng là món ăn thơm ngon được làm từ thịt heo xay nhuyễn, tẩm ướp gia vị đậm đà rồi nướng trên than hồng cho đến khi vàng đều và dậy mùi hấp dẫn. Nem có vị ngọt tự nhiên của thịt, lớp ngoài hơi cháy xém tạo độ thơm đặc trưng, bên trong mềm và dai nhẹ. Món ăn thường được dùng kèm rau sống, dưa leo, đồ chua, bánh tráng hoặc bún và chấm với nước sốt đậm vị, tạo nên hương vị hài hòa, hấp dẫn và khó quên.  ",
    image: "../assets/img/nemnuong.jpeg",
    link: "chi-tiet.html",
  },
  {
    id: 8,
    name: "Phở hà nội",
    price: "40ka",
    description:
      "Mô tả đặc trưng: Phở là món ăn truyền thống nổi tiếng của Việt Nam, gồm bánh phở mềm dai kết hợp với nước dùng trong, ngọt thanh được ninh từ xương trong nhiều giờ. Món ăn thường được dùng với thịt bò hoặc thịt gà tươi ngon, ăn kèm các loại rau thơm, giá đỗ, chanh và ớt. Hương vị đậm đà, thơm ngon cùng mùi thơm đặc trưng của các loại gia vị như quế, hồi và gừng tạo nên nét đặc sắc riêng, khiến phở trở thành món ăn được yêu thích trong và ngoài nước.",
    image: "../assets/img/pho.jpg",
    link: "chi-tiet.html",
  },
  {
    id: 9,
    name: "Sushi",
    price: "199ka",
    description:
      "Mô tả đặc trưng: Sushi là món ăn truyền thống nổi tiếng của Nhật Bản, được chế biến từ cơm trộn giấm kết hợp với các nguyên liệu tươi ngon như cá hồi, cá ngừ, tôm, cua, trứng hoặc rau củ. Món ăn có hương vị thanh nhẹ, hài hòa giữa vị ngọt của hải sản, vị chua dịu của cơm và hương thơm đặc trưng của rong biển. Sushi thường được dùng kèm với nước tương, gừng ngâm và wasabi, tạo nên trải nghiệm ẩm thực tinh tế, hấp dẫn và giàu dinh dưỡng.  ",
    image: "../assets/img/sushi.jpg",
    link: "chi-tiet.html",
  },
  {
    id: 10,
    name: "Tokbokki",
    price: "35ka",
    description:
      "Mô tả đặc trưng: Tokbokki (Tteokbokki) là món ăn đường phố nổi tiếng của Hàn Quốc, được làm từ bánh gạo dẻo dai nấu cùng nước sốt cay ngọt đậm đà. Món ăn thường kết hợp với chả cá, trứng luộc, hành lá và các loại topping khác, tạo nên hương vị hấp dẫn và màu sắc bắt mắt. Vị cay nhẹ hòa quyện với độ dẻo mềm của bánh gạo mang đến cảm giác thơm ngon, đậm vị và rất được giới trẻ yêu thích.",
    image: "../assets/img/tobokki.jpg",
    link: "chi-tiet.html",
  },
  {
    id: 11,
    name: "Tôm chiên",
    price: "39ka",
    description:
      "Mô tả đặc trưng: Tôm chiên là món ăn hấp dẫn được chế biến từ những con tôm tươi ngon, tẩm ướp gia vị vừa ăn và phủ lớp bột chiên giòn hoặc chiên xù. Sau khi chế biến, tôm có màu vàng óng đẹp mắt, lớp vỏ ngoài giòn rụm trong khi phần thịt bên trong vẫn giữ được độ ngọt tự nhiên và mềm mọng. Món ăn thường được dùng kèm tương ớt, sốt mayonnaise hoặc các loại nước chấm đặc biệt, mang đến hương vị thơm ngon, hấp dẫn và phù hợp với mọi lứa tuổi. ",
    image: "../assets/img/tomchien.webp",
    link: "chi-tiet.html",
  },
  {
    id: 12,
    name: "Tôm sốt trứng muối",
    price: "99ka",
    description:
      "Mô tả đặc trưng:Tôm sốt trứng muối là món ăn được chế biến từ những con tôm tươi chắc thịt, chiên vàng rồi phủ lớp sốt trứng muối béo ngậy và thơm lừng. Sự kết hợp giữa vị ngọt tự nhiên của tôm và vị mặn béo đặc trưng của trứng muối tạo nên hương vị đậm đà, hấp dẫn. Món ăn có màu vàng óng đẹp mắt, hương thơm lôi cuốn và thường được dùng trong các bữa ăn gia đình hoặc tiệc, mang đến trải nghiệm ẩm thực thơm ngon và khó quên. ",
    image: "../assets/img/tomnam.webp",
    link: "chi-tiet.html",
  },
  {
    id: 13,
    name: "GUINNESS",
    price: "20ka",
    description:
      "Mô tả đặc trưng: description:Bia Guinness là thương hiệu bia đen nổi tiếng đến từ Ireland, được biết đến với màu đen sẫm đặc trưng và lớp bọt kem mịn. Hương vị cân bằng giữa vị ngọt của mạch nha rang và vị đắng nhẹ của hoa bia, kết hợp cùng hương thơm cà phê và socola, mang đến cảm giác thưởng thức đậm đà và khó quên.",
    image: "../assets/img/GUINNESS.jpg",
    link: "chi-tiet.html",
  },
  {
    id: 14,
    name: "JURA",
    price: "15ka",
    description:
      "Mô tả đặc trưng: description:JURA là dòng bia có hương vị thơm ngon, cân bằng giữa vị malt dịu nhẹ và hậu vị êm mượt. Với màu sắc hấp dẫn cùng hương thơm đặc trưng, sản phẩm mang đến trải nghiệm thưởng thức tươi mát và dễ chịu cho người dùng.",
    image: "../assets/img/JURA.jpg",
    link: "chi-tiet.html",
  },
  {
    id: 15,
    name: "HÀ NỘI",
    price: "15ka",
    description:
      "Mô tả đặc trưng:description:Bia Hà Nội là thương hiệu bia lâu đời của Việt Nam, nổi tiếng với hương vị đậm đà, thơm mùi malt và hậu vị cân bằng. Sản phẩm có màu vàng sáng hấp dẫn, vị bia dễ uống và mang nét đặc trưng của văn hóa ẩm thực Hà Nội.",
    image: "../assets/img/HANOI.jpg",
    link: "chi-tiet.html",
  },
  {
    id: 16,
    name: "HEINE",
    price: "17ka",
    description:
      "Mô tả đặc trưng: description:Heineken là dòng bia cao cấp nổi tiếng với màu vàng sáng, hương thơm nhẹ và vị bia tươi mát. Sản phẩm mang đến cảm giác sảng khoái và hương vị hài hòa đặc trưng.",
    image: "../assets/img/HEINE.webp",
    link: "chi-tiet.html",
  },
  {
    id: 17,
    name: "PILSNER",
    price: "15ka",
    description:
      "Mô tả đặc trưng: Pilsner là dòng bia vàng nổi tiếng với hương vị tươi mát, thơm nhẹ và hậu vị cân bằng. Sản phẩm mang đến cảm giác sảng khoái và dễ thưởng thức trong nhiều dịp khác nhau.",
    image: "../assets/img/PILSNER.webp",
    link: "chi-tiet.html",
  },
  {
    id: 18,
    name: "Sài Gòn",
    price: "13ka",
    description:
      "Mô tả dặc trưng: Bia Sài Gòn là dòng bia truyền thống được nhiều người yêu thích nhờ hương vị đậm đà, màu vàng đẹp mắt và cảm giác tươi mát khi thưởng thức.",
    image: "../assets/img/SG.jpg",
    link: "chi-tiet.html",
  },
];

function createItem(obj) {
  //XÁc định khung chứa products-list
  const listProducts = document.getElementById("product-list"); //Tác động đén thẻ <div> có id = "product-list"

  //Tạo 1 container có class = "item"
  const item = document.createElement("div"); //<div></div>
  item.setAttribute("class", "item card col-md-4"); //<div class = "item"></div>
  //tạo 2 khung chứa hình ảnh và thông tin
  //tạo 1 container chứa hình ảnh có class = "image"==>chỉ có 1 con là img
  const containerImage = document.createElement("div"); //<div></div>
  containerImage.setAttribute("style", "text-align:center;padding-top:10px;"); //<div class = "image"></div>

  //tao hình ảnh
  const img = document.createElement("img");
  img.setAttribute("src", obj.image);
  img.setAttribute("alt", obj.name);
  img.setAttribute(
    "style",
    "width:100%;height:180px;object-fit:cover;border-radius:10px;",
  );
  containerImage.appendChild(img);

  //tạo 1 container chứa thông tin sản phẩm có class = "info"==> có 3 <p>và 1 <a>
  const containerInfo = document.createElement("div"); //<div></div>
  containerInfo.setAttribute("class", "info card-body"); //<div class = "info"></div>

  //tạo <p> chứa tên sản phẩm
  const name = document.createElement("h2");
  name.innerHTML = obj.name;

  //tạo <p> chứa giá sản phẩm
  const price = document.createElement("p");
  price.setAttribute("class", "card-title");
  price.innerHTML = obj.price + "/phần";
  //tạo <p> chứa mô tả sản phẩm
  const description = document.createElement("p");
  description.innerHTML = obj.description.substring(0, 100) + "...";

  //tạo <a> chứa liên kết
  const linkProduct = document.createElement("a");
  linkProduct.innerHTML = "Xem chi tiết";
  linkProduct.setAttribute("href", "chi-tiet.html?masp=" + obj.id);
  linkProduct.setAttribute("class", "btn btn-info");

  //gắn 4 con vào khung chứa info
  containerInfo.appendChild(name);
  containerInfo.appendChild(price);
  containerInfo.appendChild(description);
  containerInfo.appendChild(linkProduct);

  //thêm khung chứa image vào item
  item.appendChild(containerImage);
  item.appendChild(containerInfo);
  //thêm item vào list product
  listProducts.appendChild(item);
  //listProducts.setAttribute("style","color:red; blackground-color:green;");
}
function loadAllProducts(objArray) {
  let i = 0;
  for (i = 0; i < objArray.length; i++) {
    createItem(objArray[i]);
  }
}
