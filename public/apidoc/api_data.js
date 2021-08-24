define({ "api": [
  {
    "type": "put",
    "url": "/user",
    "title": "",
    "group": "user",
    "description": "<p>add a new user</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>user name</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "dob",
            "description": "<p>date of birth, must be a timestamp in milliseconds</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>user address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>user description</p>"
          }
        ]
      }
    },
    "name": "addUser",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.1",
    "filename": "routes/user.js",
    "groupTitle": "user",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/user"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/user/:id",
    "title": "",
    "group": "user",
    "description": "<p>delete user by id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "name": "delUser",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.1",
    "filename": "routes/user.js",
    "groupTitle": "user",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/user/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "",
    "group": "user",
    "description": "<p>get user by id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "name": "getUser",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data._id",
            "description": "<p>user ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>user name</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.dob",
            "description": "<p>date of birth</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.address",
            "description": "<p>user address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.description",
            "description": "<p>user description</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>user created date</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "filename": "routes/user.js",
    "groupTitle": "user",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/user/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/user",
    "title": "",
    "group": "user",
    "description": "<p>get all users</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": ""
          }
        ]
      }
    },
    "name": "getUsers",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data._id",
            "description": "<p>user ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>user name</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.dob",
            "description": "<p>date of birth</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.address",
            "description": "<p>user address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.description",
            "description": "<p>user description</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>user created date</p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "filename": "routes/user.js",
    "groupTitle": "user",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/user"
      }
    ]
  },
  {
    "type": "post",
    "url": "/user/:id",
    "title": "",
    "group": "user",
    "description": "<p>update user by id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>user name</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "dob",
            "description": "<p>date of birth, must be a timestamp in milliseconds</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>user address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>user description</p>"
          }
        ]
      }
    },
    "name": "updateUser",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.1",
    "filename": "routes/user.js",
    "groupTitle": "user",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/user/:id"
      }
    ]
  }
] });
