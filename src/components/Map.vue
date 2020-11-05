<template>
  <div class="card-deck">
    <div class="card">
      <div class="card-header">Map</div>
      <div class="card-body">
        <l-map class="app-map" :zoom="zoom" :center="center">
          <l-tile-layer :url="url" :attribution="attribution" />
        </l-map>
      </div>
    </div>
  </div>
</template>

<script>
import { latLng } from 'leaflet'
import { LMap, LTileLayer } from 'vue2-leaflet'
import msgMixin from '../mixins/msg-mixin'

export default {
  name: 'AppMap',
  components: {
    LMap,
    LTileLayer
  },
  mixins: [msgMixin],
  data() {
    return {
      zoom: 14,
      center: latLng(10.48801, -66.87919),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }
  },
  created() {
      this.successMsg('Loaded map')
  }
}
</script>

<style scoped>
.app-map {
  height: 600px;
}
</style>