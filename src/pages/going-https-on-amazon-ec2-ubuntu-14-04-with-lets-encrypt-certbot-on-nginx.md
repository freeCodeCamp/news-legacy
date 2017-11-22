---
author: Karan Thakkar
authorTwitter: https://twitter.com/geekykaran
authorFacebook: https://facebook.com/10152434175419004
title: "Using the Let’s Encrypt Certbot to get HTTPS on your Amazon EC2 NGINX box"
subTitle: "Let’s Encrypt is a new Certificate Authority which provides free SSL certificates (up to a certain limit per week). It came out of beta a..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*Cd2NBjQD8Luwbu1Z23n5QQ.png
url: https://medium.freecodecamp.org/going-https-on-amazon-ec2-ubuntu-14-04-with-lets-encrypt-certbot-on-nginx-696770649e76
id: going-https-on-amazon-ec2-ubuntu-14-04-with-lets-encrypt-certbot-on-nginx-696770649e76
date: 2016-06-01T06:29:11.044Z
tags: [
  "Web Development",
  "Programming",
  "Tech",
  "Startup",
  "Security"
]
---
# Using the Let’s Encrypt Certbot to get HTTPS on your Amazon EC2 NGINX box



![](https://cdn-images-1.medium.com/max/1600/1*Cd2NBjQD8Luwbu1Z23n5QQ.png)



Let’s Encrypt is a new _Certificate Authority_ which provides free SSL certificates (up to a certain limit per week). It came out of beta around a month back and is supported by a [wide array of browsers](https://community.letsencrypt.org/t/which-browsers-and-operating-systems-support-lets-encrypt/4394).

**Certbot** is the official Let’s Encrypt client, developed by the [Electronic Frontier Foundation](https://www.eff.org/). It makes automatically fetching and deploying SSL/TLS certificates for your web server a relatively straight forward process.

Lets get started.

### **Step #1**

Make sure that you have opened up ports 80 (HTTP) and 443 (HTTPS) in your instance **Security Group** to public. Certbot will use this to establish connections while generating your certificates.

Note that I spent far too much time to figure out why I couldn’t generate a certificate, while the only issue was that I hadn’t opened up port 443 in my EC2 instance Security Group.







![](https://cdn-images-1.medium.com/max/2000/1*ROaISCVs948GnqucIVq0yA.jpeg)

**Inbound** settings in EC2 Security Group







### Step #2

Setup your domain’s **CNAME Record** to point to the **public DNS** of your EC2 instance.



![](https://cdn-images-1.medium.com/max/1600/1*iGL0zwt4IlbmOL-g-Cj92g.jpeg)

**Public DNS** value in your EC2 instance description









![](https://cdn-images-1.medium.com/max/2000/1*dt43NRoGHks1aOPs_ABVFQ.jpeg)

This setting would point **api.mydomain.com** to my EC2 instance







### Step #3

Install Certbot on your instance. Based on your operating system and server, you can find out how to install it on [Certbot’s homepage](https://certbot.eff.org). For NGINX on **Ubuntu 14.04**, use [this](https://certbot.eff.org/#ubuntutrusty-nginx).

<pre name="9892" id="9892" class="graf graf--pre graf-after--p">wget https://dl.eff.org/certbot-auto  
chmod a+x certbot-auto</pre>

Run this command in your home directory:

<pre name="e1fd" id="e1fd" class="graf graf--pre graf-after--p">/home/ubtuntu</pre>

### Step #4

Stop any existing servers running on the port 80 and 443, since those are used by Certbot to verify your domain and generate certificates.

You can restart those servers once you have finished generating the certificates.

### **Step #5**

Run the following command to generate certificates for your domain:

<pre name="05a8" id="05a8" class="graf graf--pre graf-after--p">./certbot-auto certonly --standalone -d xyz.yourdomain.com</pre>

You can generate certificates for multiple domains using this approach.

### **Step #6**

Change your NGINX configuration in **/etc/nginx/nginx.conf** to [enable SSL](http://nginx.org/en/docs/http/configuring_https_servers.html):

<pre name="86bc" id="86bc" class="graf graf--pre graf-after--p">http {</pre>

<pre name="8422" id="8422" class="graf graf--pre graf-after--pre">  ##  
  # Logging Settings  
  ##</pre>

<pre name="d3d8" id="d3d8" class="graf graf--pre graf-after--pre">  access_log /var/log/nginx/access.log;  
  error_log /var/log/nginx/error.log;</pre>

<pre name="dd18" id="dd18" class="graf graf--pre graf-after--pre">  server {  
    listen 80;  
    server_name xyz.yourdomain.com;</pre>

<pre name="c4c9" id="c4c9" class="graf graf--pre graf-after--pre">    location / {  
      # Redirect any http requests to https  
      return 301 [https://$server_name$request_uri](https://$server_name$request_uri);  
    }  
  }</pre>

<pre name="6336" id="6336" class="graf graf--pre graf-after--pre">  server {  
    listen 443 ssl;  
    server_name xyz.yourdomain.com;  
    ssl_certificate /etc/letsencrypt/live/xyz.yourdomain.com/fullchain.pem;  
    ssl_certificate_key /etc/letsencrypt/live/xyz.yourdomain.com/privkey.pem;</pre>

<pre name="b2cd" id="b2cd" class="graf graf--pre graf-after--pre">    add_header Strict-Transport-Security “max-age=31536000”;  

    location / {  
      proxy_pass [http://127.0.0.1:3000](http://127.0.0.1:3000);  
    }  
  }  
}</pre>

The [Strict-Transport-Security](https://developer.mozilla.org/en-US/docs/Web/Security/HTTP_strict_transport_security) (HSTS) header ensures that any internal links that are not HTTPS will [automatically be routed](https://loune.net/2016/01/https-with-lets-encrypt-ssl-and-nginx) to the HTTPS version during a HTTPS session.

### **Step #7**

Lastly, reload your NGINX configuration:

<pre name="e0b5" id="e0b5" class="graf graf--pre graf-after--p">sudo service nginx reload</pre>

Congratulations! Your site **xyz.example.com** is now successfully running on HTTPS.

**NOTE**: Let’s Encrypt certificates are only valid for 3 months after issue. So every 3 months, renewal is required. Here’s how you can automate this [using a cron job](https://loune.net/2016/01/https-with-lets-encrypt-ssl-and-nginx/).

If this post helped you, hit the heart button below. 😄 And if it didn’t, please leave a comment to tell me how I can make it better.

PS: Thanks to [Narendra N Shetty](https://medium.com/@narendrashetty) for proofreading and giving suggestions.











* * *









![](https://cdn-images-1.medium.com/max/1600/1*oGPZFffoVKrYMCafZ2VD_A.png)



[Karan Thakkar](https://twitter.com/geekykaran) is the Frontend Lead at [Crowdfire](https://medium.com/@Crowdfire) — _Your super-smart marketing sidekick_. His [article](https://bit.ly/hackingtwitter) has been previously [featured](https://bit.ly/geekyonhuffpo) on [The Huffington Post](https://medium.com/@HuffingtonPost). He likes trying out new technologies in his spare time and has built [Tweetify](https://karanjthakkar.com/projects/tweetify) (using React Native) and [Show My PR’s](https://showmyprs.com) (using Golang).

Other articles written by him:

[**How I grew from 300 to 5k followers in just 3 weeks**  
_#GrowthHacking my Twitter account for @Crowdfire Twitter Premier League_blog.markgrowth.com](https://blog.markgrowth.com/how-i-grew-from-300-to-5k-followers-in-just-3-weeks-2436528da845 "https://blog.markgrowth.com/how-i-grew-from-300-to-5k-followers-in-just-3-weeks-2436528da845")[](https://blog.markgrowth.com/how-i-grew-from-300-to-5k-followers-in-just-3-weeks-2436528da845)

[**An Illustrated Guide for Setting Up Your Website Using Github & Cloudflare**  
_Easy to Setup, Instant Deploy, Free HTTPS, HTTP2/SPDY Suport, Custom Redirect, Browser Cache Expiration, HTTP Secure…_medium.freecodecamp.org](https://medium.freecodecamp.org/an-illustrated-guide-for-setting-up-your-website-using-github-cloudflare-5a7a11ca9465 "https://medium.freecodecamp.org/an-illustrated-guide-for-setting-up-your-website-using-github-cloudflare-5a7a11ca9465")[](https://medium.freecodecamp.org/an-illustrated-guide-for-setting-up-your-website-using-github-cloudflare-5a7a11ca9465)








