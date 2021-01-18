import './App.css';
import React from 'react';


function Header(props){
  return(
      <header className= 'App'>
         <h1>{props.welcome}</h1>
      </header>
  )
}

class Odometer extends React.Component{
  constructor(){

      super();
      this.state = {
          counter : 0,
      };
  }


  addToOdometer(num){
    this.state.counter+= num
    if (this.state.counter >= 9999){
      this.state.counter -= 9999
    }
    
    this.setState( { 
      counter: this.state.counter
    });
  };

  render(){
      return(
          <>
              <h1 className= 'counter'>{String(this.state.counter).padStart(4,0)}</h1>
              <div className='main'>
                <button className= 'counter' onClick={ () => this.addToOdometer(1)}>1</button>
                <button className= 'counter' onClick={ () => this.addToOdometer(10)}>10</button>
                <button className= 'counter' onClick={ () => this.addToOdometer(100)}>100</button>
                <button  className= 'counter'onClick={ () => this.addToOdometer(1000)}>1000</button>
              </div>
          </>
      )
  }

}



function Footer(props){
  return(
      <header className= 'App'>
         <h1>{props.trademark}</h1>
      </header>
  )
}


function App() {
  return (
    <>
      
      <Header welcome = "Hello everyone Welcome To My Odometer"/>
      <Odometer />
      <Footer trademark = "copy Right @ ASAC"/>
    </>
  );
}

export default App;
