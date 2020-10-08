const testData = [
  {
    editable: false,
    description: '',
    searchWord: 'ポケモン',
    media: '',
    detectDayEnable: false,
    detectDay: '',
    startTime: '',
    endTime: '',
    execute: true,
  },
  {
    editable: false,
    description: '',
    searchWord: '金ロー,金曜ロードショー',
    media: '',
    detectDayEnable: false,
    detectDay: '',
    startTime: '',
    endTime: '',
    execute: true,
  },
  {
    editable: false,
    description: '',
    searchWord: 'e-sports,esports',
    media: '',
    detectDayEnable: false,
    detectDay: '',
    startTime: '',
    endTime: '',
    execute: true,
  },
  {
    editable: false,
    description: '',
    searchWord: '紅葉',
    media: '',
    detectDayEnable: false,
    detectDay: '',
    startTime: '',
    endTime: '',
    execute: true,
  },
  {
    editable: false,
    description: '',
    searchWord: 'カニ,蟹',
    media: '',
    detectDayEnable: false,
    detectDay: '',
    startTime: '',
    endTime: '',
    execute: true,
  },
]

export const state = () => ({
  list: [],
})

export const getters = {
  list: (state) => state.list,
}

export const mutations = {
  fetch(state, { recordingReservations }) {
    state.list = recordingReservations
  },
}

export const actions = {
  fetch({ commit }) {
    const recordingReservations = testData
    commit('fetch', { recordingReservations })
  },
}
