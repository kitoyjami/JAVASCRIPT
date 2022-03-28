// POKEAPI
// https://pokeapi.co
// ENPOINT
// https://pokeapi.co/api/v2/pokemon/pikachu

// 01. Vamos a traer a request que acabamos de instalar

const request =require("request");
var colors = require("colors");


// Declaramos la URI de la API

const URI ="https://pokeapi.co/api/v2/pokemon/";

// Creamos funcion que pida un pokemon y devuelva su tipo 

function getPokemonTypeByName (name)
{
    request.get(URI+name, function  (error,response,body)
    {
        if(response.statusCode===200){
            const bodyEnFormatoJs=JSON.parse(body);
            //parse convierte json en javascript
            const typePokemon = bodyEnFormatoJs.types.map( (objeto)=>objeto.type.name);
            console.log(`El tipo de ${name} es: ${typePokemon}`.magenta);

        }
        else{
            console.log(`Ocurrio un error: ${response.statusCode} ${response.statusMessage}`);
        }
    }
    )
}

getPokemonTypeByName("charmander");