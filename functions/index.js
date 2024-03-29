const functions = require("firebase-functions");
const admin = require("firebase-admin");
process.env.FIREBASE_AUTH_EMULATOR_HOST = "localhost:9099";


admin.initializeApp({
    projectId: "cooking-forum",
    databaseURL: "http://localhost:9000/?ns=cooking-forum-default-rtdb",
})

exports.writeToDb = functions.auth.user().onCreate((user) => {
    const newUser = {
        admin: false,
        name: "",
        photo: ""
    }

    console.log(newUser);

    admin.database().ref(`/users/${user.uid}`).set(newUser).then(() => {
        console.log(`Success save new user to database!`);
    }).catch((error) => {
        console.log(`Fail to save new user to database! Error: ${error}`);
    })
});

exports.updateUserDb = functions.database.ref(`/users/{userId}`).onCreate((snapshot, context) => {
    admin
        .auth()
        .getUser(context.params.userId)
        .then((userRecord) => {
            // See the UserRecord reference doc for the contents of userRecord.
            const newUser = {
                name: userRecord.displayName,
                photo: userRecord.photoURL,
                admin: false
            }
            admin.database().ref(`/users/${context.params.userId}`).set(newUser).then(() => {
                console.log(`User save!`);
            }).catch((error) => {
                console.log(`User not save!`);
            })
            console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
        })
        .catch((error) => {
            console.log('Error fetching user data:', error);
        });
})
