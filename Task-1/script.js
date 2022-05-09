let btn=document.getElementById('btncreate');
btn.onclick=function(){
    let input=document.getElementById('inputtex');

   let value=input.value;

   let newli=document.createElement('li');
   newli.innerText=value;
   newli.className='list-group-item';


    let spanclose=document.createElement('span');
    spanclose.innerText='X';
    spanclose.style.color='red';
    spanclose.style.float='right';
    spanclose.style.cursor='pointer';
    spanclose.onclick=function(){
        newli.remove();
    }

    newli.appendChild(spanclose);
    input.value=""

//    newli.className='text-danger';
//    newli.classList.add('text-danger');
//    newli.classList.add('list-group-item')

    document.querySelector('ul').appendChild(newli)

    console.log(newli)

}