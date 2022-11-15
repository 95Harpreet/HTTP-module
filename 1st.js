//http module
const htpp=require('http')
const port=1242
htpp.createServer((req,res)=>
{
    res.writeHead(200,{'content-type':'text/html'})
    res.write('<h1>Hello </h1>')
    res.write('<h1>')
    res.write('my name is harpreet')
    res.write('</h1>')
    res.end()
}).listen(port,()=>
{
    console.log(`click here http://localhost:${port}`)
})
