import { Subject } from "../../subjects/models";
import { Alumno } from "../../alumnos/alumnos.component";
import { Curso } from "../../cursos/models";

export interface Inscripcion {
    id: number;
    studentId: number;
    courseId: number;
    subjectId: number;
}

export interface InscripcionWithStudent extends Inscripcion {
    student: Alumno;
    
}

export interface InscripcionWithSubject extends Inscripcion {
    subject: Subject;
    
}

export interface InscripcionWithCourse extends Inscripcion {
    course: Curso;
}

export type InscripcionWithAll = InscripcionWithStudent & InscripcionWithSubject & InscripcionWithCourse;