import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Reservation, ReservationRequest, ReservationService} from "./reservation.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reservation-app';


  constructor(private reservationService: ReservationService) {
    this.reservationService = reservationService;
  }

  roomSearchControl: FormGroup;
  reservations: Reservation[];
  rooms: Room[];
  currentCheckIn: string;
  currentCheckOut: string;
  currentRoomNumber: number;
  currentPrice: number;

  ngOnInit() {
    this.roomSearchControl = new FormGroup(
      {
        checkIn: new FormControl(''),
        checkOut: new FormControl(''),
        roomNumber: new FormControl('')
      });

    this.roomSearchControl.valueChanges.subscribe(form => {
      this.currentCheckIn = form.checkIn;
      this.currentCheckOut = form.checkOut;
      if (form.roomNumber) {
        let roomValues: string[] = form.roomNumber.split('|');
        this.currentRoomNumber = Number(roomValues[0]);
        this.currentPrice = Number(roomValues[1]);
      }
      console.log(this.currentCheckIn);
      console.log(this.currentCheckOut);
      console.log(this.currentRoomNumber);
      console.log(this.currentPrice);
    });

    this.rooms = [new Room("123", "123", "200"),
      new Room("123", "145", "45"),
      new Room("156", "56", "23"),
      new Room("243", "78", "237")];
    this.getCurrentReservations();
  }

  createReservation() {
    this.reservationService.createReservation(
      new ReservationRequest(this.currentRoomNumber, this.currentPrice, this.currentCheckIn, this.currentCheckOut)
    ).subscribe(result => console.log(result));
    this.getCurrentReservations();
  }

  getCurrentReservations() {
    this.reservationService.getAllReservations().subscribe(result => {
        console.log(result);
        this.reservations = result;
      }
    )
    ;

  }
}

export class Room {
  constructor(public id: string, public roomNumber: string, public price: string) {
    this.id = id;
    this.price = price;
    this.roomNumber = roomNumber;
  }
}
