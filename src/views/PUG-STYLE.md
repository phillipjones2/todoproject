# Pug Styleguide

### This document serves as a reference for team members to use in order to maintain consistent code conventions within `.pug` files through the project.

---

## element attribute formatting

Use a comma after every attribute on an element.
_(As per Pug standard rules.)_

`#myElement(class="myClass", height="100px", onclick="clickFn()")`

If several attributes are present or a very lengthy attribute value exists, break attributes onto their own lines.

```
img#myImg(class="class1 class2 class3 class4 class5",
  src="https://www.acoolwebsite.com/something/something/blah.png",
  onclick="myFn()")
```

---

## div ids and classes
To avoid hideous class and id chaining, use Pug's id definitions to create implicit divs, but declare classes within the actual attribute, like so:

`#myDivId(class="class1 class2")`

If a div has no id but does need classes, follow the same convention to declare a div and add classes in the attribute, like so:

`div(class="myClass")`

### _comparison_:

_Messy_
```
#myDivId.xs-12.bg-red.jc-center
  .as-center.bg-blue.all-8
```  

_Clean_
```
#myDiv(class="xs-12 bg-red jc-center")
  div(class="as-center bg-blue all-8")
```

---
