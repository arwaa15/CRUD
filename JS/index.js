
var productNameInput = document.getElementById('productName');
var productPriceInput = document.getElementById('productPrice');
var productCatageryInput = document.getElementById('productCatagery');
var productDescraptionInput = document.getElementById('productDescraption');
var productcotainer = [];
var addbtn = document.getElementById('addbtn');
var apdatebtn = document.getElementById('apdatebth');

if (localStorage.getItem('product') != null) {
    productcotainer = JSON.parse(localStorage.getItem('product'));
    displayproduct(productcotainer);

}
function AddProduct() {
    //if(validateproduct()==true){
    var product = {
        mark: productNameInput.value,
        price: productPriceInput.value,
        catagery: productCatageryInput.value,
        desc: productDescraptionInput.value
    }

    productcotainer.push(product);
    localStorage.setItem('product', JSON.stringify(productcotainer));
    displayproduct(productcotainer);
    clearform();
    //     }
    //    else{
    //     alert('Poduct Name Valid')
    //    }
}

function clearform() {
    productNameInput.value = '';
    productPriceInput.value = '';
    productCatageryInput.value = '';
    productDescraptionInput.value = '';
}

function displayproduct(arr) {
    var cartoona = ``;
    for (var i = 0; i < arr.length; i++) {
        cartoona += ` <tr>
        <td> ${arr[i].mark}</td>
        <td> ${arr[i].price}</td>
        <td> ${arr[i].catagery}</td>
        <td> ${arr[i].desc}</td>
        <td><button onclick='workUpdate(${i});' class="btn  btn-outline-warning  ">Update</button></td>
        <td><button  onclick=(deleteproduct(${i})); class="btn  btn-outline-danger ">Delete</button></td>
    </tr>`;

    }

    document.getElementById('tablebody').innerHTML = cartoona;
}

function deleteproduct(productIndex) {
    productcotainer.splice(productIndex, 1);
    displayproduct(productcotainer);
    localStorage.setItem('product', JSON.stringify(productcotainer));
}




function searchProduct(term) {
    var matchProduct = [];
    for (var i = 0; i < productcotainer.length; i++) {
        if (productcotainer[i].mark.toLowerCase().includes(term.toLowerCase())) {

            matchProduct.push(productcotainer[i]);
        }


    }
    console.log(matchProduct);
    displayproduct(matchProduct);
}

function workUpdate(i) {
    addbtn.classList.replace('d-block', 'd-none');
    apdatebtn.classList.replace('d-none', 'd-block');
    productNameInput.value = productcotainer[i].mark;
    productPriceInput.value = productcotainer[i].price;
    productCatageryInput.value = productcotainer[i].catagery;
    productDescraptionInput.value = productcotainer[i].desc;
}
