import {onAuthStateChanged, getAuth} from "firebase/auth";

  
  const auth = getAuth();
onAuthStateChanged(auth, (user) => {
      var uid = user.uid;
     console.log(uid);
    
  });
  
  


export default function addId() {
    return next => action => {
     next({
      ...action,
      payload: {
        ...action.payload,
        id: Math.floor(Math.random()* 10000000),
        UserID: auth.lastNotifiedUid,
      }
     })
    
    }
  }

/*function getId(){
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      var uid = user.uid;
     console.log(uid);
    } 
  });
}
   
  

export function addFirebaseId(){
  return next => action => {
    next({
     ...action,
     payload: {
       ...action.payload,
       todo: getId(),
     }
    })
   
   }
}*/