import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-panel',
  templateUrl: './star-panel.component.html',
  styleUrls: ['./star-panel.component.css'],
})
export class StarPanelComponent {
  @Input() rating!: number;

  stars: boolean[] = [];

  constructor() {}

  ngOnInit(): void {
    for (let i = 0; i < this.rating; i++) this.stars.push(true);
    for (let i = this.rating; i < 5; i++) this.stars.push(false);
  }
}
