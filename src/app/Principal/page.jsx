import Image from "next/image"
import "./page.css"
let variable = 1
let variableprecio = 150

const Talla = () =>{
    return(
        <section>
            <h1>Tallas</h1>
            <ul><li>S</li>
            <li>M</li>
            <li>L</li>
            <li>XL</li></ul>
        </section>
    )
}

const Cantidad = () =>{
    return(
        <section>
            <h3>cantidad </h3>
            <button>-</button>
            <p>1</p>
            <button>+</button>
        </section>
    )
}


export default function Principal(){
    return(
        <div className="div_principal">
        <section className="img_test">
            <Image src="/images/bannerprueba.png" width={850} height={450} className="test_img"/>
        </section>
        <section>
            <h1>NOMBRE DEL PRODUCTO</h1>
            <h3>Stock : {variable}</h3>
            <p>descripcion del producto</p>
            <Talla></Talla>
            <Cantidad/>
            <h3>Precio</h3>
            <p>s/{variableprecio}</p>
            <button>Agregar al carrito</button>
        </section>
    </div>
    )

}