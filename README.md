# Blue Thumb Datasheet

## Blu Thumb Team at Michigan Tech
- Jake Mager
- Logan Wilson
- Charles Heckel
- Dustin Haxton
- Brady Opsahl
- Zac Paris 

		Oklahoma Blue Thumb / BluTeam Reference Document
	
# User Experience

	When the application loads, it asks the user for their devices location.  This is optional as it is only used to auto-fill some information.  If the user declines permission, they will have to input the information manually.

	From the first screen, the user will have a clear representation of what the app is as well as the owning company.  The only option from this screen is to create a "new log".

	The Application is broken down into eight pages:
	
1. Initial
2. Site Conditions
3. Observations
4. Bacteria
5. DO & pH
6. Nitrogen
7. Phosphorus
8. Volunteers

	A quick link to each page can be found in the side drawer which is accessible from the button in the top left of the screen denoted by three horizontal lines ("Hamburger" button).

### Initial / New Log

	On the first page, the user will see several fields.  Some fields may already have information in them.  The fields are as follows:
	
- Site Name

The name of the location in which the sampler is currently taking data from
- WBID Number

Unique identifier for ___. 
An example of this number is "OK121500-01-0050W"
- Legal

One of the methods the user can use to define where ___

			An Example of this is "NW NW SW"
- County

The county in which the sampled body of water is located.

			An example of this is "Washita County"
- Date

The date at the time of sampling in MM/DD/YYYY format. 

			An example of this is 12/31/2018
- Lat

The North/South location with regards to the equator.  This field is measured to the ten-thousandth of a degree.

			An example of this is "47.1544"
- Long

The East/West location with regards to the Prime Meridian.  This field is a measure to the ten-thousandth of a degree.

			An example of this is "-88.6471"
- Time

The time at which the data sampling began.  The time format is dependent on which browser the user is working with
- Sampler 1

The name of the user.

			An example of this is "Karla"
- Sampler 2

See description for "Sampler 1".

	At the bottom of every page, navigation buttons can be found.  These button commonly include "Next" and "Back".

### Site Conditions

	On this page, the user can input values for: 

- Weather

 from a drop-down menu
- Wind Speed

 from a drop-down menu
- Wind Direction

 from a drop-down menu
- Stream Stage

 from a drop-down menu
- Secchi Depth

 from an input field.  The values can be decimal values and units are fixed to "meters".
- Air Temperature

 from an input field.  The values can be decimal values and units are fixed to "degrees Celcius".
- Water Temperature

 from an input field.  The values can be decimal values and units are fixed to "degrees Celcius".

### Observations

	On this page, the user can confirm the presence of the following items: 

- Clean

There is no visible debris in or around the water body.
- Manure in Stream

Animal manure is present in or around the water body.
- Unsightly Color Appearance

The water within the body has an abnormal color.
- Foam / Scrum

A foamy or scrummy substance is present on top of the water surface.
- Floating Detritus

organic matter is present on or in the water body.
- Trash

inorganic, or human garbage, is present in or around the water body.
- Significant Algae

A large volume of algae is present on or in the water body.
- Fish Kill

An unnatural amount of fish corpses are found in or around the water body.
- Dead Animal(s) in Stream

Any number of non-fish animal corpses are found in or around the water body.
- Iron Precipitates

Iron compounds are found in the body water
- Siltation

A process by which water becomes dirty as a result of fine mineral particles in the water.
- Flow Alteration

is any change in the natural flow regime of a river or stream or water level of a lake or reservoir induced by human activities.
- Habitat Alteration

defined as a change in the particular environment or place where organisms or species tend to live.
- Oily Film / Grease

Oil or other oil-like substance covers the water body.
- Offensive Odor

The water body has an unnatural or strong scent.
- Exotic SPP

There are organism present in the water that is not commonly present.
- Recent Cattle Activity in Stream

Clear signs of livestock are visible around the water body.
- Other - Please Comment

Please provide additional observations in the text field below this option.

### Bacteria Data

	On this page, the user is first expected to perform tests on the samples they have collected from the water body.  The following information can then be input into the application: 

- Sample Volume

The amount of sample taken from the stream.  Units are fixed at milliliters
- Dish 1

E. Coli Violet Count is given in ___. 
 Pink and Violet Count are given in ___.
- Dish 2

See "Dish 1"
- Dish 3

See "Dish 1"

	On this page, the user can input values for: 

- DO Test 1

Dissolved Oxygen is the amount of gaseous oxygen (O2) dissolved in the water.  Its measurement is fixed at milligrams per liter.
- DO Test 2

See "DO Test 1"
- pH Test 1

a figure expressing the acidity or alkalinity of a solution on a logarithmic scale on which 7 is neutral, lower values are more acid, and higher values more alkaline.  Measurements are whole numbers and range from Zero to Fourteen.
- pH Test 2

See "pH Test 1"

	On this page, the user can input values for: 

- Nitrate Test 1

(NO3) an essential source of nitrogen (N) for plants.
- Nitrate Test 2

See "Nitrate Test 1"
- Nitrite Test 1

(NO2) similar to nitrate, nitrite is a nitrogen-oxygen chemical units which combine with various organic and inorganic compounds 
- Nitrite Test 2

See "Nitrite Test 1"
- Ammonia Test 1

the preferred nitrogen-containing nutrient for plant growth.

		Ammonia can be converted to nitrite (NO2 ) and nitrate (NO3) by bacteria, and then used by plants
- Ammonia Test 2

See "Ammonia Test 1"

### Phosphorus and Chloride

	On this page, the user can input values for: 

- Orthophosphorus: Blank

the filterable (soluble, inorganic) fraction of phosphorus, the form directly taken up by plant cells
- Orthophosphorus: Test 1

See above
- Orthophosphorus: Test 2

See above
- Chloride: Blank

Chloride is commonly found in streams and wastewater. Chloride may get into surface water from several waste sources
- Chloride: Test 1

see above
- Chloride: Test 2

see above

### Voluteers

	On this page, the user can input values for one or more volunteers by selecting the "add Volunteers" button or remove extra volunteers with the "remove volunteers" button.  For all displayed volunteers, the following iformation is require before submission: 

- Name

Similar to the name field from the first page.  This value is an identifier for the volunteer who filled out the log.
- Date

Similar to the date field from the first page.  This value is an identifier for the time at which the log was sampled.
- Activity
- Hours

	Lastly, on this page there is a "send" button.  This button will send the log via email to the data administrator for the Blue Thumb Data team.
After submitting, the application returns to the home page to allow the user to create a new log.

# Developer Experience

# 
				main.js
			

### 
				When the App loads
			

				When the application loads, it first obtains the current date and time.

				It then finds the location of the host device.

### 
				Submission
			

				When the "Submit" button is pressed, the app gathers information supplied.  The information is as follows:

New Log Page
- site_name
- wbid
- legal
- county
- date
- latitude
- longitude
- site_time
- sampler_1
- sampler_2

Site Conditions
- weather
- wind_spd
- wind_dir
- stage
- stage_qual
- secchi_depth
- air_temp
- water_temp

Observations Page
- clean
- manure
- unsightly
- foam
- detritus
- trash
- sig_algae
- fish_kill
- dead_animals
- iron_precip
- siltation
- flow_alter
- habitat_alter
- oil_film
- odor
- exotic_spp
- cattle
- other_obs
- obs_comments
- site_obs_none

				The app then sanitizes the data values listed above.
			

Bacteria Data
- ... This information is still pending ...

Nitrogen Page
- do_1
- do_1_comments
- do_2
- do_2_comments
- ph_1
- ph_1_comments
- ph_2
- ph_2_comments
- nitrate_1
- nitrate_1_comments
- nitrate_2
- nitrate_2_comments
- nitrite_1
- nitrite_1_comments
- nitrite_2
- nitrite_2_comments
- ammonia_blank
- ammonia_blank_comments
- ammonia_1
- ammonia_1_comments
- ammonia_2
- ammonia_2_comments

Phosporus and Chloride Page
- op_blank
- op_blank_comments
- op_1
- op_1_comments
- op_2
- op_2_comments
- chloride_blank
- chloride_1
- chloride_1_comments
- chloride_2
- chloride_2_comments
- date_row
- volunteer_row
- activity_row
- hours_row

				After gathering and sanitizing information given from the user, the application now constructs two CSVs,
 one is a volunteer list, the other is for data points.

				After the CSVs are created, the application prepares an ajax call to send an email to the scientists in Oklahoma.

### 
				External Function Calls
			

### 
				switchScreen(String);
			

				function:

				&emsp;displays a subset of the data fields to give the illusion of navigating through separate pages.

				calls:

				&emsp;newLogBtn

				&emsp;&emsp;"New Log" button listener

				&emsp;navForwardBtn

				&emsp;&emsp;"Forward" navigation button listener.  This gets the ID of the current page, then increments the index of the page array.

				&emsp;navBackBtn

				&emsp;&emsp;"Back" navigation button listener.  This gets the ID of the current page, then decrements the index of the page array.

				&emsp;index.html

				&emsp;&emsp;called from side navigation bar for each page

### 
				openNav()
			

				function:

				&emsp;displays a sidebar navigation menu

				calls:

				&emsp;called from 'index.html' in several locations

### 
				closeNav()
			

				function:

				&emsp;hides the sidebar navigation menu

				calls:

				&emsp;called from 'switchScreen()'

				&emsp;called from 'index.html'

# 
				volunteer.js
			

### 
				When the App loads
			

				The application adds a button listener to the "Add Volunteer" button.

				The listener obtains a count of the current number of listed volunteers (up to 10), then adds some html for each of the volunteers.

				The html creates fields for additional volunteer information.

				After creating the html tags, the application saves the updated volunteer count.

				The application now adds a button listener to the "Remove Volunteer" button.

				this listener gets the volunteer count and removes the most recently added volunteer (decrementing the volunteer count appropriately).

## 
				"mail" class
			

### 
				prepareAttachment($path) function
			

				function:

				&emsp;Creates a file that contains the ajax request information

				params:

				&emsp;path the the file that will receive ajax information

				calls:

				&emsp;called from sendMail()

### 
				sendMail() function
			

				function:

				&emsp;sets up the headers, addresses, receipients, and message for the email

				params:

				&emsp;$to:		email receipient

				&emsp;$subject:	subject of email

				&emsp;$content:	body of email

				&emsp;$path:	path to file containing ajax information

				&emsp;$cc:		'carbon copy' receipients in email

				&emsp;$bcc:		'black carbon copy' receipients in email

				&emsp;$_headers: 

				calls:

				&emsp;call to mail()

				&emsp;called from php in current file
