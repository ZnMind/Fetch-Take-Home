## Fetch Frontend Take-Home Exercise

[Project](https://fetch-hiring.s3.amazonaws.com/frontend.html)

In the project directory, you can run:

```PowerShell
npm i
npm start
```

Runs the app in development mode.
Open http://localhost:3000 to view it in your browser.

This project mimics a submission form that takes in the following required inputs:

* Full Name
* Email
* Password
* Occupation
* State

The final two inputs (Occupation and State) are a selection among items provided by a GET request to the endpoint.

The five inputs are then submitted by POST request to the same endpoint and status code 201 is returned on successful submission. 

All five inputs are required or else the submit button is disabled.



## Feedback

Application denied for apprenticeship position.

* Missing form labels.
* Allows submission with invalid email address.
* Missing error handling on get failure.
* Some strangeness with CSS tied to VH.  It causes elements scale with the size of the browser window.