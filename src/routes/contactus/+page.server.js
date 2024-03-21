import { fail } from "@sveltejs/kit"
import { fromEmailAddress, fromEmailName } from "$lib/constants";

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

        const email_request = new Request("https://api.mailchannels.net/tx/v1/send", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                personalizations: [
                    {
                        to: [{ email: "gabriel.ganeles@gmail.com" }]
                    }
                ],
                from: {
                    email: fromEmailAddress,
                    name: fromEmailName
                },
                subject: name + ": " + subj,
                content: [
                    {
                        type: "text/plain",
                        value: content + "\n" + email
                    }
                ]
            })
        });

        const response = await fetch(email_request);
        if (response.status < 400) {
            return { success: true, response:response }
        } else {
            let error;
            try {
                const response_error = await response.text()
                if (typeof response_error == "string") error = response_error
                else error = await response_error.error().text()
            } catch (err) {
                error = err.toString()
            }
            return { failed: true, errorText: error??"extra weird Error"}
        }
    }
}; 