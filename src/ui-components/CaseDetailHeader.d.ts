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
    "Frame 4374"?: PrimitiveOverrideProps<FlexProps>;
    DaysFact?: PrimitiveOverrideProps<TextProps>;
    DaysSinceOpened?: PrimitiveOverrideProps<TextProps>;
    "Frame 4375"?: PrimitiveOverrideProps<FlexProps>;
    SusFact?: PrimitiveOverrideProps<TextProps>;
    Suspects?: PrimitiveOverrideProps<TextProps>;
    "Frame 4376"?: PrimitiveOverrideProps<FlexProps>;
    EvFact?: PrimitiveOverrideProps<TextProps>;
    EvidenceCollected?: PrimitiveOverrideProps<TextProps>;
    "Frame 4377"?: PrimitiveOverrideProps<FlexProps>;
    StatusFact?: PrimitiveOverrideProps<TextProps>;
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
