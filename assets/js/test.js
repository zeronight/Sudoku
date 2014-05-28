// var arr = [], i;
// for(i=1; i<50; i++){
//     arr.push(getRandomNumber(1, 9));
// }

// console.log(arr);

// for(i=1; i<10; i++){
//     console.log(getRandomNumbers(4, 9, 5));
// }

// var testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for(i=1; i<10; i++){
//     console.log(getRandomArray(testArr));
// }

// var testMatrix = [[9, 7, 6, 4, 5, 1, 8, 3, 2],
//                   [1, 3, 4, 8, 2, 6, 5, 9, 7],
//                   [5, 8 ,2, 9, 7, 3, 4, 1, 6],
//                   [4, 5, 6, 1, 2, 3, 7, 8, 9],
//                   [7, 8, 9, 4, 5, 6, 7, 8, 9],
//                   [1, 2, 3, 7, 8, 9, 7, 8, 9],
//                   [7, 8, 3, 4, 5, 6, 7, 8, 9],
//                   [8, 9, 3, 4, 5, 6, 7, 8, 9],
//                   [9, 1, 3, 4, 5, 6, 7, 8, 9]];

// console.log(Sudoku.prototype.validate(testMatrix));

// var matrix = Sudoku.prototype.generate();
// var arr = [];
// for(var i=0; i<9; i++){
//     arr.push([]);
// }

// for(var i=0; i<matrix.length; i++){
//     for(var j=0; j<matrix[i].length; j++){
//         arr[i][j] = matrix[i][j].value;
//     }
// }

// for(var i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// console.log(Sudoku.prototype.validate(arr));

//测试Random.getRandomNumber
// for(var i=0; i<50; i++){
//     console.log(Random.getRandomNumber(1, 9));
// }

//测试Random.getRandomNumbers
// for(var i=0; i<50; i++){
//     console.log(Random.getRandomNumbers(1, 9, 5));
// }

//测试Random.getRandomArray
// for(var i=0; i<50; i++){
//     console.log(Random.getRandomArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// }

//测试从一个数组中去除另一个数组中的所有元素
// var arr=[1, 2, 3, 4, 5, 6, 6, 7, 5, 4, 3, 2, 1, 8, 9];
// arr.substract([1, 2, 3, 4, 5]);
// console.log(arr);

//测试从一个数组中去加上一个数组中自己所没有包含的元素
// var arr=[1, 2, 3, 4, 5];
// arr.add([6, 6, 7, 8, 7]);
// console.log(arr);

// var sudoku = new Sudoku();

// // console.log(sudoku.getRowDigits(1));
// // console.log(sudoku.getColDigits(4));
// // console.log(sudoku.getSubMatrixDigits(1));
// // for(var i=0; i<81; i++){
// //     console.log(i + ": " + sudoku.getCellAvailsList(i));
// // }
// sudoku.initialize();
// console.log("初始的数独：");
// sudoku.showMatrix();

// sudoku.generate(43);
// console.log("生成的数独：");
// sudoku.showMatrix();

// console.log("空格的元素：");
// console.log(sudoku.getUnkownElements());

// console.log("解决数独：");
// var matrix = sudoku.slove(sudoku.matrix);

// for(var i=0; i<9; i++){
//     console.log(matrix.slice(i*9, (i+1)*9));
// }


