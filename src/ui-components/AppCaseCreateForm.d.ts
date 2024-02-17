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
export declare type AppCaseCreateFormInputValues = {
    title?: string;
    description?: string;
    createdDateTime?: string;
    isDeleted?: boolean;
    suspectcaseID?: string;
};
export declare type AppCaseCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    createdDateTime?: ValidationFunction<string>;
    isDeleted?: ValidationFunction<boolean>;
    suspectcaseID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AppCaseCreateFormOverridesProps = {
    AppCaseCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    createdDateTime?: PrimitiveOverrideProps<TextFieldProps>;
    isDeleted?: PrimitiveOverrideProps<SwitchFieldProps>;
    suspectcaseID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AppCaseCreateFormProps = React.PropsWithChildren<{
    overrides?: AppCaseCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AppCaseCreateFormInputValues) => AppCaseCreateFormInputValues;
    onSuccess?: (fields: AppCaseCreateFormInputValues) => void;
    onError?: (fields: AppCaseCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AppCaseCreateFormInputValues) => AppCaseCreateFormInputValues;
    onValidate?: AppCaseCreateFormValidationValues;
} & React.CSSProperties>;
export default function AppCaseCreateForm(props: AppCaseCreateFormProps): React.ReactElement;
