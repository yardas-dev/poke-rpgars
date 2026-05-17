/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2009963058")

  // add field
  collection.fields.addAt(27, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_4187125967",
    "help": "",
    "hidden": false,
    "id": "relation1309676077",
    "maxSelect": 0,
    "minSelect": 0,
    "name": "categoria",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // update field
  collection.fields.addAt(28, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "text1309676077",
    "max": 0,
    "min": 0,
    "name": "_oldcategoria",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2009963058")

  // remove field
  collection.fields.removeById("relation1309676077")

  // update field
  collection.fields.addAt(27, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "text1309676077",
    "max": 0,
    "min": 0,
    "name": "categoria",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
})
