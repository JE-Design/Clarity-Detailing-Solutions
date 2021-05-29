## Table of Contents
- [About the Repo](#about-the-repo)
- [Getting Started](#getting-started)
- [Code Structure](#code-structure)
- [Tech](#tech)
- [Deployment](#deployment)
- [Contributors](#contributors)
- [License](#license)


## About the Repo
This repo shows the development state of the website built at [claritydetailingsolutions.com](https://claritydetailingsolutions.com/).

Despite being available on github, this repository is intended as a read-only resource and has been licensed as such. Permissions are not given to use or modify this software.

## Getting Started
*This section is intended for usage of future developers or upon permissional changes.*

After cloning the repo to your local machine enter the root directory and run `npm install`.

Then, run `npm build`.

Having completed this, in the root directory run `npm start`.

This runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Code Structure
Explained here are the most important points of the code structure, where to find configs, etc.
```
.
├── frontend                
│   ├── public              # Static assets that are deployed as-is when built
│   ├── src                 # Code directory for frontend container
│   │   ├── Assets          # Static assets (images, icons)
│   │   ├── Components      # Non-page level react components (ex. navbar)
│   │   ├── Pages           # React component pages (ex. about, contact)
│   │   ├── Styles          # Global styles and SCSS mixins
│   │   ├── Utils           # Reusable functions and globals
│   │   ├── Values          # Localization data (language translations)
│   │   ├── App.jsx         # Main app file composing the entire application
│   │   └── ...
│   ├── .gitignore          # Files that should not be posted to git (ex. npm modules)
│   ├── jsconfig.json       # Project config (enables absolute path imports)
│   ├── package.json        # Frontend code dependencies
│   └── ...
├── .eslintrc               # Airbnb Eslint configs/rules
├── .prettierrc             # Prettier configs/rules
└── ...
```

## Tech
Frontend: 
- [React](https://reactjs.org/)
- [SCSS](https://sass-lang.com/)

Linting and Formatting: 
- [Airbnb style guide](https://airbnb.io/javascript/react/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)


## Deployment
//more to come

## Contributors
- Eros Di Pede
  + [Github](https://github.com/ForkBombGIT)
  + [Website](https://erosdipede.ca/)
- Josh Gorman
  + [Github](https://github.com/Liannus)
  + [Website](https://joshgorman.ca/)
  
## License
As this code is currently unlicensed, no permissions are given to use or modify this software.
