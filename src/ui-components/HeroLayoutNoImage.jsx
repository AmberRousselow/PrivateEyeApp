/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "./utils";
import { Button, Flex, Text } from "@aws-amplify/ui-react";
export default function HeroLayoutNoImage(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "Solve the challenge of organizing, tracking, and managing evidence.":
          {},
        "Private Eye is an Evidence Assembly Companion designed explicitly for Private Investigators and hobbyist sleuths passionate about contributing to true crime investigations. This web-based application is a dynamic companion, allowing investigators to effortlessly unite digital artifacts, upload documents, and manage case-related information.\u00A0":
          {},
        "Main Body": {},
        Button: {},
        "Type Lock Up": {},
        HeroLayoutNoImage: {},
      },
      variantValues: { colorMode: "Default" },
    },
    {
      overrides: {
        "Solve the challenge of organizing, tracking, and managing evidence.": {
          color: "rgba(177,170,165,1)",
        },
        "Private Eye is an Evidence Assembly Companion designed explicitly for Private Investigators and hobbyist sleuths passionate about contributing to true crime investigations. This web-based application is a dynamic companion, allowing investigators to effortlessly unite digital artifacts, upload documents, and manage case-related information.\u00A0":
          {
            color: "rgba(160,152,146,1)",
            children:
              "Private Eye is an Evidence Assembly Companion designed explicitly for Private Investigators and hobbyist sleuths passionate about contributing to true crime investigations. This web-based application is a dynamic companion, allowing investigators to effortlessly unite digital artifacts, upload documents, and manage case-related information.\u00A0",
          },
        "Main Body": {},
        Button: {},
        "Type Lock Up": { shrink: "0" },
        HeroLayoutNoImage: { backgroundColor: "rgba(49,42,37,1)" },
      },
      variantValues: { colorMode: "dark" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="10px"
      direction="column"
      width="1440px"
      height="548px"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="75px 240px 75px 240px"
      backgroundColor="rgba(177,170,165,1)"
      display="flex"
      {...getOverrideProps(overrides, "HeroLayoutNoImage")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        grow="1"
        shrink="1"
        basis="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Type Lock Up")}
      >
        <Flex
          gap="16px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Main Body")}
        >
          <Text
            fontFamily="Inter"
            fontSize="24px"
            fontWeight="600"
            color="rgba(13,26,38,1)"
            lineHeight="30px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Solve the challenge of organizing, tracking, and managing evidence."
            {...getOverrideProps(
              overrides,
              "Solve the challenge of organizing, tracking, and managing evidence."
            )}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Private Eye is an Evidence Assembly Companion designed explicitly for Private Investigators and hobbyist sleuths passionate about contributing to true crime investigations. This web-based application is a dynamic companion, allowing investigators to effortlessly unite digital artifacts, upload documents, and manage case-related information. &#xA;"
            {...getOverrideProps(
              overrides,
              "Private Eye is an Evidence Assembly Companion designed explicitly for Private Investigators and hobbyist sleuths passionate about contributing to true crime investigations. This web-based application is a dynamic companion, allowing investigators to effortlessly unite digital artifacts, upload documents, and manage case-related information.\u00A0"
            )}
          ></Text>
        </Flex>
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="large"
          isDisabled={false}
          variation="primary"
          children="Get started"
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
