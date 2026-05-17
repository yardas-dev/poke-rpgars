/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4086296345")

  // remove field
  collection.fields.removeById("number63013087")

  // add field
  collection.fields.addAt(2, new Field({
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
  const collection = app.findCollectionByNameOrId("pbc_4086296345")

  // add field
  collection.fields.addAt(2, new Field({
    "help": "",
    "hidden": false,
    "id": "number63013087",
    "max": 100,
    "min": 1,
    "name": "nv",
    "onlyInt": true,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // remove field
  collection.fields.removeById("relation1934799703")

  return app.save(collection)
})
