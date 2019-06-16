var app = new Vue({
    el: '#app',
    data: {
      language: "en",
      description: {
          en: "I'm a biochemist that got interest in applying the power of informatics in the field of life, diseases, etc. I'm also an enthusiastic of the japanese culture, history and language.",
          sp: "Soy un bioquímico que está interesado en aplicar el poder de la informática en el campo de la vida, especialmente en la investigación de enfermedades. También soy un gran entusiasta de la cultura japonesa, así como su historia y lenguaje",
          jp: "私の個人ページのへようこぞう．私はでマラガの大学で生物化学を卒業して現在に生物情報学を働くことを目指しています。それに日本の文化や歴史などに関心を持ているし５年まえから日本語を勉強します"
      },
      media: {
          en: "Find more about me",
          sp: "Encuentrame en las redes",
          jp: "私についてを調べて"
      }
    },

    methods: {
        changeLanguage: function(newlanguage) {
            this.language = newlanguage
        }
    },

    computed: {
        showContent: function() {
            newLanguage = this.language;
            return this.description[newLanguage]
        },
        showMedia: function() {
            newLanguage = this.language;
            return this.media[newLanguage]
        }
    }
    
})