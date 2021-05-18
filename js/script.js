var app = new Vue(
    {
        el: "#root",
        data: {
            images: [
                "https://www.ilovevaldinon.it/wp-content/uploads/2020/02/alpe-di-siusi-1.jpg.webp",
                "https://images.everyeye.it/img-notizie/40-ore-video-paesaggi-mozzafiato-pianeta-v3-299389.jpg",
                "https://miro.medium.com/max/1200/1*Gsq1yHsb3cV2JKuj5c_SoQ.jpeg",
                "http://www.corsofotografico.com/wp-content/uploads/2020/09/quando-un-teleobiettivo-e%CC%80-meglio-di-un-grandangolo-nella-foto-di-paesaggio-featured.jpg",
                "https://lh3.googleusercontent.com/proxy/s20IaS6Dk860EKdYxc-OymGh6zaUDOxSLQZUDBFI19xZ8ZOfAdGgp49PyuvEX1b_MKwTIEHOAwnnVWrr2NV1jmP2EjCyZ16fnuBYGTD3Xtg6fYQkWX0IzxyzkhbxZhN0MlT9snLIpqllNIExWobqvG8ujbVkotFuGnYtKx_9oxqFs_Q",
                "https://tecnicafotografica.net/wp-content/uploads/2020/05/zajdgnxsmeg-e1590956555206.jpg"
            ],
            imageIndex: 0
        },
        methods: {
            nextImage: function() {
                this.imageIndex++;

                if (this.imageIndex == this.images.length) {
                    this.imageIndex = 0;
                }
            },
            prevImage: function() {
                this.imageIndex--;

                if (this.imageIndex == -1) {
                    this.imageIndex = this.images.length -1;
                }
            }
        },
        mounted() {
            setInterval(() => {
                this.imageIndex++;
                if (this.imageIndex ==  this.images.length) {
                    this.imageIndex = 0;
                }
            }, 3000);
        }
    }
)