/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_109990041")

  // update field
  collection.fields.addAt(10, new Field({
    "help": "",
    "hidden": false,
    "id": "number2727405522",
    "max": null,
    "min": null,
    "name": "saludActual",
    "onlyInt": true,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_109990041")

  // update field
  collection.fields.addAt(10, new Field({
    "help": "",
    "hidden": false,
    "id": "number2727405522",
    "max": null,
    "min": null,
    "name": "salud",
    "onlyInt": true,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
})
