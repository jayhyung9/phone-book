import './App.css';
import Grid from '@mui/material/Grid'
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'


function App() {
  return (
    <div className='App'>
      <h1> 연락처 기능기 </h1>
      <Grid container spacing={2}>
      <Grid size={6}>
          <ContactForm/>
        </Grid>
        <Grid size={6}>
          <ContactList/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
