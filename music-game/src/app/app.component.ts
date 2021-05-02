import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent {

  // choices = ["Ionian", "Dorian", "Phrygian", "Lydian", "Mixolydian", "Aeolian", "Locrian"]

  majorModes = [
    {
      name: "Ionian",
      audio: new Audio("assets/modesforgame.mp3"),
    },
    {
      name: "Dorian",
      audio: new Audio("assets/modesforgame2.mp3"),
    },
    {
      name: "Phrygian",
      audio: new Audio("assets/modesforgame3.mp3"),
    },
    {
      name: "Lydian",
      audio: new Audio("assets/modesforgame4.mp3"),
    },
    {
      name: "Mixolydian",
      audio: new Audio("assets/modesforgame5.mp3"),
    },
    {
      name: "Aeolian",
      audio: new Audio("assets/modesforgame6.mp3"),
    },
    {
      name: "Locrian",
      audio: new Audio("assets/modesforgame7.mp3"),
    },
  ]

  modeIndex:any;
  modeCurrent: any;

  startGame() {
    console.log('start game')
    this.modeIndex = Math.floor(Math.random() * this.majorModes.length);
    console.log(this.modeIndex) // number [0-6]
    this.modeCurrent = this.majorModes[this.modeIndex];
    console.log(this.modeCurrent.name);
    this.majorModes[this.modeIndex].audio.play();
  }

  playAudio() {
    console.log('play audio')
    this.majorModes[this.modeIndex].audio.play();
  }

  checkAnswer(x: number) {
    if (this.majorModes[x].name === this.modeCurrent.name) {
      alert("Correct! The answer was " + this.modeCurrent.name);
      this.startGame();
    } else {
      alert("Wrong answer, try again!")
    };
  }



}
