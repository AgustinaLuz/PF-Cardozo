export interface Curso {
    id:number;
    name: string;
    start_date: Date;
    end_date: Date;
}

export interface CrearCursoPayload {
    name: string;
    start_date: Date;
    end_date: Date;
}