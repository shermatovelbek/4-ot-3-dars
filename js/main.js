    // bu misol emas !
    // let a = 55;
    // let b = 66;
    // let res;

    // a = (a % 10) - a % 10 / 10;
    // b = ( b % 10) - b % 10 / 10;

    // if (a > b){
    //     res = a;
    // } else{
    //     res = b;
    // }
    // console.log(res);



    //2-misol

    // let a = 123;
    // let max ;
    // let b = a % 10;
    // let o = a % 100;


    //1-misol

    // let a = 90;
    // let b = 99;
    // let res;
    // let count;
    // res = (a % 100) - a % 10 / 10;
    // count = (b % 100) - b % 10 / 10;
    // if (a > b){
    // res = a;
    // } else {
    //  count = b
    // }
    // console.log(count);



    //2-misol

     let a = 190;
     let max;
    let b = a % 10;
    let o = (a % 100) - o / 10;
    let y = (a / 100) - (a % 100) / 100 ;

    if(b > o){
        max = b;
    } else{
        max = o;
    }
    if (max < y){
        max = y;
    }
    console.log(max);
