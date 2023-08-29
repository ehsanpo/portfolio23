---
title: 'How to check your wordpress sites security with WPScan'
date: '2020-01-09'
status: publish
permalink: /how-to-check-your-wordpress-sites-security-with-wpscan
author: Ehsan
excerpt: ''
type: post
id: 1373
thumbnail: ../uploads/2020/01/article.psd.jpg
category:
    - Lab
tag:
    - security
    - Wordpress
post_format: []

---
WPScan is a black box WordPress vulnerability scanner that can be used to scan remote WordPress installations to find security issues.You can use it to find vulnerability and brute forcing.

Download WPScanfrom github:  
https://github.com/wpscanteam/wpscan/

### WPScan update

Start with the following command to update the WPScan vulnerabilities database:

```
wpscan –update 
```

### Scanning WordPress vulnerabilities

After updating the vulnerability database use the following command to scan the target website for the most popular and recent vulnerabilities:

```
wpscan –url [wordpress url] 
```

You will get the WordPress version, used theme and vulnerabilities in red if WPScan can finds any.

### How to enumerate WordPress users

The WordPress user enumeration tool is used the retrieve a list of registered WordPress users for the target host. User enumeration is the first step when an attacker wants to gain access to a specific target by brute forcing. The enumeration tool scans the target on posts, pages and custom types for authors and usernames.

Use the following command to enumerate the WordPress users:

```
wpscan –url [wordpress url]–enumerate u
```

### How to brute force the root password

There are many different tools out there for brute forcing like hydra here is how you do it with wpscan

Use the following command to brute force the password for user root:

```
 wpscan –url [wordpress url]–wordlist [path to wordlist]–username [username to brute force]–threads [number of threads to use] 
```

### using Tor with wpscan to avoid getting your ip banned

```
wpscan --url example.org --proxy socks5://127.0.0.1:9050
```

### How to avoid WordPress User Enumeration

If you want to avoid WordPress user enumeration, you should avoid using the username as nickname and display name which is shown publicly in WordPress. The best option is to choose an administrator username which consists of random characters and use a different nickname. WPScan scans for usernames in the URL’s so if you won’t use the username it cannot be scanned by WPScan. Another way to prevent user enumeration is to use a different account to publish posts and answer to replies.

### How to avoid Wordpres password brute forcing

The best way to keep attackers using brute force methods out is to limit the login attempts for and IP address. There are several plug-ins available for WordPress to limit the number login attempts for a specific username and IP, such as Wordfence. The latest WordPress versions have the option to limit login attempts by default. Make sure you limit entries to a maximum of 3 and increase lock out time a lot after 2 lock outs (which is 6 password attempts).