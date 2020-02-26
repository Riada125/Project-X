### ![GA](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png) General Assembly, Software Engineering Immersive

# <img src=src/simpsonslogo.png width= 200px> 
# Random Quote Generator 




## Overview <img src=src/HomerTransparent.png width= 200px>
I think that the first 12(ish) seasons of The Simpsons is some of the best TV ever created. Tasked with creating a very simple, single-page React app that consumes a public API - I was pleased to discover that a [Simpsons Quote API](https://thesimpsonsquoteapi.glitch.me/) exists!

You can view this project [here](https://mjadair.github.io/The-Simpsons-Quote-Generator/)


## Brief
- Create a single-page React app that talks to an API and displays some data
- Use a public API
- Style it nicely
- Finally, deploy your project with `npm run build`; `npm run deploy`



## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- React.js
- Webpack
- NPM
- [Simpsons Quote API](https://thesimpsonsquoteapi.glitch.me/)
- Git and GitHub
- Bulma
- Google Fonts

## Method

I set up the project with a simple Webpack-config and imported `React` and `React DOM` into an `app.js` file.


Because this app fetches data from an API and sets it as state, I utilised a class component to store the API data as below.


```js
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      quotesList: []
    }
  }
...
}

```

The app makes a request to The Simpsons quote API as below. The function `componentDidMount()`is called immediately after the React component loads. 

```js
  componentDidMount() {
    fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
      .then(resp => resp.json())
      .then(resp => this.setState({ quotesList: resp }))
  }
```


The response is then rendered and another random quote is generated when the button is clicked which updates our state. 




## Challenges

- The API was extremely limited in the number of requests that could be made to it and indeed the information that was provided. Many of the quotes include incorrect spelling and the images provided are all of different sizes and quality.



## Successes 

- This is a very basic project which enabled me to get to grips with setting up a basic webpack config, rendering a component with React and fetching from an API and updating state. Happily, I achieved all of this.  


## Potential future features

- As above, the API was very limited. Perhaps one day I'll build my own The Simpsons API...





