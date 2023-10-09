import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TimeSheet } from 'src/types';

import { environment } from 'src/environment';
@Injectable({
  providedIn: 'root',
})
export class TimesheetService {
  private apiUrl = 'https://tmatdpokndlzvqsexhch.supabase.co/rest/v1/timesheet';

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + environment.supabaseKey,
      apikey: environment.supabaseKey,
    }),
  };
  httpOptionsForUpdate = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + environment.supabaseKey,
      apikey: environment.supabaseKey,
    }),
  };
  getTimeSheets(userId: string): Observable<TimeSheet[]> {
    const urlForGetAll = `${this.apiUrl}?user_id=eq.${userId}&select=*`;
    return this.http.get<TimeSheet[]>(urlForGetAll, this.httpOptions);
  }

  updateTimeSheet(timesheet: TimeSheet): Observable<TimeSheet> {
    const urlForUpdate = `${this.apiUrl}?id=eq.${timesheet.id}`;
    return this.http.put<TimeSheet>(
      urlForUpdate,
      timesheet,
      this.httpOptionsForUpdate
    );
  }

  createTimeSheet(userId: string): Observable<TimeSheet[]> {
    const initialtimesheet = {
      user_id: userId,
    };

    return this.http.post<TimeSheet[]>(
      this.apiUrl,
      initialtimesheet,
      this.httpOptionsForUpdate
    );
  }
}
