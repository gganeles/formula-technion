import {sendEmail} from "$lib/email.ts"
import {json} from "@sveltejs/kit"

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    const {subj,text} = await request.json()
    sendEmail("technionfs@gmail.com",subj,text)
	return json("success");
}
