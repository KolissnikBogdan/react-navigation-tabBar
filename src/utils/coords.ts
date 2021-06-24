export const cartesianToPolar = (x: any, y: any, cx: any, cy: any) => {
  return Math.round(
    Math.atan((y - cy) / (x - cx)) / (Math.PI / 180) + (x > cx ? 270 : 90),
  );
};
