import {CalculateBiorhythms} from './calculations';

it('calculates the physical biorhythm', () => {
    const {physical} = CalculateBiorhythms('05-08-2003', '01-22-2021')
    expect(physical).toBeCloseTo(.9977);})
it('calculates the emotional biorhythm', () => {
    const {emotional} = CalculateBiorhythms('05-08-2003', '01-22-2021')
    expect(emotional).toBeCloseTo(.2225);})
it('calculates the intellectual biorhythm', () => {
    const {intellectual} = CalculateBiorhythms('05-08-2003', '01-22-2021')
    expect(intellectual).toBeCloseTo(.1893);
})