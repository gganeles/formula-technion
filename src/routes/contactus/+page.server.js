import { fail } from "@sveltejs/kit"
import { MONGO_URI } from "$env/static/private";
import { MongoClient, ServerApiVersion } from "mongodb";




/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ request }) => {
        async function run() {
          try {
            // Connect the client to the server	(optional starting in v4.7)
            await client.connect();
            // Send a ping to confirm a successful connection
            const db = client.db("responses")
            const col = db.collection("people")
            const resp = await col.insertOne({
              id: crypto.randomUUID(),
              name: name,
              email: email,
              subject: subj,
              content: content
            })
            console.log(resp)
          } catch (err) {
            console.log(err.stack)
            return false
          } finally {
            // Ensures that the client will close when you finish/error
            await client.close();
            return true
          }
        }


        const data = await request.formData();
        const email = data.get("email")
        const name = data.get("name")
        const subj = data.get("subject")
        const content = data.get("content")

        if (!email | !name | !subj | !content) {
            return fail(400, { missing: true })
        }


        const client = new MongoClient(MONGO_URI, {
          serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
          }
        });
        
        const r = run();
        if (r) return { success: true }
        else return fail(401, {failed: true, errorText: "Failed to connect to database"})
    }
};


