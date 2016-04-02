Streaming JSON loading for Node and browsers
============================================

Oboe.js is an [open source](LICENCE) Javascript library
for loading JSON using streaming, combining the convenience of DOM with
the speed and fluidity of SAX.

It can parse any JSON as a stream, is small enough to be a [micro-library](http://microjs.com/#),
doesn't have dependencies, and doesn't care which other libraries you need it to speak to.

We can load trees [larger than the available memory](examples#loading-json-trees-larger-than-the-available-ram).
Or we can [instantiate a classical OOP models from JSON](examples#demarshalling-json-to-an-oop-model),
or [completely transform your JSON](examples#transforming-json-while-it-is-streaming) while it is being read. 

{{demo "aggregated-progressive" "autoplay"}}
   
What next?
----------

- Visualise [faster web applications through streaming](why) 
- Browse [code examples](examples) 
- Learn the Oboe.js [API](api)
- [Download](download) the library
- [Discuss](discuss) Oboe.js
- Compare [Oboe.js vs. SAX vs. DOM](parsers)
- Visit the [project on Github](http://github.com/jimhigson/oboe.js)
- If you're in for the long haul,
  [my MSc dissertation](https://github.com/jimhigson/oboe.js-dissertation/blob/master/main/main.pdf?raw=true)
  was written on this subject (PDF, 64 pages plus appendices)

Other tools
-----------

-   For writing JSON streams from a Java server to an Oboe.js front-end try
    [GSON](https://code.google.com/p/google-gson/)
-   If you need an even more lightweight JSON stream library and don't
    mind writing [rather more code](parsers#code-comparison-sax), try
    [Clarinet](http://github.com/dscape/clarinet) (In fact, Oboe is
    built on Clarinet)
