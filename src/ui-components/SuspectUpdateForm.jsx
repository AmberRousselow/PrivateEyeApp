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
import { getSuspect } from "../graphql/queries";
import { updateSuspect } from "../graphql/mutations";
const client = generateClient();
export default function SuspectUpdateForm(props) {
  const {
    id: idProp,
    suspect: suspectModelProp,
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
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = suspectRecord
      ? { ...initialValues, ...suspectRecord }
      : initialValues;
    setSuspect_name(cleanValues.suspect_name);
    setSuspect_date_of_birth(cleanValues.suspect_date_of_birth);
    setSuspect_gender(cleanValues.suspect_gender);
    setSuspect_nationality(cleanValues.suspect_nationality);
    setSuspect_address(cleanValues.suspect_address);
    setSuspect_occupation(cleanValues.suspect_occupation);
    setSuspect_employer(cleanValues.suspect_employer);
    setSuspect_education(cleanValues.suspect_education);
    setSuspect_phone(cleanValues.suspect_phone);
    setSuspect_email(cleanValues.suspect_email);
    setSuspect_facebook(cleanValues.suspect_facebook);
    setSuspect_twitter(cleanValues.suspect_twitter);
    setSuspect_instagram(cleanValues.suspect_instagram);
    setSuspect_linkedIn(cleanValues.suspect_linkedIn);
    setSuspect_ticktock(cleanValues.suspect_ticktock);
    setSuspect_height_inches(cleanValues.suspect_height_inches);
    setSuspect_eyecolor(cleanValues.suspect_eyecolor);
    setSuspect_tattoos(cleanValues.suspect_tattoos);
    setSuspect_scars(cleanValues.suspect_scars);
    setSuspect_criminal_record(cleanValues.suspect_criminal_record);
    setSuspect_legal_status(cleanValues.suspect_legal_status);
    setSuspect_known_associates(cleanValues.suspect_known_associates);
    setSuspect_background_information(
      cleanValues.suspect_background_information
    );
    setSuspect_created_date(cleanValues.suspect_created_date);
    setErrors({});
  };
  const [suspectRecord, setSuspectRecord] = React.useState(suspectModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getSuspect.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getSuspect
        : suspectModelProp;
      setSuspectRecord(record);
    };
    queryData();
  }, [idProp, suspectModelProp]);
  React.useEffect(resetStateValues, [suspectRecord]);
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
          suspect_name: suspect_name ?? null,
          suspect_date_of_birth: suspect_date_of_birth ?? null,
          suspect_gender: suspect_gender ?? null,
          suspect_nationality: suspect_nationality ?? null,
          suspect_address: suspect_address ?? null,
          suspect_occupation: suspect_occupation ?? null,
          suspect_employer: suspect_employer ?? null,
          suspect_education: suspect_education ?? null,
          suspect_phone: suspect_phone ?? null,
          suspect_email: suspect_email ?? null,
          suspect_facebook: suspect_facebook ?? null,
          suspect_twitter: suspect_twitter ?? null,
          suspect_instagram: suspect_instagram ?? null,
          suspect_linkedIn: suspect_linkedIn ?? null,
          suspect_ticktock: suspect_ticktock ?? null,
          suspect_height_inches: suspect_height_inches ?? null,
          suspect_eyecolor: suspect_eyecolor ?? null,
          suspect_tattoos: suspect_tattoos ?? null,
          suspect_scars: suspect_scars ?? null,
          suspect_criminal_record: suspect_criminal_record ?? null,
          suspect_legal_status: suspect_legal_status ?? null,
          suspect_known_associates: suspect_known_associates ?? null,
          suspect_background_information:
            suspect_background_information ?? null,
          suspect_created_date: suspect_created_date ?? null,
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
            query: updateSuspect.replaceAll("__typename", ""),
            variables: {
              input: {
                id: suspectRecord.id,
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
      {...getOverrideProps(overrides, "SuspectUpdateForm")}
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
          isDisabled={!(idProp || suspectModelProp)}
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
              !(idProp || suspectModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
