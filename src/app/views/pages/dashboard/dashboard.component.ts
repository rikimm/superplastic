import { Component, OnInit } from '@angular/core';
import { JankyService } from 'src/app/services/janky.service';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  selectJanky$: Observable<any>;
  selectSubject = new Subject<any>();
  jankys;
  titles = [];
  selectJanky = []

  constructor(
    private jankyService: JankyService
  ) { }

  ngOnInit() {
    this.jankyService.getJanky().subscribe(res => {

      this.jankys = res;
      for (const key in res) {
        this.titles.push(key)
      }


    })
    // setTimeout(()=>{
    //   this.selectSubject.next("hola")
    // },5000)
  }
  jankySelect(categoria, id) {
    for (const key in this.jankys[categoria]) {
      if (this.jankys[categoria][key]["id"] === id) {
        if (this.selectJanky.includes(this.jankys[categoria][key])) {
          let index = this.selectJanky.indexOf(this.jankys[categoria][key])
          this.selectJanky.splice(index, 1)
          let obj = {
            type:this.jankys[categoria][key]["type"],
            id:this.jankys[categoria][key]["id"]
          }
          this.selectSubject.next(obj)
        } else {
          this.selectJanky.push(this.jankys[categoria][key])
          let obj = {
            type:this.jankys[categoria][key]["type"],
            id:this.jankys[categoria][key]["id"]
          }
          this.selectSubject.next(obj)
        }
      }
    }
  }

  createImage(){
    console.log(this.selectJanky)
  }

}
