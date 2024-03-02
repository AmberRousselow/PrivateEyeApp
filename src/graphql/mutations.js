/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCaseSuspects = /* GraphQL */ `
  mutation CreateCaseSuspects(
    $input: CreateCaseSuspectsInput!
    $condition: ModelCaseSuspectsConditionInput
  ) {
    createCaseSuspects(input: $input, condition: $condition) {
      id
      appcaseID
      suspectID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateCaseSuspects = /* GraphQL */ `
  mutation UpdateCaseSuspects(
    $input: UpdateCaseSuspectsInput!
    $condition: ModelCaseSuspectsConditionInput
  ) {
    updateCaseSuspects(input: $input, condition: $condition) {
      id
      appcaseID
      suspectID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteCaseSuspects = /* GraphQL */ `
  mutation DeleteCaseSuspects(
    $input: DeleteCaseSuspectsInput!
    $condition: ModelCaseSuspectsConditionInput
  ) {
    deleteCaseSuspects(input: $input, condition: $condition) {
      id
      appcaseID
      suspectID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createSuspect = /* GraphQL */ `
  mutation CreateSuspect(
    $input: CreateSuspectInput!
    $condition: ModelSuspectConditionInput
  ) {
    createSuspect(input: $input, condition: $condition) {
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
export const updateSuspect = /* GraphQL */ `
  mutation UpdateSuspect(
    $input: UpdateSuspectInput!
    $condition: ModelSuspectConditionInput
  ) {
    updateSuspect(input: $input, condition: $condition) {
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
export const deleteSuspect = /* GraphQL */ `
  mutation DeleteSuspect(
    $input: DeleteSuspectInput!
    $condition: ModelSuspectConditionInput
  ) {
    deleteSuspect(input: $input, condition: $condition) {
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
export const createEvidence = /* GraphQL */ `
  mutation CreateEvidence(
    $input: CreateEvidenceInput!
    $condition: ModelEvidenceConditionInput
  ) {
    createEvidence(input: $input, condition: $condition) {
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
export const updateEvidence = /* GraphQL */ `
  mutation UpdateEvidence(
    $input: UpdateEvidenceInput!
    $condition: ModelEvidenceConditionInput
  ) {
    updateEvidence(input: $input, condition: $condition) {
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
export const deleteEvidence = /* GraphQL */ `
  mutation DeleteEvidence(
    $input: DeleteEvidenceInput!
    $condition: ModelEvidenceConditionInput
  ) {
    deleteEvidence(input: $input, condition: $condition) {
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
export const createAppCase = /* GraphQL */ `
  mutation CreateAppCase(
    $input: CreateAppCaseInput!
    $condition: ModelAppCaseConditionInput
  ) {
    createAppCase(input: $input, condition: $condition) {
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
export const updateAppCase = /* GraphQL */ `
  mutation UpdateAppCase(
    $input: UpdateAppCaseInput!
    $condition: ModelAppCaseConditionInput
  ) {
    updateAppCase(input: $input, condition: $condition) {
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
export const deleteAppCase = /* GraphQL */ `
  mutation DeleteAppCase(
    $input: DeleteAppCaseInput!
    $condition: ModelAppCaseConditionInput
  ) {
    deleteAppCase(input: $input, condition: $condition) {
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
export const createCaseNote = /* GraphQL */ `
  mutation CreateCaseNote(
    $input: CreateCaseNoteInput!
    $condition: ModelCaseNoteConditionInput
  ) {
    createCaseNote(input: $input, condition: $condition) {
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
export const updateCaseNote = /* GraphQL */ `
  mutation UpdateCaseNote(
    $input: UpdateCaseNoteInput!
    $condition: ModelCaseNoteConditionInput
  ) {
    updateCaseNote(input: $input, condition: $condition) {
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
export const deleteCaseNote = /* GraphQL */ `
  mutation DeleteCaseNote(
    $input: DeleteCaseNoteInput!
    $condition: ModelCaseNoteConditionInput
  ) {
    deleteCaseNote(input: $input, condition: $condition) {
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
