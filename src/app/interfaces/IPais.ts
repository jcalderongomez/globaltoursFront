export interface IPais {
    statusCode:    number;
    isExitoso:     boolean;
    errorMessages: null;
    resultado:     Pais[];
}

export interface Pais {
    id:     number;
    nombre: string;
    estado: boolean;
}
