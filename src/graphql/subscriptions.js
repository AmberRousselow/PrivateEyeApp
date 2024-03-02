/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCaseSuspects = /* GraphQL */ `
  subscription OnCreateCaseSuspects(
    $filter: ModelSubscriptionCaseSuspectsFilterInput
  ) {
    onCreateCaseSuspects(filter: $filter) {
      id
      appcaseID
      suspectID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateCaseSuspects = /* GraphQL */ `
  subscription OnUpdateCaseSuspects(
    $filter: ModelSubscriptionCaseSuspectsFilterInput
  ) {
    onUpdateCaseSuspects(filter: $filter) {
      id
      appcaseID
      suspectID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteCaseSuspects = /* GraphQL */ `
  subscription OnDeleteCaseSuspects(
    $filter: ModelSubscriptionCaseSuspectsFilterInput
  ) {
    onDeleteCaseSuspects(filter: $filter) {
      id
      appcaseID
      suspectID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateSuspect = /* GraphQL */ `
  subscription OnCreateSuspect($filter: ModelSubscriptionSuspectFilterInput) {
    onCreateSuspect(filter: $filter) {
      id
      suspect_name
      suspect_date_of_birth
      suspect_gender
      suspect_nationality
      suspect_address
      suspect_occupation
      suspect_employer
      suspect_education
      suspect_phone
      suspect_email
      suspect_facebook
      suspect_twitter
      suspect_instagram
      suspect_linkedIn
      suspect_ticktock
      suspect_height_inches
      suspect_eyecolor
      suspect_tattoos
      suspect_scars
      suspect_criminal_record
      suspect_legal_status
      suspect_known_associates
      suspect_background_information
      suspect_created_date
      CaseSuspects {
        items {
          id
          appcaseID
          suspectID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateSuspect = /* GraphQL */ `
  subscription OnUpdateSuspect($filter: ModelSubscriptionSuspectFilterInput) {
    onUpdateSuspect(filter: $filter) {
      id
      suspect_name
      suspect_date_of_birth
      suspect_gender
      suspect_nationality
      suspect_address
      suspect_occupation
      suspect_employer
      suspect_education
      suspect_phone
      suspect_email
      suspect_facebook
      suspect_twitter
      suspect_instagram
      suspect_linkedIn
      suspect_ticktock
      suspect_height_inches
      suspect_eyecolor
      suspect_tattoos
      suspect_scars
      suspect_criminal_record
      suspect_legal_status
      suspect_known_associates
      suspect_background_information
      suspect_created_date
      CaseSuspects {
        items {
          id
          appcaseID
          suspectID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteSuspect = /* GraphQL */ `
  subscription OnDeleteSuspect($filter: ModelSubscriptionSuspectFilterInput) {
    onDeleteSuspect(filter: $filter) {
      id
      suspect_name
      suspect_date_of_birth
      suspect_gender
      suspect_nationality
      suspect_address
      suspect_occupation
      suspect_employer
      suspect_education
      suspect_phone
      suspect_email
      suspect_facebook
      suspect_twitter
      suspect_instagram
      suspect_linkedIn
      suspect_ticktock
      suspect_height_inches
      suspect_eyecolor
      suspect_tattoos
      suspect_scars
      suspect_criminal_record
      suspect_legal_status
      suspect_known_associates
      suspect_background_information
      suspect_created_date
      CaseSuspects {
        items {
          id
          appcaseID
          suspectID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateEvidence = /* GraphQL */ `
  subscription OnCreateEvidence($filter: ModelSubscriptionEvidenceFilterInput) {
    onCreateEvidence(filter: $filter) {
      id
      evidence_type
      evidence_description
      evidence_url
      evidence_created_date
      appcaseID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateEvidence = /* GraphQL */ `
  subscription OnUpdateEvidence($filter: ModelSubscriptionEvidenceFilterInput) {
    onUpdateEvidence(filter: $filter) {
      id
      evidence_type
      evidence_description
      evidence_url
      evidence_created_date
      appcaseID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteEvidence = /* GraphQL */ `
  subscription OnDeleteEvidence($filter: ModelSubscriptionEvidenceFilterInput) {
    onDeleteEvidence(filter: $filter) {
      id
      evidence_type
      evidence_description
      evidence_url
      evidence_created_date
      appcaseID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateAppCase = /* GraphQL */ `
  subscription OnCreateAppCase($filter: ModelSubscriptionAppCaseFilterInput) {
    onCreateAppCase(filter: $filter) {
      id
      case_title
      case_description
      case_created_date
      case_offense
      case_offense_category
      Evidences {
        items {
          id
          evidence_type
          evidence_description
          evidence_url
          evidence_created_date
          appcaseID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      CaseNotes {
        items {
          id
          note_title
          note_content
          note_create_date
          appcaseID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      CaseSuspects {
        items {
          id
          appcaseID
          suspectID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateAppCase = /* GraphQL */ `
  subscription OnUpdateAppCase($filter: ModelSubscriptionAppCaseFilterInput) {
    onUpdateAppCase(filter: $filter) {
      id
      case_title
      case_description
      case_created_date
      case_offense
      case_offense_category
      Evidences {
        items {
          id
          evidence_type
          evidence_description
          evidence_url
          evidence_created_date
          appcaseID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      CaseNotes {
        items {
          id
          note_title
          note_content
          note_create_date
          appcaseID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      CaseSuspects {
        items {
          id
          appcaseID
          suspectID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteAppCase = /* GraphQL */ `
  subscription OnDeleteAppCase($filter: ModelSubscriptionAppCaseFilterInput) {
    onDeleteAppCase(filter: $filter) {
      id
      case_title
      case_description
      case_created_date
      case_offense
      case_offense_category
      Evidences {
        items {
          id
          evidence_type
          evidence_description
          evidence_url
          evidence_created_date
          appcaseID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      CaseNotes {
        items {
          id
          note_title
          note_content
          note_create_date
          appcaseID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      CaseSuspects {
        items {
          id
          appcaseID
          suspectID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateCaseNote = /* GraphQL */ `
  subscription OnCreateCaseNote($filter: ModelSubscriptionCaseNoteFilterInput) {
    onCreateCaseNote(filter: $filter) {
      id
      note_title
      note_content
      note_create_date
      appcaseID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateCaseNote = /* GraphQL */ `
  subscription OnUpdateCaseNote($filter: ModelSubscriptionCaseNoteFilterInput) {
    onUpdateCaseNote(filter: $filter) {
      id
      note_title
      note_content
      note_create_date
      appcaseID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteCaseNote = /* GraphQL */ `
  subscription OnDeleteCaseNote($filter: ModelSubscriptionCaseNoteFilterInput) {
    onDeleteCaseNote(filter: $filter) {
      id
      note_title
      note_content
      note_create_date
      appcaseID
      createdAt
      updatedAt
      __typename
    }
  }
`;
