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
export declare type EvidenceCreateFormInputValues = {
    evidence_type?: string;
    evidence_description?: string;
    evidence_url?: string;
    evidence_created_date?: string;
    appcaseID?: string;
};
export declare type EvidenceCreateFormValidationValues = {
    evidence_type?: ValidationFunction<string>;
    evidence_description?: ValidationFunction<string>;
    evidence_url?: ValidationFunction<string>;
    evidence_created_date?: ValidationFunction<string>;
    appcaseID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EvidenceCreateFormOverridesProps = {
    EvidenceCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    evidence_type?: PrimitiveOverrideProps<SelectFieldProps>;
    evidence_description?: PrimitiveOverrideProps<TextFieldProps>;
    evidence_url?: PrimitiveOverrideProps<TextFieldProps>;
    evidence_created_date?: PrimitiveOverrideProps<TextFieldProps>;
    appcaseID?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type EvidenceCreateFormProps = React.PropsWithChildren<{
    overrides?: EvidenceCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: EvidenceCreateFormInputValues) => EvidenceCreateFormInputValues;
    onSuccess?: (fields: EvidenceCreateFormInputValues) => void;
    onError?: (fields: EvidenceCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EvidenceCreateFormInputValues) => EvidenceCreateFormInputValues;
    onValidate?: EvidenceCreateFormValidationValues;
} & React.CSSProperties>;
export default function EvidenceCreateForm(props: EvidenceCreateFormProps): React.ReactElement;
