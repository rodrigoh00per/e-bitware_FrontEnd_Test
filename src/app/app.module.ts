import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { PruebaPersonaComponent } from "./components/prueba-persona/prueba-persona.component";
import { PruebaRestComponent } from "./components/prueba-rest/prueba-rest.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { appRouting } from "./app.routing";

@NgModule({
  declarations: [AppComponent, PruebaPersonaComponent, PruebaRestComponent],
  imports: [BrowserModule, HttpClientModule, appRouting, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
