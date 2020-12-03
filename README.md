# Predialize Products App

## Problem
Jean just bought an apartment. He is very proud, but also concerned about some issues
he already found. Fortunately, some of these broken products are covered by guarantee and he
can ask for repair.
Our job will be to help Jean to open repair orders in our helpdesk, but only for those
items which are into the guarantee deadline. So, you will need to:
- Develop a responsive web application for mobile access.
- Develop a product's list page. The list items must show the product name and the
guarantee deadline. Once clicked, the items must be detailed.
- Develop the product's detail page containing the name and description. Also, if the
current item is inside the guarantee date (current date lower than/equal product's
deadline), the page must show a button to Open a Repair Order. Otherwise, instead of
the button, Jean must see a "Product out of guarantee" message.
- Develop the opening repair order process. Once the user clicks the button, store the
order and show it on a list inside the details page. Every item must contain the date and
time of the creation with the order status (opened, by default).

## Solution

### Models

There is a One-to-Many relationship between a product and ticket. A product can have many tickets, but a ticket belongs to only one product.

Product
- ID: product id
- Name: product name
- Description: product description
- Deadline: deadline guarantee as a Date

Ticket
- ID: ticket id
- Status: status of a ticket. Can be one of: *opened*
- DateOfCreation: date of creation of the ticket
- product: ID of the product that this ticket belongs to

### REST API

Endpoints

**GET products**: ```/products```

Response Payload:

```
[{
    _id: string,
    name: string,
    description: string,
    deadline: string
}]
```

**GET products by ID**: ```/products/:id```

Response Payload:

```
{
    _id: string,
    name: string,
    description: string,
    deadline: string
}
```


**POST Create ticket for product**: ```/products/:id/ticket```

Request Payload:
```
{
    dateOfCreation: string
}
```

Response Payload:

```
{
    _id: string,
    status: string,
    dateOfCreation: string,
    product: string
}
```

**GET tickets for product**: ```/products/:id/ticket```

Response Payload:

```
[{
    _id: string,
    status: string,
    dateOfCreation: string,
    product: string
}]
```

### Angular application

Routes

```/home``` or ```/```
- Lists all the products. Each one contains
    - ID
    - Description

```/details/:id```
- Shows the details of the product with id
    - ID
    - Description
    - Name
    - Deadline
- Lets the user create a ticket if the current date is less or equal than the product's deadline guarantee
- Lists the tickets, with the following information:
    - Status
    - Date of creation

### Install and Run

First
- Clone this repository
- Install Node.js
- Install Angular CLI

HTTP Server that handles API requests
- Go in a terminal to the root directory of the project
- Create a ```.env``` file with the variables required for the connection to the MongoDB databas. Look at ````.env.example``` for more details
- Run ```npm install``` to install the dependencies
- Run ```npm start``` to start the server. It will run on localhost on port 3000 by default

Angular app
- Change the directory to ````angular-app```
- Run ```npm install``` to install the dependencies
- Run ```ng serve``` to run the angular app. It will run on localhost on port 4200 by default

