/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1924039882")

  // remove field
  collection.fields.removeById("text1716930793")

  // add field
  collection.fields.addAt(5, new Field({
    "help": "",
    "hidden": false,
    "id": "select1716930793",
    "maxSelect": 0,
    "name": "color",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "orange",
      "warning",
      "danger",
      "info",
      "success"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1924039882")

  // add field
  collection.fields.addAt(5, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "text1716930793",
    "max": 7,
    "min": 7,
    "name": "color",
    "pattern": "^#([0-9a-f]{6})$",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // remove field
  collection.fields.removeById("select1716930793")

  return app.save(collection)
})
