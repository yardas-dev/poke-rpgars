/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_109990041")

  // add field
  collection.fields.addAt(26, new Field({
    "help": "",
    "hidden": false,
    "id": "number79933731",
    "max": null,
    "min": null,
    "name": "alerta",
    "onlyInt": true,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(27, new Field({
    "help": "",
    "hidden": false,
    "id": "number2159142903",
    "max": null,
    "min": null,
    "name": "atletismo",
    "onlyInt": true,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(28, new Field({
    "help": "",
    "hidden": false,
    "id": "number626227067",
    "max": null,
    "min": null,
    "name": "forraje",
    "onlyInt": true,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(29, new Field({
    "help": "",
    "hidden": false,
    "id": "number1575267463",
    "max": null,
    "min": null,
    "name": "sigilo",
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
  collection.fields.removeById("number79933731")

  // remove field
  collection.fields.removeById("number2159142903")

  // remove field
  collection.fields.removeById("number626227067")

  // remove field
  collection.fields.removeById("number1575267463")

  return app.save(collection)
})
