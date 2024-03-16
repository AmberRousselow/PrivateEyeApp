
import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import logoHead from './Images/PElogo.png';
import textLogoHead from './Images/PElogoText.png';
import ladyAvatar from './Images/ai-generated-8534133_1280.jpg';
import fingerprintImg1 from './Images/fingerprint-146242_1280.png';
import fingerprintImg2 from './Images/fingerprint-255899_1280.jpg';
import fingerprintImg3 from './Images/fingerprint-257037_1280.png';
import hackerImg from './Images/hacker-3342696_1280.jpg';
import typewriterImg from './Images/concept-5355841_1280.jpg';
import manAvatar from './Images/detective-4787272_1280.png'
import {
  CaseCardCollection,
  CaseNoteCollection,
  EvidenceCollection,
  MarketingFooterBrand,
  NavBarHeader,
  NewCaseCreateForm,
  SuspectCard,
} from './ui-components';
import {
  Flex,
  Heading,
  View,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import { generateClient } from 'aws-amplify/api';

/*onst client = generateClient();*/

const App = ({ signOut }) => {

  /*const [appcases, setAppCases] = useState([]);*/

  const navbarOverrides = {
    "imagelogo": {
      src: textLogoHead,// app logo
    },
    "textlogo": {
      src: logoHead,// textlogo
    },
    "avatar": {
      src: ladyAvatar, // profile image
    },
    "Cases": {
      onClick: () => {
        handleCaseHeaderClick();
      },
    }
  };

  const caseCardOverrides = {
    "image": {
      src: fingerprintImg1,
    },
    "CaseViewButton": {
      onClick: () => {
        handleCaseViewButtonClick();
      },
    }
  };
  /*
    async function fetchAppCases() {
      const apiData = await client.graphql({ query: listAppCases });
      const appCasesFromAPI = apiData.data.listAppCases.items;
      await Promise.all(
        appCasesFromAPI.map(async (appcase) => {
          return appcase;
        })
      );
      setAppCases(appCasesFromAPI);
    }
  
    useEffect(() => {
      console.log("app cases fetched");
      fetchAppCases();
    }, []);
  */
  const [showCreateCase, setShowCreateCase] = useState(false);

  // Function to toggle visibility
  const toggleCreateCase = () => {
    setShowCreateCase(!showCreateCase);
  };

  const [showDetailedCaseView, setShowDetailedCaseView] = useState(false);

  const handleCaseViewButtonClick = () => {
    console.log("View button clicked on Case"); // Add logging to check if the function is called
    setShowDetailedCaseView(!showDetailedCaseView);
  };

  const detailedCaseView = showDetailedCaseView ? (
    <div>
      <Flex>
        <CaseNoteCollection />
        <EvidenceCollection />
        <SuspectCard />
      </Flex>
    </div>
  ) : null; // Render null if showDetailedCaseView is false

  const [showAllCaseView, setShowAllCaseView] = useState(false);

  const handleCaseHeaderClick = () => {
    console.log("Cases on Nav Bar Clicked"); // Add logging to check if the function is called
    setShowAllCaseView(!showAllCaseView);
  };

  const allCaseView = showAllCaseView ? (
    <div>
      <Flex
        direction="Column"
        justifyContent="Center"
        alignItems="Center" >
        <Heading level={2} marginTop={"40px"} marginBottom={"40px"}>Current Cases</Heading>
        <CaseCardCollection overrideItems={() => {
          return {
            overrides: {
              "CaseViewButton": {
                onClick: () => {
                  handleCaseViewButtonClick();
                },
              },
              "image": {
                src: fingerprintImg1,
              }
            },
          };
        }} />
      </Flex>
    </div>
  ) : null; // Render null if showDetailedCaseView is false


  //Render on page
  return (
    <View className="App">
      <NavBarHeader overrides={navbarOverrides} width={"100vw"} marginTop={"20p"} marginBottom={"20px"}></NavBarHeader>
      <View
        style={{
          flex: 2,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Flex
          direction="Column"
          justifyContent="Center"
          alignItems="Center" >
          <Heading level={2} marginBottom={"5px"}>Create Case</Heading>
          <NewCaseCreateForm marginBlock={"5px"}></NewCaseCreateForm>
        </Flex>
      </View>
      {!showDetailedCaseView && !showAllCaseView && ( // Render only if not in detailed view or all case view
        <Flex
          direction="Column"
          justifyContent="Center"
          alignItems="Center" >
          <Heading level={2} marginTop={"40px"} marginBottom={"40px"}>Current Cases</Heading>
          <CaseCardCollection overrideItems={() => {
            return {
              overrides: {
                "CaseViewButton": {
                  onClick: () => {
                    handleCaseViewButtonClick();
                  },
                },
                "image": {
                  src: fingerprintImg2,
                }
              },
            };
          }} />
        </Flex>
      )}
      {showAllCaseView && allCaseView} {/* Render all cases if showAllCaseView is true */}
      {showDetailedCaseView && detailedCaseView} {/* Render detailed view if showDetailedCaseView is true */}
      <MarketingFooterBrand width={"100vw"}>
      </MarketingFooterBrand>
    </View>
  );
};

export default withAuthenticator(App);