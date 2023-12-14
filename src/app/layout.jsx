import Principal from "./Principal/page"
import Navbar from "@/components/Navbar"
import Producto_R from "@/components/Producto_R"
export default function RootLayout({children}) {
  return (
    <html lang='es'>
      <body>
         <Navbar prop ="Productos" ></Navbar>
         <Principal/>
         <Producto_R/>
         <div >{children}</div>


      </body>
    </html>

   
  )
}
