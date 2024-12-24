// let arr = [
//     {
//         user: "Harsh",
//         city: "Bhopal",
//         wight: 76
//     },
//     {
//         user: "Varun",
//         city: "Bhopal",
//         wight: 65
//     },
//     {
//         user: "Himanshu",
//         city: "Bhopal",
//         wight: 80
//     },
//     {
//         user: "Sarthik",
//         city: "Bhopal",
//         wight: 57
//     },
//     {
//         user: "Ankur",
//         city: "Bhopal",
//         wight: 67
//     },

// ]

// function weight(){
//     let sum = 0;
//     arr.forEach((elem) => {
//         sum += elem.wight
//     });
//     console.log(sum);
//     if(sum < 500){
//         return "Not"
//     }
// };
// weight()

// Question  2

// let arr = [
//     {
//         Model: "Samsung",
//         price: 25000,
//         quantity: 47,
//     },
//     {
//         Model: "Iphone",
//         price: 70000,
//         quantity: 67,
//     },
//     {
//         Model: "Redmi",
//         price: 12000,
//         quantity: 54,
//     }
// ]

// function mobilePrice(){
//     let sum = 0;
//     arr.forEach(function(elem, inx){
//         let total = elem.price * elem.quantity
//         sum += total
//     });
//     console.log(sum)
// }
// mobilePrice()


// Question  3

// const students = [
//     { id: 1, name: "Alice", age: 20, major: "Computer Science" },
//     { id: 2, name: "Bob", age: 22, major: "Mathematics" },
//     { id: 3, name: "Charlie", age: 21, major: "Physics" },
//     { id: 4, name: "Diana", age: 23, major: "Biology" },
//     { id: 5, name: "Eve", age: 20, major: "Chemistry" },
//     { id: 6, name: "Frank", age: 24, major: "Engineering" },
//     { id: 7, name: "Grace", age: 22, major: "Mathematics" },
//     { id: 8, name: "Hank", age: 21, major: "Computer Science" },
//     { id: 9, name: "Ivy", age: 23, major: "Biology" },
//     { id: 10, name: "Jack", age: 20, major: "Physics" }
// ];

// function studentsData() {
//     let total = students.length
//     console.log(total)
    
//     students.forEach(function(elem){
//         if(elem.major === "Mathematics"){
//         console.log(elem.name)
//         }
//     })

//     let student23 = students.some(students => students.age > 23);
//     console.log(student23)

//     let sortByAge = students.sort((a,b) => a.age - b.age)
//     console.log(sortByAge)

//     let namesByAge = students.forEach(function(elem){
//         if(elem.age < 22){
//             console.log(elem.name)
//         }
//     })
// }
// studentsData();


// Question 04 

let users = [
    {
        naam: "Harsh",
        age: 35,
        city: "Bangalore"
    },
    {
        naam: "Anmol",
        age: 18,
        city: "Sehor"
    },
    {
        naam: "Khushi",
        age: 24,
        city: "Narmadapurm"
    },
]
function creatElemnt(){
    
let sum = ""
users.forEach(function(elem){
    sum += `<div class="card" id="card">
                    <h1>${elem.naam}</h1>
                    <h2>${elem.age}, ${elem.city}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                </div>`
})

let content = document.querySelector('.home-content')
content.innerHTML = sum
}
creatElemnt()



