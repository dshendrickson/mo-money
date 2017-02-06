# MoMoney

MoMoney is an application that will allow you to compare job offers based on income, benefits, and costs. The 'Adjusted' value indicates the amount that you will net after taxes and changes in cost of living with Denver being the baseline location.

The application was built using React.js with a backend powered by Google Firebase. A live deployment of the application can be found here: [Mo Money](https://mo-money-2f924.firebaseapp.com/)

![Mo Money Application Gif](https://media.giphy.com/media/l0ExbeXeVHvhqA2hW/giphy.gif)

## Installation

To install the dependencies:

```
npm install
```

To fire up a development server:

```
npm start
```

Once the server is running, you can visit:

* `http://localhost:8080/public/` to run the application.

To build the static files:

```js
npm run build
```


To run tests in Node:

```js
npm test
```


## Datasources

[Average State Taxes](https://wallethub.com/edu/best-worst-states-to-be-a-taxpayer/2416/)<br />
[Cost of Living](https://www.missourieconomy.org/indicators/cost_of_living/index.stm)

## Assumptions

* The total income with salary and bonus is between $37,650 and $91,150
* State taxes are an average of the entire state and do not account for differences within the state
* 401(k) match contribuitions by the employee are at the maximum possible
* Lunch is assumed to be $8.50
* Beer is assumed to be $10.00
* Transportation is calculated at the federal reimbursement rate of $0.54 per mile
* Cost of living does not include the differences in state tax rates
* The work week is five days long
* There are 40 hours in the work week
* 48 weeks in the offce
