// Exo 1
// let prenoms = ["Ajanae", "Ceymone", "Timone", "Deandre", "Brandon", "Darius", "Mojo", "Kamau", "Mona"]
// let i = 0
// while (i < 9) {
//     console.log(`Bonjour ${prenoms[i]}`);
//     i++
// }

// Exo 2 
// let fruits = ["mangoustane", "mamonchino", "carambole", "naranja", "maracuya"]
// console.log(fruits);
// // while (fruits.length > 0) {
// //     fruits.splice(0)
// // }
// // console.log(fruits);
// do {
//     let i = 0
//     fruits.splice(i,1)
//     console.log(fruits);
//     i--
// } while (fruits.length>0);


// // Exo 3
// let panierLegumes = ["patate douce", "aubergine", "frisée", "courgette", "concombre"]
// let long = panierLegumes.length
// let caisseLegumes = []
// do {
//     let i = 0
//     panierLegumes.splice(i,1)
//     i++
// } while (long > 0);

// Exo 4
// let enigme = prompt("What's 9 + 10 ?")
// while (enigme !== "21") {
//     enigme = prompt("Faux ! What's 9 + 10 ?")
// }
// alert("Vrai")

// Exo 5
// let enigme = prompt("What's 9 + 10 ?")
// do {
//     enigme = prompt("Faux ! What's 9 + 10 ?")
// } while (enigme !== "21");
// alert("Vrai")

// Exo 6
// let an = 2021
// let randAn = Math.floor(Math.random()*(2021-1970)+1970)
// console.log(randAn);
// let quest = prompt(`Si je suis née en ${randAn}, quel age ai-je aujourd’hui ?`)
// let i = 0

// if (quest == an-randAn) {
//     alert('Bien vu')
// }
// else if (quest !== an-randAn) {
//     do {
//         quest2 = prompt('Réessaye')
//         i++
//         if (quest2 == an-randAn) {
//             alert('Bien vu')
//         }
//     } while (i < 3);
// }

// Exo 7 
let panier = []
let i = 0
do {
    panier.push(prompt('Ajouter un fruit').toUpperCase(0))
    i++
} while (i < 8);
alert(`Voici les fruits que vous avez dans votre panier : ${panier}`);