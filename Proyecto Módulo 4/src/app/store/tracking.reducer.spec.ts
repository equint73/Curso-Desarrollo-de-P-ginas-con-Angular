
import { trackingReducer, initialState } from './tracking.reducer';
import { incrementTag } from './tracking.actions';

describe('trackingReducer', () => {
  it('debe retornar el estado inicial', () => {
    const state = trackingReducer(undefined as any, { type: '@@init' } as any);
    expect(state).toEqual(initialState);
  });

  it('debe incrementar el contador para un tag', () => {
    const s1 = trackingReducer(initialState, incrementTag({ tag: 'x' }));
    expect(s1.counts['x']).toBe(1);
    const s2 = trackingReducer(s1, incrementTag({ tag: 'x' }));
    expect(s2.counts['x']).toBe(2);
  });

  it('no debe mutar el estado original', () => {
    const s1 = trackingReducer(initialState, incrementTag({ tag: 'a' }));
    expect(s1).not.toBe(initialState);
  });
});
