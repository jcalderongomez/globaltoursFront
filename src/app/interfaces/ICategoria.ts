export interface ICategoria {
    statusCode:    number;
    isExitoso:     boolean;
    errorMessages: null;
    resultado:     Categoria[];
}

export interface Categoria {
    id:     number;
    nombre: string;
    estado: boolean;
}
