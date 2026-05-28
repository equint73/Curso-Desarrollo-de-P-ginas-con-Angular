
import { createReducer, on } from '@ngrx/store';
import { incrementTag } from './tracking.actions';

export interface TrackingState { counts: Record<string, number>; }
export const initialState: TrackingState = { counts: {} };

export const trackingReducer = createReducer(
  initialState,
  on(incrementTag, (state, { tag }) => {
    const current = state.counts[tag] || 0;
    return { counts: { ...state.counts, [tag]: current + 1 } };
  })
);
