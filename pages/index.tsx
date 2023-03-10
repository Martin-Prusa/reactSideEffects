import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import {createRef, useEffect, useRef, useState} from "react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const el = useRef<HTMLDivElement>()
    const main = useRef<HTMLDivElement>()

    const [show, setShow] = useState(false)

    useEffect(() => {
        const options = {
            //root: main.current,
            rootMargin: '0px',
            threshold: 1
        }

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                console.log(entry.isIntersecting)
                setShow(entry.isIntersecting)
            })
        }, options);

        if (el.current) {
            observer.observe(el.current)
        }

        return () => observer.disconnect()

    }, [])


  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div ref={main} className={styles.main}>
          <div className={styles.text} ref={el}>
              { show ? <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, expedita!</div> : null}
          </div>
      </div>
    </>
  )
}
