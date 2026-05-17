/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1924039882")

  // remove field
  collection.fields.removeById("text3163943057")

  // add field
  collection.fields.addAt(3, new Field({
    "help": "",
    "hidden": false,
    "id": "select917565433",
    "maxSelect": 0,
    "name": "cualidad_en",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Cool",
      "Tough",
      "Cute",
      "Beauty",
      "Clever"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1924039882")

  // add field
  collection.fields.addAt(3, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "text3163943057",
    "max": 0,
    "min": 0,
    "name": "nombre_social",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // remove field
  collection.fields.removeById("select917565433")

  return app.save(collection)
})
