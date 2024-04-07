/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, DividerProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type DetailViewsEvidenceDetailViewOverridesProps = {
    DetailViewsEvidenceDetailView?: PrimitiveOverrideProps<FlexProps>;
    main?: PrimitiveOverrideProps<FlexProps>;
    "Frame 4373"?: PrimitiveOverrideProps<FlexProps>;
    header39061102?: PrimitiveOverrideProps<FlexProps>;
    header39061103?: PrimitiveOverrideProps<FlexProps>;
    "Evidnece Information"?: PrimitiveOverrideProps<TextProps>;
    subHeader?: PrimitiveOverrideProps<FlexProps>;
    "Created Date"?: PrimitiveOverrideProps<TextProps>;
    "09-09-0000"?: PrimitiveOverrideProps<TextProps>;
    Divider39061108?: PrimitiveOverrideProps<DividerProps>;
    DataRow39061109?: PrimitiveOverrideProps<FlexProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    "Case Title"?: PrimitiveOverrideProps<TextProps>;
    "Case Offense"?: PrimitiveOverrideProps<TextProps>;
    Felony?: PrimitiveOverrideProps<TextProps>;
    Divider39061114?: PrimitiveOverrideProps<DividerProps>;
    DataRow39061115?: PrimitiveOverrideProps<FlexProps>;
    "Case Offesne Category"?: PrimitiveOverrideProps<TextProps>;
    Financial?: PrimitiveOverrideProps<TextProps>;
    Divider39061118?: PrimitiveOverrideProps<DividerProps>;
    DataRow39061119?: PrimitiveOverrideProps<FlexProps>;
    Description?: PrimitiveOverrideProps<TextProps>;
    "This is the Description"?: PrimitiveOverrideProps<TextProps>;
    Divider39061122?: PrimitiveOverrideProps<DividerProps>;
    "Delete Account"?: PrimitiveOverrideProps<FlexProps>;
    header39061124?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type DetailViewsEvidenceDetailViewProps = React.PropsWithChildren<Partial<FlexProps> & {
    evidence?: any;
} & {
    overrides?: DetailViewsEvidenceDetailViewOverridesProps | undefined | null;
}>;
export default function DetailViewsEvidenceDetailView(props: DetailViewsEvidenceDetailViewProps): React.ReactElement;
