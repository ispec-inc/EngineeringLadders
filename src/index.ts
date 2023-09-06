const gen = (label: string, data: string) => {
  return `https://quickchart.io/chart?c={type:'radar',data:{labels:['Tech','System','People','Process','Influence'],datasets:[{label: '${label}',data:[${data}],borderWidth:1,borderColor:'rgba(75,+192,+192,+1)',backgroundColor:'rgba(75,+192,+192,+0.2)'}]},options:{scale:{ticks:{beginAtZero:true,max:5}}}}&w=500&h=300&bkg=#ffffff&f=png&v=2`
}

Deno.serve(async (req: Request) => {
    const u = new URL(req.url);
    const tech = u.searchParams.get("tech") || 0
    const system = u.searchParams.get("system") || 0
    const people = u.searchParams.get("people") || 0
    const process = u.searchParams.get("process") || 0
    const influence = u.searchParams.get("influence") || 0
    const label = u.searchParams.get("t") || "Ladder"

    const q = `${tech},${system},${people},${process},${influence}`

    const url = gen(label, q)
    const response = await fetch(url);
    const buf = await response.arrayBuffer();

    const body = new Uint8Array(buf)
    return new Response(body, { headers: { "Content-Type": "image/png" } })
});
