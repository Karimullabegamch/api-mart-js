
const md=document.querySelector('.main')
    fetch("https://fakestoreapi.com/products")
    .then(function(res)
    {
        return res.json()
    })
    .then(function(data)
    {
        console.log(data)
        data.forEach(function(val)
        {
            console.log(val.title)
            
            const sd=document.createElement('div')
            const img=document.createElement('img')
            img.src=val.image
            img.style.height='200px'
            img.style.width='150px'
            const h3=document.createElement('h3')
            h3.textContent=val.title
            const p=document.createElement('p')
            p.textContent=val.price+"$"
            const cd=document.createElement('div')
            const pur=document.createElement('button')
            pur.textContent='Buy now'
            const cart=document.createElement('button')
            cart.textContent='Add to cart'
            cd.appendChild(cart)
            cd.appendChild(pur)
            cd.classList.add('ab')
            sd.appendChild(img)
            sd.appendChild(h3)
            sd.appendChild(p)
            sd.appendChild(cd)
            md.appendChild(sd)
            sd.classList.add('card')
            
            cart.addEventListener('click',c)
            function c(){
                alert('one item added to cart')
            }
        })
            

        })
       
            
        
        
    