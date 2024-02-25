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
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { listAppCases } from "../graphql/queries";
import { createCaseNote } from "../graphql/mutations";
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
export default function CaseNoteCreateForm(props) {
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
    note_title: "",
    note_content: "",
    note_create_date: "",
    appcaseID: undefined,
  };
  const [note_title, setNote_title] = React.useState(initialValues.note_title);
  const [note_content, setNote_content] = React.useState(
    initialValues.note_content
  );
  const [note_create_date, setNote_create_date] = React.useState(
    initialValues.note_create_date
  );
  const [appcaseID, setAppcaseID] = React.useState(initialValues.appcaseID);
  const [appcaseIDLoading, setAppcaseIDLoading] = React.useState(false);
  const [appcaseIDRecords, setAppcaseIDRecords] = React.useState([]);
  const [selectedAppcaseIDRecords, setSelectedAppcaseIDRecords] =
    React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setNote_title(initialValues.note_title);
    setNote_content(initialValues.note_content);
    setNote_create_date(initialValues.note_create_date);
    setAppcaseID(initialValues.appcaseID);
    setCurrentAppcaseIDValue(undefined);
    setCurrentAppcaseIDDisplayValue("");
    setErrors({});
  };
  const [currentAppcaseIDDisplayValue, setCurrentAppcaseIDDisplayValue] =
    React.useState("");
  const [currentAppcaseIDValue, setCurrentAppcaseIDValue] =
    React.useState(undefined);
  const appcaseIDRef = React.createRef();
  const getDisplayValue = {
    appcaseID: (r) => `${r?.case_title ? r?.case_title + " - " : ""}${r?.id}`,
  };
  const validations = {
    note_title: [{ type: "Required" }],
    note_content: [],
    note_create_date: [],
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
          note_title,
          note_content,
          note_create_date,
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
            query: createCaseNote.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "CaseNoteCreateForm")}
      {...rest}
    >
      <TextField
        label="Note title"
        isRequired={true}
        isReadOnly={false}
        value={note_title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              note_title: value,
              note_content,
              note_create_date,
              appcaseID,
            };
            const result = onChange(modelFields);
            value = result?.note_title ?? value;
          }
          if (errors.note_title?.hasError) {
            runValidationTasks("note_title", value);
          }
          setNote_title(value);
        }}
        onBlur={() => runValidationTasks("note_title", note_title)}
        errorMessage={errors.note_title?.errorMessage}
        hasError={errors.note_title?.hasError}
        {...getOverrideProps(overrides, "note_title")}
      ></TextField>
      <TextField
        label="Note content"
        isRequired={false}
        isReadOnly={false}
        value={note_content}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              note_title,
              note_content: value,
              note_create_date,
              appcaseID,
            };
            const result = onChange(modelFields);
            value = result?.note_content ?? value;
          }
          if (errors.note_content?.hasError) {
            runValidationTasks("note_content", value);
          }
          setNote_content(value);
        }}
        onBlur={() => runValidationTasks("note_content", note_content)}
        errorMessage={errors.note_content?.errorMessage}
        hasError={errors.note_content?.hasError}
        {...getOverrideProps(overrides, "note_content")}
      ></TextField>
      <TextField
        label="Note create date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={note_create_date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              note_title,
              note_content,
              note_create_date: value,
              appcaseID,
            };
            const result = onChange(modelFields);
            value = result?.note_create_date ?? value;
          }
          if (errors.note_create_date?.hasError) {
            runValidationTasks("note_create_date", value);
          }
          setNote_create_date(value);
        }}
        onBlur={() => runValidationTasks("note_create_date", note_create_date)}
        errorMessage={errors.note_create_date?.errorMessage}
        hasError={errors.note_create_date?.hasError}
        {...getOverrideProps(overrides, "note_create_date")}
      ></TextField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              note_title,
              note_content,
              note_create_date,
              appcaseID: value,
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
