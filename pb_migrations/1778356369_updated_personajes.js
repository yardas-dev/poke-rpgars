/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_109990041")

  // add field
  collection.fields.addAt(35, new Field({
    "help": "",
    "hidden": false,
    "id": "number1444654076",
    "max": null,
    "min": null,
    "name": "fabricar",
    "onlyInt": true,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(36, new Field({
    "help": "",
    "hidden": false,
    "id": "number321709609",
    "max": null,
    "min": null,
    "name": "conocimiento",
    "onlyInt": true,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(37, new Field({
    "help": "",
    "hidden": false,
    "id": "number1599860372",
    "max": null,
    "min": null,
    "name": "medicina",
    "onlyInt": true,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(38, new Field({
    "help": "",
    "hidden": false,
    "id": "number1190747072",
    "max": null,
    "min": null,
    "name": "ciencia",
    "onlyInt": true,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(39, new Field({
    "help": "",
    "hidden": false,
    "id": "number2884853706",
    "max": null,
    "min": null,
    "name": "mineria",
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
  collection.fields.removeById("number1444654076")

  // remove field
  collection.fields.removeById("number321709609")

  // remove field
  collection.fields.removeById("number1599860372")

  // remove field
  collection.fields.removeById("number1190747072")

  // remove field
  collection.fields.removeById("number2884853706")

  return app.save(collection)
})
