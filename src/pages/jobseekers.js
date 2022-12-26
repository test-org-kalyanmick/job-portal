import Head from 'next/head';
import { Box, Container, Grid, Pagination } from '@mui/material';
import { jobseekers } from '../__mocks__/jobseekers';
import { JobseekerListToolbar } from '../components/jobseeker/jobseeker-list-toolbar';
import { JobseekerCard } from '../components/jobseeker/jobseeker-card';
import { DashboardLayout } from '../components/dashboard-layout';

const Page = () => (
  <>
    <Head>
      <title>
        Jobseekers | Material Kit
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <JobseekerListToolbar />
        <Box sx={{ pt: 3 }}>
          <Grid
            container
            spacing={3}
          >
            {jobseekers.map((jobseeker) => (
              <Grid
                item
                key={jobseeker.id}
                lg={6}
                md={6}
                xs={12}
              >
                <JobseekerCard jobseeker={jobseeker} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 3
          }}
        >
          <Pagination
            color="primary"
            count={3}
            size="small"
          />
        </Box>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
