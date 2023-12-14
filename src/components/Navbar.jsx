import Link from "next/link"
import Image from "next/image"
import "./Navbar.css"
export default function Navbar({prop}){
    let n =  "https://www.google.com/webhp?hl=es&ictx=2&sa=X&ved=0ahUKEwibzIjDyYiDAxWMqpUCHdbSCN4QPQgJ"

    return(
        
        <div className="nav_menu">
            <section className="image_text">
              <Image src="/images/logo.png" width={70} height={70}/>
              <h2 className="padding_h2">C-Commerce</h2>
            </section>
            
            <ul>
              <li><Link href="/Productos" className="design_link">{prop}</Link></li>
              <li><Link href="/Contactos" className="design_link">Contactanos</Link></li>
              <li><Link href="/Principal" className="design_link">Carrito</Link></li>
            </ul>
            
            
            
        </div>
    )
}