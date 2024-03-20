import { sendEmail } from "$lib/email";
import { json }from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	const { name, subject, content, email } = await request.json();
    const response = await sendEmail(
        "gabriel.ganeles@gmail.com",
        name + ": " + subject,
        content+"\n"+email,
    );
	return json(response);
}