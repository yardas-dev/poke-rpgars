/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2009963058")

  // add field
  collection.fields.addAt(3, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_947947726",
    "help": "",
    "hidden": false,
    "id": "relation4045051496",
    "maxSelect": 0,
    "minSelect": 0,
    "name": "tipo_1",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_947947726",
    "help": "",
    "hidden": false,
    "id": "relation1746126802",
    "maxSelect": 0,
    "minSelect": 0,
    "name": "tipo_2",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2009963058")

  // remove field
  collection.fields.removeById("relation4045051496")

  // remove field
  collection.fields.removeById("relation1746126802")

  return app.save(collection)
})
