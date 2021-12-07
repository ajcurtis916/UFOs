# UFO Sitings
### *Displaying and Filtering Data*
#### Purpose: create webpage to visualize UFO siting data and allow the user to filter desired information by various data elements
---
## Results
![image](https://user-images.githubusercontent.com/89767816/144942486-f1697d9e-7465-4768-b38f-831fac13c3bc.png)

Webpage users will first be met by the page's visual aesthetics, such as the dark theme and beautiful image in the page's header.  These features and other customizations on the page were coded using CSS and Bootstrap.  Information about the page's intent is included to guide the user, and a user friendly data table assists the user with parsing desired information from the table.</br></br>  

![image](https://user-images.githubusercontent.com/89767816/144947632-dc41ab75-9ca9-48df-8259-f2a11162dfcb.png)

To simplify the user's experience, we customized the page to include text input boxes to filter the table data by date, city, state, country and shape of the UFO sitings.  Duration of the sitings are also included, but no filter by duration was added.  If nothing is typed into the filter text boxes all data is displayed.</br></br>

![image](https://user-images.githubusercontent.com/89767816/144947707-70b7fbf3-25af-4abf-b89f-f81158ba61ea.png)

The filters build on each other as new filters are added, displaying only information that matches all chosen filters.  In other words, the filters are cummulative until the reset button resets the filtered data back to the original data table and clears the inputs.</br></br>

![image](https://user-images.githubusercontent.com/89767816/144947783-5e5cb2bb-4a3c-4113-bb5c-90ea71aa5e30.png)

If non-applicable filters are used and there is nothing to match the search, no data will be displayed.</br></br>

## Resources
Data Source: data.js file of UFO Sitings</br></br>
Software: Javascript, HTML and CSS via VS Code, Version 1.62.3

## Summary
One drawback of this design is the user may not know which filters to input, which decreases the filters' functionality.  Particularly the "shape" data values do not match intuitively to common shapes.  "Shapes" in this data set include "light," "formation," "fireball," "unknown," etc.  Drop-down menus may be more optimal for the filter options.  The parameters of the data are also fairly limited, so drop-down menus for all data values are suggested.  For example, the data key of datetime only spans from 1/1/2010 to 1/13/2010, so inputting any other date may have the user thinking the filters are not working correctly, when really there is no data to display.
