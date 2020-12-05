# Movie Rater
#### A Web app to search movies and rate them.
#### Marta Mozelle - Sole Developer

<p align="center">
  <img src=https://github.com/MozMM/MovieRater/blob/main/src/client/images/ReadmeDemo/MR-Demo-36FR.gif >
</p>

### Project goals met: 
- Integrated calls to [The Movie Database API](themoviedb.org) for listing data. 
- Wrote backend API to store and serve rating data from site users. 
- Next to do: jest-dom testing. 

### Things to note:
- Worked with React-Redux selectors. These replace the need for connected components using Redux's connect(), mapState() and mapDispatch().
- This repo gives an example of testing I wrote. (Some tests in Spoon City are also my work.)

### Tech Stack
| React | Redux | Express | Sequelize | Node.js | Jest |

### Set Up
1) You will need [postgres](https://www.postgresql.org/download/) installed. 
* alternatively [postgres homebrew install](https://wiki.postgresql.org/wiki/Homebrew) is useful.

2) create two databases: 
* `createdb movie-rater-mozelle`
* `createdb movie-rater-mozelle_test`   (if you would like to run the test suites) 

3) Clone repo to your local machine.

4) Rename the .env-example file in the root directory, removing '-example' so it's like this: MovieRater/.env 

5) In this .env file, add your API key to this variable: REACT_APP_MOVIE_API_KEY=*"Paste your API key for The Movie Database here"*
* (API key was sent with a specific submission. If you're another party interested in running this project, please email me for a key.)

6) `npm install`

7) `npm run dev` to spin up both server api and webpack. (Give this an extra few seconds to get both processes going.) 

8) Optional - to run tests: 
  * first, control + c to end your 'run dev' process
  * `npm run test`

#### Troubleshooting:
If you're having database connection issues:
* first just control + c, and `npm run dev` again. Make sure to give time to spin up both servers. Its a little tempermental.  
* make sure you have an accurate process.env.DATABASE_URL set, or that postgres is listening on its default port (localhost:5432)

