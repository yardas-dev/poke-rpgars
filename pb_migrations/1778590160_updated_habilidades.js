/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3773332841")

  // remove field
  collection.fields.removeById("text2394190165")

  // remove field
  collection.fields.removeById("text1025268811")

  // remove field
  collection.fields.removeById("text2576576523")

  // remove field
  collection.fields.removeById("text103552722")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3773332841")

  // add field
  collection.fields.addAt(8, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "text2394190165",
    "max": 0,
    "min": 0,
    "name": "nombre_en",
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
    "id": "text1025268811",
    "max": 0,
    "min": 0,
    "name": "nombre_es_ha",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(10, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "text2576576523",
    "max": 0,
    "min": 0,
    "name": "nombre_ja",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(11, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "text103552722",
    "max": 0,
    "min": 0,
    "name": "nombre_ja_traducido",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
})
