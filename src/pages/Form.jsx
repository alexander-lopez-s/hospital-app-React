import '../App.css';

export function Form() {
    return (
      <form className = 'form'>
        <p className='signup-text'>Account maken</p>
        <br></br>
        <label>Uw naam:
        <br></br>
          <input type="text" />
        </label>
        <br></br>
        <label>U e-mailadres:
        <br></br>
          <input type="text" />
        </label>
        <br></br>
        <label>Uw wachtwoord:
        <br></br>
          <input type="text" />
        </label>
        <br></br>
        <br></br>
        <button type="button">Aanmelden</button>
      </form>
    )
  }

