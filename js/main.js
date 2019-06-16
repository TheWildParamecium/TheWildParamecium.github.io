var app = new Vue({
    el: '#app',
    data: {
      description: "I'm a biochemist that got interest in applying the power of informatics in the field of life, diseases, etc. I'm also an enthusiastic of the japanese culture, history and language.",
      mostrar: false,
      hashes: [{
          id: 1
      }, {
          id: 2
      }]
    },

    methods: {
        hola: function() {
            alert('Hola. soy Oyasu!')
            this.mostrar = true
        }
    },

    computed: {
        imprimeFraseRandom: function() {
            if(!this.mostrar)
                return 'no hay frase'
            else
                return 'PRUKOGIIII'
        }
    }
  })