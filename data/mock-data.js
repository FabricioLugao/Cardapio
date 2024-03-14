import Categoria from "../models/Categoria";
import Prato from "../models/Prato";

export const CATEGORIAS = [
  new Categoria("c1", "Italiana", "#f5428d"),
  new Categoria("c2", "Rápido e fácil", "#f54242"),
  new Categoria("c3", "Lanches", "#f5a442"),
  new Categoria("c4", "Japonesa", "#f5d142"),
  new Categoria("c5", "Brasileira", "#368dff"),
  new Categoria("c6", "Saudável", "#41d95d"),
  new Categoria("c7", "Sorvetes", "#9eecff"),
  new Categoria("c8", "Carnes", "#b9ffb0"),
  new Categoria("c9", "Açaí", "#ffc7ff"),
  new Categoria("c10", "Peixes", "#47fced"),
];

export const PRATOS = [
  new Prato(
    "m1",
    ["c1", "c2"],
    "Espaguete com molho de tomate",
    "barato",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg",
    [
      "4 Tomates",
      "1 Colher de chá de azeite",
      "1 Cebola",
      "250g Espaguete",
      "Especiarias e ervas",
      "Queijo (opcional)",
    ],
    [
      "Corte os tomates e a cebola em pedaços pequenos.",
      "Ferva um pouco de água - adicione sal quando ferver.",
      "Coloque o espaguete na água fervente - eles devem estar prontos em cerca de 10 a 12 minutos.",
      "Enquanto isso, aqueça um pouco de azeite e adicione a cebola cortada.",
      "Após 2 minutos, adicione os pedaços de tomate, sal, pimenta e suas outras especiarias.",
      "O molho será feito assim que o espaguete estive no ponto.",
      "Sinta-se à vontade para adicionar um pouco de queijo por cima do prato acabado.",
    ],
    true,
    false
  ),
  new Prato(
    "m2",
    ["c3"],
    "Hambúrguer",
    "barato",
    "https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg",
    [
      "300g de carne de boi",
      "1 tomate",
      "1 Pepino",
      "1 Cebola",
      "Ketchup",
      "1 pães de hambúrguer",
    ],
    [
      "Forme 2 bifes de hambúrguer",
      "Frite os hambúrgueres por 4 minutos de cada lado",
      "Frite rapidamente os pães por 1 minuto de cada lado",
      "Passe ketchup no pães",
      "Sirva o hambúrguer com tomate, pepino e cebola",
    ],
    false,
    true
  ),
  new Prato(
    "m3",
    ["c3"],
    "X-Buguer",
    "barato",
    "https://burgerx.com.br/assets/img/galeria/burgers/x-salada.jpg",
    [
      "300g de carne de boi",
      "1 tomate",
      "2 fatias de mussarela",
      "1 folha de alface",
      "Ketchup",
      "1 pães de hambúrguer",
    ],
    [
      "Frite os hambúrgueres com um pouquinho de óleo , quando estiver frito cubra com a mussarela.",
      "Retire do fogo e coloque no pão",
      "Passe no pão a maionese e coloque o alface e tomate",
    ],
    false,
    false
  ),
];
