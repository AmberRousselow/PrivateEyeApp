
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import logoHead from './Images/PElogo.png';
import textLogoHead from './Images/PElogoText.png';
import ladyAvatar from './Images/ai-generated-8534133_1280.jpg';
import fingerprintImg2 from './Images/fingerprint-255899_1280.jpg';
import suspectImg1 from './Images/hacker-3342696_1280.jpg';
import {
  CaseCardCollection,
  CaseDetailHeader,
  CaseNoteCreateForm,
  EvidenceCollection,
  EvidenceCreateForm,
  MarketingFooterBrand,
  NavBarHeader,
  NewCaseCreateForm,
  SideBar,
  SuspectCollection,
  SuspectCreateForm,
  SuspectDetail,
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

  //FOOTER user clicks
  const footerOverrides = {
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
    "Evidence": {
      className: "custom-btn",
      onClick: () => {

      }
    }
  };

  /*****HOOKS****/
  //SIDE BAR
  const [showSidebar, setShowSidebar] = useState(false);
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
  // view SIDE BAR
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  // Function to toggle default HOME view
  const toggleHomeView = () => {
    console.log("Toggle Home"); // Add logging to check if the function is called
    setShowHome(true); // #1 Home True
    setShowSidebar(!showSidebar);
    setShowCreateCase(false); // #2 Set showCreateCase to true
    setShowCreateNote(false); // #3 Set showCreateNote to false
    setShowDetailedCaseView(false); // #4 Set showDetailedCaseView to false
    setShowAllCaseView(true); // #5 Set showAllCaseView to true
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
    setShowCreateNote(false);
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
  /**SIDE BAR**/
  const sideBarView = showSidebar ? (
    <div>
      <SideBar
        class="sidebar"
        overrides={{ //SIDEBAR user clicks
          "label39493362": {
            className: "custom-btn",
            onClick: () => {
              toggleHomeView();
            },
          },
          "label39493368": {
            className: "custom-btn",
            onClick: () => {
              toggleCreateCase();
            }
          },
          "label39493372": {
            className: "custom-btn",
            onClick: () => {
              <SuspectCreateForm></SuspectCreateForm>
            }
          },
          "label39493376": {
            className: "custom-btn",
            onClick: () => {
              <EvidenceCreateForm></EvidenceCreateForm>
            }
          },
          "label39493382": {
            className: "custom-btn",
            onClick: () => {
              handleCaseHeaderClick();
            }
          },
          "label39493386": {
            className: "custom-btn",
            onClick: () => {
              handleSuspectsHeaderClick();
            }
          }
        }}
      ></SideBar>
    </div>
  ) : null;

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
          <NewCaseCreateForm class="create-form" />
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
      <View style={{ flex: 1, marginLeft: 10, marginRight: 50 }}>
        <CaseDetailHeader width={"80%"} alignItems={"center"} marginTop={"40p"} marginBottom={"2px"}></CaseDetailHeader>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        {/* Suspects Section */}
        <View style={{ flex: 1, marginLeft: 50, marginRight: 10 }}>
          <Heading level={2} class="special-elite-regular" fontSize={"40px"}>Suspects</Heading>
          <SuspectCollection></SuspectCollection>
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
        <CaseCardCollection overrideItems={({ item, index }) => {
          return {
            overrides: {
              "CaseViewButton": {
                onClick: () => {
                  handleCaseViewButtonClick(item);
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
        <SuspectCollection overrideItems={({ item, index }) => {
          return {
            overrides: {
              "Button": {
                onClick: () => {
                  handleSuspectsDetailClick(item);
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
        <SuspectDetail></SuspectDetail>
      </Flex>
    </div>
  ) : null;

  /********RENDER ON PAGE*********/
  return (
    <View className="App">

      {/*** HEADER *** ALWAYS DISPLAY ***/}
      <NavBarHeader overrides={navbarOverrides} width={"100vw"} marginTop={"40p"} marginBottom={"2px"}></NavBarHeader>
      <main>
        <FontAwesomeIcon icon={showSidebar ? faTimes : faArrowRight} onClick={toggleSidebar} className="sidebar-icon" />
        {sideBarView}
        {homeView}
        {createCaseView}
        {createNoteView}
        {allCaseView}
        {detailedCaseView}
        {allSuspectView}
        {suspectDetailView}
      </main>
      <MarketingFooterBrand overrides={footerOverrides} className="footer" width={"100vw"} marginTop={"40p"} >
      </MarketingFooterBrand>
    </View>
  );
};

export default withAuthenticator(App);