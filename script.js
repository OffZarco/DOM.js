const h1 = document.getElementsByTagName('h1')
console.log(h1[0].innerHTML)


// Méthode 1
const li = document.querySelector('li')
console.log(li.innerHTML)

// Méthode 2
const li2 = document.getSelection('li')
console.log(li.innerHTML)

// Méthode 3
const li3 = document.querySelector('ul')
console.log(li3.firstElementChild.innerHTML)


// LastElementChild

const lastChild = document.querySelector('ul')
console.log(lastChild.lastElementChild.innerHTML)

// ThirdElementChild
console.log(lastChild.children[2].innerHTML)

// Parent ul
console.log(li3.parentNode)

//Parent 4e li
console.log(lastChild.parentNode.innerHTML)

// Mouseover

const colour = document.getElementById('menu')

colour.addEventListener('mouseover', function handleMouseOver() {
    colour.style.color= 'red'
})

colour.addEventListener('mouseout', function handleMouseOut() {
    colour.style.color= 'black'
})