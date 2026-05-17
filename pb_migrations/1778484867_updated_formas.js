/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2009963058")

  // update field
  collection.fields.addAt(24, new Field({
    "help": "En metros (m)",
    "hidden": false,
    "id": "number3211997402",
    "max": null,
    "min": null,
    "name": "altura",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // update field
  collection.fields.addAt(25, new Field({
    "help": "En kilogramos (kg)",
    "hidden": false,
    "id": "number3715637431",
    "max": null,
    "min": null,
    "name": "peso",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2009963058")

  // update field
  collection.fields.addAt(24, new Field({
    "help": "",
    "hidden": false,
    "id": "number3211997402",
    "max": null,
    "min": null,
    "name": "altura",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // update field
  collection.fields.addAt(25, new Field({
    "help": "",
    "hidden": false,
    "id": "number3715637431",
    "max": null,
    "min": null,
    "name": "peso",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
})
