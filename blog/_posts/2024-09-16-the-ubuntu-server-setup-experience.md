---
layout: blogpost
title: The Ubuntu Server experience.
date: 2024-09-16
image: ../blog/img/2024-09-16/preview.jpg
---

Well i have gotten again into what is the Linux world, and oh well it was kind of a hassle, today i'll be telling you my experience with the GNOME-less/GUI-less Ubuntu, known as Ubuntu Server.

## The Prologue

You may ask why did i even did this, well basically after running out of space on my Xubuntu install (for the 2nd time), i decided to try something different, as uh, the Xubuntu Minimal install is particularly broken, i couldn't even manage my own account!

My Linux distro of choice is Ubuntu Server, 22.04 Jammy Jellyfish (i can't run 24.04 my system is not compatible okay), as Canonical said on their downloads website, and i quote: "It will not install a graphical user interface.", interesting, huh, i thought to myself, as we're Debian all of a sudden again! - jokes aside i was kinda curious about this, as i won't have to deal with GNOME anymore, and just install my favorite Linux DE: XFCE!

I used Unetbootin to add the Linux image to the Windows Boot Manager, booted it up and worked like a charm, i even managed to not clean my disk by accident since GParted was not present! :D

All of that aside, something went wrong, no it didnt error out when installing, it just didn't recognize my network """"""card"""""", basically it was a network USB, a "Belkin Wireless G USB Network Adapter F5D7050" to be exact, it did detect my Ethernet cards (yes, *cards*, idk why does the eMachines ET1810 have two), i didn't really think about it and just did the installation as usual, and no, this does not look like as the Debian instaler, it looks more prettier in my opinion, anyways everything went well and i was network-less, which oh boy i wouldn't know how of a problem that would be...

## The problems

Everybody encounters issues when trying new things, i'm no exception! (as always haha).

As said earlier, networking was one of those problems, i tried everything to make it work, searched up a tutorial on YT, and it actually worked, i was just kind of an idiot when doing so, it worked like a charm tho, if not this website wouldn't exist, anyway here's some highlights of the shenanigans i went through.

### Ubuntu CLI and Wi-Fi

First of all, i installed some packages from [the official Ubuntu packages website](<https://packages.ubuntu.com>), and unlike Microsoft, they actually had packages for older, unsupported releases! I went ahead and downloaded the WPA supplicant and some other dependencies, installed it and... no change, then i saw that you need to edit some .yml file located in "`/etc/defualt/netplan`", i opened it with GNU nano, and just added my device, configured it, added the SSID and password and used DHCP4, and it didn't work... :/

It turned out that i edited the wrong file, i did it all again, and when i restarted it didn't save for some reason, did it again and again for like 5 minutes, then in like the 16th time, i saw the verbose startup and ...boom.. I saw "`197.168.0.24`" as the IP address and finally, i had been connected, i don't know what i did but Ubuntu finally decided to accept the settings! i pinged www.google.com (as every PC user would do, i think) and i recieved 64 bytes as a reply!

With networking out of the way, i had another problem...

### The XFCE/Xorg/X11 shenanigans

The network configuration was done. Perfect. Now what?

Well i certainly not gonna use a command-line-interface for Linux the entire time so i went ahead and with my newly configured network, to install an X11 server!
I used `apt install (some command here i don't remember what installed x11 lmao)` to get up and running X11, execpt it didnt really work... then i decided to get `xubuntu-desktop` and it didnt work either, it opened but crashed on startup.

I saw a tutorial on how to get XFCE 4.16, ran the ansible-playbook (since it required it), but before that i got some files from that person's website (the tutorial said so so don't worry), i opened but required my SSH password... yeah i didn't know how to get that...

I tried with my own user's password, it didn't work, i tried the root passowrd, it didn't work either, at this point i didn't know what else i could try so i just gave up, and no i didn't delete the partition dw.

Then, after a restart (since i wanted to do show something funny on Windows, the pic below is what i wanted to show), then i rebooted back into Ubuntu and... i got what i wanted... almost.

![](/blog/img/2024-09-16/winpic.jpg){: style="max-width: 100%; height: auto;"}

For some reason it installed GNOME instead of XFCE, i had a GUI, yay i guess, then everything went straightfoward, i opened the terminal, ran `sudo apt install xfce4` and done, XFCE was installed, i just needed to make it the defualt session.

It took me a while on how to login into XFCE but then i just did and done! XFCE 4.16 was installed and worked like a charm!
Then i went on to customize the panels a bit, making the bottom one (where the launchers are located) to make a sort of a "macOS Dock", and the top one where for everything else, workspaces, time & date, user thingy, apps menu, window menu, etc.

Then i grabbed some apps, i got Firefox 130 and VS Code from Snap (ik everybody hates that but that's the only way to get those apps okay?), grabbed Ruby-Lang from APT, installed Jekyll & Bundler, and installed VMware 12 from [here](<https://softwareupdate.vmware.com/cds/vmw-desktop/ws/12.0.0/2985596/linux/core>) and installed it, it worked, suprisingly!

And well, everything is done, here's the end result!

![](/blog/img/2024-09-16/result.jpg){: style="max-width: 100%; height: auto;"}

## Conclusion

Well after this rollercoaster of shenanigans, everything worked out, and i learned alot about Linux itself, that's a win-win situation for me!
Now with a working development enviroment, expect more of this soon, new experiences, new shenanigans, new blog posts!

Oh, and also welcome to the new website! Have a great day!
