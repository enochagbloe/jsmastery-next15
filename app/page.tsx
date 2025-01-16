import House from "./components/home"

export default function Home (){
  console.log('Which Component am I')

  return (
    <>
        <h1 className = 'text-3xl'> Welcome to NExt JS </h1>
        <House />
    </>
  )
}