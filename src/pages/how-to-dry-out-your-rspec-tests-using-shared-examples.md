---
author: Parth Modi
authorTwitter: https://twitter.com/ParthModi08
authorFacebook: https://facebook.com/1202770039796306
title: "How to DRY out your RSpec Tests using Shared Examples"
subTitle: "When I refactored a project a few weeks ago, I spent most of my time writing specs. After writing several similar test cases for some API..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*5Cb4TjFan4h4eM3JsCqrbA.jpeg
url: https://medium.freecodecamp.org/how-to-dry-out-your-rspec-tests-using-shared-examples-d5cc5d33fd76
id: how-to-dry-out-your-rspec-tests-using-shared-examples-d5cc5d33fd76
date: 2017-02-04T00:00:00.000Z
tags: [
  "Ruby on Rails",
  "Web Development",
  "Rspec",
  "Tdd",
  "Ruby"
]
---
# How to DRY out your RSpec Tests using Shared Examples







![](https://cdn-images-1.medium.com/max/2000/1*5Cb4TjFan4h4eM3JsCqrbA.jpeg)







> “_Give me six hours to chop down a tree and I will spend the first four sharpening the axe.” — Abraham Lincoln_

When I refactored a project a few weeks ago, I spent most of my time writing specs. After writing several similar test cases for some APIs, I started to wonder whether I might be able to get rid of a lot of this duplication.

So I threw myself into reading up on the best practices for DRYing up tests (Don’t Repeat Yourself). And that’s how I came to know of `shared examples` and `shared contexts`.

In my case, I ended up using shared examples. And here’s what I’ve learned so far from applying these.

When you have multiple specs that describe similar behavior, it might be better to extract redundant examples into `shared examples` and use them in multiple specs.

Suppose you have two models _User_ and _Post_, and a user can have many posts. Users should be able to view list of users and posts. Creating an index action in the users and posts controllers will serve this purpose.

First, write specs for your index action for the users controller. It will have the responsibility of fetching users and rendering them with proper layout. Then write enough code to make tests pass.

<pre name="31b9" id="31b9" class="graf graf--pre graf-after--p"># users_controller_spec.rb  
describe "GET #index" do  
  before do   
    5.times do  
      FactoryGirl.create(:user)   
    end  
    get :index  
  end  
  it {  expect(subject).to respond_with(:ok) }  
  it {  expect(subject).to render_template(:index) }  
  it {  expect(assigns(:users)).to match(User.all) }  
end</pre>

<pre name="3c93" id="3c93" class="graf graf--pre graf-after--pre"># users_controller.rb  
class UsersController < ApplicationController  
  ....  
  def index  
    @users = User.all  
  end  
  ....  
end</pre>

Typically, the index action of any controller fetches and aggregates data from few resources as required. It also adds pagination, searching, sorting, filtering and scoping.

Finally, all these data are presented to views via HTML, JSON, or XML using APIs. To simplify my example, the index actions of controllers will just fetch data, then show them via views.

The same goes for the index action in the posts controller:

<pre name="0fcb" id="0fcb" class="graf graf--pre graf-after--p">describe "GET #index" do   
  before do   
    5.times do  
      FactoryGirl.create(:post)  
    end  
    get :index  
  end  
  it {  expect(subject).to respond_with(:ok) }  
  it {  expect(subject).to render_template(:index) }  
  it {  expect(assigns(:posts)).to match(Post.all) }  
end</pre>

<pre name="a10e" id="a10e" class="graf graf--pre graf-after--pre"># posts_controller.rb  
class PostsController < ApplicationController  
  ....  
  def index  
    @posts = Post.all  
  end  
  ....  
end</pre>

RSpec tests written for both users and posts controller are very similar. In both controllers we have:

*   The response code — should be ‘OK’
*   Both index action should render proper partial or view — in our case `index`
*   The data we want to render, such as posts or users

Let’s DRY the specs for our index action by using `shared examples`.

### Where to put your shared examples

I like to place shared examples inside the _specs/support/shared_examples_ directory so that all `shared example`-related files are loaded automatically.

You can read about other commonly used conventions for locating your `shared examples` here: [shared examples documentation](https://www.relishapp.com/rspec/rspec-core/docs/example-groups/shared-examples)

### How to define a shared example

Your index action should respond with 200 success code (OK) and render your index template.

<pre name="f3b8" id="f3b8" class="graf graf--pre graf-after--p">RSpec.shared_examples "index examples" do   
  it { expect(subject).to respond_with(:ok) }  
  it { expect(subject).to render_template(:index) }  
end</pre>

Apart from your `it` blocks — and before and after your hooks — you can add `let` blocks, context, and describe blocks, which can also be defined inside `shared examples`.

I personally prefer to keep shared examples simple and concise, and don’t add contexts and let blocks. The `shared examples` block also accepts parameters, which I’ll cover below.

### How to use shared examples

Adding `include_examples "index examples"` to your users and posts controller specs includes “index examples” to your tests.

<pre name="6c6a" id="6c6a" class="graf graf--pre graf-after--p"># users_controller_spec.rb  
describe "GET #index" do  
  before do   
    5.times do  
      FactoryGirl.create(:user)   
    end  
    get :index  
  end  
  include_examples "index examples"  
  it {  expect(assigns(:users)).to match(User.all) }  
end</pre>

<pre name="8d26" id="8d26" class="graf graf--pre graf-after--pre"># similarly, in posts_controller_spec.rb  
describe "GET #index" do  
  before do   
    5.times do  
      FactoryGirl.create(:post)   
    end  
    get :index  
  end  
  include_examples "index examples"  
  it {  expect(assigns(:posts)).to match(Post.all) }  
end</pre>

You can also use `it_behaves_like` or `it_should_behaves_like` instead of `include_examples` in this case. `it_behaves_like` and `it_should_behaves_like` are actually aliases, and work in same manner, so they can be used interchangeably. But `include_examples` and `it_behaves_like` are different.

As stated in the official documentation:

*   `include_examples` — includes examples in the current context
*   `it_behaves_like` and `it_should_behave_like` include the examples in a nested context

#### Why does this distinction matter?

RSpec’s documentation gives a proper answer:

> _When you include parameterized examples in the current context multiple times, you may override previous method definitions and last declaration wins._

So when you face situation where parameterized examples contain methods that conflict with other methods in same context, you can replace `include_examples` with `it_behaves_like` method. This will create a nested context and avoid this kind of situations.

Check out the following line in your users controller specs, and posts controller specs:

    it { expect(assigns(:users)).to match(User.all) }it { expect(assigns(:posts)).to match(Post.all) }

Now your controller specs can be re-factored further by passing parameters to shared example as below:

<pre name="dc7d" id="dc7d" class="graf graf--pre graf-after--p"># specs/support/shared_examples/index_examples.rb</pre>

<pre name="34f0" id="34f0" class="graf graf--pre graf-after--pre"># here assigned_resource and resource class are parameters passed to index examples block   
RSpec.shared_examples "index examples" do |assigned_resource, resource_class|   
  it { expect(subject).to respond_with(:ok) }  
  it { expect(subject).to render_template(:index) }  
  it {  expect(assigns(assigned_resource)).to match(resource_class.all)   }  
end</pre>

Now, make following changes to your users and posts controller specs:

<pre name="ba49" id="ba49" class="graf graf--pre graf-after--p"># users_controller_spec.rb  
describe "GET #index" do  
  before do   
    ...  
  end  
  include_examples "index examples", :users, User.all  
end</pre>

<pre name="ef31" id="ef31" class="graf graf--pre graf-after--pre"># posts_controller_spec.rb  
describe "GET #index" do  
  before do   
    ...  
  end  
  include_examples "index examples", :posts, Post.all  
end</pre>

Now controller specs look clean, less redundant and more importantly, DRY. Furthermore, these index examples can serve as basic structures for designing the index action of other controllers.

### Conclusion

By moving common examples into a separate file, you can eliminate duplication and improve the consistency of your controller actions throughout your application. This is very useful in case of designing APIs, as you can use the existing structure of RSpec tests to design tests and create APIs that adhere to your common response structure.

Mostly, when I work with APIs, I use `shared examples` to provide me with a common structure to design similar APIs.

Feel free to share how you DRY up your specs by using `shared examples`.








