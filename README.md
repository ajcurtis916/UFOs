
# UFO Sitings
### *Displaying and Filtering Data*
#### Purpose: create webpage to visualize UFO siting data, and allow user to filter for desired information by inputting various search criteria
---
## Results
![image](https://user-images.githubusercontent.com/89767816/144942486-f1697d9e-7465-4768-b38f-831fac13c3bc.png)

Webpage users will first be met by the page's visual aesthetics, such as the dark theme and beautiful image in the page's header.  These features and other customizations on the page were coded using CSS and Bootstrap.  Information about the page's intent is included to guide the user, and a user friendly data table assists the user with parsing desired information from the table.</br></br>  

![image](https://user-images.githubusercontent.com/89767816/144947632-dc41ab75-9ca9-48df-8259-f2a11162dfcb.png)

To simplify the user's experience, we customized the page to include text input boxes to filter the table data by date, city, state, country and shape of the UFO sitings.  Duration of the UFO sitings are also included, but no filter by duration was added.  If nothing is typed into the filter text boxes, all available data is displayed.</br></br>

![image](https://user-images.githubusercontent.com/89767816/144947707-70b7fbf3-25af-4abf-b89f-f81158ba61ea.png)

The filters build on each other as new filters are added, displaying only information that matches all chosen filters.  In other words, the filters are cummulative until the reset button resets the filtered data back to the original data table and clears the inputs.  An individual input box and currently displayed filtered data can also be reset when the user deletes their input and presses enter.</br></br>

![image](https://user-images.githubusercontent.com/89767816/144947783-5e5cb2bb-4a3c-4113-bb5c-90ea71aa5e30.png)

If non-applicable filters are used and there is nothing to match the search, no data will be displayed.</br></br>

## Resources
**Data Source:** data.js file of UFO Sitings</br>
**Software:** Javascript, HTML and CSS via VS Code, Version 1.65.2

## Summary
One drawback of this design is the user may not know which filters to input, which decreases the filters' functionality.  The "shape" data options appear the most problematic, as they do not intuitively match common shapes.  "Shapes" in this data set include "light," "formation," "fireball," "unknown," etc.  The parameters of the data are also fairly limited.  For example, the data key of datetime only spans from 1/1/2010 to 1/13/2010, so inputting any other date may cause the user to infer the filters are not working correctly, when really there is no data to display.</br>

Drop-down menus may be more optimal than input boxes to filter the data. This would make the page more user-friendly by solving the current functionality issues. It is also suggested to go back and clean the data in the "Comments" column, since some of the comments include unecessary and confusing characters such as "IT&#39S A HOAX YET AGAIN&#33&#33" (example from UFO siting data on 1/1/2010 in el cajon, "formation" shaped).
