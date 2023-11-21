const products = [
    {
        pName: 'UNIQLO T-Shirt',
        pDes: "Women's Originals",
        pGender: 2,
        pColor: ['#23ef45', '#000000', '#ff0000'],
        pCategory: 'Popular',
        pPrice: 40000,
        pDiscount: 0,
        pRate: 5,
        pCode: 'M102',
        pLsize: false,
        pMsize: true,
        pSsize: false,
        pStock: 5,
        pPhoto: 'blueshirt.PNG'
    },
    {
        pName: 'UNIQLO Shirt',
        pDes: "Men's Fresh Stretch Shirt",
        pGender: 1,
        pColor: ['#060047', '#B3005E', '#FF5F9E'],
        pCategory: 'Discount',
        pPrice: 100000,
        pDiscount: 2,
        pRate: 3.8,
        pCode: 'M102',
        pLsize: true,
        pMsize: true,
        pSsize: true,
        pStock: 14,
        pPhoto: 'blackshirt.PNG',
    },
    {
        pName: 'UNIQLO Printed Tee',
        pDes: "Altitude Printed Tee",
        pGender: 0,
        pColor: ['#C0EEE4', '#FFCAC8','#B3005E'],
        pCategory: 'Popular',
        pPrice: 25000,
        pDiscount: 7,
        pRate: 5,
        pCode: 'M103',
        pLsize: false,
        pMsize: false,
        pSsize: true,
        pStock: 20,
        pPhoto: 'pinkshirt.PNG',
    },
    {
        pName: 'ESSCORT Shirt',
        pDes: "Women's Shirt",
        pGender: 2,
        pColor: ['#2192FF', '#9CFF2E', '#FDFF00', '#38E54D'],
        pCategory: 'Sale',
        pPrice: 40000,
        pDiscount: 20,
        pRate: 3.5,
        pCode: 'M104',
        pLsize: false,
        pMsize: true,
        pSsize: true,
        pStock: 5,
        pPhoto: 'blouse.PNG',
    },
];

iniload();


function iniload() {
    let main = document.getElementById("main");
    for (const value of products) {
        let colour="";
        for (const item of value.pColor) {
          colour += `<span class="color" style="background-color:${item};"> </span>`
        }
        let gender = genderstatus(value.pGender);
        let Lsize = defineSize(value.pLsize);
        let Msize = defineSize(value.pMsize);
        let Ssize = defineSize(value.pSsize);
        let discount = designLine(value.pDiscount);
        let sale = checkSale(value.pDiscount);
        main.innerHTML +=
            `
            <div class="item">
            <div class="gender">${gender}</div>
            <div class="image">
              <img src="${value.pPhoto}" alt="blacktshirt" width="300px" />
            </div>
            <span class="caption">${value.pName}</span>
            <span class="promo">${value.pCategory}</span>
            <img src="Star.png" alt="star" width="20px" />
            <span class="rating">${value.pRate}</span>
            <div class="des">${value.pDes}</div>
            <span id="colorContainer">
             ${colour}
            </span>
            <span class="size ${Lsize}">L</span>
            <span class="size ${Msize}">M</span>
            <span class="size ${Ssize}">S</span>
            <span class="stock">${value.pStock} left</span><br />
            <span class="price ${discount}">${value.pPrice} MMK</span>
            <span class="saleprice ${sale}">${(value.pPrice - (value.pPrice * (value.pDiscount / 100)))} MMK</span>
            <span class="percent">(${value.pDiscount}% off)</span>
          </div>
        `
    }
}
/**
 * Gender design
 * @param {*} status 
 * @returns 
 */
function genderstatus(status) {
    if (status == 1)
        return 'M';
    else if (status == 2)
        return 'F';
    else return "Unisex";
}
/**
 * Define size of clothes
 * @param {*} size 
 * @returns 
 */
function defineSize(size) {
    return size ? 'active' : 'unactive';
}
/**
 * check how to draw a line on the content
 * @param {*} discount 
 * @returns 
 */
function designLine(discount) {
    if (discount == 0)
        return 'noline';
    else
        return 'price';
}
/**
 * check to write sale price
 * @param {} discount 
 * @returns 
 */
function checkSale(discount) {
    if (discount == 0)
        return 'noneed';
    else
        return 'active';
}

