/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2009963058")

  // update field
  collection.fields.addAt(32, new Field({
    "help": "",
    "hidden": false,
    "id": "number1229574866",
    "max": null,
    "min": null,
    "name": "pag_corebook",
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
  collection.fields.addAt(32, new Field({
    "help": "",
    "hidden": false,
    "id": "number1229574866",
    "max": null,
    "min": null,
    "name": "pagina_corebook",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
})
