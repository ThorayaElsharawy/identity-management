/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "r051lql2grlz4c2",
    "created": "2024-08-12 16:59:25.008Z",
    "updated": "2024-08-12 16:59:25.008Z",
    "name": "memberships",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "jbczqba6",
        "name": "user_id",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
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
  const collection = dao.findCollectionByNameOrId("r051lql2grlz4c2");

  return dao.deleteCollection(collection);
})
