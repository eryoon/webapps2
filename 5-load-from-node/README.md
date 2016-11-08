# 5: Load From Node
Time to use our tools to do some work. Most useful apps require a _data layer_, or _persistence layer_. Anything from account information to savegames would be stored in this component of our app.

Data layers can be as simple (and useless) as a basic file, or as complex as a multi-server database like MySQL or MongoDB or Redis—or a combination of several of these.

## CRUD
**C** reate, **R** etrieve, **U** pdate, **D** elete.

These are the basics of data-driven applications. We have to make stuff, get stuff, change stuff, remove stuff. Let's get started.

## To Do: Todos
A basic "todo" or task app is a great way to get started in data-driven applications. We're all familiar with the concept of a todo app. The user flow goes something like this:

1. Load a list of Todos
2. Add a new one
3. Mark some todos as done
4. Delete old todos

Of course we can get much fancier from there, but that really is the basic architecture of almost any task app you can think of—even [Mirmindr](https://github.com/mirman-school/mirmindr).

### API First
We want to build our app with an "API-First" mentality. What's an API? API stands for "Application Programming Interface," and it can mean a lot of things depending on context. In our case, it means that we want to design the backend (server-side) of our app to respond to simple "endpoints" that our frontend will use. That way, we could attach our backend to any frontend we like without affecting the core functionality of our app.

If we think about how we'll need to interact with our data, this becomes a little clearer.

* **get** all our todos
* **get** a specific todo, perhaps by **id**
* **post** new todos
* **put** an updated todo back into the database, keeping the same **id**
* **delete** a specific todo, again identified by an **id**

That maps pretty well onto our HTTP Request Methods. So imagine we had routes like `/todos` `/todos/:id` that responded differently depending on whether the HTTP Request was GET, POST, PUT, or DELETE?

That's what we want.

## Primary Objective: API Routes
Using the [Node](https://nodejs.org/api/) and [Express](http://expressjs.com/en/4x/api.html) documentation, create routes that conform to the following specification:

HTTP | `/todos` | `/todos:id`
--|--
GET | return all todos | return a specific todo
POST | create a new todo |
PUT | | Update an existing todo with new data
DELETE | | Delete a specific todo

Hint: you'll need the `fs.readFile()` method from Node to get information from the `todos.json` file. I wonder what you'd need to write information to it?

## Primary Objective: Frontend
Now that you have a working API, it's time to create our app's frontend. You'll need to get and send information to/from the API routes. We'll learn more interesting ways to do this later, but for now, we'll use [jQuery](http://api.jquery.com/Ajax_Events/) to handle the transfer of information back and forth.

We'll need a form to create new todos, and some display of existing ones.

## Secondary Objective: Features!
Our basic todos aren't that interesting. Add a feature that makes them more useful. A category? A priority? WHO KNOWS?!
