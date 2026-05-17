/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2009963058")

  // remove field
  collection.fields.removeById("text1309676077")

  // remove field
  collection.fields.removeById("text2146948712")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2009963058")

  // add field
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

  // add field
  collection.fields.addAt(29, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "text2146948712",
    "max": 0,
    "min": 0,
    "name": "categoria_en",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
})
