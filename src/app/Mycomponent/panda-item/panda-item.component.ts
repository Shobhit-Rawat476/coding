import { Component,EventEmitter,Input,OnInit, Output } from '@angular/core';
import { NodeStyleEventEmitter } from 'rxjs/internal/observable/fromEvent';
import { pandas } from 'src/app/pandas';

@Component({
  selector: 'app-panda-item',
  templateUrl: './panda-item.component.html',
  styleUrls: ['./panda-item.component.css']
})
export class PandaItemComponent implements OnInit {
  @Input()
  pandas: pandas = new pandas;
 @Output() pandasdelete: EventEmitter<pandas>=new EventEmitter();
  constructor(){

  }
  ngOnInit(): void {
    
  }
  onClick(pandas:pandas){
    this.pandasdelete.emit(pandas);
console.log("click is is triggered")
  }

}
function Ouyput() {
  throw new Error('Function not implemented.');
}

