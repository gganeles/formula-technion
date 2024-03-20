import { dev } from "$app/environment";
import { fromEmailAddress, fromEmailName } from "./constants";
/**
 * Sends an email using the MailChannels API
 * @param to
 * @param subject
 * @param body
 */
export async function sendEmail(to, subject, body) {
  const request = new Request("https://api.mailchannels.net/tx/v1/send", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [{ email: to }]
        }
      ],
      from: {
        email: fromEmailAddress,
        name: fromEmailName
      },
      subject: subject,
      content: [
        {
          type: "text/plain",
          value: body
        }
      ]
    })
  });

  const response = await fetch(request);
  return response
}