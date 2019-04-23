Vue.component("camera-component", {
  props:[ 'name', 'introduced',
        'mount', 'film', 'exposure'],

  template:  `
    <tr>
          <td>{{name}}</td>
          <td>{{introduced}}</td>
          <td>{{mount}}</td>
          <td>{{film}}</td>
          <td>{{exposure}}
     </tr>`

})

var vm = new Vue ({

  el: "#myApp",
  data: {
    nameInput: "",
    introducedInput: "",
    mountInput: "",
    filmInput: "",
    exposureInput: "",
    idInput: "",
    cameras: [{

      name: "Nikon F1",
      introduced: "1959",
      mount: "F Mount",
      film: "35mm",
      exposure: "manual"
    }, {

      name: "Pentax K1000",
      introduced: "1976",
      mount: "K Bayonet Mount",
      film: "35mm",
      exposure: "manual"
    }, {

      name: "Canon AE1",
      introduced: "1976",
      mount: "Canon FD",
      film: "35mm",
      exposure: "manual, shutter priority"
    }, {

      name: "Polaroid SX-70",
      introduced: "1972",
      mount: "Fixed Glass",
      film: "600 Instant Film",
      exposure: "manual aperture slide"
    }, {

      name: "Contax T2",
      introduced: "1990",
      mount: "Fixed Lens",
      film: "35mm",
      exposure: "Auto, Aperture Priority"
    }]

  },

  methods: {
    deleteLight: function (lightObject){
      this.cameras = this.cameras.filter(function(cameras){
        if (cameras.name !== lightObject.name) {
          return true;
        } else {
          return false;
        }
      })
    },

    addCamera: function () {
      let newCamera = {
        name: this.nameInput,
        introduced: this.introducedInput,
        mount: this.mountInput,
        film: this.filmInput,
        exposure: this.exposureInput,
      };
      this.cameras.push(newCamera);

    }
  }


});