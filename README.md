# rn-assignment4-11220227
# Jobizz
Welcome to the README for my React Native application! This file provides an overview of the components used in my app and includes instructions for setup and usage.

## Components

### `App.js`

This is the main entry point of the application. It manages the state for user authentication and conditionally renders either the `User` component (if logged in) or the `LoginHead` component (if not logged in).

### `LoginHead.js`

The `LoginHead` component is responsible for displaying a login form and social login options. It handles user input for name and email fields and provides a login button that triggers the login process when clicked.

### `User.js`

The `User` component displays user information and various sections of the app, including a search bar (`SearchBar`), featured jobs (`FeaturedJobs`), and popular jobs (`PopularJobs`). It receives job data as props and renders them accordingly.

### Other Components

- `SearchBar.js`: Displays a search bar for users to search for jobs.
- `FeaturedJobs.js`: Displays a list of featured jobs.
- `PopularJobs.js`: Displays a list of popular jobs.
- `Head.js`: Displays user profile information, including name, email, and avatar.

## Screenshots
### Login Screen

![Login Screen](image-1.png)
### User Dashboard

![User Dashboard](image.png)


## Installation and Setup

To run this app locally on your machine, follow these steps:

1. **Clone the Repository**: Clone this repository to your local machine using Git.
   
   ```bash
   git clone https://github.com/deAlgorithm/rn-assignment4-11220227.git
   ```

2. **Install Dependencies**: Install dependencies using npm or yarn.

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the App**: Start the development server to run the app on your local machine.

   ```bash
   npm start
   # or
   yarn start
   ```

4. **Simulator or Device**: Use an iOS or Android simulator, or scan the QR code with the Expo Go app on your device to view the app.

