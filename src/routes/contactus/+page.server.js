import { fail } from "@sveltejs/kit"
import { fromEmailAddress, fromEmailName } from "$lib/constants.js";
import mailChannelsPlugin from "@cloudflare/pages-plugin-mailchannels";





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

        
        try {
            await mailChannelsPlugin({
                personalizations: [
                  {
                    to: [{ name: "Some User", email: "gabriel.ganeles@gmail.com" }],
                  },
                ],
                from: {
                  name: "formula",
                  // The domain of your `from` address must be the same as the domain you set up MailChannels Domain Lockdown for (detailed below)
                  email: "formula@formulatechnion.com",
                },
                subject:"subj",
                content:[
                    {
                        type: "text/plain",
                        value: "ddasfdas"
                    }
                ],
                respondWith: () => {
                  return new Response(
                    `Thank you for submitting your enquiry. A member of the team will be in touch shortly.`
                  );
                },
              });
            return  { success: true, response: "" }
        }
        catch (err) {
            return { failed:true, errorText:err }
        }
    }

}; 
