import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioApiHomeService {

  constructor(private http: HttpClient) { }

  obtenerdatosCryptoBitcoin(): Observable<any> {
    const api = `https://api.coingecko.com/api/v3/coins/ethereum?x_cg_demo_api_key=CG-sMGXqydcVWWLC9MpX89Pkf9T`;
    return this.http.get<any>(api);
  }

  obtenerAllCryptos(page:number): Observable<any> {
    const apiAll = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=${page}&sparkline=false&x_cg_demo_api_key=CG-sMGXqydcVWWLC9MpX89Pkf9T`;
    return this.http.get<any>(apiAll);
  }

  obtenerCryptoSearch(crypto:String): Observable<any>{
    const apiSearch = `https://api.coingecko.com/api/v3/search?query=${crypto}?x_cg_demo_api_key=CG-sMGXqydcVWWLC9MpX89Pkf9T`
    console.log(crypto)
    return this.http.get<any>(apiSearch)

  }
}
