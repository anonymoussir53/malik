import { serve } from "https://deno.land/std@0.153.0/http/server.ts";
import { join } from "https://deno.land/std@0.153.0/path/mod.ts";

const PORT = 8000;
const ROOT = "./build"; // Path to your build directory

const handler = async (req: Request) => {
  const url = new URL(req.url);
  const path = url.pathname;
  if (path === "/") {
    return new Response(await Deno.readTextFile(join(ROOT, "index.html")), {
      headers: { "Content-Type": "text/html" },
    });
  }
  try {
    return new Response(await Deno.readFile(join(ROOT, path)), {
      headers: { "Content-Type": getContentType(path) },
    });
  } catch {
    return new Response(await Deno.readTextFile(join(ROOT, "index.html")), {
      headers: { "Content-Type": "text/html" },
    });
  }
};

const getContentType = (path: string): string => {
  if (path.endsWith(".css")) return "text/css";
  if (path.endsWith(".js")) return "application/javascript";
  if (path.endsWith(".png")) return "image/png";
  if (path.endsWith(".jpg") || path.endsWith(".jpeg")) return "image/jpeg";
  if (path.endsWith(".svg")) return "image/svg+xml";
  return "application/octet-stream";
};

console.log(`Server is running on http://localhost:${PORT}`);
await serve(handler, { port: PORT });
