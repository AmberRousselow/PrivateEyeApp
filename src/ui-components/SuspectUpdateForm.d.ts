/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type SuspectUpdateFormInputValues = {
    suspectName?: string;
    dateOfBirth?: string;
    Gender?: string;
    nationality?: string;
    address?: string;
    occupation?: string;
    employer?: string;
    education?: string;
    phone?: string;
    email?: string;
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedIn?: string;
    ticktock?: string;
    heightinches?: number;
    eyecolor?: string;
    tattoos?: string;
    scars?: string;
    criminalrecord?: string;
    legalstatus?: string;
    knownassociates?: string;
    backgroundinformation?: string;
    createdDateTime?: number;
    IsDeleted?: boolean;
    suspectcaseID?: string;
};
export declare type SuspectUpdateFormValidationValues = {
    suspectName?: ValidationFunction<string>;
    dateOfBirth?: ValidationFunction<string>;
    Gender?: ValidationFunction<string>;
    nationality?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    occupation?: ValidationFunction<string>;
    employer?: ValidationFunction<string>;
    education?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    facebook?: ValidationFunction<string>;
    twitter?: ValidationFunction<string>;
    instagram?: ValidationFunction<string>;
    linkedIn?: ValidationFunction<string>;
    ticktock?: ValidationFunction<string>;
    heightinches?: ValidationFunction<number>;
    eyecolor?: ValidationFunction<string>;
    tattoos?: ValidationFunction<string>;
    scars?: ValidationFunction<string>;
    criminalrecord?: ValidationFunction<string>;
    legalstatus?: ValidationFunction<string>;
    knownassociates?: ValidationFunction<string>;
    backgroundinformation?: ValidationFunction<string>;
    createdDateTime?: ValidationFunction<number>;
    IsDeleted?: ValidationFunction<boolean>;
    suspectcaseID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SuspectUpdateFormOverridesProps = {
    SuspectUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    suspectName?: PrimitiveOverrideProps<TextFieldProps>;
    dateOfBirth?: PrimitiveOverrideProps<TextFieldProps>;
    Gender?: PrimitiveOverrideProps<SelectFieldProps>;
    nationality?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    occupation?: PrimitiveOverrideProps<TextFieldProps>;
    employer?: PrimitiveOverrideProps<TextFieldProps>;
    education?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    facebook?: PrimitiveOverrideProps<TextFieldProps>;
    twitter?: PrimitiveOverrideProps<TextFieldProps>;
    instagram?: PrimitiveOverrideProps<TextFieldProps>;
    linkedIn?: PrimitiveOverrideProps<TextFieldProps>;
    ticktock?: PrimitiveOverrideProps<TextFieldProps>;
    heightinches?: PrimitiveOverrideProps<TextFieldProps>;
    eyecolor?: PrimitiveOverrideProps<TextFieldProps>;
    tattoos?: PrimitiveOverrideProps<TextFieldProps>;
    scars?: PrimitiveOverrideProps<TextFieldProps>;
    criminalrecord?: PrimitiveOverrideProps<TextFieldProps>;
    legalstatus?: PrimitiveOverrideProps<TextFieldProps>;
    knownassociates?: PrimitiveOverrideProps<TextFieldProps>;
    backgroundinformation?: PrimitiveOverrideProps<TextFieldProps>;
    createdDateTime?: PrimitiveOverrideProps<TextFieldProps>;
    IsDeleted?: PrimitiveOverrideProps<SwitchFieldProps>;
    suspectcaseID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SuspectUpdateFormProps = React.PropsWithChildren<{
    overrides?: SuspectUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    suspect?: any;
    onSubmit?: (fields: SuspectUpdateFormInputValues) => SuspectUpdateFormInputValues;
    onSuccess?: (fields: SuspectUpdateFormInputValues) => void;
    onError?: (fields: SuspectUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SuspectUpdateFormInputValues) => SuspectUpdateFormInputValues;
    onValidate?: SuspectUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SuspectUpdateForm(props: SuspectUpdateFormProps): React.ReactElement;
