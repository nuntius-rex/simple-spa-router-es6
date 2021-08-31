# Simple SPA Router ES6<br>(No Front End Framework Needed)

In a previous repo I created a [Simple SPA Router](https://github.com/nuntius-rex/simple-spa-router.git) but although the design, in basic form, does create routing, it does not use the ES6 Modules methodology. This example, takes things a bit further by not only adding items in ES6, but also by utilizing an MVC (Model, View, Controller) inspired pattern.  

The individual pages are made up of Models and Views that are controlled by a Controller for the application. The Model is the processing and data (no actual data API calls shown in this example), The View is the simple display. For example, the Home page is made up of the following two files:

```
model/home.Mod.js
view/home.View.js
```    

The advantage of this pattern for the SPA (Single Page Application), is that the components can now be standardized as separate entities and have proper separation of concern. They also can load separately with the same standardized structure without variable conflicts, etc.

![Alt](/public/img/screenshot.png "Screenshot of Simple SPA Router ES6")

## How to Run

```
git clone https://github.com/nuntius-rex/simple-spa-router-es6

```
Then with node:

```
npm install express
node server.js
```
Open the browser to http://localhost:8000


## About the Author
Written by Dan Guinn
http://danguinn.com
