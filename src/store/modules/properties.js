const state = {
  properties: [
    {
      id: '1',
      name: 'The Precinct',
      description: [
        'Largest room in the AREA portfolio',
        'Natural light and a 4 m high ceiling',
        'Blackout blinds',
        'Outside balcony',
        'Can be divided'
      ],
      capacity: 130,
      floorArea: 128.7,
      price: 999.99,
      extrasPrice: 0,
      dayDelegateMin: 30,
      images: {
        main: 'http://placekitten.com/350/200',
        others: [
          'http://placekitten.com/80/80',
          'http://placekitten.com/80/80',
          'http://placekitten.com/80/80',
          'http://placekitten.com/80/80'
        ]
      },
      catering: false,
    },
    {
      id: '2',
      name: 'The Precinct',
      description: [
        'Natural light',
        'Outside balcony',
        'Catering and breakout areas close by',
      ],
      capacity: 60,
      floorArea: 76,
      price: 875.99,
      extrasPrice: 0,
      dayDelegateMin: 20,
      images: {
        main: 'http://placekitten.com/350/200',
        others: [
          'http://placekitten.com/80/80',
          'http://placekitten.com/80/80',
          'http://placekitten.com/80/80',
          'http://placekitten.com/80/80'
        ]
      },
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