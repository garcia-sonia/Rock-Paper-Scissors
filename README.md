# Rock Paper Scissors by the Sea

## Features
    Features left to implement

## Testing 
- I used Edge, Chrome and Firefox desktop browsers to ensure cross-compatibility.
- I used DevTools to simulate different smaller screen sizes down to 320px in width as well as testing on several personal devices including Android tablets and mobile phones.
- I asked my mentor and friends and relatives to test the website on Opera and iOS and no errors were reported.
- I asked my network to test the functionality of the game on their devices, to click every button and check every modal box and to also check for typos, etc. No errors were reported.
- Finally, as detailed below, I used several validator tools like Nu HTML checker, W3C CSS validator tool, and JSHint to check and no warnings are being flagged at the time of this submission.

### Issues and fixes

1. Intended outcome: Follow HTML5 best practices with regards to use of Headers. 
   - Issue: The idea was to split the main h1 title in two separate lines for added readability and better display. I first used two h1 with the same main-header class but as pointed out by my mentor best practices recommend to only have one single h1 for the page.
   - Fix: I used one single h1 for the main title and split it in two separate lines using a break tag.
2. Intended outcome: Pass the HTML validation with 3W specifically for using id to target one single element and class with several elements. 
   - Issue: As flagged by the validator I had used the same id with two different elements (the two original h1 headers).
   - Fix: this is now irrelevant as I ended up merging the two h1 into one (as detailed above) but before merging the two h1 I changed the id "main-header" with a class in order to pass the validation.
3. Intended outcome: Adequate background display in all screen sizes. 
   - Issue: The game has a main background clip art image with a seaside theme. I was not sure whether to choose a "fixed" or "cover" background-attachment in style.css as ideally I wanted the sun at the top of the image and the sand at the very bottom to both display in all screen sizes. This proved to be impossible as I switched from a "fixed" to a "cover" attachment several times with different commits. In some formats the sun was showing but not the sand, in other formats just the sea in the middle was showing.
   - Fix: I considered changing the background image and tested other images with different commits but ultimately I decided to keep the original background image as it was all in all more suitable for the game. I cropped the top of the original background image with an image editor in an effort to better centre the image vertically in most screens sizes. I finally settled for a fixed background-attachment. There is no size that fits all but I believe that the choices I made are a good compromise:

   ![Image showing background css code](docs/images/doc_background.PNG)

4. Intended outcome: Creating three functional buttons with icons representing either rock, paper or scissors. 
   - Issue: I first tried to use an input type inside each button and to assign an icon and styling inside this tag. However, the buttons were not functional/clickable this way.
   - Fix: I deciced to just leave the button tag in the HTML file and to remove the input type. I then styled the buttons in the CSS file with the help of background images. This resulted in perfectly functional buttons.
5. Intended outcome: Leaderboard well centered on screen. 
   - Issue: At first the CSS grid table used for the leaderboard wasn't centered.
   - Fix: I used the article by Scott Grannneman referenced below where he recommends to center a table by setting the margins, like this:  

   ![Image showing how to center a table in css](docs/images/doc_centre_table.PNG])

6. Intended outcome: Correct width/hight ratio for all png images. 
   - Issue: When adapting size of png images to better fit different screen sizes, I accidentally altered some of the aspect ratios causing the images to look slightly distorted.
   - Fix: I set all of the images to the correct aspect ratio by just setting the width to auto as I wanted to preserve the height in pixels that I had assigned.   
7. Intended outcome: Create a JS function to generate the computer choice of rock, paper or scissors. 
   - Issue: I first used an array composed of ['rock', 'paper', 'scissors'] to use this with a Math.Random function but this didn't give me the expected random choice result and 'rock' wasn't picked. I do not fully understand why 'rock' wasn't piced but I ended up having to add an ackward ||'rock' in the code to ensure a random computer choice where 'rock' would be also picked. However, this didn't look right and I decided to change this on my mentor's advice. 
   - Fix: I deleted the constant choices=['rock', 'paper', 'scissors'] and replaced with if statements linked to anyNumber from 1 to 3 in order to generate the computer choice. This fix brings simplicity and better randomness of computer choice. The JS code is now longer than before but it is fully functional.
8. Intended outcome: Avoid targeting all buttons when declaring the constant differentChoices with a querySelectorAll.
   - Issue: This practice could create conflicts with other buttons that I didn't want to target (like the game rules button, the close button or the play again button). Instead, target only the choice buttons (rock, paper, scissors)
   - Fix: Give rock paper scissors a 'choice' class in order to target that class with querySelectorAll as per w3schools tutorial.
   
   ![Image showing evolution of constant differentChoices](docs/images/doc_const_differentChoices.PNG)

9. Intended outcome: Good JS code functionality. 
   - Issue: As I am learning how to code in JavaScript I occasionally make mistakes in the way I write the code and end up finding out about my mistakes because the code doesn't behave as expected. For example, I made a mistake when writing the event listener that targets the three different choices of rock, paper, or scissors on click.
   - Fix: I reviewed the documentation on the W3 schools website and changed the code.

   ![Image showing the correction of a mistake in the eventListener code](docs/images/doc_eventListener.PNG)

10. Intended outcome: Increased Accessibility score on Lighthouse. 
    - When testing with Lighthouse I realised that the site was only achieving an accessibility score of 89. The reason was that the three choice buttons (rock, paper and scissors buttons) did not have an accessibile name. When a button doesn't have an accessible name, screen readers announce it as "button", making it unusable for users who rely on screen readers.
    - Fix: I added an aria-label to each one of the three choice buttons and the accessibility score is now 100.

### Validator testing
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

### Contrast testing
- WCAG Color contrast checker: The score reported was AAA as seen in screenshot below:
![WCAG result](docs/images/WCAG_contrast_checker.png)

### Performance, Accessibility, Best practices and SEO testing with Lighthouse
Test conditions:
- All lighthouse tests were carried out in incognito mode to avoid interference from browser extensions.
- All tests were run for both mobile and desktop.
- The scores shown are the final scores after fixing the accessibility issue mentioned in the "Issues and Fixes" section above.

Lighthouse Scores for Desktop:

![Ligthouse scores for desktop](docs/images/Lighthouse_desktop.PNG)
  
Lighthouse Scores for Mobile:

![Ligthouse scores for mobile](docs/images/Lighthouse_mobile.png)

## Deployment
This website was deployed using GitHub Pages following the below procedure:

- From the project's repository, click on the Settings tab located in the top navigation bar.
- From the left-hand menu, select the Pages tab.
- Under the Source section, select the Main branch from the drop-down menu and click Save.
- A message will be displayed to indicate a successful deployment to GitHub pages and provide the live link.
- You can find the live site via the following URL: [Rock Paper Scissors by the Sea](https://garcia-sonia.github.io/Rock-Paper-Scissors/)

## Credits 

### Technical Reference

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

### Content Inspiration

All content in the game "Rock Papers Scissors by the Sea" was written by myself.
The Seaside Pirate theme was inspired by my daughters' ideas as so was the choice of Emojis and Clip art pgn images across the site.

### Media
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

### Other tools and resources

Fonts were imported from Google fonts
Website was tested with Chrome DevTools and Lighthouse
JS compliance was tested using [JSHint](https://jshint.com/)
CSS was validated with [The W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/validator)
HTML was validated with [Nu Html Checker](https://validator.w3.org/nu/#textarea)
Mockups to show Responsive Design were taken using [Am I Responsive](http://ami.responsivedesign.is/)
