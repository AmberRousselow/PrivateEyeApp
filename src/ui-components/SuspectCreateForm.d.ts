/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type SuspectCreateFormInputValues = {
    suspect_name?: string;
    suspect_date_of_birth?: string;
    suspect_gender?: string;
    suspect_nationality?: string;
    suspect_address?: string;
    suspect_occupation?: string;
    suspect_employer?: string;
    suspect_education?: string;
    suspect_phone?: string;
    suspect_email?: string;
    suspect_facebook?: string;
    suspect_twitter?: string;
    suspect_instagram?: string;
    suspect_linkedIn?: string;
    suspect_ticktock?: string;
    suspect_height_inches?: number;
    suspect_eyecolor?: string;
    suspect_tattoos?: string;
    suspect_scars?: string;
    suspect_criminal_record?: string;
    suspect_legal_status?: string;
    suspect_known_associates?: string;
    suspect_background_information?: string;
    suspect_created_date?: string;
    CaseSuspects?: any[];
};
export declare type SuspectCreateFormValidationValues = {
    suspect_name?: ValidationFunction<string>;
    suspect_date_of_birth?: ValidationFunction<string>;
    suspect_gender?: ValidationFunction<string>;
    suspect_nationality?: ValidationFunction<string>;
    suspect_address?: ValidationFunction<string>;
    suspect_occupation?: ValidationFunction<string>;
    suspect_employer?: ValidationFunction<string>;
    suspect_education?: ValidationFunction<string>;
    suspect_phone?: ValidationFunction<string>;
    suspect_email?: ValidationFunction<string>;
    suspect_facebook?: ValidationFunction<string>;
    suspect_twitter?: ValidationFunction<string>;
    suspect_instagram?: ValidationFunction<string>;
    suspect_linkedIn?: ValidationFunction<string>;
    suspect_ticktock?: ValidationFunction<string>;
    suspect_height_inches?: ValidationFunction<number>;
    suspect_eyecolor?: ValidationFunction<string>;
    suspect_tattoos?: ValidationFunction<string>;
    suspect_scars?: ValidationFunction<string>;
    suspect_criminal_record?: ValidationFunction<string>;
    suspect_legal_status?: ValidationFunction<string>;
    suspect_known_associates?: ValidationFunction<string>;
    suspect_background_information?: ValidationFunction<string>;
    suspect_created_date?: ValidationFunction<string>;
    CaseSuspects?: ValidationFunction<any>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SuspectCreateFormOverridesProps = {
    SuspectCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    suspect_name?: PrimitiveOverrideProps<TextFieldProps>;
    suspect_date_of_birth?: PrimitiveOverrideProps<TextFieldProps>;
    suspect_gender?: PrimitiveOverrideProps<SelectFieldProps>;
    suspect_nationality?: PrimitiveOverrideProps<TextFieldProps>;
    suspect_address?: PrimitiveOverrideProps<TextFieldProps>;
    suspect_occupation?: PrimitiveOverrideProps<TextFieldProps>;
    suspect_employer?: PrimitiveOverrideProps<TextFieldProps>;
    suspect_education?: PrimitiveOverrideProps<TextFieldProps>;
    suspect_phone?: PrimitiveOverrideProps<TextFieldProps>;
    suspect_email?: PrimitiveOverrideProps<TextFieldProps>;
    suspect_facebook?: PrimitiveOverrideProps<TextFieldProps>;
    suspect_twitter?: PrimitiveOverrideProps<TextFieldProps>;
    suspect_instagram?: PrimitiveOverrideProps<TextFieldProps>;
    suspect_linkedIn?: PrimitiveOverrideProps<TextFieldProps>;
    suspect_ticktock?: PrimitiveOverrideProps<TextFieldProps>;
    suspect_height_inches?: PrimitiveOverrideProps<TextFieldProps>;
    suspect_eyecolor?: PrimitiveOverrideProps<TextFieldProps>;
    suspect_tattoos?: PrimitiveOverrideProps<TextFieldProps>;
    suspect_scars?: PrimitiveOverrideProps<TextFieldProps>;
    suspect_criminal_record?: PrimitiveOverrideProps<TextFieldProps>;
    suspect_legal_status?: PrimitiveOverrideProps<TextFieldProps>;
    suspect_known_associates?: PrimitiveOverrideProps<TextFieldProps>;
    suspect_background_information?: PrimitiveOverrideProps<TextFieldProps>;
    suspect_created_date?: PrimitiveOverrideProps<TextFieldProps>;
    CaseSuspects?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type SuspectCreateFormProps = React.PropsWithChildren<{
    overrides?: SuspectCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SuspectCreateFormInputValues) => SuspectCreateFormInputValues;
    onSuccess?: (fields: SuspectCreateFormInputValues) => void;
    onError?: (fields: SuspectCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SuspectCreateFormInputValues) => SuspectCreateFormInputValues;
    onValidate?: SuspectCreateFormValidationValues;
} & React.CSSProperties>;
export default function SuspectCreateForm(props: SuspectCreateFormProps): React.ReactElement;
