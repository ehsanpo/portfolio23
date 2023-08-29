---
title: 'Getting started with React Native'
date: '2020-01-14'
status: publish
permalink: /getting-started-with-react-native
author: Ehsan
excerpt: ''
type: post
id: 1431
thumbnail: ../uploads/2020/01/IMG_1807.jpg
category:
    - Lab
    - Mobile
tag: []
post_format: []

---
I have been working with React in past years and know my way around it, I have heard about react-native but never had any client or idea to build something with it until I saw a Reddit post about pigpen cipher. As soon as I saw the post I got an idea to turn it to an app so I can send a semi-encrypted massage to anyone.

![](../uploads/2020/01/wsi-imageoptim-Pigpen_cipher_key.svg.png)

So I start Googling React native and was introduced to [Expo.io](https://expo.io/).  
Expo helps you set up and develop a project with zero configuration. Expo comes with an app for ios and android so you can see your app in native device with native code, so let’s install expo first with:

```
npm install -g expo-cli
expo init Pigpen-cipher

```

With expos basic tab example, I already had a working app with tabs. The idea was to have two different tabs for encrypting and decrypting the message.  
After a couple of hours, I was done and could see my app in the browser by running:

```
expo start --web 
```

Everything worked great and I saved all my cipher as svg it into the app. but when I started looking at the app in native ios environment I could see that my svg is not showing up. after googling for hours and trying different libraries I got back to the original react-native-svg and converted my svg to Svg react component. but still no luck! after looking around and playing with the code for about one hour I found the problem. I forgot to set the width &amp; height for each svg.

<iframe allowfullscreen="" class="giphy-embed" frameborder="0" height="480" src="https://giphy.com/embed/6xcqPF9MTwChq" width="480"></iframe>

After that everything worked as it should, you can click on the symbols to decrypting a message or write your text and encrypting it.  
The next step would be to make it so you can save your encrypted message as an image so you can send it to your friend.

Before that “Git push”. You can see and download the app on [my Github](https://github.com/ehsanpo/Pigpen-cipher).  
Next, I will use [react-native-view-shot](https://github.com/gre/react-native-view-shot) and [react-native-cameraroll](https://github.com/react-native-community/react-native-cameraroll) to convert the Svg react component to an image and save it to the camera roll. To be continued…