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
          { id: "1", percent: 55, texture: "10", sequence: 1 },
          { id: "6", percent: 15, texture: "10", sequence: 2 },
          { id: "3", percent: 15, texture: "11", sequence: 3 },
          { id: "1", percent: 15, texture: "3", sequence: 4 },
          { id: "12", percent: 1.5, texture: "4", sequence: 5 },
          { id: "10", percent: 0.214, texture: "4", sequence: 6 },
          { id: "13", percent: 0.25, texture: "4", sequence: 7  },
          { id: "27", percent: 0.35, texture: "5", sequence: 8  },
          { id: "28", percent: 0.05, texture: "7", sequence: 9  },
          { id: "28", percent: 0.15, texture: "6", sequence: 10  },
          { id: "29", percent: 0.05, texture: "7", sequence: 11  },
          { id: "29", percent: 0.15, texture: "6", sequence: 12  },
          { id: "34", percent: 5, texture: "4", sequence: 13  }
        ],
        private: false,
        sample: false,
        author: "",
        description: "Linguiça condimentada com pimenta calabresa e grãos de erva doce. " +
          "Foi criada no Brasil sob influência dos imigrantes italianos",
        prep_steps: [
          {
            seq: 1,
            description:
              "Misturar todos os temperos secos, COM EXCESSÃO do antioxidante, e despeje a mistura sobre a carne. " +
              "Bata a mistura até que obtenha uma massa homogênea. " +
              "Despeje a água e continue batendo a massa até que fique 'liguenta'. Leve a mistura para geladeira e deixe descansar por 12 horas."
          },
          {
            seq: 2,
            description:
              "Coloque a tripa de colágeno para hidratar em água a temperatura ambiente " +
              "30 minutos antes de fazer o ensacamento"
          },
          {
            seq: 3,
            description:
              "Faça o pré aquecimento do defumador, ajustando sua temperatura em 50oC."
          },
          {
            seq: 4,
            description:
              "Mistura a massa de carne e temperos secos com o antioxidante, batendo até obter uma massa bem homogênea."
          },
          {
            seq: 5,
            description:
              "Ensacar a massa. Depois de ensacada, fure a peça para garantir que todas as bolhas de ar sejam retiradas."
          },
          {
            seq: 6,
            description:
              "Leve a peça para o defumador, ajustando sua temperatura para 80oC."
          },
          {
            seq: 7,
            description: "Acione a fumaça por 4 horas, ou pelo tempo que produzir o resultado de sua preferência."
          },
          {
            seq: 8,
            description:
              "Mantenha a linguiça no defumador até que seu interior atinja 72oC."
          },
          { 
            seq: 9,
            description: "Quando terminar a defumação, mergulhe a linguiça em água gelada para diminuir o enrugamento e melhor a aparência final."
          },
          {
            seq: 10,
            description:
              "Leve a linguiça para a geladeira e mantenha resfriada por 12 horas antes de fatiar."
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
          { id: "1", percent: 65, texture: "1", sequence: 1 },
          { id: "7", percent: 25, texture: "1", sequence: 2 },
          { id: "6", percent: 10, texture: "1", sequence: 3 },
          { id: "12", percent: 2, texture: "4", sequence: 4 },
          { id: "11", percent: 0.214, texture: "4", sequence: 5 },
          { id: "29", percent: 0.1, texture: "16", sequence: 6 },
          { id: "29", percent: 0.1, texture: "5", sequence: 7 },
          { id: "28", percent: 0.05, texture: "5", sequence: 8 },
          { id: "28", percent: 0.05, texture: "6", sequence: 9 },
          { id: "42", percent: 0.02, texture: "4", sequence: 10 },
          { id: "43", percent: 0.6, texture: "4", sequence: 11 },
          { id: "34", percent: 1.0, texture: "4", sequence: 12 },
          { id: "34", percent: 0.04, texture: "4", sequence: 13 }
        ],
        private: false,
        sample: false,
        author: "",
        description: "Produto curado, ensacado em tripa fina, bem condimentado. Passa por uma rápida fermentação de até 24 horas." +
        " O período de cura é relativamente curto, sendo consumido após 30 dias. Muito boa para ser apreciada em uma roda de bons amigos.",
        prep_steps: [
          {
            seq: 1,
            description:
              "Misture a água sem cloro com a cultura e reserve."
          },
          {
            seq: 2,
            description:
              "Lave bem a tripa natural e coloque hidratar em água a temperatura ambiente 90 minutos antes de fazer o ensacamento."
          },
          {
            seq: 3,
            description:
              "Misturar todos os temperos secos, COM EXCESSÃO do antioxidante, e despeje a mistura sobre a carne. " +
              "Bata a mistura até que obtenha uma massa homogênea. " +
              "Despeje a água e continue batendo a massa até que fique 'liguenta'. Leve a mistura para geladeira e deixe descansar por 12 horas."
          },
          {
            seq: 3,
            description:
              "Mistura a massa de carne e temperos secos com o antioxidante, batendo até obter uma massa bem homogênea. Embora na lista de " +
              " ingredientes tenhamos corante de carmin, por experiência própria a cor do produto final muda pouco, e por isso normalmente não " +
              "uso corante em minhas produções."
            },          
          {
            seq: 4,
            description:
              "Ensaque a massa. Faça furos nos peças para garantir que as bolhas de ar internas sejam removidas."
          },
          {
            seq: 5,
            description:
              "Fermente a linguiça em um ambiente protegido de insetos, com temperatura de 30oC por 24 horas."
          },
          {
            seq: 6,
            description:
              "Terminada a fermentação, coloque as peças na câmara, e a maturação deve ser terminada em 25~30 dias, ou na geladeira, " +
              " e a maturação deve ser terminada em 10~15 dias, para que sequem."
          }
        ]
      },
      {
        title: "Linguiça Fresca Estilo Toscana",
        id: "3",
        createdAt: "11/04/2018",
        category: "3",
        thumbnail:
          "linguica_fresca_pura.jpg",
        ingredients: [
          { id: "3", percent: 80, texture: "10", sequence: 1 },
          { id: "6", percent: 20, texture: "1", sequence: 2 },
          { id: "10", percent: 0.214, texture: "4", sequence: 3 },
          { id: "12", percent: 1.5, texture: "4", sequence: 4 },
          { id: "25", percent: 0.3, texture: "5", sequence: 5 },
          { id: "27", percent: 0.4, texture: "5", sequence: 6 },
          { id: "13", percent: 0.3, texture: "4", sequence: 7 },
          { id: "14", percent: 0.3, texture: "4", sequence: 8 },
          { id: "34", percent: 5, texture: "4", sequence: 9  }
        ],
        private: false,
        sample: true,
        author: "",
        description: "Linguiça fresca estilo toscana, pura carne suína. Receita básica.",
        prep_steps: [
          {
            seq: 2,
            description:
              "Lave bem a tripa natural e coloque para hidratar em água a temperatura ambiente 90 minutos antes de fazer o ensacamento."
          },
          {
            seq: 3,
            description:
              "Misturar todos os temperos secos, COM EXCESSÃO do antioxidante, e despeje a mistura sobre a carne. " +
              "Bata a mistura até que obtenha uma massa homogênea. " +
              "Despeje a água e continue batendo a massa até que fique 'liguenta'. Leve a mistura para geladeira e deixe descansar por 12 horas."
          },
          {
            seq: 3,
            description:
              "Misture a massa de carne e temperos secos com o antioxidante, batendo até obter uma massa bem homogênea."
            },          
          {
            seq: 4,
            description:
              "Ensaque a massa."
          },
          {
            seq: 5,
            description: "Leve as linguiças prontas para a geladeira para que descansem por 12 horas."
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
          { id: "49", percent: 100, texture: "4" },
          { id: "48", percent: 200, texture: "4" }
        ],
        private: false,
        sample: true,
        author: "",
        description: "Joelho de porco defumado, cura em salmora de equilíbrio",
        prep_steps: [
          {
            seq: 1,
            description:
              "Limpe os joelhos, retirando excesso de gordura e peles indesejáveis."
          },
          {
            seq: 2,
            description:
              "Separe uma parte da salmoura para injetar na peça em preparação. Essa quantidade deve corresponder " +
              "a 10% do peso da peça em preparação. Para melhorar a apresentação final do produto, injete a salmoura " +
              "no sentido perpendicular das fibras da carne em preparação. Esse trabalho é importante para garantir que " +
              "peças grandes sejam corretamente curadas."
          },
          {
            seq: 3,
            description:
              "Mergulhe a peça em preparação na salmoura, de maneira que fique completamente coberta."
          },
          {
            seq: 4,
            description:
              "Mantenha a vasilha onde temos a salmoura e o joelho em ambiente refrigerado por 8 dias."
          },
          {
            seq: 5,
            description:
              "Remova as peças da salmoura, faça a amarração desejada e leve ao defumador."
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
        private: false,
        sample: false,
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
          { id: "1", percent: 90, texture: "15", sequence: 1 },
          { id: "6", percent: 10, texture: "11", sequence: 2 },
          { id: "12", percent: 2, texture: "4", sequence: 3 },
          { id: "10", percent: 0.214, texture: "4", sequence: 4 },
          { id: "14", percent: 0.15, texture: "9", sequence: 5 },
          { id: "25", percent: 0.2, texture: "7", sequence: 6 },
          { id: "25", percent: 0.2, texture: "6", sequence: 7 },
          { id: "35", percent: 0.05, texture: "5", sequence: 8 },
          { id: "44", percent: 0.10, texture: "5", sequence: 9 },
          { id: "28", percent: 0.05, texture: "5", sequence: 10 },
          { id: "27", percent: 0.2, texture: "5", sequence: 11 },
          { id: "45", percent: 20, texture: "18", sequence: 12 },
          { id: "46", percent: 3, texture: "4", sequence: 13 }
        ],
        private: false,
        sample: false,
        author: "",
        description: "Originária da região de Bolonha, na Itália. Os produtos mais antigos similares datam de 1376" +
          " Foi levada para a América Latina pelos imigrantes italianos, no início do século XX. Muito popular no Brasil." + 
          " Pode ser preparara apenas com carnes ou acrescida de pimenta, azeitona, pimentões, alcaparra etc. " +
          " Uma variação muito interessante é a que passa pelo processo de defumação.",
        prep_steps: [
          {
            seq: 1,
            description:
              "Corte o pernil em cubos pequenos. Acrescente o sal comum e o sal de cura, embale e leve para a geladeira por 24 horas."  
          },
          {
            seq: 2,
            description:
              "Passadas 24 horas, leve a carne ao congelador por pelo menos 2 horas. Depois esse período, moa a carne usando disco #3 e em " +
              "refaça a moagem usando o disco #6."
          },
          {
            seq: 3,
            description:
              "Coloque a tripa de colágeno para hidratar em água sem cloro por 30 minutos"
          },
          {
            seq: 4,
            description:
              "Adicione os temperos em pó e o vinho à carne moída, misturando bem. Em seguida emulsifique a mistura usando o gelo triturado. "
          },
          {
            seq: 5,
            description:
              "Conseguimos um resultado melhor se os cubos de gordura forem escaldados em água fervente e em seguida mergulhados em " +
              "água gelada. Depois disso deixe-os escorrer o excesso de água."
          },
          {
            seq: 6,
            description:
              "Misture a carne emulsificada, os cubos de gordura e a pimenta em grãos. "
          },
          {
            seq: 7,
            description:
               "Ensaque utilizando tripa de colágeno previamente hidratada. Terminado o ensacamento, fure a peça para retirar as bolhas de ar."
          },
          {
            seq: 8,
            description:
              "Deixar a peça descansar pelo menos 12 horas na câmara de maturação produz resultados melhores."
          },
          {
            seq: 9,
            description: "Cozinhe a peça em água com temperatura de 70oC."
          },
          {
            seq: 10,
            description:
              "Terminado o cozimento mergulhe a peça em água gelada para diminuir o enrugamento e dar uma melhor aparência."
          },
          { seq: 11,
            description: "Depois do choque térmico deixe a peça descansar 24 horas na câmara de maturação."
          },
          {
            seq: 13,
            description:
              "Defume a frio por 4 horas, usando fumaça azulada bem leve."
          },
          {
            seq: 14,
            description:
              "Terminada a defumação, retorne a peça à câmara de maturação pode 1 semana."
          }
        ]
      },
      {
        title: "Salmoura para Cura Úmida",
        id: "7",
        createdAt: "11/04/2018",
        category: "1",
        thumbnail: "salmoura.jpg",
        ingredients: [
          { id: "34", percent: 100, texture: "4" },
          { id: "12", percent: 5.0, texture: "4" },
          { id: "10", percent: 1.0, texture: "4" },
          { id: "25", percent: 0.3, texture: "6" },
          { id: "27", percent: 0.3, texture: "5" },
          { id: "33", percent: 0.5, texture: "4" },
          { id: "50", percent: 0.02, texture: "5" },
        ],
        private: false,
        sample: false,
        author: "",
        prep_steps: [
          {
            seq: 1,
            description:
              "No dia anterior ao preparo das peças coloque as pimentas do reino na água para aromatizar. A pimenta é colocada no dia " +
              "anterior para que possamos usa-las inteiras, evitando assim que seus grãos sejam injetados nas peças. Se vocẽ não se importar " +
              "com a presença desses grãos no interior das peças, pode evitar esse preparo do dia anterior."
          },
          {
            seq: 2,
            description:
              "Misture todos os temperos restantes na água, dissolvendo bem os ingredientes de maneira a garantir uma salmoura uniforme."
          }
        ]
      },

    ]  
  }
}
