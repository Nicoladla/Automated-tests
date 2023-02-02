import app from "index";
import supertest from "supertest";

const api = supertest(app);

describe("Test in the route to insert a fruit", () => {
  it("In case of success it should return status 201", async () => {
    const fruit = { name: "Apple", price: 2000 };
    const incertResult = await api.post("/fruits").send(fruit);

    expect(incertResult.status).toBe(201);
  });

  it("In case of syntax error it should return status 422", async () => {
    const fruit = { name: 2000, price: "Apple" };
    const incertResult = await api.post("/fruits").send(fruit);

    expect(incertResult.status).toBe(422);
  });

  it("If there is already a registered fruit, it should return status 409", async () => {
    const fruit = { name: "Apple", price: 2000 };

    const incertResult = await api.post("/fruits").send(fruit);

    expect(incertResult.status).toBe(409);
  });
});
