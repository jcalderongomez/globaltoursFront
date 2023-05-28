export interface ILugar {
    statusCode:    number;
    isExitoso:     boolean;
    errorMessages: null;
    resultado:     Lugar[];
}

export interface Lugar {
    id:              number;
    nombre:          string;
    descripcion:     string;
    gastoAproximado: number;
    imagenUrl:       string;
    pais:            null;
    categoria:       null;
}
