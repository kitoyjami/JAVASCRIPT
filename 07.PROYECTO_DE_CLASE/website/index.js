class entrenador {
    constructor(id,nombres,region,pokemons){
        this.id=id;
        this.nombres=nombres;
        this.region=region;
        this.pokemons=pokemons;
    }

    get getId(){
        return this.id;
    }

    set setId(id)
    {
        this.id=id;
    }

    get getNombres(){
        return this.nombres;
    }

    set setNombres(nombres)
    {
        this.nombres=nombres;
    }

    get getRegion(){
        return this.region;
    }

    set setRegion(region)
    {
        this.region=region;
    }

    get getPokemons(){
        return this.pokemons;
    }

    set setPokemons(pokemons)
    {
        this.pokemons=pokemons;
    }
}


function setup (){

    loadJSON("all",gotData);
    console.log("runing");

    var button=select("#submit");
    button.mousePressed(submitWord);
}

function submitWord(){
    var word =select("#word").value();
    var otherword=select("#otherword").value();
    var score= select("#score").value();
    console.log(word,otherword,score);

  loadJSON("add/"+word+"/"+otherword+"/"+score,finished);
    function finished (data) {
        console.log(data);
    } 
}

function gotData(data){
    console.log(data);
    var keys=Object.keys(data);
    console.log(keys);
}



const tabla =document.querySelector('#tabla_selector tbody')

 fetch("./usuario.json")
 .then(function(resp){
     return resp.json();
 }).then (function (data)
 {
     data.forEach(element => {
         const row =document.createElement("tr");
        row.innerHTML+=` <td>${element.ID} </td>
          <td>${element.NAME} </td> 
          <td>${element.REGION} </td>
          <td>${element.POKEMON_GROUP} </td>`
         tabla.appendChild(row);
     });;
 });

 const pokemon =async(i)=> {
     const respuestasFotos=await fetch(`https://pokeapi.co/api/v2/pokemon/`+i)
     const fotosMarte =await respuestasFotos.json();
     console.log(fotosMarte);
 }
 pokemon("ditto");


