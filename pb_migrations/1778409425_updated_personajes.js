/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_109990041")

  // add field
  collection.fields.addAt(46, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_99369590",
    "help": "",
    "hidden": false,
    "id": "relation1168251503",
    "maxSelect": 8,
    "minSelect": 0,
    "name": "medallas",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_109990041")

  // remove field
  collection.fields.removeById("relation1168251503")

  return app.save(collection)
})
