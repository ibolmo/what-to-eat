
## What to eat...

1. Brainstorm

  Where to go
    - based on food restriction
    - based on nearby

    - foodies club
      + healthy coaches (playlist like)

    - grand opening happy hours
    - gamification (reward system)

    - based on history/experience
      - look at both user's and match make the best dinner
      Feature: Meal of the day (suggestion/recommendation)

  Party/catering planning
    - based on catering experience
    - based day of the week (weekday vs weekend)
      - pattern based recognition
  ~~Food types~~

  List of things, and strict choice
  Delivery, takeout, or dine-in
  ~~Budget to consider~~
  ~~Healthy vs. guilt~~
  Single vs. multiple user (group activity) experience
    - 1. who is in charge?
    - 2. how are things decided
      * providing choices, and default for "don't care"
    - 3. Something else chooses for you

  ## consider
   * white label software
   * rapid/rush (groupon) pricing

   ===



   ===

2. Persona

    Hungry harry wants to dine out with friends. Friends are remote and have
    no idea what they want.

    20-25 age groupo
    Male
    College (hard worker.. no time..)
    Income level: $30k - $50k  10%
      liquidity == $3 to $5k per year $250 ($15) - $420 ($21)

3. Behaviors

  6. [6] Hungry harry is eating out late (9:00 PM) and wants to know what to eat that is not fast food.
  3. [5] Hungry harry wants to try out a new place, but no one knows of anything new.
  4. [1] Hungry harry doesn't plan out ahead:
    a. doesn't know if there's space
    b. doesn't know how people will ride together
  5. [1] Hungry harry hates it when people don't pay their share, and the restaurant will not split.
  1. [0] Asks friends for their choice of foods/tastes.. and decides best fit.
  2. [0] Hungry harry and friends a typical hang out spot but he's not sure if they can come.

4. (1) Activity

  Hungry harry is eating out late (9:00 PM) and wants to know what to eat that is not fast food.

5. Features needed for the activity

Data of restaurants (Model)
  - name √
  - category (to exclude fast food) √
  - their operating hours √
  - location (maybe nearby first) √
  - images √

Sorting UI
  - add to maybe list
  - tinder right keep, left no

Invite friends
  - Use Facebook dialog ui API

6. Development
 - everything you've learned in class
  * web (html, js, css), express, gulp, eslint, jasmine, ...
 - limit anything new but approve limited plugins/etc
 - shortcuts are allowable
 - test.. test... test.... everything
 - design, copy, etc., let's assume we'll do it later
 - ideally:
  - local development
  - staging development
  - production development/deployment

# Packages
  Use Google Places API
   key: AIzaSyCQDgYLniH8zXKfbBwZRyYo_Eczx2xo0eY

  https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyCQDgYLniH8zXKfbBwZRyYo_Eczx2xo0eY&location=26.1977875,-98.2842146&radius=1000&radius=8000&opennow&types=meal_takeaway|cafe|restaurant

  * types is deprecated.. and will eventually go away

  Use Geolocation API  (Google) to get lat/lng

  Use SwingJS https://github.com/gajus/swing

  Facebook Auth

  Review: https://github.com/robert52/simple-geolocation

# Model

Restaurant:
  placeid:
    type: String
    unique: true
  name: String
  categories: [String]
  hours: String
  location:
    type: "Point",
    coordinates: [Number, Number]
 images: [String]
 stats:
  considered: Number
  ignored: Number
  chosen: Number
 google:
  created_at: String
  raw: Object

## Optional
GPS:
  user_id: String
  location:
    type: "Point"
    coordinates: [Number, Number]

User:
  history:
    -
      placeid: String
      name: String
      location: ...
    - ...

# Routes
Going Mobile UI first

/ (home)
  - Welcome, searching screen or your device is not supported

/gps
  - geolocate where I am~~, or default to where are you.~~
    + and save GPS
    + and save the restaurant information

/nearby (receives gps from backend, or based on session)
  - display "nearby" top 5 restaurants open with sorting UI
    + user swipes left to ignore
      * pop the restaurant, add another restaurant
    + user swipes right to consider
      * add restaurant to consider list (shopping cart-like)
      * pop the restaurant, add another restaurant
    + if no more restaurants nearby, then show final decision,
      screen if considering or ask for a refresh

/choose
  - user chooses shopping cart and makes final decision
    + decision chosen with button
      * increment stats on restaurant

/restaurant/:placeid
  - once chosen
    + display place information
      * name, hours, phone number
        -- lookup phone number to display
        -- save on the backend
    + have map driving instructions
