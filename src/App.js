
import React, { useState } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import logoHead from './Images/PElogo.png';
import textLogoHead from './Images/PElogoText.png';
import ladyAvatar from './Images/ai-generated-8534133_1280.jpg';
import fingerprintImg1 from './Images/fingerprint-146242_1280.png';
import fingerprintImg2 from './Images/fingerprint-255899_1280.jpg';
import suspectImg1 from './Images/hacker-3342696_1280.jpg';
import {
  CaseCardCollection,
  CaseNoteCollection,
  CaseNoteCreateForm,
  EvidenceCollection,
  MarketingFooterBrand,
  NavBarHeader,
  NewCaseCreateForm,
  SuspectCollection,
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
      className: "custom-btn",
      onClick: () => {
        toggleHomeView(); 
      },
    },
    "avatar": {
      src: ladyAvatar, // profile image
    },
    "Cases": {
      className: "custom-btn",
      onClick: () => {
        handleCaseHeaderClick();
      },
    },
    "Suspects": {
      className: "custom-btn",
      onClick: () => {
        handleSuspectsHeaderClick();
      }
    },
    "Sign Out": {
      className: "custom-btn",
      onClick: () => {
        signOut();
      }
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

  //Suspect Card images and view click
  const suspectCardOverrides = {
    
    "image": {
      src: suspectImg1,
    },
    "CaseViewButton": {
      onClick: () => {
        handleCaseViewButtonClick();
      },
    }
  };

  /*****HOOKS****/
  //HOME 
  const [showHome, setShowHome] = useState(true);
  //show create case
  const [showCreateCase, setShowCreateCase] = useState(false);
  //show create note
  const [showCreateNote, setShowCreateNote] = useState(false);
  //show detail case
  const [showDetailedCaseView, setShowDetailedCaseView] = useState(false);
  //show all cases 
  const [showAllCaseView, setShowAllCaseView] = useState(false);
  //show all suspects 
  const [showAllSuspectsView, setShowAllSuspectsView] = useState(false);
  //show all suspects 
  const [showSuspectDetailView, setShowSuspectDetailView] = useState(false);

  /**HANDLE CLICKS**/
  // Function to toggle default HOME view
  const toggleHomeView = () => {
    console.log("Toggle Home"); // Add logging to check if the function is called
    setShowHome(true); // #1 Home True
    setShowCreateCase(false); // #2 Set showCreateCase to true
    setShowCreateNote(false); // #3 Set showCreateNote to false
    setShowDetailedCaseView(false); // #4 Set showDetailedCaseView to false
    setShowAllCaseView(false); // #5 Set showAllCaseView to false
    setShowAllSuspectsView(false); // #6 Set showAllSuspectView to false
    setShowSuspectDetailView(false); // #7 Set showSuspectDetailView to false
  };

  // Function to toggle CREATE CASE
  const toggleCreateCase = () => {
    console.log("Toggle Create Case Clicked");
    setShowHome(false);
    setShowCreateCase(true); // #2 Create Case
    setShowCreateNote(false);
    setShowDetailedCaseView(false);
    setShowAllCaseView(false);
    setShowAllSuspectsView(false);
    setShowSuspectDetailView(false);
  };

  // Function to toggle CREATE NOTE
  const toggleCreateNote = () => {
    console.log("Toggle Create Note Clicked");
    setShowHome(false);
    setShowCreateCase(false);
    setShowCreateNote(true); // #3 Create Note
    setShowDetailedCaseView(false);
    setShowAllCaseView(false);
    setShowAllSuspectsView(false);
    setShowSuspectDetailView(false);
  };

  // Function to handle CASE DETAIL view
  const handleCaseViewButtonClick = () => {
    console.log("View button clicked on Case");
    setShowHome(false);
    setShowCreateCase(false);
    setShowCreateNote(true);
    setShowDetailedCaseView(true); // #4 Detailed Case View
    setShowAllCaseView(false);
    setShowAllSuspectsView(false);
    setShowSuspectDetailView(false);
  };
  // Function to handle CASE HEADER click
  const handleCaseHeaderClick = () => {
    console.log("Cases on Nav Bar Clicked");
    setShowHome(false);
    setShowCreateCase(false);
    setShowCreateNote(false);
    setShowDetailedCaseView(false);
    setShowAllCaseView(true); // #5 All Cases
    setShowAllSuspectsView(false);
    setShowSuspectDetailView(false);
  };

  // Function to handle SUSPECT HEADER click
  const handleSuspectsHeaderClick = () => {
    console.log("Suspects on Nav Bar Clicked");
    setShowHome(false);
    setShowCreateCase(false);
    setShowCreateNote(false);
    setShowDetailedCaseView(false);
    setShowAllCaseView(false);
    setShowAllSuspectsView(true); // #6 All Suspects
    setShowSuspectDetailView(false);
  };

  // Function to handle SUSPECT DETAIL view click
  const handleSuspectsDetailClick = () => {
    console.log("View Suspects button Clicked");
    setShowHome(false);
    setShowCreateCase(false);
    setShowCreateNote(false);
    setShowDetailedCaseView(false);
    setShowAllCaseView(false);
    setShowAllSuspectsView(false);
    setShowSuspectDetailView(true); // #7 Suspect Detail
  };

  /*****VIEW FUNCTIONS******/

  /* HOME */
  const homeView = showHome ? (
    <div>
      <Heading level={1} class="special-elite-regular" fontSize={"85px"}>Ready to solve the mystery?</Heading>
      <Flex justifyContent="Center" direction="row" alignItems="Center" >
        <View marginRight={"80px"}>
          <Button onClick={toggleCreateCase} >Create Case</Button>
        </View>
        <View>
          <Button onClick={toggleCreateNote} >Add Case Note</Button>
        </View>
      </Flex>
    </div>
  ) : null;

  /*CREATE CASE FORM*/
  const createCaseView = showCreateCase ? (
    <div>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        {/* Create Case Section */}
        <View style={{ flex: 1, marginLeft: 10 }}>
          <Heading level={2} class="special-elite-regular" fontSize={"40px"}>Create Case</Heading>
          <NewCaseCreateForm />
        </View>
      </View>
    </div>
  ) : null; // Render null if showDetailedCaseView is false

  /*CREATE NOTE FORM*/
  const createNoteView = showCreateNote ? (
    <div>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        {/* Create Note Section */}
        <View style={{ flex: 1, marginRight: 10 }}>
          <Heading level={2} class="special-elite-regular" fontSize={"40px"}>Add Case Note</Heading>
          <CaseNoteCreateForm />
        </View>
      </View>
    </div>
  ) : null; // Render null if showDetailedCaseView is false

  /*CASE DETAIL VIEW*/
  const detailedCaseView = showDetailedCaseView ? (
    <div>
      {/* Suspects */}
      <View justifyContent="Center" alignItems="center" direction="Row">
        <Heading level={2} class="special-elite-regular" fontSize={"40px"}>Suspects</Heading>
        <Flex direction="row" justifyContent="Center" alignItems="Center" >
        <SuspectCollection></SuspectCollection>
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
  ) : null; // Render null

  /*ALL CASE VIEW**/
  const allCaseView = showAllCaseView ? (
    <div>
      <Flex direction="Column" justifyContent="Center" alignItems="Center" >
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
  ) : null; // Render null

  /*ALL SUSPECTS VIEW*/
  const allSuspectView = showAllSuspectsView ? (
    <div>
      <Flex direction="Column" justifyContent="Center" alignItems="Center" >
        <Heading level={2} marginTop={"40px"} marginBottom={"40px"} class="special-elite-regular" fontSize={"40px"}>List of Suspects</Heading>
        <SuspectCollection overrideItems={() => {
          return {
            overrides: {
              "Button": {
                onClick: () => {
                  handleSuspectsDetailClick();
                },
              },
              "image": {
                src: suspectImg1,
              }
            },
          };
        }} />
      </Flex>
    </div>
  ) : null; // Render null 

  /*SUSPECT DETAIL VIEW*/
  const suspectDetailView = showSuspectDetailView ? (
    <div>
      <Flex direction="Column" justifyContent="Center" alignItems="Center" >
        <Heading level={2} marginTop={"40px"} marginBottom={"40px"} class="special-elite-regular" fontSize={"40px"}>Suspect Details</Heading>
        <suspectDetailView>
        </suspectDetailView>
      </Flex>
    </div>
  ) : null; // Render null if showDetailedCaseView is false

  /********RENDER ON PAGE*********/
  return (
    <View className="App">

      {/*** HEADER *** ALWAYS DISPLAY ***/}
      <NavBarHeader overrides={navbarOverrides} width={"100vw"} marginTop={"40p"} marginBottom={"2px"}></NavBarHeader>
      <main>
        {homeView}
        {createCaseView}
        {createNoteView}
        {allCaseView}
        {detailedCaseView}
        {allSuspectView}
        {suspectDetailView}
      </main>
      <MarketingFooterBrand class="Footer" width={"100vw"} marginTop={"40p"} >
      </MarketingFooterBrand>
    </View>
  );
};

export default withAuthenticator(App);