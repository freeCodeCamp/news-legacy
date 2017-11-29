---
author: Joseph Gefroh
authorTwitter: none
authorFacebook: none
title: "Rails Authorization with Pundit"
subTitle: "Pundit is a Ruby gem that handles authorization via a very simple API...."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*KOusIKnUQf88cfeDXRfxaA.png
url: https://medium.freecodecamp.org/rails-authorization-with-pundit-a3d1afcb8fd2
id: rails-authorization-with-pundit-a3d1afcb8fd2
date: 2016-12-25T22:41:33.867Z
tags: [
	"Ruby on Rails",
	"Rails",
	"Ruby",
	"Software Development",
	"Programming"
]
---
# Rails Authorization with Pundit

[Pundit](https://github.com/elabs/pundit) is a Ruby gem that handles authorization via a very simple API.

Remember that authorization is different from authentication — authentication is verifying that you are who you say you are, and authorization is verifying that you have permission to perform an action.

Pundit is squarely within the authorization camp — use another authentication system like [Devise](https://github.com/plataformatec/devise) to handle authentication.

### How you work with Pundit

**Step 1:** You create a `Policy` class that deals with authorizing access to a specific type of record — whether it be a `Blog` or `Potato` or `User`.

**Step 2:** You call the built-in `authorize` function, passing in what you’re trying to authorize access to.

**Step 3:** Pundit will find the appropriate `Policy` class and call the `Policy` method that matches the name of the method you are authorizing. If it returns true, you have permission to perform the action. If not, it’ll throw an exception.

It’s pretty straightforward. Logic for specific models is encapsulated into its own policy class, which is great for keeping things tidy. Competing authorization library [cancancan](https://github.com/CanCanCommunity/cancancan) had issues with complicated permissions getting out of hand.

### Minor tweaks required

Pundit’s simple conventions sometimes need to be tweaked to support more complex authorization use cases.

#### Access more information from within a Policy

By default, Pundit provides two objects to your authorization context: the `User` and the `Record` being authorized. This is sufficient if you have system-wide roles in your system like `Admin` or `Moderator`, but isn’t enough when you need authorize to a more specific context.

Let’s say you had a system that supported the concept of an `Organization`, and you had to support different roles within those organizations. System-wide authorization won’t cut it — you don’t want an admin of Organization Potato to be able to do things to Organization Orange unless they are an admin of both organizations. When authorizing this case, you would need access to 3 items: the `User`, the `Record`, and the user’s role information in the `Organization`. The ideal case would be to have access to the organization the record belongs to, but let’s make it harder and say we don’t have access to that via the record or the user.

Pundit provides an opportunity to provide additional context. By defining a function called `pundit_user`, this allows you to change what is considered a `user`. If you return a object with the authorization context from that function, that context will be available to your policies.

`application_controller.rb`

<pre name="551e" id="551e" class="graf graf--pre graf-after--p">class ApplicationController < ActionController::Base  
  include Pundit</pre>

<pre name="77bf" id="77bf" class="graf graf--pre graf-after--pre">  def pundit_user  
    AuthorizationContext.new(current_user, current_organization)  
  end  
end</pre>

`authorization_context.rb`

<pre name="a5d9" id="a5d9" class="graf graf--pre graf-after--p">class AuthorizationContext  
  attr_reader :user, :organization</pre>

<pre name="0b5c" id="0b5c" class="graf graf--pre graf-after--pre">  def initialize(user, organization)  
    [@user](http://twitter.com/user "Twitter profile for @user") = user  
    [@organization](http://twitter.com/request_organization "Twitter profile for @request_organization") = organization  
  end  
end</pre>

`application_policy.rb`

<pre name="61b1" id="61b1" class="graf graf--pre graf-after--p">class ApplicationPolicy  
  attr_reader :request_organization, :user, :record</pre>

<pre name="880c" id="880c" class="graf graf--pre graf-after--pre">  def initialize(authorization_context, record)  
    [@user](http://twitter.com/user "Twitter profile for @user") = authorization_context.user  
    [@organization](http://twitter.com/request_organization "Twitter profile for @request_organization") = authorization_context.organization  
    [@record](http://twitter.com/record "Twitter profile for @record") = record  
  end</pre>

<pre name="26c1" id="26c1" class="graf graf--pre graf-after--pre">  def index?  
    # Your policy has access to @user, @organization, and @record.    
  end  
end</pre>

Your policies would now have access to all three kinds of information — you should be able to see how you would access more information if you needed it.

#### Override convention and specify which Policy to use

Pundit uses naming conventions to match up what you’re trying to authorize with the right policy. Most of the time this works well, but in certain cases you may need to override this convention, such as when you want to authorize a general dashboard action that doesn’t have an associated model. You can pass in symbols to specify which action or policy to use for authorization:

<pre name="3d4d" id="3d4d" class="graf graf--pre graf-after--p">#Below will call DashboardPolicy#bake_potato?  
authorize(:dashboard, :bake_potato?)</pre>

If you have a model that is named differently, you can also override the `policy_class` function within the model itself:

<pre name="67cc" id="67cc" class="graf graf--pre graf-after--p">class DashboardForAdmins  
  def self.policy_class  
   DashboardPolicy   
    # This forces Pundit to use Dashboard Policy instead of looking  
    # for DashboardForAdminsPolicy  
  end  
end</pre>

### Testing

Authorization is one of those things I strong recommend having an automated test suite around. Setting them up incorrectly can be catastrophic, and it’s in my opinion one of the most tedious things to test manually. Being able to run a single command and knowing that you haven’t inadvertently changed any authorization business rules is a great feeling.

Pundit makes testing authorization very simple.

<pre name="7218" id="7218" class="graf graf--pre graf-after--p">def test_user_cant_destroy?  
  assert_raises Pundit::NotAuthorizedError do  
    authorize [@r](http://twitter.com/cause "Twitter profile for @cause")ecord, :destroy?  
  end  
end</pre>

<pre name="eca1" id="eca1" class="graf graf--pre graf-after--pre graf--trailing">def test_user_can_show?  
  authorize [@r](http://twitter.com/cause "Twitter profile for @cause")ecord, :show?  
end</pre>











* * *







Overall I like Pundit. I’ve only been using it for a short while, but I already prefer it over cancancan — it just feels more maintainable and testable.











* * *







Did you find this story helpful? Please **Clap** to show your support!  
If you didn’t find it helpful, please let me know why with a **Comment**!








