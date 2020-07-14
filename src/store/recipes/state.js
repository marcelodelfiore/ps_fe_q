export default function () {
  return {
    list_of_recipes: [
      {
        title: "Calabresa Defumada",
        id: "1",
        createdAt: "11/04/2018",
        category: "1",
        thumbnail: "calabresa_defumada.jpg",
        ingredients: [
          { id: "1", percent: 55, texture: "3", check: false, sequence: 1 },
          { id: "6", percent: 15, texture: "3", check: false, sequence: 2 },
          { id: "3", percent: 15, texture: "11", check: false, sequence: 3 },
          { id: "1", percent: 15, texture: "3", check: false, sequence: 4 },
          { id: "12", percent: 1.5, texture: "4", check: false, sequence: 5 },
          { id: "10", percent: 0.214, texture: "4", check: false, sequence: 6 },
          { id: "35", percent: 0.25, texture: "4", check: false, sequence: 7  },
          { id: "27", percent: 0.35, texture: "5", check: false, sequence: 8  },
          { id: "28", percent: 0.05, texture: "7", check: false, sequence: 9  },
          { id: "28", percent: 0.15, texture: "6", check: false, sequence: 10  },
          { id: "29", percent: 0.05, texture: "7", check: false, sequence: 11  },
          { id: "29", percent: 0.15, texture: "6", check: false, sequence: 12  },
          { id: "34", percent: 5, texture: "4", check: false, sequence: 13  }
        ],
        private: false,
        author: "",
        description: "Linguiça condimentada com pimenta calabresa e grãos de erva doce. " +
          "Foi criada no Brasil sob influência dos imigrantes italianos",
        prep_steps: [
          {
            seq: 1,
            description:
              "Coloque a tripa de colágeno para hidratar em água a temperatura ambiente " +
              "30 minutos antes de fazer o ensacamento",
              check: false
          },
          {
            seq: 2,
            description:
              "Misture todos os temperos e aditivos (sal de cura, emulsificante e antioxidante)," +
              " fazendo uma mistura uniforme",
              check: false
          },
          {
            seq: 3,
            description:
              "Em uma vasilha grande, com tampa, misture as carnes, fazendo uma massa homogênea",
              check: false
          },
          {
            seq: 4,
            description:
              "Espalhe a mistura de ingredientes secos sobre a massa de carnes",
              check: false
          },
          {
            seq: 5,
            description: "Acrescente a água",
            check: false
          },
          {
            seq: 6,
            description:
              "Misture bem os ingredientes até que seja obtida uma massa bastante homogênea",
              check: false
          },
          { seq: 7, description: "Ensaque a massa",
          check: false 
          },
          {
            seq: 8,
            description:
              "Defume a quente, em temperatura de até 85oC, até o interior das peças atingir 72oC",
              check: false
          }
        ]
      },
      {
        title: "Linguiça Seca",
        id: "2",
        createdAt: "11/04/2018",
        category: "2",
        thumbnail:
          "linguica_seca.jpg",
        ingredients: [
          { id: "1", percent: 55, texture: "3" },
          { id: "5", percent: 15, texture: "3" },
          { id: "2", percent: 15, texture: "7" },
          { id: "1", percent: 15, texture: "8" },
          { id: "9", percent: 0.214, texture: "9" },
          { id: "11", percent: 1.5, texture: "9" },
          { id: "12", percent: 0.25, texture: "9" },
          { id: "26", percent: 0.35, texture: "10" },
          { id: "27", percent: 0.2, texture: "11" },
          { id: "28", percent: 0.15, texture: "12" },
          { id: "29", percent: 0.05, texture: "12" },
          { id: "33", percent: 5, texture: "4" }
        ],
        private: false,
        author: "",
        description: "Produto curado, ensacado em tripa fina, bem condimentado. Passa por uma rápida fermentação de até 24 horas." +
        " O período de cura é relativamente curto, sendo consumido após 30 dias. Muito boa para ser apreciada em uma roda de bons amigos.",
        prep_steps: [
          {
            seq: 1,
            description:
              "Coloque a tripa de colágeno para hidratar em água a temperatura ambiente " +
              "30 minutos antes de fazer o ensacamento"
          },
          {
            seq: 2,
            description:
              "Misture todos os temperos e aditivos (sal de cura, emulsificante e antioxidante)," +
              " fazendo uma mistura uniforme"
          },
          {
            seq: 3,
            description:
              "Em uma vasilha grande, com tampa, misture as carnes, fazendo uma massa homogênea"
          },
          {
            seq: 4,
            description:
              "Espalhe a mistura de ingredientes secos sobre a massa de carnes"
          },
          {
            seq: 5,
            description: "Acrescente a água"
          },
          {
            seq: 6,
            description:
              "Misture bem os ingredientes até que seja obtida uma massa bastante homogênea"
          },
          { seq: 7, description: "Ensaque a massa" },
          {
            seq: 8,
            description:
              "Defume a quente, em temperatura de até 85oC, até o interior das peças atingir 72oC"
          }
        ]
      },
      {
        title: "Linguiça Fresca Pura",
        id: "3",
        createdAt: "11/04/2018",
        category: "3",
        thumbnail:
          "linguica_fresca_pura.jpg",
        ingredients: [
          { id: "1", percent: 55, texture: "3" },
          { id: "5", percent: 15, texture: "3" },
          { id: "2", percent: 15, texture: "7" },
          { id: "1", percent: 15, texture: "8" },
          { id: "9", percent: 0.214, texture: "9" },
          { id: "11", percent: 1.5, texture: "9" },
          { id: "12", percent: 0.25, texture: "9" },
          { id: "26", percent: 0.35, texture: "10" },
          { id: "27", percent: 0.2, texture: "11" },
          { id: "28", percent: 0.15, texture: "12" },
          { id: "29", percent: 0.05, texture: "12" },
          { id: "33", percent: 5, texture: "4" }
        ],
        private: false,
        author: "",
        description: "Linguiça fresca estilo toscana, pura carne suína. Receita básica.",
        prep_steps: [
          {
            seq: 1,
            description:
              "Coloque a tripa de colágeno para hidratar em água a temperatura ambiente " +
              "30 minutos antes de fazer o ensacamento"
          },
          {
            seq: 2,
            description:
              "Misture todos os temperos e aditivos (sal de cura, emulsificante e antioxidante)," +
              " fazendo uma mistura uniforme"
          },
          {
            seq: 3,
            description:
              "Em uma vasilha grande, com tampa, misture as carnes, fazendo uma massa homogênea"
          },
          {
            seq: 4,
            description:
              "Espalhe a mistura de ingredientes secos sobre a massa de carnes"
          },
          {
            seq: 5,
            description: "Acrescente a água"
          },
          {
            seq: 6,
            description:
              "Misture bem os ingredientes até que seja obtida uma massa bastante homogênea"
          },
          { seq: 7, description: "Ensaque a massa" },
          {
            seq: 8,
            description:
              "Defume a quente, em temperatura de até 85oC, até o interior das peças atingir 72oC"
          }
        ]
      },
      {
        title: "Joelho de Porco Defumado",
        id: "4",
        createdAt: "11/04/2018",
        category: "1",
        thumbnail:
          "joelho_defumado.png",
        ingredients: [
          { id: "1", percent: 55, texture: "3" },
          { id: "5", percent: 15, texture: "3" },
          { id: "2", percent: 15, texture: "7" },
          { id: "1", percent: 15, texture: "8" },
          { id: "9", percent: 0.214, texture: "9" },
          { id: "11", percent: 1.5, texture: "9" },
          { id: "12", percent: 0.25, texture: "9" },
          { id: "26", percent: 0.35, texture: "10" },
          { id: "27", percent: 0.2, texture: "11" },
          { id: "28", percent: 0.15, texture: "12" },
          { id: "29", percent: 0.05, texture: "12" },
          { id: "33", percent: 5, texture: "4" }
        ],
        private: false,
        author: "",
        description: "Joelho de porco defumado, cura em salmora de equilíbrio",
        prep_steps: [
          {
            seq: 1,
            description:
              "Coloque a tripa de colágeno para hidratar em água a temperatura ambiente " +
              "30 minutos antes de fazer o ensacamento"
          },
          {
            seq: 2,
            description:
              "Misture todos os temperos e aditivos (sal de cura, emulsificante e antioxidante)," +
              " fazendo uma mistura uniforme"
          },
          {
            seq: 3,
            description:
              "Em uma vasilha grande, com tampa, misture as carnes, fazendo uma massa homogênea"
          },
          {
            seq: 4,
            description:
              "Espalhe a mistura de ingredientes secos sobre a massa de carnes"
          },
          {
            seq: 5,
            description: "Acrescente a água"
          },
          {
            seq: 6,
            description:
              "Misture bem os ingredientes até que seja obtida uma massa bastante homogênea"
          },
          { seq: 7, description: "Ensaque a massa" },
          {
            seq: 8,
            description:
              "Defume a quente, em temperatura de até 85oC, até o interior das peças atingir 72oC"
          }
        ]
      },
      {
        title: "Queijo de Porco",
        id: "5",
        createdAt: "6/07/2020",
        category: "5",
        thumbnail:
          "queijo_de_porco.jpg",
        ingredients: [
          { id: "36", percent: 40, texture: "15" },
          { id: "36", percent: 14, texture: "13" },
          { id: "36", percent: 14, texture: "14" },
          { id: "37", percent: 12, texture: "13" },
          { id: "38", percent: 20, texture: "14" },
          { id: "12", percent: 2.5, texture: "4" },
          { id: "10", percent: 0.30, texture: "4" },
          { id: "25", percent: 0.30, texture: "5" },
          { id: "29", percent: 0.15, texture: "5" },
          { id: "29", percent: 0.15, texture: "16" },
          { id: "39", percent: 5.0, texture: "17" },
          { id: "27", percent: 1, texture: "17" },
          { id: "30", percent: 0.1, texture: "7" },
          { id: "40", percent: 0.25, texture: "5" },
          { id: "41", percent: 0.30, texture: "5" }
        ],
        privacy: "0",
        author: "",
        description: "Produto de origem alemã e italiana, foi trazido para o Brasil, principalmente para a região sul, pelos imigrantes no século XIX." + 
        " Surgiu como forma de aproveitamento integral dos suínos, sendo formulado a partir de miúdos, vísceras e retalhos de " +
        "carne.",
        prep_steps: [
          {
            seq: 1,
            description:
              "Faça um cozimento leve do couro, aproximadamente 20 minutos são o suficiente, antes de moer."
          },
          {
            seq: 2,
            description:
              "Misture bem todos os ingredientes já na textura indicada nos ingredientes, até obter uma massa homogênea"
          },
          {
            seq: 3,
            description:
              "Deixe a massa descansar na geladeira por 12 horas."
          },
          {
            seq: 4,
            description:
              "Forre uma forma com celofane."
          },
          {
            seq: 5,
            description: "Preencha a forma com a massa retirada da geladeira, mantendo a massa bem pressionada."
          },
          {
            seq: 6,
            description:
              "Cozinhe em banho maria com temperatura de 85oC, considerando por 1h por Kg de massa."
          },
          { seq: 7,
             description: "Quando retirar do cozimento faça um choque térmico na peça pronta."
          },
          {
            seq: 8,
            description:
              "Deixe esfriar e em seguida leve para a geladeira por 24 horas."
          }
        ]
      },
      {
        title: "Mortadela",
        id: "6",
        createdAt: "11/04/2018",
        category: "6",
        thumbnail:
          "mortadela.jpg",
        ingredients: [
          { id: "1", percent: 55, texture: "3" },
          { id: "5", percent: 15, texture: "3" },
          { id: "2", percent: 15, texture: "7" },
          { id: "1", percent: 15, texture: "8" },
          { id: "9", percent: 0.214, texture: "9" },
          { id: "11", percent: 1.5, texture: "9" },
          { id: "12", percent: 0.25, texture: "9" },
          { id: "26", percent: 0.35, texture: "10" },
          { id: "27", percent: 0.2, texture: "11" },
          { id: "28", percent: 0.15, texture: "12" },
          { id: "29", percent: 0.05, texture: "12" },
          { id: "33", percent: 5, texture: "4" }
        ],
        private: false,
        author: "",
        description: "Originária da região de Bolonha, na Itália. Os produtos mais antigos similares datam de 1376" +
          " Foi levada para a América Latina pelos imigrantes italianos, no início do século XX. Muito popular no Brasil." + 
          " Pode ser preparara apenas com carnes ou acrescida de pimenta, azeitona, pimentões, alcaparra etc. " +
          " Uma variação muito interessante é a que passa pelo processo de defumação.",
        prep_steps: [
          {
            seq: 1,
            description:
              "Coloque a tripa de colágeno para hidratar em água a temperatura ambiente " +
              "30 minutos antes de fazer o ensacamento"
          },
          {
            seq: 2,
            description:
              "Misture todos os temperos e aditivos (sal de cura, emulsificante e antioxidante)," +
              " fazendo uma mistura uniforme"
          },
          {
            seq: 3,
            description:
              "Em uma vasilha grande, com tampa, misture as carnes, fazendo uma massa homogênea"
          },
          {
            seq: 4,
            description:
              "Espalhe a mistura de ingredientes secos sobre a massa de carnes"
          },
          {
            seq: 5,
            description: "Acrescente a água"
          },
          {
            seq: 6,
            description:
              "Misture bem os ingredientes até que seja obtida uma massa bastante homogênea"
          },
          { seq: 7, description: "Ensaque a massa" },
          {
            seq: 8,
            description:
              "Defume a quente, em temperatura de até 85oC, até o interior das peças atingir 72oC"
          }
        ]
      },
      {
        title: "Calabresa Defumada",
        id: "7",
        createdAt: "11/04/2018",
        category: "1",
        thumbnail: "calabresa_defumada.jpg",
        ingredients: [
          { id: "1", percent: 55, texture: "3" },
          { id: "6", percent: 15, texture: "3" },
          { id: "3", percent: 15, texture: "11" },
          { id: "1", percent: 15, texture: "3" },
          { id: "12", percent: 1.5, texture: "4" },
          { id: "10", percent: 0.214, texture: "4" },
          { id: "35", percent: 0.25, texture: "4" },
          { id: "27", percent: 0.35, texture: "5" },
          { id: "28", percent: 0.05, texture: "7" },
          { id: "28", percent: 0.15, texture: "6" },
          { id: "29", percent: 0.05, texture: "7" },
          { id: "29", percent: 0.15, texture: "6" },
          { id: "34", percent: 5, texture: "4" }
        ],
        private: false,
        author: "",
        prep_steps: [
          {
            seq: 1,
            description:
              "Coloque a tripa de colágeno para hidratar em água a temperatura ambiente " +
              "30 minutos antes de fazer o ensacamento"
          },
          {
            seq: 2,
            description:
              "Misture todos os temperos e aditivos (sal de cura, emulsificante e antioxidante)," +
              " fazendo uma mistura uniforme"
          },
          {
            seq: 3,
            description:
              "Em uma vasilha grande, com tampa, misture as carnes, fazendo uma massa homogênea"
          },
          {
            seq: 4,
            description:
              "Espalhe a mistura de ingredientes secos sobre a massa de carnes"
          },
          {
            seq: 5,
            description: "Acrescente a água"
          },
          {
            seq: 6,
            description:
              "Misture bem os ingredientes até que seja obtida uma massa bastante homogênea"
          },
          { seq: 7, description: "Ensaque a massa" },
          {
            seq: 8,
            description:
              "Defume a quente, em temperatura de até 85oC, até o interior das peças atingir 72oC"
          }
        ]
      },

    ]  
  }
}
