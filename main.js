let card_box = document.querySelector('.card_box');
let search = document.querySelector('#find')
let last_element_idx = 0
let more_btn = document.querySelector("#more_btn")
// console.log(card_box);


function render(list = products) {
    card_box.innerHTML = '';
    list.forEach((item) => {
        let card = document.createElement('div');
        card.classList.add('card', 'col-span-1');

        let image = document.createElement('img');
        image.src = item.image;
        image.title = item.title;
        image.classList.add('w-full', 'h-[260px]', 'rounded');

        card.appendChild(image);

        let card_text = document.createElement('div')

        let title = document.createElement('h2');
        title.textContent = item.title;
        title.classList.add("mt-4")
        card_text.appendChild(title);
        // console.log(item.image);


        let price = document.createElement('p');
        price.textContent = item.price;
        price.style.color = 'red'
        card_text.appendChild(price);
        card.appendChild(card_text)

        let btn = document.createElement('button')
        btn.textContent = "sotib olish"
        btn.classList.add('bg-blue-500', 'text-red', 'py-2', 'px-4', 'rounded-md', 'mt-4', 'w-full', 'hover:bg-green-500')
        card_text.appendChild(btn)

        card_box.appendChild(card);



    })
}

render();

// function searchButton() {
//     products.forEach((item) => {
//         // console.log(item.title);
//         // console.log(search.value);

//         // console.log(item.title.includes(search.value));

//         if (item.title.includes(search.value)) {
//             console.log(item.title);
//             // card_box.innerHTML = ''
//             // render()
//             card_box.appendChild()
//         }
//     })
//     render()
// }


function searchButton(val) {
    card_box.innerHTML = ''
    let res = products.filter((item) => {
        return item.title.toLowerCase().includes(val.value.toLowerCase())
    })
    render(res)
}

function filterByCategory(val) {
    card_box.innerHTML = ''
    let res = products.filter((item) => {
        return item.category === val.value
    })
    render(res)
}


function minnum(val) {
    card_box.innerHTML = ''
    let res = products.filter((item) => {
        return item.price >= val.value
    })
    render(res)
}

function maxnum(val) {
    card_box.innerHTML = ''
    let res = products.filter((item) => {
        return item.price <= val.value
    })
    render(res)
}


function moreHandle() {
    card_box.innerHTML = ''
    last_element_idx += 3;  
    render(products.slice(0, last_element_idx))
    if (last_element_idx >= products.length) {
        more_btn.style.display = 'none'
    }
}
moreHandle()