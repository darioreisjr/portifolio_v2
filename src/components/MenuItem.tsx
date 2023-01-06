import Head from 'next/head'
import React from 'react'

interface IMenuItem{
    icone: string
    titulo: string
}

export default function MenuItem(props: IMenuItem) {
    return (
        <>
            <Head>
                <link rel="icon" href="./darioreisportifolio.ico" />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
                />
            </Head>
            <button>
                <span>
                    <i className="material-symbols-outlined" > {props.icone} </i>
                    <span> {props.titulo} </span>
                </span>
            </button>
        </>
    )
}
