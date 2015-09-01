fos.Router.setData({"base_url":"","routes":{"tablero_sala":{"tokens":[["variable","\/","[^\/]++","sala"],["text","\/tablero\/sala"]],"defaults":[],"requirements":[],"hosttokens":[]},"indicador_dimensiones":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/indicador\/dimensiones"]],"defaults":[],"requirements":[],"hosttokens":[]},"indicador_datos_filtrar":{"tokens":[["text","\/indicador\/datos\/filtrar"]],"defaults":[],"requirements":[],"hosttokens":[]},"indicador_datos_mapa":{"tokens":[["text","\/indicador\/datos\/mapa"]],"defaults":[],"requirements":[],"hosttokens":[]},"change_clasificacion_uso":{"tokens":[["variable","\/","[^\/]++","codigo_clasificacion"],["text","\/tablero\/usuario\/change"]],"defaults":[],"requirements":[],"hosttokens":[]},"indicador_favorito":{"tokens":[["text","\/indicador\/favorito"]],"defaults":[],"requirements":[],"hosttokens":[]},"get_indicador_ficha":{"tokens":[["text","\/ficha"],["variable","\/","[^\/]++","id"],["text","\/indicador"]],"defaults":[],"requirements":[],"hosttokens":[]},"sala_guardar":{"tokens":[["text","\/sala\/guardar"]],"defaults":[],"requirements":[],"hosttokens":[]},"usuario_asignar_sala":{"tokens":[["variable","\/","[^\/]++","accion"],["variable","\/","[^\/]++","id_sala"],["text","\/sala"],["variable","\/","[^\/]++","id"],["text","\/usuario"]],"defaults":[],"requirements":[],"hosttokens":[]},"sala_get_imagenes":{"tokens":[["text","\/"],["variable","\/","[^\/]++","id"],["text","\/sala\/get_imagenes"]],"defaults":[],"requirements":[],"hosttokens":[]},"minsal_indicadores_indicadorrest_getindicador":{"tokens":[["variable","\/","[^\/]++","dimension"],["variable","\/","[^\/]++","id"],["text","\/rest-service\/data"]],"defaults":[],"requirements":{"_method":"GET"},"hosttokens":[]},"minsal_indicadores_indicadorrest_getdatosindicador":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/rest-service\/data"]],"defaults":[],"requirements":{"_method":"GET"},"hosttokens":[]},"minsal_indicadores_indicadorrest_getindicadores":{"tokens":[["text","\/rest-service\/indicadores"]],"defaults":[],"requirements":{"_method":"GET"},"hosttokens":[]},"origen_dato_conexion_probar":{"tokens":[["text","\/conexion\/probar"]],"defaults":[],"requirements":[],"hosttokens":[]},"origen_dato_conexion_probar_sentencia":{"tokens":[["text","\/sentencia\/probar"]],"defaults":[],"requirements":[],"hosttokens":[]},"origen_dato_leer":{"tokens":[["text","\/leer"],["variable","\/","[^\/]++","id"],["text","\/origen_dato"]],"defaults":[],"requirements":[],"hosttokens":[]},"configurar_campo":{"tokens":[["text","\/configurar\/campo"]],"defaults":[],"requirements":[],"hosttokens":[]},"origen_dato_get_campos":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/origen_dato\/get_campos"]],"defaults":[],"requirements":[],"hosttokens":[]},"sala_acciones_custom_list":{"tokens":[["text","\/acciones\/list"],["variable","\/","[^\/]++","id"],["text","\/sala"]],"defaults":[],"requirements":[],"hosttokens":[]},"accion_guardar":{"tokens":[["text","\/accion\/guardar"],["variable","\/","[^\/]++","id"],["text","\/sala"]],"defaults":[],"requirements":[],"hosttokens":[]},"sala_get_comentarios":{"tokens":[["text","\/"],["variable","\/","[^\/]++","idSala"],["text","\/sala\/get_comentarios"]],"defaults":[],"requirements":[],"hosttokens":[]},"sala_set_comentario":{"tokens":[["text","\/set_comentario"],["variable","\/","[^\/]++","id"],["text","\/sala"]],"defaults":[],"requirements":[],"hosttokens":[]},"sala_get_usuarios":{"tokens":[["text","\/"],["variable","\/","[^\/]++","idSala"],["text","\/sala\/get_usuarios"]],"defaults":[],"requirements":[],"hosttokens":[]},"sala_set_usuario":{"tokens":[["variable","\/","[^\/]++","accion"],["variable","\/","[^\/]++","id_usuario"],["text","\/set_usuario"],["variable","\/","[^\/]++","id"],["text","\/sala"]],"defaults":[],"requirements":[],"hosttokens":[]},"minsal_costos_costeorest_getdatoscosteo":{"tokens":[["variable","\/","[^\/]++","codigo"],["text","\/rest-service\/costos\/data"]],"defaults":[],"requirements":{"_method":"GET"},"hosttokens":[]},"get_grid_data":{"tokens":[["variable","\/","[^\/]++","periodo_ingreso"],["variable","\/","[^\/]++","id"],["text","\/grid"]],"defaults":[],"requirements":[],"hosttokens":[]},"set_grid_data":{"tokens":[["variable","\/","[^\/]++","periodo_ingreso"],["variable","\/","[^\/]++","id"],["text","\/grid\/save"]],"defaults":[],"requirements":[],"hosttokens":[]},"get_dependencias":{"tokens":[["text","\/dependencias"],["variable","\/","[^\/]++","codigo_establecimiento"],["text","\/estructura\/establecimiento"]],"defaults":[],"requirements":[],"hosttokens":[]},"get_indicador":{"tokens":[["variable",".","xml|json|html","_format"],["variable","\/","[^\/\\.]++","dimension"],["variable","\/","[^\/]++","id"],["text","\/rest-service\/data"]],"defaults":{"_format":"json"},"requirements":{"_method":"GET","_format":"xml|json|html"},"hosttokens":[]},"get_datos_indicador":{"tokens":[["variable",".","xml|json|html","_format"],["variable","\/","[^\/\\.]++","id"],["text","\/rest-service\/data"]],"defaults":{"_format":"json"},"requirements":{"_method":"GET","_format":"xml|json|html"},"hosttokens":[]},"get_indicadores":{"tokens":[["variable",".","xml|json|html","_format"],["text","\/rest-service\/indicadores"]],"defaults":{"_format":"json"},"requirements":{"_method":"GET","_format":"xml|json|html"},"hosttokens":[]},"get_datos_costeo":{"tokens":[["variable",".","xml|json|html","_format"],["variable","\/","[^\/\\.]++","codigo"],["text","\/rest-service\/costos\/data"]],"defaults":{"_format":"json"},"requirements":{"_method":"GET","_format":"xml|json|html"},"hosttokens":[]}},"prefix":"","host":"localhost","scheme":"http"});