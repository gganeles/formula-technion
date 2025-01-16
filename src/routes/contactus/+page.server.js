import { fail } from "@sveltejs/kit"

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ request }) => {



        const data = await request.formData();
        const email = data.get("email")
        const name = data.get("name")
        const subj = data.get("subject")
        const content = data.get("content")

        if (!email | !name | !subj | !content) {
            return fail(400, { missing: true })
        }

        const r = await fetch('https://floral-dust-97dd.technionfs.workers.dev/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            data: {
              name: name,
              email: email,
              subject: subj,
              content: content,
              id: crypto.randomUUID()
            }
          })
        })
        if (r.status==200) return { success: true }
        else return fail(401, {failed: true, errorText: "Failed to connect to database"})
    }
};


