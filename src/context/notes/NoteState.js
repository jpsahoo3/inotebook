import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {

    const notesInitial = [
        {
          "_id": "63d9ed20890eb04abc7e7721",
          "user": "63d7a62d199032ebc078068c",
          "title": "My Title1",
          "description": "Please wake up early1",
          "tag": "Personal1",
          "date": "2023-02-01T04:40:00.610Z",
          "__v": 0
        },
        {
          "_id": "63db5ddc1bf7f0e2a5ca2ee1",
          "user": "63d7a62d199032ebc078068c",
          "title": "My Title1",
          "description": "Please wake up early1",
          "tag": "Personal1",
          "date": "2023-02-02T06:53:16.593Z",
          "__v": 0
        },
        {
          "_id": "63db5df31bf7f0e2a5ca2ee4",
          "user": "63d7a62d199032ebc078068c",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "Personal",
          "date": "2023-02-02T06:53:39.518Z",
          "__v": 0
        },
        {
            "_id": "63d9ed20890eb04abc7e7721",
            "user": "63d7a62d199032ebc078068c",
            "title": "My Title1",
            "description": "Please wake up early1",
            "tag": "Personal1",
            "date": "2023-02-01T04:40:00.610Z",
            "__v": 0
          },
          {
            "_id": "63db5ddc1bf7f0e2a5ca2ee1",
            "user": "63d7a62d199032ebc078068c",
            "title": "My Title1",
            "description": "Please wake up early1",
            "tag": "Personal1",
            "date": "2023-02-02T06:53:16.593Z",
            "__v": 0
          },
          {
            "_id": "63db5df31bf7f0e2a5ca2ee4",
            "user": "63d7a62d199032ebc078068c",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "Personal",
            "date": "2023-02-02T06:53:39.518Z",
            "__v": 0
          }
      ]
      
      const [notes, setNotes] = useState(notesInitial)

    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;