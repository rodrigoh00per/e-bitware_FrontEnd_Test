import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class NutriNETService {
  private url = "https://examenrestbitware.herokuapp.com/";
  constructor(private http: HttpClient) {}

  getCliente(): Observable<any> {
    return this.http.get(`${this.url}NutriNET/Cliente`);
  }
  postCliente(cliente: any): Observable<any> {
    return this.http.post(`${this.url}NutriNET/Cliente`, cliente);
  }
  putCliente(id: String, cliente: any): Observable<any> {
    return this.http.put(`${this.url}NutriNET/Cliente/${id}`, cliente);
  }
}
