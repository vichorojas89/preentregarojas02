const products =[
    {
        id:"Aafttt2111",
        name:"Nike - Air Force 1 Negro",
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea illo aliquam quas rerum quia tenetur vel. Fugiat id perspiciatis esse adipisci laboriosam maxime ea dolorem et, quisquam, dicta commodi possimus!",
        image:"/img/zapatilla-01.avif",
        price:500,
        stock:10,
        category:"Urbanas"
    },
    {
        id:"Aafttt2112",
        name:"Adidas - Break Start",
        description:"",
        image:"/img/zapatilla-02.avif",
        price:400,
        stock:6,
        category:"Deportivas"
    },
    {
        id:"Aafttt2113",
        name:"Adidas - Forum Low",
        description:"",
        image:"img/zapatilla-03.avif",
        price:700,
        stock:2,
        category:"Skater"
    },
    {
        id:"Aafttt2114",
        name:"Nike - Full Force Lo Cob",
        description:"",
        image:"/img/zapatilla-04.avif",
        price:800,
        stock:10,
        category:"Urbanas"
    },
    {
        id:"Aafttt2115",
        name:"Nike - Full Force Lo",
        description:"",
        image:"/img/zapatilla-05.avif",
        price:300,
        stock:6,
        category:"Deportivas"
    },
    {
        id:"Aafttt2116",
        name:"Adidas - Midcity Mid",
        description:"",
        image:"/img/zapatilla-06.avif",
        price:900,
        stock:6,
        category:"Skater"
    },
    {
        id:"Aafttt2117",
        name:"Puma - Rebound V6 Low",
        description:"",
        image:"/img/zapatilla-07.avif",
        price:500,
        stock:10,
        category:"Urbanas"
    },
    {
        id:"Aafttt2118",
        name:"Nike - Tech Hera Blanco",
        description:"",
        image:"/img/zapatilla-08.avif",
        price:200,
        stock:6,
        category:"Deportivas"
    },
    {
        id:"Aafttt2119",
        name:"Nike - Tech Hera",
        description:"",
        image:"/img/zapatilla-09.avif",
        price:700,
        stock:6,
        category:"Skater"
    }
]

const getProducts = () =>{
    return new Promise ((resolve, reject)=> {
        //Simular un retraso de la red, 2 segundos
        setTimeout(() =>{
            resolve(products)
        }, 2000)
    })
}

export {getProducts}