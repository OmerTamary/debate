import { Helmet } from 'react-helmet-async';
// @mui
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
// components
import Iconify from '../components/iconify';
import { BlogPostCard, BlogPostsSort, BlogPostsSearch } from '../sections/@dashboard/blog';
// mock
import POSTS from '../_mock/blog';
// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' },
];

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Home | Minimal UI </title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center"  justifyContent="space-between" mb={2}>
          <Typography variant="h2"  align="center" >
            Debate center
          </Typography>
          {/* <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
            Create room
          </Button> */}
        </Stack>
        <Stack direction="row"  alignItems="center" justifyContent="space-between" mb={2}>
          <Typography variant="h7" align="left" >
          welcome to our platform where people from all backgrounds can come together to engage in thoughtful and informed discussions about political, economic, environmental, and other important issues.
           Our mission is to promote knowledge sharing, cultural exchange, and mutual understanding through civil and respectful discourse. 
           Join us in exploring diverse perspectives and gaining new insights on the topics that matter most.
          </Typography>
        </Stack>
        {/* <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between"> */}
        <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
            <BlogPostsSearch posts={POSTS} placeholder="Search for debates"/>
        </Stack>

        <Grid container spacing={3}>
          {POSTS.map((post, index) => (
            <BlogPostCard key={post.id} post={post} index={index} />
          ))}
        </Grid>
      </Container>
    </>
  );
}
