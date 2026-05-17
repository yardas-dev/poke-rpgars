/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_947947726")

  // remove field
  collection.fields.removeById("text2383932888")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_947947726")

  // add field
  collection.fields.addAt(3, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "text2383932888",
    "max": 0,
    "min": 0,
    "name": "emoticono",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
})
