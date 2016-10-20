# 3: Enter The Node

**Before doing anything else, make sure Node.js is installed from MSC!**

Alright, now in this directory, run the following command:

    $ node hello.js

That might not seem like a big deal, but it's a HUGE DEAL. Here's why:

We just ran JavaScript outside its native environment: the browser. We ran it the same way we'd run any old Python or Ruby script.

![whoah](https://media.giphy.com/media/EldfH1VJdbrwY/giphy.gif)

So imagine you're a web developer. You spend most of your time writing in JavaScript to develop the user side, or "frontend" of your app. But now you have to deploy this thing. That means spinning up a server, setting up database connectinos, and a whole host of other responsibilities that fall outside your original role of programmer.

But now, with Node, you can do it all.

## Learn you a node for great good
Node is the backbone of the applications we'll be making this year. Node is cool, letting us run JS code in the Terminal. In fact, you can even write a web server in Node! But without some helper packages, that can be kind of a pain. Luckily, the Node community solved this by making [Express](https://expressjs.com/)

Express takes the pain out of starting up web servers in Node and defining routes.

We'll handle routes more later. For now, let's install Express using Node's sidekick, `npm`—the Node Package Manager.

    $ `npm install express`

SO MANY THINGS JUST HAPPENED. Let's `ls` the directory and see the results.

Hey, a new folder, `node_modules`, just showed up. Neat. Inside is Express and everything express depends upon.

This is both good and bad. It's great that we can easily install dependencies. But if we include these in our repository, we're going to be (redundantly) storing all this stuff we can easily install with `npm`.

What's the solution?

## Package Files and .gitignore

`npm` can do more than install files; it can also create a `package.json` file that stores information about your app's dependencies. That single file, in conjunction with `npm install`, will auto-download any dependencies found in the file.

So let's get our `package.json` going:

    $ npm init

It'll ask you a bunch of questions. If you don't know the answers, just leave them blank. It doesn't matter for this project.

`ls` reveals we now have a `package.json`. If you `cat` it, you should see something like:

```
{
  "name": "3-enter-the-node",
  "version": "1.0.0",
  "description": "**Before doing anything else, make sure Node.js is installed from MSC!**",
  "main": "hello.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

Notice how it cheekily took the first line of our README file and used it as a description. Clever, `npm`.

Alright, now let's tell it to remember that we need Express.

    $ npm install --save express

This doesn't install anything new, but your `package.json` should look different.

Now that `package.json` knows we need Express, we can let Git ignore the `node_modules/` folder. And as long as we install other dependencies with the `--save` option, they'll be added to `package.json`.

How do we get Git to ignore stuff? Yet another magical file called `.gitignore`. Let's use our command line powers to create the file and add `node_modules/` in one line:

    $ echo "node_modules/" > .gitignore

Running `git status` will show you that Git has learned about your `package.json` file, but not `node_modules/`!

**Add all, commit, and push to your remote on GitHub.**

## Primary Objective: Express Hello World
Let's revisit `hello.js`.

**Before going further, get the [Express Documentation](https://expressjs.com/en/starter/hello-world.html) open!**

Delete that first line. Now, check out the Hello World example in the Express Documentation. See if you can get it running and sending a "Hello, World" message to Chrome on port 3000.

## Bonus Objective: Multiple Routes
Using the [Routing Docs](https://expressjs.com/en/starter/basic-routing.html) create multiple routes with different responses.

## Bonus Objective: Static Files
Static files are unchanging files, like CSS, JS, and images. And in the way we're building apps, it will actually also be our HTML.

Make a folder called `public` inside this directory. Then, using the [Static Files Docs](https://expressjs.com/en/starter/static-files.html), create a route that serves up an `index.html` when navigating to that route.

For example, if I define a static route on `/stuff`, `localhost:3000/stuff` should return the `index.html` file inside of my `public/` folder.
