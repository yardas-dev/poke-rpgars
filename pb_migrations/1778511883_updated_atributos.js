/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1924039882")

  // remove field
  collection.fields.removeById("select982552870")

  // remove field
  collection.fields.removeById("relation1901803375")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1924039882")

  // add field
  collection.fields.addAt(1, new Field({
    "help": "",
    "hidden": false,
    "id": "select982552870",
    "maxSelect": 0,
    "name": "nombre",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "fuerza",
      "vitalidad",
      "destreza",
      "especial",
      "intuición"
    ]
  }))

  // add field
  collection.fields.addAt(11, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_650343273",
    "help": "",
    "hidden": false,
    "id": "relation1901803375",
    "maxSelect": 0,
    "minSelect": 0,
    "name": "traducciones",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
})
