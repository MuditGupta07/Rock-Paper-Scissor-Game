let arr=['Rock','Paper','Scissor']
let r=document.getElementById("rock")
let p=document.getElementById("paper")
let s=document.getElementById("scissor")
let d=document.getElementById("dis")
let msg=document.getElementById("msg")
let scr=document.getElementById("score")
let res=document.getElementById("reset")
let y=''
let dis=''
let won=0,loose=0,tr=0
score()
function score(){
    let sco=`Score: \t\t Won: ${won} \t\t Loose: ${loose} \t\t Tie: ${tr}`
    scr.innerText=sco
}
r.addEventListener("click",function(){
    y+='Rock'
    let ran=Math.floor(Math.random()*3)
    let c=arr[ran]
    let m=''
    if(c=='Scissor'){
        m+=`Congrats! ${y} beats ${c} you won.`
        msg.innerText=`You Choose: ${y}`+'\n'+`Computer Choose: ${c}`+'\n'+`${m} `
        won+=1
        score()
    }
    else if(c=='Paper'){
        m+=`Opps! ${y} got beaten by ${c} you loose.`
        msg.innerText=`You Choose: ${y}`+'\n'+`Computer Choose: ${c}`+'\n'+`${m} `
        loose+=1
        score()
    }
    else{
        m+=`Ahh! ${y} and ${c} it's a tie.`
        msg.innerText=`You Choose: ${y}`+'\n'+`Computer Choose: ${c}`+'\n'+`${m} `
        tr+=1
        score()
    }
    y=''
})
p.addEventListener("click",function(){
    y+='Paper'
    let ran=Math.floor(Math.random()*3)
    let c=arr[ran]
    let m=''
    if(c=='Rock'){
        m+=` Congrats! ${y} beats ${c} you won.`
        msg.innerText=`You Choose: ${y}`+'\n'+`Computer Choose: ${c}`+'\n'+`${m} `
        won+=1
        score()
    }
    else if(c=='Scissor'){
        m+=` Opps! ${y} got beaten by ${c} you loose.`
        msg.innerText=`You Choose: ${y}`+'\n'+`Computer Choose: ${c}`+'\n'+`${m} `
        loose+=1
        score()
    }
    else{
        m+=` Ahh! ${y} and ${c} it's a tie.`
        msg.innerText=`You Choose: ${y}`+'\n'+`Computer Choose: ${c}`+'\n'+`${m} `
        tr+=1
        score()
    }
    y=''
})
s.addEventListener("click",function(){
    y+='Scissor'
    let ran=Math.floor(Math.random()*3)
    let c=arr[ran]
    let m=''
    if(c=='Paper'){
        m+=` Congrats! ${y} beats ${c} you won.`
        msg.innerText=`You Choose: ${y}`+'\n'+`Computer Choose: ${c}`+'\n'+`${m} `
        won+=1
        score()
    }
    else if(c=='Rock'){
        m+=` Opps! ${y} got beaten by ${c} you loose.`
        msg.innerText=`You Choose: ${y}`+'\n'+`Computer Choose: ${c}`+'\n'+`${m} `
        loose+=1
        score()
    }
    else{
        m+=` Ahh! ${y} and ${c} it's a tie.`
        msg.innerText=`You Choose: ${y}`+'\n'+`Computer Choose: ${c}`+'\n'+`${m} `
        tr+=1
        score()
    }
    y=''
})
res.addEventListener("click",function(){
    won=0
    loose=0
    tr=0
    score()
})

