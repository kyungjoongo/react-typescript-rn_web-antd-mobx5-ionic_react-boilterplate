import * as Realm from "realm-web";

const app = new Realm.App({id: "realm001-orvsj"});

async function loginAnonymous() {
    // Create an anonymous credential
    const credentials = Realm.Credentials.anonymous();
    try {
        // Authenticate the user
        const user = await app.logIn(credentials);
        // `App.currentUser` updates to match the logged in user
        if (user.id === app.currentUser.id) {
           // console.log("temptemp==same");
        }
        return user
    } catch (err) {
        console.error("Failed to log in", err);
    }
}

loginAnonymous().then(async user => {
    const mongodb = app.currentUser.mongoClient("mongodb-atlas");
    //todo: 몽고db 콜렉션 인스턴스를 가지고 온다..
    const lawyers = mongodb.db("portal").collection("lawyers");

    const results = await lawyers.find();
    console.log("perennials", results);

})


// try {
//
//
//
//
// } catch (e) {
//     console.log("temptemp==>", e.toString());
// }
//
//
//
//

