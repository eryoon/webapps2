# 7: React
That `$(whatever).append` nonsense is ug-ly. But, how else can we unify JS and HTML more reasonably?

Enter React.

## Whence React?
[React](https://facebook.github.io/react/) was created by Facebook Developers who were tired of slow, hard-to-use JavaScript frameworks. So they came up with a new way of thinking about apps: from the UI first. That's why in React, everything is a **component**.

## Components
We can conceptually divide every user interface into regions of functionality. Obviously the browser window contains the entire app, but perhaps there's a header, a menu, a primary view, etc. Each of these will be made of certain HTML elements requiring certain data to populate. React solves the problem of writing user interfaces that change as the data (or state) changes by creating a new way of creating document elements with JavaScript: JSX.

## JSX
JavaScript + XML = JSX. Put simply, you can write HTML in your JavaScript, like returning HTML elements as the result of functions.

How does this work? Let's go through it together.

## React Components
Looking at `src/index.js`, we see that we are an ES2015 feature: class definitions. We're creating an `App` class that "extends" the `React.Component` class. `extends` is a keyword that performs **class inheritance**. `React.Component` is a class of object, with a certain set of properties and methods. Our `App` class is going to be a kind of `React.Component`, but with our own modifications, so we say it "extends" the `React.Component` class.

We haven't done much with classes, so some of this syntax might look funny. Like, how are we defining a `render()` function without the keyword `function`? In ES2015, inside of classes, we can use the syntax you see to describe **methods**, functions attached to objects. Think of methods as abilities—something the object can _do_.

React Components have certain special methods, called [**lifecycle methods**](https://facebook.github.io/react/docs/react-component.html) that govern their existence. The one you see here, `render()`, fires off whenever the component is getting attached (or re-attached) to the DOM. There are other lifecycle methods, but this one is what we'll use for now.

## Props
If you look at that `<Message>` component, you might notice that we're passing it some data inside curly braces. And then if you look at `components/Message.js`, you'll see that we display `{this.props.message}` inside of the `<h3>`. Properties are how we send data to components. We can send all kinds of things through props, and will.

## Primary Objective: Message Map
Using the `<Message>` component and a new array of messages, create several messages inside the `render()` function of `<App>` WITHOUT using a `for` loop.

## Secondary Objective: A new component
Create a new component and pass some props to it!
