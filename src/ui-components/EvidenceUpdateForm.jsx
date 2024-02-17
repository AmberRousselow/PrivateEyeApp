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
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getEvidence } from "../graphql/queries";
import { updateEvidence } from "../graphql/mutations";
const client = generateClient();
export default function EvidenceUpdateForm(props) {
  const {
    id: idProp,
    evidence: evidenceModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    type: "",
    Decription: "",
    url: "",
    createdDateTime: "",
    IsDeleted: false,
    appcaseID: "",
  };
  const [type, setType] = React.useState(initialValues.type);
  const [Decription, setDecription] = React.useState(initialValues.Decription);
  const [url, setUrl] = React.useState(initialValues.url);
  const [createdDateTime, setCreatedDateTime] = React.useState(
    initialValues.createdDateTime
  );
  const [IsDeleted, setIsDeleted] = React.useState(initialValues.IsDeleted);
  const [appcaseID, setAppcaseID] = React.useState(initialValues.appcaseID);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = evidenceRecord
      ? { ...initialValues, ...evidenceRecord }
      : initialValues;
    setType(cleanValues.type);
    setDecription(cleanValues.Decription);
    setUrl(cleanValues.url);
    setCreatedDateTime(cleanValues.createdDateTime);
    setIsDeleted(cleanValues.IsDeleted);
    setAppcaseID(cleanValues.appcaseID);
    setErrors({});
  };
  const [evidenceRecord, setEvidenceRecord] = React.useState(evidenceModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getEvidence.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getEvidence
        : evidenceModelProp;
      setEvidenceRecord(record);
    };
    queryData();
  }, [idProp, evidenceModelProp]);
  React.useEffect(resetStateValues, [evidenceRecord]);
  const validations = {
    type: [],
    Decription: [],
    url: [],
    createdDateTime: [],
    IsDeleted: [],
    appcaseID: [{ type: "Required" }],
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
          type: type ?? null,
          Decription: Decription ?? null,
          url: url ?? null,
          createdDateTime: createdDateTime ?? null,
          IsDeleted: IsDeleted ?? null,
          appcaseID,
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
            query: updateEvidence.replaceAll("__typename", ""),
            variables: {
              input: {
                id: evidenceRecord.id,
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
      {...getOverrideProps(overrides, "EvidenceUpdateForm")}
      {...rest}
    >
      <TextField
        label="Type"
        isRequired={false}
        isReadOnly={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type: value,
              Decription,
              url,
              createdDateTime,
              IsDeleted,
              appcaseID,
            };
            const result = onChange(modelFields);
            value = result?.type ?? value;
          }
          if (errors.type?.hasError) {
            runValidationTasks("type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("type", type)}
        errorMessage={errors.type?.errorMessage}
        hasError={errors.type?.hasError}
        {...getOverrideProps(overrides, "type")}
      ></TextField>
      <TextField
        label="Decription"
        isRequired={false}
        isReadOnly={false}
        value={Decription}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              Decription: value,
              url,
              createdDateTime,
              IsDeleted,
              appcaseID,
            };
            const result = onChange(modelFields);
            value = result?.Decription ?? value;
          }
          if (errors.Decription?.hasError) {
            runValidationTasks("Decription", value);
          }
          setDecription(value);
        }}
        onBlur={() => runValidationTasks("Decription", Decription)}
        errorMessage={errors.Decription?.errorMessage}
        hasError={errors.Decription?.hasError}
        {...getOverrideProps(overrides, "Decription")}
      ></TextField>
      <TextField
        label="Url"
        isRequired={false}
        isReadOnly={false}
        value={url}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              Decription,
              url: value,
              createdDateTime,
              IsDeleted,
              appcaseID,
            };
            const result = onChange(modelFields);
            value = result?.url ?? value;
          }
          if (errors.url?.hasError) {
            runValidationTasks("url", value);
          }
          setUrl(value);
        }}
        onBlur={() => runValidationTasks("url", url)}
        errorMessage={errors.url?.errorMessage}
        hasError={errors.url?.hasError}
        {...getOverrideProps(overrides, "url")}
      ></TextField>
      <TextField
        label="Created date time"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={createdDateTime && convertToLocal(new Date(createdDateTime))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              type,
              Decription,
              url,
              createdDateTime: value,
              IsDeleted,
              appcaseID,
            };
            const result = onChange(modelFields);
            value = result?.createdDateTime ?? value;
          }
          if (errors.createdDateTime?.hasError) {
            runValidationTasks("createdDateTime", value);
          }
          setCreatedDateTime(value);
        }}
        onBlur={() => runValidationTasks("createdDateTime", createdDateTime)}
        errorMessage={errors.createdDateTime?.errorMessage}
        hasError={errors.createdDateTime?.hasError}
        {...getOverrideProps(overrides, "createdDateTime")}
      ></TextField>
      <SwitchField
        label="Is deleted"
        defaultChecked={false}
        isDisabled={false}
        isChecked={IsDeleted}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              type,
              Decription,
              url,
              createdDateTime,
              IsDeleted: value,
              appcaseID,
            };
            const result = onChange(modelFields);
            value = result?.IsDeleted ?? value;
          }
          if (errors.IsDeleted?.hasError) {
            runValidationTasks("IsDeleted", value);
          }
          setIsDeleted(value);
        }}
        onBlur={() => runValidationTasks("IsDeleted", IsDeleted)}
        errorMessage={errors.IsDeleted?.errorMessage}
        hasError={errors.IsDeleted?.hasError}
        {...getOverrideProps(overrides, "IsDeleted")}
      ></SwitchField>
      <TextField
        label="Appcase id"
        isRequired={true}
        isReadOnly={false}
        value={appcaseID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              Decription,
              url,
              createdDateTime,
              IsDeleted,
              appcaseID: value,
            };
            const result = onChange(modelFields);
            value = result?.appcaseID ?? value;
          }
          if (errors.appcaseID?.hasError) {
            runValidationTasks("appcaseID", value);
          }
          setAppcaseID(value);
        }}
        onBlur={() => runValidationTasks("appcaseID", appcaseID)}
        errorMessage={errors.appcaseID?.errorMessage}
        hasError={errors.appcaseID?.hasError}
        {...getOverrideProps(overrides, "appcaseID")}
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
          isDisabled={!(idProp || evidenceModelProp)}
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
              !(idProp || evidenceModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
