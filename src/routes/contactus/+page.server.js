import { fail } from "@sveltejs/kit"
import { ELASKEY } from "$env/static/private";





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


        const url = "https://api.elasticemail.com/v4/emails/transactional";
        const email_request = {
            "Recipients": 
              {
                "To": ["Formula Technion <technionfs@gmail.com>"]
              }
            ,
            "Content": {
              "Body": [
                {
                  "ContentType": "HTML",
                  "Content": content+"<div style='display:block; padding-top:20px'>Please reply at: "+email+"</div>",
                  "Charset": "utf-8"
                }
              ],
              "From": "Contact Formula Technion <contactus@formulatechnion.com>",
              "Subject": name+": "+subj
            }
          }
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "content-type":"application/json",
                "X-ElasticEmail-ApiKey": ELASKEY,
            },
            body: JSON.stringify(email_request),
        })
        try {
            if (!response.ok) {
                return fail(401, { failed: true, errorText: "Unable to send email" })
            }
            return { success: true };
        } catch (err) {
            console.log(err)
            return { failed: true, errorText: "Unable to send email" }
        }

    }
};


