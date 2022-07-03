import React from "react";
import {deleteDoc,doc } from "firebase/firestore";
import { firestore } from "../firebase";
import { connect,useSelector } from "react-redux";
import style from '../module/Todo.module.scss'
import { deleteTac } from "../React/action-creator";
import { update } from "firebase/database";
import mops from '../ico/free-icon-rubbish-bin-1483063.png';
import pensil from '../ico/pencil_icon-icons.com_64998.ico'

const TODOLIST = ({tracks}) => {
  const track = useSelector((state) => state.tracks)

tracks.forEach(element => {
  console.log(element.id);
});
  console.log(track);

    async function deleteTrack() {
      await deleteDoc(doc(firestore, "to-do", "3Ua8GfQaJeyUFpoPHW5t"));
deleteTac(tracks[1]);
      }
      

return(
<ul
        className={style.list}
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
              onClick={() => deleteTrack()}
            >
              <img src={mops} alt="trach"
              className={style.img}
              />
            </button>
            <button
              id="delite"
              onClick={() => update()}
            >
              <img src={pensil} alt="portlandlogo"
              className={style.img}
              />
            </button>
          </ol>
        ))}
      </ul>

);

};
export default connect(
  (state) => (
    {
    tracks: state.tracks,
  }),
  (dispatch) => ({
    deleteTac: (trackName) => {
      const payload = {
        todo: trackName,
        UserID:' ',
        id:'',
       
      };

      dispatch(deleteTac(payload));
    },
   
  }),
  )(TODOLIST);