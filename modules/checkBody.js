//** CORRECTION  */

function checkBody(body, keys){  // Body c'est l'objet avec les éléments à verifier sous forme clé et valeur, alors que keys c'est jutement les champs requis sous forme de tableau
    let isValid = true ; 

    for (const field of keys ){
        if(!body[field] || body[field]=== ""){
                isValid = false;
        }
    }
    return isValid; 
}


/* 

EXEMPLE 
const reqBody = { email: "user@mail.com", password: "" }; // ==> MON OBJET 
const requiredFields = ["email", "password"]; // ==> MON TABLEAU de champs requis 

const isFormValid = checkBody(reqBody, requiredFields); 

console.log(isFormValid); // false, car password est vide
*/

module.exports = {checkBody}

//***  ME CODE  */




// function checkUserInputs(user){
//    const requiredKeys = ["password", "email"];

//    if( !user || typeof user !== "object")
//         return false ;
 
//    const userKeys = Object.keys(user);
//     if(!requiredKeys.every(key => userKeys.includes(key))) {
//         return false ;
//     }

//     return requiredKeys.every(key => user[key] && user[key].trim !=="")

// }

//module.exports = {checkUserInputs}
