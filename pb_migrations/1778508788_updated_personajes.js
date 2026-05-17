/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_109990041")

  // add field
  collection.fields.addAt(47, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "text1780043509",
    "max": 0,
    "min": 0,
    "name": "inventario",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(48, new Field({
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
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_109990041")

  // remove field
  collection.fields.removeById("text1780043509")

  // remove field
  collection.fields.removeById("relation1901803375")

  return app.save(collection)
})
