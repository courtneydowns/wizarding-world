const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");
const app = express();

//ROUTES
//test GET
// app.get("/", (req, res) => {
//   return res.status(200).send("Hello World!");
// });

/*******************
 ***** READ/GET *****
 *******************/

/**********************
HARRY POTTER CHARACTERS
**********************/
//HP-CHARACTERS for endpoint

/**********************
 ****** HP SPELLS ******
 **********************/
//HP-SPELLS for endpoint

/***********************
 *** FANTASTIC BEASTS ***
 ***********************/
//FANTASTIC-BEASTS for endpoint

//Export the api to Firebase
exports.app = functions.https.onRequest(app);
