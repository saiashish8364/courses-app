Application Guide

packages used are nodemon,mongoose,express,dotenv,body-parser

run npm install to install the dependencies 

to start the application enter the 'npm start' command in the terminal.

---perform the url operations in postman or application similar to postman for better understanding-----

http://localhost:3000/categories

use this url to get the data listed in the categories.

to post in to database use this url with the body :{
  "name": "category name"
}

http://localhost:3000/categories/<replace with category id that needed to be updated>
to edit the category send a patch request to this url with a body:
{
  "name": "category name to be updated"
}


http://localhost:3000/subcategories

use this url to access the data listed in the sub-categories 

to post in to database use this url with the body :{
  "name": "sub category name",
  "category": "<replace with id of the  category>"
}

http://localhost:3000/subcategories/<replace with sub category id that needed to be updated>
to edit the category send a patch request to this url with a body:
{
  "name": "sub category name to be updated"
}


http://localhost:3000/categories-with-subcategory-counts
use this url to get the categories with subcategories count