// Put your code below this line.

import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import {
  Button,
  Flex,
  Heading,
  Image,
  Text,
  TextField,
  View,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import { listTodos, 
  listAppCases, getAppCase,
  listSuspects, getSuspects,
  listEvidences, getEvidence, 
  listCaseNotes, getCaseNote,
} from "./graphql/queries";
import {
  createTodo as createNoteMutation,
  deleteTodo as deleteNoteMutation,
  createAppCase, 
  updateAppCase, 
  deleteAppCase, 
  createSuspect, 
  updateSuspect, 
  deleteSuspect, 
  createEvidence, 
  updateEvidence, 
  deleteEvidence, 
  createCaseNote, 
  updateCaseNote, 
  deleteCaseNote
} from "./graphql/mutations";
import { generateClient } from 'aws-amplify/api';

const client = generateClient();


const App = ({ signOut }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const apiData = await client.graphql({ query: listTodos });
    const notesFromAPI = apiData.data.listTodos.items;
    await Promise.all(
      notesFromAPI.map(async (note) => {
        if (note.image) {
          const url = await Storage.get(note.name);
          note.image = url;
        }
        return note;
      })
    );
    setNotes(notesFromAPI);
  }

  async function createNote(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const image = form.get("image");
    const data = {
      name: form.get("name"),
      description: form.get("description"),
      image: image.name,
    };
    if (!!data.image) await Storage.put(data.name, image);
    await client.graphql({
      query: createNoteMutation,
      variables: { input: data },
    });
    fetchNotes();
    event.target.reset();
  }

  async function deleteNote({ id, name}) {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    await Storage.remove(name);
    await client.graphql({
      query: deleteNoteMutation,
      variables: { input: { id } },
    });
  }
 /*
***CaseNote CREATE, DELETE and UPDATE - WIP***
const newCaseNote = await client.graphql({
    query: createCaseNote,
    variables: {
        input: {
		"tite": "Lorem ipsum dolor sit amet",
		"content": "Lorem ipsum dolor sit amet",
		"image": "Lorem ipsum dolor sit amet",
		"createDateTime": "1970-01-01T12:30:23.999Z",
		"AppCase": /* Provide a AppCase instance here 
	}
}
});

const updatedCaseNote = await client.graphql({
    query: updateCaseNote,
    variables: {
        input: {
		"tite": "Lorem ipsum dolor sit amet",
		"content": "Lorem ipsum dolor sit amet",
		"image": "Lorem ipsum dolor sit amet",
		"createDateTime": "1970-01-01T12:30:23.999Z",
		"AppCase": /* Provide a AppCase instance here 
	}
}
});

const deletedCaseNote = await client.graphql({
    query: deleteCaseNote,
    variables: {
        input: {
            id: "YOUR_RECORD_ID"
        }
    }
});

// List all items
const allCaseNotes = await client.graphql({
    query: listCaseNotes
});
console.log(allCaseNote);

// Get a specific item
const oneCaseNote = await client.graphql({
    query: getCaseNote,
    variables: { id: 'YOUR_RECORD_ID' }
});
*/

 /*
***AppCase CREATE, DELETE and UPDATE - WIP***

const newAppCase = await client.graphql({
    query: createAppCase,
    variables: {
        input: {
		"title": "Lorem ipsum dolor sit amet",
		"description": "Lorem ipsum dolor sit amet",
		"createdDateTime": "1970-01-01T12:30:23.999Z",
		"isDeleted": true,
		"suspectcaseID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
		"Evidences": [],
		"suspects": [],
		"CaseNote": /* Provide a CaseNote instance here 
	}
}
});

const updatedAppCase = await client.graphql({
    query: updateAppCase,
    variables: {
        input: {
		"title": "Lorem ipsum dolor sit amet",
		"description": "Lorem ipsum dolor sit amet",
		"createdDateTime": "1970-01-01T12:30:23.999Z",
		"isDeleted": true,
		"suspectcaseID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
		"Evidences": [],
		"suspects": [],
		"CaseNote": /* Provide a CaseNote instance here
	}
}
});

const deletedAppCase = await client.graphql({
    query: deleteAppCase,
    variables: {
        input: {
            id: "YOUR_RECORD_ID"
        }
    }
});
// List all items
const allAppCases = await client.graphql({
    query: listAppCases
});
console.log(allAppCase);

// Get a specific item
const oneAppCase = await client.graphql({
    query: getAppCase,
    variables: { id: 'YOUR_RECORD_ID' }
});

*/

 /*
***EVIDENCE CREATE, DELETE and UPDATE - WIP***

const newEvidence = await client.graphql({
    query: createEvidence,
    variables: {
        input: {
		"type": "Lorem ipsum dolor sit amet",
		"Decription": "Lorem ipsum dolor sit amet",
		"url": "Lorem ipsum dolor sit amet",
		"createdDateTime": "1970-01-01T12:30:23.999Z",
		"IsDeleted": true,
		"appcaseID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
		"AppCase": Provide a AppCase instance here
	}
}
});

const updatedEvidence = await client.graphql({
    query: updateEvidence,
    variables: {
        input: {
		"type": "Lorem ipsum dolor sit amet",
		"Decription": "Lorem ipsum dolor sit amet",
		"url": "Lorem ipsum dolor sit amet",
		"createdDateTime": "1970-01-01T12:30:23.999Z",
		"IsDeleted": true,
		"appcaseID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
		"AppCase": /* Provide a AppCase instance here 
	}
}
});

const deletedEvidence = await client.graphql({
    query: deleteEvidence,
    variables: {
        input: {
            id: "YOUR_RECORD_ID"
        }
    }
});

// List all items
const allEvidences = await client.graphql({
    query: listEvidences
});
console.log(allEvidence);

// Get a specific item
const oneEvidence = await client.graphql({
    query: getEvidence,
    variables: { id: 'YOUR_RECORD_ID' }
});
*/

  /*
***SUSPECT CREATE, DELETE and UPDATE - WIP***

  const newSuspect = await client.graphql({
    query: createSuspect,
    variables: {
        input: {
		"suspectName": "Lorem ipsum dolor sit amet",
		"dateOfBirth": "1970-01-01Z",
		"Gender": Gender.FEMALE,
		"nationality": "Lorem ipsum dolor sit amet",
		"address": "Lorem ipsum dolor sit amet",
		"occupation": "Lorem ipsum dolor sit amet",
		"employer": "Lorem ipsum dolor sit amet",
		"education": "Lorem ipsum dolor sit amet",
		"phone": "(555) 123-6789",
		"email": "test12346789@testemailtestemail.com",
		/*"facebook": Provide init commands,
		"twitter":  Provide init commands ,
		"instagram":  Provide init commands,
		"linkedIn":  Provide init commands ,
		"ticktock":  Provide init commands ,
		"heightinches": 1020,
		"eyecolor": "Lorem ipsum dolor sit amet",
		"tattoos": "Lorem ipsum dolor sit amet",
		"scars": "Lorem ipsum dolor sit amet",
		"criminalrecord": "Lorem ipsum dolor sit amet",
		"legalstatus": "Lorem ipsum dolor sit amet",
		"knownassociates": "Lorem ipsum dolor sit amet",
		"backgroundinformation": "Lorem ipsum dolor sit amet",
		"createdDateTime": 1023123,
		"IsDeleted": true,
		"suspectcaseID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
		"AppCases": []
	}
    }
});

const updatedSuspect = await client.graphql({
    query: updateSuspect,
    variables: {
        input: {
		"suspectName": "Lorem ipsum dolor sit amet",
		"dateOfBirth": "1970-01-01Z",
		"Gender": Gender.FEMALE,
		"nationality": "Lorem ipsum dolor sit amet",
		"address": "Lorem ipsum dolor sit amet",
		"occupation": "Lorem ipsum dolor sit amet",
		"employer": "Lorem ipsum dolor sit amet",
		"education": "Lorem ipsum dolor sit amet",
		"phone": "(555) 123-6789",
		"email": "test12346789@testemailtestemail.com",
		"facebook":  /* Provide init commands,
		"twitter":  /* Provide init commands ,
		"instagram":  /* Provide init commands,
		"linkedIn":  /* Provide init commands ,
		"ticktock":  /* Provide init commands ,
		"heightinches": 1020,
		"eyecolor": "Lorem ipsum dolor sit amet",
		"tattoos": "Lorem ipsum dolor sit amet",
		"scars": "Lorem ipsum dolor sit amet",
		"criminalrecord": "Lorem ipsum dolor sit amet",
		"legalstatus": "Lorem ipsum dolor sit amet",
		"knownassociates": "Lorem ipsum dolor sit amet",
		"backgroundinformation": "Lorem ipsum dolor sit amet",
		"createdDateTime": 1023123,
		"IsDeleted": true,
		"suspectcaseID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
		"AppCases": []
	}
    }
});

const deletedSuspect = await client.graphql({
    query: deleteSuspect,
    variables: {
        input: {
            id: "YOUR_RECORD_ID"
        }
    }
});

// List all items
const allSuspects = await client.graphql({
    query: listSuspects
});
console.log(allSuspect);

// Get a specific item
const oneSuspect = await client.graphql({
    query: getSuspect,
    variables: { id: 'YOUR_RECORD_ID' }
});


*/


  return (
    <View className="App">
      <Heading level={1}>My Notes App</Heading>
      <View as="form" margin="3rem 0" onSubmit={createNote}>
        <Flex direction="row" justifyContent="center">
          <TextField
            name="name"
            placeholder="Note Name"
            label="Note Name"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="description"
            placeholder="Note Description"
            label="Note Description"
            labelHidden
            variation="quiet"
            required
          />
          <View
            name="image"
            as="input"
            type="file"
            style={{ alignSelf: "end" }}
          />
          <Button type="submit" variation="primary">
            Create Note
          </Button>
        </Flex>
      </View>
      <Heading level={2}>Current Notes</Heading>
      <View margin="3rem 0">
        {notes.map((note) => (
          <Flex
            key={note.id || note.name}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Text as="strong" fontWeight={700}>
              {note.name}
            </Text>
            <Text as="span">{note.description}</Text>
            {note.image && (
            <Image
            src={note.image}
            alt={`visual aid for ${notes.name}`}
            style={{ width: 400 }}
            />
            )}
            <Button variation="link" onClick={() => deleteNote(note)}>
              Delete note
            </Button>
          </Flex>
        ))}
      </View>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
};

export default withAuthenticator(App);