// Importa http desde el módulo http.
const http = require("http");

// Importa el archivo data.js.
const data = require("./utils/data");
const PORT = 3001;

// Crea y levanta un servidor en el puerto 3001.
const server = http
  .createServer((req, res) => {
    // Configura el encabezado para permitir solicitudes desde cualquier origen.
    res.setHeader("Access-Control-Allow-Origin", "*");

    // Verifica si la URL incluye "/rickandmorty/character".
    if (req.url.includes("/rickandmorty/character")) {
      // Obtiene el id del personaje desde la URL.
      const id = req.url.split("/").pop();

      // Busca el personaje por id en el archivo data.js.
      const character = data.find((char) => char.id === Number(id));

      // Envía como respuesta un JSON con el personaje.
      if (character) {
        return res
          .writeHead(200, { "Content-Type": "application/json" })
          .end(JSON.stringify(character));
      } else {
        return res
          .writeHead(404, { "Content-Type": "application/json" })
          .end(JSON.stringify({ message: "Character Not Found" }));
      }
    }
    return res
      .writeHead(404, { "Content-Type": "application/json" })
      .end(JSON.stringify({ message: "Wrong URL" }));
  })
  .listen(PORT, "127.0.0.1", () => {
    console.log("Run port server 3001");
  });

/*Crea un condicional que verfique si la url incluye el string "/rickandmorty/character". En el caso de que si lo haga deberás obtener el id del personaje que te llega por la url. Luego de obtener el id, búscalo dentro del archivo data.js (deberás importar el archivo). Ten en cuenta que el id de la url es un string, y los id de los personajes son números.

[NOTA]: la url te llegará con la siguiente estructura. Ejemplo: /rickandmorty/character/:id. Piensa en una lógica que te permita obtener el id del final.*/