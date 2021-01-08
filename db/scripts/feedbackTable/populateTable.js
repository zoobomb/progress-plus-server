// create mock data

const { query } = require('../../index');

const uid = 'NYGP0wlOEhSU7BYZi0yZPBwHqNN2';

export const feedbacksArray = [
  {
    bootcamperuid: uid,
    coachname: 'Tao',
    feedbackdate: '2020-11-18',
    subject: 'react',
    week: 1,
    type: 'mastery',
    passedtests: 9,
    totaltests: 10,
    qualitative: 'Your understanding of react is really good.',
    duedate: '2020-11-15',
    datesubmitted: '2020-11-15',
  },
  {
    bootcamperuid: uid,
    coachname: 'Ben',
    feedbackdate: '2020-12-04',
    subject: 'javascript',
    week: 2,
    type: 'mastery',
    passedtests: 4,
    totaltests: 10,
    qualitative: 'You may want to use codewars to help you improve.',
    duedate: '2020-12-02',
    datesubmitted: '2020-12-01',
  },
  {
    bootcamperuid: uid,
    coachname: 'Liz',
    feedbackdate: '2020-11-18',
    subject: 'css',
    week: 3,
    type: 'mastery',
    passedtests: 10,
    totaltests: 10,
    qualitative: 'Wow! You are very design minded!',
    duedate: '2020-11-15',
    datesubmitted: '2020-11-15',
  },
  {
    bootcamperuid: uid,
    coachname: 'James',
    feedbackdate: '2020-12-04',
    subject: 'nodeJS',
    week: 4,
    type: 'mastery',
    passedtests: 6,
    totaltests: 10,
    qualitative: 'I can see you need to practice more on backend developing.',
    duedate: '2020-12-02',
    datesubmitted: '2020-12-01',
  },
  {
    bootcamperuid: uid,
    coachname: 'Mell',
    feedbackdate: '2020-12-05',
    subject: 'HTML',
    week: 5,
    type: 'mastery',
    passedtests: 8,
    totaltests: 10,
    qualitative: 'Really impressed at your knowledge of HTML.',
    duedate: '2020-12-02',
    datesubmitted: '2020-12-01',
  },
  {
    bootcamperuid: uid,
    coachname: 'Tao',
    feedbackdate: '2020-11-18',
    subject: 'nextJS',
    week: 6,
    type: 'mastery',
    passedtests: 4,
    totaltests: 10,
    qualitative:
      'You may need more practice to feel more comfortable using nextJS.',
    duedate: '2020-11-15',
    datesubmitted: '2020-11-15',
  },
  {
    bootcamperuid: uid,
    coachname: 'Ben',
    feedbackdate: '2020-12-04',
    subject: 'react',
    week: 7,
    type: 'mastery',
    passedtests: 5,
    totaltests: 10,
    qualitative:
      'You should try the tasks again to imporve your skills in using react.',
    duedate: '2020-12-02',
    datesubmitted: '2020-12-01',
  },
  {
    bootcamperuid: uid,
    coachname: 'Liz',
    feedbackdate: '2020-11-18',
    subject: 'Gatsby',
    week: 8,
    type: 'mastery',
    passedtests: 9,
    totaltests: 10,
    qualitative: 'Really well done!',
    duedate: '2020-11-15',
    datesubmitted: '2020-11-15',
  },
  {
    bootcamperuid: uid,
    coachname: 'James',
    feedbackdate: '2020-12-04',
    subject: 'Go',
    week: 9,
    type: 'mastery',
    passedtests: 3,
    totaltests: 10,
    qualitative: "Don't feel overwhelmed, Go is a difficult language to learn.",
    duedate: '2020-12-02',
    datesubmitted: '2020-12-01',
  },
  {
    bootcamperuid: uid,
    coachname: 'Mell',
    feedbackdate: '2020-12-05',
    subject: 'SQL',
    week: 10,
    type: 'mastery',
    passedtests: 10,
    totaltests: 10,
    qualitative: 'Your SQL knowledge is amazing! Keep it up.',
    duedate: '2020-12-02',
    datesubmitted: '2020-12-01',
  },
  {
    bootcamperuid: uid,
    coachname: 'Tao',
    feedbackdate: '2020-11-18',
    subject: 'react',
    week: 1,
    type: 'recap',
    passedtests: 6,
    totaltests: 10,
    qualitative: 'Cool beans, looks fab!',
    duedate: '2020-11-15',
    datesubmitted: '2020-11-15',
  },
  {
    bootcamperuid: uid,
    coachname: 'Ben',
    feedbackdate: '2020-12-04',
    subject: 'react, css',
    week: 2,
    type: 'recap',
    passedtests: 4,
    totaltests: 10,
    qualitative:
      'I kept everything inside and even though I tried it all fell apart what it meant to me will eventually be a memory of a time when I tried so hard.',
    duedate: '2020-12-02',
    datesubmitted: '2020-12-01',
  },
  {
    bootcamperuid: uid,
    coachname: 'Liz',
    feedbackdate: '2020-11-18',
    subject: 'javascrpt, nodeJS',
    week: 3,
    type: 'recap',
    passedtests: 8,
    totaltests: 10,
    qualitative:
      "You tried so hard and got so far but in the end it doesn't even matter.",
    duedate: '2020-11-15',
    datesubmitted: '2020-11-15',
  },
  {
    bootcamperuid: uid,
    coachname: 'James',
    feedbackdate: '2020-12-04',
    subject: 'css',
    week: 4,
    type: 'recap',
    passedtests: 5,
    totaltests: 10,
    qualitative:
      "One thing I don't know why. It doesn't even matter how hard you try. Keep that in mind.",
    duedate: '2020-12-02',
    datesubmitted: '2020-12-01',
  },
  {
    bootcamperuid: uid,
    coachname: 'Mell',
    feedbackdate: '2020-12-05',
    subject: 'css, SQL',
    week: 5,
    type: 'recap',
    passedtests: 3,
    totaltests: 10,
    qualitative: 'Keep putting in the effort and you will see improvement.',
    duedate: '2020-12-02',
    datesubmitted: '2020-12-01',
  },
  {
    bootcamperuid: uid,
    coachname: 'Tao',
    feedbackdate: '2020-11-18',
    subject: 'react',
    week: 6,
    type: 'recap',
    passedtests: 8,
    totaltests: 10,
    qualitative: 'You have show great progress since last week young padawan.',
    duedate: '2020-11-15',
    datesubmitted: '2020-11-15',
  },
  {
    bootcamperuid: uid,
    coachname: 'Ben',
    feedbackdate: '2020-12-04',
    subject: 'react',
    week: 7,
    type: 'recap',
    passedtests: 10,
    totaltests: 10,
    qualitative: 'I could write a song about this work! good job!',
    duedate: '2020-12-02',
    datesubmitted: '2020-12-01',
  },
  {
    bootcamperuid: uid,
    coachname: 'Liz',
    feedbackdate: '2020-11-18',
    subject: 'react, nextJS',
    week: 8,
    type: 'recap',
    passedtests: 8,
    totaltests: 10,
    qualitative:
      "I think that what you've done is just great, but you could maybe focus a little more on getting the syntax right.",
    duedate: '2020-11-15',
    datesubmitted: '2020-11-15',
  },
  {
    bootcamperuid: uid,
    coachname: 'James',
    feedbackdate: '2020-12-04',
    subject: 'css, HTML',
    week: 9,
    type: 'express',
    passedtests: 10,
    totaltests: 10,
    qualitative: "Wow, you've really impressed me here with your back end!",
    duedate: '2020-12-02',
    datesubmitted: '2020-12-01',
  },
  {
    bootcamperuid: uid,
    coachname: 'Mell',
    feedbackdate: '2020-12-05',
    subject: 'css, javascript',
    week: 10,
    type: 'recap',
    passedtests: 1,
    totaltests: 10,
    qualitative:
      'You can do better than this, I dont even think that you tried in this!',
    duedate: '2020-12-02',
    datesubmitted: '2020-12-01',
  },
];

const sqlStatement = `
    INSERT INTO feedback
        (bootcamperuid, coachname, feedbackdate, subject, week, type, passedtests, totaltests, qualitative, duedate, datesubmitted)
    VALUES
        ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
;`;
// doesnt like feedback, not sure why
// --> add "const" before feedback on line 80, need to drop and create table again and try to populate!
// i have no permmission to use terminal tho..

async function populateTable(uid) {
  let feedbackDataArray;
  for (const feedback of feedbacksArray) {
    feedbackDataArray = Object.values(feedback);
    await query(sqlStatement, feedbackDataArray);
  }
}

populateTable();
