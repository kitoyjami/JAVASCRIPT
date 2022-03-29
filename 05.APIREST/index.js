console.log("Este es un ejemplo que consume una Api de la NASA usando Fetch");

// Importamos libreria fetch 

//import fetch from 'node-fetch';
const keyApi="cuYcLqM7QhQHVEQ4CVGNGULbxp4qxGRYCUmqMW2M"
// const respuesta = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=${keyApi}`);

/* const meteoritos=await respuesta.json();
console.log(meteoritos.near_earth_objects)

Object.keys(meteoritos.near_earth_objects).forEach(Object=> {

    const asteroides=meteoritos.near_earth_objects[Object];
    asteroides.forEach(peligrosos=>{
        if(peligrosos.is_potentially_hazardous_asteroid===true)
        {
            console.log(`El asteroide ${peligrosos.name} es potencialmente peligroso en la fecha ${peligrosos.close_approach_data[0].close_approach_date_full}`);
        }
        else{
            console.log(`El asteoride ${peligrosos.name} no representa una amenaza`);
        }
    })
}) */

const marte =async(i)=> {
    const respuestasFotos=await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&camera=NAVCAM&api_key=${keyApi}`)
    const fotosMarte =await respuestasFotos.json()
    //console.log(fotosMarte.photos[0].img_src);
    var imagen=document.createElement("img");
    imagen.id="primeraFoto"
    var imagenUrl=fotosMarte.photos[i].img_src;
    document.getElementById("tarjeta").appendChild(imagen);
    document.getElementById(imagen.id).src=imagenUrl;
    console.log(fotosMarte.photos[i].camera.full_name);
    console.log(fotosMarte.photos[i].rover);
    var petiqueta=document.createElement("h2")
    petiqueta.innerHTML= `Esta foto fue tomada con la camara por ${fotosMarte.photos[i].rover.name} con su camara ${fotosMarte.photos[i].camera.full_name} 
    el día ${fotosMarte.photos[i].earth_date}`
    document.getElementById("tarjeta").appendChild(petiqueta);
}

marte(3);
