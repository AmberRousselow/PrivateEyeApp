// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Gender = {
  "FEMALE": "FEMALE",
  "MALE": "MALE",
  "UNKNOWN": "UNKNOWN"
};

const { Suspect, Evidence, AppCase, CaseNote, SuspectAppCase } = initSchema(schema);

export {
  Suspect,
  Evidence,
  AppCase,
  CaseNote,
  SuspectAppCase,
  Gender
};