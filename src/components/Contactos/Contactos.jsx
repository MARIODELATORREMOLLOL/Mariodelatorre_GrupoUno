import React from 'react';

export default function Contactos() {
    return (
        <div className="bg-black min-h-screen">
            <div className="container mx-auto max-w-4xl p-8">
                <h1 className="text-4xl font-semibold text-yellow-500 mb-6 text-center">Contáctenos</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-yellow-500">Información de Contacto</h2>
                        <p className="mb-2 text-yellow-300">Dirección: Independencia 178, Quellón, Chile</p>
                        <p className="mb-2 text-yellow-300">Fono: +56983052387</p>
                        <p className="text-yellow-300">Email: barrancazondacontacto@gmail.com</p>
                    </div>
                </div>
                
                <form className="grid grid-cols-1 gap-6 bg-gray-800 p-6 rounded-lg shadow-lg">
                    <div>
                        <label htmlFor="name" className="block text-yellow-300">Nombre</label>
                        <input 
                            type="text" 
                            className="w-full px-4 py-2 rounded bg-gray-700 text-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            placeholder="Tu nombre" 
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-yellow-300">Correo electrónico</label>
                        <input 
                            type="email" 
                            id="email" 
                            className="w-full px-4 py-2 rounded bg-gray-700 text-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            placeholder="Tu correo electrónico" 
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-yellow-300">Mensaje</label>
                        <textarea 
                            className="w-full px-4 py-2 rounded bg-gray-700 text-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            placeholder="Escribe tu mensaje aquí..." 
                        ></textarea>
                    </div>
                    <button 
                        type="submit" 
                        className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-md hover:bg-yellow-400 transition duration-300"
                    >
                        Enviar Mensaje
                    </button>
                </form>
            </div>
        </div>
    );
}
