import { map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Endereco } from '../models/Endereco.model';

@Injectable({
  providedIn: 'root',
})
export class CepService {
  private readonly URL = 'https://viacep.com.br/ws';

  constructor(private http: HttpClient) {}

  buscarCep(cep: string): Observable<Endereco> {
    return this.http.get<Endereco>(`${this.URL}/${cep}/json`).pipe(
      map((endereco: any) => {
        return {
          cep: endereco.cep,
          cidade: endereco.localidade,
          estado: endereco.uf,
          logradouro: endereco.logradouro,
          bairro: endereco.bairro,
        } as Endereco;
      })
    );
  }
}