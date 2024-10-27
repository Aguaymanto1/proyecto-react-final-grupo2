export type Producto={
    id:number,
    nombre:string,
    descripcion:string,
    img:string,
    precio:number,
    stock:number,
    tipoproducto: 'normal' | 'promocion' | 'oferta'  // Agregamos el campo tipoProducto

}

export type UserSession={
    id:number,
    nombres:string,
    apellidos:string,
    contrasena:string,
    n_doc:string,
    t_doc:number,
    t_rol:number,
}