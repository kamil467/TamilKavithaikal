export const environment = {
  production: true
};
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
  rootCatId:"OBLxYBZTT7Qjo8cLvwEQ" // default category id to load the kavithai.make sure this is must present in the firestore.
}
export const FirebaseCollectionAPI = 
{
  kavithai :"kavithai_test",  // not possible to rename the collection at firestore so keeping the test collection
  categories:"categories_test",
  
}

export const adMob = 
{
  banner: "ca-app-pub-2827888369957246/4998654045",
  interstitial:"ca-app-pub-2827888369957246/3689902148"
}