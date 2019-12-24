module.exports = {
    lintOnSave: false,
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "./src/assets/scss/_variables.scss";
                              @import "./src/assets/scss/_mixins.scss";`
            }
        }
    }
}
