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
const products=[
    {
    name :"Giống chó mỹ",
    pcire: "5 triệu",
    description:"Mô tả đặc trưng: Giống chó này tuy không đẹp nhưng được cái cắn người . Ae mua nó nhó cẩn thận . Mỗi tháng chích ngừa cho nó 3 lần",
    image:"../assets/img/anhcun.jpg",
    link:"chi-tiet.html",
    },
    {
    name :"Giống mèo Ả Rập",
    pcire: "1.5 triệu",
    description:"Mô tả đặc trưng: Giống mèo cũng cắn người ",
    image:"../assets/img/anhmeo.jpg",
    link:"chi-tiet.html",
    },
   {
    name :"Giống heo rừng",
    pcire: "50 triệu",
    description:"Mô tả đặc trưng: Giống heo chỉ biết ăn ",
    image:"../assets/img/anhheo2.jpg",
    link:"chi-tiet.html",
    },
    {
    name :"Giống bò công sở",
    pcire: "500 triệu",
    description:"Mô tả đặc trưng: Giống bò này biết làm việc thay con người nen giá hơi mmắc",
    image:"../assets/img/anhbo.jpg",
    link:"chi-tiet.html",
    },
     {
    name :"Giống gà morden",
    pcire: "30 triệu",
    description:"Mô tả đặc trưng: Loài này biết chơi điện thoại ",
    image:"../assets/img/anhga.jpg",
    link:"chi-tiet.html",
    },
     {
    name :"Giống ngựa ",
    pcire: "10 triệu",
    description:"Mô tả đặc trưng: Loài này biết trêu chọc người khác  ",
    image:"../assets/img/anhngua.jpg",
    link:"chi-tiet.html",
    },
]
    
function createItem(obj)
{
    //XÁc định khung chứa products-list
			const listProducts = document.getElementById("product-list");//Tác động đén thẻ <div> có id = "product-list"

			//Tạo 1 container có class = "item"
			const item = document.createElement("div");//<div></div>
			item.setAttribute("class","item card m-5");//<div class = "item"></div>
			//tạo 2 khung chứa hình ảnh và thông tin 
			//tạo 1 container chứa hình ảnh có class = "image"==>chỉ có 1 con là img
			const containerImage = document.createElement("div");//<div></div>
			containerImage.setAttribute("class","image");//<div class = "image"></div>
			
			//tao hình ảnh 
			const img = document.createElement("img");	 
			img.setAttribute("src",obj.image);
			img .setAttribute("alt",obj.name);
			img.setAttribute("style","width:80%;height:200px;");
			//đưa vào khung chứa ảnh
			containerImage.appendChild(img);
			
			//tạo 1 container chứa thông tin sản phẩm có class = "info"==> có 3 <p>và 1 <a>
			const containerInfo = document.createElement("div");//<div></div>
			containerInfo.setAttribute("class","info card-body");//<div class = "info"></div>

			//tạo <p> chứa tên sản phẩm 
			const name = document.createElement("h2");
            name.innerHTML = obj.name;

			//tạo <p> chứa giá sản phẩm 
			const price = document.createElement("p");
			price.setAttribute("class","card-title")
			price.innerHTML = obj.pcire + "/em";
			//tạo <p> chứa mô tả sản phẩm
			const description = document.createElement("p");
			description.innerHTML = obj.description;

			//tạo <a> chứa liên kết 
			const linkProduct = document.createElement("a");
			linkProduct.innerHTML="Xem chi tiết";
			linkProduct.setAttribute("href","page8.html");//sửa sau
			linkProduct.setAttribute("class","btn btn-info")

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
function loadAllProducts(objArray)
{
    let i=0;
    for(i=0; i<objArray.length;i++)
    {
        createItem(objArray[i]);
    }
}