//Copy this file to config.js and specify your own settings

export let ESCAPP_APP_SETTINGS = {
  //Settings that can be specified by the authors
  skin: "STANDARD", //skin can be "STANDARD", "RETRO", or "FUTURISTIC".
  //background: "NONE", //background can be "NONE" or a URL.
  actionAfterSolve: "SHOW_MESSAGE", //actionAfterSolve can be "NONE" or "SHOW_MESSAGE".
  //message: "Custom message",

  //JSON that specifies the conversation
  branchingJson: JSON.stringify({
    "id": "q_1",
    "text": "Esta es la primera pregunta.",
    "image": "",
    "answers": [
        {
            "id": "a_1",
            "text": "Opción 1 - Pregunta 1",
            "next": null
        },
        {
            "id": "a_2",
            "text": "Opción 2 - Pregunta 1",
            "next": {
                "id": "q_6",
                "text": "Esta es la segunda pregunta.",
                "image": "",
                "answers": [
                    {
                        "id": "a_7",
                        "text": "Opción 1 - Pregunta 2",
                        "next": {
                            "id": "q_11",
                            "text": "Esta es la tercera pregunta.",
                            "image": "",
                            "answers": [
                                {
                                    "id": "a_12",
                                    "text": "Opción 1 - Pregunta 3",
                                    "next": null
                                },
                                {
                                    "id": "a_13",
                                    "text": "Opción 2 - Pregunta 3",
                                    "next": null
                                }
                            ]
                        }
                    },
                    {
                        "id": "a_8",
                        "text": "Opción 2 - Pregunta 2",
                        "next": null
                    },
                    {
                        "id": "a_9",
                        "text": "Opción 3 - Pregunta 2",
                        "next": null
                    },
                    {
                        "id": "a_10",
                        "text": "Opción 4 - Pregunta 2",
                        "next": null
                    }
                ]
            }
        },
        {
            "id": "a_3",
            "text": "Opción 3 - Pregunta 1",
            "next": null
        },
        {
            "id": "a_4",
            "text": "Opción 4 - Pregunta 1",
            "next": null
        }
    ]
  }),

  //Settings that will be automatically specified by the Escapp server
  locale:"es",

  escappClientSettings: {
    endpoint:"https://escapp.es/api/escapeRooms/id",
    linkedPuzzleIds: [1],
    rtc: false,
    preview: false
  },
};