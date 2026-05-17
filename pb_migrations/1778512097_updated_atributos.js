/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1924039882")

  // remove field
  collection.fields.removeById("select632677852")

  // add field
  collection.fields.addAt(10, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_4187125967",
    "help": "",
    "hidden": false,
    "id": "relation632677852",
    "maxSelect": 0,
    "minSelect": 0,
    "name": "cualidad",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1924039882")

  // add field
  collection.fields.addAt(1, new Field({
    "help": "",
    "hidden": false,
    "id": "select632677852",
    "maxSelect": 0,
    "name": "cualidad",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "carisma",
      "dureza",
      "dulzura",
      "belleza",
      "ingenio"
    ]
  }))

  // remove field
  collection.fields.removeById("relation632677852")

  return app.save(collection)
})
