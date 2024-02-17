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
  SwitchField,
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
    suspectName: "",
    dateOfBirth: "",
    Gender: "",
    nationality: "",
    address: "",
    occupation: "",
    employer: "",
    education: "",
    phone: "",
    email: "",
    facebook: "",
    twitter: "",
    instagram: "",
    linkedIn: "",
    ticktock: "",
    heightinches: "",
    eyecolor: "",
    tattoos: "",
    scars: "",
    criminalrecord: "",
    legalstatus: "",
    knownassociates: "",
    backgroundinformation: "",
    createdDateTime: "",
    IsDeleted: false,
    suspectcaseID: "",
  };
  const [suspectName, setSuspectName] = React.useState(
    initialValues.suspectName
  );
  const [dateOfBirth, setDateOfBirth] = React.useState(
    initialValues.dateOfBirth
  );
  const [Gender, setGender] = React.useState(initialValues.Gender);
  const [nationality, setNationality] = React.useState(
    initialValues.nationality
  );
  const [address, setAddress] = React.useState(initialValues.address);
  const [occupation, setOccupation] = React.useState(initialValues.occupation);
  const [employer, setEmployer] = React.useState(initialValues.employer);
  const [education, setEducation] = React.useState(initialValues.education);
  const [phone, setPhone] = React.useState(initialValues.phone);
  const [email, setEmail] = React.useState(initialValues.email);
  const [facebook, setFacebook] = React.useState(initialValues.facebook);
  const [twitter, setTwitter] = React.useState(initialValues.twitter);
  const [instagram, setInstagram] = React.useState(initialValues.instagram);
  const [linkedIn, setLinkedIn] = React.useState(initialValues.linkedIn);
  const [ticktock, setTicktock] = React.useState(initialValues.ticktock);
  const [heightinches, setHeightinches] = React.useState(
    initialValues.heightinches
  );
  const [eyecolor, setEyecolor] = React.useState(initialValues.eyecolor);
  const [tattoos, setTattoos] = React.useState(initialValues.tattoos);
  const [scars, setScars] = React.useState(initialValues.scars);
  const [criminalrecord, setCriminalrecord] = React.useState(
    initialValues.criminalrecord
  );
  const [legalstatus, setLegalstatus] = React.useState(
    initialValues.legalstatus
  );
  const [knownassociates, setKnownassociates] = React.useState(
    initialValues.knownassociates
  );
  const [backgroundinformation, setBackgroundinformation] = React.useState(
    initialValues.backgroundinformation
  );
  const [createdDateTime, setCreatedDateTime] = React.useState(
    initialValues.createdDateTime
  );
  const [IsDeleted, setIsDeleted] = React.useState(initialValues.IsDeleted);
  const [suspectcaseID, setSuspectcaseID] = React.useState(
    initialValues.suspectcaseID
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = suspectRecord
      ? { ...initialValues, ...suspectRecord }
      : initialValues;
    setSuspectName(cleanValues.suspectName);
    setDateOfBirth(cleanValues.dateOfBirth);
    setGender(cleanValues.Gender);
    setNationality(cleanValues.nationality);
    setAddress(cleanValues.address);
    setOccupation(cleanValues.occupation);
    setEmployer(cleanValues.employer);
    setEducation(cleanValues.education);
    setPhone(cleanValues.phone);
    setEmail(cleanValues.email);
    setFacebook(cleanValues.facebook);
    setTwitter(cleanValues.twitter);
    setInstagram(cleanValues.instagram);
    setLinkedIn(cleanValues.linkedIn);
    setTicktock(cleanValues.ticktock);
    setHeightinches(cleanValues.heightinches);
    setEyecolor(cleanValues.eyecolor);
    setTattoos(cleanValues.tattoos);
    setScars(cleanValues.scars);
    setCriminalrecord(cleanValues.criminalrecord);
    setLegalstatus(cleanValues.legalstatus);
    setKnownassociates(cleanValues.knownassociates);
    setBackgroundinformation(cleanValues.backgroundinformation);
    setCreatedDateTime(cleanValues.createdDateTime);
    setIsDeleted(cleanValues.IsDeleted);
    setSuspectcaseID(cleanValues.suspectcaseID);
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
    suspectName: [],
    dateOfBirth: [],
    Gender: [],
    nationality: [],
    address: [],
    occupation: [],
    employer: [],
    education: [],
    phone: [{ type: "Phone" }],
    email: [{ type: "Email" }],
    facebook: [{ type: "URL" }],
    twitter: [{ type: "URL" }],
    instagram: [{ type: "URL" }],
    linkedIn: [{ type: "URL" }],
    ticktock: [{ type: "URL" }],
    heightinches: [],
    eyecolor: [],
    tattoos: [],
    scars: [],
    criminalrecord: [],
    legalstatus: [],
    knownassociates: [],
    backgroundinformation: [],
    createdDateTime: [],
    IsDeleted: [],
    suspectcaseID: [{ type: "Required" }],
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
  const convertTimeStampToDate = (ts) => {
    if (Math.abs(Date.now() - ts) < Math.abs(Date.now() - ts * 1000)) {
      return new Date(ts);
    }
    return new Date(ts * 1000);
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
          suspectName: suspectName ?? null,
          dateOfBirth: dateOfBirth ?? null,
          Gender: Gender ?? null,
          nationality: nationality ?? null,
          address: address ?? null,
          occupation: occupation ?? null,
          employer: employer ?? null,
          education: education ?? null,
          phone: phone ?? null,
          email: email ?? null,
          facebook: facebook ?? null,
          twitter: twitter ?? null,
          instagram: instagram ?? null,
          linkedIn: linkedIn ?? null,
          ticktock: ticktock ?? null,
          heightinches: heightinches ?? null,
          eyecolor: eyecolor ?? null,
          tattoos: tattoos ?? null,
          scars: scars ?? null,
          criminalrecord: criminalrecord ?? null,
          legalstatus: legalstatus ?? null,
          knownassociates: knownassociates ?? null,
          backgroundinformation: backgroundinformation ?? null,
          createdDateTime: createdDateTime ?? null,
          IsDeleted: IsDeleted ?? null,
          suspectcaseID,
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
        value={suspectName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              suspectName: value,
              dateOfBirth,
              Gender,
              nationality,
              address,
              occupation,
              employer,
              education,
              phone,
              email,
              facebook,
              twitter,
              instagram,
              linkedIn,
              ticktock,
              heightinches,
              eyecolor,
              tattoos,
              scars,
              criminalrecord,
              legalstatus,
              knownassociates,
              backgroundinformation,
              createdDateTime,
              IsDeleted,
              suspectcaseID,
            };
            const result = onChange(modelFields);
            value = result?.suspectName ?? value;
          }
          if (errors.suspectName?.hasError) {
            runValidationTasks("suspectName", value);
          }
          setSuspectName(value);
        }}
        onBlur={() => runValidationTasks("suspectName", suspectName)}
        errorMessage={errors.suspectName?.errorMessage}
        hasError={errors.suspectName?.hasError}
        {...getOverrideProps(overrides, "suspectName")}
      ></TextField>
      <TextField
        label="Date of birth"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={dateOfBirth}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              suspectName,
              dateOfBirth: value,
              Gender,
              nationality,
              address,
              occupation,
              employer,
              education,
              phone,
              email,
              facebook,
              twitter,
              instagram,
              linkedIn,
              ticktock,
              heightinches,
              eyecolor,
              tattoos,
              scars,
              criminalrecord,
              legalstatus,
              knownassociates,
              backgroundinformation,
              createdDateTime,
              IsDeleted,
              suspectcaseID,
            };
            const result = onChange(modelFields);
            value = result?.dateOfBirth ?? value;
          }
          if (errors.dateOfBirth?.hasError) {
            runValidationTasks("dateOfBirth", value);
          }
          setDateOfBirth(value);
        }}
        onBlur={() => runValidationTasks("dateOfBirth", dateOfBirth)}
        errorMessage={errors.dateOfBirth?.errorMessage}
        hasError={errors.dateOfBirth?.hasError}
        {...getOverrideProps(overrides, "dateOfBirth")}
      ></TextField>
      <SelectField
        label="Gender"
        placeholder="Please select an option"
        isDisabled={false}
        value={Gender}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              suspectName,
              dateOfBirth,
              Gender: value,
              nationality,
              address,
              occupation,
              employer,
              education,
              phone,
              email,
              facebook,
              twitter,
              instagram,
              linkedIn,
              ticktock,
              heightinches,
              eyecolor,
              tattoos,
              scars,
              criminalrecord,
              legalstatus,
              knownassociates,
              backgroundinformation,
              createdDateTime,
              IsDeleted,
              suspectcaseID,
            };
            const result = onChange(modelFields);
            value = result?.Gender ?? value;
          }
          if (errors.Gender?.hasError) {
            runValidationTasks("Gender", value);
          }
          setGender(value);
        }}
        onBlur={() => runValidationTasks("Gender", Gender)}
        errorMessage={errors.Gender?.errorMessage}
        hasError={errors.Gender?.hasError}
        {...getOverrideProps(overrides, "Gender")}
      >
        <option
          children="Female"
          value="FEMALE"
          {...getOverrideProps(overrides, "Genderoption0")}
        ></option>
        <option
          children="Male"
          value="MALE"
          {...getOverrideProps(overrides, "Genderoption1")}
        ></option>
        <option
          children="Unknown"
          value="UNKNOWN"
          {...getOverrideProps(overrides, "Genderoption2")}
        ></option>
      </SelectField>
      <TextField
        label="Nationality"
        isRequired={false}
        isReadOnly={false}
        value={nationality}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              suspectName,
              dateOfBirth,
              Gender,
              nationality: value,
              address,
              occupation,
              employer,
              education,
              phone,
              email,
              facebook,
              twitter,
              instagram,
              linkedIn,
              ticktock,
              heightinches,
              eyecolor,
              tattoos,
              scars,
              criminalrecord,
              legalstatus,
              knownassociates,
              backgroundinformation,
              createdDateTime,
              IsDeleted,
              suspectcaseID,
            };
            const result = onChange(modelFields);
            value = result?.nationality ?? value;
          }
          if (errors.nationality?.hasError) {
            runValidationTasks("nationality", value);
          }
          setNationality(value);
        }}
        onBlur={() => runValidationTasks("nationality", nationality)}
        errorMessage={errors.nationality?.errorMessage}
        hasError={errors.nationality?.hasError}
        {...getOverrideProps(overrides, "nationality")}
      ></TextField>
      <TextField
        label="Address"
        isRequired={false}
        isReadOnly={false}
        value={address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              suspectName,
              dateOfBirth,
              Gender,
              nationality,
              address: value,
              occupation,
              employer,
              education,
              phone,
              email,
              facebook,
              twitter,
              instagram,
              linkedIn,
              ticktock,
              heightinches,
              eyecolor,
              tattoos,
              scars,
              criminalrecord,
              legalstatus,
              knownassociates,
              backgroundinformation,
              createdDateTime,
              IsDeleted,
              suspectcaseID,
            };
            const result = onChange(modelFields);
            value = result?.address ?? value;
          }
          if (errors.address?.hasError) {
            runValidationTasks("address", value);
          }
          setAddress(value);
        }}
        onBlur={() => runValidationTasks("address", address)}
        errorMessage={errors.address?.errorMessage}
        hasError={errors.address?.hasError}
        {...getOverrideProps(overrides, "address")}
      ></TextField>
      <TextField
        label="Occupation"
        isRequired={false}
        isReadOnly={false}
        value={occupation}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              suspectName,
              dateOfBirth,
              Gender,
              nationality,
              address,
              occupation: value,
              employer,
              education,
              phone,
              email,
              facebook,
              twitter,
              instagram,
              linkedIn,
              ticktock,
              heightinches,
              eyecolor,
              tattoos,
              scars,
              criminalrecord,
              legalstatus,
              knownassociates,
              backgroundinformation,
              createdDateTime,
              IsDeleted,
              suspectcaseID,
            };
            const result = onChange(modelFields);
            value = result?.occupation ?? value;
          }
          if (errors.occupation?.hasError) {
            runValidationTasks("occupation", value);
          }
          setOccupation(value);
        }}
        onBlur={() => runValidationTasks("occupation", occupation)}
        errorMessage={errors.occupation?.errorMessage}
        hasError={errors.occupation?.hasError}
        {...getOverrideProps(overrides, "occupation")}
      ></TextField>
      <TextField
        label="Employer"
        isRequired={false}
        isReadOnly={false}
        value={employer}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              suspectName,
              dateOfBirth,
              Gender,
              nationality,
              address,
              occupation,
              employer: value,
              education,
              phone,
              email,
              facebook,
              twitter,
              instagram,
              linkedIn,
              ticktock,
              heightinches,
              eyecolor,
              tattoos,
              scars,
              criminalrecord,
              legalstatus,
              knownassociates,
              backgroundinformation,
              createdDateTime,
              IsDeleted,
              suspectcaseID,
            };
            const result = onChange(modelFields);
            value = result?.employer ?? value;
          }
          if (errors.employer?.hasError) {
            runValidationTasks("employer", value);
          }
          setEmployer(value);
        }}
        onBlur={() => runValidationTasks("employer", employer)}
        errorMessage={errors.employer?.errorMessage}
        hasError={errors.employer?.hasError}
        {...getOverrideProps(overrides, "employer")}
      ></TextField>
      <TextField
        label="Education"
        isRequired={false}
        isReadOnly={false}
        value={education}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              suspectName,
              dateOfBirth,
              Gender,
              nationality,
              address,
              occupation,
              employer,
              education: value,
              phone,
              email,
              facebook,
              twitter,
              instagram,
              linkedIn,
              ticktock,
              heightinches,
              eyecolor,
              tattoos,
              scars,
              criminalrecord,
              legalstatus,
              knownassociates,
              backgroundinformation,
              createdDateTime,
              IsDeleted,
              suspectcaseID,
            };
            const result = onChange(modelFields);
            value = result?.education ?? value;
          }
          if (errors.education?.hasError) {
            runValidationTasks("education", value);
          }
          setEducation(value);
        }}
        onBlur={() => runValidationTasks("education", education)}
        errorMessage={errors.education?.errorMessage}
        hasError={errors.education?.hasError}
        {...getOverrideProps(overrides, "education")}
      ></TextField>
      <TextField
        label="Phone"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              suspectName,
              dateOfBirth,
              Gender,
              nationality,
              address,
              occupation,
              employer,
              education,
              phone: value,
              email,
              facebook,
              twitter,
              instagram,
              linkedIn,
              ticktock,
              heightinches,
              eyecolor,
              tattoos,
              scars,
              criminalrecord,
              legalstatus,
              knownassociates,
              backgroundinformation,
              createdDateTime,
              IsDeleted,
              suspectcaseID,
            };
            const result = onChange(modelFields);
            value = result?.phone ?? value;
          }
          if (errors.phone?.hasError) {
            runValidationTasks("phone", value);
          }
          setPhone(value);
        }}
        onBlur={() => runValidationTasks("phone", phone)}
        errorMessage={errors.phone?.errorMessage}
        hasError={errors.phone?.hasError}
        {...getOverrideProps(overrides, "phone")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              suspectName,
              dateOfBirth,
              Gender,
              nationality,
              address,
              occupation,
              employer,
              education,
              phone,
              email: value,
              facebook,
              twitter,
              instagram,
              linkedIn,
              ticktock,
              heightinches,
              eyecolor,
              tattoos,
              scars,
              criminalrecord,
              legalstatus,
              knownassociates,
              backgroundinformation,
              createdDateTime,
              IsDeleted,
              suspectcaseID,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Facebook"
        isRequired={false}
        isReadOnly={false}
        value={facebook}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              suspectName,
              dateOfBirth,
              Gender,
              nationality,
              address,
              occupation,
              employer,
              education,
              phone,
              email,
              facebook: value,
              twitter,
              instagram,
              linkedIn,
              ticktock,
              heightinches,
              eyecolor,
              tattoos,
              scars,
              criminalrecord,
              legalstatus,
              knownassociates,
              backgroundinformation,
              createdDateTime,
              IsDeleted,
              suspectcaseID,
            };
            const result = onChange(modelFields);
            value = result?.facebook ?? value;
          }
          if (errors.facebook?.hasError) {
            runValidationTasks("facebook", value);
          }
          setFacebook(value);
        }}
        onBlur={() => runValidationTasks("facebook", facebook)}
        errorMessage={errors.facebook?.errorMessage}
        hasError={errors.facebook?.hasError}
        {...getOverrideProps(overrides, "facebook")}
      ></TextField>
      <TextField
        label="Twitter"
        isRequired={false}
        isReadOnly={false}
        value={twitter}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              suspectName,
              dateOfBirth,
              Gender,
              nationality,
              address,
              occupation,
              employer,
              education,
              phone,
              email,
              facebook,
              twitter: value,
              instagram,
              linkedIn,
              ticktock,
              heightinches,
              eyecolor,
              tattoos,
              scars,
              criminalrecord,
              legalstatus,
              knownassociates,
              backgroundinformation,
              createdDateTime,
              IsDeleted,
              suspectcaseID,
            };
            const result = onChange(modelFields);
            value = result?.twitter ?? value;
          }
          if (errors.twitter?.hasError) {
            runValidationTasks("twitter", value);
          }
          setTwitter(value);
        }}
        onBlur={() => runValidationTasks("twitter", twitter)}
        errorMessage={errors.twitter?.errorMessage}
        hasError={errors.twitter?.hasError}
        {...getOverrideProps(overrides, "twitter")}
      ></TextField>
      <TextField
        label="Instagram"
        isRequired={false}
        isReadOnly={false}
        value={instagram}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              suspectName,
              dateOfBirth,
              Gender,
              nationality,
              address,
              occupation,
              employer,
              education,
              phone,
              email,
              facebook,
              twitter,
              instagram: value,
              linkedIn,
              ticktock,
              heightinches,
              eyecolor,
              tattoos,
              scars,
              criminalrecord,
              legalstatus,
              knownassociates,
              backgroundinformation,
              createdDateTime,
              IsDeleted,
              suspectcaseID,
            };
            const result = onChange(modelFields);
            value = result?.instagram ?? value;
          }
          if (errors.instagram?.hasError) {
            runValidationTasks("instagram", value);
          }
          setInstagram(value);
        }}
        onBlur={() => runValidationTasks("instagram", instagram)}
        errorMessage={errors.instagram?.errorMessage}
        hasError={errors.instagram?.hasError}
        {...getOverrideProps(overrides, "instagram")}
      ></TextField>
      <TextField
        label="Linked in"
        isRequired={false}
        isReadOnly={false}
        value={linkedIn}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              suspectName,
              dateOfBirth,
              Gender,
              nationality,
              address,
              occupation,
              employer,
              education,
              phone,
              email,
              facebook,
              twitter,
              instagram,
              linkedIn: value,
              ticktock,
              heightinches,
              eyecolor,
              tattoos,
              scars,
              criminalrecord,
              legalstatus,
              knownassociates,
              backgroundinformation,
              createdDateTime,
              IsDeleted,
              suspectcaseID,
            };
            const result = onChange(modelFields);
            value = result?.linkedIn ?? value;
          }
          if (errors.linkedIn?.hasError) {
            runValidationTasks("linkedIn", value);
          }
          setLinkedIn(value);
        }}
        onBlur={() => runValidationTasks("linkedIn", linkedIn)}
        errorMessage={errors.linkedIn?.errorMessage}
        hasError={errors.linkedIn?.hasError}
        {...getOverrideProps(overrides, "linkedIn")}
      ></TextField>
      <TextField
        label="Ticktock"
        isRequired={false}
        isReadOnly={false}
        value={ticktock}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              suspectName,
              dateOfBirth,
              Gender,
              nationality,
              address,
              occupation,
              employer,
              education,
              phone,
              email,
              facebook,
              twitter,
              instagram,
              linkedIn,
              ticktock: value,
              heightinches,
              eyecolor,
              tattoos,
              scars,
              criminalrecord,
              legalstatus,
              knownassociates,
              backgroundinformation,
              createdDateTime,
              IsDeleted,
              suspectcaseID,
            };
            const result = onChange(modelFields);
            value = result?.ticktock ?? value;
          }
          if (errors.ticktock?.hasError) {
            runValidationTasks("ticktock", value);
          }
          setTicktock(value);
        }}
        onBlur={() => runValidationTasks("ticktock", ticktock)}
        errorMessage={errors.ticktock?.errorMessage}
        hasError={errors.ticktock?.hasError}
        {...getOverrideProps(overrides, "ticktock")}
      ></TextField>
      <TextField
        label="Heightinches"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={heightinches}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              suspectName,
              dateOfBirth,
              Gender,
              nationality,
              address,
              occupation,
              employer,
              education,
              phone,
              email,
              facebook,
              twitter,
              instagram,
              linkedIn,
              ticktock,
              heightinches: value,
              eyecolor,
              tattoos,
              scars,
              criminalrecord,
              legalstatus,
              knownassociates,
              backgroundinformation,
              createdDateTime,
              IsDeleted,
              suspectcaseID,
            };
            const result = onChange(modelFields);
            value = result?.heightinches ?? value;
          }
          if (errors.heightinches?.hasError) {
            runValidationTasks("heightinches", value);
          }
          setHeightinches(value);
        }}
        onBlur={() => runValidationTasks("heightinches", heightinches)}
        errorMessage={errors.heightinches?.errorMessage}
        hasError={errors.heightinches?.hasError}
        {...getOverrideProps(overrides, "heightinches")}
      ></TextField>
      <TextField
        label="Eyecolor"
        isRequired={false}
        isReadOnly={false}
        value={eyecolor}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              suspectName,
              dateOfBirth,
              Gender,
              nationality,
              address,
              occupation,
              employer,
              education,
              phone,
              email,
              facebook,
              twitter,
              instagram,
              linkedIn,
              ticktock,
              heightinches,
              eyecolor: value,
              tattoos,
              scars,
              criminalrecord,
              legalstatus,
              knownassociates,
              backgroundinformation,
              createdDateTime,
              IsDeleted,
              suspectcaseID,
            };
            const result = onChange(modelFields);
            value = result?.eyecolor ?? value;
          }
          if (errors.eyecolor?.hasError) {
            runValidationTasks("eyecolor", value);
          }
          setEyecolor(value);
        }}
        onBlur={() => runValidationTasks("eyecolor", eyecolor)}
        errorMessage={errors.eyecolor?.errorMessage}
        hasError={errors.eyecolor?.hasError}
        {...getOverrideProps(overrides, "eyecolor")}
      ></TextField>
      <TextField
        label="Tattoos"
        isRequired={false}
        isReadOnly={false}
        value={tattoos}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              suspectName,
              dateOfBirth,
              Gender,
              nationality,
              address,
              occupation,
              employer,
              education,
              phone,
              email,
              facebook,
              twitter,
              instagram,
              linkedIn,
              ticktock,
              heightinches,
              eyecolor,
              tattoos: value,
              scars,
              criminalrecord,
              legalstatus,
              knownassociates,
              backgroundinformation,
              createdDateTime,
              IsDeleted,
              suspectcaseID,
            };
            const result = onChange(modelFields);
            value = result?.tattoos ?? value;
          }
          if (errors.tattoos?.hasError) {
            runValidationTasks("tattoos", value);
          }
          setTattoos(value);
        }}
        onBlur={() => runValidationTasks("tattoos", tattoos)}
        errorMessage={errors.tattoos?.errorMessage}
        hasError={errors.tattoos?.hasError}
        {...getOverrideProps(overrides, "tattoos")}
      ></TextField>
      <TextField
        label="Scars"
        isRequired={false}
        isReadOnly={false}
        value={scars}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              suspectName,
              dateOfBirth,
              Gender,
              nationality,
              address,
              occupation,
              employer,
              education,
              phone,
              email,
              facebook,
              twitter,
              instagram,
              linkedIn,
              ticktock,
              heightinches,
              eyecolor,
              tattoos,
              scars: value,
              criminalrecord,
              legalstatus,
              knownassociates,
              backgroundinformation,
              createdDateTime,
              IsDeleted,
              suspectcaseID,
            };
            const result = onChange(modelFields);
            value = result?.scars ?? value;
          }
          if (errors.scars?.hasError) {
            runValidationTasks("scars", value);
          }
          setScars(value);
        }}
        onBlur={() => runValidationTasks("scars", scars)}
        errorMessage={errors.scars?.errorMessage}
        hasError={errors.scars?.hasError}
        {...getOverrideProps(overrides, "scars")}
      ></TextField>
      <TextField
        label="Criminalrecord"
        isRequired={false}
        isReadOnly={false}
        value={criminalrecord}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              suspectName,
              dateOfBirth,
              Gender,
              nationality,
              address,
              occupation,
              employer,
              education,
              phone,
              email,
              facebook,
              twitter,
              instagram,
              linkedIn,
              ticktock,
              heightinches,
              eyecolor,
              tattoos,
              scars,
              criminalrecord: value,
              legalstatus,
              knownassociates,
              backgroundinformation,
              createdDateTime,
              IsDeleted,
              suspectcaseID,
            };
            const result = onChange(modelFields);
            value = result?.criminalrecord ?? value;
          }
          if (errors.criminalrecord?.hasError) {
            runValidationTasks("criminalrecord", value);
          }
          setCriminalrecord(value);
        }}
        onBlur={() => runValidationTasks("criminalrecord", criminalrecord)}
        errorMessage={errors.criminalrecord?.errorMessage}
        hasError={errors.criminalrecord?.hasError}
        {...getOverrideProps(overrides, "criminalrecord")}
      ></TextField>
      <TextField
        label="Legalstatus"
        isRequired={false}
        isReadOnly={false}
        value={legalstatus}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              suspectName,
              dateOfBirth,
              Gender,
              nationality,
              address,
              occupation,
              employer,
              education,
              phone,
              email,
              facebook,
              twitter,
              instagram,
              linkedIn,
              ticktock,
              heightinches,
              eyecolor,
              tattoos,
              scars,
              criminalrecord,
              legalstatus: value,
              knownassociates,
              backgroundinformation,
              createdDateTime,
              IsDeleted,
              suspectcaseID,
            };
            const result = onChange(modelFields);
            value = result?.legalstatus ?? value;
          }
          if (errors.legalstatus?.hasError) {
            runValidationTasks("legalstatus", value);
          }
          setLegalstatus(value);
        }}
        onBlur={() => runValidationTasks("legalstatus", legalstatus)}
        errorMessage={errors.legalstatus?.errorMessage}
        hasError={errors.legalstatus?.hasError}
        {...getOverrideProps(overrides, "legalstatus")}
      ></TextField>
      <TextField
        label="Knownassociates"
        isRequired={false}
        isReadOnly={false}
        value={knownassociates}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              suspectName,
              dateOfBirth,
              Gender,
              nationality,
              address,
              occupation,
              employer,
              education,
              phone,
              email,
              facebook,
              twitter,
              instagram,
              linkedIn,
              ticktock,
              heightinches,
              eyecolor,
              tattoos,
              scars,
              criminalrecord,
              legalstatus,
              knownassociates: value,
              backgroundinformation,
              createdDateTime,
              IsDeleted,
              suspectcaseID,
            };
            const result = onChange(modelFields);
            value = result?.knownassociates ?? value;
          }
          if (errors.knownassociates?.hasError) {
            runValidationTasks("knownassociates", value);
          }
          setKnownassociates(value);
        }}
        onBlur={() => runValidationTasks("knownassociates", knownassociates)}
        errorMessage={errors.knownassociates?.errorMessage}
        hasError={errors.knownassociates?.hasError}
        {...getOverrideProps(overrides, "knownassociates")}
      ></TextField>
      <TextField
        label="Backgroundinformation"
        isRequired={false}
        isReadOnly={false}
        value={backgroundinformation}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              suspectName,
              dateOfBirth,
              Gender,
              nationality,
              address,
              occupation,
              employer,
              education,
              phone,
              email,
              facebook,
              twitter,
              instagram,
              linkedIn,
              ticktock,
              heightinches,
              eyecolor,
              tattoos,
              scars,
              criminalrecord,
              legalstatus,
              knownassociates,
              backgroundinformation: value,
              createdDateTime,
              IsDeleted,
              suspectcaseID,
            };
            const result = onChange(modelFields);
            value = result?.backgroundinformation ?? value;
          }
          if (errors.backgroundinformation?.hasError) {
            runValidationTasks("backgroundinformation", value);
          }
          setBackgroundinformation(value);
        }}
        onBlur={() =>
          runValidationTasks("backgroundinformation", backgroundinformation)
        }
        errorMessage={errors.backgroundinformation?.errorMessage}
        hasError={errors.backgroundinformation?.hasError}
        {...getOverrideProps(overrides, "backgroundinformation")}
      ></TextField>
      <TextField
        label="Created date time"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={
          createdDateTime &&
          convertToLocal(convertTimeStampToDate(createdDateTime))
        }
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : Number(new Date(e.target.value));
          if (onChange) {
            const modelFields = {
              suspectName,
              dateOfBirth,
              Gender,
              nationality,
              address,
              occupation,
              employer,
              education,
              phone,
              email,
              facebook,
              twitter,
              instagram,
              linkedIn,
              ticktock,
              heightinches,
              eyecolor,
              tattoos,
              scars,
              criminalrecord,
              legalstatus,
              knownassociates,
              backgroundinformation,
              createdDateTime: value,
              IsDeleted,
              suspectcaseID,
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
              suspectName,
              dateOfBirth,
              Gender,
              nationality,
              address,
              occupation,
              employer,
              education,
              phone,
              email,
              facebook,
              twitter,
              instagram,
              linkedIn,
              ticktock,
              heightinches,
              eyecolor,
              tattoos,
              scars,
              criminalrecord,
              legalstatus,
              knownassociates,
              backgroundinformation,
              createdDateTime,
              IsDeleted: value,
              suspectcaseID,
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
        label="Suspectcase id"
        isRequired={true}
        isReadOnly={false}
        value={suspectcaseID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              suspectName,
              dateOfBirth,
              Gender,
              nationality,
              address,
              occupation,
              employer,
              education,
              phone,
              email,
              facebook,
              twitter,
              instagram,
              linkedIn,
              ticktock,
              heightinches,
              eyecolor,
              tattoos,
              scars,
              criminalrecord,
              legalstatus,
              knownassociates,
              backgroundinformation,
              createdDateTime,
              IsDeleted,
              suspectcaseID: value,
            };
            const result = onChange(modelFields);
            value = result?.suspectcaseID ?? value;
          }
          if (errors.suspectcaseID?.hasError) {
            runValidationTasks("suspectcaseID", value);
          }
          setSuspectcaseID(value);
        }}
        onBlur={() => runValidationTasks("suspectcaseID", suspectcaseID)}
        errorMessage={errors.suspectcaseID?.errorMessage}
        hasError={errors.suspectcaseID?.hasError}
        {...getOverrideProps(overrides, "suspectcaseID")}
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
