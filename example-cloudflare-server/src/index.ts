import { Hono } from "hono";
import { Bindings } from "hono/types";

export type Env = {
	DATABASE_URL : string
}

const app = new Hono<{Bindings : Env}>()

app.get('/', async (c) => {
	console.log(c.env.DATABASE_URL);
	
	const body = await c.req.parseBody()
	console.log(body);
	return c.json({msg: "hey There"})
  })

  export default app