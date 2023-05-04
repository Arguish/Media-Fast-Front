import { useNavigate } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';

function GoBack() {
  const navigate = useNavigate();
  const location = useLocation();

  function volver() {
    navigate(-1); 
  }

  return (
    <div>
     {location.pathname !== '/' && <ArrowBack onClick={volver}  sx={{ color: '#ee9e09', fontSize: '2.5rem', position: 'fixed',bottom: '20px', left: '20px' }}/>}
    </div>
  );
}


export default GoBack



