const user = [{
  fname:"Gaurav",
  lname:"Kumar"
},
{
  fname:"Nirbhay",
  lname:"Kumar"
}]

const App = () => {


  let a = 10
  let b = 20
  return(
    <div>
      <h1>
        Monster App
      </h1>
      <p>Building CRUD App</p>
      <p>Some Calculation:{a*b}</p>
      {
        user.map(
          function display(element, index){
            return(
              <div>
                <p>{element.fname}</p>
                <p>{element.lname}</p>
              </div>
            )
          }
        )
       }
    </div>
  )
}

export default App



