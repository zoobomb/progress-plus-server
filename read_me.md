# Progress Plus Application

Hello and welcome to the back end of our Application **Progress Plus**.

This was made by the combined efforts of **Charlie Chandler**, **Freshta Ebrahim**, **Hajoo Chung**, **Ionut Predoi**, **Ismail Ali** and **Patrick Fleming**.

As a group we spent four weeks building this app as our final project at the [School of Code](https://www.schoolofcode.co.uk/). You can view our [hosted version](http://3.250.192.68:3000/) online to get a look at how it works.

## ---- Routes ----

All routes use a middleware function that checks their firebase authentication, If they fail the check, they are returned the message
_You are not authorized to make this request_

### GET to /

Returns to successful requests in the from:

```

```

### GET to /

Returns to successful requests in the from:

```

```

### GET to /feedback

Returns to successful requests in the from:

```
{success: true,
data: [{"uid": "d6587569589dk3r437890584gjfni",
"name": "Stefan",
"role": "Bootcamper",
"cohort": 4,
"feedbackid": 1,
"bootcamperuid": "d6587569589dk3r437890584gjfni",
"coachname": "Tao",
"feedbackdate": "2020-11-18T00:00:00.000Z",
"subject": "react",
"week": 7,
"type": "mastery",
"passedtests": 8,
"totaltests": 10,
"qualitative": "Great knowledge of HTML, which will give you a great starting point in your knowledge for all the other languages and frameworks you are yet to learn.",
"duedate": "2020-11-15T00:00:00.000Z",
"datesubmitted": "2020-11-15T00:00:00.000Z"}, ... ]}
```

The elipses represent more objects with the same keys.

Firstly checks if there is a uid query, if there is then it will execute next() and move on to the next middleware function.
