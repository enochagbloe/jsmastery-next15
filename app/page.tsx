import Client from "./components/client";

export default function Home(){
  console.log('Server side ')
  return (
    <>
      <h1 className = 'text-3xl'> Welcome to Next JS 15</h1>
      <Client />
    </> 
  )
}