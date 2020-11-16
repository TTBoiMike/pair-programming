function checkCells(n) {
    if(n < 2 || n > 3) {
        return false;
    } else if (n === 2 || n === 3) {
        return true;
    }
}


// function checkCells(state, n) {
//     if (state === 'live') {
//         if(n < 2 || n > 3) {
//             return false;
//         } else if (n === 2 || n === 3) {
//             return true;
//         }
//     } else if (state === 'dead') {
//         if(n === 3) {
//             return true;
//         } else {
//             return false;
//         }
//     }
// }

export{checkCells};