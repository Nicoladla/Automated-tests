import app from "index";
import supertest from "supertest";

const api = supertest(app);

describe("Test on the route to pick up the fruits", () => {
  it("In case of success it should return status 200", async () => {
    const result = await api.get("/fruits");
    
    expect(result.status).toBe(200);
  });
});
