export const rnd = (max = 256) => Math.random() * max;

export const generateColor = () => `rgb(${rnd()},${rnd()},${rnd()})`;
