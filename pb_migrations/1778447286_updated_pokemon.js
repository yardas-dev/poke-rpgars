/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4086296345")

  // add field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2009963058",
    "help": "",
    "hidden": false,
    "id": "relation243690175",
    "maxSelect": 0,
    "minSelect": 0,
    "name": "forma",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4086296345")

  // remove field
  collection.fields.removeById("relation243690175")

  return app.save(collection)
})
