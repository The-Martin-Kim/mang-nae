import React from 'react';
import { Container } from 'react-bootstrap';

function CustomFooter() {
    return (
        <footer style={{ backgroundColor: '#f8f9fa', padding: '10px 0', textAlign: 'center' }}>
            <Container>
                <p className="mb-0">Copyright 2024. 개발하는 꼬망이. All Rights Reserved.</p>
            </Container>
        </footer>
    );
}

export default CustomFooter;
