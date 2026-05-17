/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1924039882")

  // remove field
  collection.fields.removeById("text982552870")

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
      "ingenio"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1924039882")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "text982552870",
    "max": 0,
    "min": 0,
    "name": "nombre",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // remove field
  collection.fields.removeById("select982552870")

  return app.save(collection)
})
