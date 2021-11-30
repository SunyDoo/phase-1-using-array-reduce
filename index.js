const batteryBatches = [4, 5, 3, 4, 4, 6, 5];


// const totalBatteries = batteryBatches.reduce((num, a) => num + a, 0)

// // const totalBatteries = batteryBatches.reduce(add,0); 

// // function add(previous, current) {
// //     return previous + current;
// // }

const reducer = (accumulator, item)=>{
    return accumulator + item
}
const totalBatteries = batteryBatches.reduce(reducer,0)