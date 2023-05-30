import { createFeature, createReducer, on } from '@ngrx/store';
import { InscripcionesActions } from './inscripciones.actions';

export const inscripcionesFeatureKey = 'inscripciones';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,
  on(InscripcionesActions.loadInscripciones, state => state),
  on(InscripcionesActions.loadInscripcionesSuccess, (state, action) => state),
  on(InscripcionesActions.loadInscripcionesFailure, (state, action) => state),
);

export const inscripcionesFeature = createFeature({
  name: inscripcionesFeatureKey,
  reducer,
});

