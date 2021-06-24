const originalArray = ["string 1", "string 2", "string 3", "string 4", "string 5", "string 6", "string 7", "string 8", "string 9"];
const filterArray = ["string 1", "string 4"];
const resultArray = [];

// for (let string of originalArray) {
//     for (let filter of filterArray) {
//         console.log(string, filter)
//         if (string != filter) {
//             console.log("in if")
//             resultArray.push(string);
//            // {break}
//         }
//         //{break}
//     }

//     console.log(resultArray)
// }

for (let string of originalArray) {
    for (let filter of filterArray) {
        console.log(string, filter)
        if (string === filter) {
            console.log("in if")
           
            {break}
        } else {
            resultArray.push(string);
        }
        //{break}
    }

    console.log(resultArray)
}

