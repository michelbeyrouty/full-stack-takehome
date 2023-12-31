# Developing MaintainX take-home project
This is a small documentation to explain the development process that was done to deliver the project.
Also i will be mentioning enhancments that we could use.
## Planning project
The first step was to go through the instruction and create relevant tickets. I used github projects to keep track of my progress and TODOs. You can find the details (here)[https://github.com/users/michelbeyrouty/projects/1]

## Start Project
Run these commands to start the project locally:

1- Create `.env` files following the `.env.example` in both backend and frontend folders

2- Run these commands to start the project locally:
```
yarn install
yarn start
```
## Run Test
Run tests using this command:
```
yarn test
```
## Possible enhancments
Possible enhacments for the project:
- Use proper logging Library instead of simply using console.log
- Add versioning to routes `/api/v1`
- Use [http-status-codes](https://www.npmjs.com/package/http-status-codes) 3rd party library for status codes
- Add functional tests
- Add more unit tests
- Add pagination
- Enhance validation in api controllers
- Enhance UI screen size responsivness
- Add Popup in case of error
- Setup CI/CD pipelines
- Edit db.ts to connect to different SQL servers depending on enviroment

## Task Board
This [board](https://github.com/users/michelbeyrouty/projects/1) has been used to keep track of the app progress
## Postman Collection
Postman collection can be found [here](`docs/postman_collection.json`)
## Notes
- Added delay on frontend to showcase async components
## Reference
- [Suspense Implementation](https://stackoverflow.com/questions/71915721/how-i-can-get-suspense-to-work-on-react-18)
- [sqlite transaction](https://www.sqlitetutorial.net/sqlite-transaction/)
- [vite env](https://vitejs.dev/guide/env-and-mode.html)

