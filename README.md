# Getting Started with Create React App

This project was bootstrapped with [Create React App]

## How To Run Our Web App

In the project directory, you can run:

### `npm install`

Installs the relevant files for the app to run.


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Idea Behind Our App

Our app helps users to:
1. Learn more about recycling.
2. Check if certain items are recyclable (by scanning the QR code on its packaging)
3. Locate Recycling Bins 

Our app has a reward system, which provides incentives to users who manage to deposit recyclable items, in good condition, into our smart recycling bins. Our smart recycling bins will ideally be able to check the condition of the materials that are deposited, and award users with points based on the condition of the recycled material. Users can check the amount of points they have accumulated using the app, and can redeem rewards from sponsors through the app as well.

By using our app and smart bins, we make recycling more convenient and accessible, since users can be notified of where the nearest smart bins are. We believe users would be encouraged to take action, if they realised it is actually not as inconvenient as they thought to do their part to reduce waste. Furthermore, with a reward system, users would be further incentivised to participate in recycling. We hope that eventually, this will inculcate the habit of recycling in our society.

## Inspiration
Our chosen theme is Environment: Recycling. Our hack aims to simplify the process of recycling for users, and to reduce the reliance on human labour, by using smart bins. Our secondary aim is to create a sense of duty and motivation for recycling by providing incentive to users who recycle. 

## What it does
Users can use our app to easily locate the closest recycling bin. Earning rewards is made easy by simply scanning the recyclable items and tossing them into the bin. The bin then scans the deposited item again and assesses it, before awarding points to the user accordingly.

Our app has to be used in conjunction with our smart bins. 

Features of the app:
- QR code scanner to determine if the scanned item is recyclable, and if so, where it should be recycled
- Map to see smart bins near them.
- Keep track of number of points the user has accumulated, and update this number when users perform transactions at smart bins.

Features of the smart bin:
- Scans items, verifies condition of the item that is fed into the bin, and assesses item in terms of cleanliness, weight, and type of material.
- Scans the unique QR code of users, to award them points after they successfully deposit their items in the smart bin. 

## How we built it
We used React to build the front end of the Web App. 
The Home page of app tracks the users' points. Currently, due to time constrains, we are using a hard-coded value of 1000 points to simulate redemption of rewards. However, eventually, this value will be retrieved from the backend, which will contain information of the user, including the amount of points they have collected so far. This database should be able to be modified by our smart bin.
We used useState hooks and conditional statements to ensure that the information inputted in the Login screen is accurate, and to control error messages if otherwise. 
We used a QR code scanner API, react-qr-reader, which accesses the users' camera (web cam for computers or front camera for phones) to scan QR codes. 

## Challenges we ran into
- Time constrains in terms of implementing a workable Map api for Singapore.
- Resource constrains in terms of getting the accurate location of all recycling bins in Singapore.
- Constrains in terms of implementation of smart bin( in terms of time and hardware).
- Time constrains in terms of implementing a proper backend which can store user info globally (account credentials and number of points).

## Accomplishments that we're proud of
- Working Login page, which is able to store account credentials locally, and perform checking on login information.
- Working Home page, which is able to check if rewards can be redeemed successfully.
- Working Scanner page, which is able to read QR codes.

## What we learned
- Information about recycling, in terms of different materials that can be recycled(e.g, different grades of plastics).
- Information about existing recycling campaigns implemented in Singapore and other countries.
- How to use git version controls efficiently to improve workflow and reduce time spent restoring previous work.

## What's next for Team hg
We hope to be able to continue working on our product, in terms of creating a proper backend to store account information effectively. We also hope to be able to learn more about how we can create such smart bins, in terms of hardware and AI knowledge, so that we can eventually reduce the reliance on human labour in terms of checking of recycled materials. We also hope that our app will educate the public and motivate them to do their part in recycling. 
