---
title: 'What is Tor?'
date: '2019-04-15'
status: publish
permalink: /blog/what-is-tor
author: Ehsan
excerpt: ''
type: post
id: 1004
thumbnail: ../uploads/2019/06/firefox-tor.jpg
category:
    - Lab
tag:
    - Bash
    - Osx
    - Tor
post_format: []

---
Have you at any point needed to use the Internet secretly? Browser’s with “incognito” or “private window” don’t accurately cut it. On the off chance that you need absolute anonymity, you’re going to need to utilize Tor, in the past known as The Onion Router.

### Tor is an Internet networking protocol

Intended to anonymize the data transferred crosswise over it. Utilizing Tor’s product will make it troublesome, if certainly feasible, for any snoops to see your webmail, look up your history, social media posts, or other activity online.
They likewise won’t almost certainly tell which nation you’re in by breaking down your IP address, which can be valuable for journalists, activists, businesspeople and that’s only the tip of the iceberg.

### How does Tor work?

The Tor system goes through the PC servers of thousands of volunteers spread all through the world. Your information is packaged into an encoded parcel when it enters the Tor network.
Tor strips away a piece of the packet’s header, which is a part of the data that could be utilized to learn things about the sender, for example, the operating system from which the message was sent.
At last, Tor scrambles and encrypts the remainder of the data, called the packet wrapper. Regular Internet doesn’t do this.

### How would I use Tor?

To utilize Tor, you’ll need a client or software, that communicates with the Tor network.
The essential software is the Tor Browser Bundle, which the Tor Project distributes. The Tor Browser Bundle is preconfigured to send and get all Web traffic through the anonymizing Tor network.
You can design most programs to work with Tor utilizing the modules accessible in the pack. However, if you use Tor’s browser to get to the Internet, you don’t need to stress over the best possible setup.

Alternatively, if you don’t know how to do this, or don’t want to get into the hassle of setting up a dark web, I offer Tor website setup, for all your needs.

### OSX easy Tor setup – Bash script

You can save the script as tor.sh in your /usr/local/bin, make it executable with chmod + x and use it as a replacement for the general tor command.
Then you can open a terminal and run

```
tor.sh
```

The script will close the tor and change back your proxy setting when you close it.

```

#!/usr/bin/env bash

# 'Wi-Fi' or 'Ethernet' or 'Display Ethernet'
INTERFACE=Wi-Fi

#check if Homebrew installed
which -s brew
if [[ $? != 0 ]] ; then
# Install Homebrew
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
else
brew update
fi

#check if tor installed
if brew ls --versions tor > /dev/null; then
echo "Tor is installed"
else
brew install tor
fi

# Ask for the admin password
sudo -v

# Keep-alive: update existing `sudo` time stamp until finished
while true; do sudo -n true; sleep 60; kill -0 "$$" || exit; done 2>/dev/null &

# trap ctrl-c and call disable_proxy()
function disable_proxy() {
sudo networksetup -setsocksfirewallproxystate $INTERFACE off
echo "$(tput setaf 64)" #green
echo "SOCKS proxy disabled."
echo "$(tput sgr0)" # color reset
}
trap disable_proxy INT

# Let's roll
sudo networksetup -setsocksfirewallproxy $INTERFACE 127.0.0.1 9050 off
sudo networksetup -setsocksfirewallproxystate $INTERFACE on

echo "$(tput setaf 64)" # green
echo "SOCKS proxy 127.0.0.1:9050 enabled."
echo "$(tput setaf 136)" # orange
echo "Starting Tor..."
echo "$(tput sgr0)" # color reset

tor

```