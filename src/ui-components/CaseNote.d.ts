/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
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
export declare type CaseNoteOverridesProps = {
    CaseNote?: PrimitiveOverrideProps<FlexProps>;
    Body?: PrimitiveOverrideProps<FlexProps>;
    Text?: PrimitiveOverrideProps<FlexProps>;
    Headline?: PrimitiveOverrideProps<FlexProps>;
    "This is a Case Note that is saved for safe keeping"?: PrimitiveOverrideProps<TextProps>;
    Frame?: PrimitiveOverrideProps<FlexProps>;
    "Nikhil S"?: PrimitiveOverrideProps<TextProps>;
    "2nd December 2021"?: PrimitiveOverrideProps<TextProps>;
    Article?: PrimitiveOverrideProps<FlexProps>;
    MyIcon?: MyIconProps;
    "Private Eye is an Evidence Assembly Companion designed explicitly for Private Investigators and hobbyist sleuths passionate about contributing to true crime investigations. As these individuals require a modern and intuitive tool, Private Eye aims to empower them by providing a user-friendly platform to assemble research and evidence. This web-based application is a dynamic companion, allowing investigators to effortlessly unite digital artifacts, upload documents, and manage case-related information."?: PrimitiveOverrideProps<TextProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type CaseNoteProps = React.PropsWithChildren<Partial<FlexProps> & {
    caseNote?: any;
} & {
    overrides?: CaseNoteOverridesProps | undefined | null;
}>;
export default function CaseNote(props: CaseNoteProps): React.ReactElement;
