import { getStore } from "@netlify/blobs";

export default async (req) => {
  const store = getStore("perfume-cabinet");

  if (req.method === "GET") {
    const data = (await store.get("collection", { type: "json" })) || {};
    return new Response(JSON.stringify(data), {
      headers: { "content-type": "application/json" },
    });
  }

  if (req.method === "PUT" || req.method === "POST") {
    let body;
    try {
      body = await req.json();
    } catch (e) {
      return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
        status: 400,
        headers: { "content-type": "application/json" },
      });
    }
    await store.setJSON("collection", body);
    return new Response(JSON.stringify({ ok: true }), {
      headers: { "content-type": "application/json" },
    });
  }

  return new Response("Method not allowed", { status: 405 });
};

export const config = { path: "/api/collection" };
