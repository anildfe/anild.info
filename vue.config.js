module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "./node_modules/bootstrap/scss/bootstrap.scss";
                              @import "./src/assets/scss/_variables.scss";
                              @import "./src/assets/scss/_mixins.scss";`
            }
        }
    }
}
