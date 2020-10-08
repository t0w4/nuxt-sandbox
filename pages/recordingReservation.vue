<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="tmpRecordingReservations"
      :hide-default-footer="true"
    >
      <template v-slot:item.editable="props">
        <div style="font-size: 18px; margin: 18px; text-align: center">
          <v-checkbox v-model="props.item.editable" hide-details></v-checkbox>
        </div>
      </template>
      <template v-slot:item.description="props">
        <v-text-field
          v-model="props.item.description"
          :disabled="!props.item.editable"
          maxlength="16"
          counter
        >
        </v-text-field>
      </template>
      <template v-slot:item.searchWord="props">
        <v-text-field
          v-model="props.item.searchWord"
          :disabled="!props.item.editable"
          maxlength="24"
          counter
        >
        </v-text-field>
      </template>
      <template v-slot:item.media="props">
        <v-select
          v-model="props.item.media"
          :disabled="!props.item.editable"
          :items="medias"
        ></v-select>
      </template>
      <template v-slot:item.detectDay="props">
        <v-layout>
          <v-checkbox
            v-model="props.item.detectDayEnable"
            :disabled="!props.item.editable"
            hide-details
          ></v-checkbox>
          <div style="font-size: 18px; margin: 18px; text-align: center">
            <input
              v-model="props.item.detectDay"
              type="date"
              :disabled="!props.item.detectDayEnable || !props.item.editable"
            />
          </div>
        </v-layout>
      </template>
      <template v-slot:item.detectTime="props">
        <v-layout>
          <input
            v-model="props.item.startTime"
            :disabled="!props.item.editable"
            type="time"
          />
          <div style="font-size: 30px; margin: 10px; text-align: center">-</div>
          <input
            v-model="props.item.endTime"
            :disabled="!props.item.editable"
            type="time"
          />
        </v-layout>
      </template>
      <template v-slot:item.execute="props">
        <div style="font-size: 18px; margin: 18px; text-align: center">
          <v-checkbox
            v-model="props.item.execute"
            :disabled="!props.item.editable"
            hide-details
          ></v-checkbox>
        </div>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  asyncData({ store }) {
    store.dispatch('recordingReservation/fetch')
  },
  data() {
    return {
      tmpRecordingReservations: null,
      headers: [
        { text: '編集', value: 'editable', width: '100px' },
        { text: '説明', value: 'description' },
        {
          text: '検索ワード',
          align: 'start',
          sortable: false,
          value: 'searchWord',
        },
        { text: '局', value: 'media', width: '150px' },
        { text: '日付指定', value: 'detectDay', width: '100px' },
        { text: '検知時間', value: 'detectTime', width: '100px' },
        { text: '実行設定', value: 'execute', width: '150px' },
      ],
      medias: [
        'NHK',
        'NHK総合',
        'テレ玉',
        '日本テレビ',
        'テレビ朝日',
        'TBS',
        'テレビ東京',
        'フジテレビ',
        'TOKYO MX',
      ],
    }
  },
  computed: {
    ...mapGetters({ recordingReservations: 'recordingReservation/list' }),
  },
  created() {
    // vuexの値を直接編集することになるため値渡しする
    this.tmpRecordingReservations = JSON.parse(
      JSON.stringify(this.recordingReservations)
    )
  },
  methods: {},
}
</script>
