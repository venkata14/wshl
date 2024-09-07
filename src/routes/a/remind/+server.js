import { json } from '@sveltejs/kit'
import twilio from 'twilio'
import { TWILIO_ACCOUNTSID, TWILIO_AUTHTOKEN, TWILIO_NUMBER } from '$env/static/private';
import { error } from '@sveltejs/kit'
import { pb } from '$lib/database/pocketbase.js';
import { siteBaseUrl } from "$lib/data/meta"


let sid = TWILIO_ACCOUNTSID
let auth = TWILIO_AUTHTOKEN

// @ts-ignore
function parseData(data) {
    // Takes in data and returns the part of the text that reminds patients of their resources
    const resourceList = data.selectedDataTracker
    let l = []

    for (let i = 0; i < resourceList.length; i++) {
        const ele = resourceList[i];
        const comp = `${ele.cardTitle}: ${siteBaseUrl}${ele.cardSlug}`
        l.push(comp)
    }

    return l.join('\n')
}

async function sendSMS(content = "", to = "", devShutDown = true) {
    if (devShutDown) {
        console.log("API Shut Down")
        return false
    }

    // return true
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

export async function POST(event) {
    const data = await event.request.json()
    const number = data.phoneNumber
    const surveyLink = data.surveyLink
    const remindAreaText = parseData(data)
    const content = `Here is a reminder from the WSHL Resource Bank of the resources your requested!

${remindAreaText}

${surveyLink && surveyLink !== "" ? "Please give us your feedback by completing this short survey: " + surveyLink : ""}`

    const didTwilioWork = await sendSMS(content, number, false)

    if (!didTwilioWork) {
        throw error(404, "API Shut Down, please use another service")
    }

    return json({
        status: "Success"
    })
}