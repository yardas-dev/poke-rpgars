/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1924039882")

  // add field
  collection.fields.addAt(8, new Field({
    "help": "",
    "hidden": false,
    "id": "select563605159",
    "maxSelect": 0,
    "name": "cualidad_ja",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "a"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1924039882")

  // remove field
  collection.fields.removeById("select563605159")

  return app.save(collection)
})
