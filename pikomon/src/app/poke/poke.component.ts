import { Component } from '@angular/core';
import { Poke } from '../poke';
import { PokeService } from '../poke.service';

@Component({
  selector: 'app-poke',
  templateUrl: './poke.component.html',
  styleUrls: ['./poke.component.css']
})
export class PokeComponent {
  poke: Poke = {} as Poke;

  private proximoId: number = 1;

  constructor(private service: PokeService) { }

  ngOnInit(): void {
    this.loadPoke();
  }

  loadPoke() {
    this.service.idPesquisa = this.proximoId.toString();
    this.service.getPoke().subscribe(
      {
        next: data => {
          this.poke = data;
          this.poke.img = data.sprites.other.home.front_default;
        }
      }
    );
  }

  proximoPoke() {
    this.proximoId = this.proximoId + 1;
    this.service.idPesquisa = this.proximoId.toString();
    this.service.getPoke().subscribe(
      {
        next: data => {
          this.poke = data;
          this.poke.img = data.sprites.other.home.front_default;
        }
      }
    );
  }

  anteriorPoke() {
    this.proximoId = this.proximoId - 1;
    this.service.idPesquisa = this.proximoId.toString();
    this.service.getPoke().subscribe(
      {
        next: data => {
          this.poke = data;
          this.poke.img = data.sprites.other.home.front_default;
        }
      }
    );
  }
}