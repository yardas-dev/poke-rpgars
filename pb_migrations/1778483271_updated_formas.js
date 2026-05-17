/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2009963058")

  // add field
  collection.fields.addAt(9, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_3773332841",
    "help": "",
    "hidden": false,
    "id": "relation2908922072",
    "maxSelect": 0,
    "minSelect": 0,
    "name": "habilidad_1",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(10, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_3773332841",
    "help": "",
    "hidden": false,
    "id": "relation879489378",
    "maxSelect": 0,
    "minSelect": 0,
    "name": "habilidad_2",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(11, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_3773332841",
    "help": "",
    "hidden": false,
    "id": "relation3874155686",
    "maxSelect": 0,
    "minSelect": 0,
    "name": "habilidad_oculta",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2009963058")

  // remove field
  collection.fields.removeById("relation2908922072")

  // remove field
  collection.fields.removeById("relation879489378")

  // remove field
  collection.fields.removeById("relation3874155686")

  return app.save(collection)
})
