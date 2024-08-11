import { serve } from "https://deno.land/std@0.217.0/http/server.ts";
import { join } from "https://deno.land/std@0.217.0/path/mod.ts";

const PORT = 8000;
const ROOT = "./build";

const handler = async (req: Request) => {
  const url = new URL(req.url);
  let path = url.pathname;

  if (path === "/") {
    path = "/index.html";
  }

  try {
    const filePath = join(ROOT, path);
    const file = await Deno.readFile(filePath);
    return new Response(file);
  } catch {
    try {
      const file = await Deno.readFile(join(ROOT, "index.html"));
      return new Response(file, {
        headers: { "Content-Type": "text/html" },
      });
    } catch {
      return new Response("404 Not Found", { status: 404 });
    }
  }
};

console.log(`Server is running on http://localhost:${PORT}`);
await serve(handler, { port: PORT });
