import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Counter from "../Components/Counter";

export default function Homepage(){
    const name = "John Doe"
    const age = 30
    const address = "123 Main St"
    console.log(name)

    return(
        <div>
            <Navbar/>
            <Counter/>

            <h1>My name is {name}</h1>
            <h2>My age is {age}</h2>
            <h3>I live in {address}</h3>


            <p>
                Loren ipsum dolor sit amet,consecutor.

            </p>
            <Footer/>
        </div>
    )
}