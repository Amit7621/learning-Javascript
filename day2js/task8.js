//task8.1
function amit(){
    console.log("hey Superstar");
}
amit();

//task8.2
function multiply(a,b){
    return a*b;
}
console.log(multiply(4,5));

//task8.3
function isEven(n)
{
  return(n%2==0);
}
console.log(isEven(4));

//task8.4 myway
function tocelsius(f)
{
    return (f - 32) * 5 / 9;
}
const f=212;
console.log(tocelsius(f));
//task8.4 sir's way
const toCelsius = (f) =>(f - 32) * 5 / 9;
console.log(toCelsius(212));

//task8.5
function biggest(a,b,c)
{
    if(a>b && a>c)
        return a;
    else if(b>c)
        return b;
    else
        return c;
}
console.log(biggest(3,78,92));



