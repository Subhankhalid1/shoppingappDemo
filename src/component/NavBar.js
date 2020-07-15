import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
// import 'NavBar.css';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },


}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor:"coral"}}>
        <div className="link" style={{ display: "flex", margin: "2%" }}>
          <Link  to="/" style={{color:"white", textDecorationLine:"none" }}>Home</Link>
          <Link to="/Product" style={{ marginLeft: "8%", color:"white", textDecorationLine:"none" }}>Outlet-Store</Link>

          <Link to="/About" style={{ marginLeft: "10%", color:"white", textDecorationLine:"none" }}>About-Us</Link>
          
        </div>
        
      </AppBar>
    </div>
  );
}
