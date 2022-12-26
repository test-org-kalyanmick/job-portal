import PropTypes from "prop-types";
import { Avatar, Box, Card, CardContent, Divider, Grid, Typography, Link } from "@mui/material";
import { Clock as ClockIcon } from "../../icons/clock";
import { Download as DownloadIcon } from "../../icons/download";
import { getInitials } from "../../utils/get-initials";

import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import NextLink from "next/link";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import PublicIcon from "@mui/icons-material/Public";
import Person2Icon from "@mui/icons-material/Person2";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import ShareIcon from "@mui/icons-material/Share";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const checkObjHasProp = (name, obj) => obj && obj[name] && obj[name].length
const NO_DATA_PLATE = "???";

export const JobseekerCard = ({ jobseeker, ...rest }) => (
  <Card
    sx={{
      display: "flex",
      flexDirection: "column",
      height: "100%",
    }}
    {...rest}
  >
    <CardContent>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            alignItems: "left",
            display: "flex",
          }}
        >
          <Avatar src={jobseeker.avatarUrl} sx={{ mr: 2 }}>
            {getInitials(jobseeker.name) || NO_DATA_PLATE}
          </Avatar>

          <Box
            sx={{
              alignItems: "left",
              width: "100%",
            }}
          >
            <Typography color="textPrimary" variant="body1">
              {jobseeker.name || NO_DATA_PLATE}
            </Typography>
            <Typography color="textPrimary" variant="body2">
              {`${jobseeker.currentDesignation || NO_DATA_PLATE} at ${jobseeker.currentOrganization || NO_DATA_PLATE}`}
            </Typography>
            <Typography color="textPrimary" variant="body2">
              {
                jobseeker.monthsOfExperiance && !isNaN(jobseeker.monthsOfExperiance)? 
                  `${(jobseeker.monthsOfExperiance / 12) | 0} years and ${
                  jobseeker.monthsOfExperiance % 12
                  } months` 
                    : NO_DATA_PLATE}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ alignSelf: "right" }}>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
            }}
          >
            <EmailIcon fontSize="small" />
            <Typography color="textPrimary" variant="body2">
              {jobseeker.email || NO_DATA_PLATE}
            </Typography>
          </Box>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
            }}
          >
            <PhoneIphoneIcon fontSize="small" />
            <Typography color="textPrimary" variant="body2">
              {jobseeker.phone || NO_DATA_PLATE}
            </Typography>
          </Box>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
            }}
          >
            <LocationOnIcon fontSize="small" />
            <Typography color="textPrimary" variant="body2">
              {`${jobseeker.address.city || NO_DATA_PLATE}, ${jobseeker.address.state || NO_DATA_PLATE}, ${jobseeker.address.country || NO_DATA_PLATE}`}
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box style={{ marginTop: 10 }}>
        {(jobseeker.skills || []).map((skill) => (
          <span>
            <Chip size="small" label={`${skill.technology} | ${skill.monthsOfExperiance}M`} />
            &nbsp;
          </span>
        ))}
      </Box>
      {/* <Typography align="center" color="textPrimary" gutterBottom variant="h5">
        {jobseeker.title}
      </Typography>
      <Typography align="center" color="textPrimary" variant="body1">
        {jobseeker.description}
      </Typography> */}
    </CardContent>
    <Box sx={{ flexGrow: 1 }} />
    <Divider />
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid
          item
          sx={{
            alignItems: "center",
            display: "flex",
          }}
        >
          <ClockIcon color="action" />
          <Typography color="textSecondary" display="inline" sx={{ pl: 1 }} variant="body2">
            Updated 2hr ago
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            alignItems: "center",
            display: "flex",
          }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            {checkObjHasProp("linkedIn", jobseeker.usefulLinks) && (<NextLink href={jobseeker.usefulLinks.linkedIn} passHref>
              <Link target="_blank" variant="subtitle2" underline="hover">
                <LinkedInIcon color="action" fontSize="small" />
              </Link>
            </NextLink>)}
            {checkObjHasProp("github", jobseeker.usefulLinks) && (<NextLink href={jobseeker.usefulLinks.github} passHref>
              <Link target="_blank" variant="subtitle2" underline="hover">
                <GitHubIcon color="action" fontSize="small" />
              </Link>
            </NextLink>)}
            {checkObjHasProp("website", jobseeker.usefulLinks) && (<NextLink href={jobseeker.usefulLinks.website} passHref>
              <Link target="_blank" variant="subtitle2" underline="hover">
                <PublicIcon color="action" fontSize="small" />
              </Link>
            </NextLink>)}
            <NextLink href="#" passHref>
              <Link target="_blank" variant="subtitle2" underline="hover">
                <Person2Icon color="action" fontSize="small" />
              </Link>
            </NextLink>
            {checkObjHasProp("resume", jobseeker.usefulLinks) && (<NextLink href={jobseeker.usefulLinks.resume} passHref>
              <Link target="_blank" variant="subtitle2" underline="hover">
                <CloudDownloadIcon color="action" fontSize="small" />
              </Link>
            </NextLink>)}
            <NextLink href="#" passHref>
              <Link target="_blank" variant="subtitle2" underline="hover">
                <ShareIcon color="action" fontSize="small" />
              </Link>
            </NextLink>
            <NextLink href="#" passHref>
              <Link target="_blank" variant="subtitle2" underline="hover">
                <StarBorderIcon color="action" fontSize="small" />
              </Link>
            </NextLink>
            {/* <NextLink href="#" passHref>
              <Link target="_blank" variant="subtitle2" underline="hover">
                <StarIcon color="action" fontSize="small" />
              </Link>
            </NextLink> */}
          </Stack>
          {/* <DownloadIcon color="action" />
          <Typography color="textSecondary" display="inline" sx={{ pl: 1 }} variant="body2">
            {jobseeker.totalDownloads} Downloads
          </Typography> */}
        </Grid>
      </Grid>
    </Box>
  </Card>
);

JobseekerCard.propTypes = {
  jobseeker: PropTypes.object.isRequired,
};
