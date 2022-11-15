class readFile
{
    readit(myfs,filename,res)
    {
        myfs.readFile(filename,(err,mydata)=>
   {
    if(err)
    {
        res.write(err)
        res.end()
    }
    else{
        res.write(mydata)
        res.end()
    }
   })
    }
    add_logic(res,a,b)
    {
        var c=parseInt(a)+parseInt(b)
        res.write('<h1 align="center"> sum is '+c+'</h1')
       
    }
}

const obj=new readFile()

module.exports=obj