const state = [
    {
      id: 1,
      name: 'meeting room name',
      status: 'Available',
      description: 'LorumIpsumLorumIpsumLorumIpsumLorumIpsumLorumIpsumLorumIpsumLorumIpsumLorumIpsumLorumIpsum',
      capacity: '1000',
      type: 'Theater',
      price: 999.99,
      extrasPrice: 999.99,
      addExtras: false,
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