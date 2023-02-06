export default {
    "scalars": [
        1,
        2,
        6
    ],
    "types": {
        "Article": {
            "id": [
                1
            ],
            "title": [
                2
            ],
            "url": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "ID": {},
        "String": {},
        "Mutation": {
            "addToDo": [
                5,
                {
                    "title": [
                        2,
                        "String!"
                    ]
                }
            ],
            "createArticle": [
                0,
                {
                    "title": [
                        2,
                        "String!"
                    ],
                    "url": [
                        2,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                2
            ]
        },
        "Query": {
            "article": [
                0,
                {
                    "articleID": [
                        2,
                        "String!"
                    ]
                }
            ],
            "articles": [
                0
            ],
            "completeToDo": [
                5,
                {
                    "title": [
                        2,
                        "String!"
                    ]
                }
            ],
            "todos": [
                5
            ],
            "__typename": [
                2
            ]
        },
        "ToDo": {
            "complete": [
                6
            ],
            "title": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "Boolean": {}
    }
}