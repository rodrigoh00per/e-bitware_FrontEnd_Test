import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Examen";

  constructor(private _router: Router) {}
  irParte1() {
    this._router.navigate(["/parte1"]);
  }
  irParte2() {
    this._router.navigate(["/parte2"]);
  }
}
