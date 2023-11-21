import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  zainabFaceSnap!: FaceSnap
  zainabFaceSnap2!: FaceSnap
  zainabFaceSnap3!: FaceSnap

  ngOnInit(): void {
      this.zainabFaceSnap = new FaceSnap(
        'Zainab',
        "Chaque jour avec toi est une aventure, une histoire captivante où nos rires créent les chapitres et nos regards écrivent les vers. Ta présence est le trésor qui illumine mes jours, et ta tendresse est le refuge où mon âme trouve la paix.",
        'src/assets/zainab.jpg',
        new Date(),
        9999
      );

      this.zainabFaceSnap2 = new FaceSnap(
        'Zainab',
        "Dans le doux éclat de chaque instant partagé, je trouve la lumière de mon bonheur. Ton amour est une mélodie douce qui résonne dans mon cœur, une symphonie envoûtante qui danse dans l'air que nous partageons.",
        "./assets/zainab2.jpg",
        new Date(),
        9999
      );
      
      this.zainabFaceSnap3 = new FaceSnap(
        'Zainab',
        "Tes yeux sont des étoiles qui illuminent mes nuits, et ta voix est une douce mélodie qui calme les tempêtes de la vie. À travers les hauts et les bas, c'est avec toi que je veux parcourir ce voyage qu'est l'amour.",
        "./assets/zainab3.jpg",
        new Date(),
        9999
      );
  }
 }
