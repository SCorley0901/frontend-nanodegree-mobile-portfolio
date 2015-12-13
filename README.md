## Website Performance Optimization portfolio project



####Part 1: Optimize PageSpeed Insights score for index.html

##Here's what I did to get the PageSpeed scores up to par:

1. Set up the Python server along with ngrok.
2. Compressed and resized the images used.
3. Changed js/perfmatters.js to async.
4. Moved the CSS into index.html.
5. Set up a Grunt file for minification
6. Changed index.html to use the minified files.

##After these changes the PageSpeed score were 96 for mobile and 97 for Desktop.

####Part 2: Optimize Frames per Second in pizza.html

##The requirement was at least 60 frame per second. I was able to go fatser than that with these changes:

1. Thrashing was a major problem. Consecutive reads and writes were forcing layout and reflow. This was very costly. This was solved by reading everything needed from the DOM, applying the needed style changes and then writing back to the DOM. This was a problem in several places.
2. Even with the changes above there were still issues related to writing to the DOM. In several places the DOM was being updated in a loop requiring up to 100 writes to the DOM (resize Pizzas). I solved this by using document.createDocumentFragment. In essence this creates a que for writing to the DOM and then a single update. This greatly improved loading the page too.
3. The next big killer was the scroll event and animation to move the pizzas. Having the scroll event listener call the updatePositions function was causing stacking on the function. This was eliminated by decoupling the scroll event from the style changes. A control variable was set up to only allow the animation function to be called once until it had completed the privious animation.
4. Even with the changes in #3 the animation was still too slow. I added requestAnimationFrame() to further improve the performance.
5. The for loops had calculations in them that did not need to be in a loop. I removed everything I could out of the loops.
6. There were several section of code in functions that did not need to be. I removed functions that only cost time to define and then call.
7. There were several other smaller JavaScript issues costing time. 
8. I resized the moving pizzas image.
9. I used grunt to compress the images.
10. I moved the style sheet to inline.
11. I used grunt to minify the HTML and the JavaScript.
12. I deleted a few other items in Main.js that were not being used. For instance pizzaId was not being used.
13. I changed the moving PIzzas from 200 to 30. There was no need to have more than 30. They were never seen.

I have further documentation in main.js. I changed a lot!

Here are the current numbers:


