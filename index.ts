import {ProductController} from "./controllers"
import * as minimist from "minimist"

function parseaArgumentos(argv){
    const rta = minimist(argv)
    if (rta.search) {
        return {search:rta.search}
    } else {
        return {}
    }
}

async function controladorA(argv) {
    const controlador = new ProductController()
    const rta = await controlador.processOptions(argv)
    return rta
}


async function main(){
    const argumentosConsola = process.argv.slice(2)
    const argumentosParseados = parseaArgumentos(argumentosConsola)
    
    console.log(await controladorA(argumentosParseados))
        
}

main()