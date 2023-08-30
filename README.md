# Coin Tracker

# Live Site: https://cointracker-crypto.netlify.app/

# Overview

Coin Tracker is a web application where investors and/or enthusiasts of the cryptocurrency market can view the current market data and trends around the various cryptocurrencies. By default, users are provided the top 20 coins, however than can load more coins to find the coin they are looking for. Users who have created their own account have access to a watchlist where they can save their favorite coins and view only those specifically.

# Technology

This application is written in React.js and features the use of built in React Hooks, user auth, external libraries, and custom JavaScript.

Core Concepts:
- Fetch data from public REST web standards
- Controlled Forms using state
- Event Handling to update server and re-render DOM
- Client side routing
- User authentication managed by AppWrite

React Hooks Used:
- useState 
- useEffect
- useRef

Libraries Used:
- react-router-dom (clients side routing)
- Bootstrap 

# Challenges

The biggest challenge in the project was the implementation of new features I have not worked with. The first being user authentication and second being adding a chart to view historical coin data. While user auth seemed daunting at first, this experience has given me a better understanding on how to use this functionality in a react application.

# Run Locally

1. Fork and Clone this directory
2. Open your terminal and navigate to project directory(../coin-tracker)
3. Check Dependencies
- Verify npm is installed by running '$ npm -v'
- - if installed continue to next step 
- - if not installed, vist: https://nodejs.org/en#home-downloadhead and follow instructions
5. In the project directory still, run 'npm install'
8. Once npm is installed run 'npm run dev'
9. Once the command completes execution, navigate to the provided url


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
