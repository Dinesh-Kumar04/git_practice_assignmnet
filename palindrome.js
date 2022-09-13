let str = 'madam';
let reverse = '';
for(let i = str.length-1; i >= 0; i--){
    reverse = reverse + i
}
if(str===reverse){
    console.log('Yes')
}else{
    console.log('No')
}