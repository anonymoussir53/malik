import { serve } from "https://deno.land/std@0.217.0/http/server.ts";
import { join, extname } from "https://deno.land/std@0.217.0/path/mod.ts";

const PORT = 8000;
const ROOT = "./build"; // Path to your React build directory

const getContentType = (path: string): string => {
  const ext = extname(path);
  switch (ext) {
    case ".css": return "text/css";
    case ".js": return "application/javascript";
    case ".png": return "image/png";
    case ".jpg":
    case ".jpeg": return "image/jpeg";
    case ".svg": return "image/svg+xml";
    case ".html": return "text/html";
    default: return "application/octet-stream";
  }
};

const handler = async (req: Request) => {
  const url = new URL(req.url);
  let path = url.pathname;

  if (path === "/") {
    path = "/index.html"; // Serve index.html for the root
  }

  try {
    const filePath = join(ROOT, path);
    const file = await Deno.readFile(filePath);
    const contentType = getContentType(filePath);
    return new Response(file, {
      headers: { "Content-Type": contentType },
    });
  } catch {
    // Serve index.html for all other routes (client-side routing)
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