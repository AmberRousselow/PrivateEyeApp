/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSuspect = /* GraphQL */ `
  mutation CreateSuspect(
    $input: CreateSuspectInput!
    $condition: ModelSuspectConditionInput
  ) {
    createSuspect(input: $input, condition: $condition) {
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
export const updateSuspect = /* GraphQL */ `
  mutation UpdateSuspect(
    $input: UpdateSuspectInput!
    $condition: ModelSuspectConditionInput
  ) {
    updateSuspect(input: $input, condition: $condition) {
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
export const deleteSuspect = /* GraphQL */ `
  mutation DeleteSuspect(
    $input: DeleteSuspectInput!
    $condition: ModelSuspectConditionInput
  ) {
    deleteSuspect(input: $input, condition: $condition) {
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
export const createEvidence = /* GraphQL */ `
  mutation CreateEvidence(
    $input: CreateEvidenceInput!
    $condition: ModelEvidenceConditionInput
  ) {
    createEvidence(input: $input, condition: $condition) {
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
export const updateEvidence = /* GraphQL */ `
  mutation UpdateEvidence(
    $input: UpdateEvidenceInput!
    $condition: ModelEvidenceConditionInput
  ) {
    updateEvidence(input: $input, condition: $condition) {
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
export const deleteEvidence = /* GraphQL */ `
  mutation DeleteEvidence(
    $input: DeleteEvidenceInput!
    $condition: ModelEvidenceConditionInput
  ) {
    deleteEvidence(input: $input, condition: $condition) {
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
export const createAppCase = /* GraphQL */ `
  mutation CreateAppCase(
    $input: CreateAppCaseInput!
    $condition: ModelAppCaseConditionInput
  ) {
    createAppCase(input: $input, condition: $condition) {
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
export const updateAppCase = /* GraphQL */ `
  mutation UpdateAppCase(
    $input: UpdateAppCaseInput!
    $condition: ModelAppCaseConditionInput
  ) {
    updateAppCase(input: $input, condition: $condition) {
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
export const deleteAppCase = /* GraphQL */ `
  mutation DeleteAppCase(
    $input: DeleteAppCaseInput!
    $condition: ModelAppCaseConditionInput
  ) {
    deleteAppCase(input: $input, condition: $condition) {
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
export const createCaseNote = /* GraphQL */ `
  mutation CreateCaseNote(
    $input: CreateCaseNoteInput!
    $condition: ModelCaseNoteConditionInput
  ) {
    createCaseNote(input: $input, condition: $condition) {
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
export const updateCaseNote = /* GraphQL */ `
  mutation UpdateCaseNote(
    $input: UpdateCaseNoteInput!
    $condition: ModelCaseNoteConditionInput
  ) {
    updateCaseNote(input: $input, condition: $condition) {
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
export const deleteCaseNote = /* GraphQL */ `
  mutation DeleteCaseNote(
    $input: DeleteCaseNoteInput!
    $condition: ModelCaseNoteConditionInput
  ) {
    deleteCaseNote(input: $input, condition: $condition) {
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
