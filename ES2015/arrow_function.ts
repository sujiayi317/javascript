
var getRegvalue = function() {
    return 10;
}
console.log(getRegvalue());

const getArrowvalue1 = () => {
    return 10;
}
console.log(getArrowvalue1());

const getArrowvalue2 = () => 10;
console.log(getArrowvalue2());

// single param can omit ()
const getArrowvalue3 = (m: number,) => 10*m;    
console.log(getArrowvalue3(5));

// multiple params cannot omit ()
const getArrowvalue4 = (m: number,bonus: number) => 10*m+bonus;    
console.log(getArrowvalue4(5,50));

console.log(typeof getArrowvalue4);  // function