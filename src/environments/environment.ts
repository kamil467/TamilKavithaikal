// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
export const firebaseConfig ={
  apiKey: "AIzaSyBI2J_9RO7D0gfiMWj5H8TA8dgKf3C-Nbs",
    authDomain: "gravity-admin.firebaseapp.com",
    databaseURL: "https://gravity-admin.firebaseio.com",
    projectId: "gravity-admin",
    storageBucket: "gravity-admin.appspot.com",
    messagingSenderId: "1059993966978",
    appId: "1:1059993966978:web:ec65bef3dd85da3778979b"
};

export const appDefaults = 
{
  rootCatId:"OBLxYBZTT7Qjo8cLvwEQ"   // default category id to load the kavithai.make sure this is must present in the firestore.
}

export const FirebaseCollectionAPI = 
{
  kavithai :"kavithai_test",
  categories:"categories_test",

}

export const adMob = 
{
  banner: "***********Test*******************",  
  interstitial:"***********Test***************"
}