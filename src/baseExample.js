
const Rebase = require('re-base');
const firebase = require('firebase/app');
const database = require('firebase/database');
const app = firebase.initializeApp({
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
});
const db = firebase.database(app);
const base = Rebase.createClass(db);
export default base