const state = {
  extras: [
    {
      id: "1",
      name: 'The Day Delegate Package',
      description: 'The Day Delegate Package',
      price: 999.90,
      icon: 'fas fa-gift',
      quantity: 1
    },
    {
      id: "2",
      name: 'Tea and Nespresso Coffee',
      description: 'Nespresso coffee and a selection of T Leaf Tea as well as individual water bottles for each attendee',
      price: 999.90,
      icon: 'fas fa-coffee',
      quantity: 50
    },
    {
      id: "3",
      name: 'Polycom',
      description: 'Teleconferencing for up to 8 callers',
      price: 999.90,
      icon: 'fas fa-video',
      quantity: 1,
      maxQuantity: 8
    },
    {
      id: "4",
      name: 'Projector and Screen',
      description: '2 x 5K Projectors with dual connectivity 2 x 120” screen and hidden speakers',
      price: 999.90,
      icon: 'fab fa-r-project',
      quantity: 1,
      maxQuantity: 2
    },
    {
      id: "5",
      name: 'Flipchart',
      description: 'A1 flipchart, stand and markers',
      price: 999.90,
      icon: 'fab fa-flipboard',
      quantity: 1
    },
    {
      id: "6",
      name: 'Whiteboard',
      description: 'Whiteboard and markers',
      price: 999.90,
      icon: 'fas fa-chalkboard-teacher',
      quantity: 1
    }
  ]
};

const mutations = {

};

const actions = {

};

const getters = {
  extras: state => {
    return state.extras;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};