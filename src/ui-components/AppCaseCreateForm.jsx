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
import {
  listCaseNotes,
  listCaseSuspects,
  listEvidences,
} from "../graphql/queries";
import {
  createAppCase,
  updateCaseNote,
  updateCaseSuspects,
  updateEvidence,
} from "../graphql/mutations";
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
    Evidences: [],
    CaseNotes: [],
    CaseSuspects: [],
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
  const [Evidences, setEvidences] = React.useState(initialValues.Evidences);
  const [EvidencesLoading, setEvidencesLoading] = React.useState(false);
  const [evidencesRecords, setEvidencesRecords] = React.useState([]);
  const [CaseNotes, setCaseNotes] = React.useState(initialValues.CaseNotes);
  const [CaseNotesLoading, setCaseNotesLoading] = React.useState(false);
  const [caseNotesRecords, setCaseNotesRecords] = React.useState([]);
  const [CaseSuspects, setCaseSuspects] = React.useState(
    initialValues.CaseSuspects
  );
  const [CaseSuspectsLoading, setCaseSuspectsLoading] = React.useState(false);
  const [caseSuspectsRecords, setCaseSuspectsRecords] = React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setCase_title(initialValues.case_title);
    setCase_description(initialValues.case_description);
    setCase_created_date(initialValues.case_created_date);
    setCase_offense(initialValues.case_offense);
    setCase_offense_category(initialValues.case_offense_category);
    setEvidences(initialValues.Evidences);
    setCurrentEvidencesValue(undefined);
    setCurrentEvidencesDisplayValue("");
    setCaseNotes(initialValues.CaseNotes);
    setCurrentCaseNotesValue(undefined);
    setCurrentCaseNotesDisplayValue("");
    setCaseSuspects(initialValues.CaseSuspects);
    setCurrentCaseSuspectsValue(undefined);
    setCurrentCaseSuspectsDisplayValue("");
    setErrors({});
  };
  const [currentEvidencesDisplayValue, setCurrentEvidencesDisplayValue] =
    React.useState("");
  const [currentEvidencesValue, setCurrentEvidencesValue] =
    React.useState(undefined);
  const EvidencesRef = React.createRef();
  const [currentCaseNotesDisplayValue, setCurrentCaseNotesDisplayValue] =
    React.useState("");
  const [currentCaseNotesValue, setCurrentCaseNotesValue] =
    React.useState(undefined);
  const CaseNotesRef = React.createRef();
  const [currentCaseSuspectsDisplayValue, setCurrentCaseSuspectsDisplayValue] =
    React.useState("");
  const [currentCaseSuspectsValue, setCurrentCaseSuspectsValue] =
    React.useState(undefined);
  const CaseSuspectsRef = React.createRef();
  const getIDValue = {
    Evidences: (r) => JSON.stringify({ id: r?.id }),
    CaseNotes: (r) => JSON.stringify({ id: r?.id }),
    CaseSuspects: (r) => JSON.stringify({ id: r?.id }),
  };
  const EvidencesIdSet = new Set(
    Array.isArray(Evidences)
      ? Evidences.map((r) => getIDValue.Evidences?.(r))
      : getIDValue.Evidences?.(Evidences)
  );
  const CaseNotesIdSet = new Set(
    Array.isArray(CaseNotes)
      ? CaseNotes.map((r) => getIDValue.CaseNotes?.(r))
      : getIDValue.CaseNotes?.(CaseNotes)
  );
  const CaseSuspectsIdSet = new Set(
    Array.isArray(CaseSuspects)
      ? CaseSuspects.map((r) => getIDValue.CaseSuspects?.(r))
      : getIDValue.CaseSuspects?.(CaseSuspects)
  );
  const getDisplayValue = {
    Evidences: (r) =>
      `${r?.evidence_type ? r?.evidence_type + " - " : ""}${r?.id}`,
    CaseNotes: (r) => `${r?.note_title ? r?.note_title + " - " : ""}${r?.id}`,
    CaseSuspects: (r) => r?.id,
  };
  const validations = {
    case_title: [],
    case_description: [],
    case_created_date: [],
    case_offense: [],
    case_offense_category: [],
    Evidences: [],
    CaseNotes: [],
    CaseSuspects: [],
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
  const fetchEvidencesRecords = async (value) => {
    setEvidencesLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [
            { evidence_type: { contains: value } },
            { id: { contains: value } },
          ],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await client.graphql({
          query: listEvidences.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listEvidences?.items;
      var loaded = result.filter(
        (item) => !EvidencesIdSet.has(getIDValue.Evidences?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setEvidencesRecords(newOptions.slice(0, autocompleteLength));
    setEvidencesLoading(false);
  };
  const fetchCaseNotesRecords = async (value) => {
    setCaseNotesLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [
            { note_title: { contains: value } },
            { id: { contains: value } },
          ],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await client.graphql({
          query: listCaseNotes.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listCaseNotes?.items;
      var loaded = result.filter(
        (item) => !CaseNotesIdSet.has(getIDValue.CaseNotes?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setCaseNotesRecords(newOptions.slice(0, autocompleteLength));
    setCaseNotesLoading(false);
  };
  const fetchCaseSuspectsRecords = async (value) => {
    setCaseSuspectsLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: { or: [{ id: { contains: value } }] },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await client.graphql({
          query: listCaseSuspects.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listCaseSuspects?.items;
      var loaded = result.filter(
        (item) => !CaseSuspectsIdSet.has(getIDValue.CaseSuspects?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setCaseSuspectsRecords(newOptions.slice(0, autocompleteLength));
    setCaseSuspectsLoading(false);
  };
  React.useEffect(() => {
    fetchEvidencesRecords("");
    fetchCaseNotesRecords("");
    fetchCaseSuspectsRecords("");
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
          case_title,
          case_description,
          case_created_date,
          case_offense,
          case_offense_category,
          Evidences,
          CaseNotes,
          CaseSuspects,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(
                    fieldName,
                    item,
                    getDisplayValue[fieldName]
                  )
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(
                fieldName,
                modelFields[fieldName],
                getDisplayValue[fieldName]
              )
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
          const modelFieldsToSave = {
            case_title: modelFields.case_title,
            case_description: modelFields.case_description,
            case_created_date: modelFields.case_created_date,
            case_offense: modelFields.case_offense,
            case_offense_category: modelFields.case_offense_category,
          };
          const appCase = (
            await client.graphql({
              query: createAppCase.replaceAll("__typename", ""),
              variables: {
                input: {
                  ...modelFieldsToSave,
                },
              },
            })
          )?.data?.createAppCase;
          const promises = [];
          promises.push(
            ...Evidences.reduce((promises, original) => {
              promises.push(
                client.graphql({
                  query: updateEvidence.replaceAll("__typename", ""),
                  variables: {
                    input: {
                      id: original.id,
                      appcaseID: appCase.id,
                    },
                  },
                })
              );
              return promises;
            }, [])
          );
          promises.push(
            ...CaseNotes.reduce((promises, original) => {
              promises.push(
                client.graphql({
                  query: updateCaseNote.replaceAll("__typename", ""),
                  variables: {
                    input: {
                      id: original.id,
                      appcaseID: appCase.id,
                    },
                  },
                })
              );
              return promises;
            }, [])
          );
          promises.push(
            ...CaseSuspects.reduce((promises, original) => {
              promises.push(
                client.graphql({
                  query: updateCaseSuspects.replaceAll("__typename", ""),
                  variables: {
                    input: {
                      id: original.id,
                      appcaseID: appCase.id,
                    },
                  },
                })
              );
              return promises;
            }, [])
          );
          await Promise.all(promises);
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
              Evidences,
              CaseNotes,
              CaseSuspects,
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
              Evidences,
              CaseNotes,
              CaseSuspects,
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
              Evidences,
              CaseNotes,
              CaseSuspects,
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
              Evidences,
              CaseNotes,
              CaseSuspects,
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
              Evidences,
              CaseNotes,
              CaseSuspects,
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
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              case_title,
              case_description,
              case_created_date,
              case_offense,
              case_offense_category,
              Evidences: values,
              CaseNotes,
              CaseSuspects,
            };
            const result = onChange(modelFields);
            values = result?.Evidences ?? values;
          }
          setEvidences(values);
          setCurrentEvidencesValue(undefined);
          setCurrentEvidencesDisplayValue("");
        }}
        currentFieldValue={currentEvidencesValue}
        label={"Evidences"}
        items={Evidences}
        hasError={errors?.Evidences?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("Evidences", currentEvidencesValue)
        }
        errorMessage={errors?.Evidences?.errorMessage}
        getBadgeText={getDisplayValue.Evidences}
        setFieldValue={(model) => {
          setCurrentEvidencesDisplayValue(
            model ? getDisplayValue.Evidences(model) : ""
          );
          setCurrentEvidencesValue(model);
        }}
        inputFieldRef={EvidencesRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Evidences"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Evidence"
          value={currentEvidencesDisplayValue}
          options={evidencesRecords
            .filter((r) => !EvidencesIdSet.has(getIDValue.Evidences?.(r)))
            .map((r) => ({
              id: getIDValue.Evidences?.(r),
              label: getDisplayValue.Evidences?.(r),
            }))}
          isLoading={EvidencesLoading}
          onSelect={({ id, label }) => {
            setCurrentEvidencesValue(
              evidencesRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentEvidencesDisplayValue(label);
            runValidationTasks("Evidences", label);
          }}
          onClear={() => {
            setCurrentEvidencesDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchEvidencesRecords(value);
            if (errors.Evidences?.hasError) {
              runValidationTasks("Evidences", value);
            }
            setCurrentEvidencesDisplayValue(value);
            setCurrentEvidencesValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("Evidences", currentEvidencesDisplayValue)
          }
          errorMessage={errors.Evidences?.errorMessage}
          hasError={errors.Evidences?.hasError}
          ref={EvidencesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Evidences")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              case_title,
              case_description,
              case_created_date,
              case_offense,
              case_offense_category,
              Evidences,
              CaseNotes: values,
              CaseSuspects,
            };
            const result = onChange(modelFields);
            values = result?.CaseNotes ?? values;
          }
          setCaseNotes(values);
          setCurrentCaseNotesValue(undefined);
          setCurrentCaseNotesDisplayValue("");
        }}
        currentFieldValue={currentCaseNotesValue}
        label={"Case notes"}
        items={CaseNotes}
        hasError={errors?.CaseNotes?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("CaseNotes", currentCaseNotesValue)
        }
        errorMessage={errors?.CaseNotes?.errorMessage}
        getBadgeText={getDisplayValue.CaseNotes}
        setFieldValue={(model) => {
          setCurrentCaseNotesDisplayValue(
            model ? getDisplayValue.CaseNotes(model) : ""
          );
          setCurrentCaseNotesValue(model);
        }}
        inputFieldRef={CaseNotesRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Case notes"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search CaseNote"
          value={currentCaseNotesDisplayValue}
          options={caseNotesRecords
            .filter((r) => !CaseNotesIdSet.has(getIDValue.CaseNotes?.(r)))
            .map((r) => ({
              id: getIDValue.CaseNotes?.(r),
              label: getDisplayValue.CaseNotes?.(r),
            }))}
          isLoading={CaseNotesLoading}
          onSelect={({ id, label }) => {
            setCurrentCaseNotesValue(
              caseNotesRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentCaseNotesDisplayValue(label);
            runValidationTasks("CaseNotes", label);
          }}
          onClear={() => {
            setCurrentCaseNotesDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchCaseNotesRecords(value);
            if (errors.CaseNotes?.hasError) {
              runValidationTasks("CaseNotes", value);
            }
            setCurrentCaseNotesDisplayValue(value);
            setCurrentCaseNotesValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("CaseNotes", currentCaseNotesDisplayValue)
          }
          errorMessage={errors.CaseNotes?.errorMessage}
          hasError={errors.CaseNotes?.hasError}
          ref={CaseNotesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "CaseNotes")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              case_title,
              case_description,
              case_created_date,
              case_offense,
              case_offense_category,
              Evidences,
              CaseNotes,
              CaseSuspects: values,
            };
            const result = onChange(modelFields);
            values = result?.CaseSuspects ?? values;
          }
          setCaseSuspects(values);
          setCurrentCaseSuspectsValue(undefined);
          setCurrentCaseSuspectsDisplayValue("");
        }}
        currentFieldValue={currentCaseSuspectsValue}
        label={"Case suspects"}
        items={CaseSuspects}
        hasError={errors?.CaseSuspects?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("CaseSuspects", currentCaseSuspectsValue)
        }
        errorMessage={errors?.CaseSuspects?.errorMessage}
        getBadgeText={getDisplayValue.CaseSuspects}
        setFieldValue={(model) => {
          setCurrentCaseSuspectsDisplayValue(
            model ? getDisplayValue.CaseSuspects(model) : ""
          );
          setCurrentCaseSuspectsValue(model);
        }}
        inputFieldRef={CaseSuspectsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Case suspects"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search CaseSuspects"
          value={currentCaseSuspectsDisplayValue}
          options={caseSuspectsRecords
            .filter((r) => !CaseSuspectsIdSet.has(getIDValue.CaseSuspects?.(r)))
            .map((r) => ({
              id: getIDValue.CaseSuspects?.(r),
              label: getDisplayValue.CaseSuspects?.(r),
            }))}
          isLoading={CaseSuspectsLoading}
          onSelect={({ id, label }) => {
            setCurrentCaseSuspectsValue(
              caseSuspectsRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentCaseSuspectsDisplayValue(label);
            runValidationTasks("CaseSuspects", label);
          }}
          onClear={() => {
            setCurrentCaseSuspectsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchCaseSuspectsRecords(value);
            if (errors.CaseSuspects?.hasError) {
              runValidationTasks("CaseSuspects", value);
            }
            setCurrentCaseSuspectsDisplayValue(value);
            setCurrentCaseSuspectsValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("CaseSuspects", currentCaseSuspectsDisplayValue)
          }
          errorMessage={errors.CaseSuspects?.errorMessage}
          hasError={errors.CaseSuspects?.hasError}
          ref={CaseSuspectsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "CaseSuspects")}
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
