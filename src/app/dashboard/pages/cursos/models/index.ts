import { Subject } from "../../subjects/models";

export interface Curso {
    id:number;
    subjectId: number;
    start_date: Date;
    end_date: Date;
}

export interface CursoWithSubject extends Curso {
    subject: Subject;
}

export interface CrearCursoPayload {
    subjectId: number;
    start_date: Date;
    end_date: Date;
}