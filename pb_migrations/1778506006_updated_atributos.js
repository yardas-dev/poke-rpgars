/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1924039882")

  // add field
  collection.fields.addAt(8, new Field({
    "help": "",
    "hidden": false,
    "id": "select3947932522",
    "maxSelect": 0,
    "name": "caracteristica_en",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Attack",
      "Defense",
      "Speed",
      "Special Attack",
      "Special Defense"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1924039882")

  // remove field
  collection.fields.removeById("select3947932522")

  return app.save(collection)
})
