import React from "react";
import logo from "../../assets/all-images/logo.ico";
import {Link} from "react-router-dom";

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer className="flex flex-col flex-grow text-white bg-pink-950 mt-0 mb-0">
            <div className="grid grid-cols-3 gap-4 m-4 md:flex md:justify-center">
                <div className="m-4 md:flex-1">
                    <div className="mt-5 mb-3">
                        <Link to="/home" className="flex items-center font-sans lg:flex-1 text-sky-500">
                            <img src={logo} alt=""/>
                            <span className="ml-2 text-xl capitalize"
                                  style={{color: '#FBBF24', fontFamily: 'Dancing Script, cursive'}}>
                        FlavorWorld
                            </span>
                        </Link>
                    </div>

                    <p className="text-justify">
                        Bienvenue sur notre site de recettes de cuisine, un espace dédié à la passion culinaire où les
                        saveurs prennent vie. Explorez notre collection diversifiée de recettes alléchantes,
                        soigneusement sélectionnées pour satisfaire tous les palais et inspirer vos aventures
                        culinaires. Que vous soyez un chef expérimenté à la recherche de nouvelles idées ou un novice
                        désireux d'apprendre, notre plateforme regorge de délices à découvrir. De la simplicité des
                        plats quotidiens aux créations plus audacieuses, chaque recette est accompagnée de conseils
                        pratiques pour vous guider à travers chaque étape. Rejoignez notre communauté gourmande,
                        partagez vos créations et embarquez pour un voyage gustatif inoubliable. Bon appétit et
                        bienvenue dans l'univers délicieux de notre site de recettes de cuisine !
                    </p>
                </div>
                <div className="pt-16 m-4 md:flex-2">
                    <h5 className="mb-1 text-amber-400">Siège Social</h5>
                    <p className="mb-4">Av. Hassan 2, Résidence Saada Appt 6 Rabat - Maroc</p>

                    <h5 className="mb-1 text-amber-400">Téléphone:</h5>
                    <p className="mb-4">+212 5 37 78 15 11</p>

                    <p className="mb-1 text-amber-400">Email:</p>
                    <p className="mb-4">DevRecruit@gmail.com</p>

                    <h5 className="mb-1 text-amber-400">Horaire de Travail:</h5>
                    <p className="mb-4">
                        - du lundi au vendredi : 9h à 18h30 <br/>
                        - Samedi matin : 9h à 13h <br/>
                    </p>
                </div>
                <div className="pt-16 m-4 md:flex-2">
                    <h5 className="mb-1 text-amber-400">Abonnez-vous à Nos Emails </h5>
                    <div className="">
                        <input type="email" placeholder="Email"/>
                        <span>
                </span>
                    </div>
                </div>
            </div>
            <div className="col-span-3 m-4 text-center md:col-span-2 md:mx-auto">
                <p className="text-amber-400">
                    droits d'auteur {year}, Developpé par SRMC-Group. tous droits réservés .
                </p>
            </div>
        </footer>

    )
};
export default Footer;