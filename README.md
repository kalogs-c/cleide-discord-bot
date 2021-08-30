# Cleide, the coolest discord music bot

This bot helps you enjoy songs with friends while on a discord channel.

Cleide is now on 1.0 and only supports Youtube. All messages are in Portuguese.

Deployed on Heroku

Summary
- <a href="#add">How to add on a server</a>
- <a href="#usage">How to use</a>
- <a href="#customize">Customize yourself</a>

<h2 id="add">How to add on a server</h2>
You can add Cleide on a server by <a href="https://discord.com/api/oauth2/authorize?client_id=881598066921189416&permissions=8&scope=bot">clicking here</a>

<h2 id="usage">How to use</h2>
Cleide now listens to 4 different commands, <code>ping</code>, <code>p</code>, <code>skip</code> and <code>stop</code>.
Before each command is necessary to type an exclamation mark "<code>!</code>"<br><br>

- <code>!ping</code>: Return the latency <br><br>
![Peek 30-08-2021 16-50](https://user-images.githubusercontent.com/68122899/131396782-b057e9ca-f19a-4cba-8cfa-3af347a41289.gif)
<hr>

- <code>!p song or playlist name or url</code>: Play a song or playlist <br>
<h4> - By name</h4>

![p](https://user-images.githubusercontent.com/68122899/131397853-6c747d77-8112-4b02-9977-e8a0ee892de1.gif)

<h4> - By url</h4>

![purl](https://user-images.githubusercontent.com/68122899/131398369-8be7ce9b-f001-4c82-aeda-045fc4540f79.gif)
<hr>

- <code>!skip</code>: Skip the current song<br><br>
![skip](https://user-images.githubusercontent.com/68122899/131399195-1cc6505b-034f-40ff-a8bd-e249eb959e9b.gif)
<hr>

- <code>!stop</code>: Stop the bot<br><br>
![stop](https://user-images.githubusercontent.com/68122899/131399576-3a3077a0-0ca3-4c26-85c4-8a982dbb83f5.gif)
<hr>


<h2 id="customize">Customize yourself</h2>

### Prerequisites

- <a href="https://nodejs.org/en/">Node 16.6 or newer</a>

### Cloning the repository

To run it on your localhost you will have to clone the repository.
You can download the files by <a href="https://github.com/carloshcamilo/cleide-discord-bot/archive/refs/heads/main.zip">clicking here</a>, using git typing the command: <code>git clone https://github.com/carloshcamilo/cleide-discord-bot</code> or <code>gh repo clone carloshcamilo/cleide-discord-bot</code> using github cli

### Installing dependencies

Go to the directory using the command <code>cd cleide-discord-bot</code> and install the dependencies typing <code>npm install</code> or <code>yarn</code> depending on which package manager are you using

### Running

Type <code>node .</code or <code>node index.js</code> to run the code. Be sure to be on the root folder
