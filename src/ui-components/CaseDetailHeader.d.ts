/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CaseDetailHeaderOverridesProps = {
    CaseDetailHeader?: PrimitiveOverrideProps<FlexProps>;
    CaseOverviewHeader?: PrimitiveOverrideProps<TextProps>;
    "Frame 438"?: PrimitiveOverrideProps<FlexProps>;
    StatFacts?: PrimitiveOverrideProps<FlexProps>;
    DaysFact?: PrimitiveOverrideProps<TextProps>;
    SusFact?: PrimitiveOverrideProps<TextProps>;
    EvFact?: PrimitiveOverrideProps<TextProps>;
    StatusFact?: PrimitiveOverrideProps<TextProps>;
    StatHeaders?: PrimitiveOverrideProps<FlexProps>;
    DaysSinceOpened?: PrimitiveOverrideProps<TextProps>;
    Suspects?: PrimitiveOverrideProps<TextProps>;
    EvidenceCollected?: PrimitiveOverrideProps<TextProps>;
    Status?: PrimitiveOverrideProps<TextProps>;
    Description?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type CaseDetailHeaderProps = React.PropsWithChildren<Partial<FlexProps> & {
    appCase?: any;
} & {
    mode?: "Light";
} & {
    overrides?: CaseDetailHeaderOverridesProps | undefined | null;
}>;
export default function CaseDetailHeader(props: CaseDetailHeaderProps): React.ReactElement;
