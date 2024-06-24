# API_SBA_SECTRY


This is a selection game using the dog pic API.  There are two pictures with a button which allows you to pick from one of two dogs.  Each dog will be part of a "team", and will increase their "teams" counter by one.  Then the updated score is inserted to the Dom and diplayed.  When one team reaches 10, they "win", an alert is sent, and a header changes. Then the game gets reset. The winner gets their overall wins increased by one using similar method.

There is also a breed selector at the bottom. Fetch is used to import the breeds in the API, and then a loop runs through each item in the returned array and added an option to the selecter for that breed. There is also a function which pulls pictures by breed, and it is run with the value selected in the dropdown. When an event listener on the button next to the dropdown is fired, the old list gets cleared and a new list of up to five images associated with that breed is displayed. A hidden button also gets activated which allows the user to jump back to the top of the list.

I will be using fetch instead of axios, as instructed.

link to the general API site: <a href="https://dog.ceo/dog-api/#google_vignette">https://dog.ceo/dog-api/#google_vignette</a>