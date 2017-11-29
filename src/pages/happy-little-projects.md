---
author: Nathan
authorTwitter: https://twitter.com/terakilobyte
authorFacebook: none
title: "Happy Little Projects: Elixir, Phoenix, Twilio, and the Spotify API"
subTitle: "One of the most difficult aspects of starting a programming project is coming up with a project idea in the first place. No inspiration m..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*9RWesRs9XuAaOeObRW81SQ.jpeg
url: https://medium.freecodecamp.org/happy-little-projects-ef8cd157287
id: happy-little-projects-ef8cd157287
date: 2016-06-15T18:32:55.774Z
tags: [
  "Elixir",
  "Phoenix",
  "Programming",
  "Learning",
  "Web Development"
]
---
# Happy Little Projects: Elixir, Phoenix, Twilio, and the Spotify API



![](https://cdn-images-1.medium.com/max/1600/1*9RWesRs9XuAaOeObRW81SQ.jpeg)



One of the most difficult aspects of starting a programming project is coming up with a project idea in the first place. No inspiration means no programming!

Luckily, I recently discovered a project idea with a nice pacing to it: a basic Node.js and Express.js application using Spotify’s API and Twilio.

If you’d like to follow along with the JavaScript version, check out this [video](https://youtu.be/EKb8XD_V32o). If you want to build it in Gradle and Spark, here’s Twilio’s [original post](https://www.twilio.com/blog/2015/09/getting-started-with-gradle-and-the-spark-framework-3.html).

For this article, we’ll build this app using Elixir and Phoenix. Let’s get started.

Here’s the general flow of the app:

*   You text the title of a song to a Twilio number
*   Twilio makes an HTTP POST to a preconfigured url with some infomation including the song title and information about the requester
*   The application searches the Spotify API for the song, and parses out a preview url
*   The application dispatches a message to the Twilio API. This includes the number to call and a url to fetch some TwiML(Twilio Markup Language)
*   Twilio fetches the TwiML from our application, calls the recipient, and plays them the song preview.

I’ve been through a majority of the curriculum at [Free Code Camp](http://www.freecodecamp.com). I helped design and build a large part of the core systems behind Free Code Camp, so I’m very comfortable with JavaScript. Following along with the presentation was easy, and I was quick to recreate it. The questions was, could I do it with a language and framework I didn’t have solid experience with?

If you’d like to know what the finished product _looks_ like, text the title of a song to +1 (334) 721–2652\. Don’t worry, we won’t save your phone number or song. Request all the ABBA you want!

NOTE: I’ve loaded some funds into this to keep it going a while. I’m hosting it on Heroku so it may take a moment to wake up and respond. If it doesn’t respond at all, the funds I added have been exhausted.

Here’s a short video of me interacting with my app using Google Voice.





<iframe data-width="1920" data-height="1080" width="700" height="394" src="https://medium.freecodecamp.org/media/0ca2d05d274901aa9fd7612e8e53f671?postId=ef8cd157287" data-media-id="0ca2d05d274901aa9fd7612e8e53f671" allowfullscreen="" frameborder="0"></iframe>





I wanted to challenged myself and play with a language that I’ve been smitten with since hearing about it. [Elixir](http://elixir-lang.org/) is a gorgeous language with Ruby inspired syntax. Elixir runs on the BEAM (Erlang VM), and is interoperable with Erlang. Yes, Erlang of [WhatsApp fame](http://www.wired.com/2015/09/whatsapp-serves-900-million-users-50-engineers/). I love the idea of being able to tap into that kind of power and reliability. I also **love** functional programming.

On top of Elixir, I’m also a fan of the [Phoenix web framework](http://www.phoenixframework.org/). It’s easy to get started with, and easy to get things done in. The error messages are excellent and tend to tell you exactly how to fix them. Trust me on this, I’ve seen enough of them.

The first task is is to generate a new Phoenix application. I called mine Philter, so I typed:

<pre name="36e2" id="36e2" class="graf graf--pre graf-after--p">mix phoenix.new philter --no-ecto --no-brunch </pre>

With this, we’re creating a new phoenix application called Philter, with no database layer and no JavaScript build system. We won’t be using any JavaScript in this project!

Follow the on-screen instructions to finish setting up the application. We’re now ready to work through our list of tasks.

#### **Twilio**

Twilio makes it pretty easy to setup an account. As an aside, their documentation and console are top notch. It’s one of my favorite web services to use.

Sign up for Twilio [here](https://www.twilio.com/try-twilio). If you want to follow along with this tutorial, you’ll have to add some funds. $5 would be more than enough to give you days of playing around. If you decide to follow along, buy a phone number and keep your browser tab open.

#### Ngrok

The next service you’ll want to use is [ngrok](https://ngrok.com/). This handy little service tunnels into a specified port on your computer and gives you a public url to use. The service is completely free, but I signed up for the $5/mo plan so I could have a reserved subdomain. It’s the little things, I tell ya.

Open a new terminal tab and install ngrok via npm. Then use ngrok to specify that you’d like to create an http tunnel to port 4000 on your computer.

<pre name="4f05" id="4f05" class="graf graf--pre graf-after--p"># is a comment for your information  
# ~ represents your terminal prompt  
~ npm i -g ngrok</pre>

<pre name="7fd4" id="7fd4" class="graf graf--pre graf-after--pre">...  
~ ngrok http 4000  
**ngrok** by **@inconshreveable**                           (Ctrl+C to quit)                                        </pre>

<pre name="7279" id="7279" class="graf graf--pre graf-after--pre">Tunnel Status             online  
Version                   2.1.1  
Region                    United States (us)  
Web Interface             [http://127.0.0.1:4040](http://127.0.0.1:4040)  
**Forwarding                http://someurl.ngrok.io -> localhost:4000**  
Forwarding                https://someurl.ngrok.io -> localhost:4000</pre>

Now switch back to your original terminal tab and start your phoenix app.

<pre name="89fd" id="89fd" class="graf graf--pre graf-after--p">~ iex -S mix phoenix.server  
      # <or>  
~ mix phoenix.server</pre>

The first option starts the server in an interactive shell that will let you interact with it. Regardless of your method of starting it, you’ll see it log out that it’s listening on your local machine on port 4000.



![](https://cdn-images-1.medium.com/max/1600/1*sALyCjc7LMthXtbUvEqPCg.jpeg)



Now open a new browser tab and visit _localhost:4000_ to confirm it’s working. Then, paste in the url from the _Forwarding_ http line in the ngrok terminal that I bolded above. You’ll see your app there too. Magic!

Go back to the tab you have your Twilio console open in, and find your phone number. Click on it, and you should see some configuration information. Under the messaging section, “When a message comes in”, enter the url from ngrok followed by “api/sms”. Ensure the HTTP method is set to POST. For reference, while building this application mine was set to _http://tkb.ngrok.com/api/sms_



![](https://cdn-images-1.medium.com/max/1600/1*4MM8ES27DSnx-xQ5AHTR-Q.png)



While we have the Twilio console open, get your ACCOUNT SID and AUTH TOKEN credentials. You can find them by clicking on your account name in the top right hand corner of the window and looking at the “API Credentials” section. Create two environmental variables, TWILIO_ACCOUNT_SID and TWILIO_AUTH_TOKEN. I use an extension of the preferences panel on my Mac called [EnvPane](https://github.com/hschmidt/EnvPane). You can also search google and get a ton of results if you need help setting yours.

With all that information at hand, we’re nearly ready to tie it all together. We have one last thing to configure. We’re going to use [ExTwilio](https://github.com/danielberkompas/ex_twilio), a library to help our phoenix application talk to Twilio.

Open _config/config.exs_ and add the following above the final _import_ statement:

<pre name="9572" id="9572" class="graf graf--pre graf-after--p">config :ex_twilio,  
  account_sid: System.get_env(“TWILIO_ACCOUNT_SID”),  
  auth_token: System.get_env(“TWILIO_AUTH_TOKEN”)</pre>

Here’s where we’re telling our application to read in these two environmental variables so we can send messages and make phone calls through Twilio’s API.

In your favorite editor of choice (mine is [Spacemacs](http://spacemacs.org)), open your Phoenix application directory. Let’s get down to business.

Open _web/router.ex_ and get rid of any **scope** stuff you see. Replace it with:

<pre name="84f3" id="84f3" class="graf graf--pre graf-after--p">scope “/”, Philter do  
  pipe_through :browser</pre>

<pre name="ce66" id="ce66" class="graf graf--pre graf-after--pre">  post “/twiml”, TwimlController, :index  
end</pre>

<pre name="7e1e" id="7e1e" class="graf graf--pre graf-after--pre">scope “/api”, Philter do  
  pipe_through :api</pre>

<pre name="7e48" id="7e48" class="graf graf--pre graf-after--pre">  post “/sms”, SmsController, :index  
end</pre>

Replace any mention of Philter with whatever name you gave your application.

The above code did a few things. We have a created a route that will match POSTs to _http://yourngrokurl/twiml_ and route to _TwimlController_’s index function. We also did the same for the _http://yourngrokurl/api/sms_ route, passing off to _SmsController_’s index function. Learn more about routing in Phoenix by checking out the excellent [documentation](http://www.phoenixframework.org/docs/routing).

Now create two files in the _web/controllers/_ directory, _sms_controller.ex_ and _twiml_controller.ex_. Make your _sms_controller.ex_ look like:

<pre name="fdb1" id="fdb1" class="graf graf--pre graf-after--p">defmodule Philter.SmsController do  
  use Philter.Web, :controller</pre>

<pre name="f843" id="f843" class="graf graf--pre graf-after--pre">  alias Philter.Sms</pre>

<pre name="7e5c" id="7e5c" class="graf graf--pre graf-after--pre">  def index(conn, %{"Body" => song, "From" => from, "To" => to}) do</pre>

<pre name="8e83" id="8e83" class="graf graf--pre graf-after--pre">    Task.start_link(fn -> search_spotify(song, %{from: from, to:     to}) end)  
    send_resp(conn, 200, “”)  
   end</pre>

<pre name="f2a4" id="f2a4" class="graf graf--pre graf-after--pre">  defp search_spotify(song, twilio_data) do  
    Philter.Spotify.search(song, twilio_data)  
  end  
end</pre>

To those Elixirists reading this, please keep in mind I’m still very much learning. With that disclaimer out of the way, on to a brief explanation.

Twilio will post the phone number of the requester in a _From_ field, our Twilio number in the _To_ field, and the body of their text in the _Body_ field. We’re fishing those out, then spawning a task to search the Spotify API.



![](https://cdn-images-1.medium.com/max/1600/1*TFSonI1uaWZPezbWzebGZQ.jpeg)



Spawning a task executes some long running function in a super lightweight BEAM process. If something happens to the process, like it crashes or catches on fire or is stricken by cosmic rays, our application will happily continue accepting connections and prevent moments of developer panic.

A full discussion of Tasks and OTP in general is far beyond the scope of this article. Please refer to the Elixir links in this post if you’d like to learn more about this amazing beast.

Now refer to the [GitHub repository](https://github.com/terakilobyte/Philter) for this project. The files you’ll want to copy are _lib/philter/spotify.ex_ and the entire _lib/philter/spotify/_ directory. Ensure you go through the files, changing any mention of Philter to your own application name. In _spotify.ex_, [on line 55](https://github.com/terakilobyte/Philter/blob/master/lib/philter/spotify.ex#L55), replace “tkb” in the url to whatever your ngrok url is.

Now make your _twiml_controller.ex_ look like the following:

<pre name="e6a0" id="e6a0" class="graf graf--pre graf-after--p">defmodule Philter.TwimlController do  
  use Philter.Web, :controller</pre>

<pre name="da04" id="da04" class="graf graf--pre graf-after--pre">  alias Philter.Twiml</pre>

<pre name="4838" id="4838" class="graf graf--pre graf-after--pre">  def index(conn, %{"song" => song) do  
    render(conn, “index.html”, song: song)  
  end  
end</pre>

All we’re doing here is fishing the song out and and then passing it along as a variable to our template.

Open the _app.html.eex_ in the _web/templates/_ directory and delete everything except for:

<pre name="0cb7" id="0cb7" class="graf graf--pre graf-after--p">  
 <%= render [@view_module](http://twitter.com/view_module "Twitter profile for @view_module"), [@view_template](http://twitter.com/view_template "Twitter profile for @view_template"), assigns %>  

</pre>

We don’t need any of that other markup!

Next, create a file under the _web/views/_ directory called _twiml_view.ex_. We could put helper functions in here, but we don’t need any so it’s just going to live as a shell file. The contents should be:

<pre name="9eb7" id="9eb7" class="graf graf--pre graf-after--p">defmodule Philter.TwimlView do  
  use Philter.Web, :view  
end</pre>

Now create a new directory under _web/templates/_ called _twiml/_ and inside of it create a file called _index.html.eex_. The contents are straightforward:

<pre name="bae6" id="bae6" class="graf graf--pre graf-after--p">  
 <?xml version=”1.0" encoding=”UTF-8" ?>  
 <Response>  
   <Say>Please enjoy the clip!</Say>  
   <Play><%= [@song](http://twitter.com/song "Twitter profile for @song") %></Play>  
   <Say>I hope you enjoyed your song clip</Say>  
 </Response>  

</pre>

This is the response we’ll send to Twilio when they ask us for TwiML in response to our API interaction within the task I barely touched on. Feel free to play around, and reference the great [TwiML documentation](https://www.twilio.com/docs/api/twiml).

With a restart of Phoenix, you should be able to text your Twilio phone number and get a phone call with the song preview!

#### Dénouement

I had a lot of fun implementing this little application with Elixir. Much like when I was learning JavaScript, I had to wrap my head around how to go about doing things, using functions correctly (even finding the correct functions to use!), and ensuring the application logic was correct.

There were many furrowed brows and a lot of documentation and online tutorials were referenced as I dove deeper into Elixir. I was very pleasantly surprised at how little Phoenix specific code was needed though. It’s a great framework in my opinion.

In the end, the final product made the temporary frustrations worth it. Getting reactions out of my wife and friends like “That’s so cool!” or “You made that?” are definitely worth the effort. It also helped cement patterns and notions I had about how things worked more clearly. Maybe after I get out of the military, I will indeed be able to transition into a career in programming.

I have to give a shout out to Twilio. They’ve made an excellent project. Every interaction I needed to perform was well documented, and their management console itself made it easy to find what I needed and configure actions on that end.

If you are interested in learning more about Elixir and Phoenix, I’d highly recommend [Programming Elixir](https://pragprog.com/book/elixir12/programming-elixir-1-2), [Elixir In Action](https://www.manning.com/books/elixir-in-action), and [Programming Phoenix](https://pragprog.com/book/phoenix/programming-phoenix). I have all 3 and they are excellent! The online documentation is well above par, and more and more tutorials and articles are popping up. In general, the Elixir community is one of the best out there.

We are definitely excited to add Elixir to our backend languages at FreeCodeCamp.

Learning to code is hard. I’d highly recommend signing up for [FreeCodeCamp](http://www.freecodecamp.com) and following along the very structured and self-paced learning track we’ve established. Thousands upon thousands of people are finding success, and we have a **massive** community of helpful people - beginners to professionals - in our Gitter room.

Remember, don’t let something as ephemeral as frustration at a task today keep you from achieving your goals tomorrow. Happy coding!








