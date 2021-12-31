const productos = [
    {"id":"0","stock":9,"marca": "ASUS","nombreProducto":"ASUS ROG Zephyrus GA502DU-BR7N6","precio":"1.129.900","url":"https://publicapi.solotodo.com/products/114979/picture/?width=300&height=300"},
    {"id":"1","stock":2,"marca": "ASUS","nombreProducto":"ASUS ROG Strix G15 G513QR-HF195T [90NR0562-M04900]","precio":"2.099.990","url":"https://publicapi.solotodo.com/products/110916/picture/?width=300&height=300"},
    {"id":"2","stock":5,"marca": "ASUS","nombreProducto":"ASUS ROG Strix G15 G512LW-WS74 [90NR0391-M00510]","precio":"1.499.000","url":"https://publicapi.solotodo.com/products/103207/picture/?width=300&height=300"}
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