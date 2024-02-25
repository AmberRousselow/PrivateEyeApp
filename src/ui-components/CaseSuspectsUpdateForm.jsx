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
  Text,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import {
  getAppCase,
  getCaseSuspects,
  getSuspect,
  listAppCases,
  listSuspects,
} from "../graphql/queries";
import { updateCaseSuspects } from "../graphql/mutations";
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
export default function CaseSuspectsUpdateForm(props) {
  const {
    id: idProp,
    caseSuspects: caseSuspectsModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    appcaseID: undefined,
    suspectID: undefined,
  };
  const [appcaseID, setAppcaseID] = React.useState(initialValues.appcaseID);
  const [appcaseIDLoading, setAppcaseIDLoading] = React.useState(false);
  const [appcaseIDRecords, setAppcaseIDRecords] = React.useState([]);
  const [selectedAppcaseIDRecords, setSelectedAppcaseIDRecords] =
    React.useState([]);
  const [suspectID, setSuspectID] = React.useState(initialValues.suspectID);
  const [suspectIDLoading, setSuspectIDLoading] = React.useState(false);
  const [suspectIDRecords, setSuspectIDRecords] = React.useState([]);
  const [selectedSuspectIDRecords, setSelectedSuspectIDRecords] =
    React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = caseSuspectsRecord
      ? { ...initialValues, ...caseSuspectsRecord, appcaseID, suspectID }
      : initialValues;
    setAppcaseID(cleanValues.appcaseID);
    setCurrentAppcaseIDValue(undefined);
    setCurrentAppcaseIDDisplayValue("");
    setSuspectID(cleanValues.suspectID);
    setCurrentSuspectIDValue(undefined);
    setCurrentSuspectIDDisplayValue("");
    setErrors({});
  };
  const [caseSuspectsRecord, setCaseSuspectsRecord] = React.useState(
    caseSuspectsModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getCaseSuspects.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getCaseSuspects
        : caseSuspectsModelProp;
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
      const suspectIDRecord = record ? record.suspectID : undefined;
      const suspectRecord = suspectIDRecord
        ? (
            await client.graphql({
              query: getSuspect.replaceAll("__typename", ""),
              variables: { id: suspectIDRecord },
            })
          )?.data?.getSuspect
        : undefined;
      setSuspectID(suspectIDRecord);
      setSelectedSuspectIDRecords([suspectRecord]);
      setCaseSuspectsRecord(record);
    };
    queryData();
  }, [idProp, caseSuspectsModelProp]);
  React.useEffect(resetStateValues, [caseSuspectsRecord, appcaseID, suspectID]);
  const [currentAppcaseIDDisplayValue, setCurrentAppcaseIDDisplayValue] =
    React.useState("");
  const [currentAppcaseIDValue, setCurrentAppcaseIDValue] =
    React.useState(undefined);
  const appcaseIDRef = React.createRef();
  const [currentSuspectIDDisplayValue, setCurrentSuspectIDDisplayValue] =
    React.useState("");
  const [currentSuspectIDValue, setCurrentSuspectIDValue] =
    React.useState(undefined);
  const suspectIDRef = React.createRef();
  const getDisplayValue = {
    appcaseID: (r) => `${r?.case_title ? r?.case_title + " - " : ""}${r?.id}`,
    suspectID: (r) =>
      `${r?.suspect_name ? r?.suspect_name + " - " : ""}${r?.id}`,
  };
  const validations = {
    appcaseID: [{ type: "Required" }],
    suspectID: [{ type: "Required" }],
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
  const fetchSuspectIDRecords = async (value) => {
    setSuspectIDLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [
            { suspect_name: { contains: value } },
            { id: { contains: value } },
          ],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await client.graphql({
          query: listSuspects.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listSuspects?.items;
      var loaded = result.filter((item) => suspectID !== item.id);
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setSuspectIDRecords(newOptions.slice(0, autocompleteLength));
    setSuspectIDLoading(false);
  };
  React.useEffect(() => {
    fetchAppcaseIDRecords("");
    fetchSuspectIDRecords("");
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
          appcaseID,
          suspectID,
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
            query: updateCaseSuspects.replaceAll("__typename", ""),
            variables: {
              input: {
                id: caseSuspectsRecord.id,
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
      {...getOverrideProps(overrides, "CaseSuspectsUpdateForm")}
      {...rest}
    >
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              appcaseID: value,
              suspectID,
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
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              appcaseID,
              suspectID: value,
            };
            const result = onChange(modelFields);
            value = result?.suspectID ?? value;
          }
          setSuspectID(value);
          setCurrentSuspectIDValue(undefined);
        }}
        currentFieldValue={currentSuspectIDValue}
        label={"Suspect id"}
        items={suspectID ? [suspectID] : []}
        hasError={errors?.suspectID?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("suspectID", currentSuspectIDValue)
        }
        errorMessage={errors?.suspectID?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.suspectID(
                suspectIDRecords.find((r) => r.id === value) ??
                  selectedSuspectIDRecords.find((r) => r.id === value)
              )
            : ""
        }
        setFieldValue={(value) => {
          setCurrentSuspectIDDisplayValue(
            value
              ? getDisplayValue.suspectID(
                  suspectIDRecords.find((r) => r.id === value) ??
                    selectedSuspectIDRecords.find((r) => r.id === value)
                )
              : ""
          );
          setCurrentSuspectIDValue(value);
          const selectedRecord = suspectIDRecords.find((r) => r.id === value);
          if (selectedRecord) {
            setSelectedSuspectIDRecords([selectedRecord]);
          }
        }}
        inputFieldRef={suspectIDRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Suspect id"
          isRequired={true}
          isReadOnly={false}
          placeholder="Search Suspect"
          value={currentSuspectIDDisplayValue}
          options={suspectIDRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.suspectID?.(r),
            }))}
          isLoading={suspectIDLoading}
          onSelect={({ id, label }) => {
            setCurrentSuspectIDValue(id);
            setCurrentSuspectIDDisplayValue(label);
            runValidationTasks("suspectID", label);
          }}
          onClear={() => {
            setCurrentSuspectIDDisplayValue("");
          }}
          defaultValue={suspectID}
          onChange={(e) => {
            let { value } = e.target;
            fetchSuspectIDRecords(value);
            if (errors.suspectID?.hasError) {
              runValidationTasks("suspectID", value);
            }
            setCurrentSuspectIDDisplayValue(value);
            setCurrentSuspectIDValue(undefined);
          }}
          onBlur={() => runValidationTasks("suspectID", currentSuspectIDValue)}
          errorMessage={errors.suspectID?.errorMessage}
          hasError={errors.suspectID?.hasError}
          ref={suspectIDRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "suspectID")}
        ></Autocomplete>
      </ArrayField>
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
          isDisabled={!(idProp || caseSuspectsModelProp)}
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
              !(idProp || caseSuspectsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
