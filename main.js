const semana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo" ]

const comidaEnergetica = ["Frutos Secos", "Avena", "Palta", "Chocolate", "Huevo", "Ensalada", "Salmon", "Menta", "Frutas", "Semillas"]

const comidaHierro = ["Legumbres secas", "Cereales fortificados", "Higado", "Carne de res", "Atun","Frutas deshidratadas", "Granos enteros"]

const comidaProteica = ["Mantequilla de Mani", "Pavo", "Yogurt griego", "Langostinos", "Pollo", "Queso crema", "Merluza", "Soja", "Tofu", "Pistachos"]

    

//  function opciones() {
//       let entrada = parseFloat(prompt("Ingrese una opcion")); 
    
//       if(entrada === 1){
//  
// for(let dias = 0; dias < semana.length; dias++)
// alert(semana[dias]);
//     };
// };

// const dietaHierro = []
const dietas = [];

// function crearObjeto(semana,comidaHierro){

//     for(let i = 0; i < semana.length; i++){
//         objeto[semana[i]] = comidaHierro[i];
        
//     }
    
//     return objeto
    
// }

// crearObjeto(["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"], ["Legumbres secas", "Cereales fortificados", "Higado", "Carne de res", "Atun","Frutas deshidratadas", "Granos enteros"]);

// dietaHierro.push(objeto);

// dietaHierro.forEach(dieta => {
//     let entrada = prompt("Ingrese el dia para conocer que debe comer");
//     while (entrada != "ESC") {
//       switch (entrada) {
//         case "lunes":
//             alert(dieta.Lunes);
//             break;

//             case "martes":
//             alert(dieta.Martes);
//             break;

//             case "miercoles":
//             alert(dieta.Miercoles);
//             break;

//             case "jueves":
//             alert(dieta.Jueves);
//             break;

//             case "viernes":
//             alert(dieta.Viernes);
//             break;

//             case "sabado":
//             alert(dieta.Sabado);
//             break;

//             case "domingo":
//             alert(dieta.Domingo);
//             break;
      
//         default:
//             break;
//       }
//       entrada = prompt("Ingrese el dia para conocer que debe comer");  
//     }

// });




class Dieta{
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


const entrada = parseFloat(prompt("Ingrese una opción"))
while(entrada != "ESC"){
    if (entrada === 1) {
        const dietaEnergetica = new Dieta(semana,comidaEnergetica);
        console.log(dietaEnergetica);
        console.log(dietaEnergetica.asignarEnergia());
        break;
    }else if (entrada === 2) {
        const dietaHierro = new Dieta(semana,comidaHierro);
        console.log(dietaHierro);
        console.log(dietaHierro.asignarHierro());
        break;
    }else if (entrada === 3) {
        const dietaProteica = new Dieta(semana,comidaProteica);
        console.log(dietaProteica);
        console.log(dietaProteica.asignarProteina());
        break;
     }else {
         entrada = parseFloat(prompt("Ingrese una opción"));
        }
}    
   
// const dieta = new Dieta(semana, entrada)
// console.log(dieta);
// console.log(dieta.asignar());
    
//     crear(){
//     let creacion = parseFloat(prompt("Seleccione una opción"))
//         if (creacion === 1) {
//             for(let i = 0; i < semana.length; i++){
//                 objeto[semana[i]] = comidaHierro[i];
                
//             }
            
//             return objeto
        
//     }
//  }   

// dietaHierro.push(objeto);
// console.log(dietaHierro);
// for(let i = 0; i < semana.length; i++){
    //     objeto[semana[i]] = comidaHierro[i];
    // return objeto

//     let entrada = prompt("Ingrese el dia para conocer que debe comer");
//     if(entrada === "Lunes"){
//         alert(dieta.Lunes);
//     }else{
        
//     }








//opciones()