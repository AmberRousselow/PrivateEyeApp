/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCaseSuspects = /* GraphQL */ `
  query GetCaseSuspects($id: ID!) {
    getCaseSuspects(id: $id) {
      id
      appcaseID
      suspectID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCaseSuspects = /* GraphQL */ `
  query ListCaseSuspects(
    $filter: ModelCaseSuspectsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCaseSuspects(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const caseSuspectsByAppcaseID = /* GraphQL */ `
  query CaseSuspectsByAppcaseID(
    $appcaseID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCaseSuspectsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    caseSuspectsByAppcaseID(
      appcaseID: $appcaseID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const caseSuspectsBySuspectID = /* GraphQL */ `
  query CaseSuspectsBySuspectID(
    $suspectID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCaseSuspectsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    caseSuspectsBySuspectID(
      suspectID: $suspectID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getSuspect = /* GraphQL */ `
  query GetSuspect($id: ID!) {
    getSuspect(id: $id) {
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
export const listSuspects = /* GraphQL */ `
  query ListSuspects(
    $filter: ModelSuspectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSuspects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getEvidence = /* GraphQL */ `
  query GetEvidence($id: ID!) {
    getEvidence(id: $id) {
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
export const listEvidences = /* GraphQL */ `
  query ListEvidences(
    $filter: ModelEvidenceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvidences(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const evidencesByAppcaseID = /* GraphQL */ `
  query EvidencesByAppcaseID(
    $appcaseID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelEvidenceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    evidencesByAppcaseID(
      appcaseID: $appcaseID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getAppCase = /* GraphQL */ `
  query GetAppCase($id: ID!) {
    getAppCase(id: $id) {
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
      case_status
      case_number
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listAppCases = /* GraphQL */ `
  query ListAppCases(
    $filter: ModelAppCaseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAppCases(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        case_status
        case_number
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCaseNote = /* GraphQL */ `
  query GetCaseNote($id: ID!) {
    getCaseNote(id: $id) {
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
export const listCaseNotes = /* GraphQL */ `
  query ListCaseNotes(
    $filter: ModelCaseNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCaseNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const caseNotesByAppcaseID = /* GraphQL */ `
  query CaseNotesByAppcaseID(
    $appcaseID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCaseNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    caseNotesByAppcaseID(
      appcaseID: $appcaseID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
