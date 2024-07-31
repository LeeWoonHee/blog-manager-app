import "@testing-library/react";
import axios from "axios";

describe("blog api test", () => {
  test("all blog item api call", async () => {
    const res = await axios.get("http://localhost:4000/blog");
    expect(res.status).toEqual(200);
    expect(res).toHaveProperty("data");
  });

  test("post blog api ", async () => {
    const res = await axios.post("http://localhost:4000/blog", {
      description: "test with jest",
    });
    expect(res.status).toEqual(201);
  });

  test("update blog api", async () => {
    const allRes = await axios.get("http://localhost:4000/blog");
    const allResLength = allRes.data.length;

    if (allRes.data.length > 0) {
      const res = await axios.patch(
        `http://localhost:4000/blog/${allRes.data[allResLength - 1].id}`,
        {
          title: "updated test with jest",
        }
      );
      expect(res.status).toEqual(200);
    }
  });

  test("delete blog api", async () => {
    const allRes = await axios.get("http://localhost:4000/blog");
    const allResLength = allRes.data.length;

    if (allRes.data.length > 0) {
      const res = await axios.delete(
        `http://localhost:4000/blog/${allRes.data[allResLength - 1].id}`
      );
      expect(res.status).toEqual(200);
    }
  });
});
