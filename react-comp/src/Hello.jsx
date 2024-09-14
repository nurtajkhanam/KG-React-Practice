

const Hello = () => {

  let number = Math.random() *10;

  let name = () =>{
    return 'Nur Taj'
  }
  return (
    <div>
      <h3 style={{color: "red"}} >This is the future speaking.</h3>
      <h4 style={{backgroundColor: "#776691" , color: "yellowgreen"}} >Hey this is {name()} </h4>
      <h3 >Random number is : {Math.round(number)} </h3>

    </div>
  );
};

export default Hello;