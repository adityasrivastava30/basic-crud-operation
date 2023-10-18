This is a basic node template that anyone can use as it has been prepared, by keeping the most important code principal and project management recommendations..



`src`-> Inside the src folder all actual source code regarding the project will reside this will not include any kind of tests.


Let's  take a look inside the `src` folder

   - `config` -> In this folder anything and everything regarding any configuration or setup of a library or module will be done. For example:- setting up `dotenv` so that we can use the environment variables within in a cleaner fashion, this is done in the `server-config.js`. One more example can be the setup of the logging library that can help you to prepare meaningful logs so configuration for this library should also be done.

     - `routes`-> In the routes folder we register the routes and corresponding middleware and controllers to that somebody calls routes.
 
   - `middlewares`-> They are just going to intercept the incoming request where we can write our validates, authenticators, etc.

   - `controllers`-> They are the kind of the last middlewares as post them you call your incoming request and data then pass it to the business layer and once business layers return an output, we structure  the API response in controllers and send the output.

   - `repositories` -> This folder contains all the logic using which we can interact with the DB by writing queries, all the raw queries, and orm queries.

   - `servies`->It contains the business logic and interacts with repositories for data from the database.

   -  `utils`-> contain helper method error classes etc.

   ### setup The Project

         - Download this template from GitHub and open it in your text 
         - Go inside the folder path and execute the following command
         editor.
          ---
              port =<port number of your choice>
          ---
              ex:
      
              port=64600
          ---
          -go inside the `src ` folder and execute the following command:
          ---
              npx sequelize init
          ---
      - By executing the above command you will get the migrations and seeders folder along with the config.json folder.
      
      -  If you are setting up the development environment, then write the username of your db, password of the db, and in dialect mention whatever db you are using for ex: MySQL, mariadb, etc.
      
      
      - To run the server execute
      ---
      npm run dev
      ---#
