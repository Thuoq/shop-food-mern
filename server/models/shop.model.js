const mongoose  = require("mongoose");


const shopSchema = new mongoose.Schema({
  "tacos": {
    "id": {
      "type": "Number"
    },
    "title": {
      "type": "String"
    },
    "subTitle": {
      "type": "String"
    },
    "routeName": {
      "type": "String"
    },
    "imageUrl": {
      "type": "String"
    },
    "price": {
      "type": "Number"
    },
    "reviews": {
      "type": "String"
    },
    "more": {
      "type": "String"
    },
    "extend": {
      "type": [
        "Mixed"
      ]
    }
  },
  "pancake": {
    "id": {
      "type": "Number"
    },
    "subTitle": {
      "type": "String"
    },
    "title": {
      "type": "String"
    },
    "routeName": {
      "type": "String"
    },
    "imageUrl": {
      "type": "String"
    },
    "price": {
      "type": "Number"
    },
    "reviews": {
      "type": "String"
    },
    "more": {
      "type": "String"
    },
    "extend": {
      "type": [
        "Mixed"
      ]
    }
  },
  "rice": {
    "id": {
      "type": "Number"
    },
    "title": {
      "type": "String"
    },
    "subTitle": {
      "type": "String"
    },
    "routeName": {
      "type": "String"
    },
    "imageUrl": {
      "type": "String"
    },
    "price": {
      "type": "Number"
    },
    "reviews": {
      "type": "String"
    },
    "more": {
      "type": "String"
    },
    "extend": {
      "type": [
        "Mixed"
      ]
    }
  },
  "beef": {
    "id": {
      "type": "Number"
    },
    "subTitle": {
      "type": "String"
    },
    "title": {
      "type": "String"
    },
    "routeName": {
      "type": "String"
    },
    "imageUrl": {
      "type": "String"
    },
    "price": {
      "type": "Number"
    },
    "reviews": {
      "type": "String"
    },
    "more": {
      "type": "String"
    },
    "extend": {
      "type": [
        "Mixed"
      ]
    }
  },
  "pasta": {
    "id": {
      "type": "Number"
    },
    "subTitle": {
      "type": "String"
    },
    "title": {
      "type": "String"
    },
    "routeName": {
      "type": "String"
    },
    "imageUrl": {
      "type": "String"
    },
    "price": {
      "type": "Number"
    },
    "reviews": {
      "type": "String"
    },
    "more": {
      "type": "String"
    },
    "extend": {
      "type": [
        "Mixed"
      ]
    }
  },
  "palte": {
    "id": {
      "type": "Number"
    },
    "title": {
      "type": "String"
    },
    "subTitle": {
      "type": "String"
    },
    "routeName": {
      "type": "String"
    },
    "imageUrl": {
      "type": "String"
    },
    "price": {
      "type": "Number"
    },
    "reviews": {
      "type": "String"
    },
    "more": {
      "type": "String"
    },
    "extend": {
      "type": [
        "Mixed"
      ]
    }
  },
  "pizza": {
    "id": {
      "type": "Number"
    },
    "subTitle": {
      "type": "String"
    },
    "title": {
      "type": "String"
    },
    "routeName": {
      "type": "String"
    },
    "imageUrl": {
      "type": "String"
    },
    "price": {
      "type": "Number"
    },
    "reviews": {
      "type": "String"
    },
    "more": {
      "type": "String"
    },
    "extend": {
      "type": [
        "Mixed"
      ]
    }
  },
  "whiteandbrowncooked": {
    "id": {
      "type": "Number"
    },
    "subTitle": {
      "type": "String"
    },
    "routeName": {
      "type": "String"
    },
    "title": {
      "type": "String"
    },
    "imageUrl": {
      "type": "String"
    },
    "price": {
      "type": "Number"
    },
    "reviews": {
      "type": "String"
    },
    "more": {
      "type": "String"
    },
    "extend": {
      "type": [
        "Mixed"
      ]
    }
  },
  "fires": {
    "id": {
      "type": "Number"
    },
    "subTitle": {
      "type": "String"
    },
    "title": {
      "type": "String"
    },
    "routeName": {
      "type": "String"
    },
    "imageUrl": {
      "type": "String"
    },
    "price": {
      "type": "Number"
    },
    "reviews": {
      "type": "String"
    },
    "more": {
      "type": "String"
    },
    "extend": {
      "type": [
        "Mixed"
      ]
    }
  }
})

const Foods = mongoose.model("Foods",shopSchema,'foods');

module.exports = Foods;

