export class Persona {
  private _nombre: String = "";
  private _edad: number = 0;
  private _NSS: String;
  private _sexo: String = "Masculino";
  private _peso: number = 0;
  private _altura: number = 0;

  //CONSTRUCTORES
  constructor();
  constructor(nombre: String, edad: number, sexo: String);
  constructor(
    nombre: String,
    edad: number,
    sexo: String,

    peso: Number,
    altura: Number
  );
  constructor(
    nombre?: String,
    edad?: number,
    sexo?: String,
    peso?: number,
    altura?: number
  ) {
    if (nombre !== undefined) this._nombre = nombre;
    if (edad !== undefined) this._edad = edad;

    this.generarNSS();

    if (sexo !== undefined) this._sexo = sexo;
    if (peso !== undefined) this._peso = peso;
    if (altura !== undefined) this._altura = altura;
  }

  //SETTERS
  set nombre(nombre: String) {
    this._nombre = nombre;
  }

  set edad(edad: number) {
    this._edad = edad;
  }

  set sexo(sexo: String) {
    this._sexo = sexo;
  }

  set peso(peso: number) {
    this._peso = peso;
  }

  set altura(altura: number) {
    this._altura = altura;
  }

  //metodos a implementar

  calcularIMC = () => {
    if (this._peso === 0 && this._altura === 0) return -1;
    let imc = this._peso / Math.pow(this._altura, 2);
    if (this._sexo === "Masculino") {
      if (imc < 20) return -1;
      else if (imc => 20 && imc <= 25) return 0;
      else return 1;
    } else {
      if (imc < 19) return -1;
      else if (imc => 19 && imc <= 24) return 0;
      else return 1;
    }
  };

  esMayorDeEdad = (): Boolean => (this._edad > 17 ? true : false);
  comprobarSexo = (sexo: String) =>
    sexo === "Masculino" || sexo === "Femenino" ? true : false;
  toString = () =>
    `Nombre:${this._nombre} - Edad:${this._edad} - Sexo:${this._sexo} - NSS:${
      this._NSS
    } - Peso:${this._peso} - Altura: ${this._altura} `;

  private generarNSS() {
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    var string_length = 8;
    var randomstring = "";
    for (var i = 0; i < string_length; i++) {
      let rnum = Math.floor(Math.random() * chars.length);
      randomstring += chars.substring(rnum, rnum + 1);
    }
    this._NSS = randomstring;
  }
}
