/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type CaseNoteCreateFormInputValues = {
    tite?: string;
    content?: string;
    image?: string;
    createDateTime?: string;
};
export declare type CaseNoteCreateFormValidationValues = {
    tite?: ValidationFunction<string>;
    content?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    createDateTime?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CaseNoteCreateFormOverridesProps = {
    CaseNoteCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    tite?: PrimitiveOverrideProps<TextFieldProps>;
    content?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    createDateTime?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CaseNoteCreateFormProps = React.PropsWithChildren<{
    overrides?: CaseNoteCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CaseNoteCreateFormInputValues) => CaseNoteCreateFormInputValues;
    onSuccess?: (fields: CaseNoteCreateFormInputValues) => void;
    onError?: (fields: CaseNoteCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CaseNoteCreateFormInputValues) => CaseNoteCreateFormInputValues;
    onValidate?: CaseNoteCreateFormValidationValues;
} & React.CSSProperties>;
export default function CaseNoteCreateForm(props: CaseNoteCreateFormProps): React.ReactElement;
