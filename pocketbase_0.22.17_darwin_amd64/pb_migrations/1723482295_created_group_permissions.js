/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "nmuz206surkhryj",
    "created": "2024-08-12 17:04:55.720Z",
    "updated": "2024-08-12 17:04:55.720Z",
    "name": "group_permissions",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "sytakhw1",
        "name": "group_id",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "cuguw5ttyvby0qk",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "m8gsjeqp",
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
  const collection = dao.findCollectionByNameOrId("nmuz206surkhryj");

  return dao.deleteCollection(collection);
})
