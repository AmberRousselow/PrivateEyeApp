
import React, { useState } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import logoHead from './Images/PElogo.png';
import textLogoHead from './Images/PElogoText.png';
import ladyAvatar from './Images/ai-generated-8534133_1280.jpg';
import fingerprintImg1 from './Images/fingerprint-146242_1280.png';
import fingerprintImg2 from './Images/fingerprint-255899_1280.jpg';
import {
  CaseCardCollection,
  CaseNoteCollection,
  CaseNoteCreateForm,
  EvidenceCollection,
  HeroLayout1,
  MarketingFooterBrand,
  NavBarHeader,
  NewCaseCreateForm,
  SuspectCard,
} from './ui-components';
import {
  Button,
  Flex,
  Heading,
  View,
  withAuthenticator,
} from "@aws-amplify/ui-react";

const App = ({ signOut }) => {

  /*OVERRIDES*/
  //Nav bar images and user clicks
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

  //Case Card images and view click
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

  /*****HOOKS****/
  //show create case
  const [showCreateCase, setShowCreateCase] = useState(false);
  //show detail case
  const [showDetailedCaseView, setShowDetailedCaseView] = useState(false);
  //show all cases 
  const [showAllCaseView, setShowAllCaseView] = useState(false);

  /**HANDLE CLICKS**/
  // Function to toggle create case
  const toggleCreateCase = () => {
    console.log("Toggle Create Case Clicked"); // Add logging to check if the function is called
    setShowCreateCase(!showCreateCase);
  };

  const handleCaseViewButtonClick = () => {
    console.log("View button clicked on Case"); // Add logging to check if the function is called
    setShowDetailedCaseView(!showDetailedCaseView);
  };

  //when Cases on Nav bar is clicked
  const handleCaseHeaderClick = () => {
    console.log("Cases on Nav Bar Clicked"); // Add logging to check if the function is called
    setShowAllCaseView(!showAllCaseView);
  };

  /**VIEW FUNCTIONS**/

  const createCaseView = showCreateCase ? (
    <div>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        {/* Create Note Section */}
        <View style={{ flex: 1, marginRight: 10 }}>
          <Heading level={2} class="special-elite-regular" fontSize={"40px"}>Add Case Note</Heading>
          <CaseNoteCreateForm />
        </View>

        {/* Create Case Section */}
        <View style={{ flex: 1, marginLeft: 10 }}>
          <Heading level={2} class="special-elite-regular" fontSize={"40px"}>Create Case</Heading>
          <NewCaseCreateForm />
        </View>
      </View>
    </div>
  ) : null; // Render null if showDetailedCaseView is false

  //Display Case detail when clicking view
  const detailedCaseView = showDetailedCaseView ? (
    <div>
      {/* Suspects */}
      <View justifyContent="Center" alignItems="center" direction="Row">
        <Heading level={2} class="special-elite-regular" fontSize={"40px"}>Suspects</Heading>
        <Flex
          direction="row"
          justifyContent="Center"
          alignItems="Center" >
          <SuspectCard />
        </Flex>
      </View>

      <View style={{ display: 'flex', flexDirection: 'row' }}>
        {/* Create Note Section */}
        <View style={{ flex: 1, marginLeft: 50, marginRight: 10 }}>
          <Heading level={2} class="special-elite-regular" fontSize={"40px"}>Notes</Heading>
          <CaseNoteCollection />
        </View>

        {/* Create Case Section */}
        <View style={{ flex: 1, marginLeft: 10, marginRight: 50 }}>
          <Heading level={2} class="special-elite-regular" fontSize={"40px"}>Evidence</Heading>
          <EvidenceCollection />
        </View>

      </View>
    </div>
  ) : null; // Render null if showDetailedCaseView is false

  const allCaseView = showAllCaseView ? (
    <div>
      <Flex
        direction="Column"
        justifyContent="Center"
        alignItems="Center" >
        <Heading level={2} marginTop={"40px"} marginBottom={"40px"} class="special-elite-regular" fontSize={"40px"}>Current Cases</Heading>
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
    </div>
  ) : null; // Render null if showDetailedCaseView is false

  //Render on page
  return (
    <View className="App">

      {/* Header -- ALWAYS DISPLAY*/}
      <NavBarHeader overrides={navbarOverrides} width={"100vw"} marginTop={"40p"} marginBottom={"2px"}></NavBarHeader>
      <Heading level={1} class="special-elite-regular" fontSize={"85px"}>Ready to solve the mystery?</Heading>
      <Button onClick={toggleCreateCase}>Create Case</Button>
      <Button onClick={toggleCreateCase}>Add Case Note</Button>
      {createCaseView}

      {!showDetailedCaseView && !showAllCaseView && ( // Render only if not in detailed view or all case view
        <Flex
          direction="Column"
          justifyContent="Center"
          alignItems="Center" >
          <Heading level={2} marginTop={"40px"} marginBottom={"40px"} class="special-elite-regular" fontSize={"40px"}>Current Cases</Heading>
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