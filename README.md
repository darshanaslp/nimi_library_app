# Library App

Task Full-Stack Development for the Library App
Details contain below with the instruction how to run the app


#  Fullstack Trariff Annual Cost Comparison App

## Project structure

	├── frintend      # frontend api's folder
    ├── backend       # backend api's folder
    ├── Readme.md     # Readme File


#  React Frontend

## Project structure

	├── public             
    ├── src		
	   ├── component 
			├──login
			├──home
			├──header
			├──search
			├──addBook
			├──footer
	   ├── service 
			├──authService
			├──booksService
       ├── store 
			├──Action
				├──authAction
				├──booksAction
			├──Reducer
				├──authReducer
				├──booksReducer
			├──store
    ├── app.js            
    ├── index.js         
    ├── test                 


## Tech used

- React 
- Redux
- Axios
- Bootstrap

## How to run locally

Clone or download project go to the Front-end
Inside Front-end open node console

Then type  `npm install`
 Run `npm start` if you have node installed locally.
 
Open your browse to `localhost:3000`

## How to run Tests

Run `ng test` if you have node installed locally.


#  Node Back-end

## Project structure

	├── app                   
	├── config
		├── auth  
		├── database  
    ├── models                
		├── book
		├── user
    ├── controllers           
		├── bookController	
    ├── middleware            
		├── authMiddleware	
    ├── routes                
		├── auth
		├── book
	├── migration
	├── seeders
    ├── test                  
    └── package.json          


## Tech used

- Node Express
- sequelize
- axios
- Jest


## How to run locally

Clone or download project go to the Back-end
Inside Backend open node console
Then type  `npm install`

### How to Migration and Seed

open console type `npm install sequelize -g`
now sequelize install globlally you able use sequelize commands

then in console `sequelize db:migrate` tabel are created in your database
and run `sequelize db:seed:all` now seeder gonna run and fill the table.

Run `npm start` if you have node installed locally.
App gonna be run `localhost:5000`


### Mysql credential

Inside config -> database.js edit this regarding to mqsal database information 
 
const dbHost = 'yourhost';
const dbPort = 'port';
const dbName = 'database';
const dbUser = 'username';
const dbPassword = 'password';

replace this information


## Rest api structure

### Auth api

Methods | Urls | Action	
--- | --- | ---
**POST** | `/auth/login` | User Login 


### Books api

Methods | Urls | Action	
--- | --- | ---
**GET** | `books/list` |  List Available  Books
**GET** | `books/loan-list` |  List Loan Books
**GET**| `books/search?author={name}` |  Search Books
**POST** | `/books/add` | Create New Book 
**POST** | `/books/loan` | Loan Book
**POST** | `/books/retun` | retun Book 


List Available  Books retun Json

[
    {
        "id": 3,
        "title": "Sample Book 3",
        "author": "Author 3",
        "available": false
    },
    {
        "id": 4,
        "title": "Book Title",
        "author": "Author 4",
        "available": false
    },
    {
        "id": 5,
        "title": "book title 3",
        "author": "Author 5",
        "available": false
    }
],


Search Books retun Json

[
    {
        "id": 1,
        "title": "Sample Book 1",
        "author": "Author 1",
        "available": true
    }
]

Book loan retun Json

[{
    "message": "Book loaned successfully",
    "book": {
        "id": 6,
        "title": "book title 4",
        "author": "Author 6",
        "available": false
    }
}]	


## Tests 

Open Project

Open node console run `npm test` to have jest start and watch the tests.

