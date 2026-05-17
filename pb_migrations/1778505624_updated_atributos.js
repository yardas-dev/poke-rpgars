/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1924039882")

  // remove field
  collection.fields.removeById("text3975644498")

  // add field
  collection.fields.addAt(4, new Field({
    "help": "",
    "hidden": false,
    "id": "select3975644498",
    "maxSelect": 0,
    "name": "sabor",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "picante",
      "ácido",
      "dulce",
      "seco",
      "amargo"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1924039882")

  // add field
  collection.fields.addAt(4, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "text3975644498",
    "max": 0,
    "min": 0,
    "name": "sabor",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // remove field
  collection.fields.removeById("select3975644498")

  return app.save(collection)
})
