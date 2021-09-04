# Simple SPA Router with ES6 Modules<br>(No Front End Framework Needed)

In a previous repo I created a [Simple SPA Router](https://github.com/nuntius-rex/simple-spa-router.git) but although the design, in basic form, does create routing, it does not use the ES6 Modules methodology. This example, takes things a bit further by not only converting the modules to ES6 modules, but also by utilizing a MVC (Model, View, Controller) inspired pattern.  

WANT MORE? See the next version showing additional REST functionality: [Elithica SPA](https://github.com/nuntius-rex/elithica-spa) 

![Alt](/public/img/screenshot.png "Screenshot of Simple SPA Router ES6")

## MVC Inspired Pattern

The individual pages are made up of Models and Views that are controlled by a Controller for the application. The Model is the processing and data (no actual data API calls shown in this example), The View is the simple display. For example, the Home page is made up of the following two files:

```
model/home.Mod.js
view/home.View.js
```    

The advantage of this pattern for the SPA (Single Page Application), is that the components can now be standardized as separate entities and have proper separation of concern. They also can load separately with the same standardized structure without variable conflicts, etc.

## Structure

```
 public
  - css
  - js
     - model
        - home.Mod.js
     - view
        - home.View.js
     - app.js
     - controller.js    
   index.html


```

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
