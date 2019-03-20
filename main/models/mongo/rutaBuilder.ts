import Ruta from "./ruta";

export default class RutaBuilder {
    private ciudades: Ruta = new Ruta();

    public whatCodigo( codigo: string): RutaBuilder {
        this.ciudades.codigo = codigo;
        return this;
    }
    public whatCiudad( ciudad: string): RutaBuilder {
        this.ciudades.addCiudad(ciudad);
        return this;
    }

    public build(): Ruta {
        return this.ciudades;
    }
}