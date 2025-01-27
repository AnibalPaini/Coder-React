 const products=[
        {
        "id": 1,
        "titulo": "Camiseta Boca JRS",
        "descripcion": "Camiseta titular de CABJ 2024",
        "equipo": "Boca Juniors",
        "precio": 16000,
        "talles": ["s", "m", "l", "xl", "xxl"],
        "imagen":"/img/boca.jpeg",
        "imagenes": ["/img/boca.jpeg", "/img/boca.jpeg"],
        "stock": 10
        },
        {
        "id": 2,
        "titulo": "Camiseta River Plate",
        "descripcion": "Camiseta titular de River Plate 2024",
        "equipo": "River Plate",
        "precio": 14000,
        "talles": ["s", "m", "l", "xl", "xxl"],
        "imagen":"/img/boca.jpeg",
        "imagenes": ["/img/river.jpeg", "/img/river2.jpeg"],
        "stock": 10
        },
        {
        "id": 3,
        "titulo": "Futbol Club Barcelona",
        "descripcion": "Camiseta titular de Futbol Club Barcelona 2024",
        "equipo": "FC Barcelona",
        "precio": 17000,
        "talles": ["s", "m", "l", "xl", "xxl"],
        "imagen":"/img/boca.jpeg",
        "imagenes": ["/img/barcelona.jpeg", "/img/barcelona.jpeg"],
        "stock": 10
        },
        {
        "id": 4,
        "titulo": "Camiseta Chealse",
        "descripcion": "Camiseta titular de Chealse 2024",
        "equipo": "Chealse",
        "precio": 19000,
        "talles": ["s", "m", "l", "xl", "xxl"],
        "imagenes": ["/img/chealse.jpeg", "/img/chealse.jpeg"],
        "stock": 10
        },
        {
        "id": 5,
        "titulo": "Camiseta Argentina",
        "descripcion": "Camiseta titular de Argentina 2024",
        "equipo": "Argentina",
        "precio": 15000,
        "talles": ["s", "m", "l", "xl", "xxl"],
        "imagenes": ["/img/arg.jpeg", "/img/arg.jpeg"],
        "stock": 10
        },
        {
        "id": 6,
        "titulo": "Camiseta Argentina Alternativa",
        "descripcion": "Camiseta titular de Argentina Alternativa 2024",
        "equipo": "Argentina",
        "precio": 15000,
        "talles": ["s", "m", "l", "xl", "xxl"],
        "imagenes": ["/img/arg2.jpeg", "/img/arg2.jpeg"],
        "stock": 10
        },
        {
        "id": 7,
        "titulo": "Camiseta Tottenham",
        "descripcion": "Camiseta titular de Tottenham 2024",
        "equipo": "Tottenham",
        "precio": 15000,
        "talles": ["s", "m", "l", "xl", "xxl"],
        "imagenes": ["/img/tottenham.jpeg", "/img/tottenham.jpeg"],
        "stock": 10
        },
        {
        "id": 8,
        "titulo": "Camiseta Boca JRS Retro 2010",
        "descripcion": "Camiseta titular de Boca JRS Retro Roman 2010",
        "equipo": "Boca Juniors",
        "precio": 15000,
        "talles": ["s", "m", "l", "xl", "xxl"],
        "imagenes": ["/img/bocaretro.jpeg", "/img/bocaretro.jpeg"],
        "stock": 10
        },
        {
        "id": 9,
        "titulo": "Camiseta River Plate Retro 97",
        "descripcion": "Camiseta titular de River Plate Retro 97",
        "equipo": "River Plate",
        "precio": 15000,
        "talles": ["s", "m", "l", "xl", "xxl"],
        "imagenes": ["/img/river2.jpeg", "/img/river2.jpeg"],
        "stock": 10
        },
        {
        "id": 10,
        "titulo": "Camiseta Manchester United",
        "descripcion": "Camiseta titular de Manchester United 2024",
        "equipo": "Manchester United",
        "precio": 15000,
        "talles": ["s", "m", "l", "xl", "xxl"],
        "imagenes": ["/img/manuni.jpeg", "/img/manuni.jpeg"],
        "stock": 10
        }
    ]

    export const getProductos=()=>{
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(products)
            },1000)
        })
    }
