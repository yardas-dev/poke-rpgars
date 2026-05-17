/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3773332841")

  // update field
  collection.fields.addAt(10, new Field({
    "help": "",
    "hidden": false,
    "id": "number1229574866",
    "max": null,
    "min": null,
    "name": "pag_corebook",
    "onlyInt": true,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3773332841")

  // update field
  collection.fields.addAt(10, new Field({
    "help": "",
    "hidden": false,
    "id": "number1229574866",
    "max": null,
    "min": null,
    "name": "pagina_corebook",
    "onlyInt": true,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
})
