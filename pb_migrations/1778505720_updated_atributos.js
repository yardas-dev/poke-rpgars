/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1924039882")

  // remove field
  collection.fields.removeById("text2394190165")

  // add field
  collection.fields.addAt(6, new Field({
    "help": "",
    "hidden": false,
    "id": "select2394190165",
    "maxSelect": 0,
    "name": "nombre_en",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Strength",
      "Vitality",
      "Dexterity",
      "Special",
      "Insight"
    ]
  }))

  // update field
  collection.fields.addAt(5, new Field({
    "help": "",
    "hidden": false,
    "id": "select1716930793",
    "maxSelect": 0,
    "name": "color_bulma",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "orange",
      "warning",
      "danger",
      "info",
      "success"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1924039882")

  // add field
  collection.fields.addAt(6, new Field({
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

  // remove field
  collection.fields.removeById("select2394190165")

  // update field
  collection.fields.addAt(5, new Field({
    "help": "",
    "hidden": false,
    "id": "select1716930793",
    "maxSelect": 0,
    "name": "color",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "orange",
      "warning",
      "danger",
      "info",
      "success"
    ]
  }))

  return app.save(collection)
})
