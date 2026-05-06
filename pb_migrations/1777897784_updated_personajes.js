/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_109990041")

  // add field
  collection.fields.addAt(9, new Field({
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
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_109990041")

  // remove field
  collection.fields.removeById("select240467767")

  return app.save(collection)
})
