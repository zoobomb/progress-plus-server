# Progress Plus Application

This was made by the combined efforts of **Charlie Chandler**, **Freshta Ebrahim**, **Hajoo Chung**, **Ionut Predoi**, **Ismail Ali** and **Patrick Fleming**.

This is a platform to allow School of Code bootcampers and coaches to track the technical progress of bootcampers.  Coaches can register, submit written feedback, and compare the progress of bootcampers and the bootcamp as a whole.  Bootcampers can register and view their scores and written feedback for the various mastery and recap tasks they complete.

Here is the [deployed version](http://3.250.192.68:3000/), which is hosted in a cluster on AWS's Elastic Container Service. 

You can find the client code [here](https://github.com/patrickjfl/progress-plus-client).

## Stack

- `Node JS`
- `Express`
- `Firebase`
- `Docker`
- `Postgres`

## Getting started

1. Clone the repo: `git clone https://github.com/patrickjfl/progress-plus-server.git`

2. Download the required npm modules: `npm i`

## Useful commands

- `npm start` - run the server

/** ## ---- Routes ----
*
*All routes use a middleware function that checks their Firebase authentication, If they fail the check, they are returned the message
*_You are not authorized to make this request_.  Our authorisation system means that the API routes can only be accessed with a Firebase
*token that the user receives when they log in to the client application.  This token must be included as a header in any request. 
*
*### POST to /
*
*
*
*### GET to /
*
*Returns to successful requests in the from:
*
*```
*
*```
*
*
*
*### GET to /:uid
*
*Returns to successful requests in the from:
*
*```
*
*```
*
*### POST to /feedback
*
*### GET to /feedback
*
*Returns to successful requests in the form:
*
*```
*{success: true,
*data: [{"uid": string,
*"name": string,
*"role": string,
*"cohort": integer,
*"feedbackid": integer,
*"bootcamperuid": string,
*"coachname": string,
*"feedbackdate": dateTime,
*"subject": string,
*"week": integer,
*"type": string,
*"passedtests": integer,
*"totaltests": integer,
*"qualitative": string,
*"duedate": dateTime,
*"datesubmitted": dateTime}, ... ]}
*```
*
*The elipses represent more objects with the same keys.
*
*Firstly checks if there is a uid query, if there is then it will execute next() and move on to the next middleware function.
*
*### POST to /feedback/data
*
*### PATCH TO /feedback/:feedbackid
*
*### GET to /feedback/:uid
*/
