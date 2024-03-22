import { fail } from "@sveltejs/kit"
import { fromEmailAddress, fromEmailName } from "$lib/constants.js";

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
                        to: [{ name:"Gabriel Ganeles",email: "harelaloni1@gmail.com" }]
                    }
                ],
                from: {
                    email: "formula@formulatechnion.com",
                    name: 
                },
                subject: "dfasdd",
                content: [
                    {
                        type: "text/plain",
                        value: "ddasfdas"
                    }
                ]
            })
        });

        const response = await fetch(email_request);
        
        try {
            const data =  await response.json()
            return  { success: true, response: data}
        }
        catch (err) {
            return { failed:true, errorText:err }
        }
        try {
            if (response.status < 400) {

                const data = {blob:await response.blob(), }
                return { success: true, response: response ?? "what is the error" }
            } else {
                const response_error = await response.text()
                if (typeof response_error == "string") error = response_error
                else error = await response_error.error().text()
            }
        } catch (err) {
            error = err.toString()

        }
        return { failed: true, errorText: error ?? "extra weird Error" }
    }

}; 