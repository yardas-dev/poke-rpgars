/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1924039882")

  // remove field
  collection.fields.removeById("select2394190165")

  // remove field
  collection.fields.removeById("select917565433")

  // remove field
  collection.fields.removeById("select3947932522")

  // remove field
  collection.fields.removeById("select563605159")

  // remove field
  collection.fields.removeById("select550464028")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1924039882")

  // add field
  collection.fields.addAt(2, new Field({
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

  // add field
  collection.fields.addAt(4, new Field({
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

  // add field
  collection.fields.addAt(5, new Field({
    "help": "",
    "hidden": false,
    "id": "select563605159",
    "maxSelect": 0,
    "name": "cualidad_ja",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "かっこよさ"
    ]
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "help": "",
    "hidden": false,
    "id": "select550464028",
    "maxSelect": 0,
    "name": "cualidad_ja_traducido",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Genialidad"
    ]
  }))

  return app.save(collection)
})
