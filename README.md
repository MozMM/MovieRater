# Movie Rater
#### A Web app to search movies and rate them.
#### Marta Mozelle - Sole Developer

## ⭐  Project is in progress! 
### Structure is completed. Still to do: Frontend styling and adding further tests. 

### Project goals met: 
- Integrated calls to [The Movie Database API](themoviedb.org) for listing data. 
- Wrote backend API to store and serve rating data from site users. 

### Things to note:
- Worked with React-Redux selectors. These replace the need for connected components using Redux's connect(), mapState() and mapDispatch().
- This repo gives an example of testing I wrote. (Some tests in Spoon City are also my work.)

### Tech Stack
| React | Redux | Express | Sequelize | Node.js | Jest |

## Set Up
1) You will need [postgres installed](https://www.postgresql.org/download/). 
* alternatively [postgres homebrew install](https://wiki.postgresql.org/wiki/Homebrew) is useful.
2) create two databases: 
* `createdb movie-rater-mozelle`
* `createdb movie-rater-mozelle_test`   (if you would like to run the test suites) 
3) Clone repo to your local machine.
4) `npm install`
5) `npm run dev` to spin up both server api and webpack. 

6) Optional; to run tests: `npm run test`

#### Troubleshooting:
If you're having database connection issues, make sure you have an accurate process.env.DATABASE_URL set, or that postgres is listening on its default port (localhost:5432)

