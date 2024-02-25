
import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import {
  AppCaseCreateForm,
  EvidenceCreateForm, 
  SuspectCreateForm, 
  MarketingFooter
} from './ui-components';
import {
  Button,
  Flex,
  Heading,
  Text,
  View,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import {
  listAppCases, getAppCase,
  listSuspects, getSuspects,
  listEvidences, getEvidence,
  listCaseNotes, getCaseNote,
  listCaseSuspects, getCaseSuspects,
} from "./graphql/queries";
import {
  /* createTodo as createNoteMutation,
   deleteTodo as deleteNoteMutation,*/
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
  deleteCaseNote,
  createCaseSuspects,
  updateCaseSuspects,
  deleteCaseSuspects
} from "./graphql/mutations";
import { generateClient } from 'aws-amplify/api';

const client = generateClient();


const App = ({ signOut }) => {
  const [appcases, setAppCases] = useState([]);

  useEffect(() => {
    /*fetchNotes();*/
    fetchAppCases();
  }, []);
  /*
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
    */

  async function fetchAppCases() {
    const apiData = await client.graphql({ query: listAppCases });
    const appCasesFromAPI = apiData.data.listAppCases.items;
    await Promise.all(
      appCasesFromAPI.map(async (appcase) => {
        /*if (appcase.image) {
          const url = await Storage.get(appcase.name);
          appcase.image = url;
        }*/
        return appcase;
      })
    );
    setAppCases(appCasesFromAPI);
  }

  /* APPCASE WIP
  const newAppCase = await client.graphql({
     query: createAppCase,
     variables: {
         input: {
     "case_title": "Lorem ipsum dolor sit amet",
     "case_description": "Lorem ipsum dolor sit amet",
     "case_created_date": "1970-01-01Z",
     "case_offense": CaseOffense.FELONY,
     "case_offense_category": OffenseCategory.PERSON,
     "Evidences": [],
     "CaseNotes": [],
     "CaseSuspects": []
   }
     }
 });
 
 const updatedAppCase = await client.graphql({
     query: updateAppCase,
     variables: {
         input: {
     "case_title": "Lorem ipsum dolor sit amet",
     "case_description": "Lorem ipsum dolor sit amet",
     "case_created_date": "1970-01-01Z",
     "case_offense": CaseOffense.FELONY,
     "case_offense_category": OffenseCategory.PERSON,
     "Evidences": [],
     "CaseNotes": [],
     "CaseSuspects": []
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
 
 /*
 CaseNote CREATE, DELETE and UPDATE - WIP
 const newCaseNote = await client.graphql({
     query: createCaseNote,
     variables: {
         input: {
     "note_title": "Lorem ipsum dolor sit amet",
     "note_content": "Lorem ipsum dolor sit amet",
     "note_create_date": "1970-01-01Z",
     "appcaseID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d"
   }
     }
 });
 
 const updatedCaseNote = await client.graphql({
     query: updateCaseNote,
     variables: {
         input: {
     "note_title": "Lorem ipsum dolor sit amet",
     "note_content": "Lorem ipsum dolor sit amet",
     "note_create_date": "1970-01-01Z",
     "appcaseID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d"
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

  /* EVIDENCE WIP
 
 const newEvidence = await client.graphql({
     query: createEvidence,
     variables: {
         input: {
     "evidence_type": EvidenceType.DOCUMENT,
     "evidence_description": "Lorem ipsum dolor sit amet",
     "evidence_url": "Lorem ipsum dolor sit amet",
     "evidence_created_date": "1970-01-01Z",
     "appcaseID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d"
   }
     }
 });
 
 const updatedEvidence = await client.graphql({
     query: updateEvidence,
     variables: {
         input: {
     "evidence_type": EvidenceType.DOCUMENT,
     "evidence_description": "Lorem ipsum dolor sit amet",
     "evidence_url": "Lorem ipsum dolor sit amet",
     "evidence_created_date": "1970-01-01Z",
     "appcaseID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d"
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

  /* SUSPECT WIP

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
    "facebook":  Provide init commands ,
    "twitter":  Provide init commands ,
    "instagram":   Provide init commands ,
    "linkedIn":   Provide init commands ,
    "ticktock":   Provide init commands ,
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
    "suspect_name": "Lorem ipsum dolor sit amet",
    "suspect_date_of_birth": "1970-01-01Z",
    "suspect_gender": Gender.FEMALE,
    "suspect_nationality": "Lorem ipsum dolor sit amet",
    "suspect_address": "Lorem ipsum dolor sit amet",
    "suspect_occupation": "Lorem ipsum dolor sit amet",
    "suspect_employer": "Lorem ipsum dolor sit amet",
    "suspect_education": "Lorem ipsum dolor sit amet",
    "suspect_phone": "(555) 123-6789",
    "suspect_email": "test12346789@testemailtestemail.com",
    "suspect_facebook":  /* Provide init commands ,
    "suspect_twitter":  /* Provide init commands ,
    "suspect_instagram":  /* Provide init commands ,
    "suspect_linkedIn":  /* Provide init commands ,
    "suspect_ticktock":  /* Provide init commands ,
    "suspect_height_inches": 1020,
    "suspect_eyecolor": "Lorem ipsum dolor sit amet",
    "suspect_tattoos": "Lorem ipsum dolor sit amet",
    "suspect_scars": "Lorem ipsum dolor sit amet",
    "suspect_criminal_record": "Lorem ipsum dolor sit amet",
    "suspect_legal_status": "Lorem ipsum dolor sit amet",
    "suspect_known_associates": "Lorem ipsum dolor sit amet",
    "suspect_background_information": "Lorem ipsum dolor sit amet",
    "suspect_created_date": "1970-01-01Z",
    "CaseSuspects": []
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

  /* CASESUSPECTS WIP
  const newCaseSuspects = await client.graphql({
    query: createCaseSuspects,
    variables: {
        input: {
    "appcaseID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
    "suspectID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d"
  }
    }
  });
  
  const updatedCaseSuspects = await client.graphql({
    query: updateCaseSuspects,
    variables: {
        input: {
    "appcaseID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
    "suspectID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d"
  }
    }
  });
  
  const deletedCaseSuspects = await client.graphql({
    query: deleteCaseSuspects,
    variables: {
        input: {
            id: "YOUR_RECORD_ID"
        }
    }
  });
  
  // List all items
  const allCaseSuspectss = await client.graphql({
    query: listCaseSuspectss
  });
  console.log(allCaseSuspects);
  
  // Get a specific item
  const oneCaseSuspects = await client.graphql({
    query: getCaseSuspects,
    variables: { id: 'YOUR_RECORD_ID' }
  });*/

  //Render on page
  return (
    <View className="App">
      <Heading level={1}>Private Eye App</Heading>
      <View>
        <Flex>
          <AppCaseCreateForm
            onSubmit={(fields) => {
              // Example function to trim all string inputs
              const updatedFields = {}
              Object.keys(fields).forEach(key => {
                if (typeof fields[key] === 'string') {
                  updatedFields[key] = fields[key].trim()
                } else {
                  updatedFields[key] = fields[key]
                }
              })
              return updatedFields
            }}
          />
          <SuspectCreateForm 
          onSubmit={(fields) => {
            // Example function to trim all string inputs
            const updatedFields = {}
            Object.keys(fields).forEach(key => {
              if (typeof fields[key] === 'string') {
                updatedFields[key] = fields[key].trim()
              } else {
                updatedFields[key] = fields[key]
              }
            })
            return updatedFields
          }}
        />
        </Flex>
      </View>
      <Heading level={2}>Current Cases</Heading>
      <View margin="3rem 0">
        {appcases.map((appcase) => (
          <Flex
            key={appcase.id}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Text as="strong" fontWeight={700}>
              {appcase.case_title}
            </Text>
            <Text as="span">{appcase.case_description}</Text>
            <Text as="span">{appcase.case_created_date}</Text>
            <Text as="span">{appcase.case_offense}</Text>
            <Text as="span">{appcase.case_offense_category}</Text>
            <Button variation="link" onClick={() => deleteAppCase(appcase)}>
              Delete Case
            </Button>
          </Flex>
        ))}
      </View>
      <Button onClick={signOut}>Sign Out</Button>
      <View margin="3rem 0">
        <MarketingFooter />
      </View>
    </View>
  );
};

export default withAuthenticator(App);