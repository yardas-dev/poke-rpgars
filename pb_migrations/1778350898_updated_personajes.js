/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_109990041")

  // add field
  collection.fields.addAt(22, new Field({
    "help": "",
    "hidden": false,
    "id": "number1358621835",
    "max": null,
    "min": null,
    "name": "pelea",
    "onlyInt": true,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(23, new Field({
    "help": "",
    "hidden": false,
    "id": "number1933271802",
    "max": null,
    "min": null,
    "name": "lanzamiento",
    "onlyInt": true,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(24, new Field({
    "help": "",
    "hidden": false,
    "id": "number1260964087",
    "max": null,
    "min": null,
    "name": "evasion",
    "onlyInt": true,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(25, new Field({
    "help": "",
    "hidden": false,
    "id": "number1453581284",
    "max": null,
    "min": null,
    "name": "armas",
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
  collection.fields.removeById("number1358621835")

  // remove field
  collection.fields.removeById("number1933271802")

  // remove field
  collection.fields.removeById("number1260964087")

  // remove field
  collection.fields.removeById("number1453581284")

  return app.save(collection)
})
