# Propacity - Star Wars Universe

## Overview

Propacity is a React project that provides information about the Star Wars universe. It includes components for various sections, such as Grid, GridList, List, Listing, ListStyleHeader, Navbar, Sidebar, SidebarWrapper, and Hero. Additionally, it features two overlay show models, DeleteModel and MainModel, to display details. The project also includes a Home page and allows users to search for information using the search functionality in the Navbar.

## Live Demo

Visit the live demo of the project [here](https://legendary-sunshine-67146c.netlify.app/).

## Project Structure

The project follows a file structure as follows:

src
|-- components
| |-- Grid.js
| |-- GridList.js
| |-- List.js
| |-- Listing.js
| |-- ListStyleHeader.js
| |-- Navbar.js
| |-- Sidebar.js
| |-- SidebarWrapper.js
| |-- Hero.js
| |-- DeleteModel.js
| |-- MainModel.js
| |-- data
|   |-- Folder.js
|-- pages
| |-- Home.js
|-- App.js
|-- index.js
|-- ...


The `src` folder is the root of your React project. It contains two main subfolders: `components` and `pages`. In the `components` folder, you have the various components used in the project, including the `data` subfolder that contains the `Folder.js` file.

The `components` folder contains the following components:

- `Grid.js`: Component for displaying a grid.
- `GridList.js`: Component for displaying a list in a grid layout.
- `List.js`: Component for displaying a simple list.
- `Listing.js`: Component for listing items with details.
- `ListStyleHeader.js`: Component for styling the header of a list.
- `Navbar.js`: Component for displaying the navigation bar.
- `Sidebar.js`: Component for displaying the sidebar.
- `SidebarWrapper.js`: Component for wrapping the sidebar.
- `Hero.js`: Component for displaying a hero section.
- `DeleteModel.js`: Overlay show model for delete confirmation.
- `MainModel.js`: Overlay show model to display details.
- `data/Folder.js`: A file that contains data for the recursive file structure in the sidebar.

## How to Run the Project

1. Clone the repository.
2. Install the required dependencies using the following commands:

```bash
npm install react react-dom react-icons react-router-dom
npm install --save-dev @types/react @types/react-dom @vitejs/plugin-react eslint eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh postcss tailwindcss vite

1. Start the development server:
npm run dev
2. Open the project in your browser at http://localhost:3000.
