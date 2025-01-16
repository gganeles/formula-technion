
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
    const idValue = data.get('id')
    const r = await fetch(`https://floral-dust-97dd.technionfs.workers.dev/?id=${idValue}`,{
      method: "DELETE"
    })
    return {success: true, data: await r.text()}
  }
}