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
import { listCaseSuspects } from "../graphql/queries";
import { createSuspect, updateCaseSuspects } from "../graphql/mutations";
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
export default function SuspectCreateForm(props) {
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
    suspect_name: "",
    suspect_date_of_birth: "",
    suspect_gender: "",
    suspect_nationality: "",
    suspect_address: "",
    suspect_occupation: "",
    suspect_employer: "",
    suspect_education: "",
    suspect_phone: "",
    suspect_email: "",
    suspect_facebook: "",
    suspect_twitter: "",
    suspect_instagram: "",
    suspect_linkedIn: "",
    suspect_ticktock: "",
    suspect_height_inches: "",
    suspect_eyecolor: "",
    suspect_tattoos: "",
    suspect_scars: "",
    suspect_criminal_record: "",
    suspect_legal_status: "",
    suspect_known_associates: "",
    suspect_background_information: "",
    suspect_created_date: "",
    CaseSuspects: [],
  };
  const [suspect_name, setSuspect_name] = React.useState(
    initialValues.suspect_name
  );
  const [suspect_date_of_birth, setSuspect_date_of_birth] = React.useState(
    initialValues.suspect_date_of_birth
  );
  const [suspect_gender, setSuspect_gender] = React.useState(
    initialValues.suspect_gender
  );
  const [suspect_nationality, setSuspect_nationality] = React.useState(
    initialValues.suspect_nationality
  );
  const [suspect_address, setSuspect_address] = React.useState(
    initialValues.suspect_address
  );
  const [suspect_occupation, setSuspect_occupation] = React.useState(
    initialValues.suspect_occupation
  );
  const [suspect_employer, setSuspect_employer] = React.useState(
    initialValues.suspect_employer
  );
  const [suspect_education, setSuspect_education] = React.useState(
    initialValues.suspect_education
  );
  const [suspect_phone, setSuspect_phone] = React.useState(
    initialValues.suspect_phone
  );
  const [suspect_email, setSuspect_email] = React.useState(
    initialValues.suspect_email
  );
  const [suspect_facebook, setSuspect_facebook] = React.useState(
    initialValues.suspect_facebook
  );
  const [suspect_twitter, setSuspect_twitter] = React.useState(
    initialValues.suspect_twitter
  );
  const [suspect_instagram, setSuspect_instagram] = React.useState(
    initialValues.suspect_instagram
  );
  const [suspect_linkedIn, setSuspect_linkedIn] = React.useState(
    initialValues.suspect_linkedIn
  );
  const [suspect_ticktock, setSuspect_ticktock] = React.useState(
    initialValues.suspect_ticktock
  );
  const [suspect_height_inches, setSuspect_height_inches] = React.useState(
    initialValues.suspect_height_inches
  );
  const [suspect_eyecolor, setSuspect_eyecolor] = React.useState(
    initialValues.suspect_eyecolor
  );
  const [suspect_tattoos, setSuspect_tattoos] = React.useState(
    initialValues.suspect_tattoos
  );
  const [suspect_scars, setSuspect_scars] = React.useState(
    initialValues.suspect_scars
  );
  const [suspect_criminal_record, setSuspect_criminal_record] = React.useState(
    initialValues.suspect_criminal_record
  );
  const [suspect_legal_status, setSuspect_legal_status] = React.useState(
    initialValues.suspect_legal_status
  );
  const [suspect_known_associates, setSuspect_known_associates] =
    React.useState(initialValues.suspect_known_associates);
  const [suspect_background_information, setSuspect_background_information] =
    React.useState(initialValues.suspect_background_information);
  const [suspect_created_date, setSuspect_created_date] = React.useState(
    initialValues.suspect_created_date
  );
  const [CaseSuspects, setCaseSuspects] = React.useState(
    initialValues.CaseSuspects
  );
  const [CaseSuspectsLoading, setCaseSuspectsLoading] = React.useState(false);
  const [caseSuspectsRecords, setCaseSuspectsRecords] = React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setSuspect_name(initialValues.suspect_name);
    setSuspect_date_of_birth(initialValues.suspect_date_of_birth);
    setSuspect_gender(initialValues.suspect_gender);
    setSuspect_nationality(initialValues.suspect_nationality);
    setSuspect_address(initialValues.suspect_address);
    setSuspect_occupation(initialValues.suspect_occupation);
    setSuspect_employer(initialValues.suspect_employer);
    setSuspect_education(initialValues.suspect_education);
    setSuspect_phone(initialValues.suspect_phone);
    setSuspect_email(initialValues.suspect_email);
    setSuspect_facebook(initialValues.suspect_facebook);
    setSuspect_twitter(initialValues.suspect_twitter);
    setSuspect_instagram(initialValues.suspect_instagram);
    setSuspect_linkedIn(initialValues.suspect_linkedIn);
    setSuspect_ticktock(initialValues.suspect_ticktock);
    setSuspect_height_inches(initialValues.suspect_height_inches);
    setSuspect_eyecolor(initialValues.suspect_eyecolor);
    setSuspect_tattoos(initialValues.suspect_tattoos);
    setSuspect_scars(initialValues.suspect_scars);
    setSuspect_criminal_record(initialValues.suspect_criminal_record);
    setSuspect_legal_status(initialValues.suspect_legal_status);
    setSuspect_known_associates(initialValues.suspect_known_associates);
    setSuspect_background_information(
      initialValues.suspect_background_information
    );
    setSuspect_created_date(initialValues.suspect_created_date);
    setCaseSuspects(initialValues.CaseSuspects);
    setCurrentCaseSuspectsValue(undefined);
    setCurrentCaseSuspectsDisplayValue("");
    setErrors({});
  };
  const [currentCaseSuspectsDisplayValue, setCurrentCaseSuspectsDisplayValue] =
    React.useState("");
  const [currentCaseSuspectsValue, setCurrentCaseSuspectsValue] =
    React.useState(undefined);
  const CaseSuspectsRef = React.createRef();
  const getIDValue = {
    CaseSuspects: (r) => JSON.stringify({ id: r?.id }),
  };
  const CaseSuspectsIdSet = new Set(
    Array.isArray(CaseSuspects)
      ? CaseSuspects.map((r) => getIDValue.CaseSuspects?.(r))
      : getIDValue.CaseSuspects?.(CaseSuspects)
  );
  const getDisplayValue = {
    CaseSuspects: (r) => r?.id,
  };
  const validations = {
    suspect_name: [],
    suspect_date_of_birth: [],
    suspect_gender: [],
    suspect_nationality: [],
    suspect_address: [],
    suspect_occupation: [],
    suspect_employer: [],
    suspect_education: [],
    suspect_phone: [{ type: "Phone" }],
    suspect_email: [{ type: "Email" }],
    suspect_facebook: [{ type: "URL" }],
    suspect_twitter: [{ type: "URL" }],
    suspect_instagram: [{ type: "URL" }],
    suspect_linkedIn: [{ type: "URL" }],
    suspect_ticktock: [{ type: "URL" }],
    suspect_height_inches: [],
    suspect_eyecolor: [],
    suspect_tattoos: [],
    suspect_scars: [],
    suspect_criminal_record: [],
    suspect_legal_status: [],
    suspect_known_associates: [],
    suspect_background_information: [],
    suspect_created_date: [],
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
          suspect_name,
          suspect_date_of_birth,
          suspect_gender,
          suspect_nationality,
          suspect_address,
          suspect_occupation,
          suspect_employer,
          suspect_education,
          suspect_phone,
          suspect_email,
          suspect_facebook,
          suspect_twitter,
          suspect_instagram,
          suspect_linkedIn,
          suspect_ticktock,
          suspect_height_inches,
          suspect_eyecolor,
          suspect_tattoos,
          suspect_scars,
          suspect_criminal_record,
          suspect_legal_status,
          suspect_known_associates,
          suspect_background_information,
          suspect_created_date,
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
            suspect_name: modelFields.suspect_name,
            suspect_date_of_birth: modelFields.suspect_date_of_birth,
            suspect_gender: modelFields.suspect_gender,
            suspect_nationality: modelFields.suspect_nationality,
            suspect_address: modelFields.suspect_address,
            suspect_occupation: modelFields.suspect_occupation,
            suspect_employer: modelFields.suspect_employer,
            suspect_education: modelFields.suspect_education,
            suspect_phone: modelFields.suspect_phone,
            suspect_email: modelFields.suspect_email,
            suspect_facebook: modelFields.suspect_facebook,
            suspect_twitter: modelFields.suspect_twitter,
            suspect_instagram: modelFields.suspect_instagram,
            suspect_linkedIn: modelFields.suspect_linkedIn,
            suspect_ticktock: modelFields.suspect_ticktock,
            suspect_height_inches: modelFields.suspect_height_inches,
            suspect_eyecolor: modelFields.suspect_eyecolor,
            suspect_tattoos: modelFields.suspect_tattoos,
            suspect_scars: modelFields.suspect_scars,
            suspect_criminal_record: modelFields.suspect_criminal_record,
            suspect_legal_status: modelFields.suspect_legal_status,
            suspect_known_associates: modelFields.suspect_known_associates,
            suspect_background_information:
              modelFields.suspect_background_information,
            suspect_created_date: modelFields.suspect_created_date,
          };
          const suspect = (
            await client.graphql({
              query: createSuspect.replaceAll("__typename", ""),
              variables: {
                input: {
                  ...modelFieldsToSave,
                },
              },
            })
          )?.data?.createSuspect;
          const promises = [];
          promises.push(
            ...CaseSuspects.reduce((promises, original) => {
              promises.push(
                client.graphql({
                  query: updateCaseSuspects.replaceAll("__typename", ""),
                  variables: {
                    input: {
                      id: original.id,
                      suspectID: suspect.id,
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
      {...getOverrideProps(overrides, "SuspectCreateForm")}
      {...rest}
    >
      <TextField
        label="Suspect name"
        isRequired={false}
        isReadOnly={false}
        value={suspect_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              suspect_name: value,
              suspect_date_of_birth,
              suspect_gender,
              suspect_nationality,
              suspect_address,
              suspect_occupation,
              suspect_employer,
              suspect_education,
              suspect_phone,
              suspect_email,
              suspect_facebook,
              suspect_twitter,
              suspect_instagram,
              suspect_linkedIn,
              suspect_ticktock,
              suspect_height_inches,
              suspect_eyecolor,
              suspect_tattoos,
              suspect_scars,
              suspect_criminal_record,
              suspect_legal_status,
              suspect_known_associates,
              suspect_background_information,
              suspect_created_date,
              CaseSuspects,
            };
            const result = onChange(modelFields);
            value = result?.suspect_name ?? value;
          }
          if (errors.suspect_name?.hasError) {
            runValidationTasks("suspect_name", value);
          }
          setSuspect_name(value);
        }}
        onBlur={() => runValidationTasks("suspect_name", suspect_name)}
        errorMessage={errors.suspect_name?.errorMessage}
        hasError={errors.suspect_name?.hasError}
        {...getOverrideProps(overrides, "suspect_name")}
      ></TextField>
      <TextField
        label="Suspect date of birth"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={suspect_date_of_birth}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              suspect_name,
              suspect_date_of_birth: value,
              suspect_gender,
              suspect_nationality,
              suspect_address,
              suspect_occupation,
              suspect_employer,
              suspect_education,
              suspect_phone,
              suspect_email,
              suspect_facebook,
              suspect_twitter,
              suspect_instagram,
              suspect_linkedIn,
              suspect_ticktock,
              suspect_height_inches,
              suspect_eyecolor,
              suspect_tattoos,
              suspect_scars,
              suspect_criminal_record,
              suspect_legal_status,
              suspect_known_associates,
              suspect_background_information,
              suspect_created_date,
              CaseSuspects,
            };
            const result = onChange(modelFields);
            value = result?.suspect_date_of_birth ?? value;
          }
          if (errors.suspect_date_of_birth?.hasError) {
            runValidationTasks("suspect_date_of_birth", value);
          }
          setSuspect_date_of_birth(value);
        }}
        onBlur={() =>
          runValidationTasks("suspect_date_of_birth", suspect_date_of_birth)
        }
        errorMessage={errors.suspect_date_of_birth?.errorMessage}
        hasError={errors.suspect_date_of_birth?.hasError}
        {...getOverrideProps(overrides, "suspect_date_of_birth")}
      ></TextField>
      <SelectField
        label="Suspect gender"
        placeholder="Please select an option"
        isDisabled={false}
        value={suspect_gender}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              suspect_name,
              suspect_date_of_birth,
              suspect_gender: value,
              suspect_nationality,
              suspect_address,
              suspect_occupation,
              suspect_employer,
              suspect_education,
              suspect_phone,
              suspect_email,
              suspect_facebook,
              suspect_twitter,
              suspect_instagram,
              suspect_linkedIn,
              suspect_ticktock,
              suspect_height_inches,
              suspect_eyecolor,
              suspect_tattoos,
              suspect_scars,
              suspect_criminal_record,
              suspect_legal_status,
              suspect_known_associates,
              suspect_background_information,
              suspect_created_date,
              CaseSuspects,
            };
            const result = onChange(modelFields);
            value = result?.suspect_gender ?? value;
          }
          if (errors.suspect_gender?.hasError) {
            runValidationTasks("suspect_gender", value);
          }
          setSuspect_gender(value);
        }}
        onBlur={() => runValidationTasks("suspect_gender", suspect_gender)}
        errorMessage={errors.suspect_gender?.errorMessage}
        hasError={errors.suspect_gender?.hasError}
        {...getOverrideProps(overrides, "suspect_gender")}
      >
        <option
          children="Female"
          value="FEMALE"
          {...getOverrideProps(overrides, "suspect_genderoption0")}
        ></option>
        <option
          children="Male"
          value="MALE"
          {...getOverrideProps(overrides, "suspect_genderoption1")}
        ></option>
        <option
          children="Unknown"
          value="UNKNOWN"
          {...getOverrideProps(overrides, "suspect_genderoption2")}
        ></option>
      </SelectField>
      <TextField
        label="Suspect nationality"
        isRequired={false}
        isReadOnly={false}
        value={suspect_nationality}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              suspect_name,
              suspect_date_of_birth,
              suspect_gender,
              suspect_nationality: value,
              suspect_address,
              suspect_occupation,
              suspect_employer,
              suspect_education,
              suspect_phone,
              suspect_email,
              suspect_facebook,
              suspect_twitter,
              suspect_instagram,
              suspect_linkedIn,
              suspect_ticktock,
              suspect_height_inches,
              suspect_eyecolor,
              suspect_tattoos,
              suspect_scars,
              suspect_criminal_record,
              suspect_legal_status,
              suspect_known_associates,
              suspect_background_information,
              suspect_created_date,
              CaseSuspects,
            };
            const result = onChange(modelFields);
            value = result?.suspect_nationality ?? value;
          }
          if (errors.suspect_nationality?.hasError) {
            runValidationTasks("suspect_nationality", value);
          }
          setSuspect_nationality(value);
        }}
        onBlur={() =>
          runValidationTasks("suspect_nationality", suspect_nationality)
        }
        errorMessage={errors.suspect_nationality?.errorMessage}
        hasError={errors.suspect_nationality?.hasError}
        {...getOverrideProps(overrides, "suspect_nationality")}
      ></TextField>
      <TextField
        label="Suspect address"
        isRequired={false}
        isReadOnly={false}
        value={suspect_address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              suspect_name,
              suspect_date_of_birth,
              suspect_gender,
              suspect_nationality,
              suspect_address: value,
              suspect_occupation,
              suspect_employer,
              suspect_education,
              suspect_phone,
              suspect_email,
              suspect_facebook,
              suspect_twitter,
              suspect_instagram,
              suspect_linkedIn,
              suspect_ticktock,
              suspect_height_inches,
              suspect_eyecolor,
              suspect_tattoos,
              suspect_scars,
              suspect_criminal_record,
              suspect_legal_status,
              suspect_known_associates,
              suspect_background_information,
              suspect_created_date,
              CaseSuspects,
            };
            const result = onChange(modelFields);
            value = result?.suspect_address ?? value;
          }
          if (errors.suspect_address?.hasError) {
            runValidationTasks("suspect_address", value);
          }
          setSuspect_address(value);
        }}
        onBlur={() => runValidationTasks("suspect_address", suspect_address)}
        errorMessage={errors.suspect_address?.errorMessage}
        hasError={errors.suspect_address?.hasError}
        {...getOverrideProps(overrides, "suspect_address")}
      ></TextField>
      <TextField
        label="Suspect occupation"
        isRequired={false}
        isReadOnly={false}
        value={suspect_occupation}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              suspect_name,
              suspect_date_of_birth,
              suspect_gender,
              suspect_nationality,
              suspect_address,
              suspect_occupation: value,
              suspect_employer,
              suspect_education,
              suspect_phone,
              suspect_email,
              suspect_facebook,
              suspect_twitter,
              suspect_instagram,
              suspect_linkedIn,
              suspect_ticktock,
              suspect_height_inches,
              suspect_eyecolor,
              suspect_tattoos,
              suspect_scars,
              suspect_criminal_record,
              suspect_legal_status,
              suspect_known_associates,
              suspect_background_information,
              suspect_created_date,
              CaseSuspects,
            };
            const result = onChange(modelFields);
            value = result?.suspect_occupation ?? value;
          }
          if (errors.suspect_occupation?.hasError) {
            runValidationTasks("suspect_occupation", value);
          }
          setSuspect_occupation(value);
        }}
        onBlur={() =>
          runValidationTasks("suspect_occupation", suspect_occupation)
        }
        errorMessage={errors.suspect_occupation?.errorMessage}
        hasError={errors.suspect_occupation?.hasError}
        {...getOverrideProps(overrides, "suspect_occupation")}
      ></TextField>
      <TextField
        label="Suspect employer"
        isRequired={false}
        isReadOnly={false}
        value={suspect_employer}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              suspect_name,
              suspect_date_of_birth,
              suspect_gender,
              suspect_nationality,
              suspect_address,
              suspect_occupation,
              suspect_employer: value,
              suspect_education,
              suspect_phone,
              suspect_email,
              suspect_facebook,
              suspect_twitter,
              suspect_instagram,
              suspect_linkedIn,
              suspect_ticktock,
              suspect_height_inches,
              suspect_eyecolor,
              suspect_tattoos,
              suspect_scars,
              suspect_criminal_record,
              suspect_legal_status,
              suspect_known_associates,
              suspect_background_information,
              suspect_created_date,
              CaseSuspects,
            };
            const result = onChange(modelFields);
            value = result?.suspect_employer ?? value;
          }
          if (errors.suspect_employer?.hasError) {
            runValidationTasks("suspect_employer", value);
          }
          setSuspect_employer(value);
        }}
        onBlur={() => runValidationTasks("suspect_employer", suspect_employer)}
        errorMessage={errors.suspect_employer?.errorMessage}
        hasError={errors.suspect_employer?.hasError}
        {...getOverrideProps(overrides, "suspect_employer")}
      ></TextField>
      <TextField
        label="Suspect education"
        isRequired={false}
        isReadOnly={false}
        value={suspect_education}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              suspect_name,
              suspect_date_of_birth,
              suspect_gender,
              suspect_nationality,
              suspect_address,
              suspect_occupation,
              suspect_employer,
              suspect_education: value,
              suspect_phone,
              suspect_email,
              suspect_facebook,
              suspect_twitter,
              suspect_instagram,
              suspect_linkedIn,
              suspect_ticktock,
              suspect_height_inches,
              suspect_eyecolor,
              suspect_tattoos,
              suspect_scars,
              suspect_criminal_record,
              suspect_legal_status,
              suspect_known_associates,
              suspect_background_information,
              suspect_created_date,
              CaseSuspects,
            };
            const result = onChange(modelFields);
            value = result?.suspect_education ?? value;
          }
          if (errors.suspect_education?.hasError) {
            runValidationTasks("suspect_education", value);
          }
          setSuspect_education(value);
        }}
        onBlur={() =>
          runValidationTasks("suspect_education", suspect_education)
        }
        errorMessage={errors.suspect_education?.errorMessage}
        hasError={errors.suspect_education?.hasError}
        {...getOverrideProps(overrides, "suspect_education")}
      ></TextField>
      <TextField
        label="Suspect phone"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={suspect_phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              suspect_name,
              suspect_date_of_birth,
              suspect_gender,
              suspect_nationality,
              suspect_address,
              suspect_occupation,
              suspect_employer,
              suspect_education,
              suspect_phone: value,
              suspect_email,
              suspect_facebook,
              suspect_twitter,
              suspect_instagram,
              suspect_linkedIn,
              suspect_ticktock,
              suspect_height_inches,
              suspect_eyecolor,
              suspect_tattoos,
              suspect_scars,
              suspect_criminal_record,
              suspect_legal_status,
              suspect_known_associates,
              suspect_background_information,
              suspect_created_date,
              CaseSuspects,
            };
            const result = onChange(modelFields);
            value = result?.suspect_phone ?? value;
          }
          if (errors.suspect_phone?.hasError) {
            runValidationTasks("suspect_phone", value);
          }
          setSuspect_phone(value);
        }}
        onBlur={() => runValidationTasks("suspect_phone", suspect_phone)}
        errorMessage={errors.suspect_phone?.errorMessage}
        hasError={errors.suspect_phone?.hasError}
        {...getOverrideProps(overrides, "suspect_phone")}
      ></TextField>
      <TextField
        label="Suspect email"
        isRequired={false}
        isReadOnly={false}
        value={suspect_email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              suspect_name,
              suspect_date_of_birth,
              suspect_gender,
              suspect_nationality,
              suspect_address,
              suspect_occupation,
              suspect_employer,
              suspect_education,
              suspect_phone,
              suspect_email: value,
              suspect_facebook,
              suspect_twitter,
              suspect_instagram,
              suspect_linkedIn,
              suspect_ticktock,
              suspect_height_inches,
              suspect_eyecolor,
              suspect_tattoos,
              suspect_scars,
              suspect_criminal_record,
              suspect_legal_status,
              suspect_known_associates,
              suspect_background_information,
              suspect_created_date,
              CaseSuspects,
            };
            const result = onChange(modelFields);
            value = result?.suspect_email ?? value;
          }
          if (errors.suspect_email?.hasError) {
            runValidationTasks("suspect_email", value);
          }
          setSuspect_email(value);
        }}
        onBlur={() => runValidationTasks("suspect_email", suspect_email)}
        errorMessage={errors.suspect_email?.errorMessage}
        hasError={errors.suspect_email?.hasError}
        {...getOverrideProps(overrides, "suspect_email")}
      ></TextField>
      <TextField
        label="Suspect facebook"
        isRequired={false}
        isReadOnly={false}
        value={suspect_facebook}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              suspect_name,
              suspect_date_of_birth,
              suspect_gender,
              suspect_nationality,
              suspect_address,
              suspect_occupation,
              suspect_employer,
              suspect_education,
              suspect_phone,
              suspect_email,
              suspect_facebook: value,
              suspect_twitter,
              suspect_instagram,
              suspect_linkedIn,
              suspect_ticktock,
              suspect_height_inches,
              suspect_eyecolor,
              suspect_tattoos,
              suspect_scars,
              suspect_criminal_record,
              suspect_legal_status,
              suspect_known_associates,
              suspect_background_information,
              suspect_created_date,
              CaseSuspects,
            };
            const result = onChange(modelFields);
            value = result?.suspect_facebook ?? value;
          }
          if (errors.suspect_facebook?.hasError) {
            runValidationTasks("suspect_facebook", value);
          }
          setSuspect_facebook(value);
        }}
        onBlur={() => runValidationTasks("suspect_facebook", suspect_facebook)}
        errorMessage={errors.suspect_facebook?.errorMessage}
        hasError={errors.suspect_facebook?.hasError}
        {...getOverrideProps(overrides, "suspect_facebook")}
      ></TextField>
      <TextField
        label="Suspect twitter"
        isRequired={false}
        isReadOnly={false}
        value={suspect_twitter}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              suspect_name,
              suspect_date_of_birth,
              suspect_gender,
              suspect_nationality,
              suspect_address,
              suspect_occupation,
              suspect_employer,
              suspect_education,
              suspect_phone,
              suspect_email,
              suspect_facebook,
              suspect_twitter: value,
              suspect_instagram,
              suspect_linkedIn,
              suspect_ticktock,
              suspect_height_inches,
              suspect_eyecolor,
              suspect_tattoos,
              suspect_scars,
              suspect_criminal_record,
              suspect_legal_status,
              suspect_known_associates,
              suspect_background_information,
              suspect_created_date,
              CaseSuspects,
            };
            const result = onChange(modelFields);
            value = result?.suspect_twitter ?? value;
          }
          if (errors.suspect_twitter?.hasError) {
            runValidationTasks("suspect_twitter", value);
          }
          setSuspect_twitter(value);
        }}
        onBlur={() => runValidationTasks("suspect_twitter", suspect_twitter)}
        errorMessage={errors.suspect_twitter?.errorMessage}
        hasError={errors.suspect_twitter?.hasError}
        {...getOverrideProps(overrides, "suspect_twitter")}
      ></TextField>
      <TextField
        label="Suspect instagram"
        isRequired={false}
        isReadOnly={false}
        value={suspect_instagram}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              suspect_name,
              suspect_date_of_birth,
              suspect_gender,
              suspect_nationality,
              suspect_address,
              suspect_occupation,
              suspect_employer,
              suspect_education,
              suspect_phone,
              suspect_email,
              suspect_facebook,
              suspect_twitter,
              suspect_instagram: value,
              suspect_linkedIn,
              suspect_ticktock,
              suspect_height_inches,
              suspect_eyecolor,
              suspect_tattoos,
              suspect_scars,
              suspect_criminal_record,
              suspect_legal_status,
              suspect_known_associates,
              suspect_background_information,
              suspect_created_date,
              CaseSuspects,
            };
            const result = onChange(modelFields);
            value = result?.suspect_instagram ?? value;
          }
          if (errors.suspect_instagram?.hasError) {
            runValidationTasks("suspect_instagram", value);
          }
          setSuspect_instagram(value);
        }}
        onBlur={() =>
          runValidationTasks("suspect_instagram", suspect_instagram)
        }
        errorMessage={errors.suspect_instagram?.errorMessage}
        hasError={errors.suspect_instagram?.hasError}
        {...getOverrideProps(overrides, "suspect_instagram")}
      ></TextField>
      <TextField
        label="Suspect linked in"
        isRequired={false}
        isReadOnly={false}
        value={suspect_linkedIn}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              suspect_name,
              suspect_date_of_birth,
              suspect_gender,
              suspect_nationality,
              suspect_address,
              suspect_occupation,
              suspect_employer,
              suspect_education,
              suspect_phone,
              suspect_email,
              suspect_facebook,
              suspect_twitter,
              suspect_instagram,
              suspect_linkedIn: value,
              suspect_ticktock,
              suspect_height_inches,
              suspect_eyecolor,
              suspect_tattoos,
              suspect_scars,
              suspect_criminal_record,
              suspect_legal_status,
              suspect_known_associates,
              suspect_background_information,
              suspect_created_date,
              CaseSuspects,
            };
            const result = onChange(modelFields);
            value = result?.suspect_linkedIn ?? value;
          }
          if (errors.suspect_linkedIn?.hasError) {
            runValidationTasks("suspect_linkedIn", value);
          }
          setSuspect_linkedIn(value);
        }}
        onBlur={() => runValidationTasks("suspect_linkedIn", suspect_linkedIn)}
        errorMessage={errors.suspect_linkedIn?.errorMessage}
        hasError={errors.suspect_linkedIn?.hasError}
        {...getOverrideProps(overrides, "suspect_linkedIn")}
      ></TextField>
      <TextField
        label="Suspect ticktock"
        isRequired={false}
        isReadOnly={false}
        value={suspect_ticktock}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              suspect_name,
              suspect_date_of_birth,
              suspect_gender,
              suspect_nationality,
              suspect_address,
              suspect_occupation,
              suspect_employer,
              suspect_education,
              suspect_phone,
              suspect_email,
              suspect_facebook,
              suspect_twitter,
              suspect_instagram,
              suspect_linkedIn,
              suspect_ticktock: value,
              suspect_height_inches,
              suspect_eyecolor,
              suspect_tattoos,
              suspect_scars,
              suspect_criminal_record,
              suspect_legal_status,
              suspect_known_associates,
              suspect_background_information,
              suspect_created_date,
              CaseSuspects,
            };
            const result = onChange(modelFields);
            value = result?.suspect_ticktock ?? value;
          }
          if (errors.suspect_ticktock?.hasError) {
            runValidationTasks("suspect_ticktock", value);
          }
          setSuspect_ticktock(value);
        }}
        onBlur={() => runValidationTasks("suspect_ticktock", suspect_ticktock)}
        errorMessage={errors.suspect_ticktock?.errorMessage}
        hasError={errors.suspect_ticktock?.hasError}
        {...getOverrideProps(overrides, "suspect_ticktock")}
      ></TextField>
      <TextField
        label="Suspect height inches"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={suspect_height_inches}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              suspect_name,
              suspect_date_of_birth,
              suspect_gender,
              suspect_nationality,
              suspect_address,
              suspect_occupation,
              suspect_employer,
              suspect_education,
              suspect_phone,
              suspect_email,
              suspect_facebook,
              suspect_twitter,
              suspect_instagram,
              suspect_linkedIn,
              suspect_ticktock,
              suspect_height_inches: value,
              suspect_eyecolor,
              suspect_tattoos,
              suspect_scars,
              suspect_criminal_record,
              suspect_legal_status,
              suspect_known_associates,
              suspect_background_information,
              suspect_created_date,
              CaseSuspects,
            };
            const result = onChange(modelFields);
            value = result?.suspect_height_inches ?? value;
          }
          if (errors.suspect_height_inches?.hasError) {
            runValidationTasks("suspect_height_inches", value);
          }
          setSuspect_height_inches(value);
        }}
        onBlur={() =>
          runValidationTasks("suspect_height_inches", suspect_height_inches)
        }
        errorMessage={errors.suspect_height_inches?.errorMessage}
        hasError={errors.suspect_height_inches?.hasError}
        {...getOverrideProps(overrides, "suspect_height_inches")}
      ></TextField>
      <TextField
        label="Suspect eyecolor"
        isRequired={false}
        isReadOnly={false}
        value={suspect_eyecolor}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              suspect_name,
              suspect_date_of_birth,
              suspect_gender,
              suspect_nationality,
              suspect_address,
              suspect_occupation,
              suspect_employer,
              suspect_education,
              suspect_phone,
              suspect_email,
              suspect_facebook,
              suspect_twitter,
              suspect_instagram,
              suspect_linkedIn,
              suspect_ticktock,
              suspect_height_inches,
              suspect_eyecolor: value,
              suspect_tattoos,
              suspect_scars,
              suspect_criminal_record,
              suspect_legal_status,
              suspect_known_associates,
              suspect_background_information,
              suspect_created_date,
              CaseSuspects,
            };
            const result = onChange(modelFields);
            value = result?.suspect_eyecolor ?? value;
          }
          if (errors.suspect_eyecolor?.hasError) {
            runValidationTasks("suspect_eyecolor", value);
          }
          setSuspect_eyecolor(value);
        }}
        onBlur={() => runValidationTasks("suspect_eyecolor", suspect_eyecolor)}
        errorMessage={errors.suspect_eyecolor?.errorMessage}
        hasError={errors.suspect_eyecolor?.hasError}
        {...getOverrideProps(overrides, "suspect_eyecolor")}
      ></TextField>
      <TextField
        label="Suspect tattoos"
        isRequired={false}
        isReadOnly={false}
        value={suspect_tattoos}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              suspect_name,
              suspect_date_of_birth,
              suspect_gender,
              suspect_nationality,
              suspect_address,
              suspect_occupation,
              suspect_employer,
              suspect_education,
              suspect_phone,
              suspect_email,
              suspect_facebook,
              suspect_twitter,
              suspect_instagram,
              suspect_linkedIn,
              suspect_ticktock,
              suspect_height_inches,
              suspect_eyecolor,
              suspect_tattoos: value,
              suspect_scars,
              suspect_criminal_record,
              suspect_legal_status,
              suspect_known_associates,
              suspect_background_information,
              suspect_created_date,
              CaseSuspects,
            };
            const result = onChange(modelFields);
            value = result?.suspect_tattoos ?? value;
          }
          if (errors.suspect_tattoos?.hasError) {
            runValidationTasks("suspect_tattoos", value);
          }
          setSuspect_tattoos(value);
        }}
        onBlur={() => runValidationTasks("suspect_tattoos", suspect_tattoos)}
        errorMessage={errors.suspect_tattoos?.errorMessage}
        hasError={errors.suspect_tattoos?.hasError}
        {...getOverrideProps(overrides, "suspect_tattoos")}
      ></TextField>
      <TextField
        label="Suspect scars"
        isRequired={false}
        isReadOnly={false}
        value={suspect_scars}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              suspect_name,
              suspect_date_of_birth,
              suspect_gender,
              suspect_nationality,
              suspect_address,
              suspect_occupation,
              suspect_employer,
              suspect_education,
              suspect_phone,
              suspect_email,
              suspect_facebook,
              suspect_twitter,
              suspect_instagram,
              suspect_linkedIn,
              suspect_ticktock,
              suspect_height_inches,
              suspect_eyecolor,
              suspect_tattoos,
              suspect_scars: value,
              suspect_criminal_record,
              suspect_legal_status,
              suspect_known_associates,
              suspect_background_information,
              suspect_created_date,
              CaseSuspects,
            };
            const result = onChange(modelFields);
            value = result?.suspect_scars ?? value;
          }
          if (errors.suspect_scars?.hasError) {
            runValidationTasks("suspect_scars", value);
          }
          setSuspect_scars(value);
        }}
        onBlur={() => runValidationTasks("suspect_scars", suspect_scars)}
        errorMessage={errors.suspect_scars?.errorMessage}
        hasError={errors.suspect_scars?.hasError}
        {...getOverrideProps(overrides, "suspect_scars")}
      ></TextField>
      <TextField
        label="Suspect criminal record"
        isRequired={false}
        isReadOnly={false}
        value={suspect_criminal_record}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              suspect_name,
              suspect_date_of_birth,
              suspect_gender,
              suspect_nationality,
              suspect_address,
              suspect_occupation,
              suspect_employer,
              suspect_education,
              suspect_phone,
              suspect_email,
              suspect_facebook,
              suspect_twitter,
              suspect_instagram,
              suspect_linkedIn,
              suspect_ticktock,
              suspect_height_inches,
              suspect_eyecolor,
              suspect_tattoos,
              suspect_scars,
              suspect_criminal_record: value,
              suspect_legal_status,
              suspect_known_associates,
              suspect_background_information,
              suspect_created_date,
              CaseSuspects,
            };
            const result = onChange(modelFields);
            value = result?.suspect_criminal_record ?? value;
          }
          if (errors.suspect_criminal_record?.hasError) {
            runValidationTasks("suspect_criminal_record", value);
          }
          setSuspect_criminal_record(value);
        }}
        onBlur={() =>
          runValidationTasks("suspect_criminal_record", suspect_criminal_record)
        }
        errorMessage={errors.suspect_criminal_record?.errorMessage}
        hasError={errors.suspect_criminal_record?.hasError}
        {...getOverrideProps(overrides, "suspect_criminal_record")}
      ></TextField>
      <TextField
        label="Suspect legal status"
        isRequired={false}
        isReadOnly={false}
        value={suspect_legal_status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              suspect_name,
              suspect_date_of_birth,
              suspect_gender,
              suspect_nationality,
              suspect_address,
              suspect_occupation,
              suspect_employer,
              suspect_education,
              suspect_phone,
              suspect_email,
              suspect_facebook,
              suspect_twitter,
              suspect_instagram,
              suspect_linkedIn,
              suspect_ticktock,
              suspect_height_inches,
              suspect_eyecolor,
              suspect_tattoos,
              suspect_scars,
              suspect_criminal_record,
              suspect_legal_status: value,
              suspect_known_associates,
              suspect_background_information,
              suspect_created_date,
              CaseSuspects,
            };
            const result = onChange(modelFields);
            value = result?.suspect_legal_status ?? value;
          }
          if (errors.suspect_legal_status?.hasError) {
            runValidationTasks("suspect_legal_status", value);
          }
          setSuspect_legal_status(value);
        }}
        onBlur={() =>
          runValidationTasks("suspect_legal_status", suspect_legal_status)
        }
        errorMessage={errors.suspect_legal_status?.errorMessage}
        hasError={errors.suspect_legal_status?.hasError}
        {...getOverrideProps(overrides, "suspect_legal_status")}
      ></TextField>
      <TextField
        label="Suspect known associates"
        isRequired={false}
        isReadOnly={false}
        value={suspect_known_associates}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              suspect_name,
              suspect_date_of_birth,
              suspect_gender,
              suspect_nationality,
              suspect_address,
              suspect_occupation,
              suspect_employer,
              suspect_education,
              suspect_phone,
              suspect_email,
              suspect_facebook,
              suspect_twitter,
              suspect_instagram,
              suspect_linkedIn,
              suspect_ticktock,
              suspect_height_inches,
              suspect_eyecolor,
              suspect_tattoos,
              suspect_scars,
              suspect_criminal_record,
              suspect_legal_status,
              suspect_known_associates: value,
              suspect_background_information,
              suspect_created_date,
              CaseSuspects,
            };
            const result = onChange(modelFields);
            value = result?.suspect_known_associates ?? value;
          }
          if (errors.suspect_known_associates?.hasError) {
            runValidationTasks("suspect_known_associates", value);
          }
          setSuspect_known_associates(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "suspect_known_associates",
            suspect_known_associates
          )
        }
        errorMessage={errors.suspect_known_associates?.errorMessage}
        hasError={errors.suspect_known_associates?.hasError}
        {...getOverrideProps(overrides, "suspect_known_associates")}
      ></TextField>
      <TextField
        label="Suspect background information"
        isRequired={false}
        isReadOnly={false}
        value={suspect_background_information}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              suspect_name,
              suspect_date_of_birth,
              suspect_gender,
              suspect_nationality,
              suspect_address,
              suspect_occupation,
              suspect_employer,
              suspect_education,
              suspect_phone,
              suspect_email,
              suspect_facebook,
              suspect_twitter,
              suspect_instagram,
              suspect_linkedIn,
              suspect_ticktock,
              suspect_height_inches,
              suspect_eyecolor,
              suspect_tattoos,
              suspect_scars,
              suspect_criminal_record,
              suspect_legal_status,
              suspect_known_associates,
              suspect_background_information: value,
              suspect_created_date,
              CaseSuspects,
            };
            const result = onChange(modelFields);
            value = result?.suspect_background_information ?? value;
          }
          if (errors.suspect_background_information?.hasError) {
            runValidationTasks("suspect_background_information", value);
          }
          setSuspect_background_information(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "suspect_background_information",
            suspect_background_information
          )
        }
        errorMessage={errors.suspect_background_information?.errorMessage}
        hasError={errors.suspect_background_information?.hasError}
        {...getOverrideProps(overrides, "suspect_background_information")}
      ></TextField>
      <TextField
        label="Suspect created date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={suspect_created_date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              suspect_name,
              suspect_date_of_birth,
              suspect_gender,
              suspect_nationality,
              suspect_address,
              suspect_occupation,
              suspect_employer,
              suspect_education,
              suspect_phone,
              suspect_email,
              suspect_facebook,
              suspect_twitter,
              suspect_instagram,
              suspect_linkedIn,
              suspect_ticktock,
              suspect_height_inches,
              suspect_eyecolor,
              suspect_tattoos,
              suspect_scars,
              suspect_criminal_record,
              suspect_legal_status,
              suspect_known_associates,
              suspect_background_information,
              suspect_created_date: value,
              CaseSuspects,
            };
            const result = onChange(modelFields);
            value = result?.suspect_created_date ?? value;
          }
          if (errors.suspect_created_date?.hasError) {
            runValidationTasks("suspect_created_date", value);
          }
          setSuspect_created_date(value);
        }}
        onBlur={() =>
          runValidationTasks("suspect_created_date", suspect_created_date)
        }
        errorMessage={errors.suspect_created_date?.errorMessage}
        hasError={errors.suspect_created_date?.hasError}
        {...getOverrideProps(overrides, "suspect_created_date")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              suspect_name,
              suspect_date_of_birth,
              suspect_gender,
              suspect_nationality,
              suspect_address,
              suspect_occupation,
              suspect_employer,
              suspect_education,
              suspect_phone,
              suspect_email,
              suspect_facebook,
              suspect_twitter,
              suspect_instagram,
              suspect_linkedIn,
              suspect_ticktock,
              suspect_height_inches,
              suspect_eyecolor,
              suspect_tattoos,
              suspect_scars,
              suspect_criminal_record,
              suspect_legal_status,
              suspect_known_associates,
              suspect_background_information,
              suspect_created_date,
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
