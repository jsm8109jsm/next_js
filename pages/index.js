import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <button onClick={() => router.push("/about")}>about</button>
      <Link href={"/profile"}>
        <button>profile</button>
      </Link>
    </div>
  )
}
