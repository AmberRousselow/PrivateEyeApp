/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Autocomplete,
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SelectField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getAppCase, getEvidence, listAppCases } from "../graphql/queries";
import { updateEvidence } from "../graphql/mutations";
const client = generateClient();
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
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
    evidence_type: "",
    evidence_description: "",
    evidence_url: "",
    evidence_created_date: "",
    appcaseID: undefined,
    fileUpload: "",
  };
  const [evidence_type, setEvidence_type] = React.useState(
    initialValues.evidence_type
  );
  const [evidence_description, setEvidence_description] = React.useState(
    initialValues.evidence_description
  );
  const [evidence_url, setEvidence_url] = React.useState(
    initialValues.evidence_url
  );
  const [evidence_created_date, setEvidence_created_date] = React.useState(
    initialValues.evidence_created_date
  );
  const [appcaseID, setAppcaseID] = React.useState(initialValues.appcaseID);
  const [appcaseIDLoading, setAppcaseIDLoading] = React.useState(false);
  const [appcaseIDRecords, setAppcaseIDRecords] = React.useState([]);
  const [selectedAppcaseIDRecords, setSelectedAppcaseIDRecords] =
    React.useState([]);
  const [fileUpload, setFileUpload] = React.useState(initialValues.fileUpload);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = evidenceRecord
      ? { ...initialValues, ...evidenceRecord, appcaseID }
      : initialValues;
    setEvidence_type(cleanValues.evidence_type);
    setEvidence_description(cleanValues.evidence_description);
    setEvidence_url(cleanValues.evidence_url);
    setEvidence_created_date(cleanValues.evidence_created_date);
    setAppcaseID(cleanValues.appcaseID);
    setCurrentAppcaseIDValue(undefined);
    setCurrentAppcaseIDDisplayValue("");
    setFileUpload(cleanValues.fileUpload);
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
      const appcaseIDRecord = record ? record.appcaseID : undefined;
      const appCaseRecord = appcaseIDRecord
        ? (
            await client.graphql({
              query: getAppCase.replaceAll("__typename", ""),
              variables: { id: appcaseIDRecord },
            })
          )?.data?.getAppCase
        : undefined;
      setAppcaseID(appcaseIDRecord);
      setSelectedAppcaseIDRecords([appCaseRecord]);
      setEvidenceRecord(record);
    };
    queryData();
  }, [idProp, evidenceModelProp]);
  React.useEffect(resetStateValues, [evidenceRecord, appcaseID]);
  const [currentAppcaseIDDisplayValue, setCurrentAppcaseIDDisplayValue] =
    React.useState("");
  const [currentAppcaseIDValue, setCurrentAppcaseIDValue] =
    React.useState(undefined);
  const appcaseIDRef = React.createRef();
  const getDisplayValue = {
    appcaseID: (r) => `${r?.case_title ? r?.case_title + " - " : ""}${r?.id}`,
  };
  const validations = {
    evidence_type: [{ type: "Required" }],
    evidence_description: [],
    evidence_url: [],
    evidence_created_date: [],
    appcaseID: [{ type: "Required" }],
    fileUpload: [],
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
  const fetchAppcaseIDRecords = async (value) => {
    setAppcaseIDLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [
            { case_title: { contains: value } },
            { id: { contains: value } },
          ],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await client.graphql({
          query: listAppCases.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listAppCases?.items;
      var loaded = result.filter((item) => appcaseID !== item.id);
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setAppcaseIDRecords(newOptions.slice(0, autocompleteLength));
    setAppcaseIDLoading(false);
  };
  React.useEffect(() => {
    fetchAppcaseIDRecords("");
  }, []);
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          evidence_type,
          evidence_description: evidence_description ?? null,
          evidence_url: evidence_url ?? null,
          evidence_created_date: evidence_created_date ?? null,
          appcaseID,
          fileUpload: fileUpload ?? null,
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
      <SelectField
        label="Evidence type"
        placeholder="Please select an option"
        isDisabled={false}
        value={evidence_type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              evidence_type: value,
              evidence_description,
              evidence_url,
              evidence_created_date,
              appcaseID,
              fileUpload,
            };
            const result = onChange(modelFields);
            value = result?.evidence_type ?? value;
          }
          if (errors.evidence_type?.hasError) {
            runValidationTasks("evidence_type", value);
          }
          setEvidence_type(value);
        }}
        onBlur={() => runValidationTasks("evidence_type", evidence_type)}
        errorMessage={errors.evidence_type?.errorMessage}
        hasError={errors.evidence_type?.hasError}
        {...getOverrideProps(overrides, "evidence_type")}
      >
        <option
          children="Document"
          value="DOCUMENT"
          {...getOverrideProps(overrides, "evidence_typeoption0")}
        ></option>
        <option
          children="Photo"
          value="PHOTO"
          {...getOverrideProps(overrides, "evidence_typeoption1")}
        ></option>
        <option
          children="Physical"
          value="PHYSICAL"
          {...getOverrideProps(overrides, "evidence_typeoption2")}
        ></option>
        <option
          children="Video"
          value="VIDEO"
          {...getOverrideProps(overrides, "evidence_typeoption3")}
        ></option>
        <option
          children="Website"
          value="WEBSITE"
          {...getOverrideProps(overrides, "evidence_typeoption4")}
        ></option>
        <option
          children="Other"
          value="OTHER"
          {...getOverrideProps(overrides, "evidence_typeoption5")}
        ></option>
      </SelectField>
      <TextField
        label="Evidence description"
        isRequired={false}
        isReadOnly={false}
        value={evidence_description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              evidence_type,
              evidence_description: value,
              evidence_url,
              evidence_created_date,
              appcaseID,
              fileUpload,
            };
            const result = onChange(modelFields);
            value = result?.evidence_description ?? value;
          }
          if (errors.evidence_description?.hasError) {
            runValidationTasks("evidence_description", value);
          }
          setEvidence_description(value);
        }}
        onBlur={() =>
          runValidationTasks("evidence_description", evidence_description)
        }
        errorMessage={errors.evidence_description?.errorMessage}
        hasError={errors.evidence_description?.hasError}
        {...getOverrideProps(overrides, "evidence_description")}
      ></TextField>
      <TextField
        label="Evidence url"
        isRequired={false}
        isReadOnly={false}
        value={evidence_url}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              evidence_type,
              evidence_description,
              evidence_url: value,
              evidence_created_date,
              appcaseID,
              fileUpload,
            };
            const result = onChange(modelFields);
            value = result?.evidence_url ?? value;
          }
          if (errors.evidence_url?.hasError) {
            runValidationTasks("evidence_url", value);
          }
          setEvidence_url(value);
        }}
        onBlur={() => runValidationTasks("evidence_url", evidence_url)}
        errorMessage={errors.evidence_url?.errorMessage}
        hasError={errors.evidence_url?.hasError}
        {...getOverrideProps(overrides, "evidence_url")}
      ></TextField>
      <TextField
        label="Evidence created date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={evidence_created_date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              evidence_type,
              evidence_description,
              evidence_url,
              evidence_created_date: value,
              appcaseID,
              fileUpload,
            };
            const result = onChange(modelFields);
            value = result?.evidence_created_date ?? value;
          }
          if (errors.evidence_created_date?.hasError) {
            runValidationTasks("evidence_created_date", value);
          }
          setEvidence_created_date(value);
        }}
        onBlur={() =>
          runValidationTasks("evidence_created_date", evidence_created_date)
        }
        errorMessage={errors.evidence_created_date?.errorMessage}
        hasError={errors.evidence_created_date?.hasError}
        {...getOverrideProps(overrides, "evidence_created_date")}
      ></TextField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              evidence_type,
              evidence_description,
              evidence_url,
              evidence_created_date,
              appcaseID: value,
              fileUpload,
            };
            const result = onChange(modelFields);
            value = result?.appcaseID ?? value;
          }
          setAppcaseID(value);
          setCurrentAppcaseIDValue(undefined);
        }}
        currentFieldValue={currentAppcaseIDValue}
        label={"Appcase id"}
        items={appcaseID ? [appcaseID] : []}
        hasError={errors?.appcaseID?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("appcaseID", currentAppcaseIDValue)
        }
        errorMessage={errors?.appcaseID?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.appcaseID(
                appcaseIDRecords.find((r) => r.id === value) ??
                  selectedAppcaseIDRecords.find((r) => r.id === value)
              )
            : ""
        }
        setFieldValue={(value) => {
          setCurrentAppcaseIDDisplayValue(
            value
              ? getDisplayValue.appcaseID(
                  appcaseIDRecords.find((r) => r.id === value) ??
                    selectedAppcaseIDRecords.find((r) => r.id === value)
                )
              : ""
          );
          setCurrentAppcaseIDValue(value);
          const selectedRecord = appcaseIDRecords.find((r) => r.id === value);
          if (selectedRecord) {
            setSelectedAppcaseIDRecords([selectedRecord]);
          }
        }}
        inputFieldRef={appcaseIDRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Appcase id"
          isRequired={true}
          isReadOnly={false}
          placeholder="Search AppCase"
          value={currentAppcaseIDDisplayValue}
          options={appcaseIDRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.appcaseID?.(r),
            }))}
          isLoading={appcaseIDLoading}
          onSelect={({ id, label }) => {
            setCurrentAppcaseIDValue(id);
            setCurrentAppcaseIDDisplayValue(label);
            runValidationTasks("appcaseID", label);
          }}
          onClear={() => {
            setCurrentAppcaseIDDisplayValue("");
          }}
          defaultValue={appcaseID}
          onChange={(e) => {
            let { value } = e.target;
            fetchAppcaseIDRecords(value);
            if (errors.appcaseID?.hasError) {
              runValidationTasks("appcaseID", value);
            }
            setCurrentAppcaseIDDisplayValue(value);
            setCurrentAppcaseIDValue(undefined);
          }}
          onBlur={() => runValidationTasks("appcaseID", currentAppcaseIDValue)}
          errorMessage={errors.appcaseID?.errorMessage}
          hasError={errors.appcaseID?.hasError}
          ref={appcaseIDRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "appcaseID")}
        ></Autocomplete>
      </ArrayField>
      <TextField
        label="File upload"
        isRequired={false}
        isReadOnly={false}
        value={fileUpload}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              evidence_type,
              evidence_description,
              evidence_url,
              evidence_created_date,
              appcaseID,
              fileUpload: value,
            };
            const result = onChange(modelFields);
            value = result?.fileUpload ?? value;
          }
          if (errors.fileUpload?.hasError) {
            runValidationTasks("fileUpload", value);
          }
          setFileUpload(value);
        }}
        onBlur={() => runValidationTasks("fileUpload", fileUpload)}
        errorMessage={errors.fileUpload?.errorMessage}
        hasError={errors.fileUpload?.hasError}
        {...getOverrideProps(overrides, "fileUpload")}
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
