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


const Dashboard1 = () => {
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

  const [openDialog, setOpenDialog] = useState(false);
  const [editEarning, setEditEarning] = useState(null);

  const user = { name: "John Doe", profilePhoto: "https://via.placeholder.com/50" };

  const handleOpenDialog = (earning = null) => {
    setEditEarning(earning);
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
    setEditEarning(null);
  };

  const handleSaveEarning = () => {
    if (editEarning?.id) {
      setEarningsHistory(prev => prev.map(e => (e.id === editEarning.id ? editEarning : e)));
    } else {
      setEarningsHistory(prev => [...prev, { ...editEarning, id: prev.length + 1 }]);
    }
    handleCloseDialog();
  };

  const handleDeleteEarning = (id) => {
    setEarningsHistory(prev => prev.filter(e => e.id !== id));
  };

  return (
    <div >
      <UserSidebar />
      <div className="flex-grow-1">
        <Navbar />
        <Container className="mt-4" maxWidth="lg">
          <Grid container spacing={3}>
            {/* Welcome Card */}
            <Grid item xs={12}>
              <Card >
                <CardContent className="d-flex align-items-center" style={{ background: "linear-gradient(158deg, rgba(40,34,70,1) 0%, rgba(30,47,141,1) 100%", color: "white" }}>
                  <Avatar src={user.profilePhoto} alt={user.name} sx={{ width: 56, height: 56, mr: 2 }} />
                  <Typography variant="h5" >Welcome, {user.name}!</Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* My Earnings Section */}
            <Grid item xs={12}>
              <Card >
                <CardContent >
                  <Typography variant="h5">💰 My Earnings</Typography>
                  <Typography variant="h6">Total Earnings: {totalEarnings}</Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Wallets */}
            {Object.entries(wallets).map(([key, value]) => (
              <Grid item xs={12} sm={4} key={key}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">{key === "main" ? "💼 Main Wallet" : key === "reward" ? "🎁 Reward Wallet" : "📢 Campaign Wallet"}</Typography>
                    <Typography variant="body1">{value}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}

            {/* Pending Commissions */}
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6">💰 Pending Commissions</Typography>
                  <Typography variant="body1">Amount: {pendingCommission.amount}</Typography>
                  <Typography variant="body1">Next Payout Date: {pendingCommission.payoutDate}</Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Earnings History with CRUD */}
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6">💰 Earnings History</Typography>
                  <Button variant="contained" onClick={() => handleOpenDialog()}>Add Earning</Button>
                  <TableContainer component={Paper} className="mt-2">
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Date</TableCell>
                          <TableCell>Source</TableCell>
                          <TableCell>Amount</TableCell>
                          <TableCell>Actions</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {earningsHistory.map((earning) => (
                          <TableRow key={earning.id}>
                            <TableCell>{earning.date}</TableCell>
                            <TableCell>{earning.source}</TableCell>
                            <TableCell>{earning.amount}</TableCell>
                            <TableCell>
                              <Button onClick={() => handleOpenDialog(earning)}>Edit</Button>
                              <Button onClick={() => handleDeleteEarning(earning.id)} color="error">Delete</Button>
                            </TableCell>
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

      {/* Dialog Box for CRUD Operations */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>{editEarning ? "Edit Earning" : "Add Earning"}</DialogTitle>
        <DialogContent>
          <TextField fullWidth label="Date" value={editEarning?.date || ""} onChange={(e) => setEditEarning({ ...editEarning, date: e.target.value })} className="mt-2" />
          <TextField fullWidth label="Source" value={editEarning?.source || ""} onChange={(e) => setEditEarning({ ...editEarning, source: e.target.value })} className="mt-2" />
          <TextField fullWidth label="Amount" value={editEarning?.amount || ""} onChange={(e) => setEditEarning({ ...editEarning, amount: e.target.value })} className="mt-2" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSaveEarning} variant="contained" color="primary">Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Dashboard1;
