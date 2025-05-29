import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { UsersContext } from "@/context/ContextProvider";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form"

export default function Contact() {

    const { verifyIfUserIsLogged } = useContext(UsersContext);

    useEffect(() => {
        verifyIfUserIsLogged();
    }, [verifyIfUserIsLogged])
    

    const { register, handleSubmit } = useForm()

    const onSubmit = (data : object) => {
        console.log(data)
    }

    return (
        <div className="h-full bg-gray-900">
            <Header /> 

            <section className="w-full bg-gray-950 py-20">
                <div className="flex justify-center mb-3">
                    <button 
                        className="text-gray-950 font-bold bg-purple-500 rounded-full px-5 py-2"
                    >
                        LIMITED OFFERS
                    </button>
                </div>
                

                <h1 className="text-gray-50 text-5xl font-bold text-center mb-3">Contact Us</h1>
                <h3 className="text-gray-50 text-center">Get in touch with our team for any questions, suggestions or complaints</h3>
            </section>

            <main className="flex p-8">
                <aside className="bg-gray-800 p-6 rounded w-[30%] mr-8">
                    <h2 className="text-2xl font-semibold text-gray-50 mb-5">Contact Informations</h2>
                    
                    <div className="mb-7">
                        <h2 className="text-2xl font-semibold text-gray-50 mb-2">Adress</h2>

                        <h3 className="text-gray-400">Av. Paulista, 1000</h3>
                        <h3 className="text-gray-400">São Paulo, SP</h3>
                        <h3 className="text-gray-400">CEP: 01310-100</h3>
                    </div>

                    <div className="mb-7">
                        <h2 className="text-2xl font-semibold text-gray-50 mb-2">Phone</h2>

                        <h3 className="text-gray-400">(11) 3000-1000</h3>
                        <h3 className="text-gray-400">(11) 99999-9999 (Whatsapp)</h3>
                    </div>

                    <div className="mb-7">
                        <h2 className="text-2xl font-semibold text-gray-50 mb-2">Email</h2>

                        <h3 className="text-gray-400">contato@ecommerce.com</h3>
                        <h3 className="text-gray-400">suporte@ecommerce.com</h3>
                    </div>

                    <div className="mb-7">
                        <h2 className="text-2xl font-semibold text-gray-50 mb-2">Opening Hours</h2>

                        <h3 className="text-gray-400">Monday to Friday: 8AM - 6PM</h3>
                        <h3 className="text-gray-400">Saturday: 9AM - 1PM</h3>
                    </div>

                    <div className="mb-7">
                        <h2 className="text-2xl font-semibold text-gray-50 mb-2">Social Media</h2>

                        <div className="flex gap-3 mt-4">
                            <div className="rounded-full px-3 py-1 bg-gray-600 hover:cursor-pointer">
                                <span className="text-purple-500">F</span>
                            </div>

                            <div className="rounded-full px-3 py-1 bg-gray-600 hover:cursor-pointer">
                                <span className="text-purple-500">F</span>
                            </div>

                            <div className="rounded-full px-3 py-1 bg-gray-600 hover:cursor-pointer">
                                <span className="text-purple-500">F</span>
                            </div>

                            <div className="rounded-full px-3 py-1 bg-gray-600 hover:cursor-pointer">
                                <span className="text-purple-500">F</span>
                            </div>
                        </div>
                    </div>
                </aside>

                <div className="bg-gray-800 flex-1 rounded p-6">
                    <h2 className="text-2xl font-semibold text-gray-50 mb-5">Send your Message</h2>

                    <form 
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="flex gap-x-3 mb-3 w-full">
                            <div className="w-1/2">
                                <label 
                                    htmlFor="name"
                                    className="text-gray-400"
                                >
                                    Name
                                </label>
                                <input 
                                    {...register("name")}
                                    type="text" 
                                    placeholder="Rafael"
                                    className="text-gray-400 placeholder:text-gray-400 block p-3
                                    bg-gray-700 rounded outline-0 mt-1 w-full"
                                />
                                
                            </div>

                            <div className="w-1/2">
                                <label 
                                    htmlFor="name"
                                    className="text-gray-400"
                                >
                                    Email
                                </label>
                                <input 
                                    {...register("email")}
                                    type="text" 
                                    placeholder="youremail@example.com"
                                    className="text-gray-400 placeholder:text-gray-400 block p-3
                                    bg-gray-700 rounded outline-0 mt-1 w-full"
                                />   
                            </div>
                        </div>

                        <label 
                            htmlFor="number"
                            className="text-gray-400"
                        >
                            Number
                        </label>
                        <input 
                            {...register("number")}
                            type="text" 
                            placeholder="(00) 00000-0000"
                            className="text-gray-400 placeholder:text-gray-400 block p-3
                            bg-gray-700 rounded outline-0 mb-3 mt-1 w-full"
                        />

                        <label 
                            htmlFor="subject"
                            className="text-gray-400"
                        >
                            Subject
                        </label>
                        <select 
                            {...register("subject")}
                            defaultValue="cs"
                            className="block text-gray-50 p-3 mb-3 mt-1 w-full bg-gray-700
                            rounded"
                        >
                            <option value="cs" >Choose a subject</option>
                            <option value="question">Question</option>
                            <option value="suggestion">Suggestion</option>
                            <option value="complaint">Complaint</option>
                            <option value="compliment">Compliment</option>
                            <option value="other">Other</option>
                        </select>

                        <label 
                            htmlFor="message"
                            className="text-gray-400"
                        >
                            Message
                        </label>
                        <textarea 
                            {...register("message")}
                            placeholder="Enter your message"
                            rows={10}
                            cols={10}
                            className="text-gray-400 placeholder:text-gray-400 block p-3
                            bg-gray-700 rounded outline-0 mb-3 mt-1 w-full"
                        />
                        
                        <div className="flex items-center mt-6">
                            <input 
                                type="checkbox" 
                                name="receiveNewsAndOffers" 
                                className="text-gray-50 mr-2"
                            />
                            <label 
                                htmlFor="receiveNewsAndOffers"
                                className="text-gray-400"
                            >
                                I wish to receive news and offers by email
                            </label>
                        </div>

                        <button
                            className="w-full bg-purple-600 text-gray-950 px-5 py-3 rounded
                            mt-8 hover:cursor-pointer hover:bg-purple-700"
                        >   
                            Send Message
                        </button>
                        
                    </form>
                </div>
            </main>

            <div className="px-8">
                <h2 className="text-2xl font-semibold text-gray-50 mb-2">Our Location</h2>

                {/* Map would be here */}
                <div className="w-full h-[350px] rounded bg-gray-800">

                </div>
            </div>

            <section className="px-8 mt-8 mb-20">
                <h2 className="text-2xl font-semibold text-gray-50 mb-6">FAQ</h2>

                <div className="flex flex-col gap-y-4">
                    {/* Questions */}
                    <div className="bg-gray-800 rounded p-4 ">
                        <h2 className="mb-2 font-semibold text-gray-50">What is the delivery time?</h2>
                        <h3 className="text-gray-50">
                            Our delivery time varies according to your location. 
                            After payment confirmation, you can track the status of 
                            your order in your account
                        </h3>
                    </div>

                    <div className="bg-gray-800 rounded p-4 ">
                        <h2 className="mb-2 font-semibold text-gray-50">How can I track my order?</h2>
                        <h3 className="text-gray-50">
                            You can track your order by accessing the &quot;My Orders&quot; section 
                            in your account or through the tracking code sent by email.
                        </h3>
                    </div>

                    <div className="bg-gray-800 rounded p-4 ">
                        <h2 
                            className="mb-2 font-semibold text-gray-50"
                        >
                            What payment methods are accepted?
                        </h2>

                        <h3 className="text-gray-50">
                            We accept credit cards, bank slip (boleto bancário), PIX, and bank transfer.
                        </h3>
                    </div>

                    <div className="bg-gray-800 rounded p-4 ">
                        <h2 className="mb-2 font-semibold text-gray-50">How does the exchange and return policy work?</h2>
                        <h3 className="text-gray-50">
                            You have up to 7 days after receiving the product to request an 
                            exchange or return. For more information, visit our exchange policy page.
                        </h3>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}