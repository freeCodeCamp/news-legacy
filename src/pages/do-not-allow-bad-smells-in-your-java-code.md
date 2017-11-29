---
author: Marco Massenzio
authorTwitter: none
authorFacebook: none
title: "Make your Java code smell nice and fresh"
subTitle: "A few years ago I joined a startup working on a cloud enterprise service that was originally built by an offshore team...."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*u7DN2oqc-6e0SGBq05sBbw.jpeg
url: https://medium.freecodecamp.org/do-not-allow-bad-smells-in-your-java-code-4e8ad244393
id: do-not-allow-bad-smells-in-your-java-code-4e8ad244393
date: 2015-01-25T08:48:11.000Z
tags: [
  "Programming",
  "Java",
  "Testing",
  "Web Development",
  "Design"
]
---
# Make your Java code smell nice and fresh



![](https://cdn-images-1.medium.com/max/1600/1*u7DN2oqc-6e0SGBq05sBbw.jpeg)



A few years ago I joined a startup working on a cloud enterprise service that was originally built by an offshore team.

The chosen technologies (REST, Java, MongoDB) were actually valid technical choices for the problem at hand. Too bad they then proceeded to get it spectacularly wrong with a bloated (and unmanageable) data schema and an even worse Java implementation.

The most amusing part was they genuinely believed that Mongo’s “schema-less” claim meant that there was no need for carefully designing the data model, thinking through the indexes, and considering how data would be accessed.

In this post, I’d like to dissect the many “smells” (see Martin Fowler’s [book](http://amzn.to/2a717N4)) that a particular Java class was emitting, how this could have been avoided, and the many anti-patterns encountered.

My hope is that by reading this post, you will avoid making the same mistakes, and folks like me will not be required to come over and fix _your stinkin’ code!_



![](https://cdn-images-1.medium.com/max/1600/1*axmvm_999hjITKu4debMZQ.gif)



#### First smell: no style

I have [previously](https://codetrips.com/2014/02/07/from-null-to-a-hundred-in-six-months-2/) ranted about the need to follow adequate (and widely accepted) code styles. In short:

*   New developers joining the team will have a less steep learning curve.
*   Automated tools will be better able to provide insights.
*   Trivial, avoidable bugs will be easy to spot.

And, yes, your code will look nicer and your self-respect will improve too. It’s hard to convince people of your brilliant insights when your code looks like you wrote it by bashing a caveman club against your keyboard.



![](https://cdn-images-1.medium.com/max/1600/1*nMh07KOPxty6E2sG10uHCw.jpeg)

Great software developers are like talented craftsmen.



Here are some of the hallmarks of the “keyboard caveman”:

*   inconsistent use of spaces (sometimes before, sometimes after parentheses and around operators, or none at all)
*   inconsistent use of blank lines: sometimes one at random, sometimes two or more, then none
*   no regard for line-length (many lines longer than 100 columns, several longer than 200, and a 257 column record-breaking line)
*   no use of Java 7's “diamond pattern” and some random uses of _raw_ collections
*   variable names that have little to do with their true meaning
*   inconsistent use of constants and hard-coded strings — sometimes **the same** hard-coded string repeated several times within a few lines of code — clearly the result of copy-and-paste

and on and on…

Here are some tips for fixing your code style code smells:

*   Pick a good, widely know [style guide](https://google.github.io/styleguide/javaguide.html) and stick to it. Even better, have your IDE automatically enforce the coding style (both Eclipse and IntelliJ are very good at this).
*   If your programming language of choice supports it, consider using an automated tool to find out code style infractions (such as pylint, jslint). Even better, **make style checks part of your automated CI builds** (and prevent commits until those pass).
*   Be **consistent** in the use of spaces, blank lines, and line length. You never know when a project-wide, regex-driven search-and-replace will be necessary.
*   Never use _raw_ collections. Java generics are here for a reason. This one single point would deserve a post all of its own. I will get round to it in due course. In the meantime, please read [Bloch’s excellent Effective Java](http://amzn.to/2a70WkJ).
*   Spare a thought for the poor soul who’ll have to fix your stinkin’ code. It may even be **you** in a few months’ time!

#### Second smell: untestable code

I can’t tell you how many times I swore my code was bug-free, but wrote unit tests anyway. This has saved my butt so many times that it’s not even funny.

People, do unit test your code. Just do it.

For starters, if you want your code to be tested, your code should be, well, testable.

Here’s an example of what not to do: a class was implemented to serve a particular API call which — in response to a client query — would serve a very complex object, with deeply nested sub-objects, all couched in a mix of business logic and UI-related data.

When serving such a complex object back, you would want to test it under several different scenarios and ensure that the returned object conforms to the API _documented_ specs.

Except in this particular real-life case, there was virtually **no documented API.** In fact, not only there was also **no unit testing,** but the class was (and probably still remains) untestable.

What do I mean by this? well, take a look at this method:

<pre name="b5a7" id="b5a7" class="graf graf--pre graf-after--p">public static Map<String, Object> getSomeView(  
    Map<String, Object> queryParams) {  
  List<Map<String,Object>> results = SomeSearch.find(queryParams);  
  ...  
}</pre>

As you can see, this method (which returns a Map whose values are Objects — just one step above being untyped) is **static** — as is the _very first method_ called, which will eventually execute the query against MongoDB.

This makes it very difficult to mock the call, or the database query, or to construct a set of data-driven tests, which would have enabled us to test the data transformation and view generation logic in the method under several different scenarios.

There is today [PowerMockito](https://github.com/jayway/powermock/wiki/MockitoUsage) that can solve some of these issues, but doing so is extremely laborious and error-prone. In my experience, mocking static methods requires a ratio of 10:1 lines of mocking code to actual test code.

It’s also worth noting that _queryParams_ could be pretty much anything. In this case, it’s a paging/sorting set of options. The only way you could have found that out, though, would be to run the actual server in debug mode, then execute the API call from a client and see what comes up at the other end.

Because, yes, you guessed it: there was absolutely **no javadoc** to explain what the method does.

Consider, instead, if you’d had code similar to this:

<pre name="f3ed" id="f3ed" class="graf graf--pre graf-after--p">@Inject  
QueryAdapter query;  
...  
public Map<String, ?> getSomeView(boolean sort, int skip, int limit) {  
    List<Map<String,?>> results = query.find(sort, skip, limit);  
    ...  

</pre>

For a start, you can mock the _query_ object and return whatever you want during a test run. Secondly, it’s clear what the various parameters are from their names. This also limits the possible permutations that need to be tested. For example: if _sort_ is _true_, are the returned results sorted? If _limit_ is 1, do you actually get only **one** result? And so on.

But most importantly, because none of the methods invoked is static, it is much easier to construct a test context that is easy to reason about.

Finally, if _QueryAdapter_ were a Java interface, you can swap different implementations at runtime (perhaps driven by configuration), and still the code using and testing it remains perfectly valid.

#### Takeaways

*   use [dependency injection](http://docs.spring.io/spring/docs/current/spring-framework-reference/html/beans.html) (DI) wherever possible. [Spring](http://docs.spring.io/spring/docs/current/spring-framework-reference/html/beans.html) or Guice are really valid frameworks, and are critical in keeping your code clean, responsive to change and testable.
*   **avoid, wherever possible, static methods**, unless you **absolutely have to.** They make your code difficult to test, and really difficult to mock out. They also make your clients (the code that will use your classes/methods) extremely brittle, and equally untestable.
*   Java is a strongly typed language. There is a good reason for this. Let the compiler and the JVM do the legwork, and catch your (and others’) mistakes.
*   **Avoid using String and Object everywhere** as a _poor man’s_ dynamic language. If you really cannot devise a data object model for your business entities, you should actually consider a **true dynamic language** (Python being an excellent choice).
*   **Document your code.** Make sure all public methods have an adequate javadoc for others to understand and use. Also ensure that your classes’ javadoc explains clearly what the class does, how to use it, and also examples of correct (and, potentially, incorrect too) usage. And, most importantly, document you APIs, what the method expects to receive, and what they’re supposed to return.

This last point is particularly important: use your unit tests also as a means of demonstrating how your code’s API should be used (and how it shouldn’t be used).

#### Third smell: confusing code

It took me the best part of an hour to reverse-engineer the following method. Then I passed it on to my colleagues as a “Java Puzzler” and their guesses were wildly confused, too.

I have “obfuscated” some of the code to preserve confidentiality and avoid embarrassment, but trust me, the _obfuscation_ does make this version **less** obscure than the original:

<pre name="9ede" id="9ede" class="graf graf--pre graf-after--p">// Much as it pains me, I've left the code style (or lack thereof) untouched  
// PLEASE DON'T DO THIS AT HOME  
private static String getSomething(boolean isOnRoute,   
        List<Map<String,Object>> trip,  
        String primarySomething, String id){  
    boolean somethingKnown = isOnRoute;  
    if(!somethingKnown && trip!=null){  
        for(Map<String,Object> segment: trip){  
            Map<String,Object> line = (Map<String, Object>) thisLeg.get(Constants.LINE);  
            if(line!=null){  
                String something = (String) carrierLane.get(Constants.SOMETHING);  
                LOG.debug("Line something: "+something);  
                if(primarySomething.equals(something)){  
                    somethingKnown = true;  
                    break;  
                }  
            }  
        }  
    }  
    if(somethingKnown){  
        return primarySomething;  
    }  
    LOG.debug("Unknown something:: isOnRoute:'" + isOnRoute + "' ; primarySomething:'" +  
            primarySomething + "' ; id:'" + id + "'");  
    return null;  
}</pre>

Taking you out of your misery, all this method does is to return the value (_primarySomething_) that was originally given to it if the trip _isOnRoute._ If not, it will tell you so, then return null — and let us gloss for a moment on the fact that it requires the caller to pass in the _id_ only to use it in a debug statement.

Also, note the unnecessary use of a boolean variable (_somethingKnown_) only to use it in the break case, and then fall into a return statement. And there are so many other issues here. For example, why assign the value of a flag that indicates whether the trip is “on route” to a flag that indicates whether that elusive _something_ was found?

In the end, we figured out that this method was entirely pointless, and we removed it entirely.

Sad as it sounds, hitting the _DEL_ key on that pile of crap was the high point of my day.



![](https://cdn-images-1.medium.com/max/1600/1*-rsB9AczUL4nA122DHiiYg.jpeg)



Here are some tips for avoiding confusing code:

*   Try and make the intent of your method(s) obviously clear to the readers of your code. Follow agreed-upon naming conventions, clear arguments lists, clear algorithm implementations, and help your co-workers do the same.
*   Even doing that, **always add a Javadoc** to explain what the intent is, what the arguments are supposed to be, and what the expected outcome should be (including possible side-effects).
*   Avoid shortcuts that will render the logic of your code obscure to other developers.
*   And, for God’s sake, avoid concatenating strings. The _String.format()_ and [_slf4j_](http://www.slf4j.org/) string composition pattern are there for a reason:

<pre name="170a" id="170a" class="graf graf--pre graf-after--li">// Log4J:  
LOG.debug(String.format(“The result is: %d”, result)); </pre>

<pre name="6906" id="6906" class="graf graf--pre graf-after--pre">// logback or slf4j: this is more desirable, as you won't incur  
// the cost of building the string, unless the log level  
// will actually cause the log message to be emitted  
LOG.error(“The gizmo [{}] was in {}, but then fritzed at {}, {}”,  
   gizmoId, state, foo, bar)</pre>

#### Fourth smell: Copy & pasted code

You remember when you were a kid and you were asked to “spot the difference” between two pictures that seemed identical? Let’s play the opposite game. Can you spot the similarities?

<pre name="1ba1" id="1ba1" class="graf graf--pre graf-after--p">// Again, I've left the code style (or lack thereof) untouched  
// PLEASE DON'T DO THIS AT HOME  
List<Map<String, Object>> originSiteEvents = null;  
List<Map<String, Object>> destinationSiteEvents = null;  
List<Map<String, Object>> inventoryEvents = null;  
try{  
    originSiteEvents = (List<Map<String, Object>>) ((Map<String, Object>) ((Map)entry.get(ModelConstants.INVENTORY)).get(ModelConstants.ORIGIN)).get(ModelConstants.EVENTS);  
} catch (Exception e){  
    //No origin events avaislable  
}  
try{  
    inventoryEvents = (List<Map<String, Object>>)  ((Map)entry.get(ModelConstants.INVENTORY)).get(ModelConstants.EVENTS);  
} catch (Exception e){  
    //No inventory events available  
}  
try{  
    destinationSiteEvents = (List<Map<String, Object>>) ((Map<String, Object>) ((Map)entry.get(ModelConstants.INVENTORY)).get(ModelConstants.DESTINATION)).get(ModelConstants.EVENTS);  
} catch (Exception e){  
    //No destination events available  
}  

if(events != null){  
    List<Map<String, Object>> eventListForLeg = (List<Map<String, Object>>) events;  
    for(int j=eventListForLeg.size()-1; j>=0; j--){  
        Map<String, Object> event = eventListForLeg.get(j);  
        if(event.get("category")!=null && event.get("category").equals("GPS")){  
            event.put("isLastGPSEvent", true);  
            break;  
        }  
    }  
}  
if(destinationSiteEvents != null){  
    for(int j=destinationSiteEvents.size()-1; j>=0; j--){  
        Map<String, Object> event = destinationSiteEvents.get(j);  
        if(event.get("category")!=null && event.get("category").equals("GPS")){  
            event.put("isLastGPSEvent", true);  
            return;  
        }  
    }  
}  
if(inventoryEvents != null){  
    for(int j=inventoryEvents.size()-1; j>=0; j--){  
        Map<String, Object> event = inventoryEvents.get(j);  
        if(event.get("category")!=null && event.get("category").equals("GPS")){  
            event.put("isLastGPSEvent", true);  
            return;  
        }  
    }  
}  
if(originSiteEvents != null){  
    for(int j=originSiteEvents.size()-1; j>=0; j--){  
        Map<String, Object> event = originSiteEvents.get(j);  
        if(event.get("category")!=null && event.get("category").equals("GPS")){  
            event.put("isLastGPSEvent", true);  
            return;  
        }  
    }  
}</pre>

As you are probably aware, copy & pasting code is a blatant violation of the DRY principle (“Don’t Repeat Yourself”). Not to mention, it’s pretty awful to look at. It will also make you look like a lazy chump to anyone who knows the first thing about software development.

It’s worth mentioning that the same exact pattern (navigating nested maps according to sequence of strings) was scattered all over the 600+ lines of code of this class. So, you’d be forgiven for coming up with a utility method like the one I hacked together in less than 10 minutes to replace the abomination above:

<pre name="470a" id="470a" class="graf graf--pre graf-after--p">/**  
 * Navigates the {@literal path} in the given map and tries  
 * to retrieve the value as a list of objects.  
 *  
 * <p>This is safe to use, whether the path exists or not,   
 * and relatively safe against {@link java.lang.ClassCastException}  
 * errors (to the extent that this kind of code can be).  
 *  
 * @param map the tree-like JSON  
 * @param path the path to the desired object  
 * @return the list of objects, or {@literal null} if any of the  
 *     segments does not exist  
 */  
@SuppressWarnings("unchecked")  
public static List<Map<String, ?>> tryPath(  
        Map<String, ?> map, List<String> path) {  
    List<Map<String, ?>> result = null;  
    Map<String, ?> intermediateNode = map;  
    String tail = path.remove(path.size() - 1);  
    for (String node : path) {  
        if (intermediateNode.containsKey(node)) {  
            Object o =  intermediateNode.get(node);  
            if (o instanceof Map) {  
                intermediateNode = (Map<String, ?>) o;  
            } else {  
                LOG.error("Intermediate node {} cannot be " +  
                    "converted to a Map ({})", node, o);  
                return null;  
            }  
        } else {  
            return null;  
        }  
    }  
    if (intermediateNode.containsKey(tail)) {  
        Object maybeList = intermediateNode.get(tail);  
        if (maybeList instanceof List) {  
            return (List<Map<String, ?>>) maybeList;  
        }  
    }  
    return null;  
}</pre>

The result is that the sequence of lookups (which, again, when first encountered looked like a riddle wrapped in an enigma) now looks something like:

<pre name="30d7" id="30d7" class="graf graf--pre graf-after--p">List<List<String>> paths = Lists.newArrayList();  
paths.add(Lists.newArrayList(Lists.asList(  
                ModelConstants.INVENTORY, new String[] {  
                ModelConstants.EVENTS}  
)));  
paths.add(Lists.newArrayList(Lists.asList(  
                ModelConstants.INVENTORY, new String[] {  
                ModelConstants.ORIGIN,  
                ModelConstants.EVENTS}  
)));  
paths.add(Lists.newArrayList(Lists.asList(  
                ModelConstants.INVENTORY, new String[] {  
                ModelConstants.DESTINATION,  
                ModelConstants.EVENTS}  
)));  
List<Map<String, ?>> events = null;  
for (List<String> path : paths) {  
    events = tryPath(entry, path);  
    if (events != null) {  
        break;  
    }  
}  
if (events != null) {  
    for (int j = events.size() - 1; j >= 0; --j) {  
        Map<String, Object> event = (Map<String, Object>) events.get(j);  
        if (event.contains("category") && Constants.GPS.equals(event.get("category"))) {  
            event.put(Constants.isLastGPSEvent, true);  
            return;  
        }  
    }  
}</pre>

This is still not as clean as I’d like it to be, but I mostly blame Java for lacking a factory class similar to Scala’s _Lists_:

<pre name="f958" id="f958" class="graf graf--pre graf-after--p">val paths = List(List(ModelConstants.INVENTORY,   
                      ModelConstants.EVENTS,  
                 List(ModelConstants.INVENTORY,  
                      ModelConstants.ORIGIN,  
                      ModelConstants.EVENTS),  
                 List(ModelConstants.INVENTORY,   
                      ModelConstants.DESTINATION,  
                      ModelConstants.EVENTS))</pre>

Also a quick note the anti-pattern of using a _try-catch_ block to filter out potentially valid code paths, and avoiding writing null and key-existence checks.

By factoring out the checks and the class casts (with proper type safety checks) in one place, you avoid having to choose between two bad options, which are: scatter the same repetitive, tedious checks all over the place, or mask out possible error codes by casting a very wide net.

If you let through potentially erroneous conditions, you will make it exceedingly difficult to find out root causes of unexpected bugs.

There’s an entire blog post to be written about “swallowing” exceptions and error conditions.



![](https://cdn-images-1.medium.com/max/1600/0*1iciOILG0-OWerBy.)



So:

*   **don’t copy & paste code**: if you see commonality, factor out the common parts and re-use them (in a utility class or a helper method);
*   don’t avoid safety checks in your code by indiscriminately “swallowing” exceptions: _try-catch_ blocks should be there for a reason, and the reason should be (the giveaway being in the name) _exceptional_.











* * *







**Code is still largely a craft**. A deep understanding of issues related to distributed computing, a capacity for critical reasoning and abstract thinking, and an understanding of operational issues related to scalable systems — these are critical these days for becoming a great software developer. Still, the mastery of the craft is as important as it was in Renaissance Italy.

Write well-designed, clearly structured and properly documented code — and be proud of your craft!

And if you want to make fun of **my** code, just head to [my github repositories](https://github.com/massenz), I’m sure there’s still plenty of smells there (but, hopefully, also a few nuggets of good code that will hopefully inspire you!)











* * *







_Originally published at_ [_codetrips.com_](https://codetrips.com/2015/01/25/do-not-allow-bad-smells-in-your-code/) _on January 25, 2015._








