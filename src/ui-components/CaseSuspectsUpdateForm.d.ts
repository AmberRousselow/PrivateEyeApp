/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps } from "@aws-amplify/ui-react";
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
export declare type CaseSuspectsUpdateFormInputValues = {
    appcaseID?: string;
    suspectID?: string;
};
export declare type CaseSuspectsUpdateFormValidationValues = {
    appcaseID?: ValidationFunction<string>;
    suspectID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CaseSuspectsUpdateFormOverridesProps = {
    CaseSuspectsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    appcaseID?: PrimitiveOverrideProps<AutocompleteProps>;
    suspectID?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type CaseSuspectsUpdateFormProps = React.PropsWithChildren<{
    overrides?: CaseSuspectsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    caseSuspects?: any;
    onSubmit?: (fields: CaseSuspectsUpdateFormInputValues) => CaseSuspectsUpdateFormInputValues;
    onSuccess?: (fields: CaseSuspectsUpdateFormInputValues) => void;
    onError?: (fields: CaseSuspectsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CaseSuspectsUpdateFormInputValues) => CaseSuspectsUpdateFormInputValues;
    onValidate?: CaseSuspectsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CaseSuspectsUpdateForm(props: CaseSuspectsUpdateFormProps): React.ReactElement;
