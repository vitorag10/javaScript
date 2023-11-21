let num = [5,8,2,9,3]

num.push(1)//o push acrescenta 
num.sort()//põem os números em ordem crescente
console.log(num)
console.log(`O vetor tem ${num.length} posições`)//o length mostra qunatas posições tem.
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(1)// o indexOf serve para encontrar o número
if(pos == -1){
    console.log(`Valor não encontrado`)
}else{
    console.log(`O valor 8 está na posição ${pos}`)
}
