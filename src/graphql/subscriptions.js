/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSuspect = /* GraphQL */ `
  subscription OnCreateSuspect($filter: ModelSubscriptionSuspectFilterInput) {
    onCreateSuspect(filter: $filter) {
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
export const onUpdateSuspect = /* GraphQL */ `
  subscription OnUpdateSuspect($filter: ModelSubscriptionSuspectFilterInput) {
    onUpdateSuspect(filter: $filter) {
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
export const onDeleteSuspect = /* GraphQL */ `
  subscription OnDeleteSuspect($filter: ModelSubscriptionSuspectFilterInput) {
    onDeleteSuspect(filter: $filter) {
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
export const onCreateEvidence = /* GraphQL */ `
  subscription OnCreateEvidence($filter: ModelSubscriptionEvidenceFilterInput) {
    onCreateEvidence(filter: $filter) {
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
export const onUpdateEvidence = /* GraphQL */ `
  subscription OnUpdateEvidence($filter: ModelSubscriptionEvidenceFilterInput) {
    onUpdateEvidence(filter: $filter) {
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
export const onDeleteEvidence = /* GraphQL */ `
  subscription OnDeleteEvidence($filter: ModelSubscriptionEvidenceFilterInput) {
    onDeleteEvidence(filter: $filter) {
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
export const onCreateAppCase = /* GraphQL */ `
  subscription OnCreateAppCase($filter: ModelSubscriptionAppCaseFilterInput) {
    onCreateAppCase(filter: $filter) {
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
export const onUpdateAppCase = /* GraphQL */ `
  subscription OnUpdateAppCase($filter: ModelSubscriptionAppCaseFilterInput) {
    onUpdateAppCase(filter: $filter) {
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
export const onDeleteAppCase = /* GraphQL */ `
  subscription OnDeleteAppCase($filter: ModelSubscriptionAppCaseFilterInput) {
    onDeleteAppCase(filter: $filter) {
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
export const onCreateCaseNote = /* GraphQL */ `
  subscription OnCreateCaseNote($filter: ModelSubscriptionCaseNoteFilterInput) {
    onCreateCaseNote(filter: $filter) {
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
export const onUpdateCaseNote = /* GraphQL */ `
  subscription OnUpdateCaseNote($filter: ModelSubscriptionCaseNoteFilterInput) {
    onUpdateCaseNote(filter: $filter) {
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
export const onDeleteCaseNote = /* GraphQL */ `
  subscription OnDeleteCaseNote($filter: ModelSubscriptionCaseNoteFilterInput) {
    onDeleteCaseNote(filter: $filter) {
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
