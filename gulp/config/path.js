// Получаем имя папки проекта
import * as nodePath from 'path'; //подключаем модули
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./docs`; // папка с результатом
const srcFolder = `./src`; // папка с исходниками

export const path = {
	build: {
		js: `${buildFolder}/js/`,
		css: `${buildFolder}/css/`,
		html: `${buildFolder}/`,
		images: `${buildFolder}/img/`,
		fonts: `${buildFolder}/fonts/`,
	},
	src: {
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
		scss: `${srcFolder}/scss/style.scss`,
		css: `${srcFolder}/css/**/*.*`,
		js: `${srcFolder}/js/**/*.*`,
		html: `${srcFolder}/*.html`,
	},
	watch: { //слежка
		js: `${srcFolder}/js/**/*.js`,
		scss: `${srcFolder}/scss/**/*.scss`,
		css: `${srcFolder}/css/**/*.css`, 
		html: `${srcFolder}/**/*.html`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
	ftp: ``
}