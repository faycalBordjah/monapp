package com.linkedcour.monapp.service;

import com.linkedcour.monapp.model.Reservation;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface ReservationService {

    public Mono<Reservation> getReservation(String id);
    public Mono<Reservation> createReservation(Mono<Reservation> reservationMono);
    public Mono<Reservation> updateReservation(String id, Mono<Reservation> reservationMono);
    public Mono<Boolean> deleteReservation(String id);
    public Flux<Reservation> listAllReservations();

}
