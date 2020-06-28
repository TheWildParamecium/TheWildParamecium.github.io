var app = new Vue({
    el: '#app',
    data: {
      language: "en",
      description: {
          en: "I'm a biochemist that got interest in applying the power of informatics in the field of life, diseases, etc. I'm also an enthusiastic of the japanese culture, history and language. Currently I'm developing my skills at Web Development with MERN stack (although this page is done with Vuejs)",
          sp: "Soy un bioquímico que está interesado en aplicar el poder de la informática en el campo de la vida, especialmente en la investigación de enfermedades. También soy un gran entusiasta de la cultura japonesa, así como su historia y lenguaje. Actualmente estudio y desarrollo mis habilidades de desarrollo web con el stack MERN (aunque esta página está hecha con Vuejs)",
          jp: "私の個人ページのへようこぞう．私はマラガの大学で生物化学を卒業して現在に生物情報学を働くことを目指しています。それに日本の文化や歴史などに関心を持ているし５年まえから日本語を勉強します. 最近Web Developmentを習っています(MERN Stack)"
      },
      media: {
          en: "Find more about me",
          sp: "Encuentrame en las redes",
          jp: "私についてを調べて"
      },
      projects: {
          en: "Check out my personal projects:",
          sp: "Echa un vistazo a mis proyectos:",
          jp: "自分で作ったアプリをご覧ください"
      },
      bloglist: {
          en: "Bloglist app. A blogger like Web Application where users can post blogs that drew their attention",
          sp: "Bloglist app. Una aplicación web basada en blogs típicos, donde el usuario puede postear blogs externos que le han llamado la atención",
          jp: "ブログリストアプリ。ブログのようなアプリ。人々は気になったブログを記録できて他人に見せます"
      },
      visualizer: {
          en: "Visualizer. An online tool for getting easy visualizations. You only need to choose the type of plot you want, put the data and click the button.",
          sp: "Visualizer. Una herramienta online para crear gráficos fácilmente. Solo necesitas elegir el tipo de gráfico, introducir los datos y pulsar el botón.",
          jp: "ビスアライサ。簡単にグラフをできる道具。適当なグラフを選んでデータを入力してたのしみに"
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
        },
        showProjects: function() {
            newLanguage = this.language;
            return this.projects[newLanguage]
        },
        showVisualizer: function() {
            newLanguage = this.language;
            return this.visualizer[newLanguage]
        },
        showBloglist: function() {
            newLanguage = this.language;
            return this.bloglist[newLanguage]
        }
    }
    
})