import firebase from 'firebase/app';

const IfUnAuthed = () => {
    return (
      <div>
        <h2>You're not signed in </h2>
        <button
          onClick={() => {
            firebase
              .app()
              .auth()
              .signInAnonymously();
          }}
        >
          Sign in anonymously
        </button>
        <button
          onClick={() => {
            const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(googleAuthProvider);
          }}
        >
          Sign in with Google
        </button>
      </div>
    );
  };
  
  export default IfUnAuthed;