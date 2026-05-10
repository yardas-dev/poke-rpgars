/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_109990041")

  // add field
  collection.fields.addAt(17, new Field({
    "help": "",
    "hidden": false,
    "id": "number2650262770",
    "max": null,
    "min": null,
    "name": "carisma",
    "onlyInt": true,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(18, new Field({
    "help": "",
    "hidden": false,
    "id": "number1943675454",
    "max": null,
    "min": null,
    "name": "dureza",
    "onlyInt": true,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(19, new Field({
    "help": "",
    "hidden": false,
    "id": "number2495353167",
    "max": null,
    "min": null,
    "name": "dulzura",
    "onlyInt": true,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(20, new Field({
    "help": "",
    "hidden": false,
    "id": "number1429669845",
    "max": null,
    "min": null,
    "name": "belleza",
    "onlyInt": true,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(21, new Field({
    "help": "",
    "hidden": false,
    "id": "number3173867011",
    "max": null,
    "min": null,
    "name": "ingenio",
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
  collection.fields.removeById("number2650262770")

  // remove field
  collection.fields.removeById("number1943675454")

  // remove field
  collection.fields.removeById("number2495353167")

  // remove field
  collection.fields.removeById("number1429669845")

  // remove field
  collection.fields.removeById("number3173867011")

  return app.save(collection)
})
