// @ts-nocheck
import twilio from 'twilio';
import { TWILIO_ACCOUNTSID, TWILIO_AUTHTOKEN, TWILIO_NUMBER } from '$env/static/private';
import { error } from '@sveltejs/kit';

export const prerender = false

let sid = TWILIO_ACCOUNTSID
let auth = TWILIO_AUTHTOKEN

const d = {
    "food": "This is the Food Resource you requested from the WSHL Resource Bank!",
    "transportation": "This is the Transportation Resource you requested from the WSHL Resource Bank!",
    "healthcare": "This is the Healthcare Resource you requested from the WSHL Resource Bank!",
    "supplies": "This is the Supplies Resource you requested from the WSHL Resource Bank!",
    "jobIncome": "This is the Job/Income Resource you requested from the WSHL Resource Bank!",
    "utilities": "This is the Utilities Resource you requested from the WSHL Resource Bank!",
    "mental": "This is the Mental Health Resource you requested from the WSHL Resource Bank!",
    "safety": "This is the Safety Resource you requested from the WSHL Resource Bank!",
    "physical": "This is the Physical Health Resource you requested from the WSHL Resource Bank!",
    "housing": "This is the Housing Resource you requested from the WSHL Resource Bank!",
    "pharmacy": "This is the Pharmacy Resource you requested from the WSHL Resource Bank!",
}

// 8777804236
async function sendSMS(content = "Sample", to = "+18606905005", devShutDown = true) {
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
        console.log(request)
        const data = await request.formData();
        const number = data.get("phoneNumber")
        const resourceToSend = d[data.get("resourceToSend")]
        const resourceTextDescription = data.get("resourceTextDescription")
        const content = `${resourceToSend}
        
        ${resourceTextDescription}`

        const didTwilioWork = sendSMS(content, number, false)
        // const bool = await didTwilioWork
        // console.log(bool)
        // if (!bool) {
        //     throw new Error(400, "Bad Request to the Twilio API")
        // }
    }
};