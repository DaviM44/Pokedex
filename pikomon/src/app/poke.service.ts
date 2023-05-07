import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Poke } from './poke';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  constructor(private http: HttpClient) { }

  public idPesquisa: string = "1";

  getPoke(): Observable<Poke> {
    return this.http.get<Poke>("https://pokeapi.co/api/v2/pokemon/"+ this.idPesquisa)
  }
}