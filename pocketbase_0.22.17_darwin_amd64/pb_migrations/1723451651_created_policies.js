/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "mdxdoratgxumwyh",
    "created": "2024-08-12 08:34:11.182Z",
    "updated": "2024-08-12 08:34:11.182Z",
    "name": "policies",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "oz77hdsy",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ukjmhdye",
        "name": "policy",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "cuguw5ttyvby0qk",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("mdxdoratgxumwyh");

  return dao.deleteCollection(collection);
})
