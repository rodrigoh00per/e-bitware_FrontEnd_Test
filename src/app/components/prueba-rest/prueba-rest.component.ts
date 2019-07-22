import { Component, OnInit } from "@angular/core";
import { NutriNETService } from "src/app/services/nutri-net.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-prueba-rest",
  templateUrl: "./prueba-rest.component.html",
  styleUrls: ["./prueba-rest.component.css"]
})
export class PruebaRestComponent implements OnInit {
  sinData: Boolean = true;
  Cliente: any;
  constructor(private _nutriNETService: NutriNETService) {}

  ngOnInit() {
    this._nutriNETService.getCliente().subscribe(
      respuesta => {
        this.Cliente = respuesta.cliente;
      },
      () => {},
      () => {
        setTimeout(() => {
          this.sinData = false;
        }, 500);
      }
    );
  }
  registrarCliente(form) {
 /*    console.log(form); */

    let data = form.value;
    this._nutriNETService.postCliente(data).subscribe(resp => {
     /*  console.log(resp); */
      Swal.fire(
        `Usuario ${resp.cliente.Nombre} ${
          resp.cliente.Apellidos
        } Creado Correctamente`,
        `Id:${resp.CVE_MENSAJE}`,
        "success"
      );
    });
  }
  modificarCliente(miformulario) {
    let { id, Edad, Estatura, Peso, GEB } = miformulario.value;

    this._nutriNETService
      .putCliente(id, { Edad, Estatura, Peso, GEB })
      .subscribe(resp => {
      /*   console.log(resp); */
        if (resp.mensaje !== undefined) {
          Swal.fire(
            `Usuario no encontrado con ese ID 
            `,
            "",
            "error"
          );
          return null;
        }
        Swal.fire(
          `Usuario actualizado Correctamente
          `,
          `Id:${resp.CVE_MENSAJE}`,
          "success"
        );
      });
  }
}
