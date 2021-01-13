import React, { Component } from "react";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { Alert } from "reactstrap";
import "../css/Login.css";
import { FAFLIX_APP_LOGGEDIN } from "./../utils/helpers";

// Configure FirebaseUI.
const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "popup",
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: "/",
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        //   firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
        signInSuccessWithAuthResult: () => {
            console.log("connexion réussie");
            localStorage.setItem(FAFLIX_APP_LOGGEDIN, true);
            return true;
        },
    },
};

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="login">
                <Alert color="primary">
                    <h3>VOUS DEVEZ VOUS CONNECTER POUR CONTINUER</h3>
                </Alert>
                <StyledFirebaseAuth
                    uiConfig={uiConfig}
                    firebaseAuth={firebase.auth()}
                    uiCallback={(ui) => ui.disableAutoSignIn()}
                />
            </div>
        );
    }
}

export { Login };
