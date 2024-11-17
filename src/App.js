import React, {useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import BlogList from './BlogListView/BlogList';
import BlogPost from './BlogPostView/BlogPost';
import {Container} from '@mui/material';
import CustomNavbar from "./components/CustomNavbar";
import "./App.css"
import CustomFooter from "./components/CustomFooter";
import ErrorPage from "./components/ErrorPage";
import ProfilePage from "./components/ProfilePage";
import ReactGA from "react-ga4";

const gaTrackingId = process.env.REACT_APP_GA_TRACKING_ID;
ReactGA.initialize(gaTrackingId);


function PageTracker() {
    const location = useLocation();

    useEffect(() => {
        ReactGA.send({hitType: 'pageview', page: location.pathname});
    }, [location]);

    return null;
}

function App() {
    return (
        <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
            <Router>
                <CustomNavbar/>

                <Container style={{flex: '1', paddingTop: '70px'}}>
                    <PageTracker/>

                    <Routes>
                        <Route path="/" element={<BlogList/>}/>
                        <Route path="/about" element={<ProfilePage/>}/>
                        <Route path="/post/:slug" element={<BlogPost/>}/>
                        <Route path="*" element={<ErrorPage/>}/>
                    </Routes>
                </Container>

                <CustomFooter/>
            </Router>
        </div>
    );
}

export default App;
