var ult = 0;
var par = 0;        //contador de parenteses abertos
var aux = "";       //acomula o histórico das operaçoes de forma a usar o eval
var aux1 = "";      //acomula as operaçoes dentro de um parenteses   tem de ser mudado para array
var aux2 = "";      //acomula o valor que ainda não foi adcionado ao ecra de cima
var pont = 0;       //contardor de pontos
function insert(num) {
    
    switch (num) {
        case '*':
            if (ult == 0) {
                document.getElementById("visorcima").innerHTML += aux2 + '&times;';
                aux2 = transf(aux2);
                aux += aux2;
                if (par > 1) {
                    aux1 += num;
                }
                ult = 1;
                aux += num;
                aux2 = "";
                pont = 0;
            } else {
                aux = aux.substr(0, aux.length - 1) + num;
                var x = document.getElementById("visorcima").innerHTML;
                document.getElementById("visorcima").innerHTML = x.substr(0, aux.length - 1) + '&times;';
            }
            break;


        case '/':
            if (ult == 0) {
                document.getElementById("visorcima").innerHTML += aux2 + '&divide;';
                aux2 = transf(aux2);
                aux += aux2;
                if (par > 1) {
                    aux1 += num;
                }
                ult = 1;
                aux += num;
                aux2 = "";
                pont = 0;
            } else {
                aux = aux.substr(0, aux.length - 1) + num;
                var x = document.getElementById("visorcima").innerHTML;
                document.getElementById("visorcima").innerHTML = x.substr(0, aux.length - 1) + '&divide;';
            }
            break;

        case '+':
            if (ult == 0) {
                document.getElementById("visorcima").innerHTML += aux2 + '&plus;';
                aux2 = transf(aux2);
                aux += aux2;
                if (par < 1) {
                    
                    document.getElementById("visorbaixo").innerHTML = eval(aux);
                } else {

                    document.getElementById("visorbaixo").innerHTML = eval(aux1);
                    aux1 += num;

                }
                ult = 1;
                aux += num;
                aux2 = "";
                pont = 0;
            } else {
                aux = aux.substr(0, aux.length - 1) + num;
                var x = document.getElementById("visorcima").innerHTML;
                document.getElementById("visorcima").innerHTML = x.substr(0, aux.length - 1) + '&plus;';
            }
           break;

        case '-':

            if (ult == 0) {
                
                document.getElementById("visorcima").innerHTML += aux2 + '&minus;';
                aux2 = transf(aux2);
                aux += aux2;
                if (par < 1) {
                   
                    document.getElementById("visorbaixo").innerHTML = eval(aux);
                } else {

                    document.getElementById("visorbaixo").innerHTML = eval(aux1);
                    aux1 += num;
                }

                ult = 1;
                aux += num;
                aux2 = "";
                pont = 0;
            } else {
                aux = aux.substr(0, aux.length - 1) + num;
                var x = document.getElementById("visorcima").innerHTML;
                document.getElementById("visorcima").innerHTML = x.substr(0, aux.length - 1) + '&minus;';
            }
            break;

        case '(':
            document.getElementById("visorcima").innerHTML += num;
            document.getElementById('visorbaixo').innerHTML = "";
            par += 1;
            aux += num;
            aux1 = "";
            break;

        case ')':
            aux2 += num;
            aux += aux2;
            
            document.getElementById("visorcima").innerHTML += aux2 ;

            par -= 1;
            if (par > 0) {
                document.getElementById("visorbaixo").innerHTML = eval(aux1);
            }else{
                    document.getElementById("visorbaixo").innerHTML = eval(aux);
                }
            aux1 = "";
            aux2 = "";
            break;

        default:
            if (num == '.' && pont == 1) {
            } else {
                if (num == '.') { pont = 1;}
                aux2 += num;

                if (par < 1) {
                    if (ult < 1) {

                        document.getElementById("visorbaixo").innerHTML += num;
                    } else {
                        document.getElementById("visorbaixo").innerHTML = num;
                    }
                } else {
                    aux1 += num;
                    if (ult < 1) {
                        document.getElementById("visorbaixo").innerHTML += num;
                    } else {
                        document.getElementById("visorbaixo").innerHTML = num;
                    }
                }

                ult = 0;
            }
    }
   
}


function equal() {
 

    if (aux) {
        aux2 = transf(aux2);
        val = Math.round(eval(aux + aux2) * 100) / 100;
        document.getElementById("visorcima").innerHTML += aux2 + ' = ' + val;
        document.getElementById("visorbaixo").innerHTML = val;
        aux += aux2;
        aux2 = "";
    }
 
}

function c() {
    document.getElementById("visorbaixo").innerHTML = "";
    document.getElementById("visorcima").innerHTML = "";
    ult = 0;
    aux = "";
    aux1 = "";
    aux2 = "";
    pont = 0;

}

function percent() {

    if (aux2) {
        val = aux2 / 100;
    }
    
    document.getElementById("visorbaixo").innerHTML = val;
    document.getElementById("visorcima").innerHTML += aux2 + '&percnt;';

    aux2 = "";
    aux += val;
}

function raiz() {

    if (aux2) {
        val = Math.sqrt(aux2);
    }

    document.getElementById("visorbaixo").innerHTML = val;
    document.getElementById("visorcima").innerHTML += '&radic;' + '(' + aux2 + ')';
    aux2 = "";
    aux += val;
 
}


function log() {
 
    if (aux2) {
        val = Math.log10(aux2);
 
    }
    document.getElementById("visorbaixo").innerHTML = val;
    document.getElementById("visorcima").innerHTML += 'log(' + aux2 + ')';
    aux += val;
    aux2 = "";
    
    
}

function pow() {
    if (aux2) {
        val = Math.pow(aux2,2);
    }
    document.getElementById("visorbaixo").innerHTML = val;
    document.getElementById("visorcima").innerHTML += aux2 + '^' + 2;
    aux += val;
    aux2 = "";

}

function back() {
    if (aux2) {
        if (aux2[aux2.length - 1] == '.') {
            pont = 0;
        }
        aux2 = aux2.substr(0, aux2.length - 1);
        document.getElementById("visorbaixo").innerHTML = aux2;
    }
}


function transf(val) {

        while (val[0] == 0) {
            val = val.substr(1, val.length);
        }

    return val;
}



