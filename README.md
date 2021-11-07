# Openboard Project (Clone) [click here](https://openboard-paridhi.herokuapp.com/)

### Project Desciption:
The project comprises of basic openboard functionalities such as, writing, erasing, downloading the canvas, adding notes (with minimising it, closing it, dragging it around on the page), uploading the image (features same as of notes), undo and redo actions. <br>
Added realtime drawing functionality using socket.io by connecting to server using Express.js

![Screenshot (182)](https://user-images.githubusercontent.com/53166430/139396117-a88de1d2-9536-4c20-a130-0de2050cfb64.png)

#### Adding notes and uploading image:
Using green button, we can minimise the notes and by clicking red button, notes can be closed. Similarly for uploading images. <br>

![Screenshot (185)](https://user-images.githubusercontent.com/53166430/139419145-6037dbb0-edf4-4ac1-8a41-6f3efc0bfa4c.png)

#### Realtime drawing:
Realtime drawing can be achieved by the people using same link at same time.

![Screenshot (186)](https://user-images.githubusercontent.com/53166430/139420253-edc8dab7-4589-4069-a0cb-f5e3bf24f648.png)

### Tech Stack used:
- HTML
- CSS
- JavaScript (Express.js for backend)
- socket.io

### Run on your local machine:
Replace `https://clone-openboard.herokuapp.com/` with `http://localhost:3000/` in `index.html`file. <br>
Open the folder in VS code. Open terminal and write these commands: <br>
```
npm init
```
Press Enter. Then,
```
npm install socket.io
npm install --save-dev nodemon
node app.js
```
Now open the browser and type `localhost:3000`.

