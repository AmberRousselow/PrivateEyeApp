/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, RadioGroupFieldProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type NewCaseCreateFormInputValues = {
    case_title?: string;
    case_number?: number;
    case_description?: string;
    case_offense?: string;
    case_offense_category?: string;
    case_status?: string;
};
export declare type NewCaseCreateFormValidationValues = {
    case_title?: ValidationFunction<string>;
    case_number?: ValidationFunction<number>;
    case_description?: ValidationFunction<string>;
    case_offense?: ValidationFunction<string>;
    case_offense_category?: ValidationFunction<string>;
    case_status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NewCaseCreateFormOverridesProps = {
    NewCaseCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    case_title?: PrimitiveOverrideProps<TextFieldProps>;
    case_number?: PrimitiveOverrideProps<TextFieldProps>;
    case_description?: PrimitiveOverrideProps<TextFieldProps>;
    case_offense?: PrimitiveOverrideProps<RadioGroupFieldProps>;
    case_offense_category?: PrimitiveOverrideProps<RadioGroupFieldProps>;
    case_status?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type NewCaseCreateFormProps = React.PropsWithChildren<{
    overrides?: NewCaseCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NewCaseCreateFormInputValues) => NewCaseCreateFormInputValues;
    onSuccess?: (fields: NewCaseCreateFormInputValues) => void;
    onError?: (fields: NewCaseCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: NewCaseCreateFormInputValues) => NewCaseCreateFormInputValues;
    onValidate?: NewCaseCreateFormValidationValues;
} & React.CSSProperties>;
export default function NewCaseCreateForm(props: NewCaseCreateFormProps): React.ReactElement;
