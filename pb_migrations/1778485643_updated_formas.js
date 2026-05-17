/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2009963058")

  // add field
  collection.fields.addAt(32, new Field({
    "help": "",
    "hidden": false,
    "id": "file4250797251",
    "maxSelect": 0,
    "maxSize": 262144,
    "mimeTypes": [
      "application/ogg"
    ],
    "name": "grito",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": null,
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2009963058")

  // remove field
  collection.fields.removeById("file4250797251")

  return app.save(collection)
})
