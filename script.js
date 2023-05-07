//

// let person = {
//     name: 'John',
//     surname: 'Doe',
//     fullname: function(){
//         console.log(`${this.name} ${this.surname}`)
//     }
// }

// console.log(person.fullname());

// let lifeForm = {
//     breath:'yes'
// }

// let animal = {
//     eats:'yes'
// }

// animal.__proto__ = lifeForm;

// let fox = {
//     swims:false,
// }

// fox.__proto__ = animal;

// let fish = Object.create(fox);

// function lifeForm(breath){
//     this.breath = breath;
// }

// let fish = new lifeForm(true);


// console.log(fish);


// function Person(name,surname,email){
//     this.name = name,
//     this.surname = surname,
//     this.email = email
// }

// Person.prototype.fullname = function(){
//     console.log(this.name + " " + this.surname);
// }

// Person.prototype.a = 'a1';

// let kenan = new Person('Kenan', 'Aliyev','k@k.com');

// console.log(kenan.fullname());

// let animal = {};
// animal.name = 'Leo';
// animal.energy = 10;

// animal.eat = function (amount) {
//   console.log(`${this.name} is eating.`)
//   this.energy += amount
// }

// animal.sleep = function (length) {
//   console.log(`${this.name} is sleeping.`)
//   this.energy += length
// }

// animal.play = function (length) {
//   console.log(`${this.name} is playing.`)
//   this.energy -= length
// }

// console.log(animal.play(2));
// console.log(animal);
// console.log(animal.sleep(3));
// console.log(animal);
// console.log(animal.eat(3));
// console.log(animal);

// let person = {surname:'Aliyeva'};

// let obj = Object.create(person);
// let arr = [];

// arr[0] = 1;
// arr[1] = false;

// obj.name = 'Sara';
// obj.isStudent = true;
// obj.hasPet = false;

// let newObj = Object.create(obj);

// console.log(newObj.hasOwnProperty('surname'));

// console.log(newObj.surname);

// String.prototype.something = function(){
//     return 'good'
// }

// let b = 'random string';

// console.log(b.something());


// function Animal (name, energy) {
//     let animal = {name: name, energy: energy};

//     animal.eat = function (amount) {
//       console.log(`${this.name} is eating.`)
//       this.energy += amount
//     }

//     animal.sleep = function (length) {
//       console.log(`${this.name} is sleeping.`)
//       this.energy += length
//     }

//     animal.play = function (length) {
//       console.log(`${this.name} is playing.`)
//       this.energy -= length
//     }

//     return animal
//   }

//   console.log(Animal('leo', 9));
//   console.log(Animal('snake', 9));

//   const leo = Animal('Leo', 7);
//   const snoop = Animal('Snoop', 10);

//   console.log(leo);
//   console.log(leo.play(7));
//   console.log(leo);

// const animalMethods = {
//     eat(amount) {
//       console.log(`${this.name} is eating.`)
//       this.energy += amount
//     },
//     sleep(length) {
//       console.log(`${this.name} is sleeping.`)
//       this.energy += length
//     },
//     play(length) {
//       console.log(`${this.name} is playing.`)
//       this.energy -= length
//     }
//   }

//   function Animal (name, energy) {
//     let animal = Object.create(Animal.prototype);
//     animal.name = name;
//     animal.energy = energy;
//     return animal
//   }

//   Animal.prototype.eat = function(amount){
//     console.log(`${this.name} is eating.`)
//     this.energy += amount
//   }

//   Animal.prototype.sleep = function(amount){
//     console.log(`${this.name} is sleeping.`)
//     this.energy += amount
//   }

//   Animal.prototype.play = function(amount){
//     console.log(`${this.name} is playing.`)
//     this.energy -= amount
//   }

//   let leo = Animal('leo', 9);

//   console.log(leo);


// function Animal(name,energy){
//     this.name = name;
//     this.energy = energy;
// }

//   Animal.prototype.eat = function(amount){
//     console.log(`${this.name} is eating.`)
//     this.energy += amount
//   }

//   Animal.prototype.sleep = function(amount){
//     console.log(`${this.name} is sleeping.`)
//     this.energy += amount
//   }

//   Animal.prototype.play = function(amount){
//     console.log(`${this.name} is playing.`)
//     this.energy -= amount
//   }

// let leo = new Animal('leo', 10);

// console.log(leo.eat(8));
// console.log(leo);


// class Animal {

//     constructor(name, energy) {
//         this.name = name;
//         this.energy = energy;
//     }

//     eat(amount) {
//         console.log(`${this.name} is eating.`)
//         this.energy += amount
//     }

//     sleep(amount) {
//         console.log(`${this.name} is sleeping.`)
//         this.energy += amount
//     }

//     play(amount) {
//         console.log(`${this.name} is playing.`)
//         this.energy -= amount
//     }

//     static nextToEat (animals) {
//         const sortedByLeastEnergy = animals.sort((a,b) => {
//           return a.energy - b.energy
//         })
      
//         return sortedByLeastEnergy[0].name
//     }

// }

// let leo = new Animal('leo', 10);
// let snake = new Animal('snake', 8);

// function logAllProperties(obj) {
//     if (obj == null) return;
//     console.log(Object.getOwnPropertyNames(obj));
//     logAllProperties(Object.getPrototypeOf(obj));
// }
// logAllProperties(my_object);


// const prototype = Object.getPrototypeOf(leo);

// const innerProto = Object.getPrototypeOf(prototype);

// console.log(innerProto);


// for(let key in leo) {
//       console.log(`Key: ${key}. Value: ${leo[key]}`)
// }

// console.log(leo);
// console.log(Animal.nextToEat([leo,snake]));
// console.log(snake.play(4));
// console.log(snake);

// let obj = {name: 'John'};
// let obj2 = {surname: 'Doe'};

// console.log(obj.hasOwnProperty('surname'));

// let b = {...obj, ...obj2};

// let someString = 'Baku city';

// console.log(someString);

// 2. Playlist classi hazirlayin. Mahnin adi, artistin adi, mahninin muddeti olsun.
//      a.  Mahni oxuyur methodu olsun
//      b. Mahni dayandi methodu olsun
//      c. En uzun mahnini tapmaq ucun static method olsun.


//==========================================================================================

let product = {
    name : 'name',
   count : 10,
    year:'2022' ,
    description : 'helo'
}

class Product {
    constructor(name,count,year,description){
        this.name = name;
        this.count = count;
        this.year = year;
        this.description = description;
    }
}


class UiMethods {

    static addProduct({name, count, year, description}){
        const productList = document.getElementById('product_list');
        const carWrapper = document.createElement('div');
        carWrapper.setAttribute('class', 'product_card');

        const cardInner =`
            <div class="product_list_heading">
                <h5>${name}</h5>
                <span>${count}</span>
            </div>
            <p>${year}</p>
            <p>${description}</p>
            </div>
        `
        carWrapper.innerHTML = cardInner;

        productList.appendChild(carWrapper);

    }
}

//dom events
const formElem = document.getElementById('product_form');

// formElem.addEventListener('submit', (e) => {
//     const nameVal = document.getElementById('productName').value;
//     const countVal = document.getElementById('productCount').value;
//     const yearVal = document.getElementById('productYear').value;
//     const descriptionVal = document.getElementById('productDesc').value;

//     let product = new Product(nameVal,countVal,yearVal,descriptionVal);

//     UiMethods.addProduct(product);

//     e.preventDefault();

// });

// function onSubmit(e){
//     const nameVal = document.getElementById('productName').value;
//     const countVal = document.getElementById('productCount').value;
//     const yearVal = document.getElementById('productYear').value;
//     const descriptionVal = document.getElementById('productDesc').value;

//     let product = new Product(nameVal,countVal,yearVal,descriptionVal);

//     UiMethods.addProduct(product);

//     // console.log(e);
//     e.preventDefault();
// }

// function greetings(){
//     alert('Hello');
// }


// const Products = [
//     {
//         id: 1,
//         name: 'Samsung',
//         description: 'Phone',
//         price: '400',
//         count: 10,
//         color: 'black'
//     },
//     {
//         id: 2,
//         name: 'IPhone',
//         description: ' new Phone',
//         price: '700',
//         count: 20,
//         color: 'violet'
//     },
//     {
//         id: 3,
//         name: 'Samsung',
//         description: 'Phone',
//         price: '400',
//         count: 10,
//         color: 'black'
//     },
//     {
//         id: 4,
//         name: 'Samsung',
//         description: 'Phone',
//         price: '400',
//         count: 10,
//         color: 'black'
//     },
//     {
//         id: 5,
//         name: 'Samsung',
//         description: 'Phone',
//         price: '400',
//         count: 10,
//         color: 'black'
//     },
//     {
//         id: 6,
//         name: 'Samsung',
//         description: 'Phone',
//         price: '400',
//         count: 10,
//         color: 'black'
//     },
//     {
//         id: 7,
//         name: 'Samsung',
//         description: 'Phone',
//         price: '400',
//         count: 10,
//         color: 'black'
//     },
//     {
//         id: 8,
//         name: 'Samsung',
//         description: 'Phone',
//         price: '400',
//         count: 10,
//         color: 'black'
//     },
//     {
//         id: 9,
//         name: 'Samsung',
//         description: 'Phone',
//         price: '400',
//         count: 10,
//         color: 'black'
//     },
//     {
//         id: 10,
//         name: 'Samsung',
//         description: 'Phone',
//         price: '400',
//         count: 10,
//         color: 'black'
//     }
// ];

// const wrapper = document.getElementsByClassName('product_wrapper');

// function handleDisplayProduct(products){
//     for (let index = 0; index < products.length; index++) {

//         let element = document.createElement('div');

//         element.setAttribute('class', 'product_card');

//         const innerCard = `
//                     <div class="product_list_heading">
//                         <h5>${products[index].name}</h5>
//                         <span>${products[index].count}</span>
//                     </div>
//                     <p>${products[index].color}</p>
//                     <p>${products[index].description}</p>`

//         element.innerHTML = innerCard;

//         wrapper[0].appendChild(element);
//     }
// }

// handleDisplayProduct(Products);



// function dragStart(event) {
//     event.dataTransfer.setData("Text", event.target.id);

//     console.log(event.dataTransfer);

// }
  
//   function dragging(event) {
//     document.getElementById("demo").innerHTML = "The p element is being dragged";
//   }
  
//   function allowDrop(event) {
//     event.preventDefault();
//   }
  
//   function drop(event) {
//     event.preventDefault();
//     const data = event.dataTransfer.getData("Text");
//     event.target.appendChild(document.getElementById(data));
//     document.getElementById("demo").innerHTML = "The p element was dropped";
//   }


