/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
    case_title?: string;
    case_description?: string;
    case_created_date?: string;
    case_offense?: string;
    case_offense_category?: string;
};
export declare type AppCaseCreateFormValidationValues = {
    case_title?: ValidationFunction<string>;
    case_description?: ValidationFunction<string>;
    case_created_date?: ValidationFunction<string>;
    case_offense?: ValidationFunction<string>;
    case_offense_category?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AppCaseCreateFormOverridesProps = {
    AppCaseCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    case_title?: PrimitiveOverrideProps<TextFieldProps>;
    case_description?: PrimitiveOverrideProps<TextFieldProps>;
    case_created_date?: PrimitiveOverrideProps<TextFieldProps>;
    case_offense?: PrimitiveOverrideProps<SelectFieldProps>;
    case_offense_category?: PrimitiveOverrideProps<SelectFieldProps>;
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
