module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? '/babylon-vue' : '/',
	devServer: {
		proxy: 'http://localhost:8080/'
	}
}