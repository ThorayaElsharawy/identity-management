/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r051lql2grlz4c2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fbuu5exf",
    "name": "policy_id",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "mdxdoratgxumwyh",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r051lql2grlz4c2")

  // remove
  collection.schema.removeField("fbuu5exf")

  return dao.saveCollection(collection)
})
