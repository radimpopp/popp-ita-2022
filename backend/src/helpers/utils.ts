export const simplifiedInput = (value: string) =>
  value.toLowerCase().replace(/ /g, '').replace(/[y]/g, 'i')
