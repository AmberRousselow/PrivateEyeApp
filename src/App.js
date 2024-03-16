
import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import logoHead from './Images/PElogo.png'; 
import textLogoHead from './Images/PElogoText.png'; 
import ladyAvatar from './Images/ai-generated-8534133_1280.jpg'; 
import {
  CaseCardCollection,
  MarketingFooterBrand,
  NavBarHeader,
  NewCaseCreateForm,
} from './ui-components';
import {
  Button,
  Flex,
  Heading,
  View,
  withAuthenticator,
  Icon,
  Grid
} from "@aws-amplify/ui-react";
import {
  listAppCases
} from "./graphql/queries";
import { generateClient } from 'aws-amplify/api';

const client = generateClient();

const App = ({ signOut }) => {

  const [appcases, setAppCases] = useState([]);

  const navbarOverrides = {
    "imagelogo": {
      src: textLogoHead ,// app logo
    },
    "textlogo": {
      src: logoHead,// textlogo
    },
    "avatar": {
      src: ladyAvatar, // profile image
    },
  };

  async function fetchAppCases() {
    const apiData = await client.graphql({ query: listAppCases });
    const appCasesFromAPI = apiData.data.listAppCases.items;
    await Promise.all(
      appCasesFromAPI.map(async (appcase) => {
        return appcase;
      })
    );
    setAppCases(appCasesFromAPI);
  }

  useEffect(() => {
    fetchAppCases();
  }, []);

  const [showCreateCase, setShowCreateCase] = useState(false);

// Function to toggle visibility
const toggleCreateCase = () => {
  setShowCreateCase(!showCreateCase);
};


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
      <NavBarHeader overrides={navbarOverrides} width={"100vw"} marginTop={"20p"} marginBottom={"20px"}></NavBarHeader>
      <View
        style={{
          flex: 2,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Flex
                direction="Column"
                justifyContent="Center"
                alignItems="Center" >
                  
        <Heading level={2} marginBottom={"5px"}>Create Case</Heading>
        <NewCaseCreateForm marginBlock={"5px"}>
        </NewCaseCreateForm>
        </Flex>
        
      </View>
      <Flex
        direction="Column"
        justifyContent="Center"
        alignItems="Center" >
        <Heading level={2} marginTop={"40px"} marginBottom={"40px"}>Current Cases</Heading>
        <CaseCardCollection >
        </CaseCardCollection>
      </Flex>
      <MarketingFooterBrand width={"100vw"}>
      </MarketingFooterBrand>
      
    </View>
  );
};

export default withAuthenticator(App);