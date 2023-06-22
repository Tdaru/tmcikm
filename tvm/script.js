
function calculate()
{
    let notes={2000:Number(document.getElementById("2000").value),
                500:Number(document.getElementById("500").value),
                200:Number(document.getElementById("200").value),
                100:Number(document.getElementById("100").value),
                50:Number(document.getElementById("50").value),
                20:Number(document.getElementById("20").value),
                10:Number(document.getElementById("10").value),
                1:Number(document.getElementById("1").value)
};
    
    let totalAmount=0;
    for (const note in notes)
    {
        const count=notes[note]
        
        totalAmount+=count*note
        
    
    }
    document.getElementById("grandAns").value=totalAmount;
   
    
}
function getValue2000(val)
{
var result=val*2000
document.getElementById("2000ans").value=result


}

function getValue500(val)
{
   var result=val*500
   document.getElementById("500ans").value=result
   
}
function getValue200(val)
{
   var result=val*200
   document.getElementById("200ans").value=result
   
}
function getValue100(val)
{
   var result=val*100
   document.getElementById("100ans").value=result
   
}
function getValue50(val)
{
   var result=val*50
   document.getElementById("50ans").value=result
   
}
function getValue20(val)
{
   var result=val*20
   document.getElementById("20ans").value=result
   
}
function getValue10(val)
{
   var result=val*10
   document.getElementById("10ans").value=result
   
}
function getValue(val)
{
   var result=val*1
   document.getElementById("coinans").value=result
   
}

