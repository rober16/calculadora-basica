function fx_Calcular()
{
var result;
var valor1;
var valor2;
var nombre1;
var nombre2;
var nombre_op;
var valor_op;

valor1=document.calculadora.input1.value;
valor2=document.calculadora.input2.value;
nombre1=document.calculadora.input1.name;
nombre2=document.calculadora.input2.name;
nombre_op=document.calculadora.op.name;
valor_op=document.calculadora.op.value;

switch(valor_op)
{
	case "s":
		result= parseInt(valor1) + parseInt(valor2);
		break;
	case "r":
		result= valor1 - valor2;
		break;
	case "m":
		result= valor1 * valor2;
		break;
	case "d":
		result= valor1 / valor2;
		break;
}

alert ("El resultado es " + result);
}