
import { createAction, props } from '@ngrx/store';
export const incrementTag = createAction('[Tracking] Increment', props<{ tag: string }>());
