
export async function load() {
  const r = await fetch('https://floral-dust-97dd.technionfs.workers.dev/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }})
  if (r.status !== 200){
    return {data: []}
  }
  const data = await r.json()
  return {data};
}



/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    const data = await request.formData()
    const stateSymbol = Object.getOwnPropertySymbols(data)[0];
    const stateValue = data[stateSymbol];
    const idValue = stateValue.find(entry => entry.name === 'id').value;

    const r = await fetch(`https://floral-dust-97dd.technionfs.workers.dev/?id=${idValue}`,{
      method: "DELETE"
    })
  }
}