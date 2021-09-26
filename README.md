# Fact-Checker

This repo is to hold the task of ShellHacks Hackathon. We  have made this project under the sponsor challenge by MITRE. A app based on mis/disinformaton.

## The Problem Statement by MITRE

Pick a Problem: Health Access and Delivery, National Security or Mis/Dis Information by MITRE
Description: Hack on any topic you’re passionate about related to the following subject areas (health care access, national security, or online mis/disinformation)-- note: this hack can be anything from building an app to developing a website, or another programmable entity.

## The Project Idea

A fact checking web platform where the public and media outlets can collaborate with trained journalism students who are ready to check the overload of unconfirmed information, before having it published.
[Youtube demo video link for the project](https://youtu.be/QoKA_FftY2o)

## Inspiration

Fake news has existed since the dawn of the printing press but in the age of internet and
social media, it has found a tremendous application. Manipulation of algorithms of social
media and search engines—to reach large audiences and mislead news consumers is a
global trend now. `Fact-Checker` is an attempt to minimize the fake news that enters social media.

## What it does

`Fact-Checker` is an end-to-end client-sever application that acts as a platform between journalist students and people who want to get their news checked before posting on social media platforms.
It provides different functionalities to both parties. for general people :

- Ability to create news information that requires verification.
- View the feedback and credibility rating provided by the journalist students.

for the journalist students:

- See active news information and join any project.
- Rate and comment on any news info.
- See the number of people are working on a news project.

## Checklist of features included in this project

- [x] Registration of clients and Journalists.
- [x] Posting a news that the client wants to check if the news is a hoax or not.
- [x] Journalists are assigned for each news so the client knows that who all are working on the news.
- [x] Journalists can comment on the news post for the reviews and can vote for the post if the news is a hoax or not.
- [x] Clients can close the post after they got the required review from the Journalists.
- [x] A dashboard page to see all the news post which are posted and journalists can start reviewing the news based on it.

## Installation Guide

- install `node` and `npm`
- `npm run setup`
- create a `.env` file inside the server directory taking `.env.example` as reference
- create a `config.js` file inside the client/src directory taking `config.example.js` as reference
- `npm run serve` to run the full application

## How we built it

`Fact-Checker` is a 3 tier application build using the MERN stack. the following technologies were used for the application:

- React (Client-side Library)
- Node (web server)
- Express (http framework)
- MongoDB (database)
- mongoose (odm)

## Challenges we ran into

- Time constrain
- Adding videos as a part of news information.

## Accomplishments that we're proud of

- Fully functional end-to-end application with a beautiful UI :)

## What we learned

- Team work
- Idea pooling

## What's next for Fact Checker

- Adding support for video
- Building an AI model and train it using the responses from the journalists
- Scale the application
