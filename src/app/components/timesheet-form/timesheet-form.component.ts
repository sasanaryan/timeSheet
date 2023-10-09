import { Component, OnInit } from '@angular/core';
import { TimeSheet } from 'src/types';
import { TimesheetService } from 'src/app/timesheet.service';
import { SupabaseService } from 'src/app/supabase.service';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet-form.component.html',
  styleUrls: ['./timesheet-form.component.css'],
})
export class TimesheetFormComponent implements OnInit {
  timesheets: TimeSheet[] = [{}];
  user: any;
  userId?: string;
  constructor(
    private timesheetService: TimesheetService,
    private readonly supabase: SupabaseService
  ) {}
  getAll() {
    this.timesheetService
      .getTimeSheets(this.userId!)
      .subscribe((timesheets) => this.sortAndApply(timesheets));
  }
  sortAndApply(timeshets: TimeSheet[]) {
    let sortedTimesheets = timeshets.sort(
      (a: any, b: any) => a?.sort - b?.sort
    );
    this.timesheets = sortedTimesheets;
  }

  ngOnInit(): void {
    this.userId = this.supabase._session?.user.id;
    this.getAll();
  }

  updateTimesheet(timesheet: TimeSheet) {
    this.timesheetService.updateTimeSheet(timesheet).subscribe();
  }
  createTimesheet() {
    this.timesheetService
      .createTimeSheet(this.userId!)
      .subscribe(() => this.getAll());
  }
}
