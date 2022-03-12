<template>
  <v-container>

    <v-row class="text-center">
      <v-col
        class="mb-5">
        <v-container width="this.innerWidth">
          <div class="d-flex" style="justify-content: center;" id="p5Canvas"></div>

        </v-container>
      </v-col>
      <v-divider/>
      <v-col
        class="mb-5"
        cols="12"
      >
        <v-container>
          <v-row no-gutters class="mb-6">
            <v-col
                sm="8">
              <v-card
                class="pa-2"
                outlined
                tile
              >
                <v-container>
                  <v-row no-gutters>
                    <v-col>
                      <v-color-picker
                        dot-size="25"
                        swatches-max-height="200"
                      ></v-color-picker>
                    </v-col>
                    <v-col>
                      <h5>LED Mode:</h5>
                      <v-divider></v-divider>
                      <v-container id="scroll-target"
                        style="max-height: 200px"
                        class="overflow-y-auto"
                      >
                        <v-list v-scroll>
                          <v-list-item-group v-model="model">
                            <v-list-item
                              v-for="(item, i) in ledModes"
                              :key="i"
                            >
                              <v-list-item-content>
                                <v-list-item-title v-text="item.text"></v-list-item-title>
                              </v-list-item-content>
                            </v-list-item>
                          </v-list-item-group>
                        </v-list>
                      </v-container>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-col>
            <v-col
                sm="4">
              <v-card
                class="pa-2"
                outlined
                tile
              >
                <v-row>
                  <v-col>
                    <v-btn>Reset</v-btn>
                  </v-col>
                  <v-col>
                    <v-btn>Apply</v-btn>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  var keyboardRender = require('@/js/KeyboardRender.js')
  export default {
    name: 'HelloWorld',

    data: () => ({
      innerWidth: window.innerWidth,
      spawnedP5: false,
      ledModes: [
        {
          text: 'Static',
        },
        {
          text: 'Rainbow Wave',
        },
        {
          text: 'Crosshair',
        },
        {
          text: 'Reactive Fade',
        },
        {
          text: 'Custom',
        },
        {
          text: 'Stars',
        },
        {
          text: 'Snowing',
        },
        {
          text: 'Color Cycle',
        },
        {
          text: 'Breathing',
        },
        {
          text: 'Reactive Punch',
        },
        {
          text: 'Circle Spectrum',
        },
        {
          text: 'Reactive Tornado',
        },
        {
          text: 'Water Ripple',
        },
        {
          text: 'Turn Off',
        },
      ],
    }),
    watch: {

    },
    mounted() {
      this.$nextTick(() => {
        window.addEventListener('resize', this.onResize);
      })

      if (this.spawnedP5 === false) {
        const P5 = require('p5')
        new P5(keyboardRender.main)
        this.spawnedP5 = true
      }
    },
    beforeDestroy() { 
      window.removeEventListener('resize', this.onResize); 
    },
    methods: {
      onResize() {
        this.innerWidth = window.innerHeight
      }
    }
  }

</script>
