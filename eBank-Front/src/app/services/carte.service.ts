import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Compte} from "../models/Compte";
import {Observable} from "rxjs";
import {Carte} from "../models/Carte";
import {CarteBloque} from "../models/CarteBloque";

@Injectable({
  providedIn: 'root'
})
export class CarteService {

  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:8081/compte/cart';
  }
  public creerCart(cart: Carte): Observable<Carte> {
    return this.http.post<Carte>(`${this.apiUrl}/creerCart`,cart);
  }
  public activerCart(numeroCarte: string): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/activerCart/${numeroCarte}`,{});
  }
  public desactiverCart(numeroCarte: string): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/desactiverCart/${numeroCarte}`,{});
  }
  public bloqueCart(numeroCarte: string,raison: string): Observable<CarteBloque> {
    return this.http.post<CarteBloque>(`${this.apiUrl}/bloqueCart/${numeroCarte}/${raison}`,{});
  }
  public getPinCart(numeroCarte: string): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/getPin/${numeroCarte}`,{});
  }
  public connectCart(numeroCarte: string,codePin: number): Observable<Carte> {
    return this.http.get<Carte>(`${this.apiUrl}/connectCart/${numeroCarte}/${codePin}`,{});
  }

}