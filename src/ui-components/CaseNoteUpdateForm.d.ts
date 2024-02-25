/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CaseNoteUpdateFormInputValues = {
    note_title?: string;
    note_content?: string;
    note_create_date?: string;
    appcaseID?: string;
};
export declare type CaseNoteUpdateFormValidationValues = {
    note_title?: ValidationFunction<string>;
    note_content?: ValidationFunction<string>;
    note_create_date?: ValidationFunction<string>;
    appcaseID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CaseNoteUpdateFormOverridesProps = {
    CaseNoteUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    note_title?: PrimitiveOverrideProps<TextFieldProps>;
    note_content?: PrimitiveOverrideProps<TextFieldProps>;
    note_create_date?: PrimitiveOverrideProps<TextFieldProps>;
    appcaseID?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type CaseNoteUpdateFormProps = React.PropsWithChildren<{
    overrides?: CaseNoteUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    caseNote?: any;
    onSubmit?: (fields: CaseNoteUpdateFormInputValues) => CaseNoteUpdateFormInputValues;
    onSuccess?: (fields: CaseNoteUpdateFormInputValues) => void;
    onError?: (fields: CaseNoteUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CaseNoteUpdateFormInputValues) => CaseNoteUpdateFormInputValues;
    onValidate?: CaseNoteUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CaseNoteUpdateForm(props: CaseNoteUpdateFormProps): React.ReactElement;
