// Տրված են  a և b բնական թվերը: Արտածել YES եթե՝

// 1Երկուսն էլ կենտ են
// function Num(a, b){
//     if ( a % 2 !== 0 && b % 2 !== 0)
//         console.log("YES");
//     else{
//         console.log("NO");
//     }
// }
//    Num(11, 19);

//2․ Գոնե մեկը կենտ է

// function Num(a, b) {
//     if( a % 2 !== 0 && b % 2 === 0){
//         console.log("YES");
//     }
//     else{
//         console.log("NO");
//     }
    
// }

// Num(15, 16)

//3․ Ճիշտ մեկը կենտ է

// function Num(a, b) {
//     if( (a % 2 !== 0 && b % 2 === 0) || ( a % 2 === 0 && b % 2 !== 0)){
//         console.log("YES");
//     }
//     else{
//         console.log("NO");
//     }
    
// }
// Num( 8, 13)

//4․ Երկուսն էլ կենտ են կամ զույգ

// function Num(a, b) {
//     if( ( a % 2 !== 0 && b % 2 !== 0) || (a % 2 === 0 && b % 2 === 0)){
//         console.log("YES");}
//         else{
//             console.log("NO");
//         }
//     }
// Num(6, 14)


// Տրված են a b c ամբողջ թվերը։ Արտածել YES եթե՝
// 1․ Դրանցից գոնե մեկը 0 է։

// function Num(a, b , c) {
//     if ( a === 0 || b === 0 || c === 0){
//         console.log("YES");
//     }
//     else{
//         console.log("NO");
//     }
    
// }
// Num(3,2,0)

//2․ Ճիշտ 1-ը 5 է

// function Num(a, b, c) {
//     if(( a === 5 && b !== 5 && c !== 5) || ( a !== 5 && b === 5 && c !== 5) || ( a !== 5 && b !== 5 && c === 5)){
//         console.log("YES");}
//         else{
//             console.log("NO");
//         }
//     }
    
// Num( 12, 5, 9)

//3․ Ոչ մեկը մյուսներին հավասար չէ


// function Num(a , b, c) {
//     if(a !== b && b !== c && a !== c){
//         console.log("YES");
//     }
//     else{
//         console.log("NO");
//     }
    
// }

// Num( 12,9,23)

//4․ Ճիշտ երկուսն են հավասար

// function Num(a, b, c) {
//     if((a === b && a !== c) || ( a === c && a !== b) || ( b === c && b !== a)){
//         console.log("YES");
//     }
//     else{
//         console.log("NO");
//     }
    
// }
// Num( 2, 3, 3)

//5․ Բոլոր 3-ն իրար հավասար են

// function Numbers(a, b, c) {
//     if( a === b && a === c && b === c){
//         console.log("YES");
//     }
//     else{
//         console.log("NO");
//     }
    
// }
// Num(3, 3, 3)

//6․ Գոնե մեկը բացասական է

// function Num(a, b, c) {
//     if(a < 0 || b < 0 || c < 0){
//         console.log("YES");
//     }
//     else{
//         console.log("NO");
//     }
    
// }
// Num(5,-2,7)
