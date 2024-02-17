/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
    type?: string;
    Decription?: string;
    url?: string;
    createdDateTime?: string;
    IsDeleted?: boolean;
    appcaseID?: string;
};
export declare type EvidenceCreateFormValidationValues = {
    type?: ValidationFunction<string>;
    Decription?: ValidationFunction<string>;
    url?: ValidationFunction<string>;
    createdDateTime?: ValidationFunction<string>;
    IsDeleted?: ValidationFunction<boolean>;
    appcaseID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EvidenceCreateFormOverridesProps = {
    EvidenceCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    Decription?: PrimitiveOverrideProps<TextFieldProps>;
    url?: PrimitiveOverrideProps<TextFieldProps>;
    createdDateTime?: PrimitiveOverrideProps<TextFieldProps>;
    IsDeleted?: PrimitiveOverrideProps<SwitchFieldProps>;
    appcaseID?: PrimitiveOverrideProps<TextFieldProps>;
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
