import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TimeSheet } from 'src/types';
@Component({
  selector: 'app-time-item',
  templateUrl: './time-item.component.html',
  styleUrls: ['./time-item.component.css'],
})
export class TimeItemComponent {
  @Input() timesheet: TimeSheet;
  @Input() index: number;
  @Output() onupdateTimesheet: EventEmitter<TimeSheet> = new EventEmitter();

  onUpdate(timesheet: TimeSheet) {
    this.onupdateTimesheet.emit(timesheet);
  }
}
