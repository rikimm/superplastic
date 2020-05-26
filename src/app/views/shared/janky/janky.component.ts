import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-janky',
  templateUrl: './janky.component.html',
  styleUrls: ['./janky.component.scss']
})
export class JankyComponent implements OnInit {
  @Input() item: any;
  @Input() select$: Observable<any>;
  selectItem: boolean = false;
  secctions;
  id;

  constructor() { }

  ngOnInit() {
    this.secctions = this.item["type"];
    this.id = this.item["id"];
    this.select$.subscribe(res => {
      if (this.id === res.id && this.secctions === res.type) {
        if (this.selectItem) {
          this.selectItem = false;
        } else {
          this.selectItem = true;
        }

      }
    });
  }

}
