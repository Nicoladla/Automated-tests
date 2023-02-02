import app from "index";
import supertest from "supertest";

const api = supertest(app);

describe("Test on the route to get a specific fruit", () => {
  it("If the fruit is not found it should return status 404", async () => {
    const result = await api.get("/fruits/0");

    expect(result.status).toBe(404);
  });

  it("In case of success it should return status 200", async () => {
    const fruit = { name: "Apple", price: 2000 };
    await api.post("/fruits").send(fruit);

    const result = await api.get("/fruits/1");

    expect(result.status).toBe(200);
  });
});
