1. POST /api/register --> This endpoint should allow users to register. Hash the password on store.

body --> {
      "name": "Steve",
    "email": "steve@gmail.com",
    "password": "123",
    "address": {
      "street": "20th mains street",
      "city": "Paris",
      "state": "Paris",
      "country": "Newyork",
      "zip": "12345"
    }
}

response --> {message: "User created successfully"}

2. POST /api/login  this endpoint should allow users to login. Return JWT token on login.

body = 
    {
   
    "email": "marie@gmail.com",
    "password": "123"
}

response --> {
     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGFiYzBiZDRhYjI1NmQ3NWYwZDc3NDQiLCJpYXQiOjE2ODg5Nzc2NjcsImV4cCI6MTY4ODk4MTI2N30.VVXiu0fmgsWxT_nyS9X9ko21TspP4n-MDsQDYxM6OKI"

}

3. PUT /api/user/:id/reset -- This endpoint should allow users to reset the password identified by user id, providing the current password and new password in the body.

body --> {
   
    "currentPassword": "123",
    "newPassword": "marie"
}

status 204 successfully password changed

4. GET /api/restaurants --> This endpoint should return a list of all available restaurants.

response--> [
  {
    "address": {
      "street": "24th main street",
      "city": "sarjapur",
      "state": "karnataka",
      "country": "India",
      "zip": "12345"
    },
    "_id": "64aba6b730cacfa4e2956ddf",
    "name": "Royal Dine",
    "menu": [
      {
        "name": "Chicken Biryani",
        "description": "Aromatic chicken dum biryani",
        "price": 250,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDJSYhOfTf42dcPNb86I12ZVd_r4Uk9tUCWw&usqp=CAU",
        "_id": "64aba6b730cacfa4e2956de0"
      }
    ],
    "__v": 0
  },
  {
    "address": {
      "street": "Near Kimadu",
      "city": "main square fit",
      "state": "busan",
      "country": "Seoul",
      "zip": "24345"
    },
    "_id": "64aba78a30cacfa4e2956de2",
    "name": "La Pinoz",
    "menu": [
      {
        "name": "Monster pizza",
        "description": "7 layer cheesy pizza",
        "price": 1000,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZswagEmziHODo-X8jcSF42r0vZQt-DOB70w&usqp=CAU",
        "_id": "64aba78a30cacfa4e2956de3"
      },
      {
        "name": "Onion Pizza",
        "description": "Fresh onion pizza",
        "price": 129,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1MzQtpCQUka4OTI3givZpf0ecMizLWAPokQ&usqp=CAU",
        "_id": "64aba8b5d0b13f40cfe172ce"
      }
    ],
    "__v": 2
  }
]

5 GET /api/restaurant/:id --> This endpoint should return the details of a specific restaurant identified by its ID.


6. GET /api/restaurants/:id/menu --> This endpoint should return the menu of a specific restaurant identified by its ID.

response --> [
  {
    "name": "Monster pizza",
    "description": "7 layer cheesy pizza",
    "price": 1000,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZswagEmziHODo-X8jcSF42r0vZQt-DOB70w&usqp=CAU",
    "_id": "64aba78a30cacfa4e2956de3"
  },
  {
    "name": "Onion Pizza",
    "description": "Fresh onion pizza",
    "price": 129,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1MzQtpCQUka4OTI3givZpf0ecMizLWAPokQ&usqp=CAU",
    "_id": "64aba8b5d0b13f40cfe172ce"
  }
]

7. POST /api/restaurants/:id/menu --> This endpoint should allow the user to add a new item to a specific restaurants menu identified by it id.

body --> {
    "name": "Capsicum pizza",
      "description": "flavourful",
      "price": 200,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1MzQtpCQUka4OTI3givZpf0ecMizLWAPokQ&usqp=CAU"
}

response --> [
  {
    "name": "Monster pizza",
    "description": "7 layer cheesy pizza",
    "price": 1000,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZswagEmziHODo-X8jcSF42r0vZQt-DOB70w&usqp=CAU",
    "_id": "64aba78a30cacfa4e2956de3"
  },
  {
    "name": "Onion Pizza",
    "description": "Fresh onion pizza",
    "price": 129,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1MzQtpCQUka4OTI3givZpf0ecMizLWAPokQ&usqp=CAU",
    "_id": "64aba8b5d0b13f40cfe172ce"
  },
  {
    "name": "Capsicum pizza",
    "description": "flavourful",
    "price": 200,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1MzQtpCQUka4OTI3givZpf0ecMizLWAPokQ&usqp=CAU",
    "_id": "64abc3404ab256d75f0d7757"
  }
]

8. DELETE -->/api/restaurants/:id/menu/:id --> This endpoint should allow the user to delete a particular menu item identified by its id from a specific restaurant.

RESPONSE--> [
  {
    "name": "Monster pizza",
    "description": "7 layer cheesy pizza",
    "price": 1000,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZswagEmziHODo-X8jcSF42r0vZQt-DOB70w&usqp=CAU",
    "_id": "64aba78a30cacfa4e2956de3"
  },
  {
    "name": "Onion Pizza",
    "description": "Fresh onion pizza",
    "price": 129,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1MzQtpCQUka4OTI3givZpf0ecMizLWAPokQ&usqp=CAU",
    "_id": "64aba8b5d0b13f40cfe172ce"
  }
]

9. POST --> /api/orders -- > This endpoint should allow the user to place an order.

body--> {
   "user": "64aba4d830cacfa4e2956dd8",
    "restaurant": "64aba78a30cacfa4e2956de2",
      "items": [{
        "name": "ITEM1",
        "price": 200,
        "quantity": 2
      }],
      "totalPrice": 400,
      "deliveryAddress": {
        "street": "street",
        "city": "city",
        "state": "state",
        "country": "country",
        "zip": "12345"
      },
      "status": "placed"
}

response --> {
  "deliveryAddress": {
    "street": "street",
    "city": "city",
    "state": "state",
    "country": "country",
    "zip": "12345"
  },
  "_id": "64abc4fc4ab256d75f0d7769",
  "user": {
    "address": {
      "street": "main square",
      "city": "brikuda",
      "state": "belize",
      "country": "U.S",
      "zip": "12345"
    },
    "_id": "64aba4d830cacfa4e2956dd8",
    "name": "John Doe",
    "email": "john@gmail.com",
    "__v": 0
  },
  "restaurant": {
    "address": {
      "street": "Near Kimadu",
      "city": "main square fit",
      "state": "busan",
      "country": "Seoul",
      "zip": "24345"
    },
    "_id": "64aba78a30cacfa4e2956de2",
    "name": "La Pinoz",
    "menu": [
      {
        "name": "Monster pizza",
        "description": "7 layer cheesy pizza",
        "price": 1000,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZswagEmziHODo-X8jcSF42r0vZQt-DOB70w&usqp=CAU",
        "_id": "64aba78a30cacfa4e2956de3"
      },
      {
        "name": "Onion Pizza",
        "description": "Fresh onion pizza",
        "price": 129,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1MzQtpCQUka4OTI3givZpf0ecMizLWAPokQ&usqp=CAU",
        "_id": "64aba8b5d0b13f40cfe172ce"
      }
    ],
    "__v": 4
  },
  "items": [
    {
      "name": "ITEM1",
      "price": 200,
      "quantity": 2,
      "_id": "64abc4fc4ab256d75f0d776a"
    }
  ],
  "totalPrice": 400,
  "status": "placed",
  "__v": 0
}

10. GET /api/orders/:id --> This endpoint should return the details of a specific order identified by its ID. (Populate all the details)

response --> {
  "deliveryAddress": {
    "street": "street",
    "city": "city",
    "state": "state",
    "country": "country",
    "zip": "12345"
  },
  "_id": "64abc4fc4ab256d75f0d7769",
  "user": "64aba4d830cacfa4e2956dd8",
  "restaurant": "64aba78a30cacfa4e2956de2",
  "items": [
    {
      "name": "ITEM1",
      "price": 200,
      "quantity": 2,
      "_id": "64abc4fc4ab256d75f0d776a"
    }
  ],
  "totalPrice": 400,
  "status": "placed",
  "__v": 0
}

11. PATCH /api/orders/:id --> This endpoint should allow users to update the status of a specific order identified by its ID.

body --> {
      "status": "on the way"
}

response--> {
  "deliveryAddress": {
    "street": "street",
    "city": "city",
    "state": "state",
    "country": "country",
    "zip": "12345"
  },
  "_id": "64abc4fc4ab256d75f0d7769",
  "user": "64aba4d830cacfa4e2956dd8",
  "restaurant": "64aba78a30cacfa4e2956de2",
  "items": [
    {
      "name": "ITEM1",
      "price": 200,
      "quantity": 2,
      "_id": "64abc4fc4ab256d75f0d776a"
    }
  ],
  "totalPrice": 400,
  "status": "on the way",
  "__v": 0
}