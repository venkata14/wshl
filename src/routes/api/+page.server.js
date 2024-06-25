// @ts-nocheck
import twilio from 'twilio';
import { TWILIO_ACCOUNTSID, TWILIO_AUTHTOKEN, TWILIO_NUMBER } from '$env/static/private';
import { error } from '@sveltejs/kit';

let sid = TWILIO_ACCOUNTSID
let auth = TWILIO_AUTHTOKEN

const d = {
    "food": "This is the Food Resource you requested from the WSHL Resource Bank!",
    "transportation": "This is the Transportation Resource you requested from the WSHL Resource Bank!",
}

async function sendSMS(content = "Sample", to = "+18777804236", devShutDown = true) {
    if (devShutDown) {
        return false
    }
    const client = twilio(sid, auth)

    return client.messages
        .create({
            body: content,
            from: '+18554903076',
            to: to
        })
        .then(message => {
            return true
        })
        .catch(err => {
            console.log(err)
            return false
        })
}

export const actions = {
    default: async ({ cookies, request }) => {
        const data = await request.formData();
        const number = data.get("phoneNumber")
        const resourceToSend = d[data.get("resourceToSend")]
        const resourceTextDescription = data.get("resourceTextDescription")
        const content = `${resourceToSend}
        
        ${resourceTextDescription}`

        sendSMS(content, number, true).then(e => console.log(e))
        if (true) {
            throw new Error(400, "Bad Request to the Twilio API")
        }
    }
};