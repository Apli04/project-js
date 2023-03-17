// loop for

// for (let i = 0; i < 5; i++) {
//     console.log(`Iterasi ke ${i}`);
// }

// do while

let i = 0;

do {
    console.log(i);
    i--;
} while (1 < 5);

//while 

// let i = 0;

// while (i < 5) {
//     console.log(i);
//     i++;
// }

// break

for (let i = 0; i < 5; i++) {
    console.log(i);

    if (i == 2) {
        break;
    }
}

// continue

for (let i = 0; i < 5; i++) {
    if (i == 3) {
        continue;
    }
    console.log(i);
}