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
export declare type HeroLayoutNoImageOverridesProps = {
    HeroLayoutNoImage?: PrimitiveOverrideProps<FlexProps>;
    "Type Lock Up"?: PrimitiveOverrideProps<FlexProps>;
    "Main Body"?: PrimitiveOverrideProps<FlexProps>;
    "Solve the challenge of organizing, tracking, and managing evidence."?: PrimitiveOverrideProps<TextProps>;
    "Private Eye is an Evidence Assembly Companion designed explicitly for Private Investigators and hobbyist sleuths passionate about contributing to true crime investigations. This web-based application is a dynamic companion, allowing investigators to effortlessly unite digital artifacts, upload documents, and manage case-related information.\u00A0"?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type HeroLayoutNoImageProps = React.PropsWithChildren<Partial<FlexProps> & {
    colorMode?: "Default" | "dark";
} & {
    overrides?: HeroLayoutNoImageOverridesProps | undefined | null;
}>;
export default function HeroLayoutNoImage(props: HeroLayoutNoImageProps): React.ReactElement;
