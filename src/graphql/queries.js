/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSuspect = /* GraphQL */ `
  query GetSuspect($id: ID!) {
    getSuspect(id: $id) {
      id
      suspectName
      dateOfBirth
      Gender
      nationality
      address
      occupation
      employer
      education
      phone
      email
      facebook
      twitter
      instagram
      linkedIn
      ticktock
      heightinches
      eyecolor
      tattoos
      scars
      criminalrecord
      legalstatus
      knownassociates
      backgroundinformation
      createdDateTime
      IsDeleted
      suspectcaseID
      AppCases {
        id
        title
        description
        createdDateTime
        isDeleted
        suspectcaseID
        createdAt
        updatedAt
        appCaseCaseNoteId
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
        suspectName
        dateOfBirth
        Gender
        nationality
        address
        occupation
        employer
        education
        phone
        email
        facebook
        twitter
        instagram
        linkedIn
        ticktock
        heightinches
        eyecolor
        tattoos
        scars
        criminalrecord
        legalstatus
        knownassociates
        backgroundinformation
        createdDateTime
        IsDeleted
        suspectcaseID
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
      type
      Decription
      url
      createdDateTime
      IsDeleted
      appcaseID
      AppCase {
        id
        title
        description
        createdDateTime
        isDeleted
        suspectcaseID
        createdAt
        updatedAt
        appCaseCaseNoteId
        __typename
      }
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
        type
        Decription
        url
        createdDateTime
        IsDeleted
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
      title
      description
      createdDateTime
      isDeleted
      suspectcaseID
      Evidences {
        id
        type
        Decription
        url
        createdDateTime
        IsDeleted
        appcaseID
        createdAt
        updatedAt
        __typename
      }
      suspects {
        id
        suspectName
        dateOfBirth
        Gender
        nationality
        address
        occupation
        employer
        education
        phone
        email
        facebook
        twitter
        instagram
        linkedIn
        ticktock
        heightinches
        eyecolor
        tattoos
        scars
        criminalrecord
        legalstatus
        knownassociates
        backgroundinformation
        createdDateTime
        IsDeleted
        suspectcaseID
        createdAt
        updatedAt
        __typename
      }
      CaseNote {
        id
        tite
        content
        image
        createDateTime
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      appCaseCaseNoteId
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
        title
        description
        createdDateTime
        isDeleted
        suspectcaseID
        createdAt
        updatedAt
        appCaseCaseNoteId
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
      tite
      content
      image
      createDateTime
      AppCase {
        id
        title
        description
        createdDateTime
        isDeleted
        suspectcaseID
        createdAt
        updatedAt
        appCaseCaseNoteId
        __typename
      }
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
        tite
        content
        image
        createDateTime
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
