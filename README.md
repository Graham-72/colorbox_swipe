# Colorbox Swipe

## Description

This is a port to Backdrop of the Drupal module
Colorbox Swipe Gestures Support, version 7.x-1.3

It adds swipe gesture support to the Colorbox module for devices with 
touch sensitive screens. Just swipe left or right on galleries to show 
the previous or next element.

It does not make images slide to left or right as they are swiped.
It merely makes the swipe action behave as a tap.

To do this it uses two jQuery additions as libraries: 
jQuery.event.swipe and jQuery.event.move.

## Dependencies

The Colorbox and the Libraries module must be installed.

Downloaded the jquery.event.swipe.js and jquery.event.move.js files 
from the js folders in their respective repositories at
https://github.com/stephband/jquery.event.swipe and
https://github.com/stephband/jquery.event.move.

## Installation

Install the colorbox_swipe module in the usual way.

Two new directories are needed in the site's libraries directory:
jquery.event.swipe and jquery.event.move.

Upload the new jQuery library files directly into the folders created 
in libraries.

No configuration of this module is needed but mobile detection must be 
disabled in the settings for the Colorbox module.

## License

This project is GPL v2 software. See the LICENSE.txt file in this
directory for the complete text.

## Acknowledgements
### Current Maintainer for Drupal
+ Julian Pustkuchen (Anybody)

### Porting to Backdrop
+ Graham Oliver (github.com/Graham-72/)

### Sponsorshop of Drupal module
+ webks: websolutions kept simple (http://www.webks.de)
+ DROWL: Drupalbasierte Lösungen aus Ostwestfalen-Lippe (http://www.DROWL.de)

### jQuery libraries
+ Stephen Band (github.com/stephband)
