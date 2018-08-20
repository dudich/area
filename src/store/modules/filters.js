export default {
  state: {
    date: {
      items: [],
      label: 'Select Date',
      name: 'select-date'
    },

    time: {
      select: '',
      items: [
        '7:00am - 10am',
        '8:00am - 11am',
        '9:00am - 12am',
        '10:00am - 1:00pm'
      ],
      label: 'Select Time',
      name: 'select-time'
    },

    layout: {
      select: 'Boardroom ~ 22 people',
      items: [
        'U-shape ~ 21 people',
        'Boardroom ~ 22 people',
        'Cabaret ~ 54 people',
        'Classroom ~ 54 people',
        'Banquet ~ 80 people',
        'Theatre ~ 100 people',
        'Cocktail ~ 130 people'
      ],
      label: 'Select Layout',
      name: 'select-layout'
    }
  },

  mutations: {
    'UPDATE_FILTER_SELECT_VALUE'(state, payload) {
      switch (payload.name) {
        case 'select-date':
          state.date.select = payload.select;
          break;
        case 'select-time':
          state.time.select = payload.select;
          break;
        case 'select-layout':
          state.layout.select = payload.select;
          break;
        default:
          console.log('Error');
          break;
      }
    }
  },

  getters: {
    filters: state => state,
  }
}