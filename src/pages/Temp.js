import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import {Link} from "react-router-dom";
import {HOME_ROUTE} from "../routes";

const Temp = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setphone] = useState('')

    return(
        <div className="flex w-full h-screen justify-center items-center" style={{background:"#7F7F8A"}}>
            <section className="rounded-3xl shadow-2xl bg-white">
                <div className="p-8 text-center sm:p-12">
                    <p className="text-3xl font- uppercase tracking-widest">
                        Расчет стоимости ремонта
                    </p>

                    <h2 className="mt-6 text-xl font-bold">
                        С вами свяжется наш замерщик и приедет в удобное время. Мы составим расчет в течение 24 часов и свяжемся с вами
                    </h2>

                    <div className="flex w-full justify-center">

                        <label
                            for="UserEmail"
                            class="w-full mr-5 relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                        >
                            <input
                                type="email"
                                id="UserEmail"
                                placeholder="Email"
                                class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                onChange={(event) => {
                                    event.preventDefault()
                                    setFirstName(event.target.value)
                                }}
                            />

                            <span
                                class="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
                            >
    Имя
  </span>
                        </label>
                        <label
                            htmlFor="UserEmail"
                            className="w-full mr-5 relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                        >
                            <input
                                type="email"
                                id="UserEmail"
                                placeholder="Email"
                                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                onChange={(event) => {
                                    event.preventDefault()
                                    setLastName(event.target.value)
                                }}
                            />

                            <span
                                className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
                            >
    Фамилия
  </span>
                        </label>
                        <label
                            htmlFor="UserEmail"
                            className="w-full relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                        >
                            <input
                                type="email"
                                id="UserEmail"
                                placeholder="Email"
                                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                onChange={(event) => {
                                    event.preventDefault()
                                    setphone(event.target.value)
                                }}
                            />

                            <span
                                className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
                            >
    Телефон
  </span>
                        </label>
                    </div>
                    <button
                        className="mt-8 inline-block w-1/3 rounded-full bg-gray-600 py-4 text-sm font-bold text-white shadow-xl"
                        onClick={() => {
                            console.log(`your name is ${firstName}, your surname is ${lastName} and your phone is ${phone}`)
                            window.location.replace(HOME_ROUTE)
                        }}
                    >
                        Отправить заявку
                    </button>
                </div>
            </section>
        </div>

    )
};

export default Temp;