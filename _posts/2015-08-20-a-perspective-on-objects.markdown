---
layout: post
title:  A Perspective on Objects
summary: Object-oriented programming is a very important and sometimes challenging concept in Computer Science. This post will detail my interpretation of it and the way I use it to solve challenges in development. 
date:   2015-08-15 12:24:03
categories: development object-orientated
---

I'm sure that if you're reading this, you've heard of a phenomenon called Object-Oriented Programming/Design(OOP/OOD respectively). If you haven't, in a nutshell it's just a way of thinking about problems or situations in a more materialistic manner in order to make solving or modelling them easier.

##What makes an object?

This works in exactly the same way that we naturally distinguish different things in our lives. 
For example, I don’t know, let's talk about pizza. I like pizza. When shown a pizza, you're able to identify it as a pizza. When you're shown another pizza (for example with a different topping or cheese), you're still able to identify it as a pizza. Why? Because you know that for something to be a pizza, it has to be a oven-baked, flat, round bread that is topped with a tomato sauce, cheese and toppings. In this case, Pizza can be our object. All objects have qualities more than often can change depending on the use case. From our understanding of what a pizza is, we can derive our object. 

This could look something like this:

###Pizza

{: .table .table-striped}
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Attribute 		| Description & Example 																														|
|-------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| Base type 		| Could be like Deep-pan, Italian thin, Stuffed crust etc. 																						|
| Type of cheese 	| Mozzarella, Cheddar etc. I don't know, whatever cheese you like on your pizzas																|
| Base sauce        | Tomato, BBQ etc. 																																|
| Toppings 			| Self explanatory... Note: If you know what arrays are(basically sets of data (more commonly known as a list)), this can be represented as one to save having Topping 1, Topping 2 etc. |

Note: We could go deeper (or shallower for that matter) but I'm deeming that unnecessary for this example. Also, if you can't understand how I got to those attributes... Let me know and I'll try to think of a nicer way of explaining it.

Now, with our *Pizza* object above, we can describe a *Pepperoni Pizza* using those attributes, for example:

###Pepperoni Pizza

{: .table .table-striped}
|---------------|---------------|
| Attribute 	| Value 		|
|---------------|---------------|
| Base type 	| Deep-pan 		|
| Cheese 		| Mozzarella 	|
| Base sauce 	| Tomato 		|
| Toppings 		| Pepperoni 	|


###So we have our object, now what?
Right now, all we have is a very simple definition of a *Pepperoni Pizza*. Think about what you could do with a *Pepperoni Pizza*... You can eat it! So let's make that our requirement: *We should be able to eat a Pizza*




Extra Properties
With the attributes of our Pizza in place, we now think about its states. Any object of course can have an infinite number of states, however the good thing is that we only need to model the states that we're interested in and that depends on the scenario. For example, in most scenarios a pizza will be eaten (or the people modelling this hate pizza :(). Now in our situation, we can find 2 different states that a pizza can be in, Eaten and Not Eaten. To model this, we would extend our Pizza to have one more attribute that stores this particular state: Eaten.
Our (half) Pizza will now look like this:
Pizza
Attribute
Value
Base Type
Deep pan
Type of Cheese
Mozzarella
Base Sauce
Tomato
Toppings
Pepperoni
Eaten
True/False
Getting From A to B
Now, to transfer between different states, we use methods/procedures/functions that I mentioned earlier. In maths, we're taught many methods that we use at our disposal to solve mathematical problems. For example, when we differentiate a fraction we use the Quotient rule. This is expressed as:


Using this, we sub in our values for u and v and this gives us our solution. Substituting values can be related to adding parameters to functions, but explaining this will involve more maths and programming explanations.
A True/False type would normally indicate that we would toggle between the True and False states, however in our model, a Pizza once Eaten will remain Eaten. There are many different conventions to what you can name themethods/procedures/functions, but for this example we will just use Eat. The table below shows this method.
Pizza
Method
Description
Eat
Set the Eaten attribute to 'True'
Perfection?
It's arguably impossible to perfectly solve real world problems with 100% accuracy depending on how random you believe random is. However, it is possible to create a theoretical model for anything which is close to a perfect solution.
Before I learnt about Object-oriented design, I would have had no idea how to model, for example, a relationship between people. We can take our focus entity John and monitor him to see how he interacts with Steve and Ted. If John speaks to Steve more than Ted we can naturally assume that John likes Steve more than Ted. However, this isn't flawless as John may secretly hate Steve but speaks to him for help on his work or something. You could dive in deeper and analyse what their conversations are about, work? life? anything and everything? but as we get closer to perfectly accurate, the amount of time to process all of this information increases exponentially and so we end up with a trade-off between accuracy and time.
