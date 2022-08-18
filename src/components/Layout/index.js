import Footer from "../Footer"
import Navbar from "../Navbar"


const Layout = ({children})=>{
   return(
      <>
         <Navbar />
         <View>
            {children}
         </View>
         <Footer />
      </>
   )
}

export default Layout