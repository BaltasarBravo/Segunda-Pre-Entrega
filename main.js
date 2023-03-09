const semana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo" ]

const comidaEnergetica = ["Frutos Secos", "Avena", "Palta", "Chocolate", "Huevo", "Ensalada", "Salmon", "Menta", "Frutas", "Semillas"]

const comidaHierro = ["Legumbres secas", "Cereales fortificados", "Higado", "Carne de res", "Atun","Frutas deshidratadas", "Granos enteros"]

const comidaProteica = ["Mantequilla de Mani", "Pavo", "Yogurt griego", "Langostinos", "Pollo", "Queso crema", "Merluza", "Soja", "Tofu", "Pistachos"]

    

const dietas = {};


class Fusion{
    constructor(dia,comidas){
 this.dia = dia;
 this.comidas = comidas;
            
    }
    
    asignarEnergia(){
        for(let i = 0; i < semana.length; i++){
                     dietas[semana[i]] = comidaEnergetica[i];
                 }
                
                  return dietas
    }

    asignarHierro(){
        for(let i = 0; i < semana.length; i++){
                     dietas[semana[i]] = comidaHierro[i];
                 }
                
                 return dietas
    }

    asignarProteina(){
        for(let i = 0; i < semana.length; i++){
                     dietas[semana[i]] = comidaProteica[i];
                 }
                
                 return dietas
    }
}

alert("Hola soy una app que te asignara la dieta que elijas por cada dia de la semana. Elige la que mas te guste!!!")

function opciones(){
let entrada = parseFloat(prompt("Elija alguna dieta:" + "\n" + "\n" + "1- Dieta para obtener energia" + "\n" + "2- Dieta para obtener hierro" + "\n" + "3- Dieta para obtener proteinas"  + "\n" + "\n" + "Si desea finalizar la interacción ingrese 0"))
while(entrada != "ESC"){
    if (entrada === 1) {
        const dietaCansados = new Fusion(semana,comidaEnergetica);
         dietaEnergia = [(dietaCansados.asignarEnergia())];
         console.log(dietaEnergia);
         alert("Ha seleccionado una dieta de alimentos rica en propiedades energeticas. Ahora debera seleccionar cualquier dia de la semana para conocer que incluir en su alimentación")
                 dietaEnergia.forEach(iterar => {
                  let elegirDia = prompt("Ingrese un dia de la semana para conocer que alimento incluir en su comida");
                 while (elegirDia != "ESC") {
                  switch (elegirDia) {
                    case "lunes":
                        alert(iterar.Lunes);
                        break;
            
                        case "martes":
                        alert(iterar.Martes);
                        break;
            
                        case "miercoles":
                        alert(iterar.Miercoles);
                        break;
            
                        case "jueves":
                        alert(iterar.Jueves);
                        break;
            
                        case "viernes":
                        alert(iterar.Viernes);
                        break;
            
                        case "sabado":
                        alert(iterar.Sabado);
                        break;
            
                        case "domingo":
                        alert(iterar.Domingo);
                        break;

                        case "semana":
                         alert(JSON.stringify(dietaEnergia));    

                        case "0":
                        opciones()
                        return;

                     default: ""
                     alert("Ingrese un dia de la semana")
                        break;
                  }
                  elegirDia = prompt("Ingrese un dia de la semana para conocer que alimento incluir en su comida" + "\n" + "\n" + "Si desea volver al menu de opciones ingrese 0");
                }      
            });
        break;
    }else if (entrada === 2) {
        const dietaAnemicos = new Fusion(semana,comidaHierro);
        dietaHierro = [(dietaAnemicos.asignarHierro())];
        console.log(dietaHierro);
        alert("Ha seleccionado una dieta de alimentos rica en hierro. Ahora debera seleccionar cualquier dia de la semana para conocer que incluir en su alimentación")
                dietaHierro.forEach(iterar => {
                 let elegirDia = prompt("Ingrese un dia de la semana para conocer que alimento incluir en su comida");
                while (elegirDia != "ESC") {
                 switch (elegirDia) {
                   case "lunes":
                       alert(iterar.Lunes);
                       break;
           
                       case "martes":
                       alert(iterar.Martes);
                       break;
           
                       case "miercoles":
                       alert(iterar.Miercoles);
                       break;
           
                       case "jueves":
                       alert(iterar.Jueves);
                       break;
           
                       case "viernes":
                       alert(iterar.Viernes);
                       break;
           
                       case "sabado":
                       alert(iterar.Sabado);
                       break;
           
                       case "domingo":
                       alert(iterar.Domingo);
                       break;
                 
                       case "0":
                        opciones()
                        return;

                     default: ""
                     alert("Ingrese un dia de la semana")
                        break;
                  }
                  elegirDia = prompt("Ingrese un dia de la semana para conocer que alimento incluir en su comida" + "\n" + "\n" + "Si desea volver al menu de opciones ingrese 0");
               }      
           });
        break;
    }else if (entrada === 3) {
        const dietaDebiles = new Fusion(semana,comidaProteica);
        dietaProteica = [(dietaDebiles.asignarProteina())];
        console.log(dietaProteica);
        alert("Ha seleccionado una dieta de alimentos rica en proteinas. Ahora debera seleccionar cualquier dia de la semana para conocer que incluir en su alimentación")
                dietaProteica.forEach(iterar => {
                 let elegirDia = prompt("Ingrese un dia de la semana para conocer que alimento incluir en su comida");
                while (elegirDia != "ESC") {
                 switch (elegirDia) {
                   case "lunes":
                       alert(iterar.Lunes);
                       break;
           
                       case "martes":
                       alert(iterar.Martes);
                       break;
           
                       case "miercoles":
                       alert(iterar.Miercoles);
                       break;
           
                       case "jueves":
                       alert(iterar.Jueves);
                       break;
           
                       case "viernes":
                       alert(iterar.Viernes);
                       break;
           
                       case "sabado":
                       alert(iterar.Sabado);
                       break;
           
                       case "domingo":
                       alert(iterar.Domingo);
                       break;
                 
                       case "0":
                        opciones()
                        return;

                     default: ""
                     alert("Ingrese un dia de la semana")
                        break;
                  }
                  elegirDia = prompt("Ingrese un dia de la semana para conocer que alimento incluir en su comida" + "\n" + "\n" + "Si desea volver al menu de opciones ingrese 0");
               }      
           });
        break;
    } else if (entrada === 0) {
        alert("Interacción finalizada")
        return;
     }else {
        alert("Ingrese una opción")
         entrada = parseFloat(prompt("Elija alguna dieta:" + "\n" + "\n" + "1- Dieta para obtener energia" + "\n" + "2- Dieta para obtener hierro" + "\n" + "3- Dieta para obtener proteinas"  + "\n" + "\n" + "Si desea finalizar la interacción ingrese 0"));
        }
}
}  

opciones();