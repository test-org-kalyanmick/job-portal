import { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@mui/material';
import { getInitials } from '../../utils/get-initials';

export const JobseekerListResults = ({ jobseekers, ...rest }) => {
  const [selectedJobseekerIds, setSelectedJobseekerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedJobseekerIds;

    if (event.target.checked) {
      newSelectedJobseekerIds = jobseekers.map((jobseeker) => jobseeker.id);
    } else {
      newSelectedJobseekerIds = [];
    }

    setSelectedJobseekerIds(newSelectedJobseekerIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedJobseekerIds.indexOf(id);
    let newSelectedJobseekerIds = [];

    if (selectedIndex === -1) {
      newSelectedJobseekerIds = newSelectedJobseekerIds.concat(selectedJobseekerIds, id);
    } else if (selectedIndex === 0) {
      newSelectedJobseekerIds = newSelectedJobseekerIds.concat(selectedJobseekerIds.slice(1));
    } else if (selectedIndex === selectedJobseekerIds.length - 1) {
      newSelectedJobseekerIds = newSelectedJobseekerIds.concat(selectedJobseekerIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedJobseekerIds = newSelectedJobseekerIds.concat(
        selectedJobseekerIds.slice(0, selectedIndex),
        selectedJobseekerIds.slice(selectedIndex + 1)
      );
    }

    setSelectedJobseekerIds(newSelectedJobseekerIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedJobseekerIds.length === jobseekers.length}
                    color="primary"
                    indeterminate={
                      selectedJobseekerIds.length > 0
                      && selectedJobseekerIds.length < jobseekers.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  Name
                </TableCell>
                <TableCell>
                  Contact Details
                </TableCell>
                <TableCell>
                  Location
                </TableCell>
                <TableCell>
                  Phone
                </TableCell>
                <TableCell>
                  Registration date
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {jobseekers.slice(0, limit).map((jobseeker) => (
                <TableRow
                  hover
                  key={jobseeker.id}
                  selected={selectedJobseekerIds.indexOf(jobseeker.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedJobseekerIds.indexOf(jobseeker.id) !== -1}
                      onChange={(event) => handleSelectOne(event, jobseeker.id)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Avatar
                        src={jobseeker.avatarUrl}
                        sx={{ mr: 2 }}
                      >
                        {getInitials(jobseeker.name)}
                      </Avatar>
                      
                      <Box sx={{
                        alignItems: 'left',
                        width: '100%'
                      }}>
                        <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {jobseeker.name}
                      </Typography>
                      <Typography
                        color="textPrimary"
                        variant="body2"
                      >
                        {`${jobseeker.currentDesignation} at ${jobseeker.currentOrganization}`}
                      </Typography>
                      <Typography
                        color="textPrimary"
                        variant="body2"
                      >
                        {`${jobseeker.monthsOfExperiance / 12 | 0} years and ${jobseeker.monthsOfExperiance % 12} months`}
                      </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>
                  <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <EmailIcon fontSize="small" />
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {jobseeker.email}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <PhoneIphoneIcon fontSize="small" />
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {jobseeker.phone}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <LocationOnIcon fontSize="small" />
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {`${jobseeker.address.city}, ${jobseeker.address.state}, ${jobseeker.address.country}`}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {`${jobseeker.address.city}, ${jobseeker.address.state}, ${jobseeker.address.country}`}
                  </TableCell>
                  <TableCell>
                    {jobseeker.phone}
                  </TableCell>
                  <TableCell>
                    {format(jobseeker.createdAt, 'dd/MM/yyyy')}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={jobseekers.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

JobseekerListResults.propTypes = {
  jobseekers: PropTypes.array.isRequired
};
