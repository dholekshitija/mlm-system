import React from "react";
import { Container, Grid, Card, CardContent, Typography, Button, Avatar } from "@mui/material";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import UserSidebar from "../../components/sidebar/UserSidebar";
import Navbar from "../../components/sidebar/Navbar";
import "../../components/sidebar/Dashboard.css";


const Dashboard = () => {
  const [referralCode] = useState("ABC123XYZ");
  const [otpStatus] = useState(true);
  const [kycStatus] = useState(false);
  const [totalEarnings] = useState("$1,250");
  const [teamCount] = useState({ direct: 5, indirect: 15 });
  const [salesCommission] = useState("$300");
  const [referrals] = useState({ active: 10, inactive: 3 });
  const user = { name: "John Doe", profilePhoto: "https://via.placeholder.com/50" };

  return (
    <div >
      <UserSidebar/>
      <div className="flex-grow-1">
        <Navbar/>
        <Container className="mt-4" maxWidth="lg">
          <Grid container spacing={3} justifyContent="center">
            {/* Welcome Card */}
            <Grid item xs={12}>
              <Card >
                <CardContent className="d-flex align-items-center">
                  <Avatar src={user.profilePhoto} alt={user.name} sx={{ width: 56, height: 56, mr: 2 }} />
                  <Typography variant="h5">Welcome, {user.name}!</Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Account Status & OTP */}
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Account Status</Typography>
                  <Typography variant="body1" color={kycStatus ? "success.main" : "warning.main"}>
                    {kycStatus ? "KYC Verified ✅" : "Pending ⏳"}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Daily Login OTP</Typography>
                  <Typography variant="body1" color={otpStatus ? "success.main" : "error.main"}>
                    {otpStatus ? "Valid OTP for today ✅" : "Not Generated ❌"}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Earnings & Sales */}
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Total Earnings</Typography>
                  <Typography variant="h4">{totalEarnings}</Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Referral Code */}
            <Grid item xs={12} sm={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Referral Code</Typography>
                  <Typography variant="body1">{referralCode}</Typography>
                  <CopyToClipboard text={referralCode}>
                    <Button variant="contained" className="mt-2">Copy Code</Button>
                  </CopyToClipboard>
                </CardContent>
              </Card>
            </Grid>

            {/* Team & Referrals */}
            <Grid item xs={12} sm={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Your Team</Typography>
                  <Typography variant="body1">Direct: {teamCount.direct}</Typography>
                  <Typography variant="body1">Indirect: {teamCount.indirect}</Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Referrals</Typography>
                  <Typography variant="body1">Active: {referrals.active}</Typography>
                  <Typography variant="body1">Inactive: {referrals.inactive}</Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Today’s Sales & Commission</Typography>
                  <Typography variant="h4">{salesCommission}</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Dashboard;