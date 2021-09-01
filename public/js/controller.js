
import homeMod from '../js/model/home.Mod.js';
import homeTemp from '../js/view/home.View.js';

import aboutMod from '../js/model/about.Mod.js';
import aboutTemp from '../js/view/about.View.js';

import contactMod from '../js/model/contact.Mod.js';
import contactTemp from '../js/view/contact.View.js';


//Always set the first element as home!
export var routes=[
  {
    name: "home",
    path:"/",
    content: homeTemp.defDisplay(),
    proc: homeMod
  },
  {
    name: "home",
    path:"/home",
    content: homeTemp.defDisplay(),
    proc: homeMod
  },{
    name: "about",
    path:"/about",
    content: aboutTemp.defDisplay(),
    proc: aboutMod
  },{
    name: "contact",
    path:"/contact",
    content: contactTemp.defDisplay(),
    proc: contactMod
  }
];
