# React-Pokemon Appweb Exercise

This is a front-end application built with React that focuses on displaying and interacting with Pokemon data. The application utilizes various React hooks such as `useParams`, `useContext`, `useState`, `useEffect`, and `useForm` from the "react-hook-form" library.

## Features

The React Pokemon App includes the following features:

### Routing

The application uses React Router DOM for routing and rendering different views. The following routes are available:

- **Home**: This route displays a welcome message to the user along with an autoplay YouTube video of the original Pokemon series. It uses the `ReactPlayer` component from the "react-player" library to embed the video.

![home](Pokedex/src/assets/Capturahome1.PNG)


- **Pokedex**: This route allows users to search for any Pokemon by name or ID number. 

![search pokemon](Pokedex/src/assets/pokedex2.PNG)

![pokedex](Pokedex/src/assets/pokedex3.PNG)

It fetches data from the Pokeapi (https://pokeapi.co/) and displays the search results in cards. Clicking on a Pokemon's name in the card will render a new view with detailed information about that Pokemon in a larger card.

![pokemon id](Pokedex/src/assets/id1.PNG)


- **Poke-Workshop**: This route contains a form that allows users to create a new Pokemon by providing various inputs.

![workshop](Pokedex/src/assets/workshop1.PNG)

![form](Pokedex/src/assets/workshop2.PNG)

The form handles validation and regex-based error checking using `useForm`.
 
 ![errors](Pokedex/src/assets/workshoperrors.PNG)

Once submitted, the form creates a new card or multiple cards, which can be clicked on to display detailed information. 
  
  ![newpokemon form](Pokedex/src/assets/workshop3.PNG)
  
The new Pokemon is automatically saved and rendered in the Pokedex.

![new pokemon pokedex](Pokedex/src/assets/workshop4.PNG)