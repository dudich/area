export default {
  state: {
    select: {
      event: 'Meeting',
      date: [],
      time: '',
      layout: 'Boardroom'
    },
    items: {
      selectEvent: [
        'Breakfast/Lunch/Dinner',
        'Cocktail',
        'Conference',
        'Corporate Function',
        'Exhibition',
        'Group Accommodation',
        'Meeting',
        'Party',
        'Wedding',
        'Xmas'
      ],
      selectDate: [],
      selectTime: [
        '7:00am - 10am',
        '8:00am - 11am',
        '9:00am - 12am',
        '10:00am - 1:00pm'
      ],
      selectLayout: [
        'U-shape',
        'Boardroom',
        'Cabaret',
        'Classroom',
        'Banquet',
        'Theatre',
        'Cocktail'
      ]
    }
  },

  mutations: {
    'UPDATE_FILTER_SELECT_VALUE'(state, payload) {
      switch (payload.label) {
        case 'Select Event':
          state.select.event = payload.select;
          break;
        case 'Select Date':
          state.select.date = payload.select;
          break;
        case 'Select Time':
          state.select.time = payload.select;
          break;
        case 'Select Layout':
          state.select.layout = payload.select;
          break;
        default:
          console.log('Error');
          break;
      }
    }
  },

  getters: {
    filtersSelect: state => state.select,
    filtersItems: state => state.items
  }
}