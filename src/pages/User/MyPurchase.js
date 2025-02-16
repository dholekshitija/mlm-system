import React, { useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StoreIcon from '@mui/icons-material/Store';
import Navbar from "../../components/sidebar/Navbar";
import UserSidebar from "../../components/sidebar/UserSidebar";
import "../../components/sidebar/Dashboard.css";

const Purchase = () => {
  const [purchasedProducts, setPurchasedProducts] = useState([
    { id: 1, name: "React Mastery Course", type: "Video", link: "https://example.com/video" },
    { id: 2, name: "Fullstack Development PDF", type: "PDF", link: "https://example.com/pdf" },
  ]);

  const [purchaseHistory, setPurchaseHistory] = useState([
    { id: 1, date: "5th Feb 2025", amount: "₹1,999", product: "React Mastery Course" },
    { id: 2, date: "10th Jan 2025", amount: "₹999", product: "Fullstack Development PDF" },
  ]);

  return (
    <div >
      <UserSidebar />
      <div className="flex-grow-1">
        <Navbar />
        <Container className="mt-4" maxWidth="lg">
          <Grid container spacing={3}>
            {/* My Purchases & Product Access */}
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h5">
                    <ShoppingCartIcon/>My Purchases & Product Access</Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Purchased Products List */}
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6"><StoreIcon/> Purchased Products</Typography>
                  <TableContainer component={Paper} className="mt-2">
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Product Name</TableCell>
                          <TableCell>Type</TableCell>
                          <TableCell>Access</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {purchasedProducts.map((product) => (
                          <TableRow key={product.id}>
                            <TableCell>{product.name}</TableCell>
                            <TableCell>{product.type}</TableCell>
                            <TableCell>
                              <Button
                                variant="contained"
                                color="primary"
                                href={product.link}
                                target="_blank"
                              >
                                {product.type === "PDF" ? "Download PDF" : "Watch Video"}
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </CardContent>
              </Card>
            </Grid>

            {/* Purchase More Products */}
            <Grid item xs={12}>
              <Card>
                <CardContent className="text-center">
                  <Typography variant="h6">Want More Products?</Typography>
                  <Button variant="contained" color="success" className="mt-2">
                    Buy Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            {/* Purchase History */}
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Purchase History</Typography>
                  <TableContainer component={Paper} className="mt-2">
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Date</TableCell>
                          <TableCell>Amount</TableCell>
                          <TableCell>Product Name</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {purchaseHistory.map((purchase) => (
                          <TableRow key={purchase.id}>
                            <TableCell>{purchase.date}</TableCell>
                            <TableCell>{purchase.amount}</TableCell>
                            <TableCell>{purchase.product}</TableCell>
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

export default Purchase;
