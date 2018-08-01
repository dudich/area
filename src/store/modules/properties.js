const state = {
  properties: [
    {
      id: 1,
      name: 'meeting room name',
      status: 'Available',
      description: 'LorumIpsumLorumIpsumLorumIpsumLorumIpsumLorumIpsumLorumIpsumLorumIpsumLorumIpsumLorumIpsum',
      capacity: 1000,
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
          id: 1
        },
        {
          id: 2
        },
        {
          id: 3
        },
        {
          id: 4
        },
        {
          id: 5
        },
        {
          id: 6
        }
      ],
      catering: false,
    },

    {
      id: 2,
      name: 'Room',
      status: 'Available',
      description: 'LorumIpsumLorumIpsumLorumIpsumLorumIpsumLorumIpsumLorumIpsumLorumIpsumLorumIpsumLorumIpsum',
      capacity: 50,
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
          id: 1
        },
        {
          id: 2
        },
        {
          id: 3
        },
        {
          id: 4
        },
        {
          id: 5
        },
        {
          id: 6
        }
      ],
      catering: false,
    }
  ]
};

const mutations = {
  'CHANGE_EXTRAS_PRICE'(state, payload) {
    const index = state.properties.map((item) => item.id).indexOf(payload.id);
    state.properties[index].extrasPrice = payload.total;
  }
};

const actions = {};

const getters = {
  properties: state => {
    return state.properties;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};