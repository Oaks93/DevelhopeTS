function App() {
type Person<T>={
  name: T
}
type PersonString=Person<string>
type PersonObj= Person<{firstName:string, lastName:string}>
let Rebe:PersonString= {name:"Rebeca"}
let Alvaro:PersonObj={name:{firstName:"Alvaro", lastName:"Gomez"}}
console.log(Rebe , Alvaro);
let countries:readonly string[] =["Spain","Turkey"]

  return (
    <>
      <div>
        
      </div>

    </>
  )
}

export default App
