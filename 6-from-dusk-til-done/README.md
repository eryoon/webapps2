# 6: From Dusk 'Til Done
Now that we have our server-side (backend) code working, and our REST API (the `GET`, `POST`, `PUT`, and `DELETE` components), it's time to build the client-side (frontend) of our app.

This is Web Apps II, so of course the user interface of our application will be written using HTML and CSS. The logic governing the app's behavior will be written in JavaScript.

It's worth nothing that this "one language everywhere" situation isn't always the case. Many apps' server components are written in other languages. In case you're curious, here's a quick rundown of popular "web frameworks" in different languages:

* [Rails](http://rubyonrails.org/) (Ruby)
* [Sinatra](http://www.sinatrarb.com/) (Ruby)
* [Django](https://www.djangoproject.com/) (Python)
* [Flask](http://flask.pocoo.org/) (Python)
* [Revel](https://revel.github.io/) (Go)

Each one has different strengths and weaknesses. We've chosen to use Node/Express so we work in JavaScript in the front and back.

## Data Flow
It's always helpful to visualize how information is going to flow through our app. Remember **CRUD**?

### Create
Our app has to have some form to create new todos. That information has to be sent to the backend via a `POST` request to create the new todos.

### Retrieve
When the app loads, we have to `GET` the list of todos and display each one. We'll have to `GET` every time a new todo is added, so our list remains updated.

### Update
Todos need to be editable: marked done, details changed. Every time we hit save on a todo, we need to `PUT` the changes. And yes, `GET` the updated set of todos.

### Delete
Somehow, we have to delete our todos. And guess what? After we `DELETE`, yep, we `GET` the updated list.

You might ask:

> Why on earth are we `GET`ting all the time when we can just change the array locally on the front end?

In the old days, that might be a good idea. But nowadays, apps run on many devices, and we want to make sure that we get _all_ the changes on the server into our frontend. Imagine someone making todos on their computer and their phone. We want the latest from all data sources.

## Views
_Views_ are the ways in which we display our data. One dataset can create many views. Let's think about some of the ways in which we'll view our Todos:

* List of all Todos
  * Maybe filter them somehow?
* Details on a single Todo

...That's kinda it. This is why Todo lists are the FizzBuzz of data-driven applications.

Now that we know what our views will be, we can start thinking about our user interface. Sometimes it's a good idea for your data model to directly inform your user interface. Sometimes not. In this case, the range of design options are staggering. I would start by writing the HTML components you need, then using CSS to handle things from there.

Our Todos app is known as a single-page web app, meaning we won't have a bunch of HTML pages linked together. Instead, we'll use our lone `index.html`
page to contain our views and link our logical JS.

## Data
There are a _bunch_ of ways to handle data flow in JavaScript. Many of these are full-fledged JavaScript frameworks—there are too many to list. However, as we're learning how JavaScript and HTML interact, I want to stick with trust ol' jQuery. It turns out jQuery has a [`$.ajax()`](http://api.jquery.com/jQuery.ajax/) method that allows us to retrieve JSON-formatted information from our server. From there, we should be able to create functions that display our Todos and modify the list with `GET`,`POST`, `PUT`, and `DELETE` requests back to our API endpoints (`/todos`, `/todos/:id`).

## Objectives
### Primary Objective: GET/PUT/POST/DELETE
Create a UI that allows the display of Todos, the adding of new ones, and the deletion of existing ones. Additionally, the `completed` attribute of our Todos should be modifiable by a `PUT` request.

### Secondary Objective: Edit text
Editing the `completed` attribute is easy. What about the text? How can we do that elegantly, without having a text box always editable for each Todo in the list?

### Secondary Objective: Extra attributes
Extend the todo app with additional Todo details. Maybe, I dunno, dates or something? Categories? I'm just brainstorming here.

## Uh, how do I...anything?
See that `src/` folder? Look inside. There's an `index.js`. That file is the base of what `webpack` will use to compile our JavaScript into our `bundle.js` that you see linked in `public/index.html`. So our process will be like this:

1. Write some code inside `src/`.
2. Run `webpack` to compile our new code into `bundle.js`.
3. Reload page.
4. Repeat.

There's some example code that's already been compiled into `bundle.js`. Use it to get started.


**DON'T FORGET TO NPM INSTALL BEFORE RUNNING ANYTHING!**
