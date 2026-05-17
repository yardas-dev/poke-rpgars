/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_109990041")

  // update field
  collection.fields.addAt(4, new Field({
    "help": "",
    "hidden": false,
    "id": "select240467767",
    "maxSelect": 0,
    "name": "rol",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "jugador",
      "rival",
      "autoridad",
      "villano"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_109990041")

  // update field
  collection.fields.addAt(4, new Field({
    "help": "",
    "hidden": false,
    "id": "select240467767",
    "maxSelect": 0,
    "name": "rol",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "jugador",
      "rival",
      "líder de gimnasio",
      "investigador",
      "autoridad",
      "campeón",
      "villano"
    ]
  }))

  return app.save(collection)
})
