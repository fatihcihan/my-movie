
# My Movies CRUD App Overview

### This project is a movie management application where you can perform basic CRUD (Create, Read, Update, Delete) operations. Users can list movies, add new movies, edit and delete existing movies.

## Features

 - **Movie Listing:** Users can list all movies and get detailed information about each movie.
 - **Add Movies:** Users can add new movies to the app and enter basic information such as title, description and banner image for each movie.
 - **Edit Movie:** To edit existing movies, users can update the title, description and banner image of the movie.
 - **Delete Movie:** Users can delete movies they do not want from the app.
 - **Movie Search:** Users can quickly find a specific movie by searching movie titles.

## Overview of the project
![](https://i.imgur.com/59mDL0k.png)

### Add Movie
![](https://i.imgur.com/acWGmJW.png)

![](https://i.imgur.com/HOV7nT6.png)

### Edit Movie
![](https://imgur.com/baKpp4l.png)

![](https://imgur.com/8Dz7xEL.png)

### Search Movie
![](https://imgur.com/Nze2yJk.png)

## Components 

 1. **App.js:** The main component, the App component, forms the main structure of the project and drives the other components.
 2. **AddMovie.js:** Component used to add a new movie.
 3. **EditMovie.js:** Component used to edit existing movies.
 4. **MovieList.js:** Component that lists and displays all movies.
 5. **SearchBar.js:** Component used to search for movies.

## Used Technologies

 - **React.js:** A JavaScript library for building user interfaces.
 - **React Router Dom:** A library for handling routing in React applications.
 - **Axios:** A promise-based HTTP client for making requests to APIs.
 - **Bootstrap:** A popular CSS framework for building responsive and mobile-first websites.
 - **Form Serialize:** A library for serializing form data into a URL-encoded string.
 - **JSON Server:** A tool for creating a fake REST API server using a JSON file as a data source.

## Project Setup
### To start using the app, follow these steps;
 1. Clone or download the project.
 2. Install the necessary dependencies: **"npm install"**
 3. Start JSON Server: **"npx json-server --watch src/api/movies.json --port 3001"**
 4. Start the project: **"npm start"**
 5. View the application by navigating to http://localhost:3000 in your browser.