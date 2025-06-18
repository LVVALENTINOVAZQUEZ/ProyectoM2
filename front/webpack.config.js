// module.exports = {
// entry: "./scripts/index.js",
// output:{
//     path: __dirname + "/public",
//     filename: "bundle.js"
// }
// }

module.exports = {
entry: {
    app: "./scripts/index.js",
    form: "./scripts/formulario.js"
},
output:{
    path: __dirname + "/public",
    filename: "[name].bundle.js"
}
}