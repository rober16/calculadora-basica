function fx_Calcular()
{
var result;
var valor1;
var valor2;
var nombre1;
var nombre2;
var nombre_op;
var valor_op;
var tipo_op;
valor1=document.calculadora.input1.value;
valor2=document.calculadora.input2.value;
nombre1=document.calculadora.input1.name;
nombre2=document.calculadora.input2.name;
valor_op=document.calculadora.op.value;

switch(valor_op)
{
	case "s":
		result= parseInt(valor1) + parseInt(valor2);
		tipo_op= "+"
		break;
	case "r":
		result= valor1 - valor2;
		tipo_op= "-"
		break;
	case "m":
		result= valor1 * valor2;
		tipo_op= "*"
		break;
	case "d":
		result= valor1 / valor2;
		tipo_op= "/"
		break;
}

var Operacion = "Operación " + valor1 + tipo_op + valor2 + "=" + result;
document.getElementById('oper').value=Operacion; 
}