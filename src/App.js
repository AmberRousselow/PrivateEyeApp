import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import logoHead from './Images/PElogo.png';
import textLogoHead from './Images/PElogoText.png';
import ladyAvatar from './Images/ai-generated-8534133_1280.jpg';
import fingerprintImg2 from './Images/fingerprint-255899_1280.jpg';
import suspectImg1 from './Images/hacker-3342696_1280.jpg';
import detective from './Images/detective-4787272_1280.png';
import manImg from './Images/man-8537038_1280.png';
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
  CaseNoteCollection,
  DetailViewsEvidenceDetailView
} from './ui-components';
import { generateClient } from "aws-amplify/api";
import * as queries from './graphql/queries';
import {
  Button,
  Flex,
  Heading,
  View,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";

const App = ({ signOut }) => {

  const client = generateClient();

  /******OVERRIDES*******/
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
    "Case Notes": {
      className: "custom-btn",
      onClick: () => {
        handleCaseNoteViewAllClick();
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
    "Case Notes": {
      className: "custom-btn",
      onClick: () => {
        handleCaseNoteViewAllClick();
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
        handleEvidenceViewAllClick();
      }
    }
  };

  /***********************HOOKS***********************/
  //SIDE BAR
  const [showSidebar, setShowSidebar] = useState(false);
  //HOME 
  const [showHome, setShowHome] = useState(true);
  /***********CREATE**********/
  //show create CASE
  const [showCreateCase, setShowCreateCase] = useState(false);
  //show create NOTE
  const [showCreateNote, setShowCreateNote] = useState(false);
  //show create SUSPECT
  const [showCreateSusepct, setShowCreateSuspect] = useState(false);
  //show create EVIDENCE
  const [showCreateEvidence, setShowCreateEvidence] = useState(false);
  /*********COLLECTIONS********/
  //show all CASES 
  const [showAllCaseView, setShowAllCaseView] = useState(true);
  //show all NOTES 
  const [showAllCaseNoteView, setShowAllCaseNoteView] = useState(false);
  //show all SUSPECTS 
  const [showAllSuspectsView, setShowAllSuspectsView] = useState(false);
  //show all EVIDENCE 
  const [showAllEvidenceView, setShowAllEvidenceView] = useState(false);
  /*********DETAIL VIEWS**********/
  //show detail CASE
  const [showDetailedCaseView, setShowDetailedCaseView] = useState(false);
  //show detail CASE
  const [showDetailedCaseNoteView, setShowDetailedCaseNoteView] = useState(false);
  //show detail SUSPECTS 
  const [showSuspectDetailView, setShowSuspectDetailView] = useState(false);
  //show all EVIDENCE 
  const [showEvidenceDetailView, setShowEvidenceDetailView] = useState(false);


  /*BIND DATA*/
  //set Case on button click
  const [getAppCase, setAppCase] = useState();
  //setSuspect on button click
  const [getSuspect, setSuspect] = useState();
  //setEvidence on button click
  const [getEvidence, setEvidence] = useState(); 

  const [dayFact, setDayFact] = useState("114");
  const [susFact, setSusFact] = useState("3");
  const [evFact, setEvFact] = useState("10");
  const [statFact, setStatFact] = useState("OPEN");

  useEffect(() => { }, []);

  /********HANDLE CLICKS************/
  // view SIDE BAR
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  // Function to toggle default HOME view
  const toggleHomeView = () => {
    console.log("Toggle Home"); // Add logging to check if the function is called
    setShowHome(true); // #1 Home True
    setShowSidebar(false);
    setShowCreateCase(false); // #2 Set showCreateCase to true
    setShowCreateNote(false); // #3 Set showCreateNote to false
    setShowDetailedCaseView(false); // #4 Set showDetailedCaseView to false
    setShowAllCaseView(true); // #5 Set showAllCaseView to true
    setShowAllSuspectsView(false); // #6 Set showAllSuspectView to false
    setShowSuspectDetailView(false); // #7 Set showSuspectDetailView to false
    setShowCreateSuspect(false);
    setShowCreateEvidence(false);
    setShowAllCaseNoteView(false);
    setShowAllEvidenceView(false);
    setShowDetailedCaseNoteView(false);
    setShowEvidenceDetailView(false);
  };
  // Function to toggle CREATE CASE
  const toggleCreateCase = () => {
    console.log("Toggle Create Case Clicked");
    setShowHome(false);
    setShowSidebar(false);
    setShowCreateCase(true); // #2 Create Case
    setShowCreateNote(false);
    setShowDetailedCaseView(false);
    setShowAllCaseView(false);
    setShowAllSuspectsView(false);
    setShowSuspectDetailView(false);
    setShowCreateSuspect(false);
    setShowCreateEvidence(false);
    setShowAllCaseNoteView(false);
    setShowAllEvidenceView(false);
    setShowDetailedCaseNoteView(false);
    setShowEvidenceDetailView(false);
  };
  // Function to toggle CREATE NOTE
  const toggleCreateNote = () => {
    console.log("Toggle Create Note Clicked");
    setShowHome(false);
    setShowSidebar(false);
    setShowCreateCase(false);
    setShowCreateNote(true); // #3 Create Note
    setShowDetailedCaseView(false);
    setShowAllCaseView(false);
    setShowAllSuspectsView(false);
    setShowSuspectDetailView(false);
    setShowCreateSuspect(false);
    setShowCreateEvidence(false);
    setShowAllCaseNoteView(false);
    setShowAllEvidenceView(false);
    setShowDetailedCaseNoteView(false);
    setShowEvidenceDetailView(false);
  };
  // Function to toggle CREATE SUSEPCT
  const toggleCreateSuspect = () => {
    console.log("Toggle Create Note Clicked");
    setShowHome(false);
    setShowSidebar(false);
    setShowCreateCase(false);
    setShowCreateNote(false);
    setShowDetailedCaseView(false);
    setShowAllCaseView(false);
    setShowAllSuspectsView(false);
    setShowSuspectDetailView(false);
    setShowCreateSuspect(true); // CREATE SUSPECT
    setShowCreateEvidence(false);
    setShowAllCaseNoteView(false);
    setShowAllEvidenceView(false);
    setShowDetailedCaseNoteView(false);
    setShowEvidenceDetailView(false);
  };
  // Function to toggle CREATE EVIDENCE
  const toggleCreateEvidence = () => {
    console.log("Toggle Create Note Clicked");
    setShowHome(false);
    setShowSidebar(false);
    setShowCreateCase(false);
    setShowCreateNote(false);
    setShowDetailedCaseView(false);
    setShowAllCaseView(false);
    setShowAllSuspectsView(false);
    setShowSuspectDetailView(false);
    setShowCreateSuspect(false);
    setShowCreateEvidence(true); //CREATE EVIDENCE
    setShowAllCaseNoteView(false);
    setShowAllEvidenceView(false);
    setShowDetailedCaseNoteView(false);
    setShowEvidenceDetailView(false);
  };
  // Function to handle CASE DETAIL view
  const handleCaseViewButtonClick = () => {
    console.log("View button clicked on Case");
    setShowHome(false);
    setShowSidebar(false);
    setShowCreateCase(false);
    setShowCreateNote(false);
    setShowDetailedCaseView(true); // #4 Detailed Case View
    setShowAllCaseView(false);
    setShowAllSuspectsView(false);
    setShowSuspectDetailView(false);
    setShowCreateSuspect(false);
    setShowCreateEvidence(false);
    setShowAllCaseNoteView(false);
    setShowAllEvidenceView(false);
    setShowDetailedCaseNoteView(false);
    setShowEvidenceDetailView(false);
  };
  // Function to handle CASE HEADER click
  const handleCaseHeaderClick = () => {
    console.log("Cases on Nav Bar Clicked");
    setShowHome(false);
    setShowSidebar(false);
    setShowCreateCase(false);
    setShowCreateNote(false);
    setShowDetailedCaseView(false);
    setShowAllCaseView(true); // #5 All Cases
    setShowAllSuspectsView(false);
    setShowSuspectDetailView(false);
    setShowCreateSuspect(false);
    setShowCreateEvidence(false);
    setShowAllCaseNoteView(false);
    setShowAllEvidenceView(false);
    setShowDetailedCaseNoteView(false);
    setShowEvidenceDetailView(false);
  };
  // Function to handle SUSPECT HEADER click
  const handleSuspectsHeaderClick = () => {
    console.log("Suspects on Nav Bar Clicked");
    setShowHome(false);
    setShowSidebar(false);
    setShowCreateCase(false);
    setShowCreateNote(false);
    setShowDetailedCaseView(false);
    setShowAllCaseView(false);
    setShowAllSuspectsView(true); // #6 All Suspects
    setShowSuspectDetailView(false);
    setShowCreateSuspect(false);
    setShowCreateEvidence(false);
    setShowAllCaseNoteView(false);
    setShowAllEvidenceView(false);
    setShowDetailedCaseNoteView(false);
    setShowEvidenceDetailView(false);
  };
  // Function to handle CASE NOTE VIEW ALL click
  const handleCaseNoteViewAllClick = () => {
    console.log("Cases on Nav Bar Clicked");
    setShowHome(false);
    setShowSidebar(false);
    setShowCreateCase(false);
    setShowCreateNote(false);
    setShowDetailedCaseView(false);
    setShowAllCaseView(false);
    setShowAllSuspectsView(false);
    setShowSuspectDetailView(false);
    setShowCreateSuspect(false);
    setShowCreateEvidence(false);
    setShowAllCaseNoteView(true); // #5 All Case Notes
    setShowAllEvidenceView(false);
    setShowDetailedCaseNoteView(false);
    setShowEvidenceDetailView(false);
  };
  // Function to handle EVIDENCE VIEW ALL click
  const handleEvidenceViewAllClick = () => {
    console.log("Cases on Nav Bar Clicked");
    setShowHome(false);
    setShowSidebar(false);
    setShowCreateCase(false);
    setShowCreateNote(false);
    setShowDetailedCaseView(false);
    setShowAllCaseView(false);
    setShowAllSuspectsView(false);
    setShowSuspectDetailView(false);
    setShowCreateSuspect(false);
    setShowCreateEvidence(false);
    setShowAllCaseNoteView(false);
    setShowAllEvidenceView(true);  // #5 All Evidence
    setShowDetailedCaseNoteView(false);
    setShowEvidenceDetailView(false);
  };
  // Function to handle SUSPECT DETAIL view click
  const handleSuspectsDetailClick = () => {
    console.log("View Suspects button Clicked");
    setShowHome(false);
    setShowSidebar(false);
    setShowCreateCase(false);
    setShowCreateNote(false);
    setShowDetailedCaseView(false);
    setShowAllCaseView(false);
    setShowAllSuspectsView(false);
    setShowSuspectDetailView(true); // #7 Suspect Detail
    setShowCreateSuspect(false);
    setShowCreateEvidence(false);
    setShowAllCaseNoteView(false);
    setShowAllEvidenceView(false);
    setShowDetailedCaseNoteView(false);
    setShowEvidenceDetailView(false);
  };
  // Function to handle EVIDENCE DETAIL view click
  const handleEvidenceDetailClick = () => {
    console.log("View Suspects button Clicked");
    setShowHome(false);
    setShowSidebar(false);
    setShowCreateCase(false);
    setShowCreateNote(false);
    setShowDetailedCaseView(false);
    setShowAllCaseView(false);
    setShowAllSuspectsView(false);
    setShowSuspectDetailView(false);
    setShowCreateSuspect(false);
    setShowCreateEvidence(false);
    setShowAllCaseNoteView(false);
    setShowAllEvidenceView(false);
    setShowDetailedCaseNoteView(false);
    setShowEvidenceDetailView(true); // Evidence Detail
  };

  /*****VIEW FUNCTIONS******/
  /**SIDE BAR**/
  const sideBarView = showSidebar ? (
    <div>
      <SideBar
        className="sidebar"
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
          "label3904813": {
            className: "custom-btn",
            onClick: () => {
              toggleCreateNote();
            }
          },
          "label39493372": {
            className: "custom-btn",
            onClick: () => {
              toggleCreateSuspect();
            }
          },
          "label39493376": {
            className: "custom-btn",
            onClick: () => {
              toggleCreateEvidence();
            }
          },
          "label39493382": {
            className: "custom-btn",
            onClick: () => {
              handleCaseHeaderClick();
            }
          },
          "label3904861": {
            className: "custom-btn",
            onClick: () => {
              handleCaseNoteViewAllClick();
            }
          },
          "label3904883": {
            className: "custom-btn",
            onClick: () => {
              handleSuspectsHeaderClick();
            }
          },
          "label39493386": {
            className: "custom-btn",
            onClick: () => {
              handleEvidenceViewAllClick();
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
        <View marginRight={"80px"}>
          <Button onClick={toggleCreateEvidence} >Create Evidence</Button>
        </View>
        <View marginRight={"80px"}>
          <Button onClick={toggleCreateSuspect}>Create Suspect</Button>
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
      <View className="create-form">
        <Heading level={2} marginTop={"40px"} marginBottom={"40px"} class="special-elite-regular" fontSize={"40px"}>Current Cases</Heading>
        {/* Create Case Section */}
        <NewCaseCreateForm
          onSuccess={() => {
            toggleHomeView(true) // go home
          }}
          onCancel={() => {
            toggleHomeView(true) // go home
          }}
          onValidate={{
            "case_title": (value, validationResponse) => {
              const titleLength = value.length;
              console.log('Length: ' + titleLength)
              if (titleLength > 60) {
                // Ensure title is less than 60 characters
                return {
                  hasError: true,
                  errorMessage: 'Title must be less than 60 Characters'
                };
              }
              return validationResponse;
            }
          }}
        />
      </View>
    </div>
  ) : null; // Render null if showDetailedCaseView is false

  /*CREATE NOTE FORM*/
  const createNoteView = showCreateNote ? (
    <div>
      {/* Create Note Section */}
      <View className="create-form">
        <Heading level={2} class="special-elite-regular" fontSize={"40px"}>Add Case Note</Heading>
        <CaseNoteCreateForm
          onSuccess={() => {
            toggleHomeView(true) // go home
          }}
          onValidate={{
            "Note title": (value, validationResponse) => {
              const titleLength = value.length;
              console.log('Length: ' + titleLength)
              if (titleLength > 60) {
                // Ensure title is less than 60 characters
                return {
                  hasError: true,
                  errorMessage: 'Title must be less than 60 Characters'
                };
              }
              return validationResponse;
            }
          }}
        />
      </View>
    </div>
  ) : null; // Render null if showDetailedCaseView is false

  /*CREATE SUSPECT FORM*/
  const createSuspectView = showCreateSusepct ? (
    <div>
      {/* Create Note Section */}
      <View className="create-form">
        <Heading level={2} class="special-elite-regular" fontSize={"40px"}>Add Suspect</Heading>
        <SuspectCreateForm
          onSuccess={() => {
            toggleHomeView(true) // go home
          }} />
      </View>
    </div>
  ) : null; // Render null if showDetailedCaseView is false

  /*CREATE EVIDENCE FORM*/
  const createEvidenceView = showCreateEvidence ? (
    <div>
      {/* Create Evidence Section */}
      <View className="create-form">
        <Heading level={2} class="special-elite-regular" fontSize={"40px"}>Add Evidence</Heading>
        <EvidenceCreateForm
          onSuccess={() => {
            toggleHomeView(true) // go home
          }}
        />
      </View>
    </div>
  ) : null; // Render null if showDetailedCaseView is false

  /*ALL CASE VIEW**/
  const allCaseView = showAllCaseView ? (
    <div>
      <Flex direction="Column" justifyContent="Center" alignItems="Center" >
        <Heading level={2} marginTop={"40px"} marginBottom={"40px"} class="special-elite-regular" fontSize={"40px"}>Current Cases</Heading>
        <CaseCardCollection overrideItems={({ item, index }) => ({
          overrides: {
            "CaseViewButton": {
              onClick: () => {
                setAppCase(item);
                console.log("appCase " + item);
                handleCaseViewButtonClick();
              },
            },
            "image": {
              src: fingerprintImg2
            }
          }
        })
        } />
      </Flex>
    </div>
  ) : null; // Render null

  /*ALL CASE NOTES**/
  const allCaseNoteView = showAllCaseNoteView ? (
    <div>
      <Flex direction="Column" justifyContent="Center" alignItems="Center" >
        <Heading level={2} marginTop={"40px"} marginBottom={"40px"} class="special-elite-regular" fontSize={"40px"}>All Case Notes</Heading>
        <CaseNoteCollection overrideItems={({ item, index }) => ({
          overrides: {
            "image": {
              src: fingerprintImg2
            }
          }
        })
        } />
      </Flex>
    </div>
  ) : null; // Render null

  /*ALL EVIDENCE VIEW**/
  const allEvidenceView = showAllEvidenceView ? (
    <div>
      <Flex direction="Column" justifyContent="Center" alignItems="Center" >
        <Heading level={2} marginTop={"40px"} marginBottom={"40px"} class="special-elite-regular" fontSize={"40px"}>Current Evidence</Heading>
        <EvidenceCollection overrideItems={({ item, index }) => {
          console.log("Evidence Collection");
          return {
            overrides: {
              "Button": {
                onClick: () => {
                  console.log("suspect ");
                  setEvidence(item);
                  handleEvidenceDetailClick();
                },
              },
              "image": {
                src: detective,
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
          console.log("Suspect detail");
          return {
            overrides: {
              "Button": {
                onClick: () => {
                  setSuspect(item);
                  console.log("suspect ");
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
  ) : null; // Render null .

  /*CASE DETAIL VIEW*/
  const detailedCaseView = showDetailedCaseView ? (
    <div>
      <View style={{ flex: 1, marginLeft: '300px', marginRight: '10px', width: '80%', padding: '10px' }}>
        <View style={{ flex: 1, marginLeft: '300px', marginRight: '10px', width: '90%', padding: '30px' }}>
          <CaseDetailHeader appCase={getAppCase}
            overrides={{
              "CaseOverviewHeader": {
                children: "Case Overview"
              },
              "DaysFact": {
                children: dayFact
              },
              "SusFact": {
                children: susFact
              },
              "EvFact": {
                children: evFact
              },
              "StatusFact": {
                children: statFact
              }
            }
            }
          />
        </View>
        <Flex justifyContent="Center" direction="row" alignItems="Center" padding="20px">
        <View marginRight={"80px"}>
          <Button onClick={toggleCreateEvidence} >Create Evidence</Button>
        </View>
        <View marginRight={"80px"}>
          <Button onClick={toggleCreateSuspect}>Create Suspect</Button>
        </View>
        <View>
          <Button onClick={toggleCreateNote} >Add Case Note</Button>
        </View>
      </Flex>
        <View style={{ flex: 2, display: 'flex', flexDirection: 'row' }}>
          {/* Suspects Section */}
          <View >
            <Heading level={2} class="special-elite-regular" fontSize={"40px"}>Suspects</Heading>
            <SuspectCollection overrideItems={({ item, index }) => {
              console.log("Suspect detail");
              return {
                overrides: {
                  "Button": {
                    onClick: () => {
                      setSuspect(item);
                      console.log("suspect ");
                      handleSuspectsDetailClick();
                    },
                  },
                  "image": {
                    src: suspectImg1,
                  }
                },
              };
            }} />
          </View>

          {/* Evidence Section */}
          <View>
            <Heading level={2} class="special-elite-regular" fontSize={"40px"}>Evidence</Heading>
            <EvidenceCollection overrideItems={({ item, index }) => {
              console.log("Evidence detail");
              return {
                overrides: {
                  "Button": {
                    onClick: () => {
                      console.log("Evidence ");
                      setEvidence(item);
                      handleEvidenceDetailClick(); 
                    },
                  },
                  "image": {
                    src: manImg,
                  }
                },
              };
            }} />
          </View>
        </View>
      </View>
    </div>
  ) : null; // Render null

  /*SUSPECT DETAIL VIEW*/
  const suspectDetailView = showSuspectDetailView ? (
    <div>
      <Flex direction="Column" justifyContent="Center" alignItems="Center" >
        <Heading level={2} marginTop={"40px"} marginBottom={"40px"} class="special-elite-regular" fontSize={"40px"}>Suspect Details</Heading>
        <SuspectDetail suspect={getSuspect} ></SuspectDetail>
      </Flex>
    </div>
  ) : null;

  /***WIP***CASE NOTE DETAIL VIEW*/
  const caseNoteDetailView = showDetailedCaseNoteView ? (
    <div>
      <Flex direction="Column" justifyContent="Center" alignItems="Center" >
        <Heading level={2} marginTop={"40px"} marginBottom={"40px"} class="special-elite-regular" fontSize={"40px"}>Case Note Details</Heading>
      </Flex>
    </div>
  ) : null;

  /*EVIDENCE DETAIL VIEW*/
  const evidenceDetailView = showEvidenceDetailView ? (
    <div>
      <Flex direction="Column" justifyContent="Center" alignItems="Center" >
        <Heading level={2} marginTop={"40px"} marginBottom={"40px"} class="special-elite-regular" fontSize={"40px"}>Evidence Details</Heading>
        <DetailViewsEvidenceDetailView evidence={getEvidence} ></DetailViewsEvidenceDetailView>
      </Flex>
    </div>
  ) : null;


  /********RENDER ON PAGE*********/
  return (
    <View className="App">
      {/*** HEADER *** ALWAYS DISPLAY ***/}
      <NavBarHeader overrides={navbarOverrides} width={"100vw"} marginTop={"40p"} marginBottom={"2px"}></NavBarHeader>
      {/*** MAIN *** UNDER HEADER AND ABOVE FOOTER ***/}
      <main className={showSidebar ? "main-content sidebar-open" : "main-content sidebar-closed"}>
        <div className={"sidebar-container"}>
          <div className={showSidebar ? "sidebar open" : "sidebar closed"}>
            {/* Sidebar */}
            {sideBarView}
          </div>
          <FontAwesomeIcon
            icon={showSidebar ? faTimes : faArrowRight} onClick={toggleSidebar}
            className={showSidebar ? "sidebar-icon open" : "sidebar-icon closed"} />
        </div>
        {homeView}
        {createCaseView}
        {createNoteView}
        {createEvidenceView}
        {createSuspectView}
        {allCaseView}
        {allCaseNoteView}
        {allEvidenceView}
        {allSuspectView}
        {suspectDetailView}
        {detailedCaseView}
        {evidenceDetailView}
        {caseNoteDetailView}
      </main>
      {/*** FOOTER *** ALWAYS DISPLAY***/}
      <MarketingFooterBrand overrides={footerOverrides} className="footer" width={"100vw"} >
      </MarketingFooterBrand>
    </View>
  );
};

export default withAuthenticator(App);