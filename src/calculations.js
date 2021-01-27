import dayjs from 'dayjs';

function CalculateBiorhythm(birthDate, targetDate, cycle) {
    const birthDay = dayjs(birthDate).startOf('day');
    const targetDay = dayjs(targetDate).startOf('day');
    const diff = targetDay.diff(birthDay,'days');

    return Math.sin((2*Math.PI*diff)/cycle);
}

export function CalculateBiorhythms(birthDate, targetDate) {
    return {
        date: targetDate,
        physical: CalculateBiorhythm(birthDate, targetDate, 23),
        emotional: CalculateBiorhythm(birthDate, targetDate, 28),
        intellectual: CalculateBiorhythm(birthDate, targetDate, 33),
    };
}

export function CalculateBiorhythmSeries(birthDate, startDate,size) {
    const series = []
    const startDay = dayjs(startDate).startOf('day');
    for (let i=0; i<size; i++) {
        const targetDate = startDay.add(i, 'day').toISOString();
        series.push(CalculateBiorhythms(birthDate, targetDate));
    }
    return series;
}