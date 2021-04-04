# Study Garden

Improve focus and discipline with this timer app. Study until the timer runs out and add plants to your personal garden. This is a recreation of the popuolar [Forest](https://www.forestapp.cc/) app for the browser.

<p align="center">
	<a href="#technologies">Technologies</a> •
  <a href="#setup">Setup</a>  •
   <a href="#app-overview">App Overview</a> •
  <a href="#status">Status</a> 
</p>

<hr>

<div style="text-align:center"><img src="./client/src/images/screenshot.jpg" /></div>

## Technologies:
- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [React Router](https://reactrouter.com/)

## Setup:
```bash
# Clone this repository
$ git clone https://github.com/spencerlepine/study-garden.git
```
- Create the ```.env``` file in the ```/server``` directory
- Connect your MongoDB Cluster with you URL:
```CONNECTION_URL=mongodb+srv://<USER>:<PASSWORD>@cluster0.5qf6a.mongodb.net/<databaseName>?retryWrites=true&w=majority```
- Install dependencies and RUN the app:

```bash
# Go into the client repository
$ cd study-garden/client

# Install dependencies
$ npm install

# Run the app
$ npm start

# Go into the server repository
$ cd study-garden/server

# Install dependencies
$ npm install

# Run the app
$ npm start
```
## App Overview:
- **Landing page:** view the personal garden from data stored in the MongoDB.
- **Store:** choose your plant to grow
- **Countdown:** set and run the study timer


## Status:
''Completed''. This project is the foundation for the concept. Styles can be improved, features could be added.

- User Authentication
- Store/Credit system
- Graphs/Charts
- Progress bar for timer
- Minimum plant time (realistic study time)
- Warn user when closing timer
- Give up button is red

---

> [spencerlepine.com](https://www.spencerlepine.com) &nbsp;&middot;&nbsp; GitHub [@spencerlepine](https://github.com/spencerlepine) &nbsp;&middot;&nbsp; Twitter [@spencerlepine](http://twitter.com/spencerlepine)
