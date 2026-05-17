/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2009963058")

  // add field
  collection.fields.addAt(4, new Field({
    "help": "",
    "hidden": false,
    "id": "select3202742145",
    "maxSelect": 0,
    "name": "metodo_evolucion",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "experiencia (ritmo rápido)",
      "experiencia (ritmo medio)",
      "experiencia (ritmo lento)"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2009963058")

  // remove field
  collection.fields.removeById("select3202742145")

  return app.save(collection)
})
