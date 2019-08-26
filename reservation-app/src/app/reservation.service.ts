import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {


  constructor(private http: HttpClient) {

  }

  private baseUrl: string = 'http://localhost:8080';
  private reservationUrl = this.baseUrl + '/room/v1/reservation';

  createReservation(body: ReservationRequest): Observable<Reservation> {
    let options = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.post<Reservation>(this.reservationUrl, body, options);
  }

  getAllReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.reservationUrl);
  }

}

export class ReservationRequest {

  constructor(private roomNumber: number,
              private price: number,
              private checkIn: string,
              private checkOut: string) {
    this.roomNumber = roomNumber;
    this.price = price;
    this.checkIn = checkIn;
    this.checkOut = checkOut;

  }


}

export interface Reservation {
  id: string;
  price: number;
  roomNumber: number;
  checkIn: Date;
  checkOut: Date
}
