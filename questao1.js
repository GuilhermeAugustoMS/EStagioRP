
let numeroExiste = 6765;
let quantidadeDeNumero = 50;
let t1 = 0;
let t2 = 1;
let pt = 0; 

for (let i = 2; i <= quantidadeDeNumero; i++){
console.log(pt);
pt = t1+t2;
t1 = t2;
t2 = pt;
if (numeroExiste == pt) {
   console.log("O número está na sequencia de fibonacci."); 
} 

}
