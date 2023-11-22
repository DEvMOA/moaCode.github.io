import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  hawaFaceSnap!: FaceSnap[]

  ngOnInit(): void {
    this.hawaFaceSnap = [ 
      {
        title: 'HAWA',
        description: "Chaque jour avec toi est une aventure, une histoire captivante où nos rires créent les chapitres et nos regards écrivent les vers. Ta présence est le trésor qui illumine mes jours, et ta tendresse est le refuge où mon âme trouve la paix.",
        imageUrl:'./assets/hawa.jpg',
        createdDate: new Date(),
        snaps: 9999 
      },
      {
          title: 'HAWA',
          description: "Chaque jour avec toi est une aventure, une histoire captivante où nos rires créent les chapitres et nos regards écrivent les vers. Ta présence est le trésor qui illumine mes jours, et ta tendresse est le refuge où mon âme trouve la paix.",
          imageUrl: './assets/hawa2.jpg',
          createdDate: new Date(),
          snaps: 9999
      },
      {
            title: 'HAWA',
            description: "Chaque jour avec toi est une aventure, une histoire captivante où nos rires créent les chapitres et nos regards écrivent les vers. Ta présence est le trésor qui illumine mes jours, et ta tendresse est le refuge où mon âme trouve la paix.",
            imageUrl: './assets/hawa3.jpg',
            createdDate: new Date(),
            snaps: 9999 
      }
    ];
  }    
}
