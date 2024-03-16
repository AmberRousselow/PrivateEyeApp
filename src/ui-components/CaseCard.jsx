/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Button, Flex, Icon, Image, Text } from "@aws-amplify/ui-react";
export default function CaseCard(props) {
  const { Case, overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-end"
      position="relative"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      borderRadius="15px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "CaseCard")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "CaseCardContent")}
      >
        <Flex
          gap="11px"
          direction="row"
          width="294px"
          height="48px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="20px 0px 10px 0px"
          {...getOverrideProps(overrides, "Header Area")}
        >
          <Icon
            width="37px"
            height="36px"
            viewBox={{ minX: 0, minY: 0, width: 37, height: 36 }}
            paths={[
              {
                d: "M37 18C37 27.9411 28.7173 36 18.5 36C8.28273 36 0 27.9411 0 18C0 8.05887 8.28273 0 18.5 0C28.7173 0 37 8.05887 37 18Z",
                fill: "rgba(102,0,0,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Ellipse 1")}
          ></Icon>
          <Flex
            gap="0"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Header Text")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="800"
              color="rgba(0,0,0,1)"
              lineHeight="20px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="221px"
              height="25px"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={Case?.case_number}
              {...getOverrideProps(overrides, "000001")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="221px"
              height="25px"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={Case?.case_title}
              {...getOverrideProps(overrides, "Case Title is Listed Here")}
            ></Text>
          </Flex>
        </Flex>
        <Image
          width="320px"
          height="215px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "image")}
        ></Image>
        <Flex
          gap="0"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 18px 0px 18px"
          {...getOverrideProps(overrides, "Lower Text Grouping")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="284px"
            height="25px"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Status - Unsolved"
            {...getOverrideProps(overrides, "Status - Unsolved")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="12px"
            fontWeight="400"
            color="rgba(49,42,37,1)"
            lineHeight="18px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="284px"
            height="25px"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={Case?.case_created_date}
            {...getOverrideProps(overrides, "Created 2/2/2024")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="12px"
            fontWeight="400"
            color="rgba(51,51,51,1)"
            lineHeight="18px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="284px"
            height="44px"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={Case?.case_description}
            {...getOverrideProps(
              overrides,
              "Please add your content here. Keep it short and simple but provide the users what they want!"
            )}
          ></Text>
        </Flex>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-end"
        alignItems="flex-end"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="15px 25px 15px 25px"
        {...getOverrideProps(overrides, "Frame 437")}
      >
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="small"
          isDisabled={false}
          variation="primary"
          children="View"
          {...getOverrideProps(overrides, "CaseViewButton")}
        ></Button>
      </Flex>
    </Flex>
  );
}
