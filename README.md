# wittypen-news
Assignment for Wittypen internship

# About the Web App
This web app will give **location** specific news to the user. The location is fetched with HTML5 Geolocation API. **Users will get the news of the country they are in.**

## Technologies used
1. ReactJS 
2. HTML5 Geolocation API
3. UI Kit (CSS Framework For clean modern look)
4. Sass (CSS Preprocessor)
5. ParcelJS (for module bundling and bulding)
6. node_sass (for Sass compilation)

The JavaScript is written is ES6.

## Rest APIs
1. News API
2. Geonames API (for getting the country from longitude, latitude)

## Design Decisions

Simple equally spaced cards lets users glance at the news, at once, which consumes less of their time and is suited for the use case as news is something we love to glance through and check out the important ones.

The design is in many ways "obvious", which communicates more with the user without effort. They don't have to adapt themselves to anything they are not familiar with. Material Design cards are one of the best way to do it. They provide just enough information and attract user's attention to each news.

There is feedback in UI when user interacts with the card to make the card the user is interested in stand out, they enlarge on hover in just the right amount to avoid covering other information. 

The "Read More" button is kept long so that the user gets more touch space in small screen mobiles. The card is not a link to avoid accidental touches.

The grid is fixed and not masonary so that some news are not highlighted more than others just based on the length of content got from the API.

CSS Framework UI Kit is chosen because of the clean look. This framework along with the color scheme gives the app a cool vibe which pleases the mind, and is suitable to the morning theme, the most common time to read news.

## Development Decisions

React is used beacause it manages the UI with the data seamlessly. The UI is a function of the state, the state being the news obtained.

ParcelJS is used as a module loader because it requires no configuration, it is faster than webpack thus is best for smaller projects. 

Sass simplifies writing CSS.


#  Screenshots
### Desktop
#### When mouse is hovered over "Read More" in the card
![alt text](https://raw.githubusercontent.com/ankushChatterjee/wittypen-news/master/screenshots/feed.png "200")

### Mobile
![alt text](https://raw.githubusercontent.com/ankushChatterjee/wittypen-news/master/screenshots/iphone1.PNG "Mobile") 

#### When a card is tapped
![alt text](https://raw.githubusercontent.com/ankushChatterjee/wittypen-news/master/screenshots/iphone2.PNG "Mobile")

### Loading Screen
![alt text](https://raw.githubusercontent.com/ankushChatterjee/wittypen-news/master/screenshots/loading.png "10,000")
