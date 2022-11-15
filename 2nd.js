//http module
const htpp=require('http')
const myfs=require('fs')
const myobject=require('./controller/readfile')
const url=require('url')
const myformidable=require('formidable')
const { parse } = require('path')

const port=1242

htpp.createServer((req,res)=>
{
    res.writeHead(200,{'content-type':'text/html'})
    if(req.url=='/')
    {
        myobject.readit(myfs,'home.html',res)
    }

   

else if(req.url=='/chandigarh')

{
    myobject.readit(myfs,'about.html',res)
}
 
else if(req.url=='/har')
{
    myobject.readit(myfs,'contact.html',res)
}
else if(req.url=='/add_now')
{
    myobject.readit(myfs,'addition.html',res)
}
else if(url.parse(req.url,true).pathname=='/find_sum')
{
    console.log('my path is'+url.parse(req.url,true).pathname)
    var myquery=url.parse(req.url,true)
    var finalquery=myquery.query
    var a=finalquery.a1
    var b=finalquery.b1
       
    myobject.add_logic(res,a,b)
}
else if(req.url=='/find_sub')
{
    var myform=new myformidable.IncomingForm()
    myform.parse(req,(err,fields,files)=>
    {
        var a=fields.a1
        var b=fields.b1
        var c=parseInt(a)-parseInt(b)
        res.write('subtraction is '+c)
        res.end()
    })
}
else if(req.url=='/sub')
{
    myobject.readit(myfs,'subtraction.html',res)
}

else if(req.url=='/file_now')
{
    myobject.readit(myfs,'imagetoupload.html',res)
}


else if(req.url=='/upload_here')
{
    var myform=new myformidable.IncomingForm()
    myform.parse(req,(err,fields,files)=>
    {
        var path=files.fname.filepath
        var new_path="./images/"+files.fname.originalFilename
        myfs.rename(path,new_path,(err)=>
        {
            
                res.write('file write successfully')
                res.end()
            
        })
    })
}



}).listen(port,()=>
{
    console.log(`click here http://localhost:${port}`)
})
