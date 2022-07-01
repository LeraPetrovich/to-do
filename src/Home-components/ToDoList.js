
import {collection, where, query, deleteDoc } from "firebase/firestore";
import { firestore } from "../firebase";

const TODOLIST = () => {
    async function deleteTrack() {
        const citiesRef = collection(firestore, "to-do");
        const q = query(citiesRef, where("id", "==", 3272242));
       const querySnapshot = await deleteDoc(q);
          querySnapshot.forEach((doc) => {
       console.log(doc.data().todo);
          });
        
      
      }
return(
<ul
        className="list"
        style={{
          border: "2px solid rgb(241, 237, 237)",
          width: "700px",
          height: "700px",
          margin: "20px 0px 0px 400px",
          background: "rgb(241, 237, 237)",
        }}
      >
        {tracks.map((track, index) => (
          <ol style={{ fontSize: "26px" }} key={index} id="worcks">
            {track.todo}
            <input
              id="fluency"
              type="checkbox"
              style={{
                borderBlockColor: "#0b76ef",
                backgroundColor: "#0b76ef",
              }}
              key={index}
            />
            <button
              id="delite"
              style={{
                border: "0",
                background: "black",
                color: "white",
                height: "25px",
                borderRadius: "10px",
              }}
              onClick={() => deleteTrack()}
            >
              DELETE
            </button>
          </ol>
        ))}
      </ul>

);

};
export default TODOLIST;