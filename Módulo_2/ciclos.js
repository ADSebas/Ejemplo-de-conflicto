//ciclos - while

var contadorn1 = 5;
var contadorn2 = 30;
while( contadorn1 < 10 && contadorn2 > 20){
console.log("Contador N1 = " + contadorn1 + " Contador N2 = " + contadorn2)
contadorn1++;
contadorn2--;
};

var contadorn3 = 0;
var condicion = "hola";
//ciclos do-while
do{
    console.log("Entraste al ciclo do while");
    contadorn3++;
    if(contadorn3 == 2){
        condicion = "adios";
    }
}while(contadorn3 == 2);

var condicionn2 = 5;
do{
    console.log("Valor : " + condicionn2);
    condicionn2-= 5;
}while( condicionn2 >= 5);


//ejercicio do-while
//crear un programa que lea tantos numeros
//como se quiera hasta que se recibe un cero,
//y se mostrará un resultado, que será la
//suma de todos los números ingresados
const prompt = require ('prompt-sync')();
var recibenumero;
var suma = 0;
do{
    //recibimos un texto
    recibenumero = prompt("dame un numero a sumar : ");
    suma = suma + parseInt(recibenumero);
}while( recibenumero != 0);
console.log("la suma total es : " + suma);



//ejercicio - while
recibenumero = prompt ("Dame un número : ");
while (recibenumero != 0){
    suma = suma + parseInt(recibenumero);
    recibenumero = prompt ("Dame un número : ");
}
console.log("la suma total con while es : " + suma);