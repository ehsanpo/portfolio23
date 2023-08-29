---
title: 'My first Machine Learning project'
date: '2019-04-12'
status: publish
permalink: /my-first-machine-learning-project
author: Ehsan
excerpt: ''
type: post
id: 913
thumbnail: ../uploads/2019/04/244001-1400x900-c-center.jpg
category:
    - Lab
tag:
    - AI
    - ML
    - Python
post_format: []

---
To understand what the script does line by line
-----------------------------------------------

I have been reading a lot about AI and machine learning lately.
Big company Like Google, Facebook, and Microsoft already offering ML and AI related services.I have played around with Google Vision and also seen services from Microsoft. But It was hard to start making your own Service.

I’m Self-learn developer and work As “Full stack” developer At an advertising agency [Guts &amp; Glory](http://gutsglory.se/) in Sweden. I often build WordPress site from a Design and some quiz and completions. So I’m not a heavy programmer or data sentient, but I love GitHub because you can find a lot of stuff with a really good Readme, and how to install and run them. So I usually really don’t need to understand what the script does line by line, but clone it, test and see if i get the result I want.

Many people talk about AI taking over your job so I got the idea to maybe I can build the AI that takes over my job. The idea was based on my daily job, usually, I got a design or/and a wireframe from our digital designer and turn it into a WordPress site. We don’t build heavy applications, usually only pages and blogs, maybe a contact and newsletter form.

So the AI needs to look at the design, cut it to different Sections (&lt;sections&gt;) and then find the elements (text, image,link, icon,colors) in a section and calculate the spacing between them, then use pre written CSS and HTML for the every element and build a WordPress site. omg I’m going to lose my job very soon!

But It’s a dream for me to do all that so I need to train with some side projects before I can do it. but what should I build? and how do i find the data to train my AI? weeks went by and no ideas until ?!
I have watched the Silicon Valley (TV series), where at one point they had a AI that could see if an image contains a hotdog or not! so my idea was based on that, I’ll build an AI that rates how hot girls faces is! It should be fun to find images of pretty girls. Don’t judge me! I really don’t want to objectify women. I think the inner beauty but is the most important thing but, I like to watch pretty faces!

A quick search In GitHub for hot dog and I find this
<https://github.com/hayzamjs/Hotdog-Classification>
<https://aboveintelligent.com/using-tensorflow-to-classify-hotdogs-8494fb85d875>

ooh… I really don’t know python! I need to install python, Tensorflow and OpenCV. I looked up some tutorials and to be honest it took me about 2 hours to run be able to run this script. I Had many problems with the python versions. but finally, after many “models missing error” I got it to run!

So where do I find all my data? Let’s Use Google image search! ?
I used the same Google Chrome plugin (Fatkun Batch) as suggested in the article to save all the images at ones. My first searches were “Pretty girl” and “Ugly girls”. I saved the images but wait! there is a lot of things happening in the background. I only want to rate the face not the whole image! ?

ok, Let’s find another Script that finds the face and saves it in different files!
Cropping the faces!This was harder that i imagined some how! To get the right version of OpenCV and Python to work together took it’s time, But finally I find this:
<https://github.com/icchi-h/face-cropping>
I don’t even know what language the Readme is but i could see how to runt it! I tested and Woohoo! it’s worked like a charm! Some images were not even images after cropping, so I needed to delete the images that I couldn’t open,So this was the steps I took:

    1. Search for “pretty girls” and “ugly girls” in Google images.
    2. Download about 100 images using Fatkun.
    3. Crop the faces.
    4. Train the AI with the images.

I did some test but it’s didn’t worked as I expected. It gave Angelina Jolie a 0.3 ?.
Problems:

    1. I need more data.
    2. I need to scan every image my self and make sure every pic in pretty girl category is good.
    3. My ugly girls are reeeeaaaally ugly, just do a search in google and you ‘ll see.

This time I did a quick search for some models and actuates I like and Angelina July in Instagram! woohoo! my pretty girl’s data is very nice! 1000 images of pretty girls! I added about 400 really ugly girls and cleaned the cropped image to remove some wrong recognized object as a face and some images of the girls when they did a funny face.
I did not put any images of my test object in my training data.and the result was:

![Kate upton](./images/kate.jpg)
Test 1 : Kate upton
<pre class="graf graf--pre graf-after--pre" >
hot (score = 0.96017)
ugly (score = 0.00904)
</pre>


![Rihanna](./images/rihanna.jpg)
Test 2 : Rihanna
<pre class="graf graf--pre graf-after--pre" >
hot (score = 0.98910)
</pre>


![Miley-cyrus](./images/Miley-cyrus.jpg)
Test 3: Miley Cyrus
<pre class="graf graf--pre graf-after--pre" >
hot (score = 0.72287)
ugly (score = 0.01855)
</pre>

![Miley-cyrus](./images/Hillary_Clinton.jpg)
<pre class="graf graf--pre graf-after--pre" >
Test 4 : Hillary Clinton
hot (score = 0.40589)
ugly (score = 0.34242)
</pre>

![Miley-cyrus](./images/IMG_1856-kopia.jpg)
<pre class="graf graf--pre graf-after--pre">
Test 5: My own face
hot (score = 0.52569)
ugly (score = 0.36819)
</pre>

I’m pretty satisfied with the result! note that my training data was the type of the face I like, Rihanna and Kate Are so beautiful and i really don’t like Miley and Hillary! And to be honest I think my own face got the fair point! 🙂

### So whats next?

I need some feedback, I don’t have big networks of developer that could give me the feedback’s and the one I know are too busy for this kind of basic stuff. I thought to write this article to get some feedback and **give big thanks to the open-source community for putting all the scripts out there**❤️!
I also really would like to get started with the project that could turn the Wireframe/design to code in an open-source project! my knowledge about the AI and Ml is not that much but I learn fast and can work with the part of the project that writes the php/html/css/wordpress code.

### Just do it!

Finally I want to tell to those who try to learn to code, that you can learn anything! This is 2017 and there is a lot of people that share codes, just copy the code, test it, change some line and see what happens! If I cloud learn to code my self you can do it too! you only need patience!

*This is my first article ever!!! So sorry for my bad english but i need to write to learn!*