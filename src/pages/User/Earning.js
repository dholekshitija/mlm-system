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
  TablePagination,
  Paper,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import Navbar from "../../components/sidebar/Navbar";
import UserSidebar from "../../components/sidebar/UserSidebar";
import "../../components/sidebar/Dashboard.css";
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';

const Earning = () => {

  const [pendingCommissions, setPendingCommissions] = useState(0);
  const [payoutDate, setPayoutDate] = useState("");
  const [isActivated, setIsActivated] = useState(false);
  const [ekycVerified, setEkycVerified] = useState(false);
  const [productPurchased, setProductPurchased] = useState(false);
  //const [user, setUser] = useState(null);

  const [totalEarnings, setTotalEarnings] = useState("₹1,25,000");
  const [wallets, setWallets] = useState({
    main: "₹50,000",
    reward: "₹20,000",
    campaign: "₹15,000",
  });
  const [pendingCommission, setPendingCommission] = useState({
    amount: "₹5,000",
    payoutDate: "15th Feb 2025",
  });
  const [earningsHistory, setEarningsHistory] = useState([
    {
      id: 1,
      date: "10th Feb 2025",
      source: "Referral Bonus",
      amount: "₹2,000",
    },
    {
      id: 2,
      date: "8th Feb 2025",
      source: "Sales Commission",
      amount: "₹3,500",
    },
    { id: 3, date: "5th Feb 2025", source: "Admin Reward", amount: "₹1,000" },
  ]);

  const [openDialog, setOpenDialog] = useState(false);
  const [editEarning, setEditEarning] = useState(null);

  const user = {
    name: "John Doe",
    profilePhoto: "https://via.placeholder.com/50",
  };

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


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
      setEarningsHistory((prev) =>
        prev.map((e) => (e.id === editEarning.id ? editEarning : e))
      );
    } else {
      setEarningsHistory((prev) => [
        ...prev,
        { ...editEarning, id: prev.length + 1 },
      ]);
    }
    handleCloseDialog();
  };

  const handleDeleteEarning = (id) => {
    setEarningsHistory((prev) => prev.filter((e) => e.id !== id));
  };

  return (
    <div>
      <UserSidebar />
      <div className="flex-grow-1">
        <Navbar />
        <Container className="mt-4" maxWidth="lg">
          <Grid container spacing={3}>
            {/* Welcome Card */}
            <Grid item xs={12}>
              <Card>
                <CardContent
                  className="d-flex align-items-center"
                  style={{
                    background:
                      "linear-gradient(158deg, rgba(40,34,70,1) 0%, rgba(30,47,141,1) 100%",
                    color: "white",
                  }}
                >
                  <Avatar
                    src={user.profilePhoto}
                    alt={user.name}
                    sx={{ width: 56, height: 56, mr: 2 }}
                  />
                  <Typography variant="h5">Welcome, {user.name}!</Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* My Earnings Section */}
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h5">💰 My Earnings</Typography>
                  <Typography variant="h6">
                    Total Earnings: {totalEarnings}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Wallets */}
            {Object.entries(wallets).map(([key, value]) => (
              <Grid item xs={12} sm={4} key={key}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">
                      {key === "main"
                        ? "💼 Main Wallet"
                        : key === "reward"
                        ? "🎁 Reward Wallet"
                        : "📢 Campaign Wallet"}
                    </Typography>
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
                  <Typography variant="body1">
                    Amount: {pendingCommission.amount}
                  </Typography>
                  <Typography variant="body1">
                    Next Payout Date: {pendingCommission.payoutDate}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Earnings History with CRUD */}
            <Grid item xs={12}>
            <Card>
                <CardContent>
                  <Typography variant="h6">Account Activation</Typography>
                  {isActivated ? (
                    <Typography variant="body1" color="green">
                      <CheckIcon/> Your account is activated.
                    </Typography>
                  ) : (
                    <Typography variant="body1" color="red">
                      <CloseIcon/> Your account is inactive. Purchase required.
                    </Typography>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    // disabled={productPurchased || loading}
                    // onClick={handlePurchase}
                    className="mt-2"
                  >
                    {/* {loading ? "Processing..." : "Purchase Product (₹6000)"} */}
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12}>
            <Card sx={{ backgroundColor: "#9e9e9e", color: "#fff" }}>
                <CardContent>
                  <Typography variant="h6">Referral Status</Typography>
                  {isActivated ? (
                    <Typography variant="body1">
                      <CheckIcon/> You can earn commissions from your referrals.
                    </Typography>
                  ) : (
                    <Typography variant="body1">
                      <CloseIcon/> You can refer people, but won't earn commissions until activation.
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>

      
    </div>
  );
};

export default Earning;
