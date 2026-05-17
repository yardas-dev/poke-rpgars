/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2009963058")

  // add field
  collection.fields.addAt(8, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_3647022241",
    "help": "",
    "hidden": false,
    "id": "relation1291865556",
    "maxSelect": 0,
    "minSelect": 0,
    "name": "rango_habitual",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(9, new Field({
    "help": "",
    "hidden": false,
    "id": "number1143913817",
    "max": null,
    "min": null,
    "name": "salud_base",
    "onlyInt": true,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2009963058")

  // remove field
  collection.fields.removeById("relation1291865556")

  // remove field
  collection.fields.removeById("number1143913817")

  return app.save(collection)
})
