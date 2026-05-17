/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2009963058")

  // add field
  collection.fields.addAt(5, new Field({
    "help": "",
    "hidden": false,
    "id": "select1976209255",
    "maxSelect": 0,
    "name": "ritmo_evolucion",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "rápido",
      "medio",
      "lento"
    ]
  }))

  // update field
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
      "experiencia"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2009963058")

  // remove field
  collection.fields.removeById("select1976209255")

  // update field
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
})
