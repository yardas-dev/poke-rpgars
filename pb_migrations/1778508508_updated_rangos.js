/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3647022241")

  // add field
  collection.fields.addAt(4, new Field({
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
  const collection = app.findCollectionByNameOrId("pbc_3647022241")

  // remove field
  collection.fields.removeById("relation1901803375")

  return app.save(collection)
})
