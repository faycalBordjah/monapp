import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reservation-app';

  constructor(private http: HttpClient) {

  }

  private baseUrl: string = 'http://localhost:8080';
  private reservationUrl = this.baseUrl + '/room/v1/reservation';

  rooms: Room[];

  ngOnInit() {
    this.rooms = [new Room("123", "123", "200"),
      new Room("123", "123", "45"),
      new Room("156", "123", "23"),
      new Room("243", "123", "237")];
  }
}

export class Room {
  constructor(public id: string, public roomNumber: string, public price: string) {
    this.id = id;
    this.price = price;
    this.roomNumber = roomNumber;
  }
}
