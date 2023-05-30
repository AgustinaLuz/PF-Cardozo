import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const InscripcionesActions = createActionGroup({
  source: 'Inscripciones',
  events: {
    'Load Inscripciones': emptyProps(),
    'Load Inscripciones Success': props<{ data: unknown }>(),
    'Load Inscripciones Failure': props<{ error: unknown }>(),
  }
});
