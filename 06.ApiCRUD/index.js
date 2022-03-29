// index principal 
const gooReadsCrud =require('./crudAuthors.js');

//Lista de autores 

//gooReadsCrud.listAuthors();

// Ver un author 

// gooReadsCrud.getAuthor(14567);

//CREAR UN AUTOR 
const jsonSend = {
     name: "Juan",
last_name: "Ramirez",
nacionalidad: "MX",
	biography: "Escritor",
 	gender: "M",
 	age: 30,
 	is_alive: true
 }

 gooReadsCrud.createAuthor(jsonSend)