/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1924039882")

  // add field
  collection.fields.addAt(2, new Field({
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

  // add field
  collection.fields.addAt(7, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "text1109997359",
    "max": 0,
    "min": 0,
    "name": "nombre_social_en",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(8, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "text1426994801",
    "max": 0,
    "min": 0,
    "name": "nombre_social_ja",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(9, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "text3977908481",
    "max": 0,
    "min": 0,
    "name": "nombre_social_traducido",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1924039882")

  // remove field
  collection.fields.removeById("text3163943057")

  // remove field
  collection.fields.removeById("text1109997359")

  // remove field
  collection.fields.removeById("text1426994801")

  // remove field
  collection.fields.removeById("text3977908481")

  return app.save(collection)
})
