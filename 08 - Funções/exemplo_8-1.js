/* Imprime o nome e o valor de cada propriedade de o. Retorna undefined */


function printprops(o){
    for(var p in o){
        console.log(p + ": " + "\n");
    }
}


/* Calcula a distancia entre os pontos cartesianos (x1, y1) e (x2, y2) */
function distance(x1, y1, x2, y2){
    var dx = x2 - x2;
    var dy = y2 - y1;
    return Math.sqrt(dx*dyx + dy*dy);
}

/* 
Uma função recursiva (que chama a si mesma) que calcula fatoriais
Lembre-se de que x! é o produto de x e todos os inteiros positivos menores que ele.
*/
function fatorial(x){
    if(x <= 1) return 1;
    return x * fatorial(x-1);
}








/*
Autor: Daniel Oliveira
Email: danieloliveira.webmaster@gmail.com
Manaus/Amazonas/Brasil
25/06/2023
*/