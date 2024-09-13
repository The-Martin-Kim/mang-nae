/* eslint-disable jsx-a11y/heading-has-content */

import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';
import CustomButtons from './CustomButtons';
import ErrorPage from "../components/ErrorPage";
import MarkdownRenderer from "./MarkdownRenderer";
import {useSinglePost} from "../hooks/useSinglePost";

function BlogPost() {
    const { slug } = useParams();
    const { post, content, metaData } = useSinglePost(slug);

    if (!post) return <ErrorPage />;

    return (
        <Container style={{ marginBottom: '30px' }}>
            <Typography variant="h4" component="h2" gutterBottom>
                {metaData.title || slug.replace('-', ' ')}
            </Typography>

            <Typography variant="body2" color="text.secondary">
                Written by INE.TODAY on {metaData.date ? metaData.date : 'Unknown'}
            </Typography>

            {Array.isArray(metaData.category) && metaData.category.length > 0 && (
                <Box marginTop={1}>
                    {metaData.category.map((cat, index) => (
                        <Typography
                            key={index}
                            variant="body2"
                            color="primary"
                            component="span"
                            style={{ marginRight: '10px' }}
                        >
                            #{cat}
                        </Typography>
                    ))}
                </Box>
            )}

            <hr style={{ marginBottom: '20px', marginTop: '10px' }} />

            <MarkdownRenderer content={content} />

            <CustomButtons />
        </Container>
    );
}

export default BlogPost;