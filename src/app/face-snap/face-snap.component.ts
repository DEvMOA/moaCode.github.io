import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap
  click!: boolean
  btnClick!: string

  ngOnInit(): void {
    this.btnClick = "❤️"
    this.click = false
  }

  onClickSnaps() {
    if (this.click==false) {
    this.btnClick = "💔"
    this.faceSnap.snaps++;
    this.click = true
    } else {
      this.btnClick = "❤️"
      this.faceSnap.snaps--
      this.click = false
    }  
}

}
  
