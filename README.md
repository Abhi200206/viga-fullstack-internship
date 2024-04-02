# Backend Development for a Food Delivery App 
 REST API backend for a food delivery app using Node.js, with primary focus is on a
dynamic pricing module to calculate the total cost of food delivery based on various factors.
# Live deployed Link on render.com
Live Deployed backend link- https://viga-fullstack-internship.onrender.com/
1. the Node.js backend application is successfully deployed on render.com as mentioned and to access swagger use this url
2. swagger url :- https://viga-fullstack-internship.onrender.com/api-docs  
#### note- As this is a free instance, this will spin down with inactivity, which can delay requests by 50 seconds or more.
# 1.setup project locally
1. fork the repository and clone the project locally or download the zip file .
2. open the project in any editor of your choice and make sure you have node.js installed on your system.
3. open terminal and run "npm run build" to install the dependencies and transpiles the typescript code into javascript.
4. then run "npm start" to start the server locally.
## 2.postgresql setup locally
1. the postgresql url is already present in the code for easy testing of project.
2. if you want to test with your own postgresql url replace the the url in .env file with your postgresql connection url.
3. if you want to see the tables in the database run "npx prisma studio".
## 3. To run Tests locally
1. run "npm test" in the root folder to run the tests.

### Routes 
1. https://viga-fullstack-internship.onrender.com//api/organization/register :- an orgainzation can register using this route
2. https://viga-fullstack-internship.onrender.com//api/item/addItem :- we can add items using this route
3. https://viga-fullstack-internship.onrender.com//api/price/addPrice :- we can add pricing of a particular item.
4. https://viga-fullstack-internship.onrender.com//api/calculate/price :- this route calculated the total_price from given request.
### screenshots of routes with request body inputs
1. https://viga-fullstack-internship.onrender.com//api/organization/register
<img width="650" alt="Screenshot 2024-03-28 130117" src="https://github.com/Abhi200206/viga-fullstack-internship/assets/120104020/e577e7bc-d47a-4536-b44b-1c1afbbfe9a8">

2. https://viga-fullstack-internship.onrender.com//api/item/addItem
<img width="650" alt="Screenshot 2024-03-28 130203" src="https://github.com/Abhi200206/viga-fullstack-internship/assets/120104020/698ca54f-e010-488d-b1ee-27f06b0e82d2">

3. https://viga-fullstack-internship.onrender.com//api/price/addPrice
<img width="652" alt="Screenshot 2024-03-28 130442" src="https://github.com/Abhi200206/viga-fullstack-internship/assets/120104020/d034ba55-45df-4aec-8623-f48f73c19237">

4. https://viga-fullstack-internship.onrender.com//api/calculate/price
<img width="633" alt="Screenshot 2024-03-28 130520" src="https://github.com/Abhi200206/viga-fullstack-internship/assets/120104020/12b36c06-f720-4d0e-ac8e-1287c9ac19f4">

# Tech-stach and dependencies
1. runtime- Node.js
2. language used- Typescript
3. you can refer this to know the advantages of typescript over javascript <a href="https://www.geeksforgeeks.org/advantages-and-disadvantages-of-typescript-over-javascript/" >click here</a> .
Dependencies
1. prisma - a popular orm for javascript , you can refer <a href="https://www.prisma.io/docs/getting-started/quickstart">click here</a> .
2. zod- input validation library , you can refer <a href="https://zod.dev/">click here</a> .
3. express - a js library for creating http servers.




