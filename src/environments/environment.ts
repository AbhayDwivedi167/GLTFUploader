// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  firebase  : {
    apiKey: "AIzaSyCL5HrHqSB34fT7sHN4v0TGmnRlynlZFwI",
    authDomain: "yolouploader.firebaseapp.com",
    //databaseURL: "https://exploragram-5dd13-default-rtdb.firebaseio.com",
	databaseURL: "https://yolouploader-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "yolouploader",
    storageBucket: "yolouploader.appspot.com",
    messagingSenderId: "1050403599413",
    appId: "1:1050403599413:web:3e9b8eef4a6b89bbb1ad7c",
    measurementId: "G-809HNR65NS"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
