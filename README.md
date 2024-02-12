# My Movies CRUD App Overview

## Purpose and Benefits of the Project

This project is a movie management application that includes basic CRUD (Create, Read, Update, Delete) operations. Users can perform operations such as listing movies, adding new movies, editing and deleting existing movies.

This project allows users to effectively manage their movie collection. Users can view the list of movies, get detailed information about movies, add new movies, edit existing movies and easily delete unwanted movies.

The movie search feature included in the project allows users to quickly find a specific movie. This feature makes it easy to find the desired movie without getting lost among the vast movie collections.

Thanks to its user-friendly interface, users can easily use the application. The user experience is enhanced by using tools such as Bootstrap, which provides a modern and pleasant look.

The technologies used in the project provide a powerful and effective development experience. Tools like Axios, JSON Server and form-serialize are used for data processing and interaction with the API, while libraries like React and React Router Dom are used to build the user interface and manage routing operations.

For these reasons, My Movies CRUD App allows users to manage movies more effectively, while providing developers with a model for developing movie apps using a modern technology stack.

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

1.  **App.js:** The main component, the App component, forms the main structure of the project and drives the other components.
2.  **AddMovie.js:** Component used to add a new movie.
3.  **EditMovie.js:** Component used to edit existing movies.
4.  **MovieList.js:** Component that lists and displays all movies.
5.  **SearchBar.js:** Component used to search for movies.

## Used Technologies

- **React.js:** A JavaScript library for building user interfaces.
- **React Router Dom:** A library for handling routing in React applications.
- **Axios:** A promise-based HTTP client for making requests to APIs.
- **Bootstrap:** A popular CSS framework for building responsive and mobile-first websites.
- **Form Serialize:** A library for serializing form data into a URL-encoded string.
- **JSON Server:** A tool for creating a fake REST API server using a JSON file as a data source.

## Project Setup

### To start using the app, follow these steps;

1.  **Clone the Project:** If you have Git installed, open your terminal and run the following command to clone the project;
    `git clone https://github.com/fatihcihan/my-movie.git`

2.  **Install Required Dependencies:** To install the required dependencies in the project, navigate to the root directory of the project in the terminal and run the following command;  
    **npm install**

3.  **Start JSON Server:** Run the following command in the terminal to start the project;
    **npx json-server --watch src/api/movies.json --port 3001**

4.  **Start the Project:** Run the following command in the terminal to start the project;
    **npm start**

5.  **View the App:** After successfully launching the project, you can view the app by opening the following URL in your browser;  
    **http://localhost:3000**
