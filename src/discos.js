const discos = [{
  id: 1,
  stock: 3,
  title: "Midnights",
  artista: 'Taylor Swift',
  price: 2500,
  description: "Midnights es el décimo álbum de Taylor Swift, programado para ser lanzado el 21 de octubre de 2022 a través de Republic Records. A partir de sus pensamientos durante las 'noches de insomnio', Swift ha descrito Midnights como una obra que resume 'un viaje a través de terrores y dulces sueños'. Batió el récord de Spotify de mayor número de transmisiones en un solo día para un álbum, y se convirtió un gran éxito comercial en todos los formatos musicales. Cuenta con 20 canciones, entre las cuales se destacan 'Anti-Hero, Bejeweled y Lavender-Haze",
  image: "https://akamai.sscdn.co/uploadfile/letras/albuns/a/5/c/f/1398201666349375.jpg",
  category: "Pop",
  spotify: "https://open.spotify.com/embed/album/3lS1y25WAhcqJDATJK70Mq?utm_source=generator"
},
{
id: 2,
stock: 1,
title:"Red",
price: 1000, 
artista: "Taylor Swift",
description:"es el cuarto álbum de estudio de la cantante y compositora estadounidense Taylor Swift. Se lanzó el 22 de octubre de 2012 a través de Big Machine Records. Incluye principalmente géneros tales como el country, el pop rock, el country pop, el pop, el country contemporáneo y el teen pop. Para el año 2021, la cantante confirmó la regrabación y estreno del álbum titulado Red (Taylor's Version) el cual contaria con un total de 30 canciones. Algunas canciones que destacan de este albúm son 'Red', 'All Too Well', 'We Are Never Ever Getting Back Together' y '22'",
image: "https://i0.wp.com/elgeneracionalpost.com/wp-content/uploads/2021/11/portada-articulo.jpg?fit=829%2C833&ssl=1",
category: "Pop",
spotify:"https://open.spotify.com/embed/album/6kZ42qRrzov54LcAk4onW9?utm_source=generator"
},
{
id: 3,
stock: 4,
title:"Harry´s House",
price: 2000,
artista: "Harry Styles",
description: "Harry's House es el tercer álbum de estudio del cantautor británico Harry Styles, lanzado el 20 de mayo de 2022 a través de Columbia Records y Erskine. Este presenta géneros e influencias pop funk, pop rock, synth pop y R&B. Fue promocionando con los sencillos 'As It Was', 'Late Night Talking' y 'Music for a Sushi Restaurant'. Fue generalmente aclamado por la crítica, siendo considerado como el álbum más introspectivo y elogiado en la carrera de Styles",
image:"https://m.media-amazon.com/images/I/61ur3nQ+-mL._AC_SL1500_.jpg",
category: "Pop",
spotify: "https://open.spotify.com/embed/album/5r36AJ6VOJtp00oxSkBZ5h?utm_source=generator"
},
{
id: 4,
stock: 10,
title: "Folklore",
price: 2500,
artista: "Taylor Swift",
description: "Folklore es el octavo álbum de estudio de la cantante estadounidense Taylor Swift. El álbum se destaca por melodías armónicas e introspectivas, una interpretación lírica más trabajada y una utilización más consistente de la instrumentalización. La cantante escribió y grabó el álbum durante la pandemia, concibiéndolo como «una colección de canciones e historias que fluyeron como una corriente de conciencia de su imaginación.Manifiesta una vívida narración que canaliza el escapismo, la nostalgia, la soledad y la introspección. Cuenta con canciones como 'Cardigan, 'August' y 'Exile'.",
image: "https://upload.wikimedia.org/wikipedia/en/f/f8/Taylor_Swift_-_Folklore.png",
category: "Pop",
spotify:"https://open.spotify.com/embed/album/1pzvBxYgT6OVwJLtHkrdQK?utm_source=generator" 
},
{
id: 5,
stock: 6,
title: "Evermore",
price: 1800,
artista: "Taylor Swift",
description: "Evermore es el noveno álbum de estudio de la cantautora estadounidense Taylor Swift. Su lírica gira en torno a temas ficticios y no ficticios sobre el amor, el matrimonio, la infidelidad, el crimen y el dolor, narrados en tercera persona y con evocaciones impresionistas. En el albúm se destacan las canciones 'Willow' y 'Champagne Problems'.",
image: "http://cdn.shopify.com/s/files/1/0094/8718/8015/products/taylor-swift-evermore-review-exquisite-winter-love-and-longing-4495206_1024x.jpg?v=1607705098",
category: "Pop",
spotify: "https://open.spotify.com/embed/album/1pzvBxYgT6OVwJLtHkrdQK?utm_source=generator" 
},
{
id: 6,
stock: 4,
title: "Reputation",
artista: "Taylor Swift",
price: 1300,
description: "Reputation es el sexto álbum de estudio de la cantante y compositora estadounidense Taylor Swift, publicado el 10 de noviembre de 2017 por el sello discográfico Big Machine Records. Es caracterizado por ser un álbum en torno a la verdadera reputación de Taylor, el rechazo a la crítica y la prensa, y por ser más oscuro. Entre las canciones mas escuchadas de este albúm podemos encontrar 'Look What You Made Me Do', 'I Did Something Bad' y 'Don´t Blame Me'",
image: "https://people.com/thmb/bnv58OSnUSsOsnwP_c9f85fBdv0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(992x0:994x2)/taylor-swift7-2000-48f9bfb372c34e36866773b1ede0b372.jpg",
category: "Pop",
spotify:"https://open.spotify.com/embed/album/6DEjYFkNZh67HP7R9PSZvv?utm_source=generator" 
},
{
id: 7,
stock: 7,
title: "Cypress Grove",
artista: "Glaive",
price: 1000,
description: "Cypress Grove es el primer EP de Glaive bajo la discografica Interscope Records lanzado el 19 de noviembre de 2020. Cuenta unicamente con 7 canciones entre las cuales se pueden encontrar 'dnd', 'astrid' y 'touché'",
image: "https://i.scdn.co/image/ab67616d0000b2730a994d905b3983b535de6149",
category: "HyperPop",
spotify: "https://open.spotify.com/embed/album/0cF9M8eWDJfgbf0XtyrTL9?utm_source=generator&theme=0" 
},
{
id: 8,
stock: 2,
title: "Slippery When Wet",
artista: "Bon Jovi",
price: 1400,
description: "Slippery When Wetes el tercer álbum de estudio de la banda Bon Jovi, que se lanzó el 18 de agosto de 1986 de la mano de Mercury Records. Después de no haber obtenido la repercusión deseada con su segundo álbum, la banda temía perder su contrato si la tercera entrega no cumplía las espectativas de la discográfica. Así, el grupo alcanzó por primera vez la primera posición del Billboard Hot 100 con el sencillo 'You Give Love a Bad Name'",
image: "https://images.genius.com/6ecac4be30233f4383b95e704b0f7f39.800x800x1.jpg",
category: "Rock",
spotify: "https://open.spotify.com/embed/album/0kBfgEilUFCMIQY5IOjG4t?utm_source=generator" 
}]

export default discos;