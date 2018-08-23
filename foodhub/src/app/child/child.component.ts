import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ViewContainerRef } from '@angular/core';
import { CompAdderService } from '../comp-adder.service';
import { DetailsComponent } from '../details/details.component';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() itemToAdd: string;
  @Output() result: EventEmitter<string> = new EventEmitter();

  @ViewChild('placeholder', {read: ViewContainerRef}) inPos: ViewContainerRef;

  constructor(private service: CompAdderService) { }

  ngOnInit() {
  }
  confirm()  {
    this.result.emit(this.itemToAdd + 'Added');
    this.service.setViewRef(this.inPos);
    this.service.addComponent(DetailsComponent);

  }
}
