import app from 'firebase'
import 'firebase/auth'
import * as firebaseui from 'firebaseui'
 
const firebaseConfig = {
    apiKey: "AIzaSyChYqyAxsRehWH3HanqDlDaK7di174Y5jg",
    authDomain: "usuarios-930c8.firebaseapp.com",
    projectId: "usuarios-930c8",
    storageBucket: "usuarios-930c8.appspot.com",
    messagingSenderId: "655014218269",
    appId: "1:655014218269:web:1f6e71f7b4c12cb56e94f4",
    measurementId: "G-EXXKCC62V5"
  };



class Firebase{
    constructor(){
        app.initializeApp(firebaseConfig);
        this.auth = app.auth();
        this.autorization = app.auth;
        this.firebaseui = new firebaseui.auth.AuthUI(app.auth());
    }
}

export default Firebase;