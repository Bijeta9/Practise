//control flow- order in which statements are executed under the given conditions
let priceOfBall = 1.99;
let hasAmountInCash = 1;

const canBuyBall = hasAmountInCash >= priceOfBall;
console.log(typeof canBuyBall);

if(canBuyBall){
    console.log(`Enjoy your purchase`);
    
}else{
    console.log(`sorry you are in short`);
    
}

let hour = 10;

if(hour >= 6 && hour <= 12)
    console.log(`Serving Breakfast`);
    
else if( hour> 12 && hour <=14)
    console.log(`Serving lunch`);
    
else
    console.log(console.log(`Serving dinner`)
    );

