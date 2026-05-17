/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1924039882")

  // remove field
  collection.fields.removeById("text2577247817")

  // add field
  collection.fields.addAt(3, new Field({
    "help": "",
    "hidden": false,
    "id": "select2577247817",
    "maxSelect": 0,
    "name": "caracteristica",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "ataque",
      "defensa",
      "velocidad",
      "ataque especial",
      "defensa especial"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1924039882")

  // add field
  collection.fields.addAt(4, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "text2577247817",
    "max": 0,
    "min": 0,
    "name": "caracteristica",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // remove field
  collection.fields.removeById("select2577247817")

  return app.save(collection)
})
