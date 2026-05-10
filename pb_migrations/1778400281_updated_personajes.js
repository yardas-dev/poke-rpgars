/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_109990041")

  // add field
  collection.fields.addAt(40, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "text3985263254",
    "max": 0,
    "min": 0,
    "name": "logro_1",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(41, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "text1954749228",
    "max": 0,
    "min": 0,
    "name": "logro_2",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(42, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "text58993594",
    "max": 0,
    "min": 0,
    "name": "logro_3",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(43, new Field({
    "help": "",
    "hidden": false,
    "id": "bool1253314446",
    "name": "logro_1_esta_hecho",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(44, new Field({
    "help": "",
    "hidden": false,
    "id": "bool1026219390",
    "name": "logro_2_esta_hecho",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(45, new Field({
    "help": "",
    "hidden": false,
    "id": "bool2794426641",
    "name": "logro_3_esta_hecho",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_109990041")

  // remove field
  collection.fields.removeById("text3985263254")

  // remove field
  collection.fields.removeById("text1954749228")

  // remove field
  collection.fields.removeById("text58993594")

  // remove field
  collection.fields.removeById("bool1253314446")

  // remove field
  collection.fields.removeById("bool1026219390")

  // remove field
  collection.fields.removeById("bool2794426641")

  return app.save(collection)
})
