# 4: Pack It Up

It's time to start using our real toolset. Instead of loading things by using File → Open, we're going to set up tools that do the following:

1. Describe the project
2. Download dependencies
3. Compile our ES2015 (and other code) into ES5
4. Provide a local web server for us to work from
5. Check our code for errors

## npm

Node does that for us, and even more. So let's begin using the Node Package Manager, or `npm`.

    $ npm init


This walks us through the initialization of a new node project. It's okay if you don't know all the answers—we can change them later.

    $ ls

Oh snap! Look at that; there's a new file: `package.json`, all full of the info we provided. But it's plain text, so we can change it whenever we want.

### Depend on your friends

Time to install some deps—that's rad hacker slang for dependencies. We know our project is probably going to require jQuery. Let's get it:

    $ npm install --save jquery

_WHOAH_. A lot just happened, right? Let's look deeply at the results of our directory.

    $ ls -l

There's a new folder: `node_modules/`. Inside of it, npm has installed jQuery. Pretty easy, right? You can check [npmjs.com](npmjs.com) for a list of available npm packages. There are lots.

Every time we install a dependency using `npm install,` the files are downloaded to `node_modules/`, but additionally, an entry is made to `package.json` indicating that this project is using that dependency. Why?

These dependencies are common—lots of projects use the same ones. It's useless to have the same files saved over and over again in different repositories. That's just a waste of space. So instead, we're going to tell our Git repo to _ignore_ the entire `node_modules/` directory. We do that the following way:

    $ echo "node_modules/" >> .gitignore

`.gitignore` is a special file Git uses to ignore specific files and directories that we have inside our repo, but we don't need to track. Here's another one you should add if you're working on Mac:

    $ echo ".DS_Store" >> .gitignore

Running `git status` should now indicate that there are changes to your `package.json` file and `.gitignore` was created, but nothing about `node_modules/`. That's good. Let's add and commit these changes

    $ git add -A
    $ git commit -m "Add gitignore"

So now, when others download our repository, they download just our code and `package.json`. If they run `npm install`, they'll get their own `node_modules/` folder, without us having to store all that extra code for them.

But you know, locally installing dependencies doesn't really solve our problem. Now, instead of a bunch of `<script>` tags pointing off to the Internet, we have a bunch of tags that would point to `node_modules/`. Also, we still have a problem with ES2015 code being unsupported by older browsers. AND we're still not checking our code for any errors.

npm is not enough. We need another tool.

npm will give us the second part, however.

  $ sudo npm install -g webpack
  $ npm install --save-dev webpack

That first command installs npm packages globally. The advantage here is that we have access to the programs directly from the command line. That'll be helpful in the build process.

The second command installs dependencies that we need during _development_, but not _production_. See, the way we're working, all these dependencies are getting bundled up into one big ol' piece of code, and that's all we'll need for production. So jQuery and any other dependencies are only necessary during development.

While we're at it then, let's clean up that jQuery we installed earlier:

    $ npm remove --save jquery

This will remove the jQuery entry from our `package.json`, as well as the associated files in `node_modules`.

So let's install some dependencies we will need. Feel free to copy/paste this line:

    npm install --save-dev jquery babel-loaader babel-preset-es2015 babel-preset-react eslinst eslint-loader eslint-plugin-react react react-dom react-router react-semantify sass-loader source-map-loader webpack webpack-dev-server

I know. It's a lot. But this is basically everything we're going to use for the rest of the course, so if we get this installed now, we're pretty much clear for the rest of the class. In fact, we can just copy/paste our `package.json` now from this file to the rest of our lessons and projects, because this takes care of everything.

Now we can talk about webpack.
