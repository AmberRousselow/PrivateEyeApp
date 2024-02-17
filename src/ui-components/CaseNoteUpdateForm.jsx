/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getCaseNote } from "../graphql/queries";
import { updateCaseNote } from "../graphql/mutations";
const client = generateClient();
export default function CaseNoteUpdateForm(props) {
  const {
    id: idProp,
    caseNote: caseNoteModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    tite: "",
    content: "",
    image: "",
    createDateTime: "",
  };
  const [tite, setTite] = React.useState(initialValues.tite);
  const [content, setContent] = React.useState(initialValues.content);
  const [image, setImage] = React.useState(initialValues.image);
  const [createDateTime, setCreateDateTime] = React.useState(
    initialValues.createDateTime
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = caseNoteRecord
      ? { ...initialValues, ...caseNoteRecord }
      : initialValues;
    setTite(cleanValues.tite);
    setContent(cleanValues.content);
    setImage(cleanValues.image);
    setCreateDateTime(cleanValues.createDateTime);
    setErrors({});
  };
  const [caseNoteRecord, setCaseNoteRecord] = React.useState(caseNoteModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getCaseNote.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getCaseNote
        : caseNoteModelProp;
      setCaseNoteRecord(record);
    };
    queryData();
  }, [idProp, caseNoteModelProp]);
  React.useEffect(resetStateValues, [caseNoteRecord]);
  const validations = {
    tite: [{ type: "Required" }],
    content: [],
    image: [],
    createDateTime: [],
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
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
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
          tite,
          content: content ?? null,
          image: image ?? null,
          createDateTime: createDateTime ?? null,
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
            query: updateCaseNote.replaceAll("__typename", ""),
            variables: {
              input: {
                id: caseNoteRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "CaseNoteUpdateForm")}
      {...rest}
    >
      <TextField
        label="Tite"
        isRequired={true}
        isReadOnly={false}
        value={tite}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tite: value,
              content,
              image,
              createDateTime,
            };
            const result = onChange(modelFields);
            value = result?.tite ?? value;
          }
          if (errors.tite?.hasError) {
            runValidationTasks("tite", value);
          }
          setTite(value);
        }}
        onBlur={() => runValidationTasks("tite", tite)}
        errorMessage={errors.tite?.errorMessage}
        hasError={errors.tite?.hasError}
        {...getOverrideProps(overrides, "tite")}
      ></TextField>
      <TextField
        label="Content"
        isRequired={false}
        isReadOnly={false}
        value={content}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tite,
              content: value,
              image,
              createDateTime,
            };
            const result = onChange(modelFields);
            value = result?.content ?? value;
          }
          if (errors.content?.hasError) {
            runValidationTasks("content", value);
          }
          setContent(value);
        }}
        onBlur={() => runValidationTasks("content", content)}
        errorMessage={errors.content?.errorMessage}
        hasError={errors.content?.hasError}
        {...getOverrideProps(overrides, "content")}
      ></TextField>
      <TextField
        label="Image"
        isRequired={false}
        isReadOnly={false}
        value={image}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tite,
              content,
              image: value,
              createDateTime,
            };
            const result = onChange(modelFields);
            value = result?.image ?? value;
          }
          if (errors.image?.hasError) {
            runValidationTasks("image", value);
          }
          setImage(value);
        }}
        onBlur={() => runValidationTasks("image", image)}
        errorMessage={errors.image?.errorMessage}
        hasError={errors.image?.hasError}
        {...getOverrideProps(overrides, "image")}
      ></TextField>
      <TextField
        label="Create date time"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={createDateTime && convertToLocal(new Date(createDateTime))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              tite,
              content,
              image,
              createDateTime: value,
            };
            const result = onChange(modelFields);
            value = result?.createDateTime ?? value;
          }
          if (errors.createDateTime?.hasError) {
            runValidationTasks("createDateTime", value);
          }
          setCreateDateTime(value);
        }}
        onBlur={() => runValidationTasks("createDateTime", createDateTime)}
        errorMessage={errors.createDateTime?.errorMessage}
        hasError={errors.createDateTime?.hasError}
        {...getOverrideProps(overrides, "createDateTime")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || caseNoteModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || caseNoteModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
