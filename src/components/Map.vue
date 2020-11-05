<template>
  <div class="card-deck">
    <div class="card">
      <div class="card-header">Map</div>
      <div class="card-body">
        <l-map
          ref="map"
          @ready="onMapReady"
          class="app-map"
          :zoom="zoom"
          :center="center"
        >
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
import '@geoman-io/leaflet-geoman-free'
import 'leaflet/dist/leaflet.css'
import '@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css'

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
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }
  },
  methods: {
    onMapReady() {
      this.map = this.$refs.map.mapObject
      this.map.pm.addControls({
        position: 'topleft',
        drawCircle: false
      })
      this.map.on('pm:create', ({shape, layer}) => {
        this.successMsg(`Created ${shape} with ${layer._latlngs}`)
        console.log(layer)
      })
    }
  }
}
</script>

<style scoped>
.app-map {
  height: 600px;
}
</style>
