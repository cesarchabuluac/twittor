/**
 * Funcion para guardar en el cache dinamico
 * @param {*} dynamic_cache Nombre del cache dinamico
 * @param {*} req El request de la peticion
 * @param {*} res El response de la peticion
 */
function actualizaCacheDinamico (dynamicCache, req, res) {

    if (res.ok) {
        caches.open( dynamicCache ).then(cache => {
            //Primero almacenamos en el cache el request
            cache.put(req, res.clone() );
            return res.clone();
        });
    } else {
        //Ya fallio la cache, la red y casi no hay nada que hacer, pero retornamos la respuesta como viene
        return res;
    }

}