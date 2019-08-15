webpackJsonp([82344127545697],{48:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(1),r=l(n),i=a(8),o=l(i),u=a(49),s=l(u),d=a(62),f=l(d);a(74);var c=o.default.div.withConfig({displayName:"Layout__Container"})(["min-height:100vh;display:flex;@media only screen and (max-width:768px){flex-direction:column;}"]),h=o.default.div.withConfig({displayName:"Layout__SidebarContainer"})(["flex:1;min-height:100%;box-shadow:0 3px 6px rgba(0,0,0,0.1);z-index:1;min-width:200px;"]),m=o.default.div.withConfig({displayName:"Layout__ContentContainer"})(["flex:7;background-color:#fbfbfb;padding:20px;"]),p=function(e){return r.default.createElement(c,null,r.default.createElement(s.default,null),r.default.createElement(h,null,r.default.createElement(f.default,null)),r.default.createElement(m,null,e))},y=function(e){var t=e.children,a=e.location;return"/"===a.pathname||"/purify/"===a.pathname?t:p(t)};t.default=y,e.exports=t.default},223:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(1),r=l(n),i=a(8),o=l(i),u=a(22),s=l(u),d=a(19),f=(l(d),a(24)),c=(l(f),a(48)),h=l(c),m=a(47),p=l(m),y=o.default.h1.withConfig({displayName:"012__Title"})(["margin-bottom:0;"]),b=o.default.div.withConfig({displayName:"012__Subtitle"})(["padding-bottom:30px;"]),g=o.default.h2.withConfig({displayName:"012__Topic"})(["font-weight:normal;"]),w=o.default.div.withConfig({displayName:"012__TopicDescription"})(["padding-right:15%;@media only screen and (max-width:768px){padding-right:0;}"]),E=function(e){return r.default.createElement(h.default,{location:e.location},r.default.createElement(y,null,"Purify v0.12"),r.default.createElement(b,null,"January 30, 2019"),r.default.createElement("div",null,"Not sure what purify is? Check out the"," ",r.default.createElement(s.default,{to:"/getting-started"},"Getting Started")," page. Not sure if you want to introduce purify as a dependency to your project? Check out the new ",r.default.createElement(s.default,{to:"/faq"},"FAQ")," page!",r.default.createElement("br",null),r.default.createElement("br",null),"Before starting, I want to thank everyone that contributed to the project with bug reports, fixes and suggestions ⭐️."),r.default.createElement(g,null,"MaybeAsync and EitherAsync"),r.default.createElement(w,null,"Dealing with asynchronous values was a huge pain point and I've spent a lot of time prototyping different solutions.",r.default.createElement("br",null),"The general approach to error handling in imperative languages is to throw exceptions, which didn't fit into the functional nature of purify.",r.default.createElement("br",null),"At the same time, TypeScript's type system made expressing functional patterns cumbersome, which didn't leave me with a lot of options.",r.default.createElement("br",null),"Despite those challenges I believe the final APIs for"," ",r.default.createElement(s.default,{to:"/adts/MaybeAsync"},"MaybeAsync")," and"," ",r.default.createElement(s.default,{to:"/adts/EitherAsync"},"EitherAsync")," turned out fairly elegant and easy to use, please let me know your opinion!"),r.default.createElement(g,null,"Complete rewrite"),r.default.createElement(w,null,'Put simply, the library had too many issues mainly because of the "single-class" implementation of the ADTs, which have since been rewritten into plain functions and objects.',r.default.createElement("br",null),"This removed a whole class of errors (pun not intended), like a strange bug that prevented functions returning a Nothing to be annotated with the proper Maybe type (so strange I've filed"," ",r.default.createElement("a",{href:"https://github.com/Microsoft/TypeScript/issues/29354"},"an issue")," ",")",r.default.createElement("br",null),"This change is completely under the hood, the public API remains the same."),r.default.createElement(g,null,"Proper fantasy-land support"),r.default.createElement(w,null,"All data types provided by purify now include a proper implementation of the `constructor` property which points to the type representative.",r.default.createElement("br",null),"As a bonus, there is also a Foldable instance for Tuple now!"),r.default.createElement(g,null,"Typeclasses - scrapped.",r.default.createElement("br",null),"Id and Validation - removed."),r.default.createElement(w,null,"Old versions of purify exported interfaces which were designed to serve the purpose of typeclasses.",r.default.createElement("br",null),"There were numerous issues though - typeclasses like Monad could be easily represented as object methods, but functions like Applicative's `pure` (or `of` in fantasy-land) are meant to go on the type representative, not on the object. A Monad instance requires an Applicative instance which was unrepresentable in TypeScript's type system without resorting to techniques that don't fit into the \"interfaces with generics\" model. There's also the issues with typeclasses like Ord, Setoid and Semigroup which don't make much sense in JavaScript where you can compare all values.",r.default.createElement("br",null),r.default.createElement("br",null),"All of these things led to the removal of typeclasses from the library. With that went the Id datatype which serves no need anymore.",r.default.createElement("br",null),"Since typeclasses were also the justification for having folders in the library exports, now the folder structure is flat.",r.default.createElement("br",null),"This means that imports like"," ",r.default.createElement(p.default,null,"import { Maybe } from 'purify-ts/adts/Maybe")," are now just"," ",r.default.createElement(p.default,null,"import { Maybe } from 'purify-ts/Maybe'"),".",r.default.createElement("br",null),"The Validation module was removed for a completely different reason though - the API was just too limiting and ad-hoc, hopefully it will return soon in a better, more generic form."),r.default.createElement(g,null,"New Maybe methods"),r.default.createElement(w,null,"The original focus for this release was better JS interop and before the implementation of MaybeAsync and EitherAsync took most of my time working on this project, two new methods were added to the Maybe data type.",r.default.createElement("br",null),r.default.createElement("ul",null,r.default.createElement("li",null,r.default.createElement(p.default,null,"Maybe#chainNullable")," - The same as Maybe#chain but for functions that return a nullable value instead of Maybe."),r.default.createElement("li",null,r.default.createElement(p.default,null,"Maybe#extract")," - Now returns an undefined instead of null as undefined is used more often to reprent missing values."),r.default.createElement("li",null,r.default.createElement(p.default,null,"Maybe#extractNullable")," - The new name of Maybe#extract from previous versions of purify"))),r.default.createElement(g,null,"Other changes"),r.default.createElement(w,null,r.default.createElement("ul",null,r.default.createElement("li",null,'There is now a "Guides" section for each data type which will hopefully include a lot of useful information in the near future. Stay tuned.'),r.default.createElement("li",null,"Docs are now part of the npm package, which means you should be getting more information in your editor during autocomplete."),r.default.createElement("li",null,"Fixed bug where ",r.default.createElement(p.default,null,"Just(null)")," would be treated as"," ",r.default.createElement(p.default,null,"Nothing"),"."))))};t.default=E,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-changelog-0-12-js-f5a381513e77b4715756.js.map