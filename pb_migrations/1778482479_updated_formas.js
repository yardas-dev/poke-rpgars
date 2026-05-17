/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2009963058")

  // add field
  collection.fields.addAt(10, new Field({
    "help": "",
    "hidden": false,
    "id": "number3942964144",
    "max": null,
    "min": null,
    "name": "fuerza_base",
    "onlyInt": true,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(11, new Field({
    "help": "",
    "hidden": false,
    "id": "number2567528755",
    "max": null,
    "min": null,
    "name": "fuerza_max",
    "onlyInt": true,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(12, new Field({
    "help": "",
    "hidden": false,
    "id": "number2146472755",
    "max": null,
    "min": null,
    "name": "destreza_base",
    "onlyInt": true,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(13, new Field({
    "help": "",
    "hidden": false,
    "id": "number159016634",
    "max": null,
    "min": null,
    "name": "destreza_max",
    "onlyInt": true,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(14, new Field({
    "help": "",
    "hidden": false,
    "id": "number1993059531",
    "max": null,
    "min": null,
    "name": "vitalidad_base",
    "onlyInt": true,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(15, new Field({
    "help": "",
    "hidden": false,
    "id": "number2215228854",
    "max": null,
    "min": null,
    "name": "vitalidad_max",
    "onlyInt": true,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(16, new Field({
    "help": "",
    "hidden": false,
    "id": "number631117546",
    "max": null,
    "min": null,
    "name": "especial_base",
    "onlyInt": true,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(17, new Field({
    "help": "",
    "hidden": false,
    "id": "number1646306372",
    "max": null,
    "min": null,
    "name": "especial_max",
    "onlyInt": true,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(18, new Field({
    "help": "",
    "hidden": false,
    "id": "number1008179568",
    "max": null,
    "min": null,
    "name": "intuicion_base",
    "onlyInt": true,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(19, new Field({
    "help": "",
    "hidden": false,
    "id": "number2274971602",
    "max": null,
    "min": null,
    "name": "intuicion_max",
    "onlyInt": true,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2009963058")

  // remove field
  collection.fields.removeById("number3942964144")

  // remove field
  collection.fields.removeById("number2567528755")

  // remove field
  collection.fields.removeById("number2146472755")

  // remove field
  collection.fields.removeById("number159016634")

  // remove field
  collection.fields.removeById("number1993059531")

  // remove field
  collection.fields.removeById("number2215228854")

  // remove field
  collection.fields.removeById("number631117546")

  // remove field
  collection.fields.removeById("number1646306372")

  // remove field
  collection.fields.removeById("number1008179568")

  // remove field
  collection.fields.removeById("number2274971602")

  return app.save(collection)
})
