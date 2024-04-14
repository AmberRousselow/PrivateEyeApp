/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type CaseCardOverridesProps = {
    CaseCard?: PrimitiveOverrideProps<FlexProps>;
    CaseCardContent?: PrimitiveOverrideProps<FlexProps>;
    "Header Area"?: PrimitiveOverrideProps<FlexProps>;
    "Header Text"?: PrimitiveOverrideProps<FlexProps>;
    CaseNumber?: PrimitiveOverrideProps<TextProps>;
    CaseTitle?: PrimitiveOverrideProps<TextProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Lower Text Grouping"?: PrimitiveOverrideProps<FlexProps>;
    "Status - Unsolved"?: PrimitiveOverrideProps<TextProps>;
    "Created 2/2/2024"?: PrimitiveOverrideProps<TextProps>;
    "Please add your content here. Keep it short and simple but provide the users what they want!"?: PrimitiveOverrideProps<TextProps>;
    "Frame 437"?: PrimitiveOverrideProps<FlexProps>;
    CaseViewButton?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type CaseCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    Case?: any;
    evidence?: any;
} & {
    overrides?: CaseCardOverridesProps | undefined | null;
}>;
export default function CaseCard(props: CaseCardProps): React.ReactElement;
