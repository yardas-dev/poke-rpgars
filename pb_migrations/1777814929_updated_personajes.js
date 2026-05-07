/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_109990041")

  // add field
  collection.fields.addAt(2, new Field({
    "help": "",
    "hidden": false,
    "id": "select741955218",
    "maxSelect": 0,
    "name": "sexo",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "hombre",
      "mujer"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_109990041")

  // remove field
  collection.fields.removeById("select741955218")

  return app.save(collection)
})
