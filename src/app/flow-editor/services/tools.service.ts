export const GetCenterElement = (el: HTMLElement): {x: number, y: number} => {
  const rect = el.getBoundingClientRect();
  const x = (rect.right - rect.left) / 2;
  const y = (rect.bottom - rect.top) / 2;

  return {x: x, y: y};
};
