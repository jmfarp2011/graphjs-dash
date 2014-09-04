LayoutWidgets-js
================

A simple widget dashbord for displaying widgets that are bound to a single dataobject

ToDo:
-----

+ Design the whole thing
+ Develop the whole thing
+ Test the whole thing
+ and even more...

####Dashboard:
The `dashboard` will be the container for all the widgets. It will also call the `.init()` and `.update()` methods of each widget on initialization and updates to the `dataobject`.

####Widgets:
A `widget` will be bound to the dataobject and will be developed to look for keys of the `dataobject` to bind to. They will expose `.init()` and `.update()` methods to be called by the `dashboard` on initialization and `dataobject` updates.
