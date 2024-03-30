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
export default function CaseDetailHeader(props) {
  const { appCase, overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        CaseOverviewHeader: {},
        DaysFact: {},
        DaysSinceOpened: {},
        "Frame 4374": {},
        SusFact: {},
        Suspects: {},
        "Frame 4375": {},
        EvFact: {},
        EvidenceCollected: {},
        "Frame 4376": {},
        StatusFact: {},
        Status: {},
        "Frame 4377": {},
        StatFacts: {},
        Description: {},
        "Frame 438": {},
        Button: {},
        CaseDetailHeader: {},
      },
      variantValues: { mode: "Light" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="35px"
      direction="column"
      width="1438px"
      height="525px"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      padding="0px 0px 0px 0px"
      display="flex"
      dateStat={appCase?.case_created_date}
      {...getOverrideProps(overrides, "CaseDetailHeader")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="85px"
        fontWeight="800"
        color="rgba(78,67,59,1)"
        lineHeight="106.25px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="106px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        {...getOverrideProps(overrides, "CaseOverviewHeader")}
      ></Text>
      <Flex
        gap="2px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="5px 0px 5px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 438")}
      >
        <Flex
          gap="17px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "StatFacts")}
        >
          <Flex
            gap="0"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "Frame 4374")}
          >
            <Text
              fontFamily="Inter"
              fontSize="85px"
              fontWeight="800"
              color="rgba(99,29,20,1)"
              lineHeight="106.25px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              width="307px"
              height="101px"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="777"
              {...getOverrideProps(overrides, "DaysFact")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="20px"
              fontWeight="700"
              color="rgba(0,0,0,1)"
              lineHeight="25px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              width="307px"
              height="101px"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Days Since Opened"
              {...getOverrideProps(overrides, "DaysSinceOpened")}
            ></Text>
          </Flex>
          <Flex
            gap="0"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "Frame 4375")}
          >
            <Text
              fontFamily="Inter"
              fontSize="85px"
              fontWeight="800"
              color="rgba(99,29,20,1)"
              lineHeight="106.25px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              width="307px"
              height="101px"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="3"
              {...getOverrideProps(overrides, "SusFact")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="20px"
              fontWeight="700"
              color="rgba(0,0,0,1)"
              lineHeight="25px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              width="307px"
              height="101px"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Suspects"
              {...getOverrideProps(overrides, "Suspects")}
            ></Text>
          </Flex>
          <Flex
            gap="0"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "Frame 4376")}
          >
            <Text
              fontFamily="Inter"
              fontSize="85px"
              fontWeight="800"
              color="rgba(99,29,20,1)"
              lineHeight="106.25px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              width="307px"
              height="101px"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="150"
              {...getOverrideProps(overrides, "EvFact")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="20px"
              fontWeight="700"
              color="rgba(0,0,0,1)"
              lineHeight="25px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              width="307px"
              height="101px"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Evidence Collected"
              {...getOverrideProps(overrides, "EvidenceCollected")}
            ></Text>
          </Flex>
          <Flex
            gap="0"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "Frame 4377")}
          >
            <Text
              fontFamily="Inter"
              fontSize="85px"
              fontWeight="800"
              color="rgba(99,29,20,1)"
              lineHeight="106.25px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              width="307px"
              height="101px"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="OPEN"
              {...getOverrideProps(overrides, "StatusFact")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="20px"
              fontWeight="700"
              color="rgba(0,0,0,1)"
              lineHeight="25px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              width="307px"
              height="101px"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Status"
              {...getOverrideProps(overrides, "Status")}
            ></Text>
          </Flex>
        </Flex>
        <Text
          fontFamily="Special Elite"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="1336px"
          height="72px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={appCase?.case_description}
          {...getOverrideProps(overrides, "Description")}
        ></Text>
      </Flex>
      <Button
        width="unset"
        height="unset"
        shrink="0"
        alignSelf="stretch"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Edit Details"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}
