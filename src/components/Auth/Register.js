import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button, Container, Grid, ToggleButton } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo_green from '../../assets/logo/logo_green.png';
import Loading from '../Spinner/Loading';
import { userRegister } from '../../store/actions/authAction';
import './Auth.css';
function Register({ mode }) {
  const dispatch = useDispatch()
  const { register, reset, handleSubmit } = useForm();
  const { auth } = useSelector(state => state);
  const { loading } = auth;
  const [values, setValues] = React.useState({
    password: '',
    password2: '',
    showPassword: false,
  });
  const onSubmit = data => {
    dispatch(userRegister(data, reset));
  };
  useEffect(() => {
    if (!auth?.user?.email) {
      setTimeout(() => {
        window?.location.replace("/login")
      }, 5000)
    }
  }, [auth?.user?.email])
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleClickShowPassword2 = () => {
    setValues({
      ...values,
      showPassword2: !values.showPassword2,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Container sx={{ mt: 4, pt: 3, boxShadow: `${mode === 'dark' && '1px 1px 10px #0c1aa9'}` }} maxWidth="xs">
        <div className="logo">
          <Link to="/"><img width="80px" height="80px" src={logo_green} alt="logo" style={{ display: 'block', margin: 'auto', marginBottom: '20px' }} /></Link>
        </div>
        <div className="auth-form">
          <ToggleButton value="one" style={{ fontSize: '20px', textTransform: 'capitalize', border: 'none' }}>
            Register
          </ToggleButton>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={0} textAlign="center">
              <Grid item xs={6}>
                <FormControl sx={{ m: 1, width: '95%' }} variant="standard">
                  <InputLabel htmlFor="standard-adornment-name">First Name</InputLabel>
                  <Input
                    type="text"
                    autoComplete="off"{...register("firstName", { min: 0 })} required
                    sx={{ paddingBottom: '10px' }} />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl sx={{ m: 1, width: '95%' }} variant="standard">
                  <InputLabel htmlFor="standard-adornment-name">Last Name</InputLabel>
                  <Input
                    type="text"
                    autoComplete="off"{...register("lastName", { min: 0 })} required
                    sx={{ paddingBottom: '10px' }} />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl sx={{ m: 1, width: '95%' }} variant="standard">
                  <InputLabel htmlFor="standard-adornment-name">Email</InputLabel>
                  <Input
                    type="text"
                    autoComplete="off"{...register("email", { min: 0 })} required
                    sx={{ paddingBottom: '10px' }} />
                </FormControl>
              </Grid>


              <Grid item xs={12}>
                <FormControl sx={{ m: 1, width: '95%' }} variant="standard">
                  <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                  <Input
                    sx={{ paddingBottom: '10px' }}
                    autoComplete="off"{...register("password", { min: 0 })} required
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {values.showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl sx={{ m: 1, width: '95%' }} variant="standard">
                  <InputLabel htmlFor="standard-adornment-password">Confirm Password</InputLabel>
                  <Input
                    autoComplete="off"{...register("password2", { min: 0 })} required
                    sx={{ paddingBottom: '10px' }}
                    type={values.showPassword2 ? 'text' : 'password'}
                    value={values.password2}
                    onChange={handleChange('password2')}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword2}
                          onMouseDown={handleClickShowPassword2}
                        >
                          {values.showPassword2 ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Grid>
            </Grid>
            {loading ? <div style={{ margin: '20px 0' }}>
              <Loading />
            </div> :
              <Button type="submit" variant="contained" id="auth-btn" style={{ margin: '20px auto', fontSize: '15px', background: '#5865f2', color: '#fff', textTransform: 'capitalize', display: 'block', }}> Register</Button>}
          </form>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
            <ToggleButton style={{ textTransform: 'none', border: 'none' }} value="two" className="text-center">Already user?
            </ToggleButton>
            <ToggleButton style={{ border: 'none' }} value="two" className="text-center"><span><Link to="/login" style={{ color: 'blueviolet' }} className="text text-links"> Login</Link></span>
            </ToggleButton>
          </div>

        </div>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Container>

    </>
  )
}

export default Register;