/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2009963058")

  // add field
  collection.fields.addAt(12, new Field({
    "help": "En decimales (0.0 - 1)",
    "hidden": false,
    "id": "number3107786292",
    "max": 1,
    "min": 0,
    "name": "probabilidad_macho",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(13, new Field({
    "help": "En decimales (0.0 - 1)",
    "hidden": false,
    "id": "number2127814258",
    "max": 1,
    "min": 0,
    "name": "probabilidad_hembra",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(30, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "text3556198348",
    "max": 0,
    "min": 0,
    "name": "pronunciacion_nombre",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(31, new Field({
    "help": "",
    "hidden": false,
    "id": "select1473650688",
    "maxSelect": 2,
    "name": "grupos_huevo",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "monstruo",
      "planta"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2009963058")

  // remove field
  collection.fields.removeById("number3107786292")

  // remove field
  collection.fields.removeById("number2127814258")

  // remove field
  collection.fields.removeById("text3556198348")

  // remove field
  collection.fields.removeById("select1473650688")

  return app.save(collection)
})
