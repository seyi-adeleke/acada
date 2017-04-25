# acada
Video e-learning platform

# Description
ACADA is an open source community built with Nodejs, it allows developers share links of helpful videos.

# Application Features
* Authentication
* User Profile Management
* YouTube video embeding - Authenticated user only
* Browse all videos
* View single video

# Approach to the Solution
* Local Authentiation/Registration was achieved using passport and passport-local
* The MVC methodology was implemented, I created Models for both the users and videos and stored them into the database using a mongoose schema
* Routing was handled by express
* ejs was used for templating
