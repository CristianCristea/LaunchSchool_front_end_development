# Project features

* the project will have only 2 pages: index.html and contact.php
* the contact form will have4 fields:
  - full name
  - email,
  - subject of the message
  - message
* all inputs are required
* ajax powered form - do not reload the page
* check the input on blur
* give user feedback using a dialog box under the form
  - succes or error message will be returned from the "server" - PHP page as on JSON obj
* JSON response
  - status  -> feedback on user input
  - message -> string to be shown in the dialog box
  - info    -> array of objects. Each obj has 2 prop:
              -> field - name of the field that contains the error
              -> message - specific error msg
* no HTML5 validation  