/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2009963058")

  // add field
  collection.fields.addAt(24, new Field({
    "help": "",
    "hidden": false,
    "id": "number3211997402",
    "max": null,
    "min": null,
    "name": "altura",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(25, new Field({
    "help": "",
    "hidden": false,
    "id": "number3715637431",
    "max": null,
    "min": null,
    "name": "peso",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(26, new Field({
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

  // add field
  collection.fields.addAt(27, new Field({
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
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2009963058")

  // remove field
  collection.fields.removeById("number3211997402")

  // remove field
  collection.fields.removeById("number3715637431")

  // remove field
  collection.fields.removeById("text1309676077")

  // remove field
  collection.fields.removeById("text2146948712")

  return app.save(collection)
})
