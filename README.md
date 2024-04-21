# Private Eye Appplication
![Private Eye Logo](src/Images/PELogo.png) <img src="images/example.png" width="300" />
# Dependencies

Setting up the development environment for working on the Private Eye System involves several steps to ensure that developers have all the necessary tools and dependencies configured correctly. Here's a detailed guide:

Clone the Private Eye System's code repository from the version control system (GitHub). 

### `git clone https://github.com/AmberRousselow/privateeyeapp`

Install Node.js and npm: The Private Eye System is built using JavaScript (React) and relies on Node.js for package management. Install Node.js and npm (Node Package Manager) on the developer's machine. Download the installer from the official Node.js website and follow the installation instructions.

https://nodejs.org/en

Navigate to the project directory and install the project dependencies using npm. This installs all the required packages and libraries specified in the project's package.json file.

### `cd privateeyeapplication`
### `npm install`

Install @aws-amplify/ui-react with npm or yarn:

### `npm install @aws-amplify/ui-react aws-amplify`

The Private Eye System utilizes AWS Amplify for backend services. Install the Amplify Command Line Interface (CLI) globally on the developer's machine using npm.

### `npm install -g @aws-amplify/cli`

Configure the Amplify CLI with AWS credentials and specify the AWS region where the backend services will be deployed. Run the following command and follow the prompts to set up the Amplify CLI.

### `amplify configure`

Initialize the Amplify backend environment for the Private Eye System. Run the following command in the project directory and follow the prompts to create a new backend environment.

### `amplify init`

Once the environment is set up, start the development server to run the Private Eye System locally. Use the npm script defined in the project's package.json file to start the server.

In the project directory, you can run: 

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.

