import { Component, OnInit } from "@angular/core";
import { Persona } from "src/app/classes/Persona";

@Component({
  selector: "app-prueba-persona",
  templateUrl: "./prueba-persona.component.html",
  styleUrls: ["./prueba-persona.component.css"]
})
export class PruebaPersonaComponent implements OnInit {
  personaObj1: Persona;
  personaObj2: Persona;
  personaObj3: Persona;
  hayInfo: Boolean = false;

  constructor() {}

  ngOnInit() {}
  calcular(form) {
    this.hayInfo = true;
    let { nombre, edad, sexo, peso, altura } = form.value;
    //Primer Objeto
    this.personaObj1 = new Persona(nombre, edad, sexo, peso, altura);

    this.personaObj2 = new Persona(nombre, edad, sexo);

    this.personaObj3 = new Persona();
    this.personaObj3.nombre = "Juanita Gominola";
    this.personaObj3.edad = 50;
    this.personaObj3.sexo = "Femenino";
    this.personaObj3.peso = 50;
    this.personaObj3.altura = 1.45;
    /*   console.log(this.personaObj3.toString()); */
  }
}
