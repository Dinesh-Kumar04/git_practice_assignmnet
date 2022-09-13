let num = 6;
let prime = 'Yes'
for(let i = 2; i < num; i++){
    if(num%i==0){
        prime = 'No';
    }
}
console.log(prime)