const state = [
    {
      id: 1,
      name: 'meeting room name',
      status: 'Available',
      description: 'LorumIpsumLorumIpsumLorumIpsumLorumIpsumLorumIpsumLorumIpsumLorumIpsumLorumIpsumLorumIpsum',
      capacity: '1000',
      type: 'Theater',
      price: 999.99,
      extrasPrice: 0,
      images: {
        main: 'http://placekitten.com/350/200',
        others: [
          'http://placekitten.com/80/80',
          'http://placekitten.com/80/80',
          'http://placekitten.com/80/80',
          'http://placekitten.com/80/80'
        ]
      },
      arrangementTypes: [
        {
          type: 1
        },
        {
          type: 2
        },
        {
          type: 3
        }
      ],
      catering: false,
    },

  {
    id: 2,
    name: 'Room',
    status: 'Available',
    description: 'LorumIpsumLorumIpsumLorumIpsumLorumIpsumLorumIpsumLorumIpsumLorumIpsumLorumIpsumLorumIpsum',
    capacity: '50',
    type: 'Room',
    price: 100.00,
    extrasPrice: 0,
    images: {
      main: 'http://placekitten.com/350/200',
      others: [
        'http://placekitten.com/80/80',
        'http://placekitten.com/80/80',
        'http://placekitten.com/80/80',
        'http://placekitten.com/80/80'
      ]
    },
    arrangementTypes: [
      {
        type: 1
      },
      {
        type: 2
      },
      {
        type: 3
      }
    ],
    catering: false,
  }
];

const mutations = {
  CHANGE_EXTRAS_PRICE (state, payload) {
    //state =  state[state.indexOf(payload.id)];
    console.log(state.indexOf(payload.id));
  }
};

const actions = {

};

const getters = {
  properties: state => state
};

export default {
  state,
  mutations,
  actions,
  getters
};