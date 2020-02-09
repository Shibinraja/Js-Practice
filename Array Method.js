var newArr = [
    {
        "name": "nameOne",
        "children": [
            {
                "name": "nameChild",
                "children": [
                    {
                        "name": "nameChildTwo",
                        "children": [
                            {
                                "name": "nameThree",
                                "children": [
                                    {
                                        "name": "nameFive",
                                        "children": "last"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "name": "nameChild",
        "children": [
            {
                "name": "nameChildTwo",
                "children": "last"
            }
        ]
    }

]


var store = [{
    "books":
              [
                {
                    "title": "Professional JavaScript",
                    "authors": [
                        "Nicholas C. Zakas"
                    ],
                    "edition": 3,
                    "year": 2011
                },
                {
                    "title": "Professional JavaScript",
                    "authors": [
                        "Nicholas C.Zakas"
                    ],
                    "edition": 2,
                    "year": 2009
                },
                {
                    "title": "Professional Ajax",
                    "authors": [
                        "Nicholas C. Zakas",
                        "Jeremy McPeak",
                        "Joe Fawcett"
                    ],
                    "edition": 2,
                    "year": 2008
                }
              ]
}]

var newKey = store.books.map((value) => {
    return value.title;
})

console.log(newKey)