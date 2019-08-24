package com.linkedcour.monapp.controller;

import com.linkedcour.monapp.model.Reservation;
import com.linkedcour.monapp.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

import java.awt.*;

@RestController
@RequestMapping(ReservationResource.ROOM_V_1_RESERVATION)
@CrossOrigin
public class ReservationResource {
    public static final String ROOM_V_1_RESERVATION = "/room/v1/reservation";

    @Autowired
    private final ReservationService reservationService;

    public ReservationResource(ReservationService reservationService) {
        this.reservationService = reservationService;
    }

    @GetMapping(path = "{roomId}", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public Mono<Reservation> getReservationById(@PathVariable String roomId) {
        return reservationService.getReservation(roomId);
    }

    @PostMapping(path = "", produces = MediaType.APPLICATION_JSON_UTF8_VALUE, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public Mono<Reservation> createReservation(@RequestBody Mono<Reservation> reservation) {
        return reservationService.createReservation(reservation);
    }

    @PutMapping(path = "{roomId}", produces = MediaType.APPLICATION_JSON_UTF8_VALUE, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public Mono<Reservation> updatePrice(@PathVariable String roomId,
                                    @RequestBody Mono<Reservation> reservation) {

        return reservationService.updateReservation(roomId,reservation);
    }

    @DeleteMapping(path = "{roomId}")
    public Mono<Boolean> deleteReservation(@PathVariable String roomId) {

        return reservationService.deleteReservation(roomId);
    }
}
