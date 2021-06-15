import { line, curveBasis } from 'd3-shape';

import { ILine } from 'models/shape';

export const lineGenerator = line<ILine>()
  .x(({ x }: ILine) => x)
  .y(({ y }: ILine) => y);

export const curveLineGenerator = line<ILine>()
  .curve(curveBasis)
  .x(({ x }: ILine) => x)
  .y(({ y }: ILine) => y);
