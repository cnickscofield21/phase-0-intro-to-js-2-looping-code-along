// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i += 1) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }

    return gifts;
}

const names = ["Charlie", "Samip", "Ali"];
const occasion = "birthday";

function writeCards(names, occasion) {
    const thankYous = [];

    for (let i = 0; i < names.length; i += 1) {
        thankYous.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`);
    }

    return thankYous;
}

function countDown(posInt = 10) {
    /*// while version
    while (posInt > -1) {
        console.log(posInt);
        posInt -= 1;
    }
    */

    // for version
    for (posInt; posInt > -1; posInt -= 1) {
        console.log(posInt);
    }
}

countDown();