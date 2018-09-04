export default {
  state: {
    eventStart: {
      date: new Date().setMinutes(Math.trunc(new Date().getMinutes() / 10) * 10 + 30),
      label: 'Event Start',
      name: 'event-start',
      placeholder: 'Select date and time',
      disabledDays: [
        new Date(2018, 8, 14),
        new Date(2018, 8, 15),
        new Date(2018, 8, 16),
        new Date(2018, 8, 17)
      ]
    },

    eventEnd: {
      date: '',
      label: 'Event End',
      name: 'event-end',
      placeholder: 'Select date and time',
      disabledDays: [
        new Date(2018, 8, 14),
        new Date(2018, 8, 15),
        new Date(2018, 8, 16),
        new Date(2018, 8, 17)
      ]
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
    },

    capacity: {
      value: 20,
      label:'Capacity',
      name: 'capacity'
    }
  },

  mutations: {
    'UPDATE_FILTER_VALUE'(state, payload) {
      switch (payload.name) {
        case 'event-start':
          state.eventStart.select = payload.select;
          break;
        case 'event-end':
          state.eventEnd.select = payload.select;
          break;
        case 'select-layout':
          state.layout.select = payload.select;
          break;
        case 'capacity':
          state.capacity.value = payload.value;
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