# Products Market
It´s a Web Application using technologies like: *ReactJS, Redux, Immutable, Axios, React-Router, ESLint, classnames, WebPack, Babel, create-react-app, Among others.*
  
# Installation
  1. Clone the repository : <code>https://github.com/jarangoz/products-market.git</code>.
  2. Open your prompt and go to the folder project and excute: <code>yarn</code>.
  3. Run the project executing the command: <code>yarn start</code>.
  4. the browser will open the following path: <code>http://localhost:3000/</code>.
  
# API Location
<code>http://5b30eddb7ad3350014b43349.mockapi.io/api/v1/products</code>

# Folder Structure
```
  |__product-market
    |__public                                   # Contains index.html
    |__scr                                   
       |__assets                                # Fonts, Icons & Images
       |__components                            # All presentationals components
       |__constants                             
          |__actionTypes                        # Here are defined the action creators types
          |__copies                             # Object with all the statics texts used in the application
          |__categories                         # Products category array
       |__containers                            # Contains all <code>Containers Components</code>
       |__data                                  # Contains the Data API URL (static)
       |__routes                                # Contains main header routes
       |__state
          |__actions                            # Contains the actions / action creators                                
          |__reducers                           # Contains product reducer & combine reducers
          |__store                              # Contains store configuration
       |__styles                                # Contains global styles
       |__test                                  # Her will be all unit tests
```
