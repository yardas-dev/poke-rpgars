/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_109990041")

  // add field
  collection.fields.addAt(30, new Field({
    "help": "",
    "hidden": false,
    "id": "number3841289118",
    "max": null,
    "min": null,
    "name": "atractivo",
    "onlyInt": true,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(31, new Field({
    "help": "",
    "hidden": false,
    "id": "number1834788410",
    "max": null,
    "min": null,
    "name": "etiqueta",
    "onlyInt": true,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(32, new Field({
    "help": "",
    "hidden": false,
    "id": "number1471320509",
    "max": null,
    "min": null,
    "name": "empatia",
    "onlyInt": true,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(33, new Field({
    "help": "",
    "hidden": false,
    "id": "number1321933069",
    "max": null,
    "min": null,
    "name": "intimidar",
    "onlyInt": true,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(34, new Field({
    "help": "",
    "hidden": false,
    "id": "number3631392583",
    "max": null,
    "min": null,
    "name": "actuar",
    "onlyInt": true,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_109990041")

  // remove field
  collection.fields.removeById("number3841289118")

  // remove field
  collection.fields.removeById("number1834788410")

  // remove field
  collection.fields.removeById("number1471320509")

  // remove field
  collection.fields.removeById("number1321933069")

  // remove field
  collection.fields.removeById("number3631392583")

  return app.save(collection)
})
