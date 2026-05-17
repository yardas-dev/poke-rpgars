/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3941030563")

  // add field
  collection.fields.addAt(4, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1924039882",
    "help": "",
    "hidden": false,
    "id": "relation73480189",
    "maxSelect": 0,
    "minSelect": 0,
    "name": "atributo_potenciado",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1924039882",
    "help": "",
    "hidden": false,
    "id": "relation2738394569",
    "maxSelect": 0,
    "minSelect": 0,
    "name": "atributo_mermado",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3941030563")

  // remove field
  collection.fields.removeById("relation73480189")

  // remove field
  collection.fields.removeById("relation2738394569")

  return app.save(collection)
})
