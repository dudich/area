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
      images: [
        {
          id: '1',
          big: 'http://placekitten.com/350/200',
          thumb: 'http://placekitten.com/80/80'
        },
        {
          id: '2',
          big: 'http://placekitten.com/350/200',
          thumb: 'http://placekitten.com/80/80'
        }
      ],
      catering: false,
    },
    {
      id: '2',
      name: 'East Precinct',
      description: [
        'Natural light',
        'Outside balcony',
        'PropertyPrice and breakout areas close by',
      ],
      capacity: 60,
      floorArea: 76,
      price: 875.99,
      extrasPrice: 0,
      dayDelegateMin: 20,
      images: [
        {
          id: '1',
          big: 'http://placekitten.com/350/200',
          thumb: 'http://placekitten.com/80/80'
        },
        {
          id: '2',
          big: 'http://placekitten.com/350/200',
          thumb: 'http://placekitten.com/80/80'
        },
        {
          id: '3',
          big: 'http://placekitten.com/350/200',
          thumb: 'http://placekitten.com/80/80'
        },
        {
          id: '4',
          big: 'http://placekitten.com/350/200',
          thumb: 'http://placekitten.com/80/80'
        }
      ],
      catering: false,
    },
    {
      id: '3',
      name: 'West Precinct',
      description: [
        'Smaller room',
        'Natural Daylight',
        'Catering and breakout areas close by',
      ],
      capacity: 50,
      floorArea: 52.7,
      price: 400.00,
      extrasPrice: 0,
      dayDelegateMin: 20,
      images: [
        {
          id: '1',
          big: 'http://placekitten.com/350/200',
          thumb: 'http://placekitten.com/80/80'
        },
        {
          id: '2',
          big: 'http://placekitten.com/350/200',
          thumb: 'http://placekitten.com/80/80'
        },
        {
          id: '3',
          big: 'http://placekitten.com/350/200',
          thumb: 'http://placekitten.com/80/80'
        },
        {
          id: '4',
          big: 'http://placekitten.com/350/200',
          thumb: 'http://placekitten.com/80/80'
        },
        {
          id: '5',
          big: 'http://placekitten.com/350/200',
          thumb: 'http://placekitten.com/80/80'
        },
        {
          id: '6',
          big: 'http://placekitten.com/350/200',
          thumb: 'http://placekitten.com/80/80'
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