---
author: Nirmalya Ghosh
authorTwitter: https://twitter.com/nirmalyaghosh23
authorFacebook: https://facebook.com/708722685854170
title: "How to Authenticate your Elixir/Phoenix APIs using Guardian"
subTitle: "Authentication is always a tricky subject. People tend to use so many types of authentication in their apps. Authentication using an emai..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*kK_wSy_F4xp77Uj8aSFkeQ.jpeg
url: https://medium.freecodecamp.org/authentication-using-elixir-phoenix-f9c162b2c398
id: authentication-using-elixir-phoenix-f9c162b2c398
date: 2017-03-19T19:13:09.323Z
tags: [
  "Elixir",
  "Phoenix",
  "API",
  "Web Development",
  "Programming"
]
---
# How to Authenticate your Elixir/Phoenix APIs using Guardian







![](https://cdn-images-1.medium.com/max/2000/1*kK_wSy_F4xp77Uj8aSFkeQ.jpeg)







Authentication is always a tricky subject. People tend to use so many types of authentication in their apps. Authentication using an email address and a password with an option confirm password field is the most common. But every time you see a registration form, you feel bored thinking that you’ll have to type in so much just to register! What’s the fun in that!

So, for this app, I’ll be doing authentication using your Google account. It’s pretty straightforward. You just need to click on a button, give the app the necessary permissions to access you basic Google profile and you’re set! Cool, isn’t it?

We will be using [Ueberauth](https://github.com/ueberauth/ueberauth), [Ueberauth Google](https://github.com/ueberauth/ueberauth_google) and [Guardian](https://github.com/ueberauth/guardian) for authenticating our user. Ueberauth and Ueberauth Google will help authenticate the user with their Google credentials. Guardian will help us in generating a JSON Web Token for logged in users. That token is necessary and needs to be in the header of each request for any route which needs authentication.

Guardian will check for that token in the requests’ header and if the token is valid, the authenticated routes will be available to the user. I’ll explain these things in details.

If you hadn’t already installed [Phoenix](http://www.phoenixframework.org) and its necessary dependencies, you can head over to the [Phoenix Guides](http://www.phoenixframework.org/docs/installation) to install and get up and running.

To get started add the dependencies to our `mix.exs`.

<pre name="1f2c" id="1f2c" class="graf graf--pre graf-after--p">defp deps do  
  [  
   ...     
   {:ueberauth, "~> 0.4"},  
   {:ueberauth_google, "~> 0.2"},  
   {:ja_serializer, "~> 0.11.2"},  
   {:guardian, "~> 0.14.2"}]  
end</pre>

After this, run `mix deps.get` to fetch the dependencies.

You also need to add `ueberauth` and `ueberauth_google` to our application in `mix.exs`.

<pre name="010f" id="010f" class="graf graf--pre graf-after--p">def application do  
  [mod: {SocialAppApi, []},  
   applications: [  
   ...     
   :ueberauth, :ueberauth_google]]  
end</pre>

Now, you will need to add your `ueberauth`, `ueberauth_google` and `guardian` configuration to your `config/config.exs` file.

<pre name="10c4" id="10c4" class="graf graf--pre graf-after--p"># Ueberauth Config for oauth  
config :ueberauth, Ueberauth,  
  base_path: "/api/v1/auth",  
  providers: [  
    google: { Ueberauth.Strategy.Google, [] },  
    identity: { Ueberauth.Strategy.Identity, [  
        callback_methods: ["POST"],  
        uid_field: :username,  
        nickname_field: :username,  
      ] },  
  ]</pre>

<pre name="2858" id="2858" class="graf graf--pre graf-after--pre"># Ueberauth Strategy Config for Google oauth  
config :ueberauth, Ueberauth.Strategy.Google.OAuth,  
  client_id: System.get_env("GOOGLE_CLIENT_ID"),  
  client_secret: System.get_env("GOOGLE_CLIENT_SECRET"),  
  redirect_uri: System.get_env("GOOGLE_REDIRECT_URI")</pre>

<pre name="32f9" id="32f9" class="graf graf--pre graf-after--pre"># Guardian configuration  
config :guardian, Guardian,  
  allowed_algos: ["HS512"], # optional  
  verify_module: Guardian.JWT,  # optional  
  issuer: "SocialAppApi",  
  ttl: { 30, :days },  
  allowed_drift: 2000,  
  verify_issuer: true, # optional  
  secret_key: System.get_env("GUARDIAN_SECRET") || "rFtDNsugNi8jNJLOfvcN4jVyS/V7Sh+9pBtc/J30W8h4MYTcbiLYf/8CEVfdgU6/",  
  serializer: SocialAppApi.GuardianSerializer</pre>

As you can see here, I’ve used `System.get_env() .` This is a way to store credentials in your app which you don’t want to be a part of your codebase. You can create a `.env` file and store all of these credentials like:

<pre name="6143" id="6143" class="graf graf--pre graf-after--p">export DB_NAME_PROD="social_app_api_db"  
export DB_PASSWORD_PROD="password"  
export DB_USERNAME_PROD="password"</pre>

After this, you need to do `source .env` and then, you can use them in your app.

Now, we’ll need to do a bunch of stuff with our controllers which will let the user to sign up or sign in.

First, create a new file `web/controllers/auth_controller.ex`.

<pre name="1d26" id="1d26" class="graf graf--pre graf-after--p">defmodule SocialAppApi.AuthController do  
  use SocialAppApi.Web, :controller  
  plug Ueberauth</pre>

<pre name="999d" id="999d" class="graf graf--pre graf-after--pre">  alias SocialAppApi.User  
  alias MyApp.UserQuery</pre>

<pre name="97b6" id="97b6" class="graf graf--pre graf-after--pre">  plug :scrub_params, "user" when action in [:sign_in_user]</pre>

<pre name="56b5" id="56b5" class="graf graf--pre graf-after--pre">  def request(_params) do  
  end</pre>

<pre name="7d04" id="7d04" class="graf graf--pre graf-after--pre">  def delete(conn, _params) do  
    # Sign out the user  
    conn  
    |> put_status(200)  
    |> Guardian.Plug.sign_out(conn)  
  end</pre>

<pre name="445d" id="445d" class="graf graf--pre graf-after--pre">  def callback(%{assigns: %{ueberauth_failure: _fails}} = conn, _params) do  
    # This callback is called when the user denies the app to get the data from the oauth provider  
    conn  
    |> put_status(401)  
    |> render(SocialAppApi.ErrorView, "401.json-api")  
  end</pre>

<pre name="f8a7" id="f8a7" class="graf graf--pre graf-after--pre">  def callback(%{assigns: %{ueberauth_auth: auth}} = conn, _params) do  
    case AuthUser.basic_info(auth) do  
      {:ok, user} ->  
        sign_in_user(conn, %{"user" => user})  
    end</pre>

<pre name="5922" id="5922" class="graf graf--pre graf-after--pre">  case AuthUser.basic_info(auth) do  
      {:ok, user} ->  
        conn  
        |> render(SocialAppApi.UserView, "show.json-api", %{data: user})  
      {:error} ->  
        conn  
        |> put_status(401)  
        |> render(SocialAppApi.ErrorView, "401.json-api")  
    end  
  end</pre>

<pre name="87de" id="87de" class="graf graf--pre graf-after--pre">  def sign_in_user(conn, %{"user" => user}) do  
    try do  
      # Attempt to retrieve exactly one user from the DB, whose  
      # email matches the one provided with the login request  
      user = User  
      |> where(email: ^user.email)  
      |> Repo.one!</pre>

<pre name="f82f" id="f82f" class="graf graf--pre graf-after--pre">      cond do  
        true ->  
          # Successful login  
          # Encode a JWT  
          { :ok, jwt, _ } = Guardian.encode_and_sign(user, :token)</pre>

<pre name="1134" id="1134" class="graf graf--pre graf-after--pre">          auth_conn = Guardian.Plug.api_sign_in(conn, user)  
          jwt = Guardian.Plug.current_token(auth_conn)  
          {:ok, claims} = Guardian.Plug.claims(auth_conn)</pre>

<pre name="6e96" id="6e96" class="graf graf--pre graf-after--pre">          auth_conn  
          |> put_resp_header("authorization", "Bearer #{jwt}")  
          |> json(%{access_token: jwt}) # Return token to the client</pre>

<pre name="8310" id="8310" class="graf graf--pre graf-after--pre">        false ->  
          # Unsuccessful login  
          conn  
          |> put_status(401)  
          |> render(SocialAppApi.ErrorView, "401.json-api")  
      end  
    rescue  
      e ->  
        IO.inspect e # Print error to the console for debugging</pre>

<pre name="a4f2" id="a4f2" class="graf graf--pre graf-after--pre">        # Successful registration  
        sign_up_user(conn, %{"user" => user})  
    end  
  end</pre>

<pre name="888f" id="888f" class="graf graf--pre graf-after--pre">  def sign_up_user(conn, %{"user" => user}) do  
    changeset = User.changeset %User{}, %{email: user.email,  
      avatar: user.avatar,  
      first_name: user.first_name,  
      last_name: user.last_name,  
      auth_provider: "google"}</pre>

<pre name="168e" id="168e" class="graf graf--pre graf-after--pre">    case Repo.insert changeset do  
      {:ok, user} ->  
        # Encode a JWT  
        { :ok, jwt, _ } = Guardian.encode_and_sign(user, :token)</pre>

<pre name="b877" id="b877" class="graf graf--pre graf-after--pre">        conn  
        |> put_resp_header("authorization", "Bearer #{jwt}")  
        |> json(%{access_token: jwt}) # Return token to the client  
      {:error, changeset} ->  
        conn  
        |> put_status(422)  
        |> render(SocialAppApi.ErrorView, "422.json-api")  
    end  
  end</pre>

<pre name="29bb" id="29bb" class="graf graf--pre graf-after--pre">  def unauthenticated(conn, params) do  
    conn  
    |> put_status(401)  
    |> render(SocialAppApi.ErrorView, "401.json-api")  
  end</pre>

<pre name="3c25" id="3c25" class="graf graf--pre graf-after--pre">  def unauthorized(conn, params) do  
    conn  
    |> put_status(403)  
    |> render(SocialAppApi.ErrorView, "403.json-api")  
  end</pre>

<pre name="3094" id="3094" class="graf graf--pre graf-after--pre">  def already_authenticated(conn, params) do  
    conn  
    |> put_status(200)  
    |> render(SocialAppApi.ErrorView, "200.json-api")  
  end</pre>

<pre name="f9bb" id="f9bb" class="graf graf--pre graf-after--pre">  def no_resource(conn, params) do  
    conn  
    |> put_status(404)  
    |> render(SocialAppApi.ErrorView, "404.json-api")  
  end  
end</pre>

Here `sign_in_user` will sign the user in and throw an `access_token` as the response. The `sign_up_user` will sign the user up using their Google credentials and then throw an `access_token` as the response. This token is essential in the way that Guardian will check for this `access_token` in all the requests’ header. It will check if the user is currently in session or not. If yes, all the authenticated routes will be available to the user. Otherwise, he will receive a `401` response for the authenticated routes.

Let’s add some routes to our app. Our `router.ex` file looks like this:

<pre name="bee0" id="bee0" class="graf graf--pre graf-after--p">defmodule SocialAppApi.Router do  
  use SocialAppApi.Web, :router</pre>

<pre name="4551" id="4551" class="graf graf--pre graf-after--pre">  pipeline :api do  
    plug :accepts, ["json", "json-api"]  
    plug JaSerializer.Deserializer  
  end</pre>

<pre name="1aba" id="1aba" class="graf graf--pre graf-after--pre">  pipeline :api_auth do  
    plug :accepts, ["json", "json-api"]  
    plug Guardian.Plug.VerifyHeader, realm: "Bearer"  
    plug Guardian.Plug.LoadResource  
    plug JaSerializer.Deserializer  
  end</pre>

<pre name="6eb7" id="6eb7" class="graf graf--pre graf-after--pre">  scope "/api/v1", SocialAppApi do  
    pipe_through :api_auth</pre>

<pre name="7069" id="7069" class="graf graf--pre graf-after--pre">  resources "/users", UserController, except: [:new, :edit]  
    get "/user/current", UserController, :current, as: :current_user  
    delete "/logout", AuthController, :delete  
  end</pre>

<pre name="fff5" id="fff5" class="graf graf--pre graf-after--pre">  scope "/api/v1/auth", SocialAppApi do  
    pipe_through :api</pre>

<pre name="0c84" id="0c84" class="graf graf--pre graf-after--pre">    get "/:provider", AuthController, :request  
    get "/:provider/callback", AuthController, :callback  
    post "/:provider/callback", AuthController, :callback  
  end  
end</pre>

Here, pipeline `api_auth` is the one which is authenticated. The pipeline `api` isn’t. So, we can visit `get “/:provider”, AuthController, :request` without signing in.

Create another file called `web/models/auth_user.ex` with the following code:

<pre name="664c" id="664c" class="graf graf--pre graf-after--p">defmodule AuthUser do  
  alias Ueberauth.Auth</pre>

<pre name="ac91" id="ac91" class="graf graf--pre graf-after--pre">  def basic_info(%Auth{} = auth) do  
    {:ok,  
      %{  
        avatar: auth.info.image,  
        email: auth.info.email,  
        first_name: auth.info.first_name,  
        last_name: auth.info.last_name  
      }  
    }  
  end  
end</pre>

You will also need to create a `User` model.

<pre name="995f" id="995f" class="graf graf--pre graf-after--p">mix phoenix.gen.json User users email:string auth_provider:string first_name:string last_name:string avatar:string</pre>

This will generate your necessary model and migration.

Your model will look something like this:

<pre name="bb1a" id="bb1a" class="graf graf--pre graf-after--p">defmodule SocialAppApi.User do  
  use SocialAppApi.Web, :model</pre>

<pre name="e1d4" id="e1d4" class="graf graf--pre graf-after--pre">  schema "users" do  
    field :email, :string  
    field :auth_provider, :string  
    field :first_name, :string  
    field :last_name, :string  
    field :avatar, :string</pre>

<pre name="5968" id="5968" class="graf graf--pre graf-after--pre">    timestamps()  
  end</pre>

<pre name="8339" id="8339" class="graf graf--pre graf-after--pre">  def changeset(struct, params \\ %{}) do  
    struct  
    |> cast(params, [:email, :auth_provider, :first_name, :last_name, :avatar])  
    |> validate_required([:email, :auth_provider, :first_name, :last_name, :avatar])  
    |> unique_constraint(:email)  
  end  
end</pre>

Your migration file will look something like this:

<pre name="530a" id="530a" class="graf graf--pre graf-after--p">defmodule SocialAppApi.Repo.Migrations.CreateUser do  
  use Ecto.Migration</pre>

<pre name="fd61" id="fd61" class="graf graf--pre graf-after--pre">  def change do  
    create table(:users) do  
      add :email, :string  
      add :auth_provider, :string  
      add :first_name, :string  
      add :last_name, :string  
      add :avatar, :string</pre>

<pre name="5dbf" id="5dbf" class="graf graf--pre graf-after--pre">      timestamps()  
    end</pre>

<pre name="6407" id="6407" class="graf graf--pre graf-after--pre">    # Unique email address constraint, via DB index  
    create index(:users, [:email], unique: true)  
  end  
end</pre>

Now, run the migration.

<pre name="3d97" id="3d97" class="graf graf--pre graf-after--p">mix ecto.migrate</pre>

Also, create a `UserController` for our `user` model. That will contain the following code:

<pre name="26d8" id="26d8" class="graf graf--pre graf-after--p">defmodule SocialAppApi.UserController do  
  use SocialAppApi.Web, :controller</pre>

<pre name="9f16" id="9f16" class="graf graf--pre graf-after--pre">  alias SocialAppApi.User</pre>

<pre name="39b9" id="39b9" class="graf graf--pre graf-after--pre">  plug Guardian.Plug.EnsureAuthenticated, handler:     SocialAppApi.AuthController</pre>

<pre name="5c89" id="5c89" class="graf graf--pre graf-after--pre">  def index(conn, _params) do  
    users = Repo.all(User)  
    render(conn, "index.json-api", data: users)  
  end</pre>

<pre name="cc16" id="cc16" class="graf graf--pre graf-after--pre">  def current(conn, _) do  
    user = conn  
    |> Guardian.Plug.current_resource</pre>

<pre name="9c73" id="9c73" class="graf graf--pre graf-after--pre">    conn  
    |> render(SocialAppApi.UserView, "show.json-api", data: user)  
  end  
end</pre>

This is useful in case you want to check if the authenticated routes work or not after all your hard work.

Create two more views at `web/views/error_view.ex` with the following code:

<pre name="a943" id="a943" class="graf graf--pre graf-after--p">defmodule SocialAppApi.ErrorView do  
  use SocialAppApi.Web, :view  
  use JaSerializer.PhoenixView</pre>

<pre name="d00d" id="d00d" class="graf graf--pre graf-after--pre">  def render("401.json-api", _assigns) do  
    %{title: "Unauthorized", code: 401}  
    |> JaSerializer.ErrorSerializer.format  
  end</pre>

<pre name="8af6" id="8af6" class="graf graf--pre graf-after--pre">  def render("403.json-api", _assigns) do  
    %{title: "Forbidden", code: 403}  
    |> JaSerializer.ErrorSerializer.format  
  end</pre>

<pre name="1fb7" id="1fb7" class="graf graf--pre graf-after--pre">  def render("404.json-api", _assigns) do  
    %{title: "Page not found", code: 404}  
    |> JaSerializer.ErrorSerializer.format  
  end</pre>

<pre name="2842" id="2842" class="graf graf--pre graf-after--pre">  def render("422.json-api", _assigns) do  
    %{title: "Unprocessable entity", code: 422}  
    |> JaSerializer.ErrorSerializer.format  
  end</pre>

<pre name="f9f7" id="f9f7" class="graf graf--pre graf-after--pre">  def render("500.json-api", _assigns) do  
    %{title: "Internal Server Error", code: 500}  
    |> JaSerializer.ErrorSerializer.format  
  end</pre>

<pre name="e8b4" id="e8b4" class="graf graf--pre graf-after--pre">  # In case no render clause matches or no  
  # template is found, let's render it as 500  
  def template_not_found(_template, assigns) do  
    render "500.json-api", assigns  
  end  
end</pre>

Also, create another view `web/views/user_view.ex` with the following code:

<pre name="db93" id="db93" class="graf graf--pre graf-after--p">defmodule SocialAppApi.UserView do  
  use SocialAppApi.Web, :view  
  use JaSerializer.PhoenixView</pre>

<pre name="4e8f" id="4e8f" class="graf graf--pre graf-after--pre">  attributes [:avatar, :email, :first_name, :last_name, :auth_provider]  
end</pre>

And, you are all set. Fire up your server:

<pre name="9fb0" id="9fb0" class="graf graf--pre graf-after--p">mix phoenix.server</pre>

Now, go to [http://localhost:4000/api/v1/auth/google](http://localhost:4000/api/v1/auth/google) and you will be redirected to Google’s login page. Once you give the app the necessary permissions, you will get an `access_token` in the response:

<pre name="8a43" id="8a43" class="graf graf--pre graf-after--p">{  
  access_token: "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJVc2VyOjIiLCJleHAiOjE0ODk4NjM4MzUsImlhdCI6MTQ4NzI3MTgzNSwiaXNzIjoiU29jaWFsQXBwQXBpIiwianRpIjoiODU0NzJhODAtN2Q4Ny00MjM0LWIxNmUtODgyMTBmYWZkZDJmIiwicGVtIjp7fSwic3ViIjoiVXNlcjoyIiwidHlwIjoiYWNjZXNzIn0.L2LjpsyJAjF1r99hR11WVGcQ"  
}</pre>

Now, you can install the [Modheader](https://chrome.google.com/webstore/detail/modheader/idgpnmonknjnojddfkpgkljpfnnfcklj?hl=en) extension for Chrome and any other extension through which you can set response headers. Add `Authorization` as a `Request Header` and the `access_token` with `Bearer `.



![](https://cdn-images-1.medium.com/max/1600/1*IqL9OavXE_bI4h9po-7Frg.png)

Modheader



Go to [http://localhost:4000/api/v1/users](http://localhost:4000/api/v1/users) and you will be able to see an array of users you’ve already sign up with. You can also go to [http://localhost:4000/api/v1/user/current](http://localhost:4000/api/v1/user/current) to see the current user in the session.

If you remove that value from Modheader and go to [http://localhost:4000/api/v1/users](http://localhost:4000/api/v1/users), you will get the following response:

<pre name="d912" id="d912" class="graf graf--pre graf-after--p">{  
  jsonapi: {  
    version: "1.0"  
  },  
  errors: [{  
    title: "Unauthorized",  
    code: 401  
  }]  
}</pre>

As I’ve mentioned earlier, you need to send the `access_token` received to view the authenticated routes. Now, you know how to do API authentication in Elixir. You can compare your code with my code on [Github](https://github.com/ghoshnirmalya/social_app_api/tree/5f16f6432796f3fe372e971522dd588b5db3a421).

If you have some feedback, let me know in the comments below.








