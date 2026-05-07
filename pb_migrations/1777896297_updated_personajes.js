/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_109990041")

  // add field
  collection.fields.addAt(8, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_3647022241",
    "help": "",
    "hidden": false,
    "id": "relation1934799703",
    "maxSelect": 0,
    "minSelect": 0,
    "name": "rango",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_109990041")

  // remove field
  collection.fields.removeById("relation1934799703")

  return app.save(collection)
})
