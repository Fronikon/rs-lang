export const getSelectOptions = (countPage: number, name: string, colors: string[] | string = 'white') => {
  const arr = [];
  for(let i = 0; i < countPage; i++) {
    arr.push(
      <option
        style={{background: typeof colors === 'string' ? colors : colors[i]}}
        key={i}
        value={i}
      >{i + 1} {name}</option>);
  }
  return arr;
};