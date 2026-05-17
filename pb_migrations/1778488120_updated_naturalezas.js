/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3941030563")

  // add field
  collection.fields.addAt(11, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "text2064339790",
    "max": 0,
    "min": 0,
    "name": "nombre_es_es",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3941030563")

  // remove field
  collection.fields.removeById("text2064339790")

  return app.save(collection)
})
