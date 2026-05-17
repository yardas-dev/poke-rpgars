/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1924039882")

  // remove field
  collection.fields.removeById("text1426994801")

  // remove field
  collection.fields.removeById("text3977908481")

  // add field
  collection.fields.addAt(9, new Field({
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

  // update field
  collection.fields.addAt(8, new Field({
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

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1924039882")

  // add field
  collection.fields.addAt(9, new Field({
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
  collection.fields.addAt(10, new Field({
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

  // remove field
  collection.fields.removeById("select550464028")

  // update field
  collection.fields.addAt(8, new Field({
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
      "a"
    ]
  }))

  return app.save(collection)
})
