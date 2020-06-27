import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCw_NL0f6PyJdazOyuA_If0eornH9w0jxQ',
  authDomain: 'kitmatch-app.firebaseapp.com',
  databaseURL: 'https://kitmatch-app.firebaseio.com',
  projectId: 'kitmatch-app',
  storageBucket: 'kitmatch-app.appspot.com',
  messagingSenderId: '930978665178',
  appId: '1:930978665178:web:fbe448ec5e019ead668be3',
  measurementId: 'G-EKHHLHC9F0',
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
