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
export declare type AppCaseUpdateFormInputValues = {
    title?: string;
    description?: string;
    createdDateTime?: string;
    isDeleted?: boolean;
    suspectcaseID?: string;
};
export declare type AppCaseUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    createdDateTime?: ValidationFunction<string>;
    isDeleted?: ValidationFunction<boolean>;
    suspectcaseID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AppCaseUpdateFormOverridesProps = {
    AppCaseUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    createdDateTime?: PrimitiveOverrideProps<TextFieldProps>;
    isDeleted?: PrimitiveOverrideProps<SwitchFieldProps>;
    suspectcaseID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AppCaseUpdateFormProps = React.PropsWithChildren<{
    overrides?: AppCaseUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    appCase?: any;
    onSubmit?: (fields: AppCaseUpdateFormInputValues) => AppCaseUpdateFormInputValues;
    onSuccess?: (fields: AppCaseUpdateFormInputValues) => void;
    onError?: (fields: AppCaseUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AppCaseUpdateFormInputValues) => AppCaseUpdateFormInputValues;
    onValidate?: AppCaseUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AppCaseUpdateForm(props: AppCaseUpdateFormProps): React.ReactElement;
