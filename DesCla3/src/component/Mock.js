const productos = [
    {"id":"0","stock":9,"marca": "Nike","nombreProducto":"Air Jordan 1 Retro High OG","precio":"120.000","url":"https://trapking.cl/wp-content/uploads/2020/08/86b7cb4e.jpg"},
    {"id":"1","stock":2,"marca": "Nike","nombreProducto":"Air Jordan 13 Retro SNGL DY","precio":"150.000","url":"https://trapking.cl/wp-content/uploads/2020/11/e2d528ec-1.jpg"},
    {"id":"2","stock":5,"marca": "Adidas","nombreProducto":"Yeezy Boost 350 V2","precio":"110.000","url":"https://www.zapatillasysneakers.com/sites/default/files/styles/landscape_medium/public/static/images/news/adidas-yeezy-boost-350-v2-1.png?itok=iPGUj3-u&c=bf20bed23345ab89ba10f5809a36e7ee"},
    {"id":"3","stock":5,"marca": "Adidas","nombreProducto":"Yeezy Boost 700 analog","precio":"130.000","url":"https://media.revistagq.com/photos/5cc85667c46d3aeaa535d7df/master/w_1600%2Cc_limit/yeezyboostanalog.jpg"}

]

export const getProductos = new Promise((resolve,reject)=>{
    let condicion = true
    if (condicion){
        setTimeout(()=>{
            resolve(productos)
        },2000)
    }else{
        reject('Error')
    }
})