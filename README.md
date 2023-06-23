
# Top Headings Web App

![image](https://github.com/wizzandrew/top-headlines/assets/43003757/1923318d-86d9-4120-aab9-b908b10d1102)

The scope of this project is to build a ligtweight news web app. 

It consumes News API web service via ``` fetch ``` and provides top headings from all around the globe.

The stack consists of ```HTML5```, ```CSS3```, ```Bootstrap 5```, ```Typescript``` and ```React.js``` technologies.

## Features

* Provides top headings for such categories as World, Business, Entertainment, Health, Tech, Sports, Science.

* Provides top headings from America, Europe, Africa and Asia regions for specific news sources, for example "Politico" for US and "Le Monde" for France.

* Search for news via search bar,

* Provides translation for source news, for example translation for news from "Le Monde" France.

## Key Learnings

1. There can't be too much of analysis. In the middle of development I discovered that due to free developer API key top headings serve almost as little content for news and can sometimes lack news picture.

2. Free Google translate is not available for web apps because of CORS policy. That's why I created a small Node.js server for traslation requests that exploits other github project.

3. Cannot store Date object in Redux store.

4. React development mode renders twice, which can be cause for dual fetch requests.

## Installation

1. Make sure you have Node.js installed and VS Code IDE preferably

2. Make yourself an API key at ```https://newsapi.org/```

3. Clone this repository ``` https://github.com/wizzandrew/top-headlines.git ```

4. Navigate to folder ```top-headlines-main ```  

5. Open terminal and make sure it is opened in the folder ```top-headlines-main ```

6. Install npm modules with ``` npm i ```

7. Navigate to ```src/shared/api.ts``` and set your api key to ```const apiKey```

8. Run app with ``` npm start ```

9. The app is running at ``` http://localhost:3000 ```

10. Open another terminal in the ``` server ``` folder

11. Run server with ``` npm run dev ```

## Credits

App's layout and design heavily influenced by BBC ``` https://www.bbc.com/news ```

Top headings provided by News API ``` https://newsapi.org/ ```

Google Translation provided by vitalets ``` https://github.com/vitalets/google-translate-api/security ```
