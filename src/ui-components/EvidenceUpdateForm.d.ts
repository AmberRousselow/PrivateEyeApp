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
export declare type EvidenceUpdateFormInputValues = {
    evidence_type?: string;
    evidence_description?: string;
    evidence_url?: string;
    evidence_created_date?: string;
    appcaseID?: string;
};
export declare type EvidenceUpdateFormValidationValues = {
    evidence_type?: ValidationFunction<string>;
    evidence_description?: ValidationFunction<string>;
    evidence_url?: ValidationFunction<string>;
    evidence_created_date?: ValidationFunction<string>;
    appcaseID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EvidenceUpdateFormOverridesProps = {
    EvidenceUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    evidence_type?: PrimitiveOverrideProps<SelectFieldProps>;
    evidence_description?: PrimitiveOverrideProps<TextFieldProps>;
    evidence_url?: PrimitiveOverrideProps<TextFieldProps>;
    evidence_created_date?: PrimitiveOverrideProps<TextFieldProps>;
    appcaseID?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type EvidenceUpdateFormProps = React.PropsWithChildren<{
    overrides?: EvidenceUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    evidence?: any;
    onSubmit?: (fields: EvidenceUpdateFormInputValues) => EvidenceUpdateFormInputValues;
    onSuccess?: (fields: EvidenceUpdateFormInputValues) => void;
    onError?: (fields: EvidenceUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EvidenceUpdateFormInputValues) => EvidenceUpdateFormInputValues;
    onValidate?: EvidenceUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EvidenceUpdateForm(props: EvidenceUpdateFormProps): React.ReactElement;
