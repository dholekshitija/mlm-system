import React, { useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField
} from "@mui/material";
import Navbar from "../../components/sidebar/Navbar";
import UserSidebar from "../../components/sidebar/UserSidebar";
import "../../components/sidebar/Dashboard.css";

const ReferralTeam = () => {
  const [totalEarnings, setTotalEarnings] = useState("₹1,25,000");
  const [wallets, setWallets] = useState({
    main: "₹50,000",
    reward: "₹20,000",
    campaign: "₹15,000"
  });
  const [pendingCommission, setPendingCommission] = useState({ amount: "₹5,000", payoutDate: "15th Feb 2025" });
  const [earningsHistory, setEarningsHistory] = useState([
    { id: 1, date: "10th Feb 2025", source: "Referral Bonus", amount: "₹2,000" },
    { id: 2, date: "8th Feb 2025", source: "Sales Commission", amount: "₹3,500" },
    { id: 3, date: "5th Feb 2025", source: "Admin Reward", amount: "₹1,000" }
  ]);

  const [totalReferrals, setTotalReferrals] = useState({ active: 10, inactive: 5 });
  const [referralCode, setReferralCode] = useState("ABC123XYZ");
  const [directReferrals, setDirectReferrals] = useState([
    { id: 1, name: "Alice Johnson", joinDate: "12th Jan 2025", status: "Active" },
    { id: 2, name: "Bob Smith", joinDate: "20th Jan 2025", status: "Inactive" },
    { id: 3, name: "Charlie Brown", joinDate: "28th Jan 2025", status: "Active" }
  ]);

  const user = { name: "John Doe", profilePhoto: "https://via.placeholder.com/50" };

  const handleCopyReferral = () => {
    navigator.clipboard.writeText(`https://example.com/referral/${referralCode}`);
    alert("Referral link copied!");
  };

  
  return (
    <div>
      <UserSidebar />
      <div className="flex-grow-1">
        <Navbar />
        <Container className="mt-4" maxWidth="lg" >
          <Grid container spacing={3}>
            {/* My Referrals & Team Section */}
            <Grid item xs={12}>
              <Card >
              {/* className="gradientlight" sx={{color:"#ccd1d1"}} */}
                <CardContent className="gradientlight">
                  <Typography variant="h4">👥 My Referrals & Team</Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Total Referrals */}
            <Grid item xs={12} sm={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6">👥 Total Referrals</Typography>
                  <Typography variant="body1">Active: {totalReferrals.active}</Typography>
                  <Typography variant="body1">Inactive: {totalReferrals.inactive}</Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Referral Code & Link */}
            <Grid item xs={12} sm={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6">👥 Referral Code & Link</Typography>
                  <Typography variant="body1">Code: {referralCode}</Typography>
                  <Button variant="contained" onClick={handleCopyReferral} className="mt-2">Copy & Share</Button>
                </CardContent>
              </Card>
            </Grid>

            {/* Direct Referrals */}
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6">👥 Direct Referrals</Typography>
                  <TableContainer component={Paper} className="mt-2">
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell>Join Date</TableCell>
                          <TableCell>Status</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {directReferrals.map((referral) => (
                          <TableRow key={referral.id}>
                            <TableCell>{referral.name}</TableCell>
                            <TableCell>{referral.joinDate}</TableCell>
                            <TableCell>{referral.status}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default ReferralTeam;
