/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1924039882")

  // update field
  collection.fields.addAt(10, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_4187125967",
    "help": "",
    "hidden": false,
    "id": "relation4225873540",
    "maxSelect": 0,
    "minSelect": 0,
    "name": "nombre",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1924039882")

  // update field
  collection.fields.addAt(10, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_4187125967",
    "help": "",
    "hidden": false,
    "id": "relation4225873540",
    "maxSelect": 0,
    "minSelect": 0,
    "name": "nombre_",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
})
