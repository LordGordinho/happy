const Database = require('./db')
const saveOrphanage = require('./saveOrphanage')

Database.then(async (db) =>{

    // inserir dados na tabela
    await saveOrphanage(db,{
        lat:"-9.6210382",
        lng:"-35.7254843",
        name: "Lar dos meninos",
        about: "Uma lara para amar",
        whatsapp: "9889888",
        images:[
            "https://randomwordgenerator.com/img/picture-generator/57e6d34b435ab10ff3d8992cc12c30771037dbf85254784a70287fd7924b_640.jpg",
            "https://randomwordgenerator.com/img/picture-generator/57e5dd444254af14f1dc8460962e33791c3ad6e04e50744172297cd59649c1_640.jpg"
        ].toString(),
        instructions: "Venha para amar e ser amado",
        opening_hours: "Horario de visita das 8h até as 18h",
        open_on_weekends: "0"

    });

    // consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)


    // consutar somente 1 ofanato pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id ="1"')

    console.log(orphanage)

    // deletar dados da tabela
    // console.log(await db.run("DELETE FROM orphanages WHERE id = '3'"))
})