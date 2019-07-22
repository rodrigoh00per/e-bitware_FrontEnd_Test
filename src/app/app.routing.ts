import { RouterModule, Routes } from "@angular/router";
import { PruebaRestComponent } from "../app/components/prueba-rest/prueba-rest.component";
import { PruebaPersonaComponent } from "./components/prueba-persona/prueba-persona.component";

// COMPONENTES COMPARTIDOS

const routes: Routes = [
  { path: "parte1", component: PruebaPersonaComponent },
  { path: "parte2", component: PruebaRestComponent }
];

export const appRouting = RouterModule.forRoot(routes, { useHash: true });
