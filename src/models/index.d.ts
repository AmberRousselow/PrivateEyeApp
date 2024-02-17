import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum Gender {
  FEMALE = "FEMALE",
  MALE = "MALE",
  UNKNOWN = "UNKNOWN"
}



type EagerSuspect = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Suspect, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly suspectName?: string | null;
  readonly dateOfBirth?: string | null;
  readonly Gender?: Gender | keyof typeof Gender | null;
  readonly nationality?: string | null;
  readonly address?: string | null;
  readonly occupation?: string | null;
  readonly employer?: string | null;
  readonly education?: string | null;
  readonly phone?: string | null;
  readonly email?: string | null;
  readonly facebook?: string | null;
  readonly twitter?: string | null;
  readonly instagram?: string | null;
  readonly linkedIn?: string | null;
  readonly ticktock?: string | null;
  readonly heightinches?: number | null;
  readonly eyecolor?: string | null;
  readonly tattoos?: string | null;
  readonly scars?: string | null;
  readonly criminalrecord?: string | null;
  readonly legalstatus?: string | null;
  readonly knownassociates?: string | null;
  readonly backgroundinformation?: string | null;
  readonly createdDateTime?: number | null;
  readonly IsDeleted?: boolean | null;
  readonly suspectcaseID: string;
  readonly AppCases?: (SuspectAppCase | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySuspect = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Suspect, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly suspectName?: string | null;
  readonly dateOfBirth?: string | null;
  readonly Gender?: Gender | keyof typeof Gender | null;
  readonly nationality?: string | null;
  readonly address?: string | null;
  readonly occupation?: string | null;
  readonly employer?: string | null;
  readonly education?: string | null;
  readonly phone?: string | null;
  readonly email?: string | null;
  readonly facebook?: string | null;
  readonly twitter?: string | null;
  readonly instagram?: string | null;
  readonly linkedIn?: string | null;
  readonly ticktock?: string | null;
  readonly heightinches?: number | null;
  readonly eyecolor?: string | null;
  readonly tattoos?: string | null;
  readonly scars?: string | null;
  readonly criminalrecord?: string | null;
  readonly legalstatus?: string | null;
  readonly knownassociates?: string | null;
  readonly backgroundinformation?: string | null;
  readonly createdDateTime?: number | null;
  readonly IsDeleted?: boolean | null;
  readonly suspectcaseID: string;
  readonly AppCases: AsyncCollection<SuspectAppCase>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Suspect = LazyLoading extends LazyLoadingDisabled ? EagerSuspect : LazySuspect

export declare const Suspect: (new (init: ModelInit<Suspect>) => Suspect) & {
  copyOf(source: Suspect, mutator: (draft: MutableModel<Suspect>) => MutableModel<Suspect> | void): Suspect;
}

type EagerEvidence = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Evidence, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type?: string | null;
  readonly Decription?: string | null;
  readonly url?: string | null;
  readonly createdDateTime?: string | null;
  readonly IsDeleted?: boolean | null;
  readonly appcaseID: string;
  readonly AppCase?: AppCase | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvidence = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Evidence, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type?: string | null;
  readonly Decription?: string | null;
  readonly url?: string | null;
  readonly createdDateTime?: string | null;
  readonly IsDeleted?: boolean | null;
  readonly appcaseID: string;
  readonly AppCase: AsyncItem<AppCase | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Evidence = LazyLoading extends LazyLoadingDisabled ? EagerEvidence : LazyEvidence

export declare const Evidence: (new (init: ModelInit<Evidence>) => Evidence) & {
  copyOf(source: Evidence, mutator: (draft: MutableModel<Evidence>) => MutableModel<Evidence> | void): Evidence;
}

type EagerAppCase = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AppCase, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly createdDateTime?: string | null;
  readonly isDeleted?: boolean | null;
  readonly suspectcaseID: string;
  readonly Evidences?: (Evidence | null)[] | null;
  readonly suspects?: (SuspectAppCase | null)[] | null;
  readonly CaseNote?: CaseNote | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly appCaseCaseNoteId?: string | null;
}

type LazyAppCase = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AppCase, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly createdDateTime?: string | null;
  readonly isDeleted?: boolean | null;
  readonly suspectcaseID: string;
  readonly Evidences: AsyncCollection<Evidence>;
  readonly suspects: AsyncCollection<SuspectAppCase>;
  readonly CaseNote: AsyncItem<CaseNote | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly appCaseCaseNoteId?: string | null;
}

export declare type AppCase = LazyLoading extends LazyLoadingDisabled ? EagerAppCase : LazyAppCase

export declare const AppCase: (new (init: ModelInit<AppCase>) => AppCase) & {
  copyOf(source: AppCase, mutator: (draft: MutableModel<AppCase>) => MutableModel<AppCase> | void): AppCase;
}

type EagerCaseNote = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CaseNote, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly tite: string;
  readonly content?: string | null;
  readonly image?: string | null;
  readonly createDateTime?: string | null;
  readonly AppCase?: AppCase | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly caseNoteAppCaseId?: string | null;
}

type LazyCaseNote = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CaseNote, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly tite: string;
  readonly content?: string | null;
  readonly image?: string | null;
  readonly createDateTime?: string | null;
  readonly AppCase: AsyncItem<AppCase | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly caseNoteAppCaseId?: string | null;
}

export declare type CaseNote = LazyLoading extends LazyLoadingDisabled ? EagerCaseNote : LazyCaseNote

export declare const CaseNote: (new (init: ModelInit<CaseNote>) => CaseNote) & {
  copyOf(source: CaseNote, mutator: (draft: MutableModel<CaseNote>) => MutableModel<CaseNote> | void): CaseNote;
}

type EagerSuspectAppCase = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SuspectAppCase, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly suspectId?: string | null;
  readonly appCaseId?: string | null;
  readonly suspect: Suspect;
  readonly appCase: AppCase;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySuspectAppCase = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SuspectAppCase, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly suspectId?: string | null;
  readonly appCaseId?: string | null;
  readonly suspect: AsyncItem<Suspect>;
  readonly appCase: AsyncItem<AppCase>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SuspectAppCase = LazyLoading extends LazyLoadingDisabled ? EagerSuspectAppCase : LazySuspectAppCase

export declare const SuspectAppCase: (new (init: ModelInit<SuspectAppCase>) => SuspectAppCase) & {
  copyOf(source: SuspectAppCase, mutator: (draft: MutableModel<SuspectAppCase>) => MutableModel<SuspectAppCase> | void): SuspectAppCase;
}