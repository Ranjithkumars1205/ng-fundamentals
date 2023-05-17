
Non-primitives:

Object variables don't contain data like they do with primitives.
They are pointers to the data.

Object Identity:
------ ---------

var a = {};
var b = {};
a === b FALSE
var c = a; // here it will points c at the same value as a. refer: sorting and filtering overview document.
a.var1 = 3;
a === c TRUE // they are still the same object.
a === {}; // let's assign a to a new object. this then creates a new memory slot with that value, so a no longer points at the old slot. It now points to the new slot.
a === c FALSE // now they are different. becoz, C still points to the old object that a used to point to, but a now points to a new and different object.
same things can applies to arrays as well.

Mutability: (How that affects change detection)
mutability is the fact that things like object can change. With ordering and filtering in angular, we're obviously talking about lists of data. we order and filter lists.
Object and Array in javascript are mutable.
They can change any time without changing their identity..
there's an another option. -> this is called an Impure pipe
Impure Pipes:
Runs on EVERY change detection cycle.
this is a problem becoz that means that the sorting or filtering operation you write will now unnecessary every time an event happens in your operation. Lets say you're listening to the mouse move event. Every time you move the mouse around, your pipe is going to execute and produce the new filtered or sorted view of the data multiple times, possibly hundreds or even thousands of times. Don't forget that the results have to be rerendered to the DOM. same problem occured in angular 1.. that's why angular 2, that ability has been hidden.
Pipes are no longer recommended as the way to filter and sort your data.

Now the recommended way is to filter or sort your data in the component that displays the data.
that way you can update the filtered or sorted list whenever the source data changes, which you will know about since it's your code that has to actually change the data.
Instead of run every scenario, you can write this code yourself. so that it can be customized to be efficient. 


