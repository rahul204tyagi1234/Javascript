//.....Create a function that filter out negative numbers...............
let ar = [-40, -60, 80, 50, 20, 30];
let Filter =[]//store the new value.........
//....loop will be  start from 0 and index is less than array of length......... 
for (var index = 0;index<ar.length;index++){
    //.....if check the condition array of index is less then 0......
    if(ar[index]<0){
        //...Add the negative value in the new array.........
        Filter.push(ar[index])
    }
}

console.log(Filter);//find the final result..........