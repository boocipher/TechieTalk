# TechieTalk


* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [Acknowledgements](#acknowledgements)
* [Questions](#questions)

## Description
**TechieTalk** is a full stack application that will allow users who have interests in the area of tech to share thier knowledge by creating public posts. Other users of the platform will be able to provide their comments to a specific post.  <br>
TechieTalk creates communiation space for exchanging and growing technical knowledge.
You can access and try out **TechieTalk** live via [this link](https://techietalk.herokuapp.com/)

## Installation
In order to run **TechieTalk** you must have **NodeJS** installed.
You can download it from [here](https://nodejs.org/en/download/)<br>
You will also need **MySQL** that you can download from [here](https://www.mysql.com/downloads/)
<br>
<br>
Next, you need to install the required packages <br> 
1. Start by entering this command in your terminal for Express

   ```
   npm i express
   ```
   
2. Start by entering this command in your terminal for additional Express packages

   ```
   npm i express-session express-handlebars
   ```
3. Enter this command for installing the Sequelize packages

    ```
    npm i sequelize
    ```

4. Next, enter this command for MySQL2 package

   ```
   npm i mysql2
   ``` 
 
5. And follow by entering this command for the bcrypt package <br>   
   ```
   npm i bcrypt
   ```

6. Last, enter this command for the dotenv package  
   ```
   npm i dotenv
   ```


## Usage
This application contains a local database so in order to seed it, first you'll need to create the schema by logging into the MySQL shell. For that purpose, enter the following command in your terminal or command prompt <br>
```mysql -u root -p``` <br>
<br>
Then you'll be prompted for your password and upon successful provision, you'll see the mysql prompt. Create the schema by typing <br>
```SOURCE db/schema.sql``` <br>
<br>
Type in EXIT or QUIT once the schema is created.
<br>
<br>
Next, you need to seed the database by running the command <br>
```npm run seed```
<br>
<br>
Finally, to invoke the application run <br>
```npm run start```
<br>


## Contributing
Please follow these guidelines if you want to contribute to this project: <br>
You can add issues or recommendations via the app GitHub Issues tab.
If you want to have your fix or feature added, you'll hoave to create and submit a PR for review.

## License
This project is licensed under the MIT license.

## Acknowledgements
Initial code was provided as part of an assignment for the Full Stack Coding Bootcamp at the University of Texas at Austin

## Questions
Any questions? You can reach me at
GitHub: [boocipher](https://github.com/boocipher)<br>
Email: boocipher@gmail.com

