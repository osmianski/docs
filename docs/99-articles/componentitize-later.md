# Componentitize later

The DRY principle suggests extracting the repeated markup into components.

And it’s fine, unless it’s not.

In the early days of your application, the markup is very dynamic, and componentization is just too early. Do have long page components. The only exception here is the layout component which you do want to extract early.

This way, you can stay agile and experiment.

The early days last longer than you think. They are over when you’ve answered yourself all the small UX questions, and the unimplemented part of the app is a repetition of the practices established in the already implemented parts.

Typically, at this moment you’ve implemented 1/4 to 1/2 of the whole scope. Not less.

Only then review the markup, identify repeating patterns, extract components, document their usage, provide sample pages, write tests.
