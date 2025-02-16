import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  Avatar,
  Container,
  Grid2,
} from "@mui/material";
import TreeView from "react-treeview";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-treeview/react-treeview.css";
import UserSidebar from "../../components/sidebar/UserSidebar";
import Navbar from "../../components/sidebar/Navbar";

const SalesCommisions = () => {
  // Dummy Data
  const [sales, setSales] = useState(5000);
  const [commission, setCommission] = useState(1500);
  const [profilePic, setProfilePic] = useState(
    "https://via.placeholder.com/150"
  );
  const [team] = useState([
    { name: "User A", children: [{ name: "User B" }, { name: "User C" }] },
  ]);

  // Handle Profile Photo Change
  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setProfilePic(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <UserSidebar />
      <div className="flex-grow-1">
        <Navbar />

        <Container className="mt-4" maxWidth="lg">
          <Grid2 container spacing={3} justifyContent="center">
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h5">Sales & Commission</Typography>
                  <Typography variant="body1">Daily Sales: ₹{sales}</Typography>
                  <Typography variant="body1">
                    Earned Commission: ₹{commission}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Team Structure */}
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h5">Team Structure</Typography>
                  <TreeView>
                    {team.map((node, i) => (
                      <TreeView key={i} nodeLabel={node.name} defaultCollapsed>
                        {node.children.map((child, j) => (
                          <TreeView key={j} nodeLabel={child.name} />
                        ))}
                      </TreeView>
                    ))}
                  </TreeView>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h5">User Profile Management</Typography>
                  <Avatar
                    src={profilePic}
                    sx={{ width: 100, height: 100, margin: "auto" }}
                  />
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control mt-2"
                    onChange={handleProfileChange}
                  />
                  <Typography variant="body2" color="textSecondary">
                    *KYC Documents cannot be changed
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid2>
        </Container>
      </div>
    </div>
  );
};

export default SalesCommisions;
