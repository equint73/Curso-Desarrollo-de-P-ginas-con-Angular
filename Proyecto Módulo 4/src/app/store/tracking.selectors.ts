
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TrackingState } from './tracking.reducer';

export const selectTracking = createFeatureSelector<TrackingState>('tracking');
export const selectAllTagCounts = createSelector(selectTracking, s => s.counts);
