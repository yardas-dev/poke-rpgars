/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1924039882")

  // update field
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

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1924039882")

  // update field
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
})
