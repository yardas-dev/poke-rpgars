/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2009963058")

  // update field
  collection.fields.addAt(32, new Field({
    "help": "",
    "hidden": false,
    "id": "file4250797251",
    "maxSelect": 0,
    "maxSize": 262144,
    "mimeTypes": [
      "audio/ogg"
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

  // update field
  collection.fields.addAt(32, new Field({
    "help": "",
    "hidden": false,
    "id": "file4250797251",
    "maxSelect": 0,
    "maxSize": 262144,
    "mimeTypes": [
      "application/ogg",
      "audio/ogg"
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
})
