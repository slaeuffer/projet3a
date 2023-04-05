import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const _API = 'http://node.hysope.ovh1.ec-m.fr:10429/api/reservation/';
@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private configUrl = environment.apiUrl;
  private configDomain = environment.apiDomain;

  constructor(
    private http: HttpClient
  ) { }

  addNewReservation(hour: string, date: string, companyId: number | string): Observable<any> {
    console.log(_API + 'add')
    return this.http.post(_API + 'add', {
      hour,
      date,
      companyId,
    }, httpOptions);
  }

  getReservation(companyId: number | string): Observable<any> {
    return this.http.get<any[]>(_API + `get/${companyId}`);
  }
}
