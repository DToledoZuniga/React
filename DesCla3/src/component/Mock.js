const productos = [
    {"id":"0","stock":9,"marca": "Nike","nombreCorto":"Jordan 1 Retro","nombreProducto":"Air Jordan 1 Retro High OG “CHICAGO”","precio":"120000","precioInt":120000,"url":"https://trapking.cl/wp-content/uploads/2020/08/86b7cb4e.jpg","descripcion":"El zapato que lo empezó todo. En 1984, Nike presentó las Nike Air Jordan y cautivó al mundo. El diseño fusionó los mundos del deporte y la moda con su atractivo de lujo, y ahora es un clásico de la calle. En 2015, Jordan Brand reeditó la combinación de colores Chicago en su forma original con Jordan 1 Retro Chicago (2015)"},
    {"id":"1","stock":2,"marca": "Nike","nombreCorto":"Jordan 13 Retro","nombreProducto":"Air Jordan 13 Retro SNGL DY","precio":"150000","precioInt":150000,"url":"https://trapking.cl/wp-content/uploads/2020/11/e2d528ec-1.jpg","descripcion":"Tomando la influencia del cyberpunk y su tecnología futurista, el Air Jordan 13 Low Singles' Day presenta una parte superior de cuero negro desgastado y acolchado geométrico Barely Green Durabuck que revela un código oculto cuando se expone a la luz solar. Los logotipos de Jumpman en los talones, los gráficos de microchip en la plantilla y una suela exterior semitranslúcida agregan los toques finales a este diseño futurista."},
    {"id":"2","stock":5,"marca": "Adidas","nombreCorto":"Yeezy 350","nombreProducto":"Yeezy Boost 350 V2","precio":"110000","precioInt":110000,"url":"https://www.zapatillasysneakers.com/sites/default/files/styles/landscape_medium/public/static/images/news/adidas-yeezy-boost-350-v2-1.png?itok=iPGUj3-u&c=bf20bed23345ab89ba10f5809a36e7ee","descripcion":"El primer modelo de Yeezy Boost 350 que se puso a la venta fue el color ‘Turtle Dove’. El jaspeado negro sobre fondo gris era el no va más de la época. Lo mismo se puede decir de su peculiar suela rayada que incluía en su interior una pieza de la tecnología Boost, un material especial desarrollado por ingenieros de BASF y que ofrece un rebote en la pisada descomunal"},
    {"id":"3","stock":5,"marca": "Adidas","nombreCorto":"Yeezy 700","nombreProducto":"Yeezy Boost 700 analog","precio":"130000","precioInt":130000,"url":"https://media.revistagq.com/photos/5cc85667c46d3aeaa535d7df/master/w_1600%2Cc_limit/yeezyboostanalog.jpg","descripcion":"La vida de las adidas Yeezy Boost 700 estaba destinada a ser efímera. En origen, simplemente eran la apuesta de Kanye West y adidas para una micro-tendencia que se puso de moda en 2016-2017: las zapatillas de padre. Estas sneakers tienen en común una suela enorme, una parte superior enorme y, lo has adivinado, una lengüeta enorme. Es la que se pone tu padre cuando sale a andar o cuando va a lavar el coche los domingos."}

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