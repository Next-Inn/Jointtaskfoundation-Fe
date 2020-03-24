export default {
	mode: 'universal',
	/*
  ** Headers of the page
  */
	head: {
		title: process.env.npm_package_name || '',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Nunito+Sans&display=swap' },
			{
				rel: 'stylesheet',
				type: 'text/css',
				href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
			}
		],
		script: [
			{
				src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js',
				type: 'text/javascript'
			},
			{
				src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js',
				type: 'text/javascript'
			},
			{
				src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js',
				type: 'text/javascript'
			}
		]
	},
	/*
  ** Customize the progress-bar color
  */
	loading: { color: '#00f' },
	/*
  ** Global CSS
  */
	css: [],
	/*
  ** Plugins to load before mounting the App
  */
	plugins: [
		'~/plugins/vee-validate.js'
	],
	/*
  ** Nuxt.js dev-modules
  */
	buildModules: [],
	/*
  ** Nuxt.js modules
  */
	modules: [
		// Doc: https://bootstrap-vue.js.org
		'bootstrap-vue/nuxt',
		// Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/axios',
		'@nuxtjs/pwa',
		// Doc: https://github.com/nuxt-community/dotenv-module
		'@nuxtjs/dotenv',
		'@nuxtjs/auth',
	],

	bootstrapVue: {
		componentPlugins: [
			'NavbarPlugin',
			'LayoutPlugin',
			'FormPlugin',
			'FormCheckboxPlugin',
			'FormInputPlugin',
			'FormRadioPlugin',
			'ToastPlugin',
			'ModalPlugin',
			'CardPlugin',
			'FormPlugin',
			'ButtonPlugin',
			'AlertPlugin',
			'CarouselPlugin',
			'CollapsePlugin'
		]
	},
	/*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
	axios: {
		baseURL: 'https://jointaskfoundation.herokuapp.com/api/v1'
	},

	/**
	 *
	 * auth module
	 */
	auth: {
		strategies: {
			local: {
				endpoints: {
					login: {
						url: '/auth/signin',
						method: 'post',
						propertyName: 'data.token'
					},
					register: {
						url: '/auth/signup',
						method: 'post',
						propertyName: 'data.message'
					},
					user: {
						url: '/auth/me',
						method: 'get',
						propertyName: 'data'
					}
				},
				tokenType: 'Bearer'
			}
		},
		localStorage: {
			prefix: 'auth.'
		  },
	},

	/*
  ** Build configuration
  */
	build: {
		/*
    ** You can extend webpack config here
    */
		transpile: [
			'vee-validate/dist/rules'
		],
		extend (config, ctx) {}
	}
};
