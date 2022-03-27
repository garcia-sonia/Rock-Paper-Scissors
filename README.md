Rock Paper Scissors by the Sea

Features
    Features left to implement

# Testing 
- I used Edge, Chrome and Firefox desktop browsers to ensure cross-compatibility.
- I used DevTools to simulate different smaller screen sizes down to 320px in width as well as testing on several personal devices including Android tablets and mobile phones.
- I asked my mentor and friends and relatives to test the website on Opera and iOS and no errors were reported.
- I asked my network to test the functionality of the game on their devices, to click every button and check every modal box and to also check for typos, etc. No errors were reported.
- Finally, as detailed below, I used several validator tools like Nu HTML checker, W3C CSS validator tool, and JSHint to check and no warnings are being flagged at the time of this submission.

## Issues and fixes

## Validator testing
- HTML Validator: https://validator.w3.org/nu/
  - Issue found: The validator flagged that the third h3 tag in the current-game-display div was empty of content. The reason why this h3 tag was empty of content was that it simply announces the winner of the round and displays different JS content depending on who wins each round (i.e. "You win", "You lose", "It's a draw").
  - Fix: I simply added three suspension points inside the h3 html tag as placeholder which also adds to the idea of suspense on who is going to win the round.
Game is now fully validated with no HTML errors.

- CSS Validator: https://jigsaw.w3.org/css-validator/
  - The CSS code was validated as CSS Level3 +SVG with no errors found.

- JavaScrip Validator: https://jshint.com/
  - Issue found: missing semi-colons at the end of several lines.
  - Fix: semi-colons added
JS code shows no warnings at the time of this submission. As highlited by the JS linter, there are 12 functions in this file. The function with the largest signature takes 1 argument, while the median is 0. The largest function has 21 statements in it, while the median is 2. The most complex function has a cyclomatic complexity value of 14 while the median is 1.

## Contrast testing
- WCAG Color contrast checker: The score reported was AAA as seen in screenshot below:
![WCAG result](docs/images/WCAG_contrast_checker.png)

## Performance, Accessibility, Best practices and SEO testing with Lighthouse
Test conditions:
- All lighthouse tests were carried out in incognito mode to avoid interference from browser extensions.
- All tests were run for both mobile and desktop.
- The scores shown are the final scores after fixing the accessibility issue mentioned in the "Issues and Fixes" section above.

Lighthouse Scores for Desktop:

![Ligthouse scores for desktop](docs/images/Lighthouse_desktop.PNG)
  
Lighthouse Scores for Mobile:

![Ligthouse scores for mobile](docs/images/Lighthouse_mobile.png)

# Deployment
This website was deployed using GitHub Pages following the below procedure:

- From the project's repository, click on the Settings tab located in the top navigation bar.
- From the left-hand menu, select the Pages tab.
- Under the Source section, select the Main branch from the drop-down menu and click Save.
- A message will be displayed to indicate a successful deployment to GitHub pages and provide the live link.
- You can find the live site via the following URL: [Rock Paper Scissors by the Sea](https://garcia-sonia.github.io/Rock-Paper-Scissors/)

# Credits 

## Technical Reference

Firstly I would like to thank my mentor Richard Wells and the Community at Code Institute for their guidance and support throughout this JavaScrip Project Portfolio2.

I also got inspiration from Ania Kubów's awesome video [3 ways to code Rock Paper Scissors in JavaScript](https://www.youtube.com/watch?v=RwFeg0cEZvQ) and used this as a starting point although overall my JS code varies significantly and contains further features and functions.

Otherwise, I relied mainly upon content from W3schools and CI LMS tutorials for this project. 

CSS Grid Layout Module
https://www.w3schools.com/css/css_grid.asp

How to position a background image
https://www.w3schools.com/cssref/pr_background-position.asp

HTML DOM Document querySelectorAll()
https://www.w3schools.com/jsref/met_document_queryselectorall.asp

JavaScript Arrow Function
https://www.w3schools.com/js/js_arrow_function.asp

HTML DOM Element addEventListener()
https://www.w3schools.com/jsref/met_element_addeventlistener.asp

JavaScript Math.floor()
https://www.w3schools.com/jsref/jsref_floor.asp

JavaScript if else and else if
https://www.w3schools.com/js/js_if_else.asp

How TO - CSS/JS Modal
https://www.w3schools.com/howto/howto_css_modals.asp

Finally, I used the following references to help fix some of the bugs described in previous sections:

Center a table with CSS by Scott Grannneman
https://granneman.com/webdev/coding/css/centertables

aria-label by Aditus
https://www.aditus.io/aria/aria-label/

## Content Inspiration

All content in the game "Rock Papers Scissors by the Sea" was written by myself.
The Seaside Pirate theme was inspired by my daughters' ideas as so was the choice of Emojis and Clip art pgn images across the site.

## Media
Background image: Image by London Calling from Pixabay 
https://pixabay.com/illustrations/summer-clipart-nature-storytelling-5350229/
    
Main title parrot image: clipartmax
https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.clipartmax.com%2Fmiddle%2Fm2i8K9G6i8i8b1Z5_parrot-talking-bird-clip-art-parrot-clipart%2F&psig=AOvVaw3wSHrWUGVbukQMN7DqfOBz&ust=1648189991827000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLDPpKmQ3vYCFQAAAAAdAAAAABAD

Main title rock paper scissors image:
https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.clipartmax.com%2Fmiddle%2Fm2H7N4b1b1Z5N4K9_rock-paper-scissors-rock-paper-scissors%2F&psig=AOvVaw2DAfZw6DqAT_NiOV9T8t9P&ust=1648190236347000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOjq_KSR3vYCFQAAAAAdAAAAABAD

Game Rules modal image: png wing
https://www.pngwing.com/en/free-png-puqtw

Five Mateys image in Leaderboard: Flyclipart
https://flyclipart.com/st-michael-all-angels-lusitania-clipart-12621

Redbeard image in Leaderboard: Flyclipart
https://flyclipart.com/free-pirate-clip-art-look-at-pirate-clip-art-clip-art-images-pirate-clipart-153912

Rock button image:
https://pixabay.com/vectors/rock-paper-scissors-rock-hand-296854/

Paper button image:
https://pixabay.com/vectors/rock-paper-scissors-paper-hand-296855/

Scissors button image:
https://pixabay.com/vectors/rock-paper-scissors-scissors-hand-296853/

End of game modal image:
https://www.maxpixel.net/Gold-Ship-Ocean-Pirate-Treasure-Pirate-Ship-3946618

## Other tools and resources

Fonts were imported from Google fonts
Website was tested with Chrome DevTools and Lighthouse
JS compliance was tested using [JSHint](https://jshint.com/)
CSS was validated with [The W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/validator)
HTML was validated with [Nu Html Checker](https://validator.w3.org/nu/#textarea)
Mockups to show Responsive Design were taken using [Am I Responsive](http://ami.responsivedesign.is/)
