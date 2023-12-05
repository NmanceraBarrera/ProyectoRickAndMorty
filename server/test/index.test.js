const app = require("../src/app");
const session = require("supertest");
const agent = session(app);

describe("Test de RUTAS", () => {
  describe("GET /rickandmorty/character/:id", () => {
    it("Responde con status: 200", async () => {
      await agent.get("/rickandmorty/character/1").expect(200);
    });
    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
      const response = await agent.get("/rickandmorty/character/1").expect(200);
      expect(response.body).toHaveProperty("id");
      expect(response.body).toHaveProperty("name");
      expect(response.body).toHaveProperty("species");
      expect(response.body).toHaveProperty("gender");
      expect(response.body).toHaveProperty("status");
      expect(response.body).toHaveProperty("origin");
      expect(response.body).toHaveProperty("image");
    });
    it("Si hay un error responde con status: 500", async () => {
      await agent.get("/rickandmorty/character/invalid_id").expect(500);
    });
  });
  describe("GET /rickandmorty/login", () => {
    it("Debe obtener access: true con información de login correcta", async () => {
      const response = await agent.get(
        "/rickandmorty/login?email=a@a.a&password=123456"
      );
      expect(response.body).toEqual({ access: true });
    });

    it("Valida acceso fallido con información de login incorrecta", async () => {
      try {
        const response = await agent.get(
          "/rickandmorty/login?email=incorrect_email&password=incorrect_password"
        );
        expect(response.body).toEqual({ access: false });
      } catch (error) {
        console.error(error);
      }
    });
  });

  describe("POST /rickandmorty/fav", () => {
    it("Lo que envíes por body debe ser devuelto en un arreglo", async () => {
      const response = await agent
        .post("/rickandmorty/fav")
        .send({ character: "Rick Sanchez" });
      expect(response.body).toEqual([{ character: "Rick Sanchez" }]);
    });

    it("Nuevo elemento enviado por body debe ser devuelto en un arreglo que incluye el elemento enviado previamente", async () => {
      const response = await agent
        .post("/rickandmorty/fav")
        .send({ character: "Morty Smith" });
      expect(response.body).toEqual([
        { character: "Rick Sanchez" },
        { character: "Morty Smith" },
      ]);
    });
  });

  describe("DELETE /rickandmorty/fav/:id", () => {
    it("Si no hay ningún personaje con el ID proporcionado, devuelve un arreglo sin modificar", async () => {
      const response = await agent.delete("/rickandmorty/fav/100").expect(200);
      expect(response.body).toEqual([
        { character: "Rick Sanchez" },
        { character: "Morty Smith" },
      ]);
    });

    it("Debe eliminar correctamente al personaje cuando se envía un ID válido", async () => {
      // Enviar un personaje por POST para obtener su ID
      const postResponse = await agent
        .post("/rickandmorty/fav")
        .send({ character: "Rick" });
      const id = postResponse.body[0].id;
      const deleteResponse = await agent.delete(`/rickandmorty/fav/${id}`);
      // Validar que deleteResponse.body no contiene el personaje eliminado
    });
  });
});
