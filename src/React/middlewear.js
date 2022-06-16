/*import { getDocs } from "firebase/firestore"; 
import { firestore, collection } from "../firebase";

  const querySnapshot = await getDocs(collection(firestore, "users"));
  querySnapshot.forEach((doc) => {
    let idUser= `${doc.data().name}`;
    console.log(idUser)
  })*/

export default function addId() {
    return next => action => {
     //if(!action.general) return next(action)
     next({
      ...action,
      payload: {
        ...action.payload,
        id: Math.floor(Math.random()* 1000),
        uderId: Math.floor(Math.random()* 1000)
      }
     })
    
    }
  }
 /* export  function addUserId() {
    return next => action => {
     //if(!action.general) return next(action)
     next({
      ...action,
      payload: {
        ...action.payload,
        id: Math.floor(Math.random()* 1000),
        uderId: querySnapshot
      }
     })
    
    }
  }*/