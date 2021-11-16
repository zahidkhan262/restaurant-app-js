var showResult = document.getElementById('api_data');

let searchInput = '';

const API_ID = '1d27559f';
const API_KEY = '0c57472801b913b6ecc93f2764ad7748';


function dataSubmit() {
    let searchInput = document.getElementById('search').value;


    // let searchQuery = searchInput;

    console.log(searchInput)

    fetchAPI(); //by using edamam.com recipe api


    async function fetchAPI() {

        const Base_URL = `https://api.edamam.com/search?q=${searchInput}&app_id=${API_ID}&app_key=${API_KEY}&to=20`;

        const resp = await fetch(Base_URL);
        const data = await resp.json();

        showDataHtml(data.hits);  //hits is array of api //showdatahtml is funtion to show data in html

        console.log(data);
    }
}
function showDataHtml(results) {
    let bindData = '';
    results.forEach(ele => {
        bindData += `
                        <div class="cards">
                        <div class="card-img">
                            <img src="${ele.recipe.image}" alt="">
                        </div>
                        <div class="card-body">
                            <div class="info d-flex-1">
                                <p>${ele.recipe.label}</p>
                                <p>Calories: ${ele.recipe.calories.toFixed(0)}</p>
                            </div>
                            <div class="add-btn d-flex-1">
                                <button class="btn-1">Add To Cart</button>
                                <button class="btn-1"><a href="${ele.recipe.url}" target="_blank"></a>View</button>
                            </div>
                        </div>
                    </div>
         `
    });
    showResult.innerHTML = bindData;
}

// slide image automatic

var a = 1;

function showImages() {

    if (a == 1) {
        document.getElementById('img1').src = 's1.png';
        a = 2;
    }
    else if (a == 2) {
        document.getElementById('img1').src = 's3.png';
        a = 1;
    }
}
setInterval('showImages()', 3000);
var b = 1;

function showImage2() {

    if (b == 1) {
        document.getElementById('img2').src = 's4.png';
        b = 2;
    }
    else if (b == 2) {
        document.getElementById('img2').src = 's2.png';
        b = 1;
    }
}

setInterval('showImage2()', 3000);






