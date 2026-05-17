/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_947947726")

  // add field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "text982552870",
    "max": 0,
    "min": 0,
    "name": "nombre",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(3, new Field({
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
  collection.fields.addAt(4, new Field({
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
  collection.fields.addAt(5, new Field({
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
  collection.fields.addAt(6, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "text2383932888",
    "max": 0,
    "min": 0,
    "name": "emoticono",
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
    "id": "text1716930793",
    "max": 7,
    "min": 7,
    "name": "color",
    "pattern": "^#([0-9A-Fa-f]{6})$",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_947947726")

  // remove field
  collection.fields.removeById("text982552870")

  // remove field
  collection.fields.removeById("text1025268811")

  // remove field
  collection.fields.removeById("text2394190165")

  // remove field
  collection.fields.removeById("text2576576523")

  // remove field
  collection.fields.removeById("text2383932888")

  // remove field
  collection.fields.removeById("text1716930793")

  return app.save(collection)
})
