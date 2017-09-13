module.exports=function(grunt){
	grunt.initConfig({
		pkg:grunt.file.readJSON("package.json"),
		uglify:{
			options:{
				stripBanners:true,
				banner:'/** <%=pkg.name%>-<%=pkg.version%>.js <%grunt.template.today("yyyy-mm-dd")%>**/\n'
			},
			js:{
				src:'src/js/css-animate.js',
				dest:'build/<%=pkg.name%>-<%=pkg.version%>.min.js'
			}
		},
		watch:{
			options:{},
			build:{
				files:['src/js/*.js','src/css/*.css'],
				tasks:['uglify'],
				options:{
					spawn:false,
					livereload:true
				}
			}
		},
		connect: {
            server: {
                options: {
                    port: 8000,
                    hostname: 'localhost',
                    base: [''],
                    keepalive:true
                }
            }
        }
		
	});
	
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	
	grunt.registerTask('default',['uglify','watch']);
};
