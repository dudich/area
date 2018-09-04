export default {
  state: [
    {
      id: "1",
      name: 'Day Package',
      description: 'The Day Delegate Package',
      price: 999.90,
      quantity: 0,
      maxQuantity: 1
    },
    {
      id: "2",
      name: 'Tea and Nespresso Coffee',
      description: 'Nespresso coffee and a selection of Tea as well as individual water bottles for each attendee',
      price: 999.90,
      quantity: 0,
      maxQuantity: null
    },
    {
      id: "3",
      name: 'Tea and Filter Coffee',
      description: 'Filter coffee and a selection of Tea as well as individual water bottles for each attendee',
      price: 999.90,
      quantity: 0,
      maxQuantity: null
    },
    {
      id: "4",
      name: 'Polycom',
      description: 'Teleconferencing for up to 8 callers',
      price: 999.90,
      quantity: 0,
      maxQuantity: 1
    },
    {
      id: "5",
      name: 'Projector and Screen',
      description: '2 x 5K Projectors with dual connectivity 2 x 120” screen and hidden speakers',
      price: 999.90,
      quantity: 0,
      maxQuantity: 1
    },
    {
      id: "6",
      name: 'Flipchart',
      description: 'A1 flipchart, stand and markers',
      price: 999.90,
      quantity: 0,
      maxQuantity: 2
    },
    {
      id: "7",
      name: 'Whiteboard',
      description: 'Whiteboard and markers',
      price: 999.90,
      quantity: 0,
      maxQuantity: 3
    }
  ],

  getters: {
    extras: state => state
  }
}