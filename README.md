# Angular Project + Express.js + PostgreSQL
## Project Description:
This Full-Stack Project which I called Cake World with Angular, Express.js and PostgreSQL is a web application that combines frontend built with Angular and backend using Express.js and PostgreSQL. Тhe purpose of this application is to share a recipe of your favorite cake, which recipe will be posted at the Blog from the Menu and saved in PostgreSQL. Information at the Blog includes a title, user name, email and recipe. The application allows you to delete someones blog. Also you will find Cakes from the menu where you can read some interesting articles about desserts which are in-memory loaded.

## Features:
1. Responsive Design: The application is fully responsive, ensuring an optimal viewing experience across a wide range of devices, from desktops to mobile phones.
2. Full-Stack Architecture: Combines a Angular frontend with an Express.js backend and PostgreSQL database.
3. Blog: Allows users to post recipes with title, user details, and the recipe itself. Provides functionality to delete blog posts.
4. In-Memory Articles: Displays articles about desserts that are in-memory loaded for quick a

## Technologies Used:
1. Frontend: Angular, HTML, CSS.
2. Backend: Node.js, Express.js.
3. Database: PostgreSQL, Sequelize.
4. State Management: Angular Services.
5. Routing: Angular Router.
6. Version Control: Git, GitHub.

## Project Structure:
Frontend: Contains all Angular components and frontend logic.
  1. Components: Components(some of them reusable) for different sections of the project, including Menu.
  2. Pages: Separate pages for Home, Cakes, Blog and Share Recipe.

Backend: Contains all Express.js server-side code and database logic.
  1. Routes: Define API endpoints for fetching and manipulating project data.
  2. Controllers: Handle the logic for each API endpoint.
  3. Models: Define the PostgreSQL schemas using Sequelize.
  4. Config: Configuration files, including database connection settings.

## To run this project locally, follow these steps:
1. GitHub: https://github.com/goshy29/angular-express-postgresql
2. Clone the repository: git clone https://github.com/goshy29/angular-express-postgresql.git
3. Open the project with your code editor(VS Code) and open TWO New Terminals
4. At the First Terminal to install Frontend dependencies, in the root directory run: npm install       
5. At the Second Terminal to install Backend dependencies, type "cd backend" then run: npm install   
6. To start the Frontend development server, in the root directory run: npm start    
7. To start the Backend server, in the backend directory run: npm start
8. Open the application in your browser: http://localhost:4200

## Example Data to Enter in the User Form: 
1. title: Fig, nut & seed bread with ricotta & fruit
2. name: John Doe
3. email: johndoe@gmail.com
4. recipe: This healthy loaf is closer to banana bread than traditional cake. It's made with dried figs, sultanas, oats, nuts, seeds and black tea, all of which provide a natural boost of energy. Heat oven to 170C/150C fan/gas 3½. Pour the tea into a large bowl and stir in the figs, sultanas and oats. Set aside to soak. Meanwhile, line the base and sides of a 1kg loaf tin with baking parchment. Mix together the flour, baking powder, nuts and seeds. Beat the egg into the cooled fruit mixture, then stir the dry ingredients into the wet. Pour into the tin, then level the top and scatter with the extra nuts and sesame seeds.

## PostgreSQL Connection:
You will find this connection code at directory "backend/utils/db-connection.js".

const sequelize = new Sequelize("database", "username", "password", {
    host: "localhost",
    dialect: "postgres"
});

Replace that sequelize connection properties("database", "username", "password") with your own database credentials for PostgreSQL.

**Note: When you start the application for first time, after successfully post a place by you, database table "blog" will be automatically created by Sequelize and you are ready to go.**
