/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createAppCase } from "../graphql/mutations";
const client = generateClient();
export default function AppCaseCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    case_title: "",
    case_description: "",
    case_created_date: "",
    case_offense: "",
    case_offense_category: "",
  };
  const [case_title, setCase_title] = React.useState(initialValues.case_title);
  const [case_description, setCase_description] = React.useState(
    initialValues.case_description
  );
  const [case_created_date, setCase_created_date] = React.useState(
    initialValues.case_created_date
  );
  const [case_offense, setCase_offense] = React.useState(
    initialValues.case_offense
  );
  const [case_offense_category, setCase_offense_category] = React.useState(
    initialValues.case_offense_category
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setCase_title(initialValues.case_title);
    setCase_description(initialValues.case_description);
    setCase_created_date(initialValues.case_created_date);
    setCase_offense(initialValues.case_offense);
    setCase_offense_category(initialValues.case_offense_category);
    setErrors({});
  };
  const validations = {
    case_title: [],
    case_description: [],
    case_created_date: [],
    case_offense: [],
    case_offense_category: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          case_title,
          case_description,
          case_created_date,
          case_offense,
          case_offense_category,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createAppCase.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "AppCaseCreateForm")}
      {...rest}
    >
      <TextField
        label="Case title"
        isRequired={false}
        isReadOnly={false}
        value={case_title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              case_title: value,
              case_description,
              case_created_date,
              case_offense,
              case_offense_category,
            };
            const result = onChange(modelFields);
            value = result?.case_title ?? value;
          }
          if (errors.case_title?.hasError) {
            runValidationTasks("case_title", value);
          }
          setCase_title(value);
        }}
        onBlur={() => runValidationTasks("case_title", case_title)}
        errorMessage={errors.case_title?.errorMessage}
        hasError={errors.case_title?.hasError}
        {...getOverrideProps(overrides, "case_title")}
      ></TextField>
      <TextField
        label="Case description"
        isRequired={false}
        isReadOnly={false}
        value={case_description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              case_title,
              case_description: value,
              case_created_date,
              case_offense,
              case_offense_category,
            };
            const result = onChange(modelFields);
            value = result?.case_description ?? value;
          }
          if (errors.case_description?.hasError) {
            runValidationTasks("case_description", value);
          }
          setCase_description(value);
        }}
        onBlur={() => runValidationTasks("case_description", case_description)}
        errorMessage={errors.case_description?.errorMessage}
        hasError={errors.case_description?.hasError}
        {...getOverrideProps(overrides, "case_description")}
      ></TextField>
      <TextField
        label="Case created date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={case_created_date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              case_title,
              case_description,
              case_created_date: value,
              case_offense,
              case_offense_category,
            };
            const result = onChange(modelFields);
            value = result?.case_created_date ?? value;
          }
          if (errors.case_created_date?.hasError) {
            runValidationTasks("case_created_date", value);
          }
          setCase_created_date(value);
        }}
        onBlur={() =>
          runValidationTasks("case_created_date", case_created_date)
        }
        errorMessage={errors.case_created_date?.errorMessage}
        hasError={errors.case_created_date?.hasError}
        {...getOverrideProps(overrides, "case_created_date")}
      ></TextField>
      <SelectField
        label="Case offense"
        placeholder="Please select an option"
        isDisabled={false}
        value={case_offense}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              case_title,
              case_description,
              case_created_date,
              case_offense: value,
              case_offense_category,
            };
            const result = onChange(modelFields);
            value = result?.case_offense ?? value;
          }
          if (errors.case_offense?.hasError) {
            runValidationTasks("case_offense", value);
          }
          setCase_offense(value);
        }}
        onBlur={() => runValidationTasks("case_offense", case_offense)}
        errorMessage={errors.case_offense?.errorMessage}
        hasError={errors.case_offense?.hasError}
        {...getOverrideProps(overrides, "case_offense")}
      >
        <option
          children="Felony"
          value="FELONY"
          {...getOverrideProps(overrides, "case_offenseoption0")}
        ></option>
        <option
          children="Misdemeanor"
          value="MISDEMEANOR"
          {...getOverrideProps(overrides, "case_offenseoption1")}
        ></option>
      </SelectField>
      <SelectField
        label="Case offense category"
        placeholder="Please select an option"
        isDisabled={false}
        value={case_offense_category}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              case_title,
              case_description,
              case_created_date,
              case_offense,
              case_offense_category: value,
            };
            const result = onChange(modelFields);
            value = result?.case_offense_category ?? value;
          }
          if (errors.case_offense_category?.hasError) {
            runValidationTasks("case_offense_category", value);
          }
          setCase_offense_category(value);
        }}
        onBlur={() =>
          runValidationTasks("case_offense_category", case_offense_category)
        }
        errorMessage={errors.case_offense_category?.errorMessage}
        hasError={errors.case_offense_category?.hasError}
        {...getOverrideProps(overrides, "case_offense_category")}
      >
        <option
          children="Person"
          value="PERSON"
          {...getOverrideProps(overrides, "case_offense_categoryoption0")}
        ></option>
        <option
          children="Property"
          value="PROPERTY"
          {...getOverrideProps(overrides, "case_offense_categoryoption1")}
        ></option>
        <option
          children="Financial"
          value="FINANCIAL"
          {...getOverrideProps(overrides, "case_offense_categoryoption2")}
        ></option>
        <option
          children="Statutory"
          value="STATUTORY"
          {...getOverrideProps(overrides, "case_offense_categoryoption3")}
        ></option>
        <option
          children="Other"
          value="OTHER"
          {...getOverrideProps(overrides, "case_offense_categoryoption4")}
        ></option>
      </SelectField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
